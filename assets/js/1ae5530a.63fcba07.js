/*! For license information please see 1ae5530a.63fcba07.js.LICENSE.txt */
(self.webpackChunkmy_first_docusaurus=self.webpackChunkmy_first_docusaurus||[]).push([[742],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1801:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(69530),a=r(67294),o=r(95999);function s(){const{status:e,network:t,wallets:r,availableConnectTypes:s,connect:i,disconnect:l}=(0,n.Os)();return a.createElement("div",{className:"buttonContainer",onClick:()=>{e===n.PR.WALLET_NOT_CONNECTED?i(s[0]):l()}},a.createElement("div",{className:"connectwallet"},e===n.PR.WALLET_NOT_CONNECTED?a.createElement(o.Z,{id:"ddd"},"'Connect Wallet'sss"):0==r.length?"Loading...":a.createElement("span",null,r[0].xplaAddress)))}},16730:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(69530),a=r(67294),o=r(25108);const s=e=>{let{children:t}=e;const[r,s]=(0,a.useState)(),[i,l]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{l("undefined"==typeof window)}),[]),(0,a.useEffect)((()=>{(0,n.c3)().then((e=>s(e))).catch((e=>{o.log(e)}))}),[]),i?a.createElement(a.Fragment,null):a.createElement(n.nS,r,t)}},75021:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>T,contentTitle:()=>N,default:()=>R,frontMatter:()=>x,metadata:()=>I,toc:()=>_});var n=r(87462),a=r(67294),o=r(3905),s=r(1801),i=r(16730),l=r(45697),u=r.n(l),c=r(64063),d=r.n(c),p=r(11062),f=r.n(p),y=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&P(e,r,t[r]);if(v)for(var r of v(t))b.call(t,r)&&P(e,r,t[r]);return e},E=(e,t)=>h(e,m(t));function C(e={}){return E(w({},e),{height:0,width:0,playerVars:E(w({},e.playerVars),{autoplay:0,start:0,end:0})})}var O={videoId:u().string,id:u().string,className:u().string,iframeClassName:u().string,style:u().object,title:u().string,loading:u().oneOf(["lazy","eager"]),opts:u().objectOf(u().any),onReady:u().func,onError:u().func,onPlay:u().func,onPause:u().func,onEnd:u().func,onStateChange:u().func,onPlaybackRateChange:u().func,onPlaybackQualityChange:u().func},S=class extends a.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,r;return null==(r=(t=this.props).onReady)?void 0:r.call(t,e)},this.onPlayerError=e=>{var t,r;return null==(r=(t=this.props).onError)?void 0:r.call(t,e)},this.onPlayerStateChange=e=>{var t,r,n,a,o,s,i,l;switch(null==(r=(t=this.props).onStateChange)||r.call(t,e),e.data){case S.PlayerState.ENDED:null==(a=(n=this.props).onEnd)||a.call(n,e);break;case S.PlayerState.PLAYING:null==(s=(o=this.props).onPlay)||s.call(o,e);break;case S.PlayerState.PAUSED:null==(l=(i=this.props).onPause)||l.call(i,e)}},this.onPlayerPlaybackRateChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackRateChange)?void 0:r.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackQualityChange)?void 0:r.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then((()=>this.destroyPlayerPromise=void 0)),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"==typeof document)return;if(this.destroyPlayerPromise)return void this.destroyPlayerPromise.then(this.createPlayer);const e=E(w({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=f()(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then((e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)}))},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then((e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")}))},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,r,n;if(void 0===this.props.videoId||null===this.props.videoId)return void(null==(e=this.internalPlayer)||e.stopVideo());let a=!1;const o={videoId:this.props.videoId};(null==(t=this.props.opts)?void 0:t.playerVars)&&(a=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(o.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(o.endSeconds=this.props.opts.playerVars.end)),a?null==(r=this.internalPlayer)||r.loadVideoById(o):null==(n=this.internalPlayer)||n.cueVideoById(o)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return t=this,r=null,n=function*(){(function(e,t){var r,n,a,o;return e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(a=e.opts)?void 0:a.height)!==(null==(o=t.opts)?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!d()(C(e.opts),C(t.opts))}(e,this.props)&&(yield this.resetPlayer()),function(e,t){var r,n;if(e.videoId!==t.videoId)return!0;const a=(null==(r=e.opts)?void 0:r.playerVars)||{},o=(null==(n=t.opts)?void 0:n.playerVars)||{};return a.start!==o.start||a.end!==o.end}(e,this.props)&&this.updateVideo()},new Promise(((e,a)=>{var o=e=>{try{i(n.next(e))}catch(t){a(t)}},s=e=>{try{i(n.throw(e))}catch(t){a(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,s);i((n=n.apply(t,r)).next())}));var t,r,n}componentWillUnmount(){this.destroyPlayer()}render(){return a.createElement("div",{className:this.props.className,style:this.props.style},a.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},k=S;k.propTypes=O,k.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},k.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var A=k;const x={sidebar_position:7},N="Youtube",I={unversionedId:"youtube",id:"youtube",title:"Youtube",description:"Let's discover Youtube.",source:"@site/docs/youtube.mdx",sourceDirName:".",slug:"/youtube",permalink:"/my-first-docusaurus/docs/youtube",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/youtube.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ub313\uae00 (Utterances)",permalink:"/my-first-docusaurus/docs/comment"},next:{title:"\ucd1d\ud3c9",permalink:"/my-first-docusaurus/docs/conclusion"}},T={},D={height:"390",width:"640",playerVars:{autoplay:1}},_=[],j={toc:_},V="wrapper";function R(e){let{components:t,...r}=e;return(0,o.kt)(V,(0,n.Z)({},j,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"youtube"},"Youtube"),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"Youtube"),"."),(0,o.kt)(A,{videoId:"a2h__JE-Ydc",opts:D,mdxType:"YouTube"}),(0,o.kt)(i.Z,{mdxType:"WalletWrap"},(0,o.kt)(s.Z,{mdxType:"Connect"})))}R.isMDXComponent=!0},49090:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof n&&(a=n,n={}),n=n||{},a=a||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async=!("async"in n)||!!n.async,s.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(s,n.attrs),n.text&&(s.text=""+n.text),("onload"in s?t:r)(s,a),s.onload||t(s,a),o.appendChild(s)}},33988:e=>{"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,a=t[e];if(a)for(n=a.length;n--;)a[n].handler(r)},e},e.exports=t},66006:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(22275),o=(n=a)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},89125:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(9215)),a=i(r(28255)),o=i(r(65279)),s=i(r(66006));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),u={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,a=!1,s=void 0;try{for(var i,u=o.default[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){r(i.value)}}catch(c){a=!0,s=c}finally{try{!n&&u.return&&u.return()}finally{if(a)throw s}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&s.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then((function(e){var t=s.default[n],a=e.getPlayerState(),o=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var a=e.getPlayerState(),o=void 0;"number"==typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",n),clearTimeout(o),r())}))})).then((function(){return o})):o}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then((function(e){return e[n].apply(e,r)}))}},o=!0,i=!1,l=void 0;try{for(var u,c=a.default[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){n(u.value)}}catch(d){i=!0,l=d}finally{try{!o&&c.return&&c.return()}finally{if(i)throw l}}return r}};t.default=u,e.exports=t.default},22275:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},65279:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},28255:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},11062:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(r(33988)),o=i(r(55900)),s=i(r(89125));function i(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=(0,a.default)();if(l||(l=(0,o.default)(i)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=s.default.proxyEvents(i);var u=new Promise((function(r){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):l.then((function(n){var a=new n.Player(e,t);return i.on("ready",(function(){r(a)})),null}))})),c=s.default.promisifyPlayer(u,r);return c.on=i.on,c.off=i.off,c},e.exports=t.default},55900:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(49090),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,o.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},9215:(e,t,r)=>{var n=r(25108),a=r(34155);function o(){var e;try{e=t.storage.debug}catch(r){}return!e&&void 0!==a&&"env"in a&&(e=a.env.DEBUG),e}(t=e.exports=r(55046)).log=function(){return"object"==typeof n&&n.log&&Function.prototype.apply.call(n.log,n,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())},55046:(e,t,r)=>{var n,a=r(25108);function o(e){function r(){if(r.enabled){var e=r,o=+new Date,s=o-(n||o);e.diff=s,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),l=0;l<i.length;l++)i[l]=arguments[l];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;u++;var a=t.formatters[n];if("function"==typeof a){var o=i[u];r=a.call(e,o),i.splice(u,1),u--}return r})),t.formatArgs.call(e,i),(r.log||t.log||a.log.bind(a)).apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,a=0;a<n;a++)r[a]&&("-"===(e=r[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(14680),t.names=[],t.skips=[],t.formatters={}},14680:e=>{var t=1e3,r=60*t,n=60*r,a=24*n,o=365.25*a;function s(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,i){i=i||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!s)return;var i=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*o;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*n;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===u&&!1===isNaN(e))return i.long?s(l=e,a,"day")||s(l,n,"hour")||s(l,r,"minute")||s(l,t,"second")||l+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},36563:()=>{},46601:()=>{},89214:()=>{},85568:()=>{},34845:()=>{},52361:()=>{},94616:()=>{},33370:()=>{}}]);