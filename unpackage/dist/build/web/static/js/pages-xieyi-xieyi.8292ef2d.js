(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xieyi-xieyi"],{1246:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{xieyis:{},options:{}}},onLoad:function(t){this.options=t,1==t.type?uni.setNavigationBarTitle({title:"用户服务协议"}):2==t.type&&uni.setNavigationBarTitle({title:"隐私政策"}),this.exhtypeminiapp()},methods:{exhtypeminiapp:function(){var t=this,i={id:uni.getStorageSync("exType")};this.$axios.axios("POSt",this.$paths.exhtypeminiapp,i).then((function(i){200==i.code?(t.xieyis=i.data,t.xieyis.agreement=t.$tools.formatRichText(t.xieyis.agreement),t.xieyis.policy=t.$tools.formatRichText(t.xieyis.policy)):t.$tools.showToast(i.msg)})).catch((function(t){console.log("baossd",t)}))}}};i.default=n},3558:function(t,i,e){var n=e("736d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("db52ce66",n,!0,{sourceMap:!1,shadowMode:!1})},"3c56":function(t,i,e){"use strict";var n=e("3558"),o=e.n(n);o.a},"736d":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"",""]),t.exports=i},9121:function(t,i,e){"use strict";e.r(i);var n=e("1246"),o=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=o.a},dcb4:function(t,i,e){"use strict";e.r(i);var n=e("e90b"),o=e("9121");for(var s in o)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(s);e("3c56");var a=e("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"4f2e2e91",null,!1,n["a"],void 0);i["default"]=c.exports},e90b:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"p-all-20"},[1==this.options.type?[i("v-uni-rich-text",{attrs:{nodes:this.xieyis.agreement}})]:this._e(),2==this.options.type?[i("v-uni-rich-text",{attrs:{nodes:this.xieyis.policy}})]:this._e()],2)},o=[]}}]);