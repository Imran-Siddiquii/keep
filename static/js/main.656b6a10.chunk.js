(this.webpackJsonpstartagain=this.webpackJsonpstartagain||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(8),r=n.n(a),i=n(9),j=n(3),o=(n(14),n(15),n.p+"static/media/Logo.a4bc64e9.png"),s=n(0),l=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"Header",children:[Object(s.jsx)("img",{src:o,alt:"logo",width:"150px",height:"100px"}),Object(s.jsx)("h1",{className:"Head",children:"Keep Your File Safe"})]})})},u=n(5),b=n(7),O=function(e){var t=Object(c.useState)({title:" ",content:" "}),n=Object(j.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),l=o[0],O=o[1],d=function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},n,c))}))};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"create_note",onDoubleClick:function(){O(!1)},children:[l?Object(s.jsx)("input",{type:"text",placeholder:"File Title*",onChange:d,name:"title",value:a.title,required:!0}):null,Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{type:"text",rows:"8",cols:"40",placeholder:"Write your Credential",onChange:d,name:"content",value:a.content,onClick:function(){O(!0)},required:!0}),l?Object(s.jsx)("button",{onClick:function(){e.fatch(a),r({title:" ",content:" "})},children:"+"}):null]})})},d=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"notes_file",children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:e.content}),Object(s.jsx)("button",{onClick:function(){e.deleteData(e.id)},children:"Delete"})]})})},h=function(){var e=(new Date).getFullYear();return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("h6",{className:"footer",children:["copyright @",e]})})},x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=function(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(O,{fatch:function(e){a((function(t){return[].concat(Object(i.a)(t),[e])}))}}),n.map((function(e,t){return Object(s.jsx)(d,{id:t,name:e.title,content:e.content,deleteData:r},t)})),Object(s.jsx)(h,{})]})};r.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.656b6a10.chunk.js.map