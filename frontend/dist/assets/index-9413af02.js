import{ct as e,r as t,u as s,j as a,K as n,M as i,cq as r,t as l,h as o}from"./index-bf9e6d4f.js";import{u as d,a as m,P as c,s as u,T as x,S as j}from"./index-5356bb7a.js";import{F as h}from"./index-a40323c6.js";import{T as p,E as f}from"./index-ead1f62e.js";import{R as k,C as g}from"./row-9f8f79ca.js";import{D as N}from"./DeleteOutlined-e3c1db3c.js";import"./Pagination-2f975caa.js";import"./index-e747db76.js";import"./index-9895c5ad.js";import"./index-7d8e8970.js";import"./extendsObject-8d078517.js";import"./useChart-5246da61.js";import"./index-97abac36.js";import"./ReloadOutlined-5f8e4dc0.js";function y(){const y=d(),w=m(),{t:q}=s(),I=function(){const[s]=e();return t.useMemo((()=>s),[s])}(),[S]=h.useForm(),C=h.useWatch("email",S),T=h.useWatch("uniqueName",S),[O,b]=t.useState(void 0),[v,F]=t.useState({formValue:{accountId:-1,uniqueName:"",password:"",comment:""},title:q("token.edit"),show:!1,onOk:e=>{F((e=>({...e,show:!1})))},onCancel:()=>{F((e=>({...e,show:!1})))}});t.useEffect((()=>{S.setFieldValue("email",I.get("email"))}),[I]);const W=[{title:q("token.email"),dataIndex:"email",render:e=>a.jsx(p.Text,{style:{maxWidth:200},ellipsis:!0,children:e})},{title:"Unique Name",dataIndex:"uniqueName",align:"center",width:120},{title:q("token.password"),dataIndex:"password",align:"center",width:120},{title:"Share Token",dataIndex:"shareToken",align:"center",render:e=>a.jsx(n,{value:e,readOnly:!0})},{title:q("token.comment"),dataIndex:"comment",align:"center",render:e=>a.jsx(p.Text,{style:{maxWidth:500},ellipsis:!0,children:e})},{title:q("token.action"),key:"operation",align:"center",render:(e,t)=>a.jsxs(i.Group,{children:[a.jsx(i,{icon:a.jsx(f,{}),type:"primary",onClick:()=>z(t)}),a.jsx(c,{title:q("token.deleteConfirm"),okText:"Yes",cancelText:"No",placement:"left",onConfirm:()=>K(t),children:a.jsx(i,{icon:a.jsx(N,{}),type:"primary",loading:O==t.accountId+t.uniqueName,danger:!0})})]})}],z=e=>{F({formValue:e,title:q("token.edit"),show:!0,onOk:(e,t)=>{w.mutate(e,{onSuccess:()=>{F((e=>({...e,show:!1})))},onSettled:()=>t(!1)})},onCancel:()=>{F((e=>({...e,show:!1})))}})},K=e=>{b(e.accountId+e.uniqueName),y.mutate(e,{onSettled:()=>{b(void 0)}})},{data:L}=r({queryKey:["shareList",C,T],queryFn:()=>u.searchShare(C,T)});return a.jsxs(l,{direction:"vertical",size:"large",className:"w-full",children:[a.jsx(o,{children:a.jsx(h,{form:S,children:a.jsxs(k,{gutter:[16,16],children:[a.jsx(g,{span:6,lg:6,children:a.jsx(h.Item,{label:q("token.email"),name:"email",className:"!mb-0",children:a.jsx(n,{})})}),a.jsx(g,{span:6,lg:6,children:a.jsx(h.Item,{label:"Unique Name",name:"uniqueName",className:"!mb-0",children:a.jsx(n,{})})}),a.jsx(g,{span:12,lg:12,children:a.jsxs("div",{className:"flex justify-end",children:[a.jsx(i,{onClick:()=>{S.resetFields()},children:q("token.reset")}),a.jsx(i,{type:"primary",className:"ml-4",onClick:()=>{S.validateFields().then((e=>{S.submit()}))},children:q("token.search")})]})})]})})}),a.jsx(o,{title:q("token.shareList"),children:a.jsx(x,{rowKey:e=>e.accountId+e.uniqueName,size:"small",scroll:{x:"max-content"},pagination:{pageSize:10},columns:W,dataSource:L})}),a.jsx(j,{...v})]})}export{y as default};