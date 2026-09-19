---
'@ghs-hazard-pictograms/core': minor
'@ghs-hazard-pictograms/react': minor
'@ghs-hazard-pictograms/vue': minor
'@ghs-hazard-pictograms/elements': minor
'@ghs-hazard-pictograms/css': patch
---

Fix scaling, duplicate IDs and accessibility of rendered pictograms.

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
