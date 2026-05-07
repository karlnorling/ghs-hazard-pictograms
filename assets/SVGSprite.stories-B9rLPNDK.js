import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DzyBcfCj.js";const I=()=>{const[s,t]=d.useState("");return d.useEffect(()=>{fetch("/assets/sprites/sprite.svg").then(e=>e.text()).then(t).catch(()=>{})},[]),s?r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",width:0,height:0,overflow:"hidden"},dangerouslySetInnerHTML:{__html:s}}):null},M=({id:s,label:t,size:e=120})=>r.jsxs("svg",{width:e,height:e,role:"img","aria-label":t,style:{display:"block"},children:[r.jsx("title",{children:t}),r.jsx("use",{href:`#${s}`})]}),a=[{id:"physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos",label:"GHS01 Explosive",category:"ghs"},{id:"physical-hazards-pictograms-ghs02-flammable-ghs-pictogram-flamme",label:"GHS02 Flammable",category:"ghs"},{id:"physical-hazards-pictograms-ghs03-oxidizing-ghs-pictogram-rondflam",label:"GHS03 Oxidizing",category:"ghs"},{id:"physical-hazards-pictograms-ghs04-compressedgas-ghs-pictogram-bottle",label:"GHS04 Compressed Gas",category:"ghs"},{id:"physical-hazards-pictograms-ghs05-corrosive-ghs-pictogram-acid",label:"GHS05 Corrosive",category:"ghs"},{id:"health-hazards-pictograms-ghs06-toxic-ghs-pictogram-skull",label:"GHS06 Toxic",category:"ghs"},{id:"health-hazards-pictograms-ghs07-healthhazard-hazardoustoozonelayer-ghs-pictogram-exclam",label:"GHS07 Health Hazard",category:"ghs"},{id:"health-hazards-pictograms-ghs08-serioushealthhazard-ghs-pictogram-silhouette",label:"GHS08 Serious Health Hazard",category:"ghs"},{id:"environmental-hazards-pictograms-ghs09-hazardoustotheenvironment-ghs-pictogram-pollu",label:"GHS09 Environmental Hazard",category:"ghs"},{id:"transport-pictograms-class-1--explosives-adr-1",label:"Divisions 1.1–1.3",category:"transport"},{id:"transport-pictograms-class-1--explosives-adr-1-4",label:"Division 1.4",category:"transport"},{id:"transport-pictograms-class-1--explosives-adr-1-5",label:"Division 1.5",category:"transport"},{id:"transport-pictograms-class-1--explosives-adr-1-6",label:"Division 1.6",category:"transport"},{id:"transport-pictograms-class-2--gases-adr-2-1",label:"Division 2.1",category:"transport"},{id:"transport-pictograms-class-2--gases-adr-2-2",label:"Division 2.2",category:"transport"},{id:"transport-pictograms-class-2--gases-adr-2-3",label:"Division 2.3",category:"transport"},{id:"transport-pictograms-classes-3-and-4--flammable-liquids-and-solids-adr-3",label:"Class 3",category:"transport"},{id:"transport-pictograms-other-ghs-transport-classes-adr-5-1",label:"Division 5.1",category:"transport"},{id:"transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---5-2-(black)",label:"Division 5.2",category:"transport"},{id:"transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---6",label:"Division 6.1",category:"transport"},{id:"transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---8",label:"Class 8",category:"transport"},{id:"transport-pictograms-non-ghs-transport-pictograms-adr-6-2",label:"Class 6.2",category:"transport"},{id:"transport-pictograms-non-ghs-transport-pictograms-adr-7a",label:"Class 7",category:"transport"},{id:"transport-pictograms-non-ghs-transport-pictograms-adr-9",label:"Class 9",category:"transport"}],B=a.filter(s=>s.category==="ghs"),N=a.filter(s=>s.category==="transport"),o=({size:s=120,symbols:t=a})=>r.jsxs(r.Fragment,{children:[r.jsx(I,{}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"1.5rem",padding:"1rem"},children:t.map(({id:e,label:m})=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[r.jsx(M,{id:e,label:m,size:s}),r.jsx("span",{style:{fontSize:"0.75rem",textAlign:"center",color:"#555"},children:m})]},e))})]}),P=({id:s,label:t,size:e})=>r.jsxs(r.Fragment,{children:[r.jsx(I,{}),r.jsx(M,{id:s,label:t,size:e})]}),k={title:"GHS Pictograms/SVG Sprite",component:o,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:32,max:512,step:8}}}},n={name:"GHS01–09 All",render:({size:s})=>r.jsx(o,{size:s,symbols:B}),args:{size:120}},i={name:"Transport All",render:({size:s})=>r.jsx(o,{size:s,symbols:N}),args:{size:120}},l={name:"All Pictograms",render:({size:s})=>r.jsx(o,{size:s,symbols:a}),args:{size:120}},p={name:"All Large",render:({size:s})=>r.jsx(o,{size:s,symbols:a}),args:{size:200}},c={name:"All Small",render:({size:s})=>r.jsx(o,{size:s,symbols:a}),args:{size:64}},g={parameters:{layout:"centered"},render:s=>r.jsx(P,{...s}),args:{id:"physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos",label:"GHS01 Explosive",size:200},argTypes:{id:{control:"select",options:a.map(s=>s.id),labels:Object.fromEntries(a.map(s=>[s.id,s.label])),description:"Symbol ID from sprite.svg"},label:{control:"text",description:"Accessible label"},size:{control:{type:"number",min:32,max:512,step:8}}}};var h,y,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`[
// GHS01–09
{
  id: 'physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos',
  label: 'GHS01 Explosive',
  category: 'ghs'
}, {
  id: 'physical-hazards-pictograms-ghs02-flammable-ghs-pictogram-flamme',
  label: 'GHS02 Flammable',
  category: 'ghs'
}, {
  id: 'physical-hazards-pictograms-ghs03-oxidizing-ghs-pictogram-rondflam',
  label: 'GHS03 Oxidizing',
  category: 'ghs'
}, {
  id: 'physical-hazards-pictograms-ghs04-compressedgas-ghs-pictogram-bottle',
  label: 'GHS04 Compressed Gas',
  category: 'ghs'
}, {
  id: 'physical-hazards-pictograms-ghs05-corrosive-ghs-pictogram-acid',
  label: 'GHS05 Corrosive',
  category: 'ghs'
}, {
  id: 'health-hazards-pictograms-ghs06-toxic-ghs-pictogram-skull',
  label: 'GHS06 Toxic',
  category: 'ghs'
}, {
  id: 'health-hazards-pictograms-ghs07-healthhazard-hazardoustoozonelayer-ghs-pictogram-exclam',
  label: 'GHS07 Health Hazard',
  category: 'ghs'
}, {
  id: 'health-hazards-pictograms-ghs08-serioushealthhazard-ghs-pictogram-silhouette',
  label: 'GHS08 Serious Health Hazard',
  category: 'ghs'
}, {
  id: 'environmental-hazards-pictograms-ghs09-hazardoustotheenvironment-ghs-pictogram-pollu',
  label: 'GHS09 Environmental Hazard',
  category: 'ghs'
},
// Transport hazard classes
{
  id: 'transport-pictograms-class-1--explosives-adr-1',
  label: 'Divisions 1.1–1.3',
  category: 'transport'
}, {
  id: 'transport-pictograms-class-1--explosives-adr-1-4',
  label: 'Division 1.4',
  category: 'transport'
}, {
  id: 'transport-pictograms-class-1--explosives-adr-1-5',
  label: 'Division 1.5',
  category: 'transport'
}, {
  id: 'transport-pictograms-class-1--explosives-adr-1-6',
  label: 'Division 1.6',
  category: 'transport'
}, {
  id: 'transport-pictograms-class-2--gases-adr-2-1',
  label: 'Division 2.1',
  category: 'transport'
}, {
  id: 'transport-pictograms-class-2--gases-adr-2-2',
  label: 'Division 2.2',
  category: 'transport'
}, {
  id: 'transport-pictograms-class-2--gases-adr-2-3',
  label: 'Division 2.3',
  category: 'transport'
}, {
  id: 'transport-pictograms-classes-3-and-4--flammable-liquids-and-solids-adr-3',
  label: 'Class 3',
  category: 'transport'
}, {
  id: 'transport-pictograms-other-ghs-transport-classes-adr-5-1',
  label: 'Division 5.1',
  category: 'transport'
}, {
  id: 'transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---5-2-(black)',
  label: 'Division 5.2',
  category: 'transport'
}, {
  id: 'transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---6',
  label: 'Division 6.1',
  category: 'transport'
}, {
  id: 'transport-pictograms-other-ghs-transport-classes-un-transport-pictogram---8',
  label: 'Class 8',
  category: 'transport'
}, {
  id: 'transport-pictograms-non-ghs-transport-pictograms-adr-6-2',
  label: 'Class 6.2',
  category: 'transport'
}, {
  id: 'transport-pictograms-non-ghs-transport-pictograms-adr-7a',
  label: 'Class 7',
  category: 'transport'
}, {
  id: 'transport-pictograms-non-ghs-transport-pictograms-adr-9',
  label: 'Class 9',
  category: 'transport'
}]`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,z,u;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'GHS01–09 All',
  render: ({
    size
  }) => <SpriteGrid size={size} symbols={GHS_ONLY} />,
  args: {
    size: 120
  }
}`,...(u=(z=n.parameters)==null?void 0:z.docs)==null?void 0:u.source}}};var x,v,H;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Transport All',
  render: ({
    size
  }) => <SpriteGrid size={size} symbols={TRANSPORT_ONLY} />,
  args: {
    size: 120
  }
}`,...(H=(v=i.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var G,f,j;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'All Pictograms',
  render: ({
    size
  }) => <SpriteGrid size={size} symbols={GHS_SYMBOLS} />,
  args: {
    size: 120
  }
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var D,A,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'All Large',
  render: ({
    size
  }) => <SpriteGrid size={size} symbols={GHS_SYMBOLS} />,
  args: {
    size: 200
  }
}`,...(O=(A=p.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var _,T,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'All Small',
  render: ({
    size
  }) => <SpriteGrid size={size} symbols={GHS_SYMBOLS} />,
  args: {
    size: 64
  }
}`,...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var C,E,Y;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <SingleSpriteIcon {...args} />,
  args: {
    id: 'physical-hazards-pictograms-ghs01-explosive-ghs-pictogram-explos',
    label: 'GHS01 Explosive',
    size: 200
  },
  argTypes: {
    id: {
      control: 'select',
      options: GHS_SYMBOLS.map(s => s.id),
      labels: Object.fromEntries(GHS_SYMBOLS.map(s => [s.id, s.label])),
      description: 'Symbol ID from sprite.svg'
    },
    label: {
      control: 'text',
      description: 'Accessible label'
    },
    size: {
      control: {
        type: 'number',
        min: 32,
        max: 512,
        step: 8
      }
    }
  }
}`,...(Y=(E=g.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};const R=["GHS_SYMBOLS","AllGHS","AllTransport","AllSymbols","Large","Small","SingleIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,AllGHS:n,AllSymbols:l,AllTransport:i,GHS_SYMBOLS:a,Large:p,SingleIcon:g,Small:c,__namedExportsOrder:R,default:k},Symbol.toStringTag,{value:"Module"}));export{n as A,q as S,i as a,l as b,g as c};
