import{d as G,u as ut,y as st,ak as ct,cD as X,A as dt,ao as mt,al as Y,P as gt,a as E,bM as Z,T as Et,s as yt,r as _,G as F,aj as bt,H as pt,a5 as ht,z as Tt,ac as St,h as N,_ as g,a8 as Ct,cE as kt}from"./index-4224bb29.js";var H={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},V={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},w=[],L=[];function xt(){var a=document.createElement("div"),t=a.style;"AnimationEvent"in window||(delete H.animationstart.animation,delete V.animationend.animation),"TransitionEvent"in window||(delete H.transitionstart.transition,delete V.transitionend.transition);function i(r,b){for(var y in r)if(r.hasOwnProperty(y)){var d=r[y];for(var f in d)if(f in t){b.push(d[f]);break}}}i(H,w),i(V,L)}typeof window<"u"&&typeof document<"u"&&xt();function tt(a,t,i){a.addEventListener(t,i,!1)}function nt(a,t,i){a.removeEventListener(t,i,!1)}var At={startEvents:w,addStartEventListener:function(t,i){if(w.length===0){setTimeout(i,0);return}w.forEach(function(r){tt(t,r,i)})},removeStartEventListener:function(t,i){w.length!==0&&w.forEach(function(r){nt(t,r,i)})},endEvents:L,addEndEventListener:function(t,i){if(L.length===0){setTimeout(i,0);return}L.forEach(function(r){tt(t,r,i)})},removeEndEventListener:function(t,i){L.length!==0&&L.forEach(function(r){nt(t,r,i)})}};const W=At;var S;function et(a){return!a||a.offsetParent===null}function Nt(a){var t=(a||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const wt=G({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,i){var r=i.slots,b=i.expose,y=mt(),d=ut("",t),f=d.csp,p=d.prefixCls;b({csp:f});var M=null,I=null,k=null,h=!1,v=null,m=!1,T=function(n){if(!m){var e=X(y);!n||n.target!==e||h||A(e)}},B=function(n){!n||n.animationName!=="fadeEffect"||A(n.target)},x=function(){var n=t.insertExtraNode;return n?"".concat(p.value,"-click-animating"):"".concat(p.value,"-click-animating-without-extra-node")},D=function(n,e){var l=t.insertExtraNode,o=t.disabled;if(!(o||!n||et(n)||n.className.indexOf("-leave")>=0)){v=document.createElement("div"),v.className="".concat(p.value,"-click-animating-node");var u=x();if(n.removeAttribute(u),n.setAttribute(u,"true"),S=S||document.createElement("style"),e&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&Nt(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&e!=="transparent"){var C;(C=f.value)!==null&&C!==void 0&&C.nonce&&(S.nonce=f.value.nonce),v.style.borderColor=e,S.innerHTML=`
        [`.concat(p.value,"-click-animating-without-extra-node='true']::after, .").concat(p.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(e,`;
        }`),document.body.contains(S)||document.body.appendChild(S)}l&&n.appendChild(v),W.addStartEventListener(n,T),W.addEndEventListener(n,B)}},A=function(n){if(!(!n||n===v||!(n instanceof Element))){var e=t.insertExtraNode,l=x();n.setAttribute(l,"false"),S&&(S.innerHTML=""),e&&v&&n.contains(v)&&n.removeChild(v),W.removeStartEventListener(n,T),W.removeEndEventListener(n,B)}},R=function(n){if(!(!n||!n.getAttribute||n.getAttribute("disabled")||n.className.indexOf("disabled")>=0)){var e=function(o){if(!(o.target.tagName==="INPUT"||et(o.target))){A(n);var u=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");I=setTimeout(function(){return D(n,u)},0),Y.cancel(k),h=!0,k=Y(function(){h=!1},10)}};return n.addEventListener("click",e,!0),{cancel:function(){n.removeEventListener("click",e,!0)}}}};return st(function(){ct(function(){var s=X(y);s.nodeType===1&&(M=R(s))})}),dt(function(){M&&M.cancel(),clearTimeout(I),m=!0}),function(){var s;return(s=r.default)===null||s===void 0?void 0:s.call(r)[0]}}});function Ot(a){return a==="danger"?{danger:!0}:{type:a}}var Lt=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:gt.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const Mt=Lt;var at=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},it=function(t){ct(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},rt=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const Bt=G({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var i=t.existIcon,r=t.prefixCls,b=t.loading;if(i)return E("span",{class:"".concat(r,"-loading-icon")},[E(Z,null,null)]);var y=!!b;return E(Et,{name:"".concat(r,"-loading-icon-motion"),onBeforeEnter:at,onEnter:it,onAfterEnter:rt,onBeforeLeave:it,onLeave:function(f){setTimeout(function(){at(f)})},onAfterLeave:rt},{default:function(){return[y?E("span",{class:"".concat(r,"-loading-icon")},[E(Z,null,null)]):null]}})}}});var ot=/^[\u4e00-\u9fa5]{2}$/,lt=ot.test.bind(ot);function j(a){return a==="text"||a==="link"}const Pt=G({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:yt(Mt(),{type:"default"}),slots:["icon"],setup:function(t,i){var r=i.slots,b=i.attrs,y=i.emit,d=ut("btn",t),f=d.prefixCls,p=d.autoInsertSpaceInButton,M=d.direction,I=d.size,k=_(null),h=_(void 0),v=!1,m=_(!1),T=_(!1),B=F(function(){return p.value!==!1}),x=F(function(){return Ct(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});bt(x,function(n){clearTimeout(h.value),typeof x.value=="number"?h.value=setTimeout(function(){m.value=n},x.value):m.value=n},{immediate:!0});var D=F(function(){var n,e=t.type,l=t.shape,o=l===void 0?"default":l,u=t.ghost,C=t.block,U=t.danger,c=f.value,O={large:"lg",small:"sm",middle:void 0},P=I.value,z=P&&O[P]||"";return n={},g(n,"".concat(c),!0),g(n,"".concat(c,"-").concat(e),e),g(n,"".concat(c,"-").concat(o),o!=="default"&&o),g(n,"".concat(c,"-").concat(z),z),g(n,"".concat(c,"-loading"),m.value),g(n,"".concat(c,"-background-ghost"),u&&!j(e)),g(n,"".concat(c,"-two-chinese-chars"),T.value&&B.value),g(n,"".concat(c,"-block"),C),g(n,"".concat(c,"-dangerous"),!!U),g(n,"".concat(c,"-rtl"),M.value==="rtl"),n}),A=function(){var e=k.value;if(!(!e||p.value===!1)){var l=e.textContent;v&&lt(l)?T.value||(T.value=!0):T.value&&(T.value=!1)}},R=function(e){if(m.value||t.disabled){e.preventDefault();return}y("click",e)},s=function(e,l){var o=l?" ":"";if(e.type===kt){var u=e.children.trim();return lt(u)&&(u=u.split("").join(o)),E("span",null,[u])}return e};return pt(function(){ht(!(t.ghost&&j(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),st(A),Tt(A),dt(function(){h.value&&clearTimeout(h.value)}),function(){var n,e,l=t.icon,o=l===void 0?(n=r.icon)===null||n===void 0?void 0:n.call(r):l,u=St((e=r.default)===null||e===void 0?void 0:e.call(r));v=u.length===1&&!o&&!j(t.type);var C=t.type,U=t.htmlType,c=t.disabled,O=t.href,P=t.title,z=t.target,ft=t.onMousedown,vt=m.value?"loading":o,$=N(N({},b),{},{title:P,disabled:c,class:[D.value,b.class,g({},"".concat(f.value,"-icon-only"),u.length===0&&!!vt)],onClick:R,onMousedown:ft});c||delete $.disabled;var q=o&&!m.value?o:E(Bt,{existIcon:!!o,prefixCls:f.value,loading:!!m.value},null),J=u.map(function(Q){return s(Q,v&&B.value)});if(O!==void 0)return E("a",N(N({},$),{},{href:O,target:z,ref:k}),[q,J]);var K=E("button",N(N({},$),{},{ref:k,type:U}),[q,J]);return j(C)?K:E(wt,{ref:"wave",disabled:!!m.value},{default:function(){return[K]}})}}});export{Pt as B,wt as W,Mt as b,Ot as c};