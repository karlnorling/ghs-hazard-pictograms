import { defineComponent, h } from 'vue';
import type { PropType } from 'vue';
import { getPictogram } from '@ghs-hazard-pictograms/core';
import { pictogramProps } from './PictogramProps';

const _h = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');

interface ParsedSvg {
  attrs: string;
  body: string;
  width: string;
  height: string;
}

const _cache = new Map<string, ParsedSvg>();

function parseSvg(svg: string): ParsedSvg {
  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
  const widthMatch = svg.match(/<svg[^>]*\swidth="([^"]+)"/);
  const heightMatch = svg.match(/<svg[^>]*\sheight="([^"]+)"/);
  const bodyMatch = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  return {
    attrs: `xmlns="http://www.w3.org/2000/svg"${viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : ''}`,
    body: bodyMatch ? bodyMatch[1] : '',
    width: widthMatch ? widthMatch[1] : '772',
    height: heightMatch ? heightMatch[1] : '772',
  };
}

function getParsedSvg(svg: string): ParsedSvg {
  let parsed = _cache.get(svg);
  if (!parsed) {
    parsed = parseSvg(svg);
    _cache.set(svg, parsed);
  }
  return parsed;
}

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
    return () => {
      const pictogram = getPictogram(props.id);
      if (!pictogram) return null;

      const { attrs: svgAttrs, body, width: defaultWidth, height: defaultHeight } = getParsedSvg(pictogram.svg);
      const resolvedTitle = props.title ?? pictogram.name;
      const resolvedDesc = props.description ?? pictogram.description;
      const _w = props.width !== undefined ? _h(String(props.width)) : defaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : defaultHeight;
      const descId = `ghs-desc-${props.id}`;
      const titleId = `ghs-title-${props.id}`;

      const svgHtml = `<svg ${svgAttrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${body}</svg>`;

      return h('span', {
        ...attrs,
        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },
        innerHTML: svgHtml,
      });
    };
  },
});
