(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var c=s(4),a=s.n(c),l=s(1),d=(s(9),s(10),s(2)),i=s.n(d);function o(e){return fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json").then((e=>e.json()))}const n=()=>o("/todos");var r=s(0);const j=e=>{let{todos:t,selectedTodo:s,setSelectedTodo:c,setSelectedUser:a,setModalLoading:l}=e;const d=e=>()=>{l(!0),c(e),setTimeout((()=>{var t;(t=e.userId,o("/users/".concat(t))).then(a).finally((()=>{l(!1)}))}),300)};return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{"aria-label":"Icon",children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{"aria-label":"Empty"})]})}),Object(r.jsx)("tbody",{children:t.map((e=>Object(r.jsxs)("tr",{"data-cy":"todo",className:i()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:i()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{"aria-label":"ModalBtnWrapper",className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{onClick:d(e),"data-cy":"selectButton",className:"button",type:"button","aria-label":"ModalBtn",children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:i()("far",{"fa-eye":(null===s||void 0===s?void 0:s.id)!==e.id,"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===e.id})})})})})]},e.id)))})]})},h=e=>{let{filter:t,setFilter:s,search:c,setSearch:a}=e;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{value:t,onChange:e=>{s(e.target.value)},"data-cy":"statusSelect",children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{value:c,onChange:e=>{a(e.target.value)},"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{onClick:()=>{a("")},"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})};s(12);const b=()=>Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})}),m=e=>{let{modalLoading:t,selectedTodo:s,setSelectedTodo:c,selectedUser:a,setSelectedUser:l}=e;return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),t?Object(r.jsx)(b,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===s||void 0===s?void 0:s.id)}),Object(r.jsx)("button",{onClick:()=>{c(null),l(null)},type:"button",className:"delete","data-cy":"modal-close"})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===s||void 0===s?void 0:s.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:i()({"has-text-success":null===s||void 0===s?void 0:s.completed,"has-text-danger":!(null!==s&&void 0!==s&&s.completed)}),children:null!==s&&void 0!==s&&s.completed?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),children:null===a||void 0===a?void 0:a.name})]})]})]})]})},x=()=>{const[e,t]=Object(l.useState)([]),[s,c]=Object(l.useState)("all"),[a,d]=Object(l.useState)(!1),[i,o]=Object(l.useState)(!1),[x,u]=Object(l.useState)(null),[O,v]=Object(l.useState)(null),[p,N]=Object(l.useState)("");return Object(l.useEffect)((()=>{d(!0),n().then(t).finally((()=>d(!1)))}),[]),Object(l.useEffect)((()=>{switch(s){case"active":n().then((e=>e.filter((e=>!e.completed&&e.title.toLowerCase().includes(p.toLowerCase()))))).then(t);break;case"completed":n().then((e=>e.filter((e=>e.completed&&e.title.toLowerCase().includes(p.toLowerCase()))))).then(t);break;default:n().then((e=>e.filter((e=>e.title.toLowerCase().includes(p.toLowerCase()))))).then(t)}}),[s,p]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(h,{filter:s,setFilter:c,search:p,setSearch:N})}),Object(r.jsx)("div",{className:"block",children:a?Object(r.jsx)(b,{}):Object(r.jsx)(j,{todos:e,selectedTodo:x,setSelectedTodo:u,setSelectedUser:v,setModalLoading:o})})]})})}),x&&Object(r.jsx)(m,{modalLoading:i,selectedTodo:x,setSelectedTodo:u,selectedUser:O,setSelectedUser:v})]})};a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.800dc506.chunk.js.map