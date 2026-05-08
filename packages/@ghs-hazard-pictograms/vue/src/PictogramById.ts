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

function scopeIds(body: string, prefix: string): string {
  const ids = new Set<string>();
  body.replace(/\bid="([^"]+)"/g, (_, id: string) => {
    ids.add(id);
    return _;
  });
  if (ids.size === 0) return body;
  let out = body;
  for (const id of ids) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out
      .replace(new RegExp(`\\bid="${esc}"`, 'g'), `id="${prefix}-${id}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, 'g'), `url(#${prefix}-${id})`)
      .replace(new RegExp(`href="#${esc}"`, 'g'), `href="#${prefix}-${id}"`);
  }
  return out;
}

interface ParsedSvg {
  attrs: string;
  body: string;
  width: string;
  height: string;
}

const _cache = new Map<string, ParsedSvg>();

function parseSvg(svg: string, id: string): ParsedSvg {
  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
  const widthMatch = svg.match(/<svg[^>]*\swidth="([^"]+)"/);
  const heightMatch = svg.match(/<svg[^>]*\sheight="([^"]+)"/);
  const bodyMatch = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const rawWidth = widthMatch ? widthMatch[1] : '772';
  const rawHeight = heightMatch ? heightMatch[1] : '772';
  const body = scopeIds(bodyMatch ? bodyMatch[1] : '', id);
  return {
    attrs: `xmlns="http://www.w3.org/2000/svg"${viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : ''}`,
    body,
    width: rawWidth.replace(/px$/, ''),
    height: rawHeight.replace(/px$/, ''),
  };
}

function getParsedSvg(svg: string, id: string): ParsedSvg {
  let parsed = _cache.get(id);
  if (!parsed) {
    parsed = parseSvg(svg, id);
    _cache.set(id, parsed);
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

      const { attrs: svgAttrs, body, width: defaultWidth, height: defaultHeight } = getParsedSvg(pictogram.svg, props.id);
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
