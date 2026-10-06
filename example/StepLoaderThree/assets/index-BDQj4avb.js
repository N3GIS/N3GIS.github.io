var dd=Object.defineProperty;var pd=(n,t,e)=>t in n?dd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ce=(n,t,e)=>pd(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ae={},Fi=[],Cn=()=>{},fh=()=>!1,So=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yo=n=>n.startsWith("onUpdate:"),we=Object.assign,zl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},md=Object.prototype.hasOwnProperty,te=(n,t)=>md.call(n,t),Ot=Array.isArray,_i=n=>lr(n)==="[object Map]",ro=n=>lr(n)==="[object Set]",yc=n=>lr(n)==="[object Date]",Vt=n=>typeof n=="function",ge=n=>typeof n=="string",Dn=n=>typeof n=="symbol",oe=n=>n!==null&&typeof n=="object",dh=n=>(oe(n)||Vt(n))&&Vt(n.then)&&Vt(n.catch),ph=Object.prototype.toString,lr=n=>ph.call(n),_d=n=>lr(n).slice(8,-1),mh=n=>lr(n)==="[object Object]",Hl=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=Bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},gd=/-\w/g,_n=Eo(n=>n.replace(gd,t=>t.slice(1).toUpperCase())),vd=/\B([A-Z])/g,Xi=Eo(n=>n.replace(vd,"-$1").toLowerCase()),_h=Eo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ko=Eo(n=>n?`on${_h(n)}`:""),wn=(n,t)=>!Object.is(n,t),Yr=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},gh=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Vl=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ec;const bo=()=>Ec||(Ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zi(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ge(i)?yd(i):zi(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ge(n)||oe(n))return n}const xd=/;(?![^(]*\))/g,Md=/:([^]+)/,Sd=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function yd(n){const t={};return n.replace(Sd,e=>e.startsWith("/*")?"":e).split(xd).forEach(e=>{if(e){const i=e.split(Md);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function To(n){let t="";if(ge(n))t=n;else if(Ot(n))for(let e=0;e<n.length;e++){const i=To(n[e]);i&&(t+=i+" ")}else if(oe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Ed="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=Bl(Ed);function vh(n){return!!n||n===""}function Td(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Ao(n[s],t[s],e);return i}function bc(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Ao(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Ad(n,t,e){let i=_i(n),s=_i(t);if(i||s||(i=ro(n),s=ro(t),i||s))return i&&s?bc(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Ao(n[a],t[a],e))return!1}return String(n)===String(t)}function Tc(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Ao(n,t,e){if(n===t)return!0;let i=yc(n),s=yc(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Dn(n),s=Dn(t),i||s?n===t:(i=Ot(n),s=Ot(t),i||s?i&&s?Tc(n,t,e,Td):!1:(i=oe(n),s=oe(t),i||s?!i||!s?!1:Tc(n,t,e,Ad):String(n)===String(t))))}const xh=n=>!!(n&&n.__v_isRef===!0),fn=n=>ge(n)?n:n==null?"":Ot(n)||oe(n)&&(n.toString===ph||!Vt(n.toString))?xh(n)?fn(n.value):JSON.stringify(n,Mh,2):String(n),Mh=(n,t)=>xh(t)?Mh(n,t.value):_i(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Go(i,r)+" =>"]=s,e),{})}:ro(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Go(e))}:Dn(t)?Go(t):oe(t)&&!Ot(t)&&!mh(t)?String(t):t,Go=(n,t="")=>{var e;return Dn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class wd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Te&&(Te.active?(this.parent=Te,this.index=(Te.scopes||(Te.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Te;try{return Te=this,t()}finally{Te=e}}}on(){++this._on===1&&(this.prevScope=Te,Te=this)}off(){if(this._on>0&&--this._on===0){if(Te===this)Te=this.prevScope;else{let t=Te;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rd(){return Te}let ue;const Wo=new WeakSet;class Sh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&(Te.active?Te.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wo.has(this)&&(Wo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Eh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ac(this),bh(this);const t=ue,e=gn;ue=this,gn=!0;try{return this.fn()}finally{Th(this),ue=t,gn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Wl(t);this.deps=this.depsTail=void 0,Ac(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Na(this)&&this.run()}get dirty(){return Na(this)}}let yh=0,Ks,Zs;function Eh(n,t=!1){if(n.flags|=8,t){n.next=Zs,Zs=n;return}n.next=Ks,Ks=n}function kl(){yh++}function Gl(){if(--yh>0)return;if(Zs){let t=Zs;for(Zs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ks;){let t=Ks;for(Ks=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function bh(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Th(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Wl(i),Cd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Na(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ah(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Ah(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===er)||(n.globalVersion=er,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Na(n))))return;n.flags|=2;const t=n.dep,e=ue,i=gn;ue=n,gn=!0;try{bh(n);const s=n.fn(n._value);(t.version===0||wn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ue=e,gn=i,Th(n),n.flags&=-3}}function Wl(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Wl(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Cd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let gn=!0;const wh=[];function Jn(){wh.push(gn),gn=!1}function Qn(){const n=wh.pop();gn=n===void 0?!0:n}function Ac(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ue;ue=void 0;try{t()}finally{ue=e}}}let er=0;class Pd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ue||!gn||ue===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ue)e=this.activeLink=new Pd(ue,this),ue.deps?(e.prevDep=ue.depsTail,ue.depsTail.nextDep=e,ue.depsTail=e):ue.deps=ue.depsTail=e,Rh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ue.depsTail,e.nextDep=void 0,ue.depsTail.nextDep=e,ue.depsTail=e,ue.deps===e&&(ue.deps=i)}return e}trigger(t){this.version++,er++,this.notify(t)}notify(t){kl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Gl()}}}function Rh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Rh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Fa=new WeakMap,Hi=Symbol(""),Oa=Symbol(""),nr=Symbol("");function Ie(n,t,e){if(gn&&ue){let i=Fa.get(n);i||Fa.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Xl),s.map=i,s.key=e),s.track()}}function Xn(n,t,e,i,s,r){const o=Fa.get(n);if(!o){er++;return}const a=l=>{l&&l.trigger()};if(kl(),t==="clear")o.forEach(a);else{const l=Ot(n),c=l&&Hl(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===nr||!Dn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(nr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Hi)),_i(n)&&a(o.get(Oa)));break;case"delete":l||(a(o.get(Hi)),_i(n)&&a(o.get(Oa)));break;case"set":_i(n)&&a(o.get(Hi));break}}Gl()}function ji(n){const t=Qt(n);return t===n||(Ie(t,"iterate",nr),rn(n))?t:Ln(n)?gi(n)?t.map(e=>Mi(on(e))):t.map(Mi):t.map(on)}function wo(n){return Ie(n=Qt(n),"iterate",nr),n}function bn(n,t){return Ln(n)?Mi(gi(n)?on(t):t):on(t)}const Dd={__proto__:null,[Symbol.iterator](){return Xo(this,Symbol.iterator,n=>bn(this,n))},concat(...n){return ji(this).concat(...n.map(t=>Ot(t)?ji(t):t))},entries(){return Xo(this,"entries",n=>(n[1]=bn(this,n[1]),n))},every(n,t){return Fn(this,"every",n,t,void 0,arguments)},filter(n,t){return Fn(this,"filter",n,t,e=>e.map(i=>bn(this,i)),arguments)},find(n,t){return Fn(this,"find",n,t,e=>bn(this,e),arguments)},findIndex(n,t){return Fn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Fn(this,"findLast",n,t,e=>bn(this,e),arguments)},findLastIndex(n,t){return Fn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Fn(this,"forEach",n,t,void 0,arguments)},includes(...n){return qo(this,"includes",n)},indexOf(...n){return qo(this,"indexOf",n)},join(n){return ji(this).join(n)},lastIndexOf(...n){return qo(this,"lastIndexOf",n)},map(n,t){return Fn(this,"map",n,t,void 0,arguments)},pop(){return Us(this,"pop")},push(...n){return Us(this,"push",n)},reduce(n,...t){return wc(this,"reduce",n,t)},reduceRight(n,...t){return wc(this,"reduceRight",n,t)},shift(){return Us(this,"shift")},some(n,t){return Fn(this,"some",n,t,void 0,arguments)},splice(...n){return Us(this,"splice",n)},toReversed(){return ji(this).toReversed()},toSorted(n){return ji(this).toSorted(n)},toSpliced(...n){return ji(this).toSpliced(...n)},unshift(...n){return Us(this,"unshift",n)},values(){return Xo(this,"values",n=>bn(this,n))}};function Xo(n,t,e){const i=wo(n),s=i[t]();return i!==n&&!rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Ld=Array.prototype;function Fn(n,t,e,i,s,r){const o=wo(n),a=o!==n&&!rn(n),l=o[t];if(l!==Ld[t]){const h=l.apply(n,r);return a?on(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,bn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function wc(n,t,e,i){const s=wo(n),r=s!==n&&!rn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=bn(n,c)),e.call(this,c,bn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?bn(n,l):l}function qo(n,t,e){const i=Qt(n);Ie(i,"iterate",nr);const s=i[t](...e);return(s===-1||s===!1)&&$l(e[0])?(e[0]=Qt(e[0]),i[t](...e)):s}function Us(n,t,e=[]){Jn(),kl();const i=Qt(n)[t].apply(n,e);return Gl(),Qn(),i}const Id=Bl("__proto__,__v_isRef,__isVue"),Ch=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Dn));function Ud(n){Dn(n)||(n=String(n));const t=Qt(this);return Ie(t,"has",n),t.hasOwnProperty(n)}class Ph{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Wd:Uh:r?Ih:Lh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ot(t);if(!s){let l;if(o&&(l=Dd[e]))return l;if(e==="hasOwnProperty")return Ud}const a=Reflect.get(t,e,Ne(t)?t:i);if((Dn(e)?Ch.has(e):Id(e))||(s||Ie(t,"get",e),r))return a;if(Ne(a)){const l=o&&Hl(e)?a:a.value;return s&&oe(l)?za(l):l}return oe(a)?s?za(a):Yl(a):a}}class Dh extends Ph{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ot(t)&&Hl(e);if(!this._isShallow){const c=Ln(r);if(!rn(i)&&!Ln(i)&&(r=Qt(r),i=Qt(i)),!o&&Ne(r)&&!Ne(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:te(t,e),l=Reflect.set(t,e,i,Ne(t)?t:s);return t===Qt(s)&&l&&(a?wn(i,r)&&Xn(t,"set",e,i):Xn(t,"add",e,i)),l}deleteProperty(t,e){const i=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Xn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Dn(e)||!Ch.has(e))&&Ie(t,"has",e),i}ownKeys(t){return Ie(t,"iterate",Ot(t)?"length":Hi),Reflect.ownKeys(t)}}class Nd extends Ph{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Fd=new Dh,Od=new Nd,Bd=new Dh(!0);const Ba=n=>n,mr=n=>Reflect.getPrototypeOf(n);function zd(n,t,e){return function(...i){const s=this.__v_raw,r=Qt(s),o=_i(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ba:t?Mi:on;return!t&&Ie(r,"iterate",l?Oa:Hi),we(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function _r(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Hd(n,t){const e={get(s){const r=this.__v_raw,o=Qt(r),a=Qt(s);n||(wn(s,a)&&Ie(o,"get",s),Ie(o,"get",a));const{has:l}=mr(o),c=t?Ba:n?Mi:on;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ie(Qt(s),"iterate",Hi),s.size},has(s){const r=this.__v_raw,o=Qt(r),a=Qt(s);return n||(wn(s,a)&&Ie(o,"has",s),Ie(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Qt(a),c=t?Ba:n?Mi:on;return!n&&Ie(l,"iterate",Hi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return we(e,n?{add:_r("add"),set:_r("set"),delete:_r("delete"),clear:_r("clear")}:{add(s){const r=Qt(this),o=mr(r),a=Qt(s),l=!t&&!rn(s)&&!Ln(s)?a:s;return o.has.call(r,l)||wn(s,l)&&o.has.call(r,s)||wn(a,l)&&o.has.call(r,a)||(r.add(l),Xn(r,"add",l,l)),this},set(s,r){!t&&!rn(r)&&!Ln(r)&&(r=Qt(r));const o=Qt(this),{has:a,get:l}=mr(o);let c=a.call(o,s);c||(s=Qt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?wn(r,u)&&Xn(o,"set",s,r):Xn(o,"add",s,r),this},delete(s){const r=Qt(this),{has:o,get:a}=mr(r);let l=o.call(r,s);l||(s=Qt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Xn(r,"delete",s,void 0),c},clear(){const s=Qt(this),r=s.size!==0,o=s.clear();return r&&Xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=zd(s,n,t)}),e}function ql(n,t){const e=Hd(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(te(e,s)&&s in i?e:i,s,r)}const Vd={get:ql(!1,!1)},kd={get:ql(!1,!0)},Gd={get:ql(!0,!1)};const Lh=new WeakMap,Ih=new WeakMap,Uh=new WeakMap,Wd=new WeakMap;function Xd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yl(n){return Ln(n)?n:jl(n,!1,Fd,Vd,Lh)}function qd(n){return jl(n,!1,Bd,kd,Ih)}function za(n){return jl(n,!0,Od,Gd,Uh)}function jl(n,t,e,i,s){if(!oe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Xd(_d(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function gi(n){return Ln(n)?gi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ln(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function $l(n){return n?!!n.__v_raw:!1}function Qt(n){const t=n&&n.__v_raw;return t?Qt(t):n}function Yd(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&gh(n,"__v_skip",!0),n}const on=n=>oe(n)?Yl(n):n,Mi=n=>oe(n)?za(n):n;function Ne(n){return n?n.__v_isRef===!0:!1}function Le(n){return jd(n,!1)}function jd(n,t){return Ne(n)?n:new $d(n,t)}class $d{constructor(t,e){this.dep=new Xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Qt(t),this._value=e?t:on(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||rn(t)||Ln(t);t=i?t:Qt(t),wn(t,e)&&(this._rawValue=t,this._value=i?t:on(t),this.dep.trigger())}}function Kd(n){return Ne(n)?n.value:n}const Zd={get:(n,t,e)=>t==="__v_raw"?n:Kd(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ne(s)&&!Ne(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Nh(n){return gi(n)?n:new Proxy(n,Zd)}class Jd{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return Eh(this,!0),!0}get value(){const t=this.dep.track();return Ah(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Qd(n,t,e=!1){let i,s;return Vt(n)?i=n:(i=n.get,s=n.set),new Jd(i,s,e)}const gr={},oo=new WeakMap;let Li;function tp(n,t=!1,e=Li){if(e){let i=oo.get(e);i||oo.set(e,i=[]),i.push(n)}}function ep(n,t,e=ae){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=M=>s?M:rn(M)||s===!1||s===0?qn(M,1):qn(M);let u,h,f,d,g=!1,v=!1;if(Ne(n)?(h=()=>n.value,g=rn(n)):gi(n)?(h=()=>c(n),g=!0):Ot(n)?(v=!0,g=n.some(M=>gi(M)||rn(M)),h=()=>n.map(M=>{if(Ne(M))return M.value;if(gi(M))return c(M);if(Vt(M))return l?l(M,2):M()})):Vt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Jn();try{f()}finally{Qn()}}const M=Li;Li=u;try{return l?l(n,3,[d]):n(d)}finally{Li=M}}:h=Cn,t&&s){const M=h,B=s===!0?1/0:s;h=()=>qn(M(),B)}const m=Rd(),p=()=>{u.stop(),m&&m.active&&zl(m.effects,u)};if(r&&t){const M=t;t=(...B)=>{const L=M(...B);return p(),L}}let b=v?new Array(n.length).fill(gr):gr;const A=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const B=u.run();if(M||s||g||(v?B.some((L,P)=>wn(L,b[P])):wn(B,b))){f&&f();const L=Li;Li=u;try{const P=[B,b===gr?void 0:v&&b[0]===gr?[]:b,d];b=B,l?l(t,3,P):t(...P)}finally{Li=L}}}else u.run()};return a&&a(A),u=new Sh(h),u.scheduler=o?()=>o(A,!1):A,d=M=>tp(M,!1,u),f=u.onStop=()=>{const M=oo.get(u);if(M){if(l)l(M,4);else for(const B of M)B();oo.delete(u)}},t?i?A(!0):b=u.run():o?o(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function qn(n,t=1/0,e){if(t<=0||!oe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ne(n))qn(n.value,t,e);else if(Ot(n))for(let i=0;i<n.length;i++)qn(n[i],t,e);else if(ro(n)||_i(n))n.forEach(i=>{qn(i,t,e)});else if(mh(n)){for(const i in n)qn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&qn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cr(n,t,e,i){try{return i?n(...i):n()}catch(s){Ro(s,t,e)}}function Mn(n,t,e,i){if(Vt(n)){const s=cr(n,t,e,i);return s&&dh(s)&&s.catch(r=>{Ro(r,t,e)}),s}if(Ot(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Mn(n[r],t,e,i));return s}}function Ro(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Jn(),cr(r,null,10,[n,l,c]),Qn();return}}np(n,e,s,i,o)}function np(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Be=[];let En=-1;const ms=[];let fi=null,us=0;const Fh=Promise.resolve();let ao=null;function Ws(n){const t=ao||Fh;return n?t.then(this?n.bind(this):n):t}function ip(n){let t=En+1,e=Be.length;for(;t<e;){const i=t+e>>>1,s=Be[i],r=ir(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Kl(n){if(!(n.flags&1)){const t=ir(n),e=Be[Be.length-1];!e||!(n.flags&2)&&t>=ir(e)?Be.push(n):Be.splice(ip(t),0,n),n.flags|=1,Oh()}}function Oh(){ao||(ao=Fh.then(zh))}function sp(n){if(!Ot(n))fi&&n.id===-1?fi.splice(us+1,0,n):n.flags&1||(ms.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)ms.push(n[t]);Oh()}function Rc(n,t,e=En+1){for(;e<Be.length;e++){const i=Be[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Be.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Bh(n){if(ms.length){const t=[...new Set(ms)].sort((e,i)=>ir(e)-ir(i));if(ms.length=0,fi){for(let e=0;e<t.length;e++)fi.push(t[e]);return}for(fi=t,us=0;us<fi.length;us++){const e=fi[us];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}fi=null,us=0}}const ir=n=>n.id==null?n.flags&2?-1:1/0:n.id;function zh(n){try{for(En=0;En<Be.length;En++){const t=Be[En];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),cr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;En<Be.length;En++){const t=Be[En];t&&(t.flags&=-2)}En=-1,Be.length=0,Bh(),ao=null,(Be.length||ms.length)&&zh()}}let sn=null,Hh=null;function lo(n){const t=sn;return sn=n,Hh=n&&n.type.__scopeId||null,t}function rp(n,t=sn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&zc(-1);const r=lo(t),o=Vi.length;let a;try{a=n(...s)}finally{for(let l=Vi.length;l>o;l--)pf();lo(r),i._d&&zc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Vh(n,t){if(sn===null)return n;const e=Io(sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ae]=t[s];r&&(Vt(r)&&(r={mounted:r,updated:r}),r.deep&&qn(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function bi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Jn(),Mn(l,e,8,[n.el,a,n,t]),Qn())}}function op(n,t){if(He){let e=He.provides;const i=He.parent&&He.parent.provides;i===e&&(e=He.provides=Object.create(i)),e[n]=t}}function jr(n,t,e=!1){const i=em();if(i||_s){let s=_s?_s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Vt(t)?t.call(i&&i.proxy):t}}const ap=Symbol.for("v-scx"),lp=()=>jr(ap);function $r(n,t,e){return kh(n,t,e)}function kh(n,t,e=ae){const{immediate:i,deep:s,flush:r,once:o}=e,a=we({},e),l=t&&i||!t&&r!=="post";let c;if(or){if(r==="sync"){const d=lp();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Cn,d.resume=Cn,d.pause=Cn,d}}const u=He;a.call=(d,g,v)=>Mn(d,u,g,v);let h=!1;r==="post"?a.scheduler=d=>{Xe(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Kl(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=ep(n,t,a);return or&&(c?c.push(f):l&&f()),f}function cp(n,t,e){const i=this.proxy,s=ge(n)?n.includes(".")?Gh(i,n):()=>i[n]:n.bind(i,i);let r;Vt(t)?r=t:(r=t.handler,e=t);const o=ur(this),a=kh(s,r.bind(i),e);return o(),a}function Gh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const up=Symbol("_vte"),Co=n=>n.__isTeleport,Yo=Symbol("_leaveCb");function hp(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==ti){t=e;break}}return t}function Wh(n){if(!Ql(n))return Co(n.type)&&n.children?hp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Vt(e.default))return e.default()}}function Zl(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Zl(Co(e.type)&&Wh(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Jl(n,t){return Vt(n)?we({name:n.name},t,{setup:n}):n}function Xh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Cc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const co=new WeakMap;function Js(n,t,e,i,s=!1){if(Ot(n)){n.forEach((v,m)=>Js(v,t&&(Ot(t)?t[m]:t),e,i,s));return}if(Qs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Js(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Io(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState,f=Qt(h),d=h===ae?fh:v=>Cc(u,v)?!1:te(f,v),g=(v,m)=>!(m&&Cc(u,m));if(c!=null&&c!==l){if(Pc(t),ge(c))u[c]=null,d(c)&&(h[c]=null);else if(Ne(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Vt(l))cr(l,a,12,[o,u]);else{const v=ge(l),m=Ne(l);if(v||m){const p=()=>{if(n.f){const b=v?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ot(b)&&zl(b,r);else if(Ot(b))b.includes(r)||b.push(r);else if(v)u[l]=[r],d(l)&&(h[l]=u[l]);else{const A=[r];g(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else v?(u[l]=o,d(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const b=()=>{p(),co.delete(n)};b.id=-1,co.set(n,b),Xe(b,e)}else Pc(n),p()}}}function Pc(n){const t=co.get(n);t&&(t.flags|=8,co.delete(n))}bo().requestIdleCallback;bo().cancelIdleCallback;const Qs=n=>!!n.type.__asyncLoader,Ql=n=>n.type.__isKeepAlive;function fp(n,t){qh(n,"a",t)}function dp(n,t){qh(n,"da",t)}function qh(n,t,e=He){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Po(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Ql(s.parent.vnode)&&pp(i,t,e,s),s=s.parent}}function pp(n,t,e,i){const s=Po(t,n,i,!0);$h(()=>{zl(i[t],s)},e)}function Po(n,t,e=He,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Jn();const a=ur(e),l=Mn(t,e,n,o);return a(),Qn(),l});return i?s.unshift(r):s.push(r),r}}const ni=n=>(t,e=He)=>{(!or||n==="sp")&&Po(n,(...i)=>t(...i),e)},mp=ni("bm"),Yh=ni("m"),_p=ni("bu"),gp=ni("u"),jh=ni("bum"),$h=ni("um"),vp=ni("sp"),xp=ni("rtg"),Mp=ni("rtc");function Sp(n,t=He){Po("ec",n,t)}const yp=Symbol.for("v-ndc");function Ha(n,t,e,i){let s;const r=e,o=Ot(n);if(o||ge(n)){const a=o&&gi(n);let l=!1,c=!1;a&&(l=!rn(n),c=Ln(n),n=wo(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Mi(on(n[u])):on(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(oe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Va=n=>n?Mf(n)?Io(n):Va(n.parent):null,tr=we(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Va(n.parent),$root:n=>Va(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Zh(n),$forceUpdate:n=>n.f||(n.f=()=>{Kl(n.update)}),$nextTick:n=>n.n||(n.n=Ws.bind(n.proxy)),$watch:n=>cp.bind(n)}),jo=(n,t)=>n!==ae&&!n.__isScriptSetup&&te(n,t),Ep={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(jo(i,t))return o[t]=1,i[t];if(s!==ae&&te(s,t))return o[t]=2,s[t];if(te(r,t))return o[t]=3,r[t];if(e!==ae&&te(e,t))return o[t]=4,e[t];ka&&(o[t]=0)}}const c=tr[t];let u,h;if(c)return t==="$attrs"&&Ie(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ae&&te(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,te(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return jo(s,t)?(s[t]=e,!0):i!==ae&&te(i,t)?(i[t]=e,!0):te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ae&&a[0]!=="$"&&te(n,a)||jo(t,a)||te(r,a)||te(i,a)||te(tr,a)||te(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Dc(n){return Ot(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let ka=!0;function bp(n){const t=Zh(n),e=n.proxy,i=n.ctx;ka=!1,t.beforeCreate&&Lc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:A,unmounted:M,render:B,renderTracked:L,renderTriggered:P,errorCaptured:O,serverPrefetch:T,expose:y,inheritAttrs:D,components:et,directives:W,filters:st}=t;if(c&&Tp(c,i,null),o)for(const Q in o){const H=o[Q];Vt(H)&&(i[Q]=H.bind(e))}if(s){const Q=s.call(e,e);oe(Q)&&(n.data=Yl(Q))}if(ka=!0,r)for(const Q in r){const H=r[Q],J=Vt(H)?H.bind(e,e):Vt(H.get)?H.get.bind(e,e):Cn,ct=!Vt(H)&&Vt(H.set)?H.set.bind(e):Cn,nt=yf({get:J,set:ct});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Tt=>nt.value=Tt})}if(a)for(const Q in a)Kh(a[Q],i,e,Q);if(l){const Q=Vt(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(H=>{op(H,Q[H])})}u&&Lc(u,n,"c");function $(Q,H){Ot(H)?H.forEach(J=>Q(J.bind(e))):H&&Q(H.bind(e))}if($(mp,h),$(Yh,f),$(_p,d),$(gp,g),$(fp,v),$(dp,m),$(Sp,O),$(Mp,L),$(xp,P),$(jh,b),$($h,M),$(vp,T),Ot(y))if(y.length){const Q=n.exposed||(n.exposed={});y.forEach(H=>{Object.defineProperty(Q,H,{get:()=>e[H],set:J=>e[H]=J,enumerable:!0})})}else n.exposed||(n.exposed={});B&&n.render===Cn&&(n.render=B),D!=null&&(n.inheritAttrs=D),et&&(n.components=et),W&&(n.directives=W),T&&Xh(n)}function Tp(n,t,e=Cn){Ot(n)&&(n=Ga(n));for(const i in n){const s=n[i];let r;oe(s)?"default"in s?r=jr(s.from||i,s.default,!0):r=jr(s.from||i):r=jr(s),Ne(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Lc(n,t,e){Mn(Ot(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Kh(n,t,e,i){let s=i.includes(".")?Gh(e,i):()=>e[i];if(ge(n)){const r=t[n];Vt(r)&&$r(s,r)}else if(Vt(n))$r(s,n.bind(e));else if(oe(n))if(Ot(n))n.forEach(r=>Kh(r,t,e,i));else{const r=Vt(n.handler)?n.handler.bind(e):t[n.handler];Vt(r)&&$r(s,r,n)}}function Zh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>uo(l,c,o,!0)),uo(l,t,o)),oe(t)&&r.set(t,l),l}function uo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&uo(n,r,e,!0),s&&s.forEach(o=>uo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Ap[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Ap={data:Ic,props:Uc,emits:Uc,methods:Xs,computed:Xs,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Xs,directives:Xs,watch:Rp,provide:Ic,inject:wp};function Ic(n,t){return t?n?function(){return we(Vt(n)?n.call(this,this):n,Vt(t)?t.call(this,this):t)}:t:n}function wp(n,t){return Xs(Ga(n),Ga(t))}function Ga(n){if(Ot(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Fe(n,t){return n?[...new Set([].concat(n,t))]:t}function Xs(n,t){return n?we(Object.create(null),n,t):t}function Uc(n,t){return n?Ot(n)&&Ot(t)?[...new Set([...n,...t])]:we(Object.create(null),Dc(n),Dc(t??{})):t}function Rp(n,t){if(!n)return t;if(!t)return n;const e=we(Object.create(null),n);for(const i in t)e[i]=Fe(n[i],t[i]);return e}function Jh(){return{app:null,config:{isNativeTag:fh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cp=0;function Pp(n,t){return function(i,s=null){Vt(i)||(i=we({},i)),s!=null&&!oe(s)&&(s=null);const r=Jh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Cp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:am,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Vt(u.install)?(o.add(u),u.install(c,...h)):Vt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Pn(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Io(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Mn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=_s;_s=c;try{return u()}finally{_s=h}}};return c}}let _s=null;const Dp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${_n(t)}Modifiers`]||n[`${Xi(t)}Modifiers`];function Lp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ae;let s=e;const r=t.startsWith("update:"),o=r&&Dp(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>ge(u)?u.trim():u)),o.number&&(s=s.map(Vl)));let a,l=i[a=ko(t)]||i[a=ko(_n(t))];!l&&r&&(l=i[a=ko(Xi(t))]),l&&Mn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Mn(c,n,6,s)}}const Ip=new WeakMap;function Qh(n,t,e=!1){const i=e?Ip:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Vt(n)){const l=c=>{const u=Qh(c,t,!0);u&&(a=!0,we(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(oe(n)&&i.set(n,null),null):(Ot(r)?r.forEach(l=>o[l]=null):we(o,r),oe(n)&&i.set(n,o),o)}function Do(n,t){return!n||!So(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),te(n,t[0].toLowerCase()+t.slice(1))||te(n,Xi(t))||te(n,t))}function Nc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:v}=n,m=lo(n);let p,b;try{if(e.shapeFlag&4){const M=s||i,B=M;p=Tn(c.call(B,M,u,h,d,f,g)),b=a}else{const M=t;p=Tn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),b=t.props?a:Up(a)}}catch(M){Vi.length=0,Ro(M,n,1),p=Pn(ti)}let A=p;if(b&&v!==!1){const M=Object.keys(b),{shapeFlag:B}=A;M.length&&B&7&&(r&&M.some(yo)&&(b=Np(b,r)),A=Ms(A,b,!1,!0))}if(e.dirs&&(A=Ms(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition){const M=Co(A.type)&&Wh(A)||A;Zl(M,e.transition)}return p=A,lo(m),p}const Up=n=>{let t;for(const e in n)(e==="class"||e==="style"||So(e))&&((t||(t={}))[e]=n[e]);return t},Np=(n,t)=>{const e={};for(const i in n)(!yo(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Fp(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Fc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(tf(o,i,f)&&!Do(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Fc(i,o,c):!0:!!o;return!1}function Fc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(tf(t,n,r)&&!Do(e,r))return!0}return!1}function tf(n,t,e){const i=n[e],s=t[e];return e==="style"&&oe(i)&&oe(s)?!Ao(i,s):i!==s}function Op({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const ef={},nf=()=>Object.create(ef),sf=n=>Object.getPrototypeOf(n)===ef;function Bp(n,t,e,i=!1){const s={},r=nf();n.propsDefaults=Object.create(null),rf(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:qd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function zp(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Qt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Do(n.emitsOptions,f))continue;const d=t[f];if(l)if(te(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=_n(f);s[g]=Wa(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{rf(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!te(t,h)&&((u=Xi(h))===h||!te(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Wa(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!te(t,h))&&(delete r[h],c=!0)}c&&Xn(n.attrs,"set","")}function rf(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if($s(l))continue;const c=t[l];let u;s&&te(s,u=_n(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Do(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Qt(e),c=a||ae;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Wa(s,l,h,c[h],n,!te(c,h))}}return o}function Wa(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Vt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=ur(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Xi(e))&&(i=!0))}return i}const Hp=new WeakMap;function of(n,t,e=!1){const i=e?Hp:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Vt(n)){const u=h=>{l=!0;const[f,d]=of(h,t,!0);we(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return oe(n)&&i.set(n,Fi),Fi;if(Ot(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);Oc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=_n(u);if(Oc(h)){const f=r[u],d=o[h]=Ot(f)||Vt(f)?{type:f}:we({},f),g=d.type;let v=!1,m=!0;if(Ot(g))for(let p=0;p<g.length;++p){const b=g[p],A=Vt(b)&&b.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=Vt(g)&&g.name==="Boolean";d[0]=v,d[1]=m,(v||te(d,"default"))&&a.push(h)}}const c=[o,a];return oe(n)&&i.set(n,c),c}function Oc(n){return n[0]!=="$"&&!$s(n)}const tc=n=>n==="_"||n==="_ctx"||n==="$stable",ec=n=>Ot(n)?n.map(Tn):[Tn(n)],Vp=(n,t,e)=>{if(t._n)return t;const i=rp((...s)=>ec(t(...s)),e);return i._c=!1,i},af=(n,t,e)=>{const i=n._ctx;for(const s in n){if(tc(s))continue;const r=n[s];if(Vt(r))t[s]=Vp(s,r,i);else if(r!=null){const o=ec(r);t[s]=()=>o}}},lf=(n,t)=>{const e=ec(t);n.slots.default=()=>e},cf=(n,t,e)=>{for(const i in t)(e||!tc(i))&&(n[i]=t[i])},kp=(n,t,e)=>{const i=n.slots=nf();if(n.vnode.shapeFlag&32){const s=t._;s?(cf(i,t,e),e&&gh(i,"_",s,!0)):af(t,i)}else t&&lf(n,t)},Gp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ae;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:cf(s,t,e):(r=!t.$stable,af(t,s)),o=t}else t&&(lf(n,t),o={default:1});if(r)for(const a in s)!tc(a)&&o[a]==null&&delete s[a]},Xe=jp;function Wp(n){return Xp(n)}function Xp(n,t){const e=bo();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Cn,insertStaticContent:g}=n,v=(w,C,E,it=null,q=null,Y=null,K=void 0,at=null,j=!!C.dynamicChildren)=>{if(w===C)return;w&&!Ns(w,C)&&(it=pt(w),Tt(w,q,Y,!0),w=null),C.patchFlag===-2&&(j=!1,C.dynamicChildren=null),C.dynamicChildren&&w&&w.dynamicChildren&&w.dynamicChildren.hasOnce&&(C.dynamicChildren===Fi&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:x,ref:_,shapeFlag:R}=C;switch(x){case Lo:m(w,C,E,it);break;case ti:p(w,C,E,it);break;case Ko:w==null&&b(C,E,it,K);break;case Ze:et(w,C,E,it,q,Y,K,at,j);break;default:R&1?B(w,C,E,it,q,Y,K,at,j):R&6?W(w,C,E,it,q,Y,K,at,j):(R&64||R&128)&&x.process(w,C,E,it,q,Y,K,at,j,Ut)}_!=null&&q?Js(_,w&&w.ref,Y,C||w,!C):_==null&&w&&w.ref!=null&&Js(w.ref,null,Y,w,!0)},m=(w,C,E,it)=>{if(w==null)i(C.el=a(C.children),E,it);else{const q=C.el=w.el;C.children!==w.children&&c(q,C.children)}},p=(w,C,E,it)=>{w==null?i(C.el=l(C.children||""),E,it):C.el=w.el},b=(w,C,E,it)=>{[w.el,w.anchor]=g(w.children,C,E,it,w.el,w.anchor)},A=({el:w,anchor:C},E,it)=>{let q;for(;w&&w!==C;)q=f(w),i(w,E,it),w=q;i(C,E,it)},M=({el:w,anchor:C})=>{let E;for(;w&&w!==C;)E=f(w),s(w),w=E;s(C)},B=(w,C,E,it,q,Y,K,at,j)=>{if(C.type==="svg"?K="svg":C.type==="math"&&(K="mathml"),w==null)L(C,E,it,q,Y,K,at,j);else{const x=w.el&&w.el._isVueCE?w.el:null;try{x&&x._beginPatch(),T(w,C,q,Y,K,at,j)}finally{x&&x._endPatch()}}},L=(w,C,E,it,q,Y,K,at)=>{let j,x;const{props:_,shapeFlag:R,transition:z,dirs:k}=w;if(j=w.el=o(w.type,Y,_&&_.is,_),R&8?u(j,w.children):R&16&&O(w.children,j,null,it,q,$o(w,Y),K,at),k&&bi(w,null,it,"created"),P(j,w,w.scopeId,K,it),_){for(const mt in _)mt!=="value"&&!$s(mt)&&r(j,mt,null,_[mt],Y,it);"value"in _&&r(j,"value",null,_.value,Y),(x=_.onVnodeBeforeMount)&&yn(x,it,w)}k&&bi(w,null,it,"beforeMount");const V=qp(q,z);V&&z.beforeEnter(j),i(j,C,E),((x=_&&_.onVnodeMounted)||V||k)&&Xe(()=>{try{x&&yn(x,it,w),V&&z.enter(j),k&&bi(w,null,it,"mounted")}finally{}},q)},P=(w,C,E,it,q)=>{if(E&&d(w,E),it)for(let Y=0;Y<it.length;Y++)d(w,it[Y]);if(q){let Y=q.subTree;if(C===Y||df(Y.type)&&(Y.ssContent===C||Y.ssFallback===C)){const K=q.vnode;P(w,K,K.scopeId,K.slotScopeIds,q.parent)}}},O=(w,C,E,it,q,Y,K,at,j=0)=>{for(let x=j;x<w.length;x++){const _=w[x]=at?Wn(w[x]):Tn(w[x]);v(null,_,C,E,it,q,Y,K,at)}},T=(w,C,E,it,q,Y,K)=>{const at=C.el=w.el;let{patchFlag:j,dynamicChildren:x,dirs:_}=C;j|=w.patchFlag&16;const R=w.props||ae,z=C.props||ae;let k;if(E&&Ti(E,!1),(k=z.onVnodeBeforeUpdate)&&yn(k,E,C,w),_&&bi(C,w,E,"beforeUpdate"),E&&Ti(E,!0),x&&(!w.dynamicChildren||w.dynamicChildren.length!==x.length)&&(j=0,K=!1,x=null),(R.innerHTML&&z.innerHTML==null||R.textContent&&z.textContent==null)&&u(at,""),x?y(w.dynamicChildren,x,at,E,it,$o(C,q),Y):K||H(w,C,at,null,E,it,$o(C,q),Y,!1),j>0){if(j&16)D(at,R,z,E,q);else if(j&2&&R.class!==z.class&&r(at,"class",null,z.class,q),j&4&&r(at,"style",R.style,z.style,q),j&8){const V=C.dynamicProps;for(let mt=0;mt<V.length;mt++){const ut=V[mt],ft=R[ut],It=z[ut];(It!==ft||ut==="value")&&r(at,ut,ft,It,q,E)}}j&1&&w.children!==C.children&&u(at,C.children)}else!K&&x==null&&D(at,R,z,E,q);((k=z.onVnodeUpdated)||_)&&Xe(()=>{k&&yn(k,E,C,w),_&&bi(C,w,E,"updated")},it)},y=(w,C,E,it,q,Y,K)=>{for(let at=0;at<C.length;at++){const j=w[at],x=C[at],_=j.el&&(j.type===Ze||!Ns(j,x)||j.shapeFlag&198)?h(j.el):E;v(j,x,_,null,it,q,Y,K,!0)}},D=(w,C,E,it,q)=>{if(C!==E){if(C!==ae)for(const Y in C)!$s(Y)&&!(Y in E)&&r(w,Y,C[Y],null,q,it);for(const Y in E){if($s(Y))continue;const K=E[Y],at=C[Y];K!==at&&Y!=="value"&&r(w,Y,at,K,q,it)}"value"in E&&r(w,"value",C.value,E.value,q)}},et=(w,C,E,it,q,Y,K,at,j)=>{const x=C.el=w?w.el:a(""),_=C.anchor=w?w.anchor:a("");let{patchFlag:R,dynamicChildren:z,slotScopeIds:k}=C;k&&(at=at?at.concat(k):k),w==null?(i(x,E,it),i(_,E,it),O(C.children||[],E,_,q,Y,K,at,j)):R>0&&R&64&&z&&w.dynamicChildren&&w.dynamicChildren.length===z.length?(y(w.dynamicChildren,z,E,q,Y,K,at),(C.key!=null||q&&C===q.subTree)&&uf(w,C,!0)):H(w,C,E,_,q,Y,K,at,j)},W=(w,C,E,it,q,Y,K,at,j)=>{C.slotScopeIds=at,w==null?C.shapeFlag&512?q.ctx.activate(C,E,it,K,j):st(C,E,it,q,Y,K,j):lt(w,C,j)},st=(w,C,E,it,q,Y,K)=>{const at=w.component=tm(w,it,q);if(Ql(w)&&(at.ctx.renderer=Ut),nm(at,!1,K),at.asyncDep){if(q&&q.registerDep(at,$,K),!w.el){const j=at.subTree=Pn(ti);p(null,j,C,E),w.placeholder=j.el}}else $(at,w,C,E,q,Y,K)},lt=(w,C,E)=>{const it=C.component=w.component;if(Fp(w,C,E))if(it.asyncDep&&!it.asyncResolved){C.el=w.el,Q(it,C,E);return}else it.next=C,it.update();else C.el=w.el,it.vnode=C},$=(w,C,E,it,q,Y,K)=>{const at=()=>{if(w.isMounted){let{next:R,bu:z,u:k,parent:V,vnode:mt}=w;{const xt=hf(w);if(xt){R&&(R.el=mt.el,Q(w,R,K)),xt.asyncDep.then(()=>{Xe(()=>{w.isUnmounted||x()},q)});return}}let ut=R,ft;Ti(w,!1),R?(R.el=mt.el,Q(w,R,K)):R=mt,z&&Yr(z),(ft=R.props&&R.props.onVnodeBeforeUpdate)&&yn(ft,V,R,mt),Ti(w,!0);const It=Nc(w),ht=w.subTree;w.subTree=It,v(ht,It,h(ht.el),pt(ht),w,q,Y),R.el=It.el,ut===null&&Op(w,It.el),k&&Xe(k,q),(ft=R.props&&R.props.onVnodeUpdated)&&Xe(()=>yn(ft,V,R,mt),q)}else{let R;const{el:z,props:k}=C,{bm:V,m:mt,parent:ut,root:ft,type:It}=w,ht=Qs(C);Ti(w,!1),V&&Yr(V),!ht&&(R=k&&k.onVnodeBeforeMount)&&yn(R,ut,C),Ti(w,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(It,w.parent?w.parent.type:void 0);const xt=w.subTree=Nc(w);v(null,xt,E,it,w,q,Y),C.el=xt.el}if(mt&&Xe(mt,q),!ht&&(R=k&&k.onVnodeMounted)){const xt=C;Xe(()=>yn(R,ut,xt),q)}(C.shapeFlag&256||ut&&Qs(ut.vnode)&&ut.vnode.shapeFlag&256)&&w.a&&Xe(w.a,q),w.isMounted=!0,C=E=it=null}};w.scope.on();const j=w.effect=new Sh(at);w.scope.off();const x=w.update=j.run.bind(j),_=w.job=j.runIfDirty.bind(j);_.i=w,_.id=w.uid,j.scheduler=()=>Kl(_),Ti(w,!0),x()},Q=(w,C,E)=>{C.component=w;const it=w.vnode.props;w.vnode=C,w.next=null,zp(w,C.props,it,E),Gp(w,C.children,E),Jn(),Rc(w),Qn()},H=(w,C,E,it,q,Y,K,at,j=!1)=>{const x=w&&w.children,_=w?w.shapeFlag:0,R=C.children,{patchFlag:z,shapeFlag:k}=C;if(z>0){if(z&128){ct(x,R,E,it,q,Y,K,at,j);return}else if(z&256){J(x,R,E,it,q,Y,K,at,j);return}}k&8?(_&16&&gt(x,q,Y),R!==x&&u(E,R)):_&16?k&16?ct(x,R,E,it,q,Y,K,at,j):gt(x,q,Y,!0):(_&8&&u(E,""),k&16&&O(R,E,it,q,Y,K,at,j))},J=(w,C,E,it,q,Y,K,at,j)=>{w=w||Fi,C=C||Fi;const x=w.length,_=C.length,R=Math.min(x,_);let z;for(z=0;z<R;z++){const k=C[z]=j?Wn(C[z]):Tn(C[z]);v(w[z],k,E,null,q,Y,K,at,j)}x>_?gt(w,q,Y,!0,!1,R):O(C,E,it,q,Y,K,at,j,R)},ct=(w,C,E,it,q,Y,K,at,j)=>{let x=0;const _=C.length;let R=w.length-1,z=_-1;for(;x<=R&&x<=z;){const k=w[x],V=C[x]=j?Wn(C[x]):Tn(C[x]);if(Ns(k,V))v(k,V,E,null,q,Y,K,at,j);else break;x++}for(;x<=R&&x<=z;){const k=w[R],V=C[z]=j?Wn(C[z]):Tn(C[z]);if(Ns(k,V))v(k,V,E,null,q,Y,K,at,j);else break;R--,z--}if(x>R){if(x<=z){const k=z+1,V=k<_?C[k].el:it;for(;x<=z;)v(null,C[x]=j?Wn(C[x]):Tn(C[x]),E,V,q,Y,K,at,j),x++}}else if(x>z)for(;x<=R;)Tt(w[x],q,Y,!0),x++;else{const k=x,V=x,mt=new Map;for(x=V;x<=z;x++){const _t=C[x]=j?Wn(C[x]):Tn(C[x]);_t.key!=null&&mt.set(_t.key,x)}let ut,ft=0;const It=z-V+1;let ht=!1,xt=0;const Dt=new Array(It);for(x=0;x<It;x++)Dt[x]=0;for(x=k;x<=R;x++){const _t=w[x];if(ft>=It){Tt(_t,q,Y,!0);continue}let Ft;if(_t.key!=null)Ft=mt.get(_t.key);else for(ut=V;ut<=z;ut++)if(Dt[ut-V]===0&&Ns(_t,C[ut])){Ft=ut;break}Ft===void 0?Tt(_t,q,Y,!0):(Dt[Ft-V]=x+1,Ft>=xt?xt=Ft:ht=!0,v(_t,C[Ft],E,null,q,Y,K,at,j),ft++)}const Nt=ht?Yp(Dt):Fi;for(ut=Nt.length-1,x=It-1;x>=0;x--){const _t=V+x,Ft=C[_t],zt=C[_t+1],ee=_t+1<_?zt.el||ff(zt):it;Dt[x]===0?v(null,Ft,E,ee,q,Y,K,at,j):ht&&(ut<0||x!==Nt[ut]?nt(Ft,E,ee,2):ut--)}}},nt=(w,C,E,it,q=null)=>{const{el:Y,type:K,transition:at,children:j,shapeFlag:x}=w;if(x&6){nt(w.component.subTree,C,E,it);return}if(x&128){w.suspense.move(C,E,it);return}if(x&64){K.move(w,C,E,Ut);return}if(K===Ze){i(Y,C,E);for(let R=0;R<j.length;R++)nt(j[R],C,E,it);i(w.anchor,C,E);return}if(K===Ko){A(w,C,E);return}if(it!==2&&x&1&&at)if(it===0)at.persisted&&!Y[Yo]?i(Y,C,E):(at.beforeEnter(Y),i(Y,C,E),Xe(()=>at.enter(Y),q));else{const{leave:R,delayLeave:z,afterLeave:k}=at,V=()=>{w.ctx.isUnmounted?s(Y):i(Y,C,E)},mt=()=>{const ut=Y._isLeaving||!!Y[Yo];Y._isLeaving&&Y[Yo](!0),at.persisted&&!ut?V():R(Y,()=>{V(),k&&k()})};z?z(Y,V,mt):mt()}else i(Y,C,E)},Tt=(w,C,E,it=!1,q=!1)=>{const{type:Y,props:K,ref:at,children:j,dynamicChildren:x,shapeFlag:_,patchFlag:R,dirs:z,cacheIndex:k,memo:V}=w;if((R===-2||x&&x.hasOnce)&&(q=!1),at!=null&&(Jn(),Js(at,null,E,w,!0),Qn()),k!=null&&(!w.ctx||w.ctx===C)&&(C.renderCache[k]=void 0),_&256){C.ctx.deactivate(w);return}const mt=_&1&&z,ut=!Qs(w);let ft;if(ut&&(ft=K&&K.onVnodeBeforeUnmount)&&yn(ft,C,w),_&6)ot(w.component,E,it);else{if(_&128){w.suspense.unmount(E,it);return}mt&&bi(w,null,C,"beforeUnmount"),_&64?w.type.remove(w,C,E,Ut,it):x&&!x.hasOnce&&(Y!==Ze||R>0&&R&64)?gt(x,C,E,!1,!0):(Y===Ze&&R&384||!q&&_&16)&&gt(j,C,E),it&&Lt(w)}const It=V!=null&&k==null;(ut&&(ft=K&&K.onVnodeUnmounted)||mt||It)&&Xe(()=>{ft&&yn(ft,C,w),mt&&bi(w,null,C,"unmounted"),It&&(w.el=null)},E)},Lt=w=>{const{type:C,el:E,anchor:it,transition:q}=w;if(C===Ze){tt(E,it);return}if(C===Ko){M(w),q&&!q.persisted&&q.afterLeave&&q.afterLeave();return}const Y=()=>{s(E),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:K,delayLeave:at}=q,j=()=>K(E,Y);at?at(w.el,Y,j):j()}else Y()},tt=(w,C)=>{let E;for(;w!==C;)E=f(w),s(w),w=E;s(C)},ot=(w,C,E)=>{const{bum:it,scope:q,job:Y,subTree:K,um:at,m:j,a:x}=w;Bc(j),Bc(x),it&&Yr(it),q.stop(),Y?(Y.flags|=8,Tt(K,w,C,E)):w.vnode.el&&K&&(K.transition=w.vnode.transition,Tt(K,w,C,E)),at&&Xe(at,C),Xe(()=>{w.isUnmounted=!0},C)},gt=(w,C,E,it=!1,q=!1,Y=0)=>{for(let K=Y;K<w.length;K++)Tt(w[K],C,E,it,q)},pt=w=>{if(w.shapeFlag&6)return pt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=f(w.anchor||w.el),E=C&&C[up];return E?f(E):C};let St=!1;const At=(w,C,E)=>{let it;w==null?C._vnode&&(Tt(C._vnode,null,null,!0),it=C._vnode.component):v(C._vnode||null,w,C,null,null,null,E),C._vnode=w,St||(St=!0,Rc(it),Bh(),St=!1)},Ut={p:v,um:Tt,m:nt,r:Lt,mt:st,mc:O,pc:H,pbc:y,n:pt,o:n};return{render:At,hydrate:void 0,createApp:Pp(At)}}function $o({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ti({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function qp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function uf(n,t,e=!1){const i=n.children,s=t.children;if(Ot(i)&&Ot(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&uf(o,a)),a.type===Lo&&(a.patchFlag===-1&&(a=s[r]=Wn(a)),a.el=o.el),a.type===ti&&!a.el&&(a.el=o.el)}}function Yp(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function hf(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hf(t)}function Bc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ff(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ff(t.subTree):null}const df=n=>n.__isSuspense;function jp(n,t){t&&t.pendingBranch?Ot(n)?t.effects.push(...n):t.effects.push(n):sp(n)}const Ze=Symbol.for("v-fgt"),Lo=Symbol.for("v-txt"),ti=Symbol.for("v-cmt"),Ko=Symbol.for("v-stc"),Vi=[];let Qe=null;function Me(n=!1){Vi.push(Qe=n?null:[])}function pf(){Vi.pop(),Qe=Vi[Vi.length-1]||null}let sr=1;function zc(n,t=!1){sr+=n,n<0&&Qe&&t&&(Qe.hasOnce=!0)}function mf(n){return n.dynamicChildren=sr>0?Qe||Fi:null,pf(),sr>0&&Qe&&Qe.push(n),n}function Ae(n,t,e,i,s,r){return mf(Yt(n,t,e,i,s,r,!0))}function _f(n,t,e,i,s){return mf(Pn(n,t,e,i,s,!0))}function gf(n){return n?n.__v_isVNode===!0:!1}function Ns(n,t){return n.type===t.type&&n.key===t.key}const vf=({key:n})=>n??null,Kr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||Ne(n)||Vt(n)?{i:sn,r:n,k:t,f:!!e}:n:null);function Yt(n,t=null,e=null,i=0,s=null,r=n===Ze?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&vf(t),ref:t&&Kr(t),scopeId:Hh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return a?(ho(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),sr>0&&!o&&Qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Qe.push(l),l}const Pn=$p;function $p(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===yp)&&(n=ti),gf(n)){const a=Ms(n,t,!0);return e&&ho(a,e),sr>0&&!r&&Qe&&(a.shapeFlag&6?Qe[Qe.indexOf(n)]=a:Qe.push(a)),a.patchFlag=-2,a}if(om(n)&&(n=n.__vccOpts),t){t=Kp(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=To(a)),oe(l)&&($l(l)&&!Ot(l)&&(l=we({},l)),t.style=zi(l))}const o=ge(n)?1:df(n)?128:Co(n)?64:oe(n)?4:Vt(n)?2:0;return Yt(n,t,e,i,s,o,r,!0)}function Kp(n){return n?$l(n)||sf(n)?we({},n):n:null}function Ms(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Zp(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vf(c),ref:t&&t.ref?e&&r?Ot(r)?r.concat(Kr(t)):[r,Kr(t)]:Kr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ze?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ms(n.ssContent),ssFallback:n.ssFallback&&Ms(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Zl(u,l.clone(u)),u}function xf(n=" ",t=0){return Pn(Lo,null,n,t)}function fs(n="",t=!1){return t?(Me(),_f(ti,null,n)):Pn(ti,null,n)}function Tn(n){return n==null||typeof n=="boolean"?Pn(ti):Ot(n)?Pn(Ze,null,n.slice()):gf(n)?Wn(n):Pn(Lo,null,String(n))}function Wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ms(n)}function ho(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ot(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ho(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!sf(t)?t._ctx=sn:s===3&&sn&&(sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Vt(t)){if(i&65){ho(n,{default:t});return}t={default:t,_ctx:sn},e=32}else t=String(t),i&64?(e=16,t=[xf(t)]):e=8;n.children=t,n.shapeFlag|=e}function Zp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=To([t.class,i.class]));else if(s==="style")t.style=zi([t.style,i.style]);else if(So(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ot(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!yo(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function yn(n,t,e,i=null){Mn(n,t,7,[e,i])}const Jp=Jh();let Qp=0;function tm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Jp,r={uid:Qp++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:of(i,s),emitsOptions:Qh(i,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:i.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Lp.bind(null,r),n.ce&&n.ce(r),r}let He=null;const em=()=>He||sn;let fo,rr;{const n=bo(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};fo=t("__VUE_INSTANCE_SETTERS__",e=>He=e),rr=t("__VUE_SSR_SETTERS__",e=>or=e)}const ur=n=>{const t=He;return fo(n),n.scope.on(),()=>{n.scope.off(),fo(t)}},Hc=()=>{He&&He.scope.off(),fo(null)};function Mf(n){return n.vnode.shapeFlag&4}let or=!1;function nm(n,t=!1,e=!1){t&&rr(t);const{props:i,children:s}=n.vnode,r=Mf(n);Bp(n,i,r,t),kp(n,s,e||t);const o=r?im(n,t):void 0;return t&&rr(!1),o}function im(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ep);const{setup:i}=e;if(i){Jn();const s=n.setupContext=i.length>1?rm(n):null,r=ur(n),o=cr(i,n,0,[n.props,s]),a=dh(o);if(Qn(),r(),(a||n.sp)&&!Qs(n)&&Xh(n),a){if(o.then(Hc,Hc),t)return o.then(l=>{rr(!0);try{Vc(n,l,t)}finally{rr(!1)}}).catch(l=>{Ro(l,n,0)});n.asyncDep=o}else Vc(n,o)}else Sf(n)}function Vc(n,t,e){Vt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:oe(t)&&(n.setupState=Nh(t)),Sf(n)}function Sf(n,t,e){const i=n.type;n.render||(n.render=i.render||Cn);{const s=ur(n);Jn();try{bp(n)}finally{Qn(),s()}}}const sm={get(n,t){return Ie(n,"get",""),n[t]}};function rm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,sm),slots:n.slots,emit:n.emit,expose:t}}function Io(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Nh(Yd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in tr)return tr[e](n)},has(t,e){return e in t||e in tr}})):n.proxy}function om(n){return Vt(n)&&"__vccOpts"in n}const yf=(n,t)=>Qd(n,t,or),am="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xa;const kc=typeof window<"u"&&window.trustedTypes;if(kc)try{Xa=kc.createPolicy("vue",{createHTML:n=>n})}catch{}const Ef=Xa?n=>Xa.createHTML(n):n=>n,lm="http://www.w3.org/2000/svg",cm="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Gc=Gn&&Gn.createElement("template"),um={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Gn.createElementNS(lm,n):t==="mathml"?Gn.createElementNS(cm,n):e?Gn.createElement(n,{is:e}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Gc.innerHTML=Ef(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Gc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},hm=Symbol("_vtc");function fm(n,t,e){const i=n[hm];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const po=Symbol("_vod"),bf=Symbol("_vsh"),dm={name:"show",beforeMount(n,{value:t},{transition:e}){n[po]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Fs(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Fs(n,!0),i.enter(n)):i.leave(n,()=>{Fs(n,!1)}):Fs(n,t))},beforeUnmount(n,{value:t}){Fs(n,t)}};function Fs(n,t){n.style.display=t?n[po]:"none",n[bf]=!t}const pm=Symbol(""),mm=/(?:^|;)\s*display\s*:/;function _m(n,t,e){const i=n.style,s=ge(e);let r=!1;if(e&&!s){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&qs(i,a,"")}else for(const o in t)e[o]==null&&qs(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?vm(n,o,!ge(t)&&t?t[o]:void 0,a)||qs(i,o,a):qs(i,o,"")}}else if(s){if(t!==e){const o=i[pm];o&&(e+=";"+o),i.cssText=e,r=mm.test(e)}}else t&&n.removeAttribute("style");po in n&&(n[po]=r?i.display:"",n[bf]&&(i.display="none"))}const vr=/\s*!important$/;function qs(n,t,e){if(Ot(e))e.forEach(i=>qs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))vr.test(e)?n.setProperty(t,e.replace(vr,""),"important"):n.setProperty(t,e);else{const i=gm(n,t);vr.test(e)?n.setProperty(Xi(i),e.replace(vr,""),"important"):n[i]=e}}const Wc=["Webkit","Moz","ms"],Zo={};function gm(n,t){const e=Zo[t];if(e)return e;let i=_n(t);if(i!=="filter"&&i in n)return Zo[t]=i;i=_h(i);for(let s=0;s<Wc.length;s++){const r=Wc[s]+i;if(r in n)return Zo[t]=r}return t}function vm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ge(i)&&e===i}const Xc="http://www.w3.org/1999/xlink";function qc(n,t,e,i,s,r=bd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Xc,t.slice(6,t.length)):n.setAttributeNS(Xc,t,e):e==null||r&&!vh(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Dn(e)?String(e):e)}function Yc(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Ef(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=vh(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function hs(n,t,e,i){n.addEventListener(t,e,i)}function xm(n,t,e,i){n.removeEventListener(t,e,i)}const jc=Symbol("_vei");function Mm(n,t,e,i,s=null){const r=n[jc]||(n[jc]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Em(t);if(i){const c=r[t]=Am(i,s);hs(n,a,c,l)}else o&&(xm(n,a,o,l),r[t]=void 0)}}const Sm=/(Once|Passive|Capture)$/,ym=/^on:?(?:Once|Passive|Capture)$/;function Em(n){let t,e;for(;(e=n.match(Sm))&&!ym.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Xi(n.slice(2)),t]}let Jo=0;const bm=Promise.resolve(),Tm=()=>Jo||(bm.then(()=>Jo=0),Jo=Date.now());function Am(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ot(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Mn(c,t,5,a)}}else Mn(s,t,5,[i])};return e.value=n,e.attached=Tm(),e}const $c=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,wm=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?fm(n,i,o):t==="style"?_m(n,e,i):So(t)?yo(t)||Mm(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rm(n,t,i,o))?(Yc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&qc(n,t,i,o,r,t!=="value")):n._isVueCE&&(Cm(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!ge(i)))?Yc(n,_n(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),qc(n,t,i,o))};function Rm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&$c(t)&&Vt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $c(t)&&ge(e)?!1:t in n}function Cm(n,t){const e=n._def.props;if(!e)return!1;const i=_n(t);return Array.isArray(e)?e.some(s=>_n(s)===i):Object.keys(e).some(s=>_n(s)===i)}const Kc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ot(t)?e=>Yr(t,e):t};function Pm(n){n.target.composing=!0}function Zc(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const xr=Symbol("_assign"),Mr=Symbol("_initialValue");function Qo(n,t,e){return t&&(n=n.trim()),e&&(n=Vl(n)),n}const Dm={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[Mr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Mr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[xr]=Kc(s);const r=i||s.props&&s.props.type==="number";hs(n,t?"change":"input",o=>{o.target.composing||n[xr](Qo(n.value,e,r))}),(e||r)&&hs(n,"change",()=>{n.value=Qo(n.value,e,r)}),t||(hs(n,"compositionstart",Pm),hs(n,"compositionend",Zc),hs(n,"change",Zc))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[Mr];delete n[Mr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[xr](Qo(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[xr]=Kc(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Vl(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Lm=["ctrl","shift","alt","meta"],Im={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Lm.some(e=>n[`${e}Key`]&&!t.includes(e))},qa=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=Im[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},Um=we({patchProp:wm},um);let Jc;function Nm(){return Jc||(Jc=Wp(Um))}const Fm=((...n)=>{const t=Nm().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Bm(i);if(!s)return;const r=t._component;!Vt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Om(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Om(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Bm(n){return ge(n)?document.querySelector(n):n}const zm={class:"tree"},Hm=["onClick"],Vm=["onClick"],km={key:0,viewBox:"0 0 12 12",class:"ico"},Gm=["d"],Wm={class:"label"},Xm=["title","onClick"],qm={key:0,viewBox:"0 0 16 16",class:"ico"},Ym={key:1,viewBox:"0 0 16 16",class:"ico hidden"},jm=Jl({__name:"ModelTree",props:{nodes:{},selectedId:{},query:{}},emits:["select","toggleVisible"],setup(n,{emit:t}){const e=n,i=t,s=Le({});function r(l,c,u,h){for(const f of l){const d=!u||f.name.toLowerCase().includes(u),g=[];r(f.children,c+1,u,g),(d||g.length)&&(h.push({node:f,depth:c}),s.value[f.id]||h.push(...g))}}const o=yf(()=>{const l=e.query.trim().toLowerCase(),c=[];return r(e.nodes,0,l,c),c});function a(l){s.value={...s.value,[l]:!s.value[l]}}return(l,c)=>(Me(),Ae("div",zm,[(Me(!0),Ae(Ze,null,Ha(o.value,u=>(Me(),Ae("div",{key:u.node.id,class:To(["row",{active:u.node.id===n.selectedId}]),style:zi({paddingLeft:6+u.depth*14+"px"}),onClick:h=>i("select",u.node.id)},[Yt("button",{class:"exp",type:"button",onClick:qa(h=>a(u.node.id),["stop"])},[u.node.children.length?(Me(),Ae("svg",km,[Yt("path",{d:s.value[u.node.id]?"M4 2 L9 6 L4 10":"M2 4 L6 9 L10 4",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,8,Gm)])):fs("",!0)],8,Vm),Yt("span",Wm,fn(u.node.name),1),Yt("button",{class:"eye",type:"button",title:u.node.visible?"Hide":"Show",onClick:qa(h=>i("toggleVisible",u.node.id,!u.node.visible),["stop"])},[u.node.visible?(Me(),Ae("svg",qm,[...c[0]||(c[0]=[Yt("path",{d:"M8 3C3.5 3 1 8 1 8s2.5 5 7 5 7-5 7-5-2.5-5-7-5z",fill:"none",stroke:"currentColor","stroke-width":"1.4"},null,-1),Yt("circle",{cx:"8",cy:"8",r:"2.1",fill:"none",stroke:"currentColor","stroke-width":"1.4"},null,-1)])])):(Me(),Ae("svg",Ym,[...c[1]||(c[1]=[Yt("path",{d:"M8 3C3.5 3 1 8 1 8s2.5 5 7 5 7-5 7-5-2.5-5-7-5z",fill:"none",stroke:"currentColor","stroke-width":"1.4"},null,-1),Yt("circle",{cx:"8",cy:"8",r:"2.1",fill:"none",stroke:"currentColor","stroke-width":"1.4"},null,-1),Yt("path",{d:"M3 13 L13 3",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])]))],8,Xm)],14,Hm))),128))]))}}),Tf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},$m=Tf(jm,[["__scopeId","data-v-56b36050"]]),Km={class:"panel"},Zm={key:0,class:"empty"},Jm=["onClick"],Qm=Jl({__name:"PropertyPanel",props:{title:{},groups:{}},setup(n){const t=n,e=Le({});return $r(()=>t.groups.map(i=>i.id).join("|"),()=>{const i={};for(const s of t.groups)i[s.id]=!0;e.value=i},{immediate:!0}),(i,s)=>(Me(),Ae("div",Km,[Yt("header",null,fn(n.title||"Properties"),1),n.groups.length?fs("",!0):(Me(),Ae("div",Zm,"Select a tree node or click the 3D model")),(Me(!0),Ae(Ze,null,Ha(n.groups,(r,o)=>(Me(),Ae("section",{key:`${o}-${r.id}`},[Yt("button",{class:"sec",type:"button",onClick:a=>e.value[r.id]=!e.value[r.id]},[Yt("span",null,fn(e.value[r.id]?"v":">"),1),xf(" "+fn(r.title),1)],8,Jm),Vh(Yt("dl",null,[(Me(!0),Ae(Ze,null,Ha(r.items,(a,l)=>(Me(),Ae(Ze,{key:`${l}-${a.key}`},[Yt("dt",null,fn(a.key),1),Yt("dd",null,fn(a.value||"None"),1)],64))),128))],512),[[dm,e.value[r.id]!==!1]])]))),128))]))}}),t_=Tf(Qm,[["__scopeId","data-v-aebad16a"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nc="170",$n={ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},e_=0,Qc=1,n_=2,Af=1,i_=2,kn=3,Si=0,Ve=1,dn=2,vi=0,gs=1,tu=2,eu=3,nu=4,s_=5,Ui=100,r_=101,o_=102,a_=103,l_=104,c_=200,u_=201,h_=202,f_=203,Ya=204,ja=205,d_=206,p_=207,m_=208,__=209,g_=210,v_=211,x_=212,M_=213,S_=214,$a=0,Ka=1,Za=2,Ss=3,Ja=4,Qa=5,tl=6,el=7,wf=0,y_=1,E_=2,xi=0,b_=1,T_=2,A_=3,Rf=4,w_=5,R_=6,C_=7,Cf=300,ys=301,Es=302,nl=303,il=304,Uo=306,sl=1e3,Oi=1001,rl=1002,vn=1003,P_=1004,Sr=1005,Rn=1006,ta=1007,Bi=1008,ei=1009,Pf=1010,Df=1011,ar=1012,ic=1013,ki=1014,Yn=1015,hr=1016,sc=1017,rc=1018,bs=1020,Lf=35902,If=1021,Uf=1022,mn=1023,Nf=1024,Ff=1025,vs=1026,Ts=1027,Of=1028,oc=1029,Bf=1030,ac=1031,lc=1033,Zr=33776,Jr=33777,Qr=33778,to=33779,ol=35840,al=35841,ll=35842,cl=35843,ul=36196,hl=37492,fl=37496,dl=37808,pl=37809,ml=37810,_l=37811,gl=37812,vl=37813,xl=37814,Ml=37815,Sl=37816,yl=37817,El=37818,bl=37819,Tl=37820,Al=37821,eo=36492,wl=36494,Rl=36495,zf=36283,Cl=36284,Pl=36285,Dl=36286,D_=3200,L_=3201,Hf=0,I_=1,pi="",Ke="srgb",ws="srgb-linear",No="linear",ie="srgb",$i=7680,iu=519,U_=512,N_=513,F_=514,Vf=515,O_=516,B_=517,z_=518,H_=519,su=35044,ru="300 es",jn=2e3,mo=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Ll=180/Math.PI;function fr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function ze(n,t,e){return Math.max(t,Math.min(e,n))}function V_(n,t){return(n%t+t)%t}function ea(n,t,e){return(1-e)*n+e*t}function Os(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const k_={DEG2RAD:no};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],b=s[1],A=s[4],M=s[7],B=s[2],L=s[5],P=s[8];return r[0]=o*v+a*b+l*B,r[3]=o*m+a*A+l*L,r[6]=o*p+a*M+l*P,r[1]=c*v+u*b+h*B,r[4]=c*m+u*A+h*L,r[7]=c*p+u*M+h*P,r[2]=f*v+d*b+g*B,r[5]=f*m+d*A+g*L,r[8]=f*p+d*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Wt;function kf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function G_(){const n=_o("canvas");return n.style.display="block",n}const ou={};function Ys(n){n in ou||(ou[n]=!0,console.warn(n))}function W_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function X_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function q_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(n.r=Kn(n.r),n.g=Kn(n.g),n.b=Kn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(n.r=xs(n.r),n.g=xs(n.g),n.b=xs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pi?No:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const au=[.64,.33,.3,.6,.15,.06],lu=[.2126,.7152,.0722],cu=[.3127,.329],uu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[ws]:{primaries:au,whitePoint:cu,transfer:No,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:lu,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:au,whitePoint:cu,transfer:ie,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:lu,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});let Ki;class Y_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=_o("canvas")),Ki.width=t.width,Ki.height=t.height;const i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Kn(e[i]/255)*255):e[i]=Kn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let j_=0;class Gf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Y_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $_=0;class qe extends qi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=Oi,s=Oi,r=Rn,o=Bi,a=mn,l=ei,c=qe.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=fr(),this.name="",this.source=new Gf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sl:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sl:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Cf;qe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,i=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,M=(d+1)/2,B=(p+1)/2,L=(u+f)/4,P=(h+v)/4,O=(g+m)/4;return A>M&&A>B?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=L/i,r=P/i):M>B?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=L/s,r=O/s):B<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),i=P/r,s=O/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-v)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends qi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends K_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wf extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z_ extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*v,b=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const B=Math.sqrt(A),L=Math.atan2(B,p*b);m=Math.sin(m*L)/B,a=Math.sin(a*L)/B}const M=a*b;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+v*M,m===1-a){const B=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=B,c*=B,u*=B,h*=B}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new F,fu=new Wi;class Rs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Er.subVectors(this.max,Bs),Zi.subVectors(t.a,Bs),Ji.subVectors(t.b,Bs),Qi.subVectors(t.c,Bs),oi.subVectors(Ji,Zi),ai.subVectors(Qi,Ji),Ai.subVectors(Zi,Qi);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ai.y,Ai.x,0];return!ra(e,Zi,Ji,Qi,Er)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Zi,Ji,Qi,Er))?!1:(br.crossVectors(oi,ai),e=[br.x,br.y,br.z],ra(e,Zi,Ji,Qi,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new F,new F,new F,new F,new F,new F,new F,new F],cn=new F,yr=new Rs,Zi=new F,Ji=new F,Qi=new F,oi=new F,ai=new F,Ai=new F,Bs=new F,Er=new F,br=new F,wi=new F;function ra(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const J_=new Rs,zs=new F,oa=new F;class Fo{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):J_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(oa)),this.expandByPoint(zs.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new F,aa=new F,Tr=new F,li=new F,la=new F,Ar=new F,ca=new F;class Oo{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){aa.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(aa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=li.dot(this.direction),l=-li.dot(Tr),c=li.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(aa).addScaledVector(Tr,f),d}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,i,s,r){la.subVectors(e,t),Ar.subVectors(i,t),ca.crossVectors(la,Ar);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);const l=a*this.direction.dot(Ar.crossVectors(li,Ar));if(l<0)return null;const c=a*this.direction.dot(la.cross(li));if(c<0||l+c>o)return null;const u=-a*li.dot(ca);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,v,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Q_,t,tg)}lookAt(t,e,i){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ci.crossVectors(i,je),ci.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ci.crossVectors(i,je)),ci.normalize(),wr.crossVectors(je,ci),s[0]=ci.x,s[4]=wr.x,s[8]=je.x,s[1]=ci.y,s[5]=wr.y,s[9]=je.y,s[2]=ci.z,s[6]=wr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],A=i[7],M=i[11],B=i[15],L=s[0],P=s[4],O=s[8],T=s[12],y=s[1],D=s[5],et=s[9],W=s[13],st=s[2],lt=s[6],$=s[10],Q=s[14],H=s[3],J=s[7],ct=s[11],nt=s[15];return r[0]=o*L+a*y+l*st+c*H,r[4]=o*P+a*D+l*lt+c*J,r[8]=o*O+a*et+l*$+c*ct,r[12]=o*T+a*W+l*Q+c*nt,r[1]=u*L+h*y+f*st+d*H,r[5]=u*P+h*D+f*lt+d*J,r[9]=u*O+h*et+f*$+d*ct,r[13]=u*T+h*W+f*Q+d*nt,r[2]=g*L+v*y+m*st+p*H,r[6]=g*P+v*D+m*lt+p*J,r[10]=g*O+v*et+m*$+p*ct,r[14]=g*T+v*W+m*Q+p*nt,r[3]=b*L+A*y+M*st+B*H,r[7]=b*P+A*D+M*lt+B*J,r[11]=b*O+A*et+M*$+B*ct,r[15]=b*T+A*W+M*Q+B*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=h*m*c-v*f*c+v*l*d-a*m*d-h*l*p+a*f*p,A=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,M=u*v*c-g*h*c+g*a*d-o*v*d-u*a*p+o*h*p,B=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,L=e*b+i*A+s*M+r*B;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=b*P,t[1]=(v*f*r-h*m*r-v*s*d+i*m*d+h*s*p-i*f*p)*P,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*P,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,t[4]=A*P,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*P,t[8]=M*P,t[9]=(g*h*r-u*v*r-g*i*d+e*v*d+u*i*p-e*h*p)*P,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*P,t[12]=B*P,t[13]=(u*v*s-g*h*s+g*i*f-e*v*f-u*i*m+e*h*m)*P,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,v=o*u,m=o*h,p=a*h,b=l*c,A=l*u,M=l*h,B=i.x,L=i.y,P=i.z;return s[0]=(1-(v+p))*B,s[1]=(d+M)*B,s[2]=(g-A)*B,s[3]=0,s[4]=(d-M)*L,s[5]=(1-(f+p))*L,s[6]=(m+b)*L,s[7]=0,s[8]=(g+A)*P,s[9]=(m-b)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const c=1/r,u=1/o,h=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,e.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=jn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===jn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===mo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=jn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let g,v;if(a===jn)g=(o+r)*h,v=-2*h;else if(a===mo)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ts=new F,un=new le,Q_=new F(0,0,0),tg=new F(1,1,1),ci=new F,wr=new F,je=new F,du=new le,pu=new Wi;class In{constructor(t=0,e=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eg=0;const mu=new F,es=new Wi,zn=new le,Rr=new F,Hs=new F,ng=new F,ig=new Wi,_u=new F(1,0,0),gu=new F(0,1,0),vu=new F(0,0,1),xu={type:"added"},sg={type:"removed"},ns={type:"childadded",child:null},ua={type:"childremoved",child:null};class be extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new F,e=new In,i=new Wi,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Wt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rr.copy(t):Rr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Hs,Rr,this.up):zn.lookAt(Rr,Hs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(zn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sg),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}be.DEFAULT_UP=new F(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new F,Hn=new F,ha=new F,Vn=new F,is=new F,ss=new F,Mu=new F,fa=new F,da=new F,pa=new F,ma=new re,_a=new re,ga=new re;class pn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hn.subVectors(s,e),Hn.subVectors(i,e),ha.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Hn),l=hn.dot(ha),c=Hn.dot(Hn),u=Hn.dot(ha),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ma.setScalar(0),_a.setScalar(0),ga.setScalar(0),ma.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,i),ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(_a,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(t,e,i,s){return hn.subVectors(i,e),Hn.subVectors(t,e),hn.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),hn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,i),ss.subVectors(r,i),fa.subVectors(t,i);const l=is.dot(fa),c=ss.dot(fa);if(l<=0&&c<=0)return e.copy(i);da.subVectors(t,s);const u=is.dot(da),h=ss.dot(da);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(is,o);pa.subVectors(t,r);const d=is.dot(pa),g=ss.dot(pa);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ss,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Mu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Mu,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function va(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=V_(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=va(o,r,t+1/3),this.g=va(o,r,t),this.b=va(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const i=Xf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return jt.fromWorkingColorSpace(De.copy(this),t),Math.round(ze(De.r*255,0,255))*65536+Math.round(ze(De.g*255,0,255))*256+Math.round(ze(De.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(De.copy(this),e);const i=De.r,s=De.g,r=De.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ke){jt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,i=De.g,s=De.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Cr);const i=ea(ui.h,Cr.h,e),s=ea(ui.s,Cr.s,e),r=ea(ui.l,Cr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new qt;qt.NAMES=Xf;let rg=0;class Cs extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=fr(),this.name="",this.blending=gs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=ja,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ya&&(i.blendSrc=this.blendSrc),this.blendDst!==ja&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bo extends Cs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new F,Pr=new Ht;class Ue{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=su,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Os(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==su&&(t.usage=this.usage),t}}class qf extends Ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yf extends Ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zn extends Ue{constructor(t,e,i){super(new Float32Array(t),e,i)}}let og=0;const en=new le,xa=new be,rs=new F,$e=new Rs,Vs=new Rs,Ee=new F;class xn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kf(t)?Yf:qf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors($e.min,Vs.min),$e.expandByPoint(Ee),Ee.addVectors($e.max,Vs.max),$e.expandByPoint(Ee)):($e.expandByPoint(Vs.min),$e.expandByPoint(Vs.max))}$e.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ee.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),Ee.add(rs)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new F,l[O]=new F;const c=new F,u=new F,h=new F,f=new Ht,d=new Ht,g=new Ht,v=new F,m=new F;function p(O,T,y){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),f.fromBufferAttribute(r,O),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[O].add(v),a[T].add(v),a[y].add(v),l[O].add(m),l[T].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let O=0,T=b.length;O<T;++O){const y=b[O],D=y.start,et=y.count;for(let W=D,st=D+et;W<st;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const A=new F,M=new F,B=new F,L=new F;function P(O){B.fromBufferAttribute(s,O),L.copy(B);const T=a[O];A.copy(T),A.sub(B.multiplyScalar(B.dot(T))).normalize(),M.crossVectors(L,T);const D=M.dot(l[O])<0?-1:1;o.setXYZW(O,A.x,A.y,A.z,D)}for(let O=0,T=b.length;O<T;++O){const y=b[O],D=y.start,et=y.count;for(let W=D,st=D+et;W<st;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ue(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new le,Ri=new Oo,Dr=new Fo,yu=new F,Lr=new F,Ir=new F,Ur=new F,Ma=new F,Nr=new F,Eu=new F,Fr=new F;class me extends be{constructor(t=new xn,e=new Bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ma.fromBufferAttribute(h,t),o?Nr.addScaledVector(Ma,u):Nr.addScaledVector(Ma.sub(e),u))}e.add(Nr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Dr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Dr,yu)===null||Ri.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(Su.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Su),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,B=A;M<B;M+=3){const L=a.getX(M),P=a.getX(M+1),O=a.getX(M+2);s=Or(this,p,t,i,c,u,h,L,P,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=Or(this,o,t,i,c,u,h,b,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,B=A;M<B;M+=3){const L=M,P=M+1,O=M+2;s=Or(this,p,t,i,c,u,h,L,P,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=m,A=m+1,M=m+2;s=Or(this,o,t,i,c,u,h,b,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ag(n,t,e,i,s,r,o,a){let l;if(t.side===Ve?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Si,a),l===null)return null;Fr.copy(a),Fr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:n}}function Or(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Lr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Ur);const u=ag(n,t,e,i,Lr,Ir,Ur,Eu);if(u){const h=new F;pn.getBarycoord(Eu,Lr,Ir,Ur,h),s&&(u.uv=pn.getInterpolatedAttribute(s,a,l,c,h,new Ht)),r&&(u.uv1=pn.getInterpolatedAttribute(r,a,l,c,h,new Ht)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};pn.getNormal(Lr,Ir,Ur,f.normal),u.face=f,u.barycoord=h}return u}class Ps extends xn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Zn(c,3)),this.setAttribute("normal",new Zn(u,3)),this.setAttribute("uv",new Zn(h,2));function g(v,m,p,b,A,M,B,L,P,O,T){const y=M/P,D=B/O,et=M/2,W=B/2,st=L/2,lt=P+1,$=O+1;let Q=0,H=0;const J=new F;for(let ct=0;ct<$;ct++){const nt=ct*D-W;for(let Tt=0;Tt<lt;Tt++){const Lt=Tt*y-et;J[v]=Lt*b,J[m]=nt*A,J[p]=st,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=L>0?1:-1,u.push(J.x,J.y,J.z),h.push(Tt/P),h.push(1-ct/O),Q+=1}}for(let ct=0;ct<O;ct++)for(let nt=0;nt<P;nt++){const Tt=f+nt+lt*ct,Lt=f+nt+lt*(ct+1),tt=f+(nt+1)+lt*(ct+1),ot=f+(nt+1)+lt*ct;l.push(Tt,Lt,ot),l.push(Lt,tt,ot),H+=6}a.addGroup(d,H,T),d+=H,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Oe(n){const t={};for(let e=0;e<n.length;e++){const i=As(n[e]);for(const s in i)t[s]=i[s]}return t}function lg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const cg={clone:As,merge:Oe};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Cs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=lg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class $f extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new F,bu=new Ht,Tu=new Ht;class Je extends $f{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ll*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,bu,Tu),e.subVectors(Tu,bu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(no*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,as=1;class fg extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(os,as,t,e);s.layers=this.layers,this.add(s);const r=new Je(os,as,t,e);r.layers=this.layers,this.add(r);const o=new Je(os,as,t,e);o.layers=this.layers,this.add(o);const a=new Je(os,as,t,e);a.layers=this.layers,this.add(a);const l=new Je(os,as,t,e);l.layers=this.layers,this.add(l);const c=new Je(os,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kf extends qe{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dg extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Kf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ps(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:vi});r.uniforms.tEquirect.value=e;const o=new me(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=Rn),new fg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Sa=new F,pg=new F,mg=new Wt;class di{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Sa.subVectors(i,e).cross(pg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Sa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mg.getNormalMatrix(t),s=this.coplanarPoint(Sa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Fo,Br=new F;class uc{constructor(t=new di,e=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],b=s[13],A=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+b).normalize(),i[3].setComponents(l-o,f-u,m-g,M-b).normalize(),i[4].setComponents(l-a,f-h,m-v,M-A).normalize(),e===jn)i[5].setComponents(l+a,f+h,m+v,M+A).normalize();else if(e===mo)i[5].setComponents(a,h,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _g(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class zo extends xn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let A=0;A<c;A++){const M=A*h-r;g.push(M,-b,0),v.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const A=b+c*p,M=b+c*(p+1),B=b+1+c*(p+1),L=b+1+c*p;d.push(A,M,L),d.push(M,B,L)}this.setIndex(d),this.setAttribute("position",new Zn(g,3)),this.setAttribute("normal",new Zn(v,3)),this.setAttribute("uv",new Zn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.width,t.height,t.widthSegments,t.heightSegments)}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_v=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Av=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:gg,alphahash_pars_fragment:vg,alphamap_fragment:xg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:yg,aomap_fragment:Eg,aomap_pars_fragment:bg,batching_pars_vertex:Tg,batching_vertex:Ag,begin_vertex:wg,beginnormal_vertex:Rg,bsdfs:Cg,iridescence_fragment:Pg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Ng,color_fragment:Fg,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:zg,common:Hg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:kg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:qg,colorspace_fragment:Yg,colorspace_pars_fragment:jg,envmap_fragment:$g,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:cv,envmap_vertex:Qg,fog_vertex:tv,fog_pars_vertex:ev,fog_fragment:nv,fog_pars_fragment:iv,gradientmap_pars_fragment:sv,lightmap_pars_fragment:rv,lights_lambert_fragment:ov,lights_lambert_pars_fragment:av,lights_pars_begin:lv,lights_toon_fragment:uv,lights_toon_pars_fragment:hv,lights_phong_fragment:fv,lights_phong_pars_fragment:dv,lights_physical_fragment:pv,lights_physical_pars_fragment:mv,lights_fragment_begin:_v,lights_fragment_maps:gv,lights_fragment_end:vv,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:Mv,logdepthbuf_pars_vertex:Sv,logdepthbuf_vertex:yv,map_fragment:Ev,map_pars_fragment:bv,map_particle_fragment:Tv,map_particle_pars_fragment:Av,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Rv,morphinstance_vertex:Cv,morphcolor_vertex:Pv,morphnormal_vertex:Dv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Iv,normal_fragment_begin:Uv,normal_fragment_maps:Nv,normal_pars_fragment:Fv,normal_pars_vertex:Ov,normal_vertex:Bv,normalmap_pars_fragment:zv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Vv,clearcoat_pars_fragment:kv,iridescence_pars_fragment:Gv,opaque_fragment:Wv,packing:Xv,premultiplied_alpha_fragment:qv,project_vertex:Yv,dithering_fragment:jv,dithering_pars_fragment:$v,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:u0,transmission_pars_fragment:h0,uv_pars_fragment:f0,uv_pars_vertex:d0,uv_vertex:p0,worldpos_vertex:m0,background_vert:_0,background_frag:g0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:M0,cube_frag:S0,depth_vert:y0,depth_frag:E0,distanceRGBA_vert:b0,distanceRGBA_frag:T0,equirect_vert:A0,equirect_frag:w0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:P0,meshbasic_frag:D0,meshlambert_vert:L0,meshlambert_frag:I0,meshmatcap_vert:U0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:H0,meshphysical_frag:V0,meshtoon_vert:k0,meshtoon_frag:G0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:j0,sprite_frag:$0},vt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},An={basic:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Oe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Oe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Oe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Oe([vt.points,vt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Oe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Oe([vt.common,vt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Oe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Oe([vt.sprite,vt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Oe([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Oe([vt.lights,vt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};An.physical={uniforms:Oe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const zr={r:0,b:0,g:0},Pi=new In,K0=new le;function Z0(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?e:t).get(A)),A}function v(b){let A=!1;const M=g(b);M===null?p(a,l):M&&M.isColor&&(p(M,1),A=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,A){const M=g(A);M&&(M.isCubeTexture||M.mapping===Uo)?(u===void 0&&(u=new me(new Ps(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:As(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pi.copy(A.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(Pi)),u.material.toneMapped=jt.getTransfer(M.colorSpace)!==ie,(h!==M||f!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new me(new zo(2,2),new yi({name:"BackgroundMaterial",uniforms:As(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=jt.getTransfer(M.colorSpace)!==ie,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,A){b.getRGB(zr,jf(n)),i.buffers.color.setClear(zr.r,zr.g,zr.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m}}function J0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,D,et,W,st){let lt=!1;const $=h(W,et,D);r!==$&&(r=$,c(r.object)),lt=d(y,W,et,st),lt&&g(y,W,et,st),st!==null&&t.update(st,n.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,M(y,D,et,W),st!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,D,et){const W=et.wireframe===!0;let st=i[y.id];st===void 0&&(st={},i[y.id]=st);let lt=st[D.id];lt===void 0&&(lt={},st[D.id]=lt);let $=lt[W];return $===void 0&&($=f(l()),lt[W]=$),$}function f(y){const D=[],et=[],W=[];for(let st=0;st<e;st++)D[st]=0,et[st]=0,W[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:et,attributeDivisors:W,object:y,attributes:{},index:null}}function d(y,D,et,W){const st=r.attributes,lt=D.attributes;let $=0;const Q=et.getAttributes();for(const H in Q)if(Q[H].location>=0){const ct=st[H];let nt=lt[H];if(nt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),ct===void 0||ct.attribute!==nt||nt&&ct.data!==nt.data)return!0;$++}return r.attributesNum!==$||r.index!==W}function g(y,D,et,W){const st={},lt=D.attributes;let $=0;const Q=et.getAttributes();for(const H in Q)if(Q[H].location>=0){let ct=lt[H];ct===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor));const nt={};nt.attribute=ct,ct&&ct.data&&(nt.data=ct.data),st[H]=nt,$++}r.attributes=st,r.attributesNum=$,r.index=W}function v(){const y=r.newAttributes;for(let D=0,et=y.length;D<et;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const et=r.newAttributes,W=r.enabledAttributes,st=r.attributeDivisors;et[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),st[y]!==D&&(n.vertexAttribDivisor(y,D),st[y]=D)}function b(){const y=r.newAttributes,D=r.enabledAttributes;for(let et=0,W=D.length;et<W;et++)D[et]!==y[et]&&(n.disableVertexAttribArray(et),D[et]=0)}function A(y,D,et,W,st,lt,$){$===!0?n.vertexAttribIPointer(y,D,et,st,lt):n.vertexAttribPointer(y,D,et,W,st,lt)}function M(y,D,et,W){v();const st=W.attributes,lt=et.getAttributes(),$=D.defaultAttributeValues;for(const Q in lt){const H=lt[Q];if(H.location>=0){let J=st[Q];if(J===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const ct=J.normalized,nt=J.itemSize,Tt=t.get(J);if(Tt===void 0)continue;const Lt=Tt.buffer,tt=Tt.type,ot=Tt.bytesPerElement,gt=tt===n.INT||tt===n.UNSIGNED_INT||J.gpuType===ic;if(J.isInterleavedBufferAttribute){const pt=J.data,St=pt.stride,At=J.offset;if(pt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<H.locationSize;Ut++)p(H.location+Ut,pt.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)m(H.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let Ut=0;Ut<H.locationSize;Ut++)A(H.location+Ut,nt/H.locationSize,tt,ct,St*ot,(At+nt/H.locationSize*Ut)*ot,gt)}else{if(J.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)p(H.location+pt,J.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let pt=0;pt<H.locationSize;pt++)A(H.location+pt,nt/H.locationSize,tt,ct,nt*ot,nt/H.locationSize*pt*ot,gt)}}else if($!==void 0){const ct=$[Q];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(H.location,ct);break;case 3:n.vertexAttrib3fv(H.location,ct);break;case 4:n.vertexAttrib4fv(H.location,ct);break;default:n.vertexAttrib1fv(H.location,ct)}}}}b()}function B(){O();for(const y in i){const D=i[y];for(const et in D){const W=D[et];for(const st in W)u(W[st].object),delete W[st];delete D[et]}delete i[y]}}function L(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const et in D){const W=D[et];for(const st in W)u(W[st].object),delete W[st];delete D[et]}delete i[y.id]}function P(y){for(const D in i){const et=i[D];if(et[y.id]===void 0)continue;const W=et[y.id];for(const st in W)u(W[st].object),delete W[st];delete et[y.id]}}function O(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Q0(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ei&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Yn&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:B,maxSamples:L}}function ex(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new di,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,A=b*4;let M=p.clippingState||null;l.value=M,M=u(g,f,A,d);for(let B=0;B!==A;++B)M[B]=e[B];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==v;++A,M+=4)o.copy(h[A]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function nx(n){let t=new WeakMap;function e(o,a){return a===nl?o.mapping=ys:a===il&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nl||a===il)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dg(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Jf extends $f{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,Au=[.125,.215,.35,.446,.526,.582],Ni=20,ya=new Jf,wu=new qt;let Ea=null,ba=0,Ta=0,Aa=!1;const Ii=(1+Math.sqrt(5))/2,ls=1/Ii,Ru=[new F(-Ii,ls,0),new F(Ii,ls,0),new F(-ls,0,Ii),new F(ls,0,Ii),new F(0,Ii,-ls),new F(0,Ii,ls),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,ba,Ta),this._renderer.xr.enabled=Aa,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:hr,format:mn,colorSpace:ws,depthBuffer:!1},s=Cu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=sx(r,t,e)}return s}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,s){const a=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wu),u.toneMapping=xi,u.autoClear=!1;const d=new Bo({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new me(new Ps,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(wu),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const A=this._cubeSize;Hr(s,b*A,p>2?A:0,A,A),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ys||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Hr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ya)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ru[(s-r-1)%Ru.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new me(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let b=0;for(let P=0;P<Ni;++P){const O=P/v,T=Math.exp(-O*O/2);p.push(T),P===0?b+=T:P<m&&(b+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const M=this._sizeLods[s],B=3*M*(s>A-ds?s-A+ds:0),L=4*(this._cubeSize-M);Hr(e,B,L,3*M,2*M),l.setRenderTarget(e),l.render(h,ya)}}function ix(n){const t=[],e=[],i=[];let s=n;const r=n-ds+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ds?l=Au[o-n+ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*d),A=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,O=L>2?0:-1,T=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];b.set(T,v*g*L),A.set(f,m*g*L);const y=[L,L,L,L,L,L];M.set(y,p*g*L)}const B=new xn;B.setAttribute("position",new Ue(b,v)),B.setAttribute("uv",new Ue(A,m)),B.setAttribute("faceIndex",new Ue(M,p)),t.push(B),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cu(n,t,e){const i=new Gi(n,t,e);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function sx(n,t,e){const i=new Float32Array(Ni),s=new F(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Pu(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Du(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nl||l===il,u=l===ys||l===Es;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Il(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Il(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ox(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ax(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let A=0,M=b.length;A<M;A+=3){const B=b[A+0],L=b[A+1],P=b[A+2];f.push(B,L,L,P,P,B)}}else if(g!==void 0){const b=g.array;v=g.version;for(let A=0,M=b.length/3-1;A<M;A+=3){const B=A+0,L=A+1,P=A+2;f.push(B,L,L,P,P,B)}}else return;const m=new(kf(f)?Yf:qf)(f,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lx(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*v[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ux(n,t,e){const i=new WeakMap,s=new re;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let B=a.attributes.position.count*M,L=1;B>t.maxTextureSize&&(L=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const P=new Float32Array(B*L*4*h),O=new Wf(P,B,L,h);O.type=Yn,O.needsUpdate=!0;const T=M*4;for(let D=0;D<h;D++){const et=p[D],W=b[D],st=A[D],lt=B*L*4*D;for(let $=0;$<et.count;$++){const Q=$*T;g===!0&&(s.fromBufferAttribute(et,$),P[lt+Q+0]=s.x,P[lt+Q+1]=s.y,P[lt+Q+2]=s.z,P[lt+Q+3]=0),v===!0&&(s.fromBufferAttribute(W,$),P[lt+Q+4]=s.x,P[lt+Q+5]=s.y,P[lt+Q+6]=s.z,P[lt+Q+7]=0),m===!0&&(s.fromBufferAttribute(st,$),P[lt+Q+8]=s.x,P[lt+Q+9]=s.y,P[lt+Q+10]=s.z,P[lt+Q+11]=st.itemSize===4?s.w:1)}}f={count:h,texture:O,size:new Ht(B,L)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function hx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Qf extends qe{constructor(t,e,i,s,r,o,a,l,c,u=vs){if(u!==vs&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vs&&(i=ki),i===void 0&&u===Ts&&(i=bs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const td=new qe,Lu=new Qf(1,1),ed=new Wf,nd=new Z_,id=new Kf,Iu=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function Ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ho(n,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function _x(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Ou.set(i),n.uniformMatrix2fv(this.addr,!1,Ou),ye(e,i)}}function gx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Fu.set(i),n.uniformMatrix3fv(this.addr,!1,Fu),ye(e,i)}}function vx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,i))return;Nu.set(i),n.uniformMatrix4fv(this.addr,!1,Nu),ye(e,i)}}function xx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function Ex(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function wx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Lu.compareFunction=Vf,r=Lu):r=td,e.setTexture2D(t||r,s)}function Rx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||nd,s)}function Cx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||id,s)}function Px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ed,s)}function Dx(n){switch(n){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return _x;case 35675:return gx;case 35676:return vx;case 5124:case 35670:return xx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return yx;case 5125:return Ex;case 36294:return bx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Lx(n,t){n.uniform1fv(this.addr,t)}function Ix(n,t){const e=Ds(t,this.size,2);n.uniform2fv(this.addr,e)}function Ux(n,t){const e=Ds(t,this.size,3);n.uniform3fv(this.addr,e)}function Nx(n,t){const e=Ds(t,this.size,4);n.uniform4fv(this.addr,e)}function Fx(n,t){const e=Ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ox(n,t){const e=Ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Bx(n,t){const e=Ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zx(n,t){n.uniform1iv(this.addr,t)}function Hx(n,t){n.uniform2iv(this.addr,t)}function Vx(n,t){n.uniform3iv(this.addr,t)}function kx(n,t){n.uniform4iv(this.addr,t)}function Gx(n,t){n.uniform1uiv(this.addr,t)}function Wx(n,t){n.uniform2uiv(this.addr,t)}function Xx(n,t){n.uniform3uiv(this.addr,t)}function qx(n,t){n.uniform4uiv(this.addr,t)}function Yx(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||td,r[o])}function jx(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nd,r[o])}function $x(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||id,r[o])}function Kx(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ed,r[o])}function Zx(n){switch(n){case 5126:return Lx;case 35664:return Ix;case 35665:return Ux;case 35666:return Nx;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return kx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Kx}}class Jx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dx(e.type)}}class Qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}}class tM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Bu(n,t){n.seq.push(t),n.map[t.id]=t}function eM(n,t,e){const i=n.name,s=i.length;for(wa.lastIndex=0;;){const r=wa.exec(i),o=wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bu(e,c===void 0?new Jx(a,n,t):new Qx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new tM(a),Bu(e,h)),e=h}}}class io{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);eM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function zu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const nM=37297;let iM=0;function sM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Hu=new Wt;function rM(n){jt._getMatrix(Hu,jt.workingColorSpace,n);const t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case No:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sM(n.getShaderSource(t),o)}else return s}function oM(n,t){const e=rM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function aM(n,t){let e;switch(t){case b_:e="Linear";break;case T_:e="Reinhard";break;case A_:e="Cineon";break;case Rf:e="ACESFilmic";break;case R_:e="AgX";break;case C_:e="Neutral";break;case w_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new F;function lM(){jt.getLuminanceCoefficients(Vr);const n=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function uM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function js(n){return n!==""}function ku(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(fM,pM)}const dM=new Map;function pM(n,t){let e=Xt[t];if(e===void 0){const i=dM.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ul(e)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(n){return n.replace(mM,_M)}function _M(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Af?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===i_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function vM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case Es:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function MM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wf:t="ENVMAP_BLENDING_MULTIPLY";break;case y_:t="ENVMAP_BLENDING_MIX";break;case E_:t="ENVMAP_BLENDING_ADD";break}return t}function SM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function yM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gM(e),c=vM(e),u=xM(e),h=MM(e),f=SM(e),d=cM(e),g=uM(r),v=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==xi?aM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),lM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Ul(o),o=ku(o,e),o=Gu(o,e),a=Ul(a),a=ku(a,e),a=Gu(a,e),o=Wu(o),a=Wu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=b+m+o,M=b+p+a,B=zu(s,s.VERTEX_SHADER,A),L=zu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,B),s.attachShader(v,L),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(D){if(n.debug.checkShaderErrors){const et=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(B).trim(),st=s.getShaderInfoLog(L).trim();let lt=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,B,L);else{const Q=Vu(s,B,"vertex"),H=Vu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+et+`
`+Q+`
`+H)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(W===""||st==="")&&($=!1);$&&(D.diagnostics={runnable:lt,programLog:et,vertexShader:{log:W,prefix:m},fragmentShader:{log:st,prefix:p}})}s.deleteShader(B),s.deleteShader(L),O=new io(s,v),T=hM(s,v)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,nM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=L,this}let EM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new TM(t),e.set(t,i)),i}}class TM{constructor(t){this.id=EM++,this.code=t,this.usedTimes=0}}function AM(n,t,e,i,s,r,o){const a=new cc,l=new bM,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,D,et,W){const st=et.fog,lt=W.geometry,$=T.isMeshStandardMaterial?et.environment:null,Q=(T.isMeshStandardMaterial?e:t).get(T.envMap||$),H=Q&&Q.mapping===Uo?Q.image.height:null,J=g[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const ct=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,nt=ct!==void 0?ct.length:0;let Tt=0;lt.morphAttributes.position!==void 0&&(Tt=1),lt.morphAttributes.normal!==void 0&&(Tt=2),lt.morphAttributes.color!==void 0&&(Tt=3);let Lt,tt,ot,gt;if(J){const ne=An[J];Lt=ne.vertexShader,tt=ne.fragmentShader}else Lt=T.vertexShader,tt=T.fragmentShader,l.update(T),ot=l.getVertexShaderID(T),gt=l.getFragmentShaderID(T);const pt=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),At=W.isInstancedMesh===!0,Ut=W.isBatchedMesh===!0,de=!!T.map,w=!!T.matcap,C=!!Q,E=!!T.aoMap,it=!!T.lightMap,q=!!T.bumpMap,Y=!!T.normalMap,K=!!T.displacementMap,at=!!T.emissiveMap,j=!!T.metalnessMap,x=!!T.roughnessMap,_=T.anisotropy>0,R=T.clearcoat>0,z=T.dispersion>0,k=T.iridescence>0,V=T.sheen>0,mt=T.transmission>0,ut=_&&!!T.anisotropyMap,ft=R&&!!T.clearcoatMap,It=R&&!!T.clearcoatNormalMap,ht=R&&!!T.clearcoatRoughnessMap,xt=k&&!!T.iridescenceMap,Dt=k&&!!T.iridescenceThicknessMap,Nt=V&&!!T.sheenColorMap,_t=V&&!!T.sheenRoughnessMap,Ft=!!T.specularMap,zt=!!T.specularColorMap,ee=!!T.specularIntensityMap,I=mt&&!!T.transmissionMap,Mt=mt&&!!T.thicknessMap,Z=!!T.gradientMap,rt=!!T.alphaMap,bt=T.alphaTest>0,yt=!!T.alphaHash,kt=!!T.extensions;let _e=xi;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(_e=n.toneMapping);const Re={shaderID:J,shaderType:T.type,shaderName:T.name,vertexShader:Lt,fragmentShader:tt,defines:T.defines,customVertexShaderID:ot,customFragmentShaderID:gt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&W._colorsTexture!==null,instancing:At,instancingColor:At&&W.instanceColor!==null,instancingMorph:At&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ws,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:w,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:H,aoMap:E,lightMap:it,bumpMap:q,normalMap:Y,displacementMap:f&&K,emissiveMap:at,normalMapObjectSpace:Y&&T.normalMapType===I_,normalMapTangentSpace:Y&&T.normalMapType===Hf,metalnessMap:j,roughnessMap:x,anisotropy:_,anisotropyMap:ut,clearcoat:R,clearcoatMap:ft,clearcoatNormalMap:It,clearcoatRoughnessMap:ht,dispersion:z,iridescence:k,iridescenceMap:xt,iridescenceThicknessMap:Dt,sheen:V,sheenColorMap:Nt,sheenRoughnessMap:_t,specularMap:Ft,specularColorMap:zt,specularIntensityMap:ee,transmission:mt,transmissionMap:I,thicknessMap:Mt,gradientMap:Z,opaque:T.transparent===!1&&T.blending===gs&&T.alphaToCoverage===!1,alphaMap:rt,alphaTest:bt,alphaHash:yt,combine:T.combine,mapUv:de&&v(T.map.channel),aoMapUv:E&&v(T.aoMap.channel),lightMapUv:it&&v(T.lightMap.channel),bumpMapUv:q&&v(T.bumpMap.channel),normalMapUv:Y&&v(T.normalMap.channel),displacementMapUv:K&&v(T.displacementMap.channel),emissiveMapUv:at&&v(T.emissiveMap.channel),metalnessMapUv:j&&v(T.metalnessMap.channel),roughnessMapUv:x&&v(T.roughnessMap.channel),anisotropyMapUv:ut&&v(T.anisotropyMap.channel),clearcoatMapUv:ft&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:It&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:_t&&v(T.sheenRoughnessMap.channel),specularMapUv:Ft&&v(T.specularMap.channel),specularColorMapUv:zt&&v(T.specularColorMap.channel),specularIntensityMapUv:ee&&v(T.specularIntensityMap.channel),transmissionMapUv:I&&v(T.transmissionMap.channel),thicknessMapUv:Mt&&v(T.thicknessMap.channel),alphaMapUv:rt&&v(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Y||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!lt.attributes.uv&&(de||rt),fog:!!st,useFog:T.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:St,skinning:W.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Tt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===ie,decodeVideoTextureEmissive:at&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===dn,flipSided:T.side===Ve,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)y.push(D),y.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(b(y,T),A(y,T),y.push(n.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function b(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function A(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const y=g[T.type];let D;if(y){const et=An[y];D=cg.clone(et.uniforms)}else D=T.uniforms;return D}function B(T,y){let D;for(let et=0,W=u.length;et<W;et++){const st=u[et];if(st.cacheKey===y){D=st,++D.usedTimes;break}}return D===void 0&&(D=new yM(n,y,T,r),u.push(D)),D}function L(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:B,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:O}}function wM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function RM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,v,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||RM),i.length>1&&i.sort(f||qu),s.length>1&&s.sort(f||qu)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function CM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Yu,n.set(i,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function PM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new qt};break;case"SpotLight":e={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function DM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let LM=0;function IM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function UM(n){const t=new PM,e=DM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new le,o=new le;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,b=0,A=0,M=0,B=0,L=0,P=0;c.sort(IM);for(let T=0,y=c.length;T<y;T++){const D=c[T],et=D.color,W=D.intensity,st=D.distance,lt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=et.r*W,h+=et.g*W,f+=et.b*W;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],W);P++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,H=e.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=lt,i.directionalShadowMatrix[d]=D.shadow.matrix,b++}i.directional[d]=$,d++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(et).multiplyScalar(W),$.distance=st,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[v]=$;const Q=D.shadow;if(D.map&&(i.spotLightMap[B]=D.map,B++,Q.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[v]=Q.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=lt,M++}v++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(et).multiplyScalar(W),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const Q=D.shadow,H=e.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=lt,i.pointShadowMatrix[g]=D.shadow.matrix,A++}i.point[g]=$,g++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(W),$.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==b||O.numPointShadows!==A||O.numSpotShadows!==M||O.numSpotMaps!==B||O.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+B-L,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,O.directionalLength=d,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=b,O.numPointShadows=A,O.numSpotShadows=M,O.numSpotMaps=B,O.numLightProbes=P,i.version=LM++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const A=c[p];if(A.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(A.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(A.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function ju(n){const t=new UM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function NM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ju(n),t.set(s,[a])):r>=o.length?(a=new ju(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class FM extends Cs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=D_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends Cs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HM(n,t,e){let i=new uc;const s=new Ht,r=new Ht,o=new re,a=new FM({depthPacking:L_}),l=new OM,c={},u=e.maxTextureSize,h={[Si]:Ve,[Ve]:Si,[dn]:dn},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:BM,fragmentShader:zM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Af;let p=this.type;this.render=function(L,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),et=n.state;et.setBlending(vi),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const W=p!==kn&&this.type===kn,st=p===kn&&this.type!==kn;for(let lt=0,$=L.length;lt<$;lt++){const Q=L[lt],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||W===!0||st===!0){const nt=this.type!==kn?{minFilter:vn,magFilter:vn}:{};H.map!==null&&H.map.dispose(),H.map=new Gi(s.x,s.y,nt),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ct=H.getViewportCount();for(let nt=0;nt<ct;nt++){const Tt=H.getViewport(nt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),et.viewport(o),H.updateMatrices(Q,nt),i=H.getFrustum(),M(P,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===kn&&b(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,y,D)};function b(L,P){const O=t.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Gi(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,O,f,v,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,O,d,v,null)}function A(L,P,O,T){let y=null;const D=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)y=D;else if(y=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const et=y.uuid,W=P.uuid;let st=c[et];st===void 0&&(st={},c[et]=st);let lt=st[W];lt===void 0&&(lt=y.clone(),st[W]=lt,P.addEventListener("dispose",B)),y=lt}if(y.visible=P.visible,y.wireframe=P.wireframe,T===kn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const et=n.properties.get(y);et.light=O}return y}function M(L,P,O,T,y){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===kn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const W=t.update(L),st=L.material;if(Array.isArray(st)){const lt=W.groups;for(let $=0,Q=lt.length;$<Q;$++){const H=lt[$],J=st[H.materialIndex];if(J&&J.visible){const ct=A(L,J,T,y);L.onBeforeShadow(n,L,P,O,W,ct,H),n.renderBufferDirect(O,null,W,ct,L,H),L.onAfterShadow(n,L,P,O,W,ct,H)}}}else if(st.visible){const lt=A(L,st,T,y);L.onBeforeShadow(n,L,P,O,W,lt,null),n.renderBufferDirect(O,null,W,lt,L,null),L.onAfterShadow(n,L,P,O,W,lt,null)}}const et=L.children;for(let W=0,st=et.length;W<st;W++)M(et[W],P,O,T,y)}function B(L){L.target.removeEventListener("dispose",B);for(const O in c){const T=c[O],y=L.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const VM={[$a]:Ka,[Za]:tl,[Ja]:el,[Ss]:Qa,[Ka]:$a,[tl]:Za,[el]:Ja,[Qa]:Ss};function kM(n,t){function e(){let I=!1;const Mt=new re;let Z=null;const rt=new re(0,0,0,0);return{setMask:function(bt){Z!==bt&&!I&&(n.colorMask(bt,bt,bt,bt),Z=bt)},setLocked:function(bt){I=bt},setClear:function(bt,yt,kt,_e,Re){Re===!0&&(bt*=_e,yt*=_e,kt*=_e),Mt.set(bt,yt,kt,_e),rt.equals(Mt)===!1&&(n.clearColor(bt,yt,kt,_e),rt.copy(Mt))},reset:function(){I=!1,Z=null,rt.set(-1,0,0,0)}}}function i(){let I=!1,Mt=!1,Z=null,rt=null,bt=null;return{setReversed:function(yt){if(Mt!==yt){const kt=t.get("EXT_clip_control");Mt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const _e=bt;bt=null,this.setClear(_e)}Mt=yt},getReversed:function(){return Mt},setTest:function(yt){yt?pt(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(yt){Z!==yt&&!I&&(n.depthMask(yt),Z=yt)},setFunc:function(yt){if(Mt&&(yt=VM[yt]),rt!==yt){switch(yt){case $a:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Qa:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=yt}},setLocked:function(yt){I=yt},setClear:function(yt){bt!==yt&&(Mt&&(yt=1-yt),n.clearDepth(yt),bt=yt)},reset:function(){I=!1,Z=null,rt=null,bt=null,Mt=!1}}}function s(){let I=!1,Mt=null,Z=null,rt=null,bt=null,yt=null,kt=null,_e=null,Re=null;return{setTest:function(ne){I||(ne?pt(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(ne){Mt!==ne&&!I&&(n.stencilMask(ne),Mt=ne)},setFunc:function(ne,an,Un){(Z!==ne||rt!==an||bt!==Un)&&(n.stencilFunc(ne,an,Un),Z=ne,rt=an,bt=Un)},setOp:function(ne,an,Un){(yt!==ne||kt!==an||_e!==Un)&&(n.stencilOp(ne,an,Un),yt=ne,kt=an,_e=Un)},setLocked:function(ne){I=ne},setClear:function(ne){Re!==ne&&(n.clearStencil(ne),Re=ne)},reset:function(){I=!1,Mt=null,Z=null,rt=null,bt=null,yt=null,kt=null,_e=null,Re=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,A=null,M=null,B=null,L=null,P=new qt(0,0,0),O=0,T=!1,y=null,D=null,et=null,W=null,st=null;const lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=Q>=2);let J=null,ct={};const nt=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),Lt=new re().fromArray(nt),tt=new re().fromArray(Tt);function ot(I,Mt,Z,rt){const bt=new Uint8Array(4),yt=n.createTexture();n.bindTexture(I,yt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<Z;kt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(Mt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return yt}const gt={};gt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(Ss),q(!1),Y(Qc),pt(n.CULL_FACE),E(vi);function pt(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function St(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function At(I,Mt){return h[I]!==Mt?(n.bindFramebuffer(I,Mt),h[I]=Mt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Mt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ut(I,Mt){let Z=d,rt=!1;if(I){Z=f.get(Mt),Z===void 0&&(Z=[],f.set(Mt,Z));const bt=I.textures;if(Z.length!==bt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,kt=bt.length;yt<kt;yt++)Z[yt]=n.COLOR_ATTACHMENT0+yt;Z.length=bt.length,rt=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,rt=!0);rt&&n.drawBuffers(Z)}function de(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const w={[Ui]:n.FUNC_ADD,[r_]:n.FUNC_SUBTRACT,[o_]:n.FUNC_REVERSE_SUBTRACT};w[a_]=n.MIN,w[l_]=n.MAX;const C={[c_]:n.ZERO,[u_]:n.ONE,[h_]:n.SRC_COLOR,[Ya]:n.SRC_ALPHA,[g_]:n.SRC_ALPHA_SATURATE,[m_]:n.DST_COLOR,[d_]:n.DST_ALPHA,[f_]:n.ONE_MINUS_SRC_COLOR,[ja]:n.ONE_MINUS_SRC_ALPHA,[__]:n.ONE_MINUS_DST_COLOR,[p_]:n.ONE_MINUS_DST_ALPHA,[v_]:n.CONSTANT_COLOR,[x_]:n.ONE_MINUS_CONSTANT_COLOR,[M_]:n.CONSTANT_ALPHA,[S_]:n.ONE_MINUS_CONSTANT_ALPHA};function E(I,Mt,Z,rt,bt,yt,kt,_e,Re,ne){if(I===vi){v===!0&&(St(n.BLEND),v=!1);return}if(v===!1&&(pt(n.BLEND),v=!0),I!==s_){if(I!==m||ne!==T){if((p!==Ui||M!==Ui)&&(n.blendEquation(n.FUNC_ADD),p=Ui,M=Ui),ne)switch(I){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,A=null,B=null,L=null,P.set(0,0,0),O=0,m=I,T=ne}return}bt=bt||Mt,yt=yt||Z,kt=kt||rt,(Mt!==p||bt!==M)&&(n.blendEquationSeparate(w[Mt],w[bt]),p=Mt,M=bt),(Z!==b||rt!==A||yt!==B||kt!==L)&&(n.blendFuncSeparate(C[Z],C[rt],C[yt],C[kt]),b=Z,A=rt,B=yt,L=kt),(_e.equals(P)===!1||Re!==O)&&(n.blendColor(_e.r,_e.g,_e.b,Re),P.copy(_e),O=Re),m=I,T=!1}function it(I,Mt){I.side===dn?St(n.CULL_FACE):pt(n.CULL_FACE);let Z=I.side===Ve;Mt&&(Z=!Z),q(Z),I.blending===gs&&I.transparent===!1?E(vi):E(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const rt=I.stencilWrite;a.setTest(rt),rt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function Y(I){I!==e_?(pt(n.CULL_FACE),I!==D&&(I===Qc?n.cullFace(n.BACK):I===n_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),D=I}function K(I){I!==et&&($&&n.lineWidth(I),et=I)}function at(I,Mt,Z){I?(pt(n.POLYGON_OFFSET_FILL),(W!==Mt||st!==Z)&&(n.polygonOffset(Mt,Z),W=Mt,st=Z)):St(n.POLYGON_OFFSET_FILL)}function j(I){I?pt(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function x(I){I===void 0&&(I=n.TEXTURE0+lt-1),J!==I&&(n.activeTexture(I),J=I)}function _(I,Mt,Z){Z===void 0&&(J===null?Z=n.TEXTURE0+lt-1:Z=J);let rt=ct[Z];rt===void 0&&(rt={type:void 0,texture:void 0},ct[Z]=rt),(rt.type!==I||rt.texture!==Mt)&&(J!==Z&&(n.activeTexture(Z),J=Z),n.bindTexture(I,Mt||gt[I]),rt.type=I,rt.texture=Mt)}function R(){const I=ct[J];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){Lt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Lt.copy(I))}function _t(I){tt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),tt.copy(I))}function Ft(I,Mt){let Z=c.get(Mt);Z===void 0&&(Z=new WeakMap,c.set(Mt,Z));let rt=Z.get(I);rt===void 0&&(rt=n.getUniformBlockIndex(Mt,I.name),Z.set(I,rt))}function zt(I,Mt){const rt=c.get(Mt).get(I);l.get(Mt)!==rt&&(n.uniformBlockBinding(Mt,rt,I.__bindingPointIndex),l.set(Mt,rt))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,ct={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,A=null,M=null,B=null,L=null,P=new qt(0,0,0),O=0,T=!1,y=null,D=null,et=null,W=null,st=null,Lt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:St,bindFramebuffer:At,drawBuffers:Ut,useProgram:de,setBlending:E,setMaterial:it,setFlipSided:q,setCullFace:Y,setLineWidth:K,setPolygonOffset:at,setScissorTest:j,activeTexture:x,bindTexture:_,unbindTexture:R,compressedTexImage2D:z,compressedTexImage3D:k,texImage2D:xt,texImage3D:Dt,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:It,texStorage3D:ht,texSubImage2D:V,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:ft,scissor:Nt,viewport:_t,reset:ee}}function $u(n,t,e,i){const s=GM(i);switch(e){case If:return n*t;case Nf:return n*t;case Ff:return n*t*2;case Of:return n*t/s.components*s.byteLength;case oc:return n*t/s.components*s.byteLength;case Bf:return n*t*2/s.components*s.byteLength;case ac:return n*t*2/s.components*s.byteLength;case Uf:return n*t*3/s.components*s.byteLength;case mn:return n*t*4/s.components*s.byteLength;case lc:return n*t*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qr:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:case cl:return Math.max(n,16)*Math.max(t,8)/4;case ol:case ll:return Math.max(n,8)*Math.max(t,8)/2;case ul:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case eo:case wl:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zf:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pl:case Dl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function GM(n){switch(n){case ei:case Pf:return{byteLength:1,components:1};case ar:case Df:case hr:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case ki:case ic:case Yn:return{byteLength:4,components:1};case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function WM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,_){return d?new OffscreenCanvas(x,_):_o("canvas")}function v(x,_,R){let z=1;const k=j(x);if((k.width>R||k.height>R)&&(z=R/Math.max(k.width,k.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const V=Math.floor(z*k.width),mt=Math.floor(z*k.height);h===void 0&&(h=g(V,mt));const ut=_?g(V,mt):h;return ut.width=V,ut.height=mt,ut.getContext("2d").drawImage(x,0,0,V,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+V+"x"+mt+")."),ut}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function b(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,_,R,z,k=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=_;if(_===n.RED&&(R===n.FLOAT&&(V=n.R32F),R===n.HALF_FLOAT&&(V=n.R16F),R===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.R8UI),R===n.UNSIGNED_SHORT&&(V=n.R16UI),R===n.UNSIGNED_INT&&(V=n.R32UI),R===n.BYTE&&(V=n.R8I),R===n.SHORT&&(V=n.R16I),R===n.INT&&(V=n.R32I)),_===n.RG&&(R===n.FLOAT&&(V=n.RG32F),R===n.HALF_FLOAT&&(V=n.RG16F),R===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RG8UI),R===n.UNSIGNED_SHORT&&(V=n.RG16UI),R===n.UNSIGNED_INT&&(V=n.RG32UI),R===n.BYTE&&(V=n.RG8I),R===n.SHORT&&(V=n.RG16I),R===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RGB8UI),R===n.UNSIGNED_SHORT&&(V=n.RGB16UI),R===n.UNSIGNED_INT&&(V=n.RGB32UI),R===n.BYTE&&(V=n.RGB8I),R===n.SHORT&&(V=n.RGB16I),R===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),R===n.UNSIGNED_INT&&(V=n.RGBA32UI),R===n.BYTE&&(V=n.RGBA8I),R===n.SHORT&&(V=n.RGBA16I),R===n.INT&&(V=n.RGBA32I)),_===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),_===n.RGBA){const mt=k?No:jt.getTransfer(z);R===n.FLOAT&&(V=n.RGBA32F),R===n.HALF_FLOAT&&(V=n.RGBA16F),R===n.UNSIGNED_BYTE&&(V=mt===ie?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function M(x,_){let R;return x?_===null||_===ki||_===bs?R=n.DEPTH24_STENCIL8:_===Yn?R=n.DEPTH32F_STENCIL8:_===ar&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ki||_===bs?R=n.DEPTH_COMPONENT24:_===Yn?R=n.DEPTH_COMPONENT32F:_===ar&&(R=n.DEPTH_COMPONENT16),R}function B(x,_){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==vn&&x.minFilter!==Rn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function L(x){const _=x.target;_.removeEventListener("dispose",L),O(_),_.isVideoTexture&&u.delete(_)}function P(x){const _=x.target;_.removeEventListener("dispose",P),y(_)}function O(x){const _=i.get(x);if(_.__webglInit===void 0)return;const R=x.source,z=f.get(R);if(z){const k=z[_.__cacheKey];k.usedTimes--,k.usedTimes===0&&T(x),Object.keys(z).length===0&&f.delete(R)}i.remove(x)}function T(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const R=x.source,z=f.get(R);delete z[_.__cacheKey],o.memory.textures--}function y(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let k=0;k<_.__webglFramebuffer[z].length;k++)n.deleteFramebuffer(_.__webglFramebuffer[z][k]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const R=x.textures;for(let z=0,k=R.length;z<k;z++){const V=i.get(R[z]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(R[z])}i.remove(x)}let D=0;function et(){D=0}function W(){const x=D;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),D+=1,x}function st(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function lt(x,_){const R=i.get(x);if(x.isVideoTexture&&K(x),x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(R,x,_);return}}e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+_)}function $(x,_){const R=i.get(x);if(x.version>0&&R.__version!==x.version){tt(R,x,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+_)}function Q(x,_){const R=i.get(x);if(x.version>0&&R.__version!==x.version){tt(R,x,_);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+_)}function H(x,_){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ot(R,x,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+_)}const J={[sl]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},ct={[vn]:n.NEAREST,[P_]:n.NEAREST_MIPMAP_NEAREST,[Sr]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},nt={[U_]:n.NEVER,[H_]:n.ALWAYS,[N_]:n.LESS,[Vf]:n.LEQUAL,[F_]:n.EQUAL,[z_]:n.GEQUAL,[O_]:n.GREATER,[B_]:n.NOTEQUAL};function Tt(x,_){if(_.type===Yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Rn||_.magFilter===ta||_.magFilter===Sr||_.magFilter===Bi||_.minFilter===Rn||_.minFilter===ta||_.minFilter===Sr||_.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,J[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,J[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,J[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ct[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,nt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vn||_.minFilter!==Sr&&_.minFilter!==Bi||_.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const R=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Lt(x,_){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",L));const z=_.source;let k=f.get(z);k===void 0&&(k={},f.set(z,k));const V=st(_);if(V!==x.__cacheKey){k[V]===void 0&&(k[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),k[V].usedTimes++;const mt=k[x.__cacheKey];mt!==void 0&&(k[x.__cacheKey].usedTimes--,mt.usedTimes===0&&T(_)),x.__cacheKey=V,x.__webglTexture=k[V].texture}return R}function tt(x,_,R){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const k=Lt(x,_),V=_.source;e.bindTexture(z,x.__webglTexture,n.TEXTURE0+R);const mt=i.get(V);if(V.version!==mt.__version||k===!0){e.activeTexture(n.TEXTURE0+R);const ut=jt.getPrimaries(jt.workingColorSpace),ft=_.colorSpace===pi?null:jt.getPrimaries(_.colorSpace),It=_.colorSpace===pi||ut===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ht=v(_.image,!1,s.maxTextureSize);ht=at(_,ht);const xt=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type);let Nt=A(_.internalFormat,xt,Dt,_.colorSpace,_.isVideoTexture);Tt(z,_);let _t;const Ft=_.mipmaps,zt=_.isVideoTexture!==!0,ee=mt.__version===void 0||k===!0,I=V.dataReady,Mt=B(_,ht);if(_.isDepthTexture)Nt=M(_.format===Ts,_.type),ee&&(zt?e.texStorage2D(n.TEXTURE_2D,1,Nt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Nt,ht.width,ht.height,0,xt,Dt,null));else if(_.isDataTexture)if(Ft.length>0){zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Mt,Nt,Ft[0].width,Ft[0].height);for(let Z=0,rt=Ft.length;Z<rt;Z++)_t=Ft[Z],zt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,_t.width,_t.height,xt,Dt,_t.data):e.texImage2D(n.TEXTURE_2D,Z,Nt,_t.width,_t.height,0,xt,Dt,_t.data);_.generateMipmaps=!1}else zt?(ee&&e.texStorage2D(n.TEXTURE_2D,Mt,Nt,ht.width,ht.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,xt,Dt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,ht.width,ht.height,0,xt,Dt,ht.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Nt,Ft[0].width,Ft[0].height,ht.depth);for(let Z=0,rt=Ft.length;Z<rt;Z++)if(_t=Ft[Z],_.format!==mn)if(xt!==null)if(zt){if(I)if(_.layerUpdates.size>0){const bt=$u(_t.width,_t.height,_.format,_.type);for(const yt of _.layerUpdates){const kt=_t.data.subarray(yt*bt/_t.data.BYTES_PER_ELEMENT,(yt+1)*bt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,yt,_t.width,_t.height,1,xt,kt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,ht.depth,xt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Nt,_t.width,_t.height,ht.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,ht.depth,xt,Dt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Nt,_t.width,_t.height,ht.depth,0,xt,Dt,_t.data)}else{zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Mt,Nt,Ft[0].width,Ft[0].height);for(let Z=0,rt=Ft.length;Z<rt;Z++)_t=Ft[Z],_.format!==mn?xt!==null?zt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,_t.width,_t.height,xt,Dt,_t.data):e.texImage2D(n.TEXTURE_2D,Z,Nt,_t.width,_t.height,0,xt,Dt,_t.data)}else if(_.isDataArrayTexture)if(zt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Nt,ht.width,ht.height,ht.depth),I)if(_.layerUpdates.size>0){const Z=$u(ht.width,ht.height,_.format,_.type);for(const rt of _.layerUpdates){const bt=ht.data.subarray(rt*Z/ht.data.BYTES_PER_ELEMENT,(rt+1)*Z/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ht.width,ht.height,1,xt,Dt,bt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,xt,Dt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,ht.width,ht.height,ht.depth,0,xt,Dt,ht.data);else if(_.isData3DTexture)zt?(ee&&e.texStorage3D(n.TEXTURE_3D,Mt,Nt,ht.width,ht.height,ht.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,xt,Dt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,ht.width,ht.height,ht.depth,0,xt,Dt,ht.data);else if(_.isFramebufferTexture){if(ee)if(zt)e.texStorage2D(n.TEXTURE_2D,Mt,Nt,ht.width,ht.height);else{let Z=ht.width,rt=ht.height;for(let bt=0;bt<Mt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Nt,Z,rt,0,xt,Dt,null),Z>>=1,rt>>=1}}else if(Ft.length>0){if(zt&&ee){const Z=j(Ft[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Nt,Z.width,Z.height)}for(let Z=0,rt=Ft.length;Z<rt;Z++)_t=Ft[Z],zt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,xt,Dt,_t):e.texImage2D(n.TEXTURE_2D,Z,Nt,xt,Dt,_t);_.generateMipmaps=!1}else if(zt){if(ee){const Z=j(ht);e.texStorage2D(n.TEXTURE_2D,Mt,Nt,Z.width,Z.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Dt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Nt,xt,Dt,ht);m(_)&&p(z),mt.__version=V.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ot(x,_,R){if(_.image.length!==6)return;const z=Lt(x,_),k=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+R);const V=i.get(k);if(k.version!==V.__version||z===!0){e.activeTexture(n.TEXTURE0+R);const mt=jt.getPrimaries(jt.workingColorSpace),ut=_.colorSpace===pi?null:jt.getPrimaries(_.colorSpace),ft=_.colorSpace===pi||mt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const It=_.isCompressedTexture||_.image[0].isCompressedTexture,ht=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let rt=0;rt<6;rt++)!It&&!ht?xt[rt]=v(_.image[rt],!0,s.maxCubemapSize):xt[rt]=ht?_.image[rt].image:_.image[rt],xt[rt]=at(_,xt[rt]);const Dt=xt[0],Nt=r.convert(_.format,_.colorSpace),_t=r.convert(_.type),Ft=A(_.internalFormat,Nt,_t,_.colorSpace),zt=_.isVideoTexture!==!0,ee=V.__version===void 0||z===!0,I=k.dataReady;let Mt=B(_,Dt);Tt(n.TEXTURE_CUBE_MAP,_);let Z;if(It){zt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Ft,Dt.width,Dt.height);for(let rt=0;rt<6;rt++){Z=xt[rt].mipmaps;for(let bt=0;bt<Z.length;bt++){const yt=Z[bt];_.format!==mn?Nt!==null?zt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,yt.width,yt.height,Nt,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Ft,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,yt.width,yt.height,Nt,_t,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Ft,yt.width,yt.height,0,Nt,_t,yt.data)}}}else{if(Z=_.mipmaps,zt&&ee){Z.length>0&&Mt++;const rt=j(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Ft,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ht){zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt[rt].width,xt[rt].height,Nt,_t,xt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ft,xt[rt].width,xt[rt].height,0,Nt,_t,xt[rt].data);for(let bt=0;bt<Z.length;bt++){const kt=Z[bt].image[rt].image;zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,kt.width,kt.height,Nt,_t,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Ft,kt.width,kt.height,0,Nt,_t,kt.data)}}else{zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Nt,_t,xt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ft,Nt,_t,xt[rt]);for(let bt=0;bt<Z.length;bt++){const yt=Z[bt];zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Nt,_t,yt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Ft,Nt,_t,yt.image[rt])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),V.__version=k.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function gt(x,_,R,z,k,V){const mt=r.convert(R.format,R.colorSpace),ut=r.convert(R.type),ft=A(R.internalFormat,mt,ut,R.colorSpace),It=i.get(_),ht=i.get(R);if(ht.__renderTarget=_,!It.__hasExternalTextures){const xt=Math.max(1,_.width>>V),Dt=Math.max(1,_.height>>V);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,V,ft,xt,Dt,_.depth,0,mt,ut,null):e.texImage2D(k,V,ft,xt,Dt,0,mt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,k,ht.__webglTexture,0,q(_)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,k,ht.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(x,_,R){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const z=_.depthTexture,k=z&&z.isDepthTexture?z.type:null,V=M(_.stencilBuffer,k),mt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=q(_);Y(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,V,_.width,_.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,x)}else{const z=_.textures;for(let k=0;k<z.length;k++){const V=z[k],mt=r.convert(V.format,V.colorSpace),ut=r.convert(V.type),ft=A(V.internalFormat,mt,ut,V.colorSpace),It=q(_);R&&Y(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,ft,_.width,_.height):Y(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,ft,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ft,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),lt(_.depthTexture,0);const k=z.__webglTexture,V=q(_);if(_.depthTexture.format===vs)Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(_.depthTexture.format===Ts)Y(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function At(x){const _=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const k=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",k)};z.addEventListener("dispose",k),_.__depthDisposeCallback=k}_.__boundDepthTexture=z}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");St(_.__webglFramebuffer,x)}else if(R){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),pt(_.__webglDepthbuffer[z],x,!1);else{const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),pt(_.__webglDepthbuffer,x,!1);else{const z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(x,_,R){const z=i.get(x);_!==void 0&&gt(z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&At(x)}function de(x){const _=x.texture,R=i.get(x),z=i.get(_);x.addEventListener("dispose",P);const k=x.textures,V=x.isWebGLCubeRenderTarget===!0,mt=k.length>1;if(mt||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++),V){R.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer[ut]=[];for(let ft=0;ft<_.mipmaps.length;ft++)R.__webglFramebuffer[ut][ft]=n.createFramebuffer()}else R.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer=[];for(let ut=0;ut<_.mipmaps.length;ut++)R.__webglFramebuffer[ut]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(mt)for(let ut=0,ft=k.length;ut<ft;ut++){const It=i.get(k[ut]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&Y(x)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ut=0;ut<k.length;ut++){const ft=k[ut];R.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[ut]);const It=r.convert(ft.format,ft.colorSpace),ht=r.convert(ft.type),xt=A(ft.internalFormat,It,ht,ft.colorSpace,x.isXRRenderTarget===!0),Dt=q(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,xt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,R.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(R.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Tt(n.TEXTURE_CUBE_MAP,_);for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)gt(R.__webglFramebuffer[ut][ft],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ft);else gt(R.__webglFramebuffer[ut],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(_)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ut=0,ft=k.length;ut<ft;ut++){const It=k[ut],ht=i.get(It);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),Tt(n.TEXTURE_2D,It),gt(R.__webglFramebuffer,x,It,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(It)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ut=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,z.__webglTexture),Tt(ut,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)gt(R.__webglFramebuffer[ft],x,_,n.COLOR_ATTACHMENT0,ut,ft);else gt(R.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,ut,0);m(_)&&p(ut),e.unbindTexture()}x.depthBuffer&&At(x)}function w(x){const _=x.textures;for(let R=0,z=_.length;R<z;R++){const k=_[R];if(m(k)){const V=b(x),mt=i.get(k).__webglTexture;e.bindTexture(V,mt),p(V),e.unbindTexture()}}}const C=[],E=[];function it(x){if(x.samples>0){if(Y(x)===!1){const _=x.textures,R=x.width,z=x.height;let k=n.COLOR_BUFFER_BIT;const V=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(x),ut=_.length>1;if(ut)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);const It=i.get(_[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,R,z,0,0,R,z,k,n.NEAREST),l===!0&&(C.length=0,E.length=0,C.push(n.COLOR_ATTACHMENT0+ft),x.depthBuffer&&x.resolveDepthBuffer===!1&&(C.push(V),E.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);const It=i.get(_[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function q(x){return Math.min(s.maxSamples,x.samples)}function Y(x){const _=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function K(x){const _=o.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function at(x,_){const R=x.colorSpace,z=x.format,k=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||R!==ws&&R!==pi&&(jt.getTransfer(R)===ie?(z!==mn||k!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),_}function j(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=et,this.setTexture2D=lt,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=de,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Y}function XM(n,t){function e(i,s=pi){let r;const o=jt.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return n.BYTE;if(i===Df)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===ic)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===hr)return n.HALF_FLOAT;if(i===If)return n.ALPHA;if(i===Uf)return n.RGB;if(i===mn)return n.RGBA;if(i===Nf)return n.LUMINANCE;if(i===Ff)return n.LUMINANCE_ALPHA;if(i===vs)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===Of)return n.RED;if(i===oc)return n.RED_INTEGER;if(i===Bf)return n.RG;if(i===ac)return n.RG_INTEGER;if(i===lc)return n.RGBA_INTEGER;if(i===Zr||i===Jr||i===Qr||i===to)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ol||i===al||i===ll||i===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===hl||i===fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ul||i===hl)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===pl||i===ml||i===_l||i===gl||i===vl||i===xl||i===Ml||i===Sl||i===yl||i===El||i===bl||i===Tl||i===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Al)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eo||i===wl||i===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===eo)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zf||i===Cl||i===Pl||i===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class qM extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class nn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new nn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$M=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yi({vertexShader:jM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends qi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new KM,m=e.getContextAttributes();let p=null,b=null;const A=[],M=[],B=new Ht;let L=null;const P=new Je;P.viewport=new re;const O=new Je;O.viewport=new re;const T=[P,O],y=new qM;let D=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ot=A[tt];return ot===void 0&&(ot=new Ra,A[tt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(tt){let ot=A[tt];return ot===void 0&&(ot=new Ra,A[tt]=ot),ot.getGripSpace()},this.getHand=function(tt){let ot=A[tt];return ot===void 0&&(ot=new Ra,A[tt]=ot),ot.getHandSpace()};function W(tt){const ot=M.indexOf(tt.inputSource);if(ot===-1)return;const gt=A[ot];gt!==void 0&&(gt.update(tt.inputSource,tt.frame,c||o),gt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function st(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",lt);for(let tt=0;tt<A.length;tt++){const ot=M[tt];ot!==null&&(M[tt]=null,A[tt].disconnect(ot))}D=null,et=null,v.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,b=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",st),s.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Gi(d.framebufferWidth,d.framebufferHeight,{format:mn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,gt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ts:vs,gt=m.stencil?bs:ki);const St={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Gi(f.textureWidth,f.textureHeight,{format:mn,type:ei,depthTexture:new Qf(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function lt(tt){for(let ot=0;ot<tt.removed.length;ot++){const gt=tt.removed[ot],pt=M.indexOf(gt);pt>=0&&(M[pt]=null,A[pt].disconnect(gt))}for(let ot=0;ot<tt.added.length;ot++){const gt=tt.added[ot];let pt=M.indexOf(gt);if(pt===-1){for(let At=0;At<A.length;At++)if(At>=M.length){M.push(gt),pt=At;break}else if(M[At]===null){M[At]=gt,pt=At;break}if(pt===-1)break}const St=A[pt];St&&St.connect(gt)}}const $=new F,Q=new F;function H(tt,ot,gt){$.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);const pt=$.distanceTo(Q),St=ot.projectionMatrix.elements,At=gt.projectionMatrix.elements,Ut=St[14]/(St[10]-1),de=St[14]/(St[10]+1),w=(St[9]+1)/St[5],C=(St[9]-1)/St[5],E=(St[8]-1)/St[0],it=(At[8]+1)/At[0],q=Ut*E,Y=Ut*it,K=pt/(-E+it),at=K*-E;if(ot.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(at),tt.translateZ(K),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),St[10]===-1)tt.projectionMatrix.copy(ot.projectionMatrix),tt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const j=Ut+K,x=de+K,_=q-at,R=Y+(pt-at),z=w*de/x*j,k=C*de/x*j;tt.projectionMatrix.makePerspective(_,R,z,k,j,x),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function J(tt,ot){ot===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ot.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ot=tt.near,gt=tt.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),y.near=O.near=P.near=ot,y.far=O.far=P.far=gt,(D!==y.near||et!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,et=y.far),P.layers.mask=tt.layers.mask|2,O.layers.mask=tt.layers.mask|4,y.layers.mask=P.layers.mask|O.layers.mask;const pt=tt.parent,St=y.cameras;J(y,pt);for(let At=0;At<St.length;At++)J(St[At],pt);St.length===2?H(y,P,O):y.projectionMatrix.copy(P.projectionMatrix),ct(tt,y,pt)};function ct(tt,ot,gt){gt===null?tt.matrix.copy(ot.matrixWorld):(tt.matrix.copy(gt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ot.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ot.projectionMatrix),tt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ll*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let nt=null;function Tt(tt,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){const gt=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let pt=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,pt=!0);for(let At=0;At<gt.length;At++){const Ut=gt[At];let de=null;if(d!==null)de=d.getViewport(Ut);else{const C=h.getViewSubImage(f,Ut);de=C.viewport,At===0&&(t.setRenderTargetTextures(b,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(b))}let w=T[At];w===void 0&&(w=new Je,w.layers.enable(At),w.viewport=new re,T[At]=w),w.matrix.fromArray(Ut.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ut.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(de.x,de.y,de.width,de.height),At===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pt===!0&&y.cameras.push(w)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const At=h.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&v.init(t,At,s.renderState)}}for(let gt=0;gt<A.length;gt++){const pt=M[gt],St=A[gt];pt!==null&&St!==void 0&&St.update(pt,ot,c||o)}nt&&nt(tt,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Lt=new Zf;Lt.setAnimationLoop(Tt),this.setAnimationLoop=function(tt){nt=tt},this.dispose=function(){}}}const Di=new In,JM=new le;function QM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),A=b.envMap,M=b.envMapRotation;A&&(m.envMap.value=A,Di.copy(M),Di.x*=-1,Di.y*=-1,Di.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(Di)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const M=A.program;i.uniformBlockBinding(b,M)}function c(b,A){let M=s[b.id];M===void 0&&(g(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",m));const B=A.program;i.updateUBOMapping(b,B);const L=t.render.frame;r[b.id]!==L&&(f(b),r[b.id]=L)}function u(b){const A=h();b.__bindingPointIndex=A;const M=n.createBuffer(),B=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,B,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const A=s[b.id],M=b.uniforms,B=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let L=0,P=M.length;L<P;L++){const O=Array.isArray(M[L])?M[L]:[M[L]];for(let T=0,y=O.length;T<y;T++){const D=O[T];if(d(D,L,T,B)===!0){const et=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let st=0;for(let lt=0;lt<W.length;lt++){const $=W[lt],Q=v($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,et+st,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,st),st+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,et,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,A,M,B){const L=b.value,P=A+"_"+M;if(B[P]===void 0)return typeof L=="number"||typeof L=="boolean"?B[P]=L:B[P]=L.clone(),!0;{const O=B[P];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return B[P]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function g(b){const A=b.uniforms;let M=0;const B=16;for(let P=0,O=A.length;P<O;P++){const T=Array.isArray(A[P])?A[P]:[A[P]];for(let y=0,D=T.length;y<D;y++){const et=T[y],W=Array.isArray(et.value)?et.value:[et.value];for(let st=0,lt=W.length;st<lt;st++){const $=W[st],Q=v($),H=M%B,J=H%Q.boundary,ct=H+J;M+=J,ct!==0&&B-ct<Q.storage&&(M+=B-ct),et.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=M,M+=Q.storage}}}const L=M%B;return L>0&&(M+=B-L),b.__size=M,b.__cache={},this}function v(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){const A=b.target;A.removeEventListener("dispose",m);const M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class eS{constructor(t={}){const{canvas:e=G_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=xi,this.toneMappingExposure=1;const M=this;let B=!1,L=0,P=0,O=null,T=-1,y=null;const D=new re,et=new re;let W=null;const st=new qt(0);let lt=0,$=e.width,Q=e.height,H=1,J=null,ct=null;const nt=new re(0,0,$,Q),Tt=new re(0,0,$,Q);let Lt=!1;const tt=new uc;let ot=!1,gt=!1;const pt=new le,St=new le,At=new F,Ut=new re,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function C(){return O===null?H:1}let E=i;function it(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),E===null){const U="webgl2";if(E=it(U,S),E===null)throw it(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let q,Y,K,at,j,x,_,R,z,k,V,mt,ut,ft,It,ht,xt,Dt,Nt,_t,Ft,zt,ee,I;function Mt(){q=new ox(E),q.init(),zt=new XM(E,q),Y=new tx(E,q,t,zt),K=new kM(E,q),Y.reverseDepthBuffer&&f&&K.buffers.depth.setReversed(!0),at=new cx(E),j=new wM,x=new WM(E,q,K,j,Y,zt,at),_=new nx(M),R=new rx(M),z=new _g(E),ee=new J0(E,z),k=new ax(E,z,at,ee),V=new hx(E,k,z,at),Nt=new ux(E,Y,x),ht=new ex(j),mt=new AM(M,_,R,q,Y,ee,ht),ut=new QM(M,j),ft=new CM,It=new NM(q),Dt=new Z0(M,_,R,K,V,d,l),xt=new HM(M,V,Y),I=new tS(E,at,Y,K),_t=new Q0(E,q,at),Ft=new lx(E,q,at),at.programs=mt.programs,M.capabilities=Y,M.extensions=q,M.properties=j,M.renderLists=ft,M.shadowMap=xt,M.state=K,M.info=at}Mt();const Z=new ZM(M,E);this.xr=Z,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const S=q.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=q.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize($,Q,!1))},this.getSize=function(S){return S.set($,Q)},this.setSize=function(S,U,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,Q=U,e.width=Math.floor(S*H),e.height=Math.floor(U*H),G===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set($*H,Q*H).floor()},this.setDrawingBufferSize=function(S,U,G){$=S,Q=U,H=G,e.width=Math.floor(S*G),e.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(nt)},this.setViewport=function(S,U,G,X){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,U,G,X),K.viewport(D.copy(nt).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Tt)},this.setScissor=function(S,U,G,X){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,U,G,X),K.scissor(et.copy(Tt).multiplyScalar(H).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(S){K.setScissorTest(Lt=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){ct=S},this.getClearColor=function(S){return S.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(S=!0,U=!0,G=!0){let X=0;if(S){let N=!1;if(O!==null){const dt=O.texture.format;N=dt===lc||dt===ac||dt===oc}if(N){const dt=O.texture.type,Et=dt===ei||dt===ki||dt===ar||dt===bs||dt===sc||dt===rc,wt=Dt.getClearColor(),Rt=Dt.getClearAlpha(),Bt=wt.r,Gt=wt.g,Ct=wt.b;Et?(g[0]=Bt,g[1]=Gt,g[2]=Ct,g[3]=Rt,E.clearBufferuiv(E.COLOR,0,g)):(v[0]=Bt,v[1]=Gt,v[2]=Ct,v[3]=Rt,E.clearBufferiv(E.COLOR,0,v))}else X|=E.COLOR_BUFFER_BIT}U&&(X|=E.DEPTH_BUFFER_BIT),G&&(X|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),ft.dispose(),It.dispose(),j.dispose(),_.dispose(),R.dispose(),V.dispose(),ee.dispose(),I.dispose(),mt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",pc),Z.removeEventListener("sessionend",mc),Ei.stop()};function rt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const S=at.autoReset,U=xt.enabled,G=xt.autoUpdate,X=xt.needsUpdate,N=xt.type;Mt(),at.autoReset=S,xt.enabled=U,xt.autoUpdate=G,xt.needsUpdate=X,xt.type=N}function yt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function kt(S){const U=S.target;U.removeEventListener("dispose",kt),_e(U)}function _e(S){Re(S),j.remove(S)}function Re(S){const U=j.get(S).programs;U!==void 0&&(U.forEach(function(G){mt.releaseProgram(G)}),S.isShaderMaterial&&mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,G,X,N,dt){U===null&&(U=de);const Et=N.isMesh&&N.matrixWorld.determinant()<0,wt=ud(S,U,G,X,N);K.setMaterial(X,Et);let Rt=G.index,Bt=1;if(X.wireframe===!0){if(Rt=k.getWireframeAttribute(G),Rt===void 0)return;Bt=2}const Gt=G.drawRange,Ct=G.attributes.position;let $t=Gt.start*Bt,ce=(Gt.start+Gt.count)*Bt;dt!==null&&($t=Math.max($t,dt.start*Bt),ce=Math.min(ce,(dt.start+dt.count)*Bt)),Rt!==null?($t=Math.max($t,0),ce=Math.min(ce,Rt.count)):Ct!=null&&($t=Math.max($t,0),ce=Math.min(ce,Ct.count));const he=ce-$t;if(he<0||he===1/0)return;ee.setup(N,X,wt,G,Rt);let ke,Kt=_t;if(Rt!==null&&(ke=z.get(Rt),Kt=Ft,Kt.setIndex(ke)),N.isMesh)X.wireframe===!0?(K.setLineWidth(X.wireframeLinewidth*C()),Kt.setMode(E.LINES)):Kt.setMode(E.TRIANGLES);else if(N.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),K.setLineWidth(Pt*C()),N.isLineSegments?Kt.setMode(E.LINES):N.isLineLoop?Kt.setMode(E.LINE_LOOP):Kt.setMode(E.LINE_STRIP)}else N.isPoints?Kt.setMode(E.POINTS):N.isSprite&&Kt.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pt=N._multiDrawStarts,Nn=N._multiDrawCounts,Zt=N._multiDrawCount,ln=Rt?z.get(Rt).bytesPerElement:1,Yi=j.get(X).currentProgram.getUniforms();for(let Ye=0;Ye<Zt;Ye++)Yi.setValue(E,"_gl_DrawID",Ye),Kt.render(Pt[Ye]/ln,Nn[Ye])}else if(N.isInstancedMesh)Kt.renderInstances($t,he,N.count);else if(G.isInstancedBufferGeometry){const Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Nn=Math.min(G.instanceCount,Pt);Kt.renderInstances($t,he,Nn)}else Kt.render($t,he)};function ne(S,U,G){S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=Ve,S.needsUpdate=!0,pr(S,U,G),S.side=Si,S.needsUpdate=!0,pr(S,U,G),S.side=dn):pr(S,U,G)}this.compile=function(S,U,G=null){G===null&&(G=S),p=It.get(G),p.init(U),A.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==G&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const X=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const dt=N.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const wt=dt[Et];ne(wt,G,N),X.add(wt)}else ne(dt,G,N),X.add(dt)}),A.pop(),p=null,X},this.compileAsync=function(S,U,G=null){const X=this.compile(S,U,G);return new Promise(N=>{function dt(){if(X.forEach(function(Et){j.get(Et).currentProgram.isReady()&&X.delete(Et)}),X.size===0){N(S);return}setTimeout(dt,10)}q.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let an=null;function Un(S){an&&an(S)}function pc(){Ei.stop()}function mc(){Ei.start()}const Ei=new Zf;Ei.setAnimationLoop(Un),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(S){an=S,Z.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},Z.addEventListener("sessionstart",pc),Z.addEventListener("sessionend",mc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,U,O),p=It.get(S,A.length),p.init(U),A.push(p),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(St),gt=this.localClippingEnabled,ot=ht.init(this.clippingPlanes,gt),m=ft.get(S,b.length),m.init(),b.push(m),Z.enabled===!0&&Z.isPresenting===!0){const dt=M.xr.getDepthSensingMesh();dt!==null&&Vo(dt,U,-1/0,M.sortObjects)}Vo(S,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(J,ct),w=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,w&&Dt.addToRenderList(m,S),this.info.render.frame++,ot===!0&&ht.beginShadows();const G=p.state.shadowsArray;xt.render(G,S,U),ot===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const dt=U.cameras;if(N.length>0)for(let Et=0,wt=dt.length;Et<wt;Et++){const Rt=dt[Et];gc(X,N,S,Rt)}w&&Dt.render(S);for(let Et=0,wt=dt.length;Et<wt;Et++){const Rt=dt[Et];_c(m,S,Rt,Rt.viewport)}}else N.length>0&&gc(X,N,S,U),w&&Dt.render(S),_c(m,S,U);O!==null&&(x.updateMultisampleRenderTarget(O),x.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(M,S,U),ee.resetDefaultState(),T=-1,y=null,A.pop(),A.length>0?(p=A[A.length-1],ot===!0&&ht.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Vo(S,U,G,X){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||tt.intersectsSprite(S)){X&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(St);const Et=V.update(S),wt=S.material;wt.visible&&m.push(S,Et,wt,G,Ut.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||tt.intersectsObject(S))){const Et=V.update(S),wt=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ut.copy(Et.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(St)),Array.isArray(wt)){const Rt=Et.groups;for(let Bt=0,Gt=Rt.length;Bt<Gt;Bt++){const Ct=Rt[Bt],$t=wt[Ct.materialIndex];$t&&$t.visible&&m.push(S,Et,$t,G,Ut.z,Ct)}}else wt.visible&&m.push(S,Et,wt,G,Ut.z,null)}}const dt=S.children;for(let Et=0,wt=dt.length;Et<wt;Et++)Vo(dt[Et],U,G,X)}function _c(S,U,G,X){const N=S.opaque,dt=S.transmissive,Et=S.transparent;p.setupLightsView(G),ot===!0&&ht.setGlobalState(M.clippingPlanes,G),X&&K.viewport(D.copy(X)),N.length>0&&dr(N,U,G),dt.length>0&&dr(dt,U,G),Et.length>0&&dr(Et,U,G),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function gc(S,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Gi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?hr:ei,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const dt=p.state.transmissionRenderTarget[X.id],Et=X.viewport||D;dt.setSize(Et.z,Et.w);const wt=M.getRenderTarget();M.setRenderTarget(dt),M.getClearColor(st),lt=M.getClearAlpha(),lt<1&&M.setClearColor(16777215,.5),M.clear(),w&&Dt.render(G);const Rt=M.toneMapping;M.toneMapping=xi;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ot===!0&&ht.setGlobalState(M.clippingPlanes,X),dr(S,G,X),x.updateMultisampleRenderTarget(dt),x.updateRenderTargetMipmap(dt),q.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ct=0,$t=U.length;Ct<$t;Ct++){const ce=U[Ct],he=ce.object,ke=ce.geometry,Kt=ce.material,Pt=ce.group;if(Kt.side===dn&&he.layers.test(X.layers)){const Nn=Kt.side;Kt.side=Ve,Kt.needsUpdate=!0,vc(he,G,X,ke,Kt,Pt),Kt.side=Nn,Kt.needsUpdate=!0,Gt=!0}}Gt===!0&&(x.updateMultisampleRenderTarget(dt),x.updateRenderTargetMipmap(dt))}M.setRenderTarget(wt),M.setClearColor(st,lt),Bt!==void 0&&(X.viewport=Bt),M.toneMapping=Rt}function dr(S,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let N=0,dt=S.length;N<dt;N++){const Et=S[N],wt=Et.object,Rt=Et.geometry,Bt=X===null?Et.material:X,Gt=Et.group;wt.layers.test(G.layers)&&vc(wt,U,G,Rt,Bt,Gt)}}function vc(S,U,G,X,N,dt){S.onBeforeRender(M,U,G,X,N,dt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,U,G,X,S,dt),N.transparent===!0&&N.side===dn&&N.forceSinglePass===!1?(N.side=Ve,N.needsUpdate=!0,M.renderBufferDirect(G,U,X,N,S,dt),N.side=Si,N.needsUpdate=!0,M.renderBufferDirect(G,U,X,N,S,dt),N.side=dn):M.renderBufferDirect(G,U,X,N,S,dt),S.onAfterRender(M,U,G,X,N,dt)}function pr(S,U,G){U.isScene!==!0&&(U=de);const X=j.get(S),N=p.state.lights,dt=p.state.shadowsArray,Et=N.state.version,wt=mt.getParameters(S,N.state,dt,U,G),Rt=mt.getProgramCacheKey(wt);let Bt=X.programs;X.environment=S.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(S.isMeshStandardMaterial?R:_).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",kt),Bt=new Map,X.programs=Bt);let Gt=Bt.get(Rt);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===Et)return Mc(S,wt),Gt}else wt.uniforms=mt.getUniforms(S),S.onBeforeCompile(wt,M),Gt=mt.acquireProgram(wt,Rt),Bt.set(Rt,Gt),X.uniforms=wt.uniforms;const Ct=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=ht.uniform),Mc(S,wt),X.needsLights=fd(S),X.lightsStateVersion=Et,X.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function xc(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=io.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Mc(S,U){const G=j.get(S);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function ud(S,U,G,X,N){U.isScene!==!0&&(U=de),x.resetTextureUnits();const dt=U.fog,Et=X.isMeshStandardMaterial?U.environment:null,wt=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ws,Rt=(X.isMeshStandardMaterial?R:_).get(X.envMap||Et),Bt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ct=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let he=xi;X.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(he=M.toneMapping);const ke=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=ke!==void 0?ke.length:0,Pt=j.get(X),Nn=p.state.lights;if(ot===!0&&(gt===!0||S!==y)){const tn=S===y&&X.id===T;ht.setState(X,S,tn)}let Zt=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Nn.state.version||Pt.outputColorSpace!==wt||N.isBatchedMesh&&Pt.batching===!1||!N.isBatchedMesh&&Pt.batching===!0||N.isBatchedMesh&&Pt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pt.instancing===!1||!N.isInstancedMesh&&Pt.instancing===!0||N.isSkinnedMesh&&Pt.skinning===!1||!N.isSkinnedMesh&&Pt.skinning===!0||N.isInstancedMesh&&Pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pt.instancingMorph===!1&&N.morphTexture!==null||Pt.envMap!==Rt||X.fog===!0&&Pt.fog!==dt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ht.numPlanes||Pt.numIntersection!==ht.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==Gt||Pt.morphTargets!==Ct||Pt.morphNormals!==$t||Pt.morphColors!==ce||Pt.toneMapping!==he||Pt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,Pt.__version=X.version);let ln=Pt.currentProgram;Zt===!0&&(ln=pr(X,U,N));let Yi=!1,Ye=!1,Ls=!1;const fe=ln.getUniforms(),Sn=Pt.uniforms;if(K.useProgram(ln.program)&&(Yi=!0,Ye=!0,Ls=!0),X.id!==T&&(T=X.id,Ye=!0),Yi||y!==S){K.buffers.depth.getReversed()?(pt.copy(S.projectionMatrix),X_(pt),q_(pt),fe.setValue(E,"projectionMatrix",pt)):fe.setValue(E,"projectionMatrix",S.projectionMatrix),fe.setValue(E,"viewMatrix",S.matrixWorldInverse);const si=fe.map.cameraPosition;si!==void 0&&si.setValue(E,At.setFromMatrixPosition(S.matrixWorld)),Y.logarithmicDepthBuffer&&fe.setValue(E,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&fe.setValue(E,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ye=!0,Ls=!0)}if(N.isSkinnedMesh){fe.setOptional(E,N,"bindMatrix"),fe.setOptional(E,N,"bindMatrixInverse");const tn=N.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),fe.setValue(E,"boneTexture",tn.boneTexture,x))}N.isBatchedMesh&&(fe.setOptional(E,N,"batchingTexture"),fe.setValue(E,"batchingTexture",N._matricesTexture,x),fe.setOptional(E,N,"batchingIdTexture"),fe.setValue(E,"batchingIdTexture",N._indirectTexture,x),fe.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&fe.setValue(E,"batchingColorTexture",N._colorsTexture,x));const Is=G.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Nt.update(N,G,ln),(Ye||Pt.receiveShadow!==N.receiveShadow)&&(Pt.receiveShadow=N.receiveShadow,fe.setValue(E,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Sn.envMap.value=Rt,Sn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),Ye&&(fe.setValue(E,"toneMappingExposure",M.toneMappingExposure),Pt.needsLights&&hd(Sn,Ls),dt&&X.fog===!0&&ut.refreshFogUniforms(Sn,dt),ut.refreshMaterialUniforms(Sn,X,H,Q,p.state.transmissionRenderTarget[S.id]),io.upload(E,xc(Pt),Sn,x)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(io.upload(E,xc(Pt),Sn,x),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&fe.setValue(E,"center",N.center),fe.setValue(E,"modelViewMatrix",N.modelViewMatrix),fe.setValue(E,"normalMatrix",N.normalMatrix),fe.setValue(E,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const tn=X.uniformsGroups;for(let si=0,ri=tn.length;si<ri;si++){const Sc=tn[si];I.update(Sc,ln),I.bind(Sc,ln)}}return ln}function hd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function fd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,U,G){j.get(S.texture).__webglTexture=U,j.get(S.depthTexture).__webglTexture=G;const X=j.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const G=j.get(S);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,G=0){O=S,L=U,P=G;let X=!0,N=null,dt=!1,Et=!1;if(S){const Rt=j.get(S);if(Rt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(E.FRAMEBUFFER,null),X=!1;else if(Rt.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(Rt.__hasExternalTextures)x.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ct=S.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&j.has(Ct)&&(S.width!==Ct.image.width||S.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Et=!0);const Gt=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?N=Gt[U][G]:N=Gt[U],dt=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?N=j.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[G]:N=Gt,D.copy(S.viewport),et.copy(S.scissor),W=S.scissorTest}else D.copy(nt).multiplyScalar(H).floor(),et.copy(Tt).multiplyScalar(H).floor(),W=Lt;if(K.bindFramebuffer(E.FRAMEBUFFER,N)&&X&&K.drawBuffers(S,N),K.viewport(D),K.scissor(et),K.setScissorTest(W),dt){const Rt=j.get(S.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,G)}else if(Et){const Rt=j.get(S.texture),Bt=U||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Rt.__webglTexture,G||0,Bt)}T=-1},this.readRenderTargetPixels=function(S,U,G,X,N,dt,Et){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){K.bindFramebuffer(E.FRAMEBUFFER,wt);try{const Rt=S.texture,Bt=Rt.format,Gt=Rt.type;if(!Y.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-X&&G>=0&&G<=S.height-N&&E.readPixels(U,G,X,N,zt.convert(Bt),zt.convert(Gt),dt)}finally{const Rt=O!==null?j.get(O).__webglFramebuffer:null;K.bindFramebuffer(E.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,U,G,X,N,dt,Et){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){const Rt=S.texture,Bt=Rt.format,Gt=Rt.type;if(!Y.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-X&&G>=0&&G<=S.height-N){K.bindFramebuffer(E.FRAMEBUFFER,wt);const Ct=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ct),E.bufferData(E.PIXEL_PACK_BUFFER,dt.byteLength,E.STREAM_READ),E.readPixels(U,G,X,N,zt.convert(Bt),zt.convert(Gt),0);const $t=O!==null?j.get(O).__webglFramebuffer:null;K.bindFramebuffer(E.FRAMEBUFFER,$t);const ce=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await W_(E,ce,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ct),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,dt),E.deleteBuffer(Ct),E.deleteSync(ce),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,G=0){S.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const X=Math.pow(2,-G),N=Math.floor(S.image.width*X),dt=Math.floor(S.image.height*X),Et=U!==null?U.x:0,wt=U!==null?U.y:0;x.setTexture2D(S,0),E.copyTexSubImage2D(E.TEXTURE_2D,G,0,0,Et,wt,N,dt),K.unbindTexture()},this.copyTextureToTexture=function(S,U,G=null,X=null,N=0){S.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let dt,Et,wt,Rt,Bt,Gt,Ct,$t,ce;const he=S.isCompressedTexture?S.mipmaps[N]:S.image;G!==null?(dt=G.max.x-G.min.x,Et=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,Bt=G.min.y,Gt=G.isBox3?G.min.z:0):(dt=he.width,Et=he.height,wt=he.depth||1,Rt=0,Bt=0,Gt=0),X!==null?(Ct=X.x,$t=X.y,ce=X.z):(Ct=0,$t=0,ce=0);const ke=zt.convert(U.format),Kt=zt.convert(U.type);let Pt;U.isData3DTexture?(x.setTexture3D(U,0),Pt=E.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),Pt=E.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),Pt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);const Nn=E.getParameter(E.UNPACK_ROW_LENGTH),Zt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ln=E.getParameter(E.UNPACK_SKIP_PIXELS),Yi=E.getParameter(E.UNPACK_SKIP_ROWS),Ye=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,he.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,he.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Rt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Bt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Gt);const Ls=S.isDataArrayTexture||S.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Sn=j.get(S),Is=j.get(U),tn=j.get(Sn.__renderTarget),si=j.get(Is.__renderTarget);K.bindFramebuffer(E.READ_FRAMEBUFFER,tn.__webglFramebuffer),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<wt;ri++)Ls&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,j.get(S).__webglTexture,N,Gt+ri),S.isDepthTexture?(fe&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,j.get(U).__webglTexture,N,ce+ri),E.blitFramebuffer(Rt,Bt,dt,Et,Ct,$t,dt,Et,E.DEPTH_BUFFER_BIT,E.NEAREST)):fe?E.copyTexSubImage3D(Pt,N,Ct,$t,ce+ri,Rt,Bt,dt,Et):E.copyTexSubImage2D(Pt,N,Ct,$t,ce+ri,Rt,Bt,dt,Et);K.bindFramebuffer(E.READ_FRAMEBUFFER,null),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else fe?S.isDataTexture||S.isData3DTexture?E.texSubImage3D(Pt,N,Ct,$t,ce,dt,Et,wt,ke,Kt,he.data):U.isCompressedArrayTexture?E.compressedTexSubImage3D(Pt,N,Ct,$t,ce,dt,Et,wt,ke,he.data):E.texSubImage3D(Pt,N,Ct,$t,ce,dt,Et,wt,ke,Kt,he):S.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,N,Ct,$t,dt,Et,ke,Kt,he.data):S.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,N,Ct,$t,he.width,he.height,ke,he.data):E.texSubImage2D(E.TEXTURE_2D,N,Ct,$t,dt,Et,ke,Kt,he);E.pixelStorei(E.UNPACK_ROW_LENGTH,Nn),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Zt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ln),E.pixelStorei(E.UNPACK_SKIP_ROWS,Yi),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ye),N===0&&U.generateMipmaps&&E.generateMipmap(Pt),K.unbindTexture()},this.copyTextureToTexture3D=function(S,U,G=null,X=null,N=0){return S.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,G,X,N)},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),K.unbindTexture()},this.resetState=function(){L=0,P=0,O=null,K.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class sd extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nl extends Cs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const go=new F,vo=new F,Ku=new le,ks=new Oo,kr=new Fo,Ca=new F,Zu=new F;class nS extends be{constructor(t=new xn,e=new Nl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)go.fromBufferAttribute(e,s-1),vo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=go.distanceTo(vo);t.setAttribute("lineDistance",new Zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Ku.copy(s).invert(),ks.copy(t.ray).applyMatrix4(Ku);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),b=u.getX(v+1),A=Gr(this,t,ks,l,p,b);A&&e.push(A)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=Gr(this,t,ks,l,v,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=Gr(this,t,ks,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Gr(this,t,ks,l,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(go.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),e.distanceSqToSegment(go,vo,Ca,Zu)>i)return;Ca.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ca);if(!(l<t.near||l>t.far))return{distance:l,point:Zu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Ju=new F,Qu=new F;class th extends nS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ju.fromBufferAttribute(e,s),Qu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ju.distanceTo(Qu);t.setAttribute("lineDistance",new Zn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fl extends Cs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hf,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fc extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class iS extends fc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Pa=new le,eh=new F,nh=new F;class rd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ih=new le,Gs=new F,Da=new F;class sS extends rd{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Gs),Da.copy(i.position),Da.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Da),i.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class rS extends fc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new sS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class oS extends rd{constructor(){super(new Jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sh extends fc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new oS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const rh=new le;class aS{constructor(t,e,i=0,s=1/0){this.ray=new Oo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rh),this}intersectObject(t,e=!0,i=[]){return Ol(t,this,i,e),i.sort(oh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ol(t[s],this,i,e);return i.sort(oh),i}}function oh(n,t){return n.distance-t.distance}function Ol(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ol(r[o],t,e,!0)}}class ah{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lS extends qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);const lh={type:"change"},dc={type:"start"},od={type:"end"},Wr=new Oo,ch=new di,cS=Math.cos(70*k_.DEG2RAD),xe=new F,We=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},La=1e-6;class uS extends lS{constructor(t,e=null){super(t,e),this.state=se.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Wi,this._lastTargetPosition=new F,this._quat=new Wi().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ah,this._sphericalDelta=new ah,this._scale=1,this._panOffset=new F,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new F,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fS.bind(this),this._onPointerDown=hS.bind(this),this._onPointerUp=dS.bind(this),this._onContextMenu=MS.bind(this),this._onMouseWheel=_S.bind(this),this._onKeyDown=gS.bind(this),this._onTouchStart=vS.bind(this),this._onTouchMove=xS.bind(this),this._onMouseDown=pS.bind(this),this._onMouseMove=mS.bind(this),this._interceptControlDown=SS.bind(this),this._interceptControlUp=yS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lh),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=We:i>Math.PI&&(i-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wr.origin.copy(this.object.position),Wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wr.direction))<cS?this.object.lookAt(this.target):(ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wr.intersectPlane(ch,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>La||8*(1-this._lastQuaternion.dot(this.object.quaternion))>La||this._lastTargetPosition.distanceToSquared(this.target)>La?(this.dispatchEvent(lh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function fS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(od),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pS(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=se.DOLLY;break;case $n.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}break;case $n.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(dc)}function mS(n){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _S(n){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(n.preventDefault(),this.dispatchEvent(dc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(od))}function gS(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function vS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=se.TOUCH_ROTATE;break;case mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=se.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(dc)}function xS(n){switch(this._trackPointer(n),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=se.NONE}}function MS(n){this.enabled!==!1&&n.preventDefault()}function SS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ES extends sd{constructor(){super();const t=new Ps;t.deleteAttribute("uv");const e=new Fl({side:Ve}),i=new Fl,s=new rS(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new me(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new me(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new me(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new me(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new me(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new me(t,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new me(t,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new me(t,cs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new me(t,cs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new me(t,cs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new me(t,cs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new me(t,cs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new me(t,cs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function cs(n){const t=new Bo;return t.color.setScalar(n),t}class bS{constructor(t){Ce(this,"renderer");Ce(this,"scene",new sd);Ce(this,"camera");Ce(this,"controls");Ce(this,"root",new nn);Ce(this,"objects",new Map);Ce(this,"materials",[]);Ce(this,"envMap",null);Ce(this,"pmrem",null);Ce(this,"selectedId","");Ce(this,"raf",0);Ce(this,"onPick",null);Ce(this,"ro",null);Ce(this,"onPointerDown",t=>{var u;if(t.button!==0)return;const e=this.canvas.getBoundingClientRect();if(e.width<2||e.height<2)return;const i=new Ht((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),s=new aS;s.params.Line={threshold:.8},s.setFromCamera(i,this.camera);const r=s.intersectObject(this.root,!0),o=wS(r);if(!o)return;let a=o.object,l,c=-1;for(;a;)!l&&typeof a.userData.treeId=="string"&&(l=a.userData.treeId),c<0&&typeof a.userData.componentIndex=="number"&&(c=a.userData.componentIndex),a=a.parent;!l&&c>=0&&(l=`c:${c}`),l&&((u=this.onPick)==null||u.call(this,l))});Ce(this,"loop",()=>{this.raf=requestAnimationFrame(this.loop),this.controls.update(),this.renderer.render(this.scene,this.camera)});this.canvas=t,this.renderer=new eS({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ke,this.renderer.toneMapping=Rf,this.renderer.toneMappingExposure=.92,this.renderer.setClearColor(15328992,1),this.camera=new Je(45,1,.01,1e7),this.camera.position.set(120,80,120),this.controls=new uS(this.camera,t),this.controls.enableDamping=!0,this.controls.mouseButtons.LEFT=$n.ROTATE,this.controls.mouseButtons.MIDDLE=$n.DOLLY,this.controls.mouseButtons.RIGHT=$n.PAN,this.controls.touches.ONE=mi.ROTATE,this.controls.touches.TWO=mi.DOLLY_PAN,this.pmrem=new Il(this.renderer),this.envMap=this.pmrem.fromScene(new ES,.04).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.65,this.scene.add(new iS(16777215,9146520,.22));const e=new sh(16777215,.55);e.position.set(.9,1.35,.75),this.scene.add(e);const i=new sh(16054267,.2);i.position.set(-.9,.4,-.35),this.scene.add(i),this.scene.add(this.root),this.root.rotation.x=-Math.PI/2,this.canvas.addEventListener("pointerdown",this.onPointerDown,!0),this.resize(),this.loop(),typeof ResizeObserver<"u"&&(this.ro=new ResizeObserver(()=>this.resize()),t.parentElement&&this.ro.observe(t.parentElement))}resize(){const t=this.canvas.parentElement;if(!t)return;const e=t.clientWidth,i=t.clientHeight;e<2||i<2||(this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())}clear(){this.root.clear(),this.objects.clear();for(const t of this.materials)t.dispose();this.materials=[],this.selectedId=""}load(t,e,i,s=[]){this.clear();const r=new Map;e.forEach((u,h)=>r.set(h,u));const o=new le,a=new nn;a.name=i.replace(/\.(stp|step)$/i,"")||"STEP_Scene",a.userData.treeId="file",this.root.add(a),this.objects.set("file",a);let l=a;if(t.length>=2){const u=new nn;u.name="Group",u.userData.treeId="group",a.add(u),this.objects.set("group",u),l=u}const c=(u,h,f)=>{const d=new nn;d.name=u.name.trim()||`Component_${u.index}`,d.userData.treeId=`c:${u.index}`,d.userData.componentIndex=u.index,d.matrixAutoUpdate=!1;const g=new le().fromArray(AS(u.transform));d.matrix.copy(g);const v=f.clone().multiply(g);h.add(d),this.objects.set(d.userData.treeId,d);const m=v.clone().invert();for(const b of u.children)c(b,d,v);const p=Math.max(u.ishapeNames.length,u.meshIndices.length);for(let b=0;b<p;b++){const A=(u.ishapeNames[b]||"").trim()||`Shape_${b}`,M=new nn;M.name=A,M.userData.treeId=`s:${u.index}:${b}`,M.userData.componentIndex=u.index,d.add(M),this.objects.set(M.userData.treeId,M);const B=r.get(u.meshIndices[b]??-1);B&&this.addMesh(M,B,u.index,M.userData.treeId,m)}};for(const u of t)c(u,l,o);s.length&&this.addPmi(a,s),this.root.updateMatrixWorld(!0),this.resize(),this.fit()}setVisible(t,e){const i=this.objects.get(t);i&&(i.visible=e)}select(t,e=!1){this.selectedId=t;const i=this.objects.get(t);this.root.traverse(s=>{if(RS(s))return;const r=!t||!i||CS(s,i),o=e&&!!t&&!!i&&!r,a=s;if(a.isMesh){const c=Array.isArray(a.material)?a.material:[a.material];for(const u of c){const h=u;h.isMeshStandardMaterial&&(o?(h.transparent=!0,h.opacity=.18,h.depthWrite=!1):(h.transparent=h.userData.baseTransparent===!0,h.opacity=h.userData.baseOpacity??1,h.depthWrite=h.opacity>=.999),h.needsUpdate=!0)}}const l=s;if(l.isLineSegments){const c=l.material;if(!c.isLineBasicMaterial)return;c.transparent=o,c.opacity=o?.08:1,c.needsUpdate=!0}})}dispose(){var t,e,i;cancelAnimationFrame(this.raf),this.canvas.removeEventListener("pointerdown",this.onPointerDown,!0),(t=this.ro)==null||t.disconnect(),this.clear(),(e=this.envMap)==null||e.dispose(),(i=this.pmrem)==null||i.dispose(),this.controls.dispose(),this.renderer.dispose()}addMesh(t,e,i,s,r){if(!e.vertices.length)return;const o=new xn;o.setAttribute("position",new Ue(e.vertices,3));const a=[];let l=0,c=0;for(const d of e.submeshes)l+=d.indices.length,c+=d.lineIndices.length;const u=new Uint32Array(l);let h=0;for(const d of e.submeshes){if(!d.indices.length)continue;o.addGroup(h,d.indices.length,a.length),u.set(d.indices,h),h+=d.indices.length;const g=TS(d.color[0],d.color[1],d.color[2]),v=Number.isFinite(d.color[3])?d.color[3]:1,m=(g.r+g.g+g.b)/3,b=Math.max(g.r,g.g,g.b)-Math.min(g.r,g.g,g.b)<.08&&m>.35?.22:.04,A=new Fl({color:g,metalness:b,roughness:b>.15?.4:.52,envMapIntensity:.7,side:dn,transparent:v<.999,opacity:v,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,depthWrite:v>=.999});A.userData.baseTransparent=v<.999,A.userData.baseOpacity=v,this.materials.push(A),a.push(A)}if(!h)return;o.setIndex(new Ue(u,1)),o.applyMatrix4(r),o.computeVertexNormals();const f=new me(o,a.length===1?a[0]:a);if(f.userData.componentIndex=i,f.userData.treeId=s,f.name=e.name,t.add(f),c>1){const d=new Uint32Array(c);let g=0;for(const b of e.submeshes)b.lineIndices.length&&(d.set(b.lineIndices,g),g+=b.lineIndices.length);const v=new xn;v.setAttribute("position",o.getAttribute("position")),v.setIndex(new Ue(d,1));const m=new Nl({color:0});this.materials.push(m);const p=new th(v,m);p.userData.componentIndex=i,p.userData.treeId=s,p.raycast=()=>{},t.add(p)}}addPmi(t,e){const i=new nn;i.name="PMI",i.userData.treeId="pmi",t.add(i),this.objects.set("pmi",i);const s=new Map,r=new qt(0,.133,1),o=new Bo({color:r,side:dn,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),a=new Nl({color:r,depthTest:!0,depthWrite:!1});this.materials.push(o,a);for(const l of e){let c=s.get(l.group);c||(c=new nn,c.name=l.group,c.userData.treeId=`pmi-group:${l.group}`,i.add(c),this.objects.set(c.userData.treeId,c),s.set(l.group,c));const u=new nn;if(u.name=l.name,u.userData.treeId=`pmi:${l.index}`,c.add(u),this.objects.set(u.userData.treeId,u),!l.vertices.length)continue;const h=new xn;if(h.setAttribute("position",new Ue(l.vertices,3)),l.indices.length>=3){const f=h.clone();f.setIndex(new Ue(l.indices,1));const d=new me(f,o);d.renderOrder=2,d.userData.treeId=u.userData.treeId,u.add(d)}if(l.lineIndices.length>=2){const f=h.clone();f.setIndex(new Ue(l.lineIndices,1));const d=new th(f,a);d.renderOrder=3,d.userData.treeId=u.userData.treeId,u.add(d)}}}fit(){const t=new Rs().setFromObject(this.root);if(t.isEmpty())return;const e=t.getSize(new F).length(),i=t.getCenter(new F);this.controls.target.copy(i),this.camera.near=Math.max(e/1e4,.01),this.camera.far=e*100,this.camera.updateProjectionMatrix(),this.camera.position.copy(i).add(new F(e*.55,e*.4,e*.55)),this.controls.update()}}function TS(n,t,e){const i=Number.isFinite(n)?n:.72,s=Number.isFinite(t)?t:.72,r=Number.isFinite(e)?e:.76,o=(i+s+r)/3;return Math.max(i,s,r)-Math.min(i,s,r)<.05&&o>.4&&o<.66?new qt(.7,.71,.74):new qt(i,s,r)}function AS(n){return[n[0],n[4],n[8],n[12],n[1],n[5],n[9],n[13],n[2],n[6],n[10],n[14],n[3],n[7],n[11],n[15]]}function wS(n){for(const t of n)if(t.object.isMesh)return t;for(const t of n){const e=t.object;if(e.isLineSegments&&String(e.userData.treeId||"").startsWith("pmi:"))return t}}function RS(n){var e;let t=n;for(;t;){const i=(e=t.userData)==null?void 0:e.treeId;if(typeof i=="string"&&(i==="pmi"||i.startsWith("pmi:")||i.startsWith("pmi-group:")))return!0;t=t.parent}return!1}function CS(n,t){if(!n||!t)return!1;let e=n;for(;e;){if(e===t)return!0;e=e.parent}return!1}let Ia=null;function ps(n,t,e){return new TextDecoder("utf-8").decode(n.subarray(t,t+e))}function PS(n){return new Promise((t,e)=>{if(document.querySelector(`script[src="${n}"]`)){t();return}const s=document.createElement("script");s.src=n,s.onload=()=>t(),s.onerror=()=>e(new Error(`Failed to load ${n}`)),document.head.appendChild(s)})}async function ii(){return Ia||(Ia=(async()=>{if(await PS("example/StepLoaderThree/wasm/steploader.js"),!window.createStepLoaderModule)throw new Error("createStepLoaderModule missing. Place steploader.js in public/wasm/");const n=await DS();return window.createStepLoaderModule({locateFile:t=>`/wasm/${t}`,...n?{wasmBinary:n}:{}})})()),Ia}async function DS(){if(!(typeof DecompressionStream>"u"))try{const n=await fetch("example/StepLoaderThree/wasm/steploader.wasm.gz");if(!n.ok||!n.body)return;const t=n.body.pipeThrough(new DecompressionStream("gzip"));return new Uint8Array(await new Response(t).arrayBuffer())}catch{return}}function LS(n){const t=n._steploader_get_last_log(0,0);if(t<=0)return"";const e=n._malloc(t+1);try{return n._steploader_get_last_log(e,t+1),n.UTF8ToString(e)}finally{n._free(e)}}async function IS(){const n=await ii(),t=typeof n._steploader_is_trial=="function"&&n._steploader_is_trial()!==0,e=t&&typeof n._steploader_trial_max_file_bytes=="function"?n._steploader_trial_max_file_bytes():0;return{trial:t,maxFileBytes:e}}async function US(n){const t=await ii(),e=new Uint8Array(await n.arrayBuffer()),i=t._malloc(e.byteLength);if(!i)throw new Error("WASM malloc failed");try{t.HEAPU8.set(e,i);const s=t._steploader_load_from_memory(i,e.byteLength);if(!s){const r=LS(t);throw new Error(r||"STEP load failed")}return s}finally{t._free(i)}}async function uh(n){if(!n)return;(await ii())._steploader_free(n)}async function NS(n){const t=await ii(),e=t._steploader_get_structure_tree_byte_size(n);if(e<=0)return[];const i=t._malloc(e);try{if(t._steploader_get_structure_tree_flat(n,i,e)!==0)return[];const r=t.HEAPU8.slice(i,i+e);return FS(r)}finally{t._free(i)}}function FS(n){var o;const t=new DataView(n.buffer,n.byteOffset,n.byteLength);let e=0;const i=t.getInt32(e,!0);e+=4;const s=[];for(let a=0;a<i;a++){const l=t.getInt32(e,!0);e+=4;const c=t.getInt32(e,!0);e+=4;const u=c>0?ps(n,e,c):"";e+=c;const h=new Float32Array(16);for(let m=0;m<16;m++)h[m]=t.getFloat32(e,!0),e+=4;const f=t.getInt32(e,!0);e+=4;const d=[];for(let m=0;m<f;m++)d.push(t.getInt32(e,!0)),e+=4;const g=t.getInt32(e,!0);e+=4;const v=[];for(let m=0;m<g;m++){const p=t.getInt32(e,!0);e+=4,v.push(p>0?ps(n,e,p):""),e+=p}s.push({index:a,name:u,parentIndex:l,transform:h,meshIndices:d,ishapeNames:v,children:[],visible:!0})}const r=[];for(const a of s)a.parentIndex<0?r.push(a):(o=s[a.parentIndex])==null||o.children.push(a);return r}async function OS(n,t){const e=await ii(),i=e._steploader_get_mesh_count(n),s=new Map,r=a=>{for(const l of a){for(const c of l.meshIndices)s.set(c,l.index);r(l.children)}};r(t);const o=[];for(let a=0;a<i;a++){const l=await BS(e,n,a);l.componentIndex=s.get(a)??-1,o.push(l),(a&7)===7&&await new Promise(c=>setTimeout(c,0))}return o}async function BS(n,t,e){const i=n._malloc(24),s=n._malloc(16);try{if(n._steploader_get_mesh_ex_sizes(t,e,i,i+4,i+8,i+12,i+16,s)!==0)throw new Error("get_mesh_ex_sizes failed");const o=n.getValue(i+4,"i32"),a=n.getValue(i+8,"i32"),l=n.getValue(i+12,"i32"),c=n.getValue(i+16,"i32"),u=Math.max(o,0)*3,h=Math.max(a,0)*3,f=n._malloc(1024),d=n._malloc(64),g=n._malloc(Math.max(u,1)*4),v=n._malloc(Math.max(h,1)*4),m=n._malloc(Math.max(l,1)*4),p=n._malloc(Math.max(c,1)*4),b=n._malloc(4),A=n._malloc(4),M=n._malloc(4),B=n._malloc(4);n.setValue(b,o,"i32"),n.setValue(A,a,"i32"),n.setValue(M,l,"i32"),n.setValue(B,c,"i32");try{if(n._steploader_get_mesh_ex(t,e,f,1024,d,g,b,v,A,m,M,p,B)!==0)throw new Error("get_mesh_ex failed");const P=n.UTF8ToString(f),O=so(n,d,16),T=so(n,g,u),y=so(n,v,h),D=xo(n,m,l),et=xo(n,p,c);let W=GS(n,t,e,s);return W.length||(W=[{indices:D,lineIndices:et,color:[n.getValue(s,"float"),n.getValue(s+4,"float"),n.getValue(s+8,"float"),n.getValue(s+12,"float")]}]),{name:P,transform:O,vertices:T,normals:y,submeshes:W,componentIndex:-1}}finally{n._free(f),n._free(d),n._free(g),n._free(v),n._free(m),n._free(p),n._free(b),n._free(A),n._free(M),n._free(B)}}finally{n._free(i),n._free(s)}}function so(n,t,e){if(e<=0)return new Float32Array(0);const i=n.HEAPU8.subarray(t,t+e*4).slice();return new Float32Array(i.buffer,i.byteOffset,e)}function xo(n,t,e){if(e<=0)return new Uint32Array(0);const i=n.HEAPU8.subarray(t,t+e*4).slice();return new Uint32Array(i.buffer,i.byteOffset,e)}async function zS(n){const t=await ii();if(typeof t._steploader_get_gdt_count!="function")return[];const e=t._steploader_get_gdt_count(n),i=[];for(let s=0;s<e;s++){const r=t._malloc(1024);try{if(t._steploader_get_gdt_name(n,s,r,1024)!==0)continue;const o=t.UTF8ToString(r).trim()||`PMI_${s}`,a=t._steploader_get_gdt_type(n,s),l=t._steploader_get_gdt_mesh_count(n,s),c=[];for(let h=0;h<l;h++){const f=HS(t,n,s,h);f.vertices.length&&c.push(f)}const u=VS(c);if(!u.vertices.length||!u.indices.length&&u.lineIndices.length<2)continue;i.push({index:s,name:o,type:a,group:kS(a,o),vertices:u.vertices,indices:u.indices,lineIndices:u.lineIndices})}finally{t._free(r)}(s&7)===7&&await new Promise(o=>setTimeout(o,0))}return i}function HS(n,t,e,i){const s={vertices:new Float32Array(0),indices:new Uint32Array(0),lineIndices:new Uint32Array(0)},r=n._malloc(16);try{if(n._steploader_get_gdt_mesh_ex_sizes(t,e,i,r,r+4,r+8,r+12)!==0)return s;const a=n.getValue(r,"i32"),l=n.getValue(r+4,"i32"),c=n.getValue(r+8,"i32"),u=n.getValue(r+12,"i32"),h=Math.max(a,0)*3,f=Math.max(l,0)*3,d=n._malloc(Math.max(h,1)*4),g=n._malloc(Math.max(f,1)*4),v=n._malloc(Math.max(c,1)*4),m=n._malloc(Math.max(u,1)*4),p=n._malloc(4),b=n._malloc(4),A=n._malloc(4),M=n._malloc(4);n.setValue(p,a,"i32"),n.setValue(b,l,"i32"),n.setValue(A,c,"i32"),n.setValue(M,u,"i32");try{return n._steploader_get_gdt_mesh_ex(t,e,i,d,p,g,b,v,A,m,M)!==0?s:{vertices:so(n,d,h),indices:xo(n,v,c),lineIndices:xo(n,m,u)}}finally{n._free(d),n._free(g),n._free(v),n._free(m),n._free(p),n._free(b),n._free(A),n._free(M)}}finally{n._free(r)}}function VS(n){let t=0,e=0,i=0;for(const h of n)t+=h.vertices.length,e+=h.indices.length,i+=h.lineIndices.length;const s=new Float32Array(t),r=new Uint32Array(e),o=new Uint32Array(i);let a=0,l=0,c=0,u=0;for(const h of n){s.set(h.vertices,a),a+=h.vertices.length;const f=Math.floor(h.vertices.length/3);for(let d=0;d<h.indices.length;d++)r[l++]=h.indices[d]+u;for(let d=0;d<h.lineIndices.length;d++)o[c++]=h.lineIndices[d]+u;u+=f}return{vertices:s,indices:r,lineIndices:o}}function kS(n,t){if(n===1)return"Datum";if(n===2)return"Dimension";if(n===3)return"GeomTolerance";if(n>=4)return"GraphicPMI";const e=t||"";return/graphicpmi/i.test(e)?"GraphicPMI":/datum/i.test(e)?"Datum":/dimension|\bdim\b/i.test(e)?"Dimension":/geomtol|tolerance/i.test(e)?"GeomTolerance":"Other"}function GS(n,t,e,i){const s=n._steploader_get_mesh_submeshes_byte_size(t,e);if(s<=0)return[];const r=n._malloc(s);try{if(n._steploader_get_mesh_submeshes_flat(t,e,r,s)!==0)return[];const o=n.HEAPU8,a=new DataView(o.buffer,r,s);let l=0;const c=[];for(;l+4<=s;){const u=a.getInt32(l,!0);if(l+=4,l+u*4>s)break;const h=new Uint32Array(u);for(let v=0;v<u;v++)h[v]=a.getInt32(l,!0),l+=4;if(l+4>s)break;const f=a.getInt32(l,!0);l+=4;const d=new Uint32Array(f);for(let v=0;v<f;v++)d[v]=a.getInt32(l,!0),l+=4;if(l+16>s)break;const g=[a.getFloat32(l,!0),a.getFloat32(l+4,!0),a.getFloat32(l+8,!0),a.getFloat32(l+12,!0)];l+=16,c.push({indices:h,lineIndices:d,color:g})}return c}finally{n._free(r)}}function ad(n,t,e){if(t<0)throw new Error(`props byte size failed (${t})`);if(t===0)return[];const i=n._malloc(t);if(!i)throw new Error(`props malloc failed (${t})`);try{const s=e(i,t);if(s!==0)throw new Error(`props flat failed (rc=${s}, size=${t})`);const r=new Uint8Array(t);return r.set(n.HEAPU8.subarray(i,i+t)),JS(r)}finally{n._free(i)}}async function hh(n,t){const e=await ii();if(typeof e._steploader_get_component_props_byte_size!="function")throw new Error("component props export missing in WASM");const i=e._steploader_get_component_props_byte_size(n,t);return ad(e,i,(s,r)=>e._steploader_get_component_props_flat(n,t,s,r))}async function WS(n){const t=await ii();if(typeof t._steploader_get_file_props_byte_size!="function")throw new Error("file props export missing in WASM");const e=t._steploader_get_file_props_byte_size(n);return ad(t,e,(i,s)=>t._steploader_get_file_props_flat(n,i,s))}function XS(n){return{id:"selection",title:"Selection",items:[{key:"Name",value:n.name||"None"},{key:"Kind",value:n.kind},{key:"TreeId",value:n.id},{key:"ComponentIndex",value:String(n.componentIndex)},{key:"MeshIndex",value:String(n.meshIndex)}]}}function ld(n){if(!(n!=null&&n.vertices.length))return{area:0,volume:0};const t=n.vertices;let e=0,i=0;const s=(r,o,a)=>{const l=t[r*3],c=t[r*3+1],u=t[r*3+2],h=t[o*3],f=t[o*3+1],d=t[o*3+2],g=t[a*3],v=t[a*3+1],m=t[a*3+2],p=h-l,b=f-c,A=d-u,M=g-l,B=v-c,L=m-u,P=b*L-A*B,O=A*M-p*L,T=p*B-b*M;e+=.5*Math.hypot(P,O,T),i+=(l*(f*m-d*v)-c*(h*m-d*g)+u*(h*v-f*g))/6};for(const r of n.submeshes){const o=r.indices;for(let a=0;a+2<o.length;a+=3)s(o[a],o[a+1],o[a+2])}return{area:e,volume:Math.abs(i)}}function Mo(n,t){return!Number.isFinite(n)||n<=0?"None":`${n>=1e3?n.toFixed(2):n.toFixed(5)} ${t}`}function pe(...n){return new TextDecoder().decode(Uint8Array.from(n))}const Jt={area:pe(233,157,162,231,167,175),volume:pe(228,189,147,231,167,175),name:pe(229,144,141,231,167,176),identity:pe(230,160,135,232,175,134,230,149,176,230,141,174),metadata:pe(229,133,131,230,149,176,230,141,174),geometry:pe(229,135,160,228,189,149),fileUnit:pe(229,133,168,229,177,128,229,141,149,228,189,141),entityId:pe(229,155,190,229,133,131,32,73,68),nodeType:pe(232,138,130,231,130,185,231,177,187,229,158,139),layer:pe(229,155,190,229,177,130),meshes:pe(231,189,145,230,160,188,230,149,176),vertices:pe(233,161,182,231,130,185,230,149,176),triangles:pe(228,184,137,232,167,146,233,157,162),edges:pe(232,190,185,230,149,176),color:pe(233,162,156,232,137,178),material:pe(230,157,144,230,150,153),centroid:pe(232,180,168,229,191,131),fileName:pe(230,150,135,228,187,182,229,144,141),file:pe(230,150,135,228,187,182),mm:pe(230,175,171,231,177,179),part:pe(233,155,182,228,187,182),assembly:pe(232,163,133,233,133,141),root:pe(230,160,185)},qS={identity:"Identity",metadata:"Metadata",geometry:"Geometry",file:"File",step:"STEP",selection:"Selection","shape-mesh":"Shape Mesh",error:"Error"};function YS(){return{[Jt.name]:"Name",[Jt.area]:"Area",[Jt.volume]:"Volume",[Jt.fileUnit]:"Unit",[Jt.entityId]:"Entity ID",[Jt.nodeType]:"Node Type",[Jt.layer]:"Layer",[Jt.meshes]:"Meshes",[Jt.vertices]:"Vertices",[Jt.triangles]:"Triangles",[Jt.edges]:"Edges",[Jt.color]:"Color",[Jt.material]:"Material",[Jt.centroid]:"Centroid",[Jt.fileName]:"File Name",[Jt.identity]:"Identity",[Jt.metadata]:"Metadata",[Jt.geometry]:"Geometry",[Jt.file]:"File"}}function jS(){return{[Jt.part]:"Part",[Jt.assembly]:"Assembly",[Jt.root]:"Root"}}function Ua(n){const t=YS(),e=jS(),i=Jt.mm;return n.map(s=>({id:s.id,title:qS[s.id]||t[s.title]||s.title,items:s.items.map(r=>({key:t[r.key]||r.key,value:e[r.value]||(r.value?r.value.split(i).join("mm"):r.value)}))}))}function $S(n,t,e="mm"){if(!n)return{id:"shape-mesh",title:"Shape Mesh",items:[{key:"MeshIndex",value:String(t)},{key:"Status",value:"None"}]};let i=0,s=0,r="None";for(const l of n.submeshes)i+=Math.floor(l.indices.length/3),s+=Math.floor(l.lineIndices.length/2),r==="None"&&(r=`${l.color[0]}, ${l.color[1]}, ${l.color[2]}, ${l.color[3]}`);const{area:o,volume:a}=ld(n);return{id:"shape-mesh",title:"Shape Mesh",items:[{key:"MeshName",value:n.name||"None"},{key:"MeshIndex",value:String(t)},{key:"Vertices",value:String(Math.floor(n.vertices.length/3))},{key:"Triangles",value:String(i)},{key:"Edges",value:String(s)},{key:"Submeshes",value:String(n.submeshes.length)},{key:"Color",value:r},{key:Jt.area,value:Mo(o,`${e}^2`)},{key:Jt.volume,value:Mo(a,`${e}^3`)}]}}function KS(n,t){const e=new Map(n.map(i=>[i.id,i]));for(const i of t){let s=e.get(i.id);if(!s){s={id:i.id,title:i.title,items:i.items.map(r=>({...r}))},n.push(s),e.set(i.id,s);continue}for(const r of i.items){const o=s.items.find(a=>a.key===r.key);o?(!o.value||o.value==="None")&&(o.value=r.value):s.items.push({...r})}}}function Xr(n,t,e,i,s,r=!1){if(!s||s==="None")return;let o=n.find(l=>l.id===t);o||(o={id:t,title:e,items:[]},n.push(o));const a=o.items.find(l=>l.key===i);a?(r||!a.value||a.value==="None")&&(a.value=s):o.items.push({key:i,value:s})}function ZS(n){var i;const t=n.find(s=>s.id==="file"),e=((i=t==null?void 0:t.items.find(s=>s.key===Jt.fileUnit||s.key==="Unit"))==null?void 0:i.value)||"mm";return/mm|milli/i.test(e)||e.includes(pe(230,175,171,231,177,179))?"mm":e.replace(/\s/g,"")||"mm"}function JS(n){const t=new DataView(n.buffer,n.byteOffset,n.byteLength);let e=0;if(e+4>n.byteLength)return[];const i=t.getInt32(e,!0);e+=4;const s=[];for(let r=0;r<i&&!(e+4>n.byteLength);r++){const o=t.getInt32(e,!0);if(e+=4,o<0||e+o>n.byteLength)break;const a=ps(n,e,o);if(e+=o,e+4>n.byteLength)break;const l=t.getInt32(e,!0);if(e+=4,l<0||e+l>n.byteLength)break;const c=ps(n,e,l);if(e+=l,e+4>n.byteLength)break;const u=t.getInt32(e,!0);e+=4;const h=[];for(let f=0;f<u&&!(e+4>n.byteLength);f++){const d=t.getInt32(e,!0);if(e+=4,d<0||e+d>n.byteLength)break;const g=ps(n,e,d);if(e+=d,e+4>n.byteLength)break;const v=t.getInt32(e,!0);if(e+=4,v<0||e+v>n.byteLength)break;const m=ps(n,e,v);e+=v,h.push({key:g,value:m||"None"})}s.push({id:a,title:c,items:h})}return s}function QS(n){return n.replace(/\.(stp|step)$/i,"")||"STEP_Scene"}function ty(n){return n.name.trim()||`Component_${n.index}`}function ey(n,t,e=[]){const i=n.map(cd),s=i.length>=2?[{id:"group",name:"Group",kind:"group",componentIndex:-1,meshIndex:-1,parentId:"file",children:i,visible:!0}]:i;e.length&&s.push(ny(e));const r=[{id:"file",name:QS(t),kind:"file",componentIndex:-1,meshIndex:-1,parentId:"",children:s,visible:!0}],o=(a,l)=>{for(const c of a)c.parentId=l,o(c.children,c.id)};return o(r,""),r}function ny(n){const t=new Map,e=[];for(const i of n){let s=t.get(i.group);s||(s={id:`pmi-group:${i.group}`,name:i.group,kind:"pmi-group",componentIndex:-1,meshIndex:-1,parentId:"pmi",children:[],visible:!0},t.set(i.group,s),e.push(s)),s.children.push({id:`pmi:${i.index}`,name:i.name,kind:"pmi",componentIndex:-1,meshIndex:-1,parentId:s.id,children:[],visible:!0})}return{id:"pmi",name:"PMI",kind:"pmi-group",componentIndex:-1,meshIndex:-1,parentId:"file",children:e,visible:!0}}function cd(n){const t=n.children.map(cd),e=Math.max(n.ishapeNames.length,n.meshIndices.length);for(let i=0;i<e;i++){const s=(n.ishapeNames[i]||"").trim();t.push({id:`s:${n.index}:${i}`,name:s||`Shape_${i}`,kind:"shape",componentIndex:n.index,meshIndex:n.meshIndices[i]??-1,parentId:`c:${n.index}`,children:[],visible:!0})}return{id:`c:${n.index}`,name:ty(n),kind:"component",componentIndex:n.index,meshIndex:-1,parentId:"",children:t,visible:!0}}function iy(n){const t=[],e=i=>{for(const s of i)t.push(s),e(s.children)};return e(n),t}const sy={class:"app"},ry={class:"toolbar"},oy={key:0,class:"trial-badge"},ay={class:"status"},ly={key:0,class:"trial-mark"},cy={key:1,class:"overlay"},uy="Show All",qr="Trial",hy=Jl({__name:"App",setup(n){const t=Le(null),e=Le(null),i=Le("Select a local .stp / .step file"),s=Le(!1),r=Le(""),o=Le([]),a=Le(""),l=Le([]),c=Le(""),u=Le(280),h=Le(320);let f=0,d=null,g=new Map,v=[],m=0;const p=new Map,b=Le({open:!1,x:0,y:0}),A=Le(!1),M=Le("");Yh(()=>{e.value&&(d=new bS(e.value),d.onPick=J=>void T(J),window.addEventListener("resize",B),window.addEventListener("click",W)),i.value="Loading WASM...",ii().then(async()=>{const J=await IS();if(A.value=J.trial,J.trial){const ct=Math.max(1,Math.round(J.maxFileBytes/1048576));M.value=`${qr} ${ct}MB`,i.value=`${qr}: max ${ct} MB`}else i.value="Select a local .stp / .step file"}).catch(J=>{i.value=J instanceof Error?J.message:String(J)})}),jh(()=>{window.removeEventListener("resize",B),window.removeEventListener("click",W),d==null||d.dispose(),f&&uh(f)});function B(){d==null||d.resize()}function L(){const J=t.value;J&&(J.value="",J.click())}function P(J,ct){ct.preventDefault();const nt=ct.clientX,Tt=J==="left"?u.value:h.value,Lt=ot=>{const gt=ot.clientX-nt;J==="left"?u.value=Math.min(560,Math.max(180,Tt+gt)):h.value=Math.min(620,Math.max(220,Tt-gt))},tt=()=>{window.removeEventListener("pointermove",Lt),window.removeEventListener("pointerup",tt),d==null||d.resize()};window.addEventListener("pointermove",Lt),window.addEventListener("pointerup",tt)}async function O(J){var Lt,tt;const ct=J.target,nt=(Lt=ct.files)==null?void 0:Lt[0];if(ct.value="",!nt)return;s.value=!0,b.value.open=!1,i.value=`Parsing ${nt.name} ...`,await Ws(),await new Promise(ot=>requestAnimationFrame(()=>ot(null)));let Tt=!1;try{if(f){const At=f;f=0,await uh(At)}p.clear(),v=[],o.value=[],l.value=[],a.value="",c.value="",m++,f=await US(nt),i.value=`Building tree ${nt.name} ...`,await Ws();const ot=await NS(f);i.value=`Reading meshes ${nt.name} ...`,await Ws();const gt=await OS(f,ot);v=gt,i.value=`Reading PMI ${nt.name} ...`,await Ws();const pt=await zS(f),St=ey(ot,nt.name,pt);if(o.value=St,g=new Map(iy(St).map(At=>[At.id,At])),d==null||d.load(ot,gt,nt.name,pt),d==null||d.resize(),Tt=!0,a.value=((tt=St[0])==null?void 0:tt.id)??"",a.value)try{await T(a.value)}catch(At){i.value=`${nt.name} loaded, properties failed: ${At instanceof Error?At.message:String(At)}`}(i.value.startsWith("Reading")||i.value.startsWith("Building tree")||i.value.startsWith("Parsing"))&&(i.value=`${nt.name} / ${gt.length} meshes / ${pt.length} PMI / ${g.size} nodes`)}catch(ot){i.value=ot instanceof Error?ot.message:String(ot),Tt||(o.value=[],l.value=[],d==null||d.clear())}finally{s.value=!1}}async function T(J){const ct=++m;a.value=J;const nt=g.get(J);if(c.value=(nt==null?void 0:nt.name)??J,!nt){d==null||d.select(J,!1),l.value=[];return}d==null||d.select(J,nt.kind==="shape"||nt.kind==="component");const Tt=[XS(nt)];if(l.value=Ua(Tt),!!f)try{let Lt=[];if(nt.kind==="pmi"||nt.kind==="pmi-group"){l.value=Ua(Tt);return}if(nt.kind==="file"||nt.kind==="group"||nt.componentIndex<0)Lt=await WS(f);else{const St=p.get(nt.componentIndex);St?Lt=St.map(At=>({...At,items:At.items.map(Ut=>({...Ut}))})):(Lt=await hh(f,nt.componentIndex),p.set(nt.componentIndex,Lt),Lt=Lt.map(At=>({...At,items:At.items.map(Ut=>({...Ut}))})))}if(ct!==m)return;const tt=new Set(["selection","shape-mesh"]),ot=Lt.filter(St=>!tt.has(St.id));let gt=nt;for(;gt!=null&&gt.parentId;){const St=g.get(gt.parentId);if(!St)break;if(St.componentIndex>=0&&St.componentIndex!==nt.componentIndex){let At=p.get(St.componentIndex);At||(At=await hh(f,St.componentIndex),p.set(St.componentIndex,At)),KS(ot,At.filter(Ut=>!tt.has(Ut.id)))}gt=St}if(ct!==m)return;const pt=ZS(ot);if(Xr(ot,"identity","Identity",Jt.name,nt.name,nt.kind==="shape"),Xr(ot,"metadata","Metadata",Jt.name,nt.name,nt.kind==="shape"),nt.kind==="shape"&&nt.meshIndex>=0){const St=v[nt.meshIndex],At=ld(St);Xr(ot,"geometry","Geometry",Jt.area,Mo(At.area,`${pt}^2`),!0),Xr(ot,"geometry","Geometry",Jt.volume,Mo(At.volume,`${pt}^3`),!0),Tt.push($S(St,nt.meshIndex,pt))}l.value=Ua([...Tt,...ot])}catch(Lt){if(ct!==m)return;l.value=[...Tt,{id:"error",title:"Error",items:[{key:"message",value:Lt instanceof Error?Lt.message:String(Lt)}]}]}}let y=0,D=0,et=0;function W(){b.value.open=!1}function st(J){J.button===2&&(y=0,D=J.clientX,et=J.clientY)}function lt(J){(J.buttons&2)!==0&&(y=Math.max(y,Math.hypot(J.clientX-D,J.clientY-et)))}function $(J){var nt;J.preventDefault(),!((nt=J.currentTarget)!=null&&nt.classList.contains("viewport")&&y>4)&&(b.value={open:!0,x:Math.min(J.clientX,window.innerWidth-160),y:Math.min(J.clientY,window.innerHeight-80)})}function Q(){var nt;b.value.open=!1;const J=Tt=>{Tt.visible=!0,d==null||d.setVisible(Tt.id,!0),Tt.children.forEach(J)};o.value.forEach(J),o.value=o.value.slice();const ct=(nt=o.value[0])==null?void 0:nt.id;ct&&T(ct)}function H(J,ct){const nt=g.get(J);if(!nt)return;const Tt=Lt=>{Lt.visible=ct,d==null||d.setVisible(Lt.id,ct),Lt.children.forEach(Tt)};Tt(nt)}return(J,ct)=>(Me(),Ae("div",sy,[Yt("aside",{class:"left",style:zi({width:u.value+"px"})},[ct[4]||(ct[4]=Yt("div",{class:"bar"},[Yt("strong",null,"Model")],-1)),Vh(Yt("input",{"onUpdate:modelValue":ct[0]||(ct[0]=nt=>r.value=nt),class:"search",placeholder:"Search"},null,512),[[Dm,r.value]]),Yt("div",{class:"tree-wrap",onContextmenu:$},[Pn($m,{nodes:o.value,"selected-id":a.value,query:r.value,onSelect:T,onToggleVisible:H},null,8,["nodes","selected-id","query"])],32)],4),Yt("div",{class:"split",title:"Drag to resize",onPointerdown:ct[1]||(ct[1]=nt=>P("left",nt))},null,32),Yt("main",null,[Yt("div",ry,[Yt("button",{type:"button",class:"open-btn",onClick:L},"Open STP"),Yt("input",{ref_key:"fileInput",ref:t,class:"file-input",type:"file",accept:".stp,.step,.STP,.STEP,application/octet-stream",onChange:O},null,544),A.value?(Me(),Ae("span",oy,fn(M.value||qr),1)):fs("",!0),Yt("span",ay,fn(i.value),1)]),Yt("div",{class:"viewport",onPointerdown:st,onPointermove:lt,onContextmenu:$},[Yt("canvas",{ref_key:"canvas",ref:e},null,512),A.value?(Me(),Ae("div",ly,fn(qr))):fs("",!0),s.value?(Me(),Ae("div",cy,"Loading...")):fs("",!0)],32)]),Yt("div",{class:"split",title:"Drag to resize",onPointerdown:ct[2]||(ct[2]=nt=>P("right",nt))},null,32),Yt("aside",{class:"right",style:zi({width:h.value+"px"})},[(Me(),_f(t_,{key:a.value,title:c.value||"Properties",groups:l.value},null,8,["title","groups"]))],4),b.value.open?(Me(),Ae("div",{key:0,class:"ctx",style:zi({left:b.value.x+"px",top:b.value.y+"px"}),onClick:ct[3]||(ct[3]=qa(()=>{},["stop"]))},[Yt("button",{type:"button",onClick:Q},fn(uy))],4)):fs("",!0)]))}});Fm(hy).mount("#app");
