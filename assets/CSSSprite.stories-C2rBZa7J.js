import{j as a}from"./jsx-runtime-D_zvdyIk.js";const r=[{className:"ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos",svgPath:"physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg",label:"GHS01 Explosive",category:"ghs"},{className:"ghs-physical_hazards_pictograms_ghs02_flammable_ghs-pictogram-flamme",svgPath:"physical_hazards_pictograms/ghs02_flammable/GHS-pictogram-flamme.svg",label:"GHS02 Flammable",category:"ghs"},{className:"ghs-physical_hazards_pictograms_ghs03_oxidizing_ghs-pictogram-rondflam",svgPath:"physical_hazards_pictograms/ghs03_oxidizing/GHS-pictogram-rondflam.svg",label:"GHS03 Oxidizing",category:"ghs"},{className:"ghs-physical_hazards_pictograms_ghs04_compressedgas_ghs-pictogram-bottle",svgPath:"physical_hazards_pictograms/ghs04_compressedgas/GHS-pictogram-bottle.svg",label:"GHS04 Compressed Gas",category:"ghs"},{className:"ghs-physical_hazards_pictograms_ghs05_corrosive_ghs-pictogram-acid",svgPath:"physical_hazards_pictograms/ghs05_corrosive/GHS-pictogram-acid.svg",label:"GHS05 Corrosive",category:"ghs"},{className:"ghs-health_hazards_pictograms_ghs06_toxic_ghs-pictogram-skull",svgPath:"health_hazards_pictograms/ghs06_toxic/GHS-pictogram-skull.svg",label:"GHS06 Toxic",category:"ghs"},{className:"ghs-health_hazards_pictograms_ghs07_healthhazard_hazardoustoozonelayer_ghs-pictogram-exclam",svgPath:"health_hazards_pictograms/ghs07_healthhazard_hazardoustoozonelayer/GHS-pictogram-exclam.svg",label:"GHS07 Health Hazard",category:"ghs"},{className:"ghs-health_hazards_pictograms_ghs08_serioushealthhazard_ghs-pictogram-silhouette",svgPath:"health_hazards_pictograms/ghs08_serioushealthhazard/GHS-pictogram-silhouette.svg",label:"GHS08 Serious Health Hazard",category:"ghs"},{className:"ghs-environmental_hazards_pictograms_ghs09_hazardoustotheenvironment_ghs-pictogram-pollu",svgPath:"environmental_hazards_pictograms/ghs09_hazardoustotheenvironment/GHS-pictogram-pollu.svg",label:"GHS09 Environmental Hazard",category:"ghs"},{className:"ghs-transport_pictograms_class_1__explosives_adr_1",svgPath:"transport_pictograms/class_1__explosives/ADR_1.svg",label:"Divisions 1.1–1.3",category:"transport"},{className:"ghs-transport_pictograms_class_1__explosives_adr_1.4",svgPath:"transport_pictograms/class_1__explosives/ADR_1.4.svg",label:"Division 1.4",category:"transport"},{className:"ghs-transport_pictograms_class_1__explosives_adr_1.5",svgPath:"transport_pictograms/class_1__explosives/ADR_1.5.svg",label:"Division 1.5",category:"transport"},{className:"ghs-transport_pictograms_class_1__explosives_adr_1.6",svgPath:"transport_pictograms/class_1__explosives/ADR_1.6.svg",label:"Division 1.6",category:"transport"},{className:"ghs-transport_pictograms_class_2__gases_adr_2.1",svgPath:"transport_pictograms/class_2__gases/ADR_2.1.svg",label:"Division 2.1",category:"transport"},{className:"ghs-transport_pictograms_class_2__gases_adr_2.2",svgPath:"transport_pictograms/class_2__gases/ADR_2.2.svg",label:"Division 2.2",category:"transport"},{className:"ghs-transport_pictograms_class_2__gases_adr_2.3",svgPath:"transport_pictograms/class_2__gases/ADR_2.3.svg",label:"Division 2.3",category:"transport"},{className:"ghs-transport_pictograms_classes_3_and_4__flammable_liquids_and_solids_adr_3",svgPath:"transport_pictograms/classes_3_and_4__flammable_liquids_and_solids/ADR_3.svg",label:"Class 3",category:"transport"},{className:"ghs-transport_pictograms_other_ghs_transport_classes_adr_5.1",svgPath:"transport_pictograms/other_ghs_transport_classes/ADR_5.1.svg",label:"Division 5.1",category:"transport"},{className:"ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_5.2_(black)",svgPath:"transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_5.2_(black).svg",label:"Division 5.2",category:"transport"},{className:"ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_6",svgPath:"transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_6.svg",label:"Division 6.1",category:"transport"},{className:"ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_8",svgPath:"transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_8.svg",label:"Class 8",category:"transport"},{className:"ghs-transport_pictograms_non-ghs_transport_pictograms_adr_6.2",svgPath:"transport_pictograms/non-ghs_transport_pictograms/ADR_6.2.svg",label:"Class 6.2",category:"transport"},{className:"ghs-transport_pictograms_non-ghs_transport_pictograms_adr_7a",svgPath:"transport_pictograms/non-ghs_transport_pictograms/ADR_7A.svg",label:"Class 7",category:"transport"},{className:"ghs-transport_pictograms_non-ghs_transport_pictograms_adr_9",svgPath:"transport_pictograms/non-ghs_transport_pictograms/ADR_9.svg",label:"Class 9",category:"transport"}],T=r.filter(s=>s.category==="ghs"),j=r.filter(s=>s.category==="transport"),k=s=>s.replace(/[.()\[\]]/g,t=>`\\${t}`),E=({items:s,size:t})=>{const i=s.map(({className:C,svgPath:f})=>`.${k(C)} { background-image: url('/ghs-hazard-pictograms/assets/${f}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`).join(`
`),_=`.ghs-icon { display: inline-block; width: ${t}px; height: ${t}px; }`;return a.jsx("style",{children:`${i}
${_}`})},o=({size:s=120,items:t=r})=>a.jsxs(a.Fragment,{children:[a.jsx(E,{items:t,size:s}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"1.5rem",padding:"1rem"},children:t.map(({className:i,label:_})=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{className:`ghs-icon ${i}`,role:"img","aria-label":_,title:_}),a.jsx("span",{style:{fontSize:"0.75rem",textAlign:"center",color:"#555"},children:_})]},i))})]}),O={title:"GHS Pictograms/CSS Sprite",component:o,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:32,max:512,step:8}}}},e={name:"GHS01–09 All",render:({size:s})=>a.jsx(o,{size:s,items:T}),args:{size:120}},g={name:"Transport All",render:({size:s})=>a.jsx(o,{size:s,items:j}),args:{size:120}},n={render:({size:s})=>a.jsx(o,{size:s,items:r}),args:{size:120}},l={name:"All Large",render:({size:s})=>a.jsx(o,{size:s,items:r}),args:{size:200}},c={name:"All Small",render:({size:s})=>a.jsx(o,{size:s,items:r}),args:{size:64}};var p,h,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`[
// GHS01–09
{
  className: 'ghs-physical_hazards_pictograms_ghs01_explosive_ghs-pictogram-explos',
  svgPath: 'physical_hazards_pictograms/ghs01_explosive/GHS-pictogram-explos.svg',
  label: 'GHS01 Explosive',
  category: 'ghs'
}, {
  className: 'ghs-physical_hazards_pictograms_ghs02_flammable_ghs-pictogram-flamme',
  svgPath: 'physical_hazards_pictograms/ghs02_flammable/GHS-pictogram-flamme.svg',
  label: 'GHS02 Flammable',
  category: 'ghs'
}, {
  className: 'ghs-physical_hazards_pictograms_ghs03_oxidizing_ghs-pictogram-rondflam',
  svgPath: 'physical_hazards_pictograms/ghs03_oxidizing/GHS-pictogram-rondflam.svg',
  label: 'GHS03 Oxidizing',
  category: 'ghs'
}, {
  className: 'ghs-physical_hazards_pictograms_ghs04_compressedgas_ghs-pictogram-bottle',
  svgPath: 'physical_hazards_pictograms/ghs04_compressedgas/GHS-pictogram-bottle.svg',
  label: 'GHS04 Compressed Gas',
  category: 'ghs'
}, {
  className: 'ghs-physical_hazards_pictograms_ghs05_corrosive_ghs-pictogram-acid',
  svgPath: 'physical_hazards_pictograms/ghs05_corrosive/GHS-pictogram-acid.svg',
  label: 'GHS05 Corrosive',
  category: 'ghs'
}, {
  className: 'ghs-health_hazards_pictograms_ghs06_toxic_ghs-pictogram-skull',
  svgPath: 'health_hazards_pictograms/ghs06_toxic/GHS-pictogram-skull.svg',
  label: 'GHS06 Toxic',
  category: 'ghs'
}, {
  className: 'ghs-health_hazards_pictograms_ghs07_healthhazard_hazardoustoozonelayer_ghs-pictogram-exclam',
  svgPath: 'health_hazards_pictograms/ghs07_healthhazard_hazardoustoozonelayer/GHS-pictogram-exclam.svg',
  label: 'GHS07 Health Hazard',
  category: 'ghs'
}, {
  className: 'ghs-health_hazards_pictograms_ghs08_serioushealthhazard_ghs-pictogram-silhouette',
  svgPath: 'health_hazards_pictograms/ghs08_serioushealthhazard/GHS-pictogram-silhouette.svg',
  label: 'GHS08 Serious Health Hazard',
  category: 'ghs'
}, {
  className: 'ghs-environmental_hazards_pictograms_ghs09_hazardoustotheenvironment_ghs-pictogram-pollu',
  svgPath: 'environmental_hazards_pictograms/ghs09_hazardoustotheenvironment/GHS-pictogram-pollu.svg',
  label: 'GHS09 Environmental Hazard',
  category: 'ghs'
},
// Transport hazard classes
{
  className: 'ghs-transport_pictograms_class_1__explosives_adr_1',
  svgPath: 'transport_pictograms/class_1__explosives/ADR_1.svg',
  label: 'Divisions 1.1–1.3',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_class_1__explosives_adr_1.4',
  svgPath: 'transport_pictograms/class_1__explosives/ADR_1.4.svg',
  label: 'Division 1.4',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_class_1__explosives_adr_1.5',
  svgPath: 'transport_pictograms/class_1__explosives/ADR_1.5.svg',
  label: 'Division 1.5',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_class_1__explosives_adr_1.6',
  svgPath: 'transport_pictograms/class_1__explosives/ADR_1.6.svg',
  label: 'Division 1.6',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_class_2__gases_adr_2.1',
  svgPath: 'transport_pictograms/class_2__gases/ADR_2.1.svg',
  label: 'Division 2.1',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_class_2__gases_adr_2.2',
  svgPath: 'transport_pictograms/class_2__gases/ADR_2.2.svg',
  label: 'Division 2.2',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_class_2__gases_adr_2.3',
  svgPath: 'transport_pictograms/class_2__gases/ADR_2.3.svg',
  label: 'Division 2.3',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_classes_3_and_4__flammable_liquids_and_solids_adr_3',
  svgPath: 'transport_pictograms/classes_3_and_4__flammable_liquids_and_solids/ADR_3.svg',
  label: 'Class 3',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_other_ghs_transport_classes_adr_5.1',
  svgPath: 'transport_pictograms/other_ghs_transport_classes/ADR_5.1.svg',
  label: 'Division 5.1',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_5.2_(black)',
  svgPath: 'transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_5.2_(black).svg',
  label: 'Division 5.2',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_6',
  svgPath: 'transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_6.svg',
  label: 'Division 6.1',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_other_ghs_transport_classes_un_transport_pictogram_-_8',
  svgPath: 'transport_pictograms/other_ghs_transport_classes/UN_transport_pictogram_-_8.svg',
  label: 'Class 8',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_non-ghs_transport_pictograms_adr_6.2',
  svgPath: 'transport_pictograms/non-ghs_transport_pictograms/ADR_6.2.svg',
  label: 'Class 6.2',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_non-ghs_transport_pictograms_adr_7a',
  svgPath: 'transport_pictograms/non-ghs_transport_pictograms/ADR_7A.svg',
  label: 'Class 7',
  category: 'transport'
}, {
  className: 'ghs-transport_pictograms_non-ghs_transport_pictograms_adr_9',
  svgPath: 'transport_pictograms/non-ghs_transport_pictograms/ADR_9.svg',
  label: 'Class 9',
  category: 'transport'
}]`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var d,v,z;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'GHS01–09 All',
  render: ({
    size
  }) => <CSSGrid size={size} items={GHS_ONLY} />,
  args: {
    size: 120
  }
}`,...(z=(v=e.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var S,y,b;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Transport All',
  render: ({
    size
  }) => <CSSGrid size={size} items={TRANSPORT_ONLY} />,
  args: {
    size: 120
  }
}`,...(b=(y=g.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var u,x,N;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    size
  }) => <CSSGrid size={size} items={CSS_ITEMS} />,
  args: {
    size: 120
  }
}`,...(N=(x=n.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var H,P,G;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'All Large',
  render: ({
    size
  }) => <CSSGrid size={size} items={CSS_ITEMS} />,
  args: {
    size: 200
  }
}`,...(G=(P=l.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var D,A,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'All Small',
  render: ({
    size
  }) => <CSSGrid size={size} items={CSS_ITEMS} />,
  args: {
    size: 64
  }
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const $=["CSS_ITEMS","AllGHS","AllTransport","AllPictograms","Large","Small"],I=Object.freeze(Object.defineProperty({__proto__:null,AllGHS:e,AllPictograms:n,AllTransport:g,CSS_ITEMS:r,Large:l,Small:c,__namedExportsOrder:$,default:O},Symbol.toStringTag,{value:"Module"}));export{e as A,I as C,g as a,n as b};
