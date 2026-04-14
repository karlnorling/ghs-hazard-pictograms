// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = ` xmlns="http://www.w3.org/2000/svg" width="103.125" height="103.125"`;
const _Body = `<path d="m0 0 41.22-41.28L82.5 0 41.22 41.22z" style="fill:#e77817;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 0 51.525)"/><path d="M0 0v-1.92l-1.68.72-.24-1.2 1.68-.72-1.2-1.44.96-.72 1.2 1.44.96-1.44 1.2.72-1.2 1.44 1.68.72-.24 1.2-1.92-.72V0z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 50.625 70.125)"/><path d="m0 0-.72-.96-1.44-.24v-.96h1.92v-4.8H1.2V0z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 51.225 81.825)"/><path d="M0 0h4.08v-10.08H6v-2.58H4.08v-3.6H.72v3.6h-6.96v3.06z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 61.425 26.7)"/><path d="m0 0-4.56-7.2H0z" style="fill:#e77817;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 62.625 30.3)"/><path d="M458.02 450.682h4.2v-4.5h-4.2z" style="fill:#1f1a17;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(-411.295 -403.657)"/><path d="M0 0h2.64v-16.74H-.72v11.46h-3.84v2.4l1.92.24 1.44.48.48.24.24.48z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 39.825 26.1)"/><path d="m-9746.967 618.227 45.224 45 45-45-45-44.925z" style="fill:none;stroke:#1f1a17;stroke-width:.89874995;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(9752.876 -566.702)"/>`;
const _DefaultDesc = `Explosives – Substances and articles which are classified as explosives but which present no significant hazard`;
const _DefaultTitle = 'Division 1.4';

export const Division14 = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-division-1-4`;
  const titleId = `ghs-title-division-1-4`;
  const sizeAttrs = [_Attrs];
  if (height !== undefined) sizeAttrs.push(`height="${height}"`);
  if (width !== undefined) sizeAttrs.push(`width="${width}"`);
  const svgHtml = `<svg ${sizeAttrs.join(' ')} role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${title}</title>
  <desc id="${descId}">${description}</desc>
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
Division14.displayName = 'Division14';
