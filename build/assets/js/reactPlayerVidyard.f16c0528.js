(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["927"],{6596:function(e,t,a){let r,s,l,i;var o=Object.create,n=Object.defineProperty,p=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,h=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of y(t))!u.call(e,s)&&s!==a&&n(e,s,{get:()=>t[s],enumerable:!(r=p(t,s))||r.enumerable});return e},m=(e,t,a)=>(d(e,"symbol"!=typeof t?t+"":t,a),a),P={};((e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})})(P,{default:()=>v});e.exports=(r=P,c(n({},"__esModule",{value:!0}),r));var b=(i=null!=(s=a(7294))?o(h(s)):{},c(!l&&s&&s.__esModule?i:n(i,"default",{value:s,enumerable:!0}),s)),f=a(8045),g=a(1776);class v extends b.Component{constructor(){super(...arguments),m(this,"callPlayer",f.callPlayer),m(this,"mute",()=>{this.setVolume(0)}),m(this,"unmute",()=>{null!==this.props.volume&&this.setVolume(this.props.volume)}),m(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{playing:t,config:a,onError:r,onDuration:s}=this.props,l=e&&e.match(g.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,f.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then(e=>{this.container&&(e.api.addReadyListener((e,t)=>{if(!this.player)this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded)},l),e.api.renderPlayer({uuid:l,container:this.container,autoplay:t?1:0,...a.options}),e.api.getPlayerMetadata(l).then(e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)}))},r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),!t&&this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){let{display:e}=this.props;return b.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},b.default.createElement("div",{ref:this.ref}))}}m(v,"displayName","Vidyard"),m(v,"canPlay",g.canPlay.vidyard)}}]);