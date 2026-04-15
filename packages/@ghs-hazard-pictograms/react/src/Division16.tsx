// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = ` xmlns="http://www.w3.org/2000/svg" width="103.125" height="103.125"`;
const _Body = `<path d="m0 0 41.28-41.28L82.5 0 41.28 41.22z" style="fill:#e77817;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 0 51.525)"/><path d="M0 0v-1.68l-1.68.72-.24-1.44 1.68-.48-1.2-1.44.96-.72L.72-3.6l.96-1.44 1.2.72-1.2 1.44 1.68.48-.24 1.44-1.92-.72V0z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 50.7 70.725)"/><path d="m0 0-.48-.96-1.44-.24v-1.2h1.68v-4.8H1.2V0z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 51.664 81.825)"/><path d="M0 0h-3.36c-.384 1.532-1.459 1.85-2.88 1.68l-.96-.48-.24-.48-.48-1.44-.24-1.92.48.48.72.48H-6l.96.24 1.2-.24c2.3-.421 3.648-1.776 4.08-4.08.732-5.571-3.369-8.087-8.4-6.66-4.768 2.262-4.657 12.444-.96 15.54 1.684 1.439 3.97 1.487 6 .96C-1.03 3.442-.312 1.996 0 0" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 68.4 30.6)"/><path d="M0 0h-.96l-.72-.72-.72-.96v-.96l.24-1.44.48-.9.24-.48c3.386-1.034 4.516.578 4.08 4.02L1.2 0z" style="fill:#e77817;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 61.2 36)"/><path d="M480.084 685.54h4.5v-4.424h-4.5z" style="fill:#1f1a17;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(-433.584 -639.416)"/><path d="M0 0h2.64v-16.74H-.48v11.46h-4.08v2.4h.24l1.92.24 1.2.48.48.24.48.48.24.72z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 39.6 25.2)"/><path d="m-9746.967 618.227 45.224 45 45-45-45-44.925z" style="fill:none;stroke:#1f1a17;stroke-width:.89874995;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(9753.417 -566.702)"/>`;
const _DefaultDesc = `Explosives – No hazard statement`;
const _DefaultTitle = 'Division 1.6';
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Division16 = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-division-1-6`;
  const titleId = `ghs-title-division-1-6`;
  const sizeAttrs = [_Attrs];
  if (height !== undefined) sizeAttrs.push(`height="${_h(String(height))}"`);
  if (width !== undefined) sizeAttrs.push(`width="${_h(String(width))}"`);
  const svgHtml = `<svg ${sizeAttrs.join(' ')} role="img" aria-labelledby="${titleId} ${descId}">
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
Division16.displayName = 'Division16';
