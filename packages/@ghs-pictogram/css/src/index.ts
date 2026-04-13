/**
 * CSS sprite utilities for the @ghs-pictogram/css package.
 *
 * Import `@ghs-pictogram/css/sprite.css` in your application and then
 * use the class names returned by {@link getCssClassName} or from
 * {@link pictogramCssClasses} on any block element sized with `width`/`height`.
 *
 * @module @ghs-pictogram/css
 */

import { pictograms } from '@ghs-pictogram/core';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Derives the short CSS class name for a given asset path.
 *
 * - GHS core pictograms: `ghs-ghsNN` (e.g. `ghs-ghs01`) — derived from the parent
 *   directory name which starts with the GHS code.
 * - Transport pictograms: `ghs-{slug}` (e.g. `ghs-adr-1-4`, `ghs-un-8`) — derived
 *   from the SVG filename with common prefixes stripped.
 *
 * @param assetPath - Relative asset path, e.g. `"physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg"`.
 * @returns CSS class name string (prefixed with `ghs-`).
 */
function cssClassForPath(assetPath: string): string {
  const parts = assetPath.replace(/\\/g, '/').split('/');
  const parentDir = parts[parts.length - 2] ?? '';
  const filename = (parts[parts.length - 1] ?? '').replace(/\.svg$/i, '');

  // GHS core: parent directory starts with "ghsNN" (e.g. "ghs01_explosive")
  const ghsMatch = parentDir.match(/^(ghs\d+)/i);
  if (ghsMatch) {
    return 'ghs-' + ghsMatch[1].toLowerCase();
  }

  // Transport: derive from filename, strip verbose UN prefix and sanitise
  const slug = filename
    .replace(/^UN_transport_pictogram_-_/i, 'un-')
    .replace(/\(([^)]+)\)/g, '-$1')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

  return 'ghs-' + slug;
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

/**
 * Map of pictogram slug ID → CSS sprite class name.
 *
 * Import `@ghs-pictogram/css/sprite.css` and apply the class to a
 * block element to show the pictogram as a background image.
 *
 * @example
 * ```ts
 * import { pictogramCssClasses } from '@ghs-pictogram/css';
 * element.className = pictogramCssClasses['ghs01-explosive'];
 * ```
 */
export const pictogramCssClasses: Readonly<Record<string, string>> = Object.fromEntries(
  pictograms.map((p) => [p.id, cssClassForPath(p.assets.svg)]),
);

/**
 * Returns the CSS sprite class name for a pictogram by its slug ID.
 *
 * Use together with `import '@ghs-pictogram/css/sprite.css'`.
 *
 * @param id - Pictogram slug ID, e.g. `"ghs01-explosive"`.
 * @returns The CSS class name string, or `undefined` if the ID is not found.
 *
 * @example
 * ```ts
 * import { getCssClassName } from '@ghs-pictogram/css';
 * const cls = getCssClassName('ghs01-explosive');
 * // 'ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos'
 * ```
 */
export const getCssClassName = (id: string): string | undefined => pictogramCssClasses[id];
