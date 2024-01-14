import{V as e,ab as t,bQ as r,aa as o,c1 as n,c2 as a,r as l,Z as i,W as s,c3 as c,a2 as p,bo as d}from"./index-341d7fc4.js";const m=e=>e?"function"==typeof e?e():e:null,g=e=>{const{componentCls:t,popoverColor:r,minWidth:a,fontWeightStrong:l,popoverPadding:i,boxShadowSecondary:s,colorTextHeading:c,borderRadiusLG:p,zIndexPopup:d,marginXS:m,colorBgElevated:g,popoverBg:u}=e;return[{[t]:Object.assign(Object.assign({},o(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":g,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:u,backgroundClip:"padding-box",borderRadius:p,boxShadow:s,padding:i},[`${t}-title`]:{minWidth:a,marginBottom:m,color:c,fontWeight:l},[`${t}-inner-content`]:{color:r}})},n(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},u=e=>{const{componentCls:t}=e;return{[t]:a.map((r=>{const o=e[`${r}6`];return{[`&${t}-${r}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}}))}},b=e=>{const{componentCls:t,lineWidth:r,lineType:o,colorSplit:n,paddingSM:a,controlHeight:l,fontSize:i,lineHeight:s,padding:c}=e,p=l-Math.round(i*s);return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${p/2}px ${c}px ${p/2-r}px`,borderBottom:`${r}px ${o} ${n}`},[`${t}-inner-content`]:{padding:`${a}px ${c}px`}}}},y=e("Popover",(e=>{const{colorBgElevated:o,colorText:n,wireframe:a}=e,l=t(e,{popoverPadding:12,popoverBg:o,popoverColor:n});return[g(l),u(l),a&&b(l),r(l,"zoom-big")]}),(e=>({width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30})),{resetStyle:!1,deprecatedTokens:[["width","minWidth"]]});var v=globalThis&&globalThis.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};const f=e=>{const{hashId:t,prefixCls:r,className:o,style:n,placement:a="top",title:i,content:p,children:d}=e;return l.createElement("div",{className:s(t,r,`${r}-pure`,`${r}-placement-${a}`,o),style:n},l.createElement("div",{className:`${r}-arrow`}),l.createElement(c,Object.assign({},e,{className:t,prefixCls:r}),d||((e,t,r)=>{if(t||r)return l.createElement(l.Fragment,null,t&&l.createElement("div",{className:`${e}-title`},m(t)),l.createElement("div",{className:`${e}-inner-content`},m(r)))})(r,i,p)))},x=e=>{const{prefixCls:t}=e,r=v(e,["prefixCls"]),{getPrefixCls:o}=l.useContext(i),n=o("popover",t),[a,s]=y(n);return a(l.createElement(f,Object.assign({},r,{prefixCls:n,hashId:s})))};var h=globalThis&&globalThis.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};const $=e=>{let{title:t,content:r,prefixCls:o}=e;return l.createElement(l.Fragment,null,t&&l.createElement("div",{className:`${o}-title`},m(t)),l.createElement("div",{className:`${o}-inner-content`},m(r)))},C=l.forwardRef(((e,t)=>{const{prefixCls:r,title:o,content:n,overlayClassName:a,placement:c="top",trigger:m="hover",mouseEnterDelay:g=.1,mouseLeaveDelay:u=.1,overlayStyle:b={}}=e,v=h(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:f}=l.useContext(i),x=f("popover",r),[C,O]=y(x),w=f(),E=s(a,O);return C(l.createElement(p,Object.assign({placement:c,trigger:m,mouseEnterDelay:g,mouseLeaveDelay:u,overlayStyle:b},v,{prefixCls:x,overlayClassName:E,ref:t,overlay:o||n?l.createElement($,{prefixCls:x,title:o,content:n}):null,transitionName:d(w,"zoom-big",v.transitionName),"data-popover-inject":!0})))}));C._InternalPanelDoNotUseOrYouWillBeFired=x;const O=C;export{O as P,x as a,m as g};
