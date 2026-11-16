# @ghs-hazard-pictograms/elements

## 2.0.1

### Patch Changes

- 097d651: Fix `ERR_MODULE_NOT_FOUND` when importing the ESM build in Node. Relative imports in `dist/esm` now end in `.js`, as Node's ESM loader requires. Bundlers were unaffected.
- Updated dependencies [097d651]
  - @ghs-hazard-pictograms/core@2.0.1

## 2.0.0

### Major Changes

- d2475ee: **Breaking:** GHS07 is renamed from "Health Hazard/Hazardous to Ozone Layer" to
  "Health Hazard/Hazardous to the Atmospheric System", following the upstream
  source. Because ids and component names are derived from the name, this renames:

  - id `ghs07-health-hazard-hazardous-to-ozone-layer` →
    `ghs07-health-hazard-hazardous-to-the-atmospheric-system`
  - React/Vue `Ghs07HealthHazardHazardousToOzoneLayer` →
    `Ghs07HealthHazardHazardousToTheAtmosphericSystem`
  - the matching custom element and sprite id

  `getPictogramByCode('GHS07')` is unaffected and is the stable way to reach this
  pictogram.

### Minor Changes

- d2475ee: Add the four ADR transport marks — marine pollutant (5.2.1.6), fumigation
  warning (5.5.2.3), limited quantity (3.4.7) and package orientation arrows
  (5.2.1.10) — under a new `transport_marks` category.

  ADR separates labels (the numbered class diamonds) from marks, and only the
  labels appear on the Wikipedia page this registry is built from, so the marks
  are curated in `data/extra-pictograms.json`. All four are public domain. Marks
  carry an empty `code` because ADR does not number them.

### Patch Changes

- Updated dependencies [d2475ee]
- Updated dependencies [d2475ee]
- Updated dependencies [c581b5f]
  - @ghs-hazard-pictograms/core@2.0.0

## 1.3.0

### Minor Changes

- 02159c2: Fix scaling, duplicate IDs and accessibility of rendered pictograms.

  - Every SVG now has a `viewBox`. Nine transport pictograms (Divisions 1.1–1.6, 2.1, 2.2, 4.3, 5.2 and Class 3) had none, so setting `width`/`height` clipped them instead of scaling.
  - `Pictogram.svg` in core is now the SVGO-optimised SVG, as documented, instead of the raw Wikimedia file (XML prolog, Inkscape metadata). `PictogramById` / `<ghs-pictogram>` therefore render the same markup and default size as the named components.
  - `<title>`/`<desc>` IDs are unique per rendered instance (React `useId`, a per-instance counter in Vue and custom elements), so several copies of one pictogram on a page no longer share IDs and `aria-labelledby` points at the right title.
  - `aria-label` now labels the `<svg>` directly (replacing `aria-labelledby`) instead of sitting on the `display: contents` wrapper, where screen readers ignored it. Custom elements observe `aria-label` too.
  - Vue components keep string and array `style` attributes instead of dropping them.
  - `defineCustomElements(prefix)` can be called with several prefixes; it no longer throws `NotSupportedError` after the default registration.
  - Custom elements keep a `display` value you set inline and render only once connected.
  - Descriptions are no longer truncated to 300 characters (which cut GHS02 and GHS08 mid-sentence).
  - Core exports the shared rendering helpers (`splitSvg`, `renderSvg`, `scopeSvgIds`, `escapeHtml`); `getAllPictograms()` returns a copy.
  - Removed the stale, never-exported `Class7` component files.

### Patch Changes

- Updated dependencies [02159c2]
  - @ghs-hazard-pictograms/core@1.2.0

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
