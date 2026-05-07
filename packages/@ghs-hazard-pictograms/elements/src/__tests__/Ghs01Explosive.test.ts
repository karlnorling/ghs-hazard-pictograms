import { Ghs01Explosive } from '../Ghs01Explosive';

const TAG = Ghs01Explosive.tagName;

beforeAll(() => {
  customElements.define(TAG, Ghs01Explosive);
});

const mount = (attrs: Record<string, string> = {}): Ghs01Explosive => {
  const el = document.createElement(TAG) as Ghs01Explosive;
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  document.body.appendChild(el);
  return el;
};

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Ghs01Explosive', () => {
  it('renders an svg', () => {
    const el = mount();
    expect(el.innerHTML).toContain('<svg');
    expect(el.innerHTML).toContain('role="img"');
  });

  it('sets display:contents on the host element', () => {
    const el = mount();
    expect(el.style.display).toBe('contents');
  });

  it('injects default title and description', () => {
    const el = mount();
    expect(el.innerHTML).toContain('Explosive');
    expect(el.innerHTML).toContain('Unstable explosives');
  });

  it('overrides title and description via attributes', () => {
    const el = mount({ title: 'Custom Title', description: 'Custom Desc' });
    expect(el.innerHTML).toContain('Custom Title');
    expect(el.innerHTML).toContain('Custom Desc');
    expect(el.innerHTML).not.toContain('Explosive</title>');
  });

  it('applies width and height attributes to the svg', () => {
    const el = mount({ width: '64', height: '64' });
    expect(el.innerHTML).toContain('width="64"');
    expect(el.innerHTML).toContain('height="64"');
  });

  it('re-renders when an attribute changes', () => {
    const el = mount({ width: '64' });
    expect(el.innerHTML).toContain('width="64"');
    el.setAttribute('width', '128');
    expect(el.innerHTML).toContain('width="128"');
  });
});
