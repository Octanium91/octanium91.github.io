(this["webpackJsonpreact-js-multi-language-app-example-v1"]=this["webpackJsonpreact-js-multi-language-app-example-v1"]||[]).push([[0],[,,,,,,,,function(e,n,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,n,a){e.exports=a(17)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(7),s=a.n(o),i=(a(14),a(1)),u=a(2),c=a(4),l=a(3),g=a(5),p=a(8),L=a.n(p),d=(a(15),{en:{id:1,name:"English",autouse:!0,disabled:!1,hidden:!1},ru:{id:2,name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",autouse:!0,disabled:!1,hidden:!1},ua:{id:3,name:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",autouse:!0,disabled:!1,hidden:!1}}),m={en:{Language:"Language:",Text:["Edit ",r.a.createElement("code",{key:"1"},"src/App.js")," and save to reload."],LinkLearnReact:"Learn React",LinkGitHub:" Source code "},ru:{Language:"\u042f\u0437\u044b\u043a:",Text:["\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 ",r.a.createElement("code",{key:"1"},"src/App.js")," \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."],LinkLearnReact:"\u0423\u0447\u0438\u0442\u044c React",LinkGitHub:" \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 "},ua:{Language:"\u041c\u043e\u0432\u0430:",Text:["\u0412\u0456\u0434\u0440\u0435\u0434\u0430\u0433\u0443\u0439\u0442\u0435 ",r.a.createElement("code",{key:"1"},"src/App.js")," \u0442\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044c \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f."],LinkLearnReact:"\u0412\u0447\u0438\u0442\u0438 React",LinkGitHub:" \u0412\u0438\u0445\u0456\u0434\u043d\u0438\u0439 \u043a\u043e\u0434 "}},h=(a(16),function(e){function n(){return Object(i.a)(this,n),Object(c.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(g.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.AppState,a=e.AppSetState;return r.a.createElement("div",{className:"LngMenu"},n.LngMenuShow&&r.a.createElement("div",{className:"LngMenu-lang-menu"},r.a.createElement("span",{className:"LngMenu-lang-span"},n.Lng.Language),r.a.createElement("select",{className:"LngMenu-lang-selector",defaultValue:n.LngCurrent,onChange:function(e){a({LngCurrent:e.target.value})},size:"1"},n.LngMenuOptions)))}}]),n}(t.Component)),f=function(e){function n(){var e,a;Object(i.a)(this,n);for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).state={LngDefault:"en",LngCurrent:"en",LngMenuShow:!0},a.lngInit=function(e){if(e.hasOwnProperty("LngUser")||(e.LngUser=navigator.language.substr(0,2)||navigator.userLanguage.substr(0,2),d.hasOwnProperty(e.LngUser)&&d[e.LngUser].autouse&&(e.LngCurrent=e.LngUser)),!e.hasOwnProperty("LngMenuOptions")){var n=[];for(var a in d)n.push(r.a.createElement("option",{className:"LngMenu-lang-option",key:d[a].id,disabled:d[a].disabled,hidden:d[a].hidden,value:a},d[a].name));e.LngMenuOptions=n}},a.lngLoad=function(e){m.hasOwnProperty(e.LngDefault)?m.hasOwnProperty(e.LngCurrent)?e.Lng=Object.assign({},m[e.LngDefault],m[e.LngCurrent]):console.log("App-lngLoad()"," : '"+e.LngCurrent+" (LngCurrent)' not found in Lng.js!"):console.log("App-lngLoad()"," : '"+e.LngDefault+" (LngDefault)' not found in Lng.js!")},a.AppSetState=function(e){a.setState(e)},a}return Object(g.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state;return this.lngInit(e),this.lngLoad(e),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:L.a,className:"App-logo",alt:"logo"}),r.a.createElement(h,{AppState:e,AppSetState:this.AppSetState}),r.a.createElement("p",null,e.Lng.Text),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},e.Lng.LinkLearnReact),r.a.createElement("a",{className:"fa fa-github GitHub-link",href:"https://github.com/Octanium91/react-js-multi-language-app-example-v1",rel:"noopener noreferrer"},e.Lng.LinkGitHub)))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.28b08dfc.chunk.js.map