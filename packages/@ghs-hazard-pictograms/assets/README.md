# @ghs-hazard-pictograms/assets

Static image assets for all GHS chemical hazard pictograms (GHS01–GHS09) and UN transport hazard class pictograms. Every pictogram is provided as an optimised SVG plus raster exports at five sizes in PNG, JPEG, and WebP.

This package is a collection of static files with no JavaScript runtime. It is consumed by `@ghs-hazard-pictograms/css` and can be used directly in any project that needs the raw image files.

## Installation

```sh
npm install @ghs-hazard-pictograms/assets
# or
yarn add @ghs-hazard-pictograms/assets
# or
pnpm add @ghs-hazard-pictograms/assets
```

## File formats and sizes

| Format | Sizes (px²)                        |
| ------ | ---------------------------------- |
| SVG    | — (vector, resolution-independent) |
| PNG    | 240, 512, 768, 1024, 2048          |
| JPEG   | 240, 512, 768, 1024, 2048          |
| WebP   | 240, 512, 768, 1024, 2048          |

## Directory structure

```
assets/
  physical_hazards_pictograms/
    ghs01_explosive/
      GHS-pictogram-explos.svg
      GHS-pictogram-explos-240.png
      GHS-pictogram-explos-512.png
      ...
    ghs02_flammable/
    ghs03_oxidizing/
    ghs04_compressed_gas/
    ghs05_corrosive/
  health_hazards_pictograms/
    ghs06_toxic/
    ghs07_health_hazard/
    ghs08_serious_health_hazard/
  environmental_hazards_pictograms/
    ghs09_hazardous_to_environment/
  transport_pictograms/
    ADR_1.svg          (Divisions 1.1–1.3)
    ADR_1.4.svg
    ADR_1.5.svg
    ADR_1.6.svg
    ADR_2.1.svg
    ADR_2.2.svg
    ADR_2.3.svg
    ADR_3.svg
    ADR_5.1.svg
    ADR_5.2.svg
    ADR_6.1.svg
    ADR_8.svg
    UN_transport_pictogram_-_6.2.svg
    UN_transport_pictogram_-_7.svg
    UN_transport_pictogram_-_8.svg
    UN_transport_pictogram_-_9.svg
    ...
```

## Usage

### In a bundler (webpack, Vite, etc.)

```ts
import explosiveSvg from '@ghs-hazard-pictograms/assets/assets/physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg';

const img = document.createElement('img');
img.src = explosiveSvg;
```

### In HTML

```html
<img
  src="node_modules/@ghs-hazard-pictograms/assets/assets/physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg"
  width="64"
  height="64"
  alt="GHS01 Explosive"
/>
```

### With a CDN

If your bundler copies `node_modules` assets to a public directory, reference them via the resolved path. For example with Vite's `public/` copy or a CDN that hosts your `node_modules`:

```html
<img
  src="/assets/ghs-hazard-pictograms/assets/physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos-512.png"
/>
```

### Looking up asset paths via `@ghs-hazard-pictograms/core`

If you need to resolve asset paths programmatically:

```ts
import { getPictogram } from '@ghs-hazard-pictograms/core';

const p = getPictogram('ghs01-explosive')!;
console.log(p.assets.svg); // relative SVG path
console.log(p.assets.png[512]); // relative path to 512px PNG
console.log(p.assets.webp[1024]); // relative path to 1024px WebP
```

## Related packages

| Package                                                                                        | Description                                                          |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`@ghs-hazard-pictograms/core`](https://www.npmjs.com/package/@ghs-hazard-pictograms/core)     | Raw data, inline SVGs, and lookup helpers (framework-agnostic)       |
| [`@ghs-hazard-pictograms/react`](https://www.npmjs.com/package/@ghs-hazard-pictograms/react)   | Ready-to-use React components (inline SVG, no external files needed) |
| [`@ghs-hazard-pictograms/css`](https://www.npmjs.com/package/@ghs-hazard-pictograms/css)       | CSS sprite sheet that references these asset files                   |
| [`@ghs-hazard-pictograms/sprite`](https://www.npmjs.com/package/@ghs-hazard-pictograms/sprite) | SVG `<symbol>` sprite for `<use href>` embedding                     |

## Links

- **Docs:** [karlnorling.github.io/ghs-hazard-pictograms](https://karlnorling.github.io/ghs-hazard-pictograms/)
- **Source:** [github.com/karlnorling/ghs-hazard-pictograms](https://github.com/karlnorling/ghs-hazard-pictograms)
- **Issues:** [github.com/karlnorling/ghs-hazard-pictograms/issues](https://github.com/karlnorling/ghs-hazard-pictograms/issues)
