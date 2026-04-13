import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

// ---------------------------------------------------------------------------
// The SVG sprite is embedded inline so Storybook can resolve symbols without
// a separate HTTP request. In a real application reference the external file:
//   <svg><use href="/path/to/sprite.svg#symbol-id" /></svg>
// or inline the sprite once at the top of your HTML document.
// ---------------------------------------------------------------------------

const InlineSprite = () => {
  const [spriteHtml, setSpriteHtml] = React.useState<string>('');

  React.useEffect(() => {
    fetch('/assets/sprites/sprite.svg')
      .then((r) => r.text())
      .then(setSpriteHtml)
      .catch(() => {
        // Sprite not served in this environment
      });
  }, []);

  if (!spriteHtml) return null;
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      dangerouslySetInnerHTML={{ __html: spriteHtml }}
    />
  );
};

// ---------------------------------------------------------------------------
// Icon component
// ---------------------------------------------------------------------------

interface SpriteIconProps {
  /** Symbol ID from sprite.svg */
  id: string;
  /** Accessible label */
  label: string;
  size?: number;
}

const SpriteIcon = ({ id, label, size = 120 }: SpriteIconProps) => (
  <svg width={size} height={size} role="img" aria-label={label} style={{ display: 'block' }}>
    <title>{label}</title>
    <use href={`#${id}`} />
  </svg>
);

// ---------------------------------------------------------------------------
// Symbol data
// ---------------------------------------------------------------------------

export const GHS_SYMBOLS: Array<{ id: string; label: string; category: 'ghs' | 'transport' }> = [
  // GHS01–09
  {
    id: 'physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos',
    label: 'GHS01 Explosive',
    category: 'ghs',
  },
  {
    id: 'physical-hazards-pictograms-ghs02-flammable-ghs-pictogram-flamme',
    label: 'GHS02 Flammable',
    category: 'ghs',
  },
  {
    id: 'physical-hazards-pictograms-ghs03-oxidizing-ghs-pictogram-rondflam',
    label: 'GHS03 Oxidizing',
    category: 'ghs',
  },
  {
    id: 'physical-hazards-pictograms-ghs04-compressedgas-ghs-pictogram-bottle',
    label: 'GHS04 Compressed Gas',
    category: 'ghs',
  },
  {
    id: 'physical-hazards-pictograms-ghs05-corrosive-ghs-pictogram-acid',
    label: 'GHS05 Corrosive',
    category: 'ghs',
  },
  {
    id: 'health-hazards-pictograms-ghs06-toxic-ghs-pictogram-skull',
    label: 'GHS06 Toxic',
    category: 'ghs',
  },
  {
    id: 'health-hazards-pictograms-ghs07-healthhazard-hazardoustoozonelayer-ghs-pictogram-exclam',
    label: 'GHS07 Health Hazard',
    category: 'ghs',
  },
  {
    id: 'health-hazards-pictograms-ghs08-serioushealthhazard-ghs-pictogram-silhouette',
    label: 'GHS08 Serious Health Hazard',
    category: 'ghs',
  },
  {
    id: 'environmental-hazards-pictograms-ghs09-hazardoustotheenvironment-ghs-pictogram-pollu',
    label: 'GHS09 Environmental Hazard',
    category: 'ghs',
  },
  // Transport hazard classes
  {
    id: 'transport-pictograms-class-1--explosives-adr-1',
    label: 'Divisions 1.1–1.3',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-class-1--explosives-adr-1-4',
    label: 'Division 1.4',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-class-1--explosives-adr-1-5',
    label: 'Division 1.5',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-class-1--explosives-adr-1-6',
    label: 'Division 1.6',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-class-2--gases-adr-2-1',
    label: 'Division 2.1',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-class-2--gases-adr-2-2',
    label: 'Division 2.2',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-class-2--gases-adr-2-3',
    label: 'Division 2.3',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-classes-3-and-4--flammable-liquids-and-solids-adr-3',
    label: 'Class 3',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-other-ghs-transport-classes-adr-5-1',
    label: 'Division 5.1',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---5-2-(black)',
    label: 'Division 5.2',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---6',
    label: 'Division 6.1',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---8',
    label: 'Class 8',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-non-ghs-transport-pictograms-adr-6-2',
    label: 'Class 6.2',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-non-ghs-transport-pictograms-adr-7a',
    label: 'Class 7',
    category: 'transport',
  },
  {
    id: 'transport-pictograms-non-ghs-transport-pictograms-adr-9',
    label: 'Class 9',
    category: 'transport',
  },
];

const GHS_ONLY = GHS_SYMBOLS.filter((s) => s.category === 'ghs');
const TRANSPORT_ONLY = GHS_SYMBOLS.filter((s) => s.category === 'transport');

// ---------------------------------------------------------------------------
// Grid component
// ---------------------------------------------------------------------------

interface GridProps {
  size?: number;
  symbols?: typeof GHS_SYMBOLS;
}

const SpriteGrid = ({ size = 120, symbols = GHS_SYMBOLS }: GridProps) => (
  <>
    <InlineSprite />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '1.5rem',
        padding: '1rem',
      }}
    >
      {symbols.map(({ id, label }) => (
        <div
          key={id}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <SpriteIcon id={id} label={label} size={size} />
          <span style={{ fontSize: '0.75rem', textAlign: 'center', color: '#555' }}>{label}</span>
        </div>
      ))}
    </div>
  </>
);

const SingleSpriteIcon = ({ id, label, size }: SpriteIconProps) => (
  <>
    <InlineSprite />
    <SpriteIcon id={id} label={label} size={size} />
  </>
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<GridProps> = {
  title: 'GHS Pictograms/SVG Sprite',
  component: SpriteGrid,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};

export default meta;

// ---------------------------------------------------------------------------
// Grid stories
// ---------------------------------------------------------------------------

export const AllGHS: StoryObj<GridProps> = {
  name: 'GHS01–09 All',
  render: ({ size }) => <SpriteGrid size={size} symbols={GHS_ONLY} />,
  args: { size: 120 },
};

export const AllTransport: StoryObj<GridProps> = {
  name: 'Transport All',
  render: ({ size }) => <SpriteGrid size={size} symbols={TRANSPORT_ONLY} />,
  args: { size: 120 },
};

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All Pictograms',
  render: ({ size }) => <SpriteGrid size={size} symbols={GHS_SYMBOLS} />,
  args: { size: 120 },
};

export const Large: StoryObj<GridProps> = {
  name: 'All Large',
  render: ({ size }) => <SpriteGrid size={size} symbols={GHS_SYMBOLS} />,
  args: { size: 200 },
};

export const Small: StoryObj<GridProps> = {
  name: 'All Small',
  render: ({ size }) => <SpriteGrid size={size} symbols={GHS_SYMBOLS} />,
  args: { size: 64 },
};

// ---------------------------------------------------------------------------
// Single icon with controls
// ---------------------------------------------------------------------------

export const SingleIcon: StoryObj<SpriteIconProps> = {
  parameters: { layout: 'centered' },
  render: (args) => <SingleSpriteIcon {...args} />,
  args: {
    id: 'physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos',
    label: 'GHS01 Explosive',
    size: 200,
  },
  argTypes: {
    id: {
      control: 'select',
      options: GHS_SYMBOLS.map((s) => s.id),
      labels: Object.fromEntries(GHS_SYMBOLS.map((s) => [s.id, s.label])),
      description: 'Symbol ID from sprite.svg',
    },
    label: { control: 'text', description: 'Accessible label' },
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};
