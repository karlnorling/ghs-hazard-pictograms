# ghs-hazard-pictograms

GHS (Globally Harmonized System) hazard pictograms as an npm package. Provides all pictograms in multiple formats with full documentation from the [GHS Wikipedia article](https://en.wikipedia.org/wiki/GHS_hazard_pictograms).

## What's included

- 9 core GHS chemical pictograms (GHS01–GHS09)
- 15 transport pictograms (ADR/UN classes 1–9)
- Each pictogram as: SVG (original + optimized), PNG, JPG, WebP at 5 sizes (240, 512, 768, 1024, 2048px)
- Typed metadata with Wikipedia documentation per pictogram
- React components
- CSS sprite map

## Installation

```sh
npm install ghs-hazard-pictograms
# or
yarn add ghs-hazard-pictograms
```

For React components, `react` is required as a peer dependency:

```sh
npm install ghs-hazard-pictograms react
```

## Usage

### Main entry — metadata and SVG strings

```ts
import {
  getAllPictograms,
  getGHSPictograms,
  getPictogram,
  getPictogramsByCategory,
} from 'ghs-hazard-pictograms';

// Get all 24 pictograms (9 GHS + 15 transport)
const all = getAllPictograms();

// Get only the 9 core GHS chemical pictograms
const ghsPictograms = getGHSPictograms();

// Get a single pictogram by slug ID
const explosive = getPictogram('ghs01-explosive');
console.log(explosive.code); // "GHS01"
console.log(explosive.name); // "Explosive"
console.log(explosive.category); // "physical_hazards"
console.log(explosive.description); // "Unstable explosives\nExplosives, divisions 1.1..."
console.log(explosive.svg); // "<svg>...</svg>"

// Get pictograms by category
const physical = getPictogramsByCategory('physical_hazards');
const transport = getPictogramsByCategory('transport');
```

#### Pictogram type

```ts
interface Pictogram {
  id: string; // e.g. "ghs01-explosive"
  code: string; // e.g. "GHS01"
  name: string; // e.g. "Explosive"
  category: PictogramCategory;
  description: string; // Wikipedia documentation text
  svg: string; // Inline SVG string
  assets: {
    svg: string; // Relative path to original SVG
    png: Record<number, string>; // { 240: '...', 512: '...', ... }
    jpg: Record<number, string>;
    webp: Record<number, string>;
  };
}

type PictogramCategory =
  | 'physical_hazards'
  | 'health_hazards'
  | 'physical_and_health_hazards'
  | 'environmental_hazards'
  | 'transport';
```

### React components

```tsx
import {
  Ghs01Explosive,
  Ghs06Toxic,
  Ghs09HazardousToTheEnvironment,
} from 'ghs-hazard-pictograms/react';

// Each component renders a <span> with the SVG inside via dangerouslySetInnerHTML.
// Standard HTML span props (className, style, onClick, etc.) are supported.
function HazardLabels() {
  return (
    <div>
      <Ghs01Explosive className="pictogram" style={{ width: 64, height: 64 }} />
      <Ghs06Toxic className="pictogram" />
      <Ghs09HazardousToTheEnvironment className="pictogram" />
    </div>
  );
}
```

All components accept `React.HTMLAttributes<HTMLSpanElement>`.

#### Available React components

| Component                                | Code  | Name                                     |
| ---------------------------------------- | ----- | ---------------------------------------- |
| `Ghs01Explosive`                         | GHS01 | Explosive                                |
| `Ghs02Flammable`                         | GHS02 | Flammable                                |
| `Ghs03Oxidizing`                         | GHS03 | Oxidizing                                |
| `Ghs04CompressedGas`                     | GHS04 | Compressed Gas                           |
| `Ghs05Corrosive`                         | GHS05 | Corrosive                                |
| `Ghs06Toxic`                             | GHS06 | Toxic                                    |
| `Ghs07HealthHazardHazardousToOzoneLayer` | GHS07 | Health Hazard / Hazardous to Ozone Layer |
| `Ghs08SeriousHealthHazard`               | GHS08 | Serious Health Hazard                    |
| `Ghs09HazardousToTheEnvironment`         | GHS09 | Hazardous to the Environment             |

Plus 15 transport pictogram components.

### CSS sprite

```css
/* In your CSS */
@import 'ghs-hazard-pictograms/css/sprite.css';
```

```html
<div class="physical_hazards_pictograms_ghs01_explosiveghs-pictogram-explosvs"></div>
```

Or use the CSS helper to look up class names programmatically:

```ts
import { getCssClassName, pictogramCssClasses } from 'ghs-hazard-pictograms/css';

const className = getCssClassName('ghs01-explosive'); // returns the CSS class string
```

### Image assets

Reference image files directly from the `assets/` directory:

```ts
// In a bundler (webpack, vite) that handles asset imports:
import explosivePng from 'ghs-hazard-pictograms/assets/physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos_512x512.png';
```

Or use the asset paths from the pictogram metadata:

```ts
import { getPictogram } from 'ghs-hazard-pictograms';

const p = getPictogram('ghs01-explosive');
// p.assets.png[512] -> path to 512x512 PNG relative to package root
```

## GHS Pictograms Reference

| Code  | Name                  | Category        | Description                                                       |
| ----- | --------------------- | --------------- | ----------------------------------------------------------------- |
| GHS01 | Explosive             | Physical        | Unstable explosives, divisions 1.1–1.6, self-reactive substances  |
| GHS02 | Flammable             | Physical        | Flammable gases, aerosols, liquids, solids, pyrophoric substances |
| GHS03 | Oxidizing             | Physical        | Oxidizing gases, liquids, and solids                              |
| GHS04 | Compressed Gas        | Physical        | Compressed, liquefied, refrigerated, and dissolved gases          |
| GHS05 | Corrosive             | Physical/Health | Corrosive to metals; skin corrosion; serious eye damage           |
| GHS06 | Toxic                 | Health          | Acute toxicity categories 1–3                                     |
| GHS07 | Health Hazard         | Health          | Acute toxicity cat. 4; skin/eye irritation; sensitization         |
| GHS08 | Serious Health Hazard | Health          | Carcinogenicity, mutagenicity, reproductive toxicity, etc.        |
| GHS09 | Environmental Hazard  | Environmental   | Hazardous to aquatic environment                                  |

## Development

### Setup

```sh
yarn install
```

### Update pictograms

Re-scrapes Wikipedia, re-downloads SVGs, regenerates all assets and source files:

```sh
yarn update
```

### Build

```sh
yarn compile   # compile TypeScript to CJS + ESM
```

### Test

```sh
yarn test
```

### Format

```sh
yarn format
```

### Changelog

This project uses [changesets](https://github.com/changesets/changesets) for versioning:

```sh
yarn changeset        # create a new changeset
yarn changeset version # bump versions
yarn changeset publish # publish to npm
```

## License

MIT
