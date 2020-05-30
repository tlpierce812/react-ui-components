(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[43],{332:function(e,a,n){"use strict";n.r(a);var t=n(2),r=n(0),c=n.n(r),l=n(47),o=n(344),s=n(291),m=n(292),i=n(3),u=["info","success","error"],p=["default","tile","rounded"];a.default=function(){var e=Object(r.useState)(""),a=Object(t.a)(e,2),n=a[0],d=a[1],b=Object(r.useState)(""),k=Object(t.a)(b,2),E=k[0],f=k[1],h=function(){i.cb.message("I am a Snackbar",{type:n,borderType:E,controls:c.a.createElement(i.h,{dark:!0,name:"CLOSE",onClick:function(){return i.cb.remove()}})})};return c.a.createElement(i.U.Consumer,null,(function(e){return c.a.createElement(l.a,{usage:"// Usage examples\nimport React from 'react';\nimport { Button, Snackbar, snackbar } from '@assenti/rui-components';\n\nfunction Example() {\n    const handleClick = () => {\n        snackbar.message('I am a Snackbar', \n            { \n                type: 'success', \n                borderType: 'rounded',\n                controls: <Button dark name=\"CLOSE\" onClick={() => snackbar.remove()}/> \n            })\n    }\n\n    return (\n        <>\n            <Snackbar/>\n            <br/>\n            <Button\n                className=\"mt-10 ml-0\"\n                onClick={handleClick} \n                name=\"Invoke snackbar\" \n                color=\"primary\"/>\n        </>\n    )\n}",apiDescItems:[],content:c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"API"),c.a.createElement(o.a,{language:"jsx",style:e?s.a:m.a},"snackbar {\n    message: function (message: string, options?: SnackbarOptions),\n    remove: function\n}\n\nSnackbarOptions {\n    type?: 'info' | 'success' | 'error',\n    borderType?: 'tile' | 'rounded',\n    dark?: boolean,\n    duration?: number, // default 5s\n    controls?: React.ReactNode\n}\n")),componentName:"<Snackbar/>"},c.a.createElement(i.N,null),c.a.createElement(i.K,{items:u,dark:e,prefix:c.a.createElement(i.z,{name:"brush"}),width:200,placeholder:"Choose type",label:"Type",color:"primary",className:"my-5",value:n,onChange:function(e){return d(e)}}),c.a.createElement("br",null),c.a.createElement(i.K,{items:p,dark:e,prefix:c.a.createElement(i.z,{name:"shape"}),width:200,placeholder:"Choose border type",label:"Border type",color:"primary",className:"my-5",value:E,onChange:function(e){return f(e)}}),c.a.createElement("br",null),c.a.createElement(i.h,{className:"mt-10 ml-0",onClick:h,name:"Invoke snackbar",color:"primary"}))}))}},47:function(e,a,n){"use strict";var t=n(2),r=n(0),c=n.n(r),l=n(3),o=n(344),s=n(291),m=n(292),i=["property","description","default","type","value"];a.a=function(e){var a=Object(r.useRef)(),n=Object(r.useState)(!1),u=Object(t.a)(n,2),p=(u[0],u[1]);return c.a.createElement(l.U.Consumer,null,(function(n){return c.a.createElement("div",{className:"rui-page",ref:a},c.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",c.a.createElement(l.o,{noTooltip:!0,className:"ml-10",text:e.componentName,dark:n})),c.a.createElement(l.k,{dark:n,header:c.a.createElement("div",{className:"row align-center pb-10"},c.a.createElement(l.z,{name:"bulb",size:18,color:"#42a5f5",className:"mr-8"}),c.a.createElement("h4",{className:"my-0 text-info"},"Usage"))},e.children,c.a.createElement(l.n,{className:"mt-10",extra:c.a.createElement(l.o,{defaultText:"Copy code",text:e.usage,dark:n}),onChange:function(e){return p(e)},customToggler:c.a.createElement(l.h,{className:"ml-20",name:"Code",icon:"code",color:"info"}),dark:n},c.a.createElement(o.a,{language:"jsx",style:n?s.a:m.a},e.usage))),e.backTopBtn?c.a.createElement(l.e,{dark:!0,setRef:a,size:"medium",tooltip:"Up"}):null,c.a.createElement(l.k,{className:"mt-10"},e.apiDescItems.length>0&&c.a.createElement(l.Q,{tableTitle:c.a.createElement("h2",null,"API"),dark:n,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:i}),e.content))}))}}}]);