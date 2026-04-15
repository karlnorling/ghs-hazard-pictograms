// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg"`;
const _Body = `<path d="m0 0 41.52-41.28L82.8 0 41.52 41.28z" style="fill:#4bb033;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 0 51.6)"/><path d="m0 0 36.24-36 36 36-36 36z" style="fill:none;stroke:#1f1a17;stroke-width:.71899998;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.25 0 0 -1.25 6.6 51.6)"/><path d="m0 0 4.8 1.2 4.56 1.44 4.8 1.2 4.56 1.2 1.68-.48 1.44-.72 4.32.96h.48l.24-.72v-.72l-.24-.24-2.16-.72-1.92-.48-.96-1.2-.72-1.2-4.8-1.2-4.8-1.44-5.04-1.2-4.8-1.44H1.2l-.48.24H.24C-.904-3.977-1.872-1.399 0 0" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 33.9 31.5)"/><path d="M0 0c.387 3.25 2.005 2.662 3.36 4.8l-.24.48v.48h-.24L2.4 6c-.938-1.018-.701-.273-.72-1.68H0v.48L.48 6l.48.72.72.48.96.24.96-.24.72-.48L4.8 6l.24-.96v-.72l-.48-.72-.72-.72-.96-.48-.48-.72h2.64V0z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 48.9 90.6)"/><path d="M0 0c.387 3.25 2.005 2.662 3.36 4.8l-.24.48v.48h-.24L2.4 6c-.938-1.018-.701-.273-.72-1.68H0v.48L.48 6l.48.72.72.48.96.24.96-.24.72-.48L4.8 6l.24-.96v-.72l-.48-.72-.72-.72-.96-.48-.48-.72h2.64V0z" style="fill:none;stroke:#1f1a17;stroke-width:.06;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.25 0 0 -1.25 48.9 90.6)"/>`;
const _DefaultDesc = `Non-flammable non-toxic gases – Gases which:`;
const _DefaultTitle = 'Division 2.2';
const _DefaultWidth = `103.5`;
const _DefaultHeight = `103.2`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Division22 = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-division-2-2`;
  const titleId = `ghs-title-division-2-2`;
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
Division22.displayName = 'Division22';
