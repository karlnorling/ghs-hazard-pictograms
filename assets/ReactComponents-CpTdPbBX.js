import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{u as r,M as c,C as i,a as d}from"./blocks-fDNENPri.js";import{R as l,A as t,a as h,E as o,C as x,F as j,O as p,b as m,c as v,T as g,H as f,S as u,d as C,D,e as b,f as H,g as z,h as G,i as S,j as y,k as E,l as T,m as w,n as P,o as A,p as O,q as N,r as R}from"./ReactComponents.stories-DeNbhO9L.js";import"./iframe-CSWschvY.js";import"./index-Duoz8m2c.js";function a(n){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{of:l}),`
`,s.jsx(e.h1,{id:"react-components",children:"React Components"}),`
`,s.jsxs(e.p,{children:["Inline SVG components for all 24 GHS and transport hazard pictograms. Each component is tree-shakeable, fully accessible, and accepts the same ",s.jsx(e.code,{children:"PictogramProps"})," interface."]}),`
`,s.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-sh",children:`npm install @ghs-hazard-pictograms/react
# or
yarn add @ghs-hazard-pictograms/react
`})}),`
`,s.jsx(e.h2,{id:"basic-usage",children:"Basic usage"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { Ghs01Explosive } from '@ghs-hazard-pictograms/react';

export default function Label() {
  return <Ghs01Explosive width={120} height={120} />;
}
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"ghs0109-hazard-pictograms",children:"GHS01–09 Hazard Pictograms"}),`
`,s.jsx(e.p,{children:"The nine core globally harmonised system pictograms covering physical, health, and environmental hazards."}),`
`,s.jsx(i,{of:t}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"transport-hazard-pictograms",children:"Transport Hazard Pictograms"}),`
`,s.jsx(e.p,{children:"UN/ADR transport hazard class pictograms covering explosives (Class 1), gases (Class 2), flammable liquids (Class 3), oxidisers (Class 5), toxic substances (Class 6), radioactives (Class 7), corrosives (Class 8), and miscellaneous (Class 9)."}),`
`,s.jsx(i,{of:h}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"props-reference--pictogramprops",children:["Props reference — ",s.jsx(e.code,{children:"PictogramProps"})]}),`
`,s.jsx(e.p,{children:"Every component accepts the following props. Use the controls panel below to experiment interactively."}),`
`,s.jsx(i,{of:o}),`
`,s.jsx(d,{of:o}),`
`,s.jsxs(e.p,{children:[`| Prop          | Type                  | Default                      | Description                                              |
| ------------- | --------------------- | ---------------------------- | -------------------------------------------------------- |
| `,s.jsx(e.code,{children:"width"}),"       | ",s.jsx(e.code,{children:"number \\| string"}),"    | SVG intrinsic width          | Width of the ",s.jsx(e.code,{children:"<svg>"}),` element                             |
| `,s.jsx(e.code,{children:"height"}),"      | ",s.jsx(e.code,{children:"number \\| string"}),"    | SVG intrinsic height         | Height of the ",s.jsx(e.code,{children:"<svg>"}),` element                            |
| `,s.jsx(e.code,{children:"title"}),"       | ",s.jsx(e.code,{children:"string"}),"              | Pictogram name               | Accessible title injected as ",s.jsx(e.code,{children:"<title>"}),` inside the SVG   |
| `,s.jsx(e.code,{children:"description"})," | ",s.jsx(e.code,{children:"string"}),"              | Hazard description           | Accessible description injected as ",s.jsx(e.code,{children:"<desc>"}),`              |
| `,s.jsx(e.code,{children:"className"}),"   | ",s.jsx(e.code,{children:"string"}),"              | —                            | CSS class forwarded to the root ",s.jsx(e.code,{children:"<svg>"}),`                  |
| `,s.jsx(e.code,{children:"style"}),"       | ",s.jsx(e.code,{children:"React.CSSProperties"})," | —                            | Inline styles forwarded to the root ",s.jsx(e.code,{children:"<svg>"}),`              |
| `,s.jsx(e.code,{children:"aria-label"}),"  | ",s.jsx(e.code,{children:"string"}),"              | —                            | Overrides ",s.jsx(e.code,{children:"aria-labelledby"})," with a direct label          |"]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,s.jsxs(e.p,{children:["Every component renders with ",s.jsx(e.code,{children:'role="img"'}),", ",s.jsx(e.code,{children:"aria-labelledby"})," pointing to an injected ",s.jsx(e.code,{children:"<title>"})," and ",s.jsx(e.code,{children:"<desc>"})," element. Screen readers announce the pictogram name and hazard description automatically."]}),`
`,s.jsx(e.p,{children:"Override the defaults when you need domain-specific copy:"}),`
`,s.jsx(i,{of:x}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`<Ghs06Toxic
  title="Danger: Toxic substance"
  description="Acutely toxic — wear PPE before handling."
  width={120}
/>
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"ghs0109-individual-pictograms",children:"GHS01–09 Individual Pictograms"}),`
`,s.jsxs(e.p,{children:[`| Story | Component | Description |
| ----- | --------- | ----------- |
| GHS01 Explosive | `,s.jsx(e.code,{children:"Ghs01Explosive"}),` | Explosives, self-reactive substances, organic peroxides |
| GHS02 Flammable | `,s.jsx(e.code,{children:"Ghs02Flammable"}),` | Flammable gases, aerosols, liquids, solids |
| GHS03 Oxidizing | `,s.jsx(e.code,{children:"Ghs03Oxidizing"}),` | Oxidising gases, liquids, solids |
| GHS04 Compressed Gas | `,s.jsx(e.code,{children:"Ghs04CompressedGas"}),` | Compressed, liquefied, or dissolved gases |
| GHS05 Corrosive | `,s.jsx(e.code,{children:"Ghs05Corrosive"}),` | Skin corrosion / burns, serious eye damage |
| GHS06 Toxic | `,s.jsx(e.code,{children:"Ghs06Toxic"}),` | Acute toxicity (oral, dermal, inhalation) |
| GHS07 Health Hazard | `,s.jsx(e.code,{children:"Ghs07HealthHazardHazardousToOzoneLayer"}),` | Irritant, sensitiser, narcotic; hazardous to ozone layer |
| GHS08 Serious Health Hazard | `,s.jsx(e.code,{children:"Ghs08SeriousHealthHazard"}),` | Carcinogen, mutagen, reproductive toxicant |
| GHS09 Environmental Hazard | `,s.jsx(e.code,{children:"Ghs09HazardousToTheEnvironment"})," | Aquatic toxicity (acute and chronic) |"]}),`
`,s.jsx(i,{of:o}),`
`,s.jsx(i,{of:j}),`
`,s.jsx(i,{of:p}),`
`,s.jsx(i,{of:m}),`
`,s.jsx(i,{of:v}),`
`,s.jsx(i,{of:g}),`
`,s.jsx(i,{of:f}),`
`,s.jsx(i,{of:u}),`
`,s.jsx(i,{of:C}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"transport-individual-pictograms",children:"Transport Individual Pictograms"}),`
`,s.jsx(e.p,{children:"UN/ADR transport hazard classes exposed as React components."}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import {
  Divisions1113,
  Division14,
  Division15,
  Division16,
  Division21,
  Division22,
  Division23,
  Class3,
  Division51,
  Division52,
  Division61,
  Class8,
  Class62,
  Class7,
  Class9,
} from '@ghs-hazard-pictograms/react';
`})}),`
`,s.jsxs(e.p,{children:[`| Story | Component | Hazard class |
| ----- | --------- | ------------ |
| Divisions 1.1–1.3 | `,s.jsx(e.code,{children:"Divisions1113"}),` | Explosives with mass explosion / fragment hazard |
| Division 1.4 | `,s.jsx(e.code,{children:"Division14"}),` | Explosives — minor blast hazard only |
| Division 1.5 | `,s.jsx(e.code,{children:"Division15"}),` | Very insensitive explosives |
| Division 1.6 | `,s.jsx(e.code,{children:"Division16"}),` | Extremely insensitive detonating articles |
| Division 2.1 | `,s.jsx(e.code,{children:"Division21"}),` | Flammable gases |
| Division 2.2 | `,s.jsx(e.code,{children:"Division22"}),` | Non-flammable, non-toxic gases |
| Division 2.3 | `,s.jsx(e.code,{children:"Division23"}),` | Toxic gases |
| Class 3 | `,s.jsx(e.code,{children:"Class3"}),` | Flammable liquids and solids |
| Division 5.1 | `,s.jsx(e.code,{children:"Division51"}),` | Oxidising substances |
| Division 5.2 | `,s.jsx(e.code,{children:"Division52"}),` | Organic peroxides |
| Division 6.1 | `,s.jsx(e.code,{children:"Division61"}),` | Toxic substances |
| Class 6.2 | `,s.jsx(e.code,{children:"Class62"}),` | Infectious substances |
| Class 7 | `,s.jsx(e.code,{children:"Class7"}),` | Radioactive material |
| Class 8 | `,s.jsx(e.code,{children:"Class8"}),` | Corrosives |
| Class 9 | `,s.jsx(e.code,{children:"Class9"})," | Miscellaneous dangerous substances |"]}),`
`,s.jsx(i,{of:D}),`
`,s.jsx(i,{of:b}),`
`,s.jsx(i,{of:H}),`
`,s.jsx(i,{of:z}),`
`,s.jsx(i,{of:G}),`
`,s.jsx(i,{of:S}),`
`,s.jsx(i,{of:y}),`
`,s.jsx(i,{of:E}),`
`,s.jsx(i,{of:T}),`
`,s.jsx(i,{of:w}),`
`,s.jsx(i,{of:P}),`
`,s.jsx(i,{of:A}),`
`,s.jsx(i,{of:O}),`
`,s.jsx(i,{of:N}),`
`,s.jsx(i,{of:R})]})}function k(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{k as default};
