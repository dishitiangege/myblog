(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-change_pwd-change_pwd"],{"0998":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniMatchMedia:n("a5e8").default,uniForms:n("6fbe").default,uniFormsItem:n("e45d").default,uniEasyinput:n("cfcb").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-content"},[n("uni-match-media",{attrs:{"min-width":690}},[n("v-uni-view",{staticClass:"login-logo"},[n("v-uni-image",{attrs:{src:t.logo}})],1),n("v-uni-text",{staticClass:"title title-box"},[t._v("修改密码")])],1),n("uni-forms",{ref:"form",attrs:{value:t.formData,"err-show-type":"toast"}},[n("uni-forms-item",{attrs:{name:"oldPassword"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusOldPassword,type:"password",inputBorder:!1,placeholder:"请输入旧密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusOldPassword=!1}},model:{value:t.formData.oldPassword,callback:function(e){t.$set(t.formData,"oldPassword",e)},expression:"formData.oldPassword"}})],1),n("uni-forms-item",{attrs:{name:"newPassword"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusNewPassword,type:"password",inputBorder:!1,placeholder:"请输入新密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusNewPassword=!1}},model:{value:t.formData.newPassword,callback:function(e){t.$set(t.formData,"newPassword",e)},expression:"formData.newPassword"}})],1),n("uni-forms-item",{attrs:{name:"newPassword2"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusNewPassword2,type:"password",inputBorder:!1,placeholder:"请再次输入新密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusNewPassword2=!1}},model:{value:t.formData.newPassword2,callback:function(e){t.$set(t.formData,"newPassword2",e)},expression:"formData.newPassword2"}})],1),n("v-uni-button",{staticClass:"uni-btn send-btn-box",staticStyle:{"background-color":"#7400ff"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},r=[]},"1ec3":function(t,e,n){"use strict";var a;n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"UniMatchMedia",props:{width:{type:[Number,String],default:""},minWidth:{type:[Number,String],default:""},maxWidth:{type:[Number,String],default:""},height:{type:[Number,String],default:""},minHeight:{type:[Number,String],default:""},maxHeight:{type:[Number,String],default:""},orientation:{type:String,default:""}},data:function(){return{matches:!0}},mounted:function(){var t=this;a=uni.createMediaQueryObserver(this),a.observe({width:this.width,maxWidth:this.maxWidth,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight,maxHeight:this.maxHeight,orientation:this.orientation},(function(e){t.matches=e}))},destroyed:function(){a.disconnect()}};e.default=i},"2d5d":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4"),n("4d63"),n("c607"),n("2c3e"),n("25f0");var i=a(n("fdaa")),r=i.default.passwordStrength,o={super:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,strong:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,medium:/^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$)[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,weak:/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,16}$/},s={normal:{noPwd:"请输入密码",noRePwd:"再次输入密码",rePwdErr:"两次输入密码不一致"},passwordStrengthError:{super:"密码必须包含大小写字母、数字和特殊符号，密码长度必须在8-16位之间",strong:"密码必须包含字母、数字和特殊符号，密码长度必须在8-16位之间",medium:"密码必须为字母、数字和特殊符号任意两种的组合，密码长度必须在8-16位之间",weak:"密码必须包含字母，密码长度必须在6-16位之间"}};function d(t){return!(r&&o[r]&&!new RegExp(o[r]).test(t))||s.passwordStrengthError[r]}var u={ERROR:s,validPwd:d,getPwdRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"password",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"password2",n={};return n[t]={rules:[{required:!0,errorMessage:s.normal.noPwd},{validateFunction:function(t,e,n,a){var i=d(e);return!0!==i&&a(i),!0}}]},e&&(n[e]={rules:[{required:!0,errorMessage:s.normal.noRePwd},{validateFunction:function(e,n,a,i){return n!=a[t]&&i(s.normal.rePwdErr),!0}}]}),n}};e.default=u},"427f":function(t,e,n){var a=n("fc5a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("e0b6e520",a,!0,{sourceMap:!1,shadowMode:!1})},4723:function(t,e,n){"use strict";n.r(e);var a=n("1ec3"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},8229:function(t,e,n){var a=n("a92d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("1bd1040a",a,!0,{sourceMap:!1,shadowMode:!1})},a000:function(t,e,n){"use strict";n.r(e);var a=n("da6f"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a5e8:function(t,e,n){"use strict";n.r(e);var a=n("bc7d"),i=n("4723");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("db25");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"b54cf81c",null,!1,a["a"],void 0);e["default"]=s.exports},a92d:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-88193944]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-88193944]{padding:0 %?60?%}.login-logo[data-v-88193944]{display:none}@media screen and (min-width:690px){.uni-content[data-v-88193944]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-88193944]{display:flex;justify-content:center}.login-logo uni-image[data-v-88193944]{width:60px;height:60px}.register-back[data-v-88193944]{display:none}uni-button[data-v-88193944]{padding-bottom:1px}}.uni-content uni-view[data-v-88193944]{box-sizing:border-box}.title[data-v-88193944]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-88193944]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-88193944]  .uni-easyinput__content,\r\n.input-box[data-v-88193944]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-88193944]{color:#04498c;cursor:pointer}.uni-content[data-v-88193944]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-88193944]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-88193944]{height:auto!important}@media screen and (max-width:690px){.uni-content[data-v-88193944]{margin-top:15px}}@media screen and (min-width:690px){.uni-content[data-v-88193944]{padding:30px 40px 40px}}',""]),t.exports=e},ba78:function(t,e,n){"use strict";var a=n("8229"),i=n.n(a);i.a},bc7d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:this.matches,expression:"matches"}]},[this._t("default")],2)},i=[]},c974:function(t,e,n){"use strict";n.r(e);var a=n("0998"),i=n("a000");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("ba78");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"88193944",null,!1,a["a"],void 0);e["default"]=s.exports},da6f:function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("5319");var i=a(n("5530")),r=a(n("f6a0")),o=a(n("2d5d")),s=t.importObject("uni-id-co",{customUI:!0}),d={mixins:[r.default],data:function(){return{focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:(0,i.default)({oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]}},o.default.getPwdRules("newPassword","newPassword2")),logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){var t=this;document.onkeydown=function(e){var n=e||window.event;n&&13==n.keyCode&&t.submit()}},methods:{submit:function(){var t=this;this.$refs.form.validate().then((function(e){var n=t.formData,a=n.oldPassword,i=n.newPassword;s.updatePwd({oldPassword:a,newPassword:i}).then((function(t){uni.removeStorageSync("uni_id_token"),uni.setStorageSync("uni_id_token_expired",0),uni.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((function(t){uni.showModal({content:t.message,showCancel:!1})}))})).catch((function(e){var n=e[0].key;n=n.replace(n[0],n[0].toUpperCase()),t["focus"+n]=!0}))}}};e.default=d}).call(this,n("a9ff")["default"])},db25:function(t,e,n){"use strict";var a=n("427f"),i=n.n(a);i.a},f6a0:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("caad"),n("2532"),n("d3b7"),n("159b");var r=n("bcb5"),o=a(n("fdaa")),s={data:function(){return{config:o.default,uniIdRedirectUrl:"",isMounted:!1}},onUnload:function(){document.onkeydown=!1},mounted:function(){this.isMounted=!0},onLoad:function(t){var e=this;if(t.is_weixin_redirect){if(uni.showLoading({mask:!0}),window.location.href.includes("#")){var n=window.location.href.split("?")[1].split("&");n.forEach((function(e){var n=e.split("=");"code"==n[0]&&(t.code=n[1])}))}this.$nextTick((function(n){e.$refs.uniFabLogin.login({code:t.code},"weixin")}))}t.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(t.uniIdRedirectUrl))},computed:{needAgreements:function(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get:function(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set:function(t){this.$refs.agreements?this.$refs.agreements.isAgree=t:console.log("不存在 隐私政策协议组件")}}},methods:{loginSuccess:function(t){r.mutations.loginSuccess((0,i.default)((0,i.default)({},t),{},{uniIdRedirectUrl:"/pages/startUpIndex"}))}}},d=s;e.default=d},fc5a:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-view[data-v-b54cf81c]{display:block}",""]),t.exports=e}}]);