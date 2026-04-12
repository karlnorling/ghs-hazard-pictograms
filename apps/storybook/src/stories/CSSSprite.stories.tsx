import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

// ---------------------------------------------------------------------------
// CSS sprite usage
//
// The sprite.css file uses background-image with relative URLs pointing to
// individual SVG files inside assets/. In a real application you would import
// the stylesheet directly:
//
//   import 'ghs-hazard-pictograms/css/sprite.css';
//
// and then apply the generated class names:
//
//   <span class="ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos"
//         style="display:inline-block;width:120px;height:120px" />
//
// In this Storybook, we inject CSS rules that reference the SVGs via a
// relative path from the storybook dev server.
// ---------------------------------------------------------------------------

// CSS class names for the 9 core GHS pictograms (from sprite.css)
const GHS_CSS_ITEMS = [
  {
    className: 'ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos',
    svgPath: 'physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg',
    label: 'GHS01 Explosive',
  },
  {
    className: 'ghs-physical_hazards_pictograms_ghs02_flammable_ghs-pictogram-flamme',
    svgPath: 'physical_hazards_pictograms/ghs02_flammable/GHS-pictogram-flamme.svg',
    label: 'GHS02 Flammable',
  },
  {
    className: 'ghs-physical_hazards_pictograms_ghs03_oxidizing_ghs-pictogram-rondflam',
    svgPath: 'physical_hazards_pictograms/ghs03_oxidizing/GHS-pictogram-rondflam.svg',
    label: 'GHS03 Oxidizing',
  },
  {
    className: 'ghs-physical_hazards_pictograms_ghs04_compressedgas_ghs-pictogram-bottle',
    svgPath: 'physical_hazards_pictograms/ghs04_compressedgas/GHS-pictogram-bottle.svg',
    label: 'GHS04 Compressed Gas',
  },
  {
    className: 'ghs-physical_hazards_pictograms_ghs05_corrosive_ghs-pictogram-acid',
    svgPath: 'physical_hazards_pictograms/ghs05_corrosive/GHS-pictogram-acid.svg',
    label: 'GHS05 Corrosive',
  },
  {
    className: 'ghs-health_hazards_pictograms_ghs06_toxic_ghs-pictogram-skull',
    svgPath: 'health_hazards_pictograms/ghs06_toxic/GHS-pictogram-skull.svg',
    label: 'GHS06 Toxic',
  },
  {
    className:
      'ghs-health_hazards_pictograms_ghs07_healthhazard_hazardoustoozonelayer_ghs-pictogram-exclam',
    svgPath:
      'health_hazards_pictograms/ghs07_healthhazard_hazardoustoozonelayer/GHS-pictogram-exclam.svg',
    label: 'GHS07 Health Hazard / Ozone',
  },
  {
    className: 'ghs-health_hazards_pictograms_ghs08_serioushealthhazard_ghs-pictogram-silhouette',
    svgPath: 'health_hazards_pictograms/ghs08_serioushealthhazard/GHS-pictogram-silhouette.svg',
    label: 'GHS08 Serious Health Hazard',
  },
  {
    className:
      'ghs-environmental_hazards_pictograms_ghs09_hazardoustotheenvironment_ghs-pictogram-pollu',
    svgPath:
      'environmental_hazards_pictograms/ghs09_hazardoustotheenvironment/GHS-pictogram-pollu.svg',
    label: 'GHS09 Environmental Hazard',
  },
];

// ---------------------------------------------------------------------------
// Inject CSS rules into the document so the classes work in Storybook.
// In a real app you would import sprite.css instead.
// ---------------------------------------------------------------------------

const StyleInjector = ({ size }: { size: number }) => {
  // Build the base URL to the assets directory (served as static by Storybook)
  const rules = GHS_CSS_ITEMS.map(
    ({ className, svgPath }) =>
      `.${className} { background-image: url('/assets/${svgPath}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`,
  ).join('\n');

  // Also set a size class
  const sizeRule = `.ghs-icon { display: inline-block; width: ${size}px; height: ${size}px; }`;

  return <style>{`${rules}\n${sizeRule}`}</style>;
};

// ---------------------------------------------------------------------------
// Story component
// ---------------------------------------------------------------------------

interface GridProps {
  size?: number;
}

const GHSCSSGrid = ({ size = 120 }: GridProps) => (
  <>
    <StyleInjector size={size} />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '1.5rem',
        padding: '1rem',
      }}
    >
      {GHS_CSS_ITEMS.map(({ className, label }) => (
        <div
          key={className}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span className={`ghs-icon ${className}`} role="img" aria-label={label} title={label} />
          <span style={{ fontSize: '0.75rem', textAlign: 'center', color: '#555' }}>{label}</span>
        </div>
      ))}
    </div>
  </>
);

// Code reference panel (pure documentation, no rendering)
const CodeExample = () => (
  <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 1.6 }}>
    <p style={{ fontFamily: 'sans-serif', marginBottom: '0.5rem' }}>
      1. Import the stylesheet in your application entry point:
    </p>
    <pre
      style={{
        background: '#f4f4f4',
        padding: '1rem',
        borderRadius: '4px',
        overflow: 'auto',
      }}
    >
      {`import 'ghs-hazard-pictograms/css/sprite.css';`}
    </pre>

    <p style={{ fontFamily: 'sans-serif', margin: '1rem 0 0.5rem' }}>
      2. Apply the generated class name to any element:
    </p>
    <pre
      style={{
        background: '#f4f4f4',
        padding: '1rem',
        borderRadius: '4px',
        overflow: 'auto',
      }}
    >
      {`<!-- HTML -->
<span class="ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos"
      style="display:inline-block;width:120px;height:120px"
      role="img"
      aria-label="GHS01 Explosive"
      title="GHS01 Explosive" />

<!-- React -->
<span
  className="ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos"
  style={{ display: 'inline-block', width: 120, height: 120 }}
  role="img"
  aria-label="GHS01 Explosive"
  title="GHS01 Explosive"
/>`}
    </pre>

    <p style={{ fontFamily: 'sans-serif', margin: '1rem 0 0.5rem' }}>
      3. Use the CSS helper (optional):
    </p>
    <pre
      style={{
        background: '#f4f4f4',
        padding: '1rem',
        borderRadius: '4px',
        overflow: 'auto',
      }}
    >
      {`import { getCssClassName } from 'ghs-hazard-pictograms/css';

const cls = getCssClassName('ghs01-explosive');
// → 'ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos'`}
    </pre>
  </div>
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<GridProps> = {
  title: 'GHS Pictograms/CSS Sprite',
  component: GHSCSSGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
CSS background-image sprite — import \`ghs-hazard-pictograms/css/sprite.css\` and
apply a generated \`.ghs-*\` class to any block element sized with \`width\` / \`height\`.

\`\`\`css
/* What sprite.css generates per pictogram */
.ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos {
  background-image: url('../physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};

export default meta;

export const AllPictograms: StoryObj<GridProps> = {
  name: 'All GHS Pictograms',
  args: { size: 120 },
};

export const Large: StoryObj<GridProps> = {
  args: { size: 200 },
};

export const Small: StoryObj<GridProps> = {
  args: { size: 64 },
};

export const UsageGuide: StoryObj = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Step-by-step code examples for integrating the CSS sprite into your project.',
      },
    },
  },
  render: () => <CodeExample />,
};
