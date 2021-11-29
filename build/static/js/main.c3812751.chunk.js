(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(27),s=n.n(i),r=(n(20),n(8)),l=n(0);var o=function(e){return Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsxs)(r.b,{to:"/",children:[Object(l.jsx)("h1",{children:" AddMe - QRC "})," "]})," ",Object(l.jsx)("h2",{children:". . . . create your own personal QR Code"})]})},j=n(5),d=n(10),h=n.n(d),b=n(16),x=n(9),p=n(2),O=n(14),m=n.n(O),u=n(15),v=n.n(u),g=function(e){for(var t=v()(),n=0,c=Object.entries(e);n<c.length;n++){var a=Object(x.a)(c[n],2),i=a[0],s=a[1];t[i]=s,t.version="3.0"}return Object(l.jsx)("div",{className:"QRCode",children:Object(l.jsx)(m.a,{value:t.getFormattedString(),size:128,bgColor:"#00ff0080",fgColor:"#013e5d",level:"L",includeMargin:!1,renderAs:"svg"})})},f=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"props",tag:e.role,children:Object(l.jsxs)(r.b,{to:"/cardList/".concat(e._id),children:[Object(l.jsxs)("h3",{children:[" ",e.role]}),Object(l.jsxs)("div",{className:"Btn",children:[Object(l.jsx)("p",{className:"Organization",children:e.organization}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"Name",children:[e.firstName," ",e.lastName]}),Object(l.jsx)("p",{className:"Title",children:e.title})]}),Object(l.jsx)("div",{className:"CardCode",children:Object(l.jsx)(g,Object(j.a)({},e))})]})]})},e._id)})};var N=function(e){return Object(l.jsx)("section",{children:e.cardList?e.cardList.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(f,Object(j.a)({},e),e._id)})})):Object(l.jsx)("h1",{children:"Loading..."})})},C=n(13);var F=function(e){for(var t=e.match.params.id,n=e.cardList.find((function(e){return e._id===t})),a=Object(c.useState)(n),i=Object(x.a)(a,2),s=i[0],r=i[1],o=function(e){var t=e.target,n=t.name,c=t.value;r(Object(j.a)(Object(j.a)({},s),{},Object(C.a)({},n,c)))},d=v()(),h=0,b=Object.entries(s);h<b.length;h++){var p=Object(x.a)(b[h],2),O=p[0],u=p[1];d[O]=u,d.version="3.0"}var g=function(t){t.preventDefault(),e.updatecardList(s,n._id),e.history.push("/cardlist")};return Object(l.jsx)("form",{className:"showForm",onSubmit:g,children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{style:{fontSize:"40px"},children:[" ",n.firstName," ",n.lastName]}),Object(l.jsxs)("div",{style:{alignSelf:"center"},className:"rowBtn",children:[Object(l.jsx)("button",{type:"button",id:"delete",onClick:function(){e.deletecardList(n._id),e.history.push("/cardlist")},children:"DELETE"}),Object(l.jsx)("button",{type:"submit",children:" Update Card "})]}),Object(l.jsxs)("div",{className:"showField",children:[Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"First Name"}),Object(l.jsx)("input",{type:"text",value:s.firstName,name:"firstName",placeholder:"First Name",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Last Name"}),Object(l.jsx)("input",{type:"text",value:s.lastName,name:"lastName",placeholder:"Doe",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Suffix"}),Object(l.jsx)("input",{type:"text",value:s.nameSuffix,name:"nameSuffix",placeholder:"Jr.",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Cell Phone"}),Object(l.jsx)("input",{type:"text",value:s.cellPhone,name:"cellPhone",placeholder:"312-555-1212",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Email"}),Object(l.jsx)("input",{type:"text",value:s.email,name:"email",placeholder:"johndoe@ACMECorporation.com",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Organization"}),Object(l.jsx)("input",{type:"text",value:s.organization,name:"organization",placeholder:"ACME Corporation",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Title"}),Object(l.jsx)("input",{type:"text",value:s.title,name:"title",placeholder:"Software Developer",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Website/URL"}),Object(l.jsx)("input",{type:"text",value:s.url,name:"url",placeholder:"http://ACMECorporation.com",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Work Phone"}),Object(l.jsx)("input",{type:"text",value:s.workPhone,name:"workPhone",placeholder:"312-555-1212",onChange:o})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Address/Location"}),Object(l.jsx)("input",{type:"text",value:s.note,name:"note",placeholder:"12346 Main Street, Atlanta, GA 55555",onChange:o})]}),Object(l.jsxs)("div",{className:"output",children:[Object(l.jsxs)("select",{type:"text",className:"form-control form-control-lg",placeholder:"Priority",name:"role",value:"",onChange:o,onSubmit:g,children:[Object(l.jsx)("option",{children:"Accounting & Tax Services"}),Object(l.jsx)("option",{children:"Arts, Culture & Entertainment"}),Object(l.jsx)("option",{children:"Auto Sales & Service"}),Object(l.jsx)("option",{children:"Banking & Finance"}),Object(l.jsx)("option",{children:"Business Services"}),Object(l.jsx)("option",{children:"Community Organizations"}),Object(l.jsx)("option",{children:"Dentists & Orthodontists"}),Object(l.jsx)("option",{children:"Education"}),"77",Object(l.jsx)("option",{children:"Health & Wellness"}),Object(l.jsx)("option",{children:"Health Care"}),Object(l.jsx)("option",{children:"Home Improvement"}),Object(l.jsx)("option",{children:"Insurance"}),Object(l.jsx)("option",{children:"Internet & Web Services"}),Object(l.jsx)("option",{children:"Legal Services"}),Object(l.jsx)("option",{children:"Lodging & Travel"}),Object(l.jsx)("option",{children:"Marketing & Advertising"}),Object(l.jsx)("option",{children:"News & Media"}),Object(l.jsx)("option",{children:"Pet Services"}),Object(l.jsx)("option",{children:"Real Estate"}),Object(l.jsx)("option",{children:"Restaurants & Nightlife"}),Object(l.jsx)("option",{children:"Shopping & Retail"}),Object(l.jsx)("option",{children:"Sports & Recreation"}),Object(l.jsx)("option",{children:"Transportation"}),Object(l.jsx)("option",{children:"Utilities"}),Object(l.jsx)("option",{children:"Wedding, Events & Meetings"}),Object(l.jsx)("option",{children:"Other"})]}),Object(l.jsxs)("div",{className:"QRCode",children:[Object(l.jsxs)("h4",{children:["QR Code (to save image, ",Object(l.jsx)("br",{})," right-click -> Save Image As)"]}),Object(l.jsx)(m.a,{value:d.getFormattedString(),size:128,bgColor:"#90d9d1",fgColor:"#013e5d",level:"L",includeMargin:!1,renderAs:"canvas"})]}),Object(l.jsxs)("div",{className:"VCard",children:[Object(l.jsx)("h4",{children:"VCard Data String"}),Object(l.jsx)("pre",{className:"vCardoutput",style:{fontSize:"10px",maxHeight:"100px"},children:d.getFormattedString()})]})]})]})]})})};var S=function(e){for(var t=Object(c.useState)({firstName:"",lastName:"",nameSuffix:"",cellPhone:"",email:"",organization:"",title:"",url:"",workPhone:"",note:"",role:""}),n=Object(x.a)(t,2),a=n[0],i=n[1],s=function(e){var t=e.target,n=t.name,c=t.value;i(Object(j.a)(Object(j.a)({},a),{},Object(C.a)({},n,c)))},o=v()(),d=0,h=Object.entries(a);d<h.length;d++){var b=Object(x.a)(h[d],2),O=b[0],u=b[1];o[O]=u,o.version="3.0"}var g=Object(p.f)(),f=function(t){t.preventDefault(),e.createcardList(a),g.push("/cardList"),i({firstName:"",lastName:"",nameSuffix:"",cellPhone:"",email:"",organization:"",title:"",url:"",workPhone:"",note:"",role:""})};return Object(l.jsx)("div",{className:"InputForm",children:Object(l.jsxs)("form",{className:"RegForm",onSubmit:f,children:[Object(l.jsxs)("h7",{children:[" ",Object(l.jsx)("strong",{children:"Step 1:"})," Enter desired contact details and the QR Code below will update as you type. ",Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Step 2:"})," Simply take a picture with phone or save as image to your local computer."]}),Object(l.jsxs)("div",{className:"InputField",children:[Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"First Name"}),Object(l.jsx)("input",{type:"text",value:a.firstName,name:"firstName",placeholder:"First Name",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Last Name"}),Object(l.jsx)("input",{type:"text",value:a.lastName,name:"lastName",placeholder:"Doe",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Suffix"}),Object(l.jsx)("input",{type:"text",value:a.nameSuffix,name:"nameSuffix",placeholder:"Jr.",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Cell Phone"}),Object(l.jsx)("input",{type:"text",value:a.cellPhone,name:"cellPhone",placeholder:"312-555-1212",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Email"}),Object(l.jsx)("input",{type:"text",value:a.email,name:"email",placeholder:"johndoe@ACMECorporation.com",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Organization"}),Object(l.jsx)("input",{type:"text",value:a.organization,name:"organization",placeholder:"ACME Corporation",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Title"}),Object(l.jsx)("input",{type:"text",value:a.title,name:"title",placeholder:"Software Developer",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Website/URL"}),Object(l.jsx)("input",{type:"text",value:a.url,name:"url",placeholder:"http://ACMECorporation.com",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Work Phone"}),Object(l.jsx)("input",{type:"text",value:a.workPhone,name:"workPhone",placeholder:"312-555-1212",onChange:s})]}),Object(l.jsxs)("div",{className:"FormField",children:[Object(l.jsx)("p",{className:"Label",children:"Address/Location"}),Object(l.jsx)("input",{type:"text",value:a.note,name:"note",placeholder:"12346 Main Street, Atlanta, GA 55555",onChange:s})]})]}),Object(l.jsxs)("div",{className:"output",children:[Object(l.jsxs)("div",{className:"Add",style:{width:"250px",border:"solid 2px #F5F0EC"},children:[Object(l.jsx)("button",{type:"submit",children:Object(l.jsx)("strong",{children:" +  Add to VIRTUAL DIRECTORY after choosing category below"})}),Object(l.jsx)("div",{children:Object(l.jsxs)("select",{type:"text",className:"form-control form-control-lg",placeholder:"Priority",name:"role",value:"",onChange:s,onSubmit:f,children:[Object(l.jsx)("option",{children:"Accounting & Tax Services"}),Object(l.jsx)("option",{children:"Arts, Culture & Entertainment"}),Object(l.jsx)("option",{children:"Auto Sales & Service"}),Object(l.jsx)("option",{children:"Banking & Finance"}),Object(l.jsx)("option",{children:"Business Services"}),Object(l.jsx)("option",{children:"Community Organizations"}),Object(l.jsx)("option",{children:"Dentists & Orthodontists"}),Object(l.jsx)("option",{children:"Education"}),"77",Object(l.jsx)("option",{children:"Health & Wellness"}),Object(l.jsx)("option",{children:"Health Care"}),Object(l.jsx)("option",{children:"Home Improvement"}),Object(l.jsx)("option",{children:"Insurance"}),Object(l.jsx)("option",{children:"Internet & Web Services"}),Object(l.jsx)("option",{children:"Legal Services"}),Object(l.jsx)("option",{children:"Lodging & Travel"}),Object(l.jsx)("option",{children:"Marketing & Advertising"}),Object(l.jsx)("option",{children:"News & Media"}),Object(l.jsx)("option",{children:"Pet Services"}),Object(l.jsx)("option",{children:"Real Estate"}),Object(l.jsx)("option",{children:"Restaurants & Nightlife"}),Object(l.jsx)("option",{children:"Shopping & Retail"}),Object(l.jsx)("option",{children:"Sports & Recreation"}),Object(l.jsx)("option",{children:"Transportation"}),Object(l.jsx)("option",{children:"Utilities"}),Object(l.jsx)("option",{children:"Wedding, Events & Meetings"}),Object(l.jsx)("option",{children:"Other"})]})}),Object(l.jsx)("button",{type:"button",children:Object(l.jsx)(r.b,{to:"/cardList/",className:"Link",children:"VIRTUAL DIRECTORY"})})]}),Object(l.jsxs)("div",{className:"QRCodeBox",children:[Object(l.jsxs)("h4",{style:{fontWeight:"bold"},children:["QR Code (to save image, ",Object(l.jsx)("br",{})," right-click -> Save Image As)"]}),Object(l.jsx)(m.a,{value:o.getFormattedString(),size:128,bgColor:"#90d9d1",fgColor:"#013e5d",level:"L",includeMargin:!1,renderAs:"canvas"})]}),Object(l.jsxs)("div",{className:"VCard",children:[Object(l.jsx)("h4",{children:"VCard Data String"}),Object(l.jsx)("pre",{className:"vCardoutput",children:o.getFormattedString()})]})]})]})})};var L=function(e){var t=Object(c.useState)(null),n=Object(x.a)(t,2),a=n[0],i=n[1],s="http://localhost:5000/cardlist/",r=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(a);var o=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s,{method:"POST",headers:{"Content-Type":"Application/json"},body:JSON.stringify(t)});case 2:r(),console.log(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(b.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s+n,{method:"PUT",headers:{"Content-Type":"Application/json"},body:JSON.stringify(t)});case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s+t,{method:"DELETE"});case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return r()}),[]),Object(l.jsxs)("main",{children:[Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{exact:!0,path:"/",children:Object(l.jsx)(S,{createcardList:o})}),Object(l.jsx)(p.a,{exact:!0,path:"/cardlist",render:function(e){return Object(l.jsx)(N,Object(j.a)({cardList:a,getcardList:r},e))}}),Object(l.jsx)(p.a,{path:"/cardlist/:id",render:function(e){return Object(l.jsx)(F,Object(j.a)({cardList:a,updatecardList:d,deletecardList:O},e))}})," "]})," "]})};n(51);var y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(L,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(y,{})})}),document.getElementById("root")),A()}},[[52,1,2]]]);
//# sourceMappingURL=main.c3812751.chunk.js.map