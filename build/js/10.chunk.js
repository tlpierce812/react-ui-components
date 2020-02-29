(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[10],{282:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),r=n(298),l=n(266),c=["property","description","default","type","value"],s=[{property:"defaultState",description:"Set default state of collapse",default:"false",type:"boolean",value:"true | false"},{property:"border",description:"Set border and highlight trigger area",default:"false",type:"boolean",value:"true | false"},{property:"title",description:"Set collapse title",default:"",type:"string",value:""},{property:"icon",description:"Set icon from icons list",default:"chevron-down",type:"string",value:""},{property:"iconPosition",description:"Set collapse icon position",default:"right",type:"string",value:"right | left"},{property:"iconColor",description:"Set icon color",default:"gray",type:"string",value:""},{property:"iconSize",description:"Set icon size",default:"24px",type:"number",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u=[{name:"Steve Rogers",hero:"Captain America",icon:"shield-account",check:!1},{name:"Peter Parker",hero:"Spider man",icon:"shield-account",check:!1},{name:"Tony Stark",hero:"Iron man",icon:"shield-account",check:!1},{name:"Bruce Benner",hero:"Hulk",icon:"shield-account",check:!1}];t.default=function(){var e=Object(a.createRef)();return i.a.createElement("div",{className:"rui-page"},i.a.createElement("div",{className:"row align-center space-between"},i.a.createElement("div",{className:"rui-page-title"},"Collapse Component"),i.a.createElement("div",{onClick:function(){e.current&&e.current.scrollIntoView({behavoir:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold"},"API")),i.a.createElement(o.e,{outlined:!0,title:"Collapse Component usage"},i.a.createElement(o.g,{defaultState:!0,border:!0},i.a.createElement("p",{className:"px-10 fz-9 fw-bold"},"Some Article"),i.a.createElement("p",{className:"pa-10"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.a.createElement("br",null),i.a.createElement(o.g,{title:i.a.createElement("span",{className:"mx-10 fz-10 fw-bold"},"Marvel Avengers"),defaultState:!0,border:!0,tooltip:"Expand/Collapse"},i.a.createElement(o.p,{size:"medium",hover:!0},u.map((function(e,t){return i.a.createElement(o.q,{key:t,item:e.hero,icon:e.icon,hover:!0})})))),i.a.createElement("br",null),i.a.createElement(o.g,{icon:"code",iconSize:18,contentStyles:{padding:0},tooltip:"Code"},i.a.createElement(r.a,{language:"jsx",style:l.a},"// Usage examples\nimport React from 'react';\nimport { Collapse, List, ListItem } from '@assenti/react-ui-components';\n\nconst names = [\n    { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account', check: false }, \n    { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account', check: false }, \n    { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account', check: false }, \n    { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account', check: false }\n];\n\nfunction Example() {\n    return (\n        <div>\n            <Collapse defaultState={true} border>\n                <p className=\"px-10 fz-9 fw-bold\">Some Article</p>\n                <p className=\"pa-10\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </p>\n            </Collapse>\n            <br/>\n            <Collapse \n                title={<span className=\"mx-10 fz-10 fw-bold\">Marvel Avengers</span>}\n                defaultState={true} \n                border \n                tooltip=\"Expand/Collapse\">\n                <List \n                    size=\"medium\"\n                    hover>\n                    {names.map((item, index) => \n                        <ListItem \n                            key={index} \n                            item={item.hero}\n                            icon={item.icon}\n                            hover/>\n                    )}\n                </List>\n            </Collapse>\n        </div>\n    )\n}"))),i.a.createElement("h2",{ref:e},"API"),i.a.createElement(o.y,{bordered:!0,headers:c,items:s,index:!0,itemTitles:c}))}}}]);
//# sourceMappingURL=10.chunk.js.map