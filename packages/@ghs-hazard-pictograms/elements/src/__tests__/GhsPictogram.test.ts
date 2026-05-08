import { GhsPictogram } from '../GhsPictogram';

const TAG = 'ghs-pictogram-test';

beforeAll(() => {
  customElements.define(TAG, GhsPictogram);
});

const mount = (attrs: Record<string, string> = {}): GhsPictogram => {
  const el = document.createElement(TAG) as GhsPictogram;
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  document.body.appendChild(el);
  return el;
};

afterEach(() => {
  document.body.innerHTML = '';
});

describe('GhsPictogram', () => {
  it('renders nothing when pictogram-id is absent', () => {
    const el = mount();
    expect(el.innerHTML).toBe('');
  });

  it('renders nothing for an unknown pictogram-id', () => {
    const el = mount({ 'pictogram-id': 'not-a-real-id' });
    expect(el.innerHTML).toBe('');
  });

  it('renders an svg for a known GHS id', () => {
    const el = mount({ 'pictogram-id': 'ghs01-explosive' });
    expect(el.innerHTML).toContain('<svg');
    expect(el.innerHTML).toContain('role="img"');
  });

  it('renders an svg for a known transport id', () => {
    const el = mount({ 'pictogram-id': 'division-2-3' });
    expect(el.innerHTML).toContain('<svg');
  });

  it('sets display:contents on the host element', () => {
    const el = mount({ 'pictogram-id': 'ghs01-explosive' });
    expect(el.style.display).toBe('contents');
  });

  it('injects default title from pictogram name', () => {
    const el = mount({ 'pictogram-id': 'ghs01-explosive' });
    expect(el.innerHTML).toContain('<title');
    expect(el.innerHTML).toContain('Explosive');
  });

  it('injects default description from pictogram description', () => {
    const el = mount({ 'pictogram-id': 'ghs01-explosive' });
    expect(el.innerHTML).toContain('<desc');
    expect(el.innerHTML).toContain('Unstable explosives');
  });

  it('overrides title and description via attributes', () => {
    const el = mount({
      'pictogram-id': 'ghs01-explosive',
      title: 'Custom Title',
      description: 'Custom Desc',
    });
    expect(el.innerHTML).toContain('Custom Title');
    expect(el.innerHTML).toContain('Custom Desc');
    expect(el.innerHTML).not.toContain('Explosive</title>');
  });

  it('applies width and height attributes to the svg', () => {
    const el = mount({ 'pictogram-id': 'ghs01-explosive', width: '64', height: '64' });
    expect(el.innerHTML).toContain('width="64"');
    expect(el.innerHTML).toContain('height="64"');
  });

  it('re-renders when pictogram-id attribute changes', () => {
    const el = mount({ 'pictogram-id': 'ghs01-explosive' });
    expect(el.innerHTML).toContain('Explosive');
    el.setAttribute('pictogram-id', 'ghs02-flammable');
    expect(el.innerHTML).toContain('Flammable');
  });

  it('HTML-escapes title and description attributes', () => {
    const el = mount({
      'pictogram-id': 'ghs01-explosive',
      title: '<script>alert("xss")</script>',
      description: '<b>bold</b>',
    });
    expect(el.innerHTML).not.toContain('<script>');
    expect(el.innerHTML).toContain('&lt;script&gt;');
    expect(el.innerHTML).toContain('&lt;b&gt;');
  });

  it('does not inject elements from malicious width attribute', () => {
    const el = mount({
      'pictogram-id': 'ghs01-explosive',
      width: '"><img src=x onerror=alert(1)>',
    });
    expect(el.querySelectorAll('img').length).toBe(0);
    expect(el.querySelectorAll('script').length).toBe(0);
  });
});
