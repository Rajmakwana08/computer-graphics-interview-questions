(function(){const re=document.createElement("link").relList;if(re&&re.supports&&re.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))m(N);new MutationObserver(N=>{for(const F of N)if(F.type==="childList")for(const he of F.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&m(he)}).observe(document,{childList:!0,subtree:!0});function I(N){const F={};return N.integrity&&(F.integrity=N.integrity),N.referrerPolicy&&(F.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?F.credentials="include":N.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function m(N){if(N.ep)return;N.ep=!0;const F=I(N);fetch(N.href,F)}})();var ao={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function J0(){if(yd)return vi;yd=1;var O=Symbol.for("react.transitional.element"),re=Symbol.for("react.fragment");function I(m,N,F){var he=null;if(F!==void 0&&(he=""+F),N.key!==void 0&&(he=""+N.key),"key"in N){F={};for(var Ne in N)Ne!=="key"&&(F[Ne]=N[Ne])}else F=N;return N=F.ref,{$$typeof:O,type:m,key:he,ref:N!==void 0?N:null,props:F}}return vi.Fragment=re,vi.jsx=I,vi.jsxs=I,vi}var hd;function F0(){return hd||(hd=1,ao.exports=J0()),ao.exports}var Le=F0(),io={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function W0(){if(md)return B;md=1;var O=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),fe=Symbol.iterator;function Fe(s){return s===null||typeof s!="object"?null:(s=fe&&s[fe]||s["@@iterator"],typeof s=="function"?s:null)}var Ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},we=Object.assign,zl={};function We(s,b,A){this.props=s,this.context=b,this.refs=zl,this.updater=A||Ge}We.prototype.isReactComponent={},We.prototype.setState=function(s,b){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,b,"setState")},We.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Fl(){}Fl.prototype=We.prototype;function Me(s,b,A){this.props=s,this.context=b,this.refs=zl,this.updater=A||Ge}var ul=Me.prototype=new Fl;ul.constructor=Me,we(ul,We.prototype),ul.isPureReactComponent=!0;var bl=Array.isArray;function He(){}var Q={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function Tl(s,b,A){var D=A.ref;return{$$typeof:O,type:s,key:b,ref:D!==void 0?D:null,props:A}}function Yt(s,b){return Tl(s.type,b,s.props)}function El(s){return typeof s=="object"&&s!==null&&s.$$typeof===O}function Ye(s){var b={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(A){return b[A]})}var St=/\/+/g;function _l(s,b){return typeof s=="object"&&s!==null&&s.key!=null?Ye(""+s.key):b.toString(36)}function pl(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(He,He):(s.status="pending",s.then(function(b){s.status==="pending"&&(s.status="fulfilled",s.value=b)},function(b){s.status==="pending"&&(s.status="rejected",s.reason=b)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function v(s,b,A,D,L){var q=typeof s;(q==="undefined"||q==="boolean")&&(s=null);var $=!1;if(s===null)$=!0;else switch(q){case"bigint":case"string":case"number":$=!0;break;case"object":switch(s.$$typeof){case O:case re:$=!0;break;case k:return $=s._init,v($(s._payload),b,A,D,L)}}if($)return L=L(s),$=D===""?"."+_l(s,0):D,bl(L)?(A="",$!=null&&(A=$.replace(St,"$&/")+"/"),v(L,b,A,"",function(Ca){return Ca})):L!=null&&(El(L)&&(L=Yt(L,A+(L.key==null||s&&s.key===L.key?"":(""+L.key).replace(St,"$&/")+"/")+$)),b.push(L)),1;$=0;var Ue=D===""?".":D+":";if(bl(s))for(var me=0;me<s.length;me++)D=s[me],q=Ue+_l(D,me),$+=v(D,b,A,q,L);else if(me=Fe(s),typeof me=="function")for(s=me.call(s),me=0;!(D=s.next()).done;)D=D.value,q=Ue+_l(D,me++),$+=v(D,b,A,q,L);else if(q==="object"){if(typeof s.then=="function")return v(pl(s),b,A,D,L);throw b=String(s),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return $}function E(s,b,A){if(s==null)return s;var D=[],L=0;return v(s,D,"","",function(q){return b.call(A,q,L++)}),D}function U(s){if(s._status===-1){var b=s._result;b=b(),b.then(function(A){(s._status===0||s._status===-1)&&(s._status=1,s._result=A)},function(A){(s._status===0||s._status===-1)&&(s._status=2,s._result=A)}),s._status===-1&&(s._status=0,s._result=b)}if(s._status===1)return s._result.default;throw s._result}var le=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},ne={map:E,forEach:function(s,b,A){E(s,function(){b.apply(this,arguments)},A)},count:function(s){var b=0;return E(s,function(){b++}),b},toArray:function(s){return E(s,function(b){return b})||[]},only:function(s){if(!El(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return B.Activity=w,B.Children=ne,B.Component=We,B.Fragment=I,B.Profiler=N,B.PureComponent=Me,B.StrictMode=m,B.Suspense=M,B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,B.__COMPILER_RUNTIME={__proto__:null,c:function(s){return Q.H.useMemoCache(s)}},B.cache=function(s){return function(){return s.apply(null,arguments)}},B.cacheSignal=function(){return null},B.cloneElement=function(s,b,A){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var D=we({},s.props),L=s.key;if(b!=null)for(q in b.key!==void 0&&(L=""+b.key),b)!qe.call(b,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&b.ref===void 0||(D[q]=b[q]);var q=arguments.length-2;if(q===1)D.children=A;else if(1<q){for(var $=Array(q),Ue=0;Ue<q;Ue++)$[Ue]=arguments[Ue+2];D.children=$}return Tl(s.type,L,D)},B.createContext=function(s){return s={$$typeof:he,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:F,_context:s},s},B.createElement=function(s,b,A){var D,L={},q=null;if(b!=null)for(D in b.key!==void 0&&(q=""+b.key),b)qe.call(b,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(L[D]=b[D]);var $=arguments.length-2;if($===1)L.children=A;else if(1<$){for(var Ue=Array($),me=0;me<$;me++)Ue[me]=arguments[me+2];L.children=Ue}if(s&&s.defaultProps)for(D in $=s.defaultProps,$)L[D]===void 0&&(L[D]=$[D]);return Tl(s,q,L)},B.createRef=function(){return{current:null}},B.forwardRef=function(s){return{$$typeof:Ne,render:s}},B.isValidElement=El,B.lazy=function(s){return{$$typeof:k,_payload:{_status:-1,_result:s},_init:U}},B.memo=function(s,b){return{$$typeof:T,type:s,compare:b===void 0?null:b}},B.startTransition=function(s){var b=Q.T,A={};Q.T=A;try{var D=s(),L=Q.S;L!==null&&L(A,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(He,le)}catch(q){le(q)}finally{b!==null&&A.types!==null&&(b.types=A.types),Q.T=b}},B.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},B.use=function(s){return Q.H.use(s)},B.useActionState=function(s,b,A){return Q.H.useActionState(s,b,A)},B.useCallback=function(s,b){return Q.H.useCallback(s,b)},B.useContext=function(s){return Q.H.useContext(s)},B.useDebugValue=function(){},B.useDeferredValue=function(s,b){return Q.H.useDeferredValue(s,b)},B.useEffect=function(s,b){return Q.H.useEffect(s,b)},B.useEffectEvent=function(s){return Q.H.useEffectEvent(s)},B.useId=function(){return Q.H.useId()},B.useImperativeHandle=function(s,b,A){return Q.H.useImperativeHandle(s,b,A)},B.useInsertionEffect=function(s,b){return Q.H.useInsertionEffect(s,b)},B.useLayoutEffect=function(s,b){return Q.H.useLayoutEffect(s,b)},B.useMemo=function(s,b){return Q.H.useMemo(s,b)},B.useOptimistic=function(s,b){return Q.H.useOptimistic(s,b)},B.useReducer=function(s,b,A){return Q.H.useReducer(s,b,A)},B.useRef=function(s){return Q.H.useRef(s)},B.useState=function(s){return Q.H.useState(s)},B.useSyncExternalStore=function(s,b,A){return Q.H.useSyncExternalStore(s,b,A)},B.useTransition=function(){return Q.H.useTransition()},B.version="19.2.4",B}var gd;function fo(){return gd||(gd=1,io.exports=W0()),io.exports}var Ed=fo(),no={exports:{}},xi={},uo={exports:{}},co={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function I0(){return pd||(pd=1,(function(O){function re(v,E){var U=v.length;v.push(E);e:for(;0<U;){var le=U-1>>>1,ne=v[le];if(0<N(ne,E))v[le]=E,v[U]=ne,U=le;else break e}}function I(v){return v.length===0?null:v[0]}function m(v){if(v.length===0)return null;var E=v[0],U=v.pop();if(U!==E){v[0]=U;e:for(var le=0,ne=v.length,s=ne>>>1;le<s;){var b=2*(le+1)-1,A=v[b],D=b+1,L=v[D];if(0>N(A,U))D<ne&&0>N(L,A)?(v[le]=L,v[D]=U,le=D):(v[le]=A,v[b]=U,le=b);else if(D<ne&&0>N(L,U))v[le]=L,v[D]=U,le=D;else break e}}return E}function N(v,E){var U=v.sortIndex-E.sortIndex;return U!==0?U:v.id-E.id}if(O.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var F=performance;O.unstable_now=function(){return F.now()}}else{var he=Date,Ne=he.now();O.unstable_now=function(){return he.now()-Ne}}var M=[],T=[],k=1,w=null,fe=3,Fe=!1,Ge=!1,we=!1,zl=!1,We=typeof setTimeout=="function"?setTimeout:null,Fl=typeof clearTimeout=="function"?clearTimeout:null,Me=typeof setImmediate<"u"?setImmediate:null;function ul(v){for(var E=I(T);E!==null;){if(E.callback===null)m(T);else if(E.startTime<=v)m(T),E.sortIndex=E.expirationTime,re(M,E);else break;E=I(T)}}function bl(v){if(we=!1,ul(v),!Ge)if(I(M)!==null)Ge=!0,He||(He=!0,Ye());else{var E=I(T);E!==null&&pl(bl,E.startTime-v)}}var He=!1,Q=-1,qe=5,Tl=-1;function Yt(){return zl?!0:!(O.unstable_now()-Tl<qe)}function El(){if(zl=!1,He){var v=O.unstable_now();Tl=v;var E=!0;try{e:{Ge=!1,we&&(we=!1,Fl(Q),Q=-1),Fe=!0;var U=fe;try{l:{for(ul(v),w=I(M);w!==null&&!(w.expirationTime>v&&Yt());){var le=w.callback;if(typeof le=="function"){w.callback=null,fe=w.priorityLevel;var ne=le(w.expirationTime<=v);if(v=O.unstable_now(),typeof ne=="function"){w.callback=ne,ul(v),E=!0;break l}w===I(M)&&m(M),ul(v)}else m(M);w=I(M)}if(w!==null)E=!0;else{var s=I(T);s!==null&&pl(bl,s.startTime-v),E=!1}}break e}finally{w=null,fe=U,Fe=!1}E=void 0}}finally{E?Ye():He=!1}}}var Ye;if(typeof Me=="function")Ye=function(){Me(El)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,_l=St.port2;St.port1.onmessage=El,Ye=function(){_l.postMessage(null)}}else Ye=function(){We(El,0)};function pl(v,E){Q=We(function(){v(O.unstable_now())},E)}O.unstable_IdlePriority=5,O.unstable_ImmediatePriority=1,O.unstable_LowPriority=4,O.unstable_NormalPriority=3,O.unstable_Profiling=null,O.unstable_UserBlockingPriority=2,O.unstable_cancelCallback=function(v){v.callback=null},O.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<v?Math.floor(1e3/v):5},O.unstable_getCurrentPriorityLevel=function(){return fe},O.unstable_next=function(v){switch(fe){case 1:case 2:case 3:var E=3;break;default:E=fe}var U=fe;fe=E;try{return v()}finally{fe=U}},O.unstable_requestPaint=function(){zl=!0},O.unstable_runWithPriority=function(v,E){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var U=fe;fe=v;try{return E()}finally{fe=U}},O.unstable_scheduleCallback=function(v,E,U){var le=O.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?le+U:le):U=le,v){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=U+ne,v={id:k++,callback:E,priorityLevel:v,startTime:U,expirationTime:ne,sortIndex:-1},U>le?(v.sortIndex=U,re(T,v),I(M)===null&&v===I(T)&&(we?(Fl(Q),Q=-1):we=!0,pl(bl,U-le))):(v.sortIndex=ne,re(M,v),Ge||Fe||(Ge=!0,He||(He=!0,Ye()))),v},O.unstable_shouldYield=Yt,O.unstable_wrapCallback=function(v){var E=fe;return function(){var U=fe;fe=E;try{return v.apply(this,arguments)}finally{fe=U}}}})(co)),co}var vd;function k0(){return vd||(vd=1,uo.exports=I0()),uo.exports}var oo={exports:{}},Re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function $0(){if(xd)return Re;xd=1;var O=fo();function re(M){var T="https://react.dev/errors/"+M;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)T+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+M+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function I(){}var m={d:{f:I,r:function(){throw Error(re(522))},D:I,C:I,L:I,m:I,X:I,S:I,M:I},p:0,findDOMNode:null},N=Symbol.for("react.portal");function F(M,T,k){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:w==null?null:""+w,children:M,containerInfo:T,implementation:k}}var he=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ne(M,T){if(M==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Re.createPortal=function(M,T){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(re(299));return F(M,T,null,k)},Re.flushSync=function(M){var T=he.T,k=m.p;try{if(he.T=null,m.p=2,M)return M()}finally{he.T=T,m.p=k,m.d.f()}},Re.preconnect=function(M,T){typeof M=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,m.d.C(M,T))},Re.prefetchDNS=function(M){typeof M=="string"&&m.d.D(M)},Re.preinit=function(M,T){if(typeof M=="string"&&T&&typeof T.as=="string"){var k=T.as,w=Ne(k,T.crossOrigin),fe=typeof T.integrity=="string"?T.integrity:void 0,Fe=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;k==="style"?m.d.S(M,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:w,integrity:fe,fetchPriority:Fe}):k==="script"&&m.d.X(M,{crossOrigin:w,integrity:fe,fetchPriority:Fe,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Re.preinitModule=function(M,T){if(typeof M=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var k=Ne(T.as,T.crossOrigin);m.d.M(M,{crossOrigin:k,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&m.d.M(M)},Re.preload=function(M,T){if(typeof M=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var k=T.as,w=Ne(k,T.crossOrigin);m.d.L(M,k,{crossOrigin:w,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Re.preloadModule=function(M,T){if(typeof M=="string")if(T){var k=Ne(T.as,T.crossOrigin);m.d.m(M,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:k,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else m.d.m(M)},Re.requestFormReset=function(M){m.d.r(M)},Re.unstable_batchedUpdates=function(M,T){return M(T)},Re.useFormState=function(M,T,k){return he.H.useFormState(M,T,k)},Re.useFormStatus=function(){return he.H.useHostTransitionStatus()},Re.version="19.2.4",Re}var Sd;function P0(){if(Sd)return oo.exports;Sd=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(re){console.error(re)}}return O(),oo.exports=$0(),oo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function eh(){if(bd)return xi;bd=1;var O=k0(),re=fo(),I=P0();function m(e){var l="https://react.dev/errors/"+e;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)l+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function F(e){var l=e,t=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(t=l.return),e=l.return;while(e)}return l.tag===3?t:null}function he(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function Ne(e){if(e.tag===31){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function M(e){if(F(e)!==e)throw Error(m(188))}function T(e){var l=e.alternate;if(!l){if(l=F(e),l===null)throw Error(m(188));return l!==e?null:e}for(var t=e,a=l;;){var i=t.return;if(i===null)break;var n=i.alternate;if(n===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===t)return M(i),e;if(n===a)return M(i),l;n=n.sibling}throw Error(m(188))}if(t.return!==a.return)t=i,a=n;else{for(var u=!1,c=i.child;c;){if(c===t){u=!0,t=i,a=n;break}if(c===a){u=!0,a=i,t=n;break}c=c.sibling}if(!u){for(c=n.child;c;){if(c===t){u=!0,t=n,a=i;break}if(c===a){u=!0,a=n,t=i;break}c=c.sibling}if(!u)throw Error(m(189))}}if(t.alternate!==a)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?e:l}function k(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e;for(e=e.child;e!==null;){if(l=k(e),l!==null)return l;e=e.sibling}return null}var w=Object.assign,fe=Symbol.for("react.element"),Fe=Symbol.for("react.transitional.element"),Ge=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Fl=Symbol.for("react.consumer"),Me=Symbol.for("react.context"),ul=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Tl=Symbol.for("react.activity"),Yt=Symbol.for("react.memo_cache_sentinel"),El=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=El&&e[El]||e["@@iterator"],typeof e=="function"?e:null)}var St=Symbol.for("react.client.reference");function _l(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===St?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case We:return"Profiler";case zl:return"StrictMode";case bl:return"Suspense";case He:return"SuspenseList";case Tl:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ge:return"Portal";case Me:return e.displayName||"Context";case Fl:return(e._context.displayName||"Context")+".Consumer";case ul:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return l=e.displayName||null,l!==null?l:_l(e.type)||"Memo";case qe:l=e._payload,e=e._init;try{return _l(e(l))}catch{}}return null}var pl=Array.isArray,v=re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=I.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},le=[],ne=-1;function s(e){return{current:e}}function b(e){0>ne||(e.current=le[ne],le[ne]=null,ne--)}function A(e,l){ne++,le[ne]=e.current,e.current=l}var D=s(null),L=s(null),q=s(null),$=s(null);function Ue(e,l){switch(A(q,l),A(L,e),A(D,null),l.nodeType){case 9:case 11:e=(e=l.documentElement)&&(e=e.namespaceURI)?Lr(e):0;break;default:if(e=l.tagName,l=l.namespaceURI)l=Lr(l),e=Gr(l,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(D),A(D,e)}function me(){b(D),b(L),b(q)}function Ca(e){e.memoizedState!==null&&A($,e);var l=D.current,t=Gr(l,e.type);l!==t&&(A(L,e),A(D,t))}function Si(e){L.current===e&&(b(D),b(L)),$.current===e&&(b($),hi._currentValue=U)}var qn,so;function bt(e){if(qn===void 0)try{throw Error()}catch(t){var l=t.stack.trim().match(/\n( *(at )?)/);qn=l&&l[1]||"",so=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qn+e+so}var Yn=!1;function jn(e,l){if(!e||Yn)return"";Yn=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var h=g}Reflect.construct(e,[],S)}else{try{S.call()}catch(g){h=g}e.call(S.prototype)}}else{try{throw Error()}catch(g){h=g}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),u=n[0],c=n[1];if(u&&c){var o=u.split(`
`),y=c.split(`
`);for(i=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;i<y.length&&!y[i].includes("DetermineComponentFrameRoot");)i++;if(a===o.length||i===y.length)for(a=o.length-1,i=y.length-1;1<=a&&0<=i&&o[a]!==y[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==y[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==y[i]){var p=`
`+o[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=i);break}}}finally{Yn=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?bt(t):""}function Ad(e,l){switch(e.tag){case 26:case 27:case 5:return bt(e.type);case 16:return bt("Lazy");case 13:return e.child!==l&&l!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return jn(e.type,!1);case 11:return jn(e.type.render,!1);case 1:return jn(e.type,!0);case 31:return bt("Activity");default:return""}}function ro(e){try{var l="",t=null;do l+=Ad(e,t),t=e,e=e.return;while(e);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Vn=Object.prototype.hasOwnProperty,Xn=O.unstable_scheduleCallback,Qn=O.unstable_cancelCallback,Cd=O.unstable_shouldYield,Od=O.unstable_requestPaint,Ie=O.unstable_now,Dd=O.unstable_getCurrentPriorityLevel,yo=O.unstable_ImmediatePriority,ho=O.unstable_UserBlockingPriority,bi=O.unstable_NormalPriority,zd=O.unstable_LowPriority,mo=O.unstable_IdlePriority,_d=O.log,Md=O.unstable_setDisableYieldValue,Oa=null,ke=null;function Wl(e){if(typeof _d=="function"&&Md(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Oa,e)}catch{}}var $e=Math.clz32?Math.clz32:wd,Rd=Math.log,Nd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(Rd(e)/Nd|0)|0}var Ti=256,Ei=262144,Ai=4194304;function Tt(e){var l=e&42;if(l!==0)return l;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,l,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,n=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?i=Tt(a):(u&=c,u!==0?i=Tt(u):t||(t=c&~e,t!==0&&(i=Tt(t))))):(c=a&~n,c!==0?i=Tt(c):u!==0?i=Tt(u):t||(t=a&~e,t!==0&&(i=Tt(t)))),i===0?0:l!==0&&l!==i&&(l&n)===0&&(n=i&-i,t=l&-l,n>=t||n===32&&(t&4194048)!==0)?l:i}function Da(e,l){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&l)===0}function Ud(e,l){switch(e){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function go(){var e=Ai;return Ai<<=1,(Ai&62914560)===0&&(Ai=4194304),e}function Zn(e){for(var l=[],t=0;31>t;t++)l.push(e);return l}function za(e,l){e.pendingLanes|=l,l!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bd(e,l,t,a,i,n){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,o=e.expirationTimes,y=e.hiddenUpdates;for(t=u&~t;0<t;){var p=31-$e(t),S=1<<p;c[p]=0,o[p]=-1;var h=y[p];if(h!==null)for(y[p]=null,p=0;p<h.length;p++){var g=h[p];g!==null&&(g.lane&=-536870913)}t&=~S}a!==0&&po(e,a,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(u&~l))}function po(e,l,t){e.pendingLanes|=l,e.suspendedLanes&=~l;var a=31-$e(l);e.entangledLanes|=l,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function vo(e,l){var t=e.entangledLanes|=l;for(e=e.entanglements;t;){var a=31-$e(t),i=1<<a;i&l|e[a]&l&&(e[a]|=l),t&=~i}}function xo(e,l){var t=l&-l;return t=(t&42)!==0?1:Kn(t),(t&(e.suspendedLanes|l))!==0?0:t}function Kn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function So(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:ud(e.type))}function bo(e,l){var t=E.p;try{return E.p=e,l()}finally{E.p=t}}var Il=Math.random().toString(36).slice(2),Ce="__reactFiber$"+Il,je="__reactProps$"+Il,jt="__reactContainer$"+Il,Fn="__reactEvents$"+Il,Ld="__reactListeners$"+Il,Gd="__reactHandles$"+Il,To="__reactResources$"+Il,_a="__reactMarker$"+Il;function Wn(e){delete e[Ce],delete e[je],delete e[Fn],delete e[Ld],delete e[Gd]}function Vt(e){var l=e[Ce];if(l)return l;for(var t=e.parentNode;t;){if(l=t[jt]||t[Ce]){if(t=l.alternate,l.child!==null||t!==null&&t.child!==null)for(e=Qr(e);e!==null;){if(t=e[Ce])return t;e=Qr(e)}return l}e=t,t=e.parentNode}return null}function Xt(e){if(e=e[Ce]||e[jt]){var l=e.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return e}return null}function Ma(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e.stateNode;throw Error(m(33))}function Qt(e){var l=e[To];return l||(l=e[To]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Ee(e){e[_a]=!0}var Eo=new Set,Ao={};function Et(e,l){Zt(e,l),Zt(e+"Capture",l)}function Zt(e,l){for(Ao[e]=l,e=0;e<l.length;e++)Eo.add(l[e])}var Hd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},Oo={};function qd(e){return Vn.call(Oo,e)?!0:Vn.call(Co,e)?!1:Hd.test(e)?Oo[e]=!0:(Co[e]=!0,!1)}function Oi(e,l,t){if(qd(l))if(t===null)e.removeAttribute(l);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(l);return}}e.setAttribute(l,""+t)}}function Di(e,l,t){if(t===null)e.removeAttribute(l);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttribute(l,""+t)}}function Ml(e,l,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(l,t,""+a)}}function cl(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Yd(e,l,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,l);if(!e.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,n=a.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return i.call(this)},set:function(u){t=""+u,n.call(this,u)}}),Object.defineProperty(e,l,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function In(e){if(!e._valueTracker){var l=Do(e)?"checked":"value";e._valueTracker=Yd(e,l,""+e[l])}}function zo(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var t=l.getValue(),a="";return e&&(a=Do(e)?e.checked?"true":"false":e.value),e=a,e!==t?(l.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jd=/[\n"\\]/g;function ol(e){return e.replace(jd,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function kn(e,l,t,a,i,n,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),l!=null?u==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+cl(l)):e.value!==""+cl(l)&&(e.value=""+cl(l)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),l!=null?$n(e,u,cl(l)):t!=null?$n(e,u,cl(t)):a!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+cl(c):e.removeAttribute("name")}function _o(e,l,t,a,i,n,u,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),l!=null||t!=null){if(!(n!=="submit"&&n!=="reset"||l!=null)){In(e);return}t=t!=null?""+cl(t):"",l=l!=null?""+cl(l):t,c||l===e.value||(e.value=l),e.defaultValue=l}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),In(e)}function $n(e,l,t){l==="number"&&zi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Kt(e,l,t,a){if(e=e.options,l){l={};for(var i=0;i<t.length;i++)l["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=l.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+cl(t),l=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}l!==null||e[i].disabled||(l=e[i])}l!==null&&(l.selected=!0)}}function Mo(e,l,t){if(l!=null&&(l=""+cl(l),l!==e.value&&(e.value=l),t==null)){e.defaultValue!==l&&(e.defaultValue=l);return}e.defaultValue=t!=null?""+cl(t):""}function Ro(e,l,t,a){if(l==null){if(a!=null){if(t!=null)throw Error(m(92));if(pl(a)){if(1<a.length)throw Error(m(93));a=a[0]}t=a}t==null&&(t=""),l=t}t=cl(l),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),In(e)}function Jt(e,l){if(l){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=l;return}}e.textContent=l}var Vd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function No(e,l,t){var a=l.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="":a?e.setProperty(l,t):typeof t!="number"||t===0||Vd.has(l)?l==="float"?e.cssFloat=t:e[l]=(""+t).trim():e[l]=t+"px"}function wo(e,l,t){if(l!=null&&typeof l!="object")throw Error(m(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in l)a=l[i],l.hasOwnProperty(i)&&t[i]!==a&&No(e,i,a)}else for(var n in l)l.hasOwnProperty(n)&&No(e,n,l[n])}function Pn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _i(e){return Qd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rl(){}var eu=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ft=null,Wt=null;function Uo(e){var l=Xt(e);if(l&&(e=l.stateNode)){var t=e[je]||null;e:switch(e=l.stateNode,l.type){case"input":if(kn(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),l=t.name,t.type==="radio"&&l!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ol(""+l)+'"][type="radio"]'),l=0;l<t.length;l++){var a=t[l];if(a!==e&&a.form===e.form){var i=a[je]||null;if(!i)throw Error(m(90));kn(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(l=0;l<t.length;l++)a=t[l],a.form===e.form&&zo(a)}break e;case"textarea":Mo(e,t.value,t.defaultValue);break e;case"select":l=t.value,l!=null&&Kt(e,!!t.multiple,l,!1)}}}var tu=!1;function Bo(e,l,t){if(tu)return e(l,t);tu=!0;try{var a=e(l);return a}finally{if(tu=!1,(Ft!==null||Wt!==null)&&(pn(),Ft&&(l=Ft,e=Wt,Wt=Ft=null,Uo(l),e)))for(l=0;l<e.length;l++)Uo(e[l])}}function Ra(e,l){var t=e.stateNode;if(t===null)return null;var a=t[je]||null;if(a===null)return null;t=a[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(m(231,l,typeof t));return t}var Nl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Nl)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){au=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{au=!1}var kl=null,iu=null,Mi=null;function Lo(){if(Mi)return Mi;var e,l=iu,t=l.length,a,i="value"in kl?kl.value:kl.textContent,n=i.length;for(e=0;e<t&&l[e]===i[e];e++);var u=t-e;for(a=1;a<=u&&l[t-a]===i[n-a];a++);return Mi=i.slice(e,1<a?1-a:void 0)}function Ri(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Go(){return!1}function Ve(e){function l(t,a,i,n,u){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ni:Go,this.isPropagationStopped=Go,this}return w(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),l}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=Ve(At),wa=w({},At,{view:0,detail:0}),Zd=Ve(wa),nu,uu,Ua,Ui=w({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ua&&(Ua&&e.type==="mousemove"?(nu=e.screenX-Ua.screenX,uu=e.screenY-Ua.screenY):uu=nu=0,Ua=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Ho=Ve(Ui),Kd=w({},Ui,{dataTransfer:0}),Jd=Ve(Kd),Fd=w({},wa,{relatedTarget:0}),cu=Ve(Fd),Wd=w({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),Id=Ve(Wd),kd=w({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Ve(kd),Pd=w({},At,{data:0}),qo=Ve(Pd),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=ty[e])?!!l[e]:!1}function ou(){return ay}var iy=w({},wa,{key:function(e){if(e.key){var l=ey[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ly[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ny=Ve(iy),uy=w({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yo=Ve(uy),cy=w({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),oy=Ve(cy),fy=w({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Ve(fy),ry=w({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Ve(ry),yy=w({},At,{newState:0,oldState:0}),hy=Ve(yy),my=[9,13,27,32],fu=Nl&&"CompositionEvent"in window,Ba=null;Nl&&"documentMode"in document&&(Ba=document.documentMode);var gy=Nl&&"TextEvent"in window&&!Ba,jo=Nl&&(!fu||Ba&&8<Ba&&11>=Ba),Vo=" ",Xo=!1;function Qo(e,l){switch(e){case"keyup":return my.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function py(e,l){switch(e){case"compositionend":return Zo(l);case"keypress":return l.which!==32?null:(Xo=!0,Vo);case"textInput":return e=l.data,e===Vo&&Xo?null:e;default:return null}}function vy(e,l){if(It)return e==="compositionend"||!fu&&Qo(e,l)?(e=Lo(),Mi=iu=kl=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return jo&&l.locale!=="ko"?null:l.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!xy[e.type]:l==="textarea"}function Jo(e,l,t,a){Ft?Wt?Wt.push(a):Wt=[a]:Ft=a,l=An(l,"onChange"),0<l.length&&(t=new wi("onChange","change",null,t,a),e.push({event:t,listeners:l}))}var La=null,Ga=null;function Sy(e){Mr(e,0)}function Bi(e){var l=Ma(e);if(zo(l))return e}function Fo(e,l){if(e==="change")return l}var Wo=!1;if(Nl){var su;if(Nl){var ru="oninput"in document;if(!ru){var Io=document.createElement("div");Io.setAttribute("oninput","return;"),ru=typeof Io.oninput=="function"}su=ru}else su=!1;Wo=su&&(!document.documentMode||9<document.documentMode)}function ko(){La&&(La.detachEvent("onpropertychange",$o),Ga=La=null)}function $o(e){if(e.propertyName==="value"&&Bi(Ga)){var l=[];Jo(l,Ga,e,lu(e)),Bo(Sy,l)}}function by(e,l,t){e==="focusin"?(ko(),La=l,Ga=t,La.attachEvent("onpropertychange",$o)):e==="focusout"&&ko()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(Ga)}function Ey(e,l){if(e==="click")return Bi(l)}function Ay(e,l){if(e==="input"||e==="change")return Bi(l)}function Cy(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var Pe=typeof Object.is=="function"?Object.is:Cy;function Ha(e,l){if(Pe(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var t=Object.keys(e),a=Object.keys(l);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!Vn.call(l,i)||!Pe(e[i],l[i]))return!1}return!0}function Po(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ef(e,l){var t=Po(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=l&&a>=l)return{node:t,offset:l-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Po(t)}}function lf(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?lf(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var l=zi(e.document);l instanceof e.HTMLIFrameElement;){try{var t=typeof l.contentWindow.location.href=="string"}catch{t=!1}if(t)e=l.contentWindow;else break;l=zi(e.document)}return l}function du(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}var Oy=Nl&&"documentMode"in document&&11>=document.documentMode,kt=null,yu=null,qa=null,hu=!1;function af(e,l,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hu||kt==null||kt!==zi(a)||(a=kt,"selectionStart"in a&&du(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qa&&Ha(qa,a)||(qa=a,a=An(yu,"onSelect"),0<a.length&&(l=new wi("onSelect","select",null,l,t),e.push({event:l,listeners:a}),l.target=kt)))}function Ct(e,l){var t={};return t[e.toLowerCase()]=l.toLowerCase(),t["Webkit"+e]="webkit"+l,t["Moz"+e]="moz"+l,t}var $t={animationend:Ct("Animation","AnimationEnd"),animationiteration:Ct("Animation","AnimationIteration"),animationstart:Ct("Animation","AnimationStart"),transitionrun:Ct("Transition","TransitionRun"),transitionstart:Ct("Transition","TransitionStart"),transitioncancel:Ct("Transition","TransitionCancel"),transitionend:Ct("Transition","TransitionEnd")},mu={},nf={};Nl&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function Ot(e){if(mu[e])return mu[e];if(!$t[e])return e;var l=$t[e],t;for(t in l)if(l.hasOwnProperty(t)&&t in nf)return mu[e]=l[t];return e}var uf=Ot("animationend"),cf=Ot("animationiteration"),of=Ot("animationstart"),Dy=Ot("transitionrun"),zy=Ot("transitionstart"),_y=Ot("transitioncancel"),ff=Ot("transitionend"),sf=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function vl(e,l){sf.set(e,l),Et(l,[e])}var Li=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fl=[],Pt=0,pu=0;function Gi(){for(var e=Pt,l=pu=Pt=0;l<e;){var t=fl[l];fl[l++]=null;var a=fl[l];fl[l++]=null;var i=fl[l];fl[l++]=null;var n=fl[l];if(fl[l++]=null,a!==null&&i!==null){var u=a.pending;u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i}n!==0&&rf(t,i,n)}}function Hi(e,l,t,a){fl[Pt++]=e,fl[Pt++]=l,fl[Pt++]=t,fl[Pt++]=a,pu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function vu(e,l,t,a){return Hi(e,l,t,a),qi(e)}function Dt(e,l){return Hi(e,null,null,l),qi(e)}function rf(e,l,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,n=e.return;n!==null;)n.childLanes|=t,a=n.alternate,a!==null&&(a.childLanes|=t),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&l!==null&&(i=31-$e(t),e=n.hiddenUpdates,a=e[i],a===null?e[i]=[l]:a.push(l),l.lane=t|536870912),n):null}function qi(e){if(50<ci)throw ci=0,Dc=null,Error(m(185));for(var l=e.return;l!==null;)e=l,l=e.return;return e.tag===3?e.stateNode:null}var ea={};function My(e,l,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function el(e,l,t,a){return new My(e,l,t,a)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wl(e,l){var t=e.alternate;return t===null?(t=el(e.tag,l,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=l,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function df(e,l){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=l,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),e}function Yi(e,l,t,a,i,n){var u=0;if(a=e,typeof e=="function")xu(e)&&(u=1);else if(typeof e=="string")u=B0(e,t,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tl:return e=el(31,t,l,i),e.elementType=Tl,e.lanes=n,e;case we:return zt(t.children,i,n,l);case zl:u=8,i|=24;break;case We:return e=el(12,t,l,i|2),e.elementType=We,e.lanes=n,e;case bl:return e=el(13,t,l,i),e.elementType=bl,e.lanes=n,e;case He:return e=el(19,t,l,i),e.elementType=He,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:u=10;break e;case Fl:u=9;break e;case ul:u=11;break e;case Q:u=14;break e;case qe:u=16,a=null;break e}u=29,t=Error(m(130,e===null?"null":typeof e,"")),a=null}return l=el(u,t,l,i),l.elementType=e,l.type=a,l.lanes=n,l}function zt(e,l,t,a){return e=el(7,e,a,l),e.lanes=t,e}function Su(e,l,t){return e=el(6,e,null,l),e.lanes=t,e}function yf(e){var l=el(18,null,null,0);return l.stateNode=e,l}function bu(e,l,t){return l=el(4,e.children!==null?e.children:[],e.key,l),l.lanes=t,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}var hf=new WeakMap;function sl(e,l){if(typeof e=="object"&&e!==null){var t=hf.get(e);return t!==void 0?t:(l={value:e,source:l,stack:ro(l)},hf.set(e,l),l)}return{value:e,source:l,stack:ro(l)}}var la=[],ta=0,ji=null,Ya=0,rl=[],dl=0,$l=null,Al=1,Cl="";function Ul(e,l){la[ta++]=Ya,la[ta++]=ji,ji=e,Ya=l}function mf(e,l,t){rl[dl++]=Al,rl[dl++]=Cl,rl[dl++]=$l,$l=e;var a=Al;e=Cl;var i=32-$e(a)-1;a&=~(1<<i),t+=1;var n=32-$e(l)+i;if(30<n){var u=i-i%5;n=(a&(1<<u)-1).toString(32),a>>=u,i-=u,Al=1<<32-$e(l)+i|t<<i|a,Cl=n+e}else Al=1<<n|t<<i|a,Cl=e}function Tu(e){e.return!==null&&(Ul(e,1),mf(e,1,0))}function Eu(e){for(;e===ji;)ji=la[--ta],la[ta]=null,Ya=la[--ta],la[ta]=null;for(;e===$l;)$l=rl[--dl],rl[dl]=null,Cl=rl[--dl],rl[dl]=null,Al=rl[--dl],rl[dl]=null}function gf(e,l){rl[dl++]=Al,rl[dl++]=Cl,rl[dl++]=$l,Al=l.id,Cl=l.overflow,$l=e}var Oe=null,ce=null,Z=!1,Pl=null,yl=!1,Au=Error(m(519));function et(e){var l=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ja(sl(l,e)),Au}function pf(e){var l=e.stateNode,t=e.type,a=e.memoizedProps;switch(l[Ce]=e,l[je]=a,t){case"dialog":j("cancel",l),j("close",l);break;case"iframe":case"object":case"embed":j("load",l);break;case"video":case"audio":for(t=0;t<fi.length;t++)j(fi[t],l);break;case"source":j("error",l);break;case"img":case"image":case"link":j("error",l),j("load",l);break;case"details":j("toggle",l);break;case"input":j("invalid",l),_o(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":j("invalid",l);break;case"textarea":j("invalid",l),Ro(l,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||l.textContent===""+t||a.suppressHydrationWarning===!0||Ur(l.textContent,t)?(a.popover!=null&&(j("beforetoggle",l),j("toggle",l)),a.onScroll!=null&&j("scroll",l),a.onScrollEnd!=null&&j("scrollend",l),a.onClick!=null&&(l.onclick=Rl),l=!0):l=!1,l||et(e,!0)}function vf(e){for(Oe=e.return;Oe;)switch(Oe.tag){case 5:case 31:case 13:yl=!1;return;case 27:case 3:yl=!0;return;default:Oe=Oe.return}}function aa(e){if(e!==Oe)return!1;if(!Z)return vf(e),Z=!0,!1;var l=e.tag,t;if((t=l!==3&&l!==27)&&((t=l===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Vc(e.type,e.memoizedProps)),t=!t),t&&ce&&et(e),vf(e),l===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));ce=Xr(e)}else if(l===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));ce=Xr(e)}else l===27?(l=ce,ht(e.type)?(e=Jc,Jc=null,ce=e):ce=l):ce=Oe?ml(e.stateNode.nextSibling):null;return!0}function _t(){ce=Oe=null,Z=!1}function Cu(){var e=Pl;return e!==null&&(Ke===null?Ke=e:Ke.push.apply(Ke,e),Pl=null),e}function ja(e){Pl===null?Pl=[e]:Pl.push(e)}var Ou=s(null),Mt=null,Bl=null;function lt(e,l,t){A(Ou,l._currentValue),l._currentValue=t}function Ll(e){e._currentValue=Ou.current,b(Ou)}function Du(e,l,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),e===t)break;e=e.return}}function zu(e,l,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;e:for(;n!==null;){var c=n;n=i;for(var o=0;o<l.length;o++)if(c.context===l[o]){n.lanes|=t,c=n.alternate,c!==null&&(c.lanes|=t),Du(n.return,t,e),a||(u=null);break e}n=c.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(m(341));u.lanes|=t,n=u.alternate,n!==null&&(n.lanes|=t),Du(u,t,e),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function ia(e,l,t,a){e=null;for(var i=l,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var c=i.type;Pe(i.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(i===$.current){if(u=i.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}i=i.return}e!==null&&zu(l,e,t,a),l.flags|=262144}function Vi(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rt(e){Mt=e,Bl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return xf(Mt,e)}function Xi(e,l){return Mt===null&&Rt(e),xf(e,l)}function xf(e,l){var t=l._currentValue;if(l={context:l,memoizedValue:t,next:null},Bl===null){if(e===null)throw Error(m(308));Bl=l,e.dependencies={lanes:0,firstContext:l},e.flags|=524288}else Bl=Bl.next=l;return t}var Ry=typeof AbortController<"u"?AbortController:function(){var e=[],l=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){l.aborted=!0,e.forEach(function(t){return t()})}},Ny=O.unstable_scheduleCallback,wy=O.unstable_NormalPriority,ve={$$typeof:Me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new Ry,data:new Map,refCount:0}}function Va(e){e.refCount--,e.refCount===0&&Ny(wy,function(){e.controller.abort()})}var Xa=null,Mu=0,na=0,ua=null;function Uy(e,l){if(Xa===null){var t=Xa=[];Mu=0,na=wc(),ua={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Mu++,l.then(Sf,Sf),l}function Sf(){if(--Mu===0&&Xa!==null){ua!==null&&(ua.status="fulfilled");var e=Xa;Xa=null,na=0,ua=null;for(var l=0;l<e.length;l++)(0,e[l])()}}function By(e,l){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=l;for(var i=0;i<t.length;i++)(0,t[i])(l)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var bf=v.S;v.S=function(e,l){ir=Ie(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&Uy(e,l),bf!==null&&bf(e,l)};var Nt=s(null);function Ru(){var e=Nt.current;return e!==null?e:ue.pooledCache}function Qi(e,l){l===null?A(Nt,Nt.current):A(Nt,l.pool)}function Tf(){var e=Ru();return e===null?null:{parent:ve._currentValue,pool:e}}var ca=Error(m(460)),Nu=Error(m(474)),Zi=Error(m(542)),Ki={then:function(){}};function Ef(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Af(e,l,t){switch(t=e[t],t===void 0?e.push(l):t!==l&&(l.then(Rl,Rl),l=t),l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,Of(e),e;default:if(typeof l.status=="string")l.then(Rl,Rl);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=l,e.status="pending",e.then(function(a){if(l.status==="pending"){var i=l;i.status="fulfilled",i.value=a}},function(a){if(l.status==="pending"){var i=l;i.status="rejected",i.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,Of(e),e}throw Ut=l,ca}}function wt(e){try{var l=e._init;return l(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ut=t,ca):t}}var Ut=null;function Cf(){if(Ut===null)throw Error(m(459));var e=Ut;return Ut=null,e}function Of(e){if(e===ca||e===Zi)throw Error(m(483))}var oa=null,Qa=0;function Ji(e){var l=Qa;return Qa+=1,oa===null&&(oa=[]),Af(oa,e,l)}function Za(e,l){l=l.props.ref,e.ref=l!==void 0?l:null}function Fi(e,l){throw l.$$typeof===fe?Error(m(525)):(e=Object.prototype.toString.call(l),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e)))}function Df(e){function l(r,f){if(e){var d=r.deletions;d===null?(r.deletions=[f],r.flags|=16):d.push(f)}}function t(r,f){if(!e)return null;for(;f!==null;)l(r,f),f=f.sibling;return null}function a(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function i(r,f){return r=wl(r,f),r.index=0,r.sibling=null,r}function n(r,f,d){return r.index=d,e?(d=r.alternate,d!==null?(d=d.index,d<f?(r.flags|=67108866,f):d):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function u(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,d,x){return f===null||f.tag!==6?(f=Su(d,r.mode,x),f.return=r,f):(f=i(f,d),f.return=r,f)}function o(r,f,d,x){var _=d.type;return _===we?p(r,f,d.props.children,x,d.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===qe&&wt(_)===f.type)?(f=i(f,d.props),Za(f,d),f.return=r,f):(f=Yi(d.type,d.key,d.props,null,r.mode,x),Za(f,d),f.return=r,f)}function y(r,f,d,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=bu(d,r.mode,x),f.return=r,f):(f=i(f,d.children||[]),f.return=r,f)}function p(r,f,d,x,_){return f===null||f.tag!==7?(f=zt(d,r.mode,x,_),f.return=r,f):(f=i(f,d),f.return=r,f)}function S(r,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Su(""+f,r.mode,d),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fe:return d=Yi(f.type,f.key,f.props,null,r.mode,d),Za(d,f),d.return=r,d;case Ge:return f=bu(f,r.mode,d),f.return=r,f;case qe:return f=wt(f),S(r,f,d)}if(pl(f)||Ye(f))return f=zt(f,r.mode,d,null),f.return=r,f;if(typeof f.then=="function")return S(r,Ji(f),d);if(f.$$typeof===Me)return S(r,Xi(r,f),d);Fi(r,f)}return null}function h(r,f,d,x){var _=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return _!==null?null:c(r,f,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fe:return d.key===_?o(r,f,d,x):null;case Ge:return d.key===_?y(r,f,d,x):null;case qe:return d=wt(d),h(r,f,d,x)}if(pl(d)||Ye(d))return _!==null?null:p(r,f,d,x,null);if(typeof d.then=="function")return h(r,f,Ji(d),x);if(d.$$typeof===Me)return h(r,f,Xi(r,d),x);Fi(r,d)}return null}function g(r,f,d,x,_){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return r=r.get(d)||null,c(f,r,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Fe:return r=r.get(x.key===null?d:x.key)||null,o(f,r,x,_);case Ge:return r=r.get(x.key===null?d:x.key)||null,y(f,r,x,_);case qe:return x=wt(x),g(r,f,d,x,_)}if(pl(x)||Ye(x))return r=r.get(d)||null,p(f,r,x,_,null);if(typeof x.then=="function")return g(r,f,d,Ji(x),_);if(x.$$typeof===Me)return g(r,f,d,Xi(f,x),_);Fi(f,x)}return null}function C(r,f,d,x){for(var _=null,K=null,z=f,H=f=0,X=null;z!==null&&H<d.length;H++){z.index>H?(X=z,z=null):X=z.sibling;var J=h(r,z,d[H],x);if(J===null){z===null&&(z=X);break}e&&z&&J.alternate===null&&l(r,z),f=n(J,f,H),K===null?_=J:K.sibling=J,K=J,z=X}if(H===d.length)return t(r,z),Z&&Ul(r,H),_;if(z===null){for(;H<d.length;H++)z=S(r,d[H],x),z!==null&&(f=n(z,f,H),K===null?_=z:K.sibling=z,K=z);return Z&&Ul(r,H),_}for(z=a(z);H<d.length;H++)X=g(z,r,H,d[H],x),X!==null&&(e&&X.alternate!==null&&z.delete(X.key===null?H:X.key),f=n(X,f,H),K===null?_=X:K.sibling=X,K=X);return e&&z.forEach(function(xt){return l(r,xt)}),Z&&Ul(r,H),_}function R(r,f,d,x){if(d==null)throw Error(m(151));for(var _=null,K=null,z=f,H=f=0,X=null,J=d.next();z!==null&&!J.done;H++,J=d.next()){z.index>H?(X=z,z=null):X=z.sibling;var xt=h(r,z,J.value,x);if(xt===null){z===null&&(z=X);break}e&&z&&xt.alternate===null&&l(r,z),f=n(xt,f,H),K===null?_=xt:K.sibling=xt,K=xt,z=X}if(J.done)return t(r,z),Z&&Ul(r,H),_;if(z===null){for(;!J.done;H++,J=d.next())J=S(r,J.value,x),J!==null&&(f=n(J,f,H),K===null?_=J:K.sibling=J,K=J);return Z&&Ul(r,H),_}for(z=a(z);!J.done;H++,J=d.next())J=g(z,r,H,J.value,x),J!==null&&(e&&J.alternate!==null&&z.delete(J.key===null?H:J.key),f=n(J,f,H),K===null?_=J:K.sibling=J,K=J);return e&&z.forEach(function(K0){return l(r,K0)}),Z&&Ul(r,H),_}function ie(r,f,d,x){if(typeof d=="object"&&d!==null&&d.type===we&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Fe:e:{for(var _=d.key;f!==null;){if(f.key===_){if(_=d.type,_===we){if(f.tag===7){t(r,f.sibling),x=i(f,d.props.children),x.return=r,r=x;break e}}else if(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===qe&&wt(_)===f.type){t(r,f.sibling),x=i(f,d.props),Za(x,d),x.return=r,r=x;break e}t(r,f);break}else l(r,f);f=f.sibling}d.type===we?(x=zt(d.props.children,r.mode,x,d.key),x.return=r,r=x):(x=Yi(d.type,d.key,d.props,null,r.mode,x),Za(x,d),x.return=r,r=x)}return u(r);case Ge:e:{for(_=d.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){t(r,f.sibling),x=i(f,d.children||[]),x.return=r,r=x;break e}else{t(r,f);break}else l(r,f);f=f.sibling}x=bu(d,r.mode,x),x.return=r,r=x}return u(r);case qe:return d=wt(d),ie(r,f,d,x)}if(pl(d))return C(r,f,d,x);if(Ye(d)){if(_=Ye(d),typeof _!="function")throw Error(m(150));return d=_.call(d),R(r,f,d,x)}if(typeof d.then=="function")return ie(r,f,Ji(d),x);if(d.$$typeof===Me)return ie(r,f,Xi(r,d),x);Fi(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(t(r,f.sibling),x=i(f,d),x.return=r,r=x):(t(r,f),x=Su(d,r.mode,x),x.return=r,r=x),u(r)):t(r,f)}return function(r,f,d,x){try{Qa=0;var _=ie(r,f,d,x);return oa=null,_}catch(z){if(z===ca||z===Zi)throw z;var K=el(29,z,null,r.mode);return K.lanes=x,K.return=r,K}finally{}}}var Bt=Df(!0),zf=Df(!1),tt=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function at(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function it(e,l,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(W&2)!==0){var i=a.pending;return i===null?l.next=l:(l.next=i.next,i.next=l),a.pending=l,l=qi(e),rf(e,null,t),l}return Hi(e,a,l,t),qi(e)}function Ka(e,l,t){if(l=l.updateQueue,l!==null&&(l=l.shared,(t&4194048)!==0)){var a=l.lanes;a&=e.pendingLanes,t|=a,l.lanes=t,vo(e,t)}}function Bu(e,l){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,n=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,t=t.next}while(t!==null);n===null?i=n=l:n=n.next=l}else i=n=l;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=l:e.next=l,t.lastBaseUpdate=l}var Lu=!1;function Ja(){if(Lu){var e=ua;if(e!==null)throw e}}function Fa(e,l,t,a){Lu=!1;var i=e.updateQueue;tt=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var o=c,y=o.next;o.next=null,u===null?n=y:u.next=y,u=o;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==u&&(c===null?p.firstBaseUpdate=y:c.next=y,p.lastBaseUpdate=o))}if(n!==null){var S=i.baseState;u=0,p=y=o=null,c=n;do{var h=c.lane&-536870913,g=h!==c.lane;if(g?(V&h)===h:(a&h)===h){h!==0&&h===na&&(Lu=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var C=e,R=c;h=l;var ie=t;switch(R.tag){case 1:if(C=R.payload,typeof C=="function"){S=C.call(ie,S,h);break e}S=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=R.payload,h=typeof C=="function"?C.call(ie,S,h):C,h==null)break e;S=w({},S,h);break e;case 2:tt=!0}}h=c.callback,h!==null&&(e.flags|=64,g&&(e.flags|=8192),g=i.callbacks,g===null?i.callbacks=[h]:g.push(h))}else g={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(y=p=g,o=S):p=p.next=g,u|=h;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;g=c,c=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);p===null&&(o=S),i.baseState=o,i.firstBaseUpdate=y,i.lastBaseUpdate=p,n===null&&(i.shared.lanes=0),ft|=u,e.lanes=u,e.memoizedState=S}}function _f(e,l){if(typeof e!="function")throw Error(m(191,e));e.call(l)}function Mf(e,l){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)_f(t[e],l)}var fa=s(null),Wi=s(0);function Rf(e,l){e=Zl,A(Wi,e),A(fa,l),Zl=e|l.baseLanes}function Gu(){A(Wi,Zl),A(fa,fa.current)}function Hu(){Zl=Wi.current,b(fa),b(Wi)}var ll=s(null),hl=null;function nt(e){var l=e.alternate;A(ge,ge.current&1),A(ll,e),hl===null&&(l===null||fa.current!==null||l.memoizedState!==null)&&(hl=e)}function qu(e){A(ge,ge.current),A(ll,e),hl===null&&(hl=e)}function Nf(e){e.tag===22?(A(ge,ge.current),A(ll,e),hl===null&&(hl=e)):ut()}function ut(){A(ge,ge.current),A(ll,ll.current)}function tl(e){b(ll),hl===e&&(hl=null),b(ge)}var ge=s(0);function Ii(e){for(var l=e;l!==null;){if(l.tag===13){var t=l.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Zc(t)||Kc(t)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Gl=0,G=null,te=null,xe=null,ki=!1,sa=!1,Lt=!1,$i=0,Wa=0,ra=null,Ly=0;function de(){throw Error(m(321))}function Yu(e,l){if(l===null)return!1;for(var t=0;t<l.length&&t<e.length;t++)if(!Pe(e[t],l[t]))return!1;return!0}function ju(e,l,t,a,i,n){return Gl=n,G=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,v.H=e===null||e.memoizedState===null?ms:tc,Lt=!1,n=t(a,i),Lt=!1,sa&&(n=Uf(l,t,a,i)),wf(e),n}function wf(e){v.H=$a;var l=te!==null&&te.next!==null;if(Gl=0,xe=te=G=null,ki=!1,Wa=0,ra=null,l)throw Error(m(300));e===null||Se||(e=e.dependencies,e!==null&&Vi(e)&&(Se=!0))}function Uf(e,l,t,a){G=e;var i=0;do{if(sa&&(ra=null),Wa=0,sa=!1,25<=i)throw Error(m(301));if(i+=1,xe=te=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}v.H=gs,n=l(t,a)}while(sa);return n}function Gy(){var e=v.H,l=e.useState()[0];return l=typeof l.then=="function"?Ia(l):l,e=e.useState()[0],(te!==null?te.memoizedState:null)!==e&&(G.flags|=1024),l}function Vu(){var e=$i!==0;return $i=0,e}function Xu(e,l,t){l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~t}function Qu(e){if(ki){for(e=e.memoizedState;e!==null;){var l=e.queue;l!==null&&(l.pending=null),e=e.next}ki=!1}Gl=0,xe=te=G=null,sa=!1,Wa=$i=0,ra=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?G.memoizedState=xe=e:xe=xe.next=e,xe}function pe(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var l=xe===null?G.memoizedState:xe.next;if(l!==null)xe=l,te=e;else{if(e===null)throw G.alternate===null?Error(m(467)):Error(m(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},xe===null?G.memoizedState=xe=e:xe=xe.next=e}return xe}function Pi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ia(e){var l=Wa;return Wa+=1,ra===null&&(ra=[]),e=Af(ra,e,l),l=G,(xe===null?l.memoizedState:xe.next)===null&&(l=l.alternate,v.H=l===null||l.memoizedState===null?ms:tc),e}function en(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ia(e);if(e.$$typeof===Me)return De(e)}throw Error(m(438,String(e)))}function Zu(e){var l=null,t=G.updateQueue;if(t!==null&&(l=t.memoCache),l==null){var a=G.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(i){return i.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),t===null&&(t=Pi(),G.updateQueue=t),t.memoCache=l,t=l.data[l.index],t===void 0)for(t=l.data[l.index]=Array(e),a=0;a<e;a++)t[a]=Yt;return l.index++,t}function Hl(e,l){return typeof l=="function"?l(e):l}function ln(e){var l=pe();return Ku(l,te,e)}function Ku(e,l,t){var a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=t;var i=e.baseQueue,n=a.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}l.baseQueue=i=n,a.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{l=i.next;var c=u=null,o=null,y=l,p=!1;do{var S=y.lane&-536870913;if(S!==y.lane?(V&S)===S:(Gl&S)===S){var h=y.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),S===na&&(p=!0);else if((Gl&h)===h){y=y.next,h===na&&(p=!0);continue}else S={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},o===null?(c=o=S,u=n):o=o.next=S,G.lanes|=h,ft|=h;S=y.action,Lt&&t(n,S),n=y.hasEagerState?y.eagerState:t(n,S)}else h={lane:S,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},o===null?(c=o=h,u=n):o=o.next=h,G.lanes|=S,ft|=S;y=y.next}while(y!==null&&y!==l);if(o===null?u=n:o.next=c,!Pe(n,e.memoizedState)&&(Se=!0,p&&(t=ua,t!==null)))throw t;e.memoizedState=n,e.baseState=u,e.baseQueue=o,a.lastRenderedState=n}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ju(e){var l=pe(),t=l.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,n=l.memoizedState;if(i!==null){t.pending=null;var u=i=i.next;do n=e(n,u.action),u=u.next;while(u!==i);Pe(n,l.memoizedState)||(Se=!0),l.memoizedState=n,l.baseQueue===null&&(l.baseState=n),t.lastRenderedState=n}return[n,a]}function Bf(e,l,t){var a=G,i=pe(),n=Z;if(n){if(t===void 0)throw Error(m(407));t=t()}else t=l();var u=!Pe((te||i).memoizedState,t);if(u&&(i.memoizedState=t,Se=!0),i=i.queue,Iu(Hf.bind(null,a,i,e),[e]),i.getSnapshot!==l||u||xe!==null&&xe.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},Gf.bind(null,a,i,t,l),null),ue===null)throw Error(m(349));n||(Gl&127)!==0||Lf(a,l,t)}return t}function Lf(e,l,t){e.flags|=16384,e={getSnapshot:l,value:t},l=G.updateQueue,l===null?(l=Pi(),G.updateQueue=l,l.stores=[e]):(t=l.stores,t===null?l.stores=[e]:t.push(e))}function Gf(e,l,t,a){l.value=t,l.getSnapshot=a,qf(l)&&Yf(e)}function Hf(e,l,t){return t(function(){qf(l)&&Yf(e)})}function qf(e){var l=e.getSnapshot;e=e.value;try{var t=l();return!Pe(e,t)}catch{return!0}}function Yf(e){var l=Dt(e,2);l!==null&&Je(l,e,2)}function Fu(e){var l=Be();if(typeof e=="function"){var t=e;if(e=t(),Lt){Wl(!0);try{t()}finally{Wl(!1)}}}return l.memoizedState=l.baseState=e,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:e},l}function jf(e,l,t,a){return e.baseState=t,Ku(e,te,typeof a=="function"?a:Hl)}function Hy(e,l,t,a,i){if(nn(e))throw Error(m(485));if(e=l.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};v.T!==null?t(!0):n.isTransition=!1,a(n),t=l.pending,t===null?(n.next=l.pending=n,Vf(l,n)):(n.next=t.next,l.pending=t.next=n)}}function Vf(e,l){var t=l.action,a=l.payload,i=e.state;if(l.isTransition){var n=v.T,u={};v.T=u;try{var c=t(i,a),o=v.S;o!==null&&o(u,c),Xf(e,l,c)}catch(y){Wu(e,l,y)}finally{n!==null&&u.types!==null&&(n.types=u.types),v.T=n}}else try{n=t(i,a),Xf(e,l,n)}catch(y){Wu(e,l,y)}}function Xf(e,l,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Qf(e,l,a)},function(a){return Wu(e,l,a)}):Qf(e,l,t)}function Qf(e,l,t){l.status="fulfilled",l.value=t,Zf(l),e.state=t,l=e.pending,l!==null&&(t=l.next,t===l?e.pending=null:(t=t.next,l.next=t,Vf(e,t)))}function Wu(e,l,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=t,Zf(l),l=l.next;while(l!==a)}e.action=null}function Zf(e){e=e.listeners;for(var l=0;l<e.length;l++)(0,e[l])()}function Kf(e,l){return l}function Jf(e,l){if(Z){var t=ue.formState;if(t!==null){e:{var a=G;if(Z){if(ce){l:{for(var i=ce,n=yl;i.nodeType!==8;){if(!n){i=null;break l}if(i=ml(i.nextSibling),i===null){i=null;break l}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){ce=ml(i.nextSibling),a=i.data==="F!";break e}}et(a)}a=!1}a&&(l=t[0])}}return t=Be(),t.memoizedState=t.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kf,lastRenderedState:l},t.queue=a,t=ds.bind(null,G,a),a.dispatch=t,a=Fu(!1),n=lc.bind(null,G,!1,a.queue),a=Be(),i={state:l,dispatch:null,action:e,pending:null},a.queue=i,t=Hy.bind(null,G,i,n,t),i.dispatch=t,a.memoizedState=e,[l,t,!1]}function Ff(e){var l=pe();return Wf(l,te,e)}function Wf(e,l,t){if(l=Ku(e,l,Kf)[0],e=ln(Hl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Ia(l)}catch(u){throw u===ca?Zi:u}else a=l;l=pe();var i=l.queue,n=i.dispatch;return t!==l.memoizedState&&(G.flags|=2048,da(9,{destroy:void 0},qy.bind(null,i,t),null)),[a,n,e]}function qy(e,l){e.action=l}function If(e){var l=pe(),t=te;if(t!==null)return Wf(l,t,e);pe(),l=l.memoizedState,t=pe();var a=t.queue.dispatch;return t.memoizedState=e,[l,a,!1]}function da(e,l,t,a){return e={tag:e,create:t,deps:a,inst:l,next:null},l=G.updateQueue,l===null&&(l=Pi(),G.updateQueue=l),t=l.lastEffect,t===null?l.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,l.lastEffect=e),e}function kf(){return pe().memoizedState}function tn(e,l,t,a){var i=Be();G.flags|=e,i.memoizedState=da(1|l,{destroy:void 0},t,a===void 0?null:a)}function an(e,l,t,a){var i=pe();a=a===void 0?null:a;var n=i.memoizedState.inst;te!==null&&a!==null&&Yu(a,te.memoizedState.deps)?i.memoizedState=da(l,n,t,a):(G.flags|=e,i.memoizedState=da(1|l,n,t,a))}function $f(e,l){tn(8390656,8,e,l)}function Iu(e,l){an(2048,8,e,l)}function Yy(e){G.flags|=4;var l=G.updateQueue;if(l===null)l=Pi(),G.updateQueue=l,l.events=[e];else{var t=l.events;t===null?l.events=[e]:t.push(e)}}function Pf(e){var l=pe().memoizedState;return Yy({ref:l,nextImpl:e}),function(){if((W&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}function es(e,l){return an(4,2,e,l)}function ls(e,l){return an(4,4,e,l)}function ts(e,l){if(typeof l=="function"){e=e();var t=l(e);return function(){typeof t=="function"?t():l(null)}}if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function as(e,l,t){t=t!=null?t.concat([e]):null,an(4,4,ts.bind(null,l,e),t)}function ku(){}function is(e,l){var t=pe();l=l===void 0?null:l;var a=t.memoizedState;return l!==null&&Yu(l,a[1])?a[0]:(t.memoizedState=[e,l],e)}function ns(e,l){var t=pe();l=l===void 0?null:l;var a=t.memoizedState;if(l!==null&&Yu(l,a[1]))return a[0];if(a=e(),Lt){Wl(!0);try{e()}finally{Wl(!1)}}return t.memoizedState=[a,l],a}function $u(e,l,t){return t===void 0||(Gl&1073741824)!==0&&(V&261930)===0?e.memoizedState=l:(e.memoizedState=t,e=ur(),G.lanes|=e,ft|=e,t)}function us(e,l,t,a){return Pe(t,l)?t:fa.current!==null?(e=$u(e,t,a),Pe(e,l)||(Se=!0),e):(Gl&42)===0||(Gl&1073741824)!==0&&(V&261930)===0?(Se=!0,e.memoizedState=t):(e=ur(),G.lanes|=e,ft|=e,l)}function cs(e,l,t,a,i){var n=E.p;E.p=n!==0&&8>n?n:8;var u=v.T,c={};v.T=c,lc(e,!1,l,t);try{var o=i(),y=v.S;if(y!==null&&y(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var p=By(o,a);ka(e,l,p,nl(e))}else ka(e,l,a,nl(e))}catch(S){ka(e,l,{then:function(){},status:"rejected",reason:S},nl())}finally{E.p=n,u!==null&&c.types!==null&&(u.types=c.types),v.T=u}}function jy(){}function Pu(e,l,t,a){if(e.tag!==5)throw Error(m(476));var i=os(e).queue;cs(e,i,l,U,t===null?jy:function(){return fs(e),t(a)})}function os(e){var l=e.memoizedState;if(l!==null)return l;l={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:U},next:null};var t={};return l.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:t},next:null},e.memoizedState=l,e=e.alternate,e!==null&&(e.memoizedState=l),l}function fs(e){var l=os(e);l.next===null&&(l=e.alternate.memoizedState),ka(e,l.next.queue,{},nl())}function ec(){return De(hi)}function ss(){return pe().memoizedState}function rs(){return pe().memoizedState}function Vy(e){for(var l=e.return;l!==null;){switch(l.tag){case 24:case 3:var t=nl();e=at(t);var a=it(l,e,t);a!==null&&(Je(a,l,t),Ka(a,l,t)),l={cache:_u()},e.payload=l;return}l=l.return}}function Xy(e,l,t){var a=nl();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},nn(e)?ys(l,t):(t=vu(e,l,t,a),t!==null&&(Je(t,e,a),hs(t,l,a)))}function ds(e,l,t){var a=nl();ka(e,l,t,a)}function ka(e,l,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(nn(e))ys(l,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=l.lastRenderedReducer,n!==null))try{var u=l.lastRenderedState,c=n(u,t);if(i.hasEagerState=!0,i.eagerState=c,Pe(c,u))return Hi(e,l,i,0),ue===null&&Gi(),!1}catch{}finally{}if(t=vu(e,l,i,a),t!==null)return Je(t,e,a),hs(t,l,a),!0}return!1}function lc(e,l,t,a){if(a={lane:2,revertLane:wc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},nn(e)){if(l)throw Error(m(479))}else l=vu(e,t,a,2),l!==null&&Je(l,e,2)}function nn(e){var l=e.alternate;return e===G||l!==null&&l===G}function ys(e,l){sa=ki=!0;var t=e.pending;t===null?l.next=l:(l.next=t.next,t.next=l),e.pending=l}function hs(e,l,t){if((t&4194048)!==0){var a=l.lanes;a&=e.pendingLanes,t|=a,l.lanes=t,vo(e,t)}}var $a={readContext:De,use:en,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};$a.useEffectEvent=de;var ms={readContext:De,use:en,useCallback:function(e,l){return Be().memoizedState=[e,l===void 0?null:l],e},useContext:De,useEffect:$f,useImperativeHandle:function(e,l,t){t=t!=null?t.concat([e]):null,tn(4194308,4,ts.bind(null,l,e),t)},useLayoutEffect:function(e,l){return tn(4194308,4,e,l)},useInsertionEffect:function(e,l){tn(4,2,e,l)},useMemo:function(e,l){var t=Be();l=l===void 0?null:l;var a=e();if(Lt){Wl(!0);try{e()}finally{Wl(!1)}}return t.memoizedState=[a,l],a},useReducer:function(e,l,t){var a=Be();if(t!==void 0){var i=t(l);if(Lt){Wl(!0);try{t(l)}finally{Wl(!1)}}}else i=l;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Xy.bind(null,G,e),[a.memoizedState,e]},useRef:function(e){var l=Be();return e={current:e},l.memoizedState=e},useState:function(e){e=Fu(e);var l=e.queue,t=ds.bind(null,G,l);return l.dispatch=t,[e.memoizedState,t]},useDebugValue:ku,useDeferredValue:function(e,l){var t=Be();return $u(t,e,l)},useTransition:function(){var e=Fu(!1);return e=cs.bind(null,G,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,l,t){var a=G,i=Be();if(Z){if(t===void 0)throw Error(m(407));t=t()}else{if(t=l(),ue===null)throw Error(m(349));(V&127)!==0||Lf(a,l,t)}i.memoizedState=t;var n={value:t,getSnapshot:l};return i.queue=n,$f(Hf.bind(null,a,n,e),[e]),a.flags|=2048,da(9,{destroy:void 0},Gf.bind(null,a,n,t,l),null),t},useId:function(){var e=Be(),l=ue.identifierPrefix;if(Z){var t=Cl,a=Al;t=(a&~(1<<32-$e(a)-1)).toString(32)+t,l="_"+l+"R_"+t,t=$i++,0<t&&(l+="H"+t.toString(32)),l+="_"}else t=Ly++,l="_"+l+"r_"+t.toString(32)+"_";return e.memoizedState=l},useHostTransitionStatus:ec,useFormState:Jf,useActionState:Jf,useOptimistic:function(e){var l=Be();l.memoizedState=l.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=t,l=lc.bind(null,G,!0,t),t.dispatch=l,[e,l]},useMemoCache:Zu,useCacheRefresh:function(){return Be().memoizedState=Vy.bind(null,G)},useEffectEvent:function(e){var l=Be(),t={impl:e};return l.memoizedState=t,function(){if((W&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}},tc={readContext:De,use:en,useCallback:is,useContext:De,useEffect:Iu,useImperativeHandle:as,useInsertionEffect:es,useLayoutEffect:ls,useMemo:ns,useReducer:ln,useRef:kf,useState:function(){return ln(Hl)},useDebugValue:ku,useDeferredValue:function(e,l){var t=pe();return us(t,te.memoizedState,e,l)},useTransition:function(){var e=ln(Hl)[0],l=pe().memoizedState;return[typeof e=="boolean"?e:Ia(e),l]},useSyncExternalStore:Bf,useId:ss,useHostTransitionStatus:ec,useFormState:Ff,useActionState:Ff,useOptimistic:function(e,l){var t=pe();return jf(t,te,e,l)},useMemoCache:Zu,useCacheRefresh:rs};tc.useEffectEvent=Pf;var gs={readContext:De,use:en,useCallback:is,useContext:De,useEffect:Iu,useImperativeHandle:as,useInsertionEffect:es,useLayoutEffect:ls,useMemo:ns,useReducer:Ju,useRef:kf,useState:function(){return Ju(Hl)},useDebugValue:ku,useDeferredValue:function(e,l){var t=pe();return te===null?$u(t,e,l):us(t,te.memoizedState,e,l)},useTransition:function(){var e=Ju(Hl)[0],l=pe().memoizedState;return[typeof e=="boolean"?e:Ia(e),l]},useSyncExternalStore:Bf,useId:ss,useHostTransitionStatus:ec,useFormState:If,useActionState:If,useOptimistic:function(e,l){var t=pe();return te!==null?jf(t,te,e,l):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:rs};gs.useEffectEvent=Pf;function ac(e,l,t,a){l=e.memoizedState,t=t(a,l),t=t==null?l:w({},l,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ic={enqueueSetState:function(e,l,t){e=e._reactInternals;var a=nl(),i=at(a);i.payload=l,t!=null&&(i.callback=t),l=it(e,i,a),l!==null&&(Je(l,e,a),Ka(l,e,a))},enqueueReplaceState:function(e,l,t){e=e._reactInternals;var a=nl(),i=at(a);i.tag=1,i.payload=l,t!=null&&(i.callback=t),l=it(e,i,a),l!==null&&(Je(l,e,a),Ka(l,e,a))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var t=nl(),a=at(t);a.tag=2,l!=null&&(a.callback=l),l=it(e,a,t),l!==null&&(Je(l,e,t),Ka(l,e,t))}};function ps(e,l,t,a,i,n,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,n,u):l.prototype&&l.prototype.isPureReactComponent?!Ha(t,a)||!Ha(i,n):!0}function vs(e,l,t,a){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(t,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(t,a),l.state!==e&&ic.enqueueReplaceState(l,l.state,null)}function Gt(e,l){var t=l;if("ref"in l){t={};for(var a in l)a!=="ref"&&(t[a]=l[a])}if(e=e.defaultProps){t===l&&(t=w({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function xs(e){Li(e)}function Ss(e){console.error(e)}function bs(e){Li(e)}function un(e,l){try{var t=e.onUncaughtError;t(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function Ts(e,l,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function nc(e,l,t){return t=at(t),t.tag=3,t.payload={element:null},t.callback=function(){un(e,l)},t}function Es(e){return e=at(e),e.tag=3,e}function As(e,l,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=a.value;e.payload=function(){return i(n)},e.callback=function(){Ts(l,t,a)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ts(l,t,a),typeof i!="function"&&(st===null?st=new Set([this]):st.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Qy(e,l,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=t.alternate,l!==null&&ia(l,t,i,!0),t=ll.current,t!==null){switch(t.tag){case 31:case 13:return hl===null?vn():t.alternate===null&&ye===0&&(ye=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===Ki?t.flags|=16384:(l=t.updateQueue,l===null?t.updateQueue=new Set([a]):l.add(a),Mc(e,a,i)),!1;case 22:return t.flags|=65536,a===Ki?t.flags|=16384:(l=t.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=l):(t=l.retryQueue,t===null?l.retryQueue=new Set([a]):t.add(a)),Mc(e,a,i)),!1}throw Error(m(435,t.tag))}return Mc(e,a,i),vn(),!1}if(Z)return l=ll.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=i,a!==Au&&(e=Error(m(422),{cause:a}),ja(sl(e,t)))):(a!==Au&&(l=Error(m(423),{cause:a}),ja(sl(l,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=sl(a,t),i=nc(e.stateNode,a,i),Bu(e,i),ye!==4&&(ye=2)),!1;var n=Error(m(520),{cause:a});if(n=sl(n,t),ui===null?ui=[n]:ui.push(n),ye!==4&&(ye=2),l===null)return!0;a=sl(a,t),t=l;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=nc(t.stateNode,a,e),Bu(t,e),!1;case 1:if(l=t.type,n=t.stateNode,(t.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(st===null||!st.has(n))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Es(i),As(i,e,t,a),Bu(t,i),!1}t=t.return}while(t!==null);return!1}var uc=Error(m(461)),Se=!1;function ze(e,l,t,a){l.child=e===null?zf(l,null,t,a):Bt(l,e.child,t,a)}function Cs(e,l,t,a,i){t=t.render;var n=l.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Rt(l),a=ju(e,l,t,u,n,i),c=Vu(),e!==null&&!Se?(Xu(e,l,i),ql(e,l,i)):(Z&&c&&Tu(l),l.flags|=1,ze(e,l,a,i),l.child)}function Os(e,l,t,a,i){if(e===null){var n=t.type;return typeof n=="function"&&!xu(n)&&n.defaultProps===void 0&&t.compare===null?(l.tag=15,l.type=n,Ds(e,l,n,a,i)):(e=Yi(t.type,null,a,l,l.mode,i),e.ref=l.ref,e.return=l,l.child=e)}if(n=e.child,!hc(e,i)){var u=n.memoizedProps;if(t=t.compare,t=t!==null?t:Ha,t(u,a)&&e.ref===l.ref)return ql(e,l,i)}return l.flags|=1,e=wl(n,a),e.ref=l.ref,e.return=l,l.child=e}function Ds(e,l,t,a,i){if(e!==null){var n=e.memoizedProps;if(Ha(n,a)&&e.ref===l.ref)if(Se=!1,l.pendingProps=a=n,hc(e,i))(e.flags&131072)!==0&&(Se=!0);else return l.lanes=e.lanes,ql(e,l,i)}return cc(e,l,t,a,i)}function zs(e,l,t,a){var i=a.children,n=e!==null?e.memoizedState:null;if(e===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(n=n!==null?n.baseLanes|t:t,e!==null){for(a=l.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~n}else a=0,l.child=null;return _s(e,l,n,t,a)}if((t&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qi(l,n!==null?n.cachePool:null),n!==null?Rf(l,n):Gu(),Nf(l);else return a=l.lanes=536870912,_s(e,l,n!==null?n.baseLanes|t:t,t,a)}else n!==null?(Qi(l,n.cachePool),Rf(l,n),ut(),l.memoizedState=null):(e!==null&&Qi(l,null),Gu(),ut());return ze(e,l,i,t),l.child}function Pa(e,l){return e!==null&&e.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function _s(e,l,t,a,i){var n=Ru();return n=n===null?null:{parent:ve._currentValue,pool:n},l.memoizedState={baseLanes:t,cachePool:n},e!==null&&Qi(l,null),Gu(),Nf(l),e!==null&&ia(e,l,a,!0),l.childLanes=i,null}function cn(e,l){return l=fn({mode:l.mode,children:l.children},e.mode),l.ref=e.ref,e.child=l,l.return=e,l}function Ms(e,l,t){return Bt(l,e.child,null,t),e=cn(l,l.pendingProps),e.flags|=2,tl(l),l.memoizedState=null,e}function Zy(e,l,t){var a=l.pendingProps,i=(l.flags&128)!==0;if(l.flags&=-129,e===null){if(Z){if(a.mode==="hidden")return e=cn(l,a),l.lanes=536870912,Pa(null,e);if(qu(l),(e=ce)?(e=Vr(e,yl),e=e!==null&&e.data==="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:$l!==null?{id:Al,overflow:Cl}:null,retryLane:536870912,hydrationErrors:null},t=yf(e),t.return=l,l.child=t,Oe=l,ce=null)):e=null,e===null)throw et(l);return l.lanes=536870912,null}return cn(l,a)}var n=e.memoizedState;if(n!==null){var u=n.dehydrated;if(qu(l),i)if(l.flags&256)l.flags&=-257,l=Ms(e,l,t);else if(l.memoizedState!==null)l.child=e.child,l.flags|=128,l=null;else throw Error(m(558));else if(Se||ia(e,l,t,!1),i=(t&e.childLanes)!==0,Se||i){if(a=ue,a!==null&&(u=xo(a,t),u!==0&&u!==n.retryLane))throw n.retryLane=u,Dt(e,u),Je(a,e,u),uc;vn(),l=Ms(e,l,t)}else e=n.treeContext,ce=ml(u.nextSibling),Oe=l,Z=!0,Pl=null,yl=!1,e!==null&&gf(l,e),l=cn(l,a),l.flags|=4096;return l}return e=wl(e.child,{mode:a.mode,children:a.children}),e.ref=l.ref,l.child=e,e.return=l,e}function on(e,l){var t=l.ref;if(t===null)e!==null&&e.ref!==null&&(l.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(m(284));(e===null||e.ref!==t)&&(l.flags|=4194816)}}function cc(e,l,t,a,i){return Rt(l),t=ju(e,l,t,a,void 0,i),a=Vu(),e!==null&&!Se?(Xu(e,l,i),ql(e,l,i)):(Z&&a&&Tu(l),l.flags|=1,ze(e,l,t,i),l.child)}function Rs(e,l,t,a,i,n){return Rt(l),l.updateQueue=null,t=Uf(l,a,t,i),wf(e),a=Vu(),e!==null&&!Se?(Xu(e,l,n),ql(e,l,n)):(Z&&a&&Tu(l),l.flags|=1,ze(e,l,t,n),l.child)}function Ns(e,l,t,a,i){if(Rt(l),l.stateNode===null){var n=ea,u=t.contextType;typeof u=="object"&&u!==null&&(n=De(u)),n=new t(a,n),l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ic,l.stateNode=n,n._reactInternals=l,n=l.stateNode,n.props=a,n.state=l.memoizedState,n.refs={},wu(l),u=t.contextType,n.context=typeof u=="object"&&u!==null?De(u):ea,n.state=l.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ac(l,t,u,a),n.state=l.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&ic.enqueueReplaceState(n,n.state,null),Fa(l,a,n,i),Ja(),n.state=l.memoizedState),typeof n.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(e===null){n=l.stateNode;var c=l.memoizedProps,o=Gt(t,c);n.props=o;var y=n.context,p=t.contextType;u=ea,typeof p=="object"&&p!==null&&(u=De(p));var S=t.getDerivedStateFromProps;p=typeof S=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,p||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||y!==u)&&vs(l,n,a,u),tt=!1;var h=l.memoizedState;n.state=h,Fa(l,a,n,i),Ja(),y=l.memoizedState,c||h!==y||tt?(typeof S=="function"&&(ac(l,t,S,a),y=l.memoizedState),(o=tt||ps(l,t,o,a,h,y,u))?(p||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(l.flags|=4194308)):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=y),n.props=a,n.state=y,n.context=u,a=o):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{n=l.stateNode,Uu(e,l),u=l.memoizedProps,p=Gt(t,u),n.props=p,S=l.pendingProps,h=n.context,y=t.contextType,o=ea,typeof y=="object"&&y!==null&&(o=De(y)),c=t.getDerivedStateFromProps,(y=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==S||h!==o)&&vs(l,n,a,o),tt=!1,h=l.memoizedState,n.state=h,Fa(l,a,n,i),Ja();var g=l.memoizedState;u!==S||h!==g||tt||e!==null&&e.dependencies!==null&&Vi(e.dependencies)?(typeof c=="function"&&(ac(l,t,c,a),g=l.memoizedState),(p=tt||ps(l,t,p,a,h,g,o)||e!==null&&e.dependencies!==null&&Vi(e.dependencies))?(y||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,g,o),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,g,o)),typeof n.componentDidUpdate=="function"&&(l.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=g),n.props=a,n.state=g,n.context=o,a=p):(typeof n.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(l.flags|=1024),a=!1)}return n=a,on(e,l),a=(l.flags&128)!==0,n||a?(n=l.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:n.render(),l.flags|=1,e!==null&&a?(l.child=Bt(l,e.child,null,i),l.child=Bt(l,null,t,i)):ze(e,l,t,i),l.memoizedState=n.state,e=l.child):e=ql(e,l,i),e}function ws(e,l,t,a){return _t(),l.flags|=256,ze(e,l,t,a),l.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fc(e){return{baseLanes:e,cachePool:Tf()}}function sc(e,l,t){return e=e!==null?e.childLanes&~t:0,l&&(e|=il),e}function Us(e,l,t){var a=l.pendingProps,i=!1,n=(l.flags&128)!==0,u;if((u=n)||(u=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),u&&(i=!0,l.flags&=-129),u=(l.flags&32)!==0,l.flags&=-33,e===null){if(Z){if(i?nt(l):ut(),(e=ce)?(e=Vr(e,yl),e=e!==null&&e.data!=="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:$l!==null?{id:Al,overflow:Cl}:null,retryLane:536870912,hydrationErrors:null},t=yf(e),t.return=l,l.child=t,Oe=l,ce=null)):e=null,e===null)throw et(l);return Kc(e)?l.lanes=32:l.lanes=536870912,null}var c=a.children;return a=a.fallback,i?(ut(),i=l.mode,c=fn({mode:"hidden",children:c},i),a=zt(a,i,t,null),c.return=l,a.return=l,c.sibling=a,l.child=c,a=l.child,a.memoizedState=fc(t),a.childLanes=sc(e,u,t),l.memoizedState=oc,Pa(null,a)):(nt(l),rc(l,c))}var o=e.memoizedState;if(o!==null&&(c=o.dehydrated,c!==null)){if(n)l.flags&256?(nt(l),l.flags&=-257,l=dc(e,l,t)):l.memoizedState!==null?(ut(),l.child=e.child,l.flags|=128,l=null):(ut(),c=a.fallback,i=l.mode,a=fn({mode:"visible",children:a.children},i),c=zt(c,i,t,null),c.flags|=2,a.return=l,c.return=l,a.sibling=c,l.child=a,Bt(l,e.child,null,t),a=l.child,a.memoizedState=fc(t),a.childLanes=sc(e,u,t),l.memoizedState=oc,l=Pa(null,a));else if(nt(l),Kc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(m(419)),a.stack="",a.digest=u,ja({value:a,source:null,stack:null}),l=dc(e,l,t)}else if(Se||ia(e,l,t,!1),u=(t&e.childLanes)!==0,Se||u){if(u=ue,u!==null&&(a=xo(u,t),a!==0&&a!==o.retryLane))throw o.retryLane=a,Dt(e,a),Je(u,e,a),uc;Zc(c)||vn(),l=dc(e,l,t)}else Zc(c)?(l.flags|=192,l.child=e.child,l=null):(e=o.treeContext,ce=ml(c.nextSibling),Oe=l,Z=!0,Pl=null,yl=!1,e!==null&&gf(l,e),l=rc(l,a.children),l.flags|=4096);return l}return i?(ut(),c=a.fallback,i=l.mode,o=e.child,y=o.sibling,a=wl(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,y!==null?c=wl(y,c):(c=zt(c,i,t,null),c.flags|=2),c.return=l,a.return=l,a.sibling=c,l.child=a,Pa(null,a),a=l.child,c=e.child.memoizedState,c===null?c=fc(t):(i=c.cachePool,i!==null?(o=ve._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=Tf(),c={baseLanes:c.baseLanes|t,cachePool:i}),a.memoizedState=c,a.childLanes=sc(e,u,t),l.memoizedState=oc,Pa(e.child,a)):(nt(l),t=e.child,e=t.sibling,t=wl(t,{mode:"visible",children:a.children}),t.return=l,t.sibling=null,e!==null&&(u=l.deletions,u===null?(l.deletions=[e],l.flags|=16):u.push(e)),l.child=t,l.memoizedState=null,t)}function rc(e,l){return l=fn({mode:"visible",children:l},e.mode),l.return=e,e.child=l}function fn(e,l){return e=el(22,e,null,l),e.lanes=0,e}function dc(e,l,t){return Bt(l,e.child,null,t),e=rc(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function Bs(e,l,t){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l),Du(e.return,l,t)}function yc(e,l,t,a,i,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:n}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=t,u.tailMode=i,u.treeForkCount=n)}function Ls(e,l,t){var a=l.pendingProps,i=a.revealOrder,n=a.tail;a=a.children;var u=ge.current,c=(u&2)!==0;if(c?(u=u&1|2,l.flags|=128):u&=1,A(ge,u),ze(e,l,a,t),a=Z?Ya:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bs(e,t,l);else if(e.tag===19)Bs(e,t,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=l.child,i=null;t!==null;)e=t.alternate,e!==null&&Ii(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=l.child,l.child=null):(i=t.sibling,t.sibling=null),yc(l,!1,i,t,n,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=l.child,l.child=null;i!==null;){if(e=i.alternate,e!==null&&Ii(e)===null){l.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}yc(l,!0,t,null,n,a);break;case"together":yc(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function ql(e,l,t){if(e!==null&&(l.dependencies=e.dependencies),ft|=l.lanes,(t&l.childLanes)===0)if(e!==null){if(ia(e,l,t,!1),(t&l.childLanes)===0)return null}else return null;if(e!==null&&l.child!==e.child)throw Error(m(153));if(l.child!==null){for(e=l.child,t=wl(e,e.pendingProps),l.child=t,t.return=l;e.sibling!==null;)e=e.sibling,t=t.sibling=wl(e,e.pendingProps),t.return=l;t.sibling=null}return l.child}function hc(e,l){return(e.lanes&l)!==0?!0:(e=e.dependencies,!!(e!==null&&Vi(e)))}function Ky(e,l,t){switch(l.tag){case 3:Ue(l,l.stateNode.containerInfo),lt(l,ve,e.memoizedState.cache),_t();break;case 27:case 5:Ca(l);break;case 4:Ue(l,l.stateNode.containerInfo);break;case 10:lt(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,qu(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(nt(l),l.flags|=128,null):(t&l.child.childLanes)!==0?Us(e,l,t):(nt(l),e=ql(e,l,t),e!==null?e.sibling:null);nt(l);break;case 19:var i=(e.flags&128)!==0;if(a=(t&l.childLanes)!==0,a||(ia(e,l,t,!1),a=(t&l.childLanes)!==0),i){if(a)return Ls(e,l,t);l.flags|=128}if(i=l.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(ge,ge.current),a)break;return null;case 22:return l.lanes=0,zs(e,l,t,l.pendingProps);case 24:lt(l,ve,e.memoizedState.cache)}return ql(e,l,t)}function Gs(e,l,t){if(e!==null)if(e.memoizedProps!==l.pendingProps)Se=!0;else{if(!hc(e,t)&&(l.flags&128)===0)return Se=!1,Ky(e,l,t);Se=(e.flags&131072)!==0}else Se=!1,Z&&(l.flags&1048576)!==0&&mf(l,Ya,l.index);switch(l.lanes=0,l.tag){case 16:e:{var a=l.pendingProps;if(e=wt(l.elementType),l.type=e,typeof e=="function")xu(e)?(a=Gt(e,a),l.tag=1,l=Ns(null,l,e,a,t)):(l.tag=0,l=cc(null,l,e,a,t));else{if(e!=null){var i=e.$$typeof;if(i===ul){l.tag=11,l=Cs(null,l,e,a,t);break e}else if(i===Q){l.tag=14,l=Os(null,l,e,a,t);break e}}throw l=_l(e)||e,Error(m(306,l,""))}}return l;case 0:return cc(e,l,l.type,l.pendingProps,t);case 1:return a=l.type,i=Gt(a,l.pendingProps),Ns(e,l,a,i,t);case 3:e:{if(Ue(l,l.stateNode.containerInfo),e===null)throw Error(m(387));a=l.pendingProps;var n=l.memoizedState;i=n.element,Uu(e,l),Fa(l,a,null,t);var u=l.memoizedState;if(a=u.cache,lt(l,ve,a),a!==n.cache&&zu(l,[ve],t,!0),Ja(),a=u.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:u.cache},l.updateQueue.baseState=n,l.memoizedState=n,l.flags&256){l=ws(e,l,a,t);break e}else if(a!==i){i=sl(Error(m(424)),l),ja(i),l=ws(e,l,a,t);break e}else{switch(e=l.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=ml(e.firstChild),Oe=l,Z=!0,Pl=null,yl=!0,t=zf(l,null,a,t),l.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(_t(),a===i){l=ql(e,l,t);break e}ze(e,l,a,t)}l=l.child}return l;case 26:return on(e,l),e===null?(t=Fr(l.type,null,l.pendingProps,null))?l.memoizedState=t:Z||(t=l.type,e=l.pendingProps,a=Cn(q.current).createElement(t),a[Ce]=l,a[je]=e,_e(a,t,e),Ee(a),l.stateNode=a):l.memoizedState=Fr(l.type,e.memoizedProps,l.pendingProps,e.memoizedState),null;case 27:return Ca(l),e===null&&Z&&(a=l.stateNode=Zr(l.type,l.pendingProps,q.current),Oe=l,yl=!0,i=ce,ht(l.type)?(Jc=i,ce=ml(a.firstChild)):ce=i),ze(e,l,l.pendingProps.children,t),on(e,l),e===null&&(l.flags|=4194304),l.child;case 5:return e===null&&Z&&((i=a=ce)&&(a=T0(a,l.type,l.pendingProps,yl),a!==null?(l.stateNode=a,Oe=l,ce=ml(a.firstChild),yl=!1,i=!0):i=!1),i||et(l)),Ca(l),i=l.type,n=l.pendingProps,u=e!==null?e.memoizedProps:null,a=n.children,Vc(i,n)?a=null:u!==null&&Vc(i,u)&&(l.flags|=32),l.memoizedState!==null&&(i=ju(e,l,Gy,null,null,t),hi._currentValue=i),on(e,l),ze(e,l,a,t),l.child;case 6:return e===null&&Z&&((e=t=ce)&&(t=E0(t,l.pendingProps,yl),t!==null?(l.stateNode=t,Oe=l,ce=null,e=!0):e=!1),e||et(l)),null;case 13:return Us(e,l,t);case 4:return Ue(l,l.stateNode.containerInfo),a=l.pendingProps,e===null?l.child=Bt(l,null,a,t):ze(e,l,a,t),l.child;case 11:return Cs(e,l,l.type,l.pendingProps,t);case 7:return ze(e,l,l.pendingProps,t),l.child;case 8:return ze(e,l,l.pendingProps.children,t),l.child;case 12:return ze(e,l,l.pendingProps.children,t),l.child;case 10:return a=l.pendingProps,lt(l,l.type,a.value),ze(e,l,a.children,t),l.child;case 9:return i=l.type._context,a=l.pendingProps.children,Rt(l),i=De(i),a=a(i),l.flags|=1,ze(e,l,a,t),l.child;case 14:return Os(e,l,l.type,l.pendingProps,t);case 15:return Ds(e,l,l.type,l.pendingProps,t);case 19:return Ls(e,l,t);case 31:return Zy(e,l,t);case 22:return zs(e,l,t,l.pendingProps);case 24:return Rt(l),a=De(ve),e===null?(i=Ru(),i===null&&(i=ue,n=_u(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=t),i=n),l.memoizedState={parent:a,cache:i},wu(l),lt(l,ve,i)):((e.lanes&t)!==0&&(Uu(e,l),Fa(l,null,null,t),Ja()),i=e.memoizedState,n=l.memoizedState,i.parent!==a?(i={parent:a,cache:a},l.memoizedState=i,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=i),lt(l,ve,a)):(a=n.cache,lt(l,ve,a),a!==i.cache&&zu(l,[ve],t,!0))),ze(e,l,l.pendingProps.children,t),l.child;case 29:throw l.pendingProps}throw Error(m(156,l.tag))}function Yl(e){e.flags|=4}function mc(e,l,t,a,i){if((l=(e.mode&32)!==0)&&(l=!1),l){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(sr())e.flags|=8192;else throw Ut=Ki,Nu}else e.flags&=-16777217}function Hs(e,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pr(l))if(sr())e.flags|=8192;else throw Ut=Ki,Nu}function sn(e,l){l!==null&&(e.flags|=4),e.flags&16384&&(l=e.tag!==22?go():536870912,e.lanes|=l,ga|=l)}function ei(e,l){if(!Z)switch(e.tailMode){case"hidden":l=e.tail;for(var t=null;l!==null;)l.alternate!==null&&(t=l),l=l.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function oe(e){var l=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(l)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,l}function Jy(e,l,t){var a=l.pendingProps;switch(Eu(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(l),null;case 1:return oe(l),null;case 3:return t=l.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Ll(ve),me(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(aa(l)?Yl(l):e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Cu())),oe(l),null;case 26:var i=l.type,n=l.memoizedState;return e===null?(Yl(l),n!==null?(oe(l),Hs(l,n)):(oe(l),mc(l,i,null,a,t))):n?n!==e.memoizedState?(Yl(l),oe(l),Hs(l,n)):(oe(l),l.flags&=-16777217):(e=e.memoizedProps,e!==a&&Yl(l),oe(l),mc(l,i,e,a,t)),null;case 27:if(Si(l),t=q.current,i=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==a&&Yl(l);else{if(!a){if(l.stateNode===null)throw Error(m(166));return oe(l),null}e=D.current,aa(l)?pf(l):(e=Zr(i,a,t),l.stateNode=e,Yl(l))}return oe(l),null;case 5:if(Si(l),i=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==a&&Yl(l);else{if(!a){if(l.stateNode===null)throw Error(m(166));return oe(l),null}if(n=D.current,aa(l))pf(l);else{var u=Cn(q.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?u.createElement(i,{is:a.is}):u.createElement(i)}}n[Ce]=l,n[je]=a;e:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break e;for(;u.sibling===null;){if(u.return===null||u.return===l)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=n;e:switch(_e(n,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Yl(l)}}return oe(l),mc(l,l.type,e===null?null:e.memoizedProps,l.pendingProps,t),null;case 6:if(e&&l.stateNode!=null)e.memoizedProps!==a&&Yl(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(m(166));if(e=q.current,aa(l)){if(e=l.stateNode,t=l.memoizedProps,a=null,i=Oe,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ce]=l,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Ur(e.nodeValue,t)),e||et(l,!0)}else e=Cn(e).createTextNode(a),e[Ce]=l,l.stateNode=e}return oe(l),null;case 31:if(t=l.memoizedState,e===null||e.memoizedState!==null){if(a=aa(l),t!==null){if(e===null){if(!a)throw Error(m(318));if(e=l.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[Ce]=l}else _t(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;oe(l),e=!1}else t=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return l.flags&256?(tl(l),l):(tl(l),null);if((l.flags&128)!==0)throw Error(m(558))}return oe(l),null;case 13:if(a=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=aa(l),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=l.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[Ce]=l}else _t(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;oe(l),i=!1}else i=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return l.flags&256?(tl(l),l):(tl(l),null)}return tl(l),(l.flags&128)!==0?(l.lanes=t,l):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=l.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==i&&(a.flags|=2048)),t!==e&&t&&(l.child.flags|=8192),sn(l,l.updateQueue),oe(l),null);case 4:return me(),e===null&&Gc(l.stateNode.containerInfo),oe(l),null;case 10:return Ll(l.type),oe(l),null;case 19:if(b(ge),a=l.memoizedState,a===null)return oe(l),null;if(i=(l.flags&128)!==0,n=a.rendering,n===null)if(i)ei(a,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(n=Ii(e),n!==null){for(l.flags|=128,ei(a,!1),e=n.updateQueue,l.updateQueue=e,sn(l,e),l.subtreeFlags=0,e=t,t=l.child;t!==null;)df(t,e),t=t.sibling;return A(ge,ge.current&1|2),Z&&Ul(l,a.treeForkCount),l.child}e=e.sibling}a.tail!==null&&Ie()>mn&&(l.flags|=128,i=!0,ei(a,!1),l.lanes=4194304)}else{if(!i)if(e=Ii(n),e!==null){if(l.flags|=128,i=!0,e=e.updateQueue,l.updateQueue=e,sn(l,e),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!Z)return oe(l),null}else 2*Ie()-a.renderingStartTime>mn&&t!==536870912&&(l.flags|=128,i=!0,ei(a,!1),l.lanes=4194304);a.isBackwards?(n.sibling=l.child,l.child=n):(e=a.last,e!==null?e.sibling=n:l.child=n,a.last=n)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ie(),e.sibling=null,t=ge.current,A(ge,i?t&1|2:t&1),Z&&Ul(l,a.treeForkCount),e):(oe(l),null);case 22:case 23:return tl(l),Hu(),a=l.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(t&536870912)!==0&&(l.flags&128)===0&&(oe(l),l.subtreeFlags&6&&(l.flags|=8192)):oe(l),t=l.updateQueue,t!==null&&sn(l,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==t&&(l.flags|=2048),e!==null&&b(Nt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),l.memoizedState.cache!==t&&(l.flags|=2048),Ll(ve),oe(l),null;case 25:return null;case 30:return null}throw Error(m(156,l.tag))}function Fy(e,l){switch(Eu(l),l.tag){case 1:return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return Ll(ve),me(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 26:case 27:case 5:return Si(l),null;case 31:if(l.memoizedState!==null){if(tl(l),l.alternate===null)throw Error(m(340));_t()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 13:if(tl(l),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(m(340));_t()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return b(ge),null;case 4:return me(),null;case 10:return Ll(l.type),null;case 22:case 23:return tl(l),Hu(),e!==null&&b(Nt),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 24:return Ll(ve),null;case 25:return null;default:return null}}function qs(e,l){switch(Eu(l),l.tag){case 3:Ll(ve),me();break;case 26:case 27:case 5:Si(l);break;case 4:me();break;case 31:l.memoizedState!==null&&tl(l);break;case 13:tl(l);break;case 19:b(ge);break;case 10:Ll(l.type);break;case 22:case 23:tl(l),Hu(),e!==null&&b(Nt);break;case 24:Ll(ve)}}function li(e,l){try{var t=l.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var n=t.create,u=t.inst;a=n(),u.destroy=a}t=t.next}while(t!==i)}}catch(c){ee(l,l.return,c)}}function ct(e,l,t){try{var a=l.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,i=l;var o=t,y=c;try{y()}catch(p){ee(i,o,p)}}}a=a.next}while(a!==n)}}catch(p){ee(l,l.return,p)}}function Ys(e){var l=e.updateQueue;if(l!==null){var t=e.stateNode;try{Mf(l,t)}catch(a){ee(e,e.return,a)}}}function js(e,l,t){t.props=Gt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ee(e,l,a)}}function ti(e,l){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(i){ee(e,l,i)}}function Ol(e,l){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){ee(e,l,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){ee(e,l,i)}else t.current=null}function Vs(e){var l=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(l){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){ee(e,e.return,i)}}function gc(e,l,t){try{var a=e.stateNode;g0(a,e.type,t,l),a[je]=l}catch(i){ee(e,e.return,i)}}function Xs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ht(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ht(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,l,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,l?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,l):(l=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.appendChild(e),t=t._reactRootContainer,t!=null||l.onclick!==null||(l.onclick=Rl));else if(a!==4&&(a===27&&ht(e.type)&&(t=e.stateNode,l=null),e=e.child,e!==null))for(vc(e,l,t),e=e.sibling;e!==null;)vc(e,l,t),e=e.sibling}function rn(e,l,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,l?t.insertBefore(e,l):t.appendChild(e);else if(a!==4&&(a===27&&ht(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(rn(e,l,t),e=e.sibling;e!==null;)rn(e,l,t),e=e.sibling}function Qs(e){var l=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=l.attributes;i.length;)l.removeAttributeNode(i[0]);_e(l,a,t),l[Ce]=e,l[je]=t}catch(n){ee(e,e.return,n)}}var jl=!1,be=!1,xc=!1,Zs=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Wy(e,l){if(e=e.containerInfo,Yc=Nn,e=tf(e),du(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{t.nodeType,n.nodeType}catch{t=null;break e}var u=0,c=-1,o=-1,y=0,p=0,S=e,h=null;l:for(;;){for(var g;S!==t||i!==0&&S.nodeType!==3||(c=u+i),S!==n||a!==0&&S.nodeType!==3||(o=u+a),S.nodeType===3&&(u+=S.nodeValue.length),(g=S.firstChild)!==null;)h=S,S=g;for(;;){if(S===e)break l;if(h===t&&++y===i&&(c=u),h===n&&++p===a&&(o=u),(g=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=g}t=c===-1||o===-1?null:{start:c,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(jc={focusedElem:e,selectionRange:t},Nn=!1,Ae=l;Ae!==null;)if(l=Ae,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,Ae=e;else for(;Ae!==null;){switch(l=Ae,n=l.alternate,e=l.flags,l.tag){case 0:if((e&4)!==0&&(e=l.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,t=l,i=n.memoizedProps,n=n.memoizedState,a=t.stateNode;try{var C=Gt(t.type,i);e=a.getSnapshotBeforeUpdate(C,n),a.__reactInternalSnapshotBeforeUpdate=e}catch(R){ee(t,t.return,R)}}break;case 3:if((e&1024)!==0){if(e=l.stateNode.containerInfo,t=e.nodeType,t===9)Qc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=l.sibling,e!==null){e.return=l.return,Ae=e;break}Ae=l.return}}function Ks(e,l,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Xl(e,t),a&4&&li(5,t);break;case 1:if(Xl(e,t),a&4)if(e=t.stateNode,l===null)try{e.componentDidMount()}catch(u){ee(t,t.return,u)}else{var i=Gt(t.type,l.memoizedProps);l=l.memoizedState;try{e.componentDidUpdate(i,l,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(t,t.return,u)}}a&64&&Ys(t),a&512&&ti(t,t.return);break;case 3:if(Xl(e,t),a&64&&(e=t.updateQueue,e!==null)){if(l=null,t.child!==null)switch(t.child.tag){case 27:case 5:l=t.child.stateNode;break;case 1:l=t.child.stateNode}try{Mf(e,l)}catch(u){ee(t,t.return,u)}}break;case 27:l===null&&a&4&&Qs(t);case 26:case 5:Xl(e,t),l===null&&a&4&&Vs(t),a&512&&ti(t,t.return);break;case 12:Xl(e,t);break;case 31:Xl(e,t),a&4&&Ws(e,t);break;case 13:Xl(e,t),a&4&&Is(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=i0.bind(null,t),A0(e,t))));break;case 22:if(a=t.memoizedState!==null||jl,!a){l=l!==null&&l.memoizedState!==null||be,i=jl;var n=be;jl=a,(be=l)&&!n?Ql(e,t,(t.subtreeFlags&8772)!==0):Xl(e,t),jl=i,be=n}break;case 30:break;default:Xl(e,t)}}function Js(e){var l=e.alternate;l!==null&&(e.alternate=null,Js(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&Wn(l)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var se=null,Xe=!1;function Vl(e,l,t){for(t=t.child;t!==null;)Fs(e,l,t),t=t.sibling}function Fs(e,l,t){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Oa,t)}catch{}switch(t.tag){case 26:be||Ol(t,l),Vl(e,l,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:be||Ol(t,l);var a=se,i=Xe;ht(t.type)&&(se=t.stateNode,Xe=!1),Vl(e,l,t),ri(t.stateNode),se=a,Xe=i;break;case 5:be||Ol(t,l);case 6:if(a=se,i=Xe,se=null,Vl(e,l,t),se=a,Xe=i,se!==null)if(Xe)try{(se.nodeType===9?se.body:se.nodeName==="HTML"?se.ownerDocument.body:se).removeChild(t.stateNode)}catch(n){ee(t,l,n)}else try{se.removeChild(t.stateNode)}catch(n){ee(t,l,n)}break;case 18:se!==null&&(Xe?(e=se,Yr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Aa(e)):Yr(se,t.stateNode));break;case 4:a=se,i=Xe,se=t.stateNode.containerInfo,Xe=!0,Vl(e,l,t),se=a,Xe=i;break;case 0:case 11:case 14:case 15:ct(2,t,l),be||ct(4,t,l),Vl(e,l,t);break;case 1:be||(Ol(t,l),a=t.stateNode,typeof a.componentWillUnmount=="function"&&js(t,l,a)),Vl(e,l,t);break;case 21:Vl(e,l,t);break;case 22:be=(a=be)||t.memoizedState!==null,Vl(e,l,t),be=a;break;default:Vl(e,l,t)}}function Ws(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Aa(e)}catch(t){ee(l,l.return,t)}}}function Is(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Aa(e)}catch(t){ee(l,l.return,t)}}function Iy(e){switch(e.tag){case 31:case 13:case 19:var l=e.stateNode;return l===null&&(l=e.stateNode=new Zs),l;case 22:return e=e.stateNode,l=e._retryCache,l===null&&(l=e._retryCache=new Zs),l;default:throw Error(m(435,e.tag))}}function dn(e,l){var t=Iy(e);l.forEach(function(a){if(!t.has(a)){t.add(a);var i=n0.bind(null,e,a);a.then(i,i)}})}function Qe(e,l){var t=l.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a],n=e,u=l,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(ht(c.type)){se=c.stateNode,Xe=!1;break e}break;case 5:se=c.stateNode,Xe=!1;break e;case 3:case 4:se=c.stateNode.containerInfo,Xe=!0;break e}c=c.return}if(se===null)throw Error(m(160));Fs(n,u,i),se=null,Xe=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)ks(l,e),l=l.sibling}var xl=null;function ks(e,l){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qe(l,e),Ze(e),a&4&&(ct(3,e,e.return),li(3,e),ct(5,e,e.return));break;case 1:Qe(l,e),Ze(e),a&512&&(be||t===null||Ol(t,t.return)),a&64&&jl&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var i=xl;if(Qe(l,e),Ze(e),a&512&&(be||t===null||Ol(t,t.return)),a&4){var n=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,i=i.ownerDocument||i;l:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[_a]||n[Ce]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),_e(n,a,t),n[Ce]=e,Ee(n),a=n;break e;case"link":var u=kr("link","href",i).get(a+(t.href||""));if(u){for(var c=0;c<u.length;c++)if(n=u[c],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(c,1);break l}}n=i.createElement(a),_e(n,a,t),i.head.appendChild(n);break;case"meta":if(u=kr("meta","content",i).get(a+(t.content||""))){for(c=0;c<u.length;c++)if(n=u[c],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(c,1);break l}}n=i.createElement(a),_e(n,a,t),i.head.appendChild(n);break;default:throw Error(m(468,a))}n[Ce]=e,Ee(n),a=n}e.stateNode=a}else $r(i,e.type,e.stateNode);else e.stateNode=Ir(i,a,e.memoizedProps);else n!==a?(n===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):n.count--,a===null?$r(i,e.type,e.stateNode):Ir(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&gc(e,e.memoizedProps,t.memoizedProps)}break;case 27:Qe(l,e),Ze(e),a&512&&(be||t===null||Ol(t,t.return)),t!==null&&a&4&&gc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Qe(l,e),Ze(e),a&512&&(be||t===null||Ol(t,t.return)),e.flags&32){i=e.stateNode;try{Jt(i,"")}catch(C){ee(e,e.return,C)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,gc(e,i,t!==null?t.memoizedProps:i)),a&1024&&(xc=!0);break;case 6:if(Qe(l,e),Ze(e),a&4){if(e.stateNode===null)throw Error(m(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(C){ee(e,e.return,C)}}break;case 3:if(zn=null,i=xl,xl=On(l.containerInfo),Qe(l,e),xl=i,Ze(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Aa(l.containerInfo)}catch(C){ee(e,e.return,C)}xc&&(xc=!1,$s(e));break;case 4:a=xl,xl=On(e.stateNode.containerInfo),Qe(l,e),Ze(e),xl=a;break;case 12:Qe(l,e),Ze(e);break;case 31:Qe(l,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 13:Qe(l,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(hn=Ie()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 22:i=e.memoizedState!==null;var o=t!==null&&t.memoizedState!==null,y=jl,p=be;if(jl=y||i,be=p||o,Qe(l,e),be=p,jl=y,Ze(e),a&8192)e:for(l=e.stateNode,l._visibility=i?l._visibility&-2:l._visibility|1,i&&(t===null||o||jl||be||Ht(e)),t=null,l=e;;){if(l.tag===5||l.tag===26){if(t===null){o=t=l;try{if(n=o.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=o.stateNode;var S=o.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(C){ee(o,o.return,C)}}}else if(l.tag===6){if(t===null){o=l;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(C){ee(o,o.return,C)}}}else if(l.tag===18){if(t===null){o=l;try{var g=o.stateNode;i?jr(g,!0):jr(o.stateNode,!1)}catch(C){ee(o,o.return,C)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;t===l&&(t=null),l=l.return}t===l&&(t=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,dn(e,t))));break;case 19:Qe(l,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 30:break;case 21:break;default:Qe(l,e),Ze(e)}}function Ze(e){var l=e.flags;if(l&2){try{for(var t,a=e.return;a!==null;){if(Xs(a)){t=a;break}a=a.return}if(t==null)throw Error(m(160));switch(t.tag){case 27:var i=t.stateNode,n=pc(e);rn(e,n,i);break;case 5:var u=t.stateNode;t.flags&32&&(Jt(u,""),t.flags&=-33);var c=pc(e);rn(e,c,u);break;case 3:case 4:var o=t.stateNode.containerInfo,y=pc(e);vc(e,y,o);break;default:throw Error(m(161))}}catch(p){ee(e,e.return,p)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function $s(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var l=e;$s(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),e=e.sibling}}function Xl(e,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Ks(e,l.alternate,l),l=l.sibling}function Ht(e){for(e=e.child;e!==null;){var l=e;switch(l.tag){case 0:case 11:case 14:case 15:ct(4,l,l.return),Ht(l);break;case 1:Ol(l,l.return);var t=l.stateNode;typeof t.componentWillUnmount=="function"&&js(l,l.return,t),Ht(l);break;case 27:ri(l.stateNode);case 26:case 5:Ol(l,l.return),Ht(l);break;case 22:l.memoizedState===null&&Ht(l);break;case 30:Ht(l);break;default:Ht(l)}e=e.sibling}}function Ql(e,l,t){for(t=t&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,i=e,n=l,u=n.flags;switch(n.tag){case 0:case 11:case 15:Ql(i,n,t),li(4,n);break;case 1:if(Ql(i,n,t),a=n,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(y){ee(a,a.return,y)}if(a=n,i=a.updateQueue,i!==null){var c=a.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)_f(o[i],c)}catch(y){ee(a,a.return,y)}}t&&u&64&&Ys(n),ti(n,n.return);break;case 27:Qs(n);case 26:case 5:Ql(i,n,t),t&&a===null&&u&4&&Vs(n),ti(n,n.return);break;case 12:Ql(i,n,t);break;case 31:Ql(i,n,t),t&&u&4&&Ws(i,n);break;case 13:Ql(i,n,t),t&&u&4&&Is(i,n);break;case 22:n.memoizedState===null&&Ql(i,n,t),ti(n,n.return);break;case 30:break;default:Ql(i,n,t)}l=l.sibling}}function Sc(e,l){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Va(t))}function bc(e,l){e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&Va(e))}function Sl(e,l,t,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Ps(e,l,t,a),l=l.sibling}function Ps(e,l,t,a){var i=l.flags;switch(l.tag){case 0:case 11:case 15:Sl(e,l,t,a),i&2048&&li(9,l);break;case 1:Sl(e,l,t,a);break;case 3:Sl(e,l,t,a),i&2048&&(e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&Va(e)));break;case 12:if(i&2048){Sl(e,l,t,a),e=l.stateNode;try{var n=l.memoizedProps,u=n.id,c=n.onPostCommit;typeof c=="function"&&c(u,l.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ee(l,l.return,o)}}else Sl(e,l,t,a);break;case 31:Sl(e,l,t,a);break;case 13:Sl(e,l,t,a);break;case 23:break;case 22:n=l.stateNode,u=l.alternate,l.memoizedState!==null?n._visibility&2?Sl(e,l,t,a):ai(e,l):n._visibility&2?Sl(e,l,t,a):(n._visibility|=2,ya(e,l,t,a,(l.subtreeFlags&10256)!==0||!1)),i&2048&&Sc(u,l);break;case 24:Sl(e,l,t,a),i&2048&&bc(l.alternate,l);break;default:Sl(e,l,t,a)}}function ya(e,l,t,a,i){for(i=i&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var n=e,u=l,c=t,o=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:ya(n,u,c,o,i),li(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?ya(n,u,c,o,i):ai(n,u):(p._visibility|=2,ya(n,u,c,o,i)),i&&y&2048&&Sc(u.alternate,u);break;case 24:ya(n,u,c,o,i),i&&y&2048&&bc(u.alternate,u);break;default:ya(n,u,c,o,i)}l=l.sibling}}function ai(e,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var t=e,a=l,i=a.flags;switch(a.tag){case 22:ai(t,a),i&2048&&Sc(a.alternate,a);break;case 24:ai(t,a),i&2048&&bc(a.alternate,a);break;default:ai(t,a)}l=l.sibling}}var ii=8192;function ha(e,l,t){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)er(e,l,t),e=e.sibling}function er(e,l,t){switch(e.tag){case 26:ha(e,l,t),e.flags&ii&&e.memoizedState!==null&&L0(t,xl,e.memoizedState,e.memoizedProps);break;case 5:ha(e,l,t);break;case 3:case 4:var a=xl;xl=On(e.stateNode.containerInfo),ha(e,l,t),xl=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ii,ii=16777216,ha(e,l,t),ii=a):ha(e,l,t));break;default:ha(e,l,t)}}function lr(e){var l=e.alternate;if(l!==null&&(e=l.child,e!==null)){l.child=null;do l=e.sibling,e.sibling=null,e=l;while(e!==null)}}function ni(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var t=0;t<l.length;t++){var a=l[t];Ae=a,ar(a,e)}lr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tr(e),e=e.sibling}function tr(e){switch(e.tag){case 0:case 11:case 15:ni(e),e.flags&2048&&ct(9,e,e.return);break;case 3:ni(e);break;case 12:ni(e);break;case 22:var l=e.stateNode;e.memoizedState!==null&&l._visibility&2&&(e.return===null||e.return.tag!==13)?(l._visibility&=-3,yn(e)):ni(e);break;default:ni(e)}}function yn(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var t=0;t<l.length;t++){var a=l[t];Ae=a,ar(a,e)}lr(e)}for(e=e.child;e!==null;){switch(l=e,l.tag){case 0:case 11:case 15:ct(8,l,l.return),yn(l);break;case 22:t=l.stateNode,t._visibility&2&&(t._visibility&=-3,yn(l));break;default:yn(l)}e=e.sibling}}function ar(e,l){for(;Ae!==null;){var t=Ae;switch(t.tag){case 0:case 11:case 15:ct(8,t,l);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ae=a;else e:for(t=e;Ae!==null;){a=Ae;var i=a.sibling,n=a.return;if(Js(a),a===t){Ae=null;break e}if(i!==null){i.return=n,Ae=i;break e}Ae=n}}}var ky={getCacheForType:function(e){var l=De(ve),t=l.data.get(e);return t===void 0&&(t=e(),l.data.set(e,t)),t},cacheSignal:function(){return De(ve).controller.signal}},$y=typeof WeakMap=="function"?WeakMap:Map,W=0,ue=null,Y=null,V=0,P=0,al=null,ot=!1,ma=!1,Tc=!1,Zl=0,ye=0,ft=0,qt=0,Ec=0,il=0,ga=0,ui=null,Ke=null,Ac=!1,hn=0,ir=0,mn=1/0,gn=null,st=null,Te=0,rt=null,pa=null,Kl=0,Cc=0,Oc=null,nr=null,ci=0,Dc=null;function nl(){return(W&2)!==0&&V!==0?V&-V:v.T!==null?wc():So()}function ur(){if(il===0)if((V&536870912)===0||Z){var e=Ei;Ei<<=1,(Ei&3932160)===0&&(Ei=262144),il=e}else il=536870912;return e=ll.current,e!==null&&(e.flags|=32),il}function Je(e,l,t){(e===ue&&(P===2||P===9)||e.cancelPendingCommit!==null)&&(va(e,0),dt(e,V,il,!1)),za(e,t),((W&2)===0||e!==ue)&&(e===ue&&((W&2)===0&&(qt|=t),ye===4&&dt(e,V,il,!1)),Dl(e))}function cr(e,l,t){if((W&6)!==0)throw Error(m(327));var a=!t&&(l&127)===0&&(l&e.expiredLanes)===0||Da(e,l),i=a?l0(e,l):_c(e,l,!0),n=a;do{if(i===0){ma&&!a&&dt(e,l,0,!1);break}else{if(t=e.current.alternate,n&&!Py(t)){i=_c(e,l,!1),n=!1;continue}if(i===2){if(n=l,e.errorRecoveryDisabledLanes&n)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){l=u;e:{var c=e;i=ui;var o=c.current.memoizedState.isDehydrated;if(o&&(va(c,u).flags|=256),u=_c(c,u,!1),u!==2){if(Tc&&!o){c.errorRecoveryDisabledLanes|=n,qt|=n,i=4;break e}n=Ke,Ke=i,n!==null&&(Ke===null?Ke=n:Ke.push.apply(Ke,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){va(e,0),dt(e,l,0,!0);break}e:{switch(a=e,n=i,n){case 0:case 1:throw Error(m(345));case 4:if((l&4194048)!==l)break;case 6:dt(a,l,il,!ot);break e;case 2:Ke=null;break;case 3:case 5:break;default:throw Error(m(329))}if((l&62914560)===l&&(i=hn+300-Ie(),10<i)){if(dt(a,l,il,!ot),Ci(a,0,!0)!==0)break e;Kl=l,a.timeoutHandle=Hr(or.bind(null,a,t,Ke,gn,Ac,l,il,qt,ga,ot,n,"Throttled",-0,0),i);break e}or(a,t,Ke,gn,Ac,l,il,qt,ga,ot,n,null,-0,0)}}break}while(!0);Dl(e)}function or(e,l,t,a,i,n,u,c,o,y,p,S,h,g){if(e.timeoutHandle=-1,S=l.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rl},er(l,n,S);var C=(n&62914560)===n?hn-Ie():(n&4194048)===n?ir-Ie():0;if(C=G0(S,C),C!==null){Kl=n,e.cancelPendingCommit=C(gr.bind(null,e,l,n,t,a,i,u,c,o,p,S,null,h,g)),dt(e,n,u,!y);return}}gr(e,l,n,t,a,i,u,c,o)}function Py(e){for(var l=e;;){var t=l.tag;if((t===0||t===11||t===15)&&l.flags&16384&&(t=l.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],n=i.getSnapshot;i=i.value;try{if(!Pe(n(),i))return!1}catch{return!1}}if(t=l.child,l.subtreeFlags&16384&&t!==null)t.return=l,l=t;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function dt(e,l,t,a){l&=~Ec,l&=~qt,e.suspendedLanes|=l,e.pingedLanes&=~l,a&&(e.warmLanes|=l),a=e.expirationTimes;for(var i=l;0<i;){var n=31-$e(i),u=1<<n;a[n]=-1,i&=~u}t!==0&&po(e,t,l)}function pn(){return(W&6)===0?(oi(0),!1):!0}function zc(){if(Y!==null){if(P===0)var e=Y.return;else e=Y,Bl=Mt=null,Qu(e),oa=null,Qa=0,e=Y;for(;e!==null;)qs(e.alternate,e),e=e.return;Y=null}}function va(e,l){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,x0(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Kl=0,zc(),ue=e,Y=t=wl(e.current,null),V=l,P=0,al=null,ot=!1,ma=Da(e,l),Tc=!1,ga=il=Ec=qt=ft=ye=0,Ke=ui=null,Ac=!1,(l&8)!==0&&(l|=l&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=l;0<a;){var i=31-$e(a),n=1<<i;l|=e[i],a&=~n}return Zl=l,Gi(),t}function fr(e,l){G=null,v.H=$a,l===ca||l===Zi?(l=Cf(),P=3):l===Nu?(l=Cf(),P=4):P=l===uc?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,al=l,Y===null&&(ye=1,un(e,sl(l,e.current)))}function sr(){var e=ll.current;return e===null?!0:(V&4194048)===V?hl===null:(V&62914560)===V||(V&536870912)!==0?e===hl:!1}function rr(){var e=v.H;return v.H=$a,e===null?$a:e}function dr(){var e=v.A;return v.A=ky,e}function vn(){ye=4,ot||(V&4194048)!==V&&ll.current!==null||(ma=!0),(ft&134217727)===0&&(qt&134217727)===0||ue===null||dt(ue,V,il,!1)}function _c(e,l,t){var a=W;W|=2;var i=rr(),n=dr();(ue!==e||V!==l)&&(gn=null,va(e,l)),l=!1;var u=ye;e:do try{if(P!==0&&Y!==null){var c=Y,o=al;switch(P){case 8:zc(),u=6;break e;case 3:case 2:case 9:case 6:ll.current===null&&(l=!0);var y=P;if(P=0,al=null,xa(e,c,o,y),t&&ma){u=0;break e}break;default:y=P,P=0,al=null,xa(e,c,o,y)}}e0(),u=ye;break}catch(p){fr(e,p)}while(!0);return l&&e.shellSuspendCounter++,Bl=Mt=null,W=a,v.H=i,v.A=n,Y===null&&(ue=null,V=0,Gi()),u}function e0(){for(;Y!==null;)yr(Y)}function l0(e,l){var t=W;W|=2;var a=rr(),i=dr();ue!==e||V!==l?(gn=null,mn=Ie()+500,va(e,l)):ma=Da(e,l);e:do try{if(P!==0&&Y!==null){l=Y;var n=al;l:switch(P){case 1:P=0,al=null,xa(e,l,n,1);break;case 2:case 9:if(Ef(n)){P=0,al=null,hr(l);break}l=function(){P!==2&&P!==9||ue!==e||(P=7),Dl(e)},n.then(l,l);break e;case 3:P=7;break e;case 4:P=5;break e;case 7:Ef(n)?(P=0,al=null,hr(l)):(P=0,al=null,xa(e,l,n,7));break;case 5:var u=null;switch(Y.tag){case 26:u=Y.memoizedState;case 5:case 27:var c=Y;if(u?Pr(u):c.stateNode.complete){P=0,al=null;var o=c.sibling;if(o!==null)Y=o;else{var y=c.return;y!==null?(Y=y,xn(y)):Y=null}break l}}P=0,al=null,xa(e,l,n,5);break;case 6:P=0,al=null,xa(e,l,n,6);break;case 8:zc(),ye=6;break e;default:throw Error(m(462))}}t0();break}catch(p){fr(e,p)}while(!0);return Bl=Mt=null,v.H=a,v.A=i,W=t,Y!==null?0:(ue=null,V=0,Gi(),ye)}function t0(){for(;Y!==null&&!Cd();)yr(Y)}function yr(e){var l=Gs(e.alternate,e,Zl);e.memoizedProps=e.pendingProps,l===null?xn(e):Y=l}function hr(e){var l=e,t=l.alternate;switch(l.tag){case 15:case 0:l=Rs(t,l,l.pendingProps,l.type,void 0,V);break;case 11:l=Rs(t,l,l.pendingProps,l.type.render,l.ref,V);break;case 5:Qu(l);default:qs(t,l),l=Y=df(l,Zl),l=Gs(t,l,Zl)}e.memoizedProps=e.pendingProps,l===null?xn(e):Y=l}function xa(e,l,t,a){Bl=Mt=null,Qu(l),oa=null,Qa=0;var i=l.return;try{if(Qy(e,i,l,t,V)){ye=1,un(e,sl(t,e.current)),Y=null;return}}catch(n){if(i!==null)throw Y=i,n;ye=1,un(e,sl(t,e.current)),Y=null;return}l.flags&32768?(Z||a===1?e=!0:ma||(V&536870912)!==0?e=!1:(ot=e=!0,(a===2||a===9||a===3||a===6)&&(a=ll.current,a!==null&&a.tag===13&&(a.flags|=16384))),mr(l,e)):xn(l)}function xn(e){var l=e;do{if((l.flags&32768)!==0){mr(l,ot);return}e=l.return;var t=Jy(l.alternate,l,Zl);if(t!==null){Y=t;return}if(l=l.sibling,l!==null){Y=l;return}Y=l=e}while(l!==null);ye===0&&(ye=5)}function mr(e,l){do{var t=Fy(e.alternate,e);if(t!==null){t.flags&=32767,Y=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!l&&(e=e.sibling,e!==null)){Y=e;return}Y=e=t}while(e!==null);ye=6,Y=null}function gr(e,l,t,a,i,n,u,c,o){e.cancelPendingCommit=null;do Sn();while(Te!==0);if((W&6)!==0)throw Error(m(327));if(l!==null){if(l===e.current)throw Error(m(177));if(n=l.lanes|l.childLanes,n|=pu,Bd(e,t,n,u,c,o),e===ue&&(Y=ue=null,V=0),pa=l,rt=e,Kl=t,Cc=n,Oc=i,nr=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,u0(bi,function(){return br(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,i=E.p,E.p=2,u=W,W|=4;try{Wy(e,l,t)}finally{W=u,E.p=i,v.T=a}}Te=1,pr(),vr(),xr()}}function pr(){if(Te===1){Te=0;var e=rt,l=pa,t=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||t){t=v.T,v.T=null;var a=E.p;E.p=2;var i=W;W|=4;try{ks(l,e);var n=jc,u=tf(e.containerInfo),c=n.focusedElem,o=n.selectionRange;if(u!==c&&c&&c.ownerDocument&&lf(c.ownerDocument.documentElement,c)){if(o!==null&&du(c)){var y=o.start,p=o.end;if(p===void 0&&(p=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(p,c.value.length);else{var S=c.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var g=h.getSelection(),C=c.textContent.length,R=Math.min(o.start,C),ie=o.end===void 0?R:Math.min(o.end,C);!g.extend&&R>ie&&(u=ie,ie=R,R=u);var r=ef(c,R),f=ef(c,ie);if(r&&f&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var d=S.createRange();d.setStart(r.node,r.offset),g.removeAllRanges(),R>ie?(g.addRange(d),g.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),g.addRange(d))}}}}for(S=[],g=c;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var x=S[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Nn=!!Yc,jc=Yc=null}finally{W=i,E.p=a,v.T=t}}e.current=l,Te=2}}function vr(){if(Te===2){Te=0;var e=rt,l=pa,t=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||t){t=v.T,v.T=null;var a=E.p;E.p=2;var i=W;W|=4;try{Ks(e,l.alternate,l)}finally{W=i,E.p=a,v.T=t}}Te=3}}function xr(){if(Te===4||Te===3){Te=0,Od();var e=rt,l=pa,t=Kl,a=nr;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Te=5:(Te=0,pa=rt=null,Sr(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(st=null),Jn(t),l=l.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Oa,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=v.T,i=E.p,E.p=2,v.T=null;try{for(var n=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];n(c.value,{componentStack:c.stack})}}finally{v.T=l,E.p=i}}(Kl&3)!==0&&Sn(),Dl(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===Dc?ci++:(ci=0,Dc=e):ci=0,oi(0)}}function Sr(e,l){(e.pooledCacheLanes&=l)===0&&(l=e.pooledCache,l!=null&&(e.pooledCache=null,Va(l)))}function Sn(){return pr(),vr(),xr(),br()}function br(){if(Te!==5)return!1;var e=rt,l=Cc;Cc=0;var t=Jn(Kl),a=v.T,i=E.p;try{E.p=32>t?32:t,v.T=null,t=Oc,Oc=null;var n=rt,u=Kl;if(Te=0,pa=rt=null,Kl=0,(W&6)!==0)throw Error(m(331));var c=W;if(W|=4,tr(n.current),Ps(n,n.current,u,t),W=c,oi(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Oa,n)}catch{}return!0}finally{E.p=i,v.T=a,Sr(e,l)}}function Tr(e,l,t){l=sl(t,l),l=nc(e.stateNode,l,2),e=it(e,l,2),e!==null&&(za(e,2),Dl(e))}function ee(e,l,t){if(e.tag===3)Tr(e,e,t);else for(;l!==null;){if(l.tag===3){Tr(l,e,t);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(st===null||!st.has(a))){e=sl(t,e),t=Es(2),a=it(l,t,2),a!==null&&(As(t,a,l,e),za(a,2),Dl(a));break}}l=l.return}}function Mc(e,l,t){var a=e.pingCache;if(a===null){a=e.pingCache=new $y;var i=new Set;a.set(l,i)}else i=a.get(l),i===void 0&&(i=new Set,a.set(l,i));i.has(t)||(Tc=!0,i.add(t),e=a0.bind(null,e,l,t),l.then(e,e))}function a0(e,l,t){var a=e.pingCache;a!==null&&a.delete(l),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ue===e&&(V&t)===t&&(ye===4||ye===3&&(V&62914560)===V&&300>Ie()-hn?(W&2)===0&&va(e,0):Ec|=t,ga===V&&(ga=0)),Dl(e)}function Er(e,l){l===0&&(l=go()),e=Dt(e,l),e!==null&&(za(e,l),Dl(e))}function i0(e){var l=e.memoizedState,t=0;l!==null&&(t=l.retryLane),Er(e,t)}function n0(e,l){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(l),Er(e,t)}function u0(e,l){return Xn(e,l)}var bn=null,Sa=null,Rc=!1,Tn=!1,Nc=!1,yt=0;function Dl(e){e!==Sa&&e.next===null&&(Sa===null?bn=Sa=e:Sa=Sa.next=e),Tn=!0,Rc||(Rc=!0,o0())}function oi(e,l){if(!Nc&&Tn){Nc=!0;do for(var t=!1,a=bn;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var n=0;else{var u=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-$e(42|e)+1)-1,n&=i&~(u&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(t=!0,Dr(a,n))}else n=V,n=Ci(a,a===ue?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Da(a,n)||(t=!0,Dr(a,n));a=a.next}while(t);Nc=!1}}function c0(){Ar()}function Ar(){Tn=Rc=!1;var e=0;yt!==0&&v0()&&(e=yt);for(var l=Ie(),t=null,a=bn;a!==null;){var i=a.next,n=Cr(a,l);n===0?(a.next=null,t===null?bn=i:t.next=i,i===null&&(Sa=t)):(t=a,(e!==0||(n&3)!==0)&&(Tn=!0)),a=i}Te!==0&&Te!==5||oi(e),yt!==0&&(yt=0)}function Cr(e,l){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var u=31-$e(n),c=1<<u,o=i[u];o===-1?((c&t)===0||(c&a)!==0)&&(i[u]=Ud(c,l)):o<=l&&(e.expiredLanes|=c),n&=~c}if(l=ue,t=V,t=Ci(e,e===l?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===l&&(P===2||P===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Qn(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Da(e,t)){if(l=t&-t,l===e.callbackPriority)return l;switch(a!==null&&Qn(a),Jn(t)){case 2:case 8:t=ho;break;case 32:t=bi;break;case 268435456:t=mo;break;default:t=bi}return a=Or.bind(null,e),t=Xn(t,a),e.callbackPriority=l,e.callbackNode=t,l}return a!==null&&a!==null&&Qn(a),e.callbackPriority=2,e.callbackNode=null,2}function Or(e,l){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Sn()&&e.callbackNode!==t)return null;var a=V;return a=Ci(e,e===ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cr(e,a,l),Cr(e,Ie()),e.callbackNode!=null&&e.callbackNode===t?Or.bind(null,e):null)}function Dr(e,l){if(Sn())return null;cr(e,l,!0)}function o0(){S0(function(){(W&6)!==0?Xn(yo,c0):Ar()})}function wc(){if(yt===0){var e=na;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),yt=e}return yt}function zr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_i(""+e)}function _r(e,l){var t=l.ownerDocument.createElement("input");return t.name=l.name,t.value=l.value,e.id&&t.setAttribute("form",e.id),l.parentNode.insertBefore(t,l),e=new FormData(e),t.parentNode.removeChild(t),e}function f0(e,l,t,a,i){if(l==="submit"&&t&&t.stateNode===i){var n=zr((i[je]||null).action),u=a.submitter;u&&(l=(l=u[je]||null)?zr(l.formAction):u.getAttribute("formAction"),l!==null&&(n=l,u=null));var c=new wi("action","action",null,a,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yt!==0){var o=u?_r(i,u):new FormData(i);Pu(t,{pending:!0,data:o,method:i.method,action:n},null,o)}}else typeof n=="function"&&(c.preventDefault(),o=u?_r(i,u):new FormData(i),Pu(t,{pending:!0,data:o,method:i.method,action:n},n,o))},currentTarget:i}]})}}for(var Uc=0;Uc<gu.length;Uc++){var Bc=gu[Uc],s0=Bc.toLowerCase(),r0=Bc[0].toUpperCase()+Bc.slice(1);vl(s0,"on"+r0)}vl(uf,"onAnimationEnd"),vl(cf,"onAnimationIteration"),vl(of,"onAnimationStart"),vl("dblclick","onDoubleClick"),vl("focusin","onFocus"),vl("focusout","onBlur"),vl(Dy,"onTransitionRun"),vl(zy,"onTransitionStart"),vl(_y,"onTransitionCancel"),vl(ff,"onTransitionEnd"),Zt("onMouseEnter",["mouseout","mouseover"]),Zt("onMouseLeave",["mouseout","mouseover"]),Zt("onPointerEnter",["pointerout","pointerover"]),Zt("onPointerLeave",["pointerout","pointerover"]),Et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Et("onBeforeInput",["compositionend","keypress","textInput","paste"]),Et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function Mr(e,l){l=(l&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var n=void 0;if(l)for(var u=a.length-1;0<=u;u--){var c=a[u],o=c.instance,y=c.currentTarget;if(c=c.listener,o!==n&&i.isPropagationStopped())break e;n=c,i.currentTarget=y;try{n(i)}catch(p){Li(p)}i.currentTarget=null,n=o}else for(u=0;u<a.length;u++){if(c=a[u],o=c.instance,y=c.currentTarget,c=c.listener,o!==n&&i.isPropagationStopped())break e;n=c,i.currentTarget=y;try{n(i)}catch(p){Li(p)}i.currentTarget=null,n=o}}}}function j(e,l){var t=l[Fn];t===void 0&&(t=l[Fn]=new Set);var a=e+"__bubble";t.has(a)||(Rr(l,e,2,!1),t.add(a))}function Lc(e,l,t){var a=0;l&&(a|=4),Rr(t,e,a,l)}var En="_reactListening"+Math.random().toString(36).slice(2);function Gc(e){if(!e[En]){e[En]=!0,Eo.forEach(function(t){t!=="selectionchange"&&(d0.has(t)||Lc(t,!1,e),Lc(t,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[En]||(l[En]=!0,Lc("selectionchange",!1,l))}}function Rr(e,l,t,a){switch(ud(l)){case 2:var i=Y0;break;case 8:i=j0;break;default:i=$c}t=i.bind(null,l,t,e),i=void 0,!au||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(l,t,{capture:!0,passive:i}):e.addEventListener(l,t,!0):i!==void 0?e.addEventListener(l,t,{passive:i}):e.addEventListener(l,t,!1)}function Hc(e,l,t,a,i){var n=a;if((l&1)===0&&(l&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===i)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;c!==null;){if(u=Vt(c),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=n=u;continue e}c=c.parentNode}}a=a.return}Bo(function(){var y=n,p=lu(t),S=[];e:{var h=sf.get(e);if(h!==void 0){var g=wi,C=e;switch(e){case"keypress":if(Ri(t)===0)break e;case"keydown":case"keyup":g=ny;break;case"focusin":C="focus",g=cu;break;case"focusout":C="blur",g=cu;break;case"beforeblur":case"afterblur":g=cu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=oy;break;case uf:case cf:case of:g=Id;break;case ff:g=sy;break;case"scroll":case"scrollend":g=Zd;break;case"wheel":g=dy;break;case"copy":case"cut":case"paste":g=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yo;break;case"toggle":case"beforetoggle":g=hy}var R=(l&4)!==0,ie=!R&&(e==="scroll"||e==="scrollend"),r=R?h!==null?h+"Capture":null:h;R=[];for(var f=y,d;f!==null;){var x=f;if(d=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||d===null||r===null||(x=Ra(f,r),x!=null&&R.push(si(f,x,d))),ie)break;f=f.return}0<R.length&&(h=new g(h,C,null,t,p),S.push({event:h,listeners:R}))}}if((l&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&t!==eu&&(C=t.relatedTarget||t.fromElement)&&(Vt(C)||C[jt]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(C=t.relatedTarget||t.toElement,g=y,C=C?Vt(C):null,C!==null&&(ie=F(C),R=C.tag,C!==ie||R!==5&&R!==27&&R!==6)&&(C=null)):(g=null,C=y),g!==C)){if(R=Ho,x="onMouseLeave",r="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(R=Yo,x="onPointerLeave",r="onPointerEnter",f="pointer"),ie=g==null?h:Ma(g),d=C==null?h:Ma(C),h=new R(x,f+"leave",g,t,p),h.target=ie,h.relatedTarget=d,x=null,Vt(p)===y&&(R=new R(r,f+"enter",C,t,p),R.target=d,R.relatedTarget=ie,x=R),ie=x,g&&C)l:{for(R=y0,r=g,f=C,d=0,x=r;x;x=R(x))d++;x=0;for(var _=f;_;_=R(_))x++;for(;0<d-x;)r=R(r),d--;for(;0<x-d;)f=R(f),x--;for(;d--;){if(r===f||f!==null&&r===f.alternate){R=r;break l}r=R(r),f=R(f)}R=null}else R=null;g!==null&&Nr(S,h,g,R,!1),C!==null&&ie!==null&&Nr(S,ie,C,R,!0)}}e:{if(h=y?Ma(y):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var K=Fo;else if(Ko(h))if(Wo)K=Ay;else{K=Ty;var z=by}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?y&&Pn(y.elementType)&&(K=Fo):K=Ey;if(K&&(K=K(e,y))){Jo(S,K,t,p);break e}z&&z(e,h,y),e==="focusout"&&y&&h.type==="number"&&y.memoizedProps.value!=null&&$n(h,"number",h.value)}switch(z=y?Ma(y):window,e){case"focusin":(Ko(z)||z.contentEditable==="true")&&(kt=z,yu=y,qa=null);break;case"focusout":qa=yu=kt=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,af(S,t,p);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":af(S,t,p)}var H;if(fu)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else It?Qo(e,t)&&(X="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(X="onCompositionStart");X&&(jo&&t.locale!=="ko"&&(It||X!=="onCompositionStart"?X==="onCompositionEnd"&&It&&(H=Lo()):(kl=p,iu="value"in kl?kl.value:kl.textContent,It=!0)),z=An(y,X),0<z.length&&(X=new qo(X,e,null,t,p),S.push({event:X,listeners:z}),H?X.data=H:(H=Zo(t),H!==null&&(X.data=H)))),(H=gy?py(e,t):vy(e,t))&&(X=An(y,"onBeforeInput"),0<X.length&&(z=new qo("onBeforeInput","beforeinput",null,t,p),S.push({event:z,listeners:X}),z.data=H)),f0(S,e,y,t,p)}Mr(S,l)})}function si(e,l,t){return{instance:e,listener:l,currentTarget:t}}function An(e,l){for(var t=l+"Capture",a=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Ra(e,t),i!=null&&a.unshift(si(e,i,n)),i=Ra(e,l),i!=null&&a.push(si(e,i,n))),e.tag===3)return a;e=e.return}return[]}function y0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nr(e,l,t,a,i){for(var n=l._reactName,u=[];t!==null&&t!==a;){var c=t,o=c.alternate,y=c.stateNode;if(c=c.tag,o!==null&&o===a)break;c!==5&&c!==26&&c!==27||y===null||(o=y,i?(y=Ra(t,n),y!=null&&u.unshift(si(t,y,o))):i||(y=Ra(t,n),y!=null&&u.push(si(t,y,o)))),t=t.return}u.length!==0&&e.push({event:l,listeners:u})}var h0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function wr(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(m0,"")}function Ur(e,l){return l=wr(l),wr(e)===l}function ae(e,l,t,a,i,n){switch(t){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||Jt(e,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&Jt(e,""+a);break;case"className":Di(e,"class",a);break;case"tabIndex":Di(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(e,t,a);break;case"style":wo(e,a,n);break;case"data":if(l!=="object"){Di(e,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=_i(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(t==="formAction"?(l!=="input"&&ae(e,l,"name",i.name,i,null),ae(e,l,"formEncType",i.formEncType,i,null),ae(e,l,"formMethod",i.formMethod,i,null),ae(e,l,"formTarget",i.formTarget,i,null)):(ae(e,l,"encType",i.encType,i,null),ae(e,l,"method",i.method,i,null),ae(e,l,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=_i(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Rl);break;case"onScroll":a!=null&&j("scroll",e);break;case"onScrollEnd":a!=null&&j("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=_i(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":j("beforetoggle",e),j("toggle",e),Oi(e,"popover",a);break;case"xlinkActuate":Ml(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ml(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ml(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ml(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ml(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ml(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ml(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ml(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ml(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Oi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Xd.get(t)||t,Oi(e,t,a))}}function qc(e,l,t,a,i,n){switch(t){case"style":wo(e,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Jt(e,a):(typeof a=="number"||typeof a=="bigint")&&Jt(e,""+a);break;case"onScroll":a!=null&&j("scroll",e);break;case"onScrollEnd":a!=null&&j("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),l=t.slice(2,i?t.length-7:void 0),n=e[je]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(l,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(l,a,i);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Oi(e,t,a)}}}function _e(e,l,t){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":j("error",e),j("load",e);var a=!1,i=!1,n;for(n in t)if(t.hasOwnProperty(n)){var u=t[n];if(u!=null)switch(n){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,l));default:ae(e,l,n,u,t,null)}}i&&ae(e,l,"srcSet",t.srcSet,t,null),a&&ae(e,l,"src",t.src,t,null);return;case"input":j("invalid",e);var c=n=u=i=null,o=null,y=null;for(a in t)if(t.hasOwnProperty(a)){var p=t[a];if(p!=null)switch(a){case"name":i=p;break;case"type":u=p;break;case"checked":o=p;break;case"defaultChecked":y=p;break;case"value":n=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,l));break;default:ae(e,l,a,p,t,null)}}_o(e,n,c,o,y,u,i,!1);return;case"select":j("invalid",e),a=u=n=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ae(e,l,i,c,t,null)}l=n,t=u,e.multiple=!!a,l!=null?Kt(e,!!a,l,!1):t!=null&&Kt(e,!!a,t,!0);return;case"textarea":j("invalid",e),n=i=a=null;for(u in t)if(t.hasOwnProperty(u)&&(c=t[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":i=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:ae(e,l,u,c,t,null)}Ro(e,a,i,n);return;case"option":for(o in t)if(t.hasOwnProperty(o)&&(a=t[o],a!=null))switch(o){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ae(e,l,o,a,t,null)}return;case"dialog":j("beforetoggle",e),j("toggle",e),j("cancel",e),j("close",e);break;case"iframe":case"object":j("load",e);break;case"video":case"audio":for(a=0;a<fi.length;a++)j(fi[a],e);break;case"image":j("error",e),j("load",e);break;case"details":j("toggle",e);break;case"embed":case"source":case"link":j("error",e),j("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in t)if(t.hasOwnProperty(y)&&(a=t[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,l));default:ae(e,l,y,a,t,null)}return;default:if(Pn(l)){for(p in t)t.hasOwnProperty(p)&&(a=t[p],a!==void 0&&qc(e,l,p,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&ae(e,l,c,a,t,null))}function g0(e,l,t,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,c=null,o=null,y=null,p=null;for(g in t){var S=t[g];if(t.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":o=S;default:a.hasOwnProperty(g)||ae(e,l,g,null,a,S)}}for(var h in a){var g=a[h];if(S=t[h],a.hasOwnProperty(h)&&(g!=null||S!=null))switch(h){case"type":n=g;break;case"name":i=g;break;case"checked":y=g;break;case"defaultChecked":p=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,l));break;default:g!==S&&ae(e,l,h,g,a,S)}}kn(e,u,c,o,y,p,n,i);return;case"select":g=u=c=h=null;for(n in t)if(o=t[n],t.hasOwnProperty(n)&&o!=null)switch(n){case"value":break;case"multiple":g=o;default:a.hasOwnProperty(n)||ae(e,l,n,null,a,o)}for(i in a)if(n=a[i],o=t[i],a.hasOwnProperty(i)&&(n!=null||o!=null))switch(i){case"value":h=n;break;case"defaultValue":c=n;break;case"multiple":u=n;default:n!==o&&ae(e,l,i,n,a,o)}l=c,t=u,a=g,h!=null?Kt(e,!!t,h,!1):!!a!=!!t&&(l!=null?Kt(e,!!t,l,!0):Kt(e,!!t,t?[]:"",!1));return;case"textarea":g=h=null;for(c in t)if(i=t[c],t.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ae(e,l,c,null,a,i)}for(u in a)if(i=a[u],n=t[u],a.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":h=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==n&&ae(e,l,u,i,a,n)}Mo(e,h,g);return;case"option":for(var C in t)if(h=t[C],t.hasOwnProperty(C)&&h!=null&&!a.hasOwnProperty(C))switch(C){case"selected":e.selected=!1;break;default:ae(e,l,C,null,a,h)}for(o in a)if(h=a[o],g=t[o],a.hasOwnProperty(o)&&h!==g&&(h!=null||g!=null))switch(o){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ae(e,l,o,h,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in t)h=t[R],t.hasOwnProperty(R)&&h!=null&&!a.hasOwnProperty(R)&&ae(e,l,R,null,a,h);for(y in a)if(h=a[y],g=t[y],a.hasOwnProperty(y)&&h!==g&&(h!=null||g!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(m(137,l));break;default:ae(e,l,y,h,a,g)}return;default:if(Pn(l)){for(var ie in t)h=t[ie],t.hasOwnProperty(ie)&&h!==void 0&&!a.hasOwnProperty(ie)&&qc(e,l,ie,void 0,a,h);for(p in a)h=a[p],g=t[p],!a.hasOwnProperty(p)||h===g||h===void 0&&g===void 0||qc(e,l,p,h,a,g);return}}for(var r in t)h=t[r],t.hasOwnProperty(r)&&h!=null&&!a.hasOwnProperty(r)&&ae(e,l,r,null,a,h);for(S in a)h=a[S],g=t[S],!a.hasOwnProperty(S)||h===g||h==null&&g==null||ae(e,l,S,h,a,g)}function Br(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function p0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,l=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],n=i.transferSize,u=i.initiatorType,c=i.duration;if(n&&c&&Br(u)){for(u=0,c=i.responseEnd,a+=1;a<t.length;a++){var o=t[a],y=o.startTime;if(y>c)break;var p=o.transferSize,S=o.initiatorType;p&&Br(S)&&(o=o.responseEnd,u+=p*(o<c?1:(c-y)/(o-y)))}if(--a,l+=8*(n+u)/(i.duration/1e3),e++,10<e)break}}if(0<e)return l/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yc=null,jc=null;function Cn(e){return e.nodeType===9?e:e.ownerDocument}function Lr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gr(e,l){if(e===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&l==="foreignObject"?0:e}function Vc(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Xc=null;function v0(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var Hr=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,qr=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof qr<"u"?function(e){return qr.resolve(null).then(e).catch(b0)}:Hr;function b0(e){setTimeout(function(){throw e})}function ht(e){return e==="head"}function Yr(e,l){var t=l,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(i),Aa(l);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")ri(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,ri(t);for(var n=t.firstChild;n;){var u=n.nextSibling,c=n.nodeName;n[_a]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||t.removeChild(n),n=u}}else t==="body"&&ri(e.ownerDocument.body);t=i}while(t);Aa(l)}function jr(e,l){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?l?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(l?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function Qc(e){var l=e.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var t=l;switch(l=l.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Qc(t),Wn(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function T0(e,l,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(l){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(l==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=ml(e.nextSibling),e===null)break}return null}function E0(e,l,t){if(l==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ml(e.nextSibling),e===null))return null;return e}function Vr(e,l){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=ml(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function A0(e,l){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=l;else if(e.data!=="$?"||t.readyState!=="loading")l();else{var a=function(){l(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ml(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return e}var Jc=null;function Xr(e){e=e.nextSibling;for(var l=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(l===0)return ml(e.nextSibling);l--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||l++}e=e.nextSibling}return null}function Qr(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(l===0)return e;l--}else t!=="/$"&&t!=="/&"||l++}e=e.previousSibling}return null}function Zr(e,l,t){switch(l=Cn(t),e){case"html":if(e=l.documentElement,!e)throw Error(m(452));return e;case"head":if(e=l.head,!e)throw Error(m(453));return e;case"body":if(e=l.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function ri(e){for(var l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Wn(e)}var gl=new Map,Kr=new Set;function On(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jl=E.d;E.d={f:C0,r:O0,D:D0,C:z0,L:_0,m:M0,X:N0,S:R0,M:w0};function C0(){var e=Jl.f(),l=pn();return e||l}function O0(e){var l=Xt(e);l!==null&&l.tag===5&&l.type==="form"?fs(l):Jl.r(e)}var ba=typeof document>"u"?null:document;function Jr(e,l,t){var a=ba;if(a&&typeof l=="string"&&l){var i=ol(l);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Kr.has(i)||(Kr.add(i),e={rel:e,crossOrigin:t,href:l},a.querySelector(i)===null&&(l=a.createElement("link"),_e(l,"link",e),Ee(l),a.head.appendChild(l)))}}function D0(e){Jl.D(e),Jr("dns-prefetch",e,null)}function z0(e,l){Jl.C(e,l),Jr("preconnect",e,l)}function _0(e,l,t){Jl.L(e,l,t);var a=ba;if(a&&e&&l){var i='link[rel="preload"][as="'+ol(l)+'"]';l==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+ol(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+ol(t.imageSizes)+'"]')):i+='[href="'+ol(e)+'"]';var n=i;switch(l){case"style":n=Ta(e);break;case"script":n=Ea(e)}gl.has(n)||(e=w({rel:"preload",href:l==="image"&&t&&t.imageSrcSet?void 0:e,as:l},t),gl.set(n,e),a.querySelector(i)!==null||l==="style"&&a.querySelector(di(n))||l==="script"&&a.querySelector(yi(n))||(l=a.createElement("link"),_e(l,"link",e),Ee(l),a.head.appendChild(l)))}}function M0(e,l){Jl.m(e,l);var t=ba;if(t&&e){var a=l&&typeof l.as=="string"?l.as:"script",i='link[rel="modulepreload"][as="'+ol(a)+'"][href="'+ol(e)+'"]',n=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ea(e)}if(!gl.has(n)&&(e=w({rel:"modulepreload",href:e},l),gl.set(n,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(yi(n)))return}a=t.createElement("link"),_e(a,"link",e),Ee(a),t.head.appendChild(a)}}}function R0(e,l,t){Jl.S(e,l,t);var a=ba;if(a&&e){var i=Qt(a).hoistableStyles,n=Ta(e);l=l||"default";var u=i.get(n);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(di(n)))c.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":l},t),(t=gl.get(n))&&Fc(e,t);var o=u=a.createElement("link");Ee(o),_e(o,"link",e),o._p=new Promise(function(y,p){o.onload=y,o.onerror=p}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Dn(u,l,a)}u={type:"stylesheet",instance:u,count:1,state:c},i.set(n,u)}}}function N0(e,l){Jl.X(e,l);var t=ba;if(t&&e){var a=Qt(t).hoistableScripts,i=Ea(e),n=a.get(i);n||(n=t.querySelector(yi(i)),n||(e=w({src:e,async:!0},l),(l=gl.get(i))&&Wc(e,l),n=t.createElement("script"),Ee(n),_e(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function w0(e,l){Jl.M(e,l);var t=ba;if(t&&e){var a=Qt(t).hoistableScripts,i=Ea(e),n=a.get(i);n||(n=t.querySelector(yi(i)),n||(e=w({src:e,async:!0,type:"module"},l),(l=gl.get(i))&&Wc(e,l),n=t.createElement("script"),Ee(n),_e(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function Fr(e,l,t,a){var i=(i=q.current)?On(i):null;if(!i)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(l=Ta(t.href),t=Qt(i).hoistableStyles,a=t.get(l),a||(a={type:"style",instance:null,count:0,state:null},t.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ta(t.href);var n=Qt(i).hoistableStyles,u=n.get(e);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,u),(n=i.querySelector(di(e)))&&!n._p&&(u.instance=n,u.state.loading=5),gl.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},gl.set(e,t),n||U0(i,e,t,u.state))),l&&a===null)throw Error(m(528,""));return u}if(l&&a!==null)throw Error(m(529,""));return null;case"script":return l=t.async,t=t.src,typeof t=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Ea(t),t=Qt(i).hoistableScripts,a=t.get(l),a||(a={type:"script",instance:null,count:0,state:null},t.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function Ta(e){return'href="'+ol(e)+'"'}function di(e){return'link[rel="stylesheet"]['+e+"]"}function Wr(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function U0(e,l,t,a){e.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=e.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),_e(l,"link",t),Ee(l),e.head.appendChild(l))}function Ea(e){return'[src="'+ol(e)+'"]'}function yi(e){return"script[async]"+e}function Ir(e,l,t){if(l.count++,l.instance===null)switch(l.type){case"style":var a=e.querySelector('style[data-href~="'+ol(t.href)+'"]');if(a)return l.instance=a,Ee(a),a;var i=w({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ee(a),_e(a,"style",i),Dn(a,t.precedence,e),l.instance=a;case"stylesheet":i=Ta(t.href);var n=e.querySelector(di(i));if(n)return l.state.loading|=4,l.instance=n,Ee(n),n;a=Wr(t),(i=gl.get(i))&&Fc(a,i),n=(e.ownerDocument||e).createElement("link"),Ee(n);var u=n;return u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),_e(n,"link",a),l.state.loading|=4,Dn(n,t.precedence,e),l.instance=n;case"script":return n=Ea(t.src),(i=e.querySelector(yi(n)))?(l.instance=i,Ee(i),i):(a=t,(i=gl.get(n))&&(a=w({},t),Wc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ee(i),_e(i,"link",a),e.head.appendChild(i),l.instance=i);case"void":return null;default:throw Error(m(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,Dn(a,t.precedence,e));return l.instance}function Dn(e,l,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,n=i,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===l)n=c;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(l=t.nodeType===9?t.head:t,l.insertBefore(e,l.firstChild))}function Fc(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.title==null&&(e.title=l.title)}function Wc(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.integrity==null&&(e.integrity=l.integrity)}var zn=null;function kr(e,l,t){if(zn===null){var a=new Map,i=zn=new Map;i.set(t,a)}else i=zn,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var n=t[i];if(!(n[_a]||n[Ce]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(l)||"";u=e+u;var c=a.get(u);c?c.push(n):a.set(u,[n])}}return a}function $r(e,l,t){e=e.ownerDocument||e,e.head.insertBefore(t,l==="title"?e.querySelector("head > title"):null)}function B0(e,l,t){if(t===1||l.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return e=l.disabled,typeof l.precedence=="string"&&e==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function Pr(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function L0(e,l,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ta(a.href),n=l.querySelector(di(i));if(n){l=n._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(e.count++,e=_n.bind(e),l.then(e,e)),t.state.loading|=4,t.instance=n,Ee(n);return}n=l.ownerDocument||l,a=Wr(a),(i=gl.get(i))&&Fc(a,i),n=n.createElement("link"),Ee(n);var u=n;u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),_e(n,"link",a),t.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,l),(l=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=_n.bind(e),l.addEventListener("load",t),l.addEventListener("error",t))}}var Ic=0;function G0(e,l){return e.stylesheets&&e.count===0&&Rn(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Rn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+l);0<e.imgBytes&&Ic===0&&(Ic=62500*p0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>Ic?50:800)+l);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function _n(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mn=null;function Rn(e,l){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mn=new Map,l.forEach(H0,e),Mn=null,_n.call(e))}function H0(e,l){if(!(l.state.loading&4)){var t=Mn.get(e);if(t)var a=t.get(null);else{t=new Map,Mn.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),a=u)}a&&t.set(null,a)}i=l.instance,u=i.getAttribute("data-precedence"),n=t.get(u)||a,n===a&&t.set(null,i),t.set(u,i),this.count++,a=_n.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),l.state.loading|=4}}var hi={$$typeof:Me,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function q0(e,l,t,a,i,n,u,c,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zn(0),this.hiddenUpdates=Zn(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ed(e,l,t,a,i,n,u,c,o,y,p,S){return e=new q0(e,l,t,u,o,y,p,S,c),l=1,n===!0&&(l|=24),n=el(3,null,null,l),e.current=n,n.stateNode=e,l=_u(),l.refCount++,e.pooledCache=l,l.refCount++,n.memoizedState={element:a,isDehydrated:t,cache:l},wu(n),e}function ld(e){return e?(e=ea,e):ea}function td(e,l,t,a,i,n){i=ld(i),a.context===null?a.context=i:a.pendingContext=i,a=at(l),a.payload={element:t},n=n===void 0?null:n,n!==null&&(a.callback=n),t=it(e,a,l),t!==null&&(Je(t,e,l),Ka(t,e,l))}function ad(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<l?t:l}}function kc(e,l){ad(e,l),(e=e.alternate)&&ad(e,l)}function id(e){if(e.tag===13||e.tag===31){var l=Dt(e,67108864);l!==null&&Je(l,e,67108864),kc(e,67108864)}}function nd(e){if(e.tag===13||e.tag===31){var l=nl();l=Kn(l);var t=Dt(e,l);t!==null&&Je(t,e,l),kc(e,l)}}var Nn=!0;function Y0(e,l,t,a){var i=v.T;v.T=null;var n=E.p;try{E.p=2,$c(e,l,t,a)}finally{E.p=n,v.T=i}}function j0(e,l,t,a){var i=v.T;v.T=null;var n=E.p;try{E.p=8,$c(e,l,t,a)}finally{E.p=n,v.T=i}}function $c(e,l,t,a){if(Nn){var i=Pc(a);if(i===null)Hc(e,l,a,wn,t),cd(e,a);else if(X0(i,e,l,t,a))a.stopPropagation();else if(cd(e,a),l&4&&-1<V0.indexOf(e)){for(;i!==null;){var n=Xt(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=Tt(n.pendingLanes);if(u!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var o=1<<31-$e(u);c.entanglements[1]|=o,u&=~o}Dl(n),(W&6)===0&&(mn=Ie()+500,oi(0))}}break;case 31:case 13:c=Dt(n,2),c!==null&&Je(c,n,2),pn(),kc(n,2)}if(n=Pc(a),n===null&&Hc(e,l,a,wn,t),n===i)break;i=n}i!==null&&a.stopPropagation()}else Hc(e,l,a,null,t)}}function Pc(e){return e=lu(e),eo(e)}var wn=null;function eo(e){if(wn=null,e=Vt(e),e!==null){var l=F(e);if(l===null)e=null;else{var t=l.tag;if(t===13){if(e=he(l),e!==null)return e;e=null}else if(t===31){if(e=Ne(l),e!==null)return e;e=null}else if(t===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null)}}return wn=e,null}function ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dd()){case yo:return 2;case ho:return 8;case bi:case zd:return 32;case mo:return 268435456;default:return 32}default:return 32}}var lo=!1,mt=null,gt=null,pt=null,mi=new Map,gi=new Map,vt=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(e,l){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":mi.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(l.pointerId)}}function pi(e,l,t,a,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:l,domEventName:t,eventSystemFlags:a,nativeEvent:n,targetContainers:[i]},l!==null&&(l=Xt(l),l!==null&&id(l)),e):(e.eventSystemFlags|=a,l=e.targetContainers,i!==null&&l.indexOf(i)===-1&&l.push(i),e)}function X0(e,l,t,a,i){switch(l){case"focusin":return mt=pi(mt,e,l,t,a,i),!0;case"dragenter":return gt=pi(gt,e,l,t,a,i),!0;case"mouseover":return pt=pi(pt,e,l,t,a,i),!0;case"pointerover":var n=i.pointerId;return mi.set(n,pi(mi.get(n)||null,e,l,t,a,i)),!0;case"gotpointercapture":return n=i.pointerId,gi.set(n,pi(gi.get(n)||null,e,l,t,a,i)),!0}return!1}function od(e){var l=Vt(e.target);if(l!==null){var t=F(l);if(t!==null){if(l=t.tag,l===13){if(l=he(t),l!==null){e.blockedOn=l,bo(e.priority,function(){nd(t)});return}}else if(l===31){if(l=Ne(t),l!==null){e.blockedOn=l,bo(e.priority,function(){nd(t)});return}}else if(l===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Un(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var t=Pc(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);eu=a,t.target.dispatchEvent(a),eu=null}else return l=Xt(t),l!==null&&id(l),e.blockedOn=t,!1;l.shift()}return!0}function fd(e,l,t){Un(e)&&t.delete(l)}function Q0(){lo=!1,mt!==null&&Un(mt)&&(mt=null),gt!==null&&Un(gt)&&(gt=null),pt!==null&&Un(pt)&&(pt=null),mi.forEach(fd),gi.forEach(fd)}function Bn(e,l){e.blockedOn===l&&(e.blockedOn=null,lo||(lo=!0,O.unstable_scheduleCallback(O.unstable_NormalPriority,Q0)))}var Ln=null;function sd(e){Ln!==e&&(Ln=e,O.unstable_scheduleCallback(O.unstable_NormalPriority,function(){Ln===e&&(Ln=null);for(var l=0;l<e.length;l+=3){var t=e[l],a=e[l+1],i=e[l+2];if(typeof a!="function"){if(eo(a||t)===null)continue;break}var n=Xt(t);n!==null&&(e.splice(l,3),l-=3,Pu(n,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function Aa(e){function l(o){return Bn(o,e)}mt!==null&&Bn(mt,e),gt!==null&&Bn(gt,e),pt!==null&&Bn(pt,e),mi.forEach(l),gi.forEach(l);for(var t=0;t<vt.length;t++){var a=vt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<vt.length&&(t=vt[0],t.blockedOn===null);)od(t),t.blockedOn===null&&vt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],n=t[a+1],u=i[je]||null;if(typeof n=="function")u||sd(t);else if(u){var c=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[je]||null)c=u.formAction;else if(eo(i)!==null)continue}else c=u.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),sd(t)}}}function rd(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function l(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),i!==null&&(i(),i=null)}}}function to(e){this._internalRoot=e}Gn.prototype.render=to.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(m(409));var t=l.current,a=nl();td(t,a,e,l,null,null)},Gn.prototype.unmount=to.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;td(e.current,2,null,e,null,null),pn(),l[jt]=null}};function Gn(e){this._internalRoot=e}Gn.prototype.unstable_scheduleHydration=function(e){if(e){var l=So();e={blockedOn:null,target:e,priority:l};for(var t=0;t<vt.length&&l!==0&&l<vt[t].priority;t++);vt.splice(t,0,e),t===0&&od(e)}};var dd=re.version;if(dd!=="19.2.4")throw Error(m(527,dd,"19.2.4"));E.findDOMNode=function(e){var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=T(l),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var Z0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hn.isDisabled&&Hn.supportsFiber)try{Oa=Hn.inject(Z0),ke=Hn}catch{}}return xi.createRoot=function(e,l){if(!N(e))throw Error(m(299));var t=!1,a="",i=xs,n=Ss,u=bs;return l!=null&&(l.unstable_strictMode===!0&&(t=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(n=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError)),l=ed(e,1,!1,null,null,t,a,null,i,n,u,rd),e[jt]=l.current,Gc(e),new to(l)},xi.hydrateRoot=function(e,l,t){if(!N(e))throw Error(m(299));var a=!1,i="",n=xs,u=Ss,c=bs,o=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(o=t.formState)),l=ed(e,1,!0,l,t??null,a,i,o,n,u,c,rd),l.context=ld(null),t=l.current,a=nl(),a=Kn(a),i=at(a),i.callback=null,it(t,i,a),t=a,l.current.lanes=t,za(l,t),Dl(l),e[jt]=l.current,Gc(e),new Gn(l)},xi.version="19.2.4",xi}var Td;function lh(){if(Td)return no.exports;Td=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(re){console.error(re)}}return O(),no.exports=eh(),no.exports}var th=lh();function ah(){const[O,re]=Ed.useState(null),I=[{id:1,question:"1. Explain Raster Scan and Random Scan Display. 👉 Draw diagram + Differences (VERY IMPORTANT)",answer:"📌 100% exam question type",codeExample:`
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
      
      `},{id:21,question:"21. Explain Window and Viewport with diagram.",answer:"📌 Very common theory question.",codeExample:`
1️⃣ What is a Window?

A Window is the area of the scene we choose to see.
Imagine a large picture, but you look at only one small part.
That selected part is called Window.

Example

Think of a map of India, but you only want to see Gujarat.
The selected part (Gujarat) = Window

Diagram

Whole Scene (World Coordinate)

+-----------------------------+
|                             |
|       +-----------+         |
|       |  WINDOW   |         |
|       | (selected |         |
|       |   area)   |         |
|       +-----------+         |
|                             |
+-----------------------------+

The small box is the Window.



2️⃣ What is a Viewport?

A Viewport is the area on the screen where the window is displayed.

So:

Window → what part of scene we select
Viewport → where it appears on screen

Diagram
Screen (Display Device)

+-----------------------------+
|                             |
|      +-----------+          |
|      | VIEWPORT  |          |
|      | (display  |          |
|      |   area)   |          |
|      +-----------+          |
|                             |
+-----------------------------+

The selected window is shown inside this viewport.



3️⃣ Relationship (Very Important)

Process:

World Scene
     ↓
Select Window
     ↓
Map it to Viewport
     ↓
Display on Screen

So the window content is mapped to the viewport.


4️⃣ Simple Real-Life Example

Imagine:

📷 Camera

Camera frame = Window
Phone screen where photo appears = Viewport



5️⃣ Difference Between Window and Viewport

| Window                              | Viewport                         |
| ----------------------------------- | -------------------------------- |
| Area selected from the world scene  | Area on the display screen       |
| Defined in world coordinates        | Defined in screen coordinates    |
| Shows what part of scene to display | Shows where it appears on screen |
| Exists in virtual world             | Exists on display device         |



6️⃣ Very Short Exam Definition

Window:
A window is the selected area of the world coordinate system that we want to display.

Viewport:
A viewport is the area of the display device where the window is mapped.

      `},{id:22,question:"22. Explain Viewing Transformation Pipeline.",answer:"📌 Important long answer.",codeExample:`
In Computer Graphics, objects are created in a big virtual world, but the computer must convert them 
step-by-step to screen pixels.

This process is called Viewing Transformation Pipeline.



Viewing Transformation Pipeline

It is the process of converting object coordinates from world space to screen display coordinates.

Simple flow:

World Coordinates
       ↓
Viewing Coordinates
       ↓
Normalized Coordinates
       ↓
Device Coordinates (Screen)



1️⃣ World Coordinate System (WCS)

This is the original coordinate system where objects are created.
All objects exist in a large virtual world.

Example coordinates:

A (10 , 20)
B (30 , 40)
C (50 , 60)


Diagram idea:

World Coordinate System

      Y
      |
      |        *
      |    *
      |
------|---------------- X
      |
      |           *

So WCS = complete scene or world space.



2️⃣ Viewing Coordinate System (VCS)

Now we choose which part of the world we want to see.
This is done by placing a camera or viewing position.
It converts world coordinates → viewer coordinates.
Think of it like placing a camera in the world.

Example:

    Camera sees only selected objects



3️⃣ Normalized Viewing Coordinates (NVC)

Now the selected area is scaled into a standard range.

Usually the range is:

    0 to 1

So all coordinates become normalized.

Example:

    Original range → 0 to 1 range

Example conversion:

    (20 , 40)  →  (0.4 , 0.6)

This makes calculations easier for the system.



4️⃣ Device Coordinates (DC)

Finally the normalized coordinates are converted into screen pixels.

Example screen resolution:

    800 × 600 pixels

Example:

    (0.4 , 0.6) → (320 , 360)

Now the point can be drawn on the monitor.



Complete Viewing Pipeline Diagram
You can draw this in the exam:

World Coordinate System
          ↓
Viewing Transformation
          ↓
Viewing Coordinate System
          ↓
Normalization
          ↓
Normalized Viewing Coordinates
          ↓
Device Mapping
          ↓
Device Coordinates (Screen)



Very Short Table (for quick revision)

| Stage                  | Meaning                            |
| ---------------------- | ---------------------------------- |
| WCS                    | Objects in virtual world           |
| Viewing Coordinates    | Scene relative to camera           |
| Normalized Coordinates | Coordinates scaled between 0 and 1 |
| Device Coordinates     | Final screen pixels                |

      `},{id:23,question:"23. Explain Window to Viewport Transformation.",answer:"📌 Sometimes asked with formula explanation.",codeExample:`
Window to Viewport Transformation

It is the process of converting coordinates from the window to the viewport so that the selected scene 
appears correctly on the screen.


Simple meaning:

Selected scene (Window)
        ↓
Mapped to
        ↓
Screen area (Viewport)



Diagram (Very Important for Exam)
World Coordinate System

+----------------------------+
|                            |
|        +----------+        |
|        | Window   |        |
|        |   *      |        |
|        +----------+        |
|                            |
+----------------------------+


Screen (Display Device)

+----------------------------+
|                            |
|        +----------+        |
|        | Viewport |        |
|        |   *      |        |
|        +----------+        |
|                            |
+----------------------------+

The object inside the window appears inside the viewport.



1️⃣ Scaling Transformation

The size of the window and viewport may be different, so we must scale the object.

Example:

Window size  = 100 × 100
Viewport size = 500 × 500

So the object becomes larger.

Scaling formulas:

Sx = Viewport Width / Window Width
Sy = Viewport Height / Window Height

Meaning:

Sx → horizontal scaling
Sy → vertical scaling

This resizes the object to fit inside the viewport.



2️⃣ Translation

After scaling, the object must be moved to the correct viewport position.
So we apply translation.

Example:

Move object to viewport starting position
Translation moves the coordinates so they align with the viewport location.



3️⃣ Maintaining Relative Position

This means:

Objects inside the window keep their same relative positions after mapping.

Example:

Window

A        B
   C


After transformation:

Viewport

A        B
   C

The distance ratio between objects stays the same.

Only size and position change, not the layout.
Complete Transformation Idea



The process is:

1. Select Window
2. Scale objects to match viewport size
3. Translate to viewport position
4. Maintain relative position


Simple Table (for exam writing)

| Step              | Purpose                          |
| ----------------- | -------------------------------- |
| Scaling           | Adjust size to fit viewport      |
| Translation       | Move object to viewport position |
| Relative Position | Maintain object layout           |



One Line Exam Definition

Window to Viewport Transformation is the prceoss of mapping coordinates from the window to the 
viewport using scaling and translation while maintaining atirelve positions.
      

------------------------------------------------------------------------


Example: Window → Viewport Transformation

Given

Window coordinates

xwmin = 10
ywmin = 20
xwmax = 60
ywmax = 70


Viewport coordinates

xvmin = 100
yvmin = 200
xvmax = 300
yvmax = 400


Point inside window

P (20 , 40)

We want to find the viewport point (xv , yv).



Step 1️⃣ Find Window Size

Window width

= xwmax − xwmin
= 60 − 10
= 50

Window height

= ywmax − ywmin
= 70 − 20
= 50


Step 2️⃣ Find Viewport Size

Viewport width

= xvmax − xvmin
= 300 − 100
= 200

Viewport height

= yvmax − yvmin
= 400 − 200
= 200



Step 3️⃣ Scaling Factors

Sx = (xvmax − xvmin) / (xwmax − xwmin)
Sy = (yvmax − yvmin) / (ywmax − ywmin)

Calculate:

Sx = 200 / 50 = 4
Sy = 200 / 50 = 4



Step 4️⃣ Transformation Formula

Viewport coordinates:

xv = xvmin + (xw − xwmin) Sx
yv = yvmin + (yw − ywmin) Sy



Step 5️⃣ Substitute Values

X coordinate

xv = 100 + (20 − 10) × 4
xv = 100 + 10 × 4
xv = 100 + 40
xv = 140


Y coordinate

yv = 200 + (40 − 20) × 4
yv = 200 + 20 × 4
yv = 200 + 80
yv = 280


Final Answer

Window Point  : (20 , 40)
Viewport Point: (140 , 280)

So the point moves from window to viewport.



Short Exam Format (You Can Copy)

Sx = (xvmax − xvmin) / (xwmax − xwmin)
Sy = (yvmax − yvmin) / (ywmax − ywmin)

xv = xvmin + (xw − xwmin) Sx
yv = yvmin + (yw − ywmin) Sy

      `},{id:24,question:"24. What is Clipping? Explain its types.",answer:"📌 Basic important question.",codeExample:`
1️⃣ First idea: What problem does clipping solve?

Imagine a window (visible area) on the screen.

+-------------+
|             |
|   Visible   |
|    Area     |
|             |
+-------------+


Some objects may be:

    inside the window
    outside the window
    partly inside

The computer should display only the part inside the window.
That process is called Clipping.


Simple Definition

Clipping is the process of removing the parts of objects that lie outside the viewing window.

Types:

Point Clipping
Line Clipping
Polygon Clipping
Curve Clipping
Text Clipping


Types of Clipping

1️⃣ Point Clipping

This checks whether a point lies inside the window or outside.

Window boundaries:

xmin ≤ x ≤ xmax
ymin ≤ y ≤ ymax

Example:

Window

+---------+
|         |
|   •A    |
|         |
+---------+

Point A is inside → it will be displayed.
If a point is outside → it will not be displayed.



2️⃣ Line Clipping

Sometimes a line crosses the window boundary.

Example:

Line before clipping

      /
     /
+---------+
|        /|
|       / |
|      /  |
+-----/---+

After clipping:

+---------+
|        /|
|       / |
|      /  |
+---------+

Only the part of line inside the window is shown.



3️⃣ Polygon Clipping

A polygon is a shape with many sides.

Example:

Triangle / Rectangle / Pentagon
If a polygon crosses the window boundary, the system removes the outside part.

Before clipping

     /\\ 
    /  \\ 
+--------+
|   /\\   |
|  /  \\  |
+--------+

After clipping

+--------+
|   /\\   |
|  /  \\  |
+--------+

Only the visible part remains.



4️⃣ Curve Clipping

This is used for curves like circles or arcs.

Example:

Circle before clipping

   ( )
 +------+
 |      |
 |      |
 +------+

After clipping:

 +------+
 |  )   |
 |      |
 +------+

Only the curve inside the window is shown.



5️⃣ Text Clipping

This is used when text goes outside the window.

Example:

Before clipping

HELLO WORLD
+------+
|HELLO |
|WORLD |
+------+

After clipping:

+------+
|HELLO |
|WORL  |
+------+

Only the text inside the window is displayed.



Quick Table (Good for Exam)

| Type             | Meaning                                |
| ---------------- | -------------------------------------- |
| Point Clipping   | Checks if a point is inside the window |
| Line Clipping    | Removes line parts outside window      |
| Polygon Clipping | Removes outside parts of polygons      |
| Curve Clipping   | Clips curves like circles              |
| Text Clipping    | Clips characters outside window        |

      `},{id:25,question:"25. Explain Cohen–Sutherland Line Clipping Algorithm.",answer:"📌 Most important algorithm in this unit",codeExample:`
Explain:

Region codes
9 regions concept
Inside / outside test
Logical AND operation
      


Cohen–Sutherland Line Clipping Algorithm

It is a line clipping algorithm used to remove the parts of a line that lie outside the clipping window.
Only the portion inside the window is displayed.


1️⃣ 9 Regions Concept

The window divides the space into 9 regions.

        TOP-LEFT    TOP      TOP-RIGHT
           1001     1000       1010

        LEFT       WINDOW      RIGHT
           0001     0000       0010

        BOTTOM-LEFT BOTTOM  BOTTOM-RIGHT
           0101      0100       0110

Center region 0000 is the window.
All other regions are outside areas.
Each region has a 4-bit region code.



2️⃣ Region Codes

Each point of the line gets a 4-bit binary code.

The bits represent:

TOP
BOTTOM
RIGHT
LEFT

Example format:

TOP  BOTTOM  RIGHT  LEFT

Examples:

| Position        | Code |
| --------------- | ---- |
| Inside window   | 0000 |
| Left of window  | 0001 |
| Right of window | 0010 |
| Bottom          | 0100 |
| Top             | 1000 |

So every point of the line gets a region code.



3️⃣ Inside Test (Trivial Accept)

If both endpoints have region code 0000

Point1 = 0000
Point2 = 0000

Then the line is completely inside the window.

Result:

Accept the line (draw it completely)



4️⃣ Outside Test (Trivial Reject)

If the logical AND of both region codes ≠ 0

Example:

Point1 = 1000
Point2 = 1000

Logical AND:

1000
1000
-----
1000  (not zero)

This means the line is completely outside the window.

Result:

Reject the line



5️⃣ Logical AND Operation

The algorithm performs bitwise AND on the region codes.

Example:

Code1 = 1001
Code2 = 1000
1001
1000
-----
1000

If result ≠ 0, the line is outside.
If result = 0, the line may intersect the window and must be clipped.



6️⃣ Partial Line Case

If:

Code1 ≠ 0000
Code2 ≠ 0000
AND result = 0

Then the line crosses the window boundary.
The algorithm finds the intersection point with the window edge and clips the outside part.


Steps of the Algorithm (Exam Format)

1. Assign region codes to both endpoints of the line.
2. If both codes are 0000, accept the line.
3. If logical AND of codes ≠ 0, reject the line.
4. Otherwise, calculate the intersection with window boundary.
5. Replace the outside point with the intersection point.
6. Repeat until the line is accepted or rejected.


Small Diagram Idea for Exam

          1001 | 1000 | 1010
        -----------------------
          0001 | 0000 | 0010
        -----------------------
          0101 | 0100 | 0110

Middle region 0000 = clipping window.



Quick Revision Table

| Concept      | Meaning                         |
| ------------ | ------------------------------- |
| Region Code  | 4-bit code for point location   |
| 9 Regions    | Space divided around window     |
| Inside Test  | Both codes = 0000               |
| Outside Test | Logical AND ≠ 0                 |
| Clipping     | Find intersection and trim line |
      


-----------------------------------------------------------------------------


-----------------------------------------
COHEN–SUTHERLAND LINE CLIPPING EXAMPLE
-----------------------------------------

Clipping Window:

xmin = 10
xmax = 50
ymin = 10
ymax = 50


-----------------------------------------
LINE ENDPOINTS
-----------------------------------------

P1 (5 , 20)
P2 (40 , 60)

We must check if the line is inside or outside
the clipping window.


-----------------------------------------
STEP 1 : FIND REGION CODES
-----------------------------------------

Region code format:

TOP  BOTTOM  RIGHT  LEFT


For Point P1 (5 , 20)

Check position:

x = 5  < xmin (10)  → LEFT
y = 20 is inside vertical range

Region code:

0001


For Point P2 (40 , 60)

Check position:

x = 40 inside horizontal range
y = 60 > ymax (50) → TOP

Region code:

1000


-----------------------------------------
STEP 2 : INSIDE TEST
-----------------------------------------

If both region codes = 0000
→ line is completely inside.

Here:

P1 = 0001
P2 = 1000

So the line is NOT completely inside.


-----------------------------------------
STEP 3 : OUTSIDE TEST (LOGICAL AND)
-----------------------------------------

0001
1000
-----
0000

Result = 0000

So the line is NOT completely outside.

Meaning:
The line partially intersects the window.

Therefore the line must be clipped.


-----------------------------------------
STEP 4 : FIND INTERSECTION
-----------------------------------------

We clip the point that is outside.

P1 is LEFT → intersect with left boundary.

Left boundary:

x = xmin = 10


Line equation:

y = y1 + (y2 − y1) * (x − x1) / (x2 − x1)


Substitute values:

y = 20 + (60 − 20) * (10 − 5) / (40 − 5)

y = 20 + 40 * 5 / 35

y ≈ 20 + 5.7

y ≈ 25.7


New point:

P1' (10 , 25.7)


-----------------------------------------
STEP 5 : CLIP TOP POINT
-----------------------------------------

P2 is TOP → intersect with top boundary.

Top boundary:

y = ymax = 50


Formula:

x = x1 + (x2 − x1) * (y − y1) / (y2 − y1)


Substitute values:

x = 5 + (40 − 5) * (50 − 20) / (60 − 20)

x = 5 + 35 * 30 / 40

x = 5 + 26.25

x ≈ 31.25


New point:

P2' (31.25 , 50)


-----------------------------------------
FINAL CLIPPED LINE
-----------------------------------------

Original Line:

P1 (5 , 20)
P2 (40 , 60)

After Clipping:

P1' (10 , 25.7)
P2' (31.25 , 50)

Only this portion of the line inside the
clipping window is drawn.


-----------------------------------------
SIMPLE VISUAL
-----------------------------------------

Before Clipping

       *
      /
     /
+---------+
|        /
|       /
|      *
+---------+


After Clipping

+---------+
|        *
|       /
|      *
+---------+


-----------------------------------------
LOGICAL AND (BITWISE AND)
-----------------------------------------

Logical AND compares two binary numbers.

Rule:

Bit1   Bit2   Result
0      0      0
0      1      0
1      0      0
1      1      1


Important rule:

Only 1 AND 1 = 1
All other cases = 0

`},{id:27,question:"27. Explain Polygon Clipping (Sutherland–Hodgman Algorithm).",answer:"📌 Important algorithm question.",codeExample:`
1️⃣ Idea of Polygon Clipping

Polygon clipping removes the parts of a polygon that lie outside the clipping window and keeps only the 
visible portion inside the window.

One commonly used algorithm is:

Sutherland–Hodgman Polygon Clipping Algorithm

It clips the polygon edge by edge against the boundaries of the clipping window.


2️⃣ How the Algorithm Works

The clipping window has four boundaries:

Left boundary
Right boundary
Bottom boundary
Top boundary

The polygon is processed one boundary at a time.

After clipping against one boundary, the resulting vertices become the input for the next boundary.



3️⃣ Clipping Polygon Edges

The algorithm checks each edge of the polygon.
For each pair of vertices:

Previous vertex
Current vertex

It determines whether the points are inside or outside the boundary.


There are four possible cases.

| Case | Previous | Current | Action                               |
| ---- | -------- | ------- | ------------------------------------ |
| 1    | Inside   | Inside  | Output current vertex                |
| 2    | Inside   | Outside | Output intersection point            |
| 3    | Outside  | Inside  | Output intersection + current vertex |
| 4    | Outside  | Outside | Output nothing                       |


-----------------------------------------
CLIPPING POLYGON EDGES
-----------------------------------------

The polygon is processed edge by edge.

For each pair of vertices:
Previous vertex
Current vertex

The algorithm determines whether the points
are inside or outside the clipping boundary.

Four cases are considered:

Case 1:
Previous inside, Current inside
→ Output current vertex

Case 2:
Previous inside, Current outside
→ Output intersection point

Case 3:
Previous outside, Current inside
→ Output intersection point and current vertex

Case 4:
Previous outside, Current outside
→ Output nothing



PROCESSING AGAINST BOUNDARIES
-----------------------------------------

The polygon is clipped against each boundary
of the clipping window sequentially.

Boundaries are:

1. Left boundary
2. Right boundary
3. Bottom boundary
4. Top boundary

After clipping against one boundary,
the resulting polygon becomes the input
for the next boundary.



-------------------------------------------------------

-----------------------------------------
PREVIOUS AND CURRENT VERTEX
(SUTHERLAND–HODGMAN ALGORITHM)
-----------------------------------------

1️⃣ WHAT IS PREVIOUS AND CURRENT VERTEX?

When clipping a polygon, the algorithm checks
each edge of the polygon one by one.

An edge is formed by two vertices.

Example polygon vertices:

A → B → C → D → A


While processing edges:

Edge    Previous Vertex    Current Vertex
AB      A                  B
BC      B                  C
CD      C                  D
DA      D                  A


So:

Previous vertex = starting point of the edge
Current vertex  = ending point of the edge

The algorithm moves around the polygon
vertex by vertex.


-----------------------------------------
2️⃣ SIMPLE POLYGON EXAMPLE
-----------------------------------------

Polygon:

A(20,20)
B(60,20)
C(60,60)
D(20,60)

Traversal order:

A → B → C → D → A


Edges processed:

Edge 1 : A → B
Edge 2 : B → C
Edge 3 : C → D
Edge 4 : D → A


For edge AB

Previous = A
Current  = B


For edge BC

Previous = B
Current  = C


-----------------------------------------
3️⃣ DIAGRAM (POLYGON + CLIPPING WINDOW)
-----------------------------------------

Example clipping window:

          C
          *
      +---------+
      |         |
      |   * D   |
      |         |
      +---------+
  A *            * B


Polygon vertices:

A ---- B
|      |
|      |
D ---- C


Clipping window:

+---------+
|         |
|         |
|         |
+---------+

The algorithm checks each edge
against the window boundaries.


-----------------------------------------
4️⃣ EDGE PROCESSING DIAGRAM
-----------------------------------------

Example edge:

Previous (P) -------- Current (C)


CASE 1 — BOTH INSIDE

+-------------+
|   P ---- C  |
|             |
+-------------+

Output:
C


CASE 2 — INSIDE → OUTSIDE

+-------------+
|   P ---- *  |
|        /    |
+------X------+
         C

Output:
Intersection point


CASE 3 — OUTSIDE → INSIDE

      P
      *
+------X------+
|      /      |
|     C       |
+-------------+

Output:
Intersection + C


CASE 4 — OUTSIDE → OUTSIDE

P -------- C

+-------------+
|             |
|             |
+-------------+

Output:
Nothing


-----------------------------------------
5️⃣ SIMPLE RULE TO REMEMBER
-----------------------------------------

While checking each edge:

Previous = first vertex of edge
Current  = next vertex of edge


The algorithm moves like this:

P = first vertex
C = next vertex

Process edge P → C

Then move forward:

P = C
C = next vertex
      
      `},{id:27,question:"27. 2–3 MARK QUESTIONS",answer:"",codeExample:`
-----------------------------------------
POINT CLIPPING CONDITIONS
-----------------------------------------

Point clipping determines whether a point
lies inside or outside the clipping window.

A point P(x, y) is inside the clipping window if:

xmin ≤ x ≤ xmax
ymin ≤ y ≤ ymax

If both conditions are satisfied:
→ Point is accepted.

If any condition is not satisfied:
→ Point is rejected.


-----------------------------------------
REGION CODE MEANING
-----------------------------------------

Region code (Outcode) is a 4-bit binary code
used in the Cohen–Sutherland Line Clipping Algorithm.

It represents the position of a point relative
to the clipping window.

Bit order:

TOP  BOTTOM  RIGHT  LEFT

Meaning:

0000 → Point is inside the window
1000 → Point is above the window
0100 → Point is below the window
0010 → Point is right of the window
0001 → Point is left of the window

Region codes help quickly determine whether
a line is inside, outside, or partially inside
the clipping window.


-----------------------------------------
VIEW VOLUME
-----------------------------------------

View volume is the 3D region of space that
contains the objects to be displayed.

Only the objects inside the view volume
are visible on the screen.

Objects outside the view volume are clipped.

The view volume acts as the viewing area
for 3D graphics.


-----------------------------------------
NORMALIZED VIEW VOLUME
-----------------------------------------

Normalized view volume is a standard
coordinate system used in computer graphics.

After viewing transformation, the view volume
is mapped into a normalized cube.

The coordinates are typically transformed
into the range:

0 ≤ x ≤ 1
0 ≤ y ≤ 1
0 ≤ z ≤ 1

This standard form simplifies further
processing and rendering in the graphics system.
      
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

      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],m=N=>{re(O===N?null:N)};return Le.jsxs("div",{className:"app-container",children:[Le.jsx("h1",{children:"Computer Graphics Interview Questions"}),Le.jsx("div",{className:"questions-container",children:I.map(N=>Le.jsxs("div",{className:"question-item",children:[Le.jsx("button",{className:`question-button ${O===N.id?"active":""}`,onClick:()=>m(N.id),children:N.question}),O===N.id&&Le.jsxs("div",{className:"answer-container",children:[Le.jsxs("div",{className:"answer",children:[Le.jsx("h3",{children:"Answer:"}),Le.jsx("p",{children:N.answer})]}),N.codeExample&&Le.jsxs("div",{className:"code-example",children:[Le.jsx("h3",{children:"Code Example:"}),Le.jsx("pre",{children:Le.jsx("code",{children:N.codeExample})})]})]})]},N.id))})]})}th.createRoot(document.getElementById("root")).render(Le.jsx(Ed.StrictMode,{children:Le.jsx(ah,{})}));
