import{j as t}from"./index-341d7fc4.js";import{u as a,C as e}from"./useChart-3ee6d0d1.js";const o=[{name:"Product A",data:[44,55,41,67,22,43]},{name:"Product B",data:[13,23,20,8,13,27]},{name:"Product C",data:[11,17,15,15,21,14]},{name:"Product D",data:[21,7,25,13,22,8]}];function r(){const r=a({chart:{stacked:!0,zoom:{enabled:!0}},legend:{itemMargin:{vertical:8},position:"right",offsetY:20},plotOptions:{bar:{columnWidth:"16%"}},stroke:{show:!1},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]}});return t.jsx(e,{type:"bar",series:o,options:r,height:320})}export{r as default};
