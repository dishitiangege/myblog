(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myou-imgs-imgAudit"],{a52f:function(e,t,n){"use strict";(function(e){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("498a"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("d81d"),n("a434"),n("4de4"),n("d3b7"),n("b64b");var i=a(n("c7eb")),r=a(n("1da1")),s=a(n("5530")),o=n("d9de"),u=e.database(),l=[],c={ascending:"asc",descending:"desc"},d={data:function(){return{collectionList:[u.collection("myou-imgs").field("category_name,coll,image,mode,name,status,tags,time,user_id,view,zan").getTemp(),u.collection("myou-img-category").field(" name as text,_id").getTemp()],query:"",where:{status:-1},orderby:"",orderByFieldName:"",selectedIndexs:[],options:(0,s.default)({pageSize:20,pageCurrent:1,filterData:{}},o.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"myou-imgs.xls",type:"xls",fields:{"分类":"category_name",coll:"coll",image:"image",mode:"mode",name:"name",status:"status",tags:"tags",time:"time",user_id:"user_id",view:"view",zan:"zan"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return l.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},showrevierw:function(e){uni.previewImage({urls:[e]})},throughWay:function(t,n){var a=this;return(0,r.default)((0,i.default)().mark((function r(){var s,o;return(0,i.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=3,e.database();case 3:return s=i.sent,i.next=6,s.collection("myou-imgs").doc(t).update({status:1});case 6:o=i.sent,o.result.updated>0?(a.$refs.udb.dataList.splice(n,1),uni.showToast({title:"审核通过"})):uni.showToast({title:"操作失败"});case 9:case"end":return i.stop()}}),r)})))()},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+c[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,o.filterToWhere)(this._filter,u.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=d}).call(this,n("a9ff")["default"])},b131:function(e,t,n){"use strict";n.r(t);var a=n("a52f"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},d9de:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var n={};for(var a in e){var s=e[a],o=s.type,u=s.value;switch(o){case"search":"string"===typeof u&&u.length&&(n[a]=new RegExp(u));break;case"select":if(u.length){var l,c=[],d=(0,r.default)(u);try{for(d.s();!(l=d.n()).done;){var f=l.value;c.push(t.eq(f))}}catch(C){d.e(C)}finally{d.f()}n[a]=t.or(c)}break;case"range":if(u.length){var v=u[0],h=u[1];n[a]=t.and([t.gte(v),t.lte(h)])}break;case"date":if(u.length){var g=(0,i.default)(u,2),p=g[0],m=g[1],b=new Date(p),y=new Date(m);n[a]=t.and([t.gte(b),t.lte(y)])}break;case"timestamp":if(u.length){var _=(0,i.default)(u,2),w=_[0],x=_[1];n[a]=t.and([t.gte(w),t.lte(x)])}break}}return n},t.validator=void 0;var i=a(n("3835")),r=a(n("b85c"));n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("14d9");t.validator={category_name:{rules:[{format:"string"}],label:"分类"},coll:{rules:[]},image:{rules:[{format:"string"}]},mode:{rules:[]},name:{rules:[]},status:{rules:[]},tags:{rules:[]},time:{rules:[]},user_id:{rules:[]},view:{rules:[]},zan:{rules:[]}};t.enumConverter={}},ee43:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("d7fb").default,unicloudDb:n("960d").default,uniTable:n("f33c").default,uniTr:n("6691").default,uniTh:n("73f9").default,uniTd:n("63af").default,uniPagination:n("f1f6").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:e.collectionList,where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,s=t.error;t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:s.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[e._v("分类")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"image")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"image")}}},[e._v("image")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"name")}}},[e._v("name")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"tags")}}},[e._v("tags")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"time")}}},[e._v("time")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"user_id")}}},[e._v("user_id")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"view")}}},[e._v("view")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.category_name&&t.category_name[0]&&t.category_name[0].text))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.image}})],1),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.tags))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.time))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.user_id))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.view))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"error"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.showrevierw(t.image)}}},[e._v("查看")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.throughWay(t._id,a)}}},[e._v("通过")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("驳回")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},f0ad:function(e,t,n){"use strict";n.r(t);var a=n("ee43"),i=n("b131");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s=n("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"27203616",null,!1,a["a"],void 0);t["default"]=o.exports}}]);