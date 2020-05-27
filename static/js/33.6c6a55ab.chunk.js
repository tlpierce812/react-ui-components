(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[33],{296:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(0),r=t.n(l),c=t(3),o=t(1),s=t(47),i=[{property:"mask",description:"Set mask type",default:"",type:"string",value:"phone | card | card-issue | iin | date | time"},{property:"onChange",description:"Invokes on input value change (return (value, rawValue))",default:"",type:"function",value:""},{property:"dateDelimiter",description:'Set date delimiter (has effect with mask="date")',default:".",type:"string",value:""},{property:"timeDelimiter",description:'Set date delimiter (has effect with mask="date")',default:":",type:"string",value:""},{property:"InputField Component all props",description:"You can set all InputField Component props",default:"",type:"",value:""}];a.default=function(){var e=Object(l.useState)("7777777777"),a=Object(n.a)(e,2),t=a[0],m=a[1],u=Object(l.useState)(""),p=Object(n.a)(u,2),d=p[0],h=p[1],f=Object(l.useState)(""),g=Object(n.a)(f,2),E=g[0],_=g[1],b=Object(l.useState)(""),k=Object(n.a)(b,2),v=k[0],y=k[1],C=Object(l.useState)(""),j=Object(n.a)(C,2),O=j[0],z=j[1];return r.a.createElement(c.T.Consumer,null,(function(e){return r.a.createElement(s.a,{usage:'// Usage examples\nimport React, { useState } from \'react\';\nimport { InputMask, Icon } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [phone, setPhone] = useState(\'\');\n\n    return (\n        <>\n            <InputMask \n                width={250}\n                size="medium"\n                value={phone}\n                mask="phone"\n                placeholder="(___) ___-__-__"\n                onChange={(value, rowValue) => {\n                    console.log(value)\n                    console.log(rowValue)\n                    setPhone(rowValue)\n                }}\n                prefix={<><Icon name="smartphone"/><span>+7</span></>}/>\n        </>\n    )\n}',apiDescItems:i,componentName:"<InputMask/>"},r.a.createElement(c.B,{style:{width:250},size:"medium",value:t,label:"Input your phone number",mask:"phone",dark:e,clearable:!0,onClear:function(){return m("")},placeholder:"(___) ___-__-__",onChange:function(e,a){console.log(e),console.log(a),m(a)},prefix:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.z,{name:"smartphone"}),r.a.createElement("span",null,"+7"))}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"pa-5 fz-9"},"Credit card mask: ",Object(o.c)("1234567890191112"),", Credit card issue date: ",Object(o.b)("0220")),r.a.createElement("div",{className:"row"},r.a.createElement(c.B,{style:{width:250},size:"medium",value:d,dark:e,mask:"card",className:"mr-10",placeholder:"**** **** **** ****",onChange:function(e,a){console.log(e),console.log(a),h(a)},prefix:r.a.createElement(c.z,{name:"credit-card"})}),r.a.createElement(c.B,{style:{width:90},size:"medium",value:E,dark:e,mask:"card-issue",placeholder:"__ / __",onChange:function(e,a){console.log(e),console.log(a),_(a)},prefix:r.a.createElement(c.z,{name:"calendar-month"})})),r.a.createElement("br",null),r.a.createElement("div",{className:"pa-5 fz-9"},"Kazakhstan IIN/BIN: ",Object(o.e)("123456789012")),r.a.createElement(c.B,{style:{width:250},size:"medium",value:v,dark:e,mask:"iin",placeholder:"___ ___ ___ ___",onChange:function(e,a){console.log(e),console.log(a),y(a)},prefix:r.a.createElement(c.z,{name:"card-account-details"})}),r.a.createElement("br",null),r.a.createElement("div",{className:"pa-5 fz-9"},"Date (DD.MM.YYYY or MM/DD/YYYY)"),r.a.createElement(c.B,{style:{width:250},size:"medium",value:O,mask:"date",dark:e,clearable:!0,onClear:function(){return z("")},placeholder:"DD.MM.YYYY",onChange:function(e,a){console.log(e),console.log(a),z(a)},prefix:r.a.createElement(c.z,{name:"calendar-month"})}))}))}},47:function(e,a,t){"use strict";var n=t(2),l=t(0),r=t.n(l),c=t(3),o=t(343),s=t(291),i=t(292),m=["property","description","default","type","value"];a.a=function(e){var a=Object(l.useRef)(),t=Object(l.useState)(!1),u=Object(n.a)(t,2),p=u[0],d=u[1];return r.a.createElement(c.T.Consumer,null,(function(t){return r.a.createElement("div",{className:"rui-page",ref:a},r.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),r.a.createElement(c.k,{dark:t,header:r.a.createElement("h4",null,"Usage")},e.children,r.a.createElement(c.n,{className:"mt-10",extra:r.a.createElement(c.o,{defaultText:"Copy code",text:e.usage,dark:t}),onChange:function(e){return d(e)},customToggler:r.a.createElement(c.h,{className:"ml-20",name:p?"Close":"Open",icon:"code",color:"info"}),dark:t},r.a.createElement(o.a,{language:"jsx",style:t?s.a:i.a},e.usage))),e.backTopBtn?r.a.createElement(c.e,{dark:!0,setRef:a,size:"medium",tooltip:"Up"}):null,r.a.createElement(c.k,{className:"mt-10"},r.a.createElement(c.P,{tableTitle:r.a.createElement("h2",null,"API"),dark:t,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m})))}))}}}]);