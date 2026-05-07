---
"@ghs-hazard-pictograms/react": patch
"@ghs-hazard-pictograms/css": patch
---

Fix dist output structure: remove `paths` alias that caused core source to be compiled into each package.

Previously, a TypeScript `paths` alias pointed `tsc` directly at `@ghs-hazard-pictograms/core`'s source files. This caused core to be compiled into each package's own `dist/`, nesting output under `dist/cjs/react/src/` and `dist/cjs/core/src/` instead of the expected flat `dist/cjs/`. The published tarballs were roughly 3× larger than necessary and shipped duplicate copies of the core pictogram data.

Each package now resolves `@ghs-hazard-pictograms/core` through its compiled declarations in `node_modules`, and an explicit `rootDir: "./src"` ensures output lands directly in `dist/cjs/` and `dist/esm/`.
