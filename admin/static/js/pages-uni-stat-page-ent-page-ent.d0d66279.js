(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-page-ent-page-ent"],{"03d0":function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("7db0"),n("d3b7"),n("159b"),n("ac1f"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("c975"),n("99af");var i={name:"uni-stat-select",mixins:[e.mixinDatacom||{}],props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[],cacheKey:"uni-data-select-lastSelectedValue"}},created:function(){var e=this;this.debounceGet=this.debounce((function(){e.query()}),300),this.collection&&!this.localdata.length&&this.debounceGet()},computed:{typePlaceholder:function(){var e=this.placeholder,t={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return t?e+t:e},valueCom:function(){return this.value}},watch:{localdata:{immediate:!0,handler:function(e,t){Array.isArray(e)&&t!==e&&(this.mixinDatacomResData=e)}},valueCom:function(e,t){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(e){e.length&&this.initDefVal()}}},methods:{debounce:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=null;return function(){for(var i=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){e.apply(i,r)}),t)}},query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.debounceGet()},initDefVal:function(){var e="";if(!this.valueCom&&0!==this.valueCom||this.isDisabled(this.valueCom)){var t;if(this.collection&&(t=this.getCache()),t||0===t)e=t;else{var n="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(n=this.mixinDatacomResData[this.defItem-1].value),e=n}(e||0===e)&&this.emit(e)}else e=this.valueCom;var i=this.mixinDatacomResData.find((function(t){return t.value===e}));this.current=i?this.formatItemName(i):""},isDisabled:function(e){var t=!1;return this.mixinDatacomResData.forEach((function(n){n.value===e&&(t=n.disable)})),t},clearVal:function(){this.emit(""),this.collection&&this.removeCache()},change:function(e){e.disable||(this.showSelector=!1,this.current=this.formatItemName(e),this.emit(e.value))},emit:function(e){this.$emit("change",e),this.$emit("input",e),this.$emit("update:modelValue",e),this.collection&&this.setCache(e)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(e){var t=e.text,n=e.value,i=e.channel_code;if(i=i?"(".concat(i,")"):"",this.format){var a="";for(var r in a=this.format,e)a=a.replace(new RegExp("{".concat(r,"}"),"g"),e[r]);return a}return this.collection.indexOf("app-list")>0?"".concat(t,"(").concat(n,")"):t||"未命名".concat(i)},getLoadData:function(){return this.mixinDatacomResData},getCurrentCacheKey:function(){return this.collection},getCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),t=uni.getStorageSync(this.cacheKey)||{};return t[e]},setCache:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),n=uni.getStorageSync(this.cacheKey)||{};n[t]=e,uni.setStorageSync(this.cacheKey,n)},removeCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),t=uni.getStorageSync(this.cacheKey)||{};delete t[e],uni.setStorageSync(this.cacheKey,t)}}};t.default=i}).call(this,n("a9ff")["default"])},"107f":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},"1a84":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-3128c571]{display:none}}.uni-stat__select[data-v-3128c571]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-3128c571]{width:100%;flex:1}.uni-stat__actived[data-v-3128c571]{width:100%;flex:1}.uni-label-text[data-v-3128c571]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-3128c571]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-3128c571]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-3128c571]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-3128c571]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-3128c571]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-3128c571]{font-size:14px;color:#909399}.uni-select__selector[data-v-3128c571]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-3128c571]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-3128c571],\r\n.uni-select__selector-item[data-v-3128c571]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\r\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-3128c571]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-3128c571]:last-child,\r\n.uni-select__selector-item[data-v-3128c571]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-3128c571]{opacity:.4;cursor:default}\r\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-3128c571],\r\n.uni-popper__arrow[data-v-3128c571]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-3128c571]{filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-3128c571]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-3128c571]{width:100%;color:#3a3a3a;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-3128c571]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-3128c571]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),e.exports=t},"1af3":function(e,t,n){var i=n("73d7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("4166a9ec",i,!0,{sourceMap:!1,shadowMode:!1})},"1b22":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},2009:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("df74").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[!0===e.showPageSize||"true"===e.showPageSize?n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[e._v(e._s(e.pageSizeRange[e.pageSizeIndex])+" "+e._s(e.piecePerPage))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):e._e(),n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[e._v("共 "+e._s(e.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===e.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[e._v(e._s(e.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[e._v("/"+e._s(e.maxPage||0))]),e._l(e.paper,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":t===e.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=e.$handleEvent(n),e.selectPage(t,i)}}},[n("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:e.currentIndex>=e.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.nextPageText))])]],2)],1)},r=[]},"23bc":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniTooltip:n("b5e7").default,uniIcons:n("df74").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-stat--sum-x mb-m"},e._l(e.items,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-stat--sum-item",class:["今天"===t.value?"uni-stat--sum-item-width":""]},[n("uni-tooltip",{scopedSlots:e._u([t.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[e._v(e._s(t.tooltip))])]},proxy:!0}:null],null,!0)},[n("v-uni-view",{staticClass:"uni-stat--sum-item-title"},[e._v(e._s(t.title?t.title:"")),t.title?n("uni-icons",{staticClass:"ml-s",attrs:{type:"help",color:"#666"}}):e._e()],1)],1),n("v-uni-view",{staticClass:"uni-stat--sum-item-value"},[e._v(e._s(t.value?t.value:0))]),e.contrast?n("v-uni-view",{staticClass:"uni-stat--sum-item-contrast"},[e._v(e._s(t.contrast?t.contrast:0))]):e._e()],1)})),1)},r=[]},"2be5":function(e,t,n){"use strict";n.r(t);var i=n("ce07"),a=n("3078");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("7d52");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"3128c571",null,!1,i["a"],void 0);t["default"]=s.exports},"2d2d":function(e,t,n){"use strict";n.r(t);var i=n("6662"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},3078:function(e,t,n){"use strict";n.r(t);var i=n("03d0"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"357e":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("90c2")),r=i(n("1b22")),o=i(n("107f")),s=i(n("f2cd")),u=i(n("423f")),c={en:a.default,es:r.default,fr:o.default,"zh-Hans":s.default,"zh-Hant":u.default};t.default=c},"423f":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},6662:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("b85c"));n("4de4"),n("d3b7"),n("b64b"),n("14d9");var r=n("6749"),o=i(n("6f57")),s={data:function(){return{fieldsMap:o.default,query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,tableData:[],panelData:o.default.filter((function(e){return e.hasOwnProperty("value")})),channelData:[]}},computed:{channelQuery:function(){var e=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:e})},versionQuery:function(){var e=this.query,t=e.appid,n=e.uni_platform,i=(0,r.stringifyQuery)({appid:t,uni_platform:n});return i}},created:function(){var e=this;this.debounceGet=(0,r.debounce)((function(){return e.getAllData()})),this.getChannelData()},watch:{query:{deep:!0,handler:function(e){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(e){this.getChannelData(e,!1)},changePlatform:function(e,t,n,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(e,t){this.currentDateTab=t;var n=(0,r.getTimeOfSomeDayAgo)(e),i=(0,r.getTimeOfSomeDayAgo)(0)-1;this.query.start_time=[n,i]},changePageCurrent:function(e){this.options.pageCurrent=e.current,this.getTableData()},changePageSize:function(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTableData()},getAllData:function(){this.getPanelData(),this.getTableData()},getTableData:function(t){var n=this;t=(0,r.stringifyQuery)(this.query,null,["uni_platform"]);var i=this.options.pageCurrent;this.loading=!0;var s=e.database(),u=(0,r.stringifyQuery)({appid:this.query.appid}),c=s.collection("uni-stat-pages").where(u).getTemp(),l=s.collection("uni-stat-page-result").where(t+" && entry_count > 0").getTemp();s.collection(l,c).field("".concat((0,r.stringifyField)(o.default),", stat_date, page_id")).groupBy("page_id").groupField((0,r.stringifyGroupField)(o.default)).orderBy("entry_count","desc").skip((i-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(e){var t=e.result,i=t.count,s=t.data;n.options.total=i,n.tableData=[];var u,c=(0,a.default)(s);try{for(c.s();!(u=c.n()).done;){var l=u.value,d=l.page_id;if(Array.isArray(d)){delete l.page_id;var p=d[0];if(p&&Object.keys(p).length)for(var f in p)"_id"!==f&&(l[f]=p[f])}(0,r.mapfields)(o.default,l,l),n.tableData.push(l)}}catch(h){c.e(h)}finally{c.f()}})).catch((function(e){})).finally((function(){n.loading=!1}))},getPanelData:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.stringifyQuery)(this.query,null,["uni_platform"]),i=e.database();i.collection("uni-stat-page-result").where(n).field((0,r.stringifyField)(o.default)).groupBy("appid").groupField((0,r.stringifyGroupField)(o.default)).orderBy("start_time","desc ").get().then((function(e){var n=e.result.data[0];t.panelData=[],t.panelData=(0,r.mapfields)(o.default,n)}))},navTo:function(e){var t="/pages/uni-stat/overview/overview?id=".concat(e);uni.navigateTo({url:t})},getChannelData:function(t,n){var i=this;this.query.channel_id="";var a=e.database(),r={};t=t||this.query.appid,t&&(r.appid=t),n=n||this.query.platform_id,n&&(r.platform_id=n);var o=a.collection("uni-stat-app-platforms").field("_id, name").getTemp(),s=a.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();a.collection(s,o).orderBy("platform_id","asc").get().then((function(e){var t,n=e.result.data,a=[];if(n.length>0)for(var r in n)t=n[r].channel_name?n[r].channel_name:"默认",n[r].platform_id.length>0&&(t=n[r].platform_id[0].name+"-"+t),a.push({value:n[r]._id,text:t});i.channelData=a})).catch((function(e){})).finally((function(){}))}}};t.default=s}).call(this,n("a9ff")["default"])},"6f57":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"入口页",field:"path",tooltip:"设备进入应用访问的第一个页面，例如设备从页面1进入应用，跳转到页面2，1为入口页，而2不是"},{title:"页面名称",field:"title"},{title:"访问次数",field:"visit_times",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"入口页次数",field:"entry_count",tooltip:"作为访问会话第一个访问页面（即着陆页）的次数",value:0},{title:"跳出率",field:"bounce_rate",formatter:"%%",tooltip:"只浏览一个页面便离开应用的次数占总启动次数的百分比",value:0,stat:"avg"},{title:"访问总时长",field:"duration",disabled:!0},{title:"次均停留时长",field:"avg_device_session_time",computed:"duration/visit_times",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0},{title:"设备平均停留时长 ",field:"avg_user_time",computed:"duration/visit_devices",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/访问设备数",value:0}]},"70f5":function(e,t,n){"use strict";n.r(t);var i=n("87d8"),a=n("2d2d");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("fde5");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1f4870c4",null,!1,i["a"],void 0);t["default"]=s.exports},"73d7":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-stat-edit--x[data-v-1f4870c4]{display:flex;justify-content:space-between}",""]),e.exports=t},"7d52":function(e,t,n){"use strict";var i=n("d9bd"),a=n.n(i);a.a},"87d8":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniStatBreadcrumb:n("b456").default,uniDataSelect:n("2be5").default,uniStatTabs:n("907f").default,uniDatetimePicker:n("efa7").default,uniStatPanel:n("95f4").default,uniTable:n("f33c").default,uniTr:n("6691").default,uniTh:n("73f9").default,uniTooltip:n("b5e7").default,uniIcons:n("df74").default,uniTd:n("63af").default,uniPagination:n("f1f6").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[e._v("入口页数据分析")])],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[n("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),n("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}})],1),n("v-uni-view",{staticClass:"uni-stat--x flex"},[n("uni-stat-tabs",{attrs:{label:"日期选择",current:e.currentDateTab,mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTimeRange.apply(void 0,arguments)}}}),n("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":e.currentDateTab<0&&!!e.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.useDatetimePicker.apply(void 0,arguments)}},model:{value:e.query.start_time,callback:function(t){e.$set(e.query,"start_time",t)},expression:"query.start_time"}})],1),n("v-uni-view",{staticClass:"uni-stat--x"},[n("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePlatform.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}}),e.query.platform_id&&-1===e.query.platform_id.indexOf("==")?n("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:e.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:e.query.channel_id,callback:function(t){e.$set(e.query,"channel_id",t)},expression:"query.channel_id"}}):e._e()],1),n("uni-stat-panel",{attrs:{items:e.panelData}}),n("v-uni-view",{staticClass:"uni-stat--x p-m"},[n("uni-table",{attrs:{loading:e.loading,border:!0,stripe:!0,emptyText:e.$t("common.empty")}},[n("uni-tr",[e._l(e.fieldsMap,(function(t,i){return[t.title?n("uni-th",{key:i+"_"+i+"_0",attrs:{align:"center"}},[n("uni-tooltip",{scopedSlots:e._u([0===i&&t.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[e._v(e._s(t.tooltip))])]},proxy:!0}:null],null,!0)},[e._v(e._s(t.title)),0===i&&t.tooltip?n("uni-icons",{attrs:{type:"help",color:"#666"}}):e._e()],1)],1):e._e()]}))],2),e._l(e.tableData,(function(t,i){return n("uni-tr",{key:i},e._l(e.fieldsMap,(function(i,a){return n("uni-td",{key:a,attrs:{align:0===a?"left":"center"}},[e._v(e._s(void 0!==t[i.field]?t[i.field]:"-"))])})),1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":e.options.pageSize,current:e.options.pageCurrent,total:e.options.total},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},"90c2":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"95f4":function(e,t,n){"use strict";n.r(t);var i=n("23bc"),a=n("d1f6");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("96d5");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1cbb1150",null,!1,i["a"],void 0);t["default"]=s.exports},"96d5":function(e,t,n){"use strict";var i=n("9c74"),a=n.n(i);a.a},"9c28":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-stat-panel",data:function(){return{}},props:{items:{type:Array,default:function(){return[]}},contrast:{type:Boolean,default:!1}}};t.default=i},"9c74":function(e,t,n){var i=n("a126");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("16b353c5",i,!0,{sourceMap:!1,shadowMode:!1})},a0e5:function(e,t,n){"use strict";var i=n("e91a"),a=n.n(i);a.a},a126:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-1cbb1150]{width:160px;white-space:normal}.uni-stat--sum-x[data-v-1cbb1150]{display:flex;justify-content:space-evenly;flex-wrap:wrap;border-radius:4px;padding:15px;box-shadow:-1px -1px 5px 0 rgba(0,0,0,.1)}.uni-stat--sum-item[data-v-1cbb1150]{white-space:nowrap;text-align:center;margin:10px 18px}.uni-stat--sum-item-width[data-v-1cbb1150]{width:100px}.uni-stat--sum-item-title[data-v-1cbb1150]{display:flex;align-items:center;justify-content:center;min-height:17px;font-size:12px;color:#666}.uni-stat--sum-item-value[data-v-1cbb1150]{font-size:24px;line-height:48px;font-weight:700;color:#333}.uni-stat--sum-item-contrast[data-v-1cbb1150]{font-size:14px;color:#666}@media screen and (max-width:500px){.uni-stat--sum-x[data-v-1cbb1150]{padding:15px 0;justify-content:space-between;flex-wrap:unset;overflow-x:auto!important}[data-v-1cbb1150]::-webkit-scrollbar{display:none}}',""]),e.exports=t},c206:function(e,t,n){"use strict";n.r(t);var i=n("cbf9"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},cbf9:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("14d9"),n("d3b7"),n("e25e");var a=n("37dc"),r=i(n("357e")),o=(0,a.initVueI18n)(r.default),s=o.t,u={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||s("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||s("uni-pagination.prevText")},nextPageText:function(){return this.nextText||s("uni-pagination.nextText")},maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e},paper:function(){for(var e=this.currentIndex,t=this.pagerCount,n=this.total,i=this.pageSize,a=[],r=[],o=Math.ceil(n/i),s=0;s<o;s++)a.push(s+1);r.push(1);var u=a[a.length-(t+1)/2];return a.forEach((function(n,i){(t+1)/2>=e?n<t+1&&n>1&&r.push(n):e+2<=u?n>e-(t+1)/2&&n<e+(t+1)/2&&r.push(n):(n>e-(t+1)/2||o-t<n)&&n<a[a.length-1]&&r.push(n)})),o>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=u?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(a[a.length-1])):(t+1)/2>=e||e+2<=u||(r.shift(),r.push(a[a.length-1])),r}},watch:{current:{immediate:!0,handler:function(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler:function(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex:function(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange:function(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick:function(){var e=document.querySelector("body");if(e){this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add("uni-pagination-picker-show"):setTimeout((function(){return e.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}};t.default=u},ce07:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("df74").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-stat__select"},[e.label?n("span",{staticClass:"uni-label-text hide-on-phone"},[e._v(e._s(e.label+"："))]):e._e(),n("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":e.current}},[n("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":e.disabled}},[n("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}},[e.current?n("v-uni-view",{staticClass:"uni-select__input-text"},[e._v(e._s(e.current))]):n("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[e._v(e._s(e.typePlaceholder))]),e.current&&e.clear?n("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearVal.apply(void 0,arguments)}}}):n("uni-icons",{attrs:{type:e.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),e.showSelector?n("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}}):e._e(),e.showSelector?n("v-uni-view",{staticClass:"uni-select__selector"},[n("v-uni-view",{staticClass:"uni-popper__arrow"}),n("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===e.mixinDatacomResData.length?n("v-uni-view",{staticClass:"uni-select__selector-empty"},[n("v-uni-text",[e._v(e._s(e.emptyTips))])],1):e._l(e.mixinDatacomResData,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-select__selector-item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.change(t)}}},[n("v-uni-text",{class:{"uni-select__selector__disabled":t.disable}},[e._v(e._s(e.formatItemName(t)))])],1)}))],2)],1):e._e()],1)],1)],1)},r=[]},d1f6:function(e,t,n){"use strict";n.r(t);var i=n("9c28"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},d9bd:function(e,t,n){var i=n("1a84");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("0280b420",i,!0,{sourceMap:!1,shadowMode:!1})},e91a:function(e,t,n){var i=n("f9f8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("383bb765",i,!0,{sourceMap:!1,shadowMode:!1})},f1f6:function(e,t,n){"use strict";n.r(t);var i=n("2009"),a=n("c206");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("a0e5");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"28de2840",null,!1,i["a"],void 0);t["default"]=s.exports},f2cd:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},f9f8:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),e.exports=t},fde5:function(e,t,n){"use strict";var i=n("1af3"),a=n.n(i);a.a}}]);