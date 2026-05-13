(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))g(L);new MutationObserver(L=>{for(const K of L)if(K.type==="childList")for(const ye of K.addedNodes)ye.tagName==="LINK"&&ye.rel==="modulepreload"&&g(ye)}).observe(document,{childList:!0,subtree:!0});function W(L){const K={};return L.integrity&&(K.integrity=L.integrity),L.referrerPolicy&&(K.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?K.credentials="include":L.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function g(L){if(L.ep)return;L.ep=!0;const K=W(L);fetch(L.href,K)}})();var ic={exports:{}},xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Zy(){if(md)return xi;md=1;var D=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function W(g,L,K){var ye=null;if(K!==void 0&&(ye=""+K),L.key!==void 0&&(ye=""+L.key),"key"in L){K={};for(var Le in L)Le!=="key"&&(K[Le]=L[Le])}else K=L;return L=K.ref,{$$typeof:D,type:g,key:ye,ref:L!==void 0?L:null,props:K}}return xi.Fragment=fe,xi.jsx=W,xi.jsxs=W,xi}var yd;function Ky(){return yd||(yd=1,ic.exports=Zy()),ic.exports}var Ue=Ky(),nc={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Jy(){if(gd)return B;gd=1;var D=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),se=Symbol.iterator;function Ke(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var Ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ze=Object.assign,Ot={};function Je(r,E,A){this.props=r,this.context=E,this.refs=Ot,this.updater=A||Ge}Je.prototype.isReactComponent={},Je.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},Je.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Kt(){}Kt.prototype=Je.prototype;function we(r,E,A){this.props=r,this.context=E,this.refs=Ot,this.updater=A||Ge}var ut=we.prototype=new Kt;ut.constructor=we,ze(ut,Je.prototype),ut.isPureReactComponent=!0;var Et=Array.isArray;function He(){}var F={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function Tt(r,E,A){var M=A.ref;return{$$typeof:D,type:r,key:E,ref:M!==void 0?M:null,props:A}}function Vl(r,E){return Tt(r.type,E,r.props)}function bt(r){return typeof r=="object"&&r!==null&&r.$$typeof===D}function Ve(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(A){return E[A]})}var Sl=/\/+/g;function Rt(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Ve(""+r.key):E.toString(36)}function pt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(He,He):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function x(r,E,A,M,U){var q=typeof r;(q==="undefined"||q==="boolean")&&(r=null);var P=!1;if(r===null)P=!0;else switch(q){case"bigint":case"string":case"number":P=!0;break;case"object":switch(r.$$typeof){case D:case fe:P=!0;break;case k:return P=r._init,x(P(r._payload),E,A,M,U)}}if(P)return U=U(r),P=M===""?"."+Rt(r,0):M,Et(U)?(A="",P!=null&&(A=P.replace(Sl,"$&/")+"/"),x(U,E,A,"",function(Ca){return Ca})):U!=null&&(bt(U)&&(U=Vl(U,A+(U.key==null||r&&r.key===U.key?"":(""+U.key).replace(Sl,"$&/")+"/")+P)),E.push(U)),1;P=0;var Ne=M===""?".":M+":";if(Et(r))for(var ge=0;ge<r.length;ge++)M=r[ge],q=Ne+Rt(M,ge),P+=x(M,E,A,q,U);else if(ge=Ke(r),typeof ge=="function")for(r=ge.call(r),ge=0;!(M=r.next()).done;)M=M.value,q=Ne+Rt(M,ge++),P+=x(M,E,A,q,U);else if(q==="object"){if(typeof r.then=="function")return x(pt(r),E,A,M,U);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return P}function b(r,E,A){if(r==null)return r;var M=[],U=0;return x(r,M,"","",function(q){return E.call(A,q,U++)}),M}function N(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(A){(r._status===0||r._status===-1)&&(r._status=1,r._result=A)},function(A){(r._status===0||r._status===-1)&&(r._status=2,r._result=A)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ne={map:b,forEach:function(r,E,A){b(r,function(){E.apply(this,arguments)},A)},count:function(r){var E=0;return b(r,function(){E++}),E},toArray:function(r){return b(r,function(E){return E})||[]},only:function(r){if(!bt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return B.Activity=z,B.Children=ne,B.Component=Je,B.Fragment=W,B.Profiler=L,B.PureComponent=we,B.StrictMode=g,B.Suspense=w,B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,B.__COMPILER_RUNTIME={__proto__:null,c:function(r){return F.H.useMemoCache(r)}},B.cache=function(r){return function(){return r.apply(null,arguments)}},B.cacheSignal=function(){return null},B.cloneElement=function(r,E,A){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var M=ze({},r.props),U=r.key;if(E!=null)for(q in E.key!==void 0&&(U=""+E.key),E)!qe.call(E,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&E.ref===void 0||(M[q]=E[q]);var q=arguments.length-2;if(q===1)M.children=A;else if(1<q){for(var P=Array(q),Ne=0;Ne<q;Ne++)P[Ne]=arguments[Ne+2];M.children=P}return Tt(r.type,U,M)},B.createContext=function(r){return r={$$typeof:ye,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:K,_context:r},r},B.createElement=function(r,E,A){var M,U={},q=null;if(E!=null)for(M in E.key!==void 0&&(q=""+E.key),E)qe.call(E,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(U[M]=E[M]);var P=arguments.length-2;if(P===1)U.children=A;else if(1<P){for(var Ne=Array(P),ge=0;ge<P;ge++)Ne[ge]=arguments[ge+2];U.children=Ne}if(r&&r.defaultProps)for(M in P=r.defaultProps,P)U[M]===void 0&&(U[M]=P[M]);return Tt(r,q,U)},B.createRef=function(){return{current:null}},B.forwardRef=function(r){return{$$typeof:Le,render:r}},B.isValidElement=bt,B.lazy=function(r){return{$$typeof:k,_payload:{_status:-1,_result:r},_init:N}},B.memo=function(r,E){return{$$typeof:T,type:r,compare:E===void 0?null:E}},B.startTransition=function(r){var E=F.T,A={};F.T=A;try{var M=r(),U=F.S;U!==null&&U(A,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(He,te)}catch(q){te(q)}finally{E!==null&&A.types!==null&&(E.types=A.types),F.T=E}},B.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},B.use=function(r){return F.H.use(r)},B.useActionState=function(r,E,A){return F.H.useActionState(r,E,A)},B.useCallback=function(r,E){return F.H.useCallback(r,E)},B.useContext=function(r){return F.H.useContext(r)},B.useDebugValue=function(){},B.useDeferredValue=function(r,E){return F.H.useDeferredValue(r,E)},B.useEffect=function(r,E){return F.H.useEffect(r,E)},B.useEffectEvent=function(r){return F.H.useEffectEvent(r)},B.useId=function(){return F.H.useId()},B.useImperativeHandle=function(r,E,A){return F.H.useImperativeHandle(r,E,A)},B.useInsertionEffect=function(r,E){return F.H.useInsertionEffect(r,E)},B.useLayoutEffect=function(r,E){return F.H.useLayoutEffect(r,E)},B.useMemo=function(r,E){return F.H.useMemo(r,E)},B.useOptimistic=function(r,E){return F.H.useOptimistic(r,E)},B.useReducer=function(r,E,A){return F.H.useReducer(r,E,A)},B.useRef=function(r){return F.H.useRef(r)},B.useState=function(r){return F.H.useState(r)},B.useSyncExternalStore=function(r,E,A){return F.H.useSyncExternalStore(r,E,A)},B.useTransition=function(){return F.H.useTransition()},B.version="19.2.4",B}var hd;function rc(){return hd||(hd=1,nc.exports=Jy()),nc.exports}var bd=rc(),uc={exports:{}},vi={},oc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function Wy(){return pd||(pd=1,(function(D){function fe(x,b){var N=x.length;x.push(b);e:for(;0<N;){var te=N-1>>>1,ne=x[te];if(0<L(ne,b))x[te]=b,x[N]=ne,N=te;else break e}}function W(x){return x.length===0?null:x[0]}function g(x){if(x.length===0)return null;var b=x[0],N=x.pop();if(N!==b){x[0]=N;e:for(var te=0,ne=x.length,r=ne>>>1;te<r;){var E=2*(te+1)-1,A=x[E],M=E+1,U=x[M];if(0>L(A,N))M<ne&&0>L(U,A)?(x[te]=U,x[M]=N,te=M):(x[te]=A,x[E]=N,te=E);else if(M<ne&&0>L(U,N))x[te]=U,x[M]=N,te=M;else break e}}return b}function L(x,b){var N=x.sortIndex-b.sortIndex;return N!==0?N:x.id-b.id}if(D.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;D.unstable_now=function(){return K.now()}}else{var ye=Date,Le=ye.now();D.unstable_now=function(){return ye.now()-Le}}var w=[],T=[],k=1,z=null,se=3,Ke=!1,Ge=!1,ze=!1,Ot=!1,Je=typeof setTimeout=="function"?setTimeout:null,Kt=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;function ut(x){for(var b=W(T);b!==null;){if(b.callback===null)g(T);else if(b.startTime<=x)g(T),b.sortIndex=b.expirationTime,fe(w,b);else break;b=W(T)}}function Et(x){if(ze=!1,ut(x),!Ge)if(W(w)!==null)Ge=!0,He||(He=!0,Ve());else{var b=W(T);b!==null&&pt(Et,b.startTime-x)}}var He=!1,F=-1,qe=5,Tt=-1;function Vl(){return Ot?!0:!(D.unstable_now()-Tt<qe)}function bt(){if(Ot=!1,He){var x=D.unstable_now();Tt=x;var b=!0;try{e:{Ge=!1,ze&&(ze=!1,Kt(F),F=-1),Ke=!0;var N=se;try{t:{for(ut(x),z=W(w);z!==null&&!(z.expirationTime>x&&Vl());){var te=z.callback;if(typeof te=="function"){z.callback=null,se=z.priorityLevel;var ne=te(z.expirationTime<=x);if(x=D.unstable_now(),typeof ne=="function"){z.callback=ne,ut(x),b=!0;break t}z===W(w)&&g(w),ut(x)}else g(w);z=W(w)}if(z!==null)b=!0;else{var r=W(T);r!==null&&pt(Et,r.startTime-x),b=!1}}break e}finally{z=null,se=N,Ke=!1}b=void 0}}finally{b?Ve():He=!1}}}var Ve;if(typeof we=="function")Ve=function(){we(bt)};else if(typeof MessageChannel<"u"){var Sl=new MessageChannel,Rt=Sl.port2;Sl.port1.onmessage=bt,Ve=function(){Rt.postMessage(null)}}else Ve=function(){Je(bt,0)};function pt(x,b){F=Je(function(){x(D.unstable_now())},b)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(x){x.callback=null},D.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<x?Math.floor(1e3/x):5},D.unstable_getCurrentPriorityLevel=function(){return se},D.unstable_next=function(x){switch(se){case 1:case 2:case 3:var b=3;break;default:b=se}var N=se;se=b;try{return x()}finally{se=N}},D.unstable_requestPaint=function(){Ot=!0},D.unstable_runWithPriority=function(x,b){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var N=se;se=x;try{return b()}finally{se=N}},D.unstable_scheduleCallback=function(x,b,N){var te=D.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?te+N:te):N=te,x){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=N+ne,x={id:k++,callback:b,priorityLevel:x,startTime:N,expirationTime:ne,sortIndex:-1},N>te?(x.sortIndex=N,fe(T,x),W(w)===null&&x===W(T)&&(ze?(Kt(F),F=-1):ze=!0,pt(Et,N-te))):(x.sortIndex=ne,fe(w,x),Ge||Ke||(Ge=!0,He||(He=!0,Ve()))),x},D.unstable_shouldYield=Vl,D.unstable_wrapCallback=function(x){var b=se;return function(){var N=se;se=b;try{return x.apply(this,arguments)}finally{se=N}}}})(cc)),cc}var xd;function ky(){return xd||(xd=1,oc.exports=Wy()),oc.exports}var sc={exports:{}},_e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function Py(){if(vd)return _e;vd=1;var D=rc();function fe(w){var T="https://react.dev/errors/"+w;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)T+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+w+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var g={d:{f:W,r:function(){throw Error(fe(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},L=Symbol.for("react.portal");function K(w,T,k){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:z==null?null:""+z,children:w,containerInfo:T,implementation:k}}var ye=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Le(w,T){if(w==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return _e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,_e.createPortal=function(w,T){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(fe(299));return K(w,T,null,k)},_e.flushSync=function(w){var T=ye.T,k=g.p;try{if(ye.T=null,g.p=2,w)return w()}finally{ye.T=T,g.p=k,g.d.f()}},_e.preconnect=function(w,T){typeof w=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,g.d.C(w,T))},_e.prefetchDNS=function(w){typeof w=="string"&&g.d.D(w)},_e.preinit=function(w,T){if(typeof w=="string"&&T&&typeof T.as=="string"){var k=T.as,z=Le(k,T.crossOrigin),se=typeof T.integrity=="string"?T.integrity:void 0,Ke=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;k==="style"?g.d.S(w,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:z,integrity:se,fetchPriority:Ke}):k==="script"&&g.d.X(w,{crossOrigin:z,integrity:se,fetchPriority:Ke,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},_e.preinitModule=function(w,T){if(typeof w=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var k=Le(T.as,T.crossOrigin);g.d.M(w,{crossOrigin:k,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&g.d.M(w)},_e.preload=function(w,T){if(typeof w=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var k=T.as,z=Le(k,T.crossOrigin);g.d.L(w,k,{crossOrigin:z,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},_e.preloadModule=function(w,T){if(typeof w=="string")if(T){var k=Le(T.as,T.crossOrigin);g.d.m(w,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:k,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else g.d.m(w)},_e.requestFormReset=function(w){g.d.r(w)},_e.unstable_batchedUpdates=function(w,T){return w(T)},_e.useFormState=function(w,T,k){return ye.H.useFormState(w,T,k)},_e.useFormStatus=function(){return ye.H.useHostTransitionStatus()},_e.version="19.2.4",_e}var Sd;function $y(){if(Sd)return sc.exports;Sd=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(fe){console.error(fe)}}return D(),sc.exports=Py(),sc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function eg(){if(Ed)return vi;Ed=1;var D=ky(),fe=rc(),W=$y();function g(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function K(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ye(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Le(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(K(e)!==e)throw Error(g(188))}function T(e){var t=e.alternate;if(!t){if(t=K(e),t===null)throw Error(g(188));return t!==e?null:e}for(var l=e,a=t;;){var i=l.return;if(i===null)break;var n=i.alternate;if(n===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===l)return w(i),e;if(n===a)return w(i),t;n=n.sibling}throw Error(g(188))}if(l.return!==a.return)l=i,a=n;else{for(var u=!1,o=i.child;o;){if(o===l){u=!0,l=i,a=n;break}if(o===a){u=!0,a=i,l=n;break}o=o.sibling}if(!u){for(o=n.child;o;){if(o===l){u=!0,l=n,a=i;break}if(o===a){u=!0,a=n,l=i;break}o=o.sibling}if(!u)throw Error(g(189))}}if(l.alternate!==a)throw Error(g(190))}if(l.tag!==3)throw Error(g(188));return l.stateNode.current===l?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,se=Symbol.for("react.element"),Ke=Symbol.for("react.transitional.element"),Ge=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),Ot=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),Kt=Symbol.for("react.consumer"),we=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Vl=Symbol.for("react.memo_cache_sentinel"),bt=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=bt&&e[bt]||e["@@iterator"],typeof e=="function"?e:null)}var Sl=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case Je:return"Profiler";case Ot:return"StrictMode";case Et:return"Suspense";case He:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ge:return"Portal";case we:return e.displayName||"Context";case Kt:return(e._context.displayName||"Context")+".Consumer";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Rt(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Rt(e(t))}catch{}}return null}var pt=Array.isArray,x=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},te=[],ne=-1;function r(e){return{current:e}}function E(e){0>ne||(e.current=te[ne],te[ne]=null,ne--)}function A(e,t){ne++,te[ne]=e.current,e.current=t}var M=r(null),U=r(null),q=r(null),P=r(null);function Ne(e,t){switch(A(q,t),A(U,e),A(M,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uf(t),e=Gf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(M),A(M,e)}function ge(){E(M),E(U),E(q)}function Ca(e){e.memoizedState!==null&&A(P,e);var t=M.current,l=Gf(t,e.type);t!==l&&(A(U,e),A(M,l))}function Si(e){U.current===e&&(E(M),E(U)),P.current===e&&(E(P),yi._currentValue=N)}var qn,fc;function El(e){if(qn===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);qn=t&&t[1]||"",fc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qn+e+fc}var Vn=!1;function jn(e,t){if(!e||Vn)return"";Vn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(h){var y=h}Reflect.construct(e,[],S)}else{try{S.call()}catch(h){y=h}e.call(S.prototype)}}else{try{throw Error()}catch(h){y=h}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(h){if(h&&y&&typeof h.stack=="string")return[h.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),u=n[0],o=n[1];if(u&&o){var c=u.split(`
`),m=o.split(`
`);for(i=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;if(a===c.length||i===m.length)for(a=c.length-1,i=m.length-1;1<=a&&0<=i&&c[a]!==m[i];)i--;for(;1<=a&&0<=i;a--,i--)if(c[a]!==m[i]){if(a!==1||i!==1)do if(a--,i--,0>i||c[a]!==m[i]){var p=`
`+c[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=i);break}}}finally{Vn=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?El(l):""}function Ad(e,t){switch(e.tag){case 26:case 27:case 5:return El(e.type);case 16:return El("Lazy");case 13:return e.child!==t&&t!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return jn(e.type,!1);case 11:return jn(e.type.render,!1);case 1:return jn(e.type,!0);case 31:return El("Activity");default:return""}}function dc(e){try{var t="",l=null;do t+=Ad(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var In=Object.prototype.hasOwnProperty,Yn=D.unstable_scheduleCallback,Fn=D.unstable_cancelCallback,Cd=D.unstable_shouldYield,Dd=D.unstable_requestPaint,We=D.unstable_now,Md=D.unstable_getCurrentPriorityLevel,mc=D.unstable_ImmediatePriority,yc=D.unstable_UserBlockingPriority,Ei=D.unstable_NormalPriority,Od=D.unstable_LowPriority,gc=D.unstable_IdlePriority,Rd=D.log,wd=D.unstable_setDisableYieldValue,Da=null,ke=null;function Jt(e){if(typeof Rd=="function"&&wd(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Da,e)}catch{}}var Pe=Math.clz32?Math.clz32:zd,_d=Math.log,Ld=Math.LN2;function zd(e){return e>>>=0,e===0?32:31-(_d(e)/Ld|0)|0}var Ti=256,bi=262144,Ai=4194304;function Tl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var i=0,n=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~n,a!==0?i=Tl(a):(u&=o,u!==0?i=Tl(u):l||(l=o&~e,l!==0&&(i=Tl(l))))):(o=a&~n,o!==0?i=Tl(o):u!==0?i=Tl(u):l||(l=a&~e,l!==0&&(i=Tl(l)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,l=t&-t,n>=l||n===32&&(l&4194048)!==0)?t:i}function Ma(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Nd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hc(){var e=Ai;return Ai<<=1,(Ai&62914560)===0&&(Ai=4194304),e}function Xn(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bd(e,t,l,a,i,n){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,m=e.hiddenUpdates;for(l=u&~l;0<l;){var p=31-Pe(l),S=1<<p;o[p]=0,c[p]=-1;var y=m[p];if(y!==null)for(m[p]=null,p=0;p<y.length;p++){var h=y[p];h!==null&&(h.lane&=-536870913)}l&=~S}a!==0&&pc(e,a,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(u&~t))}function pc(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Pe(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function xc(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Pe(l),i=1<<a;i&t|e[a]&t&&(e[a]|=t),l&=~i}}function vc(e,t){var l=t&-t;return l=(l&42)!==0?1:Qn(l),(l&(e.suspendedLanes|t))!==0?0:l}function Qn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sc(){var e=b.p;return e!==0?e:(e=window.event,e===void 0?32:ud(e.type))}function Ec(e,t){var l=b.p;try{return b.p=e,t()}finally{b.p=l}}var Wt=Math.random().toString(36).slice(2),Ce="__reactFiber$"+Wt,je="__reactProps$"+Wt,jl="__reactContainer$"+Wt,Kn="__reactEvents$"+Wt,Ud="__reactListeners$"+Wt,Gd="__reactHandles$"+Wt,Tc="__reactResources$"+Wt,Ra="__reactMarker$"+Wt;function Jn(e){delete e[Ce],delete e[je],delete e[Kn],delete e[Ud],delete e[Gd]}function Il(e){var t=e[Ce];if(t)return t;for(var l=e.parentNode;l;){if(t=l[jl]||l[Ce]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Ff(e);e!==null;){if(l=e[Ce])return l;e=Ff(e)}return t}e=l,l=e.parentNode}return null}function Yl(e){if(e=e[Ce]||e[jl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(g(33))}function Fl(e){var t=e[Tc];return t||(t=e[Tc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function be(e){e[Ra]=!0}var bc=new Set,Ac={};function bl(e,t){Xl(e,t),Xl(e+"Capture",t)}function Xl(e,t){for(Ac[e]=t,e=0;e<t.length;e++)bc.add(t[e])}var Hd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cc={},Dc={};function qd(e){return In.call(Dc,e)?!0:In.call(Cc,e)?!1:Hd.test(e)?Dc[e]=!0:(Cc[e]=!0,!1)}function Di(e,t,l){if(qd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Mi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function wt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,n=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){l=""+u,n.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wn(e){if(!e._valueTracker){var t=Mc(e)?"checked":"value";e._valueTracker=Vd(e,t,""+e[t])}}function Oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Mc(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jd=/[\n"\\]/g;function ct(e){return e.replace(jd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kn(e,t,l,a,i,n,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Pn(e,u,ot(t)):l!=null?Pn(e,u,ot(l)):a!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ot(o):e.removeAttribute("name")}function Rc(e,t,l,a,i,n,u,o){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Wn(e);return}l=l!=null?""+ot(l):"",t=t!=null?""+ot(t):l,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Wn(e)}function Pn(e,t,l){t==="number"&&Oi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Ql(e,t,l,a){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ot(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wc(e,t,l){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ot(l):""}function _c(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(g(92));if(pt(a)){if(1<a.length)throw Error(g(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ot(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Wn(e)}function Zl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Id=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Id.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function zc(e,t,l){if(t!=null&&typeof t!="object")throw Error(g(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&l[i]!==a&&Lc(e,i,a)}else for(var n in t)t.hasOwnProperty(n)&&Lc(e,n,t[n])}function $n(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return Fd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kl=null,Jl=null;function Nc(e){var t=Yl(e);if(t&&(e=t.stateNode)){var l=e[je]||null;e:switch(e=t.stateNode,t.type){case"input":if(kn(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ct(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var i=a[je]||null;if(!i)throw Error(g(90));kn(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Oc(a)}break e;case"textarea":wc(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Ql(e,!!l.multiple,t,!1)}}}var lu=!1;function Bc(e,t,l){if(lu)return e(t,l);lu=!0;try{var a=e(t);return a}finally{if(lu=!1,(Kl!==null||Jl!==null)&&(pn(),Kl&&(t=Kl,e=Jl,Jl=Kl=null,Nc(t),e)))for(t=0;t<e.length;t++)Nc(e[t])}}function _a(e,t){var l=e.stateNode;if(l===null)return null;var a=l[je]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(g(231,t,typeof l));return l}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Lt)try{var La={};Object.defineProperty(La,"passive",{get:function(){au=!0}}),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)}catch{au=!1}var kt=null,iu=null,wi=null;function Uc(){if(wi)return wi;var e,t=iu,l=t.length,a,i="value"in kt?kt.value:kt.textContent,n=i.length;for(e=0;e<l&&t[e]===i[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===i[n-a];a++);return wi=i.slice(e,1<a?1-a:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function Gc(){return!1}function Ie(e){function t(l,a,i,n,u){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(n):n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Li:Gc,this.isPropagationStopped=Gc,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var Al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Ie(Al),za=z({},Al,{view:0,detail:0}),Xd=Ie(za),nu,uu,Na,Ni=z({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Na&&(Na&&e.type==="mousemove"?(nu=e.screenX-Na.screenX,uu=e.screenY-Na.screenY):uu=nu=0,Na=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Hc=Ie(Ni),Qd=z({},Ni,{dataTransfer:0}),Zd=Ie(Qd),Kd=z({},za,{relatedTarget:0}),ou=Ie(Kd),Jd=z({},Al,{animationName:0,elapsedTime:0,pseudoElement:0}),Wd=Ie(Jd),kd=z({},Al,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=Ie(kd),$d=z({},Al,{data:0}),qc=Ie($d),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function cu(){return am}var im=z({},za,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nm=Ie(im),um=z({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=Ie(um),om=z({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),cm=Ie(om),sm=z({},Al,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Ie(sm),fm=z({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Ie(fm),mm=z({},Al,{newState:0,oldState:0}),ym=Ie(mm),gm=[9,13,27,32],su=Lt&&"CompositionEvent"in window,Ba=null;Lt&&"documentMode"in document&&(Ba=document.documentMode);var hm=Lt&&"TextEvent"in window&&!Ba,jc=Lt&&(!su||Ba&&8<Ba&&11>=Ba),Ic=" ",Yc=!1;function Fc(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wl=!1;function pm(e,t){switch(e){case"compositionend":return Xc(t);case"keypress":return t.which!==32?null:(Yc=!0,Ic);case"textInput":return e=t.data,e===Ic&&Yc?null:e;default:return null}}function xm(e,t){if(Wl)return e==="compositionend"||!su&&Fc(e,t)?(e=Uc(),wi=iu=kt=null,Wl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jc&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Zc(e,t,l,a){Kl?Jl?Jl.push(a):Jl=[a]:Kl=a,t=An(t,"onChange"),0<t.length&&(l=new zi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ua=null,Ga=null;function Sm(e){wf(e,0)}function Bi(e){var t=wa(e);if(Oc(t))return e}function Kc(e,t){if(e==="change")return t}var Jc=!1;if(Lt){var ru;if(Lt){var fu="oninput"in document;if(!fu){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),fu=typeof Wc.oninput=="function"}ru=fu}else ru=!1;Jc=ru&&(!document.documentMode||9<document.documentMode)}function kc(){Ua&&(Ua.detachEvent("onpropertychange",Pc),Ga=Ua=null)}function Pc(e){if(e.propertyName==="value"&&Bi(Ga)){var t=[];Zc(t,Ga,e,tu(e)),Bc(Sm,t)}}function Em(e,t,l){e==="focusin"?(kc(),Ua=t,Ga=l,Ua.attachEvent("onpropertychange",Pc)):e==="focusout"&&kc()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(Ga)}function bm(e,t){if(e==="click")return Bi(t)}function Am(e,t){if(e==="input"||e==="change")return Bi(t)}function Cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Cm;function Ha(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!In.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function $c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function es(e,t){var l=$c(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$c(l)}}function ts(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ts(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ls(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Oi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Oi(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dm=Lt&&"documentMode"in document&&11>=document.documentMode,kl=null,mu=null,qa=null,yu=!1;function as(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;yu||kl==null||kl!==Oi(a)||(a=kl,"selectionStart"in a&&du(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qa&&Ha(qa,a)||(qa=a,a=An(mu,"onSelect"),0<a.length&&(t=new zi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=kl)))}function Cl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Pl={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},gu={},is={};Lt&&(is=document.createElement("div").style,"AnimationEvent"in window||(delete Pl.animationend.animation,delete Pl.animationiteration.animation,delete Pl.animationstart.animation),"TransitionEvent"in window||delete Pl.transitionend.transition);function Dl(e){if(gu[e])return gu[e];if(!Pl[e])return e;var t=Pl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in is)return gu[e]=t[l];return e}var ns=Dl("animationend"),us=Dl("animationiteration"),os=Dl("animationstart"),Mm=Dl("transitionrun"),Om=Dl("transitionstart"),Rm=Dl("transitioncancel"),cs=Dl("transitionend"),ss=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function xt(e,t){ss.set(e,t),bl(t,[e])}var Ui=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},st=[],$l=0,pu=0;function Gi(){for(var e=$l,t=pu=$l=0;t<e;){var l=st[t];st[t++]=null;var a=st[t];st[t++]=null;var i=st[t];st[t++]=null;var n=st[t];if(st[t++]=null,a!==null&&i!==null){var u=a.pending;u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i}n!==0&&rs(l,i,n)}}function Hi(e,t,l,a){st[$l++]=e,st[$l++]=t,st[$l++]=l,st[$l++]=a,pu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function xu(e,t,l,a){return Hi(e,t,l,a),qi(e)}function Ml(e,t){return Hi(e,null,null,t),qi(e)}function rs(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var i=!1,n=e.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-Pe(l),e=n.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=l|536870912),n):null}function qi(e){if(50<oi)throw oi=0,Oo=null,Error(g(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ea={};function wm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,l,a){return new wm(e,t,l,a)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zt(e,t){var l=e.alternate;return l===null?(l=et(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function fs(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vi(e,t,l,a,i,n){var u=0;if(a=e,typeof e=="function")vu(e)&&(u=1);else if(typeof e=="string")u=By(e,l,M.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,l,t,i),e.elementType=Tt,e.lanes=n,e;case ze:return Ol(l.children,i,n,t);case Ot:u=8,i|=24;break;case Je:return e=et(12,l,t,i|2),e.elementType=Je,e.lanes=n,e;case Et:return e=et(13,l,t,i),e.elementType=Et,e.lanes=n,e;case He:return e=et(19,l,t,i),e.elementType=He,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case we:u=10;break e;case Kt:u=9;break e;case ut:u=11;break e;case F:u=14;break e;case qe:u=16,a=null;break e}u=29,l=Error(g(130,e===null?"null":typeof e,"")),a=null}return t=et(u,l,t,i),t.elementType=e,t.type=a,t.lanes=n,t}function Ol(e,t,l,a){return e=et(7,e,a,t),e.lanes=l,e}function Su(e,t,l){return e=et(6,e,null,t),e.lanes=l,e}function ds(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Eu(e,t,l){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ms=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var l=ms.get(e);return l!==void 0?l:(t={value:e,source:t,stack:dc(t)},ms.set(e,t),t)}return{value:e,source:t,stack:dc(t)}}var ta=[],la=0,ji=null,Va=0,ft=[],dt=0,Pt=null,At=1,Ct="";function Nt(e,t){ta[la++]=Va,ta[la++]=ji,ji=e,Va=t}function ys(e,t,l){ft[dt++]=At,ft[dt++]=Ct,ft[dt++]=Pt,Pt=e;var a=At;e=Ct;var i=32-Pe(a)-1;a&=~(1<<i),l+=1;var n=32-Pe(t)+i;if(30<n){var u=i-i%5;n=(a&(1<<u)-1).toString(32),a>>=u,i-=u,At=1<<32-Pe(t)+i|l<<i|a,Ct=n+e}else At=1<<n|l<<i|a,Ct=e}function Tu(e){e.return!==null&&(Nt(e,1),ys(e,1,0))}function bu(e){for(;e===ji;)ji=ta[--la],ta[la]=null,Va=ta[--la],ta[la]=null;for(;e===Pt;)Pt=ft[--dt],ft[dt]=null,Ct=ft[--dt],ft[dt]=null,At=ft[--dt],ft[dt]=null}function gs(e,t){ft[dt++]=At,ft[dt++]=Ct,ft[dt++]=Pt,At=t.id,Ct=t.overflow,Pt=e}var De=null,oe=null,X=!1,$t=null,mt=!1,Au=Error(g(519));function el(e){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ja(rt(t,e)),Au}function hs(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ce]=e,t[je]=a,l){case"dialog":j("cancel",t),j("close",t);break;case"iframe":case"object":case"embed":j("load",t);break;case"video":case"audio":for(l=0;l<si.length;l++)j(si[l],t);break;case"source":j("error",t);break;case"img":case"image":case"link":j("error",t),j("load",t);break;case"details":j("toggle",t);break;case"input":j("invalid",t),Rc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":j("invalid",t);break;case"textarea":j("invalid",t),_c(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Nf(t.textContent,l)?(a.popover!=null&&(j("beforetoggle",t),j("toggle",t)),a.onScroll!=null&&j("scroll",t),a.onScrollEnd!=null&&j("scrollend",t),a.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||el(e,!0)}function ps(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:De=De.return}}function aa(e){if(e!==De)return!1;if(!X)return ps(e),X=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Yo(e.type,e.memoizedProps)),l=!l),l&&oe&&el(e),ps(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));oe=Yf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));oe=Yf(e)}else t===27?(t=oe,yl(e.type)?(e=Ko,Ko=null,oe=e):oe=t):oe=De?gt(e.stateNode.nextSibling):null;return!0}function Rl(){oe=De=null,X=!1}function Cu(){var e=$t;return e!==null&&(Qe===null?Qe=e:Qe.push.apply(Qe,e),$t=null),e}function ja(e){$t===null?$t=[e]:$t.push(e)}var Du=r(null),wl=null,Bt=null;function tl(e,t,l){A(Du,t._currentValue),t._currentValue=l}function Ut(e){e._currentValue=Du.current,E(Du)}function Mu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Ou(e,t,l,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;e:for(;n!==null;){var o=n;n=i;for(var c=0;c<t.length;c++)if(o.context===t[c]){n.lanes|=l,o=n.alternate,o!==null&&(o.lanes|=l),Mu(n.return,l,e),a||(u=null);break e}n=o.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(g(341));u.lanes|=l,n=u.alternate,n!==null&&(n.lanes|=l),Mu(u,l,e),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function ia(e,t,l,a){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var o=i.type;$e(i.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(i===P.current){if(u=i.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(yi):e=[yi])}i=i.return}e!==null&&Ou(t,e,l,a),t.flags|=262144}function Ii(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _l(e){wl=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Me(e){return xs(wl,e)}function Yi(e,t){return wl===null&&_l(e),xs(e,t)}function xs(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Bt===null){if(e===null)throw Error(g(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return l}var _m=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Lm=D.unstable_scheduleCallback,zm=D.unstable_NormalPriority,xe={$$typeof:we,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new _m,data:new Map,refCount:0}}function Ia(e){e.refCount--,e.refCount===0&&Lm(zm,function(){e.controller.abort()})}var Ya=null,wu=0,na=0,ua=null;function Nm(e,t){if(Ya===null){var l=Ya=[];wu=0,na=No(),ua={status:"pending",value:void 0,then:function(a){l.push(a)}}}return wu++,t.then(vs,vs),t}function vs(){if(--wu===0&&Ya!==null){ua!==null&&(ua.status="fulfilled");var e=Ya;Ya=null,na=0,ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Ss=x.S;x.S=function(e,t){af=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nm(e,t),Ss!==null&&Ss(e,t)};var Ll=r(null);function _u(){var e=Ll.current;return e!==null?e:ue.pooledCache}function Fi(e,t){t===null?A(Ll,Ll.current):A(Ll,t.pool)}function Es(){var e=_u();return e===null?null:{parent:xe._currentValue,pool:e}}var oa=Error(g(460)),Lu=Error(g(474)),Xi=Error(g(542)),Qi={then:function(){}};function Ts(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bs(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(_t,_t),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cs(e),e;default:if(typeof t.status=="string")t.then(_t,_t);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cs(e),e}throw Nl=t,oa}}function zl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Nl=l,oa):l}}var Nl=null;function As(){if(Nl===null)throw Error(g(459));var e=Nl;return Nl=null,e}function Cs(e){if(e===oa||e===Xi)throw Error(g(483))}var ca=null,Fa=0;function Zi(e){var t=Fa;return Fa+=1,ca===null&&(ca=[]),bs(ca,e,t)}function Xa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ki(e,t){throw t.$$typeof===se?Error(g(525)):(e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ds(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function l(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function a(f){for(var s=new Map;f!==null;)f.key!==null?s.set(f.key,f):s.set(f.index,f),f=f.sibling;return s}function i(f,s){return f=zt(f,s),f.index=0,f.sibling=null,f}function n(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=67108866,s):d):(f.flags|=67108866,s)):(f.flags|=1048576,s)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,s,d,v){return s===null||s.tag!==6?(s=Su(d,f.mode,v),s.return=f,s):(s=i(s,d),s.return=f,s)}function c(f,s,d,v){var R=d.type;return R===ze?p(f,s,d.props.children,v,d.key):s!==null&&(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qe&&zl(R)===s.type)?(s=i(s,d.props),Xa(s,d),s.return=f,s):(s=Vi(d.type,d.key,d.props,null,f.mode,v),Xa(s,d),s.return=f,s)}function m(f,s,d,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Eu(d,f.mode,v),s.return=f,s):(s=i(s,d.children||[]),s.return=f,s)}function p(f,s,d,v,R){return s===null||s.tag!==7?(s=Ol(d,f.mode,v,R),s.return=f,s):(s=i(s,d),s.return=f,s)}function S(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Su(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Ke:return d=Vi(s.type,s.key,s.props,null,f.mode,d),Xa(d,s),d.return=f,d;case Ge:return s=Eu(s,f.mode,d),s.return=f,s;case qe:return s=zl(s),S(f,s,d)}if(pt(s)||Ve(s))return s=Ol(s,f.mode,d,null),s.return=f,s;if(typeof s.then=="function")return S(f,Zi(s),d);if(s.$$typeof===we)return S(f,Yi(f,s),d);Ki(f,s)}return null}function y(f,s,d,v){var R=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return R!==null?null:o(f,s,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ke:return d.key===R?c(f,s,d,v):null;case Ge:return d.key===R?m(f,s,d,v):null;case qe:return d=zl(d),y(f,s,d,v)}if(pt(d)||Ve(d))return R!==null?null:p(f,s,d,v,null);if(typeof d.then=="function")return y(f,s,Zi(d),v);if(d.$$typeof===we)return y(f,s,Yi(f,d),v);Ki(f,d)}return null}function h(f,s,d,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(d)||null,o(s,f,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ke:return f=f.get(v.key===null?d:v.key)||null,c(s,f,v,R);case Ge:return f=f.get(v.key===null?d:v.key)||null,m(s,f,v,R);case qe:return v=zl(v),h(f,s,d,v,R)}if(pt(v)||Ve(v))return f=f.get(d)||null,p(s,f,v,R,null);if(typeof v.then=="function")return h(f,s,d,Zi(v),R);if(v.$$typeof===we)return h(f,s,d,Yi(s,v),R);Ki(s,v)}return null}function C(f,s,d,v){for(var R=null,Q=null,O=s,H=s=0,Y=null;O!==null&&H<d.length;H++){O.index>H?(Y=O,O=null):Y=O.sibling;var Z=y(f,O,d[H],v);if(Z===null){O===null&&(O=Y);break}e&&O&&Z.alternate===null&&t(f,O),s=n(Z,s,H),Q===null?R=Z:Q.sibling=Z,Q=Z,O=Y}if(H===d.length)return l(f,O),X&&Nt(f,H),R;if(O===null){for(;H<d.length;H++)O=S(f,d[H],v),O!==null&&(s=n(O,s,H),Q===null?R=O:Q.sibling=O,Q=O);return X&&Nt(f,H),R}for(O=a(O);H<d.length;H++)Y=h(O,f,H,d[H],v),Y!==null&&(e&&Y.alternate!==null&&O.delete(Y.key===null?H:Y.key),s=n(Y,s,H),Q===null?R=Y:Q.sibling=Y,Q=Y);return e&&O.forEach(function(vl){return t(f,vl)}),X&&Nt(f,H),R}function _(f,s,d,v){if(d==null)throw Error(g(151));for(var R=null,Q=null,O=s,H=s=0,Y=null,Z=d.next();O!==null&&!Z.done;H++,Z=d.next()){O.index>H?(Y=O,O=null):Y=O.sibling;var vl=y(f,O,Z.value,v);if(vl===null){O===null&&(O=Y);break}e&&O&&vl.alternate===null&&t(f,O),s=n(vl,s,H),Q===null?R=vl:Q.sibling=vl,Q=vl,O=Y}if(Z.done)return l(f,O),X&&Nt(f,H),R;if(O===null){for(;!Z.done;H++,Z=d.next())Z=S(f,Z.value,v),Z!==null&&(s=n(Z,s,H),Q===null?R=Z:Q.sibling=Z,Q=Z);return X&&Nt(f,H),R}for(O=a(O);!Z.done;H++,Z=d.next())Z=h(O,f,H,Z.value,v),Z!==null&&(e&&Z.alternate!==null&&O.delete(Z.key===null?H:Z.key),s=n(Z,s,H),Q===null?R=Z:Q.sibling=Z,Q=Z);return e&&O.forEach(function(Qy){return t(f,Qy)}),X&&Nt(f,H),R}function ie(f,s,d,v){if(typeof d=="object"&&d!==null&&d.type===ze&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ke:e:{for(var R=d.key;s!==null;){if(s.key===R){if(R=d.type,R===ze){if(s.tag===7){l(f,s.sibling),v=i(s,d.props.children),v.return=f,f=v;break e}}else if(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qe&&zl(R)===s.type){l(f,s.sibling),v=i(s,d.props),Xa(v,d),v.return=f,f=v;break e}l(f,s);break}else t(f,s);s=s.sibling}d.type===ze?(v=Ol(d.props.children,f.mode,v,d.key),v.return=f,f=v):(v=Vi(d.type,d.key,d.props,null,f.mode,v),Xa(v,d),v.return=f,f=v)}return u(f);case Ge:e:{for(R=d.key;s!==null;){if(s.key===R)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){l(f,s.sibling),v=i(s,d.children||[]),v.return=f,f=v;break e}else{l(f,s);break}else t(f,s);s=s.sibling}v=Eu(d,f.mode,v),v.return=f,f=v}return u(f);case qe:return d=zl(d),ie(f,s,d,v)}if(pt(d))return C(f,s,d,v);if(Ve(d)){if(R=Ve(d),typeof R!="function")throw Error(g(150));return d=R.call(d),_(f,s,d,v)}if(typeof d.then=="function")return ie(f,s,Zi(d),v);if(d.$$typeof===we)return ie(f,s,Yi(f,d),v);Ki(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,s!==null&&s.tag===6?(l(f,s.sibling),v=i(s,d),v.return=f,f=v):(l(f,s),v=Su(d,f.mode,v),v.return=f,f=v),u(f)):l(f,s)}return function(f,s,d,v){try{Fa=0;var R=ie(f,s,d,v);return ca=null,R}catch(O){if(O===oa||O===Xi)throw O;var Q=et(29,O,null,f.mode);return Q.lanes=v,Q.return=f,Q}finally{}}}var Bl=Ds(!0),Ms=Ds(!1),ll=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function al(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function il(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(J&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=qi(e),rs(e,null,l),t}return Hi(e,a,t,l),qi(e)}function Qa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,xc(e,l)}}function Bu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,l=l.next}while(l!==null);n===null?i=n=t:n=n.next=t}else i=n=t;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Uu=!1;function Za(){if(Uu){var e=ua;if(e!==null)throw e}}function Ka(e,t,l,a){Uu=!1;var i=e.updateQueue;ll=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,m=c.next;c.next=null,u===null?n=m:u.next=m,u=c;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==u&&(o===null?p.firstBaseUpdate=m:o.next=m,p.lastBaseUpdate=c))}if(n!==null){var S=i.baseState;u=0,p=m=c=null,o=n;do{var y=o.lane&-536870913,h=y!==o.lane;if(h?(I&y)===y:(a&y)===y){y!==0&&y===na&&(Uu=!0),p!==null&&(p=p.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var C=e,_=o;y=t;var ie=l;switch(_.tag){case 1:if(C=_.payload,typeof C=="function"){S=C.call(ie,S,y);break e}S=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=_.payload,y=typeof C=="function"?C.call(ie,S,y):C,y==null)break e;S=z({},S,y);break e;case 2:ll=!0}}y=o.callback,y!==null&&(e.flags|=64,h&&(e.flags|=8192),h=i.callbacks,h===null?i.callbacks=[y]:h.push(y))}else h={lane:y,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(m=p=h,c=S):p=p.next=h,u|=y;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);p===null&&(c=S),i.baseState=c,i.firstBaseUpdate=m,i.lastBaseUpdate=p,n===null&&(i.shared.lanes=0),sl|=u,e.lanes=u,e.memoizedState=S}}function Os(e,t){if(typeof e!="function")throw Error(g(191,e));e.call(t)}function Rs(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Os(l[e],t)}var sa=r(null),Ji=r(0);function ws(e,t){e=Xt,A(Ji,e),A(sa,t),Xt=e|t.baseLanes}function Gu(){A(Ji,Xt),A(sa,sa.current)}function Hu(){Xt=Ji.current,E(sa),E(Ji)}var tt=r(null),yt=null;function nl(e){var t=e.alternate;A(he,he.current&1),A(tt,e),yt===null&&(t===null||sa.current!==null||t.memoizedState!==null)&&(yt=e)}function qu(e){A(he,he.current),A(tt,e),yt===null&&(yt=e)}function _s(e){e.tag===22?(A(he,he.current),A(tt,e),yt===null&&(yt=e)):ul()}function ul(){A(he,he.current),A(tt,tt.current)}function lt(e){E(tt),yt===e&&(yt=null),E(he)}var he=r(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Qo(l)||Zo(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,G=null,le=null,ve=null,ki=!1,ra=!1,Ul=!1,Pi=0,Ja=0,fa=null,Um=0;function de(){throw Error(g(321))}function Vu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!$e(e[l],t[l]))return!1;return!0}function ju(e,t,l,a,i,n){return Gt=n,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?yr:lo,Ul=!1,n=l(a,i),Ul=!1,ra&&(n=zs(t,l,a,i)),Ls(e),n}function Ls(e){x.H=Pa;var t=le!==null&&le.next!==null;if(Gt=0,ve=le=G=null,ki=!1,Ja=0,fa=null,t)throw Error(g(300));e===null||Se||(e=e.dependencies,e!==null&&Ii(e)&&(Se=!0))}function zs(e,t,l,a){G=e;var i=0;do{if(ra&&(fa=null),Ja=0,ra=!1,25<=i)throw Error(g(301));if(i+=1,ve=le=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}x.H=gr,n=t(l,a)}while(ra);return n}function Gm(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?Wa(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(G.flags|=1024),t}function Iu(){var e=Pi!==0;return Pi=0,e}function Yu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Fu(e){if(ki){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ki=!1}Gt=0,ve=le=G=null,ra=!1,Ja=Pi=0,fa=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?G.memoizedState=ve=e:ve=ve.next=e,ve}function pe(){if(le===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ve===null?G.memoizedState:ve.next;if(t!==null)ve=t,le=e;else{if(e===null)throw G.alternate===null?Error(g(467)):Error(g(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ve===null?G.memoizedState=ve=e:ve=ve.next=e}return ve}function $i(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wa(e){var t=Ja;return Ja+=1,fa===null&&(fa=[]),e=bs(fa,e,t),t=G,(ve===null?t.memoizedState:ve.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?yr:lo),e}function en(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wa(e);if(e.$$typeof===we)return Me(e)}throw Error(g(438,String(e)))}function Xu(e){var t=null,l=G.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=G.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=$i(),G.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Vl;return t.index++,l}function Ht(e,t){return typeof t=="function"?t(e):t}function tn(e){var t=pe();return Qu(t,le,e)}function Qu(e,t,l){var a=e.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=l;var i=e.baseQueue,n=a.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}t.baseQueue=i=n,a.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var o=u=null,c=null,m=t,p=!1;do{var S=m.lane&-536870913;if(S!==m.lane?(I&S)===S:(Gt&S)===S){var y=m.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),S===na&&(p=!0);else if((Gt&y)===y){m=m.next,y===na&&(p=!0);continue}else S={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},c===null?(o=c=S,u=n):c=c.next=S,G.lanes|=y,sl|=y;S=m.action,Ul&&l(n,S),n=m.hasEagerState?m.eagerState:l(n,S)}else y={lane:S,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},c===null?(o=c=y,u=n):c=c.next=y,G.lanes|=S,sl|=S;m=m.next}while(m!==null&&m!==t);if(c===null?u=n:c.next=o,!$e(n,e.memoizedState)&&(Se=!0,p&&(l=ua,l!==null)))throw l;e.memoizedState=n,e.baseState=u,e.baseQueue=c,a.lastRenderedState=n}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Zu(e){var t=pe(),l=t.queue;if(l===null)throw Error(g(311));l.lastRenderedReducer=e;var a=l.dispatch,i=l.pending,n=t.memoizedState;if(i!==null){l.pending=null;var u=i=i.next;do n=e(n,u.action),u=u.next;while(u!==i);$e(n,t.memoizedState)||(Se=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),l.lastRenderedState=n}return[n,a]}function Ns(e,t,l){var a=G,i=pe(),n=X;if(n){if(l===void 0)throw Error(g(407));l=l()}else l=t();var u=!$e((le||i).memoizedState,l);if(u&&(i.memoizedState=l,Se=!0),i=i.queue,Wu(Gs.bind(null,a,i,e),[e]),i.getSnapshot!==t||u||ve!==null&&ve.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},Us.bind(null,a,i,l,t),null),ue===null)throw Error(g(349));n||(Gt&127)!==0||Bs(a,t,l)}return l}function Bs(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=G.updateQueue,t===null?(t=$i(),G.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Us(e,t,l,a){t.value=l,t.getSnapshot=a,Hs(t)&&qs(e)}function Gs(e,t,l){return l(function(){Hs(t)&&qs(e)})}function Hs(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!$e(e,l)}catch{return!0}}function qs(e){var t=Ml(e,2);t!==null&&Ze(t,e,2)}function Ku(e){var t=Be();if(typeof e=="function"){var l=e;if(e=l(),Ul){Jt(!0);try{l()}finally{Jt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},t}function Vs(e,t,l,a){return e.baseState=l,Qu(e,le,typeof a=="function"?a:Ht)}function Hm(e,t,l,a,i){if(nn(e))throw Error(g(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};x.T!==null?l(!0):n.isTransition=!1,a(n),l=t.pending,l===null?(n.next=t.pending=n,js(t,n)):(n.next=l.next,t.pending=l.next=n)}}function js(e,t){var l=t.action,a=t.payload,i=e.state;if(t.isTransition){var n=x.T,u={};x.T=u;try{var o=l(i,a),c=x.S;c!==null&&c(u,o),Is(e,t,o)}catch(m){Ju(e,t,m)}finally{n!==null&&u.types!==null&&(n.types=u.types),x.T=n}}else try{n=l(i,a),Is(e,t,n)}catch(m){Ju(e,t,m)}}function Is(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Ys(e,t,a)},function(a){return Ju(e,t,a)}):Ys(e,t,l)}function Ys(e,t,l){t.status="fulfilled",t.value=l,Fs(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,js(e,l)))}function Ju(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Fs(t),t=t.next;while(t!==a)}e.action=null}function Fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xs(e,t){return t}function Qs(e,t){if(X){var l=ue.formState;if(l!==null){e:{var a=G;if(X){if(oe){t:{for(var i=oe,n=mt;i.nodeType!==8;){if(!n){i=null;break t}if(i=gt(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){oe=gt(i.nextSibling),a=i.data==="F!";break e}}el(a)}a=!1}a&&(t=l[0])}}return l=Be(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},l.queue=a,l=fr.bind(null,G,a),a.dispatch=l,a=Ku(!1),n=to.bind(null,G,!1,a.queue),a=Be(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,l=Hm.bind(null,G,i,n,l),i.dispatch=l,a.memoizedState=e,[t,l,!1]}function Zs(e){var t=pe();return Ks(t,le,e)}function Ks(e,t,l){if(t=Qu(e,t,Xs)[0],e=tn(Ht)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Wa(t)}catch(u){throw u===oa?Xi:u}else a=t;t=pe();var i=t.queue,n=i.dispatch;return l!==t.memoizedState&&(G.flags|=2048,da(9,{destroy:void 0},qm.bind(null,i,l),null)),[a,n,e]}function qm(e,t){e.action=t}function Js(e){var t=pe(),l=le;if(l!==null)return Ks(t,l,e);pe(),t=t.memoizedState,l=pe();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function da(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=G.updateQueue,t===null&&(t=$i(),G.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Ws(){return pe().memoizedState}function ln(e,t,l,a){var i=Be();G.flags|=e,i.memoizedState=da(1|t,{destroy:void 0},l,a===void 0?null:a)}function an(e,t,l,a){var i=pe();a=a===void 0?null:a;var n=i.memoizedState.inst;le!==null&&a!==null&&Vu(a,le.memoizedState.deps)?i.memoizedState=da(t,n,l,a):(G.flags|=e,i.memoizedState=da(1|t,n,l,a))}function ks(e,t){ln(8390656,8,e,t)}function Wu(e,t){an(2048,8,e,t)}function Vm(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=$i(),G.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Ps(e){var t=pe().memoizedState;return Vm({ref:t,nextImpl:e}),function(){if((J&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function $s(e,t){return an(4,2,e,t)}function er(e,t){return an(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lr(e,t,l){l=l!=null?l.concat([e]):null,an(4,4,tr.bind(null,t,e),l)}function ku(){}function ar(e,t){var l=pe();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Vu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function ir(e,t){var l=pe();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Vu(t,a[1]))return a[0];if(a=e(),Ul){Jt(!0);try{e()}finally{Jt(!1)}}return l.memoizedState=[a,t],a}function Pu(e,t,l){return l===void 0||(Gt&1073741824)!==0&&(I&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=uf(),G.lanes|=e,sl|=e,l)}function nr(e,t,l,a){return $e(l,t)?l:sa.current!==null?(e=Pu(e,l,a),$e(e,t)||(Se=!0),e):(Gt&42)===0||(Gt&1073741824)!==0&&(I&261930)===0?(Se=!0,e.memoizedState=l):(e=uf(),G.lanes|=e,sl|=e,t)}function ur(e,t,l,a,i){var n=b.p;b.p=n!==0&&8>n?n:8;var u=x.T,o={};x.T=o,to(e,!1,t,l);try{var c=i(),m=x.S;if(m!==null&&m(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=Bm(c,a);ka(e,t,p,nt(e))}else ka(e,t,a,nt(e))}catch(S){ka(e,t,{then:function(){},status:"rejected",reason:S},nt())}finally{b.p=n,u!==null&&o.types!==null&&(u.types=o.types),x.T=u}}function jm(){}function $u(e,t,l,a){if(e.tag!==5)throw Error(g(476));var i=or(e).queue;ur(e,i,t,N,l===null?jm:function(){return cr(e),l(a)})}function or(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:N},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cr(e){var t=or(e);t.next===null&&(t=e.alternate.memoizedState),ka(e,t.next.queue,{},nt())}function eo(){return Me(yi)}function sr(){return pe().memoizedState}function rr(){return pe().memoizedState}function Im(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=nt();e=al(l);var a=il(t,e,l);a!==null&&(Ze(a,t,l),Qa(a,t,l)),t={cache:Ru()},e.payload=t;return}t=t.return}}function Ym(e,t,l){var a=nt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},nn(e)?dr(t,l):(l=xu(e,t,l,a),l!==null&&(Ze(l,e,a),mr(l,t,a)))}function fr(e,t,l){var a=nt();ka(e,t,l,a)}function ka(e,t,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(nn(e))dr(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var u=t.lastRenderedState,o=n(u,l);if(i.hasEagerState=!0,i.eagerState=o,$e(o,u))return Hi(e,t,i,0),ue===null&&Gi(),!1}catch{}finally{}if(l=xu(e,t,i,a),l!==null)return Ze(l,e,a),mr(l,t,a),!0}return!1}function to(e,t,l,a){if(a={lane:2,revertLane:No(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},nn(e)){if(t)throw Error(g(479))}else t=xu(e,l,a,2),t!==null&&Ze(t,e,2)}function nn(e){var t=e.alternate;return e===G||t!==null&&t===G}function dr(e,t){ra=ki=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function mr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,xc(e,l)}}var Pa={readContext:Me,use:en,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Pa.useEffectEvent=de;var yr={readContext:Me,use:en,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:ks,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ln(4194308,4,tr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ln(4194308,4,e,t)},useInsertionEffect:function(e,t){ln(4,2,e,t)},useMemo:function(e,t){var l=Be();t=t===void 0?null:t;var a=e();if(Ul){Jt(!0);try{e()}finally{Jt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Be();if(l!==void 0){var i=l(t);if(Ul){Jt(!0);try{l(t)}finally{Jt(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Ym.bind(null,G,e),[a.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:function(e){e=Ku(e);var t=e.queue,l=fr.bind(null,G,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:ku,useDeferredValue:function(e,t){var l=Be();return Pu(l,e,t)},useTransition:function(){var e=Ku(!1);return e=ur.bind(null,G,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=G,i=Be();if(X){if(l===void 0)throw Error(g(407));l=l()}else{if(l=t(),ue===null)throw Error(g(349));(I&127)!==0||Bs(a,t,l)}i.memoizedState=l;var n={value:l,getSnapshot:t};return i.queue=n,ks(Gs.bind(null,a,n,e),[e]),a.flags|=2048,da(9,{destroy:void 0},Us.bind(null,a,n,l,t),null),l},useId:function(){var e=Be(),t=ue.identifierPrefix;if(X){var l=Ct,a=At;l=(a&~(1<<32-Pe(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Pi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Um++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:Qs,useActionState:Qs,useOptimistic:function(e){var t=Be();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=to.bind(null,G,!0,l),l.dispatch=t,[e,t]},useMemoCache:Xu,useCacheRefresh:function(){return Be().memoizedState=Im.bind(null,G)},useEffectEvent:function(e){var t=Be(),l={impl:e};return t.memoizedState=l,function(){if((J&2)!==0)throw Error(g(440));return l.impl.apply(void 0,arguments)}}},lo={readContext:Me,use:en,useCallback:ar,useContext:Me,useEffect:Wu,useImperativeHandle:lr,useInsertionEffect:$s,useLayoutEffect:er,useMemo:ir,useReducer:tn,useRef:Ws,useState:function(){return tn(Ht)},useDebugValue:ku,useDeferredValue:function(e,t){var l=pe();return nr(l,le.memoizedState,e,t)},useTransition:function(){var e=tn(Ht)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:Ns,useId:sr,useHostTransitionStatus:eo,useFormState:Zs,useActionState:Zs,useOptimistic:function(e,t){var l=pe();return Vs(l,le,e,t)},useMemoCache:Xu,useCacheRefresh:rr};lo.useEffectEvent=Ps;var gr={readContext:Me,use:en,useCallback:ar,useContext:Me,useEffect:Wu,useImperativeHandle:lr,useInsertionEffect:$s,useLayoutEffect:er,useMemo:ir,useReducer:Zu,useRef:Ws,useState:function(){return Zu(Ht)},useDebugValue:ku,useDeferredValue:function(e,t){var l=pe();return le===null?Pu(l,e,t):nr(l,le.memoizedState,e,t)},useTransition:function(){var e=Zu(Ht)[0],t=pe().memoizedState;return[typeof e=="boolean"?e:Wa(e),t]},useSyncExternalStore:Ns,useId:sr,useHostTransitionStatus:eo,useFormState:Js,useActionState:Js,useOptimistic:function(e,t){var l=pe();return le!==null?Vs(l,le,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:rr};gr.useEffectEvent=Ps;function ao(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:z({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var io={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=nt(),i=al(a);i.payload=t,l!=null&&(i.callback=l),t=il(e,i,a),t!==null&&(Ze(t,e,a),Qa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=nt(),i=al(a);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=il(e,i,a),t!==null&&(Ze(t,e,a),Qa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=nt(),a=al(l);a.tag=2,t!=null&&(a.callback=t),t=il(e,a,l),t!==null&&(Ze(t,e,l),Qa(t,e,l))}};function hr(e,t,l,a,i,n,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,n,u):t.prototype&&t.prototype.isPureReactComponent?!Ha(l,a)||!Ha(i,n):!0}function pr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function Gl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=z({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}function xr(e){Ui(e)}function vr(e){console.error(e)}function Sr(e){Ui(e)}function un(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Er(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function no(e,t,l){return l=al(l),l.tag=3,l.payload={element:null},l.callback=function(){un(e,t)},l}function Tr(e){return e=al(e),e.tag=3,e}function br(e,t,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var n=a.value;e.payload=function(){return i(n)},e.callback=function(){Er(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Er(t,l,a),typeof i!="function"&&(rl===null?rl=new Set([this]):rl.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function Fm(e,t,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ia(t,l,i,!0),l=tt.current,l!==null){switch(l.tag){case 31:case 13:return yt===null?xn():l.alternate===null&&me===0&&(me=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===Qi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),_o(e,a,i)),!1;case 22:return l.flags|=65536,a===Qi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),_o(e,a,i)),!1}throw Error(g(435,l.tag))}return _o(e,a,i),xn(),!1}if(X)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Au&&(e=Error(g(422),{cause:a}),ja(rt(e,l)))):(a!==Au&&(t=Error(g(423),{cause:a}),ja(rt(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=rt(a,l),i=no(e.stateNode,a,i),Bu(e,i),me!==4&&(me=2)),!1;var n=Error(g(520),{cause:a});if(n=rt(n,l),ui===null?ui=[n]:ui.push(n),me!==4&&(me=2),t===null)return!0;a=rt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=no(l.stateNode,a,e),Bu(l,e),!1;case 1:if(t=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(rl===null||!rl.has(n))))return l.flags|=65536,i&=-i,l.lanes|=i,i=Tr(i),br(i,e,l,a),Bu(l,i),!1}l=l.return}while(l!==null);return!1}var uo=Error(g(461)),Se=!1;function Oe(e,t,l,a){t.child=e===null?Ms(t,null,l,a):Bl(t,e.child,l,a)}function Ar(e,t,l,a,i){l=l.render;var n=t.ref;if("ref"in a){var u={};for(var o in a)o!=="ref"&&(u[o]=a[o])}else u=a;return _l(t),a=ju(e,t,l,u,n,i),o=Iu(),e!==null&&!Se?(Yu(e,t,i),qt(e,t,i)):(X&&o&&Tu(t),t.flags|=1,Oe(e,t,a,i),t.child)}function Cr(e,t,l,a,i){if(e===null){var n=l.type;return typeof n=="function"&&!vu(n)&&n.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=n,Dr(e,t,n,a,i)):(e=Vi(l.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!go(e,i)){var u=n.memoizedProps;if(l=l.compare,l=l!==null?l:Ha,l(u,a)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=zt(n,a),e.ref=t.ref,e.return=t,t.child=e}function Dr(e,t,l,a,i){if(e!==null){var n=e.memoizedProps;if(Ha(n,a)&&e.ref===t.ref)if(Se=!1,t.pendingProps=a=n,go(e,i))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,qt(e,t,i)}return oo(e,t,l,a,i)}function Mr(e,t,l,a){var i=a.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|l:l,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~n}else a=0,t.child=null;return Or(e,t,n,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,n!==null?n.cachePool:null),n!==null?ws(t,n):Gu(),_s(t);else return a=t.lanes=536870912,Or(e,t,n!==null?n.baseLanes|l:l,l,a)}else n!==null?(Fi(t,n.cachePool),ws(t,n),ul(),t.memoizedState=null):(e!==null&&Fi(t,null),Gu(),ul());return Oe(e,t,i,l),t.child}function $a(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Or(e,t,l,a,i){var n=_u();return n=n===null?null:{parent:xe._currentValue,pool:n},t.memoizedState={baseLanes:l,cachePool:n},e!==null&&Fi(t,null),Gu(),_s(t),e!==null&&ia(e,t,a,!0),t.childLanes=i,null}function on(e,t){return t=sn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Rr(e,t,l){return Bl(t,e.child,null,l),e=on(t,t.pendingProps),e.flags|=2,lt(t),t.memoizedState=null,e}function Xm(e,t,l){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(X){if(a.mode==="hidden")return e=on(t,a),t.lanes=536870912,$a(null,e);if(qu(t),(e=oe)?(e=If(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},l=ds(e),l.return=t,t.child=l,De=t,oe=null)):e=null,e===null)throw el(t);return t.lanes=536870912,null}return on(t,a)}var n=e.memoizedState;if(n!==null){var u=n.dehydrated;if(qu(t),i)if(t.flags&256)t.flags&=-257,t=Rr(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(g(558));else if(Se||ia(e,t,l,!1),i=(l&e.childLanes)!==0,Se||i){if(a=ue,a!==null&&(u=vc(a,l),u!==0&&u!==n.retryLane))throw n.retryLane=u,Ml(e,u),Ze(a,e,u),uo;xn(),t=Rr(e,t,l)}else e=n.treeContext,oe=gt(u.nextSibling),De=t,X=!0,$t=null,mt=!1,e!==null&&gs(t,e),t=on(t,a),t.flags|=4096;return t}return e=zt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cn(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(g(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function oo(e,t,l,a,i){return _l(t),l=ju(e,t,l,a,void 0,i),a=Iu(),e!==null&&!Se?(Yu(e,t,i),qt(e,t,i)):(X&&a&&Tu(t),t.flags|=1,Oe(e,t,l,i),t.child)}function wr(e,t,l,a,i,n){return _l(t),t.updateQueue=null,l=zs(t,a,l,i),Ls(e),a=Iu(),e!==null&&!Se?(Yu(e,t,n),qt(e,t,n)):(X&&a&&Tu(t),t.flags|=1,Oe(e,t,l,n),t.child)}function _r(e,t,l,a,i){if(_l(t),t.stateNode===null){var n=ea,u=l.contextType;typeof u=="object"&&u!==null&&(n=Me(u)),n=new l(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=io,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},zu(t),u=l.contextType,n.context=typeof u=="object"&&u!==null?Me(u):ea,n.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(ao(t,l,u,a),n.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&io.enqueueReplaceState(n,n.state,null),Ka(t,a,n,i),Za(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){n=t.stateNode;var o=t.memoizedProps,c=Gl(l,o);n.props=c;var m=n.context,p=l.contextType;u=ea,typeof p=="object"&&p!==null&&(u=Me(p));var S=l.getDerivedStateFromProps;p=typeof S=="function"||typeof n.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,p||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o||m!==u)&&pr(t,n,a,u),ll=!1;var y=t.memoizedState;n.state=y,Ka(t,a,n,i),Za(),m=t.memoizedState,o||y!==m||ll?(typeof S=="function"&&(ao(t,l,S,a),m=t.memoizedState),(c=ll||hr(t,l,c,a,y,m,u))?(p||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),n.props=a,n.state=m,n.context=u,a=c):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,Nu(e,t),u=t.memoizedProps,p=Gl(l,u),n.props=p,S=t.pendingProps,y=n.context,m=l.contextType,c=ea,typeof m=="object"&&m!==null&&(c=Me(m)),o=l.getDerivedStateFromProps,(m=typeof o=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==S||y!==c)&&pr(t,n,a,c),ll=!1,y=t.memoizedState,n.state=y,Ka(t,a,n,i),Za();var h=t.memoizedState;u!==S||y!==h||ll||e!==null&&e.dependencies!==null&&Ii(e.dependencies)?(typeof o=="function"&&(ao(t,l,o,a),h=t.memoizedState),(p=ll||hr(t,l,p,a,y,h,c)||e!==null&&e.dependencies!==null&&Ii(e.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,h,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,h,c)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=h),n.props=a,n.state=h,n.context=c,a=p):(typeof n.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),a=!1)}return n=a,cn(e,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&a?(t.child=Bl(t,e.child,null,i),t.child=Bl(t,null,l,i)):Oe(e,t,l,i),t.memoizedState=n.state,e=t.child):e=qt(e,t,i),e}function Lr(e,t,l,a){return Rl(),t.flags|=256,Oe(e,t,l,a),t.child}var co={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function so(e){return{baseLanes:e,cachePool:Es()}}function ro(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=it),e}function zr(e,t,l){var a=t.pendingProps,i=!1,n=(t.flags&128)!==0,u;if((u=n)||(u=e!==null&&e.memoizedState===null?!1:(he.current&2)!==0),u&&(i=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(X){if(i?nl(t):ul(),(e=oe)?(e=If(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},l=ds(e),l.return=t,t.child=l,De=t,oe=null)):e=null,e===null)throw el(t);return Zo(e)?t.lanes=32:t.lanes=536870912,null}var o=a.children;return a=a.fallback,i?(ul(),i=t.mode,o=sn({mode:"hidden",children:o},i),a=Ol(a,i,l,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=so(l),a.childLanes=ro(e,u,l),t.memoizedState=co,$a(null,a)):(nl(t),fo(t,o))}var c=e.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(n)t.flags&256?(nl(t),t.flags&=-257,t=mo(e,t,l)):t.memoizedState!==null?(ul(),t.child=e.child,t.flags|=128,t=null):(ul(),o=a.fallback,i=t.mode,a=sn({mode:"visible",children:a.children},i),o=Ol(o,i,l,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,Bl(t,e.child,null,l),a=t.child,a.memoizedState=so(l),a.childLanes=ro(e,u,l),t.memoizedState=co,t=$a(null,a));else if(nl(t),Zo(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var m=u.dgst;u=m,a=Error(g(419)),a.stack="",a.digest=u,ja({value:a,source:null,stack:null}),t=mo(e,t,l)}else if(Se||ia(e,t,l,!1),u=(l&e.childLanes)!==0,Se||u){if(u=ue,u!==null&&(a=vc(u,l),a!==0&&a!==c.retryLane))throw c.retryLane=a,Ml(e,a),Ze(u,e,a),uo;Qo(o)||xn(),t=mo(e,t,l)}else Qo(o)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,oe=gt(o.nextSibling),De=t,X=!0,$t=null,mt=!1,e!==null&&gs(t,e),t=fo(t,a.children),t.flags|=4096);return t}return i?(ul(),o=a.fallback,i=t.mode,c=e.child,m=c.sibling,a=zt(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,m!==null?o=zt(m,o):(o=Ol(o,i,l,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,$a(null,a),a=t.child,o=e.child.memoizedState,o===null?o=so(l):(i=o.cachePool,i!==null?(c=xe._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Es(),o={baseLanes:o.baseLanes|l,cachePool:i}),a.memoizedState=o,a.childLanes=ro(e,u,l),t.memoizedState=co,$a(e.child,a)):(nl(t),l=e.child,e=l.sibling,l=zt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function fo(e,t){return t=sn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function sn(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mo(e,t,l){return Bl(t,e.child,null,l),e=fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Mu(e.return,t,l)}function yo(e,t,l,a,i,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:n}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i,u.treeForkCount=n)}function Br(e,t,l){var a=t.pendingProps,i=a.revealOrder,n=a.tail;a=a.children;var u=he.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,A(he,u),Oe(e,t,a,l),a=X?Va:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nr(e,l,t);else if(e.tag===19)Nr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&Wi(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),yo(t,!1,i,l,n,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}yo(t,!0,l,null,n,a);break;case"together":yo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),sl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ia(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,l=zt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=zt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function go(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ii(e)))}function Qm(e,t,l){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),tl(t,xe,e.memoizedState.cache),Rl();break;case 27:case 5:Ca(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:tl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(nl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?zr(e,t,l):(nl(t),e=qt(e,t,l),e!==null?e.sibling:null);nl(t);break;case 19:var i=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ia(e,t,l,!1),a=(l&t.childLanes)!==0),i){if(a)return Br(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(he,he.current),a)break;return null;case 22:return t.lanes=0,Mr(e,t,l,t.pendingProps);case 24:tl(t,xe,e.memoizedState.cache)}return qt(e,t,l)}function Ur(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!go(e,l)&&(t.flags&128)===0)return Se=!1,Qm(e,t,l);Se=(e.flags&131072)!==0}else Se=!1,X&&(t.flags&1048576)!==0&&ys(t,Va,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=zl(t.elementType),t.type=e,typeof e=="function")vu(e)?(a=Gl(e,a),t.tag=1,t=_r(null,t,e,a,l)):(t.tag=0,t=oo(null,t,e,a,l));else{if(e!=null){var i=e.$$typeof;if(i===ut){t.tag=11,t=Ar(null,t,e,a,l);break e}else if(i===F){t.tag=14,t=Cr(null,t,e,a,l);break e}}throw t=Rt(e)||e,Error(g(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,i=Gl(a,t.pendingProps),_r(e,t,a,i,l);case 3:e:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(g(387));a=t.pendingProps;var n=t.memoizedState;i=n.element,Nu(e,t),Ka(t,a,null,l);var u=t.memoizedState;if(a=u.cache,tl(t,xe,a),a!==n.cache&&Ou(t,[xe],l,!0),Za(),a=u.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Lr(e,t,a,l);break e}else if(a!==i){i=rt(Error(g(424)),t),ja(i),t=Lr(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=gt(e.firstChild),De=t,X=!0,$t=null,mt=!0,l=Ms(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Rl(),a===i){t=qt(e,t,l);break e}Oe(e,t,a,l)}t=t.child}return t;case 26:return cn(e,t),e===null?(l=Kf(t.type,null,t.pendingProps,null))?t.memoizedState=l:X||(l=t.type,e=t.pendingProps,a=Cn(q.current).createElement(l),a[Ce]=t,a[je]=e,Re(a,l,e),be(a),t.stateNode=a):t.memoizedState=Kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ca(t),e===null&&X&&(a=t.stateNode=Xf(t.type,t.pendingProps,q.current),De=t,mt=!0,i=oe,yl(t.type)?(Ko=i,oe=gt(a.firstChild)):oe=i),Oe(e,t,t.pendingProps.children,l),cn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&X&&((i=a=oe)&&(a=Ty(a,t.type,t.pendingProps,mt),a!==null?(t.stateNode=a,De=t,oe=gt(a.firstChild),mt=!1,i=!0):i=!1),i||el(t)),Ca(t),i=t.type,n=t.pendingProps,u=e!==null?e.memoizedProps:null,a=n.children,Yo(i,n)?a=null:u!==null&&Yo(i,u)&&(t.flags|=32),t.memoizedState!==null&&(i=ju(e,t,Gm,null,null,l),yi._currentValue=i),cn(e,t),Oe(e,t,a,l),t.child;case 6:return e===null&&X&&((e=l=oe)&&(l=by(l,t.pendingProps,mt),l!==null?(t.stateNode=l,De=t,oe=null,e=!0):e=!1),e||el(t)),null;case 13:return zr(e,t,l);case 4:return Ne(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Bl(t,null,a,l):Oe(e,t,a,l),t.child;case 11:return Ar(e,t,t.type,t.pendingProps,l);case 7:return Oe(e,t,t.pendingProps,l),t.child;case 8:return Oe(e,t,t.pendingProps.children,l),t.child;case 12:return Oe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,tl(t,t.type,a.value),Oe(e,t,a.children,l),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,_l(t),i=Me(i),a=a(i),t.flags|=1,Oe(e,t,a,l),t.child;case 14:return Cr(e,t,t.type,t.pendingProps,l);case 15:return Dr(e,t,t.type,t.pendingProps,l);case 19:return Br(e,t,l);case 31:return Xm(e,t,l);case 22:return Mr(e,t,l,t.pendingProps);case 24:return _l(t),a=Me(xe),e===null?(i=_u(),i===null&&(i=ue,n=Ru(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=l),i=n),t.memoizedState={parent:a,cache:i},zu(t),tl(t,xe,i)):((e.lanes&l)!==0&&(Nu(e,t),Ka(t,null,null,l),Za()),i=e.memoizedState,n=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),tl(t,xe,a)):(a=n.cache,tl(t,xe,a),a!==i.cache&&Ou(t,[xe],l,!0))),Oe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Vt(e){e.flags|=4}function ho(e,t,l,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw Nl=Qi,Lu}else e.flags&=-16777217}function Gr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(rf())e.flags|=8192;else throw Nl=Qi,Lu}function rn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hc():536870912,e.lanes|=t,ha|=t)}function ei(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Zm(e,t,l){var a=t.pendingProps;switch(bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ce(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(xe),ge(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(aa(t)?Vt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cu())),ce(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(Vt(t),n!==null?(ce(t),Gr(t,n)):(ce(t),ho(t,i,null,a,l))):n?n!==e.memoizedState?(Vt(t),ce(t),Gr(t,n)):(ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Vt(t),ce(t),ho(t,i,e,a,l)),null;case 27:if(Si(t),l=q.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(!a){if(t.stateNode===null)throw Error(g(166));return ce(t),null}e=M.current,aa(t)?hs(t):(e=Xf(i,a,l),t.stateNode=e,Vt(t))}return ce(t),null;case 5:if(Si(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(!a){if(t.stateNode===null)throw Error(g(166));return ce(t),null}if(n=M.current,aa(t))hs(t);else{var u=Cn(q.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?u.createElement(i,{is:a.is}):u.createElement(i)}}n[Ce]=t,n[je]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=n;e:switch(Re(n,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Vt(t)}}return ce(t),ho(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(g(166));if(e=q.current,aa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,i=De,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ce]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Nf(e.nodeValue,l)),e||el(t,!0)}else e=Cn(e).createTextNode(a),e[Ce]=t,t.stateNode=e}return ce(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=aa(t),l!==null){if(e===null){if(!a)throw Error(g(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(557));e[Ce]=t}else Rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ce(t),e=!1}else l=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(lt(t),t):(lt(t),null);if((t.flags&128)!==0)throw Error(g(558))}return ce(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=aa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Ce]=t}else Rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else i=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(lt(t),t):(lt(t),null)}return lt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==i&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),rn(t,t.updateQueue),ce(t),null);case 4:return ge(),e===null&&Ho(t.stateNode.containerInfo),ce(t),null;case 10:return Ut(t.type),ce(t),null;case 19:if(E(he),a=t.memoizedState,a===null)return ce(t),null;if(i=(t.flags&128)!==0,n=a.rendering,n===null)if(i)ei(a,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=Wi(e),n!==null){for(t.flags|=128,ei(a,!1),e=n.updateQueue,t.updateQueue=e,rn(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)fs(l,e),l=l.sibling;return A(he,he.current&1|2),X&&Nt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&We()>gn&&(t.flags|=128,i=!0,ei(a,!1),t.lanes=4194304)}else{if(!i)if(e=Wi(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,rn(t,e),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!X)return ce(t),null}else 2*We()-a.renderingStartTime>gn&&l!==536870912&&(t.flags|=128,i=!0,ei(a,!1),t.lanes=4194304);a.isBackwards?(n.sibling=t.child,t.child=n):(e=a.last,e!==null?e.sibling=n:t.child=n,a.last=n)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=We(),e.sibling=null,l=he.current,A(he,i?l&1|2:l&1),X&&Nt(t,a.treeForkCount),e):(ce(t),null);case 22:case 23:return lt(t),Hu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),l=t.updateQueue,l!==null&&rn(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&E(Ll),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ut(xe),ce(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function Km(e,t){switch(bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(xe),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Si(t),null;case 31:if(t.memoizedState!==null){if(lt(t),t.alternate===null)throw Error(g(340));Rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(he),null;case 4:return ge(),null;case 10:return Ut(t.type),null;case 22:case 23:return lt(t),Hu(),e!==null&&E(Ll),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(xe),null;case 25:return null;default:return null}}function Hr(e,t){switch(bu(t),t.tag){case 3:Ut(xe),ge();break;case 26:case 27:case 5:Si(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&lt(t);break;case 13:lt(t);break;case 19:E(he);break;case 10:Ut(t.type);break;case 22:case 23:lt(t),Hu(),e!==null&&E(Ll);break;case 24:Ut(xe)}}function ti(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){a=void 0;var n=l.create,u=l.inst;a=n(),u.destroy=a}l=l.next}while(l!==i)}}catch(o){ee(t,t.return,o)}}function ol(e,t,l){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){var u=a.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,i=t;var c=l,m=o;try{m()}catch(p){ee(i,c,p)}}}a=a.next}while(a!==n)}}catch(p){ee(t,t.return,p)}}function qr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Rs(t,l)}catch(a){ee(e,e.return,a)}}}function Vr(e,t,l){l.props=Gl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){ee(e,t,a)}}function li(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){ee(e,t,i)}}function Dt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){ee(e,t,i)}else l.current=null}function jr(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){ee(e,e.return,i)}}function po(e,t,l){try{var a=e.stateNode;hy(a,e.type,l,t),a[je]=t}catch(i){ee(e,e.return,i)}}function Ir(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type)||e.tag===4}function xo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ir(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=_t));else if(a!==4&&(a===27&&yl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(vo(e,t,l),e=e.sibling;e!==null;)vo(e,t,l),e=e.sibling}function fn(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&yl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(fn(e,t,l),e=e.sibling;e!==null;)fn(e,t,l),e=e.sibling}function Yr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Re(t,a,l),t[Ce]=e,t[je]=l}catch(n){ee(e,e.return,n)}}var jt=!1,Ee=!1,So=!1,Fr=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Jm(e,t){if(e=e.containerInfo,jo=Ln,e=ls(e),du(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break e}var u=0,o=-1,c=-1,m=0,p=0,S=e,y=null;t:for(;;){for(var h;S!==l||i!==0&&S.nodeType!==3||(o=u+i),S!==n||a!==0&&S.nodeType!==3||(c=u+a),S.nodeType===3&&(u+=S.nodeValue.length),(h=S.firstChild)!==null;)y=S,S=h;for(;;){if(S===e)break t;if(y===l&&++m===i&&(o=u),y===n&&++p===a&&(c=u),(h=S.nextSibling)!==null)break;S=y,y=S.parentNode}S=h}l=o===-1||c===-1?null:{start:o,end:c}}else l=null}l=l||{start:0,end:0}}else l=null;for(Io={focusedElem:e,selectionRange:l},Ln=!1,Ae=t;Ae!==null;)if(t=Ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ae=e;else for(;Ae!==null;){switch(t=Ae,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)i=e[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,l=t,i=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var C=Gl(l.type,i);e=a.getSnapshotBeforeUpdate(C,n),a.__reactInternalSnapshotBeforeUpdate=e}catch(_){ee(l,l.return,_)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Xo(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(g(163))}if(e=t.sibling,e!==null){e.return=t.return,Ae=e;break}Ae=t.return}}function Xr(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Yt(e,l),a&4&&ti(5,l);break;case 1:if(Yt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){ee(l,l.return,u)}else{var i=Gl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(l,l.return,u)}}a&64&&qr(l),a&512&&li(l,l.return);break;case 3:if(Yt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Rs(e,t)}catch(u){ee(l,l.return,u)}}break;case 27:t===null&&a&4&&Yr(l);case 26:case 5:Yt(e,l),t===null&&a&4&&jr(l),a&512&&li(l,l.return);break;case 12:Yt(e,l);break;case 31:Yt(e,l),a&4&&Kr(e,l);break;case 13:Yt(e,l),a&4&&Jr(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=iy.bind(null,l),Ay(e,l))));break;case 22:if(a=l.memoizedState!==null||jt,!a){t=t!==null&&t.memoizedState!==null||Ee,i=jt;var n=Ee;jt=a,(Ee=t)&&!n?Ft(e,l,(l.subtreeFlags&8772)!==0):Yt(e,l),jt=i,Ee=n}break;case 30:break;default:Yt(e,l)}}function Qr(e){var t=e.alternate;t!==null&&(e.alternate=null,Qr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Ye=!1;function It(e,t,l){for(l=l.child;l!==null;)Zr(e,t,l),l=l.sibling}function Zr(e,t,l){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Da,l)}catch{}switch(l.tag){case 26:Ee||Dt(l,t),It(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ee||Dt(l,t);var a=re,i=Ye;yl(l.type)&&(re=l.stateNode,Ye=!1),It(e,t,l),fi(l.stateNode),re=a,Ye=i;break;case 5:Ee||Dt(l,t);case 6:if(a=re,i=Ye,re=null,It(e,t,l),re=a,Ye=i,re!==null)if(Ye)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(l.stateNode)}catch(n){ee(l,t,n)}else try{re.removeChild(l.stateNode)}catch(n){ee(l,t,n)}break;case 18:re!==null&&(Ye?(e=re,Vf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Aa(e)):Vf(re,l.stateNode));break;case 4:a=re,i=Ye,re=l.stateNode.containerInfo,Ye=!0,It(e,t,l),re=a,Ye=i;break;case 0:case 11:case 14:case 15:ol(2,l,t),Ee||ol(4,l,t),It(e,t,l);break;case 1:Ee||(Dt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Vr(l,t,a)),It(e,t,l);break;case 21:It(e,t,l);break;case 22:Ee=(a=Ee)||l.memoizedState!==null,It(e,t,l),Ee=a;break;default:It(e,t,l)}}function Kr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Aa(e)}catch(l){ee(t,t.return,l)}}}function Jr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Aa(e)}catch(l){ee(t,t.return,l)}}function Wm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fr),t;default:throw Error(g(435,e.tag))}}function dn(e,t){var l=Wm(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var i=ny.bind(null,e,a);a.then(i,i)}})}function Fe(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],n=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(yl(o.type)){re=o.stateNode,Ye=!1;break e}break;case 5:re=o.stateNode,Ye=!1;break e;case 3:case 4:re=o.stateNode.containerInfo,Ye=!0;break e}o=o.return}if(re===null)throw Error(g(160));Zr(n,u,i),re=null,Ye=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wr(t,e),t=t.sibling}var vt=null;function Wr(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fe(t,e),Xe(e),a&4&&(ol(3,e,e.return),ti(3,e),ol(5,e,e.return));break;case 1:Fe(t,e),Xe(e),a&512&&(Ee||l===null||Dt(l,l.return)),a&64&&jt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=vt;if(Fe(t,e),Xe(e),a&512&&(Ee||l===null||Dt(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Ra]||n[Ce]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),Re(n,a,l),n[Ce]=e,be(n),a=n;break e;case"link":var u=kf("link","href",i).get(a+(l.href||""));if(u){for(var o=0;o<u.length;o++)if(n=u[o],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(o,1);break t}}n=i.createElement(a),Re(n,a,l),i.head.appendChild(n);break;case"meta":if(u=kf("meta","content",i).get(a+(l.content||""))){for(o=0;o<u.length;o++)if(n=u[o],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(o,1);break t}}n=i.createElement(a),Re(n,a,l),i.head.appendChild(n);break;default:throw Error(g(468,a))}n[Ce]=e,be(n),a=n}e.stateNode=a}else Pf(i,e.type,e.stateNode);else e.stateNode=Wf(i,a,e.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?Pf(i,e.type,e.stateNode):Wf(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&po(e,e.memoizedProps,l.memoizedProps)}break;case 27:Fe(t,e),Xe(e),a&512&&(Ee||l===null||Dt(l,l.return)),l!==null&&a&4&&po(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Fe(t,e),Xe(e),a&512&&(Ee||l===null||Dt(l,l.return)),e.flags&32){i=e.stateNode;try{Zl(i,"")}catch(C){ee(e,e.return,C)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,po(e,i,l!==null?l.memoizedProps:i)),a&1024&&(So=!0);break;case 6:if(Fe(t,e),Xe(e),a&4){if(e.stateNode===null)throw Error(g(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(C){ee(e,e.return,C)}}break;case 3:if(On=null,i=vt,vt=Dn(t.containerInfo),Fe(t,e),vt=i,Xe(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(C){ee(e,e.return,C)}So&&(So=!1,kr(e));break;case 4:a=vt,vt=Dn(e.stateNode.containerInfo),Fe(t,e),Xe(e),vt=a;break;case 12:Fe(t,e),Xe(e);break;case 31:Fe(t,e),Xe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 13:Fe(t,e),Xe(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(yn=We()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 22:i=e.memoizedState!==null;var c=l!==null&&l.memoizedState!==null,m=jt,p=Ee;if(jt=m||i,Ee=p||c,Fe(t,e),Ee=p,jt=m,Xe(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||c||jt||Ee||Hl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){c=l=t;try{if(n=c.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=c.stateNode;var S=c.memoizedProps.style,y=S!=null&&S.hasOwnProperty("display")?S.display:null;o.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(C){ee(c,c.return,C)}}}else if(t.tag===6){if(l===null){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(C){ee(c,c.return,C)}}}else if(t.tag===18){if(l===null){c=t;try{var h=c.stateNode;i?jf(h,!0):jf(c.stateNode,!1)}catch(C){ee(c,c.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,dn(e,l))));break;case 19:Fe(t,e),Xe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dn(e,a)));break;case 30:break;case 21:break;default:Fe(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Ir(a)){l=a;break}a=a.return}if(l==null)throw Error(g(160));switch(l.tag){case 27:var i=l.stateNode,n=xo(e);fn(e,n,i);break;case 5:var u=l.stateNode;l.flags&32&&(Zl(u,""),l.flags&=-33);var o=xo(e);fn(e,o,u);break;case 3:case 4:var c=l.stateNode.containerInfo,m=xo(e);vo(e,m,c);break;default:throw Error(g(161))}}catch(p){ee(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xr(e,t.alternate,t),t=t.sibling}function Hl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ol(4,t,t.return),Hl(t);break;case 1:Dt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Vr(t,t.return,l),Hl(t);break;case 27:fi(t.stateNode);case 26:case 5:Dt(t,t.return),Hl(t);break;case 22:t.memoizedState===null&&Hl(t);break;case 30:Hl(t);break;default:Hl(t)}e=e.sibling}}function Ft(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,n=t,u=n.flags;switch(n.tag){case 0:case 11:case 15:Ft(i,n,l),ti(4,n);break;case 1:if(Ft(i,n,l),a=n,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(m){ee(a,a.return,m)}if(a=n,i=a.updateQueue,i!==null){var o=a.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Os(c[i],o)}catch(m){ee(a,a.return,m)}}l&&u&64&&qr(n),li(n,n.return);break;case 27:Yr(n);case 26:case 5:Ft(i,n,l),l&&a===null&&u&4&&jr(n),li(n,n.return);break;case 12:Ft(i,n,l);break;case 31:Ft(i,n,l),l&&u&4&&Kr(i,n);break;case 13:Ft(i,n,l),l&&u&4&&Jr(i,n);break;case 22:n.memoizedState===null&&Ft(i,n,l),li(n,n.return);break;case 30:break;default:Ft(i,n,l)}t=t.sibling}}function Eo(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ia(l))}function To(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ia(e))}function St(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pr(e,t,l,a),t=t.sibling}function Pr(e,t,l,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,l,a),i&2048&&ti(9,t);break;case 1:St(e,t,l,a);break;case 3:St(e,t,l,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ia(e)));break;case 12:if(i&2048){St(e,t,l,a),e=t.stateNode;try{var n=t.memoizedProps,u=n.id,o=n.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){ee(t,t.return,c)}}else St(e,t,l,a);break;case 31:St(e,t,l,a);break;case 13:St(e,t,l,a);break;case 23:break;case 22:n=t.stateNode,u=t.alternate,t.memoizedState!==null?n._visibility&2?St(e,t,l,a):ai(e,t):n._visibility&2?St(e,t,l,a):(n._visibility|=2,ma(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Eo(u,t);break;case 24:St(e,t,l,a),i&2048&&To(t.alternate,t);break;default:St(e,t,l,a)}}function ma(e,t,l,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,u=t,o=l,c=a,m=u.flags;switch(u.tag){case 0:case 11:case 15:ma(n,u,o,c,i),ti(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?ma(n,u,o,c,i):ai(n,u):(p._visibility|=2,ma(n,u,o,c,i)),i&&m&2048&&Eo(u.alternate,u);break;case 24:ma(n,u,o,c,i),i&&m&2048&&To(u.alternate,u);break;default:ma(n,u,o,c,i)}t=t.sibling}}function ai(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,i=a.flags;switch(a.tag){case 22:ai(l,a),i&2048&&Eo(a.alternate,a);break;case 24:ai(l,a),i&2048&&To(a.alternate,a);break;default:ai(l,a)}t=t.sibling}}var ii=8192;function ya(e,t,l){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)$r(e,t,l),e=e.sibling}function $r(e,t,l){switch(e.tag){case 26:ya(e,t,l),e.flags&ii&&e.memoizedState!==null&&Uy(l,vt,e.memoizedState,e.memoizedProps);break;case 5:ya(e,t,l);break;case 3:case 4:var a=vt;vt=Dn(e.stateNode.containerInfo),ya(e,t,l),vt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ii,ii=16777216,ya(e,t,l),ii=a):ya(e,t,l));break;default:ya(e,t,l)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ni(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ae=a,lf(a,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:ni(e),e.flags&2048&&ol(9,e,e.return);break;case 3:ni(e);break;case 12:ni(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mn(e)):ni(e);break;default:ni(e)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ae=a,lf(a,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ol(8,t,t.return),mn(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,mn(t));break;default:mn(t)}e=e.sibling}}function lf(e,t){for(;Ae!==null;){var l=Ae;switch(l.tag){case 0:case 11:case 15:ol(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ia(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ae=a;else e:for(l=e;Ae!==null;){a=Ae;var i=a.sibling,n=a.return;if(Qr(a),a===l){Ae=null;break e}if(i!==null){i.return=n,Ae=i;break e}Ae=n}}}var km={getCacheForType:function(e){var t=Me(xe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Me(xe).controller.signal}},Pm=typeof WeakMap=="function"?WeakMap:Map,J=0,ue=null,V=null,I=0,$=0,at=null,cl=!1,ga=!1,bo=!1,Xt=0,me=0,sl=0,ql=0,Ao=0,it=0,ha=0,ui=null,Qe=null,Co=!1,yn=0,af=0,gn=1/0,hn=null,rl=null,Te=0,fl=null,pa=null,Qt=0,Do=0,Mo=null,nf=null,oi=0,Oo=null;function nt(){return(J&2)!==0&&I!==0?I&-I:x.T!==null?No():Sc()}function uf(){if(it===0)if((I&536870912)===0||X){var e=bi;bi<<=1,(bi&3932160)===0&&(bi=262144),it=e}else it=536870912;return e=tt.current,e!==null&&(e.flags|=32),it}function Ze(e,t,l){(e===ue&&($===2||$===9)||e.cancelPendingCommit!==null)&&(xa(e,0),dl(e,I,it,!1)),Oa(e,l),((J&2)===0||e!==ue)&&(e===ue&&((J&2)===0&&(ql|=l),me===4&&dl(e,I,it,!1)),Mt(e))}function of(e,t,l){if((J&6)!==0)throw Error(g(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ma(e,t),i=a?ty(e,t):wo(e,t,!0),n=a;do{if(i===0){ga&&!a&&dl(e,t,0,!1);break}else{if(l=e.current.alternate,n&&!$m(l)){i=wo(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;i=ui;var c=o.current.memoizedState.isDehydrated;if(c&&(xa(o,u).flags|=256),u=wo(o,u,!1),u!==2){if(bo&&!c){o.errorRecoveryDisabledLanes|=n,ql|=n,i=4;break e}n=Qe,Qe=i,n!==null&&(Qe===null?Qe=n:Qe.push.apply(Qe,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){xa(e,0),dl(e,t,0,!0);break}e:{switch(a=e,n=i,n){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:dl(a,t,it,!cl);break e;case 2:Qe=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(i=yn+300-We(),10<i)){if(dl(a,t,it,!cl),Ci(a,0,!0)!==0)break e;Qt=t,a.timeoutHandle=Hf(cf.bind(null,a,l,Qe,hn,Co,t,it,ql,ha,cl,n,"Throttled",-0,0),i);break e}cf(a,l,Qe,hn,Co,t,it,ql,ha,cl,n,null,-0,0)}}break}while(!0);Mt(e)}function cf(e,t,l,a,i,n,u,o,c,m,p,S,y,h){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},$r(t,n,S);var C=(n&62914560)===n?yn-We():(n&4194048)===n?af-We():0;if(C=Gy(S,C),C!==null){Qt=n,e.cancelPendingCommit=C(hf.bind(null,e,t,n,l,a,i,u,o,c,p,S,null,y,h)),dl(e,n,u,!m);return}}hf(e,t,n,l,a,i,u,o,c)}function $m(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],n=i.getSnapshot;i=i.value;try{if(!$e(n(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dl(e,t,l,a){t&=~Ao,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var n=31-Pe(i),u=1<<n;a[n]=-1,i&=~u}l!==0&&pc(e,l,t)}function pn(){return(J&6)===0?(ci(0),!1):!0}function Ro(){if(V!==null){if($===0)var e=V.return;else e=V,Bt=wl=null,Fu(e),ca=null,Fa=0,e=V;for(;e!==null;)Hr(e.alternate,e),e=e.return;V=null}}function xa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,vy(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Qt=0,Ro(),ue=e,V=l=zt(e.current,null),I=t,$=0,at=null,cl=!1,ga=Ma(e,t),bo=!1,ha=it=Ao=ql=sl=me=0,Qe=ui=null,Co=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-Pe(a),n=1<<i;t|=e[i],a&=~n}return Xt=t,Gi(),l}function sf(e,t){G=null,x.H=Pa,t===oa||t===Xi?(t=As(),$=3):t===Lu?(t=As(),$=4):$=t===uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,V===null&&(me=1,un(e,rt(t,e.current)))}function rf(){var e=tt.current;return e===null?!0:(I&4194048)===I?yt===null:(I&62914560)===I||(I&536870912)!==0?e===yt:!1}function ff(){var e=x.H;return x.H=Pa,e===null?Pa:e}function df(){var e=x.A;return x.A=km,e}function xn(){me=4,cl||(I&4194048)!==I&&tt.current!==null||(ga=!0),(sl&134217727)===0&&(ql&134217727)===0||ue===null||dl(ue,I,it,!1)}function wo(e,t,l){var a=J;J|=2;var i=ff(),n=df();(ue!==e||I!==t)&&(hn=null,xa(e,t)),t=!1;var u=me;e:do try{if($!==0&&V!==null){var o=V,c=at;switch($){case 8:Ro(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=$;if($=0,at=null,va(e,o,c,m),l&&ga){u=0;break e}break;default:m=$,$=0,at=null,va(e,o,c,m)}}ey(),u=me;break}catch(p){sf(e,p)}while(!0);return t&&e.shellSuspendCounter++,Bt=wl=null,J=a,x.H=i,x.A=n,V===null&&(ue=null,I=0,Gi()),u}function ey(){for(;V!==null;)mf(V)}function ty(e,t){var l=J;J|=2;var a=ff(),i=df();ue!==e||I!==t?(hn=null,gn=We()+500,xa(e,t)):ga=Ma(e,t);e:do try{if($!==0&&V!==null){t=V;var n=at;t:switch($){case 1:$=0,at=null,va(e,t,n,1);break;case 2:case 9:if(Ts(n)){$=0,at=null,yf(t);break}t=function(){$!==2&&$!==9||ue!==e||($=7),Mt(e)},n.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Ts(n)?($=0,at=null,yf(t)):($=0,at=null,va(e,t,n,7));break;case 5:var u=null;switch(V.tag){case 26:u=V.memoizedState;case 5:case 27:var o=V;if(u?$f(u):o.stateNode.complete){$=0,at=null;var c=o.sibling;if(c!==null)V=c;else{var m=o.return;m!==null?(V=m,vn(m)):V=null}break t}}$=0,at=null,va(e,t,n,5);break;case 6:$=0,at=null,va(e,t,n,6);break;case 8:Ro(),me=6;break e;default:throw Error(g(462))}}ly();break}catch(p){sf(e,p)}while(!0);return Bt=wl=null,x.H=a,x.A=i,J=l,V!==null?0:(ue=null,I=0,Gi(),me)}function ly(){for(;V!==null&&!Cd();)mf(V)}function mf(e){var t=Ur(e.alternate,e,Xt);e.memoizedProps=e.pendingProps,t===null?vn(e):V=t}function yf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=wr(l,t,t.pendingProps,t.type,void 0,I);break;case 11:t=wr(l,t,t.pendingProps,t.type.render,t.ref,I);break;case 5:Fu(t);default:Hr(l,t),t=V=fs(t,Xt),t=Ur(l,t,Xt)}e.memoizedProps=e.pendingProps,t===null?vn(e):V=t}function va(e,t,l,a){Bt=wl=null,Fu(t),ca=null,Fa=0;var i=t.return;try{if(Fm(e,i,t,l,I)){me=1,un(e,rt(l,e.current)),V=null;return}}catch(n){if(i!==null)throw V=i,n;me=1,un(e,rt(l,e.current)),V=null;return}t.flags&32768?(X||a===1?e=!0:ga||(I&536870912)!==0?e=!1:(cl=e=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),gf(t,e)):vn(t)}function vn(e){var t=e;do{if((t.flags&32768)!==0){gf(t,cl);return}e=t.return;var l=Zm(t.alternate,t,Xt);if(l!==null){V=l;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);me===0&&(me=5)}function gf(e,t){do{var l=Km(e.alternate,e);if(l!==null){l.flags&=32767,V=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){V=e;return}V=e=l}while(e!==null);me=6,V=null}function hf(e,t,l,a,i,n,u,o,c){e.cancelPendingCommit=null;do Sn();while(Te!==0);if((J&6)!==0)throw Error(g(327));if(t!==null){if(t===e.current)throw Error(g(177));if(n=t.lanes|t.childLanes,n|=pu,Bd(e,l,n,u,o,c),e===ue&&(V=ue=null,I=0),pa=t,fl=e,Qt=l,Do=n,Mo=i,nf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uy(Ei,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,i=b.p,b.p=2,u=J,J|=4;try{Jm(e,t,l)}finally{J=u,b.p=i,x.T=a}}Te=1,pf(),xf(),vf()}}function pf(){if(Te===1){Te=0;var e=fl,t=pa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=x.T,x.T=null;var a=b.p;b.p=2;var i=J;J|=4;try{Wr(t,e);var n=Io,u=ls(e.containerInfo),o=n.focusedElem,c=n.selectionRange;if(u!==o&&o&&o.ownerDocument&&ts(o.ownerDocument.documentElement,o)){if(c!==null&&du(o)){var m=c.start,p=c.end;if(p===void 0&&(p=m),"selectionStart"in o)o.selectionStart=m,o.selectionEnd=Math.min(p,o.value.length);else{var S=o.ownerDocument||document,y=S&&S.defaultView||window;if(y.getSelection){var h=y.getSelection(),C=o.textContent.length,_=Math.min(c.start,C),ie=c.end===void 0?_:Math.min(c.end,C);!h.extend&&_>ie&&(u=ie,ie=_,_=u);var f=es(o,_),s=es(o,ie);if(f&&s&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==s.node||h.focusOffset!==s.offset)){var d=S.createRange();d.setStart(f.node,f.offset),h.removeAllRanges(),_>ie?(h.addRange(d),h.extend(s.node,s.offset)):(d.setEnd(s.node,s.offset),h.addRange(d))}}}}for(S=[],h=o;h=h.parentNode;)h.nodeType===1&&S.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var v=S[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ln=!!jo,Io=jo=null}finally{J=i,b.p=a,x.T=l}}e.current=t,Te=2}}function xf(){if(Te===2){Te=0;var e=fl,t=pa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=x.T,x.T=null;var a=b.p;b.p=2;var i=J;J|=4;try{Xr(e,t.alternate,t)}finally{J=i,b.p=a,x.T=l}}Te=3}}function vf(){if(Te===4||Te===3){Te=0,Dd();var e=fl,t=pa,l=Qt,a=nf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,pa=fl=null,Sf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(rl=null),Zn(l),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Da,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=x.T,i=b.p,b.p=2,x.T=null;try{for(var n=e.onRecoverableError,u=0;u<a.length;u++){var o=a[u];n(o.value,{componentStack:o.stack})}}finally{x.T=t,b.p=i}}(Qt&3)!==0&&Sn(),Mt(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===Oo?oi++:(oi=0,Oo=e):oi=0,ci(0)}}function Sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ia(t)))}function Sn(){return pf(),xf(),vf(),Ef()}function Ef(){if(Te!==5)return!1;var e=fl,t=Do;Do=0;var l=Zn(Qt),a=x.T,i=b.p;try{b.p=32>l?32:l,x.T=null,l=Mo,Mo=null;var n=fl,u=Qt;if(Te=0,pa=fl=null,Qt=0,(J&6)!==0)throw Error(g(331));var o=J;if(J|=4,tf(n.current),Pr(n,n.current,u,l),J=o,ci(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Da,n)}catch{}return!0}finally{b.p=i,x.T=a,Sf(e,t)}}function Tf(e,t,l){t=rt(l,t),t=no(e.stateNode,t,2),e=il(e,t,2),e!==null&&(Oa(e,2),Mt(e))}function ee(e,t,l){if(e.tag===3)Tf(e,e,l);else for(;t!==null;){if(t.tag===3){Tf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(rl===null||!rl.has(a))){e=rt(l,e),l=Tr(2),a=il(t,l,2),a!==null&&(br(l,a,t,e),Oa(a,2),Mt(a));break}}t=t.return}}function _o(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Pm;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(l)||(bo=!0,i.add(l),e=ay.bind(null,e,t,l),t.then(e,e))}function ay(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ue===e&&(I&l)===l&&(me===4||me===3&&(I&62914560)===I&&300>We()-yn?(J&2)===0&&xa(e,0):Ao|=l,ha===I&&(ha=0)),Mt(e)}function bf(e,t){t===0&&(t=hc()),e=Ml(e,t),e!==null&&(Oa(e,t),Mt(e))}function iy(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),bf(e,l)}function ny(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(g(314))}a!==null&&a.delete(t),bf(e,l)}function uy(e,t){return Yn(e,t)}var En=null,Sa=null,Lo=!1,Tn=!1,zo=!1,ml=0;function Mt(e){e!==Sa&&e.next===null&&(Sa===null?En=Sa=e:Sa=Sa.next=e),Tn=!0,Lo||(Lo=!0,cy())}function ci(e,t){if(!zo&&Tn){zo=!0;do for(var l=!1,a=En;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var n=0;else{var u=a.suspendedLanes,o=a.pingedLanes;n=(1<<31-Pe(42|e)+1)-1,n&=i&~(u&~o),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,Mf(a,n))}else n=I,n=Ci(a,a===ue?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Ma(a,n)||(l=!0,Mf(a,n));a=a.next}while(l);zo=!1}}function oy(){Af()}function Af(){Tn=Lo=!1;var e=0;ml!==0&&xy()&&(e=ml);for(var t=We(),l=null,a=En;a!==null;){var i=a.next,n=Cf(a,t);n===0?(a.next=null,l===null?En=i:l.next=i,i===null&&(Sa=l)):(l=a,(e!==0||(n&3)!==0)&&(Tn=!0)),a=i}Te!==0&&Te!==5||ci(e),ml!==0&&(ml=0)}function Cf(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var u=31-Pe(n),o=1<<u,c=i[u];c===-1?((o&l)===0||(o&a)!==0)&&(i[u]=Nd(o,t)):c<=t&&(e.expiredLanes|=o),n&=~o}if(t=ue,l=I,l=Ci(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Fn(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ma(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Fn(a),Zn(l)){case 2:case 8:l=yc;break;case 32:l=Ei;break;case 268435456:l=gc;break;default:l=Ei}return a=Df.bind(null,e),l=Yn(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Fn(a),e.callbackPriority=2,e.callbackNode=null,2}function Df(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Sn()&&e.callbackNode!==l)return null;var a=I;return a=Ci(e,e===ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(of(e,a,t),Cf(e,We()),e.callbackNode!=null&&e.callbackNode===l?Df.bind(null,e):null)}function Mf(e,t){if(Sn())return null;of(e,t,!0)}function cy(){Sy(function(){(J&6)!==0?Yn(mc,oy):Af()})}function No(){if(ml===0){var e=na;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),ml=e}return ml}function Of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function Rf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function sy(e,t,l,a,i){if(t==="submit"&&l&&l.stateNode===i){var n=Of((i[je]||null).action),u=a.submitter;u&&(t=(t=u[je]||null)?Of(t.formAction):u.getAttribute("formAction"),t!==null&&(n=t,u=null));var o=new zi("action","action",null,a,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ml!==0){var c=u?Rf(i,u):new FormData(i);$u(l,{pending:!0,data:c,method:i.method,action:n},null,c)}}else typeof n=="function"&&(o.preventDefault(),c=u?Rf(i,u):new FormData(i),$u(l,{pending:!0,data:c,method:i.method,action:n},n,c))},currentTarget:i}]})}}for(var Bo=0;Bo<hu.length;Bo++){var Uo=hu[Bo],ry=Uo.toLowerCase(),fy=Uo[0].toUpperCase()+Uo.slice(1);xt(ry,"on"+fy)}xt(ns,"onAnimationEnd"),xt(us,"onAnimationIteration"),xt(os,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(Mm,"onTransitionRun"),xt(Om,"onTransitionStart"),xt(Rm,"onTransitionCancel"),xt(cs,"onTransitionEnd"),Xl("onMouseEnter",["mouseout","mouseover"]),Xl("onMouseLeave",["mouseout","mouseover"]),Xl("onPointerEnter",["pointerout","pointerover"]),Xl("onPointerLeave",["pointerout","pointerover"]),bl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bl("onBeforeInput",["compositionend","keypress","textInput","paste"]),bl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function wf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],i=a.event;a=a.listeners;e:{var n=void 0;if(t)for(var u=a.length-1;0<=u;u--){var o=a[u],c=o.instance,m=o.currentTarget;if(o=o.listener,c!==n&&i.isPropagationStopped())break e;n=o,i.currentTarget=m;try{n(i)}catch(p){Ui(p)}i.currentTarget=null,n=c}else for(u=0;u<a.length;u++){if(o=a[u],c=o.instance,m=o.currentTarget,o=o.listener,c!==n&&i.isPropagationStopped())break e;n=o,i.currentTarget=m;try{n(i)}catch(p){Ui(p)}i.currentTarget=null,n=c}}}}function j(e,t){var l=t[Kn];l===void 0&&(l=t[Kn]=new Set);var a=e+"__bubble";l.has(a)||(_f(t,e,2,!1),l.add(a))}function Go(e,t,l){var a=0;t&&(a|=4),_f(l,e,a,t)}var bn="_reactListening"+Math.random().toString(36).slice(2);function Ho(e){if(!e[bn]){e[bn]=!0,bc.forEach(function(l){l!=="selectionchange"&&(dy.has(l)||Go(l,!1,e),Go(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bn]||(t[bn]=!0,Go("selectionchange",!1,t))}}function _f(e,t,l,a){switch(ud(t)){case 2:var i=Vy;break;case 8:i=jy;break;default:i=$o}l=i.bind(null,t,l,e),i=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function qo(e,t,l,a,i){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var o=a.stateNode.containerInfo;if(o===i)break;if(u===4)for(u=a.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;o!==null;){if(u=Il(o),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){a=n=u;continue e}o=o.parentNode}}a=a.return}Bc(function(){var m=n,p=tu(l),S=[];e:{var y=ss.get(e);if(y!==void 0){var h=zi,C=e;switch(e){case"keypress":if(_i(l)===0)break e;case"keydown":case"keyup":h=nm;break;case"focusin":C="focus",h=ou;break;case"focusout":C="blur",h=ou;break;case"beforeblur":case"afterblur":h=ou;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=cm;break;case ns:case us:case os:h=Wd;break;case cs:h=rm;break;case"scroll":case"scrollend":h=Xd;break;case"wheel":h=dm;break;case"copy":case"cut":case"paste":h=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vc;break;case"toggle":case"beforetoggle":h=ym}var _=(t&4)!==0,ie=!_&&(e==="scroll"||e==="scrollend"),f=_?y!==null?y+"Capture":null:y;_=[];for(var s=m,d;s!==null;){var v=s;if(d=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||d===null||f===null||(v=_a(s,f),v!=null&&_.push(ri(s,v,d))),ie)break;s=s.return}0<_.length&&(y=new h(y,C,null,l,p),S.push({event:y,listeners:_}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",y&&l!==eu&&(C=l.relatedTarget||l.fromElement)&&(Il(C)||C[jl]))break e;if((h||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,h?(C=l.relatedTarget||l.toElement,h=m,C=C?Il(C):null,C!==null&&(ie=K(C),_=C.tag,C!==ie||_!==5&&_!==27&&_!==6)&&(C=null)):(h=null,C=m),h!==C)){if(_=Hc,v="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(_=Vc,v="onPointerLeave",f="onPointerEnter",s="pointer"),ie=h==null?y:wa(h),d=C==null?y:wa(C),y=new _(v,s+"leave",h,l,p),y.target=ie,y.relatedTarget=d,v=null,Il(p)===m&&(_=new _(f,s+"enter",C,l,p),_.target=d,_.relatedTarget=ie,v=_),ie=v,h&&C)t:{for(_=my,f=h,s=C,d=0,v=f;v;v=_(v))d++;v=0;for(var R=s;R;R=_(R))v++;for(;0<d-v;)f=_(f),d--;for(;0<v-d;)s=_(s),v--;for(;d--;){if(f===s||s!==null&&f===s.alternate){_=f;break t}f=_(f),s=_(s)}_=null}else _=null;h!==null&&Lf(S,y,h,_,!1),C!==null&&ie!==null&&Lf(S,ie,C,_,!0)}}e:{if(y=m?wa(m):window,h=y.nodeName&&y.nodeName.toLowerCase(),h==="select"||h==="input"&&y.type==="file")var Q=Kc;else if(Qc(y))if(Jc)Q=Am;else{Q=Tm;var O=Em}else h=y.nodeName,!h||h.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?m&&$n(m.elementType)&&(Q=Kc):Q=bm;if(Q&&(Q=Q(e,m))){Zc(S,Q,l,p);break e}O&&O(e,y,m),e==="focusout"&&m&&y.type==="number"&&m.memoizedProps.value!=null&&Pn(y,"number",y.value)}switch(O=m?wa(m):window,e){case"focusin":(Qc(O)||O.contentEditable==="true")&&(kl=O,mu=m,qa=null);break;case"focusout":qa=mu=kl=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,as(S,l,p);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":as(S,l,p)}var H;if(su)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Wl?Fc(e,l)&&(Y="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Y="onCompositionStart");Y&&(jc&&l.locale!=="ko"&&(Wl||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Wl&&(H=Uc()):(kt=p,iu="value"in kt?kt.value:kt.textContent,Wl=!0)),O=An(m,Y),0<O.length&&(Y=new qc(Y,e,null,l,p),S.push({event:Y,listeners:O}),H?Y.data=H:(H=Xc(l),H!==null&&(Y.data=H)))),(H=hm?pm(e,l):xm(e,l))&&(Y=An(m,"onBeforeInput"),0<Y.length&&(O=new qc("onBeforeInput","beforeinput",null,l,p),S.push({event:O,listeners:Y}),O.data=H)),sy(S,e,m,l,p)}wf(S,t)})}function ri(e,t,l){return{instance:e,listener:t,currentTarget:l}}function An(e,t){for(var l=t+"Capture",a=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=_a(e,l),i!=null&&a.unshift(ri(e,i,n)),i=_a(e,t),i!=null&&a.push(ri(e,i,n))),e.tag===3)return a;e=e.return}return[]}function my(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lf(e,t,l,a,i){for(var n=t._reactName,u=[];l!==null&&l!==a;){var o=l,c=o.alternate,m=o.stateNode;if(o=o.tag,c!==null&&c===a)break;o!==5&&o!==26&&o!==27||m===null||(c=m,i?(m=_a(l,n),m!=null&&u.unshift(ri(l,m,c))):i||(m=_a(l,n),m!=null&&u.push(ri(l,m,c)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var yy=/\r\n?/g,gy=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(yy,`
`).replace(gy,"")}function Nf(e,t){return t=zf(t),zf(e)===t}function ae(e,t,l,a,i,n){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Zl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Zl(e,""+a);break;case"className":Mi(e,"class",a);break;case"tabIndex":Mi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,l,a);break;case"style":zc(e,a,n);break;case"data":if(t!=="object"){Mi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ri(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(t!=="input"&&ae(e,t,"name",i.name,i,null),ae(e,t,"formEncType",i.formEncType,i,null),ae(e,t,"formMethod",i.formMethod,i,null),ae(e,t,"formTarget",i.formTarget,i,null)):(ae(e,t,"encType",i.encType,i,null),ae(e,t,"method",i.method,i,null),ae(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Ri(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=_t);break;case"onScroll":a!=null&&j("scroll",e);break;case"onScrollEnd":a!=null&&j("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(g(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Ri(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":j("beforetoggle",e),j("toggle",e),Di(e,"popover",a);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Di(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Yd.get(l)||l,Di(e,l,a))}}function Vo(e,t,l,a,i,n){switch(l){case"style":zc(e,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(g(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Zl(e,a):(typeof a=="number"||typeof a=="bigint")&&Zl(e,""+a);break;case"onScroll":a!=null&&j("scroll",e);break;case"onScrollEnd":a!=null&&j("scrollend",e);break;case"onClick":a!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ac.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),n=e[je]||null,n=n!=null?n[l]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,i);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Di(e,l,a)}}}function Re(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":j("error",e),j("load",e);var a=!1,i=!1,n;for(n in l)if(l.hasOwnProperty(n)){var u=l[n];if(u!=null)switch(n){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:ae(e,t,n,u,l,null)}}i&&ae(e,t,"srcSet",l.srcSet,l,null),a&&ae(e,t,"src",l.src,l,null);return;case"input":j("invalid",e);var o=n=u=i=null,c=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var p=l[a];if(p!=null)switch(a){case"name":i=p;break;case"type":u=p;break;case"checked":c=p;break;case"defaultChecked":m=p;break;case"value":n=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(g(137,t));break;default:ae(e,t,a,p,l,null)}}Rc(e,n,o,c,m,u,i,!1);return;case"select":j("invalid",e),a=u=n=null;for(i in l)if(l.hasOwnProperty(i)&&(o=l[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":u=o;break;case"multiple":a=o;default:ae(e,t,i,o,l,null)}t=n,l=u,e.multiple=!!a,t!=null?Ql(e,!!a,t,!1):l!=null&&Ql(e,!!a,l,!0);return;case"textarea":j("invalid",e),n=i=a=null;for(u in l)if(l.hasOwnProperty(u)&&(o=l[u],o!=null))switch(u){case"value":a=o;break;case"defaultValue":i=o;break;case"children":n=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(g(91));break;default:ae(e,t,u,o,l,null)}_c(e,a,i,n);return;case"option":for(c in l)if(l.hasOwnProperty(c)&&(a=l[c],a!=null))switch(c){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ae(e,t,c,a,l,null)}return;case"dialog":j("beforetoggle",e),j("toggle",e),j("cancel",e),j("close",e);break;case"iframe":case"object":j("load",e);break;case"video":case"audio":for(a=0;a<si.length;a++)j(si[a],e);break;case"image":j("error",e),j("load",e);break;case"details":j("toggle",e);break;case"embed":case"source":case"link":j("error",e),j("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:ae(e,t,m,a,l,null)}return;default:if($n(t)){for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!==void 0&&Vo(e,t,p,a,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null&&ae(e,t,o,a,l,null))}function hy(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,o=null,c=null,m=null,p=null;for(h in l){var S=l[h];if(l.hasOwnProperty(h)&&S!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":c=S;default:a.hasOwnProperty(h)||ae(e,t,h,null,a,S)}}for(var y in a){var h=a[y];if(S=l[y],a.hasOwnProperty(y)&&(h!=null||S!=null))switch(y){case"type":n=h;break;case"name":i=h;break;case"checked":m=h;break;case"defaultChecked":p=h;break;case"value":u=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,t));break;default:h!==S&&ae(e,t,y,h,a,S)}}kn(e,u,o,c,m,p,n,i);return;case"select":h=u=o=y=null;for(n in l)if(c=l[n],l.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":h=c;default:a.hasOwnProperty(n)||ae(e,t,n,null,a,c)}for(i in a)if(n=a[i],c=l[i],a.hasOwnProperty(i)&&(n!=null||c!=null))switch(i){case"value":y=n;break;case"defaultValue":o=n;break;case"multiple":u=n;default:n!==c&&ae(e,t,i,n,a,c)}t=o,l=u,a=h,y!=null?Ql(e,!!l,y,!1):!!a!=!!l&&(t!=null?Ql(e,!!l,t,!0):Ql(e,!!l,l?[]:"",!1));return;case"textarea":h=y=null;for(o in l)if(i=l[o],l.hasOwnProperty(o)&&i!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ae(e,t,o,null,a,i)}for(u in a)if(i=a[u],n=l[u],a.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":y=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(g(91));break;default:i!==n&&ae(e,t,u,i,a,n)}wc(e,y,h);return;case"option":for(var C in l)if(y=l[C],l.hasOwnProperty(C)&&y!=null&&!a.hasOwnProperty(C))switch(C){case"selected":e.selected=!1;break;default:ae(e,t,C,null,a,y)}for(c in a)if(y=a[c],h=l[c],a.hasOwnProperty(c)&&y!==h&&(y!=null||h!=null))switch(c){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ae(e,t,c,y,a,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in l)y=l[_],l.hasOwnProperty(_)&&y!=null&&!a.hasOwnProperty(_)&&ae(e,t,_,null,a,y);for(m in a)if(y=a[m],h=l[m],a.hasOwnProperty(m)&&y!==h&&(y!=null||h!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,t));break;default:ae(e,t,m,y,a,h)}return;default:if($n(t)){for(var ie in l)y=l[ie],l.hasOwnProperty(ie)&&y!==void 0&&!a.hasOwnProperty(ie)&&Vo(e,t,ie,void 0,a,y);for(p in a)y=a[p],h=l[p],!a.hasOwnProperty(p)||y===h||y===void 0&&h===void 0||Vo(e,t,p,y,a,h);return}}for(var f in l)y=l[f],l.hasOwnProperty(f)&&y!=null&&!a.hasOwnProperty(f)&&ae(e,t,f,null,a,y);for(S in a)y=a[S],h=l[S],!a.hasOwnProperty(S)||y===h||y==null&&h==null||ae(e,t,S,y,a,h)}function Bf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function py(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],n=i.transferSize,u=i.initiatorType,o=i.duration;if(n&&o&&Bf(u)){for(u=0,o=i.responseEnd,a+=1;a<l.length;a++){var c=l[a],m=c.startTime;if(m>o)break;var p=c.transferSize,S=c.initiatorType;p&&Bf(S)&&(c=c.responseEnd,u+=p*(c<o?1:(o-m)/(c-m)))}if(--a,t+=8*(n+u)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jo=null,Io=null;function Cn(e){return e.nodeType===9?e:e.ownerDocument}function Uf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fo=null;function xy(){var e=window.event;return e&&e.type==="popstate"?e===Fo?!1:(Fo=e,!0):(Fo=null,!1)}var Hf=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch(Ey)}:Hf;function Ey(e){setTimeout(function(){throw e})}function yl(e){return e==="head"}function Vf(e,t){var l=t,a=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(i),Aa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")fi(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,fi(l);for(var n=l.firstChild;n;){var u=n.nextSibling,o=n.nodeName;n[Ra]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=u}}else l==="body"&&fi(e.ownerDocument.body);l=i}while(l);Aa(t)}function jf(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Xo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Xo(l),Jn(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Ty(e,t,l,a){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ra])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=gt(e.nextSibling),e===null)break}return null}function by(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=gt(e.nextSibling),e===null))return null;return e}function If(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gt(e.nextSibling),e===null))return null;return e}function Qo(e){return e.data==="$?"||e.data==="$~"}function Zo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ay(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ko=null;function Yf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return gt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Xf(e,t,l){switch(t=Cn(l),e){case"html":if(e=t.documentElement,!e)throw Error(g(452));return e;case"head":if(e=t.head,!e)throw Error(g(453));return e;case"body":if(e=t.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jn(e)}var ht=new Map,Qf=new Set;function Dn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zt=b.d;b.d={f:Cy,r:Dy,D:My,C:Oy,L:Ry,m:wy,X:Ly,S:_y,M:zy};function Cy(){var e=Zt.f(),t=pn();return e||t}function Dy(e){var t=Yl(e);t!==null&&t.tag===5&&t.type==="form"?cr(t):Zt.r(e)}var Ea=typeof document>"u"?null:document;function Zf(e,t,l){var a=Ea;if(a&&typeof t=="string"&&t){var i=ct(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Qf.has(i)||(Qf.add(i),e={rel:e,crossOrigin:l,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Re(t,"link",e),be(t),a.head.appendChild(t)))}}function My(e){Zt.D(e),Zf("dns-prefetch",e,null)}function Oy(e,t){Zt.C(e,t),Zf("preconnect",e,t)}function Ry(e,t,l){Zt.L(e,t,l);var a=Ea;if(a&&e&&t){var i='link[rel="preload"][as="'+ct(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+ct(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+ct(l.imageSizes)+'"]')):i+='[href="'+ct(e)+'"]';var n=i;switch(t){case"style":n=Ta(e);break;case"script":n=ba(e)}ht.has(n)||(e=z({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),ht.set(n,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(di(n))||t==="script"&&a.querySelector(mi(n))||(t=a.createElement("link"),Re(t,"link",e),be(t),a.head.appendChild(t)))}}function wy(e,t){Zt.m(e,t);var l=Ea;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ct(a)+'"][href="'+ct(e)+'"]',n=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=ba(e)}if(!ht.has(n)&&(e=z({rel:"modulepreload",href:e},t),ht.set(n,e),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(mi(n)))return}a=l.createElement("link"),Re(a,"link",e),be(a),l.head.appendChild(a)}}}function _y(e,t,l){Zt.S(e,t,l);var a=Ea;if(a&&e){var i=Fl(a).hoistableStyles,n=Ta(e);t=t||"default";var u=i.get(n);if(!u){var o={loading:0,preload:null};if(u=a.querySelector(di(n)))o.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},l),(l=ht.get(n))&&Jo(e,l);var c=u=a.createElement("link");be(c),Re(c,"link",e),c._p=new Promise(function(m,p){c.onload=m,c.onerror=p}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Mn(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:o},i.set(n,u)}}}function Ly(e,t){Zt.X(e,t);var l=Ea;if(l&&e){var a=Fl(l).hoistableScripts,i=ba(e),n=a.get(i);n||(n=l.querySelector(mi(i)),n||(e=z({src:e,async:!0},t),(t=ht.get(i))&&Wo(e,t),n=l.createElement("script"),be(n),Re(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function zy(e,t){Zt.M(e,t);var l=Ea;if(l&&e){var a=Fl(l).hoistableScripts,i=ba(e),n=a.get(i);n||(n=l.querySelector(mi(i)),n||(e=z({src:e,async:!0,type:"module"},t),(t=ht.get(i))&&Wo(e,t),n=l.createElement("script"),be(n),Re(n,"link",e),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function Kf(e,t,l,a){var i=(i=q.current)?Dn(i):null;if(!i)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ta(l.href),l=Fl(i).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ta(l.href);var n=Fl(i).hoistableStyles,u=n.get(e);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,u),(n=i.querySelector(di(e)))&&!n._p&&(u.instance=n,u.state.loading=5),ht.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ht.set(e,l),n||Ny(i,e,l,u.state))),t&&a===null)throw Error(g(528,""));return u}if(t&&a!==null)throw Error(g(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ba(l),l=Fl(i).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function Ta(e){return'href="'+ct(e)+'"'}function di(e){return'link[rel="stylesheet"]['+e+"]"}function Jf(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function Ny(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Re(t,"link",l),be(t),e.head.appendChild(t))}function ba(e){return'[src="'+ct(e)+'"]'}function mi(e){return"script[async]"+e}function Wf(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ct(l.href)+'"]');if(a)return t.instance=a,be(a),a;var i=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),be(a),Re(a,"style",i),Mn(a,l.precedence,e),t.instance=a;case"stylesheet":i=Ta(l.href);var n=e.querySelector(di(i));if(n)return t.state.loading|=4,t.instance=n,be(n),n;a=Jf(l),(i=ht.get(i))&&Jo(a,i),n=(e.ownerDocument||e).createElement("link"),be(n);var u=n;return u._p=new Promise(function(o,c){u.onload=o,u.onerror=c}),Re(n,"link",a),t.state.loading|=4,Mn(n,l.precedence,e),t.instance=n;case"script":return n=ba(l.src),(i=e.querySelector(mi(n)))?(t.instance=i,be(i),i):(a=l,(i=ht.get(n))&&(a=z({},l),Wo(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),be(i),Re(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Mn(a,l.precedence,e));return t.instance}function Mn(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,n=i,u=0;u<a.length;u++){var o=a[u];if(o.dataset.precedence===t)n=o;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var On=null;function kf(e,t,l){if(On===null){var a=new Map,i=On=new Map;i.set(l,a)}else i=On,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var n=l[i];if(!(n[Ra]||n[Ce]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(t)||"";u=e+u;var o=a.get(u);o?o.push(n):a.set(u,[n])}}return a}function Pf(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function By(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uy(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var i=Ta(a.href),n=t.querySelector(di(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rn.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=n,be(n);return}n=t.ownerDocument||t,a=Jf(a),(i=ht.get(i))&&Jo(a,i),n=n.createElement("link"),be(n);var u=n;u._p=new Promise(function(o,c){u.onload=o,u.onerror=c}),Re(n,"link",a),l.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Rn.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ko=0;function Gy(e,t){return e.stylesheets&&e.count===0&&_n(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&_n(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&ko===0&&(ko=62500*py());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_n(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>ko?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Rn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_n(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wn=null;function _n(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wn=new Map,t.forEach(Hy,e),wn=null,Rn.call(e))}function Hy(e,t){if(!(t.state.loading&4)){var l=wn.get(e);if(l)var a=l.get(null);else{l=new Map,wn.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}i=t.instance,u=i.getAttribute("data-precedence"),n=l.get(u)||a,n===a&&l.set(null,i),l.set(u,i),this.count++,a=Rn.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var yi={$$typeof:we,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function qy(e,t,l,a,i,n,u,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xn(0),this.hiddenUpdates=Xn(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ed(e,t,l,a,i,n,u,o,c,m,p,S){return e=new qy(e,t,l,u,c,m,p,S,o),t=1,n===!0&&(t|=24),n=et(3,null,null,t),e.current=n,n.stateNode=e,t=Ru(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:t},zu(n),e}function td(e){return e?(e=ea,e):ea}function ld(e,t,l,a,i,n){i=td(i),a.context===null?a.context=i:a.pendingContext=i,a=al(t),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=il(e,a,t),l!==null&&(Ze(l,e,t),Qa(l,e,t))}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Po(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function id(e){if(e.tag===13||e.tag===31){var t=Ml(e,67108864);t!==null&&Ze(t,e,67108864),Po(e,67108864)}}function nd(e){if(e.tag===13||e.tag===31){var t=nt();t=Qn(t);var l=Ml(e,t);l!==null&&Ze(l,e,t),Po(e,t)}}var Ln=!0;function Vy(e,t,l,a){var i=x.T;x.T=null;var n=b.p;try{b.p=2,$o(e,t,l,a)}finally{b.p=n,x.T=i}}function jy(e,t,l,a){var i=x.T;x.T=null;var n=b.p;try{b.p=8,$o(e,t,l,a)}finally{b.p=n,x.T=i}}function $o(e,t,l,a){if(Ln){var i=ec(a);if(i===null)qo(e,t,a,zn,l),od(e,a);else if(Yy(i,e,t,l,a))a.stopPropagation();else if(od(e,a),t&4&&-1<Iy.indexOf(e)){for(;i!==null;){var n=Yl(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=Tl(n.pendingLanes);if(u!==0){var o=n;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var c=1<<31-Pe(u);o.entanglements[1]|=c,u&=~c}Mt(n),(J&6)===0&&(gn=We()+500,ci(0))}}break;case 31:case 13:o=Ml(n,2),o!==null&&Ze(o,n,2),pn(),Po(n,2)}if(n=ec(a),n===null&&qo(e,t,a,zn,l),n===i)break;i=n}i!==null&&a.stopPropagation()}else qo(e,t,a,null,l)}}function ec(e){return e=tu(e),tc(e)}var zn=null;function tc(e){if(zn=null,e=Il(e),e!==null){var t=K(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ye(t),e!==null)return e;e=null}else if(l===31){if(e=Le(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zn=e,null}function ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Md()){case mc:return 2;case yc:return 8;case Ei:case Od:return 32;case gc:return 268435456;default:return 32}default:return 32}}var lc=!1,gl=null,hl=null,pl=null,gi=new Map,hi=new Map,xl=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function od(e,t){switch(e){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":hl=null;break;case"mouseover":case"mouseout":pl=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function pi(e,t,l,a,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[i]},t!==null&&(t=Yl(t),t!==null&&id(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yy(e,t,l,a,i){switch(t){case"focusin":return gl=pi(gl,e,t,l,a,i),!0;case"dragenter":return hl=pi(hl,e,t,l,a,i),!0;case"mouseover":return pl=pi(pl,e,t,l,a,i),!0;case"pointerover":var n=i.pointerId;return gi.set(n,pi(gi.get(n)||null,e,t,l,a,i)),!0;case"gotpointercapture":return n=i.pointerId,hi.set(n,pi(hi.get(n)||null,e,t,l,a,i)),!0}return!1}function cd(e){var t=Il(e.target);if(t!==null){var l=K(t);if(l!==null){if(t=l.tag,t===13){if(t=ye(l),t!==null){e.blockedOn=t,Ec(e.priority,function(){nd(l)});return}}else if(t===31){if(t=Le(l),t!==null){e.blockedOn=t,Ec(e.priority,function(){nd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ec(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);eu=a,l.target.dispatchEvent(a),eu=null}else return t=Yl(l),t!==null&&id(t),e.blockedOn=l,!1;t.shift()}return!0}function sd(e,t,l){Nn(e)&&l.delete(t)}function Fy(){lc=!1,gl!==null&&Nn(gl)&&(gl=null),hl!==null&&Nn(hl)&&(hl=null),pl!==null&&Nn(pl)&&(pl=null),gi.forEach(sd),hi.forEach(sd)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,lc||(lc=!0,D.unstable_scheduleCallback(D.unstable_NormalPriority,Fy)))}var Un=null;function rd(e){Un!==e&&(Un=e,D.unstable_scheduleCallback(D.unstable_NormalPriority,function(){Un===e&&(Un=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(tc(a||l)===null)continue;break}var n=Yl(l);n!==null&&(e.splice(t,3),t-=3,$u(n,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Aa(e){function t(c){return Bn(c,e)}gl!==null&&Bn(gl,e),hl!==null&&Bn(hl,e),pl!==null&&Bn(pl,e),gi.forEach(t),hi.forEach(t);for(var l=0;l<xl.length;l++){var a=xl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)cd(l),l.blockedOn===null&&xl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],n=l[a+1],u=i[je]||null;if(typeof n=="function")u||rd(l);else if(u){var o=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[je]||null)o=u.formAction;else if(tc(i)!==null)continue}else o=u.action;typeof o=="function"?l[a+1]=o:(l.splice(a,3),a-=3),rd(l)}}}function fd(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ac(e){this._internalRoot=e}Gn.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));var l=t.current,a=nt();ld(l,a,e,t,null,null)},Gn.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ld(e.current,2,null,e,null,null),pn(),t[jl]=null}};function Gn(e){this._internalRoot=e}Gn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sc();e={blockedOn:null,target:e,priority:t};for(var l=0;l<xl.length&&t!==0&&t<xl[l].priority;l++);xl.splice(l,0,e),l===0&&cd(e)}};var dd=fe.version;if(dd!=="19.2.4")throw Error(g(527,dd,"19.2.4"));b.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=T(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var Xy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hn.isDisabled&&Hn.supportsFiber)try{Da=Hn.inject(Xy),ke=Hn}catch{}}return vi.createRoot=function(e,t){if(!L(e))throw Error(g(299));var l=!1,a="",i=xr,n=vr,u=Sr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ed(e,1,!1,null,null,l,a,null,i,n,u,fd),e[jl]=t.current,Ho(e),new ac(t)},vi.hydrateRoot=function(e,t,l){if(!L(e))throw Error(g(299));var a=!1,i="",n=xr,u=vr,o=Sr,c=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.formState!==void 0&&(c=l.formState)),t=ed(e,1,!0,t,l??null,a,i,c,n,u,o,fd),t.context=td(null),l=t.current,a=nt(),a=Qn(a),i=al(a),i.callback=null,il(l,i,a),l=a,t.current.lanes=l,Oa(t,l),Mt(t),e[jl]=t.current,Ho(e),new Gn(t)},vi.version="19.2.4",vi}var Td;function tg(){if(Td)return uc.exports;Td=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(fe){console.error(fe)}}return D(),uc.exports=eg(),uc.exports}var lg=tg();function ag(){const[D,fe]=bd.useState(null),W=[{id:1,question:"1. Explain Raster Scan and Random Scan Display. 👉 Draw diagram + Differences (VERY IMPORTANT)",answer:"📌 100% exam question type",codeExample:`
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
-----------------------------------------
MIDPOINT ELLIPSE ALGORITHM
-----------------------------------------

-----------------------------------------
SIMPLE MEANING
-----------------------------------------

The Midpoint Ellipse Algorithm is used to draw
an ellipse using an incremental method.

It is based on the ellipse equation:

   x²        y²
  ----  +  ----  = 1
  rx²       ry²

It uses a decision parameter to choose the
next pixel position.

Ellipse uses 4-way symmetry.


-----------------------------------------
BASIC IDEA
-----------------------------------------

Ellipse is divided into two regions:

Region 1:
Slope > -1
Move in x-direction

Region 2:
Slope < -1
Move in y-direction

After computing first quadrant,
reflect points to other quadrants.


-----------------------------------------
INITIAL SETUP
-----------------------------------------

Given:
rx = x-radius
ry = y-radius
Center = (xc , yc)

Start point:
(x0 , y0) = (0 , ry)


-----------------------------------------
REGION 1 DECISION PARAMETER
-----------------------------------------

Initial value:

P1(0) = ry² − rx²·ry + (1/4)rx²


-----------------------------------------
REGION 1 CONDITION
-----------------------------------------

While:
2ry²x < 2rx²y


Case 1: P1 < 0
→ Midpoint inside
→ Next point: (x+1 , y)

P1(k+1) = P1k + 2ry²x + ry²


Case 2: P1 ≥ 0
→ Midpoint outside
→ Next point: (x+1 , y−1)

P1(k+1) = P1k + 2ry²x − 2rx²y + ry²


-----------------------------------------
REGION 2 DECISION PARAMETER
-----------------------------------------

Initial value:

P2(0) = ry²(x + 1/2)² + rx²(y − 1)² − rx²ry²


-----------------------------------------
REGION 2 CONDITION
-----------------------------------------

While y ≥ 0


Case 1: P2 > 0
→ Next point: (x , y−1)

P2(k+1) = P2k − 2rx²y + rx²


Case 2: P2 ≤ 0
→ Next point: (x+1 , y−1)

P2(k+1) = P2k + 2ry²x − 2rx²y + rx²


-----------------------------------------
COMPLETE ALGORITHM STEPS
-----------------------------------------

1. Input rx, ry and center (xc , yc)
2. Initialize x = 0, y = ry
3. Compute P1
4. Process Region 1
5. Compute P2
6. Process Region 2
7. Apply 4-way symmetry


-----------------------------------------
4-WAY SYMMETRY
-----------------------------------------

For point (x , y):

(x , y)
(-x , y)
(x , -y)
(-x , -y)

Add center:

x = x + xc
y = y + yc


-----------------------------------------
ADVANTAGES
-----------------------------------------

✔ Efficient incremental method
✔ No floating point calculation
✔ Fast for raster display


-----------------------------------------
DISADVANTAGES
-----------------------------------------

❌ Slight approximation error
❌ More complex than circle algorithm


-----------------------------------------
SHORT EXAM DEFINITION
-----------------------------------------

Midpoint Ellipse Algorithm is an incremental
scan conversion algorithm that uses decision
parameters to generate ellipse points in two
regions using 4-way symmetry.




-----------------------------------------
NUMERICAL EXAMPLE
-----------------------------------------

Given:
rx = 8
ry = 6
Center = (0,0)

rx² = 64
ry² = 36


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = 6

P1 = ry² − rx²·ry + (1/4)rx²
P1 = 36 − (64×6) + 16
P1 = -332


-----------------------------------------
REGION 1 TABLE
-----------------------------------------

Condition:
2ry²x < 2rx²y

| Iter | x | y | P1   | Decision          |
|------|---|---|------|-------------------|
| 0    | 0 | 6 | -332 | P1<0 → (x+1,y)    |
| 1    | 1 | 6 | -224 | P1<0 → (x+1,y)    |
| 2    | 2 | 6 | -44  | P1<0 → (x+1,y)    |
| 3    | 3 | 6 | 208  | P1≥0 → (x+1,y-1)  |
| 4    | 4 | 5 | -108 | P1<0 → (x+1,y)    |
| 5    | 5 | 5 | 288  | P1≥0 → (x+1,y-1)  |
| 6    | 6 | 4 | 148  | P1≥0 → (x+1,y-1)  |
| 7    | 7 | 3 | Exit Region 1            |


-----------------------------------------
REGION 2 INITIAL VALUE
-----------------------------------------

x = 7
y = 3

P2 = 36(7.5)² + 64(2)² − 2304
P2 = 2025 + 256 − 2304
P2 = -23


-----------------------------------------
REGION 2 TABLE
-----------------------------------------

| Iter | x | y | P2   | Decision          |
|------|---|---|------|-------------------|
| 0    | 7 | 3 | -23  | P2≤0 → (x+1,y-1)  |
| 1    | 8 | 2 | 233  | P2>0 → (x,y-1)    |
| 2    | 8 | 1 | 169  | P2>0 → (x,y-1)    |
| 3    | 8 | 0 | Stop | End               |


-----------------------------------------
FINAL POINTS (FIRST QUADRANT)
-----------------------------------------

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


-----------------------------------------
EXAM TIPS
-----------------------------------------

✔ Draw table neatly
✔ Show iterations
✔ Mention both regions
✔ Write symmetry clearly
✔ Final points must be shown


`},{id:6,question:"6. short questions",answer:"",codeExample:`
Elips for your exam :

-----------------------------------------
MIDPOINT ELLIPSE ALGORITHM (WITH EXAMPLE)
-----------------------------------------

Definition:
Midpoint Ellipse Algorithm is used to draw an ellipse
using decision parameters and 4-way symmetry.


-----------------------------------------
BASIC IDEA
-----------------------------------------

Ellipse is divided into 2 regions:

Region 1 → slope > -1 (move in x)
Region 2 → slope < -1 (move in y)


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = ry

P1 = ry² − rx²·ry + (1/4)rx²


-----------------------------------------
REGION 1
-----------------------------------------

Condition:
2ry²x < 2rx²y

If P1 < 0 → (x+1 , y)
If P1 ≥ 0 → (x+1 , y−1)


-----------------------------------------
REGION 2
-----------------------------------------

P2 = ry²(x+1/2)² + rx²(y−1)² − rx²ry²

If P2 > 0 → (x , y−1)
If P2 ≤ 0 → (x+1 , y−1)


-----------------------------------------
SYMMETRY
-----------------------------------------

(x,y), (-x,y), (x,-y), (-x,-y)


-----------------------------------------
EXAMPLE
-----------------------------------------

Given:
rx = 4
ry = 3
Center = (0,0)

rx² = 16
ry² = 9

Initial point:
x = 0
y = 3

P1 = ry² − rx²·ry + (1/4)rx²
P1 = 9 − (16×3) + 4
P1 = -35


Now apply Region 1 (only 2–3 steps enough):

Step 1:
P1 < 0 → (1 , 3)

Step 2:
P1 < 0 → (2 , 3)

Step 3:
P1 ≥ 0 → (3 , 2)


Region 2 (only 1–2 steps):

Next:
(4 , 1)
(4 , 0)


-----------------------------------------
FINAL POINTS (FIRST QUADRANT)
-----------------------------------------

(0,3), (1,3), (2,3), (3,2), (4,1), (4,0)


-----------------------------------------
DIAGRAM
-----------------------------------------

      *
   *     *
 *         *
   *     *
      *

(draw simple ellipse)


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
      
      `},{id:28,question:"28. 2–3 MARK QUESTIONS",answer:"",codeExample:`
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
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:11111,question:"Mid Paper.",answer:"",codeExample:`
=========================================
GRAPHICS PROGRAMMING - SOLVED PAPER
=========================================


-----------------------------------------
Q1 (a) (i)
Question: Define Flood Fill Algorithm.
-----------------------------------------

Answer:
Flood Fill Algorithm is used to fill a connected
region with a specified color starting from a
seed point until the boundary is reached.


-----------------------------------------
Q1 (a) (ii)
Question: What is 2D Translation transformation?
-----------------------------------------

Answer:
2D Translation is a transformation that moves
an object from one position to another by adding
a constant value to its coordinates.

x' = x + tx
y' = y + ty


-----------------------------------------
Q1 (a) (iii)
Question: What is a Viewport?
-----------------------------------------

Answer:
Viewport is the rectangular area on the display
screen where the final image is shown.


-----------------------------------------
Q1 (b) MCQs
-----------------------------------------

1. Flood Fill Algorithm
2. Bresenham’s Algorithm
3. Translation
4. Viewport
5. Line style
6. (0, r)
7. Antialiasing



-----------------------------------------
Q2 (a) (i)
Question: Difference between DDA and Bresenham
-----------------------------------------

Answer:

DDA Algorithm:
- Uses floating point calculations
- Slower
- Less efficient

Bresenham Algorithm:
- Uses integer calculations
- Faster
- More efficient


-----------------------------------------
Q2 (a) (ii)
Question: Difference between Flood Fill and Boundary Fill
-----------------------------------------

Answer:

Flood Fill:
- Fills area until boundary color is found
- Uses interior color

Boundary Fill:
- Fills area until boundary is reached
- Uses boundary color


-----------------------------------------
Q2 (b) (i)
Question: Raster Scan vs Random Scan
-----------------------------------------

Answer:

Raster Scan:
- Draws image line by line
- Used in TV, monitors
- Advantage: Simple and low cost

Random Scan:
- Draws only required lines
- Used in vector displays
- Advantage: High resolution


-----------------------------------------
Q2 (b) (ii)
Question: Midpoint Circle vs Bresenham Circle
-----------------------------------------
-----------------------------------------
MIDPOINT CIRCLE vs BRESENHAM CIRCLE
-----------------------------------------

-----------------------------------------
MIDPOINT CIRCLE ALGORITHM
-----------------------------------------

Definition:
Midpoint Circle Algorithm is used to draw a
circle using a decision parameter to choose
the next pixel.

It checks whether the midpoint is inside or
outside the circle.


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = r

Decision parameter:

p = 1 - r


-----------------------------------------
ALGORITHM STEPS
-----------------------------------------

1. Input radius r and center (xc , yc)
2. Initialize x = 0, y = r
3. Calculate p = 1 - r
4. Plot initial point (x , y)

5. While x < y:

   If p < 0:
      x = x + 1
      p = p + 2x + 1

   Else:
      x = x + 1
      y = y - 1
      p = p + 2x + 1 - 2y

6. Plot symmetric points using 8-way symmetry


-----------------------------------------
FEATURES
-----------------------------------------

✔ Uses decision parameter
✔ Based on midpoint concept
❌ May involve floating calculations


-----------------------------------------
BRESENHAM CIRCLE ALGORITHM
-----------------------------------------

Definition:
Bresenham Circle Algorithm is an efficient
algorithm that uses only integer calculations
to draw a circle.


-----------------------------------------
INITIAL VALUES
-----------------------------------------

x = 0
y = r

Decision parameter:

p = 3 - 2r


-----------------------------------------
ALGORITHM STEPS
-----------------------------------------

1. Input radius r and center (xc , yc)
2. Initialize x = 0, y = r
3. Calculate p = 3 - 2r
4. Plot initial point (x , y)

5. While x < y:

   If p < 0:
      x = x + 1
      p = p + 4x + 6

   Else:
      x = x + 1
      y = y - 1
      p = p + 4x + 6 - 4y

6. Plot symmetric points using 8-way symmetry


-----------------------------------------
FEATURES
-----------------------------------------

✔ Uses only integer arithmetic
✔ Faster and more efficient
✔ Widely used in graphics systems


-----------------------------------------
DIFFERENCE BETWEEN BOTH
-----------------------------------------

Midpoint Circle:
- Uses p = 1 - r
- Concept based on midpoint
- Slightly slower
- May use floating operations

Bresenham Circle:
- Uses p = 3 - 2r
- Uses integer calculations only
- Faster and efficient
- More practical for implementation




-----------------------------------------
Q3 (i)
Question: Scan-line Polygon Fill Algorithm
-----------------------------------------

Answer:

Steps:
1. Find intersections of scan line with polygon edges
2. Sort intersection points
3. Fill pixels between pairs of intersections
4. Repeat for all scan lines

Used to fill polygons efficiently.


-----------------------------------------
Q3 (ii)
Question: Transformation of point P(2,3)
-----------------------------------------

Answer:

Given:
P = (2,3)

Step 1: Translation (2,1)
(2+2 , 3+1) = (4,4)

Step 2: Rotation 90° anticlockwise
(x,y) → (-y,x)

(4,4) → (-4,4)

Step 3: Scaling (2,2)
(-4×2 , 4×2) = (-8 , 8)

Final Answer:
(-8 , 8)


-----------------------------------------
Q3 (iii)
Question: Importance of Computer Graphics
-----------------------------------------

Answer:

1. Education:
Visual learning, simulations

2. Medical:
CT scan, MRI visualization

3. Entertainment:
Games, movies, animation

CG improves understanding and visualization.



-----------------------------------------
Q4 (a)
Question: DDA Line from (2,3) to (10,7)
-----------------------------------------

-----------------------------------------
DDA LINE DRAWING ALGORITHM
-----------------------------------------

1. Input: (x1, y1) and (x2, y2)
2. Calculate:
   dx = x2 - x1
   dy = y2 - y1
3. steps = max(|dx|, |dy|)
4. x_inc = dx / steps
   y_inc = dy / steps
5. Initialize:
   x = x1
   y = y1
6. Plot (x, y)
7. Repeat for steps:
   x = x + x_inc
   y = y + y_inc
   Plot (round(x), round(y))


-----------------------------------------
CALCULATION
-----------------------------------------

Given:
(2,3) to (10,7)

dx = 8
dy = 4

steps = 8

x_inc = 1
y_inc = 0.5


-----------------------------------------
POINTS
-----------------------------------------

(2,3)
(3,3.5)
(4,4)
(5,4.5)
(6,5)
(7,5.5)
(8,6)
(9,6.5)
(10,7)


-----------------------------------------
Q4 (b)
Question: Rotation of point (3,4)
-----------------------------------------

-----------------------------------------
2D ROTATION ALGORITHM
-----------------------------------------

1. Input point (x, y)
2. Choose angle θ
3. Apply formula:

x' = x cosθ - y sinθ
y' = x sinθ + y cosθ


-----------------------------------------
FOR 90° ANTICLOCKWISE
-----------------------------------------

cos90 = 0
sin90 = 1

So:

x' = -y
y' = x


-----------------------------------------
CALCULATION
-----------------------------------------

Given:
(3,4)

x' = -4
y' = 3

Final Answer:
(-4 , 3)


-----------------------------------------
Q4 (b) OR
Question: Bresenham Line from (0,0) to (6,3)
-----------------------------------------

-----------------------------------------
BRESENHAM LINE ALGORITHM
-----------------------------------------

1. Input: (x1, y1), (x2, y2)
2. Calculate:
   dx = x2 - x1
   dy = y2 - y1
3. Decision parameter:
   p = 2dy - dx
4. Initialize:
   x = x1
   y = y1
5. Plot (x, y)

6. Repeat until x = x2:

   If p < 0:
      x = x + 1
      p = p + 2dy

   Else:
      x = x + 1
      y = y + 1
      p = p + 2dy - 2dx

   Plot (x, y)


-----------------------------------------
CALCULATION
-----------------------------------------

dx = 6
dy = 3

p = 2dy - dx = 6 - 6 = 0


-----------------------------------------
POINTS
-----------------------------------------

(0,0)
(1,0)
(2,1)
(3,1)
(4,2)
(5,2)
(6,3)

`},{id:1,question:"1. ",answer:"",codeExample:""},{id:31,question:"31. Explain Illumination Model",answer:"📌 Basic + very important theory",codeExample:`
⭐ Illumination Model  

🔹 Definition  
The Illumination Model is used to calculate how light falls on objects and how they appear on the screen.  

👉 In simple words:  
It tells how bright or dark a surface looks.  


🎯 Why we need it?  

Without illumination:  
Object → flat (no brightness)  

With illumination:  
Object → looks realistic (light, shadow, shine)  



⭐ Types of Light Sources  

1️⃣ Point Light Source  
- Light comes from one point  
- Example: Bulb 💡  

2️⃣ Directional Light Source  
- Light rays are parallel  
- Example: Sunlight ☀️  

3️⃣ Spot Light Source  
- Light in one direction (cone shape)  
- Example: Torch 🔦  



🎯 Think of ONE Example (Very Important)  

Imagine a ball under a light bulb 💡  

        💡  
         |  
        ( )  


Now we see 3 types of light on that ball 👇  



⭐ 1️⃣ Ambient Reflection (Most Easy)  

🔹 Real Life Idea  
Even if light is not directly on the ball,  
you can still see it  

👉 Because light is present everywhere  


🔹 Simple Meaning  
- Whole object is slightly visible  
- Same brightness everywhere  


🔹 Example  
(   )  

👉 Entire ball is light grey  



⭐ 2️⃣ Diffuse Reflection  

🔹 Real Life Idea  
Light falls on the ball  

👉 Side facing light becomes brighter  


🔹 Simple Meaning  
- Depends on angle of light  
- Not shiny  
- Like wall / paper  


🔹 Example  

   💡  
      
    (◐)  

Left side → bright  
Right side → dark  



⭐ 3️⃣ Specular Reflection ⭐ (IMPORTANT)  

🔹 Real Life Idea  
You see a small shiny white spot on the ball  


🔹 Simple Meaning  
- Very bright spot  
- Seen in mirror / metal  


🔹 Example  

   💡  
      
    (◐•)  

👉 • = shiny spot  



🔥 FINAL UNDERSTANDING (VERY IMPORTANT)  

Type        What you see on object  
-----------------------------------------  
Ambient     Full object slightly visible  
Diffuse     Light side bright, other side dark  
Specular    Small shiny spot  



💡 Super Easy Memory Trick  

Ambient  → See object  
Diffuse  → Shape of object  
Specular → Shine of object  



✅ One Line (Exam)  

Ambient gives base light, diffuse gives surface brightness based on angle, and specular gives shiny 
highlights.  
      
      `},{id:32,question:"32. Explain Color Models",answer:"📌 Frequently asked question",codeExample:`
⭐ What is a Color Model?

Definition:
A Color Model is a method used to represent colors using numbers.

👉 Simple:
It tells the computer how to create colors.

🎨 Types of Color Models:
- RGB ⭐ (MOST IMPORTANT)
- CMY
- HSV ⭐


==================================================
1️⃣ RGB Color Model ⭐
==================================================

Idea:
RGB uses 3 basic colors:
- Red (R)
- Green (G)
- Blue (B)

👉 These colors combine to form all other colors.

Range:
Each value = 0 to 255

Examples:
(255, 0, 0)     → Red
(0, 255, 0)     → Green
(0, 0, 255)     → Blue
(255,255,255)   → White
(0,0,0)         → Black

Simple Diagram:
        Red
         ●
        / \\
       /   \\
      ●-----●
   Green   Blue

Where Used:
- TV
- Mobile
- Computer Screen

Key Points:
- Mixing more light = brighter color
- All combined = White



==================================================
2️⃣ CMY Color Model
==================================================

Idea:
CMY is used in printing.

Basic Colors:
- Cyan (C)
- Magenta (M)
- Yellow (Y)

Relation with RGB:
C = 1 − R
M = 1 − G
Y = 1 − B

Simple Meaning:
- Opposite of RGB
- Used in printers

Examples:
- Cyan absorbs Red
- Magenta absorbs Green
- Yellow absorbs Blue

Simple Diagram Idea:
RGB (Light)  →  CMY (Ink)
Opposite color system



==================================================
3️⃣ HSV Color Model ⭐
==================================================

Idea:
HSV represents color like humans see it.

Components:
H → Hue (color type)
S → Saturation (purity)
V → Value (brightness)


--------------------------------------------------
1. Hue (H)
--------------------------------------------------
👉 Type of color

Range:
0° to 360°

Examples:
0°   → Red
120° → Green
240° → Blue


--------------------------------------------------
2. Saturation (S)
--------------------------------------------------
👉 Purity of color

0 → Grey (no color)
1 → Pure color


--------------------------------------------------
3. Value (V)
--------------------------------------------------
👉 Brightness

0 → Black
1 → Bright color

Simple Diagram:
        (Top = Bright)
           ●
          / \\
         /   \\
        /     \\
       ●-------●
   (Color circle base)

🎯 Real-Life Understanding:
Hue        → Which color (Red/Blue)
Saturation → Pure or dull
Value      → Bright or dark




📊 SUMMARY TABLE

| Model | Components             | Used in       |
| ----- | ---------------------- | ------------- |
| RGB   | Red, Green, Blue       | Screens       |
| CMY   | Cyan, Magenta, Yellow  | Printing      |
| HSV   | Hue, Saturation, Value | Image editing |



==================================================
✅ ONE-LINE EXAM ANSWER
==================================================

Color models represent colors in computer graphics such as RGB for displays, CMY for 
printing, and HSV for intuitive color selection.
      
      `},{id:33,question:"33. Explain 3D Transformations",answer:"📌 Important long answer",codeExample:`
⭐ What are 3D Transformations?

Definition:
3D Transformation is used to change position, size, or orientation of objects in 3D space.

👉 Coordinates used:
(x, y, z)

Example:
Cube, Sphere, etc.


==================================================
⭐ Types of 3D Transformations
==================================================
1. Translation
2. Scaling
3. Rotation ⭐
4. Composite Transformation ⭐


==================================================
1️⃣ Translation (Move Object)
==================================================

Idea:
Move object in x, y, z directions.

Formula:
x' = x + tx
y' = y + ty
z' = z + tz

Matrix:
| 1  0  0  tx |
| 0  1  0  ty |
| 0  0  1  tz |
| 0  0  0  1  |

Simple Diagram:
Before → (x, y, z)
          ↓ move
After  → (x+tx, y+ty, z+tz)

Example:
P(1,2,3)
tx=2, ty=1, tz=3

New Point:
(3,3,6)


==================================================
2️⃣ Scaling (Change Size)
==================================================

Idea:
Increase or decrease size.

Formula:
x' = x × sx
y' = y × sy
z' = z × sz

Matrix:
| sx  0   0   0 |
| 0   sy  0   0 |
| 0   0   sz  0 |
| 0   0   0   1 |

Simple Diagram:
Small Object → Enlarged Object

Example:
(1,2,3)
sx=2, sy=2, sz=2

→ (2,4,6)


==================================================
3️⃣ Rotation ⭐ (VERY IMPORTANT)
==================================================

Idea:
Rotate object around X, Y, Z axis.

----------------------------------
Rotation about X-axis
----------------------------------
| 1    0        0     0 |
| 0  cosθ   -sinθ    0 |
| 0  sinθ    cosθ    0 |
| 0    0        0     1 |

Effect:
👉 Up-down rotation

----------------------------------
Rotation about Y-axis
----------------------------------
| cosθ   0   sinθ   0 |
| 0      1     0    0 |
| -sinθ  0   cosθ   0 |
| 0      0     0    1 |

Effect:
👉 Left-right rotation

----------------------------------
Rotation about Z-axis
----------------------------------
| cosθ  -sinθ  0  0 |
| sinθ   cosθ  0  0 |
| 0        0   1  0 |
| 0        0   0  1 |

Effect:
👉 Like 2D rotation

Simple Diagram Idea:

Z-axis:
   ↻ (like circle rotation)

X-axis:
   ↑↓ tilt

Y-axis:
   ←→ turn


==================================================
4️⃣ Composite Transformation ⭐
==================================================

Idea:
Apply multiple transformations together.

Example Order:
Scale → Rotate → Translate

Formula:
Final Matrix = T × R × S

(T = Translation, R = Rotation, S = Scaling)

⚠ Important:
Order matters ❗

Rotate → Translate ≠ Translate → Rotate

Simple Diagram:
S → R → T
↓
Final Result


==================================================
📊 SUMMARY TABLE
==================================================

Transformation → Purpose
Translation    → Move object
Scaling        → Change size
Rotation       → Rotate object
Composite      → Combine operations


==================================================
✅ ONE-LINE EXAM ANSWER
==================================================

3D transformations are used to modify objects in 3D space using translation, scaling, rotation, and 
composite transformations.







⭐ 3D / Graphics QUICK TRICKS (EXAM REVISION)

==================================================
1️⃣ TRANSLATION TRICK
==================================================

Formula:
x' = x + tx
y' = y + ty
z' = z + tz

✅ Trick:
👉 Just ADD values

Example:
(2,3,4) + (1,2,3) = (3,5,7)

✔ Matrix NOT needed (unless asked)


==================================================
2️⃣ SCALING TRICK
==================================================

Formula:
x' = x × sx
y' = y × sy
z' = z × sz

✅ Trick:
👉 Just MULTIPLY values

Example:
(2,3,4) × (2,2,2) = (4,6,8)


==================================================
3️⃣ ROTATION TRICK ⭐ (MOST IMPORTANT)
==================================================

🔥 MUST REMEMBER VALUES:

Angle   cosθ   sinθ
0°      1      0
90°     0      1
180°   -1      0
270°    0     -1

----------------------------------
🔹 Z-axis Rotation (MOST USED)
----------------------------------

90°  → (x, y) → (-y, x)
180° → (x, y) → (-x, -y)
270° → (x, y) → (y, -x)

Example:
(2,3) → (-3,2)

----------------------------------
🔹 X-axis Rotation
----------------------------------

👉 Only y and z change

90° → (x, y, z) → (x, -z, y)

----------------------------------
🔹 Y-axis Rotation
----------------------------------

👉 Only x and z change

90° → (x, y, z) → (z, y, -x)


==================================================
4️⃣ REFLECTION TRICK
==================================================

X-axis   → (x , -y)
Y-axis   → (-x , y)
Origin   → (-x , -y)


==================================================
5️⃣ SHEARING TRICK
==================================================

X-direction:
x' = x + shx × y

Y-direction:
y' = y + shy × x


==================================================
6️⃣ WINDOW → VIEWPORT TRICK ⭐
==================================================

Formula:
xv = xvmin + (xw − xwmin) × Sx
yv = yvmin + (yw − ywmin) × Sy

Steps:
1. Find Sx, Sy
2. Substitute values
3. Solve step-by-step


==================================================
7️⃣ COHEN–SUTHERLAND TRICK
==================================================

0000 → INSIDE ✔
AND ≠ 0 → REJECT ❌
Else → CLIP ✂


==================================================
8️⃣ POLYGON CLIPPING TRICK
==================================================

IN → IN   → Keep point
IN → OUT  → Intersection
OUT → IN  → Intersection + Point
OUT → OUT → Nothing


==================================================
9️⃣ ILLUMINATION TRICK
==================================================

Ambient  → Whole object visible
Diffuse  → Light side bright
Specular → Shiny spot


==================================================
🔟 COLOR MODEL TRICK
==================================================

RGB → Screen
CMY → Printer
HSV → Human understanding


==================================================
🔥 FINAL GOLDEN RULE
==================================================

ADD       → Translation
MULTIPLY  → Scaling
ROTATE    → Use shortcut values






⭐ What is (2, 3, 4)?

Definition:
(2, 3, 4) is a point in 3D space.

Format:
(x, y, z)

So:
x = 2
y = 3
z = 4

👉 It represents a position in 3D space.


==================================================
🎯 WHERE USED IN EXAM
==================================================

👉 Question will GIVE this point.

Example:
Translate point P(2,3,4) by (1,2,3)

Here:
(2,3,4) → Given point
(1,2,3) → Transformation values


==================================================
⭐ HOW TO USE IT
==================================================

----------------------------------
1️⃣ TRANSLATION
----------------------------------

Given:
P(2,3,4)
tx=1, ty=2, tz=3

Formula:
x' = x + tx
y' = y + ty
z' = z + tz

Solution:
x' = 2 + 1 = 3
y' = 3 + 2 = 5
z' = 4 + 3 = 7

👉 New Point:
(3,5,7)


----------------------------------
2️⃣ SCALING
----------------------------------

Given:
P(2,3,4)
sx=2, sy=2, sz=2

Formula:
x' = x × sx
y' = y × sy
z' = z × sz

Solution:
x' = 2×2 = 4
y' = 3×2 = 6
z' = 4×2 = 8

👉 New Point:
(4,6,8)


----------------------------------
3️⃣ ROTATION (IDEA)
----------------------------------

Given:
P(2,3,4)

👉 After rotation:
- Values change position
- Signs may change
- Depends on axis (X, Y, Z)


==================================================
⭐ REAL LIFE MEANING
==================================================

(2,3,4) means:

2 steps → X direction
3 steps → Y direction
4 steps → Z direction

Simple Visualization:

       z
       ↑
       |
       |        • (2,3,4)
       |
       |
       +----------→ x
      /
     /
    ↓
    y


==================================================
⭐ IMPORTANT UNDERSTANDING
==================================================

👉 Values are NOT random
👉 Always given in question
👉 You only APPLY formula


==================================================
📊 QUICK SUMMARY
==================================================

Value        → Meaning
(2,3,4)      → Point position
(tx,ty,tz)   → Movement (Translation)
(sx,sy,sz)   → Size change (Scaling)


==================================================
🔥 FINAL CLARITY
==================================================

Given:
Point → (2,3,4)

Apply:
Transformation → Formula

Result:
New Point → Final Answer

      `},{id:34,question:"34. Explain Projection in Computer Graphics",answer:"📌 Very important concept",codeExample:`
⭐ What is Projection?

Definition:
Projection is the process of converting a 3D object into a 2D view (screen).

👉 Simple Meaning:
3D → 2D conversion

👉 Used to display 3D objects on flat screens


==================================================
🎯 REAL-LIFE IDEA
==================================================

- Real world = 3D
- Screen / Photo = 2D

👉 Conversion = Projection

Example:
Mobile Camera 📱
3D scene → 2D image


==================================================
⭐ TYPES OF PROJECTION
==================================================

1. Parallel Projection
2. Perspective Projection ⭐


==================================================
1️⃣ PARALLEL PROJECTION
==================================================

Idea:
All projection lines are parallel.

Diagram:
|||||||||||||
|||||||||||||
|||||||||||||

Object:
   |----|
  /    /|
 |----| |
 |    | /
 |----|

👉 Lines do NOT meet

Key Features:
- No depth effect
- Same size (near = far)
- Looks flat

Example:
Near object = same size
Far object  = same size

Used In:
- Engineering drawings

Types (optional):
- Orthographic
- Oblique


==================================================
2️⃣ PERSPECTIVE PROJECTION ⭐
==================================================

Idea:
Projection lines meet at one point (eye/camera).

Diagram:
\\   |   /
 \\  |  /
  \\ | /
   \\|/

👉 Lines meet at a point

Object Example:
     /\\
    /  \\
   /____\\
    \\  /
     \\/

Key Features:
- Realistic view
- Near objects → BIG
- Far objects → SMALL

🎯 Real-Life Example:

Railway Track:

||        ||
||      ||
||    ||
||  ||
||||

👉 Lines appear to meet
👉 This is perspective effect


==================================================
📊 DIFFERENCE TABLE
==================================================

Feature      → Parallel        → Perspective
Lines        → Parallel        → Meet at a point
Size         → Same            → Smaller with distance
Realism      → Low             → High
Use          → Engineering     → Games, Movies


==================================================
🔥 EASY MEMORY TRICK
==================================================

Parallel   → Same size
Perspective→ Real life view


==================================================
✅ ONE-LINE EXAM ANSWER
==================================================

Projection is the method of converting 3D objects into 2D images using parallel and perspective projection techniques.
      




🎯 First Understand ONE Thing

👉 Your screen is flat (2D)
👉 But objects (cube, ball) are 3D

So computer must convert 3D → 2D

👉 That process = Projection


🔥 Real Life Example (Very Easy)

Example: Your Mobile Camera 📱
Real world = 3D
Photo = 2D

👉 That conversion = Projection


⭐ Two Types (Very Easy)

1️⃣ Parallel Projection

Idea

Imagine sunlight rays ☀️

||||||||||
||||||||||
||||||||||

👉 All rays are parallel

What happens?

👉 Objects look SAME SIZE
👉 No depth

Example

Near object = same size
Far object  = same size

👉 Looks flat (not realistic)


2️⃣ Perspective Projection ⭐

Idea

Imagine your eyes 👀 or camera

\\   |   /
 \\  |  /
  \\ | /
   \\|/

👉 All lines meet at one point

What happens?

👉 Near object = BIG
👉 Far object = SMALL


🎯 Real Example (VERY IMPORTANT)

Railway track:

||        ||
||      ||
||    ||
||  ||
||||

👉 Looks like lines meet
👉 This is Perspective Projection
      
      `},{id:35,question:"35. Explain Hidden Surface Removal Techniques",answer:"📌 High scoring question",codeExample:`
⭐ Hidden Surface Removal

🎯 Definition

Hidden Surface Removal is the process of removing parts of objects that are NOT visible to the viewer.

👉 Simple meaning:
Show only FRONT visible parts
Hide BACK parts


🎯 Real Life Example

Think of a cube:

   ______
  /     /|
 /_____/ |
 |     | |
 |     | /
 |_____|/

👉 You cannot see the back side
👉 Only visible faces are shown


⭐ Techniques (Important)

1️⃣ Back Face Removal ⭐

👉 Idea:
Remove faces that are facing AWAY from the viewer

✔ Front face → Visible
❌ Back face → Hidden

👉 Rule:
If face is facing viewer → DRAW
If face is away → REMOVE

✔ Advantage:
Fast
Simple

❌ Disadvantage:
Works only for CLOSED objects


2️⃣ Depth Buffer (Z-buffer) ⭐

👉 Idea:
Store depth (Z value) for each pixel

👉 Rule:
Smaller Z → Near → SHOW
Larger Z → Far → HIDE

Example:
Object A → z = 2 (near)
Object B → z = 5 (far)

👉 Show A, hide B

Steps:
1. Initialize Z-buffer
2. Compare depth of each pixel
3. Keep nearest pixel

✔ Advantage:
Accurate
Works for all objects

❌ Disadvantage:
Uses more memory


3️⃣ Scan Line Method

👉 Idea:
Process image LINE BY LINE

Steps:
1. Take one horizontal line
2. Find visible surfaces
3. Draw visible parts
4. Move to next line

Example:
-------- Scan line --------
Check which surface is in front
Draw that part

✔ Advantage:
Efficient for polygons

❌ Disadvantage:
Complex to implement


⭐ Summary (Easy)

Back Face → remove back surfaces
Z-buffer  → check depth
Scan Line → line by line


🎯 Memory Trick

Back Face → Back remove
Z-buffer  → Depth check
Scan Line → Row by row


✅ One Line (Exam)

Hidden Surface Removal shows only visible parts of objects using 
Back Face Removal, Z-buffer, and Scan Line methods.
      `},{id:36,question:"36. Explain Back Face Detection Algorithm",answer:"📌 Often asked",codeExample:`
⭐ Back Face Detection Algorithm

🎯 Definition

Back Face Detection is used to remove surfaces (faces) that are facing AWAY from the viewer.

👉 Simple meaning:
Do NOT draw back side of object


🎯 Real Life Idea

Think of a box:

   ______
  /     /|
 /_____/ |
 |     | |
 |     | /
 |_____|/

👉 Only front faces are visible
👉 Back faces are hidden


⭐ Key Concept

👉 Each surface has a NORMAL VECTOR
→ It tells direction of the surface

👉 Compare:
Surface Direction (Normal)
          vs
Viewer Direction


⭐ Condition (VERY IMPORTANT)

✔ Case 1: Visible Surface

Dot Product < 0
👉 Surface facing viewer
👉 DRAW it

❌ Case 2: Hidden Surface

Dot Product > 0
👉 Surface facing away
👉 REMOVE it


⭐ Easy Rule (No Formula Trick)

👉 If face is towards you → DRAW ✔
👉 If face is away → REMOVE ❌


⭐ Example

Viewer → 👀

   ______
  /     /|
 /_____/ |
 |     | |
 |     | /
 |_____|/

👉 Back faces are NOT drawn


⭐ Algorithm (Write in Exam)

1. Consider each surface of object

2. Find normal vector of surface

3. Compare with viewer direction

4. If surface faces viewer
   → Display it

5. Else
   → Remove it

6. Repeat for all surfaces


⭐ Advantages

✔ Fast
✔ Easy to implement


⭐ Disadvantages

❌ Works only for closed objects
❌ Cannot handle overlapping surfaces properly


⭐ Memory Trick

Front face → DRAW ✔
Back face  → REMOVE ❌


✅ One Line (Exam)

Back Face Detection removes surfaces facing away from the viewer using normal vector direction.
      





🧠 2–3 MARK (JUST READ)
RGB → Red, Green, Blue
HSV → Hue, Saturation, Value
Perspective → realistic view
Z-buffer → depth comparison
Back-face → remove invisible surfaces
      `},{id:41,question:"41. What is Multimedia and Animation?",answer:"📌 Basic theory question",codeExample:`
⭐ What is Multimedia?

🎯 Definition

Multimedia is the combination of different types of media such as:

• Text
• Images
• Audio
• Video
• Animation

👉 Simple meaning:
Using many types of media together


🎯 Example

YouTube Video =
Video + Audio + Text + Animation


⭐ What is Animation?

🎯 Definition

Animation is the process of creating movement by displaying a sequence of images (frames)

👉 Simple meaning:
Many images shown quickly → looks like motion


🎯 Real Life Idea

Flipbook 📖

Page 1 → small change
Page 2 → small change
Page 3 → small change

👉 Flip fast → looks like motion
👉 This is Animation


⭐ Applications of Multimedia & Animation

1️⃣ Education
• Online learning
• Animated videos

2️⃣ Entertainment
• Movies 🎬
• Games 🎮

3️⃣ Advertising
• Product ads
• Social media content

4️⃣ Business
• Presentations
• Training videos

5️⃣ Medical Field
• Surgery simulation
• Training animations


⭐ Quick Difference

Multimedia → Combination of media
Animation  → Moving images (frames)


🎯 Memory Trick

Multimedia → MANY media
Animation  → MOVEMENT


✅ One Line (Exam)

Multimedia is the integration of text, audio, video, and animation, while animation 
creates motion using a sequence of images.
      
      `},{id:42,question:"42. Explain Flash Interface.",answer:"📌 Very common exam question",codeExample:`
⭐ Flash Interface

🎯 Definition

Flash Interface is the working area where we create animations and designs.

👉 It includes:
• Stage
• Timeline
• Layers
• Properties Panel


1️⃣ Stage ⭐

🎯 Definition

Stage is the main drawing area

👉 Simple meaning:
Screen / Canvas where objects are placed

Example:
Draw circle, text, image here

👉 Whatever is on stage → visible in final animation


2️⃣ Timeline ⭐

🎯 Definition

Timeline controls animation and time

👉 Simple meaning:
Shows frames (steps of animation)

Example:
Frame 1 → image
Frame 2 → small change
Frame 3 → movement

👉 More frames = smoother animation


3️⃣ Layers

🎯 Definition

Layers organize objects separately

👉 Simple meaning:
Like stack of sheets

Example:
Layer 1 → background
Layer 2 → character
Layer 3 → text

👉 Helps avoid mixing objects


4️⃣ Properties Panel

🎯 Definition

Used to change object settings

👉 Simple meaning:
Edit size, color, position

Example:
• Change color
• Change width/height
• Change position


⭐ Summary

Stage     → Drawing area
Timeline  → Animation control
Layers    → Organize objects
Properties→ Edit objects


🎯 Memory Trick

Stage → Draw
Timeline → Time
Layers → Organize
Properties → Edit


✅ One Line (Exam)

Flash interface consists of stage, timeline, layers, and 
properties panel used for creating and controlling animations.
      
      `},{id:43,question:"43. Explain Frames and Keyframes.",answer:"📌 Important short/long question",codeExample:`
⭐ Frames and Keyframes

🎯 Basic Idea

Animation = many images (frames) shown quickly → looks like motion


1️⃣ Frame

🎯 Definition

Frame is a single image in an animation sequence

👉 Simple meaning:
One picture = One frame

Example:
Frame 1 → Ball at left
Frame 2 → Ball moves slightly
Frame 3 → Ball moves more

👉 Many frames together → Animation


2️⃣ Keyframe ⭐

🎯 Definition

Keyframe is a special frame where major change happens

👉 Simple meaning:
Important frame (start / end / big change)

Example:

Keyframe 1 → Ball at start
Keyframe 2 → Ball at end

👉 Computer fills in-between frames automatically


🎯 Role in Animation

Frames:
👉 Show smooth movement

Keyframes:
👉 Define important positions (start & end)


🎯 Very Important Example

Keyframe 1 → Ball at left
Frames      → Smooth movement
Keyframe 2 → Ball at right

👉 Final result → Moving ball animation


⭐ Difference

| Feature | Frame         | Keyframe        |
| ------- | ------------- | --------------- |
| Meaning | Normal image  | Important image |
| Change  | Small change  | Major change    |
| Role    | Smooth motion | Define motion   |
| Number  | Many          | Few             |


🎯 Memory Trick

Frame → Every step
Keyframe → Important step


✅ One Line (Exam)

Frames are individual images in animation, while keyframes define major 
changes and control the animation.
      
      `},{id:44,question:"44. Explain Types of Animation in Flash.",answer:"📌 Very important question",codeExample:`
⭐ Types of Animation in Flash

🎯 Basic Idea

Animation in Flash can be created using:

1. Frame-by-Frame Animation
2. Tween Animation ⭐
   • Motion Tween
   • Shape Tween


1️⃣ Frame-by-Frame Animation

🎯 Definition

Each frame is drawn separately

👉 Simple meaning:
Like a flipbook (every frame is different)

Example:
Frame 1 → Ball left
Frame 2 → Ball middle
Frame 3 → Ball right

👉 You draw each step manually

✔ Advantage:
Full control

❌ Disadvantage:
Time-consuming


2️⃣ Tween Animation ⭐

🎯 Definition

Computer automatically creates in-between frames

👉 Simple meaning:
You set start and end, Flash fills the motion

Example:
Keyframe 1 → Ball left
Keyframe 2 → Ball right

👉 Smooth animation automatically created


⭐ Types of Tween Animation

🔹 2.1 Motion Tween ⭐

🎯 Definition

Used to MOVE object from one position to another.

👉 What changes:
• Position
• Size
• Rotation
• Opacity

Example:
Ball moves left → right

👉 Shape remains SAME


🔹 2.2 Shape Tween

🎯 Definition

Used to CHANGE shape of object.

Example:
Circle → Square

Key Point:
👉 Shape changes completely


⭐ Summary

| Type           | Work                     |
| -------------- | ------------------------ |
| Frame-by-frame | Draw each frame manually |
| Motion Tween   | Move object              |
| Shape Tween    | Change shape             |


🎯 Memory Trick

Frame-by-frame → Draw ALL
Motion Tween   → MOVE
Shape Tween    → SHAPE change


✅ One Line (Exam)

Flash animation includes frame-by-frame animation and tween animation, where motion tween 
moves objects and shape tween changes shapes.    
  
      `},{id:45,question:"45. Explain Layers in Flash.",answer:"📌 Often asked",codeExample:`
⭐ Layers in Flash

🎯 Definition

Layers are used to organize objects separately in Flash

👉 Simple meaning:
Like transparent sheets stacked on each other


🎯 Structure Example

Top Layer    → Text
Middle Layer → Character
Bottom Layer → Background

👉 Each layer works independently


⭐ Types of Layers

1️⃣ Normal Layer

🎯 Definition:
Standard layer used to draw objects

👉 Use:
• Shapes
• Text
• Animation

Example:
Circle, square, text


2️⃣ Mask Layer

🎯 Definition:
Used to hide/show parts of another layer

👉 Simple meaning:
Like a window effect

Example:
Only part of image is visible


3️⃣ Masked Layer

🎯 Definition:
Layer affected by mask layer

👉 Simple meaning:
Shows only visible area defined by mask

Example:
Image visible inside mask shape


4️⃣ Guide Layer

🎯 Definition:
Helps define path for motion

👉 Simple meaning:
Draw path for object to follow

Example:
Curved line for movement


5️⃣ Guided Layer ⭐

🎯 Definition:
Object follows path from guide layer

👉 Simple meaning:
Object moves along guide path

Example:
Ball moves in curve path


⭐ Summary

Normal → Draw objects
Mask   → Hide/Show
Masked → Visible part only
Guide  → Path
Guided → Follow path


🎯 Memory Trick

Normal → Draw
Mask → Hide
Masked → Show part
Guide → Path
Guided → Follow path


✅ One Line (Exam)

Layers in Flash organize objects and include normal, mask, masked, guide, and guided layers 
for visibility and motion control.
      
      `},{id:46,question:"46. Explain Motion Tween Animation with steps.",answer:"📌 Practical + theory question",codeExample:`
⭐ Motion Tween Animation

🎯 Definition

Motion Tween is used to move an object from one position to another automatically

👉 Simple meaning:
Set START + END → Flash creates movement


🎯 Concept

Start Position → End Position
Flash creates smooth motion between them


⭐ Steps of Motion Tween (VERY IMPORTANT)

1️⃣ Create Object

👉 Draw shape on Stage
Example: Ball, text, image


2️⃣ Convert to Symbol ⭐

👉 Right click → Convert to Symbol (F8)

👉 Required for motion tween


3️⃣ Create Keyframes ⭐

👉 Frame 1  → Insert Keyframe
👉 Frame 20 → Insert Keyframe

👉 Start and End points


4️⃣ Move Object ⭐

👉 Go to Frame 20
👉 Move object to new position

Example:
Frame 1  → Ball at left
Frame 20 → Ball at right


5️⃣ Apply Motion Tween

👉 Right click between frames
→ Create Motion Tween

👉 Flash creates animation automatically


6️⃣ Use Timeline ⭐

👉 Timeline controls animation speed

👉 More frames = smoother motion


🎯 Example

Frame 1  → Ball left
Frame 20 → Ball right

👉 Result:
Ball moves smoothly left → right


⭐ Important Roles

| Part            | Role                    |
| --------------- | ----------------------- |
| Keyframes       | Define start & end      |
| Object Movement | Change position         |
| Timeline        | Controls animation time |


⭐ Advantages

✔ Easy to use
✔ Saves time
✔ Smooth animation


🎯 Memory Trick

Draw → Convert → Keyframe → Move → Tween


✅ One Line (Exam)

Motion tween animation creates smooth movement by defining keyframes and automatically 
generating intermediate frames.
      
      `},{id:47,question:"47. Explain Flash Tools (any 5).",answer:"📌 Short question",codeExample:`
⭐ Flash Tools (Any 5)

🎯 Definition

Flash tools are used to draw, edit, and create objects in animation


1️⃣ Selection Tool

👉 Use:
Select and move objects

Example:
Click shape → drag it


2️⃣ Line Tool

👉 Use:
Draw straight lines

Example:
Draw line between two points


3️⃣ Brush Tool

👉 Use:
Draw freehand shapes

Example:
Like painting with brush


4️⃣ Text Tool

👉 Use:
Add text

Example:
Write "Hello"


5️⃣ Eraser Tool

👉 Use:
Remove unwanted parts

Example:
Erase lines or shapes


⭐ Summary

Selection → Select & move
Line      → Draw straight line
Brush     → Freehand drawing
Text      → Add text
Eraser    → Remove drawing


🎯 Memory Trick

Select → Draw → Paint → Write → Erase


✅ One Line (Exam)

Flash tools like selection, line, brush, text, and eraser are used to create and edit animation objects.
      
      `},{id:48,question:"48. 2–3 MARK (JUST READ)",answer:"",codeExample:`
⭐ Flash Basics (Important Terms)

1️⃣ .fla → Source File

👉 Original editable file in Flash

👉 Simple meaning:
File where you CREATE and EDIT animation

Contains:
• Layers
• Timeline
• Objects


2️⃣ .swf → Output File

👉 Final output file

👉 Simple meaning:
File used to PLAY animation

Used in:
• Browser
• Media player


3️⃣ Stage → Working Area

👉 Main drawing area

👉 Simple meaning:
Canvas / Screen

👉 Whatever is on stage → visible in final animation


4️⃣ Timeline → Animation Control

👉 Controls frames and timing

👉 Simple meaning:
Shows animation flow over time

👉 More frames = smoother animation


5️⃣ Keyframe → Change Point

👉 Frame where major change happens

👉 Simple meaning:
Start / End of movement

Example:
Frame 1  → Ball left
Frame 20 → Ball right


⭐ Super Short Summary

.fla     → Editable file
.swf     → Output file
Stage    → Drawing area
Timeline → Controls animation
Keyframe → Important change


🎯 Memory Trick

Edit → Play → Draw → Time → Change


✅ One Line (Exam)

.fla is the editable file, .swf is the output file, stage is the drawing area, timeline controls animation, 
and keyframe defines major changes.
      
      `},{id:51,question:"51. What is MATLAB? Explain its features and uses.",answer:"📌 Basic theory question",codeExample:`
⭐ What is MATLAB?

🎯 Full Form

MATLAB = Matrix Laboratory


🎯 Simple Meaning

MATLAB is a software used to solve mathematical problems easily

👉 Think:
Calculator → small math
MATLAB     → big & complex math


🧠 Real Life Example

2 + 3 = 5  → simple

But:
1000 numbers + graph + equation

👉 MATLAB solves it quickly


⭐ Features (Easy)

1️⃣ Matrix Based ⭐

👉 Works with matrices (tables of numbers)

Example:
[1 2 3]
[4 5 6]


2️⃣ Easy Calculation

👉 Direct calculation

Example:
2 + 3 → 5

✔ Fast and simple


3️⃣ Graph / Visualization ⭐

👉 Draw graphs easily

Example:
y = x²

✔ Helps understand data


4️⃣ Ready Functions

👉 Built-in functions available

Examples:
sin(), cos(), sqrt()

✔ No need for long code


⭐ Uses (Important)

1️⃣ Data Analysis
👉 Work with large data

2️⃣ Simulation ⭐
👉 Test real-world systems
• Machines
• Circuits

3️⃣ Visualization ⭐
👉 Draw graphs and charts

4️⃣ Engineering
👉 Used in engineering fields


⭐ Summary

MATLAB → Math solving software
Matrix → Table of numbers
Graph  → Visualization
Data   → Analysis


🎯 Memory Trick

MATLAB = Math + Graph + Data


✅ One Line (Exam)

MATLAB is a software used for mathematical computation, data analysis, and graphical visualization.
      `},{id:52,question:"52. Explain MATLAB Environment.",answer:"📌 Frequently asked",codeExample:`
🎯 MATLAB Environment

👉 MATLAB environment = Working area where you write commands and see results

👉 It has different parts like:

Command Window ⭐
Workspace
Current Directory
File Path

---------------------------------------

1️⃣ Command Window ⭐
Definition:
Place where you type commands and get output

Simple Meaning:
👉 Like a calculator box

Example:
>> 2 + 3
ans = 5

👉 Input → Output

---------------------------------------

2️⃣ Workspace
Definition:
Shows all variables and their values

Simple Meaning:
👉 Stores your data

Example:
a = 10
b = 20

Workspace shows:
a = 10
b = 20

---------------------------------------

3️⃣ Current Directory
Definition:
Shows files and folders you are working with

Simple Meaning:
👉 Like a computer folder

Example:
Shows:
- .m files
- data files

---------------------------------------

4️⃣ File Path
Definition:
Shows location of current folder

Simple Meaning:
👉 Address of files

Example:
C:\\Users\\Student\\Documents\\MATLAB

---------------------------------------

⭐ Summary (Exam Ready)

Command Window → Run commands  
Workspace → Store variables  
Current Directory → Show files  
File Path → Show location  

---------------------------------------

🎯 Easy Memory Trick

Command → Run  
Workspace → Store  
Directory → Files  
Path → Location  
      
      `},{id:53,question:"53. Explain Decision Statements & Looping in MATLAB.",answer:"📌 Important short/long question",codeExample:`
🎯 Decision Statements & Looping in MATLAB

👉 Decision = take decision (condition)
👉 Loop = repeat work

---------------------------------------

⭐ 1️⃣ Decision Statements

👉 Used to check conditions

---------------------------------------

🔹 (a) if Statement

Definition:
Executes code only if condition is TRUE

Syntax:
if condition
    statements
end

Example:
a = 10;

if a > 5
    disp("a is greater than 5");
end

---------------------------------------

🔹 (b) if-else Statement

Definition:
One block runs if TRUE, another if FALSE

Syntax:
if condition
    statements
else
    statements
end

Example:
a = 3;

if a > 5
    disp("Greater");
else
    disp("Smaller");
end

---------------------------------------

🔹 (c) switch Statement ⭐

Definition:
Used for multiple cases (conditions)

Syntax:
switch variable
    case value1
        statements
    case value2
        statements
    otherwise
        statements
end

Example:
day = 2;

switch day
    case 1
        disp("Monday");
    case 2
        disp("Tuesday");
    otherwise
        disp("Other day");
end

---------------------------------------

⭐ 2️⃣ Looping (for loop)

👉 Used to repeat code

---------------------------------------

🔹 for Loop

Syntax:
for i = start:end
    statements
end

Example:
for i = 1:5
    disp(i);
end

Output:
1
2
3
4
5

---------------------------------------

⭐ Summary (Exam Ready)

if        → check condition  
if-else   → two options  
switch    → multiple options  
for loop  → repeat  

---------------------------------------

🎯 Easy Memory Trick

if → check  
else → other option  
switch → many options  
for → repeat  

---------------------------------------

✅ One Line Answer

Decision statements (if, if-else, switch) are used for conditions, and loops (for) are 
used for repetition in MATLAB.
      
      `},{id:54,question:"54. Explain Basic Image Processing Functions in MATLAB.",answer:"📌 Very important practical question",codeExample:`
🎯 Basic Image Processing Functions in MATLAB

👉 Used to read, display, modify, and save images

---------------------------------------

1️⃣ imread() ⭐

Use:
👉 Read/load image

Syntax:
img = imread('image.jpg');

Simple Meaning:
👉 Load image into MATLAB

---------------------------------------

2️⃣ imshow()

Use:
👉 Display image

Syntax:
imshow(img);

Simple Meaning:
👉 Show image on screen

---------------------------------------

3️⃣ imresize()

Use:
👉 Change size of image

Syntax:
new_img = imresize(img, 0.5);

Simple Meaning:
👉 Resize image (small/big)

---------------------------------------

4️⃣ imwrite()

Use:
👉 Save image

Syntax:
imwrite(img, 'newimage.jpg');

Simple Meaning:
👉 Save image to file

---------------------------------------

5️⃣ rgb2gray()

Use:
👉 Convert color image → grayscale

Syntax:
gray = rgb2gray(img);

Simple Meaning:
👉 Color → Black & White

---------------------------------------

⭐ Example (Full Program)

img = imread('image.jpg');     % read image
imshow(img);                   % display image

gray = rgb2gray(img);          % convert to grayscale
imshow(gray);

small = imresize(img, 0.5);    % resize
imwrite(small, 'output.jpg');  % save image

---------------------------------------

⭐ Summary (Exam Ready)

imread()   → Read image  
imshow()   → Display image  
imresize() → Resize image  
imwrite()  → Save image  
rgb2gray() → Convert to grayscale  

---------------------------------------

🎯 Easy Memory Trick

read → show → resize → save → gray  

---------------------------------------

✅ One Line Answer

MATLAB image processing functions like imread, imshow, imresize, imwrite, and rgb2gray are used to 
read, display, resize, and save images.
      
      `},{id:55,question:"55. Explain Types of Images and Digital Image Processing Steps.",answer:"📌 Important theory question",codeExample:`
🎯 Types of Images & Image Processing Steps

👉 Images are classified based on pixel values

---------------------------------------

⭐ 1️⃣ Types of Images

---------------------------------------

1️⃣ Binary Image

Definition:
Image with only 2 colors

0 → Black  
1 → White  

Simple Meaning:
👉 Only black & white

Example:
Text documents, QR codes

---------------------------------------

2️⃣ Grayscale Image

Definition:
Image with shades of gray

0 → Black  
255 → White  

Simple Meaning:
👉 Light to dark (no color)

Example:
Black & white photos

---------------------------------------

3️⃣ RGB Image ⭐

Definition:
Image made using Red, Green, Blue

Simple Meaning:
👉 Color image

Example:
(R, G, B)

(255,0,0) → Red  
(0,255,0) → Green  
(0,0,255) → Blue  

Key Point:
👉 Most common image type

---------------------------------------

⭐ 2️⃣ Digital Image Processing Steps

---------------------------------------

1️⃣ Image Acquisition

Meaning:
👉 Capture image

Example:
Take photo using mobile

---------------------------------------

2️⃣ Image Enhancement

Meaning:
👉 Improve quality

Example:
Increase brightness, remove noise

---------------------------------------

3️⃣ Segmentation

Meaning:
👉 Divide image into parts

Example:
Separate object from background

---------------------------------------

4️⃣ Recognition

Meaning:
👉 Identify objects

Example:
Face detection, object detection

---------------------------------------

⭐ Summary (Exam Ready)

Binary      → Black & white  
Grayscale   → Shades of gray  
RGB         → Color image  

Acquisition → Capture image  
Enhancement → Improve quality  
Segmentation→ Divide image  
Recognition → Identify object  

---------------------------------------

🎯 Easy Memory Trick

Types → BGR (Binary, Gray, RGB)  
Steps → AESR (Acquire, Enhance, Segment, Recognize)  

---------------------------------------

✅ One Line Answer

Images can be binary, grayscale, or RGB, and image processing includes acquisition, 
enhancement, segmentation, and recognition.
      
      `},{id:56,question:"56. 2–3 MARK (JUST READ)",answer:"",codeExample:`
🎯 MATLAB Basics + Image Concepts

---------------------------------------

1️⃣ MATLAB Variables → No Declaration Needed

👉 No need to declare variables

Simple Meaning:
👉 Directly assign value

Example:
a = 10;

✔ No data type needed (int, float, etc.)

---------------------------------------

2️⃣ Matrix = Main Data Structure ⭐

👉 Everything in MATLAB is a matrix

Simple Meaning:
👉 Data stored in rows & columns

Example:
A = [1 2 3; 4 5 6];

✔ All operations are matrix-based

---------------------------------------

3️⃣ RGB → 3 Components ⭐

👉 RGB means:

R → Red  
G → Green  
B → Blue  

Simple Meaning:
👉 Color image = combination of R, G, B

Example:
(255,0,0) → Red  
(0,255,0) → Green  
(0,0,255) → Blue  

---------------------------------------

4️⃣ Pixel → Smallest Unit of Image

👉 Pixel = smallest part of image

Simple Meaning:
👉 Image = collection of tiny dots

Example:
Each pixel has a color value

---------------------------------------

5️⃣ Key Functions ⭐

👉 Important MATLAB image functions

---------------------------------------

🔹 imread()

Use:
👉 Read/load image

Syntax:
img = imread('image.jpg');

---------------------------------------

🔹 imshow()

Use:
👉 Display image

Syntax:
imshow(img);

---------------------------------------

⭐ Summary (Exam Ready)

Variables → No declaration  
Matrix    → Main data structure  
RGB       → 3 colors (R, G, B)  
Pixel     → Smallest unit  
imread()  → Read image  
imshow()  → Display image  

---------------------------------------

🎯 Easy Memory Trick

No type → Matrix → RGB → Pixel → Read → Show  

---------------------------------------

✅ One Line Answer

MATLAB uses matrices as main data structures, variables need no declaration, and image processing uses 
concepts like RGB, pixels, imread, and imshow.
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. DDA Line Drawing Algorithm",answer:"",codeExample:`
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

      `},{id:10.1,question:"10. Cohen-Sutherland Line Clipping",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

// Clipping window boundaries
float xmin = 100, ymin = 100, xmax = 300, ymax = 300;

// Line endpoints
float x1 = 50, y1 = 50, x2 = 350, y2 = 350;

// Region codes
#define INSIDE 0   // 0000
#define LEFT 1     // 0001
#define RIGHT 2    // 0010
#define BOTTOM 4   // 0100
#define TOP 8      // 1000

// Function to compute region code
int computeCode(float x, float y) {

    int code = INSIDE;

    if (x < xmin)
        code |= LEFT;

    else if (x > xmax)
        code |= RIGHT;

    if (y < ymin)
        code |= BOTTOM;

    else if (y > ymax)
        code |= TOP;

    return code;
}

// Cohen-Sutherland clipping algorithm
void cohenSutherlandClip() {

    float x, y;

    int code1 = computeCode(x1, y1);
    int code2 = computeCode(x2, y2);

    int accept = 0;

    while (1) {

        if ((code1 == 0) && (code2 == 0)) {

            // Both endpoints inside
            accept = 1;
            break;

        } else if (code1 & code2) {

            // Both endpoints share an outside region
            break;

        } else {

            int code_out;

            if (code1 != 0)
                code_out = code1;
            else
                code_out = code2;

            // Find intersection
            if (code_out & TOP) {

                x = x1 + (x2 - x1) * (ymax - y1) / (y2 - y1);
                y = ymax;

            } else if (code_out & BOTTOM) {

                x = x1 + (x2 - x1) * (ymin - y1) / (y2 - y1);
                y = ymin;

            } else if (code_out & RIGHT) {

                y = y1 + (y2 - y1) * (xmax - x1) / (x2 - x1);
                x = xmax;

            } else if (code_out & LEFT) {

                y = y1 + (y2 - y1) * (xmin - x1) / (x2 - x1);
                x = xmin;
            }

            // Replace outside point
            if (code_out == code1) {

                x1 = x;
                y1 = y;
                code1 = computeCode(x1, y1);

            } else {

                x2 = x;
                y2 = y;
                code2 = computeCode(x2, y2);
            }
        }
    }

    // Draw clipped line if accepted
    if (accept) {

        glColor3f(0.0, 1.0, 0.0); // Green

        glBegin(GL_LINES);

        glVertex2f(x1, y1);
        glVertex2f(x2, y2);

        glEnd();
    }
}

// Display function
void display() {

    glClear(GL_COLOR_BUFFER_BIT);

    // Draw clipping window
    glColor3f(1.0, 1.0, 1.0); // White

    glBegin(GL_LINE_LOOP);

    glVertex2f(xmin, ymin);
    glVertex2f(xmax, ymin);
    glVertex2f(xmax, ymax);
    glVertex2f(xmin, ymax);

    glEnd();

    // Draw original line (Red)
    glColor3f(1.0, 0.0, 0.0);

    glBegin(GL_LINES);

    glVertex2f(50, 50);
    glVertex2f(350, 350);

    glEnd();

    // Apply clipping
    cohenSutherlandClip();

    glFlush();
}

// Initialization
void init() {

    glClearColor(0.0, 0.0, 0.0, 1.0);

    gluOrtho2D(0, 400, 0, 400);
}

// Main function
int main(int argc, char** argv) {

    glutInit(&argc, argv);

    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);

    glutCreateWindow("Cohen-Sutherland Line Clipping");

    init();

    glutDisplayFunc(display);

    glutMainLoop();

    return 0;
}
      
      `},{id:11.11,question:"11. Sutherland-Hodgman Polygon Clipping",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdio.h>

#define MAX 20

// Clipping window
float xmin = 100, ymin = 100, xmax = 300, ymax = 300;

// Polygon points
float poly_x[MAX] = {50, 350, 350, 50};
float poly_y[MAX] = {50, 50, 350, 350};

int n = 4;

// Output polygon
float out_x[MAX], out_y[MAX];
int out_count;

// Function to check inside
int inside(float x, float y, int edge) {

    switch(edge) {

        case 0:
            return (x >= xmin); // Left

        case 1:
            return (x <= xmax); // Right

        case 2:
            return (y >= ymin); // Bottom

        case 3:
            return (y <= ymax); // Top
    }

    return 0;
}

// Intersection calculation
void intersect(float x1, float y1,
               float x2, float y2,
               int edge,
               float *x, float *y) {

    float m = (y2 - y1) / (x2 - x1);

    if (edge == 0) {

        // Left
        *x = xmin;
        *y = y1 + m * (xmin - x1);

    } else if (edge == 1) {

        // Right
        *x = xmax;
        *y = y1 + m * (xmax - x1);

    } else if (edge == 2) {

        // Bottom
        *y = ymin;
        *x = x1 + (ymin - y1) / m;

    } else if (edge == 3) {

        // Top
        *y = ymax;
        *x = x1 + (ymax - y1) / m;
    }
}

// Clip against one edge
void clipEdge(float in_x[],
              float in_y[],
              int in_count,
              int edge) {

    out_count = 0;

    for (int i = 0; i < in_count; i++) {

        int next = (i + 1) % in_count;

        float x1 = in_x[i];
        float y1 = in_y[i];

        float x2 = in_x[next];
        float y2 = in_y[next];

        int in1 = inside(x1, y1, edge);
        int in2 = inside(x2, y2, edge);

        float x, y;

        if (in1 && in2) {

            // Case 1: both inside
            out_x[out_count] = x2;
            out_y[out_count++] = y2;

        } else if (in1 && !in2) {

            // Case 2: leaving
            intersect(x1, y1, x2, y2, edge, &x, &y);

            out_x[out_count] = x;
            out_y[out_count++] = y;

        } else if (!in1 && in2) {

            // Case 3: entering
            intersect(x1, y1, x2, y2, edge, &x, &y);

            out_x[out_count] = x;
            out_y[out_count++] = y;

            out_x[out_count] = x2;
            out_y[out_count++] = y2;
        }

        // Case 4: both outside → ignore
    }
}

// Sutherland-Hodgman algorithm
void sutherlandHodgman() {

    float in_x[MAX], in_y[MAX];

    int in_count = n;

    // Copy original polygon
    for (int i = 0; i < n; i++) {

        in_x[i] = poly_x[i];
        in_y[i] = poly_y[i];
    }

    // Clip against all 4 edges
    for (int edge = 0; edge < 4; edge++) {

        clipEdge(in_x, in_y, in_count, edge);

        // Copy output → input for next edge
        for (int i = 0; i < out_count; i++) {

            in_x[i] = out_x[i];
            in_y[i] = out_y[i];
        }

        in_count = out_count;
    }

    // Draw clipped polygon
    glColor3f(0.0, 1.0, 0.0); // Green

    glBegin(GL_POLYGON);

    for (int i = 0; i < in_count; i++) {

        glVertex2f(in_x[i], in_y[i]);
    }

    glEnd();
}

// Display
void display() {

    glClear(GL_COLOR_BUFFER_BIT);

    // Draw clipping window
    glColor3f(1, 1, 1);

    glBegin(GL_LINE_LOOP);

    glVertex2f(xmin, ymin);
    glVertex2f(xmax, ymin);
    glVertex2f(xmax, ymax);
    glVertex2f(xmin, ymax);

    glEnd();

    // Draw original polygon (Red)
    glColor3f(1, 0, 0);

    glBegin(GL_POLYGON);

    for (int i = 0; i < n; i++) {

        glVertex2f(poly_x[i], poly_y[i]);
    }

    glEnd();

    // Clip and draw result
    sutherlandHodgman();

    glFlush();
}

// Init
void init() {

    glClearColor(0, 0, 0, 1);

    gluOrtho2D(0, 400, 0, 400);
}

// Main
int main(int argc, char** argv) {

    glutInit(&argc, argv);

    glutInitWindowSize(500, 500);

    glutCreateWindow("Sutherland-Hodgman Polygon Clipping");

    init();

    glutDisplayFunc(display);

    glutMainLoop();

    return 0;
}
      `},{id:12,question:"12. 3D Object Transformation",answer:"",codeExample:`
#include <GL/glut.h>
#include <stdlib.h>

float tx=0,ty=0,tz=0,sx=1,sy=1,sz=1,angle=0;
int mode=0;

// Axes
void axes(){
    glBegin(GL_LINES);

    glColor3f(1,0,0);
    glVertex3f(0,0,0);
    glVertex3f(3,0,0);

    glColor3f(0,1,0);
    glVertex3f(0,0,0);
    glVertex3f(0,3,0);

    glColor3f(0,0,1);
    glVertex3f(0,0,0);
    glVertex3f(0,0,3);

    glEnd();
}

// Shear & Reflection
void shear(){
    GLfloat m[]={
        1,0.5,0,0,
        0.5,1,0,0,
        0,0,1,0,
        0,0,0,1
    };

    glMultMatrixf(m);
}

void reflect(){
    GLfloat m[]={
        -1,0,0,0,
         0,1,0,0,
         0,0,1,0,
         0,0,0,1
    };

    glMultMatrixf(m);
}

// Display
void display(){

    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glLoadIdentity();

    gluLookAt(4,4,6,0,0,0,0,1,0);

    axes();

    // Original cube
    glPushMatrix();

    glTranslatef(1.5,0,0);

    glColor3f(0,1,0);

    glutWireCube(1);

    glPopMatrix();

    glPushMatrix();

    if(mode==4){

        reflect();

        glTranslatef(1.5,0,0);

        glColor3f(1,0,0);

    } else {

        glTranslatef(1.5,0,0);

        if(mode==1)
            glTranslatef(tx,ty,tz);

        else if(mode==2)
            glScalef(sx,sy,sz);

        else if(mode==3)
            glRotatef(angle,1,1,1);

        else if(mode==5)
            shear();

        glColor3f(1,1,1);
    }

    glutWireCube(1);

    glPopMatrix();

    glutSwapBuffers();
}

// Keyboard
void key(unsigned char k,int x,int y){

    if(k=='t'){
        mode=1;
        tx+=0.3;
    }

    else if(k=='s'){
        mode=2;
        sx+=0.2;
        sy+=0.2;
        sz+=0.2;
    }

    else if(k=='r'){
        mode=3;
        angle+=10;
    }

    else if(k=='f')
        mode=4;

    else if(k=='h')
        mode=5;

    else if(k=='c'){
        tx=ty=tz=0;
        sx=sy=sz=1;
        angle=0;
        mode=0;
    }

    else if(k==27)
        exit(0);

    glutPostRedisplay();
}

// Init & reshape
void init(){
    glEnable(GL_DEPTH_TEST);
    glClearColor(0,0,0,1);
}

void reshape(int w,int h){

    glViewport(0,0,w,h);

    glMatrixMode(GL_PROJECTION);

    glLoadIdentity();

    gluPerspective(60,(float)w/h,1,100);

    glMatrixMode(GL_MODELVIEW);
}

int main(int argc,char** argv){

    glutInit(&argc,argv);

    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);

    glutInitWindowSize(800,600);

    glutCreateWindow("3D Transform");

    init();

    glutDisplayFunc(display);

    glutReshapeFunc(reshape);

    glutKeyboardFunc(key);

    glutMainLoop();
}
      
      `},{id:13.13,question:"13. Scanline Hidden Surface Removal",answer:"",codeExample:`
#include <GL/glut.h>
#include <float.h>

#define W 500
#define H 500

float zbuf[W][H];

// Near (green)
float t1[3][3] = {
    {150,350,0.2},
    {100,150,0.2},
    {300,150,0.2}
};

// Far (red)
float t2[3][3] = {
    {200,300,0.8},
    {150,100,0.8},
    {350,100,0.8}
};

// Z-buffer init
void initZ() {

    for(int i=0;i<W;i++)
        for(int j=0;j<H;j++)
            zbuf[i][j]=FLT_MAX;
}

// Plot pixel with depth
void pixel(int x,int y,float z) {

    if(x>=0&&x<W&&y>=0&&y<H && z<zbuf[x][y]) {

        zbuf[x][y]=z;

        glVertex2i(x,y);
    }
}

// Back-face culling
int visible(float v[3][3]) {

    float dx1=v[1][0]-v[0][0];
    float dy1=v[1][1]-v[0][1];

    float dx2=v[2][0]-v[0][0];
    float dy2=v[2][1]-v[0][1];

    return (dx1*dy2 - dy1*dx2) > 0;
}

// Scan-line fill
void fill(float v[3][3]) {

    int ymin=v[0][1], ymax=v[0][1];

    for(int i=1;i<3;i++){

        if(v[i][1]<ymin)
            ymin=v[i][1];

        if(v[i][1]>ymax)
            ymax=v[i][1];
    }

    for(int y=ymin;y<=ymax;y++){

        int x1=W,x2=0;

        for(int i=0;i<3;i++){

            int j=(i+1)%3;

            float xA=v[i][0],yA=v[i][1];
            float xB=v[j][0],yB=v[j][1];

            if((yA<=y&&yB>y)||(yB<=y&&yA>y)){

                int x=xA+(y-yA)*(xB-xA)/(yB-yA);

                if(x<x1) x1=x;
                if(x>x2) x2=x;
            }
        }

        for(int x=x1;x<=x2;x++)
            pixel(x,y,v[0][2]);
    }
}

// Display
void display() {

    glClear(GL_COLOR_BUFFER_BIT);

    initZ();

    glBegin(GL_POINTS);

    if(visible(t2)) {
        glColor3f(1,0,0);
        fill(t2);
    }

    if(visible(t1)) {
        glColor3f(0,1,0);
        fill(t1);
    }

    glEnd();

    glFlush();
}

// Init
void init() {

    glClearColor(0,0,0,1);

    gluOrtho2D(0,W,0,H);
}

int main(int argc,char** argv) {

    glutInit(&argc,argv);

    glutInitWindowSize(W,H);

    glutCreateWindow("Hidden Surface");

    init();

    glutDisplayFunc(display);

    glutMainLoop();
}
      
      `},{id:14.14,question:"14. RGB HSV Color & Anti Aliasing",answer:"",codeExample:`
#include <GL/glut.h>
#include <math.h>

// HSV → RGB
void hsv(float h,float s,float v,float *r,float *g,float *b){

    int i=h/60;

    float f=h/60-i;

    float p=v*(1-s),
          q=v*(1-s*f),
          t=v*(1-s*(1-f));

    switch(i%6){

        case 0:
            *r=v; *g=t; *b=p;
            break;

        case 1:
            *r=q; *g=v; *b=p;
            break;

        case 2:
            *r=p; *g=v; *b=t;
            break;

        case 3:
            *r=p; *g=q; *b=v;
            break;

        case 4:
            *r=t; *g=p; *b=v;
            break;

        case 5:
            *r=v; *g=p; *b=q;
            break;
    }
}

// Draw square
void square(int x1,int y1,int x2,int y2){

    glBegin(GL_QUADS);

    glVertex2f(x1,y1);
    glVertex2f(x2,y1);
    glVertex2f(x2,y2);
    glVertex2f(x1,y2);

    glEnd();
}

void display(){

    glClear(GL_COLOR_BUFFER_BIT);

    // RGB squares
    glColor3f(1,0,0);
    square(50,300,150,200);

    glColor3f(0,1,0);
    square(200,300,300,200);

    glColor3f(0,0,1);
    square(350,300,450,200);

    // HSV triangle
    float r,g,b;

    hsv(120,1,1,&r,&g,&b);

    glColor3f(r,g,b);

    glBegin(GL_TRIANGLES);

    glVertex2f(150,100);
    glVertex2f(300,100);
    glVertex2f(225,200);

    glEnd();

    // Anti-aliasing line
    glEnable(GL_BLEND);

    glEnable(GL_LINE_SMOOTH);

    glBlendFunc(GL_SRC_ALPHA,GL_ONE_MINUS_SRC_ALPHA);

    glLineWidth(3);

    glColor3f(1,1,1);

    glBegin(GL_LINES);

    glVertex2f(50,50);
    glVertex2f(450,50);

    glEnd();

    glFlush();
}

int main(int argc,char** argv){

    glutInit(&argc,argv);

    glutInitWindowSize(500,400);

    glutCreateWindow("RGB HSV AA");

    glClearColor(0,0,0,1);

    gluOrtho2D(0,500,0,400);

    glutDisplayFunc(display);

    glutMainLoop();
}
      `},{id:14.14,question:"14. Shading and Texture in 3D Object",answer:"",codeExample:`
#include <GL/glut.h>

float angle=0;

GLuint tex;

// Simple checker texture
void texture(){

    unsigned char img[8][8][3];

    for(int i=0;i<8;i++)
        for(int j=0;j<8;j++){

            int c=((i+j)%2)*255;

            img[i][j][0]=img[i][j][1]=img[i][j][2]=c;
        }

    glGenTextures(1,&tex);

    glBindTexture(GL_TEXTURE_2D,tex);

    glTexImage2D(GL_TEXTURE_2D,0,GL_RGB,
                 8,8,0,
                 GL_RGB,
                 GL_UNSIGNED_BYTE,
                 img);

    glTexParameteri(GL_TEXTURE_2D,
                    GL_TEXTURE_MIN_FILTER,
                    GL_LINEAR);
}

// Lighting
void light(){

    GLfloat pos[]={2,2,2,1};

    glLightfv(GL_LIGHT0,GL_POSITION,pos);

    glEnable(GL_LIGHTING);

    glEnable(GL_LIGHT0);
}

// Cube
void cube(){

    glEnable(GL_TEXTURE_2D);

    glBindTexture(GL_TEXTURE_2D,tex);

    glBegin(GL_QUADS);

    glNormal3f(0,0,1);

    glTexCoord2f(0,0);
    glVertex3f(-1,-1,1);

    glTexCoord2f(1,0);
    glVertex3f(1,-1,1);

    glTexCoord2f(1,1);
    glVertex3f(1,1,1);

    glTexCoord2f(0,1);
    glVertex3f(-1,1,1);

    glEnd();

    glDisable(GL_TEXTURE_2D);
}

// Display
void display(){

    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    glLoadIdentity();

    gluLookAt(4,4,6,0,0,0,0,1,0);

    glRotatef(angle,1,1,0);

    cube();

    glutSwapBuffers();
}

// Keyboard
void key(unsigned char k,int x,int y){

    if(k=='r')
        angle+=10;

    if(k==27)
        exit(0);

    glutPostRedisplay();
}

// Init
void init(){

    glEnable(GL_DEPTH_TEST);

    glClearColor(0,0,0,1);

    light();

    texture();
}

// Reshape
void reshape(int w,int h){

    glViewport(0,0,w,h);

    glMatrixMode(GL_PROJECTION);

    glLoadIdentity();

    gluPerspective(60,(float)w/h,1,100);

    glMatrixMode(GL_MODELVIEW);
}

int main(int argc,char** argv){

    glutInit(&argc,argv);

    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);

    glutInitWindowSize(600,500);

    glutCreateWindow("Shading + Texture");

    init();

    glutDisplayFunc(display);

    glutReshapeFunc(reshape);

    glutKeyboardFunc(key);

    glutMainLoop();
}
      `},{id:16.16,question:"16. Animation Using Transformation Function",answer:"",codeExample:`
#include <GL/glut.h>

float carX = -5;
float sunAngle = 0;

// DRAW SUN
void sun(){

    glPushMatrix();

    glTranslatef(3,3,0);

    glRotatef(sunAngle,0,0,1);

    glColor3f(1,1,0);

    glutSolidSphere(0.5,20,20);

    glPopMatrix();
}

// DRAW CAR
void car(){

    glPushMatrix();

    glTranslatef(carX,-2,0);

    // body
    glColor3f(0,0,1);

    glBegin(GL_QUADS);

    glVertex2f(-1,0);
    glVertex2f(1,0);
    glVertex2f(1,1);
    glVertex2f(-1,1);

    glEnd();

    // wheels
    glColor3f(0,0,0);

    glPushMatrix();

    glTranslatef(-0.7,-0.2,0);

    glutSolidSphere(0.3,20,20);

    glPopMatrix();

    glPushMatrix();

    glTranslatef(0.7,-0.2,0);

    glutSolidSphere(0.3,20,20);

    glPopMatrix();

    glPopMatrix();
}

// DRAW TREE
void tree(){

    glColor3f(0.5,0.3,0);

    glBegin(GL_QUADS);

    glVertex2f(-4,-2);
    glVertex2f(-3.8,-2);
    glVertex2f(-3.8,0);
    glVertex2f(-4,0);

    glEnd();

    glColor3f(0,1,0);

    glBegin(GL_TRIANGLES);

    glVertex2f(-4.5,0);
    glVertex2f(-3.3,0);
    glVertex2f(-3.9,1);

    glEnd();
}

// DISPLAY
void display(){

    glClear(GL_COLOR_BUFFER_BIT);

    sun();

    tree();

    car();

    glutSwapBuffers();
}

// ANIMATION
void update(int v){

    carX += 0.05;

    if(carX > 5)
        carX = -5;

    sunAngle += 2;

    glutPostRedisplay();

    glutTimerFunc(30, update, 0);
}

// INIT
void init(){

    glClearColor(0.5,0.8,1,1);

    gluOrtho2D(-5,5,-5,5);
}

// MAIN
int main(int argc,char** argv){

    glutInit(&argc,argv);

    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);

    glutInitWindowSize(600,600);

    glutCreateWindow("Simple Animation");

    init();

    glutDisplayFunc(display);

    glutTimerFunc(0, update, 0);

    glutMainLoop();
}
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],g=L=>{fe(D===L?null:L)};return Ue.jsxs("div",{className:"app-container",children:[Ue.jsx("h1",{children:"Computer Graphics Interview Questions"}),Ue.jsx("div",{className:"questions-container",children:W.map(L=>Ue.jsxs("div",{className:"question-item",children:[Ue.jsx("button",{className:`question-button ${D===L.id?"active":""}`,onClick:()=>g(L.id),children:L.question}),D===L.id&&Ue.jsxs("div",{className:"answer-container",children:[Ue.jsxs("div",{className:"answer",children:[Ue.jsx("h3",{children:"Answer:"}),Ue.jsx("p",{children:L.answer})]}),L.codeExample&&Ue.jsxs("div",{className:"code-example",children:[Ue.jsx("h3",{children:"Code Example:"}),Ue.jsx("pre",{children:Ue.jsx("code",{children:L.codeExample})})]})]})]},L.id))})]})}lg.createRoot(document.getElementById("root")).render(Ue.jsx(bd.StrictMode,{children:Ue.jsx(ag,{})}));
