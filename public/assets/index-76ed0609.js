import{_ as q}from"./titleBar.vue_vue_type_script_setup_true_lang-4cc0cc4f.js";import{g as A,H as D,ap as V,J as $,aC as F,k as _,r as b,L as H,F as d,Q as o,aq as C,X as a,G as e,R as m,N,O as B,P,Z as E,bP as U,E as c,bY as M,b_ as Z,S as l,ac as Q,_ as X,bZ as x,ag as W,ca as Y}from"./index-d574bfe0.js";const K={class:"main min-h-screen bg-center dark:bg-[#2F2E34] h-full flex flex-col overflow-hidden"},ee={key:0,class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 px-4"},te=["onClick"],se={class:"w-full rounded-t-xl overflow-hidden border dark:border-[#ffffff17] relative",style:{height:"40%"}},ae=["src"],ne={class:"absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 text-lg text-[#fff] ]"},oe={class:"p-5 text-lg h-[160px] border-b dark:border-[#ffffff17] overflow-hidden relative"},le={class:"absolute bottom-1 right-2 font-semibold text-red-500 italic"},re={class:"flex p-4 border-b dark:border-[#ffffff17] flex-col space-y-4"},ie={class:"flex justify-between"},de=e("span",null,"基础模型额度",-1),ce={class:"flex justify-between"},fe=e("span",null,"高级模型额度",-1),ue={class:"flex justify-between"},pe=e("span",null,"MJ绘画额度",-1),he={class:"px-4 flex-1 flex items-center justify-between"},ge={class:"flex items-end"},_e=e("span",null,"套餐有效期 ",-1),xe={class:"ml-2 text-[#3076fd] text-lg"},ye=e("div",{class:"line"},null,-1),ve={key:1,class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 px-4"},be={class:"w-full rounded-t-xl overflow-hidden",style:{height:"40%"}},me={class:"p-5 text-lg h-[160px] border-b dark:border-[#ffffff17] overflow-ellipsis"},we={class:"flex p-4 border-b dark:border-[#ffffff17] flex-col space-y-4"},ke={class:"px-4 flex-1 flex items-center justify-between"},Be=A({__name:"index",setup(Se){const p=D(),{isMobile:f}=V(),y=$(),h=F(),j=_(()=>{var n;const t=window.navigator.userAgent.toLowerCase();return t.match(/MicroMessenger/i)&&((n=t==null?void 0:t.match(/MicroMessenger/i))==null?void 0:n[0])==="micromessenger"}),r=_(()=>{const{payHupiStatus:t,payEpayStatus:n,payMpayStatus:s,payWechatStatus:i,payLtzfStatus:v}=p.globalConfig;return Number(i)===1?"wechat":Number(s)===1?"mpay":Number(t)===1?"hupi":Number(n)===1?"epay":Number(v)===1?"ltzf":null}),J=_(()=>{const{payEpayChannel:t,payMpayChannel:n}=p.globalConfig;return r.value==="wechat"?["wxpay"]:r.value==="epay"?t?JSON.parse(t):[]:r.value==="mpay"?n?JSON.parse(n):[]:r.value==="hupi"?["wxpay"]:r.value==="ltzf"?["wxpay"]:[]}),w=b([]),k=b(1),u=b(!1);async function S(){try{u.value=!0;const t=await U({status:1,type:k.value,size:30});w.value=t.data.rows,u.value=!1}catch{u.value=!1}}const I=_(()=>f.value?"尽情探索，欢迎光临我们的在线商店！":"尽情探索，欢迎光临我们的在线商店、感谢您选择我们、让我们一同开启愉悦的购物之旅！");function L(t){k.value=t,S()}async function T(t){J.value.length||y.warning("管理员还未开启支付！"),G(t)}async function G(t){if(j.value&&r.value==="wechat"&&Number(p.globalConfig.payWechatStatus)===1){if(typeof WeixinJSBridge>"u")document.addEventListener?document.addEventListener("WeixinJSBridgeReady",g,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",g),document.attachEvent("onWeixinJSBridgeReady",g));else{const n=await Y({goodsId:t.id,payType:"jsapi"}),{success:s,data:i}=n;s&&g(i)}return}h.updateOrderInfo({pkgInfo:t}),h.updateGoodsDialog(!1),h.updatePayDialog(!0)}function g(t){const{appId:n,timeStamp:s,nonceStr:i,package:v,signType:z,paySign:O}=t;n&&WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:n,timeStamp:s,nonceStr:i,package:v,signType:z,paySign:O},R=>{R.err_msg==="get_brand_wcpay_request:ok"?(y.success("购买成功、祝您使用愉快!"),setTimeout(()=>{p.getUserInfo(),h.updateGoodsDialog(!1)},500)):y.warning("您还没有支付成功哟！")})}return H(()=>{S()}),(t,n)=>(c(),d("div",K,[o(a(q),{title:"会员商场",des:I.value,class:C([a(f)?"px-3":"px-24"])},null,8,["des","class"]),e("div",{class:"flex justify-center items-center",style:N({height:a(f)?"60px":"180px"})},[o(a(Z),{type:"segment",style:N({width:a(f)?"90%":"400px"}),"onUpdate:value":L},{default:m(()=>[o(a(M),{name:1,tab:"会员限时套餐"}),o(a(M),{name:-1,tab:"叠加永久次卡"})]),_:1},8,["style"])],4),e("div",{class:C(["flex-1 pb-10 overflow-y-auto",[a(f)?"px-3":"px-28"]])},[u.value?E("",!0):(c(),d("div",ee,[(c(!0),d(B,null,P(w.value,s=>(c(),d("div",{key:s.id,class:"border dark:border-[#ffffff17] h-[580px] rounded-xl card-item flex flex-col",onClick:i=>T(s)},[e("div",se,[e("img",{src:s.coverImg,class:"object-cover w-full h-full cover",alt:""},null,8,ae),e("div",ne,l(s.name),1)]),e("div",oe,[Q(l(s.des)+" ",1),e("span",le,"￥"+l(s.price),1)]),e("div",re,[e("div",ie,[de,e("span",null,l(s.model3Count||0)+" 积分",1)]),e("div",ce,[fe,e("span",null,l(s.model4Count||0)+" 积分",1)]),e("div",ue,[pe,e("span",null,l(s.drawMjCount||0)+" 积分",1)])]),e("div",he,[e("div",ge,[_e,e("span",xe,l(s.days>0?`${s.days} 天`:"永久"),1)]),ye,e("div",null,[o(a(X),{class:"text-lg right-icon",icon:"bi:arrow-right"})])])],8,te))),128))])),u.value?(c(),d("div",ve,[(c(),d(B,null,P(4,s=>e("div",{key:s,class:"border dark:border-[#ffffff17] h-[580px] rounded-xl card-item flex flex-col"},[e("div",be,[o(a(x),{height:"100%",width:"100%"})]),e("div",me,[o(a(W),{vertical:""},{default:m(()=>[o(a(x),{text:"",repeat:4,width:"100%",sharp:!1})]),_:1})]),e("div",we,[o(a(W),{vertical:""},{default:m(()=>[o(a(x),{text:"",repeat:4,width:"100%",sharp:!1})]),_:1})]),e("div",ke,[o(a(x),{text:"",repeat:1,width:"100%",sharp:!1})])])),64))])):E("",!0)],2)]))}});export{Be as default};
