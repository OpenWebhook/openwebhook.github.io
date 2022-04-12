import{R as t,A as f,I as k,H as g,G as v,c as E,s as L,g as y,r as h,a as S,b as _,T as d,d as b,e as w}from"./vendor.468df05f.js";const U=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};U();const I="modulepreload",m={},P="/",u=function(s,l){return!l||l.length===0?s():Promise.all(l.map(r=>{if(r=`${P}${r}`,r in m)return;m[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":I,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((c,a)=>{n.addEventListener("load",c),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())};const R=t.createContext({value:"http://localhost:8010/proxy",setValue:i=>{}}),x=t.createContext({value:"https://webhook-store.herokuapp.com",setValue:i=>{}}),A=i=>{const l=`${new URL(i).origin}/graphql`,r=l.replace("http","ws"),e=new g({uri:l}),o=new v(E({url:r})),n=L(({query:c})=>{const a=y(c);return a.kind==="OperationDefinition"&&a.operation==="subscription"},o,e);return new f({link:n,cache:new k})},p=(i,s)=>{const l=localStorage.getItem(i)||s,[r,e]=h.exports.useState(l);return[r,n=>{localStorage.setItem(i,n),e(n)}]},C=t.lazy(()=>u(()=>import("./index.f35d62ea.js"),["assets/index.f35d62ea.js","assets/index.d0231cc2.css","assets/index.c7b218b8.js","assets/vendor.468df05f.js","assets/index.b54d98b0.js","assets/index.7175b481.css"])),W=t.lazy(()=>u(()=>import("./TopNav.c15865b1.js"),["assets/TopNav.c15865b1.js","assets/TopNav.b4c995c7.css","assets/vendor.468df05f.js","assets/index.c7b218b8.js","assets/index.0c90d46f.js","assets/index.0fdc6c41.css","assets/index.b54d98b0.js","assets/index.7175b481.css"])),V=t.lazy(()=>u(()=>import("./WebhookList.component.0d681a94.js"),["assets/WebhookList.component.0d681a94.js","assets/WebhookList.component.3ed40be7.css","assets/vendor.468df05f.js","assets/index.b54d98b0.js","assets/index.7175b481.css","assets/index.0c90d46f.js","assets/index.0fdc6c41.css"]));function O(){const[i,s]=p("redirectUrl","http://localhost:8010/proxy"),[l,r]=p("webhookStoreUrl","https://webhook-store.herokuapp.com");return t.createElement(S,{domain:"sammyt.eu.auth0.com",clientId:"paWK0IJDaDkB24vqfDBiyPsWfoVzF3GK",redirectUri:window.location.origin},t.createElement(x.Provider,{value:{value:l,setValue:r}},t.createElement(_,{client:A(l)},t.createElement(d,{name:d.names.dark},t.createElement(R.Provider,{value:{value:i,setValue:s}},t.createElement(h.exports.Suspense,{fallback:t.createElement("div",null,"Loading...")},t.createElement(C,{topnav:()=>t.createElement(W,null)},t.createElement("div",{style:{background:b}},t.createElement(V,null)))))))))}const D=w.createRoot(document.getElementById("root"));D.render(t.createElement(t.StrictMode,null,t.createElement(O,null)));export{R,x as W};
