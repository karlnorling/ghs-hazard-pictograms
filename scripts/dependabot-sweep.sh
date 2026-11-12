#!/bin/bash
# Process every open Dependabot PR: age-check it, add a changeset if it touches a
# published package, then merge it once CI is green. Anything stale or conflicted
# is handed back to Dependabot for a rebase.
#
# Run locally in report-only mode with:  DRY_RUN=true bash scripts/dependabot-sweep.sh
#
# Requires: gh authenticated, GH_TOKEN with contents+pull-requests write.
set -euo pipefail

REPO="${GITHUB_REPOSITORY:-$(gh repo view --json nameWithOwner -q .nameWithOwner)}"
DRY_RUN="${DRY_RUN:-false}"
# Floor matching npmMinimalAgeGate in .yarnrc.yml. Dependabot's own `cooldown`
# covers version updates; this re-checks it so *security* update PRs — which
# ignore cooldown — also age in before they are merged unattended.
MIN_AGE_HOURS="${MIN_AGE_HOURS:-168}"

merged=0
waiting=0
held=0
rebased=0

# Remembered so the changeset step can return here after checking out a PR
# branch. Prefer the branch name over a bare SHA, which would leave the repo on
# a detached HEAD after a local run.
START_REF=$(git symbolic-ref --short -q HEAD || git rev-parse HEAD)

# This script checks out PR branches and force-returns to START_REF, which
# would discard uncommitted work. Refuse to run in a dirty tree so a local
# rehearsal cannot destroy in-progress edits.
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
  echo "error: working tree has uncommitted changes." >&2
  echo "       This script force-checks-out branches and would discard them." >&2
  echo "       Commit or stash first." >&2
  exit 1
fi

# Copied aside so the PR-branch checkout cannot shadow it.
GENERATOR=$(mktemp)
cp scripts/dependabot-changeset.mjs "$GENERATOR"
trap 'rm -f "$GENERATOR"' EXIT

note() { printf '  %s\n' "$1"; }

PR_FIELDS='number,title,createdAt,headRefName,mergeable,mergeStateStatus,statusCheckRollup,files'

# GitHub computes mergeability lazily: the first query for a PR returns
# mergeable=UNKNOWN and merely *schedules* the computation server-side. A cold
# sweep that trusts the first answer sees UNKNOWN for every PR and merges
# nothing, so poll until it resolves.
fetch_pr() {
  local pr="$1" attempt data mergeable
  for attempt in 1 2 3 4 5 6; do
    data=$(gh pr view "$pr" --repo "$REPO" --json "$PR_FIELDS")
    mergeable=$(jq -r '.mergeable' <<<"$data")
    if [[ "$mergeable" != "UNKNOWN" ]]; then
      printf '%s' "$data"
      return 0
    fi
    sleep 2
  done
  printf '%s' "$data"
}

run() {
  if [[ "$DRY_RUN" == "true" ]]; then
    note "DRY RUN would: $*"
    return 0
  fi
  "$@"
}

prs=$(gh pr list --repo "$REPO" --author app/dependabot --state open \
  --limit 100 --json number -q '.[].number' | sort -n)

if [[ -z "$prs" ]]; then
  echo "No open Dependabot PRs."
  exit 0
fi

# Prime the lazy mergeability computation for every PR up front, so that by the
# time the main loop reaches each one GitHub has usually already answered.
for pr in $prs; do
  gh pr view "$pr" --repo "$REPO" --json mergeable > /dev/null 2>&1 || true
done

for pr in $prs; do
  data=$(fetch_pr "$pr")

  title=$(jq -r '.title' <<<"$data")
  mergeable=$(jq -r '.mergeable' <<<"$data")
  state=$(jq -r '.mergeStateStatus' <<<"$data")
  created=$(jq -r '.createdAt' <<<"$data")

  echo "PR #$pr — $title"
  note "mergeable=$mergeable state=$state"

  # --- Age gate -------------------------------------------------------------
  # Use the PR's own age as the proxy for release age: Dependabot opens the PR
  # as soon as it is willing to, so time-since-open is time-since-eligible.
  age_hours=$(( ( $(date -u +%s) - $(date -u -d "$created" +%s 2>/dev/null \
    || date -u -j -f '%Y-%m-%dT%H:%M:%SZ' "$created" +%s) ) / 3600 ))
  if (( age_hours < MIN_AGE_HOURS )); then
    note "HELD — ${age_hours}h old, needs ${MIN_AGE_HOURS}h"
    held=$((held + 1))
    continue
  fi
  note "age ${age_hours}h — past the ${MIN_AGE_HOURS}h floor"

  # --- Branch freshness -----------------------------------------------------
  # Conflicts are read from `mergeable`, not `mergeStateStatus`: the former is
  # the field that reliably resolves, the latter can stay UNKNOWN indefinitely
  # and is only used here for the BEHIND hint.
  if [[ "$mergeable" == "CONFLICTING" ]]; then
    note "CONFLICTED — asking Dependabot to recreate"
    run gh pr comment "$pr" --repo "$REPO" --body "@dependabot recreate"
    rebased=$((rebased + 1))
    continue
  fi

  if [[ "$state" == "BEHIND" ]]; then
    note "BEHIND main — asking Dependabot to rebase"
    run gh pr comment "$pr" --repo "$REPO" --body "@dependabot rebase"
    rebased=$((rebased + 1))
    continue
  fi

  # --- Changeset, only when a published package's manifest moved ------------
  changed=$(jq -r '.files[].path' <<<"$data")
  branch=$(jq -r '.headRefName' <<<"$data")

  if [[ -n "$(grep -E '^packages/@ghs-hazard-pictograms/[^/]+/package\.json$' <<<"$changed" || true)" ]]; then
    if gh api "repos/$REPO/contents/.changeset?ref=$branch" -q '.[].name' \
      | grep -q "dependabot-pr-${pr}.md"; then
      note "changeset already present"
    else
      note "published manifest touched — checking whether it is consumer-facing"
      git fetch -q origin "$branch"
      git checkout -q -B "sweep-probe-$pr" "origin/$branch"
      # Run the generator from the sweep's own checkout, not the PR branch:
      # a PR branched before this logic shipped still carries the old script.
      created_file=$(BASE_REF=origin/main node "$GENERATOR" "$pr" $changed || true)
      if [[ -n "$created_file" ]]; then
        if [[ "$DRY_RUN" == "true" ]]; then
          note "DRY RUN would: commit $created_file to $branch, then merge next sweep"
          rm -f "$created_file"
        else
          git add "$created_file"
          git -c user.name='github-actions[bot]' \
              -c user.email='github-actions[bot]@users.noreply.github.com' \
              commit -q -m "chore: add changeset for #${pr}"
          git push -q origin "HEAD:$branch"
          note "changeset pushed, CI will re-run on the new commit"
        fi
        git checkout -q --force "$START_REF"
        git branch -q -D "sweep-probe-$pr" 2>/dev/null || true
        waiting=$((waiting + 1))
        continue
      fi
      git checkout -q --force "$START_REF"
      git branch -q -D "sweep-probe-$pr" 2>/dev/null || true
      # No consumer-facing change, so no changeset and no release. Fall through
      # to the merge checks rather than parking the PR in WAITING forever,
      # which is what an unconditional `continue` here would do.
      note "devDependency-only — no changeset needed, continuing to merge checks"
    fi
  fi

  # --- CI status ------------------------------------------------------------
  pending=$(jq '[.statusCheckRollup[]?
    | select((.status? // "") as $s | $s == "QUEUED" or $s == "IN_PROGRESS" or $s == "PENDING")
    , select((.state? // "") == "PENDING")] | length' <<<"$data")
  failing=$(jq '[.statusCheckRollup[]?
    | select((.conclusion? // "") as $c | $c == "FAILURE" or $c == "TIMED_OUT"
             or $c == "CANCELLED" or $c == "ACTION_REQUIRED" or $c == "STARTUP_FAILURE")
    , select((.state? // "") as $s | $s == "FAILURE" or $s == "ERROR")] | length' <<<"$data")
  total=$(jq '[.statusCheckRollup[]?] | length' <<<"$data")

  if (( failing > 0 )); then
    note "FAILING — $failing check(s) red, leaving for review"
    held=$((held + 1))
    continue
  fi
  if (( total == 0 || pending > 0 )); then
    note "WAITING — $pending check(s) still running (of $total)"
    waiting=$((waiting + 1))
    continue
  fi
  if [[ "$mergeable" != "MERGEABLE" ]]; then
    note "WAITING — GitHub reports mergeable=$mergeable"
    waiting=$((waiting + 1))
    continue
  fi

  note "GREEN — merging ($total checks passed)"
  # Every dependency PR edits yarn.lock, so each merge can invalidate the next
  # one in this same sweep. A rejected merge is expected, not fatal: hand that
  # PR to Dependabot for a rebase and keep going.
  if run gh pr merge "$pr" --repo "$REPO" --merge --delete-branch; then
    merged=$((merged + 1))
  else
    note "merge rejected (likely now conflicting) — asking Dependabot to rebase"
    run gh pr comment "$pr" --repo "$REPO" --body "@dependabot rebase" || true
    rebased=$((rebased + 1))
  fi
done

echo
echo "Swept: $merged merged, $waiting waiting, $held held, $rebased rebase requested"

if [[ -n "${GITHUB_STEP_SUMMARY:-}" ]]; then
  {
    echo "### Dependabot sweep"
    echo
    echo "| merged | waiting | held | rebase requested |"
    echo "|---|---|---|---|"
    echo "| $merged | $waiting | $held | $rebased |"
  } >> "$GITHUB_STEP_SUMMARY"
fi
