// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = ` xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5790 5790"`;
const _Body = `<path fill="#fff" d="m253 2897 2640 2640 2641-2640c-880-880-1760-1762-2640-2640z"/><path fill="red" d="m60 2897 2833 2833 2834-2834L2894 63zm5218 0L2893 5280 510 2896 2894 512l2384 2384"/><path d="M2892 1428h-20a475 475 0 0 0-301 121 229 229 0 0 0-64 113c-3 11-3 14-3 35s0 25 3 37c2 14 195 1314 197 1336a213 213 0 0 0 239 182 213 213 0 0 0 180-182c3-27 195-1324 198-1337 2-12 2-16 2-35 0-23 0-31-5-47a234 234 0 0 0-106-138 496 496 0 0 0-291-85h-30zm20 2011h-12a302 302 0 0 0-243 141 338 338 0 0 0-55 232 343 343 0 0 0 114 218 310 310 0 0 0 199 74 316 316 0 0 0 258-141 341 341 0 0 0 54-234 390 390 0 0 0-32-110 317 317 0 0 0-281-180"/>`;
const _DefaultDesc = `Acute toxicity (oral, dermal, inhalation), category 4
Skin irritation, categories 2, 3
Eye irritation, category 2A
Skin sensitization, category 1
Specific target organ toxicity following single exposure, category 3
Respiratory tract irritation
Narcotic effects`;
const _DefaultTitle = 'Health Hazard/Hazardous to Ozone Layer';
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ghs07HealthHazardHazardousToOzoneLayer = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-ghs07-health-hazard-hazardous-to-ozone-layer`;
  const titleId = `ghs-title-ghs07-health-hazard-hazardous-to-ozone-layer`;
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
Ghs07HealthHazardHazardousToOzoneLayer.displayName = 'Ghs07HealthHazardHazardousToOzoneLayer';
