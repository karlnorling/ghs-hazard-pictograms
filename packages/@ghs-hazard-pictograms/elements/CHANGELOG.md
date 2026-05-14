# @ghs-hazard-pictograms/elements

## 1.1.0

### Minor Changes

- 89e0f0a: Add Web Components (Custom Elements) package with named elements and GhsPictogram

### Patch Changes

- ce70349: Fix SVG rendering issues in PictogramById renderers

  - Scope internal SVG IDs with the pictogram slug to prevent DOM collisions when multiple pictograms appear on the same page (Inkscape-generated SVGs share IDs like `layer1` and `base`)
  - Switch body regex to greedy `[\s\S]*` so the full SVG content is captured in complex nested documents
  - Strip `px` suffix from width/height before using as defaults
