import { defineCustomElements } from '../defineCustomElements';

describe('defineCustomElements', () => {
  it('registers the default tags and can be called again safely', () => {
    defineCustomElements();
    defineCustomElements();
    expect(customElements.get('ghs-ghs01-explosive')).toBeDefined();
    expect(customElements.get('ghs-pictogram')).toBeDefined();
  });

  it('registers additional prefixes after the default one', () => {
    defineCustomElements();
    expect(() => defineCustomElements('acme')).not.toThrow();
    expect(() => defineCustomElements('other')).not.toThrow();
    expect(customElements.get('acme-ghs01-explosive')).toBeDefined();
    expect(customElements.get('other-pictogram')).toBeDefined();
  });

  it('renders elements registered under a custom prefix', () => {
    defineCustomElements('acme');
    const el = document.createElement('acme-ghs01-explosive');
    document.body.appendChild(el);
    expect(el.querySelector('svg')).not.toBeNull();
  });
});
