(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["3823"],{356:function(e,t,a){let l,s,r,i;var o=Object.create,n=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,h=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t,a,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of p(t))!c.call(e,s)&&s!==a&&n(e,s,{get:()=>t[s],enumerable:!(l=y(t,s))||l.enumerable});return e},P=(e,t,a)=>(h(e,"symbol"!=typeof t?t+"":t,a),a),m={};((e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})})(m,{default:()=>C});e.exports=(l=m,d(n({},"__esModule",{value:!0}),l));var b=(i=null!=(s=a(7294))?o(u(s)):{},d(!r&&s&&s.__esModule?i:n(i,"default",{value:s,enumerable:!0}),s)),g=a(8045),f=a(1776);let w=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,k=/user\/([a-zA-Z0-9_-]+)\/?/,T=/youtube-nocookie\.com/;class C extends b.Component{constructor(){super(...arguments),P(this,"callPlayer",g.callPlayer),P(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(w.test(e)){let[,t]=e.match(w);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(k.test(e)){let[,t]=e.match(k);return{listType:"user_uploads",list:t}}return{}}),P(this,"onStateChange",e=>{let{data:t}=e,{onPlay:a,onPause:l,onBuffer:s,onBufferEnd:r,onEnded:i,onReady:o,loop:n,config:{playerVars:y,onUnstarted:p}}=this.props,{UNSTARTED:u,PLAYING:c,PAUSED:h,BUFFERING:d,ENDED:P,CUED:m}=window.YT.PlayerState;if(t===u&&p(),t===c&&(a(),r()),t===h&&l(),t===d&&s(),t===P){let e=!!this.callPlayer("getPlaylist");n&&!e&&(y.start?this.seekTo(y.start):this.play()),i()}t===m&&o()}),P(this,"mute",()=>{this.callPlayer("mute")}),P(this,"unmute",()=>{this.callPlayer("unMute")}),P(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||w.test(e)?null:e.match(f.MATCH_URL_YOUTUBE)[1]}load(e,t){let{playing:a,muted:l,playsinline:s,controls:r,loop:i,config:o,onError:n}=this.props,{playerVars:y,embedOptions:p}=o,u=this.getID(e);if(t){if(w.test(e)||k.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:u,startSeconds:(0,g.parseStartTime)(e)||y.start,endSeconds:(0,g.parseEndTime)(e)||y.end});return}(0,g.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",e=>e.loaded).then(t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:u,playerVars:{autoplay:a?1:0,mute:l?1:0,controls:r?1:0,start:(0,g.parseStartTime)(e),end:(0,g.parseEndTime)(e),origin:window.location.origin,playsinline:s?1:0,...this.parsePlaylist(e),...y},events:{onReady:()=>{i&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>n(e.data)},host:T.test(e)?"https://www.youtube-nocookie.com":void 0,...p}))},n),p.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),!t&&!this.props.playing&&this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){let{display:e}=this.props;return b.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},b.default.createElement("div",{ref:this.ref}))}}P(C,"displayName","YouTube"),P(C,"canPlay",f.canPlay.youtube)}}]);