import { mount } from '@vue/test-utils';
import { Ghs01Explosive } from '../Ghs01Explosive';

describe('Ghs01Explosive', () => {
  it('renders a span containing an svg', () => {
    const wrapper = mount(Ghs01Explosive);
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.html()).toContain('<svg');
    expect(wrapper.html()).toContain('role="img"');
  });

  it('injects default title and description', () => {
    const wrapper = mount(Ghs01Explosive);
    expect(wrapper.html()).toContain('Explosive');
    expect(wrapper.html()).toContain('Unstable explosives');
  });

  it('overrides title and description via props', () => {
    const wrapper = mount(Ghs01Explosive, {
      props: { title: 'Custom Title', description: 'Custom Desc' },
    });
    expect(wrapper.html()).toContain('Custom Title');
    expect(wrapper.html()).toContain('Custom Desc');
    expect(wrapper.html()).not.toContain('Explosive</title>');
  });

  it('applies width and height props to the svg element', () => {
    const wrapper = mount(Ghs01Explosive, { props: { width: 64, height: 64 } });
    expect(wrapper.html()).toContain('width="64"');
    expect(wrapper.html()).toContain('height="64"');
  });

  it('forwards class and style to the wrapping span', () => {
    const wrapper = mount(Ghs01Explosive, {
      attrs: { class: 'my-class', style: { opacity: 0.5 } },
    });
    expect(wrapper.classes()).toContain('my-class');
    expect(wrapper.element.style.opacity).toBe('0.5');
  });
});
