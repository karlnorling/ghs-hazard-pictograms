---
'@ghs-hazard-pictograms/core': patch
'@ghs-hazard-pictograms/css': patch
'@ghs-hazard-pictograms/elements': patch
'@ghs-hazard-pictograms/react': patch
'@ghs-hazard-pictograms/vue': patch
---

Fix `ERR_MODULE_NOT_FOUND` when importing the ESM build in Node. Relative imports in `dist/esm` now end in `.js`, as Node's ESM loader requires. Bundlers were unaffected.
