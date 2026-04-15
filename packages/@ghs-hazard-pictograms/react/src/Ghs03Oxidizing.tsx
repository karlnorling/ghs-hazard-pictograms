// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579 579"`;
const _Body = `<path d="M25.301 289.672 289.33 553.7l264.073-264.072c-88.053-87.952-175.931-176.079-264.03-263.985z" style="fill:#fff;stroke:none"/><path d="M147.66 148.012 6 289.672 147.669 431.34 289.329 573l141.687-141.688 141.688-141.688-141.64-141.64C353.165 70.086 289.403 6.344 289.375 6.344c-.029 0-63.8 63.752-141.717 141.668m260.962 22.413 119.199 119.2L408.565 408.88 289.32 528.127 170.129 408.87 50.94 289.615l119.2-119.2C235.696 104.86 289.347 51.227 289.376 51.227s53.689 53.642 119.246 119.2" style="fill:red;stroke:none"/><path d="M358.688 105.688c-11.043 11.95-.035 61.122-22.844 107.218-11.825-12.613-16.567-36.268-29.969-48.094 7.07 18.132-12.626 16.558-5.531 79.625-10.707-2.676-11.037-7.088-34.688-35.468 4.404 27.522 1.607 44.942 7.125 75.687 0 0-5.7-1.2-33.125-21.312 8.901 29.982-6.648 93.111 28.781 137.75l-.125-.094c2.727 40.394 31.2 73.762 69.125 83.844h-68.53v29.031H460.03v-29.031H385.5c34.312-9.123 60.866-37.316 67.625-72.531v-.032c9.393-15.013 51.404-63.612 19.094-141.812 0 0-9.48 17.378-26.813 22.062 0 0 22.208-37.018 3.938-67 0 0-5.355 21.907-23.625 22.844 0 0 8.893-46.724-15-76.469-8.672 19.709 5.192 27.876-23.656 44.157-3.947-60.723-16.55-70.958-28.375-110.375m-6.313 132.437c11.015 6.779 18.939 18.437 21.344 40.313 1.057 9.621 4.654 15.135 7.281 24.906a93.6 93.6 0 0 0-19.531-2.063 93.4 93.4 0 0 0-23.688 3.031c-1.677-31.868 15.003-24.87 14.594-66.187M312.188 261s4.408 27.78 15.656 46.531a93.3 93.3 0 0 0-22.031 12.188c-3.695-28.799 4.672-35.31 6.375-58.719m97.75 14.188s4.13 27.815 9.75 46.468a93.2 93.2 0 0 0-30.282-16.125c4.692-9.6 11.909-22.243 20.531-30.344m-141.125 30.75s8.37 8.442 30.25 19.28a93.9 93.9 0 0 0-19.25 24.157c-3.412-11.175-8.2-28.039-11-43.437m185.28 10.25c.735 10.28.748 35.289-3.937 48.875l.031.468a93.3 93.3 0 0 0-19.625-33.656c5.634-4.502 15.212-11.682 23.532-15.687m-93.437 10.906c36.83 0 66.719 29.92 66.719 66.75s-29.888 66.719-66.719 66.719-66.718-29.889-66.718-66.72c0-36.83 29.888-66.75 66.718-66.75" style="fill:#000;stroke:none" transform="scale(.8)"/>`;
const _DefaultDesc = `Oxidizing gases, category 1
Oxidizing liquids, categories 1, 2, 3
Oxidizing solids, categories 1, 2, 3`;
const _DefaultTitle = 'Oxidizing';
const _DefaultWidth = `772`;
const _DefaultHeight = `772`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const Ghs03Oxidizing = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-ghs03-oxidizing`;
  const titleId = `ghs-title-ghs03-oxidizing`;
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
Ghs03Oxidizing.displayName = 'Ghs03Oxidizing';
