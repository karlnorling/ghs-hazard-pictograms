---
'@ghs-hazard-pictograms/react': patch
'@ghs-hazard-pictograms/vue': patch
'@ghs-hazard-pictograms/elements': patch
---

Fix SVG rendering issues in PictogramById renderers

- Scope internal SVG IDs with the pictogram slug to prevent DOM collisions when multiple pictograms appear on the same page (Inkscape-generated SVGs share IDs like `layer1` and `base`)
- Switch body regex to greedy `[\s\S]*` so the full SVG content is captured in complex nested documents
- Strip `px` suffix from width/height before using as defaults
