# @ghs-hazard-pictograms/react

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
