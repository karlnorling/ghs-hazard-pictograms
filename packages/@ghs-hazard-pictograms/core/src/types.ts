/**
 * Shared TypeScript types for the ghs-hazard-pictograms package.
 * @module ghs-hazard-pictograms/types
 */

/**
 * Category of a GHS or transport hazard pictogram.
 * - `physical_hazards` — GHS01–GHS05 (explosive, flammable, oxidising, compressed gas, corrosive)
 * - `health_hazards` — GHS06–GHS08 (toxic, health hazard, serious health hazard)
 * - `physical_and_health_hazards` — currently unused. Wikipedia lists GHS05 Corrosive in both the
 *   physical and the physical-and-health sections; the registry keeps one entry, filed under
 *   `physical_hazards`, so filtering by this category returns an empty array.
 * - `environmental_hazards` — GHS09 (hazardous to the aquatic environment)
 * - `transport` — UN transport hazard class labels (the numbered diamonds,
 *   ADR 5.2.2.2: divisions 1.1 through class 9)
 * - `transport_marks` — ADR transport *marks* rather than labels (5.2.1, 5.5):
 *   marine pollutant, fumigation warning, limited quantity, orientation
 *   arrows. Marks are not numbered, so these carry an empty `code`.
 */
export type PictogramCategory =
  | 'environmental_hazards'
  | 'health_hazards'
  | 'physical_and_health_hazards'
  | 'physical_hazards'
  | 'transport'
  | 'transport_marks';

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
  /**
   * Official designation. `"GHS01"`–`"GHS09"` for the chemical hazard
   * pictograms, and the ADR label designation for transport pictograms:
   * `"1"`, `"1.4"`, `"2.1"`, `"7A"`, `"9"` and so on.
   *
   * `"1"` is the label used for divisions 1.1, 1.2 and 1.3 together, which is
   * why the name says "Divisions 1.1–1.3" while the code is just `"1"`.
   *
   * Empty for `transport_marks`: ADR numbers its labels but not its marks, so
   * a marine pollutant mark has no designation to report.
   */
  code: string;
  /** Documentation text from Wikipedia describing the hazard classes covered by this pictogram. */
  description: string;
  /** Slug identifier used to look up the pictogram, e.g. `"ghs01-explosive"`. */
  id: string;
  /** Human-readable name, e.g. `"Explosive"`. */
  name: string;
  /**
   * Full inline SVG string, optimised by SVGO. The root `<svg>` always has a `viewBox`,
   * so the image scales to any `width`/`height`.
   */
  svg: string;
}
