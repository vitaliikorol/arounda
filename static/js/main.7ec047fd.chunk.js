(this.webpackJsonparounda=this.webpackJsonparounda||[]).push([[0],[,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),s=(n(9),n(1)),i=(n(10),c.a.createContext(fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})))),l=(n(11),function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"inner first"}),c.a.createElement("div",{className:"inner second"}),c.a.createElement("div",{className:"inner third"}))}),u=(n(12),function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(window.innerWidth),l=Object(s.a)(i,2),u=l[0],d=l[1];Object(a.useLayoutEffect)((function(){function e(){d(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return c.a.createElement("section",{onMouseEnter:function(){r("#FFFFFF")},onMouseLeave:function(){r("")},className:"Post"},c.a.createElement("footer",{className:"Post_footer",style:{color:"".concat(o),display:"".concat(u<=900?"initial":"none")}},e.data.id),c.a.createElement("header",{className:"Post_title",style:{color:"".concat(o)}},e.data.title),c.a.createElement("article",{className:"Post_body",style:{color:"".concat(o)}},e.data.body),c.a.createElement("footer",{className:"Post_footer",style:{color:"".concat(o),display:"".concat(u>900?"initial":"none")}},e.data.id))}),d=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)("Posts are loading from server"),d=Object(s.a)(r,2),m=d[0],f=d[1],E=Object(a.useContext)(i);return Object(a.useEffect)((function(){var e=Math.ceil(97*Math.random());console.log(e),setTimeout((function(){E.then((function(t){return t.slice(e,e+3)})).then((function(e){return o(e)})),f("No posts yet")}),3e3)}),[E]),c.a.createElement("main",{className:"KeyIdeas"},0===n.length?c.a.createElement("div",{className:"KeyIdeas_preloader"},c.a.createElement("p",null,m),c.a.createElement(l,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"KeyIdeas_header"},"Key Ideas"),c.a.createElement("section",{className:"KeyIdeas_posts"},n.map((function(e){return c.a.createElement(u,{key:e.id,data:e})})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.7ec047fd.chunk.js.map