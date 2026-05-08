# @ghs-hazard-pictograms/elements

Framework-agnostic Web Components (Custom Elements) for all GHS chemical hazard pictograms (GHS01–GHS09) and UN transport hazard class pictograms. Each element renders an optimised inline SVG with full accessibility support. Zero runtime dependencies beyond standard DOM APIs.

## Requirements

A browser or environment that supports the [Custom Elements v1](https://caniuse.com/custom-elementsv1) API (all modern browsers).

## Installation

```sh
npm install @ghs-hazard-pictograms/elements
# or
yarn add @ghs-hazard-pictograms/elements
# or
pnpm add @ghs-hazard-pictograms/elements
```

## Quick start

Register all elements once, then use them in any HTML or template:

```ts
import { defineCustomElements } from '@ghs-hazard-pictograms/elements';
defineCustomElements();
```

```html
<ghs-ghs01-explosive width="64" height="64"></ghs-ghs01-explosive>
<ghs-ghs06-toxic width="64" title="Toxic substance"></ghs-ghs06-toxic>
```

## Attributes

Every named element accepts the same attributes:

| Attribute     | Default                      | Description                                |
| ------------- | ---------------------------- | ------------------------------------------ |
| `width`       | SVG natural width            | Width applied to the `<svg>` element       |
| `height`      | SVG natural height           | Height applied to the `<svg>` element      |
| `title`       | Pictogram name               | Accessible `<title>` injected into the SVG |
| `description` | Wikipedia hazard description | Accessible `<desc>` injected into the SVG  |

The element itself has `style="display:contents"` so it is transparent to layout.

## Generic element

`<ghs-pictogram>` renders any pictogram by slug ID — useful when the ID comes from an API response or user input rather than being known at markup-write time.

```html
<ghs-pictogram pictogram-id="ghs01-explosive" width="64"></ghs-pictogram>
<ghs-pictogram pictogram-id="division-2-3" width="64"></ghs-pictogram>
```

The `pictogram-id` attribute accepts any slug used by `@ghs-hazard-pictograms/core`. The element renders nothing for unrecognised IDs.

> **Note:** `pictogram-id` is used instead of `id` to avoid overwriting the element's standard DOM `id`.

## GHS chemical hazard pictograms

| Element tag                                        | GHS code | Hazard                                   |
| -------------------------------------------------- | -------- | ---------------------------------------- |
| `ghs-ghs01-explosive`                              | GHS01    | Explosive                                |
| `ghs-ghs02-flammable`                              | GHS02    | Flammable                                |
| `ghs-ghs03-oxidizing`                              | GHS03    | Oxidizing                                |
| `ghs-ghs04-compressed-gas`                         | GHS04    | Compressed Gas                           |
| `ghs-ghs05-corrosive`                              | GHS05    | Corrosive                                |
| `ghs-ghs06-toxic`                                  | GHS06    | Toxic                                    |
| `ghs-ghs07-health-hazard-hazardous-to-ozone-layer` | GHS07    | Health Hazard / Hazardous to Ozone Layer |
| `ghs-ghs08-serious-health-hazard`                  | GHS08    | Serious Health Hazard                    |
| `ghs-ghs09-hazardous-to-the-environment`           | GHS09    | Hazardous to the Environment             |

## UN transport hazard class pictograms

| Element tag             | Division / Class                        |
| ----------------------- | --------------------------------------- |
| `ghs-divisions-1-1-1-3` | Divisions 1.1, 1.2, 1.3 — Explosives    |
| `ghs-division-1-4`      | Division 1.4 — Explosives               |
| `ghs-division-1-5`      | Division 1.5 — Explosives               |
| `ghs-division-1-6`      | Division 1.6 — Explosives               |
| `ghs-division-2-1`      | Division 2.1 — Flammable Gas            |
| `ghs-division-2-2`      | Division 2.2 — Non-Flammable Gas        |
| `ghs-division-2-3`      | Division 2.3 — Toxic Gas                |
| `ghs-class-3`           | Class 3 — Flammable Liquid              |
| `ghs-division-5-1`      | Division 5.1 — Oxidizing Substances     |
| `ghs-division-5-2`      | Division 5.2 — Organic Peroxides        |
| `ghs-division-6-1`      | Division 6.1 — Toxic Substances         |
| `ghs-class-8`           | Class 8 — Corrosive Substances          |
| `ghs-class-6-2`         | Class 6.2 — Infectious Substances       |
| `ghs-class-7`           | Class 7 — Radioactive Material          |
| `ghs-class-9`           | Class 9 — Miscellaneous Dangerous Goods |

## Examples

### Fixed size

```html
<ghs-ghs02-flammable width="128" height="128"></ghs-ghs02-flammable>
```

### Responsive (CSS-controlled)

```html
<ghs-ghs02-flammable class="pictogram"></ghs-ghs02-flammable>
```

```css
.pictogram svg {
  width: 100%;
  height: auto;
}
```

### Custom accessible label

```html
<ghs-ghs06-toxic
  title="Skull and crossbones"
  description="Contents are acutely toxic if swallowed, inhaled or in contact with skin."
></ghs-ghs06-toxic>
```

### Custom tag prefix

Pass a prefix string to `defineCustomElements()` to avoid naming conflicts with other libraries:

```ts
import { defineCustomElements } from '@ghs-hazard-pictograms/elements';
defineCustomElements('haz');
// registers haz-ghs01-explosive, haz-division-2-3, haz-pictogram, etc.
```

```html
<haz-ghs01-explosive width="64"></haz-ghs01-explosive>
<haz-pictogram pictogram-id="ghs06-toxic" width="64"></haz-pictogram>
```

### Usage in Vue 3

```vue
<script setup lang="ts">
import { defineCustomElements } from '@ghs-hazard-pictograms/elements';
defineCustomElements();
</script>

<template>
  <ghs-ghs01-explosive width="64" height="64" />
  <ghs-pictogram :pictogram-id="hazardCode" width="64" />
</template>
```

### Usage in React

```tsx
import { defineCustomElements } from '@ghs-hazard-pictograms/elements';
defineCustomElements();

export function HazardIcons({ code }: { code: string }) {
  return (
    <div>
      <ghs-ghs01-explosive width="64" height="64" />
      <ghs-pictogram pictogram-id={code} width="64" />
    </div>
  );
}
```

> **TypeScript / React JSX:** add a `declare module 'react'` augmentation or use `React.createElement` for custom element props until React 19+ ships full custom-elements support.

### Importing individual classes

You can import and register individual element classes if you only need a subset:

```ts
import { Ghs01Explosive, Ghs06Toxic } from '@ghs-hazard-pictograms/elements';

customElements.define(Ghs01Explosive.tagName, Ghs01Explosive);
customElements.define(Ghs06Toxic.tagName, Ghs06Toxic);
```

## Related packages

| Package                                                                                        | Description                                                    |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`@ghs-hazard-pictograms/react`](https://www.npmjs.com/package/@ghs-hazard-pictograms/react)   | React components for the same pictogram set                    |
| [`@ghs-hazard-pictograms/vue`](https://www.npmjs.com/package/@ghs-hazard-pictograms/vue)       | Vue 3 components for the same pictogram set                    |
| [`@ghs-hazard-pictograms/core`](https://www.npmjs.com/package/@ghs-hazard-pictograms/core)     | Raw data, inline SVGs, and lookup helpers (framework-agnostic) |
| [`@ghs-hazard-pictograms/css`](https://www.npmjs.com/package/@ghs-hazard-pictograms/css)       | CSS sprite sheet with short utility class names                |
| [`@ghs-hazard-pictograms/assets`](https://www.npmjs.com/package/@ghs-hazard-pictograms/assets) | Static SVG/PNG/JPG/WebP image files                            |
| [`@ghs-hazard-pictograms/sprite`](https://www.npmjs.com/package/@ghs-hazard-pictograms/sprite) | SVG `<symbol>` sprite for `<use href>` embedding               |

## Links

- **Docs:** [karlnorling.github.io/ghs-hazard-pictograms](https://karlnorling.github.io/ghs-hazard-pictograms/)
- **Source:** [github.com/karlnorling/ghs-hazard-pictograms](https://github.com/karlnorling/ghs-hazard-pictograms)
- **Issues:** [github.com/karlnorling/ghs-hazard-pictograms/issues](https://github.com/karlnorling/ghs-hazard-pictograms/issues)
