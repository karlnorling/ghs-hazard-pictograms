/**
 * Main entry point for the ghs-hazard-pictograms package.
 *
 * Provides typed access to all GHS hazard pictogram data including inline SVGs,
 * asset paths, and metadata scraped from the GHS Wikipedia article.
 *
 * @module ghs-hazard-pictograms
 */

import { pictograms } from './pictograms.generated';
import type { Pictogram, PictogramCategory } from './types';

export type { Pictogram, PictogramAssets, PictogramCategory } from './types';
export { pictograms } from './pictograms.generated';

/**
 * Returns every pictogram in the registry (GHS01–GHS09 plus transport classes).
 */
export const getAllPictograms = (): Pictogram[] => pictograms;

/**
 * Returns only the 9 core GHS chemical hazard pictograms (GHS01–GHS09),
 * excluding UN transport pictogram classes.
 */
export const getGHSPictograms = (): Pictogram[] =>
  pictograms.filter((p) => p.code.startsWith('GHS'));

/**
 * Returns a pictogram by its slug ID (e.g. `"ghs01-explosive"`).
 * Returns `undefined` when no pictogram with that ID exists.
 */
export const getPictogram = (id: string): Pictogram | undefined =>
  pictograms.find((p) => p.id === id);

/**
 * Returns all pictograms that belong to the given category.
 * @see {@link PictogramCategory} for valid category values.
 */
export const getPictogramsByCategory = (category: PictogramCategory): Pictogram[] =>
  pictograms.filter((p) => p.category === category);
