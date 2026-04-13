import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

// ---------------------------------------------------------------------------
// CSS sprite usage
//
// In a real application import the stylesheet from the package:
//   import 'ghs-hazard-pictograms/css/sprite.css';
//
// Then apply the generated class names to any block element sized with
// width / height. Storybook injects the rules dynamically below so you
// can see the effect without importing the file.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Pictogram data
// ---------------------------------------------------------------------------

interface CSSItem {
  /** CSS class name (without leading dot) */
  className: string;
  /** Path to the SVG relative to the assets package root */
  svgPath: string;
  /** Human-readable label */
  label: string;
  category: 'ghs' | 'transport';
}

export const CSS_ITEMS: CSSItem[] = [
  // GHS01–09
  {
    className: 'ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos',
    svgPath: 'physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg',
    label: 'GHS01 Explosive',
    category: 'ghs',
  },
  {
    className: 'ghs-physical_hazards_pictograms_ghs02_flammable_ghs-pictogram-flamme',
    svgPath: 'physical_hazards_pictograms/ghs02_flammable/GHS-pictogram-flamme.svg',
    label: 'GHS02 Flammable',
    category: 'ghs',
  },
  {
    className: 'ghs-physical_hazards_pictograms_ghs03_oxidizing_ghs-pictogram-rondflam',
    svgPath: 'physical_hazards_pictograms/ghs03_oxidizing/GHS-pictogram-rondflam.svg',
    label: 'GHS03 Oxidizing',
    category: 'ghs',
  },
  {
    className: 'ghs-physical_hazards_pictograms_ghs04_compressedgas_ghs-pictogram-bottle',
    svgPath: 'physical_hazards_pictograms/ghs04_compressedgas/GHS-pictogram-bottle.svg',
    label: 'GHS04 Compressed Gas',
    category: 'ghs',
  },
  {
    className: 'ghs-physical_hazards_pictograms_ghs05_corrosive_ghs-pictogram-acid',
    svgPath: 'physical_hazards_pictograms/ghs05_corrosive/GHS-pictogram-acid.svg',
    label: 'GHS05 Corrosive',
    category: 'ghs',
  },
  {
    className: 'ghs-health_hazards_pictograms_ghs06_toxic_ghs-pictogram-skull',
    svgPath: 'health_hazards_pictograms/ghs06_toxic/GHS-pictogram-skull.svg',
    label: 'GHS06 Toxic',
    category: 'ghs',
  },
  {
    className:
      'ghs-health_hazards_pictograms_ghs07_healthhazard_hazardoustoozonelayer_ghs-pictogram-exclam',
    svgPath:
      'health_hazards_pictograms/ghs07_healthhazard_hazardoustoozonelayer/GHS-pictogram-exclam.svg',
    label: 'GHS07 Health Hazard',
    category: 'ghs',
  },
  {
    className:
      'ghs-health_hazards_pictograms_ghs08_serioushealthhazard_ghs-pictogram-silhouette',
    svgPath:
      'health_hazards_pictograms/ghs08_serioushealthhazard/GHS-pictogram-silhouette.svg',
    label: 'GHS08 Serious Health Hazard',
    category: 'ghs',
  },
  {
    className:
      'ghs-environmental_hazards_pictograms_ghs09_hazardoustotheenvironment_ghs-pictogram-pollu',
    svgPath:
      'environmental_hazards_pictograms/ghs09_hazardoustotheenvironment/GHS-pictogram-pollu.svg',
    label: 'GHS09 Environmental Hazard',
    category: 'ghs',
  },
  // Transport hazard classes
  {
    className: 'ghs-transport_pictograms_class_1__explosives_adr_1',
    svgPath: 'transport_pictograms/class_1__explosives/ADR_1.svg',
    label: 'Divisions 1.1–1.3',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_class_1__explosives_adr_1.4',
    svgPath: 'transport_pictograms/class_1__explosives/ADR_1.4.svg',
    label: 'Division 1.4',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_class_1__explosives_adr_1.5',
    svgPath: 'transport_pictograms/class_1__explosives/ADR_1.5.svg',
    label: 'Division 1.5',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_class_1__explosives_adr_1.6',
    svgPath: 'transport_pictograms/class_1__explosives/ADR_1.6.svg',
    label: 'Division 1.6',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_class_2__gases_adr_2.1',
    svgPath: 'transport_pictograms/class_2__gases/ADR_2.1.svg',
    label: 'Division 2.1',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_class_2__gases_adr_2.2',
    svgPath: 'transport_pictograms/class_2__gases/ADR_2.2.svg',
    label: 'Division 2.2',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_class_2__gases_adr_2.3',
    svgPath: 'transport_pictograms/class_2__gases/ADR_2.3.svg',
    label: 'Division 2.3',
    category: 'transport',
  },
  {
    className:
      'ghs-transport_pictograms_classes_3_and_4__flammable_liquids_and_solids_adr_3',
    svgPath:
      'transport_pictograms/classes_3_and_4__flammable_liquids_and_solids/ADR_3.svg',
    label: 'Class 3',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_other_ghs_transport_classes_adr_5.1',
    svgPath: 'transport_pictograms/other_ghs_transport_classes/ADR_5.1.svg',
    label: 'Division 5.1',
    category: 'transport',
  },
  {
    className:
      'ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_5.2_(black)',
    svgPath:
      'transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_5.2_(black).svg',
    label: 'Division 5.2',
    category: 'transport',
  },
  {
    className:
      'ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_6',
    svgPath:
      'transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_6.svg',
    label: 'Division 6.1',
    category: 'transport',
  },
  {
    className:
      'ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_8',
    svgPath:
      'transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_8.svg',
    label: 'Class 8',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_non-ghs_transport_pictograms_adr_6.2',
    svgPath: 'transport_pictograms/non-ghs_transport_pictograms/ADR_6.2.svg',
    label: 'Class 6.2',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_non-ghs_transport_pictograms_adr_7a',
    svgPath: 'transport_pictograms/non-ghs_transport_pictograms/ADR_7A.svg',
    label: 'Class 7',
    category: 'transport',
  },
  {
    className: 'ghs-transport_pictograms_non-ghs_transport_pictograms_adr_9',
    svgPath: 'transport_pictograms/non-ghs_transport_pictograms/ADR_9.svg',
    label: 'Class 9',
    category: 'transport',
  },
];

const GHS_ONLY = CSS_ITEMS.filter((i) => i.category === 'ghs');
const TRANSPORT_ONLY = CSS_ITEMS.filter((i) => i.category === 'transport');

// ---------------------------------------------------------------------------
// CSS injection
//
// Dots and parentheses in class names must be escaped in CSS selectors.
// In HTML class attributes they are used unescaped.
// ---------------------------------------------------------------------------

const escapeSelector = (cls: string) =>
  cls.replace(/[.()\[\]]/g, (ch) => `\\${ch}`);

const StyleInjector = ({ items, size }: { items: CSSItem[]; size: number }) => {
  const rules = items
    .map(
      ({ className, svgPath }) =>
        `.${escapeSelector(className)} { background-image: url('/assets/${svgPath}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`,
    )
    .join('\n');

  const sizeRule = `.ghs-icon { display: inline-block; width: ${size}px; height: ${size}px; }`;

  return <style>{`${rules}\n${sizeRule}`}</style>;
};

// ---------------------------------------------------------------------------
// Grid component
// ---------------------------------------------------------------------------

interface GridProps {
  size?: number;
  items?: CSSItem[];
}

const CSSGrid = ({ size = 120, items = CSS_ITEMS }: GridProps) => (
  <>
    <StyleInjector items={items} size={size} />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '1.5rem',
        padding: '1rem',
      }}
    >
      {items.map(({ className, label }) => (
        <div
          key={className}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span
            className={`ghs-icon ${className}`}
            role="img"
            aria-label={label}
            title={label}
          />
          <span style={{ fontSize: '0.75rem', textAlign: 'center', color: '#555' }}>{label}</span>
        </div>
      ))}
    </div>
  </>
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<GridProps> = {
  title: 'GHS Pictograms/CSS Sprite',
  component: CSSGrid,
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
  render: ({ size }) => <CSSGrid size={size} items={GHS_ONLY} />,
  args: { size: 120 },
};

export const AllTransport: StoryObj<GridProps> = {
  name: 'Transport All',
  render: ({ size }) => <CSSGrid size={size} items={TRANSPORT_ONLY} />,
  args: { size: 120 },
};

export const AllPictograms: StoryObj<GridProps> = {
  render: ({ size }) => <CSSGrid size={size} items={CSS_ITEMS} />,
  args: { size: 120 },
};

export const Large: StoryObj<GridProps> = {
  name: 'All Large',
  render: ({ size }) => <CSSGrid size={size} items={CSS_ITEMS} />,
  args: { size: 200 },
};

export const Small: StoryObj<GridProps> = {
  name: 'All Small',
  render: ({ size }) => <CSSGrid size={size} items={CSS_ITEMS} />,
  args: { size: 64 },
};
