(this.webpackJsonppsd=this.webpackJsonppsd||[]).push([[0],{18:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(12),s=n.n(a),l=(n(18),n(5)),i=n.p+"static/media/logo.6ce24c58.svg",r=n(13),u=n.n(r),f=n(8),d=(n(29),n(0));var g=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(null),n=Object(l.a)(t,2),o=n[0],a=n[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),g=r[0],j=r[1],b=Object(c.useState)([]),p=Object(l.a)(b,2),h=p[0],O=p[1],m=Object(c.useState)(!1),v=Object(l.a)(m,2),x=v[0],w=v[1];return Object(c.useEffect)((function(){console.log("eeeeee")}),[]),Object(c.useEffect)((function(){var t;o&&g&&function(){var n=[],c=function(){var c=g[t];console.log("file",c);var a=new Image;a.src=URL.createObjectURL(c),a.onload=function(){w(!1);var t=e.current,c=t.getContext("2d");t.width=650,t.height=414,c.drawImage(a,0,0,650,414),console.log("uloaded psd file",o),o.children.forEach((function(e){"YOUR CHANGE HERE"===e.name&&(console.log("find YOUR CHANGE HERE leier"),e.children.forEach((function(e){e.clipping&&(console.log("this welbe deleted!"),e.canvas=t)})))})),console.log("new psd file",o);var s=Object(f.writePsd)(o),l=new Blob([s],{type:"application/octet-stream"}),i=URL.createObjectURL(l);n.push(i),console.log(typeof s,s),O(n),w(!0)}};for(t=0;t<g.length;t++)c()}()}),[o,g]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(d.jsx)("input",{type:"file",name:"file",onChange:function(e){console.log(e.target.files[0]),u()(e.target.files[0]).then((function(e){console.log(e);var t=Object(f.readPsd)(e);a(t)}))}}),Object(d.jsx)("input",{type:"file",name:"file",onChange:function(e){console.log(e.target),j(e.target.files)},multiple:!0}),x&&Object(d.jsx)("span",{children:"-Files-"}),h.map((function(e){var t=(new Date).getTime()+"-"+Math.random().toString(36).substring(10)+Math.random().toString(36).substring(10)+".psd";return Object(d.jsx)("a",{href:e,download:t,children:t})})),x&&Object(d.jsx)("span",{children:"-Files-"}),Object(d.jsx)("canvas",{style:{display:"none"},ref:e})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),j()}},[[31,1,2]]]);
//# sourceMappingURL=main.29939b69.chunk.js.map