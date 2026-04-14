# @ghs-hazard-pictograms/css

CSS sprite utilities for all GHS chemical hazard pictograms (GHS01–GHS09) and UN transport hazard class pictograms. Import a single stylesheet and use short class names to display any pictogram as a background image.

## Installation

```sh
npm install @ghs-hazard-pictograms/css @ghs-hazard-pictograms/assets
# or
yarn add @ghs-hazard-pictograms/css @ghs-hazard-pictograms/assets
# or
pnpm add @ghs-hazard-pictograms/css @ghs-hazard-pictograms/assets
```

> **Note:** `@ghs-hazard-pictograms/assets` must be installed alongside this package because the CSS file references image files from it.

## Quick start

**1. Import the stylesheet** once in your application entry point:

```ts
import '@ghs-hazard-pictograms/css/sprite.css';
```

Or link it in HTML:

```html
<link rel="stylesheet" href="node_modules/@ghs-hazard-pictograms/css/sprite.css" />
```

**2. Apply a class** to any block-level element sized with `width` and `height`:

```html
<div class="ghs-ghs01" style="width: 64px; height: 64px;" role="img" aria-label="Explosive"></div>
```

```jsx
<div className="ghs-ghs01" style={{ width: 64, height: 64 }} role="img" aria-label="Explosive" />
```

## CSS class reference

### GHS chemical hazard pictograms

| Class        | Pictogram                                      |
| ------------ | ---------------------------------------------- |
| `.ghs-ghs01` | GHS01 Explosive                                |
| `.ghs-ghs02` | GHS02 Flammable                                |
| `.ghs-ghs03` | GHS03 Oxidizing                                |
| `.ghs-ghs04` | GHS04 Compressed Gas                           |
| `.ghs-ghs05` | GHS05 Corrosive                                |
| `.ghs-ghs06` | GHS06 Toxic                                    |
| `.ghs-ghs07` | GHS07 Health Hazard / Hazardous to Ozone Layer |
| `.ghs-ghs08` | GHS08 Serious Health Hazard                    |
| `.ghs-ghs09` | GHS09 Hazardous to the Environment             |

### UN transport hazard class pictograms

| Class          | Pictogram                               |
| -------------- | --------------------------------------- |
| `.ghs-adr-1`   | Divisions 1.1, 1.2, 1.3 — Explosives    |
| `.ghs-adr-1-4` | Division 1.4 — Explosives               |
| `.ghs-adr-1-5` | Division 1.5 — Explosives               |
| `.ghs-adr-1-6` | Division 1.6 — Explosives               |
| `.ghs-adr-2-1` | Division 2.1 — Flammable Gas            |
| `.ghs-adr-2-2` | Division 2.2 — Non-Flammable Gas        |
| `.ghs-adr-2-3` | Division 2.3 — Toxic Gas                |
| `.ghs-adr-3`   | Class 3 — Flammable Liquid              |
| `.ghs-adr-5-1` | Division 5.1 — Oxidizing Substances     |
| `.ghs-adr-5-2` | Division 5.2 — Organic Peroxides        |
| `.ghs-adr-6-1` | Division 6.1 — Toxic Substances         |
| `.ghs-adr-8`   | Class 8 — Corrosive Substances          |
| `.ghs-un-6-2`  | Class 6.2 — Infectious Substances       |
| `.ghs-un-7`    | Class 7 — Radioactive Material          |
| `.ghs-un-8`    | Class 8 (UN) — Corrosive                |
| `.ghs-un-9`    | Class 9 — Miscellaneous Dangerous Goods |

## JavaScript / TypeScript API

In addition to the CSS file, this package exports helpers for looking up class names programmatically.

### `getCssClassName(id)`

```ts
import { getCssClassName } from '@ghs-hazard-pictograms/css';

const cls = getCssClassName('ghs01-explosive');
// → 'ghs-ghs01'
```

Returns the CSS class name for a pictogram slug ID, or `undefined` if not found.

### `pictogramCssClasses`

```ts
import { pictogramCssClasses } from '@ghs-hazard-pictograms/css';

// { 'ghs01-explosive': 'ghs-ghs01', 'ghs02-flammable': 'ghs-ghs02', ... }
```

A read-only map of pictogram slug ID → CSS class name for all 27 pictograms.

## How the sprite works

Each CSS class sets `background-image` to the corresponding SVG from `@ghs-hazard-pictograms/assets`, along with:

```css
background-position: center;
background-repeat: no-repeat;
background-size: contain;
```

The element itself must have an explicit `width` and `height` — the stylesheet does not set dimensions so you stay in control of sizing.

## Related packages

| Package                                                                                        | Description                                                    |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`@ghs-hazard-pictograms/core`](https://www.npmjs.com/package/@ghs-hazard-pictograms/core)     | Raw data, inline SVGs, and lookup helpers (framework-agnostic) |
| [`@ghs-hazard-pictograms/react`](https://www.npmjs.com/package/@ghs-hazard-pictograms/react)   | Ready-to-use React components for each pictogram               |
| [`@ghs-hazard-pictograms/assets`](https://www.npmjs.com/package/@ghs-hazard-pictograms/assets) | Static SVG/PNG/JPG/WebP image files (required peer)            |
| [`@ghs-hazard-pictograms/sprite`](https://www.npmjs.com/package/@ghs-hazard-pictograms/sprite) | SVG `<symbol>` sprite for `<use href>` embedding               |

## Links

- **Docs:** [karlnorling.github.io/ghs-hazard-pictograms](https://karlnorling.github.io/ghs-hazard-pictograms/)
- **Source:** [github.com/karlnorling/ghs-hazard-pictograms](https://github.com/karlnorling/ghs-hazard-pictograms)
- **Issues:** [github.com/karlnorling/ghs-hazard-pictograms/issues](https://github.com/karlnorling/ghs-hazard-pictograms/issues)
