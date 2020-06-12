(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[44],{333:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),o=t(47),l=t(346),s=t(289),m=t(290),i=t(3),p=["info","success","error"],u=["default","tile","rounded"];a.default=function(){var e=Object(r.useState)(""),a=Object(n.a)(e,2),t=a[0],d=a[1],b=Object(r.useState)(""),k=Object(n.a)(b,2),h=k[0],E=k[1],f=function(){i.fb.message("I am a Snackbar",{type:t,borderType:h,controls:c.a.createElement(i.h,{dark:!0,name:"CLOSE",onClick:function(){return i.fb.remove()}})})};return c.a.createElement(i.W.Consumer,null,(function(e){return c.a.createElement(o.a,{usage:"// Usage examples\nimport React from 'react';\nimport { Button, Snackbar, snackbar } from '@assenti/rui-components';\n\nfunction Example() {\n    const handleClick = () => {\n        snackbar.message('I am a Snackbar', \n            { \n                type: 'success', \n                borderType: 'rounded',\n                controls: <Button dark name=\"CLOSE\" onClick={() => snackbar.remove()}/> \n            })\n    }\n\n    return (\n        <>\n            <Snackbar/>\n            <br/>\n            <Button\n                className=\"mt-10 ml-0\"\n                onClick={handleClick} \n                name=\"Invoke snackbar\" \n                color=\"primary\"/>\n        </>\n    )\n}",apiDescItems:[],content:c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"API"),c.a.createElement(l.a,{language:"jsx",style:e?s.a:m.a},"snackbar {\n    message: function (message: string, options?: SnackbarOptions),\n    remove: function\n}\n\nSnackbarOptions {\n    type?: 'info' | 'success' | 'error',\n    borderType?: 'tile' | 'rounded',\n    dark?: boolean,\n    duration?: number, // default 5s\n    controls?: React.ReactNode\n}\n")),componentName:"<Snackbar/>"},c.a.createElement(i.O,null),c.a.createElement(i.K,{items:p,dark:e,prefix:c.a.createElement(i.z,{name:"brush"}),width:200,placeholder:"Choose type",label:"Type",color:"primary",className:"my-5",value:t,onChange:function(e){return d(e)}}),c.a.createElement("br",null),c.a.createElement(i.K,{items:u,dark:e,prefix:c.a.createElement(i.z,{name:"shape"}),width:200,placeholder:"Choose border type",label:"Border type",color:"primary",className:"my-5",value:h,onChange:function(e){return E(e)}}),c.a.createElement("br",null),c.a.createElement(i.h,{className:"mt-10 ml-0",onClick:f,name:"Invoke snackbar",color:"primary"}))}))}},47:function(e,a,t){"use strict";var n=t(2),r=t(0),c=t.n(r),o=t(3),l=t(346),s=t(289),m=t(290),i=["property","description","default","type","value"];a.a=function(e){var a=Object(r.useRef)(),t=Object(r.useState)(!1),p=Object(n.a)(t,2),u=(p[0],p[1]);return c.a.createElement(o.W.Consumer,null,(function(t){return c.a.createElement("div",{className:"rui-page",ref:a},c.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",c.a.createElement(o.o,{className:"ml-10",tooltipPosition:"right",defaultText:"Copy Component Tag",text:e.componentName,dark:t})),c.a.createElement(o.k,{dark:t,header:c.a.createElement(o.Z,{tooltip:"I am a <Tag/> component",position:"right"},c.a.createElement(o.U,{className:"mx-0 mb-10 mt-0",color:"secondary"},c.a.createElement(o.z,{size:18,className:"mr-4",name:"cog-outline"})," Usage"))},e.children,c.a.createElement(o.n,{className:"mt-10",extra:c.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:t}),onChange:function(e){return u(e)},customToggler:c.a.createElement(o.h,{className:"ml-20",name:"Code",icon:c.a.createElement(o.z,{name:"code",size:20}),color:"info"}),dark:t},c.a.createElement(l.a,{language:"jsx",style:t?s.a:m.a},e.usage))),e.backTopBtn?c.a.createElement(o.e,{dark:!0,setRef:a,size:"medium",tooltip:"Up"}):null,c.a.createElement(o.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&c.a.createElement(o.R,{tableTitle:c.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:t,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems,"property"),index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:i}),e.content),e.apiDescItems2&&c.a.createElement(o.k,{className:"mt-10"},e.apiDescItems2.length>0&&c.a.createElement(o.R,{tableTitle:c.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:t,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems2,"property"),index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:i}),e.content))}))}}}]);