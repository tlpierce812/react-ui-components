(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[34],{282:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),o=n(3),c=n(313),l=n(271),s=["property","description","default","type","value"],u=[{property:"items",description:"Select options",default:"",type:"string[] | object[]",value:""},{property:"itemName",description:"Set if you pass items as array of objects",default:"",type:"string",value:""},{property:"onChange",description:"Invokes in select option select (return item value)",default:"",type:"function",value:""},{property:"childrenKey",description:"Set if you pass items with children array (pass the key of item that has children array)",default:"",type:"string",value:""},{property:"searchable",description:"Enable searching field in select menu (has effect only with one level list)",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set select size",default:"",type:"string",value:"medium | large"},{property:"width",description:"Set select width",default:"auto",type:"string | number",value:"100px | 100% | 100"},{property:"label",description:"Set select label",default:"",type:"string",value:""},{property:"placeholder",description:"Set placeholder",default:"",type:"string",value:""},{property:"color",description:"Set select color",default:"",type:"string",value:"primary | info | success | error"},{property:"borderType",description:"Set borders type",default:"",type:"string",value:"tile | smooth | rounded"},{property:"multiple",description:"Enable multiple selection (Warning: if multiple prop set, childrenKey has no effect)",default:"false",type:"boolean",value:"true | false"},{property:"onSelect",description:"Invokes on multiple selection (return selected value & selected list)",default:"",type:"function",value:""},{property:"tagColor",description:"Set Tag color (Has effect only with multiple prop)",default:"",type:"string",value:"primary | info | success | error | black"},{property:"prefix",description:"Set prefix",default:"",type:"any",value:""},{property:"whiteBackground",description:"Set input background color to white",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],y=[{country:"Kazakhstan",cities:["Nur-Sultan","Almaty","Shymkent"]},{country:"Russia",cities:["Moscow","St. Petersburg","Krasnodar"]},{country:"USA",cities:["Washington, D.C.","New York City","San Francisco"]},{country:"United Kingdom",cities:["London","York","Manchester"]},{country:"Canada",cities:["Ottawa","Toronto","Vancouver"]},{country:"Germany",cities:["Berlin","Munich","Hamburg"]},{country:"France",cities:["Paris","Nice","Marselle"]},{country:"China",cities:["Beijing","Shanghai","Shenzhen"]},{country:"Japan",cities:["Tokyo","Osaka","Kyoto"]},{country:"South Korea",cities:["Seoul","Busan","Daegu"]}];t.default=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],p=t[1],m=Object(r.useState)(""),d=Object(a.a)(m,2),h=d[0],f=d[1],S=Object(r.useState)(""),g=Object(a.a)(S,2),v=g[0],b=g[1],C=Object(r.createRef)(),k=Object(r.createRef)();return i.a.createElement("div",{className:"rui-page",ref:C},i.a.createElement("div",{className:"row align-center space-between"},i.a.createElement("div",{className:"rui-page-title"},"Select Component"),i.a.createElement("div",{className:"rui-link fz-13 fw-bold mr-10",onClick:function(){k.current&&k.current.scrollIntoView({behavior:"smooth",block:"center"})}},"API")),i.a.createElement(o.h,{outlined:!0,title:"Simple Selects"},i.a.createElement(o.C,{items:y,prefix:i.a.createElement(o.q,{name:"earth"}),itemTitle:"country",label:"Select your favourite country",width:250,color:"info",placeholder:"Countries",value:h,onChange:function(e){return f(e)}}),i.a.createElement(o.C,{className:"ml-20",label:"Select your favourite city",items:y,itemTitle:"country",childrenKey:"cities",color:"primary",width:250,placeholder:"Cities",value:n,onChange:function(e){return p(e)}}),i.a.createElement(o.j,{icon:"code",iconSize:18,contentStyles:{padding:0},tooltip:"Code"},i.a.createElement(c.a,{language:"jsx",style:l.a},"// Usage examples\nimport React, { useState } from 'react';\nimport { Select } from '@assenti/react-ui-components';\n\nconst countries = [\n    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, \n    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, \n    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, \n    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, \n    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, \n    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, \n    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, \n    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },\n    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },\n    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }\n]\nfunction Example() {\n    const [city, setCity] = useState('');\n    const [country, setCountry] = useState('');\n\n    return (\n        <div className=\"pa-20\">\n            <Select\n                items={countries}\n                prefix={<Icon name=\"earth\"/>}\n                itemTitle=\"country\"\n                label=\"Select your favourite country\"\n                width={250}\n                color=\"info\"\n                placeholder=\"Countries\"\n                value={country}\n                onChange={v => setCountry(v)}/>\n            <Select\n                className=\"ml-20\"\n                label=\"Select your favourite city\"\n                items={countries}\n                itemTitle=\"country\"\n                childrenKey=\"cities\"\n                color=\"primary\"\n                width={250}\n                placeholder=\"Cities\"\n                value={city}\n                onChange={v => setCity(v)}/>\n        </div>\n    )\n}"))),i.a.createElement("br",null),i.a.createElement(o.h,{outlined:!0,title:"Simple Select with searching"},i.a.createElement(o.C,{items:y,prefix:i.a.createElement(o.q,{name:"earth"}),itemTitle:"country",label:"Select your favourite country",width:250,size:"medium",searchable:!0,color:"info",placeholder:"Countries",value:v,onChange:function(e){return b(e)}}),i.a.createElement(o.C,{items:y,prefix:i.a.createElement(o.q,{name:"earth"}),itemTitle:"country",label:"Select your favourite country",width:250,searchable:!0,borderType:"rounded",className:"ml-20",color:"info",placeholder:"Countries",value:v,onChange:function(e){return b(e)}}),i.a.createElement(o.j,{icon:"code",iconSize:18,contentStyles:{padding:0},tooltip:"Code"},i.a.createElement(c.a,{language:"jsx",style:l.a},"// Usage examples\nimport React, { useState } from 'react';\nimport { Select } from '@assenti/react-ui-components';\n\nconst countries = [\n    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, \n    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, \n    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, \n    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, \n    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, \n    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, \n    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, \n    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },\n    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },\n    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }\n]\n\nfunction Example() {\n    const [country_, setCountry_] = useState('');\n    const [search, setSearch] = useState('');\n\n    return (\n        <div className=\"pa-20\">\n            <Select\n                items={countries}\n                prefix={<Icon name=\"earth\"/>}\n                itemTitle=\"country\"\n                label=\"Select your favourite country\"\n                width={250}\n                size=\"medium\"\n                searchable\n                color=\"info\"\n                placeholder=\"Countries\"\n                value={country_}\n                onChange={value => setCountry_(value)}/>\n            <Select\n                items={countries}\n                prefix={<Icon name=\"earth\"/>}\n                itemTitle=\"country\"\n                label=\"Select your favourite country\"\n                width={250}\n                searchable\n                rounded\n                className=\"ml-20\"\n                color=\"info\"\n                placeholder=\"Countries\"\n                value={country_}\n                onChange={value => setCountry_(value)}/>\n        </div>\n    )\n}"))),i.a.createElement("br",null),i.a.createElement(o.h,{outlined:!0,title:"Multiple selection"},i.a.createElement(o.C,{items:y,prefix:i.a.createElement(o.q,{name:"earth"}),itemTitle:"country",label:"Select your favourite countries",width:250,childrenKey:"cities",multiple:!0,whiteBackground:!0,color:"info",placeholder:"Countries",onSelect:function(e,t){return console.log(e,t)}}),i.a.createElement(o.j,{icon:"code",iconSize:18,contentStyles:{padding:0},tooltip:"Code"},i.a.createElement(c.a,{language:"jsx",style:l.a},"// Usage examples\nimport React from 'react';\nimport { Select } from '@assenti/react-ui-components';\n\nconst countries = [\n    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, \n    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, \n    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, \n    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, \n    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, \n    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, \n    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, \n    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },\n    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },\n    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }\n]\n\nfunction Example() {\n    return (\n        <div>\n            <Select\n                items={countries}\n                prefix={<Icon name=\"earth\"/>}\n                itemTitle=\"country\"\n                label=\"Select your favourite countries\"\n                width={250}\n                childrenKey=\"cities\"\n                multiple\n                whiteBackground\n                color=\"info\"\n                placeholder=\"Countries\"\n                onSelect={(value, selectedList) => console.log(value, selectedList)}/>\n        </div>\n    )\n}"))),i.a.createElement(o.b,{setRef:C,dark:!0,size:"medium"}),i.a.createElement("h2",{ref:k},"API"),i.a.createElement(o.E,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:u,index:!0,itemTitles:s}))}}}]);
//# sourceMappingURL=34.chunk.js.map