import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{u as c,M as l,C as i,a as t}from"./blocks-DaOOhkOj.js";import{R as h,A as a,a as o,E as d,C as x,F as j,O as p,b as m,c as v,T as g,H as f,S as u,d as C,D,e as b,f as y,g as H,h as z,i as G,j as S,k as E,l as T,m as w,n as P,o as A,p as O,q as N,r as R}from"./ReactComponents.stories-DN4Jdn1q.js";import"./preload-helper-DDjWUwkx.js";import"./iframe-ocOK4Th1.js";import"./index-CSUrORTl.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(l,{of:h}),`
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
`,s.jsx(i,{of:a}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"transport-hazard-pictograms",children:"Transport Hazard Pictograms"}),`
`,s.jsx(e.p,{children:"UN/ADR transport hazard class pictograms covering explosives (Class 1), gases (Class 2), flammable liquids (Class 3), oxidisers (Class 5), toxic substances (Class 6), radioactives (Class 7), corrosives (Class 8), and miscellaneous (Class 9)."}),`
`,s.jsx(i,{of:o}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"props-reference--pictogramprops",children:["Props reference — ",s.jsx(e.code,{children:"PictogramProps"})]}),`
`,s.jsx(e.p,{children:"Every component accepts the following props. Use the controls panel below to experiment interactively."}),`
`,s.jsx(i,{of:d}),`
`,s.jsx(t,{of:d}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Prop"}),s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"}),s.jsx(e.th,{children:"Description"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"width"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"number | string"})}),s.jsx(e.td,{children:"SVG intrinsic width"}),s.jsxs(e.td,{children:["Width of the ",s.jsx(e.code,{children:"<svg>"})," element"]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"height"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"number | string"})}),s.jsx(e.td,{children:"SVG intrinsic height"}),s.jsxs(e.td,{children:["Height of the ",s.jsx(e.code,{children:"<svg>"})," element"]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"title"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"Pictogram name"}),s.jsxs(e.td,{children:["Accessible title injected as ",s.jsx(e.code,{children:"<title>"})," inside the SVG"]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"description"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"Hazard description"}),s.jsxs(e.td,{children:["Accessible description injected as ",s.jsx(e.code,{children:"<desc>"})]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"className"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"—"}),s.jsxs(e.td,{children:["CSS class forwarded to the root ",s.jsx(e.code,{children:"<svg>"})]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"style"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"React.CSSProperties"})}),s.jsx(e.td,{children:"—"}),s.jsxs(e.td,{children:["Inline styles forwarded to the root ",s.jsx(e.code,{children:"<svg>"})]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.code,{children:"aria-label"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"—"}),s.jsxs(e.td,{children:["Overrides ",s.jsx(e.code,{children:"aria-labelledby"})," with a direct label"]})]})]})]}),`
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
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Story"}),s.jsx(e.th,{children:"Component"}),s.jsx(e.th,{children:"Description"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS01 Explosive"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs01Explosive"})}),s.jsx(e.td,{children:"Explosives, self-reactive substances, organic peroxides"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS02 Flammable"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs02Flammable"})}),s.jsx(e.td,{children:"Flammable gases, aerosols, liquids, solids"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS03 Oxidizing"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs03Oxidizing"})}),s.jsx(e.td,{children:"Oxidising gases, liquids, solids"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS04 Compressed Gas"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs04CompressedGas"})}),s.jsx(e.td,{children:"Compressed, liquefied, or dissolved gases"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS05 Corrosive"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs05Corrosive"})}),s.jsx(e.td,{children:"Skin corrosion / burns, serious eye damage"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS06 Toxic"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs06Toxic"})}),s.jsx(e.td,{children:"Acute toxicity (oral, dermal, inhalation)"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS07 Health Hazard"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs07HealthHazardHazardousToOzoneLayer"})}),s.jsx(e.td,{children:"Irritant, sensitiser, narcotic; hazardous to ozone layer"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS08 Serious Health Hazard"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs08SeriousHealthHazard"})}),s.jsx(e.td,{children:"Carcinogen, mutagen, reproductive toxicant"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS09 Environmental Hazard"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Ghs09HazardousToTheEnvironment"})}),s.jsx(e.td,{children:"Aquatic toxicity (acute and chronic)"})]})]})]}),`
`,s.jsx(i,{of:d}),`
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
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Story"}),s.jsx(e.th,{children:"Component"}),s.jsx(e.th,{children:"Hazard class"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Divisions 1.1–1.3"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Divisions1113"})}),s.jsx(e.td,{children:"Explosives with mass explosion / fragment hazard"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 1.4"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division14"})}),s.jsx(e.td,{children:"Explosives — minor blast hazard only"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 1.5"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division15"})}),s.jsx(e.td,{children:"Very insensitive explosives"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 1.6"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division16"})}),s.jsx(e.td,{children:"Extremely insensitive detonating articles"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 2.1"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division21"})}),s.jsx(e.td,{children:"Flammable gases"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 2.2"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division22"})}),s.jsx(e.td,{children:"Non-flammable, non-toxic gases"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 2.3"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division23"})}),s.jsx(e.td,{children:"Toxic gases"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 3"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Class3"})}),s.jsx(e.td,{children:"Flammable liquids and solids"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 5.1"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division51"})}),s.jsx(e.td,{children:"Oxidising substances"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 5.2"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division52"})}),s.jsx(e.td,{children:"Organic peroxides"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 6.1"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Division61"})}),s.jsx(e.td,{children:"Toxic substances"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 6.2"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Class62"})}),s.jsx(e.td,{children:"Infectious substances"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 7"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Class7"})}),s.jsx(e.td,{children:"Radioactive material"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 8"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Class8"})}),s.jsx(e.td,{children:"Corrosives"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 9"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"Class9"})}),s.jsx(e.td,{children:"Miscellaneous dangerous substances"})]})]})]}),`
`,s.jsx(i,{of:D}),`
`,s.jsx(i,{of:b}),`
`,s.jsx(i,{of:y}),`
`,s.jsx(i,{of:H}),`
`,s.jsx(i,{of:z}),`
`,s.jsx(i,{of:G}),`
`,s.jsx(i,{of:S}),`
`,s.jsx(i,{of:E}),`
`,s.jsx(i,{of:T}),`
`,s.jsx(i,{of:w}),`
`,s.jsx(i,{of:P}),`
`,s.jsx(i,{of:A}),`
`,s.jsx(i,{of:O}),`
`,s.jsx(i,{of:N}),`
`,s.jsx(i,{of:R})]})}function L(n={}){const{wrapper:e}={...c(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(r,{...n})}):r(n)}export{L as default};
