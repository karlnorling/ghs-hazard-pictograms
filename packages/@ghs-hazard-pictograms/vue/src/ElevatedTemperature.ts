// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { pictogramProps } from './PictogramProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 212.2 194.021"`;
const _Body = `<path fill="#ed2024" d="M208.729 163.41 123.58 10.28l-.061-.11C120.21 4.11 113.78 0 106.39 0S92.57 4.11 89.26 10.17l-.05.1L3.33 163.62l-.02.03A19.43 19.43 0 0 0 0 174.521c0 10.77 8.73 19.5 19.5 19.5l173.21-.011c10.76 0 19.49-8.72 19.49-19.489 0-4.131-1.28-7.96-3.471-11.111"/><path fill="#fff" d="m180.338 158.544-8.357-15.03-.039-.069-5.318-9.564h-.055l-37.801-67.283-.037-.067-15.727-28.284-.023-.043a7.68 7.68 0 0 0-6.743-4.004 7.68 7.68 0 0 0-6.743 4.004l-.02.039-15.847 28.295-39.05 67.344h-.132l-3.743 6.683-.003.005-10.113 18.058-.007.012a7.677 7.677 0 0 0 6.373 11.955l33.671-.002v-.001h84.958l18.45-.001a7.673 7.673 0 0 0 6.306-12.047"/><path fill="#ec2426" d="M113.259 84.62H99.12V66.655a7.077 7.077 0 0 1 7.069-7.069 7.077 7.077 0 0 1 7.069 7.069zm-13.139-1h12.139V66.655c0-3.347-2.723-6.069-6.069-6.069s-6.069 2.723-6.069 6.069z"/><path fill="#ec2426" d="M113.259 131.644V83.62H99.12v48.023c-5.111 2.656-8.272 7.84-8.272 13.601 0 8.46 6.882 15.342 15.342 15.342s15.342-6.882 15.342-15.342c-.001-5.762-3.162-10.944-8.273-13.6"/>`;
const _DefaultDesc = `Marks a transport unit carrying a substance at or above 100 °C liquid or 240 °C solid (ADR 5.3.3).`;
const _DefaultTitle = 'Elevated temperature';
const _DefaultWidth = `212.2`;
const _DefaultHeight = `194.021`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
let _instances = 0;

export const ElevatedTemperature = defineComponent({
  name: 'ElevatedTemperature',
  inheritAttrs: false,
  props: {
    ...pictogramProps,
  },
  setup(props, { attrs }) {
    const uid = `ghs-elevated-temperature-${++_instances}`;
    return () => {
      const { 'aria-label': ariaLabel, style, ...rest } = attrs;
      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;
      const resolvedTitle = props.title ?? _DefaultTitle;
      const resolvedDesc = props.description ?? _DefaultDesc;
      const titleId = `${uid}--title`;
      const descId = `${uid}--desc`;
      const label = ariaLabel != null ? `aria-label="${_h(String(ariaLabel))}"` : `aria-labelledby="${titleId} ${descId}"`;
      const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" ${label}>
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
      return h('span', { ...rest, style: [{ display: 'contents' }, style], innerHTML: svgHtml });
    };
  },
});
