#!/bin/bash
# Publish every public workspace package whose version is not on the registry,
# with the npm CLI so the npm OIDC exchange (trusted publishing) and provenance work.
set -euo pipefail

# changesets/action v2 does not parse stdout for "New tag:" lines the way v1
# did. It passes a file path in CHANGESETS_OUTPUT and reads newline-delimited
# JSON from it, one object per published package:
#
#   {"type":"git-tag","tag":"<pkg>@<version>","packageName":"<pkg>"}
#
# Without that file the action logs "GitHub releases and git tags cannot be
# created without this output" and skips both. The file must exist even when
# nothing is published, or the read itself fails. Unset when this script is run
# by hand, outside the action.
if [ -n "${CHANGESETS_OUTPUT:-}" ]; then
  : > "$CHANGESETS_OUTPUT"
fi

# Appends one git-tag event. `packageName` must match the workspace package
# exactly; the action throws if it cannot resolve it.
record_published() {
  [ -n "${CHANGESETS_OUTPUT:-}" ] || return 0
  printf '{"type":"git-tag","tag":"%s@%s","packageName":"%s"}\n' "$1" "$2" "$1" \
    >> "$CHANGESETS_OUTPUT"
}

for dir in packages/@ghs-hazard-pictograms/*/; do
  [ -f "${dir}package.json" ] || continue
  name=$(node -p "require('./${dir}package.json').name")
  version=$(node -p "require('./${dir}package.json').version")
  private=$(node -p "require('./${dir}package.json').private || false")
  [ "$private" = "true" ] && continue
  if npm view "${name}@${version}" version &>/dev/null; then
    echo "Skipping ${name}@${version} (already published)"
  else
    echo "Publishing ${name}@${version}..."
    (cd "${dir}" && npm publish --provenance --access public)
    record_published "$name" "$version"
  fi
done

# Create the git tags locally; the action pushes the ones recorded above and
# opens a GitHub release for each.
yarn changeset tag
