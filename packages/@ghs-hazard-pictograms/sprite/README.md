# @ghs-hazard-pictograms/sprite

SVG `<symbol>` sprite containing all GHS chemical hazard pictograms (GHS01–GHS09) and UN transport hazard class pictograms. Reference any pictogram with a single `<use href>` element — no JavaScript, no framework.

## Installation

```sh
npm install @ghs-hazard-pictograms/sprite
# or
yarn add @ghs-hazard-pictograms/sprite
# or
pnpm add @ghs-hazard-pictograms/sprite
```

## Quick start

**1. Embed the sprite** once in your HTML (typically at the start of `<body>`), hidden from view:

```html
<!-- Inline approach: copy sprite.svg contents into your HTML -->
<div style="display: none;" aria-hidden="true">
  <!-- contents of node_modules/@ghs-hazard-pictograms/sprite/sprite.svg -->
</div>
```

Or serve it as an external file and reference it by URL:

```html
<svg role="img" aria-label="Explosive" width="64" height="64">
  <use href="/static/sprite.svg#ghs01-explosive" />
</svg>
```

**2. Reference a pictogram** with `<use href>`:

```html
<!-- Using an inline/embedded sprite (same document) -->
<svg role="img" aria-label="Flammable" width="64" height="64">
  <use href="#ghs02-flammable" />
</svg>

<!-- Using an external sprite file -->
<svg role="img" aria-label="Flammable" width="64" height="64">
  <use href="/assets/sprite.svg#ghs02-flammable" />
</svg>
```

## Package contents

| File | Description |
|---|---|
| `sprite.svg` | SVG file containing all 27 pictograms as `<symbol>` elements |
| `sprite-ids.json` | JSON array of all available symbol IDs |

## Symbol IDs

### GHS chemical hazard pictograms

| ID | Pictogram |
|---|---|
| `ghs01-explosive` | GHS01 Explosive |
| `ghs02-flammable` | GHS02 Flammable |
| `ghs03-oxidizing` | GHS03 Oxidizing |
| `ghs04-compressed-gas` | GHS04 Compressed Gas |
| `ghs05-corrosive` | GHS05 Corrosive |
| `ghs06-toxic` | GHS06 Toxic |
| `ghs07-health-hazard-hazardous-to-ozone-layer` | GHS07 Health Hazard / Hazardous to Ozone Layer |
| `ghs08-serious-health-hazard` | GHS08 Serious Health Hazard |
| `ghs09-hazardous-to-the-environment` | GHS09 Hazardous to the Environment |

### UN transport hazard class pictograms

| ID | Pictogram |
|---|---|
| `divisions-1-1-1-3` | Divisions 1.1, 1.2, 1.3 — Explosives |
| `division-1-4` | Division 1.4 — Explosives |
| `division-1-5` | Division 1.5 — Explosives |
| `division-1-6` | Division 1.6 — Explosives |
| `division-2-1` | Division 2.1 — Flammable Gas |
| `division-2-2` | Division 2.2 — Non-Flammable Gas |
| `division-2-3` | Division 2.3 — Toxic Gas |
| `class-3` | Class 3 — Flammable Liquid |
| `division-5-1` | Division 5.1 — Oxidizing Substances |
| `division-5-2` | Division 5.2 — Organic Peroxides |
| `division-6-1` | Division 6.1 — Toxic Substances |
| `class-8` | Class 8 — Corrosive Substances |
| `class-6-2` | Class 6.2 — Infectious Substances |
| `class-7` | Class 7 — Radioactive Material |
| `class-9` | Class 9 — Miscellaneous Dangerous Goods |

> **Tip:** Import `sprite-ids.json` to get the full list of IDs at runtime without hard-coding them:
>
> ```ts
> import ids from '@ghs-hazard-pictograms/sprite/sprite-ids.json';
> // ids: string[]
> ```

## Listing all available IDs

```ts
import ids from '@ghs-hazard-pictograms/sprite/sprite-ids.json';

ids.forEach((id) => {
  console.log(id); // e.g. "ghs01-explosive"
});
```

## Accessibility

Always add a role and an accessible label to the `<svg>` wrapper:

```html
<svg role="img" aria-label="Toxic substance — do not inhale" width="64" height="64">
  <use href="#ghs06-toxic" />
</svg>
```

If the pictogram is purely decorative, hide it from assistive technology:

```html
<svg aria-hidden="true" focusable="false" width="64" height="64">
  <use href="#ghs06-toxic" />
</svg>
```

## Framework examples

### React

```tsx
function GhsIcon({ id, label, size = 64 }: { id: string; label: string; size?: number }) {
  return (
    <svg role="img" aria-label={label} width={size} height={size}>
      <use href={`/assets/sprite.svg#${id}`} />
    </svg>
  );
}

// Usage
<GhsIcon id="ghs01-explosive" label="Explosive" size={48} />
```

### Vue

```vue
<template>
  <svg role="img" :aria-label="label" :width="size" :height="size">
    <use :href="`/assets/sprite.svg#${id}`" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{ id: string; label: string; size?: number }>();
</script>
```

## Related packages

| Package | Description |
|---|---|
| [`@ghs-hazard-pictograms/core`](https://www.npmjs.com/package/@ghs-hazard-pictograms/core) | Raw data, inline SVGs, and lookup helpers (framework-agnostic) |
| [`@ghs-hazard-pictograms/react`](https://www.npmjs.com/package/@ghs-hazard-pictograms/react) | Ready-to-use React components (inline SVG, no sprite needed) |
| [`@ghs-hazard-pictograms/css`](https://www.npmjs.com/package/@ghs-hazard-pictograms/css) | CSS sprite sheet with short utility class names |
| [`@ghs-hazard-pictograms/assets`](https://www.npmjs.com/package/@ghs-hazard-pictograms/assets) | Static SVG/PNG/JPG/WebP image files |

## Links

- **Docs:** [karlnorling.github.io/ghs-hazard-pictograms](https://karlnorling.github.io/ghs-hazard-pictograms/)
- **Source:** [github.com/karlnorling/ghs-hazard-pictograms](https://github.com/karlnorling/ghs-hazard-pictograms)
- **Issues:** [github.com/karlnorling/ghs-hazard-pictograms/issues](https://github.com/karlnorling/ghs-hazard-pictograms/issues)
