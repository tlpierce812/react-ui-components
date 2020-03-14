(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[37],{310:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),o=a(3),s=a(321),i=a(273),c=["property","description","default","type","value"],u=[{property:"rate",description:"Pass current rate",default:"",type:"number",value:""},{property:"count",description:"Set rate scale",default:"5",type:"number",value:""},{property:"disabled",description:"Make rating component disabled",default:"false",type:"boolean",value:"true | false"},{property:"onChange",description:"Invokes on rate changes (return rated value)",default:"",type:"function",value:""},{property:"size",description:"Set stars size",default:"24px",type:"number",value:""},{property:"color",description:"Set stars color",default:"yellow",type:"string",value:"yellow | primary | info | success | error"},{property:"hideRate",description:"Hide rate digits",default:"false",type:"boolean",value:"true | false"},{property:"text",description:"Set text",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],d=["yellow","primary","info","success","error"],p='// Usage examples\nimport React, { useState } from \'react\';\nimport { Card, Rating, Switch, InputField, Select, Icon } from \'@assenti/rui-components\';\nconst colors = [\'yellow\', \'primary\', \'info\', \'success\', \'error\'];\n\nfunction Example() {\n    const [disabled, setDisabled] = useState(false);\n    const [count, setCount] = useState(5);\n    const [rate, setRate] = useState(3.5);\n    const [color, setColor] = useState(colors[0]);\n    const [hide, setHide] = useState(false);\n\n    return (\n        <div>\n            <div className="row column">\n                <InputField\n                    width={100} \n                    value={count}\n                    type="number"\n                    min={0}\n                    label="Rating scale"\n                    placeholder="Define stars count" \n                    onChange={e => setCount(e.target.value)}/>\n                <InputField\n                    width={100} \n                    value={rate}\n                    type="number"\n                    min={0}\n                    label="Current rate"\n                    placeholder="Define rate" \n                    onChange={e => setRate(e.target.value)}/>\n                <div style={{ width: 100 }}>\n                    <Select\n                        items={colors}\n                        prefix={<Icon name="brush"/>}\n                        width={100}\n                        className="mx-5"\n                        label="Color theme"\n                        color="primary"\n                        value={color}\n                        onChange={v => setColor(v)}/>\n                </div>\n                <Switch \n                    color="primary" \n                    check={disabled}\n                    className="my-10"\n                    rightLabel="Disabled"\n                    onChange={() => setDisabled(!disabled)}/>\n                <Switch \n                    color="primary" \n                    check={hide}\n                    className="my-10"\n                    rightLabel="Hide rate"\n                    onChange={() => setHide(!hide)}/>\n            </div>\n            <Rating\n                className="pa-10"\n                text="Your Rate"\n                hideRate={hide}\n                rate={rate}\n                color={color}\n                onChange={(rated) => {\n                    console.log(rated)\n                    setRate(rated)\n                }}\n                disabled={disabled} \n                count={count}/>\n        </div>\n    )\n}';t.default=function(){var e=Object(r.useRef)(),t=Object(r.useState)(!1),a=Object(n.a)(t,2),m=a[0],h=a[1],b=Object(r.useState)(5),y=Object(n.a)(b,2),f=y[0],g=y[1],v=Object(r.useState)(3.5),C=Object(n.a)(v,2),S=C[0],w=C[1],E=Object(r.useState)(d[0]),x=Object(n.a)(E,2),R=x[0],N=x[1],j=Object(r.useState)(!1),D=Object(n.a)(j,2),O=D[0],k=D[1];return l.a.createElement("div",{className:"rui-page",ref:e},l.a.createElement("div",{className:"rui-page-title"},"<Rating/>"," Component"),l.a.createElement(o.j,{outlined:!0,title:"Usage"},l.a.createElement("div",{className:"row column"},l.a.createElement(o.t,{width:100,value:f,type:"number",min:0,label:"Rating scale",placeholder:"Define stars count",onChange:function(e){return g(e.target.value)}}),l.a.createElement(o.t,{width:100,value:S,type:"number",min:0,label:"Current rate",placeholder:"Define rate",onChange:function(e){return w(e.target.value)}}),l.a.createElement("div",{style:{width:100}},l.a.createElement(o.E,{items:d,prefix:l.a.createElement(o.s,{name:"brush"}),width:100,className:"mx-5",label:"Color theme",color:"primary",value:R,onChange:function(e){return N(e)}})),l.a.createElement(o.F,{color:"primary",check:m,className:"my-10",rightLabel:"Disabled",onChange:function(){return h(!m)}}),l.a.createElement(o.F,{color:"primary",check:O,className:"my-10",rightLabel:"Hide rate",onChange:function(){return k(!O)}})),l.a.createElement(o.D,{className:"pa-10",text:"Your Rate",hideRate:O,rate:S,color:R,onChange:function(e){console.log(e),w(e)},disabled:m,count:f}),l.a.createElement(o.l,{icon:"code",iconSize:18,extra:l.a.createElement(o.m,{defaultText:"Copy code",text:p,className:"mr-10"}),tooltip:"Show/Hide Code"},l.a.createElement(s.a,{language:"jsx",style:i.a},p))),l.a.createElement("h2",null,"API"),l.a.createElement(o.d,{size:"medium",dark:!0,setRef:e}),l.a.createElement(o.G,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:u,index:!0,itemTitles:c}))}}}]);