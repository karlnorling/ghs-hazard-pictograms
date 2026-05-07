import * as React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { PictogramById } from '../Pictogram';

const renderToContainer = (element: React.ReactElement): HTMLElement => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    createRoot(container).render(element);
  });
  return container;
};

describe('PictogramById', () => {
  it('renders null for an unknown id', () => {
    const container = renderToContainer(<PictogramById id="not-a-real-id" />);
    expect(container.firstChild).toBeNull();
  });

  it('renders a span containing an svg for a known GHS id', () => {
    const container = renderToContainer(<PictogramById id="ghs01-explosive" />);
    const span = container.firstChild as HTMLElement;
    expect(span.tagName).toBe('SPAN');
    expect(span.innerHTML).toContain('<svg');
    expect(span.innerHTML).toContain('role="img"');
  });

  it('renders a span containing an svg for a known transport id', () => {
    const container = renderToContainer(<PictogramById id="division-2-3" />);
    const span = container.firstChild as HTMLElement;
    expect(span.tagName).toBe('SPAN');
    expect(span.innerHTML).toContain('<svg');
  });

  it('injects default title from pictogram name', () => {
    const container = renderToContainer(<PictogramById id="ghs01-explosive" />);
    expect(container.innerHTML).toContain('<title');
    expect(container.innerHTML).toContain('Explosive');
  });

  it('injects default description from pictogram description', () => {
    const container = renderToContainer(<PictogramById id="ghs01-explosive" />);
    expect(container.innerHTML).toContain('<desc');
    expect(container.innerHTML).toContain('Unstable explosives');
  });

  it('overrides title and description via props', () => {
    const container = renderToContainer(
      <PictogramById id="ghs01-explosive" title="Custom Title" description="Custom Desc" />,
    );
    expect(container.innerHTML).toContain('Custom Title');
    expect(container.innerHTML).toContain('Custom Desc');
    expect(container.innerHTML).not.toContain('Explosive</title>');
  });

  it('applies width and height props to the svg element', () => {
    const container = renderToContainer(<PictogramById id="ghs01-explosive" width={64} height={64} />);
    expect(container.innerHTML).toContain('width="64"');
    expect(container.innerHTML).toContain('height="64"');
  });

  it('forwards className and style to the wrapping span', () => {
    const container = renderToContainer(
      <PictogramById id="ghs01-explosive" className="my-class" style={{ opacity: 0.5 }} />,
    );
    const span = container.firstChild as HTMLElement;
    expect(span.className).toBe('my-class');
    expect(span.style.opacity).toBe('0.5');
  });

  it('sets aria-label on the wrapping span', () => {
    const container = renderToContainer(
      <PictogramById id="ghs01-explosive" aria-label="Explosive hazard" />,
    );
    const span = container.firstChild as HTMLElement;
    expect(span.getAttribute('aria-label')).toBe('Explosive hazard');
  });

  it('HTML-escapes title and description props', () => {
    const container = renderToContainer(
      <PictogramById
        id="ghs01-explosive"
        title='<script>alert("xss")</script>'
        description="<b>bold</b>"
      />,
    );
    expect(container.innerHTML).not.toContain('<script>');
    expect(container.innerHTML).toContain('&lt;script&gt;');
    expect(container.innerHTML).toContain('&lt;b&gt;');
  });

  it('does not inject elements from malicious width/height props', () => {
    const container = renderToContainer(
      <PictogramById id="ghs01-explosive" width={'"><img src=x onerror=alert(1)>'} height="64" />,
    );
    expect(container.querySelectorAll('img').length).toBe(0);
    expect(container.querySelectorAll('script').length).toBe(0);
  });
});
