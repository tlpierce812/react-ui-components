(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[25],{331:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),l=a.n(r),o=a(3),i=a(47),s=[{property:"locale",description:"Set locale (English, Kazakh, Russian, French. i18n in process)",default:"en",type:"string",value:"en | kz | ru | fr"},{property:"events",description:"Set events",default:"",type:"array[{ date, items: [{title?, event, color?}] }]",value:""},{property:"holidays",description:"Set holidays",default:"",type:"array[{ date }]",value:""},{property:"onDate",description:"Invokes on date click (return Date object)",default:"",type:"function",value:""},{property:"active",description:"Chosen date value (original Date value)",default:"",type:"string",value:""},{property:"hideWeekend",description:"If flag is set, weekend highlighting disabled",default:"false",type:"boolean",value:"true | false"},{property:"hideCurrentDay",description:"If flag is set, today highlighting disabled",default:"false",type:"boolean",value:"true | false"},{property:"disabledDates",description:"Pass array of dates that not available for pick",default:"",type:"Date[]",value:""},{property:"minDate",description:"Set minimum endable date for pick",default:"",type:"Date",value:""},{property:"maxDate",description:"Set maximum endable date for pick",default:"",type:"Date",value:""},{property:"color",description:"Set Calendar color theme",default:"",type:"string",value:"primary | info | success | error | dark"},{property:"selectBorderType",description:"Set years select borders type",default:"",type:"string",value:"tile | smooth | rounded"},{property:"size",description:"Set Calendar size",default:"",type:"string",value:"medium | large"},{property:"limit",description:"Set years limit that should be enabled",default:"15",type:"number",value:""},{property:"onlyPast",description:"If flag is set, only past years enabled",default:"false",type:"boolean",value:"true | false"},{property:"weekStartsSunday",description:"If flag is set, week starts from Sunday",default:"false",type:"boolean",value:"true | false"},{property:"shortWeekName",description:"Set short week name",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"width",description:"Set width",default:"100%",type:"number | string",value:""},{property:"popOverTrigger",description:"Set event popover invoking mode",default:"hover",type:"string",value:"hover | click"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],c=["primary","info","success","error","black"],u=["default","medium","large"],d=["en","kz","ru","fr"],p=["default","tile","rounded","smooth"],m=[{date:new Date(2020,2,8),items:[{title:"Event",event:"International Women Day",color:"#9C27B0"},{title:"Event",event:"Congratulate my women",color:"#9C27B0"}]},{date:new Date(2020,2,22),items:[{title:"Event",event:"Nauryz Meiramy Holiday",color:"#9C27B0"}]}],y=[{date:new Date(2020,2,8)},{date:new Date(2020,2,9)},{date:new Date(2020,2,22)},{date:new Date(2020,2,23)}];t.default=function(){var e=Object(r.useState)(c[0]),t=Object(n.a)(e,2),a=t[0],f=t[1],h=Object(r.useState)(u[0]),b=Object(n.a)(h,2),v=b[0],g=b[1],k=Object(r.useState)(d[0]),E=Object(n.a)(k,2),D=E[0],S=E[1],w=Object(r.useState)(15),C=Object(n.a)(w,2),O=C[0],j=C[1],x=Object(r.useState)(!0),z=Object(n.a)(x,2),N=z[0],T=z[1],I=Object(r.useState)(!1),B=Object(n.a)(I,2),W=B[0],P=B[1],K=Object(r.useState)(!1),L=Object(n.a)(K,2),H=L[0],R=L[1],U=Object(r.useState)(!1),A=Object(n.a)(U,2),F=A[0],J=A[1],M=Object(r.useState)(!1),V=Object(n.a)(M,2),Y=V[0],q=V[1],G=Object(r.useState)(p[0]),Q=Object(n.a)(G,2),X=Q[0],Z=Q[1],$=Object(r.useState)(""),_=Object(n.a)($,2),ee=_[0],te=_[1];return l.a.createElement(o.T.Consumer,null,(function(e){return l.a.createElement(i.a,{usage:"// Usage example\nimport React, { useState } from 'react';\nimport { Calendar } from '@assenti/rui-components';\n\nconst events = [\n    { \n        date: new Date(2020,2,8), \n        items: [\n            { title: 'Event', event: 'International Women Day', color: '#9C27B0' },\n            { title: 'Event', event: 'Congratulate my women', color: '#9C27B0' }\n\n        ]\n    },\n    { \n        date: new Date(2020,2,22), \n        items: [\n            { title: 'Event', event: 'Nauryz Meiramy Holiday', color: '#9C27B0' }\n        ]\n    }\n]\n\nconst holidays = [\n    { date: new Date(2020,2,8) },\n    { date: new Date(2020,2,9) },\n    { date: new Date(2020,2,22) },\n    { date: new Date(2020,2,23) }\n]\n\nfunction Example() {\n    const [date, setDate] = useState('');\n\n    return (\n        <>\n            <Calendar\n                width={400}\n                shortWeekName\n                active={date}\n                disabledDates={[new Date(2020,3,19), new Date(2020,3,20)]}\n                maxDate={new Date()}\n                onDate={(date) => {\n                    console.log(date)\n                    setDate(date)\n                }}\n                events={events}\n                holidays={holidays}\n                weekStartsSunday={weekStartsSunday}\n                onlyPast\n                color=\"primary\"/>\n        </>\n    )\n}",componentName:"<Calendar/>",apiSearchable:!0,apiDescItems:s},l.a.createElement(o.K,{items:c,prefix:l.a.createElement(o.z,{name:"brush"}),width:200,dark:e,label:"Calendar color",color:"primary",className:"mr-10",value:a,onChange:function(e){return f(e)}}),l.a.createElement(o.K,{items:p,dark:e,prefix:l.a.createElement(o.z,{name:"shape"}),width:200,label:"Select border type",color:"primary",className:"mr-10",value:X,onChange:function(e){return Z(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:u,prefix:l.a.createElement(o.z,{name:"format-size"}),width:200,dark:e,label:"Calendar size",color:"primary",value:v,onChange:function(e){return g(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:d,prefix:l.a.createElement(o.z,{name:"translate"}),width:200,dark:e,label:"Locale",color:"primary",className:"mr-10",value:D,onChange:function(e){return S(e)}}),l.a.createElement(o.A,{style:{width:200},value:O,dark:e,label:"Years limit",onChange:function(e){return j(e.target.value)},prefix:l.a.createElement(o.z,{name:"calendar-month"})}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:N,rightLabel:"Show only past years",onChange:function(){return T(!N)}}),l.a.createElement(o.O,{color:"primary",check:W,rightLabel:"Week starts from Sunday",onChange:function(){return P(!W)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:H,rightLabel:"Full width",onChange:function(){return R(!H)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:Y,rightLabel:"Hide current day highlight",onChange:function(){return q(!Y)}}),l.a.createElement(o.O,{color:"primary",check:F,rightLabel:"Hide weekend highlight",onChange:function(){return J(!F)}}),l.a.createElement(o.r,null),l.a.createElement("br",null),l.a.createElement(o.j,{width:H?null:400,shortWeekName:!0,active:ee,selectBorderType:X,disabledDates:[new Date(2020,3,19),new Date(2020,3,20)],maxDate:new Date,hideWeekend:F,hideCurrentDay:Y,onDate:function(e){console.log(e),te(e)},events:m,holidays:y,weekStartsSunday:W,size:v,dark:e,limit:O,onlyPast:N,locale:D,color:a}))}))}},47:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(3),i=a(343),s=a(291),c=a(292),u=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),d=Object(n.a)(a,2),p=d[0],m=d[1];return l.a.createElement(o.T.Consumer,null,(function(a){return l.a.createElement("div",{className:"rui-page",ref:t},l.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),l.a.createElement(o.k,{dark:a,header:l.a.createElement("h4",null,"Usage")},e.children,l.a.createElement(o.n,{className:"mt-10",extra:l.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return m(e)},customToggler:l.a.createElement(o.h,{className:"ml-20",name:p?"Close":"Open",icon:"code",color:"info"}),dark:a},l.a.createElement(i.a,{language:"jsx",style:a?s.a:c.a},e.usage))),e.backTopBtn?l.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,l.a.createElement(o.k,{className:"mt-10"},l.a.createElement(o.P,{tableTitle:l.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:u})))}))}}}]);