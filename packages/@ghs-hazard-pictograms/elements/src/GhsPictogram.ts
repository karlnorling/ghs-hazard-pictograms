import { getPictogram, renderSvg, splitSvg } from '@ghs-hazard-pictograms/core';

let _instances = 0;

/**
 * Generic GHS/ADR pictogram custom element — renders any pictogram by slug ID.
 *
 * Attributes:
 * - `pictogram-id` — slug ID, e.g. `"ghs01-explosive"` or `"division-2-3"`
 * - `title`        — overrides the SVG accessible title (defaults to pictogram name)
 * - `description`  — overrides the SVG description (defaults to pictogram description)
 * - `width`        — forwarded to the `<svg>` width attribute
 * - `height`       — forwarded to the `<svg>` height attribute
 * - `aria-label`   — labels the `<svg>` directly instead of via its `<title>`/`<desc>`
 *
 * @example
 * ```html
 * <ghs-pictogram pictogram-id="ghs01-explosive" width="64"></ghs-pictogram>
 * ```
 */
export class GhsPictogram extends HTMLElement {
  static readonly tagName = 'ghs-pictogram';
  static readonly observedAttributes = [
    'pictogram-id',
    'title',
    'description',
    'width',
    'height',
    'aria-label',
  ];

  private readonly _instance = ++_instances;

  connectedCallback(): void {
    this._render();
  }

  attributeChangedCallback(): void {
    if (this.isConnected) this._render();
  }

  private _render(): void {
    const pictogramId = this.getAttribute('pictogram-id');
    const pictogram = pictogramId ? getPictogram(pictogramId) : undefined;
    if (!pictogramId || !pictogram) {
      this.innerHTML = '';
      return;
    }

    if (!this.style.display) this.style.display = 'contents';
    this.innerHTML = renderSvg(splitSvg(pictogram.svg), {
      uid: `ghs-${pictogramId}-byid${this._instance}`,
      title: this.getAttribute('title') ?? pictogram.name,
      description: this.getAttribute('description') ?? pictogram.description,
      ariaLabel: this.getAttribute('aria-label') ?? undefined,
      width: this.getAttribute('width'),
      height: this.getAttribute('height'),
    });
  }
}
