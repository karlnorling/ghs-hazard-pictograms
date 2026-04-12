// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import * as React from 'react';
import type { PictogramProps } from './PictogramProps';

const _Attrs = ` xmlns="http://www.w3.org/2000/svg" width="772" height="772" viewBox="0 0 579 579"`;
const _Body = `<path d="M25.301 289.672 289.33 553.7l264.073-264.072c-88.053-87.952-175.931-176.079-264.03-263.985z" style="fill:#fff;stroke:none"/><path d="M147.66 148.012 6 289.672 147.669 431.34 289.329 573l141.687-141.688 141.688-141.688-141.64-141.64C353.165 70.086 289.403 6.344 289.375 6.344c-.029 0-63.8 63.752-141.717 141.668m260.962 22.413 119.199 119.2L408.575 408.87 289.319 528.127 170.129 408.87 50.95 289.606l119.19-119.19c65.557-65.557 119.208-119.19 119.237-119.19s53.689 53.642 119.246 119.2" style="fill:red;stroke:none"/><path d="M437.625 288c-.969-.003-1.948.044-2.562.156-1.193.225-231.267 61.994-232.094 62.313-6.52 2.563-10.896 9.67-12.219 19.875-.272 2.067-.4 5.84-.281 8.25.189 3.91.7 7.239 1.656 11.125 3.898 15.827 13.746 28.263 24.281 30.625 1.229.271 4.116.35 5.344.125 1.04-.177 229.029-61.311 231.344-62.031 4.405-1.37 7.723-4.446 10.156-9.407 1.358-2.752 2.178-5.415 2.875-9.312.555-3.071 1.033-4.391 2.344-6.375 1.594-2.422 4.357-4.486 7.156-5.313.46-.13 11.84-3.179 25.281-6.781 13.441-3.614 24.728-6.71 25.094-6.875 5.433-2.492 7.411-10.428 4.281-17.125-1.724-3.673-4.849-6.385-8.156-7.094-1.122-.236-2.835-.209-3.969.063-.52.13-11.713 3.124-24.906 6.656-13.181 3.543-24.27 6.511-24.625 6.594-.425.106-1.36.156-2.719.156-2.268-.012-3.138-.162-4.969-.906-2.29-.945-3.735-2.096-6.062-4.813-3.484-4.063-6.629-6.627-10.125-8.281-1.5-.697-3.114-1.22-4.531-1.469-.65-.112-1.625-.153-2.594-.156" style="fill:#000;stroke:none" transform="scale(.8)"/>`;
const _DefaultDesc = `Compressed gases
Liquefied gases
Refrigerated liquefied gases
Dissolved gases
e.g. liquid nitrogen, liquid oxygen, liquid helium`;
const _DefaultTitle = 'Compressed Gas';

export const Ghs04CompressedGas = React.memo<PictogramProps>(({
  'aria-label': ariaLabel,
  className,
  description = _DefaultDesc,
  height,
  style,
  title = _DefaultTitle,
  width,
}) => {
  const descId = `ghs-desc-ghs04-compressed-gas`;
  const titleId = `ghs-title-ghs04-compressed-gas`;
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
Ghs04CompressedGas.displayName = 'Ghs04CompressedGas';
