// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { GhsPictogram } from './GhsPictogram';
import { Ghs01Explosive } from './Ghs01Explosive';
import { Ghs02Flammable } from './Ghs02Flammable';
import { Ghs03Oxidizing } from './Ghs03Oxidizing';
import { Ghs04CompressedGas } from './Ghs04CompressedGas';
import { Ghs05Corrosive } from './Ghs05Corrosive';
import { Ghs06Toxic } from './Ghs06Toxic';
import { Ghs07HealthHazardHazardousToOzoneLayer } from './Ghs07HealthHazardHazardousToOzoneLayer';
import { Ghs08SeriousHealthHazard } from './Ghs08SeriousHealthHazard';
import { Ghs09HazardousToTheEnvironment } from './Ghs09HazardousToTheEnvironment';
import { Divisions1113 } from './Divisions1113';
import { Division14 } from './Division14';
import { Division15 } from './Division15';
import { Division16 } from './Division16';
import { Division21 } from './Division21';
import { Division22 } from './Division22';
import { Division23 } from './Division23';
import { Class3 } from './Class3';
import { Division51 } from './Division51';
import { Division52 } from './Division52';
import { Division61 } from './Division61';
import { Class8 } from './Class8';
import { Class62 } from './Class62';
import { Class7 } from './Class7';
import { Class9 } from './Class9';

const _elements: Array<[typeof HTMLElement & { tagName: string }, string]> = [
  [GhsPictogram, GhsPictogram.tagName],
  [Ghs01Explosive, Ghs01Explosive.tagName],
  [Ghs02Flammable, Ghs02Flammable.tagName],
  [Ghs03Oxidizing, Ghs03Oxidizing.tagName],
  [Ghs04CompressedGas, Ghs04CompressedGas.tagName],
  [Ghs05Corrosive, Ghs05Corrosive.tagName],
  [Ghs06Toxic, Ghs06Toxic.tagName],
  [Ghs07HealthHazardHazardousToOzoneLayer, Ghs07HealthHazardHazardousToOzoneLayer.tagName],
  [Ghs08SeriousHealthHazard, Ghs08SeriousHealthHazard.tagName],
  [Ghs09HazardousToTheEnvironment, Ghs09HazardousToTheEnvironment.tagName],
  [Divisions1113, Divisions1113.tagName],
  [Division14, Division14.tagName],
  [Division15, Division15.tagName],
  [Division16, Division16.tagName],
  [Division21, Division21.tagName],
  [Division22, Division22.tagName],
  [Division23, Division23.tagName],
  [Class3, Class3.tagName],
  [Division51, Division51.tagName],
  [Division52, Division52.tagName],
  [Division61, Division61.tagName],
  [Class8, Class8.tagName],
  [Class62, Class62.tagName],
  [Class7, Class7.tagName],
  [Class9, Class9.tagName],
];

/**
 * Registers all GHS hazard and ADR/UN transport pictogram custom elements.
 *
 * @param prefix — tag-name prefix (default `"ghs"`). Each element is registered
 *   as `{prefix}-{id}`, e.g. `ghs-ghs01-explosive` or `ghs-division-2-3`.
 *   Pass a custom string to avoid conflicts with other libraries.
 * @example
 * ```ts
 * import { defineCustomElements } from '@ghs-hazard-pictograms/elements';
 * defineCustomElements(); // registers ghs-ghs01-explosive, ghs-division-2-3, etc.
 * ```
 */
export function defineCustomElements(prefix = 'ghs'): void {
  for (const [cls, defaultTag] of _elements) {
    const tag = prefix === 'ghs' ? defaultTag : `${prefix}-${defaultTag.replace(/^ghs-/, '')}`;
    if (!customElements.get(tag)) customElements.define(tag, cls);
  }
}
