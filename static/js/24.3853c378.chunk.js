(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[24],{311:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),o=a.n(r),l=a(3),c=a(47),i=[{property:"options",description:"Button group options",default:"",type:"string[] | number[]",value:""},{property:"onChange",description:"Handle selection (return item and index)",default:"",type:"function",value:""},{property:"default",description:"Set default active item",default:"",type:"number",value:""},{property:"size",description:"Set buttons group size",default:"",type:"string",value:"medium | large"},{property:"icon",description:"Set group type to icon",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set buttons color",default:"",type:"string",value:"primary | info | success | error | secondary | black"},{property:"outlined",description:"Make buttons group background transparent and outline borders",default:"false",type:"boolean",value:"true | false"},{property:"lifted",description:"Lift up the button group",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],s=["KZ","RU","EN"],u=["format-align-left","format-align-center","format-align-right"],m=["primary","info","success","error","secondary","black"],p=["default","medium","large"];t.default=function(){var e=Object(r.useState)(m[0]),t=Object(n.a)(e,2),a=t[0],d=t[1],f=Object(r.useState)(p[0]),b=Object(n.a)(f,2),g=b[0],y=b[1],E=Object(r.useState)(!1),h=Object(n.a)(E,2),k=h[0],v=h[1],N=Object(r.useState)(!1),O=Object(n.a)(N,2),j=O[0],S=O[1],x=Object(r.useState)(!1),C=Object(n.a)(x,2),z=C[0],B=C[1];return o.a.createElement(l.U.Consumer,null,(function(e){return o.a.createElement(c.a,{usage:"// Usage examples\nimport React, { useState } from 'react';\nimport { ButtonGroup } from '@assenti/react-ui-components';\nconst icons = ['format-align-left', 'format-align-center', 'format-align-right'];\n\nfunction Example() {\n    const [option, setOption] = useState('');\n\n    return (\n        <>\n            <ButtonGroup \n                default={0} \n                onChange={(item, index) => setOption(item)}\n                options={icons} \n                color=\"primary\"/>\n        </>\n    )\n}",apiDescItems:i,componentName:"<ButtonGroup/>"},o.a.createElement(l.K,{items:p,dark:e,prefix:o.a.createElement(l.z,{name:"format-size"}),width:200,label:"Button size",color:"primary",value:g,onChange:function(e){return y(e)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.K,{items:m,dark:e,prefix:o.a.createElement(l.z,{name:"brush"}),width:200,label:"Button color",color:"primary",value:a,onChange:function(e){return d(e)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.P,{color:"primary",check:k,rightLabel:"Outlined",onChange:function(){return v(!k)}}),o.a.createElement(l.P,{color:"primary",check:j,rightLabel:"Icon",onChange:function(){return S(!j)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.P,{color:"primary",check:z,rightLabel:"Lifted",onChange:function(){return B(!z)}}),o.a.createElement(l.r,null),o.a.createElement("br",null),o.a.createElement("div",{className:"pa-10"},o.a.createElement(l.i,{default:0,options:j?u:s,color:a,size:g,icon:j,lifted:z,dark:e,outlined:k,className:"mr-10"})))}))}},47:function(e,t,a){"use strict";var n=a(2),r=a(0),o=a.n(r),l=a(3),c=a(344),i=a(291),s=a(292),u=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),m=Object(n.a)(a,2),p=(m[0],m[1]);return o.a.createElement(l.U.Consumer,null,(function(a){return o.a.createElement("div",{className:"rui-page",ref:t},o.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",o.a.createElement(l.o,{noTooltip:!0,className:"ml-10",text:e.componentName,dark:a})),o.a.createElement(l.k,{dark:a,header:o.a.createElement("div",{className:"row align-center pb-10"},o.a.createElement(l.z,{name:"bulb",size:18,color:"#42a5f5",className:"mr-8"}),o.a.createElement("h4",{className:"my-0 text-info"},"Usage"))},e.children,o.a.createElement(l.n,{className:"mt-10",extra:o.a.createElement(l.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return p(e)},customToggler:o.a.createElement(l.h,{className:"ml-20",name:"Code",icon:"code",color:"info"}),dark:a},o.a.createElement(c.a,{language:"jsx",style:a?i.a:s.a},e.usage))),e.backTopBtn?o.a.createElement(l.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,o.a.createElement(l.k,{className:"mt-10"},e.apiDescItems.length>0&&o.a.createElement(l.Q,{tableTitle:o.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:u}),e.content))}))}}}]);