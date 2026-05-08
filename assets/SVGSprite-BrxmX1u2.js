import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{u as d,M as l,C as i,a as c}from"./blocks-DaOOhkOj.js";import{S as h,A as a,a as o,b as x,c as n}from"./SVGSprite.stories-C2JmgkTf.js";import"./preload-helper-DDjWUwkx.js";import"./iframe-ocOK4Th1.js";import"./index-CSUrORTl.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...r.components};return s.jsxs(s.Fragment,{children:[s.jsx(l,{of:h}),`
`,s.jsx(e.h1,{id:"svg-sprite",children:"SVG Sprite"}),`
`,s.jsxs(e.p,{children:["A single ",s.jsx(e.code,{children:"sprite.svg"})," file contains all 24 pictograms as ",s.jsx(e.code,{children:"<symbol>"})," elements. Reference any symbol with ",s.jsx(e.code,{children:'<use href="#symbol-id">'})," — one HTTP request serves every icon."]}),`
`,s.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-sh",children:`npm install @ghs-hazard-pictograms/sprite
`})}),`
`,s.jsx(e.h2,{id:"when-to-use",children:"When to use"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Approach"}),s.jsx(e.th,{children:"Best for"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"SVG sprite"})}),s.jsx(e.td,{children:"Plain HTML, no framework, or when you need a single network request"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"React components"}),s.jsx(e.td,{children:"React/JSX — richer props, full TypeScript, tree-shakeable"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"CSS sprite"}),s.jsx(e.td,{children:"Class-name driven usage, CMS output, no JavaScript"})]})]})]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,s.jsx(e.h3,{id:"external-file-reference-recommended",children:"External file reference (recommended)"}),`
`,s.jsxs(e.p,{children:["The simplest approach — serve ",s.jsx(e.code,{children:"sprite.svg"})," as a static file and reference symbols by ID:"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<svg width="120" height="120" role="img" aria-label="GHS01 Explosive">
  <title>GHS01 Explosive</title>
  <use href="/assets/sprites/sprite.svg#physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos" />
</svg>
`})}),`
`,s.jsx(e.h3,{id:"inline-sprite-reference-many-times-from-one-embed",children:"Inline sprite (reference many times from one embed)"}),`
`,s.jsxs(e.p,{children:["Embed the sprite once at the top of your page to avoid cross-origin ",s.jsx(e.code,{children:"<use>"})," issues and save repeated requests:"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<!-- Inline once, invisibly -->
<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<!-- Reference any symbol anywhere on the page -->
<svg width="120" height="120" role="img" aria-label="GHS01 Explosive">
  <title>GHS01 Explosive</title>
  <use href="#physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos" />
</svg>
`})}),`
`,s.jsx(e.h3,{id:"react-with-bundler-import",children:"React with bundler import"}),`
`,s.jsx(e.p,{children:"If your bundler supports SVG imports, resolve the sprite URL at build time:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import spriteUrl from '@ghs-hazard-pictograms/sprite/sprite.svg';

function Explosive() {
  return (
    <svg width={120} height={120} role="img" aria-label="GHS01 Explosive">
      <title>GHS01 Explosive</title>
      <use href={\`\${spriteUrl}#physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos\`} />
    </svg>
  );
}
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"ghs0109-symbols",children:"GHS01–09 Symbols"}),`
`,s.jsx(i,{of:a}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"transport-symbols",children:"Transport Symbols"}),`
`,s.jsx(i,{of:o}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"all-pictograms",children:"All Pictograms"}),`
`,s.jsx(i,{of:x}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"interactive-single-icon",children:"Interactive single icon"}),`
`,s.jsx(e.p,{children:"Pick any symbol from the dropdown and adjust the size with the slider."}),`
`,s.jsx(i,{of:n}),`
`,s.jsx(c,{of:n}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"symbol-id-reference",children:"Symbol ID reference"}),`
`,s.jsxs(e.p,{children:["Symbol IDs follow the pattern derived from the asset directory structure. Use the exact ID in the ",s.jsx(e.code,{children:"href"})," attribute."]}),`
`,s.jsx(e.h3,{id:"ghs0109",children:"GHS01–09"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Pictogram"}),s.jsx(e.th,{children:"Symbol ID"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS01 Explosive"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS02 Flammable"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"physical-hazards-pictograms-ghs02-flammable-ghs-pictogram-flamme"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS03 Oxidizing"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"physical-hazards-pictograms-ghs03-oxidizing-ghs-pictogram-rondflam"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS04 Compressed Gas"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"physical-hazards-pictograms-ghs04-compressedgas-ghs-pictogram-bottle"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS05 Corrosive"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"physical-hazards-pictograms-ghs05-corrosive-ghs-pictogram-acid"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS06 Toxic"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"health-hazards-pictograms-ghs06-toxic-ghs-pictogram-skull"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS07 Health Hazard"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"health-hazards-pictograms-ghs07-healthhazard-hazardoustoozonelayer-ghs-pictogram-exclam"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS08 Serious Health Hazard"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"health-hazards-pictograms-ghs08-serioushealthhazard-ghs-pictogram-silhouette"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"GHS09 Environmental Hazard"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"environmental-hazards-pictograms-ghs09-hazardoustotheenvironment-ghs-pictogram-pollu"})})]})]})]}),`
`,s.jsx(e.h3,{id:"transport-hazard-classes",children:"Transport hazard classes"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Pictogram"}),s.jsx(e.th,{children:"Symbol ID"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Divisions 1.1–1.3"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-class-1--explosives-adr-1"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 1.4"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-class-1--explosives-adr-1-4"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 1.5"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-class-1--explosives-adr-1-5"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 1.6"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-class-1--explosives-adr-1-6"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 2.1"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-class-2--gases-adr-2-1"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 2.2"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-class-2--gases-adr-2-2"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 2.3"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-class-2--gases-adr-2-3"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 3"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-classes-3-and-4--flammable-liquids-and-solids-adr-3"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 5.1"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-other-ghs-transport-classes-adr-5-1"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 5.2"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---5-2-(black)"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Division 6.1"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---6"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 8"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---8"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 6.2"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-non-ghs-transport-pictograms-adr-6-2"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 7"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-non-ghs-transport-pictograms-adr-7a"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Class 9"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"transport-pictograms-non-ghs-transport-pictograms-adr-9"})})]})]})]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,s.jsxs(e.p,{children:["The SVG sprite itself is presentational. Add ",s.jsx(e.code,{children:'role="img"'}),", ",s.jsx(e.code,{children:"aria-label"}),", and a ",s.jsx(e.code,{children:"<title>"})," child to each referencing ",s.jsx(e.code,{children:"<svg>"}),":"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<svg width="120" height="120"
     role="img"
     aria-label="GHS06 Toxic — skull and crossbones">
  <title>GHS06 Toxic</title>
  <desc>Acute toxicity symbol — skull and crossbones on diamond background.</desc>
  <use href="/assets/sprites/sprite.svg#health-hazards-pictograms-ghs06-toxic-ghs-pictogram-skull" />
</svg>
`})})]})}function b(r={}){const{wrapper:e}={...d(),...r.components};return e?s.jsx(e,{...r,children:s.jsx(t,{...r})}):t(r)}export{b as default};
