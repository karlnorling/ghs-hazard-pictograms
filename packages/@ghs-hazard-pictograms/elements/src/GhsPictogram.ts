import { getPictogram } from '@ghs-hazard-pictograms/core';

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

    const { attrs, body, width: defaultWidth, height: defaultHeight } = getParsedSvg(pictogram.svg);
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
