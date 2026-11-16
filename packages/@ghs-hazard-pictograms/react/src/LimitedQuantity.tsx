// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps.js';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 91.242 91.244"`;
const _Body = `<path fill="#fff" stroke="#000" stroke-width=".88" d="M45.624.622 90.623 45.62l-45 45L.625 45.622z"/><path d="M21.395 66.396h48.529L45.611 90.623zm48.448-41.549H21.314L45.623.62zM43.146 55.938v-7.625L36.51 37.828h4.288l4.263 7.163 4.176-7.163h4.21l-6.66 10.51v7.6z"/>`;
const _DefaultDesc = `Marks packages of dangerous goods carried as limited quantities (ADR 3.4.7). The air-transport variant adds the word LTD QTY.`;
const _DefaultTitle = 'Limited quantity';
const _DefaultWidth = `91.242`;
const _DefaultHeight = `91.244`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const LimitedQuantity = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description: resolvedDesc = _DefaultDesc,
  height,
  style,
  title: resolvedTitle = _DefaultTitle,
  width,
}) => {
  const uid = `ghs-limited-quantity-${React.useId().replace(/[^\w-]/g, '')}`;
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
LimitedQuantity.displayName = 'LimitedQuantity';
