(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["9574"],{3562:function(e,t,s){let r,i,n;var o=Object.create,a=Object.defineProperty,h=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,p=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,u=(e,t,s)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of l(t))d.call(e,i)||i===s||a(e,i,{get:()=>t[i],enumerable:!(r=h(t,i))||r.enumerable});return e},y=(e,t,s)=>(u(e,"symbol"!=typeof t?t+"":t,s),s),f={};((e,t)=>{for(var s in t)a(e,s,{get:t[s],enumerable:!0})})(f,{default:()=>k}),e.exports=c(a({},"__esModule",{value:!0}),f);var m=(n=null!=(r=s(7294))?o(p(r)):{},c(!i&&r&&r.__esModule?n:a(n,"default",{value:r,enumerable:!0}),r)),E=s(8045),v=s(1776);let P="undefined"!=typeof navigator,g=P&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,b=P&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||g)&&!window.MSStream,L=P&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,S=/www\.dropbox\.com\/.+/,w=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;class k extends m.Component{constructor(){super(...arguments),y(this,"onReady",(...e)=>this.props.onReady(...e)),y(this,"onPlay",(...e)=>this.props.onPlay(...e)),y(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),y(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),y(this,"onPause",(...e)=>this.props.onPause(...e)),y(this,"onEnded",(...e)=>this.props.onEnded(...e)),y(this,"onError",(...e)=>this.props.onError(...e)),y(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),y(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),y(this,"onDisablePIP",e=>{let{onDisablePIP:t,playing:s}=this.props;t(e),s&&this.play()}),y(this,"onPresentationModeChange",e=>{if(this.player&&(0,E.supportsWebKitPresentationMode)(this.player)){let{webkitPresentationMode:t}=this.player;"picture-in-picture"===t?this.onEnablePIP(e):"inline"===t&&this.onDisablePIP(e)}}),y(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),y(this,"mute",()=>{this.player.muted=!0}),y(this,"unmute",()=>{this.player.muted=!1}),y(this,"renderSourceElement",(e,t)=>"string"==typeof e?m.default.createElement("source",{key:t,src:e}):m.default.createElement("source",{key:t,...e})),y(this,"renderTrack",(e,t)=>m.default.createElement("track",{key:t,...e})),y(this,"ref",e=>{this.player&&(this.prevPlayer=this.player),this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let e=this.getSource(this.props.url);e&&(this.player.src=e),(b||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,E.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){let{url:t,playsinline:s}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),s&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return!e.config.forceVideo&&!e.config.attributes.poster&&(v.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio)}shouldUseHLS(e){return!!L&&!!this.props.config.forceSafariHLS||!!this.props.config.forceHLS||!b&&!this.props.config.forceDisableHls&&(v.HLS_EXTENSIONS.test(e)||w.test(e))}shouldUseDASH(e){return v.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return v.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){let{hlsVersion:t,hlsOptions:s,dashVersion:r,flvVersion:i}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,E.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",t),"Hls").then(t=>{if(this.hls=new t(s),this.hls.on(t.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(t.Events.ERROR,(e,s)=>{this.props.onError(e,s,this.hls,t)}),w.test(e)){let t=e.match(w)[1];this.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",t))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()}),this.shouldUseDASH(e)&&(0,E.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",r),"dashjs").then(t=>{this.dash=t.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),3>parseInt(r)?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:t.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()}),this.shouldUseFLV(e)&&(0,E.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",i),"flvjs").then(t=>{this.flv=t.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(t.Events.ERROR,(e,s)=>{this.props.onError(e,s,this.flv,t)}),this.flv.load(),this.props.onLoaded()}),e instanceof Array)this.player.load();else if((0,E.isMediaStream)(e))try{this.player.srcObject=e}catch(t){this.player.src=window.URL.createObjectURL(e)}}play(){let e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,E.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,E.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(e){this.props.onError(e)}}getDuration(){if(!this.player)return null;let{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:e}=this.player;if(0===e.length)return 0;let t=e.end(e.length-1),s=this.getDuration();return t>s?s:t}getSource(e){let t=this.shouldUseHLS(e),s=this.shouldUseDASH(e),r=this.shouldUseFLV(e);return e instanceof Array||(0,E.isMediaStream)(e)||t||s||r?void 0:S.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){let{url:e,playing:t,loop:s,controls:r,muted:i,config:n,width:o,height:a}=this.props,h=this.shouldUseAudio(this.props);return m.default.createElement(h?"audio":"video",{ref:this.ref,src:this.getSource(e),style:{width:"auto"===o?o:"100%",height:"auto"===a?a:"100%"},preload:"auto",autoPlay:t||void 0,controls:r,muted:i,loop:s,...n.attributes},e instanceof Array&&e.map(this.renderSourceElement),n.tracks.map(this.renderTrack))}}y(k,"displayName","FilePlayer"),y(k,"canPlay",v.canPlay.file)}}]);