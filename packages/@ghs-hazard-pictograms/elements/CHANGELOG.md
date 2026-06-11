# @ghs-hazard-pictograms/elements

## 1.2.1

### Patch Changes

- 04d3df1: Replace `workspace:*` with real version ranges for the `@ghs-hazard-pictograms/core` dependency.

  The npm CLI does not rewrite Yarn's `workspace:` protocol before publishing, so the specifier leaked into published manifests and caused `EUNSUPPORTEDPROTOCOL` errors for npm users (same root cause as karlnorling/iso-safety-signs#9).

## 1.2.0

### Minor Changes

- 4ce0743: Add new transport pictograms: Division 4.1, 4.2, 4.3 (flammable solids) and ADR 7A, 7B, 7C, 7E (radioactive). Fixes scraper to capture all 30 pictograms from Wikipedia (was 24). Class 7 is now correctly split into four separate ADR entries with individual SVGs.

### Patch Changes

- Updated dependencies [4ce0743]
  - @ghs-hazard-pictograms/core@1.1.0

## 1.1.0

### Minor Changes

- 89e0f0a: Add Web Components (Custom Elements) package with named elements and GhsPictogram

### Patch Changes

- ce70349: Fix SVG rendering issues in PictogramById renderers

  - Scope internal SVG IDs with the pictogram slug to prevent DOM collisions when multiple pictograms appear on the same page (Inkscape-generated SVGs share IDs like `layer1` and `base`)
  - Switch body regex to greedy `[\s\S]*` so the full SVG content is captured in complex nested documents
  - Strip `px` suffix from width/height before using as defaults
