(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8828"],{8376:function(e,t,n){let r,i,s,a;var o=Object.create,l=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,u=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of h(t))!d.call(e,i)&&i!==n&&l(e,i,{get:()=>t[i],enumerable:!(r=p(t,i))||r.enumerable});return e},m=(e,t,n)=>(c(e,"symbol"!=typeof t?t+"":t,n),n),v={};((e,t)=>{for(var n in t)l(e,n,{get:t[n],enumerable:!0})})(v,{default:()=>b});e.exports=(r=v,y(l({},"__esModule",{value:!0}),r));var P=(a=null!=(i=n(7294))?o(u(i)):{},y(!s&&i&&i.__esModule?a:l(a,"default",{value:i,enumerable:!0}),i)),E=n(1776);class b extends P.Component{constructor(){super(...arguments),m(this,"onReady",(...e)=>this.props.onReady(...e)),m(this,"onPlay",(...e)=>this.props.onPlay(...e)),m(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),m(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),m(this,"onPause",(...e)=>this.props.onPause(...e)),m(this,"onEnded",(...e)=>this.props.onEnded(...e)),m(this,"onError",(...e)=>this.props.onError(...e)),m(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),m(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),m(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),m(this,"onDurationChange",()=>{let e=this.getDuration();this.props.onDuration(e)}),m(this,"mute",()=>{this.player.muted=!0}),m(this,"unmute",()=>{this.player.muted=!1}),m(this,"ref",e=>{this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}componentWillUnmount(){this.player.playbackId=null,this.removeListeners(this.player)}addListeners(e){let{playsinline:t}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}removeListeners(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}async load(e){var t;let{onError:n,config:r}=this.props;if(!(null==(t=globalThis.customElements)?void 0:t.get("mux-player")))try{let e="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs".replace("VERSION",r.version);await import(`${e}`),this.props.onLoaded()}catch(e){n(e)}let[,i]=e.match(E.MATCH_URL_MUX);this.player.playbackId=i}play(){let e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.playbackId=null}seekTo(e,t=!0){this.player.currentTime=e,!t&&this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}setPlaybackRate(e){try{this.player.playbackRate=e}catch(e){this.props.onError(e)}}getDuration(){if(!this.player)return null;let{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:e}=this.player;if(0===e.length)return 0;let t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}getPlaybackId(e){let[,t]=e.match(E.MATCH_URL_MUX);return t}render(){let{url:e,playing:t,loop:n,controls:r,muted:i,config:s,width:a,height:o}=this.props,l={width:"auto"===a?a:"100%",height:"auto"===o?o:"100%"};return!1===r&&(l["--controls"]="none"),P.default.createElement("mux-player",{ref:this.ref,"playback-id":this.getPlaybackId(e),style:l,preload:"auto",autoPlay:t||void 0,muted:i?"":void 0,loop:n?"":void 0,...s.attributes})}}m(b,"displayName","Mux"),m(b,"canPlay",E.canPlay.mux)}}]);