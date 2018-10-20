(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["private"],{4334:function(t,e,s){"use strict";s.r(e);var i=s("9393"),a=(s("96cf"),s("3040")),n=(s("cadf"),s("551c"),s("097d"),s("8a6d")),r=s("1712"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[s("div",{attrs:{id:"profile"}},[s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-head"},[s("a",{staticClass:"has-text-dark is-pulled-right",on:{click:function(e){t.$router.go(-1)}}},[s("b-icon",{attrs:{pack:"fas",icon:"times",size:"is-large"}})],1),s("div",{staticClass:"section"},[s("aside",[s("h1",{staticClass:"title is-1 is-unselectable"},[t._v("Your Profile")])]),s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-narrow"},[s("user-avatar",{staticClass:"has-text-centered",attrs:{size:190}}),s("br"),s("div",[s("p",{staticClass:"heading is-marginless is-unselectable"},[t._v("Username")]),s("p",{staticClass:"is-size-4 has-text-grey-dark has-text-weight-semibold is-unselectable"},[t._v(t._s(t.username))])]),s("div",[s("p",{staticClass:"heading is-marginless is-unselectable"},[t._v("Email")]),s("p",{staticClass:"is-size-4 has-text-grey-dark has-text-weight-semibold is-unselectable"},[t._v(t._s(t.email))])]),s("div",[s("b-upload",{on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[s("a",[t._v("Change Profile Pic")])])],1),s("div",[s("a",{staticClass:"has-text-danger",on:{click:t.logOut}},[t._v("Log Out")])])],1)])])])])])])},l=[],c=s("93f1"),u=s("261a"),d={name:"profile",data:function(){return{file:null}},props:{username:{type:String,required:!0},email:{type:String,required:!0}},components:{UserAvatar:c["a"],UserBadge:u["a"]},methods:{upload:function(){this.$emit("upload",this.file)},logOut:function(){this.$emit("logOut")}}},f=d,v=s("2877"),p=Object(v["a"])(f,o,l,!1,null,null,null);p.options.__file="profile.vue";var m=p.exports;e["default"]=Object(n["a"])({gettersToProps:{username:"user/profile/username",email:"user/profile/email"},methodsToEvents:{upload:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,s){var a,n,o,l,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.dispatch,n=new FormData,n.set("profilePicture",s),t.next=5,Object(r["a"])(a("user/profile/uploadProfilePic",n));case 5:if(o=t.sent,l=Object(i["a"])(o,1),c=l[0],!c){t.next=10;break}throw c;case 10:case"end":return t.stop()}},t,this)}));return function(e,s){return t.apply(this,arguments)}}(),logOut:function(t){var e=t.dispatch;e("user/logOut"),this.$router.push("/welcome")}}})("profile",m)},"44c0":function(t,e,s){},"6c40":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"friends"}},[s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"level"},[t._m(0),s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("user-search",{on:{error:t.handleError,userList:t.showFoundUsers}})],1)])]),s("div",{staticClass:"columns is-multiline"},t._l(t.users,function(t){return s("div",{staticClass:"column is-one-fifth"},[s("found-user",{attrs:{user:t}})],1)}))])]),s("back-to-top",{attrs:{visibleoffset:500}},[s("button",{staticClass:"button is-primary"},[t._v("Back to Top")])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item"},[s("h1",{staticClass:"title is-1 is-unselectable"},[t._v("Friends")])])])}],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"back-to-top-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"vue-back-to-top",style:"bottom:"+this.bottom+";right:"+this.right+";",on:{click:t.backToTop}},[t._t("default",[s("div",{staticClass:"default"},[s("span",[t._v("\n          "+t._s(t.text)+"\n        ")])])])],2)])},r=[],o=(s("c5f6"),{name:"BackToTop",props:{text:{type:String,default:"Voltar ao topo"},visibleoffset:{type:[String,Number],default:600},right:{type:String,default:"30px"},bottom:{type:String,default:"40px"}},data:function(){return{visible:!1}},mounted:function(){window.smoothscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(t-t/5)))},window.addEventListener("scroll",this.catchScroll)},destroyed:function(){window.removeEventListener("scroll",this.catchScroll)},methods:{catchScroll:function(){this.visible=window.pageYOffset>parseInt(this.visibleoffset)},backToTop:function(){window.smoothscroll(),this.$emit("scrolled")}}}),l=o,c=(s("cd9b"),s("2877")),u=Object(c["a"])(l,n,r,!1,null,null,null);u.options.__file="BackToTop.vue";var d=u.exports;d.install=function(t,e){t.component(d.name,d)};var f=d,v=s("2af9"),p=s("d453"),m=s("1b62"),h={name:"friends",data:function(){return{users:[]}},components:{UserSearch:v["d"],UserAvatar:p["a"],BackToTop:f,FoundUser:v["a"]},mixins:[m["a"]],methods:{showFoundUsers:function(t){this.users=t},handleError:function(t){if(t.response)switch(t.response.status){case 500:this.dangerToast("Internal server error")}else this.dangerToast("Something went wrong")}}},b=h,_=Object(c["a"])(b,i,a,!1,null,null,null);_.options.__file="Friends.vue";e["default"]=_.exports},8840:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"tables"}},[s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-1 is-unselectable"},[t._v("Tables")])])])])}],n=(s("cadf"),s("551c"),s("097d"),{name:"tables"}),r=n,o=s("2877"),l=Object(o["a"])(r,i,a,!1,null,null,null);l.options.__file="Tables.vue";e["default"]=l.exports},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("navbar"),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},a=[],n=s("2af9"),r={name:"home",components:{Navbar:n["b"]}},o=r,l=s("2877"),c=Object(l["a"])(o,i,a,!1,null,null,null);c.options.__file="Home.vue";e["default"]=c.exports},cd9b:function(t,e,s){"use strict";var i=s("44c0"),a=s.n(i);a.a}}]);
//# sourceMappingURL=private.910ab3e8.js.map