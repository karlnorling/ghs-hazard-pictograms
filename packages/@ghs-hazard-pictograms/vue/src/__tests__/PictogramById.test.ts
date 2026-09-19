import { mount } from '@vue/test-utils';
import { PictogramById } from '../PictogramById';

describe('PictogramById', () => {
  it('renders null for an unknown id', () => {
    const wrapper = mount(PictogramById, { props: { id: 'not-a-real-id' } });
    expect(wrapper.html()).toBe('');
  });

  it('renders a span containing an svg for a known GHS id', () => {
    const wrapper = mount(PictogramById, { props: { id: 'ghs01-explosive' } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.html()).toContain('<svg');
    expect(wrapper.html()).toContain('role="img"');
  });

  it('renders a span containing an svg for a known transport id', () => {
    const wrapper = mount(PictogramById, { props: { id: 'division-2-3' } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.html()).toContain('<svg');
  });

  it('injects default title from pictogram name', () => {
    const wrapper = mount(PictogramById, { props: { id: 'ghs01-explosive' } });
    expect(wrapper.html()).toContain('<title');
    expect(wrapper.html()).toContain('Explosive');
  });

  it('injects default description from pictogram description', () => {
    const wrapper = mount(PictogramById, { props: { id: 'ghs01-explosive' } });
    expect(wrapper.html()).toContain('<desc');
    expect(wrapper.html()).toContain('Unstable explosives');
  });

  it('overrides title and description via props', () => {
    const wrapper = mount(PictogramById, {
      props: { id: 'ghs01-explosive', title: 'Custom Title', description: 'Custom Desc' },
    });
    expect(wrapper.html()).toContain('Custom Title');
    expect(wrapper.html()).toContain('Custom Desc');
    expect(wrapper.html()).not.toContain('Explosive</title>');
  });

  it('applies width and height props to the svg element', () => {
    const wrapper = mount(PictogramById, {
      props: { id: 'ghs01-explosive', width: 64, height: 64 },
    });
    expect(wrapper.html()).toContain('width="64"');
    expect(wrapper.html()).toContain('height="64"');
  });

  it('forwards class and style to the wrapping span', () => {
    const wrapper = mount(PictogramById, {
      props: { id: 'ghs01-explosive' },
      attrs: { class: 'my-class', style: { opacity: 0.5 } },
    });
    expect(wrapper.classes()).toContain('my-class');
    expect(wrapper.element.style.opacity).toBe('0.5');
  });

  it('HTML-escapes title and description props', () => {
    const wrapper = mount(PictogramById, {
      props: {
        id: 'ghs01-explosive',
        title: '<script>alert("xss")</script>',
        description: '<b>bold</b>',
      },
    });
    expect(wrapper.html()).not.toContain('<script>');
    expect(wrapper.html()).toContain('&lt;script&gt;');
    expect(wrapper.html()).toContain('&lt;b&gt;');
  });

  it('does not inject elements from malicious width/height props', () => {
    const wrapper = mount(PictogramById, {
      props: { id: 'ghs01-explosive', width: '"><img src=x onerror=alert(1)>', height: '64' },
    });
    expect(wrapper.findAll('img').length).toBe(0);
    expect(wrapper.findAll('script').length).toBe(0);
  });

  it('merges a string style attribute with display: contents', () => {
    const wrapper = mount(PictogramById, {
      props: { id: 'ghs01-explosive' },
      attrs: { style: 'color: red' },
    });
    const style = (wrapper.element as HTMLElement).style;
    expect(style.display).toBe('contents');
    expect(style.color).toBe('red');
  });

  it('labels the svg directly when aria-label is given', () => {
    const wrapper = mount(PictogramById, {
      props: { id: 'ghs01-explosive' },
      attrs: { 'aria-label': 'Danger' },
    });
    const svg = wrapper.find('svg').element;
    expect(wrapper.element.hasAttribute('aria-label')).toBe(false);
    expect(svg.getAttribute('aria-label')).toBe('Danger');
    expect(svg.hasAttribute('aria-labelledby')).toBe(false);
  });

  it('gives each instance its own title/desc IDs', () => {
    const a = mount(PictogramById, { props: { id: 'ghs01-explosive' } });
    const b = mount(PictogramById, { props: { id: 'ghs01-explosive' } });
    expect(a.find('title').attributes('id')).not.toBe(b.find('title').attributes('id'));
  });
});
