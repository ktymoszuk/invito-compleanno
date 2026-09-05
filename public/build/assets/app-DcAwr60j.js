function Wc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ge={},Zs=[],Jn=()=>{},ed=()=>!1,Ra=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ca=n=>n.startsWith("onUpdate:"),Oe=Object.assign,Xc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Im=Object.prototype.hasOwnProperty,he=(n,t)=>Im.call(n,t),Bt=Array.isArray,Js=n=>oo(n)==="[object Map]",Pa=n=>oo(n)==="[object Set]",Bu=n=>oo(n)==="[object Date]",Kt=n=>typeof n=="function",Te=n=>typeof n=="string",Qn=n=>typeof n=="symbol",de=n=>n!==null&&typeof n=="object",nd=n=>(de(n)||Kt(n))&&Kt(n.then)&&Kt(n.catch),id=Object.prototype.toString,oo=n=>id.call(n),Dm=n=>oo(n).slice(8,-1),sd=n=>oo(n)==="[object Object]",qc=n=>Te(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Um=/-\w/g,kn=La(n=>n.replace(Um,t=>t.slice(1).toUpperCase())),Nm=/\B([A-Z])/g,xs=La(n=>n.replace(Nm,"-$1").toLowerCase()),rd=La(n=>n.charAt(0).toUpperCase()+n.slice(1)),Za=La(n=>n?`on${rd(n)}`:""),$n=(n,t)=>!Object.is(n,t),Ko=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},od=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},jc=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Om=n=>{const t=Te(n)?Number(n):NaN;return isNaN(t)?n:t};let zu;const Ia=()=>zu||(zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qs(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Te(i)?km(i):Qs(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Te(n)||de(n))return n}const Fm=/;(?![^(]*\))/g,Bm=/:([^]+)/,zm=/\/\*[^]*?\*\//g;function km(n){const t={};return n.replace(zm,"").split(Fm).forEach(e=>{if(e){const i=e.split(Bm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function fi(n){let t="";if(Te(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=fi(n[e]);i&&(t+=i+" ")}else if(de(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Hm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vm=Wc(Hm);function ad(n){return!!n||n===""}function Gm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=ao(n[i],t[i]);return e}function ao(n,t){if(n===t)return!0;let e=Bu(n),i=Bu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Qn(n),i=Qn(t),e||i)return n===t;if(e=Bt(n),i=Bt(t),e||i)return e&&i?Gm(n,t):!1;if(e=de(n),i=de(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!ao(n[o],t[o]))return!1}}return String(n)===String(t)}function ld(n,t){return n.findIndex(e=>ao(e,t))}const cd=n=>!!(n&&n.__v_isRef===!0),ye=n=>Te(n)?n:n==null?"":Bt(n)||de(n)&&(n.toString===id||!Kt(n.toString))?cd(n)?ye(n.value):JSON.stringify(n,ud,2):String(n),ud=(n,t)=>cd(t)?ud(n,t.value):Js(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ja(i,r)+" =>"]=s,e),{})}:Pa(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ja(e))}:Qn(t)?Ja(t):de(t)&&!Bt(t)&&!sd(t)?String(t):t,Ja=(n,t="")=>{var e;return Qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};let Ve;class Wm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ve&&(Ve.active?(this.parent=Ve,this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){if(this._on>0&&--this._on===0){if(Ve===this)Ve=this.prevScope;else{let t=Ve;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xm(){return Ve}let xe;const Qa=new WeakSet;class hd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&(Ve.active?Ve.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qa.has(this)&&(Qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ku(this),pd(this);const t=xe,e=Hn;xe=this,Hn=!0;try{return this.fn()}finally{md(this),xe=t,Hn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kc(t);this.deps=this.depsTail=void 0,ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let fd=0,Hr,Vr;function dd(n,t=!1){if(n.flags|=8,t){n.next=Vr,Vr=n;return}n.next=Hr,Hr=n}function Yc(){fd++}function $c(){if(--fd>0)return;if(Vr){let t=Vr;for(Vr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Hr;){let t=Hr;for(Hr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function pd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function md(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Kc(i),qm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function jl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(gd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function gd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Yr)||(n.globalVersion=Yr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!jl(n))))return;n.flags|=2;const t=n.dep,e=xe,i=Hn;xe=n,Hn=!0;try{pd(n);const s=n.fn(n._value);(t.version===0||$n(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{xe=e,Hn=i,md(n),n.flags&=-3}}function Kc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Kc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function qm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Hn=!0;const _d=[];function xi(){_d.push(Hn),Hn=!1}function yi(){const n=_d.pop();Hn=n===void 0?!0:n}function ku(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=xe;xe=void 0;try{t()}finally{xe=e}}}let Yr=0;class jm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xe||!Hn||xe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==xe)e=this.activeLink=new jm(xe,this),xe.deps?(e.prevDep=xe.depsTail,xe.depsTail.nextDep=e,xe.depsTail=e):xe.deps=xe.depsTail=e,vd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=xe.depsTail,e.nextDep=void 0,xe.depsTail.nextDep=e,xe.depsTail=e,xe.deps===e&&(xe.deps=i)}return e}trigger(t){this.version++,Yr++,this.notify(t)}notify(t){Yc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{$c()}}}function vd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)vd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Yl=new WeakMap,cs=Symbol(""),$l=Symbol(""),$r=Symbol("");function Qe(n,t,e){if(Hn&&xe){let i=Yl.get(n);i||Yl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Zc),s.map=i,s.key=e),s.track()}}function mi(n,t,e,i,s,r){const o=Yl.get(n);if(!o){Yr++;return}const a=l=>{l&&l.trigger()};if(Yc(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&qc(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===$r||!Qn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get($r)),t){case"add":l?c&&a(o.get("length")):(a(o.get(cs)),Js(n)&&a(o.get($l)));break;case"delete":l||(a(o.get(cs)),Js(n)&&a(o.get($l)));break;case"set":Js(n)&&a(o.get(cs));break}}$c()}function Es(n){const t=oe(n);return t===n?t:(Qe(t,"iterate",$r),Rn(n)?t:t.map(Vn))}function Da(n){return Qe(n=oe(n),"iterate",$r),n}function qn(n,t){return Mi(n)?ar(us(n)?Vn(t):t):Vn(t)}const Ym={__proto__:null,[Symbol.iterator](){return tl(this,Symbol.iterator,n=>qn(this,n))},concat(...n){return Es(this).concat(...n.map(t=>Bt(t)?Es(t):t))},entries(){return tl(this,"entries",n=>(n[1]=qn(this,n[1]),n))},every(n,t){return ni(this,"every",n,t,void 0,arguments)},filter(n,t){return ni(this,"filter",n,t,e=>e.map(i=>qn(this,i)),arguments)},find(n,t){return ni(this,"find",n,t,e=>qn(this,e),arguments)},findIndex(n,t){return ni(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ni(this,"findLast",n,t,e=>qn(this,e),arguments)},findLastIndex(n,t){return ni(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ni(this,"forEach",n,t,void 0,arguments)},includes(...n){return el(this,"includes",n)},indexOf(...n){return el(this,"indexOf",n)},join(n){return Es(this).join(n)},lastIndexOf(...n){return el(this,"lastIndexOf",n)},map(n,t){return ni(this,"map",n,t,void 0,arguments)},pop(){return Mr(this,"pop")},push(...n){return Mr(this,"push",n)},reduce(n,...t){return Hu(this,"reduce",n,t)},reduceRight(n,...t){return Hu(this,"reduceRight",n,t)},shift(){return Mr(this,"shift")},some(n,t){return ni(this,"some",n,t,void 0,arguments)},splice(...n){return Mr(this,"splice",n)},toReversed(){return Es(this).toReversed()},toSorted(n){return Es(this).toSorted(n)},toSpliced(...n){return Es(this).toSpliced(...n)},unshift(...n){return Mr(this,"unshift",n)},values(){return tl(this,"values",n=>qn(this,n))}};function tl(n,t,e){const i=Da(n),s=i[t]();return i!==n&&!Rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const $m=Array.prototype;function ni(n,t,e,i,s,r){const o=Da(n),a=o!==n&&!Rn(n),l=o[t];if(l!==$m[t]){const h=l.apply(n,r);return a?Vn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,qn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Hu(n,t,e,i){const s=Da(n),r=s!==n&&!Rn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=qn(n,c)),e.call(this,c,qn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?qn(n,l):l}function el(n,t,e){const i=oe(n);Qe(i,"iterate",$r);const s=i[t](...e);return(s===-1||s===!1)&&eu(e[0])?(e[0]=oe(e[0]),i[t](...e)):s}function Mr(n,t,e=[]){xi(),Yc();const i=oe(n)[t].apply(n,e);return $c(),yi(),i}const Km=Wc("__proto__,__v_isRef,__isVue"),xd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qn));function Zm(n){Qn(n)||(n=String(n));const t=oe(this);return Qe(t,"has",n),t.hasOwnProperty(n)}class yd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?ag:Ed:r?bd:Sd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!s){let l;if(o&&(l=Ym[e]))return l;if(e==="hasOwnProperty")return Zm}const a=Reflect.get(t,e,en(t)?t:i);if((Qn(e)?xd.has(e):Km(e))||(s||Qe(t,"get",e),r))return a;if(en(a)){const l=o&&qc(e)?a:a.value;return s&&de(l)?Zl(l):l}return de(a)?s?Zl(a):Qc(a):a}}class Md extends yd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Bt(t)&&qc(e);if(!this._isShallow){const c=Mi(r);if(!Rn(i)&&!Mi(i)&&(r=oe(r),i=oe(i)),!o&&en(r)&&!en(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:he(t,e),l=Reflect.set(t,e,i,en(t)?t:s);return t===oe(s)&&l&&(a?$n(i,r)&&mi(t,"set",e,i):mi(t,"add",e,i)),l}deleteProperty(t,e){const i=he(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&mi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Qn(e)||!xd.has(e))&&Qe(t,"has",e),i}ownKeys(t){return Qe(t,"iterate",Bt(t)?"length":cs),Reflect.ownKeys(t)}}class Jm extends yd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Qm=new Md,tg=new Jm,eg=new Md(!0);const Kl=n=>n,xo=n=>Reflect.getPrototypeOf(n);function ng(n,t,e){return function(...i){const s=this.__v_raw,r=oe(s),o=Js(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Kl:t?ar:Vn;return!t&&Qe(r,"iterate",l?$l:cs),Oe(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function yo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function ig(n,t){const e={get(s){const r=this.__v_raw,o=oe(r),a=oe(s);n||($n(s,a)&&Qe(o,"get",s),Qe(o,"get",a));const{has:l}=xo(o),c=t?Kl:n?ar:Vn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Qe(oe(s),"iterate",cs),s.size},has(s){const r=this.__v_raw,o=oe(r),a=oe(s);return n||($n(s,a)&&Qe(o,"has",s),Qe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=oe(a),c=t?Kl:n?ar:Vn;return!n&&Qe(l,"iterate",cs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Oe(e,n?{add:yo("add"),set:yo("set"),delete:yo("delete"),clear:yo("clear")}:{add(s){const r=oe(this),o=xo(r),a=oe(s),l=!t&&!Rn(s)&&!Mi(s)?a:s;return o.has.call(r,l)||$n(s,l)&&o.has.call(r,s)||$n(a,l)&&o.has.call(r,a)||(r.add(l),mi(r,"add",l,l)),this},set(s,r){!t&&!Rn(r)&&!Mi(r)&&(r=oe(r));const o=oe(this),{has:a,get:l}=xo(o);let c=a.call(o,s);c||(s=oe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?$n(r,u)&&mi(o,"set",s,r):mi(o,"add",s,r),this},delete(s){const r=oe(this),{has:o,get:a}=xo(r);let l=o.call(r,s);l||(s=oe(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=oe(this),r=s.size!==0,o=s.clear();return r&&mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ng(s,n,t)}),e}function Jc(n,t){const e=ig(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(he(e,s)&&s in i?e:i,s,r)}const sg={get:Jc(!1,!1)},rg={get:Jc(!1,!0)},og={get:Jc(!0,!1)};const Sd=new WeakMap,bd=new WeakMap,Ed=new WeakMap,ag=new WeakMap;function lg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qc(n){return Mi(n)?n:tu(n,!1,Qm,sg,Sd)}function cg(n){return tu(n,!1,eg,rg,bd)}function Zl(n){return tu(n,!0,tg,og,Ed)}function tu(n,t,e,i,s){if(!de(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=lg(Dm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function us(n){return Mi(n)?us(n.__v_raw):!!(n&&n.__v_isReactive)}function Mi(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function eu(n){return n?!!n.__v_raw:!1}function oe(n){const t=n&&n.__v_raw;return t?oe(t):n}function ug(n){return!he(n,"__v_skip")&&Object.isExtensible(n)&&od(n,"__v_skip",!0),n}const Vn=n=>de(n)?Qc(n):n,ar=n=>de(n)?Zl(n):n;function en(n){return n?n.__v_isRef===!0:!1}function ee(n){return hg(n,!1)}function hg(n,t){return en(n)?n:new fg(n,t)}class fg{constructor(t,e){this.dep=new Zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:oe(t),this._value=e?t:Vn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Rn(t)||Mi(t);t=i?t:oe(t),$n(t,e)&&(this._rawValue=t,this._value=i?t:Vn(t),this.dep.trigger())}}function dg(n){return en(n)?n.value:n}const pg={get:(n,t,e)=>t==="__v_raw"?n:dg(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return en(s)&&!en(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function wd(n){return us(n)?n:new Proxy(n,pg)}class mg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return dd(this,!0),!0}get value(){const t=this.dep.track();return gd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function gg(n,t,e=!1){let i,s;return Kt(n)?i=n:(i=n.get,s=n.set),new mg(i,s,e)}const Mo={},ca=new WeakMap;let ts;function _g(n,t=!1,e=ts){if(e){let i=ca.get(e);i||ca.set(e,i=[]),i.push(n)}}function vg(n,t,e=ge){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:Rn(b)||s===!1||s===0?gi(b,1):gi(b);let u,h,f,m,g=!1,_=!1;if(en(n)?(h=()=>n.value,g=Rn(n)):us(n)?(h=()=>c(n),g=!0):Bt(n)?(_=!0,g=n.some(b=>us(b)||Rn(b)),h=()=>n.map(b=>{if(en(b))return b.value;if(us(b))return c(b);if(Kt(b))return l?l(b,2):b()})):Kt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){xi();try{f()}finally{yi()}}const b=ts;ts=u;try{return l?l(n,3,[m]):n(m)}finally{ts=b}}:h=Jn,t&&s){const b=h,P=s===!0?1/0:s;h=()=>gi(b(),P)}const p=Xm(),d=()=>{u.stop(),p&&p.active&&Xc(p.effects,u)};if(r&&t){const b=t;t=(...P)=>{const R=b(...P);return d(),R}}let M=_?new Array(n.length).fill(Mo):Mo;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const P=u.run();if(b||s||g||(_?P.some((R,C)=>$n(R,M[C])):$n(P,M))){f&&f();const R=ts;ts=u;try{const C=[P,M===Mo?void 0:_&&M[0]===Mo?[]:M,m];M=P,l?l(t,3,C):t(...C)}finally{ts=R}}}else u.run()};return a&&a(y),u=new hd(h),u.scheduler=o?()=>o(y,!1):y,m=b=>_g(b,!1,u),f=u.onStop=()=>{const b=ca.get(u);if(b){if(l)l(b,4);else for(const P of b)P();ca.delete(u)}},t?i?y(!0):M=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function gi(n,t=1/0,e){if(t<=0||!de(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,en(n))gi(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)gi(n[i],t,e);else if(Pa(n)||Js(n))n.forEach(i=>{gi(i,t,e)});else if(sd(n)){for(const i in n)gi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],t,e)}return n}function lo(n,t,e,i){try{return i?n(...i):n()}catch(s){Ua(s,t,e)}}function Pn(n,t,e,i){if(Kt(n)){const s=lo(n,t,e,i);return s&&nd(s)&&s.catch(r=>{Ua(r,t,e)}),s}if(Bt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Pn(n[r],t,e,i));return s}}function Ua(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){xi(),lo(r,null,10,[n,l,c]),yi();return}}xg(n,e,s,i,o)}function xg(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const an=[];let Xn=-1;const tr=[];let Di=null,$s=0;const Td=Promise.resolve();let ua=null;function yg(n){const t=ua||Td;return n?t.then(this?n.bind(this):n):t}function Mg(n){let t=Xn+1,e=an.length;for(;t<e;){const i=t+e>>>1,s=an[i],r=Kr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function nu(n){if(!(n.flags&1)){const t=Kr(n),e=an[an.length-1];!e||!(n.flags&2)&&t>=Kr(e)?an.push(n):an.splice(Mg(t),0,n),n.flags|=1,Ad()}}function Ad(){ua||(ua=Td.then(Cd))}function Sg(n){Bt(n)?tr.push(...n):Di&&n.id===-1?Di.splice($s+1,0,n):n.flags&1||(tr.push(n),n.flags|=1),Ad()}function Vu(n,t,e=Xn+1){for(;e<an.length;e++){const i=an[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rd(n){if(tr.length){const t=[...new Set(tr)].sort((e,i)=>Kr(e)-Kr(i));if(tr.length=0,Di){Di.push(...t);return}for(Di=t,$s=0;$s<Di.length;$s++){const e=Di[$s];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Di=null,$s=0}}const Kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cd(n){try{for(Xn=0;Xn<an.length;Xn++){const t=an[Xn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),lo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xn<an.length;Xn++){const t=an[Xn];t&&(t.flags&=-2)}Xn=-1,an.length=0,Rd(),ua=null,(an.length||tr.length)&&Cd()}}let An=null,Pd=null;function ha(n){const t=An;return An=n,Pd=n&&n.type.__scopeId||null,t}function Ld(n,t=An,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&pa(-1);const r=ha(t),o=hs.length;let a;try{a=n(...s)}finally{for(let l=hs.length;l>o;l--)op();ha(r),i._d&&pa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function bn(n,t){if(An===null)return n;const e=za(An),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ge]=t[s];r&&(Kt(r)&&(r={mounted:r,updated:r}),r.deep&&gi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Wi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(xi(),Pn(l,e,8,[n.el,a,n,t]),yi())}}function bg(n,t){if(cn){let e=cn.provides;const i=cn.parent&&cn.parent.provides;i===e&&(e=cn.provides=Object.create(i)),e[n]=t}}function Zo(n,t,e=!1){const i=up();if(i||er){let s=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Kt(t)?t.call(i&&i.proxy):t}}const Eg=Symbol.for("v-scx"),wg=()=>Zo(Eg);function nl(n,t,e){return Id(n,t,e)}function Id(n,t,e=ge){const{immediate:i,deep:s,flush:r,once:o}=e,a=Oe({},e),l=t&&i||!t&&r!=="post";let c;if(Qr){if(r==="sync"){const m=wg();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Jn,m.resume=Jn,m.pause=Jn,m}}const u=cn;a.call=(m,g,_)=>Pn(m,u,g,_);let h=!1;r==="post"?a.scheduler=m=>{fn(m,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,g)=>{g?m():nu(m)}),a.augmentJob=m=>{t&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=vg(n,t,a);return Qr&&(c?c.push(f):l&&f()),f}function Tg(n,t,e){const i=this.proxy,s=Te(n)?n.includes(".")?Dd(i,n):()=>i[n]:n.bind(i,i);let r;Kt(t)?r=t:(r=t.handler,e=t);const o=co(this),a=Id(s,r.bind(i),e);return o(),a}function Dd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Ag=Symbol("_vte"),Ud=n=>n.__isTeleport,Tn=Symbol("_leaveCb"),Sr=Symbol("_enterCb");function Rg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return iu(()=>{n.isMounted=!0}),Vd(()=>{n.isUnmounting=!0}),n}const En=[Function,Array],Nd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},Od=n=>{const t=n.subTree;return t.component?Od(t.component):t},Cg={name:"BaseTransition",props:Nd,setup(n,{slots:t}){const e=up(),i=Rg();return()=>{const s=t.default&&zd(t.default(),!0),r=s&&s.length?Fd(s):e.subTree?Ze():void 0;if(!r)return;const o=oe(n),{mode:a}=o;if(i.isLeaving)return il(r);const l=Gu(r);if(!l)return il(r);let c=Jl(l,o,i,e,h=>c=h);l.type!==ln&&Zr(l,c);let u=e.subTree&&Gu(e.subTree);if(u&&u.type!==ln&&!ns(u,l)&&Od(e).type!==ln){let h=Jl(u,o,i,e);if(Zr(u,h),a==="out-in"&&l.type!==ln)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},il(r);a==="in-out"&&l.type!==ln?h.delayLeave=(f,m,g)=>{const _=Bd(i,u);_[String(u.key)]=u,f[Tn]=()=>{m(),f[Tn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Fd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==ln){t=e;break}}return t}const Pg=Cg;function Bd(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Jl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:m,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:d,onAfterAppear:M,onAppearCancelled:y}=t,b=String(n.key),P=Bd(e,n),R=(w,E)=>{w&&Pn(w,i,9,E)},C=(w,E)=>{const I=E[1];R(w,E),Bt(w)?w.every(D=>D.length<=1)&&I():w.length<=1&&I()},U={mode:o,persisted:a,beforeEnter(w){let E=l;if(!e.isMounted)if(r)E=p||l;else return;w[Tn]&&w[Tn](!0);const I=P[b];I&&ns(n,I)&&I.el[Tn]&&I.el[Tn](),R(E,[w])},enter(w){if(P[b]===n)return;let E=c,I=u,D=h;if(!e.isMounted)if(r)E=d||c,I=M||u,D=y||h;else return;let H=!1;w[Sr]=rt=>{H||(H=!0,rt?R(D,[w]):R(I,[w]),U.delayedLeave&&U.delayedLeave(),w[Sr]=void 0)};const J=w[Sr].bind(null,!1);E?C(E,[w,J]):J()},leave(w,E){const I=String(n.key);if(w[Sr]&&w[Sr](!0),e.isUnmounting)return E();R(f,[w]);let D=!1;w[Tn]=J=>{D||(D=!0,E(),J?R(_,[w]):R(g,[w]),w[Tn]=void 0,P[I]===n&&delete P[I])};const H=w[Tn].bind(null,!1);P[I]=n,m?C(m,[w,H]):H()},clone(w){const E=Jl(w,t,e,i,s);return s&&s(E),E}};return U}function il(n){if(Na(n))return n=zi(n),n.children=null,n}function Gu(n){if(!Na(n))return Ud(n.type)&&n.children?Fd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Kt(e.default))return e.default()}}function Zr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Zr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function zd(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===Ge?(o.patchFlag&128&&s++,i=i.concat(zd(o.children,t,a))):(t||o.type!==ln)&&i.push(a!=null?zi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Lg(n,t){return Kt(n)?Oe({name:n.name},t,{setup:n}):n}function kd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Wu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const fa=new WeakMap;function Gr(n,t,e,i,s=!1){if(Bt(n)){n.forEach((_,p)=>Gr(_,t&&(Bt(t)?t[p]:t),e,i,s));return}if(Wr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Gr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?za(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState,f=oe(h),m=h===ge?ed:_=>Wu(u,_)?!1:he(f,_),g=(_,p)=>!(p&&Wu(u,p));if(c!=null&&c!==l){if(Xu(t),Te(c))u[c]=null,m(c)&&(h[c]=null);else if(en(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Kt(l))lo(l,a,12,[o,u]);else{const _=Te(l),p=en(l);if(_||p){const d=()=>{if(n.f){const M=_?m(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Bt(M)&&Xc(M,r);else if(Bt(M))M.includes(r)||M.push(r);else if(_)u[l]=[r],m(l)&&(h[l]=u[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else _?(u[l]=o,m(l)&&(h[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const M=()=>{d(),fa.delete(n)};M.id=-1,fa.set(n,M),fn(M,e)}else Xu(n),d()}}}function Xu(n){const t=fa.get(n);t&&(t.flags|=8,fa.delete(n))}Ia().requestIdleCallback;Ia().cancelIdleCallback;const Wr=n=>!!n.type.__asyncLoader,Na=n=>n.type.__isKeepAlive;function Ig(n,t){Hd(n,"a",t)}function Dg(n,t){Hd(n,"da",t)}function Hd(n,t,e=cn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Oa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&Ug(i,t,e,s),s=s.parent}}function Ug(n,t,e,i){const s=Oa(t,n,i,!0);su(()=>{Xc(i[t],s)},e)}function Oa(n,t,e=cn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{xi();const a=co(e),l=Pn(t,e,n,o);return a(),yi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(t,e=cn)=>{(!Qr||n==="sp")&&Oa(n,(...i)=>t(...i),e)},Ng=bi("bm"),iu=bi("m"),Og=bi("bu"),Fg=bi("u"),Vd=bi("bum"),su=bi("um"),Bg=bi("sp"),zg=bi("rtg"),kg=bi("rtc");function Hg(n,t=cn){Oa("ec",n,t)}const Vg=Symbol.for("v-ndc");function ws(n,t,e,i){let s;const r=e,o=Bt(n);if(o||Te(n)){const a=o&&us(n);let l=!1,c=!1;a&&(l=!Rn(n),c=Mi(n),n=Da(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?ar(Vn(n[u])):Vn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(de(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Ql=n=>n?hp(n)?za(n):Ql(n.parent):null,Xr=Oe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ql(n.parent),$root:n=>Ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Wd(n),$forceUpdate:n=>n.f||(n.f=()=>{nu(n.update)}),$nextTick:n=>n.n||(n.n=yg.bind(n.proxy)),$watch:n=>Tg.bind(n)}),sl=(n,t)=>n!==ge&&!n.__isScriptSetup&&he(n,t),Gg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(sl(i,t))return o[t]=1,i[t];if(s!==ge&&he(s,t))return o[t]=2,s[t];if(he(r,t))return o[t]=3,r[t];if(e!==ge&&he(e,t))return o[t]=4,e[t];tc&&(o[t]=0)}}const c=Xr[t];let u,h;if(c)return t==="$attrs"&&Qe(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ge&&he(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,he(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return sl(s,t)?(s[t]=e,!0):i!==ge&&he(i,t)?(i[t]=e,!0):he(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ge&&a[0]!=="$"&&he(n,a)||sl(t,a)||he(r,a)||he(i,a)||he(Xr,a)||he(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:he(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function qu(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let tc=!0;function Wg(n){const t=Wd(n),e=n.proxy,i=n.ctx;tc=!1,t.beforeCreate&&ju(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:_,deactivated:p,beforeDestroy:d,beforeUnmount:M,destroyed:y,unmounted:b,render:P,renderTracked:R,renderTriggered:C,errorCaptured:U,serverPrefetch:w,expose:E,inheritAttrs:I,components:D,directives:H,filters:J}=t;if(c&&Xg(c,i,null),o)for(const et in o){const q=o[et];Kt(q)&&(i[et]=q.bind(e))}if(s){const et=s.call(e,e);de(et)&&(n.data=Qc(et))}if(tc=!0,r)for(const et in r){const q=r[et],vt=Kt(q)?q.bind(e,e):Kt(q.get)?q.get.bind(e,e):Jn,xt=!Kt(q)&&Kt(q.set)?q.set.bind(e):Jn,_t=Fr({get:vt,set:xt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Ct=>_t.value=Ct})}if(a)for(const et in a)Gd(a[et],i,e,et);if(l){const et=Kt(l)?l.call(e):l;Reflect.ownKeys(et).forEach(q=>{bg(q,et[q])})}u&&ju(u,n,"c");function Y(et,q){Bt(q)?q.forEach(vt=>et(vt.bind(e))):q&&et(q.bind(e))}if(Y(Ng,h),Y(iu,f),Y(Og,m),Y(Fg,g),Y(Ig,_),Y(Dg,p),Y(Hg,U),Y(kg,R),Y(zg,C),Y(Vd,M),Y(su,b),Y(Bg,w),Bt(E))if(E.length){const et=n.exposed||(n.exposed={});E.forEach(q=>{Object.defineProperty(et,q,{get:()=>e[q],set:vt=>e[q]=vt,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Jn&&(n.render=P),I!=null&&(n.inheritAttrs=I),D&&(n.components=D),H&&(n.directives=H),w&&kd(n)}function Xg(n,t,e=Jn){Bt(n)&&(n=ec(n));for(const i in n){const s=n[i];let r;de(s)?"default"in s?r=Zo(s.from||i,s.default,!0):r=Zo(s.from||i):r=Zo(s),en(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function ju(n,t,e){Pn(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Gd(n,t,e,i){let s=i.includes(".")?Dd(e,i):()=>e[i];if(Te(n)){const r=t[n];Kt(r)&&nl(s,r)}else if(Kt(n))nl(s,n.bind(e));else if(de(n))if(Bt(n))n.forEach(r=>Gd(r,t,e,i));else{const r=Kt(n.handler)?n.handler.bind(e):t[n.handler];Kt(r)&&nl(s,r,n)}}function Wd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>da(l,c,o,!0)),da(l,t,o)),de(t)&&r.set(t,l),l}function da(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&da(n,r,e,!0),s&&s.forEach(o=>da(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=qg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const qg={data:Yu,props:$u,emits:$u,methods:Or,computed:Or,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Or,directives:Or,watch:Yg,provide:Yu,inject:jg};function Yu(n,t){return t?n?function(){return Oe(Kt(n)?n.call(this,this):n,Kt(t)?t.call(this,this):t)}:t:n}function jg(n,t){return Or(ec(n),ec(t))}function ec(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function rn(n,t){return n?[...new Set([].concat(n,t))]:t}function Or(n,t){return n?Oe(Object.create(null),n,t):t}function $u(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Oe(Object.create(null),qu(n),qu(t??{})):t}function Yg(n,t){if(!n)return t;if(!t)return n;const e=Oe(Object.create(null),n);for(const i in t)e[i]=rn(n[i],t[i]);return e}function Xd(){return{app:null,config:{isNativeTag:ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $g=0;function Kg(n,t){return function(i,s=null){Kt(i)||(i=Oe({},i)),s!=null&&!de(s)&&(s=null);const r=Xd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:$g++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:A0,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Kt(u.install)?(o.add(u),u.install(c,...h)):Kt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const m=c._ceVNode||un(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,za(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=er;er=c;try{return u()}finally{er=h}}};return c}}let er=null;const Zg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${kn(t)}Modifiers`]||n[`${xs(t)}Modifiers`];function Jg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ge;let s=e;const r=t.startsWith("update:"),o=r&&Zg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Te(u)?u.trim():u)),o.number&&(s=e.map(jc)));let a,l=i[a=Za(t)]||i[a=Za(kn(t))];!l&&r&&(l=i[a=Za(xs(t))]),l&&Pn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,s)}}const Qg=new WeakMap;function qd(n,t,e=!1){const i=e?Qg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Kt(n)){const l=c=>{const u=qd(c,t,!0);u&&(a=!0,Oe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(de(n)&&i.set(n,null),null):(Bt(r)?r.forEach(l=>o[l]=null):Oe(o,r),de(n)&&i.set(n,o),o)}function Fa(n,t){return!n||!Ra(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),he(n,t[0].toLowerCase()+t.slice(1))||he(n,xs(t))||he(n,t))}function Ku(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:g,inheritAttrs:_}=n,p=ha(n);let d,M;try{if(e.shapeFlag&4){const b=s||i,P=b;d=jn(c.call(P,b,u,h,m,f,g)),M=a}else{const b=t;d=jn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),M=t.props?a:t0(a)}}catch(b){hs.length=0,Ua(b,n,1),d=un(ln)}let y=d;if(M&&_!==!1){const b=Object.keys(M),{shapeFlag:P}=y;b.length&&P&7&&(r&&b.some(Ca)&&(M=e0(M,r)),y=zi(y,M,!1,!0))}return e.dirs&&(y=zi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Zr(y,e.transition),d=y,ha(p),d}const t0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ra(e))&&((t||(t={}))[e]=n[e]);return t},e0=(n,t)=>{const e={};for(const i in n)(!Ca(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function n0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Zu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(jd(o,i,f)&&!Fa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Zu(i,o,c):!0:!!o;return!1}function Zu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(jd(t,n,r)&&!Fa(e,r))return!0}return!1}function jd(n,t,e){const i=n[e],s=t[e];return e==="style"&&de(i)&&de(s)?!ao(i,s):i!==s}function i0({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Yd={},$d=()=>Object.create(Yd),Kd=n=>Object.getPrototypeOf(n)===Yd;function s0(n,t,e,i=!1){const s={},r=$d();n.propsDefaults=Object.create(null),Zd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:cg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function r0(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=oe(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Fa(n.emitsOptions,f))continue;const m=t[f];if(l)if(he(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const g=kn(f);s[g]=nc(l,a,g,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{Zd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!he(t,h)&&((u=xs(h))===h||!he(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=nc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!he(t,h))&&(delete r[h],c=!0)}c&&mi(n.attrs,"set","")}function Zd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(kr(l))continue;const c=t[l];let u;s&&he(s,u=kn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Fa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=oe(e),c=a||ge;for(let u=0;u<r.length;u++){const h=r[u];e[h]=nc(s,l,h,c[h],n,!he(c,h))}}return o}function nc(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=he(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Kt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=co(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===xs(e))&&(i=!0))}return i}const o0=new WeakMap;function Jd(n,t,e=!1){const i=e?o0:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Kt(n)){const u=h=>{l=!0;const[f,m]=Jd(h,t,!0);Oe(o,f),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return de(n)&&i.set(n,Zs),Zs;if(Bt(r))for(let u=0;u<r.length;u++){const h=kn(r[u]);Ju(h)&&(o[h]=ge)}else if(r)for(const u in r){const h=kn(u);if(Ju(h)){const f=r[u],m=o[h]=Bt(f)||Kt(f)?{type:f}:Oe({},f),g=m.type;let _=!1,p=!0;if(Bt(g))for(let d=0;d<g.length;++d){const M=g[d],y=Kt(M)&&M.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(p=!1)}else _=Kt(g)&&g.name==="Boolean";m[0]=_,m[1]=p,(_||he(m,"default"))&&a.push(h)}}const c=[o,a];return de(n)&&i.set(n,c),c}function Ju(n){return n[0]!=="$"&&!kr(n)}const ru=n=>n==="_"||n==="_ctx"||n==="$stable",ou=n=>Bt(n)?n.map(jn):[jn(n)],a0=(n,t,e)=>{if(t._n)return t;const i=Ld((...s)=>ou(t(...s)),e);return i._c=!1,i},Qd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(ru(s))continue;const r=n[s];if(Kt(r))t[s]=a0(s,r,i);else if(r!=null){const o=ou(r);t[s]=()=>o}}},tp=(n,t)=>{const e=ou(t);n.slots.default=()=>e},ep=(n,t,e)=>{for(const i in t)(e||!ru(i))&&(n[i]=t[i])},l0=(n,t,e)=>{const i=n.slots=$d();if(n.vnode.shapeFlag&32){const s=t._;s?(ep(i,t,e),e&&od(i,"_",s,!0)):Qd(t,i)}else t&&tp(n,t)},c0=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ge;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:ep(s,t,e):(r=!t.$stable,Qd(t,s)),o=t}else t&&(tp(n,t),o={default:1});if(r)for(const a in s)!ru(a)&&o[a]==null&&delete s[a]},fn=p0;function u0(n){return h0(n)}function h0(n,t){const e=Ia();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Jn,insertStaticContent:g}=n,_=(v,N,X,st=null,F=null,nt=null,at=void 0,ot=null,T=!!N.dynamicChildren)=>{if(v===N)return;v&&!ns(v,N)&&(st=yt(v),Ct(v,F,nt,!0),v=null),N.patchFlag===-2&&(T=!1,N.dynamicChildren=null);const{type:x,ref:B,shapeFlag:G}=N;switch(x){case Ba:p(v,N,X,st);break;case ln:d(v,N,X,st);break;case Jo:v==null&&M(N,X,st,at);break;case Ge:D(v,N,X,st,F,nt,at,ot,T);break;default:G&1?P(v,N,X,st,F,nt,at,ot,T):G&6?H(v,N,X,st,F,nt,at,ot,T):(G&64||G&128)&&x.process(v,N,X,st,F,nt,at,ot,T,Ht)}B!=null&&F?Gr(B,v&&v.ref,nt,N||v,!N):B==null&&v&&v.ref!=null&&Gr(v.ref,null,nt,v,!0)},p=(v,N,X,st)=>{if(v==null)i(N.el=a(N.children),X,st);else{const F=N.el=v.el;N.children!==v.children&&c(F,N.children)}},d=(v,N,X,st)=>{v==null?i(N.el=l(N.children||""),X,st):N.el=v.el},M=(v,N,X,st)=>{[v.el,v.anchor]=g(v.children,N,X,st,v.el,v.anchor)},y=({el:v,anchor:N},X,st)=>{let F;for(;v&&v!==N;)F=f(v),i(v,X,st),v=F;i(N,X,st)},b=({el:v,anchor:N})=>{let X;for(;v&&v!==N;)X=f(v),s(v),v=X;s(N)},P=(v,N,X,st,F,nt,at,ot,T)=>{if(N.type==="svg"?at="svg":N.type==="math"&&(at="mathml"),v==null)R(N,X,st,F,nt,at,ot,T);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),w(v,N,F,nt,at,ot,T)}finally{x&&x._endPatch()}}},R=(v,N,X,st,F,nt,at,ot)=>{let T,x;const{props:B,shapeFlag:G,transition:K,dirs:$}=v;if(T=v.el=o(v.type,nt,B&&B.is,B),G&8?u(T,v.children):G&16&&U(v.children,T,null,st,F,rl(v,nt),at,ot),$&&Wi(v,null,st,"created"),C(T,v,v.scopeId,at,st),B){for(const ht in B)ht!=="value"&&!kr(ht)&&r(T,ht,null,B[ht],nt,st);"value"in B&&r(T,"value",null,B.value,nt),(x=B.onVnodeBeforeMount)&&Wn(x,st,v)}$&&Wi(v,null,st,"beforeMount");const gt=f0(F,K);gt&&K.beforeEnter(T),i(T,N,X),((x=B&&B.onVnodeMounted)||gt||$)&&fn(()=>{x&&Wn(x,st,v),gt&&K.enter(T),$&&Wi(v,null,st,"mounted")},F)},C=(v,N,X,st,F)=>{if(X&&m(v,X),st)for(let nt=0;nt<st.length;nt++)m(v,st[nt]);if(F){let nt=F.subTree;if(N===nt||rp(nt.type)&&(nt.ssContent===N||nt.ssFallback===N)){const at=F.vnode;C(v,at,at.scopeId,at.slotScopeIds,F.parent)}}},U=(v,N,X,st,F,nt,at,ot,T=0)=>{for(let x=T;x<v.length;x++){const B=v[x]=ot?di(v[x]):jn(v[x]);_(null,B,N,X,st,F,nt,at,ot)}},w=(v,N,X,st,F,nt,at)=>{const ot=N.el=v.el;let{patchFlag:T,dynamicChildren:x,dirs:B}=N;T|=v.patchFlag&16;const G=v.props||ge,K=N.props||ge;let $;if(X&&Xi(X,!1),($=K.onVnodeBeforeUpdate)&&Wn($,X,N,v),B&&Wi(N,v,X,"beforeUpdate"),X&&Xi(X,!0),x&&(!v.dynamicChildren||v.dynamicChildren.length!==x.length)&&(T=0,at=!1,x=null),(G.innerHTML&&K.innerHTML==null||G.textContent&&K.textContent==null)&&u(ot,""),x?E(v.dynamicChildren,x,ot,X,st,rl(N,F),nt):at||q(v,N,ot,null,X,st,rl(N,F),nt,!1),T>0){if(T&16)I(ot,G,K,X,F);else if(T&2&&G.class!==K.class&&r(ot,"class",null,K.class,F),T&4&&r(ot,"style",G.style,K.style,F),T&8){const gt=N.dynamicProps;for(let ht=0;ht<gt.length;ht++){const pt=gt[ht],Rt=G[pt],dt=K[pt];(dt!==Rt||pt==="value")&&r(ot,pt,Rt,dt,F,X)}}T&1&&v.children!==N.children&&u(ot,N.children)}else!at&&x==null&&I(ot,G,K,X,F);(($=K.onVnodeUpdated)||B)&&fn(()=>{$&&Wn($,X,N,v),B&&Wi(N,v,X,"updated")},st)},E=(v,N,X,st,F,nt,at)=>{for(let ot=0;ot<N.length;ot++){const T=v[ot],x=N[ot],B=T.el&&(T.type===Ge||!ns(T,x)||T.shapeFlag&198)?h(T.el):X;_(T,x,B,null,st,F,nt,at,!0)}},I=(v,N,X,st,F)=>{if(N!==X){if(N!==ge)for(const nt in N)!kr(nt)&&!(nt in X)&&r(v,nt,N[nt],null,F,st);for(const nt in X){if(kr(nt))continue;const at=X[nt],ot=N[nt];at!==ot&&nt!=="value"&&r(v,nt,ot,at,F,st)}"value"in X&&r(v,"value",N.value,X.value,F)}},D=(v,N,X,st,F,nt,at,ot,T)=>{const x=N.el=v?v.el:a(""),B=N.anchor=v?v.anchor:a("");let{patchFlag:G,dynamicChildren:K,slotScopeIds:$}=N;$&&(ot=ot?ot.concat($):$),v==null?(i(x,X,st),i(B,X,st),U(N.children||[],X,B,F,nt,at,ot,T)):G>0&&G&64&&K&&v.dynamicChildren&&v.dynamicChildren.length===K.length?(E(v.dynamicChildren,K,X,F,nt,at,ot),(N.key!=null||F&&N===F.subTree)&&np(v,N,!0)):q(v,N,X,B,F,nt,at,ot,T)},H=(v,N,X,st,F,nt,at,ot,T)=>{N.slotScopeIds=ot,v==null?N.shapeFlag&512?F.ctx.activate(N,X,st,at,T):J(N,X,st,F,nt,at,T):rt(v,N,T)},J=(v,N,X,st,F,nt,at)=>{const ot=v.component=y0(v,st,F);if(Na(v)&&(ot.ctx.renderer=Ht),M0(ot,!1,at),ot.asyncDep){if(F&&F.registerDep(ot,Y,at),!v.el){const T=ot.subTree=un(ln);d(null,T,N,X),v.placeholder=T.el}}else Y(ot,v,N,X,F,nt,at)},rt=(v,N,X)=>{const st=N.component=v.component;if(n0(v,N,X))if(st.asyncDep&&!st.asyncResolved){et(st,N,X);return}else st.next=N,st.update();else N.el=v.el,st.vnode=N},Y=(v,N,X,st,F,nt,at)=>{const ot=()=>{if(v.isMounted){let{next:G,bu:K,u:$,parent:gt,vnode:ht}=v;{const Vt=ip(v);if(Vt){G&&(G.el=ht.el,et(v,G,at)),Vt.asyncDep.then(()=>{fn(()=>{v.isUnmounted||x()},F)});return}}let pt=G,Rt;Xi(v,!1),G?(G.el=ht.el,et(v,G,at)):G=ht,K&&Ko(K),(Rt=G.props&&G.props.onVnodeBeforeUpdate)&&Wn(Rt,gt,G,ht),Xi(v,!0);const dt=Ku(v),St=v.subTree;v.subTree=dt,_(St,dt,h(St.el),yt(St),v,F,nt),G.el=dt.el,pt===null&&i0(v,dt.el),$&&fn($,F),(Rt=G.props&&G.props.onVnodeUpdated)&&fn(()=>Wn(Rt,gt,G,ht),F)}else{let G;const{el:K,props:$}=N,{bm:gt,m:ht,parent:pt,root:Rt,type:dt}=v,St=Wr(N);Xi(v,!1),gt&&Ko(gt),!St&&(G=$&&$.onVnodeBeforeMount)&&Wn(G,pt,N),Xi(v,!0);{Rt.ce&&Rt.ce._hasShadowRoot()&&Rt.ce._injectChildStyle(dt,v.parent?v.parent.type:void 0);const Vt=v.subTree=Ku(v);_(null,Vt,X,st,v,F,nt),N.el=Vt.el}if(ht&&fn(ht,F),!St&&(G=$&&$.onVnodeMounted)){const Vt=N;fn(()=>Wn(G,pt,Vt),F)}(N.shapeFlag&256||pt&&Wr(pt.vnode)&&pt.vnode.shapeFlag&256)&&v.a&&fn(v.a,F),v.isMounted=!0,N=X=st=null}};v.scope.on();const T=v.effect=new hd(ot);v.scope.off();const x=v.update=T.run.bind(T),B=v.job=T.runIfDirty.bind(T);B.i=v,B.id=v.uid,T.scheduler=()=>nu(B),Xi(v,!0),x()},et=(v,N,X)=>{N.component=v;const st=v.vnode.props;v.vnode=N,v.next=null,r0(v,N.props,st,X),c0(v,N.children,X),xi(),Vu(v),yi()},q=(v,N,X,st,F,nt,at,ot,T=!1)=>{const x=v&&v.children,B=v?v.shapeFlag:0,G=N.children,{patchFlag:K,shapeFlag:$}=N;if(K>0){if(K&128){xt(x,G,X,st,F,nt,at,ot,T);return}else if(K&256){vt(x,G,X,st,F,nt,at,ot,T);return}}$&8?(B&16&&ft(x,F,nt),G!==x&&u(X,G)):B&16?$&16?xt(x,G,X,st,F,nt,at,ot,T):ft(x,F,nt,!0):(B&8&&u(X,""),$&16&&U(G,X,st,F,nt,at,ot,T))},vt=(v,N,X,st,F,nt,at,ot,T)=>{v=v||Zs,N=N||Zs;const x=v.length,B=N.length,G=Math.min(x,B);let K;for(K=0;K<G;K++){const $=N[K]=T?di(N[K]):jn(N[K]);_(v[K],$,X,null,F,nt,at,ot,T)}x>B?ft(v,F,nt,!0,!1,G):U(N,X,st,F,nt,at,ot,T,G)},xt=(v,N,X,st,F,nt,at,ot,T)=>{let x=0;const B=N.length;let G=v.length-1,K=B-1;for(;x<=G&&x<=K;){const $=v[x],gt=N[x]=T?di(N[x]):jn(N[x]);if(ns($,gt))_($,gt,X,null,F,nt,at,ot,T);else break;x++}for(;x<=G&&x<=K;){const $=v[G],gt=N[K]=T?di(N[K]):jn(N[K]);if(ns($,gt))_($,gt,X,null,F,nt,at,ot,T);else break;G--,K--}if(x>G){if(x<=K){const $=K+1,gt=$<B?N[$].el:st;for(;x<=K;)_(null,N[x]=T?di(N[x]):jn(N[x]),X,gt,F,nt,at,ot,T),x++}}else if(x>K)for(;x<=G;)Ct(v[x],F,nt,!0),x++;else{const $=x,gt=x,ht=new Map;for(x=gt;x<=K;x++){const Pt=N[x]=T?di(N[x]):jn(N[x]);Pt.key!=null&&ht.set(Pt.key,x)}let pt,Rt=0;const dt=K-gt+1;let St=!1,Vt=0;const Ot=new Array(dt);for(x=0;x<dt;x++)Ot[x]=0;for(x=$;x<=G;x++){const Pt=v[x];if(Rt>=dt){Ct(Pt,F,nt,!0);continue}let Ut;if(Pt.key!=null)Ut=ht.get(Pt.key);else for(pt=gt;pt<=K;pt++)if(Ot[pt-gt]===0&&ns(Pt,N[pt])){Ut=pt;break}Ut===void 0?Ct(Pt,F,nt,!0):(Ot[Ut-gt]=x+1,Ut>=Vt?Vt=Ut:St=!0,_(Pt,N[Ut],X,null,F,nt,at,ot,T),Rt++)}const Tt=St?d0(Ot):Zs;for(pt=Tt.length-1,x=dt-1;x>=0;x--){const Pt=gt+x,Ut=N[Pt],ae=N[Pt+1],S=Pt+1<B?ae.el||sp(ae):st;Ot[x]===0?_(null,Ut,X,S,F,nt,at,ot,T):St&&(pt<0||x!==Tt[pt]?_t(Ut,X,S,2):pt--)}}},_t=(v,N,X,st,F=null)=>{const{el:nt,type:at,transition:ot,children:T,shapeFlag:x}=v;if(x&6){_t(v.component.subTree,N,X,st);return}if(x&128){v.suspense.move(N,X,st);return}if(x&64){at.move(v,N,X,Ht);return}if(at===Ge){i(nt,N,X);for(let G=0;G<T.length;G++)_t(T[G],N,X,st);i(v.anchor,N,X);return}if(at===Jo){y(v,N,X);return}if(st!==2&&x&1&&ot)if(st===0)ot.persisted&&!nt[Tn]?i(nt,N,X):(ot.beforeEnter(nt),i(nt,N,X),fn(()=>ot.enter(nt),F));else{const{leave:G,delayLeave:K,afterLeave:$}=ot,gt=()=>{v.ctx.isUnmounted?s(nt):i(nt,N,X)},ht=()=>{const pt=nt._isLeaving||!!nt[Tn];nt._isLeaving&&nt[Tn](!0),ot.persisted&&!pt?gt():G(nt,()=>{gt(),$&&$()})};K?K(nt,gt,ht):ht()}else i(nt,N,X)},Ct=(v,N,X,st=!1,F=!1)=>{const{type:nt,props:at,ref:ot,children:T,dynamicChildren:x,shapeFlag:B,patchFlag:G,dirs:K,cacheIndex:$,memo:gt}=v;if(G===-2&&(F=!1),ot!=null&&(xi(),Gr(ot,null,X,v,!0),yi()),$!=null&&(N.renderCache[$]=void 0),B&256){N.ctx.deactivate(v);return}const ht=B&1&&K,pt=!Wr(v);let Rt;if(pt&&(Rt=at&&at.onVnodeBeforeUnmount)&&Wn(Rt,N,v),B&6)mt(v.component,X,st);else{if(B&128){v.suspense.unmount(X,st);return}ht&&Wi(v,null,N,"beforeUnmount"),B&64?v.type.remove(v,N,X,Ht,st):x&&!x.hasOnce&&(nt!==Ge||G>0&&G&64)?ft(x,N,X,!1,!0):(nt===Ge&&G&384||!F&&B&16)&&ft(T,N,X),st&&Wt(v)}const dt=gt!=null&&$==null;(pt&&(Rt=at&&at.onVnodeUnmounted)||ht||dt)&&fn(()=>{Rt&&Wn(Rt,N,v),ht&&Wi(v,null,N,"unmounted"),dt&&(v.el=null)},X)},Wt=v=>{const{type:N,el:X,anchor:st,transition:F}=v;if(N===Ge){lt(X,st);return}if(N===Jo){b(v);return}const nt=()=>{s(X),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(v.shapeFlag&1&&F&&!F.persisted){const{leave:at,delayLeave:ot}=F,T=()=>at(X,nt);ot?ot(v.el,nt,T):T()}else nt()},lt=(v,N)=>{let X;for(;v!==N;)X=f(v),s(v),v=X;s(N)},mt=(v,N,X)=>{const{bum:st,scope:F,job:nt,subTree:at,um:ot,m:T,a:x}=v;Qu(T),Qu(x),st&&Ko(st),F.stop(),nt&&(nt.flags|=8,Ct(at,v,N,X)),ot&&fn(ot,N),fn(()=>{v.isUnmounted=!0},N)},ft=(v,N,X,st=!1,F=!1,nt=0)=>{for(let at=nt;at<v.length;at++)Ct(v[at],N,X,st,F)},yt=v=>{if(v.shapeFlag&6)return yt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const N=f(v.anchor||v.el),X=N&&N[Ag];return X?f(X):N};let Nt=!1;const kt=(v,N,X)=>{let st;v==null?N._vnode&&(Ct(N._vnode,null,null,!0),st=N._vnode.component):_(N._vnode||null,v,N,null,null,null,X),N._vnode=v,Nt||(Nt=!0,Vu(st),Rd(),Nt=!1)},Ht={p:_,um:Ct,m:_t,r:Wt,mt:J,mc:U,pc:q,pbc:E,n:yt,o:n};return{render:kt,hydrate:void 0,createApp:Kg(kt)}}function rl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Xi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function f0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function np(n,t,e=!1){const i=n.children,s=t.children;if(Bt(i)&&Bt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&np(o,a)),a.type===Ba&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===ln&&!a.el&&(a.el=o.el)}}function d0(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function ip(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ip(t)}function Qu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function sp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?sp(t.subTree):null}const rp=n=>n.__isSuspense;function p0(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):Sg(n)}const Ge=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),Jo=Symbol.for("v-stc"),hs=[];let Mn=null;function jt(n=!1){hs.push(Mn=n?null:[])}function op(){hs.pop(),Mn=hs[hs.length-1]||null}let Jr=1;function pa(n,t=!1){Jr+=n,n<0&&Mn&&t&&(Mn.hasOnce=!0)}function ap(n){return n.dynamicChildren=Jr>0?Mn||Zs:null,op(),Jr>0&&Mn&&Mn.push(n),n}function $t(n,t,e,i,s,r){return ap(ct(n,t,e,i,s,r,!0))}function lp(n,t,e,i,s){return ap(un(n,t,e,i,s,!0))}function ma(n){return n?n.__v_isVNode===!0:!1}function ns(n,t){return n.type===t.type&&n.key===t.key}const cp=({key:n})=>n??null,Qo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Te(n)||en(n)||Kt(n)?{i:An,r:n,k:t,f:!!e}:n:null);function ct(n,t=null,e=null,i=0,s=null,r=n===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&cp(t),ref:t&&Qo(t),scopeId:Pd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return a?(ga(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Te(e)?8:16),Jr>0&&!o&&Mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Mn.push(l),l}const un=m0;function m0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Vg)&&(n=ln),ma(n)){const a=zi(n,t,!0);return e&&ga(a,e),Jr>0&&!r&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(n)]=a:Mn.push(a)),a.patchFlag=-2,a}if(w0(n)&&(n=n.__vccOpts),t){t=g0(t);let{class:a,style:l}=t;a&&!Te(a)&&(t.class=fi(a)),de(l)&&(eu(l)&&!Bt(l)&&(l=Oe({},l)),t.style=Qs(l))}const o=Te(n)?1:rp(n)?128:Ud(n)?64:de(n)?4:Kt(n)?2:0;return ct(n,t,e,i,s,o,r,!0)}function g0(n){return n?eu(n)||Kd(n)?Oe({},n):n:null}function zi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?_0(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&cp(c),ref:t&&t.ref?e&&r?Bt(r)?r.concat(Qo(t)):[r,Qo(t)]:Qo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ge?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zi(n.ssContent),ssFallback:n.ssFallback&&zi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Zr(u,l.clone(u)),u}function ci(n=" ",t=0){return un(Ba,null,n,t)}function th(n,t){const e=un(Jo,null,n);return e.staticCount=t,e}function Ze(n="",t=!1){return t?(jt(),lp(ln,null,n)):un(ln,null,n)}function jn(n){return n==null||typeof n=="boolean"?un(ln):Bt(n)?un(Ge,null,n.slice()):ma(n)?di(n):un(Ba,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zi(n)}function ga(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ga(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Kd(t)?t._ctx=An:s===3&&An&&(An.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Kt(t)){if(i&65){ga(n,{default:t});return}t={default:t,_ctx:An},e=32}else t=String(t),i&64?(e=16,t=[ci(t)]):e=8;n.children=t,n.shapeFlag|=e}function _0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=fi([t.class,i.class]));else if(s==="style")t.style=Qs([t.style,i.style]);else if(Ra(s)){const r=t[s],o=i[s];o&&r!==o&&!(Bt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ca(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Wn(n,t,e,i=null){Pn(n,t,7,[e,i])}const v0=Xd();let x0=0;function y0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||v0,r={uid:x0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jd(i,s),emitsOptions:qd(i,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:i.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Jg.bind(null,r),n.ce&&n.ce(r),r}let cn=null;const up=()=>cn||An;let _a,ic;{const n=Ia(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};_a=t("__VUE_INSTANCE_SETTERS__",e=>cn=e),ic=t("__VUE_SSR_SETTERS__",e=>Qr=e)}const co=n=>{const t=cn;return _a(n),n.scope.on(),()=>{n.scope.off(),_a(t)}},eh=()=>{cn&&cn.scope.off(),_a(null)};function hp(n){return n.vnode.shapeFlag&4}let Qr=!1;function M0(n,t=!1,e=!1){t&&ic(t);const{props:i,children:s}=n.vnode,r=hp(n);s0(n,i,r,t),l0(n,s,e||t);const o=r?S0(n,t):void 0;return t&&ic(!1),o}function S0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Gg);const{setup:i}=e;if(i){xi();const s=n.setupContext=i.length>1?E0(n):null,r=co(n),o=lo(i,n,0,[n.props,s]),a=nd(o);if(yi(),r(),(a||n.sp)&&!Wr(n)&&kd(n),a){if(o.then(eh,eh),t)return o.then(l=>{nh(n,l)}).catch(l=>{Ua(l,n,0)});n.asyncDep=o}else nh(n,o)}else fp(n)}function nh(n,t,e){Kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:de(t)&&(n.setupState=wd(t)),fp(n)}function fp(n,t,e){const i=n.type;n.render||(n.render=i.render||Jn);{const s=co(n);xi();try{Wg(n)}finally{yi(),s()}}}const b0={get(n,t){return Qe(n,"get",""),n[t]}};function E0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,b0),slots:n.slots,emit:n.emit,expose:t}}function za(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wd(ug(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Xr)return Xr[e](n)},has(t,e){return e in t||e in Xr}})):n.proxy}function w0(n){return Kt(n)&&"__vccOpts"in n}const Fr=(n,t)=>gg(n,t,Qr);function T0(n,t,e){try{pa(-1);const i=arguments.length;return i===2?de(t)&&!Bt(t)?ma(t)?un(n,null,[t]):un(n,t):un(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ma(e)&&(e=[e]),un(n,t,e))}finally{pa(1)}}const A0="3.5.40";let sc;const ih=typeof window<"u"&&window.trustedTypes;if(ih)try{sc=ih.createPolicy("vue",{createHTML:n=>n})}catch{}const dp=sc?n=>sc.createHTML(n):n=>n,R0="http://www.w3.org/2000/svg",C0="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,sh=hi&&hi.createElement("template"),P0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?hi.createElementNS(R0,n):t==="mathml"?hi.createElementNS(C0,n):e?hi.createElement(n,{is:e}):hi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{sh.innerHTML=dp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=sh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Ti="transition",br="animation",to=Symbol("_vtc"),pp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},L0=Oe({},Nd,pp),I0=n=>(n.displayName="Transition",n.props=L0,n),D0=I0((n,{slots:t})=>T0(Pg,U0(n),t)),qi=(n,t=[])=>{Bt(n)?n.forEach(e=>e(...t)):n&&n(...t)},rh=n=>n?Bt(n)?n.some(t=>t.length>1):n.length>1:!1;function U0(n){const t={};for(const D in n)D in pp||(t[D]=n[D]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:m=`${e}-leave-to`}=n,g=N0(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:d,onEnter:M,onEnterCancelled:y,onLeave:b,onLeaveCancelled:P,onBeforeAppear:R=d,onAppear:C=M,onAppearCancelled:U=y}=t,w=(D,H,J,rt)=>{D._enterCancelled=rt,ji(D,H?u:a),ji(D,H?c:o),J&&J()},E=(D,H)=>{D._isLeaving=!1,ji(D,h),ji(D,m),ji(D,f),H&&H()},I=D=>(H,J)=>{const rt=D?C:M,Y=()=>w(H,D,J);qi(rt,[H,Y]),oh(()=>{ji(H,D?l:r),ii(H,D?u:a),rh(rt)||ah(H,i,_,Y)})};return Oe(t,{onBeforeEnter(D){qi(d,[D]),ii(D,r),ii(D,o)},onBeforeAppear(D){qi(R,[D]),ii(D,l),ii(D,c)},onEnter:I(!1),onAppear:I(!0),onLeave(D,H){D._isLeaving=!0;const J=()=>E(D,H);ii(D,h),D._enterCancelled?(ii(D,f),uh(D)):(uh(D),ii(D,f)),oh(()=>{D._isLeaving&&(ji(D,h),ii(D,m),rh(b)||ah(D,i,p,J))}),qi(b,[D,J])},onEnterCancelled(D){w(D,!1,void 0,!0),qi(y,[D])},onAppearCancelled(D){w(D,!0,void 0,!0),qi(U,[D])},onLeaveCancelled(D){E(D),qi(P,[D])}})}function N0(n){if(n==null)return null;if(de(n))return[ol(n.enter),ol(n.leave)];{const t=ol(n);return[t,t]}}function ol(n){return Om(n)}function ii(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[to]||(n[to]=new Set)).add(t)}function ji(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[to];e&&(e.delete(t),e.size||(n[to]=void 0))}function oh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let O0=0;function ah(n,t,e,i){const s=n._endId=++O0,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=F0(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=m=>{m.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function F0(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${Ti}Delay`),r=i(`${Ti}Duration`),o=lh(s,r),a=i(`${br}Delay`),l=i(`${br}Duration`),c=lh(a,l);let u=null,h=0,f=0;t===Ti?o>0&&(u=Ti,h=o,f=r.length):t===br?c>0&&(u=br,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Ti:br:null,f=u?u===Ti?r.length:l.length:0);const m=u===Ti&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ti}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:m}}function lh(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>ch(e)+ch(n[i])))}function ch(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function uh(n){return(n?n.ownerDocument:document).body.offsetHeight}function B0(n,t,e){const i=n[to];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const hh=Symbol("_vod"),z0=Symbol("_vsh"),k0=Symbol(""),H0=/(?:^|;)\s*display\s*:/;function V0(n,t,e){const i=n.style,s=Te(e);let r=!1;if(e&&!s){if(t)if(Te(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Br(i,a,"")}else for(const o in t)e[o]==null&&Br(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?W0(n,o,!Te(t)&&t?t[o]:void 0,a)||Br(i,o,a):Br(i,o,"")}}else if(s){if(t!==e){const o=i[k0];o&&(e+=";"+o),i.cssText=e,r=H0.test(e)}}else t&&n.removeAttribute("style");hh in n&&(n[hh]=r?i.display:"",n[z0]&&(i.display="none"))}const fh=/\s*!important$/;function Br(n,t,e){if(Bt(e))e.forEach(i=>Br(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=G0(n,t);fh.test(e)?n.setProperty(xs(i),e.replace(fh,""),"important"):n[i]=e}}const dh=["Webkit","Moz","ms"],al={};function G0(n,t){const e=al[t];if(e)return e;let i=kn(t);if(i!=="filter"&&i in n)return al[t]=i;i=rd(i);for(let s=0;s<dh.length;s++){const r=dh[s]+i;if(r in n)return al[t]=r}return t}function W0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Te(i)&&e===i}const ph="http://www.w3.org/1999/xlink";function mh(n,t,e,i,s,r=Vm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ph,t.slice(6,t.length)):n.setAttributeNS(ph,t,e):e==null||r&&!ad(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Qn(e)?String(e):e)}function gh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?dp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=ad(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function is(n,t,e,i){n.addEventListener(t,e,i)}function X0(n,t,e,i){n.removeEventListener(t,e,i)}const _h=Symbol("_vei");function q0(n,t,e,i,s=null){const r=n[_h]||(n[_h]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=$0(t);if(i){const c=r[t]=J0(i,s);is(n,a,c,l)}else o&&(X0(n,a,o,l),r[t]=void 0)}}const j0=/(Once|Passive|Capture)$/,Y0=/^on:?(?:Once|Passive|Capture)$/;function $0(n){let t,e;for(;(e=n.match(j0))&&!Y0.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):xs(n.slice(2)),t]}let ll=0;const K0=Promise.resolve(),Z0=()=>ll||(K0.then(()=>ll=0),ll=Date.now());function J0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Bt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Pn(c,t,5,a)}}else Pn(s,t,5,[i])};return e.value=n,e.attached=Z0(),e}const vh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Q0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?B0(n,i,o):t==="style"?V0(n,e,i):Ra(t)?Ca(t)||q0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):t_(n,t,i,o))?(gh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&mh(n,t,i,o,r,t!=="value")):n._isVueCE&&(e_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Te(i)))?gh(n,kn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),mh(n,t,i,o))};function t_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&vh(t)&&Kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vh(t)&&Te(e)?!1:t in n}function e_(n,t){const e=n._def.props;if(!e)return!1;const i=kn(t);return Array.isArray(e)?e.some(s=>kn(s)===i):Object.keys(e).some(s=>kn(s)===i)}const va=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Bt(t)?e=>Ko(t,e):t};function n_(n){n.target.composing=!0}function xh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const nr=Symbol("_assign");function yh(n,t,e){return t&&(n=n.trim()),e&&(n=jc(n)),n}const Dn={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[nr]=va(s);const r=i||s.props&&s.props.type==="number";is(n,t?"change":"input",o=>{o.target.composing||n[nr](yh(n.value,e,r))}),(e||r)&&is(n,"change",()=>{n.value=yh(n.value,e,r)}),t||(is(n,"compositionstart",n_),is(n,"compositionend",xh),is(n,"change",xh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[nr]=va(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?jc(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},i_={deep:!0,created(n,t,e){n[nr]=va(e),is(n,"change",()=>{const i=n._modelValue,s=s_(n),r=n.checked,o=n[nr];if(Bt(i)){const a=ld(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Pa(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(mp(n,r))})},mounted:Mh,beforeUpdate(n,t,e){n[nr]=va(e),Mh(n,t,e)}};function Mh(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Bt(t))s=ld(t,i.props.value)>-1;else if(Pa(t))s=t.has(i.props.value);else{if(t===e)return;s=ao(t,mp(n,!0))}n.checked!==s&&(n.checked=s)}function s_(n){return"_value"in n?n._value:n.value}function mp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const r_=["ctrl","shift","alt","meta"],o_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>r_.some(e=>n[`${e}Key`]&&!t.includes(e))},cl=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=o_[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},a_=Oe({patchProp:Q0},P0);let Sh;function l_(){return Sh||(Sh=u0(a_))}const c_=((...n)=>{const t=l_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=h_(i);if(!s)return;const r=t._component;!Kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,u_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function u_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function h_(n){return Te(n)?document.querySelector(n):n}function gp(n,t){return function(){return n.apply(t,arguments)}}const{toString:f_}=Object.prototype,{getPrototypeOf:lr}=Object,{iterator:uo,toStringTag:_p}=Symbol,xa=(({hasOwnProperty:n})=>(t,e)=>n.call(t,e))(Object.prototype),eo=(n,t)=>{let e=n;const i=[];for(;e!=null&&e!==Object.prototype;){if(i.indexOf(e)!==-1)return!1;if(i.push(e),xa(e,t))return!0;e=lr(e)}return!1},d_=(n,t)=>n!=null&&eo(n,t)?n[t]:void 0,au=(n=>t=>{const e=f_.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),Ln=n=>(n=n.toLowerCase(),t=>au(t)===n),ka=n=>t=>typeof t===n,{isArray:ds}=Array,ps=ka("undefined");function gr(n){return n!==null&&!ps(n)&&n.constructor!==null&&!ps(n.constructor)&&mn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const vp=Ln("ArrayBuffer");function p_(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&vp(n.buffer),t}const m_=ka("string"),mn=ka("function"),xp=ka("number"),_r=n=>n!==null&&typeof n=="object",g_=n=>n===!0||n===!1,ta=n=>{if(!_r(n))return!1;const t=lr(n);return(t===null||t===Object.prototype||lr(t)===null)&&!eo(n,_p)&&!eo(n,uo)},__=n=>{if(!_r(n)||gr(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},v_=Ln("Date"),x_=Ln("File"),y_=n=>!!(n&&typeof n.uri<"u"),M_=n=>n&&typeof n.getParts<"u",S_=Ln("Blob"),b_=Ln("FileList"),E_=Ln("Set"),w_=n=>_r(n)&&mn(n.pipe);function T_(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const bh=T_(),Eh=typeof bh.FormData<"u"?bh.FormData:void 0,A_=n=>{if(!n)return!1;if(Eh&&n instanceof Eh)return!0;const t=lr(n);if(!t||t===Object.prototype||!mn(n.append))return!1;const e=au(n);return e==="formdata"||e==="object"&&mn(n.toString)&&n.toString()==="[object FormData]"},R_=Ln("URLSearchParams"),[C_,P_,L_,I_]=["ReadableStream","Request","Response","Headers"].map(Ln),D_=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ho(n,t,{allOwnKeys:e=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),ds(n))for(i=0,s=n.length;i<s;i++)t.call(null,n[i],i,n);else{if(gr(n))return;const r=e?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],t.call(null,n[a],a,n)}}function yp(n,t){if(gr(n))return null;t=t.toLowerCase();const e=Object.keys(n);let i=e.length,s;for(;i-- >0;)if(s=e[i],t===s.toLowerCase())return s;return null}const os=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mp=n=>!ps(n)&&n!==os;function rc(...n){const{caseless:t,skipUndefined:e}=Mp(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=t&&typeof o=="string"&&yp(i,o)||o,l=xa(i,a)?i[a]:void 0;ta(l)&&ta(r)?i[a]=rc(l,r):ta(r)?i[a]=rc({},r):ds(r)?i[a]=r.slice():(!e||!ps(r))&&(i[a]=r)};for(let r=0,o=n.length;r<o;r++){const a=n[r];if(!a||gr(a)||(ho(a,s),typeof a!="object"||ds(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];X_.call(a,u)&&s(a[u],u)}}return i}const U_=(n,t,e,{allOwnKeys:i}={})=>(ho(t,(s,r)=>{e&&mn(s)?Object.defineProperty(n,r,{__proto__:null,value:gp(s,e),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),N_=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),O_=(n,t,e,i)=>{n.prototype=Object.create(t.prototype,i),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:t.prototype}),e&&Object.assign(n.prototype,e)},F_=(n,t,e,i)=>{let s,r,o;const a={};if(t=t||{},n==null)return t;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,t))&&!a[o]&&(t[o]=n[o],a[o]=!0);n=e!==!1&&lr(n)}while(n&&(!e||e(n,t))&&n!==Object.prototype);return t},B_=(n,t,e)=>{n=String(n),(e===void 0||e>n.length)&&(e=n.length),e-=t.length;const i=n.indexOf(t,e);return i!==-1&&i===e},z_=n=>{if(!n)return null;if(ds(n))return n;let t=n.length;if(!xp(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=n[t];return e},k_=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&lr(Uint8Array)),H_=(n,t)=>{const i=(n&&n[uo]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;t.call(n,r[0],r[1])}},V_=(n,t)=>{let e;const i=[];for(;(e=n.exec(t))!==null;)i.push(e);return i},G_=Ln("HTMLFormElement"),W_=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:X_}=Object.prototype,q_=Ln("RegExp"),Sp=(n,t)=>{const e=Object.getOwnPropertyDescriptors(n),i={};ho(e,(s,r)=>{let o;(o=t(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},j_=n=>{Sp(n,(t,e)=>{if(mn(n)&&["arguments","caller","callee"].includes(e))return!1;const i=n[e];if(mn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},Y_=(n,t)=>{const e={},i=s=>{s.forEach(r=>{e[r]=!0})};return ds(n)?i(n):i(String(n).split(t)),e},$_=()=>{},K_=(n,t)=>n!=null&&Number.isFinite(n=+n)?n:t;function Z_(n){return!!(n&&mn(n.append)&&n[_p]==="FormData"&&n[uo])}const J_=n=>{const t=new WeakSet,e=i=>{if(_r(i)){if(t.has(i))return;if(gr(i))return i;if(!("toJSON"in i)){t.add(i);let s;if(E_(i)){s=[];for(const r of i){const o=e(r);!ps(o)&&s.push(o)}}else s=ds(i)?[]:{},ho(i,(r,o)=>{const a=e(r);!ps(a)&&(s[o]=a)});return t.delete(i),s}}return i};return e(n)},Q_=Ln("AsyncFunction"),tv=n=>n&&(_r(n)||mn(n))&&mn(n.then)&&mn(n.catch),bp=((n,t)=>n?setImmediate:t?((e,i)=>(os.addEventListener("message",({source:s,data:r})=>{s===os&&r===e&&i.length&&i.shift()()},!1),s=>{i.push(s),os.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",mn(os.postMessage)),ev=typeof queueMicrotask<"u"?queueMicrotask.bind(os):typeof process<"u"&&process.nextTick||bp,Ep=n=>n!=null&&mn(n[uo]),nv=n=>n!=null&&eo(n,uo)&&Ep(n),k={isArray:ds,isArrayBuffer:vp,isBuffer:gr,isFormData:A_,isArrayBufferView:p_,isString:m_,isNumber:xp,isBoolean:g_,isObject:_r,isPlainObject:ta,isEmptyObject:__,isReadableStream:C_,isRequest:P_,isResponse:L_,isHeaders:I_,isUndefined:ps,isDate:v_,isFile:x_,isReactNativeBlob:y_,isReactNative:M_,isBlob:S_,isRegExp:q_,isFunction:mn,isStream:w_,isURLSearchParams:R_,isTypedArray:k_,isFileList:b_,forEach:ho,merge:rc,extend:U_,trim:D_,stripBOM:N_,inherits:O_,toFlatObject:F_,kindOf:au,kindOfTest:Ln,endsWith:B_,toArray:z_,forEachEntry:H_,matchAll:V_,isHTMLForm:G_,hasOwnProperty:xa,hasOwnProp:xa,hasOwnInPrototypeChain:eo,getSafeProp:d_,reduceDescriptors:Sp,freezeMethods:j_,toObjectSet:Y_,toCamelCase:W_,noop:$_,toFiniteNumber:K_,findKey:yp,global:os,isContextDefined:Mp,isSpecCompliantForm:Z_,toJSONObject:J_,isAsyncFn:Q_,isThenable:tv,setImmediate:bp,asap:ev,isIterable:Ep,isSafeIterable:nv},iv=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sv=n=>{const t={};let e,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),e=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim();const a=k.hasOwnProp(t,e);!e||a&&k.hasOwnProp(iv,e)||(e==="set-cookie"?a?t[e].push(i):t[e]=[i]:t[e]=a?t[e]+", "+i:i)}),t};function rv(n){let t=0,e=n.length;for(;t<e;){const i=n.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;e>t;){const i=n.charCodeAt(e-1);if(i!==9&&i!==32)break;e-=1}return t===0&&e===n.length?n:n.slice(t,e)}const ov=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),av=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function lu(n,t){return k.isArray(n)?n.map(e=>lu(e,t)):rv(String(n).replace(t,""))}const lv=n=>lu(n,ov),cv=n=>lu(n,av);function wp(n){const t=Object.create(null);return k.forEach(n.toJSON(),(e,i)=>{t[i]=cv(e)}),t}const wh=Symbol("internals");function Er(n){return n&&String(n).trim().toLowerCase()}function ea(n){return n===!1||n==null?n:k.isArray(n)?n.map(ea):lv(String(n))}function uv(n){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=e.exec(n);)t[i[1]]=i[2];return t}const hv=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function ul(n){let t=0,e=n.length;for(;t<e;){const i=n.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;e>t;){const i=n.charCodeAt(e-1);if(i!==9&&i!==32)break;e-=1}return t===0&&e===n.length?n:n.slice(t,e)}function fv(n){const t=n.length-1;if(t<1||n.charCodeAt(0)!==34||n.charCodeAt(t)!==34)return n;let e="";for(let i=1;i<t;i++){const s=n.charCodeAt(i);if(s===34||s===92&&(i+=1,i>=t))return n;e+=n[i]}return e}function dv(n){const t=Object.create(null),e=String(n);let i=0,s=!1,r=!1;function o(a){const l=ul(e.slice(i,a)),c=l.indexOf("=");if(c<1)return;const u=ul(l.slice(0,c));if(!hv.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=ul(l.slice(c+1));t[h]=fv(f)}for(let a=0;a<e.length;a++){const l=e.charCodeAt(a);s?r?r=!1:l===92?r=!0:l===34&&(s=!1):l===34?s=!0:(l===44||l===59)&&(o(a),i=a+1)}return o(e.length),t}const pv=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function hl(n,t,e,i,s){if(k.isFunction(i))return i.call(this,t,e);if(s&&(t=e),!!k.isString(t)){if(k.isString(i))return t.indexOf(i)!==-1;if(k.isRegExp(i))return i.test(t)}}function mv(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,i)=>e.toUpperCase()+i)}function gv(n,t){const e=k.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+e,{__proto__:null,value:function(s,r,o){return this[i].call(this,t,s,r,o)},configurable:!0})})}let nn=class{constructor(t){t&&this.set(t)}set(t,e,i){const s=this;function r(a,l,c){const u=Er(l);if(!u)return;const h=k.findKey(s,u);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||l]=ea(a))}const o=(a,l)=>k.forEach(a,(c,u)=>r(c,u,l));if(k.isPlainObject(t)||t instanceof this.constructor)o(t,e);else if(k.isString(t)&&(t=t.trim())&&!pv(t))o(sv(t),e);else if(k.isObject(t)&&k.isSafeIterable(t)){let a=Object.create(null),l,c;for(const u of t){if(!k.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],k.hasOwnProp(a,c)?(l=a[c],a[c]=k.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,e)}else t!=null&&r(e,t,i);return this}get(t,e){if(t=Er(t),t){const i=k.findKey(this,t);if(i){const s=this[i];if(!e)return s;if(e===!0)return uv(s);if(k.isFunction(e))return e.call(this,s,i);if(k.isRegExp(e))return e.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Er(t),t){const i=k.findKey(this,t);return!!(i&&this[i]!==void 0&&(!e||hl(this,this[i],i,e)))}return!1}delete(t,e){const i=this;let s=!1;function r(o){if(o=Er(o),o){const a=k.findKey(i,o);a&&(!e||hl(i,i[a],a,e))&&(delete i[a],s=!0)}}return k.isArray(t)?t.forEach(r):r(t),s}clear(t){const e=Object.keys(this);let i=e.length,s=!1;for(;i--;){const r=e[i];(!t||hl(this,this[r],r,t,!0))&&(delete this[r],s=!0)}return s}normalize(t){const e=this,i={};return k.forEach(this,(s,r)=>{const o=k.findKey(i,r);if(o){e[o]=ea(s),delete e[r];return}const a=t?mv(r):String(r).trim();a!==r&&delete e[r],e[a]=ea(s),i[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return k.forEach(this,(i,s)=>{i!=null&&i!==!1&&(e[s]=t&&k.isArray(i)?i.join(", "):i)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return k.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return dv(t)}static concat(t,...e){const i=new this(t);return e.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[wh]=this[wh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Er(o);i[a]||(gv(s,o),i[a]=!0)}return k.isArray(t)?t.forEach(r):r(t),this}};nn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(nn.prototype,({value:n},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(i){this[e]=i}}});k.freezeMethods(nn);const ya="[REDACTED ****]";function _v(n){if(k.hasOwnProp(n,"toJSON"))return!0;let t=Object.getPrototypeOf(n);for(;t&&t!==Object.prototype;){if(k.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function vv(n,t){const e=new Set(t.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||k.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof nn&&(r=r.toJSON()),i.push(r);let o;if(k.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);k.isUndefined(c)||(o[l]=c)});else{if(!k.isPlainObject(r)&&_v(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=e.has(a.toLowerCase())?ya:s(l);k.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(n)}function Th(n){try{return String(n)}catch{return""}}function xv(n){return n.errors.map(e=>{try{return e&&e.message?Th(e.message):Th(e)}catch{return""}}).filter(Boolean).join("; ")||n.name||"AggregateError"}let Et=class Tp extends Error{static from(t,e,i,s,r,o){let a=t.message;!a&&k.isArray(t.errors)&&t.errors.length&&(a=xv(t));const l=new Tp(a,e||t.code,i,s,r);return Object.defineProperty(l,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),o&&Object.assign(l,o),l}constructor(t,e,i,s,r){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,e&&(this.code=e),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const t=this.config,e=t&&k.hasOwnProp(t,"redact")?t.redact:void 0,i=k.isArray(e)&&e.length>0?vv(t,e):k.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Et.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Et.ERR_BAD_OPTION="ERR_BAD_OPTION";Et.ECONNABORTED="ECONNABORTED";Et.ETIMEDOUT="ETIMEDOUT";Et.ECONNREFUSED="ECONNREFUSED";Et.ERR_NETWORK="ERR_NETWORK";Et.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Et.ERR_DEPRECATED="ERR_DEPRECATED";Et.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Et.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Et.ERR_CANCELED="ERR_CANCELED";Et.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Et.ERR_INVALID_URL="ERR_INVALID_URL";Et.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const yv=null,Ap=100;function oc(n){return k.isPlainObject(n)||k.isArray(n)}function Rp(n){return k.endsWith(n,"[]")?n.slice(0,-2):n}function fl(n,t,e){return n?n.concat(t).map(function(s,r){return s=Rp(s),!e&&r?"["+s+"]":s}).join(e?".":""):t}function Mv(n){return k.isArray(n)&&!n.some(oc)}const Sv=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Ha(n,t,e){if(!k.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,e=k.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,y){return!k.isUndefined(y[M])});const i=e.metaTokens,s=e.visitor||g,r=e.dots,o=e.indexes,a=e.Blob||typeof Blob<"u"&&Blob,l=e.maxDepth===void 0?Ap:e.maxDepth,c=a&&k.isSpecCompliantForm(t),u=[];if(!k.isFunction(s))throw new TypeError("visitor must be a function");function h(d){if(d===null)return"";if(k.isDate(d))return d.toISOString();if(k.isBoolean(d))return d.toString();if(!c&&k.isBlob(d))throw new Et("Blob is not supported. Use a Buffer instead.");if(k.isArrayBuffer(d)||k.isTypedArray(d)){if(c&&typeof a=="function")return new a([d]);throw new Et("Blob is not supported. Use a Buffer instead.",Et.ERR_NOT_SUPPORT)}return d}function f(d){if(d>l)throw new Et("Object is too deeply nested ("+d+" levels). Max depth: "+l,Et.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(d,M){if(l===1/0)return JSON.stringify(d);const y=[];return JSON.stringify(d,function(P,R){if(!k.isObject(R))return R;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(R),f(M+y.length-1),R})}function g(d,M,y){let b=d;if(k.isReactNative(t)&&k.isReactNativeBlob(d))return t.append(fl(y,M,r),h(d)),!1;if(d&&!y&&typeof d=="object"){if(k.endsWith(M,"{}"))M=i?M:M.slice(0,-2),d=m(d,1);else if(k.isArray(d)&&Mv(d)||(k.isFileList(d)||k.endsWith(M,"[]"))&&(b=k.toArray(d)))return M=Rp(M),b.forEach(function(R,C){!(k.isUndefined(R)||R===null)&&t.append(o===!0?fl([M],C,r):o===null?M:M+"[]",h(R))}),!1}return oc(d)?!0:(t.append(fl(y,M,r),h(d)),!1)}const _=Object.assign(Sv,{defaultVisitor:g,convertValue:h,isVisitable:oc});function p(d,M,y=0){if(!k.isUndefined(d)){if(f(y),u.indexOf(d)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(d),k.forEach(d,function(P,R){(!(k.isUndefined(P)||P===null)&&s.call(t,P,k.isString(R)?R.trim():R,M,_))===!0&&p(P,M?M.concat(R):[R],y+1)}),u.pop()}}if(!k.isObject(n))throw new TypeError("data must be an object");return p(n),t}function Ah(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return t[i]})}function cu(n,t){this._pairs=[],n&&Ha(n,this,t)}const Cp=cu.prototype;Cp.append=function(t,e){this._pairs.push([t,e])};Cp.toString=function(t){const e=t?i=>t.call(this,i,Ah):Ah;return this._pairs.map(function(s){return e(s[0])+"="+e(s[1])},"").join("&")};function bv(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Pp(n,t,e){if(!t)return n;n=n||"";const i=k.isFunction(e)?{serialize:e}:e,s=k.getSafeProp(i,"encode")||bv,r=k.getSafeProp(i,"serialize");let o;if(r?o=r(t,i):o=k.isURLSearchParams(t)?t.toString():new cu(t,i).toString(s),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class Rh{constructor(){this.handlers=[]}use(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(i){i!==null&&t(i)})}}const uu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ev=typeof URLSearchParams<"u"?URLSearchParams:cu,wv=typeof FormData<"u"?FormData:null,Tv=typeof Blob<"u"?Blob:null,Av={isBrowser:!0,classes:{URLSearchParams:Ev,FormData:wv,Blob:Tv},protocols:["http","https","file","blob","url","data"]},hu=typeof window<"u"&&typeof document<"u",ac=typeof navigator=="object"&&navigator||void 0,Rv=hu&&(!ac||["ReactNative","NativeScript","NS"].indexOf(ac.product)<0),Cv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Pv=hu&&window.location.href||"http://localhost",Lv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hu,hasStandardBrowserEnv:Rv,hasStandardBrowserWebWorkerEnv:Cv,navigator:ac,origin:Pv},Symbol.toStringTag,{value:"Module"})),Xe={...Lv,...Av};function Iv(n,t){return Ha(n,new Xe.classes.URLSearchParams,{visitor:function(e,i,s,r){return Xe.isNode&&k.isBuffer(e)?(this.append(i,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}const Ch=Ap;function Lp(n){if(n>Ch)throw new Et("FormData field is too deeply nested ("+n+" levels). Max depth: "+Ch,Et.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Dv(n){const t=[],e=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=e.exec(n))!==null;)Lp(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function Uv(n){const t={},e=Object.keys(n);let i;const s=e.length;let r;for(i=0;i<s;i++)r=e[i],t[r]=n[r];return t}function Ip(n){function t(e,i,s,r){Lp(r);let o=e[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=e.length;return o=!o&&k.isArray(s)?s.length:o,l?(k.hasOwnProp(s,o)?s[o]=k.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!k.hasOwnProp(s,o)||!k.isObject(s[o]))&&(s[o]=[]),t(e,i,s[o],r)&&k.isArray(s[o])&&(s[o]=Uv(s[o])),!a)}if(k.isFormData(n)&&k.isFunction(n.entries)){const e={};return k.forEachEntry(n,(i,s)=>{t(Dv(i),s,e,0)}),e}return null}const Ts=(n,t)=>n!=null&&k.hasOwnProp(n,t)?n[t]:void 0;function Nv(n,t,e){if(k.isString(n))try{return(t||JSON.parse)(n),k.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(e||JSON.stringify)(n)}const fo={transitional:uu,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const i=e.getContentType()||"",s=i.indexOf("application/json")>-1,r=k.isObject(t);if(r&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return s?JSON.stringify(Ip(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(r){const l=Ts(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Iv(t,l).toString();if((a=k.isFileList(t))||i.indexOf("multipart/form-data")>-1){const c=Ts(this,"env"),u=c&&c.FormData;return Ha(a?{"files[]":t}:t,u&&new u,l)}}return r||s?(e.setContentType("application/json",!1),Nv(t)):t}],transformResponse:[function(t){const e=Ts(this,"transitional")||fo.transitional,i=e&&e.forcedJSONParsing,s=Ts(this,"responseType"),r=s==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(i&&!s||r)){const a=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t,Ts(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Et.from(l,Et.ERR_BAD_RESPONSE,this,null,Ts(this,"response")):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch","query"],n=>{fo.headers[n]={}});function dl(n,t){const e=this||fo,i=t||e,s=nn.from(i.headers);let r=i.data;return k.forEach(n,function(a){r=a.call(e,r,s.normalize(),t?t.status:void 0)}),s.normalize(),r}function Dp(n){return!!(n&&n.__CANCEL__)}let po=class extends Et{constructor(t,e,i){super(t??"canceled",Et.ERR_CANCELED,e,i),this.name="CanceledError",this.__CANCEL__=!0}};function Up(n,t,e){const i=e.config.validateStatus;!e.status||!i||i(e.status)?n(e):t(new Et("Request failed with status code "+e.status,e.status>=400&&e.status<500?Et.ERR_BAD_REQUEST:Et.ERR_BAD_RESPONSE,e.config,e.request,e))}function Ov(n){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return t&&t[1]||""}function Fv(n,t){n=n||10;const e=new Array(n),i=new Array(n);let s=0,r=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),e[s]=l,i[s]=c;let h=r,f=0;for(;h!==s;)f+=e[h++],h=h%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),c-o<t)return;const m=u&&c-u;return m?Math.round(f*1e3/m):void 0}}function Bv(n,t){let e=0,i=1e3/t,s,r;const o=(c,u=Date.now())=>{e=u,s=null,r&&(clearTimeout(r),r=null),n(...c)};return[(...c)=>{const u=Date.now(),h=u-e;h>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-h)))},()=>s&&o(s)]}const Ma=(n,t,e=3)=>{let i=0;const s=Fv(50,250);return Bv(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=Math.max(0,a!=null?Math.min(o,a):o),c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const h={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[t?"download":"upload"]:!0};n(h)},e)},Ph=(n,t)=>{const e=n!=null;return[i=>t[0]({lengthComputable:e,total:n,loaded:i}),t[1]]},Lh=(n,t=k.asap)=>(...e)=>t(()=>n(...e)),zv=Xe.hasStandardBrowserEnv?((n,t)=>e=>(e=new URL(e,Xe.origin),n.protocol===e.protocol&&n.host===e.host&&(t||n.port===e.port)))(new URL(Xe.origin),Xe.navigator&&/(msie|trident)/i.test(Xe.navigator.userAgent)):()=>!0,kv=Xe.hasStandardBrowserEnv?{write(n,t,e,i,s,r,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(t)}`];k.isNumber(e)&&a.push(`expires=${new Date(e).toUTCString()}`),k.isString(i)&&a.push(`path=${i}`),k.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),k.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const i=t[e].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===n)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Hv(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Vv(n,t){if(!t)return n;let e=n.length;for(;e>0&&n.charCodeAt(e-1)===47;)e--;return n.slice(0,e)+"/"+t.replace(/^\/+/,"")}const Gv=/^https?:(?!\/\/)/i,Wv=/[\t\n\r]/g;function Xv(n){let t=0;for(;t<n.length&&n.charCodeAt(t)<=32;)t++;return n.slice(t)}function qv(n){return Xv(n).replace(Wv,"")}function jv(n){return n&&n.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,e,i="")=>`${e}${i}${ya}`)}function Yv(n){const t=n.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${ya}@`),e=t.indexOf("#"),s=(e===-1?t:t.slice(0,e)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${ya}`);return e===-1?s:`${s}#${jv(t.slice(e+1))}`}function Ih(n,t){if(typeof n=="string"){const e=qv(n);if(Gv.test(e))throw new Et(`Invalid URL ${JSON.stringify(Yv(e))}: missing "//" after protocol`,Et.ERR_INVALID_URL,t)}}function Np(n,t,e,i){Ih(t,i);let s=!Hv(t);return n&&(s||e===!1)?(Ih(n,i),Vv(n,t)):t}const Dh=n=>n instanceof nn?{...n}:n,$v=n=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(n).concat(Object.getOwnPropertySymbols(n).filter(t=>Object.getOwnPropertyDescriptor(n,t).enumerable)):Object.keys(n);function ms(n,t){n=n||{},t=t||{};const e=Object.create(null);Object.defineProperty(e,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,h,f,m){return k.isPlainObject(u)&&k.isPlainObject(h)?k.merge.call({caseless:m},u,h):k.isPlainObject(h)?k.merge({},h):k.isArray(h)?h.slice():h}function s(u,h,f,m){if(k.isUndefined(h)){if(!k.isUndefined(u))return i(void 0,u,f,m)}else return i(u,h,f,m)}function r(u,h){if(!k.isUndefined(h))return i(void 0,h)}function o(u,h){if(k.isUndefined(h)){if(!k.isUndefined(u))return i(void 0,u)}else return i(void 0,h)}function a(u){const h=k.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!k.isUndefined(h))if(k.isPlainObject(h)){if(k.hasOwnProp(h,u))return h[u]}else return;const f=k.hasOwnProp(n,"transitional")?n.transitional:void 0;if(k.isPlainObject(f)&&k.hasOwnProp(f,u))return f[u]}function l(u,h,f){if(k.hasOwnProp(t,f))return i(u,h);if(k.hasOwnProp(n,f))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,h,f)=>s(Dh(u),Dh(h),f,!0)};return k.forEach($v({...n,...t}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=k.hasOwnProp(c,h)?c[h]:s,m=k.hasOwnProp(n,h)?n[h]:void 0,g=k.hasOwnProp(t,h)?t[h]:void 0,_=f(m,g,h);k.isUndefined(_)&&f!==l||(e[h]=_)}),k.hasOwnProp(t,"validateStatus")&&k.isUndefined(t.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(k.hasOwnProp(n,"validateStatus")?e.validateStatus=i(void 0,n.validateStatus):delete e.validateStatus),e}const Kv=["content-type","content-length"];function Zv(n,t,e){if(e!=="content-only"){n.set(t);return}Object.entries(t||{}).forEach(([i,s])=>{Kv.includes(i.toLowerCase())&&n.set(i,s)})}const Jv=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16)));function Op(n){const t=ms({},n),e=f=>k.hasOwnProp(t,f)?t[f]:void 0,i=e("data");let s=e("withXSRFToken");const r=e("xsrfHeaderName"),o=e("xsrfCookieName");let a=e("headers");const l=e("auth"),c=e("baseURL"),u=e("allowAbsoluteUrls"),h=e("url");if(t.headers=a=nn.from(a),t.url=Pp(Np(c,h,u,t),e("params"),e("paramsSerializer")),l){const f=k.getSafeProp(l,"username")||"",m=k.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(f+":"+(m?Jv(m):"")))}catch(g){throw Et.from(g,Et.ERR_BAD_OPTION_VALUE,n)}}if(k.isFormData(i)&&(Xe.hasStandardBrowserEnv||Xe.hasStandardBrowserWebWorkerEnv||k.isReactNative(i)?a.setContentType(void 0):k.isFunction(i.getHeaders)&&Zv(a,i.getHeaders(),e("formDataHeaderPolicy"))),Xe.hasStandardBrowserEnv&&(k.isFunction(s)&&(s=s(t)),s===!0||s==null&&zv(t.url))){const m=r&&o&&kv.read(o);m&&a.set(r,m)}return t}const Qv=typeof XMLHttpRequest<"u",tx=Qv&&function(n){return new Promise(function(e,i){const s=Op(n);let r=s.data;const o=nn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,h,f,m,g;function _(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function d(){if(!p)return;const y=nn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),P={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:y,config:n,request:p};Up(function(C){e(C),_()},function(C){i(C),_()},P),p=null}"onloadend"in p?p.onloadend=d:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(d)},p.onabort=function(){p&&(i(new Et("Request aborted",Et.ECONNABORTED,n,p)),_(),p=null)},p.onerror=function(b){const P=b&&b.message?b.message:"Network Error",R=new Et(P,Et.ERR_NETWORK,n,p);R.event=b||null,i(R),_(),p=null},p.ontimeout=function(){let b=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||uu;s.timeoutErrorMessage&&(b=s.timeoutErrorMessage),i(new Et(b,P.clarifyTimeoutError?Et.ETIMEDOUT:Et.ECONNABORTED,n,p)),_(),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&k.forEach(wp(o),function(b,P){p.setRequestHeader(P,b)}),k.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),c&&([f,g]=Ma(c,!0),p.addEventListener("progress",f)),l&&p.upload&&([h,m]=Ma(l),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=y=>{p&&(i(!y||y.type?new po(null,n,p):y),p.abort(),_(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=Ov(s.url);if(M&&!Xe.protocols.includes(M)){i(new Et("Unsupported protocol "+M+":",Et.ERR_BAD_REQUEST,n)),_();return}p.send(r||null)})},ex=(n,t)=>{if(n=n?n.filter(Boolean):[],!t&&!n.length)return;const e=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;e.abort(c instanceof Et?c:new po(c instanceof Error?c.message:c))}};let r=t&&setTimeout(()=>{r=null,s(new Et(`timeout of ${t}ms exceeded`,Et.ETIMEDOUT))},t);const o=()=>{n&&(r&&clearTimeout(r),r=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),n=null)};n.forEach(l=>{if(!i){if(l.aborted){s.call(l);return}l.addEventListener("abort",s,{once:!0})}});const{signal:a}=e;return a.unsubscribe=()=>k.asap(o),a},nx=function*(n,t){let e=n.byteLength;if(e<t){yield n;return}let i=0,s;for(;i<e;)s=i+t,yield n.slice(i,s),i=s},ix=async function*(n,t){for await(const e of sx(n))yield*nx(e,t)},sx=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const t=n.getReader();try{for(;;){const{done:e,value:i}=await t.read();if(e)break;yield i}}finally{await t.cancel()}},Uh=(n,t,e,i)=>{const s=ix(n,t);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let h=u.byteLength;if(e){let f=r+=h;e(f)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Nh=n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102,Fp=(n,t,e)=>t+2<e&&Nh(n.charCodeAt(t+1))&&Nh(n.charCodeAt(t+2)),Oh=n=>n<=57?n-48:(n&223)-55,rx=n=>n>=65&&n<=90||n>=97&&n<=122||n>=48&&n<=57||n===43||n===47||n===45||n===95,ox=n=>n===9||n===10||n===12||n===13||n===32,ax=n=>{const t=Math.floor(n/4),e=n%4;return t*3+(e===2?1:e===3?2:0)},lx=n=>{const t=n.length;let e=0;return t>0&&n.charCodeAt(t-1)===61&&(e++,t>1&&n.charCodeAt(t-2)===61&&e++),Math.floor((t-e)*3/4)},cx=n=>{const t=n.length;let e=0,i=0,s=!1;for(let r=0;r<t;r++){let o=n.charCodeAt(r);if(o===37&&Fp(n,r,t)&&(o=Oh(n.charCodeAt(r+1))*16+Oh(n.charCodeAt(r+2)),r+=2),!ox(o)){if(o===61){i++;continue}if(!rx(o)||i>0){s=!0;continue}e++}}return s||i>2||i>0&&(e+i)%4!==0||e%4===1?lx(n):ax(e)},ux=(n,t)=>{if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const e=n.indexOf(",");if(e<0)return 0;const i=n.slice(5,e),s=n.slice(e+1);if(/;base64/i.test(i))return t(s);let o=0;for(let a=0,l=s.length;a<l;a++){const c=s.charCodeAt(a);if(c===37&&Fp(s,a,l))o+=1,a+=2;else if(c<128)o+=1;else if(c<2048)o+=2;else if(c>=55296&&c<=56319&&a+1<l){const u=s.charCodeAt(a+1);u>=56320&&u<=57343?(o+=4,a++):o+=3}else o+=3}return o};function hx(n){const t=typeof n=="string"?n.indexOf("#"):-1;return ux(t===-1?n:n.slice(0,t),cx)}const fu="1.19.0",Fh=64*1024,{isFunction:So}=k,fx=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16))),Bh=n=>{if(!k.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},zh=(n,...t)=>{try{return!!n(...t)}catch{return!1}},dx=n=>{const t=n.indexOf("://");let e=n;return t!==-1&&(e=e.slice(t+3)),e.includes("@")||e.includes(":")},px=n=>{const t=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:e,TextEncoder:i}=t;n=k.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},n);const{fetch:s,Request:r,Response:o}=n,a=s?So(s):typeof fetch=="function",l=So(r),c=So(o);if(!a)return!1;const u=a&&So(e),h=a&&(typeof i=="function"?(d=>M=>d.encode(M))(new i):async d=>new Uint8Array(await new r(d).arrayBuffer())),f=l&&u&&zh(()=>{let d=!1;const M=new r(Xe.origin,{body:new e,method:"POST",get duplex(){return d=!0,"half"}}),y=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),d&&!y}),m=c&&u&&zh(()=>k.isReadableStream(new o("").body)),g={stream:m&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!g[d]&&(g[d]=(M,y)=>{let b=M&&M[d];if(b)return b.call(M);throw new Et(`Response type '${d}' is not supported`,Et.ERR_NOT_SUPPORT,y)})});const _=async d=>{if(d==null)return 0;if(k.isBlob(d))return d.size;if(k.isSpecCompliantForm(d))return(await new r(Xe.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(k.isArrayBufferView(d)||k.isArrayBuffer(d))return d.byteLength;if(k.isURLSearchParams(d)&&(d=d+""),k.isString(d))return(await h(d)).byteLength},p=async(d,M)=>{const y=k.toFiniteNumber(d.getContentLength());return y??_(M)};return async d=>{let{url:M,method:y,data:b,signal:P,cancelToken:R,timeout:C,onDownloadProgress:U,onUploadProgress:w,responseType:E,headers:I,withCredentials:D="same-origin",fetchOptions:H,maxContentLength:J,maxBodyLength:rt}=Op(d);const Y=k.isNumber(J)&&J>-1,et=k.isNumber(rt)&&rt>-1,q=ft=>k.hasOwnProp(d,ft)?d[ft]:void 0;let vt=s||fetch;E=E?(E+"").toLowerCase():"text";let xt=ex([P,R&&R.toAbortSignal()],C),_t=null;const Ct=xt&&xt.unsubscribe&&(()=>{xt.unsubscribe()});let Wt,lt=null;const mt=()=>new Et("Request body larger than maxBodyLength limit",Et.ERR_BAD_REQUEST,d,_t);try{let ft;const yt=q("auth");if(yt){const F=k.getSafeProp(yt,"username")||"",nt=k.getSafeProp(yt,"password")||"";ft={username:F,password:nt}}if(dx(M)){const F=new URL(M,Xe.origin);if(!ft&&(F.username||F.password)){const nt=Bh(F.username),at=Bh(F.password);ft={username:nt,password:at}}(F.username||F.password)&&(F.username="",F.password="",M=F.href)}if(ft&&(I.delete("authorization"),I.set("Authorization","Basic "+btoa(fx((ft.username||"")+":"+(ft.password||""))))),Y&&typeof M=="string"&&M.startsWith("data:")&&hx(M)>J)throw new Et("maxContentLength size of "+J+" exceeded",Et.ERR_BAD_RESPONSE,d,_t);if(et&&y!=="get"&&y!=="head"){const F=await _(b);if(typeof F=="number"&&isFinite(F)&&(Wt=F,F>rt))throw mt()}const Nt=et&&(k.isReadableStream(b)||k.isStream(b)),kt=(F,nt,at)=>Uh(F,Fh,ot=>{if(et&&ot>rt)throw lt=mt();nt&&nt(ot)},at);if(f&&y!=="get"&&y!=="head"&&(w||Nt)){if(Wt=Wt??await p(I,b),Wt!==0||Nt){let F=new r(M,{method:"POST",body:b,duplex:"half"}),nt;if(k.isFormData(b)&&(nt=F.headers.get("content-type"))&&I.setContentType(nt),F.body){const[at,ot]=w&&Ph(Wt,Ma(Lh(w)))||[];b=kt(F.body,at,ot)}}}else if(Nt&&!l&&u&&y!=="get"&&y!=="head")b=kt(b);else if(Nt&&l&&!f&&y!=="get"&&y!=="head")throw new Et("Stream request bodies are not supported by the current fetch implementation",Et.ERR_NOT_SUPPORT,d,_t);k.isString(D)||(D=D?"include":"omit");const Ht=l&&"credentials"in r.prototype;if(k.isFormData(b)){const F=I.getContentType();F&&/^multipart\/form-data/i.test(F)&&!/boundary=/i.test(F)&&I.delete("content-type")}I.set("User-Agent","axios/"+fu,!1);const re={...H,signal:xt,method:y.toUpperCase(),headers:wp(I.normalize()),body:b,duplex:"half",credentials:Ht?D:void 0};_t=l&&new r(M,re);let v=await(l?vt(_t,H):vt(M,re));const N=nn.from(v.headers);if(Y){const F=k.toFiniteNumber(N.getContentLength());if(F!=null&&F>J)throw new Et("maxContentLength size of "+J+" exceeded",Et.ERR_BAD_RESPONSE,d,_t)}const X=m&&(E==="stream"||E==="response");if(m&&v.body&&(U||Y||X&&Ct)){const F={};["status","statusText","headers"].forEach(B=>{F[B]=v[B]});const nt=k.toFiniteNumber(N.getContentLength()),[at,ot]=U&&Ph(nt,Ma(Lh(U),!0))||[];let T=0;const x=B=>{if(Y&&(T=B,T>J))throw new Et("maxContentLength size of "+J+" exceeded",Et.ERR_BAD_RESPONSE,d,_t);at&&at(B)};v=new o(Uh(v.body,Fh,x,()=>{ot&&ot(),Ct&&Ct()}),F)}E=E||"text";let st=await g[k.findKey(g,E)||"text"](v,d);if(Y&&!m&&!X){let F;if(st!=null&&(typeof st.byteLength=="number"?F=st.byteLength:typeof st.size=="number"?F=st.size:typeof st=="string"&&(F=typeof i=="function"?new i().encode(st).byteLength:st.length)),typeof F=="number"&&F>J)throw new Et("maxContentLength size of "+J+" exceeded",Et.ERR_BAD_RESPONSE,d,_t)}return!X&&Ct&&Ct(),await new Promise((F,nt)=>{Up(F,nt,{data:st,headers:nn.from(v.headers),status:v.status,statusText:v.statusText,config:d,request:_t})})}catch(ft){if(Ct&&Ct(),xt&&xt.aborted&&xt.reason instanceof Et){const yt=xt.reason;throw yt.config=d,_t&&(yt.request=_t),ft!==yt&&Object.defineProperty(yt,"cause",{__proto__:null,value:ft,writable:!0,enumerable:!1,configurable:!0}),yt}if(lt)throw _t&&!lt.request&&(lt.request=_t),lt;if(ft instanceof Et)throw _t&&!ft.request&&(ft.request=_t),ft;if(ft&&ft.name==="TypeError"&&/Load failed|fetch/i.test(ft.message)){const yt=new Et("Network Error",Et.ERR_NETWORK,d,_t,ft&&ft.response);throw Object.defineProperty(yt,"cause",{__proto__:null,value:ft.cause||ft,writable:!0,enumerable:!1,configurable:!0}),yt}throw Et.from(ft,ft&&ft.code,d,_t,ft&&ft.response)}}},mx=new Map,Bp=n=>{let t=n&&n.env||{};const{fetch:e,Request:i,Response:s}=t,r=[i,s,e];let o=r.length,a=o,l,c,u=mx;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:px(t)),u=c;return c};Bp();const du={http:yv,xhr:tx,fetch:{get:Bp}};k.forEach(du,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:t})}});const kh=n=>`- ${n}`,gx=n=>k.isFunction(n)||n===null||n===!1;function _x(n,t){n=k.isArray(n)?n:[n];const{length:e}=n;let i,s;const r={};for(let o=0;o<e;o++){i=n[o];let a;if(s=i,!gx(i)&&(s=du[(a=String(i)).toLowerCase()],s===void 0))throw new Et(`Unknown adapter '${a}'`);if(s&&(k.isFunction(s)||(s=s.get(t))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?o.length>1?`since :
`+o.map(kh).join(`
`):" "+kh(o[0]):"as no adapter specified";throw new Et("There is no suitable adapter to dispatch the request "+a,Et.ERR_NOT_SUPPORT)}return s}const zp={getAdapter:_x,adapters:du};function pl(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new po(null,n)}function ml(n){return pl(n),n.headers=nn.from(n.headers),n.data=dl.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),zp.getAdapter(n.adapter||fo.adapter,n)(n).then(function(i){pl(n),n.response=i;try{i.data=dl.call(n,n.transformResponse,i)}finally{delete n.response}return i.headers=nn.from(i.headers),i},function(i){if(!Dp(i)&&(pl(n),i&&i.response)){n.response=i.response;try{i.response.data=dl.call(n,n.transformResponse,i.response)}finally{delete n.response}i.response.headers=nn.from(i.response.headers)}return Promise.reject(i)})}const Va={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{Va[n]=function(i){return typeof i===n||"a"+(t<1?"n ":" ")+n}});const Hh={};Va.transitional=function(t,e,i){function s(r,o){return"[Axios v"+fu+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(t===!1)throw new Et(s(o," has been removed"+(e?" in "+e:"")),Et.ERR_DEPRECATED);return e&&!Hh[o]&&(Hh[o]=!0,console.warn(s(o," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(r,o,a):!0}};Va.spelling=function(t){return(e,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function vx(n,t,e){if(typeof n!="object"||n===null)throw new Et("options must be an object",Et.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(t,r)?t[r]:void 0;if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new Et("option "+r+" must be "+l,Et.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new Et("Unknown option "+r,Et.ERR_BAD_OPTION)}}const na={assertOptions:vx,validators:Va},Ye=na.validators;let fs=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Rh,response:new Rh}}async request(t,e){try{return await this._request(t,e)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=ms(this.defaults,e);const{transitional:i,paramsSerializer:s,headers:r}=e;i!==void 0&&na.assertOptions(i,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean),legacyInterceptorReqResOrdering:Ye.transitional(Ye.boolean),advertiseZstdAcceptEncoding:Ye.transitional(Ye.boolean),validateStatusUndefinedResolves:Ye.transitional(Ye.boolean)},!1),s!=null&&(k.isFunction(s)?e.paramsSerializer={serialize:s}:na.assertOptions(s,{encode:Ye.function,serialize:Ye.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),na.assertOptions(e,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let o=r&&k.merge(r.common,r[e.method]);r&&k.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),e.headers=nn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(e)===!1)return;l=l&&_.synchronous;const p=e.transitional||uu;p&&p.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,h=0,f;if(!l){const g=[ml.bind(this),void 0];for(g.unshift(...a),g.push(...c),f=g.length,u=Promise.resolve(e);h<f;)u=u.then(g[h++],g[h++]);return u}f=a.length;let m=e;for(;h<f;){const g=a[h++],_=a[h++];try{m=g?g(m):m}catch(p){if(!_){u=Promise.reject(p);break}try{const d=_.call(this,p);k.isThenable(d)&&(u=Promise.resolve(d).then(()=>ml.call(this,m)))}catch(d){u=Promise.reject(d)}break}}if(!u)try{u=ml.call(this,m)}catch(g){u=Promise.reject(g)}for(h=0,f=c.length;h<f;)u=u.then(c[h++],c[h++]);return u}getUri(t){t=ms(this.defaults,t);const e=Np(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Pp(e,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){fs.prototype[t]=function(e,i){return this.request(ms(i||{},{method:t,url:e,data:i&&k.hasOwnProp(i,"data")?i.data:void 0}))}});k.forEach(["post","put","patch","query"],function(t){function e(i){return function(r,o,a){return this.request(ms(a||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}fs.prototype[t]=e(),t!=="query"&&(fs.prototype[t+"Form"]=e(!0))});let xx=class kp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(r){e=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},t(function(r,o,a){i.reason||(i.reason=new po(r,o,a),e(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=i=>{t.abort(i)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new kp(function(s){t=s}),cancel:t}}};function yx(n){return function(e){return n.apply(null,e)}}function Mx(n){return k.isObject(n)&&n.isAxiosError===!0}const lc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(lc).forEach(([n,t])=>{lc[t]=n});function Hp(n){const t=new fs(n),e=gp(fs.prototype.request,t);return k.extend(e,fs.prototype,t,{allOwnKeys:!0}),k.extend(e,t,null,{allOwnKeys:!0}),e.create=function(s){return Hp(ms(n,s))},e}const ie=Hp(fo);ie.Axios=fs;ie.CanceledError=po;ie.CancelToken=xx;ie.isCancel=Dp;ie.VERSION=fu;ie.toFormData=Ha;ie.AxiosError=Et;ie.Cancel=ie.CanceledError;ie.all=function(t){return Promise.all(t)};ie.spread=yx;ie.isAxiosError=Mx;ie.mergeConfig=ms;ie.AxiosHeaders=nn;ie.formToJSON=n=>Ip(k.isHTMLForm(n)?new FormData(n):n);ie.getAdapter=zp.getAdapter;ie.HttpStatusCode=lc;ie.default=ie;const{Axios:KT,AxiosError:ZT,CanceledError:JT,isCancel:QT,CancelToken:tA,VERSION:eA,all:nA,Cancel:iA,isAxiosError:sA,spread:rA,toFormData:oA,AxiosHeaders:aA,HttpStatusCode:lA,formToJSON:cA,getAdapter:uA,mergeConfig:hA,create:fA}=ie;const pu="167",pi={ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sx=0,Vh=1,bx=2,Vp=1,Gp=2,ui=3,ki=0,hn=1,Ue=2,Fi=0,ir=1,cr=2,Gh=3,Wh=4,Ex=5,ss=100,wx=101,Tx=102,Ax=103,Rx=104,Cx=200,Px=201,Lx=202,Ix=203,cc=204,uc=205,Dx=206,Ux=207,Nx=208,Ox=209,Fx=210,Bx=211,zx=212,kx=213,Hx=214,Vx=0,Gx=1,Wx=2,Sa=3,Xx=4,qx=5,jx=6,Yx=7,Wp=0,$x=1,Kx=2,Bi=0,Zx=1,Jx=2,Qx=3,Xp=4,ty=5,ey=6,ny=7,qp=300,ur=301,hr=302,hc=303,fc=304,Ga=306,dc=1e3,as=1001,pc=1002,pn=1003,iy=1004,bo=1005,qe=1006,gl=1007,ls=1008,Si=1009,jp=1010,Yp=1011,no=1012,mu=1013,gs=1014,Zn=1015,mo=1016,gu=1017,_u=1018,fr=1020,$p=35902,Kp=1021,Zp=1022,zn=1023,Jp=1024,Qp=1025,sr=1026,dr=1027,vu=1028,xu=1029,tm=1030,yu=1031,Mu=1033,ia=33776,sa=33777,ra=33778,oa=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,yc=37492,Mc=37496,Sc=37808,bc=37809,Ec=37810,wc=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Ic=37818,Dc=37819,Uc=37820,Nc=37821,aa=36492,Oc=36494,Fc=36495,em=36283,Bc=36284,zc=36285,kc=36286,sy=3200,ry=3201,nm=0,oy=1,Oi="",Je="srgb",Vi="srgb-linear",Su="display-p3",Wa="display-p3-linear",ba="linear",Me="srgb",Ea="rec709",wa="p3",As=7680,Xh=519,ay=512,ly=513,cy=514,im=515,uy=516,hy=517,fy=518,dy=519,Hc=35044,sm=35048,qh="300 es",_i=2e3,Ta=2001;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const qr=Math.PI/180,pr=180/Math.PI;function vi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function bu(n,t){return(n%t+t)%t}function py(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function my(n,t,e){return n!==t?(e-n)/(t-n):0}function jr(n,t,e){return(1-e)*n+e*t}function gy(n,t,e,i){return jr(n,t,1-Math.exp(-e*i))}function _y(n,t=1){return t-Math.abs(bu(n,t*2)-t)}function vy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function xy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function yy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function My(n,t){return n+Math.random()*(t-n)}function Sy(n){return n*(.5-Math.random())}function by(n){n!==void 0&&(jh=n);let t=jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ey(n){return n*qr}function wy(n){return n*pr}function Ty(n){return(n&n-1)===0&&n!==0}function Ay(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ry(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cy(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:qr,RAD2DEG:pr,generateUUID:vi,clamp:We,euclideanModulo:bu,mapLinear:py,inverseLerp:my,lerp:jr,damp:gy,pingpong:_y,smoothstep:vy,smootherstep:xy,randInt:yy,randFloat:My,randFloatSpread:Sy,seededRandom:by,degToRad:Ey,radToDeg:wy,isPowerOfTwo:Ty,ceilPowerOfTwo:Ay,floorPowerOfTwo:Ry,setQuaternionFromProperEuler:Cy,normalize:me,denormalize:Fn};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,i,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],d=s[6],M=s[1],y=s[4],b=s[7],P=s[2],R=s[5],C=s[8];return r[0]=o*_+a*M+l*P,r[3]=o*p+a*y+l*R,r[6]=o*d+a*b+l*C,r[1]=c*_+u*M+h*P,r[4]=c*p+u*y+h*R,r[7]=c*d+u*b+h*C,r[2]=f*_+m*M+g*P,r[5]=f*p+m*y+g*R,r[8]=f*d+m*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=e*h+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_l.makeScale(t,e)),this}rotate(t){return this.premultiply(_l.makeRotation(-t)),this}translate(t,e){return this.premultiply(_l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new Jt;function rm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Py(){const n=io("canvas");return n.style.display="block",n}const Yh={};function rr(n){n in Yh||(Yh[n]=!0,console.warn(n))}function Ly(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const $h=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Vi]:{transfer:ba,primaries:Ea,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Je]:{transfer:Me,primaries:Ea,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wa]:{transfer:ba,primaries:wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Kh),fromReference:n=>n.applyMatrix3($h)},[Su]:{transfer:Me,primaries:wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Kh),fromReference:n=>n.applyMatrix3($h).convertLinearToSRGB()}},Iy=new Set([Vi,Wa]),fe={enabled:!0,_workingColorSpace:Vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Iy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=wr[t].toReference,s=wr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return wr[n].primaries},getTransfer:function(n){return n===Oi?ba:wr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(wr[t].luminanceCoefficients)}};function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rs;class Dy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=io("canvas")),Rs.width=t.width,Rs.height=t.height;const i=Rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=io("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=or(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(or(e[i]/255)*255):e[i]=or(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uy=0;class om{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xl(s[o].image)):r.push(xl(s[o]))}else r=xl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ny=0;class je extends ys{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=as,s=as,r=qe,o=ls,a=zn,l=Si,c=je.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=vi(),this.name="",this.source=new om(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dc:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dc:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=qp;je.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(m+1)/2,P=(d+1)/2,R=(u+f)/4,C=(h+_)/4,U=(g+p)/4;return y>b&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=C/i):b>P?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=U/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=C/r,s=U/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oy extends ys{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new om(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends Oy{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class am extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fy extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-a;const d=l*f+c*m+u*g+h*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),R=Math.atan2(P,d*M);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const b=a*M;if(l=l*p+f*b,c=c*p+m*b,u=u*p+g*b,h=h*p+_*b,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-a*m,t[e+2]=c*g+u*m+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yl.copy(this).projectOnVector(t),this.sub(yl)}reflect(t){return this.sub(yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yl=new O,Zh=new vs;class Ms{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),wo.subVectors(this.max,Tr),Cs.subVectors(t.a,Tr),Ps.subVectors(t.b,Tr),Ls.subVectors(t.c,Tr),Ai.subVectors(Ps,Cs),Ri.subVectors(Ls,Ps),Yi.subVectors(Cs,Ls);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Yi.z,Yi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Yi.z,0,-Yi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Yi.y,Yi.x,0];return!Ml(e,Cs,Ps,Ls,wo)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,Cs,Ps,Ls,wo))?!1:(To.crossVectors(Ai,Ri),e=[To.x,To.y,To.z],Ml(e,Cs,Ps,Ls,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new O,new O,new O,new O,new O,new O,new O,new O],Un=new O,Eo=new Ms,Cs=new O,Ps=new O,Ls=new O,Ai=new O,Ri=new O,Yi=new O,Tr=new O,wo=new O,To=new O,$i=new O;function Ml(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){$i.fromArray(n,r);const a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const By=new Ms,Ar=new O,Sl=new O;class go{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):By.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(Sl)),this.expandByPoint(Ar.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new O,bl=new O,Ao=new O,Ci=new O,El=new O,Ro=new O,wl=new O;class Eu{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){bl.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(bl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Ci.dot(this.direction),l=-Ci.dot(Ao),c=Ci.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bl).addScaledVector(Ao,f),m}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,i,s,r){El.subVectors(e,t),Ro.subVectors(i,t),wl.crossVectors(El,Ro);let o=this.direction.dot(wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(Ro.crossVectors(Ci,Ro));if(l<0)return null;const c=a*this.direction.dot(El.cross(Ci));if(c<0||l+c>o)return null;const u=-a*Ci.dot(wl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zy,t,ky)}lookAt(t,e,i){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Pi.crossVectors(i,xn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Pi.crossVectors(i,xn)),Pi.normalize(),Co.crossVectors(xn,Pi),s[0]=Pi.x,s[4]=Co.x,s[8]=xn.x,s[1]=Pi.y,s[5]=Co.y,s[9]=xn.y,s[2]=Pi.z,s[6]=Co.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],M=i[3],y=i[7],b=i[11],P=i[15],R=s[0],C=s[4],U=s[8],w=s[12],E=s[1],I=s[5],D=s[9],H=s[13],J=s[2],rt=s[6],Y=s[10],et=s[14],q=s[3],vt=s[7],xt=s[11],_t=s[15];return r[0]=o*R+a*E+l*J+c*q,r[4]=o*C+a*I+l*rt+c*vt,r[8]=o*U+a*D+l*Y+c*xt,r[12]=o*w+a*H+l*et+c*_t,r[1]=u*R+h*E+f*J+m*q,r[5]=u*C+h*I+f*rt+m*vt,r[9]=u*U+h*D+f*Y+m*xt,r[13]=u*w+h*H+f*et+m*_t,r[2]=g*R+_*E+p*J+d*q,r[6]=g*C+_*I+p*rt+d*vt,r[10]=g*U+_*D+p*Y+d*xt,r[14]=g*w+_*H+p*et+d*_t,r[3]=M*R+y*E+b*J+P*q,r[7]=M*C+y*I+b*rt+P*vt,r[11]=M*U+y*D+b*Y+P*xt,r[15]=M*w+y*H+b*et+P*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+_*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],M=h*p*c-_*f*c+_*l*m-a*p*m-h*l*d+a*f*d,y=g*f*c-u*p*c-g*l*m+o*p*m+u*l*d-o*f*d,b=u*_*c-g*h*c+g*a*m-o*_*m-u*a*d+o*h*d,P=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,R=e*M+i*y+s*b+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=M*C,t[1]=(_*f*r-h*p*r-_*s*m+i*p*m+h*s*d-i*f*d)*C,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*d+i*l*d)*C,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*C,t[4]=y*C,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*d+e*f*d)*C,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*d-e*l*d)*C,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*m+e*l*m)*C,t[8]=b*C,t[9]=(g*h*r-u*_*r-g*i*m+e*_*m+u*i*d-e*h*d)*C,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*C,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*C,t[12]=P*C,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*p+e*h*p)*C,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*C,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,g=r*h,_=o*u,p=o*h,d=a*h,M=l*c,y=l*u,b=l*h,P=i.x,R=i.y,C=i.z;return s[0]=(1-(_+d))*P,s[1]=(m+b)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(f+d))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(g+y)*C,s[9]=(p-M)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);const c=1/r,u=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,e.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=_i){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let m,g;if(a===_i)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ta)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=_i){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,m=(i+s)*u;let g,_;if(a===_i)g=(o+r)*h,_=-2*h;else if(a===Ta)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Is=new O,Nn=new _e,zy=new O(0,0,0),ky=new O(1,1,1),Pi=new O,Co=new O,xn=new O,Jh=new _e,Qh=new vs;class Gn{constructor(t=0,e=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hy=0;const tf=new O,Ds=new vs,oi=new _e,Po=new O,Rr=new O,Vy=new O,Gy=new vs,ef=new O(1,0,0),nf=new O(0,1,0),sf=new O(0,0,1),rf={type:"added"},Wy={type:"removed"},Us={type:"childadded",child:null},Tl={type:"childremoved",child:null};class Ne extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new O,e=new Gn,i=new vs,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(ef,t)}rotateY(t){return this.rotateOnAxis(nf,t)}rotateZ(t){return this.rotateOnAxis(sf,t)}translateOnAxis(t,e){return tf.copy(t).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ef,t)}translateY(t){return this.translateOnAxis(nf,t)}translateZ(t){return this.translateOnAxis(sf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Po.copy(t):Po.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Rr,Po,this.up):oi.lookAt(Po,Rr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(oi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rf),Us.child=t,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wy),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rf),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,Vy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Gy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new O(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new O,ai=new O,Al=new O,li=new O,Ns=new O,Os=new O,of=new O,Rl=new O,Cl=new O,Pl=new O;class Bn{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),On.subVectors(t,e),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){On.subVectors(s,e),ai.subVectors(i,e),Al.subVectors(t,e);const o=On.dot(On),a=On.dot(ai),l=On.dot(Al),c=ai.dot(ai),u=ai.dot(Al),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static isFrontFacing(t,e,i,s){return On.subVectors(i,e),ai.subVectors(t,e),On.cross(ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ns.subVectors(s,i),Os.subVectors(r,i),Rl.subVectors(t,i);const l=Ns.dot(Rl),c=Os.dot(Rl);if(l<=0&&c<=0)return e.copy(i);Cl.subVectors(t,s);const u=Ns.dot(Cl),h=Os.dot(Cl);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ns,o);Pl.subVectors(t,r);const m=Ns.dot(Pl),g=Os.dot(Pl);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Os,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return of.subVectors(r,s),a=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(of,a);const d=1/(p+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Ns,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Ll(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ne{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=fe.workingColorSpace){if(t=bu(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ll(o,r,t+1/3),this.g=Ll(o,r,t),this.b=Ll(o,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=lm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=vl(t.r),this.g=vl(t.g),this.b=vl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return fe.fromWorkingColorSpace(Ke.copy(this),t),Math.round(We(Ke.r*255,0,255))*65536+Math.round(We(Ke.g*255,0,255))*256+Math.round(We(Ke.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(Ke.copy(this),e);const i=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Je){fe.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,s=Ke.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Lo);const i=jr(Li.h,Lo.h,e),s=jr(Li.s,Lo.s,e),r=jr(Li.l,Lo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new ne;ne.NAMES=lm;let Xy=0;class vr extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ir,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=uc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cc&&(i.blendSrc=this.blendSrc),this.blendDst!==uc&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class we extends vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new O,Io=new It;class Cn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return rr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Io.fromBufferAttribute(this,e),Io.applyMatrix3(t),this.setXY(e,Io.x,Io.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}}class cm extends Cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class um extends Cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ee extends Cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qy=0;const wn=new _e,Il=new Ne,Fs=new O,yn=new Ms,Cr=new Ms,ze=new O;class gn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rm(t)?um:cm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return Il.lookAt(t),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(yn.min,Cr.min),yn.expandByPoint(ze),ze.addVectors(yn.max,Cr.max),yn.expandByPoint(ze)):(yn.expandByPoint(Cr.min),yn.expandByPoint(Cr.max))}yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(t,c),ze.add(Fs)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new O,l[U]=new O;const c=new O,u=new O,h=new O,f=new It,m=new It,g=new It,_=new O,p=new O;function d(U,w,E){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),a[U].add(_),a[w].add(_),a[E].add(_),l[U].add(p),l[w].add(p),l[E].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let U=0,w=M.length;U<w;++U){const E=M[U],I=E.start,D=E.count;for(let H=I,J=I+D;H<J;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new O,b=new O,P=new O,R=new O;function C(U){P.fromBufferAttribute(s,U),R.copy(P);const w=a[U];y.copy(w),y.sub(P.multiplyScalar(P.dot(w))).normalize(),b.crossVectors(R,w);const I=b.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,I)}for(let U=0,w=M.length;U<w;++U){const E=M[U],I=E.start,D=E.count;for(let H=I,J=I+D;H<J;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new Cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new _e,Ki=new Eu,Do=new go,lf=new O,Bs=new O,zs=new O,ks=new O,Dl=new O,Uo=new O,No=new It,Oo=new It,Fo=new It,cf=new O,uf=new O,hf=new O,Bo=new O,zo=new O;class ut extends Ne{constructor(t=new gn,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Dl.fromBufferAttribute(h,t),o?Uo.addScaledVector(Dl,u):Uo.addScaledVector(Dl.sub(e),u))}e.add(Uo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(Do.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Do,lf)===null||Ki.origin.distanceToSquared(lf)>(t.far-t.near)**2))&&(af.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(af),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,P=y;b<P;b+=3){const R=a.getX(b),C=a.getX(b+1),U=a.getX(b+2);s=ko(this,d,t,i,c,u,h,R,C,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=a.getX(p),y=a.getX(p+1),b=a.getX(p+2);s=ko(this,o,t,i,c,u,h,M,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,P=y;b<P;b+=3){const R=b,C=b+1,U=b+2;s=ko(this,d,t,i,c,u,h,R,C,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=p,y=p+1,b=p+2;s=ko(this,o,t,i,c,u,h,M,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function jy(n,t,e,i,s,r,o,a){let l;if(t.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ki,a),l===null)return null;zo.copy(a),zo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:n}}function ko(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Bs),n.getVertexPosition(l,zs),n.getVertexPosition(c,ks);const u=jy(n,t,e,i,Bs,zs,ks,Bo);if(u){s&&(No.fromBufferAttribute(s,a),Oo.fromBufferAttribute(s,l),Fo.fromBufferAttribute(s,c),u.uv=Bn.getInterpolation(Bo,Bs,zs,ks,No,Oo,Fo,new It)),r&&(No.fromBufferAttribute(r,a),Oo.fromBufferAttribute(r,l),Fo.fromBufferAttribute(r,c),u.uv1=Bn.getInterpolation(Bo,Bs,zs,ks,No,Oo,Fo,new It)),o&&(cf.fromBufferAttribute(o,a),uf.fromBufferAttribute(o,l),hf.fromBufferAttribute(o,c),u.normal=Bn.getInterpolation(Bo,Bs,zs,ks,cf,uf,hf,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Bn.getNormal(Bs,zs,ks,h.normal),u.face=h}return u}class se extends gn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(h,2));function g(_,p,d,M,y,b,P,R,C,U,w){const E=b/C,I=P/U,D=b/2,H=P/2,J=R/2,rt=C+1,Y=U+1;let et=0,q=0;const vt=new O;for(let xt=0;xt<Y;xt++){const _t=xt*I-H;for(let Ct=0;Ct<rt;Ct++){const Wt=Ct*E-D;vt[_]=Wt*M,vt[p]=_t*y,vt[d]=J,c.push(vt.x,vt.y,vt.z),vt[_]=0,vt[p]=0,vt[d]=R>0?1:-1,u.push(vt.x,vt.y,vt.z),h.push(Ct/C),h.push(1-xt/U),et+=1}}for(let xt=0;xt<U;xt++)for(let _t=0;_t<C;_t++){const Ct=f+_t+rt*xt,Wt=f+_t+rt*(xt+1),lt=f+(_t+1)+rt*(xt+1),mt=f+(_t+1)+rt*xt;l.push(Ct,Wt,mt),l.push(Wt,lt,mt),q+=6}a.addGroup(m,q,w),m+=q,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function on(n){const t={};for(let e=0;e<n.length;e++){const i=mr(n[e]);for(const s in i)t[s]=i[s]}return t}function Yy(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const $y={clone:mr,merge:on};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Yy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}let fm=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ii=new O,ff=new It,df=new It;class dn extends fm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,ff,df),e.subVectors(df,ff)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hs=-90,Vs=1;class dm extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Hs,Vs,t,e);s.layers=this.layers,this.add(s);const r=new dn(Hs,Vs,t,e);r.layers=this.layers,this.add(r);const o=new dn(Hs,Vs,t,e);o.layers=this.layers,this.add(o);const a=new dn(Hs,Vs,t,e);a.layers=this.layers,this.add(a);const l=new dn(Hs,Vs,t,e);l.layers=this.layers,this.add(l);const c=new dn(Hs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class pm extends je{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mm extends _s{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Fi});r.uniforms.tEquirect.value=e;const o=new ut(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=qe),new dm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Ul=new O,Jy=new O,Qy=new Jt;class Ni{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ul.subVectors(i,e).cross(Jy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qy.getNormalMatrix(t),s=this.coplanarPoint(Ul).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new go,Ho=new O;class Tu{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],M=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,p-m,b-d).normalize(),i[1].setComponents(l+r,f+c,p+m,b+d).normalize(),i[2].setComponents(l+o,f+u,p+g,b+M).normalize(),i[3].setComponents(l-o,f-u,p-g,b-M).normalize(),i[4].setComponents(l-a,f-h,p-_,b-y).normalize(),e===_i)i[5].setComponents(l+a,f+h,p+_,b+y).normalize();else if(e===Ta)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ho.x=s.normal.x>0?t.max.x:t.min.x,Ho.y=s.normal.y>0?t.max.y:t.min.y,Ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function tM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let m=0,g=f.length;m<g;m++){const _=f[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Pe extends gn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const M=d*f-o;for(let y=0;y<c;y++){const b=y*h-r;g.push(b,-M,0),_.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+c*d,b=M+c*(d+1),P=M+1+c*(d+1),R=M+1+c*d;m.push(y,b,R),m.push(b,P,R)}this.setIndex(m),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
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
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
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
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM=`#ifdef USE_BATCHING
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
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pM=`#ifdef USE_IRIDESCENCE
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
#endif`,mM=`#ifdef USE_BUMPMAP
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,EM=`#define PI 3.141592653589793
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
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TM=`vec3 transformedNormal = objectNormal;
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
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`
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
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
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
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
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
#endif`,QM=`struct PhysicalMaterial {
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
}`,tS=`
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uS=`#if defined( USE_POINTS_UV )
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
#endif`,hS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,_S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bS=`#ifdef USE_NORMALMAP
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
#endif`,ES=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,US=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zS=`float getShadowMask() {
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
}`,kS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eb=`uniform sampler2D t2D;
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
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
}`,ab=`#if DEPTH_PACKING == 3200
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
}`,lb=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
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
}`,db=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,vb=`#define MATCAP
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
}`,xb=`#define MATCAP
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
}`,yb=`#define NORMAL
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
}`,Mb=`#define NORMAL
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
}`,Sb=`#define PHONG
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
}`,bb=`#define PHONG
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
}`,Eb=`#define STANDARD
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
}`,wb=`#define STANDARD
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
}`,Tb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,Rb=`uniform float size;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Pb=`#include <common>
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
}`,Lb=`uniform vec3 color;
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
}`,Ib=`uniform float rotation;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:eM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:sM,alphatest_fragment:rM,alphatest_pars_fragment:oM,aomap_fragment:aM,aomap_pars_fragment:lM,batching_pars_vertex:cM,batching_vertex:uM,begin_vertex:hM,beginnormal_vertex:fM,bsdfs:dM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:gM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:vM,clipping_planes_vertex:xM,color_fragment:yM,color_pars_fragment:MM,color_pars_vertex:SM,color_vertex:bM,common:EM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:TM,displacementmap_pars_vertex:AM,displacementmap_vertex:RM,emissivemap_fragment:CM,emissivemap_pars_fragment:PM,colorspace_fragment:LM,colorspace_pars_fragment:IM,envmap_fragment:DM,envmap_common_pars_fragment:UM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:jM,envmap_vertex:FM,fog_vertex:BM,fog_pars_vertex:zM,fog_fragment:kM,fog_pars_fragment:HM,gradientmap_pars_fragment:VM,lightmap_pars_fragment:GM,lights_lambert_fragment:WM,lights_lambert_pars_fragment:XM,lights_pars_begin:qM,lights_toon_fragment:YM,lights_toon_pars_fragment:$M,lights_phong_fragment:KM,lights_phong_pars_fragment:ZM,lights_physical_fragment:JM,lights_physical_pars_fragment:QM,lights_fragment_begin:tS,lights_fragment_maps:eS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:sS,logdepthbuf_pars_vertex:rS,logdepthbuf_vertex:oS,map_fragment:aS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:hS,metalnessmap_pars_fragment:fS,morphinstance_vertex:dS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:_S,normal_fragment_begin:vS,normal_fragment_maps:xS,normal_pars_fragment:yS,normal_pars_vertex:MS,normal_vertex:SS,normalmap_pars_fragment:bS,clearcoat_normal_fragment_begin:ES,clearcoat_normal_fragment_maps:wS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:AS,opaque_fragment:RS,packing:CS,premultiplied_alpha_fragment:PS,project_vertex:LS,dithering_fragment:IS,dithering_pars_fragment:DS,roughnessmap_fragment:US,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:FS,shadowmap_vertex:BS,shadowmask_pars_fragment:zS,skinbase_vertex:kS,skinning_pars_vertex:HS,skinning_vertex:VS,skinnormal_vertex:GS,specularmap_fragment:WS,specularmap_pars_fragment:XS,tonemapping_fragment:qS,tonemapping_pars_fragment:jS,transmission_fragment:YS,transmission_pars_fragment:$S,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:JS,worldpos_vertex:QS,background_vert:tb,background_frag:eb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:sb,cube_frag:rb,depth_vert:ob,depth_frag:ab,distanceRGBA_vert:lb,distanceRGBA_frag:cb,equirect_vert:ub,equirect_frag:hb,linedashed_vert:fb,linedashed_frag:db,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:_b,meshmatcap_vert:vb,meshmatcap_frag:xb,meshnormal_vert:yb,meshnormal_frag:Mb,meshphong_vert:Sb,meshphong_frag:bb,meshphysical_vert:Eb,meshphysical_frag:wb,meshtoon_vert:Tb,meshtoon_frag:Ab,points_vert:Rb,points_frag:Cb,shadow_vert:Pb,shadow_frag:Lb,sprite_vert:Ib,sprite_frag:Db},bt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Yn={basic:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:on([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:on([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:on([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:on([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:on([bt.points,bt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:on([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:on([bt.common,bt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:on([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:on([bt.sprite,bt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:on([bt.common,bt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:on([bt.lights,bt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Yn.physical={uniforms:on([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Vo={r:0,b:0,g:0},Ji=new Gn,Ub=new _e;function Nb(n,t,e,i,s,r,o){const a=new ne(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const b=g(M);b===null?d(a,l):b&&b.isColor&&(d(b,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Ga)?(u===void 0&&(u=new ut(new se(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:mr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ji.copy(y.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(Ji)),u.material.toneMapped=fe.getTransfer(b.colorSpace)!==Me,(h!==b||f!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,m=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ut(new Pe(2,2),new Hi({name:"BackgroundMaterial",uniforms:mr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=fe.getTransfer(b.colorSpace)!==Me,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,y){M.getRGB(Vo,hm(n)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:p}}function Ob(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,I,D,H,J){let rt=!1;const Y=h(H,D,I);r!==Y&&(r=Y,c(r.object)),rt=m(E,H,D,J),rt&&g(E,H,D,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,b(E,I,D,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,I,D){const H=D.wireframe===!0;let J=i[E.id];J===void 0&&(J={},i[E.id]=J);let rt=J[I.id];rt===void 0&&(rt={},J[I.id]=rt);let Y=rt[H];return Y===void 0&&(Y=f(l()),rt[H]=Y),Y}function f(E){const I=[],D=[],H=[];for(let J=0;J<e;J++)I[J]=0,D[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:H,object:E,attributes:{},index:null}}function m(E,I,D,H){const J=r.attributes,rt=I.attributes;let Y=0;const et=D.getAttributes();for(const q in et)if(et[q].location>=0){const xt=J[q];let _t=rt[q];if(_t===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(_t=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(_t=E.instanceColor)),xt===void 0||xt.attribute!==_t||_t&&xt.data!==_t.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(E,I,D,H){const J={},rt=I.attributes;let Y=0;const et=D.getAttributes();for(const q in et)if(et[q].location>=0){let xt=rt[q];xt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(xt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(xt=E.instanceColor));const _t={};_t.attribute=xt,xt&&xt.data&&(_t.data=xt.data),J[q]=_t,Y++}r.attributes=J,r.attributesNum=Y,r.index=H}function _(){const E=r.newAttributes;for(let I=0,D=E.length;I<D;I++)E[I]=0}function p(E){d(E,0)}function d(E,I){const D=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;D[E]=1,H[E]===0&&(n.enableVertexAttribArray(E),H[E]=1),J[E]!==I&&(n.vertexAttribDivisor(E,I),J[E]=I)}function M(){const E=r.newAttributes,I=r.enabledAttributes;for(let D=0,H=I.length;D<H;D++)I[D]!==E[D]&&(n.disableVertexAttribArray(D),I[D]=0)}function y(E,I,D,H,J,rt,Y){Y===!0?n.vertexAttribIPointer(E,I,D,J,rt):n.vertexAttribPointer(E,I,D,H,J,rt)}function b(E,I,D,H){_();const J=H.attributes,rt=D.getAttributes(),Y=I.defaultAttributeValues;for(const et in rt){const q=rt[et];if(q.location>=0){let vt=J[et];if(vt===void 0&&(et==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),et==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor)),vt!==void 0){const xt=vt.normalized,_t=vt.itemSize,Ct=t.get(vt);if(Ct===void 0)continue;const Wt=Ct.buffer,lt=Ct.type,mt=Ct.bytesPerElement,ft=lt===n.INT||lt===n.UNSIGNED_INT||vt.gpuType===mu;if(vt.isInterleavedBufferAttribute){const yt=vt.data,Nt=yt.stride,kt=vt.offset;if(yt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<q.locationSize;Ht++)d(q.location+Ht,yt.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Ht=0;Ht<q.locationSize;Ht++)p(q.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let Ht=0;Ht<q.locationSize;Ht++)y(q.location+Ht,_t/q.locationSize,lt,xt,Nt*mt,(kt+_t/q.locationSize*Ht)*mt,ft)}else{if(vt.isInstancedBufferAttribute){for(let yt=0;yt<q.locationSize;yt++)d(q.location+yt,vt.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let yt=0;yt<q.locationSize;yt++)p(q.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let yt=0;yt<q.locationSize;yt++)y(q.location+yt,_t/q.locationSize,lt,xt,_t*mt,_t/q.locationSize*yt*mt,ft)}}else if(Y!==void 0){const xt=Y[et];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(q.location,xt);break;case 3:n.vertexAttrib3fv(q.location,xt);break;case 4:n.vertexAttrib4fv(q.location,xt);break;default:n.vertexAttrib1fv(q.location,xt)}}}}M()}function P(){U();for(const E in i){const I=i[E];for(const D in I){const H=I[D];for(const J in H)u(H[J].object),delete H[J];delete I[D]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const I=i[E.id];for(const D in I){const H=I[D];for(const J in H)u(H[J].object),delete H[J];delete I[D]}delete i[E.id]}function C(E){for(const I in i){const D=i[I];if(D[E.id]===void 0)continue;const H=D[E.id];for(const J in H)u(H[J].object),delete H[J];delete D[E.id]}}function U(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Fb(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,i,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bb(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==zn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===mo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Si&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Zn&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:b,maxSamples:P}}function zb(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ni,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,y=M*4;let b=d.clippingState||null;l.value=b,b=u(g,f,y,m);for(let P=0;P!==y;++P)b[P]=e[P];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,b=m;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function kb(n){let t=new WeakMap;function e(o,a){return a===hc?o.mapping=ur:a===fc&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hc||a===fc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mm(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Hb extends fm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,pf=[.125,.215,.35,.446,.526,.582],rs=20,Nl=new Hb,mf=new ne;let Ol=null,Fl=0,Bl=0,zl=!1;const es=(1+Math.sqrt(5))/2,Gs=1/es,gf=[new O(-es,Gs,0),new O(es,Gs,0),new O(-Gs,0,es),new O(Gs,0,es),new O(0,es,-Gs),new O(0,es,Gs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class _f{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ol=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Fl,Bl),this._renderer.xr.enabled=zl,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:mo,format:zn,colorSpace:Vi,depthBuffer:!1},s=vf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vb(r)),this._blurMaterial=Gb(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Nl)}_sceneToCubeUV(t,e,i,s){const a=new dn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(mf),u.toneMapping=Bi,u.autoClear=!1;const m=new we({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new ut(new se,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(mf),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;Go(s,M*y,d>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ur||t.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Go(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Nl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gf[(s-r-1)%gf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*rs-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):rs;p>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rs}`);const d=[];let M=0;for(let C=0;C<rs;++C){const U=C/_,w=Math.exp(-U*U/2);d.push(w),C===0?M+=w:C<p&&(M+=2*w)}for(let C=0;C<d.length;C++)d[C]=d[C]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const b=this._sizeLods[s],P=3*b*(s>y-Ks?s-y+Ks:0),R=4*(this._cubeSize-b);Go(e,P,R,3*b,2*b),l.setRenderTarget(e),l.render(h,Nl)}}function Vb(n){const t=[],e=[],i=[];let s=n;const r=n-Ks+1+pf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ks?l=pf[o-n+Ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,M=new Float32Array(_*g*m),y=new Float32Array(p*g*m),b=new Float32Array(d*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,U=R>2?0:-1,w=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];M.set(w,_*g*R),y.set(f,p*g*R);const E=[R,R,R,R,R,R];b.set(E,d*g*R)}const P=new gn;P.setAttribute("position",new Cn(M,_)),P.setAttribute("uv",new Cn(y,p)),P.setAttribute("faceIndex",new Cn(b,d)),t.push(P),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vf(n,t,e){const i=new _s(n,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Gb(n,t,e){const i=new Float32Array(rs),s=new O(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function xf(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function yf(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}function Wb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hc||l===fc,u=l===ur||l===hr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new _f(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new _f(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Xb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qb(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let y=0,b=M.length;y<b;y+=3){const P=M[y+0],R=M[y+1],C=M[y+2];f.push(P,R,R,C,C,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const P=y+0,R=y+1,C=y+2;f.push(P,R,R,C,C,P)}}else return;const p=new(rm(f)?um:cm)(f,1);p.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jb(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*o,g),e.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,i,1)}function h(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=m[M];for(let M=0;M<_.length;M++)e.update(d,i,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $b(n,t,e){const i=new WeakMap,s=new be;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let P=a.attributes.position.count*b,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*R*4*h),U=new am(C,P,R,h);U.type=Zn,U.needsUpdate=!0;const w=b*4;for(let I=0;I<h;I++){const D=d[I],H=M[I],J=y[I],rt=P*R*4*I;for(let Y=0;Y<D.count;Y++){const et=Y*w;g===!0&&(s.fromBufferAttribute(D,Y),C[rt+et+0]=s.x,C[rt+et+1]=s.y,C[rt+et+2]=s.z,C[rt+et+3]=0),_===!0&&(s.fromBufferAttribute(H,Y),C[rt+et+4]=s.x,C[rt+et+5]=s.y,C[rt+et+6]=s.z,C[rt+et+7]=0),p===!0&&(s.fromBufferAttribute(J,Y),C[rt+et+8]=s.x,C[rt+et+9]=s.y,C[rt+et+10]=s.z,C[rt+et+11]=J.itemSize===4?s.w:1)}}f={count:h,texture:U,size:new It(P,R)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Kb(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class _m extends je{constructor(t,e,i,s,r,o,a,l,c,u=sr){if(u!==sr&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===sr&&(i=gs),i===void 0&&u===dr&&(i=fr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vm=new je,Mf=new _m(1,1),xm=new am,ym=new Fy,Mm=new pm,Sf=[],bf=[],Ef=new Float32Array(16),wf=new Float32Array(9),Tf=new Float32Array(4);function xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Sf[s];if(r===void 0&&(r=new Float32Array(s),Sf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xa(n,t){let e=bf[t];e===void 0&&(e=new Int32Array(t),bf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Jb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Qb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function tE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function eE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Tf.set(i),n.uniformMatrix2fv(this.addr,!1,Tf),Be(e,i)}}function nE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;wf.set(i),n.uniformMatrix3fv(this.addr,!1,wf),Be(e,i)}}function iE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Ef.set(i),n.uniformMatrix4fv(this.addr,!1,Ef),Be(e,i)}}function sE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function oE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function aE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function lE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function uE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function hE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function fE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mf.compareFunction=im,r=Mf):r=vm,e.setTexture2D(t||r,s)}function dE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ym,s)}function pE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Mm,s)}function mE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xm,s)}function gE(n){switch(n){case 5126:return Zb;case 35664:return Jb;case 35665:return Qb;case 35666:return tE;case 35674:return eE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return sE;case 35667:case 35671:return rE;case 35668:case 35672:return oE;case 35669:case 35673:return aE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}function _E(n,t){n.uniform1fv(this.addr,t)}function vE(n,t){const e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function xE(n,t){const e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function yE(n,t){const e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function ME(n,t){const e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function SE(n,t){const e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bE(n,t){const e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function EE(n,t){n.uniform1iv(this.addr,t)}function wE(n,t){n.uniform2iv(this.addr,t)}function TE(n,t){n.uniform3iv(this.addr,t)}function AE(n,t){n.uniform4iv(this.addr,t)}function RE(n,t){n.uniform1uiv(this.addr,t)}function CE(n,t){n.uniform2uiv(this.addr,t)}function PE(n,t){n.uniform3uiv(this.addr,t)}function LE(n,t){n.uniform4uiv(this.addr,t)}function IE(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vm,r[o])}function DE(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ym,r[o])}function UE(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mm,r[o])}function NE(n,t,e){const i=this.cache,s=t.length,r=Xa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xm,r[o])}function OE(n){switch(n){case 5126:return _E;case 35664:return vE;case 35665:return xE;case 35666:return yE;case 35674:return ME;case 35675:return SE;case 35676:return bE;case 5124:case 35670:return EE;case 35667:case 35671:return wE;case 35668:case 35672:return TE;case 35669:case 35673:return AE;case 5125:return RE;case 36294:return CE;case 36295:return PE;case 36296:return LE;case 35678:case 36198:case 36298:case 36306:case 35682:return IE;case 35679:case 36299:case 36307:return DE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return NE}}class FE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gE(e.type)}}class BE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=OE(e.type)}}class zE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const kl=/(\w+)(\])?(\[|\.)?/g;function Af(n,t){n.seq.push(t),n.map[t.id]=t}function kE(n,t,e){const i=n.name,s=i.length;for(kl.lastIndex=0;;){const r=kl.exec(i),o=kl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Af(e,c===void 0?new FE(a,n,t):new BE(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new zE(a),Af(e,h)),e=h}}}class la{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);kE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Rf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const HE=37297;let VE=0;function GE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function WE(n){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(n);let i;switch(t===e?i="":t===wa&&e===Ea?i="LinearDisplayP3ToLinearSRGB":t===Ea&&e===wa&&(i="LinearSRGBToLinearDisplayP3"),n){case Vi:case Wa:return[i,"LinearTransferOETF"];case Je:case Su:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+GE(n.getShaderSource(t),o)}else return s}function XE(n,t){const e=WE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qE(n,t){let e;switch(t){case Zx:e="Linear";break;case Jx:e="Reinhard";break;case Qx:e="OptimizedCineon";break;case Xp:e="ACESFilmic";break;case ey:e="AgX";break;case ny:e="Neutral";break;case ty:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wo=new O;function jE(){fe.getLuminanceCoefficients(Wo);const n=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function $E(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function KE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zr(n){return n!==""}function Pf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(n){return n.replace(ZE,QE)}const JE=new Map;function QE(n,t){let e=Zt[t];if(e===void 0){const i=JE.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(n){return n.replace(tw,ew)}function ew(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Df(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function nw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function iw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case hr:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sw(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===hr&&(t="ENVMAP_MODE_REFRACTION"),t}function rw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wp:t="ENVMAP_BLENDING_MULTIPLY";break;case $x:t="ENVMAP_BLENDING_MIX";break;case Kx:t="ENVMAP_BLENDING_ADD";break}return t}function ow(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function aw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=nw(e),c=iw(e),u=sw(e),h=rw(e),f=ow(e),m=YE(e),g=$E(r),_=s.createProgram();let p,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),d.length>0&&(d+=`
`)):(p=[Df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),d=[Df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?qE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,XE("linearToOutputTexel",e.outputColorSpace),jE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Vc(o),o=Pf(o,e),o=Lf(o,e),a=Vc(a),a=Pf(a,e),a=Lf(a,e),o=If(o),a=If(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+p+o,b=M+d+a,P=Rf(s,s.VERTEX_SHADER,y),R=Rf(s,s.FRAGMENT_SHADER,b);s.attachShader(_,P),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(P).trim(),J=s.getShaderInfoLog(R).trim();let rt=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,R);else{const et=Cf(s,P,"vertex"),q=Cf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+et+`
`+q)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(H===""||J==="")&&(Y=!1);Y&&(I.diagnostics={runnable:rt,programLog:D,vertexShader:{log:H,prefix:p},fragmentShader:{log:J,prefix:d}})}s.deleteShader(P),s.deleteShader(R),U=new la(s,_),w=KE(s,_)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,HE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=VE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let lw=0;class cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new uw(t),e.set(t,i)),i}}class uw{constructor(t){this.id=lw++,this.code=t,this.usedTimes=0}}function hw(n,t,e,i,s,r,o){const a=new wu,l=new cw,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,E,I,D,H){const J=D.fog,rt=H.geometry,Y=w.isMeshStandardMaterial?D.environment:null,et=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),q=et&&et.mapping===Ga?et.image.height:null,vt=g[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const xt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,_t=xt!==void 0?xt.length:0;let Ct=0;rt.morphAttributes.position!==void 0&&(Ct=1),rt.morphAttributes.normal!==void 0&&(Ct=2),rt.morphAttributes.color!==void 0&&(Ct=3);let Wt,lt,mt,ft;if(vt){const te=Yn[vt];Wt=te.vertexShader,lt=te.fragmentShader}else Wt=w.vertexShader,lt=w.fragmentShader,l.update(w),mt=l.getVertexShaderID(w),ft=l.getFragmentShaderID(w);const yt=n.getRenderTarget(),Nt=H.isInstancedMesh===!0,kt=H.isBatchedMesh===!0,Ht=!!w.map,re=!!w.matcap,v=!!et,N=!!w.aoMap,X=!!w.lightMap,st=!!w.bumpMap,F=!!w.normalMap,nt=!!w.displacementMap,at=!!w.emissiveMap,ot=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,B=w.clearcoat>0,G=w.dispersion>0,K=w.iridescence>0,$=w.sheen>0,gt=w.transmission>0,ht=x&&!!w.anisotropyMap,pt=B&&!!w.clearcoatMap,Rt=B&&!!w.clearcoatNormalMap,dt=B&&!!w.clearcoatRoughnessMap,St=K&&!!w.iridescenceMap,Vt=K&&!!w.iridescenceThicknessMap,Ot=$&&!!w.sheenColorMap,Tt=$&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,Ut=!!w.specularColorMap,ae=!!w.specularIntensityMap,S=gt&&!!w.transmissionMap,j=gt&&!!w.thicknessMap,Q=!!w.gradientMap,z=!!w.alphaMap,L=w.alphaTest>0,Z=!!w.alphaHash,wt=!!w.extensions;let pe=Bi;w.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(pe=n.toneMapping);const ve={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:Wt,fragmentShader:lt,defines:w.defines,customVertexShaderID:mt,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:kt,batchingColor:kt&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:yt===null?n.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Vi,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:re,envMap:v,envMapMode:v&&et.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:X,bumpMap:st,normalMap:F,displacementMap:f&&nt,emissiveMap:at,normalMapObjectSpace:F&&w.normalMapType===oy,normalMapTangentSpace:F&&w.normalMapType===nm,metalnessMap:ot,roughnessMap:T,anisotropy:x,anisotropyMap:ht,clearcoat:B,clearcoatMap:pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:dt,dispersion:G,iridescence:K,iridescenceMap:St,iridescenceThicknessMap:Vt,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:Tt,specularMap:Pt,specularColorMap:Ut,specularIntensityMap:ae,transmission:gt,transmissionMap:S,thicknessMap:j,gradientMap:Q,opaque:w.transparent===!1&&w.blending===ir&&w.alphaToCoverage===!1,alphaMap:z,alphaTest:L,alphaHash:Z,combine:w.combine,mapUv:Ht&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:X&&_(w.lightMap.channel),bumpMapUv:st&&_(w.bumpMap.channel),normalMapUv:F&&_(w.normalMap.channel),displacementMapUv:nt&&_(w.displacementMap.channel),emissiveMapUv:at&&_(w.emissiveMap.channel),metalnessMapUv:ot&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:ht&&_(w.anisotropyMap.channel),clearcoatMapUv:pt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(w.sheenRoughnessMap.channel),specularMapUv:Pt&&_(w.specularMap.channel),specularColorMapUv:Ut&&_(w.specularColorMap.channel),specularIntensityMapUv:ae&&_(w.specularIntensityMap.channel),transmissionMapUv:S&&_(w.transmissionMap.channel),thicknessMapUv:j&&_(w.thicknessMap.channel),alphaMapUv:z&&_(w.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(F||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!rt.attributes.uv&&(Ht||z),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ct,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&fe.getTransfer(w.map.colorSpace)===Me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ue,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:wt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&w.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function d(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)E.push(I),E.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(M(E,w),y(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function M(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function y(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),w.push(a.mask)}function b(w){const E=g[w.type];let I;if(E){const D=Yn[E];I=$y.clone(D.uniforms)}else I=w.uniforms;return I}function P(w,E){let I;for(let D=0,H=u.length;D<H;D++){const J=u[D];if(J.cacheKey===E){I=J,++I.usedTimes;break}}return I===void 0&&(I=new aw(n,E,w,r),u.push(I)),I}function R(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:U}}function fw(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function dw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Uf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,m,g,_,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),t++,d}function a(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||dw),i.length>1&&i.sort(f||Uf),s.length>1&&s.sort(f||Uf)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function pw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Nf,n.set(i,[o])):s>=r.length?(o=new Nf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function mw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ne};break;case"SpotLight":e={position:new O,direction:new O,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function gw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _w=0;function vw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xw(n){const t=new mw,e=gw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new _e,o=new _e;function a(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,M=0,y=0,b=0,P=0,R=0,C=0;c.sort(vw);for(let w=0,E=c.length;w<E;w++){const I=c[w],D=I.color,H=I.intensity,J=I.distance,rt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=D.r*H,h+=D.g*H,f+=D.b*H;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],H);C++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,q=e.get(I);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=I.shadow.matrix,M++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(D).multiplyScalar(H),Y.distance=J,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[_]=Y;const et=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,et.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[_]=et.matrix,I.castShadow){const q=e.get(I);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=rt,b++}_++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(D).multiplyScalar(H),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=Y,p++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const et=I.shadow,q=e.get(I);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,q.shadowCameraNear=et.camera.near,q.shadowCameraFar=et.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=rt,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(H),Y.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[d]=Y,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==M||U.numPointShadows!==y||U.numSpotShadows!==b||U.numSpotMaps!==P||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,U.directionalLength=m,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=M,U.numPointShadows=y,U.numSpotShadows=b,U.numSpotMaps=P,U.numLightProbes=C,i.version=_w++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const y=c[d];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(y.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Of(n){const t=new xw(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Of(n),t.set(s,[a])):r>=o.length?(a=new Of(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Mw extends vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sw extends vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
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
}`;function ww(n,t,e){let i=new Tu;const s=new It,r=new It,o=new be,a=new Mw({depthPacking:ry}),l=new Sw,c={},u=e.maxTextureSize,h={[ki]:hn,[hn]:ki,[Ue]:Ue},f=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:bw,fragmentShader:Ew}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let d=this.type;this.render=function(R,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Fi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=d!==ui&&this.type===ui,J=d===ui&&this.type!==ui;for(let rt=0,Y=R.length;rt<Y;rt++){const et=R[rt],q=et.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const vt=q.getFrameExtents();if(s.multiply(vt),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/vt.x),s.x=r.x*vt.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/vt.y),s.y=r.y*vt.y,q.mapSize.y=r.y)),q.map===null||H===!0||J===!0){const _t=this.type!==ui?{minFilter:pn,magFilter:pn}:{};q.map!==null&&q.map.dispose(),q.map=new _s(s.x,s.y,_t),q.map.texture.name=et.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const xt=q.getViewportCount();for(let _t=0;_t<xt;_t++){const Ct=q.getViewport(_t);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),D.viewport(o),q.updateMatrices(et,_t),i=q.getFrustum(),b(C,U,q.camera,et,this.type)}q.isPointLightShadow!==!0&&this.type===ui&&M(q,U),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,E,I)};function M(R,C){const U=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _s(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,U,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,U,m,_,null)}function y(R,C,U,w){let E=null;const I=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)E=I;else if(E=U.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=E.uuid,H=C.uuid;let J=c[D];J===void 0&&(J={},c[D]=J);let rt=J[H];rt===void 0&&(rt=E.clone(),J[H]=rt,C.addEventListener("dispose",P)),E=rt}if(E.visible=C.visible,E.wireframe=C.wireframe,w===ui?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=n.properties.get(E);D.light=U}return E}function b(R,C,U,w,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===ui)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const H=t.update(R),J=R.material;if(Array.isArray(J)){const rt=H.groups;for(let Y=0,et=rt.length;Y<et;Y++){const q=rt[Y],vt=J[q.materialIndex];if(vt&&vt.visible){const xt=y(R,vt,w,E);R.onBeforeShadow(n,R,C,U,H,xt,q),n.renderBufferDirect(U,null,H,xt,R,q),R.onAfterShadow(n,R,C,U,H,xt,q)}}}else if(J.visible){const rt=y(R,J,w,E);R.onBeforeShadow(n,R,C,U,H,rt,null),n.renderBufferDirect(U,null,H,rt,R,null),R.onAfterShadow(n,R,C,U,H,rt,null)}}const D=R.children;for(let H=0,J=D.length;H<J;H++)b(D[H],C,U,w,E)}function P(R){R.target.removeEventListener("dispose",P);for(const U in c){const w=c[U],E=R.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function Tw(n){function t(){let S=!1;const j=new be;let Q=null;const z=new be(0,0,0,0);return{setMask:function(L){Q!==L&&!S&&(n.colorMask(L,L,L,L),Q=L)},setLocked:function(L){S=L},setClear:function(L,Z,wt,pe,ve){ve===!0&&(L*=pe,Z*=pe,wt*=pe),j.set(L,Z,wt,pe),z.equals(j)===!1&&(n.clearColor(L,Z,wt,pe),z.copy(j))},reset:function(){S=!1,Q=null,z.set(-1,0,0,0)}}}function e(){let S=!1,j=null,Q=null,z=null;return{setTest:function(L){L?ft(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(L){j!==L&&!S&&(n.depthMask(L),j=L)},setFunc:function(L){if(Q!==L){switch(L){case Vx:n.depthFunc(n.NEVER);break;case Gx:n.depthFunc(n.ALWAYS);break;case Wx:n.depthFunc(n.LESS);break;case Sa:n.depthFunc(n.LEQUAL);break;case Xx:n.depthFunc(n.EQUAL);break;case qx:n.depthFunc(n.GEQUAL);break;case jx:n.depthFunc(n.GREATER);break;case Yx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=L}},setLocked:function(L){S=L},setClear:function(L){z!==L&&(n.clearDepth(L),z=L)},reset:function(){S=!1,j=null,Q=null,z=null}}}function i(){let S=!1,j=null,Q=null,z=null,L=null,Z=null,wt=null,pe=null,ve=null;return{setTest:function(te){S||(te?ft(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(te){j!==te&&!S&&(n.stencilMask(te),j=te)},setFunc:function(te,Ce,Le){(Q!==te||z!==Ce||L!==Le)&&(n.stencilFunc(te,Ce,Le),Q=te,z=Ce,L=Le)},setOp:function(te,Ce,Le){(Z!==te||wt!==Ce||pe!==Le)&&(n.stencilOp(te,Ce,Le),Z=te,wt=Ce,pe=Le)},setLocked:function(te){S=te},setClear:function(te){ve!==te&&(n.clearStencil(te),ve=te)},reset:function(){S=!1,j=null,Q=null,z=null,L=null,Z=null,wt=null,pe=null,ve=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,M=null,y=null,b=null,P=null,R=new ne(0,0,0),C=0,U=!1,w=null,E=null,I=null,D=null,H=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,Y=0;const et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(et)[1]),rt=Y>=1):et.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),rt=Y>=2);let q=null,vt={};const xt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),Ct=new be().fromArray(xt),Wt=new be().fromArray(_t);function lt(S,j,Q,z){const L=new Uint8Array(4),Z=n.createTexture();n.bindTexture(S,Z),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<Q;wt++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,L):n.texImage2D(j+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,L);return Z}const mt={};mt[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),mt[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mt[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ft(n.DEPTH_TEST),r.setFunc(Sa),st(!1),F(Vh),ft(n.CULL_FACE),N(Fi);function ft(S){c[S]!==!0&&(n.enable(S),c[S]=!0)}function yt(S){c[S]!==!1&&(n.disable(S),c[S]=!1)}function Nt(S,j){return u[S]!==j?(n.bindFramebuffer(S,j),u[S]=j,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=j),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=j),!0):!1}function kt(S,j){let Q=f,z=!1;if(S){Q=h.get(j),Q===void 0&&(Q=[],h.set(j,Q));const L=S.textures;if(Q.length!==L.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,wt=L.length;Z<wt;Z++)Q[Z]=n.COLOR_ATTACHMENT0+Z;Q.length=L.length,z=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,z=!0);z&&n.drawBuffers(Q)}function Ht(S){return m!==S?(n.useProgram(S),m=S,!0):!1}const re={[ss]:n.FUNC_ADD,[wx]:n.FUNC_SUBTRACT,[Tx]:n.FUNC_REVERSE_SUBTRACT};re[Ax]=n.MIN,re[Rx]=n.MAX;const v={[Cx]:n.ZERO,[Px]:n.ONE,[Lx]:n.SRC_COLOR,[cc]:n.SRC_ALPHA,[Fx]:n.SRC_ALPHA_SATURATE,[Nx]:n.DST_COLOR,[Dx]:n.DST_ALPHA,[Ix]:n.ONE_MINUS_SRC_COLOR,[uc]:n.ONE_MINUS_SRC_ALPHA,[Ox]:n.ONE_MINUS_DST_COLOR,[Ux]:n.ONE_MINUS_DST_ALPHA,[Bx]:n.CONSTANT_COLOR,[zx]:n.ONE_MINUS_CONSTANT_COLOR,[kx]:n.CONSTANT_ALPHA,[Hx]:n.ONE_MINUS_CONSTANT_ALPHA};function N(S,j,Q,z,L,Z,wt,pe,ve,te){if(S===Fi){g===!0&&(yt(n.BLEND),g=!1);return}if(g===!1&&(ft(n.BLEND),g=!0),S!==Ex){if(S!==_||te!==U){if((p!==ss||y!==ss)&&(n.blendEquation(n.FUNC_ADD),p=ss,y=ss),te)switch(S){case ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFunc(n.ONE,n.ONE);break;case Gh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}d=null,M=null,b=null,P=null,R.set(0,0,0),C=0,_=S,U=te}return}L=L||j,Z=Z||Q,wt=wt||z,(j!==p||L!==y)&&(n.blendEquationSeparate(re[j],re[L]),p=j,y=L),(Q!==d||z!==M||Z!==b||wt!==P)&&(n.blendFuncSeparate(v[Q],v[z],v[Z],v[wt]),d=Q,M=z,b=Z,P=wt),(pe.equals(R)===!1||ve!==C)&&(n.blendColor(pe.r,pe.g,pe.b,ve),R.copy(pe),C=ve),_=S,U=!1}function X(S,j){S.side===Ue?yt(n.CULL_FACE):ft(n.CULL_FACE);let Q=S.side===hn;j&&(Q=!Q),st(Q),S.blending===ir&&S.transparent===!1?N(Fi):N(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),s.setMask(S.colorWrite);const z=S.stencilWrite;o.setTest(z),z&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),at(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(S){w!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),w=S)}function F(S){S!==Sx?(ft(n.CULL_FACE),S!==E&&(S===Vh?n.cullFace(n.BACK):S===bx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),E=S}function nt(S){S!==I&&(rt&&n.lineWidth(S),I=S)}function at(S,j,Q){S?(ft(n.POLYGON_OFFSET_FILL),(D!==j||H!==Q)&&(n.polygonOffset(j,Q),D=j,H=Q)):yt(n.POLYGON_OFFSET_FILL)}function ot(S){S?ft(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function T(S){S===void 0&&(S=n.TEXTURE0+J-1),q!==S&&(n.activeTexture(S),q=S)}function x(S,j,Q){Q===void 0&&(q===null?Q=n.TEXTURE0+J-1:Q=q);let z=vt[Q];z===void 0&&(z={type:void 0,texture:void 0},vt[Q]=z),(z.type!==S||z.texture!==j)&&(q!==Q&&(n.activeTexture(Q),q=Q),n.bindTexture(S,j||mt[S]),z.type=S,z.texture=j)}function B(){const S=vt[q];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ot(S){Ct.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),Ct.copy(S))}function Tt(S){Wt.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),Wt.copy(S))}function Pt(S,j){let Q=l.get(j);Q===void 0&&(Q=new WeakMap,l.set(j,Q));let z=Q.get(S);z===void 0&&(z=n.getUniformBlockIndex(j,S.name),Q.set(S,z))}function Ut(S,j){const z=l.get(j).get(S);a.get(j)!==z&&(n.uniformBlockBinding(j,z,S.__bindingPointIndex),a.set(j,z))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},q=null,vt={},u={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,M=null,y=null,b=null,P=null,R=new ne(0,0,0),C=0,U=!1,w=null,E=null,I=null,D=null,H=null,Ct.set(0,0,n.canvas.width,n.canvas.height),Wt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ft,disable:yt,bindFramebuffer:Nt,drawBuffers:kt,useProgram:Ht,setBlending:N,setMaterial:X,setFlipSided:st,setCullFace:F,setLineWidth:nt,setPolygonOffset:at,setScissorTest:ot,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:G,compressedTexImage3D:K,texImage2D:St,texImage3D:Vt,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:dt,texSubImage2D:$,texSubImage3D:gt,compressedTexSubImage2D:ht,compressedTexSubImage3D:pt,scissor:Ot,viewport:Tt,reset:ae}}function Ff(n,t,e,i){const s=Aw(i);switch(e){case Kp:return n*t;case Jp:return n*t;case Qp:return n*t*2;case vu:return n*t/s.components*s.byteLength;case xu:return n*t/s.components*s.byteLength;case tm:return n*t*2/s.components*s.byteLength;case yu:return n*t*2/s.components*s.byteLength;case Zp:return n*t*3/s.components*s.byteLength;case zn:return n*t*4/s.components*s.byteLength;case Mu:return n*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:case vc:return Math.max(n,16)*Math.max(t,8)/4;case mc:case _c:return Math.max(n,8)*Math.max(t,8)/2;case xc:case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case aa:case Oc:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case em:case Bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case zc:case kc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Aw(n){switch(n){case Si:case jp:return{byteLength:1,components:1};case no:case Yp:case mo:return{byteLength:2,components:1};case gu:case _u:return{byteLength:2,components:4};case gs:case mu:case Zn:return{byteLength:4,components:1};case $p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Rw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):io("canvas")}function _(T,x,B){let G=1;const K=ot(T);if((K.width>B||K.height>B)&&(G=B/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(G*K.width),gt=Math.floor(G*K.height);h===void 0&&(h=g($,gt));const ht=x?g($,gt):h;return ht.width=$,ht.height=gt,ht.getContext("2d").drawImage(T,0,0,$,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+gt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==pn&&T.minFilter!==qe}function d(T){n.generateMipmap(T)}function M(T,x,B,G,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),x===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),x===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),x===n.RGBA){const gt=K?ba:fe.getTransfer(G);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=gt===Me?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,x){let B;return T?x===null||x===gs||x===fr?B=n.DEPTH24_STENCIL8:x===Zn?B=n.DEPTH32F_STENCIL8:x===no&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gs||x===fr?B=n.DEPTH_COMPONENT24:x===Zn?B=n.DEPTH_COMPONENT32F:x===no&&(B=n.DEPTH_COMPONENT16),B}function b(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==pn&&T.minFilter!==qe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function P(T){const x=T.target;x.removeEventListener("dispose",P),C(x),x.isVideoTexture&&u.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),w(x)}function C(T){const x=i.get(T);if(x.__webglInit===void 0)return;const B=T.source,G=f.get(B);if(G){const K=G[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(T),Object.keys(G).length===0&&f.delete(B)}i.remove(T)}function U(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const B=T.source,G=f.get(B);delete G[x.__cacheKey],o.memory.textures--}function w(T){const x=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let K=0;K<x.__webglFramebuffer[G].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[G][K]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let G=0,K=B.length;G<K;G++){const $=i.get(B[G]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(B[G])}i.remove(T)}let E=0;function I(){E=0}function D(){const T=E;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),E+=1,T}function H(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function J(T,x){const B=i.get(T);if(T.isVideoTexture&&nt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(B,T,x);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function rt(T,x){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Wt(B,T,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function Y(T,x){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Wt(B,T,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function et(T,x){const B=i.get(T);if(T.version>0&&B.__version!==T.version){lt(B,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const q={[dc]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},vt={[pn]:n.NEAREST,[iy]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[qe]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},xt={[ay]:n.NEVER,[dy]:n.ALWAYS,[ly]:n.LESS,[im]:n.LEQUAL,[cy]:n.EQUAL,[fy]:n.GEQUAL,[uy]:n.GREATER,[hy]:n.NOTEQUAL};function _t(T,x){if(x.type===Zn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===qe||x.magFilter===gl||x.magFilter===bo||x.magFilter===ls||x.minFilter===qe||x.minFilter===gl||x.minFilter===bo||x.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,q[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,q[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,q[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,vt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==bo&&x.minFilter!==ls||x.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ct(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",P));const G=x.source;let K=f.get(G);K===void 0&&(K={},f.set(G,K));const $=H(x);if($!==T.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[$].usedTimes++;const gt=K[T.__cacheKey];gt!==void 0&&(K[T.__cacheKey].usedTimes--,gt.usedTimes===0&&U(x)),T.__cacheKey=$,T.__webglTexture=K[$].texture}return B}function Wt(T,x,B){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const K=Ct(T,x),$=x.source;e.bindTexture(G,T.__webglTexture,n.TEXTURE0+B);const gt=i.get($);if($.version!==gt.__version||K===!0){e.activeTexture(n.TEXTURE0+B);const ht=fe.getPrimaries(fe.workingColorSpace),pt=x.colorSpace===Oi?null:fe.getPrimaries(x.colorSpace),Rt=x.colorSpace===Oi||ht===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let dt=_(x.image,!1,s.maxTextureSize);dt=at(x,dt);const St=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type);let Ot=M(x.internalFormat,St,Vt,x.colorSpace,x.isVideoTexture);_t(G,x);let Tt;const Pt=x.mipmaps,Ut=x.isVideoTexture!==!0,ae=gt.__version===void 0||K===!0,S=$.dataReady,j=b(x,dt);if(x.isDepthTexture)Ot=y(x.format===dr,x.type),ae&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Ot,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,dt.width,dt.height,0,St,Vt,null));else if(x.isDataTexture)if(Pt.length>0){Ut&&ae&&e.texStorage2D(n.TEXTURE_2D,j,Ot,Pt[0].width,Pt[0].height);for(let Q=0,z=Pt.length;Q<z;Q++)Tt=Pt[Q],Ut?S&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,St,Vt,Tt.data):e.texImage2D(n.TEXTURE_2D,Q,Ot,Tt.width,Tt.height,0,St,Vt,Tt.data);x.generateMipmaps=!1}else Ut?(ae&&e.texStorage2D(n.TEXTURE_2D,j,Ot,dt.width,dt.height),S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,St,Vt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,dt.width,dt.height,0,St,Vt,dt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,j,Ot,Pt[0].width,Pt[0].height,dt.depth);for(let Q=0,z=Pt.length;Q<z;Q++)if(Tt=Pt[Q],x.format!==zn)if(St!==null)if(Ut){if(S)if(x.layerUpdates.size>0){const L=Ff(Tt.width,Tt.height,x.format,x.type);for(const Z of x.layerUpdates){const wt=Tt.data.subarray(Z*L/Tt.data.BYTES_PER_ELEMENT,(Z+1)*L/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Z,Tt.width,Tt.height,1,St,wt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Tt.width,Tt.height,dt.depth,St,Tt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ot,Tt.width,Tt.height,dt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?S&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Tt.width,Tt.height,dt.depth,St,Vt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ot,Tt.width,Tt.height,dt.depth,0,St,Vt,Tt.data)}else{Ut&&ae&&e.texStorage2D(n.TEXTURE_2D,j,Ot,Pt[0].width,Pt[0].height);for(let Q=0,z=Pt.length;Q<z;Q++)Tt=Pt[Q],x.format!==zn?St!==null?Ut?S&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,St,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Ot,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?S&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,St,Vt,Tt.data):e.texImage2D(n.TEXTURE_2D,Q,Ot,Tt.width,Tt.height,0,St,Vt,Tt.data)}else if(x.isDataArrayTexture)if(Ut){if(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,j,Ot,dt.width,dt.height,dt.depth),S)if(x.layerUpdates.size>0){const Q=Ff(dt.width,dt.height,x.format,x.type);for(const z of x.layerUpdates){const L=dt.data.subarray(z*Q/dt.data.BYTES_PER_ELEMENT,(z+1)*Q/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,z,dt.width,dt.height,1,St,Vt,L)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,St,Vt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,dt.width,dt.height,dt.depth,0,St,Vt,dt.data);else if(x.isData3DTexture)Ut?(ae&&e.texStorage3D(n.TEXTURE_3D,j,Ot,dt.width,dt.height,dt.depth),S&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,St,Vt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,dt.width,dt.height,dt.depth,0,St,Vt,dt.data);else if(x.isFramebufferTexture){if(ae)if(Ut)e.texStorage2D(n.TEXTURE_2D,j,Ot,dt.width,dt.height);else{let Q=dt.width,z=dt.height;for(let L=0;L<j;L++)e.texImage2D(n.TEXTURE_2D,L,Ot,Q,z,0,St,Vt,null),Q>>=1,z>>=1}}else if(Pt.length>0){if(Ut&&ae){const Q=ot(Pt[0]);e.texStorage2D(n.TEXTURE_2D,j,Ot,Q.width,Q.height)}for(let Q=0,z=Pt.length;Q<z;Q++)Tt=Pt[Q],Ut?S&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,St,Vt,Tt):e.texImage2D(n.TEXTURE_2D,Q,Ot,St,Vt,Tt);x.generateMipmaps=!1}else if(Ut){if(ae){const Q=ot(dt);e.texStorage2D(n.TEXTURE_2D,j,Ot,Q.width,Q.height)}S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Vt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,St,Vt,dt);p(x)&&d(G),gt.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function lt(T,x,B){if(x.image.length!==6)return;const G=Ct(T,x),K=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const $=i.get(K);if(K.version!==$.__version||G===!0){e.activeTexture(n.TEXTURE0+B);const gt=fe.getPrimaries(fe.workingColorSpace),ht=x.colorSpace===Oi?null:fe.getPrimaries(x.colorSpace),pt=x.colorSpace===Oi||gt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,dt=x.image[0]&&x.image[0].isDataTexture,St=[];for(let z=0;z<6;z++)!Rt&&!dt?St[z]=_(x.image[z],!0,s.maxCubemapSize):St[z]=dt?x.image[z].image:x.image[z],St[z]=at(x,St[z]);const Vt=St[0],Ot=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type),Pt=M(x.internalFormat,Ot,Tt,x.colorSpace),Ut=x.isVideoTexture!==!0,ae=$.__version===void 0||G===!0,S=K.dataReady;let j=b(x,Vt);_t(n.TEXTURE_CUBE_MAP,x);let Q;if(Rt){Ut&&ae&&e.texStorage2D(n.TEXTURE_CUBE_MAP,j,Pt,Vt.width,Vt.height);for(let z=0;z<6;z++){Q=St[z].mipmaps;for(let L=0;L<Q.length;L++){const Z=Q[L];x.format!==zn?Ot!==null?Ut?S&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,L,0,0,Z.width,Z.height,Ot,Z.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,L,Pt,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,L,0,0,Z.width,Z.height,Ot,Tt,Z.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,L,Pt,Z.width,Z.height,0,Ot,Tt,Z.data)}}}else{if(Q=x.mipmaps,Ut&&ae){Q.length>0&&j++;const z=ot(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,j,Pt,z.width,z.height)}for(let z=0;z<6;z++)if(dt){Ut?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,St[z].width,St[z].height,Ot,Tt,St[z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Pt,St[z].width,St[z].height,0,Ot,Tt,St[z].data);for(let L=0;L<Q.length;L++){const wt=Q[L].image[z].image;Ut?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,L+1,0,0,wt.width,wt.height,Ot,Tt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,L+1,Pt,wt.width,wt.height,0,Ot,Tt,wt.data)}}else{Ut?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ot,Tt,St[z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Pt,Ot,Tt,St[z]);for(let L=0;L<Q.length;L++){const Z=Q[L];Ut?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,L+1,0,0,Ot,Tt,Z.image[z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,L+1,Pt,Ot,Tt,Z.image[z])}}}p(x)&&d(n.TEXTURE_CUBE_MAP),$.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function mt(T,x,B,G,K,$){const gt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),pt=M(B.internalFormat,gt,ht,B.colorSpace);if(!i.get(x).__hasExternalTextures){const dt=Math.max(1,x.width>>$),St=Math.max(1,x.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,$,pt,dt,St,x.depth,0,gt,ht,null):e.texImage2D(K,$,pt,dt,St,0,gt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),F(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,i.get(B).__webglTexture,0,st(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,i.get(B).__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(T,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const G=x.depthTexture,K=G&&G.isDepthTexture?G.type:null,$=y(x.stencilBuffer,K),gt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=st(x);F(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,$,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,T)}else{const G=x.textures;for(let K=0;K<G.length;K++){const $=G[K],gt=r.convert($.format,$.colorSpace),ht=r.convert($.type),pt=M($.internalFormat,gt,ht,$.colorSpace),Rt=st(x);B&&F(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,pt,x.width,x.height):F(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,pt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,pt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const G=i.get(x.depthTexture).__webglTexture,K=st(x);if(x.depthTexture.format===sr)F(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(x.depthTexture.format===dr)F(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Nt(T){const x=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");yt(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]=n.createRenderbuffer(),ft(x.__webglDepthbuffer[G],T,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ft(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(T,x,B){const G=i.get(T);x!==void 0&&mt(G.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Nt(T)}function Ht(T){const x=T.texture,B=i.get(T),G=i.get(x);T.addEventListener("dispose",R);const K=T.textures,$=T.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let pt=0;pt<x.mipmaps.length;pt++)B.__webglFramebuffer[ht][pt]=n.createFramebuffer()}else B.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)B.__webglFramebuffer[ht]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(gt)for(let ht=0,pt=K.length;ht<pt;ht++){const Rt=i.get(K[ht]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&F(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<K.length;ht++){const pt=K[ht];B.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Rt=r.convert(pt.format,pt.colorSpace),dt=r.convert(pt.type),St=M(pt.internalFormat,Rt,dt,pt.colorSpace,T.isXRRenderTarget===!0),Vt=st(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,St,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),_t(n.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)mt(B.__webglFramebuffer[ht][pt],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else mt(B.__webglFramebuffer[ht],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ht=0,pt=K.length;ht<pt;ht++){const Rt=K[ht],dt=i.get(Rt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),_t(n.TEXTURE_2D,Rt),mt(B.__webglFramebuffer,T,Rt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),p(Rt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,G.__webglTexture),_t(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)mt(B.__webglFramebuffer[pt],T,x,n.COLOR_ATTACHMENT0,ht,pt);else mt(B.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ht,0);p(x)&&d(ht),e.unbindTexture()}T.depthBuffer&&Nt(T)}function re(T){const x=T.textures;for(let B=0,G=x.length;B<G;B++){const K=x[B];if(p(K)){const $=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,gt=i.get(K).__webglTexture;e.bindTexture($,gt),d($),e.unbindTexture()}}}const v=[],N=[];function X(T){if(T.samples>0){if(F(T)===!1){const x=T.textures,B=T.width,G=T.height;let K=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(T),ht=x.length>1;if(ht)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[pt]);const Rt=i.get(x[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,K,n.NEAREST),l===!0&&(v.length=0,N.length=0,v.push(n.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(v.push($),N.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,v))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[pt]);const Rt=i.get(x[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function st(T){return Math.min(s.maxSamples,T.samples)}function F(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function nt(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function at(T,x){const B=T.colorSpace,G=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Vi&&B!==Oi&&(fe.getTransfer(B)===Me?(G!==zn||K!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function ot(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=J,this.setTexture2DArray=rt,this.setTexture3D=Y,this.setTextureCube=et,this.rebindTextures=kt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=F}function Cw(n,t){function e(i,s=Oi){let r;const o=fe.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===gu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_u)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$p)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jp)return n.BYTE;if(i===Yp)return n.SHORT;if(i===no)return n.UNSIGNED_SHORT;if(i===mu)return n.INT;if(i===gs)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===mo)return n.HALF_FLOAT;if(i===Kp)return n.ALPHA;if(i===Zp)return n.RGB;if(i===zn)return n.RGBA;if(i===Jp)return n.LUMINANCE;if(i===Qp)return n.LUMINANCE_ALPHA;if(i===sr)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===vu)return n.RED;if(i===xu)return n.RED_INTEGER;if(i===tm)return n.RG;if(i===yu)return n.RG_INTEGER;if(i===Mu)return n.RGBA_INTEGER;if(i===ia||i===sa||i===ra||i===oa)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===_c||i===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===yc||i===Mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xc||i===yc)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sc||i===bc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===Oc||i===Fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===aa)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===em||i===Bc||i===zc||i===kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Pw extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lw={type:"move"};class Hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dw=`
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

}`;class Uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Hi({vertexShader:Iw,fragmentShader:Dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Pe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nw extends ys{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new Uw,p=e.getContextAttributes();let d=null,M=null;const y=[],b=[],P=new It;let R=null;const C=new dn;C.layers.enable(1),C.viewport=new be;const U=new dn;U.layers.enable(2),U.viewport=new be;const w=[C,U],E=new Pw;E.layers.enable(1),E.layers.enable(2);let I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let mt=y[lt];return mt===void 0&&(mt=new Hl,y[lt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(lt){let mt=y[lt];return mt===void 0&&(mt=new Hl,y[lt]=mt),mt.getGripSpace()},this.getHand=function(lt){let mt=y[lt];return mt===void 0&&(mt=new Hl,y[lt]=mt),mt.getHandSpace()};function H(lt){const mt=b.indexOf(lt.inputSource);if(mt===-1)return;const ft=y[mt];ft!==void 0&&(ft.update(lt.inputSource,lt.frame,c||o),ft.dispatchEvent({type:lt.type,data:lt.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",rt);for(let lt=0;lt<y.length;lt++){const mt=b[lt];mt!==null&&(b[lt]=null,y[lt].disconnect(mt))}I=null,D=null,_.reset(),t.setRenderTarget(d),m=null,f=null,h=null,s=null,M=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",rt),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const mt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new _s(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let mt=null,ft=null,yt=null;p.depth&&(yt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=p.stencil?dr:sr,ft=p.stencil?fr:gs);const Nt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new _s(f.textureWidth,f.textureHeight,{format:zn,type:Si,depthTexture:new _m(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(lt){for(let mt=0;mt<lt.removed.length;mt++){const ft=lt.removed[mt],yt=b.indexOf(ft);yt>=0&&(b[yt]=null,y[yt].disconnect(ft))}for(let mt=0;mt<lt.added.length;mt++){const ft=lt.added[mt];let yt=b.indexOf(ft);if(yt===-1){for(let kt=0;kt<y.length;kt++)if(kt>=b.length){b.push(ft),yt=kt;break}else if(b[kt]===null){b[kt]=ft,yt=kt;break}if(yt===-1)break}const Nt=y[yt];Nt&&Nt.connect(ft)}}const Y=new O,et=new O;function q(lt,mt,ft){Y.setFromMatrixPosition(mt.matrixWorld),et.setFromMatrixPosition(ft.matrixWorld);const yt=Y.distanceTo(et),Nt=mt.projectionMatrix.elements,kt=ft.projectionMatrix.elements,Ht=Nt[14]/(Nt[10]-1),re=Nt[14]/(Nt[10]+1),v=(Nt[9]+1)/Nt[5],N=(Nt[9]-1)/Nt[5],X=(Nt[8]-1)/Nt[0],st=(kt[8]+1)/kt[0],F=Ht*X,nt=Ht*st,at=yt/(-X+st),ot=at*-X;mt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(ot),lt.translateZ(at),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert();const T=Ht+at,x=re+at,B=F-ot,G=nt+(yt-ot),K=v*re/x*T,$=N*re/x*T;lt.projectionMatrix.makePerspective(B,G,K,$,T,x),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}function vt(lt,mt){mt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(mt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;_.texture!==null&&(lt.near=_.depthNear,lt.far=_.depthFar),E.near=U.near=C.near=lt.near,E.far=U.far=C.far=lt.far,(I!==E.near||D!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,D=E.far,C.near=I,C.far=D,U.near=I,U.far=D,C.updateProjectionMatrix(),U.updateProjectionMatrix(),lt.updateProjectionMatrix());const mt=lt.parent,ft=E.cameras;vt(E,mt);for(let yt=0;yt<ft.length;yt++)vt(ft[yt],mt);ft.length===2?q(E,C,U):E.projectionMatrix.copy(C.projectionMatrix),xt(lt,E,mt)};function xt(lt,mt,ft){ft===null?lt.matrix.copy(mt.matrixWorld):(lt.matrix.copy(ft.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(mt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(mt.projectionMatrix),lt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=pr*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(lt){l=lt,f!==null&&(f.fixedFoveation=lt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=lt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let _t=null;function Ct(lt,mt){if(u=mt.getViewerPose(c||o),g=mt,u!==null){const ft=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let yt=!1;ft.length!==E.cameras.length&&(E.cameras.length=0,yt=!0);for(let kt=0;kt<ft.length;kt++){const Ht=ft[kt];let re=null;if(m!==null)re=m.getViewport(Ht);else{const N=h.getViewSubImage(f,Ht);re=N.viewport,kt===0&&(t.setRenderTargetTextures(M,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(M))}let v=w[kt];v===void 0&&(v=new dn,v.layers.enable(kt),v.viewport=new be,w[kt]=v),v.matrix.fromArray(Ht.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.projectionMatrix.fromArray(Ht.projectionMatrix),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.viewport.set(re.x,re.y,re.width,re.height),kt===0&&(E.matrix.copy(v.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),yt===!0&&E.cameras.push(v)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const kt=h.getDepthInformation(ft[0]);kt&&kt.isValid&&kt.texture&&_.init(t,kt,s.renderState)}}for(let ft=0;ft<y.length;ft++){const yt=b[ft],Nt=y[ft];yt!==null&&Nt!==void 0&&Nt.update(yt,mt,c||o)}_t&&_t(lt,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}const Wt=new gm;Wt.setAnimationLoop(Ct),this.setAnimationLoop=function(lt){_t=lt},this.dispose=function(){}}}const Qi=new Gn,Ow=new _e;function Fw(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,hm(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===hn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===hn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=t.get(d),y=M.envMap,b=M.envMapRotation;y&&(p.envMap.value=y,Qi.copy(b),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),p.envMapRotation.value.setFromMatrix4(Ow.makeRotationFromEuler(Qi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=y*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function c(M,y){let b=s[M.id];b===void 0&&(g(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",p));const P=y.program;i.updateUBOMapping(M,P);const R=t.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function u(M){const y=h();M.__bindingPointIndex=y;const b=n.createBuffer(),P=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],b=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,C=b.length;R<C;R++){const U=Array.isArray(b[R])?b[R]:[b[R]];for(let w=0,E=U.length;w<E;w++){const I=U[w];if(m(I,R,w,P)===!0){const D=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let rt=0;rt<H.length;rt++){const Y=H[rt],et=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,D+J,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,J),J+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,y,b,P){const R=M.value,C=y+"_"+b;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{const U=P[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return P[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(M){const y=M.uniforms;let b=0;const P=16;for(let C=0,U=y.length;C<U;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,I=w.length;E<I;E++){const D=w[E],H=Array.isArray(D.value)?D.value:[D.value];for(let J=0,rt=H.length;J<rt;J++){const Y=H[J],et=_(Y),q=b%P,vt=q%et.boundary,xt=q+vt;b+=vt,xt!==0&&P-xt<et.storage&&(b+=P-xt),D.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=et.storage}}}const R=b%P;return R>0&&(b+=P-R),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class zw{constructor(t={}){const{canvas:e=Py(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Bi,this.toneMappingExposure=1;const y=this;let b=!1,P=0,R=0,C=null,U=-1,w=null;const E=new be,I=new be;let D=null;const H=new ne(0);let J=0,rt=e.width,Y=e.height,et=1,q=null,vt=null;const xt=new be(0,0,rt,Y),_t=new be(0,0,rt,Y);let Ct=!1;const Wt=new Tu;let lt=!1,mt=!1;const ft=new _e,yt=new O,Nt=new be,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function re(){return C===null?et:1}let v=i;function N(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pu}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",L,!1),v===null){const V="webgl2";if(v=N(V,A),v===null)throw N(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let X,st,F,nt,at,ot,T,x,B,G,K,$,gt,ht,pt,Rt,dt,St,Vt,Ot,Tt,Pt,Ut,ae;function S(){X=new Xb(v),X.init(),Pt=new Cw(v,X),st=new Bb(v,X,t,Pt),F=new Tw(v),nt=new Yb(v),at=new fw,ot=new Rw(v,X,F,at,st,Pt,nt),T=new kb(y),x=new Wb(y),B=new tM(v),Ut=new Ob(v,B),G=new qb(v,B,nt,Ut),K=new Kb(v,G,B,nt),Vt=new $b(v,st,ot),Rt=new zb(at),$=new hw(y,T,x,X,st,Ut,Rt),gt=new Fw(y,at),ht=new pw,pt=new yw(X),St=new Nb(y,T,x,F,K,f,l),dt=new ww(y,K,st),ae=new Bw(v,nt,st,F),Ot=new Fb(v,X,nt),Tt=new jb(v,X,nt),nt.programs=$.programs,y.capabilities=st,y.extensions=X,y.properties=at,y.renderLists=ht,y.shadowMap=dt,y.state=F,y.info=nt}S();const j=new Nw(y,v);this.xr=j,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=X.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=X.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(A){A!==void 0&&(et=A,this.setSize(rt,Y,!1))},this.getSize=function(A){return A.set(rt,Y)},this.setSize=function(A,V,tt=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,Y=V,e.width=Math.floor(A*et),e.height=Math.floor(V*et),tt===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(rt*et,Y*et).floor()},this.setDrawingBufferSize=function(A,V,tt){rt=A,Y=V,et=tt,e.width=Math.floor(A*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,V,tt,it){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,V,tt,it),F.viewport(E.copy(xt).multiplyScalar(et).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,V,tt,it){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,V,tt,it),F.scissor(I.copy(_t).multiplyScalar(et).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(A){F.setScissorTest(Ct=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){vt=A},this.getClearColor=function(A){return A.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(A=!0,V=!0,tt=!0){let it=0;if(A){let W=!1;if(C!==null){const Mt=C.texture.format;W=Mt===Mu||Mt===yu||Mt===xu}if(W){const Mt=C.texture.type,At=Mt===Si||Mt===gs||Mt===no||Mt===fr||Mt===gu||Mt===_u,Lt=St.getClearColor(),Dt=St.getClearAlpha(),Xt=Lt.r,qt=Lt.g,zt=Lt.b;At?(m[0]=Xt,m[1]=qt,m[2]=zt,m[3]=Dt,v.clearBufferuiv(v.COLOR,0,m)):(g[0]=Xt,g[1]=qt,g[2]=zt,g[3]=Dt,v.clearBufferiv(v.COLOR,0,g))}else it|=v.COLOR_BUFFER_BIT}V&&(it|=v.DEPTH_BUFFER_BIT),tt&&(it|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",L,!1),ht.dispose(),pt.dispose(),at.dispose(),T.dispose(),x.dispose(),K.dispose(),Ut.dispose(),ae.dispose(),$.dispose(),j.dispose(),j.removeEventListener("sessionstart",Le),j.removeEventListener("sessionend",Ei),ke.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=nt.autoReset,V=dt.enabled,tt=dt.autoUpdate,it=dt.needsUpdate,W=dt.type;S(),nt.autoReset=A,dt.enabled=V,dt.autoUpdate=tt,dt.needsUpdate=it,dt.type=W}function L(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z(A){const V=A.target;V.removeEventListener("dispose",Z),wt(V)}function wt(A){pe(A),at.remove(A)}function pe(A){const V=at.get(A).programs;V!==void 0&&(V.forEach(function(tt){$.releaseProgram(tt)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,tt,it,W,Mt){V===null&&(V=kt);const At=W.isMesh&&W.matrixWorld.determinant()<0,Lt=Rm(A,V,tt,it,W);F.setMaterial(it,At);let Dt=tt.index,Xt=1;if(it.wireframe===!0){if(Dt=G.getWireframeAttribute(tt),Dt===void 0)return;Xt=2}const qt=tt.drawRange,zt=tt.attributes.position;let le=qt.start*Xt,Ae=(qt.start+qt.count)*Xt;Mt!==null&&(le=Math.max(le,Mt.start*Xt),Ae=Math.min(Ae,(Mt.start+Mt.count)*Xt)),Dt!==null?(le=Math.max(le,0),Ae=Math.min(Ae,Dt.count)):zt!=null&&(le=Math.max(le,0),Ae=Math.min(Ae,zt.count));const Re=Ae-le;if(Re<0||Re===1/0)return;Ut.setup(W,it,Lt,tt,Dt);let _n,ce=Ot;if(Dt!==null&&(_n=B.get(Dt),ce=Tt,ce.setIndex(_n)),W.isMesh)it.wireframe===!0?(F.setLineWidth(it.wireframeLinewidth*re()),ce.setMode(v.LINES)):ce.setMode(v.TRIANGLES);else if(W.isLine){let Ft=it.linewidth;Ft===void 0&&(Ft=1),F.setLineWidth(Ft*re()),W.isLineSegments?ce.setMode(v.LINES):W.isLineLoop?ce.setMode(v.LINE_LOOP):ce.setMode(v.LINE_STRIP)}else W.isPoints?ce.setMode(v.POINTS):W.isSprite&&ce.setMode(v.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ce.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))ce.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ft=W._multiDrawStarts,He=W._multiDrawCounts,ue=W._multiDrawCount,In=Dt?B.get(Dt).bytesPerElement:1,bs=at.get(it).currentProgram.getUniforms();for(let vn=0;vn<ue;vn++)bs.setValue(v,"_gl_DrawID",vn),ce.render(Ft[vn]/In,He[vn])}else if(W.isInstancedMesh)ce.renderInstances(le,Re,W.count);else if(tt.isInstancedBufferGeometry){const Ft=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,He=Math.min(tt.instanceCount,Ft);ce.renderInstances(le,Re,He)}else ce.render(le,Re)};function ve(A,V,tt){A.transparent===!0&&A.side===Ue&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,vo(A,V,tt),A.side=ki,A.needsUpdate=!0,vo(A,V,tt),A.side=Ue):vo(A,V,tt)}this.compile=function(A,V,tt=null){tt===null&&(tt=A),p=pt.get(tt),p.init(V),M.push(p),tt.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==tt&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const it=new Set;return A.traverse(function(W){const Mt=W.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const Lt=Mt[At];ve(Lt,tt,W),it.add(Lt)}else ve(Mt,tt,W),it.add(Mt)}),M.pop(),p=null,it},this.compileAsync=function(A,V,tt=null){const it=this.compile(A,V,tt);return new Promise(W=>{function Mt(){if(it.forEach(function(At){at.get(At).currentProgram.isReady()&&it.delete(At)}),it.size===0){W(A);return}setTimeout(Mt,10)}X.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let te=null;function Ce(A){te&&te(A)}function Le(){ke.stop()}function Ei(){ke.start()}const ke=new gm;ke.setAnimationLoop(Ce),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(A){te=A,j.setAnimationLoop(A),A===null?ke.stop():ke.start()},j.addEventListener("sessionstart",Le),j.addEventListener("sessionend",Ei),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(V),V=j.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,V,C),p=pt.get(A,M.length),p.init(V),M.push(p),ft.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Wt.setFromProjectionMatrix(ft),mt=this.localClippingEnabled,lt=Rt.init(this.clippingPlanes,mt),_=ht.get(A,d.length),_.init(),d.push(_),j.enabled===!0&&j.isPresenting===!0){const Mt=y.xr.getDepthSensingMesh();Mt!==null&&ei(Mt,V,-1/0,y.sortObjects)}ei(A,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(q,vt),Ht=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ht&&St.addToRenderList(_,A),this.info.render.frame++,lt===!0&&Rt.beginShadows();const tt=p.state.shadowsArray;dt.render(tt,A,V),lt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=_.opaque,W=_.transmissive;if(p.setupLights(),V.isArrayCamera){const Mt=V.cameras;if(W.length>0)for(let At=0,Lt=Mt.length;At<Lt;At++){const Dt=Mt[At];yr(it,W,A,Dt)}Ht&&St.render(A);for(let At=0,Lt=Mt.length;At<Lt;At++){const Dt=Mt[At];Gi(_,A,Dt,Dt.viewport)}}else W.length>0&&yr(it,W,A,V),Ht&&St.render(A),Gi(_,A,V);C!==null&&(ot.updateMultisampleRenderTarget(C),ot.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,V),Ut.resetDefaultState(),U=-1,w=null,M.pop(),M.length>0?(p=M[M.length-1],lt===!0&&Rt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ei(A,V,tt,it){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Wt.intersectsSprite(A)){it&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);const At=K.update(A),Lt=A.material;Lt.visible&&_.push(A,At,Lt,tt,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Wt.intersectsObject(A))){const At=K.update(A),Lt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Nt.copy(At.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(Lt)){const Dt=At.groups;for(let Xt=0,qt=Dt.length;Xt<qt;Xt++){const zt=Dt[Xt],le=Lt[zt.materialIndex];le&&le.visible&&_.push(A,At,le,tt,Nt.z,zt)}}else Lt.visible&&_.push(A,At,Lt,tt,Nt.z,null)}}const Mt=A.children;for(let At=0,Lt=Mt.length;At<Lt;At++)ei(Mt[At],V,tt,it)}function Gi(A,V,tt,it){const W=A.opaque,Mt=A.transmissive,At=A.transparent;p.setupLightsView(tt),lt===!0&&Rt.setGlobalState(y.clippingPlanes,tt),it&&F.viewport(E.copy(it)),W.length>0&&_o(W,V,tt),Mt.length>0&&_o(Mt,V,tt),At.length>0&&_o(At,V,tt),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function yr(A,V,tt,it){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new _s(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?mo:Si,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const Mt=p.state.transmissionRenderTarget[it.id],At=it.viewport||E;Mt.setSize(At.z,At.w);const Lt=y.getRenderTarget();y.setRenderTarget(Mt),y.getClearColor(H),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&St.render(tt);const Dt=y.toneMapping;y.toneMapping=Bi;const Xt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),lt===!0&&Rt.setGlobalState(y.clippingPlanes,it),_o(A,tt,it),ot.updateMultisampleRenderTarget(Mt),ot.updateRenderTargetMipmap(Mt),X.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let zt=0,le=V.length;zt<le;zt++){const Ae=V[zt],Re=Ae.object,_n=Ae.geometry,ce=Ae.material,Ft=Ae.group;if(ce.side===Ue&&Re.layers.test(it.layers)){const He=ce.side;ce.side=hn,ce.needsUpdate=!0,Uu(Re,tt,it,_n,ce,Ft),ce.side=He,ce.needsUpdate=!0,qt=!0}}qt===!0&&(ot.updateMultisampleRenderTarget(Mt),ot.updateRenderTargetMipmap(Mt))}y.setRenderTarget(Lt),y.setClearColor(H,J),Xt!==void 0&&(it.viewport=Xt),y.toneMapping=Dt}function _o(A,V,tt){const it=V.isScene===!0?V.overrideMaterial:null;for(let W=0,Mt=A.length;W<Mt;W++){const At=A[W],Lt=At.object,Dt=At.geometry,Xt=it===null?At.material:it,qt=At.group;Lt.layers.test(tt.layers)&&Uu(Lt,V,tt,Dt,Xt,qt)}}function Uu(A,V,tt,it,W,Mt){A.onBeforeRender(y,V,tt,it,W,Mt),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.transparent===!0&&W.side===Ue&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,y.renderBufferDirect(tt,V,it,W,A,Mt),W.side=ki,W.needsUpdate=!0,y.renderBufferDirect(tt,V,it,W,A,Mt),W.side=Ue):y.renderBufferDirect(tt,V,it,W,A,Mt),A.onAfterRender(y,V,tt,it,W,Mt)}function vo(A,V,tt){V.isScene!==!0&&(V=kt);const it=at.get(A),W=p.state.lights,Mt=p.state.shadowsArray,At=W.state.version,Lt=$.getParameters(A,W.state,Mt,V,tt),Dt=$.getProgramCacheKey(Lt);let Xt=it.programs;it.environment=A.isMeshStandardMaterial?V.environment:null,it.fog=V.fog,it.envMap=(A.isMeshStandardMaterial?x:T).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",Z),Xt=new Map,it.programs=Xt);let qt=Xt.get(Dt);if(qt!==void 0){if(it.currentProgram===qt&&it.lightsStateVersion===At)return Ou(A,Lt),qt}else Lt.uniforms=$.getUniforms(A),A.onBeforeCompile(Lt,y),qt=$.acquireProgram(Lt,Dt),Xt.set(Dt,qt),it.uniforms=Lt.uniforms;const zt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=Rt.uniform),Ou(A,Lt),it.needsLights=Pm(A),it.lightsStateVersion=At,it.needsLights&&(zt.ambientLightColor.value=W.state.ambient,zt.lightProbe.value=W.state.probe,zt.directionalLights.value=W.state.directional,zt.directionalLightShadows.value=W.state.directionalShadow,zt.spotLights.value=W.state.spot,zt.spotLightShadows.value=W.state.spotShadow,zt.rectAreaLights.value=W.state.rectArea,zt.ltc_1.value=W.state.rectAreaLTC1,zt.ltc_2.value=W.state.rectAreaLTC2,zt.pointLights.value=W.state.point,zt.pointLightShadows.value=W.state.pointShadow,zt.hemisphereLights.value=W.state.hemi,zt.directionalShadowMap.value=W.state.directionalShadowMap,zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,zt.spotShadowMap.value=W.state.spotShadowMap,zt.spotLightMatrix.value=W.state.spotLightMatrix,zt.spotLightMap.value=W.state.spotLightMap,zt.pointShadowMap.value=W.state.pointShadowMap,zt.pointShadowMatrix.value=W.state.pointShadowMatrix),it.currentProgram=qt,it.uniformsList=null,qt}function Nu(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=la.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Ou(A,V){const tt=at.get(A);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function Rm(A,V,tt,it,W){V.isScene!==!0&&(V=kt),ot.resetTextureUnits();const Mt=V.fog,At=it.isMeshStandardMaterial?V.environment:null,Lt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vi,Dt=(it.isMeshStandardMaterial?x:T).get(it.envMap||At),Xt=it.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,qt=!!tt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),zt=!!tt.morphAttributes.position,le=!!tt.morphAttributes.normal,Ae=!!tt.morphAttributes.color;let Re=Bi;it.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Re=y.toneMapping);const _n=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ce=_n!==void 0?_n.length:0,Ft=at.get(it),He=p.state.lights;if(lt===!0&&(mt===!0||A!==w)){const Sn=A===w&&it.id===U;Rt.setState(it,A,Sn)}let ue=!1;it.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==He.state.version||Ft.outputColorSpace!==Lt||W.isBatchedMesh&&Ft.batching===!1||!W.isBatchedMesh&&Ft.batching===!0||W.isBatchedMesh&&Ft.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ft.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ft.instancing===!1||!W.isInstancedMesh&&Ft.instancing===!0||W.isSkinnedMesh&&Ft.skinning===!1||!W.isSkinnedMesh&&Ft.skinning===!0||W.isInstancedMesh&&Ft.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ft.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ft.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ft.instancingMorph===!1&&W.morphTexture!==null||Ft.envMap!==Dt||it.fog===!0&&Ft.fog!==Mt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Rt.numPlanes||Ft.numIntersection!==Rt.numIntersection)||Ft.vertexAlphas!==Xt||Ft.vertexTangents!==qt||Ft.morphTargets!==zt||Ft.morphNormals!==le||Ft.morphColors!==Ae||Ft.toneMapping!==Re||Ft.morphTargetsCount!==ce)&&(ue=!0):(ue=!0,Ft.__version=it.version);let In=Ft.currentProgram;ue===!0&&(In=vo(it,V,W));let bs=!1,vn=!1,Ya=!1;const Ie=In.getUniforms(),wi=Ft.uniforms;if(F.useProgram(In.program)&&(bs=!0,vn=!0,Ya=!0),it.id!==U&&(U=it.id,vn=!0),bs||w!==A){Ie.setValue(v,"projectionMatrix",A.projectionMatrix),Ie.setValue(v,"viewMatrix",A.matrixWorldInverse);const Sn=Ie.map.cameraPosition;Sn!==void 0&&Sn.setValue(v,yt.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&Ie.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ie.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,vn=!0,Ya=!0)}if(W.isSkinnedMesh){Ie.setOptional(v,W,"bindMatrix"),Ie.setOptional(v,W,"bindMatrixInverse");const Sn=W.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ie.setValue(v,"boneTexture",Sn.boneTexture,ot))}W.isBatchedMesh&&(Ie.setOptional(v,W,"batchingTexture"),Ie.setValue(v,"batchingTexture",W._matricesTexture,ot),Ie.setOptional(v,W,"batchingIdTexture"),Ie.setValue(v,"batchingIdTexture",W._indirectTexture,ot),Ie.setOptional(v,W,"batchingColorTexture"),W._colorsTexture!==null&&Ie.setValue(v,"batchingColorTexture",W._colorsTexture,ot));const $a=tt.morphAttributes;if(($a.position!==void 0||$a.normal!==void 0||$a.color!==void 0)&&Vt.update(W,tt,In),(vn||Ft.receiveShadow!==W.receiveShadow)&&(Ft.receiveShadow=W.receiveShadow,Ie.setValue(v,"receiveShadow",W.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(wi.envMap.value=Dt,wi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&V.environment!==null&&(wi.envMapIntensity.value=V.environmentIntensity),vn&&(Ie.setValue(v,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&Cm(wi,Ya),Mt&&it.fog===!0&&gt.refreshFogUniforms(wi,Mt),gt.refreshMaterialUniforms(wi,it,et,Y,p.state.transmissionRenderTarget[A.id]),la.upload(v,Nu(Ft),wi,ot)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(la.upload(v,Nu(Ft),wi,ot),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ie.setValue(v,"center",W.center),Ie.setValue(v,"modelViewMatrix",W.modelViewMatrix),Ie.setValue(v,"normalMatrix",W.normalMatrix),Ie.setValue(v,"modelMatrix",W.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Sn=it.uniformsGroups;for(let Ka=0,Lm=Sn.length;Ka<Lm;Ka++){const Fu=Sn[Ka];ae.update(Fu,In),ae.bind(Fu,In)}}return In}function Cm(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Pm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,V,tt){at.get(A.texture).__webglTexture=V,at.get(A.depthTexture).__webglTexture=tt;const it=at.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=tt===void 0,it.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const tt=at.get(A);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,tt=0){C=A,P=V,R=tt;let it=!0,W=null,Mt=!1,At=!1;if(A){const Dt=at.get(A);Dt.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(v.FRAMEBUFFER,null),it=!1):Dt.__webglFramebuffer===void 0?ot.setupRenderTarget(A):Dt.__hasExternalTextures&&ot.rebindTextures(A,at.get(A.texture).__webglTexture,at.get(A.depthTexture).__webglTexture);const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(At=!0);const qt=at.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[V])?W=qt[V][tt]:W=qt[V],Mt=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?W=at.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?W=qt[tt]:W=qt,E.copy(A.viewport),I.copy(A.scissor),D=A.scissorTest}else E.copy(xt).multiplyScalar(et).floor(),I.copy(_t).multiplyScalar(et).floor(),D=Ct;if(F.bindFramebuffer(v.FRAMEBUFFER,W)&&it&&F.drawBuffers(A,W),F.viewport(E),F.scissor(I),F.setScissorTest(D),Mt){const Dt=at.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+V,Dt.__webglTexture,tt)}else if(At){const Dt=at.get(A.texture),Xt=V||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Dt.__webglTexture,tt||0,Xt)}U=-1},this.readRenderTargetPixels=function(A,V,tt,it,W,Mt,At){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=at.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){F.bindFramebuffer(v.FRAMEBUFFER,Lt);try{const Dt=A.texture,Xt=Dt.format,qt=Dt.type;if(!st.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-it&&tt>=0&&tt<=A.height-W&&v.readPixels(V,tt,it,W,Pt.convert(Xt),Pt.convert(qt),Mt)}finally{const Dt=C!==null?at.get(C).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,V,tt,it,W,Mt,At){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=at.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){F.bindFramebuffer(v.FRAMEBUFFER,Lt);try{const Dt=A.texture,Xt=Dt.format,qt=Dt.type;if(!st.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-it&&tt>=0&&tt<=A.height-W){const zt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,zt),v.bufferData(v.PIXEL_PACK_BUFFER,Mt.byteLength,v.STREAM_READ),v.readPixels(V,tt,it,W,Pt.convert(Xt),Pt.convert(qt),0),v.flush();const le=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);await Ly(v,le,4);try{v.bindBuffer(v.PIXEL_PACK_BUFFER,zt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Mt)}finally{v.deleteBuffer(zt),v.deleteSync(le)}return Mt}}finally{const Dt=C!==null?at.get(C).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(A,V=null,tt=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const it=Math.pow(2,-tt),W=Math.floor(A.image.width*it),Mt=Math.floor(A.image.height*it),At=V!==null?V.x:0,Lt=V!==null?V.y:0;ot.setTexture2D(A,0),v.copyTexSubImage2D(v.TEXTURE_2D,tt,0,0,At,Lt,W,Mt),F.unbindTexture()},this.copyTextureToTexture=function(A,V,tt=null,it=null,W=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],V=arguments[2],W=arguments[3]||0,tt=null);let Mt,At,Lt,Dt,Xt,qt;tt!==null?(Mt=tt.max.x-tt.min.x,At=tt.max.y-tt.min.y,Lt=tt.min.x,Dt=tt.min.y):(Mt=A.image.width,At=A.image.height,Lt=0,Dt=0),it!==null?(Xt=it.x,qt=it.y):(Xt=0,qt=0);const zt=Pt.convert(V.format),le=Pt.convert(V.type);ot.setTexture2D(V,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,V.unpackAlignment);const Ae=v.getParameter(v.UNPACK_ROW_LENGTH),Re=v.getParameter(v.UNPACK_IMAGE_HEIGHT),_n=v.getParameter(v.UNPACK_SKIP_PIXELS),ce=v.getParameter(v.UNPACK_SKIP_ROWS),Ft=v.getParameter(v.UNPACK_SKIP_IMAGES),He=A.isCompressedTexture?A.mipmaps[W]:A.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,He.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,He.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Dt),A.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,W,Xt,qt,Mt,At,zt,le,He.data):A.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,W,Xt,qt,He.width,He.height,zt,He.data):v.texSubImage2D(v.TEXTURE_2D,W,Xt,qt,Mt,At,zt,le,He),v.pixelStorei(v.UNPACK_ROW_LENGTH,Ae),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Re),v.pixelStorei(v.UNPACK_SKIP_PIXELS,_n),v.pixelStorei(v.UNPACK_SKIP_ROWS,ce),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ft),W===0&&V.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(A,V,tt=null,it=null,W=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,it=arguments[1]||null,A=arguments[2],V=arguments[3],W=arguments[4]||0);let Mt,At,Lt,Dt,Xt,qt,zt,le,Ae;const Re=A.isCompressedTexture?A.mipmaps[W]:A.image;tt!==null?(Mt=tt.max.x-tt.min.x,At=tt.max.y-tt.min.y,Lt=tt.max.z-tt.min.z,Dt=tt.min.x,Xt=tt.min.y,qt=tt.min.z):(Mt=Re.width,At=Re.height,Lt=Re.depth,Dt=0,Xt=0,qt=0),it!==null?(zt=it.x,le=it.y,Ae=it.z):(zt=0,le=0,Ae=0);const _n=Pt.convert(V.format),ce=Pt.convert(V.type);let Ft;if(V.isData3DTexture)ot.setTexture3D(V,0),Ft=v.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)ot.setTexture2DArray(V,0),Ft=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,V.unpackAlignment);const He=v.getParameter(v.UNPACK_ROW_LENGTH),ue=v.getParameter(v.UNPACK_IMAGE_HEIGHT),In=v.getParameter(v.UNPACK_SKIP_PIXELS),bs=v.getParameter(v.UNPACK_SKIP_ROWS),vn=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Re.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Re.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Dt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Xt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,qt),A.isDataTexture||A.isData3DTexture?v.texSubImage3D(Ft,W,zt,le,Ae,Mt,At,Lt,_n,ce,Re.data):V.isCompressedArrayTexture?v.compressedTexSubImage3D(Ft,W,zt,le,Ae,Mt,At,Lt,_n,Re.data):v.texSubImage3D(Ft,W,zt,le,Ae,Mt,At,Lt,_n,ce,Re),v.pixelStorei(v.UNPACK_ROW_LENGTH,He),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ue),v.pixelStorei(v.UNPACK_SKIP_PIXELS,In),v.pixelStorei(v.UNPACK_SKIP_ROWS,bs),v.pixelStorei(v.UNPACK_SKIP_IMAGES,vn),W===0&&V.generateMipmaps&&v.generateMipmap(Ft),F.unbindTexture()},this.initRenderTarget=function(A){at.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),F.unbindTexture()},this.resetState=function(){P=0,R=0,C=null,F.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Su?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Wa?"display-p3":"srgb"}}let kw=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class Hw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return rr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new O;class Aa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Aa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ru extends vr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ws;const Pr=new O,Xs=new O,qs=new O,js=new It,Lr=new It,Sm=new _e,Xo=new O,Ir=new O,qo=new O,Bf=new It,Vl=new It,zf=new It;class bm extends Ne{constructor(t=new Ru){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hw(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Aa(i,3,0,!1)),Ws.setAttribute("uv",new Aa(i,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Sm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;jo(Xo.set(-.5,-.5,0),qs,o,Xs,s,r),jo(Ir.set(.5,-.5,0),qs,o,Xs,s,r),jo(qo.set(.5,.5,0),qs,o,Xs,s,r),Bf.set(0,0),Vl.set(1,0),zf.set(1,1);let a=t.ray.intersectTriangle(Xo,Ir,qo,!1,Pr);if(a===null&&(jo(Ir.set(-.5,.5,0),qs,o,Xs,s,r),Vl.set(0,1),a=t.ray.intersectTriangle(Xo,qo,Ir,!1,Pr),a===null))return;const l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:Bn.getInterpolation(Pr,Xo,Ir,qo,Bf,Vl,zf,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function jo(n,t,e,i,s,r){js.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Lr.x=r*js.x-s*js.y,Lr.y=s*js.x+r*js.y):Lr.copy(js),n.copy(t),n.x+=Lr.x,n.y+=Lr.y,n.applyMatrix4(Sm)}class Vw extends je{constructor(t=null,e=1,i=1,s,r,o,a,l,c=pn,u=pn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kf extends Cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ys=new _e,Hf=new _e,Yo=[],Vf=new Ms,Gw=new _e,Dr=new ut,Ur=new go;class Em extends ut{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gw)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ms),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),Vf.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Vf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),Ur.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),t.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Hf.multiplyMatrices(i,Ys),Dr.matrixWorld=Hf,Dr.raycast(t,Yo);for(let o=0,a=Yo.length;o<a;o++){const l=Yo[o];l.instanceId=r,l.object=this,e.push(l)}Yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new kf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vw(new Float32Array(s*this.count),s,this.count,vu,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ti extends je{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qa extends gn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new O,u=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=i+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yt extends gn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let g=0;const _=[],p=i/2;let d=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(m,2));function M(){const b=new O,P=new O;let R=0;const C=(e-t)/i;for(let U=0;U<=r;U++){const w=[],E=U/r,I=E*(e-t)+t;for(let D=0;D<=s;D++){const H=D/s,J=H*l+a,rt=Math.sin(J),Y=Math.cos(J);P.x=I*rt,P.y=-E*i+p,P.z=I*Y,h.push(P.x,P.y,P.z),b.set(rt,C,Y).normalize(),f.push(b.x,b.y,b.z),m.push(H,1-E),w.push(g++)}_.push(w)}for(let U=0;U<s;U++)for(let w=0;w<r;w++){const E=_[w][U],I=_[w+1][U],D=_[w+1][U+1],H=_[w][U+1];u.push(E,I,H),u.push(I,D,H),R+=6}c.addGroup(d,R,0),d+=R}function y(b){const P=g,R=new It,C=new O;let U=0;const w=b===!0?t:e,E=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),g++;const I=g;for(let D=0;D<=s;D++){const J=D/s*l+a,rt=Math.cos(J),Y=Math.sin(J);C.x=w*Y,C.y=p*E,C.z=w*rt,h.push(C.x,C.y,C.z),f.push(0,E,0),R.x=rt*.5+.5,R.y=Y*.5*E+.5,m.push(R.x,R.y),g++}for(let D=0;D<s;D++){const H=P+D,J=I+D;b===!0?u.push(J,J+1,H):u.push(J+1,J,H),U+=3}c.addGroup(d,U,b===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class so extends Yt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new so(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cu extends gn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new O,b=new O,P=new O;for(let R=0;R<e.length;R+=3)m(e[R+0],y),m(e[R+1],b),m(e[R+2],P),l(y,b,P,M)}function l(M,y,b,P){const R=P+1,C=[];for(let U=0;U<=R;U++){C[U]=[];const w=M.clone().lerp(b,U/R),E=y.clone().lerp(b,U/R),I=R-U;for(let D=0;D<=I;D++)D===0&&U===R?C[U][D]=w:C[U][D]=w.clone().lerp(E,D/I)}for(let U=0;U<R;U++)for(let w=0;w<2*(R-U)-1;w++){const E=Math.floor(w/2);w%2===0?(f(C[U][E+1]),f(C[U+1][E]),f(C[U][E])):(f(C[U][E+1]),f(C[U+1][E+1]),f(C[U+1][E]))}}function c(M){const y=new O;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(M),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function u(){const M=new O;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const b=p(M)/2/Math.PI+.5,P=d(M)/Math.PI+.5;o.push(b,1-P)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],b=o[M+2],P=o[M+4],R=Math.max(y,b,P),C=Math.min(y,b,P);R>.9&&C<.1&&(y<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,y){const b=M*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){const M=new O,y=new O,b=new O,P=new O,R=new It,C=new It,U=new It;for(let w=0,E=0;w<r.length;w+=9,E+=6){M.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),R.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),U.set(o[E+4],o[E+5]),P.copy(M).add(y).add(b).divideScalar(3);const I=p(P);_(R,E+0,M,I),_(C,E+2,y,I),_(U,E+4,b,I)}}function _(M,y,b,P){P<0&&M.x===1&&(o[y]=M.x-1),b.x===0&&b.z===0&&(o[y]=P/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cu(t.vertices,t.indices,t.radius,t.details)}}class Pu extends gn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,m=new O,g=new It;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const d=r+p/i*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const p=_*(i+1);for(let d=0;d<i;d++){const M=d+p,y=M,b=M+i+1,P=M+i+2,R=M+1;a.push(y,b,R),a.push(b,P,R)}}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tn extends gn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,f=new O,m=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){const M=[],y=d/i;let b=0;d===0&&o===0?b=.5/e:d===i&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const R=P/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(R+b,1-y),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){const y=u[d][M+1],b=u[d][M],P=u[d+1][M],R=u[d+1][M+1];(d!==0||o>0)&&m.push(y,b,R),(d!==i-1||l<Math.PI)&&m.push(b,P,R)}this.setIndex(m),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lu extends Cu{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lu(t.radius,t.detail)}}class Ss extends gn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new O,h=new O,f=new O;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(_),h.y=(t+e*Math.cos(p))*Math.sin(_),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,d=(s+1)*(m-1)+g,M=(s+1)*m+g;o.push(_,p,M),o.push(p,d,M)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gt extends vr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nm,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ro extends Gt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Gf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ww{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Xw=new Ww;class Iu{constructor(t){this.manager=t!==void 0?t:Xw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Iu.DEFAULT_MATERIAL_NAME="__DEFAULT";class qw extends Iu{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Gf.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=io("img");function l(){u(),Gf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class jw extends Iu{constructor(t){super(t)}load(t,e,i,s){const r=new je,o=new qw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Du extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Gl=new _e,Wf=new O,Xf=new O;class wm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tu,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wf),Xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xf),e.updateMatrixWorld(),Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yw extends wm{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=pr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Tm extends Du{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yw}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const qf=new _e,Nr=new O,Wl=new O;class $w extends wm{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Nr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Nr),Wl.copy(i.position),Wl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Wl),i.updateMatrixWorld(),s.makeTranslation(-Nr.x,-Nr.y,-Nr.z),qf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf)}}class Kn extends Du{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $w}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Kw extends Du{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Am{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=jf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function jf(){return(typeof performance>"u"?Date:performance).now()}const Yf=new _e;class Zw{constructor(t,e,i=0,s=1/0){this.ray=new Eu(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new wu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yf),this}intersectObject(t,e=!0,i=[]){return Gc(t,this,i,e),i.sort($f),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Gc(t[s],this,i,e);return i.sort($f),i}}function $f(n,t){return n.distance-t.distance}function Gc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Gc(r[o],t,e,!0)}}class Kf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(We(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);class Jw extends EventTarget{constructor(t){super(),this.container=t,this.width=0,this.height=0,this.pixelRatio=1,this.handleResize=()=>{this.update(),this.dispatchEvent(new Event("resize"))},this.update(),window.addEventListener("resize",this.handleResize,{passive:!0})}update(){this.width=this.container.clientWidth,this.height=this.container.clientHeight;const t=this.width<=768?1:1.5;this.pixelRatio=Math.min(window.devicePixelRatio,t)}destroy(){window.removeEventListener("resize",this.handleResize)}}class Qw{constructor(){this.instance=new kw,this.instance.background=new ne("#0a0a12")}}const Zf={type:"change"},Xl={type:"start"},Jf={type:"end"},$o=new Eu,Qf=new Ni,t1=Math.cos(70*Se.DEG2RAD);class e1 extends ys{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",pt),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zf),i.update(),r=s.NONE},this.update=(function(){const S=new O,j=new vs().setFromUnitVectors(t.up,new O(0,1,0)),Q=j.clone().invert(),z=new O,L=new vs,Z=new O,wt=2*Math.PI;return function(ve=null){const te=i.object.position;S.copy(te).sub(i.target),S.applyQuaternion(j),a.setFromVector3(S),i.autoRotate&&r===s.NONE&&D(E(ve)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ce=i.minAzimuthAngle,Le=i.maxAzimuthAngle;isFinite(Ce)&&isFinite(Le)&&(Ce<-Math.PI?Ce+=wt:Ce>Math.PI&&(Ce-=wt),Le<-Math.PI?Le+=wt:Le>Math.PI&&(Le-=wt),Ce<=Le?a.theta=Math.max(Ce,Math.min(Le,a.theta)):a.theta=a.theta>(Ce+Le)/2?Math.max(Ce,a.theta):Math.min(Le,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ei=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=xt(a.radius);else{const ke=a.radius;a.radius=xt(a.radius*c),Ei=ke!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(Q),te.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let ke=null;if(i.object.isPerspectiveCamera){const ei=S.length();ke=xt(ei*c);const Gi=ei-ke;i.object.position.addScaledVector(b,Gi),i.object.updateMatrixWorld(),Ei=!!Gi}else if(i.object.isOrthographicCamera){const ei=new O(P.x,P.y,0);ei.unproject(i.object);const Gi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ei=Gi!==i.object.zoom;const yr=new O(P.x,P.y,0);yr.unproject(i.object),i.object.position.sub(yr).add(ei),i.object.updateMatrixWorld(),ke=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ke).add(i.object.position):($o.origin.copy(i.object.position),$o.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot($o.direction))<t1?t.lookAt(i.target):(Qf.setFromNormalAndCoplanarPoint(i.object.up,i.target),$o.intersectPlane(Qf,i.target))))}else if(i.object.isOrthographicCamera){const ke=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ke!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ei=!0)}return c=1,R=!1,Ei||z.distanceToSquared(i.object.position)>o||8*(1-L.dot(i.object.quaternion))>o||Z.distanceToSquared(i.target)>o?(i.dispatchEvent(Zf),z.copy(i.object.position),L.copy(i.object.quaternion),Z.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",St),i.domElement.removeEventListener("pointerdown",ot),i.domElement.removeEventListener("pointercancel",x),i.domElement.removeEventListener("wheel",K),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",x),i.domElement.getRootNode().removeEventListener("keydown",gt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",pt),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Kf,l=new Kf;let c=1;const u=new O,h=new It,f=new It,m=new It,g=new It,_=new It,p=new It,d=new It,M=new It,y=new It,b=new O,P=new It;let R=!1;const C=[],U={};let w=!1;function E(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function I(S){const j=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*j)}function D(S){l.theta-=S}function H(S){l.phi-=S}const J=(function(){const S=new O;return function(Q,z){S.setFromMatrixColumn(z,0),S.multiplyScalar(-Q),u.add(S)}})(),rt=(function(){const S=new O;return function(Q,z){i.screenSpacePanning===!0?S.setFromMatrixColumn(z,1):(S.setFromMatrixColumn(z,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(Q),u.add(S)}})(),Y=(function(){const S=new O;return function(Q,z){const L=i.domElement;if(i.object.isPerspectiveCamera){const Z=i.object.position;S.copy(Z).sub(i.target);let wt=S.length();wt*=Math.tan(i.object.fov/2*Math.PI/180),J(2*Q*wt/L.clientHeight,i.object.matrix),rt(2*z*wt/L.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(J(Q*(i.object.right-i.object.left)/i.object.zoom/L.clientWidth,i.object.matrix),rt(z*(i.object.top-i.object.bottom)/i.object.zoom/L.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function et(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function vt(S,j){if(!i.zoomToCursor)return;R=!0;const Q=i.domElement.getBoundingClientRect(),z=S-Q.left,L=j-Q.top,Z=Q.width,wt=Q.height;P.x=z/Z*2-1,P.y=-(L/wt)*2+1,b.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function xt(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function _t(S){h.set(S.clientX,S.clientY)}function Ct(S){vt(S.clientX,S.clientX),d.set(S.clientX,S.clientY)}function Wt(S){g.set(S.clientX,S.clientY)}function lt(S){f.set(S.clientX,S.clientY),m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;D(2*Math.PI*m.x/j.clientHeight),H(2*Math.PI*m.y/j.clientHeight),h.copy(f),i.update()}function mt(S){M.set(S.clientX,S.clientY),y.subVectors(M,d),y.y>0?et(I(y.y)):y.y<0&&q(I(y.y)),d.copy(M),i.update()}function ft(S){_.set(S.clientX,S.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),Y(p.x,p.y),g.copy(_),i.update()}function yt(S){vt(S.clientX,S.clientY),S.deltaY<0?q(I(S.deltaY)):S.deltaY>0&&et(I(S.deltaY)),i.update()}function Nt(S){let j=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),j=!0;break}j&&(S.preventDefault(),i.update())}function kt(S){if(C.length===1)h.set(S.pageX,S.pageY);else{const j=Ut(S),Q=.5*(S.pageX+j.x),z=.5*(S.pageY+j.y);h.set(Q,z)}}function Ht(S){if(C.length===1)g.set(S.pageX,S.pageY);else{const j=Ut(S),Q=.5*(S.pageX+j.x),z=.5*(S.pageY+j.y);g.set(Q,z)}}function re(S){const j=Ut(S),Q=S.pageX-j.x,z=S.pageY-j.y,L=Math.sqrt(Q*Q+z*z);d.set(0,L)}function v(S){i.enableZoom&&re(S),i.enablePan&&Ht(S)}function N(S){i.enableZoom&&re(S),i.enableRotate&&kt(S)}function X(S){if(C.length==1)f.set(S.pageX,S.pageY);else{const Q=Ut(S),z=.5*(S.pageX+Q.x),L=.5*(S.pageY+Q.y);f.set(z,L)}m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;D(2*Math.PI*m.x/j.clientHeight),H(2*Math.PI*m.y/j.clientHeight),h.copy(f)}function st(S){if(C.length===1)_.set(S.pageX,S.pageY);else{const j=Ut(S),Q=.5*(S.pageX+j.x),z=.5*(S.pageY+j.y);_.set(Q,z)}p.subVectors(_,g).multiplyScalar(i.panSpeed),Y(p.x,p.y),g.copy(_)}function F(S){const j=Ut(S),Q=S.pageX-j.x,z=S.pageY-j.y,L=Math.sqrt(Q*Q+z*z);M.set(0,L),y.set(0,Math.pow(M.y/d.y,i.zoomSpeed)),et(y.y),d.copy(M);const Z=(S.pageX+j.x)*.5,wt=(S.pageY+j.y)*.5;vt(Z,wt)}function nt(S){i.enableZoom&&F(S),i.enablePan&&st(S)}function at(S){i.enableZoom&&F(S),i.enableRotate&&X(S)}function ot(S){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",x)),!Tt(S)&&(Vt(S),S.pointerType==="touch"?Rt(S):B(S)))}function T(S){i.enabled!==!1&&(S.pointerType==="touch"?dt(S):G(S))}function x(S){switch(Ot(S),C.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",x),i.dispatchEvent(Jf),r=s.NONE;break;case 1:const j=C[0],Q=U[j];Rt({pointerId:j,pageX:Q.x,pageY:Q.y});break}}function B(S){let j;switch(S.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case pi.DOLLY:if(i.enableZoom===!1)return;Ct(S),r=s.DOLLY;break;case pi.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;Wt(S),r=s.PAN}else{if(i.enableRotate===!1)return;_t(S),r=s.ROTATE}break;case pi.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;_t(S),r=s.ROTATE}else{if(i.enablePan===!1)return;Wt(S),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Xl)}function G(S){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;lt(S);break;case s.DOLLY:if(i.enableZoom===!1)return;mt(S);break;case s.PAN:if(i.enablePan===!1)return;ft(S);break}}function K(S){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(S.preventDefault(),i.dispatchEvent(Xl),yt($(S)),i.dispatchEvent(Jf))}function $(S){const j=S.deltaMode,Q={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(j){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}return S.ctrlKey&&!w&&(Q.deltaY*=10),Q}function gt(S){S.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",ht,{passive:!0,capture:!0}))}function ht(S){S.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",ht,{passive:!0,capture:!0}))}function pt(S){i.enabled===!1||i.enablePan===!1||Nt(S)}function Rt(S){switch(Pt(S),C.length){case 1:switch(i.touches.ONE){case Ui.ROTATE:if(i.enableRotate===!1)return;kt(S),r=s.TOUCH_ROTATE;break;case Ui.PAN:if(i.enablePan===!1)return;Ht(S),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Ui.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;v(S),r=s.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(S),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Xl)}function dt(S){switch(Pt(S),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;X(S),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;st(S),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;nt(S),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;at(S),i.update();break;default:r=s.NONE}}function St(S){i.enabled!==!1&&S.preventDefault()}function Vt(S){C.push(S.pointerId)}function Ot(S){delete U[S.pointerId];for(let j=0;j<C.length;j++)if(C[j]==S.pointerId){C.splice(j,1);return}}function Tt(S){for(let j=0;j<C.length;j++)if(C[j]==S.pointerId)return!0;return!1}function Pt(S){let j=U[S.pointerId];j===void 0&&(j=new It,U[S.pointerId]=j),j.set(S.pageX,S.pageY)}function Ut(S){const j=S.pointerId===C[0]?C[1]:C[0];return U[j]}i.domElement.addEventListener("contextmenu",St),i.domElement.addEventListener("pointerdown",ot),i.domElement.addEventListener("pointercancel",x),i.domElement.addEventListener("wheel",K,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",gt,{passive:!0,capture:!0}),this.update()}}class n1{constructor(t,e){this.sizes=t,this.domElement=e,this.hasOrientationPermission=!1,this.orientationActive=!1,this.defaultPosition=new O(-4,1.7,7),this.initialTarget=new O(1.2,1.35,-2.5),this.fallbackAngle=0,this.lastUserInteraction=0,this.isUserInteracting=!1,this.navigationRoot=null,this.navigationTarget=null,this.navigationPosition=null,this.pointerStart=new It,this.pointerMoved=!1,this.raycaster=new Zw,this.pointer=new It,this.baseOffset=new O,this.previousTarget=new O,this.targetOffset=new O,this.verticalAxis=new O(0,1,0),this.interactiveObjects=[],this.minTarget=new O(-4.25,.65,-4.25),this.maxTarget=new O(4.25,3.8,4.25),this.startOrientationTracking=()=>{this.hasOrientationPermission||(typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(i=>{i==="granted"&&(this.hasOrientationPermission=!0,this.orientationActive=!0)}).catch(console.error):(this.hasOrientationPermission=!0,this.orientationActive=!0))},this.markInteraction=()=>{this.lastUserInteraction=performance.now(),this.isUserInteracting=!0},this.endInteraction=()=>{this.constrainTarget(),this.defaultPosition.copy(this.instance.position),this.initialTarget.copy(this.controls.target),this.fallbackAngle=0,this.isUserInteracting=!1,this.lastUserInteraction=performance.now()},this.handleNavigationPointerDown=i=>{i.button===0&&(this.pointerStart.set(i.clientX,i.clientY),this.pointerMoved=!1,this.navigationTarget=null,this.navigationPosition=null)},this.handleNavigationPointerMove=i=>{Math.hypot(i.clientX-this.pointerStart.x,i.clientY-this.pointerStart.y)>8&&(this.pointerMoved=!0)},this.handleNavigationPointerUp=i=>{if(i.button!==0||this.pointerMoved||!this.navigationRoot)return;const s=this.domElement.getBoundingClientRect();this.pointer.set((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.instance);const r=this.raycaster.intersectObject(this.navigationRoot,!0),o=r[0];if(!o)return;const a=r.map(({object:u})=>this.interactiveObjects.find(({root:h})=>{let f=u;for(;f;){if(f===h)return!0;f=f.parent}return!1})).find(u=>u!==void 0);if(a){a.action();return}const l=new O(Se.clamp(o.point.x,this.minTarget.x,this.maxTarget.x),1.7,Se.clamp(o.point.z,this.minTarget.z,this.maxTarget.z)),c=this.controls.target.clone().sub(this.instance.position);this.navigationPosition=l,this.navigationTarget=l.clone().add(c).clamp(this.minTarget,this.maxTarget),this.lastUserInteraction=performance.now(),this.fallbackAngle=0},this.setInstance(),this.setControls(),this.initOrientation(),this.initPointNavigation()}setInstance(){this.instance=new dn(60,this.sizes.width/this.sizes.height,.1,100),this.instance.position.copy(this.defaultPosition)}setControls(){this.controls=new e1(this.instance,this.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enablePan=!0,this.controls.panSpeed=.72,this.controls.screenSpacePanning=!1,this.controls.enableZoom=!0,this.controls.minDistance=2,this.controls.maxDistance=11,this.controls.target.copy(this.initialTarget),this.controls.minAzimuthAngle=-Math.PI,this.controls.maxAzimuthAngle=Math.PI,this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/1.7,this.controls.mouseButtons.LEFT=pi.ROTATE,this.controls.mouseButtons.MIDDLE=pi.DOLLY,this.controls.mouseButtons.RIGHT=pi.PAN,this.controls.touches.ONE=Ui.ROTATE,this.controls.touches.TWO=Ui.DOLLY_PAN,this.controls.listenToKeyEvents(window),this.controls.update()}initOrientation(){typeof window>"u"||typeof window.DeviceOrientationEvent>"u"||(window.addEventListener("pointerdown",this.startOrientationTracking,{once:!0,passive:!0}),window.addEventListener("touchstart",this.startOrientationTracking,{once:!0,passive:!0}),window.addEventListener("pointerdown",this.markInteraction,{passive:!0}),window.addEventListener("touchstart",this.markInteraction,{passive:!0}),window.addEventListener("wheel",this.markInteraction,{passive:!0}),window.addEventListener("pointerup",this.endInteraction,{passive:!0}),window.addEventListener("touchend",this.endInteraction,{passive:!0}),window.addEventListener("pointercancel",this.endInteraction,{passive:!0}),DeviceOrientationEvent.requestPermission||(this.hasOrientationPermission=!0,this.orientationActive=!0))}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}setNavigationRoot(t){this.navigationRoot=t}addInteraction(t,e){this.interactiveObjects.push({root:t,action:e})}update(){const e=performance.now()-this.lastUserInteraction;if(this.navigationTarget&&this.navigationPosition&&(this.controls.target.lerp(this.navigationTarget,.075),this.instance.position.lerp(this.navigationPosition,.075),this.controls.target.distanceToSquared(this.navigationTarget)<.001&&(this.controls.target.copy(this.navigationTarget),this.instance.position.copy(this.navigationPosition),this.defaultPosition.copy(this.instance.position),this.initialTarget.copy(this.controls.target),this.navigationTarget=null,this.navigationPosition=null)),e>3e3&&!this.isUserInteracting&&!this.navigationTarget){this.fallbackAngle+=.018;const s=Math.sin(this.fallbackAngle)*.22;this.baseOffset.copy(this.defaultPosition).sub(this.initialTarget),this.baseOffset.applyAxisAngle(this.verticalAxis,s),this.instance.position.copy(this.initialTarget).add(this.baseOffset),this.controls.target.copy(this.initialTarget)}this.controls.update(),this.constrainTarget()}constrainTarget(){this.previousTarget.copy(this.controls.target),this.controls.target.clamp(this.minTarget,this.maxTarget),this.targetOffset.copy(this.controls.target).sub(this.previousTarget),this.instance.position.add(this.targetOffset)}initPointNavigation(){this.domElement.addEventListener("pointerdown",this.handleNavigationPointerDown,{passive:!0}),this.domElement.addEventListener("pointermove",this.handleNavigationPointerMove,{passive:!0}),this.domElement.addEventListener("pointerup",this.handleNavigationPointerUp,{passive:!0})}destroy(){window.removeEventListener("pointerdown",this.startOrientationTracking),window.removeEventListener("touchstart",this.startOrientationTracking),window.removeEventListener("pointerdown",this.markInteraction),window.removeEventListener("touchstart",this.markInteraction),window.removeEventListener("wheel",this.markInteraction),window.removeEventListener("pointerup",this.endInteraction),window.removeEventListener("touchend",this.endInteraction),window.removeEventListener("pointercancel",this.endInteraction),this.domElement.removeEventListener("pointerdown",this.handleNavigationPointerDown),this.domElement.removeEventListener("pointermove",this.handleNavigationPointerMove),this.domElement.removeEventListener("pointerup",this.handleNavigationPointerUp),this.controls.dispose(),this.interactiveObjects=[]}}class i1{constructor(t,e){this.sizes=t,this.container=e,this.setInstance()}setInstance(){const t=window.matchMedia("(max-width: 768px)").matches;this.instance=new zw({antialias:!t,powerPreference:"high-performance"}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.shadowMap.enabled=!t,this.instance.shadowMap.type=Gp,this.instance.toneMapping=Xp,this.container.appendChild(this.instance.domElement)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}render(t,e){this.instance.render(t,e)}}class s1{constructor(t=10,e=10,i=8){this.palette=["#00d9ff","#ff287f","#ffd84d","#ff6b24","#65ff75"],this.elapsed=0,this.colorUpdateElapsed=Number.POSITIVE_INFINITY,this.colorUpdateInterval=window.innerWidth<=768?.12:.07,this.mesh=new Qt,this.gridSize=i;const s=new Pe(t,e),r=new Gt({color:328200,roughness:.9}),o=new ut(s,r);o.rotation.x=-Math.PI/2,o.position.y=-.01,this.mesh.add(o);const a=document.createElement("canvas");a.width=256,a.height=256,this.floorContext=a.getContext("2d"),this.drawTiles(0),this.floorTexture=new ti(a),this.floorTexture.colorSpace=Je,this.floorTexture.generateMipmaps=!1,this.floorTexture.minFilter=qe,this.floorTexture.magFilter=qe;const l=new ut(new Pe(t,e),new we({map:this.floorTexture,side:Ue,toneMapped:!1}));l.rotation.x=-Math.PI/2,l.position.y=0,l.receiveShadow=!0,this.mesh.add(l);const c=new jw().load("/images/totem.webp");c.colorSpace=Je,c.anisotropy=8;const u=new ut(new Pe(5,4.88),new we({map:c,transparent:!0,alphaTest:.02,depthWrite:!1,side:Ue}));u.rotation.x=-Math.PI/2,u.position.set(0,.025,.45),u.renderOrder=2,this.mesh.add(u)}drawTiles(t){const e=this.floorContext.canvas.width,i=e/this.gridSize,s=2,r=5.8,o=Math.floor(t/r)%3,a=t%r;this.floorContext.globalAlpha=1,this.floorContext.fillStyle="#030206",this.floorContext.fillRect(0,0,e,e);for(let l=0;l<this.gridSize;l++)for(let c=0;c<this.gridSize;c++){let u=0;if(o===0){const g=(l+c)%this.gridSize,_=a*1.35%this.gridSize,p=Math.abs(g-_),d=Math.min(p,this.gridSize-p);u=Math.pow(Math.max(0,1-d/1.45),2)}else if(o===1){const g=(this.gridSize-1)/2,_=c-g,p=l-g,d=Math.atan2(p,_),M=Math.hypot(_,p),y=d+M*.78-a*1.15;u=Math.pow((Math.cos(y)+1)/2,7)*Math.max(.25,1-M/8)}else{const g=(this.gridSize-1)/2,_=Math.abs(l-g)+Math.abs(c-g),p=a*1.45%(this.gridSize-1);u=Math.pow(Math.max(0,1-Math.abs(_-p)/1.15),2.2)}const h=c*i+s/2,f=l*i+s/2,m=i-s;this.floorContext.fillStyle=this.palette[(l*2+c)%this.palette.length],this.floorContext.globalAlpha=.17+u*.61,this.floorContext.fillRect(h,f,m,m)}this.floorContext.globalAlpha=1}update(t){this.elapsed+=t,this.colorUpdateElapsed+=t,!(this.colorUpdateElapsed<this.colorUpdateInterval)&&(this.colorUpdateElapsed=0,this.drawTiles(this.elapsed),this.floorTexture.needsUpdate=!0)}}class r1{constructor(t,e,i){const s=new Pe(t,e),r=new Gt({color:4473941,roughness:.6,metalness:.1});this.mesh=new ut(s,r),this.mesh.rotation.x=Math.PI*.5,this.mesh.position.set(0,i,0),this.mesh.receiveShadow=!0}}class o1{constructor(t,e,i){this.group=new Qt;const s=new Gt({color:5592422,roughness:.5,metalness:.1}),r=new Pe(t,e),o=new ut(r,s);o.position.set(0,e/2,-i/2),o.receiveShadow=!0;const a=new Pe(i,e),l=new ut(a,s);l.position.set(-t/2,e/2,0),l.rotation.y=Math.PI/2,l.receiveShadow=!0;const c=new Pe(i,e),u=new ut(c,s);u.position.set(t/2,e/2,0),u.rotation.y=-Math.PI/2,u.receiveShadow=!0;const h=s.clone();h.side=hn;const f=new ut(new Pe(t,e),h);f.position.set(0,e/2,i/2),f.receiveShadow=!0,this.group.add(o,l,u,f)}}class a1{constructor(t){this.lastSecond=-1,this.group=new Qt,this.targetDate=t;const e=window.matchMedia("(max-width: 768px)").matches?.5:1;this.canvas=document.createElement("canvas"),this.canvas.width=2048*e,this.canvas.height=512*e,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(e,e),this.texture=new ti(this.canvas),this.texture.minFilter=qe;const i=4.8,s=1.3,r=new se(i,s,.1),o=new Gt({color:657935,metalness:.8,roughness:.2}),a=new ut(r,o),l=new se(i+.12,s+.12,.02),c=new Gt({color:16711807,emissive:16711807,emissiveIntensity:1.8}),u=new ut(l,c);u.position.z=-.02;const h=new Pe(i-.2,s-.2),f=new we({map:this.texture,transparent:!0,side:Ue}),m=new ut(h,f);m.position.z=.055,this.group.add(a,u,m),this.group.position.set(-1.6,2.3,-4.85),this.updateText()}setTargetDate(t){this.targetDate=t,this.updateText()}updateText(){const t=new Date().getTime(),e=this.targetDate.getTime()-t;let i="00d  00h  00m  00s";if(e>0){const r=Math.floor(e/864e5),o=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),a=Math.floor(e%(1e3*60*60)/(1e3*60)),l=Math.floor(e%(1e3*60)/1e3),c=String(r).padStart(2,"0"),u=String(o).padStart(2,"0"),h=String(a).padStart(2,"0"),f=String(l).padStart(2,"0");i=`${c}d  ${u}h  ${h}m  ${f}s`}this.ctx.clearRect(0,0,2048,512),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,2048,512);const s=1024;this.ctx.font='900 92px "Courier New", monospace',this.ctx.textAlign="center",this.ctx.shadowColor="#ff0055",this.ctx.shadowBlur=25,this.ctx.fillStyle="#ff88aa",this.ctx.fillText("ALLA FESTA MANCANO:",s,115),this.ctx.font='700 68px "Courier New", monospace',this.ctx.shadowBlur=14,this.ctx.fillStyle="#ffffff",this.ctx.fillText("30 OTTOBRE 2026 · 21:30",s,225),this.ctx.font='900 122px "Courier New", monospace',this.ctx.fillStyle="rgba(40, 0, 20, 0.4)",this.ctx.shadowBlur=0,this.ctx.fillText("88d  88h  88m  88s",s,415),this.ctx.font='900 122px "Courier New", monospace',this.ctx.shadowColor="#ff0055",this.ctx.shadowBlur=25,this.ctx.fillStyle="#ffffff",this.ctx.fillText(i,s,415),this.texture.needsUpdate=!0}update(){const t=Math.floor(Date.now()/1e3);t!==this.lastSecond&&(this.lastSecond=t,this.updateText())}updateVisibility(t){this.group.visible=t.z>-4.85}}class ja{constructor(t=6813672){this.rings=[],this.elapsed=0,this.active=!1,this.group=new Qt,[0,.5].forEach(s=>{const r=new we({color:t,transparent:!0,opacity:.8,blending:cr,depthWrite:!1,side:Ue}),o=new ut(new Pu(.13,.18,32),r);this.group.add(o),this.rings.push({mesh:o,material:r,phase:s})});const e=new Gt({color:t,emissive:t,emissiveIntensity:2.2,transparent:!0,opacity:.9}),i=new ut(new qa(.07,24),e);i.position.z=.006,this.group.add(i)}setActive(t){this.active=t}update(t){this.elapsed+=t,this.rings.forEach(e=>{const i=(this.elapsed*(this.active?.65:.45)+e.phase)%1,s=1+i*1.8;e.mesh.scale.setScalar(s),e.material.opacity=(1-i)*(this.active?.95:.68)})}}class l1{constructor(){this.turntables=[],this.platters=[],this.scratchTime=0,this.group=new Qt;const t=new Gt({color:1118485,roughness:.2,metalness:.5}),e=new Gt({color:3355443,metalness:.8,roughness:.2}),i=new Gt({color:328965,roughness:.3,metalness:.1}),s=new se(2.2,1,.9),r=new ut(s,t);r.position.y=.5,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const o=new se(2.1,.05,.02),a=new Gt({color:16711816,emissive:16711816,emissiveIntensity:1.5}),l=new ut(o,a);l.position.set(0,.8,.46),this.group.add(l);const c=new se(.5,.06,.4),u=new Yt(.18,.18,.02,32);[-.6,.6].forEach(_=>{const p=new Qt;p.position.x=_;const d=new ut(c,e);d.position.set(0,1.03,0),p.add(d);const M=new Qt;M.position.y=1.07;const y=new ut(u,i);M.add(y);const b=new Yt(.06,.06,.022,16),P=new we({color:_<0?55807:16711765}),R=new ut(b,P);R.position.y=.012,M.add(R),p.add(M),this.turntables.push(p),this.platters.push(M),this.group.add(p)});const h=new se(.45,.07,.45),f=new ut(h,e);f.position.set(0,1.03,0),this.group.add(f);for(let _=0;_<4;_++){const p=new se(.03,.02,.03),d=new we({color:_%2===0?65280:16711680}),M=new ut(p,d);M.position.set(-.1+_*.06,1.07,-.1),this.group.add(M)}const m=new se(.4,.7,.4),g=new Gt({color:1710618,roughness:.6});[-1.2,1.2].forEach(_=>{const p=new ut(m,g);p.position.set(_,1.15,-.1),p.rotation.y=_<0?.3:-.3,this.group.add(p)}),this.interactionPulse=new ja,this.interactionPulse.group.position.set(0,.5,.472),this.group.add(this.interactionPulse.group),this.group.position.set(3.5,0,-3.5),this.group.rotation.y=-Math.PI/4}update(t){this.interactionPulse.update(t),this.scratchTime=Math.max(0,this.scratchTime-t);const e=this.scratchTime>0?18:1.8;this.platters.forEach((i,s)=>{i.rotation.y+=t*e*(s===0?1:-1)})}setPlaying(t){this.interactionPulse.setActive(t)}scratch(){this.scratchTime=1.1}}class c1{constructor(){this.backWallElements=[],this.rightWallElements=[],this.group=new Qt;const t=(a,l="6",c=512,u=1.6)=>{const h=document.createElement("canvas");h.width=c,h.height=768;const f=h.getContext("2d");f.clearRect(0,0,h.width,h.height),f.textAlign=a,f.textBaseline="middle",f.font='600 540px "Trebuchet MS", sans-serif',f.shadowColor="#ff007f",f.shadowBlur=50,f.lineWidth=9,f.strokeStyle="#ff007f";const m=a==="right"?h.width-12:12;f.strokeText(l,m,h.height/2),f.shadowBlur=15,f.shadowColor="#ffffff",f.fillStyle="#ffe6f2",f.fillText(l,m,h.height/2);const g=new ti(h);return g.minFilter=qe,new ut(new Pe(u,2.4),new we({map:g,transparent:!0,side:Ue,depthWrite:!1}))},e=t("right","'6",640,2);e.position.set(3.95,4.05,-4.94);const i=t("left");i.position.set(4.94,4.05,-4.15),i.rotation.y=-Math.PI/2,this.group.add(e,i),this.backWallElements.push(e),this.rightWallElements.push(i);const s=(a,l)=>{const c=document.createElement("canvas");c.width=1024,c.height=256;const u=c.getContext("2d");u.clearRect(0,0,c.width,c.height),u.textAlign=l,u.textBaseline="middle",u.font='600 174px "Trebuchet MS", sans-serif',u.shadowColor="#b8ff42",u.shadowBlur=38,u.lineWidth=5,u.strokeStyle="#b8ff42";const h=l==="right"?c.width-12:12;u.strokeText(a,h,c.height/2),u.shadowColor="#ffffff",u.shadowBlur=10,u.fillStyle="#f4ffd8",u.fillText(a,h,c.height/2);const f=new ti(c);return f.minFilter=qe,new ut(new Pe(3.2,.8),new we({map:f,transparent:!0,side:Ue,depthWrite:!1}))},r=s("CELEB","right");r.position.set(3.35,3.1,-4.94);const o=s("RATION","left");o.position.set(4.94,3.1,-3.35),o.rotation.y=-Math.PI/2,this.group.add(r,o),this.backWallElements.push(r),this.rightWallElements.push(o)}updateVisibility(t){const e=t.z>-4.95,i=t.x<4.95;this.backWallElements.forEach(s=>{s.visible=e}),this.rightWallElements.forEach(s=>{s.visible=i})}}class td{constructor(){this.particles=[],this.transform=new Ne,this.count=150,this.roomSize=10,this.roomHeight=4,this.clock=new Am,this.group=new Qt;const t=new Pe(.06,.12),e=new Gt({color:14540253,metalness:.95,roughness:.1,side:Ue,emissive:2236962});this.mesh=new Em(t,e,this.count),this.mesh.instanceMatrix.setUsage(sm),this.mesh.frustumCulled=!1,this.group.add(this.mesh);for(let i=0;i<this.count;i++){const s=(Math.random()-.5)*(this.roomSize-1),r=Math.random()*this.roomHeight,o=(Math.random()-.5)*(this.roomSize-1),a=new O(s,r,o),l=new Gn(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),c=new O((Math.random()-.5)*.2,-(.5+Math.random()*.8),(Math.random()-.5)*.2),u=new O((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2);this.particles.push({position:a,rotation:l,velocity:c,rotSpeed:u})}this.clock.start()}update(){const t=this.clock.getDelta();this.particles.forEach((e,i)=>{e.position.addScaledVector(e.velocity,t),e.rotation.x+=e.rotSpeed.x*t,e.rotation.y+=e.rotSpeed.y*t,e.rotation.z+=e.rotSpeed.z*t,e.position.y<=0&&(e.position.y=this.roomHeight,e.position.x=(Math.random()-.5)*(this.roomSize-1),e.position.z=(Math.random()-.5)*(this.roomSize-1)),this.transform.position.copy(e.position),this.transform.rotation.copy(e.rotation),this.transform.updateMatrix(),this.mesh.setMatrixAt(i,this.transform.matrix)}),this.mesh.instanceMatrix.needsUpdate=!0}}class u1{constructor(){this.fingerPairs=[],this.jetFlames=[],this.ledMaterials=[],this.notes=[],this.elapsed=0,this.playing=!1,this.paletteOffset=0,this.performanceTime=null,this.group=new Qt,this.group.position.set(0,0,-.42),this.body=new Qt,this.group.add(this.body);const t=new Gt({color:14148328,metalness:.78,roughness:.24}),e=new Gt({color:1120288,metalness:.7,roughness:.3}),i=new Gt({color:462872,metalness:.35,roughness:.22}),s=new ut(new se(.72,.72,.42),t);s.position.y=1.48,s.castShadow=!0,this.body.add(s);const r=new ut(new se(.48,.34,.025),i);r.position.set(0,1.5,.225),this.body.add(r);const o=new ut(new se(.86,.58,.56),t);o.position.y=2.13,o.castShadow=!0,this.body.add(o);const a=new ut(new se(.65,.34,.025),i);a.position.set(0,2.13,.295),this.body.add(a),this.headHitArea=new ut(new se(.9,.62,.08),new we({transparent:!0,opacity:0,depthWrite:!1})),this.headHitArea.position.set(0,2.13,.34),this.body.add(this.headHitArea),[-.2,.2].forEach(h=>{const f=this.createLedMaterial(6813672),m=new ut(new tn(.065,16,12),f);m.scale.y=.72,m.position.set(h,2.17,.32),this.body.add(m)}),[-.2,0,.2].forEach((h,f)=>{const m=new ut(new se(.09,.12+f*.045,.035),this.createLedMaterial(f===0?16732058:f===1?6813672:16767053));m.position.set(h,1.48,.245),this.body.add(m)});const l=new ut(new Yt(.018,.018,.35,10),e);l.position.set(0,2.59,0),this.body.add(l);const c=new ut(new tn(.075,16,12),this.createLedMaterial(16732058));c.position.set(0,2.79,0),this.body.add(c);const u=new ut(new Ss(.48,.055,12,32,Math.PI),e);u.position.set(0,2.23,0),u.rotation.z=Math.PI,this.body.add(u),[-.47,.47].forEach(h=>{const f=new ut(new Yt(.14,.14,.11,20),e);f.rotation.z=Math.PI/2,f.position.set(h,2.12,0),this.body.add(f)}),this.leftArm=this.createArm(-1,t,e),this.rightArm=this.createArm(1,t,e),this.leftLeg=this.createLeg(-1,t,e),this.rightLeg=this.createLeg(1,t,e),this.body.add(this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.createNotes()}update(t){if(this.elapsed+=t,this.performanceTime!==null)this.performanceTime+=t,this.updatePerformance(this.performanceTime);else{this.body.position.y=Math.sin(this.elapsed*(this.playing?5.2:2.4))*(this.playing?.075:.035),this.body.rotation.y=Math.sin(this.elapsed*1.35)*.055,this.body.rotation.x=this.playing?Math.sin(this.elapsed*8)*.09:0;const e=this.playing?1.32+Math.sin(this.elapsed*5.5)*.22:.38+(Math.sin(this.elapsed*3.5)+1)*.1;this.leftArm.rotation.z=-e,this.rightArm.rotation.z=e,this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.fingerPairs.forEach(i=>{i.visible=!1}),this.jetFlames.forEach(i=>{i.visible=!1})}this.ledMaterials.forEach((e,i)=>{const s=(this.elapsed*.12+i*.17+this.paletteOffset)%1;e.color.setHSL(s,.9,.62),e.emissive.setHSL(s,.9,.5),e.emissiveIntensity=1.7+Math.sin(this.elapsed*4+i)*.55}),this.notes.forEach((e,i)=>{const s=(this.elapsed*e.speed+e.phase)%1;e.sprite.position.set(e.startX+Math.sin(s*Math.PI*3+i)*.18,1.2+s*2.25,.12+Math.cos(s*Math.PI*2+i)*.08),e.sprite.material.opacity=Math.sin(s*Math.PI)*.95;const r=.34+s*.18;e.sprite.scale.set(r,r,1)})}setPlaying(t){this.playing=t,this.notes.forEach(e=>{e.sprite.visible=t})}cycleLedPalette(){this.paletteOffset=(this.paletteOffset+.23)%1}performDance(){this.performanceTime===null&&(this.performanceTime=0,this.cycleLedPalette())}updatePerformance(t){if(this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.fingerPairs.forEach(i=>{i.visible=!1}),this.jetFlames.forEach(i=>{i.visible=!1}),t<.45){const i=t/.45;this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.y=-Math.sin(i*Math.PI)*.16,this.body.rotation.x=i*.12,this.leftArm.rotation.z=-.25,this.rightArm.rotation.z=.25,this.leftLeg.rotation.x=-i*.32,this.rightLeg.rotation.x=-i*.32;return}if(t<2.35){const i=(t-.45)/1.9,s=Se.smoothstep(i,.12,.92),r=1-i,o=r*r*0+2*r*i*3.8+i*i*-.5,a=Se.smoothstep(i,.34,.7);this.group.position.set(0,o,Se.lerp(-.42,3.8,s)),this.group.rotation.set(-a*Math.PI*2,0,0),this.leftArm.rotation.z=-1.65,this.rightArm.rotation.z=1.65,this.leftLeg.rotation.x=-Math.sin(i*Math.PI)*.55,this.rightLeg.rotation.x=-Math.sin(i*Math.PI)*.55;return}if(this.group.position.set(0,-.5,3.8),this.group.rotation.set(0,0,0),t<3.35){const i=(t-2.35)/1,s=Math.sin(i*Math.PI);this.body.position.y=-s*.26,this.body.rotation.x=s*.1,this.leftLeg.rotation.x=-s*.38,this.rightLeg.rotation.x=-s*.38,this.leftArm.rotation.z=Se.lerp(-1.45,-.55,i),this.rightArm.rotation.z=Se.lerp(1.45,.55,i);return}if(t<4.1){const i=t-3.35,s=Math.sin(i*Math.PI*4);this.body.position.y=Math.abs(s)*.07,this.body.rotation.y=s*.16,this.leftArm.rotation.z=-.72+s*.18,this.rightArm.rotation.z=.72+s*.18;return}if(t<6.2){const i=t-4.1,s=Math.sin(i*Math.PI*1.6)>=0,r=Math.abs(Math.sin(i*Math.PI*3.2)),o=Se.smoothstep((i-1.7)/.4,0,1),a=s?-.62:-2.35,l=s?2.35:.62,c=s?-.28:.1,u=s?.1:-.28;this.body.position.y=r*.1*(1-o),this.body.rotation.set(0,(s?-.22:.22)*(1-o),(s?-.12:.12)*(1-o)),this.leftArm.rotation.z=Se.lerp(a,-.72,o),this.rightArm.rotation.z=Se.lerp(l,.72,o),this.leftLeg.rotation.x=Se.lerp(c,0,o),this.rightLeg.rotation.x=Se.lerp(u,0,o);return}if(t<7.7){const i=t-6.2,s=i<.35?Se.smoothstep(i/.35,0,1):i<.9?1:1-Se.smoothstep((i-.9)/.6,0,1);this.body.position.y=-s*.38,this.body.rotation.x=s*.06,this.leftLeg.rotation.x=-s*Math.PI/2,this.rightLeg.rotation.x=s*Math.PI/2,this.leftArm.rotation.z=Se.lerp(-.72,-1.45,s),this.rightArm.rotation.z=Se.lerp(.72,1.45,s);return}if(t<9.4){const i=t-7.7,s=Math.floor(i/.42)%2===0,r=Math.sin(i%.42/.42*Math.PI);this.body.position.y=Math.abs(Math.sin(i*Math.PI*3))*.06,this.body.rotation.y=(s?1:-1)*.08*r,this.leftArm.rotation.z=s?2.28-r*.18:-.72,this.rightArm.rotation.z=s?.72:-2.28+r*.18,this.leftArm.rotation.x=s?-.32:0,this.rightArm.rotation.x=s?0:-.32,this.fingerPairs[0].visible=s,this.fingerPairs[1].visible=!s,this.leftLeg.rotation.x=-Math.sin(i*Math.PI*2)*.18,this.rightLeg.rotation.x=Math.sin(i*Math.PI*2)*.18;return}if(t<11.1){const i=t-9.4,s=Math.sin(i*Math.PI*4),r=Math.sign(Math.sin(i*Math.PI*3));this.body.position.y=Math.abs(s)*.12,this.body.rotation.set(r*.08,s*.28,-s*.1),this.leftArm.rotation.z=-1.25+r*.55,this.rightArm.rotation.z=1.25+r*.55,this.leftLeg.rotation.x=s*.55,this.rightLeg.rotation.x=-s*.55;return}if(t<11.8){const i=(t-11.1)/.7,s=i*i;this.group.position.set(0,Se.lerp(-.5,1.35,s),3.8),this.group.rotation.set(-.08*(1-i),0,0),this.body.position.y=-Math.sin(i*Math.PI)*.12,this.leftArm.rotation.z=-.55,this.rightArm.rotation.z=.55,this.leftLeg.rotation.x=-.18*(1-i),this.rightLeg.rotation.x=-.18*(1-i),this.setJetFlames(.45+i*.55);return}if(t<13.9){const i=(t-11.8)/2.1,s=i*i*(3-2*i);this.group.position.set(0,1.35+Math.sin(i*Math.PI)*.65,Se.lerp(3.8,-.42,s)),this.group.rotation.set(-Math.sin(i*Math.PI)*.12,0,0),this.leftArm.rotation.z=-.72+Math.sin(i*Math.PI*2)*.08,this.rightArm.rotation.z=.72-Math.sin(i*Math.PI*2)*.08,this.setJetFlames(.9+Math.sin(this.elapsed*28)*.1);return}if(t<14.65){const i=(t-13.9)/.75,s=i*i*(3-2*i);this.group.position.set(0,Se.lerp(1.35,0,s),-.42),this.group.rotation.set(0,0,0),this.leftArm.rotation.z=-.5,this.rightArm.rotation.z=.5,this.setJetFlames(Math.max(.15,1-i));return}if(t<15.1){const i=(t-14.65)/.45;this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.y=-Math.sin(i*Math.PI)*.11,this.leftArm.rotation.z=-.5,this.rightArm.rotation.z=.5;return}this.performanceTime=null,this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.jetFlames.forEach(i=>{i.visible=!1})}setJetFlames(t){this.jetFlames.forEach((e,i)=>{const s=.85+Math.sin(this.elapsed*34+i*2.4)*.15;e.visible=!0,e.scale.set(.8+t*.2,t*s,.8+t*.2)})}createLedMaterial(t){const e=new Gt({color:t,emissive:t,emissiveIntensity:2,roughness:.25});return this.ledMaterials.push(e),e}createArm(t,e,i){const s=new Qt;s.position.set(t*.48,1.67,.02),s.rotation.z=t*.38;const r=new ut(new Yt(.085,.1,.5,14),e);r.position.y=-.22,s.add(r);const o=new ut(new tn(.12,16,12),i);o.position.set(0,-.52,.13);const a=new Qt;return a.position.set(0,-.57,.17),[-.035,.035].forEach(l=>{const c=new ut(new Yt(.018,.022,.2,8),new Gt({color:6813672,emissive:6813672,emissiveIntensity:1.5}));c.position.set(l,-.08,0),a.add(c)}),a.visible=!1,this.fingerPairs.push(a),s.add(o,a),s}createLeg(t,e,i){const s=new Qt;s.position.set(t*.22,1.16,0);const r=new ut(new Yt(.09,.105,.58,14),e);r.position.y=-.27;const o=new ut(new se(.22,.12,.36),i);o.position.set(0,-.59,.1);const a=new Qt;a.position.set(0,-.8,.08);const l=new ut(new so(.145,.64,14),new we({color:16727951,transparent:!0,opacity:.92})),c=new ut(new so(.078,.46,12),new we({color:16777215,transparent:!0,opacity:1}));return l.rotation.z=Math.PI,c.rotation.z=Math.PI,c.position.y=.03,a.add(l,c),a.visible=!1,this.jetFlames.push(a),s.add(r,o,a),s}createNotes(){const t=[-1.55,-.9,-.28,.35,.95,1.55];["♪","♫","♪","♬","♫","♪"].forEach((e,i)=>{const s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");if(!r)return;r.clearRect(0,0,128,128),r.fillStyle="#ffffff",r.font="700 104px Georgia",r.textAlign="center",r.textBaseline="middle",r.shadowColor="#ffffff",r.shadowBlur=20,r.fillText(e,64,66);const o=new ti(s);o.colorSpace=Je;const a=new Ru({map:o,color:16777215,transparent:!0,depthWrite:!1}),l=new bm(a);l.visible=!1,this.group.add(l),this.notes.push({sprite:l,speed:.12+i*.012,phase:i/t.length,startX:t[i]})})}}class h1{constructor(){this.heads=[],this.elapsed=0,this.updateElapsed=0,this.updateInterval=window.matchMedia("(max-width: 768px)").matches?1/30:0,this.boostTime=0,this.worldPosition=new O,this.lightOrigin=new O,this.targetWorldPosition=new O,this.lightDirection=new O,this.upDirection=new O(0,1,0),this.group=new Qt,this.group.position.set(-4.15,0,-3.7);const t=new Gt({color:1514016,metalness:.9,roughness:.25}),e=new Gt({color:6845053,metalness:1,roughness:.16}),i=new ut(new Yt(.38,.5,.2,24),t);i.position.y=.1,i.castShadow=!0;const s=new ut(new Yt(.07,.09,3.75,14),e);s.position.y=1.98,s.castShadow=!0;const r=new ut(new tn(.13,16,12),e);r.position.y=3.88,this.group.add(i,s,r);const o=document.createElement("canvas");o.width=128,o.height=128;const a=o.getContext("2d"),l=a.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.28,"rgba(255,255,255,0.8)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,128,128);const c=new ti(o),u=[16722047,16767037,6684533,3529215,11099391],h=.105,f=.82;u.forEach((m,g)=>{const _=.78+g*.67,p=new Qt;p.position.set(0,_,0);const d=new ut(new Ss(.21,.035,10,20,Math.PI),e);d.rotation.z=Math.PI,d.position.z=.02;const M=new ut(new se(.34,.34,.4),t);M.position.z=.02,M.castShadow=!0;const y=new Gt({color:m,emissive:m,emissiveIntensity:2.6}),b=new ut(new qa(h,20),y);b.position.z=.225,p.add(d,M,b),this.group.add(p);const P=new Ne;P.position.set(4,1,-1.08);const R=new Tm(m,42,16,Math.PI/15,.55,1.15);R.position.set(0,0,.225),R.target=P,R.castShadow=g===2,p.add(R);const C=new we({color:m,transparent:!0,opacity:.17,blending:cr,depthWrite:!1}),U=new ut(new Yt(f/2,h,1,20,1,!0),C),w=new we({map:c,color:m,transparent:!0,opacity:.72,blending:cr,depthWrite:!1,side:Ue}),E=new ut(new Pe(f,f),w);this.group.add(P,U,E),this.heads.push({fixture:p,light:R,target:P,ray:U,rayMaterial:C,lensMaterial:y,wallSpot:E,phase:g*.8})})}update(t){if(this.updateElapsed+=t,this.updateElapsed<this.updateInterval)return;const e=this.updateElapsed;this.updateElapsed=0,this.boostTime=Math.max(0,this.boostTime-e),this.elapsed+=e*(this.boostTime>0?3.2:1),this.heads.forEach((i,s)=>{const r=(this.elapsed*(.1+s*.008)+i.phase)%4,o=Math.floor(r),a=r-o,l=4.79,c=-4.45+a*8.9,u=.65+(Math.sin(this.elapsed*.75+s*1.1)+1)*1.65,h=this.worldPosition;o===0?(h.set(c,u,-l),i.wallSpot.rotation.set(0,0,0)):o===1?(h.set(l,u,c),i.wallSpot.rotation.set(0,-Math.PI/2,0)):o===2?(h.set(-c,u,l),i.wallSpot.rotation.set(0,Math.PI,0)):(h.set(-l,u,-c),i.wallSpot.rotation.set(0,Math.PI/2,0));const f=h.sub(this.group.position);i.target.position.copy(f),i.wallSpot.position.copy(f);const m=this.targetWorldPosition.copy(i.target.position).add(this.group.position);i.fixture.lookAt(m);const g=this.lightOrigin;i.light.getWorldPosition(g),g.sub(this.group.position);const _=this.lightDirection.copy(i.target.position).sub(g).normalize(),p=g.distanceTo(i.target.position);i.ray.position.copy(g).addScaledVector(_,p/2),i.ray.scale.set(1,p,1),i.ray.quaternion.setFromUnitVectors(this.upDirection,_),i.rayMaterial.opacity=.13+Math.sin(this.elapsed*2.5+s)*.035,i.lensMaterial.emissiveIntensity=2.2+Math.sin(this.elapsed*3+s)*.8})}boost(){this.boostTime=1.4}}class f1{constructor(){this.elapsed=0,this.throwProgress=null,this.glassShards=[],this.bubbles=[],this.bubbleTime=0,this.drinkColorIndex=0,this.group=new Qt,this.group.position.set(.92,0,.4);const t=new Gt({color:14477033,metalness:.82,roughness:.22}),e=new Gt({color:1053980,metalness:.72,roughness:.28}),i=new Gt({color:16722047,emissive:16722047,emissiveIntensity:1.5}),s=new ut(new se(.52,.62,.34),t);s.position.y=1.43;const r=new ut(new se(.37,.4,.025),i);r.position.set(0,1.4,.185);const o=new ut(new se(.62,.46,.46),t);o.position.y=1.97;const a=new ut(new se(.46,.25,.025),e);a.position.set(0,1.98,.245),this.group.add(s,r,o,a),[-.14,.14].forEach(g=>{const _=new ut(new tn(.045,14,10),i);_.position.set(g,2,.265),this.group.add(_)});const l=new ut(new tn(.05,12,8),e);l.position.set(0,1.7,.21);const c=new so(.11,.18,3);[-1,1].forEach(g=>{const _=new ut(c,e);_.position.set(g*.1,1.7,.2),_.rotation.z=g*Math.PI/2,this.group.add(_)}),this.group.add(l),this.leftArm=this.createArm(-1,t,e),this.rightArm=this.createArm(1,t,e),this.group.add(this.leftArm,this.rightArm),this.shaker=new Qt;const u=new ut(new Yt(.09,.12,.34,16),e),h=new ut(new Yt(.07,.09,.1,16),t);h.position.y=.22,this.shaker.add(u,h),this.shaker.position.set(0,1.38,.34),this.group.add(this.shaker),this.drinkMaterial=new Gt({color:16722047,emissive:16722047,emissiveIntensity:.9,transparent:!0,opacity:0}),this.servedDrink=new Qt,this.servedDrink.position.set(-.34,0,.55),this.glass=new ut(new Yt(.13,.095,.28,18,1,!0),new ro({color:16777215,transmission:.75,transparent:!0,opacity:.42,roughness:.08,side:Ue})),this.glass.position.y=1.24,this.liquid=new ut(new Yt(.105,.078,.19,16),this.drinkMaterial),this.liquid.position.y=1.21,this.servedDrink.add(this.glass,this.liquid);const f=new ro({color:15268863,transmission:.72,transparent:!0,opacity:.68,roughness:.12});for(let g=0;g<10;g++){const _=new ut(new Lu(.045+g%3*.018),f);_.visible=!1,this.glassShards.push(_),this.servedDrink.add(_)}const m=new we({color:16777215,transparent:!0,opacity:.75});for(let g=0;g<9;g++){const _=new ut(new tn(.018+g%3*.006,8,6),m);_.visible=!1,this.bubbles.push(_),this.servedDrink.add(_)}this.group.add(this.servedDrink),this.pourStream=new ut(new Yt(.018,.018,.5,8),new we({color:16722047,transparent:!0,opacity:.75})),this.pourStream.position.set(-.34,1.58,.5),this.pourStream.visible=!1,this.group.add(this.pourStream)}update(t){if(this.elapsed+=t,this.updateBubbles(t),this.throwProgress!==null){this.throwProgress+=t;const i=this.throwProgress,s=Math.min(i/1.5,1),r=Math.sin(s*Math.PI);if(this.shaker.position.set(0,1.42+r*2.2,.34),this.shaker.rotation.z=s*Math.PI*4,this.group.rotation.y=Se.smoothstep(s,.12,.88)*Math.PI*2,i>=1.5&&i<2.4){const o=(i-1.5)/.9;this.shaker.position.set(-.34,1.88,.42),this.shaker.rotation.z=1.05,this.pourStream.visible=o>.08,this.drinkMaterial.opacity=Math.min(.82,o)}else if(i>=2.4&&i<4.25){const o=1-Math.pow(1-(i-2.4)/1.85,3);this.pourStream.visible=!1,this.shaker.position.set(0,1.38,.34),this.shaker.rotation.z=0,this.servedDrink.position.x=-.34-o*2.16}else if(i>=4.25&&i<4.95){const o=(i-4.25)/.7;this.shaker.position.set(-.08,1.17,.48),this.shaker.rotation.z=Math.PI/2,this.servedDrink.position.x=-2.5-o*.18,this.servedDrink.position.y=-o*1.18,this.servedDrink.rotation.z=o*Math.PI*1.35,o>.82&&this.breakGlass(o)}else if(i>=4.95&&i<7.25){const o=i-4.95;this.breakGlass(1),this.shaker.position.set(-.08,1.17,.48),this.shaker.rotation.z=Math.PI/2,this.group.rotation.y=-.72+Math.sin(o*16)*.05,this.group.position.y=Math.abs(Math.sin(o*18))*.045,this.leftArm.rotation.z=2.9+Math.sin(o*13)*.1,this.rightArm.rotation.z=-2.9-Math.sin(o*13)*.1}else if(i>=7.25){const o=Math.min((i-7.25)/.75,1);this.group.rotation.y=Se.lerp(-.72,0,o),this.group.position.y=0,this.leftArm.rotation.z=Se.lerp(2.9,1.02,o),this.rightArm.rotation.z=Se.lerp(-2.9,-1.02,o),this.shaker.position.lerp(new O(0,1.38,.34),o),this.shaker.rotation.z=Se.lerp(Math.PI/2,0,o)}if(i<4.95){const o=Math.sin(Math.min(i/2.1,1)*Math.PI);this.leftArm.rotation.z=1.02-o*.28,this.rightArm.rotation.z=-1.02+o*.28}i>=8&&(this.throwProgress=null,this.shaker.position.set(0,1.38,.34),this.shaker.rotation.z=0,this.group.rotation.y=0,this.group.position.y=0,this.leftArm.rotation.z=1.02,this.rightArm.rotation.z=-1.02,this.pourStream.visible=!1);return}const e=Math.sin(this.elapsed*10);this.shaker.position.x=e*.055,this.shaker.position.y=1.38+Math.abs(e)*.045,this.shaker.rotation.z=e*.16,this.leftArm.rotation.z=1.02+e*.08,this.rightArm.rotation.z=-1.02+e*.08,this.group.rotation.y=Math.sin(this.elapsed*1.4)*.035}throwShaker(){this.throwProgress===null&&(this.throwProgress=0,this.servedDrink.position.set(-.34,0,.55),this.servedDrink.rotation.set(0,0,0),this.glass.visible=!0,this.liquid.visible=!0,this.glassShards.forEach(t=>{t.visible=!1}),this.drinkMaterial.opacity=0,this.bubbleTime=0,this.bubbles.forEach(t=>{t.visible=!1}))}activateDrink(){if(!this.glass.visible||this.drinkMaterial.opacity===0)return;const t=[16722047,55807,16767053,16739108,6684533];this.drinkColorIndex=(this.drinkColorIndex+1)%t.length;const e=t[this.drinkColorIndex];this.drinkMaterial.color.setHex(e),this.drinkMaterial.emissive.setHex(e),this.drinkMaterial.opacity=.86,this.bubbleTime=2.4}updateBubbles(t){this.bubbleTime=Math.max(0,this.bubbleTime-t),this.bubbles.forEach((e,i)=>{if(e.visible=this.bubbleTime>0,!e.visible)return;const s=(this.elapsed*(.8+i*.04)+i*.13)%1;e.position.set(Math.sin(i*2.1)*.07,1.12+s*.32,Math.cos(i*1.7)*.055),e.scale.setScalar(.65+s*.7)})}breakGlass(t){this.glass.visible=!1,this.liquid.visible=!1,this.bubbleTime=0,this.bubbles.forEach(e=>{e.visible=!1}),this.glassShards.forEach((e,i)=>{e.visible=!0;const s=Math.max(0,t-.82)*2.8,r=i/this.glassShards.length*Math.PI*2;e.position.set(Math.cos(r)*s*(.12+i%3*.025),1.24+Math.abs(Math.sin(r*2))*s*.055,Math.sin(r)*s*.11),e.rotation.set(r*.7,r,r*1.3)})}createArm(t,e,i){const s=new Qt;s.position.set(t*.34,1.58,.12),s.rotation.z=t*-1.02;const r=new ut(new Yt(.055,.07,.42,12),e);r.position.y=-.19;const o=new ut(new tn(.08,14,10),i);return o.position.set(0,-.42,.2),s.add(r,o),s}}class d1{constructor(){this.group=new Qt,this.group.position.set(-4.62,0,1.25),this.group.rotation.y=Math.PI/2;const t=new Gt({color:1380633,metalness:.45,roughness:.28}),e=new Gt({color:3159618,metalness:.8,roughness:.16}),i=new Gt({color:1316897,metalness:.7,roughness:.3}),s=new ut(new se(3.1,1.05,.72),t);s.position.set(0,.525,.42),s.castShadow=!0,s.receiveShadow=!0;const r=new ut(new se(3.25,.09,.86),e);r.position.set(0,1.08,.42),r.castShadow=!0;const o=new ut(new se(2.85,.055,.025),new Gt({color:55807,emissive:55807,emissiveIntensity:2.1}));o.position.set(0,.75,.79),this.group.add(s,r,o),[1.55,2.15].forEach(m=>{const g=new ut(new se(2.7,.08,.18),i);g.position.set(0,m,-.2),this.group.add(g)}),[16722047,55807,16767053,16739108,6684533,16722047].forEach((m,g)=>{const _=g<3?1.55:2.15,p=-.85+g%3*.85,d=new Gt({color:m,emissive:m,emissiveIntensity:.55,transparent:!0,opacity:.86,roughness:.18}),M=new ut(new Yt(.085,.105,.38,16),d);M.position.set(p,_+.23,-.19);const y=new ut(new Yt(.045,.055,.14,12),d);y.position.set(p,_+.49,-.19),this.group.add(M,y)});const l=document.createElement("canvas");l.width=512,l.height=192;const c=l.getContext("2d");c.clearRect(0,0,l.width,l.height),c.textAlign="center",c.textBaseline="middle",c.font='900 126px "Trebuchet MS", sans-serif',c.shadowColor="#ff287f",c.shadowBlur=32,c.strokeStyle="#ff287f",c.lineWidth=7,c.strokeText("BAR",256,96),c.fillStyle="#ffffff",c.fillText("BAR",256,96);const u=new ti(l);u.colorSpace=Je;const h=new ut(new Pe(2.25,.84),new we({map:u,transparent:!0,depthWrite:!1}));h.position.set(0,2.92,-.37),this.group.add(h);const f=new Kn(16722047,8,4.5,1.5);f.position.set(0,2.2,1.25),this.group.add(f),this.bartender=new f1,this.group.add(this.bartender.group),this.interactionPulse=new ja(16722047),this.interactionPulse.group.position.set(0,.5,.805),this.group.add(this.interactionPulse.group)}update(t){this.bartender.update(t),this.interactionPulse.update(t)}throwShaker(){this.bartender.throwShaker()}}class p1{constructor(){this.lavaBlobs=[],this.elapsed=0,this.group=new Qt,this.group.position.set(-2.35,0,4.05);const t=new Gt({color:10990268,metalness:1,roughness:.12}),e=new ro({color:3416904,metalness:.15,roughness:.08,transmission:.48,transparent:!0,opacity:.78}),i=new Gt({color:6813672,roughness:.68,emissive:1195842,emissiveIntensity:.5}),s=new ut(new Yt(.055,.075,.84,16),t);s.position.y=.46;const r=new ut(new Yt(.42,.5,.08,28),t);r.position.y=.04;const o=new ut(new Yt(.7,.7,.07,32),e);o.position.y=.91,o.castShadow=!0,this.group.add(s,r,o),[-1,1].forEach(_=>{const p=new Qt;p.position.x=_*1.08;const d=new ut(new Yt(.045,.06,.43,12),t);d.position.y=.24;const M=new ut(new Yt(.28,.34,.07,22),t);M.position.y=.035;const y=new ut(new Yt(.38,.34,.16,24),i);y.position.y=.51,y.castShadow=!0;const b=new ut(new se(.72,.58,.13),i);b.position.set(_*.31,.78,0),b.rotation.y=Math.PI/2,b.rotation.z=_*.16,b.castShadow=!0,p.add(d,M,y,b),this.group.add(p)});const a=new Qt;a.position.set(0,.98,0);const l=new Gt({color:13209387,metalness:.82,roughness:.2}),c=new ut(new Yt(.15,.2,.13,20),l),u=new ut(new Yt(.1,.15,.48,20),new ro({color:16763176,emissive:9390080,emissiveIntensity:.48,transparent:!0,opacity:.48,transmission:.38,roughness:.12,depthWrite:!1}));u.position.y=.3;const h=new ut(new Yt(.08,.11,.1,20),l);h.position.y=.59,a.add(c,u,h);const f=new we({color:16772962});[.18,.34,.48].forEach((_,p)=>{const d=new ut(new tn(.065,12,10),f);d.position.y=_,d.scale.set(1+p*.12,1.35,.82),this.lavaBlobs.push(d),a.add(d)});const m=new Kn(16763176,1.6,1.8,2);m.position.y=.34,a.add(m),this.group.add(a);const g=new Kn(6813672,5,4.2,1.7);g.position.set(0,1.8,.2),this.group.add(g)}update(t){this.elapsed+=t,this.lavaBlobs.forEach((e,i)=>{const s=this.elapsed*(.72+i*.09)+i*2.1;e.position.y=.33+Math.sin(s)*.16,e.position.x=Math.sin(s*.67)*.025,e.scale.y=1.15+Math.cos(s*1.3)*.28})}}class m1{constructor(){this.group=new Qt,this.group.position.set(4.2,0,3.65);const t=new Gt({color:11736405,metalness:.25,roughness:.42,emissive:3474199,emissiveIntensity:.35}),e=new Gt({color:3234869,roughness:.7}),i=new Gt({color:3581792,roughness:.62,side:Ue}),s=new ut(new Yt(.34,.25,.62,24),t);s.position.y=.31,s.castShadow=!0;const r=new ut(new Ss(.34,.045,10,24),t);r.position.y=.62,r.rotation.x=Math.PI/2,this.group.add(s,r),[{x:0,z:0,height:2.45,lean:.03},{x:-.12,z:.04,height:2.05,lean:-.12},{x:.13,z:-.04,height:2.2,lean:.13}].forEach((l,c)=>{const u=new ut(new Yt(.025,.04,l.height,10),e);u.position.set(l.x,.62+l.height/2,l.z),u.rotation.z=l.lean,u.castShadow=!0,this.group.add(u);for(let h=0;h<5;h++){const f=h%2===0?-1:1,m=new ut(new tn(.34,16,10),i);m.scale.set(1.7,.18,.62),m.position.set(l.x+f*(.23+h*.025),1.05+h*.38+c*.05,l.z+(c-1)*.12),m.rotation.z=f*(.38+h*.08),m.rotation.y=c*.72+h*.45,m.castShadow=!0,this.group.add(m)}});const a=new Kn(6684533,3.5,3,1.8);a.position.set(0,1.5,.4),this.group.add(a)}updateVisibility(t){this.group.visible=t.x<4.95}}class g1{constructor(){this.flames=[],this.smoke=[],this.confetti=[],this.elapsed=0,this.celebrationTime=-1,this.group=new Qt,this.group.position.set(4.05,0,1.45);const t=new Gt({color:11056319,metalness:1,roughness:.14}),e=new ut(new Yt(.78,.78,.09,32),new ro({color:2303795,metalness:.45,roughness:.18,transmission:.22}));e.position.y=.88,e.castShadow=!0;const i=new ut(new Yt(.06,.08,.84,16),t);i.position.y=.44;const s=new ut(new Yt(.4,.48,.08,28),t);s.position.y=.04,this.group.add(e,i,s);const r=new Gt({color:16767208,roughness:.62,emissive:3870756,emissiveIntensity:.28}),o=new Gt({color:16777215,roughness:.7}),a=new ut(new Yt(.56,.58,.34,32),r);a.position.y=1.09,a.castShadow=!0;const l=new ut(new Yt(.4,.43,.26,32),o);l.position.y=1.38,l.castShadow=!0;const c=new ut(new Ss(.565,.035,10,32),new Gt({color:6813672,emissive:6813672,emissiveIntensity:1.1}));c.rotation.x=Math.PI/2,c.position.y=1.16,this.group.add(a,l,c),[-.2,0,.2].forEach((h,f)=>{const m=new ut(new Yt(.025,.025,.28,12),new Gt({color:f===1?16732058:6813672,roughness:.42}));m.position.set(h,1.65,.08);const g=new ut(new tn(.055,12,10),new we({color:16769899,transparent:!0,opacity:.95}));g.scale.y=1.7,g.position.set(h,1.86,.08),this.flames.push(g),this.group.add(m,g);for(let _=0;_<3;_++){const p=new we({color:14542056,transparent:!0,opacity:0,depthWrite:!1}),d=new ut(new tn(.045,10,8),p);d.visible=!1,this.smoke.push({mesh:d,offset:f*.23+_*.31}),this.group.add(d)}});const u=[6813672,16732058,16767053,16777215,9399295];for(let h=0;h<55;h++){const f=new ut(new Pe(.045,.09),new we({color:u[h%u.length],side:Ue}));f.visible=!1,this.group.add(f),this.confetti.push({mesh:f,velocity:new O,spin:new O((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)})}this.interactionPulse=new ja(16767053),this.interactionPulse.group.position.set(-.72,1.02,-.28),this.interactionPulse.group.rotation.y=-1.94,this.interactionPulse.setActive(!0),this.group.add(this.interactionPulse.group)}celebrate(){return this.celebrationTime>=0?!1:(this.celebrationTime=0,this.flames.forEach(t=>{t.visible=!1}),this.confetti.forEach((t,e)=>{const i=e/this.confetti.length*Math.PI*2;t.mesh.visible=!0,t.mesh.position.set(0,1.75,0),t.velocity.set(Math.cos(i)*(.45+Math.random()*.8),1.4+Math.random()*1.2,Math.sin(i)*(.45+Math.random()*.8))}),!0)}updateVisibility(t){this.group.visible=t.x<4.95}update(t){this.elapsed+=t,this.interactionPulse.update(t),this.flames.forEach((e,i)=>{const s=.88+Math.sin(this.elapsed*12+i*1.7)*.13;e.scale.set(.9+s*.1,1.45+s*.3,.9+s*.1),e.position.x+=Math.sin(this.elapsed*9+i)*6e-4}),!(this.celebrationTime<0)&&(this.celebrationTime+=t,this.smoke.forEach((e,i)=>{const s=this.celebrationTime-e.offset;if(e.mesh.visible=s>0&&s<2.2,!e.mesh.visible)return;e.mesh.position.set(-.2+i%3*.2+Math.sin(s*3+i)*.08,1.88+s*.42,.08);const r=e.mesh.material;r.opacity=Math.sin(Math.min(s/2.2,1)*Math.PI)*.38,e.mesh.scale.setScalar(1+s*1.5)}),this.confetti.forEach(e=>{e.mesh.visible&&(e.velocity.y-=t*1.65,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t,e.mesh.position.y<=.05&&(e.mesh.visible=!1))}),this.celebrationTime>5.2&&(this.celebrationTime=-1,this.flames.forEach(e=>{e.visible=!0}),this.smoke.forEach(e=>{e.mesh.visible=!1}),this.confetti.forEach(e=>{e.mesh.visible=!1})))}}class _1{constructor(){this.elapsed=0,this.ringTime=0,this.group=new Qt,this.group.position.set(1.15,2.2,4.78),this.group.rotation.y=Math.PI;const t=new Gt({color:14207920,metalness:.42,roughness:.36}),e=new Gt({color:1513757,metalness:.55,roughness:.3}),i=new Gt({color:11976901,metalness:.95,roughness:.12}),s=new Gt({color:13053244,emissive:5900050,emissiveIntensity:.8}),r=new ut(new se(1.08,1.62,.34),t),o=new ut(new se(.76,.62,.04),e);o.position.set(.08,.25,.19),this.group.add(r,o);const a=document.createElement("canvas");a.width=768,a.height=256;const l=a.getContext("2d");l.fillStyle="#07160e",l.fillRect(0,0,a.width,a.height),l.textAlign="center",l.textBaseline="middle",l.font="700 48px monospace",l.fillStyle="#70ff8c",l.shadowColor="#70ff8c",l.shadowBlur=18;const c=new ti(a);c.colorSpace=Je;const u=new ut(new Pe(.73,.25),new we({map:c}));u.position.set(.08,.55,.225),this.group.add(u);const h=new ut(new Yt(.24,.24,.055,32),i);h.rotation.x=Math.PI/2,h.position.set(.08,.08,.235),this.group.add(h);for(let R=0;R<10;R++){const C=R/10*Math.PI*2,U=new ut(new Yt(.035,.035,.065,12),e);U.rotation.x=Math.PI/2,U.position.set(.08+Math.cos(C)*.16,.08+Math.sin(C)*.16,.27),this.group.add(U)}const f=new ut(new se(.08,.25,.035),s);f.position.set(.36,-.42,.205),this.group.add(f),this.handset=new Qt;const m=new ut(new Yt(.075,.075,.83,14),e),g=new tn(.15,16,10),_=new ut(g,e),p=new ut(g,e);_.position.y=.42,p.position.y=-.42,this.handset.add(m,_,p),this.handset.position.set(-.43,0,.31),this.group.add(this.handset);const d=new ut(new Ss(.22,.018,8,22,Math.PI*1.55),e);d.position.set(-.32,-.72,.22),d.rotation.z=-.35,this.group.add(d);const M=new Kn(7405452,2.5,2.2,1.8);M.position.set(0,.5,.8),this.group.add(M),this.interactionPulse=new ja(7405452),this.interactionPulse.group.position.set(.34,-.56,.24),this.interactionPulse.setActive(!0),this.group.add(this.interactionPulse.group);const y=document.createElement("canvas");y.width=1024,y.height=384;const b=y.getContext("2d");b.fillStyle="#ffffff",b.strokeStyle="#ffffff",b.lineWidth=18,b.beginPath(),b.roundRect(35,30,930,255,70),b.moveTo(250,280),b.lineTo(170,360),b.lineTo(390,282),b.closePath(),b.fill(),b.stroke(),b.fillStyle="#000000",b.textAlign="center",b.textBaseline="middle",b.font='800 82px "Trebuchet MS", sans-serif',b.fillText("Ti aspettiamo in pista!",500,157);const P=new ti(y);P.colorSpace=Je,this.speechBubble=new bm(new Ru({map:P,transparent:!0,depthTest:!1})),this.speechBubble.position.set(.45,1.35,.45),this.speechBubble.scale.set(2.8,1.05,1),this.speechBubble.visible=!1,this.speechBubble.renderOrder=20,this.group.add(this.speechBubble)}update(t){this.elapsed+=t,this.ringTime=Math.max(0,this.ringTime-t),this.handset.rotation.z=this.ringTime>0?Math.sin(this.elapsed*46)*.055:0,this.speechBubble.visible=this.ringTime>0,this.interactionPulse.update(t)}updateVisibility(t){this.group.visible=t.z<4.78}ring(){this.ringTime=3.4}}class v1{constructor(){this.wallRecords=[],this.group=new Qt;const t=new Yt(.34,.34,.035,32),e=new Gt({color:592396,metalness:.48,roughness:.2}),i=new Yt(.105,.105,.042,20),s=[16732058,6813672,16767053,16735022,9399295,6684533];[{position:[-3.55,3.58,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[-2.7,4.1,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[2.35,3.72,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[4.82,3.82,-1.45],rotation:[0,0,Math.PI/2],wall:"right"},{position:[4.82,4.22,-.48],rotation:[0,0,Math.PI/2],wall:"right"},{position:[4.82,3.5,.42],rotation:[0,0,Math.PI/2],wall:"right"},{position:[-3.25,2.15,4.78],rotation:[-Math.PI/2,0,0],wall:"front"},{position:[-2.35,2.5,4.78],rotation:[-Math.PI/2,0,0],wall:"front"},{position:[-1.45,2.15,4.78],rotation:[-Math.PI/2,0,0],wall:"front"}].forEach(({position:o,rotation:a,wall:l},c)=>{const u=new Qt;u.position.set(o[0],o[1],o[2]),u.rotation.set(a[0],a[1],a[2]);const h=new ut(t,e),f=new ut(i,new Gt({color:s[c%s.length],emissive:s[c%s.length],emissiveIntensity:.45}));f.position.y=.023,u.add(h,f),this.group.add(u),this.wallRecords.push({group:u,wall:l})})}update(t){this.wallRecords.forEach(({group:e,wall:i})=>{i==="back"&&(e.visible=t.z>-4.82),i==="front"&&(e.visible=t.z<4.78),i==="right"&&(e.visible=t.x<4.82)})}}class x1{constructor(t=new Date("2026-10-30T21:30:00+01:00")){this.confettiRain=null,this.cakeConfettiRain=null,this.cakeCelebrationTime=0,this.group=new Qt;const e=10,i=5.2;this.floor=new s1(e,e,10),this.group.add(this.floor.mesh),this.ceiling=new r1(e,e,i),this.group.add(this.ceiling.mesh),this.walls=new o1(e,i,e),this.group.add(this.walls.group),this.countdownBoard=new a1(t),this.group.add(this.countdownBoard.group),this.djConsole=new l1,this.group.add(this.djConsole.group),this.robotDJ=new u1,this.djConsole.group.add(this.robotDJ.group),this.movingLightRig=new h1,this.group.add(this.movingLightRig.group),this.bar=new d1,this.group.add(this.bar.group),this.loungeSet=new p1,this.group.add(this.loungeSet.group),this.tallPlant=new m1,this.group.add(this.tallPlant.group),this.birthdayCake=new g1,this.group.add(this.birthdayCake.group),this.payphone=new _1,this.group.add(this.payphone.group),this.vinylWall=new v1,this.group.add(this.vinylWall.group),this.djSign=new c1,this.group.add(this.djSign.group)}startConfetti(){this.confettiRain||(this.confettiRain=new td,this.group.add(this.confettiRain.group))}celebrateCake(){this.birthdayCake.celebrate()&&(this.cakeConfettiRain=new td,this.cakeCelebrationTime=5.2,this.group.add(this.cakeConfettiRain.group))}updateWallVisibility(t){this.vinylWall.update(t),this.payphone.updateVisibility(t),this.countdownBoard.updateVisibility(t),this.djSign.updateVisibility(t),this.birthdayCake.updateVisibility(t),this.tallPlant.updateVisibility(t)}update(t){this.floor&&this.floor.update(t),this.countdownBoard?.group.visible&&this.countdownBoard.update(),this.robotDJ&&this.robotDJ.update(t),this.djConsole&&this.djConsole.update(t),this.movingLightRig&&this.movingLightRig.update(t),this.bar&&this.bar.update(t),this.loungeSet&&this.loungeSet.update(t),this.birthdayCake?.group.visible&&this.birthdayCake.update(t),this.payphone?.group.visible&&this.payphone.update(t),this.confettiRain&&this.confettiRain.update(),this.cakeConfettiRain&&(this.cakeConfettiRain.update(),this.cakeCelebrationTime-=t,this.cakeCelebrationTime<=0&&(this.group.remove(this.cakeConfettiRain.group),this.cakeConfettiRain=null))}}class y1{constructor(){this.wallSpots=[],this.spotTransform=new Ne,this.spotElapsed=0,this.isMobile=window.matchMedia("(max-width: 768px)").matches,this.group=new Qt,this.reflectionInterval=this.isMobile?.5:.25,this.reflectionElapsed=this.reflectionInterval,this.spotUpdateInterval=this.isMobile?1/30:0,this.cubeRenderTarget=new mm(this.isMobile?64:128,{generateMipmaps:!1,minFilter:qe}),this.cubeCamera=new dm(.1,50,this.cubeRenderTarget);const t=.68,e=new tn(t,this.isMobile?48:96,this.isMobile?24:48),i=new Gt({color:16777215,metalness:1,roughness:0,flatShading:!0,envMap:this.cubeRenderTarget.texture,envMapIntensity:4.5});this.ballMesh=new ut(e,i),this.ballMesh.castShadow=!0;const s=new Yt(.008,.008,1.15),r=new Gt({color:7829367,metalness:.8}),o=new ut(s,r);o.position.y=.575,this.group.add(this.ballMesh,o,this.cubeCamera);const a=document.createElement("canvas");a.width=128,a.height=128;const l=a.getContext("2d"),c=l.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255, 230, 255, 0.55)"),c.addColorStop(.3,"rgba(220, 180, 255, 0.3)"),c.addColorStop(.65,"rgba(180, 140, 255, 0.1)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),l.fillStyle=c,l.fillRect(0,0,128,128);const u=new ti(a),h=new Pe(.42,.42),f=new we({map:u,transparent:!0,blending:cr,depthWrite:!1,opacity:.48}),m=[-1.45,-1.2,-1,-.82,-.64,-.48,-.32,-.16,.16,.34,.54,.76],g=32;this.wallSpotMesh=new Em(h,f,m.length*g),this.wallSpotMesh.instanceMatrix.setUsage(sm),this.wallSpotMesh.frustumCulled=!1,this.group.add(this.wallSpotMesh),m.forEach((_,p)=>{for(let d=0;d<g;d++){const M=p%2===0?0:Math.PI/g;this.wallSpots.push({angle:d/g*Math.PI*2+M,heightRatio:_,scale:.82+p%3*.08})}}),this.group.position.set(0,4.05,-2.8)}update(t,e,i){this.reflectionElapsed+=t,e&&i&&this.reflectionElapsed>=this.reflectionInterval&&(this.ballMesh.visible=!1,this.cubeCamera.update(e,i),this.ballMesh.visible=!0,this.reflectionElapsed=0);const s=.3;if(this.ballMesh.rotation.y+=t*s,this.spotElapsed+=t,this.spotElapsed<this.spotUpdateInterval)return;const r=this.spotElapsed;this.spotElapsed=0;const o=4.85,a=-3.95,l=.75;this.wallSpots.forEach((c,u)=>{c.angle+=r*s;const h=Math.sin(c.angle),f=Math.cos(c.angle),m=c.heightRatio;let g=10;if(Math.abs(h)>.001){const y=(h>0?o:-o)/h;y>0&&(g=Math.min(g,y))}if(Math.abs(f)>.001){const y=(f<0?-2.15:7.65)/f;y>0&&(g=Math.min(g,y))}if(Math.abs(m)>.001){const y=(m>0?l:a)/m;y>0&&(g=Math.min(g,y))}const _=h*g,p=m*g,d=f*g;this.spotTransform.position.set(_,p,d),this.spotTransform.scale.setScalar(c.scale),Math.abs(_-o)<.05?this.spotTransform.rotation.set(0,-Math.PI/2,0):Math.abs(_+o)<.05?this.spotTransform.rotation.set(0,Math.PI/2,0):Math.abs(p-l)<.05?this.spotTransform.rotation.set(Math.PI/2,0,0):Math.abs(p-a)<.05?this.spotTransform.rotation.set(-Math.PI/2,0,0):this.spotTransform.rotation.set(0,0,0),this.spotTransform.updateMatrix(),this.wallSpotMesh.setMatrixAt(u,this.spotTransform.matrix)}),this.wallSpotMesh.instanceMatrix.needsUpdate=!0}}class M1{constructor(){this.cornerLights=[],this.paletteIndex=0,this.group=new Qt;const t=new Kw(3478616,2.8);this.cameraSpotLight=new Tm(16777215,22),this.cameraSpotLight.position.set(0,2.4,4.9),this.cameraSpotLight.target.position.set(0,3.6,-2.8),this.cameraSpotLight.angle=Math.PI/7,this.cameraSpotLight.penumbra=.5,this.cameraSpotLight.castShadow=window.innerWidth>768;const e=new Kn(55807,18,16,1.2);e.position.set(-4.2,3,-4.2);const i=new Kn(16711816,20,16,1.2);i.position.set(4.2,3,-4.2);const s=new Kn(10289407,18,16,1.2);s.position.set(-4.2,3,3.5);const r=new Kn(16711748,18,16,1.2);r.position.set(4.2,3,3.5),this.cornerLights=[e,i,s,r];const o=new Kn(11862271,15,14);o.position.set(0,2.2,0),this.group.add(t,this.cameraSpotLight,this.cameraSpotLight.target,e,i,s,r,o)}cyclePalette(){const t=[[55807,16711816,10289407,16711748],[16767037,16735022,6684533,55807],[6813672,3501567,16732058,16777215],[12123970,16722047,16767053,9399295]];this.paletteIndex=(this.paletteIndex+1)%t.length,this.cornerLights.forEach((e,i)=>e.color.setHex(t[this.paletteIndex][i]))}}class S1{constructor(t){this.reqId=0,this.music=null,this.musicVolume=.4,this.scratchResetTimer=null,this.volumeFadeId=null,this.musicStateListener=null,this.running=!0,this.handleVisibilityChange=()=>{if(document.hidden){this.running=!1,cancelAnimationFrame(this.reqId);return}this.running||(this.running=!0,this.clock.getDelta(),this.loop())},this.loop=()=>{const e=this.clock.getDelta();this.discoBall.update(e,this.renderer.instance,this.scene.instance),this.camera.update(),this.room.update(e),this.room.updateWallVisibility(this.camera.instance.position),this.renderer.render(this.scene.instance,this.camera.instance),this.reqId=requestAnimationFrame(this.loop)},this.clock=new Am,this.sizes=new Jw(t),this.scene=new Qw,this.camera=new n1(this.sizes,t),this.renderer=new i1(this.sizes,t),this.room=new x1,this.camera.setNavigationRoot(this.room.group),this.camera.addInteraction(this.room.robotDJ.group,()=>this.room.robotDJ.performDance()),this.room.djConsole.turntables.forEach(e=>{this.camera.addInteraction(e,()=>this.scratch())}),this.camera.addInteraction(this.room.bar.bartender.servedDrink,()=>this.room.bar.bartender.activateDrink()),this.camera.addInteraction(this.room.payphone.group,()=>this.room.payphone.ring()),this.camera.addInteraction(this.room.djConsole.group,()=>this.room.robotDJ.performDance()),this.camera.addInteraction(this.room.bar.group,()=>this.room.bar.throwShaker()),this.camera.addInteraction(this.room.birthdayCake.group,()=>this.room.celebrateCake()),this.discoBall=new y1,this.lighting=new M1,this.scene.instance.add(this.room.group,this.discoBall.group,this.lighting.group),this.sizes.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.loop()}triggerConfetti(){this.room&&this.room.startConfetti()}async startMusicWithFade(){this.volumeFadeId!==null&&cancelAnimationFrame(this.volumeFadeId);const t=this.getMusic();t.volume=0;try{await t.play(),this.setMusicVisuals(!0);const e=performance.now(),i=s=>{const r=Math.min((s-e)/2e3,1);t.volume=r*this.musicVolume,r<1?this.volumeFadeId=requestAnimationFrame(i):this.volumeFadeId=null};this.volumeFadeId=requestAnimationFrame(i)}catch{this.setMusicVisuals(!1)}}toggleMusic(){const t=this.getMusic();if(t.paused){t.play().then(()=>this.setMusicVisuals(!0)).catch(()=>this.setMusicVisuals(!1));return}t.pause(),this.setMusicVisuals(!1)}setMusicVolume(t){this.volumeFadeId!==null&&(cancelAnimationFrame(this.volumeFadeId),this.volumeFadeId=null),this.musicVolume=Math.min(Math.max(t,0),1),this.music&&(this.music.volume=this.musicVolume)}onMusicStateChange(t){this.musicStateListener=t}setMusicVisuals(t){this.room.djConsole.setPlaying(t),this.room.robotDJ.setPlaying(t),this.musicStateListener?.(t)}getMusic(){return this.music||(this.music=new Audio("/music/bacio-che-schiocca.mp3"),this.music.loop=!0,this.music.volume=this.musicVolume),this.music}scratch(){this.room.djConsole.scratch(),this.room.movingLightRig.boost(),this.music&&!this.music.paused&&(this.music.playbackRate=1.35),this.scratchResetTimer!==null&&window.clearTimeout(this.scratchResetTimer),this.scratchResetTimer=window.setTimeout(()=>{this.music&&(this.music.playbackRate=1),this.scratchResetTimer=null},1100)}resize(){this.camera.resize(),this.renderer.resize()}destroy(){this.running=!1,cancelAnimationFrame(this.reqId),document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.camera.destroy(),this.sizes.destroy(),this.music?.pause(),this.music&&(this.music.src=""),this.volumeFadeId!==null&&cancelAnimationFrame(this.volumeFadeId),this.scratchResetTimer!==null&&window.clearTimeout(this.scratchResetTimer),this.renderer.instance.dispose(),this.renderer.instance.domElement.remove()}}const b1={key:0,class:"welcome-screen","aria-labelledby":"welcome-title"},E1=["title","aria-label"],w1={class:"material-symbols-rounded"},T1={class:"volume-control"},A1={class:"material-symbols-rounded","aria-hidden":"true"},R1={class:"drawer-content"},C1={class:"drawer-body"},P1={key:0},L1={key:1,class:"form-section"},I1={key:0,class:"approval-confirmation",role:"status","aria-live":"polite"},D1={class:"input-group"},U1={class:"input-group"},N1={class:"input-group"},O1={key:0,class:"error-message"},F1=["disabled"],B1={key:2,class:"party-details-section"},z1={class:"donation-actions"},k1={key:0,class:"program-section","aria-labelledby":"program-title"},H1={class:"program-heading"},V1=["title","aria-label","aria-pressed"],G1={class:"material-symbols-rounded"},W1={key:0,class:"program-editor"},X1={class:"program-visibility"},q1=["disabled"],j1={class:"program-editor-list"},Y1={class:"program-item-fields"},$1=["onUpdate:modelValue","aria-label"],K1=["onUpdate:modelValue","aria-label"],Z1={class:"program-item-actions"},J1=["disabled","onClick"],Q1=["disabled","onClick"],tT=["aria-label","onClick"],eT=["onClick"],nT=["onClick"],iT={key:1,class:"empty-state"},sT={key:2,class:"program-list"},rT={key:0},oT={key:1,class:"program-marker","aria-hidden":"true"},aT={key:3,class:"empty-state"},lT={key:3,class:"donation-detail"},cT={class:"eyebrow"},uT=["href","aria-label"],hT=["src","alt"],fT={key:4},dT={class:"section-heading"},pT={class:"panel-title"},mT={class:"subtitle"},gT=["aria-valuenow"],_T={class:"guest-capacity-label"},vT={class:"guest-capacity-track","aria-hidden":"true"},xT={class:"guest-filters"},yT={class:"filter-field search-field"},MT={key:0,class:"state-filter",role:"group","aria-label":"Filtra per stato"},ST=["title","aria-label","aria-pressed","onClick"],bT={class:"material-symbols-rounded"},ET={key:0,class:"empty-state"},wT={key:1,class:"empty-state"},TT={key:2,class:"guest-list"},AT=["title"],RT={class:"guest-details"},CT={key:0},PT=["aria-label"],LT=["disabled","title","aria-label","onClick"],IT={key:0,class:"status-loader","aria-hidden":"true"},DT={key:1,class:"material-symbols-rounded"},UT={key:5,class:"reserved-section"},NT={class:"input-group"},OT={class:"input-group"},FT={key:0,class:"error-message"},BT=["disabled"],zT={class:"bottom-nav","aria-label":"Navigazione pannello"},kT=["title","aria-label","onClick"],HT={class:"material-symbols-rounded"},ql=300,VT=Lg({__name:"RoomScene",setup(n){const t=ee(null);let e=null;const i=ee(!0),s=ee(!1),r=ee(!1),o=ee(!1),a=ee(50),l=ee(!1),c=ee("info"),u=ee(!1),h=ee(""),f=ee(null),m=ee(!1),g=ee(""),_=ee(""),p=ee(""),d=ee(""),M=ee(!1),y=ee(!1),b=ee([]),P=ee(!1),R=ee(""),C=ee(""),U=ee(""),w=ee(!1),E=ee(null),I=ee(null),D=ee(""),H=ee("all"),J=ee(!1),rt=ee([]),Y=ee(!1),et=ee(!1),q=ee(!1),vt=ee(!1),xt=ee(""),_t=ee("");let Ct=null,Wt=null,lt=null;const mt={marco:{name:"Marco",image:"/images/marco.webp",iban:"IT95J0306909606100000018291"},leonardo:{name:"Leonardo",image:"/images/leonardo.webp",iban:"IT19J0801134320000011042626"}},ft=Fr(()=>f.value?mt[f.value]:null),yt=[{id:"info",icon:"info",label:"Info"},{id:"register",icon:"person_add",label:"Registrati"},{id:"party",icon:"celebration",label:"Festa e donazioni"},{id:"guests",icon:"groups",label:"Lista invitati"},{id:"reserved",icon:"lock",label:"Area riservata"}],Nt=[{value:0,label:"In attesa",icon:"hourglass_top"},{value:1,label:"Confermato",icon:"check_circle"},{value:2,label:"Rifiutato",icon:"cancel"}],kt=Nt.filter(z=>z.value!==0),Ht=z=>kt.filter(L=>z===0||L.value!==z),re=[{value:"all",label:"Tutti gli stati",icon:"groups"},{value:"0",label:"In attesa",icon:"hourglass_top"},{value:"1",label:"Confermati",icon:"check_circle"},{value:"2",label:"Rifiutati",icon:"cancel"}],v=z=>Nt.find(L=>L.value===z)?.label??"Confermato",N=Fr(()=>b.value.filter(z=>(z.approved??1)===1).length),X=Fr(()=>Math.min(N.value/ql*100,100)),st=Fr(()=>{const z=D.value.toLocaleLowerCase("it");return b.value.filter(L=>{const Z=`${L.nome} ${L.cognome}`.toLocaleLowerCase("it"),wt=!z||Z.includes(z),pe=!P.value||H.value==="all"||L.approved===Number(H.value);return wt&&pe}).sort((L,Z)=>P.value&&L.approved!==Z.approved?(L.approved??0)-(Z.approved??0):`${L.nome} ${L.cognome}`.localeCompare(`${Z.nome} ${Z.cognome}`,"it"))}),F=()=>{l.value=!0},nt=()=>{Ct!==null&&window.clearTimeout(Ct),Ct=window.setTimeout(()=>{o.value=!0,Ct=null},1e4)},at=()=>{o.value=!1,nt()},ot=()=>{i.value=!1,s.value=!0,nt()},T=()=>{e?.toggleMusic()},x=()=>{e?.setMusicVolume(a.value/100)},B=()=>{l.value=!1,setTimeout(()=>{c.value="info",u.value=!1,f.value=null,et.value=!1},300)},G=async()=>{Y.value=!0;try{const z=P.value?"/area-riservata/programma-serata":"/programma-serata",L=await ie.get(z);J.value=L.data.visibile,rt.value=L.data.voci}catch(z){ie.isAxiosError(z)&&z.response?.status===401&&(P.value=!1,et.value=!1,await G())}finally{Y.value=!1}},K=async()=>{y.value=!0;try{const z=P.value?"/area-riservata/invitati":"/invitati",L=await ie.get(z);b.value=L.data}catch(z){ie.isAxiosError(z)&&z.response?.status===401&&(P.value=!1,c.value="reserved")}finally{y.value=!1}},$=z=>{const L=document.querySelector('meta[name="csrf-token"]');L&&(L.content=z)},gt=async z=>{if(z==="reserved"){const L=await ie.get("/area-riservata/status");if(P.value=L.data.authenticated,$(L.data.csrf_token),P.value){c.value="guests",await K();return}}c.value=z,z==="guests"&&await K(),z==="party"&&(f.value=null,await G())},ht=()=>{const z=document.querySelector('meta[name="csrf-token"]')?.content;return z?{"X-CSRF-TOKEN":z}:{}},pt=async()=>{if(!(!g.value||!_.value||!p.value)){M.value=!0,d.value="";try{await ie.post("/invitati",{nome:g.value,cognome:_.value,invitato_da:p.value},{headers:ht()}),e?.triggerConfetti(),h.value=g.value,u.value=!0,g.value="",_.value="",p.value="",Wt!==null&&window.clearTimeout(Wt),Wt=window.setTimeout(()=>{u.value=!1,Wt=null,gt("party")},2200)}catch{d.value="Non è stato possibile inviare la richiesta. Riprova."}finally{M.value=!1}}},Rt=z=>{f.value=z,m.value=!1,c.value="donation"},dt=async()=>{if(ft.value){try{await navigator.clipboard.writeText(ft.value.iban)}catch{const z=document.createElement("textarea");z.value=ft.value.iban,z.style.position="fixed",z.style.opacity="0",document.body.appendChild(z),z.select(),document.execCommand("copy"),z.remove()}m.value=!0,lt!==null&&window.clearTimeout(lt),lt=window.setTimeout(()=>{m.value=!1,lt=null},2e3)}},St=async()=>{et.value=!et.value,et.value&&await G()},Vt=async()=>{await ie.patch("/area-riservata/programma-serata/visibilita",{visibile:J.value},{headers:ht()})},Ot=async()=>{if(_t.value){q.value=!0;try{await ie.post("/area-riservata/programma-serata",{orario:xt.value||null,descrizione:_t.value},{headers:ht()}),xt.value="",_t.value="",await G()}finally{q.value=!1}}},Tt=async z=>{await ie.patch(`/area-riservata/programma-serata/${z.id}`,{orario:z.orario||null,descrizione:z.descrizione},{headers:ht()}),await G()},Pt=async z=>{z.orario=null,await Tt(z)},Ut=async z=>{await ie.delete(`/area-riservata/programma-serata/${z.id}`,{headers:ht()}),await G()},ae=async(z,L)=>{if(z.orario||vt.value)return;const Z=[...rt.value],wt=Z.findIndex(te=>te.id===z.id),pe=wt+L;if(wt<0||pe<0||pe>=Z.length)return;const ve=[...Z];[ve[wt],ve[pe]]=[ve[pe],ve[wt]],rt.value=ve,vt.value=!0;try{const te=await ie.patch("/area-riservata/programma-serata/ordine",{voci:ve.map(Ce=>Ce.id)},{headers:ht()});rt.value=te.data.voci}catch{rt.value=Z}finally{vt.value=!1}},S=async()=>{w.value=!0,U.value="";try{const z=await ie.post("/area-riservata/login",{email:R.value,password:C.value},{headers:ht()});$(z.data.csrf_token),P.value=!0,C.value="",e?.triggerConfetti(),c.value="guests",await K()}catch{U.value="Email o password non corrette."}finally{w.value=!1}},j=async()=>{const z=await ie.post("/area-riservata/logout",{},{headers:ht()});$(z.data.csrf_token),P.value=!1,b.value=[],D.value="",H.value="all",c.value="reserved"},Q=async(z,L)=>{if(z.approved!==L){E.value=z.id,I.value=L===0?null:L;try{const Z=await ie.patch(`/area-riservata/invitati/${z.id}`,{approved:L},{headers:ht()});Object.assign(z,Z.data)}finally{E.value=null,I.value=null}}};return iu(()=>{t.value&&(e=new S1(t.value),e.onMusicStateChange(z=>{r.value=z}))}),su(()=>{Ct!==null&&window.clearTimeout(Ct),Wt!==null&&window.clearTimeout(Wt),lt!==null&&window.clearTimeout(lt),e?.destroy()}),(z,L)=>(jt(),$t("div",null,[ct("div",{ref_key:"canvasContainer",ref:t,class:"room-container"},null,512),un(D0,{name:"welcome"},{default:Ld(()=>[i.value?(jt(),$t("section",b1,[ct("div",{class:"welcome-content"},[L[17]||(L[17]=ct("p",{class:"welcome-eyebrow"},"'66 CELEBRATION",-1)),L[18]||(L[18]=ct("h1",{id:"welcome-title"},[ci("UN INVITO"),ct("br"),ci("PER TE")],-1)),L[19]||(L[19]=ct("div",{class:"explore-globe","aria-hidden":"true"},[ct("span",{class:"globe-ring globe-ring-horizontal"}),ct("span",{class:"globe-ring globe-ring-vertical"}),ct("span",{class:"globe-core material-symbols-rounded"},"open_with")],-1)),L[20]||(L[20]=ct("p",{class:"welcome-hint"},"Entra ed interagisci con gli oggetti",-1)),ct("button",{type:"button",class:"welcome-button",onClick:ot},[...L[16]||(L[16]=[ci(" Entra nella festa ",-1),ct("span",{class:"material-symbols-rounded"},"arrow_forward",-1)])])])])):Ze("",!0)]),_:1}),s.value?(jt(),$t("aside",{key:0,class:fi(["music-player",{minimized:o.value}]),"aria-label":"Controlli musica",onPointerdownCapture:at,onFocusin:at},[L[21]||(L[21]=ct("a",{class:"album-link",href:"https://www.youtube.com/watch?v=YaC3UY3Dnnk",target:"_blank",rel:"noopener noreferrer",title:"Apri Bacio che schiocca su YouTube","aria-label":"Apri Bacio che schiocca su YouTube"},[ct("img",{src:"/images/bacio_che_schiocca.webp",alt:"Copertina di Bacio che schiocca",decoding:"async"}),ct("span",{class:"youtube-badge","aria-hidden":"true"})],-1)),L[22]||(L[22]=ct("div",{class:"track-info"},[ct("strong",null,"Bacio che schiocca"),ct("span",null,"Marco Rossi")],-1)),ct("button",{type:"button",class:"player-control",title:r.value?"Pausa":"Riproduci","aria-label":r.value?"Metti in pausa":"Riproduci",onClick:T},[ct("span",w1,ye(r.value?"pause":"play_arrow"),1)],8,E1),ct("label",T1,[ct("span",A1,ye(a.value===0?"volume_off":"volume_up"),1),bn(ct("input",{"onUpdate:modelValue":L[0]||(L[0]=Z=>a.value=Z),type:"range",min:"0",max:"100",step:"1","aria-label":"Volume musica",style:Qs({"--volume-level":`${a.value}%`}),onInput:x},null,36),[[Dn,a.value,void 0,{number:!0}]]),ct("output",null,ye(a.value)+"%",1)])],34)):Ze("",!0),ct("button",{id:"info-btn",class:"party-btn",onClick:F,style:Qs({opacity:l.value?"0":"1",pointerEvents:l.value?"none":"auto"})}," INFO FESTA ",4),ct("section",{id:"info-drawer",class:fi(["drawer",{open:l.value}]),"aria-label":"Dettagli festa"},[ct("div",R1,[ct("button",{id:"close-btn",class:"icon-button close-btn",title:"Chiudi","aria-label":"Chiudi",onClick:B},[...L[23]||(L[23]=[ct("span",{class:"material-symbols-rounded"},"close",-1)])]),ct("div",C1,[c.value==="info"?(jt(),$t("div",P1,[L[24]||(L[24]=th('<p class="eyebrow" style="font-size:1.2rem;margin:0;" data-v-14bac6ae>&#39;66 CELEBRATION</p><h2 class="panel-title" data-v-14bac6ae>INGRESSO LIBERO</h2><p class="subtitle" style="font-size:1.2rem;margin-top:0;" data-v-14bac6ae>Massimo 300 ingressi</p><div class="info-grid" data-v-14bac6ae><div class="info-item" data-v-14bac6ae><span class="material-symbols-rounded" data-v-14bac6ae>calendar_month</span><div data-v-14bac6ae><small data-v-14bac6ae>DATA E ORA</small><strong data-v-14bac6ae>30 ottobre 2026 · 21:30</strong></div></div><div class="info-item" data-v-14bac6ae><span class="material-symbols-rounded" data-v-14bac6ae>location_on</span><div data-v-14bac6ae><small data-v-14bac6ae>LUOGO</small><strong data-v-14bac6ae>TOTEM · Via Vecchia Ferriera, 135, Vicenza</strong></div></div></div><div class="party-theme-note" data-v-14bac6ae><span class="material-symbols-rounded" aria-hidden="true" data-v-14bac6ae>checkroom</span><div data-v-14bac6ae><small data-v-14bac6ae>DRESS CODE</small><strong data-v-14bac6ae>Festa a tema anni &#39;80</strong></div></div>',5)),ct("button",{class:"primary-button",onClick:L[1]||(L[1]=Z=>gt("register"))},"Conferma la presenza")])):c.value==="register"?(jt(),$t("div",L1,[u.value?(jt(),$t("div",I1,[L[25]||(L[25]=ct("span",{class:"approval-check","aria-hidden":"true"},[ct("svg",{viewBox:"0 0 52 52"},[ct("circle",{cx:"26",cy:"26",r:"24"}),ct("path",{d:"M15 27 23 35 38 18"})])],-1)),L[26]||(L[26]=ct("strong",null,"Richiesta inviata",-1)),ct("p",null,"Grazie, "+ye(h.value)+". La richiesta dovrà essere approvata dagli organizzatori.",1)])):(jt(),$t(Ge,{key:1},[L[31]||(L[31]=ct("p",{class:"eyebrow"},"REGISTRAZIONE",-1)),L[32]||(L[32]=ct("h2",{class:"panel-title"},"Lascia i tuoi dati",-1)),L[33]||(L[33]=ct("p",{class:"subtitle"},"La presenza sarà confermata dall'organizzatore.",-1)),ct("form",{onSubmit:cl(pt,["prevent"])},[ct("label",D1,[L[27]||(L[27]=ct("span",null,"Nome",-1)),bn(ct("input",{"onUpdate:modelValue":L[2]||(L[2]=Z=>g.value=Z),maxlength:"50",autocomplete:"given-name",required:"",class:"input-field"},null,512),[[Dn,g.value,void 0,{trim:!0}]])]),ct("label",U1,[L[28]||(L[28]=ct("span",null,"Cognome",-1)),bn(ct("input",{"onUpdate:modelValue":L[3]||(L[3]=Z=>_.value=Z),maxlength:"50",autocomplete:"family-name",required:"",class:"input-field"},null,512),[[Dn,_.value,void 0,{trim:!0}]])]),ct("label",N1,[L[29]||(L[29]=ct("span",null,"Invitato da",-1)),bn(ct("input",{"onUpdate:modelValue":L[4]||(L[4]=Z=>p.value=Z),maxlength:"100",required:"",class:"input-field"},null,512),[[Dn,p.value,void 0,{trim:!0}]])]),d.value?(jt(),$t("p",O1,ye(d.value),1)):Ze("",!0),ct("button",{class:"primary-button",type:"submit",disabled:M.value},ye(M.value?"Invio in corso...":"Invia richiesta"),9,F1)],32),ct("button",{class:"guest-list-button",type:"button",onClick:L[5]||(L[5]=Z=>gt("guests"))},[...L[30]||(L[30]=[ct("span",{class:"material-symbols-rounded"},"groups",-1),ci(" Lista invitati ",-1)])])],64))])):c.value==="party"?(jt(),$t("div",B1,[L[45]||(L[45]=th('<div class="party-details-heading" data-v-14bac6ae><div data-v-14bac6ae><p class="eyebrow" data-v-14bac6ae>UN GESTO CHE RESTA</p><h2 class="panel-title" data-v-14bac6ae>Al posto dei regali</h2></div><a class="party-youtube-link" href="https://www.youtube.com/watch?v=YaC3UY3Dnnk" target="_blank" rel="noopener noreferrer" title="Ascolta Bacio che schiocca su YouTube" aria-label="Ascolta Bacio che schiocca su YouTube" data-v-14bac6ae><span class="material-symbols-rounded" data-v-14bac6ae>smart_display</span></a></div><p class="subtitle" data-v-14bac6ae>se ti fa piacere, puoi contribuire con una donazione a favore di un&#39;associazione. Scegli Marco o Leonardo per vedere tutti i dettagli.</p>',2)),ct("div",z1,[ct("button",{type:"button",class:"donation-button donation-marco",onClick:L[6]||(L[6]=Z=>Rt("marco"))},[...L[34]||(L[34]=[ct("span",{class:"material-symbols-rounded"},"volunteer_activism",-1),ci(" Marco ",-1)])]),ct("button",{type:"button",class:"donation-button donation-leonardo",onClick:L[7]||(L[7]=Z=>Rt("leonardo"))},[...L[35]||(L[35]=[ct("span",{class:"material-symbols-rounded"},"landscape",-1),ci(" Leonardo ",-1)])])]),ct("button",{type:"button",class:"primary-button add-guest-button",onClick:L[8]||(L[8]=Z=>gt("register"))},[...L[36]||(L[36]=[ct("span",{class:"material-symbols-rounded"},"person_add",-1),ci(" Aggiungi un altro invitato ",-1)])]),P.value||J.value?(jt(),$t("section",k1,[ct("div",H1,[L[37]||(L[37]=ct("div",null,[ct("p",{class:"eyebrow"},"LA SERATA"),ct("h2",{id:"program-title",class:"panel-title"},"Programma della serata")],-1)),P.value?(jt(),$t("button",{key:0,type:"button",class:"icon-button program-edit-button",title:et.value?"Chiudi modifica":"Modifica programma","aria-label":et.value?"Termina modifica programma":"Modifica programma","aria-pressed":et.value,onClick:St},[ct("span",G1,ye(et.value?"done":"edit"),1)],8,V1)):Ze("",!0)]),et.value?(jt(),$t("div",W1,[ct("label",X1,[bn(ct("input",{"onUpdate:modelValue":L[9]||(L[9]=Z=>J.value=Z),type:"checkbox",onChange:Vt},null,544),[[i_,J.value]]),L[38]||(L[38]=ct("span",null,"Mostra il programma agli invitati",-1))]),ct("form",{class:"program-new-item",onSubmit:cl(Ot,["prevent"])},[bn(ct("input",{"onUpdate:modelValue":L[10]||(L[10]=Z=>xt.value=Z),class:"input-field program-time-input",type:"time","aria-label":"Orario nuova voce"},null,512),[[Dn,xt.value]]),bn(ct("input",{"onUpdate:modelValue":L[11]||(L[11]=Z=>_t.value=Z),class:"input-field",maxlength:"255",placeholder:"Cosa succederà","aria-label":"Descrizione nuova voce",required:""},null,512),[[Dn,_t.value,void 0,{trim:!0}]]),ct("button",{class:"icon-button program-add-button",type:"submit",title:"Aggiungi voce","aria-label":"Aggiungi voce",disabled:q.value},[...L[39]||(L[39]=[ct("span",{class:"material-symbols-rounded"},"add",-1)])],8,q1)],32),ct("ul",j1,[(jt(!0),$t(Ge,null,ws(rt.value,Z=>(jt(),$t("li",{key:Z.id},[ct("div",Y1,[bn(ct("input",{"onUpdate:modelValue":wt=>Z.orario=wt,class:"input-field program-time-input",type:"time","aria-label":`Orario: ${Z.descrizione}`},null,8,$1),[[Dn,Z.orario]]),bn(ct("input",{"onUpdate:modelValue":wt=>Z.descrizione=wt,class:"input-field",maxlength:"255","aria-label":`Descrizione voce ${Z.id}`},null,8,K1),[[Dn,Z.descrizione,void 0,{trim:!0}]])]),ct("div",Z1,[Z.orario?Ze("",!0):(jt(),$t("button",{key:0,type:"button",class:"icon-button",title:"Sposta su","aria-label":"Sposta voce su",disabled:vt.value||rt.value[0]?.id===Z.id,onClick:wt=>ae(Z,-1)},[...L[40]||(L[40]=[ct("span",{class:"material-symbols-rounded"},"arrow_upward",-1)])],8,J1)),Z.orario?Ze("",!0):(jt(),$t("button",{key:1,type:"button",class:"icon-button",title:"Sposta giù","aria-label":"Sposta voce giù",disabled:vt.value||rt.value[rt.value.length-1]?.id===Z.id,onClick:wt=>ae(Z,1)},[...L[41]||(L[41]=[ct("span",{class:"material-symbols-rounded"},"arrow_downward",-1)])],8,Q1)),Z.orario?(jt(),$t("button",{key:2,type:"button",class:"icon-button program-clear-time",title:"Togli orario","aria-label":`Togli orario da ${Z.descrizione}`,onClick:wt=>Pt(Z)},[...L[42]||(L[42]=[ct("span",{class:"material-symbols-rounded"},"schedule",-1)])],8,tT)):Ze("",!0),ct("button",{type:"button",class:"icon-button",title:"Salva","aria-label":"Salva voce",onClick:wt=>Tt(Z)},[...L[43]||(L[43]=[ct("span",{class:"material-symbols-rounded"},"save",-1)])],8,eT),ct("button",{type:"button",class:"icon-button program-delete-button",title:"Elimina","aria-label":"Elimina voce",onClick:wt=>Ut(Z)},[...L[44]||(L[44]=[ct("span",{class:"material-symbols-rounded"},"delete",-1)])],8,nT)])]))),128))])])):Y.value?(jt(),$t("div",iT,"Caricamento programma...")):rt.value.length?(jt(),$t("ol",sT,[(jt(!0),$t(Ge,null,ws(rt.value,Z=>(jt(),$t("li",{key:Z.id},[Z.orario?(jt(),$t("time",rT,ye(Z.orario),1)):(jt(),$t("span",oT)),ct("strong",null,ye(Z.descrizione),1)]))),128))])):P.value?(jt(),$t("p",aT,"Aggiungi la prima voce al programma.")):Ze("",!0)])):Ze("",!0)])):c.value==="donation"&&ft.value?(jt(),$t("div",lT,[ct("button",{type:"button",class:"icon-button donation-back-button",title:"Torna alle informazioni","aria-label":"Torna alle informazioni della festa",onClick:L[12]||(L[12]=Z=>gt("party"))},[...L[46]||(L[46]=[ct("span",{class:"material-symbols-rounded"},"arrow_back",-1)])]),ct("p",cT,"DONAZIONE DI "+ye(ft.value.name.toUpperCase()),1),ct("button",{type:"button",class:"primary-button copy-iban-button",onClick:dt},[L[47]||(L[47]=ct("span",{class:"material-symbols-rounded"},"content_copy",-1)),ci(" "+ye(m.value?"IBAN copiato":"Copia IBAN"),1)]),ct("a",{class:"donation-image-link",href:ft.value.image,target:"_blank",rel:"noopener noreferrer","aria-label":`Apri a tutto schermo i dettagli per la donazione di ${ft.value.name}`},[ct("img",{src:ft.value.image,alt:`Dettagli per la donazione di ${ft.value.name}`,loading:"eager",fetchpriority:"high",decoding:"async"},null,8,hT)],8,uT)])):c.value==="guests"?(jt(),$t("div",fT,[L[51]||(L[51]=ct("p",{class:"eyebrow"},"GUEST LIST",-1)),ct("div",dT,[ct("div",null,[ct("h2",pT,ye(P.value?"Gestione invitati":"Lista invitati"),1),ct("p",mT,ye(P.value?"Controlla e aggiorna tutte le richieste.":"Le presenze già confermate."),1),ct("div",{class:"guest-capacity",role:"progressbar","aria-valuemin":"0","aria-valuenow":N.value,"aria-valuemax":ql},[ct("div",_T,[L[48]||(L[48]=ct("span",null,"Approvati",-1)),ct("strong",null,ye(N.value)+" / "+ye(ql),1)]),ct("span",vT,[ct("span",{style:Qs({width:`${X.value}%`})},null,4)])],8,gT)]),P.value?(jt(),$t("button",{key:0,class:"icon-button logout-button",title:"Esci","aria-label":"Esci",onClick:j},[...L[49]||(L[49]=[ct("span",{class:"material-symbols-rounded"},"logout",-1)])])):Ze("",!0)]),ct("div",xT,[ct("label",yT,[L[50]||(L[50]=ct("span",{class:"material-symbols-rounded"},"search",-1)),bn(ct("input",{"onUpdate:modelValue":L[13]||(L[13]=Z=>D.value=Z),type:"search",placeholder:"Cerca nome o cognome","aria-label":"Cerca invitato"},null,512),[[Dn,D.value,void 0,{trim:!0}]])]),P.value?(jt(),$t("div",MT,[(jt(),$t(Ge,null,ws(re,Z=>ct("button",{key:Z.value,type:"button",class:fi(["state-filter-button",[{active:H.value===Z.value},`filter-${Z.value}`]]),title:Z.label,"aria-label":Z.label,"aria-pressed":H.value===Z.value,onClick:wt=>H.value=Z.value},[ct("span",bT,ye(Z.icon),1)],10,ST)),64))])):Ze("",!0)]),y.value?(jt(),$t("div",ET,"Caricamento...")):st.value.length===0?(jt(),$t("div",wT,ye(b.value.length>0?"Nessun invitato corrisponde ai filtri.":P.value?"Non ci sono ancora richieste.":"Nessun invitato ancora confermato."),1)):(jt(),$t("ul",TT,[(jt(!0),$t(Ge,null,ws(st.value,Z=>(jt(),$t("li",{key:Z.id},[ct("span",{class:fi(["material-symbols-rounded guest-status-icon",`guest-status-${Z.approved??1}`]),title:v(Z.approved??1)},"person",10,AT),ct("div",RT,[ct("strong",null,ye(Z.nome)+" "+ye(Z.cognome),1),P.value?(jt(),$t("small",CT,"Invitato da "+ye(Z.invitato_da),1)):Ze("",!0)]),P.value?(jt(),$t("div",{key:0,class:"status-control",role:"group","aria-label":`Stato invito di ${Z.nome} ${Z.cognome}`},[(jt(!0),$t(Ge,null,ws(Ht(Z.approved),wt=>(jt(),$t("button",{key:wt.value,type:"button",class:fi(["status-button",`status-${wt.value}`]),disabled:E.value===Z.id,title:wt.label,"aria-label":`${wt.label}: ${Z.nome} ${Z.cognome}`,onClick:pe=>Q(Z,wt.value)},[E.value===Z.id&&I.value===wt.value?(jt(),$t("span",IT)):(jt(),$t("span",DT,ye(wt.icon),1))],10,LT))),128))],8,PT)):Ze("",!0)]))),128))]))])):c.value==="reserved"?(jt(),$t("div",UT,[L[54]||(L[54]=ct("span",{class:"material-symbols-rounded lock-icon"},"admin_panel_settings",-1)),L[55]||(L[55]=ct("p",{class:"eyebrow"},"AREA RISERVATA",-1)),L[56]||(L[56]=ct("p",{class:"subtitle"},"Accedi per gestire le richieste degli invitati.",-1)),ct("form",{class:"login-form",onSubmit:cl(S,["prevent"])},[ct("label",NT,[L[52]||(L[52]=ct("span",null,"Email",-1)),bn(ct("input",{"onUpdate:modelValue":L[14]||(L[14]=Z=>R.value=Z),type:"email",autocomplete:"username",required:"",class:"input-field"},null,512),[[Dn,R.value,void 0,{trim:!0}]])]),ct("label",OT,[L[53]||(L[53]=ct("span",null,"Password",-1)),bn(ct("input",{"onUpdate:modelValue":L[15]||(L[15]=Z=>C.value=Z),type:"password",autocomplete:"current-password",required:"",class:"input-field"},null,512),[[Dn,C.value]])]),U.value?(jt(),$t("p",FT,ye(U.value),1)):Ze("",!0),ct("button",{class:"primary-button",type:"submit",disabled:w.value},ye(w.value?"Accesso...":"Accedi"),9,BT)],32)])):Ze("",!0)]),ct("nav",zT,[(jt(),$t(Ge,null,ws(yt,Z=>ct("button",{key:Z.id,class:fi(["nav-button",{active:c.value===Z.id}]),title:Z.label,"aria-label":Z.label,onClick:wt=>gt(Z.id)},[ct("span",HT,ye(Z.icon),1)],10,kT)),64))])])],2)]))}}),GT=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},WT=GT(VT,[["__scopeId","data-v-14bac6ae"]]),XT={__name:"App",setup(n){return(t,e)=>(jt(),lp(WT))}};window.axios=ie;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const qT=c_(XT);qT.mount("#app");
