import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import {
  Ghs01Explosive,
  Ghs02Flammable,
  Ghs03Oxidizing,
  Ghs04CompressedGas,
  Ghs05Corrosive,
  Ghs06Toxic,
  Ghs07HealthHazardHazardousToOzoneLayer,
  Ghs08SeriousHealthHazard,
  Ghs09HazardousToTheEnvironment,
  type PictogramProps,
} from '@ghs-pictogram/react';

// ---------------------------------------------------------------------------
// Wrapper component so Storybook controls work across all pictograms
// ---------------------------------------------------------------------------

interface AllPictogramsProps extends PictogramProps {
  size?: number;
}

const AllGHSPictograms = ({ size = 120, ...props }: AllPictogramsProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: '1.5rem',
      padding: '1rem',
    }}
  >
    {[
      { Component: Ghs01Explosive, label: 'GHS01 Explosive' },
      { Component: Ghs02Flammable, label: 'GHS02 Flammable' },
      { Component: Ghs03Oxidizing, label: 'GHS03 Oxidizing' },
      { Component: Ghs04CompressedGas, label: 'GHS04 Compressed Gas' },
      { Component: Ghs05Corrosive, label: 'GHS05 Corrosive' },
      { Component: Ghs06Toxic, label: 'GHS06 Toxic' },
      { Component: Ghs07HealthHazardHazardousToOzoneLayer, label: 'GHS07 Health Hazard' },
      { Component: Ghs08SeriousHealthHazard, label: 'GHS08 Serious Health Hazard' },
      { Component: Ghs09HazardousToTheEnvironment, label: 'GHS09 Environmental Hazard' },
    ].map(({ Component, label }) => (
      <div
        key={label}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <Component width={size} height={size} {...props} />
        <span style={{ fontSize: '0.75rem', textAlign: 'center', color: '#555' }}>{label}</span>
      </div>
    ))}
  </div>
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: 'GHS Pictograms/React Components',
  component: AllGHSPictograms,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
React components for all 9 core GHS hazard pictograms.

\`\`\`tsx
import { Ghs01Explosive } from 'ghs-hazard-pictograms/react';

<Ghs01Explosive width={120} height={120} />
\`\`\`

Each component accepts \`title\`, \`description\`, \`width\`, \`height\`, \`className\`, \`style\`, and \`aria-label\` props.
The SVG is rendered inline with \`role="img"\`, \`<title>\`, and \`<desc>\` for full accessibility.
        `.trim(),
      },
    },
  },
  argTypes: {
    width: { control: { type: 'number', min: 32, max: 512, step: 8 } },
    height: { control: { type: 'number', min: 32, max: 512, step: 8 } },
    size: {
      control: { type: 'number', min: 32, max: 512, step: 8 },
      description: 'Size for all pictograms in the grid',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    'aria-label': { control: 'text' },
  },
} satisfies Meta<typeof AllGHSPictograms>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const AllPictograms: Story = {
  name: 'All GHS Pictograms',
  args: {
    size: 120,
  },
};

export const Large: Story = {
  args: {
    size: 200,
  },
};

export const Small: Story = {
  args: {
    size: 64,
  },
};

// ---------------------------------------------------------------------------
// Individual pictogram stories
// ---------------------------------------------------------------------------

const singleMeta = {
  title: 'GHS Pictograms/Individual',
  argTypes: {
    width: { control: { type: 'number', min: 32, max: 512, step: 8 } },
    height: { control: { type: 'number', min: 32, max: 512, step: 8 } },
    title: { control: 'text' },
    description: { control: 'text' },
    'aria-label': { control: 'text' },
  },
  parameters: { layout: 'centered' },
};

// GHS01
export const Explosive: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs01Explosive {...args} />,
  args: { width: 200, height: 200 },
};

// GHS02
export const Flammable: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs02Flammable {...args} />,
  args: { width: 200, height: 200 },
};

// GHS03
export const Oxidizing: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs03Oxidizing {...args} />,
  args: { width: 200, height: 200 },
};

// GHS04
export const CompressedGas: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs04CompressedGas {...args} />,
  args: { width: 200, height: 200 },
};

// GHS05
export const Corrosive: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs05Corrosive {...args} />,
  args: { width: 200, height: 200 },
};

// GHS06
export const Toxic: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs06Toxic {...args} />,
  args: { width: 200, height: 200 },
};

// GHS07
export const HealthHazard: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs07HealthHazardHazardousToOzoneLayer {...args} />,
  args: { width: 200, height: 200 },
};

// GHS08
export const SeriousHealthHazard: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs08SeriousHealthHazard {...args} />,
  args: { width: 200, height: 200 },
};

// GHS09
export const EnvironmentalHazard: StoryObj<PictogramProps> = {
  ...singleMeta,
  render: (args) => <Ghs09HazardousToTheEnvironment {...args} />,
  args: { width: 200, height: 200 },
};

// Accessibility: custom title and description
export const CustomA11y: StoryObj<PictogramProps> = {
  name: 'Custom Accessibility Props',
  ...singleMeta,
  parameters: {
    ...singleMeta.parameters,
    docs: {
      description: {
        story:
          'Override the default `title` and `description` to customise the accessible label announced by screen readers.',
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
