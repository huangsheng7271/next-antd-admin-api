import{ct as e,r as t,u as s,j as a,K as n,M as i,cq as r,t as l,h as o}from"./index-341d7fc4.js";import{u as d,a as m,P as c,s as u,T as x,S as j}from"./index-884423d6.js";import{F as h}from"./index-f7870f3e.js";import{T as p,E as f}from"./index-66b633a7.js";import{R as k,C as g}from"./row-73963857.js";import{D as N}from"./DeleteOutlined-6dac8265.js";import"./Pagination-60d9fcbd.js";import"./index-647c550e.js";import"./index-a09c7301.js";import"./index-126a88c7.js";import"./extendsObject-8d078517.js";import"./useChart-3ee6d0d1.js";import"./index-66228a22.js";import"./ReloadOutlined-e93f373b.js";function y(){const y=d(),w=m(),{t:q}=s(),I=function(){const[s]=e();return t.useMemo((()=>s),[s])}(),[S]=h.useForm(),C=h.useWatch("email",S),T=h.useWatch("uniqueName",S),[O,b]=t.useState(void 0),[v,F]=t.useState({formValue:{accountId:-1,uniqueName:"",password:"",comment:""},title:q("token.edit"),show:!1,onOk:e=>{F((e=>({...e,show:!1})))},onCancel:()=>{F((e=>({...e,show:!1})))}});t.useEffect((()=>{S.setFieldValue("email",I.get("email"))}),[I]);const W=[{title:q("token.email"),dataIndex:"email",render:e=>a.jsx(p.Text,{style:{maxWidth:200},ellipsis:!0,children:e})},{title:"Unique Name",dataIndex:"uniqueName",align:"center",width:120},{title:q("token.password"),dataIndex:"password",align:"center",width:120},{title:"Share Token",dataIndex:"shareToken",align:"center",render:e=>a.jsx(n,{value:e,readOnly:!0})},{title:q("token.comment"),dataIndex:"comment",align:"center",render:e=>a.jsx(p.Text,{style:{maxWidth:500},ellipsis:!0,children:e})},{title:q("token.action"),key:"operation",align:"center",render:(e,t)=>a.jsxs(i.Group,{children:[a.jsx(i,{icon:a.jsx(f,{}),type:"primary",onClick:()=>z(t)}),a.jsx(c,{title:q("token.deleteConfirm"),okText:"Yes",cancelText:"No",placement:"left",onConfirm:()=>K(t),children:a.jsx(i,{icon:a.jsx(N,{}),type:"primary",loading:O==t.accountId+t.uniqueName,danger:!0})})]})}],z=e=>{F({formValue:e,title:q("token.edit"),show:!0,onOk:(e,t)=>{w.mutate(e,{onSuccess:()=>{F((e=>({...e,show:!1})))},onSettled:()=>t(!1)})},onCancel:()=>{F((e=>({...e,show:!1})))}})},K=e=>{b(e.accountId+e.uniqueName),y.mutate(e,{onSettled:()=>{b(void 0)}})},{data:L}=r({queryKey:["shareList",C,T],queryFn:()=>u.searchShare(C,T)});return a.jsxs(l,{direction:"vertical",size:"large",className:"w-full",children:[a.jsx(o,{children:a.jsx(h,{form:S,children:a.jsxs(k,{gutter:[16,16],children:[a.jsx(g,{span:6,lg:6,children:a.jsx(h.Item,{label:q("token.email"),name:"email",className:"!mb-0",children:a.jsx(n,{})})}),a.jsx(g,{span:6,lg:6,children:a.jsx(h.Item,{label:"Unique Name",name:"uniqueName",className:"!mb-0",children:a.jsx(n,{})})}),a.jsx(g,{span:12,lg:12,children:a.jsxs("div",{className:"flex justify-end",children:[a.jsx(i,{onClick:()=>{S.resetFields()},children:q("token.reset")}),a.jsx(i,{type:"primary",className:"ml-4",onClick:()=>{S.validateFields().then((e=>{S.submit()}))},children:q("token.search")})]})})]})})}),a.jsx(o,{title:q("token.shareList"),children:a.jsx(x,{rowKey:e=>e.accountId+e.uniqueName,size:"small",scroll:{x:"max-content"},pagination:{pageSize:10},columns:W,dataSource:L})}),a.jsx(j,{...v})]})}export{y as default};
