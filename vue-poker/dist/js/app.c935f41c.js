(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function u(e){return c.p+"js/"+({visible:"visible"}[e]||e)+"."+{"chunk-7220":"642b9e04",bb51:"c0fe1511",visible:"1c2ab975"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-7220":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({visible:"visible"}[e]||e)+"."+{"chunk-7220":"84c40e90",bb51:"31d6cfe0",visible:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],s=u.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=o);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=u(e),s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}i[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2:function(e,t){},2856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},i=[],o={name:"app"},u=o,c=(n("5c0b"),n("2877")),s=Object(c["a"])(u,a,i,!1,null,null,null);s.options.__file="App.vue";var l,f,p=s.exports,d=n("8c4f"),m=function(){return Promise.all([n.e("chunk-7220"),n.e("bb51")]).then(n.bind(null,"bb51"))},h={path:"/",name:"home",component:m,meta:{auth:!0}},b=function(){return Promise.all([n.e("chunk-7220"),n.e("visible")]).then(n.bind(null,"eec5"))},v={path:"/welcome",name:"welcome",component:b},g={path:"*",redirect:"/"},w=function(){return Promise.all([n.e("chunk-7220"),n.e("visible")]).then(n.bind(null,"c656"))},y=function(){return Promise.all([n.e("chunk-7220"),n.e("visible")]).then(n.bind(null,"4016"))},O=function(){return Promise.all([n.e("chunk-7220"),n.e("visible")]).then(n.bind(null,"fb48"))},k={path:"login",name:"login",component:y},j={path:"signup",name:"signup",component:O},E={path:"",redirect:"/authenticate/login"},x={path:"/authenticate",component:w,children:[k,j,E]},P=[h,v,g,x],T=(n("96cf"),n("3040")),_=n("2f62"),R=function(){return{authenticated:!1,loading:!1}},C={authenticated:function(e){return!!e.authenticated}},A=n("9393"),N=n("9179"),S=n("1712"),L=n("a322"),U=(n("456d"),n("ac6a"),"RESET"),I="AUTHENTICATE",M="START_LOADING",q="STOP_LOADING",B=(l={},Object(L["a"])(l,I,function(e){e.authenticated=!0}),Object(L["a"])(l,U,function(e){var t=R();Object.keys(t).forEach(function(n){e[n]=t[n]})}),Object(L["a"])(l,M,function(e){e.loading=!0}),Object(L["a"])(l,q,function(e){e.loading=!1}),l),D={authenticate:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=t.dispatch,r(M),e.next=4,Object(S["a"])(N["a"].post(n.endpoint,n.credentials));case 4:if(i=e.sent,o=Object(A["a"])(i,1),u=o[0],!u){e.next=10;break}throw r(q),u;case 10:a("profile/populate"),r(I),r(q);case 13:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,n("clearAll",null,{root:!0}),e.next=4,Object(S["a"])(N["a"].post("logOut"));case 4:if(r=e.sent,a=Object(A["a"])(r,1),i=a[0],!i){e.next=9;break}throw i;case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),authCheck:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,e.next=3,Object(S["a"])(N["a"].get("me"));case 3:r=e.sent,a=Object(A["a"])(r,1),i=a[0],i&&n("clearAll",null,{root:!0});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},$=function(){return{id:"",username:"",email:"",profilePicUrl:""}},F={id:function(e){return e.id},username:function(e){return e.username},email:function(e){return e.email},pictureRef:function(e){return e.profilePicUrl}},G="POPULATE",J="RESET",H="UPDATE_PROFILE_PIC",K=(f={},Object(L["a"])(f,G,function(e,t){e.id=t._id,e.username=t.username,e.email=t.email}),Object(L["a"])(f,J,function(e){var t=$();Object.keys(t).forEach(function(n){e[n]=t[n]})}),Object(L["a"])(f,H,function(e,t){e.profilePicUrl="".concat("https://coffee-casino.herokuapp.com/api/","profilePicture/").concat(t)}),f),V={populate:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i,o,u,c,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,e.next=3,Object(S["a"])(N["a"].get("me"));case 3:if(a=e.sent,i=Object(A["a"])(a,2),o=i[0],u=i[1],!o){e.next=9;break}throw o;case 9:return n(G,u.data.user),e.next=12,Object(S["a"])(N["a"].get("profilePictureByUsername/".concat(r.username)));case 12:if(c=e.sent,s=Object(A["a"])(c,2),o=s[0],u=s[1],!o){e.next=18;break}throw o;case 18:n(H,u.data.id);case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),uploadProfilePic:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(S["a"])(N["a"].post("profilePicture",n,{headers:{"Content-Type":"multipart/form-data"}}));case 3:if(a=e.sent,i=Object(A["a"])(a,2),o=i[0],u=i[1],!o){e.next=9;break}throw o;case 9:r(H,u.data.id);case 10:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},z={namespaced:!0,state:$(),getters:F,actions:V,mutations:K},Q={namespaced:!0,state:R(),getters:C,actions:D,mutations:B,modules:{profile:z}},W={},X={},Y={SOCKET_CONNECT:function(e){e.connected=!0}},Z={connected:!1},ee={namespaced:!0,state:Z,getters:W,actions:X,mutations:Y},te=n("0e44");r["default"].use(_["a"]);var ne=!1,re=function(e){return{user:e.user,socket:e.socket}},ae=new _["a"].Store({modules:{user:Q,socket:ee},actions:{clearAll:function(e){var t=e.commit;t("user/RESET"),t("user/profile/RESET")}},plugins:[Object(te["a"])({reducer:re})],strict:ne}),ie=function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ae.dispatch("user/authCheck");case 2:a=t.matched.some(function(e){return e.meta.auth}),i=ae.getters["user/authenticated"],a&&!i?r("/welcome"):!a&&i?r("/"):r();case 5:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}();r["default"].use(d["a"]);var oe=new d["a"]({mode:"history",linkActiveClass:"is-active",routes:P});oe.beforeEach(ie);var ue=oe,ce=n("f2d6"),se=n.n(ce);r["default"].use(se.a);var le=new se.a({useVuex:!0,vuexModuleName:"wait",registerComponent:!0,componentName:"v-wait",registerDirective:!0,directiveName:"wait"}),fe=n("ecee"),pe=n("c074"),de=n("7a55");fe["library"].add(pe["b"],pe["c"],pe["a"],pe["e"],pe["f"],pe["d"]),fe["dom"].watch(),r["default"].component("font-awesome-icon",de["FontAwesomeIcon"]);var me=n("85ff"),he=n.n(me),be=!1;r["default"].use(he.a,{isEnabled:be,logLevel:"debug",stringifyArguments:!1,showLogLevel:!0,showMethodName:!0,separator:"||",showConsoleColors:!0});var ve=n("8a03"),ge=n.n(ve);r["default"].use(ge.a,{defaultIconPack:"fas"});var we=n("8055"),ye=n.n(we),Oe=n("0a12"),ke=n.n(Oe),je=ye()("https://coffee-casino.herokuapp.com");r["default"].use(ke.a,je,ae);n("77ed");var Ee=n("7f53"),xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{staticClass:"is-unselectable",attrs:{label:e.label,"custom-class":e.customClass,type:e.type,message:e.errorMessage}},[e._t("default")],2)},Pe=[],Te={extends:Ee["b"],computed:{type:function(){return this.hasErrors?"is-danger":null},customClass:function(){return this.hasErrors?"has-text-danger":null},errorMessage:function(){return this.hasErrors?this.firstErrorMessage:null}}},_e=Te,Re=Object(c["a"])(_e,xe,Pe,!1,null,null,null);Re.options.__file="Template.vue";var Ce=Re.exports,Ae={required:"{attribute} is required",userExists:"User not found",minLength:"{attribute} is too short",maxLength:"{attribute} is too long",unique:"{attribute} is already taken",email:"Email is invalid",minEntropy:"{attribute} is not strong enough",manualError:"If you're seeing this, supply a local error message"};r["default"].use(Ee["a"],{template:Ce,messages:Ae}),r["default"].directive("focus",{inserted:function(e){"INPUT"===e.tagName?e.focus():e.querySelector("input").focus()}}),r["default"].config.productionTip=!1,r["default"].prototype.$appName="Poker Nook",new r["default"]({router:ue,store:ae,wait:le,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},9179:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),i=a.a.create({baseURL:"https://coffee-casino.herokuapp.com/api/",withCredentials:!0});t["a"]=i}});
//# sourceMappingURL=app.c935f41c.js.map