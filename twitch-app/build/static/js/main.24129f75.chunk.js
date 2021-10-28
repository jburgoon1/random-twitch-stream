(this["webpackJsonptwitch-app"]=this["webpackJsonptwitch-app"]||[]).push([[0],{171:function(e,t,n){},173:function(e,t,n){},182:function(e,t,n){},201:function(e,t,n){},204:function(e,t,n){},209:function(e,t){},211:function(e,t){},225:function(e,t){},227:function(e,t){},255:function(e,t){},257:function(e,t){},258:function(e,t){},263:function(e,t){},265:function(e,t){},271:function(e,t){},273:function(e,t){},292:function(e,t){},304:function(e,t){},307:function(e,t){},324:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),s=n.n(c),o=(n(171),n(9)),i=n.n(o),u=n(14),l=n(15),j=(n(173),n(22)),h=n(10),b=n(328),d=n(326),m=n(329),p=n(1),O=function(e){var t=e.user,n=e.token,a=e.logout;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(b.a.Brand,{href:"/",children:"Random Stream"}),Object(p.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:n?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(m.a,{className:"ms-auto",children:[Object(p.jsx)(m.a.Link,{as:j.b,to:"/random",className:"navlinks",children:"Streams"}),Object(p.jsx)(m.a.Link,{as:j.b,to:"/".concat(t),className:"navlinks",children:t}),Object(p.jsx)(m.a.Link,{as:j.b,to:"/logout",onClick:a,className:"navlinks",children:"Logout"})]})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(m.a,{className:"ms-auto",children:[Object(p.jsx)(m.a.Link,{as:j.b,to:"/signup",className:"navlinks",children:"Sign up"}),Object(p.jsx)(m.a.Link,{as:j.b,to:"/login",className:"navlinks",children:"Log In"})]})})})]})})})},f=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Welcome"}),Object(p.jsx)("p",{children:"This is a site to help smaller streamers grow and potentially get more viewers! "})]})},x=n(27),g=n(42),v=(n(182),n(163)),w=n(164),k=n(28),S=n.n(k),y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,F=function(){function e(){Object(v.a)(this,e)}return Object(w.a)(e,null,[{key:"request",value:function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r,c,s,o,u,l=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},r=l.length>2&&void 0!==l[2]?l[2]:"get",console.debug("API Call:",n,a,r),c="".concat(y,"/").concat(n),s={Authorization:"Bearer ".concat(e.token)},o="get"===r?a:{},t.prev=6,t.next=9,S()({url:c,method:r,data:a,params:o,headers:s});case 9:return t.abrupt("return",t.sent.data);case 12:throw t.prev=12,t.t0=t.catch(6),console.error("API Error:",t.t0.response),u=t.t0.response.data.error.message,Array.isArray(u)?u:[u];case 17:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("user/signup",n,"post");case 2:return a=t.sent,e.token=a.token,localStorage.setItem("token",e.token),t.abrupt("return",a.token);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"login",value:function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("user/login",n,"post");case 2:return a=t.sent,e.token=a.token,localStorage.setItem("token",e.token),t.abrupt("return",a.token);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("user/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();F.token=localStorage.getItem("token");var C=F,N=function(e){var t=e.login,n=Object(h.f)(),r=Object(a.useState)({username:"",password:""}),c=Object(l.a)(r,2),s=c[0],o=c[1];console.log(s);var j=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(x.a)({},n,a))}))};function b(){return(b=Object(u.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,C.login(s);case 3:r=e.sent,console.log(r),t(r),n.push("/");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Log In"}),Object(p.jsx)("div",{className:"logInDiv",children:Object(p.jsxs)("form",{className:"logInForm",onSubmit:function(e){return b.apply(this,arguments)},children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",id:"username",name:"username",onChange:j}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",onChange:j}),Object(p.jsx)("button",{className:"loginsubmit",children:"Submit"})]})})]})},I=(n(201),function(e){var t=e.login,n={username:"",name:"",email:"",password:""},r=Object(h.f)(),c=Object(a.useState)(n),s=Object(l.a)(c,2),o=s[0],j=s[1],b=function(e){var t=e.target,n=t.name,a=t.value;j((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(x.a)({},n,a))}))};var d=function(){var e=Object(u.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.register(n);case 2:a=e.sent,console.log(a),t(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Sign Up"}),Object(p.jsx)("div",{className:"signUpDiv",children:Object(p.jsxs)("form",{className:"signUpForm",onSubmit:function(e){e.preventDefault(),d(o),j(n),r.push("/")},children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",id:"username",name:"username",onChange:b}),Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{type:"text",id:"name",name:"name",onChange:b}),Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",onChange:b}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",onChange:b}),Object(p.jsx)("button",{className:"signupsubmit",children:"Submit"})]})})]})}),_=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h1",{children:"Profile"})})},A=n(327),E="g3cpadpxnnd9gxed8srkr30ulotv6b",L="8r58425i828m45gn2eikqpsqe4of5c",T=(n(202),n(204),function(e){var t=e.channel;e.id;return Object(p.jsxs)("div",{className:"stream",children:[Object(p.jsx)("iframe",{title:"twitch-stream",src:"https://player.twitch.tv/?channel=".concat(t,"&parent=localhost&muted=false"),height:"500",width:"600",allowFullScreen:!0}),Object(p.jsx)("iframe",{src:"https://www.twitch.tv/embed/".concat(t,"/chat?parent=localhost"),height:"500",width:"250"})]})}),P=function(e){e.apiToken;var t=Object(a.useState)(),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(),o=Object(l.a)(s,2),j=o[0],h=o[1],b=Object(a.useState)(null),m=Object(l.a)(b,2),O=(m[0],m[1]),f=Object(a.useState)({name:null}),g=Object(l.a)(f,2),v=g[0],w=g[1],k=Object(a.useState)(),y=Object(l.a)(k,2),F=y[0],C=y[1],N=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.twitch.tv/helix/games/top?first=100",{headers:{"Client-Id":E,Authorization:"Bearer ".concat(L)}});case 2:t=e.sent,h(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S.a.get("https://api.twitch.tv/helix/streams?game_id=".concat(v.game,"&first=100"),{headers:{"Client-Id":E,Authorization:"Bearer ".concat(L)}});case 3:n=e.sent,C(n.data.data),console.log(F);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){N()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Random Stream"}),j?Object(p.jsxs)(d.a,{className:"text-center",children:[Object(p.jsxs)("form",{onSubmit:I,children:[Object(p.jsx)("select",{name:"game",onChange:function(e){var t=e.target,n=t.name,a=t.value;w((function(){return Object(x.a)({},n,a)})),console.log(v)},children:j.data.map((function(e){return Object(p.jsx)("option",{name:"name",value:"".concat(e.id),children:e.name})}))}),Object(p.jsx)(A.a,{type:"submit",children:"Get All Streams"})]}),F?Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(!0);var t=F[Math.floor(Math.random()*F.length)-1];O(!1),c(t),console.log(r)},children:Object(p.jsx)(A.a,{type:"submit",className:"btn btn-success",children:"Get Random Streams"})}):null]}):Object(p.jsx)("h1",{children:"Loading..."}),r?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:r.user_name}),Object(p.jsx)(T,{channel:r.user_name})]}):Object(p.jsx)("h1",{children:"Select a game you would like to watch!"})]})},D=(n(205),n(165)),R=n.n(D);var U=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(l.a)(c,2),o=s[0],i=s[1],u=Object(a.useState)(),b=Object(l.a)(u,2),d=b[0],m=(b[1],function(e){i(e);var t=R.a.decode(e).username;console.log(t),r(t)}),x=function(){r([]),i(""),localStorage.clear()};return Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("token");e&&m(e)}()}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(O,{user:n,token:o,logout:x}),Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{path:"/login",children:Object(p.jsx)(N,{login:m})}),Object(p.jsx)(h.a,{path:"/signup",children:Object(p.jsx)(I,{login:m})}),Object(p.jsx)(h.a,{path:"/logout",logout:x}),Object(p.jsx)(h.a,{path:"/:username",children:Object(p.jsx)(_,{user:n})}),Object(p.jsx)(h.a,{path:"/random",children:Object(p.jsx)(P,{apiToken:d})}),Object(p.jsx)(h.a,{path:"/",children:Object(p.jsx)(f,{})})]})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,330)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("twitch-embed")),B()}},[[324,1,2]]]);
//# sourceMappingURL=main.24129f75.chunk.js.map