// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = ` xmlns="http://www.w3.org/2000/svg" width="103.5" height="103.425"`;
const _Body = `<path d="m0 0 41.28-41.28L82.8 0 41.28 41.46z" style="fill:#da251d;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 0 51.825)"/><path d="M398.002 757.766h20.4v-2.1h-20.4z" style="fill:#1f1a17;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(-355.702 -711.34)"/><path d="m0 0 .72.24.72.72.48 1.68.24 1.68v.72l.96-1.92.24-2.16V-.96l-.72-1.68 1.2.72.96.96.72 1.44c1.207-3.593.88-4.381-1.2-7.44L6-6.48l.96.72.24.72v.48l-.24-3.36-.72-2.4-1.2-1.92-1.44-.96-1.44-.72-1.44-.24h-1.2l.48.24.96.72 1.44 1.44L3.6-9.6l-1.2-.72-.96-.24H.48l.48.48.72.96.48 1.44v2.16l-.48-1.2-1.44-.96-.72-.72v2.88L-.96-3.6l-.96 1.44-.96.96v-1.92L-3.84-6v-.96l.24-1.44-.96.48-.72.48-.48.72-.48 1.2v-1.2l-.24-.96.48-1.2.48-.72.72-.96-1.68.24-.72.24-.96.72.96-2.16 1.44-1.68 1.44-.72 1.68-.24-3.6.24-2.4.96-1.68 1.2-.96 1.68-1.44 5.04-.24 1.44.72-.72.72-.96.96-.72 1.68-.24c-2.175 3.78-1.014 4.192-1.68 7.92l.96-.96.48-.72.72-.96.96-.72-.48 1.44v1.2l.24 1.92.24 1.2-.24 1.2.96-.24.48-.48.48-1.2.24-1.44.72-1.44c2.068 3.688.374 6.789 1.92 10.08l.48-2.4 1.44-2.64L0 2.88l.24-1.44z" style="fill:#1f1a17;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="matrix(1.25 0 0 -1.25 55.5 24.525)"/><text x="404.621" y="795.255" style="font-size:14.96593475px" transform="matrix(.99773 0 0 1.00228 -355.702 -711.34)">
      <tspan x="404.621" y="795.255" style="font-size:12.56265545px;font-variant:normal;font-weight:700;font-stretch:normal;writing-mode:lr-tb;fill:#1f1a17;fill-opacity:1;fill-rule:nonzero;stroke:none;font-family:Arial;-inkscape-font-specification:Arial-BoldMT">3</tspan>
    </text><path d="m-9746.967 618.227 45.224 45 45-45-45-44.925z" style="fill:none;stroke:#1f1a17;stroke-width:.89874995;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(9753.605 -566.552)"/>`;
const _DefaultDesc = `Flammable liquids – Liquids which have a flash point of less than 60 °C and which are capable of sustaining combustion`;
const _DefaultTitle = 'Class 3';
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Class3 = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-class-3`;
  const titleId = `ghs-title-class-3`;
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
Class3.displayName = 'Class3';
