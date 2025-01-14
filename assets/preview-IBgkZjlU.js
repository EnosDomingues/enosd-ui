import{d as H}from"./index-ogSvIofg.js";const{useEffect:h,useMemo:E}=__STORYBOOK_MODULE_PREVIEW_API__,{global:K}=__STORYBOOK_MODULE_GLOBAL__,{logger:X}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var g="backgrounds",C={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:b,window:T}=K,I=()=>{var r;return!!((r=T==null?void 0:T.matchMedia("(prefers-reduced-motion: reduce)"))!=null&&r.matches)},O=r=>{(Array.isArray(r)?r:[r]).forEach(N)},N=r=>{var o;let e=b.getElementById(r);e&&((o=e.parentElement)==null||o.removeChild(e))},z=(r,e)=>{let o=b.getElementById(r);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let t=b.createElement("style");t.setAttribute("id",r),t.innerHTML=e,b.head.appendChild(t)}},j=(r,e,o)=>{var a;let t=b.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=b.createElement("style");n.setAttribute("id",r),n.innerHTML=e;let i=`addon-backgrounds-grid${o?`-docs-${o}`:""}`,d=b.getElementById(i);d?(a=d.parentElement)==null||a.insertBefore(n,d):b.head.appendChild(n)}},W={cellSize:100,cellAmount:10,opacity:.8},G="addon-backgrounds",R="addon-backgrounds-grid",q=I()?"":"transition: background-color 0.3s;",J=(r,e)=>{let{globals:o,parameters:t,viewMode:a,id:n}=e,{options:i=C,disable:d,grid:s=W}=t[g]||{},u=o[g]||{},c=u.value,l=c?i[c]:void 0,$=(l==null?void 0:l.value)||"transparent",m=u.grid||!1,y=!!l&&!d,f=a==="docs"?`#anchor--${n} .docs-story`:".sb-show-main",_=a==="docs"?`#anchor--${n} .docs-story`:".sb-show-main",P=t.layout===void 0||t.layout==="padded",w=a==="docs"?20:P?16:0,{cellAmount:k,cellSize:p,opacity:x,offsetX:S=w,offsetY:v=w}=s,A=a==="docs"?`${G}-docs-${n}`:`${G}-color`,L=a==="docs"?n:null;h(()=>{let M=`
    ${f} {
      background: ${$} !important;
      ${q}
      }`;if(!y){O(A);return}j(A,M,L)},[f,A,L,y,$]);let B=a==="docs"?`${R}-docs-${n}`:`${R}`;return h(()=>{if(!m){O(B);return}let M=[`${p*k}px ${p*k}px`,`${p*k}px ${p*k}px`,`${p}px ${p}px`,`${p}px ${p}px`].join(", "),Y=`
        ${_} {
          background-size: ${M} !important;
          background-position: ${S}px ${v}px, ${S}px ${v}px, ${S}px ${v}px, ${S}px ${v}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${x}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${x}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${x/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${x/2}) 1px, transparent 1px) !important;
        }
      `;z(B,Y)},[k,p,_,B,m,S,v,x]),r()},Q=(r,e=[],o)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r)||r)return r;let t=e.find(a=>a.name===o);if(t)return t.value;if(o){let a=e.map(n=>n.name).join(", ");X.warn(H`
        Backgrounds Addon: could not find the default color "${o}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},Z=(r,e)=>{var c;let{globals:o,parameters:t}=e,a=(c=o[g])==null?void 0:c.value,n=t[g],i=E(()=>n.disable?"transparent":Q(a,n.values,n.default),[n,a]),d=E(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=E(()=>`
      ${s} {
        background: ${i} !important;
        ${I()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return h(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!d){O(l);return}j(l,u,e.viewMode==="docs"?e.id:null)},[d,u,e]),r()},V=(r,e)=>{var y;let{globals:o,parameters:t}=e,a=t[g].grid,n=((y=o[g])==null?void 0:y.grid)===!0&&a.disable!==!0,{cellAmount:i,cellSize:d,opacity:s}=a,u=e.viewMode==="docs",c=t.layout===void 0||t.layout==="padded"?16:0,l=a.offsetX??(u?20:c),$=a.offsetY??(u?20:c),m=E(()=>{let f=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${d*i}px ${d*i}px`,`${d*i}px ${d*i}px`,`${d}px ${d}px`,`${d}px ${d}px`].join(", ");return`
      ${f} {
        background-size: ${_} !important;
        background-position: ${l}px ${$}px, ${l}px ${$}px, ${l}px ${$}px, ${l}px ${$}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[d]);return h(()=>{let f=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!n){O(f);return}z(f,m)},[n,m,e]),r()},U=FEATURES!=null&&FEATURES.backgroundsStoryGlobals?[J]:[V,Z],D={[g]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!(FEATURES!=null&&FEATURES.backgroundsStoryGlobals)&&{values:Object.values(C)}}},ee={[g]:{value:void 0,grid:!1}},F=FEATURES!=null&&FEATURES.backgroundsStoryGlobals?ee:{[g]:null};const ae=Object.freeze(Object.defineProperty({__proto__:null,decorators:U,initialGlobals:F,parameters:D},Symbol.toStringTag,{value:"Module"})),te=Object.freeze(Object.defineProperty({__proto__:null,decorators:U,initialGlobals:F,parameters:D},Symbol.toStringTag,{value:"Module"}));export{te as a,ae as p};
