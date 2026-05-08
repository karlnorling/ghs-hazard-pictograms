# @ghs-hazard-pictograms/vue

Vue 3 components for all GHS chemical hazard pictograms (GHS01–GHS09) and UN transport hazard class pictograms. Each component renders an optimised inline SVG with full accessibility support.

## Requirements

- Vue **3.0** or later

## Installation

```sh
npm install @ghs-hazard-pictograms/vue
# or
yarn add @ghs-hazard-pictograms/vue
# or
pnpm add @ghs-hazard-pictograms/vue
```

## Quick start

```vue
<script setup lang="ts">
import { Ghs01Explosive, Ghs06Toxic } from '@ghs-hazard-pictograms/vue';
</script>

<template>
  <div>
    <Ghs01Explosive :width="64" :height="64" />
    <Ghs06Toxic :width="64" :height="64" title="Toxic substance" />
  </div>
</template>
```

## Props

Every named component accepts the same props:

| Prop          | Type               | Default                      | Description                                |
| ------------- | ------------------ | ---------------------------- | ------------------------------------------ |
| `width`       | `number \| string` | —                            | Width applied to the `<svg>` element       |
| `height`      | `number \| string` | —                            | Height applied to the `<svg>` element      |
| `title`       | `string`           | Pictogram name               | Accessible `<title>` injected into the SVG |
| `description` | `string`           | Wikipedia hazard description | Accessible `<desc>` injected into the SVG  |

Additional attributes (`class`, `style`, `aria-*`, etc.) are forwarded to the wrapping `<span style="display:contents">`.

## GHS chemical hazard pictograms

| Component                                | GHS code | Hazard                                   |
| ---------------------------------------- | -------- | ---------------------------------------- |
| `Ghs01Explosive`                         | GHS01    | Explosive                                |
| `Ghs02Flammable`                         | GHS02    | Flammable                                |
| `Ghs03Oxidizing`                         | GHS03    | Oxidizing                                |
| `Ghs04CompressedGas`                     | GHS04    | Compressed Gas                           |
| `Ghs05Corrosive`                         | GHS05    | Corrosive                                |
| `Ghs06Toxic`                             | GHS06    | Toxic                                    |
| `Ghs07HealthHazardHazardousToOzoneLayer` | GHS07    | Health Hazard / Hazardous to Ozone Layer |
| `Ghs08SeriousHealthHazard`               | GHS08    | Serious Health Hazard                    |
| `Ghs09HazardousToTheEnvironment`         | GHS09    | Hazardous to the Environment             |

## UN transport hazard class pictograms

| Component       | Division / Class                        |
| --------------- | --------------------------------------- |
| `Divisions1113` | Divisions 1.1, 1.2, 1.3 — Explosives    |
| `Division14`    | Division 1.4 — Explosives               |
| `Division15`    | Division 1.5 — Explosives               |
| `Division16`    | Division 1.6 — Explosives               |
| `Division21`    | Division 2.1 — Flammable Gas            |
| `Division22`    | Division 2.2 — Non-Flammable Gas        |
| `Division23`    | Division 2.3 — Toxic Gas                |
| `Class3`        | Class 3 — Flammable Liquid              |
| `Division51`    | Division 5.1 — Oxidizing Substances     |
| `Division52`    | Division 5.2 — Organic Peroxides        |
| `Division61`    | Division 6.1 — Toxic Substances         |
| `Class8`        | Class 8 — Corrosive Substances          |
| `Class62`       | Class 6.2 — Infectious Substances       |
| `Class7`        | Class 7 — Radioactive Material          |
| `Class9`        | Class 9 — Miscellaneous Dangerous Goods |

## Data-driven rendering

Use `PictogramById` when the pictogram ID comes from an API response or user input rather than being known at compile time. It returns nothing for unrecognised IDs.

```vue
<script setup lang="ts">
import { PictogramById } from '@ghs-hazard-pictograms/vue';

const props = defineProps<{ hazardCode: string }>();
</script>

<template>
  <PictogramById :id="hazardCode" :width="64" :height="64" />
</template>
```

Valid IDs follow the slug format used by `@ghs-hazard-pictograms/core`:
`"ghs01-explosive"`, `"ghs06-toxic"`, `"division-2-3"`, `"class-3"`, etc.

## Examples

### Fixed size

```vue
<Ghs02Flammable :width="128" :height="128" />
```

### Responsive (CSS-controlled)

```vue
<Ghs02Flammable class="pictogram" />
```

```css
.pictogram svg {
  width: 100%;
  height: auto;
}
```

### Custom accessible label

```vue
<Ghs06Toxic
  title="Skull and crossbones"
  description="Contents are acutely toxic if swallowed, inhaled or in contact with skin."
/>
```

### Rendering all GHS pictograms

```vue
<script setup lang="ts">
import {
  Ghs01Explosive,
  Ghs02Flammable,
  Ghs03Oxidizing,
  Ghs04CompressedGas,
  Ghs05Corrosive,
  Ghs06Toxic,
  Ghs07HealthHazardHazardousToOzoneLayer,
  Ghs08SeriousHealthHazard,
  Ghs09HazardousToTheEnvironment,
} from '@ghs-hazard-pictograms/vue';

const components = [
  Ghs01Explosive,
  Ghs02Flammable,
  Ghs03Oxidizing,
  Ghs04CompressedGas,
  Ghs05Corrosive,
  Ghs06Toxic,
  Ghs07HealthHazardHazardousToOzoneLayer,
  Ghs08SeriousHealthHazard,
  Ghs09HazardousToTheEnvironment,
];
</script>

<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <component :is="comp" v-for="(comp, i) in components" :key="i" :width="64" :height="64" />
  </div>
</template>
```

## Related packages

| Package                                                                                            | Description                                                    |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`@ghs-hazard-pictograms/react`](https://www.npmjs.com/package/@ghs-hazard-pictograms/react)       | React components for the same pictogram set                    |
| [`@ghs-hazard-pictograms/elements`](https://www.npmjs.com/package/@ghs-hazard-pictograms/elements) | Framework-agnostic Web Components (Custom Elements)            |
| [`@ghs-hazard-pictograms/core`](https://www.npmjs.com/package/@ghs-hazard-pictograms/core)         | Raw data, inline SVGs, and lookup helpers (framework-agnostic) |
| [`@ghs-hazard-pictograms/css`](https://www.npmjs.com/package/@ghs-hazard-pictograms/css)           | CSS sprite sheet with short utility class names                |
| [`@ghs-hazard-pictograms/assets`](https://www.npmjs.com/package/@ghs-hazard-pictograms/assets)     | Static SVG/PNG/JPG/WebP image files                            |
| [`@ghs-hazard-pictograms/sprite`](https://www.npmjs.com/package/@ghs-hazard-pictograms/sprite)     | SVG `<symbol>` sprite for `<use href>` embedding               |

## Links

- **Docs:** [karlnorling.github.io/ghs-hazard-pictograms](https://karlnorling.github.io/ghs-hazard-pictograms/)
- **Source:** [github.com/karlnorling/ghs-hazard-pictograms](https://github.com/karlnorling/ghs-hazard-pictograms)
- **Issues:** [github.com/karlnorling/ghs-hazard-pictograms/issues](https://github.com/karlnorling/ghs-hazard-pictograms/issues)
