/**
 * SVG rendering helpers shared by the framework packages' `PictogramById`
 * components. Framework-agnostic: everything here works on plain strings.
 *
 * @module ghs-hazard-pictograms/svg
 */

/** Escapes a string for safe use in HTML text content and double/single-quoted attributes. */
export const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');

/**
 * Prefixes every `id="…"` in an SVG body with `prefix-`, and rewrites the
 * `url(#…)` and `href="#…"` references that point at them, so several copies
 * of the same SVG can live in one document without their IDs colliding.
 */
export function scopeSvgIds(body: string, prefix: string): string {
  const ids = new Set<string>();
  for (const match of body.matchAll(/\bid="([^"]+)"/g)) ids.add(match[1]);
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

/**
 * Placeholder that {@link splitSvg} puts in front of every ID in an SVG body.
 * {@link renderSvg} replaces it with a per-instance prefix.
 */
export const UID_PLACEHOLDER = '__GHS_UID__';

/** The pieces of a pictogram SVG needed to re-emit it with custom size and labelling. */
export interface SvgParts {
  /** Root `<svg>` attributes other than `width`/`height` (always includes `viewBox`). */
  attrs: string;
  /** Everything between the root `<svg>` tags, with IDs prefixed by {@link UID_PLACEHOLDER}. */
  body: string;
  /** Intrinsic width, used when no width is requested. */
  width: string;
  /** Intrinsic height, used when no height is requested. */
  height: string;
}

const _partsCache = new Map<string, SvgParts>();

/**
 * Splits an SVG document (as stored in `Pictogram.svg`) into its root
 * attributes, body and intrinsic size. Results are cached by the SVG string.
 */
export function splitSvg(svg: string): SvgParts {
  let parts = _partsCache.get(svg);
  if (parts) return parts;

  const match = svg.match(/<svg\b([^>]*)>([\s\S]*)<\/svg>/);
  const rootAttrs = match ? match[1] : '';
  const width = rootAttrs.match(/\swidth="([^"]+)"/);
  const height = rootAttrs.match(/\sheight="([^"]+)"/);
  parts = {
    attrs: rootAttrs
      .replace(/\s+width="[^"]*"/, '')
      .replace(/\s+height="[^"]*"/, '')
      .trim(),
    body: scopeSvgIds(match ? match[2] : '', UID_PLACEHOLDER),
    width: width ? width[1] : '100%',
    height: height ? height[1] : '100%',
  };
  _partsCache.set(svg, parts);
  return parts;
}

/** Options for {@link renderSvg}. */
export interface RenderSvgOptions {
  /**
   * Unique, document-wide prefix for every ID emitted in the markup. Must be
   * different for each rendered instance.
   */
  uid: string;
  /** Accessible title, rendered as `<title>`. */
  title: string;
  /** Accessible description, rendered as `<desc>`. */
  description: string;
  /** When set, labels the SVG directly instead of via its `<title>`/`<desc>`. */
  ariaLabel?: string;
  /** Requested width; falls back to the intrinsic width. */
  width?: number | string | null;
  /** Requested height; falls back to the intrinsic height. */
  height?: number | string | null;
}

/**
 * Renders an accessible inline `<svg>` string from {@link SvgParts}, scoping
 * every internal ID with `options.uid`.
 */
export function renderSvg(parts: SvgParts, options: RenderSvgOptions): string {
  const { uid, title, description, ariaLabel, width, height } = options;
  const w = width != null ? escapeHtml(String(width)) : parts.width;
  const h = height != null ? escapeHtml(String(height)) : parts.height;
  const titleId = `${uid}--title`;
  const descId = `${uid}--desc`;
  const label =
    ariaLabel != null
      ? `aria-label="${escapeHtml(ariaLabel)}"`
      : `aria-labelledby="${titleId} ${descId}"`;
  return `<svg ${parts.attrs} width="${w}" height="${h}" role="img" ${label}>
  <title id="${titleId}">${escapeHtml(title)}</title>
  <desc id="${descId}">${escapeHtml(description)}</desc>
  ${parts.body.replaceAll(UID_PLACEHOLDER, uid)}</svg>`;
}
