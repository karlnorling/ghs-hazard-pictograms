/**
 * Shared TypeScript types for the ghs-hazard-pictograms package.
 * @module ghs-hazard-pictograms/types
 */

/**
 * Category of a GHS or transport hazard pictogram.
 * - `physical_hazards` — GHS01–GHS05 (explosive, flammable, oxidising, compressed gas, corrosive)
 * - `health_hazards` — GHS06–GHS08 (toxic, health hazard, serious health hazard)
 * - `physical_and_health_hazards` — GHS05 Corrosive (listed in both physical and health sections)
 * - `environmental_hazards` — GHS09 (hazardous to the aquatic environment)
 * - `transport` — UN transport hazard class pictograms (divisions 1.1–9)
 */
export type PictogramCategory =
  | 'environmental_hazards'
  | 'health_hazards'
  | 'physical_and_health_hazards'
  | 'physical_hazards'
  | 'transport';

/**
 * Pre-built image asset paths for a pictogram, relative to the package `assets/` directory.
 * Each raster format is available at five sizes: 240, 512, 768, 1024 and 2048 px².
 */
export interface PictogramAssets {
  /** Map of pixel size to relative path for JPEG variants. */
  jpg: Record<number, string>;
  /** Map of pixel size to relative path for PNG variants. */
  png: Record<number, string>;
  /** Relative path to the original SVG source file. */
  svg: string;
  /** Map of pixel size to relative path for WebP variants. */
  webp: Record<number, string>;
}

/**
 * A single GHS or transport hazard pictogram with all associated metadata and assets.
 */
export interface Pictogram {
  /** Pre-built image asset paths at multiple sizes and formats. */
  assets: PictogramAssets;
  /** Pictogram category — see {@link PictogramCategory}. */
  category: PictogramCategory;
  /** GHS code prefix, e.g. `"GHS01"`. Empty string for transport pictograms without a GHS code. */
  code: string;
  /** Documentation text from Wikipedia describing the hazard classes covered by this pictogram. */
  description: string;
  /** Slug identifier used to look up the pictogram, e.g. `"ghs01-explosive"`. */
  id: string;
  /** Human-readable name, e.g. `"Explosive"`. */
  name: string;
  /** Full inline SVG string (optimised by SVGO). */
  svg: string;
}
