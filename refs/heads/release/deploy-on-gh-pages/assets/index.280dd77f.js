import{n as g,R as m,j as v,v as d}from"./vendor.84677dc6.js";var y=g("blue","green","red","textIconHighOnDark","textIconHighOnLight","textIconLowOnDark","textIconLowOnLight","yellow"),h=g("xSmall","small","medium","large"),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)},b=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r},l=m.forwardRef(function(e,n){var r=e.className,t=e.size,a=t===void 0?h.medium:t,i=e.color,c=b(e,["className","size","color"]);return m.createElement("span",u({},c,{className:v("psds-icon","psds-icon--size-"+d(a),i&&"psds-icon--color-"+d(i),r),ref:n}))});l.displayName="Icon";l.colors=y;l.sizes=h;const p=l;function w(e,n){const r=Object(n).className,t=Object(n).attr||"focus-within",a=Object(n).force,i=[];try{if(e.querySelector(":focus-within"),!a)return f}catch{}function c(){let o;for(;o=i.pop();)t&&o.removeAttribute(t),r&&o.classList.remove(r);let s=e.activeElement;if(!/^(#document|HTML|BODY)$/.test(Object(s).nodeName))for(;s&&s.nodeType===1;)t&&s.setAttribute(t,""),r&&s.classList.add(r),i.push(s),s=s.parentNode}function f(){e.addEventListener("focus",c,!0),e.addEventListener("blur",c,!0)}return function o(){/m/.test(e.readyState)?e.removeEventListener("readystatechange",o)|f():e.addEventListener("readystatechange",o)}(),f}export{p as I,w as f,h as s};
//# sourceMappingURL=index.280dd77f.js.map
