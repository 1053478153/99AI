import{g as i,E as p,F as f,G as t,aa as x,k as _,K as m,Q as c,R as v,X as a,a0 as k,aq as s,S as d}from"./index-d574bfe0.js";const w={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},h=t("path",{d:"M30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53z",fill:"currentColor"},null,-1),g=[h],b=i({name:"PlayBack",render:function(e,o){return p(),f("svg",w,g)}}),B={class:"pt-1 mr-2 cursor-pointer"},S=i({__name:"titleBar",props:{title:{default:""},des:{default:""},padding:{default:4}},setup(r){const e=r,o=x(),n=_(()=>o.theme==="dark"),u=m();return(y,l)=>(p(),f("div",{class:s(["flex border-b border-[#ebebeb] dark:border-[#ffffff17] py-4 w-full",[`px-${e.padding}`]])},[t("div",B,[c(a(k),{size:"16",class:"text-primary",onClick:l[0]||(l[0]=C=>a(u).push("/"))},{default:v(()=>[c(a(b))]),_:1})]),t("div",null,[t("b",{class:s([[n.value?"text-[#fff]":"text-[#555]"],"text-lg"])},d(e.title),3),t("div",{class:s([[n.value?"text-[#fff]":"text-[#626569]"],"text-truncate text-[#626569] mt-1"])},d(e.des),3)])],2))}});export{S as _};
