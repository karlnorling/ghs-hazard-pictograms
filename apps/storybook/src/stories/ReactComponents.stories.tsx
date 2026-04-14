import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import {
  // GHS hazard pictograms
  Ghs01Explosive,
  Ghs02Flammable,
  Ghs03Oxidizing,
  Ghs04CompressedGas,
  Ghs05Corrosive,
  Ghs06Toxic,
  Ghs07HealthHazardHazardousToOzoneLayer,
  Ghs08SeriousHealthHazard,
  Ghs09HazardousToTheEnvironment,
  // Transport hazard pictograms (aliased to avoid name clashes with story exports)
  Divisions1113 as Divisions1113Icon,
  Division14 as Division14Icon,
  Division15 as Division15Icon,
  Division16 as Division16Icon,
  Division21 as Division21Icon,
  Division22 as Division22Icon,
  Division23 as Division23Icon,
  Class3 as Class3Icon,
  Division51 as Division51Icon,
  Division52 as Division52Icon,
  Division61 as Division61Icon,
  Class8 as Class8Icon,
  Class62 as Class62Icon,
  Class7 as Class7Icon,
  Class9 as Class9Icon,
  type PictogramProps,
} from '@ghs-hazard-pictograms/react';

// ---------------------------------------------------------------------------
// Shared grid layout
// ---------------------------------------------------------------------------

interface GridProps {
  size?: number;
}

const PictogramGrid = ({
  size = 120,
  items,
}: GridProps & { items: Array<{ Component: React.ComponentType<PictogramProps>; label: string }> }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: '1.5rem',
      padding: '1rem',
    }}
  >
    {items.map(({ Component, label }) => (
      <div
        key={label}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <Component width={size} height={size} />
        <span style={{ fontSize: '0.75rem', textAlign: 'center', color: '#555' }}>{label}</span>
      </div>
    ))}
  </div>
);

// ---------------------------------------------------------------------------
// GHS01–09 grid
// ---------------------------------------------------------------------------

const GHS_COMPONENTS = [
  { Component: Ghs01Explosive, label: 'GHS01 Explosive' },
  { Component: Ghs02Flammable, label: 'GHS02 Flammable' },
  { Component: Ghs03Oxidizing, label: 'GHS03 Oxidizing' },
  { Component: Ghs04CompressedGas, label: 'GHS04 Compressed Gas' },
  { Component: Ghs05Corrosive, label: 'GHS05 Corrosive' },
  { Component: Ghs06Toxic, label: 'GHS06 Toxic' },
  { Component: Ghs07HealthHazardHazardousToOzoneLayer, label: 'GHS07 Health Hazard' },
  { Component: Ghs08SeriousHealthHazard, label: 'GHS08 Serious Health Hazard' },
  { Component: Ghs09HazardousToTheEnvironment, label: 'GHS09 Environmental Hazard' },
] as const;

const AllGHSGrid = ({ size = 120 }: GridProps) => (
  <PictogramGrid
    size={size}
    items={GHS_COMPONENTS as unknown as Array<{ Component: React.ComponentType<PictogramProps>; label: string }>}
  />
);

// ---------------------------------------------------------------------------
// Transport hazard grid
// ---------------------------------------------------------------------------

const TRANSPORT_COMPONENTS = [
  { Component: Divisions1113Icon, label: 'Divisions 1.1–1.3' },
  { Component: Division14Icon, label: 'Division 1.4' },
  { Component: Division15Icon, label: 'Division 1.5' },
  { Component: Division16Icon, label: 'Division 1.6' },
  { Component: Division21Icon, label: 'Division 2.1' },
  { Component: Division22Icon, label: 'Division 2.2' },
  { Component: Division23Icon, label: 'Division 2.3' },
  { Component: Class3Icon, label: 'Class 3' },
  { Component: Division51Icon, label: 'Division 5.1' },
  { Component: Division52Icon, label: 'Division 5.2' },
  { Component: Division61Icon, label: 'Division 6.1' },
  { Component: Class8Icon, label: 'Class 8' },
  { Component: Class62Icon, label: 'Class 6.2' },
  { Component: Class7Icon, label: 'Class 7' },
  { Component: Class9Icon, label: 'Class 9' },
] as const;

const AllTransportGrid = ({ size = 120 }: GridProps) => (
  <PictogramGrid
    size={size}
    items={TRANSPORT_COMPONENTS as unknown as Array<{ Component: React.ComponentType<PictogramProps>; label: string }>}
  />
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: 'GHS Pictograms/React Components',
  component: AllGHSGrid,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 32, max: 512, step: 8 },
      description: 'Icon size in pixels (applied to all pictograms in the grid)',
    },
  },
} satisfies Meta<typeof AllGHSGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// GHS01–09 grid stories
// ---------------------------------------------------------------------------

export const AllGHS: Story = {
  name: 'GHS01–09 All',
  args: { size: 120 },
};

export const GHSLarge: Story = {
  name: 'GHS01–09 Large',
  args: { size: 200 },
};

export const GHSSmall: Story = {
  name: 'GHS01–09 Small',
  args: { size: 64 },
};

// ---------------------------------------------------------------------------
// Transport hazard grid stories
// ---------------------------------------------------------------------------

export const AllTransport: StoryObj<GridProps> = {
  name: 'Transport All',
  render: ({ size }) => <AllTransportGrid size={size} />,
  args: { size: 120 },
};

export const TransportLarge: StoryObj<GridProps> = {
  render: ({ size }) => <AllTransportGrid size={size} />,
  args: { size: 200 },
};

export const TransportSmall: StoryObj<GridProps> = {
  render: ({ size }) => <AllTransportGrid size={size} />,
  args: { size: 64 },
};

// ---------------------------------------------------------------------------
// Individual GHS pictogram stories
// ---------------------------------------------------------------------------

const individualParams = {
  parameters: { layout: 'centered' },
  argTypes: {
    width: { control: { type: 'number', min: 32, max: 512, step: 8 } },
    height: { control: { type: 'number', min: 32, max: 512, step: 8 } },
    title: { control: 'text' },
    description: { control: 'text' },
    'aria-label': { control: 'text' },
  },
  args: { width: 200, height: 200 },
} as const;

export const Explosive: StoryObj<PictogramProps> = {
  name: 'GHS01 Explosive',
  ...individualParams,
  render: (args) => <Ghs01Explosive {...args} />,
};

export const Flammable: StoryObj<PictogramProps> = {
  name: 'GHS02 Flammable',
  ...individualParams,
  render: (args) => <Ghs02Flammable {...args} />,
};

export const Oxidizing: StoryObj<PictogramProps> = {
  name: 'GHS03 Oxidizing',
  ...individualParams,
  render: (args) => <Ghs03Oxidizing {...args} />,
};

export const CompressedGas: StoryObj<PictogramProps> = {
  name: 'GHS04 Compressed Gas',
  ...individualParams,
  render: (args) => <Ghs04CompressedGas {...args} />,
};

export const Corrosive: StoryObj<PictogramProps> = {
  name: 'GHS05 Corrosive',
  ...individualParams,
  render: (args) => <Ghs05Corrosive {...args} />,
};

export const Toxic: StoryObj<PictogramProps> = {
  name: 'GHS06 Toxic',
  ...individualParams,
  render: (args) => <Ghs06Toxic {...args} />,
};

export const HealthHazard: StoryObj<PictogramProps> = {
  name: 'GHS07 Health Hazard',
  ...individualParams,
  render: (args) => <Ghs07HealthHazardHazardousToOzoneLayer {...args} />,
};

export const SeriousHealthHazard: StoryObj<PictogramProps> = {
  name: 'GHS08 Serious Health Hazard',
  ...individualParams,
  render: (args) => <Ghs08SeriousHealthHazard {...args} />,
};

export const EnvironmentalHazard: StoryObj<PictogramProps> = {
  name: 'GHS09 Environmental Hazard',
  ...individualParams,
  render: (args) => <Ghs09HazardousToTheEnvironment {...args} />,
};

export const CustomA11y: StoryObj<PictogramProps> = {
  name: 'Custom Accessibility Props',
  ...individualParams,
  parameters: {
    ...individualParams.parameters,
    docs: {
      description: {
        story:
          'Override `title` and `description` to customise the accessible label announced by screen readers.',
      },
    },
  },
  render: (args) => <Ghs06Toxic {...args} />,
  args: {
    width: 200,
    height: 200,
    title: 'Danger: Toxic substance',
    description: 'This chemical is acutely toxic. Wear appropriate PPE before handling.',
  },
};

// ---------------------------------------------------------------------------
// Individual transport pictogram stories
// ---------------------------------------------------------------------------

export const Div1113: StoryObj<PictogramProps> = {
  name: 'Divisions 1.1–1.3',
  ...individualParams,
  render: (args) => <Divisions1113Icon {...args} />,
};

export const Div14: StoryObj<PictogramProps> = {
  name: 'Division 1.4',
  ...individualParams,
  render: (args) => <Division14Icon {...args} />,
};

export const Div15: StoryObj<PictogramProps> = {
  name: 'Division 1.5',
  ...individualParams,
  render: (args) => <Division15Icon {...args} />,
};

export const Div16: StoryObj<PictogramProps> = {
  name: 'Division 1.6',
  ...individualParams,
  render: (args) => <Division16Icon {...args} />,
};

export const Div21: StoryObj<PictogramProps> = {
  name: 'Division 2.1',
  ...individualParams,
  render: (args) => <Division21Icon {...args} />,
};

export const Div22: StoryObj<PictogramProps> = {
  name: 'Division 2.2',
  ...individualParams,
  render: (args) => <Division22Icon {...args} />,
};

export const Div23: StoryObj<PictogramProps> = {
  name: 'Division 2.3',
  ...individualParams,
  render: (args) => <Division23Icon {...args} />,
};

export const ClassThree: StoryObj<PictogramProps> = {
  name: 'Class 3',
  ...individualParams,
  render: (args) => <Class3Icon {...args} />,
};

export const Div51: StoryObj<PictogramProps> = {
  name: 'Division 5.1',
  ...individualParams,
  render: (args) => <Division51Icon {...args} />,
};

export const Div52: StoryObj<PictogramProps> = {
  name: 'Division 5.2',
  ...individualParams,
  render: (args) => <Division52Icon {...args} />,
};

export const Div61: StoryObj<PictogramProps> = {
  name: 'Division 6.1',
  ...individualParams,
  render: (args) => <Division61Icon {...args} />,
};

export const ClassSix2: StoryObj<PictogramProps> = {
  name: 'Class 6.2',
  ...individualParams,
  render: (args) => <Class62Icon {...args} />,
};

export const ClassSeven: StoryObj<PictogramProps> = {
  name: 'Class 7',
  ...individualParams,
  render: (args) => <Class7Icon {...args} />,
};

export const ClassEight: StoryObj<PictogramProps> = {
  name: 'Class 8',
  ...individualParams,
  render: (args) => <Class8Icon {...args} />,
};

export const ClassNine: StoryObj<PictogramProps> = {
  name: 'Class 9',
  ...individualParams,
  render: (args) => <Class9Icon {...args} />,
};
