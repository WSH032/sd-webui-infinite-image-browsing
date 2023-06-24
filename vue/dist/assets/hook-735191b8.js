import{c1 as xe,c2 as Ie,aK as Pe,c3 as Fe,c4 as Me,c5 as Ee,ao as he,c6 as Le,ai as ne,bd as Te,c7 as _e,c as Ce,ae as De,c8 as le,c9 as Ne,ca as Oe,k as $e,cb as me,ag as R,bu as z,af as D,cc as K,Y as C,l as se,be as re,ax as ze,cd as A,ce as Ae,cf as ce,cg as fe,aj as we,bq as de,br as qe,ch as Z,ci as Re,aB as Ue,bp as We,cj as Ge,bY as q,ck as H,t as ie,cl as Ve,O as ye,I as je,b$ as He,ah as Q,cm as Be,cn as Ke,co as Ye,cp as Je,cq as Qe,cr as Xe}from"./index-5716a5d2.js";import{b as Ze,h as et,i as tt,t as at}from"./db-1ccd7546.js";var pe=1/0,nt=17976931348623157e292;function te(s){if(!s)return s===0?s:0;if(s=xe(s),s===pe||s===-pe){var r=s<0?-1:1;return r*nt}return s===s?s:0}function G(s){var r=s==null?0:s.length;return r?s[r-1]:void 0}function st(s,r,a){if(!Ie(a))return!1;var i=typeof r;return(i=="number"?Pe(a)&&Fe(r,a.length):i=="string"&&r in a)?Me(a[r],s):!1}var rt=Math.ceil,it=Math.max;function ot(s,r,a,i){for(var c=-1,v=it(rt((r-s)/(a||1)),0),f=Array(v);v--;)f[i?v:++c]=s,s+=a;return f}function lt(s){return function(r,a,i){return i&&typeof i!="number"&&st(r,a,i)&&(a=i=void 0),r=te(r),a===void 0?(a=r,r=0):a=te(a),i=i===void 0?r<a?1:-1:te(i),ot(r,a,i,s)}}var ct=lt();const ut=ct;function ft(s,r){return s&&s.length?Ee(s,Ze(r)):[]}const Y=(...s)=>{document.addEventListener(...s),he(()=>document.removeEventListener(...s))},X=new WeakMap;function dt(s,r){return{useHookShareState:i=>{const c=Le();ne(c),X.has(c)||(X.set(c,Te(s(c,i??(r==null?void 0:r())))),he(()=>{X.delete(c)}));const v=X.get(c);return ne(v),{state:v,toRefs(){return _e(v)}}}}}var pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const vt=pt;function ve(s){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?Object(arguments[r]):{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable}))),i.forEach(function(c){gt(s,c,a[c])})}return s}function gt(s,r,a){return r in s?Object.defineProperty(s,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[r]=a,s}var ue=function(r,a){var i=ve({},r,a.attrs);return Ce(De,ve({},i,{icon:vt}),null)};ue.displayName="DatabaseOutlined";ue.inheritAttrs=!1;const ht=ue,j=async s=>(await le.get("/files",{params:{folder_path:s}})).data,mt=async s=>(await le.post("/delete_files",{file_paths:s})).data,be=async(s,r)=>(await le.post("/move_files",{file_paths:s,dest:r})).data;var ke={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(s,r){(function(a,i){s.exports=i})(Ne,function(){var a={};a.version="0.3.5";var i=a.settings={minimum:.08,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};a.configure=function(t){var e,n;for(e in t)n=t[e],n!==void 0&&t.hasOwnProperty(e)&&(i[e]=n);return this},a.status=null,a.set=function(t){var e=a.isStarted();t=c(t,i.minimum,1),a.status=t===1?null:t;var n=a.render(!e),l=n.querySelector(i.barSelector),g=i.speed,h=i.easing;return n.offsetWidth,y(function(d){i.positionUsing===""&&(i.positionUsing=a.getPositioningCSS()),x(l,f(t,g,h)),t===1?(x(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){x(n,{transition:"all "+g+"ms linear",opacity:0}),setTimeout(function(){a.remove(),d()},g)},g)):setTimeout(d,g)}),this},a.isStarted=function(){return typeof a.status=="number"},a.start=function(){a.status||a.set(0);var t=function(){setTimeout(function(){a.status&&(a.trickle(),t())},i.trickleSpeed)};return i.trickle&&t(),this},a.done=function(t){return!t&&!a.status?this:a.inc(.3+.5*Math.random()).set(1)},a.inc=function(t){var e=a.status;return e?e>1?void 0:(typeof t!="number"&&(e>=0&&e<.2?t=.1:e>=.2&&e<.5?t=.04:e>=.5&&e<.8?t=.02:e>=.8&&e<.99?t=.005:t=0),e=c(e+t,0,.994),a.set(e)):a.start()},a.trickle=function(){return a.inc()},function(){var t=0,e=0;a.promise=function(n){return!n||n.state()==="resolved"?this:(e===0&&a.start(),t++,e++,n.always(function(){e--,e===0?(t=0,a.done()):a.set((t-e)/t)}),this)}}(),a.getElement=function(){var t=a.getParent();if(t){var e=Array.prototype.slice.call(t.querySelectorAll(".nprogress")).filter(function(n){return n.parentElement===t});if(e.length>0)return e[0]}return null},a.getParent=function(){if(i.parent instanceof HTMLElement)return i.parent;if(typeof i.parent=="string")return document.querySelector(i.parent)},a.render=function(t){if(a.isRendered())return a.getElement();T(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.className="nprogress",e.innerHTML=i.template;var n=e.querySelector(i.barSelector),l=t?"-100":v(a.status||0),g=a.getParent(),h;return x(n,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),i.showSpinner||(h=e.querySelector(i.spinnerSelector),h&&F(h)),g!=document.body&&T(g,"nprogress-custom-parent"),g.appendChild(e),e},a.remove=function(){a.status=null,M(document.documentElement,"nprogress-busy"),M(a.getParent(),"nprogress-custom-parent");var t=a.getElement();t&&F(t)},a.isRendered=function(){return!!a.getElement()},a.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};function c(t,e,n){return t<e?e:t>n?n:t}function v(t){return(-1+t)*100}function f(t,e,n){var l;return i.positionUsing==="translate3d"?l={transform:"translate3d("+v(t)+"%,0,0)"}:i.positionUsing==="translate"?l={transform:"translate("+v(t)+"%,0)"}:l={"margin-left":v(t)+"%"},l.transition="all "+e+"ms "+n,l}var y=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),t.length==1&&e()}}(),x=function(){var t=["Webkit","O","Moz","ms"],e={};function n(d){return d.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(b,I){return I.toUpperCase()})}function l(d){var b=document.body.style;if(d in b)return d;for(var I=t.length,P=d.charAt(0).toUpperCase()+d.slice(1),E;I--;)if(E=t[I]+P,E in b)return E;return d}function g(d){return d=n(d),e[d]||(e[d]=l(d))}function h(d,b,I){b=g(b),d.style[b]=I}return function(d,b){var I=arguments,P,E;if(I.length==2)for(P in b)E=b[P],E!==void 0&&b.hasOwnProperty(P)&&h(d,P,E);else h(d,I[1],I[2])}}();function m(t,e){var n=typeof t=="string"?t:L(t);return n.indexOf(" "+e+" ")>=0}function T(t,e){var n=L(t),l=n+e;m(n,e)||(t.className=l.substring(1))}function M(t,e){var n=L(t),l;m(t,e)&&(l=n.replace(" "+e+" "," "),t.className=l.substring(1,l.length-1))}function L(t){return(" "+(t&&t.className||"")+" ").replace(/\s+/gi," ")}function F(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return a})})(ke);var wt=ke.exports;const yt=Oe(wt),ae=new Map,S=$e(),ge=new BroadcastChannel("iib-image-transfer-bus"),B=encodeURIComponent,V=(s,r=!1)=>`/infinite_image_browsing/file?path=${B(s.fullpath)}&t=${B(s.date)}${r?`&disposition=${B(s.name)}`:""}`,St=(s,r)=>`/infinite_image_browsing/image-thumbnail?path=${B(s.fullpath)}&size=${r}&t=${B(s.date)}`,{eventEmitter:ee,useEventListen:oe}=me(),{useHookShareState:U}=dt((s,{images:r})=>{const a=C({tabIdx:-1,paneIdx:-1}),i=R(()=>G(c.value)),c=C([]),v=R(()=>{var e;return c.value.map(n=>n.curr).slice((e=S.conf)!=null&&e.is_win?1:0)}),f=R(()=>ce(...v.value)),y=C(S.defaultSortingMethod),x=R(()=>{var h;if(r.value)return r.value;if(!i.value)return[];const e=((h=i.value)==null?void 0:h.files)??[],n=y.value,{walkFiles:l}=i.value,g=d=>S.onlyFoldersAndImages?d.filter(b=>b.type==="dir"||q(b.name)):d;return a.value.walkModePath?l?l.map(d=>H(g(d),n)).flat():H(g(e),n):H(g(e),n)}),m=C([]),T=C(-1),M=C(!0),L=C(!1),F=C(!1),t=()=>S.tabList[a.value.tabIdx].panes[a.value.paneIdx];return{previewing:F,spinning:L,canLoadNext:M,multiSelectedIdxs:m,previewIdx:T,basePath:v,currLocation:f,currPage:i,stack:c,sortMethod:y,sortedFiles:x,scroller:C(),stackViewEl:C(),props:a,getPane:t,...me()}},()=>({images:C()})),xt=["detailList","largePreviewGrid","previewGrid"];function It(s,r){const{previewIdx:a,eventEmitter:i,canLoadNext:c,previewing:v}=U().toRefs(),{state:f}=U(),y=R(()=>(r==null?void 0:r.files.value)??f.sortedFiles),x=R(()=>(r==null?void 0:r.scroller.value)??f.scroller);let m=null;const T=(t,e)=>{var n;v.value=t,m!=null&&!t&&e&&((n=x.value)==null||n.scrollToItem(m),m=null)},M=()=>{s.walkModePath&&!F("next")&&c&&(z.info(D("loadingNextFolder")),i.value.emit("loadNextDir",!0))};Y("keydown",t=>{var e;if(v.value){let n=a.value;if(["ArrowDown","ArrowRight"].includes(t.key))for(n++;y.value[n]&&!q(y.value[n].name);)n++;else if(["ArrowUp","ArrowLeft"].includes(t.key))for(n--;y.value[n]&&!q(y.value[n].name);)n--;if(q((e=y.value[n])==null?void 0:e.name)??""){a.value=n;const l=x.value;l&&!(n>=l.$_startIndex&&n<=l.$_endIndex)&&(m=n)}M()}});const L=t=>{var n;let e=a.value;if(t==="next")for(e++;y.value[e]&&!q(y.value[e].name);)e++;else if(t==="prev")for(e--;y.value[e]&&!q(y.value[e].name);)e--;if(q((n=y.value[e])==null?void 0:n.name)??""){a.value=e;const l=x.value;l&&!(e>=l.$_startIndex&&e<=l.$_endIndex)&&(m=e)}M()},F=t=>{var n;let e=a.value;if(t==="next")for(e++;y.value[e]&&!q(y.value[e].name);)e++;else if(t==="prev")for(e--;y.value[e]&&!q(y.value[e].name);)e--;return q((n=y.value[e])==null?void 0:n.name)??""};return oe("removeFiles",async()=>{var t;v.value&&!f.sortedFiles[a.value]&&(z.info(D("manualExitFullScreen"),5),await K(500),(t=document.querySelector(".ant-image-preview-operations-operation .anticon-close"))==null||t.click(),a.value=-1)}),{previewIdx:a,onPreviewVisibleChange:T,previewing:v,previewImgMove:L,canPreview:F}}function Pt(s){const r=C(),{scroller:a,stackViewEl:i,stack:c,currPage:v,currLocation:f,sortMethod:y,useEventListen:x,eventEmitter:m,getPane:T}=U().toRefs();se(()=>c.value.length,re((o,u)=>{var w;o!==u&&((w=a.value)==null||w.scrollToItem(0))},300));const M=async o=>{if(await n(o),s.walkModePath){await K();const[u]=H(v.value.files,y.value).filter(w=>w.type==="dir");u&&await n(u.fullpath),await m.value.emit("loadNextDir")}};ze(async()=>{var o;if(!c.value.length){const u=await j("/");c.value.push({files:u.files,curr:"/"})}r.value=new yt,r.value.configure({parent:i.value}),s.path&&s.path!=="/"?await M(s.walkModePath??s.path):(o=S.conf)!=null&&o.home&&n(S.conf.home)}),se(f,re(o=>{const u=T.value();u.path=o;const w=u.path.split("/").pop(),_=(()=>{var $;if(!s.walkModePath){const O=Z(o);for(const[W,J]of Object.entries(S.pathAliasMap))if(O.startsWith(J))return O.replace(J,W);return w}return"Walk: "+((($=S.quickMovePaths.find(O=>O.dir===u.walkModePath))==null?void 0:$.zh)??w)})();u.name=A("div",{style:"display:flex;align-items:center"},[A(ht),A("span",{class:"line-clamp-1",style:"max-width: 256px"},_)]),u.nameFallbackStr=_,S.recent=S.recent.filter($=>$.key!==u.key),S.recent.unshift({path:o,key:u.key}),S.recent.length>20&&(S.recent=S.recent.slice(0,20))},300));const L=()=>ie(f.value),F=async o=>{var u,w;if(o.type==="dir")try{(u=r.value)==null||u.start();const{files:N}=await j(o.fullpath);c.value.push({files:N,curr:o.name})}finally{(w=r.value)==null||w.done()}},t=o=>{for(;o<c.value.length-1;)c.value.pop()},e=(o,u)=>(ne(S.conf,"global.conf load failed"),S.conf.is_win?o.toLowerCase()==u.toLowerCase():o==u),n=async o=>{var w,N;const u=c.value.slice();try{Ae(o)||(o=ce(((w=S.conf)==null?void 0:w.sd_cwd)??"/",o));const _=fe(o),$=c.value.map(O=>O.curr);for($.shift();$[0]&&_[0]&&e($[0],_[0]);)$.shift(),_.shift();for(let O=0;O<$.length;O++)c.value.pop();if(!_.length)return l();for(const O of _){const W=(N=v.value)==null?void 0:N.files.find(J=>e(J.name,O));if(!W)throw console.error({frags:_,frag:O,stack:we(c.value)}),new Error(`${O} not found`);await F(W)}}catch(_){throw z.error(D("moveFailedCheckPath")+(_ instanceof Error?_.message:"")),console.error(o,fe(o),v.value),c.value=u,_}},l=de(async()=>{var o,u,w;try{if((o=r.value)==null||o.start(),s.walkModePath)t(0),await M(s.walkModePath);else{const{files:N}=await j(c.value.length===1?"/":f.value);G(c.value).files=N}(u=a.value)==null||u.scrollToItem(0),z.success(D("refreshCompleted"))}finally{(w=r.value)==null||w.done()}});qe("return-to-iib",de(async()=>{var o,u;if(!s.walkModePath)try{(o=r.value)==null||o.start();const{files:w}=await j(c.value.length===1?"/":f.value);G(c.value).files.map(_=>_.date).join()!==w.map(_=>_.date).join()&&(G(c.value).files=w,z.success(D("autoUpdate")))}finally{(u=r.value)==null||u.done()}})),x.value("refresh",l);const g=o=>{s.walkModePath&&(T.value().walkModePath=o),M(o)},h=R(()=>S.quickMovePaths.map(o=>({...o,path:Z(o.dir)}))),d=R(()=>{const o=Z(f.value);return h.value.find(w=>w.path===o)}),b=async()=>{const o=d.value;if(o){if(!o.can_delete)return;await et(f.value),z.success(D("removeComplete"))}else await tt(f.value),z.success(D("addComplete"));await Ve.emit("updateGlobalSetting")},I=C(!1),P=C(f.value),E=()=>{I.value=!0,P.value=f.value},p=async()=>{await n(P.value),I.value=!1};return Y("click",()=>{I.value=!1}),{locInputValue:P,isLocationEditing:I,onLocEditEnter:p,onEditBtnClick:E,addToSearchScanPathAndQuickMove:b,searchPathInfo:d,refresh:l,copyLocation:L,back:t,openNext:F,currPage:v,currLocation:f,to:n,stack:c,scroller:a,share:()=>{const o=parent.location,u=o.href.substring(0,o.href.length-o.search.length),w=new URLSearchParams(o.search);w.set("action","open"),w.set("path",f.value);const N=`${u}?${w.toString()}`;ie(N,D("copyLocationUrlSuccessMsg"))},quickMoveTo:g}}function Ft(s){const{scroller:r,sortedFiles:a,stack:i,sortMethod:c,currLocation:v,currPage:f,stackViewEl:y,canLoadNext:x,previewIdx:m}=U().toRefs(),{state:T}=U(),M=C(!1),L=C(S.defaultViewMode),F=272,t=64,e=F*2,{width:n}=Re(y),l=R(()=>{const P=n.value;if(!(L.value==="detailList"||!P))return~~(P/(L.value==="previewGrid"?F:e))}),g=R(()=>{const P=L.value;if(P==="detailList")return{first:80,second:void 0};const E=P==="previewGrid"?F:e;return{first:E+t,second:E}}),h=C(!1),d=async()=>{var P;if(!(h.value||!s.walkModePath||!x.value))try{h.value=!0;const E=i.value[i.value.length-2],p=H(E.files,c.value),k=p.findIndex(o=>{var u;return o.name===((u=f.value)==null?void 0:u.curr)});if(k!==-1){const o=p[k+1],u=ce(v.value,"../",o.name),w=await j(u),N=f.value;N.curr=o.name,N.walkFiles||(N.walkFiles=[N.files]),N.walkFiles.push(w.files),console.log("curr page files length",(P=f.value)==null?void 0:P.files.length)}}catch(E){console.error("loadNextDir",E),x.value=!1}finally{h.value=!1}},b=async(P=!1)=>{const E=r.value,p=()=>P?m.value:(E==null?void 0:E.$_endIndex)??0;for(;!a.value.length||p()>a.value.length-20&&x.value;)await K(100),await d()};T.useEventListen("loadNextDir",b);const I=re(()=>b(),300);return{gridItems:l,sortedFiles:a,sortMethodConv:Ue,moreActionsDropdownShow:M,viewMode:L,gridSize:F,sortMethod:c,largeGridSize:e,onScroll:I,loadNextDir:d,loadNextDirLoading:h,canLoadNext:x,itemSize:g}}const Se=()=>A("p",{style:{background:"var(--zp-secondary-background)",padding:"8px",borderLeft:"4px solid var(--primary-color)"}},`Tips: ${D("multiSelectTips")}`);function Mt(){const{currLocation:s,sortedFiles:r,currPage:a,multiSelectedIdxs:i,eventEmitter:c}=U().toRefs(),v=()=>{i.value=[]};return Y("click",v),Y("blur",v),se(a,v),{onFileDragStart:(x,m)=>{const T=we(r.value[m]);console.log("onFileDragStart set drag file ",x,m,T);const M=[T];let L=T.type==="dir";if(i.value.includes(m)){const F=i.value.map(t=>r.value[t]);M.push(...F),L=F.some(t=>t.type==="dir")}x.dataTransfer.setData("text/plain",JSON.stringify({includeDir:L,loc:s.value||"search-result",path:ft(M,"fullpath").map(F=>F.fullpath)}))},onDrop:async x=>{var T;const m=JSON.parse(((T=x.dataTransfer)==null?void 0:T.getData("text"))||"{}");if(console.log(m),m.path&&typeof m.includeDir<"u"&&m.loc){const M=s.value;if(m.loc===M)return;const L=A("div",[A("div",`${D("moveSelectedFilesTo")}${M}`),A("ol",m.path.map(F=>F.split(/[/\\]/).pop()).map(F=>A("li",F))),Se()]);ye.confirm({title:D("confirm"),content:L,maskClosable:!0,async onOk(){await be(m.path,M),ee.emit("removeFiles",{paths:m.path,loc:m.loc}),await c.value.emit("refresh")}})}},multiSelectedIdxs:i}}function Et(s,{openNext:r}){const a=C(!1),i=C(""),{sortedFiles:c,previewIdx:v,multiSelectedIdxs:f,stack:y,currLocation:x,spinning:m,previewing:T}=U().toRefs(),M=Z;oe("removeFiles",({paths:e,loc:n})=>{if(M(n)!==M(x.value))return;const l=G(y.value);l&&(l.files=l.files.filter(g=>!e.includes(g.fullpath)),l.walkFiles&&(l.walkFiles=l.walkFiles.map(g=>g.filter(h=>!e.includes(h.fullpath)))))}),oe("addFiles",({files:e,loc:n})=>{if(M(n)!==M(x.value))return;const l=G(y.value);l&&l.files.unshift(...e)});const L=We(),F=async(e,n,l)=>{v.value=l,S.fullscreenPreviewInitialUrl=V(n);const g=f.value.indexOf(l);if(e.shiftKey){if(g!==-1)f.value.splice(g,1);else{f.value.push(l),f.value.sort((b,I)=>b-I);const h=f.value[0],d=f.value[f.value.length-1];f.value=ut(h,d+1)}e.stopPropagation()}else e.ctrlKey||e.metaKey?(g!==-1?f.value.splice(g,1):f.value.push(l),e.stopPropagation()):await r(n)},t=async(e,n,l)=>{var I,P,E;const g=V(n),h=x.value,d=()=>{let p=[];return f.value.includes(l)?p=f.value.map(k=>c.value[k]):p.push(n),p},b=async p=>{if(!m.value)try{m.value=!0,await Ye(n.fullpath),ge.postMessage("iib_hidden_img_update_trigger");const k=setTimeout(()=>Je.warn({message:D("long_loading"),duration:20}),5e3);await Qe(),clearTimeout(k),ge.postMessage(`iib_hidden_tab_${p}`)}catch(k){console.error(k),z.error("发送图像失败，请携带console的错误消息找开发者")}finally{m.value=!1}};if(`${e.key}`.startsWith("toggle-tag-")){const p=+`${e.key}`.split("toggle-tag-")[1],{is_remove:k}=await at({tag_id:p,img_path:n.fullpath}),o=(P=(I=S.conf)==null?void 0:I.all_custom_tags.find(u=>u.id===p))==null?void 0:P.name;z.success(D(k?"removedTagFromImage":"addedTagToImage",{tag:o}));return}switch(e.key){case"previewInNewWindow":return window.open(g);case"download":return window.open(V(n,!0));case"copyPreviewUrl":return ie(parent.document.location.origin+g);case"send2txt2img":return b("txt2img");case"send2img2img":return b("img2img");case"send2inpaint":return b("inpaint");case"send2extras":return b("extras");case"send2savedDir":{const p=S.quickMovePaths.find(u=>u.key==="outdir_save");if(!p)return z.error(D("unknownSavedDir"));const k=Ke(p.dir,(E=S.conf)==null?void 0:E.sd_cwd),o=d();await be(o.map(u=>u.fullpath),k),ee.emit("removeFiles",{paths:o.map(u=>u.fullpath),loc:x.value}),ee.emit("addFiles",{files:o,loc:k});break}case"send2controlnet-img2img":case"send2controlnet-txt2img":{const p=Be(),k=Xe(),o=e.key.split("-")[1];o==="img2img"?k.switch_to_img2img():k.switch_to_txt2img(),await K(100);const w=p.querySelector(`#${o}_controlnet`).querySelector(".label-wrap");w.className.includes("open")||(w.click(),await K(100)),w.scrollIntoView();const _=await(await fetch(V(n))).blob(),$=new File([_],"image.jpg",{type:_.type,lastModified:Date.now()}),O=new DataTransfer;O.items.add($);const W=new ClipboardEvent("paste",{clipboardData:O,bubbles:!0});w.dispatchEvent(W);break}case"openWithWalkMode":{ae.set(h,y.value);const p=S.tabList[s.tabIdx],k={type:"local",key:Q(),path:n.fullpath,name:D("local"),stackKey:h,walkModePath:n.fullpath};p.panes.push(k),p.key=k.key;break}case"openInNewTab":{ae.set(h,y.value);const p=S.tabList[s.tabIdx],k={type:"local",key:Q(),path:n.fullpath,name:D("local"),stackKey:h};p.panes.push(k),p.key=k.key;break}case"openOnTheRight":{ae.set(h,y.value);let p=S.tabList[s.tabIdx+1];p||(p={panes:[],key:"",id:Q()},S.tabList[s.tabIdx+1]=p);const k={type:"local",key:Q(),path:n.fullpath,name:D("local"),stackKey:h};p.panes.push(k),p.key=k.key;break}case"viewGenInfo":{a.value=!0,i.value=await L.pushAction(()=>He(n.fullpath)).res;break}case"openWithLocalFileBrowser":{await je(n.fullpath);break}case"deleteFiles":{const p=d();await new Promise(k=>{ye.confirm({title:D("confirmDelete"),maskClosable:!0,content:A("div",[A("ol",{style:"max-height:50vh;overflow:auto;"},p.map(o=>o.fullpath.split(/[/\\]/).pop()).map(o=>A("li",o))),Se()]),async onOk(){const o=p.map(u=>u.fullpath);await mt(o),z.success(D("deleteSuccess")),ee.emit("removeFiles",{paths:o,loc:x.value}),k()}})});break}}return{}};return Y("keydown",e=>{var n,l,g;if(T.value){const h=[];if(e.shiftKey&&h.push("Shift"),e.ctrlKey&&h.push("Ctrl"),e.code.startsWith("Key")||e.code.startsWith("Digit")){h.push(e.code);const d=h.join(" + "),b=(n=Object.entries(S.shortcut).find(I=>I[1]===d))==null?void 0:n[0];if(b){e.stopPropagation(),e.preventDefault();const I=v.value,P=c.value[I];switch(b){case"delete":return V(P)===S.fullscreenPreviewInitialUrl?z.warn(D("fullscreenRestriction")):t({key:"deleteFiles"},P,I);default:{const E=(l=/^toggle_tag_(.*)$/.exec(b))==null?void 0:l[1],p=(g=S.conf)==null?void 0:g.all_custom_tags.find(k=>k.name===E);return p?t({key:`toggle-tag-${p.id}`},P,I):void 0}}}}}}),{onFileItemClick:F,onContextMenuClick:t,showGenInfo:a,imageGenInfo:i,q:L}}const Lt=()=>{const{stackViewEl:s}=U().toRefs(),r=C(-1);return Ge(s,a=>{var c;let i=a.target;for(;i.parentElement;)if(i=i.parentElement,i.tagName.toLowerCase()==="li"&&i.classList.contains("file-item-trigger")){const v=(c=i.dataset)==null?void 0:c.idx;v&&Number.isSafeInteger(+v)&&(r.value=+v);return}}),{showMenuIdx:r}};export{Pt as a,Ft as b,Mt as c,Et as d,It as e,Lt as f,te as g,oe as h,St as i,G as l,ae as s,V as t,U as u,xt as v};
