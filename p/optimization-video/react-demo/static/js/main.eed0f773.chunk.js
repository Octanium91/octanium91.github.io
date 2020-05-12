(this["webpackJsonpoptimization-video"]=this["webpackJsonpoptimization-video"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),r=a(6),l=a.n(r),n=(a(12),a(1)),h=a(2),o=a(4),m=a(3),d=(a(13),function(t){Object(o.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(n.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={firstLoad:!1,autoPlay:!1,playBtnRed:!1,title:"",className:"",videoId:"",styleImg:{},styleIframe:{},iframeSize:{},thumbnailQuality:"",showContent:!1},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.src,i=void 0===a?"":a,r=e.params,l=void 0===r?{}:r;if(!this.state.firstLoad){var n=this.state,h=!1;if(-1!==i.indexOf("youtube")&&-1!==i.indexOf("watch")){h=!0;try{n.videoId=new URLSearchParams(new URL(i).search).get("v")}catch(o){try{n.videoId=new URLSearchParams(new URL("https://"+i).search).get("v")}catch(m){return s.a.createElement("div",null,"error loading, wrong URL...")}}}if(-1!==i.indexOf("youtube")&&-1!==i.indexOf("embed")){h=!0;try{n.videoId=new URL(i).pathname.replace("/embed/","")}catch(d){try{n.videoId=n.videoId=new URL("https://"+i).pathname.replace("/embed/","")}catch(c){return s.a.createElement("div",null,"error loading, wrong URL...")}}}if(-1!==i.indexOf("youtu.be")){h=!0;try{n.videoId=new URL(i).pathname.replace("/","")}catch(u){try{n.videoId=new URL("https://"+i).pathname.replace("/","")}catch(p){return s.a.createElement("div",null,"error loading, wrong URL...")}}}if(h){if(!this.state.videoId)return n.firstLoad=!0,s.a.createElement("div",null,"error loading, not found video ID...")}else n.videoId=i;if(l.hasOwnProperty("title")?n.title=l.title:n.title="Video from YouTube",l.hasOwnProperty("className")?n.className=l.className:n.className="VideoContent__"+this.state.videoId,l.hasOwnProperty("autoPlay")&&(n.autoPlay=l.autoPlay),l.hasOwnProperty("thumbnailQuality"))if(n.height=l.height,"auto"===l.thumbnailQuality)n.thumbnailQuality="maxresdefault";else try{n.thumbnailQuality={default:"default",hq:"hqdefault",mq:"mqdefault",sd:"sddefault",maxres:"maxresdefault"}[l.thumbnailQuality]}catch(y){n.thumbnailQuality="maxresdefault"}else n.thumbnailQuality="maxresdefault";n.styleImg={position:"relative",backgroundColor:"#000000",maxWidth:"99%"},l.hasOwnProperty("styleImg")&&(n.styleImg=Object.assign({},n.styleImg,l.styleImg)),n.styleImg.hasOwnProperty("height")||(n.styleImg.height="auto"),n.styleImg.hasOwnProperty("width")||(n.styleImg.width="100%"),n.styleIframe={maxWidth:"99%"},l.hasOwnProperty("styleIframe")&&(n.styleIframe=Object.assign({},n.styleIframe,l.styleIframe)),n.styleIframe.hasOwnProperty("height")||(n.styleIframe.height="auto"),n.styleIframe.hasOwnProperty("width")||(n.styleIframe.width="100%"),l.hasOwnProperty("iframeSize")||(n.iframeSize.height=n.styleIframe.height,n.iframeSize.width=n.styleIframe.width),n.firstLoad=!0}return this.state.showContent?s.a.createElement("iframe",{className:this.state.className+"__iframe",key:"vc_"+this.state.videoId+"__iframe",title:this.state.title,alt:this.state.title,src:this.state.autoPlay?"https://www.youtube.com/embed/"+this.state.videoId+"?rel=false&showinfo=false&autoplay=true":"https://www.youtube.com/embed/"+this.state.videoId,style:this.state.styleIframe,allow:"autoplay; encrypted-media",width:this.state.iframeSize.width,height:this.state.iframeSize.height,frameborder:0}):s.a.createElement("div",{className:this.state.className+"__img",key:"vc_"+this.state.videoId+"__img",style:this.state.styleImg},s.a.createElement("picture",null,s.a.createElement("source",{srcSet:"https://i.ytimg.com/vi_webp/"+this.state.videoId+"/"+this.state.thumbnailQuality+".webp",type:"image/webp"}),s.a.createElement("img",{className:this.state.className+"__media",key:"vc_"+this.state.videoId+"__media",title:this.state.title,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"none"},src:"https://i.ytimg.com/vi/"+this.state.videoId+"/"+this.state.thumbnailQuality+".jpg",alt:this.state.title})),s.a.createElement("button",{className:this.state.className+"__button",key:"vc_"+this.state.videoId+"__button",style:{position:"absolute",top:"50%",left:"50%",zIndex:"1",padding:"0",width:"68px",height:"48px",border:"none",backgroundColor:"transparent",transform:"translate(-50%, -50%)",cursor:"pointer"},type:"button","aria-label":"Play video",onMouseOver:function(e){return t.setState({playBtnRed:!0})},onMouseOut:function(e){return t.setState({playBtnRed:!1})},onClick:function(){t.setState({showContent:!0})}},s.a.createElement("svg",{width:"68",height:"48",viewBox:"0 0 68 48"},s.a.createElement("path",{className:this.state.className+"__button-shape",key:"vc_"+this.state.videoId+"__button-shape",style:{fill:this.state.playBtnRed?"#ff0000":"#212121",fillOpacity:this.state.playBtnRed?"0.8":"1"},d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"}),s.a.createElement("path",{className:this.state.className+"__button-icon",key:"vc_"+this.state.videoId+"__button-icon",style:{fill:"#ffffff"},d:"M 45,24 27,14 27,34"}))))}}]),a}(i.Component)),c=function(t){Object(o.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(n.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(d,{src:"www.youtube.com/watch?v=LXb3EKWsInQ",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"https://youtu.be/oNwJb2N_I-w",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"youtu.be/FisOoN7Ynk8",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"www.youtube.com/embed/BHACKCNDMW8",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"https://www.youtube.com/embed/HSsqzzuGTPo",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"https://www.youtube.com/watch?v=ftlvreFtA2A",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"1nf61dNdzPc",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"7KXGZAEWzn0",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"E9oKEJ1pXPw",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}}),s.a.createElement(d,{src:"doN4t5NKW-k",params:{autoPlay:!0,thumbnailQuality:"sd",styleImg:{margin:"10px",width:"640px",height:"360px"},styleIframe:{margin:"10px",width:"640px",height:"360px"}}})))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(c,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.eed0f773.chunk.js.map