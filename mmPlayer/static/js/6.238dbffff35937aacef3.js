webpackJsonp([6],{"5gQ1":function(t,a){},DUiI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("uxit"),s=e("6Pj+"),n={name:"play-list",mixins:[e("5jRo").a],components:{MmLoading:s.a},data:function(){return{list:[]}},created:function(){var t=this;Object(i.e)().then(function(a){200===a.status&&(t.list=a.data.list,t._hideLoad())})}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"topList"},[e("mm-loading",{attrs:{loadingBgColor:"rgba(0,0,0,.6)"},model:{value:t.mmLoadShow,callback:function(a){t.mmLoadShow=a},expression:"mmLoadShow"}}),t._v(" "),t._l(t.list,function(a,i){return e("div",{key:i,staticClass:"list-item",attrs:{title:a.name+a.updateFrequency}},[e("router-link",{staticClass:"topList-item",attrs:{to:{path:"/music/details",query:{id:a.id}},tag:"div"}},[e("img",{staticClass:"cover-img",attrs:{src:a.coverImgUrl+"?param=200y200"}}),t._v(" "),e("h3",{staticClass:"name"},[t._v(t._s(a.name))])])],1)})],2)},staticRenderFns:[]};var r=e("VU/8")(n,o,!1,function(t){e("5gQ1")},"data-v-797f3e26",null);a.default=r.exports}});