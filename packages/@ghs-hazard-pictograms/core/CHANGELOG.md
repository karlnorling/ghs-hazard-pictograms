# @ghs-hazard-pictograms/core

## 1.0.2

### Patch Changes

- Add npm keywords and include README.md in published files for all packages.

  Keywords cover GHS hazard pictogram terminology, chemical safety standards, transport/UN/ADR classifications, and package-specific terms (react, css, svg, sprite, etc.) to improve discoverability on npmjs.org.

## 1.0.1

### Patch Changes

- Add per-package README files targeted at npmjs.org documentation.

  Each package now ships a README with installation instructions, quick-start examples, full API reference, and links to sibling packages.

## 1.0.0

### Major Changes

- 33299a2: Initial public release of the `@ghs-hazard-pictograms` package family.

  ## @ghs-hazard-pictograms/core

  Typed registry and lookup helpers for all GHS hazard pictograms.
  - `getAllPictograms()` — returns all 27 pictograms (9 GHS + 18 transport)
  - `getGHSPictograms()` — returns the 9 core GHS chemical pictograms (GHS01–GHS09)
  - `getPictogram(id)` — fetch a single pictogram by slug (e.g. `"ghs01-explosive"`)
  - `getPictogramsByCategory(category)` — filter by `physical_hazards`, `health_hazards`, `environmental_hazards`, `transport`, etc.
  - Full `Pictogram` type with inline SVG string, Wikipedia description, and asset paths for PNG/JPG/WebP at five sizes (240, 512, 768, 1024, 2048 px)

  ## @ghs-hazard-pictograms/react

  Ready-to-use React components for every GHS and transport pictogram.
  - One named component per pictogram (e.g. `Ghs01Explosive`, `Ghs06Toxic`)
  - Renders an accessible `<span>` with the SVG injected via `dangerouslySetInnerHTML`
  - Props: `width`, `height`, `title`, `description`, `className`, `style`, `aria-label`
  - Zero runtime dependencies beyond React ≥ 18

  ## @ghs-hazard-pictograms/css

  CSS sprite sheet and JavaScript helpers for background-image–based display.
  - `sprite.css` — 27 short, valid CSS class selectors (`.ghs-ghs01`–`.ghs-ghs09`, `.ghs-adr-*`, `.ghs-un-*`) using `background-image: url(…)` with `background-size: contain`
  - `getCssClassName(id)` — resolves a pictogram slug to its CSS class name
  - `pictogramCssClasses` — map of all slug → class name entries
  - Validated with stylelint (`stylelint-config-standard`)

  ## @ghs-hazard-pictograms/assets

  Static image assets for all pictograms in every format.
  - SVG (original + five resized copies), PNG, JPG, and WebP at 240, 512, 768, 1024, and 2048 px
  - 9 core GHS chemical pictograms and 18 ADR/UN transport pictograms
  - Asset paths exposed via `Pictogram.assets` in `@ghs-hazard-pictograms/core`

  ## @ghs-hazard-pictograms/sprite

  SVG symbol sprite sheet for `<use href="#id">` based embedding.
  - Single `sprite.svg` file containing all pictograms as `<symbol>` elements
  - `sprite-ids.json` — machine-readable list of all symbol IDs
