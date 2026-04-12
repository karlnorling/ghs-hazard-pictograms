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
 * Derives the CSS class name for a given asset path by applying the same
 * sanitisation logic used in the sprite generator.
 *
 * @param assetPath - Relative asset path, e.g. `"physical_hazards/ghs01/foo.svg"`.
 * @returns CSS class name string (prefixed with `ghs-`).
 */
function cssClassForPath(assetPath: string): string {
  return (
    'ghs-' +
    assetPath
      .replace(/[/\\?%*:|"<>]/g, '_')
      .replace(/\s/g, '')
      .toLowerCase()
      .replace(/\.svg$/, '')
  );
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
