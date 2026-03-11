(function(){const rl=document.createElement("link").relList;if(rl&&rl.supports&&rl.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))h(U);new MutationObserver(U=>{for(const F of U)if(F.type==="childList")for(const ml of F.addedNodes)ml.tagName==="LINK"&&ml.rel==="modulepreload"&&h(ml)}).observe(document,{childList:!0,subtree:!0});function k(U){const F={};return U.integrity&&(F.integrity=U.integrity),U.referrerPolicy&&(F.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?F.credentials="include":U.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function h(U){if(U.ep)return;U.ep=!0;const F=k(U);fetch(U.href,F)}})();var af={exports:{}},pn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function J0(){if(yd)return pn;yd=1;var z=Symbol.for("react.transitional.element"),rl=Symbol.for("react.fragment");function k(h,U,F){var ml=null;if(F!==void 0&&(ml=""+F),U.key!==void 0&&(ml=""+U.key),"key"in U){F={};for(var Ul in U)Ul!=="key"&&(F[Ul]=U[Ul])}else F=U;return U=F.ref,{$$typeof:z,type:h,key:ml,ref:U!==void 0?U:null,props:F}}return pn.Fragment=rl,pn.jsx=k,pn.jsxs=k,pn}var md;function F0(){return md||(md=1,af.exports=J0()),af.exports}var Gl=F0(),nf={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function W0(){if(hd)return q;hd=1;var z=Symbol.for("react.transitional.element"),rl=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),ml=Symbol.for("react.context"),Ul=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),ol=Symbol.iterator;function Fl(s){return s===null||typeof s!="object"?null:(s=ol&&s[ol]||s["@@iterator"],typeof s=="function"?s:null)}var Hl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bl=Object.assign,Ct={};function Wl(s,b,A){this.props=s,this.context=b,this.refs=Ct,this.updater=A||Hl}Wl.prototype.isReactComponent={},Wl.prototype.setState=function(s,b){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,b,"setState")},Wl.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Ft(){}Ft.prototype=Wl.prototype;function Ol(s,b,A){this.props=s,this.context=b,this.refs=Ct,this.updater=A||Hl}var it=Ol.prototype=new Ft;it.constructor=Ol,Bl(it,Wl.prototype),it.isPureReactComponent=!0;var bt=Array.isArray;function Ll(){}var Z={H:null,A:null,T:null,S:null},Yl=Object.prototype.hasOwnProperty;function Et(s,b,A){var D=A.ref;return{$$typeof:z,type:s,key:b,ref:D!==void 0?D:null,props:A}}function je(s,b){return Et(s.type,b,s.props)}function Tt(s){return typeof s=="object"&&s!==null&&s.$$typeof===z}function jl(s){var b={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(A){return b[A]})}var xe=/\/+/g;function Mt(s,b){return typeof s=="object"&&s!==null&&s.key!=null?jl(""+s.key):b.toString(36)}function vt(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Ll,Ll):(s.status="pending",s.then(function(b){s.status==="pending"&&(s.status="fulfilled",s.value=b)},function(b){s.status==="pending"&&(s.status="rejected",s.reason=b)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function S(s,b,A,D,G){var Y=typeof s;(Y==="undefined"||Y==="boolean")&&(s=null);var I=!1;if(s===null)I=!0;else switch(Y){case"bigint":case"string":case"number":I=!0;break;case"object":switch(s.$$typeof){case z:case rl:I=!0;break;case $:return I=s._init,S(I(s._payload),b,A,D,G)}}if(I)return G=G(s),I=D===""?"."+Mt(s,0):D,bt(G)?(A="",I!=null&&(A=I.replace(xe,"$&/")+"/"),S(G,b,A,"",function(_a){return _a})):G!=null&&(Tt(G)&&(G=je(G,A+(G.key==null||s&&s.key===G.key?"":(""+G.key).replace(xe,"$&/")+"/")+I)),b.push(G)),1;I=0;var Nl=D===""?".":D+":";if(bt(s))for(var hl=0;hl<s.length;hl++)D=s[hl],Y=Nl+Mt(D,hl),I+=S(D,b,A,Y,G);else if(hl=Fl(s),typeof hl=="function")for(s=hl.call(s),hl=0;!(D=s.next()).done;)D=D.value,Y=Nl+Mt(D,hl++),I+=S(D,b,A,Y,G);else if(Y==="object"){if(typeof s.then=="function")return S(vt(s),b,A,D,G);throw b=String(s),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return I}function T(s,b,A){if(s==null)return s;var D=[],G=0;return S(s,D,"","",function(Y){return b.call(A,Y,G++)}),D}function N(s){if(s._status===-1){var b=s._result;b=b(),b.then(function(A){(s._status===0||s._status===-1)&&(s._status=1,s._result=A)},function(A){(s._status===0||s._status===-1)&&(s._status=2,s._result=A)}),s._status===-1&&(s._status=0,s._result=b)}if(s._status===1)return s._result.default;throw s._result}var tl=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},ul={map:T,forEach:function(s,b,A){T(s,function(){b.apply(this,arguments)},A)},count:function(s){var b=0;return T(s,function(){b++}),b},toArray:function(s){return T(s,function(b){return b})||[]},only:function(s){if(!Tt(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return q.Activity=B,q.Children=ul,q.Component=Wl,q.Fragment=k,q.Profiler=U,q.PureComponent=Ol,q.StrictMode=h,q.Suspense=O,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,q.__COMPILER_RUNTIME={__proto__:null,c:function(s){return Z.H.useMemoCache(s)}},q.cache=function(s){return function(){return s.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(s,b,A){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var D=Bl({},s.props),G=s.key;if(b!=null)for(Y in b.key!==void 0&&(G=""+b.key),b)!Yl.call(b,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&b.ref===void 0||(D[Y]=b[Y]);var Y=arguments.length-2;if(Y===1)D.children=A;else if(1<Y){for(var I=Array(Y),Nl=0;Nl<Y;Nl++)I[Nl]=arguments[Nl+2];D.children=I}return Et(s.type,G,D)},q.createContext=function(s){return s={$$typeof:ml,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:F,_context:s},s},q.createElement=function(s,b,A){var D,G={},Y=null;if(b!=null)for(D in b.key!==void 0&&(Y=""+b.key),b)Yl.call(b,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(G[D]=b[D]);var I=arguments.length-2;if(I===1)G.children=A;else if(1<I){for(var Nl=Array(I),hl=0;hl<I;hl++)Nl[hl]=arguments[hl+2];G.children=Nl}if(s&&s.defaultProps)for(D in I=s.defaultProps,I)G[D]===void 0&&(G[D]=I[D]);return Et(s,Y,G)},q.createRef=function(){return{current:null}},q.forwardRef=function(s){return{$$typeof:Ul,render:s}},q.isValidElement=Tt,q.lazy=function(s){return{$$typeof:$,_payload:{_status:-1,_result:s},_init:N}},q.memo=function(s,b){return{$$typeof:E,type:s,compare:b===void 0?null:b}},q.startTransition=function(s){var b=Z.T,A={};Z.T=A;try{var D=s(),G=Z.S;G!==null&&G(A,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ll,tl)}catch(Y){tl(Y)}finally{b!==null&&A.types!==null&&(b.types=A.types),Z.T=b}},q.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},q.use=function(s){return Z.H.use(s)},q.useActionState=function(s,b,A){return Z.H.useActionState(s,b,A)},q.useCallback=function(s,b){return Z.H.useCallback(s,b)},q.useContext=function(s){return Z.H.useContext(s)},q.useDebugValue=function(){},q.useDeferredValue=function(s,b){return Z.H.useDeferredValue(s,b)},q.useEffect=function(s,b){return Z.H.useEffect(s,b)},q.useEffectEvent=function(s){return Z.H.useEffectEvent(s)},q.useId=function(){return Z.H.useId()},q.useImperativeHandle=function(s,b,A){return Z.H.useImperativeHandle(s,b,A)},q.useInsertionEffect=function(s,b){return Z.H.useInsertionEffect(s,b)},q.useLayoutEffect=function(s,b){return Z.H.useLayoutEffect(s,b)},q.useMemo=function(s,b){return Z.H.useMemo(s,b)},q.useOptimistic=function(s,b){return Z.H.useOptimistic(s,b)},q.useReducer=function(s,b,A){return Z.H.useReducer(s,b,A)},q.useRef=function(s){return Z.H.useRef(s)},q.useState=function(s){return Z.H.useState(s)},q.useSyncExternalStore=function(s,b,A){return Z.H.useSyncExternalStore(s,b,A)},q.useTransition=function(){return Z.H.useTransition()},q.version="19.2.4",q}var gd;function sf(){return gd||(gd=1,nf.exports=W0()),nf.exports}var Td=sf(),uf={exports:{}},xn={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function k0(){return vd||(vd=1,(function(z){function rl(S,T){var N=S.length;S.push(T);l:for(;0<N;){var tl=N-1>>>1,ul=S[tl];if(0<U(ul,T))S[tl]=T,S[N]=ul,N=tl;else break l}}function k(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var T=S[0],N=S.pop();if(N!==T){S[0]=N;l:for(var tl=0,ul=S.length,s=ul>>>1;tl<s;){var b=2*(tl+1)-1,A=S[b],D=b+1,G=S[D];if(0>U(A,N))D<ul&&0>U(G,A)?(S[tl]=G,S[D]=N,tl=D):(S[tl]=A,S[b]=N,tl=b);else if(D<ul&&0>U(G,N))S[tl]=G,S[D]=N,tl=D;else break l}}return T}function U(S,T){var N=S.sortIndex-T.sortIndex;return N!==0?N:S.id-T.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var F=performance;z.unstable_now=function(){return F.now()}}else{var ml=Date,Ul=ml.now();z.unstable_now=function(){return ml.now()-Ul}}var O=[],E=[],$=1,B=null,ol=3,Fl=!1,Hl=!1,Bl=!1,Ct=!1,Wl=typeof setTimeout=="function"?setTimeout:null,Ft=typeof clearTimeout=="function"?clearTimeout:null,Ol=typeof setImmediate<"u"?setImmediate:null;function it(S){for(var T=k(E);T!==null;){if(T.callback===null)h(E);else if(T.startTime<=S)h(E),T.sortIndex=T.expirationTime,rl(O,T);else break;T=k(E)}}function bt(S){if(Bl=!1,it(S),!Hl)if(k(O)!==null)Hl=!0,Ll||(Ll=!0,jl());else{var T=k(E);T!==null&&vt(bt,T.startTime-S)}}var Ll=!1,Z=-1,Yl=5,Et=-1;function je(){return Ct?!0:!(z.unstable_now()-Et<Yl)}function Tt(){if(Ct=!1,Ll){var S=z.unstable_now();Et=S;var T=!0;try{l:{Hl=!1,Bl&&(Bl=!1,Ft(Z),Z=-1),Fl=!0;var N=ol;try{t:{for(it(S),B=k(O);B!==null&&!(B.expirationTime>S&&je());){var tl=B.callback;if(typeof tl=="function"){B.callback=null,ol=B.priorityLevel;var ul=tl(B.expirationTime<=S);if(S=z.unstable_now(),typeof ul=="function"){B.callback=ul,it(S),T=!0;break t}B===k(O)&&h(O),it(S)}else h(O);B=k(O)}if(B!==null)T=!0;else{var s=k(E);s!==null&&vt(bt,s.startTime-S),T=!1}}break l}finally{B=null,ol=N,Fl=!1}T=void 0}}finally{T?jl():Ll=!1}}}var jl;if(typeof Ol=="function")jl=function(){Ol(Tt)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Mt=xe.port2;xe.port1.onmessage=Tt,jl=function(){Mt.postMessage(null)}}else jl=function(){Wl(Tt,0)};function vt(S,T){Z=Wl(function(){S(z.unstable_now())},T)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(S){S.callback=null},z.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yl=0<S?Math.floor(1e3/S):5},z.unstable_getCurrentPriorityLevel=function(){return ol},z.unstable_next=function(S){switch(ol){case 1:case 2:case 3:var T=3;break;default:T=ol}var N=ol;ol=T;try{return S()}finally{ol=N}},z.unstable_requestPaint=function(){Ct=!0},z.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var N=ol;ol=S;try{return T()}finally{ol=N}},z.unstable_scheduleCallback=function(S,T,N){var tl=z.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?tl+N:tl):N=tl,S){case 1:var ul=-1;break;case 2:ul=250;break;case 5:ul=1073741823;break;case 4:ul=1e4;break;default:ul=5e3}return ul=N+ul,S={id:$++,callback:T,priorityLevel:S,startTime:N,expirationTime:ul,sortIndex:-1},N>tl?(S.sortIndex=N,rl(E,S),k(O)===null&&S===k(E)&&(Bl?(Ft(Z),Z=-1):Bl=!0,vt(bt,N-tl))):(S.sortIndex=ul,rl(O,S),Hl||Fl||(Hl=!0,Ll||(Ll=!0,jl()))),S},z.unstable_shouldYield=je,z.unstable_wrapCallback=function(S){var T=ol;return function(){var N=ol;ol=T;try{return S.apply(this,arguments)}finally{ol=N}}}})(ff)),ff}var Sd;function $0(){return Sd||(Sd=1,cf.exports=k0()),cf.exports}var of={exports:{}},Rl={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function I0(){if(pd)return Rl;pd=1;var z=sf();function rl(O){var E="https://react.dev/errors/"+O;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)E+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+O+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(){}var h={d:{f:k,r:function(){throw Error(rl(522))},D:k,C:k,L:k,m:k,X:k,S:k,M:k},p:0,findDOMNode:null},U=Symbol.for("react.portal");function F(O,E,$){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:B==null?null:""+B,children:O,containerInfo:E,implementation:$}}var ml=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ul(O,E){if(O==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Rl.createPortal=function(O,E){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(rl(299));return F(O,E,null,$)},Rl.flushSync=function(O){var E=ml.T,$=h.p;try{if(ml.T=null,h.p=2,O)return O()}finally{ml.T=E,h.p=$,h.d.f()}},Rl.preconnect=function(O,E){typeof O=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,h.d.C(O,E))},Rl.prefetchDNS=function(O){typeof O=="string"&&h.d.D(O)},Rl.preinit=function(O,E){if(typeof O=="string"&&E&&typeof E.as=="string"){var $=E.as,B=Ul($,E.crossOrigin),ol=typeof E.integrity=="string"?E.integrity:void 0,Fl=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;$==="style"?h.d.S(O,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:B,integrity:ol,fetchPriority:Fl}):$==="script"&&h.d.X(O,{crossOrigin:B,integrity:ol,fetchPriority:Fl,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Rl.preinitModule=function(O,E){if(typeof O=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var $=Ul(E.as,E.crossOrigin);h.d.M(O,{crossOrigin:$,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&h.d.M(O)},Rl.preload=function(O,E){if(typeof O=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var $=E.as,B=Ul($,E.crossOrigin);h.d.L(O,$,{crossOrigin:B,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Rl.preloadModule=function(O,E){if(typeof O=="string")if(E){var $=Ul(E.as,E.crossOrigin);h.d.m(O,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:$,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else h.d.m(O)},Rl.requestFormReset=function(O){h.d.r(O)},Rl.unstable_batchedUpdates=function(O,E){return O(E)},Rl.useFormState=function(O,E,$){return ml.H.useFormState(O,E,$)},Rl.useFormStatus=function(){return ml.H.useHostTransitionStatus()},Rl.version="19.2.4",Rl}var xd;function P0(){if(xd)return of.exports;xd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(rl){console.error(rl)}}return z(),of.exports=I0(),of.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function lm(){if(bd)return xn;bd=1;var z=$0(),rl=sf(),k=P0();function h(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function F(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function ml(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function Ul(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function O(l){if(F(l)!==l)throw Error(h(188))}function E(l){var t=l.alternate;if(!t){if(t=F(l),t===null)throw Error(h(188));return t!==l?null:l}for(var e=l,a=t;;){var n=e.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===e)return O(n),l;if(u===a)return O(n),t;u=u.sibling}throw Error(h(188))}if(e.return!==a.return)e=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i)throw Error(h(189))}}if(e.alternate!==a)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?l:t}function $(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=$(l),t!==null)return t;l=l.sibling}return null}var B=Object.assign,ol=Symbol.for("react.element"),Fl=Symbol.for("react.transitional.element"),Hl=Symbol.for("react.portal"),Bl=Symbol.for("react.fragment"),Ct=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),Ft=Symbol.for("react.consumer"),Ol=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Yl=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),je=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function jl(l){return l===null||typeof l!="object"?null:(l=Tt&&l[Tt]||l["@@iterator"],typeof l=="function"?l:null)}var xe=Symbol.for("react.client.reference");function Mt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===xe?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Bl:return"Fragment";case Wl:return"Profiler";case Ct:return"StrictMode";case bt:return"Suspense";case Ll:return"SuspenseList";case Et:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case Hl:return"Portal";case Ol:return l.displayName||"Context";case Ft:return(l._context.displayName||"Context")+".Consumer";case it:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case Z:return t=l.displayName||null,t!==null?t:Mt(l.type)||"Memo";case Yl:t=l._payload,l=l._init;try{return Mt(l(t))}catch{}}return null}var vt=Array.isArray,S=rl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},tl=[],ul=-1;function s(l){return{current:l}}function b(l){0>ul||(l.current=tl[ul],tl[ul]=null,ul--)}function A(l,t){ul++,tl[ul]=l.current,l.current=t}var D=s(null),G=s(null),Y=s(null),I=s(null);function Nl(l,t){switch(A(Y,t),A(G,l),A(D,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Gr(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Gr(t),l=Hr(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}b(D),A(D,l)}function hl(){b(D),b(G),b(Y)}function _a(l){l.memoizedState!==null&&A(I,l);var t=D.current,e=Hr(t,l.type);t!==e&&(A(G,l),A(D,e))}function bn(l){G.current===l&&(b(D),b(G)),I.current===l&&(b(I),hn._currentValue=N)}var Yu,rf;function be(l){if(Yu===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Yu=t&&t[1]||"",rf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yu+l+rf}var ju=!1;function Xu(l,t){if(!l||ju)return"";ju=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(g){var m=g}Reflect.construct(l,[],x)}else{try{x.call()}catch(g){m=g}l.call(x.prototype)}}else{try{throw Error()}catch(g){m=g}(x=l())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),y=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===y.length)for(a=f.length-1,n=y.length-1;1<=a&&0<=n&&f[a]!==y[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==y[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==y[n]){var v=`
`+f[a].replace(" at new "," at ");return l.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",l.displayName)),v}while(1<=a&&0<=n);break}}}finally{ju=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?be(e):""}function Ad(l,t){switch(l.tag){case 26:case 27:case 5:return be(l.type);case 16:return be("Lazy");case 13:return l.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Xu(l.type,!1);case 11:return Xu(l.type.render,!1);case 1:return Xu(l.type,!0);case 31:return be("Activity");default:return""}}function df(l){try{var t="",e=null;do t+=Ad(l,e),e=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Qu=Object.prototype.hasOwnProperty,Vu=z.unstable_scheduleCallback,Zu=z.unstable_cancelCallback,_d=z.unstable_shouldYield,zd=z.unstable_requestPaint,kl=z.unstable_now,Dd=z.unstable_getCurrentPriorityLevel,yf=z.unstable_ImmediatePriority,mf=z.unstable_UserBlockingPriority,En=z.unstable_NormalPriority,Cd=z.unstable_LowPriority,hf=z.unstable_IdlePriority,Md=z.log,Od=z.unstable_setDisableYieldValue,za=null,$l=null;function Wt(l){if(typeof Md=="function"&&Od(l),$l&&typeof $l.setStrictMode=="function")try{$l.setStrictMode(za,l)}catch{}}var Il=Math.clz32?Math.clz32:Bd,Rd=Math.log,Ud=Math.LN2;function Bd(l){return l>>>=0,l===0?32:31-(Rd(l)/Ud|0)|0}var Tn=256,An=262144,_n=4194304;function Ee(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function zn(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var n=0,u=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Ee(a):(i&=c,i!==0?n=Ee(i):e||(e=c&~l,e!==0&&(n=Ee(e))))):(c=a&~u,c!==0?n=Ee(c):i!==0?n=Ee(i):e||(e=a&~l,e!==0&&(n=Ee(e)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,e=t&-t,u>=e||u===32&&(e&4194048)!==0)?t:n}function Da(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Nd(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gf(){var l=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),l}function Ku(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Ca(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function qd(l,t,e,a,n,u){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var c=l.entanglements,f=l.expirationTimes,y=l.hiddenUpdates;for(e=i&~e;0<e;){var v=31-Il(e),x=1<<v;c[v]=0,f[v]=-1;var m=y[v];if(m!==null)for(y[v]=null,v=0;v<m.length;v++){var g=m[v];g!==null&&(g.lane&=-536870913)}e&=~x}a!==0&&vf(l,a,0),u!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=u&~(i&~t))}function vf(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-Il(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&261930}function Sf(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-Il(e),n=1<<a;n&t|l[a]&t&&(l[a]|=t),e&=~n}}function pf(l,t){var e=t&-t;return e=(e&42)!==0?1:wu(e),(e&(l.suspendedLanes|t))!==0?0:e}function wu(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ju(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function xf(){var l=T.p;return l!==0?l:(l=window.event,l===void 0?32:id(l.type))}function bf(l,t){var e=T.p;try{return T.p=l,t()}finally{T.p=e}}var kt=Math.random().toString(36).slice(2),_l="__reactFiber$"+kt,Xl="__reactProps$"+kt,Xe="__reactContainer$"+kt,Fu="__reactEvents$"+kt,Gd="__reactListeners$"+kt,Hd="__reactHandles$"+kt,Ef="__reactResources$"+kt,Ma="__reactMarker$"+kt;function Wu(l){delete l[_l],delete l[Xl],delete l[Fu],delete l[Gd],delete l[Hd]}function Qe(l){var t=l[_l];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Xe]||e[_l]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=Zr(l);l!==null;){if(e=l[_l])return e;l=Zr(l)}return t}l=e,e=l.parentNode}return null}function Ve(l){if(l=l[_l]||l[Xe]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Oa(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(h(33))}function Ze(l){var t=l[Ef];return t||(t=l[Ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Tl(l){l[Ma]=!0}var Tf=new Set,Af={};function Te(l,t){Ke(l,t),Ke(l+"Capture",t)}function Ke(l,t){for(Af[l]=t,l=0;l<t.length;l++)Tf.add(t[l])}var Ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_f={},zf={};function Yd(l){return Qu.call(zf,l)?!0:Qu.call(_f,l)?!1:Ld.test(l)?zf[l]=!0:(_f[l]=!0,!1)}function Dn(l,t,e){if(Yd(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function Cn(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function Ot(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}function ct(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Df(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(l,t,e){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){e=""+i,u.call(this,i)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ku(l){if(!l._valueTracker){var t=Df(l)?"checked":"value";l._valueTracker=jd(l,t,""+l[t])}}function Cf(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=Df(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function Mn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Xd=/[\n"\\]/g;function ft(l){return l.replace(Xd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $u(l,t,e,a,n,u,i,c){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+ct(t)):l.value!==""+ct(t)&&(l.value=""+ct(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?Iu(l,i,ct(t)):e!=null?Iu(l,i,ct(e)):a!=null&&l.removeAttribute("value"),n==null&&u!=null&&(l.defaultChecked=!!u),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+ct(c):l.removeAttribute("name")}function Mf(l,t,e,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.type=u),t!=null||e!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ku(l);return}e=e!=null?""+ct(e):"",t=t!=null?""+ct(t):e,c||t===l.value||(l.value=t),l.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),ku(l)}function Iu(l,t,e){t==="number"&&Mn(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function we(l,t,e,a){if(l=l.options,t){t={};for(var n=0;n<e.length;n++)t["$"+e[n]]=!0;for(e=0;e<l.length;e++)n=t.hasOwnProperty("$"+l[e].value),l[e].selected!==n&&(l[e].selected=n),n&&a&&(l[e].defaultSelected=!0)}else{for(e=""+ct(e),t=null,n=0;n<l.length;n++){if(l[n].value===e){l[n].selected=!0,a&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Of(l,t,e){if(t!=null&&(t=""+ct(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+ct(e):""}function Rf(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(h(92));if(vt(a)){if(1<a.length)throw Error(h(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=ct(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a),ku(l)}function Je(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uf(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||Qd.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Bf(l,t,e){if(t!=null&&typeof t!="object")throw Error(h(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&e[n]!==a&&Uf(l,n,a)}else for(var u in t)t.hasOwnProperty(u)&&Uf(l,u,t[u])}function Pu(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(l){return Zd.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Rt(){}var li=null;function ti(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fe=null,We=null;function Nf(l){var t=Ve(l);if(t&&(l=t.stateNode)){var e=l[Xl]||null;l:switch(l=t.stateNode,t.type){case"input":if($u(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var n=a[Xl]||null;if(!n)throw Error(h(90));$u(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&Cf(a)}break l;case"textarea":Of(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&we(l,!!e.multiple,t,!1)}}}var ei=!1;function qf(l,t,e){if(ei)return l(t,e);ei=!0;try{var a=l(t);return a}finally{if(ei=!1,(Fe!==null||We!==null)&&(vu(),Fe&&(t=Fe,l=We,We=Fe=null,Nf(t),l)))for(t=0;t<l.length;t++)Nf(l[t])}}function Ra(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Xl]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(h(231,t,typeof e));return e}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(Ut)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){ai=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{ai=!1}var $t=null,ni=null,Rn=null;function Gf(){if(Rn)return Rn;var l,t=ni,e=t.length,a,n="value"in $t?$t.value:$t.textContent,u=n.length;for(l=0;l<e&&t[l]===n[l];l++);var i=e-l;for(a=1;a<=i&&t[e-a]===n[u-a];a++);return Rn=n.slice(l,1<a?1-a:void 0)}function Un(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Bn(){return!0}function Hf(){return!1}function Ql(l){function t(e,a,n,u,i){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(e=l[c],this[c]=e?e(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bn:Hf,this.isPropagationStopped=Hf,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Ae={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=Ql(Ae),Ba=B({},Ae,{view:0,detail:0}),Kd=Ql(Ba),ui,ii,Na,qn=B({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Na&&(Na&&l.type==="mousemove"?(ui=l.screenX-Na.screenX,ii=l.screenY-Na.screenY):ii=ui=0,Na=l),ui)},movementY:function(l){return"movementY"in l?l.movementY:ii}}),Lf=Ql(qn),wd=B({},qn,{dataTransfer:0}),Jd=Ql(wd),Fd=B({},Ba,{relatedTarget:0}),ci=Ql(Fd),Wd=B({},Ae,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Ql(Wd),$d=B({},Ae,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Id=Ql($d),Pd=B({},Ae,{data:0}),Yf=Ql(Pd),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=ey[l])?!!t[l]:!1}function fi(){return ay}var ny=B({},Ba,{key:function(l){if(l.key){var t=ly[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Un(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?ty[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(l){return l.type==="keypress"?Un(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Un(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),uy=Ql(ny),iy=B({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=Ql(iy),cy=B({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fy=Ql(cy),oy=B({},Ae,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Ql(oy),ry=B({},qn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Ql(ry),yy=B({},Ae,{newState:0,oldState:0}),my=Ql(yy),hy=[9,13,27,32],oi=Ut&&"CompositionEvent"in window,qa=null;Ut&&"documentMode"in document&&(qa=document.documentMode);var gy=Ut&&"TextEvent"in window&&!qa,Xf=Ut&&(!oi||qa&&8<qa&&11>=qa),Qf=" ",Vf=!1;function Zf(l,t){switch(l){case"keyup":return hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var ke=!1;function vy(l,t){switch(l){case"compositionend":return Kf(t);case"keypress":return t.which!==32?null:(Vf=!0,Qf);case"textInput":return l=t.data,l===Qf&&Vf?null:l;default:return null}}function Sy(l,t){if(ke)return l==="compositionend"||!oi&&Zf(l,t)?(l=Gf(),Rn=ni=$t=null,ke=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!py[l.type]:t==="textarea"}function Jf(l,t,e,a){Fe?We?We.push(a):We=[a]:Fe=a,t=Au(t,"onChange"),0<t.length&&(e=new Nn("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var Ga=null,Ha=null;function xy(l){Or(l,0)}function Gn(l){var t=Oa(l);if(Cf(t))return l}function Ff(l,t){if(l==="change")return t}var Wf=!1;if(Ut){var si;if(Ut){var ri="oninput"in document;if(!ri){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),ri=typeof kf.oninput=="function"}si=ri}else si=!1;Wf=si&&(!document.documentMode||9<document.documentMode)}function $f(){Ga&&(Ga.detachEvent("onpropertychange",If),Ha=Ga=null)}function If(l){if(l.propertyName==="value"&&Gn(Ha)){var t=[];Jf(t,Ha,l,ti(l)),qf(xy,t)}}function by(l,t,e){l==="focusin"?($f(),Ga=t,Ha=e,Ga.attachEvent("onpropertychange",If)):l==="focusout"&&$f()}function Ey(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Gn(Ha)}function Ty(l,t){if(l==="click")return Gn(t)}function Ay(l,t){if(l==="input"||l==="change")return Gn(t)}function _y(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var Pl=typeof Object.is=="function"?Object.is:_y;function La(l,t){if(Pl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Qu.call(t,n)||!Pl(l[n],t[n]))return!1}return!0}function Pf(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function lo(l,t){var e=Pf(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=Pf(e)}}function to(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?to(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function eo(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Mn(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=Mn(l.document)}return t}function di(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var zy=Ut&&"documentMode"in document&&11>=document.documentMode,$e=null,yi=null,Ya=null,mi=!1;function ao(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;mi||$e==null||$e!==Mn(a)||(a=$e,"selectionStart"in a&&di(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ya&&La(Ya,a)||(Ya=a,a=Au(yi,"onSelect"),0<a.length&&(t=new Nn("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=$e)))}function _e(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var Ie={animationend:_e("Animation","AnimationEnd"),animationiteration:_e("Animation","AnimationIteration"),animationstart:_e("Animation","AnimationStart"),transitionrun:_e("Transition","TransitionRun"),transitionstart:_e("Transition","TransitionStart"),transitioncancel:_e("Transition","TransitionCancel"),transitionend:_e("Transition","TransitionEnd")},hi={},no={};Ut&&(no=document.createElement("div").style,"AnimationEvent"in window||(delete Ie.animationend.animation,delete Ie.animationiteration.animation,delete Ie.animationstart.animation),"TransitionEvent"in window||delete Ie.transitionend.transition);function ze(l){if(hi[l])return hi[l];if(!Ie[l])return l;var t=Ie[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in no)return hi[l]=t[e];return l}var uo=ze("animationend"),io=ze("animationiteration"),co=ze("animationstart"),Dy=ze("transitionrun"),Cy=ze("transitionstart"),My=ze("transitioncancel"),fo=ze("transitionend"),oo=new Map,gi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gi.push("scrollEnd");function St(l,t){oo.set(l,t),Te(t,[l])}var Hn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ot=[],Pe=0,vi=0;function Ln(){for(var l=Pe,t=vi=Pe=0;t<l;){var e=ot[t];ot[t++]=null;var a=ot[t];ot[t++]=null;var n=ot[t];ot[t++]=null;var u=ot[t];if(ot[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&so(e,n,u)}}function Yn(l,t,e,a){ot[Pe++]=l,ot[Pe++]=t,ot[Pe++]=e,ot[Pe++]=a,vi|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function Si(l,t,e,a){return Yn(l,t,e,a),jn(l)}function De(l,t){return Yn(l,null,null,t),jn(l)}function so(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var n=!1,u=l.return;u!==null;)u.childLanes|=e,a=u.alternate,a!==null&&(a.childLanes|=e),u.tag===22&&(l=u.stateNode,l===null||l._visibility&1||(n=!0)),l=u,u=u.return;return l.tag===3?(u=l.stateNode,n&&t!==null&&(n=31-Il(e),l=u.hiddenUpdates,a=l[n],a===null?l[n]=[t]:a.push(t),t.lane=e|536870912),u):null}function jn(l){if(50<fn)throw fn=0,Dc=null,Error(h(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var la={};function Oy(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(l,t,e,a){return new Oy(l,t,e,a)}function pi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Bt(l,t){var e=l.alternate;return e===null?(e=lt(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function ro(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Xn(l,t,e,a,n,u){var i=0;if(a=l,typeof l=="function")pi(l)&&(i=1);else if(typeof l=="string")i=q0(l,e,D.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Et:return l=lt(31,e,t,n),l.elementType=Et,l.lanes=u,l;case Bl:return Ce(e.children,n,u,t);case Ct:i=8,n|=24;break;case Wl:return l=lt(12,e,t,n|2),l.elementType=Wl,l.lanes=u,l;case bt:return l=lt(13,e,t,n),l.elementType=bt,l.lanes=u,l;case Ll:return l=lt(19,e,t,n),l.elementType=Ll,l.lanes=u,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Ol:i=10;break l;case Ft:i=9;break l;case it:i=11;break l;case Z:i=14;break l;case Yl:i=16,a=null;break l}i=29,e=Error(h(130,l===null?"null":typeof l,"")),a=null}return t=lt(i,e,t,n),t.elementType=l,t.type=a,t.lanes=u,t}function Ce(l,t,e,a){return l=lt(7,l,a,t),l.lanes=e,l}function xi(l,t,e){return l=lt(6,l,null,t),l.lanes=e,l}function yo(l){var t=lt(18,null,null,0);return t.stateNode=l,t}function bi(l,t,e){return t=lt(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var mo=new WeakMap;function st(l,t){if(typeof l=="object"&&l!==null){var e=mo.get(l);return e!==void 0?e:(t={value:l,source:t,stack:df(t)},mo.set(l,t),t)}return{value:l,source:t,stack:df(t)}}var ta=[],ea=0,Qn=null,ja=0,rt=[],dt=0,It=null,At=1,_t="";function Nt(l,t){ta[ea++]=ja,ta[ea++]=Qn,Qn=l,ja=t}function ho(l,t,e){rt[dt++]=At,rt[dt++]=_t,rt[dt++]=It,It=l;var a=At;l=_t;var n=32-Il(a)-1;a&=~(1<<n),e+=1;var u=32-Il(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,At=1<<32-Il(t)+n|e<<n|a,_t=u+l}else At=1<<u|e<<n|a,_t=l}function Ei(l){l.return!==null&&(Nt(l,1),ho(l,1,0))}function Ti(l){for(;l===Qn;)Qn=ta[--ea],ta[ea]=null,ja=ta[--ea],ta[ea]=null;for(;l===It;)It=rt[--dt],rt[dt]=null,_t=rt[--dt],rt[dt]=null,At=rt[--dt],rt[dt]=null}function go(l,t){rt[dt++]=At,rt[dt++]=_t,rt[dt++]=It,At=t.id,_t=t.overflow,It=l}var zl=null,cl=null,K=!1,Pt=null,yt=!1,Ai=Error(h(519));function le(l){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xa(st(t,l)),Ai}function vo(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[_l]=l,t[Xl]=a,e){case"dialog":X("cancel",t),X("close",t);break;case"iframe":case"object":case"embed":X("load",t);break;case"video":case"audio":for(e=0;e<sn.length;e++)X(sn[e],t);break;case"source":X("error",t);break;case"img":case"image":case"link":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"input":X("invalid",t),Mf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":X("invalid",t);break;case"textarea":X("invalid",t),Rf(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||Nr(t.textContent,e)?(a.popover!=null&&(X("beforetoggle",t),X("toggle",t)),a.onScroll!=null&&X("scroll",t),a.onScrollEnd!=null&&X("scrollend",t),a.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||le(l,!0)}function So(l){for(zl=l.return;zl;)switch(zl.tag){case 5:case 31:case 13:yt=!1;return;case 27:case 3:yt=!0;return;default:zl=zl.return}}function aa(l){if(l!==zl)return!1;if(!K)return So(l),K=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Qc(l.type,l.memoizedProps)),e=!e),e&&cl&&le(l),So(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));cl=Vr(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));cl=Vr(l)}else t===27?(t=cl,me(l.type)?(l=Jc,Jc=null,cl=l):cl=t):cl=zl?ht(l.stateNode.nextSibling):null;return!0}function Me(){cl=zl=null,K=!1}function _i(){var l=Pt;return l!==null&&(wl===null?wl=l:wl.push.apply(wl,l),Pt=null),l}function Xa(l){Pt===null?Pt=[l]:Pt.push(l)}var zi=s(null),Oe=null,qt=null;function te(l,t,e){A(zi,t._currentValue),t._currentValue=e}function Gt(l){l._currentValue=zi.current,b(zi)}function Di(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Ci(l,t,e,a){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;l:for(;u!==null;){var c=u;u=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){u.lanes|=e,c=u.alternate,c!==null&&(c.lanes|=e),Di(u.return,e,l),a||(i=null);break l}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(h(341));i.lanes|=e,u=i.alternate,u!==null&&(u.lanes|=e),Di(i,e,l),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===l){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function na(l,t,e,a){l=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(h(387));if(i=i.memoizedProps,i!==null){var c=n.type;Pl(n.pendingProps.value,i.value)||(l!==null?l.push(c):l=[c])}}else if(n===I.current){if(i=n.alternate,i===null)throw Error(h(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(hn):l=[hn])}n=n.return}l!==null&&Ci(t,l,e,a),t.flags|=262144}function Vn(l){for(l=l.firstContext;l!==null;){if(!Pl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Re(l){Oe=l,qt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Dl(l){return po(Oe,l)}function Zn(l,t){return Oe===null&&Re(l),po(l,t)}function po(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},qt===null){if(l===null)throw Error(h(308));qt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else qt=qt.next=t;return e}var Ry=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},Uy=z.unstable_scheduleCallback,By=z.unstable_NormalPriority,Sl={$$typeof:Ol,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mi(){return{controller:new Ry,data:new Map,refCount:0}}function Qa(l){l.refCount--,l.refCount===0&&Uy(By,function(){l.controller.abort()})}var Va=null,Oi=0,ua=0,ia=null;function Ny(l,t){if(Va===null){var e=Va=[];Oi=0,ua=Bc(),ia={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Oi++,t.then(xo,xo),t}function xo(){if(--Oi===0&&Va!==null){ia!==null&&(ia.status="fulfilled");var l=Va;Va=null,ua=0,ia=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function qy(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<e.length;n++)(0,e[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var bo=S.S;S.S=function(l,t){nr=kl(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ny(l,t),bo!==null&&bo(l,t)};var Ue=s(null);function Ri(){var l=Ue.current;return l!==null?l:il.pooledCache}function Kn(l,t){t===null?A(Ue,Ue.current):A(Ue,t.pool)}function Eo(){var l=Ri();return l===null?null:{parent:Sl._currentValue,pool:l}}var ca=Error(h(460)),Ui=Error(h(474)),wn=Error(h(542)),Jn={then:function(){}};function To(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Ao(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Rt,Rt),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,zo(l),l;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(l=il,l!==null&&100<l.shellSuspendCounter)throw Error(h(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,zo(l),l}throw Ne=t,ca}}function Be(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ne=e,ca):e}}var Ne=null;function _o(){if(Ne===null)throw Error(h(459));var l=Ne;return Ne=null,l}function zo(l){if(l===ca||l===wn)throw Error(h(483))}var fa=null,Za=0;function Fn(l){var t=Za;return Za+=1,fa===null&&(fa=[]),Ao(fa,l,t)}function Ka(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Wn(l,t){throw t.$$typeof===ol?Error(h(525)):(l=Object.prototype.toString.call(t),Error(h(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function Do(l){function t(r,o){if(l){var d=r.deletions;d===null?(r.deletions=[o],r.flags|=16):d.push(o)}}function e(r,o){if(!l)return null;for(;o!==null;)t(r,o),o=o.sibling;return null}function a(r){for(var o=new Map;r!==null;)r.key!==null?o.set(r.key,r):o.set(r.index,r),r=r.sibling;return o}function n(r,o){return r=Bt(r,o),r.index=0,r.sibling=null,r}function u(r,o,d){return r.index=d,l?(d=r.alternate,d!==null?(d=d.index,d<o?(r.flags|=67108866,o):d):(r.flags|=67108866,o)):(r.flags|=1048576,o)}function i(r){return l&&r.alternate===null&&(r.flags|=67108866),r}function c(r,o,d,p){return o===null||o.tag!==6?(o=xi(d,r.mode,p),o.return=r,o):(o=n(o,d),o.return=r,o)}function f(r,o,d,p){var M=d.type;return M===Bl?v(r,o,d.props.children,p,d.key):o!==null&&(o.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yl&&Be(M)===o.type)?(o=n(o,d.props),Ka(o,d),o.return=r,o):(o=Xn(d.type,d.key,d.props,null,r.mode,p),Ka(o,d),o.return=r,o)}function y(r,o,d,p){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=bi(d,r.mode,p),o.return=r,o):(o=n(o,d.children||[]),o.return=r,o)}function v(r,o,d,p,M){return o===null||o.tag!==7?(o=Ce(d,r.mode,p,M),o.return=r,o):(o=n(o,d),o.return=r,o)}function x(r,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=xi(""+o,r.mode,d),o.return=r,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Fl:return d=Xn(o.type,o.key,o.props,null,r.mode,d),Ka(d,o),d.return=r,d;case Hl:return o=bi(o,r.mode,d),o.return=r,o;case Yl:return o=Be(o),x(r,o,d)}if(vt(o)||jl(o))return o=Ce(o,r.mode,d,null),o.return=r,o;if(typeof o.then=="function")return x(r,Fn(o),d);if(o.$$typeof===Ol)return x(r,Zn(r,o),d);Wn(r,o)}return null}function m(r,o,d,p){var M=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return M!==null?null:c(r,o,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fl:return d.key===M?f(r,o,d,p):null;case Hl:return d.key===M?y(r,o,d,p):null;case Yl:return d=Be(d),m(r,o,d,p)}if(vt(d)||jl(d))return M!==null?null:v(r,o,d,p,null);if(typeof d.then=="function")return m(r,o,Fn(d),p);if(d.$$typeof===Ol)return m(r,o,Zn(r,d),p);Wn(r,d)}return null}function g(r,o,d,p,M){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return r=r.get(d)||null,c(o,r,""+p,M);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fl:return r=r.get(p.key===null?d:p.key)||null,f(o,r,p,M);case Hl:return r=r.get(p.key===null?d:p.key)||null,y(o,r,p,M);case Yl:return p=Be(p),g(r,o,d,p,M)}if(vt(p)||jl(p))return r=r.get(d)||null,v(o,r,p,M,null);if(typeof p.then=="function")return g(r,o,d,Fn(p),M);if(p.$$typeof===Ol)return g(r,o,d,Zn(o,p),M);Wn(o,p)}return null}function _(r,o,d,p){for(var M=null,w=null,C=o,L=o=0,V=null;C!==null&&L<d.length;L++){C.index>L?(V=C,C=null):V=C.sibling;var J=m(r,C,d[L],p);if(J===null){C===null&&(C=V);break}l&&C&&J.alternate===null&&t(r,C),o=u(J,o,L),w===null?M=J:w.sibling=J,w=J,C=V}if(L===d.length)return e(r,C),K&&Nt(r,L),M;if(C===null){for(;L<d.length;L++)C=x(r,d[L],p),C!==null&&(o=u(C,o,L),w===null?M=C:w.sibling=C,w=C);return K&&Nt(r,L),M}for(C=a(C);L<d.length;L++)V=g(C,r,L,d[L],p),V!==null&&(l&&V.alternate!==null&&C.delete(V.key===null?L:V.key),o=u(V,o,L),w===null?M=V:w.sibling=V,w=V);return l&&C.forEach(function(pe){return t(r,pe)}),K&&Nt(r,L),M}function R(r,o,d,p){if(d==null)throw Error(h(151));for(var M=null,w=null,C=o,L=o=0,V=null,J=d.next();C!==null&&!J.done;L++,J=d.next()){C.index>L?(V=C,C=null):V=C.sibling;var pe=m(r,C,J.value,p);if(pe===null){C===null&&(C=V);break}l&&C&&pe.alternate===null&&t(r,C),o=u(pe,o,L),w===null?M=pe:w.sibling=pe,w=pe,C=V}if(J.done)return e(r,C),K&&Nt(r,L),M;if(C===null){for(;!J.done;L++,J=d.next())J=x(r,J.value,p),J!==null&&(o=u(J,o,L),w===null?M=J:w.sibling=J,w=J);return K&&Nt(r,L),M}for(C=a(C);!J.done;L++,J=d.next())J=g(C,r,L,J.value,p),J!==null&&(l&&J.alternate!==null&&C.delete(J.key===null?L:J.key),o=u(J,o,L),w===null?M=J:w.sibling=J,w=J);return l&&C.forEach(function(w0){return t(r,w0)}),K&&Nt(r,L),M}function nl(r,o,d,p){if(typeof d=="object"&&d!==null&&d.type===Bl&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Fl:l:{for(var M=d.key;o!==null;){if(o.key===M){if(M=d.type,M===Bl){if(o.tag===7){e(r,o.sibling),p=n(o,d.props.children),p.return=r,r=p;break l}}else if(o.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yl&&Be(M)===o.type){e(r,o.sibling),p=n(o,d.props),Ka(p,d),p.return=r,r=p;break l}e(r,o);break}else t(r,o);o=o.sibling}d.type===Bl?(p=Ce(d.props.children,r.mode,p,d.key),p.return=r,r=p):(p=Xn(d.type,d.key,d.props,null,r.mode,p),Ka(p,d),p.return=r,r=p)}return i(r);case Hl:l:{for(M=d.key;o!==null;){if(o.key===M)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){e(r,o.sibling),p=n(o,d.children||[]),p.return=r,r=p;break l}else{e(r,o);break}else t(r,o);o=o.sibling}p=bi(d,r.mode,p),p.return=r,r=p}return i(r);case Yl:return d=Be(d),nl(r,o,d,p)}if(vt(d))return _(r,o,d,p);if(jl(d)){if(M=jl(d),typeof M!="function")throw Error(h(150));return d=M.call(d),R(r,o,d,p)}if(typeof d.then=="function")return nl(r,o,Fn(d),p);if(d.$$typeof===Ol)return nl(r,o,Zn(r,d),p);Wn(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(e(r,o.sibling),p=n(o,d),p.return=r,r=p):(e(r,o),p=xi(d,r.mode,p),p.return=r,r=p),i(r)):e(r,o)}return function(r,o,d,p){try{Za=0;var M=nl(r,o,d,p);return fa=null,M}catch(C){if(C===ca||C===wn)throw C;var w=lt(29,C,null,r.mode);return w.lanes=p,w.return=r,w}finally{}}}var qe=Do(!0),Co=Do(!1),ee=!1;function Bi(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ni(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ae(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function ne(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(W&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=jn(l),so(l,null,e),t}return Yn(l,a,t,e),jn(l)}function wa(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Sf(l,e)}}function qi(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,u=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,e=e.next}while(e!==null);u===null?n=u=t:u=u.next=t}else n=u=t;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Gi=!1;function Ja(){if(Gi){var l=ia;if(l!==null)throw l}}function Fa(l,t,e,a){Gi=!1;var n=l.updateQueue;ee=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,y=f.next;f.next=null,i===null?u=y:i.next=y,i=f;var v=l.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==i&&(c===null?v.firstBaseUpdate=y:c.next=y,v.lastBaseUpdate=f))}if(u!==null){var x=n.baseState;i=0,v=y=f=null,c=u;do{var m=c.lane&-536870913,g=m!==c.lane;if(g?(Q&m)===m:(a&m)===m){m!==0&&m===ua&&(Gi=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var _=l,R=c;m=t;var nl=e;switch(R.tag){case 1:if(_=R.payload,typeof _=="function"){x=_.call(nl,x,m);break l}x=_;break l;case 3:_.flags=_.flags&-65537|128;case 0:if(_=R.payload,m=typeof _=="function"?_.call(nl,x,m):_,m==null)break l;x=B({},x,m);break l;case 2:ee=!0}}m=c.callback,m!==null&&(l.flags|=64,g&&(l.flags|=8192),g=n.callbacks,g===null?n.callbacks=[m]:g.push(m))}else g={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(y=v=g,f=x):v=v.next=g,i|=m;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);v===null&&(f=x),n.baseState=f,n.firstBaseUpdate=y,n.lastBaseUpdate=v,u===null&&(n.shared.lanes=0),oe|=i,l.lanes=i,l.memoizedState=x}}function Mo(l,t){if(typeof l!="function")throw Error(h(191,l));l.call(t)}function Oo(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)Mo(e[l],t)}var oa=s(null),kn=s(0);function Ro(l,t){l=Kt,A(kn,l),A(oa,t),Kt=l|t.baseLanes}function Hi(){A(kn,Kt),A(oa,oa.current)}function Li(){Kt=kn.current,b(oa),b(kn)}var tt=s(null),mt=null;function ue(l){var t=l.alternate;A(gl,gl.current&1),A(tt,l),mt===null&&(t===null||oa.current!==null||t.memoizedState!==null)&&(mt=l)}function Yi(l){A(gl,gl.current),A(tt,l),mt===null&&(mt=l)}function Uo(l){l.tag===22?(A(gl,gl.current),A(tt,l),mt===null&&(mt=l)):ie()}function ie(){A(gl,gl.current),A(tt,tt.current)}function et(l){b(tt),mt===l&&(mt=null),b(gl)}var gl=s(0);function $n(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Kc(e)||wc(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,H=null,el=null,pl=null,In=!1,sa=!1,Ge=!1,Pn=0,Wa=0,ra=null,Gy=0;function dl(){throw Error(h(321))}function ji(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!Pl(l[e],t[e]))return!1;return!0}function Xi(l,t,e,a,n,u){return Ht=u,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?hs:ec,Ge=!1,u=e(a,n),Ge=!1,sa&&(u=No(t,e,a,n)),Bo(l),u}function Bo(l){S.H=Ia;var t=el!==null&&el.next!==null;if(Ht=0,pl=el=H=null,In=!1,Wa=0,ra=null,t)throw Error(h(300));l===null||xl||(l=l.dependencies,l!==null&&Vn(l)&&(xl=!0))}function No(l,t,e,a){H=l;var n=0;do{if(sa&&(ra=null),Wa=0,sa=!1,25<=n)throw Error(h(301));if(n+=1,pl=el=null,l.updateQueue!=null){var u=l.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=gs,u=t(e,a)}while(sa);return u}function Hy(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?ka(t):t,l=l.useState()[0],(el!==null?el.memoizedState:null)!==l&&(H.flags|=1024),t}function Qi(){var l=Pn!==0;return Pn=0,l}function Vi(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function Zi(l){if(In){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}In=!1}Ht=0,pl=el=H=null,sa=!1,Wa=Pn=0,ra=null}function ql(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pl===null?H.memoizedState=pl=l:pl=pl.next=l,pl}function vl(){if(el===null){var l=H.alternate;l=l!==null?l.memoizedState:null}else l=el.next;var t=pl===null?H.memoizedState:pl.next;if(t!==null)pl=t,el=l;else{if(l===null)throw H.alternate===null?Error(h(467)):Error(h(310));el=l,l={memoizedState:el.memoizedState,baseState:el.baseState,baseQueue:el.baseQueue,queue:el.queue,next:null},pl===null?H.memoizedState=pl=l:pl=pl.next=l}return pl}function lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ka(l){var t=Wa;return Wa+=1,ra===null&&(ra=[]),l=Ao(ra,l,t),t=H,(pl===null?t.memoizedState:pl.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?hs:ec),l}function tu(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return ka(l);if(l.$$typeof===Ol)return Dl(l)}throw Error(h(438,String(l)))}function Ki(l){var t=null,e=H.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=H.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=lu(),H.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=je;return t.index++,e}function Lt(l,t){return typeof t=="function"?t(l):t}function eu(l){var t=vl();return wi(t,el,l)}function wi(l,t,e){var a=l.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var n=l.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=l.baseState,n===null)l.memoizedState=u;else{t=n.next;var c=i=null,f=null,y=t,v=!1;do{var x=y.lane&-536870913;if(x!==y.lane?(Q&x)===x:(Ht&x)===x){var m=y.revertLane;if(m===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),x===ua&&(v=!0);else if((Ht&m)===m){y=y.next,m===ua&&(v=!0);continue}else x={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=x,i=u):f=f.next=x,H.lanes|=m,oe|=m;x=y.action,Ge&&e(u,x),u=y.hasEagerState?y.eagerState:e(u,x)}else m={lane:x,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=m,i=u):f=f.next=m,H.lanes|=x,oe|=x;y=y.next}while(y!==null&&y!==t);if(f===null?i=u:f.next=c,!Pl(u,l.memoizedState)&&(xl=!0,v&&(e=ia,e!==null)))throw e;l.memoizedState=u,l.baseState=i,l.baseQueue=f,a.lastRenderedState=u}return n===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function Ji(l){var t=vl(),e=t.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=l;var a=e.dispatch,n=e.pending,u=t.memoizedState;if(n!==null){e.pending=null;var i=n=n.next;do u=l(u,i.action),i=i.next;while(i!==n);Pl(u,t.memoizedState)||(xl=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),e.lastRenderedState=u}return[u,a]}function qo(l,t,e){var a=H,n=vl(),u=K;if(u){if(e===void 0)throw Error(h(407));e=e()}else e=t();var i=!Pl((el||n).memoizedState,e);if(i&&(n.memoizedState=e,xl=!0),n=n.queue,ki(Lo.bind(null,a,n,l),[l]),n.getSnapshot!==t||i||pl!==null&&pl.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},Ho.bind(null,a,n,e,t),null),il===null)throw Error(h(349));u||(Ht&127)!==0||Go(a,t,e)}return e}function Go(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=H.updateQueue,t===null?(t=lu(),H.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Ho(l,t,e,a){t.value=e,t.getSnapshot=a,Yo(t)&&jo(l)}function Lo(l,t,e){return e(function(){Yo(t)&&jo(l)})}function Yo(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!Pl(l,e)}catch{return!0}}function jo(l){var t=De(l,2);t!==null&&Jl(t,l,2)}function Fi(l){var t=ql();if(typeof l=="function"){var e=l;if(l=e(),Ge){Wt(!0);try{e()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:l},t}function Xo(l,t,e,a){return l.baseState=e,wi(l,el,typeof a=="function"?a:Lt)}function Ly(l,t,e,a,n){if(uu(l))throw Error(h(485));if(l=t.action,l!==null){var u={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?e(!0):u.isTransition=!1,a(u),e=t.pending,e===null?(u.next=t.pending=u,Qo(t,u)):(u.next=e.next,t.pending=e.next=u)}}function Qo(l,t){var e=t.action,a=t.payload,n=l.state;if(t.isTransition){var u=S.T,i={};S.T=i;try{var c=e(n,a),f=S.S;f!==null&&f(i,c),Vo(l,t,c)}catch(y){Wi(l,t,y)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=e(n,a),Vo(l,t,u)}catch(y){Wi(l,t,y)}}function Vo(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Zo(l,t,a)},function(a){return Wi(l,t,a)}):Zo(l,t,e)}function Zo(l,t,e){t.status="fulfilled",t.value=e,Ko(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Qo(l,e)))}function Wi(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,Ko(t),t=t.next;while(t!==a)}l.action=null}function Ko(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function wo(l,t){return t}function Jo(l,t){if(K){var e=il.formState;if(e!==null){l:{var a=H;if(K){if(cl){t:{for(var n=cl,u=yt;n.nodeType!==8;){if(!u){n=null;break t}if(n=ht(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){cl=ht(n.nextSibling),a=n.data==="F!";break l}}le(a)}a=!1}a&&(t=e[0])}}return e=ql(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=a,e=ds.bind(null,H,a),a.dispatch=e,a=Fi(!1),u=tc.bind(null,H,!1,a.queue),a=ql(),n={state:t,dispatch:null,action:l,pending:null},a.queue=n,e=Ly.bind(null,H,n,u,e),n.dispatch=e,a.memoizedState=l,[t,e,!1]}function Fo(l){var t=vl();return Wo(t,el,l)}function Wo(l,t,e){if(t=wi(l,t,wo)[0],l=eu(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ka(t)}catch(i){throw i===ca?wn:i}else a=t;t=vl();var n=t.queue,u=n.dispatch;return e!==t.memoizedState&&(H.flags|=2048,da(9,{destroy:void 0},Yy.bind(null,n,e),null)),[a,u,l]}function Yy(l,t){l.action=t}function ko(l){var t=vl(),e=el;if(e!==null)return Wo(t,e,l);vl(),t=t.memoizedState,e=vl();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function da(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=H.updateQueue,t===null&&(t=lu(),H.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function $o(){return vl().memoizedState}function au(l,t,e,a){var n=ql();H.flags|=l,n.memoizedState=da(1|t,{destroy:void 0},e,a===void 0?null:a)}function nu(l,t,e,a){var n=vl();a=a===void 0?null:a;var u=n.memoizedState.inst;el!==null&&a!==null&&ji(a,el.memoizedState.deps)?n.memoizedState=da(t,u,e,a):(H.flags|=l,n.memoizedState=da(1|t,u,e,a))}function Io(l,t){au(8390656,8,l,t)}function ki(l,t){nu(2048,8,l,t)}function jy(l){H.flags|=4;var t=H.updateQueue;if(t===null)t=lu(),H.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function Po(l){var t=vl().memoizedState;return jy({ref:t,nextImpl:l}),function(){if((W&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function ls(l,t){return nu(4,2,l,t)}function ts(l,t){return nu(4,4,l,t)}function es(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function as(l,t,e){e=e!=null?e.concat([l]):null,nu(4,4,es.bind(null,t,l),e)}function $i(){}function ns(l,t){var e=vl();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&ji(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function us(l,t){var e=vl();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&ji(t,a[1]))return a[0];if(a=l(),Ge){Wt(!0);try{l()}finally{Wt(!1)}}return e.memoizedState=[a,t],a}function Ii(l,t,e){return e===void 0||(Ht&1073741824)!==0&&(Q&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=ir(),H.lanes|=l,oe|=l,e)}function is(l,t,e,a){return Pl(e,t)?e:oa.current!==null?(l=Ii(l,e,a),Pl(l,t)||(xl=!0),l):(Ht&42)===0||(Ht&1073741824)!==0&&(Q&261930)===0?(xl=!0,l.memoizedState=e):(l=ir(),H.lanes|=l,oe|=l,t)}function cs(l,t,e,a,n){var u=T.p;T.p=u!==0&&8>u?u:8;var i=S.T,c={};S.T=c,tc(l,!1,t,e);try{var f=n(),y=S.S;if(y!==null&&y(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var v=qy(f,a);$a(l,t,v,ut(l))}else $a(l,t,a,ut(l))}catch(x){$a(l,t,{then:function(){},status:"rejected",reason:x},ut())}finally{T.p=u,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Xy(){}function Pi(l,t,e,a){if(l.tag!==5)throw Error(h(476));var n=fs(l).queue;cs(l,n,t,N,e===null?Xy:function(){return os(l),e(a)})}function fs(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:N},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function os(l){var t=fs(l);t.next===null&&(t=l.alternate.memoizedState),$a(l,t.next.queue,{},ut())}function lc(){return Dl(hn)}function ss(){return vl().memoizedState}function rs(){return vl().memoizedState}function Qy(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=ut();l=ae(e);var a=ne(t,l,e);a!==null&&(Jl(a,t,e),wa(a,t,e)),t={cache:Mi()},l.payload=t;return}t=t.return}}function Vy(l,t,e){var a=ut();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},uu(l)?ys(t,e):(e=Si(l,t,e,a),e!==null&&(Jl(e,l,a),ms(e,t,a)))}function ds(l,t,e){var a=ut();$a(l,t,e,a)}function $a(l,t,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(uu(l))ys(t,n);else{var u=l.alternate;if(l.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,e);if(n.hasEagerState=!0,n.eagerState=c,Pl(c,i))return Yn(l,t,n,0),il===null&&Ln(),!1}catch{}finally{}if(e=Si(l,t,n,a),e!==null)return Jl(e,l,a),ms(e,t,a),!0}return!1}function tc(l,t,e,a){if(a={lane:2,revertLane:Bc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(l)){if(t)throw Error(h(479))}else t=Si(l,e,a,2),t!==null&&Jl(t,l,2)}function uu(l){var t=l.alternate;return l===H||t!==null&&t===H}function ys(l,t){sa=In=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function ms(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Sf(l,e)}}var Ia={readContext:Dl,use:tu,useCallback:dl,useContext:dl,useEffect:dl,useImperativeHandle:dl,useLayoutEffect:dl,useInsertionEffect:dl,useMemo:dl,useReducer:dl,useRef:dl,useState:dl,useDebugValue:dl,useDeferredValue:dl,useTransition:dl,useSyncExternalStore:dl,useId:dl,useHostTransitionStatus:dl,useFormState:dl,useActionState:dl,useOptimistic:dl,useMemoCache:dl,useCacheRefresh:dl};Ia.useEffectEvent=dl;var hs={readContext:Dl,use:tu,useCallback:function(l,t){return ql().memoizedState=[l,t===void 0?null:t],l},useContext:Dl,useEffect:Io,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,au(4194308,4,es.bind(null,t,l),e)},useLayoutEffect:function(l,t){return au(4194308,4,l,t)},useInsertionEffect:function(l,t){au(4,2,l,t)},useMemo:function(l,t){var e=ql();t=t===void 0?null:t;var a=l();if(Ge){Wt(!0);try{l()}finally{Wt(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=ql();if(e!==void 0){var n=e(t);if(Ge){Wt(!0);try{e(t)}finally{Wt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},a.queue=l,l=l.dispatch=Vy.bind(null,H,l),[a.memoizedState,l]},useRef:function(l){var t=ql();return l={current:l},t.memoizedState=l},useState:function(l){l=Fi(l);var t=l.queue,e=ds.bind(null,H,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:$i,useDeferredValue:function(l,t){var e=ql();return Ii(e,l,t)},useTransition:function(){var l=Fi(!1);return l=cs.bind(null,H,l.queue,!0,!1),ql().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=H,n=ql();if(K){if(e===void 0)throw Error(h(407));e=e()}else{if(e=t(),il===null)throw Error(h(349));(Q&127)!==0||Go(a,t,e)}n.memoizedState=e;var u={value:e,getSnapshot:t};return n.queue=u,Io(Lo.bind(null,a,u,l),[l]),a.flags|=2048,da(9,{destroy:void 0},Ho.bind(null,a,u,e,t),null),e},useId:function(){var l=ql(),t=il.identifierPrefix;if(K){var e=_t,a=At;e=(a&~(1<<32-Il(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=Pn++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Gy++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:lc,useFormState:Jo,useActionState:Jo,useOptimistic:function(l){var t=ql();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=tc.bind(null,H,!0,e),e.dispatch=t,[l,t]},useMemoCache:Ki,useCacheRefresh:function(){return ql().memoizedState=Qy.bind(null,H)},useEffectEvent:function(l){var t=ql(),e={impl:l};return t.memoizedState=e,function(){if((W&2)!==0)throw Error(h(440));return e.impl.apply(void 0,arguments)}}},ec={readContext:Dl,use:tu,useCallback:ns,useContext:Dl,useEffect:ki,useImperativeHandle:as,useInsertionEffect:ls,useLayoutEffect:ts,useMemo:us,useReducer:eu,useRef:$o,useState:function(){return eu(Lt)},useDebugValue:$i,useDeferredValue:function(l,t){var e=vl();return is(e,el.memoizedState,l,t)},useTransition:function(){var l=eu(Lt)[0],t=vl().memoizedState;return[typeof l=="boolean"?l:ka(l),t]},useSyncExternalStore:qo,useId:ss,useHostTransitionStatus:lc,useFormState:Fo,useActionState:Fo,useOptimistic:function(l,t){var e=vl();return Xo(e,el,l,t)},useMemoCache:Ki,useCacheRefresh:rs};ec.useEffectEvent=Po;var gs={readContext:Dl,use:tu,useCallback:ns,useContext:Dl,useEffect:ki,useImperativeHandle:as,useInsertionEffect:ls,useLayoutEffect:ts,useMemo:us,useReducer:Ji,useRef:$o,useState:function(){return Ji(Lt)},useDebugValue:$i,useDeferredValue:function(l,t){var e=vl();return el===null?Ii(e,l,t):is(e,el.memoizedState,l,t)},useTransition:function(){var l=Ji(Lt)[0],t=vl().memoizedState;return[typeof l=="boolean"?l:ka(l),t]},useSyncExternalStore:qo,useId:ss,useHostTransitionStatus:lc,useFormState:ko,useActionState:ko,useOptimistic:function(l,t){var e=vl();return el!==null?Xo(e,el,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:Ki,useCacheRefresh:rs};gs.useEffectEvent=Po;function ac(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:B({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var nc={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=ut(),n=ae(a);n.payload=t,e!=null&&(n.callback=e),t=ne(l,n,a),t!==null&&(Jl(t,l,a),wa(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=ut(),n=ae(a);n.tag=1,n.payload=t,e!=null&&(n.callback=e),t=ne(l,n,a),t!==null&&(Jl(t,l,a),wa(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=ut(),a=ae(e);a.tag=2,t!=null&&(a.callback=t),t=ne(l,a,e),t!==null&&(Jl(t,l,e),wa(t,l,e))}};function vs(l,t,e,a,n,u,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!La(e,a)||!La(n,u):!0}function Ss(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&nc.enqueueReplaceState(t,t.state,null)}function He(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=B({},e));for(var n in l)e[n]===void 0&&(e[n]=l[n])}return e}function ps(l){Hn(l)}function xs(l){console.error(l)}function bs(l){Hn(l)}function iu(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Es(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(l,t,e){return e=ae(e),e.tag=3,e.payload={element:null},e.callback=function(){iu(l,t)},e}function Ts(l){return l=ae(l),l.tag=3,l}function As(l,t,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;l.payload=function(){return n(u)},l.callback=function(){Es(t,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Es(t,e,a),typeof n!="function"&&(se===null?se=new Set([this]):se.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Zy(l,t,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&na(t,e,n,!0),e=tt.current,e!==null){switch(e.tag){case 31:case 13:return mt===null?Su():e.alternate===null&&yl===0&&(yl=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===Jn?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Oc(l,a,n)),!1;case 22:return e.flags|=65536,a===Jn?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Oc(l,a,n)),!1}throw Error(h(435,e.tag))}return Oc(l,a,n),Su(),!1}if(K)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ai&&(l=Error(h(422),{cause:a}),Xa(st(l,e)))):(a!==Ai&&(t=Error(h(423),{cause:a}),Xa(st(t,e))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,a=st(a,e),n=uc(l.stateNode,a,n),qi(l,n),yl!==4&&(yl=2)),!1;var u=Error(h(520),{cause:a});if(u=st(u,e),cn===null?cn=[u]:cn.push(u),yl!==4&&(yl=2),t===null)return!0;a=st(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=n&-n,e.lanes|=l,l=uc(e.stateNode,a,l),qi(e,l),!1;case 1:if(t=e.type,u=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(se===null||!se.has(u))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Ts(n),As(n,l,e,a),qi(e,n),!1}e=e.return}while(e!==null);return!1}var ic=Error(h(461)),xl=!1;function Cl(l,t,e,a){t.child=l===null?Co(t,null,e,a):qe(t,l.child,e,a)}function _s(l,t,e,a,n){e=e.render;var u=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Re(t),a=Xi(l,t,e,i,u,n),c=Qi(),l!==null&&!xl?(Vi(l,t,n),Yt(l,t,n)):(K&&c&&Ei(t),t.flags|=1,Cl(l,t,a,n),t.child)}function zs(l,t,e,a,n){if(l===null){var u=e.type;return typeof u=="function"&&!pi(u)&&u.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=u,Ds(l,t,u,a,n)):(l=Xn(e.type,null,a,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(u=l.child,!mc(l,n)){var i=u.memoizedProps;if(e=e.compare,e=e!==null?e:La,e(i,a)&&l.ref===t.ref)return Yt(l,t,n)}return t.flags|=1,l=Bt(u,a),l.ref=t.ref,l.return=t,t.child=l}function Ds(l,t,e,a,n){if(l!==null){var u=l.memoizedProps;if(La(u,a)&&l.ref===t.ref)if(xl=!1,t.pendingProps=a=u,mc(l,n))(l.flags&131072)!==0&&(xl=!0);else return t.lanes=l.lanes,Yt(l,t,n)}return cc(l,t,e,a,n)}function Cs(l,t,e,a){var n=a.children,u=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|e:e,l!==null){for(a=t.child=l.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return Ms(l,t,u,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Kn(t,u!==null?u.cachePool:null),u!==null?Ro(t,u):Hi(),Uo(t);else return a=t.lanes=536870912,Ms(l,t,u!==null?u.baseLanes|e:e,e,a)}else u!==null?(Kn(t,u.cachePool),Ro(t,u),ie(),t.memoizedState=null):(l!==null&&Kn(t,null),Hi(),ie());return Cl(l,t,n,e),t.child}function Pa(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ms(l,t,e,a,n){var u=Ri();return u=u===null?null:{parent:Sl._currentValue,pool:u},t.memoizedState={baseLanes:e,cachePool:u},l!==null&&Kn(t,null),Hi(),Uo(t),l!==null&&na(l,t,a,!0),t.childLanes=n,null}function cu(l,t){return t=ou({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Os(l,t,e){return qe(t,l.child,null,e),l=cu(t,t.pendingProps),l.flags|=2,et(t),t.memoizedState=null,l}function Ky(l,t,e){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(K){if(a.mode==="hidden")return l=cu(t,a),t.lanes=536870912,Pa(null,l);if(Yi(t),(l=cl)?(l=Qr(l,yt),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:It!==null?{id:At,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},e=yo(l),e.return=t,t.child=e,zl=t,cl=null)):l=null,l===null)throw le(t);return t.lanes=536870912,null}return cu(t,a)}var u=l.memoizedState;if(u!==null){var i=u.dehydrated;if(Yi(t),n)if(t.flags&256)t.flags&=-257,t=Os(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(h(558));else if(xl||na(l,t,e,!1),n=(e&l.childLanes)!==0,xl||n){if(a=il,a!==null&&(i=pf(a,e),i!==0&&i!==u.retryLane))throw u.retryLane=i,De(l,i),Jl(a,l,i),ic;Su(),t=Os(l,t,e)}else l=u.treeContext,cl=ht(i.nextSibling),zl=t,K=!0,Pt=null,yt=!1,l!==null&&go(t,l),t=cu(t,a),t.flags|=4096;return t}return l=Bt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fu(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(h(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function cc(l,t,e,a,n){return Re(t),e=Xi(l,t,e,a,void 0,n),a=Qi(),l!==null&&!xl?(Vi(l,t,n),Yt(l,t,n)):(K&&a&&Ei(t),t.flags|=1,Cl(l,t,e,n),t.child)}function Rs(l,t,e,a,n,u){return Re(t),t.updateQueue=null,e=No(t,a,e,n),Bo(l),a=Qi(),l!==null&&!xl?(Vi(l,t,u),Yt(l,t,u)):(K&&a&&Ei(t),t.flags|=1,Cl(l,t,e,u),t.child)}function Us(l,t,e,a,n){if(Re(t),t.stateNode===null){var u=la,i=e.contextType;typeof i=="object"&&i!==null&&(u=Dl(i)),u=new e(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=nc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},Bi(t),i=e.contextType,u.context=typeof i=="object"&&i!==null?Dl(i):la,u.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ac(t,e,i,a),u.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&nc.enqueueReplaceState(u,u.state,null),Fa(t,a,u,n),Ja(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){u=t.stateNode;var c=t.memoizedProps,f=He(e,c);u.props=f;var y=u.context,v=e.contextType;i=la,typeof v=="object"&&v!==null&&(i=Dl(v));var x=e.getDerivedStateFromProps;v=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,v||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||y!==i)&&Ss(t,u,a,i),ee=!1;var m=t.memoizedState;u.state=m,Fa(t,a,u,n),Ja(),y=t.memoizedState,c||m!==y||ee?(typeof x=="function"&&(ac(t,e,x,a),y=t.memoizedState),(f=ee||vs(t,e,f,a,m,y,i))?(v||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),u.props=a,u.state=y,u.context=i,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,Ni(l,t),i=t.memoizedProps,v=He(e,i),u.props=v,x=t.pendingProps,m=u.context,y=e.contextType,f=la,typeof y=="object"&&y!==null&&(f=Dl(y)),c=e.getDerivedStateFromProps,(y=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==x||m!==f)&&Ss(t,u,a,f),ee=!1,m=t.memoizedState,u.state=m,Fa(t,a,u,n),Ja();var g=t.memoizedState;i!==x||m!==g||ee||l!==null&&l.dependencies!==null&&Vn(l.dependencies)?(typeof c=="function"&&(ac(t,e,c,a),g=t.memoizedState),(v=ee||vs(t,e,v,a,m,g,f)||l!==null&&l.dependencies!==null&&Vn(l.dependencies))?(y||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,g,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,g,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),u.props=a,u.state=g,u.context=f,a=v):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),a=!1)}return u=a,fu(l,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,l!==null&&a?(t.child=qe(t,l.child,null,n),t.child=qe(t,null,e,n)):Cl(l,t,e,n),t.memoizedState=u.state,l=t.child):l=Yt(l,t,n),l}function Bs(l,t,e,a){return Me(),t.flags|=256,Cl(l,t,e,a),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(l){return{baseLanes:l,cachePool:Eo()}}function sc(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=nt),l}function Ns(l,t,e){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=l!==null&&l.memoizedState===null?!1:(gl.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(K){if(n?ue(t):ie(),(l=cl)?(l=Qr(l,yt),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:It!==null?{id:At,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},e=yo(l),e.return=t,t.child=e,zl=t,cl=null)):l=null,l===null)throw le(t);return wc(l)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ie(),n=t.mode,c=ou({mode:"hidden",children:c},n),a=Ce(a,n,e,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=oc(e),a.childLanes=sc(l,i,e),t.memoizedState=fc,Pa(null,a)):(ue(t),rc(t,c))}var f=l.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)t.flags&256?(ue(t),t.flags&=-257,t=dc(l,t,e)):t.memoizedState!==null?(ie(),t.child=l.child,t.flags|=128,t=null):(ie(),c=a.fallback,n=t.mode,a=ou({mode:"visible",children:a.children},n),c=Ce(c,n,e,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,qe(t,l.child,null,e),a=t.child,a.memoizedState=oc(e),a.childLanes=sc(l,i,e),t.memoizedState=fc,t=Pa(null,a));else if(ue(t),wc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var y=i.dgst;i=y,a=Error(h(419)),a.stack="",a.digest=i,Xa({value:a,source:null,stack:null}),t=dc(l,t,e)}else if(xl||na(l,t,e,!1),i=(e&l.childLanes)!==0,xl||i){if(i=il,i!==null&&(a=pf(i,e),a!==0&&a!==f.retryLane))throw f.retryLane=a,De(l,a),Jl(i,l,a),ic;Kc(c)||Su(),t=dc(l,t,e)}else Kc(c)?(t.flags|=192,t.child=l.child,t=null):(l=f.treeContext,cl=ht(c.nextSibling),zl=t,K=!0,Pt=null,yt=!1,l!==null&&go(t,l),t=rc(t,a.children),t.flags|=4096);return t}return n?(ie(),c=a.fallback,n=t.mode,f=l.child,y=f.sibling,a=Bt(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,y!==null?c=Bt(y,c):(c=Ce(c,n,e,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Pa(null,a),a=t.child,c=l.child.memoizedState,c===null?c=oc(e):(n=c.cachePool,n!==null?(f=Sl._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Eo(),c={baseLanes:c.baseLanes|e,cachePool:n}),a.memoizedState=c,a.childLanes=sc(l,i,e),t.memoizedState=fc,Pa(l.child,a)):(ue(t),e=l.child,l=e.sibling,e=Bt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function rc(l,t){return t=ou({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function ou(l,t){return l=lt(22,l,null,t),l.lanes=0,l}function dc(l,t,e){return qe(t,l.child,null,e),l=rc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function qs(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),Di(l.return,t,e)}function yc(l,t,e,a,n,u){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=n,i.treeForkCount=u)}function Gs(l,t,e){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=gl.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,A(gl,i),Cl(l,t,a,e),a=K?ja:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&qs(l,e,t);else if(l.tag===19)qs(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(e=t.child,n=null;e!==null;)l=e.alternate,l!==null&&$n(l)===null&&(n=e),e=e.sibling;e=n,e===null?(n=t.child,t.child=null):(n=e.sibling,e.sibling=null),yc(t,!1,n,e,u,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&$n(l)===null){t.child=n;break}l=n.sibling,n.sibling=e,e=n,n=l}yc(t,!0,e,null,u,a);break;case"together":yc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Yt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),oe|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(na(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(h(153));if(t.child!==null){for(l=t.child,e=Bt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Bt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function mc(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Vn(l)))}function wy(l,t,e){switch(t.tag){case 3:Nl(t,t.stateNode.containerInfo),te(t,Sl,l.memoizedState.cache),Me();break;case 27:case 5:_a(t);break;case 4:Nl(t,t.stateNode.containerInfo);break;case 10:te(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ue(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Ns(l,t,e):(ue(t),l=Yt(l,t,e),l!==null?l.sibling:null);ue(t);break;case 19:var n=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(na(l,t,e,!1),a=(e&t.childLanes)!==0),n){if(a)return Gs(l,t,e);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),A(gl,gl.current),a)break;return null;case 22:return t.lanes=0,Cs(l,t,e,t.pendingProps);case 24:te(t,Sl,l.memoizedState.cache)}return Yt(l,t,e)}function Hs(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)xl=!0;else{if(!mc(l,e)&&(t.flags&128)===0)return xl=!1,wy(l,t,e);xl=(l.flags&131072)!==0}else xl=!1,K&&(t.flags&1048576)!==0&&ho(t,ja,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=Be(t.elementType),t.type=l,typeof l=="function")pi(l)?(a=He(l,a),t.tag=1,t=Us(null,t,l,a,e)):(t.tag=0,t=cc(null,t,l,a,e));else{if(l!=null){var n=l.$$typeof;if(n===it){t.tag=11,t=_s(null,t,l,a,e);break l}else if(n===Z){t.tag=14,t=zs(null,t,l,a,e);break l}}throw t=Mt(l)||l,Error(h(306,t,""))}}return t;case 0:return cc(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,n=He(a,t.pendingProps),Us(l,t,a,n,e);case 3:l:{if(Nl(t,t.stateNode.containerInfo),l===null)throw Error(h(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,Ni(l,t),Fa(t,a,null,e);var i=t.memoizedState;if(a=i.cache,te(t,Sl,a),a!==u.cache&&Ci(t,[Sl],e,!0),Ja(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Bs(l,t,a,e);break l}else if(a!==n){n=st(Error(h(424)),t),Xa(n),t=Bs(l,t,a,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(cl=ht(l.firstChild),zl=t,K=!0,Pt=null,yt=!0,e=Co(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Me(),a===n){t=Yt(l,t,e);break l}Cl(l,t,a,e)}t=t.child}return t;case 26:return fu(l,t),l===null?(e=Fr(t.type,null,t.pendingProps,null))?t.memoizedState=e:K||(e=t.type,l=t.pendingProps,a=_u(Y.current).createElement(e),a[_l]=t,a[Xl]=l,Ml(a,e,l),Tl(a),t.stateNode=a):t.memoizedState=Fr(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return _a(t),l===null&&K&&(a=t.stateNode=Kr(t.type,t.pendingProps,Y.current),zl=t,yt=!0,n=cl,me(t.type)?(Jc=n,cl=ht(a.firstChild)):cl=n),Cl(l,t,t.pendingProps.children,e),fu(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&K&&((n=a=cl)&&(a=E0(a,t.type,t.pendingProps,yt),a!==null?(t.stateNode=a,zl=t,cl=ht(a.firstChild),yt=!1,n=!0):n=!1),n||le(t)),_a(t),n=t.type,u=t.pendingProps,i=l!==null?l.memoizedProps:null,a=u.children,Qc(n,u)?a=null:i!==null&&Qc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Xi(l,t,Hy,null,null,e),hn._currentValue=n),fu(l,t),Cl(l,t,a,e),t.child;case 6:return l===null&&K&&((l=e=cl)&&(e=T0(e,t.pendingProps,yt),e!==null?(t.stateNode=e,zl=t,cl=null,l=!0):l=!1),l||le(t)),null;case 13:return Ns(l,t,e);case 4:return Nl(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=qe(t,null,a,e):Cl(l,t,a,e),t.child;case 11:return _s(l,t,t.type,t.pendingProps,e);case 7:return Cl(l,t,t.pendingProps,e),t.child;case 8:return Cl(l,t,t.pendingProps.children,e),t.child;case 12:return Cl(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,te(t,t.type,a.value),Cl(l,t,a.children,e),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Re(t),n=Dl(n),a=a(n),t.flags|=1,Cl(l,t,a,e),t.child;case 14:return zs(l,t,t.type,t.pendingProps,e);case 15:return Ds(l,t,t.type,t.pendingProps,e);case 19:return Gs(l,t,e);case 31:return Ky(l,t,e);case 22:return Cs(l,t,e,t.pendingProps);case 24:return Re(t),a=Dl(Sl),l===null?(n=Ri(),n===null&&(n=il,u=Mi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=e),n=u),t.memoizedState={parent:a,cache:n},Bi(t),te(t,Sl,n)):((l.lanes&e)!==0&&(Ni(l,t),Fa(t,null,null,e),Ja()),n=l.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),te(t,Sl,a)):(a=u.cache,te(t,Sl,a),a!==n.cache&&Ci(t,[Sl],e,!0))),Cl(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function jt(l){l.flags|=4}function hc(l,t,e,a,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(sr())l.flags|=8192;else throw Ne=Jn,Ui}else l.flags&=-16777217}function Ls(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!Pr(t))if(sr())l.flags|=8192;else throw Ne=Jn,Ui}function su(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?gf():536870912,l.lanes|=t,ga|=t)}function ln(l,t){if(!K)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function fl(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function Jy(l,t,e){var a=t.pendingProps;switch(Ti(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fl(t),null;case 1:return fl(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(Sl),hl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(aa(t)?jt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_i())),fl(t),null;case 26:var n=t.type,u=t.memoizedState;return l===null?(jt(t),u!==null?(fl(t),Ls(t,u)):(fl(t),hc(t,n,null,a,e))):u?u!==l.memoizedState?(jt(t),fl(t),Ls(t,u)):(fl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&jt(t),fl(t),hc(t,n,l,a,e)),null;case 27:if(bn(t),e=Y.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return fl(t),null}l=D.current,aa(t)?vo(t):(l=Kr(n,a,e),t.stateNode=l,jt(t))}return fl(t),null;case 5:if(bn(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return fl(t),null}if(u=D.current,aa(t))vo(t);else{var i=_u(Y.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[_l]=t,u[Xl]=a;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;l:switch(Ml(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&jt(t)}}return fl(t),hc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(l=Y.current,aa(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,n=zl,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}l[_l]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Nr(l.nodeValue,e)),l||le(t,!0)}else l=_u(l).createTextNode(a),l[_l]=t,t.stateNode=l}return fl(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(a=aa(t),e!==null){if(l===null){if(!a)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(557));l[_l]=t}else Me(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),l=!1}else e=_i(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(et(t),t):(et(t),null);if((t.flags&128)!==0)throw Error(h(558))}return fl(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=aa(t),a!==null&&a.dehydrated!==null){if(l===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[_l]=t}else Me(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),n=!1}else n=_i(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(et(t),t):(et(t),null)}return et(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,l=l!==null&&l.memoizedState!==null,e&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),su(t,t.updateQueue),fl(t),null);case 4:return hl(),l===null&&Hc(t.stateNode.containerInfo),fl(t),null;case 10:return Gt(t.type),fl(t),null;case 19:if(b(gl),a=t.memoizedState,a===null)return fl(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)ln(a,!1);else{if(yl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(u=$n(l),u!==null){for(t.flags|=128,ln(a,!1),l=u.updateQueue,t.updateQueue=l,su(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)ro(e,l),e=e.sibling;return A(gl,gl.current&1|2),K&&Nt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&kl()>hu&&(t.flags|=128,n=!0,ln(a,!1),t.lanes=4194304)}else{if(!n)if(l=$n(u),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,su(t,l),ln(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!K)return fl(t),null}else 2*kl()-a.renderingStartTime>hu&&e!==536870912&&(t.flags|=128,n=!0,ln(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(l=a.last,l!==null?l.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=kl(),l.sibling=null,e=gl.current,A(gl,n?e&1|2:e&1),K&&Nt(t,a.treeForkCount),l):(fl(t),null);case 22:case 23:return et(t),Li(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(fl(t),t.subtreeFlags&6&&(t.flags|=8192)):fl(t),e=t.updateQueue,e!==null&&su(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&b(Ue),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Gt(Sl),fl(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Fy(l,t){switch(Ti(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Gt(Sl),hl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return bn(t),null;case 31:if(t.memoizedState!==null){if(et(t),t.alternate===null)throw Error(h(340));Me()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(et(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Me()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return b(gl),null;case 4:return hl(),null;case 10:return Gt(t.type),null;case 22:case 23:return et(t),Li(),l!==null&&b(Ue),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Gt(Sl),null;case 25:return null;default:return null}}function Ys(l,t){switch(Ti(t),t.tag){case 3:Gt(Sl),hl();break;case 26:case 27:case 5:bn(t);break;case 4:hl();break;case 31:t.memoizedState!==null&&et(t);break;case 13:et(t);break;case 19:b(gl);break;case 10:Gt(t.type);break;case 22:case 23:et(t),Li(),l!==null&&b(Ue);break;case 24:Gt(Sl)}}function tn(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&l)===l){a=void 0;var u=e.create,i=e.inst;a=u(),i.destroy=a}e=e.next}while(e!==n)}}catch(c){ll(t,t.return,c)}}function ce(l,t,e){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&l)===l){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var f=e,y=c;try{y()}catch(v){ll(n,f,v)}}}a=a.next}while(a!==u)}}catch(v){ll(t,t.return,v)}}function js(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Oo(t,e)}catch(a){ll(l,l.return,a)}}}function Xs(l,t,e){e.props=He(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){ll(l,t,a)}}function en(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(n){ll(l,t,n)}}function zt(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){ll(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){ll(l,t,n)}else e.current=null}function Qs(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){ll(l,l.return,n)}}function gc(l,t,e){try{var a=l.stateNode;g0(a,l.type,e,t),a[Xl]=t}catch(n){ll(l,l.return,n)}}function Vs(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&me(l.type)||l.tag===4}function vc(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Vs(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&me(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Sc(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Rt));else if(a!==4&&(a===27&&me(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(Sc(l,t,e),l=l.sibling;l!==null;)Sc(l,t,e),l=l.sibling}function ru(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&me(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(ru(l,t,e),l=l.sibling;l!==null;)ru(l,t,e),l=l.sibling}function Zs(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ml(t,a,e),t[_l]=l,t[Xl]=e}catch(u){ll(l,l.return,u)}}var Xt=!1,bl=!1,pc=!1,Ks=typeof WeakSet=="function"?WeakSet:Set,Al=null;function Wy(l,t){if(l=l.containerInfo,jc=Uu,l=eo(l),di(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{e.nodeType,u.nodeType}catch{e=null;break l}var i=0,c=-1,f=-1,y=0,v=0,x=l,m=null;t:for(;;){for(var g;x!==e||n!==0&&x.nodeType!==3||(c=i+n),x!==u||a!==0&&x.nodeType!==3||(f=i+a),x.nodeType===3&&(i+=x.nodeValue.length),(g=x.firstChild)!==null;)m=x,x=g;for(;;){if(x===l)break t;if(m===e&&++y===n&&(c=i),m===u&&++v===a&&(f=i),(g=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=g}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Xc={focusedElem:l,selectionRange:e},Uu=!1,Al=t;Al!==null;)if(t=Al,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Al=l;else for(;Al!==null;){switch(t=Al,u=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)n=l[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&u!==null){l=void 0,e=t,n=u.memoizedProps,u=u.memoizedState,a=e.stateNode;try{var _=He(e.type,n);l=a.getSnapshotBeforeUpdate(_,u),a.__reactInternalSnapshotBeforeUpdate=l}catch(R){ll(e,e.return,R)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)Zc(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Zc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(h(163))}if(l=t.sibling,l!==null){l.return=t.return,Al=l;break}Al=t.return}}function ws(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Vt(l,e),a&4&&tn(5,e);break;case 1:if(Vt(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){ll(e,e.return,i)}else{var n=He(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){ll(e,e.return,i)}}a&64&&js(e),a&512&&en(e,e.return);break;case 3:if(Vt(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Oo(l,t)}catch(i){ll(e,e.return,i)}}break;case 27:t===null&&a&4&&Zs(e);case 26:case 5:Vt(l,e),t===null&&a&4&&Qs(e),a&512&&en(e,e.return);break;case 12:Vt(l,e);break;case 31:Vt(l,e),a&4&&Ws(l,e);break;case 13:Vt(l,e),a&4&&ks(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=n0.bind(null,e),A0(l,e))));break;case 22:if(a=e.memoizedState!==null||Xt,!a){t=t!==null&&t.memoizedState!==null||bl,n=Xt;var u=bl;Xt=a,(bl=t)&&!u?Zt(l,e,(e.subtreeFlags&8772)!==0):Vt(l,e),Xt=n,bl=u}break;case 30:break;default:Vt(l,e)}}function Js(l){var t=l.alternate;t!==null&&(l.alternate=null,Js(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Wu(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var sl=null,Vl=!1;function Qt(l,t,e){for(e=e.child;e!==null;)Fs(l,t,e),e=e.sibling}function Fs(l,t,e){if($l&&typeof $l.onCommitFiberUnmount=="function")try{$l.onCommitFiberUnmount(za,e)}catch{}switch(e.tag){case 26:bl||zt(e,t),Qt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:bl||zt(e,t);var a=sl,n=Vl;me(e.type)&&(sl=e.stateNode,Vl=!1),Qt(l,t,e),dn(e.stateNode),sl=a,Vl=n;break;case 5:bl||zt(e,t);case 6:if(a=sl,n=Vl,sl=null,Qt(l,t,e),sl=a,Vl=n,sl!==null)if(Vl)try{(sl.nodeType===9?sl.body:sl.nodeName==="HTML"?sl.ownerDocument.body:sl).removeChild(e.stateNode)}catch(u){ll(e,t,u)}else try{sl.removeChild(e.stateNode)}catch(u){ll(e,t,u)}break;case 18:sl!==null&&(Vl?(l=sl,jr(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),Aa(l)):jr(sl,e.stateNode));break;case 4:a=sl,n=Vl,sl=e.stateNode.containerInfo,Vl=!0,Qt(l,t,e),sl=a,Vl=n;break;case 0:case 11:case 14:case 15:ce(2,e,t),bl||ce(4,e,t),Qt(l,t,e);break;case 1:bl||(zt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Xs(e,t,a)),Qt(l,t,e);break;case 21:Qt(l,t,e);break;case 22:bl=(a=bl)||e.memoizedState!==null,Qt(l,t,e),bl=a;break;default:Qt(l,t,e)}}function Ws(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Aa(l)}catch(e){ll(t,t.return,e)}}}function ks(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Aa(l)}catch(e){ll(t,t.return,e)}}function ky(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Ks),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Ks),t;default:throw Error(h(435,l.tag))}}function du(l,t){var e=ky(l);t.forEach(function(a){if(!e.has(a)){e.add(a);var n=u0.bind(null,l,a);a.then(n,n)}})}function Zl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],u=l,i=t,c=i;l:for(;c!==null;){switch(c.tag){case 27:if(me(c.type)){sl=c.stateNode,Vl=!1;break l}break;case 5:sl=c.stateNode,Vl=!1;break l;case 3:case 4:sl=c.stateNode.containerInfo,Vl=!0;break l}c=c.return}if(sl===null)throw Error(h(160));Fs(u,i,n),sl=null,Vl=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$s(t,l),t=t.sibling}var pt=null;function $s(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Zl(t,l),Kl(l),a&4&&(ce(3,l,l.return),tn(3,l),ce(5,l,l.return));break;case 1:Zl(t,l),Kl(l),a&512&&(bl||e===null||zt(e,e.return)),a&64&&Xt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=pt;if(Zl(t,l),Kl(l),a&512&&(bl||e===null||zt(e,e.return)),a&4){var u=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ma]||u[_l]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Ml(u,a,e),u[_l]=l,Tl(u),a=u;break l;case"link":var i=$r("link","href",n).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&u.getAttribute("rel")===(e.rel==null?null:e.rel)&&u.getAttribute("title")===(e.title==null?null:e.title)&&u.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(a),Ml(u,a,e),n.head.appendChild(u);break;case"meta":if(i=$r("meta","content",n).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(e.content==null?null:""+e.content)&&u.getAttribute("name")===(e.name==null?null:e.name)&&u.getAttribute("property")===(e.property==null?null:e.property)&&u.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&u.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break t}}u=n.createElement(a),Ml(u,a,e),n.head.appendChild(u);break;default:throw Error(h(468,a))}u[_l]=l,Tl(u),a=u}l.stateNode=a}else Ir(n,l.type,l.stateNode);else l.stateNode=kr(n,a,l.memoizedProps);else u!==a?(u===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):u.count--,a===null?Ir(n,l.type,l.stateNode):kr(n,a,l.memoizedProps)):a===null&&l.stateNode!==null&&gc(l,l.memoizedProps,e.memoizedProps)}break;case 27:Zl(t,l),Kl(l),a&512&&(bl||e===null||zt(e,e.return)),e!==null&&a&4&&gc(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Zl(t,l),Kl(l),a&512&&(bl||e===null||zt(e,e.return)),l.flags&32){n=l.stateNode;try{Je(n,"")}catch(_){ll(l,l.return,_)}}a&4&&l.stateNode!=null&&(n=l.memoizedProps,gc(l,n,e!==null?e.memoizedProps:n)),a&1024&&(pc=!0);break;case 6:if(Zl(t,l),Kl(l),a&4){if(l.stateNode===null)throw Error(h(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(_){ll(l,l.return,_)}}break;case 3:if(Cu=null,n=pt,pt=zu(t.containerInfo),Zl(t,l),pt=n,Kl(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(_){ll(l,l.return,_)}pc&&(pc=!1,Is(l));break;case 4:a=pt,pt=zu(l.stateNode.containerInfo),Zl(t,l),Kl(l),pt=a;break;case 12:Zl(t,l),Kl(l);break;case 31:Zl(t,l),Kl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,du(l,a)));break;case 13:Zl(t,l),Kl(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(mu=kl()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,du(l,a)));break;case 22:n=l.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,y=Xt,v=bl;if(Xt=y||n,bl=v||f,Zl(t,l),bl=v,Xt=y,Kl(l),a&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(e===null||f||Xt||bl||Le(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){f=e=t;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var x=f.memoizedProps.style,m=x!=null&&x.hasOwnProperty("display")?x.display:null;c.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(_){ll(f,f.return,_)}}}else if(t.tag===6){if(e===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(_){ll(f,f.return,_)}}}else if(t.tag===18){if(e===null){f=t;try{var g=f.stateNode;n?Xr(g,!0):Xr(f.stateNode,!1)}catch(_){ll(f,f.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,du(l,e))));break;case 19:Zl(t,l),Kl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,du(l,a)));break;case 30:break;case 21:break;default:Zl(t,l),Kl(l)}}function Kl(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if(Vs(a)){e=a;break}a=a.return}if(e==null)throw Error(h(160));switch(e.tag){case 27:var n=e.stateNode,u=vc(l);ru(l,u,n);break;case 5:var i=e.stateNode;e.flags&32&&(Je(i,""),e.flags&=-33);var c=vc(l);ru(l,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,y=vc(l);Sc(l,y,f);break;default:throw Error(h(161))}}catch(v){ll(l,l.return,v)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function Is(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;Is(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Vt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ws(l,t.alternate,t),t=t.sibling}function Le(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ce(4,t,t.return),Le(t);break;case 1:zt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Xs(t,t.return,e),Le(t);break;case 27:dn(t.stateNode);case 26:case 5:zt(t,t.return),Le(t);break;case 22:t.memoizedState===null&&Le(t);break;case 30:Le(t);break;default:Le(t)}l=l.sibling}}function Zt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=l,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Zt(n,u,e),tn(4,u);break;case 1:if(Zt(n,u,e),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){ll(a,a.return,y)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Mo(f[n],c)}catch(y){ll(a,a.return,y)}}e&&i&64&&js(u),en(u,u.return);break;case 27:Zs(u);case 26:case 5:Zt(n,u,e),e&&a===null&&i&4&&Qs(u),en(u,u.return);break;case 12:Zt(n,u,e);break;case 31:Zt(n,u,e),e&&i&4&&Ws(n,u);break;case 13:Zt(n,u,e),e&&i&4&&ks(n,u);break;case 22:u.memoizedState===null&&Zt(n,u,e),en(u,u.return);break;case 30:break;default:Zt(n,u,e)}t=t.sibling}}function xc(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Qa(e))}function bc(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Qa(l))}function xt(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ps(l,t,e,a),t=t.sibling}function Ps(l,t,e,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:xt(l,t,e,a),n&2048&&tn(9,t);break;case 1:xt(l,t,e,a);break;case 3:xt(l,t,e,a),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Qa(l)));break;case 12:if(n&2048){xt(l,t,e,a),l=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(f){ll(t,t.return,f)}}else xt(l,t,e,a);break;case 31:xt(l,t,e,a);break;case 13:xt(l,t,e,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?xt(l,t,e,a):an(l,t):u._visibility&2?xt(l,t,e,a):(u._visibility|=2,ya(l,t,e,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&xc(i,t);break;case 24:xt(l,t,e,a),n&2048&&bc(t.alternate,t);break;default:xt(l,t,e,a)}}function ya(l,t,e,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=l,i=t,c=e,f=a,y=i.flags;switch(i.tag){case 0:case 11:case 15:ya(u,i,c,f,n),tn(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?ya(u,i,c,f,n):an(u,i):(v._visibility|=2,ya(u,i,c,f,n)),n&&y&2048&&xc(i.alternate,i);break;case 24:ya(u,i,c,f,n),n&&y&2048&&bc(i.alternate,i);break;default:ya(u,i,c,f,n)}t=t.sibling}}function an(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,n=a.flags;switch(a.tag){case 22:an(e,a),n&2048&&xc(a.alternate,a);break;case 24:an(e,a),n&2048&&bc(a.alternate,a);break;default:an(e,a)}t=t.sibling}}var nn=8192;function ma(l,t,e){if(l.subtreeFlags&nn)for(l=l.child;l!==null;)lr(l,t,e),l=l.sibling}function lr(l,t,e){switch(l.tag){case 26:ma(l,t,e),l.flags&nn&&l.memoizedState!==null&&G0(e,pt,l.memoizedState,l.memoizedProps);break;case 5:ma(l,t,e);break;case 3:case 4:var a=pt;pt=zu(l.stateNode.containerInfo),ma(l,t,e),pt=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=nn,nn=16777216,ma(l,t,e),nn=a):ma(l,t,e));break;default:ma(l,t,e)}}function tr(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function un(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Al=a,ar(a,l)}tr(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)er(l),l=l.sibling}function er(l){switch(l.tag){case 0:case 11:case 15:un(l),l.flags&2048&&ce(9,l,l.return);break;case 3:un(l);break;case 12:un(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,yu(l)):un(l);break;default:un(l)}}function yu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Al=a,ar(a,l)}tr(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ce(8,t,t.return),yu(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,yu(t));break;default:yu(t)}l=l.sibling}}function ar(l,t){for(;Al!==null;){var e=Al;switch(e.tag){case 0:case 11:case 15:ce(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qa(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Al=a;else l:for(e=l;Al!==null;){a=Al;var n=a.sibling,u=a.return;if(Js(a),a===e){Al=null;break l}if(n!==null){n.return=u,Al=n;break l}Al=u}}}var $y={getCacheForType:function(l){var t=Dl(Sl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Dl(Sl).controller.signal}},Iy=typeof WeakMap=="function"?WeakMap:Map,W=0,il=null,j=null,Q=0,P=0,at=null,fe=!1,ha=!1,Ec=!1,Kt=0,yl=0,oe=0,Ye=0,Tc=0,nt=0,ga=0,cn=null,wl=null,Ac=!1,mu=0,nr=0,hu=1/0,gu=null,se=null,El=0,re=null,va=null,wt=0,_c=0,zc=null,ur=null,fn=0,Dc=null;function ut(){return(W&2)!==0&&Q!==0?Q&-Q:S.T!==null?Bc():xf()}function ir(){if(nt===0)if((Q&536870912)===0||K){var l=An;An<<=1,(An&3932160)===0&&(An=262144),nt=l}else nt=536870912;return l=tt.current,l!==null&&(l.flags|=32),nt}function Jl(l,t,e){(l===il&&(P===2||P===9)||l.cancelPendingCommit!==null)&&(Sa(l,0),de(l,Q,nt,!1)),Ca(l,e),((W&2)===0||l!==il)&&(l===il&&((W&2)===0&&(Ye|=e),yl===4&&de(l,Q,nt,!1)),Dt(l))}function cr(l,t,e){if((W&6)!==0)throw Error(h(327));var a=!e&&(t&127)===0&&(t&l.expiredLanes)===0||Da(l,t),n=a?t0(l,t):Mc(l,t,!0),u=a;do{if(n===0){ha&&!a&&de(l,t,0,!1);break}else{if(e=l.current.alternate,u&&!Py(e)){n=Mc(l,t,!1),u=!1;continue}if(n===2){if(u=t,l.errorRecoveryDisabledLanes&u)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var c=l;n=cn;var f=c.current.memoizedState.isDehydrated;if(f&&(Sa(c,i).flags|=256),i=Mc(c,i,!1),i!==2){if(Ec&&!f){c.errorRecoveryDisabledLanes|=u,Ye|=u,n=4;break l}u=wl,wl=n,u!==null&&(wl===null?wl=u:wl.push.apply(wl,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Sa(l,0),de(l,t,0,!0);break}l:{switch(a=l,u=n,u){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:de(a,t,nt,!fe);break l;case 2:wl=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=mu+300-kl(),10<n)){if(de(a,t,nt,!fe),zn(a,0,!0)!==0)break l;wt=t,a.timeoutHandle=Lr(fr.bind(null,a,e,wl,gu,Ac,t,nt,Ye,ga,fe,u,"Throttled",-0,0),n);break l}fr(a,e,wl,gu,Ac,t,nt,Ye,ga,fe,u,null,-0,0)}}break}while(!0);Dt(l)}function fr(l,t,e,a,n,u,i,c,f,y,v,x,m,g){if(l.timeoutHandle=-1,x=t.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},lr(t,u,x);var _=(u&62914560)===u?mu-kl():(u&4194048)===u?nr-kl():0;if(_=H0(x,_),_!==null){wt=u,l.cancelPendingCommit=_(gr.bind(null,l,t,u,e,a,n,i,c,f,v,x,null,m,g)),de(l,u,i,!y);return}}gr(l,t,u,e,a,n,i,c,f)}function Py(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],u=n.getSnapshot;n=n.value;try{if(!Pl(u(),n))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function de(l,t,e,a){t&=~Tc,t&=~Ye,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var n=t;0<n;){var u=31-Il(n),i=1<<u;a[u]=-1,n&=~i}e!==0&&vf(l,e,t)}function vu(){return(W&6)===0?(on(0),!1):!0}function Cc(){if(j!==null){if(P===0)var l=j.return;else l=j,qt=Oe=null,Zi(l),fa=null,Za=0,l=j;for(;l!==null;)Ys(l.alternate,l),l=l.return;j=null}}function Sa(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,p0(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),wt=0,Cc(),il=l,j=e=Bt(l.current,null),Q=t,P=0,at=null,fe=!1,ha=Da(l,t),Ec=!1,ga=nt=Tc=Ye=oe=yl=0,wl=cn=null,Ac=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var n=31-Il(a),u=1<<n;t|=l[n],a&=~u}return Kt=t,Ln(),e}function or(l,t){H=null,S.H=Ia,t===ca||t===wn?(t=_o(),P=3):t===Ui?(t=_o(),P=4):P=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,j===null&&(yl=1,iu(l,st(t,l.current)))}function sr(){var l=tt.current;return l===null?!0:(Q&4194048)===Q?mt===null:(Q&62914560)===Q||(Q&536870912)!==0?l===mt:!1}function rr(){var l=S.H;return S.H=Ia,l===null?Ia:l}function dr(){var l=S.A;return S.A=$y,l}function Su(){yl=4,fe||(Q&4194048)!==Q&&tt.current!==null||(ha=!0),(oe&134217727)===0&&(Ye&134217727)===0||il===null||de(il,Q,nt,!1)}function Mc(l,t,e){var a=W;W|=2;var n=rr(),u=dr();(il!==l||Q!==t)&&(gu=null,Sa(l,t)),t=!1;var i=yl;l:do try{if(P!==0&&j!==null){var c=j,f=at;switch(P){case 8:Cc(),i=6;break l;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var y=P;if(P=0,at=null,pa(l,c,f,y),e&&ha){i=0;break l}break;default:y=P,P=0,at=null,pa(l,c,f,y)}}l0(),i=yl;break}catch(v){or(l,v)}while(!0);return t&&l.shellSuspendCounter++,qt=Oe=null,W=a,S.H=n,S.A=u,j===null&&(il=null,Q=0,Ln()),i}function l0(){for(;j!==null;)yr(j)}function t0(l,t){var e=W;W|=2;var a=rr(),n=dr();il!==l||Q!==t?(gu=null,hu=kl()+500,Sa(l,t)):ha=Da(l,t);l:do try{if(P!==0&&j!==null){t=j;var u=at;t:switch(P){case 1:P=0,at=null,pa(l,t,u,1);break;case 2:case 9:if(To(u)){P=0,at=null,mr(t);break}t=function(){P!==2&&P!==9||il!==l||(P=7),Dt(l)},u.then(t,t);break l;case 3:P=7;break l;case 4:P=5;break l;case 7:To(u)?(P=0,at=null,mr(t)):(P=0,at=null,pa(l,t,u,7));break;case 5:var i=null;switch(j.tag){case 26:i=j.memoizedState;case 5:case 27:var c=j;if(i?Pr(i):c.stateNode.complete){P=0,at=null;var f=c.sibling;if(f!==null)j=f;else{var y=c.return;y!==null?(j=y,pu(y)):j=null}break t}}P=0,at=null,pa(l,t,u,5);break;case 6:P=0,at=null,pa(l,t,u,6);break;case 8:Cc(),yl=6;break l;default:throw Error(h(462))}}e0();break}catch(v){or(l,v)}while(!0);return qt=Oe=null,S.H=a,S.A=n,W=e,j!==null?0:(il=null,Q=0,Ln(),yl)}function e0(){for(;j!==null&&!_d();)yr(j)}function yr(l){var t=Hs(l.alternate,l,Kt);l.memoizedProps=l.pendingProps,t===null?pu(l):j=t}function mr(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Rs(e,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Rs(e,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:Zi(t);default:Ys(e,t),t=j=ro(t,Kt),t=Hs(e,t,Kt)}l.memoizedProps=l.pendingProps,t===null?pu(l):j=t}function pa(l,t,e,a){qt=Oe=null,Zi(t),fa=null,Za=0;var n=t.return;try{if(Zy(l,n,t,e,Q)){yl=1,iu(l,st(e,l.current)),j=null;return}}catch(u){if(n!==null)throw j=n,u;yl=1,iu(l,st(e,l.current)),j=null;return}t.flags&32768?(K||a===1?l=!0:ha||(Q&536870912)!==0?l=!1:(fe=l=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),hr(t,l)):pu(t)}function pu(l){var t=l;do{if((t.flags&32768)!==0){hr(t,fe);return}l=t.return;var e=Jy(t.alternate,t,Kt);if(e!==null){j=e;return}if(t=t.sibling,t!==null){j=t;return}j=t=l}while(t!==null);yl===0&&(yl=5)}function hr(l,t){do{var e=Fy(l.alternate,l);if(e!==null){e.flags&=32767,j=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){j=l;return}j=l=e}while(l!==null);yl=6,j=null}function gr(l,t,e,a,n,u,i,c,f){l.cancelPendingCommit=null;do xu();while(El!==0);if((W&6)!==0)throw Error(h(327));if(t!==null){if(t===l.current)throw Error(h(177));if(u=t.lanes|t.childLanes,u|=vi,qd(l,e,u,i,c,f),l===il&&(j=il=null,Q=0),va=t,re=l,wt=e,_c=u,zc=n,ur=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,i0(En,function(){return br(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=T.p,T.p=2,i=W,W|=4;try{Wy(l,t,e)}finally{W=i,T.p=n,S.T=a}}El=1,vr(),Sr(),pr()}}function vr(){if(El===1){El=0;var l=re,t=va,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=T.p;T.p=2;var n=W;W|=4;try{$s(t,l);var u=Xc,i=eo(l.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&to(c.ownerDocument.documentElement,c)){if(f!==null&&di(c)){var y=f.start,v=f.end;if(v===void 0&&(v=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(v,c.value.length);else{var x=c.ownerDocument||document,m=x&&x.defaultView||window;if(m.getSelection){var g=m.getSelection(),_=c.textContent.length,R=Math.min(f.start,_),nl=f.end===void 0?R:Math.min(f.end,_);!g.extend&&R>nl&&(i=nl,nl=R,R=i);var r=lo(c,R),o=lo(c,nl);if(r&&o&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var d=x.createRange();d.setStart(r.node,r.offset),g.removeAllRanges(),R>nl?(g.addRange(d),g.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),g.addRange(d))}}}}for(x=[],g=c;g=g.parentNode;)g.nodeType===1&&x.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<x.length;c++){var p=x[c];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}Uu=!!jc,Xc=jc=null}finally{W=n,T.p=a,S.T=e}}l.current=t,El=2}}function Sr(){if(El===2){El=0;var l=re,t=va,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=T.p;T.p=2;var n=W;W|=4;try{ws(l,t.alternate,t)}finally{W=n,T.p=a,S.T=e}}El=3}}function pr(){if(El===4||El===3){El=0,zd();var l=re,t=va,e=wt,a=ur;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?El=5:(El=0,va=re=null,xr(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(se=null),Ju(e),t=t.stateNode,$l&&typeof $l.onCommitFiberRoot=="function")try{$l.onCommitFiberRoot(za,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,n=T.p,T.p=2,S.T=null;try{for(var u=l.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{S.T=t,T.p=n}}(wt&3)!==0&&xu(),Dt(l),n=l.pendingLanes,(e&261930)!==0&&(n&42)!==0?l===Dc?fn++:(fn=0,Dc=l):fn=0,on(0)}}function xr(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Qa(t)))}function xu(){return vr(),Sr(),pr(),br()}function br(){if(El!==5)return!1;var l=re,t=_c;_c=0;var e=Ju(wt),a=S.T,n=T.p;try{T.p=32>e?32:e,S.T=null,e=zc,zc=null;var u=re,i=wt;if(El=0,va=re=null,wt=0,(W&6)!==0)throw Error(h(331));var c=W;if(W|=4,er(u.current),Ps(u,u.current,i,e),W=c,on(0,!1),$l&&typeof $l.onPostCommitFiberRoot=="function")try{$l.onPostCommitFiberRoot(za,u)}catch{}return!0}finally{T.p=n,S.T=a,xr(l,t)}}function Er(l,t,e){t=st(e,t),t=uc(l.stateNode,t,2),l=ne(l,t,2),l!==null&&(Ca(l,2),Dt(l))}function ll(l,t,e){if(l.tag===3)Er(l,l,e);else for(;t!==null;){if(t.tag===3){Er(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(se===null||!se.has(a))){l=st(e,l),e=Ts(2),a=ne(t,e,2),a!==null&&(As(e,a,t,l),Ca(a,2),Dt(a));break}}t=t.return}}function Oc(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new Iy;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(e)||(Ec=!0,n.add(e),l=a0.bind(null,l,t,e),t.then(l,l))}function a0(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,il===l&&(Q&e)===e&&(yl===4||yl===3&&(Q&62914560)===Q&&300>kl()-mu?(W&2)===0&&Sa(l,0):Tc|=e,ga===Q&&(ga=0)),Dt(l)}function Tr(l,t){t===0&&(t=gf()),l=De(l,t),l!==null&&(Ca(l,t),Dt(l))}function n0(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),Tr(l,e)}function u0(l,t){var e=0;switch(l.tag){case 31:case 13:var a=l.stateNode,n=l.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),Tr(l,e)}function i0(l,t){return Vu(l,t)}var bu=null,xa=null,Rc=!1,Eu=!1,Uc=!1,ye=0;function Dt(l){l!==xa&&l.next===null&&(xa===null?bu=xa=l:xa=xa.next=l),Eu=!0,Rc||(Rc=!0,f0())}function on(l,t){if(!Uc&&Eu){Uc=!0;do for(var e=!1,a=bu;a!==null;){if(l!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-Il(42|l)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(e=!0,Dr(a,u))}else u=Q,u=zn(a,a===il?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Da(a,u)||(e=!0,Dr(a,u));a=a.next}while(e);Uc=!1}}function c0(){Ar()}function Ar(){Eu=Rc=!1;var l=0;ye!==0&&S0()&&(l=ye);for(var t=kl(),e=null,a=bu;a!==null;){var n=a.next,u=_r(a,t);u===0?(a.next=null,e===null?bu=n:e.next=n,n===null&&(xa=e)):(e=a,(l!==0||(u&3)!==0)&&(Eu=!0)),a=n}El!==0&&El!==5||on(l),ye!==0&&(ye=0)}function _r(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,n=l.expirationTimes,u=l.pendingLanes&-62914561;0<u;){var i=31-Il(u),c=1<<i,f=n[i];f===-1?((c&e)===0||(c&a)!==0)&&(n[i]=Nd(c,t)):f<=t&&(l.expiredLanes|=c),u&=~c}if(t=il,e=Q,e=zn(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(P===2||P===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&Zu(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||Da(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&Zu(a),Ju(e)){case 2:case 8:e=mf;break;case 32:e=En;break;case 268435456:e=hf;break;default:e=En}return a=zr.bind(null,l),e=Vu(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&Zu(a),l.callbackPriority=2,l.callbackNode=null,2}function zr(l,t){if(El!==0&&El!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(xu()&&l.callbackNode!==e)return null;var a=Q;return a=zn(l,l===il?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(cr(l,a,t),_r(l,kl()),l.callbackNode!=null&&l.callbackNode===e?zr.bind(null,l):null)}function Dr(l,t){if(xu())return null;cr(l,t,!0)}function f0(){x0(function(){(W&6)!==0?Vu(yf,c0):Ar()})}function Bc(){if(ye===0){var l=ua;l===0&&(l=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),ye=l}return ye}function Cr(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:On(""+l)}function Mr(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function o0(l,t,e,a,n){if(t==="submit"&&e&&e.stateNode===n){var u=Cr((n[Xl]||null).action),i=a.submitter;i&&(t=(t=i[Xl]||null)?Cr(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Nn("action","action",null,a,n);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ye!==0){var f=i?Mr(n,i):new FormData(n);Pi(e,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Mr(n,i):new FormData(n),Pi(e,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Nc=0;Nc<gi.length;Nc++){var qc=gi[Nc],s0=qc.toLowerCase(),r0=qc[0].toUpperCase()+qc.slice(1);St(s0,"on"+r0)}St(uo,"onAnimationEnd"),St(io,"onAnimationIteration"),St(co,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(Dy,"onTransitionRun"),St(Cy,"onTransitionStart"),St(My,"onTransitionCancel"),St(fo,"onTransitionEnd"),Ke("onMouseEnter",["mouseout","mouseover"]),Ke("onMouseLeave",["mouseout","mouseover"]),Ke("onPointerEnter",["pointerout","pointerover"]),Ke("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function Or(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],n=a.event;a=a.listeners;l:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,y=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break l;u=c,n.currentTarget=y;try{u(n)}catch(v){Hn(v)}n.currentTarget=null,u=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,y=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break l;u=c,n.currentTarget=y;try{u(n)}catch(v){Hn(v)}n.currentTarget=null,u=f}}}}function X(l,t){var e=t[Fu];e===void 0&&(e=t[Fu]=new Set);var a=l+"__bubble";e.has(a)||(Rr(t,l,2,!1),e.add(a))}function Gc(l,t,e){var a=0;t&&(a|=4),Rr(e,l,a,t)}var Tu="_reactListening"+Math.random().toString(36).slice(2);function Hc(l){if(!l[Tu]){l[Tu]=!0,Tf.forEach(function(e){e!=="selectionchange"&&(d0.has(e)||Gc(e,!1,l),Gc(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Tu]||(t[Tu]=!0,Gc("selectionchange",!1,t))}}function Rr(l,t,e,a){switch(id(t)){case 2:var n=j0;break;case 8:n=X0;break;default:n=Ic}e=n.bind(null,t,e,l),n=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?l.addEventListener(t,e,{capture:!0,passive:n}):l.addEventListener(t,e,!0):n!==void 0?l.addEventListener(t,e,{passive:n}):l.addEventListener(t,e,!1)}function Lc(l,t,e,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Qe(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=u=i;continue l}c=c.parentNode}}a=a.return}qf(function(){var y=u,v=ti(e),x=[];l:{var m=oo.get(l);if(m!==void 0){var g=Nn,_=l;switch(l){case"keypress":if(Un(e)===0)break l;case"keydown":case"keyup":g=uy;break;case"focusin":_="focus",g=ci;break;case"focusout":_="blur",g=ci;break;case"beforeblur":case"afterblur":g=ci;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fy;break;case uo:case io:case co:g=kd;break;case fo:g=sy;break;case"scroll":case"scrollend":g=Kd;break;case"wheel":g=dy;break;case"copy":case"cut":case"paste":g=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jf;break;case"toggle":case"beforetoggle":g=my}var R=(t&4)!==0,nl=!R&&(l==="scroll"||l==="scrollend"),r=R?m!==null?m+"Capture":null:m;R=[];for(var o=y,d;o!==null;){var p=o;if(d=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||d===null||r===null||(p=Ra(o,r),p!=null&&R.push(rn(o,p,d))),nl)break;o=o.return}0<R.length&&(m=new g(m,_,null,e,v),x.push({event:m,listeners:R}))}}if((t&7)===0){l:{if(m=l==="mouseover"||l==="pointerover",g=l==="mouseout"||l==="pointerout",m&&e!==li&&(_=e.relatedTarget||e.fromElement)&&(Qe(_)||_[Xe]))break l;if((g||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,g?(_=e.relatedTarget||e.toElement,g=y,_=_?Qe(_):null,_!==null&&(nl=F(_),R=_.tag,_!==nl||R!==5&&R!==27&&R!==6)&&(_=null)):(g=null,_=y),g!==_)){if(R=Lf,p="onMouseLeave",r="onMouseEnter",o="mouse",(l==="pointerout"||l==="pointerover")&&(R=jf,p="onPointerLeave",r="onPointerEnter",o="pointer"),nl=g==null?m:Oa(g),d=_==null?m:Oa(_),m=new R(p,o+"leave",g,e,v),m.target=nl,m.relatedTarget=d,p=null,Qe(v)===y&&(R=new R(r,o+"enter",_,e,v),R.target=d,R.relatedTarget=nl,p=R),nl=p,g&&_)t:{for(R=y0,r=g,o=_,d=0,p=r;p;p=R(p))d++;p=0;for(var M=o;M;M=R(M))p++;for(;0<d-p;)r=R(r),d--;for(;0<p-d;)o=R(o),p--;for(;d--;){if(r===o||o!==null&&r===o.alternate){R=r;break t}r=R(r),o=R(o)}R=null}else R=null;g!==null&&Ur(x,m,g,R,!1),_!==null&&nl!==null&&Ur(x,nl,_,R,!0)}}l:{if(m=y?Oa(y):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var w=Ff;else if(wf(m))if(Wf)w=Ay;else{w=Ey;var C=by}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?y&&Pu(y.elementType)&&(w=Ff):w=Ty;if(w&&(w=w(l,y))){Jf(x,w,e,v);break l}C&&C(l,m,y),l==="focusout"&&y&&m.type==="number"&&y.memoizedProps.value!=null&&Iu(m,"number",m.value)}switch(C=y?Oa(y):window,l){case"focusin":(wf(C)||C.contentEditable==="true")&&($e=C,yi=y,Ya=null);break;case"focusout":Ya=yi=$e=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,ao(x,e,v);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":ao(x,e,v)}var L;if(oi)l:{switch(l){case"compositionstart":var V="onCompositionStart";break l;case"compositionend":V="onCompositionEnd";break l;case"compositionupdate":V="onCompositionUpdate";break l}V=void 0}else ke?Zf(l,e)&&(V="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(V="onCompositionStart");V&&(Xf&&e.locale!=="ko"&&(ke||V!=="onCompositionStart"?V==="onCompositionEnd"&&ke&&(L=Gf()):($t=v,ni="value"in $t?$t.value:$t.textContent,ke=!0)),C=Au(y,V),0<C.length&&(V=new Yf(V,l,null,e,v),x.push({event:V,listeners:C}),L?V.data=L:(L=Kf(e),L!==null&&(V.data=L)))),(L=gy?vy(l,e):Sy(l,e))&&(V=Au(y,"onBeforeInput"),0<V.length&&(C=new Yf("onBeforeInput","beforeinput",null,e,v),x.push({event:C,listeners:V}),C.data=L)),o0(x,l,y,e,v)}Or(x,t)})}function rn(l,t,e){return{instance:l,listener:t,currentTarget:e}}function Au(l,t){for(var e=t+"Capture",a=[];l!==null;){var n=l,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ra(l,e),n!=null&&a.unshift(rn(l,n,u)),n=Ra(l,t),n!=null&&a.push(rn(l,n,u))),l.tag===3)return a;l=l.return}return[]}function y0(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Ur(l,t,e,a,n){for(var u=t._reactName,i=[];e!==null&&e!==a;){var c=e,f=c.alternate,y=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||y===null||(f=y,n?(y=Ra(e,u),y!=null&&i.unshift(rn(e,y,f))):n||(y=Ra(e,u),y!=null&&i.push(rn(e,y,f)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var m0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Br(l){return(typeof l=="string"?l:""+l).replace(m0,`
`).replace(h0,"")}function Nr(l,t){return t=Br(t),Br(l)===t}function al(l,t,e,a,n,u){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Je(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Je(l,""+a);break;case"className":Cn(l,"class",a);break;case"tabIndex":Cn(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(l,e,a);break;case"style":Bf(l,a,u);break;case"data":if(t!=="object"){Cn(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=On(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(e==="formAction"?(t!=="input"&&al(l,t,"name",n.name,n,null),al(l,t,"formEncType",n.formEncType,n,null),al(l,t,"formMethod",n.formMethod,n,null),al(l,t,"formTarget",n.formTarget,n,null)):(al(l,t,"encType",n.encType,n,null),al(l,t,"method",n.method,n,null),al(l,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=On(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=Rt);break;case"onScroll":a!=null&&X("scroll",l);break;case"onScrollEnd":a!=null&&X("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(h(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=On(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":X("beforetoggle",l),X("toggle",l),Dn(l,"popover",a);break;case"xlinkActuate":Ot(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ot(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ot(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ot(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ot(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ot(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ot(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ot(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ot(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Dn(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Vd.get(e)||e,Dn(l,e,a))}}function Yc(l,t,e,a,n,u){switch(e){case"style":Bf(l,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(h(60));l.innerHTML=e}}break;case"children":typeof a=="string"?Je(l,a):(typeof a=="number"||typeof a=="bigint")&&Je(l,""+a);break;case"onScroll":a!=null&&X("scroll",l);break;case"onScrollEnd":a!=null&&X("scrollend",l);break;case"onClick":a!=null&&(l.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Af.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),t=e.slice(2,n?e.length-7:void 0),u=l[Xl]||null,u=u!=null?u[e]:null,typeof u=="function"&&l.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,n);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):Dn(l,e,a)}}}function Ml(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",l),X("load",l);var a=!1,n=!1,u;for(u in e)if(e.hasOwnProperty(u)){var i=e[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:al(l,t,u,i,e,null)}}n&&al(l,t,"srcSet",e.srcSet,e,null),a&&al(l,t,"src",e.src,e,null);return;case"input":X("invalid",l);var c=u=i=n=null,f=null,y=null;for(a in e)if(e.hasOwnProperty(a)){var v=e[a];if(v!=null)switch(a){case"name":n=v;break;case"type":i=v;break;case"checked":f=v;break;case"defaultChecked":y=v;break;case"value":u=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:al(l,t,a,v,e,null)}}Mf(l,u,c,f,y,i,n,!1);return;case"select":X("invalid",l),a=i=u=null;for(n in e)if(e.hasOwnProperty(n)&&(c=e[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:al(l,t,n,c,e,null)}t=u,e=i,l.multiple=!!a,t!=null?we(l,!!a,t,!1):e!=null&&we(l,!!a,e,!0);return;case"textarea":X("invalid",l),u=n=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:al(l,t,i,c,e,null)}Rf(l,a,n,u);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(a=e[f],a!=null))switch(f){case"selected":l.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:al(l,t,f,a,e,null)}return;case"dialog":X("beforetoggle",l),X("toggle",l),X("cancel",l),X("close",l);break;case"iframe":case"object":X("load",l);break;case"video":case"audio":for(a=0;a<sn.length;a++)X(sn[a],l);break;case"image":X("error",l),X("load",l);break;case"details":X("toggle",l);break;case"embed":case"source":case"link":X("error",l),X("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in e)if(e.hasOwnProperty(y)&&(a=e[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:al(l,t,y,a,e,null)}return;default:if(Pu(t)){for(v in e)e.hasOwnProperty(v)&&(a=e[v],a!==void 0&&Yc(l,t,v,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&al(l,t,c,a,e,null))}function g0(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,y=null,v=null;for(g in e){var x=e[g];if(e.hasOwnProperty(g)&&x!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":f=x;default:a.hasOwnProperty(g)||al(l,t,g,null,a,x)}}for(var m in a){var g=a[m];if(x=e[m],a.hasOwnProperty(m)&&(g!=null||x!=null))switch(m){case"type":u=g;break;case"name":n=g;break;case"checked":y=g;break;case"defaultChecked":v=g;break;case"value":i=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==x&&al(l,t,m,g,a,x)}}$u(l,i,c,f,y,v,u,n);return;case"select":g=i=c=m=null;for(u in e)if(f=e[u],e.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":g=f;default:a.hasOwnProperty(u)||al(l,t,u,null,a,f)}for(n in a)if(u=a[n],f=e[n],a.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":m=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&al(l,t,n,u,a,f)}t=c,e=i,a=g,m!=null?we(l,!!e,m,!1):!!a!=!!e&&(t!=null?we(l,!!e,t,!0):we(l,!!e,e?[]:"",!1));return;case"textarea":g=m=null;for(c in e)if(n=e[c],e.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:al(l,t,c,null,a,n)}for(i in a)if(n=a[i],u=e[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":m=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==u&&al(l,t,i,n,a,u)}Of(l,m,g);return;case"option":for(var _ in e)if(m=e[_],e.hasOwnProperty(_)&&m!=null&&!a.hasOwnProperty(_))switch(_){case"selected":l.selected=!1;break;default:al(l,t,_,null,a,m)}for(f in a)if(m=a[f],g=e[f],a.hasOwnProperty(f)&&m!==g&&(m!=null||g!=null))switch(f){case"selected":l.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:al(l,t,f,m,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in e)m=e[R],e.hasOwnProperty(R)&&m!=null&&!a.hasOwnProperty(R)&&al(l,t,R,null,a,m);for(y in a)if(m=a[y],g=e[y],a.hasOwnProperty(y)&&m!==g&&(m!=null||g!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,t));break;default:al(l,t,y,m,a,g)}return;default:if(Pu(t)){for(var nl in e)m=e[nl],e.hasOwnProperty(nl)&&m!==void 0&&!a.hasOwnProperty(nl)&&Yc(l,t,nl,void 0,a,m);for(v in a)m=a[v],g=e[v],!a.hasOwnProperty(v)||m===g||m===void 0&&g===void 0||Yc(l,t,v,m,a,g);return}}for(var r in e)m=e[r],e.hasOwnProperty(r)&&m!=null&&!a.hasOwnProperty(r)&&al(l,t,r,null,a,m);for(x in a)m=a[x],g=e[x],!a.hasOwnProperty(x)||m===g||m==null&&g==null||al(l,t,x,m,a,g)}function qr(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function v0(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&qr(i)){for(i=0,c=n.responseEnd,a+=1;a<e.length;a++){var f=e[a],y=f.startTime;if(y>c)break;var v=f.transferSize,x=f.initiatorType;v&&qr(x)&&(f=f.responseEnd,i+=v*(f<c?1:(c-y)/(f-y)))}if(--a,t+=8*(u+i)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var jc=null,Xc=null;function _u(l){return l.nodeType===9?l:l.ownerDocument}function Gr(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hr(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Qc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vc=null;function S0(){var l=window.event;return l&&l.type==="popstate"?l===Vc?!1:(Vc=l,!0):(Vc=null,!1)}var Lr=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,Yr=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yr<"u"?function(l){return Yr.resolve(null).then(l).catch(b0)}:Lr;function b0(l){setTimeout(function(){throw l})}function me(l){return l==="head"}function jr(l,t){var e=t,a=0;do{var n=e.nextSibling;if(l.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){l.removeChild(n),Aa(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")dn(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,dn(e);for(var u=e.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Ma]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=i}}else e==="body"&&dn(l.ownerDocument.body);e=n}while(e);Aa(t)}function Xr(l,t){var e=l;l=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=a}while(e)}function Zc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Zc(e),Wu(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function E0(l,t,e,a){for(;l.nodeType===1;){var n=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Ma])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(u=l.getAttribute("rel"),u==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(u!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(u=l.getAttribute("src"),(u!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===u)return l}else return l;if(l=ht(l.nextSibling),l===null)break}return null}function T0(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=ht(l.nextSibling),l===null))return null;return l}function Qr(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=ht(l.nextSibling),l===null))return null;return l}function Kc(l){return l.data==="$?"||l.data==="$~"}function wc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function A0(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function ht(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Jc=null;function Vr(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return ht(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function Zr(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function Kr(l,t,e){switch(t=_u(e),l){case"html":if(l=t.documentElement,!l)throw Error(h(452));return l;case"head":if(l=t.head,!l)throw Error(h(453));return l;case"body":if(l=t.body,!l)throw Error(h(454));return l;default:throw Error(h(451))}}function dn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Wu(l)}var gt=new Map,wr=new Set;function zu(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Jt=T.d;T.d={f:_0,r:z0,D:D0,C:C0,L:M0,m:O0,X:U0,S:R0,M:B0};function _0(){var l=Jt.f(),t=vu();return l||t}function z0(l){var t=Ve(l);t!==null&&t.tag===5&&t.type==="form"?os(t):Jt.r(l)}var ba=typeof document>"u"?null:document;function Jr(l,t,e){var a=ba;if(a&&typeof t=="string"&&t){var n=ft(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),wr.has(n)||(wr.add(n),l={rel:l,crossOrigin:e,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ml(t,"link",l),Tl(t),a.head.appendChild(t)))}}function D0(l){Jt.D(l),Jr("dns-prefetch",l,null)}function C0(l,t){Jt.C(l,t),Jr("preconnect",l,t)}function M0(l,t,e){Jt.L(l,t,e);var a=ba;if(a&&l&&t){var n='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+ft(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+ft(e.imageSizes)+'"]')):n+='[href="'+ft(l)+'"]';var u=n;switch(t){case"style":u=Ea(l);break;case"script":u=Ta(l)}gt.has(u)||(l=B({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),gt.set(u,l),a.querySelector(n)!==null||t==="style"&&a.querySelector(yn(u))||t==="script"&&a.querySelector(mn(u))||(t=a.createElement("link"),Ml(t,"link",l),Tl(t),a.head.appendChild(t)))}}function O0(l,t){Jt.m(l,t);var e=ba;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ft(a)+'"][href="'+ft(l)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ta(l)}if(!gt.has(u)&&(l=B({rel:"modulepreload",href:l},t),gt.set(u,l),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(mn(u)))return}a=e.createElement("link"),Ml(a,"link",l),Tl(a),e.head.appendChild(a)}}}function R0(l,t,e){Jt.S(l,t,e);var a=ba;if(a&&l){var n=Ze(a).hoistableStyles,u=Ea(l);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(yn(u)))c.loading=5;else{l=B({rel:"stylesheet",href:l,"data-precedence":t},e),(e=gt.get(u))&&Fc(l,e);var f=i=a.createElement("link");Tl(f),Ml(f,"link",l),f._p=new Promise(function(y,v){f.onload=y,f.onerror=v}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Du(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function U0(l,t){Jt.X(l,t);var e=ba;if(e&&l){var a=Ze(e).hoistableScripts,n=Ta(l),u=a.get(n);u||(u=e.querySelector(mn(n)),u||(l=B({src:l,async:!0},t),(t=gt.get(n))&&Wc(l,t),u=e.createElement("script"),Tl(u),Ml(u,"link",l),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function B0(l,t){Jt.M(l,t);var e=ba;if(e&&l){var a=Ze(e).hoistableScripts,n=Ta(l),u=a.get(n);u||(u=e.querySelector(mn(n)),u||(l=B({src:l,async:!0,type:"module"},t),(t=gt.get(n))&&Wc(l,t),u=e.createElement("script"),Tl(u),Ml(u,"link",l),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Fr(l,t,e,a){var n=(n=Y.current)?zu(n):null;if(!n)throw Error(h(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Ea(e.href),e=Ze(n).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=Ea(e.href);var u=Ze(n).hoistableStyles,i=u.get(l);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(l,i),(u=n.querySelector(yn(l)))&&!u._p&&(i.instance=u,i.state.loading=5),gt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},gt.set(l,e),u||N0(n,l,e,i.state))),t&&a===null)throw Error(h(528,""));return i}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ta(e),e=Ze(n).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,l))}}function Ea(l){return'href="'+ft(l)+'"'}function yn(l){return'link[rel="stylesheet"]['+l+"]"}function Wr(l){return B({},l,{"data-precedence":l.precedence,precedence:null})}function N0(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ml(t,"link",e),Tl(t),l.head.appendChild(t))}function Ta(l){return'[src="'+ft(l)+'"]'}function mn(l){return"script[async]"+l}function kr(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+ft(e.href)+'"]');if(a)return t.instance=a,Tl(a),a;var n=B({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),Tl(a),Ml(a,"style",n),Du(a,e.precedence,l),t.instance=a;case"stylesheet":n=Ea(e.href);var u=l.querySelector(yn(n));if(u)return t.state.loading|=4,t.instance=u,Tl(u),u;a=Wr(e),(n=gt.get(n))&&Fc(a,n),u=(l.ownerDocument||l).createElement("link"),Tl(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ml(u,"link",a),t.state.loading|=4,Du(u,e.precedence,l),t.instance=u;case"script":return u=Ta(e.src),(n=l.querySelector(mn(u)))?(t.instance=n,Tl(n),n):(a=e,(n=gt.get(u))&&(a=B({},e),Wc(a,n)),l=l.ownerDocument||l,n=l.createElement("script"),Tl(n),Ml(n,"link",a),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Du(a,e.precedence,l));return t.instance}function Du(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(l,u.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Fc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function Wc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Cu=null;function $r(l,t,e){if(Cu===null){var a=new Map,n=Cu=new Map;n.set(e,a)}else n=Cu,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),n=0;n<e.length;n++){var u=e[n];if(!(u[Ma]||u[_l]||l==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=l+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function Ir(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function q0(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pr(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function G0(l,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ea(a.href),u=t.querySelector(yn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Mu.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=u,Tl(u);return}u=t.ownerDocument||t,a=Wr(a),(n=gt.get(n))&&Fc(a,n),u=u.createElement("link"),Tl(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ml(u,"link",a),e.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=Mu.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var kc=0;function H0(l,t){return l.stylesheets&&l.count===0&&Ru(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var a=setTimeout(function(){if(l.stylesheets&&Ru(l,l.stylesheets),l.unsuspend){var u=l.unsuspend;l.unsuspend=null,u()}},6e4+t);0<l.imgBytes&&kc===0&&(kc=62500*v0());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ru(l,l.stylesheets),l.unsuspend)){var u=l.unsuspend;l.unsuspend=null,u()}},(l.imgBytes>kc?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Ou=null;function Ru(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Ou=new Map,t.forEach(L0,l),Ou=null,Mu.call(l))}function L0(l,t){if(!(t.state.loading&4)){var e=Ou.get(l);if(e)var a=e.get(null);else{e=new Map,Ou.set(l,e);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=e.get(i)||a,u===a&&e.set(null,n),e.set(i,n),this.count++,a=Mu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var hn={$$typeof:Ol,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function Y0(l,t,e,a,n,u,i,c,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ku(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.hiddenUpdates=Ku(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ld(l,t,e,a,n,u,i,c,f,y,v,x){return l=new Y0(l,t,e,i,f,y,v,x,c),t=1,u===!0&&(t|=24),u=lt(3,null,null,t),l.current=u,u.stateNode=l,t=Mi(),t.refCount++,l.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:e,cache:t},Bi(u),l}function td(l){return l?(l=la,l):la}function ed(l,t,e,a,n,u){n=td(n),a.context===null?a.context=n:a.pendingContext=n,a=ae(t),a.payload={element:e},u=u===void 0?null:u,u!==null&&(a.callback=u),e=ne(l,a,t),e!==null&&(Jl(e,l,t),wa(e,l,t))}function ad(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function $c(l,t){ad(l,t),(l=l.alternate)&&ad(l,t)}function nd(l){if(l.tag===13||l.tag===31){var t=De(l,67108864);t!==null&&Jl(t,l,67108864),$c(l,67108864)}}function ud(l){if(l.tag===13||l.tag===31){var t=ut();t=wu(t);var e=De(l,t);e!==null&&Jl(e,l,t),$c(l,t)}}var Uu=!0;function j0(l,t,e,a){var n=S.T;S.T=null;var u=T.p;try{T.p=2,Ic(l,t,e,a)}finally{T.p=u,S.T=n}}function X0(l,t,e,a){var n=S.T;S.T=null;var u=T.p;try{T.p=8,Ic(l,t,e,a)}finally{T.p=u,S.T=n}}function Ic(l,t,e,a){if(Uu){var n=Pc(a);if(n===null)Lc(l,t,a,Bu,e),cd(l,a);else if(V0(n,l,t,e,a))a.stopPropagation();else if(cd(l,a),t&4&&-1<Q0.indexOf(l)){for(;n!==null;){var u=Ve(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ee(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Il(i);c.entanglements[1]|=f,i&=~f}Dt(u),(W&6)===0&&(hu=kl()+500,on(0))}}break;case 31:case 13:c=De(u,2),c!==null&&Jl(c,u,2),vu(),$c(u,2)}if(u=Pc(a),u===null&&Lc(l,t,a,Bu,e),u===n)break;n=u}n!==null&&a.stopPropagation()}else Lc(l,t,a,null,e)}}function Pc(l){return l=ti(l),lf(l)}var Bu=null;function lf(l){if(Bu=null,l=Qe(l),l!==null){var t=F(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=ml(t),l!==null)return l;l=null}else if(e===31){if(l=Ul(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Bu=l,null}function id(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dd()){case yf:return 2;case mf:return 8;case En:case Cd:return 32;case hf:return 268435456;default:return 32}default:return 32}}var tf=!1,he=null,ge=null,ve=null,gn=new Map,vn=new Map,Se=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(l,t){switch(l){case"focusin":case"focusout":he=null;break;case"dragenter":case"dragleave":ge=null;break;case"mouseover":case"mouseout":ve=null;break;case"pointerover":case"pointerout":gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function Sn(l,t,e,a,n,u){return l===null||l.nativeEvent!==u?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Ve(t),t!==null&&nd(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function V0(l,t,e,a,n){switch(t){case"focusin":return he=Sn(he,l,t,e,a,n),!0;case"dragenter":return ge=Sn(ge,l,t,e,a,n),!0;case"mouseover":return ve=Sn(ve,l,t,e,a,n),!0;case"pointerover":var u=n.pointerId;return gn.set(u,Sn(gn.get(u)||null,l,t,e,a,n)),!0;case"gotpointercapture":return u=n.pointerId,vn.set(u,Sn(vn.get(u)||null,l,t,e,a,n)),!0}return!1}function fd(l){var t=Qe(l.target);if(t!==null){var e=F(t);if(e!==null){if(t=e.tag,t===13){if(t=ml(e),t!==null){l.blockedOn=t,bf(l.priority,function(){ud(e)});return}}else if(t===31){if(t=Ul(e),t!==null){l.blockedOn=t,bf(l.priority,function(){ud(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Nu(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=Pc(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);li=a,e.target.dispatchEvent(a),li=null}else return t=Ve(e),t!==null&&nd(t),l.blockedOn=e,!1;t.shift()}return!0}function od(l,t,e){Nu(l)&&e.delete(t)}function Z0(){tf=!1,he!==null&&Nu(he)&&(he=null),ge!==null&&Nu(ge)&&(ge=null),ve!==null&&Nu(ve)&&(ve=null),gn.forEach(od),vn.forEach(od)}function qu(l,t){l.blockedOn===t&&(l.blockedOn=null,tf||(tf=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Z0)))}var Gu=null;function sd(l){Gu!==l&&(Gu=l,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Gu===l&&(Gu=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],n=l[t+2];if(typeof a!="function"){if(lf(a||e)===null)continue;break}var u=Ve(e);u!==null&&(l.splice(t,3),t-=3,Pi(u,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function Aa(l){function t(f){return qu(f,l)}he!==null&&qu(he,l),ge!==null&&qu(ge,l),ve!==null&&qu(ve,l),gn.forEach(t),vn.forEach(t);for(var e=0;e<Se.length;e++){var a=Se[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<Se.length&&(e=Se[0],e.blockedOn===null);)fd(e),e.blockedOn===null&&Se.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],u=e[a+1],i=n[Xl]||null;if(typeof u=="function")i||sd(e);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Xl]||null)c=i.formAction;else if(lf(n)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),sd(e)}}}function rd(){function l(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ef(l){this._internalRoot=l}Hu.prototype.render=ef.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(h(409));var e=t.current,a=ut();ed(e,a,l,t,null,null)},Hu.prototype.unmount=ef.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;ed(l.current,2,null,l,null,null),vu(),t[Xe]=null}};function Hu(l){this._internalRoot=l}Hu.prototype.unstable_scheduleHydration=function(l){if(l){var t=xf();l={blockedOn:null,target:l,priority:t};for(var e=0;e<Se.length&&t!==0&&t<Se[e].priority;e++);Se.splice(e,0,l),e===0&&fd(l)}};var dd=rl.version;if(dd!=="19.2.4")throw Error(h(527,dd,"19.2.4"));T.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(h(188)):(l=Object.keys(l).join(","),Error(h(268,l)));return l=E(t),l=l!==null?$(l):null,l=l===null?null:l.stateNode,l};var K0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{za=Lu.inject(K0),$l=Lu}catch{}}return xn.createRoot=function(l,t){if(!U(l))throw Error(h(299));var e=!1,a="",n=ps,u=xs,i=bs;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ld(l,1,!1,null,null,e,a,null,n,u,i,rd),l[Xe]=t.current,Hc(l),new ef(t)},xn.hydrateRoot=function(l,t,e){if(!U(l))throw Error(h(299));var a=!1,n="",u=ps,i=xs,c=bs,f=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),t=ld(l,1,!0,t,e??null,a,n,f,u,i,c,rd),t.context=td(null),e=t.current,a=ut(),a=wu(a),n=ae(a),n.callback=null,ne(e,n,a),e=a,t.current.lanes=e,Ca(t,e),Dt(t),l[Xe]=t.current,Hc(l),new Hu(t)},xn.version="19.2.4",xn}var Ed;function tm(){if(Ed)return uf.exports;Ed=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(rl){console.error(rl)}}return z(),uf.exports=lm(),uf.exports}var em=tm();function am(){const[z,rl]=Td.useState(null),k=[{id:1,question:"1. Explain Raster Scan and Random Scan Display. 👉 Draw diagram + Differences (VERY IMPORTANT)",answer:"📌 100% exam question type",codeExample:`
⭐ Raster Scan Display

✅ Simple Meaning

Raster scan display draws picture line by line from top to bottom, like TV screen scanning.

📌 Working

Screen divided into small dots → Pixels
Pixel data stored in Frame Buffer (memory)
Electron beam scans row by row


📊 Raster Scan Diagram

-------------------------
| → → → → → → → → → → → |
| → → → → → → → → → → → |
| → → → → → → → → → → → |
| → → → → → → → → → → → |
 -------------------------

 Scanning line by line (Top → Bottom)

✅ Features

✔ Used in modern monitors
✔ Supports filled shapes, images, shading
✔ Cheaper technology



⭐ Random Scan Display (Vector Display)

✅ Simple Meaning

Random scan display draws picture only where lines are required (not full screen).

📌 Working

Stores line drawing instructions
Beam directly moves to draw lines
Draws one line at a time


📊 Random Scan Diagram

Screen

   \\        /
    \\      /
     \\____/
     /    \\
    /      \\

Beam directly draws required lines only


✅ Features

✔ Very smooth lines
✔ Used in old CAD systems
✔ Good for wireframe drawings



⭐ ⭐ Difference Between Raster Scan & Random Scan (VERY IMPORTANT)

| Raster Scan                 | Random Scan                  |
| --------------------------- | ---------------------------- |
| Line by line scanning       | Draws only required lines    |
| Pixel based picture         | Line based picture           |
| Uses Frame Buffer memory    | Stores line drawing commands |
| Slower for line drawing     | Faster for line drawing      |
| Low cost                    | High cost                    |
| Good for images             | Best for line drawings       |
| Used in TV, modern monitors | Used in old CAD systems      |


⭐ Easy Memory Trick 🧠

👉 Raster = Rows scanning
👉 Random = Direct line drawing


⭐ One Line Exam Definition

✅ Raster Scan:
Display where image is drawn using pixels scanned line by line.

✅ Random Scan:
Display where electron beam draws only required lines of picture.
      
      `},{id:2,question:"2. Explain DDA Line Drawing Algorithm with example.",answer:"📌 Most repeated question",codeExample:`
⭐ DDA Line Drawing Algorithm
✅ Simple Meaning

DDA (Digital Differential Analyzer) is a line drawing algorithm used to draw a straight line on screen by 
calculating intermediate points between two endpoints.

It works by calculating small steps in x or y direction and finding the next pixel position.



⭐ Formula Used

For line between two points:
(x₁, y₁) → (x₂, y₂)


Step 1: Calculate Differences
Δx = x2 – x1
Δy = y2 – y1


Step 2: Find max number 
Steps = max(|Δx|, |Δy|)


Step 3: Find increment

Xinc = Δx / Steps
Yinc = Δy / Steps


step 3: increment with X and Y

x = x + Xinc
y = y + Yinc

👉 Each calculated value is rounded to nearest integer pixel.
These incremental calculations are the base of DDA line generation. 


---------------------------------------------------------


⭐ Steps of DDA Algorithm

Step 1

Input starting point (x₁, y₁) and ending point (x₂, y₂)


Step 2

Calculate
Δx and Δy


Step 3
Find number of steps

Steps = max(|Δx|, |Δy|)


Step 4
Find increment

Xinc = Δx / Steps
Yinc = Δy / Steps


Step 5

Plot first point


Step 6

Repeat steps times
Add increments and plot next point


---------------------------------------------------------


⭐ Example (Very Important)

Given

(x₁, y₁) = (5, 6)
(x₂, y₂) = (13, 10)

Step 1
Δx = 13 – 5 = 8
Δy = 10 – 6 = 4


Step 2
Steps = max(8,4) = 8


Step 3
Xinc = 8 / 8 = 1
Yinc = 4 / 8 = 0.5


Step 4 Plot Points

| Step  | X  | Y        |
| ----- | -- | -------- |
| Start | 5  | 6        |
| 1     | 6  | 6.5 → 7  |
| 2     | 7  | 7        |
| 3     | 8  | 7.5 → 8  |
| 4     | 9  | 8        |
| 5     | 10 | 8.5 → 9  |
| 6     | 11 | 9        |
| 7     | 12 | 9.5 → 10 |
| 8     | 13 | 10       |



⭐ Advantages of DDA

✅ Simple and easy to implement
✅ Easy mathematical calculation
✅ Faster than basic line equation method
✅ Less complex logic


⭐ Disadvantages of DDA

❌ Uses floating point calculation
❌ Uses round function → increases time
❌ Less accurate than Bresenham
❌ Line may not be perfectly smooth


⭐ One Line Exam Definition

DDA is an incremental scan conversion algorithm that calculates intermediate points using slope to draw 
a straight line.

      `},{id:3,question:"3. Explain Bresenham’s Line Drawing Algorithm with example. Decision parameter Comparison with DDA ",answer:"📌 High scoring + numerical example",codeExample:`
⭐ Bresenham’s Line Drawing Algorithm
✅ Simple Meaning

Bresenham’s Line Drawing Algorithm is an efficient algorithm used to draw a straight line using only 
integer calculations.

It avoids floating point operations and rounding, so it is faster and more accurate than DDA.


⭐ Basic Idea

Instead of calculating slope (m), it uses a Decision Parameter (P) to decide which pixel to choose next.

At each step, we choose between:

  East pixel (E)
  North-East pixel (NE)

depending on the value of the decision parameter.



⭐ Decision Parameter Formula (For |m| < 1)

Given line from

      (x0​,y0​)→(xn​,yn​)


Step 1: Calculate

      Δx=xn​−x0​
      Δy=yn​−y0
      
      
Step 2: Initial Decision Parameter

      P0​=2Δy−Δx


Step 3: Update Rules

if Pk < 0
      Pk+1​=Pk​+2Δy

👉 Choose E pixel
👉 x increases by 1
👉 y remains same


if Pk >= 0
      Pk+1​=Pk​+2Δy−2Δx

👉 Choose NE pixel
👉 x increases by 1
👉 y increases by 1


⭐ Steps of Algorithm

1️⃣ Input starting and ending points
2️⃣ Calculate Δx and Δy
3️⃣ Calculate initial decision parameter
4️⃣ Plot first point
5️⃣ For each x:
If P < 0 → choose E
Else → choose NE
  6️⃣ Repeat until end point reached




⭐ Numerical Example (Very Important)

Given:

      (x0​,y0​)=(5,6)
      (xn​,yn​)=(13,10)

  
Step 1: Calculate Differences
      Δx=13−5=8
      Δy=10−6=4


Step 2: Initial Decision Parameter

      P0​=2(4)−8
      P0​=8−8=0


Step 3: Constants

      2Δy=8
      2Δy−2Δx=8−16=−8


Step 4: Iteration Table

| Step  | Pk            | Decision   | Next Point |
| ----- | ------------- | ---------- | ---------- |
| Start | 0             | P ≥ 0 → NE | (6,7)      |
| 1     | 0 + (-8) = -8 | P < 0 → E  | (7,7)      |
| 2     | -8 + 8 = 0    | NE         | (8,8)      |
| 3     | 0 + (-8) = -8 | E          | (9,8)      |
| 4     | -8 + 8 = 0    | NE         | (10,9)     |
| 5     | 0 + (-8) = -8 | E          | (11,9)     |
| 6     | -8 + 8 = 0    | NE         | (12,10)    |
| 7     | 0 + (-8) = -8 | E          | (13,10)    |



⭐ Advantages of Bresenham

✔ Uses only integer calculations
✔ No floating point
✔ Faster than DDA
✔ More accurate
✔ Less memory usage

⭐ Disadvantages

❌ Slightly complex logic
❌ Basic version works for |m| < 1 (needs modification for other slopes)



⭐ Comparison: Bresenham vs DDA (⭐ VERY IMPORTANT)

| DDA Algorithm                  | Bresenham Algorithm     |
| ------------------------------ | ----------------------- |
| Uses floating point arithmetic | Uses integer arithmetic |
| Uses rounding function         | No rounding required    |
| Less accurate                  | More accurate           |
| Slightly slower                | Faster                  |
| Easy to understand             | Slightly complex        |
| Uses slope (m)                 | Uses decision parameter |



⭐ Short Exam Definition

Bresenham’s algorithm is an incremental scan conversion algorithm that uses a decision parameter to 
determine the next pixel using integer calculations.

      `},{id:4,question:"4. Explain Midpoint Circle Algorithm with example.",answer:"📌 Very important circle algorithm",codeExample:`
⭐ Midpoint Circle Algorithm
✅ Simple Meaning

Midpoint Circle Algorithm is used to draw a circle using only integer calculations.

It is based on the circle equation:
      x2+y2=r2

Instead of calculating every point, it checks the midpoint between two possible pixels and decides which 
pixel is closer to the circle.



⭐ Basic Idea

For each step, we choose between:

  East (E) → (x+1, y)
  South-East (SE) → (x+1, y-1)

Decision depends on the Decision Parameter (P).

Because circle is symmetric, we calculate points for one octant only and use symmetry to get remaining 7 
octants.



⭐ Initial Conditions

For circle centered at (0,0):

Starting point:

      (x0​,y0​)=(0,r)

Initial decision parameter:

      P0​=1−r


⭐ Decision Parameter Update

If Pk​<0

👉 Midpoint is inside circle
Choose East pixel

      Pk+1​=Pk​+2xk​+3


If Pk​≥0

👉 Midpoint is outside circle
Choose South-East pixel

      Pk+1​=Pk​+2xk​−2yk​+5


Repeat until x≥y



⭐ Steps of Algorithm

1️⃣ Input radius r and center (xc, yc)
2️⃣ Set x = 0, y = r
3️⃣ Compute initial P = 1 − r
4️⃣ Plot 8 symmetric points
5️⃣ While x < y:
  x = x + 1
  If P < 0 → update using first formula
  Else → y = y − 1 and update using second formula
  6️⃣ Repeat



⭐ Numerical Example (Very Important)

Given:

Radius r = 10
Center = (0,0)


Step 1: Initial Values

  x0​=0
  y0​=10
  P0​=1−10=−9


Step 2: Iterations

| Step | x | y  | P  | Decision          |
| ---- | - | -- | -- | ----------------- |
| 0    | 0 | 10 | -9 | P<0 → E           |
| 1    | 1 | 10 | -6 | E                 |
| 2    | 2 | 10 | -1 | E                 |
| 3    | 3 | 10 | 6  | SE                |
| 4    | 4 | 9  | 1  | SE                |
| 5    | 5 | 8  | 2  | SE                |
| 6    | 6 | 7  | 9  | Stop (x ≥ y soon) |

Now reflect these points in all 8 octants.


⭐ 8-Way Symmetry of Circle

If calculated point is (x, y)

Other points are:

(x,y)
(y,x)
(−x,y)
(−y,x)
(−x,−y)
(−y,−x)
(x,−y)
(y,−x)




⭐ Advantages

✔ Uses only integer arithmetic
✔ Faster than direct equation method
✔ Efficient for raster display
✔ Easy to implement

⭐ Disadvantages

❌ Slight inaccuracy due to pixel approximation
❌ Circle may not be perfectly smooth


⭐ Short Exam Definition

Midpoint Circle Algorithm is an incremental algorithm that uses a decision parameter to determine the 
nearest pixel to form a circle using 8-way symmetry.


`},{id:5,question:"5. Explain Midpoint Ellipse Algorithm (steps + decision parameter).",answer:"📌 10–12 mark long answer possibility",codeExample:`
⭐ Midpoint Ellipse Algorithm
✅ Simple Meaning

The Midpoint Ellipse Algorithm is used to draw an ellipse using an incremental method.

It is similar to the midpoint circle algorithm but works with the ellipse equation:

      x2        y2
      _    +    _   =  1
      rx2      ry2
      

It uses a decision parameter to decide the next pixel position.
The ellipse uses 4-way symmetry (not 8 like circle).
      


⭐ Basic Idea

The first quadrant of ellipse is divided into two regions:

🔹 Region 1

Slope > -1
Move mainly in x direction

🔹 Region 2

Slope < -1
Move mainly in y direction

After calculating points in first quadrant, reflect them in other 3 quadrants.



⭐ Initial Setup

Given:
      rz = x-radius
      ry = y-radius
      Center = (x_c , y_c)
      
Start point:
      (x0​,y0​)=(0,ry​)



⭐ Decision Parameter – Region 1
Initial decision parameter:

      P1 0​​= ry2​ − rx2 ​ry ​+ 1 ​rx2​
                           -
                           4
                     

🔹 Region 1 Steps
While:
      2ry2​x<2rx2​y

if P1​<0

👉 Midpoint inside ellipse
Choose (x+1, y)

      P1(k+1)​=P1k​+2ry2​x+ry2​



if P1​≥0

👉 Midpoint outside ellipse
Choose (x+1, y-1)

      P1(k+1)​=P1k​+2ry2​x−2rx2​y+ry2​




⭐ Decision Parameter – Region 2

Initial value:
              
    P2 0 = ry2 ​(x+1/2​)^2 + rx2 ​(y−1)^2 − rx2 ​ry2​




🔹 Region 2 Steps

While y ≥ 0:


if P2​>0

👉 Choose (x, y-1)

  P2(k+1)​=P2k​−2rx2​y+rx2​


if P2​≤0

👉 Choose (x+1, y-1)

  P2(k+1)​=P2k​+2ry2​x−2rx2​y+rx2​



⭐ Complete Steps of Algorithm

1️⃣ Input rx,ry and center (x_c , y_c)
2️⃣ Start at (0 , r_y)
3️⃣ Calculate initial P₁
4️⃣ Process Region 1
5️⃣ Calculate initial P₂
6️⃣ Process Region 2
7️⃣ Apply 4-way symmetry



⭐ 4-Way Symmetry

If calculated point is (x, y)


Other points are:

(x,y)
(−x,y)
(x,−y)
(−x,−y)

Add center coordinates:

x=x+xc​
y=y+yc​



⭐ Advantages

✔ Efficient incremental method
✔ Uses decision parameter
✔ Suitable for raster display
✔ No floating slope calculation

⭐ Disadvantages

❌ Slight pixel approximation
❌ More complex than circle algorithm

⭐ Short Exam Definition

Midpoint Ellipse Algorithm is an incremental scan conversion algorithm that uses a decision parameter to 
generate ellipse points in two regions using 4-way symmetry.



----------------------------------------------------------------------

example:

⭐ Midpoint Ellipse Algorithm – Numerical Example with Tables
🔢 Given:

rx = 8
ry = 6
Center = (0,0)


rx² = 64
ry² = 36


⭐ Initial Values
x = 0
y = 6

Initial Decision Parameter (Region 1)

P1=ry2−rx2⋅ry+(1/4)rx2
P1=36−(64×6)+16
P1=36−384+16
P1=−332


⭐ Region 1 Table

Condition:

2ry2x<2rx2y


| Iteration | x | y | P1   | Decision          |
| --------- | - | - | ---- | ----------------- |
| 0         | 0 | 6 | -332 | P1<0 → (x+1, y)   |
| 1         | 1 | 6 | -224 | P1<0 → (x+1, y)   |
| 2         | 2 | 6 | -44  | P1<0 → (x+1, y)   |
| 3         | 3 | 6 | 208  | P1≥0 → (x+1, y-1) |
| 4         | 4 | 5 | -108 | P1<0 → (x+1, y)   |
| 5         | 5 | 5 | 288  | P1≥0 → (x+1, y-1) |
| 6         | 6 | 4 | 148  | P1≥0 → (x+1, y-1) |
| 7         | 7 | 3 | 348  | Exit Region 1     |




⭐ Region 2 Initial Decision Parameter

Using last point from Region 1:

x = 7
y = 3


P2=ry2(x+1/2)2+rx2(y−1)2−rx2ry2
P2=36(7.5)2+64(2)2−2304
P2=2025+256−2304
P2=−23


⭐ Region 2 Table

Condition:

y>0

| Iteration | x | y | P2   | Decision          |
| --------- | - | - | ---- | ----------------- |
| 0         | 7 | 3 | -23  | P2≤0 → (x+1, y-1) |
| 1         | 8 | 2 | 233  | P2>0 → (x, y-1)   |
| 2         | 8 | 1 | 169  | P2>0 → (x, y-1)   |
| 3         | 8 | 0 | Stop | End               |



⭐ 4-Way Symmetry (Very Important for Exam)

For each calculated point (x, y):

| Symmetry Points |
| --------------- |
| ( x,  y)        |
| (-x,  y)        |
| ( x, -y)        |
| (-x, -y)        |


If center is (xc, yc):

x = x + xc
y = y + yc


⭐ Final Output Points (First Quadrant)

Region 1:

(0,6)
(1,6)
(2,6)
(3,6)
(4,5)
(5,5)
(6,4)
(7,3)


Region 2:

(8,2)
(8,1)
(8,0)


⭐ Exam Tip ⭐

✔ Draw neat table
✔ Show at least 4–5 iterations
✔ Write symmetry formula
✔ Mention 2 regions clearly

You will get full marks 🔥

`},{id:6,question:"6. short questions",answer:"",codeExample:`
🧠 2 MARK / MCQ – JUST READ

Pixel = Smallest screen element
Frame buffer = Stores intensity values
Resolution = Number of pixels
Refresh rate = ≥ 60 times per second
Equation of circle → x² + y² = r²
DDA uses → floating point
Bresenham uses → integer arithmetic
      
      `},{id:11,question:"11. Explain Scan Line Polygon Fill Algorithm with steps and diagram.  Must write: Steps of algorithm, Intersection points, Filling pairs of pixels",answer:"📌 Very common exam question.",codeExample:`
⭐ What is a Polygon?
✅ Simple Meaning

A polygon is a closed shape made using straight lines.
The lines connect to form a closed figure.


Examples

Triangle (3 sides)

   /\\
  /  \\
 /____\\

 Rectangle (4 sides)
 _______
|       |
|       |
|_______|

Pentagon (5 sides)

   /\\
  /  \\
 /    \\
|      |
 \\____/


👉 In computer graphics, polygons are used to draw shapes like:

triangle
rectangle
square
pentagon
hexagon
      

-------------------------------------


⭐ What is Polygon Filling?

Sometimes we want to color the inside of the shape.

Example:

Before filling

 _______
|       |
|       |
|_______|


After filling
 _______
|#######|
|#######|
|#######|

The algorithm fills the inside pixels.


-------------------------------------


⭐ Scan Line Polygon Fill (Very Simple Idea)

Imagine a horizontal line moving from top to bottom.

Polygon

   /\\ 
  /  \\
 /____\\

Scan line →

--------

The scan line cuts the polygon edges.
Where it cuts is called intersection points.


⭐ Example

Scan line

--------x1------x2--------

x1 = first intersection
x2 = second intersection

Pixels between them are filled.

--------######--------
      

-------------------------------------


⭐ If There Are 4 Intersections

--------x1---x2---x3---x4--------

Fill in pairs:

Fill x1 → x2
Skip x2 → x3
Fill x3 → x4

Result:

----#####----#####----


-------------------------------------


⭐ Simple Steps

1️⃣ Draw horizontal scan line
2️⃣ Find where it touches polygon edges
3️⃣ These points are intersection points
4️⃣ Fill pixels between pairs



⭐ Very Easy Example
Polygon

     /\\
    /  \\
---/----\\---
   \\    /
    \\__/

Scan line touches edges at:

x1        x2

Fill:

###########


⭐ One Line Definition (Exam)

A polygon is a closed shape made of straight lines, and the scan line algorithm fills the inside of the 
polygon using horizontal scanning lines.


final output like this:

        /\\
       /  \\
      /    \\
   x1/######\\x2
    /        \\
   /          \\
  /____________\\

`},{id:12,question:"12. Explain Flood Fill Algorithm with algorithm and advantages/disadvantages.  Include: 4-connected method, 8-connected method, Algorithm steps",answer:"📌 Frequently asked question.",codeExample:`
Flood Fill Algorithm

The Flood Fill Algorithm works by starting from a seed pixel and spreading to neighboring pixels that have 
the same target color until the boundary is reached.

Basic Idea

1. Start from a seed point (x, y).
2. Check if the pixel has the target color.
3. Change it to the replacement color.
4. Repeat the process for neighboring pixels.
5. Stop when pixels are different from the target color or already filled.
      

Types of Connectivity

Flood fill can be implemented using two connectivity methods.


1. 4-Connected Method

In the 4-connected method, a pixel is connected to four neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)


Diagram

       (x,y-1)
          |
(x-1,y) (x,y) (x+1,y)
          |
       (x,y+1)


Characteristics

  Checks only horizontal and vertical neighbors.
  Diagonal pixels are not considered connected.


Algorithm (4-Connected Flood Fill):

FloodFill4(x, y, targetColor, replacementColor)

1. If pixel(x, y) ≠ targetColor
       return

2. Set pixel(x, y) = replacementColor

3. FloodFill4(x+1, y, targetColor, replacementColor)
4. FloodFill4(x-1, y, targetColor, replacementColor)
5. FloodFill4(x, y+1, targetColor, replacementColor)
6. FloodFill4(x, y-1, targetColor, replacementColor)
      

-----------------------------------

2. 8-Connected Method

In the 8-connected method, a pixel is connected to eight neighbors, including diagonals.

Neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)
Top-left (x−1, y−1)
Top-right (x+1, y−1)
Bottom-left (x−1, y+1)
Bottom-right (x+1, y+1)


Diagram

(x-1,y-1) (x,y-1) (x+1,y-1)
(x-1,y)   (x,y)   (x+1,y)
(x-1,y+1) (x,y+1) (x+1,y+1)


Characteristics

  Includes diagonal connectivity.
  Covers more pixels faster than the 4-connected method.


Algorithm (8-Connected Flood Fill):

FloodFill8(x, y, targetColor, replacementColor)

1. If pixel(x, y) ≠ targetColor
       return

2. Set pixel(x, y) = replacementColor

3. FloodFill8(x+1, y, targetColor, replacementColor)
4. FloodFill8(x-1, y, targetColor, replacementColor)
5. FloodFill8(x, y+1, targetColor, replacementColor)
6. FloodFill8(x, y-1, targetColor, replacementColor)

7. FloodFill8(x+1, y+1, targetColor, replacementColor)
8. FloodFill8(x-1, y-1, targetColor, replacementColor)
9. FloodFill8(x+1, y-1, targetColor, replacementColor)
10. FloodFill8(x-1, y+1, targetColor, replacementColor)


Advantages of Flood Fill Algorithm

Simple to understand and implement.
Efficient for filling large connected areas.
Used in graphics editors and image processing applications.
Works well for region filling in computer graphics.


Disadvantages of Flood Fill Algorithm

High memory usage when recursion is deep.
Stack overflow risk for large images with recursive implementation.
Slow for very large regions because many pixels are checked.
Sometimes leaks outside boundaries if the region is not perfectly closed.


✅ Summary

| Method      | Connectivity                     | Neighbor Count |
| ----------- | -------------------------------- | -------------- |
| 4-connected | Horizontal + Vertical            | 4              |
| 8-connected | Horizontal + Vertical + Diagonal | 8              |

`},{id:13,question:"13. Explain Boundary Fill Algorithm with 4-connected and 8-connected method.  Write: Definition, Steps, Example",answer:"📌 Important for theory + algorithm",codeExample:`
Boundary Fill Algorithm
Definition

The Boundary Fill Algorithm is a computer graphics algorithm used to fill a region with a specified color 
starting from a seed point until a boundary color is reached.

The algorithm stops filling when it encounters the boundary color of the region.

It is commonly used in paint and drawing applications to color enclosed shapes.


Working Principle

1. A seed point inside the region is selected.
2. The algorithm checks the color of the pixel.
3. If the pixel is not the boundary color and not already filled, it fills the pixel.
4. The algorithm then repeats the process for neighboring pixels.
5. The process continues until the boundary color is encountered.


--------------------------------------


4-Connected Boundary Fill Method

In the 4-connected method, the algorithm checks four neighboring pixels:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)


Steps (Algorithm):

BoundaryFill4(x, y, fillColor, boundaryColor)

1. If pixel(x, y) is not boundaryColor 
   and pixel(x, y) is not fillColor then

2. Set pixel(x, y) = fillColor

3. Call BoundaryFill4(x+1, y, fillColor, boundaryColor)
4. Call BoundaryFill4(x-1, y, fillColor, boundaryColor)
5. Call BoundaryFill4(x, y+1, fillColor, boundaryColor)
6. Call BoundaryFill4(x, y-1, fillColor, boundaryColor)


Neighbor Structure

       (x,y-1)
          |
(x-1,y) (x,y) (x+1,y)
          |
       (x,y+1)


   
8-Connected Boundary Fill Method

In the 8-connected method, the algorithm checks eight neighboring pixels including diagonals.

Neighbors:

Left (x−1, y)
Right (x+1, y)
Up (x, y−1)
Down (x, y+1)
Top-left (x−1, y−1)
Top-right (x+1, y−1)
Bottom-left (x−1, y+1)
Bottom-right (x+1, y+1)


Steps (Algorithm):

BoundaryFill8(x, y, fillColor, boundaryColor)

1. If pixel(x, y) is not boundaryColor 
   and pixel(x, y) is not fillColor then

2. Set pixel(x, y) = fillColor

3. BoundaryFill8(x+1, y, fillColor, boundaryColor)
4. BoundaryFill8(x-1, y, fillColor, boundaryColor)
5. BoundaryFill8(x, y+1, fillColor, boundaryColor)
6. BoundaryFill8(x, y-1, fillColor, boundaryColor)

7. BoundaryFill8(x+1, y+1, fillColor, boundaryColor)
8. BoundaryFill8(x-1, y-1, fillColor, boundaryColor)
9. BoundaryFill8(x+1, y-1, fillColor, boundaryColor)
10. BoundaryFill8(x-1, y+1, fillColor, boundaryColor)


Neighbor Structure

(x-1,y-1) (x,y-1) (x+1,y-1)
(x-1,y)   (x,y)   (x+1,y)
(x-1,y+1) (x,y+1) (x+1,y+1)


Example

Suppose we have a circle drawn with a black boundary and the inside is white.

  Boundary color = Black
  Fill color = Blue
  Seed point = Any pixel inside the circle

Steps:

1. Select a pixel inside the circle.
2. Check whether it is boundary color.
3. Fill it with blue.
4. Repeat for neighboring pixels.
5. Stop when black boundary pixels are reached.

Result:
The entire region inside the circle becomes blue while the boundary remains black.


✅ Summary

| Method      | Neighbors Checked | Description                                      |
| ----------- | ----------------- | ------------------------------------------------ |
| 4-Connected | 4                 | Checks only horizontal and vertical pixels       |
| 8-Connected | 8                 | Checks horizontal, vertical, and diagonal pixels |

      `},{id:14,question:"14. Difference Between Flood Fill and Boundary Fill",answer:"",codeExample:`
1️⃣ Flood Fill Algorithm

Flood Fill looks at the color inside the shape.

Example:

Before fill

########
#      #
#      #
#      #
########

Inside color = white


If you click inside with red, it fills all white pixels.

########
#RRRRRR#
#RRRRRR#
#RRRRRR#
########

👉 It fills all connected pixels of the same color.


2️⃣ Boundary Fill Algorithm

Boundary Fill looks at the border color.

Example:

Boundary color = #

########
#      #
#      #
#      #
########


When filling starts:

It keeps filling until it touches # (boundary).
It stops at the border.

      
Easy Trick to Remember

🟢 Flood Fill → checks INSIDE color
🔵 Boundary Fill → checks BORDER color



1️⃣ Flood Fill Algorithm

Idea: Fill all connected pixels having the same interior color.

Algorithm

1. Start with a seed point (x, y) inside the region.
2. Check the color of the pixel.
3. If the pixel color = old color, change it to new color.
4. Repeat the process for neighbor pixels:

    (x+1, y)
    (x-1, y)
    (x, y+1)
    (x, y-1)

5. Continue until all connected pixels of the old color are filled.


Short Definition (Exam)

Flood Fill: A filling algorithm that replaces all connected pixels of the same interior color starting from a 
seed point.



2️⃣ Boundary Fill Algorithm

Idea: Fill the region until the boundary color is reached.

Algorithm

1. Start with a seed point (x, y) inside the region.
2. Check the pixel color.
3. If pixel color ≠ boundary color and ≠ fill color, then:
    Change it to fill color.
4. Repeat for neighboring pixels:

(x+1, y)
(x-1, y)
(x, y+1)
(x, y-1)

5. Stop when boundary color is reached.



Short Definition (Exam)

Boundary Fill: A filling algorithm that fills a region until a specified boundary color is encountered.


3️⃣ Difference Between Flood Fill and Boundary Fill

| Flood Fill Algorithm                | Boundary Fill Algorithm              |
| ------------------------------------| -------------------------------------|
| Uses interior color                 | Uses boundary color                  |
| Replaces pixels of the same color   | Stops when boundary color is reached |
| Works when region has uniform color | Works when region has clear border   |
| Does not need boundary color        | Requires boundary color              |

`},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. DDA Line Drawing Algorithm",answer:"",codeExample:`
#include <GL/glut.h>
#include <math.h>

void drawDDA(int x1, int y1, int x2, int y2) {
    float dx = x2 - x1;
    float dy = y2 - y1;
    float steps = (fabs(dx) > fabs(dy)) ? fabs(dx) : fabs(dy);

    float Xinc = dx / steps;
    float Yinc = dy / steps;

    float x = x1;
    float y = y1;

    glBegin(GL_POINTS);
    for (int i = 0; i <= (int)steps; i++) {
        glVertex2i(round(x), round(y));
        x += Xinc;
        y += Yinc;
    }
    glEnd();
    glFlush();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    // Draw a line from (50, 100) to (300, 250)
    drawDDA(50, 100, 300, 250);
}

void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Set background color to black
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(0, 500, 0, 500); // Set coordinate system
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("DDA Line Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `},{id:2.2,question:"2. Bresenham's Line Drawing Algorithm",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdlib.h>

/* Bresenham Line Drawing Algorithm */
void drawLine(int x0, int y0, int x1, int y1) {
    int dx = x1 - x0;
    int dy = y1 - y0;
    int p = 2 * dy - dx; // Initial decision parameter P0 = 2Δy - Δx
    int x = x0;
    int y = y0;

    glBegin(GL_POINTS);
    // Step 2: Plot the first point
    glVertex2i(x, y);

    // Step 5: Repeat Δx times
    for (int k = 0; k < dx; k++) {
        if (p < 0) {
            // Decision: Choose East pixel
            x = x + 1;
            p = p + 2 * dy;
        } else {
            // Decision: Choose North-East pixel
            x = x + 1;
            y = y + 1;
            p = p + 2 * dy - 2 * dx;
        }
        glVertex2i(x, y); // Plot next point
    }
    glEnd();
}

/* Display callback */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Set line color to Red

    // Example: Line from (50, 100) to (300, 250)
    drawLine(50, 100, 300, 250);
    glFlush();
}

/* Initialize OpenGL */
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500); // 2D coordinate system setup
}

/* Main function */
int main(int argc, char **argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Bresenham Line Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}



      
      `},{id:3.3,question:"3. Draw a circle using the Midpoint Circle Algorithm.",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

// Circle center and radius
int xc = 0, yc = 0, r;

/* Function to plot 8 symmetric points of the circle */
void plotPoints(int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glVertex2i(xc + y, yc + x);
    glVertex2i(xc - y, yc + x);
    glVertex2i(xc + y, yc - x);
    glVertex2i(xc - y, yc - x);
    glEnd();
}

/* Midpoint Circle Algorithm */
void drawCircle() {
    int x = 0;
    int y = r;
    int p = 1 - r; // Initial decision parameter

    plotPoints(x, y);

    while (x < y) {
        x++;
        if (p < 0) {
            p = p + 2 * x + 1;
        } else {
            y--;
            p = p + 2 * (x - y) + 1;
        }
        plotPoints(x, y);
    }
}

/* Display function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red color for the circle
    glPointSize(2.0);         // Makes the line thicker

    drawCircle();
    glFlush();
}

/* Initialize OpenGL settings */
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(-200, 200, -200, 200); // 2D coordinate system centered at (0,0)
}

/* Main function */
int main(int argc, char** argv) {
    printf("Enter radius: ");
    if (scanf("%d", &r) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Midpoint Circle Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}


      `},{id:4.4,question:"4. Implement Bresenham’s circle drawing algorithm to generate a circle.",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

int radius;

/* Function to plot 8-way symmetric points */
void plotCirclePoints(int xc, int yc, int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glVertex2i(xc + y, yc + x);
    glVertex2i(xc - y, yc + x);
    glVertex2i(xc + y, yc - x);
    glVertex2i(xc - y, yc - x);
    glEnd();
}

/* Bresenham's Circle Drawing Algorithm */
void drawCircle(int xc, int yc, int r) {
    int x = 0;
    int y = r;
    int d = 3 - 2 * r; // Initial decision parameter

    plotCirclePoints(xc, yc, x, y);

    while (x <= y) {
        x++;
        if (d < 0) {
            d = d + 4 * x + 6;
        } else {
            y--;
            d = d + 4 * (x - y) + 10;
        }
        plotCirclePoints(xc, yc, x, y);
    }
}

/* Display Function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red color for the circle
    glPointSize(2.0);

    drawCircle(0, 0, radius); // Draw circle at origin (0,0)
    glFlush();
}

/* Initialization */
void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Black background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-200, 200, -200, 200); // Set coordinate system
}

/* Main Function */
int main(int argc, char** argv) {
    printf("Enter the radius of the circle: ");
    if (scanf("%d", &radius) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Bresenham Circle Drawing Algorithm");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `},{id:5.5,question:"5. Draw an ellipse using the Midpoint Ellipse Algorithm.",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>
#include <math.h>

int rx, ry, xc = 0, yc = 0;

/* Function to plot 4 symmetric points of the ellipse */
void plotPoints(int x, int y) {
    glBegin(GL_POINTS);
    glVertex2i(xc + x, yc + y);
    glVertex2i(xc - x, yc + y);
    glVertex2i(xc + x, yc - y);
    glVertex2i(xc - x, yc - y);
    glEnd();
}

/* Midpoint Ellipse Algorithm */
void midpointEllipse() {
    float dx, dy, d1, d2, x, y;
    x = 0;
    y = ry;

    // Initial decision parameter for Region 1
    d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx);
    dx = 2 * ry * ry * x;
    dy = 2 * rx * rx * y;

    // -------- Region 1 --------
    while (dx < dy) {
        plotPoints(x, y);
        if (d1 < 0) {
            x++;
            dx = dx + (2 * ry * ry);
            d1 = d1 + dx + (ry * ry);
        } else {
            x++;
            y--;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d1 = d1 + dx - dy + (ry * ry);
        }
    }

    // Initial decision parameter for Region 2
    d2 = ((ry * ry) * ((x + 0.5) * (x + 0.5))) +
         ((rx * rx) * ((y - 1) * (y - 1))) -
         (rx * rx * ry * ry);

    // -------- Region 2 --------
    while (y >= 0) {
        plotPoints(x, y);
        if (d2 > 0) {
            y--;
            dy = dy - (2 * rx * rx);
            d2 = d2 + (rx * rx) - dy;
        } else {
            y--;
            x++;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d2 = d2 + dx - dy + (rx * rx);
        }
    }
}

/* Display function */
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 1.0, 1.0); // White ellipse
    midpointEllipse();
    glFlush();
}

/* Initialization */
void init() {
    glClearColor(0.0, 0.0, 0.0, 1.0); // Black background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-500, 500, -500, 500); // 2D coordinate system
}

/* Main function */
int main(int argc, char** argv) {
    printf("Enter rx: ");
    if (scanf("%d", &rx) != 1) return 1;
    printf("Enter ry: ");
    if (scanf("%d", &ry) != 1) return 1;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(800, 800);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Midpoint Ellipse Algorithm - OpenGL");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      
      `},{id:6.6,question:"6. Scan-line",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>
#include <stdlib.h>

int x[10], y[10];   // Polygon vertices
int n = 4;          // Number of vertices

// Function to draw a pixel
void drawPixel(int px, int py) {
    glBegin(GL_POINTS);
    glVertex2i(px, py);
    glEnd();
}

// Scan-line filling function
void scanline() {
    int i, j, k;
    int ymin = 500, ymax = 0;
    int interx[10];

    // Find ymin and ymax of the polygon
    for (i = 0; i < n; i++) {
        if (y[i] < ymin) ymin = y[i];
        if (y[i] > ymax) ymax = y[i];
    }

    // Move scanline from ymin to ymax
    for (int scan = ymin; scan <= ymax; scan++) {
        k = 0; // Reset intersection counter

        // Check each edge for intersection with the current scanline
        for (i = 0; i < n; i++) {
            int next = (i + 1) % n;

            // Ignore horizontal edges to avoid division by zero
            if (y[i] == y[next]) continue;

            // Check if scanline intersects the edge
            if (scan >= (y[i] < y[next] ? y[i] : y[next]) &&
                scan < (y[i] > y[next] ? y[i] : y[next])) {
                
                // Calculate x-intersection using the line equation
                interx[k] = x[i] + (float)(scan - y[i]) * (x[next] - x[i]) / (y[next] - y[i]);
                k++;
            }
        }

        // Sort intersection points (simple bubble sort)
        for (i = 0; i < k - 1; i++) {
            for (j = i + 1; j < k; j++) {
                if (interx[i] > interx[j]) {
                    int temp = interx[i];
                    interx[i] = interx[j];
                    interx[j] = temp;
                }
            }
        }

        // Fill pixels between pairs of intersections
        for (i = 0; i < k; i += 2) {
            for (j = interx[i]; j <= interx[i + 1]; j++) {
                drawPixel(j, scan);
            }
        }
    }
}

// Display function
void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 0.0, 0.0); // Red fill color
    scanline();
    glFlush();
}

// Initialization
void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500); // 2D coordinate system
}

// Main function
int main(int argc, char** argv) {
    // Define polygon vertices
    x[0] = 100; y[0] = 100;
    x[1] = 200; y[1] = 300;
    x[2] = 350; y[2] = 250;
    x[3] = 300; y[3] = 100;

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Scan Line Polygon Fill - C");

    init();
    glutDisplayFunc(display);
    glutMainLoop();

    return 0;
}

      `},{id:7.7,question:"7. boundary-fill",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

// Global colors
float boundaryColor[3] = {0.0, 0.0, 0.0}; // Black boundary
float fillColor[3]     = {1.0, 0.0, 0.0}; // Red fill

// Function to set pixel
void setPixel(int x, int y) {
    glColor3fv(fillColor);
    glBegin(GL_POINTS);
    glVertex2i(x, y);
    glEnd();
    glFlush();
}

// Function to get pixel color
void getPixel(int x, int y, float color[3]) {
    glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
}

// Boundary Fill Function (4-connected recursion)
void boundaryFill(int x, int y) {
    float currentColor[3];
    getPixel(x, y, currentColor);

    // If current pixel is NOT boundary and NOT already filled
    if ((currentColor[0] != boundaryColor[0] || currentColor[1] != boundaryColor[1] || currentColor[2] != boundaryColor[2]) &&
        (currentColor[0] != fillColor[0] || currentColor[1] != fillColor[1] || currentColor[2] != fillColor[2])) {
        
        setPixel(x, y);

        // Recursive calls in 4 directions
        boundaryFill(x + 1, y);
        boundaryFill(x - 1, y);
        boundaryFill(x, y + 1);
        boundaryFill(x, y - 1);
    }
}

// Draw the polygon boundary to be filled
void drawPolygon() {
    glColor3fv(boundaryColor);
    glBegin(GL_LINE_LOOP);
        glVertex2i(150, 150);
        glVertex2i(350, 150);
        glVertex2i(350, 350);
        glVertex2i(150, 350);
    glEnd();
    glFlush();
}

// Mouse function: Filling starts where you click
void mouse(int button, int state, int x, int y) {
    if (button == GLUT_LEFT_BUTTON && state == GLUT_DOWN) {
        boundaryFill(x, 500 - y); // Invert y for OpenGL coordinates
    }
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    drawPolygon();
}

void init() {
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0, 500, 0, 500);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Boundary Fill Algorithm - C");

    init();
    glutDisplayFunc(display);
    glutMouseFunc(mouse);
    glutMainLoop();

    return 0;
}

      
      `},{id:8.8,question:"8. Flood Fill Algorithm.",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

float fillColor[] = {1.0, 0.0, 0.0};   // Red
float oldColor[]  = {1.0, 1.0, 1.0};   // White

// Get pixel color
void getPixel(int x, int y, float color[3])
{
    glReadPixels(x, y, 1, 1, GL_RGB, GL_FLOAT, color);
}

// Set pixel color
void setPixel(int x, int y)
{
    glColor3fv(fillColor);
    glBegin(GL_POINTS);
    glVertex2i(x, y);
    glEnd();
    glFlush();
}

// Flood Fill Function
void floodFill(int x, int y)
{
    float current[3];
    getPixel(x, y, current);

    if (current[0] == oldColor[0] &&
        current[1] == oldColor[1] &&
        current[2] == oldColor[2])
    {
        setPixel(x, y);

        floodFill(x + 1, y);
        floodFill(x - 1, y);
        floodFill(x, y + 1);
        floodFill(x, y - 1);
    }
}

// Display Function
void display()
{
    glClear(GL_COLOR_BUFFER_BIT);

    // Draw Square
    glColor3f(0.0, 0.0, 0.0);
    glBegin(GL_LINE_LOOP);
        glVertex2i(200, 200);
        glVertex2i(400, 200);
        glVertex2i(400, 400);
        glVertex2i(200, 400);
    glEnd();

    // Start Flood Fill from inside point
    floodFill(300, 300);

    glFlush();
}

// Initialization
void init()
{
    glClearColor(1.0, 1.0, 1.0, 1.0); // White background
    gluOrtho2D(0, 500, 0, 500);
}

// Main
int main(int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Simple Flood Fill");

    init();
    glutDisplayFunc(display);

    glutMainLoop();
    return 0;
}
      `},{id:9.9,question:"9. Transformation",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

int tx = 100, ty = 50;   // Translation values

// Original rectangle coordinates
int x1 = 100, y1 = 100;
int x2 = 200, y2 = 200;

// Function to draw rectangle
void drawRectangle(int x1, int y1, int x2, int y2)
{
    glBegin(GL_LINE_LOOP);
        glVertex2i(x1, y1);
        glVertex2i(x2, y1);
        glVertex2i(x2, y2);
        glVertex2i(x1, y2);
    glEnd();
}

// Display function
void display()
{
    glClear(GL_COLOR_BUFFER_BIT);

    // Original Rectangle (Black)
    glColor3f(0.0, 0.0, 0.0);
    drawRectangle(x1, y1, x2, y2);

    // Translated Rectangle (Red)
    glColor3f(1.0, 0.0, 0.0);
    drawRectangle(x1 + tx, y1 + ty, x2 + tx, y2 + ty);

    glFlush();
}

// Initialization
void init()
{
    glClearColor(1.0, 1.0, 1.0, 1.0);
    gluOrtho2D(0, 500, 0, 500);
}

// Main function
int main(int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("2D Translation");

    init();
    glutDisplayFunc(display);

    glutMainLoop();
    return 0;
}

      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],h=U=>{rl(z===U?null:U)};return Gl.jsxs("div",{className:"app-container",children:[Gl.jsx("h1",{children:"Computer Graphics Interview Questions"}),Gl.jsx("div",{className:"questions-container",children:k.map(U=>Gl.jsxs("div",{className:"question-item",children:[Gl.jsx("button",{className:`question-button ${z===U.id?"active":""}`,onClick:()=>h(U.id),children:U.question}),z===U.id&&Gl.jsxs("div",{className:"answer-container",children:[Gl.jsxs("div",{className:"answer",children:[Gl.jsx("h3",{children:"Answer:"}),Gl.jsx("p",{children:U.answer})]}),U.codeExample&&Gl.jsxs("div",{className:"code-example",children:[Gl.jsx("h3",{children:"Code Example:"}),Gl.jsx("pre",{children:Gl.jsx("code",{children:U.codeExample})})]})]})]},U.id))})]})}em.createRoot(document.getElementById("root")).render(Gl.jsx(Td.StrictMode,{children:Gl.jsx(am,{})}));
