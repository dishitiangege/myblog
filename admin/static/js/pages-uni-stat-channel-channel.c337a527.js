(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-channel-channel"],{"0e0b":function(t,e,n){"use strict";n.r(e);var i=n("cfa8"),a=n("995e");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d693");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"151d5ae4",null,!1,i["a"],void 0);e["default"]=u.exports},"107f":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},"1b22":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"1d10":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-stat-panel[data-v-151d5ae4]{box-shadow:unset;border-bottom:1px solid #eee;padding:0;margin:0 15px}.uni-stat-edit--x[data-v-151d5ae4]{display:flex;justify-content:space-between}.uni-stat-edit--btn[data-v-151d5ae4]{cursor:pointer}",""]),t.exports=e},2009:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("df74").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-pagination"},[!0===t.showPageSize||"true"===t.showPageSize?n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:t.pageSizeIndex,range:t.pageSizeRange},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[t._v(t._s(t.pageSizeRange[t.pageSizeIndex])+" "+t._s(t.piecePerPage))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):t._e(),n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[t._v("共 "+t._s(t.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===t.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[t._v(t._s(t.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[t._v("/"+t._s(t.maxPage||0))]),t._l(t.paper,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":e===t.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=t.$handleEvent(n),t.selectPage(e,i)}}},[n("v-uni-text",[t._v(t._s(e))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:t.currentIndex>=t.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRight.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.nextPageText))])]],2)],1)},r=[]},"23bc":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniTooltip:n("b5e7").default,uniIcons:n("df74").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-stat--sum-x mb-m"},t._l(t.items,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-stat--sum-item",class:["今天"===e.value?"uni-stat--sum-item-width":""]},[n("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[n("v-uni-view",{staticClass:"uni-stat--sum-item-title"},[t._v(t._s(e.title?e.title:"")),e.title?n("uni-icons",{staticClass:"ml-s",attrs:{type:"help",color:"#666"}}):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-stat--sum-item-value"},[t._v(t._s(e.value?e.value:0))]),t.contrast?n("v-uni-view",{staticClass:"uni-stat--sum-item-contrast"},[t._v(t._s(e.contrast?e.contrast:0))]):t._e()],1)})),1)},r=[]},3187:function(t,e,n){var i=n("3c69");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("868f92ac",i,!0,{sourceMap:!1,shadowMode:!1})},"357e":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("90c2")),r=i(n("1b22")),o=i(n("107f")),u=i(n("f2cd")),s=i(n("423f")),l={en:a.default,es:r.default,fr:o.default,"zh-Hans":u.default,"zh-Hant":s.default};e.default=l},"3b07":function(t,e,n){"use strict";var i=n("3187"),a=n.n(i);a.a},"3c69":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-15e4b0ea]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-15e4b0ea]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-15e4b0ea]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-15e4b0ea]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-15e4b0ea]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-15e4b0ea]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-15e4b0ea]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-15e4b0ea]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-15e4b0ea]{font-size:16px;color:#333}.uni-button-color[data-v-15e4b0ea]{color:#2979ff}.uni-dialog-input[data-v-15e4b0ea]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-15e4b0ea]{color:#18bc37}.uni-popup__warn[data-v-15e4b0ea]{color:#f3a73f}.uni-popup__error[data-v-15e4b0ea]{color:#e43d33}.uni-popup__info[data-v-15e4b0ea]{color:#909399}',""]),t.exports=e},"423f":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},"4ce3":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e}}};e.default=i},6093:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=[{title:"渠道值",field:"channel_code",tooltip:"",formatter:""},{title:"渠道名称",field:"channel_name",tooltip:"",formatter:""},{title:"新增设备",field:"new_device_count",tooltip:"首次访问应用的设备数（以设备为判断标准，去重）",value:0},{title:"活跃设备",field:"active_device_count",tooltip:"访问过应用内任意页面的总设备数（去重）",value:0},{title:"访问次数",field:"page_visit_count",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"启动次数",field:"app_launch_count",tooltip:"设备从打开应用到主动关闭应用或超时退出计为一次启动",value:0},{title:"次均停留时长",field:"avg_device_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0},{title:"设备平均停留时长 ",field:"avg_device_time",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/活跃设备",value:0},{title:"跳出率",field:"bounceRate",computed:"bounce_times/app_launch_count",formatter:"%",tooltip:"只浏览一个页面便离开应用的次数占总启动次数的百分比",value:0,contrast:0,fix:2},{title:"总设备数",field:"total_devices",tooltip:"从添加统计到当前选择时间的总设备数（去重）",value:0}]},"6c07":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-popup-dialog"},[n("v-uni-view",{staticClass:"uni-dialog-title"},[n("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.titleText))])],1),"base"===t.mode?n("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[n("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))])])],2):n("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[n("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:t.placeholderText,focus:t.focus},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})])],2),n("v-uni-view",{staticClass:"uni-dialog-button-group"},[n("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v(t._s(t.closeText))])],1),n("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v(t._s(t.okText))])],1)],1)],1)},a=[]},"6e97":function(t,e,n){"use strict";n.r(e);var i=n("8472"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},7067:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("2ca0");var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=i},"7ca8":function(t,e,n){"use strict";n.r(e);var i=n("6c07"),a=n("6e97");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("3b07");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"15e4b0ea",null,!1,i["a"],void 0);e["default"]=u.exports},"7f8e":function(t,e,n){"use strict";n.r(e);var i=n("7067"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},8084:function(t,e,n){"use strict";var i=n("efda"),a=n.n(i);a.a},8472:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a=i(n("4ce3")),r=n("37dc"),o=i(n("e1b8")),u=(0,r.initVueI18n)(o.default),s=u.t,l={name:"uniPopupDialog",mixins:[a.default],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||s("uni-popup.ok")},closeText:function(){return this.cancelText||s("uni-popup.cancel")},placeholderText:function(){return this.placeholder||s("uni-popup.placeholder")},titleText:function(){return this.title||s("uni-popup.title")}},watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};e.default=l},"90c2":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"95f4":function(t,e,n){"use strict";n.r(e);var i=n("23bc"),a=n("d1f6");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("96d5");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1cbb1150",null,!1,i["a"],void 0);e["default"]=u.exports},"96d5":function(t,e,n){"use strict";var i=n("9c74"),a=n.n(i);a.a},"995e":function(t,e,n){"use strict";n.r(e);var i=n("dc0c"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"9c28":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-stat-panel",data:function(){return{}},props:{items:{type:Array,default:function(){return[]}},contrast:{type:Boolean,default:!1}}};e.default=i},"9c74":function(t,e,n){var i=n("a126");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("16b353c5",i,!0,{sourceMap:!1,shadowMode:!1})},a0e5:function(t,e,n){"use strict";var i=n("e91a"),a=n.n(i);a.a},a126:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-1cbb1150]{width:160px;white-space:normal}.uni-stat--sum-x[data-v-1cbb1150]{display:flex;justify-content:space-evenly;flex-wrap:wrap;border-radius:4px;padding:15px;box-shadow:-1px -1px 5px 0 rgba(0,0,0,.1)}.uni-stat--sum-item[data-v-1cbb1150]{white-space:nowrap;text-align:center;margin:10px 18px}.uni-stat--sum-item-width[data-v-1cbb1150]{width:100px}.uni-stat--sum-item-title[data-v-1cbb1150]{display:flex;align-items:center;justify-content:center;min-height:17px;font-size:12px;color:#666}.uni-stat--sum-item-value[data-v-1cbb1150]{font-size:24px;line-height:48px;font-weight:700;color:#333}.uni-stat--sum-item-contrast[data-v-1cbb1150]{font-size:14px;color:#666}@media screen and (max-width:500px){.uni-stat--sum-x[data-v-1cbb1150]{padding:15px 0;justify-content:space-between;flex-wrap:unset;overflow-x:auto!important}[data-v-1cbb1150]::-webkit-scrollbar{display:none}}',""]),t.exports=e},af02:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},a=[]},afd3:function(t,e,n){var i=n("1d10");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("69242dbf",i,!0,{sourceMap:!1,shadowMode:!1})},bdc8:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},c206:function(t,e,n){"use strict";n.r(e);var i=n("cbf9"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c225:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},cbf9:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("14d9"),n("d3b7"),n("e25e");var a=n("37dc"),r=i(n("357e")),o=(0,a.initVueI18n)(r.default),u=o.t,s={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||u("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||u("uni-pagination.prevText")},nextPageText:function(){return this.nextText||u("uni-pagination.nextText")},maxPage:function(){var t=1,e=Number(this.total),n=Number(this.pageSize);return e&&n&&(t=Math.ceil(e/n)),t},paper:function(){for(var t=this.currentIndex,e=this.pagerCount,n=this.total,i=this.pageSize,a=[],r=[],o=Math.ceil(n/i),u=0;u<o;u++)a.push(u+1);r.push(1);var s=a[a.length-(e+1)/2];return a.forEach((function(n,i){(e+1)/2>=t?n<e+1&&n>1&&r.push(n):t+2<=s?n>t-(e+1)/2&&n<t+(e+1)/2&&r.push(n):(n>t-(e+1)/2||o-e<n)&&n<a[a.length-1]&&r.push(n)})),o>e?((e+1)/2>=t?r[r.length-1]="...":t+2<=s?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(a[a.length-1])):(e+1)/2>=t||t+2<=s||(r.shift(),r.push(a[a.length-1])),r}},watch:{current:{immediate:!0,handler:function(t,e){this.currentIndex=t<1?1:t}},value:{immediate:!0,handler:function(t){1===Number(this.current)&&(this.currentIndex=t<1?1:t)}},pageSizeIndex:function(t){this.$emit("pageSizeChange",this.pageSizeRange[t])}},methods:{pickerChange:function(t){this.pageSizeIndex=t.detail.value,this.pickerClick()},pickerClick:function(){var t=document.querySelector("body");if(t){this.pickerShow=!this.pickerShow,this.pickerShow?t.classList.add("uni-pagination-picker-show"):setTimeout((function(){return t.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(t,e){if(parseInt(t))this.currentIndex=t,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(e<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(e>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:t,current:this.currentIndex})}}};e.default=s},cfa8:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniStatBreadcrumb:n("b456").default,uniLink:n("f600").default,uniDataSelect:n("2be5").default,uniStatTabs:n("907f").default,uniDatetimePicker:n("efa7").default,uniStatPanel:n("95f4").default,qiunDataCharts:n("4b9a").default,uniTable:n("f33c").default,uniTr:n("6691").default,uniTh:n("73f9").default,uniTd:n("63af").default,uniIcons:n("df74").default,uniPagination:n("f1f6").default,uniPopup:n("71ea").default,uniPopupDialog:n("7ca8").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[n("uni-link",{attrs:{href:"https://ask.dcloud.net.cn/article/35974",text:"支持Android App多渠道统计。设置App渠道包的方法，请参考 https://ask.dcloud.net.cn/article/35974。"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[n("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),n("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",storage:!1,where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}}),n("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform-channel",all:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}})],1),n("v-uni-view",{staticClass:"uni-stat--x flex"},[n("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),n("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1),n("v-uni-view",{staticClass:"uni-stat--x",staticStyle:{padding:"15px 0"}},[n("uni-stat-panel",{staticClass:"uni-stat-panel",attrs:{items:t.panelData}}),n("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:t.chartTabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeChartTab.apply(void 0,arguments)}},model:{value:t.chartTab,callback:function(e){t.chartTab=e},expression:"chartTab"}}),n("v-uni-view",{staticClass:"uni-charts-box"},[n("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,echartsH5:!0,echartsApp:!0,tooltipFormat:"tooltipCustom",errorMessage:t.errorMessage}})],1)],1),n("v-uni-view",{staticClass:"uni-stat--x p-m"},[n("v-uni-view",{staticClass:"mb-m"},[n("uni-link",{attrs:{color:"",href:"https://ask.dcloud.net.cn/article/35974",text:"如何自定义渠道包?"}})],1),n("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:t.$t("common.empty")}},[n("uni-tr",[t._l(t.fieldsMap.slice(0,t.fieldsMap.length-1),(function(e,i){return[e.title?n("uni-th",{key:i+"_"+i+"_0",attrs:{align:"center"}},[t._v(t._s(e.title))]):t._e()]}))],2),t._l(t.tableData,(function(e,i){return n("uni-tr",{key:i},[t._l(t.fieldsMap.slice(0,t.fieldsMap.length-1),(function(i,a){return[i.title&&1===a?n("uni-td",{key:i.field+"_"+a+"_0",staticClass:"uni-stat-edit--x"},[t._v(t._s(e[i.field]?e[i.field]:"-")),n("uni-icons",{staticClass:"uni-stat-edit--btn",attrs:{type:"compose",color:"#2979ff",size:"25"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.inputDialogToggle(e.channel_code,e.channel_name)}}})],1):n("uni-td",{key:i.field,attrs:{align:"center"}},[t._v(t._s(void 0!==e[i.field]?e[i.field]:"-"))])]}))],2)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":t.paginationOptions.pageSize,current:t.paginationOptions.pageCurrent,total:t.paginationOptions.total},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageSize.apply(void 0,arguments)}}})],1)],1)],1),n("uni-popup",{ref:"inputDialog",attrs:{type:"dialog",maskClick:!0}},[n("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",title:"请编辑名称",placeholder:"请输入内容"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.editName.apply(void 0,arguments)}},model:{value:t.updateValue,callback:function(e){t.updateValue=e},expression:"updateValue"}})],1)],1)},r=[]},d1f6:function(t,e,n){"use strict";n.r(e);var i=n("9c28"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d693:function(t,e,n){"use strict";var i=n("afd3"),a=n.n(i);a.a},dc0c:function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("b85c"));n("4de4"),n("d3b7"),n("159b"),n("14d9"),n("c975"),n("99af"),n("7db0"),n("e9c4"),n("4e82");var r=n("6749"),o=i(n("6093")),u={data:function(){return{fieldsMap:o.default,query:{dimension:"day",appid:"",uni_platform:"android",platform_id:"",version_id:"",start_time:[]},paginationOptions:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,days:0,tableData:[],panelData:o.default.filter((function(t){return t.hasOwnProperty("value")})),chartData:{},chartTab:"new_device_count",queryId:"",updateValue:"",errorMessage:""}},computed:{chartTabs:function(){var t=[];return o.default.forEach((function(e){var n=e.field,i=e.title,a=e.hasOwnProperty("value");n&&i&&a&&t.push({_id:n,name:i})})),t},queryStr:function(){return(0,r.stringifyQuery)(this.query,!0)},dimension:function(){return(0,r.maxDeltaDay)(this.query.start_time,1)?"hour":"day"},versionQuery:function(){var t=this.query,e=t.appid,n=t.uni_platform,i=(0,r.stringifyQuery)({appid:e,uni_platform:n,type:"native_app"});return i}},created:function(){var t=this;this.debounceGet=(0,r.debounce)((function(){t.getAllData(t.queryStr)}),300)},watch:{query:{deep:!0,handler:function(t){this.paginationOptions.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changePlatform:function(t,e,n,i){this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(t,e){this.currentDateTab=e;var n,i;n=(0,r.getTimeOfSomeDayAgo)(t),i=t?(0,r.getTimeOfSomeDayAgo)(0)-1:(0,r.getTimeOfSomeDayAgo)(0)+864e5-1,this.query.start_time=[n,i]},changePageCurrent:function(t){this.paginationOptions.pageCurrent=t.current,this.getTableData()},changePageSize:function(t){this.paginationOptions.pageSize=t,this.paginationOptions.pageCurrent=1,this.getTableData()},changeChartTab:function(t,e,n){this.getChartData(t,n)},getAllData:function(t){-1!==t.indexOf("appid")?(this.errorMessage="",this.getPanelData(),this.getChartData(),this.getTableData()):this.errorMessage="请先选择应用"},getChartData:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.chartTab,i=(0,r.stringifyQuery)(this.query,!1,["uni_platform"]),u=(this.paginationOptions.pageCurrent,t.database());u.collection("uni-stat-result").where(i).field("".concat((0,r.stringifyField)(o.default,n),", start_time, channel_id")).groupBy("channel_id,start_time").groupField((0,r.stringifyGroupField)(o.default,n)).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var i=t.result,u=(i.count,i.data),s={categories:[],series:[{name:"暂无数据",data:[]}]},l=s.categories;if("hour"===e.dimension)for(var c=0;c<24;++c){var d=c<10?"0"+c:c,p="".concat(d,":00 ~ ").concat(d,":59");l.push(p)}var f=[];u.forEach((function(t){f.indexOf(t.channel_id)<0&&f.push(t.channel_id)}));var h=[];e.getChannels().then((function(t){h=t.result.data})).finally((function(){f.forEach((function(t,i){var c=h.find((function(e){return e._id===t})),d=s.series[i]={name:c&&c.channel_name||"未知",data:[]};if("hour"===e.dimension)for(var p=0;p<24;++p)d.data[p]=0;var f=o.default.filter((function(t){return t.field===n}));f=JSON.parse(JSON.stringify(f)),delete f[0].value,f[0].formatter="";var v,g=(0,a.default)(u);try{for(g.s();!(v=g.n()).done;){var x=v.value;(0,r.mapfields)(f,x,x);var m=x.start_time,b=(0,r.formatDate)(m,e.dimension),_=x[n],y=l.indexOf(b);t===x.channel_id&&(y<0?(l.push(b),d.data.push(_)):d.data[y]=_)}}catch(w){g.e(w)}finally{g.f()}})),s.series=s.series.sort((function(t,e){return t.name.localeCompare(e.name)})),e.chartData=s}))})).catch((function(t){})).finally((function(){}))},getChannels:function(){var e=t.database();return e.collection("uni-stat-app-channels").where((0,r.stringifyQuery)({appid:this.query.appid,platform_id:this.query.platform_id})).get()},getTableData:function(){var e=this,n=(0,r.stringifyQuery)(this.query,!1,["uni_platform"]),i=this.paginationOptions.pageCurrent;this.loading=!0;var u=t.database();u.collection("uni-stat-result").where(n).field("".concat((0,r.stringifyField)(o.default),",appid, channel_id")).groupBy("appid, channel_id").groupField((0,r.stringifyGroupField)(o.default)).orderBy("new_device_count","desc").skip((i-1)*this.paginationOptions.pageSize).limit(this.paginationOptions.pageSize).get({getCount:!0}).then((function(t){var n=t.result,i=n.count,u=n.data;e.getChannels().then((function(t){var e,n=t.result.data,i=(0,a.default)(u);try{var r=function(){var t=e.value;n.forEach((function(e){t.channel_id===e._id&&(t.channel_code=e.channel_code,t.channel_name=e.channel_name)}))};for(i.s();!(e=i.n()).done;)r()}catch(o){i.e(o)}finally{i.f()}})).finally((function(){var t,n=(0,a.default)(u);try{for(n.s();!(t=n.n()).done;){var s=t.value;(0,r.mapfields)(o.default,s,s,"total_")}}catch(l){n.e(l)}finally{n.f()}e.tableData=[],e.paginationOptions.total=i,e.tableData=u,e.loading=!1}))})).catch((function(t){e.loading=!1}))},createStr:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"total_",i=[];return t.forEach((function(t){if(field.hasOwnProperty("value")){var a=t.field;i.push("".concat(e,"(").concat(a,") as ").concat(n+a))}})),i.join()},getPanelData:function(){var e=this,n=JSON.parse(JSON.stringify(this.query));n.dimension="day";var i=(0,r.stringifyQuery)(n,!1,["uni_platform"]),a=t.database();a.collection("uni-stat-result").where(i).field((0,r.stringifyField)(o.default)).groupBy("appid").groupField((0,r.stringifyGroupField)(o.default)).orderBy("start_time","desc").get().then((function(t){var i=t.result.data[0];i&&(i.total_devices=0),r.getFieldTotal.call(e,n),e.panelData=[],e.panelData=(0,r.mapfields)(o.default,i)}))},inputDialogToggle:function(t,e){this.queryId=t,this.updateValue=e,this.$refs.inputDialog.open()},editName:function(e){var n=this,i=t.database();i.collection("uni-stat-app-channels").where({channel_code:this.queryId}).update({channel_name:e}).then((function(t){uni.showToast({title:"修改成功"}),n.getTableData()})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=u}).call(this,n("a9ff")["default"])},e1b8:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("bdc8")),r=i(n("c225")),o=i(n("ebe5")),u={en:a.default,"zh-Hans":r.default,"zh-Hant":o.default};e.default=u},e91a:function(t,e,n){var i=n("f9f8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("383bb765",i,!0,{sourceMap:!1,shadowMode:!1})},ebe5:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},efda:function(t,e,n){var i=n("ff5b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7e2df834",i,!0,{sourceMap:!1,shadowMode:!1})},f1f6:function(t,e,n){"use strict";n.r(e);var i=n("2009"),a=n("c206");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a0e5");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"28de2840",null,!1,i["a"],void 0);e["default"]=u.exports},f2cd:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},f600:function(t,e,n){"use strict";n.r(e);var i=n("af02"),a=n("7f8e");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("8084");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"03b6d5de",null,!1,i["a"],void 0);e["default"]=u.exports},f9f8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),t.exports=e},ff5b:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e}}]);