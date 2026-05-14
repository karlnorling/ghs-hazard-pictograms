// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 708.251 711.986"`;
const _Body = `<path fill="#ef4136" d="M44.183 358.086H0l353.899 353.9 353.906-353.9h-43.027"/><path fill="#fff" d="M665.225 357.989h43.026L354.346 4.089l-353.9 353.9h44.183z"/><path d="m282.307 252.592 8.059 14.209 15.805 10.953 19.967 7.307 14.61 1.297 15.747.488-15.747-2.923-11.313-6.335-11.089-12.008-8.443-18.669 7.469 5.519 7.395 1.986 14.689 1.561-6.091-8.971-5.605-4.965-1.622-9.579-.168-17.435 3.089 8.831 4.708 6.331 6.494 4.383 7.954 3.409-1.89-12.772-.156-9.027 6.558-12.468 5.438-16.967-1.306-9.571 8.049 8.265 7.614 11.53 3.426 16.3-1.836 23.128 12.247-7.017 9.097-6.336 3.198-8.55.191 17.282-3.876 11.886-6.493 8.441-6.981 4.384 10.065-.162 9.902-1.785 9.09-5.847-9.74 18.346-12.174 11.524-9.004 4.861-5.917 3.658 13.298-.076 10.715-2.697 12.745-6.231 12.036-8.353 9.47-16.323 6.331-20.131 1.136-28.246-2.109 10.065-7.954 6.17-13.15 3.408 8.258-12.433 4.079-9.319 3.409-15.26-1.785-10.716-4.384-15.421-7.954 12.663-6.064 9.076-10.306 4.686 5.981-15.223 1.817-17.737-3.44-15.056-6.835-16.531-1.907 19.622-5.927 13.672-4.325 7.262-5.845 1.299 1.957-12.66-2.118-11.529-10.39-22.726-10.228-22.728-6.006-20.616-4.383 11.2-1.958 10.209-.079 23.194-.296 17.985-2.375 11.112-5.357 12.176-5.539-11.325-2.393-12.833-3.48-9.137-6.445-4.691-9.578-4.221 4.708 13.475-2.273 10.55-1.786 11.04.163 15.746 3.896 10.714-8.116-4.868-8.118-9.416-10.521-15.706 2.242 18.628-1.948 12.012 1.786 16.072 4.219 8.997 7.631 12.919-13.799-1.948-8.833-7.072-4.784-6.744-8.623-6.801 2.273 12.174zm.361 46.756h142.579v17.498H282.668z"/><path d="m354.479 672.968 312.594-312.587-2.295-2.294L354.479 47.793 44.183 358.086l-2.292 2.293zm0-611.405c6.376 6.375 268.598 268.593 296.527 296.524 1.229 1.228 2.014 2.015 2.295 2.294-6.655 6.654-292.166 292.161-298.822 298.814-6.655-6.653-292.164-292.16-298.818-298.816l2.294-2.293z"/><path d="M357.444 626.429h11.67V613.99h7.859v-10.386h-7.859v-39.108h-10.125l-27.265 39.15v10.344h25.72zm-14.446-22.825 14.447-20.958v20.958zM5.274 345.543l32.021-32.022 5.703 5.703-32.022 32.022zm49.834-49.831 32.021-32.022 5.702 5.702-32.021 32.022zm50.542-50.542 32.022-32.021 5.702 5.702-32.021 32.02zm50.54-50.534 32.023-32.023 5.702 5.702-32.022 32.023zm50.543-50.549 32.021-32.02 5.703 5.702-32.02 32.021zm49.711-49.708 32.02-32.021 5.703 5.702-32.021 32.02zM355.28 5.716l5.702-5.703 32.026 32.017-5.7 5.703zm50.301 50.303 5.702-5.703 32.026 32.017-5.701 5.703zm50.295 50.288 5.703-5.703 32.022 32.022-5.703 5.703zm50.331 50.287 5.701-5.704 32.031 32.018-5.701 5.703zm50.275 50.333 5.701-5.703 32.027 32.018-5.701 5.703zm50.3 50.303 5.7-5.703 32.027 32.018-5.701 5.702zm50.3 50.303 5.701-5.703 32.026 32.018-5.7 5.702zM307.069 43.755l32.02-32.021 5.703 5.702-32.021 32.02z"/>`;
const _DefaultDesc = `Substances liable to spontaneous combustion – Substances which are liable to spontaneous heating under normal conditions encountered in transport, or to heating up in contact with air, and being then liable to catch fire`;
const _DefaultTitle = 'Division 4.2';
const _DefaultWidth = `708.251`;
const _DefaultHeight = `711.986`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Division42 extends HTMLElement {
  static readonly tagName = 'ghs-division-4-2';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `ghs-desc-division-4-2`;
    const titleId = `ghs-title-division-4-2`;
    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : _DefaultWidth;
    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : _DefaultHeight;
    const resolvedTitle = this.getAttribute('title') ?? _DefaultTitle;
    const resolvedDesc = this.getAttribute('description') ?? _DefaultDesc;
    this.style.display = 'contents';
    this.innerHTML = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
  }
}
