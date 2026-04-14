# @ghs-hazard-pictograms/react

React components for all GHS chemical hazard pictograms (GHS01–GHS09) and UN transport hazard class pictograms. Each component renders an optimised inline SVG with full accessibility support.

## Requirements

- React **18** or later

## Installation

```sh
npm install @ghs-hazard-pictograms/react
# or
yarn add @ghs-hazard-pictograms/react
# or
pnpm add @ghs-hazard-pictograms/react
```

## Quick start

```tsx
import { Ghs01Explosive, Ghs06Toxic } from '@ghs-hazard-pictograms/react';

export function HazardIcons() {
  return (
    <div>
      <Ghs01Explosive width={64} height={64} />
      <Ghs06Toxic width={64} height={64} title="Toxic substance" />
    </div>
  );
}
```

## Props

Every component accepts the same `PictogramProps`:

| Prop          | Type                  | Default                      | Description                                      |
| ------------- | --------------------- | ---------------------------- | ------------------------------------------------ |
| `width`       | `number \| string`    | —                            | Width applied to the `<svg>` element             |
| `height`      | `number \| string`    | —                            | Height applied to the `<svg>` element            |
| `title`       | `string`              | Pictogram name               | Accessible `<title>` injected into the SVG       |
| `description` | `string`              | Wikipedia hazard description | Accessible `<desc>` injected into the SVG        |
| `className`   | `string`              | —                            | CSS class forwarded to the wrapping `<span>`     |
| `style`       | `React.CSSProperties` | —                            | Inline styles forwarded to the wrapping `<span>` |
| `aria-label`  | `string`              | —                            | Overrides `aria-labelledby` with a direct label  |

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

## Examples

### Fixed size

```tsx
<Ghs02Flammable width={128} height={128} />
```

### Responsive (CSS-controlled)

```tsx
<Ghs02Flammable className="pictogram" />
```

```css
.pictogram svg {
  width: 100%;
  height: auto;
}
```

### Custom accessible label

```tsx
<Ghs06Toxic
  title="Skull and crossbones"
  description="Contents are acutely toxic if swallowed, inhaled or in contact with skin."
  aria-label="Toxic — do not ingest"
/>
```

### Rendering all GHS pictograms

```tsx
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
} from '@ghs-hazard-pictograms/react';

const GHS_COMPONENTS = [
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

export function AllGHSPictograms() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {GHS_COMPONENTS.map((Component, i) => (
        <Component key={i} width={64} height={64} />
      ))}
    </div>
  );
}
```

## Related packages

| Package                                                                                        | Description                                                    |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`@ghs-hazard-pictograms/core`](https://www.npmjs.com/package/@ghs-hazard-pictograms/core)     | Raw data, inline SVGs, and lookup helpers (framework-agnostic) |
| [`@ghs-hazard-pictograms/css`](https://www.npmjs.com/package/@ghs-hazard-pictograms/css)       | CSS sprite sheet with short utility class names                |
| [`@ghs-hazard-pictograms/assets`](https://www.npmjs.com/package/@ghs-hazard-pictograms/assets) | Static SVG/PNG/JPG/WebP image files                            |
| [`@ghs-hazard-pictograms/sprite`](https://www.npmjs.com/package/@ghs-hazard-pictograms/sprite) | SVG `<symbol>` sprite for `<use href>` embedding               |

## Links

- **Docs:** [karlnorling.github.io/ghs-hazard-pictograms](https://karlnorling.github.io/ghs-hazard-pictograms/)
- **Source:** [github.com/karlnorling/ghs-hazard-pictograms](https://github.com/karlnorling/ghs-hazard-pictograms)
- **Issues:** [github.com/karlnorling/ghs-hazard-pictograms/issues](https://github.com/karlnorling/ghs-hazard-pictograms/issues)
