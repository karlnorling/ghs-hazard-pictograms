import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllPictograms } from '@ghs-hazard-pictograms/core';
import { defineCustomElements } from '@ghs-hazard-pictograms/elements';

defineCustomElements();

// ---------------------------------------------------------------------------
// React wrapper for <ghs-pictogram> custom element
// ---------------------------------------------------------------------------

interface GHSPictogramProps {
  pictogramId: string;
  size?: number;
}

const GHSPictogram = React.memo(({ pictogramId, size = 96 }: GHSPictogramProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const el = document.createElement('ghs-pictogram');
    el.setAttribute('pictogram-id', pictogramId);
    el.setAttribute('width', String(size));
    el.setAttribute('height', String(size));
    ref.current.replaceChildren(el);
  }, [pictogramId, size]);

  return <span ref={ref} style={{ display: 'contents' }} />;
});
GHSPictogram.displayName = 'GHSPictogram';

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

interface GridProps {
  size?: number;
  category?: string;
}

const ElementsGrid = ({ size = 96, category }: GridProps) => {
  const all = getAllPictograms();
  const pictograms = category ? all.filter((p) => p.category === category) : all;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', padding: '1rem' }}>
      {pictograms.map((p) => (
        <div
          key={p.id}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <GHSPictogram pictogramId={p.id} size={size} />
          <span style={{ fontSize: '0.75rem', textAlign: 'center', color: '#555' }}>
            {p.code || p.name}
          </span>
        </div>
      ))}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Single pictogram story
// ---------------------------------------------------------------------------

const ALL_PICTOGRAMS = getAllPictograms();

interface SingleProps {
  pictogramId: string;
  size?: number;
}

const SinglePictogram = ({ pictogramId, size = 200 }: SingleProps) => (
  <GHSPictogram pictogramId={pictogramId} size={size} />
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<GridProps> = {
  title: 'GHS Pictograms/Web Components',
  component: ElementsGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
    category: {
      control: 'select',
      options: ['', 'physical_hazards', 'health_hazards', 'environmental_hazards', 'transport'],
    },
  },
};

export default meta;

export const AllPictograms: StoryObj<GridProps> = {
  name: 'All Pictograms',
  render: ({ size, category }) => <ElementsGrid size={size} category={category} />,
  args: { size: 96 },
};

export const GHSHazards: StoryObj<GridProps> = {
  name: 'GHS Hazards',
  render: ({ size }) => <ElementsGrid size={size} category="physical_hazards" />,
  args: { size: 96 },
};

export const Transport: StoryObj<GridProps> = {
  name: 'Transport (ADR/UN)',
  render: ({ size }) => <ElementsGrid size={size} category="transport" />,
  args: { size: 96 },
};

export const Single: StoryObj<SingleProps> = {
  name: 'Single Pictogram',
  parameters: { layout: 'centered' },
  render: ({ pictogramId, size }) => <SinglePictogram pictogramId={pictogramId} size={size} />,
  args: {
    pictogramId: ALL_PICTOGRAMS[0]?.id ?? 'ghs01-explosive',
    size: 200,
  },
  argTypes: {
    pictogramId: {
      control: 'select',
      options: ALL_PICTOGRAMS.map((p) => p.id),
      labels: Object.fromEntries(
        ALL_PICTOGRAMS.map((p) => [p.id, p.code ? `${p.code} — ${p.name}` : p.name]),
      ),
    },
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};
