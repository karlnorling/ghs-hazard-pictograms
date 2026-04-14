# @ghs-hazard-pictograms/core

Data, types, and lookup helpers for all GHS chemical hazard pictograms (GHS01–GHS09) and UN transport hazard class pictograms.

This is the foundational package consumed by the other packages in this collection. Use it directly when you need programmatic access to pictogram metadata, inline SVGs, or asset paths — without coupling to any UI framework.

## Installation

```sh
npm install @ghs-hazard-pictograms/core
# or
yarn add @ghs-hazard-pictograms/core
# or
pnpm add @ghs-hazard-pictograms/core
```

## Quick start

```ts
import { getPictogram, getGHSPictograms, getAllPictograms } from '@ghs-hazard-pictograms/core';

// Look up a single pictogram by slug ID
const explosive = getPictogram('ghs01-explosive');
console.log(explosive?.name);        // "Explosive"
console.log(explosive?.code);        // "GHS01"
console.log(explosive?.category);    // "physical_hazards"

// Render the inline SVG directly
document.getElementById('icon')!.innerHTML = explosive!.svg;

// Get all 9 core GHS pictograms
const ghsPictograms = getGHSPictograms();

// Get every pictogram (GHS + transport)
const all = getAllPictograms();
console.log(all.length); // 27
```

## API reference

### `pictograms`

```ts
import { pictograms } from '@ghs-hazard-pictograms/core';
```

Pre-built array of all 27 pictograms. Includes 9 GHS chemical hazard pictograms and 18 UN transport hazard class pictograms.

---

### `getAllPictograms()`

```ts
getAllPictograms(): Pictogram[]
```

Returns every pictogram in the registry (GHS01–GHS09 plus all transport classes).

---

### `getGHSPictograms()`

```ts
getGHSPictograms(): Pictogram[]
```

Returns only the 9 core GHS chemical hazard pictograms (GHS01–GHS09), excluding UN transport classes.

---

### `getPictogram(id)`

```ts
getPictogram(id: string): Pictogram | undefined
```

Looks up a pictogram by its slug ID. Returns `undefined` if not found.

```ts
getPictogram('ghs01-explosive')
getPictogram('ghs09-hazardous-to-the-environment')
getPictogram('divisions-1-1-1-3')   // transport
getPictogram('un-class-8')           // transport
```

---

### `getPictogramsByCategory(category)`

```ts
getPictogramsByCategory(category: PictogramCategory): Pictogram[]
```

Returns all pictograms that belong to the given category.

```ts
import { getPictogramsByCategory } from '@ghs-hazard-pictograms/core';

const physical = getPictogramsByCategory('physical_hazards');
const transport = getPictogramsByCategory('transport');
```

## TypeScript types

### `Pictogram`

```ts
interface Pictogram {
  /** Slug identifier, e.g. "ghs01-explosive". */
  id: string;
  /** GHS code, e.g. "GHS01". Empty string for transport-only pictograms. */
  code: string;
  /** Human-readable name, e.g. "Explosive". */
  name: string;
  /** Pictogram category. */
  category: PictogramCategory;
  /** Documentation text from Wikipedia describing the hazard classes covered. */
  description: string;
  /** Full inline SVG string (optimised by SVGO). */
  svg: string;
  /** Pre-built image asset paths at multiple sizes and formats. */
  assets: PictogramAssets;
}
```

### `PictogramAssets`

```ts
interface PictogramAssets {
  /** Relative path to the original SVG source file. */
  svg: string;
  /** Map of pixel size → relative path for PNG variants. */
  png: Record<number, string>;
  /** Map of pixel size → relative path for JPEG variants. */
  jpg: Record<number, string>;
  /** Map of pixel size → relative path for WebP variants. */
  webp: Record<number, string>;
}
```

Available sizes: **240, 512, 768, 1024, 2048** px².

### `PictogramCategory`

```ts
type PictogramCategory =
  | 'physical_hazards'           // GHS01–GHS05 (explosive, flammable, oxidising, compressed gas, corrosive)
  | 'health_hazards'             // GHS06–GHS08 (toxic, health hazard, serious health hazard)
  | 'physical_and_health_hazards'// GHS05 Corrosive (listed in both sections)
  | 'environmental_hazards'      // GHS09 (hazardous to the aquatic environment)
  | 'transport';                 // UN transport hazard class pictograms (divisions 1.1–9)
```

## Related packages

| Package | Description |
|---|---|
| [`@ghs-hazard-pictograms/react`](https://www.npmjs.com/package/@ghs-hazard-pictograms/react) | Ready-to-use React components for each pictogram |
| [`@ghs-hazard-pictograms/css`](https://www.npmjs.com/package/@ghs-hazard-pictograms/css) | CSS sprite sheet with short utility class names |
| [`@ghs-hazard-pictograms/assets`](https://www.npmjs.com/package/@ghs-hazard-pictograms/assets) | Static SVG/PNG/JPG/WebP image files |
| [`@ghs-hazard-pictograms/sprite`](https://www.npmjs.com/package/@ghs-hazard-pictograms/sprite) | SVG `<symbol>` sprite for `<use href>` embedding |

## Links

- **Docs:** [karlnorling.github.io/ghs-hazard-pictograms](https://karlnorling.github.io/ghs-hazard-pictograms/)
- **Source:** [github.com/karlnorling/ghs-hazard-pictograms](https://github.com/karlnorling/ghs-hazard-pictograms)
- **Issues:** [github.com/karlnorling/ghs-hazard-pictograms/issues](https://github.com/karlnorling/ghs-hazard-pictograms/issues)
