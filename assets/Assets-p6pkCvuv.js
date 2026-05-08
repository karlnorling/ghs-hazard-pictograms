import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{u as n,M as t}from"./blocks-DaOOhkOj.js";import"./preload-helper-DDjWUwkx.js";import"./iframe-ocOK4Th1.js";import"./index-CSUrORTl.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n(),...r.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"GHS Pictograms/Assets & API"}),`
`,s.jsx(e.h1,{id:"assets--programmatic-api",children:"Assets & Programmatic API"}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"@ghs-hazard-pictograms/core"})," package exposes typed data for all 24 pictograms alongside helper functions for filtering and lookup. The ",s.jsx(e.code,{children:"@ghs-hazard-pictograms/assets"})," package provides pre-built image files at multiple resolutions."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-sh",children:`npm install @ghs-hazard-pictograms/core @ghs-hazard-pictograms/assets
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"programmatic-api",children:"Programmatic API"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`import {
  getAllPictograms,
  getGHSPictograms,
  getPictogram,
  getPictogramsByCategory,
} from '@ghs-hazard-pictograms/core';
`})}),`
`,s.jsx(e.h3,{id:"getallpictograms",children:s.jsx(e.code,{children:"getAllPictograms()"})}),`
`,s.jsx(e.p,{children:"Returns all 24 pictograms (GHS01–09 + transport classes)."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`const all = getAllPictograms();
// → Pictogram[]  (length: 24)
`})}),`
`,s.jsx(e.h3,{id:"getghspictograms",children:s.jsx(e.code,{children:"getGHSPictograms()"})}),`
`,s.jsx(e.p,{children:"Returns only the 9 core GHS01–09 pictograms."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`const ghs = getGHSPictograms();
// → Pictogram[]  (length: 9)
`})}),`
`,s.jsx(e.h3,{id:"getpictogramid",children:s.jsx(e.code,{children:"getPictogram(id)"})}),`
`,s.jsx(e.p,{children:"Look up a single pictogram by its ID string."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`const explosive = getPictogram('ghs01-explosive');
// → Pictogram | undefined

// Transport example
const radioactive = getPictogram('class-7');
`})}),`
`,s.jsx(e.h3,{id:"getpictogramsbycategorycategory",children:s.jsx(e.code,{children:"getPictogramsByCategory(category)"})}),`
`,s.jsx(e.p,{children:"Filter pictograms by hazard category."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`const physical  = getPictogramsByCategory('physical_hazards');   // GHS01–05
const health    = getPictogramsByCategory('health_hazards');     // GHS06–08
const env       = getPictogramsByCategory('environmental_hazards'); // GHS09
const transport = getPictogramsByCategory('transport');          // 15 classes
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"pictogram-type",children:[s.jsx(e.code,{children:"Pictogram"})," type"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`interface Pictogram {
  id: string;          // e.g. 'ghs01-explosive'
  code: string;        // e.g. 'GHS01' (empty string for transport)
  name: string;        // e.g. 'Explosive'
  category: PictogramCategory;
  description: string; // Wikipedia hazard description
  svg: string;         // Inline SVG markup string
  assets: PictogramAssets;
}

interface PictogramAssets {
  svg: string;                    // Relative path to original SVG
  png: Record<number, string>;    // size → relative path (240, 512, 768, 1024, 2048)
  jpg: Record<number, string>;    // same sizes
  webp: Record<number, string>;   // same sizes
}

type PictogramCategory =
  | 'physical_hazards'
  | 'health_hazards'
  | 'physical_and_health_hazards'
  | 'environmental_hazards'
  | 'transport';
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"asset-files",children:"Asset files"}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"@ghs-hazard-pictograms/assets"})," package ships pre-converted raster images at five resolutions (240 × 240, 512 × 512, 768 × 768, 1024 × 1024, 2048 × 2048) in PNG, JPG, and WebP formats alongside the original SVGs."]}),`
`,s.jsx(e.h3,{id:"directory-layout-ghs-example",children:"Directory layout (GHS example)"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{children:`assets/
  physical_hazards_pictograms/
    ghs01_explosive/
      GHS-pictogram-explos.svg
      GHS-pictogram-explos_240x240.png
      GHS-pictogram-explos_512x512.png
      GHS-pictogram-explos_768x768.png
      GHS-pictogram-explos_1024x1024.png
      GHS-pictogram-explos_2048x2048.png
      GHS-pictogram-explos_240x240.jpg
      GHS-pictogram-explos_240x240.webp
      ...
`})}),`
`,s.jsx(e.h3,{id:"directory-layout-transport-example",children:"Directory layout (transport example)"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{children:`assets/
  transport_pictograms/
    class_1__explosives/
      ADR_1.svg
      ADR_1.4.svg
      ADR_1.5.svg
      ADR_1.6.svg
      ADR_1_240x240.png
      ...
    class_2__gases/
      ADR_2.1.svg
      ...
    classes_3_and_4__flammable_liquids_and_solids/
      ADR_3.svg
      ...
    other_ghs_transport_classes/
      ADR_5.1.svg
      UN_transport_pictogram_-_5.2_(black).svg
      UN_transport_pictogram_-_6.svg
      UN_transport_pictogram_-_8.svg
      ...
    non-ghs_transport_pictograms/
      ADR_6.2.svg
      ADR_7A.svg
      ADR_9.svg
      ...
`})}),`
`,s.jsx(e.h3,{id:"import-individual-assets",children:"Import individual assets"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`// With a bundler that handles static imports:
import explos from '@ghs-hazard-pictograms/assets/assets/physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg';
`})}),`
`,s.jsx(e.h3,{id:"resolve-asset-paths-via-the-api",children:"Resolve asset paths via the API"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`import { getPictogram } from '@ghs-hazard-pictograms/core';

const p = getPictogram('ghs01-explosive');
if (p) {
  console.log(p.assets.svg);          // 'physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg'
  console.log(p.assets.png[512]);     // 'physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos_512x512.png'
  console.log(p.assets.webp[1024]);   // '...1024x1024.webp'
}
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"all-pictogram-ids",children:"All pictogram IDs"}),`
`,s.jsx(e.h3,{id:"ghs-hazard-pictograms",children:"GHS hazard pictograms"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"ID"}),s.jsx(e.th,{children:"Code"}),s.jsx(e.th,{children:"Name"}),s.jsx(e.th,{children:"Category"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs01-explosive"})}),s.jsx(e.td,{children:"GHS01"}),s.jsx(e.td,{children:"Explosive"}),s.jsx(e.td,{children:"physical_hazards"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs02-flammable"})}),s.jsx(e.td,{children:"GHS02"}),s.jsx(e.td,{children:"Flammable"}),s.jsx(e.td,{children:"physical_hazards"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs03-oxidizing"})}),s.jsx(e.td,{children:"GHS03"}),s.jsx(e.td,{children:"Oxidizing"}),s.jsx(e.td,{children:"physical_hazards"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs04-compressed-gas"})}),s.jsx(e.td,{children:"GHS04"}),s.jsx(e.td,{children:"Compressed Gas"}),s.jsx(e.td,{children:"physical_hazards"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs05-corrosive"})}),s.jsx(e.td,{children:"GHS05"}),s.jsx(e.td,{children:"Corrosive"}),s.jsx(e.td,{children:"physical_hazards"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs06-toxic"})}),s.jsx(e.td,{children:"GHS06"}),s.jsx(e.td,{children:"Toxic"}),s.jsx(e.td,{children:"health_hazards"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs07-health-hazard-hazardous-to-ozone-layer"})}),s.jsx(e.td,{children:"GHS07"}),s.jsx(e.td,{children:"Health Hazard / Hazardous to Ozone Layer"}),s.jsx(e.td,{children:"health_hazards"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs08-serious-health-hazard"})}),s.jsx(e.td,{children:"GHS08"}),s.jsx(e.td,{children:"Serious Health Hazard"}),s.jsx(e.td,{children:"health_hazards"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"ghs09-hazardous-to-the-environment"})}),s.jsx(e.td,{children:"GHS09"}),s.jsx(e.td,{children:"Hazardous to the Environment"}),s.jsx(e.td,{children:"environmental_hazards"})]})]})]}),`
`,s.jsx(e.h3,{id:"transport-hazard-pictograms",children:"Transport hazard pictograms"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"ID"}),s.jsx(e.th,{children:"Name"}),s.jsx(e.th,{children:"Hazard class"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"divisions-1-1-1-3"})}),s.jsx(e.td,{children:"Divisions 1.1–1.3"}),s.jsx(e.td,{children:"Class 1 Explosives — mass explosion / fragmentation"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-1-4"})}),s.jsx(e.td,{children:"Division 1.4"}),s.jsx(e.td,{children:"Class 1 Explosives — minor blast hazard"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-1-5"})}),s.jsx(e.td,{children:"Division 1.5"}),s.jsx(e.td,{children:"Class 1 Explosives — very insensitive"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-1-6"})}),s.jsx(e.td,{children:"Division 1.6"}),s.jsx(e.td,{children:"Class 1 Explosives — extremely insensitive"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-2-1"})}),s.jsx(e.td,{children:"Division 2.1"}),s.jsx(e.td,{children:"Class 2 Flammable gases"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-2-2"})}),s.jsx(e.td,{children:"Division 2.2"}),s.jsx(e.td,{children:"Class 2 Non-flammable, non-toxic gases"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-2-3"})}),s.jsx(e.td,{children:"Division 2.3"}),s.jsx(e.td,{children:"Class 2 Toxic gases"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"class-3"})}),s.jsx(e.td,{children:"Class 3"}),s.jsx(e.td,{children:"Flammable liquids and solids"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-5-1"})}),s.jsx(e.td,{children:"Division 5.1"}),s.jsx(e.td,{children:"Oxidising substances"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-5-2"})}),s.jsx(e.td,{children:"Division 5.2"}),s.jsx(e.td,{children:"Organic peroxides"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"division-6-1"})}),s.jsx(e.td,{children:"Division 6.1"}),s.jsx(e.td,{children:"Toxic substances"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"class-6-2"})}),s.jsx(e.td,{children:"Class 6.2"}),s.jsx(e.td,{children:"Infectious substances"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"class-7"})}),s.jsx(e.td,{children:"Class 7"}),s.jsx(e.td,{children:"Radioactive material"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"class-8"})}),s.jsx(e.td,{children:"Class 8"}),s.jsx(e.td,{children:"Corrosives"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"class-9"})}),s.jsx(e.td,{children:"Class 9"}),s.jsx(e.td,{children:"Miscellaneous dangerous substances"})]})]})]})]})}function o(r={}){const{wrapper:e}={...n(),...r.components};return e?s.jsx(e,{...r,children:s.jsx(i,{...r})}):i(r)}export{o as default};
