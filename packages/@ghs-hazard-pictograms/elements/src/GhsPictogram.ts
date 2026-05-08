import { getPictogram } from '@ghs-hazard-pictograms/core';

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
 * Generic GHS/ADR pictogram custom element — renders any pictogram by slug ID.
 *
 * Attributes:
 * - `pictogram-id` — slug ID, e.g. `"ghs01-explosive"` or `"division-2-3"`
 * - `title`        — overrides the SVG accessible title (defaults to pictogram name)
 * - `description`  — overrides the SVG description (defaults to pictogram description)
 * - `width`        — forwarded to the `<svg>` width attribute
 * - `height`       — forwarded to the `<svg>` height attribute
 *
 * @example
 * ```html
 * <ghs-pictogram pictogram-id="ghs01-explosive" width="64"></ghs-pictogram>
 * ```
 */
export class GhsPictogram extends HTMLElement {
  static readonly tagName = 'ghs-pictogram';
  static readonly observedAttributes = ['pictogram-id', 'title', 'description', 'width', 'height'];

  connectedCallback(): void {
    this._render();
  }

  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const pictogramId = this.getAttribute('pictogram-id');
    if (!pictogramId) {
      this.innerHTML = '';
      return;
    }
    const pictogram = getPictogram(pictogramId);
    if (!pictogram) {
      this.innerHTML = '';
      return;
    }

    const { attrs, body, width: defaultWidth, height: defaultHeight } = getParsedSvg(pictogram.svg, pictogramId);
    const resolvedTitle = this.getAttribute('title') ?? pictogram.name;
    const resolvedDesc = this.getAttribute('description') ?? pictogram.description;
    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : defaultWidth;
    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : defaultHeight;
    const descId = `ghs-desc-${pictogramId}`;
    const titleId = `ghs-title-${pictogramId}`;

    this.style.display = 'contents';
    this.innerHTML = `<svg ${attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${body}</svg>`;
  }
}
