// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1133.859 850.394"`;
const _Body = `<path fill="#f7941e" d="M0 0h1133.859v850.394H0z"/><path d="M1091.339 42.52v765.354H42.52V42.52zM1133.859 0H0v850.394h1133.859z"/>`;
const _DefaultDesc = `Orange-coloured plate marking. Carries the hazard identification (Kemler) number above the UN number; shown blank here (ADR 5.3.2).`;
const _DefaultTitle = 'Orange plate';
const _DefaultWidth = `1133.859`;
const _DefaultHeight = `850.394`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
let _instances = 0;

export class OrangePlate extends HTMLElement {
  static readonly tagName = 'ghs-orange-plate';
  static readonly observedAttributes = ['title', 'description', 'width', 'height', 'aria-label'];

  private readonly _uid = `ghs-orange-plate-${++_instances}`;

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
