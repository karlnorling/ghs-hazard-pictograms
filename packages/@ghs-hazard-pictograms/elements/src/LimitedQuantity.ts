// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 91.242 91.244"`;
const _Body = `<path fill="#fff" stroke="#000" stroke-width=".88" d="M45.624.622 90.623 45.62l-45 45L.625 45.622z"/><path d="M21.395 66.396h48.529L45.611 90.623zm48.448-41.549H21.314L45.623.62zM43.146 55.938v-7.625L36.51 37.828h4.288l4.263 7.163 4.176-7.163h4.21l-6.66 10.51v7.6z"/>`;
const _DefaultDesc = `Marks packages of dangerous goods carried as limited quantities (ADR 3.4.7). The air-transport variant adds the word LTD QTY.`;
const _DefaultTitle = 'Limited quantity';
const _DefaultWidth = `91.242`;
const _DefaultHeight = `91.244`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
let _instances = 0;

export class LimitedQuantity extends HTMLElement {
  static readonly tagName = 'ghs-limited-quantity';
  static readonly observedAttributes = ['title', 'description', 'width', 'height', 'aria-label'];

  private readonly _uid = `ghs-limited-quantity-${++_instances}`;

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { if (this.isConnected) this._render(); }

  private _render(): void {
    const uid = this._uid;
    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : _DefaultWidth;
    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : _DefaultHeight;
    const resolvedTitle = this.getAttribute('title') ?? _DefaultTitle;
    const resolvedDesc = this.getAttribute('description') ?? _DefaultDesc;
    const ariaLabel = this.getAttribute('aria-label');
    const titleId = `${uid}--title`;
    const descId = `${uid}--desc`;
    const label = ariaLabel != null ? `aria-label="${_h(String(ariaLabel))}"` : `aria-labelledby="${titleId} ${descId}"`;
    const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" ${label}>
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
    if (!this.style.display) this.style.display = 'contents';
    this.innerHTML = svgHtml;
  }
}
