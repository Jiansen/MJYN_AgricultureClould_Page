webpackJsonp([7],{"./app/containers/UserListPage/constants.js":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a="app/UserListPage/SELECT_PERMISSION"},"./app/containers/UserListPage/mock/users.js":function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var n=r("./app/utils/mock.js");r.d(t,"a",function(){return u});var s=["怡君","欣怡","雅雯","心怡","志豪","雅婷","雅惠","家豪","雅玲","静怡","志伟","俊宏","建宏","佩君","怡婷","淑芬","静宜","俊杰","怡如","家铭"],i=["农场主","管理员","模拟管理员","游客"],o=function(e){return[].concat(a(Array(e).keys())).map(function(e){return{id:r.i(n.a)(1e3,2e3),headThumbnailUrl:"",name:s[r.i(n.a)(0,s.length-1)],userName:r.i(n.a)(136e8,13699999999).toString(),permission:i[r.i(n.a)(0,i.length-1)],farms:["农1","农2","农3"],plots:["区1","区2","区3","区4","区5"],mobile:r.i(n.a)(186e8,18699999999).toString(),wechat:r.i(n.a)(128e8,12899999999).toString(),registrationDate:"2017/08/22",lastLogInDate:"2017/08/22"}})},u=o(15)},"./app/containers/UserListPage/reducer.js":function(e,t,r){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,a=t.payload;switch(r){case s.a:return e.set("selectedPermission",a);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r("./node_modules/immutable/dist/immutable.js"),s=(r.n(n),r("./app/containers/UserListPage/constants.js")),i=r("./app/containers/UserListPage/mock/users.js"),o=r.i(n.fromJS)({selectedPermission:"全选",users:i.a});t.default=a},"./app/utils/mock.js":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}}});