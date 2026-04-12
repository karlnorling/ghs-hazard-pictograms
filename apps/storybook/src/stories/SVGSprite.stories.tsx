import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

// ---------------------------------------------------------------------------
// The SVG sprite is embedded inline so storybook can resolve it without
// needing a separate HTTP request to /assets/sprites/sprite.svg.
// In a real application you would reference the external file instead:
//   <svg><use href="/path/to/sprite.svg#symbol-id" /></svg>
// or inline the sprite once at the top of your HTML document.
// ---------------------------------------------------------------------------

// Inline sprite embed – hidden visually but accessible to <use> references
const InlineSprite = () => {
  const [spriteHtml, setSpriteHtml] = React.useState<string>('');

  React.useEffect(() => {
    // Fetch from the static dir configured in .storybook/main.ts
    fetch('/assets/sprites/sprite.svg')
      .then((r) => r.text())
      .then(setSpriteHtml)
      .catch(() => {
        // Fallback: sprite not served in this environment
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
// Reusable icon component that references a sprite symbol
// ---------------------------------------------------------------------------

interface SpriteIconProps {
  /** The symbol ID from sprite.svg (e.g. "physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos") */
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
// Stories
// ---------------------------------------------------------------------------

const GHS_SYMBOLS: Array<{ id: string; label: string }> = [
  {
    id: 'physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos',
    label: 'GHS01 Explosive',
  },
  {
    id: 'physical-hazards-pictograms-ghs02-flammable-ghs-pictogram-flamme',
    label: 'GHS02 Flammable',
  },
  {
    id: 'physical-hazards-pictograms-ghs03-oxidizing-ghs-pictogram-rondflam',
    label: 'GHS03 Oxidizing',
  },
  {
    id: 'physical-hazards-pictograms-ghs04-compressedgas-ghs-pictogram-bottle',
    label: 'GHS04 Compressed Gas',
  },
  {
    id: 'physical-hazards-pictograms-ghs05-corrosive-ghs-pictogram-acid',
    label: 'GHS05 Corrosive',
  },
  {
    id: 'health-hazards-pictograms-ghs06-toxic-ghs-pictogram-skull',
    label: 'GHS06 Toxic',
  },
  {
    id: 'health-hazards-pictograms-ghs07-healthhazard-hazardoustoozonelayer-ghs-pictogram-exclam',
    label: 'GHS07 Health Hazard / Ozone',
  },
  {
    id: 'health-hazards-pictograms-ghs08-serioushealthhazard-ghs-pictogram-silhouette',
    label: 'GHS08 Serious Health Hazard',
  },
  {
    id: 'environmental-hazards-pictograms-ghs09-hazardoustotheenvironment-ghs-pictogram-pollu',
    label: 'GHS09 Hazardous to Environment',
  },
];

interface GridProps {
  size?: number;
}

const GHSSpriteGrid = ({ size = 120 }: GridProps) => (
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
      {GHS_SYMBOLS.map(({ id, label }) => (
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

const meta: Meta<GridProps> = {
  title: 'GHS Pictograms/SVG Sprite',
  component: GHSSpriteGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
SVG sprite usage — a single \`sprite.svg\` file contains all pictograms as \`<symbol>\` elements.

**External file reference (recommended for production):**
\`\`\`html
<svg width="120" height="120" role="img" aria-label="Explosive">
  <title>Explosive</title>
  <use href="/assets/sprites/sprite.svg#physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos" />
</svg>
\`\`\`

**Inline sprite (inline once, reference many times):**
\`\`\`html
<!-- Inline the sprite invisibly at the top of your document -->
<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- contents of sprite.svg -->
</div>

<!-- Then reference symbols anywhere on the page -->
<svg width="120" height="120" role="img" aria-label="Explosive">
  <title>Explosive</title>
  <use href="#physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos" />
</svg>
\`\`\`

**React import:**
\`\`\`tsx
import spriteUrl from 'ghs-hazard-pictograms/sprite.svg';

<svg width={120} height={120} role="img" aria-label="Explosive">
  <title>Explosive</title>
  <use href={\`\${spriteUrl}#physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos\`} />
</svg>
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

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All GHS Symbols',
  args: { size: 120 },
};

export const Large: StoryObj<GridProps> = {
  args: { size: 200 },
};

export const Small: StoryObj<GridProps> = {
  args: { size: 64 },
};

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
    },
    label: { control: 'text' },
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};
