(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-special-special"],{"3c06":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-text",[this._v(this._s(this.dateShow))])},i=[]},5875:function(t,e,n){"use strict";n.r(e);var a=n("6bfe"),i=n("e9f2");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b01f");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5364b1a8",null,!1,a["a"],void 0);e["default"]=u.exports},"6bfe":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={unicloudDb:n("960d").default,uniList:n("cc04").default,uniListItem:n("5c65").default,uniDateformat:n("e9ab").default,uniIcons:n("e0d2").default,uniLoadMore:n("17d6").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"tips",class:{"tips-ani":t.tipShow}},[t._v("为您更新了10条最新新闻动态")]),n("unicloud-db",{ref:"udb",attrs:{options:t.formData,collection:t.collection,field:t.field},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.load.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data,i=e.loading,r=(e.error,e.options);return[n("uni-list",t._l(a,(function(e){return n("uni-list-item",{key:e._id,attrs:{direction:"row",direction:1===e.mode||2===e.mode||3===e.mode||6===e.mode?"column":"row",to:"/pages/articleTxt/articleTxt?id="+e._id+"&title="+e.title},scopedSlots:t._u([{key:"header",fn:function(){return[4===e.mode?n("v-uni-view",{staticClass:"uni-thumb"},[n("v-uni-image",{attrs:{src:e.avatar,mode:"aspectFill"}})],1):t._e(),4!==e.mode&&5!==e.mode?n("v-uni-view",{staticClass:"uni-title"},[t._v(t._s(e.title))]):t._e()]},proxy:!0},{key:"body",fn:function(){return[n("v-uni-view",{staticClass:"content",class:{"uni-content":1===e.mode,"uni-list-box":2===e.mode,"uni-media-box":3===e.mode}},[1===e.mode||2===e.mode?n("v-uni-view",{staticClass:"uni-thumb",class:{"uni-content":1===e.mode," list-picture":1===e.mode}},[n("v-uni-image",{staticClass:"thumb-image",attrs:{src:e.avatar,mode:"aspectFill"}})],1):t._e(),t._l(e.avatar,(function(a,i){return 3===e.mode?n("v-uni-image",{key:i,staticClass:"uni-thumb",attrs:{src:a,mode:"aspectFill"}}):t._e()})),n("v-uni-view",{staticClass:"uni-content"},[1!==e.mode&&3!==e.mode?n("v-uni-view",{staticClass:"uni-title-sub uni-ellipsis-2"},[t._v(t._s(e.excerpt))]):t._e(),3!==e.mode?n("v-uni-view",{staticClass:"uni-note"},[t._v(t._s(e.user_name)),n("uni-dateformat",{attrs:{date:e.last_modify_date}})],1):t._e()],1)],2)]},proxy:!0},{key:"footer",fn:function(){return[2===e.mode?n("v-uni-view",{staticClass:"uni-footer"},[n("v-uni-view",[n("uni-icons",{attrs:{type:"chat",size:"14",color:"#999"}}),n("v-uni-text",{staticClass:"uni-footer-text"},[t._v("评论")])],1),n("v-uni-view",[n("uni-icons",{attrs:{type:"hand-thumbsup",size:"14",color:"#999"}}),n("v-uni-text",{staticClass:"uni-footer-text"},[t._v("点赞")])],1),n("v-uni-view",[n("uni-icons",{attrs:{type:"redo",size:"14",color:"#999"}}),n("v-uni-text",{staticClass:"uni-footer-text"},[t._v("分享")])],1)],1):t._e(),3===e.mode?n("v-uni-view",{staticClass:"uni-note",attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(e.user_name)+" "+t._s(e.last_modify_date))]):t._e(),5===e.mode?n("v-uni-view",{staticClass:"uni-thumb",staticStyle:{margin:"0"},attrs:{slot:"footer"},slot:"footer"},[n("v-uni-image",{attrs:{src:e.avatar,mode:"aspectFill"}})],1):t._e()]},proxy:!0}],null,!0)})})),1),i||"noMore"===r.status?n("uni-load-more",{attrs:{status:r.status}}):t._e()]}}])})],1)},r=[]},"6d50":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("e25e");var a=n("da45"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=i},"70cd":function(t,e,n){"use strict";n.r(e);var a=n("6d50"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"97eb":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-flex[data-v-5364b1a8], .uni-flex-row[data-v-5364b1a8], .uni-list-box[data-v-5364b1a8], .uni-media-box[data-v-5364b1a8], .uni-footer[data-v-5364b1a8], .uni-flex-column[data-v-5364b1a8], .uni-content[data-v-5364b1a8]{display:flex}.uni-flex-row[data-v-5364b1a8], .uni-list-box[data-v-5364b1a8], .uni-media-box[data-v-5364b1a8], .uni-footer[data-v-5364b1a8]{flex-direction:row;box-sizing:border-box}.uni-flex-column[data-v-5364b1a8], .uni-content[data-v-5364b1a8]{flex-direction:column}.uni-color-gary[data-v-5364b1a8]{color:#3b4144}\r\n/* 标题 */.uni-title[data-v-5364b1a8]{display:flex;margin-bottom:8px;font-size:16;font-weight:700;color:#3b4144}.uni-title-sub[data-v-5364b1a8]{display:flex;font-size:14px;font-weight:500;color:#3b4144}\r\n/* 描述 额外文本 */.uni-note[data-v-5364b1a8]{margin-top:10px;color:#999;font-size:12px}\r\n/* 列表内容 */.uni-list-box[data-v-5364b1a8]{flex:1;margin-top:10px}\r\n/* 略缩图 */.uni-thumb[data-v-5364b1a8]{flex-shrink:0;margin-right:10px;width:125px;height:75px;border-radius:6px;overflow:hidden;border:1px #f5f5f5 solid}.uni-thumb uni-image[data-v-5364b1a8]{width:100%;height:100%}.uni-media-box[data-v-5364b1a8]{border-radius:6px;overflow:hidden}.uni-media-box .uni-thumb[data-v-5364b1a8]{margin:0;margin-left:4px;flex-shrink:1;width:33%;border-radius:0}.uni-media-box .uni-thumb[data-v-5364b1a8]:first-child{margin:0}\r\n/* 内容 */.uni-content[data-v-5364b1a8]{justify-content:space-between}\r\n/* 列表footer */.uni-footer[data-v-5364b1a8]{justify-content:space-between;margin-top:12px}.uni-footer-text[data-v-5364b1a8]{font-size:12px;color:#999;margin-left:5px}\r\n/* 标签 */.uni-tag[data-v-5364b1a8]{flex-shrink:0;padding:0 5px;border:1px #c8c7cc solid;margin-right:5px;border-radius:3px;background:#f8f8f8;color:#333;font-size:12px}\r\n/* 链接 */.uni-link[data-v-5364b1a8]{margin-left:10px;color:#333;text-decoration:underline}uni-page-body[data-v-5364b1a8]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}body.?%PAGE?%[data-v-5364b1a8]{background-color:#efeff4}.uni-thumb[data-v-5364b1a8]{height:120px}.tips[data-v-5364b1a8]{color:#67c23a;font-size:14px;line-height:40px;text-align:center;background-color:#f0f9eb;height:0;opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);transition:all .3s}.tips-ani[data-v-5364b1a8]{-webkit-transform:translateY(0);transform:translateY(0);height:40px;opacity:1}.content[data-v-5364b1a8]{width:100%;display:flex}.list-picture[data-v-5364b1a8]{width:100%;height:160px}.thumb-image[data-v-5364b1a8]{width:100%;height:100%}.ellipsis[data-v-5364b1a8]{display:flex;overflow:hidden}.uni-ellipsis-1[data-v-5364b1a8]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.uni-ellipsis-2[data-v-5364b1a8]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}',""]),t.exports=e},b01f:function(t,e,n){"use strict";var a=n("cc0b"),i=n.n(a);i.a},b1c5:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("e9ab")),r={components:{uniDateformat:i.default},data:function(){return{collection:"opendb-news-articles",field:"_id,mode,avatar,title,user_name,excerpt,last_modify_date",formData:{status:"loading"},tipShow:!1}},onLoad:function(){},methods:{load:function(t,e){e&&(this.formData.status="noMore")}},onPullDownRefresh:function(){var t=this;this.formData.status="more",this.$refs.udb.loadData({clear:!0},(function(){t.tipShow=!0,clearTimeout(t.timer),t.timer=setTimeout((function(){t.tipShow=!1}),1e3),uni.stopPullDownRefresh()}))},onReachBottom:function(){this.$refs.udb.loadMore()}};e.default=r},cc0b:function(t,e,n){var a=n("97eb");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("79d7d472",a,!0,{sourceMap:!1,shadowMode:!1})},da45:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=s,e.friendlyDate=function(t,e){var n=e.locale,a=void 0===n?"zh":n,i=e.threshold,r=void 0===i?[6e4,36e5]:i,o=e.format,d=void 0===o?"yyyy/MM/dd hh:mm:ss":o;if("-"===t)return t;if(!t&&0!==t)return"";var l,c,f={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},h=f[a]||f.zh,m=u(t),v=m.getTime()-Date.now(),b=Math.abs(v);if(b<r[0])return v<0?h.justNow:h.soon;if(b>=r[1])return s(m,d);var p=h.later;v<0&&(p=h.ago,v=-v);var x=Math.floor(v/1e3),y=Math.floor(x/60),g=Math.floor(y/60),w=Math.floor(g/24),_=Math.floor(w/30),M=Math.floor(_/12);switch(!0){case M>0:l=M,c=h.year;break;case _>0:l=_,c=h.month;break;case w>0:l=w,c=h.day;break;case g>0:l=g,c=h.hour;break;case y>0:l=y,c=h.minute;break;default:l=x,c=h.second;break}"en"===a&&(1===l?l="a":c+="s");return h.template.replace(/{\s*num\s*}/g,l+"").replace(/{\s*unit\s*}/g,c).replace(/{\s*suffix\s*}/g,p)};var i=a(n("53ca"));function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t+="";while(t.length<e)t="0"+t;return t.slice(-e)}n("fb6a"),n("c975"),n("ac1f"),n("5319");var o={yyyy:function(t){return r(t.year,4)},yy:function(t){return r(t.year)},MM:function(t){return r(t.month)},M:function(t){return t.month},dd:function(t){return r(t.day)},d:function(t){return t.day},hh:function(t){return r(t.hour)},h:function(t){return t.hour},mm:function(t){return r(t.minute)},m:function(t){return t.minute},ss:function(t){return r(t.second)},s:function(t){return t.second},SSS:function(t){return r(t.millisecond,3)},S:function(t){return t.millisecond}};function u(t){if(t instanceof Date)return t;switch((0,i.default)(t)){case"string":return t.indexOf("T")>-1?new Date(t):new Date(t.replace(/-/g,"/"));default:return new Date(t)}}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd hh:mm:ss";if(!t&&0!==t)return"";t=u(t);var n={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),millisecond:t.getMilliseconds()},a=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/,i=!0,r=e;while(i)i=!1,r=r.replace(a,(function(t){return i=!0,o[t](n)}));return r}},e9ab:function(t,e,n){"use strict";n.r(e);var a=n("3c06"),i=n("70cd");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"690ab064",null,!1,a["a"],void 0);e["default"]=u.exports},e9f2:function(t,e,n){"use strict";n.r(e);var a=n("b1c5"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a}}]);