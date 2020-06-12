(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[35],{323:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),l=a.n(n),o=a(3),c=a(47),u=[{property:"onChange",description:"Handle input value change (return input change event object)",default:"",type:"function",value:""},{property:"onKeyUp",description:"Invokes on InputField any key pressed (return key change event object)",default:"",type:"function",value:""},{property:"onEnter",description:'Invokes on InputField "Enter" key pressed',default:"",type:"function",value:""},{property:"onFocus",description:"Invokes on focus (return key change event object)",default:"",type:"function",value:""},{property:"onBlur",description:"Invokes on blur (return key change event object)",default:"",type:"function",value:""},{property:"value",description:"Input value",default:"",type:"string | number",value:""},{property:"autoComplete",description:"Enable input autocomplete",default:"false",type:"boolean",value:"true | false"},{property:"name",description:"Set name prop for get all inputted values for autocomplete",default:"",type:"string",value:""},{property:"clearable",description:"Allow clear icon on value inputted",default:"false",type:"boolean",value:"true | false"},{property:"onClear",description:"Invokes on clear icon click",default:"",type:"function",value:""},{property:"lifted",description:"Lift up the input field",default:"false",type:"boolean",value:"true | false"},{property:"autoFocus",description:"Set input focus on component mounted",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color of input field from list",default:"primary",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Make input field disabled",default:"false",type:"boolean",value:"true | false"},{property:"borderType",description:"Set borders type",default:"",type:"string",value:"tile | smooth | rounded"},{property:"uppercase",description:"Transform text to upper case",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set input field size",default:"",type:"string",value:"medium | large"},{property:"prefix",description:"Set prefix",default:"",type:"string | number | React.Node",value:""},{property:"suffix",description:"Set suffix",default:"",type:"string | number | React.Node",value:""},{property:"type",description:"Set input type",default:"text",type:"string",value:"text | password | number | email"},{property:"min",description:'Set min number (has effect with type="number")',default:"",type:"number",value:""},{property:"max",description:'Set max number (has effect with type="number")',default:"",type:"number",value:""},{property:"minLength",description:'Set min length for text (has effect with type="text")',default:"",type:"number",value:""},{property:"maxLength",description:'Set max length for text (has effect with type="text")',default:"",type:"number",value:""},{property:"required",description:"Set input required",default:"false",type:"boolean",value:"true | false"},{property:"readOnly",description:"Set input readOnly",default:"false",type:"boolean",value:"true | false"},{property:"whiteBackground",description:"Set input background color to white",default:"false",type:"boolean",value:"true | false"},{property:"style",description:"Set a custom inline styles",default:"",type:"object",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],i=["default","medium","large"],p=["primary","info","success","error"],s=["default","rounded","smooth","tile"];t.default=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],m=t[1],d=Object(n.useState)(""),f=Object(r.a)(d,2),b=f[0],y=f[1],h=Object(n.useState)(""),g=Object(r.a)(h,2),v=g[0],E=g[1],k=Object(n.useState)(""),S=Object(r.a)(k,2),j=S[0],O=S[1],x=Object(n.useState)(0),C=Object(r.a)(x,2),I=C[0],w=C[1],N=Object(n.useState)(i[0]),z=Object(r.a)(N,2),T=z[0],L=z[1],B=Object(n.useState)(p[0]),D=Object(r.a)(B,2),q=D[0],A=D[1],F=Object(n.useState)(s[0]),R=Object(r.a)(F,2),K=R[0],Q=R[1],U=Object(n.useState)(!1),H=Object(r.a)(U,2),P=H[0],W=H[1],J=Object(n.useState)(!1),V=Object(r.a)(J,2),M=V[0],Z=V[1],G=Object(n.useState)(!1),X=Object(r.a)(G,2),Y=X[0],$=X[1],_=Object(n.useState)(!1),ee=Object(r.a)(_,2),te=ee[0],ae=ee[1],re=Object(n.useState)(!1),ne=Object(r.a)(re,2),le=ne[0],oe=ne[1],ce=Object(n.useState)(!1),ue=Object(r.a)(ce,2),ie=ue[0],pe=ue[1];return l.a.createElement(o.W.Consumer,null,(function(e){return l.a.createElement(c.a,{usage:'// Usage examples\nimport React, { useState } from \'react\';\nimport { InputField, Icon } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [login, setLogin] = useState(\'\');\n\n    return (\n        <>\n            <InputField\n                label="Login"\n                placeholder="Input your login" \n                value={login}\n                autoComplete\n                name="login"\n                color="primary"\n                width={300}\n                onChange={e => setLogin(e.target.value)}/>\n        </>\n    )\n}',componentName:"<InputField/>",apiDescItems:u,apiSearchable:!0,backTopBtn:!0},l.a.createElement(o.K,{items:i,dark:e,prefix:l.a.createElement(o.z,{name:"format-size"}),width:200,label:"Size",color:"primary",className:"mb-5",value:T,onChange:function(e){return L(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:p,dark:e,prefix:l.a.createElement(o.z,{name:"brush"}),width:200,label:"Color",color:"primary",className:"mb-5",value:q,onChange:function(e){return A(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:s,dark:e,prefix:l.a.createElement(o.z,{name:"shape"}),width:200,label:"Border type",color:"primary",className:"mb-5",value:K,onChange:function(e){return Q(e)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.Q,{color:"primary",check:P,rightLabel:"Required",className:"ml-5",onChange:function(){return W(!P)}}),l.a.createElement(o.Q,{color:"primary",check:Y,rightLabel:"Label",className:"ml-5",onChange:function(){return $(!Y)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.Q,{color:"primary",check:M,rightLabel:"Hint",className:"ml-5",onChange:function(){return Z(!M)}}),l.a.createElement(o.Q,{color:"primary",check:te,rightLabel:"White background",className:"ml-5",onChange:function(){return ae(!te)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.Q,{check:ie,color:"primary",rightLabel:"Uppercase",className:"ml-5",onChange:function(){return pe(!ie)}}),l.a.createElement(o.Q,{check:le,color:"primary",rightLabel:"Lifted",className:"ml-5",onChange:function(){return oe(!le)}}),l.a.createElement(o.r,null),l.a.createElement("br",null),l.a.createElement(o.A,{label:Y?"Login":"",dark:e,placeholder:"Input your login",value:a,autoComplete:!0,hint:M?"I am a hint":null,borderType:K,name:"login",color:q,lifted:le,uppercase:ie,whiteBackground:te,style:{width:300},required:P,size:T,onChange:function(e){return m(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.A,{label:Y?"Password":"",placeholder:"Input your password",value:b,dark:e,borderType:K,type:"password",hint:M?"I am a hint":null,color:q,required:P,style:{width:300},lifted:le,uppercase:ie,size:T,whiteBackground:te,onChange:function(e){return y(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.A,{label:Y?"Amount":"",placeholder:"Input amount",value:I,type:"number",dark:e,min:0,required:P,lifted:le,uppercase:ie,borderType:K,hint:M?"I am a hint":null,color:q,prefix:l.a.createElement(o.z,{name:"tenge"}),style:{width:300},whiteBackground:te,size:T,onChange:function(e){return w(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.A,{label:Y?"Login":"",placeholder:"Input your login",value:v,required:P,borderType:K,lifted:le,dark:e,uppercase:ie,hint:M?"I am a hint":null,clearable:!0,whiteBackground:te,autoFocus:!0,onClear:function(){return E("")},prefix:l.a.createElement(o.z,{name:"account"}),color:q,style:{width:300},size:T,onChange:function(e){return E(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.A,{placeholder:"Search...",value:j,hint:M?"I am a hint":null,color:q,style:{minWidth:300},label:Y?"Search":"",size:T,lifted:le,uppercase:ie,dark:e,whiteBackground:te,required:P,borderType:K,prefix:l.a.createElement(o.z,{name:"search"}),suffix:l.a.createElement(o.h,{name:"Search",color:"primary",size:T,onClick:function(){return console.log(j)}}),onEnter:function(){return console.log(j)},onChange:function(e){return O(e.target.value)}}))}))}},47:function(e,t,a){"use strict";var r=a(2),n=a(0),l=a.n(n),o=a(3),c=a(346),u=a(289),i=a(290),p=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),s=Object(r.a)(a,2),m=(s[0],s[1]);return l.a.createElement(o.W.Consumer,null,(function(a){return l.a.createElement("div",{className:"rui-page",ref:t},l.a.createElement("div",{className:"rui-page-title"},e.componentName," Component",l.a.createElement(o.o,{className:"ml-10",tooltipPosition:"right",defaultText:"Copy Component Tag",text:e.componentName,dark:a})),l.a.createElement(o.k,{dark:a,header:l.a.createElement(o.Z,{tooltip:"I am a <Tag/> component",position:"right"},l.a.createElement(o.U,{className:"mx-0 mb-10 mt-0",color:"secondary"},l.a.createElement(o.z,{size:18,className:"mr-4",name:"cog-outline"})," Usage"))},e.children,l.a.createElement(o.n,{className:"mt-10",extra:l.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return m(e)},customToggler:l.a.createElement(o.h,{className:"ml-20",name:"Code",icon:l.a.createElement(o.z,{name:"code",size:20}),color:"info"}),dark:a},l.a.createElement(c.a,{language:"jsx",style:a?u.a:i.a},e.usage))),e.backTopBtn?l.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,l.a.createElement(o.k,{className:"mt-10 overflow-y",style:{maxWidth:"100%"}},e.apiDescItems.length>0&&l.a.createElement(o.R,{tableTitle:l.a.createElement("h2",{className:"ml-10"},e.apiHeader?e.apiHeader:"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems,"property"),index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:p}),e.content),e.apiDescItems2&&l.a.createElement(o.k,{className:"mt-10"},e.apiDescItems2.length>0&&l.a.createElement(o.R,{tableTitle:l.a.createElement("h2",{className:"ml-10"},e.apiHeader2),dark:a,headers:["Property","Description","Default","Type","Value"],items:Object(o.gb)(e.apiDescItems2,"property"),index:!0,bordered:!0,searchable:e.apiSearchable2,searchKey:"property",itemTitles:p}),e.content))}))}}}]);