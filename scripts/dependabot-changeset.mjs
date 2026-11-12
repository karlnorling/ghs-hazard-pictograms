#!/usr/bin/env node
// Emit a patch changeset when a dependency PR actually changes a *published*
// package's manifest.
//
// Most dependency bumps in this repo touch only devDependencies, the lockfile,
// or the private apps/*, none of which alter what consumers download — those
// get no changeset and therefore no release. The exception is a bump that
// rewrites a published package's own `dependencies`/`peerDependencies`, which
// does change the installed tree and so needs to ship.
//
// Usage: node scripts/dependabot-changeset.mjs <pr-number> <changed-file>...
// Prints the created changeset path, or nothing if none was needed.

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const PUBLISHED_DIR = 'packages/@ghs-hazard-pictograms/';

const [prNumber, ...changedFiles] = process.argv.slice(2);

if (!prNumber) {
  console.error('usage: dependabot-changeset.mjs <pr-number> <changed-file>...');
  process.exit(2);
}

const manifests = changedFiles.filter(
  (file) => file.startsWith(PUBLISHED_DIR) && file.endsWith('/package.json'),
);

const released = [];

for (const manifest of manifests) {
  let pkg;
  try {
    pkg = JSON.parse(readFileSync(resolve(manifest), 'utf8'));
  } catch {
    continue; // Deleted or unreadable in this checkout — nothing to release.
  }
  if (pkg.private || !pkg.name) continue;
  released.push(pkg.name);
}

if (released.length === 0) {
  process.exit(0);
}

const frontmatter = released.map((name) => `'${name}': patch`).join('\n');
const path = `.changeset/dependabot-pr-${prNumber}.md`;

writeFileSync(path, `---\n${frontmatter}\n---\n\nUpdate dependencies (#${prNumber}).\n`, 'utf8');

console.log(path);
