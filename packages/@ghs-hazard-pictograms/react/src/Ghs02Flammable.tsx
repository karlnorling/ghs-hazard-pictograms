// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = ` xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579 579"`;
const _Body = `<path fill="#fff" d="m25 290 264 264 264-264L289 26z"/><path fill="red" d="M148 148 6 290l142 141 141 142 142-142 142-141-142-142L289 6zm261 22 119 120-119 119-120 119-119-119L51 290l119-120L289 51z"/><path d="M290 121c-18 34 3 53-20 102-13-10-6-47-30-48 3 12 1 16 0 20-3 17-8 31 3 52-17-8-18-23-32-33 3 16-4 49 15 81-17-2-23-8-41-26 19 100 34 103 105 109-6-1-42-7-55-48 0-10-1 9 34 10-22-35-16-28-14-48 10 13 2 15 27 25-8-26 13-43 8-73 6 13 26 11 25 73 17-19 18-6 26-26 1 11 6 25-17 49 6 2 16 3 31-8-15 18-1 18-40 46 49 1 81-30 80-97-2 6-3 18-29 21 16-16 25-49 12-75-5 4-12 24-29 29 8-14 6-32 6-32s3-25-12-45c-4 30-4 46-23 50 3-17 4-26-6-46-10-21-22-42-24-62m-81 274v18h171v-18z"/>`;
const _DefaultDesc = `Flammable gases, category 1
Flammable aerosols, categories 1, 2
Flammable liquids, categories 1, 2, 3, 4
Flammable solids, categories 1, 2
Self-reactive substances and mixtures, types B, C, D, E, F
Pyrophoric liquids, category 1
Pyrophoric solids, category 1
Combustible solids, category 3
Combustibl`;
const _DefaultTitle = 'Flammable';
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ghs02Flammable = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-ghs02-flammable`;
  const titleId = `ghs-title-ghs02-flammable`;
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
Ghs02Flammable.displayName = 'Ghs02Flammable';
