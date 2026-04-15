// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg"`;
const _Body = `<path d="m321.152 610.926 51.825 51.6 51.9-51.6-51.9-51.525z" style="fill:#e77817;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(-321.152 -559.401)"/><path d="M372.377 630.126v2.1l-2.4-.9-.3 1.8 2.1.6-1.5 1.8 1.5.9 1.2-1.8 1.5 1.8 1.2-.9-1.5-1.8 2.4-.6-.6-1.8-2.1.9v-2.1zm0 11.1-.6 1.2-1.5.3v1.2h1.8v6h1.8v-8.7z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(-321.152 -559.401)"/><path d="m328.052 610.926 44.925 45 45-45-45-44.925z" style="fill:none;stroke:#1f1a17;stroke-width:.89874995;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none" transform="translate(-321.152 -559.401)"/><path d="M376.577 585.201h12v3.6h-9l-.6 4.2.9-.3.9-.6h3.3l1.5.3 1.2.6c3.232 2.499 3.024 5.206 2.4 8.925l-1.8 2.4-1.2.6-1.2.9-1.5.3h-3.3c-4.024-1.164-5.063-2.025-5.7-6.225h4.2l.3 1.425.6.9.9.3 1.2.3h.9l1.8-.9.6-1.125.3-1.8-.3-1.5-.6-1.2-1.2-.6-1.5-.3h-.6l-.9.3-.6.3-.6.9-3.6-.3z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(-321.152 -559.401)"/><path d="M367.577 605.526h4.5v-4.2h-4.5z" style="fill:#1f1a17;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(-321.152 -559.401)"/><path d="M360.752 584.601h3.3v20.925h-3.9v-14.325h-5.1v-2.7l2.7-.3 1.5-.6 1.2-1.2.3-.9z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(-321.152 -559.401)"/>`;
const _DefaultDesc = `Explosives – Very insensitive substances which have a mass explosion hazard`;
const _DefaultTitle = 'Division 1.5';
const _DefaultWidth = `103.725`;
const _DefaultHeight = `103.125`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Division15 = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-division-1-5`;
  const titleId = `ghs-title-division-1-5`;
  const _w = width !== undefined ? _h(String(width)) : _DefaultWidth;
  const _ht = height !== undefined ? _h(String(height)) : _DefaultHeight;
  const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(title)}</title>
  <desc id="${descId}">${_h(description)}</desc>
  ${_Body}</svg>`;
  return (
    <span
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
      style={{ display: 'contents', ...style }}
    />
  );
});
Division15.displayName = 'Division15';
