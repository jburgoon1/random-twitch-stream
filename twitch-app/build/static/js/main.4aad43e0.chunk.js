(this["webpackJsonptwitch-app"]=this["webpackJsonptwitch-app"]||[]).push([[0],{171:function(e,t,n){},173:function(e,t,n){},182:function(e,t,n){},201:function(e,t,n){},204:function(e,t,n){},209:function(e,t){},211:function(e,t){},225:function(e,t){},227:function(e,t){},255:function(e,t){},257:function(e,t){},258:function(e,t){},263:function(e,t){},265:function(e,t){},271:function(e,t){},273:function(e,t){},292:function(e,t){},304:function(e,t){},307:function(e,t){},324:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),s=n.n(c),i=(n(171),n(9)),o=n.n(i),u=n(14),l=n(15),j=(n(173),n(22)),h=n(10),b=n(328),m=n(326),p=n(329),d=n(1),O=function(e){var t=e.user,n=e.token,a=e.logout;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(b.a.Brand,{href:"/",children:"Random Stream"}),Object(d.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:n?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(p.a,{className:"ms-auto",children:[Object(d.jsx)(p.a.Link,{as:j.b,to:"/random",className:"navlinks",children:"Streams"}),Object(d.jsx)(p.a.Link,{as:j.b,to:"/".concat(t),className:"navlinks",children:t}),Object(d.jsx)(p.a.Link,{as:j.b,to:"/logout",onClick:a,className:"navlinks",children:"Logout"})]})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(p.a,{className:"ms-auto",children:[Object(d.jsx)(p.a.Link,{as:j.b,to:"/signup",className:"navlinks",children:"Sign up"}),Object(d.jsx)(p.a.Link,{as:j.b,to:"/login",className:"navlinks",children:"Log In"})]})})})]})})})},f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Welcome"}),Object(d.jsx)("p",{children:"This is a site to help smaller streamers grow and potentially get more viewers! "})]})},x=n(27),g=n(42),v=(n(182),n(164)),w=n(165),k=n(28),S=n.n(k),y="https://randomtwitchstream.herokuapp.com";console.log(y);var F=function(){function e(){Object(v.a)(this,e)}return Object(w.a)(e,null,[{key:"request",value:function(){var t=Object(u.a)(o.a.mark((function t(n){var a,r,c,s,i,u,l=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},r=l.length>2&&void 0!==l[2]?l[2]:"get",console.debug("API Call:",n,a,r),c="".concat(y,"/").concat(n),s={Authorization:"Bearer ".concat(e.token)},i="get"===r?a:{},t.prev=6,t.next=9,S()({url:c,method:r,data:a,params:i,headers:s});case 9:return t.abrupt("return",t.sent.data);case 12:throw t.prev=12,t.t0=t.catch(6),console.error("API Error:",t.t0.response),u=t.t0.response.data.error.message,Array.isArray(u)?u:[u];case 17:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("user/signup",n,"post");case 2:return a=t.sent,e.token=a.token,localStorage.setItem("token",e.token),t.abrupt("return",a.token);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"login",value:function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("user/login",n,"post");case 2:return a=t.sent,e.token=a.token,localStorage.setItem("token",e.token),t.abrupt("return",a.token);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("user/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();F.token=localStorage.getItem("token");var N=F,C=function(e){var t=e.login,n=Object(h.f)(),r=Object(a.useState)({username:"",password:""}),c=Object(l.a)(r,2),s=c[0],i=c[1],j=function(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(x.a)({},n,a))}))};function b(){return(b=Object(u.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,N.login(s);case 3:r=e.sent,t(r),n.push("/");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Log In"}),Object(d.jsx)("div",{className:"logInDiv",children:Object(d.jsxs)("form",{className:"logInForm",onSubmit:function(e){return b.apply(this,arguments)},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",id:"username",name:"username",onChange:j}),Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password",name:"password",onChange:j}),Object(d.jsx)("button",{className:"loginsubmit",children:"Submit"})]})})]})},I=(n(201),function(e){var t=e.login,n={username:"",name:"",email:"",password:""},r=Object(h.f)(),c=Object(a.useState)(n),s=Object(l.a)(c,2),i=s[0],j=s[1],b=function(e){var t=e.target,n=t.name,a=t.value;j((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(x.a)({},n,a))}))};var m=function(){var e=Object(u.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.register(n);case 2:a=e.sent,t(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Sign Up"}),Object(d.jsx)("div",{className:"signUpDiv",children:Object(d.jsxs)("form",{className:"signUpForm",onSubmit:function(e){e.preventDefault(),m(i),j(n),r.push("/")},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",id:"username",name:"username",onChange:b}),Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{type:"text",id:"name",name:"name",onChange:b}),Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",id:"email",name:"email",onChange:b}),Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password",name:"password",onChange:b}),Object(d.jsx)("button",{className:"signupsubmit",children:"Submit"})]})})]})}),L=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{children:"Profile"})})},A=n(327),D="g3cpadpxnnd9gxed8srkr30ulotv6b",P="8r58425i828m45gn2eikqpsqe4of5c",q=(n(202),n(204),function(e){var t=e.channel;e.id;return Object(d.jsxs)("div",{className:"stream ml-auto",children:[Object(d.jsx)("iframe",{title:"twitch-stream",src:"https://player.twitch.tv/?channel=".concat(t,"&parent=randomtwitchstream.herokuapp.com&muted=false"),height:"500",width:"60%",allowFullScreen:!0}),Object(d.jsx)("iframe",{src:"https://www.twitch.tv/embed/".concat(t,"/chat?parent=randomtwitchstream.herokuapp.com"),height:"500",width:"400"})]})}),B=function(e){e.apiToken;var t=Object(a.useState)(),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(),i=Object(l.a)(s,2),j=i[0],h=i[1],b=Object(a.useState)(null),p=Object(l.a)(b,2),O=(p[0],p[1]),f=Object(a.useState)({name:null}),g=Object(l.a)(f,2),v=g[0],w=g[1],k=Object(a.useState)(),y=Object(l.a)(k,2),F=y[0],N=y[1],C=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.twitch.tv/helix/games/top?first=100",{headers:{"Client-Id":D,Authorization:"Bearer ".concat(P)}});case 2:t=e.sent,h(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,S.a.get("https://api.twitch.tv/helix/streams?game_id=".concat(v.game,"&first=100"),{headers:{"Client-Id":D,Authorization:"Bearer ".concat(P)}});case 3:n=e.sent,N(n.data.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){C()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Random Stream"}),j?Object(d.jsxs)(m.a,{className:"text-center",children:[Object(d.jsxs)("form",{onSubmit:I,children:[Object(d.jsx)("select",{name:"game",onChange:function(e){var t=e.target,n=t.name,a=t.value;w((function(){return Object(x.a)({},n,a)}))},children:j.data.map((function(e){return Object(d.jsx)("option",{name:"name",value:"".concat(e.id),children:e.name})}))}),Object(d.jsx)(A.a,{type:"submit",children:"Get All Streams"})]}),F?Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(!0);var t=F[Math.floor(Math.random()*F.length)-1];O(!1),c(t)},children:Object(d.jsx)(A.a,{type:"submit",className:"btn btn-success",children:"Get Random Streams"})}):null]}):Object(d.jsx)("h1",{children:"Loading..."}),r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:r.user_name}),Object(d.jsx)(q,{channel:r.user_name})]}):Object(d.jsx)("h1",{children:"Select a game you would like to watch!"})]})},T=(n(205),n(166)),U=n.n(T);var E=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(l.a)(c,2),i=s[0],o=s[1],u=Object(a.useState)(),b=Object(l.a)(u,2),m=b[0],p=(b[1],function(e){o(e);var t=U.a.decode(e).username;r(t)}),x=function(){r([]),o(""),localStorage.clear()};return Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("token");e&&p(e)}()}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(O,{user:n,token:i,logout:x}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/login",children:Object(d.jsx)(C,{login:p})}),Object(d.jsx)(h.a,{path:"/signup",children:Object(d.jsx)(I,{login:p})}),Object(d.jsx)(h.a,{path:"/logout",logout:x}),Object(d.jsx)(h.a,{path:"/random",children:Object(d.jsx)(B,{apiToken:m})}),Object(d.jsx)(h.a,{path:"/:username",children:Object(d.jsx)(L,{user:n})}),Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)(f,{})})]})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,330)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("twitch-embed")),z()}},[[324,1,2]]]);
//# sourceMappingURL=main.4aad43e0.chunk.js.map