(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],l=0,p=[];l<u.length;l++)i=u[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return u.p+"js/"+({visible:"visible"}[e]||e)+"."+{"chunk-b2a0":"f1efaa16",visible:"d2d59bd4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,s.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2:function(e,t){},2856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},o=[],i={name:"app"},u=i,s=(n("5c0b"),n("2877")),c=Object(s["a"])(u,a,o,!1,null,null,null);c.options.__file="App.vue";var l,f=c.exports,p=n("8c4f"),d=function(){return n.e("chunk-b2a0").then(n.bind(null,"bb51"))},h={path:"/",name:"home",component:d,meta:{auth:!0}},m=function(){return n.e("visible").then(n.bind(null,"eec5"))},b={path:"/welcome",name:"welcome",component:m},v={path:"*",redirect:"/"},g=function(){return n.e("visible").then(n.bind(null,"c656"))},w=function(){return n.e("visible").then(n.bind(null,"578a"))},O=function(){return n.e("visible").then(n.bind(null,"c3f0"))},y={path:"login",name:"login",component:w},j={path:"signup",name:"signup",component:O},x={path:"",redirect:"/authenticate/login"},k={path:"/authenticate",component:g,children:[y,j,x]},E=[h,b,v,k],_=n("9393"),T=(n("96cf"),n("3040")),P=n("1712"),N=n("2f62"),C={authenticated:function(e){return!!e.authenticated}},R=n("9179"),A=n("a322"),M="AUTHENTICATE",L="REVOKE_AUTH",S="START_LOADING",I="STOP_LOADING",U="POPULATE",q=(l={},Object(A["a"])(l,M,function(e){e.authenticated=!0}),Object(A["a"])(l,L,function(e){e.authenticated=!1}),Object(A["a"])(l,S,function(e){e.loading=!0}),Object(A["a"])(l,I,function(e){e.loading=!1}),Object(A["a"])(l,U,function(e,t){e.data=t}),l),$={signUp:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r(S),e.next=4,Object(P["a"])(R["a"].post("signUp",n));case 4:if(a=e.sent,o=Object(_["a"])(a,1),i=o[0],r(I),!i){e.next=10;break}throw i;case 10:r(M);case 11:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),logIn:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r(S),e.next=4,Object(P["a"])(R["a"].post("logIn",n));case 4:if(a=e.sent,o=Object(_["a"])(a,1),i=o[0],r(I),!i){e.next=10;break}throw i;case 10:r(M);case 11:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(P["a"])(R["a"].post("logOut"));case 3:if(r=e.sent,a=Object(_["a"])(r,1),o=a[0],!o){e.next=8;break}throw o;case 8:n(L);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getMe:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(P["a"])(R["a"].get("me"));case 3:if(r=e.sent,a=Object(_["a"])(r,2),o=a[0],i=a[1],!o){e.next=10;break}throw n(L),o;case 10:n(U,i.data.user);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},D={authenticated:!1,loading:!1,data:{}},G={namespaced:!0,state:D,getters:C,actions:$,mutations:q},H={},J={},K={SOCKET_CONNECT:function(e){e.connected=!0}},V={connected:!1},B={namespaced:!0,state:V,getters:H,actions:J,mutations:K},F=n("0e44");r["default"].use(N["a"]);var z=!1,Q=new N["a"].Store({modules:{user:G,socket:B},plugins:[Object(F["a"])()],strict:z}),W=function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,o,i,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(P["a"])(Q.dispatch("user/getMe"));case 2:a=e.sent,o=Object(_["a"])(a,1),i=o[0],u=t.matched.some(function(e){return e.meta.auth}),s=null===i,u&&!s?r("/welcome"):!u&&s?r("/"):r();case 8:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}();r["default"].use(p["a"]);var X=new p["a"]({mode:"history",linkActiveClass:"is-active",routes:E});X.beforeEach(W);var Y=X,Z=n("f2d6"),ee=n.n(Z);r["default"].use(ee.a);var te=new ee.a({useVuex:!0,vuexModuleName:"wait",registerComponent:!0,componentName:"v-wait",registerDirective:!0,directiveName:"wait"}),ne=n("ecee"),re=n("c074"),ae=n("7a55");ne["library"].add(re["b"],re["c"],re["a"],re["d"],re["e"]),ne["dom"].watch(),r["default"].component("font-awesome-icon",ae["FontAwesomeIcon"]);var oe=n("85ff"),ie=n.n(oe),ue=!1;r["default"].use(ie.a,{isEnabled:ue,logLevel:"debug",stringifyArguments:!1,showLogLevel:!0,showMethodName:!0,separator:"||",showConsoleColors:!0});var se=n("8a03"),ce=n.n(se);r["default"].use(ce.a,{defaultIconPack:"fas"});var le=n("8055"),fe=n.n(le),pe=n("0a12"),de=n.n(pe),he=fe()("https://coffee-casino.herokuapp.com");r["default"].use(de.a,he,Q);n("77ed");var me=n("7f53"),be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{staticClass:"is-unselectable",attrs:{label:e.label,"custom-class":e.customClass,type:e.type,message:e.errorMessage}},[e._t("default")],2)},ve=[],ge={extends:me["b"],computed:{type:function(){return this.hasErrors?"is-danger":null},customClass:function(){return this.hasErrors?"has-text-danger":null},errorMessage:function(){return this.hasErrors?this.firstErrorMessage:null}}},we=ge,Oe=Object(s["a"])(we,be,ve,!1,null,null,null);Oe.options.__file="Template.vue";var ye=Oe.exports,je={required:"{attribute} is required",userExists:"User not found",minLength:"{attribute} is too short",maxLength:"{attribute} is too long",unique:"{attribute} is already taken",email:"Email is invalid",passwordMatches:"Password does not match",minEntropy:"{attribute} is not strong enough",manualError:"If you're seeing this, supply a local error message"};r["default"].use(me["a"],{template:ye,messages:je}),r["default"].directive("focus",{inserted:function(e){"INPUT"===e.tagName?e.focus():e.querySelector("input").focus()}});var xe=n("09bd"),ke=n.n(xe);r["default"].config.productionTip=!1,r["default"].prototype.$appName="Poker Nook",ke.a.shim(),new r["default"]({router:Y,store:Q,wait:te,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},9179:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),o=a.a.create({baseURL:"https://coffee-casino.herokuapp.com/api/",withCredentials:!0});t["a"]=o}});
//# sourceMappingURL=app.948f9775.js.map