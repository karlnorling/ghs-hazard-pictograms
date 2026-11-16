// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { GhsPictogram } from './GhsPictogram.js';
import { Ghs01Explosive } from './Ghs01Explosive.js';
import { Ghs02Flammable } from './Ghs02Flammable.js';
import { Ghs03Oxidizing } from './Ghs03Oxidizing.js';
import { Ghs04CompressedGas } from './Ghs04CompressedGas.js';
import { Ghs05Corrosive } from './Ghs05Corrosive.js';
import { Ghs06Toxic } from './Ghs06Toxic.js';
import { Ghs07HealthHazardHazardousToTheAtmosphericSystem } from './Ghs07HealthHazardHazardousToTheAtmosphericSystem.js';
import { Ghs08SeriousHealthHazard } from './Ghs08SeriousHealthHazard.js';
import { Ghs09HazardousToTheEnvironment } from './Ghs09HazardousToTheEnvironment.js';
import { MarinePollutant } from './MarinePollutant.js';
import { FumigationWarning } from './FumigationWarning.js';
import { LimitedQuantity } from './LimitedQuantity.js';
import { PackageOrientation } from './PackageOrientation.js';
import { Divisions1113 } from './Divisions1113.js';
import { Division14 } from './Division14.js';
import { Division15 } from './Division15.js';
import { Division16 } from './Division16.js';
import { Division21 } from './Division21.js';
import { Division22 } from './Division22.js';
import { Division23 } from './Division23.js';
import { Class3 } from './Class3.js';
import { Division41 } from './Division41.js';
import { Division42 } from './Division42.js';
import { Division43 } from './Division43.js';
import { Division51 } from './Division51.js';
import { Division52 } from './Division52.js';
import { Division61 } from './Division61.js';
import { Class8 } from './Class8.js';
import { Class62 } from './Class62.js';
import { Adr7a } from './Adr7a.js';
import { Adr7b } from './Adr7b.js';
import { Adr7c } from './Adr7c.js';
import { Adr7e } from './Adr7e.js';
import { Class9 } from './Class9.js';

const _elements: Array<[typeof HTMLElement & { tagName: string }, string]> = [
  [GhsPictogram, GhsPictogram.tagName],
  [Ghs01Explosive, Ghs01Explosive.tagName],
  [Ghs02Flammable, Ghs02Flammable.tagName],
  [Ghs03Oxidizing, Ghs03Oxidizing.tagName],
  [Ghs04CompressedGas, Ghs04CompressedGas.tagName],
  [Ghs05Corrosive, Ghs05Corrosive.tagName],
  [Ghs06Toxic, Ghs06Toxic.tagName],
  [Ghs07HealthHazardHazardousToTheAtmosphericSystem, Ghs07HealthHazardHazardousToTheAtmosphericSystem.tagName],
  [Ghs08SeriousHealthHazard, Ghs08SeriousHealthHazard.tagName],
  [Ghs09HazardousToTheEnvironment, Ghs09HazardousToTheEnvironment.tagName],
  [MarinePollutant, MarinePollutant.tagName],
  [FumigationWarning, FumigationWarning.tagName],
  [LimitedQuantity, LimitedQuantity.tagName],
  [PackageOrientation, PackageOrientation.tagName],
  [Divisions1113, Divisions1113.tagName],
  [Division14, Division14.tagName],
  [Division15, Division15.tagName],
  [Division16, Division16.tagName],
  [Division21, Division21.tagName],
  [Division22, Division22.tagName],
  [Division23, Division23.tagName],
  [Class3, Class3.tagName],
  [Division41, Division41.tagName],
  [Division42, Division42.tagName],
  [Division43, Division43.tagName],
  [Division51, Division51.tagName],
  [Division52, Division52.tagName],
  [Division61, Division61.tagName],
  [Class8, Class8.tagName],
  [Class62, Class62.tagName],
  [Adr7a, Adr7a.tagName],
  [Adr7b, Adr7b.tagName],
  [Adr7c, Adr7c.tagName],
  [Adr7e, Adr7e.tagName],
  [Class9, Class9.tagName],
];

/**
 * Registers all GHS hazard and ADR/UN transport pictogram custom elements.
 *
 * @param prefix — tag-name prefix (default `"ghs"`). Each element is registered
 *   as `{prefix}-{id}`, e.g. `ghs-ghs01-explosive` or `ghs-division-2-3`.
 *   Pass a custom string to avoid conflicts with other libraries. May be called
 *   several times with different prefixes.
 * @example
 * ```ts
 * import { defineCustomElements } from '@ghs-hazard-pictograms/elements';
 * defineCustomElements(); // registers ghs-ghs01-explosive, ghs-division-2-3, etc.
 * ```
 */
export function defineCustomElements(prefix = 'ghs'): void {
  for (const [cls, defaultTag] of _elements) {
    const tag = prefix === 'ghs' ? defaultTag : `${prefix}-${defaultTag.replace(/^ghs-/, '')}`;
    if (customElements.get(tag)) continue;
    // A constructor can only be registered once, so other prefixes get their own subclass.
    customElements.define(tag, tag === defaultTag ? cls : class extends cls {});
  }
}
