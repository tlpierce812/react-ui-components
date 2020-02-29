(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[26],{281:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),l=a(3),i=a(298),s=a(266),c=["property","description","default","type","value"],d=[{property:"visible",description:"Preloader visibile state",default:"false",type:"boolean",value:"true | false"},{property:"preloader",description:"Pass your own custom preloader element",default:"Moving ellipsis",type:"any",value:""},{property:"backgroundColor",description:"Set preloader background color",default:"transparent",type:"string",value:""},{property:"color",description:"Set preloader default ellipsis color",default:"",type:"string",value:""}];t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],p=t[1];return o.a.createElement("div",{className:"rui-page"},o.a.createElement("div",{className:"rui-page-title"},"Preloader Component"),o.a.createElement(l.e,{outlined:!0,title:"Preloader usage"},o.a.createElement("p",null,"Launch full page preloader and make all actions on screen disabled"),o.a.createElement("div",{className:"py-10"},o.a.createElement(l.c,{name:"Activate",color:"info",onClick:function(){p(!0),setTimeout((function(){return p(!1)}),3e3)}})),o.a.createElement(l.g,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(i.a,{language:"jsx",style:s.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Preloader, Button } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [loading, setLoading] = useState(false);\n    \n    const handleClick = () => {\n        setLoading(true)\n        setTimeout(() => setLoading(false), 3000)\n    }\n\n    return (\n        <div>\n            <div className="py-10">\n                <Button name="Activate" color="info" onClick={handleClick}/>\n            </div>\n            <Preloader visible={loading}/>\n        </div>\n    )\n}'))),o.a.createElement(l.u,{visible:a}),o.a.createElement("h2",null,"API"),o.a.createElement(l.y,{bordered:!0,headers:c,items:d,index:!0,itemTitles:c}))}}}]);
//# sourceMappingURL=26.chunk.js.map