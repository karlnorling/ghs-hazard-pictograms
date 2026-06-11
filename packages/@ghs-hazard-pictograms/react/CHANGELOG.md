# @ghs-hazard-pictograms/react

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

## 1.1.1

### Patch Changes

- ce70349: Fix SVG rendering issues in PictogramById renderers

  - Scope internal SVG IDs with the pictogram slug to prevent DOM collisions when multiple pictograms appear on the same page (Inkscape-generated SVGs share IDs like `layer1` and `base`)
  - Switch body regex to greedy `[\s\S]*` so the full SVG content is captured in complex nested documents
  - Strip `px` suffix from width/height before using as defaults

## 1.1.0

### Minor Changes

- 991c75f: Add `PictogramById` component for data-driven rendering by slug ID

### Patch Changes

- e1e7c35: Improve npm descriptions and keywords for better discoverability.

  All packages now mention ADR/UN transport pictograms in their description
  (previously only GHS was mentioned, omitting half the library). Added
  high-value keywords across all packages: `chemical-safety`, `clp`,
  `dangerous-goods`, `hazmat`, `labeling`, `sds`. Package-specific additions:
  `core` gains `ghs-pictogram`, `registry`; `css` gains `css-sprite`, `vanilla`;
  `react` gains `accessible`, `jsx`, `react-component`, `tsx`, `typescript`;
  `sprite` gains `inline-svg`, `svg-sprite`; `assets` gains `jpg`.

- Updated dependencies [e1e7c35]
  - @ghs-hazard-pictograms/core@1.0.5

## 1.0.6

### Patch Changes

- 0bac606: Fix dist output structure: remove `paths` alias that caused core source to be compiled into each package.

  Previously, a TypeScript `paths` alias pointed `tsc` directly at `@ghs-hazard-pictograms/core`'s source files. This caused core to be compiled into each package's own `dist/`, nesting output under `dist/cjs/react/src/` and `dist/cjs/core/src/` instead of the expected flat `dist/cjs/`. The published tarballs were roughly 3× larger than necessary and shipped duplicate copies of the core pictogram data.

  Each package now resolves `@ghs-hazard-pictograms/core` through its compiled declarations in `node_modules`, and an explicit `rootDir: "./src"` ensures output lands directly in `dist/cjs/` and `dist/esm/`.

## 1.0.5

### Patch Changes

- a601b2c: Fix description truncation applied after HTML escaping instead of before.

  Previously, the 300-character limit on default description text was applied after HTML-escaping, causing escape sequences like `&amp;` to consume multiple characters of the budget. The truncation now happens before escaping so the limit applies to visible characters.

- 8d72b26: Fix duplicate `width`/`height` attributes on the `<svg>` element when `width` or `height` props are passed.

  Previously the original SVG dimensions were included in the static attribute string, and consumer-supplied values were appended, producing invalid HTML with duplicate attributes. Width and height are now always emitted once, falling back to the original SVG dimensions when no prop is supplied.

- 58bd956: HTML-escape `title` and `description` props before injecting into SVG markup.

  Previously, values passed to these props were interpolated directly into an HTML string passed to `dangerouslySetInnerHTML`, allowing consumers to inject arbitrary HTML (XSS). Values are now escaped with `&amp;`, `&lt;`, `&gt;`, and `&quot;` substitutions at render time.

- 47f4706: Add test coverage for `title`, `description`, `aria-label`, `width`, and `height` props on React pictogram components, including XSS regression tests and a duplicate-attribute regression test for `width`/`height`.

## 1.0.4

### Patch Changes

- Include package.json in the published files list for all packages.

  Explicitly listing package.json in the `files` field ensures the manifest is always present in the npm tarball, which is required for package resolution, exports map evaluation, and tooling that reads package metadata directly from the installed package directory.

- Updated dependencies
  - @ghs-hazard-pictograms/core@1.0.4

## 1.0.3

### Patch Changes

- Add repository, homepage, bugs, and license fields to all package manifests.

  Each package now declares:

  - `homepage` pointing to the GitHub Pages documentation site at karlnorling.github.io/ghs-hazard-pictograms
  - `repository` with the GitHub URL and the per-package `directory` path for monorepo tooling
  - `bugs` linking to the GitHub issues tracker
  - `license` set to MIT

  README files updated with a Links section covering docs, source, and issues.

- Updated dependencies
  - @ghs-hazard-pictograms/core@1.0.3

## 1.0.2

### Patch Changes

- Add npm keywords and include README.md in published files for all packages.

  Keywords cover GHS hazard pictogram terminology, chemical safety standards, transport/UN/ADR classifications, and package-specific terms (react, css, svg, sprite, etc.) to improve discoverability on npmjs.org.

- Updated dependencies
  - @ghs-hazard-pictograms/core@1.0.2

## 1.0.1

### Patch Changes

- Add per-package README files targeted at npmjs.org documentation.

  Each package now ships a README with installation instructions, quick-start examples, full API reference, and links to sibling packages.

- Updated dependencies
  - @ghs-hazard-pictograms/core@1.0.1

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

### Patch Changes

- Updated dependencies [33299a2]
  - @ghs-hazard-pictograms/core@1.0.0
