(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-common-webview-webview"],{3201:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={onLoad:function(t){var n=t.url,e=t.title;"http"!=n.substring(0,4)?(uni.showModal({title:"错误",content:'不是一个有效的网站链接,"'+n+'"',showCancel:!1,confirmText:"知道了",complete:function(){uni.navigateBack()}}),e="页面路径错误"):this.url=n,e&&uni.setNavigationBarTitle({title:e})},data:function(){return{url:null}}};n.default=i},"3f21":function(t,n,e){"use strict";e.r(n);var i=e("3201"),u=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},"43db":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",[this.url?n("v-uni-web-view",{attrs:{src:this.url}}):this._e()],1)},u=[]},f38e:function(t,n,e){"use strict";e.r(n);var i=e("43db"),u=e("3f21");for(var r in u)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(r);var a=e("f0c5"),o=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=o.exports}}]);