import { defineComponent, h } from 'vue';
import type { PropType } from 'vue';
import { getPictogram, renderSvg, splitSvg } from '@ghs-hazard-pictograms/core';
import { pictogramProps } from './PictogramProps';

let _instances = 0;

/**
 * Renders any GHS hazard or ADR/UN transport pictogram by slug ID.
 *
 * Useful for data-driven rendering where the pictogram ID comes from an API
 * response or user input rather than being known at compile time.
 *
 * Returns `null` for unrecognised IDs so callers can handle missing pictograms
 * gracefully without a try/catch.
 *
 * @example
 * ```html
 * <PictogramById id="ghs01-explosive" :width="64" />
 * ```
 */
export const PictogramById = defineComponent({
  name: 'PictogramById',
  inheritAttrs: false,
  props: {
    ...pictogramProps,
    /** Pictogram slug ID, e.g. `"ghs01-explosive"` or `"division-2-3"`. */
    id: { type: String as PropType<string>, required: true },
  },
  setup(props, { attrs }) {
    const instance = ++_instances;
    return () => {
      const pictogram = getPictogram(props.id);
      if (!pictogram) return null;

      const { 'aria-label': ariaLabel, style, ...rest } = attrs;
      const svgHtml = renderSvg(splitSvg(pictogram.svg), {
        uid: `ghs-${props.id}-byid${instance}`,
        title: props.title ?? pictogram.name,
        description: props.description ?? pictogram.description,
        ariaLabel: ariaLabel != null ? String(ariaLabel) : undefined,
        width: props.width,
        height: props.height,
      });

      return h('span', { ...rest, style: [{ display: 'contents' }, style], innerHTML: svgHtml });
    };
  },
});
