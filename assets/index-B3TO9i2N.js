(function(){const rl=document.createElement("link").relList;if(rl&&rl.supports&&rl.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))h(U);new MutationObserver(U=>{for(const F of U)if(F.type==="childList")for(const ml of F.addedNodes)ml.tagName==="LINK"&&ml.rel==="modulepreload"&&h(ml)}).observe(document,{childList:!0,subtree:!0});function k(U){const F={};return U.integrity&&(F.integrity=U.integrity),U.referrerPolicy&&(F.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?F.credentials="include":U.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function h(U){if(U.ep)return;U.ep=!0;const F=k(U);fetch(U.href,F)}})();var af={exports:{}},pn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function J0(){if(yd)return pn;yd=1;var z=Symbol.for("react.transitional.element"),rl=Symbol.for("react.fragment");function k(h,U,F){var ml=null;if(F!==void 0&&(ml=""+F),U.key!==void 0&&(ml=""+U.key),"key"in U){F={};for(var Ul in U)Ul!=="key"&&(F[Ul]=U[Ul])}else F=U;return U=F.ref,{$$typeof:z,type:h,key:ml,ref:U!==void 0?U:null,props:F}}return pn.Fragment=rl,pn.jsx=k,pn.jsxs=k,pn}var md;function F0(){return md||(md=1,af.exports=J0()),af.exports}var Hl=F0(),nf={exports:{}},G={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function W0(){if(hd)return G;hd=1;var z=Symbol.for("react.transitional.element"),rl=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),ml=Symbol.for("react.context"),Ul=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ol=Symbol.iterator;function Fl(s){return s===null||typeof s!="object"?null:(s=ol&&s[ol]||s["@@iterator"],typeof s=="function"?s:null)}var ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nl=Object.assign,Ot={};function Wl(s,b,A){this.props=s,this.context=b,this.refs=Ot,this.updater=A||ql}Wl.prototype.isReactComponent={},Wl.prototype.setState=function(s,b){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,b,"setState")},Wl.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Ft(){}Ft.prototype=Wl.prototype;function Cl(s,b,A){this.props=s,this.context=b,this.refs=Ot,this.updater=A||ql}var ut=Cl.prototype=new Ft;ut.constructor=Cl,Nl(ut,Wl.prototype),ut.isPureReactComponent=!0;var bt=Array.isArray;function Ll(){}var Z={H:null,A:null,T:null,S:null},Yl=Object.prototype.hasOwnProperty;function Et(s,b,A){var D=A.ref;return{$$typeof:z,type:s,key:b,ref:D!==void 0?D:null,props:A}}function je(s,b){return Et(s.type,b,s.props)}function Tt(s){return typeof s=="object"&&s!==null&&s.$$typeof===z}function jl(s){var b={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(A){return b[A]})}var Se=/\/+/g;function Mt(s,b){return typeof s=="object"&&s!==null&&s.key!=null?jl(""+s.key):b.toString(36)}function vt(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(Ll,Ll):(s.status="pending",s.then(function(b){s.status==="pending"&&(s.status="fulfilled",s.value=b)},function(b){s.status==="pending"&&(s.status="rejected",s.reason=b)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function x(s,b,A,D,H){var Y=typeof s;(Y==="undefined"||Y==="boolean")&&(s=null);var $=!1;if(s===null)$=!0;else switch(Y){case"bigint":case"string":case"number":$=!0;break;case"object":switch(s.$$typeof){case z:case rl:$=!0;break;case I:return $=s._init,x($(s._payload),b,A,D,H)}}if($)return H=H(s),$=D===""?"."+Mt(s,0):D,bt(H)?(A="",$!=null&&(A=$.replace(Se,"$&/")+"/"),x(H,b,A,"",function(_a){return _a})):H!=null&&(Tt(H)&&(H=je(H,A+(H.key==null||s&&s.key===H.key?"":(""+H.key).replace(Se,"$&/")+"/")+$)),b.push(H)),1;$=0;var Bl=D===""?".":D+":";if(bt(s))for(var hl=0;hl<s.length;hl++)D=s[hl],Y=Bl+Mt(D,hl),$+=x(D,b,A,Y,H);else if(hl=Fl(s),typeof hl=="function")for(s=hl.call(s),hl=0;!(D=s.next()).done;)D=D.value,Y=Bl+Mt(D,hl++),$+=x(D,b,A,Y,H);else if(Y==="object"){if(typeof s.then=="function")return x(vt(s),b,A,D,H);throw b=String(s),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return $}function T(s,b,A){if(s==null)return s;var D=[],H=0;return x(s,D,"","",function(Y){return b.call(A,Y,H++)}),D}function B(s){if(s._status===-1){var b=s._result;b=b(),b.then(function(A){(s._status===0||s._status===-1)&&(s._status=1,s._result=A)},function(A){(s._status===0||s._status===-1)&&(s._status=2,s._result=A)}),s._status===-1&&(s._status=0,s._result=b)}if(s._status===1)return s._result.default;throw s._result}var tl=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},il={map:T,forEach:function(s,b,A){T(s,function(){b.apply(this,arguments)},A)},count:function(s){var b=0;return T(s,function(){b++}),b},toArray:function(s){return T(s,function(b){return b})||[]},only:function(s){if(!Tt(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return G.Activity=N,G.Children=il,G.Component=Wl,G.Fragment=k,G.Profiler=U,G.PureComponent=Cl,G.StrictMode=h,G.Suspense=C,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,G.__COMPILER_RUNTIME={__proto__:null,c:function(s){return Z.H.useMemoCache(s)}},G.cache=function(s){return function(){return s.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(s,b,A){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var D=Nl({},s.props),H=s.key;if(b!=null)for(Y in b.key!==void 0&&(H=""+b.key),b)!Yl.call(b,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&b.ref===void 0||(D[Y]=b[Y]);var Y=arguments.length-2;if(Y===1)D.children=A;else if(1<Y){for(var $=Array(Y),Bl=0;Bl<Y;Bl++)$[Bl]=arguments[Bl+2];D.children=$}return Et(s.type,H,D)},G.createContext=function(s){return s={$$typeof:ml,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:F,_context:s},s},G.createElement=function(s,b,A){var D,H={},Y=null;if(b!=null)for(D in b.key!==void 0&&(Y=""+b.key),b)Yl.call(b,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(H[D]=b[D]);var $=arguments.length-2;if($===1)H.children=A;else if(1<$){for(var Bl=Array($),hl=0;hl<$;hl++)Bl[hl]=arguments[hl+2];H.children=Bl}if(s&&s.defaultProps)for(D in $=s.defaultProps,$)H[D]===void 0&&(H[D]=$[D]);return Et(s,Y,H)},G.createRef=function(){return{current:null}},G.forwardRef=function(s){return{$$typeof:Ul,render:s}},G.isValidElement=Tt,G.lazy=function(s){return{$$typeof:I,_payload:{_status:-1,_result:s},_init:B}},G.memo=function(s,b){return{$$typeof:E,type:s,compare:b===void 0?null:b}},G.startTransition=function(s){var b=Z.T,A={};Z.T=A;try{var D=s(),H=Z.S;H!==null&&H(A,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ll,tl)}catch(Y){tl(Y)}finally{b!==null&&A.types!==null&&(b.types=A.types),Z.T=b}},G.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},G.use=function(s){return Z.H.use(s)},G.useActionState=function(s,b,A){return Z.H.useActionState(s,b,A)},G.useCallback=function(s,b){return Z.H.useCallback(s,b)},G.useContext=function(s){return Z.H.useContext(s)},G.useDebugValue=function(){},G.useDeferredValue=function(s,b){return Z.H.useDeferredValue(s,b)},G.useEffect=function(s,b){return Z.H.useEffect(s,b)},G.useEffectEvent=function(s){return Z.H.useEffectEvent(s)},G.useId=function(){return Z.H.useId()},G.useImperativeHandle=function(s,b,A){return Z.H.useImperativeHandle(s,b,A)},G.useInsertionEffect=function(s,b){return Z.H.useInsertionEffect(s,b)},G.useLayoutEffect=function(s,b){return Z.H.useLayoutEffect(s,b)},G.useMemo=function(s,b){return Z.H.useMemo(s,b)},G.useOptimistic=function(s,b){return Z.H.useOptimistic(s,b)},G.useReducer=function(s,b,A){return Z.H.useReducer(s,b,A)},G.useRef=function(s){return Z.H.useRef(s)},G.useState=function(s){return Z.H.useState(s)},G.useSyncExternalStore=function(s,b,A){return Z.H.useSyncExternalStore(s,b,A)},G.useTransition=function(){return Z.H.useTransition()},G.version="19.2.4",G}var gd;function sf(){return gd||(gd=1,nf.exports=W0()),nf.exports}var Td=sf(),uf={exports:{}},Sn={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function k0(){return vd||(vd=1,(function(z){function rl(x,T){var B=x.length;x.push(T);l:for(;0<B;){var tl=B-1>>>1,il=x[tl];if(0<U(il,T))x[tl]=T,x[B]=il,B=tl;else break l}}function k(x){return x.length===0?null:x[0]}function h(x){if(x.length===0)return null;var T=x[0],B=x.pop();if(B!==T){x[0]=B;l:for(var tl=0,il=x.length,s=il>>>1;tl<s;){var b=2*(tl+1)-1,A=x[b],D=b+1,H=x[D];if(0>U(A,B))D<il&&0>U(H,A)?(x[tl]=H,x[D]=B,tl=D):(x[tl]=A,x[b]=B,tl=b);else if(D<il&&0>U(H,B))x[tl]=H,x[D]=B,tl=D;else break l}}return T}function U(x,T){var B=x.sortIndex-T.sortIndex;return B!==0?B:x.id-T.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var F=performance;z.unstable_now=function(){return F.now()}}else{var ml=Date,Ul=ml.now();z.unstable_now=function(){return ml.now()-Ul}}var C=[],E=[],I=1,N=null,ol=3,Fl=!1,ql=!1,Nl=!1,Ot=!1,Wl=typeof setTimeout=="function"?setTimeout:null,Ft=typeof clearTimeout=="function"?clearTimeout:null,Cl=typeof setImmediate<"u"?setImmediate:null;function ut(x){for(var T=k(E);T!==null;){if(T.callback===null)h(E);else if(T.startTime<=x)h(E),T.sortIndex=T.expirationTime,rl(C,T);else break;T=k(E)}}function bt(x){if(Nl=!1,ut(x),!ql)if(k(C)!==null)ql=!0,Ll||(Ll=!0,jl());else{var T=k(E);T!==null&&vt(bt,T.startTime-x)}}var Ll=!1,Z=-1,Yl=5,Et=-1;function je(){return Ot?!0:!(z.unstable_now()-Et<Yl)}function Tt(){if(Ot=!1,Ll){var x=z.unstable_now();Et=x;var T=!0;try{l:{ql=!1,Nl&&(Nl=!1,Ft(Z),Z=-1),Fl=!0;var B=ol;try{t:{for(ut(x),N=k(C);N!==null&&!(N.expirationTime>x&&je());){var tl=N.callback;if(typeof tl=="function"){N.callback=null,ol=N.priorityLevel;var il=tl(N.expirationTime<=x);if(x=z.unstable_now(),typeof il=="function"){N.callback=il,ut(x),T=!0;break t}N===k(C)&&h(C),ut(x)}else h(C);N=k(C)}if(N!==null)T=!0;else{var s=k(E);s!==null&&vt(bt,s.startTime-x),T=!1}}break l}finally{N=null,ol=B,Fl=!1}T=void 0}}finally{T?jl():Ll=!1}}}var jl;if(typeof Cl=="function")jl=function(){Cl(Tt)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Mt=Se.port2;Se.port1.onmessage=Tt,jl=function(){Mt.postMessage(null)}}else jl=function(){Wl(Tt,0)};function vt(x,T){Z=Wl(function(){x(z.unstable_now())},T)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(x){x.callback=null},z.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yl=0<x?Math.floor(1e3/x):5},z.unstable_getCurrentPriorityLevel=function(){return ol},z.unstable_next=function(x){switch(ol){case 1:case 2:case 3:var T=3;break;default:T=ol}var B=ol;ol=T;try{return x()}finally{ol=B}},z.unstable_requestPaint=function(){Ot=!0},z.unstable_runWithPriority=function(x,T){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var B=ol;ol=x;try{return T()}finally{ol=B}},z.unstable_scheduleCallback=function(x,T,B){var tl=z.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?tl+B:tl):B=tl,x){case 1:var il=-1;break;case 2:il=250;break;case 5:il=1073741823;break;case 4:il=1e4;break;default:il=5e3}return il=B+il,x={id:I++,callback:T,priorityLevel:x,startTime:B,expirationTime:il,sortIndex:-1},B>tl?(x.sortIndex=B,rl(E,x),k(C)===null&&x===k(E)&&(Nl?(Ft(Z),Z=-1):Nl=!0,vt(bt,B-tl))):(x.sortIndex=il,rl(C,x),ql||Fl||(ql=!0,Ll||(Ll=!0,jl()))),x},z.unstable_shouldYield=je,z.unstable_wrapCallback=function(x){var T=ol;return function(){var B=ol;ol=T;try{return x.apply(this,arguments)}finally{ol=B}}}})(ff)),ff}var xd;function I0(){return xd||(xd=1,cf.exports=k0()),cf.exports}var of={exports:{}},Rl={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function $0(){if(pd)return Rl;pd=1;var z=sf();function rl(C){var E="https://react.dev/errors/"+C;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)E+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+C+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(){}var h={d:{f:k,r:function(){throw Error(rl(522))},D:k,C:k,L:k,m:k,X:k,S:k,M:k},p:0,findDOMNode:null},U=Symbol.for("react.portal");function F(C,E,I){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:N==null?null:""+N,children:C,containerInfo:E,implementation:I}}var ml=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ul(C,E){if(C==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Rl.createPortal=function(C,E){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(rl(299));return F(C,E,null,I)},Rl.flushSync=function(C){var E=ml.T,I=h.p;try{if(ml.T=null,h.p=2,C)return C()}finally{ml.T=E,h.p=I,h.d.f()}},Rl.preconnect=function(C,E){typeof C=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,h.d.C(C,E))},Rl.prefetchDNS=function(C){typeof C=="string"&&h.d.D(C)},Rl.preinit=function(C,E){if(typeof C=="string"&&E&&typeof E.as=="string"){var I=E.as,N=Ul(I,E.crossOrigin),ol=typeof E.integrity=="string"?E.integrity:void 0,Fl=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;I==="style"?h.d.S(C,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:N,integrity:ol,fetchPriority:Fl}):I==="script"&&h.d.X(C,{crossOrigin:N,integrity:ol,fetchPriority:Fl,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Rl.preinitModule=function(C,E){if(typeof C=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var I=Ul(E.as,E.crossOrigin);h.d.M(C,{crossOrigin:I,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&h.d.M(C)},Rl.preload=function(C,E){if(typeof C=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var I=E.as,N=Ul(I,E.crossOrigin);h.d.L(C,I,{crossOrigin:N,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Rl.preloadModule=function(C,E){if(typeof C=="string")if(E){var I=Ul(E.as,E.crossOrigin);h.d.m(C,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:I,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else h.d.m(C)},Rl.requestFormReset=function(C){h.d.r(C)},Rl.unstable_batchedUpdates=function(C,E){return C(E)},Rl.useFormState=function(C,E,I){return ml.H.useFormState(C,E,I)},Rl.useFormStatus=function(){return ml.H.useHostTransitionStatus()},Rl.version="19.2.4",Rl}var Sd;function P0(){if(Sd)return of.exports;Sd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(rl){console.error(rl)}}return z(),of.exports=$0(),of.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function lm(){if(bd)return Sn;bd=1;var z=I0(),rl=sf(),k=P0();function h(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function F(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function ml(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function Ul(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function C(l){if(F(l)!==l)throw Error(h(188))}function E(l){var t=l.alternate;if(!t){if(t=F(l),t===null)throw Error(h(188));return t!==l?null:l}for(var e=l,a=t;;){var n=e.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===e)return C(n),l;if(i===a)return C(n),t;i=i.sibling}throw Error(h(188))}if(e.return!==a.return)e=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===e){u=!0,e=n,a=i;break}if(c===a){u=!0,a=n,e=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===e){u=!0,e=i,a=n;break}if(c===a){u=!0,a=i,e=n;break}c=c.sibling}if(!u)throw Error(h(189))}}if(e.alternate!==a)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?l:t}function I(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=I(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,ol=Symbol.for("react.element"),Fl=Symbol.for("react.transitional.element"),ql=Symbol.for("react.portal"),Nl=Symbol.for("react.fragment"),Ot=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),Ft=Symbol.for("react.consumer"),Cl=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Yl=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),je=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function jl(l){return l===null||typeof l!="object"?null:(l=Tt&&l[Tt]||l["@@iterator"],typeof l=="function"?l:null)}var Se=Symbol.for("react.client.reference");function Mt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Se?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Nl:return"Fragment";case Wl:return"Profiler";case Ot:return"StrictMode";case bt:return"Suspense";case Ll:return"SuspenseList";case Et:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case ql:return"Portal";case Cl:return l.displayName||"Context";case Ft:return(l._context.displayName||"Context")+".Consumer";case ut:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case Z:return t=l.displayName||null,t!==null?t:Mt(l.type)||"Memo";case Yl:t=l._payload,l=l._init;try{return Mt(l(t))}catch{}}return null}var vt=Array.isArray,x=rl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},tl=[],il=-1;function s(l){return{current:l}}function b(l){0>il||(l.current=tl[il],tl[il]=null,il--)}function A(l,t){il++,tl[il]=l.current,l.current=t}var D=s(null),H=s(null),Y=s(null),$=s(null);function Bl(l,t){switch(A(Y,t),A(H,l),A(D,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Hr(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Hr(t),l=qr(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}b(D),A(D,l)}function hl(){b(D),b(H),b(Y)}function _a(l){l.memoizedState!==null&&A($,l);var t=D.current,e=qr(t,l.type);t!==e&&(A(H,l),A(D,e))}function bn(l){H.current===l&&(b(D),b(H)),$.current===l&&(b($),hn._currentValue=B)}var Yi,rf;function be(l){if(Yi===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||"",rf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yi+l+rf}var ji=!1;function Xi(l,t){if(!l||ji)return"";ji=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var m=g}Reflect.construct(l,[],S)}else{try{S.call()}catch(g){m=g}l.call(S.prototype)}}else{try{throw Error()}catch(g){m=g}(S=l())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),y=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===y.length)for(a=f.length-1,n=y.length-1;1<=a&&0<=n&&f[a]!==y[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==y[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==y[n]){var v=`
`+f[a].replace(" at new "," at ");return l.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",l.displayName)),v}while(1<=a&&0<=n);break}}}finally{ji=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?be(e):""}function Ad(l,t){switch(l.tag){case 26:case 27:case 5:return be(l.type);case 16:return be("Lazy");case 13:return l.child!==t&&t!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Xi(l.type,!1);case 11:return Xi(l.type.render,!1);case 1:return Xi(l.type,!0);case 31:return be("Activity");default:return""}}function df(l){try{var t="",e=null;do t+=Ad(l,e),e=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Qi=Object.prototype.hasOwnProperty,Vi=z.unstable_scheduleCallback,Zi=z.unstable_cancelCallback,_d=z.unstable_shouldYield,zd=z.unstable_requestPaint,kl=z.unstable_now,Dd=z.unstable_getCurrentPriorityLevel,yf=z.unstable_ImmediatePriority,mf=z.unstable_UserBlockingPriority,En=z.unstable_NormalPriority,Od=z.unstable_LowPriority,hf=z.unstable_IdlePriority,Md=z.log,Cd=z.unstable_setDisableYieldValue,za=null,Il=null;function Wt(l){if(typeof Md=="function"&&Cd(l),Il&&typeof Il.setStrictMode=="function")try{Il.setStrictMode(za,l)}catch{}}var $l=Math.clz32?Math.clz32:Nd,Rd=Math.log,Ud=Math.LN2;function Nd(l){return l>>>=0,l===0?32:31-(Rd(l)/Ud|0)|0}var Tn=256,An=262144,_n=4194304;function Ee(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function zn(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var n=0,i=l.suspendedLanes,u=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Ee(a):(u&=c,u!==0?n=Ee(u):e||(e=c&~l,e!==0&&(n=Ee(e))))):(c=a&~i,c!==0?n=Ee(c):u!==0?n=Ee(u):e||(e=a&~l,e!==0&&(n=Ee(e)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,e=t&-t,i>=e||i===32&&(e&4194048)!==0)?t:n}function Da(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Bd(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gf(){var l=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),l}function wi(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Oa(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Gd(l,t,e,a,n,i){var u=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var c=l.entanglements,f=l.expirationTimes,y=l.hiddenUpdates;for(e=u&~e;0<e;){var v=31-$l(e),S=1<<v;c[v]=0,f[v]=-1;var m=y[v];if(m!==null)for(y[v]=null,v=0;v<m.length;v++){var g=m[v];g!==null&&(g.lane&=-536870913)}e&=~S}a!==0&&vf(l,a,0),i!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=i&~(u&~t))}function vf(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-$l(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&261930}function xf(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-$l(e),n=1<<a;n&t|l[a]&t&&(l[a]|=t),e&=~n}}function pf(l,t){var e=t&-t;return e=(e&42)!==0?1:Ki(e),(e&(l.suspendedLanes|t))!==0?0:e}function Ki(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ji(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Sf(){var l=T.p;return l!==0?l:(l=window.event,l===void 0?32:ud(l.type))}function bf(l,t){var e=T.p;try{return T.p=l,t()}finally{T.p=e}}var kt=Math.random().toString(36).slice(2),_l="__reactFiber$"+kt,Xl="__reactProps$"+kt,Xe="__reactContainer$"+kt,Fi="__reactEvents$"+kt,Hd="__reactListeners$"+kt,qd="__reactHandles$"+kt,Ef="__reactResources$"+kt,Ma="__reactMarker$"+kt;function Wi(l){delete l[_l],delete l[Xl],delete l[Fi],delete l[Hd],delete l[qd]}function Qe(l){var t=l[_l];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Xe]||e[_l]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=Zr(l);l!==null;){if(e=l[_l])return e;l=Zr(l)}return t}l=e,e=l.parentNode}return null}function Ve(l){if(l=l[_l]||l[Xe]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ca(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(h(33))}function Ze(l){var t=l[Ef];return t||(t=l[Ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Tl(l){l[Ma]=!0}var Tf=new Set,Af={};function Te(l,t){we(l,t),we(l+"Capture",t)}function we(l,t){for(Af[l]=t,l=0;l<t.length;l++)Tf.add(t[l])}var Ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_f={},zf={};function Yd(l){return Qi.call(zf,l)?!0:Qi.call(_f,l)?!1:Ld.test(l)?zf[l]=!0:(_f[l]=!0,!1)}function Dn(l,t,e){if(Yd(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function On(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function Ct(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}function ct(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Df(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(l,t,e){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ki(l){if(!l._valueTracker){var t=Df(l)?"checked":"value";l._valueTracker=jd(l,t,""+l[t])}}function Of(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=Df(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function Mn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Xd=/[\n"\\]/g;function ft(l){return l.replace(Xd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ii(l,t,e,a,n,i,u,c){l.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?l.type=u:l.removeAttribute("type"),t!=null?u==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+ct(t)):l.value!==""+ct(t)&&(l.value=""+ct(t)):u!=="submit"&&u!=="reset"||l.removeAttribute("value"),t!=null?$i(l,u,ct(t)):e!=null?$i(l,u,ct(e)):a!=null&&l.removeAttribute("value"),n==null&&i!=null&&(l.defaultChecked=!!i),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+ct(c):l.removeAttribute("name")}function Mf(l,t,e,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.type=i),t!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ki(l);return}e=e!=null?""+ct(e):"",t=t!=null?""+ct(t):e,c||t===l.value||(l.value=t),l.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.name=u),ki(l)}function $i(l,t,e){t==="number"&&Mn(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function Ke(l,t,e,a){if(l=l.options,t){t={};for(var n=0;n<e.length;n++)t["$"+e[n]]=!0;for(e=0;e<l.length;e++)n=t.hasOwnProperty("$"+l[e].value),l[e].selected!==n&&(l[e].selected=n),n&&a&&(l[e].defaultSelected=!0)}else{for(e=""+ct(e),t=null,n=0;n<l.length;n++){if(l[n].value===e){l[n].selected=!0,a&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Cf(l,t,e){if(t!=null&&(t=""+ct(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+ct(e):""}function Rf(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(h(92));if(vt(a)){if(1<a.length)throw Error(h(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=ct(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a),ki(l)}function Je(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uf(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||Qd.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Nf(l,t,e){if(t!=null&&typeof t!="object")throw Error(h(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&e[n]!==a&&Uf(l,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Uf(l,i,t[i])}function Pi(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(l){return Zd.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Rt(){}var lu=null;function tu(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fe=null,We=null;function Bf(l){var t=Ve(l);if(t&&(l=t.stateNode)){var e=l[Xl]||null;l:switch(l=t.stateNode,t.type){case"input":if(Ii(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var n=a[Xl]||null;if(!n)throw Error(h(90));Ii(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&Of(a)}break l;case"textarea":Cf(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&Ke(l,!!e.multiple,t,!1)}}}var eu=!1;function Gf(l,t,e){if(eu)return l(t,e);eu=!0;try{var a=l(t);return a}finally{if(eu=!1,(Fe!==null||We!==null)&&(vi(),Fe&&(t=Fe,l=We,We=Fe=null,Bf(t),l)))for(t=0;t<l.length;t++)Bf(l[t])}}function Ra(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Xl]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(h(231,t,typeof e));return e}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Ut)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){au=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{au=!1}var It=null,nu=null,Rn=null;function Hf(){if(Rn)return Rn;var l,t=nu,e=t.length,a,n="value"in It?It.value:It.textContent,i=n.length;for(l=0;l<e&&t[l]===n[l];l++);var u=e-l;for(a=1;a<=u&&t[e-a]===n[i-a];a++);return Rn=n.slice(l,1<a?1-a:void 0)}function Un(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Nn(){return!0}function qf(){return!1}function Ql(l){function t(e,a,n,i,u){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(e=l[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nn:qf,this.isPropagationStopped=qf,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var Ae={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Ql(Ae),Na=N({},Ae,{view:0,detail:0}),wd=Ql(Na),iu,uu,Ba,Gn=N({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Ba&&(Ba&&l.type==="mousemove"?(iu=l.screenX-Ba.screenX,uu=l.screenY-Ba.screenY):uu=iu=0,Ba=l),iu)},movementY:function(l){return"movementY"in l?l.movementY:uu}}),Lf=Ql(Gn),Kd=N({},Gn,{dataTransfer:0}),Jd=Ql(Kd),Fd=N({},Na,{relatedTarget:0}),cu=Ql(Fd),Wd=N({},Ae,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Ql(Wd),Id=N({},Ae,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),$d=Ql(Id),Pd=N({},Ae,{data:0}),Yf=Ql(Pd),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=ey[l])?!!t[l]:!1}function fu(){return ay}var ny=N({},Na,{key:function(l){if(l.key){var t=ly[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Un(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?ty[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(l){return l.type==="keypress"?Un(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Un(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),iy=Ql(ny),uy=N({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=Ql(uy),cy=N({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),fy=Ql(cy),oy=N({},Ae,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Ql(oy),ry=N({},Gn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Ql(ry),yy=N({},Ae,{newState:0,oldState:0}),my=Ql(yy),hy=[9,13,27,32],ou=Ut&&"CompositionEvent"in window,Ga=null;Ut&&"documentMode"in document&&(Ga=document.documentMode);var gy=Ut&&"TextEvent"in window&&!Ga,Xf=Ut&&(!ou||Ga&&8<Ga&&11>=Ga),Qf=" ",Vf=!1;function Zf(l,t){switch(l){case"keyup":return hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var ke=!1;function vy(l,t){switch(l){case"compositionend":return wf(t);case"keypress":return t.which!==32?null:(Vf=!0,Qf);case"textInput":return l=t.data,l===Qf&&Vf?null:l;default:return null}}function xy(l,t){if(ke)return l==="compositionend"||!ou&&Zf(l,t)?(l=Hf(),Rn=nu=It=null,ke=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!py[l.type]:t==="textarea"}function Jf(l,t,e,a){Fe?We?We.push(a):We=[a]:Fe=a,t=Ai(t,"onChange"),0<t.length&&(e=new Bn("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var Ha=null,qa=null;function Sy(l){Cr(l,0)}function Hn(l){var t=Ca(l);if(Of(t))return l}function Ff(l,t){if(l==="change")return t}var Wf=!1;if(Ut){var su;if(Ut){var ru="oninput"in document;if(!ru){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),ru=typeof kf.oninput=="function"}su=ru}else su=!1;Wf=su&&(!document.documentMode||9<document.documentMode)}function If(){Ha&&(Ha.detachEvent("onpropertychange",$f),qa=Ha=null)}function $f(l){if(l.propertyName==="value"&&Hn(qa)){var t=[];Jf(t,qa,l,tu(l)),Gf(Sy,t)}}function by(l,t,e){l==="focusin"?(If(),Ha=t,qa=e,Ha.attachEvent("onpropertychange",$f)):l==="focusout"&&If()}function Ey(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Hn(qa)}function Ty(l,t){if(l==="click")return Hn(t)}function Ay(l,t){if(l==="input"||l==="change")return Hn(t)}function _y(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var Pl=typeof Object.is=="function"?Object.is:_y;function La(l,t){if(Pl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Qi.call(t,n)||!Pl(l[n],t[n]))return!1}return!0}function Pf(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function lo(l,t){var e=Pf(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=Pf(e)}}function to(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?to(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function eo(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Mn(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=Mn(l.document)}return t}function du(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var zy=Ut&&"documentMode"in document&&11>=document.documentMode,Ie=null,yu=null,Ya=null,mu=!1;function ao(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;mu||Ie==null||Ie!==Mn(a)||(a=Ie,"selectionStart"in a&&du(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ya&&La(Ya,a)||(Ya=a,a=Ai(yu,"onSelect"),0<a.length&&(t=new Bn("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=Ie)))}function _e(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var $e={animationend:_e("Animation","AnimationEnd"),animationiteration:_e("Animation","AnimationIteration"),animationstart:_e("Animation","AnimationStart"),transitionrun:_e("Transition","TransitionRun"),transitionstart:_e("Transition","TransitionStart"),transitioncancel:_e("Transition","TransitionCancel"),transitionend:_e("Transition","TransitionEnd")},hu={},no={};Ut&&(no=document.createElement("div").style,"AnimationEvent"in window||(delete $e.animationend.animation,delete $e.animationiteration.animation,delete $e.animationstart.animation),"TransitionEvent"in window||delete $e.transitionend.transition);function ze(l){if(hu[l])return hu[l];if(!$e[l])return l;var t=$e[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in no)return hu[l]=t[e];return l}var io=ze("animationend"),uo=ze("animationiteration"),co=ze("animationstart"),Dy=ze("transitionrun"),Oy=ze("transitionstart"),My=ze("transitioncancel"),fo=ze("transitionend"),oo=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function xt(l,t){oo.set(l,t),Te(t,[l])}var qn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ot=[],Pe=0,vu=0;function Ln(){for(var l=Pe,t=vu=Pe=0;t<l;){var e=ot[t];ot[t++]=null;var a=ot[t];ot[t++]=null;var n=ot[t];ot[t++]=null;var i=ot[t];if(ot[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&so(e,n,i)}}function Yn(l,t,e,a){ot[Pe++]=l,ot[Pe++]=t,ot[Pe++]=e,ot[Pe++]=a,vu|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function xu(l,t,e,a){return Yn(l,t,e,a),jn(l)}function De(l,t){return Yn(l,null,null,t),jn(l)}function so(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var n=!1,i=l.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(l=i.stateNode,l===null||l._visibility&1||(n=!0)),l=i,i=i.return;return l.tag===3?(i=l.stateNode,n&&t!==null&&(n=31-$l(e),l=i.hiddenUpdates,a=l[n],a===null?l[n]=[t]:a.push(t),t.lane=e|536870912),i):null}function jn(l){if(50<fn)throw fn=0,Dc=null,Error(h(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var la={};function Cy(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(l,t,e,a){return new Cy(l,t,e,a)}function pu(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Nt(l,t){var e=l.alternate;return e===null?(e=lt(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function ro(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Xn(l,t,e,a,n,i){var u=0;if(a=l,typeof l=="function")pu(l)&&(u=1);else if(typeof l=="string")u=G0(l,e,D.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Et:return l=lt(31,e,t,n),l.elementType=Et,l.lanes=i,l;case Nl:return Oe(e.children,n,i,t);case Ot:u=8,n|=24;break;case Wl:return l=lt(12,e,t,n|2),l.elementType=Wl,l.lanes=i,l;case bt:return l=lt(13,e,t,n),l.elementType=bt,l.lanes=i,l;case Ll:return l=lt(19,e,t,n),l.elementType=Ll,l.lanes=i,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Cl:u=10;break l;case Ft:u=9;break l;case ut:u=11;break l;case Z:u=14;break l;case Yl:u=16,a=null;break l}u=29,e=Error(h(130,l===null?"null":typeof l,"")),a=null}return t=lt(u,e,t,n),t.elementType=l,t.type=a,t.lanes=i,t}function Oe(l,t,e,a){return l=lt(7,l,a,t),l.lanes=e,l}function Su(l,t,e){return l=lt(6,l,null,t),l.lanes=e,l}function yo(l){var t=lt(18,null,null,0);return t.stateNode=l,t}function bu(l,t,e){return t=lt(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var mo=new WeakMap;function st(l,t){if(typeof l=="object"&&l!==null){var e=mo.get(l);return e!==void 0?e:(t={value:l,source:t,stack:df(t)},mo.set(l,t),t)}return{value:l,source:t,stack:df(t)}}var ta=[],ea=0,Qn=null,ja=0,rt=[],dt=0,$t=null,At=1,_t="";function Bt(l,t){ta[ea++]=ja,ta[ea++]=Qn,Qn=l,ja=t}function ho(l,t,e){rt[dt++]=At,rt[dt++]=_t,rt[dt++]=$t,$t=l;var a=At;l=_t;var n=32-$l(a)-1;a&=~(1<<n),e+=1;var i=32-$l(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,At=1<<32-$l(t)+n|e<<n|a,_t=i+l}else At=1<<i|e<<n|a,_t=l}function Eu(l){l.return!==null&&(Bt(l,1),ho(l,1,0))}function Tu(l){for(;l===Qn;)Qn=ta[--ea],ta[ea]=null,ja=ta[--ea],ta[ea]=null;for(;l===$t;)$t=rt[--dt],rt[dt]=null,_t=rt[--dt],rt[dt]=null,At=rt[--dt],rt[dt]=null}function go(l,t){rt[dt++]=At,rt[dt++]=_t,rt[dt++]=$t,At=t.id,_t=t.overflow,$t=l}var zl=null,cl=null,w=!1,Pt=null,yt=!1,Au=Error(h(519));function le(l){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xa(st(t,l)),Au}function vo(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[_l]=l,t[Xl]=a,e){case"dialog":X("cancel",t),X("close",t);break;case"iframe":case"object":case"embed":X("load",t);break;case"video":case"audio":for(e=0;e<sn.length;e++)X(sn[e],t);break;case"source":X("error",t);break;case"img":case"image":case"link":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"input":X("invalid",t),Mf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":X("invalid",t);break;case"textarea":X("invalid",t),Rf(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||Br(t.textContent,e)?(a.popover!=null&&(X("beforetoggle",t),X("toggle",t)),a.onScroll!=null&&X("scroll",t),a.onScrollEnd!=null&&X("scrollend",t),a.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||le(l,!0)}function xo(l){for(zl=l.return;zl;)switch(zl.tag){case 5:case 31:case 13:yt=!1;return;case 27:case 3:yt=!0;return;default:zl=zl.return}}function aa(l){if(l!==zl)return!1;if(!w)return xo(l),w=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Qc(l.type,l.memoizedProps)),e=!e),e&&cl&&le(l),xo(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));cl=Vr(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));cl=Vr(l)}else t===27?(t=cl,me(l.type)?(l=Jc,Jc=null,cl=l):cl=t):cl=zl?ht(l.stateNode.nextSibling):null;return!0}function Me(){cl=zl=null,w=!1}function _u(){var l=Pt;return l!==null&&(Kl===null?Kl=l:Kl.push.apply(Kl,l),Pt=null),l}function Xa(l){Pt===null?Pt=[l]:Pt.push(l)}var zu=s(null),Ce=null,Gt=null;function te(l,t,e){A(zu,t._currentValue),t._currentValue=e}function Ht(l){l._currentValue=zu.current,b(zu)}function Du(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Ou(l,t,e,a){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;l:for(;i!==null;){var c=i;i=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),Du(i.return,e,l),a||(u=null);break l}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(h(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),Du(u,e,l),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===l){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function na(l,t,e,a){l=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=n.type;Pl(n.pendingProps.value,u.value)||(l!==null?l.push(c):l=[c])}}else if(n===$.current){if(u=n.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(hn):l=[hn])}n=n.return}l!==null&&Ou(t,l,e,a),t.flags|=262144}function Vn(l){for(l=l.firstContext;l!==null;){if(!Pl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Re(l){Ce=l,Gt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Dl(l){return po(Ce,l)}function Zn(l,t){return Ce===null&&Re(l),po(l,t)}function po(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Gt===null){if(l===null)throw Error(h(308));Gt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Gt=Gt.next=t;return e}var Ry=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},Uy=z.unstable_scheduleCallback,Ny=z.unstable_NormalPriority,xl={$$typeof:Cl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Ry,data:new Map,refCount:0}}function Qa(l){l.refCount--,l.refCount===0&&Uy(Ny,function(){l.controller.abort()})}var Va=null,Cu=0,ia=0,ua=null;function By(l,t){if(Va===null){var e=Va=[];Cu=0,ia=Nc(),ua={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Cu++,t.then(So,So),t}function So(){if(--Cu===0&&Va!==null){ua!==null&&(ua.status="fulfilled");var l=Va;Va=null,ia=0,ua=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Gy(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<e.length;n++)(0,e[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var bo=x.S;x.S=function(l,t){nr=kl(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&By(l,t),bo!==null&&bo(l,t)};var Ue=s(null);function Ru(){var l=Ue.current;return l!==null?l:ul.pooledCache}function wn(l,t){t===null?A(Ue,Ue.current):A(Ue,t.pool)}function Eo(){var l=Ru();return l===null?null:{parent:xl._currentValue,pool:l}}var ca=Error(h(460)),Uu=Error(h(474)),Kn=Error(h(542)),Jn={then:function(){}};function To(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Ao(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Rt,Rt),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,zo(l),l;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(l=ul,l!==null&&100<l.shellSuspendCounter)throw Error(h(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,zo(l),l}throw Be=t,ca}}function Ne(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Be=e,ca):e}}var Be=null;function _o(){if(Be===null)throw Error(h(459));var l=Be;return Be=null,l}function zo(l){if(l===ca||l===Kn)throw Error(h(483))}var fa=null,Za=0;function Fn(l){var t=Za;return Za+=1,fa===null&&(fa=[]),Ao(fa,l,t)}function wa(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Wn(l,t){throw t.$$typeof===ol?Error(h(525)):(l=Object.prototype.toString.call(t),Error(h(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function Do(l){function t(r,o){if(l){var d=r.deletions;d===null?(r.deletions=[o],r.flags|=16):d.push(o)}}function e(r,o){if(!l)return null;for(;o!==null;)t(r,o),o=o.sibling;return null}function a(r){for(var o=new Map;r!==null;)r.key!==null?o.set(r.key,r):o.set(r.index,r),r=r.sibling;return o}function n(r,o){return r=Nt(r,o),r.index=0,r.sibling=null,r}function i(r,o,d){return r.index=d,l?(d=r.alternate,d!==null?(d=d.index,d<o?(r.flags|=67108866,o):d):(r.flags|=67108866,o)):(r.flags|=1048576,o)}function u(r){return l&&r.alternate===null&&(r.flags|=67108866),r}function c(r,o,d,p){return o===null||o.tag!==6?(o=Su(d,r.mode,p),o.return=r,o):(o=n(o,d),o.return=r,o)}function f(r,o,d,p){var M=d.type;return M===Nl?v(r,o,d.props.children,p,d.key):o!==null&&(o.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yl&&Ne(M)===o.type)?(o=n(o,d.props),wa(o,d),o.return=r,o):(o=Xn(d.type,d.key,d.props,null,r.mode,p),wa(o,d),o.return=r,o)}function y(r,o,d,p){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=bu(d,r.mode,p),o.return=r,o):(o=n(o,d.children||[]),o.return=r,o)}function v(r,o,d,p,M){return o===null||o.tag!==7?(o=Oe(d,r.mode,p,M),o.return=r,o):(o=n(o,d),o.return=r,o)}function S(r,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Su(""+o,r.mode,d),o.return=r,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Fl:return d=Xn(o.type,o.key,o.props,null,r.mode,d),wa(d,o),d.return=r,d;case ql:return o=bu(o,r.mode,d),o.return=r,o;case Yl:return o=Ne(o),S(r,o,d)}if(vt(o)||jl(o))return o=Oe(o,r.mode,d,null),o.return=r,o;if(typeof o.then=="function")return S(r,Fn(o),d);if(o.$$typeof===Cl)return S(r,Zn(r,o),d);Wn(r,o)}return null}function m(r,o,d,p){var M=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return M!==null?null:c(r,o,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fl:return d.key===M?f(r,o,d,p):null;case ql:return d.key===M?y(r,o,d,p):null;case Yl:return d=Ne(d),m(r,o,d,p)}if(vt(d)||jl(d))return M!==null?null:v(r,o,d,p,null);if(typeof d.then=="function")return m(r,o,Fn(d),p);if(d.$$typeof===Cl)return m(r,o,Zn(r,d),p);Wn(r,d)}return null}function g(r,o,d,p,M){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return r=r.get(d)||null,c(o,r,""+p,M);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fl:return r=r.get(p.key===null?d:p.key)||null,f(o,r,p,M);case ql:return r=r.get(p.key===null?d:p.key)||null,y(o,r,p,M);case Yl:return p=Ne(p),g(r,o,d,p,M)}if(vt(p)||jl(p))return r=r.get(d)||null,v(o,r,p,M,null);if(typeof p.then=="function")return g(r,o,d,Fn(p),M);if(p.$$typeof===Cl)return g(r,o,d,Zn(o,p),M);Wn(o,p)}return null}function _(r,o,d,p){for(var M=null,K=null,O=o,L=o=0,V=null;O!==null&&L<d.length;L++){O.index>L?(V=O,O=null):V=O.sibling;var J=m(r,O,d[L],p);if(J===null){O===null&&(O=V);break}l&&O&&J.alternate===null&&t(r,O),o=i(J,o,L),K===null?M=J:K.sibling=J,K=J,O=V}if(L===d.length)return e(r,O),w&&Bt(r,L),M;if(O===null){for(;L<d.length;L++)O=S(r,d[L],p),O!==null&&(o=i(O,o,L),K===null?M=O:K.sibling=O,K=O);return w&&Bt(r,L),M}for(O=a(O);L<d.length;L++)V=g(O,r,L,d[L],p),V!==null&&(l&&V.alternate!==null&&O.delete(V.key===null?L:V.key),o=i(V,o,L),K===null?M=V:K.sibling=V,K=V);return l&&O.forEach(function(pe){return t(r,pe)}),w&&Bt(r,L),M}function R(r,o,d,p){if(d==null)throw Error(h(151));for(var M=null,K=null,O=o,L=o=0,V=null,J=d.next();O!==null&&!J.done;L++,J=d.next()){O.index>L?(V=O,O=null):V=O.sibling;var pe=m(r,O,J.value,p);if(pe===null){O===null&&(O=V);break}l&&O&&pe.alternate===null&&t(r,O),o=i(pe,o,L),K===null?M=pe:K.sibling=pe,K=pe,O=V}if(J.done)return e(r,O),w&&Bt(r,L),M;if(O===null){for(;!J.done;L++,J=d.next())J=S(r,J.value,p),J!==null&&(o=i(J,o,L),K===null?M=J:K.sibling=J,K=J);return w&&Bt(r,L),M}for(O=a(O);!J.done;L++,J=d.next())J=g(O,r,L,J.value,p),J!==null&&(l&&J.alternate!==null&&O.delete(J.key===null?L:J.key),o=i(J,o,L),K===null?M=J:K.sibling=J,K=J);return l&&O.forEach(function(K0){return t(r,K0)}),w&&Bt(r,L),M}function nl(r,o,d,p){if(typeof d=="object"&&d!==null&&d.type===Nl&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Fl:l:{for(var M=d.key;o!==null;){if(o.key===M){if(M=d.type,M===Nl){if(o.tag===7){e(r,o.sibling),p=n(o,d.props.children),p.return=r,r=p;break l}}else if(o.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yl&&Ne(M)===o.type){e(r,o.sibling),p=n(o,d.props),wa(p,d),p.return=r,r=p;break l}e(r,o);break}else t(r,o);o=o.sibling}d.type===Nl?(p=Oe(d.props.children,r.mode,p,d.key),p.return=r,r=p):(p=Xn(d.type,d.key,d.props,null,r.mode,p),wa(p,d),p.return=r,r=p)}return u(r);case ql:l:{for(M=d.key;o!==null;){if(o.key===M)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){e(r,o.sibling),p=n(o,d.children||[]),p.return=r,r=p;break l}else{e(r,o);break}else t(r,o);o=o.sibling}p=bu(d,r.mode,p),p.return=r,r=p}return u(r);case Yl:return d=Ne(d),nl(r,o,d,p)}if(vt(d))return _(r,o,d,p);if(jl(d)){if(M=jl(d),typeof M!="function")throw Error(h(150));return d=M.call(d),R(r,o,d,p)}if(typeof d.then=="function")return nl(r,o,Fn(d),p);if(d.$$typeof===Cl)return nl(r,o,Zn(r,d),p);Wn(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(e(r,o.sibling),p=n(o,d),p.return=r,r=p):(e(r,o),p=Su(d,r.mode,p),p.return=r,r=p),u(r)):e(r,o)}return function(r,o,d,p){try{Za=0;var M=nl(r,o,d,p);return fa=null,M}catch(O){if(O===ca||O===Kn)throw O;var K=lt(29,O,null,r.mode);return K.lanes=p,K.return=r,K}finally{}}}var Ge=Do(!0),Oo=Do(!1),ee=!1;function Nu(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ae(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function ne(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(W&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=jn(l),so(l,null,e),t}return Yn(l,a,t,e),jn(l)}function Ka(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,xf(l,e)}}function Gu(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?n=i=t:i=i.next=t}else n=i=t;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Hu=!1;function Ja(){if(Hu){var l=ua;if(l!==null)throw l}}function Fa(l,t,e,a){Hu=!1;var n=l.updateQueue;ee=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,y=f.next;f.next=null,u===null?i=y:u.next=y,u=f;var v=l.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=y:c.next=y,v.lastBaseUpdate=f))}if(i!==null){var S=n.baseState;u=0,v=y=f=null,c=i;do{var m=c.lane&-536870913,g=m!==c.lane;if(g?(Q&m)===m:(a&m)===m){m!==0&&m===ia&&(Hu=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var _=l,R=c;m=t;var nl=e;switch(R.tag){case 1:if(_=R.payload,typeof _=="function"){S=_.call(nl,S,m);break l}S=_;break l;case 3:_.flags=_.flags&-65537|128;case 0:if(_=R.payload,m=typeof _=="function"?_.call(nl,S,m):_,m==null)break l;S=N({},S,m);break l;case 2:ee=!0}}m=c.callback,m!==null&&(l.flags|=64,g&&(l.flags|=8192),g=n.callbacks,g===null?n.callbacks=[m]:g.push(m))}else g={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(y=v=g,f=S):v=v.next=g,u|=m;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);v===null&&(f=S),n.baseState=f,n.firstBaseUpdate=y,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),oe|=u,l.lanes=u,l.memoizedState=S}}function Mo(l,t){if(typeof l!="function")throw Error(h(191,l));l.call(t)}function Co(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)Mo(e[l],t)}var oa=s(null),kn=s(0);function Ro(l,t){l=wt,A(kn,l),A(oa,t),wt=l|t.baseLanes}function qu(){A(kn,wt),A(oa,oa.current)}function Lu(){wt=kn.current,b(oa),b(kn)}var tt=s(null),mt=null;function ie(l){var t=l.alternate;A(gl,gl.current&1),A(tt,l),mt===null&&(t===null||oa.current!==null||t.memoizedState!==null)&&(mt=l)}function Yu(l){A(gl,gl.current),A(tt,l),mt===null&&(mt=l)}function Uo(l){l.tag===22?(A(gl,gl.current),A(tt,l),mt===null&&(mt=l)):ue()}function ue(){A(gl,gl.current),A(tt,tt.current)}function et(l){b(tt),mt===l&&(mt=null),b(gl)}var gl=s(0);function In(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||wc(e)||Kc(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,q=null,el=null,pl=null,$n=!1,sa=!1,He=!1,Pn=0,Wa=0,ra=null,Hy=0;function dl(){throw Error(h(321))}function ju(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!Pl(l[e],t[e]))return!1;return!0}function Xu(l,t,e,a,n,i){return qt=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=l===null||l.memoizedState===null?hs:ec,He=!1,i=e(a,n),He=!1,sa&&(i=Bo(t,e,a,n)),No(l),i}function No(l){x.H=$a;var t=el!==null&&el.next!==null;if(qt=0,pl=el=q=null,$n=!1,Wa=0,ra=null,t)throw Error(h(300));l===null||Sl||(l=l.dependencies,l!==null&&Vn(l)&&(Sl=!0))}function Bo(l,t,e,a){q=l;var n=0;do{if(sa&&(ra=null),Wa=0,sa=!1,25<=n)throw Error(h(301));if(n+=1,pl=el=null,l.updateQueue!=null){var i=l.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=gs,i=t(e,a)}while(sa);return i}function qy(){var l=x.H,t=l.useState()[0];return t=typeof t.then=="function"?ka(t):t,l=l.useState()[0],(el!==null?el.memoizedState:null)!==l&&(q.flags|=1024),t}function Qu(){var l=Pn!==0;return Pn=0,l}function Vu(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function Zu(l){if($n){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}$n=!1}qt=0,pl=el=q=null,sa=!1,Wa=Pn=0,ra=null}function Gl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pl===null?q.memoizedState=pl=l:pl=pl.next=l,pl}function vl(){if(el===null){var l=q.alternate;l=l!==null?l.memoizedState:null}else l=el.next;var t=pl===null?q.memoizedState:pl.next;if(t!==null)pl=t,el=l;else{if(l===null)throw q.alternate===null?Error(h(467)):Error(h(310));el=l,l={memoizedState:el.memoizedState,baseState:el.baseState,baseQueue:el.baseQueue,queue:el.queue,next:null},pl===null?q.memoizedState=pl=l:pl=pl.next=l}return pl}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ka(l){var t=Wa;return Wa+=1,ra===null&&(ra=[]),l=Ao(ra,l,t),t=q,(pl===null?t.memoizedState:pl.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?hs:ec),l}function ti(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return ka(l);if(l.$$typeof===Cl)return Dl(l)}throw Error(h(438,String(l)))}function wu(l){var t=null,e=q.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=li(),q.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=je;return t.index++,e}function Lt(l,t){return typeof t=="function"?t(l):t}function ei(l){var t=vl();return Ku(t,el,l)}function Ku(l,t,e){var a=l.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var n=l.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=l.baseState,n===null)l.memoizedState=i;else{t=n.next;var c=u=null,f=null,y=t,v=!1;do{var S=y.lane&-536870913;if(S!==y.lane?(Q&S)===S:(qt&S)===S){var m=y.revertLane;if(m===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),S===ia&&(v=!0);else if((qt&m)===m){y=y.next,m===ia&&(v=!0);continue}else S={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=S,u=i):f=f.next=S,q.lanes|=m,oe|=m;S=y.action,He&&e(i,S),i=y.hasEagerState?y.eagerState:e(i,S)}else m={lane:S,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=m,u=i):f=f.next=m,q.lanes|=S,oe|=S;y=y.next}while(y!==null&&y!==t);if(f===null?u=i:f.next=c,!Pl(i,l.memoizedState)&&(Sl=!0,v&&(e=ua,e!==null)))throw e;l.memoizedState=i,l.baseState=u,l.baseQueue=f,a.lastRenderedState=i}return n===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function Ju(l){var t=vl(),e=t.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=l;var a=e.dispatch,n=e.pending,i=t.memoizedState;if(n!==null){e.pending=null;var u=n=n.next;do i=l(i,u.action),u=u.next;while(u!==n);Pl(i,t.memoizedState)||(Sl=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),e.lastRenderedState=i}return[i,a]}function Go(l,t,e){var a=q,n=vl(),i=w;if(i){if(e===void 0)throw Error(h(407));e=e()}else e=t();var u=!Pl((el||n).memoizedState,e);if(u&&(n.memoizedState=e,Sl=!0),n=n.queue,ku(Lo.bind(null,a,n,l),[l]),n.getSnapshot!==t||u||pl!==null&&pl.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},qo.bind(null,a,n,e,t),null),ul===null)throw Error(h(349));i||(qt&127)!==0||Ho(a,t,e)}return e}function Ho(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=q.updateQueue,t===null?(t=li(),q.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function qo(l,t,e,a){t.value=e,t.getSnapshot=a,Yo(t)&&jo(l)}function Lo(l,t,e){return e(function(){Yo(t)&&jo(l)})}function Yo(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!Pl(l,e)}catch{return!0}}function jo(l){var t=De(l,2);t!==null&&Jl(t,l,2)}function Fu(l){var t=Gl();if(typeof l=="function"){var e=l;if(l=e(),He){Wt(!0);try{e()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:l},t}function Xo(l,t,e,a){return l.baseState=e,Ku(l,el,typeof a=="function"?a:Lt)}function Ly(l,t,e,a,n){if(ii(l))throw Error(h(485));if(l=t.action,l!==null){var i={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};x.T!==null?e(!0):i.isTransition=!1,a(i),e=t.pending,e===null?(i.next=t.pending=i,Qo(t,i)):(i.next=e.next,t.pending=e.next=i)}}function Qo(l,t){var e=t.action,a=t.payload,n=l.state;if(t.isTransition){var i=x.T,u={};x.T=u;try{var c=e(n,a),f=x.S;f!==null&&f(u,c),Vo(l,t,c)}catch(y){Wu(l,t,y)}finally{i!==null&&u.types!==null&&(i.types=u.types),x.T=i}}else try{i=e(n,a),Vo(l,t,i)}catch(y){Wu(l,t,y)}}function Vo(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Zo(l,t,a)},function(a){return Wu(l,t,a)}):Zo(l,t,e)}function Zo(l,t,e){t.status="fulfilled",t.value=e,wo(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Qo(l,e)))}function Wu(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,wo(t),t=t.next;while(t!==a)}l.action=null}function wo(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Ko(l,t){return t}function Jo(l,t){if(w){var e=ul.formState;if(e!==null){l:{var a=q;if(w){if(cl){t:{for(var n=cl,i=yt;n.nodeType!==8;){if(!i){n=null;break t}if(n=ht(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){cl=ht(n.nextSibling),a=n.data==="F!";break l}}le(a)}a=!1}a&&(t=e[0])}}return e=Gl(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=a,e=ds.bind(null,q,a),a.dispatch=e,a=Fu(!1),i=tc.bind(null,q,!1,a.queue),a=Gl(),n={state:t,dispatch:null,action:l,pending:null},a.queue=n,e=Ly.bind(null,q,n,i,e),n.dispatch=e,a.memoizedState=l,[t,e,!1]}function Fo(l){var t=vl();return Wo(t,el,l)}function Wo(l,t,e){if(t=Ku(l,t,Ko)[0],l=ei(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ka(t)}catch(u){throw u===ca?Kn:u}else a=t;t=vl();var n=t.queue,i=n.dispatch;return e!==t.memoizedState&&(q.flags|=2048,da(9,{destroy:void 0},Yy.bind(null,n,e),null)),[a,i,l]}function Yy(l,t){l.action=t}function ko(l){var t=vl(),e=el;if(e!==null)return Wo(t,e,l);vl(),t=t.memoizedState,e=vl();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function da(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=q.updateQueue,t===null&&(t=li(),q.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function Io(){return vl().memoizedState}function ai(l,t,e,a){var n=Gl();q.flags|=l,n.memoizedState=da(1|t,{destroy:void 0},e,a===void 0?null:a)}function ni(l,t,e,a){var n=vl();a=a===void 0?null:a;var i=n.memoizedState.inst;el!==null&&a!==null&&ju(a,el.memoizedState.deps)?n.memoizedState=da(t,i,e,a):(q.flags|=l,n.memoizedState=da(1|t,i,e,a))}function $o(l,t){ai(8390656,8,l,t)}function ku(l,t){ni(2048,8,l,t)}function jy(l){q.flags|=4;var t=q.updateQueue;if(t===null)t=li(),q.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function Po(l){var t=vl().memoizedState;return jy({ref:t,nextImpl:l}),function(){if((W&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function ls(l,t){return ni(4,2,l,t)}function ts(l,t){return ni(4,4,l,t)}function es(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function as(l,t,e){e=e!=null?e.concat([l]):null,ni(4,4,es.bind(null,t,l),e)}function Iu(){}function ns(l,t){var e=vl();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&ju(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function is(l,t){var e=vl();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&ju(t,a[1]))return a[0];if(a=l(),He){Wt(!0);try{l()}finally{Wt(!1)}}return e.memoizedState=[a,t],a}function $u(l,t,e){return e===void 0||(qt&1073741824)!==0&&(Q&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=ur(),q.lanes|=l,oe|=l,e)}function us(l,t,e,a){return Pl(e,t)?e:oa.current!==null?(l=$u(l,e,a),Pl(l,t)||(Sl=!0),l):(qt&42)===0||(qt&1073741824)!==0&&(Q&261930)===0?(Sl=!0,l.memoizedState=e):(l=ur(),q.lanes|=l,oe|=l,t)}function cs(l,t,e,a,n){var i=T.p;T.p=i!==0&&8>i?i:8;var u=x.T,c={};x.T=c,tc(l,!1,t,e);try{var f=n(),y=x.S;if(y!==null&&y(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var v=Gy(f,a);Ia(l,t,v,it(l))}else Ia(l,t,a,it(l))}catch(S){Ia(l,t,{then:function(){},status:"rejected",reason:S},it())}finally{T.p=i,u!==null&&c.types!==null&&(u.types=c.types),x.T=u}}function Xy(){}function Pu(l,t,e,a){if(l.tag!==5)throw Error(h(476));var n=fs(l).queue;cs(l,n,t,B,e===null?Xy:function(){return os(l),e(a)})}function fs(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:B},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function os(l){var t=fs(l);t.next===null&&(t=l.alternate.memoizedState),Ia(l,t.next.queue,{},it())}function lc(){return Dl(hn)}function ss(){return vl().memoizedState}function rs(){return vl().memoizedState}function Qy(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=it();l=ae(e);var a=ne(t,l,e);a!==null&&(Jl(a,t,e),Ka(a,t,e)),t={cache:Mu()},l.payload=t;return}t=t.return}}function Vy(l,t,e){var a=it();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ii(l)?ys(t,e):(e=xu(l,t,e,a),e!==null&&(Jl(e,l,a),ms(e,t,a)))}function ds(l,t,e){var a=it();Ia(l,t,e,a)}function Ia(l,t,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(ii(l))ys(t,n);else{var i=l.alternate;if(l.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,e);if(n.hasEagerState=!0,n.eagerState=c,Pl(c,u))return Yn(l,t,n,0),ul===null&&Ln(),!1}catch{}finally{}if(e=xu(l,t,n,a),e!==null)return Jl(e,l,a),ms(e,t,a),!0}return!1}function tc(l,t,e,a){if(a={lane:2,revertLane:Nc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(l)){if(t)throw Error(h(479))}else t=xu(l,e,a,2),t!==null&&Jl(t,l,2)}function ii(l){var t=l.alternate;return l===q||t!==null&&t===q}function ys(l,t){sa=$n=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function ms(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,xf(l,e)}}var $a={readContext:Dl,use:ti,useCallback:dl,useContext:dl,useEffect:dl,useImperativeHandle:dl,useLayoutEffect:dl,useInsertionEffect:dl,useMemo:dl,useReducer:dl,useRef:dl,useState:dl,useDebugValue:dl,useDeferredValue:dl,useTransition:dl,useSyncExternalStore:dl,useId:dl,useHostTransitionStatus:dl,useFormState:dl,useActionState:dl,useOptimistic:dl,useMemoCache:dl,useCacheRefresh:dl};$a.useEffectEvent=dl;var hs={readContext:Dl,use:ti,useCallback:function(l,t){return Gl().memoizedState=[l,t===void 0?null:t],l},useContext:Dl,useEffect:$o,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,ai(4194308,4,es.bind(null,t,l),e)},useLayoutEffect:function(l,t){return ai(4194308,4,l,t)},useInsertionEffect:function(l,t){ai(4,2,l,t)},useMemo:function(l,t){var e=Gl();t=t===void 0?null:t;var a=l();if(He){Wt(!0);try{l()}finally{Wt(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=Gl();if(e!==void 0){var n=e(t);if(He){Wt(!0);try{e(t)}finally{Wt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},a.queue=l,l=l.dispatch=Vy.bind(null,q,l),[a.memoizedState,l]},useRef:function(l){var t=Gl();return l={current:l},t.memoizedState=l},useState:function(l){l=Fu(l);var t=l.queue,e=ds.bind(null,q,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:Iu,useDeferredValue:function(l,t){var e=Gl();return $u(e,l,t)},useTransition:function(){var l=Fu(!1);return l=cs.bind(null,q,l.queue,!0,!1),Gl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=q,n=Gl();if(w){if(e===void 0)throw Error(h(407));e=e()}else{if(e=t(),ul===null)throw Error(h(349));(Q&127)!==0||Ho(a,t,e)}n.memoizedState=e;var i={value:e,getSnapshot:t};return n.queue=i,$o(Lo.bind(null,a,i,l),[l]),a.flags|=2048,da(9,{destroy:void 0},qo.bind(null,a,i,e,t),null),e},useId:function(){var l=Gl(),t=ul.identifierPrefix;if(w){var e=_t,a=At;e=(a&~(1<<32-$l(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=Pn++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Hy++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:lc,useFormState:Jo,useActionState:Jo,useOptimistic:function(l){var t=Gl();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=tc.bind(null,q,!0,e),e.dispatch=t,[l,t]},useMemoCache:wu,useCacheRefresh:function(){return Gl().memoizedState=Qy.bind(null,q)},useEffectEvent:function(l){var t=Gl(),e={impl:l};return t.memoizedState=e,function(){if((W&2)!==0)throw Error(h(440));return e.impl.apply(void 0,arguments)}}},ec={readContext:Dl,use:ti,useCallback:ns,useContext:Dl,useEffect:ku,useImperativeHandle:as,useInsertionEffect:ls,useLayoutEffect:ts,useMemo:is,useReducer:ei,useRef:Io,useState:function(){return ei(Lt)},useDebugValue:Iu,useDeferredValue:function(l,t){var e=vl();return us(e,el.memoizedState,l,t)},useTransition:function(){var l=ei(Lt)[0],t=vl().memoizedState;return[typeof l=="boolean"?l:ka(l),t]},useSyncExternalStore:Go,useId:ss,useHostTransitionStatus:lc,useFormState:Fo,useActionState:Fo,useOptimistic:function(l,t){var e=vl();return Xo(e,el,l,t)},useMemoCache:wu,useCacheRefresh:rs};ec.useEffectEvent=Po;var gs={readContext:Dl,use:ti,useCallback:ns,useContext:Dl,useEffect:ku,useImperativeHandle:as,useInsertionEffect:ls,useLayoutEffect:ts,useMemo:is,useReducer:Ju,useRef:Io,useState:function(){return Ju(Lt)},useDebugValue:Iu,useDeferredValue:function(l,t){var e=vl();return el===null?$u(e,l,t):us(e,el.memoizedState,l,t)},useTransition:function(){var l=Ju(Lt)[0],t=vl().memoizedState;return[typeof l=="boolean"?l:ka(l),t]},useSyncExternalStore:Go,useId:ss,useHostTransitionStatus:lc,useFormState:ko,useActionState:ko,useOptimistic:function(l,t){var e=vl();return el!==null?Xo(e,el,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:wu,useCacheRefresh:rs};gs.useEffectEvent=Po;function ac(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:N({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var nc={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=it(),n=ae(a);n.payload=t,e!=null&&(n.callback=e),t=ne(l,n,a),t!==null&&(Jl(t,l,a),Ka(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=it(),n=ae(a);n.tag=1,n.payload=t,e!=null&&(n.callback=e),t=ne(l,n,a),t!==null&&(Jl(t,l,a),Ka(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=it(),a=ae(e);a.tag=2,t!=null&&(a.callback=t),t=ne(l,a,e),t!==null&&(Jl(t,l,e),Ka(t,l,e))}};function vs(l,t,e,a,n,i,u){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!La(e,a)||!La(n,i):!0}function xs(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&nc.enqueueReplaceState(t,t.state,null)}function qe(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=N({},e));for(var n in l)e[n]===void 0&&(e[n]=l[n])}return e}function ps(l){qn(l)}function Ss(l){console.error(l)}function bs(l){qn(l)}function ui(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Es(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ic(l,t,e){return e=ae(e),e.tag=3,e.payload={element:null},e.callback=function(){ui(l,t)},e}function Ts(l){return l=ae(l),l.tag=3,l}function As(l,t,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;l.payload=function(){return n(i)},l.callback=function(){Es(t,e,a)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(l.callback=function(){Es(t,e,a),typeof n!="function"&&(se===null?se=new Set([this]):se.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Zy(l,t,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&na(t,e,n,!0),e=tt.current,e!==null){switch(e.tag){case 31:case 13:return mt===null?xi():e.alternate===null&&yl===0&&(yl=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===Jn?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Cc(l,a,n)),!1;case 22:return e.flags|=65536,a===Jn?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Cc(l,a,n)),!1}throw Error(h(435,e.tag))}return Cc(l,a,n),xi(),!1}if(w)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Au&&(l=Error(h(422),{cause:a}),Xa(st(l,e)))):(a!==Au&&(t=Error(h(423),{cause:a}),Xa(st(t,e))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,a=st(a,e),n=ic(l.stateNode,a,n),Gu(l,n),yl!==4&&(yl=2)),!1;var i=Error(h(520),{cause:a});if(i=st(i,e),cn===null?cn=[i]:cn.push(i),yl!==4&&(yl=2),t===null)return!0;a=st(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=n&-n,e.lanes|=l,l=ic(e.stateNode,a,l),Gu(e,l),!1;case 1:if(t=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(se===null||!se.has(i))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Ts(n),As(n,l,e,a),Gu(e,n),!1}e=e.return}while(e!==null);return!1}var uc=Error(h(461)),Sl=!1;function Ol(l,t,e,a){t.child=l===null?Oo(t,null,e,a):Ge(t,l.child,e,a)}function _s(l,t,e,a,n){e=e.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Re(t),a=Xu(l,t,e,u,i,n),c=Qu(),l!==null&&!Sl?(Vu(l,t,n),Yt(l,t,n)):(w&&c&&Eu(t),t.flags|=1,Ol(l,t,a,n),t.child)}function zs(l,t,e,a,n){if(l===null){var i=e.type;return typeof i=="function"&&!pu(i)&&i.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=i,Ds(l,t,i,a,n)):(l=Xn(e.type,null,a,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(i=l.child,!mc(l,n)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:La,e(u,a)&&l.ref===t.ref)return Yt(l,t,n)}return t.flags|=1,l=Nt(i,a),l.ref=t.ref,l.return=t,t.child=l}function Ds(l,t,e,a,n){if(l!==null){var i=l.memoizedProps;if(La(i,a)&&l.ref===t.ref)if(Sl=!1,t.pendingProps=a=i,mc(l,n))(l.flags&131072)!==0&&(Sl=!0);else return t.lanes=l.lanes,Yt(l,t,n)}return cc(l,t,e,a,n)}function Os(l,t,e,a){var n=a.children,i=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,l!==null){for(a=t.child=l.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Ms(l,t,i,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&wn(t,i!==null?i.cachePool:null),i!==null?Ro(t,i):qu(),Uo(t);else return a=t.lanes=536870912,Ms(l,t,i!==null?i.baseLanes|e:e,e,a)}else i!==null?(wn(t,i.cachePool),Ro(t,i),ue(),t.memoizedState=null):(l!==null&&wn(t,null),qu(),ue());return Ol(l,t,n,e),t.child}function Pa(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ms(l,t,e,a,n){var i=Ru();return i=i===null?null:{parent:xl._currentValue,pool:i},t.memoizedState={baseLanes:e,cachePool:i},l!==null&&wn(t,null),qu(),Uo(t),l!==null&&na(l,t,a,!0),t.childLanes=n,null}function ci(l,t){return t=oi({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Cs(l,t,e){return Ge(t,l.child,null,e),l=ci(t,t.pendingProps),l.flags|=2,et(t),t.memoizedState=null,l}function wy(l,t,e){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(w){if(a.mode==="hidden")return l=ci(t,a),t.lanes=536870912,Pa(null,l);if(Yu(t),(l=cl)?(l=Qr(l,yt),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:$t!==null?{id:At,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},e=yo(l),e.return=t,t.child=e,zl=t,cl=null)):l=null,l===null)throw le(t);return t.lanes=536870912,null}return ci(t,a)}var i=l.memoizedState;if(i!==null){var u=i.dehydrated;if(Yu(t),n)if(t.flags&256)t.flags&=-257,t=Cs(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(h(558));else if(Sl||na(l,t,e,!1),n=(e&l.childLanes)!==0,Sl||n){if(a=ul,a!==null&&(u=pf(a,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,De(l,u),Jl(a,l,u),uc;xi(),t=Cs(l,t,e)}else l=i.treeContext,cl=ht(u.nextSibling),zl=t,w=!0,Pt=null,yt=!1,l!==null&&go(t,l),t=ci(t,a),t.flags|=4096;return t}return l=Nt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fi(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(h(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function cc(l,t,e,a,n){return Re(t),e=Xu(l,t,e,a,void 0,n),a=Qu(),l!==null&&!Sl?(Vu(l,t,n),Yt(l,t,n)):(w&&a&&Eu(t),t.flags|=1,Ol(l,t,e,n),t.child)}function Rs(l,t,e,a,n,i){return Re(t),t.updateQueue=null,e=Bo(t,a,e,n),No(l),a=Qu(),l!==null&&!Sl?(Vu(l,t,i),Yt(l,t,i)):(w&&a&&Eu(t),t.flags|=1,Ol(l,t,e,i),t.child)}function Us(l,t,e,a,n){if(Re(t),t.stateNode===null){var i=la,u=e.contextType;typeof u=="object"&&u!==null&&(i=Dl(u)),i=new e(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Nu(t),u=e.contextType,i.context=typeof u=="object"&&u!==null?Dl(u):la,i.state=t.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(ac(t,e,u,a),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&nc.enqueueReplaceState(i,i.state,null),Fa(t,a,i,n),Ja(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){i=t.stateNode;var c=t.memoizedProps,f=qe(e,c);i.props=f;var y=i.context,v=e.contextType;u=la,typeof v=="object"&&v!==null&&(u=Dl(v));var S=e.getDerivedStateFromProps;v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||y!==u)&&xs(t,i,a,u),ee=!1;var m=t.memoizedState;i.state=m,Fa(t,a,i,n),Ja(),y=t.memoizedState,c||m!==y||ee?(typeof S=="function"&&(ac(t,e,S,a),y=t.memoizedState),(f=ee||vs(t,e,f,a,m,y,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=u,a=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Bu(l,t),u=t.memoizedProps,v=qe(e,u),i.props=v,S=t.pendingProps,m=i.context,y=e.contextType,f=la,typeof y=="object"&&y!==null&&(f=Dl(y)),c=e.getDerivedStateFromProps,(y=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||m!==f)&&xs(t,i,a,f),ee=!1,m=t.memoizedState,i.state=m,Fa(t,a,i,n),Ja();var g=t.memoizedState;u!==S||m!==g||ee||l!==null&&l.dependencies!==null&&Vn(l.dependencies)?(typeof c=="function"&&(ac(t,e,c,a),g=t.memoizedState),(v=ee||vs(t,e,v,a,m,g,f)||l!==null&&l.dependencies!==null&&Vn(l.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=f,a=v):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),a=!1)}return i=a,fi(l,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,l!==null&&a?(t.child=Ge(t,l.child,null,n),t.child=Ge(t,null,e,n)):Ol(l,t,e,n),t.memoizedState=i.state,l=t.child):l=Yt(l,t,n),l}function Ns(l,t,e,a){return Me(),t.flags|=256,Ol(l,t,e,a),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(l){return{baseLanes:l,cachePool:Eo()}}function sc(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=nt),l}function Bs(l,t,e){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=l!==null&&l.memoizedState===null?!1:(gl.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,l===null){if(w){if(n?ie(t):ue(),(l=cl)?(l=Qr(l,yt),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:$t!==null?{id:At,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},e=yo(l),e.return=t,t.child=e,zl=t,cl=null)):l=null,l===null)throw le(t);return Kc(l)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ue(),n=t.mode,c=oi({mode:"hidden",children:c},n),a=Oe(a,n,e,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=oc(e),a.childLanes=sc(l,u,e),t.memoizedState=fc,Pa(null,a)):(ie(t),rc(t,c))}var f=l.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)t.flags&256?(ie(t),t.flags&=-257,t=dc(l,t,e)):t.memoizedState!==null?(ue(),t.child=l.child,t.flags|=128,t=null):(ue(),c=a.fallback,n=t.mode,a=oi({mode:"visible",children:a.children},n),c=Oe(c,n,e,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Ge(t,l.child,null,e),a=t.child,a.memoizedState=oc(e),a.childLanes=sc(l,u,e),t.memoizedState=fc,t=Pa(null,a));else if(ie(t),Kc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(h(419)),a.stack="",a.digest=u,Xa({value:a,source:null,stack:null}),t=dc(l,t,e)}else if(Sl||na(l,t,e,!1),u=(e&l.childLanes)!==0,Sl||u){if(u=ul,u!==null&&(a=pf(u,e),a!==0&&a!==f.retryLane))throw f.retryLane=a,De(l,a),Jl(u,l,a),uc;wc(c)||xi(),t=dc(l,t,e)}else wc(c)?(t.flags|=192,t.child=l.child,t=null):(l=f.treeContext,cl=ht(c.nextSibling),zl=t,w=!0,Pt=null,yt=!1,l!==null&&go(t,l),t=rc(t,a.children),t.flags|=4096);return t}return n?(ue(),c=a.fallback,n=t.mode,f=l.child,y=f.sibling,a=Nt(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,y!==null?c=Nt(y,c):(c=Oe(c,n,e,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Pa(null,a),a=t.child,c=l.child.memoizedState,c===null?c=oc(e):(n=c.cachePool,n!==null?(f=xl._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Eo(),c={baseLanes:c.baseLanes|e,cachePool:n}),a.memoizedState=c,a.childLanes=sc(l,u,e),t.memoizedState=fc,Pa(l.child,a)):(ie(t),e=l.child,l=e.sibling,e=Nt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(u=t.deletions,u===null?(t.deletions=[l],t.flags|=16):u.push(l)),t.child=e,t.memoizedState=null,e)}function rc(l,t){return t=oi({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function oi(l,t){return l=lt(22,l,null,t),l.lanes=0,l}function dc(l,t,e){return Ge(t,l.child,null,e),l=rc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Gs(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),Du(l.return,t,e)}function yc(l,t,e,a,n,i){var u=l.memoizedState;u===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=e,u.tailMode=n,u.treeForkCount=i)}function Hs(l,t,e){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=gl.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,A(gl,u),Ol(l,t,a,e),a=w?ja:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Gs(l,e,t);else if(l.tag===19)Gs(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(e=t.child,n=null;e!==null;)l=e.alternate,l!==null&&In(l)===null&&(n=e),e=e.sibling;e=n,e===null?(n=t.child,t.child=null):(n=e.sibling,e.sibling=null),yc(t,!1,n,e,i,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&In(l)===null){t.child=n;break}l=n.sibling,n.sibling=e,e=n,n=l}yc(t,!0,e,null,i,a);break;case"together":yc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Yt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),oe|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(na(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(h(153));if(t.child!==null){for(l=t.child,e=Nt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Nt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function mc(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Vn(l)))}function Ky(l,t,e){switch(t.tag){case 3:Bl(t,t.stateNode.containerInfo),te(t,xl,l.memoizedState.cache),Me();break;case 27:case 5:_a(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:te(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ie(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Bs(l,t,e):(ie(t),l=Yt(l,t,e),l!==null?l.sibling:null);ie(t);break;case 19:var n=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(na(l,t,e,!1),a=(e&t.childLanes)!==0),n){if(a)return Hs(l,t,e);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),A(gl,gl.current),a)break;return null;case 22:return t.lanes=0,Os(l,t,e,t.pendingProps);case 24:te(t,xl,l.memoizedState.cache)}return Yt(l,t,e)}function qs(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)Sl=!0;else{if(!mc(l,e)&&(t.flags&128)===0)return Sl=!1,Ky(l,t,e);Sl=(l.flags&131072)!==0}else Sl=!1,w&&(t.flags&1048576)!==0&&ho(t,ja,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=Ne(t.elementType),t.type=l,typeof l=="function")pu(l)?(a=qe(l,a),t.tag=1,t=Us(null,t,l,a,e)):(t.tag=0,t=cc(null,t,l,a,e));else{if(l!=null){var n=l.$$typeof;if(n===ut){t.tag=11,t=_s(null,t,l,a,e);break l}else if(n===Z){t.tag=14,t=zs(null,t,l,a,e);break l}}throw t=Mt(l)||l,Error(h(306,t,""))}}return t;case 0:return cc(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,n=qe(a,t.pendingProps),Us(l,t,a,n,e);case 3:l:{if(Bl(t,t.stateNode.containerInfo),l===null)throw Error(h(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Bu(l,t),Fa(t,a,null,e);var u=t.memoizedState;if(a=u.cache,te(t,xl,a),a!==i.cache&&Ou(t,[xl],e,!0),Ja(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Ns(l,t,a,e);break l}else if(a!==n){n=st(Error(h(424)),t),Xa(n),t=Ns(l,t,a,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(cl=ht(l.firstChild),zl=t,w=!0,Pt=null,yt=!0,e=Oo(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Me(),a===n){t=Yt(l,t,e);break l}Ol(l,t,a,e)}t=t.child}return t;case 26:return fi(l,t),l===null?(e=Fr(t.type,null,t.pendingProps,null))?t.memoizedState=e:w||(e=t.type,l=t.pendingProps,a=_i(Y.current).createElement(e),a[_l]=t,a[Xl]=l,Ml(a,e,l),Tl(a),t.stateNode=a):t.memoizedState=Fr(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return _a(t),l===null&&w&&(a=t.stateNode=wr(t.type,t.pendingProps,Y.current),zl=t,yt=!0,n=cl,me(t.type)?(Jc=n,cl=ht(a.firstChild)):cl=n),Ol(l,t,t.pendingProps.children,e),fi(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&w&&((n=a=cl)&&(a=E0(a,t.type,t.pendingProps,yt),a!==null?(t.stateNode=a,zl=t,cl=ht(a.firstChild),yt=!1,n=!0):n=!1),n||le(t)),_a(t),n=t.type,i=t.pendingProps,u=l!==null?l.memoizedProps:null,a=i.children,Qc(n,i)?a=null:u!==null&&Qc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Xu(l,t,qy,null,null,e),hn._currentValue=n),fi(l,t),Ol(l,t,a,e),t.child;case 6:return l===null&&w&&((l=e=cl)&&(e=T0(e,t.pendingProps,yt),e!==null?(t.stateNode=e,zl=t,cl=null,l=!0):l=!1),l||le(t)),null;case 13:return Bs(l,t,e);case 4:return Bl(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=Ge(t,null,a,e):Ol(l,t,a,e),t.child;case 11:return _s(l,t,t.type,t.pendingProps,e);case 7:return Ol(l,t,t.pendingProps,e),t.child;case 8:return Ol(l,t,t.pendingProps.children,e),t.child;case 12:return Ol(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,te(t,t.type,a.value),Ol(l,t,a.children,e),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Re(t),n=Dl(n),a=a(n),t.flags|=1,Ol(l,t,a,e),t.child;case 14:return zs(l,t,t.type,t.pendingProps,e);case 15:return Ds(l,t,t.type,t.pendingProps,e);case 19:return Hs(l,t,e);case 31:return wy(l,t,e);case 22:return Os(l,t,e,t.pendingProps);case 24:return Re(t),a=Dl(xl),l===null?(n=Ru(),n===null&&(n=ul,i=Mu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=e),n=i),t.memoizedState={parent:a,cache:n},Nu(t),te(t,xl,n)):((l.lanes&e)!==0&&(Bu(l,t),Fa(t,null,null,e),Ja()),n=l.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),te(t,xl,a)):(a=i.cache,te(t,xl,a),a!==n.cache&&Ou(t,[xl],e,!0))),Ol(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function jt(l){l.flags|=4}function hc(l,t,e,a,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(sr())l.flags|=8192;else throw Be=Jn,Uu}else l.flags&=-16777217}function Ls(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!Pr(t))if(sr())l.flags|=8192;else throw Be=Jn,Uu}function si(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?gf():536870912,l.lanes|=t,ga|=t)}function ln(l,t){if(!w)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function fl(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function Jy(l,t,e){var a=t.pendingProps;switch(Tu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fl(t),null;case 1:return fl(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ht(xl),hl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(aa(t)?jt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_u())),fl(t),null;case 26:var n=t.type,i=t.memoizedState;return l===null?(jt(t),i!==null?(fl(t),Ls(t,i)):(fl(t),hc(t,n,null,a,e))):i?i!==l.memoizedState?(jt(t),fl(t),Ls(t,i)):(fl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&jt(t),fl(t),hc(t,n,l,a,e)),null;case 27:if(bn(t),e=Y.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return fl(t),null}l=D.current,aa(t)?vo(t):(l=wr(n,a,e),t.stateNode=l,jt(t))}return fl(t),null;case 5:if(bn(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return fl(t),null}if(i=D.current,aa(t))vo(t);else{var u=_i(Y.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[_l]=t,i[Xl]=a;l:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break l;for(;u.sibling===null;){if(u.return===null||u.return===t)break l;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;l:switch(Ml(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&jt(t)}}return fl(t),hc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&jt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(l=Y.current,aa(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,n=zl,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}l[_l]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Br(l.nodeValue,e)),l||le(t,!0)}else l=_i(l).createTextNode(a),l[_l]=t,t.stateNode=l}return fl(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(a=aa(t),e!==null){if(l===null){if(!a)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(557));l[_l]=t}else Me(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),l=!1}else e=_u(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(et(t),t):(et(t),null);if((t.flags&128)!==0)throw Error(h(558))}return fl(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=aa(t),a!==null&&a.dehydrated!==null){if(l===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[_l]=t}else Me(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fl(t),n=!1}else n=_u(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(et(t),t):(et(t),null)}return et(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,l=l!==null&&l.memoizedState!==null,e&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),si(t,t.updateQueue),fl(t),null);case 4:return hl(),l===null&&qc(t.stateNode.containerInfo),fl(t),null;case 10:return Ht(t.type),fl(t),null;case 19:if(b(gl),a=t.memoizedState,a===null)return fl(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)ln(a,!1);else{if(yl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(i=In(l),i!==null){for(t.flags|=128,ln(a,!1),l=i.updateQueue,t.updateQueue=l,si(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)ro(e,l),e=e.sibling;return A(gl,gl.current&1|2),w&&Bt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&kl()>hi&&(t.flags|=128,n=!0,ln(a,!1),t.lanes=4194304)}else{if(!n)if(l=In(i),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,si(t,l),ln(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!w)return fl(t),null}else 2*kl()-a.renderingStartTime>hi&&e!==536870912&&(t.flags|=128,n=!0,ln(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(l=a.last,l!==null?l.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=kl(),l.sibling=null,e=gl.current,A(gl,n?e&1|2:e&1),w&&Bt(t,a.treeForkCount),l):(fl(t),null);case 22:case 23:return et(t),Lu(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(fl(t),t.subtreeFlags&6&&(t.flags|=8192)):fl(t),e=t.updateQueue,e!==null&&si(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&b(Ue),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Ht(xl),fl(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Fy(l,t){switch(Tu(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Ht(xl),hl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return bn(t),null;case 31:if(t.memoizedState!==null){if(et(t),t.alternate===null)throw Error(h(340));Me()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(et(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Me()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return b(gl),null;case 4:return hl(),null;case 10:return Ht(t.type),null;case 22:case 23:return et(t),Lu(),l!==null&&b(Ue),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Ht(xl),null;case 25:return null;default:return null}}function Ys(l,t){switch(Tu(t),t.tag){case 3:Ht(xl),hl();break;case 26:case 27:case 5:bn(t);break;case 4:hl();break;case 31:t.memoizedState!==null&&et(t);break;case 13:et(t);break;case 19:b(gl);break;case 10:Ht(t.type);break;case 22:case 23:et(t),Lu(),l!==null&&b(Ue);break;case 24:Ht(xl)}}function tn(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&l)===l){a=void 0;var i=e.create,u=e.inst;a=i(),u.destroy=a}e=e.next}while(e!==n)}}catch(c){ll(t,t.return,c)}}function ce(l,t,e){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&l)===l){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var f=e,y=c;try{y()}catch(v){ll(n,f,v)}}}a=a.next}while(a!==i)}}catch(v){ll(t,t.return,v)}}function js(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Co(t,e)}catch(a){ll(l,l.return,a)}}}function Xs(l,t,e){e.props=qe(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){ll(l,t,a)}}function en(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(n){ll(l,t,n)}}function zt(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){ll(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){ll(l,t,n)}else e.current=null}function Qs(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){ll(l,l.return,n)}}function gc(l,t,e){try{var a=l.stateNode;g0(a,l.type,e,t),a[Xl]=t}catch(n){ll(l,l.return,n)}}function Vs(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&me(l.type)||l.tag===4}function vc(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Vs(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&me(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function xc(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Rt));else if(a!==4&&(a===27&&me(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(xc(l,t,e),l=l.sibling;l!==null;)xc(l,t,e),l=l.sibling}function ri(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&me(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(ri(l,t,e),l=l.sibling;l!==null;)ri(l,t,e),l=l.sibling}function Zs(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ml(t,a,e),t[_l]=l,t[Xl]=e}catch(i){ll(l,l.return,i)}}var Xt=!1,bl=!1,pc=!1,ws=typeof WeakSet=="function"?WeakSet:Set,Al=null;function Wy(l,t){if(l=l.containerInfo,jc=Ui,l=eo(l),du(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break l}var u=0,c=-1,f=-1,y=0,v=0,S=l,m=null;t:for(;;){for(var g;S!==e||n!==0&&S.nodeType!==3||(c=u+n),S!==i||a!==0&&S.nodeType!==3||(f=u+a),S.nodeType===3&&(u+=S.nodeValue.length),(g=S.firstChild)!==null;)m=S,S=g;for(;;){if(S===l)break t;if(m===e&&++y===n&&(c=u),m===i&&++v===a&&(f=u),(g=S.nextSibling)!==null)break;S=m,m=S.parentNode}S=g}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Xc={focusedElem:l,selectionRange:e},Ui=!1,Al=t;Al!==null;)if(t=Al,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Al=l;else for(;Al!==null;){switch(t=Al,i=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)n=l[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&i!==null){l=void 0,e=t,n=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var _=qe(e.type,n);l=a.getSnapshotBeforeUpdate(_,i),a.__reactInternalSnapshotBeforeUpdate=l}catch(R){ll(e,e.return,R)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)Zc(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Zc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(h(163))}if(l=t.sibling,l!==null){l.return=t.return,Al=l;break}Al=t.return}}function Ks(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Vt(l,e),a&4&&tn(5,e);break;case 1:if(Vt(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(u){ll(e,e.return,u)}else{var n=qe(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(u){ll(e,e.return,u)}}a&64&&js(e),a&512&&en(e,e.return);break;case 3:if(Vt(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Co(l,t)}catch(u){ll(e,e.return,u)}}break;case 27:t===null&&a&4&&Zs(e);case 26:case 5:Vt(l,e),t===null&&a&4&&Qs(e),a&512&&en(e,e.return);break;case 12:Vt(l,e);break;case 31:Vt(l,e),a&4&&Ws(l,e);break;case 13:Vt(l,e),a&4&&ks(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=n0.bind(null,e),A0(l,e))));break;case 22:if(a=e.memoizedState!==null||Xt,!a){t=t!==null&&t.memoizedState!==null||bl,n=Xt;var i=bl;Xt=a,(bl=t)&&!i?Zt(l,e,(e.subtreeFlags&8772)!==0):Vt(l,e),Xt=n,bl=i}break;case 30:break;default:Vt(l,e)}}function Js(l){var t=l.alternate;t!==null&&(l.alternate=null,Js(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Wi(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var sl=null,Vl=!1;function Qt(l,t,e){for(e=e.child;e!==null;)Fs(l,t,e),e=e.sibling}function Fs(l,t,e){if(Il&&typeof Il.onCommitFiberUnmount=="function")try{Il.onCommitFiberUnmount(za,e)}catch{}switch(e.tag){case 26:bl||zt(e,t),Qt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:bl||zt(e,t);var a=sl,n=Vl;me(e.type)&&(sl=e.stateNode,Vl=!1),Qt(l,t,e),dn(e.stateNode),sl=a,Vl=n;break;case 5:bl||zt(e,t);case 6:if(a=sl,n=Vl,sl=null,Qt(l,t,e),sl=a,Vl=n,sl!==null)if(Vl)try{(sl.nodeType===9?sl.body:sl.nodeName==="HTML"?sl.ownerDocument.body:sl).removeChild(e.stateNode)}catch(i){ll(e,t,i)}else try{sl.removeChild(e.stateNode)}catch(i){ll(e,t,i)}break;case 18:sl!==null&&(Vl?(l=sl,jr(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),Aa(l)):jr(sl,e.stateNode));break;case 4:a=sl,n=Vl,sl=e.stateNode.containerInfo,Vl=!0,Qt(l,t,e),sl=a,Vl=n;break;case 0:case 11:case 14:case 15:ce(2,e,t),bl||ce(4,e,t),Qt(l,t,e);break;case 1:bl||(zt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Xs(e,t,a)),Qt(l,t,e);break;case 21:Qt(l,t,e);break;case 22:bl=(a=bl)||e.memoizedState!==null,Qt(l,t,e),bl=a;break;default:Qt(l,t,e)}}function Ws(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Aa(l)}catch(e){ll(t,t.return,e)}}}function ks(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Aa(l)}catch(e){ll(t,t.return,e)}}function ky(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new ws),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new ws),t;default:throw Error(h(435,l.tag))}}function di(l,t){var e=ky(l);t.forEach(function(a){if(!e.has(a)){e.add(a);var n=i0.bind(null,l,a);a.then(n,n)}})}function Zl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],i=l,u=t,c=u;l:for(;c!==null;){switch(c.tag){case 27:if(me(c.type)){sl=c.stateNode,Vl=!1;break l}break;case 5:sl=c.stateNode,Vl=!1;break l;case 3:case 4:sl=c.stateNode.containerInfo,Vl=!0;break l}c=c.return}if(sl===null)throw Error(h(160));Fs(i,u,n),sl=null,Vl=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Is(t,l),t=t.sibling}var pt=null;function Is(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Zl(t,l),wl(l),a&4&&(ce(3,l,l.return),tn(3,l),ce(5,l,l.return));break;case 1:Zl(t,l),wl(l),a&512&&(bl||e===null||zt(e,e.return)),a&64&&Xt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=pt;if(Zl(t,l),wl(l),a&512&&(bl||e===null||zt(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ma]||i[_l]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ml(i,a,e),i[_l]=l,Tl(i),a=i;break l;case"link":var u=Ir("link","href",n).get(a+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),Ml(i,a,e),n.head.appendChild(i);break;case"meta":if(u=Ir("meta","content",n).get(a+(e.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break t}}i=n.createElement(a),Ml(i,a,e),n.head.appendChild(i);break;default:throw Error(h(468,a))}i[_l]=l,Tl(i),a=i}l.stateNode=a}else $r(n,l.type,l.stateNode);else l.stateNode=kr(n,a,l.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?$r(n,l.type,l.stateNode):kr(n,a,l.memoizedProps)):a===null&&l.stateNode!==null&&gc(l,l.memoizedProps,e.memoizedProps)}break;case 27:Zl(t,l),wl(l),a&512&&(bl||e===null||zt(e,e.return)),e!==null&&a&4&&gc(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Zl(t,l),wl(l),a&512&&(bl||e===null||zt(e,e.return)),l.flags&32){n=l.stateNode;try{Je(n,"")}catch(_){ll(l,l.return,_)}}a&4&&l.stateNode!=null&&(n=l.memoizedProps,gc(l,n,e!==null?e.memoizedProps:n)),a&1024&&(pc=!0);break;case 6:if(Zl(t,l),wl(l),a&4){if(l.stateNode===null)throw Error(h(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(_){ll(l,l.return,_)}}break;case 3:if(Oi=null,n=pt,pt=zi(t.containerInfo),Zl(t,l),pt=n,wl(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(_){ll(l,l.return,_)}pc&&(pc=!1,$s(l));break;case 4:a=pt,pt=zi(l.stateNode.containerInfo),Zl(t,l),wl(l),pt=a;break;case 12:Zl(t,l),wl(l);break;case 31:Zl(t,l),wl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,di(l,a)));break;case 13:Zl(t,l),wl(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(mi=kl()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,di(l,a)));break;case 22:n=l.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,y=Xt,v=bl;if(Xt=y||n,bl=v||f,Zl(t,l),bl=v,Xt=y,wl(l),a&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(e===null||f||Xt||bl||Le(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){f=e=t;try{if(i=f.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var S=f.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(_){ll(f,f.return,_)}}}else if(t.tag===6){if(e===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(_){ll(f,f.return,_)}}}else if(t.tag===18){if(e===null){f=t;try{var g=f.stateNode;n?Xr(g,!0):Xr(f.stateNode,!1)}catch(_){ll(f,f.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,di(l,e))));break;case 19:Zl(t,l),wl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,di(l,a)));break;case 30:break;case 21:break;default:Zl(t,l),wl(l)}}function wl(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if(Vs(a)){e=a;break}a=a.return}if(e==null)throw Error(h(160));switch(e.tag){case 27:var n=e.stateNode,i=vc(l);ri(l,i,n);break;case 5:var u=e.stateNode;e.flags&32&&(Je(u,""),e.flags&=-33);var c=vc(l);ri(l,c,u);break;case 3:case 4:var f=e.stateNode.containerInfo,y=vc(l);xc(l,y,f);break;default:throw Error(h(161))}}catch(v){ll(l,l.return,v)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function $s(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;$s(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Vt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ks(l,t.alternate,t),t=t.sibling}function Le(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ce(4,t,t.return),Le(t);break;case 1:zt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Xs(t,t.return,e),Le(t);break;case 27:dn(t.stateNode);case 26:case 5:zt(t,t.return),Le(t);break;case 22:t.memoizedState===null&&Le(t);break;case 30:Le(t);break;default:Le(t)}l=l.sibling}}function Zt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=l,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Zt(n,i,e),tn(4,i);break;case 1:if(Zt(n,i,e),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){ll(a,a.return,y)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Mo(f[n],c)}catch(y){ll(a,a.return,y)}}e&&u&64&&js(i),en(i,i.return);break;case 27:Zs(i);case 26:case 5:Zt(n,i,e),e&&a===null&&u&4&&Qs(i),en(i,i.return);break;case 12:Zt(n,i,e);break;case 31:Zt(n,i,e),e&&u&4&&Ws(n,i);break;case 13:Zt(n,i,e),e&&u&4&&ks(n,i);break;case 22:i.memoizedState===null&&Zt(n,i,e),en(i,i.return);break;case 30:break;default:Zt(n,i,e)}t=t.sibling}}function Sc(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Qa(e))}function bc(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Qa(l))}function St(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ps(l,t,e,a),t=t.sibling}function Ps(l,t,e,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(l,t,e,a),n&2048&&tn(9,t);break;case 1:St(l,t,e,a);break;case 3:St(l,t,e,a),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Qa(l)));break;case 12:if(n&2048){St(l,t,e,a),l=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(f){ll(t,t.return,f)}}else St(l,t,e,a);break;case 31:St(l,t,e,a);break;case 13:St(l,t,e,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?St(l,t,e,a):an(l,t):i._visibility&2?St(l,t,e,a):(i._visibility|=2,ya(l,t,e,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Sc(u,t);break;case 24:St(l,t,e,a),n&2048&&bc(t.alternate,t);break;default:St(l,t,e,a)}}function ya(l,t,e,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=l,u=t,c=e,f=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:ya(i,u,c,f,n),tn(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?ya(i,u,c,f,n):an(i,u):(v._visibility|=2,ya(i,u,c,f,n)),n&&y&2048&&Sc(u.alternate,u);break;case 24:ya(i,u,c,f,n),n&&y&2048&&bc(u.alternate,u);break;default:ya(i,u,c,f,n)}t=t.sibling}}function an(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,n=a.flags;switch(a.tag){case 22:an(e,a),n&2048&&Sc(a.alternate,a);break;case 24:an(e,a),n&2048&&bc(a.alternate,a);break;default:an(e,a)}t=t.sibling}}var nn=8192;function ma(l,t,e){if(l.subtreeFlags&nn)for(l=l.child;l!==null;)lr(l,t,e),l=l.sibling}function lr(l,t,e){switch(l.tag){case 26:ma(l,t,e),l.flags&nn&&l.memoizedState!==null&&H0(e,pt,l.memoizedState,l.memoizedProps);break;case 5:ma(l,t,e);break;case 3:case 4:var a=pt;pt=zi(l.stateNode.containerInfo),ma(l,t,e),pt=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=nn,nn=16777216,ma(l,t,e),nn=a):ma(l,t,e));break;default:ma(l,t,e)}}function tr(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function un(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Al=a,ar(a,l)}tr(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)er(l),l=l.sibling}function er(l){switch(l.tag){case 0:case 11:case 15:un(l),l.flags&2048&&ce(9,l,l.return);break;case 3:un(l);break;case 12:un(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,yi(l)):un(l);break;default:un(l)}}function yi(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Al=a,ar(a,l)}tr(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ce(8,t,t.return),yi(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,yi(t));break;default:yi(t)}l=l.sibling}}function ar(l,t){for(;Al!==null;){var e=Al;switch(e.tag){case 0:case 11:case 15:ce(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qa(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Al=a;else l:for(e=l;Al!==null;){a=Al;var n=a.sibling,i=a.return;if(Js(a),a===e){Al=null;break l}if(n!==null){n.return=i,Al=n;break l}Al=i}}}var Iy={getCacheForType:function(l){var t=Dl(xl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Dl(xl).controller.signal}},$y=typeof WeakMap=="function"?WeakMap:Map,W=0,ul=null,j=null,Q=0,P=0,at=null,fe=!1,ha=!1,Ec=!1,wt=0,yl=0,oe=0,Ye=0,Tc=0,nt=0,ga=0,cn=null,Kl=null,Ac=!1,mi=0,nr=0,hi=1/0,gi=null,se=null,El=0,re=null,va=null,Kt=0,_c=0,zc=null,ir=null,fn=0,Dc=null;function it(){return(W&2)!==0&&Q!==0?Q&-Q:x.T!==null?Nc():Sf()}function ur(){if(nt===0)if((Q&536870912)===0||w){var l=An;An<<=1,(An&3932160)===0&&(An=262144),nt=l}else nt=536870912;return l=tt.current,l!==null&&(l.flags|=32),nt}function Jl(l,t,e){(l===ul&&(P===2||P===9)||l.cancelPendingCommit!==null)&&(xa(l,0),de(l,Q,nt,!1)),Oa(l,e),((W&2)===0||l!==ul)&&(l===ul&&((W&2)===0&&(Ye|=e),yl===4&&de(l,Q,nt,!1)),Dt(l))}function cr(l,t,e){if((W&6)!==0)throw Error(h(327));var a=!e&&(t&127)===0&&(t&l.expiredLanes)===0||Da(l,t),n=a?t0(l,t):Mc(l,t,!0),i=a;do{if(n===0){ha&&!a&&de(l,t,0,!1);break}else{if(e=l.current.alternate,i&&!Py(e)){n=Mc(l,t,!1),i=!1;continue}if(n===2){if(i=t,l.errorRecoveryDisabledLanes&i)var u=0;else u=l.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;l:{var c=l;n=cn;var f=c.current.memoizedState.isDehydrated;if(f&&(xa(c,u).flags|=256),u=Mc(c,u,!1),u!==2){if(Ec&&!f){c.errorRecoveryDisabledLanes|=i,Ye|=i,n=4;break l}i=Kl,Kl=n,i!==null&&(Kl===null?Kl=i:Kl.push.apply(Kl,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){xa(l,0),de(l,t,0,!0);break}l:{switch(a=l,i=n,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:de(a,t,nt,!fe);break l;case 2:Kl=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=mi+300-kl(),10<n)){if(de(a,t,nt,!fe),zn(a,0,!0)!==0)break l;Kt=t,a.timeoutHandle=Lr(fr.bind(null,a,e,Kl,gi,Ac,t,nt,Ye,ga,fe,i,"Throttled",-0,0),n);break l}fr(a,e,Kl,gi,Ac,t,nt,Ye,ga,fe,i,null,-0,0)}}break}while(!0);Dt(l)}function fr(l,t,e,a,n,i,u,c,f,y,v,S,m,g){if(l.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},lr(t,i,S);var _=(i&62914560)===i?mi-kl():(i&4194048)===i?nr-kl():0;if(_=q0(S,_),_!==null){Kt=i,l.cancelPendingCommit=_(gr.bind(null,l,t,i,e,a,n,u,c,f,v,S,null,m,g)),de(l,i,u,!y);return}}gr(l,t,i,e,a,n,u,c,f)}function Py(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],i=n.getSnapshot;n=n.value;try{if(!Pl(i(),n))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function de(l,t,e,a){t&=~Tc,t&=~Ye,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var n=t;0<n;){var i=31-$l(n),u=1<<i;a[i]=-1,n&=~u}e!==0&&vf(l,e,t)}function vi(){return(W&6)===0?(on(0),!1):!0}function Oc(){if(j!==null){if(P===0)var l=j.return;else l=j,Gt=Ce=null,Zu(l),fa=null,Za=0,l=j;for(;l!==null;)Ys(l.alternate,l),l=l.return;j=null}}function xa(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,p0(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),Kt=0,Oc(),ul=l,j=e=Nt(l.current,null),Q=t,P=0,at=null,fe=!1,ha=Da(l,t),Ec=!1,ga=nt=Tc=Ye=oe=yl=0,Kl=cn=null,Ac=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var n=31-$l(a),i=1<<n;t|=l[n],a&=~i}return wt=t,Ln(),e}function or(l,t){q=null,x.H=$a,t===ca||t===Kn?(t=_o(),P=3):t===Uu?(t=_o(),P=4):P=t===uc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,j===null&&(yl=1,ui(l,st(t,l.current)))}function sr(){var l=tt.current;return l===null?!0:(Q&4194048)===Q?mt===null:(Q&62914560)===Q||(Q&536870912)!==0?l===mt:!1}function rr(){var l=x.H;return x.H=$a,l===null?$a:l}function dr(){var l=x.A;return x.A=Iy,l}function xi(){yl=4,fe||(Q&4194048)!==Q&&tt.current!==null||(ha=!0),(oe&134217727)===0&&(Ye&134217727)===0||ul===null||de(ul,Q,nt,!1)}function Mc(l,t,e){var a=W;W|=2;var n=rr(),i=dr();(ul!==l||Q!==t)&&(gi=null,xa(l,t)),t=!1;var u=yl;l:do try{if(P!==0&&j!==null){var c=j,f=at;switch(P){case 8:Oc(),u=6;break l;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var y=P;if(P=0,at=null,pa(l,c,f,y),e&&ha){u=0;break l}break;default:y=P,P=0,at=null,pa(l,c,f,y)}}l0(),u=yl;break}catch(v){or(l,v)}while(!0);return t&&l.shellSuspendCounter++,Gt=Ce=null,W=a,x.H=n,x.A=i,j===null&&(ul=null,Q=0,Ln()),u}function l0(){for(;j!==null;)yr(j)}function t0(l,t){var e=W;W|=2;var a=rr(),n=dr();ul!==l||Q!==t?(gi=null,hi=kl()+500,xa(l,t)):ha=Da(l,t);l:do try{if(P!==0&&j!==null){t=j;var i=at;t:switch(P){case 1:P=0,at=null,pa(l,t,i,1);break;case 2:case 9:if(To(i)){P=0,at=null,mr(t);break}t=function(){P!==2&&P!==9||ul!==l||(P=7),Dt(l)},i.then(t,t);break l;case 3:P=7;break l;case 4:P=5;break l;case 7:To(i)?(P=0,at=null,mr(t)):(P=0,at=null,pa(l,t,i,7));break;case 5:var u=null;switch(j.tag){case 26:u=j.memoizedState;case 5:case 27:var c=j;if(u?Pr(u):c.stateNode.complete){P=0,at=null;var f=c.sibling;if(f!==null)j=f;else{var y=c.return;y!==null?(j=y,pi(y)):j=null}break t}}P=0,at=null,pa(l,t,i,5);break;case 6:P=0,at=null,pa(l,t,i,6);break;case 8:Oc(),yl=6;break l;default:throw Error(h(462))}}e0();break}catch(v){or(l,v)}while(!0);return Gt=Ce=null,x.H=a,x.A=n,W=e,j!==null?0:(ul=null,Q=0,Ln(),yl)}function e0(){for(;j!==null&&!_d();)yr(j)}function yr(l){var t=qs(l.alternate,l,wt);l.memoizedProps=l.pendingProps,t===null?pi(l):j=t}function mr(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Rs(e,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Rs(e,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:Zu(t);default:Ys(e,t),t=j=ro(t,wt),t=qs(e,t,wt)}l.memoizedProps=l.pendingProps,t===null?pi(l):j=t}function pa(l,t,e,a){Gt=Ce=null,Zu(t),fa=null,Za=0;var n=t.return;try{if(Zy(l,n,t,e,Q)){yl=1,ui(l,st(e,l.current)),j=null;return}}catch(i){if(n!==null)throw j=n,i;yl=1,ui(l,st(e,l.current)),j=null;return}t.flags&32768?(w||a===1?l=!0:ha||(Q&536870912)!==0?l=!1:(fe=l=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),hr(t,l)):pi(t)}function pi(l){var t=l;do{if((t.flags&32768)!==0){hr(t,fe);return}l=t.return;var e=Jy(t.alternate,t,wt);if(e!==null){j=e;return}if(t=t.sibling,t!==null){j=t;return}j=t=l}while(t!==null);yl===0&&(yl=5)}function hr(l,t){do{var e=Fy(l.alternate,l);if(e!==null){e.flags&=32767,j=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){j=l;return}j=l=e}while(l!==null);yl=6,j=null}function gr(l,t,e,a,n,i,u,c,f){l.cancelPendingCommit=null;do Si();while(El!==0);if((W&6)!==0)throw Error(h(327));if(t!==null){if(t===l.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=vu,Gd(l,e,i,u,c,f),l===ul&&(j=ul=null,Q=0),va=t,re=l,Kt=e,_c=i,zc=n,ir=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,u0(En,function(){return br(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,n=T.p,T.p=2,u=W,W|=4;try{Wy(l,t,e)}finally{W=u,T.p=n,x.T=a}}El=1,vr(),xr(),pr()}}function vr(){if(El===1){El=0;var l=re,t=va,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=x.T,x.T=null;var a=T.p;T.p=2;var n=W;W|=4;try{Is(t,l);var i=Xc,u=eo(l.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&to(c.ownerDocument.documentElement,c)){if(f!==null&&du(c)){var y=f.start,v=f.end;if(v===void 0&&(v=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(v,c.value.length);else{var S=c.ownerDocument||document,m=S&&S.defaultView||window;if(m.getSelection){var g=m.getSelection(),_=c.textContent.length,R=Math.min(f.start,_),nl=f.end===void 0?R:Math.min(f.end,_);!g.extend&&R>nl&&(u=nl,nl=R,R=u);var r=lo(c,R),o=lo(c,nl);if(r&&o&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var d=S.createRange();d.setStart(r.node,r.offset),g.removeAllRanges(),R>nl?(g.addRange(d),g.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),g.addRange(d))}}}}for(S=[],g=c;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var p=S[c];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}Ui=!!jc,Xc=jc=null}finally{W=n,T.p=a,x.T=e}}l.current=t,El=2}}function xr(){if(El===2){El=0;var l=re,t=va,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=x.T,x.T=null;var a=T.p;T.p=2;var n=W;W|=4;try{Ks(l,t.alternate,t)}finally{W=n,T.p=a,x.T=e}}El=3}}function pr(){if(El===4||El===3){El=0,zd();var l=re,t=va,e=Kt,a=ir;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?El=5:(El=0,va=re=null,Sr(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(se=null),Ji(e),t=t.stateNode,Il&&typeof Il.onCommitFiberRoot=="function")try{Il.onCommitFiberRoot(za,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=x.T,n=T.p,T.p=2,x.T=null;try{for(var i=l.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{x.T=t,T.p=n}}(Kt&3)!==0&&Si(),Dt(l),n=l.pendingLanes,(e&261930)!==0&&(n&42)!==0?l===Dc?fn++:(fn=0,Dc=l):fn=0,on(0)}}function Sr(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Qa(t)))}function Si(){return vr(),xr(),pr(),br()}function br(){if(El!==5)return!1;var l=re,t=_c;_c=0;var e=Ji(Kt),a=x.T,n=T.p;try{T.p=32>e?32:e,x.T=null,e=zc,zc=null;var i=re,u=Kt;if(El=0,va=re=null,Kt=0,(W&6)!==0)throw Error(h(331));var c=W;if(W|=4,er(i.current),Ps(i,i.current,u,e),W=c,on(0,!1),Il&&typeof Il.onPostCommitFiberRoot=="function")try{Il.onPostCommitFiberRoot(za,i)}catch{}return!0}finally{T.p=n,x.T=a,Sr(l,t)}}function Er(l,t,e){t=st(e,t),t=ic(l.stateNode,t,2),l=ne(l,t,2),l!==null&&(Oa(l,2),Dt(l))}function ll(l,t,e){if(l.tag===3)Er(l,l,e);else for(;t!==null;){if(t.tag===3){Er(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(se===null||!se.has(a))){l=st(e,l),e=Ts(2),a=ne(t,e,2),a!==null&&(As(e,a,t,l),Oa(a,2),Dt(a));break}}t=t.return}}function Cc(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new $y;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(e)||(Ec=!0,n.add(e),l=a0.bind(null,l,t,e),t.then(l,l))}function a0(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,ul===l&&(Q&e)===e&&(yl===4||yl===3&&(Q&62914560)===Q&&300>kl()-mi?(W&2)===0&&xa(l,0):Tc|=e,ga===Q&&(ga=0)),Dt(l)}function Tr(l,t){t===0&&(t=gf()),l=De(l,t),l!==null&&(Oa(l,t),Dt(l))}function n0(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),Tr(l,e)}function i0(l,t){var e=0;switch(l.tag){case 31:case 13:var a=l.stateNode,n=l.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),Tr(l,e)}function u0(l,t){return Vi(l,t)}var bi=null,Sa=null,Rc=!1,Ei=!1,Uc=!1,ye=0;function Dt(l){l!==Sa&&l.next===null&&(Sa===null?bi=Sa=l:Sa=Sa.next=l),Ei=!0,Rc||(Rc=!0,f0())}function on(l,t){if(!Uc&&Ei){Uc=!0;do for(var e=!1,a=bi;a!==null;){if(l!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-$l(42|l)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,Dr(a,i))}else i=Q,i=zn(a,a===ul?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Da(a,i)||(e=!0,Dr(a,i));a=a.next}while(e);Uc=!1}}function c0(){Ar()}function Ar(){Ei=Rc=!1;var l=0;ye!==0&&x0()&&(l=ye);for(var t=kl(),e=null,a=bi;a!==null;){var n=a.next,i=_r(a,t);i===0?(a.next=null,e===null?bi=n:e.next=n,n===null&&(Sa=e)):(e=a,(l!==0||(i&3)!==0)&&(Ei=!0)),a=n}El!==0&&El!==5||on(l),ye!==0&&(ye=0)}function _r(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,n=l.expirationTimes,i=l.pendingLanes&-62914561;0<i;){var u=31-$l(i),c=1<<u,f=n[u];f===-1?((c&e)===0||(c&a)!==0)&&(n[u]=Bd(c,t)):f<=t&&(l.expiredLanes|=c),i&=~c}if(t=ul,e=Q,e=zn(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(P===2||P===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&Zi(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||Da(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&Zi(a),Ji(e)){case 2:case 8:e=mf;break;case 32:e=En;break;case 268435456:e=hf;break;default:e=En}return a=zr.bind(null,l),e=Vi(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&Zi(a),l.callbackPriority=2,l.callbackNode=null,2}function zr(l,t){if(El!==0&&El!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(Si()&&l.callbackNode!==e)return null;var a=Q;return a=zn(l,l===ul?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(cr(l,a,t),_r(l,kl()),l.callbackNode!=null&&l.callbackNode===e?zr.bind(null,l):null)}function Dr(l,t){if(Si())return null;cr(l,t,!0)}function f0(){S0(function(){(W&6)!==0?Vi(yf,c0):Ar()})}function Nc(){if(ye===0){var l=ia;l===0&&(l=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),ye=l}return ye}function Or(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Cn(""+l)}function Mr(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function o0(l,t,e,a,n){if(t==="submit"&&e&&e.stateNode===n){var i=Or((n[Xl]||null).action),u=a.submitter;u&&(t=(t=u[Xl]||null)?Or(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Bn("action","action",null,a,n);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ye!==0){var f=u?Mr(n,u):new FormData(n);Pu(e,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?Mr(n,u):new FormData(n),Pu(e,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var Bc=0;Bc<gu.length;Bc++){var Gc=gu[Bc],s0=Gc.toLowerCase(),r0=Gc[0].toUpperCase()+Gc.slice(1);xt(s0,"on"+r0)}xt(io,"onAnimationEnd"),xt(uo,"onAnimationIteration"),xt(co,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(Dy,"onTransitionRun"),xt(Oy,"onTransitionStart"),xt(My,"onTransitionCancel"),xt(fo,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function Cr(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],n=a.event;a=a.listeners;l:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],f=c.instance,y=c.currentTarget;if(c=c.listener,f!==i&&n.isPropagationStopped())break l;i=c,n.currentTarget=y;try{i(n)}catch(v){qn(v)}n.currentTarget=null,i=f}else for(u=0;u<a.length;u++){if(c=a[u],f=c.instance,y=c.currentTarget,c=c.listener,f!==i&&n.isPropagationStopped())break l;i=c,n.currentTarget=y;try{i(n)}catch(v){qn(v)}n.currentTarget=null,i=f}}}}function X(l,t){var e=t[Fi];e===void 0&&(e=t[Fi]=new Set);var a=l+"__bubble";e.has(a)||(Rr(t,l,2,!1),e.add(a))}function Hc(l,t,e){var a=0;t&&(a|=4),Rr(e,l,a,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function qc(l){if(!l[Ti]){l[Ti]=!0,Tf.forEach(function(e){e!=="selectionchange"&&(d0.has(e)||Hc(e,!1,l),Hc(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,Hc("selectionchange",!1,t))}}function Rr(l,t,e,a){switch(ud(t)){case 2:var n=j0;break;case 8:n=X0;break;default:n=$c}e=n.bind(null,t,e,l),n=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?l.addEventListener(t,e,{capture:!0,passive:n}):l.addEventListener(t,e,!0):n!==void 0?l.addEventListener(t,e,{passive:n}):l.addEventListener(t,e,!1)}function Lc(l,t,e,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Qe(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=i=u;continue l}c=c.parentNode}}a=a.return}Gf(function(){var y=i,v=tu(e),S=[];l:{var m=oo.get(l);if(m!==void 0){var g=Bn,_=l;switch(l){case"keypress":if(Un(e)===0)break l;case"keydown":case"keyup":g=iy;break;case"focusin":_="focus",g=cu;break;case"focusout":_="blur",g=cu;break;case"beforeblur":case"afterblur":g=cu;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fy;break;case io:case uo:case co:g=kd;break;case fo:g=sy;break;case"scroll":case"scrollend":g=wd;break;case"wheel":g=dy;break;case"copy":case"cut":case"paste":g=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jf;break;case"toggle":case"beforetoggle":g=my}var R=(t&4)!==0,nl=!R&&(l==="scroll"||l==="scrollend"),r=R?m!==null?m+"Capture":null:m;R=[];for(var o=y,d;o!==null;){var p=o;if(d=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||d===null||r===null||(p=Ra(o,r),p!=null&&R.push(rn(o,p,d))),nl)break;o=o.return}0<R.length&&(m=new g(m,_,null,e,v),S.push({event:m,listeners:R}))}}if((t&7)===0){l:{if(m=l==="mouseover"||l==="pointerover",g=l==="mouseout"||l==="pointerout",m&&e!==lu&&(_=e.relatedTarget||e.fromElement)&&(Qe(_)||_[Xe]))break l;if((g||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,g?(_=e.relatedTarget||e.toElement,g=y,_=_?Qe(_):null,_!==null&&(nl=F(_),R=_.tag,_!==nl||R!==5&&R!==27&&R!==6)&&(_=null)):(g=null,_=y),g!==_)){if(R=Lf,p="onMouseLeave",r="onMouseEnter",o="mouse",(l==="pointerout"||l==="pointerover")&&(R=jf,p="onPointerLeave",r="onPointerEnter",o="pointer"),nl=g==null?m:Ca(g),d=_==null?m:Ca(_),m=new R(p,o+"leave",g,e,v),m.target=nl,m.relatedTarget=d,p=null,Qe(v)===y&&(R=new R(r,o+"enter",_,e,v),R.target=d,R.relatedTarget=nl,p=R),nl=p,g&&_)t:{for(R=y0,r=g,o=_,d=0,p=r;p;p=R(p))d++;p=0;for(var M=o;M;M=R(M))p++;for(;0<d-p;)r=R(r),d--;for(;0<p-d;)o=R(o),p--;for(;d--;){if(r===o||o!==null&&r===o.alternate){R=r;break t}r=R(r),o=R(o)}R=null}else R=null;g!==null&&Ur(S,m,g,R,!1),_!==null&&nl!==null&&Ur(S,nl,_,R,!0)}}l:{if(m=y?Ca(y):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var K=Ff;else if(Kf(m))if(Wf)K=Ay;else{K=Ey;var O=by}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?y&&Pi(y.elementType)&&(K=Ff):K=Ty;if(K&&(K=K(l,y))){Jf(S,K,e,v);break l}O&&O(l,m,y),l==="focusout"&&y&&m.type==="number"&&y.memoizedProps.value!=null&&$i(m,"number",m.value)}switch(O=y?Ca(y):window,l){case"focusin":(Kf(O)||O.contentEditable==="true")&&(Ie=O,yu=y,Ya=null);break;case"focusout":Ya=yu=Ie=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,ao(S,e,v);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":ao(S,e,v)}var L;if(ou)l:{switch(l){case"compositionstart":var V="onCompositionStart";break l;case"compositionend":V="onCompositionEnd";break l;case"compositionupdate":V="onCompositionUpdate";break l}V=void 0}else ke?Zf(l,e)&&(V="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(V="onCompositionStart");V&&(Xf&&e.locale!=="ko"&&(ke||V!=="onCompositionStart"?V==="onCompositionEnd"&&ke&&(L=Hf()):(It=v,nu="value"in It?It.value:It.textContent,ke=!0)),O=Ai(y,V),0<O.length&&(V=new Yf(V,l,null,e,v),S.push({event:V,listeners:O}),L?V.data=L:(L=wf(e),L!==null&&(V.data=L)))),(L=gy?vy(l,e):xy(l,e))&&(V=Ai(y,"onBeforeInput"),0<V.length&&(O=new Yf("onBeforeInput","beforeinput",null,e,v),S.push({event:O,listeners:V}),O.data=L)),o0(S,l,y,e,v)}Cr(S,t)})}function rn(l,t,e){return{instance:l,listener:t,currentTarget:e}}function Ai(l,t){for(var e=t+"Capture",a=[];l!==null;){var n=l,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ra(l,e),n!=null&&a.unshift(rn(l,n,i)),n=Ra(l,t),n!=null&&a.push(rn(l,n,i))),l.tag===3)return a;l=l.return}return[]}function y0(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Ur(l,t,e,a,n){for(var i=t._reactName,u=[];e!==null&&e!==a;){var c=e,f=c.alternate,y=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||y===null||(f=y,n?(y=Ra(e,i),y!=null&&u.unshift(rn(e,y,f))):n||(y=Ra(e,i),y!=null&&u.push(rn(e,y,f)))),e=e.return}u.length!==0&&l.push({event:t,listeners:u})}var m0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Nr(l){return(typeof l=="string"?l:""+l).replace(m0,`
`).replace(h0,"")}function Br(l,t){return t=Nr(t),Nr(l)===t}function al(l,t,e,a,n,i){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Je(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Je(l,""+a);break;case"className":On(l,"class",a);break;case"tabIndex":On(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":On(l,e,a);break;case"style":Nf(l,a,i);break;case"data":if(t!=="object"){On(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Cn(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(t!=="input"&&al(l,t,"name",n.name,n,null),al(l,t,"formEncType",n.formEncType,n,null),al(l,t,"formMethod",n.formMethod,n,null),al(l,t,"formTarget",n.formTarget,n,null)):(al(l,t,"encType",n.encType,n,null),al(l,t,"method",n.method,n,null),al(l,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Cn(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=Rt);break;case"onScroll":a!=null&&X("scroll",l);break;case"onScrollEnd":a!=null&&X("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(h(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=Cn(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":X("beforetoggle",l),X("toggle",l),Dn(l,"popover",a);break;case"xlinkActuate":Ct(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ct(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ct(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ct(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ct(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ct(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ct(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ct(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ct(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Dn(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Vd.get(e)||e,Dn(l,e,a))}}function Yc(l,t,e,a,n,i){switch(e){case"style":Nf(l,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(h(60));l.innerHTML=e}}break;case"children":typeof a=="string"?Je(l,a):(typeof a=="number"||typeof a=="bigint")&&Je(l,""+a);break;case"onScroll":a!=null&&X("scroll",l);break;case"onScrollEnd":a!=null&&X("scrollend",l);break;case"onClick":a!=null&&(l.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Af.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),t=e.slice(2,n?e.length-7:void 0),i=l[Xl]||null,i=i!=null?i[e]:null,typeof i=="function"&&l.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,n);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):Dn(l,e,a)}}}function Ml(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",l),X("load",l);var a=!1,n=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:al(l,t,i,u,e,null)}}n&&al(l,t,"srcSet",e.srcSet,e,null),a&&al(l,t,"src",e.src,e,null);return;case"input":X("invalid",l);var c=i=u=n=null,f=null,y=null;for(a in e)if(e.hasOwnProperty(a)){var v=e[a];if(v!=null)switch(a){case"name":n=v;break;case"type":u=v;break;case"checked":f=v;break;case"defaultChecked":y=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:al(l,t,a,v,e,null)}}Mf(l,i,c,f,y,u,n,!1);return;case"select":X("invalid",l),a=u=i=null;for(n in e)if(e.hasOwnProperty(n)&&(c=e[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:al(l,t,n,c,e,null)}t=i,e=u,l.multiple=!!a,t!=null?Ke(l,!!a,t,!1):e!=null&&Ke(l,!!a,e,!0);return;case"textarea":X("invalid",l),i=n=a=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:al(l,t,u,c,e,null)}Rf(l,a,n,i);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(a=e[f],a!=null))switch(f){case"selected":l.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:al(l,t,f,a,e,null)}return;case"dialog":X("beforetoggle",l),X("toggle",l),X("cancel",l),X("close",l);break;case"iframe":case"object":X("load",l);break;case"video":case"audio":for(a=0;a<sn.length;a++)X(sn[a],l);break;case"image":X("error",l),X("load",l);break;case"details":X("toggle",l);break;case"embed":case"source":case"link":X("error",l),X("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in e)if(e.hasOwnProperty(y)&&(a=e[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:al(l,t,y,a,e,null)}return;default:if(Pi(t)){for(v in e)e.hasOwnProperty(v)&&(a=e[v],a!==void 0&&Yc(l,t,v,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&al(l,t,c,a,e,null))}function g0(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,f=null,y=null,v=null;for(g in e){var S=e[g];if(e.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":f=S;default:a.hasOwnProperty(g)||al(l,t,g,null,a,S)}}for(var m in a){var g=a[m];if(S=e[m],a.hasOwnProperty(m)&&(g!=null||S!=null))switch(m){case"type":i=g;break;case"name":n=g;break;case"checked":y=g;break;case"defaultChecked":v=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==S&&al(l,t,m,g,a,S)}}Ii(l,u,c,f,y,v,i,n);return;case"select":g=u=c=m=null;for(i in e)if(f=e[i],e.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":g=f;default:a.hasOwnProperty(i)||al(l,t,i,null,a,f)}for(n in a)if(i=a[n],f=e[n],a.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":m=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&al(l,t,n,i,a,f)}t=c,e=u,a=g,m!=null?Ke(l,!!e,m,!1):!!a!=!!e&&(t!=null?Ke(l,!!e,t,!0):Ke(l,!!e,e?[]:"",!1));return;case"textarea":g=m=null;for(c in e)if(n=e[c],e.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:al(l,t,c,null,a,n)}for(u in a)if(n=a[u],i=e[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==i&&al(l,t,u,n,a,i)}Cf(l,m,g);return;case"option":for(var _ in e)if(m=e[_],e.hasOwnProperty(_)&&m!=null&&!a.hasOwnProperty(_))switch(_){case"selected":l.selected=!1;break;default:al(l,t,_,null,a,m)}for(f in a)if(m=a[f],g=e[f],a.hasOwnProperty(f)&&m!==g&&(m!=null||g!=null))switch(f){case"selected":l.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:al(l,t,f,m,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in e)m=e[R],e.hasOwnProperty(R)&&m!=null&&!a.hasOwnProperty(R)&&al(l,t,R,null,a,m);for(y in a)if(m=a[y],g=e[y],a.hasOwnProperty(y)&&m!==g&&(m!=null||g!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,t));break;default:al(l,t,y,m,a,g)}return;default:if(Pi(t)){for(var nl in e)m=e[nl],e.hasOwnProperty(nl)&&m!==void 0&&!a.hasOwnProperty(nl)&&Yc(l,t,nl,void 0,a,m);for(v in a)m=a[v],g=e[v],!a.hasOwnProperty(v)||m===g||m===void 0&&g===void 0||Yc(l,t,v,m,a,g);return}}for(var r in e)m=e[r],e.hasOwnProperty(r)&&m!=null&&!a.hasOwnProperty(r)&&al(l,t,r,null,a,m);for(S in a)m=a[S],g=e[S],!a.hasOwnProperty(S)||m===g||m==null&&g==null||al(l,t,S,m,a,g)}function Gr(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function v0(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Gr(u)){for(u=0,c=n.responseEnd,a+=1;a<e.length;a++){var f=e[a],y=f.startTime;if(y>c)break;var v=f.transferSize,S=f.initiatorType;v&&Gr(S)&&(f=f.responseEnd,u+=v*(f<c?1:(c-y)/(f-y)))}if(--a,t+=8*(i+u)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var jc=null,Xc=null;function _i(l){return l.nodeType===9?l:l.ownerDocument}function Hr(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qr(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Qc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vc=null;function x0(){var l=window.event;return l&&l.type==="popstate"?l===Vc?!1:(Vc=l,!0):(Vc=null,!1)}var Lr=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,Yr=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yr<"u"?function(l){return Yr.resolve(null).then(l).catch(b0)}:Lr;function b0(l){setTimeout(function(){throw l})}function me(l){return l==="head"}function jr(l,t){var e=t,a=0;do{var n=e.nextSibling;if(l.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){l.removeChild(n),Aa(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")dn(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,dn(e);for(var i=e.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Ma]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&dn(l.ownerDocument.body);e=n}while(e);Aa(t)}function Xr(l,t){var e=l;l=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=a}while(e)}function Zc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Zc(e),Wi(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function E0(l,t,e,a){for(;l.nodeType===1;){var n=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Ma])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(i=l.getAttribute("rel"),i==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(i!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(i=l.getAttribute("src"),(i!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===i)return l}else return l;if(l=ht(l.nextSibling),l===null)break}return null}function T0(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=ht(l.nextSibling),l===null))return null;return l}function Qr(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=ht(l.nextSibling),l===null))return null;return l}function wc(l){return l.data==="$?"||l.data==="$~"}function Kc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function A0(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function ht(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Jc=null;function Vr(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return ht(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function Zr(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function wr(l,t,e){switch(t=_i(e),l){case"html":if(l=t.documentElement,!l)throw Error(h(452));return l;case"head":if(l=t.head,!l)throw Error(h(453));return l;case"body":if(l=t.body,!l)throw Error(h(454));return l;default:throw Error(h(451))}}function dn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Wi(l)}var gt=new Map,Kr=new Set;function zi(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Jt=T.d;T.d={f:_0,r:z0,D:D0,C:O0,L:M0,m:C0,X:U0,S:R0,M:N0};function _0(){var l=Jt.f(),t=vi();return l||t}function z0(l){var t=Ve(l);t!==null&&t.tag===5&&t.type==="form"?os(t):Jt.r(l)}var ba=typeof document>"u"?null:document;function Jr(l,t,e){var a=ba;if(a&&typeof t=="string"&&t){var n=ft(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),Kr.has(n)||(Kr.add(n),l={rel:l,crossOrigin:e,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ml(t,"link",l),Tl(t),a.head.appendChild(t)))}}function D0(l){Jt.D(l),Jr("dns-prefetch",l,null)}function O0(l,t){Jt.C(l,t),Jr("preconnect",l,t)}function M0(l,t,e){Jt.L(l,t,e);var a=ba;if(a&&l&&t){var n='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+ft(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+ft(e.imageSizes)+'"]')):n+='[href="'+ft(l)+'"]';var i=n;switch(t){case"style":i=Ea(l);break;case"script":i=Ta(l)}gt.has(i)||(l=N({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),gt.set(i,l),a.querySelector(n)!==null||t==="style"&&a.querySelector(yn(i))||t==="script"&&a.querySelector(mn(i))||(t=a.createElement("link"),Ml(t,"link",l),Tl(t),a.head.appendChild(t)))}}function C0(l,t){Jt.m(l,t);var e=ba;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ft(a)+'"][href="'+ft(l)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ta(l)}if(!gt.has(i)&&(l=N({rel:"modulepreload",href:l},t),gt.set(i,l),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(mn(i)))return}a=e.createElement("link"),Ml(a,"link",l),Tl(a),e.head.appendChild(a)}}}function R0(l,t,e){Jt.S(l,t,e);var a=ba;if(a&&l){var n=Ze(a).hoistableStyles,i=Ea(l);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(yn(i)))c.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},e),(e=gt.get(i))&&Fc(l,e);var f=u=a.createElement("link");Tl(f),Ml(f,"link",l),f._p=new Promise(function(y,v){f.onload=y,f.onerror=v}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Di(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function U0(l,t){Jt.X(l,t);var e=ba;if(e&&l){var a=Ze(e).hoistableScripts,n=Ta(l),i=a.get(n);i||(i=e.querySelector(mn(n)),i||(l=N({src:l,async:!0},t),(t=gt.get(n))&&Wc(l,t),i=e.createElement("script"),Tl(i),Ml(i,"link",l),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function N0(l,t){Jt.M(l,t);var e=ba;if(e&&l){var a=Ze(e).hoistableScripts,n=Ta(l),i=a.get(n);i||(i=e.querySelector(mn(n)),i||(l=N({src:l,async:!0,type:"module"},t),(t=gt.get(n))&&Wc(l,t),i=e.createElement("script"),Tl(i),Ml(i,"link",l),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Fr(l,t,e,a){var n=(n=Y.current)?zi(n):null;if(!n)throw Error(h(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Ea(e.href),e=Ze(n).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=Ea(e.href);var i=Ze(n).hoistableStyles,u=i.get(l);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(l,u),(i=n.querySelector(yn(l)))&&!i._p&&(u.instance=i,u.state.loading=5),gt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},gt.set(l,e),i||B0(n,l,e,u.state))),t&&a===null)throw Error(h(528,""));return u}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ta(e),e=Ze(n).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,l))}}function Ea(l){return'href="'+ft(l)+'"'}function yn(l){return'link[rel="stylesheet"]['+l+"]"}function Wr(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function B0(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ml(t,"link",e),Tl(t),l.head.appendChild(t))}function Ta(l){return'[src="'+ft(l)+'"]'}function mn(l){return"script[async]"+l}function kr(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+ft(e.href)+'"]');if(a)return t.instance=a,Tl(a),a;var n=N({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),Tl(a),Ml(a,"style",n),Di(a,e.precedence,l),t.instance=a;case"stylesheet":n=Ea(e.href);var i=l.querySelector(yn(n));if(i)return t.state.loading|=4,t.instance=i,Tl(i),i;a=Wr(e),(n=gt.get(n))&&Fc(a,n),i=(l.ownerDocument||l).createElement("link"),Tl(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ml(i,"link",a),t.state.loading|=4,Di(i,e.precedence,l),t.instance=i;case"script":return i=Ta(e.src),(n=l.querySelector(mn(i)))?(t.instance=n,Tl(n),n):(a=e,(n=gt.get(i))&&(a=N({},e),Wc(a,n)),l=l.ownerDocument||l,n=l.createElement("script"),Tl(n),Ml(n,"link",a),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Di(a,e.precedence,l));return t.instance}function Di(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(l,i.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Fc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function Wc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Oi=null;function Ir(l,t,e){if(Oi===null){var a=new Map,n=Oi=new Map;n.set(e,a)}else n=Oi,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),n=0;n<e.length;n++){var i=e[n];if(!(i[Ma]||i[_l]||l==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=l+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function $r(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function G0(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pr(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function H0(l,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ea(a.href),i=t.querySelector(yn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Mi.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=i,Tl(i);return}i=t.ownerDocument||t,a=Wr(a),(n=gt.get(n))&&Fc(a,n),i=i.createElement("link"),Tl(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ml(i,"link",a),e.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=Mi.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var kc=0;function q0(l,t){return l.stylesheets&&l.count===0&&Ri(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var a=setTimeout(function(){if(l.stylesheets&&Ri(l,l.stylesheets),l.unsuspend){var i=l.unsuspend;l.unsuspend=null,i()}},6e4+t);0<l.imgBytes&&kc===0&&(kc=62500*v0());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ri(l,l.stylesheets),l.unsuspend)){var i=l.unsuspend;l.unsuspend=null,i()}},(l.imgBytes>kc?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Mi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ri(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Ci=null;function Ri(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Ci=new Map,t.forEach(L0,l),Ci=null,Mi.call(l))}function L0(l,t){if(!(t.state.loading&4)){var e=Ci.get(l);if(e)var a=e.get(null);else{e=new Map,Ci.set(l,e);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),a=u)}a&&e.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=e.get(u)||a,i===a&&e.set(null,n),e.set(u,n),this.count++,a=Mi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var hn={$$typeof:Cl,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Y0(l,t,e,a,n,i,u,c,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.hiddenUpdates=wi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ld(l,t,e,a,n,i,u,c,f,y,v,S){return l=new Y0(l,t,e,u,f,y,v,S,c),t=1,i===!0&&(t|=24),i=lt(3,null,null,t),l.current=i,i.stateNode=l,t=Mu(),t.refCount++,l.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:t},Nu(i),l}function td(l){return l?(l=la,l):la}function ed(l,t,e,a,n,i){n=td(n),a.context===null?a.context=n:a.pendingContext=n,a=ae(t),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=ne(l,a,t),e!==null&&(Jl(e,l,t),Ka(e,l,t))}function ad(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function Ic(l,t){ad(l,t),(l=l.alternate)&&ad(l,t)}function nd(l){if(l.tag===13||l.tag===31){var t=De(l,67108864);t!==null&&Jl(t,l,67108864),Ic(l,67108864)}}function id(l){if(l.tag===13||l.tag===31){var t=it();t=Ki(t);var e=De(l,t);e!==null&&Jl(e,l,t),Ic(l,t)}}var Ui=!0;function j0(l,t,e,a){var n=x.T;x.T=null;var i=T.p;try{T.p=2,$c(l,t,e,a)}finally{T.p=i,x.T=n}}function X0(l,t,e,a){var n=x.T;x.T=null;var i=T.p;try{T.p=8,$c(l,t,e,a)}finally{T.p=i,x.T=n}}function $c(l,t,e,a){if(Ui){var n=Pc(a);if(n===null)Lc(l,t,a,Ni,e),cd(l,a);else if(V0(n,l,t,e,a))a.stopPropagation();else if(cd(l,a),t&4&&-1<Q0.indexOf(l)){for(;n!==null;){var i=Ve(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ee(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-$l(u);c.entanglements[1]|=f,u&=~f}Dt(i),(W&6)===0&&(hi=kl()+500,on(0))}}break;case 31:case 13:c=De(i,2),c!==null&&Jl(c,i,2),vi(),Ic(i,2)}if(i=Pc(a),i===null&&Lc(l,t,a,Ni,e),i===n)break;n=i}n!==null&&a.stopPropagation()}else Lc(l,t,a,null,e)}}function Pc(l){return l=tu(l),lf(l)}var Ni=null;function lf(l){if(Ni=null,l=Qe(l),l!==null){var t=F(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=ml(t),l!==null)return l;l=null}else if(e===31){if(l=Ul(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ni=l,null}function ud(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dd()){case yf:return 2;case mf:return 8;case En:case Od:return 32;case hf:return 268435456;default:return 32}default:return 32}}var tf=!1,he=null,ge=null,ve=null,gn=new Map,vn=new Map,xe=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(l,t){switch(l){case"focusin":case"focusout":he=null;break;case"dragenter":case"dragleave":ge=null;break;case"mouseover":case"mouseout":ve=null;break;case"pointerover":case"pointerout":gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function xn(l,t,e,a,n,i){return l===null||l.nativeEvent!==i?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ve(t),t!==null&&nd(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function V0(l,t,e,a,n){switch(t){case"focusin":return he=xn(he,l,t,e,a,n),!0;case"dragenter":return ge=xn(ge,l,t,e,a,n),!0;case"mouseover":return ve=xn(ve,l,t,e,a,n),!0;case"pointerover":var i=n.pointerId;return gn.set(i,xn(gn.get(i)||null,l,t,e,a,n)),!0;case"gotpointercapture":return i=n.pointerId,vn.set(i,xn(vn.get(i)||null,l,t,e,a,n)),!0}return!1}function fd(l){var t=Qe(l.target);if(t!==null){var e=F(t);if(e!==null){if(t=e.tag,t===13){if(t=ml(e),t!==null){l.blockedOn=t,bf(l.priority,function(){id(e)});return}}else if(t===31){if(t=Ul(e),t!==null){l.blockedOn=t,bf(l.priority,function(){id(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Bi(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=Pc(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);lu=a,e.target.dispatchEvent(a),lu=null}else return t=Ve(e),t!==null&&nd(t),l.blockedOn=e,!1;t.shift()}return!0}function od(l,t,e){Bi(l)&&e.delete(t)}function Z0(){tf=!1,he!==null&&Bi(he)&&(he=null),ge!==null&&Bi(ge)&&(ge=null),ve!==null&&Bi(ve)&&(ve=null),gn.forEach(od),vn.forEach(od)}function Gi(l,t){l.blockedOn===t&&(l.blockedOn=null,tf||(tf=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Z0)))}var Hi=null;function sd(l){Hi!==l&&(Hi=l,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Hi===l&&(Hi=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],n=l[t+2];if(typeof a!="function"){if(lf(a||e)===null)continue;break}var i=Ve(e);i!==null&&(l.splice(t,3),t-=3,Pu(i,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function Aa(l){function t(f){return Gi(f,l)}he!==null&&Gi(he,l),ge!==null&&Gi(ge,l),ve!==null&&Gi(ve,l),gn.forEach(t),vn.forEach(t);for(var e=0;e<xe.length;e++){var a=xe[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<xe.length&&(e=xe[0],e.blockedOn===null);)fd(e),e.blockedOn===null&&xe.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],u=n[Xl]||null;if(typeof i=="function")u||sd(e);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Xl]||null)c=u.formAction;else if(lf(n)!==null)continue}else c=u.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),sd(e)}}}function rd(){function l(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ef(l){this._internalRoot=l}qi.prototype.render=ef.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(h(409));var e=t.current,a=it();ed(e,a,l,t,null,null)},qi.prototype.unmount=ef.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;ed(l.current,2,null,l,null,null),vi(),t[Xe]=null}};function qi(l){this._internalRoot=l}qi.prototype.unstable_scheduleHydration=function(l){if(l){var t=Sf();l={blockedOn:null,target:l,priority:t};for(var e=0;e<xe.length&&t!==0&&t<xe[e].priority;e++);xe.splice(e,0,l),e===0&&fd(l)}};var dd=rl.version;if(dd!=="19.2.4")throw Error(h(527,dd,"19.2.4"));T.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(h(188)):(l=Object.keys(l).join(","),Error(h(268,l)));return l=E(t),l=l!==null?I(l):null,l=l===null?null:l.stateNode,l};var w0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{za=Li.inject(w0),Il=Li}catch{}}return Sn.createRoot=function(l,t){if(!U(l))throw Error(h(299));var e=!1,a="",n=ps,i=Ss,u=bs;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ld(l,1,!1,null,null,e,a,null,n,i,u,rd),l[Xe]=t.current,qc(l),new ef(t)},Sn.hydrateRoot=function(l,t,e){if(!U(l))throw Error(h(299));var a=!1,n="",i=ps,u=Ss,c=bs,f=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),t=ld(l,1,!0,t,e??null,a,n,f,i,u,c,rd),t.context=td(null),e=t.current,a=it(),a=Ki(a),n=ae(a),n.callback=null,ne(e,n,a),e=a,t.current.lanes=e,Oa(t,e),Dt(t),l[Xe]=t.current,qc(l),new qi(t)},Sn.version="19.2.4",Sn}var Ed;function tm(){if(Ed)return uf.exports;Ed=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(rl){console.error(rl)}}return z(),uf.exports=lm(),uf.exports}var em=tm();function am(){const[z,rl]=Td.useState(null),k=[{id:1,question:"1. Explain Raster Scan and Random Scan Display. 👉 Draw diagram + Differences (VERY IMPORTANT)",answer:"📌 100% exam question type",codeExample:`
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

`},{id:15,question:"15. Explain Anti-Aliasing and its methods.",answer:"📌 Theory question often asked.",codeExample:`
What is Anti-Aliasing?

When we draw a line or curve on a computer screen, the edges look zig-zag or stair-shaped because the 
screen uses square pixels.

Example (jagged edge):

#####
    #####
         #####

This stair shape is called aliasing.
Anti-Aliasing is a method used to make edges look smooth.


Example (smoother edge):

######
  ######
    ######

The computer changes pixel brightness (color intensity) near the edges so the line looks smoother.



Methods of Anti-Aliasing

1. High Resolution Display

Idea

Use more pixels on the screen.
When pixels are very small, edges look smoother.

Example:

Low resolution

#  #  #
 #  # 

High resolution

########
 #######
  ######

Simple Meaning
More pixels → smoother image.



2. Post Filtering (Supersampling)

Idea

Each pixel is divided into smaller parts (sub-pixels).

Example:

Pixel

|----|
|____|

Divide into 4 parts:

|--|--|
|__|__|

The computer checks color in each small part and then averages them.

Result → smoother edges.



3. Pre Filtering
Idea

The computer checks how much of a pixel is covered by the object.

Example:

Pixel coverage

[████ ] 80% covered

The pixel color becomes 80% bright.
If only 20% is covered → lighter color.
This creates a smooth edge effect.



4. Pixel Phasing

Idea

The computer slightly changes pixel brightness near edges.

Example:

Dark pixel
Medium pixel
Light pixel

### 
 ## 
  #

By changing brightness, the edge looks smoother.


Very Simple Summary

| Method          | Idea                                |
| --------------- | ----------------------------------- |
| High Resolution | Use more pixels                     |
| Supersampling   | Divide pixels into small parts      |
| Pre Filtering   | Calculate how much pixel is covered |
| Pixel Phasing   | Adjust pixel brightness             |


One Line Definition (for exam)

Anti-Aliasing is a technique used to remove jagged edges in computer graphics and produce smooth 
images.
      
      `},{id:16,question:"16. Explain 2D Transformations.",answer:"📌 Write definition + matrix",codeExample:`
⭐ VERY IMPORTANT TRANSFORMATION QUESTIONS
These are almost guaranteed.

What is 2D Transformation?

In 2D Transformation, we change the position, size, or shape of an object in 2D space (x, y plane).

Example:

Move an object
Rotate an object
Increase size
Flip shape

All these are transformations.


Types of 2D Transformations

We will learn 5 types:

1. Translation
2. Rotation
3. Scaling
4. Reflection
5. Shearing
      


-----------------------------------------
TRANSLATION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Translation moves an object from one position to another 
without changing its size, shape, or orientation.

If a point P(x, y) is translated by:
Tx = translation in x-direction
Ty = translation in y-direction

New coordinates become:

x' = x + Tx
y' = y + Ty


-----------------------------------------
HOMOGENEOUS COORDINATES
-----------------------------------------

To use matrix multiplication in computer graphics,
we convert the point (x, y) into homogeneous form:

P = (x, y, 1)


-----------------------------------------
2D TRANSLATION MATRIX
-----------------------------------------

T = | 1   0   Tx |
    | 0   1   Ty |
    | 0   0   1  |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1  0  Tx |     | x |     | x' |
| 0  1  Ty |  ×  | y |  =  | y' |
| 0  0  1  |     | 1 |     | 1  |


After multiplication:

x' = x + Tx
y' = y + Ty


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2, 3)

Translation values:
Tx = 4
Ty = 2

Translation Matrix:

| 1  0  4 |
| 0  1  2 |
| 0  0  1 |

Point Matrix:

| 2 |
| 3 |
| 1 |

Multiplication:

x' = (1*2) + (0*3) + (4*1) = 6
y' = (0*2) + (1*3) + (2*1) = 5

New Point:
P'(6, 5)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Translation moves an object from one location to another.
2. Shape and size do NOT change.
3. Translation uses Tx and Ty values.
4. Homogeneous coordinates (x, y, 1) are used.
5. Translation matrix is 3×3.


------------------------------------------------------------------------------------


-----------------------------------------
ROTATION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Rotation means turning an object around a fixed point
(usually the origin) by a certain angle.

Rotation changes the orientation of the object
but the shape and size remain the same.

Angle of rotation = θ (theta)

Positive angle  → Counter-clockwise rotation
Negative angle  → Clockwise rotation


-----------------------------------------
ROTATION FORMULA
-----------------------------------------

If a point P(x, y) is rotated by angle θ about the origin,
the new coordinates become:

x' = x cosθ − y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
2D ROTATION MATRIX
-----------------------------------------

R = | cosθ   -sinθ |
    | sinθ    cosθ |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| cosθ  -sinθ |     | x |     | x' |
| sinθ   cosθ |  ×  | y |  =  | y' |


After multiplication:

x' = x cosθ − y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
EXAMPLE
-----------------------------------------

Rotate point P(1, 0) by 90° counter-clockwise.

Values:
cos90° = 0
sin90° = 1

Rotation Matrix:

| 0  -1 |
| 1   0 |

Point Matrix:

| 1 |
| 0 |

Multiplication:

x' = (0*1) + (-1*0) = 0
y' = (1*1) + (0*0) = 1

New Point:
P'(0, 1)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Rotation turns an object around a fixed point.
2. Shape and size do NOT change.
3. Angle θ determines how much the object rotates.
4. Rotation matrix uses cosθ and sinθ.
5. Counter-clockwise rotation is considered positive.


------------------------------------------------------------------------------------


-----------------------------------------
SCALING IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Scaling changes the size of an object in computer graphics.

It can either enlarge or shrink the object.

Sx = scaling factor in x-direction
Sy = scaling factor in y-direction


-----------------------------------------
SCALING FORMULA
-----------------------------------------

x' = Sx * x
y' = Sy * y


-----------------------------------------
2D SCALING MATRIX
-----------------------------------------

S = | Sx   0 |
    | 0    Sy |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| Sx  0 |     | x |     | x' |
| 0  Sy |  ×  | y |  =  | y' |


After multiplication:

x' = Sx * x
y' = Sy * y


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2, 3)

Scaling factors:
Sx = 2
Sy = 3

Scaling Matrix:

| 2  0 |
| 0  3 |

Point Matrix:

| 2 |
| 3 |

Multiplication:

x' = 2 * 2 = 4
y' = 3 * 3 = 9

New Point:
P'(4, 9)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Scaling changes the size of an object.
2. Shape remains the same.
3. Uses scaling factors Sx and Sy.
4. If Sx = Sy → Uniform scaling.
5. If Sx ≠ Sy → Differential scaling.


------------------------------------------------------------------------------------


-----------------------------------------
REFLECTION IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Reflection creates a mirror image of an object
with respect to a line or axis.

The size and shape of the object remain the same,
but the orientation is reversed.


-----------------------------------------
REFLECTION ABOUT X-AXIS
-----------------------------------------

Formula:

x' = x
y' = -y

Matrix:

| 1   0 |
| 0  -1 |

Example:
(3,4) → (3,-4)


-----------------------------------------
REFLECTION ABOUT Y-AXIS
-----------------------------------------

Formula:

x' = -x
y' = y

Matrix:

| -1   0 |
|  0   1 |

Example:
(3,4) → (-3,4)


-----------------------------------------
REFLECTION ABOUT ORIGIN
-----------------------------------------

Formula:

x' = -x
y' = -y

Matrix:

| -1   0 |
|  0  -1 |

Example:
(3,4) → (-3,-4)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Reflection produces a mirror image.
2. Shape and size do not change.
3. Only the direction/orientation changes.
4. Reflection can occur about X-axis, Y-axis,
   origin, or line y = x.


------------------------------------------------------------------------------------


-----------------------------------------
SHEARING IN 2D TRANSFORMATION
-----------------------------------------

Definition:
Shearing is a transformation that shifts one part
of an object in a particular direction while
keeping the other part fixed.

It changes the shape of the object but the area
remains the same.

Shearing makes objects look slanted or tilted.

Shx = shear factor in x-direction
Shy = shear factor in y-direction


-----------------------------------------
X-SHEARING FORMULA
-----------------------------------------

x' = x + Shx * y
y' = y


-----------------------------------------
X-SHEARING MATRIX
-----------------------------------------

Shx = | 1   Shx |
      | 0    1  |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1  Shx |     | x |     | x' |
| 0   1  |  ×  | y |  =  | y' |


After multiplication:

x' = x + Shx * y
y' = y


-----------------------------------------
Y-SHEARING FORMULA
-----------------------------------------

x' = x
y' = y + Shy * x


-----------------------------------------
Y-SHEARING MATRIX
-----------------------------------------

Shy = | 1   0 |
      | Shy 1 |


-----------------------------------------
MATRIX MULTIPLICATION
-----------------------------------------

| 1   0 |     | x |     | x' |
| Shy 1 |  ×  | y |  =  | y' |


After multiplication:

x' = x
y' = y + Shy * x


-----------------------------------------
EXAMPLE
-----------------------------------------

Original Point:
P(2,3)

Shear factor:
Shx = 2

X-Shearing Matrix:

| 1  2 |
| 0  1 |

Point Matrix:

| 2 |
| 3 |

Multiplication:

x' = 2 + (2*3) = 8
y' = 3

New Point:
P'(8,3)


-----------------------------------------
KEY POINTS
-----------------------------------------

1. Shearing shifts part of the object.
2. Shape changes but area remains the same.
3. There are two types: X-shear and Y-shear.
4. X-shear shifts points horizontally.
5. Y-shear shifts points vertically.


------------------------------------------------------------------------------------



      `},{id:17,question:"17. SHORT QUESTIONS",answer:"",codeExample:`
Just read these:

Regular vs Irregular polygon
Convex vs Concave polygon
Inside Outside Test (Odd-Parity rule)
Homogeneous coordinate system
Character generation methods
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. DDA Line Drawing Algorithm",answer:"",codeExample:`
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

      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],h=U=>{rl(z===U?null:U)};return Hl.jsxs("div",{className:"app-container",children:[Hl.jsx("h1",{children:"Computer Graphics Interview Questions"}),Hl.jsx("div",{className:"questions-container",children:k.map(U=>Hl.jsxs("div",{className:"question-item",children:[Hl.jsx("button",{className:`question-button ${z===U.id?"active":""}`,onClick:()=>h(U.id),children:U.question}),z===U.id&&Hl.jsxs("div",{className:"answer-container",children:[Hl.jsxs("div",{className:"answer",children:[Hl.jsx("h3",{children:"Answer:"}),Hl.jsx("p",{children:U.answer})]}),U.codeExample&&Hl.jsxs("div",{className:"code-example",children:[Hl.jsx("h3",{children:"Code Example:"}),Hl.jsx("pre",{children:Hl.jsx("code",{children:U.codeExample})})]})]})]},U.id))})]})}em.createRoot(document.getElementById("root")).render(Hl.jsx(Td.StrictMode,{children:Hl.jsx(am,{})}));
