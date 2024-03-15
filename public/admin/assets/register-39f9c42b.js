
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as q}from"./index-38e73db4.js";import{a as x}from"./config-61dee393.js";import{d as J,Q as T,r as c,B as v,x as B,h as m,o as E,c as h,e,f as l,a as g,l as O,b as i,E as R,q as w}from"./index-b779f4e0.js";const A={class:"flex justify-between"},K=g("b",null,"注册设置",-1),Q=g("h5",null,"注册赠送",-1),z=g("h5",null,"限定注册赠送",-1),F=g("h5",null,"邀请注册赠送",-1),H=g("h5",null,"签到奖励",-1),L=g("h5",null,"访客设置",-1),P=J({__name:"register",setup(W){const t=T({emailRegisterStatus:"",registerSendStatus:"",registerSendModel3Count:"",registerSendModel4Count:"",registerSendDrawMjCount:"",firstRegisterSendStatus:0,firstRegisterSendRank:"",firstRregisterSendModel3Count:"",firstRregisterSendModel4Count:"",firstRregisterSendDrawMjCount:"",inviteSendStatus:1,inviteGiveSendModel3Count:"",inviteGiveSendModel4Count:"",inviteGiveSendDrawMjCount:"",invitedGuestSendModel3Count:"",invitedGuestSendModel4Count:"",invitedGuestSendDrawMjCount:"",signInStatus:"",signInModel3Count:"",signInModel4Count:"",signInMjDrawToken:"",visitorModel3Num:null,visitorModel4Num:null,visitorMJNum:null}),G=c({visitorModel3Num:[{required:!0,trigger:"blur",message:"请填写每日限制的基础模型积分"}],visitorModel4Num:[{required:!0,trigger:"blur",message:"请填写每日限制的高级模型积分"}],visitorMJNum:[{required:!0,trigger:"blur",message:"请填写每日限制的绘画额度积分"}],signInStatus:[{required:!0,trigger:"blur",message:"请选择是否开启签到奖励"}],signInModel3Count:[{required:!0,trigger:"blur",message:"请填写赠送的基础模型额度"}],signInModel4Count:[{required:!0,trigger:"blur",message:"请填写赠送的高级模型额度"}],signInMjDrawToken:[{required:!0,trigger:"blur",message:"请填写赠送的绘画Token数量"}],registerSendStatus:[{required:!0,trigger:"change",message:"请确认是否开启注册赠送"}],firstRegisterSendStatus:[{required:!0,trigger:"change",message:"请确认是否开启优先注册赠送"}],inviteSendStatus:[{required:!0,trigger:"change",message:"请确认是否开启邀请注册赠送"}]}),C=c();async function V(){const s=await x.queryConfig({keys:["visitorModel4Num","visitorModel3Num","visitorMJNum","registerSendStatus","registerSendModel3Count","registerSendModel4Count","registerSendDrawMjCount","firstRegisterSendStatus","firstRegisterSendRank","firstRregisterSendModel3Count","firstRregisterSendModel4Count","firstRregisterSendDrawMjCount","inviteSendStatus","inviteGiveSendModel3Count","inviteGiveSendModel4Count","inviteGiveSendDrawMjCount","invitedGuestSendModel3Count","invitedGuestSendModel4Count","invitedGuestSendDrawMjCount","signInModel3Count","signInModel4Count","signInMjDrawToken"]});s.data.firstRegisterSendStatus&&(s.data.firstRegisterSendStatus=Number(s.data.firstRegisterSendStatus)),s.data.registerSendStatus&&(s.data.registerSendStatus=Number(s.data.registerSendStatus)),Object.assign(t,s.data)}function j(){var s;(s=C.value)==null||s.validate(async n=>{if(n){try{await x.setConfig({settings:D(t)}),R.success("变更配置信息成功")}catch{}V()}else R.error("请填写完整信息")})}function D(s){return Object.keys(s).map(n=>({configKey:n,configVal:s[n]}))}const p=v(()=>[{required:t.firstRegisterSendStatus,message:"开启优先注册赠送选项后需填写此项",trigger:"change"}]),f=v(()=>[{required:Number(t.inviteSendStatus)===1,message:"开启邀请赠送选项后需填写此项",trigger:"change"}]),_=v(()=>[{required:t.registerSendStatus,message:"开启注册赠送选项后需填写此项",trigger:"change"}]);return B(()=>{V()}),(s,n)=>{const b=m("el-alert"),N=q,I=m("el-button"),S=m("el-switch"),d=m("el-form-item"),o=m("el-col"),r=m("el-row"),a=m("el-input"),M=m("el-divider"),U=m("el-tooltip"),y=m("el-form"),k=m("el-card");return E(),h("div",null,[e(N,null,{default:l(()=>[e(b,{closable:!1,"show-icon":"",title:"访问设置说明",description:"注册与访问设置使管理员能够为新用户定义默认赠送额度，涵盖对话次数、普通绘画次数和高级绘画次数。系统还为最初注册的前x名用户提供额外奖励，同时允许通过邀请机制为新用户及邀请者设置特定的奖励额度。此外，管理员可配置签到奖励和为访客分配可使用的额度，以鼓励日常活跃和吸引更多用户体验平台。",type:"success"})]),_:1}),e(k,{style:{margin:"20px"}},{header:l(()=>[g("div",A,[K,e(I,{class:"button",text:"",onClick:j},{default:l(()=>[O(" 保存设置 ")]),_:1})])]),default:l(()=>[e(y,{ref_key:"formRef",ref:C,rules:G.value,model:t,"label-width":"220px"},{default:l(()=>[Q,e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"是否开启注册赠送",prop:"registerSendStatus"},{default:l(()=>[e(S,{modelValue:t.registerSendStatus,"onUpdate:modelValue":n[0]||(n[0]=u=>t.registerSendStatus=u),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"注册赠送基础模型对话额度",prop:"registerSendModel3Count",rules:i(_)},{default:l(()=>[e(a,{modelValue:t.registerSendModel3Count,"onUpdate:modelValue":n[1]||(n[1]=u=>t.registerSendModel3Count=u),placeholder:"首次注册赠基础模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"注册赠送高级模型对话额度",prop:"registerSendModel4Count",rules:i(_)},{default:l(()=>[e(a,{modelValue:t.registerSendModel4Count,"onUpdate:modelValue":n[2]||(n[2]=u=>t.registerSendModel4Count=u),placeholder:"首次注册赠高级模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"注册赠送绘画额度",prop:"registerSendDrawMjCount",rules:i(_)},{default:l(()=>[e(a,{modelValue:t.registerSendDrawMjCount,"onUpdate:modelValue":n[3]||(n[3]=u=>t.registerSendDrawMjCount=u),placeholder:"首次注册赠送MJ额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(M),z,e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"开启优先注册赠送",prop:"firstRegisterSendStatus"},{default:l(()=>[e(S,{modelValue:t.firstRegisterSendStatus,"onUpdate:modelValue":n[4]||(n[4]=u=>t.firstRegisterSendStatus=u),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"前多少名获得奖励",prop:"firstRegisterSendRank",rules:i(p)},{default:l(()=>[e(a,{modelValue:t.firstRegisterSendRank,"onUpdate:modelValue":n[5]||(n[5]=u=>t.firstRegisterSendRank=u),placeholder:"设置优先注册前N名可以获得奖励",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"优先赠基础模型送对话额度",prop:"firstRregisterSendModel3Count",rules:i(p)},{default:l(()=>[e(a,{modelValue:t.firstRregisterSendModel3Count,"onUpdate:modelValue":n[6]||(n[6]=u=>t.firstRregisterSendModel3Count=u),placeholder:"优先注册用户额外赠送基础模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"优先赠高级模型送对话额度",prop:"firstRregisterSendModel4Count",rules:i(p)},{default:l(()=>[e(a,{modelValue:t.firstRregisterSendModel4Count,"onUpdate:modelValue":n[7]||(n[7]=u=>t.firstRregisterSendModel4Count=u),placeholder:"优先注册用户额外赠送高级模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"优先赠送绘画额度",prop:"firstRregisterSendDrawMjCount",rules:i(p)},{default:l(()=>[e(a,{modelValue:t.firstRregisterSendDrawMjCount,"onUpdate:modelValue":n[8]||(n[8]=u=>t.firstRregisterSendDrawMjCount=u),placeholder:"优先注册用户额外赠送MJ额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(M),F,e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"开启邀请注册赠送",prop:"inviteSendStatus"},{default:l(()=>[e(S,{modelValue:t.inviteSendStatus,"onUpdate:modelValue":n[9]||(n[9]=u=>t.inviteSendStatus=u),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"邀请赠送基础模型对话额度",prop:"inviteGiveSendModel3Count",rules:i(f)},{default:l(()=>[e(a,{modelValue:t.inviteGiveSendModel3Count,"onUpdate:modelValue":n[10]||(n[10]=u=>t.inviteGiveSendModel3Count=u),placeholder:"邀请注册用户赠送基础模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"邀请赠送高级模型对话额度",prop:"inviteGiveSendModel4Count",rules:i(f)},{default:l(()=>[e(a,{modelValue:t.inviteGiveSendModel4Count,"onUpdate:modelValue":n[11]||(n[11]=u=>t.inviteGiveSendModel4Count=u),placeholder:"邀请注册用户赠送高级模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"邀请赠送绘画积分额度",prop:"inviteGiveSendDrawMjCount",rules:i(f)},{default:l(()=>[e(a,{modelValue:t.inviteGiveSendDrawMjCount,"onUpdate:modelValue":n[12]||(n[12]=u=>t.inviteGiveSendDrawMjCount=u),placeholder:"邀请注册用户赠送MJ额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"被邀请赠送基础模型对话额度",prop:"invitedGuestSendModel3Count",rules:i(f)},{default:l(()=>[e(a,{modelValue:t.invitedGuestSendModel3Count,"onUpdate:modelValue":n[13]||(n[13]=u=>t.invitedGuestSendModel3Count=u),placeholder:"被邀请注册用户赠送基础模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"被邀请赠送高级模型对话额度",prop:"invitedGuestSendModel4Count",rules:i(f)},{default:l(()=>[e(a,{modelValue:t.invitedGuestSendModel4Count,"onUpdate:modelValue":n[14]||(n[14]=u=>t.invitedGuestSendModel4Count=u),placeholder:"被邀请注册用户赠送高级模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"被邀请赠送绘画额度",prop:"invitedGuestSendDrawMjCount",rules:i(f)},{default:l(()=>[e(a,{modelValue:t.invitedGuestSendDrawMjCount,"onUpdate:modelValue":n[15]||(n[15]=u=>t.invitedGuestSendDrawMjCount=u),placeholder:"被邀请注册用户赠送额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(M),H,e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"开启签到奖励",prop:"signInStatus"},{default:l(()=>[e(U,{class:"box-item",effect:"dark",content:"如您启用签到奖励、则用户端则可以通过每日签到获取额度！",placement:"right"},{default:l(()=>[e(S,{modelValue:t.signInStatus,"onUpdate:modelValue":n[16]||(n[16]=u=>t.signInStatus=u),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"赠送基础模型额度",prop:"signInModel3Count"},{default:l(()=>[e(a,{modelValue:t.signInModel3Count,"onUpdate:modelValue":n[17]||(n[17]=u=>t.signInModel3Count=u),type:"number",placeholder:"请填写签到赠送的基础模型额度",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"赠送高级模型额度",prop:"signInModel4Count"},{default:l(()=>[e(a,{modelValue:t.signInModel4Count,"onUpdate:modelValue":n[18]||(n[18]=u=>t.signInModel4Count=u),type:"number",placeholder:"请填写签到赠送的高级模型额度",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"赠送绘画额度",prop:"signInMjDrawToken"},{default:l(()=>[e(a,{modelValue:t.signInMjDrawToken,"onUpdate:modelValue":n[19]||(n[19]=u=>t.signInMjDrawToken=u),type:"number",placeholder:"请填写签到赠送绘画额度",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(M),L,e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"基础模型额度",prop:"visitorModel3Num"},{default:l(()=>[e(a,{modelValue:t.visitorModel3Num,"onUpdate:modelValue":n[20]||(n[20]=u=>t.visitorModel3Num=u),type:"number",placeholder:"请填写每日限制基础模型积分",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"高级模型额度",prop:"visitorModel4Num"},{default:l(()=>[e(a,{modelValue:t.visitorModel4Num,"onUpdate:modelValue":n[21]||(n[21]=u=>t.visitorModel4Num=u),type:"number",placeholder:"请填写每日限制的高级模型积分",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(o,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"绘画积分额度",prop:"visitorMJNum"},{default:l(()=>[e(a,{modelValue:t.visitorMJNum,"onUpdate:modelValue":n[22]||(n[22]=u=>t.visitorMJNum=u),type:"number",placeholder:"请填写每日限制的绘画额度积分",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof w=="function"&&w(P);export{P as default};
