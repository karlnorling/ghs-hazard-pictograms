import * as React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactComponents from '../index';

const renderToContainer = (element: React.ReactElement): HTMLElement => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    createRoot(container).render(element);
  });
  return container;
};

// React.memo returns a memo exotic component (object), not a plain function.
// Check via React.isValidElementType which accepts both.
const isReactComponent = (val: unknown): boolean =>
  typeof val === 'function' || (typeof val === 'object' && val !== null && '$$typeof' in val);

describe('React components', () => {
  it('exports at least 9 named components', () => {
    const componentNames = Object.keys(ReactComponents).filter((key) =>
      isReactComponent((ReactComponents as Record<string, unknown>)[key]),
    );
    expect(componentNames.length).toBeGreaterThanOrEqual(9);
  });

  it('Ghs01Explosive is a valid React component', () => {
    expect(isReactComponent(ReactComponents.Ghs01Explosive)).toBe(true);
  });

  it('Ghs09HazardousToTheEnvironment is a valid React component', () => {
    expect(isReactComponent(ReactComponents.Ghs09HazardousToTheEnvironment)).toBe(true);
  });

  it('Ghs02Flammable is a valid React component', () => {
    expect(isReactComponent(ReactComponents.Ghs02Flammable)).toBe(true);
  });

  it('all core GHS components are exported', () => {
    const expectedComponents = [
      'Ghs01Explosive',
      'Ghs02Flammable',
      'Ghs03Oxidizing',
      'Ghs04CompressedGas',
      'Ghs05Corrosive',
      'Ghs06Toxic',
      'Ghs07HealthHazardHazardousToOzoneLayer',
      'Ghs08SeriousHealthHazard',
      'Ghs09HazardousToTheEnvironment',
    ] as const;

    for (const name of expectedComponents) {
      expect(isReactComponent(ReactComponents[name])).toBe(true);
    }
  });

  it('renders Ghs01Explosive without throwing', () => {
    expect(() => {
      renderToContainer(React.createElement(ReactComponents.Ghs01Explosive));
    }).not.toThrow();
  });

  it('passes className prop through to span', () => {
    const container = renderToContainer(
      React.createElement(ReactComponents.Ghs01Explosive, { className: 'test-class' }),
    );
    const span = container.querySelector('span');
    expect(span?.className).toBe('test-class');
  });
});

describe('PictogramProps — SVG content and accessibility', () => {
  it('renders default title inside svg', () => {
    const container = renderToContainer(React.createElement(ReactComponents.Ghs01Explosive));
    const svg = container.querySelector('svg');
    const titleEl = svg?.querySelector('title');
    expect(titleEl?.textContent).toBe('Explosive');
  });

  it('renders custom title inside svg', () => {
    const container = renderToContainer(
      React.createElement(ReactComponents.Ghs01Explosive, { title: 'Custom Title' }),
    );
    const svg = container.querySelector('svg');
    const titleEl = svg?.querySelector('title');
    expect(titleEl?.textContent).toBe('Custom Title');
  });

  it('HTML-escapes title to prevent XSS', () => {
    const container = renderToContainer(
      React.createElement(ReactComponents.Ghs01Explosive, { title: '<script>alert(1)</script>' }),
    );
    const svg = container.querySelector('svg');
    const titleEl = svg?.querySelector('title');
    // textContent decodes entities — check raw innerHTML has no unescaped tags
    expect(svg?.innerHTML).not.toContain('<script>');
    expect(titleEl?.textContent).toBe('<script>alert(1)</script>');
  });

  it('HTML-escapes description to prevent XSS', () => {
    const container = renderToContainer(
      React.createElement(ReactComponents.Ghs01Explosive, {
        description: '<img src=x onerror=alert(1)>',
      }),
    );
    const svg = container.querySelector('svg');
    expect(svg?.innerHTML).not.toContain('<img');
    const descEl = svg?.querySelector('desc');
    expect(descEl?.textContent).toBe('<img src=x onerror=alert(1)>');
  });

  it('renders custom description inside svg', () => {
    const container = renderToContainer(
      React.createElement(ReactComponents.Ghs01Explosive, { description: 'Custom desc' }),
    );
    const svg = container.querySelector('svg');
    const descEl = svg?.querySelector('desc');
    expect(descEl?.textContent).toBe('Custom desc');
  });

  it('forwards aria-label to the wrapping span', () => {
    const container = renderToContainer(
      React.createElement(ReactComponents.Ghs01Explosive, { 'aria-label': 'Danger' }),
    );
    const span = container.querySelector('span');
    expect(span?.getAttribute('aria-label')).toBe('Danger');
  });

  it('renders svg with default dimensions when no width/height prop given', () => {
    const container = renderToContainer(React.createElement(ReactComponents.Ghs01Explosive));
    const svg = container.querySelector('svg');
    const svgStr = svg?.outerHTML ?? '';
    const widthMatches = svgStr.match(/\bwidth=/g) ?? [];
    const heightMatches = svgStr.match(/\bheight=/g) ?? [];
    expect(widthMatches.length).toBe(1);
    expect(heightMatches.length).toBe(1);
  });

  it('renders svg with custom width when width prop given', () => {
    const container = renderToContainer(
      React.createElement(ReactComponents.Ghs01Explosive, { width: 200 }),
    );
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('200');
    // Exactly one width attribute — regression for duplicate-attr bug
    const widthMatches = (svg?.outerHTML ?? '').match(/\bwidth=/g) ?? [];
    expect(widthMatches.length).toBe(1);
  });

  it('renders svg with custom height when height prop given', () => {
    const container = renderToContainer(
      React.createElement(ReactComponents.Ghs01Explosive, { height: '50%' }),
    );
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('height')).toBe('50%');
    const heightMatches = (svg?.outerHTML ?? '').match(/\bheight=/g) ?? [];
    expect(heightMatches.length).toBe(1);
  });
});
