// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 438 591"`;
const _Body = `<path d="M0 1h437v590H0z"/><path fill="#fff" d="M28 29h379v535H28z"/><path d="M46 501h345v28H46zm166-325.84-33.333-5.666 7 313.326-34-6.333L117 482.82l2-313.326-31 5.665 60.333-93.999zm133 0-33.333-5.666 7 313.326-34-6.333L250 482.82l2-313.326-31 5.665 60.334-93.999z"/>`;
const _DefaultDesc = `Orientation arrows showing which way up a package of liquids must be kept (ADR 5.2.1.10).`;
const _DefaultTitle = 'Package orientation';
const _DefaultWidth = `438`;
const _DefaultHeight = `591`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const PackageOrientation = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description: resolvedDesc = _DefaultDesc,
  height,
  style,
  title: resolvedTitle = _DefaultTitle,
  width,
}) => {
  const uid = `ghs-package-orientation-${React.useId().replace(/[^\w-]/g, '')}`;
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
PackageOrientation.displayName = 'PackageOrientation';
