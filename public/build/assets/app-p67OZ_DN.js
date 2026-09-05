function kc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const de={},$s=[],Kn=()=>{},Jf=()=>!1,wa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ta=n=>n.startsWith("onUpdate:"),Oe=Object.assign,Hc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Rm=Object.prototype.hasOwnProperty,oe=(n,t)=>Rm.call(n,t),Ht=Array.isArray,Ks=n=>io(n)==="[object Map]",Qf=n=>io(n)==="[object Set]",Nu=n=>io(n)==="[object Date]",Yt=n=>typeof n=="function",be=n=>typeof n=="string",Zn=n=>typeof n=="symbol",le=n=>n!==null&&typeof n=="object",td=n=>(le(n)||Yt(n))&&Yt(n.then)&&Yt(n.catch),ed=Object.prototype.toString,io=n=>ed.call(n),Cm=n=>io(n).slice(8,-1),nd=n=>io(n)==="[object Object]",Vc=n=>be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fr=kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Pm=/-\w/g,Bn=Aa(n=>n.replace(Pm,t=>t.slice(1).toUpperCase())),Lm=/\B([A-Z])/g,_s=Aa(n=>n.replace(Lm,"-$1").toLowerCase()),id=Aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),ja=Aa(n=>n?`on${id(n)}`:""),jn=(n,t)=>!Object.is(n,t),jo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},sd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Gc=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Im=n=>{const t=be(n)?Number(n):NaN;return isNaN(t)?n:t};let Ou;const Ra=()=>Ou||(Ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zs(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=be(i)?Om(i):Zs(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(be(n)||le(n))return n}const Dm=/;(?![^(]*\))/g,Um=/:([^]+)/,Nm=/\/\*[^]*?\*\//g;function Om(n){const t={};return n.replace(Nm,"").split(Dm).forEach(e=>{if(e){const i=e.split(Um);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ci(n){let t="";if(be(n))t=n;else if(Ht(n))for(let e=0;e<n.length;e++){const i=ci(n[e]);i&&(t+=i+" ")}else if(le(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bm=kc(Fm);function rd(n){return!!n||n===""}function zm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Wc(n[i],t[i]);return e}function Wc(n,t){if(n===t)return!0;let e=Nu(n),i=Nu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Zn(n),i=Zn(t),e||i)return n===t;if(e=Ht(n),i=Ht(t),e||i)return e&&i?zm(n,t):!1;if(e=le(n),i=le(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Wc(n[o],t[o]))return!1}}return String(n)===String(t)}const od=n=>!!(n&&n.__v_isRef===!0),Le=n=>be(n)?n:n==null?"":Ht(n)||le(n)&&(n.toString===ed||!Yt(n.toString))?od(n)?Le(n.value):JSON.stringify(n,ad,2):String(n),ad=(n,t)=>od(t)?ad(n,t.value):Ks(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ya(i,r)+" =>"]=s,e),{})}:Qf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ya(e))}:Zn(t)?Ya(t):le(t)&&!Ht(t)&&!nd(t)?String(t):t,Ya=(n,t="")=>{var e;return Zn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};let Ve;class km{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ve&&(Ve.active?(this.parent=Ve,this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){if(this._on>0&&--this._on===0){if(Ve===this)Ve=this.prevScope;else{let t=Ve;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hm(){return Ve}let _e;const $a=new WeakSet;class ld{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&(Ve.active?Ve.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ud(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fu(this),hd(this);const t=_e,e=zn;_e=this,zn=!0;try{return this.fn()}finally{fd(this),_e=t,zn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)jc(t);this.deps=this.depsTail=void 0,Fu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gl(this)&&this.run()}get dirty(){return Gl(this)}}let cd=0,Br,zr;function ud(n,t=!1){if(n.flags|=8,t){n.next=zr,zr=n;return}n.next=Br,Br=n}function Xc(){cd++}function qc(){if(--cd>0)return;if(zr){let t=zr;for(zr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Br;){let t=Br;for(Br=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function hd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),jc(i),Vm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Gl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(dd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function dd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xr)||(n.globalVersion=Xr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Gl(n))))return;n.flags|=2;const t=n.dep,e=_e,i=zn;_e=n,zn=!0;try{hd(n);const s=n.fn(n._value);(t.version===0||jn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,zn=i,fd(n),n.flags&=-3}}function jc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)jc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Vm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let zn=!0;const pd=[];function gi(){pd.push(zn),zn=!1}function _i(){const n=pd.pop();zn=n===void 0?!0:n}function Fu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let Xr=0;class Gm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!zn||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new Gm(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,md(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,Xr++,this.notify(t)}notify(t){Xc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{qc()}}}function md(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)md(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Wl=new WeakMap,as=Symbol(""),Xl=Symbol(""),qr=Symbol("");function Ze(n,t,e){if(zn&&_e){let i=Wl.get(n);i||Wl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Yc),s.map=i,s.key=e),s.track()}}function fi(n,t,e,i,s,r){const o=Wl.get(n);if(!o){Xr++;return}const a=l=>{l&&l.trigger()};if(Xc(),t==="clear")o.forEach(a);else{const l=Ht(n),c=l&&Vc(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===qr||!Zn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(qr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(as)),Ks(n)&&a(o.get(Xl)));break;case"delete":l||(a(o.get(as)),Ks(n)&&a(o.get(Xl)));break;case"set":Ks(n)&&a(o.get(as));break}}qc()}function Ss(n){const t=ne(n);return t===n?t:(Ze(t,"iterate",qr),Tn(n)?t:t.map(kn))}function Ca(n){return Ze(n=ne(n),"iterate",qr),n}function Wn(n,t){return vi(n)?sr(ls(n)?kn(t):t):kn(t)}const Wm={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,n=>Wn(this,n))},concat(...n){return Ss(this).concat(...n.map(t=>Ht(t)?Ss(t):t))},entries(){return Ka(this,"entries",n=>(n[1]=Wn(this,n[1]),n))},every(n,t){return ti(this,"every",n,t,void 0,arguments)},filter(n,t){return ti(this,"filter",n,t,e=>e.map(i=>Wn(this,i)),arguments)},find(n,t){return ti(this,"find",n,t,e=>Wn(this,e),arguments)},findIndex(n,t){return ti(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ti(this,"findLast",n,t,e=>Wn(this,e),arguments)},findLastIndex(n,t){return ti(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ti(this,"forEach",n,t,void 0,arguments)},includes(...n){return Za(this,"includes",n)},indexOf(...n){return Za(this,"indexOf",n)},join(n){return Ss(this).join(n)},lastIndexOf(...n){return Za(this,"lastIndexOf",n)},map(n,t){return ti(this,"map",n,t,void 0,arguments)},pop(){return vr(this,"pop")},push(...n){return vr(this,"push",n)},reduce(n,...t){return Bu(this,"reduce",n,t)},reduceRight(n,...t){return Bu(this,"reduceRight",n,t)},shift(){return vr(this,"shift")},some(n,t){return ti(this,"some",n,t,void 0,arguments)},splice(...n){return vr(this,"splice",n)},toReversed(){return Ss(this).toReversed()},toSorted(n){return Ss(this).toSorted(n)},toSpliced(...n){return Ss(this).toSpliced(...n)},unshift(...n){return vr(this,"unshift",n)},values(){return Ka(this,"values",n=>Wn(this,n))}};function Ka(n,t,e){const i=Ca(n),s=i[t]();return i!==n&&!Tn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Xm=Array.prototype;function ti(n,t,e,i,s,r){const o=Ca(n),a=o!==n&&!Tn(n),l=o[t];if(l!==Xm[t]){const h=l.apply(n,r);return a?kn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,Wn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Bu(n,t,e,i){const s=Ca(n),r=s!==n&&!Tn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Wn(n,c)),e.call(this,c,Wn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?Wn(n,l):l}function Za(n,t,e){const i=ne(n);Ze(i,"iterate",qr);const s=i[t](...e);return(s===-1||s===!1)&&Jc(e[0])?(e[0]=ne(e[0]),i[t](...e)):s}function vr(n,t,e=[]){gi(),Xc();const i=ne(n)[t].apply(n,e);return qc(),_i(),i}const qm=kc("__proto__,__v_isRef,__isVue"),gd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function jm(n){Zn(n)||(n=String(n));const t=ne(this);return Ze(t,"has",n),t.hasOwnProperty(n)}class _d{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?ig:Md:r?yd:xd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ht(t);if(!s){let l;if(o&&(l=Wm[e]))return l;if(e==="hasOwnProperty")return jm}const a=Reflect.get(t,e,Qe(t)?t:i);if((Zn(e)?gd.has(e):qm(e))||(s||Ze(t,"get",e),r))return a;if(Qe(a)){const l=o&&Vc(e)?a:a.value;return s&&le(l)?jl(l):l}return le(a)?s?jl(a):Kc(a):a}}class vd extends _d{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ht(t)&&Vc(e);if(!this._isShallow){const c=vi(r);if(!Tn(i)&&!vi(i)&&(r=ne(r),i=ne(i)),!o&&Qe(r)&&!Qe(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:oe(t,e),l=Reflect.set(t,e,i,Qe(t)?t:s);return t===ne(s)&&l&&(a?jn(i,r)&&fi(t,"set",e,i):fi(t,"add",e,i)),l}deleteProperty(t,e){const i=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&fi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Zn(e)||!gd.has(e))&&Ze(t,"has",e),i}ownKeys(t){return Ze(t,"iterate",Ht(t)?"length":as),Reflect.ownKeys(t)}}class Ym extends _d{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const $m=new vd,Km=new Ym,Zm=new vd(!0);const ql=n=>n,mo=n=>Reflect.getPrototypeOf(n);function Jm(n,t,e){return function(...i){const s=this.__v_raw,r=ne(s),o=Ks(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?ql:t?sr:kn;return!t&&Ze(r,"iterate",l?Xl:as),Oe(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function go(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Qm(n,t){const e={get(s){const r=this.__v_raw,o=ne(r),a=ne(s);n||(jn(s,a)&&Ze(o,"get",s),Ze(o,"get",a));const{has:l}=mo(o),c=t?ql:n?sr:kn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ze(ne(s),"iterate",as),s.size},has(s){const r=this.__v_raw,o=ne(r),a=ne(s);return n||(jn(s,a)&&Ze(o,"has",s),Ze(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ne(a),c=t?ql:n?sr:kn;return!n&&Ze(l,"iterate",as),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Oe(e,n?{add:go("add"),set:go("set"),delete:go("delete"),clear:go("clear")}:{add(s){const r=ne(this),o=mo(r),a=ne(s),l=!t&&!Tn(s)&&!vi(s)?a:s;return o.has.call(r,l)||jn(s,l)&&o.has.call(r,s)||jn(a,l)&&o.has.call(r,a)||(r.add(l),fi(r,"add",l,l)),this},set(s,r){!t&&!Tn(r)&&!vi(r)&&(r=ne(r));const o=ne(this),{has:a,get:l}=mo(o);let c=a.call(o,s);c||(s=ne(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?jn(r,u)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=ne(this),{has:o,get:a}=mo(r);let l=o.call(r,s);l||(s=ne(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=ne(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Jm(s,n,t)}),e}function $c(n,t){const e=Qm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(oe(e,s)&&s in i?e:i,s,r)}const tg={get:$c(!1,!1)},eg={get:$c(!1,!0)},ng={get:$c(!0,!1)};const xd=new WeakMap,yd=new WeakMap,Md=new WeakMap,ig=new WeakMap;function sg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kc(n){return vi(n)?n:Zc(n,!1,$m,tg,xd)}function rg(n){return Zc(n,!1,Zm,eg,yd)}function jl(n){return Zc(n,!0,Km,ng,Md)}function Zc(n,t,e,i,s){if(!le(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=sg(Cm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function ls(n){return vi(n)?ls(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function Tn(n){return!!(n&&n.__v_isShallow)}function Jc(n){return n?!!n.__v_raw:!1}function ne(n){const t=n&&n.__v_raw;return t?ne(t):n}function og(n){return!oe(n,"__v_skip")&&Object.isExtensible(n)&&sd(n,"__v_skip",!0),n}const kn=n=>le(n)?Kc(n):n,sr=n=>le(n)?jl(n):n;function Qe(n){return n?n.__v_isRef===!0:!1}function me(n){return ag(n,!1)}function ag(n,t){return Qe(n)?n:new lg(n,t)}class lg{constructor(t,e){this.dep=new Yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ne(t),this._value=e?t:kn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Tn(t)||vi(t);t=i?t:ne(t),jn(t,e)&&(this._rawValue=t,this._value=i?t:kn(t),this.dep.trigger())}}function cg(n){return Qe(n)?n.value:n}const ug={get:(n,t,e)=>t==="__v_raw"?n:cg(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Qe(s)&&!Qe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Sd(n){return ls(n)?n:new Proxy(n,ug)}class hg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return ud(this,!0),!0}get value(){const t=this.dep.track();return dd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function fg(n,t,e=!1){let i,s;return Yt(n)?i=n:(i=n.get,s=n.set),new hg(i,s,e)}const _o={},aa=new WeakMap;let Qi;function dg(n,t=!1,e=Qi){if(e){let i=aa.get(e);i||aa.set(e,i=[]),i.push(n)}}function pg(n,t,e=de){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:Tn(b)||s===!1||s===0?di(b,1):di(b);let u,h,f,m,g=!1,_=!1;if(Qe(n)?(h=()=>n.value,g=Tn(n)):ls(n)?(h=()=>c(n),g=!0):Ht(n)?(_=!0,g=n.some(b=>ls(b)||Tn(b)),h=()=>n.map(b=>{if(Qe(b))return b.value;if(ls(b))return c(b);if(Yt(b))return l?l(b,2):b()})):Yt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){gi();try{f()}finally{_i()}}const b=Qi;Qi=u;try{return l?l(n,3,[m]):n(m)}finally{Qi=b}}:h=Kn,t&&s){const b=h,L=s===!0?1/0:s;h=()=>di(b(),L)}const p=Hm(),d=()=>{u.stop(),p&&p.active&&Hc(p.effects,u)};if(r&&t){const b=t;t=(...L)=>{const R=b(...L);return d(),R}}let M=_?new Array(n.length).fill(_o):_o;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const L=u.run();if(b||s||g||(_?L.some((R,C)=>jn(R,M[C])):jn(L,M))){f&&f();const R=Qi;Qi=u;try{const C=[L,M===_o?void 0:_&&M[0]===_o?[]:M,m];M=L,l?l(t,3,C):t(...C)}finally{Qi=R}}}else u.run()};return a&&a(y),u=new ld(h),u.scheduler=o?()=>o(y,!1):y,m=b=>dg(b,!1,u),f=u.onStop=()=>{const b=aa.get(u);if(b){if(l)l(b,4);else for(const L of b)L();aa.delete(u)}},t?i?y(!0):M=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function di(n,t=1/0,e){if(t<=0||!le(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Qe(n))di(n.value,t,e);else if(Ht(n))for(let i=0;i<n.length;i++)di(n[i],t,e);else if(Qf(n)||Ks(n))n.forEach(i=>{di(i,t,e)});else if(nd(n)){for(const i in n)di(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],t,e)}return n}function so(n,t,e,i){try{return i?n(...i):n()}catch(s){Pa(s,t,e)}}function Rn(n,t,e,i){if(Yt(n)){const s=so(n,t,e,i);return s&&td(s)&&s.catch(r=>{Pa(r,t,e)}),s}if(Ht(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],t,e,i));return s}}function Pa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||de;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){gi(),so(r,null,10,[n,l,c]),_i();return}}mg(n,e,s,i,o)}function mg(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const rn=[];let Gn=-1;const Js=[];let Pi=null,qs=0;const bd=Promise.resolve();let la=null;function gg(n){const t=la||bd;return n?t.then(this?n.bind(this):n):t}function _g(n){let t=Gn+1,e=rn.length;for(;t<e;){const i=t+e>>>1,s=rn[i],r=jr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Qc(n){if(!(n.flags&1)){const t=jr(n),e=rn[rn.length-1];!e||!(n.flags&2)&&t>=jr(e)?rn.push(n):rn.splice(_g(t),0,n),n.flags|=1,Ed()}}function Ed(){la||(la=bd.then(Td))}function vg(n){Ht(n)?Js.push(...n):Pi&&n.id===-1?Pi.splice(qs+1,0,n):n.flags&1||(Js.push(n),n.flags|=1),Ed()}function zu(n,t,e=Gn+1){for(;e<rn.length;e++){const i=rn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;rn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function wd(n){if(Js.length){const t=[...new Set(Js)].sort((e,i)=>jr(e)-jr(i));if(Js.length=0,Pi){Pi.push(...t);return}for(Pi=t,qs=0;qs<Pi.length;qs++){const e=Pi[qs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Pi=null,qs=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Td(n){try{for(Gn=0;Gn<rn.length;Gn++){const t=rn[Gn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),so(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Gn<rn.length;Gn++){const t=rn[Gn];t&&(t.flags&=-2)}Gn=-1,rn.length=0,wd(),la=null,(rn.length||Js.length)&&Td()}}let wn=null,Ad=null;function ca(n){const t=wn;return wn=n,Ad=n&&n.type.__scopeId||null,t}function Rd(n,t=wn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&fa(-1);const r=ca(t),o=cs.length;let a;try{a=n(...s)}finally{for(let l=cs.length;l>o;l--)ip();ca(r),i._d&&fa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Hi(n,t){if(wn===null)return n;const e=Na(wn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=de]=t[s];r&&(Yt(r)&&(r={mounted:r,updated:r}),r.deep&&di(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Vi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(gi(),Rn(l,e,8,[n.el,a,n,t]),_i())}}function xg(n,t){if(an){let e=an.provides;const i=an.parent&&an.parent.provides;i===e&&(e=an.provides=Object.create(i)),e[n]=t}}function Yo(n,t,e=!1){const i=ap();if(i||Qs){let s=Qs?Qs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Yt(t)?t.call(i&&i.proxy):t}}const yg=Symbol.for("v-scx"),Mg=()=>Yo(yg);function Ja(n,t,e){return Cd(n,t,e)}function Cd(n,t,e=de){const{immediate:i,deep:s,flush:r,once:o}=e,a=Oe({},e),l=t&&i||!t&&r!=="post";let c;if(Kr){if(r==="sync"){const m=Mg();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Kn,m.resume=Kn,m.pause=Kn,m}}const u=an;a.call=(m,g,_)=>Rn(m,u,g,_);let h=!1;r==="post"?a.scheduler=m=>{un(m,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,g)=>{g?m():Qc(m)}),a.augmentJob=m=>{t&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=pg(n,t,a);return Kr&&(c?c.push(f):l&&f()),f}function Sg(n,t,e){const i=this.proxy,s=be(n)?n.includes(".")?Pd(i,n):()=>i[n]:n.bind(i,i);let r;Yt(t)?r=t:(r=t.handler,e=t);const o=ro(this),a=Cd(s,r.bind(i),e);return o(),a}function Pd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const bg=Symbol("_vte"),Ld=n=>n.__isTeleport,En=Symbol("_leaveCb"),xr=Symbol("_enterCb");function Eg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tu(()=>{n.isMounted=!0}),zd(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],Id={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},Dd=n=>{const t=n.subTree;return t.component?Dd(t.component):t},wg={name:"BaseTransition",props:Id,setup(n,{slots:t}){const e=ap(),i=Eg();return()=>{const s=t.default&&Od(t.default(),!0),r=s&&s.length?Ud(s):e.subTree?Un():void 0;if(!r)return;const o=ne(n),{mode:a}=o;if(i.isLeaving)return Qa(r);const l=ku(r);if(!l)return Qa(r);let c=Yl(l,o,i,e,h=>c=h);l.type!==on&&Yr(l,c);let u=e.subTree&&ku(e.subTree);if(u&&u.type!==on&&!es(u,l)&&Dd(e).type!==on){let h=Yl(u,o,i,e);if(Yr(u,h),a==="out-in"&&l.type!==on)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},Qa(r);a==="in-out"&&l.type!==on?h.delayLeave=(f,m,g)=>{const _=Nd(i,u);_[String(u.key)]=u,f[En]=()=>{m(),f[En]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Ud(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==on){t=e;break}}return t}const Tg=wg;function Nd(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Yl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:m,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:d,onAfterAppear:M,onAppearCancelled:y}=t,b=String(n.key),L=Nd(e,n),R=(w,E)=>{w&&Rn(w,i,9,E)},C=(w,E)=>{const P=E[1];R(w,E),Ht(w)?w.every(D=>D.length<=1)&&P():w.length<=1&&P()},U={mode:o,persisted:a,beforeEnter(w){let E=l;if(!e.isMounted)if(r)E=p||l;else return;w[En]&&w[En](!0);const P=L[b];P&&es(n,P)&&P.el[En]&&P.el[En](),R(E,[w])},enter(w){if(L[b]===n)return;let E=c,P=u,D=h;if(!e.isMounted)if(r)E=d||c,P=M||u,D=y||h;else return;let G=!1;w[xr]=rt=>{G||(G=!0,rt?R(D,[w]):R(P,[w]),U.delayedLeave&&U.delayedLeave(),w[xr]=void 0)};const Z=w[xr].bind(null,!1);E?C(E,[w,Z]):Z()},leave(w,E){const P=String(n.key);if(w[xr]&&w[xr](!0),e.isUnmounting)return E();R(f,[w]);let D=!1;w[En]=Z=>{D||(D=!0,E(),Z?R(_,[w]):R(g,[w]),w[En]=void 0,L[P]===n&&delete L[P])};const G=w[En].bind(null,!1);L[P]=n,m?C(m,[w,G]):G()},clone(w){const E=Yl(w,t,e,i,s);return s&&s(E),E}};return U}function Qa(n){if(La(n))return n=Oi(n),n.children=null,n}function ku(n){if(!La(n))return Ld(n.type)&&n.children?Ud(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Yt(e.default))return e.default()}}function Yr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Yr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Od(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===hn?(o.patchFlag&128&&s++,i=i.concat(Od(o.children,t,a))):(t||o.type!==on)&&i.push(a!=null?Oi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ag(n,t){return Yt(n)?Oe({name:n.name},t,{setup:n}):n}function Fd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ua=new WeakMap;function kr(n,t,e,i,s=!1){if(Ht(n)){n.forEach((_,p)=>kr(_,t&&(Ht(t)?t[p]:t),e,i,s));return}if(Hr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&kr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Na(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState,f=ne(h),m=h===de?Jf:_=>Hu(u,_)?!1:oe(f,_),g=(_,p)=>!(p&&Hu(u,p));if(c!=null&&c!==l){if(Vu(t),be(c))u[c]=null,m(c)&&(h[c]=null);else if(Qe(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Yt(l))so(l,a,12,[o,u]);else{const _=be(l),p=Qe(l);if(_||p){const d=()=>{if(n.f){const M=_?m(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ht(M)&&Hc(M,r);else if(Ht(M))M.includes(r)||M.push(r);else if(_)u[l]=[r],m(l)&&(h[l]=u[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else _?(u[l]=o,m(l)&&(h[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const M=()=>{d(),ua.delete(n)};M.id=-1,ua.set(n,M),un(M,e)}else Vu(n),d()}}}function Vu(n){const t=ua.get(n);t&&(t.flags|=8,ua.delete(n))}Ra().requestIdleCallback;Ra().cancelIdleCallback;const Hr=n=>!!n.type.__asyncLoader,La=n=>n.type.__isKeepAlive;function Rg(n,t){Bd(n,"a",t)}function Cg(n,t){Bd(n,"da",t)}function Bd(n,t,e=an){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ia(t,i,e),e){let s=e.parent;for(;s&&s.parent;)La(s.parent.vnode)&&Pg(i,t,e,s),s=s.parent}}function Pg(n,t,e,i){const s=Ia(t,n,i,!0);eu(()=>{Hc(i[t],s)},e)}function Ia(n,t,e=an,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{gi();const a=ro(e),l=Rn(t,e,n,o);return a(),_i(),l});return i?s.unshift(r):s.push(r),r}}const yi=n=>(t,e=an)=>{(!Kr||n==="sp")&&Ia(n,(...i)=>t(...i),e)},Lg=yi("bm"),tu=yi("m"),Ig=yi("bu"),Dg=yi("u"),zd=yi("bum"),eu=yi("um"),Ug=yi("sp"),Ng=yi("rtg"),Og=yi("rtc");function Fg(n,t=an){Ia("ec",n,t)}const Bg=Symbol.for("v-ndc");function vo(n,t,e,i){let s;const r=e,o=Ht(n);if(o||be(n)){const a=o&&ls(n);let l=!1,c=!1;a&&(l=!Tn(n),c=vi(n),n=Ca(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?sr(kn(n[u])):kn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(le(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const $l=n=>n?lp(n)?Na(n):$l(n.parent):null,Vr=Oe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$l(n.parent),$root:n=>$l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Hd(n),$forceUpdate:n=>n.f||(n.f=()=>{Qc(n.update)}),$nextTick:n=>n.n||(n.n=gg.bind(n.proxy)),$watch:n=>Sg.bind(n)}),tl=(n,t)=>n!==de&&!n.__isScriptSetup&&oe(n,t),zg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(tl(i,t))return o[t]=1,i[t];if(s!==de&&oe(s,t))return o[t]=2,s[t];if(oe(r,t))return o[t]=3,r[t];if(e!==de&&oe(e,t))return o[t]=4,e[t];Kl&&(o[t]=0)}}const c=Vr[t];let u,h;if(c)return t==="$attrs"&&Ze(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==de&&oe(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,oe(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return tl(s,t)?(s[t]=e,!0):i!==de&&oe(i,t)?(i[t]=e,!0):oe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==de&&a[0]!=="$"&&oe(n,a)||tl(t,a)||oe(r,a)||oe(i,a)||oe(Vr,a)||oe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:oe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Gu(n){return Ht(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Kl=!0;function kg(n){const t=Hd(n),e=n.proxy,i=n.ctx;Kl=!1,t.beforeCreate&&Wu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:_,deactivated:p,beforeDestroy:d,beforeUnmount:M,destroyed:y,unmounted:b,render:L,renderTracked:R,renderTriggered:C,errorCaptured:U,serverPrefetch:w,expose:E,inheritAttrs:P,components:D,directives:G,filters:Z}=t;if(c&&Hg(c,i,null),o)for(const it in o){const j=o[it];Yt(j)&&(i[it]=j.bind(e))}if(s){const it=s.call(e,e);le(it)&&(n.data=Kc(it))}if(Kl=!0,r)for(const it in r){const j=r[it],vt=Yt(j)?j.bind(e,e):Yt(j.get)?j.get.bind(e,e):Kn,xt=!Yt(j)&&Yt(j.set)?j.set.bind(e):Kn,pt=Zo({get:vt,set:xt});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Lt=>pt.value=Lt})}if(a)for(const it in a)kd(a[it],i,e,it);if(l){const it=Yt(l)?l.call(e):l;Reflect.ownKeys(it).forEach(j=>{xg(j,it[j])})}u&&Wu(u,n,"c");function $(it,j){Ht(j)?j.forEach(vt=>it(vt.bind(e))):j&&it(j.bind(e))}if($(Lg,h),$(tu,f),$(Ig,m),$(Dg,g),$(Rg,_),$(Cg,p),$(Fg,U),$(Og,R),$(Ng,C),$(zd,M),$(eu,b),$(Ug,w),Ht(E))if(E.length){const it=n.exposed||(n.exposed={});E.forEach(j=>{Object.defineProperty(it,j,{get:()=>e[j],set:vt=>e[j]=vt,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Kn&&(n.render=L),P!=null&&(n.inheritAttrs=P),D&&(n.components=D),G&&(n.directives=G),w&&Fd(n)}function Hg(n,t,e=Kn){Ht(n)&&(n=Zl(n));for(const i in n){const s=n[i];let r;le(s)?"default"in s?r=Yo(s.from||i,s.default,!0):r=Yo(s.from||i):r=Yo(s),Qe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Wu(n,t,e){Rn(Ht(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function kd(n,t,e,i){let s=i.includes(".")?Pd(e,i):()=>e[i];if(be(n)){const r=t[n];Yt(r)&&Ja(s,r)}else if(Yt(n))Ja(s,n.bind(e));else if(le(n))if(Ht(n))n.forEach(r=>kd(r,t,e,i));else{const r=Yt(n.handler)?n.handler.bind(e):t[n.handler];Yt(r)&&Ja(s,r,n)}}function Hd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ha(l,c,o,!0)),ha(l,t,o)),le(t)&&r.set(t,l),l}function ha(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ha(n,r,e,!0),s&&s.forEach(o=>ha(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Vg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Vg={data:Xu,props:qu,emits:qu,methods:Dr,computed:Dr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Dr,directives:Dr,watch:Wg,provide:Xu,inject:Gg};function Xu(n,t){return t?n?function(){return Oe(Yt(n)?n.call(this,this):n,Yt(t)?t.call(this,this):t)}:t:n}function Gg(n,t){return Dr(Zl(n),Zl(t))}function Zl(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function nn(n,t){return n?[...new Set([].concat(n,t))]:t}function Dr(n,t){return n?Oe(Object.create(null),n,t):t}function qu(n,t){return n?Ht(n)&&Ht(t)?[...new Set([...n,...t])]:Oe(Object.create(null),Gu(n),Gu(t??{})):t}function Wg(n,t){if(!n)return t;if(!t)return n;const e=Oe(Object.create(null),n);for(const i in t)e[i]=nn(n[i],t[i]);return e}function Vd(){return{app:null,config:{isNativeTag:Jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xg=0;function qg(n,t){return function(i,s=null){Yt(i)||(i=Oe({},i)),s!=null&&!le(s)&&(s=null);const r=Vd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Xg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:E0,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Yt(u.install)?(o.add(u),u.install(c,...h)):Yt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const m=c._ceVNode||ln(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,Na(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Qs;Qs=c;try{return u()}finally{Qs=h}}};return c}}let Qs=null;const jg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Bn(t)}Modifiers`]||n[`${_s(t)}Modifiers`];function Yg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||de;let s=e;const r=t.startsWith("update:"),o=r&&jg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>be(u)?u.trim():u)),o.number&&(s=e.map(Gc)));let a,l=i[a=ja(t)]||i[a=ja(Bn(t))];!l&&r&&(l=i[a=ja(_s(t))]),l&&Rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(c,n,6,s)}}const $g=new WeakMap;function Gd(n,t,e=!1){const i=e?$g:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Yt(n)){const l=c=>{const u=Gd(c,t,!0);u&&(a=!0,Oe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(le(n)&&i.set(n,null),null):(Ht(r)?r.forEach(l=>o[l]=null):Oe(o,r),le(n)&&i.set(n,o),o)}function Da(n,t){return!n||!wa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),oe(n,t[0].toLowerCase()+t.slice(1))||oe(n,_s(t))||oe(n,t))}function ju(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:g,inheritAttrs:_}=n,p=ca(n);let d,M;try{if(e.shapeFlag&4){const b=s||i,L=b;d=Xn(c.call(L,b,u,h,m,f,g)),M=a}else{const b=t;d=Xn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),M=t.props?a:Kg(a)}}catch(b){cs.length=0,Pa(b,n,1),d=ln(on)}let y=d;if(M&&_!==!1){const b=Object.keys(M),{shapeFlag:L}=y;b.length&&L&7&&(r&&b.some(Ta)&&(M=Zg(M,r)),y=Oi(y,M,!1,!0))}return e.dirs&&(y=Oi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Yr(y,e.transition),d=y,ca(p),d}const Kg=n=>{let t;for(const e in n)(e==="class"||e==="style"||wa(e))&&((t||(t={}))[e]=n[e]);return t},Zg=(n,t)=>{const e={};for(const i in n)(!Ta(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Jg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Yu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Wd(o,i,f)&&!Da(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yu(i,o,c):!0:!!o;return!1}function Yu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Wd(t,n,r)&&!Da(e,r))return!0}return!1}function Wd(n,t,e){const i=n[e],s=t[e];return e==="style"&&le(i)&&le(s)?!Wc(i,s):i!==s}function Qg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Xd={},qd=()=>Object.create(Xd),jd=n=>Object.getPrototypeOf(n)===Xd;function t0(n,t,e,i=!1){const s={},r=qd();n.propsDefaults=Object.create(null),Yd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:rg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function e0(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ne(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Da(n.emitsOptions,f))continue;const m=t[f];if(l)if(oe(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const g=Bn(f);s[g]=Jl(l,a,g,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{Yd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!oe(t,h)&&((u=_s(h))===h||!oe(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Jl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!oe(t,h))&&(delete r[h],c=!0)}c&&fi(n.attrs,"set","")}function Yd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Fr(l))continue;const c=t[l];let u;s&&oe(s,u=Bn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Da(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ne(e),c=a||de;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Jl(s,l,h,c[h],n,!oe(c,h))}}return o}function Jl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Yt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=ro(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(e))&&(i=!0))}return i}const n0=new WeakMap;function $d(n,t,e=!1){const i=e?n0:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Yt(n)){const u=h=>{l=!0;const[f,m]=$d(h,t,!0);Oe(o,f),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return le(n)&&i.set(n,$s),$s;if(Ht(r))for(let u=0;u<r.length;u++){const h=Bn(r[u]);$u(h)&&(o[h]=de)}else if(r)for(const u in r){const h=Bn(u);if($u(h)){const f=r[u],m=o[h]=Ht(f)||Yt(f)?{type:f}:Oe({},f),g=m.type;let _=!1,p=!0;if(Ht(g))for(let d=0;d<g.length;++d){const M=g[d],y=Yt(M)&&M.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(p=!1)}else _=Yt(g)&&g.name==="Boolean";m[0]=_,m[1]=p,(_||oe(m,"default"))&&a.push(h)}}const c=[o,a];return le(n)&&i.set(n,c),c}function $u(n){return n[0]!=="$"&&!Fr(n)}const nu=n=>n==="_"||n==="_ctx"||n==="$stable",iu=n=>Ht(n)?n.map(Xn):[Xn(n)],i0=(n,t,e)=>{if(t._n)return t;const i=Rd((...s)=>iu(t(...s)),e);return i._c=!1,i},Kd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(nu(s))continue;const r=n[s];if(Yt(r))t[s]=i0(s,r,i);else if(r!=null){const o=iu(r);t[s]=()=>o}}},Zd=(n,t)=>{const e=iu(t);n.slots.default=()=>e},Jd=(n,t,e)=>{for(const i in t)(e||!nu(i))&&(n[i]=t[i])},s0=(n,t,e)=>{const i=n.slots=qd();if(n.vnode.shapeFlag&32){const s=t._;s?(Jd(i,t,e),e&&sd(i,"_",s,!0)):Kd(t,i)}else t&&Zd(n,t)},r0=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=de;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Jd(s,t,e):(r=!t.$stable,Kd(t,s)),o=t}else t&&(Zd(n,t),o={default:1});if(r)for(const a in s)!nu(a)&&o[a]==null&&delete s[a]},un=u0;function o0(n){return a0(n)}function a0(n,t){const e=Ra();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Kn,insertStaticContent:g}=n,_=(v,O,q,nt=null,F=null,H=null,I=void 0,k=null,T=!!O.dynamicChildren)=>{if(v===O)return;v&&!es(v,O)&&(nt=_t(v),Lt(v,F,H,!0),v=null),O.patchFlag===-2&&(T=!1,O.dynamicChildren=null);const{type:x,ref:B,shapeFlag:W}=O;switch(x){case Ua:p(v,O,q,nt);break;case on:d(v,O,q,nt);break;case $o:v==null&&M(O,q,nt,I);break;case hn:D(v,O,q,nt,F,H,I,k,T);break;default:W&1?L(v,O,q,nt,F,H,I,k,T):W&6?G(v,O,q,nt,F,H,I,k,T):(W&64||W&128)&&x.process(v,O,q,nt,F,H,I,k,T,Bt)}B!=null&&F?kr(B,v&&v.ref,H,O||v,!O):B==null&&v&&v.ref!=null&&kr(v.ref,null,H,v,!0)},p=(v,O,q,nt)=>{if(v==null)i(O.el=a(O.children),q,nt);else{const F=O.el=v.el;O.children!==v.children&&c(F,O.children)}},d=(v,O,q,nt)=>{v==null?i(O.el=l(O.children||""),q,nt):O.el=v.el},M=(v,O,q,nt)=>{[v.el,v.anchor]=g(v.children,O,q,nt,v.el,v.anchor)},y=({el:v,anchor:O},q,nt)=>{let F;for(;v&&v!==O;)F=f(v),i(v,q,nt),v=F;i(O,q,nt)},b=({el:v,anchor:O})=>{let q;for(;v&&v!==O;)q=f(v),s(v),v=q;s(O)},L=(v,O,q,nt,F,H,I,k,T)=>{if(O.type==="svg"?I="svg":O.type==="math"&&(I="mathml"),v==null)R(O,q,nt,F,H,I,k,T);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),w(v,O,F,H,I,k,T)}finally{x&&x._endPatch()}}},R=(v,O,q,nt,F,H,I,k)=>{let T,x;const{props:B,shapeFlag:W,transition:J,dirs:K}=v;if(T=v.el=o(v.type,H,B&&B.is,B),W&8?u(T,v.children):W&16&&U(v.children,T,null,nt,F,el(v,H),I,k),K&&Vi(v,null,nt,"created"),C(T,v,v.scopeId,I,nt),B){for(const ct in B)ct!=="value"&&!Fr(ct)&&r(T,ct,null,B[ct],H,nt);"value"in B&&r(T,"value",null,B.value,H),(x=B.onVnodeBeforeMount)&&Vn(x,nt,v)}K&&Vi(v,null,nt,"beforeMount");const mt=l0(F,J);mt&&J.beforeEnter(T),i(T,O,q),((x=B&&B.onVnodeMounted)||mt||K)&&un(()=>{x&&Vn(x,nt,v),mt&&J.enter(T),K&&Vi(v,null,nt,"mounted")},F)},C=(v,O,q,nt,F)=>{if(q&&m(v,q),nt)for(let H=0;H<nt.length;H++)m(v,nt[H]);if(F){let H=F.subTree;if(O===H||np(H.type)&&(H.ssContent===O||H.ssFallback===O)){const I=F.vnode;C(v,I,I.scopeId,I.slotScopeIds,F.parent)}}},U=(v,O,q,nt,F,H,I,k,T=0)=>{for(let x=T;x<v.length;x++){const B=v[x]=k?ui(v[x]):Xn(v[x]);_(null,B,O,q,nt,F,H,I,k)}},w=(v,O,q,nt,F,H,I)=>{const k=O.el=v.el;let{patchFlag:T,dynamicChildren:x,dirs:B}=O;T|=v.patchFlag&16;const W=v.props||de,J=O.props||de;let K;if(q&&Gi(q,!1),(K=J.onVnodeBeforeUpdate)&&Vn(K,q,O,v),B&&Vi(O,v,q,"beforeUpdate"),q&&Gi(q,!0),x&&(!v.dynamicChildren||v.dynamicChildren.length!==x.length)&&(T=0,I=!1,x=null),(W.innerHTML&&J.innerHTML==null||W.textContent&&J.textContent==null)&&u(k,""),x?E(v.dynamicChildren,x,k,q,nt,el(O,F),H):I||j(v,O,k,null,q,nt,el(O,F),H,!1),T>0){if(T&16)P(k,W,J,q,F);else if(T&2&&W.class!==J.class&&r(k,"class",null,J.class,F),T&4&&r(k,"style",W.style,J.style,F),T&8){const mt=O.dynamicProps;for(let ct=0;ct<mt.length;ct++){const ht=mt[ct],Tt=W[ht],lt=J[ht];(lt!==Tt||ht==="value")&&r(k,ht,Tt,lt,F,q)}}T&1&&v.children!==O.children&&u(k,O.children)}else!I&&x==null&&P(k,W,J,q,F);((K=J.onVnodeUpdated)||B)&&un(()=>{K&&Vn(K,q,O,v),B&&Vi(O,v,q,"updated")},nt)},E=(v,O,q,nt,F,H,I)=>{for(let k=0;k<O.length;k++){const T=v[k],x=O[k],B=T.el&&(T.type===hn||!es(T,x)||T.shapeFlag&198)?h(T.el):q;_(T,x,B,null,nt,F,H,I,!0)}},P=(v,O,q,nt,F)=>{if(O!==q){if(O!==de)for(const H in O)!Fr(H)&&!(H in q)&&r(v,H,O[H],null,F,nt);for(const H in q){if(Fr(H))continue;const I=q[H],k=O[H];I!==k&&H!=="value"&&r(v,H,k,I,F,nt)}"value"in q&&r(v,"value",O.value,q.value,F)}},D=(v,O,q,nt,F,H,I,k,T)=>{const x=O.el=v?v.el:a(""),B=O.anchor=v?v.anchor:a("");let{patchFlag:W,dynamicChildren:J,slotScopeIds:K}=O;K&&(k=k?k.concat(K):K),v==null?(i(x,q,nt),i(B,q,nt),U(O.children||[],q,B,F,H,I,k,T)):W>0&&W&64&&J&&v.dynamicChildren&&v.dynamicChildren.length===J.length?(E(v.dynamicChildren,J,q,F,H,I,k),(O.key!=null||F&&O===F.subTree)&&Qd(v,O,!0)):j(v,O,q,B,F,H,I,k,T)},G=(v,O,q,nt,F,H,I,k,T)=>{O.slotScopeIds=k,v==null?O.shapeFlag&512?F.ctx.activate(O,q,nt,I,T):Z(O,q,nt,F,H,I,T):rt(v,O,T)},Z=(v,O,q,nt,F,H,I)=>{const k=v.component=_0(v,nt,F);if(La(v)&&(k.ctx.renderer=Bt),v0(k,!1,I),k.asyncDep){if(F&&F.registerDep(k,$,I),!v.el){const T=k.subTree=ln(on);d(null,T,O,q),v.placeholder=T.el}}else $(k,v,O,q,F,H,I)},rt=(v,O,q)=>{const nt=O.component=v.component;if(Jg(v,O,q))if(nt.asyncDep&&!nt.asyncResolved){it(nt,O,q);return}else nt.next=O,nt.update();else O.el=v.el,nt.vnode=O},$=(v,O,q,nt,F,H,I)=>{const k=()=>{if(v.isMounted){let{next:W,bu:J,u:K,parent:mt,vnode:ct}=v;{const Vt=tp(v);if(Vt){W&&(W.el=ct.el,it(v,W,I)),Vt.asyncDep.then(()=>{un(()=>{v.isUnmounted||x()},F)});return}}let ht=W,Tt;Gi(v,!1),W?(W.el=ct.el,it(v,W,I)):W=ct,J&&jo(J),(Tt=W.props&&W.props.onVnodeBeforeUpdate)&&Vn(Tt,mt,W,ct),Gi(v,!0);const lt=ju(v),Mt=v.subTree;v.subTree=lt,_(Mt,lt,h(Mt.el),_t(Mt),v,F,H),W.el=lt.el,ht===null&&Qg(v,lt.el),K&&un(K,F),(Tt=W.props&&W.props.onVnodeUpdated)&&un(()=>Vn(Tt,mt,W,ct),F)}else{let W;const{el:J,props:K}=O,{bm:mt,m:ct,parent:ht,root:Tt,type:lt}=v,Mt=Hr(O);Gi(v,!1),mt&&jo(mt),!Mt&&(W=K&&K.onVnodeBeforeMount)&&Vn(W,ht,O),Gi(v,!0);{Tt.ce&&Tt.ce._hasShadowRoot()&&Tt.ce._injectChildStyle(lt,v.parent?v.parent.type:void 0);const Vt=v.subTree=ju(v);_(null,Vt,q,nt,v,F,H),O.el=Vt.el}if(ct&&un(ct,F),!Mt&&(W=K&&K.onVnodeMounted)){const Vt=O;un(()=>Vn(W,ht,Vt),F)}(O.shapeFlag&256||ht&&Hr(ht.vnode)&&ht.vnode.shapeFlag&256)&&v.a&&un(v.a,F),v.isMounted=!0,O=q=nt=null}};v.scope.on();const T=v.effect=new ld(k);v.scope.off();const x=v.update=T.run.bind(T),B=v.job=T.runIfDirty.bind(T);B.i=v,B.id=v.uid,T.scheduler=()=>Qc(B),Gi(v,!0),x()},it=(v,O,q)=>{O.component=v;const nt=v.vnode.props;v.vnode=O,v.next=null,e0(v,O.props,nt,q),r0(v,O.children,q),gi(),zu(v),_i()},j=(v,O,q,nt,F,H,I,k,T=!1)=>{const x=v&&v.children,B=v?v.shapeFlag:0,W=O.children,{patchFlag:J,shapeFlag:K}=O;if(J>0){if(J&128){xt(x,W,q,nt,F,H,I,k,T);return}else if(J&256){vt(x,W,q,nt,F,H,I,k,T);return}}K&8?(B&16&&ut(x,F,H),W!==x&&u(q,W)):B&16?K&16?xt(x,W,q,nt,F,H,I,k,T):ut(x,F,H,!0):(B&8&&u(q,""),K&16&&U(W,q,nt,F,H,I,k,T))},vt=(v,O,q,nt,F,H,I,k,T)=>{v=v||$s,O=O||$s;const x=v.length,B=O.length,W=Math.min(x,B);let J;for(J=0;J<W;J++){const K=O[J]=T?ui(O[J]):Xn(O[J]);_(v[J],K,q,null,F,H,I,k,T)}x>B?ut(v,F,H,!0,!1,W):U(O,q,nt,F,H,I,k,T,W)},xt=(v,O,q,nt,F,H,I,k,T)=>{let x=0;const B=O.length;let W=v.length-1,J=B-1;for(;x<=W&&x<=J;){const K=v[x],mt=O[x]=T?ui(O[x]):Xn(O[x]);if(es(K,mt))_(K,mt,q,null,F,H,I,k,T);else break;x++}for(;x<=W&&x<=J;){const K=v[W],mt=O[J]=T?ui(O[J]):Xn(O[J]);if(es(K,mt))_(K,mt,q,null,F,H,I,k,T);else break;W--,J--}if(x>W){if(x<=J){const K=J+1,mt=K<B?O[K].el:nt;for(;x<=J;)_(null,O[x]=T?ui(O[x]):Xn(O[x]),q,mt,F,H,I,k,T),x++}}else if(x>J)for(;x<=W;)Lt(v[x],F,H,!0),x++;else{const K=x,mt=x,ct=new Map;for(x=mt;x<=J;x++){const Ct=O[x]=T?ui(O[x]):Xn(O[x]);Ct.key!=null&&ct.set(Ct.key,x)}let ht,Tt=0;const lt=J-mt+1;let Mt=!1,Vt=0;const Ot=new Array(lt);for(x=0;x<lt;x++)Ot[x]=0;for(x=K;x<=W;x++){const Ct=v[x];if(Tt>=lt){Lt(Ct,F,H,!0);continue}let It;if(Ct.key!=null)It=ct.get(Ct.key);else for(ht=mt;ht<=J;ht++)if(Ot[ht-mt]===0&&es(Ct,O[ht])){It=ht;break}It===void 0?Lt(Ct,F,H,!0):(Ot[It-mt]=x+1,It>=Vt?Vt=It:Mt=!0,_(Ct,O[It],q,null,F,H,I,k,T),Tt++)}const wt=Mt?c0(Ot):$s;for(ht=wt.length-1,x=lt-1;x>=0;x--){const Ct=mt+x,It=O[Ct],fe=O[Ct+1],S=Ct+1<B?fe.el||ep(fe):nt;Ot[x]===0?_(null,It,q,S,F,H,I,k,T):Mt&&(ht<0||x!==wt[ht]?pt(It,q,S,2):ht--)}}},pt=(v,O,q,nt,F=null)=>{const{el:H,type:I,transition:k,children:T,shapeFlag:x}=v;if(x&6){pt(v.component.subTree,O,q,nt);return}if(x&128){v.suspense.move(O,q,nt);return}if(x&64){I.move(v,O,q,Bt);return}if(I===hn){i(H,O,q);for(let W=0;W<T.length;W++)pt(T[W],O,q,nt);i(v.anchor,O,q);return}if(I===$o){y(v,O,q);return}if(nt!==2&&x&1&&k)if(nt===0)k.persisted&&!H[En]?i(H,O,q):(k.beforeEnter(H),i(H,O,q),un(()=>k.enter(H),F));else{const{leave:W,delayLeave:J,afterLeave:K}=k,mt=()=>{v.ctx.isUnmounted?s(H):i(H,O,q)},ct=()=>{const ht=H._isLeaving||!!H[En];H._isLeaving&&H[En](!0),k.persisted&&!ht?mt():W(H,()=>{mt(),K&&K()})};J?J(H,mt,ct):ct()}else i(H,O,q)},Lt=(v,O,q,nt=!1,F=!1)=>{const{type:H,props:I,ref:k,children:T,dynamicChildren:x,shapeFlag:B,patchFlag:W,dirs:J,cacheIndex:K,memo:mt}=v;if(W===-2&&(F=!1),k!=null&&(gi(),kr(k,null,q,v,!0),_i()),K!=null&&(O.renderCache[K]=void 0),B&256){O.ctx.deactivate(v);return}const ct=B&1&&J,ht=!Hr(v);let Tt;if(ht&&(Tt=I&&I.onVnodeBeforeUnmount)&&Vn(Tt,O,v),B&6)dt(v.component,q,nt);else{if(B&128){v.suspense.unmount(q,nt);return}ct&&Vi(v,null,O,"beforeUnmount"),B&64?v.type.remove(v,O,q,Bt,nt):x&&!x.hasOnce&&(H!==hn||W>0&&W&64)?ut(x,O,q,!1,!0):(H===hn&&W&384||!F&&B&16)&&ut(T,O,q),nt&&qt(v)}const lt=mt!=null&&K==null;(ht&&(Tt=I&&I.onVnodeUnmounted)||ct||lt)&&un(()=>{Tt&&Vn(Tt,O,v),ct&&Vi(v,null,O,"unmounted"),lt&&(v.el=null)},q)},qt=v=>{const{type:O,el:q,anchor:nt,transition:F}=v;if(O===hn){ot(q,nt);return}if(O===$o){b(v);return}const H=()=>{s(q),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(v.shapeFlag&1&&F&&!F.persisted){const{leave:I,delayLeave:k}=F,T=()=>I(q,H);k?k(v.el,H,T):T()}else H()},ot=(v,O)=>{let q;for(;v!==O;)q=f(v),s(v),v=q;s(O)},dt=(v,O,q)=>{const{bum:nt,scope:F,job:H,subTree:I,um:k,m:T,a:x}=v;Ku(T),Ku(x),nt&&jo(nt),F.stop(),H&&(H.flags|=8,Lt(I,v,O,q)),k&&un(k,O),un(()=>{v.isUnmounted=!0},O)},ut=(v,O,q,nt=!1,F=!1,H=0)=>{for(let I=H;I<v.length;I++)Lt(v[I],O,q,nt,F)},_t=v=>{if(v.shapeFlag&6)return _t(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const O=f(v.anchor||v.el),q=O&&O[bg];return q?f(q):O};let Nt=!1;const Ft=(v,O,q)=>{let nt;v==null?O._vnode&&(Lt(O._vnode,null,null,!0),nt=O._vnode.component):_(O._vnode||null,v,O,null,null,null,q),O._vnode=v,Nt||(Nt=!0,zu(nt),wd(),Nt=!1)},Bt={p:_,um:Lt,m:pt,r:qt,mt:Z,mc:U,pc:j,pbc:E,n:_t,o:n};return{render:Ft,hydrate:void 0,createApp:qg(Ft)}}function el({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Gi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function l0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Qd(n,t,e=!1){const i=n.children,s=t.children;if(Ht(i)&&Ht(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ui(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Qd(o,a)),a.type===Ua&&(a.patchFlag===-1&&(a=s[r]=ui(a)),a.el=o.el),a.type===on&&!a.el&&(a.el=o.el)}}function c0(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function tp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:tp(t)}function Ku(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ep(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ep(t.subTree):null}const np=n=>n.__isSuspense;function u0(n,t){t&&t.pendingBranch?Ht(n)?t.effects.push(...n):t.effects.push(n):vg(n)}const hn=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),$o=Symbol.for("v-stc"),cs=[];let yn=null;function ue(n=!1){cs.push(yn=n?null:[])}function ip(){cs.pop(),yn=cs[cs.length-1]||null}let $r=1;function fa(n,t=!1){$r+=n,n<0&&yn&&t&&(yn.hasOnce=!0)}function sp(n){return n.dynamicChildren=$r>0?yn||$s:null,ip(),$r>0&&yn&&yn.push(n),n}function ge(n,t,e,i,s,r){return sp(gt(n,t,e,i,s,r,!0))}function rp(n,t,e,i,s){return sp(ln(n,t,e,i,s,!0))}function da(n){return n?n.__v_isVNode===!0:!1}function es(n,t){return n.type===t.type&&n.key===t.key}const op=({key:n})=>n??null,Ko=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?be(n)||Qe(n)||Yt(n)?{i:wn,r:n,k:t,f:!!e}:n:null);function gt(n,t=null,e=null,i=0,s=null,r=n===hn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&op(t),ref:t&&Ko(t),scopeId:Ad,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return a?(pa(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=be(e)?8:16),$r>0&&!o&&yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yn.push(l),l}const ln=h0;function h0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Bg)&&(n=on),da(n)){const a=Oi(n,t,!0);return e&&pa(a,e),$r>0&&!r&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(S0(n)&&(n=n.__vccOpts),t){t=f0(t);let{class:a,style:l}=t;a&&!be(a)&&(t.class=ci(a)),le(l)&&(Jc(l)&&!Ht(l)&&(l=Oe({},l)),t.style=Zs(l))}const o=be(n)?1:np(n)?128:Ld(n)?64:le(n)?4:Yt(n)?2:0;return gt(n,t,e,i,s,o,r,!0)}function f0(n){return n?Jc(n)||jd(n)?Oe({},n):n:null}function Oi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?p0(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&op(c),ref:t&&t.ref?e&&r?Ht(r)?r.concat(Ko(t)):[r,Ko(t)]:Ko(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==hn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Oi(n.ssContent),ssFallback:n.ssFallback&&Oi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Yr(u,l.clone(u)),u}function Ur(n=" ",t=0){return ln(Ua,null,n,t)}function d0(n,t){const e=ln($o,null,n);return e.staticCount=t,e}function Un(n="",t=!1){return t?(ue(),rp(on,null,n)):ln(on,null,n)}function Xn(n){return n==null||typeof n=="boolean"?ln(on):Ht(n)?ln(hn,null,n.slice()):da(n)?ui(n):ln(Ua,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Oi(n)}function pa(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),pa(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!jd(t)?t._ctx=wn:s===3&&wn&&(wn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Yt(t)){if(i&65){pa(n,{default:t});return}t={default:t,_ctx:wn},e=32}else t=String(t),i&64?(e=16,t=[Ur(t)]):e=8;n.children=t,n.shapeFlag|=e}function p0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ci([t.class,i.class]));else if(s==="style")t.style=Zs([t.style,i.style]);else if(wa(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ht(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ta(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Vn(n,t,e,i=null){Rn(n,t,7,[e,i])}const m0=Vd();let g0=0;function _0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||m0,r={uid:g0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new km(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$d(i,s),emitsOptions:Gd(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Yg.bind(null,r),n.ce&&n.ce(r),r}let an=null;const ap=()=>an||wn;let ma,Ql;{const n=Ra(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ma=t("__VUE_INSTANCE_SETTERS__",e=>an=e),Ql=t("__VUE_SSR_SETTERS__",e=>Kr=e)}const ro=n=>{const t=an;return ma(n),n.scope.on(),()=>{n.scope.off(),ma(t)}},Zu=()=>{an&&an.scope.off(),ma(null)};function lp(n){return n.vnode.shapeFlag&4}let Kr=!1;function v0(n,t=!1,e=!1){t&&Ql(t);const{props:i,children:s}=n.vnode,r=lp(n);t0(n,i,r,t),s0(n,s,e||t);const o=r?x0(n,t):void 0;return t&&Ql(!1),o}function x0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zg);const{setup:i}=e;if(i){gi();const s=n.setupContext=i.length>1?M0(n):null,r=ro(n),o=so(i,n,0,[n.props,s]),a=td(o);if(_i(),r(),(a||n.sp)&&!Hr(n)&&Fd(n),a){if(o.then(Zu,Zu),t)return o.then(l=>{Ju(n,l)}).catch(l=>{Pa(l,n,0)});n.asyncDep=o}else Ju(n,o)}else cp(n)}function Ju(n,t,e){Yt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:le(t)&&(n.setupState=Sd(t)),cp(n)}function cp(n,t,e){const i=n.type;n.render||(n.render=i.render||Kn);{const s=ro(n);gi();try{kg(n)}finally{_i(),s()}}}const y0={get(n,t){return Ze(n,"get",""),n[t]}};function M0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,y0),slots:n.slots,emit:n.emit,expose:t}}function Na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sd(og(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Vr)return Vr[e](n)},has(t,e){return e in t||e in Vr}})):n.proxy}function S0(n){return Yt(n)&&"__vccOpts"in n}const Zo=(n,t)=>fg(n,t,Kr);function b0(n,t,e){try{fa(-1);const i=arguments.length;return i===2?le(t)&&!Ht(t)?da(t)?ln(n,null,[t]):ln(n,t):ln(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&da(e)&&(e=[e]),ln(n,t,e))}finally{fa(1)}}const E0="3.5.40";let tc;const Qu=typeof window<"u"&&window.trustedTypes;if(Qu)try{tc=Qu.createPolicy("vue",{createHTML:n=>n})}catch{}const up=tc?n=>tc.createHTML(n):n=>n,w0="http://www.w3.org/2000/svg",T0="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,th=li&&li.createElement("template"),A0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?li.createElementNS(w0,n):t==="mathml"?li.createElementNS(T0,n):e?li.createElement(n,{is:e}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{th.innerHTML=up(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=th.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},bi="transition",yr="animation",Zr=Symbol("_vtc"),hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},R0=Oe({},Id,hp),C0=n=>(n.displayName="Transition",n.props=R0,n),P0=C0((n,{slots:t})=>b0(Tg,L0(n),t)),Wi=(n,t=[])=>{Ht(n)?n.forEach(e=>e(...t)):n&&n(...t)},eh=n=>n?Ht(n)?n.some(t=>t.length>1):n.length>1:!1;function L0(n){const t={};for(const D in n)D in hp||(t[D]=n[D]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:m=`${e}-leave-to`}=n,g=I0(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:d,onEnter:M,onEnterCancelled:y,onLeave:b,onLeaveCancelled:L,onBeforeAppear:R=d,onAppear:C=M,onAppearCancelled:U=y}=t,w=(D,G,Z,rt)=>{D._enterCancelled=rt,Xi(D,G?u:a),Xi(D,G?c:o),Z&&Z()},E=(D,G)=>{D._isLeaving=!1,Xi(D,h),Xi(D,m),Xi(D,f),G&&G()},P=D=>(G,Z)=>{const rt=D?C:M,$=()=>w(G,D,Z);Wi(rt,[G,$]),nh(()=>{Xi(G,D?l:r),ei(G,D?u:a),eh(rt)||ih(G,i,_,$)})};return Oe(t,{onBeforeEnter(D){Wi(d,[D]),ei(D,r),ei(D,o)},onBeforeAppear(D){Wi(R,[D]),ei(D,l),ei(D,c)},onEnter:P(!1),onAppear:P(!0),onLeave(D,G){D._isLeaving=!0;const Z=()=>E(D,G);ei(D,h),D._enterCancelled?(ei(D,f),oh(D)):(oh(D),ei(D,f)),nh(()=>{D._isLeaving&&(Xi(D,h),ei(D,m),eh(b)||ih(D,i,p,Z))}),Wi(b,[D,Z])},onEnterCancelled(D){w(D,!1,void 0,!0),Wi(y,[D])},onAppearCancelled(D){w(D,!0,void 0,!0),Wi(U,[D])},onLeaveCancelled(D){E(D),Wi(L,[D])}})}function I0(n){if(n==null)return null;if(le(n))return[nl(n.enter),nl(n.leave)];{const t=nl(n);return[t,t]}}function nl(n){return Im(n)}function ei(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Zr]||(n[Zr]=new Set)).add(t)}function Xi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Zr];e&&(e.delete(t),e.size||(n[Zr]=void 0))}function nh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let D0=0;function ih(n,t,e,i){const s=n._endId=++D0,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=U0(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=m=>{m.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function U0(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${bi}Delay`),r=i(`${bi}Duration`),o=sh(s,r),a=i(`${yr}Delay`),l=i(`${yr}Duration`),c=sh(a,l);let u=null,h=0,f=0;t===bi?o>0&&(u=bi,h=o,f=r.length):t===yr?c>0&&(u=yr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?bi:yr:null,f=u?u===bi?r.length:l.length:0);const m=u===bi&&/\b(?:transform|all)(?:,|$)/.test(i(`${bi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:m}}function sh(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>rh(e)+rh(n[i])))}function rh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function oh(n){return(n?n.ownerDocument:document).body.offsetHeight}function N0(n,t,e){const i=n[Zr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ah=Symbol("_vod"),O0=Symbol("_vsh"),F0=Symbol(""),B0=/(?:^|;)\s*display\s*:/;function z0(n,t,e){const i=n.style,s=be(e);let r=!1;if(e&&!s){if(t)if(be(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Nr(i,a,"")}else for(const o in t)e[o]==null&&Nr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?H0(n,o,!be(t)&&t?t[o]:void 0,a)||Nr(i,o,a):Nr(i,o,"")}}else if(s){if(t!==e){const o=i[F0];o&&(e+=";"+o),i.cssText=e,r=B0.test(e)}}else t&&n.removeAttribute("style");ah in n&&(n[ah]=r?i.display:"",n[O0]&&(i.display="none"))}const lh=/\s*!important$/;function Nr(n,t,e){if(Ht(e))e.forEach(i=>Nr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=k0(n,t);lh.test(e)?n.setProperty(_s(i),e.replace(lh,""),"important"):n[i]=e}}const ch=["Webkit","Moz","ms"],il={};function k0(n,t){const e=il[t];if(e)return e;let i=Bn(t);if(i!=="filter"&&i in n)return il[t]=i;i=id(i);for(let s=0;s<ch.length;s++){const r=ch[s]+i;if(r in n)return il[t]=r}return t}function H0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&be(i)&&e===i}const uh="http://www.w3.org/1999/xlink";function hh(n,t,e,i,s,r=Bm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(uh,t.slice(6,t.length)):n.setAttributeNS(uh,t,e):e==null||r&&!rd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Zn(e)?String(e):e)}function fh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?up(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=rd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function js(n,t,e,i){n.addEventListener(t,e,i)}function V0(n,t,e,i){n.removeEventListener(t,e,i)}const dh=Symbol("_vei");function G0(n,t,e,i,s=null){const r=n[dh]||(n[dh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=q0(t);if(i){const c=r[t]=$0(i,s);js(n,a,c,l)}else o&&(V0(n,a,o,l),r[t]=void 0)}}const W0=/(Once|Passive|Capture)$/,X0=/^on:?(?:Once|Passive|Capture)$/;function q0(n){let t,e;for(;(e=n.match(W0))&&!X0.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):_s(n.slice(2)),t]}let sl=0;const j0=Promise.resolve(),Y0=()=>sl||(j0.then(()=>sl=0),sl=Date.now());function $0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ht(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Rn(c,t,5,a)}}else Rn(s,t,5,[i])};return e.value=n,e.attached=Y0(),e}const ph=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,K0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?N0(n,i,o):t==="style"?z0(n,e,i):wa(t)?Ta(t)||G0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Z0(n,t,i,o))?(fh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hh(n,t,i,o,r,t!=="value")):n._isVueCE&&(J0(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!be(i)))?fh(n,Bn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),hh(n,t,i,o))};function Z0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&ph(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ph(t)&&be(e)?!1:t in n}function J0(n,t){const e=n._def.props;if(!e)return!1;const i=Bn(t);return Array.isArray(e)?e.some(s=>Bn(s)===i):Object.keys(e).some(s=>Bn(s)===i)}const mh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ht(t)?e=>jo(t,e):t};function Q0(n){n.target.composing=!0}function gh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const rl=Symbol("_assign");function _h(n,t,e){return t&&(n=n.trim()),e&&(n=Gc(n)),n}const qi={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[rl]=mh(s);const r=i||s.props&&s.props.type==="number";js(n,t?"change":"input",o=>{o.target.composing||n[rl](_h(n.value,e,r))}),(e||r)&&js(n,"change",()=>{n.value=_h(n.value,e,r)}),t||(js(n,"compositionstart",Q0),js(n,"compositionend",gh),js(n,"change",gh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[rl]=mh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Gc(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},t_=["ctrl","shift","alt","meta"],e_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>t_.some(e=>n[`${e}Key`]&&!t.includes(e))},vh=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=e_[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},n_=Oe({patchProp:K0},A0);let xh;function i_(){return xh||(xh=o0(n_))}const s_=((...n)=>{const t=i_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=o_(i);if(!s)return;const r=t._component;!Yt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,r_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function r_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function o_(n){return be(n)?document.querySelector(n):n}function fp(n,t){return function(){return n.apply(t,arguments)}}const{toString:a_}=Object.prototype,{getPrototypeOf:rr}=Object,{iterator:oo,toStringTag:dp}=Symbol,ga=(({hasOwnProperty:n})=>(t,e)=>n.call(t,e))(Object.prototype),Jr=(n,t)=>{let e=n;const i=[];for(;e!=null&&e!==Object.prototype;){if(i.indexOf(e)!==-1)return!1;if(i.push(e),ga(e,t))return!0;e=rr(e)}return!1},l_=(n,t)=>n!=null&&Jr(n,t)?n[t]:void 0,su=(n=>t=>{const e=a_.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),Cn=n=>(n=n.toLowerCase(),t=>su(t)===n),Oa=n=>t=>typeof t===n,{isArray:hs}=Array,fs=Oa("undefined");function dr(n){return n!==null&&!fs(n)&&n.constructor!==null&&!fs(n.constructor)&&pn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const pp=Cn("ArrayBuffer");function c_(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&pp(n.buffer),t}const u_=Oa("string"),pn=Oa("function"),mp=Oa("number"),pr=n=>n!==null&&typeof n=="object",h_=n=>n===!0||n===!1,Jo=n=>{if(!pr(n))return!1;const t=rr(n);return(t===null||t===Object.prototype||rr(t)===null)&&!Jr(n,dp)&&!Jr(n,oo)},f_=n=>{if(!pr(n)||dr(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},d_=Cn("Date"),p_=Cn("File"),m_=n=>!!(n&&typeof n.uri<"u"),g_=n=>n&&typeof n.getParts<"u",__=Cn("Blob"),v_=Cn("FileList"),x_=Cn("Set"),y_=n=>pr(n)&&pn(n.pipe);function M_(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const yh=M_(),Mh=typeof yh.FormData<"u"?yh.FormData:void 0,S_=n=>{if(!n)return!1;if(Mh&&n instanceof Mh)return!0;const t=rr(n);if(!t||t===Object.prototype||!pn(n.append))return!1;const e=su(n);return e==="formdata"||e==="object"&&pn(n.toString)&&n.toString()==="[object FormData]"},b_=Cn("URLSearchParams"),[E_,w_,T_,A_]=["ReadableStream","Request","Response","Headers"].map(Cn),R_=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ao(n,t,{allOwnKeys:e=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),hs(n))for(i=0,s=n.length;i<s;i++)t.call(null,n[i],i,n);else{if(dr(n))return;const r=e?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],t.call(null,n[a],a,n)}}function gp(n,t){if(dr(n))return null;t=t.toLowerCase();const e=Object.keys(n);let i=e.length,s;for(;i-- >0;)if(s=e[i],t===s.toLowerCase())return s;return null}const ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_p=n=>!fs(n)&&n!==ss;function ec(...n){const{caseless:t,skipUndefined:e}=_p(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=t&&typeof o=="string"&&gp(i,o)||o,l=ga(i,a)?i[a]:void 0;Jo(l)&&Jo(r)?i[a]=ec(l,r):Jo(r)?i[a]=ec({},r):hs(r)?i[a]=r.slice():(!e||!fs(r))&&(i[a]=r)};for(let r=0,o=n.length;r<o;r++){const a=n[r];if(!a||dr(a)||(ao(a,s),typeof a!="object"||hs(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];k_.call(a,u)&&s(a[u],u)}}return i}const C_=(n,t,e,{allOwnKeys:i}={})=>(ao(t,(s,r)=>{e&&pn(s)?Object.defineProperty(n,r,{__proto__:null,value:fp(s,e),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),P_=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),L_=(n,t,e,i)=>{n.prototype=Object.create(t.prototype,i),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:t.prototype}),e&&Object.assign(n.prototype,e)},I_=(n,t,e,i)=>{let s,r,o;const a={};if(t=t||{},n==null)return t;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,t))&&!a[o]&&(t[o]=n[o],a[o]=!0);n=e!==!1&&rr(n)}while(n&&(!e||e(n,t))&&n!==Object.prototype);return t},D_=(n,t,e)=>{n=String(n),(e===void 0||e>n.length)&&(e=n.length),e-=t.length;const i=n.indexOf(t,e);return i!==-1&&i===e},U_=n=>{if(!n)return null;if(hs(n))return n;let t=n.length;if(!mp(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=n[t];return e},N_=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&rr(Uint8Array)),O_=(n,t)=>{const i=(n&&n[oo]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;t.call(n,r[0],r[1])}},F_=(n,t)=>{let e;const i=[];for(;(e=n.exec(t))!==null;)i.push(e);return i},B_=Cn("HTMLFormElement"),z_=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:k_}=Object.prototype,H_=Cn("RegExp"),vp=(n,t)=>{const e=Object.getOwnPropertyDescriptors(n),i={};ao(e,(s,r)=>{let o;(o=t(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},V_=n=>{vp(n,(t,e)=>{if(pn(n)&&["arguments","caller","callee"].includes(e))return!1;const i=n[e];if(pn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},G_=(n,t)=>{const e={},i=s=>{s.forEach(r=>{e[r]=!0})};return hs(n)?i(n):i(String(n).split(t)),e},W_=()=>{},X_=(n,t)=>n!=null&&Number.isFinite(n=+n)?n:t;function q_(n){return!!(n&&pn(n.append)&&n[dp]==="FormData"&&n[oo])}const j_=n=>{const t=new WeakSet,e=i=>{if(pr(i)){if(t.has(i))return;if(dr(i))return i;if(!("toJSON"in i)){t.add(i);let s;if(x_(i)){s=[];for(const r of i){const o=e(r);!fs(o)&&s.push(o)}}else s=hs(i)?[]:{},ao(i,(r,o)=>{const a=e(r);!fs(a)&&(s[o]=a)});return t.delete(i),s}}return i};return e(n)},Y_=Cn("AsyncFunction"),$_=n=>n&&(pr(n)||pn(n))&&pn(n.then)&&pn(n.catch),xp=((n,t)=>n?setImmediate:t?((e,i)=>(ss.addEventListener("message",({source:s,data:r})=>{s===ss&&r===e&&i.length&&i.shift()()},!1),s=>{i.push(s),ss.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",pn(ss.postMessage)),K_=typeof queueMicrotask<"u"?queueMicrotask.bind(ss):typeof process<"u"&&process.nextTick||xp,yp=n=>n!=null&&pn(n[oo]),Z_=n=>n!=null&&Jr(n,oo)&&yp(n),z={isArray:hs,isArrayBuffer:pp,isBuffer:dr,isFormData:S_,isArrayBufferView:c_,isString:u_,isNumber:mp,isBoolean:h_,isObject:pr,isPlainObject:Jo,isEmptyObject:f_,isReadableStream:E_,isRequest:w_,isResponse:T_,isHeaders:A_,isUndefined:fs,isDate:d_,isFile:p_,isReactNativeBlob:m_,isReactNative:g_,isBlob:__,isRegExp:H_,isFunction:pn,isStream:y_,isURLSearchParams:b_,isTypedArray:N_,isFileList:v_,forEach:ao,merge:ec,extend:C_,trim:R_,stripBOM:P_,inherits:L_,toFlatObject:I_,kindOf:su,kindOfTest:Cn,endsWith:D_,toArray:U_,forEachEntry:O_,matchAll:F_,isHTMLForm:B_,hasOwnProperty:ga,hasOwnProp:ga,hasOwnInPrototypeChain:Jr,getSafeProp:l_,reduceDescriptors:vp,freezeMethods:V_,toObjectSet:G_,toCamelCase:z_,noop:W_,toFiniteNumber:X_,findKey:gp,global:ss,isContextDefined:_p,isSpecCompliantForm:q_,toJSONObject:j_,isAsyncFn:Y_,isThenable:$_,setImmediate:xp,asap:K_,isIterable:yp,isSafeIterable:Z_},J_=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Q_=n=>{const t={};let e,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),e=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim();const a=z.hasOwnProp(t,e);!e||a&&z.hasOwnProp(J_,e)||(e==="set-cookie"?a?t[e].push(i):t[e]=[i]:t[e]=a?t[e]+", "+i:i)}),t};function tv(n){let t=0,e=n.length;for(;t<e;){const i=n.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;e>t;){const i=n.charCodeAt(e-1);if(i!==9&&i!==32)break;e-=1}return t===0&&e===n.length?n:n.slice(t,e)}const ev=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),nv=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function ru(n,t){return z.isArray(n)?n.map(e=>ru(e,t)):tv(String(n).replace(t,""))}const iv=n=>ru(n,ev),sv=n=>ru(n,nv);function Mp(n){const t=Object.create(null);return z.forEach(n.toJSON(),(e,i)=>{t[i]=sv(e)}),t}const Sh=Symbol("internals");function Mr(n){return n&&String(n).trim().toLowerCase()}function Qo(n){return n===!1||n==null?n:z.isArray(n)?n.map(Qo):iv(String(n))}function rv(n){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=e.exec(n);)t[i[1]]=i[2];return t}const ov=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function ol(n){let t=0,e=n.length;for(;t<e;){const i=n.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;e>t;){const i=n.charCodeAt(e-1);if(i!==9&&i!==32)break;e-=1}return t===0&&e===n.length?n:n.slice(t,e)}function av(n){const t=n.length-1;if(t<1||n.charCodeAt(0)!==34||n.charCodeAt(t)!==34)return n;let e="";for(let i=1;i<t;i++){const s=n.charCodeAt(i);if(s===34||s===92&&(i+=1,i>=t))return n;e+=n[i]}return e}function lv(n){const t=Object.create(null),e=String(n);let i=0,s=!1,r=!1;function o(a){const l=ol(e.slice(i,a)),c=l.indexOf("=");if(c<1)return;const u=ol(l.slice(0,c));if(!ov.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=ol(l.slice(c+1));t[h]=av(f)}for(let a=0;a<e.length;a++){const l=e.charCodeAt(a);s?r?r=!1:l===92?r=!0:l===34&&(s=!1):l===34?s=!0:(l===44||l===59)&&(o(a),i=a+1)}return o(e.length),t}const cv=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function al(n,t,e,i,s){if(z.isFunction(i))return i.call(this,t,e);if(s&&(t=e),!!z.isString(t)){if(z.isString(i))return t.indexOf(i)!==-1;if(z.isRegExp(i))return i.test(t)}}function uv(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,i)=>e.toUpperCase()+i)}function hv(n,t){const e=z.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+e,{__proto__:null,value:function(s,r,o){return this[i].call(this,t,s,r,o)},configurable:!0})})}let tn=class{constructor(t){t&&this.set(t)}set(t,e,i){const s=this;function r(a,l,c){const u=Mr(l);if(!u)return;const h=z.findKey(s,u);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||l]=Qo(a))}const o=(a,l)=>z.forEach(a,(c,u)=>r(c,u,l));if(z.isPlainObject(t)||t instanceof this.constructor)o(t,e);else if(z.isString(t)&&(t=t.trim())&&!cv(t))o(Q_(t),e);else if(z.isObject(t)&&z.isSafeIterable(t)){let a=Object.create(null),l,c;for(const u of t){if(!z.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],z.hasOwnProp(a,c)?(l=a[c],a[c]=z.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,e)}else t!=null&&r(e,t,i);return this}get(t,e){if(t=Mr(t),t){const i=z.findKey(this,t);if(i){const s=this[i];if(!e)return s;if(e===!0)return rv(s);if(z.isFunction(e))return e.call(this,s,i);if(z.isRegExp(e))return e.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Mr(t),t){const i=z.findKey(this,t);return!!(i&&this[i]!==void 0&&(!e||al(this,this[i],i,e)))}return!1}delete(t,e){const i=this;let s=!1;function r(o){if(o=Mr(o),o){const a=z.findKey(i,o);a&&(!e||al(i,i[a],a,e))&&(delete i[a],s=!0)}}return z.isArray(t)?t.forEach(r):r(t),s}clear(t){const e=Object.keys(this);let i=e.length,s=!1;for(;i--;){const r=e[i];(!t||al(this,this[r],r,t,!0))&&(delete this[r],s=!0)}return s}normalize(t){const e=this,i={};return z.forEach(this,(s,r)=>{const o=z.findKey(i,r);if(o){e[o]=Qo(s),delete e[r];return}const a=t?uv(r):String(r).trim();a!==r&&delete e[r],e[a]=Qo(s),i[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return z.forEach(this,(i,s)=>{i!=null&&i!==!1&&(e[s]=t&&z.isArray(i)?i.join(", "):i)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return z.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return lv(t)}static concat(t,...e){const i=new this(t);return e.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[Sh]=this[Sh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Mr(o);i[a]||(hv(s,o),i[a]=!0)}return z.isArray(t)?t.forEach(r):r(t),this}};tn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(tn.prototype,({value:n},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(i){this[e]=i}}});z.freezeMethods(tn);const _a="[REDACTED ****]";function fv(n){if(z.hasOwnProp(n,"toJSON"))return!0;let t=Object.getPrototypeOf(n);for(;t&&t!==Object.prototype;){if(z.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function dv(n,t){const e=new Set(t.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||z.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof tn&&(r=r.toJSON()),i.push(r);let o;if(z.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);z.isUndefined(c)||(o[l]=c)});else{if(!z.isPlainObject(r)&&fv(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=e.has(a.toLowerCase())?_a:s(l);z.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(n)}function bh(n){try{return String(n)}catch{return""}}function pv(n){return n.errors.map(e=>{try{return e&&e.message?bh(e.message):bh(e)}catch{return""}}).filter(Boolean).join("; ")||n.name||"AggregateError"}let bt=class Sp extends Error{static from(t,e,i,s,r,o){let a=t.message;!a&&z.isArray(t.errors)&&t.errors.length&&(a=pv(t));const l=new Sp(a,e||t.code,i,s,r);return Object.defineProperty(l,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),o&&Object.assign(l,o),l}constructor(t,e,i,s,r){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,e&&(this.code=e),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const t=this.config,e=t&&z.hasOwnProp(t,"redact")?t.redact:void 0,i=z.isArray(e)&&e.length>0?dv(t,e):z.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};bt.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";bt.ERR_BAD_OPTION="ERR_BAD_OPTION";bt.ECONNABORTED="ECONNABORTED";bt.ETIMEDOUT="ETIMEDOUT";bt.ECONNREFUSED="ECONNREFUSED";bt.ERR_NETWORK="ERR_NETWORK";bt.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";bt.ERR_DEPRECATED="ERR_DEPRECATED";bt.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";bt.ERR_BAD_REQUEST="ERR_BAD_REQUEST";bt.ERR_CANCELED="ERR_CANCELED";bt.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";bt.ERR_INVALID_URL="ERR_INVALID_URL";bt.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const mv=null,bp=100;function nc(n){return z.isPlainObject(n)||z.isArray(n)}function Ep(n){return z.endsWith(n,"[]")?n.slice(0,-2):n}function ll(n,t,e){return n?n.concat(t).map(function(s,r){return s=Ep(s),!e&&r?"["+s+"]":s}).join(e?".":""):t}function gv(n){return z.isArray(n)&&!n.some(nc)}const _v=z.toFlatObject(z,{},null,function(t){return/^is[A-Z]/.test(t)});function Fa(n,t,e){if(!z.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,e=z.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,y){return!z.isUndefined(y[M])});const i=e.metaTokens,s=e.visitor||g,r=e.dots,o=e.indexes,a=e.Blob||typeof Blob<"u"&&Blob,l=e.maxDepth===void 0?bp:e.maxDepth,c=a&&z.isSpecCompliantForm(t),u=[];if(!z.isFunction(s))throw new TypeError("visitor must be a function");function h(d){if(d===null)return"";if(z.isDate(d))return d.toISOString();if(z.isBoolean(d))return d.toString();if(!c&&z.isBlob(d))throw new bt("Blob is not supported. Use a Buffer instead.");if(z.isArrayBuffer(d)||z.isTypedArray(d)){if(c&&typeof a=="function")return new a([d]);throw new bt("Blob is not supported. Use a Buffer instead.",bt.ERR_NOT_SUPPORT)}return d}function f(d){if(d>l)throw new bt("Object is too deeply nested ("+d+" levels). Max depth: "+l,bt.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(d,M){if(l===1/0)return JSON.stringify(d);const y=[];return JSON.stringify(d,function(L,R){if(!z.isObject(R))return R;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(R),f(M+y.length-1),R})}function g(d,M,y){let b=d;if(z.isReactNative(t)&&z.isReactNativeBlob(d))return t.append(ll(y,M,r),h(d)),!1;if(d&&!y&&typeof d=="object"){if(z.endsWith(M,"{}"))M=i?M:M.slice(0,-2),d=m(d,1);else if(z.isArray(d)&&gv(d)||(z.isFileList(d)||z.endsWith(M,"[]"))&&(b=z.toArray(d)))return M=Ep(M),b.forEach(function(R,C){!(z.isUndefined(R)||R===null)&&t.append(o===!0?ll([M],C,r):o===null?M:M+"[]",h(R))}),!1}return nc(d)?!0:(t.append(ll(y,M,r),h(d)),!1)}const _=Object.assign(_v,{defaultVisitor:g,convertValue:h,isVisitable:nc});function p(d,M,y=0){if(!z.isUndefined(d)){if(f(y),u.indexOf(d)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(d),z.forEach(d,function(L,R){(!(z.isUndefined(L)||L===null)&&s.call(t,L,z.isString(R)?R.trim():R,M,_))===!0&&p(L,M?M.concat(R):[R],y+1)}),u.pop()}}if(!z.isObject(n))throw new TypeError("data must be an object");return p(n),t}function Eh(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return t[i]})}function ou(n,t){this._pairs=[],n&&Fa(n,this,t)}const wp=ou.prototype;wp.append=function(t,e){this._pairs.push([t,e])};wp.toString=function(t){const e=t?i=>t.call(this,i,Eh):Eh;return this._pairs.map(function(s){return e(s[0])+"="+e(s[1])},"").join("&")};function vv(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Tp(n,t,e){if(!t)return n;n=n||"";const i=z.isFunction(e)?{serialize:e}:e,s=z.getSafeProp(i,"encode")||vv,r=z.getSafeProp(i,"serialize");let o;if(r?o=r(t,i):o=z.isURLSearchParams(t)?t.toString():new ou(t,i).toString(s),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class wh{constructor(){this.handlers=[]}use(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){z.forEach(this.handlers,function(i){i!==null&&t(i)})}}const au={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},xv=typeof URLSearchParams<"u"?URLSearchParams:ou,yv=typeof FormData<"u"?FormData:null,Mv=typeof Blob<"u"?Blob:null,Sv={isBrowser:!0,classes:{URLSearchParams:xv,FormData:yv,Blob:Mv},protocols:["http","https","file","blob","url","data"]},lu=typeof window<"u"&&typeof document<"u",ic=typeof navigator=="object"&&navigator||void 0,bv=lu&&(!ic||["ReactNative","NativeScript","NS"].indexOf(ic.product)<0),Ev=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",wv=lu&&window.location.href||"http://localhost",Tv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lu,hasStandardBrowserEnv:bv,hasStandardBrowserWebWorkerEnv:Ev,navigator:ic,origin:wv},Symbol.toStringTag,{value:"Module"})),We={...Tv,...Sv};function Av(n,t){return Fa(n,new We.classes.URLSearchParams,{visitor:function(e,i,s,r){return We.isNode&&z.isBuffer(e)?(this.append(i,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}const Th=bp;function Ap(n){if(n>Th)throw new bt("FormData field is too deeply nested ("+n+" levels). Max depth: "+Th,bt.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Rv(n){const t=[],e=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=e.exec(n))!==null;)Ap(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function Cv(n){const t={},e=Object.keys(n);let i;const s=e.length;let r;for(i=0;i<s;i++)r=e[i],t[r]=n[r];return t}function Rp(n){function t(e,i,s,r){Ap(r);let o=e[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=e.length;return o=!o&&z.isArray(s)?s.length:o,l?(z.hasOwnProp(s,o)?s[o]=z.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!z.hasOwnProp(s,o)||!z.isObject(s[o]))&&(s[o]=[]),t(e,i,s[o],r)&&z.isArray(s[o])&&(s[o]=Cv(s[o])),!a)}if(z.isFormData(n)&&z.isFunction(n.entries)){const e={};return z.forEachEntry(n,(i,s)=>{t(Rv(i),s,e,0)}),e}return null}const bs=(n,t)=>n!=null&&z.hasOwnProp(n,t)?n[t]:void 0;function Pv(n,t,e){if(z.isString(n))try{return(t||JSON.parse)(n),z.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(e||JSON.stringify)(n)}const lo={transitional:au,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const i=e.getContentType()||"",s=i.indexOf("application/json")>-1,r=z.isObject(t);if(r&&z.isHTMLForm(t)&&(t=new FormData(t)),z.isFormData(t))return s?JSON.stringify(Rp(t)):t;if(z.isArrayBuffer(t)||z.isBuffer(t)||z.isStream(t)||z.isFile(t)||z.isBlob(t)||z.isReadableStream(t))return t;if(z.isArrayBufferView(t))return t.buffer;if(z.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(r){const l=bs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Av(t,l).toString();if((a=z.isFileList(t))||i.indexOf("multipart/form-data")>-1){const c=bs(this,"env"),u=c&&c.FormData;return Fa(a?{"files[]":t}:t,u&&new u,l)}}return r||s?(e.setContentType("application/json",!1),Pv(t)):t}],transformResponse:[function(t){const e=bs(this,"transitional")||lo.transitional,i=e&&e.forcedJSONParsing,s=bs(this,"responseType"),r=s==="json";if(z.isResponse(t)||z.isReadableStream(t))return t;if(t&&z.isString(t)&&(i&&!s||r)){const a=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t,bs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?bt.from(l,bt.ERR_BAD_RESPONSE,this,null,bs(this,"response")):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:We.classes.FormData,Blob:We.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch","query"],n=>{lo.headers[n]={}});function cl(n,t){const e=this||lo,i=t||e,s=tn.from(i.headers);let r=i.data;return z.forEach(n,function(a){r=a.call(e,r,s.normalize(),t?t.status:void 0)}),s.normalize(),r}function Cp(n){return!!(n&&n.__CANCEL__)}let co=class extends bt{constructor(t,e,i){super(t??"canceled",bt.ERR_CANCELED,e,i),this.name="CanceledError",this.__CANCEL__=!0}};function Pp(n,t,e){const i=e.config.validateStatus;!e.status||!i||i(e.status)?n(e):t(new bt("Request failed with status code "+e.status,e.status>=400&&e.status<500?bt.ERR_BAD_REQUEST:bt.ERR_BAD_RESPONSE,e.config,e.request,e))}function Lv(n){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return t&&t[1]||""}function Iv(n,t){n=n||10;const e=new Array(n),i=new Array(n);let s=0,r=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),e[s]=l,i[s]=c;let h=r,f=0;for(;h!==s;)f+=e[h++],h=h%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),c-o<t)return;const m=u&&c-u;return m?Math.round(f*1e3/m):void 0}}function Dv(n,t){let e=0,i=1e3/t,s,r;const o=(c,u=Date.now())=>{e=u,s=null,r&&(clearTimeout(r),r=null),n(...c)};return[(...c)=>{const u=Date.now(),h=u-e;h>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-h)))},()=>s&&o(s)]}const va=(n,t,e=3)=>{let i=0;const s=Iv(50,250);return Dv(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=Math.max(0,a!=null?Math.min(o,a):o),c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const h={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[t?"download":"upload"]:!0};n(h)},e)},Ah=(n,t)=>{const e=n!=null;return[i=>t[0]({lengthComputable:e,total:n,loaded:i}),t[1]]},Rh=(n,t=z.asap)=>(...e)=>t(()=>n(...e)),Uv=We.hasStandardBrowserEnv?((n,t)=>e=>(e=new URL(e,We.origin),n.protocol===e.protocol&&n.host===e.host&&(t||n.port===e.port)))(new URL(We.origin),We.navigator&&/(msie|trident)/i.test(We.navigator.userAgent)):()=>!0,Nv=We.hasStandardBrowserEnv?{write(n,t,e,i,s,r,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(t)}`];z.isNumber(e)&&a.push(`expires=${new Date(e).toUTCString()}`),z.isString(i)&&a.push(`path=${i}`),z.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),z.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const i=t[e].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===n)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ov(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Fv(n,t){if(!t)return n;let e=n.length;for(;e>0&&n.charCodeAt(e-1)===47;)e--;return n.slice(0,e)+"/"+t.replace(/^\/+/,"")}const Bv=/^https?:(?!\/\/)/i,zv=/[\t\n\r]/g;function kv(n){let t=0;for(;t<n.length&&n.charCodeAt(t)<=32;)t++;return n.slice(t)}function Hv(n){return kv(n).replace(zv,"")}function Vv(n){return n&&n.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,e,i="")=>`${e}${i}${_a}`)}function Gv(n){const t=n.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${_a}@`),e=t.indexOf("#"),s=(e===-1?t:t.slice(0,e)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${_a}`);return e===-1?s:`${s}#${Vv(t.slice(e+1))}`}function Ch(n,t){if(typeof n=="string"){const e=Hv(n);if(Bv.test(e))throw new bt(`Invalid URL ${JSON.stringify(Gv(e))}: missing "//" after protocol`,bt.ERR_INVALID_URL,t)}}function Lp(n,t,e,i){Ch(t,i);let s=!Ov(t);return n&&(s||e===!1)?(Ch(n,i),Fv(n,t)):t}const Ph=n=>n instanceof tn?{...n}:n,Wv=n=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(n).concat(Object.getOwnPropertySymbols(n).filter(t=>Object.getOwnPropertyDescriptor(n,t).enumerable)):Object.keys(n);function ds(n,t){n=n||{},t=t||{};const e=Object.create(null);Object.defineProperty(e,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,h,f,m){return z.isPlainObject(u)&&z.isPlainObject(h)?z.merge.call({caseless:m},u,h):z.isPlainObject(h)?z.merge({},h):z.isArray(h)?h.slice():h}function s(u,h,f,m){if(z.isUndefined(h)){if(!z.isUndefined(u))return i(void 0,u,f,m)}else return i(u,h,f,m)}function r(u,h){if(!z.isUndefined(h))return i(void 0,h)}function o(u,h){if(z.isUndefined(h)){if(!z.isUndefined(u))return i(void 0,u)}else return i(void 0,h)}function a(u){const h=z.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!z.isUndefined(h))if(z.isPlainObject(h)){if(z.hasOwnProp(h,u))return h[u]}else return;const f=z.hasOwnProp(n,"transitional")?n.transitional:void 0;if(z.isPlainObject(f)&&z.hasOwnProp(f,u))return f[u]}function l(u,h,f){if(z.hasOwnProp(t,f))return i(u,h);if(z.hasOwnProp(n,f))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,h,f)=>s(Ph(u),Ph(h),f,!0)};return z.forEach(Wv({...n,...t}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=z.hasOwnProp(c,h)?c[h]:s,m=z.hasOwnProp(n,h)?n[h]:void 0,g=z.hasOwnProp(t,h)?t[h]:void 0,_=f(m,g,h);z.isUndefined(_)&&f!==l||(e[h]=_)}),z.hasOwnProp(t,"validateStatus")&&z.isUndefined(t.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(z.hasOwnProp(n,"validateStatus")?e.validateStatus=i(void 0,n.validateStatus):delete e.validateStatus),e}const Xv=["content-type","content-length"];function qv(n,t,e){if(e!=="content-only"){n.set(t);return}Object.entries(t||{}).forEach(([i,s])=>{Xv.includes(i.toLowerCase())&&n.set(i,s)})}const jv=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16)));function Ip(n){const t=ds({},n),e=f=>z.hasOwnProp(t,f)?t[f]:void 0,i=e("data");let s=e("withXSRFToken");const r=e("xsrfHeaderName"),o=e("xsrfCookieName");let a=e("headers");const l=e("auth"),c=e("baseURL"),u=e("allowAbsoluteUrls"),h=e("url");if(t.headers=a=tn.from(a),t.url=Tp(Lp(c,h,u,t),e("params"),e("paramsSerializer")),l){const f=z.getSafeProp(l,"username")||"",m=z.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(f+":"+(m?jv(m):"")))}catch(g){throw bt.from(g,bt.ERR_BAD_OPTION_VALUE,n)}}if(z.isFormData(i)&&(We.hasStandardBrowserEnv||We.hasStandardBrowserWebWorkerEnv||z.isReactNative(i)?a.setContentType(void 0):z.isFunction(i.getHeaders)&&qv(a,i.getHeaders(),e("formDataHeaderPolicy"))),We.hasStandardBrowserEnv&&(z.isFunction(s)&&(s=s(t)),s===!0||s==null&&Uv(t.url))){const m=r&&o&&Nv.read(o);m&&a.set(r,m)}return t}const Yv=typeof XMLHttpRequest<"u",$v=Yv&&function(n){return new Promise(function(e,i){const s=Ip(n);let r=s.data;const o=tn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,h,f,m,g;function _(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function d(){if(!p)return;const y=tn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:y,config:n,request:p};Pp(function(C){e(C),_()},function(C){i(C),_()},L),p=null}"onloadend"in p?p.onloadend=d:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(d)},p.onabort=function(){p&&(i(new bt("Request aborted",bt.ECONNABORTED,n,p)),_(),p=null)},p.onerror=function(b){const L=b&&b.message?b.message:"Network Error",R=new bt(L,bt.ERR_NETWORK,n,p);R.event=b||null,i(R),_(),p=null},p.ontimeout=function(){let b=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||au;s.timeoutErrorMessage&&(b=s.timeoutErrorMessage),i(new bt(b,L.clarifyTimeoutError?bt.ETIMEDOUT:bt.ECONNABORTED,n,p)),_(),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&z.forEach(Mp(o),function(b,L){p.setRequestHeader(L,b)}),z.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),c&&([f,g]=va(c,!0),p.addEventListener("progress",f)),l&&p.upload&&([h,m]=va(l),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=y=>{p&&(i(!y||y.type?new co(null,n,p):y),p.abort(),_(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=Lv(s.url);if(M&&!We.protocols.includes(M)){i(new bt("Unsupported protocol "+M+":",bt.ERR_BAD_REQUEST,n)),_();return}p.send(r||null)})},Kv=(n,t)=>{if(n=n?n.filter(Boolean):[],!t&&!n.length)return;const e=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;e.abort(c instanceof bt?c:new co(c instanceof Error?c.message:c))}};let r=t&&setTimeout(()=>{r=null,s(new bt(`timeout of ${t}ms exceeded`,bt.ETIMEDOUT))},t);const o=()=>{n&&(r&&clearTimeout(r),r=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),n=null)};n.forEach(l=>{if(!i){if(l.aborted){s.call(l);return}l.addEventListener("abort",s,{once:!0})}});const{signal:a}=e;return a.unsubscribe=()=>z.asap(o),a},Zv=function*(n,t){let e=n.byteLength;if(e<t){yield n;return}let i=0,s;for(;i<e;)s=i+t,yield n.slice(i,s),i=s},Jv=async function*(n,t){for await(const e of Qv(n))yield*Zv(e,t)},Qv=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const t=n.getReader();try{for(;;){const{done:e,value:i}=await t.read();if(e)break;yield i}}finally{await t.cancel()}},Lh=(n,t,e,i)=>{const s=Jv(n,t);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let h=u.byteLength;if(e){let f=r+=h;e(f)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Ih=n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102,Dp=(n,t,e)=>t+2<e&&Ih(n.charCodeAt(t+1))&&Ih(n.charCodeAt(t+2)),Dh=n=>n<=57?n-48:(n&223)-55,tx=n=>n>=65&&n<=90||n>=97&&n<=122||n>=48&&n<=57||n===43||n===47||n===45||n===95,ex=n=>n===9||n===10||n===12||n===13||n===32,nx=n=>{const t=Math.floor(n/4),e=n%4;return t*3+(e===2?1:e===3?2:0)},ix=n=>{const t=n.length;let e=0;return t>0&&n.charCodeAt(t-1)===61&&(e++,t>1&&n.charCodeAt(t-2)===61&&e++),Math.floor((t-e)*3/4)},sx=n=>{const t=n.length;let e=0,i=0,s=!1;for(let r=0;r<t;r++){let o=n.charCodeAt(r);if(o===37&&Dp(n,r,t)&&(o=Dh(n.charCodeAt(r+1))*16+Dh(n.charCodeAt(r+2)),r+=2),!ex(o)){if(o===61){i++;continue}if(!tx(o)||i>0){s=!0;continue}e++}}return s||i>2||i>0&&(e+i)%4!==0||e%4===1?ix(n):nx(e)},rx=(n,t)=>{if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const e=n.indexOf(",");if(e<0)return 0;const i=n.slice(5,e),s=n.slice(e+1);if(/;base64/i.test(i))return t(s);let o=0;for(let a=0,l=s.length;a<l;a++){const c=s.charCodeAt(a);if(c===37&&Dp(s,a,l))o+=1,a+=2;else if(c<128)o+=1;else if(c<2048)o+=2;else if(c>=55296&&c<=56319&&a+1<l){const u=s.charCodeAt(a+1);u>=56320&&u<=57343?(o+=4,a++):o+=3}else o+=3}return o};function ox(n){const t=typeof n=="string"?n.indexOf("#"):-1;return rx(t===-1?n:n.slice(0,t),sx)}const cu="1.19.0",Uh=64*1024,{isFunction:xo}=z,ax=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16))),Nh=n=>{if(!z.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},Oh=(n,...t)=>{try{return!!n(...t)}catch{return!1}},lx=n=>{const t=n.indexOf("://");let e=n;return t!==-1&&(e=e.slice(t+3)),e.includes("@")||e.includes(":")},cx=n=>{const t=z.global!==void 0&&z.global!==null?z.global:globalThis,{ReadableStream:e,TextEncoder:i}=t;n=z.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},n);const{fetch:s,Request:r,Response:o}=n,a=s?xo(s):typeof fetch=="function",l=xo(r),c=xo(o);if(!a)return!1;const u=a&&xo(e),h=a&&(typeof i=="function"?(d=>M=>d.encode(M))(new i):async d=>new Uint8Array(await new r(d).arrayBuffer())),f=l&&u&&Oh(()=>{let d=!1;const M=new r(We.origin,{body:new e,method:"POST",get duplex(){return d=!0,"half"}}),y=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),d&&!y}),m=c&&u&&Oh(()=>z.isReadableStream(new o("").body)),g={stream:m&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!g[d]&&(g[d]=(M,y)=>{let b=M&&M[d];if(b)return b.call(M);throw new bt(`Response type '${d}' is not supported`,bt.ERR_NOT_SUPPORT,y)})});const _=async d=>{if(d==null)return 0;if(z.isBlob(d))return d.size;if(z.isSpecCompliantForm(d))return(await new r(We.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(z.isArrayBufferView(d)||z.isArrayBuffer(d))return d.byteLength;if(z.isURLSearchParams(d)&&(d=d+""),z.isString(d))return(await h(d)).byteLength},p=async(d,M)=>{const y=z.toFiniteNumber(d.getContentLength());return y??_(M)};return async d=>{let{url:M,method:y,data:b,signal:L,cancelToken:R,timeout:C,onDownloadProgress:U,onUploadProgress:w,responseType:E,headers:P,withCredentials:D="same-origin",fetchOptions:G,maxContentLength:Z,maxBodyLength:rt}=Ip(d);const $=z.isNumber(Z)&&Z>-1,it=z.isNumber(rt)&&rt>-1,j=ut=>z.hasOwnProp(d,ut)?d[ut]:void 0;let vt=s||fetch;E=E?(E+"").toLowerCase():"text";let xt=Kv([L,R&&R.toAbortSignal()],C),pt=null;const Lt=xt&&xt.unsubscribe&&(()=>{xt.unsubscribe()});let qt,ot=null;const dt=()=>new bt("Request body larger than maxBodyLength limit",bt.ERR_BAD_REQUEST,d,pt);try{let ut;const _t=j("auth");if(_t){const F=z.getSafeProp(_t,"username")||"",H=z.getSafeProp(_t,"password")||"";ut={username:F,password:H}}if(lx(M)){const F=new URL(M,We.origin);if(!ut&&(F.username||F.password)){const H=Nh(F.username),I=Nh(F.password);ut={username:H,password:I}}(F.username||F.password)&&(F.username="",F.password="",M=F.href)}if(ut&&(P.delete("authorization"),P.set("Authorization","Basic "+btoa(ax((ut.username||"")+":"+(ut.password||""))))),$&&typeof M=="string"&&M.startsWith("data:")&&ox(M)>Z)throw new bt("maxContentLength size of "+Z+" exceeded",bt.ERR_BAD_RESPONSE,d,pt);if(it&&y!=="get"&&y!=="head"){const F=await _(b);if(typeof F=="number"&&isFinite(F)&&(qt=F,F>rt))throw dt()}const Nt=it&&(z.isReadableStream(b)||z.isStream(b)),Ft=(F,H,I)=>Lh(F,Uh,k=>{if(it&&k>rt)throw ot=dt();H&&H(k)},I);if(f&&y!=="get"&&y!=="head"&&(w||Nt)){if(qt=qt??await p(P,b),qt!==0||Nt){let F=new r(M,{method:"POST",body:b,duplex:"half"}),H;if(z.isFormData(b)&&(H=F.headers.get("content-type"))&&P.setContentType(H),F.body){const[I,k]=w&&Ah(qt,va(Rh(w)))||[];b=Ft(F.body,I,k)}}}else if(Nt&&!l&&u&&y!=="get"&&y!=="head")b=Ft(b);else if(Nt&&l&&!f&&y!=="get"&&y!=="head")throw new bt("Stream request bodies are not supported by the current fetch implementation",bt.ERR_NOT_SUPPORT,d,pt);z.isString(D)||(D=D?"include":"omit");const Bt=l&&"credentials"in r.prototype;if(z.isFormData(b)){const F=P.getContentType();F&&/^multipart\/form-data/i.test(F)&&!/boundary=/i.test(F)&&P.delete("content-type")}P.set("User-Agent","axios/"+cu,!1);const Qt={...G,signal:xt,method:y.toUpperCase(),headers:Mp(P.normalize()),body:b,duplex:"half",credentials:Bt?D:void 0};pt=l&&new r(M,Qt);let v=await(l?vt(pt,G):vt(M,Qt));const O=tn.from(v.headers);if($){const F=z.toFiniteNumber(O.getContentLength());if(F!=null&&F>Z)throw new bt("maxContentLength size of "+Z+" exceeded",bt.ERR_BAD_RESPONSE,d,pt)}const q=m&&(E==="stream"||E==="response");if(m&&v.body&&(U||$||q&&Lt)){const F={};["status","statusText","headers"].forEach(B=>{F[B]=v[B]});const H=z.toFiniteNumber(O.getContentLength()),[I,k]=U&&Ah(H,va(Rh(U),!0))||[];let T=0;const x=B=>{if($&&(T=B,T>Z))throw new bt("maxContentLength size of "+Z+" exceeded",bt.ERR_BAD_RESPONSE,d,pt);I&&I(B)};v=new o(Lh(v.body,Uh,x,()=>{k&&k(),Lt&&Lt()}),F)}E=E||"text";let nt=await g[z.findKey(g,E)||"text"](v,d);if($&&!m&&!q){let F;if(nt!=null&&(typeof nt.byteLength=="number"?F=nt.byteLength:typeof nt.size=="number"?F=nt.size:typeof nt=="string"&&(F=typeof i=="function"?new i().encode(nt).byteLength:nt.length)),typeof F=="number"&&F>Z)throw new bt("maxContentLength size of "+Z+" exceeded",bt.ERR_BAD_RESPONSE,d,pt)}return!q&&Lt&&Lt(),await new Promise((F,H)=>{Pp(F,H,{data:nt,headers:tn.from(v.headers),status:v.status,statusText:v.statusText,config:d,request:pt})})}catch(ut){if(Lt&&Lt(),xt&&xt.aborted&&xt.reason instanceof bt){const _t=xt.reason;throw _t.config=d,pt&&(_t.request=pt),ut!==_t&&Object.defineProperty(_t,"cause",{__proto__:null,value:ut,writable:!0,enumerable:!1,configurable:!0}),_t}if(ot)throw pt&&!ot.request&&(ot.request=pt),ot;if(ut instanceof bt)throw pt&&!ut.request&&(ut.request=pt),ut;if(ut&&ut.name==="TypeError"&&/Load failed|fetch/i.test(ut.message)){const _t=new bt("Network Error",bt.ERR_NETWORK,d,pt,ut&&ut.response);throw Object.defineProperty(_t,"cause",{__proto__:null,value:ut.cause||ut,writable:!0,enumerable:!1,configurable:!0}),_t}throw bt.from(ut,ut&&ut.code,d,pt,ut&&ut.response)}}},ux=new Map,Up=n=>{let t=n&&n.env||{};const{fetch:e,Request:i,Response:s}=t,r=[i,s,e];let o=r.length,a=o,l,c,u=ux;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:cx(t)),u=c;return c};Up();const uu={http:mv,xhr:$v,fetch:{get:Up}};z.forEach(uu,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:t})}});const Fh=n=>`- ${n}`,hx=n=>z.isFunction(n)||n===null||n===!1;function fx(n,t){n=z.isArray(n)?n:[n];const{length:e}=n;let i,s;const r={};for(let o=0;o<e;o++){i=n[o];let a;if(s=i,!hx(i)&&(s=uu[(a=String(i)).toLowerCase()],s===void 0))throw new bt(`Unknown adapter '${a}'`);if(s&&(z.isFunction(s)||(s=s.get(t))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?o.length>1?`since :
`+o.map(Fh).join(`
`):" "+Fh(o[0]):"as no adapter specified";throw new bt("There is no suitable adapter to dispatch the request "+a,bt.ERR_NOT_SUPPORT)}return s}const Np={getAdapter:fx,adapters:uu};function ul(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new co(null,n)}function hl(n){return ul(n),n.headers=tn.from(n.headers),n.data=cl.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Np.getAdapter(n.adapter||lo.adapter,n)(n).then(function(i){ul(n),n.response=i;try{i.data=cl.call(n,n.transformResponse,i)}finally{delete n.response}return i.headers=tn.from(i.headers),i},function(i){if(!Cp(i)&&(ul(n),i&&i.response)){n.response=i.response;try{i.response.data=cl.call(n,n.transformResponse,i.response)}finally{delete n.response}i.response.headers=tn.from(i.response.headers)}return Promise.reject(i)})}const Ba={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{Ba[n]=function(i){return typeof i===n||"a"+(t<1?"n ":" ")+n}});const Bh={};Ba.transitional=function(t,e,i){function s(r,o){return"[Axios v"+cu+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(t===!1)throw new bt(s(o," has been removed"+(e?" in "+e:"")),bt.ERR_DEPRECATED);return e&&!Bh[o]&&(Bh[o]=!0,console.warn(s(o," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(r,o,a):!0}};Ba.spelling=function(t){return(e,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function dx(n,t,e){if(typeof n!="object"||n===null)throw new bt("options must be an object",bt.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(t,r)?t[r]:void 0;if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new bt("option "+r+" must be "+l,bt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new bt("Unknown option "+r,bt.ERR_BAD_OPTION)}}const ta={assertOptions:dx,validators:Ba},je=ta.validators;let us=class{constructor(t){this.defaults=t||{},this.interceptors={request:new wh,response:new wh}}async request(t,e){try{return await this._request(t,e)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=ds(this.defaults,e);const{transitional:i,paramsSerializer:s,headers:r}=e;i!==void 0&&ta.assertOptions(i,{silentJSONParsing:je.transitional(je.boolean),forcedJSONParsing:je.transitional(je.boolean),clarifyTimeoutError:je.transitional(je.boolean),legacyInterceptorReqResOrdering:je.transitional(je.boolean),advertiseZstdAcceptEncoding:je.transitional(je.boolean),validateStatusUndefinedResolves:je.transitional(je.boolean)},!1),s!=null&&(z.isFunction(s)?e.paramsSerializer={serialize:s}:ta.assertOptions(s,{encode:je.function,serialize:je.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),ta.assertOptions(e,{baseUrl:je.spelling("baseURL"),withXsrfToken:je.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let o=r&&z.merge(r.common,r[e.method]);r&&z.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),e.headers=tn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(e)===!1)return;l=l&&_.synchronous;const p=e.transitional||au;p&&p.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,h=0,f;if(!l){const g=[hl.bind(this),void 0];for(g.unshift(...a),g.push(...c),f=g.length,u=Promise.resolve(e);h<f;)u=u.then(g[h++],g[h++]);return u}f=a.length;let m=e;for(;h<f;){const g=a[h++],_=a[h++];try{m=g?g(m):m}catch(p){if(!_){u=Promise.reject(p);break}try{const d=_.call(this,p);z.isThenable(d)&&(u=Promise.resolve(d).then(()=>hl.call(this,m)))}catch(d){u=Promise.reject(d)}break}}if(!u)try{u=hl.call(this,m)}catch(g){u=Promise.reject(g)}for(h=0,f=c.length;h<f;)u=u.then(c[h++],c[h++]);return u}getUri(t){t=ds(this.defaults,t);const e=Lp(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Tp(e,t.params,t.paramsSerializer)}};z.forEach(["delete","get","head","options"],function(t){us.prototype[t]=function(e,i){return this.request(ds(i||{},{method:t,url:e,data:i&&z.hasOwnProp(i,"data")?i.data:void 0}))}});z.forEach(["post","put","patch","query"],function(t){function e(i){return function(r,o,a){return this.request(ds(a||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}us.prototype[t]=e(),t!=="query"&&(us.prototype[t+"Form"]=e(!0))});let px=class Op{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(r){e=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},t(function(r,o,a){i.reason||(i.reason=new co(r,o,a),e(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=i=>{t.abort(i)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new Op(function(s){t=s}),cancel:t}}};function mx(n){return function(e){return n.apply(null,e)}}function gx(n){return z.isObject(n)&&n.isAxiosError===!0}const sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(sc).forEach(([n,t])=>{sc[t]=n});function Fp(n){const t=new us(n),e=fp(us.prototype.request,t);return z.extend(e,us.prototype,t,{allOwnKeys:!0}),z.extend(e,t,null,{allOwnKeys:!0}),e.create=function(s){return Fp(ds(n,s))},e}const he=Fp(lo);he.Axios=us;he.CanceledError=co;he.CancelToken=px;he.isCancel=Cp;he.VERSION=cu;he.toFormData=Fa;he.AxiosError=bt;he.Cancel=he.CanceledError;he.all=function(t){return Promise.all(t)};he.spread=mx;he.isAxiosError=gx;he.mergeConfig=ds;he.AxiosHeaders=tn;he.formToJSON=n=>Rp(z.isHTMLForm(n)?new FormData(n):n);he.getAdapter=Np.getAdapter;he.HttpStatusCode=sc;he.default=he;const{Axios:v1,AxiosError:x1,CanceledError:y1,isCancel:M1,CancelToken:S1,VERSION:b1,all:E1,Cancel:w1,isAxiosError:T1,spread:A1,toFormData:R1,AxiosHeaders:C1,HttpStatusCode:P1,formToJSON:L1,getAdapter:I1,mergeConfig:D1,create:U1}=he;const hu="167",hi={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_x=0,zh=1,vx=2,Bp=1,zp=2,ai=3,Fi=0,cn=1,Ie=2,Ui=0,tr=1,or=2,kh=3,Hh=4,xx=5,ns=100,yx=101,Mx=102,Sx=103,bx=104,Ex=200,wx=201,Tx=202,Ax=203,rc=204,oc=205,Rx=206,Cx=207,Px=208,Lx=209,Ix=210,Dx=211,Ux=212,Nx=213,Ox=214,Fx=0,Bx=1,zx=2,xa=3,kx=4,Hx=5,Vx=6,Gx=7,kp=0,Wx=1,Xx=2,Ni=0,qx=1,jx=2,Yx=3,Hp=4,$x=5,Kx=6,Zx=7,Vp=300,ar=301,lr=302,ac=303,lc=304,za=306,cc=1e3,rs=1001,uc=1002,dn=1003,Jx=1004,yo=1005,Xe=1006,fl=1007,os=1008,xi=1009,Gp=1010,Wp=1011,Qr=1012,fu=1013,ps=1014,$n=1015,uo=1016,du=1017,pu=1018,cr=1020,Xp=35902,qp=1021,jp=1022,Fn=1023,Yp=1024,$p=1025,er=1026,ur=1027,mu=1028,gu=1029,Kp=1030,_u=1031,vu=1033,ea=33776,na=33777,ia=33778,sa=33779,hc=35840,fc=35841,dc=35842,pc=35843,mc=36196,gc=37492,_c=37496,vc=37808,xc=37809,yc=37810,Mc=37811,Sc=37812,bc=37813,Ec=37814,wc=37815,Tc=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Lc=37821,ra=36492,Ic=36494,Dc=36495,Zp=36283,Uc=36284,Nc=36285,Oc=36286,Qx=3200,ty=3201,Jp=0,ey=1,Di="",Ke="srgb",zi="srgb-linear",xu="display-p3",ka="display-p3-linear",ya="linear",ve="srgb",Ma="rec709",Sa="p3",Es=7680,Vh=519,ny=512,iy=513,sy=514,Qp=515,ry=516,oy=517,ay=518,ly=519,Fc=35044,tm=35048,Gh="300 es",pi=2e3,ba=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wh=1234567;const Gr=Math.PI/180,hr=180/Math.PI;function mi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function yu(n,t){return(n%t+t)%t}function cy(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function uy(n,t,e){return n!==t?(e-n)/(t-n):0}function Wr(n,t,e){return(1-e)*n+e*t}function hy(n,t,e,i){return Wr(n,t,1-Math.exp(-e*i))}function fy(n,t=1){return t-Math.abs(yu(n,t*2)-t)}function dy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function py(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function my(n,t){return n+Math.floor(Math.random()*(t-n+1))}function gy(n,t){return n+Math.random()*(t-n)}function _y(n){return n*(.5-Math.random())}function vy(n){n!==void 0&&(Wh=n);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xy(n){return n*Gr}function yy(n){return n*hr}function My(n){return(n&n-1)===0&&n!==0}function Sy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function by(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ey(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const xe={DEG2RAD:Gr,RAD2DEG:hr,generateUUID:mi,clamp:Ge,euclideanModulo:yu,mapLinear:cy,inverseLerp:uy,lerp:Wr,damp:hy,pingpong:fy,smoothstep:dy,smootherstep:py,randInt:my,randFloat:gy,randFloatSpread:_y,seededRandom:vy,degToRad:xy,radToDeg:yy,isPowerOfTwo:My,ceilPowerOfTwo:Sy,floorPowerOfTwo:by,setQuaternionFromProperEuler:Ey,normalize:ce,denormalize:Nn};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],d=s[6],M=s[1],y=s[4],b=s[7],L=s[2],R=s[5],C=s[8];return r[0]=o*_+a*M+l*L,r[3]=o*p+a*y+l*R,r[6]=o*d+a*b+l*C,r[1]=c*_+u*M+h*L,r[4]=c*p+u*y+h*R,r[7]=c*d+u*b+h*C,r[2]=f*_+m*M+g*L,r[5]=f*p+m*y+g*R,r[8]=f*d+m*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=e*h+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dl.makeScale(t,e)),this}rotate(t){return this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new Kt;function em(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wy(){const n=to("canvas");return n.style.display="block",n}const Xh={};function nr(n){n in Xh||(Xh[n]=!0,console.warn(n))}function Ty(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const qh=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jh=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[zi]:{transfer:ya,primaries:Ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ke]:{transfer:ve,primaries:Ma,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ka]:{transfer:ya,primaries:Sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(jh),fromReference:n=>n.applyMatrix3(qh)},[xu]:{transfer:ve,primaries:Sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(jh),fromReference:n=>n.applyMatrix3(qh).convertLinearToSRGB()}},Ay=new Set([zi,ka]),ae={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ay.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Sr[t].toReference,s=Sr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Sr[n].primaries},getTransfer:function(n){return n===Di?ya:Sr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Sr[t].luminanceCoefficients)}};function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ws;class Ry{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=to("canvas")),ws.width=t.width,ws.height=t.height;const i=ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=to("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ir(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ir(e[i]/255)*255):e[i]=ir(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cy=0;class nm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ry.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Py=0;class qe extends vs{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=rs,s=rs,r=Xe,o=os,a=Fn,l=xi,c=qe.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=mi(),this.name="",this.source=new nm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cc:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cc:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Vp;qe.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(m+1)/2,L=(d+1)/2,R=(u+f)/4,C=(h+_)/4,U=(g+p)/4;return y>b&&y>L?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=C/i):b>L?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=U/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=C/r,s=U/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends vs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends Ly{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class im extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iy extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-a;const d=l*f+c*m+u*g+h*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const L=Math.sqrt(y),R=Math.atan2(L,d*M);p=Math.sin(p*R)/L,a=Math.sin(a*R)/L}const b=a*M;if(l=l*p+f*b,c=c*p+m*b,u=u*p+g*b,h=h*p+_*b,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-a*m,t[e+2]=c*g+u*m+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gl.copy(this).projectOnVector(t),this.sub(gl)}reflect(t){return this.sub(gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gl=new N,Yh=new gs;class xs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),So.subVectors(this.max,br),Ts.subVectors(t.a,br),As.subVectors(t.b,br),Rs.subVectors(t.c,br),Ei.subVectors(As,Ts),wi.subVectors(Rs,As),ji.subVectors(Ts,Rs);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-ji.z,ji.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,ji.z,0,-ji.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-ji.y,ji.x,0];return!_l(e,Ts,As,Rs,So)||(e=[1,0,0,0,1,0,0,0,1],!_l(e,Ts,As,Rs,So))?!1:(bo.crossVectors(Ei,wi),e=[bo.x,bo.y,bo.z],_l(e,Ts,As,Rs,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new N,new N,new N,new N,new N,new N,new N,new N],Ln=new N,Mo=new xs,Ts=new N,As=new N,Rs=new N,Ei=new N,wi=new N,ji=new N,br=new N,So=new N,bo=new N,Yi=new N;function _l(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Yi.fromArray(n,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=t.dot(Yi),c=e.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dy=new xs,Er=new N,vl=new N;class ho{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Dy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(vl)),this.expandByPoint(Er.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new N,xl=new N,Eo=new N,Ti=new N,yl=new N,wo=new N,Ml=new N;class Mu{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){xl.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(xl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Eo),a=Ti.dot(this.direction),l=-Ti.dot(Eo),c=Ti.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xl).addScaledVector(Eo,f),m}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,i,s,r){yl.subVectors(e,t),wo.subVectors(i,t),Ml.crossVectors(yl,wo);let o=this.direction.dot(Ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);const l=a*this.direction.dot(wo.crossVectors(Ti,wo));if(l<0)return null;const c=a*this.direction.dot(yl.cross(Ti));if(c<0||l+c>o)return null;const u=-a*Ti.dot(Ml);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uy,t,Ny)}lookAt(t,e,i){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ai.crossVectors(i,vn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ai.crossVectors(i,vn)),Ai.normalize(),To.crossVectors(vn,Ai),s[0]=Ai.x,s[4]=To.x,s[8]=vn.x,s[1]=Ai.y,s[5]=To.y,s[9]=vn.y,s[2]=Ai.z,s[6]=To.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],M=i[3],y=i[7],b=i[11],L=i[15],R=s[0],C=s[4],U=s[8],w=s[12],E=s[1],P=s[5],D=s[9],G=s[13],Z=s[2],rt=s[6],$=s[10],it=s[14],j=s[3],vt=s[7],xt=s[11],pt=s[15];return r[0]=o*R+a*E+l*Z+c*j,r[4]=o*C+a*P+l*rt+c*vt,r[8]=o*U+a*D+l*$+c*xt,r[12]=o*w+a*G+l*it+c*pt,r[1]=u*R+h*E+f*Z+m*j,r[5]=u*C+h*P+f*rt+m*vt,r[9]=u*U+h*D+f*$+m*xt,r[13]=u*w+h*G+f*it+m*pt,r[2]=g*R+_*E+p*Z+d*j,r[6]=g*C+_*P+p*rt+d*vt,r[10]=g*U+_*D+p*$+d*xt,r[14]=g*w+_*G+p*it+d*pt,r[3]=M*R+y*E+b*Z+L*j,r[7]=M*C+y*P+b*rt+L*vt,r[11]=M*U+y*D+b*$+L*xt,r[15]=M*w+y*G+b*it+L*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+_*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],M=h*p*c-_*f*c+_*l*m-a*p*m-h*l*d+a*f*d,y=g*f*c-u*p*c-g*l*m+o*p*m+u*l*d-o*f*d,b=u*_*c-g*h*c+g*a*m-o*_*m-u*a*d+o*h*d,L=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,R=e*M+i*y+s*b+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=M*C,t[1]=(_*f*r-h*p*r-_*s*m+i*p*m+h*s*d-i*f*d)*C,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*d+i*l*d)*C,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*C,t[4]=y*C,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*d+e*f*d)*C,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*d-e*l*d)*C,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*m+e*l*m)*C,t[8]=b*C,t[9]=(g*h*r-u*_*r-g*i*m+e*_*m+u*i*d-e*h*d)*C,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*C,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*C,t[12]=L*C,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*p+e*h*p)*C,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*C,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,g=r*h,_=o*u,p=o*h,d=a*h,M=l*c,y=l*u,b=l*h,L=i.x,R=i.y,C=i.z;return s[0]=(1-(_+d))*L,s[1]=(m+b)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(f+d))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(g+y)*C,s[9]=(p-M)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);const c=1/r,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let m,g;if(a===pi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ba)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,m=(i+s)*u;let g,_;if(a===pi)g=(o+r)*h,_=-2*h;else if(a===ba)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Cs=new N,In=new pe,Uy=new N(0,0,0),Ny=new N(1,1,1),Ai=new N,To=new N,vn=new N,$h=new pe,Kh=new gs;class Hn{constructor(t=0,e=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $h.makeRotationFromQuaternion(t),this.setFromRotationMatrix($h,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oy=0;const Zh=new N,Ps=new gs,si=new pe,Ao=new N,wr=new N,Fy=new N,By=new gs,Jh=new N(1,0,0),Qh=new N(0,1,0),tf=new N(0,0,1),ef={type:"added"},zy={type:"removed"},Ls={type:"childadded",child:null},Sl={type:"childremoved",child:null};class De extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new N,e=new Hn,i=new gs,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Kt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ao.copy(t):Ao.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(wr,Ao,this.up):si.lookAt(Ao,wr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(si),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zy),Sl.child=t,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Fy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,By,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}De.DEFAULT_UP=new N(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new N,ri=new N,bl=new N,oi=new N,Is=new N,Ds=new N,nf=new N,El=new N,wl=new N,Tl=new N;class On{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Dn.subVectors(s,e),ri.subVectors(i,e),bl.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot(ri),l=Dn.dot(bl),c=ri.dot(ri),u=ri.dot(bl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(t,e,i,s){return Dn.subVectors(i,e),ri.subVectors(t,e),Dn.cross(ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return On.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,i),Ds.subVectors(r,i),El.subVectors(t,i);const l=Is.dot(El),c=Ds.dot(El);if(l<=0&&c<=0)return e.copy(i);wl.subVectors(t,s);const u=Is.dot(wl),h=Ds.dot(wl);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Is,o);Tl.subVectors(t,r);const m=Is.dot(Tl),g=Ds.dot(Tl);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ds,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return nf.subVectors(r,s),a=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(nf,a);const d=1/(p+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Al(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=yu(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Al(o,r,t+1/3),this.g=Al(o,r,t),this.b=Al(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const i=sm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}copyLinearToSRGB(t){return this.r=pl(t.r),this.g=pl(t.g),this.b=pl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return ae.fromWorkingColorSpace($e.copy(this),t),Math.round(Ge($e.r*255,0,255))*65536+Math.round(Ge($e.g*255,0,255))*256+Math.round(Ge($e.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace($e.copy(this),e);const i=$e.r,s=$e.g,r=$e.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ke){ae.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,i=$e.g,s=$e.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Ro);const i=Wr(Ri.h,Ro.h,e),s=Wr(Ri.s,Ro.s,e),r=Wr(Ri.l,Ro.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Jt;Jt.NAMES=sm;let ky=0;class mr extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=tr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=oc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rc&&(i.blendSrc=this.blendSrc),this.blendDst!==oc&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Se extends mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new N,Co=new Rt;class An{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return nr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class rm extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class om extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Hy=0;const bn=new pe,Rl=new De,Us=new N,xn=new xs,Tr=new xs,ze=new N;class mn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(em(t)?om:rm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(xn.min,Tr.min),xn.expandByPoint(ze),ze.addVectors(xn.max,Tr.max),xn.expandByPoint(ze)):(xn.expandByPoint(Tr.min),xn.expandByPoint(Tr.max))}xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(t,c),ze.add(Us)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new N,l[U]=new N;const c=new N,u=new N,h=new N,f=new Rt,m=new Rt,g=new Rt,_=new N,p=new N;function d(U,w,E){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(P),a[U].add(_),a[w].add(_),a[E].add(_),l[U].add(p),l[w].add(p),l[E].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let U=0,w=M.length;U<w;++U){const E=M[U],P=E.start,D=E.count;for(let G=P,Z=P+D;G<Z;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const y=new N,b=new N,L=new N,R=new N;function C(U){L.fromBufferAttribute(s,U),R.copy(L);const w=a[U];y.copy(w),y.sub(L.multiplyScalar(L.dot(w))).normalize(),b.crossVectors(R,w);const P=b.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,P)}for(let U=0,w=M.length;U<w;++U){const E=M[U],P=E.start,D=E.count;for(let G=P,Z=P+D;G<Z;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new An(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sf=new pe,$i=new Mu,Po=new ho,rf=new N,Ns=new N,Os=new N,Fs=new N,Cl=new N,Lo=new N,Io=new Rt,Do=new Rt,Uo=new Rt,of=new N,af=new N,lf=new N,No=new N,Oo=new N;class at extends De{constructor(t=new mn,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Cl.fromBufferAttribute(h,t),o?Lo.addScaledVector(Cl,u):Lo.addScaledVector(Cl.sub(e),u))}e.add(Lo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(Po.containsPoint($i.origin)===!1&&($i.intersectSphere(Po,rf)===null||$i.origin.distanceToSquared(rf)>(t.far-t.near)**2))&&(sf.copy(r).invert(),$i.copy(t.ray).applyMatrix4(sf),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,L=y;b<L;b+=3){const R=a.getX(b),C=a.getX(b+1),U=a.getX(b+2);s=Fo(this,d,t,i,c,u,h,R,C,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=a.getX(p),y=a.getX(p+1),b=a.getX(p+2);s=Fo(this,o,t,i,c,u,h,M,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,L=y;b<L;b+=3){const R=b,C=b+1,U=b+2;s=Fo(this,d,t,i,c,u,h,R,C,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=p,y=p+1,b=p+2;s=Fo(this,o,t,i,c,u,h,M,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Vy(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:n}}function Fo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ns),n.getVertexPosition(l,Os),n.getVertexPosition(c,Fs);const u=Vy(n,t,e,i,Ns,Os,Fs,No);if(u){s&&(Io.fromBufferAttribute(s,a),Do.fromBufferAttribute(s,l),Uo.fromBufferAttribute(s,c),u.uv=On.getInterpolation(No,Ns,Os,Fs,Io,Do,Uo,new Rt)),r&&(Io.fromBufferAttribute(r,a),Do.fromBufferAttribute(r,l),Uo.fromBufferAttribute(r,c),u.uv1=On.getInterpolation(No,Ns,Os,Fs,Io,Do,Uo,new Rt)),o&&(of.fromBufferAttribute(o,a),af.fromBufferAttribute(o,l),lf.fromBufferAttribute(o,c),u.normal=On.getInterpolation(No,Ns,Os,Fs,of,af,lf,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};On.getNormal(Ns,Os,Fs,h.normal),u.face=h}return u}class ee extends mn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function g(_,p,d,M,y,b,L,R,C,U,w){const E=b/C,P=L/U,D=b/2,G=L/2,Z=R/2,rt=C+1,$=U+1;let it=0,j=0;const vt=new N;for(let xt=0;xt<$;xt++){const pt=xt*P-G;for(let Lt=0;Lt<rt;Lt++){const qt=Lt*E-D;vt[_]=qt*M,vt[p]=pt*y,vt[d]=Z,c.push(vt.x,vt.y,vt.z),vt[_]=0,vt[p]=0,vt[d]=R>0?1:-1,u.push(vt.x,vt.y,vt.z),h.push(Lt/C),h.push(1-xt/U),it+=1}}for(let xt=0;xt<U;xt++)for(let pt=0;pt<C;pt++){const Lt=f+pt+rt*xt,qt=f+pt+rt*(xt+1),ot=f+(pt+1)+rt*(xt+1),dt=f+(pt+1)+rt*xt;l.push(Lt,qt,dt),l.push(qt,ot,dt),j+=6}a.addGroup(m,j,w),m+=j,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function sn(n){const t={};for(let e=0;e<n.length;e++){const i=fr(n[e]);for(const s in i)t[s]=i[s]}return t}function Gy(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function am(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Wy={clone:fr,merge:sn};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=Gy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}let lm=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ci=new N,cf=new Rt,uf=new Rt;class fn extends lm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,cf,uf),e.subVectors(uf,cf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bs=-90,zs=1;class cm extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Bs,zs,t,e);s.layers=this.layers,this.add(s);const r=new fn(Bs,zs,t,e);r.layers=this.layers,this.add(r);const o=new fn(Bs,zs,t,e);o.layers=this.layers,this.add(o);const a=new fn(Bs,zs,t,e);a.layers=this.layers,this.add(a);const l=new fn(Bs,zs,t,e);l.layers=this.layers,this.add(l);const c=new fn(Bs,zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class um extends qe{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ar,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hm extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new um(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ee(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ui});r.uniforms.tEquirect.value=e;const o=new at(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=Xe),new cm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Pl=new N,jy=new N,Yy=new Kt;class Ii{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Pl.subVectors(i,e).cross(jy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yy.getNormalMatrix(t),s=this.coplanarPoint(Pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new ho,Bo=new N;class bu{constructor(t=new Ii,e=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],M=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,p-m,b-d).normalize(),i[1].setComponents(l+r,f+c,p+m,b+d).normalize(),i[2].setComponents(l+o,f+u,p+g,b+M).normalize(),i[3].setComponents(l-o,f-u,p-g,b-M).normalize(),i[4].setComponents(l-a,f-h,p-_,b-y).normalize(),e===pi)i[5].setComponents(l+a,f+h,p+_,b+y).normalize();else if(e===ba)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $y(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let m=0,g=f.length;m<g;m++){const _=f[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ae extends mn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const M=d*f-o;for(let y=0;y<c;y++){const b=y*h-r;g.push(b,-M,0),_.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+c*d,b=M+c*(d+1),L=M+1+c*(d+1),R=M+1+c*d;m.push(y,b,R),m.push(b,L,R)}this.setIndex(m),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
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
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
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
#endif`,rM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cM=`#ifdef USE_IRIDESCENCE
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
#endif`,uM=`#ifdef USE_BUMPMAP
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xM=`#define PI 3.141592653589793
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
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MM=`vec3 transformedNormal = objectNormal;
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
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
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
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
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
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jM=`PhysicalMaterial material;
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
#endif`,YM=`struct PhysicalMaterial {
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
}`,$M=`
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rS=`#if defined( USE_POINTS_UV )
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
#endif`,oS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hS=`#ifdef USE_MORPHTARGETS
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
#endif`,fS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vS=`#ifdef USE_NORMALMAP
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
#endif`,xS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ES=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,US=`float getShadowMask() {
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
}`,NS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OS=`#ifdef USE_SKINNING
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
#endif`,FS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GS=`#ifdef USE_TRANSMISSION
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
#endif`,WS=`#ifdef USE_TRANSMISSION
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KS=`uniform sampler2D t2D;
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`#include <common>
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
}`,nb=`#if DEPTH_PACKING == 3200
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
}`,ib=`#define DISTANCE
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
}`,sb=`#define DISTANCE
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
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,ub=`uniform vec3 diffuse;
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
}`,hb=`#define LAMBERT
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
}`,fb=`#define LAMBERT
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
}`,db=`#define MATCAP
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
}`,pb=`#define MATCAP
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
}`,mb=`#define NORMAL
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
}`,gb=`#define NORMAL
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
}`,_b=`#define PHONG
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
}`,vb=`#define PHONG
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
}`,xb=`#define STANDARD
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
}`,yb=`#define STANDARD
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
}`,Mb=`#define TOON
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
}`,Sb=`#define TOON
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
}`,bb=`uniform float size;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Tb=`uniform vec3 color;
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
}`,Ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Rb=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Ky,alphahash_pars_fragment:Zy,alphamap_fragment:Jy,alphamap_pars_fragment:Qy,alphatest_fragment:tM,alphatest_pars_fragment:eM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:sM,batching_vertex:rM,begin_vertex:oM,beginnormal_vertex:aM,bsdfs:lM,iridescence_fragment:cM,bumpmap_pars_fragment:uM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:_M,color_vertex:vM,common:xM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:MM,displacementmap_pars_vertex:SM,displacementmap_vertex:bM,emissivemap_fragment:EM,emissivemap_pars_fragment:wM,colorspace_fragment:TM,colorspace_pars_fragment:AM,envmap_fragment:RM,envmap_common_pars_fragment:CM,envmap_pars_fragment:PM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:VM,envmap_vertex:IM,fog_vertex:DM,fog_pars_vertex:UM,fog_fragment:NM,fog_pars_fragment:OM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:BM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:kM,lights_pars_begin:HM,lights_toon_fragment:GM,lights_toon_pars_fragment:WM,lights_phong_fragment:XM,lights_phong_pars_fragment:qM,lights_physical_fragment:jM,lights_physical_pars_fragment:YM,lights_fragment_begin:$M,lights_fragment_maps:KM,lights_fragment_end:ZM,logdepthbuf_fragment:JM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:tS,logdepthbuf_vertex:eS,map_fragment:nS,map_pars_fragment:iS,map_particle_fragment:sS,map_particle_pars_fragment:rS,metalnessmap_fragment:oS,metalnessmap_pars_fragment:aS,morphinstance_vertex:lS,morphcolor_vertex:cS,morphnormal_vertex:uS,morphtarget_pars_vertex:hS,morphtarget_vertex:fS,normal_fragment_begin:dS,normal_fragment_maps:pS,normal_pars_fragment:mS,normal_pars_vertex:gS,normal_vertex:_S,normalmap_pars_fragment:vS,clearcoat_normal_fragment_begin:xS,clearcoat_normal_fragment_maps:yS,clearcoat_pars_fragment:MS,iridescence_pars_fragment:SS,opaque_fragment:bS,packing:ES,premultiplied_alpha_fragment:wS,project_vertex:TS,dithering_fragment:AS,dithering_pars_fragment:RS,roughnessmap_fragment:CS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:LS,shadowmap_pars_vertex:IS,shadowmap_vertex:DS,shadowmask_pars_fragment:US,skinbase_vertex:NS,skinning_pars_vertex:OS,skinning_vertex:FS,skinnormal_vertex:BS,specularmap_fragment:zS,specularmap_pars_fragment:kS,tonemapping_fragment:HS,tonemapping_pars_fragment:VS,transmission_fragment:GS,transmission_pars_fragment:WS,uv_pars_fragment:XS,uv_pars_vertex:qS,uv_vertex:jS,worldpos_vertex:YS,background_vert:$S,background_frag:KS,backgroundCube_vert:ZS,backgroundCube_frag:JS,cube_vert:QS,cube_frag:tb,depth_vert:eb,depth_frag:nb,distanceRGBA_vert:ib,distanceRGBA_frag:sb,equirect_vert:rb,equirect_frag:ob,linedashed_vert:ab,linedashed_frag:lb,meshbasic_vert:cb,meshbasic_frag:ub,meshlambert_vert:hb,meshlambert_frag:fb,meshmatcap_vert:db,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:_b,meshphong_frag:vb,meshphysical_vert:xb,meshphysical_frag:yb,meshtoon_vert:Mb,meshtoon_frag:Sb,points_vert:bb,points_frag:Eb,shadow_vert:wb,shadow_frag:Tb,sprite_vert:Ab,sprite_frag:Rb},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},qn={basic:{uniforms:sn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:sn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:sn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:sn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:sn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:sn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:sn([St.points,St.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:sn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:sn([St.common,St.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:sn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:sn([St.sprite,St.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:sn([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:sn([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};qn.physical={uniforms:sn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const zo={r:0,b:0,g:0},Zi=new Hn,Cb=new pe;function Pb(n,t,e,i,s,r,o){const a=new Jt(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const b=g(M);b===null?d(a,l):b&&b.isColor&&(d(b,1),y=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===za)?(u===void 0&&(u=new at(new ee(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:fr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(y.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(Zi)),u.material.toneMapped=ae.getTransfer(b.colorSpace)!==ve,(h!==b||f!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,m=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new at(new Ae(2,2),new Bi({name:"BackgroundMaterial",uniforms:fr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ae.getTransfer(b.colorSpace)!==ve,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,y){M.getRGB(zo,am(n)),i.buffers.color.setClear(zo.r,zo.g,zo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:p}}function Lb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,P,D,G,Z){let rt=!1;const $=h(G,D,P);r!==$&&(r=$,c(r.object)),rt=m(E,G,D,Z),rt&&g(E,G,D,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,b(E,P,D,G),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,P,D){const G=D.wireframe===!0;let Z=i[E.id];Z===void 0&&(Z={},i[E.id]=Z);let rt=Z[P.id];rt===void 0&&(rt={},Z[P.id]=rt);let $=rt[G];return $===void 0&&($=f(l()),rt[G]=$),$}function f(E){const P=[],D=[],G=[];for(let Z=0;Z<e;Z++)P[Z]=0,D[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:G,object:E,attributes:{},index:null}}function m(E,P,D,G){const Z=r.attributes,rt=P.attributes;let $=0;const it=D.getAttributes();for(const j in it)if(it[j].location>=0){const xt=Z[j];let pt=rt[j];if(pt===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor)),xt===void 0||xt.attribute!==pt||pt&&xt.data!==pt.data)return!0;$++}return r.attributesNum!==$||r.index!==G}function g(E,P,D,G){const Z={},rt=P.attributes;let $=0;const it=D.getAttributes();for(const j in it)if(it[j].location>=0){let xt=rt[j];xt===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(xt=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(xt=E.instanceColor));const pt={};pt.attribute=xt,xt&&xt.data&&(pt.data=xt.data),Z[j]=pt,$++}r.attributes=Z,r.attributesNum=$,r.index=G}function _(){const E=r.newAttributes;for(let P=0,D=E.length;P<D;P++)E[P]=0}function p(E){d(E,0)}function d(E,P){const D=r.newAttributes,G=r.enabledAttributes,Z=r.attributeDivisors;D[E]=1,G[E]===0&&(n.enableVertexAttribArray(E),G[E]=1),Z[E]!==P&&(n.vertexAttribDivisor(E,P),Z[E]=P)}function M(){const E=r.newAttributes,P=r.enabledAttributes;for(let D=0,G=P.length;D<G;D++)P[D]!==E[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function y(E,P,D,G,Z,rt,$){$===!0?n.vertexAttribIPointer(E,P,D,Z,rt):n.vertexAttribPointer(E,P,D,G,Z,rt)}function b(E,P,D,G){_();const Z=G.attributes,rt=D.getAttributes(),$=P.defaultAttributeValues;for(const it in rt){const j=rt[it];if(j.location>=0){let vt=Z[it];if(vt===void 0&&(it==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),it==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor)),vt!==void 0){const xt=vt.normalized,pt=vt.itemSize,Lt=t.get(vt);if(Lt===void 0)continue;const qt=Lt.buffer,ot=Lt.type,dt=Lt.bytesPerElement,ut=ot===n.INT||ot===n.UNSIGNED_INT||vt.gpuType===fu;if(vt.isInterleavedBufferAttribute){const _t=vt.data,Nt=_t.stride,Ft=vt.offset;if(_t.isInstancedInterleavedBuffer){for(let Bt=0;Bt<j.locationSize;Bt++)d(j.location+Bt,_t.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Bt=0;Bt<j.locationSize;Bt++)p(j.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Bt=0;Bt<j.locationSize;Bt++)y(j.location+Bt,pt/j.locationSize,ot,xt,Nt*dt,(Ft+pt/j.locationSize*Bt)*dt,ut)}else{if(vt.isInstancedBufferAttribute){for(let _t=0;_t<j.locationSize;_t++)d(j.location+_t,vt.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<j.locationSize;_t++)p(j.location+_t);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let _t=0;_t<j.locationSize;_t++)y(j.location+_t,pt/j.locationSize,ot,xt,pt*dt,pt/j.locationSize*_t*dt,ut)}}else if($!==void 0){const xt=$[it];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(j.location,xt);break;case 3:n.vertexAttrib3fv(j.location,xt);break;case 4:n.vertexAttrib4fv(j.location,xt);break;default:n.vertexAttrib1fv(j.location,xt)}}}}M()}function L(){U();for(const E in i){const P=i[E];for(const D in P){const G=P[D];for(const Z in G)u(G[Z].object),delete G[Z];delete P[D]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const D in P){const G=P[D];for(const Z in G)u(G[Z].object),delete G[Z];delete P[D]}delete i[E.id]}function C(E){for(const P in i){const D=i[P];if(D[E.id]===void 0)continue;const G=D[E.id];for(const Z in G)u(G[Z].object),delete G[Z];delete D[E.id]}}function U(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Ib(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,i,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Db(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===uo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==xi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$n&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:b,maxSamples:L}}function Ub(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ii,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,y=M*4;let b=d.clippingState||null;l.value=b,b=u(g,f,y,m);for(let L=0;L!==y;++L)b[L]=e[L];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,b=m;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Nb(n){let t=new WeakMap;function e(o,a){return a===ac?o.mapping=ar:a===lc&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ac||a===lc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hm(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ob extends lm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,hf=[.125,.215,.35,.446,.526,.582],is=20,Ll=new Ob,ff=new Jt;let Il=null,Dl=0,Ul=0,Nl=!1;const ts=(1+Math.sqrt(5))/2,ks=1/ts,df=[new N(-ts,ks,0),new N(ts,ks,0),new N(-ks,0,ts),new N(ks,0,ts),new N(0,ts,-ks),new N(0,ts,ks),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class pf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Il=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Dl,Ul),this._renderer.xr.enabled=Nl,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:uo,format:Fn,colorSpace:zi,depthBuffer:!1},s=mf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fb(r)),this._blurMaterial=Bb(r,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,i,s){const a=new fn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ff),u.toneMapping=Ni,u.autoClear=!1;const m=new Se({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new at(new ee,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ff),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;ko(s,M*y,d>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ar||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ko(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ll)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=df[(s-r-1)%df.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new at(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*is-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):is;p>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${is}`);const d=[];let M=0;for(let C=0;C<is;++C){const U=C/_,w=Math.exp(-U*U/2);d.push(w),C===0?M+=w:C<p&&(M+=2*w)}for(let C=0;C<d.length;C++)d[C]=d[C]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const b=this._sizeLods[s],L=3*b*(s>y-Ys?s-y+Ys:0),R=4*(this._cubeSize-b);ko(e,L,R,3*b,2*b),l.setRenderTarget(e),l.render(h,Ll)}}function Fb(n){const t=[],e=[],i=[];let s=n;const r=n-Ys+1+hf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ys?l=hf[o-n+Ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,M=new Float32Array(_*g*m),y=new Float32Array(p*g*m),b=new Float32Array(d*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,U=R>2?0:-1,w=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];M.set(w,_*g*R),y.set(f,p*g*R);const E=[R,R,R,R,R,R];b.set(E,d*g*R)}const L=new mn;L.setAttribute("position",new An(M,_)),L.setAttribute("uv",new An(y,p)),L.setAttribute("faceIndex",new An(b,d)),t.push(L),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function mf(n,t,e){const i=new ms(n,t,e);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Bb(n,t,e){const i=new Float32Array(is),s=new N(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function gf(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function _f(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}function zb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ac||l===lc,u=l===ar||l===lr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new pf(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new pf(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function kb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&nr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Hb(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let y=0,b=M.length;y<b;y+=3){const L=M[y+0],R=M[y+1],C=M[y+2];f.push(L,R,R,C,C,L)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const L=y+0,R=y+1,C=y+2;f.push(L,R,R,C,C,L)}}else return;const p=new(em(f)?om:rm)(f,1);p.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Vb(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*o,g),e.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,i,1)}function h(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=m[M];for(let M=0;M<_.length;M++)e.update(d,i,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Gb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Wb(n,t,e){const i=new WeakMap,s=new ye;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let L=a.attributes.position.count*b,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const C=new Float32Array(L*R*4*h),U=new im(C,L,R,h);U.type=$n,U.needsUpdate=!0;const w=b*4;for(let P=0;P<h;P++){const D=d[P],G=M[P],Z=y[P],rt=L*R*4*P;for(let $=0;$<D.count;$++){const it=$*w;g===!0&&(s.fromBufferAttribute(D,$),C[rt+it+0]=s.x,C[rt+it+1]=s.y,C[rt+it+2]=s.z,C[rt+it+3]=0),_===!0&&(s.fromBufferAttribute(G,$),C[rt+it+4]=s.x,C[rt+it+5]=s.y,C[rt+it+6]=s.z,C[rt+it+7]=0),p===!0&&(s.fromBufferAttribute(Z,$),C[rt+it+8]=s.x,C[rt+it+9]=s.y,C[rt+it+10]=s.z,C[rt+it+11]=Z.itemSize===4?s.w:1)}}f={count:h,texture:U,size:new Rt(L,R)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Xb(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class dm extends qe{constructor(t,e,i,s,r,o,a,l,c,u=er){if(u!==er&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===er&&(i=ps),i===void 0&&u===ur&&(i=cr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pm=new qe,vf=new dm(1,1),mm=new im,gm=new Iy,_m=new um,xf=[],yf=[],Mf=new Float32Array(16),Sf=new Float32Array(9),bf=new Float32Array(4);function gr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=xf[s];if(r===void 0&&(r=new Float32Array(s),xf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ha(n,t){let e=yf[t];e===void 0&&(e=new Int32Array(t),yf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function qb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function $b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function Kb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;bf.set(i),n.uniformMatrix2fv(this.addr,!1,bf),Be(e,i)}}function Zb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Sf.set(i),n.uniformMatrix3fv(this.addr,!1,Sf),Be(e,i)}}function Jb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Mf.set(i),n.uniformMatrix4fv(this.addr,!1,Mf),Be(e,i)}}function Qb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function tE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function eE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function nE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function iE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function rE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function oE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function aE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vf.compareFunction=Qp,r=vf):r=pm,e.setTexture2D(t||r,s)}function lE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gm,s)}function cE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_m,s)}function uE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mm,s)}function hE(n){switch(n){case 5126:return qb;case 35664:return jb;case 35665:return Yb;case 35666:return $b;case 35674:return Kb;case 35675:return Zb;case 35676:return Jb;case 5124:case 35670:return Qb;case 35667:case 35671:return tE;case 35668:case 35672:return eE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return sE;case 36295:return rE;case 36296:return oE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return uE}}function fE(n,t){n.uniform1fv(this.addr,t)}function dE(n,t){const e=gr(t,this.size,2);n.uniform2fv(this.addr,e)}function pE(n,t){const e=gr(t,this.size,3);n.uniform3fv(this.addr,e)}function mE(n,t){const e=gr(t,this.size,4);n.uniform4fv(this.addr,e)}function gE(n,t){const e=gr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function _E(n,t){const e=gr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function vE(n,t){const e=gr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function xE(n,t){n.uniform1iv(this.addr,t)}function yE(n,t){n.uniform2iv(this.addr,t)}function ME(n,t){n.uniform3iv(this.addr,t)}function SE(n,t){n.uniform4iv(this.addr,t)}function bE(n,t){n.uniform1uiv(this.addr,t)}function EE(n,t){n.uniform2uiv(this.addr,t)}function wE(n,t){n.uniform3uiv(this.addr,t)}function TE(n,t){n.uniform4uiv(this.addr,t)}function AE(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||pm,r[o])}function RE(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gm,r[o])}function CE(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_m,r[o])}function PE(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mm,r[o])}function LE(n){switch(n){case 5126:return fE;case 35664:return dE;case 35665:return pE;case 35666:return mE;case 35674:return gE;case 35675:return _E;case 35676:return vE;case 5124:case 35670:return xE;case 35667:case 35671:return yE;case 35668:case 35672:return ME;case 35669:case 35673:return SE;case 5125:return bE;case 36294:return EE;case 36295:return wE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return PE}}class IE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hE(e.type)}}class DE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LE(e.type)}}class UE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function Ef(n,t){n.seq.push(t),n.map[t.id]=t}function NE(n,t,e){const i=n.name,s=i.length;for(Ol.lastIndex=0;;){const r=Ol.exec(i),o=Ol.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ef(e,c===void 0?new IE(a,n,t):new DE(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new UE(a),Ef(e,h)),e=h}}}class oa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);NE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function wf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const OE=37297;let FE=0;function BE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function zE(n){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n);let i;switch(t===e?i="":t===Sa&&e===Ma?i="LinearDisplayP3ToLinearSRGB":t===Ma&&e===Sa&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case ka:return[i,"LinearTransferOETF"];case Ke:case xu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Tf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+BE(n.getShaderSource(t),o)}else return s}function kE(n,t){const e=zE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function HE(n,t){let e;switch(t){case qx:e="Linear";break;case jx:e="Reinhard";break;case Yx:e="OptimizedCineon";break;case Hp:e="ACESFilmic";break;case Kx:e="AgX";break;case Zx:e="Neutral";break;case $x:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new N;function VE(){ae.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function WE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function XE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Or(n){return n!==""}function Af(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(qE,YE)}const jE=new Map;function YE(n,t){let e=$t[t];if(e===void 0){const i=jE.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bc(e)}const $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(n){return n.replace($E,KE)}function KE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ZE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===zp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function JE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case lr:t="ENVMAP_TYPE_CUBE";break;case za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function QE(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===lr&&(t="ENVMAP_MODE_REFRACTION"),t}function tw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kp:t="ENVMAP_BLENDING_MULTIPLY";break;case Wx:t="ENVMAP_BLENDING_MIX";break;case Xx:t="ENVMAP_BLENDING_ADD";break}return t}function ew(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function nw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ZE(e),c=JE(e),u=QE(e),h=tw(e),f=ew(e),m=GE(e),g=WE(r),_=s.createProgram();let p,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(p=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ni?HE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,kE("linearToOutputTexel",e.outputColorSpace),VE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=Bc(o),o=Af(o,e),o=Rf(o,e),a=Bc(a),a=Af(a,e),a=Rf(a,e),o=Cf(o),a=Cf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+p+o,b=M+d+a,L=wf(s,s.VERTEX_SHADER,y),R=wf(s,s.FRAGMENT_SHADER,b);s.attachShader(_,L),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(L).trim(),Z=s.getShaderInfoLog(R).trim();let rt=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,R);else{const it=Tf(s,L,"vertex"),j=Tf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+it+`
`+j)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(G===""||Z==="")&&($=!1);$&&(P.diagnostics={runnable:rt,programLog:D,vertexShader:{log:G,prefix:p},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(L),s.deleteShader(R),U=new oa(s,_),w=XE(s,_)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,OE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let iw=0;class sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rw(t),e.set(t,i)),i}}class rw{constructor(t){this.id=iw++,this.code=t,this.usedTimes=0}}function ow(n,t,e,i,s,r,o){const a=new Su,l=new sw,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,E,P,D,G){const Z=D.fog,rt=G.geometry,$=w.isMeshStandardMaterial?D.environment:null,it=(w.isMeshStandardMaterial?e:t).get(w.envMap||$),j=it&&it.mapping===za?it.image.height:null,vt=g[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const xt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,pt=xt!==void 0?xt.length:0;let Lt=0;rt.morphAttributes.position!==void 0&&(Lt=1),rt.morphAttributes.normal!==void 0&&(Lt=2),rt.morphAttributes.color!==void 0&&(Lt=3);let qt,ot,dt,ut;if(vt){const te=qn[vt];qt=te.vertexShader,ot=te.fragmentShader}else qt=w.vertexShader,ot=w.fragmentShader,l.update(w),dt=l.getVertexShaderID(w),ut=l.getFragmentShaderID(w);const _t=n.getRenderTarget(),Nt=G.isInstancedMesh===!0,Ft=G.isBatchedMesh===!0,Bt=!!w.map,Qt=!!w.matcap,v=!!it,O=!!w.aoMap,q=!!w.lightMap,nt=!!w.bumpMap,F=!!w.normalMap,H=!!w.displacementMap,I=!!w.emissiveMap,k=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,B=w.clearcoat>0,W=w.dispersion>0,J=w.iridescence>0,K=w.sheen>0,mt=w.transmission>0,ct=x&&!!w.anisotropyMap,ht=B&&!!w.clearcoatMap,Tt=B&&!!w.clearcoatNormalMap,lt=B&&!!w.clearcoatRoughnessMap,Mt=J&&!!w.iridescenceMap,Vt=J&&!!w.iridescenceThicknessMap,Ot=K&&!!w.sheenColorMap,wt=K&&!!w.sheenRoughnessMap,Ct=!!w.specularMap,It=!!w.specularColorMap,fe=!!w.specularIntensityMap,S=mt&&!!w.transmissionMap,Y=mt&&!!w.thicknessMap,Q=!!w.gradientMap,st=!!w.alphaMap,ft=w.alphaTest>0,Dt=!!w.alphaHash,Wt=!!w.extensions;let Te=Ni;w.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Te=n.toneMapping);const Ue={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:qt,fragmentShader:ot,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:ut,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&G._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&G.instanceColor!==null,instancingMorph:Nt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:zi,alphaToCoverage:!!w.alphaToCoverage,map:Bt,matcap:Qt,envMap:v,envMapMode:v&&it.mapping,envMapCubeUVHeight:j,aoMap:O,lightMap:q,bumpMap:nt,normalMap:F,displacementMap:f&&H,emissiveMap:I,normalMapObjectSpace:F&&w.normalMapType===ey,normalMapTangentSpace:F&&w.normalMapType===Jp,metalnessMap:k,roughnessMap:T,anisotropy:x,anisotropyMap:ct,clearcoat:B,clearcoatMap:ht,clearcoatNormalMap:Tt,clearcoatRoughnessMap:lt,dispersion:W,iridescence:J,iridescenceMap:Mt,iridescenceThicknessMap:Vt,sheen:K,sheenColorMap:Ot,sheenRoughnessMap:wt,specularMap:Ct,specularColorMap:It,specularIntensityMap:fe,transmission:mt,transmissionMap:S,thicknessMap:Y,gradientMap:Q,opaque:w.transparent===!1&&w.blending===tr&&w.alphaToCoverage===!1,alphaMap:st,alphaTest:ft,alphaHash:Dt,combine:w.combine,mapUv:Bt&&_(w.map.channel),aoMapUv:O&&_(w.aoMap.channel),lightMapUv:q&&_(w.lightMap.channel),bumpMapUv:nt&&_(w.bumpMap.channel),normalMapUv:F&&_(w.normalMap.channel),displacementMapUv:H&&_(w.displacementMap.channel),emissiveMapUv:I&&_(w.emissiveMap.channel),metalnessMapUv:k&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:ct&&_(w.anisotropyMap.channel),clearcoatMapUv:ht&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ct&&_(w.specularMap.channel),specularColorMapUv:It&&_(w.specularColorMap.channel),specularIntensityMapUv:fe&&_(w.specularIntensityMap.channel),transmissionMapUv:S&&_(w.transmissionMap.channel),thicknessMapUv:Y&&_(w.thicknessMap.channel),alphaMapUv:st&&_(w.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(F||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!rt.attributes.uv&&(Bt||st),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,decodeVideoTexture:Bt&&w.map.isVideoTexture===!0&&ae.getTransfer(w.map.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ie,flipSided:w.side===cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function d(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)E.push(P),E.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(M(E,w),y(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function M(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function y(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),w.push(a.mask)}function b(w){const E=g[w.type];let P;if(E){const D=qn[E];P=Wy.clone(D.uniforms)}else P=w.uniforms;return P}function L(w,E){let P;for(let D=0,G=u.length;D<G;D++){const Z=u[D];if(Z.cacheKey===E){P=Z,++P.usedTimes;break}}return P===void 0&&(P=new nw(n,E,w,r),u.push(P)),P}function R(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:U}}function aw(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function lw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Lf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function If(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,m,g,_,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),t++,d}function a(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||lw),i.length>1&&i.sort(f||Lf),s.length>1&&s.sort(f||Lf)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function cw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new If,n.set(i,[o])):s>=r.length?(o=new If,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function uw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Jt};break;case"SpotLight":e={position:new N,direction:new N,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function hw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let fw=0;function dw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pw(n){const t=new uw,e=hw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new pe,o=new pe;function a(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,M=0,y=0,b=0,L=0,R=0,C=0;c.sort(dw);for(let w=0,E=c.length;w<E;w++){const P=c[w],D=P.color,G=P.intensity,Z=P.distance,rt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*G,h+=D.g*G,f+=D.b*G;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],G);C++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const it=P.shadow,j=e.get(P);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=P.shadow.matrix,M++}i.directional[m]=$,m++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(D).multiplyScalar(G),$.distance=Z,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[_]=$;const it=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,it.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[_]=it.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=rt,b++}_++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(D).multiplyScalar(G),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=$,p++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const it=P.shadow,j=e.get(P);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,j.shadowCameraNear=it.camera.near,j.shadowCameraFar=it.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=rt,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=$,g++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(G),$.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[d]=$,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==M||U.numPointShadows!==y||U.numSpotShadows!==b||U.numSpotMaps!==L||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,U.directionalLength=m,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=M,U.numPointShadows=y,U.numSpotShadows=b,U.numSpotMaps=L,U.numLightProbes=C,i.version=fw++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const y=c[d];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(y.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Df(n){const t=new pw(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Df(n),t.set(s,[a])):r>=o.length?(a=new Df(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class gw extends mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _w extends mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
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
}`;function yw(n,t,e){let i=new bu;const s=new Rt,r=new Rt,o=new ye,a=new gw({depthPacking:ty}),l=new _w,c={},u=e.maxTextureSize,h={[Fi]:cn,[cn]:Fi,[Ie]:Ie},f=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:vw,fragmentShader:xw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let d=this.type;this.render=function(R,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ui),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=d!==ai&&this.type===ai,Z=d===ai&&this.type!==ai;for(let rt=0,$=R.length;rt<$;rt++){const it=R[rt],j=it.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const vt=j.getFrameExtents();if(s.multiply(vt),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/vt.x),s.x=r.x*vt.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/vt.y),s.y=r.y*vt.y,j.mapSize.y=r.y)),j.map===null||G===!0||Z===!0){const pt=this.type!==ai?{minFilter:dn,magFilter:dn}:{};j.map!==null&&j.map.dispose(),j.map=new ms(s.x,s.y,pt),j.map.texture.name=it.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const xt=j.getViewportCount();for(let pt=0;pt<xt;pt++){const Lt=j.getViewport(pt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),D.viewport(o),j.updateMatrices(it,pt),i=j.getFrustum(),b(C,U,j.camera,it,this.type)}j.isPointLightShadow!==!0&&this.type===ai&&M(j,U),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,E,P)};function M(R,C){const U=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ms(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,U,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,U,m,_,null)}function y(R,C,U,w){let E=null;const P=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)E=P;else if(E=U.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=E.uuid,G=C.uuid;let Z=c[D];Z===void 0&&(Z={},c[D]=Z);let rt=Z[G];rt===void 0&&(rt=E.clone(),Z[G]=rt,C.addEventListener("dispose",L)),E=rt}if(E.visible=C.visible,E.wireframe=C.wireframe,w===ai?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=n.properties.get(E);D.light=U}return E}function b(R,C,U,w,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const G=t.update(R),Z=R.material;if(Array.isArray(Z)){const rt=G.groups;for(let $=0,it=rt.length;$<it;$++){const j=rt[$],vt=Z[j.materialIndex];if(vt&&vt.visible){const xt=y(R,vt,w,E);R.onBeforeShadow(n,R,C,U,G,xt,j),n.renderBufferDirect(U,null,G,xt,R,j),R.onAfterShadow(n,R,C,U,G,xt,j)}}}else if(Z.visible){const rt=y(R,Z,w,E);R.onBeforeShadow(n,R,C,U,G,rt,null),n.renderBufferDirect(U,null,G,rt,R,null),R.onAfterShadow(n,R,C,U,G,rt,null)}}const D=R.children;for(let G=0,Z=D.length;G<Z;G++)b(D[G],C,U,w,E)}function L(R){R.target.removeEventListener("dispose",L);for(const U in c){const w=c[U],E=R.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function Mw(n){function t(){let S=!1;const Y=new ye;let Q=null;const st=new ye(0,0,0,0);return{setMask:function(ft){Q!==ft&&!S&&(n.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){S=ft},setClear:function(ft,Dt,Wt,Te,Ue){Ue===!0&&(ft*=Te,Dt*=Te,Wt*=Te),Y.set(ft,Dt,Wt,Te),st.equals(Y)===!1&&(n.clearColor(ft,Dt,Wt,Te),st.copy(Y))},reset:function(){S=!1,Q=null,st.set(-1,0,0,0)}}}function e(){let S=!1,Y=null,Q=null,st=null;return{setTest:function(ft){ft?ut(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!S&&(n.depthMask(ft),Y=ft)},setFunc:function(ft){if(Q!==ft){switch(ft){case Fx:n.depthFunc(n.NEVER);break;case Bx:n.depthFunc(n.ALWAYS);break;case zx:n.depthFunc(n.LESS);break;case xa:n.depthFunc(n.LEQUAL);break;case kx:n.depthFunc(n.EQUAL);break;case Hx:n.depthFunc(n.GEQUAL);break;case Vx:n.depthFunc(n.GREATER);break;case Gx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ft}},setLocked:function(ft){S=ft},setClear:function(ft){st!==ft&&(n.clearDepth(ft),st=ft)},reset:function(){S=!1,Y=null,Q=null,st=null}}}function i(){let S=!1,Y=null,Q=null,st=null,ft=null,Dt=null,Wt=null,Te=null,Ue=null;return{setTest:function(te){S||(te?ut(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(te){Y!==te&&!S&&(n.stencilMask(te),Y=te)},setFunc:function(te,Ne,Re){(Q!==te||st!==Ne||ft!==Re)&&(n.stencilFunc(te,Ne,Re),Q=te,st=Ne,ft=Re)},setOp:function(te,Ne,Re){(Dt!==te||Wt!==Ne||Te!==Re)&&(n.stencilOp(te,Ne,Re),Dt=te,Wt=Ne,Te=Re)},setLocked:function(te){S=te},setClear:function(te){Ue!==te&&(n.clearStencil(te),Ue=te)},reset:function(){S=!1,Y=null,Q=null,st=null,ft=null,Dt=null,Wt=null,Te=null,Ue=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,M=null,y=null,b=null,L=null,R=new Jt(0,0,0),C=0,U=!1,w=null,E=null,P=null,D=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,$=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(it)[1]),rt=$>=1):it.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),rt=$>=2);let j=null,vt={};const xt=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),Lt=new ye().fromArray(xt),qt=new ye().fromArray(pt);function ot(S,Y,Q,st){const ft=new Uint8Array(4),Dt=n.createTexture();n.bindTexture(S,Dt),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<Q;Wt++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(Y,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(Y+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return Dt}const dt={};dt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),r.setFunc(xa),nt(!1),F(zh),ut(n.CULL_FACE),O(Ui);function ut(S){c[S]!==!0&&(n.enable(S),c[S]=!0)}function _t(S){c[S]!==!1&&(n.disable(S),c[S]=!1)}function Nt(S,Y){return u[S]!==Y?(n.bindFramebuffer(S,Y),u[S]=Y,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Y),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Y),!0):!1}function Ft(S,Y){let Q=f,st=!1;if(S){Q=h.get(Y),Q===void 0&&(Q=[],h.set(Y,Q));const ft=S.textures;if(Q.length!==ft.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Dt=0,Wt=ft.length;Dt<Wt;Dt++)Q[Dt]=n.COLOR_ATTACHMENT0+Dt;Q.length=ft.length,st=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,st=!0);st&&n.drawBuffers(Q)}function Bt(S){return m!==S?(n.useProgram(S),m=S,!0):!1}const Qt={[ns]:n.FUNC_ADD,[yx]:n.FUNC_SUBTRACT,[Mx]:n.FUNC_REVERSE_SUBTRACT};Qt[Sx]=n.MIN,Qt[bx]=n.MAX;const v={[Ex]:n.ZERO,[wx]:n.ONE,[Tx]:n.SRC_COLOR,[rc]:n.SRC_ALPHA,[Ix]:n.SRC_ALPHA_SATURATE,[Px]:n.DST_COLOR,[Rx]:n.DST_ALPHA,[Ax]:n.ONE_MINUS_SRC_COLOR,[oc]:n.ONE_MINUS_SRC_ALPHA,[Lx]:n.ONE_MINUS_DST_COLOR,[Cx]:n.ONE_MINUS_DST_ALPHA,[Dx]:n.CONSTANT_COLOR,[Ux]:n.ONE_MINUS_CONSTANT_COLOR,[Nx]:n.CONSTANT_ALPHA,[Ox]:n.ONE_MINUS_CONSTANT_ALPHA};function O(S,Y,Q,st,ft,Dt,Wt,Te,Ue,te){if(S===Ui){g===!0&&(_t(n.BLEND),g=!1);return}if(g===!1&&(ut(n.BLEND),g=!0),S!==xx){if(S!==_||te!==U){if((p!==ns||y!==ns)&&(n.blendEquation(n.FUNC_ADD),p=ns,y=ns),te)switch(S){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case or:n.blendFunc(n.ONE,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case or:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}d=null,M=null,b=null,L=null,R.set(0,0,0),C=0,_=S,U=te}return}ft=ft||Y,Dt=Dt||Q,Wt=Wt||st,(Y!==p||ft!==y)&&(n.blendEquationSeparate(Qt[Y],Qt[ft]),p=Y,y=ft),(Q!==d||st!==M||Dt!==b||Wt!==L)&&(n.blendFuncSeparate(v[Q],v[st],v[Dt],v[Wt]),d=Q,M=st,b=Dt,L=Wt),(Te.equals(R)===!1||Ue!==C)&&(n.blendColor(Te.r,Te.g,Te.b,Ue),R.copy(Te),C=Ue),_=S,U=!1}function q(S,Y){S.side===Ie?_t(n.CULL_FACE):ut(n.CULL_FACE);let Q=S.side===cn;Y&&(Q=!Q),nt(Q),S.blending===tr&&S.transparent===!1?O(Ui):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),s.setMask(S.colorWrite);const st=S.stencilWrite;o.setTest(st),st&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),I(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(S){w!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),w=S)}function F(S){S!==_x?(ut(n.CULL_FACE),S!==E&&(S===zh?n.cullFace(n.BACK):S===vx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),E=S}function H(S){S!==P&&(rt&&n.lineWidth(S),P=S)}function I(S,Y,Q){S?(ut(n.POLYGON_OFFSET_FILL),(D!==Y||G!==Q)&&(n.polygonOffset(Y,Q),D=Y,G=Q)):_t(n.POLYGON_OFFSET_FILL)}function k(S){S?ut(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function T(S){S===void 0&&(S=n.TEXTURE0+Z-1),j!==S&&(n.activeTexture(S),j=S)}function x(S,Y,Q){Q===void 0&&(j===null?Q=n.TEXTURE0+Z-1:Q=j);let st=vt[Q];st===void 0&&(st={type:void 0,texture:void 0},vt[Q]=st),(st.type!==S||st.texture!==Y)&&(j!==Q&&(n.activeTexture(Q),j=Q),n.bindTexture(S,Y||dt[S]),st.type=S,st.texture=Y)}function B(){const S=vt[j];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function mt(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ot(S){Lt.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),Lt.copy(S))}function wt(S){qt.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),qt.copy(S))}function Ct(S,Y){let Q=l.get(Y);Q===void 0&&(Q=new WeakMap,l.set(Y,Q));let st=Q.get(S);st===void 0&&(st=n.getUniformBlockIndex(Y,S.name),Q.set(S,st))}function It(S,Y){const st=l.get(Y).get(S);a.get(Y)!==st&&(n.uniformBlockBinding(Y,st,S.__bindingPointIndex),a.set(Y,st))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},j=null,vt={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,M=null,y=null,b=null,L=null,R=new Jt(0,0,0),C=0,U=!1,w=null,E=null,P=null,D=null,G=null,Lt.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ut,disable:_t,bindFramebuffer:Nt,drawBuffers:Ft,useProgram:Bt,setBlending:O,setMaterial:q,setFlipSided:nt,setCullFace:F,setLineWidth:H,setPolygonOffset:I,setScissorTest:k,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:W,compressedTexImage3D:J,texImage2D:Mt,texImage3D:Vt,updateUBOMapping:Ct,uniformBlockBinding:It,texStorage2D:Tt,texStorage3D:lt,texSubImage2D:K,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ht,scissor:Ot,viewport:wt,reset:fe}}function Uf(n,t,e,i){const s=Sw(i);switch(e){case qp:return n*t;case Yp:return n*t;case $p:return n*t*2;case mu:return n*t/s.components*s.byteLength;case gu:return n*t/s.components*s.byteLength;case Kp:return n*t*2/s.components*s.byteLength;case _u:return n*t*2/s.components*s.byteLength;case jp:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case vu:return n*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:case pc:return Math.max(n,16)*Math.max(t,8)/4;case hc:case dc:return Math.max(n,8)*Math.max(t,8)/2;case mc:case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ra:case Ic:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Zp:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Nc:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sw(n){switch(n){case xi:case Gp:return{byteLength:1,components:1};case Qr:case Wp:case uo:return{byteLength:2,components:1};case du:case pu:return{byteLength:2,components:4};case ps:case fu:case $n:return{byteLength:4,components:1};case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):to("canvas")}function _(T,x,B){let W=1;const J=k(T);if((J.width>B||J.height>B)&&(W=B/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(W*J.width),mt=Math.floor(W*J.height);h===void 0&&(h=g(K,mt));const ct=x?g(K,mt):h;return ct.width=K,ct.height=mt,ct.getContext("2d").drawImage(T,0,0,K,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+mt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==dn&&T.minFilter!==Xe}function d(T){n.generateMipmap(T)}function M(T,x,B,W,J=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=x;if(x===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),x===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),x===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),x===n.RGBA){const mt=J?ya:ae.getTransfer(W);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=mt===ve?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(T,x){let B;return T?x===null||x===ps||x===cr?B=n.DEPTH24_STENCIL8:x===$n?B=n.DEPTH32F_STENCIL8:x===Qr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ps||x===cr?B=n.DEPTH_COMPONENT24:x===$n?B=n.DEPTH_COMPONENT32F:x===Qr&&(B=n.DEPTH_COMPONENT16),B}function b(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==dn&&T.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){const x=T.target;x.removeEventListener("dispose",L),C(x),x.isVideoTexture&&u.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),w(x)}function C(T){const x=i.get(T);if(x.__webglInit===void 0)return;const B=T.source,W=f.get(B);if(W){const J=W[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&U(T),Object.keys(W).length===0&&f.delete(B)}i.remove(T)}function U(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const B=T.source,W=f.get(B);delete W[x.__cacheKey],o.memory.textures--}function w(T){const x=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let J=0;J<x.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[W][J]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let W=0,J=B.length;W<J;W++){const K=i.get(B[W]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(B[W])}i.remove(T)}let E=0;function P(){E=0}function D(){const T=E;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),E+=1,T}function G(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Z(T,x){const B=i.get(T);if(T.isVideoTexture&&H(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(B,T,x);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function rt(T,x){const B=i.get(T);if(T.version>0&&B.__version!==T.version){qt(B,T,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function $(T,x){const B=i.get(T);if(T.version>0&&B.__version!==T.version){qt(B,T,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function it(T,x){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ot(B,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const j={[cc]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},vt={[dn]:n.NEAREST,[Jx]:n.NEAREST_MIPMAP_NEAREST,[yo]:n.NEAREST_MIPMAP_LINEAR,[Xe]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},xt={[ny]:n.NEVER,[ly]:n.ALWAYS,[iy]:n.LESS,[Qp]:n.LEQUAL,[sy]:n.EQUAL,[ay]:n.GEQUAL,[ry]:n.GREATER,[oy]:n.NOTEQUAL};function pt(T,x){if(x.type===$n&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===fl||x.magFilter===yo||x.magFilter===os||x.minFilter===Xe||x.minFilter===fl||x.minFilter===yo||x.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,j[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,j[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,j[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,vt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==yo&&x.minFilter!==os||x.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Lt(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L));const W=x.source;let J=f.get(W);J===void 0&&(J={},f.set(W,J));const K=G(x);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[K].usedTimes++;const mt=J[T.__cacheKey];mt!==void 0&&(J[T.__cacheKey].usedTimes--,mt.usedTimes===0&&U(x)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return B}function qt(T,x,B){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const J=Lt(T,x),K=x.source;e.bindTexture(W,T.__webglTexture,n.TEXTURE0+B);const mt=i.get(K);if(K.version!==mt.__version||J===!0){e.activeTexture(n.TEXTURE0+B);const ct=ae.getPrimaries(ae.workingColorSpace),ht=x.colorSpace===Di?null:ae.getPrimaries(x.colorSpace),Tt=x.colorSpace===Di||ct===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let lt=_(x.image,!1,s.maxTextureSize);lt=I(x,lt);const Mt=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type);let Ot=M(x.internalFormat,Mt,Vt,x.colorSpace,x.isVideoTexture);pt(W,x);let wt;const Ct=x.mipmaps,It=x.isVideoTexture!==!0,fe=mt.__version===void 0||J===!0,S=K.dataReady,Y=b(x,lt);if(x.isDepthTexture)Ot=y(x.format===ur,x.type),fe&&(It?e.texStorage2D(n.TEXTURE_2D,1,Ot,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Mt,Vt,null));else if(x.isDataTexture)if(Ct.length>0){It&&fe&&e.texStorage2D(n.TEXTURE_2D,Y,Ot,Ct[0].width,Ct[0].height);for(let Q=0,st=Ct.length;Q<st;Q++)wt=Ct[Q],It?S&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Mt,Vt,wt.data):e.texImage2D(n.TEXTURE_2D,Q,Ot,wt.width,wt.height,0,Mt,Vt,wt.data);x.generateMipmaps=!1}else It?(fe&&e.texStorage2D(n.TEXTURE_2D,Y,Ot,lt.width,lt.height),S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,Vt,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Mt,Vt,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Y,Ot,Ct[0].width,Ct[0].height,lt.depth);for(let Q=0,st=Ct.length;Q<st;Q++)if(wt=Ct[Q],x.format!==Fn)if(Mt!==null)if(It){if(S)if(x.layerUpdates.size>0){const ft=Uf(wt.width,wt.height,x.format,x.type);for(const Dt of x.layerUpdates){const Wt=wt.data.subarray(Dt*ft/wt.data.BYTES_PER_ELEMENT,(Dt+1)*ft/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Dt,wt.width,wt.height,1,Mt,Wt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,wt.width,wt.height,lt.depth,Mt,wt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ot,wt.width,wt.height,lt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?S&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,wt.width,wt.height,lt.depth,Mt,Vt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ot,wt.width,wt.height,lt.depth,0,Mt,Vt,wt.data)}else{It&&fe&&e.texStorage2D(n.TEXTURE_2D,Y,Ot,Ct[0].width,Ct[0].height);for(let Q=0,st=Ct.length;Q<st;Q++)wt=Ct[Q],x.format!==Fn?Mt!==null?It?S&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Mt,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Ot,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?S&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Mt,Vt,wt.data):e.texImage2D(n.TEXTURE_2D,Q,Ot,wt.width,wt.height,0,Mt,Vt,wt.data)}else if(x.isDataArrayTexture)if(It){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Y,Ot,lt.width,lt.height,lt.depth),S)if(x.layerUpdates.size>0){const Q=Uf(lt.width,lt.height,x.format,x.type);for(const st of x.layerUpdates){const ft=lt.data.subarray(st*Q/lt.data.BYTES_PER_ELEMENT,(st+1)*Q/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,lt.width,lt.height,1,Mt,Vt,ft)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Vt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,lt.width,lt.height,lt.depth,0,Mt,Vt,lt.data);else if(x.isData3DTexture)It?(fe&&e.texStorage3D(n.TEXTURE_3D,Y,Ot,lt.width,lt.height,lt.depth),S&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Vt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,lt.width,lt.height,lt.depth,0,Mt,Vt,lt.data);else if(x.isFramebufferTexture){if(fe)if(It)e.texStorage2D(n.TEXTURE_2D,Y,Ot,lt.width,lt.height);else{let Q=lt.width,st=lt.height;for(let ft=0;ft<Y;ft++)e.texImage2D(n.TEXTURE_2D,ft,Ot,Q,st,0,Mt,Vt,null),Q>>=1,st>>=1}}else if(Ct.length>0){if(It&&fe){const Q=k(Ct[0]);e.texStorage2D(n.TEXTURE_2D,Y,Ot,Q.width,Q.height)}for(let Q=0,st=Ct.length;Q<st;Q++)wt=Ct[Q],It?S&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Mt,Vt,wt):e.texImage2D(n.TEXTURE_2D,Q,Ot,Mt,Vt,wt);x.generateMipmaps=!1}else if(It){if(fe){const Q=k(lt);e.texStorage2D(n.TEXTURE_2D,Y,Ot,Q.width,Q.height)}S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Vt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Mt,Vt,lt);p(x)&&d(W),mt.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ot(T,x,B){if(x.image.length!==6)return;const W=Lt(T,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const K=i.get(J);if(J.version!==K.__version||W===!0){e.activeTexture(n.TEXTURE0+B);const mt=ae.getPrimaries(ae.workingColorSpace),ct=x.colorSpace===Di?null:ae.getPrimaries(x.colorSpace),ht=x.colorSpace===Di||mt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,lt=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let st=0;st<6;st++)!Tt&&!lt?Mt[st]=_(x.image[st],!0,s.maxCubemapSize):Mt[st]=lt?x.image[st].image:x.image[st],Mt[st]=I(x,Mt[st]);const Vt=Mt[0],Ot=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),Ct=M(x.internalFormat,Ot,wt,x.colorSpace),It=x.isVideoTexture!==!0,fe=K.__version===void 0||W===!0,S=J.dataReady;let Y=b(x,Vt);pt(n.TEXTURE_CUBE_MAP,x);let Q;if(Tt){It&&fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Y,Ct,Vt.width,Vt.height);for(let st=0;st<6;st++){Q=Mt[st].mipmaps;for(let ft=0;ft<Q.length;ft++){const Dt=Q[ft];x.format!==Fn?Ot!==null?It?S&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft,0,0,Dt.width,Dt.height,Ot,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft,Ct,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft,0,0,Dt.width,Dt.height,Ot,wt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft,Ct,Dt.width,Dt.height,0,Ot,wt,Dt.data)}}}else{if(Q=x.mipmaps,It&&fe){Q.length>0&&Y++;const st=k(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Y,Ct,st.width,st.height)}for(let st=0;st<6;st++)if(lt){It?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Mt[st].width,Mt[st].height,Ot,wt,Mt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ct,Mt[st].width,Mt[st].height,0,Ot,wt,Mt[st].data);for(let ft=0;ft<Q.length;ft++){const Wt=Q[ft].image[st].image;It?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft+1,0,0,Wt.width,Wt.height,Ot,wt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft+1,Ct,Wt.width,Wt.height,0,Ot,wt,Wt.data)}}else{It?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,wt,Mt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ct,Ot,wt,Mt[st]);for(let ft=0;ft<Q.length;ft++){const Dt=Q[ft];It?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft+1,0,0,Ot,wt,Dt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft+1,Ct,Ot,wt,Dt.image[st])}}}p(x)&&d(n.TEXTURE_CUBE_MAP),K.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function dt(T,x,B,W,J,K){const mt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),ht=M(B.internalFormat,mt,ct,B.colorSpace);if(!i.get(x).__hasExternalTextures){const lt=Math.max(1,x.width>>K),Mt=Math.max(1,x.height>>K);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,K,ht,lt,Mt,x.depth,0,mt,ct,null):e.texImage2D(J,K,ht,lt,Mt,0,mt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),F(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,i.get(B).__webglTexture,0,nt(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,i.get(B).__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(T,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const W=x.depthTexture,J=W&&W.isDepthTexture?W.type:null,K=y(x.stencilBuffer,J),mt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=nt(x);F(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,K,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,K,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,T)}else{const W=x.textures;for(let J=0;J<W.length;J++){const K=W[J],mt=r.convert(K.format,K.colorSpace),ct=r.convert(K.type),ht=M(K.internalFormat,mt,ct,K.colorSpace),Tt=nt(x);B&&F(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,ht,x.width,x.height):F(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,ht,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ht,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const W=i.get(x.depthTexture).__webglTexture,J=nt(x);if(x.depthTexture.format===er)F(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(x.depthTexture.format===ur)F(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Nt(T){const x=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");_t(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]=n.createRenderbuffer(),ut(x.__webglDepthbuffer[W],T,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ut(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(T,x,B){const W=i.get(T);x!==void 0&&dt(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Nt(T)}function Bt(T){const x=T.texture,B=i.get(T),W=i.get(x);T.addEventListener("dispose",R);const J=T.textures,K=T.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let ht=0;ht<x.mipmaps.length;ht++)B.__webglFramebuffer[ct][ht]=n.createFramebuffer()}else B.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)B.__webglFramebuffer[ct]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(mt)for(let ct=0,ht=J.length;ct<ht;ct++){const Tt=i.get(J[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&F(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const ht=J[ct];B.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const Tt=r.convert(ht.format,ht.colorSpace),lt=r.convert(ht.type),Mt=M(ht.internalFormat,Tt,lt,ht.colorSpace,T.isXRRenderTarget===!0),Vt=nt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Mt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),pt(n.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)dt(B.__webglFramebuffer[ct][ht],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else dt(B.__webglFramebuffer[ct],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ct=0,ht=J.length;ct<ht;ct++){const Tt=J[ct],lt=i.get(Tt);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),pt(n.TEXTURE_2D,Tt),dt(B.__webglFramebuffer,T,Tt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),p(Tt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,W.__webglTexture),pt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)dt(B.__webglFramebuffer[ht],T,x,n.COLOR_ATTACHMENT0,ct,ht);else dt(B.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ct,0);p(x)&&d(ct),e.unbindTexture()}T.depthBuffer&&Nt(T)}function Qt(T){const x=T.textures;for(let B=0,W=x.length;B<W;B++){const J=x[B];if(p(J)){const K=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,mt=i.get(J).__webglTexture;e.bindTexture(K,mt),d(K),e.unbindTexture()}}}const v=[],O=[];function q(T){if(T.samples>0){if(F(T)===!1){const x=T.textures,B=T.width,W=T.height;let J=n.COLOR_BUFFER_BIT;const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(T),ct=x.length>1;if(ct)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ht]);const Tt=i.get(x[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,B,W,0,0,B,W,J,n.NEAREST),l===!0&&(v.length=0,O.length=0,v.push(n.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.resolveDepthBuffer===!1&&(v.push(K),O.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,v))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ht]);const Tt=i.get(x[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function nt(T){return Math.min(s.maxSamples,T.samples)}function F(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function H(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function I(T,x){const B=T.colorSpace,W=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==zi&&B!==Di&&(ae.getTransfer(B)===ve?(W!==Fn||J!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function k(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=Z,this.setTexture2DArray=rt,this.setTexture3D=$,this.setTextureCube=it,this.rebindTextures=Ft,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=F}function Ew(n,t){function e(i,s=Di){let r;const o=ae.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gp)return n.BYTE;if(i===Wp)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===fu)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===uo)return n.HALF_FLOAT;if(i===qp)return n.ALPHA;if(i===jp)return n.RGB;if(i===Fn)return n.RGBA;if(i===Yp)return n.LUMINANCE;if(i===$p)return n.LUMINANCE_ALPHA;if(i===er)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===mu)return n.RED;if(i===gu)return n.RED_INTEGER;if(i===Kp)return n.RG;if(i===_u)return n.RG_INTEGER;if(i===vu)return n.RGBA_INTEGER;if(i===ea||i===na||i===ia||i===sa)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===fc||i===dc||i===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===_c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===gc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_c)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===xc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===Ic||i===Dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ra)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zp||i===Uc||i===Nc||i===Oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class ww extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tw={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rw=`
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

}`;class Cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Bi({vertexShader:Aw,fragmentShader:Rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new Ae(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pw extends vs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new Cw,p=e.getContextAttributes();let d=null,M=null;const y=[],b=[],L=new Rt;let R=null;const C=new fn;C.layers.enable(1),C.viewport=new ye;const U=new fn;U.layers.enable(2),U.viewport=new ye;const w=[C,U],E=new ww;E.layers.enable(1),E.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let dt=y[ot];return dt===void 0&&(dt=new Fl,y[ot]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(ot){let dt=y[ot];return dt===void 0&&(dt=new Fl,y[ot]=dt),dt.getGripSpace()},this.getHand=function(ot){let dt=y[ot];return dt===void 0&&(dt=new Fl,y[ot]=dt),dt.getHandSpace()};function G(ot){const dt=b.indexOf(ot.inputSource);if(dt===-1)return;const ut=y[dt];ut!==void 0&&(ut.update(ot.inputSource,ot.frame,c||o),ut.dispatchEvent({type:ot.type,data:ot.inputSource}))}function Z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",rt);for(let ot=0;ot<y.length;ot++){const dt=b[ot];dt!==null&&(b[ot]=null,y[ot].disconnect(dt))}P=null,D=null,_.reset(),t.setRenderTarget(d),m=null,f=null,h=null,s=null,M=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",rt),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ms(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let dt=null,ut=null,_t=null;p.depth&&(_t=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=p.stencil?ur:er,ut=p.stencil?cr:ps);const Nt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ms(f.textureWidth,f.textureHeight,{format:Fn,type:xi,depthTexture:new dm(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(ot){for(let dt=0;dt<ot.removed.length;dt++){const ut=ot.removed[dt],_t=b.indexOf(ut);_t>=0&&(b[_t]=null,y[_t].disconnect(ut))}for(let dt=0;dt<ot.added.length;dt++){const ut=ot.added[dt];let _t=b.indexOf(ut);if(_t===-1){for(let Ft=0;Ft<y.length;Ft++)if(Ft>=b.length){b.push(ut),_t=Ft;break}else if(b[Ft]===null){b[Ft]=ut,_t=Ft;break}if(_t===-1)break}const Nt=y[_t];Nt&&Nt.connect(ut)}}const $=new N,it=new N;function j(ot,dt,ut){$.setFromMatrixPosition(dt.matrixWorld),it.setFromMatrixPosition(ut.matrixWorld);const _t=$.distanceTo(it),Nt=dt.projectionMatrix.elements,Ft=ut.projectionMatrix.elements,Bt=Nt[14]/(Nt[10]-1),Qt=Nt[14]/(Nt[10]+1),v=(Nt[9]+1)/Nt[5],O=(Nt[9]-1)/Nt[5],q=(Nt[8]-1)/Nt[0],nt=(Ft[8]+1)/Ft[0],F=Bt*q,H=Bt*nt,I=_t/(-q+nt),k=I*-q;dt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(k),ot.translateZ(I),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert();const T=Bt+I,x=Qt+I,B=F-k,W=H+(_t-k),J=v*Qt/x*T,K=O*Qt/x*T;ot.projectionMatrix.makePerspective(B,W,J,K,T,x),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}function vt(ot,dt){dt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(dt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;_.texture!==null&&(ot.near=_.depthNear,ot.far=_.depthFar),E.near=U.near=C.near=ot.near,E.far=U.far=C.far=ot.far,(P!==E.near||D!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,D=E.far,C.near=P,C.far=D,U.near=P,U.far=D,C.updateProjectionMatrix(),U.updateProjectionMatrix(),ot.updateProjectionMatrix());const dt=ot.parent,ut=E.cameras;vt(E,dt);for(let _t=0;_t<ut.length;_t++)vt(ut[_t],dt);ut.length===2?j(E,C,U):E.projectionMatrix.copy(C.projectionMatrix),xt(ot,E,dt)};function xt(ot,dt,ut){ut===null?ot.matrix.copy(dt.matrixWorld):(ot.matrix.copy(ut.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(dt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(dt.projectionMatrix),ot.projectionMatrixInverse.copy(dt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=hr*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(ot){l=ot,f!==null&&(f.fixedFoveation=ot),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ot)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let pt=null;function Lt(ot,dt){if(u=dt.getViewerPose(c||o),g=dt,u!==null){const ut=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let _t=!1;ut.length!==E.cameras.length&&(E.cameras.length=0,_t=!0);for(let Ft=0;Ft<ut.length;Ft++){const Bt=ut[Ft];let Qt=null;if(m!==null)Qt=m.getViewport(Bt);else{const O=h.getViewSubImage(f,Bt);Qt=O.viewport,Ft===0&&(t.setRenderTargetTextures(M,O.colorTexture,f.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(M))}let v=w[Ft];v===void 0&&(v=new fn,v.layers.enable(Ft),v.viewport=new ye,w[Ft]=v),v.matrix.fromArray(Bt.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.projectionMatrix.fromArray(Bt.projectionMatrix),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Ft===0&&(E.matrix.copy(v.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),_t===!0&&E.cameras.push(v)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ft=h.getDepthInformation(ut[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,s.renderState)}}for(let ut=0;ut<y.length;ut++){const _t=b[ut],Nt=y[ut];_t!==null&&Nt!==void 0&&Nt.update(_t,dt,c||o)}pt&&pt(ot,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),g=null}const qt=new fm;qt.setAnimationLoop(Lt),this.setAnimationLoop=function(ot){pt=ot},this.dispose=function(){}}}const Ji=new Hn,Lw=new pe;function Iw(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,am(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===cn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===cn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=t.get(d),y=M.envMap,b=M.envMapRotation;y&&(p.envMap.value=y,Ji.copy(b),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),p.envMapRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(Ji)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=y*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function c(M,y){let b=s[M.id];b===void 0&&(g(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",p));const L=y.program;i.updateUBOMapping(M,L);const R=t.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function u(M){const y=h();M.__bindingPointIndex=y;const b=n.createBuffer(),L=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],b=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,C=b.length;R<C;R++){const U=Array.isArray(b[R])?b[R]:[b[R]];for(let w=0,E=U.length;w<E;w++){const P=U[w];if(m(P,R,w,L)===!0){const D=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let rt=0;rt<G.length;rt++){const $=G[rt],it=_($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,D+Z,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,Z),Z+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,y,b,L){const R=M.value,C=y+"_"+b;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const U=L[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return L[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(M){const y=M.uniforms;let b=0;const L=16;for(let C=0,U=y.length;C<U;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,P=w.length;E<P;E++){const D=w[E],G=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,rt=G.length;Z<rt;Z++){const $=G[Z],it=_($),j=b%L,vt=j%it.boundary,xt=j+vt;b+=vt,xt!==0&&L-xt<it.storage&&(b+=L-xt),D.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=it.storage}}}const R=b%L;return R>0&&(b+=L-R),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Uw{constructor(t={}){const{canvas:e=wy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Ni,this.toneMappingExposure=1;const y=this;let b=!1,L=0,R=0,C=null,U=-1,w=null;const E=new ye,P=new ye;let D=null;const G=new Jt(0);let Z=0,rt=e.width,$=e.height,it=1,j=null,vt=null;const xt=new ye(0,0,rt,$),pt=new ye(0,0,rt,$);let Lt=!1;const qt=new bu;let ot=!1,dt=!1;const ut=new pe,_t=new N,Nt=new ye,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Qt(){return C===null?it:1}let v=i;function O(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",ft,!1),v===null){const V="webgl2";if(v=O(V,A),v===null)throw O(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let q,nt,F,H,I,k,T,x,B,W,J,K,mt,ct,ht,Tt,lt,Mt,Vt,Ot,wt,Ct,It,fe;function S(){q=new kb(v),q.init(),Ct=new Ew(v,q),nt=new Db(v,q,t,Ct),F=new Mw(v),H=new Gb(v),I=new aw,k=new bw(v,q,F,I,nt,Ct,H),T=new Nb(y),x=new zb(y),B=new $y(v),It=new Lb(v,B),W=new Hb(v,B,H,It),J=new Xb(v,W,B,H),Vt=new Wb(v,nt,k),Tt=new Ub(I),K=new ow(y,T,x,q,nt,It,Tt),mt=new Iw(y,I),ct=new cw,ht=new mw(q),Mt=new Pb(y,T,x,F,J,f,l),lt=new yw(y,J,nt),fe=new Dw(v,H,nt,F),Ot=new Ib(v,q,H),wt=new Vb(v,q,H),H.programs=K.programs,y.capabilities=nt,y.extensions=q,y.properties=I,y.renderLists=ct,y.shadowMap=lt,y.state=F,y.info=H}S();const Y=new Pw(y,v);this.xr=Y,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(A){A!==void 0&&(it=A,this.setSize(rt,$,!1))},this.getSize=function(A){return A.set(rt,$)},this.setSize=function(A,V,tt=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,$=V,e.width=Math.floor(A*it),e.height=Math.floor(V*it),tt===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(rt*it,$*it).floor()},this.setDrawingBufferSize=function(A,V,tt){rt=A,$=V,it=tt,e.width=Math.floor(A*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,V,tt,et){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,V,tt,et),F.viewport(E.copy(xt).multiplyScalar(it).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,V,tt,et){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,V,tt,et),F.scissor(P.copy(pt).multiplyScalar(it).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(A){F.setScissorTest(Lt=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){vt=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(A=!0,V=!0,tt=!0){let et=0;if(A){let X=!1;if(C!==null){const yt=C.texture.format;X=yt===vu||yt===_u||yt===gu}if(X){const yt=C.texture.type,Et=yt===xi||yt===ps||yt===Qr||yt===cr||yt===du||yt===pu,At=Mt.getClearColor(),Pt=Mt.getClearAlpha(),Gt=At.r,Xt=At.g,zt=At.b;Et?(m[0]=Gt,m[1]=Xt,m[2]=zt,m[3]=Pt,v.clearBufferuiv(v.COLOR,0,m)):(g[0]=Gt,g[1]=Xt,g[2]=zt,g[3]=Pt,v.clearBufferiv(v.COLOR,0,g))}else et|=v.COLOR_BUFFER_BIT}V&&(et|=v.DEPTH_BUFFER_BIT),tt&&(et|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),ct.dispose(),ht.dispose(),I.dispose(),T.dispose(),x.dispose(),J.dispose(),It.dispose(),fe.dispose(),K.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Re),Y.removeEventListener("sessionend",Mi),ke.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=H.autoReset,V=lt.enabled,tt=lt.autoUpdate,et=lt.needsUpdate,X=lt.type;S(),H.autoReset=A,lt.enabled=V,lt.autoUpdate=tt,lt.needsUpdate=et,lt.type=X}function ft(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Dt(A){const V=A.target;V.removeEventListener("dispose",Dt),Wt(V)}function Wt(A){Te(A),I.remove(A)}function Te(A){const V=I.get(A).programs;V!==void 0&&(V.forEach(function(tt){K.releaseProgram(tt)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,tt,et,X,yt){V===null&&(V=Ft);const Et=X.isMesh&&X.matrixWorld.determinant()<0,At=Em(A,V,tt,et,X);F.setMaterial(et,Et);let Pt=tt.index,Gt=1;if(et.wireframe===!0){if(Pt=W.getWireframeAttribute(tt),Pt===void 0)return;Gt=2}const Xt=tt.drawRange,zt=tt.attributes.position;let ie=Xt.start*Gt,Ee=(Xt.start+Xt.count)*Gt;yt!==null&&(ie=Math.max(ie,yt.start*Gt),Ee=Math.min(Ee,(yt.start+yt.count)*Gt)),Pt!==null?(ie=Math.max(ie,0),Ee=Math.min(Ee,Pt.count)):zt!=null&&(ie=Math.max(ie,0),Ee=Math.min(Ee,zt.count));const we=Ee-ie;if(we<0||we===1/0)return;It.setup(X,et,At,tt,Pt);let gn,se=Ot;if(Pt!==null&&(gn=B.get(Pt),se=wt,se.setIndex(gn)),X.isMesh)et.wireframe===!0?(F.setLineWidth(et.wireframeLinewidth*Qt()),se.setMode(v.LINES)):se.setMode(v.TRIANGLES);else if(X.isLine){let Ut=et.linewidth;Ut===void 0&&(Ut=1),F.setLineWidth(Ut*Qt()),X.isLineSegments?se.setMode(v.LINES):X.isLineLoop?se.setMode(v.LINE_LOOP):se.setMode(v.LINE_STRIP)}else X.isPoints?se.setMode(v.POINTS):X.isSprite&&se.setMode(v.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)se.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ut=X._multiDrawStarts,He=X._multiDrawCounts,re=X._multiDrawCount,Pn=Pt?B.get(Pt).bytesPerElement:1,Ms=I.get(et).currentProgram.getUniforms();for(let _n=0;_n<re;_n++)Ms.setValue(v,"_gl_DrawID",_n),se.render(Ut[_n]/Pn,He[_n])}else if(X.isInstancedMesh)se.renderInstances(ie,we,X.count);else if(tt.isInstancedBufferGeometry){const Ut=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,He=Math.min(tt.instanceCount,Ut);se.renderInstances(ie,we,He)}else se.render(ie,we)};function Ue(A,V,tt){A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,po(A,V,tt),A.side=Fi,A.needsUpdate=!0,po(A,V,tt),A.side=Ie):po(A,V,tt)}this.compile=function(A,V,tt=null){tt===null&&(tt=A),p=ht.get(tt),p.init(V),M.push(p),tt.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==tt&&A.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const et=new Set;return A.traverse(function(X){const yt=X.material;if(yt)if(Array.isArray(yt))for(let Et=0;Et<yt.length;Et++){const At=yt[Et];Ue(At,tt,X),et.add(At)}else Ue(yt,tt,X),et.add(yt)}),M.pop(),p=null,et},this.compileAsync=function(A,V,tt=null){const et=this.compile(A,V,tt);return new Promise(X=>{function yt(){if(et.forEach(function(Et){I.get(Et).currentProgram.isReady()&&et.delete(Et)}),et.size===0){X(A);return}setTimeout(yt,10)}q.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let te=null;function Ne(A){te&&te(A)}function Re(){ke.stop()}function Mi(){ke.start()}const ke=new fm;ke.setAnimationLoop(Ne),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(A){te=A,Y.setAnimationLoop(A),A===null?ke.stop():ke.start()},Y.addEventListener("sessionstart",Re),Y.addEventListener("sessionend",Mi),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(V),V=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,V,C),p=ht.get(A,M.length),p.init(V),M.push(p),ut.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),qt.setFromProjectionMatrix(ut),dt=this.localClippingEnabled,ot=Tt.init(this.clippingPlanes,dt),_=ct.get(A,d.length),_.init(),d.push(_),Y.enabled===!0&&Y.isPresenting===!0){const yt=y.xr.getDepthSensingMesh();yt!==null&&Qn(yt,V,-1/0,y.sortObjects)}Qn(A,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(j,vt),Bt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Bt&&Mt.addToRenderList(_,A),this.info.render.frame++,ot===!0&&Tt.beginShadows();const tt=p.state.shadowsArray;lt.render(tt,A,V),ot===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=_.opaque,X=_.transmissive;if(p.setupLights(),V.isArrayCamera){const yt=V.cameras;if(X.length>0)for(let Et=0,At=yt.length;Et<At;Et++){const Pt=yt[Et];_r(et,X,A,Pt)}Bt&&Mt.render(A);for(let Et=0,At=yt.length;Et<At;Et++){const Pt=yt[Et];ki(_,A,Pt,Pt.viewport)}}else X.length>0&&_r(et,X,A,V),Bt&&Mt.render(A),ki(_,A,V);C!==null&&(k.updateMultisampleRenderTarget(C),k.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,V),It.resetDefaultState(),U=-1,w=null,M.pop(),M.length>0?(p=M[M.length-1],ot===!0&&Tt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Qn(A,V,tt,et){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||qt.intersectsSprite(A)){et&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const Et=J.update(A),At=A.material;At.visible&&_.push(A,Et,At,tt,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||qt.intersectsObject(A))){const Et=J.update(A),At=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Nt.copy(Et.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(At)){const Pt=Et.groups;for(let Gt=0,Xt=Pt.length;Gt<Xt;Gt++){const zt=Pt[Gt],ie=At[zt.materialIndex];ie&&ie.visible&&_.push(A,Et,ie,tt,Nt.z,zt)}}else At.visible&&_.push(A,Et,At,tt,Nt.z,null)}}const yt=A.children;for(let Et=0,At=yt.length;Et<At;Et++)Qn(yt[Et],V,tt,et)}function ki(A,V,tt,et){const X=A.opaque,yt=A.transmissive,Et=A.transparent;p.setupLightsView(tt),ot===!0&&Tt.setGlobalState(y.clippingPlanes,tt),et&&F.viewport(E.copy(et)),X.length>0&&fo(X,V,tt),yt.length>0&&fo(yt,V,tt),Et.length>0&&fo(Et,V,tt),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function _r(A,V,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new ms(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?uo:xi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const yt=p.state.transmissionRenderTarget[et.id],Et=et.viewport||E;yt.setSize(Et.z,Et.w);const At=y.getRenderTarget();y.setRenderTarget(yt),y.getClearColor(G),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Bt&&Mt.render(tt);const Pt=y.toneMapping;y.toneMapping=Ni;const Gt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),ot===!0&&Tt.setGlobalState(y.clippingPlanes,et),fo(A,tt,et),k.updateMultisampleRenderTarget(yt),k.updateRenderTargetMipmap(yt),q.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let zt=0,ie=V.length;zt<ie;zt++){const Ee=V[zt],we=Ee.object,gn=Ee.geometry,se=Ee.material,Ut=Ee.group;if(se.side===Ie&&we.layers.test(et.layers)){const He=se.side;se.side=cn,se.needsUpdate=!0,Lu(we,tt,et,gn,se,Ut),se.side=He,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(k.updateMultisampleRenderTarget(yt),k.updateRenderTargetMipmap(yt))}y.setRenderTarget(At),y.setClearColor(G,Z),Gt!==void 0&&(et.viewport=Gt),y.toneMapping=Pt}function fo(A,V,tt){const et=V.isScene===!0?V.overrideMaterial:null;for(let X=0,yt=A.length;X<yt;X++){const Et=A[X],At=Et.object,Pt=Et.geometry,Gt=et===null?Et.material:et,Xt=Et.group;At.layers.test(tt.layers)&&Lu(At,V,tt,Pt,Gt,Xt)}}function Lu(A,V,tt,et,X,yt){A.onBeforeRender(y,V,tt,et,X,yt),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.transparent===!0&&X.side===Ie&&X.forceSinglePass===!1?(X.side=cn,X.needsUpdate=!0,y.renderBufferDirect(tt,V,et,X,A,yt),X.side=Fi,X.needsUpdate=!0,y.renderBufferDirect(tt,V,et,X,A,yt),X.side=Ie):y.renderBufferDirect(tt,V,et,X,A,yt),A.onAfterRender(y,V,tt,et,X,yt)}function po(A,V,tt){V.isScene!==!0&&(V=Ft);const et=I.get(A),X=p.state.lights,yt=p.state.shadowsArray,Et=X.state.version,At=K.getParameters(A,X.state,yt,V,tt),Pt=K.getProgramCacheKey(At);let Gt=et.programs;et.environment=A.isMeshStandardMaterial?V.environment:null,et.fog=V.fog,et.envMap=(A.isMeshStandardMaterial?x:T).get(A.envMap||et.environment),et.envMapRotation=et.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",Dt),Gt=new Map,et.programs=Gt);let Xt=Gt.get(Pt);if(Xt!==void 0){if(et.currentProgram===Xt&&et.lightsStateVersion===Et)return Du(A,At),Xt}else At.uniforms=K.getUniforms(A),A.onBeforeCompile(At,y),Xt=K.acquireProgram(At,Pt),Gt.set(Pt,Xt),et.uniforms=At.uniforms;const zt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=Tt.uniform),Du(A,At),et.needsLights=Tm(A),et.lightsStateVersion=Et,et.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),et.currentProgram=Xt,et.uniformsList=null,Xt}function Iu(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=oa.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Du(A,V){const tt=I.get(A);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function Em(A,V,tt,et,X){V.isScene!==!0&&(V=Ft),k.resetTextureUnits();const yt=V.fog,Et=et.isMeshStandardMaterial?V.environment:null,At=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:zi,Pt=(et.isMeshStandardMaterial?x:T).get(et.envMap||Et),Gt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Xt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),zt=!!tt.morphAttributes.position,ie=!!tt.morphAttributes.normal,Ee=!!tt.morphAttributes.color;let we=Ni;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(we=y.toneMapping);const gn=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,se=gn!==void 0?gn.length:0,Ut=I.get(et),He=p.state.lights;if(ot===!0&&(dt===!0||A!==w)){const Mn=A===w&&et.id===U;Tt.setState(et,A,Mn)}let re=!1;et.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==He.state.version||Ut.outputColorSpace!==At||X.isBatchedMesh&&Ut.batching===!1||!X.isBatchedMesh&&Ut.batching===!0||X.isBatchedMesh&&Ut.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ut.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ut.instancing===!1||!X.isInstancedMesh&&Ut.instancing===!0||X.isSkinnedMesh&&Ut.skinning===!1||!X.isSkinnedMesh&&Ut.skinning===!0||X.isInstancedMesh&&Ut.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ut.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ut.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ut.instancingMorph===!1&&X.morphTexture!==null||Ut.envMap!==Pt||et.fog===!0&&Ut.fog!==yt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Tt.numPlanes||Ut.numIntersection!==Tt.numIntersection)||Ut.vertexAlphas!==Gt||Ut.vertexTangents!==Xt||Ut.morphTargets!==zt||Ut.morphNormals!==ie||Ut.morphColors!==Ee||Ut.toneMapping!==we||Ut.morphTargetsCount!==se)&&(re=!0):(re=!0,Ut.__version=et.version);let Pn=Ut.currentProgram;re===!0&&(Pn=po(et,V,X));let Ms=!1,_n=!1,Wa=!1;const Ce=Pn.getUniforms(),Si=Ut.uniforms;if(F.useProgram(Pn.program)&&(Ms=!0,_n=!0,Wa=!0),et.id!==U&&(U=et.id,_n=!0),Ms||w!==A){Ce.setValue(v,"projectionMatrix",A.projectionMatrix),Ce.setValue(v,"viewMatrix",A.matrixWorldInverse);const Mn=Ce.map.cameraPosition;Mn!==void 0&&Mn.setValue(v,_t.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&Ce.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ce.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,_n=!0,Wa=!0)}if(X.isSkinnedMesh){Ce.setOptional(v,X,"bindMatrix"),Ce.setOptional(v,X,"bindMatrixInverse");const Mn=X.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ce.setValue(v,"boneTexture",Mn.boneTexture,k))}X.isBatchedMesh&&(Ce.setOptional(v,X,"batchingTexture"),Ce.setValue(v,"batchingTexture",X._matricesTexture,k),Ce.setOptional(v,X,"batchingIdTexture"),Ce.setValue(v,"batchingIdTexture",X._indirectTexture,k),Ce.setOptional(v,X,"batchingColorTexture"),X._colorsTexture!==null&&Ce.setValue(v,"batchingColorTexture",X._colorsTexture,k));const Xa=tt.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0)&&Vt.update(X,tt,Pn),(_n||Ut.receiveShadow!==X.receiveShadow)&&(Ut.receiveShadow=X.receiveShadow,Ce.setValue(v,"receiveShadow",X.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Si.envMap.value=Pt,Si.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&V.environment!==null&&(Si.envMapIntensity.value=V.environmentIntensity),_n&&(Ce.setValue(v,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&wm(Si,Wa),yt&&et.fog===!0&&mt.refreshFogUniforms(Si,yt),mt.refreshMaterialUniforms(Si,et,it,$,p.state.transmissionRenderTarget[A.id]),oa.upload(v,Iu(Ut),Si,k)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(oa.upload(v,Iu(Ut),Si,k),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ce.setValue(v,"center",X.center),Ce.setValue(v,"modelViewMatrix",X.modelViewMatrix),Ce.setValue(v,"normalMatrix",X.normalMatrix),Ce.setValue(v,"modelMatrix",X.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Mn=et.uniformsGroups;for(let qa=0,Am=Mn.length;qa<Am;qa++){const Uu=Mn[qa];fe.update(Uu,Pn),fe.bind(Uu,Pn)}}return Pn}function wm(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Tm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,V,tt){I.get(A.texture).__webglTexture=V,I.get(A.depthTexture).__webglTexture=tt;const et=I.get(A);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const tt=I.get(A);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,tt=0){C=A,L=V,R=tt;let et=!0,X=null,yt=!1,Et=!1;if(A){const Pt=I.get(A);Pt.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(v.FRAMEBUFFER,null),et=!1):Pt.__webglFramebuffer===void 0?k.setupRenderTarget(A):Pt.__hasExternalTextures&&k.rebindTextures(A,I.get(A.texture).__webglTexture,I.get(A.depthTexture).__webglTexture);const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);const Xt=I.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[V])?X=Xt[V][tt]:X=Xt[V],yt=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?X=I.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?X=Xt[tt]:X=Xt,E.copy(A.viewport),P.copy(A.scissor),D=A.scissorTest}else E.copy(xt).multiplyScalar(it).floor(),P.copy(pt).multiplyScalar(it).floor(),D=Lt;if(F.bindFramebuffer(v.FRAMEBUFFER,X)&&et&&F.drawBuffers(A,X),F.viewport(E),F.scissor(P),F.setScissorTest(D),yt){const Pt=I.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pt.__webglTexture,tt)}else if(Et){const Pt=I.get(A.texture),Gt=V||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Pt.__webglTexture,tt||0,Gt)}U=-1},this.readRenderTargetPixels=function(A,V,tt,et,X,yt,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=I.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){F.bindFramebuffer(v.FRAMEBUFFER,At);try{const Pt=A.texture,Gt=Pt.format,Xt=Pt.type;if(!nt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-et&&tt>=0&&tt<=A.height-X&&v.readPixels(V,tt,et,X,Ct.convert(Gt),Ct.convert(Xt),yt)}finally{const Pt=C!==null?I.get(C).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,V,tt,et,X,yt,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=I.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){F.bindFramebuffer(v.FRAMEBUFFER,At);try{const Pt=A.texture,Gt=Pt.format,Xt=Pt.type;if(!nt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-et&&tt>=0&&tt<=A.height-X){const zt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,zt),v.bufferData(v.PIXEL_PACK_BUFFER,yt.byteLength,v.STREAM_READ),v.readPixels(V,tt,et,X,Ct.convert(Gt),Ct.convert(Xt),0),v.flush();const ie=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);await Ty(v,ie,4);try{v.bindBuffer(v.PIXEL_PACK_BUFFER,zt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,yt)}finally{v.deleteBuffer(zt),v.deleteSync(ie)}return yt}}finally{const Pt=C!==null?I.get(C).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(A,V=null,tt=0){A.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const et=Math.pow(2,-tt),X=Math.floor(A.image.width*et),yt=Math.floor(A.image.height*et),Et=V!==null?V.x:0,At=V!==null?V.y:0;k.setTexture2D(A,0),v.copyTexSubImage2D(v.TEXTURE_2D,tt,0,0,Et,At,X,yt),F.unbindTexture()},this.copyTextureToTexture=function(A,V,tt=null,et=null,X=0){A.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,A=arguments[1],V=arguments[2],X=arguments[3]||0,tt=null);let yt,Et,At,Pt,Gt,Xt;tt!==null?(yt=tt.max.x-tt.min.x,Et=tt.max.y-tt.min.y,At=tt.min.x,Pt=tt.min.y):(yt=A.image.width,Et=A.image.height,At=0,Pt=0),et!==null?(Gt=et.x,Xt=et.y):(Gt=0,Xt=0);const zt=Ct.convert(V.format),ie=Ct.convert(V.type);k.setTexture2D(V,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,V.unpackAlignment);const Ee=v.getParameter(v.UNPACK_ROW_LENGTH),we=v.getParameter(v.UNPACK_IMAGE_HEIGHT),gn=v.getParameter(v.UNPACK_SKIP_PIXELS),se=v.getParameter(v.UNPACK_SKIP_ROWS),Ut=v.getParameter(v.UNPACK_SKIP_IMAGES),He=A.isCompressedTexture?A.mipmaps[X]:A.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,He.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,He.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,At),v.pixelStorei(v.UNPACK_SKIP_ROWS,Pt),A.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,X,Gt,Xt,yt,Et,zt,ie,He.data):A.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,X,Gt,Xt,He.width,He.height,zt,He.data):v.texSubImage2D(v.TEXTURE_2D,X,Gt,Xt,yt,Et,zt,ie,He),v.pixelStorei(v.UNPACK_ROW_LENGTH,Ee),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,we),v.pixelStorei(v.UNPACK_SKIP_PIXELS,gn),v.pixelStorei(v.UNPACK_SKIP_ROWS,se),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ut),X===0&&V.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(A,V,tt=null,et=null,X=0){A.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,et=arguments[1]||null,A=arguments[2],V=arguments[3],X=arguments[4]||0);let yt,Et,At,Pt,Gt,Xt,zt,ie,Ee;const we=A.isCompressedTexture?A.mipmaps[X]:A.image;tt!==null?(yt=tt.max.x-tt.min.x,Et=tt.max.y-tt.min.y,At=tt.max.z-tt.min.z,Pt=tt.min.x,Gt=tt.min.y,Xt=tt.min.z):(yt=we.width,Et=we.height,At=we.depth,Pt=0,Gt=0,Xt=0),et!==null?(zt=et.x,ie=et.y,Ee=et.z):(zt=0,ie=0,Ee=0);const gn=Ct.convert(V.format),se=Ct.convert(V.type);let Ut;if(V.isData3DTexture)k.setTexture3D(V,0),Ut=v.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)k.setTexture2DArray(V,0),Ut=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,V.unpackAlignment);const He=v.getParameter(v.UNPACK_ROW_LENGTH),re=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Pn=v.getParameter(v.UNPACK_SKIP_PIXELS),Ms=v.getParameter(v.UNPACK_SKIP_ROWS),_n=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,we.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,we.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Pt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Gt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Xt),A.isDataTexture||A.isData3DTexture?v.texSubImage3D(Ut,X,zt,ie,Ee,yt,Et,At,gn,se,we.data):V.isCompressedArrayTexture?v.compressedTexSubImage3D(Ut,X,zt,ie,Ee,yt,Et,At,gn,we.data):v.texSubImage3D(Ut,X,zt,ie,Ee,yt,Et,At,gn,se,we),v.pixelStorei(v.UNPACK_ROW_LENGTH,He),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,re),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Pn),v.pixelStorei(v.UNPACK_SKIP_ROWS,Ms),v.pixelStorei(v.UNPACK_SKIP_IMAGES,_n),X===0&&V.generateMipmaps&&v.generateMipmap(Ut),F.unbindTexture()},this.initRenderTarget=function(A){I.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),F.unbindTexture()},this.resetState=function(){L=0,R=0,C=null,F.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xu?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===ka?"display-p3":"srgb"}}let Nw=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class Ow{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return nr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new N;class Ea{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wu extends mr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const Ar=new N,Vs=new N,Gs=new N,Ws=new Rt,Rr=new Rt,vm=new pe,Vo=new N,Cr=new N,Go=new N,Nf=new Rt,Bl=new Rt,Of=new Rt;class xm extends De{constructor(t=new wu){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new mn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ow(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Ea(i,3,0,!1)),Hs.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),vm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Gs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Wo(Vo.set(-.5,-.5,0),Gs,o,Vs,s,r),Wo(Cr.set(.5,-.5,0),Gs,o,Vs,s,r),Wo(Go.set(.5,.5,0),Gs,o,Vs,s,r),Nf.set(0,0),Bl.set(1,0),Of.set(1,1);let a=t.ray.intersectTriangle(Vo,Cr,Go,!1,Ar);if(a===null&&(Wo(Cr.set(-.5,.5,0),Gs,o,Vs,s,r),Bl.set(0,1),a=t.ray.intersectTriangle(Vo,Go,Cr,!1,Ar),a===null))return;const l=t.ray.origin.distanceTo(Ar);l<t.near||l>t.far||e.push({distance:l,point:Ar.clone(),uv:On.getInterpolation(Ar,Vo,Cr,Go,Nf,Bl,Of,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wo(n,t,e,i,s,r){Ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Rr.x=r*Ws.x-s*Ws.y,Rr.y=s*Ws.x+r*Ws.y):Rr.copy(Ws),n.copy(t),n.x+=Rr.x,n.y+=Rr.y,n.applyMatrix4(vm)}class Fw extends qe{constructor(t=null,e=1,i=1,s,r,o,a,l,c=dn,u=dn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ff extends An{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xs=new pe,Bf=new pe,Xo=[],zf=new xs,Bw=new pe,Pr=new at,Lr=new ho;class ym extends at{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ff(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bw)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),zf.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(zf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ho),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),Lr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(i),t.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Bf.multiplyMatrices(i,Xs),Pr.matrixWorld=Bf,Pr.raycast(t,Xo);for(let o=0,a=Xo.length;o<a;o++){const l=Xo[o];l.instanceId=r,l.object=this,e.push(l)}Xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ff(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fw(new Float32Array(s*this.count),s,this.count,mu,$n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jn extends qe{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Va extends mn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,u=new Rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=i+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends mn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let g=0;const _=[],p=i/2;let d=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(m,2));function M(){const b=new N,L=new N;let R=0;const C=(e-t)/i;for(let U=0;U<=r;U++){const w=[],E=U/r,P=E*(e-t)+t;for(let D=0;D<=s;D++){const G=D/s,Z=G*l+a,rt=Math.sin(Z),$=Math.cos(Z);L.x=P*rt,L.y=-E*i+p,L.z=P*$,h.push(L.x,L.y,L.z),b.set(rt,C,$).normalize(),f.push(b.x,b.y,b.z),m.push(G,1-E),w.push(g++)}_.push(w)}for(let U=0;U<s;U++)for(let w=0;w<r;w++){const E=_[w][U],P=_[w+1][U],D=_[w+1][U+1],G=_[w][U+1];u.push(E,P,G),u.push(P,D,G),R+=6}c.addGroup(d,R,0),d+=R}function y(b){const L=g,R=new Rt,C=new N;let U=0;const w=b===!0?t:e,E=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),g++;const P=g;for(let D=0;D<=s;D++){const Z=D/s*l+a,rt=Math.cos(Z),$=Math.sin(Z);C.x=w*$,C.y=p*E,C.z=w*rt,h.push(C.x,C.y,C.z),f.push(0,E,0),R.x=rt*.5+.5,R.y=$*.5*E+.5,m.push(R.x,R.y),g++}for(let D=0;D<s;D++){const G=L+D,Z=P+D;b===!0?u.push(Z,Z+1,G):u.push(Z+1,Z,G),U+=3}c.addGroup(d,U,b===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends jt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new eo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tu extends mn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new N,b=new N,L=new N;for(let R=0;R<e.length;R+=3)m(e[R+0],y),m(e[R+1],b),m(e[R+2],L),l(y,b,L,M)}function l(M,y,b,L){const R=L+1,C=[];for(let U=0;U<=R;U++){C[U]=[];const w=M.clone().lerp(b,U/R),E=y.clone().lerp(b,U/R),P=R-U;for(let D=0;D<=P;D++)D===0&&U===R?C[U][D]=w:C[U][D]=w.clone().lerp(E,D/P)}for(let U=0;U<R;U++)for(let w=0;w<2*(R-U)-1;w++){const E=Math.floor(w/2);w%2===0?(f(C[U][E+1]),f(C[U+1][E]),f(C[U][E])):(f(C[U][E+1]),f(C[U+1][E+1]),f(C[U+1][E]))}}function c(M){const y=new N;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(M),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function u(){const M=new N;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const b=p(M)/2/Math.PI+.5,L=d(M)/Math.PI+.5;o.push(b,1-L)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],b=o[M+2],L=o[M+4],R=Math.max(y,b,L),C=Math.min(y,b,L);R>.9&&C<.1&&(y<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,y){const b=M*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){const M=new N,y=new N,b=new N,L=new N,R=new Rt,C=new Rt,U=new Rt;for(let w=0,E=0;w<r.length;w+=9,E+=6){M.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),R.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),U.set(o[E+4],o[E+5]),L.copy(M).add(y).add(b).divideScalar(3);const P=p(L);_(R,E+0,M,P),_(C,E+2,y,P),_(U,E+4,b,P)}}function _(M,y,b,L){L<0&&M.x===1&&(o[y]=M.x-1),b.x===0&&b.z===0&&(o[y]=L/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.vertices,t.indices,t.radius,t.details)}}class Au extends mn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,m=new N,g=new Rt;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const d=r+p/i*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const p=_*(i+1);for(let d=0;d<i;d++){const M=d+p,y=M,b=M+i+1,L=M+i+2,R=M+1;a.push(y,b,R),a.push(b,L,R)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Je extends mn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,m=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){const M=[],y=d/i;let b=0;d===0&&o===0?b=.5/e:d===i&&l===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){const R=L/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(R+b,1-y),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){const y=u[d][M+1],b=u[d][M],L=u[d+1][M],R=u[d+1][M+1];(d!==0||o>0)&&m.push(y,b,R),(d!==i-1||l<Math.PI)&&m.push(b,L,R)}this.setIndex(m),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ru extends Tu{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ru(t.radius,t.detail)}}class ys extends mn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new N,h=new N,f=new N;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(_),h.y=(t+e*Math.cos(p))*Math.sin(_),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,d=(s+1)*(m-1)+g,M=(s+1)*m+g;o.push(_,p,M),o.push(p,d,M)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kt extends mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jp,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class no extends kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const kf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class zw{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const kw=new zw;class Cu{constructor(t){this.manager=t!==void 0?t:kw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Cu.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hw extends Cu{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=kf.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=to("img");function l(){u(),kf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Vw extends Cu{constructor(t){super(t)}load(t,e,i,s){const r=new qe,o=new Hw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Pu extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const zl=new pe,Hf=new N,Vf=new N;class Mm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bu,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hf),Vf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vf),e.updateMatrixWorld(),zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gw extends Mm{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=hr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sm extends Pu{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gw}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Gf=new pe,Ir=new N,kl=new N;class Ww extends Mm{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ir),kl.copy(i.position),kl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Gf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf)}}class Yn extends Pu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ww}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xw extends Pu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class bm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wf(){return(typeof performance>"u"?Date:performance).now()}const Xf=new pe;class qw{constructor(t,e,i=0,s=1/0){this.ray=new Mu(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xf),this}intersectObject(t,e=!0,i=[]){return zc(t,this,i,e),i.sort(qf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)zc(t[s],this,i,e);return i.sort(qf),i}}function qf(n,t){return n.distance-t.distance}function zc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)zc(r[o],t,e,!0)}}class jf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);class jw extends EventTarget{constructor(t){super(),this.container=t,this.width=0,this.height=0,this.pixelRatio=1,this.handleResize=()=>{this.update(),this.dispatchEvent(new Event("resize"))},this.update(),window.addEventListener("resize",this.handleResize,{passive:!0})}update(){this.width=this.container.clientWidth,this.height=this.container.clientHeight;const t=this.width<=768?1:1.5;this.pixelRatio=Math.min(window.devicePixelRatio,t)}destroy(){window.removeEventListener("resize",this.handleResize)}}class Yw{constructor(){this.instance=new Nw,this.instance.background=new Jt("#0a0a12")}}const Yf={type:"change"},Hl={type:"start"},$f={type:"end"},qo=new Mu,Kf=new Ii,$w=Math.cos(70*xe.DEG2RAD);class Kw extends vs{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",ht),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ht),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Yf),i.update(),r=s.NONE},this.update=(function(){const S=new N,Y=new gs().setFromUnitVectors(t.up,new N(0,1,0)),Q=Y.clone().invert(),st=new N,ft=new gs,Dt=new N,Wt=2*Math.PI;return function(Ue=null){const te=i.object.position;S.copy(te).sub(i.target),S.applyQuaternion(Y),a.setFromVector3(S),i.autoRotate&&r===s.NONE&&D(E(Ue)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ne=i.minAzimuthAngle,Re=i.maxAzimuthAngle;isFinite(Ne)&&isFinite(Re)&&(Ne<-Math.PI?Ne+=Wt:Ne>Math.PI&&(Ne-=Wt),Re<-Math.PI?Re+=Wt:Re>Math.PI&&(Re-=Wt),Ne<=Re?a.theta=Math.max(Ne,Math.min(Re,a.theta)):a.theta=a.theta>(Ne+Re)/2?Math.max(Ne,a.theta):Math.min(Re,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Mi=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=xt(a.radius);else{const ke=a.radius;a.radius=xt(a.radius*c),Mi=ke!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(Q),te.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let ke=null;if(i.object.isPerspectiveCamera){const Qn=S.length();ke=xt(Qn*c);const ki=Qn-ke;i.object.position.addScaledVector(b,ki),i.object.updateMatrixWorld(),Mi=!!ki}else if(i.object.isOrthographicCamera){const Qn=new N(L.x,L.y,0);Qn.unproject(i.object);const ki=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Mi=ki!==i.object.zoom;const _r=new N(L.x,L.y,0);_r.unproject(i.object),i.object.position.sub(_r).add(Qn),i.object.updateMatrixWorld(),ke=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ke).add(i.object.position):(qo.origin.copy(i.object.position),qo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(qo.direction))<$w?t.lookAt(i.target):(Kf.setFromNormalAndCoplanarPoint(i.object.up,i.target),qo.intersectPlane(Kf,i.target))))}else if(i.object.isOrthographicCamera){const ke=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ke!==i.object.zoom&&(i.object.updateProjectionMatrix(),Mi=!0)}return c=1,R=!1,Mi||st.distanceToSquared(i.object.position)>o||8*(1-ft.dot(i.object.quaternion))>o||Dt.distanceToSquared(i.target)>o?(i.dispatchEvent(Yf),st.copy(i.object.position),ft.copy(i.object.quaternion),Dt.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Mt),i.domElement.removeEventListener("pointerdown",k),i.domElement.removeEventListener("pointercancel",x),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",x),i.domElement.getRootNode().removeEventListener("keydown",mt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ht),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new jf,l=new jf;let c=1;const u=new N,h=new Rt,f=new Rt,m=new Rt,g=new Rt,_=new Rt,p=new Rt,d=new Rt,M=new Rt,y=new Rt,b=new N,L=new Rt;let R=!1;const C=[],U={};let w=!1;function E(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function P(S){const Y=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*Y)}function D(S){l.theta-=S}function G(S){l.phi-=S}const Z=(function(){const S=new N;return function(Q,st){S.setFromMatrixColumn(st,0),S.multiplyScalar(-Q),u.add(S)}})(),rt=(function(){const S=new N;return function(Q,st){i.screenSpacePanning===!0?S.setFromMatrixColumn(st,1):(S.setFromMatrixColumn(st,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(Q),u.add(S)}})(),$=(function(){const S=new N;return function(Q,st){const ft=i.domElement;if(i.object.isPerspectiveCamera){const Dt=i.object.position;S.copy(Dt).sub(i.target);let Wt=S.length();Wt*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*Q*Wt/ft.clientHeight,i.object.matrix),rt(2*st*Wt/ft.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(Q*(i.object.right-i.object.left)/i.object.zoom/ft.clientWidth,i.object.matrix),rt(st*(i.object.top-i.object.bottom)/i.object.zoom/ft.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function it(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function vt(S,Y){if(!i.zoomToCursor)return;R=!0;const Q=i.domElement.getBoundingClientRect(),st=S-Q.left,ft=Y-Q.top,Dt=Q.width,Wt=Q.height;L.x=st/Dt*2-1,L.y=-(ft/Wt)*2+1,b.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function xt(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function pt(S){h.set(S.clientX,S.clientY)}function Lt(S){vt(S.clientX,S.clientX),d.set(S.clientX,S.clientY)}function qt(S){g.set(S.clientX,S.clientY)}function ot(S){f.set(S.clientX,S.clientY),m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;D(2*Math.PI*m.x/Y.clientHeight),G(2*Math.PI*m.y/Y.clientHeight),h.copy(f),i.update()}function dt(S){M.set(S.clientX,S.clientY),y.subVectors(M,d),y.y>0?it(P(y.y)):y.y<0&&j(P(y.y)),d.copy(M),i.update()}function ut(S){_.set(S.clientX,S.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),$(p.x,p.y),g.copy(_),i.update()}function _t(S){vt(S.clientX,S.clientY),S.deltaY<0?j(P(S.deltaY)):S.deltaY>0&&it(P(S.deltaY)),i.update()}function Nt(S){let Y=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),Y=!0;break}Y&&(S.preventDefault(),i.update())}function Ft(S){if(C.length===1)h.set(S.pageX,S.pageY);else{const Y=It(S),Q=.5*(S.pageX+Y.x),st=.5*(S.pageY+Y.y);h.set(Q,st)}}function Bt(S){if(C.length===1)g.set(S.pageX,S.pageY);else{const Y=It(S),Q=.5*(S.pageX+Y.x),st=.5*(S.pageY+Y.y);g.set(Q,st)}}function Qt(S){const Y=It(S),Q=S.pageX-Y.x,st=S.pageY-Y.y,ft=Math.sqrt(Q*Q+st*st);d.set(0,ft)}function v(S){i.enableZoom&&Qt(S),i.enablePan&&Bt(S)}function O(S){i.enableZoom&&Qt(S),i.enableRotate&&Ft(S)}function q(S){if(C.length==1)f.set(S.pageX,S.pageY);else{const Q=It(S),st=.5*(S.pageX+Q.x),ft=.5*(S.pageY+Q.y);f.set(st,ft)}m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;D(2*Math.PI*m.x/Y.clientHeight),G(2*Math.PI*m.y/Y.clientHeight),h.copy(f)}function nt(S){if(C.length===1)_.set(S.pageX,S.pageY);else{const Y=It(S),Q=.5*(S.pageX+Y.x),st=.5*(S.pageY+Y.y);_.set(Q,st)}p.subVectors(_,g).multiplyScalar(i.panSpeed),$(p.x,p.y),g.copy(_)}function F(S){const Y=It(S),Q=S.pageX-Y.x,st=S.pageY-Y.y,ft=Math.sqrt(Q*Q+st*st);M.set(0,ft),y.set(0,Math.pow(M.y/d.y,i.zoomSpeed)),it(y.y),d.copy(M);const Dt=(S.pageX+Y.x)*.5,Wt=(S.pageY+Y.y)*.5;vt(Dt,Wt)}function H(S){i.enableZoom&&F(S),i.enablePan&&nt(S)}function I(S){i.enableZoom&&F(S),i.enableRotate&&q(S)}function k(S){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",x)),!wt(S)&&(Vt(S),S.pointerType==="touch"?Tt(S):B(S)))}function T(S){i.enabled!==!1&&(S.pointerType==="touch"?lt(S):W(S))}function x(S){switch(Ot(S),C.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",x),i.dispatchEvent($f),r=s.NONE;break;case 1:const Y=C[0],Q=U[Y];Tt({pointerId:Y,pageX:Q.x,pageY:Q.y});break}}function B(S){let Y;switch(S.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case hi.DOLLY:if(i.enableZoom===!1)return;Lt(S),r=s.DOLLY;break;case hi.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;qt(S),r=s.PAN}else{if(i.enableRotate===!1)return;pt(S),r=s.ROTATE}break;case hi.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;pt(S),r=s.ROTATE}else{if(i.enablePan===!1)return;qt(S),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Hl)}function W(S){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ot(S);break;case s.DOLLY:if(i.enableZoom===!1)return;dt(S);break;case s.PAN:if(i.enablePan===!1)return;ut(S);break}}function J(S){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(S.preventDefault(),i.dispatchEvent(Hl),_t(K(S)),i.dispatchEvent($f))}function K(S){const Y=S.deltaMode,Q={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(Y){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}return S.ctrlKey&&!w&&(Q.deltaY*=10),Q}function mt(S){S.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",ct,{passive:!0,capture:!0}))}function ct(S){S.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",ct,{passive:!0,capture:!0}))}function ht(S){i.enabled===!1||i.enablePan===!1||Nt(S)}function Tt(S){switch(Ct(S),C.length){case 1:switch(i.touches.ONE){case Li.ROTATE:if(i.enableRotate===!1)return;Ft(S),r=s.TOUCH_ROTATE;break;case Li.PAN:if(i.enablePan===!1)return;Bt(S),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Li.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;v(S),r=s.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(S),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Hl)}function lt(S){switch(Ct(S),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;q(S),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;nt(S),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(S),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(S),i.update();break;default:r=s.NONE}}function Mt(S){i.enabled!==!1&&S.preventDefault()}function Vt(S){C.push(S.pointerId)}function Ot(S){delete U[S.pointerId];for(let Y=0;Y<C.length;Y++)if(C[Y]==S.pointerId){C.splice(Y,1);return}}function wt(S){for(let Y=0;Y<C.length;Y++)if(C[Y]==S.pointerId)return!0;return!1}function Ct(S){let Y=U[S.pointerId];Y===void 0&&(Y=new Rt,U[S.pointerId]=Y),Y.set(S.pageX,S.pageY)}function It(S){const Y=S.pointerId===C[0]?C[1]:C[0];return U[Y]}i.domElement.addEventListener("contextmenu",Mt),i.domElement.addEventListener("pointerdown",k),i.domElement.addEventListener("pointercancel",x),i.domElement.addEventListener("wheel",J,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",mt,{passive:!0,capture:!0}),this.update()}}class Zw{constructor(t,e){this.sizes=t,this.domElement=e,this.hasOrientationPermission=!1,this.orientationActive=!1,this.defaultPosition=new N(-4,1.7,7),this.initialTarget=new N(1.2,1.35,-2.5),this.fallbackAngle=0,this.lastUserInteraction=0,this.isUserInteracting=!1,this.navigationRoot=null,this.navigationTarget=null,this.navigationPosition=null,this.pointerStart=new Rt,this.pointerMoved=!1,this.raycaster=new qw,this.pointer=new Rt,this.baseOffset=new N,this.previousTarget=new N,this.targetOffset=new N,this.verticalAxis=new N(0,1,0),this.interactiveObjects=[],this.minTarget=new N(-4.25,.65,-4.25),this.maxTarget=new N(4.25,3.8,4.25),this.startOrientationTracking=()=>{this.hasOrientationPermission||(typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(i=>{i==="granted"&&(this.hasOrientationPermission=!0,this.orientationActive=!0)}).catch(console.error):(this.hasOrientationPermission=!0,this.orientationActive=!0))},this.markInteraction=()=>{this.lastUserInteraction=performance.now(),this.isUserInteracting=!0},this.endInteraction=()=>{this.constrainTarget(),this.defaultPosition.copy(this.instance.position),this.initialTarget.copy(this.controls.target),this.fallbackAngle=0,this.isUserInteracting=!1,this.lastUserInteraction=performance.now()},this.handleNavigationPointerDown=i=>{i.button===0&&(this.pointerStart.set(i.clientX,i.clientY),this.pointerMoved=!1,this.navigationTarget=null,this.navigationPosition=null)},this.handleNavigationPointerMove=i=>{Math.hypot(i.clientX-this.pointerStart.x,i.clientY-this.pointerStart.y)>8&&(this.pointerMoved=!0)},this.handleNavigationPointerUp=i=>{if(i.button!==0||this.pointerMoved||!this.navigationRoot)return;const s=this.domElement.getBoundingClientRect();this.pointer.set((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.instance);const r=this.raycaster.intersectObject(this.navigationRoot,!0),o=r[0];if(!o)return;const a=r.map(({object:u})=>this.interactiveObjects.find(({root:h})=>{let f=u;for(;f;){if(f===h)return!0;f=f.parent}return!1})).find(u=>u!==void 0);if(a){a.action();return}const l=new N(xe.clamp(o.point.x,this.minTarget.x,this.maxTarget.x),1.7,xe.clamp(o.point.z,this.minTarget.z,this.maxTarget.z)),c=this.controls.target.clone().sub(this.instance.position);this.navigationPosition=l,this.navigationTarget=l.clone().add(c).clamp(this.minTarget,this.maxTarget),this.lastUserInteraction=performance.now(),this.fallbackAngle=0},this.setInstance(),this.setControls(),this.initOrientation(),this.initPointNavigation()}setInstance(){this.instance=new fn(60,this.sizes.width/this.sizes.height,.1,100),this.instance.position.copy(this.defaultPosition)}setControls(){this.controls=new Kw(this.instance,this.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enablePan=!0,this.controls.panSpeed=.72,this.controls.screenSpacePanning=!1,this.controls.enableZoom=!0,this.controls.minDistance=2,this.controls.maxDistance=11,this.controls.target.copy(this.initialTarget),this.controls.minAzimuthAngle=-Math.PI,this.controls.maxAzimuthAngle=Math.PI,this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/1.7,this.controls.mouseButtons.LEFT=hi.ROTATE,this.controls.mouseButtons.MIDDLE=hi.DOLLY,this.controls.mouseButtons.RIGHT=hi.PAN,this.controls.touches.ONE=Li.ROTATE,this.controls.touches.TWO=Li.DOLLY_PAN,this.controls.listenToKeyEvents(window),this.controls.update()}initOrientation(){typeof window>"u"||typeof window.DeviceOrientationEvent>"u"||(window.addEventListener("pointerdown",this.startOrientationTracking,{once:!0,passive:!0}),window.addEventListener("touchstart",this.startOrientationTracking,{once:!0,passive:!0}),window.addEventListener("pointerdown",this.markInteraction,{passive:!0}),window.addEventListener("touchstart",this.markInteraction,{passive:!0}),window.addEventListener("wheel",this.markInteraction,{passive:!0}),window.addEventListener("pointerup",this.endInteraction,{passive:!0}),window.addEventListener("touchend",this.endInteraction,{passive:!0}),window.addEventListener("pointercancel",this.endInteraction,{passive:!0}),DeviceOrientationEvent.requestPermission||(this.hasOrientationPermission=!0,this.orientationActive=!0))}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}setNavigationRoot(t){this.navigationRoot=t}addInteraction(t,e){this.interactiveObjects.push({root:t,action:e})}update(){const e=performance.now()-this.lastUserInteraction;if(this.navigationTarget&&this.navigationPosition&&(this.controls.target.lerp(this.navigationTarget,.075),this.instance.position.lerp(this.navigationPosition,.075),this.controls.target.distanceToSquared(this.navigationTarget)<.001&&(this.controls.target.copy(this.navigationTarget),this.instance.position.copy(this.navigationPosition),this.defaultPosition.copy(this.instance.position),this.initialTarget.copy(this.controls.target),this.navigationTarget=null,this.navigationPosition=null)),e>3e3&&!this.isUserInteracting&&!this.navigationTarget){this.fallbackAngle+=.018;const s=Math.sin(this.fallbackAngle)*.22;this.baseOffset.copy(this.defaultPosition).sub(this.initialTarget),this.baseOffset.applyAxisAngle(this.verticalAxis,s),this.instance.position.copy(this.initialTarget).add(this.baseOffset),this.controls.target.copy(this.initialTarget)}this.controls.update(),this.constrainTarget()}constrainTarget(){this.previousTarget.copy(this.controls.target),this.controls.target.clamp(this.minTarget,this.maxTarget),this.targetOffset.copy(this.controls.target).sub(this.previousTarget),this.instance.position.add(this.targetOffset)}initPointNavigation(){this.domElement.addEventListener("pointerdown",this.handleNavigationPointerDown,{passive:!0}),this.domElement.addEventListener("pointermove",this.handleNavigationPointerMove,{passive:!0}),this.domElement.addEventListener("pointerup",this.handleNavigationPointerUp,{passive:!0})}destroy(){window.removeEventListener("pointerdown",this.startOrientationTracking),window.removeEventListener("touchstart",this.startOrientationTracking),window.removeEventListener("pointerdown",this.markInteraction),window.removeEventListener("touchstart",this.markInteraction),window.removeEventListener("wheel",this.markInteraction),window.removeEventListener("pointerup",this.endInteraction),window.removeEventListener("touchend",this.endInteraction),window.removeEventListener("pointercancel",this.endInteraction),this.domElement.removeEventListener("pointerdown",this.handleNavigationPointerDown),this.domElement.removeEventListener("pointermove",this.handleNavigationPointerMove),this.domElement.removeEventListener("pointerup",this.handleNavigationPointerUp),this.controls.dispose(),this.interactiveObjects=[]}}class Jw{constructor(t,e){this.sizes=t,this.container=e,this.setInstance()}setInstance(){const t=window.matchMedia("(max-width: 768px)").matches;this.instance=new Uw({antialias:!t,powerPreference:"high-performance"}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.shadowMap.enabled=!t,this.instance.shadowMap.type=zp,this.instance.toneMapping=Hp,this.container.appendChild(this.instance.domElement)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}render(t,e){this.instance.render(t,e)}}class Qw{constructor(t=10,e=10,i=8){this.palette=["#00d9ff","#ff287f","#ffd84d","#ff6b24","#65ff75"],this.elapsed=0,this.colorUpdateElapsed=Number.POSITIVE_INFINITY,this.colorUpdateInterval=window.innerWidth<=768?.12:.07,this.mesh=new Zt,this.gridSize=i;const s=new Ae(t,e),r=new kt({color:328200,roughness:.9}),o=new at(s,r);o.rotation.x=-Math.PI/2,o.position.y=-.01,this.mesh.add(o);const a=document.createElement("canvas");a.width=256,a.height=256,this.floorContext=a.getContext("2d"),this.drawTiles(0),this.floorTexture=new Jn(a),this.floorTexture.colorSpace=Ke,this.floorTexture.generateMipmaps=!1,this.floorTexture.minFilter=Xe,this.floorTexture.magFilter=Xe;const l=new at(new Ae(t,e),new Se({map:this.floorTexture,side:Ie,toneMapped:!1}));l.rotation.x=-Math.PI/2,l.position.y=0,l.receiveShadow=!0,this.mesh.add(l);const c=new Vw().load("/images/totem.webp");c.colorSpace=Ke,c.anisotropy=8;const u=new at(new Ae(5,4.88),new Se({map:c,transparent:!0,alphaTest:.02,depthWrite:!1,side:Ie}));u.rotation.x=-Math.PI/2,u.position.set(0,.025,.45),u.renderOrder=2,this.mesh.add(u)}drawTiles(t){const e=this.floorContext.canvas.width,i=e/this.gridSize,s=2,r=5.8,o=Math.floor(t/r)%3,a=t%r;this.floorContext.globalAlpha=1,this.floorContext.fillStyle="#030206",this.floorContext.fillRect(0,0,e,e);for(let l=0;l<this.gridSize;l++)for(let c=0;c<this.gridSize;c++){let u=0;if(o===0){const g=(l+c)%this.gridSize,_=a*1.35%this.gridSize,p=Math.abs(g-_),d=Math.min(p,this.gridSize-p);u=Math.pow(Math.max(0,1-d/1.45),2)}else if(o===1){const g=(this.gridSize-1)/2,_=c-g,p=l-g,d=Math.atan2(p,_),M=Math.hypot(_,p),y=d+M*.78-a*1.15;u=Math.pow((Math.cos(y)+1)/2,7)*Math.max(.25,1-M/8)}else{const g=(this.gridSize-1)/2,_=Math.abs(l-g)+Math.abs(c-g),p=a*1.45%(this.gridSize-1);u=Math.pow(Math.max(0,1-Math.abs(_-p)/1.15),2.2)}const h=c*i+s/2,f=l*i+s/2,m=i-s;this.floorContext.fillStyle=this.palette[(l*2+c)%this.palette.length],this.floorContext.globalAlpha=.17+u*.61,this.floorContext.fillRect(h,f,m,m)}this.floorContext.globalAlpha=1}update(t){this.elapsed+=t,this.colorUpdateElapsed+=t,!(this.colorUpdateElapsed<this.colorUpdateInterval)&&(this.colorUpdateElapsed=0,this.drawTiles(this.elapsed),this.floorTexture.needsUpdate=!0)}}class tT{constructor(t,e,i){const s=new Ae(t,e),r=new kt({color:4473941,roughness:.6,metalness:.1});this.mesh=new at(s,r),this.mesh.rotation.x=Math.PI*.5,this.mesh.position.set(0,i,0),this.mesh.receiveShadow=!0}}class eT{constructor(t,e,i){this.group=new Zt;const s=new kt({color:5592422,roughness:.5,metalness:.1}),r=new Ae(t,e),o=new at(r,s);o.position.set(0,e/2,-i/2),o.receiveShadow=!0;const a=new Ae(i,e),l=new at(a,s);l.position.set(-t/2,e/2,0),l.rotation.y=Math.PI/2,l.receiveShadow=!0;const c=new Ae(i,e),u=new at(c,s);u.position.set(t/2,e/2,0),u.rotation.y=-Math.PI/2,u.receiveShadow=!0;const h=s.clone();h.side=cn;const f=new at(new Ae(t,e),h);f.position.set(0,e/2,i/2),f.receiveShadow=!0,this.group.add(o,l,u,f)}}class nT{constructor(t){this.lastSecond=-1,this.group=new Zt,this.targetDate=t;const e=window.matchMedia("(max-width: 768px)").matches?.5:1;this.canvas=document.createElement("canvas"),this.canvas.width=2048*e,this.canvas.height=512*e,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(e,e),this.texture=new Jn(this.canvas),this.texture.minFilter=Xe;const i=4.8,s=1.3,r=new ee(i,s,.1),o=new kt({color:657935,metalness:.8,roughness:.2}),a=new at(r,o),l=new ee(i+.12,s+.12,.02),c=new kt({color:16711807,emissive:16711807,emissiveIntensity:1.8}),u=new at(l,c);u.position.z=-.02;const h=new Ae(i-.2,s-.2),f=new Se({map:this.texture,transparent:!0,side:Ie}),m=new at(h,f);m.position.z=.055,this.group.add(a,u,m),this.group.position.set(-1.6,2.3,-4.85),this.updateText()}setTargetDate(t){this.targetDate=t,this.updateText()}updateText(){const t=new Date().getTime(),e=this.targetDate.getTime()-t;let i="00d  00h  00m  00s";if(e>0){const r=Math.floor(e/864e5),o=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),a=Math.floor(e%(1e3*60*60)/(1e3*60)),l=Math.floor(e%(1e3*60)/1e3),c=String(r).padStart(2,"0"),u=String(o).padStart(2,"0"),h=String(a).padStart(2,"0"),f=String(l).padStart(2,"0");i=`${c}d  ${u}h  ${h}m  ${f}s`}this.ctx.clearRect(0,0,2048,512),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,2048,512);const s=1024;this.ctx.font='900 92px "Courier New", monospace',this.ctx.textAlign="center",this.ctx.shadowColor="#ff0055",this.ctx.shadowBlur=25,this.ctx.fillStyle="#ff88aa",this.ctx.fillText("ALLA FESTA MANCANO:",s,115),this.ctx.font='700 68px "Courier New", monospace',this.ctx.shadowBlur=14,this.ctx.fillStyle="#ffffff",this.ctx.fillText("30 OTTOBRE 2026 · 21:30",s,225),this.ctx.font='900 122px "Courier New", monospace',this.ctx.fillStyle="rgba(40, 0, 20, 0.4)",this.ctx.shadowBlur=0,this.ctx.fillText("88d  88h  88m  88s",s,415),this.ctx.font='900 122px "Courier New", monospace',this.ctx.shadowColor="#ff0055",this.ctx.shadowBlur=25,this.ctx.fillStyle="#ffffff",this.ctx.fillText(i,s,415),this.texture.needsUpdate=!0}update(){const t=Math.floor(Date.now()/1e3);t!==this.lastSecond&&(this.lastSecond=t,this.updateText())}updateVisibility(t){this.group.visible=t.z>-4.85}}class Ga{constructor(t=6813672){this.rings=[],this.elapsed=0,this.active=!1,this.group=new Zt,[0,.5].forEach(s=>{const r=new Se({color:t,transparent:!0,opacity:.8,blending:or,depthWrite:!1,side:Ie}),o=new at(new Au(.13,.18,32),r);this.group.add(o),this.rings.push({mesh:o,material:r,phase:s})});const e=new kt({color:t,emissive:t,emissiveIntensity:2.2,transparent:!0,opacity:.9}),i=new at(new Va(.07,24),e);i.position.z=.006,this.group.add(i)}setActive(t){this.active=t}update(t){this.elapsed+=t,this.rings.forEach(e=>{const i=(this.elapsed*(this.active?.65:.45)+e.phase)%1,s=1+i*1.8;e.mesh.scale.setScalar(s),e.material.opacity=(1-i)*(this.active?.95:.68)})}}class iT{constructor(){this.turntables=[],this.platters=[],this.scratchTime=0,this.group=new Zt;const t=new kt({color:1118485,roughness:.2,metalness:.5}),e=new kt({color:3355443,metalness:.8,roughness:.2}),i=new kt({color:328965,roughness:.3,metalness:.1}),s=new ee(2.2,1,.9),r=new at(s,t);r.position.y=.5,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const o=new ee(2.1,.05,.02),a=new kt({color:16711816,emissive:16711816,emissiveIntensity:1.5}),l=new at(o,a);l.position.set(0,.8,.46),this.group.add(l);const c=new ee(.5,.06,.4),u=new jt(.18,.18,.02,32);[-.6,.6].forEach(_=>{const p=new Zt;p.position.x=_;const d=new at(c,e);d.position.set(0,1.03,0),p.add(d);const M=new Zt;M.position.y=1.07;const y=new at(u,i);M.add(y);const b=new jt(.06,.06,.022,16),L=new Se({color:_<0?55807:16711765}),R=new at(b,L);R.position.y=.012,M.add(R),p.add(M),this.turntables.push(p),this.platters.push(M),this.group.add(p)});const h=new ee(.45,.07,.45),f=new at(h,e);f.position.set(0,1.03,0),this.group.add(f);for(let _=0;_<4;_++){const p=new ee(.03,.02,.03),d=new Se({color:_%2===0?65280:16711680}),M=new at(p,d);M.position.set(-.1+_*.06,1.07,-.1),this.group.add(M)}const m=new ee(.4,.7,.4),g=new kt({color:1710618,roughness:.6});[-1.2,1.2].forEach(_=>{const p=new at(m,g);p.position.set(_,1.15,-.1),p.rotation.y=_<0?.3:-.3,this.group.add(p)}),this.interactionPulse=new Ga,this.interactionPulse.group.position.set(0,.5,.472),this.group.add(this.interactionPulse.group),this.group.position.set(3.5,0,-3.5),this.group.rotation.y=-Math.PI/4}update(t){this.interactionPulse.update(t),this.scratchTime=Math.max(0,this.scratchTime-t);const e=this.scratchTime>0?18:1.8;this.platters.forEach((i,s)=>{i.rotation.y+=t*e*(s===0?1:-1)})}setPlaying(t){this.interactionPulse.setActive(t)}scratch(){this.scratchTime=1.1}}class sT{constructor(){this.backWallElements=[],this.rightWallElements=[],this.group=new Zt;const t=(a,l="6",c=512,u=1.6)=>{const h=document.createElement("canvas");h.width=c,h.height=768;const f=h.getContext("2d");f.clearRect(0,0,h.width,h.height),f.textAlign=a,f.textBaseline="middle",f.font='600 540px "Trebuchet MS", sans-serif',f.shadowColor="#ff007f",f.shadowBlur=50,f.lineWidth=9,f.strokeStyle="#ff007f";const m=a==="right"?h.width-12:12;f.strokeText(l,m,h.height/2),f.shadowBlur=15,f.shadowColor="#ffffff",f.fillStyle="#ffe6f2",f.fillText(l,m,h.height/2);const g=new Jn(h);return g.minFilter=Xe,new at(new Ae(u,2.4),new Se({map:g,transparent:!0,side:Ie,depthWrite:!1}))},e=t("right","'6",640,2);e.position.set(3.95,4.05,-4.94);const i=t("left");i.position.set(4.94,4.05,-4.15),i.rotation.y=-Math.PI/2,this.group.add(e,i),this.backWallElements.push(e),this.rightWallElements.push(i);const s=(a,l)=>{const c=document.createElement("canvas");c.width=1024,c.height=256;const u=c.getContext("2d");u.clearRect(0,0,c.width,c.height),u.textAlign=l,u.textBaseline="middle",u.font='600 174px "Trebuchet MS", sans-serif',u.shadowColor="#b8ff42",u.shadowBlur=38,u.lineWidth=5,u.strokeStyle="#b8ff42";const h=l==="right"?c.width-12:12;u.strokeText(a,h,c.height/2),u.shadowColor="#ffffff",u.shadowBlur=10,u.fillStyle="#f4ffd8",u.fillText(a,h,c.height/2);const f=new Jn(c);return f.minFilter=Xe,new at(new Ae(3.2,.8),new Se({map:f,transparent:!0,side:Ie,depthWrite:!1}))},r=s("CELEB","right");r.position.set(3.35,3.1,-4.94);const o=s("RATION","left");o.position.set(4.94,3.1,-3.35),o.rotation.y=-Math.PI/2,this.group.add(r,o),this.backWallElements.push(r),this.rightWallElements.push(o)}updateVisibility(t){const e=t.z>-4.95,i=t.x<4.95;this.backWallElements.forEach(s=>{s.visible=e}),this.rightWallElements.forEach(s=>{s.visible=i})}}class Zf{constructor(){this.particles=[],this.transform=new De,this.count=150,this.roomSize=10,this.roomHeight=4,this.clock=new bm,this.group=new Zt;const t=new Ae(.06,.12),e=new kt({color:14540253,metalness:.95,roughness:.1,side:Ie,emissive:2236962});this.mesh=new ym(t,e,this.count),this.mesh.instanceMatrix.setUsage(tm),this.mesh.frustumCulled=!1,this.group.add(this.mesh);for(let i=0;i<this.count;i++){const s=(Math.random()-.5)*(this.roomSize-1),r=Math.random()*this.roomHeight,o=(Math.random()-.5)*(this.roomSize-1),a=new N(s,r,o),l=new Hn(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),c=new N((Math.random()-.5)*.2,-(.5+Math.random()*.8),(Math.random()-.5)*.2),u=new N((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2);this.particles.push({position:a,rotation:l,velocity:c,rotSpeed:u})}this.clock.start()}update(){const t=this.clock.getDelta();this.particles.forEach((e,i)=>{e.position.addScaledVector(e.velocity,t),e.rotation.x+=e.rotSpeed.x*t,e.rotation.y+=e.rotSpeed.y*t,e.rotation.z+=e.rotSpeed.z*t,e.position.y<=0&&(e.position.y=this.roomHeight,e.position.x=(Math.random()-.5)*(this.roomSize-1),e.position.z=(Math.random()-.5)*(this.roomSize-1)),this.transform.position.copy(e.position),this.transform.rotation.copy(e.rotation),this.transform.updateMatrix(),this.mesh.setMatrixAt(i,this.transform.matrix)}),this.mesh.instanceMatrix.needsUpdate=!0}}class rT{constructor(){this.fingerPairs=[],this.jetFlames=[],this.ledMaterials=[],this.notes=[],this.elapsed=0,this.playing=!1,this.paletteOffset=0,this.performanceTime=null,this.group=new Zt,this.group.position.set(0,0,-.42),this.body=new Zt,this.group.add(this.body);const t=new kt({color:14148328,metalness:.78,roughness:.24}),e=new kt({color:1120288,metalness:.7,roughness:.3}),i=new kt({color:462872,metalness:.35,roughness:.22}),s=new at(new ee(.72,.72,.42),t);s.position.y=1.48,s.castShadow=!0,this.body.add(s);const r=new at(new ee(.48,.34,.025),i);r.position.set(0,1.5,.225),this.body.add(r);const o=new at(new ee(.86,.58,.56),t);o.position.y=2.13,o.castShadow=!0,this.body.add(o);const a=new at(new ee(.65,.34,.025),i);a.position.set(0,2.13,.295),this.body.add(a),this.headHitArea=new at(new ee(.9,.62,.08),new Se({transparent:!0,opacity:0,depthWrite:!1})),this.headHitArea.position.set(0,2.13,.34),this.body.add(this.headHitArea),[-.2,.2].forEach(h=>{const f=this.createLedMaterial(6813672),m=new at(new Je(.065,16,12),f);m.scale.y=.72,m.position.set(h,2.17,.32),this.body.add(m)}),[-.2,0,.2].forEach((h,f)=>{const m=new at(new ee(.09,.12+f*.045,.035),this.createLedMaterial(f===0?16732058:f===1?6813672:16767053));m.position.set(h,1.48,.245),this.body.add(m)});const l=new at(new jt(.018,.018,.35,10),e);l.position.set(0,2.59,0),this.body.add(l);const c=new at(new Je(.075,16,12),this.createLedMaterial(16732058));c.position.set(0,2.79,0),this.body.add(c);const u=new at(new ys(.48,.055,12,32,Math.PI),e);u.position.set(0,2.23,0),u.rotation.z=Math.PI,this.body.add(u),[-.47,.47].forEach(h=>{const f=new at(new jt(.14,.14,.11,20),e);f.rotation.z=Math.PI/2,f.position.set(h,2.12,0),this.body.add(f)}),this.leftArm=this.createArm(-1,t,e),this.rightArm=this.createArm(1,t,e),this.leftLeg=this.createLeg(-1,t,e),this.rightLeg=this.createLeg(1,t,e),this.body.add(this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.createNotes()}update(t){if(this.elapsed+=t,this.performanceTime!==null)this.performanceTime+=t,this.updatePerformance(this.performanceTime);else{this.body.position.y=Math.sin(this.elapsed*(this.playing?5.2:2.4))*(this.playing?.075:.035),this.body.rotation.y=Math.sin(this.elapsed*1.35)*.055,this.body.rotation.x=this.playing?Math.sin(this.elapsed*8)*.09:0;const e=this.playing?1.32+Math.sin(this.elapsed*5.5)*.22:.38+(Math.sin(this.elapsed*3.5)+1)*.1;this.leftArm.rotation.z=-e,this.rightArm.rotation.z=e,this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.fingerPairs.forEach(i=>{i.visible=!1}),this.jetFlames.forEach(i=>{i.visible=!1})}this.ledMaterials.forEach((e,i)=>{const s=(this.elapsed*.12+i*.17+this.paletteOffset)%1;e.color.setHSL(s,.9,.62),e.emissive.setHSL(s,.9,.5),e.emissiveIntensity=1.7+Math.sin(this.elapsed*4+i)*.55}),this.notes.forEach((e,i)=>{const s=(this.elapsed*e.speed+e.phase)%1;e.sprite.position.set(e.startX+Math.sin(s*Math.PI*3+i)*.18,1.2+s*2.25,.12+Math.cos(s*Math.PI*2+i)*.08),e.sprite.material.opacity=Math.sin(s*Math.PI)*.95;const r=.34+s*.18;e.sprite.scale.set(r,r,1)})}setPlaying(t){this.playing=t,this.notes.forEach(e=>{e.sprite.visible=t})}cycleLedPalette(){this.paletteOffset=(this.paletteOffset+.23)%1}performDance(){this.performanceTime===null&&(this.performanceTime=0,this.cycleLedPalette())}updatePerformance(t){if(this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.fingerPairs.forEach(i=>{i.visible=!1}),this.jetFlames.forEach(i=>{i.visible=!1}),t<.45){const i=t/.45;this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.y=-Math.sin(i*Math.PI)*.16,this.body.rotation.x=i*.12,this.leftArm.rotation.z=-.25,this.rightArm.rotation.z=.25,this.leftLeg.rotation.x=-i*.32,this.rightLeg.rotation.x=-i*.32;return}if(t<2.35){const i=(t-.45)/1.9,s=xe.smoothstep(i,.12,.92),r=1-i,o=r*r*0+2*r*i*3.8+i*i*-.5,a=xe.smoothstep(i,.34,.7);this.group.position.set(0,o,xe.lerp(-.42,3.8,s)),this.group.rotation.set(-a*Math.PI*2,0,0),this.leftArm.rotation.z=-1.65,this.rightArm.rotation.z=1.65,this.leftLeg.rotation.x=-Math.sin(i*Math.PI)*.55,this.rightLeg.rotation.x=-Math.sin(i*Math.PI)*.55;return}if(this.group.position.set(0,-.5,3.8),this.group.rotation.set(0,0,0),t<3.35){const i=(t-2.35)/1,s=Math.sin(i*Math.PI);this.body.position.y=-s*.26,this.body.rotation.x=s*.1,this.leftLeg.rotation.x=-s*.38,this.rightLeg.rotation.x=-s*.38,this.leftArm.rotation.z=xe.lerp(-1.45,-.55,i),this.rightArm.rotation.z=xe.lerp(1.45,.55,i);return}if(t<4.1){const i=t-3.35,s=Math.sin(i*Math.PI*4);this.body.position.y=Math.abs(s)*.07,this.body.rotation.y=s*.16,this.leftArm.rotation.z=-.72+s*.18,this.rightArm.rotation.z=.72+s*.18;return}if(t<6.2){const i=t-4.1,s=Math.sin(i*Math.PI*1.6)>=0,r=Math.abs(Math.sin(i*Math.PI*3.2)),o=xe.smoothstep((i-1.7)/.4,0,1),a=s?-.62:-2.35,l=s?2.35:.62,c=s?-.28:.1,u=s?.1:-.28;this.body.position.y=r*.1*(1-o),this.body.rotation.set(0,(s?-.22:.22)*(1-o),(s?-.12:.12)*(1-o)),this.leftArm.rotation.z=xe.lerp(a,-.72,o),this.rightArm.rotation.z=xe.lerp(l,.72,o),this.leftLeg.rotation.x=xe.lerp(c,0,o),this.rightLeg.rotation.x=xe.lerp(u,0,o);return}if(t<7.7){const i=t-6.2,s=i<.35?xe.smoothstep(i/.35,0,1):i<.9?1:1-xe.smoothstep((i-.9)/.6,0,1);this.body.position.y=-s*.38,this.body.rotation.x=s*.06,this.leftLeg.rotation.x=-s*Math.PI/2,this.rightLeg.rotation.x=s*Math.PI/2,this.leftArm.rotation.z=xe.lerp(-.72,-1.45,s),this.rightArm.rotation.z=xe.lerp(.72,1.45,s);return}if(t<9.4){const i=t-7.7,s=Math.floor(i/.42)%2===0,r=Math.sin(i%.42/.42*Math.PI);this.body.position.y=Math.abs(Math.sin(i*Math.PI*3))*.06,this.body.rotation.y=(s?1:-1)*.08*r,this.leftArm.rotation.z=s?2.28-r*.18:-.72,this.rightArm.rotation.z=s?.72:-2.28+r*.18,this.leftArm.rotation.x=s?-.32:0,this.rightArm.rotation.x=s?0:-.32,this.fingerPairs[0].visible=s,this.fingerPairs[1].visible=!s,this.leftLeg.rotation.x=-Math.sin(i*Math.PI*2)*.18,this.rightLeg.rotation.x=Math.sin(i*Math.PI*2)*.18;return}if(t<11.1){const i=t-9.4,s=Math.sin(i*Math.PI*4),r=Math.sign(Math.sin(i*Math.PI*3));this.body.position.y=Math.abs(s)*.12,this.body.rotation.set(r*.08,s*.28,-s*.1),this.leftArm.rotation.z=-1.25+r*.55,this.rightArm.rotation.z=1.25+r*.55,this.leftLeg.rotation.x=s*.55,this.rightLeg.rotation.x=-s*.55;return}if(t<11.8){const i=(t-11.1)/.7,s=i*i;this.group.position.set(0,xe.lerp(-.5,1.35,s),3.8),this.group.rotation.set(-.08*(1-i),0,0),this.body.position.y=-Math.sin(i*Math.PI)*.12,this.leftArm.rotation.z=-.55,this.rightArm.rotation.z=.55,this.leftLeg.rotation.x=-.18*(1-i),this.rightLeg.rotation.x=-.18*(1-i),this.setJetFlames(.45+i*.55);return}if(t<13.9){const i=(t-11.8)/2.1,s=i*i*(3-2*i);this.group.position.set(0,1.35+Math.sin(i*Math.PI)*.65,xe.lerp(3.8,-.42,s)),this.group.rotation.set(-Math.sin(i*Math.PI)*.12,0,0),this.leftArm.rotation.z=-.72+Math.sin(i*Math.PI*2)*.08,this.rightArm.rotation.z=.72-Math.sin(i*Math.PI*2)*.08,this.setJetFlames(.9+Math.sin(this.elapsed*28)*.1);return}if(t<14.65){const i=(t-13.9)/.75,s=i*i*(3-2*i);this.group.position.set(0,xe.lerp(1.35,0,s),-.42),this.group.rotation.set(0,0,0),this.leftArm.rotation.z=-.5,this.rightArm.rotation.z=.5,this.setJetFlames(Math.max(.15,1-i));return}if(t<15.1){const i=(t-14.65)/.45;this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.y=-Math.sin(i*Math.PI)*.11,this.leftArm.rotation.z=-.5,this.rightArm.rotation.z=.5;return}this.performanceTime=null,this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.jetFlames.forEach(i=>{i.visible=!1})}setJetFlames(t){this.jetFlames.forEach((e,i)=>{const s=.85+Math.sin(this.elapsed*34+i*2.4)*.15;e.visible=!0,e.scale.set(.8+t*.2,t*s,.8+t*.2)})}createLedMaterial(t){const e=new kt({color:t,emissive:t,emissiveIntensity:2,roughness:.25});return this.ledMaterials.push(e),e}createArm(t,e,i){const s=new Zt;s.position.set(t*.48,1.67,.02),s.rotation.z=t*.38;const r=new at(new jt(.085,.1,.5,14),e);r.position.y=-.22,s.add(r);const o=new at(new Je(.12,16,12),i);o.position.set(0,-.52,.13);const a=new Zt;return a.position.set(0,-.57,.17),[-.035,.035].forEach(l=>{const c=new at(new jt(.018,.022,.2,8),new kt({color:6813672,emissive:6813672,emissiveIntensity:1.5}));c.position.set(l,-.08,0),a.add(c)}),a.visible=!1,this.fingerPairs.push(a),s.add(o,a),s}createLeg(t,e,i){const s=new Zt;s.position.set(t*.22,1.16,0);const r=new at(new jt(.09,.105,.58,14),e);r.position.y=-.27;const o=new at(new ee(.22,.12,.36),i);o.position.set(0,-.59,.1);const a=new Zt;a.position.set(0,-.8,.08);const l=new at(new eo(.145,.64,14),new Se({color:16727951,transparent:!0,opacity:.92})),c=new at(new eo(.078,.46,12),new Se({color:16777215,transparent:!0,opacity:1}));return l.rotation.z=Math.PI,c.rotation.z=Math.PI,c.position.y=.03,a.add(l,c),a.visible=!1,this.jetFlames.push(a),s.add(r,o,a),s}createNotes(){const t=[-1.55,-.9,-.28,.35,.95,1.55];["♪","♫","♪","♬","♫","♪"].forEach((e,i)=>{const s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");if(!r)return;r.clearRect(0,0,128,128),r.fillStyle="#ffffff",r.font="700 104px Georgia",r.textAlign="center",r.textBaseline="middle",r.shadowColor="#ffffff",r.shadowBlur=20,r.fillText(e,64,66);const o=new Jn(s);o.colorSpace=Ke;const a=new wu({map:o,color:16777215,transparent:!0,depthWrite:!1}),l=new xm(a);l.visible=!1,this.group.add(l),this.notes.push({sprite:l,speed:.12+i*.012,phase:i/t.length,startX:t[i]})})}}class oT{constructor(){this.heads=[],this.elapsed=0,this.updateElapsed=0,this.updateInterval=window.matchMedia("(max-width: 768px)").matches?1/30:0,this.boostTime=0,this.worldPosition=new N,this.lightOrigin=new N,this.targetWorldPosition=new N,this.lightDirection=new N,this.upDirection=new N(0,1,0),this.group=new Zt,this.group.position.set(-4.15,0,-3.7);const t=new kt({color:1514016,metalness:.9,roughness:.25}),e=new kt({color:6845053,metalness:1,roughness:.16}),i=new at(new jt(.38,.5,.2,24),t);i.position.y=.1,i.castShadow=!0;const s=new at(new jt(.07,.09,3.75,14),e);s.position.y=1.98,s.castShadow=!0;const r=new at(new Je(.13,16,12),e);r.position.y=3.88,this.group.add(i,s,r);const o=document.createElement("canvas");o.width=128,o.height=128;const a=o.getContext("2d"),l=a.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.28,"rgba(255,255,255,0.8)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,128,128);const c=new Jn(o),u=[16722047,16767037,6684533,3529215,11099391],h=.105,f=.82;u.forEach((m,g)=>{const _=.78+g*.67,p=new Zt;p.position.set(0,_,0);const d=new at(new ys(.21,.035,10,20,Math.PI),e);d.rotation.z=Math.PI,d.position.z=.02;const M=new at(new ee(.34,.34,.4),t);M.position.z=.02,M.castShadow=!0;const y=new kt({color:m,emissive:m,emissiveIntensity:2.6}),b=new at(new Va(h,20),y);b.position.z=.225,p.add(d,M,b),this.group.add(p);const L=new De;L.position.set(4,1,-1.08);const R=new Sm(m,42,16,Math.PI/15,.55,1.15);R.position.set(0,0,.225),R.target=L,R.castShadow=g===2,p.add(R);const C=new Se({color:m,transparent:!0,opacity:.17,blending:or,depthWrite:!1}),U=new at(new jt(f/2,h,1,20,1,!0),C),w=new Se({map:c,color:m,transparent:!0,opacity:.72,blending:or,depthWrite:!1,side:Ie}),E=new at(new Ae(f,f),w);this.group.add(L,U,E),this.heads.push({fixture:p,light:R,target:L,ray:U,rayMaterial:C,lensMaterial:y,wallSpot:E,phase:g*.8})})}update(t){if(this.updateElapsed+=t,this.updateElapsed<this.updateInterval)return;const e=this.updateElapsed;this.updateElapsed=0,this.boostTime=Math.max(0,this.boostTime-e),this.elapsed+=e*(this.boostTime>0?3.2:1),this.heads.forEach((i,s)=>{const r=(this.elapsed*(.1+s*.008)+i.phase)%4,o=Math.floor(r),a=r-o,l=4.79,c=-4.45+a*8.9,u=.65+(Math.sin(this.elapsed*.75+s*1.1)+1)*1.65,h=this.worldPosition;o===0?(h.set(c,u,-l),i.wallSpot.rotation.set(0,0,0)):o===1?(h.set(l,u,c),i.wallSpot.rotation.set(0,-Math.PI/2,0)):o===2?(h.set(-c,u,l),i.wallSpot.rotation.set(0,Math.PI,0)):(h.set(-l,u,-c),i.wallSpot.rotation.set(0,Math.PI/2,0));const f=h.sub(this.group.position);i.target.position.copy(f),i.wallSpot.position.copy(f);const m=this.targetWorldPosition.copy(i.target.position).add(this.group.position);i.fixture.lookAt(m);const g=this.lightOrigin;i.light.getWorldPosition(g),g.sub(this.group.position);const _=this.lightDirection.copy(i.target.position).sub(g).normalize(),p=g.distanceTo(i.target.position);i.ray.position.copy(g).addScaledVector(_,p/2),i.ray.scale.set(1,p,1),i.ray.quaternion.setFromUnitVectors(this.upDirection,_),i.rayMaterial.opacity=.13+Math.sin(this.elapsed*2.5+s)*.035,i.lensMaterial.emissiveIntensity=2.2+Math.sin(this.elapsed*3+s)*.8})}boost(){this.boostTime=1.4}}class aT{constructor(){this.elapsed=0,this.throwProgress=null,this.glassShards=[],this.bubbles=[],this.bubbleTime=0,this.drinkColorIndex=0,this.group=new Zt,this.group.position.set(.92,0,.4);const t=new kt({color:14477033,metalness:.82,roughness:.22}),e=new kt({color:1053980,metalness:.72,roughness:.28}),i=new kt({color:16722047,emissive:16722047,emissiveIntensity:1.5}),s=new at(new ee(.52,.62,.34),t);s.position.y=1.43;const r=new at(new ee(.37,.4,.025),i);r.position.set(0,1.4,.185);const o=new at(new ee(.62,.46,.46),t);o.position.y=1.97;const a=new at(new ee(.46,.25,.025),e);a.position.set(0,1.98,.245),this.group.add(s,r,o,a),[-.14,.14].forEach(g=>{const _=new at(new Je(.045,14,10),i);_.position.set(g,2,.265),this.group.add(_)});const l=new at(new Je(.05,12,8),e);l.position.set(0,1.7,.21);const c=new eo(.11,.18,3);[-1,1].forEach(g=>{const _=new at(c,e);_.position.set(g*.1,1.7,.2),_.rotation.z=g*Math.PI/2,this.group.add(_)}),this.group.add(l),this.leftArm=this.createArm(-1,t,e),this.rightArm=this.createArm(1,t,e),this.group.add(this.leftArm,this.rightArm),this.shaker=new Zt;const u=new at(new jt(.09,.12,.34,16),e),h=new at(new jt(.07,.09,.1,16),t);h.position.y=.22,this.shaker.add(u,h),this.shaker.position.set(0,1.38,.34),this.group.add(this.shaker),this.drinkMaterial=new kt({color:16722047,emissive:16722047,emissiveIntensity:.9,transparent:!0,opacity:0}),this.servedDrink=new Zt,this.servedDrink.position.set(-.34,0,.55),this.glass=new at(new jt(.13,.095,.28,18,1,!0),new no({color:16777215,transmission:.75,transparent:!0,opacity:.42,roughness:.08,side:Ie})),this.glass.position.y=1.24,this.liquid=new at(new jt(.105,.078,.19,16),this.drinkMaterial),this.liquid.position.y=1.21,this.servedDrink.add(this.glass,this.liquid);const f=new no({color:15268863,transmission:.72,transparent:!0,opacity:.68,roughness:.12});for(let g=0;g<10;g++){const _=new at(new Ru(.045+g%3*.018),f);_.visible=!1,this.glassShards.push(_),this.servedDrink.add(_)}const m=new Se({color:16777215,transparent:!0,opacity:.75});for(let g=0;g<9;g++){const _=new at(new Je(.018+g%3*.006,8,6),m);_.visible=!1,this.bubbles.push(_),this.servedDrink.add(_)}this.group.add(this.servedDrink),this.pourStream=new at(new jt(.018,.018,.5,8),new Se({color:16722047,transparent:!0,opacity:.75})),this.pourStream.position.set(-.34,1.58,.5),this.pourStream.visible=!1,this.group.add(this.pourStream)}update(t){if(this.elapsed+=t,this.updateBubbles(t),this.throwProgress!==null){this.throwProgress+=t;const i=this.throwProgress,s=Math.min(i/1.5,1),r=Math.sin(s*Math.PI);if(this.shaker.position.set(0,1.42+r*2.2,.34),this.shaker.rotation.z=s*Math.PI*4,this.group.rotation.y=xe.smoothstep(s,.12,.88)*Math.PI*2,i>=1.5&&i<2.4){const o=(i-1.5)/.9;this.shaker.position.set(-.34,1.88,.42),this.shaker.rotation.z=1.05,this.pourStream.visible=o>.08,this.drinkMaterial.opacity=Math.min(.82,o)}else if(i>=2.4&&i<4.25){const o=1-Math.pow(1-(i-2.4)/1.85,3);this.pourStream.visible=!1,this.shaker.position.set(0,1.38,.34),this.shaker.rotation.z=0,this.servedDrink.position.x=-.34-o*2.16}else if(i>=4.25&&i<4.95){const o=(i-4.25)/.7;this.shaker.position.set(-.08,1.17,.48),this.shaker.rotation.z=Math.PI/2,this.servedDrink.position.x=-2.5-o*.18,this.servedDrink.position.y=-o*1.18,this.servedDrink.rotation.z=o*Math.PI*1.35,o>.82&&this.breakGlass(o)}else if(i>=4.95&&i<7.25){const o=i-4.95;this.breakGlass(1),this.shaker.position.set(-.08,1.17,.48),this.shaker.rotation.z=Math.PI/2,this.group.rotation.y=-.72+Math.sin(o*16)*.05,this.group.position.y=Math.abs(Math.sin(o*18))*.045,this.leftArm.rotation.z=2.9+Math.sin(o*13)*.1,this.rightArm.rotation.z=-2.9-Math.sin(o*13)*.1}else if(i>=7.25){const o=Math.min((i-7.25)/.75,1);this.group.rotation.y=xe.lerp(-.72,0,o),this.group.position.y=0,this.leftArm.rotation.z=xe.lerp(2.9,1.02,o),this.rightArm.rotation.z=xe.lerp(-2.9,-1.02,o),this.shaker.position.lerp(new N(0,1.38,.34),o),this.shaker.rotation.z=xe.lerp(Math.PI/2,0,o)}if(i<4.95){const o=Math.sin(Math.min(i/2.1,1)*Math.PI);this.leftArm.rotation.z=1.02-o*.28,this.rightArm.rotation.z=-1.02+o*.28}i>=8&&(this.throwProgress=null,this.shaker.position.set(0,1.38,.34),this.shaker.rotation.z=0,this.group.rotation.y=0,this.group.position.y=0,this.leftArm.rotation.z=1.02,this.rightArm.rotation.z=-1.02,this.pourStream.visible=!1);return}const e=Math.sin(this.elapsed*10);this.shaker.position.x=e*.055,this.shaker.position.y=1.38+Math.abs(e)*.045,this.shaker.rotation.z=e*.16,this.leftArm.rotation.z=1.02+e*.08,this.rightArm.rotation.z=-1.02+e*.08,this.group.rotation.y=Math.sin(this.elapsed*1.4)*.035}throwShaker(){this.throwProgress===null&&(this.throwProgress=0,this.servedDrink.position.set(-.34,0,.55),this.servedDrink.rotation.set(0,0,0),this.glass.visible=!0,this.liquid.visible=!0,this.glassShards.forEach(t=>{t.visible=!1}),this.drinkMaterial.opacity=0,this.bubbleTime=0,this.bubbles.forEach(t=>{t.visible=!1}))}activateDrink(){if(!this.glass.visible||this.drinkMaterial.opacity===0)return;const t=[16722047,55807,16767053,16739108,6684533];this.drinkColorIndex=(this.drinkColorIndex+1)%t.length;const e=t[this.drinkColorIndex];this.drinkMaterial.color.setHex(e),this.drinkMaterial.emissive.setHex(e),this.drinkMaterial.opacity=.86,this.bubbleTime=2.4}updateBubbles(t){this.bubbleTime=Math.max(0,this.bubbleTime-t),this.bubbles.forEach((e,i)=>{if(e.visible=this.bubbleTime>0,!e.visible)return;const s=(this.elapsed*(.8+i*.04)+i*.13)%1;e.position.set(Math.sin(i*2.1)*.07,1.12+s*.32,Math.cos(i*1.7)*.055),e.scale.setScalar(.65+s*.7)})}breakGlass(t){this.glass.visible=!1,this.liquid.visible=!1,this.bubbleTime=0,this.bubbles.forEach(e=>{e.visible=!1}),this.glassShards.forEach((e,i)=>{e.visible=!0;const s=Math.max(0,t-.82)*2.8,r=i/this.glassShards.length*Math.PI*2;e.position.set(Math.cos(r)*s*(.12+i%3*.025),1.24+Math.abs(Math.sin(r*2))*s*.055,Math.sin(r)*s*.11),e.rotation.set(r*.7,r,r*1.3)})}createArm(t,e,i){const s=new Zt;s.position.set(t*.34,1.58,.12),s.rotation.z=t*-1.02;const r=new at(new jt(.055,.07,.42,12),e);r.position.y=-.19;const o=new at(new Je(.08,14,10),i);return o.position.set(0,-.42,.2),s.add(r,o),s}}class lT{constructor(){this.group=new Zt,this.group.position.set(-4.62,0,1.25),this.group.rotation.y=Math.PI/2;const t=new kt({color:1380633,metalness:.45,roughness:.28}),e=new kt({color:3159618,metalness:.8,roughness:.16}),i=new kt({color:1316897,metalness:.7,roughness:.3}),s=new at(new ee(3.1,1.05,.72),t);s.position.set(0,.525,.42),s.castShadow=!0,s.receiveShadow=!0;const r=new at(new ee(3.25,.09,.86),e);r.position.set(0,1.08,.42),r.castShadow=!0;const o=new at(new ee(2.85,.055,.025),new kt({color:55807,emissive:55807,emissiveIntensity:2.1}));o.position.set(0,.75,.79),this.group.add(s,r,o),[1.55,2.15].forEach(m=>{const g=new at(new ee(2.7,.08,.18),i);g.position.set(0,m,-.2),this.group.add(g)}),[16722047,55807,16767053,16739108,6684533,16722047].forEach((m,g)=>{const _=g<3?1.55:2.15,p=-.85+g%3*.85,d=new kt({color:m,emissive:m,emissiveIntensity:.55,transparent:!0,opacity:.86,roughness:.18}),M=new at(new jt(.085,.105,.38,16),d);M.position.set(p,_+.23,-.19);const y=new at(new jt(.045,.055,.14,12),d);y.position.set(p,_+.49,-.19),this.group.add(M,y)});const l=document.createElement("canvas");l.width=512,l.height=192;const c=l.getContext("2d");c.clearRect(0,0,l.width,l.height),c.textAlign="center",c.textBaseline="middle",c.font='900 126px "Trebuchet MS", sans-serif',c.shadowColor="#ff287f",c.shadowBlur=32,c.strokeStyle="#ff287f",c.lineWidth=7,c.strokeText("BAR",256,96),c.fillStyle="#ffffff",c.fillText("BAR",256,96);const u=new Jn(l);u.colorSpace=Ke;const h=new at(new Ae(2.25,.84),new Se({map:u,transparent:!0,depthWrite:!1}));h.position.set(0,2.92,-.37),this.group.add(h);const f=new Yn(16722047,8,4.5,1.5);f.position.set(0,2.2,1.25),this.group.add(f),this.bartender=new aT,this.group.add(this.bartender.group),this.interactionPulse=new Ga(16722047),this.interactionPulse.group.position.set(0,.5,.805),this.group.add(this.interactionPulse.group)}update(t){this.bartender.update(t),this.interactionPulse.update(t)}throwShaker(){this.bartender.throwShaker()}}class cT{constructor(){this.lavaBlobs=[],this.elapsed=0,this.group=new Zt,this.group.position.set(-2.35,0,4.05);const t=new kt({color:10990268,metalness:1,roughness:.12}),e=new no({color:3416904,metalness:.15,roughness:.08,transmission:.48,transparent:!0,opacity:.78}),i=new kt({color:6813672,roughness:.68,emissive:1195842,emissiveIntensity:.5}),s=new at(new jt(.055,.075,.84,16),t);s.position.y=.46;const r=new at(new jt(.42,.5,.08,28),t);r.position.y=.04;const o=new at(new jt(.7,.7,.07,32),e);o.position.y=.91,o.castShadow=!0,this.group.add(s,r,o),[-1,1].forEach(_=>{const p=new Zt;p.position.x=_*1.08;const d=new at(new jt(.045,.06,.43,12),t);d.position.y=.24;const M=new at(new jt(.28,.34,.07,22),t);M.position.y=.035;const y=new at(new jt(.38,.34,.16,24),i);y.position.y=.51,y.castShadow=!0;const b=new at(new ee(.72,.58,.13),i);b.position.set(_*.31,.78,0),b.rotation.y=Math.PI/2,b.rotation.z=_*.16,b.castShadow=!0,p.add(d,M,y,b),this.group.add(p)});const a=new Zt;a.position.set(0,.98,0);const l=new kt({color:13209387,metalness:.82,roughness:.2}),c=new at(new jt(.15,.2,.13,20),l),u=new at(new jt(.1,.15,.48,20),new no({color:16763176,emissive:9390080,emissiveIntensity:.48,transparent:!0,opacity:.48,transmission:.38,roughness:.12,depthWrite:!1}));u.position.y=.3;const h=new at(new jt(.08,.11,.1,20),l);h.position.y=.59,a.add(c,u,h);const f=new Se({color:16772962});[.18,.34,.48].forEach((_,p)=>{const d=new at(new Je(.065,12,10),f);d.position.y=_,d.scale.set(1+p*.12,1.35,.82),this.lavaBlobs.push(d),a.add(d)});const m=new Yn(16763176,1.6,1.8,2);m.position.y=.34,a.add(m),this.group.add(a);const g=new Yn(6813672,5,4.2,1.7);g.position.set(0,1.8,.2),this.group.add(g)}update(t){this.elapsed+=t,this.lavaBlobs.forEach((e,i)=>{const s=this.elapsed*(.72+i*.09)+i*2.1;e.position.y=.33+Math.sin(s)*.16,e.position.x=Math.sin(s*.67)*.025,e.scale.y=1.15+Math.cos(s*1.3)*.28})}}class uT{constructor(){this.group=new Zt,this.group.position.set(4.2,0,3.65);const t=new kt({color:11736405,metalness:.25,roughness:.42,emissive:3474199,emissiveIntensity:.35}),e=new kt({color:3234869,roughness:.7}),i=new kt({color:3581792,roughness:.62,side:Ie}),s=new at(new jt(.34,.25,.62,24),t);s.position.y=.31,s.castShadow=!0;const r=new at(new ys(.34,.045,10,24),t);r.position.y=.62,r.rotation.x=Math.PI/2,this.group.add(s,r),[{x:0,z:0,height:2.45,lean:.03},{x:-.12,z:.04,height:2.05,lean:-.12},{x:.13,z:-.04,height:2.2,lean:.13}].forEach((l,c)=>{const u=new at(new jt(.025,.04,l.height,10),e);u.position.set(l.x,.62+l.height/2,l.z),u.rotation.z=l.lean,u.castShadow=!0,this.group.add(u);for(let h=0;h<5;h++){const f=h%2===0?-1:1,m=new at(new Je(.34,16,10),i);m.scale.set(1.7,.18,.62),m.position.set(l.x+f*(.23+h*.025),1.05+h*.38+c*.05,l.z+(c-1)*.12),m.rotation.z=f*(.38+h*.08),m.rotation.y=c*.72+h*.45,m.castShadow=!0,this.group.add(m)}});const a=new Yn(6684533,3.5,3,1.8);a.position.set(0,1.5,.4),this.group.add(a)}updateVisibility(t){this.group.visible=t.x<4.95}}class hT{constructor(){this.flames=[],this.smoke=[],this.confetti=[],this.elapsed=0,this.celebrationTime=-1,this.group=new Zt,this.group.position.set(4.05,0,1.45);const t=new kt({color:11056319,metalness:1,roughness:.14}),e=new at(new jt(.78,.78,.09,32),new no({color:2303795,metalness:.45,roughness:.18,transmission:.22}));e.position.y=.88,e.castShadow=!0;const i=new at(new jt(.06,.08,.84,16),t);i.position.y=.44;const s=new at(new jt(.4,.48,.08,28),t);s.position.y=.04,this.group.add(e,i,s);const r=new kt({color:16767208,roughness:.62,emissive:3870756,emissiveIntensity:.28}),o=new kt({color:16777215,roughness:.7}),a=new at(new jt(.56,.58,.34,32),r);a.position.y=1.09,a.castShadow=!0;const l=new at(new jt(.4,.43,.26,32),o);l.position.y=1.38,l.castShadow=!0;const c=new at(new ys(.565,.035,10,32),new kt({color:6813672,emissive:6813672,emissiveIntensity:1.1}));c.rotation.x=Math.PI/2,c.position.y=1.16,this.group.add(a,l,c),[-.2,0,.2].forEach((h,f)=>{const m=new at(new jt(.025,.025,.28,12),new kt({color:f===1?16732058:6813672,roughness:.42}));m.position.set(h,1.65,.08);const g=new at(new Je(.055,12,10),new Se({color:16769899,transparent:!0,opacity:.95}));g.scale.y=1.7,g.position.set(h,1.86,.08),this.flames.push(g),this.group.add(m,g);for(let _=0;_<3;_++){const p=new Se({color:14542056,transparent:!0,opacity:0,depthWrite:!1}),d=new at(new Je(.045,10,8),p);d.visible=!1,this.smoke.push({mesh:d,offset:f*.23+_*.31}),this.group.add(d)}});const u=[6813672,16732058,16767053,16777215,9399295];for(let h=0;h<55;h++){const f=new at(new Ae(.045,.09),new Se({color:u[h%u.length],side:Ie}));f.visible=!1,this.group.add(f),this.confetti.push({mesh:f,velocity:new N,spin:new N((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)})}this.interactionPulse=new Ga(16767053),this.interactionPulse.group.position.set(-.72,1.02,-.28),this.interactionPulse.group.rotation.y=-1.94,this.interactionPulse.setActive(!0),this.group.add(this.interactionPulse.group)}celebrate(){return this.celebrationTime>=0?!1:(this.celebrationTime=0,this.flames.forEach(t=>{t.visible=!1}),this.confetti.forEach((t,e)=>{const i=e/this.confetti.length*Math.PI*2;t.mesh.visible=!0,t.mesh.position.set(0,1.75,0),t.velocity.set(Math.cos(i)*(.45+Math.random()*.8),1.4+Math.random()*1.2,Math.sin(i)*(.45+Math.random()*.8))}),!0)}updateVisibility(t){this.group.visible=t.x<4.95}update(t){this.elapsed+=t,this.interactionPulse.update(t),this.flames.forEach((e,i)=>{const s=.88+Math.sin(this.elapsed*12+i*1.7)*.13;e.scale.set(.9+s*.1,1.45+s*.3,.9+s*.1),e.position.x+=Math.sin(this.elapsed*9+i)*6e-4}),!(this.celebrationTime<0)&&(this.celebrationTime+=t,this.smoke.forEach((e,i)=>{const s=this.celebrationTime-e.offset;if(e.mesh.visible=s>0&&s<2.2,!e.mesh.visible)return;e.mesh.position.set(-.2+i%3*.2+Math.sin(s*3+i)*.08,1.88+s*.42,.08);const r=e.mesh.material;r.opacity=Math.sin(Math.min(s/2.2,1)*Math.PI)*.38,e.mesh.scale.setScalar(1+s*1.5)}),this.confetti.forEach(e=>{e.mesh.visible&&(e.velocity.y-=t*1.65,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t,e.mesh.position.y<=.05&&(e.mesh.visible=!1))}),this.celebrationTime>5.2&&(this.celebrationTime=-1,this.flames.forEach(e=>{e.visible=!0}),this.smoke.forEach(e=>{e.mesh.visible=!1}),this.confetti.forEach(e=>{e.mesh.visible=!1})))}}class fT{constructor(){this.elapsed=0,this.ringTime=0,this.group=new Zt,this.group.position.set(1.15,2.2,4.78),this.group.rotation.y=Math.PI;const t=new kt({color:14207920,metalness:.42,roughness:.36}),e=new kt({color:1513757,metalness:.55,roughness:.3}),i=new kt({color:11976901,metalness:.95,roughness:.12}),s=new kt({color:13053244,emissive:5900050,emissiveIntensity:.8}),r=new at(new ee(1.08,1.62,.34),t),o=new at(new ee(.76,.62,.04),e);o.position.set(.08,.25,.19),this.group.add(r,o);const a=document.createElement("canvas");a.width=768,a.height=256;const l=a.getContext("2d");l.fillStyle="#07160e",l.fillRect(0,0,a.width,a.height),l.textAlign="center",l.textBaseline="middle",l.font="700 48px monospace",l.fillStyle="#70ff8c",l.shadowColor="#70ff8c",l.shadowBlur=18;const c=new Jn(a);c.colorSpace=Ke;const u=new at(new Ae(.73,.25),new Se({map:c}));u.position.set(.08,.55,.225),this.group.add(u);const h=new at(new jt(.24,.24,.055,32),i);h.rotation.x=Math.PI/2,h.position.set(.08,.08,.235),this.group.add(h);for(let R=0;R<10;R++){const C=R/10*Math.PI*2,U=new at(new jt(.035,.035,.065,12),e);U.rotation.x=Math.PI/2,U.position.set(.08+Math.cos(C)*.16,.08+Math.sin(C)*.16,.27),this.group.add(U)}const f=new at(new ee(.08,.25,.035),s);f.position.set(.36,-.42,.205),this.group.add(f),this.handset=new Zt;const m=new at(new jt(.075,.075,.83,14),e),g=new Je(.15,16,10),_=new at(g,e),p=new at(g,e);_.position.y=.42,p.position.y=-.42,this.handset.add(m,_,p),this.handset.position.set(-.43,0,.31),this.group.add(this.handset);const d=new at(new ys(.22,.018,8,22,Math.PI*1.55),e);d.position.set(-.32,-.72,.22),d.rotation.z=-.35,this.group.add(d);const M=new Yn(7405452,2.5,2.2,1.8);M.position.set(0,.5,.8),this.group.add(M),this.interactionPulse=new Ga(7405452),this.interactionPulse.group.position.set(.34,-.56,.24),this.interactionPulse.setActive(!0),this.group.add(this.interactionPulse.group);const y=document.createElement("canvas");y.width=1024,y.height=384;const b=y.getContext("2d");b.fillStyle="#ffffff",b.strokeStyle="#ffffff",b.lineWidth=18,b.beginPath(),b.roundRect(35,30,930,255,70),b.moveTo(250,280),b.lineTo(170,360),b.lineTo(390,282),b.closePath(),b.fill(),b.stroke(),b.fillStyle="#000000",b.textAlign="center",b.textBaseline="middle",b.font='800 82px "Trebuchet MS", sans-serif',b.fillText("Ti aspettiamo in pista!",500,157);const L=new Jn(y);L.colorSpace=Ke,this.speechBubble=new xm(new wu({map:L,transparent:!0,depthTest:!1})),this.speechBubble.position.set(.45,1.35,.45),this.speechBubble.scale.set(2.8,1.05,1),this.speechBubble.visible=!1,this.speechBubble.renderOrder=20,this.group.add(this.speechBubble)}update(t){this.elapsed+=t,this.ringTime=Math.max(0,this.ringTime-t),this.handset.rotation.z=this.ringTime>0?Math.sin(this.elapsed*46)*.055:0,this.speechBubble.visible=this.ringTime>0,this.interactionPulse.update(t)}updateVisibility(t){this.group.visible=t.z<4.78}ring(){this.ringTime=3.4}}class dT{constructor(){this.wallRecords=[],this.group=new Zt;const t=new jt(.34,.34,.035,32),e=new kt({color:592396,metalness:.48,roughness:.2}),i=new jt(.105,.105,.042,20),s=[16732058,6813672,16767053,16735022,9399295,6684533];[{position:[-3.55,3.58,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[-2.7,4.1,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[2.35,3.72,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[4.82,3.82,-1.45],rotation:[0,0,Math.PI/2],wall:"right"},{position:[4.82,4.22,-.48],rotation:[0,0,Math.PI/2],wall:"right"},{position:[4.82,3.5,.42],rotation:[0,0,Math.PI/2],wall:"right"},{position:[-3.25,2.15,4.78],rotation:[-Math.PI/2,0,0],wall:"front"},{position:[-2.35,2.5,4.78],rotation:[-Math.PI/2,0,0],wall:"front"},{position:[-1.45,2.15,4.78],rotation:[-Math.PI/2,0,0],wall:"front"}].forEach(({position:o,rotation:a,wall:l},c)=>{const u=new Zt;u.position.set(o[0],o[1],o[2]),u.rotation.set(a[0],a[1],a[2]);const h=new at(t,e),f=new at(i,new kt({color:s[c%s.length],emissive:s[c%s.length],emissiveIntensity:.45}));f.position.y=.023,u.add(h,f),this.group.add(u),this.wallRecords.push({group:u,wall:l})})}update(t){this.wallRecords.forEach(({group:e,wall:i})=>{i==="back"&&(e.visible=t.z>-4.82),i==="front"&&(e.visible=t.z<4.78),i==="right"&&(e.visible=t.x<4.82)})}}class pT{constructor(t=new Date("2026-10-30T21:30:00+01:00")){this.confettiRain=null,this.cakeConfettiRain=null,this.cakeCelebrationTime=0,this.group=new Zt;const e=10,i=5.2;this.floor=new Qw(e,e,10),this.group.add(this.floor.mesh),this.ceiling=new tT(e,e,i),this.group.add(this.ceiling.mesh),this.walls=new eT(e,i,e),this.group.add(this.walls.group),this.countdownBoard=new nT(t),this.group.add(this.countdownBoard.group),this.djConsole=new iT,this.group.add(this.djConsole.group),this.robotDJ=new rT,this.djConsole.group.add(this.robotDJ.group),this.movingLightRig=new oT,this.group.add(this.movingLightRig.group),this.bar=new lT,this.group.add(this.bar.group),this.loungeSet=new cT,this.group.add(this.loungeSet.group),this.tallPlant=new uT,this.group.add(this.tallPlant.group),this.birthdayCake=new hT,this.group.add(this.birthdayCake.group),this.payphone=new fT,this.group.add(this.payphone.group),this.vinylWall=new dT,this.group.add(this.vinylWall.group),this.djSign=new sT,this.group.add(this.djSign.group)}startConfetti(){this.confettiRain||(this.confettiRain=new Zf,this.group.add(this.confettiRain.group))}celebrateCake(){this.birthdayCake.celebrate()&&(this.cakeConfettiRain=new Zf,this.cakeCelebrationTime=5.2,this.group.add(this.cakeConfettiRain.group))}updateWallVisibility(t){this.vinylWall.update(t),this.payphone.updateVisibility(t),this.countdownBoard.updateVisibility(t),this.djSign.updateVisibility(t),this.birthdayCake.updateVisibility(t),this.tallPlant.updateVisibility(t)}update(t){this.floor&&this.floor.update(t),this.countdownBoard?.group.visible&&this.countdownBoard.update(),this.robotDJ&&this.robotDJ.update(t),this.djConsole&&this.djConsole.update(t),this.movingLightRig&&this.movingLightRig.update(t),this.bar&&this.bar.update(t),this.loungeSet&&this.loungeSet.update(t),this.birthdayCake?.group.visible&&this.birthdayCake.update(t),this.payphone?.group.visible&&this.payphone.update(t),this.confettiRain&&this.confettiRain.update(),this.cakeConfettiRain&&(this.cakeConfettiRain.update(),this.cakeCelebrationTime-=t,this.cakeCelebrationTime<=0&&(this.group.remove(this.cakeConfettiRain.group),this.cakeConfettiRain=null))}}class mT{constructor(){this.wallSpots=[],this.spotTransform=new De,this.spotElapsed=0,this.isMobile=window.matchMedia("(max-width: 768px)").matches,this.group=new Zt,this.reflectionInterval=this.isMobile?.5:.25,this.reflectionElapsed=this.reflectionInterval,this.spotUpdateInterval=this.isMobile?1/30:0,this.cubeRenderTarget=new hm(this.isMobile?64:128,{generateMipmaps:!1,minFilter:Xe}),this.cubeCamera=new cm(.1,50,this.cubeRenderTarget);const t=.68,e=new Je(t,this.isMobile?48:96,this.isMobile?24:48),i=new kt({color:16777215,metalness:1,roughness:0,flatShading:!0,envMap:this.cubeRenderTarget.texture,envMapIntensity:4.5});this.ballMesh=new at(e,i),this.ballMesh.castShadow=!0;const s=new jt(.008,.008,1.15),r=new kt({color:7829367,metalness:.8}),o=new at(s,r);o.position.y=.575,this.group.add(this.ballMesh,o,this.cubeCamera);const a=document.createElement("canvas");a.width=128,a.height=128;const l=a.getContext("2d"),c=l.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255, 230, 255, 0.55)"),c.addColorStop(.3,"rgba(220, 180, 255, 0.3)"),c.addColorStop(.65,"rgba(180, 140, 255, 0.1)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),l.fillStyle=c,l.fillRect(0,0,128,128);const u=new Jn(a),h=new Ae(.42,.42),f=new Se({map:u,transparent:!0,blending:or,depthWrite:!1,opacity:.48}),m=[-1.45,-1.2,-1,-.82,-.64,-.48,-.32,-.16,.16,.34,.54,.76],g=32;this.wallSpotMesh=new ym(h,f,m.length*g),this.wallSpotMesh.instanceMatrix.setUsage(tm),this.wallSpotMesh.frustumCulled=!1,this.group.add(this.wallSpotMesh),m.forEach((_,p)=>{for(let d=0;d<g;d++){const M=p%2===0?0:Math.PI/g;this.wallSpots.push({angle:d/g*Math.PI*2+M,heightRatio:_,scale:.82+p%3*.08})}}),this.group.position.set(0,4.05,-2.8)}update(t,e,i){this.reflectionElapsed+=t,e&&i&&this.reflectionElapsed>=this.reflectionInterval&&(this.ballMesh.visible=!1,this.cubeCamera.update(e,i),this.ballMesh.visible=!0,this.reflectionElapsed=0);const s=.3;if(this.ballMesh.rotation.y+=t*s,this.spotElapsed+=t,this.spotElapsed<this.spotUpdateInterval)return;const r=this.spotElapsed;this.spotElapsed=0;const o=4.85,a=-3.95,l=.75;this.wallSpots.forEach((c,u)=>{c.angle+=r*s;const h=Math.sin(c.angle),f=Math.cos(c.angle),m=c.heightRatio;let g=10;if(Math.abs(h)>.001){const y=(h>0?o:-o)/h;y>0&&(g=Math.min(g,y))}if(Math.abs(f)>.001){const y=(f<0?-2.15:7.65)/f;y>0&&(g=Math.min(g,y))}if(Math.abs(m)>.001){const y=(m>0?l:a)/m;y>0&&(g=Math.min(g,y))}const _=h*g,p=m*g,d=f*g;this.spotTransform.position.set(_,p,d),this.spotTransform.scale.setScalar(c.scale),Math.abs(_-o)<.05?this.spotTransform.rotation.set(0,-Math.PI/2,0):Math.abs(_+o)<.05?this.spotTransform.rotation.set(0,Math.PI/2,0):Math.abs(p-l)<.05?this.spotTransform.rotation.set(Math.PI/2,0,0):Math.abs(p-a)<.05?this.spotTransform.rotation.set(-Math.PI/2,0,0):this.spotTransform.rotation.set(0,0,0),this.spotTransform.updateMatrix(),this.wallSpotMesh.setMatrixAt(u,this.spotTransform.matrix)}),this.wallSpotMesh.instanceMatrix.needsUpdate=!0}}class gT{constructor(){this.cornerLights=[],this.paletteIndex=0,this.group=new Zt;const t=new Xw(3478616,2.8);this.cameraSpotLight=new Sm(16777215,22),this.cameraSpotLight.position.set(0,2.4,4.9),this.cameraSpotLight.target.position.set(0,3.6,-2.8),this.cameraSpotLight.angle=Math.PI/7,this.cameraSpotLight.penumbra=.5,this.cameraSpotLight.castShadow=window.innerWidth>768;const e=new Yn(55807,18,16,1.2);e.position.set(-4.2,3,-4.2);const i=new Yn(16711816,20,16,1.2);i.position.set(4.2,3,-4.2);const s=new Yn(10289407,18,16,1.2);s.position.set(-4.2,3,3.5);const r=new Yn(16711748,18,16,1.2);r.position.set(4.2,3,3.5),this.cornerLights=[e,i,s,r];const o=new Yn(11862271,15,14);o.position.set(0,2.2,0),this.group.add(t,this.cameraSpotLight,this.cameraSpotLight.target,e,i,s,r,o)}cyclePalette(){const t=[[55807,16711816,10289407,16711748],[16767037,16735022,6684533,55807],[6813672,3501567,16732058,16777215],[12123970,16722047,16767053,9399295]];this.paletteIndex=(this.paletteIndex+1)%t.length,this.cornerLights.forEach((e,i)=>e.color.setHex(t[this.paletteIndex][i]))}}class _T{constructor(t){this.reqId=0,this.music=null,this.musicVolume=.4,this.scratchResetTimer=null,this.volumeFadeId=null,this.musicStateListener=null,this.running=!0,this.handleVisibilityChange=()=>{if(document.hidden){this.running=!1,cancelAnimationFrame(this.reqId);return}this.running||(this.running=!0,this.clock.getDelta(),this.loop())},this.loop=()=>{const e=this.clock.getDelta();this.discoBall.update(e,this.renderer.instance,this.scene.instance),this.camera.update(),this.room.update(e),this.room.updateWallVisibility(this.camera.instance.position),this.renderer.render(this.scene.instance,this.camera.instance),this.reqId=requestAnimationFrame(this.loop)},this.clock=new bm,this.sizes=new jw(t),this.scene=new Yw,this.camera=new Zw(this.sizes,t),this.renderer=new Jw(this.sizes,t),this.room=new pT,this.camera.setNavigationRoot(this.room.group),this.camera.addInteraction(this.room.robotDJ.group,()=>this.room.robotDJ.performDance()),this.room.djConsole.turntables.forEach(e=>{this.camera.addInteraction(e,()=>this.scratch())}),this.camera.addInteraction(this.room.bar.bartender.servedDrink,()=>this.room.bar.bartender.activateDrink()),this.camera.addInteraction(this.room.payphone.group,()=>this.room.payphone.ring()),this.camera.addInteraction(this.room.djConsole.group,()=>this.room.robotDJ.performDance()),this.camera.addInteraction(this.room.bar.group,()=>this.room.bar.throwShaker()),this.camera.addInteraction(this.room.birthdayCake.group,()=>this.room.celebrateCake()),this.discoBall=new mT,this.lighting=new gT,this.scene.instance.add(this.room.group,this.discoBall.group,this.lighting.group),this.sizes.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.loop()}triggerConfetti(){this.room&&this.room.startConfetti()}async startMusicWithFade(){this.volumeFadeId!==null&&cancelAnimationFrame(this.volumeFadeId);const t=this.getMusic();t.volume=0;try{await t.play(),this.setMusicVisuals(!0);const e=performance.now(),i=s=>{const r=Math.min((s-e)/2e3,1);t.volume=r*this.musicVolume,r<1?this.volumeFadeId=requestAnimationFrame(i):this.volumeFadeId=null};this.volumeFadeId=requestAnimationFrame(i)}catch{this.setMusicVisuals(!1)}}toggleMusic(){const t=this.getMusic();if(t.paused){t.play().then(()=>this.setMusicVisuals(!0)).catch(()=>this.setMusicVisuals(!1));return}t.pause(),this.setMusicVisuals(!1)}setMusicVolume(t){this.volumeFadeId!==null&&(cancelAnimationFrame(this.volumeFadeId),this.volumeFadeId=null),this.musicVolume=Math.min(Math.max(t,0),1),this.music&&(this.music.volume=this.musicVolume)}onMusicStateChange(t){this.musicStateListener=t}setMusicVisuals(t){this.room.djConsole.setPlaying(t),this.room.robotDJ.setPlaying(t),this.musicStateListener?.(t)}getMusic(){return this.music||(this.music=new Audio("/music/bacio-che-schiocca.mp3"),this.music.loop=!0,this.music.volume=this.musicVolume),this.music}scratch(){this.room.djConsole.scratch(),this.room.movingLightRig.boost(),this.music&&!this.music.paused&&(this.music.playbackRate=1.35),this.scratchResetTimer!==null&&window.clearTimeout(this.scratchResetTimer),this.scratchResetTimer=window.setTimeout(()=>{this.music&&(this.music.playbackRate=1),this.scratchResetTimer=null},1100)}resize(){this.camera.resize(),this.renderer.resize()}destroy(){this.running=!1,cancelAnimationFrame(this.reqId),document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.camera.destroy(),this.sizes.destroy(),this.music?.pause(),this.music&&(this.music.src=""),this.volumeFadeId!==null&&cancelAnimationFrame(this.volumeFadeId),this.scratchResetTimer!==null&&window.clearTimeout(this.scratchResetTimer),this.renderer.instance.dispose(),this.renderer.instance.domElement.remove()}}const vT={key:0,class:"welcome-screen","aria-labelledby":"welcome-title"},xT=["title","aria-label"],yT={class:"material-symbols-rounded"},MT={class:"volume-control"},ST={class:"material-symbols-rounded","aria-hidden":"true"},bT={class:"drawer-content"},ET={class:"drawer-body"},wT={key:0},TT={key:1,class:"form-section"},AT={key:0,class:"status-panel success-section"},RT={key:1,class:"add-person-hint"},CT={class:"input-group"},PT={class:"input-group"},LT={class:"input-group"},IT={key:0,class:"error-message"},DT=["disabled"],UT={key:2},NT={class:"section-heading"},OT={class:"panel-title"},FT={class:"subtitle"},BT=["aria-valuenow"],zT={class:"guest-capacity-label"},kT={class:"guest-capacity-track","aria-hidden":"true"},HT={class:"guest-filters"},VT={class:"filter-field search-field"},GT={key:0,class:"state-filter",role:"group","aria-label":"Filtra per stato"},WT=["title","aria-label","aria-pressed","onClick"],XT={class:"material-symbols-rounded"},qT={key:0,class:"empty-state"},jT={key:1,class:"empty-state"},YT={key:2,class:"guest-list"},$T=["title"],KT={class:"guest-details"},ZT={key:0},JT=["aria-label"],QT=["disabled","title","aria-label","onClick"],t1={key:0,class:"status-loader","aria-hidden":"true"},e1={key:1,class:"material-symbols-rounded"},n1={key:3,class:"reserved-section"},i1={class:"input-group"},s1={class:"input-group"},r1={key:0,class:"error-message"},o1=["disabled"],a1={class:"bottom-nav","aria-label":"Navigazione pannello"},l1=["title","aria-label","onClick"],c1={class:"material-symbols-rounded"},Vl=300,u1=Ag({__name:"RoomScene",setup(n){const t=me(null);let e=null;const i=me(!0),s=me(!1),r=me(!1),o=me(!1),a=me(50),l=me(!1),c=me("info"),u=me(!1),h=me(""),f=me(""),m=me(""),g=me(""),_=me(""),p=me(!1),d=me(!1),M=me([]),y=me(!1),b=me(""),L=me(""),R=me(""),C=me(!1),U=me(null),w=me(null),E=me(""),P=me("all");let D=null;const G=[{id:"info",icon:"info",label:"Info"},{id:"register",icon:"person_add",label:"Registrati"},{id:"guests",icon:"groups",label:"Lista invitati"},{id:"reserved",icon:"lock",label:"Area riservata"}],Z=[{value:0,label:"In attesa",icon:"hourglass_top"},{value:1,label:"Confermato",icon:"check_circle"},{value:2,label:"Rifiutato",icon:"cancel"}],rt=Z.filter(H=>H.value!==0),$=H=>rt.filter(I=>H===0||I.value!==H),it=[{value:"all",label:"Tutti gli stati",icon:"groups"},{value:"0",label:"In attesa",icon:"hourglass_top"},{value:"1",label:"Confermati",icon:"check_circle"},{value:"2",label:"Rifiutati",icon:"cancel"}],j=H=>Z.find(I=>I.value===H)?.label??"Confermato",vt=Zo(()=>M.value.filter(H=>(H.approved??1)===1).length),xt=Zo(()=>Math.min(vt.value/Vl*100,100)),pt=Zo(()=>{const H=E.value.toLocaleLowerCase("it");return M.value.filter(I=>{const k=`${I.nome} ${I.cognome}`.toLocaleLowerCase("it"),T=!H||k.includes(H),x=!y.value||P.value==="all"||I.approved===Number(P.value);return T&&x}).sort((I,k)=>y.value&&I.approved!==k.approved?(I.approved??0)-(k.approved??0):`${I.nome} ${I.cognome}`.localeCompare(`${k.nome} ${k.cognome}`,"it"))}),Lt=()=>{l.value=!0},qt=()=>{D!==null&&window.clearTimeout(D),D=window.setTimeout(()=>{o.value=!0,D=null},5e3)},ot=()=>{o.value=!1,qt()},dt=()=>{i.value=!1,s.value=!0,qt(),e?.startMusicWithFade()},ut=()=>{e?.toggleMusic()},_t=()=>{e?.setMusicVolume(a.value/100)},Nt=()=>{l.value=!1,setTimeout(()=>{c.value="info",u.value=!1},300)},Ft=async()=>{d.value=!0;try{const H=y.value?"/area-riservata/invitati":"/invitati",I=await he.get(H);M.value=I.data}catch(H){he.isAxiosError(H)&&H.response?.status===401&&(y.value=!1,c.value="reserved")}finally{d.value=!1}},Bt=H=>{const I=document.querySelector('meta[name="csrf-token"]');I&&(I.content=H)},Qt=async H=>{if(H==="reserved"){const I=await he.get("/area-riservata/status");if(y.value=I.data.authenticated,Bt(I.data.csrf_token),y.value){c.value="guests",await Ft();return}}c.value=H,H==="guests"&&await Ft()},v=()=>{const H=document.querySelector('meta[name="csrf-token"]')?.content;return H?{"X-CSRF-TOKEN":H}:{}},O=async()=>{if(!(!f.value||!m.value||!g.value)){p.value=!0,_.value="";try{await he.post("/invitati",{nome:f.value,cognome:m.value,invitato_da:g.value},{headers:v()}),e?.triggerConfetti(),h.value=f.value,u.value=!0,f.value="",m.value="",g.value=""}catch{_.value="Non è stato possibile inviare la richiesta. Riprova."}finally{p.value=!1}}},q=async()=>{C.value=!0,R.value="";try{const H=await he.post("/area-riservata/login",{email:b.value,password:L.value},{headers:v()});Bt(H.data.csrf_token),y.value=!0,L.value="",e?.triggerConfetti(),c.value="guests",await Ft()}catch{R.value="Email o password non corrette."}finally{C.value=!1}},nt=async()=>{const H=await he.post("/area-riservata/logout",{},{headers:v()});Bt(H.data.csrf_token),y.value=!1,M.value=[],E.value="",P.value="all",c.value="reserved"},F=async(H,I)=>{if(H.approved!==I){U.value=H.id,w.value=I===0?null:I;try{const k=await he.patch(`/area-riservata/invitati/${H.id}`,{approved:I},{headers:v()});Object.assign(H,k.data)}finally{U.value=null,w.value=null}}};return tu(()=>{t.value&&(e=new _T(t.value),e.onMusicStateChange(H=>{r.value=H}))}),eu(()=>{D!==null&&window.clearTimeout(D),e?.destroy()}),(H,I)=>(ue(),ge("div",null,[gt("div",{ref_key:"canvasContainer",ref:t,class:"room-container"},null,512),ln(P0,{name:"welcome"},{default:Rd(()=>[i.value?(ue(),ge("section",vT,[gt("div",{class:"welcome-content"},[I[10]||(I[10]=gt("p",{class:"welcome-eyebrow"},"'66 CELEBRATION",-1)),I[11]||(I[11]=gt("h1",{id:"welcome-title"},[Ur("UN INVITO"),gt("br"),Ur("PER TE")],-1)),I[12]||(I[12]=gt("div",{class:"explore-globe","aria-hidden":"true"},[gt("span",{class:"globe-ring globe-ring-horizontal"}),gt("span",{class:"globe-ring globe-ring-vertical"}),gt("span",{class:"globe-core material-symbols-rounded"},"open_with")],-1)),I[13]||(I[13]=gt("p",{class:"welcome-hint"},"Entra ed interagisci con gli oggetti",-1)),gt("button",{type:"button",class:"welcome-button",onClick:dt},[...I[9]||(I[9]=[Ur(" Entra nella festa ",-1),gt("span",{class:"material-symbols-rounded"},"arrow_forward",-1)])])])])):Un("",!0)]),_:1}),s.value?(ue(),ge("aside",{key:0,class:ci(["music-player",{minimized:o.value}]),"aria-label":"Controlli musica",onPointerdownCapture:ot,onFocusin:ot},[I[14]||(I[14]=gt("a",{class:"album-link",href:"https://open.spotify.com/intl-it/track/2C1cH4RmDkUBuFGVZN8T10?si=ef9c2b271c124b8d",target:"_blank",rel:"noopener noreferrer",title:"Apri Bacio che schiocca su Spotify","aria-label":"Apri Bacio che schiocca su Spotify"},[gt("img",{src:"/images/bacio_che_schiocca.webp",alt:"Copertina di Bacio che schiocca",decoding:"async"}),gt("img",{class:"spotify-badge",src:"/images/spotify.webp",alt:"","aria-hidden":"true",decoding:"async"})],-1)),I[15]||(I[15]=gt("div",{class:"track-info"},[gt("strong",null,"Bacio che schiocca"),gt("span",null,"Marco Rossi")],-1)),gt("button",{type:"button",class:"player-control",title:r.value?"Pausa":"Riproduci","aria-label":r.value?"Metti in pausa":"Riproduci",onClick:ut},[gt("span",yT,Le(r.value?"pause":"play_arrow"),1)],8,xT),gt("label",MT,[gt("span",ST,Le(a.value===0?"volume_off":"volume_up"),1),Hi(gt("input",{"onUpdate:modelValue":I[0]||(I[0]=k=>a.value=k),type:"range",min:"0",max:"100",step:"1","aria-label":"Volume musica",style:Zs({"--volume-level":`${a.value}%`}),onInput:_t},null,36),[[qi,a.value,void 0,{number:!0}]]),gt("output",null,Le(a.value)+"%",1)])],34)):Un("",!0),gt("button",{id:"info-btn",class:"party-btn",onClick:Lt,style:Zs({opacity:l.value?"0":"1",pointerEvents:l.value?"none":"auto"})}," INFO FESTA ",4),gt("section",{id:"info-drawer",class:ci(["drawer",{open:l.value}]),"aria-label":"Dettagli festa"},[gt("div",bT,[gt("button",{id:"close-btn",class:"icon-button close-btn",title:"Chiudi","aria-label":"Chiudi",onClick:Nt},[...I[16]||(I[16]=[gt("span",{class:"material-symbols-rounded"},"close",-1)])]),gt("div",ET,[c.value==="info"?(ue(),ge("div",wT,[I[17]||(I[17]=d0('<p class="eyebrow" style="font-size:1.2rem;margin:0;" data-v-05f89685>&#39;66 CELEBRATION</p><h2 class="panel-title" data-v-05f89685>INGRESSO LIBERO</h2><p class="subtitle" style="font-size:1.2rem;margin-top:0;" data-v-05f89685>Massimo 300 ingressi</p><div class="info-grid" data-v-05f89685><div class="info-item" data-v-05f89685><span class="material-symbols-rounded" data-v-05f89685>calendar_month</span><div data-v-05f89685><small data-v-05f89685>DATA E ORA</small><strong data-v-05f89685>30 ottobre 2026 · 21:30</strong></div></div><div class="info-item" data-v-05f89685><span class="material-symbols-rounded" data-v-05f89685>location_on</span><div data-v-05f89685><small data-v-05f89685>LUOGO</small><strong data-v-05f89685>TOTEM · Via Vecchia Ferriera, 135, Vicenza</strong></div></div></div>',4)),gt("button",{class:"primary-button",onClick:I[1]||(I[1]=k=>Qt("register"))},"Conferma la presenza")])):c.value==="register"?(ue(),ge("div",TT,[I[24]||(I[24]=gt("p",{class:"eyebrow"},"REGISTRAZIONE",-1)),I[25]||(I[25]=gt("h2",{class:"panel-title"},"Lascia i tuoi dati",-1)),I[26]||(I[26]=gt("p",{class:"subtitle"},"la presenza sarà confermata dall'organizzatore.",-1)),u.value?(ue(),ge("div",AT,[I[18]||(I[18]=gt("span",{class:"material-symbols-rounded"},"check_circle",-1)),I[19]||(I[19]=gt("strong",null,"Richiesta inviata",-1)),gt("p",null,"Registrazione avvenuta con successo. Ci vediamo in pista, "+Le(h.value)+".",1)])):Un("",!0),u.value?(ue(),ge("p",RT,"Aggiungi un altra persona")):Un("",!0),gt("form",{onSubmit:vh(O,["prevent"])},[gt("label",CT,[I[20]||(I[20]=gt("span",null,"Nome",-1)),Hi(gt("input",{"onUpdate:modelValue":I[2]||(I[2]=k=>f.value=k),maxlength:"50",autocomplete:"given-name",required:"",class:"input-field"},null,512),[[qi,f.value,void 0,{trim:!0}]])]),gt("label",PT,[I[21]||(I[21]=gt("span",null,"Cognome",-1)),Hi(gt("input",{"onUpdate:modelValue":I[3]||(I[3]=k=>m.value=k),maxlength:"50",autocomplete:"family-name",required:"",class:"input-field"},null,512),[[qi,m.value,void 0,{trim:!0}]])]),gt("label",LT,[I[22]||(I[22]=gt("span",null,"Invitato da",-1)),Hi(gt("input",{"onUpdate:modelValue":I[4]||(I[4]=k=>g.value=k),maxlength:"100",required:"",class:"input-field"},null,512),[[qi,g.value,void 0,{trim:!0}]])]),_.value?(ue(),ge("p",IT,Le(_.value),1)):Un("",!0),gt("button",{class:"primary-button",type:"submit",disabled:p.value},Le(p.value?"Invio in corso...":"Invia richiesta"),9,DT)],32),gt("button",{class:"guest-list-button",type:"button",onClick:I[5]||(I[5]=k=>Qt("guests"))},[...I[23]||(I[23]=[gt("span",{class:"material-symbols-rounded"},"groups",-1),Ur(" Lista invitati ",-1)])])])):c.value==="guests"?(ue(),ge("div",UT,[I[30]||(I[30]=gt("p",{class:"eyebrow"},"GUEST LIST",-1)),gt("div",NT,[gt("div",null,[gt("h2",OT,Le(y.value?"Gestione invitati":"Lista invitati"),1),gt("p",FT,Le(y.value?"Controlla e aggiorna tutte le richieste.":"Le presenze già confermate."),1),gt("div",{class:"guest-capacity",role:"progressbar","aria-valuemin":"0","aria-valuenow":vt.value,"aria-valuemax":Vl},[gt("div",zT,[I[27]||(I[27]=gt("span",null,"Approvati",-1)),gt("strong",null,Le(vt.value)+" / "+Le(Vl),1)]),gt("span",kT,[gt("span",{style:Zs({width:`${xt.value}%`})},null,4)])],8,BT)]),y.value?(ue(),ge("button",{key:0,class:"icon-button logout-button",title:"Esci","aria-label":"Esci",onClick:nt},[...I[28]||(I[28]=[gt("span",{class:"material-symbols-rounded"},"logout",-1)])])):Un("",!0)]),gt("div",HT,[gt("label",VT,[I[29]||(I[29]=gt("span",{class:"material-symbols-rounded"},"search",-1)),Hi(gt("input",{"onUpdate:modelValue":I[6]||(I[6]=k=>E.value=k),type:"search",placeholder:"Cerca nome o cognome","aria-label":"Cerca invitato"},null,512),[[qi,E.value,void 0,{trim:!0}]])]),y.value?(ue(),ge("div",GT,[(ue(),ge(hn,null,vo(it,k=>gt("button",{key:k.value,type:"button",class:ci(["state-filter-button",[{active:P.value===k.value},`filter-${k.value}`]]),title:k.label,"aria-label":k.label,"aria-pressed":P.value===k.value,onClick:T=>P.value=k.value},[gt("span",XT,Le(k.icon),1)],10,WT)),64))])):Un("",!0)]),d.value?(ue(),ge("div",qT,"Caricamento...")):pt.value.length===0?(ue(),ge("div",jT,Le(M.value.length>0?"Nessun invitato corrisponde ai filtri.":y.value?"Non ci sono ancora richieste.":"Nessun invitato ancora confermato."),1)):(ue(),ge("ul",YT,[(ue(!0),ge(hn,null,vo(pt.value,k=>(ue(),ge("li",{key:k.id},[gt("span",{class:ci(["material-symbols-rounded guest-status-icon",`guest-status-${k.approved??1}`]),title:j(k.approved??1)},"person",10,$T),gt("div",KT,[gt("strong",null,Le(k.nome)+" "+Le(k.cognome),1),y.value?(ue(),ge("small",ZT,"Invitato da "+Le(k.invitato_da),1)):Un("",!0)]),y.value?(ue(),ge("div",{key:0,class:"status-control",role:"group","aria-label":`Stato invito di ${k.nome} ${k.cognome}`},[(ue(!0),ge(hn,null,vo($(k.approved),T=>(ue(),ge("button",{key:T.value,type:"button",class:ci(["status-button",`status-${T.value}`]),disabled:U.value===k.id,title:T.label,"aria-label":`${T.label}: ${k.nome} ${k.cognome}`,onClick:x=>F(k,T.value)},[U.value===k.id&&w.value===T.value?(ue(),ge("span",t1)):(ue(),ge("span",e1,Le(T.icon),1))],10,QT))),128))],8,JT)):Un("",!0)]))),128))]))])):(ue(),ge("div",n1,[I[33]||(I[33]=gt("span",{class:"material-symbols-rounded lock-icon"},"admin_panel_settings",-1)),I[34]||(I[34]=gt("p",{class:"eyebrow"},"AREA RISERVATA",-1)),I[35]||(I[35]=gt("p",{class:"subtitle"},"Accedi per gestire le richieste degli invitati.",-1)),gt("form",{class:"login-form",onSubmit:vh(q,["prevent"])},[gt("label",i1,[I[31]||(I[31]=gt("span",null,"Email",-1)),Hi(gt("input",{"onUpdate:modelValue":I[7]||(I[7]=k=>b.value=k),type:"email",autocomplete:"username",required:"",class:"input-field"},null,512),[[qi,b.value,void 0,{trim:!0}]])]),gt("label",s1,[I[32]||(I[32]=gt("span",null,"Password",-1)),Hi(gt("input",{"onUpdate:modelValue":I[8]||(I[8]=k=>L.value=k),type:"password",autocomplete:"current-password",required:"",class:"input-field"},null,512),[[qi,L.value]])]),R.value?(ue(),ge("p",r1,Le(R.value),1)):Un("",!0),gt("button",{class:"primary-button",type:"submit",disabled:C.value},Le(C.value?"Accesso...":"Accedi"),9,o1)],32)]))]),gt("nav",a1,[(ue(),ge(hn,null,vo(G,k=>gt("button",{key:k.id,class:ci(["nav-button",{active:c.value===k.id}]),title:k.label,"aria-label":k.label,onClick:T=>Qt(k.id)},[gt("span",c1,Le(k.icon),1)],10,l1)),64))])])],2)]))}}),h1=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},f1=h1(u1,[["__scopeId","data-v-05f89685"]]),d1={__name:"App",setup(n){return(t,e)=>(ue(),rp(f1))}};window.axios=he;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const p1=s_(d1);p1.mount("#app");
