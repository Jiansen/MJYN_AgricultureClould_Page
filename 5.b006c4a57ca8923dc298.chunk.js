webpackJsonp([5],{"./app/components/UserCard/index.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o("./node_modules/react/react.js"),s=o.n(i),u=o("./node_modules/react-bootstrap/lib/Button.js"),l=o.n(u),c=o("./node_modules/react-bootstrap/lib/ButtonToolbar.js"),p=o.n(c),d=o("./node_modules/react-bootstrap/lib/Col.js"),f=o.n(d),m=o("./node_modules/react-bootstrap/lib/Row.js"),b=o.n(m),h=o("./node_modules/react-bootstrap/lib/Image.js"),v=o.n(h);o.d(t,"b",function(){return j}),o.d(t,"a",function(){return w}),o.d(t,"d",function(){return P}),o.d(t,"c",function(){return S});var y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var a=t&&t.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&a)for(var s in a)void 0===o[s]&&(o[s]=a[s]);else o||(o=a||{});if(1===i)o.children=r;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),g=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),j="green",_="red",w="grey",x="black",P="rgb(13, 63, 123)",O={color:w},C={color:x},S={padding:"0em 1.5em 0em 1.5em",borderRadius:"2em",fontSize:"10px",boxShadow:"1px 1px 2px 1px rgba(200,200,200,0.3)",backgroundClip:"padding-box"},k={fontSize:"10px",backgroundColor:"white",margin:"0.3em 0.3em 1.5em 0.3em",padding:"2em 2em 3em 2em",display:"inline-block",boxShadow:"1px 1px 2px 1px rgba(200,200,200,0.3)"},I=y(v.a,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdluZyv6kKt-BGzaRlMs8hMU4py7jNPBH6Ayre_4abuabw2LgumA",circle:!0,responsive:!0}),A=y(f.a,{sm:3,style:O},void 0,"用户名"),R=y(f.a,{sm:3,style:O},void 0,"权限"),T=y(f.a,{sm:3,style:O},void 0,"农场"),E=y(f.a,{sm:3,style:O},void 0,"管理区域"),D=y(f.a,{sm:6,style:O},void 0,"绑定手机"),U=y(f.a,{sm:6,style:O},void 0,"绑定微信"),N=y(f.a,{sm:6,style:O},void 0,"注册时间"),B=y(f.a,{sm:6,style:O},void 0,"上次登录"),F=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),g(t,[{key:"render",value:function(){return y("div",{style:k},void 0,y(f.a,{sm:3},void 0,y(b.a,{},void 0,this.props.headThumbnailUrl,I),y(b.a,{style:{paddingTop:10}},void 0,y(f.a,{sm:3},void 0,y(l.a,{style:Object.assign({color:j},S),bsStyle:null,bsSize:"xsmall",onClick:this.props.onOperationButtonClick},void 0,"操作记录")))),y(f.a,{sm:9},void 0,y(b.a,{},void 0,y(f.a,{sm:6,style:{fontSize:"30px",color:"grey"}},void 0,this.props.name),y(f.a,{sm:6},void 0,y(p.a,{style:{paddingTop:10}},void 0,y(f.a,{sm:6},void 0,y(l.a,{style:Object.assign({color:j},S),bsStyle:null,bsSize:"xsmall",onClick:this.props.onEditButtonClick},void 0,"修改")),y(f.a,{sm:6},void 0,y(l.a,{style:Object.assign({color:_},S),bsStyle:null,bsSize:"xsmall",onClick:this.props.onDeleteButtonClick},void 0,"删除"))))),y(b.a,{style:{paddingTop:10}},void 0,A,y(f.a,{sm:3,style:C},void 0,this.props.userName)),y(b.a,{},void 0,R,y(f.a,{sm:9,style:C},void 0,this.props.permission)),y(b.a,{},void 0,T,y(f.a,{sm:9,style:C},void 0,this.props.farms.join(" "))),y(b.a,{},void 0,E,y(f.a,{sm:9,style:C},void 0,this.props.plots.join(" "))),y(b.a,{},void 0,y(f.a,{sm:6},void 0,y(b.a,{},void 0,D,y(f.a,{sm:6,style:C},void 0,this.props.mobile))),y(f.a,{sm:6},void 0,y(b.a,{},void 0,U,y(f.a,{sm:6,style:C},void 0,this.props.wechat)))),y(b.a,{},void 0,y(f.a,{sm:6},void 0,y(b.a,{},void 0,N,y(f.a,{sm:6,style:C},void 0,this.props.registrationDate))),y(f.a,{sm:6},void 0,y(b.a,{},void 0,B,y(f.a,{sm:6,style:C},void 0,this.props.lastLogInDate))))))}}]),t}(s.a.Component);t.e=F},"./app/containers/AuthProvider/wrappers.js":function(e,t,o){"use strict";var n=o("./node_modules/react-router-redux/lib/index.js"),r=(o.n(n),o("./node_modules/redux-auth-wrapper/lib/index.js"));o.n(r);o.d(t,"a",function(){return a}),o.d(t,"b",function(){return i});var a=o.i(r.UserAuthWrapper)({authSelector:function(e){return{userId:window.localStorage.getItem("USER_ID")}},redirectAction:n.routerActions.replace,failureRedirectPath:"/",predicate:function(e){return null!==e.userId&&e.userId.length>0},wrapperDisplayName:"UserIsAuthenticated"}),i=o.i(r.UserAuthWrapper)({authSelector:function(e){return{userId:window.localStorage.getItem("USER_ID")}},failureRedirectPath:"/demo",predicate:function(e){return null===e.userId||0===e.userId.length},wrapperDisplayName:"UserIsNotAuthenticated"})},"./app/containers/UserLogInPage/index.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function s(e){var t=e.id,o=e.label,n=e.help,r=e.buttonName,a=e.buttonAction,s=i(e,["id","label","help","buttonName","buttonAction"]);return z(I.a,{controlId:t},void 0,o&&z(g.a,{sm:4},void 0,z(x.a,{style:{fontWeight:"normal"}},void 0,o)),z(g.a,{sm:o&&6||8},void 0,c.a.createElement(S.a,s),n&&z(R.a,{},void 0,n)),r&&z(g.a,{sm:1},void 0,z(h.a,{style:Object.assign({color:F.b},F.c),bsStyle:null,bsSize:"xsmall",onClick:a},void 0," ",r," ")))}function u(e){return{changeRoute:function(t){return e(push(t))},onChangeUsernameInput:function(t){return e(o.i(m.a)(t.target.value))},onChangePasswordInput:function(t){return e(o.i(m.b)(t.target.value))},onChagnePageAction:function(t){return e(o.i(m.c)(t))},onLoginFormSubmit:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e(o.i(m.d)())},dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o("./node_modules/react/react.js"),c=o.n(l),p=o("./node_modules/react-redux/lib/index.js"),d=(o.n(p),o("./node_modules/reselect/es/index.js")),f=o("./app/containers/UserLogInPage/selectors.js"),m=o("./app/containers/UserLogInPage/actions.js"),b=o("./node_modules/react-bootstrap/lib/Button.js"),h=o.n(b),v=o("./node_modules/react-bootstrap/lib/ButtonGroup.js"),y=(o.n(v),o("./node_modules/react-bootstrap/lib/Col.js")),g=o.n(y),j=o("./node_modules/react-bootstrap/lib/Row.js"),_=o.n(j),w=o("./node_modules/react-bootstrap/lib/ControlLabel.js"),x=o.n(w),P=o("./node_modules/react-bootstrap/lib/Form.js"),O=o.n(P),C=o("./node_modules/react-bootstrap/lib/FormControl.js"),S=o.n(C),k=o("./node_modules/react-bootstrap/lib/FormGroup.js"),I=o.n(k),A=o("./node_modules/react-bootstrap/lib/HelpBlock.js"),R=o.n(A),T=o("./node_modules/react-bootstrap/lib/MenuItem.js"),E=(o.n(T),o("./node_modules/react-bootstrap/lib/Nav.js")),D=(o.n(E),o("./node_modules/react-bootstrap/lib/NavDropdown.js")),U=(o.n(D),o("./app/containers/AuthProvider/wrappers.js")),N=o("./app/containers/UserLogInPage/resources/background.png"),B=o.n(N),F=o("./app/components/UserCard/index.js"),L=o("./app/components/Icon/index.js");o.d(t,"UserLogInPage",function(){return H});var M=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),z=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var a=t&&t.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&a)for(var s in a)void 0===o[s]&&(o[s]=a[s]);else o||(o=a||{});if(1===i)o.children=r;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),W={marginTop:"30em"},$=z(_.a,{},void 0,z(g.a,{sm:1},void 0,z(L.a,{name:"142"})),z(g.a,{sm:7},void 0,"美普云农")),V=z(_.a,{},void 0,z(g.a,{sm:2,smOffset:6},void 0," 忘记密码? ")),q=z(g.a,{sm:2},void 0," ",z(L.a,{name:"23"})," 微信登录 "),G=z(g.a,{sm:3},void 0," ",z(L.a,{name:"127"})," 手机验证码登录"),H=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),M(t,[{key:"render",value:function(){var e=this;return z("div",{},void 0,z("div",{style:{height:"100vh",width:"600px",color:"grey",float:"left",fontSize:"10px",boxShadow:"1px 1px 2px 1px rgba(200,200,200,0.3)"}},void 0,"login"===this.props.pageAction?z("div",{},void 0,z(_.a,{style:{marginTop:"1em"}},void 0,z(g.a,{sm:3,style:{color:F.b,fontSize:"15px",fontWeight:"bold"}},void 0,$)),z(_.a,{style:W},void 0,z(g.a,{smOffset:1,sm:11},void 0,z(O.a,{onSubmit:this.props.onLoginFormSubmit,horizontal:!0},void 0,z(_.a,{},void 0,z(s,{Id:"formHorizontalUsername",onChange:this.props.onChangeUsernameInput,value:this.props.usernameInputValue,type:"text",placeholder:"请输入用户名"})),z(_.a,{},void 0,z(s,{Id:"formHorizontalPassword",onChange:this.props.onChangePasswordInput,value:this.props.passwordInputValue,type:"password",placeholder:"请输入密码"})),V,z(_.a,{style:{marginTop:"1em"}},void 0,q,G,z(g.a,{sm:1,smOffset:1,style:{marginTop:"0.5em"}},void 0,z(I.a,{},void 0,z(h.a,{type:"submit",bsStyle:null,style:Object.assign({color:F.b},F.c),disabled:0===this.props.usernameInputValue.length||0===this.props.passwordInputValue.length},void 0,"登 录"),z(R.a,{},void 0,this.props.userLogInError))),z(g.a,{sm:1,style:{marginTop:"0.5em"}},void 0,z(I.a,{},void 0,z(h.a,{bsStyle:null,style:Object.assign({color:F.b},F.c),onClick:function(){return e.props.onChagnePageAction("signUp")}},void 0,"注 册")))))))):z(O.a,{},void 0,"Signup Form",z(h.a,{bsStyle:"primary",style:{},onClick:function(){return e.props.onChagnePageAction("login")}},void 0,"Back"))),z("div",{style:{width:"auto",overflow:"hidden"}},void 0,z("img",{src:B.a,style:{height:"100vh",width:"100%",overflow:"hidden"}})))}}]),t}(c.a.Component),Q=o.i(d.b)({usernameInputValue:o.i(f.a)(),passwordInputValue:o.i(f.b)(),userLogInError:o.i(f.c)(),pageAction:o.i(f.d)()});t.default=o.i(p.connect)(Q,u)(o.i(U.b)(H))},"./app/containers/UserLogInPage/resources/background.png":function(e,t,o){e.exports=o.p+"5b4e4010fa2d972f1535e8b709d3f184.png"},"./node_modules/lodash.isempty/index.js":function(e,t,o){(function(e,o){function n(e,t){return null==e?void 0:e[t]}function r(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function a(e,t){return function(o){return e(t(o))}}function i(e){return q.call(e)}function s(e){if(!y(e)||l(e))return!1;var t=h(e)||r(e)?G:T;return t.test(p(e))}function u(e,t){var o=n(e,t);return s(o)?o:void 0}function l(e){return!!W&&W in e}function c(e){var t=e&&e.constructor,o="function"==typeof t&&t.prototype||M;return e===o}function p(e){if(null!=e){try{return $.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function d(e){return m(e)&&V.call(e,"callee")&&(!Q.call(e,"callee")||q.call(e)==w)}function f(e){return null!=e&&v(e.length)&&!h(e)}function m(e){return g(e)&&f(e)}function b(e){if(f(e)&&(le(e)||"string"==typeof e||"function"==typeof e.splice||ce(e)||d(e)))return!e.length;var t=ue(e);if(t==O||t==k)return!e.size;if(oe||c(e))return!K(e).length;for(var o in e)if(V.call(e,o))return!1;return!0}function h(e){var t=y(e)?q.call(e):"";return t==x||t==P}function v(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=_}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){return!!e&&"object"==typeof e}function j(){return!1}var _=9007199254740991,w="[object Arguments]",x="[object Function]",P="[object GeneratorFunction]",O="[object Map]",C="[object Object]",S="[object Promise]",k="[object Set]",I="[object WeakMap]",A="[object DataView]",R=/[\\^$.*+?()[\]{}|]/g,T=/^\[object .+?Constructor\]$/,E="object"==typeof e&&e&&e.Object===Object&&e,D="object"==typeof self&&self&&self.Object===Object&&self,U=E||D||Function("return this")(),N="object"==typeof t&&t&&!t.nodeType&&t,B=N&&"object"==typeof o&&o&&!o.nodeType&&o,F=B&&B.exports===N,L=Function.prototype,M=Object.prototype,z=U["__core-js_shared__"],W=function(){var e=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),$=L.toString,V=M.hasOwnProperty,q=M.toString,G=RegExp("^"+$.call(V).replace(R,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),H=F?U.Buffer:void 0,Q=M.propertyIsEnumerable,J=H?H.isBuffer:void 0,K=a(Object.keys,Object),Y=u(U,"DataView"),Z=u(U,"Map"),X=u(U,"Promise"),ee=u(U,"Set"),te=u(U,"WeakMap"),oe=!Q.call({valueOf:1},"valueOf"),ne=p(Y),re=p(Z),ae=p(X),ie=p(ee),se=p(te),ue=i;(Y&&ue(new Y(new ArrayBuffer(1)))!=A||Z&&ue(new Z)!=O||X&&ue(X.resolve())!=S||ee&&ue(new ee)!=k||te&&ue(new te)!=I)&&(ue=function(e){var t=q.call(e),o=t==C?e.constructor:void 0,n=o?p(o):void 0;if(n)switch(n){case ne:return A;case re:return O;case ae:return S;case ie:return k;case se:return I}return t});var le=Array.isArray,ce=J||j;o.exports=b}).call(t,o("./node_modules/webpack/buildin/global.js"),o("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/react-bootstrap/lib/ButtonToolbar.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=o("./node_modules/babel-runtime/helpers/extends.js"),a=n(r),i=o("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),s=n(i),u=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=n(u),c=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=n(c),d=o("./node_modules/babel-runtime/helpers/inherits.js"),f=n(d),m=o("./node_modules/classnames/index.js"),b=n(m),h=o("./node_modules/react/react.js"),v=n(h),y=o("./node_modules/react-bootstrap/lib/utils/bootstrapUtils.js"),g=function(e){function t(){return(0,l.default)(this,t),(0,p.default)(this,e.apply(this,arguments))}return(0,f.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,o=(0,s.default)(e,["className"]),n=(0,y.splitBsProps)(o),r=n[0],i=n[1],u=(0,y.getClassSet)(r);return v.default.createElement("div",(0,a.default)({},i,{role:"toolbar",className:(0,b.default)(t,u)}))},t}(v.default.Component);t.default=(0,y.bsClass)("btn-toolbar",g),e.exports=t.default},"./node_modules/react-bootstrap/lib/Row.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=o("./node_modules/babel-runtime/helpers/extends.js"),a=n(r),i=o("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),s=n(i),u=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=n(u),c=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=n(c),d=o("./node_modules/babel-runtime/helpers/inherits.js"),f=n(d),m=o("./node_modules/classnames/index.js"),b=n(m),h=o("./node_modules/react/react.js"),v=n(h),y=o("./node_modules/prop-types-extra/lib/elementType.js"),g=n(y),j=o("./node_modules/react-bootstrap/lib/utils/bootstrapUtils.js"),_={componentClass:g.default},w={componentClass:"div"},x=function(e){function t(){return(0,l.default)(this,t),(0,p.default)(this,e.apply(this,arguments))}return(0,f.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,o=e.className,n=(0,s.default)(e,["componentClass","className"]),r=(0,j.splitBsProps)(n),i=r[0],u=r[1],l=(0,j.getClassSet)(i);return v.default.createElement(t,(0,a.default)({},u,{className:(0,b.default)(o,l)}))},t}(v.default.Component);x.propTypes=_,x.defaultProps=w,t.default=(0,j.bsClass)("row",x),e.exports=t.default},"./node_modules/redux-auth-wrapper/lib/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0}),t.UserAuthWrapper=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=o("./node_modules/react/react.js"),d=n(p),f=o("./node_modules/react-redux/lib/index.js"),m=o("./node_modules/hoist-non-react-statics/index.js"),b=n(m),h=o("./node_modules/lodash.isempty/index.js"),v=n(h),y={LoadingComponent:function(){return null},failureRedirectPath:"/login",FailureComponent:void 0,redirectQueryParamName:"redirect",wrapperDisplayName:"AuthWrapper",predicate:function(e){return!(0,v.default)(e)},authenticatingSelector:function(){return!1},allowRedirectBack:!0};t.UserAuthWrapper=function(e){function t(e){var t,o,u,y,_=e.displayName||e.name||"Component",w=function(e){return void 0!==x?{redirect:function(t){return e(x(t))}}:{}},P=(t=(0,f.connect)(function(e,t){return{authData:n(e,t,!1),failureRedirectPath:"function"==typeof v?v(e,t):v,isAuthenticating:m(e,t)}},w),t((y=u=function(t){function o(){var e,t,n,r;a(this,o);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return t=n=i(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(u))),n.getRedirectFunc=function(e){var t=e.redirect;if(t)return t;if(n.context.router.replace)return n.context.router.replace;throw new Error("You must provide a router context (or use React-Router 2.x) if not passing a redirectAction to "+j)},r=t,i(n,r)}return s(o,t),c(o,[{key:"componentWillMount",value:function(){this.props.isAuthenticating||O(this.props.authData)||!S||C(this.props.location,this.getRedirectFunc(this.props),this.props.failureRedirectPath)}},{key:"componentWillReceiveProps",value:function(e){var t=O(e.authData),o=e.isAuthenticating,n=O(this.props.authData),r=this.props.isAuthenticating;!o&&S&&(n&&!t||r&&!t)&&C(e.location,this.getRedirectFunc(e),e.failureRedirectPath)}},{key:"render",value:function(){var t=this.props,o=(t.redirect,t.authData),n=t.isAuthenticating,a=r(t,["redirect","authData","isAuthenticating"]);return O(o)?d.default.createElement(e,l({authData:o},a)):n?d.default.createElement(h,l({authData:o},a)):g?d.default.createElement(g,l({authData:o},a)):null}}]),o}(p.Component),u.displayName=j+"("+_+")",u.propTypes={failureRedirectPath:p.PropTypes.string.isRequired,location:S?k.isRequired:k,redirect:p.PropTypes.func,authData:p.PropTypes.object},u.contextTypes={router:p.PropTypes.object},o=y))||o);return(0,b.default)(P,e)}var o=l({},y,e),n=o.authSelector,m=o.authenticatingSelector,h=o.LoadingComponent,v=o.failureRedirectPath,g=o.FailureComponent,j=o.wrapperDisplayName,_=o.predicate,w=o.allowRedirectBack,x=o.redirectAction,P=o.redirectQueryParamName,O=function(e){return _(e)},C=function(e,t,o){var n=void 0;n=w?u({},P,""+e.pathname+e.search):{},t({pathname:o,query:n})},S=void 0===g,k=p.PropTypes.shape({pathname:p.PropTypes.string.isRequired,search:p.PropTypes.string.isRequired});return S&&(t.onEnter=function(e,t,o){var r=n(e.getState(),null,!0),a="function"==typeof v?v(e.getState(),null):v;O(r)||C(t.location,o,a)}),t}}});