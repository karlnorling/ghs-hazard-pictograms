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
