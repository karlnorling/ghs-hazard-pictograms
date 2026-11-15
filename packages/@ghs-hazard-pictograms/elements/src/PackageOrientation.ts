// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 438 591"`;
const _Body = `<path d="M0 1h437v590H0z"/><path fill="#fff" d="M28 29h379v535H28z"/><path d="M46 501h345v28H46zm166-325.84-33.333-5.666 7 313.326-34-6.333L117 482.82l2-313.326-31 5.665 60.333-93.999zm133 0-33.333-5.666 7 313.326-34-6.333L250 482.82l2-313.326-31 5.665 60.334-93.999z"/>`;
const _DefaultDesc = `Orientation arrows showing which way up a package of liquids must be kept (ADR 5.2.1.10).`;
const _DefaultTitle = 'Package orientation';
const _DefaultWidth = `438`;
const _DefaultHeight = `591`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
let _instances = 0;

export class PackageOrientation extends HTMLElement {
  static readonly tagName = 'ghs-package-orientation';
  static readonly observedAttributes = ['title', 'description', 'width', 'height', 'aria-label'];

  private readonly _uid = `ghs-package-orientation-${++_instances}`;

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
