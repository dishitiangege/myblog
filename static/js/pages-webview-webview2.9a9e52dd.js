(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-webview-webview2"],{"23f1":function(n,t,e){"use strict";e.r(t);var u=e("398a"),c=e.n(u);for(var i in u)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=c.a},"398a":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{url:""}},methods:{},onLoad:function(n){this.url=decodeURIComponent("https://myblog.heng.ink/admin/index.html"),console.log(this.url);var t=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){t.canBack((function(n){n.canBack?t.back():t.close()}))}))}};t.default=u},f11c:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){}));var u=function(){var n=this.$createElement,t=this._self._c||n;return t("v-uni-web-view",{attrs:{src:this.url}})},c=[]},fd2c:function(n,t,e){"use strict";e.r(t);var u=e("f11c"),c=e("23f1");for(var i in c)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return c[n]}))}(i);var r=e("f0c5"),a=Object(r["a"])(c["default"],u["b"],u["c"],!1,null,"205fbc95",null,!1,u["a"],void 0);t["default"]=a.exports}}]);