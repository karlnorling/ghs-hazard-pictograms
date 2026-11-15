// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1133.859 850.394"`;
const _Body = `<path fill="#f7941e" d="M0 0h1133.859v850.394H0z"/><path d="M1091.339 42.52v765.354H42.52V42.52zM1133.859 0H0v850.394h1133.859z"/>`;
const _DefaultDesc = `Orange-coloured plate marking. Carries the hazard identification (Kemler) number above the UN number; shown blank here (ADR 5.3.2).`;
const _DefaultTitle = 'Orange plate';
const _DefaultWidth = `1133.859`;
const _DefaultHeight = `850.394`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const OrangePlate = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description: resolvedDesc = _DefaultDesc,
  height,
  style,
  title: resolvedTitle = _DefaultTitle,
  width,
}) => {
  const uid = `ghs-orange-plate-${React.useId().replace(/[^\w-]/g, '')}`;
  const _w = width !== undefined ? _h(String(width)) : _DefaultWidth;
  const _ht = height !== undefined ? _h(String(height)) : _DefaultHeight;
  const titleId = `${uid}--title`;
  const descId = `${uid}--desc`;
  const label = ariaLabel != null ? `aria-label="${_h(String(ariaLabel))}"` : `aria-labelledby="${titleId} ${descId}"`;
  const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" ${label}>
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
      style={{ display: 'contents', ...style }}
    />
  );
});
OrangePlate.displayName = 'OrangePlate';
