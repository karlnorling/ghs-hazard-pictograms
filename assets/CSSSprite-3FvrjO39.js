import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{u as i,M as c,C as r}from"./blocks-fDNENPri.js";import{C as o,A as t,a as l,b as h}from"./CSSSprite.stories-C2rBZa7J.js";import"./iframe-CSWschvY.js";import"./index-Duoz8m2c.js";function n(a){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...i(),...a.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{of:o}),`
`,s.jsx(e.h1,{id:"css-sprite",children:"CSS Sprite"}),`
`,s.jsxs(e.p,{children:["Import ",s.jsx(e.code,{children:"sprite.css"})," to get a set of ",s.jsx(e.code,{children:".ghs-*"})," utility classes. Apply a class to any block element and size it with ",s.jsx(e.code,{children:"width"})," / ",s.jsx(e.code,{children:"height"})," — no JavaScript required."]}),`
`,s.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-sh",children:`npm install @ghs-hazard-pictograms/css
`})}),`
`,s.jsx(e.h2,{id:"setup",children:"Setup"}),`
`,s.jsx(e.p,{children:"Import the stylesheet once in your entry point:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-js",children:`// JavaScript / TypeScript entry point
import '@ghs-hazard-pictograms/css/sprite.css';
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-css",children:`/* Or from a CSS file */
@import '@ghs-hazard-pictograms/css/sprite.css';
`})}),`
`,s.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,s.jsx(e.p,{children:"Apply the generated class to any element with explicit dimensions:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<!-- HTML -->
<span
  class="ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos"
  style="display:inline-block; width:120px; height:120px"
  role="img"
  aria-label="GHS01 Explosive"
  title="GHS01 Explosive"
></span>
`})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`{/* React / JSX */}
<span
  className="ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos"
  style={{ display: 'inline-block', width: 120, height: 120 }}
  role="img"
  aria-label="GHS01 Explosive"
  title="GHS01 Explosive"
/>
`})}),`
`,s.jsx(e.h3,{id:"css-helper-optional",children:"CSS helper (optional)"}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"@ghs-hazard-pictograms/css"})," package exports a helper to look up class names programmatically:"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-ts",children:`import { getCssClassName } from '@ghs-hazard-pictograms/css';

const cls = getCssClassName('ghs01-explosive');
// → 'ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos'

element.className = \`\${cls} my-icon\`;
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"generated-css-pattern",children:"Generated CSS pattern"}),`
`,s.jsx(e.p,{children:"Each pictogram generates one rule referencing the SVG from the assets package:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-css",children:`.ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos {
  background-image: url('../assets/assets/physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"ghs0109-pictograms",children:"GHS01–09 Pictograms"}),`
`,s.jsx(r,{of:t}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"transport-pictograms",children:"Transport Pictograms"}),`
`,s.jsx(r,{of:l}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"all-pictograms",children:"All Pictograms"}),`
`,s.jsx(r,{of:h}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"class-name-reference",children:"Class name reference"}),`
`,s.jsx(e.h3,{id:"ghs0109",children:"GHS01–09"}),`
`,s.jsxs(e.p,{children:[`| Pictogram | CSS class name |
| --------- | -------------- |
| GHS01 Explosive | `,s.jsx(e.code,{children:"ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos"}),` |
| GHS02 Flammable | `,s.jsx(e.code,{children:"ghs-physical_hazards_pictograms_ghs02_flammable_ghs-pictogram-flamme"}),` |
| GHS03 Oxidizing | `,s.jsx(e.code,{children:"ghs-physical_hazards_pictograms_ghs03_oxidizing_ghs-pictogram-rondflam"}),` |
| GHS04 Compressed Gas | `,s.jsx(e.code,{children:"ghs-physical_hazards_pictograms_ghs04_compressedgas_ghs-pictogram-bottle"}),` |
| GHS05 Corrosive | `,s.jsx(e.code,{children:"ghs-physical_hazards_pictograms_ghs05_corrosive_ghs-pictogram-acid"}),` |
| GHS06 Toxic | `,s.jsx(e.code,{children:"ghs-health_hazards_pictograms_ghs06_toxic_ghs-pictogram-skull"}),` |
| GHS07 Health Hazard | `,s.jsx(e.code,{children:"ghs-health_hazards_pictograms_ghs07_healthhazard_hazardoustoozonelayer_ghs-pictogram-exclam"}),` |
| GHS08 Serious Health Hazard | `,s.jsx(e.code,{children:"ghs-health_hazards_pictograms_ghs08_serioushealthhazard_ghs-pictogram-silhouette"}),` |
| GHS09 Environmental Hazard | `,s.jsx(e.code,{children:"ghs-environmental_hazards_pictograms_ghs09_hazardoustotheenvironment_ghs-pictogram-pollu"})," |"]}),`
`,s.jsx(e.h3,{id:"transport-hazard-classes",children:"Transport hazard classes"}),`
`,s.jsxs(e.p,{children:[`| Pictogram | CSS class name |
| --------- | -------------- |
| Divisions 1.1–1.3 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_class_1__explosives_adr_1"}),` |
| Division 1.4 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_class_1__explosives_adr_1.4"}),` |
| Division 1.5 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_class_1__explosives_adr_1.5"}),` |
| Division 1.6 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_class_1__explosives_adr_1.6"}),` |
| Division 2.1 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_class_2__gases_adr_2.1"}),` |
| Division 2.2 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_class_2__gases_adr_2.2"}),` |
| Division 2.3 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_class_2__gases_adr_2.3"}),` |
| Class 3 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_classes_3_and_4__flammable_liquids_and_solids_adr_3"}),` |
| Division 5.1 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_other_ghs_transport_classes_adr_5.1"}),` |
| Division 5.2 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_5.2_(black)"}),` |
| Division 6.1 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_6"}),` |
| Class 8 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_8"}),` |
| Class 6.2 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_non-ghs_transport_pictograms_adr_6.2"}),` |
| Class 7 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_non-ghs_transport_pictograms_adr_7a"}),` |
| Class 9 | `,s.jsx(e.code,{children:"ghs-transport_pictograms_non-ghs_transport_pictograms_adr_9"})," |"]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Note:"})," Transport class names with ",s.jsx(e.code,{children:"."})," or ",s.jsx(e.code,{children:"("})," characters must be escaped in CSS selectors as ",s.jsx(e.code,{children:"\\."})," and ",s.jsx(e.code,{children:"\\("}),". In HTML class attributes no escaping is needed."]}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,s.jsxs(e.p,{children:["CSS background-images are not exposed to the accessibility tree. Always pair the element with ",s.jsx(e.code,{children:'role="img"'})," and an ",s.jsx(e.code,{children:"aria-label"})," (or ",s.jsx(e.code,{children:"title"}),"):"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<span
  class="ghs-physical_hazards_pictograms_ghs06_toxic_ghs-pictogram-skull"
  style="display:inline-block; width:80px; height:80px"
  role="img"
  aria-label="GHS06 Toxic — acute toxicity"
  title="GHS06 Toxic"
></span>
`})})]})}function x(a={}){const{wrapper:e}={...i(),...a.components};return e?s.jsx(e,{...a,children:s.jsx(n,{...a})}):n(a)}export{x as default};
