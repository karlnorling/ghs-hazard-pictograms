#!/bin/bash
set -euo pipefail

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
  fi
done

yarn changeset tag
