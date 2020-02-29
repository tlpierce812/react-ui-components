(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[13],{267:function(e,t,n){"use strict";n.r(t);var r=n(17),o=n.n(r),i=n(22),a=n(1),l=n(0),c=n.n(l),s=n(3),p=n(297),u=n(266),d=["property","description","default","type","value"],f=[{property:"visible",description:"Set Dialog visible state",default:"",type:"boolean",value:"true | false"},{property:"onConfirm",description:"Ivokes on confirm button click",default:"",type:"promised function",value:""},{property:"onCancel",description:"Ivokes on cancel button click",default:"",type:"function",value:""},{property:"confirmText",description:"Set confirm text",default:"Confirm",type:"string",value:""},{property:"confirmBtnColor",description:"Set confirm button color",default:"primary",type:"string",value:""},{property:"cancelText",description:"Set cancel text",default:"Cancel",type:"string",value:""},{property:"cancelBtnColor",description:"Set cancel button color",default:"secondary",type:"string",value:""},{property:"title",description:"Set Dialog title",default:"",type:"string",value:""},{property:"description",description:"Set Dialog description",default:"",type:"string",value:""},{property:"icon",description:"Set Dialog icon",default:"",type:"string",value:""},{property:"titleColor",description:"Set title color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"iconColor",description:"Set icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"dark",description:"Set modal dark mode",default:"false",type:"boolean",value:"true | false"}];t.default=function(){var e=Object(l.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],m=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t()}),1500);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"rui-page"},c.a.createElement("div",{className:"rui-page-title"},"Dialog Component"),c.a.createElement(s.e,{outlined:!0,title:"Modal usage"},c.a.createElement(s.c,{color:"error",name:"Delete account",onClick:function(){return r(!0)}}),c.a.createElement(s.i,{onCancel:function(){return r(!1)},onConfirm:m,icon:"alert",iconColor:"red",titleColor:"red",visible:n,title:"Delete",description:"Are you sure?"}),c.a.createElement(s.g,{icon:"code",iconSize:18,tooltip:"Code"},c.a.createElement(p.a,{language:"jsx",style:u.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Button, Dialog } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [dialog, setDialog] = useState(false);\n\n    const actionImitation = async () => {\n        return new Promise(async (resolve) => {\n            setTimeout(() => {\n                resolve()\n            }, 1500)\n        })\n    }\n\n    return (\n        <div>\n            <Button\n                color="error"\n                name="Delete account"\n                onClick={() => setDialog(true)}/>\n            <Dialog\n                onCancel={() => setDialog(false)}\n                onConfirm={actionImitation}\n                icon="alert"\n                iconColor="red"\n                titleColor="red" \n                visible={dialog} \n                title="Delete"\n                description="Are you sure?"/>\n        </div>\n    )\n}'))),c.a.createElement("h2",null,"API"),c.a.createElement(s.y,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:f,index:!0,itemTitles:d}))}}}]);
//# sourceMappingURL=13.chunk.js.map