(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-pay-order-overview-overview"],{"0335":function(t,e,a){"use strict";var n=a("467f"),i=a.n(n);i.a},"0c1c":function(t,e,a){"use strict";a.r(e);var n=a("2893"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},1111:function(t,e,a){var n=a("a353");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5a150cd4",n,!0,{sourceMap:!1,shadowMode:!1})},1901:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-13aa30fe]{width:350px;white-space:normal}.uni-stat--sum-x[data-v-13aa30fe]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;border-radius:4px;padding:15px;box-shadow:-1px -1px 5px 0 rgba(0,0,0,.1)}.uni-stat--sum-item[data-v-13aa30fe]{white-space:nowrap;text-align:center;margin:10px 18px}.uni-stat--sum-item-width[data-v-13aa30fe]{width:100px}.uni-stat--sum-item-title[data-v-13aa30fe]{display:flex;align-items:center;justify-content:center;min-height:17px;font-size:12px;color:#666}.uni-stat--sum-item-value[data-v-13aa30fe]{font-size:24px;line-height:48px;font-weight:700;color:#333}.uni-stat--sum-item-contrast[data-v-13aa30fe]{font-size:14px;color:#666}@media screen and (max-width:500px){.uni-stat--sum-x[data-v-13aa30fe]{padding:15px 0;align-items:center;justify-content:center;flex-wrap:unset;overflow-x:auto!important}[data-v-13aa30fe]::-webkit-scrollbar{display:none}}.uni-stat--sum-flex[data-v-13aa30fe]{flex:1;display:flex;justify-content:flex-start;flex-wrap:wrap;border-radius:4px;padding:15px}.uni-stat--sum-flex .uni-stat--sum-item[data-v-13aa30fe]{min-width:%?300?%;max-width:%?500?%;flex:1}.uni-stat-card-header[data-v-13aa30fe]{justify-content:space-between;color:#555;font-size:14px;font-weight:600;padding:10px 0;margin-bottom:15px}.td.main[data-v-13aa30fe]{color:#e43d33}',""]),t.exports=e},"1cb0":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniTable:a("f33c").default,uniTr:a("6691").default,uniTh:a("73f9").default,uniTd:a("63af").default,uniTooltip:a("b5e7").default,uniIcons:a("df74").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"uni-stat-card-header"},[t._v("概况")]),a("uni-table",{staticStyle:{"min-height":"100px"},attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无更多数据"}},[a("uni-tr",[a("uni-th",{staticClass:"th",attrs:{align:"center"}}),a("uni-th",{staticClass:"th",attrs:{align:"center"}},[t._v("今日")]),a("uni-th",{staticClass:"th",attrs:{align:"center"}},[t._v("昨日")]),a("uni-th",{staticClass:"th",attrs:{align:"center"}},[t._v("前日")]),a("uni-th",{staticClass:"th",attrs:{align:"center"}},[t._v("本周")]),a("uni-th",{staticClass:"th",attrs:{align:"center"}},[t._v("本月")]),a("uni-th",{staticClass:"th",attrs:{align:"center"}},[t._v("本季度")]),a("uni-th",{staticClass:"th",attrs:{align:"center"}},[t._v("本年度")]),a("uni-th",{staticClass:"th",attrs:{align:"center"}},[t._v("累计")])],1),t._l(t.fieldsMap,(function(e,n){return a("uni-tr",{key:n},[a("uni-td",{staticClass:"td",attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[a("v-uni-view",{staticClass:"uni-stat--sum-item-title"},[t._v(t._s(e.title)),a("uni-icons",{staticClass:"ml-s",attrs:{type:"help",color:"#666"}})],1)],1)],1),a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v(t._s(t.panelData.today[e.field]))]),a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v(t._s(t.panelData.yesterday[e.field]))]),a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v(t._s(t.panelData.beforeyesterday[e.field]))]),a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v(t._s(t.panelData.week[e.field]))]),a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v(t._s(t.panelData.month[e.field]))]),a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v(t._s(t.panelData.quarter[e.field]))]),a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v(t._s(t.panelData.year[e.field]))]),a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v(t._s(t.panelData.total[e.field]))])],1)}))],2)],1)},r=[]},2893:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("6749"),r=n(a("37e7")),s=n(a("6147")),o=n(a("39cc")),u={components:{statPanelTotal:r.default,statPanelToday:s.default,trendChart:o.default},data:function(){return{query:{appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:""}}},onLoad:function(t){var e=t.appid;e&&(this.query.appid=e)},computed:{versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,n=(0,i.stringifyQuery)({appid:e,uni_platform:a});return n},channelQuery:function(){var t=this.query,e=t.appid,a=t.platform_id,n=(0,i.stringifyQuery)({appid:e,platform_id:a});return n}},created:function(){},methods:{platformChange:function(t,e,a,n){this.query.version_id=0,this.query.uni_platform=n.code}},watch:{}};e.default=u},"37e7":function(t,e,a){"use strict";a.r(e);var n=a("1cb0"),i=a("b9bd");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("da19");var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"04b36692",null,!1,n["a"],void 0);e["default"]=o.exports},"39cc":function(t,e,a){"use strict";a.r(e);var n=a("d721"),i=a("784b");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("63ca");var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"9a174984",null,!1,n["a"],void 0);e["default"]=o.exports},"43f7":function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7db0"),a("d3b7"),a("d81d");var i=n(a("5530")),r=a("6749"),s=(n(a("ce46")),a("c81d")),o={props:{query:{type:[Object],default:function(){return{}}}},data:function(){return{tableName:"uni-stat-pay-result",panelData:s.fieldsGroupMap,loading:!1}},created:function(){var t=this;this.getCloudDataDebounce=(0,r.debounce)((function(){t.getCloudData()}),300),this.getCloudDataDebounce()},methods:{getCloudData:function(){var e=this,a=this.query;if(a.appid){this.loading=!0;var n=(0,r.stringifyQuery)((0,i.default)((0,i.default)({},a),{},{start_time:[(0,r.getTimeOfSomeDayAgo)(0),Date.now()]}),!0,["uni_platform"]),o=t.database();o.collection(this.tableName).where(n).field("".concat((0,r.stringifyField)(s.fieldsMap),", dimension, stat_date.date_str as stat_time, start_time")).groupBy("stat_time, dimension").groupField((0,r.stringifyGroupField)(s.fieldsMap)).orderBy("stat_time","desc").get().then((function(t){var a=t.result.data;a=(0,r.formatterData)({fieldsMap:s.fieldsMap,data:a});var n=a.find((function(t){return"day"===t.dimension&&t.stat_time===(0,r.parseDateTime)((0,r.getTimeOfSomeDayAgo)(0),"")}));n||(n=a.find((function(t){return"hour"===t.dimension&&t.stat_time===(0,r.parseDateTime)((0,r.getTimeOfSomeDayAgo)(0),"")}))||{}),e.loading=!1,e.panelData=e.setPanelData(n)}))}},setPanelData:function(t){var e=this.panelData;return e.map((function(e,a){e.list.map((function(e,a){e.value=t[e.field]||0}))})),e}},watch:{query:{deep:!0,handler:function(t){this.getCloudDataDebounce()}}}};e.default=o}).call(this,a("a9ff")["default"])},"467f":function(t,e,a){var n=a("1901");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5117cffa",n,!0,{sourceMap:!1,shadowMode:!1})},4851:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("b85c")),r=n(a("5530")),s=n(a("ade3"));a("d3b7"),a("159b"),a("14d9"),a("d81d"),a("a9e3"),a("99af");var o=a("6749"),u=n(a("ce46")),d=a("c81d"),l=[];d.fieldsGroupMap.forEach((function(t){var e=t.group,a=t.title;e&&a&&l.push({_id:e,name:a,list:t.list})}));var c={props:{query:{type:[Object],default:function(){return{}}}},data:function(){return{tableName:"uni-stat-pay-result",chartData:{},errorMessage:"",opts:(0,s.default)({color:["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,15,0,15],legend:{},enableScroll:!0,dataLabel:!1,xAxis:{disableGrid:!0,itemCount:24,fontSize:12,boundaryGap:"center"},yAxis:{gridType:"dash",dashLength:2,data:[{tofix:2}]},extra:{area:{type:"straight",opacity:.2,addLine:!0,width:2,gradient:!1}}},"legend",{position:"bottom"}),dateTabs:{time:[],timeStr:"",index:2,list:[{_id:1,name:"昨天",dimension:"hour"},{_id:0,name:"今天",dimension:"hour"},{_id:7,name:"最近七天",dimension:"day"},{_id:30,name:"最近30天",dimension:"day"},{_id:90,name:"最近90天",dimension:"day"},{_id:372,name:"月纬度",dimension:"month"},{_id:1116,name:"季纬度",dimension:"quarter"},{_id:4392,name:"年纬度",dimension:"year"}]},statTabs:{index:0,list:l},queryMode:0}},created:function(){var t=this;this.getCloudDataDebounce=(0,o.debounce)((function(){t.getCloudData()}),300),this.getCloudDataDebounce()},methods:{getCloudData:function(){var e=this,a=this.query;if(a.appid){this.errorMessage="";var n=this.getWhere(),i=(0,r.default)((0,r.default)({},a),n),s=this.statTabs.list[this.statTabs.index].list;i=(0,o.stringifyQuery)(i,!0,["uni_platform"]);var u=t.database();u.collection(this.tableName).where(i).field("".concat((0,o.stringifyField)(s),", start_time")).groupBy("start_time").groupField((0,o.stringifyGroupField)(s)).orderBy("start_time","asc").limit(100).get({getCount:!0}).then((function(t){var a=t.result,i=(a.count,a.data);i=(0,o.fillTrendChartData)(i,n,s),i=(0,o.formatterData)({fieldsMap:s,data:i,formatter:!1}),e.setChartData(i,s,n)})).catch((function(t){})).finally((function(){}))}else this.errorMessage="请先选择应用"},setChartData:function(t,e,a){var n=this,r={categories:[],series:[]};e.map((function(t,e){t.trendChart&&r.series.push({name:t.title,data:[]})}));var s,o=(0,i.default)(t);try{var u=function(){var t=s.value,i=n.formatDate(t.start_time,a.dimension);r.categories.push(i),e.map((function(e,a){if(e.trendChart){var n=Number(t[e.field]);r.series[a].data.push(n)}}))};for(o.s();!(s=o.n()).done;)u()}catch(d){o.e(d)}finally{o.f()}this.chartData=r},formatDate:function(t,e){var a=new Date(t),n=a.getFullYear(),i=a.getMonth()+1,r=a.getDate(),s=a.getHours(),u=Math.floor((a.getMonth()+3)/3);return i<10&&(i="0"+i),r<10&&(r="0"+r),"hour"===e?"".concat(s,"时"):"month"===e?"".concat(n,"-").concat(i):"quarter"===e?"".concat(n,"/Q").concat(u):"year"===e?"".concat(n):(0,o.parseDateTime)(a)},datePickerChange:function(t){this.dateTabs.time=t,this.queryMode=1,this.getCloudData()},dateTabsChange:function(t,e){this.dateTabs.index=e,this.queryMode=0,this.getCloudData()},statTabsChange:function(t,e,a){this.statTabs.index=e,this.getCloudData({field:t,name:a})},getWhere:function(){var t=[],e=this.dateTabs.list[this.dateTabs.index]||{};if("number"===typeof e._id&&0===this.queryMode){var a=(0,o.getTimeOfSomeDayAgo)(e._id),n=u.default.getOffsetStartAndEnd("day",0).endTime;1==e._id&&(n=u.default.getOffsetStartAndEnd("day",0,a).endTime),t=[a,n]}else this.dateTabs.time&&(t=this.dateTabs.time);var i=e.dimension||"day";return this.dateTabs.timeStr="".concat(u.default.timeFormat(t[0])," ~ ").concat(u.default.timeFormat(t[1])),this.dateTabs.time=t,{dimension:i,start_time:t}}},watch:{query:{deep:!0,handler:function(t){this.getCloudDataDebounce()}}},computed:{}};e.default=c}).call(this,a("a9ff")["default"])},"55d5":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("b456").default,uniDataSelect:a("2be5").default,uniStatTabs:a("907f").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"})],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.platformChange.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?a("uni-data-select",{staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:t.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),a("statPanelTotal",{attrs:{query:t.query}}),a("statPanelToday",{attrs:{query:t.query}}),a("trendChart",{attrs:{query:t.query}})],1)],1)},r=[]},6147:function(t,e,a){"use strict";a.r(e);var n=a("981a"),i=a("aca2");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("0335");var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"13aa30fe",null,!1,n["a"],void 0);e["default"]=o.exports},"63ca":function(t,e,a){"use strict";var n=a("1111"),i=a.n(n);i.a},"784b":function(t,e,a){"use strict";a.r(e);var n=a("4851"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"981a":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniTable:a("f33c").default,uniTr:a("6691").default,uniTh:a("73f9").default,uniTooltip:a("b5e7").default,uniIcons:a("df74").default,uniTd:a("63af").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"uni-stat-card-header"},[t._v("今日数据")]),a("uni-table",{staticStyle:{"min-height":"100px"},attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无更多数据"}},[a("uni-tr",[a("uni-th",{staticClass:"th",attrs:{align:"center"}}),t._l(t.panelData,(function(e,n){return a("uni-th",{key:n,staticClass:"th",attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},t._l(e.list,(function(e,n){return a("v-uni-view",{key:n},[t._v(t._s(e.tooltip))])})),1)]},proxy:!0}],null,!0)},[a("v-uni-view",{staticClass:"uni-stat--sum-item-title"},[t._v(t._s(e.title)),a("uni-icons",{staticClass:"ml-s",attrs:{type:"help",color:"#666"}})],1)],1)],1)}))],2),a("uni-tr",[a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v("下单")]),t._l(t.panelData,(function(e,n){return a("uni-td",{key:n,staticClass:"td",attrs:{align:"center"}},[t._v(t._s(e.list[0].value))])}))],2),a("uni-tr",[a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v("收款")]),t._l(t.panelData,(function(e,n){return a("uni-td",{key:n,staticClass:"td",attrs:{align:"center"}},[t._v(t._s(e.list[1].value))])}))],2),a("uni-tr",[a("uni-td",{staticClass:"td",attrs:{align:"center"}},[t._v("退款")]),t._l(t.panelData,(function(e,n){return a("uni-td",{key:n,staticClass:"td",attrs:{align:"center"}},[t._v(t._s(e.list[2].value))])}))],2)],1)],1)},r=[]},a353:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.justify-center[data-v-9a174984]{justify-content:center}',""]),t.exports=e},aca2:function(t,e,a){"use strict";a.r(e);var n=a("43f7"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},ad1c:function(t,e,a){var n=a("fd92");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("b5587f9a",n,!0,{sourceMap:!1,shadowMode:!1})},b9bd:function(t,e,a){"use strict";a.r(e);var n=a("d740"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},c81d:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.statPanelTodayFieldsMap=e.fieldsMap=e.fieldsGroupMap=void 0,a("d81d"),a("14d9");var n=[{title:"订单金额",group:"total_amount",list:[{title:"下单金额",field:"create_total_amount",tooltip:"下单：统计时间内，下单金额（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"收款金额",field:"pay_total_amount",tooltip:"收款：统计时间内，成功支付的订单金额（包含退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"退款金额",field:"refund_total_amount",tooltip:"退款：统计时间内，发生退款的金额。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,multiple:.01}]},{title:"订单数量",group:"order_count",list:[{title:"下单数量",field:"create_order_count",tooltip:"下单：统计时间内，成功下单的订单笔数（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"收款数量",field:"pay_order_count",tooltip:"收款：统计时间内，成功支付的订单数（包含退款订单）。",formatter:"",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"退款数量",field:"refund_order_count",tooltip:"退款：统计时间内，发生退款的订单数。",formatter:"",value:"-",contrast:0,stat:"sum",fix:0}]},{title:"用户数量",group:"user_count",list:[{title:"下单用户数",field:"create_user_count",tooltip:"下单：统计时间内，成功下单的客户数（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"收款用户数",field:"pay_user_count",tooltip:"收款：统计时间内，成功支付的用户数（包含退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"退款用户数",field:"refund_user_count",tooltip:"退款：统计时间内，发生退款的用户数。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0}]},{title:"设备数量",group:"device_count",list:[{title:"下单设备数",field:"create_device_count",tooltip:"下单：统计时间内，成功下单的设备数（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"收款设备数",field:"pay_device_count",tooltip:"收款：统计时间内，成功支付的设备数（包含退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"退款设备数",field:"refund_device_count",tooltip:"退款：统计时间内，发生退款的设备数。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0}]}];e.fieldsGroupMap=n;var i=[];e.fieldsMap=i,n.map((function(t,e){t.list.map((function(t,e){i.push(t)}))}));e.statPanelTodayFieldsMap=[{title:"下单金额（GMV）",field:"create_total_amount",tooltip:"统计时间内，下单金额（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"收款金额（GPV）",field:"pay_total_amount",tooltip:"统计时间内，成功支付的订单金额（包含退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"退款金额",field:"refund_total_amount",tooltip:"统计时间内，发生退款的金额。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"实收金额",field:"actual_total_amount",tooltip:"实收金额=收款金额-退款金额",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01}]},ce46:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("53ca"));a("a9e3"),a("d401"),a("d3b7"),a("25f0"),a("ac1f"),a("00b4"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("99af"),a("c975");var r={getDateObject:function(t){return t?("string"!==typeof t||isNaN(t)||(t=Number(t)),"number"===typeof t?(10==t.toString().length&&(t*=1e3),e=new Date(t)):"object"===(0,i.default)(t)&&(e=new Date(t.getTime())),e):"";var e},timeFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";try{if(!t)return"";var a=r.getDateObject(t),n={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};for(var i in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?n[i]:("00"+n[i]).substr((""+n[i]).length)));return e}catch(s){return time}},getDateInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=r.getDateObject(t),a=e.getFullYear()+"",n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,i=e.getDate()<10?"0"+e.getDate():e.getDate(),s=e.getHours()<10?"0"+e.getHours():e.getHours(),o=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),u=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),d=e.getMilliseconds(),l=e.getDay(),c=Math.floor((e.getMonth()+3)/3);return{year:Number(a),month:Number(n),day:Number(i),hour:Number(s),minute:Number(o),second:Number(u),millisecond:Number(d),week:Number(l),quarter:Number(c)}},getOffsetStartAndEnd:function(){var t,e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"day",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,s=r.getDateObject(i);if("hour"===a){var o=36e5,u=r.getDateInfo(new Date(s.getTime()+1*o*n));t=new Date("".concat(u.year,"/").concat(u.month,"/").concat(u.day," ").concat(u.hour,":00:00")).getTime(),e=new Date("".concat(u.year,"/").concat(u.month,"/").concat(u.day," ").concat(u.hour,":00:00")).getTime()+(o-1)}else if("day"===a){var d=864e5,l=r.getDateInfo(new Date(s.getTime()+1*d*n));t=new Date("".concat(l.year,"/").concat(l.month,"/").concat(l.day)).getTime(),e=new Date("".concat(l.year,"/").concat(l.month,"/").concat(l.day)).getTime()+(d-1)}else if("week"===a){s.setDate(s.getDate()-s.getDay()+1+7*n);var c=r.getDateInfo(s);s.setDate(s.getDate()+7);var f=r.getDateInfo(s);t=new Date("".concat(c.year,"/").concat(c.month,"/").concat(c.day)).getTime(),e=new Date("".concat(f.year,"/").concat(f.month,"/").concat(f.day)).getTime()-1}else if("month"===a){var p=r.getDateInfo(s),m=p.month+n,h=p.year;m>12?(h+=Math.floor(m/12),m=Math.abs(m)%12):m<=0&&(h=h-1-Math.floor(Math.abs(m)/12),m=12-Math.abs(m)%12);var v=new Date(h,m,0).getDate();t=new Date("".concat(h,"/").concat(m,"/1")).getTime(),e=new Date("".concat(h,"/").concat(m,"/").concat(v)).getTime()+86399999}else if("quarter"===a){s.setMonth(s.getMonth()+3*n);var _=r.getDateInfo(s),g=_.month;[1,2,3].indexOf(g)>-1?g=1:[4,5,6].indexOf(g)>-1?g=4:[7,8,9].indexOf(g)>-1?g=7:[10,11,12].indexOf(g)>-1&&(g=10),s.setMonth(g-1);var y=r.getDateInfo(s);s.setMonth(s.getMonth()+3);var b=r.getDateInfo(s);t=new Date("".concat(y.year,"/").concat(y.month,"/1")).getTime(),e=new Date("".concat(b.year,"/").concat(b.month,"/1")).getTime()-1}else if("year"===a){var x=r.getDateInfo(s),D=x.year+n;t=new Date("".concat(D,"/1/1")).getTime(),e=new Date("".concat(D,"/12/31")).getTime()+86399999}return{startTime:t,endTime:e}}},s=r;e.default=s},d721:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniStatTabs:a("907f").default,uniDatetimePicker:a("efa7").default,qiunDataCharts:a("4b9a").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"uni-stat-card-header"},[t._v("趋势图")]),a("v-uni-view",{staticClass:"flex"},[a("uni-stat-tabs",{attrs:{type:"box",current:t.dateTabs.index,tabs:t.dateTabs.list},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.dateTabsChange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",attrs:{type:"daterange",end:Date.now(),"return-type":"timestamp","clear-icon":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.datePickerChange.apply(void 0,arguments)}},model:{value:t.dateTabs.time,callback:function(e){t.$set(t.dateTabs,"time",e)},expression:"dateTabs.time"}})],1),a("uni-stat-tabs",{attrs:{type:"box",current:t.statTabs.index,tabs:t.statTabs.list},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.statTabsChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,opts:t.opts,errorMessage:t.errorMessage}})],1)],1)},r=[]},d740:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af"),a("d81d"),a("7db0"),a("d3b7");var i=a("6749"),r=n(a("ce46")),s=a("c81d"),o=s.statPanelTodayFieldsMap,u={props:{query:{type:[Object],default:function(){return{}}}},data:function(){return{tableName:"uni-stat-pay-result",fieldsMap:o,panelData:{today:{pay_total_amount:"-",pay_order_count:"-"},yesterday:{pay_total_amount:"-",pay_order_count:"-"},beforeyesterday:{pay_total_amount:"-",pay_order_count:"-"},week:{pay_total_amount:"-",pay_order_count:"-"},month:{pay_total_amount:"-",pay_order_count:"-"},quarter:{pay_total_amount:"-",pay_order_count:"-"},year:{pay_total_amount:"-",pay_order_count:"-"},total:{pay_total_amount:"-",pay_order_count:"-"}},loading:!1}},created:function(){var t=this;this.getCloudDataDebounce=(0,i.debounce)((function(){t.getCloudData()}),300),this.getCloudDataDebounce()},methods:{getCloudData:function(){var e=this,a=this.query;if(a.appid){this.loading=!0,a=(0,i.stringifyQuery)(a,!0,["uni_platform"]);var n=this.getWhere(a);a&&(n="".concat(a," && (").concat(n,")"));var r=t.database();r.collection(this.tableName).where(n).field("".concat((0,i.stringifyField)(o),", dimension, stat_date.date_str as stat_time, start_time")).groupBy("stat_time, dimension").groupField((0,i.stringifyGroupField)(o)+",last(start_time) as start_time").get().then((function(t){var a=t.result.data;a.map((function(t,e){t.actual_total_amount||(t.actual_total_amount=t.pay_total_amount-t.refund_total_amount)})),a=(0,i.formatterData)({fieldsMap:o,data:a}),e.loading=!1,Object.assign(e.panelData,e.setPanelData(a))}));var s="".concat(a,' && dimension == "year"');r.collection(this.tableName).where(s).field("".concat((0,i.stringifyField)(o),", dimension")).groupBy("dimension").groupField((0,i.stringifyGroupField)(o)).get().then((function(t){var a=t.result.data;a.map((function(t,e){t.actual_total_amount=t.pay_total_amount-t.refund_total_amount})),a=(0,i.formatterData)({fieldsMap:o,data:a}),Object.assign(e.panelData,{total:a[0]||{pay_total_amount:0,pay_order_count:0,create_total_amount:0,refund_total_amount:0,actual_total_amount:0}})}))}},getWhere:function(t){var e,a=Date.now(),n=r.default.getOffsetStartAndEnd("day",0,a),i=r.default.getOffsetStartAndEnd("day",-1,a),s=r.default.getOffsetStartAndEnd("day",-2,a),o=r.default.getOffsetStartAndEnd("week",0,a),u=r.default.getOffsetStartAndEnd("month",0,a),d=r.default.getOffsetStartAndEnd("quarter",0,a),l=r.default.getOffsetStartAndEnd("year",0,a);return e='(dimension=="day" && start_time=='.concat(n.startTime," && end_time==").concat(n.endTime,') || (dimension=="day" && start_time==').concat(i.startTime," && end_time==").concat(i.endTime,') || (dimension=="day" && start_time==').concat(s.startTime," && end_time==").concat(s.endTime,') || (dimension=="week" && start_time==').concat(o.startTime," && end_time==").concat(o.endTime,') || (dimension=="month" && start_time==').concat(u.startTime," && end_time==").concat(u.endTime,') || (dimension=="quarter" && start_time==').concat(d.startTime," && end_time==").concat(d.endTime,') || (dimension=="year" && start_time==').concat(l.startTime," && end_time==").concat(l.endTime,")"),e},setPanelData:function(t){var e=Date.now(),a=r.default.getOffsetStartAndEnd("day",0,e),n=r.default.getOffsetStartAndEnd("day",-1,e),i=r.default.getOffsetStartAndEnd("day",-2,e),s=t.find((function(t){return"day"===t.dimension&&t.start_time===a.startTime})),o=t.find((function(t){return"day"===t.dimension&&t.start_time===n.startTime})),u=t.find((function(t){return"day"===t.dimension&&t.start_time===i.startTime})),d=t.find((function(t){return"week"===t.dimension})),l=t.find((function(t){return"month"===t.dimension})),c=t.find((function(t){return"quarter"===t.dimension})),f=t.find((function(t){return"year"===t.dimension})),p={pay_total_amount:0,pay_order_count:0,create_total_amount:0,refund_total_amount:0,actual_total_amount:0};return{today:s||p,yesterday:o||p,beforeyesterday:u||p,week:d||p,month:l||p,quarter:c||p,year:f||p}}},watch:{query:{deep:!0,handler:function(t){this.getCloudDataDebounce()}}}};e.default=u}).call(this,a("a9ff")["default"])},da19:function(t,e,a){"use strict";var n=a("ad1c"),i=a.n(n);i.a},ed68:function(t,e,a){"use strict";a.r(e);var n=a("55d5"),i=a("0c1c");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6ec7db73",null,!1,n["a"],void 0);e["default"]=o.exports},fd92:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-04b36692]{width:400px;white-space:normal}.uni-stat--sum-x[data-v-04b36692]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;border-radius:4px;padding:15px;box-shadow:-1px -1px 5px 0 rgba(0,0,0,.1)}.uni-stat--sum-item[data-v-04b36692]{white-space:nowrap;text-align:center;margin:10px 18px}.uni-stat--sum-item-width[data-v-04b36692]{width:100px}.uni-stat--sum-item-title[data-v-04b36692]{display:flex;align-items:center;justify-content:center;min-height:17px;font-size:12px;color:#666}.uni-stat--sum-item-value[data-v-04b36692]{font-size:24px;line-height:48px;font-weight:700;color:#333}.uni-stat--sum-item-contrast[data-v-04b36692]{font-size:14px;color:#666}@media screen and (max-width:500px){.uni-stat--sum-x[data-v-04b36692]{padding:15px 0;align-items:center;justify-content:center;flex-wrap:unset;overflow-x:auto!important}[data-v-04b36692]::-webkit-scrollbar{display:none}}.uni-stat--sum-flex[data-v-04b36692]{flex:1;display:flex;justify-content:flex-start;flex-wrap:wrap;border-radius:4px;padding:15px}.uni-stat--sum-flex .uni-stat--sum-item[data-v-04b36692]{min-width:%?300?%;max-width:%?500?%;flex:1}.uni-stat-card-header[data-v-04b36692]{justify-content:space-between;color:#555;font-size:14px;font-weight:600;padding:10px 0;margin-bottom:15px}.td.main[data-v-04b36692]{color:#e43d33}',""]),t.exports=e}}]);