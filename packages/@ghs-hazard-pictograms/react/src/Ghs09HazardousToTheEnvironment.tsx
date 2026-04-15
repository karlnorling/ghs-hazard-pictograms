// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = ` xmlns="http://www.w3.org/2000/svg" width="724" height="724" viewBox="0 0 735 735"`;
const _Body = `<path fill="red" d="m367.5 727.4 360-360-360-360-360 360z"/><path fill="#fff" d="M367.5 670.3 64.7 367.5 367.5 64.7l302.8 302.8z"/><g stroke="#000" stroke-width="5"><path d="M223.7 367.2h281.2"/><path stroke-width="4" d="m462.7 418 32.98 23.79-31.36 15.1 42.2 3.79-11.36 15.1h23.3l.54 16.76-294.2-1.605s49.2-14.58 57.3-8.635c10.82-4.87 89.8-38.4 89.8-36.2m-75.72-25.98 1.62-85.4-42.72-23.2s-6.49-4.33-15.68-1.62c-3.25 1.08-7.57 2.16-7.57 2.16s23.3-19.47 27.58-17.84c4.33 1.62 34.61 16.22 34.61 16.22s-3.25-22.71-11.36-29.2-39.47-31.36-39.47-31.36v-5.95l42.72 25.96s1.62-24.87-7-39.47c-8.65-14.6-15.1-27.58-15.1-27.58l2.7-2.16 21.1 32.44 7-22.2 4.33-1.08s-5.41 31.36-1.62 41.1c3.79 9.73 17.84 62.73 17.84 62.73l21.1-30.3s.54-12.44-.54-21.1c-1.08-8.65-2.7-48.67-2.7-48.67h3.79l5.95 43.8 34.1-39.47v4.33s-33.51 42.2-31.89 51.4c1.62 9.19 3.24 14.6-2.7 27.58s-9.73 22.2-9.73 22.2 17.84-21.1 25.96-22.71c8.11-.54 18.91.54 26.48-5.95s25.96-27 25.96-27l-28.66 44.3s-13.51.54-18.91 6.49c-5.41 5.95-27.58 31.36-27.58 31.36v58.4l36.76 18.38-44.87 6.49-10.82 15.68-14.6-12.44-40.62 3.735z"/><path fill="#fff" d="M355.2 445.1c10.29-4.29 27-11.36 36.76-25.42 10.1-14.54 45.96-75.7 95.2-70.8-2.7 6.49-11.36 20.55-11.36 20.55l35.1-10.82s.54 46.5-65.97 76.2c-30.82 10.82-37.3 11.36-40 15.1-2.7 3.79-15.1 22.71-15.1 22.71l-55.14-24.3s14.06-.515 20.51-3.215z"/></g><ellipse cx="484.3" cy="385.8" rx="5.95" ry="5.13"/>`;
const _DefaultDesc = `Acute hazards to the aquatic environment, category 1
Chronic hazards to the aquatic environment, categories 1, 2`;
const _DefaultTitle = 'Hazardous to the Environment';
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ghs09HazardousToTheEnvironment = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-ghs09-hazardous-to-the-environment`;
  const titleId = `ghs-title-ghs09-hazardous-to-the-environment`;
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
Ghs09HazardousToTheEnvironment.displayName = 'Ghs09HazardousToTheEnvironment';
