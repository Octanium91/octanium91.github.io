(this["webpackJsonpoptimization-video"]=this["webpackJsonpoptimization-video"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),r=a(6),n=a.n(r),d=(a(12),a(1)),l=a(2),s=a(4),m=a(3),h=(a(13),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={firstLoad:!1,autoPlay:!1,playBtnRed:!1,title:"",className:"",videoId:"",thumbnailQuality:"",showContent:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.src,i=void 0===a?"":a,r=t.params,n=void 0===r?{}:r;if(!this.state.firstLoad){var d=this.state,l=!1;if(-1!==i.indexOf("youtube")&&-1!==i.indexOf("watch")){l=!0;try{d.videoId=new URLSearchParams(new URL(i).search).get("v")}catch(s){try{d.videoId=new URLSearchParams(new URL("https://"+i).search).get("v")}catch(m){return o.a.createElement("div",null,"error loading, wrong URL...")}}}if(-1!==i.indexOf("youtube")&&-1!==i.indexOf("embed")){l=!0;try{d.videoId=new URL(i).pathname.replace("/embed/","")}catch(h){try{d.videoId=d.videoId=new URL("https://"+i).pathname.replace("/embed/","")}catch(c){return o.a.createElement("div",null,"error loading, wrong URL...")}}}if(-1!==i.indexOf("youtu.be")){l=!0;try{d.videoId=new URL(i).pathname.replace("/","")}catch(p){try{d.videoId=new URL("https://"+i).pathname.replace("/","")}catch(u){return o.a.createElement("div",null,"error loading, wrong URL...")}}}if(l){if(!this.state.videoId)return d.firstLoad=!0,o.a.createElement("div",null,"error loading, not found video ID...")}else d.videoId=i;if(n.hasOwnProperty("title")?d.title=n.title:d.title="Video from YouTube",n.hasOwnProperty("className")?d.className=n.className:d.className="VideoContent__"+this.state.videoId,n.hasOwnProperty("autoPlay")&&(d.autoPlay=n.autoPlay),n.hasOwnProperty("thumbnailQuality"))if("auto"===n.thumbnailQuality)d.thumbnailQuality="maxresdefault";else try{d.thumbnailQuality={default:"default",hq:"hqdefault",mq:"mqdefault",sd:"sddefault",maxres:"maxresdefault"}[n.thumbnailQuality]}catch(y){d.thumbnailQuality="maxresdefault"}else d.thumbnailQuality="maxresdefault";d.firstLoad=!0}return this.state.showContent?o.a.createElement("div",{className:this.state.className+"__iframeVideo",style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{className:this.state.className+"__iframe",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},key:"vc_"+this.state.videoId+"__iframe",title:this.state.title,alt:this.state.title,src:this.state.autoPlay?"https://www.youtube.com/embed/"+this.state.videoId+"?rel=false&showinfo=false&autoplay=true":"https://www.youtube.com/embed/"+this.state.videoId,allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0})):o.a.createElement("div",{className:this.state.className+"__imgVideo",key:"vc_"+this.state.videoId+"__img",style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%",backgroundColor:"#000000"}},o.a.createElement("picture",null,o.a.createElement("source",{srcSet:"https://i.ytimg.com/vi_webp/"+this.state.videoId+"/"+this.state.thumbnailQuality+".webp",type:"image/webp"}),o.a.createElement("img",{className:this.state.className+"__media",key:"vc_"+this.state.videoId+"__media",title:this.state.title,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"none"},src:"https://i.ytimg.com/vi/"+this.state.videoId+"/"+this.state.thumbnailQuality+".jpg",alt:this.state.title})),o.a.createElement("button",{className:this.state.className+"__button",key:"vc_"+this.state.videoId+"__button",style:{position:"absolute",top:"50%",left:"50%",zIndex:"1",padding:"0",width:"68px",height:"48px",border:"none",backgroundColor:"transparent",transform:"translate(-50%, -50%)",cursor:"pointer"},type:"button","aria-label":"Play video",onMouseOver:function(t){return e.setState({playBtnRed:!0})},onMouseOut:function(t){return e.setState({playBtnRed:!1})},onClick:function(){e.setState({showContent:!0})}},o.a.createElement("svg",{width:"68",height:"48",viewBox:"0 0 68 48"},o.a.createElement("path",{className:this.state.className+"__button-shape",key:"vc_"+this.state.videoId+"__button-shape",style:{fill:this.state.playBtnRed?"#ff0000":"rgba(33,33,33,0.8)",fillOpacity:this.state.playBtnRed?"0.8":"1"},d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"}),o.a.createElement("path",{className:this.state.className+"__button-icon",key:"vc_"+this.state.videoId+"__button-icon",style:{fill:"#ffffff"},d:"M 45,24 27,14 27,34"}))))}}]),a}(i.Component)),c=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={optimizedVersion:!1},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{style:{display:"block",background:"#353a46",borderRadius:"5px",height:"auto",width:"900px",margin:"10px",paddingTop:"20px",paddingBottom:"20px",maxWidth:"100%"}},this.state.optimizedVersion&&o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"100%"}},o.a.createElement("p",{style:{color:"#59ff00",borderStyle:"groove",borderColor:"#59ff00",borderRadius:"5px",width:"420px",maxWidth:"100%",margin:"5px",padding:"2px"}},"Optimized version")),!this.state.optimizedVersion&&o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"100%"}},o.a.createElement("p",{style:{color:"#ff0000",borderStyle:"groove",borderColor:"#ff0000",borderRadius:"5px",width:"420px",maxWidth:"100%",margin:"5px",padding:"2px"}},"Not optimized version")),o.a.createElement("p",null,"YouTube video optimize ReactJS lib demo"),this.state.optimizedVersion&&o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"100%"}},o.a.createElement("a",{href:"https://octanium91.github.io/p/optimization-video/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855/react-demo/",rel:"noopener noreferrer","aria-label":"link to optimized version",style:{background:"#67c3da",color:"#191d25",textDecoration:"none",height:"auto",borderRadius:"5px",width:"200px",margin:"5px",padding:"5px"}},"Optimized"),o.a.createElement("a",{href:"https://octanium91.github.io/p/optimization-video/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855/react-demo-slow/",rel:"noopener noreferrer","aria-label":"link to not optimized version",style:{background:"rgba(255,255,255,0)",color:"#67c3da",borderStyle:"groove",textDecoration:"none",height:"auto",borderRadius:"5px",width:"200px",margin:"5px",padding:"2px"}},"No optimized")),!this.state.optimizedVersion&&o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"100%"}},o.a.createElement("a",{href:"https://octanium91.github.io/p/optimization-video/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855/react-demo/",rel:"noopener noreferrer","aria-label":"link to optimized version",style:{background:"rgba(255,255,255,0)",color:"#67c3da",borderStyle:"groove",textDecoration:"none",height:"auto",borderRadius:"5px",width:"200px",margin:"5px",padding:"2px"}},"Optimized"),o.a.createElement("a",{href:"https://octanium91.github.io/p/optimization-video/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855/react-demo-slow/",rel:"noopener noreferrer","aria-label":"link to not optimized version",style:{background:"#67c3da",color:"#191d25",textDecoration:"none",height:"auto",borderRadius:"5px",width:"200px",margin:"5px",padding:"5px"}},"No optimized")),o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"100%"}},o.a.createElement("a",{href:"https://github.com/Octanium91/react_youtube_video_optimize_lib/",rel:"noopener noreferrer","aria-label":"link to GitHub project page",style:{background:"#2e5966",color:"#c7d7fc",textDecoration:"none",height:"auto",borderRadius:"5px",width:"420px",margin:"5px",padding:"5px",maxWidth:"100%"}},"Source code (GitHub)"))),this.state.optimizedVersion&&o.a.createElement("div",{style:{display:"contents"}},o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"LXb3EKWsInQ",params:{autoPlay:!0,thumbnailQuality:"maxres"}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"oNwJb2N_I-w",params:{autoPlay:!0}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"FisOoN7Ynk8",params:{autoPlay:!0}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"BHACKCNDMW8",params:{autoPlay:!0}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"HSsqzzuGTPo",params:{autoPlay:!0}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"ftlvreFtA2A",params:{autoPlay:!0}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"1nf61dNdzPc",params:{autoPlay:!0}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"7KXGZAEWzn0",params:{autoPlay:!0}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"E9oKEJ1pXPw",params:{autoPlay:!0}})),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement(h,{src:"doN4t5NKW-k",params:{autoPlay:!0}}))),!this.state.optimizedVersion&&o.a.createElement("div",{style:{display:"contents"}},o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/LXb3EKWsInQ",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/oNwJb2N_I-w",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/FisOoN7Ynk8",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/BHACKCNDMW8",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/HSsqzzuGTPo",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/ftlvreFtA2A",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/1nf61dNdzPc",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/7KXGZAEWzn0",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/E9oKEJ1pXPw",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))),o.a.createElement("div",{style:{height:"auto",width:"900px",margin:"10px",maxWidth:"100%"}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingBottom:"56.25%"}},o.a.createElement("iframe",{title:"video",style:{maxWidth:"100%",width:"100%",position:"absolute",left:"0"},src:"https://www.youtube.com/embed/doN4t5NKW-k",allow:"autoplay; encrypted-media",width:"100%",height:"100%",frameborder:0}))))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8f8ae138.chunk.js.map