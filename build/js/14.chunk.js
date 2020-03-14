(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[14],{313:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),i=n.n(a),o=n(3),s=n(321),c=n(273),l=["property","description","default","type","value"],m=[{property:"crumbs",description:"Pass items",default:"",type:"array",value:"return a button click event object"},{property:"itemKey",description:"Set item key if you pass array of objects",default:"",type:"string",value:""},{property:"urlKey",description:"Set url key if you pass array of objects",default:"",type:"string",value:""},{property:"icon",description:"Set icon key if you pass array of objects",default:"",type:"string",value:""},{property:"isActive",description:"Set active crumb (return item and index)",default:"",type:"function",value:"true | false"},{property:"onChange",description:"Invokes on crumb click (return item and index)",default:"",type:"function",value:""},{property:"color",description:"Set color",default:"info",type:"string",value:"primary | info | success | error | dark | secondary"},{property:"size",description:"Set breadcrumbs size",default:"",type:"string",value:"medium | large"},{property:"position",description:"Set breadcrumbs position",default:"left",type:"string",value:"center | right"},{property:"delimiter",description:"Set your custom delimiter",default:"/",type:"any",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u="// Usage examples\nimport React, { useState } from 'react';\nimport { Breadcrumbs, Switch, Select, Icon } from '@assenti/react-ui-components';\nconst sizes = ['default', 'medium', 'large'];\nconst colors = ['primary', 'info', 'success', 'error', 'dark', 'secondary'];\nconst positions = ['deafult', 'center', 'right'];\nconst crumbs = [\n    { item: 'Home', url: '#', icon: 'home' },\n    { item: 'Section', url: '#', icon: 'credit-card' },\n    { item: 'Module', url: '#', icon: 'help-circle-outline'}\n]\n\nfunction Example() {\n    const [size, setSize] = useState(sizes[0]);\n    const [color, setColor] = useState(colors[0]);\n    const [active, setActive] = useState(0);\n    const [position, setPosition] = useState(positions[0]);\n    const [icon, setIcon] = useState(false);\n\n    return (\n        <div>\n            <Select\n                items={sizes}\n                prefix={<Icon name=\"format-size\"/>}\n                width={200}\n                label=\"Breadcrumbs size\"\n                color=\"primary\"\n                className=\"my-10\"\n                value={size}\n                onChange={v => setSize(v)}/>\n            <br/>\n            <Select\n                items={colors}\n                prefix={<Icon name=\"brush\"/>}\n                width={200}\n                label=\"Breadcrumbs color\"\n                color=\"primary\"\n                className=\"my-10\"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Select\n                items={positions}\n                prefix={<Icon name=\"format-size\"/>}\n                width={200}\n                label=\"Breadcrumbs position\"\n                color=\"primary\"\n                className=\"my-10\"\n                value={position}\n                onChange={v => setPosition(v)}/>\n            <br/>\n            <Switch \n                check={icon} \n                color=\"primary\"\n                rightLabel=\"Icon\" \n                className=\"my-10\"\n                onChange={() => setIcon(!icon)}/>\n            <br/>\n            <div style={{ minHeight: 300, border: '1px solid lightgray' }} className=\"border\">\n                <div className=\"pa-10\">\n                    <Breadcrumbs\n                        size={size}\n                        color={color}\n                        position={position}\n                        itemKey=\"item\"\n                        urlKey=\"url\"\n                        icon={icon ? 'icon' : null}\n                        onChange={(item, index) => setActive(index)}\n                        isActive={(item, index) => index === active} \n                        crumbs={crumbs}/>\n                </div>\n                <h1 className=\"pa-10\">{crumbs[active].item}</h1>\n            </div>\n        </div>\n    )\n}",p=["default","medium","large"],d=["primary","info","success","error","dark","secondary"],y=["deafult","center","right"],b=[{item:"Home",url:"#",icon:"home"},{item:"Section",url:"#",icon:"credit-card"},{item:"Module",url:"#",icon:"help-circle-outline"}];t.default=function(){var e=Object(a.useState)(p[0]),t=Object(r.a)(e,2),n=t[0],f=t[1],v=Object(a.useState)(d[0]),h=Object(r.a)(v,2),g=h[0],S=h[1],E=Object(a.useState)(0),x=Object(r.a)(E,2),z=x[0],N=x[1],j=Object(a.useState)(y[0]),C=Object(r.a)(j,2),k=C[0],w=C[1],I=Object(a.useState)(!1),O=Object(r.a)(I,2),B=O[0],A=O[1];return i.a.createElement("div",{className:"rui-page"},i.a.createElement("div",{className:"rui-page-title"},"<Breadcrumbs/>"," Component"),i.a.createElement(o.j,{outlined:!0,title:"Usage"},i.a.createElement(o.E,{items:p,prefix:i.a.createElement(o.s,{name:"format-size"}),width:200,label:"Breadcrumbs size",color:"primary",className:"my-10",value:n,onChange:function(e){return f(e)}}),i.a.createElement("br",null),i.a.createElement(o.E,{items:d,prefix:i.a.createElement(o.s,{name:"brush"}),width:200,label:"Breadcrumbs color",color:"primary",className:"my-10",value:g,onChange:function(e){return S(e)}}),i.a.createElement("br",null),i.a.createElement(o.E,{items:y,prefix:i.a.createElement(o.s,{name:"book-open"}),width:200,label:"Breadcrumbs position",color:"primary",className:"my-10",value:k,onChange:function(e){return w(e)}}),i.a.createElement("br",null),i.a.createElement(o.F,{check:B,color:"primary",rightLabel:"Icon",className:"my-10",onChange:function(){return A(!B)}}),i.a.createElement("br",null),i.a.createElement("div",{style:{minHeight:300,border:"1px solid lightgray"},className:"border"},i.a.createElement("div",{className:"pa-10"},i.a.createElement(o.f,{size:n,color:g,position:k,itemKey:"item",urlKey:"url",icon:B?"icon":null,onChange:function(e,t){return N(t)},isActive:function(e,t){return t===z},crumbs:b})),i.a.createElement("h1",{className:"pa-10"},b[z].item)),i.a.createElement(o.l,{icon:"code",extra:i.a.createElement(o.m,{defaultText:"Copy code",text:u,className:"mr-10"}),iconSize:18,tooltip:"Show/Hide Code"},i.a.createElement(s.a,{language:"jsx",style:c.a},u))),i.a.createElement("h2",null,"API"),i.a.createElement(o.G,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:m,index:!0,itemTitles:l}))}}}]);