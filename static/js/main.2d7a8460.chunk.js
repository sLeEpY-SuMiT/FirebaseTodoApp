(this.webpackJsonptodo_firebase=this.webpackJsonptodo_firebase||[]).push([[0],{61:function(e,t,n){},63:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n.n(c),r=n(47),o=n.n(r),i=(n(61),n(0)),s=n.n(i),u=n(2),l=n(22),d=n(11),j=(n.p,n(63),n(18)),b=n(48),p=n(24),O=n(54),h=Object(b.a)({apiKey:"AIzaSyAZAKqtkiUNwDUvu8u1XJdQb78rBUwehmE",authDomain:"to-do-4db1b.firebaseapp.com",projectId:"to-do-4db1b",storageBucket:"to-do-4db1b.appspot.com",messagingSenderId:"1087623711498",appId:"1:1087623711498:web:abdde669e6e77c022848f3",measurementId:"G-S30JYJ8DFR"}),f=Object(j.e)(h),x=(Object(O.a)(h),Object(p.b)(h)),m=(new p.a(x),n(32)),g=n(12),v=n(10);var y=n(49),k=n.n(y),w=n(51),S=n.n(w),N=n(52),C=n.n(N);function I(e){var t=e.todo,n=e.toggleComplete,c=e.handleDelete,r=e.handleEdit,o=a.a.useState(t?t.title:""),i=Object(d.a)(o,2),s=i[0],u=i[1];return Object(v.jsxs)("div",{className:"todo",children:[Object(v.jsx)("input",{style:{textDecoration:t?t.completed&&"line-through":""},type:"text",value:t?""===t.title?s:t.title:"",className:"list",onChange:function(e){e.preventDefault(),!0===t.complete?u(t.title):(t.title="",u(e.target.value))}}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{className:"button-complete",onClick:function(){return n(t)},children:Object(v.jsx)(k.a,{id:"i"})}),Object(v.jsx)("button",{className:"button-edit",onClick:function(){return r(t,s)},children:Object(v.jsx)(S.a,{id:"i"})}),Object(v.jsx)("button",{className:"button-delete",onClick:function(){return c(t.id)},children:Object(v.jsx)(C.a,{id:"i"})})]})]})}var F=n(80),D=n(81);function A(){var e=JSON.parse(localStorage.getItem("user")),t=a.a.useState(""),n=Object(d.a)(t,2),c=n[0],r=n[1],o=a.a.useState(!1),i=Object(d.a)(o,2),l=i[0],b=i[1],O=function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""===c){t.next=5;break}return t.next=4,Object(j.a)(Object(j.b)(f,"todos"),{title:c,completed:!1,userId:e.id});case 4:r("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsx)(a.a.Fragment,{children:l?Object(v.jsx)(g.a,{to:"/"}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{style:{padding:"30px",marginBottom:"80px"},children:Object(v.jsx)(F.a,{style:{float:"right"},src:e.photoURL})}),Object(v.jsx)("div",{style:{marginRight:"50px"},children:Object(v.jsx)(D.a,{style:{float:"right"},onClick:function(e){e.preventDefault(),function(){var e=Object(p.b)();Object(p.d)(e).then((function(){b(!0),console.log("ho gya bhai")})).catch((function(e){console.log("bhai kya kr rha hai tuu")}))}()},variant:"outline-primary",children:"Log Out"})}),Object(v.jsx)("div",{style:{textAlign:"center"},children:Object(v.jsxs)("h3",{children:["Welcome, ",e.userName," ",Object(v.jsx)("span",{children:" write your first todo here"})]})}),Object(v.jsxs)("form",{onSubmit:O,children:[Object(v.jsx)("div",{className:"input_container",children:Object(v.jsx)("input",{type:"text",placeholder:"Enter todo...",value:c,onChange:function(e){return r(e.target.value)}})}),Object(v.jsx)("div",{className:"btn_container",children:Object(v.jsx)("button",{children:"Add"})})]}),Object(v.jsx)(E,{})]})})}var U=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],o=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,c,a,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new p.a,n=Object(p.b)(),e.next=5,Object(p.c)(n,t);case 5:return c=e.sent,a=p.a.credentialFromResult(c),a.accessToken,o=c.user,console.log(o),e.next=12,Object(j.a)(Object(j.b)(f,"users"),{userName:o.displayName,email:o.email,photoURL:o.photoURL,id:o.uid});case 12:i=e.sent,console.log(i),r(o),localStorage.setItem("user",JSON.stringify({userName:o.displayName,email:o.email,photoURL:o.photoURL,id:o.uid})),e.next=24;break;case 18:e.prev=18,e.t0=e.catch(0),e.t0.code,e.t0.message,e.t0.email,p.a.credentialFromError(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(a.a.Fragment,{children:n?Object(v.jsx)(g.a,{to:"/AddTodo"}):Object(v.jsx)("div",{style:{textAlign:"center",verticalAlign:"sub",marginTop:"200px"},children:Object(v.jsx)(D.a,{variant:"success",type:"button",onClick:o,children:" Sign Up"})})})};var E=function(){var e=a.a.useState([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=JSON.parse(localStorage.getItem("user"));console.log(r),a.a.useEffect((function(){var e=Object(j.b)(f,"todos"),t=Object(j.g)(e,Object(j.i)("userId","==",r.id)),n=Object(j.f)(t,(function(e){var t=[];e.forEach((function(e){t.push(Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return n()}}),[]);var o=function(){var e=Object(u.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.h)(Object(j.d)(f,"todos",t.id),{title:n});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.h)(Object(j.d)(f,"todos",t.id),{completed:!t.completed});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(Object(j.d)(f,"todos",t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"todo_container",children:n.map((function(e){return Object(v.jsx)(I,{todo:e,toggleComplete:i,handleDelete:b,handleEdit:o},e.id)}))})},J=function(){return Object(v.jsx)(a.a.Fragment,{children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(g.d,{children:[Object(v.jsx)(g.b,{path:"/",exact:!0,element:Object(v.jsx)(U,{})}),Object(v.jsx)(g.b,{path:"/AddTodo",exact:!0,element:Object(v.jsx)(A,{})}),Object(v.jsx)(g.b,{path:"/Todo",exact:!0,element:Object(v.jsx)(I,{})})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),L()}},[[72,1,2]]]);
//# sourceMappingURL=main.2d7a8460.chunk.js.map