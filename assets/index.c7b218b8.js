function l(t,s){const n=Object(s).className,r=Object(s).attr||"focus-within",f=Object(s).force,c=[];try{if(t.querySelector(":focus-within"),!f)return a}catch{}function o(){let i;for(;i=c.pop();)r&&i.removeAttribute(r),n&&i.classList.remove(n);let e=t.activeElement;if(!/^(#document|HTML|BODY)$/.test(Object(e).nodeName))for(;e&&e.nodeType===1;)r&&e.setAttribute(r,""),n&&e.classList.add(n),c.push(e),e=e.parentNode}function a(){t.addEventListener("focus",o,!0),t.addEventListener("blur",o,!0)}return function i(){/m/.test(t.readyState)?t.removeEventListener("readystatechange",i)|a():t.addEventListener("readystatechange",i)}(),a}export{l as f};
