import{V as e,ab as t,aa as i,r,Z as l,W as n,ae as a,ay as o,a0 as s,b as c,j as d}from"./index-341d7fc4.js";import{T as m}from"./index-66b633a7.js";const g=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign({},i(e)),{margin:0,padding:0,listStyle:"none",[`${t}-item`]:{position:"relative",margin:0,paddingBottom:e.itemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.itemHeadSize,insetInlineStart:(e.itemHeadSize-e.tailWidth)/2,height:`calc(100% - ${e.itemHeadSize}px)`,borderInlineStart:`${e.tailWidth}px ${e.lineType} ${e.tailColor}`},"&-pending":{[`${t}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${t}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.itemHeadSize,height:e.itemHeadSize,backgroundColor:e.dotBg,border:`${e.dotBorderWidth}px ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:e.itemHeadSize/2,insetInlineStart:e.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.lineWidth,marginInlineStart:e.margin+e.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${t}-item-tail`]:{display:"none"},[`> ${t}-item-content`]:{minHeight:1.2*e.controlHeightLG}}},[`&${t}-alternate,\n        &${t}-right,\n        &${t}-label`]:{[`${t}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:`-${e.marginXXS}px`,"&-custom":{marginInlineStart:e.tailWidth/2}},"&-left":{[`${t}-item-content`]:{insetInlineStart:`calc(50% - ${e.marginXXS}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}},"&-right":{[`${t}-item-content`]:{width:`calc(50% - ${e.marginSM}px)`,margin:0,textAlign:"end"}}}},[`&${t}-right`]:{[`${t}-item-right`]:{[`${t}-item-tail,\n            ${t}-item-head,\n            ${t}-item-head-custom`]:{insetInlineStart:`calc(100% - ${(e.itemHeadSize+e.tailWidth)/2}px)`},[`${t}-item-content`]:{width:`calc(100% - ${e.itemHeadSize+e.marginXS}px)`}}},[`&${t}-pending\n        ${t}-item-last\n        ${t}-item-tail`]:{display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.tailWidth}px dotted ${e.tailColor}`},[`&${t}-reverse\n        ${t}-item-last\n        ${t}-item-tail`]:{display:"none"},[`&${t}-reverse ${t}-item-pending`]:{[`${t}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.tailWidth}px dotted ${e.tailColor}`},[`${t}-item-content`]:{minHeight:1.2*e.controlHeightLG}},[`&${t}-label`]:{[`${t}-item-label`]:{position:"absolute",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.tailWidth,width:`calc(50% - ${e.marginSM}px)`,textAlign:"end"},[`${t}-item-right`]:{[`${t}-item-label`]:{insetInlineStart:`calc(50% + ${e.marginSM}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${t}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},h=e("Timeline",(e=>{const i=t(e,{itemHeadSize:10,customHeadPaddingVertical:e.paddingXXS,paddingInlineEnd:2});return[g(i)]}),(e=>({tailColor:e.colorSplit,tailWidth:e.lineWidthBold,dotBorderWidth:e.wireframe?e.lineWidthBold:3*e.lineWidth,dotBg:e.colorBgContainer,itemPaddingBottom:1.25*e.padding})));var p=globalThis&&globalThis.__rest||function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(i[r[l]]=e[r[l]])}return i};const x=e=>{var{prefixCls:t,className:i,color:a="blue",dot:o,pending:s=!1,position:c,label:d,children:m}=e,g=p(e,["prefixCls","className","color","dot","pending","position","label","children"]);const{getPrefixCls:h}=r.useContext(l),x=h("timeline",t),b=n(`${x}-item`,{[`${x}-item-pending`]:s},i),$=/blue|red|green|gray/.test(a||"")?void 0:a,f=n(`${x}-item-head`,{[`${x}-item-head-custom`]:!!o,[`${x}-item-head-${a}`]:!$});return r.createElement("li",Object.assign({},g,{className:b}),d&&r.createElement("div",{className:`${x}-item-label`},d),r.createElement("div",{className:`${x}-item-tail`}),r.createElement("div",{className:f,style:{borderColor:$,color:$}},o),r.createElement("div",{className:`${x}-item-content`},m))};var b=globalThis&&globalThis.__rest||function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(i[r[l]]=e[r[l]])}return i};const $=e=>{var{prefixCls:t,className:i,pending:l=!1,children:s,items:c,rootClassName:d,reverse:m=!1,direction:g,hashId:h,pendingDot:p,mode:$=""}=e,f=b(e,["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"]);const u=(e,i)=>"alternate"===$?"right"===e?`${t}-item-right`:"left"===e||i%2==0?`${t}-item-left`:`${t}-item-right`:"left"===$?`${t}-item-left`:"right"===$||"right"===e?`${t}-item-right`:"",y=a(c||[]),S="boolean"==typeof l?null:l;l&&y.push({pending:!!l,dot:p||r.createElement(o,null),children:S}),m&&y.reverse();const v=y.length,O=`${t}-item-last`,j=y.filter((e=>!!e)).map(((e,t)=>{var i;const a=t===v-2?O:"",o=t===v-1?O:"",{className:s}=e,c=b(e,["className"]);return r.createElement(x,Object.assign({},c,{className:n([s,!m&&l?a:o,u(null!==(i=null==e?void 0:e.position)&&void 0!==i?i:"",t)]),key:(null==e?void 0:e.key)||t}))})),N=y.some((e=>!!(null==e?void 0:e.label))),C=n(t,{[`${t}-pending`]:!!l,[`${t}-reverse`]:!!m,[`${t}-${$}`]:!!$&&!N,[`${t}-label`]:N,[`${t}-rtl`]:"rtl"===g},i,d,h);return r.createElement("ul",Object.assign({},f,{className:C}),j)};var f=globalThis&&globalThis.__rest||function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(i[r[l]]=e[r[l]])}return i};const u=e=>{const{getPrefixCls:t,direction:i,timeline:a}=r.useContext(l),{prefixCls:o,children:c,items:d,className:m,style:g}=e,p=f(e,["prefixCls","children","items","className","style"]),x=t("timeline",o),[b,u]=h(x),y=function(e,t){return e&&Array.isArray(e)?e:s(t).map((e=>{var t,i;return Object.assign({children:null!==(i=null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.children)&&void 0!==i?i:""},e.props)}))}(d,c);return b(r.createElement($,Object.assign({},p,{className:n(null==a?void 0:a.className,m),style:Object.assign(Object.assign({},null==a?void 0:a.style),g),prefixCls:x,direction:i,items:y,hashId:u})))};u.Item=x;const y=u;function S(){const e=c();return d.jsx(y,{items:[{color:e.colorPrimary,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(m.Text,{strong:!0,children:"1983, orders,$4220"}),d.jsx(m.Text,{type:"secondary",className:"text-xs",children:"08 Oct 2023 7:19 PM"})]})},{color:e.colorPrimaryActive,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(m.Text,{strong:!0,children:"12 Invoices have been paid"}),d.jsx(m.Text,{type:"secondary",className:"text-xs",children:"07 Oct 2023 6:19 PM"})]})},{color:e.colorInfo,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(m.Text,{strong:!0,children:"Order #37745 from September"}),d.jsx(m.Text,{type:"secondary",className:"text-xs",children:"06 Oct 2023 5:19 PM"})]})},{color:e.colorWarning,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(m.Text,{strong:!0,children:"New order placed #XF-2356"}),d.jsx(m.Text,{type:"secondary",className:"text-xs",children:"05 Oct 2023 4:19 PM"})]})},{color:e.colorError,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(m.Text,{strong:!0,children:"New order placed #XF-2346"}),d.jsx(m.Text,{type:"secondary",className:"text-xs",children:"04 Oct 2023 3:19 PM"})]})}]})}export{S as default};
