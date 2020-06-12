(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[15],{329:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),i=a.n(n),o=a(3),l=a(50),c=a.n(l),s=a(47),p=[{property:"width",description:"Set avatar width",default:"100px",type:"number | string",value:""},{property:"height",description:"Set avatar height",default:"120px",type:"number | string",value:""},{property:"borderType",description:"Set avatar border type",default:"",type:"string",value:"rounded | tile"},{property:"img",description:"Set avatar image",default:"",type:"base64 | string",value:""},{property:"icon",description:"Set avatar icon",default:"",type:"string",value:""},{property:"iconSize",description:"Set icon size",default:"",type:"string | number",value:""},{property:"iconColor",description:"Set icon color",default:"gray",type:"string",value:""},{property:"initials",description:"Set avatar initials",default:"",type:"string",value:""},{property:"initialsFontSize",description:"Set avatar initials font size",default:"",type:"string | number",value:""},{property:"lifted",description:"Elevate Avatar",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set avatar dark mode",default:"",type:"boolean",value:"true | false"},{property:"transparent",description:"Set avatar background transparent",default:"",type:"boolean",value:"true | false"},{property:"avatarRef",description:"Set a ref to component",default:"",type:"React.RefObject",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],m=["default","smooth","rounded","tile"],u=["image","icon","initials"];t.default=function(){var e=Object(n.useState)(u[0]),t=Object(r.a)(e,2),a=t[0],l=t[1],d=Object(n.useState)(m[1]),f=Object(r.a)(d,2),y=f[0],g=f[1],b=Object(n.useState)(!1),v=Object(r.a)(b,2),h=v[0],E=v[1];return i.a.createElement(o.W.Consumer,null,(function(e){return i.a.createElement(s.a,{apiDescItems:p,usage:"// Usage example\nimport React from 'react';\nimport { Avatar } from '../components';\nimport manImage from '/path/to/man.png';\n\nfunction Example() {\n    return (\n        <>\n            <Avatar\n                iconSize=\"90%\"\n                img={manImage}/>\n        </>\n    )\n}",componentName:"<Avatar/>"},i.a.createElement(o.K,{dark:e,items:m,prefix:i.a.createElement(o.z,{name:"shape"}),width:200,label:"Border type",color:"primary",value:y,onChange:function(e){return g(e)}}),i.a.createElement("br",null),i.a.createElement(o.Q,{color:"primary",check:h,className:"mt-10 mb-20",rightLabel:"Lifted",onChange:function(){return E(!h)}}),i.a.createElement("br",null),i.a.createElement(o.I,{options:u,value:a,name:"type",className:"mt-10",onChange:function(e){return l(e)}}),i.a.createElement(o.r,null),i.a.createElement("div",{className:"pa-10"},i.a.createElement(o.c,{height:100,dark:e,lifted:h,borderType:y,iconSize:"90%",img:"image"===a?c.a:null,icon:"icon"===a?"account":null,initials:"initials"===a?"AS":null})))}))}},47:function(e,t,a){"use strict";var r=a(2),n=a(0),i=a.n(n),o=a(3),l=a(346),c=a(289),s=a(290),p=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),m=Object(r.a)(a,2),u=(m[0],m[1]);return i.a.createElement(o.W.Consumer,null,(function(a){return i.a.createElement("div",{className:"rui-page",ref:t},i.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",i.a.createElement(o.o,{className:"ml-10",tooltipPosition:"right",defaultText:"Copy Component Tag",text:e.componentName,dark:a})),i.a.createElement(o.k,{dark:a,header:i.a.createElement(o.Z,{tooltip:"I am a <Tag/> component",position:"right"},i.a.createElement(o.U,{className:"mx-0 mb-10 mt-0",color:"secondary"},i.a.createElement(o.z,{size:18,className:"mr-4",name:"cog-outline"})," Usage"))},e.children,i.a.createElement(o.n,{className:"mt-10",extra:i.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return u(e)},customToggler:i.a.createElement(o.h,{className:"ml-20",name:"Code",icon:i.a.createElement(o.z,{name:"code",size:20}),color:"info"}),dark:a},i.a.createElement(l.a,{language:"jsx",style:a?c.a:s.a},e.usage))),e.backTopBtn?i.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,i.a.createElement(o.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&i.a.createElement(o.R,{tableTitle:i.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems,"property"),index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:p}),e.content),e.apiDescItems2&&i.a.createElement(o.k,{className:"mt-10"},e.apiDescItems2.length>0&&i.a.createElement(o.R,{tableTitle:i.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems2,"property"),index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:p}),e.content))}))}},50:function(e,t,a){e.exports=a.p+"static/media/man.e941ef11.png"}}]);