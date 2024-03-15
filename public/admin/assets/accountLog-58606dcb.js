
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as F}from"./index-38e73db4.js";import{Y as x,d as G,r as _,Q as R,x as H,h as r,R as O,o as u,c as h,e as a,f as t,S as M,U as P,b as m,l as d,w as $,I as C,t as w,P as Q,q}from"./index-b779f4e0.js";import{r as J,s as K,U as W,p as X}from"./index-7b2ba868.js";import{u as Z}from"./utcformatTime-e76e5157.js";const ee={upgradeBalance:g=>x.post("balance/upgradeBalance",g),queryUserAccountLog:g=>x.get("balance/accountLog",{params:g})},ae=G({__name:"accountLog",setup(g){const T=_(),A=_(0),f=_(!1),n=R({userId:"",rechargeType:"",packageId:"",page:1,size:15});R({model3Count:[{required:!0,message:"请填写赠送基础模型额度",trigger:"blur"}],model4Count:[{required:!0,message:"请填写赠送高级模型额度",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写赠送绘画积分额度",trigger:"blur"}]});const U=_([]),S=_([]);async function i(){try{f.value=!0;const s=await ee.queryUserAccountLog(n),{rows:l,count:b}=s.data;f.value=!1,A.value=b,S.value=l}catch{f.value=!1}}async function D(s){const l=await Q.queryAllUser({size:30,keyword:s});U.value=l.data.rows}function V(s){s==null||s.resetFields(),i()}return H(()=>i()),(s,l)=>{const b=r("el-option"),k=r("el-select"),y=r("el-form-item"),z=r("el-button"),Y=r("el-form"),I=F,L=r("el-avatar"),o=r("el-table-column"),v=r("el-tag"),B=r("el-table"),E=r("el-pagination"),j=r("el-row"),N=O("loading");return u(),h("div",null,[a(I,null,{default:t(()=>[a(Y,{ref_key:"formRef",ref:T,inline:!0,model:n},{default:t(()=>[a(y,{label:"用户名称",prop:"userId"},{default:t(()=>[a(k,{modelValue:n.userId,"onUpdate:modelValue":l[0]||(l[0]=e=>n.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"昵称|手机号|邮箱[模糊搜索]","remote-show-suffix":"","remote-method":D},{default:t(()=>[(u(!0),h(M,null,P(U.value,e=>(u(),C(b,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(y,{label:"充值类型",prop:"rechargeType"},{default:t(()=>[a(k,{modelValue:n.rechargeType,"onUpdate:modelValue":l[1]||(l[1]=e=>n.rechargeType=e),placeholder:"请选择充值类型",clearable:""},{default:t(()=>[(u(!0),h(M,null,P(m(J),e=>(u(),C(b,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(y,null,{default:t(()=>[a(z,{type:"primary",onClick:i},{default:t(()=>[d(" 查询 ")]),_:1}),a(z,{onClick:l[2]||(l[2]=e=>V(T.value))},{default:t(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(I,{style:{width:"100%"}},{default:t(()=>[$((u(),C(B,{border:"",data:S.value,style:{width:"100%"},size:"large"},{default:t(()=>[a(o,{prop:"avatar",label:"用户头像",width:"120",fixed:""},{default:t(e=>[a(L,{src:e.row.avatar},null,8,["src"])]),_:1}),a(o,{prop:"username",label:"用户名称",width:"150",fixed:""}),a(o,{prop:"id",label:"用户ID",width:"80"}),a(o,{prop:"uid",label:"订单ID",width:"130"}),a(o,{prop:"email",label:"用户邮箱",width:"250",align:"left"}),a(o,{prop:"balanceInfo.useModel4Count",label:"充值类型",width:"160",align:"center"},{default:t(e=>[a(v,{type:"success"},{default:t(()=>{var c,p;return[d(w((c=e.row)!=null&&c.rechargeType?m(K)[(p=e.row)==null?void 0:p.rechargeType]:"---"),1)]}),_:2},1024)]),_:1}),a(o,{prop:"model3Count",label:"基础模型额度",width:"120",align:"center"}),a(o,{prop:"model4Count",label:"高级模型额度",width:"120",align:"center"}),a(o,{prop:"drawMjCount",label:"绘画余额额度",width:"120",align:"center"}),a(o,{label:"额度有效期",width:"170",align:"center"},{default:t(e=>[a(v,{type:"success"},{default:t(()=>{var c,p;return[d(w(((c=e.row)==null?void 0:c.days)<=0?"永久时效":`${(p=e.row)==null?void 0:p.days}天`),1)]}),_:2},1024)]),_:1}),a(o,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:t(({row:e})=>[a(v,{type:m(W)[e.status]},{default:t(()=>[d(w(m(X)[e.status]),1)]),_:2},1032,["type"])]),_:1}),a(o,{prop:"createdAt",label:"充值时间",width:"200",align:"center"},{default:t(e=>[d(w(m(Z)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1})]),_:1},8,["data"])),[[N,f.value]]),a(j,{class:"flex justify-end mt-5"},{default:t(()=>[a(E,{"current-page":n.page,"onUpdate:currentPage":l[3]||(l[3]=e=>n.page=e),"page-size":n.size,"onUpdate:pageSize":l[4]||(l[4]=e=>n.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:A.value,onSizeChange:i,onCurrentChange:i},null,8,["current-page","page-size","total"])]),_:1})]),_:1})])}}});typeof q=="function"&&q(ae);export{ae as default};
