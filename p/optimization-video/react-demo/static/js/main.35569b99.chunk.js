(this["webpackJsonpoptimization-video"]=this["webpackJsonpoptimization-video"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),n=a(6),o=a.n(n),r=(a(12),a(1)),l=a(2),c=a(4),d=a(3),h=(a(13),function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).state={firstLoad:!1,autoPlay:!1,playBtnRed:!1,title:"",className:"",videoId:"",styleImg:{},styleIframe:{},iframeSize:{},thumbnailQuality:"",showContent:!1},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.src,i=void 0===a?"":a,n=e.params,o=void 0===n?{}:n;if(!this.state.firstLoad){var r=this.state,l=!1;if(-1!==i.indexOf("youtube")&&-1!==i.indexOf("watch")){l=!0;try{r.videoId=new URLSearchParams(new URL(i).search).get("v")}catch(c){try{r.videoId=new URLSearchParams(new URL("https://"+i).search).get("v")}catch(d){return s.a.createElement("div",null,"error loading, wrong URL...")}}}if(-1!==i.indexOf("youtube")&&-1!==i.indexOf("embed")){l=!0;try{r.videoId=new URL(i).pathname.replace("/embed/","")}catch(h){try{r.videoId=r.videoId=new URL("https://"+i).pathname.replace("/embed/","")}catch(m){return s.a.createElement("div",null,"error loading, wrong URL...")}}}if(-1!==i.indexOf("youtu.be")){l=!0;try{r.videoId=new URL(i).pathname.replace("/","")}catch(u){try{r.videoId=new URL("https://"+i).pathname.replace("/","")}catch(p){return s.a.createElement("div",null,"error loading, wrong URL...")}}}if(l){if(!this.state.videoId)return r.firstLoad=!0,s.a.createElement("div",null,"error loading, not found video ID...")}else r.videoId=i;if(o.hasOwnProperty("title")?r.title=o.title:r.title="Video from YouTube",o.hasOwnProperty("className")?r.className=o.className:r.className="VideoContent__"+this.state.videoId,o.hasOwnProperty("autoPlay")&&(r.autoPlay=o.autoPlay),o.hasOwnProperty("thumbnailQuality"))if(r.height=o.height,"auto"===o.thumbnailQuality)r.thumbnailQuality="maxresdefault";else try{r.thumbnailQuality={default:"default",hq:"hqdefault",mq:"mqdefault",sd:"sddefault",maxres:"maxresdefault"}[o.thumbnailQuality]}catch(y){r.thumbnailQuality="maxresdefault"}else r.thumbnailQuality="maxresdefault";r.firstLoad=!0}return this.state.showContent?s.a.createElement("div",{className:this.state.className+"__iframeVideo",style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%",backgroundColor:"#000000"}},s.a.createElement("iframe",{className:this.state.className+"__iframe",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},key:"vc_"+this.state.videoId+"__iframe",title:this.state.title,alt:this.state.title,src:this.state.autoPlay?"https://www.youtube.com/embed/"+this.state.videoId+"?rel=false&showinfo=false&autoplay=true":"https://www.youtube.com/embed/"+this.state.videoId,allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0})):s.a.createElement("div",{className:this.state.className+"__imgVideo",key:"vc_"+this.state.videoId+"__img",style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%",backgroundColor:"#000000"}},s.a.createElement("picture",null,s.a.createElement("source",{srcSet:"https://i.ytimg.com/vi_webp/"+this.state.videoId+"/"+this.state.thumbnailQuality+".webp",type:"image/webp"}),s.a.createElement("img",{className:this.state.className+"__media",key:"vc_"+this.state.videoId+"__media",title:this.state.title,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"none"},src:"https://i.ytimg.com/vi/"+this.state.videoId+"/"+this.state.thumbnailQuality+".jpg",alt:this.state.title})),s.a.createElement("button",{className:this.state.className+"__button",key:"vc_"+this.state.videoId+"__button",style:{position:"absolute",top:"50%",left:"50%",zIndex:"1",padding:"0",width:"68px",height:"48px",border:"none",backgroundColor:"transparent",transform:"translate(-50%, -50%)",cursor:"pointer"},type:"button","aria-label":"Play video",onMouseOver:function(e){return t.setState({playBtnRed:!0})},onMouseOut:function(e){return t.setState({playBtnRed:!1})},onClick:function(){t.setState({showContent:!0})}},s.a.createElement("svg",{width:"68",height:"48",viewBox:"0 0 68 48"},s.a.createElement("path",{className:this.state.className+"__button-shape",key:"vc_"+this.state.videoId+"__button-shape",style:{fill:this.state.playBtnRed?"#ff0000":"#212121",fillOpacity:this.state.playBtnRed?"0.8":"1"},d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"}),s.a.createElement("path",{className:this.state.className+"__button-icon",key:"vc_"+this.state.videoId+"__button-icon",style:{fill:"#ffffff"},d:"M 45,24 27,14 27,34"}))))}}]),a}(i.Component)),m=function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"www.youtube.com/watch?v=LXb3EKWsInQ",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"https://youtu.be/oNwJb2N_I-w",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"youtu.be/FisOoN7Ynk8",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"www.youtube.com/embed/BHACKCNDMW8",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"https://www.youtube.com/embed/HSsqzzuGTPo",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"https://www.youtube.com/watch?v=ftlvreFtA2A",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"1nf61dNdzPc",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"7KXGZAEWzn0",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"E9oKEJ1pXPw",params:{autoPlay:!0}})),s.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},s.a.createElement(h,{src:"doN4t5NKW-k",params:{autoPlay:!0}}))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.35569b99.chunk.js.map