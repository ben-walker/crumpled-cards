(function(e){function t(t){for(var r,a,o=t[0],c=t[1],s=t[2],l=0,p=[];l<o.length;l++)a=o[l],i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},u=[];function o(e){return c.p+"js/"+({"private~public":"private~public",private:"private",public:"public"}[e]||e)+"."+{"private~public":"843fe15a",private:"910ab3e8",public:"065df6e5"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"private~public":1,private:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({"private~public":"private~public",private:"private",public:"public"}[e]||e)+"."+{"private~public":"4e4949d0",private:"b71babaa",public:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var o=i[u],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){o=l[u],s=o.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=u);var s,l=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=o(e),s=function(t){p.onerror=p.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}i[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:p})},12e4);p.onerror=p.onload=s,l.appendChild(p)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},i=[],u={name:"app"},o=u,c=(n("5c0b"),n("2877")),s=Object(c["a"])(o,a,i,!1,null,null,null);s.options.__file="App.vue";var l,p,f=s.exports,d=n("8c4f"),m=function(){return Promise.all([n.e("private~public"),n.e("private")]).then(n.bind(null,"bb51"))},h=function(){return Promise.all([n.e("private~public"),n.e("private")]).then(n.bind(null,"8840"))},b=function(){return Promise.all([n.e("private~public"),n.e("private")]).then(n.bind(null,"6c40"))},v={path:"tables",name:"tables",component:h},g={path:"friends",name:"friends",component:b},w={path:"/",name:"home",component:m,redirect:{name:"tables"},meta:{auth:!0},children:[v,g]},y=function(){return Promise.all([n.e("private~public"),n.e("public")]).then(n.bind(null,"eec5"))},O={path:"/welcome",name:"welcome",component:y},j={path:"*",redirect:"/"},E=function(){return Promise.all([n.e("private~public"),n.e("public")]).then(n.bind(null,"c656"))},k=function(){return Promise.all([n.e("private~public"),n.e("public")]).then(n.bind(null,"4016"))},x=function(){return Promise.all([n.e("private~public"),n.e("public")]).then(n.bind(null,"fb48"))},P={path:"login",name:"login",component:k},T={path:"signup",name:"signup",component:x},_={path:"",redirect:"/authenticate/login"},R={path:"/authenticate",component:E,children:[P,T,_]},C=function(){return Promise.all([n.e("private~public"),n.e("private")]).then(n.bind(null,"4334"))},N={path:"/profile",name:"profile",component:C,meta:{auth:!0}},S=[w,O,j,R,N],A=(n("96cf"),n("3040")),L=n("2f62"),M=function(){return{authenticated:!1,loading:!1}},I={authenticated:function(e){return!!e.authenticated}},q=n("9393"),U=n("9179"),B=n("1712"),D=n("a322"),$=(n("456d"),n("ac6a"),"RESET"),F="AUTHENTICATE",G="START_LOADING",J="STOP_LOADING",H=(l={},Object(D["a"])(l,F,function(e){e.authenticated=!0}),Object(D["a"])(l,$,function(e){var t=M();Object.keys(t).forEach(function(n){e[n]=t[n]})}),Object(D["a"])(l,G,function(e){e.loading=!0}),Object(D["a"])(l,J,function(e){e.loading=!1}),l),K={authenticate:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,u,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=t.dispatch,r(G),e.next=4,Object(B["a"])(U["b"].post(n.endpoint,n.credentials));case 4:if(i=e.sent,u=Object(q["a"])(i,1),o=u[0],!o){e.next=10;break}throw r(J),o;case 10:a("profile/populate"),r(F),r(J);case 13:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,n("clearAll",null,{root:!0}),e.next=4,Object(B["a"])(U["b"].post("logOut"));case 4:if(r=e.sent,a=Object(q["a"])(r,1),i=a[0],!i){e.next=9;break}throw i;case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),authCheck:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,e.next=3,Object(B["a"])(U["a"].get("me"));case 3:r=e.sent,a=Object(q["a"])(r,1),i=a[0],i&&n("clearAll",null,{root:!0});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},V=function(){return{id:"",username:"",email:"",picture:{}}},z={id:function(e){return e.id},username:function(e){return e.username},email:function(e){return e.email},picture:function(e){return e.picture}},Q="POPULATE",W="RESET",X=(p={},Object(D["a"])(p,W,function(e){var t=V();Object.keys(t).forEach(function(n){e[n]=t[n]})}),Object(D["a"])(p,Q,function(e,t){e.id=t._id,e.username=t.username,e.email=t.email,e.picture=t.profilePicture}),p),Y={populate:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,Object(B["a"])(U["b"].get("me"));case 3:if(r=e.sent,a=Object(q["a"])(r,2),i=a[0],u=a[1],!i){e.next=9;break}throw i;case 9:n(Q,u.data.user);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),uploadProfilePic:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,r=t.dispatch,e.next=3,Object(B["a"])(U["b"].post("profilePicture",n,{headers:{"Content-Type":"multipart/form-data"}}));case 3:if(a=e.sent,i=Object(q["a"])(a,1),u=i[0],!u){e.next=8;break}throw u;case 8:r("populate");case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},Z={namespaced:!0,state:V(),getters:z,actions:Y,mutations:X},ee={namespaced:!0,state:M(),getters:I,actions:K,mutations:H,modules:{profile:Z}},te={},ne={},re={SOCKET_CONNECT:function(e){e.connected=!0}},ae={connected:!1},ie={namespaced:!0,state:ae,getters:te,actions:ne,mutations:re},ue=n("0e44");r["default"].use(L["a"]);var oe=!1,ce=function(e){return{user:e.user,socket:e.socket}},se=new L["a"].Store({modules:{user:ee,socket:ie},actions:{clearAll:function(e){var t=e.commit;t("user/RESET"),t("user/profile/RESET")}},plugins:[Object(ue["a"])({reducer:ce})],strict:oe}),le=function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,se.dispatch("user/authCheck");case 2:a=t.matched.some(function(e){return e.meta.auth}),i=se.getters["user/authenticated"],a&&!i?r("/welcome"):!a&&i?r("/"):r();case 5:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}();r["default"].use(d["a"]);var pe=new d["a"]({mode:"history",routes:S});pe.beforeEach(le);var fe=pe,de=n("f2d6"),me=n.n(de);r["default"].use(me.a);var he=new me.a({useVuex:!0,vuexModuleName:"wait",registerComponent:!0,componentName:"v-wait",registerDirective:!0,directiveName:"wait"}),be=(n("bb70"),n("ecee")),ve=n("c074"),ge=n("7a55");be["library"].add(ve["c"],ve["d"],ve["b"],ve["m"],ve["p"],ve["k"],ve["o"],ve["f"],ve["q"],ve["e"],ve["l"],ve["n"],ve["i"],ve["j"],ve["a"],ve["g"],ve["h"]),be["dom"].watch(),r["default"].component("font-awesome-icon",ge["FontAwesomeIcon"]);var we=n("85ff"),ye=n.n(we),Oe=!1;r["default"].use(ye.a,{isEnabled:Oe,logLevel:"debug",stringifyArguments:!1,showLogLevel:!0,showMethodName:!0,separator:"||",showConsoleColors:!0});var je=n("c2ad"),Ee=n("34a1");r["default"].use(Ee["Field"]),r["default"].use(Ee["Input"]),r["default"].use(Ee["Icon"]),r["default"].use(Ee["Toast"]),r["default"].use(Ee["Modal"]),r["default"].use(Ee["Upload"]),r["default"].use(Ee["Dropdown"]),r["default"].use(Ee["Tooltip"]),r["default"].use(Ee["Pagination"]),je["a"].defaultIconPack="fas";var ke=n("8055"),xe=n.n(ke),Pe=n("0a12"),Te=n.n(Pe),_e=xe()("https://coffee-casino.herokuapp.com");r["default"].use(Te.a,_e,se);n("77ed");var Re=n("7f53"),Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{staticClass:"is-unselectable",attrs:{label:e.label,"custom-class":e.customClass,type:e.type,message:e.errorMessage}},[e._t("default")],2)},Ne=[],Se={extends:Re["b"],computed:{type:function(){return this.hasErrors?"is-danger":null},customClass:function(){return this.hasErrors?"has-text-danger":null},errorMessage:function(){return this.hasErrors?this.firstErrorMessage:null}}},Ae=Se,Le=Object(c["a"])(Ae,Ce,Ne,!1,null,null,null);Le.options.__file="Template.vue";var Me=Le.exports,Ie={required:"{attribute} is required",userExists:"User not found",minLength:"{attribute} is too short",maxLength:"{attribute} is too long",unique:"{attribute} is already taken",email:"Email is invalid",minEntropy:"{attribute} is not strong enough",manualError:"If you're seeing this, supply a local error message"};r["default"].use(Re["a"],{template:Me,messages:Ie});var qe=n("cd4e"),Ue=(n("ed27"),{showSpinner:!1});Object(qe["loadProgressBar"])(Ue,U["b"]),r["default"].directive("focus",{inserted:function(e){"INPUT"===e.tagName?e.focus():e.querySelector("input").focus()}}),r["default"].config.productionTip=!1,r["default"].prototype.$appName="Poker Nook",new r["default"]({router:fe,store:se,wait:he,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},9179:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return o});var r=n("bc3a"),a=n.n(r),i={baseURL:"https://coffee-casino.herokuapp.com/api/",withCredentials:!0},u=a.a.create(i),o=a.a.create(i)}});
//# sourceMappingURL=app.414eb6e8.js.map