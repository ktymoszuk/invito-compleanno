function Xc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ge={},Js=[],Qn=()=>{},sd=()=>!1,Ca=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Pa=n=>n.startsWith("onUpdate:"),Oe=Object.assign,qc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Om=Object.prototype.hasOwnProperty,fe=(n,t)=>Om.call(n,t),Bt=Array.isArray,Qs=n=>ao(n)==="[object Map]",La=n=>ao(n)==="[object Set]",zu=n=>ao(n)==="[object Date]",$t=n=>typeof n=="function",be=n=>typeof n=="string",ti=n=>typeof n=="symbol",pe=n=>n!==null&&typeof n=="object",rd=n=>(pe(n)||$t(n))&&$t(n.then)&&$t(n.catch),od=Object.prototype.toString,ao=n=>od.call(n),Fm=n=>ao(n).slice(8,-1),ad=n=>ao(n)==="[object Object]",jc=n=>be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Bm=/-\w/g,zn=Ia(n=>n.replace(Bm,t=>t.slice(1).toUpperCase())),zm=/\B([A-Z])/g,ys=Ia(n=>n.replace(zm,"-$1").toLowerCase()),ld=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ja=Ia(n=>n?`on${ld(n)}`:""),Kn=(n,t)=>!Object.is(n,t),Zo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},cd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Yc=n=>{const t=parseFloat(n);return isNaN(t)?n:t},km=n=>{const t=be(n)?Number(n):NaN;return isNaN(t)?n:t};let ku;const Da=()=>ku||(ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yr(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=be(i)?Wm(i):Yr(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(be(n)||pe(n))return n}const Hm=/;(?![^(]*\))/g,Vm=/:([^]+)/,Gm=/\/\*[^]*?\*\//g;function Wm(n){const t={};return n.replace(Gm,"").split(Hm).forEach(e=>{if(e){const i=e.split(Vm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Oi(n){let t="";if(be(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=Oi(n[e]);i&&(t+=i+" ")}else if(pe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Xm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qm=Xc(Xm);function ud(n){return!!n||n===""}function jm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=lo(n[i],t[i]);return e}function lo(n,t){if(n===t)return!0;let e=zu(n),i=zu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=ti(n),i=ti(t),e||i)return n===t;if(e=Bt(n),i=Bt(t),e||i)return e&&i?jm(n,t):!1;if(e=pe(n),i=pe(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!lo(n[o],t[o]))return!1}}return String(n)===String(t)}function hd(n,t){return n.findIndex(e=>lo(e,t))}const fd=n=>!!(n&&n.__v_isRef===!0),Te=n=>be(n)?n:n==null?"":Bt(n)||pe(n)&&(n.toString===od||!$t(n.toString))?fd(n)?Te(n.value):JSON.stringify(n,dd,2):String(n),dd=(n,t)=>fd(t)?dd(n,t.value):Qs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Qa(i,r)+" =>"]=s,e),{})}:La(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Qa(e))}:ti(t)?Qa(t):pe(t)&&!Bt(t)&&!ad(t)?String(t):t,Qa=(n,t="")=>{var e;return ti(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};let Ve;class Ym{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ve&&(Ve.active?(this.parent=Ve,this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){if(this._on>0&&--this._on===0){if(Ve===this)Ve=this.prevScope;else{let t=Ve;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $m(){return Ve}let _e;const tl=new WeakSet;class pd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&(Ve.active?Ve.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tl.has(this)&&(tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hu(this),_d(this);const t=_e,e=kn;_e=this,kn=!0;try{return this.fn()}finally{vd(this),_e=t,kn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Zc(t);this.deps=this.depsTail=void 0,Hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yl(this)&&this.run()}get dirty(){return Yl(this)}}let md=0,Hr,Vr;function gd(n,t=!1){if(n.flags|=8,t){n.next=Vr,Vr=n;return}n.next=Hr,Hr=n}function $c(){md++}function Kc(){if(--md>0)return;if(Vr){let t=Vr;for(Vr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Hr;){let t=Hr;for(Hr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function _d(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function vd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Zc(i),Km(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Yl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(xd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function xd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===$r)||(n.globalVersion=$r,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Yl(n))))return;n.flags|=2;const t=n.dep,e=_e,i=kn;_e=n,kn=!0;try{_d(n);const s=n.fn(n._value);(t.version===0||Kn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,kn=i,vd(n),n.flags&=-3}}function Zc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Zc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Km(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let kn=!0;const yd=[];function xi(){yd.push(kn),kn=!1}function yi(){const n=yd.pop();kn=n===void 0?!0:n}function Hu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let $r=0;class Zm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!kn||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new Zm(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,Md(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,$r++,this.notify(t)}notify(t){$c();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Kc()}}}function Md(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Md(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const $l=new WeakMap,hs=Symbol(""),Kl=Symbol(""),Kr=Symbol("");function Je(n,t,e){if(kn&&_e){let i=$l.get(n);i||$l.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Jc),s.map=i,s.key=e),s.track()}}function mi(n,t,e,i,s,r){const o=$l.get(n);if(!o){$r++;return}const a=l=>{l&&l.trigger()};if($c(),t==="clear")o.forEach(a);else{const l=Bt(n),u=l&&jc(e);if(l&&e==="length"){const c=Number(i);o.forEach((h,d)=>{(d==="length"||d===Kr||!ti(d)&&d>=c)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(Kr)),t){case"add":l?u&&a(o.get("length")):(a(o.get(hs)),Qs(n)&&a(o.get(Kl)));break;case"delete":l||(a(o.get(hs)),Qs(n)&&a(o.get(Kl)));break;case"set":Qs(n)&&a(o.get(hs));break}}Kc()}function ws(n){const t=ae(n);return t===n?t:(Je(t,"iterate",Kr),An(n)?t:t.map(Hn))}function Ua(n){return Je(n=ae(n),"iterate",Kr),n}function jn(n,t){return Mi(n)?ar(fs(n)?Hn(t):t):Hn(t)}const Jm={__proto__:null,[Symbol.iterator](){return el(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return ws(this).concat(...n.map(t=>Bt(t)?ws(t):t))},entries(){return el(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,t){return ii(this,"every",n,t,void 0,arguments)},filter(n,t){return ii(this,"filter",n,t,e=>e.map(i=>jn(this,i)),arguments)},find(n,t){return ii(this,"find",n,t,e=>jn(this,e),arguments)},findIndex(n,t){return ii(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ii(this,"findLast",n,t,e=>jn(this,e),arguments)},findLastIndex(n,t){return ii(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ii(this,"forEach",n,t,void 0,arguments)},includes(...n){return nl(this,"includes",n)},indexOf(...n){return nl(this,"indexOf",n)},join(n){return ws(this).join(n)},lastIndexOf(...n){return nl(this,"lastIndexOf",n)},map(n,t){return ii(this,"map",n,t,void 0,arguments)},pop(){return Mr(this,"pop")},push(...n){return Mr(this,"push",n)},reduce(n,...t){return Vu(this,"reduce",n,t)},reduceRight(n,...t){return Vu(this,"reduceRight",n,t)},shift(){return Mr(this,"shift")},some(n,t){return ii(this,"some",n,t,void 0,arguments)},splice(...n){return Mr(this,"splice",n)},toReversed(){return ws(this).toReversed()},toSorted(n){return ws(this).toSorted(n)},toSpliced(...n){return ws(this).toSpliced(...n)},unshift(...n){return Mr(this,"unshift",n)},values(){return el(this,"values",n=>jn(this,n))}};function el(n,t,e){const i=Ua(n),s=i[t]();return i!==n&&!An(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Qm=Array.prototype;function ii(n,t,e,i,s,r){const o=Ua(n),a=o!==n&&!An(n),l=o[t];if(l!==Qm[t]){const h=l.apply(n,r);return a?Hn(h):h}let u=e;o!==n&&(a?u=function(h,d){return e.call(this,jn(n,h),d,n)}:e.length>2&&(u=function(h,d){return e.call(this,h,d,n)}));const c=l.call(o,u,i);return a&&s?s(c):c}function Vu(n,t,e,i){const s=Ua(n),r=s!==n&&!An(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(u,c,h){return a&&(a=!1,u=jn(n,u)),e.call(this,u,jn(n,c),h,n)}):e.length>3&&(o=function(u,c,h){return e.call(this,u,c,h,n)}));const l=s[t](o,...i);return a?jn(n,l):l}function nl(n,t,e){const i=ae(n);Je(i,"iterate",Kr);const s=i[t](...e);return(s===-1||s===!1)&&nu(e[0])?(e[0]=ae(e[0]),i[t](...e)):s}function Mr(n,t,e=[]){xi(),$c();const i=ae(n)[t].apply(n,e);return Kc(),yi(),i}const tg=Xc("__proto__,__v_isRef,__isVue"),Sd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ti));function eg(n){ti(n)||(n=String(n));const t=ae(this);return Je(t,"has",n),t.hasOwnProperty(n)}class bd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?hg:Ad:r?Td:wd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!s){let l;if(o&&(l=Jm[e]))return l;if(e==="hasOwnProperty")return eg}const a=Reflect.get(t,e,tn(t)?t:i);if((ti(e)?Sd.has(e):tg(e))||(s||Je(t,"get",e),r))return a;if(tn(a)){const l=o&&jc(e)?a:a.value;return s&&pe(l)?Jl(l):l}return pe(a)?s?Jl(a):tu(a):a}}class Ed extends bd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Bt(t)&&jc(e);if(!this._isShallow){const u=Mi(r);if(!An(i)&&!Mi(i)&&(r=ae(r),i=ae(i)),!o&&tn(r)&&!tn(i))return u||(r.value=i),!0}const a=o?Number(e)<t.length:fe(t,e),l=Reflect.set(t,e,i,tn(t)?t:s);return t===ae(s)&&l&&(a?Kn(i,r)&&mi(t,"set",e,i):mi(t,"add",e,i)),l}deleteProperty(t,e){const i=fe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&mi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!ti(e)||!Sd.has(e))&&Je(t,"has",e),i}ownKeys(t){return Je(t,"iterate",Bt(t)?"length":hs),Reflect.ownKeys(t)}}class ng extends bd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ig=new Ed,sg=new ng,rg=new Ed(!0);const Zl=n=>n,yo=n=>Reflect.getPrototypeOf(n);function og(n,t,e){return function(...i){const s=this.__v_raw,r=ae(s),o=Qs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),c=e?Zl:t?ar:Hn;return!t&&Je(r,"iterate",l?Kl:hs),Oe(Object.create(u),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}}})}}function Mo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function ag(n,t){const e={get(s){const r=this.__v_raw,o=ae(r),a=ae(s);n||(Kn(s,a)&&Je(o,"get",s),Je(o,"get",a));const{has:l}=yo(o),u=t?Zl:n?ar:Hn;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Je(ae(s),"iterate",hs),s.size},has(s){const r=this.__v_raw,o=ae(r),a=ae(s);return n||(Kn(s,a)&&Je(o,"has",s),Je(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ae(a),u=t?Zl:n?ar:Hn;return!n&&Je(l,"iterate",hs),a.forEach((c,h)=>s.call(r,u(c),u(h),o))}};return Oe(e,n?{add:Mo("add"),set:Mo("set"),delete:Mo("delete"),clear:Mo("clear")}:{add(s){const r=ae(this),o=yo(r),a=ae(s),l=!t&&!An(s)&&!Mi(s)?a:s;return o.has.call(r,l)||Kn(s,l)&&o.has.call(r,s)||Kn(a,l)&&o.has.call(r,a)||(r.add(l),mi(r,"add",l,l)),this},set(s,r){!t&&!An(r)&&!Mi(r)&&(r=ae(r));const o=ae(this),{has:a,get:l}=yo(o);let u=a.call(o,s);u||(s=ae(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?Kn(r,c)&&mi(o,"set",s,r):mi(o,"add",s,r),this},delete(s){const r=ae(this),{has:o,get:a}=yo(r);let l=o.call(r,s);l||(s=ae(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&mi(r,"delete",s,void 0),u},clear(){const s=ae(this),r=s.size!==0,o=s.clear();return r&&mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=og(s,n,t)}),e}function Qc(n,t){const e=ag(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(fe(e,s)&&s in i?e:i,s,r)}const lg={get:Qc(!1,!1)},cg={get:Qc(!1,!0)},ug={get:Qc(!0,!1)};const wd=new WeakMap,Td=new WeakMap,Ad=new WeakMap,hg=new WeakMap;function fg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tu(n){return Mi(n)?n:eu(n,!1,ig,lg,wd)}function dg(n){return eu(n,!1,rg,cg,Td)}function Jl(n){return eu(n,!0,sg,ug,Ad)}function eu(n,t,e,i,s){if(!pe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=fg(Fm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function fs(n){return Mi(n)?fs(n.__v_raw):!!(n&&n.__v_isReactive)}function Mi(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function nu(n){return n?!!n.__v_raw:!1}function ae(n){const t=n&&n.__v_raw;return t?ae(t):n}function pg(n){return!fe(n,"__v_skip")&&Object.isExtensible(n)&&cd(n,"__v_skip",!0),n}const Hn=n=>pe(n)?tu(n):n,ar=n=>pe(n)?Jl(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function re(n){return mg(n,!1)}function mg(n,t){return tn(n)?n:new gg(n,t)}class gg{constructor(t,e){this.dep=new Jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ae(t),this._value=e?t:Hn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||An(t)||Mi(t);t=i?t:ae(t),Kn(t,e)&&(this._rawValue=t,this._value=i?t:Hn(t),this.dep.trigger())}}function _g(n){return tn(n)?n.value:n}const vg={get:(n,t,e)=>t==="__v_raw"?n:_g(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return tn(s)&&!tn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Rd(n){return fs(n)?n:new Proxy(n,vg)}class xg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return gd(this,!0),!0}get value(){const t=this.dep.track();return xd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yg(n,t,e=!1){let i,s;return $t(n)?i=n:(i=n.get,s=n.set),new xg(i,s,e)}const So={},ua=new WeakMap;let ns;function Mg(n,t=!1,e=ns){if(e){let i=ua.get(e);i||ua.set(e,i=[]),i.push(n)}}function Sg(n,t,e=ge){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,u=S=>s?S:An(S)||s===!1||s===0?gi(S,1):gi(S);let c,h,d,m,g=!1,_=!1;if(tn(n)?(h=()=>n.value,g=An(n)):fs(n)?(h=()=>u(n),g=!0):Bt(n)?(_=!0,g=n.some(S=>fs(S)||An(S)),h=()=>n.map(S=>{if(tn(S))return S.value;if(fs(S))return u(S);if($t(S))return l?l(S,2):S()})):$t(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){xi();try{d()}finally{yi()}}const S=ns;ns=c;try{return l?l(n,3,[m]):n(m)}finally{ns=S}}:h=Qn,t&&s){const S=h,L=s===!0?1/0:s;h=()=>gi(S(),L)}const p=$m(),f=()=>{c.stop(),p&&p.active&&qc(p.effects,c)};if(r&&t){const S=t;t=(...L)=>{const R=S(...L);return f(),R}}let y=_?new Array(n.length).fill(So):So;const M=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const L=c.run();if(S||s||g||(_?L.some((R,C)=>Kn(R,y[C])):Kn(L,y))){d&&d();const R=ns;ns=c;try{const C=[L,y===So?void 0:_&&y[0]===So?[]:y,m];y=L,l?l(t,3,C):t(...C)}finally{ns=R}}}else c.run()};return a&&a(M),c=new pd(h),c.scheduler=o?()=>o(M,!1):M,m=S=>Mg(S,!1,c),d=c.onStop=()=>{const S=ua.get(c);if(S){if(l)l(S,4);else for(const L of S)L();ua.delete(c)}},t?i?M(!0):y=c.run():o?o(M.bind(null,!0),!0):c.run(),f.pause=c.pause.bind(c),f.resume=c.resume.bind(c),f.stop=f,f}function gi(n,t=1/0,e){if(t<=0||!pe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,tn(n))gi(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)gi(n[i],t,e);else if(La(n)||Qs(n))n.forEach(i=>{gi(i,t,e)});else if(ad(n)){for(const i in n)gi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],t,e)}return n}function co(n,t,e,i){try{return i?n(...i):n()}catch(s){Na(s,t,e)}}function Cn(n,t,e,i){if($t(n)){const s=co(n,t,e,i);return s&&rd(s)&&s.catch(r=>{Na(r,t,e)}),s}if(Bt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Cn(n[r],t,e,i));return s}}function Na(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,l,u)===!1)return}a=a.parent}if(r){xi(),co(r,null,10,[n,l,u]),yi();return}}bg(n,e,s,i,o)}function bg(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const an=[];let qn=-1;const tr=[];let Di=null,Ks=0;const Cd=Promise.resolve();let ha=null;function Eg(n){const t=ha||Cd;return n?t.then(this?n.bind(this):n):t}function wg(n){let t=qn+1,e=an.length;for(;t<e;){const i=t+e>>>1,s=an[i],r=Zr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function iu(n){if(!(n.flags&1)){const t=Zr(n),e=an[an.length-1];!e||!(n.flags&2)&&t>=Zr(e)?an.push(n):an.splice(wg(t),0,n),n.flags|=1,Pd()}}function Pd(){ha||(ha=Cd.then(Id))}function Tg(n){Bt(n)?tr.push(...n):Di&&n.id===-1?Di.splice(Ks+1,0,n):n.flags&1||(tr.push(n),n.flags|=1),Pd()}function Gu(n,t,e=qn+1){for(;e<an.length;e++){const i=an[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ld(n){if(tr.length){const t=[...new Set(tr)].sort((e,i)=>Zr(e)-Zr(i));if(tr.length=0,Di){Di.push(...t);return}for(Di=t,Ks=0;Ks<Di.length;Ks++){const e=Di[Ks];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Di=null,Ks=0}}const Zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Id(n){try{for(qn=0;qn<an.length;qn++){const t=an[qn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),co(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;qn<an.length;qn++){const t=an[qn];t&&(t.flags&=-2)}qn=-1,an.length=0,Ld(),ha=null,(an.length||tr.length)&&Id()}}let Tn=null,Dd=null;function fa(n){const t=Tn;return Tn=n,Dd=n&&n.type.__scopeId||null,t}function Ud(n,t=Tn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ma(-1);const r=fa(t),o=ds.length;let a;try{a=n(...s)}finally{for(let l=ds.length;l>o;l--)cp();fa(r),i._d&&ma(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function In(n,t){if(Tn===null)return n;const e=ka(Tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ge]=t[s];r&&($t(r)&&(r={mounted:r,updated:r}),r.deep&&gi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function qi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(xi(),Cn(l,e,8,[n.el,a,n,t]),yi())}}function Ag(n,t){if(cn){let e=cn.provides;const i=cn.parent&&cn.parent.provides;i===e&&(e=cn.provides=Object.create(i)),e[n]=t}}function Jo(n,t,e=!1){const i=dp();if(i||er){let s=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&$t(t)?t.call(i&&i.proxy):t}}const Rg=Symbol.for("v-scx"),Cg=()=>Jo(Rg);function il(n,t,e){return Nd(n,t,e)}function Nd(n,t,e=ge){const{immediate:i,deep:s,flush:r,once:o}=e,a=Oe({},e),l=t&&i||!t&&r!=="post";let u;if(to){if(r==="sync"){const m=Cg();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Qn,m.resume=Qn,m.pause=Qn,m}}const c=cn;a.call=(m,g,_)=>Cn(m,c,g,_);let h=!1;r==="post"?a.scheduler=m=>{fn(m,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,g)=>{g?m():iu(m)}),a.augmentJob=m=>{t&&(m.flags|=4),h&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const d=Sg(n,t,a);return to&&(u?u.push(d):l&&d()),d}function Pg(n,t,e){const i=this.proxy,s=be(n)?n.includes(".")?Od(i,n):()=>i[n]:n.bind(i,i);let r;$t(t)?r=t:(r=t.handler,e=t);const o=uo(this),a=Nd(s,r.bind(i),e);return o(),a}function Od(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Lg=Symbol("_vte"),Fd=n=>n.__isTeleport,wn=Symbol("_leaveCb"),Sr=Symbol("_enterCb");function Ig(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return su(()=>{n.isMounted=!0}),Xd(()=>{n.isUnmounting=!0}),n}const bn=[Function,Array],Bd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},zd=n=>{const t=n.subTree;return t.component?zd(t.component):t},Dg={name:"BaseTransition",props:Bd,setup(n,{slots:t}){const e=dp(),i=Ig();return()=>{const s=t.default&&Vd(t.default(),!0),r=s&&s.length?kd(s):e.subTree?rn():void 0;if(!r)return;const o=ae(n),{mode:a}=o;if(i.isLeaving)return sl(r);const l=Wu(r);if(!l)return sl(r);let u=Ql(l,o,i,e,h=>u=h);l.type!==ln&&Jr(l,u);let c=e.subTree&&Wu(e.subTree);if(c&&c.type!==ln&&!ss(c,l)&&zd(e).type!==ln){let h=Ql(c,o,i,e);if(Jr(c,h),a==="out-in"&&l.type!==ln)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,c=void 0},sl(r);a==="in-out"&&l.type!==ln?h.delayLeave=(d,m,g)=>{const _=Hd(i,c);_[String(c.key)]=c,d[wn]=()=>{m(),d[wn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function kd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==ln){t=e;break}}return t}const Ug=Dg;function Hd(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Ql(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:d,onLeave:m,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:f,onAfterAppear:y,onAppearCancelled:M}=t,S=String(n.key),L=Hd(e,n),R=(w,E)=>{w&&Cn(w,i,9,E)},C=(w,E)=>{const P=E[1];R(w,E),Bt(w)?w.every(U=>U.length<=1)&&P():w.length<=1&&P()},I={mode:o,persisted:a,beforeEnter(w){let E=l;if(!e.isMounted)if(r)E=p||l;else return;w[wn]&&w[wn](!0);const P=L[S];P&&ss(n,P)&&P.el[wn]&&P.el[wn](),R(E,[w])},enter(w){if(L[S]===n)return;let E=u,P=c,U=h;if(!e.isMounted)if(r)E=f||u,P=y||c,U=M||h;else return;let k=!1;w[Sr]=ot=>{k||(k=!0,ot?R(U,[w]):R(P,[w]),I.delayedLeave&&I.delayedLeave(),w[Sr]=void 0)};const Z=w[Sr].bind(null,!1);E?C(E,[w,Z]):Z()},leave(w,E){const P=String(n.key);if(w[Sr]&&w[Sr](!0),e.isUnmounting)return E();R(d,[w]);let U=!1;w[wn]=Z=>{U||(U=!0,E(),Z?R(_,[w]):R(g,[w]),w[wn]=void 0,L[P]===n&&delete L[P])};const k=w[wn].bind(null,!1);L[P]=n,m?C(m,[w,k]):k()},clone(w){const E=Ql(w,t,e,i,s);return s&&s(E),E}};return I}function sl(n){if(Oa(n))return n=ki(n),n.children=null,n}function Wu(n){if(!Oa(n))return Fd(n.type)&&n.children?kd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&$t(e.default))return e.default()}}function Jr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Jr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Vd(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===Ge?(o.patchFlag&128&&s++,i=i.concat(Vd(o.children,t,a))):(t||o.type!==ln)&&i.push(a!=null?ki(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ng(n,t){return $t(n)?Oe({name:n.name},t,{setup:n}):n}function Gd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const da=new WeakMap;function Gr(n,t,e,i,s=!1){if(Bt(n)){n.forEach((_,p)=>Gr(_,t&&(Bt(t)?t[p]:t),e,i,s));return}if(Wr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Gr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?ka(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=t&&t.r,c=a.refs===ge?a.refs={}:a.refs,h=a.setupState,d=ae(h),m=h===ge?sd:_=>Xu(c,_)?!1:fe(d,_),g=(_,p)=>!(p&&Xu(c,p));if(u!=null&&u!==l){if(qu(t),be(u))c[u]=null,m(u)&&(h[u]=null);else if(tn(u)){const _=t;g(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if($t(l))co(l,a,12,[o,c]);else{const _=be(l),p=tn(l);if(_||p){const f=()=>{if(n.f){const y=_?m(l)?h[l]:c[l]:g()||!n.k?l.value:c[n.k];if(s)Bt(y)&&qc(y,r);else if(Bt(y))y.includes(r)||y.push(r);else if(_)c[l]=[r],m(l)&&(h[l]=c[l]);else{const M=[r];g(l,n.k)&&(l.value=M),n.k&&(c[n.k]=M)}}else _?(c[l]=o,m(l)&&(h[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{f(),da.delete(n)};y.id=-1,da.set(n,y),fn(y,e)}else qu(n),f()}}}function qu(n){const t=da.get(n);t&&(t.flags|=8,da.delete(n))}Da().requestIdleCallback;Da().cancelIdleCallback;const Wr=n=>!!n.type.__asyncLoader,Oa=n=>n.type.__isKeepAlive;function Og(n,t){Wd(n,"a",t)}function Fg(n,t){Wd(n,"da",t)}function Wd(n,t,e=cn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Fa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&Bg(i,t,e,s),s=s.parent}}function Bg(n,t,e,i){const s=Fa(t,n,i,!0);ru(()=>{qc(i[t],s)},e)}function Fa(n,t,e=cn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{xi();const a=uo(e),l=Cn(t,e,n,o);return a(),yi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(t,e=cn)=>{(!to||n==="sp")&&Fa(n,(...i)=>t(...i),e)},zg=bi("bm"),su=bi("m"),kg=bi("bu"),Hg=bi("u"),Xd=bi("bum"),ru=bi("um"),Vg=bi("sp"),Gg=bi("rtg"),Wg=bi("rtc");function Xg(n,t=cn){Fa("ec",n,t)}const qg=Symbol.for("v-ndc");function Ts(n,t,e,i){let s;const r=e,o=Bt(n);if(o||be(n)){const a=o&&fs(n);let l=!1,u=!1;a&&(l=!An(n),u=Mi(n),n=Ua(n)),s=new Array(n.length);for(let c=0,h=n.length;c<h;c++)s[c]=t(l?u?ar(Hn(n[c])):Hn(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(pe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=t(n[c],c,l,r)}}else s=[];return s}const tc=n=>n?pp(n)?ka(n):tc(n.parent):null,Xr=Oe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tc(n.parent),$root:n=>tc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>jd(n),$forceUpdate:n=>n.f||(n.f=()=>{iu(n.update)}),$nextTick:n=>n.n||(n.n=Eg.bind(n.proxy)),$watch:n=>Pg.bind(n)}),rl=(n,t)=>n!==ge&&!n.__isScriptSetup&&fe(n,t),jg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(rl(i,t))return o[t]=1,i[t];if(s!==ge&&fe(s,t))return o[t]=2,s[t];if(fe(r,t))return o[t]=3,r[t];if(e!==ge&&fe(e,t))return o[t]=4,e[t];ec&&(o[t]=0)}}const u=Xr[t];let c,h;if(u)return t==="$attrs"&&Je(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==ge&&fe(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,fe(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return rl(s,t)?(s[t]=e,!0):i!==ge&&fe(i,t)?(i[t]=e,!0):fe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ge&&a[0]!=="$"&&fe(n,a)||rl(t,a)||fe(r,a)||fe(i,a)||fe(Xr,a)||fe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:fe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function ju(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let ec=!0;function Yg(n){const t=jd(n),e=n.proxy,i=n.ctx;ec=!1,t.beforeCreate&&Yu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:p,beforeDestroy:f,beforeUnmount:y,destroyed:M,unmounted:S,render:L,renderTracked:R,renderTriggered:C,errorCaptured:I,serverPrefetch:w,expose:E,inheritAttrs:P,components:U,directives:k,filters:Z}=t;if(u&&$g(u,i,null),o)for(const it in o){const q=o[it];$t(q)&&(i[it]=q.bind(e))}if(s){const it=s.call(e,e);pe(it)&&(n.data=tu(it))}if(ec=!0,r)for(const it in r){const q=r[it],yt=$t(q)?q.bind(e,e):$t(q.get)?q.get.bind(e,e):Qn,bt=!$t(q)&&$t(q.set)?q.set.bind(e):Qn,gt=Fr({get:yt,set:bt});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>gt.value,set:Ut=>gt.value=Ut})}if(a)for(const it in a)qd(a[it],i,e,it);if(l){const it=$t(l)?l.call(e):l;Reflect.ownKeys(it).forEach(q=>{Ag(q,it[q])})}c&&Yu(c,n,"c");function Y(it,q){Bt(q)?q.forEach(yt=>it(yt.bind(e))):q&&it(q.bind(e))}if(Y(zg,h),Y(su,d),Y(kg,m),Y(Hg,g),Y(Og,_),Y(Fg,p),Y(Xg,I),Y(Wg,R),Y(Gg,C),Y(Xd,y),Y(ru,S),Y(Vg,w),Bt(E))if(E.length){const it=n.exposed||(n.exposed={});E.forEach(q=>{Object.defineProperty(it,q,{get:()=>e[q],set:yt=>e[q]=yt,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Qn&&(n.render=L),P!=null&&(n.inheritAttrs=P),U&&(n.components=U),k&&(n.directives=k),w&&Gd(n)}function $g(n,t,e=Qn){Bt(n)&&(n=nc(n));for(const i in n){const s=n[i];let r;pe(s)?"default"in s?r=Jo(s.from||i,s.default,!0):r=Jo(s.from||i):r=Jo(s),tn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Yu(n,t,e){Cn(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function qd(n,t,e,i){let s=i.includes(".")?Od(e,i):()=>e[i];if(be(n)){const r=t[n];$t(r)&&il(s,r)}else if($t(n))il(s,n.bind(e));else if(pe(n))if(Bt(n))n.forEach(r=>qd(r,t,e,i));else{const r=$t(n.handler)?n.handler.bind(e):t[n.handler];$t(r)&&il(s,r,n)}}function jd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(u=>pa(l,u,o,!0)),pa(l,t,o)),pe(t)&&r.set(t,l),l}function pa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&pa(n,r,e,!0),s&&s.forEach(o=>pa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Kg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Kg={data:$u,props:Ku,emits:Ku,methods:Or,computed:Or,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Or,directives:Or,watch:Jg,provide:$u,inject:Zg};function $u(n,t){return t?n?function(){return Oe($t(n)?n.call(this,this):n,$t(t)?t.call(this,this):t)}:t:n}function Zg(n,t){return Or(nc(n),nc(t))}function nc(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function sn(n,t){return n?[...new Set([].concat(n,t))]:t}function Or(n,t){return n?Oe(Object.create(null),n,t):t}function Ku(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Oe(Object.create(null),ju(n),ju(t??{})):t}function Jg(n,t){if(!n)return t;if(!t)return n;const e=Oe(Object.create(null),n);for(const i in t)e[i]=sn(n[i],t[i]);return e}function Yd(){return{app:null,config:{isNativeTag:sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function t0(n,t){return function(i,s=null){$t(i)||(i=Oe({},i)),s!=null&&!pe(s)&&(s=null);const r=Yd(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Qg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:L0,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&$t(c.install)?(o.add(c),c.install(u,...h)):$t(c)&&(o.add(c),c(u,...h))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,h){return h?(r.components[c]=h,u):r.components[c]},directive(c,h){return h?(r.directives[c]=h,u):r.directives[c]},mount(c,h,d){if(!l){const m=u._ceVNode||un(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,c,d),l=!0,u._container=c,c.__vue_app__=u,ka(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Cn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,h){return r.provides[c]=h,u},runWithContext(c){const h=er;er=u;try{return c()}finally{er=h}}};return u}}let er=null;const e0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${zn(t)}Modifiers`]||n[`${ys(t)}Modifiers`];function n0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ge;let s=e;const r=t.startsWith("update:"),o=r&&e0(i,t.slice(7));o&&(o.trim&&(s=e.map(c=>be(c)?c.trim():c)),o.number&&(s=e.map(Yc)));let a,l=i[a=Ja(t)]||i[a=Ja(zn(t))];!l&&r&&(l=i[a=Ja(ys(t))]),l&&Cn(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(u,n,6,s)}}const i0=new WeakMap;function $d(n,t,e=!1){const i=e?i0:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!$t(n)){const l=u=>{const c=$d(u,t,!0);c&&(a=!0,Oe(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(pe(n)&&i.set(n,null),null):(Bt(r)?r.forEach(l=>o[l]=null):Oe(o,r),pe(n)&&i.set(n,o),o)}function Ba(n,t){return!n||!Ca(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),fe(n,t[0].toLowerCase()+t.slice(1))||fe(n,ys(t))||fe(n,t))}function Zu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:d,setupState:m,ctx:g,inheritAttrs:_}=n,p=fa(n);let f,y;try{if(e.shapeFlag&4){const S=s||i,L=S;f=Yn(u.call(L,S,c,h,m,d,g)),y=a}else{const S=t;f=Yn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),y=t.props?a:s0(a)}}catch(S){ds.length=0,Na(S,n,1),f=un(ln)}let M=f;if(y&&_!==!1){const S=Object.keys(y),{shapeFlag:L}=M;S.length&&L&7&&(r&&S.some(Pa)&&(y=r0(y,r)),M=ki(M,y,!1,!0))}return e.dirs&&(M=ki(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&Jr(M,e.transition),f=M,fa(p),f}const s0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ca(e))&&((t||(t={}))[e]=n[e]);return t},r0=(n,t)=>{const e={};for(const i in n)(!Pa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function o0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ju(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(Kd(o,i,d)&&!Ba(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ju(i,o,u):!0:!!o;return!1}function Ju(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Kd(t,n,r)&&!Ba(e,r))return!0}return!1}function Kd(n,t,e){const i=n[e],s=t[e];return e==="style"&&pe(i)&&pe(s)?!lo(i,s):i!==s}function a0({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Zd={},Jd=()=>Object.create(Zd),Qd=n=>Object.getPrototypeOf(n)===Zd;function l0(n,t,e,i=!1){const s={},r=Jd();n.propsDefaults=Object.create(null),tp(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:dg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function c0(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ae(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(Ba(n.emitsOptions,d))continue;const m=t[d];if(l)if(fe(r,d))m!==r[d]&&(r[d]=m,u=!0);else{const g=zn(d);s[g]=ic(l,a,g,m,n,!1)}else m!==r[d]&&(r[d]=m,u=!0)}}}else{tp(n,t,s,r)&&(u=!0);let c;for(const h in a)(!t||!fe(t,h)&&((c=ys(h))===h||!fe(t,c)))&&(l?e&&(e[h]!==void 0||e[c]!==void 0)&&(s[h]=ic(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!fe(t,h))&&(delete r[h],u=!0)}u&&mi(n.attrs,"set","")}function tp(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(kr(l))continue;const u=t[l];let c;s&&fe(s,c=zn(l))?!r||!r.includes(c)?e[c]=u:(a||(a={}))[c]=u:Ba(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=ae(e),u=a||ge;for(let c=0;c<r.length;c++){const h=r[c];e[h]=ic(s,l,h,u[h],n,!fe(u,h))}}return o}function ic(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=fe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$t(l)){const{propsDefaults:u}=s;if(e in u)i=u[e];else{const c=uo(s);i=u[e]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ys(e))&&(i=!0))}return i}const u0=new WeakMap;function ep(n,t,e=!1){const i=e?u0:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!$t(n)){const c=h=>{l=!0;const[d,m]=ep(h,t,!0);Oe(o,d),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return pe(n)&&i.set(n,Js),Js;if(Bt(r))for(let c=0;c<r.length;c++){const h=zn(r[c]);Qu(h)&&(o[h]=ge)}else if(r)for(const c in r){const h=zn(c);if(Qu(h)){const d=r[c],m=o[h]=Bt(d)||$t(d)?{type:d}:Oe({},d),g=m.type;let _=!1,p=!0;if(Bt(g))for(let f=0;f<g.length;++f){const y=g[f],M=$t(y)&&y.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(p=!1)}else _=$t(g)&&g.name==="Boolean";m[0]=_,m[1]=p,(_||fe(m,"default"))&&a.push(h)}}const u=[o,a];return pe(n)&&i.set(n,u),u}function Qu(n){return n[0]!=="$"&&!kr(n)}const ou=n=>n==="_"||n==="_ctx"||n==="$stable",au=n=>Bt(n)?n.map(Yn):[Yn(n)],h0=(n,t,e)=>{if(t._n)return t;const i=Ud((...s)=>au(t(...s)),e);return i._c=!1,i},np=(n,t,e)=>{const i=n._ctx;for(const s in n){if(ou(s))continue;const r=n[s];if($t(r))t[s]=h0(s,r,i);else if(r!=null){const o=au(r);t[s]=()=>o}}},ip=(n,t)=>{const e=au(t);n.slots.default=()=>e},sp=(n,t,e)=>{for(const i in t)(e||!ou(i))&&(n[i]=t[i])},f0=(n,t,e)=>{const i=n.slots=Jd();if(n.vnode.shapeFlag&32){const s=t._;s?(sp(i,t,e),e&&cd(i,"_",s,!0)):np(t,i)}else t&&ip(n,t)},d0=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ge;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:sp(s,t,e):(r=!t.$stable,np(t,s)),o=t}else t&&(ip(n,t),o={default:1});if(r)for(const a in s)!ou(a)&&o[a]==null&&delete s[a]},fn=v0;function p0(n){return m0(n)}function m0(n,t){const e=Da();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:m=Qn,insertStaticContent:g}=n,_=(v,N,V,nt=null,O=null,Q=null,st=void 0,rt=null,T=!!N.dynamicChildren)=>{if(v===N)return;v&&!ss(v,N)&&(nt=Mt(v),Ut(v,O,Q,!0),v=null),N.patchFlag===-2&&(T=!1,N.dynamicChildren=null);const{type:x,ref:F,shapeFlag:G}=N;switch(x){case za:p(v,N,V,nt);break;case ln:f(v,N,V,nt);break;case Qo:v==null&&y(N,V,nt,st);break;case Ge:U(v,N,V,nt,O,Q,st,rt,T);break;default:G&1?L(v,N,V,nt,O,Q,st,rt,T):G&6?k(v,N,V,nt,O,Q,st,rt,T):(G&64||G&128)&&x.process(v,N,V,nt,O,Q,st,rt,T,zt)}F!=null&&O?Gr(F,v&&v.ref,Q,N||v,!N):F==null&&v&&v.ref!=null&&Gr(v.ref,null,Q,v,!0)},p=(v,N,V,nt)=>{if(v==null)i(N.el=a(N.children),V,nt);else{const O=N.el=v.el;N.children!==v.children&&u(O,N.children)}},f=(v,N,V,nt)=>{v==null?i(N.el=l(N.children||""),V,nt):N.el=v.el},y=(v,N,V,nt)=>{[v.el,v.anchor]=g(v.children,N,V,nt,v.el,v.anchor)},M=({el:v,anchor:N},V,nt)=>{let O;for(;v&&v!==N;)O=d(v),i(v,V,nt),v=O;i(N,V,nt)},S=({el:v,anchor:N})=>{let V;for(;v&&v!==N;)V=d(v),s(v),v=V;s(N)},L=(v,N,V,nt,O,Q,st,rt,T)=>{if(N.type==="svg"?st="svg":N.type==="math"&&(st="mathml"),v==null)R(N,V,nt,O,Q,st,rt,T);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),w(v,N,O,Q,st,rt,T)}finally{x&&x._endPatch()}}},R=(v,N,V,nt,O,Q,st,rt)=>{let T,x;const{props:F,shapeFlag:G,transition:K,dirs:$}=v;if(T=v.el=o(v.type,Q,F&&F.is,F),G&8?c(T,v.children):G&16&&I(v.children,T,null,nt,O,ol(v,Q),st,rt),$&&qi(v,null,nt,"created"),C(T,v,v.scopeId,st,nt),F){for(const dt in F)dt!=="value"&&!kr(dt)&&r(T,dt,null,F[dt],Q,nt);"value"in F&&r(T,"value",null,F.value,Q),(x=F.onVnodeBeforeMount)&&Gn(x,nt,v)}$&&qi(v,null,nt,"beforeMount");const xt=g0(O,K);xt&&K.beforeEnter(T),i(T,N,V),((x=F&&F.onVnodeMounted)||xt||$)&&fn(()=>{x&&Gn(x,nt,v),xt&&K.enter(T),$&&qi(v,null,nt,"mounted")},O)},C=(v,N,V,nt,O)=>{if(V&&m(v,V),nt)for(let Q=0;Q<nt.length;Q++)m(v,nt[Q]);if(O){let Q=O.subTree;if(N===Q||lp(Q.type)&&(Q.ssContent===N||Q.ssFallback===N)){const st=O.vnode;C(v,st,st.scopeId,st.slotScopeIds,O.parent)}}},I=(v,N,V,nt,O,Q,st,rt,T=0)=>{for(let x=T;x<v.length;x++){const F=v[x]=rt?di(v[x]):Yn(v[x]);_(null,F,N,V,nt,O,Q,st,rt)}},w=(v,N,V,nt,O,Q,st)=>{const rt=N.el=v.el;let{patchFlag:T,dynamicChildren:x,dirs:F}=N;T|=v.patchFlag&16;const G=v.props||ge,K=N.props||ge;let $;if(V&&ji(V,!1),($=K.onVnodeBeforeUpdate)&&Gn($,V,N,v),F&&qi(N,v,V,"beforeUpdate"),V&&ji(V,!0),x&&(!v.dynamicChildren||v.dynamicChildren.length!==x.length)&&(T=0,st=!1,x=null),(G.innerHTML&&K.innerHTML==null||G.textContent&&K.textContent==null)&&c(rt,""),x?E(v.dynamicChildren,x,rt,V,nt,ol(N,O),Q):st||q(v,N,rt,null,V,nt,ol(N,O),Q,!1),T>0){if(T&16)P(rt,G,K,V,O);else if(T&2&&G.class!==K.class&&r(rt,"class",null,K.class,O),T&4&&r(rt,"style",G.style,K.style,O),T&8){const xt=N.dynamicProps;for(let dt=0;dt<xt.length;dt++){const mt=xt[dt],Ct=G[mt],ft=K[mt];(ft!==Ct||mt==="value")&&r(rt,mt,Ct,ft,O,V)}}T&1&&v.children!==N.children&&c(rt,N.children)}else!st&&x==null&&P(rt,G,K,V,O);(($=K.onVnodeUpdated)||F)&&fn(()=>{$&&Gn($,V,N,v),F&&qi(N,v,V,"updated")},nt)},E=(v,N,V,nt,O,Q,st)=>{for(let rt=0;rt<N.length;rt++){const T=v[rt],x=N[rt],F=T.el&&(T.type===Ge||!ss(T,x)||T.shapeFlag&198)?h(T.el):V;_(T,x,F,null,nt,O,Q,st,!0)}},P=(v,N,V,nt,O)=>{if(N!==V){if(N!==ge)for(const Q in N)!kr(Q)&&!(Q in V)&&r(v,Q,N[Q],null,O,nt);for(const Q in V){if(kr(Q))continue;const st=V[Q],rt=N[Q];st!==rt&&Q!=="value"&&r(v,Q,rt,st,O,nt)}"value"in V&&r(v,"value",N.value,V.value,O)}},U=(v,N,V,nt,O,Q,st,rt,T)=>{const x=N.el=v?v.el:a(""),F=N.anchor=v?v.anchor:a("");let{patchFlag:G,dynamicChildren:K,slotScopeIds:$}=N;$&&(rt=rt?rt.concat($):$),v==null?(i(x,V,nt),i(F,V,nt),I(N.children||[],V,F,O,Q,st,rt,T)):G>0&&G&64&&K&&v.dynamicChildren&&v.dynamicChildren.length===K.length?(E(v.dynamicChildren,K,V,O,Q,st,rt),(N.key!=null||O&&N===O.subTree)&&rp(v,N,!0)):q(v,N,V,F,O,Q,st,rt,T)},k=(v,N,V,nt,O,Q,st,rt,T)=>{N.slotScopeIds=rt,v==null?N.shapeFlag&512?O.ctx.activate(N,V,nt,st,T):Z(N,V,nt,O,Q,st,T):ot(v,N,T)},Z=(v,N,V,nt,O,Q,st)=>{const rt=v.component=E0(v,nt,O);if(Oa(v)&&(rt.ctx.renderer=zt),w0(rt,!1,st),rt.asyncDep){if(O&&O.registerDep(rt,Y,st),!v.el){const T=rt.subTree=un(ln);f(null,T,N,V),v.placeholder=T.el}}else Y(rt,v,N,V,O,Q,st)},ot=(v,N,V)=>{const nt=N.component=v.component;if(o0(v,N,V))if(nt.asyncDep&&!nt.asyncResolved){it(nt,N,V);return}else nt.next=N,nt.update();else N.el=v.el,nt.vnode=N},Y=(v,N,V,nt,O,Q,st)=>{const rt=()=>{if(v.isMounted){let{next:G,bu:K,u:$,parent:xt,vnode:dt}=v;{const ht=op(v);if(ht){G&&(G.el=dt.el,it(v,G,st)),ht.asyncDep.then(()=>{fn(()=>{v.isUnmounted||x()},O)});return}}let mt=G,Ct;ji(v,!1),G?(G.el=dt.el,it(v,G,st)):G=dt,K&&Zo(K),(Ct=G.props&&G.props.onVnodeBeforeUpdate)&&Gn(Ct,xt,G,dt),ji(v,!0);const ft=Zu(v),wt=v.subTree;v.subTree=ft,_(wt,ft,h(wt.el),Mt(wt),v,O,Q),G.el=ft.el,mt===null&&a0(v,ft.el),$&&fn($,O),(Ct=G.props&&G.props.onVnodeUpdated)&&fn(()=>Gn(Ct,xt,G,dt),O)}else{let G;const{el:K,props:$}=N,{bm:xt,m:dt,parent:mt,root:Ct,type:ft}=v,wt=Wr(N);ji(v,!1),xt&&Zo(xt),!wt&&(G=$&&$.onVnodeBeforeMount)&&Gn(G,mt,N),ji(v,!0);{Ct.ce&&Ct.ce._hasShadowRoot()&&Ct.ce._injectChildStyle(ft,v.parent?v.parent.type:void 0);const ht=v.subTree=Zu(v);_(null,ht,V,nt,v,O,Q),N.el=ht.el}if(dt&&fn(dt,O),!wt&&(G=$&&$.onVnodeMounted)){const ht=N;fn(()=>Gn(G,mt,ht),O)}(N.shapeFlag&256||mt&&Wr(mt.vnode)&&mt.vnode.shapeFlag&256)&&v.a&&fn(v.a,O),v.isMounted=!0,N=V=nt=null}};v.scope.on();const T=v.effect=new pd(rt);v.scope.off();const x=v.update=T.run.bind(T),F=v.job=T.runIfDirty.bind(T);F.i=v,F.id=v.uid,T.scheduler=()=>iu(F),ji(v,!0),x()},it=(v,N,V)=>{N.component=v;const nt=v.vnode.props;v.vnode=N,v.next=null,c0(v,N.props,nt,V),d0(v,N.children,V),xi(),Gu(v),yi()},q=(v,N,V,nt,O,Q,st,rt,T=!1)=>{const x=v&&v.children,F=v?v.shapeFlag:0,G=N.children,{patchFlag:K,shapeFlag:$}=N;if(K>0){if(K&128){bt(x,G,V,nt,O,Q,st,rt,T);return}else if(K&256){yt(x,G,V,nt,O,Q,st,rt,T);return}}$&8?(F&16&&pt(x,O,Q),G!==x&&c(V,G)):F&16?$&16?bt(x,G,V,nt,O,Q,st,rt,T):pt(x,O,Q,!0):(F&8&&c(V,""),$&16&&I(G,V,nt,O,Q,st,rt,T))},yt=(v,N,V,nt,O,Q,st,rt,T)=>{v=v||Js,N=N||Js;const x=v.length,F=N.length,G=Math.min(x,F);let K;for(K=0;K<G;K++){const $=N[K]=T?di(N[K]):Yn(N[K]);_(v[K],$,V,null,O,Q,st,rt,T)}x>F?pt(v,O,Q,!0,!1,G):I(N,V,nt,O,Q,st,rt,T,G)},bt=(v,N,V,nt,O,Q,st,rt,T)=>{let x=0;const F=N.length;let G=v.length-1,K=F-1;for(;x<=G&&x<=K;){const $=v[x],xt=N[x]=T?di(N[x]):Yn(N[x]);if(ss($,xt))_($,xt,V,null,O,Q,st,rt,T);else break;x++}for(;x<=G&&x<=K;){const $=v[G],xt=N[K]=T?di(N[K]):Yn(N[K]);if(ss($,xt))_($,xt,V,null,O,Q,st,rt,T);else break;G--,K--}if(x>G){if(x<=K){const $=K+1,xt=$<F?N[$].el:nt;for(;x<=K;)_(null,N[x]=T?di(N[x]):Yn(N[x]),V,xt,O,Q,st,rt,T),x++}}else if(x>K)for(;x<=G;)Ut(v[x],O,Q,!0),x++;else{const $=x,xt=x,dt=new Map;for(x=xt;x<=K;x++){const St=N[x]=T?di(N[x]):Yn(N[x]);St.key!=null&&dt.set(St.key,x)}let mt,Ct=0;const ft=K-xt+1;let wt=!1,ht=0;const z=new Array(ft);for(x=0;x<ft;x++)z[x]=0;for(x=$;x<=G;x++){const St=v[x];if(Ct>=ft){Ut(St,O,Q,!0);continue}let Pt;if(St.key!=null)Pt=dt.get(St.key);else for(mt=xt;mt<=K;mt++)if(z[mt-xt]===0&&ss(St,N[mt])){Pt=mt;break}Pt===void 0?Ut(St,O,Q,!0):(z[Pt-xt]=x+1,Pt>=ht?ht=Pt:wt=!0,_(St,N[Pt],V,null,O,Q,st,rt,T),Ct++)}const X=wt?_0(z):Js;for(mt=X.length-1,x=ft-1;x>=0;x--){const St=xt+x,Pt=N[St],ne=N[St+1],b=St+1<F?ne.el||ap(ne):nt;z[x]===0?_(null,Pt,V,b,O,Q,st,rt,T):wt&&(mt<0||x!==X[mt]?gt(Pt,V,b,2):mt--)}}},gt=(v,N,V,nt,O=null)=>{const{el:Q,type:st,transition:rt,children:T,shapeFlag:x}=v;if(x&6){gt(v.component.subTree,N,V,nt);return}if(x&128){v.suspense.move(N,V,nt);return}if(x&64){st.move(v,N,V,zt);return}if(st===Ge){i(Q,N,V);for(let G=0;G<T.length;G++)gt(T[G],N,V,nt);i(v.anchor,N,V);return}if(st===Qo){M(v,N,V);return}if(nt!==2&&x&1&&rt)if(nt===0)rt.persisted&&!Q[wn]?i(Q,N,V):(rt.beforeEnter(Q),i(Q,N,V),fn(()=>rt.enter(Q),O));else{const{leave:G,delayLeave:K,afterLeave:$}=rt,xt=()=>{v.ctx.isUnmounted?s(Q):i(Q,N,V)},dt=()=>{const mt=Q._isLeaving||!!Q[wn];Q._isLeaving&&Q[wn](!0),rt.persisted&&!mt?xt():G(Q,()=>{xt(),$&&$()})};K?K(Q,xt,dt):dt()}else i(Q,N,V)},Ut=(v,N,V,nt=!1,O=!1)=>{const{type:Q,props:st,ref:rt,children:T,dynamicChildren:x,shapeFlag:F,patchFlag:G,dirs:K,cacheIndex:$,memo:xt}=v;if(G===-2&&(O=!1),rt!=null&&(xi(),Gr(rt,null,V,v,!0),yi()),$!=null&&(N.renderCache[$]=void 0),F&256){N.ctx.deactivate(v);return}const dt=F&1&&K,mt=!Wr(v);let Ct;if(mt&&(Ct=st&&st.onVnodeBeforeUnmount)&&Gn(Ct,N,v),F&6)vt(v.component,V,nt);else{if(F&128){v.suspense.unmount(V,nt);return}dt&&qi(v,null,N,"beforeUnmount"),F&64?v.type.remove(v,N,V,zt,nt):x&&!x.hasOnce&&(Q!==Ge||G>0&&G&64)?pt(x,N,V,!1,!0):(Q===Ge&&G&384||!O&&F&16)&&pt(T,N,V),nt&&qt(v)}const ft=xt!=null&&$==null;(mt&&(Ct=st&&st.onVnodeUnmounted)||dt||ft)&&fn(()=>{Ct&&Gn(Ct,N,v),dt&&qi(v,null,N,"unmounted"),ft&&(v.el=null)},V)},qt=v=>{const{type:N,el:V,anchor:nt,transition:O}=v;if(N===Ge){lt(V,nt);return}if(N===Qo){S(v);return}const Q=()=>{s(V),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:st,delayLeave:rt}=O,T=()=>st(V,Q);rt?rt(v.el,Q,T):T()}else Q()},lt=(v,N)=>{let V;for(;v!==N;)V=d(v),s(v),v=V;s(N)},vt=(v,N,V)=>{const{bum:nt,scope:O,job:Q,subTree:st,um:rt,m:T,a:x}=v;th(T),th(x),nt&&Zo(nt),O.stop(),Q&&(Q.flags|=8,Ut(st,v,N,V)),rt&&fn(rt,N),fn(()=>{v.isUnmounted=!0},N)},pt=(v,N,V,nt=!1,O=!1,Q=0)=>{for(let st=Q;st<v.length;st++)Ut(v[st],N,V,nt,O)},Mt=v=>{if(v.shapeFlag&6)return Mt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const N=d(v.anchor||v.el),V=N&&N[Lg];return V?d(V):N};let Nt=!1;const Ht=(v,N,V)=>{let nt;v==null?N._vnode&&(Ut(N._vnode,null,null,!0),nt=N._vnode.component):_(N._vnode||null,v,N,null,null,null,V),N._vnode=v,Nt||(Nt=!0,Gu(nt),Ld(),Nt=!1)},zt={p:_,um:Ut,m:gt,r:qt,mt:Z,mc:I,pc:q,pbc:E,n:Mt,o:n};return{render:Ht,hydrate:void 0,createApp:t0(Ht)}}function ol({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ji({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function g0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function rp(n,t,e=!1){const i=n.children,s=t.children;if(Bt(i)&&Bt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&rp(o,a)),a.type===za&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===ln&&!a.el&&(a.el=o.el)}}function _0(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=e[e.length-1],n[s]<u){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<u?r=a+1:o=a;u<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function op(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:op(t)}function th(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ap(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ap(t.subTree):null}const lp=n=>n.__isSuspense;function v0(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):Tg(n)}const Ge=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),ds=[];let Mn=null;function jt(n=!1){ds.push(Mn=n?null:[])}function cp(){ds.pop(),Mn=ds[ds.length-1]||null}let Qr=1;function ma(n,t=!1){Qr+=n,n<0&&Mn&&t&&(Mn.hasOnce=!0)}function up(n){return n.dynamicChildren=Qr>0?Mn||Js:null,cp(),Qr>0&&Mn&&Mn.push(n),n}function Kt(n,t,e,i,s,r){return up(ut(n,t,e,i,s,r,!0))}function hp(n,t,e,i,s){return up(un(n,t,e,i,s,!0))}function ga(n){return n?n.__v_isVNode===!0:!1}function ss(n,t){return n.type===t.type&&n.key===t.key}const fp=({key:n})=>n??null,ta=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?be(n)||tn(n)||$t(n)?{i:Tn,r:n,k:t,f:!!e}:n:null);function ut(n,t=null,e=null,i=0,s=null,r=n===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&fp(t),ref:t&&ta(t),scopeId:Dd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return a?(_a(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=be(e)?8:16),Qr>0&&!o&&Mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Mn.push(l),l}const un=x0;function x0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===qg)&&(n=ln),ga(n)){const a=ki(n,t,!0);return e&&_a(a,e),Qr>0&&!r&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(n)]=a:Mn.push(a)),a.patchFlag=-2,a}if(C0(n)&&(n=n.__vccOpts),t){t=y0(t);let{class:a,style:l}=t;a&&!be(a)&&(t.class=Oi(a)),pe(l)&&(nu(l)&&!Bt(l)&&(l=Oe({},l)),t.style=Yr(l))}const o=be(n)?1:lp(n)?128:Fd(n)?64:pe(n)?4:$t(n)?2:0;return ut(n,t,e,i,s,o,r,!0)}function y0(n){return n?nu(n)||Qd(n)?Oe({},n):n:null}function ki(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=t?M0(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&fp(u),ref:t&&t.ref?e&&r?Bt(r)?r.concat(ta(t)):[r,ta(t)]:ta(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ge?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ki(n.ssContent),ssFallback:n.ssFallback&&ki(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Jr(c,l.clone(c)),c}function ui(n=" ",t=0){return un(za,null,n,t)}function eh(n,t){const e=un(Qo,null,n);return e.staticCount=t,e}function rn(n="",t=!1){return t?(jt(),hp(ln,null,n)):un(ln,null,n)}function Yn(n){return n==null||typeof n=="boolean"?un(ln):Bt(n)?un(Ge,null,n.slice()):ga(n)?di(n):un(za,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ki(n)}function _a(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),_a(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Qd(t)?t._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if($t(t)){if(i&65){_a(n,{default:t});return}t={default:t,_ctx:Tn},e=32}else t=String(t),i&64?(e=16,t=[ui(t)]):e=8;n.children=t,n.shapeFlag|=e}function M0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Oi([t.class,i.class]));else if(s==="style")t.style=Yr([t.style,i.style]);else if(Ca(s)){const r=t[s],o=i[s];o&&r!==o&&!(Bt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Pa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Gn(n,t,e,i=null){Cn(n,t,7,[e,i])}const S0=Yd();let b0=0;function E0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||S0,r={uid:b0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ym(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(i,s),emitsOptions:$d(i,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:i.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=n0.bind(null,r),n.ce&&n.ce(r),r}let cn=null;const dp=()=>cn||Tn;let va,sc;{const n=Da(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};va=t("__VUE_INSTANCE_SETTERS__",e=>cn=e),sc=t("__VUE_SSR_SETTERS__",e=>to=e)}const uo=n=>{const t=cn;return va(n),n.scope.on(),()=>{n.scope.off(),va(t)}},nh=()=>{cn&&cn.scope.off(),va(null)};function pp(n){return n.vnode.shapeFlag&4}let to=!1;function w0(n,t=!1,e=!1){t&&sc(t);const{props:i,children:s}=n.vnode,r=pp(n);l0(n,i,r,t),f0(n,s,e||t);const o=r?T0(n,t):void 0;return t&&sc(!1),o}function T0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,jg);const{setup:i}=e;if(i){xi();const s=n.setupContext=i.length>1?R0(n):null,r=uo(n),o=co(i,n,0,[n.props,s]),a=rd(o);if(yi(),r(),(a||n.sp)&&!Wr(n)&&Gd(n),a){if(o.then(nh,nh),t)return o.then(l=>{ih(n,l)}).catch(l=>{Na(l,n,0)});n.asyncDep=o}else ih(n,o)}else mp(n)}function ih(n,t,e){$t(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:pe(t)&&(n.setupState=Rd(t)),mp(n)}function mp(n,t,e){const i=n.type;n.render||(n.render=i.render||Qn);{const s=uo(n);xi();try{Yg(n)}finally{yi(),s()}}}const A0={get(n,t){return Je(n,"get",""),n[t]}};function R0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,A0),slots:n.slots,emit:n.emit,expose:t}}function ka(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Rd(pg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Xr)return Xr[e](n)},has(t,e){return e in t||e in Xr}})):n.proxy}function C0(n){return $t(n)&&"__vccOpts"in n}const Fr=(n,t)=>yg(n,t,to);function P0(n,t,e){try{ma(-1);const i=arguments.length;return i===2?pe(t)&&!Bt(t)?ga(t)?un(n,null,[t]):un(n,t):un(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ga(e)&&(e=[e]),un(n,t,e))}finally{ma(1)}}const L0="3.5.40";let rc;const sh=typeof window<"u"&&window.trustedTypes;if(sh)try{rc=sh.createPolicy("vue",{createHTML:n=>n})}catch{}const gp=rc?n=>rc.createHTML(n):n=>n,I0="http://www.w3.org/2000/svg",D0="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,rh=fi&&fi.createElement("template"),U0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?fi.createElementNS(I0,n):t==="mathml"?fi.createElementNS(D0,n):e?fi.createElement(n,{is:e}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{rh.innerHTML=gp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=rh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Ti="transition",br="animation",eo=Symbol("_vtc"),_p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},N0=Oe({},Bd,_p),O0=n=>(n.displayName="Transition",n.props=N0,n),F0=O0((n,{slots:t})=>P0(Ug,B0(n),t)),Yi=(n,t=[])=>{Bt(n)?n.forEach(e=>e(...t)):n&&n(...t)},oh=n=>n?Bt(n)?n.some(t=>t.length>1):n.length>1:!1;function B0(n){const t={};for(const U in n)U in _p||(t[U]=n[U]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:m=`${e}-leave-to`}=n,g=z0(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:f,onEnter:y,onEnterCancelled:M,onLeave:S,onLeaveCancelled:L,onBeforeAppear:R=f,onAppear:C=y,onAppearCancelled:I=M}=t,w=(U,k,Z,ot)=>{U._enterCancelled=ot,$i(U,k?c:a),$i(U,k?u:o),Z&&Z()},E=(U,k)=>{U._isLeaving=!1,$i(U,h),$i(U,m),$i(U,d),k&&k()},P=U=>(k,Z)=>{const ot=U?C:y,Y=()=>w(k,U,Z);Yi(ot,[k,Y]),ah(()=>{$i(k,U?l:r),si(k,U?c:a),oh(ot)||lh(k,i,_,Y)})};return Oe(t,{onBeforeEnter(U){Yi(f,[U]),si(U,r),si(U,o)},onBeforeAppear(U){Yi(R,[U]),si(U,l),si(U,u)},onEnter:P(!1),onAppear:P(!0),onLeave(U,k){U._isLeaving=!0;const Z=()=>E(U,k);si(U,h),U._enterCancelled?(si(U,d),hh(U)):(hh(U),si(U,d)),ah(()=>{U._isLeaving&&($i(U,h),si(U,m),oh(S)||lh(U,i,p,Z))}),Yi(S,[U,Z])},onEnterCancelled(U){w(U,!1,void 0,!0),Yi(M,[U])},onAppearCancelled(U){w(U,!0,void 0,!0),Yi(I,[U])},onLeaveCancelled(U){E(U),Yi(L,[U])}})}function z0(n){if(n==null)return null;if(pe(n))return[al(n.enter),al(n.leave)];{const t=al(n);return[t,t]}}function al(n){return km(n)}function si(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[eo]||(n[eo]=new Set)).add(t)}function $i(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[eo];e&&(e.delete(t),e.size||(n[eo]=void 0))}function ah(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let k0=0;function lh(n,t,e,i){const s=n._endId=++k0,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=H0(n,t);if(!o)return i();const u=o+"end";let c=0;const h=()=>{n.removeEventListener(u,d),r()},d=m=>{m.target===n&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),n.addEventListener(u,d)}function H0(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${Ti}Delay`),r=i(`${Ti}Duration`),o=ch(s,r),a=i(`${br}Delay`),l=i(`${br}Duration`),u=ch(a,l);let c=null,h=0,d=0;t===Ti?o>0&&(c=Ti,h=o,d=r.length):t===br?u>0&&(c=br,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?Ti:br:null,d=c?c===Ti?r.length:l.length:0);const m=c===Ti&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ti}Property`).toString());return{type:c,timeout:h,propCount:d,hasTransform:m}}function ch(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>uh(e)+uh(n[i])))}function uh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function hh(n){return(n?n.ownerDocument:document).body.offsetHeight}function V0(n,t,e){const i=n[eo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const fh=Symbol("_vod"),G0=Symbol("_vsh"),W0=Symbol(""),X0=/(?:^|;)\s*display\s*:/;function q0(n,t,e){const i=n.style,s=be(e);let r=!1;if(e&&!s){if(t)if(be(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Br(i,a,"")}else for(const o in t)e[o]==null&&Br(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?Y0(n,o,!be(t)&&t?t[o]:void 0,a)||Br(i,o,a):Br(i,o,"")}}else if(s){if(t!==e){const o=i[W0];o&&(e+=";"+o),i.cssText=e,r=X0.test(e)}}else t&&n.removeAttribute("style");fh in n&&(n[fh]=r?i.display:"",n[G0]&&(i.display="none"))}const dh=/\s*!important$/;function Br(n,t,e){if(Bt(e))e.forEach(i=>Br(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=j0(n,t);dh.test(e)?n.setProperty(ys(i),e.replace(dh,""),"important"):n[i]=e}}const ph=["Webkit","Moz","ms"],ll={};function j0(n,t){const e=ll[t];if(e)return e;let i=zn(t);if(i!=="filter"&&i in n)return ll[t]=i;i=ld(i);for(let s=0;s<ph.length;s++){const r=ph[s]+i;if(r in n)return ll[t]=r}return t}function Y0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&be(i)&&e===i}const mh="http://www.w3.org/1999/xlink";function gh(n,t,e,i,s,r=qm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(mh,t.slice(6,t.length)):n.setAttributeNS(mh,t,e):e==null||r&&!ud(e)?n.removeAttribute(t):n.setAttribute(t,r?"":ti(e)?String(e):e)}function _h(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?gp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=ud(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function rs(n,t,e,i){n.addEventListener(t,e,i)}function $0(n,t,e,i){n.removeEventListener(t,e,i)}const vh=Symbol("_vei");function K0(n,t,e,i,s=null){const r=n[vh]||(n[vh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Q0(t);if(i){const u=r[t]=n_(i,s);rs(n,a,u,l)}else o&&($0(n,a,o,l),r[t]=void 0)}}const Z0=/(Once|Passive|Capture)$/,J0=/^on:?(?:Once|Passive|Capture)$/;function Q0(n){let t,e;for(;(e=n.match(Z0))&&!J0.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ys(n.slice(2)),t]}let cl=0;const t_=Promise.resolve(),e_=()=>cl||(t_.then(()=>cl=0),cl=Date.now());function n_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Bt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&Cn(u,t,5,a)}}else Cn(s,t,5,[i])};return e.value=n,e.attached=e_(),e}const xh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,i_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?V0(n,i,o):t==="style"?q0(n,e,i):Ca(t)?Pa(t)||K0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):s_(n,t,i,o))?(_h(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gh(n,t,i,o,r,t!=="value")):n._isVueCE&&(r_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!be(i)))?_h(n,zn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),gh(n,t,i,o))};function s_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&xh(t)&&$t(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xh(t)&&be(e)?!1:t in n}function r_(n,t){const e=n._def.props;if(!e)return!1;const i=zn(t);return Array.isArray(e)?e.some(s=>zn(s)===i):Object.keys(e).some(s=>zn(s)===i)}const xa=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Bt(t)?e=>Zo(t,e):t};function o_(n){n.target.composing=!0}function yh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const nr=Symbol("_assign");function Mh(n,t,e){return t&&(n=n.trim()),e&&(n=Yc(n)),n}const Wn={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[nr]=xa(s);const r=i||s.props&&s.props.type==="number";rs(n,t?"change":"input",o=>{o.target.composing||n[nr](Mh(n.value,e,r))}),(e||r)&&rs(n,"change",()=>{n.value=Mh(n.value,e,r)}),t||(rs(n,"compositionstart",o_),rs(n,"compositionend",yh),rs(n,"change",yh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[nr]=xa(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Yc(n.value):n.value,l=t??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},a_={deep:!0,created(n,t,e){n[nr]=xa(e),rs(n,"change",()=>{const i=n._modelValue,s=l_(n),r=n.checked,o=n[nr];if(Bt(i)){const a=hd(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const u=[...i];u.splice(a,1),o(u)}}else if(La(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(vp(n,r))})},mounted:Sh,beforeUpdate(n,t,e){n[nr]=xa(e),Sh(n,t,e)}};function Sh(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Bt(t))s=hd(t,i.props.value)>-1;else if(La(t))s=t.has(i.props.value);else{if(t===e)return;s=lo(t,vp(n,!0))}n.checked!==s&&(n.checked=s)}function l_(n){return"_value"in n?n._value:n.value}function vp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const c_=["ctrl","shift","alt","meta"],u_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>c_.some(e=>n[`${e}Key`]&&!t.includes(e))},ul=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=u_[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},h_=Oe({patchProp:i_},U0);let bh;function f_(){return bh||(bh=p0(h_))}const d_=((...n)=>{const t=f_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=m_(i);if(!s)return;const r=t._component;!$t(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,p_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function p_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function m_(n){return be(n)?document.querySelector(n):n}function xp(n,t){return function(){return n.apply(t,arguments)}}const{toString:g_}=Object.prototype,{getPrototypeOf:lr}=Object,{iterator:ho,toStringTag:yp}=Symbol,ya=(({hasOwnProperty:n})=>(t,e)=>n.call(t,e))(Object.prototype),no=(n,t)=>{let e=n;const i=[];for(;e!=null&&e!==Object.prototype;){if(i.indexOf(e)!==-1)return!1;if(i.push(e),ya(e,t))return!0;e=lr(e)}return!1},__=(n,t)=>n!=null&&no(n,t)?n[t]:void 0,lu=(n=>t=>{const e=g_.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),Pn=n=>(n=n.toLowerCase(),t=>lu(t)===n),Ha=n=>t=>typeof t===n,{isArray:ms}=Array,gs=Ha("undefined");function gr(n){return n!==null&&!gs(n)&&n.constructor!==null&&!gs(n.constructor)&&mn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Mp=Pn("ArrayBuffer");function v_(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&Mp(n.buffer),t}const x_=Ha("string"),mn=Ha("function"),Sp=Ha("number"),_r=n=>n!==null&&typeof n=="object",y_=n=>n===!0||n===!1,ea=n=>{if(!_r(n))return!1;const t=lr(n);return(t===null||t===Object.prototype||lr(t)===null)&&!no(n,yp)&&!no(n,ho)},M_=n=>{if(!_r(n)||gr(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},S_=Pn("Date"),b_=Pn("File"),E_=n=>!!(n&&typeof n.uri<"u"),w_=n=>n&&typeof n.getParts<"u",T_=Pn("Blob"),A_=Pn("FileList"),R_=Pn("Set"),C_=n=>_r(n)&&mn(n.pipe);function P_(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Eh=P_(),wh=typeof Eh.FormData<"u"?Eh.FormData:void 0,L_=n=>{if(!n)return!1;if(wh&&n instanceof wh)return!0;const t=lr(n);if(!t||t===Object.prototype||!mn(n.append))return!1;const e=lu(n);return e==="formdata"||e==="object"&&mn(n.toString)&&n.toString()==="[object FormData]"},I_=Pn("URLSearchParams"),[D_,U_,N_,O_]=["ReadableStream","Request","Response","Headers"].map(Pn),F_=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fo(n,t,{allOwnKeys:e=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),ms(n))for(i=0,s=n.length;i<s;i++)t.call(null,n[i],i,n);else{if(gr(n))return;const r=e?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],t.call(null,n[a],a,n)}}function bp(n,t){if(gr(n))return null;t=t.toLowerCase();const e=Object.keys(n);let i=e.length,s;for(;i-- >0;)if(s=e[i],t===s.toLowerCase())return s;return null}const ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ep=n=>!gs(n)&&n!==ls;function oc(...n){const{caseless:t,skipUndefined:e}=Ep(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=t&&typeof o=="string"&&bp(i,o)||o,l=ya(i,a)?i[a]:void 0;ea(l)&&ea(r)?i[a]=oc(l,r):ea(r)?i[a]=oc({},r):ms(r)?i[a]=r.slice():(!e||!gs(r))&&(i[a]=r)};for(let r=0,o=n.length;r<o;r++){const a=n[r];if(!a||gr(a)||(fo(a,s),typeof a!="object"||ms(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let u=0;u<l.length;u++){const c=l[u];$_.call(a,c)&&s(a[c],c)}}return i}const B_=(n,t,e,{allOwnKeys:i}={})=>(fo(t,(s,r)=>{e&&mn(s)?Object.defineProperty(n,r,{__proto__:null,value:xp(s,e),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),z_=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),k_=(n,t,e,i)=>{n.prototype=Object.create(t.prototype,i),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:t.prototype}),e&&Object.assign(n.prototype,e)},H_=(n,t,e,i)=>{let s,r,o;const a={};if(t=t||{},n==null)return t;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,t))&&!a[o]&&(t[o]=n[o],a[o]=!0);n=e!==!1&&lr(n)}while(n&&(!e||e(n,t))&&n!==Object.prototype);return t},V_=(n,t,e)=>{n=String(n),(e===void 0||e>n.length)&&(e=n.length),e-=t.length;const i=n.indexOf(t,e);return i!==-1&&i===e},G_=n=>{if(!n)return null;if(ms(n))return n;let t=n.length;if(!Sp(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=n[t];return e},W_=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&lr(Uint8Array)),X_=(n,t)=>{const i=(n&&n[ho]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;t.call(n,r[0],r[1])}},q_=(n,t)=>{let e;const i=[];for(;(e=n.exec(t))!==null;)i.push(e);return i},j_=Pn("HTMLFormElement"),Y_=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:$_}=Object.prototype,K_=Pn("RegExp"),wp=(n,t)=>{const e=Object.getOwnPropertyDescriptors(n),i={};fo(e,(s,r)=>{let o;(o=t(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},Z_=n=>{wp(n,(t,e)=>{if(mn(n)&&["arguments","caller","callee"].includes(e))return!1;const i=n[e];if(mn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},J_=(n,t)=>{const e={},i=s=>{s.forEach(r=>{e[r]=!0})};return ms(n)?i(n):i(String(n).split(t)),e},Q_=()=>{},tv=(n,t)=>n!=null&&Number.isFinite(n=+n)?n:t;function ev(n){return!!(n&&mn(n.append)&&n[yp]==="FormData"&&n[ho])}const nv=n=>{const t=new WeakSet,e=i=>{if(_r(i)){if(t.has(i))return;if(gr(i))return i;if(!("toJSON"in i)){t.add(i);let s;if(R_(i)){s=[];for(const r of i){const o=e(r);!gs(o)&&s.push(o)}}else s=ms(i)?[]:{},fo(i,(r,o)=>{const a=e(r);!gs(a)&&(s[o]=a)});return t.delete(i),s}}return i};return e(n)},iv=Pn("AsyncFunction"),sv=n=>n&&(_r(n)||mn(n))&&mn(n.then)&&mn(n.catch),Tp=((n,t)=>n?setImmediate:t?((e,i)=>(ls.addEventListener("message",({source:s,data:r})=>{s===ls&&r===e&&i.length&&i.shift()()},!1),s=>{i.push(s),ls.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",mn(ls.postMessage)),rv=typeof queueMicrotask<"u"?queueMicrotask.bind(ls):typeof process<"u"&&process.nextTick||Tp,Ap=n=>n!=null&&mn(n[ho]),ov=n=>n!=null&&no(n,ho)&&Ap(n),B={isArray:ms,isArrayBuffer:Mp,isBuffer:gr,isFormData:L_,isArrayBufferView:v_,isString:x_,isNumber:Sp,isBoolean:y_,isObject:_r,isPlainObject:ea,isEmptyObject:M_,isReadableStream:D_,isRequest:U_,isResponse:N_,isHeaders:O_,isUndefined:gs,isDate:S_,isFile:b_,isReactNativeBlob:E_,isReactNative:w_,isBlob:T_,isRegExp:K_,isFunction:mn,isStream:C_,isURLSearchParams:I_,isTypedArray:W_,isFileList:A_,forEach:fo,merge:oc,extend:B_,trim:F_,stripBOM:z_,inherits:k_,toFlatObject:H_,kindOf:lu,kindOfTest:Pn,endsWith:V_,toArray:G_,forEachEntry:X_,matchAll:q_,isHTMLForm:j_,hasOwnProperty:ya,hasOwnProp:ya,hasOwnInPrototypeChain:no,getSafeProp:__,reduceDescriptors:wp,freezeMethods:Z_,toObjectSet:J_,toCamelCase:Y_,noop:Q_,toFiniteNumber:tv,findKey:bp,global:ls,isContextDefined:Ep,isSpecCompliantForm:ev,toJSONObject:nv,isAsyncFn:iv,isThenable:sv,setImmediate:Tp,asap:rv,isIterable:Ap,isSafeIterable:ov},av=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lv=n=>{const t={};let e,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),e=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim();const a=B.hasOwnProp(t,e);!e||a&&B.hasOwnProp(av,e)||(e==="set-cookie"?a?t[e].push(i):t[e]=[i]:t[e]=a?t[e]+", "+i:i)}),t};function cv(n){let t=0,e=n.length;for(;t<e;){const i=n.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;e>t;){const i=n.charCodeAt(e-1);if(i!==9&&i!==32)break;e-=1}return t===0&&e===n.length?n:n.slice(t,e)}const uv=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),hv=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function cu(n,t){return B.isArray(n)?n.map(e=>cu(e,t)):cv(String(n).replace(t,""))}const fv=n=>cu(n,uv),dv=n=>cu(n,hv);function Rp(n){const t=Object.create(null);return B.forEach(n.toJSON(),(e,i)=>{t[i]=dv(e)}),t}const Th=Symbol("internals");function Er(n){return n&&String(n).trim().toLowerCase()}function na(n){return n===!1||n==null?n:B.isArray(n)?n.map(na):fv(String(n))}function pv(n){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=e.exec(n);)t[i[1]]=i[2];return t}const mv=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function hl(n){let t=0,e=n.length;for(;t<e;){const i=n.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;e>t;){const i=n.charCodeAt(e-1);if(i!==9&&i!==32)break;e-=1}return t===0&&e===n.length?n:n.slice(t,e)}function gv(n){const t=n.length-1;if(t<1||n.charCodeAt(0)!==34||n.charCodeAt(t)!==34)return n;let e="";for(let i=1;i<t;i++){const s=n.charCodeAt(i);if(s===34||s===92&&(i+=1,i>=t))return n;e+=n[i]}return e}function _v(n){const t=Object.create(null),e=String(n);let i=0,s=!1,r=!1;function o(a){const l=hl(e.slice(i,a)),u=l.indexOf("=");if(u<1)return;const c=hl(l.slice(0,u));if(!mv.test(c))return;const h=c.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const d=hl(l.slice(u+1));t[h]=gv(d)}for(let a=0;a<e.length;a++){const l=e.charCodeAt(a);s?r?r=!1:l===92?r=!0:l===34&&(s=!1):l===34?s=!0:(l===44||l===59)&&(o(a),i=a+1)}return o(e.length),t}const vv=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function fl(n,t,e,i,s){if(B.isFunction(i))return i.call(this,t,e);if(s&&(t=e),!!B.isString(t)){if(B.isString(i))return t.indexOf(i)!==-1;if(B.isRegExp(i))return i.test(t)}}function xv(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,i)=>e.toUpperCase()+i)}function yv(n,t){const e=B.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+e,{__proto__:null,value:function(s,r,o){return this[i].call(this,t,s,r,o)},configurable:!0})})}let en=class{constructor(t){t&&this.set(t)}set(t,e,i){const s=this;function r(a,l,u){const c=Er(l);if(!c)return;const h=B.findKey(s,c);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||l]=na(a))}const o=(a,l)=>B.forEach(a,(u,c)=>r(u,c,l));if(B.isPlainObject(t)||t instanceof this.constructor)o(t,e);else if(B.isString(t)&&(t=t.trim())&&!vv(t))o(lv(t),e);else if(B.isObject(t)&&B.isSafeIterable(t)){let a=Object.create(null),l,u;for(const c of t){if(!B.isArray(c))throw new TypeError("Object iterator must return a key-value pair");u=c[0],B.hasOwnProp(a,u)?(l=a[u],a[u]=B.isArray(l)?[...l,c[1]]:[l,c[1]]):a[u]=c[1]}o(a,e)}else t!=null&&r(e,t,i);return this}get(t,e){if(t=Er(t),t){const i=B.findKey(this,t);if(i){const s=this[i];if(!e)return s;if(e===!0)return pv(s);if(B.isFunction(e))return e.call(this,s,i);if(B.isRegExp(e))return e.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Er(t),t){const i=B.findKey(this,t);return!!(i&&this[i]!==void 0&&(!e||fl(this,this[i],i,e)))}return!1}delete(t,e){const i=this;let s=!1;function r(o){if(o=Er(o),o){const a=B.findKey(i,o);a&&(!e||fl(i,i[a],a,e))&&(delete i[a],s=!0)}}return B.isArray(t)?t.forEach(r):r(t),s}clear(t){const e=Object.keys(this);let i=e.length,s=!1;for(;i--;){const r=e[i];(!t||fl(this,this[r],r,t,!0))&&(delete this[r],s=!0)}return s}normalize(t){const e=this,i={};return B.forEach(this,(s,r)=>{const o=B.findKey(i,r);if(o){e[o]=na(s),delete e[r];return}const a=t?xv(r):String(r).trim();a!==r&&delete e[r],e[a]=na(s),i[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return B.forEach(this,(i,s)=>{i!=null&&i!==!1&&(e[s]=t&&B.isArray(i)?i.join(", "):i)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return B.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return _v(t)}static concat(t,...e){const i=new this(t);return e.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[Th]=this[Th]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Er(o);i[a]||(yv(s,o),i[a]=!0)}return B.isArray(t)?t.forEach(r):r(t),this}};en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(en.prototype,({value:n},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(i){this[e]=i}}});B.freezeMethods(en);const Ma="[REDACTED ****]";function Mv(n){if(B.hasOwnProp(n,"toJSON"))return!0;let t=Object.getPrototypeOf(n);for(;t&&t!==Object.prototype;){if(B.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Sv(n,t){const e=new Set(t.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||B.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof en&&(r=r.toJSON()),i.push(r);let o;if(B.isArray(r))o=[],r.forEach((a,l)=>{const u=s(a);B.isUndefined(u)||(o[l]=u)});else{if(!B.isPlainObject(r)&&Mv(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const u=e.has(a.toLowerCase())?Ma:s(l);B.isUndefined(u)||(o[a]=u)}}return i.pop(),o};return s(n)}function Ah(n){try{return String(n)}catch{return""}}function bv(n){return n.errors.map(e=>{try{return e&&e.message?Ah(e.message):Ah(e)}catch{return""}}).filter(Boolean).join("; ")||n.name||"AggregateError"}let At=class Cp extends Error{static from(t,e,i,s,r,o){let a=t.message;!a&&B.isArray(t.errors)&&t.errors.length&&(a=bv(t));const l=new Cp(a,e||t.code,i,s,r);return Object.defineProperty(l,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),o&&Object.assign(l,o),l}constructor(t,e,i,s,r){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,e&&(this.code=e),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const t=this.config,e=t&&B.hasOwnProp(t,"redact")?t.redact:void 0,i=B.isArray(e)&&e.length>0?Sv(t,e):B.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};At.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";At.ERR_BAD_OPTION="ERR_BAD_OPTION";At.ECONNABORTED="ECONNABORTED";At.ETIMEDOUT="ETIMEDOUT";At.ECONNREFUSED="ECONNREFUSED";At.ERR_NETWORK="ERR_NETWORK";At.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";At.ERR_DEPRECATED="ERR_DEPRECATED";At.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";At.ERR_BAD_REQUEST="ERR_BAD_REQUEST";At.ERR_CANCELED="ERR_CANCELED";At.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";At.ERR_INVALID_URL="ERR_INVALID_URL";At.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Ev=null,Pp=100;function ac(n){return B.isPlainObject(n)||B.isArray(n)}function Lp(n){return B.endsWith(n,"[]")?n.slice(0,-2):n}function dl(n,t,e){return n?n.concat(t).map(function(s,r){return s=Lp(s),!e&&r?"["+s+"]":s}).join(e?".":""):t}function wv(n){return B.isArray(n)&&!n.some(ac)}const Tv=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function Va(n,t,e){if(!B.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,e=B.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,M){return!B.isUndefined(M[y])});const i=e.metaTokens,s=e.visitor||g,r=e.dots,o=e.indexes,a=e.Blob||typeof Blob<"u"&&Blob,l=e.maxDepth===void 0?Pp:e.maxDepth,u=a&&B.isSpecCompliantForm(t),c=[];if(!B.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(B.isDate(f))return f.toISOString();if(B.isBoolean(f))return f.toString();if(!u&&B.isBlob(f))throw new At("Blob is not supported. Use a Buffer instead.");if(B.isArrayBuffer(f)||B.isTypedArray(f)){if(u&&typeof a=="function")return new a([f]);throw new At("Blob is not supported. Use a Buffer instead.",At.ERR_NOT_SUPPORT)}return f}function d(f){if(f>l)throw new At("Object is too deeply nested ("+f+" levels). Max depth: "+l,At.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(f,y){if(l===1/0)return JSON.stringify(f);const M=[];return JSON.stringify(f,function(L,R){if(!B.isObject(R))return R;for(;M.length&&M[M.length-1]!==this;)M.pop();return M.push(R),d(y+M.length-1),R})}function g(f,y,M){let S=f;if(B.isReactNative(t)&&B.isReactNativeBlob(f))return t.append(dl(M,y,r),h(f)),!1;if(f&&!M&&typeof f=="object"){if(B.endsWith(y,"{}"))y=i?y:y.slice(0,-2),f=m(f,1);else if(B.isArray(f)&&wv(f)||(B.isFileList(f)||B.endsWith(y,"[]"))&&(S=B.toArray(f)))return y=Lp(y),S.forEach(function(R,C){!(B.isUndefined(R)||R===null)&&t.append(o===!0?dl([y],C,r):o===null?y:y+"[]",h(R))}),!1}return ac(f)?!0:(t.append(dl(M,y,r),h(f)),!1)}const _=Object.assign(Tv,{defaultVisitor:g,convertValue:h,isVisitable:ac});function p(f,y,M=0){if(!B.isUndefined(f)){if(d(M),c.indexOf(f)!==-1)throw new Error("Circular reference detected in "+y.join("."));c.push(f),B.forEach(f,function(L,R){(!(B.isUndefined(L)||L===null)&&s.call(t,L,B.isString(R)?R.trim():R,y,_))===!0&&p(L,y?y.concat(R):[R],M+1)}),c.pop()}}if(!B.isObject(n))throw new TypeError("data must be an object");return p(n),t}function Rh(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return t[i]})}function uu(n,t){this._pairs=[],n&&Va(n,this,t)}const Ip=uu.prototype;Ip.append=function(t,e){this._pairs.push([t,e])};Ip.toString=function(t){const e=t?i=>t.call(this,i,Rh):Rh;return this._pairs.map(function(s){return e(s[0])+"="+e(s[1])},"").join("&")};function Av(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Dp(n,t,e){if(!t)return n;n=n||"";const i=B.isFunction(e)?{serialize:e}:e,s=B.getSafeProp(i,"encode")||Av,r=B.getSafeProp(i,"serialize");let o;if(r?o=r(t,i):o=B.isURLSearchParams(t)?t.toString():new uu(t,i).toString(s),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class Ch{constructor(){this.handlers=[]}use(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(i){i!==null&&t(i)})}}const hu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Rv=typeof URLSearchParams<"u"?URLSearchParams:uu,Cv=typeof FormData<"u"?FormData:null,Pv=typeof Blob<"u"?Blob:null,Lv={isBrowser:!0,classes:{URLSearchParams:Rv,FormData:Cv,Blob:Pv},protocols:["http","https","file","blob","url","data"]},fu=typeof window<"u"&&typeof document<"u",lc=typeof navigator=="object"&&navigator||void 0,Iv=fu&&(!lc||["ReactNative","NativeScript","NS"].indexOf(lc.product)<0),Dv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Uv=fu&&window.location.href||"http://localhost",Nv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fu,hasStandardBrowserEnv:Iv,hasStandardBrowserWebWorkerEnv:Dv,navigator:lc,origin:Uv},Symbol.toStringTag,{value:"Module"})),Xe={...Nv,...Lv};function Ov(n,t){return Va(n,new Xe.classes.URLSearchParams,{visitor:function(e,i,s,r){return Xe.isNode&&B.isBuffer(e)?(this.append(i,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}const Ph=Pp;function Up(n){if(n>Ph)throw new At("FormData field is too deeply nested ("+n+" levels). Max depth: "+Ph,At.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Fv(n){const t=[],e=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=e.exec(n))!==null;)Up(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function Bv(n){const t={},e=Object.keys(n);let i;const s=e.length;let r;for(i=0;i<s;i++)r=e[i],t[r]=n[r];return t}function Np(n){function t(e,i,s,r){Up(r);let o=e[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=e.length;return o=!o&&B.isArray(s)?s.length:o,l?(B.hasOwnProp(s,o)?s[o]=B.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!B.hasOwnProp(s,o)||!B.isObject(s[o]))&&(s[o]=[]),t(e,i,s[o],r)&&B.isArray(s[o])&&(s[o]=Bv(s[o])),!a)}if(B.isFormData(n)&&B.isFunction(n.entries)){const e={};return B.forEachEntry(n,(i,s)=>{t(Fv(i),s,e,0)}),e}return null}const As=(n,t)=>n!=null&&B.hasOwnProp(n,t)?n[t]:void 0;function zv(n,t,e){if(B.isString(n))try{return(t||JSON.parse)(n),B.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(e||JSON.stringify)(n)}const po={transitional:hu,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const i=e.getContentType()||"",s=i.indexOf("application/json")>-1,r=B.isObject(t);if(r&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return s?JSON.stringify(Np(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t)||B.isReadableStream(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(r){const l=As(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Ov(t,l).toString();if((a=B.isFileList(t))||i.indexOf("multipart/form-data")>-1){const u=As(this,"env"),c=u&&u.FormData;return Va(a?{"files[]":t}:t,c&&new c,l)}}return r||s?(e.setContentType("application/json",!1),zv(t)):t}],transformResponse:[function(t){const e=As(this,"transitional")||po.transitional,i=e&&e.forcedJSONParsing,s=As(this,"responseType"),r=s==="json";if(B.isResponse(t)||B.isReadableStream(t))return t;if(t&&B.isString(t)&&(i&&!s||r)){const a=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t,As(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?At.from(l,At.ERR_BAD_RESPONSE,this,null,As(this,"response")):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch","query"],n=>{po.headers[n]={}});function pl(n,t){const e=this||po,i=t||e,s=en.from(i.headers);let r=i.data;return B.forEach(n,function(a){r=a.call(e,r,s.normalize(),t?t.status:void 0)}),s.normalize(),r}function Op(n){return!!(n&&n.__CANCEL__)}let mo=class extends At{constructor(t,e,i){super(t??"canceled",At.ERR_CANCELED,e,i),this.name="CanceledError",this.__CANCEL__=!0}};function Fp(n,t,e){const i=e.config.validateStatus;!e.status||!i||i(e.status)?n(e):t(new At("Request failed with status code "+e.status,e.status>=400&&e.status<500?At.ERR_BAD_REQUEST:At.ERR_BAD_RESPONSE,e.config,e.request,e))}function kv(n){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return t&&t[1]||""}function Hv(n,t){n=n||10;const e=new Array(n),i=new Array(n);let s=0,r=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=i[r];o||(o=u),e[s]=l,i[s]=u;let h=r,d=0;for(;h!==s;)d+=e[h++],h=h%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),u-o<t)return;const m=c&&u-c;return m?Math.round(d*1e3/m):void 0}}function Vv(n,t){let e=0,i=1e3/t,s,r;const o=(u,c=Date.now())=>{e=c,s=null,r&&(clearTimeout(r),r=null),n(...u)};return[(...u)=>{const c=Date.now(),h=c-e;h>=i?o(u,c):(s=u,r||(r=setTimeout(()=>{r=null,o(s)},i-h)))},()=>s&&o(s)]}const Sa=(n,t,e=3)=>{let i=0;const s=Hv(50,250);return Vv(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=Math.max(0,a!=null?Math.min(o,a):o),u=Math.max(0,l-i),c=s(u);i=Math.max(i,l);const h={loaded:l,total:a,progress:a?l/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a?(a-l)/c:void 0,event:r,lengthComputable:a!=null,[t?"download":"upload"]:!0};n(h)},e)},Lh=(n,t)=>{const e=n!=null;return[i=>t[0]({lengthComputable:e,total:n,loaded:i}),t[1]]},Ih=(n,t=B.asap)=>(...e)=>t(()=>n(...e)),Gv=Xe.hasStandardBrowserEnv?((n,t)=>e=>(e=new URL(e,Xe.origin),n.protocol===e.protocol&&n.host===e.host&&(t||n.port===e.port)))(new URL(Xe.origin),Xe.navigator&&/(msie|trident)/i.test(Xe.navigator.userAgent)):()=>!0,Wv=Xe.hasStandardBrowserEnv?{write(n,t,e,i,s,r,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(t)}`];B.isNumber(e)&&a.push(`expires=${new Date(e).toUTCString()}`),B.isString(i)&&a.push(`path=${i}`),B.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),B.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const i=t[e].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===n)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Xv(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function qv(n,t){if(!t)return n;let e=n.length;for(;e>0&&n.charCodeAt(e-1)===47;)e--;return n.slice(0,e)+"/"+t.replace(/^\/+/,"")}const jv=/^https?:(?!\/\/)/i,Yv=/[\t\n\r]/g;function $v(n){let t=0;for(;t<n.length&&n.charCodeAt(t)<=32;)t++;return n.slice(t)}function Kv(n){return $v(n).replace(Yv,"")}function Zv(n){return n&&n.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,e,i="")=>`${e}${i}${Ma}`)}function Jv(n){const t=n.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Ma}@`),e=t.indexOf("#"),s=(e===-1?t:t.slice(0,e)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Ma}`);return e===-1?s:`${s}#${Zv(t.slice(e+1))}`}function Dh(n,t){if(typeof n=="string"){const e=Kv(n);if(jv.test(e))throw new At(`Invalid URL ${JSON.stringify(Jv(e))}: missing "//" after protocol`,At.ERR_INVALID_URL,t)}}function Bp(n,t,e,i){Dh(t,i);let s=!Xv(t);return n&&(s||e===!1)?(Dh(n,i),qv(n,t)):t}const Uh=n=>n instanceof en?{...n}:n,Qv=n=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(n).concat(Object.getOwnPropertySymbols(n).filter(t=>Object.getOwnPropertyDescriptor(n,t).enumerable)):Object.keys(n);function _s(n,t){n=n||{},t=t||{};const e=Object.create(null);Object.defineProperty(e,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(c,h,d,m){return B.isPlainObject(c)&&B.isPlainObject(h)?B.merge.call({caseless:m},c,h):B.isPlainObject(h)?B.merge({},h):B.isArray(h)?h.slice():h}function s(c,h,d,m){if(B.isUndefined(h)){if(!B.isUndefined(c))return i(void 0,c,d,m)}else return i(c,h,d,m)}function r(c,h){if(!B.isUndefined(h))return i(void 0,h)}function o(c,h){if(B.isUndefined(h)){if(!B.isUndefined(c))return i(void 0,c)}else return i(void 0,h)}function a(c){const h=B.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!B.isUndefined(h))if(B.isPlainObject(h)){if(B.hasOwnProp(h,c))return h[c]}else return;const d=B.hasOwnProp(n,"transitional")?n.transitional:void 0;if(B.isPlainObject(d)&&B.hasOwnProp(d,c))return d[c]}function l(c,h,d){if(B.hasOwnProp(t,d))return i(c,h);if(B.hasOwnProp(n,d))return i(void 0,c)}const u={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(c,h,d)=>s(Uh(c),Uh(h),d,!0)};return B.forEach(Qv({...n,...t}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const d=B.hasOwnProp(u,h)?u[h]:s,m=B.hasOwnProp(n,h)?n[h]:void 0,g=B.hasOwnProp(t,h)?t[h]:void 0,_=d(m,g,h);B.isUndefined(_)&&d!==l||(e[h]=_)}),B.hasOwnProp(t,"validateStatus")&&B.isUndefined(t.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(B.hasOwnProp(n,"validateStatus")?e.validateStatus=i(void 0,n.validateStatus):delete e.validateStatus),e}const tx=["content-type","content-length"];function ex(n,t,e){if(e!=="content-only"){n.set(t);return}Object.entries(t||{}).forEach(([i,s])=>{tx.includes(i.toLowerCase())&&n.set(i,s)})}const nx=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16)));function zp(n){const t=_s({},n),e=d=>B.hasOwnProp(t,d)?t[d]:void 0,i=e("data");let s=e("withXSRFToken");const r=e("xsrfHeaderName"),o=e("xsrfCookieName");let a=e("headers");const l=e("auth"),u=e("baseURL"),c=e("allowAbsoluteUrls"),h=e("url");if(t.headers=a=en.from(a),t.url=Dp(Bp(u,h,c,t),e("params"),e("paramsSerializer")),l){const d=B.getSafeProp(l,"username")||"",m=B.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(d+":"+(m?nx(m):"")))}catch(g){throw At.from(g,At.ERR_BAD_OPTION_VALUE,n)}}if(B.isFormData(i)&&(Xe.hasStandardBrowserEnv||Xe.hasStandardBrowserWebWorkerEnv||B.isReactNative(i)?a.setContentType(void 0):B.isFunction(i.getHeaders)&&ex(a,i.getHeaders(),e("formDataHeaderPolicy"))),Xe.hasStandardBrowserEnv&&(B.isFunction(s)&&(s=s(t)),s===!0||s==null&&Gv(t.url))){const m=r&&o&&Wv.read(o);m&&a.set(r,m)}return t}const ix=typeof XMLHttpRequest<"u",sx=ix&&function(n){return new Promise(function(e,i){const s=zp(n);let r=s.data;const o=en.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=s,c,h,d,m,g;function _(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(c),s.signal&&s.signal.removeEventListener("abort",c)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function f(){if(!p)return;const M=en.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:M,config:n,request:p};Fp(function(C){e(C),_()},function(C){i(C),_()},L),p=null}"onloadend"in p?p.onloadend=f:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(f)},p.onabort=function(){p&&(i(new At("Request aborted",At.ECONNABORTED,n,p)),_(),p=null)},p.onerror=function(S){const L=S&&S.message?S.message:"Network Error",R=new At(L,At.ERR_NETWORK,n,p);R.event=S||null,i(R),_(),p=null},p.ontimeout=function(){let S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||hu;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),i(new At(S,L.clarifyTimeoutError?At.ETIMEDOUT:At.ECONNABORTED,n,p)),_(),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&B.forEach(Rp(o),function(S,L){p.setRequestHeader(L,S)}),B.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),u&&([d,g]=Sa(u,!0),p.addEventListener("progress",d)),l&&p.upload&&([h,m]=Sa(l),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(c=M=>{p&&(i(!M||M.type?new mo(null,n,p):M),p.abort(),_(),p=null)},s.cancelToken&&s.cancelToken.subscribe(c),s.signal&&(s.signal.aborted?c():s.signal.addEventListener("abort",c)));const y=kv(s.url);if(y&&!Xe.protocols.includes(y)){i(new At("Unsupported protocol "+y+":",At.ERR_BAD_REQUEST,n)),_();return}p.send(r||null)})},rx=(n,t)=>{if(n=n?n.filter(Boolean):[],!t&&!n.length)return;const e=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const u=l instanceof Error?l:this.reason;e.abort(u instanceof At?u:new mo(u instanceof Error?u.message:u))}};let r=t&&setTimeout(()=>{r=null,s(new At(`timeout of ${t}ms exceeded`,At.ETIMEDOUT))},t);const o=()=>{n&&(r&&clearTimeout(r),r=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),n=null)};n.forEach(l=>{if(!i){if(l.aborted){s.call(l);return}l.addEventListener("abort",s,{once:!0})}});const{signal:a}=e;return a.unsubscribe=()=>B.asap(o),a},ox=function*(n,t){let e=n.byteLength;if(e<t){yield n;return}let i=0,s;for(;i<e;)s=i+t,yield n.slice(i,s),i=s},ax=async function*(n,t){for await(const e of lx(n))yield*ox(e,t)},lx=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const t=n.getReader();try{for(;;){const{done:e,value:i}=await t.read();if(e)break;yield i}}finally{await t.cancel()}},Nh=(n,t,e,i)=>{const s=ax(n,t);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await s.next();if(u){a(),l.close();return}let h=c.byteLength;if(e){let d=r+=h;e(d)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Oh=n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102,kp=(n,t,e)=>t+2<e&&Oh(n.charCodeAt(t+1))&&Oh(n.charCodeAt(t+2)),Fh=n=>n<=57?n-48:(n&223)-55,cx=n=>n>=65&&n<=90||n>=97&&n<=122||n>=48&&n<=57||n===43||n===47||n===45||n===95,ux=n=>n===9||n===10||n===12||n===13||n===32,hx=n=>{const t=Math.floor(n/4),e=n%4;return t*3+(e===2?1:e===3?2:0)},fx=n=>{const t=n.length;let e=0;return t>0&&n.charCodeAt(t-1)===61&&(e++,t>1&&n.charCodeAt(t-2)===61&&e++),Math.floor((t-e)*3/4)},dx=n=>{const t=n.length;let e=0,i=0,s=!1;for(let r=0;r<t;r++){let o=n.charCodeAt(r);if(o===37&&kp(n,r,t)&&(o=Fh(n.charCodeAt(r+1))*16+Fh(n.charCodeAt(r+2)),r+=2),!ux(o)){if(o===61){i++;continue}if(!cx(o)||i>0){s=!0;continue}e++}}return s||i>2||i>0&&(e+i)%4!==0||e%4===1?fx(n):hx(e)},px=(n,t)=>{if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const e=n.indexOf(",");if(e<0)return 0;const i=n.slice(5,e),s=n.slice(e+1);if(/;base64/i.test(i))return t(s);let o=0;for(let a=0,l=s.length;a<l;a++){const u=s.charCodeAt(a);if(u===37&&kp(s,a,l))o+=1,a+=2;else if(u<128)o+=1;else if(u<2048)o+=2;else if(u>=55296&&u<=56319&&a+1<l){const c=s.charCodeAt(a+1);c>=56320&&c<=57343?(o+=4,a++):o+=3}else o+=3}return o};function mx(n){const t=typeof n=="string"?n.indexOf("#"):-1;return px(t===-1?n:n.slice(0,t),dx)}const du="1.19.0",Bh=64*1024,{isFunction:bo}=B,gx=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16))),zh=n=>{if(!B.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},kh=(n,...t)=>{try{return!!n(...t)}catch{return!1}},_x=n=>{const t=n.indexOf("://");let e=n;return t!==-1&&(e=e.slice(t+3)),e.includes("@")||e.includes(":")},vx=n=>{const t=B.global!==void 0&&B.global!==null?B.global:globalThis,{ReadableStream:e,TextEncoder:i}=t;n=B.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},n);const{fetch:s,Request:r,Response:o}=n,a=s?bo(s):typeof fetch=="function",l=bo(r),u=bo(o);if(!a)return!1;const c=a&&bo(e),h=a&&(typeof i=="function"?(f=>y=>f.encode(y))(new i):async f=>new Uint8Array(await new r(f).arrayBuffer())),d=l&&c&&kh(()=>{let f=!1;const y=new r(Xe.origin,{body:new e,method:"POST",get duplex(){return f=!0,"half"}}),M=y.headers.has("Content-Type");return y.body!=null&&y.body.cancel(),f&&!M}),m=u&&c&&kh(()=>B.isReadableStream(new o("").body)),g={stream:m&&(f=>f.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!g[f]&&(g[f]=(y,M)=>{let S=y&&y[f];if(S)return S.call(y);throw new At(`Response type '${f}' is not supported`,At.ERR_NOT_SUPPORT,M)})});const _=async f=>{if(f==null)return 0;if(B.isBlob(f))return f.size;if(B.isSpecCompliantForm(f))return(await new r(Xe.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(B.isArrayBufferView(f)||B.isArrayBuffer(f))return f.byteLength;if(B.isURLSearchParams(f)&&(f=f+""),B.isString(f))return(await h(f)).byteLength},p=async(f,y)=>{const M=B.toFiniteNumber(f.getContentLength());return M??_(y)};return async f=>{let{url:y,method:M,data:S,signal:L,cancelToken:R,timeout:C,onDownloadProgress:I,onUploadProgress:w,responseType:E,headers:P,withCredentials:U="same-origin",fetchOptions:k,maxContentLength:Z,maxBodyLength:ot}=zp(f);const Y=B.isNumber(Z)&&Z>-1,it=B.isNumber(ot)&&ot>-1,q=pt=>B.hasOwnProp(f,pt)?f[pt]:void 0;let yt=s||fetch;E=E?(E+"").toLowerCase():"text";let bt=rx([L,R&&R.toAbortSignal()],C),gt=null;const Ut=bt&&bt.unsubscribe&&(()=>{bt.unsubscribe()});let qt,lt=null;const vt=()=>new At("Request body larger than maxBodyLength limit",At.ERR_BAD_REQUEST,f,gt);try{let pt;const Mt=q("auth");if(Mt){const O=B.getSafeProp(Mt,"username")||"",Q=B.getSafeProp(Mt,"password")||"";pt={username:O,password:Q}}if(_x(y)){const O=new URL(y,Xe.origin);if(!pt&&(O.username||O.password)){const Q=zh(O.username),st=zh(O.password);pt={username:Q,password:st}}(O.username||O.password)&&(O.username="",O.password="",y=O.href)}if(pt&&(P.delete("authorization"),P.set("Authorization","Basic "+btoa(gx((pt.username||"")+":"+(pt.password||""))))),Y&&typeof y=="string"&&y.startsWith("data:")&&mx(y)>Z)throw new At("maxContentLength size of "+Z+" exceeded",At.ERR_BAD_RESPONSE,f,gt);if(it&&M!=="get"&&M!=="head"){const O=await _(S);if(typeof O=="number"&&isFinite(O)&&(qt=O,O>ot))throw vt()}const Nt=it&&(B.isReadableStream(S)||B.isStream(S)),Ht=(O,Q,st)=>Nh(O,Bh,rt=>{if(it&&rt>ot)throw lt=vt();Q&&Q(rt)},st);if(d&&M!=="get"&&M!=="head"&&(w||Nt)){if(qt=qt??await p(P,S),qt!==0||Nt){let O=new r(y,{method:"POST",body:S,duplex:"half"}),Q;if(B.isFormData(S)&&(Q=O.headers.get("content-type"))&&P.setContentType(Q),O.body){const[st,rt]=w&&Lh(qt,Sa(Ih(w)))||[];S=Ht(O.body,st,rt)}}}else if(Nt&&!l&&c&&M!=="get"&&M!=="head")S=Ht(S);else if(Nt&&l&&!d&&M!=="get"&&M!=="head")throw new At("Stream request bodies are not supported by the current fetch implementation",At.ERR_NOT_SUPPORT,f,gt);B.isString(U)||(U=U?"include":"omit");const zt=l&&"credentials"in r.prototype;if(B.isFormData(S)){const O=P.getContentType();O&&/^multipart\/form-data/i.test(O)&&!/boundary=/i.test(O)&&P.delete("content-type")}P.set("User-Agent","axios/"+du,!1);const oe={...k,signal:bt,method:M.toUpperCase(),headers:Rp(P.normalize()),body:S,duplex:"half",credentials:zt?U:void 0};gt=l&&new r(y,oe);let v=await(l?yt(gt,k):yt(y,oe));const N=en.from(v.headers);if(Y){const O=B.toFiniteNumber(N.getContentLength());if(O!=null&&O>Z)throw new At("maxContentLength size of "+Z+" exceeded",At.ERR_BAD_RESPONSE,f,gt)}const V=m&&(E==="stream"||E==="response");if(m&&v.body&&(I||Y||V&&Ut)){const O={};["status","statusText","headers"].forEach(F=>{O[F]=v[F]});const Q=B.toFiniteNumber(N.getContentLength()),[st,rt]=I&&Lh(Q,Sa(Ih(I),!0))||[];let T=0;const x=F=>{if(Y&&(T=F,T>Z))throw new At("maxContentLength size of "+Z+" exceeded",At.ERR_BAD_RESPONSE,f,gt);st&&st(F)};v=new o(Nh(v.body,Bh,x,()=>{rt&&rt(),Ut&&Ut()}),O)}E=E||"text";let nt=await g[B.findKey(g,E)||"text"](v,f);if(Y&&!m&&!V){let O;if(nt!=null&&(typeof nt.byteLength=="number"?O=nt.byteLength:typeof nt.size=="number"?O=nt.size:typeof nt=="string"&&(O=typeof i=="function"?new i().encode(nt).byteLength:nt.length)),typeof O=="number"&&O>Z)throw new At("maxContentLength size of "+Z+" exceeded",At.ERR_BAD_RESPONSE,f,gt)}return!V&&Ut&&Ut(),await new Promise((O,Q)=>{Fp(O,Q,{data:nt,headers:en.from(v.headers),status:v.status,statusText:v.statusText,config:f,request:gt})})}catch(pt){if(Ut&&Ut(),bt&&bt.aborted&&bt.reason instanceof At){const Mt=bt.reason;throw Mt.config=f,gt&&(Mt.request=gt),pt!==Mt&&Object.defineProperty(Mt,"cause",{__proto__:null,value:pt,writable:!0,enumerable:!1,configurable:!0}),Mt}if(lt)throw gt&&!lt.request&&(lt.request=gt),lt;if(pt instanceof At)throw gt&&!pt.request&&(pt.request=gt),pt;if(pt&&pt.name==="TypeError"&&/Load failed|fetch/i.test(pt.message)){const Mt=new At("Network Error",At.ERR_NETWORK,f,gt,pt&&pt.response);throw Object.defineProperty(Mt,"cause",{__proto__:null,value:pt.cause||pt,writable:!0,enumerable:!1,configurable:!0}),Mt}throw At.from(pt,pt&&pt.code,f,gt,pt&&pt.response)}}},xx=new Map,Hp=n=>{let t=n&&n.env||{};const{fetch:e,Request:i,Response:s}=t,r=[i,s,e];let o=r.length,a=o,l,u,c=xx;for(;a--;)l=r[a],u=c.get(l),u===void 0&&c.set(l,u=a?new Map:vx(t)),c=u;return u};Hp();const pu={http:Ev,xhr:sx,fetch:{get:Hp}};B.forEach(pu,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:t})}});const Hh=n=>`- ${n}`,yx=n=>B.isFunction(n)||n===null||n===!1;function Mx(n,t){n=B.isArray(n)?n:[n];const{length:e}=n;let i,s;const r={};for(let o=0;o<e;o++){i=n[o];let a;if(s=i,!yx(i)&&(s=pu[(a=String(i)).toLowerCase()],s===void 0))throw new At(`Unknown adapter '${a}'`);if(s&&(B.isFunction(s)||(s=s.get(t))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=e?o.length>1?`since :
`+o.map(Hh).join(`
`):" "+Hh(o[0]):"as no adapter specified";throw new At("There is no suitable adapter to dispatch the request "+a,At.ERR_NOT_SUPPORT)}return s}const Vp={getAdapter:Mx,adapters:pu};function ml(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new mo(null,n)}function gl(n){return ml(n),n.headers=en.from(n.headers),n.data=pl.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Vp.getAdapter(n.adapter||po.adapter,n)(n).then(function(i){ml(n),n.response=i;try{i.data=pl.call(n,n.transformResponse,i)}finally{delete n.response}return i.headers=en.from(i.headers),i},function(i){if(!Op(i)&&(ml(n),i&&i.response)){n.response=i.response;try{i.response.data=pl.call(n,n.transformResponse,i.response)}finally{delete n.response}i.response.headers=en.from(i.response.headers)}return Promise.reject(i)})}const Ga={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{Ga[n]=function(i){return typeof i===n||"a"+(t<1?"n ":" ")+n}});const Vh={};Ga.transitional=function(t,e,i){function s(r,o){return"[Axios v"+du+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(t===!1)throw new At(s(o," has been removed"+(e?" in "+e:"")),At.ERR_DEPRECATED);return e&&!Vh[o]&&(Vh[o]=!0,console.warn(s(o," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(r,o,a):!0}};Ga.spelling=function(t){return(e,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function Sx(n,t,e){if(typeof n!="object"||n===null)throw new At("options must be an object",At.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(t,r)?t[r]:void 0;if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new At("option "+r+" must be "+l,At.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new At("Unknown option "+r,At.ERR_BAD_OPTION)}}const ia={assertOptions:Sx,validators:Ga},Ye=ia.validators;let ps=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Ch,response:new Ch}}async request(t,e){try{return await this._request(t,e)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=_s(this.defaults,e);const{transitional:i,paramsSerializer:s,headers:r}=e;i!==void 0&&ia.assertOptions(i,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean),legacyInterceptorReqResOrdering:Ye.transitional(Ye.boolean),advertiseZstdAcceptEncoding:Ye.transitional(Ye.boolean),validateStatusUndefinedResolves:Ye.transitional(Ye.boolean)},!1),s!=null&&(B.isFunction(s)?e.paramsSerializer={serialize:s}:ia.assertOptions(s,{encode:Ye.function,serialize:Ye.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),ia.assertOptions(e,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let o=r&&B.merge(r.common,r[e.method]);r&&B.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),e.headers=en.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(e)===!1)return;l=l&&_.synchronous;const p=e.transitional||hu;p&&p.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const u=[];this.interceptors.response.forEach(function(_){u.push(_.fulfilled,_.rejected)});let c,h=0,d;if(!l){const g=[gl.bind(this),void 0];for(g.unshift(...a),g.push(...u),d=g.length,c=Promise.resolve(e);h<d;)c=c.then(g[h++],g[h++]);return c}d=a.length;let m=e;for(;h<d;){const g=a[h++],_=a[h++];try{m=g?g(m):m}catch(p){if(!_){c=Promise.reject(p);break}try{const f=_.call(this,p);B.isThenable(f)&&(c=Promise.resolve(f).then(()=>gl.call(this,m)))}catch(f){c=Promise.reject(f)}break}}if(!c)try{c=gl.call(this,m)}catch(g){c=Promise.reject(g)}for(h=0,d=u.length;h<d;)c=c.then(u[h++],u[h++]);return c}getUri(t){t=_s(this.defaults,t);const e=Bp(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Dp(e,t.params,t.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(t){ps.prototype[t]=function(e,i){return this.request(_s(i||{},{method:t,url:e,data:i&&B.hasOwnProp(i,"data")?i.data:void 0}))}});B.forEach(["post","put","patch","query"],function(t){function e(i){return function(r,o,a){return this.request(_s(a||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}ps.prototype[t]=e(),t!=="query"&&(ps.prototype[t+"Form"]=e(!0))});let bx=class Gp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(r){e=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},t(function(r,o,a){i.reason||(i.reason=new mo(r,o,a),e(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=i=>{t.abort(i)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new Gp(function(s){t=s}),cancel:t}}};function Ex(n){return function(e){return n.apply(null,e)}}function wx(n){return B.isObject(n)&&n.isAxiosError===!0}const cc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(cc).forEach(([n,t])=>{cc[t]=n});function Wp(n){const t=new ps(n),e=xp(ps.prototype.request,t);return B.extend(e,ps.prototype,t,{allOwnKeys:!0}),B.extend(e,t,null,{allOwnKeys:!0}),e.create=function(s){return Wp(_s(n,s))},e}const te=Wp(po);te.Axios=ps;te.CanceledError=mo;te.CancelToken=bx;te.isCancel=Op;te.VERSION=du;te.toFormData=Va;te.AxiosError=At;te.Cancel=te.CanceledError;te.all=function(t){return Promise.all(t)};te.spread=Ex;te.isAxiosError=wx;te.mergeConfig=_s;te.AxiosHeaders=en;te.formToJSON=n=>Np(B.isHTMLForm(n)?new FormData(n):n);te.getAdapter=Vp.getAdapter;te.HttpStatusCode=cc;te.default=te;const{Axios:tA,AxiosError:eA,CanceledError:nA,isCancel:iA,CancelToken:sA,VERSION:rA,all:oA,Cancel:aA,isAxiosError:lA,spread:cA,toFormData:uA,AxiosHeaders:hA,HttpStatusCode:fA,formToJSON:dA,getAdapter:pA,mergeConfig:mA,create:gA}=te;const mu="167",pi={ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tx=0,Gh=1,Ax=2,Xp=1,qp=2,hi=3,Hi=0,hn=1,De=2,Bi=0,ir=1,cr=2,Wh=3,Xh=4,Rx=5,os=100,Cx=101,Px=102,Lx=103,Ix=104,Dx=200,Ux=201,Nx=202,Ox=203,uc=204,hc=205,Fx=206,Bx=207,zx=208,kx=209,Hx=210,Vx=211,Gx=212,Wx=213,Xx=214,qx=0,jx=1,Yx=2,ba=3,$x=4,Kx=5,Zx=6,Jx=7,jp=0,Qx=1,ty=2,zi=0,ey=1,ny=2,iy=3,Yp=4,sy=5,ry=6,oy=7,$p=300,ur=301,hr=302,fc=303,dc=304,Wa=306,pc=1e3,cs=1001,mc=1002,pn=1003,ay=1004,Eo=1005,qe=1006,_l=1007,us=1008,Si=1009,Kp=1010,Zp=1011,io=1012,gu=1013,vs=1014,Jn=1015,go=1016,_u=1017,vu=1018,fr=1020,Jp=35902,Qp=1021,tm=1022,Bn=1023,em=1024,nm=1025,sr=1026,dr=1027,xu=1028,yu=1029,im=1030,Mu=1031,Su=1033,sa=33776,ra=33777,oa=33778,aa=33779,gc=35840,_c=35841,vc=35842,xc=35843,yc=36196,Mc=37492,Sc=37496,bc=37808,Ec=37809,wc=37810,Tc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Lc=37816,Ic=37817,Dc=37818,Uc=37819,Nc=37820,Oc=37821,la=36492,Fc=36494,Bc=36495,sm=36283,zc=36284,kc=36285,Hc=36286,ly=3200,cy=3201,rm=0,uy=1,Fi="",Ze="srgb",Wi="srgb-linear",bu="display-p3",Xa="display-p3-linear",Ea="linear",ve="srgb",wa="rec709",Ta="p3",Rs=7680,qh=519,hy=512,fy=513,dy=514,om=515,py=516,my=517,gy=518,_y=519,Vc=35044,am=35048,jh="300 es",_i=2e3,Aa=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yh=1234567;const qr=Math.PI/180,pr=180/Math.PI;function vi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function Eu(n,t){return(n%t+t)%t}function vy(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xy(n,t,e){return n!==t?(e-n)/(t-n):0}function jr(n,t,e){return(1-e)*n+e*t}function yy(n,t,e,i){return jr(n,t,1-Math.exp(-e*i))}function My(n,t=1){return t-Math.abs(Eu(n,t*2)-t)}function Sy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function by(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ey(n,t){return n+Math.floor(Math.random()*(t-n+1))}function wy(n,t){return n+Math.random()*(t-n)}function Ty(n){return n*(.5-Math.random())}function Ay(n){n!==void 0&&(Yh=n);let t=Yh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ry(n){return n*qr}function Cy(n){return n*pr}function Py(n){return(n&n-1)===0&&n!==0}function Ly(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Iy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dy(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),u=r((t+i)/2),c=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*c,l*h,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*m,a*u);break;case"YXY":n.set(l*m,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const xe={DEG2RAD:qr,RAD2DEG:pr,generateUUID:vi,clamp:We,euclideanModulo:Eu,mapLinear:vy,inverseLerp:xy,lerp:jr,damp:yy,pingpong:My,smoothstep:Sy,smootherstep:by,randInt:Ey,randFloat:wy,randFloatSpread:Ty,seededRandom:Ay,degToRad:Ry,radToDeg:Cy,isPowerOfTwo:Py,ceilPowerOfTwo:Ly,floorPowerOfTwo:Iy,setQuaternionFromProperEuler:Dy,normalize:me,denormalize:On};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,i,s,r,o,a,l,u){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u)}set(t,e,i,s,r,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],m=i[5],g=i[8],_=s[0],p=s[3],f=s[6],y=s[1],M=s[4],S=s[7],L=s[2],R=s[5],C=s[8];return r[0]=o*_+a*y+l*L,r[3]=o*p+a*M+l*R,r[6]=o*f+a*S+l*C,r[1]=u*_+c*y+h*L,r[4]=u*p+c*M+h*R,r[7]=u*f+c*S+h*C,r[2]=d*_+m*y+g*L,r[5]=d*p+m*M+g*R,r[8]=d*f+m*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=c*o-a*u,d=a*l-c*r,m=u*r-o*l,g=e*h+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*u-c*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-u*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vl.makeScale(t,e)),this}rotate(t){return this.premultiply(vl.makeRotation(-t)),this}translate(t,e){return this.premultiply(vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vl=new Jt;function lm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uy(){const n=so("canvas");return n.style.display="block",n}const $h={};function rr(n){n in $h||($h[n]=!0,console.warn(n))}function Ny(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Kh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Wi]:{transfer:Ea,primaries:wa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ze]:{transfer:ve,primaries:wa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xa]:{transfer:Ea,primaries:Ta,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Zh),fromReference:n=>n.applyMatrix3(Kh)},[bu]:{transfer:ve,primaries:Ta,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zh),fromReference:n=>n.applyMatrix3(Kh).convertLinearToSRGB()}},Oy=new Set([Wi,Xa]),de={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Oy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=wr[t].toReference,s=wr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return wr[n].primaries},getTransfer:function(n){return n===Fi?Ea:wr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(wr[t].luminanceCoefficients)}};function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cs;class Fy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=so("canvas")),Cs.width=t.width,Cs.height=t.height;const i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=so("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=or(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(or(e[i]/255)*255):e[i]=or(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let By=0;class cm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yl(s[o].image)):r.push(yl(s[o]))}else r=yl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zy=0;class je extends Ms{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=cs,s=cs,r=qe,o=us,a=Bn,l=Si,u=je.DEFAULT_ANISOTROPY,c=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=vi(),this.name="",this.source=new cm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$p)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pc:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pc:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=$p;je.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,S=(m+1)/2,L=(f+1)/2,R=(c+d)/4,C=(h+_)/4,I=(g+p)/4;return M>S&&M>L?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=C/i):S>L?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=C/r,s=I/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(d-c)/y,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ky extends Ms{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends ky{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class um extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hy extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],h=i[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||u!==m||c!==g){let p=1-a;const f=l*d+u*m+c*g+h*_,y=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const L=Math.sqrt(M),R=Math.atan2(L,f*y);p=Math.sin(p*R)/L,a=Math.sin(a*R)/L}const S=a*y;if(l=l*p+d*S,u=u*p+m*S,c=c*p+g*S,h=h*p+_*S,p===1-a){const L=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=L,u*=L,c*=L,h*=L}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+c*h+l*m-u*d,t[e+1]=l*g+c*d+u*h-a*m,t[e+2]=u*g+c*m+a*d-l*h,t[e+3]=c*g-a*h-l*d-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*h+u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h-d*m*g;break;case"YXZ":this._x=d*c*h+u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h+d*m*g;break;case"ZXY":this._x=d*c*h-u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h-d*m*g;break;case"ZYX":this._x=d*c*h-u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h+d*m*g;break;case"YZX":this._x=d*c*h+u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h-d*m*g;break;case"XZY":this._x=d*c*h-u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],h=e[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-u)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-u)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*i),c=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*u+o*h-a*c,this.y=i+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new D,Jh=new Vi;class Ss{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),To.subVectors(this.max,Tr),Ps.subVectors(t.a,Tr),Ls.subVectors(t.b,Tr),Is.subVectors(t.c,Tr),Ai.subVectors(Ls,Ps),Ri.subVectors(Is,Ls),Ki.subVectors(Ps,Is);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Ki.y,Ki.x,0];return!Sl(e,Ps,Ls,Is,To)||(e=[1,0,0,0,1,0,0,0,1],!Sl(e,Ps,Ls,Is,To))?!1:(Ao.crossVectors(Ai,Ri),e=[Ao.x,Ao.y,Ao.z],Sl(e,Ps,Ls,Is,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,wo=new Ss,Ps=new D,Ls=new D,Is=new D,Ai=new D,Ri=new D,Ki=new D,Tr=new D,To=new D,Ao=new D,Zi=new D;function Sl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=t.dot(Zi),u=e.dot(Zi),c=i.dot(Zi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Vy=new Ss,Ar=new D,bl=new D;class _o{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Vy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(bl)),this.expandByPoint(Ar.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new D,El=new D,Ro=new D,Ci=new D,wl=new D,Co=new D,Tl=new D;class wu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){El.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(El);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=Ci.dot(this.direction),l=-Ci.dot(Ro),u=Ci.lengthSq(),c=Math.abs(1-o*o);let h,d,m,g;if(c>0)if(h=o*l-a,d=o*a-l,g=r*c,h>=0)if(d>=-g)if(d<=g){const _=1/c;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(El).addScaledVector(Ro,d),m}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(i=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,i,s,r){wl.subVectors(e,t),Co.subVectors(i,t),Tl.crossVectors(wl,Co);let o=this.direction.dot(Tl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(Co.crossVectors(Ci,Co));if(l<0)return null;const u=a*this.direction.dot(wl.cross(Ci));if(u<0||l+u>o)return null;const c=-a*Ci.dot(Tl);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,r,o,a,l,u,c,h,d,m,g,_,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u,c,h,d,m,g,_,p)}set(t,e,i,s,r,o,a,l,u,c,h,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),o=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*c,m=o*h,g=a*c,_=a*h;e[0]=l*c,e[4]=-l*h,e[8]=u,e[1]=m+g*u,e[5]=d-_*u,e[9]=-a*l,e[2]=_-d*u,e[6]=g+m*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,m=l*h,g=u*c,_=u*h;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*u,e[1]=o*h,e[5]=o*c,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,m=l*h,g=u*c,_=u*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*c,e[9]=_-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,m=o*h,g=a*c,_=a*h;e[0]=l*c,e[4]=g*u-m,e[8]=d*u+_,e[1]=l*h,e[5]=_*u+d,e[9]=m*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,m=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=-h,e[8]=u*c,e[1]=d*h+_,e[5]=o*c,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*c,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gy,t,Wy)}lookAt(t,e,i){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Pi.crossVectors(i,xn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Pi.crossVectors(i,xn)),Pi.normalize(),Po.crossVectors(xn,Pi),s[0]=Pi.x,s[4]=Po.x,s[8]=xn.x,s[1]=Pi.y,s[5]=Po.y,s[9]=xn.y,s[2]=Pi.z,s[6]=Po.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],y=i[3],M=i[7],S=i[11],L=i[15],R=s[0],C=s[4],I=s[8],w=s[12],E=s[1],P=s[5],U=s[9],k=s[13],Z=s[2],ot=s[6],Y=s[10],it=s[14],q=s[3],yt=s[7],bt=s[11],gt=s[15];return r[0]=o*R+a*E+l*Z+u*q,r[4]=o*C+a*P+l*ot+u*yt,r[8]=o*I+a*U+l*Y+u*bt,r[12]=o*w+a*k+l*it+u*gt,r[1]=c*R+h*E+d*Z+m*q,r[5]=c*C+h*P+d*ot+m*yt,r[9]=c*I+h*U+d*Y+m*bt,r[13]=c*w+h*k+d*it+m*gt,r[2]=g*R+_*E+p*Z+f*q,r[6]=g*C+_*P+p*ot+f*yt,r[10]=g*I+_*U+p*Y+f*bt,r[14]=g*w+_*k+p*it+f*gt,r[3]=y*R+M*E+S*Z+L*q,r[7]=y*C+M*P+S*ot+L*yt,r[11]=y*I+M*U+S*Y+L*bt,r[15]=y*w+M*k+S*it+L*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*h-s*u*h-r*a*d+i*u*d+s*a*m-i*l*m)+_*(+e*l*m-e*u*d+r*o*d-s*o*m+s*u*c-r*l*c)+p*(+e*u*h-e*a*m-r*o*h+i*o*m+r*a*c-i*u*c)+f*(-s*a*c-e*l*h+e*a*d+s*o*h-i*o*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],y=h*p*u-_*d*u+_*l*m-a*p*m-h*l*f+a*d*f,M=g*d*u-c*p*u-g*l*m+o*p*m+c*l*f-o*d*f,S=c*_*u-g*h*u+g*a*m-o*_*m-c*a*f+o*h*f,L=g*h*l-c*_*l-g*a*d+o*_*d+c*a*p-o*h*p,R=e*y+i*M+s*S+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=y*C,t[1]=(_*d*r-h*p*r-_*s*m+i*p*m+h*s*f-i*d*f)*C,t[2]=(a*p*r-_*l*r+_*s*u-i*p*u-a*s*f+i*l*f)*C,t[3]=(h*l*r-a*d*r-h*s*u+i*d*u+a*s*m-i*l*m)*C,t[4]=M*C,t[5]=(c*p*r-g*d*r+g*s*m-e*p*m-c*s*f+e*d*f)*C,t[6]=(g*l*r-o*p*r-g*s*u+e*p*u+o*s*f-e*l*f)*C,t[7]=(o*d*r-c*l*r+c*s*u-e*d*u-o*s*m+e*l*m)*C,t[8]=S*C,t[9]=(g*h*r-c*_*r-g*i*m+e*_*m+c*i*f-e*h*f)*C,t[10]=(o*_*r-g*a*r+g*i*u-e*_*u-o*i*f+e*a*f)*C,t[11]=(c*a*r-o*h*r-c*i*u+e*h*u+o*i*m-e*a*m)*C,t[12]=L*C,t[13]=(c*_*s-g*h*s+g*i*d-e*_*d-c*i*p+e*h*p)*C,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*C,t[15]=(o*h*s-c*a*s+c*i*l-e*h*l-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,c=o+o,h=a+a,d=r*u,m=r*c,g=r*h,_=o*c,p=o*h,f=a*h,y=l*u,M=l*c,S=l*h,L=i.x,R=i.y,C=i.z;return s[0]=(1-(_+f))*L,s[1]=(m+S)*L,s[2]=(g-M)*L,s[3]=0,s[4]=(m-S)*R,s[5]=(1-(d+f))*R,s[6]=(p+y)*R,s[7]=0,s[8]=(g+M)*C,s[9]=(p-y)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const u=1/r,c=1/o,h=1/a;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=c,Un.elements[5]*=c,Un.elements[6]*=c,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,e.setFromRotationMatrix(Un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=_i){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let m,g;if(a===_i)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Aa)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=_i){const l=this.elements,u=1/(e-t),c=1/(i-s),h=1/(o-r),d=(e+t)*u,m=(i+s)*c;let g,_;if(a===_i)g=(o+r)*h,_=-2*h;else if(a===Aa)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ds=new D,Un=new le,Gy=new D(0,0,0),Wy=new D(1,1,1),Pi=new D,Po=new D,xn=new D,Qh=new le,tf=new Vi;class Vn{constructor(t=0,e=0,i=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tf.setFromEuler(this),this.setFromQuaternion(tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xy=0;const ef=new D,Us=new Vi,ai=new le,Lo=new D,Rr=new D,qy=new D,jy=new Vi,nf=new D(1,0,0),sf=new D(0,1,0),rf=new D(0,0,1),of={type:"added"},Yy={type:"removed"},Ns={type:"childadded",child:null},Al={type:"childremoved",child:null};class Ce extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new D,e=new Vn,i=new Vi,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Jt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(nf,t)}rotateY(t){return this.rotateOnAxis(sf,t)}rotateZ(t){return this.rotateOnAxis(rf,t)}translateOnAxis(t,e){return ef.copy(t).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nf,t)}translateY(t){return this.translateOnAxis(sf,t)}translateZ(t){return this.translateOnAxis(rf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lo.copy(t):Lo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Rr,Lo,this.up):ai.lookAt(Lo,Rr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(ai),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(of),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yy),Al.child=t,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(of),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,qy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,jy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new D(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new D,li=new D,Rl=new D,ci=new D,Os=new D,Fs=new D,af=new D,Cl=new D,Pl=new D,Ll=new D;class Fn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),li.subVectors(i,e),Rl.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(li),l=Nn.dot(Rl),u=li.dot(li),c=li.dot(Rl),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(u*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),li.subVectors(t,e),Nn.cross(li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Fn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,i),Fs.subVectors(r,i),Cl.subVectors(t,i);const l=Os.dot(Cl),u=Fs.dot(Cl);if(l<=0&&u<=0)return e.copy(i);Pl.subVectors(t,s);const c=Os.dot(Pl),h=Fs.dot(Pl);if(c>=0&&h<=c)return e.copy(s);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(Os,o);Ll.subVectors(t,r);const m=Os.dot(Ll),g=Fs.dot(Ll);if(g>=0&&m<=g)return e.copy(r);const _=m*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(i).addScaledVector(Fs,a);const p=c*g-m*h;if(p<=0&&h-c>=0&&m-g>=0)return af.subVectors(r,s),a=(h-c)/(h-c+(m-g)),e.copy(s).addScaledVector(af,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Il(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=de.workingColorSpace){if(t=Eu(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Il(o,r,t+1/3),this.g=Il(o,r,t),this.b=Il(o,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=hm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=xl(t.r),this.g=xl(t.g),this.b=xl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return de.fromWorkingColorSpace(Ke.copy(this),t),Math.round(We(Ke.r*255,0,255))*65536+Math.round(We(Ke.g*255,0,255))*256+Math.round(We(Ke.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Ke.copy(this),e);const i=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ze){de.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,s=Ke.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Io);const i=jr(Li.h,Io.h,e),s=jr(Li.s,Io.s,e),r=jr(Li.l,Io.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new ee;ee.NAMES=hm;let $y=0;class vr extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ir,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=hc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uc&&(i.blendSrc=this.blendSrc),this.blendDst!==hc&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Se extends vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new D,Do=new It;class Rn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return rr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vc&&(t.usage=this.usage),t}}class fm extends Rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class dm extends Rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends Rn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ky=0;const En=new le,Dl=new Ce,Bs=new D,yn=new Ss,Cr=new Ss,ze=new D;class gn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lm(t)?dm:fm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return Dl.lookAt(t),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(yn.min,Cr.min),yn.expandByPoint(ze),ze.addVectors(yn.max,Cr.max),yn.expandByPoint(ze)):(yn.expandByPoint(Cr.min),yn.expandByPoint(Cr.max))}yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ze.fromBufferAttribute(a,u),l&&(Bs.fromBufferAttribute(t,u),ze.add(Bs)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new D,l[I]=new D;const u=new D,c=new D,h=new D,d=new It,m=new It,g=new It,_=new D,p=new D;function f(I,w,E){u.fromBufferAttribute(i,I),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,E),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,E),c.sub(u),h.sub(u),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(P),a[I].add(_),a[w].add(_),a[E].add(_),l[I].add(p),l[w].add(p),l[E].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,w=y.length;I<w;++I){const E=y[I],P=E.start,U=E.count;for(let k=P,Z=P+U;k<Z;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new D,S=new D,L=new D,R=new D;function C(I){L.fromBufferAttribute(s,I),R.copy(L);const w=a[I];M.copy(w),M.sub(L.multiplyScalar(L.dot(w))).normalize(),S.crossVectors(R,w);const P=S.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,w=y.length;I<w;++I){const E=y[I],P=E.start,U=E.count;for(let k=P,Z=P+U;k<Z;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,u=new D,c=new D,h=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*c;for(let f=0;f<c;f++)d[g++]=u[m++]}return new Rn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,i);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],h=r[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new le,Ji=new wu,Uo=new _o,cf=new D,zs=new D,ks=new D,Hs=new D,Ul=new D,No=new D,Oo=new It,Fo=new It,Bo=new It,uf=new D,hf=new D,ff=new D,zo=new D,ko=new D;class ct extends Ce{constructor(t=new gn,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(Ul.fromBufferAttribute(h,t),o?No.addScaledVector(Ul,c):No.addScaledVector(Ul.sub(e),c))}e.add(No)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(Uo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Uo,cf)===null||Ji.origin.distanceToSquared(cf)>(t.far-t.near)**2))&&(lf.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(lf),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,L=M;S<L;S+=3){const R=a.getX(S),C=a.getX(S+1),I=a.getX(S+2);s=Ho(this,f,t,i,u,c,h,R,C,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);s=Ho(this,o,t,i,u,c,h,y,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,L=M;S<L;S+=3){const R=S,C=S+1,I=S+2;s=Ho(this,f,t,i,u,c,h,R,C,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,M=p+1,S=p+2;s=Ho(this,o,t,i,u,c,h,y,M,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Zy(n,t,e,i,s,r,o,a){let l;if(t.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Hi,a),l===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(ko);return u<e.near||u>e.far?null:{distance:u,point:ko.clone(),object:n}}function Ho(n,t,e,i,s,r,o,a,l,u){n.getVertexPosition(a,zs),n.getVertexPosition(l,ks),n.getVertexPosition(u,Hs);const c=Zy(n,t,e,i,zs,ks,Hs,zo);if(c){s&&(Oo.fromBufferAttribute(s,a),Fo.fromBufferAttribute(s,l),Bo.fromBufferAttribute(s,u),c.uv=Fn.getInterpolation(zo,zs,ks,Hs,Oo,Fo,Bo,new It)),r&&(Oo.fromBufferAttribute(r,a),Fo.fromBufferAttribute(r,l),Bo.fromBufferAttribute(r,u),c.uv1=Fn.getInterpolation(zo,zs,ks,Hs,Oo,Fo,Bo,new It)),o&&(uf.fromBufferAttribute(o,a),hf.fromBufferAttribute(o,l),ff.fromBufferAttribute(o,u),c.normal=Fn.getInterpolation(zo,zs,ks,Hs,uf,hf,ff,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new D,materialIndex:0};Fn.getNormal(zs,ks,Hs,h.normal),c.face=h}return c}class se extends gn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2));function g(_,p,f,y,M,S,L,R,C,I,w){const E=S/C,P=L/I,U=S/2,k=L/2,Z=R/2,ot=C+1,Y=I+1;let it=0,q=0;const yt=new D;for(let bt=0;bt<Y;bt++){const gt=bt*P-k;for(let Ut=0;Ut<ot;Ut++){const qt=Ut*E-U;yt[_]=qt*y,yt[p]=gt*M,yt[f]=Z,u.push(yt.x,yt.y,yt.z),yt[_]=0,yt[p]=0,yt[f]=R>0?1:-1,c.push(yt.x,yt.y,yt.z),h.push(Ut/C),h.push(1-bt/I),it+=1}}for(let bt=0;bt<I;bt++)for(let gt=0;gt<C;gt++){const Ut=d+gt+ot*bt,qt=d+gt+ot*(bt+1),lt=d+(gt+1)+ot*(bt+1),vt=d+(gt+1)+ot*bt;l.push(Ut,qt,vt),l.push(qt,lt,vt),q+=6}a.addGroup(m,q,w),m+=q,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function on(n){const t={};for(let e=0;e<n.length;e++){const i=mr(n[e]);for(const s in i)t[s]=i[s]}return t}function Jy(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function pm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Qy={clone:mr,merge:on};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=eM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Jy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}let mm=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ii=new D,df=new It,pf=new It;class dn extends mm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,df,pf),e.subVectors(pf,df)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vs=-90,Gs=1;class gm extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Vs,Gs,t,e);s.layers=this.layers,this.add(s);const r=new dn(Vs,Gs,t,e);r.layers=this.layers,this.add(r);const o=new dn(Vs,Gs,t,e);o.layers=this.layers,this.add(o);const a=new dn(Vs,Gs,t,e);a.layers=this.layers,this.add(a);const l=new dn(Vs,Gs,t,e);l.layers=this.layers,this.add(l);const u=new dn(Vs,Gs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(h,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _m extends je{constructor(t,e,i,s,r,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vm extends xs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _m(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Bi});r.uniforms.tEquirect.value=e;const o=new ct(s,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=qe),new gm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Nl=new D,nM=new D,iM=new Jt;class Ni{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Nl.subVectors(i,e).cross(nM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||iM.getNormalMatrix(t),s=this.coplanarPoint(Nl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new _o,Vo=new D;class Au{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],y=s[13],M=s[14],S=s[15];if(i[0].setComponents(l-r,d-u,p-m,S-f).normalize(),i[1].setComponents(l+r,d+u,p+m,S+f).normalize(),i[2].setComponents(l+o,d+c,p+g,S+y).normalize(),i[3].setComponents(l-o,d-c,p-g,S-y).normalize(),i[4].setComponents(l-a,d-h,p-_,S-M).normalize(),e===_i)i[5].setComponents(l+a,d+h,p+_,S+M).normalize();else if(e===Aa)i[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Vo.x=s.normal.x>0?t.max.x:t.min.x,Vo.y=s.normal.y>0?t.max.y:t.min.y,Vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function sM(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(u,a),h.count===-1&&d.length===0&&n.bufferSubData(u,0,c),d.length!==0){for(let m=0,g=d.length;m<g;m++){const _=d[m];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(u,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}class Re extends gn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,h=t/a,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<c;f++){const y=f*d-o;for(let M=0;M<u;M++){const S=M*h-r;g.push(S,-y,0),_.push(0,0,1),p.push(M/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const M=y+u*f,S=y+u*(f+1),L=y+1+u*(f+1),R=y+1+u*f;m.push(M,S,R),m.push(S,L,R)}this.setIndex(m),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.widthSegments,t.heightSegments)}}var rM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oM=`#ifdef USE_ALPHAHASH
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
#endif`,aM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
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
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dM=`#ifdef USE_BATCHING
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
#endif`,pM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vM=`#ifdef USE_IRIDESCENCE
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
#endif`,xM=`#ifdef USE_BUMPMAP
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
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RM=`#define PI 3.141592653589793
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
} // validated`,CM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PM=`vec3 transformedNormal = objectNormal;
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
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`
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
}`,FM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KM=`uniform bool receiveShadow;
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
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,JM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nS=`PhysicalMaterial material;
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
#endif`,iS=`struct PhysicalMaterial {
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
}`,sS=`
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
#endif`,rS=`#if defined( RE_IndirectDiffuse )
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
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pS=`#if defined( USE_POINTS_UV )
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
#endif`,mS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`#ifdef USE_MORPHTARGETS
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
#endif`,MS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
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
#endif`,RS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,US=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GS=`float getShadowMask() {
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
}`,WS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XS=`#ifdef USE_SKINNING
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
#endif`,qS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,YS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JS=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rb=`uniform sampler2D t2D;
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
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
}`,hb=`#if DEPTH_PACKING == 3200
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
}`,fb=`#define DISTANCE
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
}`,db=`#define DISTANCE
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`uniform float scale;
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
}`,_b=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
}`,xb=`uniform vec3 diffuse;
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
}`,yb=`#define LAMBERT
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
}`,Mb=`#define LAMBERT
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
}`,Sb=`#define MATCAP
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
}`,bb=`#define MATCAP
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
}`,Eb=`#define NORMAL
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
}`,wb=`#define NORMAL
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
}`,Tb=`#define PHONG
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
}`,Ab=`#define PHONG
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
}`,Rb=`#define STANDARD
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
}`,Cb=`#define STANDARD
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
}`,Pb=`#define TOON
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
}`,Lb=`#define TOON
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
}`,Ib=`uniform float size;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
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
}`,Nb=`uniform vec3 color;
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
}`,Ob=`uniform float rotation;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:rM,alphahash_pars_fragment:oM,alphamap_fragment:aM,alphamap_pars_fragment:lM,alphatest_fragment:cM,alphatest_pars_fragment:uM,aomap_fragment:hM,aomap_pars_fragment:fM,batching_pars_vertex:dM,batching_vertex:pM,begin_vertex:mM,beginnormal_vertex:gM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:xM,clipping_planes_fragment:yM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:bM,color_fragment:EM,color_pars_fragment:wM,color_pars_vertex:TM,color_vertex:AM,common:RM,cube_uv_reflection_fragment:CM,defaultnormal_vertex:PM,displacementmap_pars_vertex:LM,displacementmap_vertex:IM,emissivemap_fragment:DM,emissivemap_pars_fragment:UM,colorspace_fragment:NM,colorspace_pars_fragment:OM,envmap_fragment:FM,envmap_common_pars_fragment:BM,envmap_pars_fragment:zM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:ZM,envmap_vertex:HM,fog_vertex:VM,fog_pars_vertex:GM,fog_fragment:WM,fog_pars_fragment:XM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:jM,lights_lambert_fragment:YM,lights_lambert_pars_fragment:$M,lights_pars_begin:KM,lights_toon_fragment:JM,lights_toon_pars_fragment:QM,lights_phong_fragment:tS,lights_phong_pars_fragment:eS,lights_physical_fragment:nS,lights_physical_pars_fragment:iS,lights_fragment_begin:sS,lights_fragment_maps:rS,lights_fragment_end:oS,logdepthbuf_fragment:aS,logdepthbuf_pars_fragment:lS,logdepthbuf_pars_vertex:cS,logdepthbuf_vertex:uS,map_fragment:hS,map_pars_fragment:fS,map_particle_fragment:dS,map_particle_pars_fragment:pS,metalnessmap_fragment:mS,metalnessmap_pars_fragment:gS,morphinstance_vertex:_S,morphcolor_vertex:vS,morphnormal_vertex:xS,morphtarget_pars_vertex:yS,morphtarget_vertex:MS,normal_fragment_begin:SS,normal_fragment_maps:bS,normal_pars_fragment:ES,normal_pars_vertex:wS,normal_vertex:TS,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:RS,clearcoat_normal_fragment_maps:CS,clearcoat_pars_fragment:PS,iridescence_pars_fragment:LS,opaque_fragment:IS,packing:DS,premultiplied_alpha_fragment:US,project_vertex:NS,dithering_fragment:OS,dithering_pars_fragment:FS,roughnessmap_fragment:BS,roughnessmap_pars_fragment:zS,shadowmap_pars_fragment:kS,shadowmap_pars_vertex:HS,shadowmap_vertex:VS,shadowmask_pars_fragment:GS,skinbase_vertex:WS,skinning_pars_vertex:XS,skinning_vertex:qS,skinnormal_vertex:jS,specularmap_fragment:YS,specularmap_pars_fragment:$S,tonemapping_fragment:KS,tonemapping_pars_fragment:ZS,transmission_fragment:JS,transmission_pars_fragment:QS,uv_pars_fragment:tb,uv_pars_vertex:eb,uv_vertex:nb,worldpos_vertex:ib,background_vert:sb,background_frag:rb,backgroundCube_vert:ob,backgroundCube_frag:ab,cube_vert:lb,cube_frag:cb,depth_vert:ub,depth_frag:hb,distanceRGBA_vert:fb,distanceRGBA_frag:db,equirect_vert:pb,equirect_frag:mb,linedashed_vert:gb,linedashed_frag:_b,meshbasic_vert:vb,meshbasic_frag:xb,meshlambert_vert:yb,meshlambert_frag:Mb,meshmatcap_vert:Sb,meshmatcap_frag:bb,meshnormal_vert:Eb,meshnormal_frag:wb,meshphong_vert:Tb,meshphong_frag:Ab,meshphysical_vert:Rb,meshphysical_frag:Cb,meshtoon_vert:Pb,meshtoon_frag:Lb,points_vert:Ib,points_frag:Db,shadow_vert:Ub,shadow_frag:Nb,sprite_vert:Ob,sprite_frag:Fb},Tt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},$n={basic:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:on([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:on([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:on([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:on([Tt.points,Tt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:on([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:on([Tt.common,Tt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:on([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:on([Tt.sprite,Tt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:on([Tt.common,Tt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:on([Tt.lights,Tt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};$n.physical={uniforms:on([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Go={r:0,b:0,g:0},ts=new Vn,Bb=new le;function zb(n,t,e,i,s,r,o){const a=new ee(0);let l=r===!0?0:1,u,c,h=null,d=0,m=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const S=g(y);S===null?f(a,l):S&&S.isColor&&(f(S,1),M=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===Wa)?(c===void 0&&(c=new ct(new se(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:mr($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),ts.copy(M.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(ts)),c.material.toneMapped=de.getTransfer(S.colorSpace)!==ve,(h!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new ct(new Re(2,2),new Gi({name:"BackgroundMaterial",uniforms:mr($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=de.getTransfer(S.colorSpace)!==ve,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function f(y,M){y.getRGB(Go,pm(n)),i.buffers.color.setClear(Go.r,Go.g,Go.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:p}}function kb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,P,U,k,Z){let ot=!1;const Y=h(k,U,P);r!==Y&&(r=Y,u(r.object)),ot=m(E,k,U,Z),ot&&g(E,k,U,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,S(E,P,U,k),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function u(E){return n.bindVertexArray(E)}function c(E){return n.deleteVertexArray(E)}function h(E,P,U){const k=U.wireframe===!0;let Z=i[E.id];Z===void 0&&(Z={},i[E.id]=Z);let ot=Z[P.id];ot===void 0&&(ot={},Z[P.id]=ot);let Y=ot[k];return Y===void 0&&(Y=d(l()),ot[k]=Y),Y}function d(E){const P=[],U=[],k=[];for(let Z=0;Z<e;Z++)P[Z]=0,U[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:k,object:E,attributes:{},index:null}}function m(E,P,U,k){const Z=r.attributes,ot=P.attributes;let Y=0;const it=U.getAttributes();for(const q in it)if(it[q].location>=0){const bt=Z[q];let gt=ot[q];if(gt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),bt===void 0||bt.attribute!==gt||gt&&bt.data!==gt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(E,P,U,k){const Z={},ot=P.attributes;let Y=0;const it=U.getAttributes();for(const q in it)if(it[q].location>=0){let bt=ot[q];bt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor));const gt={};gt.attribute=bt,bt&&bt.data&&(gt.data=bt.data),Z[q]=gt,Y++}r.attributes=Z,r.attributesNum=Y,r.index=k}function _(){const E=r.newAttributes;for(let P=0,U=E.length;P<U;P++)E[P]=0}function p(E){f(E,0)}function f(E,P){const U=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;U[E]=1,k[E]===0&&(n.enableVertexAttribArray(E),k[E]=1),Z[E]!==P&&(n.vertexAttribDivisor(E,P),Z[E]=P)}function y(){const E=r.newAttributes,P=r.enabledAttributes;for(let U=0,k=P.length;U<k;U++)P[U]!==E[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function M(E,P,U,k,Z,ot,Y){Y===!0?n.vertexAttribIPointer(E,P,U,Z,ot):n.vertexAttribPointer(E,P,U,k,Z,ot)}function S(E,P,U,k){_();const Z=k.attributes,ot=U.getAttributes(),Y=P.defaultAttributeValues;for(const it in ot){const q=ot[it];if(q.location>=0){let yt=Z[it];if(yt===void 0&&(it==="instanceMatrix"&&E.instanceMatrix&&(yt=E.instanceMatrix),it==="instanceColor"&&E.instanceColor&&(yt=E.instanceColor)),yt!==void 0){const bt=yt.normalized,gt=yt.itemSize,Ut=t.get(yt);if(Ut===void 0)continue;const qt=Ut.buffer,lt=Ut.type,vt=Ut.bytesPerElement,pt=lt===n.INT||lt===n.UNSIGNED_INT||yt.gpuType===gu;if(yt.isInterleavedBufferAttribute){const Mt=yt.data,Nt=Mt.stride,Ht=yt.offset;if(Mt.isInstancedInterleavedBuffer){for(let zt=0;zt<q.locationSize;zt++)f(q.location+zt,Mt.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let zt=0;zt<q.locationSize;zt++)p(q.location+zt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let zt=0;zt<q.locationSize;zt++)M(q.location+zt,gt/q.locationSize,lt,bt,Nt*vt,(Ht+gt/q.locationSize*zt)*vt,pt)}else{if(yt.isInstancedBufferAttribute){for(let Mt=0;Mt<q.locationSize;Mt++)f(q.location+Mt,yt.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)p(q.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Mt=0;Mt<q.locationSize;Mt++)M(q.location+Mt,gt/q.locationSize,lt,bt,gt*vt,gt/q.locationSize*Mt*vt,pt)}}else if(Y!==void 0){const bt=Y[it];if(bt!==void 0)switch(bt.length){case 2:n.vertexAttrib2fv(q.location,bt);break;case 3:n.vertexAttrib3fv(q.location,bt);break;case 4:n.vertexAttrib4fv(q.location,bt);break;default:n.vertexAttrib1fv(q.location,bt)}}}}y()}function L(){I();for(const E in i){const P=i[E];for(const U in P){const k=P[U];for(const Z in k)c(k[Z].object),delete k[Z];delete P[U]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const U in P){const k=P[U];for(const Z in k)c(k[Z].object),delete k[Z];delete P[U]}delete i[E.id]}function C(E){for(const P in i){const U=i[P];if(U[E.id]===void 0)continue;const k=U[E.id];for(const Z in k)c(k[Z].object),delete k[Z];delete U[E.id]}}function I(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Hb(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),e.update(c,i,h))}function a(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let m=0;for(let g=0;g<h;g++)m+=c[g];e.update(m,i,1)}function l(u,c,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_];for(let _=0;_<d.length;_++)e.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vb(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Si&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Jn&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:S,maxSamples:L}}function Gb(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ni,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=c(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?c(null):u();else{const y=r?0:i,M=y*4;let S=f.clippingState||null;l.value=S,S=c(g,d,M,m);for(let L=0;L!==M;++L)S[L]=e[L];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,S=m;M!==_;++M,S+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Wb(n){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=ur:a===dc&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fc||a===dc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new vm(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xb extends mm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zs=4,mf=[.125,.215,.35,.446,.526,.582],as=20,Ol=new Xb,gf=new ee;let Fl=null,Bl=0,zl=0,kl=!1;const is=(1+Math.sqrt(5))/2,Ws=1/is,_f=[new D(-is,Ws,0),new D(is,Ws,0),new D(-Ws,0,is),new D(Ws,0,is),new D(0,is,-Ws),new D(0,is,Ws),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class vf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Fl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fl,Bl,zl),this._renderer.xr.enabled=kl,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:go,format:Bn,colorSpace:Wi,depthBuffer:!1},s=xf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qb(r)),this._blurMaterial=jb(r,t,e)}return s}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Ol)}_sceneToCubeUV(t,e,i,s){const a=new dn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(gf),c.toneMapping=zi,c.autoClear=!1;const m=new Se({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new ct(new se,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(gf),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const M=this._cubeSize;Wo(s,y*M,f>2?M:0,M,M),c.setRenderTarget(s),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ur||t.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ol)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_f[(s-r-1)%_f.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new ct(this._lodPlanes[s],u),d=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*as-1),_=r/g,p=isFinite(r)?1+Math.floor(c*_):as;p>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);const f=[];let y=0;for(let C=0;C<as;++C){const I=C/_,w=Math.exp(-I*I/2);f.push(w),C===0?y+=w:C<p&&(y+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const S=this._sizeLods[s],L=3*S*(s>M-Zs?s-M+Zs:0),R=4*(this._cubeSize-S);Wo(e,L,R,3*S,2*S),l.setRenderTarget(e),l.render(h,Ol)}}function qb(n){const t=[],e=[],i=[];let s=n;const r=n-Zs+1+mf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Zs?l=mf[o-n+Zs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),M=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,I=R>2?0:-1,w=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(w,_*g*R),M.set(d,p*g*R);const E=[R,R,R,R,R,R];S.set(E,f*g*R)}const L=new gn;L.setAttribute("position",new Rn(y,_)),L.setAttribute("uv",new Rn(M,p)),L.setAttribute("faceIndex",new Rn(S,f)),t.push(L),s>Zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xf(n,t,e){const i=new xs(n,t,e);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function jb(n,t,e){const i=new Float32Array(as),s=new D(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function yf(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Mf(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function Yb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===fc||l===dc,c=l===ur||l===hr;if(u||c){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new vf(n)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&s(m)?(e===null&&(e=new vf(n)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $b(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Kb(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],n.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let M=0,S=y.length;M<S;M+=3){const L=y[M+0],R=y[M+1],C=y[M+2];d.push(L,R,R,C,C,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const L=M+0,R=M+1,C=M+2;d.push(L,R,R,C,C,L)}}else return;const p=new(lm(d)?dm:fm)(d,1);p.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,p)}function c(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Zb(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function u(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),e.update(m,i,g))}function c(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,i,1)}function h(d,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)u(d[f]/o,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=m[y];for(let y=0;y<_.length;y++)e.update(f,i,_[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Jb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qb(n,t,e){const i=new WeakMap,s=new ye;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let L=a.attributes.position.count*S,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const C=new Float32Array(L*R*4*h),I=new um(C,L,R,h);I.type=Jn,I.needsUpdate=!0;const w=S*4;for(let P=0;P<h;P++){const U=f[P],k=y[P],Z=M[P],ot=L*R*4*P;for(let Y=0;Y<U.count;Y++){const it=Y*w;g===!0&&(s.fromBufferAttribute(U,Y),C[ot+it+0]=s.x,C[ot+it+1]=s.y,C[ot+it+2]=s.z,C[ot+it+3]=0),_===!0&&(s.fromBufferAttribute(k,Y),C[ot+it+4]=s.x,C[ot+it+5]=s.y,C[ot+it+6]=s.z,C[ot+it+7]=0),p===!0&&(s.fromBufferAttribute(Z,Y),C[ot+it+8]=s.x,C[ot+it+9]=s.y,C[ot+it+10]=s.z,C[ot+it+11]=Z.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new It(L,R)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function tE(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,h=t.get(l,c);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}class ym extends je{constructor(t,e,i,s,r,o,a,l,u,c=sr){if(c!==sr&&c!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===sr&&(i=vs),i===void 0&&c===dr&&(i=fr),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mm=new je,Sf=new ym(1,1),Sm=new um,bm=new Hy,Em=new _m,bf=[],Ef=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=Ef[t];e===void 0&&(e=new Int32Array(t),Ef[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function nE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function iE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function sE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function rE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Af.set(i),n.uniformMatrix2fv(this.addr,!1,Af),Be(e,i)}}function oE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Tf.set(i),n.uniformMatrix3fv(this.addr,!1,Tf),Be(e,i)}}function aE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;wf.set(i),n.uniformMatrix4fv(this.addr,!1,wf),Be(e,i)}}function lE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function uE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function hE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function fE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function dE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function pE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function mE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function gE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sf.compareFunction=om,r=Sf):r=Mm,e.setTexture2D(t||r,s)}function _E(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||bm,s)}function vE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Em,s)}function xE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Sm,s)}function yE(n){switch(n){case 5126:return eE;case 35664:return nE;case 35665:return iE;case 35666:return sE;case 35674:return rE;case 35675:return oE;case 35676:return aE;case 5124:case 35670:return lE;case 35667:case 35671:return cE;case 35668:case 35672:return uE;case 35669:case 35673:return hE;case 5125:return fE;case 36294:return dE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return xE}}function ME(n,t){n.uniform1fv(this.addr,t)}function SE(n,t){const e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function bE(n,t){const e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function EE(n,t){const e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function wE(n,t){const e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function TE(n,t){const e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function AE(n,t){const e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function RE(n,t){n.uniform1iv(this.addr,t)}function CE(n,t){n.uniform2iv(this.addr,t)}function PE(n,t){n.uniform3iv(this.addr,t)}function LE(n,t){n.uniform4iv(this.addr,t)}function IE(n,t){n.uniform1uiv(this.addr,t)}function DE(n,t){n.uniform2uiv(this.addr,t)}function UE(n,t){n.uniform3uiv(this.addr,t)}function NE(n,t){n.uniform4uiv(this.addr,t)}function OE(n,t,e){const i=this.cache,s=t.length,r=qa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Mm,r[o])}function FE(n,t,e){const i=this.cache,s=t.length,r=qa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bm,r[o])}function BE(n,t,e){const i=this.cache,s=t.length,r=qa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Em,r[o])}function zE(n,t,e){const i=this.cache,s=t.length,r=qa(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sm,r[o])}function kE(n){switch(n){case 5126:return ME;case 35664:return SE;case 35665:return bE;case 35666:return EE;case 35674:return wE;case 35675:return TE;case 35676:return AE;case 5124:case 35670:return RE;case 35667:case 35671:return CE;case 35668:case 35672:return PE;case 35669:case 35673:return LE;case 5125:return IE;case 36294:return DE;case 36295:return UE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return OE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return BE;case 36289:case 36303:case 36311:case 36292:return zE}}class HE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yE(e.type)}}class VE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kE(e.type)}}class GE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Rf(n,t){n.seq.push(t),n.map[t.id]=t}function WE(n,t,e){const i=n.name,s=i.length;for(Hl.lastIndex=0;;){const r=Hl.exec(i),o=Hl.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Rf(e,u===void 0?new HE(a,n,t):new VE(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new GE(a),Rf(e,h)),e=h}}}class ca{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);WE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Cf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const XE=37297;let qE=0;function jE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function YE(n){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(n);let i;switch(t===e?i="":t===Ta&&e===wa?i="LinearDisplayP3ToLinearSRGB":t===wa&&e===Ta&&(i="LinearSRGBToLinearDisplayP3"),n){case Wi:case Xa:return[i,"LinearTransferOETF"];case Ze:case bu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Pf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jE(n.getShaderSource(t),o)}else return s}function $E(n,t){const e=YE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function KE(n,t){let e;switch(t){case ey:e="Linear";break;case ny:e="Reinhard";break;case iy:e="OptimizedCineon";break;case Yp:e="ACESFilmic";break;case ry:e="AgX";break;case oy:e="Neutral";break;case sy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xo=new D;function ZE(){de.getLuminanceCoefficients(Xo);const n=Xo.x.toFixed(4),t=Xo.y.toFixed(4),e=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function QE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zr(n){return n!==""}function Lf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function If(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(n){return n.replace(ew,iw)}const nw=new Map;function iw(n,t){let e=Zt[t];if(e===void 0){const i=nw.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}const sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(n){return n.replace(sw,rw)}function rw(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ow(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===qp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function aw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case hr:t="ENVMAP_TYPE_CUBE";break;case Wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lw(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===hr&&(t="ENVMAP_MODE_REFRACTION"),t}function cw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jp:t="ENVMAP_BLENDING_MULTIPLY";break;case Qx:t="ENVMAP_BLENDING_MIX";break;case ty:t="ENVMAP_BLENDING_ADD";break}return t}function uw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function hw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ow(e),u=aw(e),c=lw(e),h=cw(e),d=uw(e),m=JE(e),g=QE(r),_=s.createProgram();let p,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),f.length>0&&(f+=`
`)):(p=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),f=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==zi?KE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,$E("linearToOutputTexel",e.outputColorSpace),ZE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Gc(o),o=Lf(o,e),o=If(o,e),a=Gc(a),a=Lf(a,e),a=If(a,e),o=Df(o),a=Df(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=y+p+o,S=y+f+a,L=Cf(s,s.VERTEX_SHADER,M),R=Cf(s,s.FRAGMENT_SHADER,S);s.attachShader(_,L),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(L).trim(),Z=s.getShaderInfoLog(R).trim();let ot=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,R);else{const it=Pf(s,L,"vertex"),q=Pf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+it+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||Z==="")&&(Y=!1);Y&&(P.diagnostics={runnable:ot,programLog:U,vertexShader:{log:k,prefix:p},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(L),s.deleteShader(R),I=new ca(s,_),w=tw(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,XE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let fw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pw(t),e.set(t,i)),i}}class pw{constructor(t){this.id=fw++,this.code=t,this.usedTimes=0}}function mw(n,t,e,i,s,r,o){const a=new Tu,l=new dw,u=new Set,c=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}function p(w,E,P,U,k){const Z=U.fog,ot=k.geometry,Y=w.isMeshStandardMaterial?U.environment:null,it=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),q=it&&it.mapping===Wa?it.image.height:null,yt=g[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const bt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,gt=bt!==void 0?bt.length:0;let Ut=0;ot.morphAttributes.position!==void 0&&(Ut=1),ot.morphAttributes.normal!==void 0&&(Ut=2),ot.morphAttributes.color!==void 0&&(Ut=3);let qt,lt,vt,pt;if(yt){const ie=$n[yt];qt=ie.vertexShader,lt=ie.fragmentShader}else qt=w.vertexShader,lt=w.fragmentShader,l.update(w),vt=l.getVertexShaderID(w),pt=l.getFragmentShaderID(w);const Mt=n.getRenderTarget(),Nt=k.isInstancedMesh===!0,Ht=k.isBatchedMesh===!0,zt=!!w.map,oe=!!w.matcap,v=!!it,N=!!w.aoMap,V=!!w.lightMap,nt=!!w.bumpMap,O=!!w.normalMap,Q=!!w.displacementMap,st=!!w.emissiveMap,rt=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,F=w.clearcoat>0,G=w.dispersion>0,K=w.iridescence>0,$=w.sheen>0,xt=w.transmission>0,dt=x&&!!w.anisotropyMap,mt=F&&!!w.clearcoatMap,Ct=F&&!!w.clearcoatNormalMap,ft=F&&!!w.clearcoatRoughnessMap,wt=K&&!!w.iridescenceMap,ht=K&&!!w.iridescenceThicknessMap,z=$&&!!w.sheenColorMap,X=$&&!!w.sheenRoughnessMap,St=!!w.specularMap,Pt=!!w.specularColorMap,ne=!!w.specularIntensityMap,b=xt&&!!w.transmissionMap,j=xt&&!!w.thicknessMap,J=!!w.gradientMap,at=!!w.alphaMap,_t=w.alphaTest>0,Ot=!!w.alphaHash,Wt=!!w.extensions;let Ae=zi;w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Ae=n.toneMapping);const Ue={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:qt,fragmentShader:lt,defines:w.defines,customVertexShaderID:vt,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ht,batchingColor:Ht&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Wi,alphaToCoverage:!!w.alphaToCoverage,map:zt,matcap:oe,envMap:v,envMapMode:v&&it.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:V,bumpMap:nt,normalMap:O,displacementMap:d&&Q,emissiveMap:st,normalMapObjectSpace:O&&w.normalMapType===uy,normalMapTangentSpace:O&&w.normalMapType===rm,metalnessMap:rt,roughnessMap:T,anisotropy:x,anisotropyMap:dt,clearcoat:F,clearcoatMap:mt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:ft,dispersion:G,iridescence:K,iridescenceMap:wt,iridescenceThicknessMap:ht,sheen:$,sheenColorMap:z,sheenRoughnessMap:X,specularMap:St,specularColorMap:Pt,specularIntensityMap:ne,transmission:xt,transmissionMap:b,thicknessMap:j,gradientMap:J,opaque:w.transparent===!1&&w.blending===ir&&w.alphaToCoverage===!1,alphaMap:at,alphaTest:_t,alphaHash:Ot,combine:w.combine,mapUv:zt&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:V&&_(w.lightMap.channel),bumpMapUv:nt&&_(w.bumpMap.channel),normalMapUv:O&&_(w.normalMap.channel),displacementMapUv:Q&&_(w.displacementMap.channel),emissiveMapUv:st&&_(w.emissiveMap.channel),metalnessMapUv:rt&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:dt&&_(w.anisotropyMap.channel),clearcoatMapUv:mt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:z&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:X&&_(w.sheenRoughnessMap.channel),specularMapUv:St&&_(w.specularMap.channel),specularColorMapUv:Pt&&_(w.specularColorMap.channel),specularIntensityMapUv:ne&&_(w.specularIntensityMap.channel),transmissionMapUv:b&&_(w.transmissionMap.channel),thicknessMapUv:j&&_(w.thicknessMap.channel),alphaMapUv:at&&_(w.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(O||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ot.attributes.uv&&(zt||at),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ut,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:zt&&w.map.isVideoTexture===!0&&de.getTransfer(w.map.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===De,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ue.vertexUv1s=u.has(1),Ue.vertexUv2s=u.has(2),Ue.vertexUv3s=u.has(3),u.clear(),Ue}function f(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)E.push(P),E.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(E,w),M(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function y(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function M(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),w.push(a.mask)}function S(w){const E=g[w.type];let P;if(E){const U=$n[E];P=Qy.clone(U.uniforms)}else P=w.uniforms;return P}function L(w,E){let P;for(let U=0,k=c.length;U<k;U++){const Z=c[U];if(Z.cacheKey===E){P=Z,++P.usedTimes;break}}return P===void 0&&(P=new hw(n,E,w,r),c.push(P)),P}function R(w){if(--w.usedTimes===0){const E=c.indexOf(w);c[E]=c[c.length-1],c.pop(),w.destroy()}}function C(w){l.remove(w)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:I}}function gw(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function _w(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Nf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Of(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,m,g,_,p){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),t++,f}function a(h,d,m,g,_,p){const f=o(h,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(h,d,m,g,_,p){const f=o(h,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function u(h,d){e.length>1&&e.sort(h||_w),i.length>1&&i.sort(d||Nf),s.length>1&&s.sort(d||Nf)}function c(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function vw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Of,n.set(i,[o])):s>=r.length?(o=new Of,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function xw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ee};break;case"SpotLight":e={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function yw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Mw=0;function Sw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bw(n){const t=new xw,e=yw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const s=new D,r=new le,o=new le;function a(u){let c=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,y=0,M=0,S=0,L=0,R=0,C=0;u.sort(Sw);for(let w=0,E=u.length;w<E;w++){const P=u[w],U=P.color,k=P.intensity,Z=P.distance,ot=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=U.r*k,h+=U.g*k,d+=U.b*k;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],k);C++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const it=P.shadow,q=e.get(P);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=ot,i.directionalShadowMatrix[m]=P.shadow.matrix,y++}i.directional[m]=Y,m++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(U).multiplyScalar(k),Y.distance=Z,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[_]=Y;const it=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,it.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[_]=it.matrix,P.castShadow){const q=e.get(P);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=ot,S++}_++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(U).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=Y,p++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const it=P.shadow,q=e.get(P);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,q.shadowCameraNear=it.camera.near,q.shadowCameraFar=it.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=ot,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(k),Y.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[f]=Y,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==S||I.numSpotMaps!==L||I.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=S,I.numSpotMaps=L,I.numLightProbes=C,i.version=Mw++)}function l(u,c){let h=0,d=0,m=0,g=0,_=0;const p=c.matrixWorldInverse;for(let f=0,y=u.length;f<y;f++){const M=u[f];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Ff(n){const t=new bw(n),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ew(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ff(n),t.set(s,[a])):r>=o.length?(a=new Ff(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class ww extends vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tw extends vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
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
}`;function Cw(n,t,e){let i=new Au;const s=new It,r=new It,o=new ye,a=new ww({depthPacking:cy}),l=new Tw,u={},c=e.maxTextureSize,h={[Hi]:hn,[hn]:Hi,[De]:De},d=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Aw,fragmentShader:Rw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ct(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xp;let f=this.type;this.render=function(R,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Bi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=f!==hi&&this.type===hi,Z=f===hi&&this.type!==hi;for(let ot=0,Y=R.length;ot<Y;ot++){const it=R[ot],q=it.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const yt=q.getFrameExtents();if(s.multiply(yt),r.copy(q.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/yt.x),s.x=r.x*yt.x,q.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/yt.y),s.y=r.y*yt.y,q.mapSize.y=r.y)),q.map===null||k===!0||Z===!0){const gt=this.type!==hi?{minFilter:pn,magFilter:pn}:{};q.map!==null&&q.map.dispose(),q.map=new xs(s.x,s.y,gt),q.map.texture.name=it.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const bt=q.getViewportCount();for(let gt=0;gt<bt;gt++){const Ut=q.getViewport(gt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),U.viewport(o),q.updateMatrices(it,gt),i=q.getFrustum(),S(C,I,q.camera,it,this.type)}q.isPointLightShadow!==!0&&this.type===hi&&y(q,I),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(w,E,P)};function y(R,C){const I=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xs(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,I,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,I,m,_,null)}function M(R,C,I,w){let E=null;const P=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)E=P;else if(E=I.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=E.uuid,k=C.uuid;let Z=u[U];Z===void 0&&(Z={},u[U]=Z);let ot=Z[k];ot===void 0&&(ot=E.clone(),Z[k]=ot,C.addEventListener("dispose",L)),E=ot}if(E.visible=C.visible,E.wireframe=C.wireframe,w===hi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=I}return E}function S(R,C,I,w,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===hi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const k=t.update(R),Z=R.material;if(Array.isArray(Z)){const ot=k.groups;for(let Y=0,it=ot.length;Y<it;Y++){const q=ot[Y],yt=Z[q.materialIndex];if(yt&&yt.visible){const bt=M(R,yt,w,E);R.onBeforeShadow(n,R,C,I,k,bt,q),n.renderBufferDirect(I,null,k,bt,R,q),R.onAfterShadow(n,R,C,I,k,bt,q)}}}else if(Z.visible){const ot=M(R,Z,w,E);R.onBeforeShadow(n,R,C,I,k,ot,null),n.renderBufferDirect(I,null,k,ot,R,null),R.onAfterShadow(n,R,C,I,k,ot,null)}}const U=R.children;for(let k=0,Z=U.length;k<Z;k++)S(U[k],C,I,w,E)}function L(R){R.target.removeEventListener("dispose",L);for(const I in u){const w=u[I],E=R.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function Pw(n){function t(){let b=!1;const j=new ye;let J=null;const at=new ye(0,0,0,0);return{setMask:function(_t){J!==_t&&!b&&(n.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){b=_t},setClear:function(_t,Ot,Wt,Ae,Ue){Ue===!0&&(_t*=Ae,Ot*=Ae,Wt*=Ae),j.set(_t,Ot,Wt,Ae),at.equals(j)===!1&&(n.clearColor(_t,Ot,Wt,Ae),at.copy(j))},reset:function(){b=!1,J=null,at.set(-1,0,0,0)}}}function e(){let b=!1,j=null,J=null,at=null;return{setTest:function(_t){_t?pt(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(_t){j!==_t&&!b&&(n.depthMask(_t),j=_t)},setFunc:function(_t){if(J!==_t){switch(_t){case qx:n.depthFunc(n.NEVER);break;case jx:n.depthFunc(n.ALWAYS);break;case Yx:n.depthFunc(n.LESS);break;case ba:n.depthFunc(n.LEQUAL);break;case $x:n.depthFunc(n.EQUAL);break;case Kx:n.depthFunc(n.GEQUAL);break;case Zx:n.depthFunc(n.GREATER);break;case Jx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=_t}},setLocked:function(_t){b=_t},setClear:function(_t){at!==_t&&(n.clearDepth(_t),at=_t)},reset:function(){b=!1,j=null,J=null,at=null}}}function i(){let b=!1,j=null,J=null,at=null,_t=null,Ot=null,Wt=null,Ae=null,Ue=null;return{setTest:function(ie){b||(ie?pt(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(ie){j!==ie&&!b&&(n.stencilMask(ie),j=ie)},setFunc:function(ie,Ne,Pe){(J!==ie||at!==Ne||_t!==Pe)&&(n.stencilFunc(ie,Ne,Pe),J=ie,at=Ne,_t=Pe)},setOp:function(ie,Ne,Pe){(Ot!==ie||Wt!==Ne||Ae!==Pe)&&(n.stencilOp(ie,Ne,Pe),Ot=ie,Wt=Ne,Ae=Pe)},setLocked:function(ie){b=ie},setClear:function(ie){Ue!==ie&&(n.clearStencil(ie),Ue=ie)},reset:function(){b=!1,j=null,J=null,at=null,_t=null,Ot=null,Wt=null,Ae=null,Ue=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,y=null,M=null,S=null,L=null,R=new ee(0,0,0),C=0,I=!1,w=null,E=null,P=null,U=null,k=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,Y=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(it)[1]),ot=Y>=1):it.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),ot=Y>=2);let q=null,yt={};const bt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Ut=new ye().fromArray(bt),qt=new ye().fromArray(gt);function lt(b,j,J,at){const _t=new Uint8Array(4),Ot=n.createTexture();n.bindTexture(b,Ot),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<J;Wt++)b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(j+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return Ot}const vt={};vt[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),vt[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),vt[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pt(n.DEPTH_TEST),r.setFunc(ba),nt(!1),O(Gh),pt(n.CULL_FACE),N(Bi);function pt(b){u[b]!==!0&&(n.enable(b),u[b]=!0)}function Mt(b){u[b]!==!1&&(n.disable(b),u[b]=!1)}function Nt(b,j){return c[b]!==j?(n.bindFramebuffer(b,j),c[b]=j,b===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=j),b===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Ht(b,j){let J=d,at=!1;if(b){J=h.get(j),J===void 0&&(J=[],h.set(j,J));const _t=b.textures;if(J.length!==_t.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Ot=0,Wt=_t.length;Ot<Wt;Ot++)J[Ot]=n.COLOR_ATTACHMENT0+Ot;J.length=_t.length,at=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,at=!0);at&&n.drawBuffers(J)}function zt(b){return m!==b?(n.useProgram(b),m=b,!0):!1}const oe={[os]:n.FUNC_ADD,[Cx]:n.FUNC_SUBTRACT,[Px]:n.FUNC_REVERSE_SUBTRACT};oe[Lx]=n.MIN,oe[Ix]=n.MAX;const v={[Dx]:n.ZERO,[Ux]:n.ONE,[Nx]:n.SRC_COLOR,[uc]:n.SRC_ALPHA,[Hx]:n.SRC_ALPHA_SATURATE,[zx]:n.DST_COLOR,[Fx]:n.DST_ALPHA,[Ox]:n.ONE_MINUS_SRC_COLOR,[hc]:n.ONE_MINUS_SRC_ALPHA,[kx]:n.ONE_MINUS_DST_COLOR,[Bx]:n.ONE_MINUS_DST_ALPHA,[Vx]:n.CONSTANT_COLOR,[Gx]:n.ONE_MINUS_CONSTANT_COLOR,[Wx]:n.CONSTANT_ALPHA,[Xx]:n.ONE_MINUS_CONSTANT_ALPHA};function N(b,j,J,at,_t,Ot,Wt,Ae,Ue,ie){if(b===Bi){g===!0&&(Mt(n.BLEND),g=!1);return}if(g===!1&&(pt(n.BLEND),g=!0),b!==Rx){if(b!==_||ie!==I){if((p!==os||M!==os)&&(n.blendEquation(n.FUNC_ADD),p=os,M=os),ie)switch(b){case ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFunc(n.ONE,n.ONE);break;case Wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}f=null,y=null,S=null,L=null,R.set(0,0,0),C=0,_=b,I=ie}return}_t=_t||j,Ot=Ot||J,Wt=Wt||at,(j!==p||_t!==M)&&(n.blendEquationSeparate(oe[j],oe[_t]),p=j,M=_t),(J!==f||at!==y||Ot!==S||Wt!==L)&&(n.blendFuncSeparate(v[J],v[at],v[Ot],v[Wt]),f=J,y=at,S=Ot,L=Wt),(Ae.equals(R)===!1||Ue!==C)&&(n.blendColor(Ae.r,Ae.g,Ae.b,Ue),R.copy(Ae),C=Ue),_=b,I=!1}function V(b,j){b.side===De?Mt(n.CULL_FACE):pt(n.CULL_FACE);let J=b.side===hn;j&&(J=!J),nt(J),b.blending===ir&&b.transparent===!1?N(Bi):N(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),r.setFunc(b.depthFunc),r.setTest(b.depthTest),r.setMask(b.depthWrite),s.setMask(b.colorWrite);const at=b.stencilWrite;o.setTest(at),at&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),st(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(b){w!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),w=b)}function O(b){b!==Tx?(pt(n.CULL_FACE),b!==E&&(b===Gh?n.cullFace(n.BACK):b===Ax?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),E=b}function Q(b){b!==P&&(ot&&n.lineWidth(b),P=b)}function st(b,j,J){b?(pt(n.POLYGON_OFFSET_FILL),(U!==j||k!==J)&&(n.polygonOffset(j,J),U=j,k=J)):Mt(n.POLYGON_OFFSET_FILL)}function rt(b){b?pt(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function T(b){b===void 0&&(b=n.TEXTURE0+Z-1),q!==b&&(n.activeTexture(b),q=b)}function x(b,j,J){J===void 0&&(q===null?J=n.TEXTURE0+Z-1:J=q);let at=yt[J];at===void 0&&(at={type:void 0,texture:void 0},yt[J]=at),(at.type!==b||at.texture!==j)&&(q!==J&&(n.activeTexture(J),q=J),n.bindTexture(b,j||vt[b]),at.type=b,at.texture=j)}function F(){const b=yt[q];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ct(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ht(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function z(b){Ut.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),Ut.copy(b))}function X(b){qt.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),qt.copy(b))}function St(b,j){let J=l.get(j);J===void 0&&(J=new WeakMap,l.set(j,J));let at=J.get(b);at===void 0&&(at=n.getUniformBlockIndex(j,b.name),J.set(b,at))}function Pt(b,j){const at=l.get(j).get(b);a.get(j)!==at&&(n.uniformBlockBinding(j,at,b.__bindingPointIndex),a.set(j,at))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,yt={},c={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,y=null,M=null,S=null,L=null,R=new ee(0,0,0),C=0,I=!1,w=null,E=null,P=null,U=null,k=null,Ut.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pt,disable:Mt,bindFramebuffer:Nt,drawBuffers:Ht,useProgram:zt,setBlending:N,setMaterial:V,setFlipSided:nt,setCullFace:O,setLineWidth:Q,setPolygonOffset:st,setScissorTest:rt,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:G,compressedTexImage3D:K,texImage2D:wt,texImage3D:ht,updateUBOMapping:St,uniformBlockBinding:Pt,texStorage2D:Ct,texStorage3D:ft,texSubImage2D:$,texSubImage3D:xt,compressedTexSubImage2D:dt,compressedTexSubImage3D:mt,scissor:z,viewport:X,reset:ne}}function Bf(n,t,e,i){const s=Lw(i);switch(e){case Qp:return n*t;case em:return n*t;case nm:return n*t*2;case xu:return n*t/s.components*s.byteLength;case yu:return n*t/s.components*s.byteLength;case im:return n*t*2/s.components*s.byteLength;case Mu:return n*t*2/s.components*s.byteLength;case tm:return n*t*3/s.components*s.byteLength;case Bn:return n*t*4/s.components*s.byteLength;case Su:return n*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _c:case xc:return Math.max(n,16)*Math.max(t,8)/4;case gc:case vc:return Math.max(n,8)*Math.max(t,8)/2;case yc:case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case wc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case la:case Fc:case Bc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case sm:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case kc:case Hc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lw(n){switch(n){case Si:case Kp:return{byteLength:1,components:1};case io:case Zp:case go:return{byteLength:2,components:1};case _u:case vu:return{byteLength:2,components:4};case vs:case gu:case Jn:return{byteLength:4,components:1};case Jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Iw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new It,c=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):so("canvas")}function _(T,x,F){let G=1;const K=rt(T);if((K.width>F||K.height>F)&&(G=F/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(G*K.width),xt=Math.floor(G*K.height);h===void 0&&(h=g($,xt));const dt=x?g($,xt):h;return dt.width=$,dt.height=xt,dt.getContext("2d").drawImage(T,0,0,$,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+xt+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==pn&&T.minFilter!==qe}function f(T){n.generateMipmap(T)}function y(T,x,F,G,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),x===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),x===n.RGBA){const xt=K?Ea:de.getTransfer(G);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=xt===ve?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(T,x){let F;return T?x===null||x===vs||x===fr?F=n.DEPTH24_STENCIL8:x===Jn?F=n.DEPTH32F_STENCIL8:x===io&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vs||x===fr?F=n.DEPTH_COMPONENT24:x===Jn?F=n.DEPTH_COMPONENT32F:x===io&&(F=n.DEPTH_COMPONENT16),F}function S(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==pn&&T.minFilter!==qe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){const x=T.target;x.removeEventListener("dispose",L),C(x),x.isVideoTexture&&c.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),w(x)}function C(T){const x=i.get(T);if(x.__webglInit===void 0)return;const F=T.source,G=d.get(F);if(G){const K=G[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(T),Object.keys(G).length===0&&d.delete(F)}i.remove(T)}function I(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const F=T.source,G=d.get(F);delete G[x.__cacheKey],o.memory.textures--}function w(T){const x=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let K=0;K<x.__webglFramebuffer[G].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[G][K]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let G=0,K=F.length;G<K;G++){const $=i.get(F[G]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(T)}let E=0;function P(){E=0}function U(){const T=E;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),E+=1,T}function k(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Z(T,x){const F=i.get(T);if(T.isVideoTexture&&Q(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(F,T,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function ot(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){qt(F,T,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Y(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){qt(F,T,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function it(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){lt(F,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const q={[pc]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[mc]:n.MIRRORED_REPEAT},yt={[pn]:n.NEAREST,[ay]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[qe]:n.LINEAR,[_l]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},bt={[hy]:n.NEVER,[_y]:n.ALWAYS,[fy]:n.LESS,[om]:n.LEQUAL,[dy]:n.EQUAL,[gy]:n.GEQUAL,[py]:n.GREATER,[my]:n.NOTEQUAL};function gt(T,x){if(x.type===Jn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===qe||x.magFilter===_l||x.magFilter===Eo||x.magFilter===us||x.minFilter===qe||x.minFilter===_l||x.minFilter===Eo||x.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,q[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,q[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,q[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,yt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,yt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==Eo&&x.minFilter!==us||x.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ut(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L));const G=x.source;let K=d.get(G);K===void 0&&(K={},d.set(G,K));const $=k(x);if($!==T.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[$].usedTimes++;const xt=K[T.__cacheKey];xt!==void 0&&(K[T.__cacheKey].usedTimes--,xt.usedTimes===0&&I(x)),T.__cacheKey=$,T.__webglTexture=K[$].texture}return F}function qt(T,x,F){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const K=Ut(T,x),$=x.source;e.bindTexture(G,T.__webglTexture,n.TEXTURE0+F);const xt=i.get($);if($.version!==xt.__version||K===!0){e.activeTexture(n.TEXTURE0+F);const dt=de.getPrimaries(de.workingColorSpace),mt=x.colorSpace===Fi?null:de.getPrimaries(x.colorSpace),Ct=x.colorSpace===Fi||dt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let ft=_(x.image,!1,s.maxTextureSize);ft=st(x,ft);const wt=r.convert(x.format,x.colorSpace),ht=r.convert(x.type);let z=y(x.internalFormat,wt,ht,x.colorSpace,x.isVideoTexture);gt(G,x);let X;const St=x.mipmaps,Pt=x.isVideoTexture!==!0,ne=xt.__version===void 0||K===!0,b=$.dataReady,j=S(x,ft);if(x.isDepthTexture)z=M(x.format===dr,x.type),ne&&(Pt?e.texStorage2D(n.TEXTURE_2D,1,z,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,z,ft.width,ft.height,0,wt,ht,null));else if(x.isDataTexture)if(St.length>0){Pt&&ne&&e.texStorage2D(n.TEXTURE_2D,j,z,St[0].width,St[0].height);for(let J=0,at=St.length;J<at;J++)X=St[J],Pt?b&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,X.width,X.height,wt,ht,X.data):e.texImage2D(n.TEXTURE_2D,J,z,X.width,X.height,0,wt,ht,X.data);x.generateMipmaps=!1}else Pt?(ne&&e.texStorage2D(n.TEXTURE_2D,j,z,ft.width,ft.height),b&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,wt,ht,ft.data)):e.texImage2D(n.TEXTURE_2D,0,z,ft.width,ft.height,0,wt,ht,ft.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,j,z,St[0].width,St[0].height,ft.depth);for(let J=0,at=St.length;J<at;J++)if(X=St[J],x.format!==Bn)if(wt!==null)if(Pt){if(b)if(x.layerUpdates.size>0){const _t=Bf(X.width,X.height,x.format,x.type);for(const Ot of x.layerUpdates){const Wt=X.data.subarray(Ot*_t/X.data.BYTES_PER_ELEMENT,(Ot+1)*_t/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ot,X.width,X.height,1,wt,Wt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,X.width,X.height,ft.depth,wt,X.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,z,X.width,X.height,ft.depth,0,X.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?b&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,X.width,X.height,ft.depth,wt,ht,X.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,z,X.width,X.height,ft.depth,0,wt,ht,X.data)}else{Pt&&ne&&e.texStorage2D(n.TEXTURE_2D,j,z,St[0].width,St[0].height);for(let J=0,at=St.length;J<at;J++)X=St[J],x.format!==Bn?wt!==null?Pt?b&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,X.width,X.height,wt,X.data):e.compressedTexImage2D(n.TEXTURE_2D,J,z,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?b&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,X.width,X.height,wt,ht,X.data):e.texImage2D(n.TEXTURE_2D,J,z,X.width,X.height,0,wt,ht,X.data)}else if(x.isDataArrayTexture)if(Pt){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,j,z,ft.width,ft.height,ft.depth),b)if(x.layerUpdates.size>0){const J=Bf(ft.width,ft.height,x.format,x.type);for(const at of x.layerUpdates){const _t=ft.data.subarray(at*J/ft.data.BYTES_PER_ELEMENT,(at+1)*J/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,ft.width,ft.height,1,wt,ht,_t)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,wt,ht,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,z,ft.width,ft.height,ft.depth,0,wt,ht,ft.data);else if(x.isData3DTexture)Pt?(ne&&e.texStorage3D(n.TEXTURE_3D,j,z,ft.width,ft.height,ft.depth),b&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,wt,ht,ft.data)):e.texImage3D(n.TEXTURE_3D,0,z,ft.width,ft.height,ft.depth,0,wt,ht,ft.data);else if(x.isFramebufferTexture){if(ne)if(Pt)e.texStorage2D(n.TEXTURE_2D,j,z,ft.width,ft.height);else{let J=ft.width,at=ft.height;for(let _t=0;_t<j;_t++)e.texImage2D(n.TEXTURE_2D,_t,z,J,at,0,wt,ht,null),J>>=1,at>>=1}}else if(St.length>0){if(Pt&&ne){const J=rt(St[0]);e.texStorage2D(n.TEXTURE_2D,j,z,J.width,J.height)}for(let J=0,at=St.length;J<at;J++)X=St[J],Pt?b&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,wt,ht,X):e.texImage2D(n.TEXTURE_2D,J,z,wt,ht,X);x.generateMipmaps=!1}else if(Pt){if(ne){const J=rt(ft);e.texStorage2D(n.TEXTURE_2D,j,z,J.width,J.height)}b&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,ht,ft)}else e.texImage2D(n.TEXTURE_2D,0,z,wt,ht,ft);p(x)&&f(G),xt.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function lt(T,x,F){if(x.image.length!==6)return;const G=Ut(T,x),K=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const $=i.get(K);if(K.version!==$.__version||G===!0){e.activeTexture(n.TEXTURE0+F);const xt=de.getPrimaries(de.workingColorSpace),dt=x.colorSpace===Fi?null:de.getPrimaries(x.colorSpace),mt=x.colorSpace===Fi||xt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Ct=x.isCompressedTexture||x.image[0].isCompressedTexture,ft=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let at=0;at<6;at++)!Ct&&!ft?wt[at]=_(x.image[at],!0,s.maxCubemapSize):wt[at]=ft?x.image[at].image:x.image[at],wt[at]=st(x,wt[at]);const ht=wt[0],z=r.convert(x.format,x.colorSpace),X=r.convert(x.type),St=y(x.internalFormat,z,X,x.colorSpace),Pt=x.isVideoTexture!==!0,ne=$.__version===void 0||G===!0,b=K.dataReady;let j=S(x,ht);gt(n.TEXTURE_CUBE_MAP,x);let J;if(Ct){Pt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,j,St,ht.width,ht.height);for(let at=0;at<6;at++){J=wt[at].mipmaps;for(let _t=0;_t<J.length;_t++){const Ot=J[_t];x.format!==Bn?z!==null?Pt?b&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t,0,0,Ot.width,Ot.height,z,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t,St,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?b&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t,0,0,Ot.width,Ot.height,z,X,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t,St,Ot.width,Ot.height,0,z,X,Ot.data)}}}else{if(J=x.mipmaps,Pt&&ne){J.length>0&&j++;const at=rt(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,j,St,at.width,at.height)}for(let at=0;at<6;at++)if(ft){Pt?b&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,wt[at].width,wt[at].height,z,X,wt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,St,wt[at].width,wt[at].height,0,z,X,wt[at].data);for(let _t=0;_t<J.length;_t++){const Wt=J[_t].image[at].image;Pt?b&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t+1,0,0,Wt.width,Wt.height,z,X,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t+1,St,Wt.width,Wt.height,0,z,X,Wt.data)}}else{Pt?b&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,z,X,wt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,St,z,X,wt[at]);for(let _t=0;_t<J.length;_t++){const Ot=J[_t];Pt?b&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t+1,0,0,z,X,Ot.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t+1,St,z,X,Ot.image[at])}}}p(x)&&f(n.TEXTURE_CUBE_MAP),$.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function vt(T,x,F,G,K,$){const xt=r.convert(F.format,F.colorSpace),dt=r.convert(F.type),mt=y(F.internalFormat,xt,dt,F.colorSpace);if(!i.get(x).__hasExternalTextures){const ft=Math.max(1,x.width>>$),wt=Math.max(1,x.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,$,mt,ft,wt,x.depth,0,xt,dt,null):e.texImage2D(K,$,mt,ft,wt,0,xt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),O(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,i.get(F).__webglTexture,0,nt(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,i.get(F).__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(T,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const G=x.depthTexture,K=G&&G.isDepthTexture?G.type:null,$=M(x.stencilBuffer,K),xt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=nt(x);O(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,$,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,T)}else{const G=x.textures;for(let K=0;K<G.length;K++){const $=G[K],xt=r.convert($.format,$.colorSpace),dt=r.convert($.type),mt=y($.internalFormat,xt,dt,$.colorSpace),Ct=nt(x);F&&O(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,mt,x.width,x.height):O(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct,mt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,mt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Mt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const G=i.get(x.depthTexture).__webglTexture,K=nt(x);if(x.depthTexture.format===sr)O(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(x.depthTexture.format===dr)O(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Nt(T){const x=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Mt(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]=n.createRenderbuffer(),pt(x.__webglDepthbuffer[G],T,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),pt(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(T,x,F){const G=i.get(T);x!==void 0&&vt(G.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Nt(T)}function zt(T){const x=T.texture,F=i.get(T),G=i.get(x);T.addEventListener("dispose",R);const K=T.textures,$=T.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let mt=0;mt<x.mipmaps.length;mt++)F.__webglFramebuffer[dt][mt]=n.createFramebuffer()}else F.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<x.mipmaps.length;dt++)F.__webglFramebuffer[dt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let dt=0,mt=K.length;dt<mt;dt++){const Ct=i.get(K[dt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&O(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let dt=0;dt<K.length;dt++){const mt=K[dt];F.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[dt]);const Ct=r.convert(mt.format,mt.colorSpace),ft=r.convert(mt.type),wt=y(mt.internalFormat,Ct,ft,mt.colorSpace,T.isXRRenderTarget===!0),ht=nt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,wt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,F.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),gt(n.TEXTURE_CUBE_MAP,x);for(let dt=0;dt<6;dt++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)vt(F.__webglFramebuffer[dt][mt],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,mt);else vt(F.__webglFramebuffer[dt],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(x)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let dt=0,mt=K.length;dt<mt;dt++){const Ct=K[dt],ft=i.get(Ct);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),gt(n.TEXTURE_2D,Ct),vt(F.__webglFramebuffer,T,Ct,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),p(Ct)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,G.__webglTexture),gt(dt,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)vt(F.__webglFramebuffer[mt],T,x,n.COLOR_ATTACHMENT0,dt,mt);else vt(F.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,dt,0);p(x)&&f(dt),e.unbindTexture()}T.depthBuffer&&Nt(T)}function oe(T){const x=T.textures;for(let F=0,G=x.length;F<G;F++){const K=x[F];if(p(K)){const $=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(K).__webglTexture;e.bindTexture($,xt),f($),e.unbindTexture()}}}const v=[],N=[];function V(T){if(T.samples>0){if(O(T)===!1){const x=T.textures,F=T.width,G=T.height;let K=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(T),dt=x.length>1;if(dt)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[mt]);const Ct=i.get(x[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ct,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,K,n.NEAREST),l===!0&&(v.length=0,N.length=0,v.push(n.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(v.push($),N.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,v))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[mt]);const Ct=i.get(x[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function nt(T){return Math.min(s.maxSamples,T.samples)}function O(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Q(T){const x=o.render.frame;c.get(T)!==x&&(c.set(T,x),T.update())}function st(T,x){const F=T.colorSpace,G=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Wi&&F!==Fi&&(de.getTransfer(F)===ve?(G!==Bn||K!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=Z,this.setTexture2DArray=ot,this.setTexture3D=Y,this.setTextureCube=it,this.rebindTextures=Ht,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=O}function Dw(n,t){function e(i,s=Fi){let r;const o=de.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===_u)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kp)return n.BYTE;if(i===Zp)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===gu)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===go)return n.HALF_FLOAT;if(i===Qp)return n.ALPHA;if(i===tm)return n.RGB;if(i===Bn)return n.RGBA;if(i===em)return n.LUMINANCE;if(i===nm)return n.LUMINANCE_ALPHA;if(i===sr)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===xu)return n.RED;if(i===yu)return n.RED_INTEGER;if(i===im)return n.RG;if(i===Mu)return n.RG_INTEGER;if(i===Su)return n.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===_c||i===vc||i===xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===Mc||i===Sc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yc||i===Mc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ec)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ic)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Fc||i===Bc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===la)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sm||i===zc||i===kc||i===Hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===la)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Uw extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nw={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),f=this._getHandJoint(u,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
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

}`;class Bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Gi({vertexShader:Ow,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Re(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends Ms{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,g=null;const _=new Bw,p=e.getContextAttributes();let f=null,y=null;const M=[],S=[],L=new It;let R=null;const C=new dn;C.layers.enable(1),C.viewport=new ye;const I=new dn;I.layers.enable(2),I.viewport=new ye;const w=[C,I],E=new Uw;E.layers.enable(1),E.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let vt=M[lt];return vt===void 0&&(vt=new Vl,M[lt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(lt){let vt=M[lt];return vt===void 0&&(vt=new Vl,M[lt]=vt),vt.getGripSpace()},this.getHand=function(lt){let vt=M[lt];return vt===void 0&&(vt=new Vl,M[lt]=vt),vt.getHandSpace()};function k(lt){const vt=S.indexOf(lt.inputSource);if(vt===-1)return;const pt=M[vt];pt!==void 0&&(pt.update(lt.inputSource,lt.frame,u||o),pt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ot);for(let lt=0;lt<M.length;lt++){const vt=S[lt];vt!==null&&(S[lt]=null,M[lt].disconnect(vt))}P=null,U=null,_.reset(),t.setRenderTarget(f),m=null,d=null,h=null,s=null,y=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(lt){u=lt},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ot),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const vt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new xs(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let vt=null,pt=null,Mt=null;p.depth&&(Mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=p.stencil?dr:sr,pt=p.stencil?fr:vs);const Nt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new xs(d.textureWidth,d.textureHeight,{format:Bn,type:Si,depthTexture:new ym(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ot(lt){for(let vt=0;vt<lt.removed.length;vt++){const pt=lt.removed[vt],Mt=S.indexOf(pt);Mt>=0&&(S[Mt]=null,M[Mt].disconnect(pt))}for(let vt=0;vt<lt.added.length;vt++){const pt=lt.added[vt];let Mt=S.indexOf(pt);if(Mt===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=S.length){S.push(pt),Mt=Ht;break}else if(S[Ht]===null){S[Ht]=pt,Mt=Ht;break}if(Mt===-1)break}const Nt=M[Mt];Nt&&Nt.connect(pt)}}const Y=new D,it=new D;function q(lt,vt,pt){Y.setFromMatrixPosition(vt.matrixWorld),it.setFromMatrixPosition(pt.matrixWorld);const Mt=Y.distanceTo(it),Nt=vt.projectionMatrix.elements,Ht=pt.projectionMatrix.elements,zt=Nt[14]/(Nt[10]-1),oe=Nt[14]/(Nt[10]+1),v=(Nt[9]+1)/Nt[5],N=(Nt[9]-1)/Nt[5],V=(Nt[8]-1)/Nt[0],nt=(Ht[8]+1)/Ht[0],O=zt*V,Q=zt*nt,st=Mt/(-V+nt),rt=st*-V;vt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(rt),lt.translateZ(st),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert();const T=zt+st,x=oe+st,F=O-rt,G=Q+(Mt-rt),K=v*oe/x*T,$=N*oe/x*T;lt.projectionMatrix.makePerspective(F,G,K,$,T,x),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}function yt(lt,vt){vt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(vt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;_.texture!==null&&(lt.near=_.depthNear,lt.far=_.depthFar),E.near=I.near=C.near=lt.near,E.far=I.far=C.far=lt.far,(P!==E.near||U!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,U=E.far,C.near=P,C.far=U,I.near=P,I.far=U,C.updateProjectionMatrix(),I.updateProjectionMatrix(),lt.updateProjectionMatrix());const vt=lt.parent,pt=E.cameras;yt(E,vt);for(let Mt=0;Mt<pt.length;Mt++)yt(pt[Mt],vt);pt.length===2?q(E,C,I):E.projectionMatrix.copy(C.projectionMatrix),bt(lt,E,vt)};function bt(lt,vt,pt){pt===null?lt.matrix.copy(vt.matrixWorld):(lt.matrix.copy(pt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(vt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(vt.projectionMatrix),lt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=pr*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(lt){l=lt,d!==null&&(d.fixedFoveation=lt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=lt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let gt=null;function Ut(lt,vt){if(c=vt.getViewerPose(u||o),g=vt,c!==null){const pt=c.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Mt=!1;pt.length!==E.cameras.length&&(E.cameras.length=0,Mt=!0);for(let Ht=0;Ht<pt.length;Ht++){const zt=pt[Ht];let oe=null;if(m!==null)oe=m.getViewport(zt);else{const N=h.getViewSubImage(d,zt);oe=N.viewport,Ht===0&&(t.setRenderTargetTextures(y,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(y))}let v=w[Ht];v===void 0&&(v=new dn,v.layers.enable(Ht),v.viewport=new ye,w[Ht]=v),v.matrix.fromArray(zt.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.projectionMatrix.fromArray(zt.projectionMatrix),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.viewport.set(oe.x,oe.y,oe.width,oe.height),Ht===0&&(E.matrix.copy(v.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Mt===!0&&E.cameras.push(v)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ht=h.getDepthInformation(pt[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,s.renderState)}}for(let pt=0;pt<M.length;pt++){const Mt=S[pt],Nt=M[pt];Mt!==null&&Nt!==void 0&&Nt.update(Mt,vt,u||o)}gt&&gt(lt,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),g=null}const qt=new xm;qt.setAnimationLoop(Ut),this.setAnimationLoop=function(lt){gt=lt},this.dispose=function(){}}}const es=new Vn,kw=new le;function Hw(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,pm(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,M,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,y,M):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===hn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===hn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=t.get(f),M=y.envMap,S=y.envMapRotation;M&&(p.envMap.value=M,es.copy(S),es.x*=-1,es.y*=-1,es.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),p.envMapRotation.value.setFromMatrix4(kw.makeRotationFromEuler(es)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=M*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const S=M.program;i.uniformBlockBinding(y,S)}function u(y,M){let S=s[y.id];S===void 0&&(g(y),S=c(y),s[y.id]=S,y.addEventListener("dispose",p));const L=M.program;i.updateUBOMapping(y,L);const R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function c(y){const M=h();y.__bindingPointIndex=M;const S=n.createBuffer(),L=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=s[y.id],S=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,C=S.length;R<C;R++){const I=Array.isArray(S[R])?S[R]:[S[R]];for(let w=0,E=I.length;w<E;w++){const P=I[w];if(m(P,R,w,L)===!0){const U=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let ot=0;ot<k.length;ot++){const Y=k[ot],it=_(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,U+Z,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,Z),Z+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,M,S,L){const R=y.value,C=M+"_"+S;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const I=L[C];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[C]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(y){const M=y.uniforms;let S=0;const L=16;for(let C=0,I=M.length;C<I;C++){const w=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,P=w.length;E<P;E++){const U=w[E],k=Array.isArray(U.value)?U.value:[U.value];for(let Z=0,ot=k.length;Z<ot;Z++){const Y=k[Z],it=_(Y),q=S%L,yt=q%it.boundary,bt=q+yt;S+=yt,bt!==0&&L-bt<it.storage&&(S+=L-bt),U.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=it.storage}}}const R=S%L;return R>0&&(S+=L-R),y.__size=S,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:u,dispose:f}}class Gw{constructor(t={}){const{canvas:e=Uy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=zi,this.toneMappingExposure=1;const M=this;let S=!1,L=0,R=0,C=null,I=-1,w=null;const E=new ye,P=new ye;let U=null;const k=new ee(0);let Z=0,ot=e.width,Y=e.height,it=1,q=null,yt=null;const bt=new ye(0,0,ot,Y),gt=new ye(0,0,ot,Y);let Ut=!1;const qt=new Au;let lt=!1,vt=!1;const pt=new le,Mt=new D,Nt=new ye,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function oe(){return C===null?it:1}let v=i;function N(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mu}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",_t,!1),v===null){const H="webgl2";if(v=N(H,A),v===null)throw N(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let V,nt,O,Q,st,rt,T,x,F,G,K,$,xt,dt,mt,Ct,ft,wt,ht,z,X,St,Pt,ne;function b(){V=new $b(v),V.init(),St=new Dw(v,V),nt=new Vb(v,V,t,St),O=new Pw(v),Q=new Jb(v),st=new gw,rt=new Iw(v,V,O,st,nt,St,Q),T=new Wb(M),x=new Yb(M),F=new sM(v),Pt=new kb(v,F),G=new Kb(v,F,Q,Pt),K=new tE(v,G,F,Q),ht=new Qb(v,nt,rt),Ct=new Gb(st),$=new mw(M,T,x,V,nt,Pt,Ct),xt=new Hw(M,st),dt=new vw,mt=new Ew(V),wt=new zb(M,T,x,O,K,d,l),ft=new Cw(M,K,nt),ne=new Vw(v,Q,nt,O),z=new Hb(v,V,Q),X=new Zb(v,V,Q),Q.programs=$.programs,M.capabilities=nt,M.extensions=V,M.properties=st,M.renderLists=dt,M.shadowMap=ft,M.state=O,M.info=Q}b();const j=new zw(M,v);this.xr=j,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=V.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=V.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(A){A!==void 0&&(it=A,this.setSize(ot,Y,!1))},this.getSize=function(A){return A.set(ot,Y)},this.setSize=function(A,H,tt=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=A,Y=H,e.width=Math.floor(A*it),e.height=Math.floor(H*it),tt===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(ot*it,Y*it).floor()},this.setDrawingBufferSize=function(A,H,tt){ot=A,Y=H,it=tt,e.width=Math.floor(A*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,H,tt,et){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,H,tt,et),O.viewport(E.copy(bt).multiplyScalar(it).round())},this.getScissor=function(A){return A.copy(gt)},this.setScissor=function(A,H,tt,et){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,H,tt,et),O.scissor(P.copy(gt).multiplyScalar(it).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){O.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(A=!0,H=!0,tt=!0){let et=0;if(A){let W=!1;if(C!==null){const Et=C.texture.format;W=Et===Su||Et===Mu||Et===yu}if(W){const Et=C.texture.type,Rt=Et===Si||Et===vs||Et===io||Et===fr||Et===_u||Et===vu,Lt=wt.getClearColor(),Dt=wt.getClearAlpha(),Gt=Lt.r,Xt=Lt.g,kt=Lt.b;Rt?(m[0]=Gt,m[1]=Xt,m[2]=kt,m[3]=Dt,v.clearBufferuiv(v.COLOR,0,m)):(g[0]=Gt,g[1]=Xt,g[2]=kt,g[3]=Dt,v.clearBufferiv(v.COLOR,0,g))}else et|=v.COLOR_BUFFER_BIT}H&&(et|=v.DEPTH_BUFFER_BIT),tt&&(et|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),dt.dispose(),mt.dispose(),st.dispose(),T.dispose(),x.dispose(),K.dispose(),Pt.dispose(),ne.dispose(),$.dispose(),j.dispose(),j.removeEventListener("sessionstart",Pe),j.removeEventListener("sessionend",Ei),ke.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Q.autoReset,H=ft.enabled,tt=ft.autoUpdate,et=ft.needsUpdate,W=ft.type;b(),Q.autoReset=A,ft.enabled=H,ft.autoUpdate=tt,ft.needsUpdate=et,ft.type=W}function _t(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ot(A){const H=A.target;H.removeEventListener("dispose",Ot),Wt(H)}function Wt(A){Ae(A),st.remove(A)}function Ae(A){const H=st.get(A).programs;H!==void 0&&(H.forEach(function(tt){$.releaseProgram(tt)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,tt,et,W,Et){H===null&&(H=Ht);const Rt=W.isMesh&&W.matrixWorld.determinant()<0,Lt=Im(A,H,tt,et,W);O.setMaterial(et,Rt);let Dt=tt.index,Gt=1;if(et.wireframe===!0){if(Dt=G.getWireframeAttribute(tt),Dt===void 0)return;Gt=2}const Xt=tt.drawRange,kt=tt.attributes.position;let ce=Xt.start*Gt,Ee=(Xt.start+Xt.count)*Gt;Et!==null&&(ce=Math.max(ce,Et.start*Gt),Ee=Math.min(Ee,(Et.start+Et.count)*Gt)),Dt!==null?(ce=Math.max(ce,0),Ee=Math.min(Ee,Dt.count)):kt!=null&&(ce=Math.max(ce,0),Ee=Math.min(Ee,kt.count));const we=Ee-ce;if(we<0||we===1/0)return;Pt.setup(W,et,Lt,tt,Dt);let _n,ue=z;if(Dt!==null&&(_n=F.get(Dt),ue=X,ue.setIndex(_n)),W.isMesh)et.wireframe===!0?(O.setLineWidth(et.wireframeLinewidth*oe()),ue.setMode(v.LINES)):ue.setMode(v.TRIANGLES);else if(W.isLine){let Ft=et.linewidth;Ft===void 0&&(Ft=1),O.setLineWidth(Ft*oe()),W.isLineSegments?ue.setMode(v.LINES):W.isLineLoop?ue.setMode(v.LINE_LOOP):ue.setMode(v.LINE_STRIP)}else W.isPoints?ue.setMode(v.POINTS):W.isSprite&&ue.setMode(v.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ue.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))ue.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ft=W._multiDrawStarts,He=W._multiDrawCounts,he=W._multiDrawCount,Ln=Dt?F.get(Dt).bytesPerElement:1,Es=st.get(et).currentProgram.getUniforms();for(let vn=0;vn<he;vn++)Es.setValue(v,"_gl_DrawID",vn),ue.render(Ft[vn]/Ln,He[vn])}else if(W.isInstancedMesh)ue.renderInstances(ce,we,W.count);else if(tt.isInstancedBufferGeometry){const Ft=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,He=Math.min(tt.instanceCount,Ft);ue.renderInstances(ce,we,He)}else ue.render(ce,we)};function Ue(A,H,tt){A.transparent===!0&&A.side===De&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,xo(A,H,tt),A.side=Hi,A.needsUpdate=!0,xo(A,H,tt),A.side=De):xo(A,H,tt)}this.compile=function(A,H,tt=null){tt===null&&(tt=A),p=mt.get(tt),p.init(H),y.push(p),tt.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==tt&&A.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const et=new Set;return A.traverse(function(W){const Et=W.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const Lt=Et[Rt];Ue(Lt,tt,W),et.add(Lt)}else Ue(Et,tt,W),et.add(Et)}),y.pop(),p=null,et},this.compileAsync=function(A,H,tt=null){const et=this.compile(A,H,tt);return new Promise(W=>{function Et(){if(et.forEach(function(Rt){st.get(Rt).currentProgram.isReady()&&et.delete(Rt)}),et.size===0){W(A);return}setTimeout(Et,10)}V.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ie=null;function Ne(A){ie&&ie(A)}function Pe(){ke.stop()}function Ei(){ke.start()}const ke=new xm;ke.setAnimationLoop(Ne),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(A){ie=A,j.setAnimationLoop(A),A===null?ke.stop():ke.start()},j.addEventListener("sessionstart",Pe),j.addEventListener("sessionend",Ei),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(H),H=j.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,H,C),p=mt.get(A,y.length),p.init(H),y.push(p),pt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),qt.setFromProjectionMatrix(pt),vt=this.localClippingEnabled,lt=Ct.init(this.clippingPlanes,vt),_=dt.get(A,f.length),_.init(),f.push(_),j.enabled===!0&&j.isPresenting===!0){const Et=M.xr.getDepthSensingMesh();Et!==null&&ni(Et,H,-1/0,M.sortObjects)}ni(A,H,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(q,yt),zt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,zt&&wt.addToRenderList(_,A),this.info.render.frame++,lt===!0&&Ct.beginShadows();const tt=p.state.shadowsArray;ft.render(tt,A,H),lt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=_.opaque,W=_.transmissive;if(p.setupLights(),H.isArrayCamera){const Et=H.cameras;if(W.length>0)for(let Rt=0,Lt=Et.length;Rt<Lt;Rt++){const Dt=Et[Rt];yr(et,W,A,Dt)}zt&&wt.render(A);for(let Rt=0,Lt=Et.length;Rt<Lt;Rt++){const Dt=Et[Rt];Xi(_,A,Dt,Dt.viewport)}}else W.length>0&&yr(et,W,A,H),zt&&wt.render(A),Xi(_,A,H);C!==null&&(rt.updateMultisampleRenderTarget(C),rt.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(M,A,H),Pt.resetDefaultState(),I=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],lt===!0&&Ct.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ni(A,H,tt,et){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||qt.intersectsSprite(A)){et&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const Rt=K.update(A),Lt=A.material;Lt.visible&&_.push(A,Rt,Lt,tt,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||qt.intersectsObject(A))){const Rt=K.update(A),Lt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Nt.copy(Rt.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){const Dt=Rt.groups;for(let Gt=0,Xt=Dt.length;Gt<Xt;Gt++){const kt=Dt[Gt],ce=Lt[kt.materialIndex];ce&&ce.visible&&_.push(A,Rt,ce,tt,Nt.z,kt)}}else Lt.visible&&_.push(A,Rt,Lt,tt,Nt.z,null)}}const Et=A.children;for(let Rt=0,Lt=Et.length;Rt<Lt;Rt++)ni(Et[Rt],H,tt,et)}function Xi(A,H,tt,et){const W=A.opaque,Et=A.transmissive,Rt=A.transparent;p.setupLightsView(tt),lt===!0&&Ct.setGlobalState(M.clippingPlanes,tt),et&&O.viewport(E.copy(et)),W.length>0&&vo(W,H,tt),Et.length>0&&vo(Et,H,tt),Rt.length>0&&vo(Rt,H,tt),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function yr(A,H,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new xs(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?go:Si,minFilter:us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const Et=p.state.transmissionRenderTarget[et.id],Rt=et.viewport||E;Et.setSize(Rt.z,Rt.w);const Lt=M.getRenderTarget();M.setRenderTarget(Et),M.getClearColor(k),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),zt&&wt.render(tt);const Dt=M.toneMapping;M.toneMapping=zi;const Gt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),lt===!0&&Ct.setGlobalState(M.clippingPlanes,et),vo(A,tt,et),rt.updateMultisampleRenderTarget(Et),rt.updateRenderTargetMipmap(Et),V.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let kt=0,ce=H.length;kt<ce;kt++){const Ee=H[kt],we=Ee.object,_n=Ee.geometry,ue=Ee.material,Ft=Ee.group;if(ue.side===De&&we.layers.test(et.layers)){const He=ue.side;ue.side=hn,ue.needsUpdate=!0,Nu(we,tt,et,_n,ue,Ft),ue.side=He,ue.needsUpdate=!0,Xt=!0}}Xt===!0&&(rt.updateMultisampleRenderTarget(Et),rt.updateRenderTargetMipmap(Et))}M.setRenderTarget(Lt),M.setClearColor(k,Z),Gt!==void 0&&(et.viewport=Gt),M.toneMapping=Dt}function vo(A,H,tt){const et=H.isScene===!0?H.overrideMaterial:null;for(let W=0,Et=A.length;W<Et;W++){const Rt=A[W],Lt=Rt.object,Dt=Rt.geometry,Gt=et===null?Rt.material:et,Xt=Rt.group;Lt.layers.test(tt.layers)&&Nu(Lt,H,tt,Dt,Gt,Xt)}}function Nu(A,H,tt,et,W,Et){A.onBeforeRender(M,H,tt,et,W,Et),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.transparent===!0&&W.side===De&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,M.renderBufferDirect(tt,H,et,W,A,Et),W.side=Hi,W.needsUpdate=!0,M.renderBufferDirect(tt,H,et,W,A,Et),W.side=De):M.renderBufferDirect(tt,H,et,W,A,Et),A.onAfterRender(M,H,tt,et,W,Et)}function xo(A,H,tt){H.isScene!==!0&&(H=Ht);const et=st.get(A),W=p.state.lights,Et=p.state.shadowsArray,Rt=W.state.version,Lt=$.getParameters(A,W.state,Et,H,tt),Dt=$.getProgramCacheKey(Lt);let Gt=et.programs;et.environment=A.isMeshStandardMaterial?H.environment:null,et.fog=H.fog,et.envMap=(A.isMeshStandardMaterial?x:T).get(A.envMap||et.environment),et.envMapRotation=et.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",Ot),Gt=new Map,et.programs=Gt);let Xt=Gt.get(Dt);if(Xt!==void 0){if(et.currentProgram===Xt&&et.lightsStateVersion===Rt)return Fu(A,Lt),Xt}else Lt.uniforms=$.getUniforms(A),A.onBeforeCompile(Lt,M),Xt=$.acquireProgram(Lt,Dt),Gt.set(Dt,Xt),et.uniforms=Lt.uniforms;const kt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Ct.uniform),Fu(A,Lt),et.needsLights=Um(A),et.lightsStateVersion=Rt,et.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.directionalShadowMap.value=W.state.directionalShadowMap,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotShadowMap.value=W.state.spotShadowMap,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMap.value=W.state.pointShadowMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),et.currentProgram=Xt,et.uniformsList=null,Xt}function Ou(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=ca.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Fu(A,H){const tt=st.get(A);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function Im(A,H,tt,et,W){H.isScene!==!0&&(H=Ht),rt.resetTextureUnits();const Et=H.fog,Rt=et.isMeshStandardMaterial?H.environment:null,Lt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Wi,Dt=(et.isMeshStandardMaterial?x:T).get(et.envMap||Rt),Gt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Xt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),kt=!!tt.morphAttributes.position,ce=!!tt.morphAttributes.normal,Ee=!!tt.morphAttributes.color;let we=zi;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(we=M.toneMapping);const _n=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ue=_n!==void 0?_n.length:0,Ft=st.get(et),He=p.state.lights;if(lt===!0&&(vt===!0||A!==w)){const Sn=A===w&&et.id===I;Ct.setState(et,A,Sn)}let he=!1;et.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==He.state.version||Ft.outputColorSpace!==Lt||W.isBatchedMesh&&Ft.batching===!1||!W.isBatchedMesh&&Ft.batching===!0||W.isBatchedMesh&&Ft.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ft.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ft.instancing===!1||!W.isInstancedMesh&&Ft.instancing===!0||W.isSkinnedMesh&&Ft.skinning===!1||!W.isSkinnedMesh&&Ft.skinning===!0||W.isInstancedMesh&&Ft.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ft.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ft.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ft.instancingMorph===!1&&W.morphTexture!==null||Ft.envMap!==Dt||et.fog===!0&&Ft.fog!==Et||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ct.numPlanes||Ft.numIntersection!==Ct.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==Xt||Ft.morphTargets!==kt||Ft.morphNormals!==ce||Ft.morphColors!==Ee||Ft.toneMapping!==we||Ft.morphTargetsCount!==ue)&&(he=!0):(he=!0,Ft.__version=et.version);let Ln=Ft.currentProgram;he===!0&&(Ln=xo(et,H,W));let Es=!1,vn=!1,$a=!1;const Le=Ln.getUniforms(),wi=Ft.uniforms;if(O.useProgram(Ln.program)&&(Es=!0,vn=!0,$a=!0),et.id!==I&&(I=et.id,vn=!0),Es||w!==A){Le.setValue(v,"projectionMatrix",A.projectionMatrix),Le.setValue(v,"viewMatrix",A.matrixWorldInverse);const Sn=Le.map.cameraPosition;Sn!==void 0&&Sn.setValue(v,Mt.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&Le.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Le.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,vn=!0,$a=!0)}if(W.isSkinnedMesh){Le.setOptional(v,W,"bindMatrix"),Le.setOptional(v,W,"bindMatrixInverse");const Sn=W.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Le.setValue(v,"boneTexture",Sn.boneTexture,rt))}W.isBatchedMesh&&(Le.setOptional(v,W,"batchingTexture"),Le.setValue(v,"batchingTexture",W._matricesTexture,rt),Le.setOptional(v,W,"batchingIdTexture"),Le.setValue(v,"batchingIdTexture",W._indirectTexture,rt),Le.setOptional(v,W,"batchingColorTexture"),W._colorsTexture!==null&&Le.setValue(v,"batchingColorTexture",W._colorsTexture,rt));const Ka=tt.morphAttributes;if((Ka.position!==void 0||Ka.normal!==void 0||Ka.color!==void 0)&&ht.update(W,tt,Ln),(vn||Ft.receiveShadow!==W.receiveShadow)&&(Ft.receiveShadow=W.receiveShadow,Le.setValue(v,"receiveShadow",W.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(wi.envMap.value=Dt,wi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&H.environment!==null&&(wi.envMapIntensity.value=H.environmentIntensity),vn&&(Le.setValue(v,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&Dm(wi,$a),Et&&et.fog===!0&&xt.refreshFogUniforms(wi,Et),xt.refreshMaterialUniforms(wi,et,it,Y,p.state.transmissionRenderTarget[A.id]),ca.upload(v,Ou(Ft),wi,rt)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ca.upload(v,Ou(Ft),wi,rt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Le.setValue(v,"center",W.center),Le.setValue(v,"modelViewMatrix",W.modelViewMatrix),Le.setValue(v,"normalMatrix",W.normalMatrix),Le.setValue(v,"modelMatrix",W.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Sn=et.uniformsGroups;for(let Za=0,Nm=Sn.length;Za<Nm;Za++){const Bu=Sn[Za];ne.update(Bu,Ln),ne.bind(Bu,Ln)}}return Ln}function Dm(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Um(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,H,tt){st.get(A.texture).__webglTexture=H,st.get(A.depthTexture).__webglTexture=tt;const et=st.get(A);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const tt=st.get(A);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,tt=0){C=A,L=H,R=tt;let et=!0,W=null,Et=!1,Rt=!1;if(A){const Dt=st.get(A);Dt.__useDefaultFramebuffer!==void 0?(O.bindFramebuffer(v.FRAMEBUFFER,null),et=!1):Dt.__webglFramebuffer===void 0?rt.setupRenderTarget(A):Dt.__hasExternalTextures&&rt.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Rt=!0);const Xt=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?W=Xt[H][tt]:W=Xt[H],Et=!0):A.samples>0&&rt.useMultisampledRTT(A)===!1?W=st.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?W=Xt[tt]:W=Xt,E.copy(A.viewport),P.copy(A.scissor),U=A.scissorTest}else E.copy(bt).multiplyScalar(it).floor(),P.copy(gt).multiplyScalar(it).floor(),U=Ut;if(O.bindFramebuffer(v.FRAMEBUFFER,W)&&et&&O.drawBuffers(A,W),O.viewport(E),O.scissor(P),O.setScissorTest(U),Et){const Dt=st.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,tt)}else if(Rt){const Dt=st.get(A.texture),Gt=H||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Dt.__webglTexture,tt||0,Gt)}I=-1},this.readRenderTargetPixels=function(A,H,tt,et,W,Et,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt){O.bindFramebuffer(v.FRAMEBUFFER,Lt);try{const Dt=A.texture,Gt=Dt.format,Xt=Dt.type;if(!nt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-et&&tt>=0&&tt<=A.height-W&&v.readPixels(H,tt,et,W,St.convert(Gt),St.convert(Xt),Et)}finally{const Dt=C!==null?st.get(C).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,H,tt,et,W,Et,Rt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt){O.bindFramebuffer(v.FRAMEBUFFER,Lt);try{const Dt=A.texture,Gt=Dt.format,Xt=Dt.type;if(!nt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-et&&tt>=0&&tt<=A.height-W){const kt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,kt),v.bufferData(v.PIXEL_PACK_BUFFER,Et.byteLength,v.STREAM_READ),v.readPixels(H,tt,et,W,St.convert(Gt),St.convert(Xt),0),v.flush();const ce=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);await Ny(v,ce,4);try{v.bindBuffer(v.PIXEL_PACK_BUFFER,kt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Et)}finally{v.deleteBuffer(kt),v.deleteSync(ce)}return Et}}finally{const Dt=C!==null?st.get(C).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(A,H=null,tt=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const et=Math.pow(2,-tt),W=Math.floor(A.image.width*et),Et=Math.floor(A.image.height*et),Rt=H!==null?H.x:0,Lt=H!==null?H.y:0;rt.setTexture2D(A,0),v.copyTexSubImage2D(v.TEXTURE_2D,tt,0,0,Rt,Lt,W,Et),O.unbindTexture()},this.copyTextureToTexture=function(A,H,tt=null,et=null,W=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,A=arguments[1],H=arguments[2],W=arguments[3]||0,tt=null);let Et,Rt,Lt,Dt,Gt,Xt;tt!==null?(Et=tt.max.x-tt.min.x,Rt=tt.max.y-tt.min.y,Lt=tt.min.x,Dt=tt.min.y):(Et=A.image.width,Rt=A.image.height,Lt=0,Dt=0),et!==null?(Gt=et.x,Xt=et.y):(Gt=0,Xt=0);const kt=St.convert(H.format),ce=St.convert(H.type);rt.setTexture2D(H,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,H.unpackAlignment);const Ee=v.getParameter(v.UNPACK_ROW_LENGTH),we=v.getParameter(v.UNPACK_IMAGE_HEIGHT),_n=v.getParameter(v.UNPACK_SKIP_PIXELS),ue=v.getParameter(v.UNPACK_SKIP_ROWS),Ft=v.getParameter(v.UNPACK_SKIP_IMAGES),He=A.isCompressedTexture?A.mipmaps[W]:A.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,He.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,He.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Dt),A.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,W,Gt,Xt,Et,Rt,kt,ce,He.data):A.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,W,Gt,Xt,He.width,He.height,kt,He.data):v.texSubImage2D(v.TEXTURE_2D,W,Gt,Xt,Et,Rt,kt,ce,He),v.pixelStorei(v.UNPACK_ROW_LENGTH,Ee),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,we),v.pixelStorei(v.UNPACK_SKIP_PIXELS,_n),v.pixelStorei(v.UNPACK_SKIP_ROWS,ue),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ft),W===0&&H.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(A,H,tt=null,et=null,W=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,et=arguments[1]||null,A=arguments[2],H=arguments[3],W=arguments[4]||0);let Et,Rt,Lt,Dt,Gt,Xt,kt,ce,Ee;const we=A.isCompressedTexture?A.mipmaps[W]:A.image;tt!==null?(Et=tt.max.x-tt.min.x,Rt=tt.max.y-tt.min.y,Lt=tt.max.z-tt.min.z,Dt=tt.min.x,Gt=tt.min.y,Xt=tt.min.z):(Et=we.width,Rt=we.height,Lt=we.depth,Dt=0,Gt=0,Xt=0),et!==null?(kt=et.x,ce=et.y,Ee=et.z):(kt=0,ce=0,Ee=0);const _n=St.convert(H.format),ue=St.convert(H.type);let Ft;if(H.isData3DTexture)rt.setTexture3D(H,0),Ft=v.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)rt.setTexture2DArray(H,0),Ft=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,H.unpackAlignment);const He=v.getParameter(v.UNPACK_ROW_LENGTH),he=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Ln=v.getParameter(v.UNPACK_SKIP_PIXELS),Es=v.getParameter(v.UNPACK_SKIP_ROWS),vn=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,we.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,we.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Dt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Gt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Xt),A.isDataTexture||A.isData3DTexture?v.texSubImage3D(Ft,W,kt,ce,Ee,Et,Rt,Lt,_n,ue,we.data):H.isCompressedArrayTexture?v.compressedTexSubImage3D(Ft,W,kt,ce,Ee,Et,Rt,Lt,_n,we.data):v.texSubImage3D(Ft,W,kt,ce,Ee,Et,Rt,Lt,_n,ue,we),v.pixelStorei(v.UNPACK_ROW_LENGTH,He),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,he),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ln),v.pixelStorei(v.UNPACK_SKIP_ROWS,Es),v.pixelStorei(v.UNPACK_SKIP_IMAGES,vn),W===0&&H.generateMipmaps&&v.generateMipmap(Ft),O.unbindTexture()},this.initRenderTarget=function(A){st.get(A).__webglFramebuffer===void 0&&rt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?rt.setTextureCube(A,0):A.isData3DTexture?rt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?rt.setTexture2DArray(A,0):rt.setTexture2D(A,0),O.unbindTexture()},this.resetState=function(){L=0,R=0,C=null,O.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===bu?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Xa?"display-p3":"srgb"}}let wm=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class Ww{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return rr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new D;class Ra{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ra(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cu extends vr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xs;const Pr=new D,qs=new D,js=new D,Ys=new It,Lr=new It,Tm=new le,qo=new D,Ir=new D,jo=new D,zf=new It,Gl=new It,kf=new It;class Am extends Ce{constructor(t=new Cu){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ww(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new Ra(i,3,0,!1)),Xs.setAttribute("uv",new Ra(i,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Tm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-js.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Yo(qo.set(-.5,-.5,0),js,o,qs,s,r),Yo(Ir.set(.5,-.5,0),js,o,qs,s,r),Yo(jo.set(.5,.5,0),js,o,qs,s,r),zf.set(0,0),Gl.set(1,0),kf.set(1,1);let a=t.ray.intersectTriangle(qo,Ir,jo,!1,Pr);if(a===null&&(Yo(Ir.set(-.5,.5,0),js,o,qs,s,r),Gl.set(0,1),a=t.ray.intersectTriangle(qo,jo,Ir,!1,Pr),a===null))return;const l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:Fn.getInterpolation(Pr,qo,Ir,jo,zf,Gl,kf,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yo(n,t,e,i,s,r){Ys.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Lr.x=r*Ys.x-s*Ys.y,Lr.y=s*Ys.x+r*Ys.y):Lr.copy(Ys),n.copy(t),n.x+=Lr.x,n.y+=Lr.y,n.applyMatrix4(Tm)}class Xw extends je{constructor(t=null,e=1,i=1,s,r,o,a,l,u=pn,c=pn,h,d){super(null,o,a,l,u,c,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hf extends Rn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $s=new le,Vf=new le,$o=[],Gf=new Ss,qw=new le,Dr=new ct,Ur=new _o;class Rm extends ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qw)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ss),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Gf.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Gf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _o),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Ur.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),t.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Vf.multiplyMatrices(i,$s),Dr.matrixWorld=Vf,Dr.raycast(t,$o);for(let o=0,a=$o.length;o<a;o++){const l=$o[o];l.instanceId=r,l.object=this,e.push(l)}$o.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xw(new Float32Array(s*this.count),s,this.count,xu,Jn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ei extends je{constructor(t,e,i,s,r,o,a,l,u){super(t,e,i,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ja extends gn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],u=new D,c=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const m=i+h/e*s;u.x=t*Math.cos(m),u.y=t*Math.sin(m),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[d]/t+1)/2,c.y=(o[d+1]/t+1)/2,l.push(c.x,c.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yt extends gn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],d=[],m=[];let g=0;const _=[],p=i/2;let f=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(m,2));function y(){const S=new D,L=new D;let R=0;const C=(e-t)/i;for(let I=0;I<=r;I++){const w=[],E=I/r,P=E*(e-t)+t;for(let U=0;U<=s;U++){const k=U/s,Z=k*l+a,ot=Math.sin(Z),Y=Math.cos(Z);L.x=P*ot,L.y=-E*i+p,L.z=P*Y,h.push(L.x,L.y,L.z),S.set(ot,C,Y).normalize(),d.push(S.x,S.y,S.z),m.push(k,1-E),w.push(g++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){const E=_[w][I],P=_[w+1][I],U=_[w+1][I+1],k=_[w][I+1];c.push(E,P,k),c.push(P,U,k),R+=6}u.addGroup(f,R,0),f+=R}function M(S){const L=g,R=new It,C=new D;let I=0;const w=S===!0?t:e,E=S===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,p*E,0),d.push(0,E,0),m.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const Z=U/s*l+a,ot=Math.cos(Z),Y=Math.sin(Z);C.x=w*Y,C.y=p*E,C.z=w*ot,h.push(C.x,C.y,C.z),d.push(0,E,0),R.x=ot*.5+.5,R.y=Y*.5*E+.5,m.push(R.x,R.y),g++}for(let U=0;U<s;U++){const k=L+U,Z=P+U;S===!0?c.push(Z,Z+1,k):c.push(Z+1,Z,k),I+=3}u.addGroup(f,I,S===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ro extends Yt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ro(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pu extends gn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),u(i),c(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new D,S=new D,L=new D;for(let R=0;R<e.length;R+=3)m(e[R+0],M),m(e[R+1],S),m(e[R+2],L),l(M,S,L,y)}function l(y,M,S,L){const R=L+1,C=[];for(let I=0;I<=R;I++){C[I]=[];const w=y.clone().lerp(S,I/R),E=M.clone().lerp(S,I/R),P=R-I;for(let U=0;U<=P;U++)U===0&&I===R?C[I][U]=w:C[I][U]=w.clone().lerp(E,U/P)}for(let I=0;I<R;I++)for(let w=0;w<2*(R-I)-1;w++){const E=Math.floor(w/2);w%2===0?(d(C[I][E+1]),d(C[I+1][E]),d(C[I][E])):(d(C[I][E+1]),d(C[I+1][E+1]),d(C[I+1][E]))}}function u(y){const M=new D;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(y),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function c(){const y=new D;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const S=p(y)/2/Math.PI+.5,L=f(y)/Math.PI+.5;o.push(S,1-L)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const M=o[y+0],S=o[y+2],L=o[y+4],R=Math.max(M,S,L),C=Math.min(M,S,L);R>.9&&C<.1&&(M<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function m(y,M){const S=y*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function g(){const y=new D,M=new D,S=new D,L=new D,R=new It,C=new It,I=new It;for(let w=0,E=0;w<r.length;w+=9,E+=6){y.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),R.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),L.copy(y).add(M).add(S).divideScalar(3);const P=p(L);_(R,E+0,y,P),_(C,E+2,M,P),_(I,E+4,S,P)}}function _(y,M,S,L){L<0&&y.x===1&&(o[M]=y.x-1),S.x===0&&S.z===0&&(o[M]=L/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.vertices,t.indices,t.radius,t.details)}}class Lu extends gn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],u=[],c=[];let h=t;const d=(e-t)/s,m=new D,g=new It;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const f=r+p/i*o;m.x=h*Math.cos(f),m.y=h*Math.sin(f),l.push(m.x,m.y,m.z),u.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,c.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const p=_*(i+1);for(let f=0;f<i;f++){const y=f+p,M=y,S=y+i+1,L=y+i+2,R=y+1;a.push(M,S,R),a.push(S,L,R)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qe extends gn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new D,d=new D,m=[],g=[],_=[],p=[];for(let f=0;f<=i;f++){const y=[],M=f/i;let S=0;f===0&&o===0?S=.5/e:f===i&&l===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const R=L/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(R+S,1-M),y.push(u++)}c.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){const M=c[f][y+1],S=c[f][y],L=c[f+1][y],R=c[f+1][y+1];(f!==0||o>0)&&m.push(M,S,R),(f!==i-1||l<Math.PI)&&m.push(S,L,R)}this.setIndex(m),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Iu extends Pu{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Iu(t.radius,t.detail)}}class bs extends gn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],u=[],c=new D,h=new D,d=new D;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(_),h.y=(t+e*Math.cos(p))*Math.sin(_),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(h,c).normalize(),l.push(d.x,d.y,d.z),u.push(g/s),u.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,y=(s+1)*m+g;o.push(_,p,y),o.push(p,f,y)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vt extends vr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rm,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oo extends Vt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Wf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jw{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const m=u[h],g=u[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}}const Yw=new jw;class Du{constructor(t){this.manager=t!==void 0?t:Yw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Du.DEFAULT_MATERIAL_NAME="__DEFAULT";class $w extends Du{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Wf.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=so("img");function l(){c(),Wf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(h){c(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Kw extends Du{constructor(t){super(t)}load(t,e,i,s){const r=new je,o=new $w(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Uu extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Wl=new le,Xf=new D,qf=new D;class Cm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Xf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xf),qf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qf),e.updateMatrixWorld(),Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zw extends Cm{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=pr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Pm extends Uu{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zw}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const jf=new le,Nr=new D,Xl=new D;class Jw extends Cm{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Nr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Nr),Xl.copy(i.position),Xl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Xl),i.updateMatrixWorld(),s.makeTranslation(-Nr.x,-Nr.y,-Nr.z),jf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf)}}class Zn extends Uu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jw}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qw extends Uu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yf(){return(typeof performance>"u"?Date:performance).now()}const $f=new le;class t1{constructor(t,e,i=0,s=1/0){this.ray=new wu(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $f.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($f),this}intersectObject(t,e=!0,i=[]){return Wc(t,this,i,e),i.sort(Kf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Wc(t[s],this,i,e);return i.sort(Kf),i}}function Kf(n,t){return n.distance-t.distance}function Wc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Wc(r[o],t,e,!0)}}class Zf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(We(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);class e1 extends EventTarget{constructor(t){super(),this.container=t,this.width=0,this.height=0,this.pixelRatio=1,this.handleResize=()=>{this.update(),this.dispatchEvent(new Event("resize"))},this.update(),window.addEventListener("resize",this.handleResize,{passive:!0})}update(){this.width=this.container.clientWidth,this.height=this.container.clientHeight;const t=this.width<=768?1:1.5;this.pixelRatio=Math.min(window.devicePixelRatio,t)}destroy(){window.removeEventListener("resize",this.handleResize)}}class n1{constructor(){this.instance=new wm}}const Jf={type:"change"},ql={type:"start"},Qf={type:"end"},Ko=new wu,td=new Ni,i1=Math.cos(70*xe.DEG2RAD);class s1 extends Ms{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",mt),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",mt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Jf),i.update(),r=s.NONE},this.update=(function(){const b=new D,j=new Vi().setFromUnitVectors(t.up,new D(0,1,0)),J=j.clone().invert(),at=new D,_t=new Vi,Ot=new D,Wt=2*Math.PI;return function(Ue=null){const ie=i.object.position;b.copy(ie).sub(i.target),b.applyQuaternion(j),a.setFromVector3(b),i.autoRotate&&r===s.NONE&&U(E(Ue)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ne=i.minAzimuthAngle,Pe=i.maxAzimuthAngle;isFinite(Ne)&&isFinite(Pe)&&(Ne<-Math.PI?Ne+=Wt:Ne>Math.PI&&(Ne-=Wt),Pe<-Math.PI?Pe+=Wt:Pe>Math.PI&&(Pe-=Wt),Ne<=Pe?a.theta=Math.max(Ne,Math.min(Pe,a.theta)):a.theta=a.theta>(Ne+Pe)/2?Math.max(Ne,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ei=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=bt(a.radius);else{const ke=a.radius;a.radius=bt(a.radius*u),Ei=ke!=a.radius}if(b.setFromSpherical(a),b.applyQuaternion(J),ie.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&R){let ke=null;if(i.object.isPerspectiveCamera){const ni=b.length();ke=bt(ni*u);const Xi=ni-ke;i.object.position.addScaledVector(S,Xi),i.object.updateMatrixWorld(),Ei=!!Xi}else if(i.object.isOrthographicCamera){const ni=new D(L.x,L.y,0);ni.unproject(i.object);const Xi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ei=Xi!==i.object.zoom;const yr=new D(L.x,L.y,0);yr.unproject(i.object),i.object.position.sub(yr).add(ni),i.object.updateMatrixWorld(),ke=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ke).add(i.object.position):(Ko.origin.copy(i.object.position),Ko.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ko.direction))<i1?t.lookAt(i.target):(td.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ko.intersectPlane(td,i.target))))}else if(i.object.isOrthographicCamera){const ke=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),ke!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ei=!0)}return u=1,R=!1,Ei||at.distanceToSquared(i.object.position)>o||8*(1-_t.dot(i.object.quaternion))>o||Ot.distanceToSquared(i.target)>o?(i.dispatchEvent(Jf),at.copy(i.object.position),_t.copy(i.object.quaternion),Ot.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",wt),i.domElement.removeEventListener("pointerdown",rt),i.domElement.removeEventListener("pointercancel",x),i.domElement.removeEventListener("wheel",K),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",x),i.domElement.getRootNode().removeEventListener("keydown",xt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",mt),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Zf,l=new Zf;let u=1;const c=new D,h=new It,d=new It,m=new It,g=new It,_=new It,p=new It,f=new It,y=new It,M=new It,S=new D,L=new It;let R=!1;const C=[],I={};let w=!1;function E(b){return b!==null?2*Math.PI/60*i.autoRotateSpeed*b:2*Math.PI/60/60*i.autoRotateSpeed}function P(b){const j=Math.abs(b*.01);return Math.pow(.95,i.zoomSpeed*j)}function U(b){l.theta-=b}function k(b){l.phi-=b}const Z=(function(){const b=new D;return function(J,at){b.setFromMatrixColumn(at,0),b.multiplyScalar(-J),c.add(b)}})(),ot=(function(){const b=new D;return function(J,at){i.screenSpacePanning===!0?b.setFromMatrixColumn(at,1):(b.setFromMatrixColumn(at,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(J),c.add(b)}})(),Y=(function(){const b=new D;return function(J,at){const _t=i.domElement;if(i.object.isPerspectiveCamera){const Ot=i.object.position;b.copy(Ot).sub(i.target);let Wt=b.length();Wt*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*J*Wt/_t.clientHeight,i.object.matrix),ot(2*at*Wt/_t.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(J*(i.object.right-i.object.left)/i.object.zoom/_t.clientWidth,i.object.matrix),ot(at*(i.object.top-i.object.bottom)/i.object.zoom/_t.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function it(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function yt(b,j){if(!i.zoomToCursor)return;R=!0;const J=i.domElement.getBoundingClientRect(),at=b-J.left,_t=j-J.top,Ot=J.width,Wt=J.height;L.x=at/Ot*2-1,L.y=-(_t/Wt)*2+1,S.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function bt(b){return Math.max(i.minDistance,Math.min(i.maxDistance,b))}function gt(b){h.set(b.clientX,b.clientY)}function Ut(b){yt(b.clientX,b.clientX),f.set(b.clientX,b.clientY)}function qt(b){g.set(b.clientX,b.clientY)}function lt(b){d.set(b.clientX,b.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;U(2*Math.PI*m.x/j.clientHeight),k(2*Math.PI*m.y/j.clientHeight),h.copy(d),i.update()}function vt(b){y.set(b.clientX,b.clientY),M.subVectors(y,f),M.y>0?it(P(M.y)):M.y<0&&q(P(M.y)),f.copy(y),i.update()}function pt(b){_.set(b.clientX,b.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),Y(p.x,p.y),g.copy(_),i.update()}function Mt(b){yt(b.clientX,b.clientY),b.deltaY<0?q(P(b.deltaY)):b.deltaY>0&&it(P(b.deltaY)),i.update()}function Nt(b){let j=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),j=!0;break}j&&(b.preventDefault(),i.update())}function Ht(b){if(C.length===1)h.set(b.pageX,b.pageY);else{const j=Pt(b),J=.5*(b.pageX+j.x),at=.5*(b.pageY+j.y);h.set(J,at)}}function zt(b){if(C.length===1)g.set(b.pageX,b.pageY);else{const j=Pt(b),J=.5*(b.pageX+j.x),at=.5*(b.pageY+j.y);g.set(J,at)}}function oe(b){const j=Pt(b),J=b.pageX-j.x,at=b.pageY-j.y,_t=Math.sqrt(J*J+at*at);f.set(0,_t)}function v(b){i.enableZoom&&oe(b),i.enablePan&&zt(b)}function N(b){i.enableZoom&&oe(b),i.enableRotate&&Ht(b)}function V(b){if(C.length==1)d.set(b.pageX,b.pageY);else{const J=Pt(b),at=.5*(b.pageX+J.x),_t=.5*(b.pageY+J.y);d.set(at,_t)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;U(2*Math.PI*m.x/j.clientHeight),k(2*Math.PI*m.y/j.clientHeight),h.copy(d)}function nt(b){if(C.length===1)_.set(b.pageX,b.pageY);else{const j=Pt(b),J=.5*(b.pageX+j.x),at=.5*(b.pageY+j.y);_.set(J,at)}p.subVectors(_,g).multiplyScalar(i.panSpeed),Y(p.x,p.y),g.copy(_)}function O(b){const j=Pt(b),J=b.pageX-j.x,at=b.pageY-j.y,_t=Math.sqrt(J*J+at*at);y.set(0,_t),M.set(0,Math.pow(y.y/f.y,i.zoomSpeed)),it(M.y),f.copy(y);const Ot=(b.pageX+j.x)*.5,Wt=(b.pageY+j.y)*.5;yt(Ot,Wt)}function Q(b){i.enableZoom&&O(b),i.enablePan&&nt(b)}function st(b){i.enableZoom&&O(b),i.enableRotate&&V(b)}function rt(b){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",x)),!X(b)&&(ht(b),b.pointerType==="touch"?Ct(b):F(b)))}function T(b){i.enabled!==!1&&(b.pointerType==="touch"?ft(b):G(b))}function x(b){switch(z(b),C.length){case 0:i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",x),i.dispatchEvent(Qf),r=s.NONE;break;case 1:const j=C[0],J=I[j];Ct({pointerId:j,pageX:J.x,pageY:J.y});break}}function F(b){let j;switch(b.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case pi.DOLLY:if(i.enableZoom===!1)return;Ut(b),r=s.DOLLY;break;case pi.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;qt(b),r=s.PAN}else{if(i.enableRotate===!1)return;gt(b),r=s.ROTATE}break;case pi.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;gt(b),r=s.ROTATE}else{if(i.enablePan===!1)return;qt(b),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(ql)}function G(b){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;lt(b);break;case s.DOLLY:if(i.enableZoom===!1)return;vt(b);break;case s.PAN:if(i.enablePan===!1)return;pt(b);break}}function K(b){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(b.preventDefault(),i.dispatchEvent(ql),Mt($(b)),i.dispatchEvent(Qf))}function $(b){const j=b.deltaMode,J={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(j){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return b.ctrlKey&&!w&&(J.deltaY*=10),J}function xt(b){b.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",dt,{passive:!0,capture:!0}))}function dt(b){b.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",dt,{passive:!0,capture:!0}))}function mt(b){i.enabled===!1||i.enablePan===!1||Nt(b)}function Ct(b){switch(St(b),C.length){case 1:switch(i.touches.ONE){case Ui.ROTATE:if(i.enableRotate===!1)return;Ht(b),r=s.TOUCH_ROTATE;break;case Ui.PAN:if(i.enablePan===!1)return;zt(b),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Ui.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;v(b),r=s.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(b),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(ql)}function ft(b){switch(St(b),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;V(b),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;nt(b),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Q(b),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;st(b),i.update();break;default:r=s.NONE}}function wt(b){i.enabled!==!1&&b.preventDefault()}function ht(b){C.push(b.pointerId)}function z(b){delete I[b.pointerId];for(let j=0;j<C.length;j++)if(C[j]==b.pointerId){C.splice(j,1);return}}function X(b){for(let j=0;j<C.length;j++)if(C[j]==b.pointerId)return!0;return!1}function St(b){let j=I[b.pointerId];j===void 0&&(j=new It,I[b.pointerId]=j),j.set(b.pageX,b.pageY)}function Pt(b){const j=b.pointerId===C[0]?C[1]:C[0];return I[j]}i.domElement.addEventListener("contextmenu",wt),i.domElement.addEventListener("pointerdown",rt),i.domElement.addEventListener("pointercancel",x),i.domElement.addEventListener("wheel",K,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",xt,{passive:!0,capture:!0}),this.update()}}class r1{constructor(t,e){this.sizes=t,this.domElement=e,this.hasOrientationPermission=!1,this.orientationActive=!1,this.defaultPosition=new D(-4,1.7,7),this.initialTarget=new D(1.2,1.35,-2.5),this.fallbackAngle=0,this.isMobile=window.matchMedia("(max-width: 768px)").matches,this.lastUserInteraction=0,this.isUserInteracting=!1,this.navigationRoot=null,this.navigationTarget=null,this.navigationPosition=null,this.pointerStart=new It,this.pointerMoved=!1,this.raycaster=new t1,this.pointer=new It,this.baseOffset=new D,this.previousTarget=new D,this.targetOffset=new D,this.verticalAxis=new D(0,1,0),this.interactiveObjects=[],this.minTarget=new D(-4.25,.65,-4.25),this.maxTarget=new D(4.25,3.8,4.25),this.startOrientationTracking=()=>{this.hasOrientationPermission||(typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(i=>{i==="granted"&&(this.hasOrientationPermission=!0,this.orientationActive=!0)}).catch(console.error):(this.hasOrientationPermission=!0,this.orientationActive=!0))},this.markInteraction=()=>{this.lastUserInteraction=performance.now(),this.isUserInteracting=!0},this.endInteraction=()=>{this.constrainTarget(),this.defaultPosition.copy(this.instance.position),this.initialTarget.copy(this.controls.target),this.fallbackAngle=0,this.isUserInteracting=!1,this.lastUserInteraction=performance.now()},this.handleNavigationPointerDown=i=>{i.button===0&&(this.pointerStart.set(i.clientX,i.clientY),this.pointerMoved=!1,this.navigationTarget=null,this.navigationPosition=null)},this.handleNavigationPointerMove=i=>{Math.hypot(i.clientX-this.pointerStart.x,i.clientY-this.pointerStart.y)>8&&(this.pointerMoved=!0)},this.handleNavigationPointerUp=i=>{if(i.button!==0||this.pointerMoved||!this.navigationRoot)return;const s=this.domElement.getBoundingClientRect();this.pointer.set((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.instance);const r=this.raycaster.intersectObject(this.navigationRoot,!0),o=r[0];if(!o)return;const a=r.map(({object:c})=>this.interactiveObjects.find(({root:h})=>{let d=c;for(;d;){if(d===h)return!0;d=d.parent}return!1})).find(c=>c!==void 0);if(a){a.action();return}const l=new D(xe.clamp(o.point.x,this.minTarget.x,this.maxTarget.x),1.7,xe.clamp(o.point.z,this.minTarget.z,this.maxTarget.z)),u=this.controls.target.clone().sub(this.instance.position);this.navigationPosition=l,this.navigationTarget=l.clone().add(u).clamp(this.minTarget,this.maxTarget),this.lastUserInteraction=performance.now(),this.fallbackAngle=0},this.setInstance(),this.setControls(),this.initOrientation(),this.initPointNavigation()}setInstance(){this.instance=new dn(60,this.sizes.width/this.sizes.height,.1,100),this.instance.position.copy(this.defaultPosition)}setControls(){this.controls=new s1(this.instance,this.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enablePan=!0,this.controls.panSpeed=.72,this.controls.screenSpacePanning=!1,this.controls.enableZoom=!0,this.controls.minDistance=2,this.controls.maxDistance=11,this.controls.target.copy(this.initialTarget),this.controls.minAzimuthAngle=-Math.PI,this.controls.maxAzimuthAngle=Math.PI,this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/1.7,this.controls.mouseButtons.LEFT=pi.ROTATE,this.controls.mouseButtons.MIDDLE=pi.DOLLY,this.controls.mouseButtons.RIGHT=pi.PAN,this.controls.touches.ONE=Ui.ROTATE,this.controls.touches.TWO=Ui.DOLLY_PAN,this.controls.listenToKeyEvents(window),this.controls.update()}initOrientation(){typeof window>"u"||typeof window.DeviceOrientationEvent>"u"||(window.addEventListener("pointerdown",this.startOrientationTracking,{once:!0,passive:!0}),window.addEventListener("touchstart",this.startOrientationTracking,{once:!0,passive:!0}),window.addEventListener("pointerdown",this.markInteraction,{passive:!0}),window.addEventListener("touchstart",this.markInteraction,{passive:!0}),window.addEventListener("wheel",this.markInteraction,{passive:!0}),window.addEventListener("pointerup",this.endInteraction,{passive:!0}),window.addEventListener("touchend",this.endInteraction,{passive:!0}),window.addEventListener("pointercancel",this.endInteraction,{passive:!0}),DeviceOrientationEvent.requestPermission||(this.hasOrientationPermission=!0,this.orientationActive=!0))}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}setNavigationRoot(t){this.navigationRoot=t}addInteraction(t,e){this.interactiveObjects.push({root:t,action:e})}update(){const e=performance.now()-this.lastUserInteraction;if(this.navigationTarget&&this.navigationPosition&&(this.controls.target.lerp(this.navigationTarget,.075),this.instance.position.lerp(this.navigationPosition,.075),this.controls.target.distanceToSquared(this.navigationTarget)<.001&&(this.controls.target.copy(this.navigationTarget),this.instance.position.copy(this.navigationPosition),this.defaultPosition.copy(this.instance.position),this.initialTarget.copy(this.controls.target),this.navigationTarget=null,this.navigationPosition=null)),!this.isMobile&&e>3e3&&!this.isUserInteracting&&!this.navigationTarget){this.fallbackAngle+=.018;const s=Math.sin(this.fallbackAngle)*.22;this.baseOffset.copy(this.defaultPosition).sub(this.initialTarget),this.baseOffset.applyAxisAngle(this.verticalAxis,s),this.instance.position.copy(this.initialTarget).add(this.baseOffset),this.controls.target.copy(this.initialTarget)}this.controls.update(),this.constrainTarget()}constrainTarget(){this.previousTarget.copy(this.controls.target),this.controls.target.clamp(this.minTarget,this.maxTarget),this.targetOffset.copy(this.controls.target).sub(this.previousTarget),this.instance.position.add(this.targetOffset)}initPointNavigation(){this.domElement.addEventListener("pointerdown",this.handleNavigationPointerDown,{passive:!0}),this.domElement.addEventListener("pointermove",this.handleNavigationPointerMove,{passive:!0}),this.domElement.addEventListener("pointerup",this.handleNavigationPointerUp,{passive:!0})}destroy(){window.removeEventListener("pointerdown",this.startOrientationTracking),window.removeEventListener("touchstart",this.startOrientationTracking),window.removeEventListener("pointerdown",this.markInteraction),window.removeEventListener("touchstart",this.markInteraction),window.removeEventListener("wheel",this.markInteraction),window.removeEventListener("pointerup",this.endInteraction),window.removeEventListener("touchend",this.endInteraction),window.removeEventListener("pointercancel",this.endInteraction),this.domElement.removeEventListener("pointerdown",this.handleNavigationPointerDown),this.domElement.removeEventListener("pointermove",this.handleNavigationPointerMove),this.domElement.removeEventListener("pointerup",this.handleNavigationPointerUp),this.controls.dispose(),this.interactiveObjects=[]}}class o1{constructor(t,e){this.sizes=t,this.container=e,this.setInstance()}setInstance(){const t=window.matchMedia("(max-width: 768px)").matches;this.instance=new Gw({alpha:!0,antialias:!t,powerPreference:"high-performance"}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.setClearColor(657938,0),this.instance.shadowMap.enabled=!t,this.instance.shadowMap.type=qp,this.instance.toneMapping=Yp,Object.assign(this.instance.domElement.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),this.container.appendChild(this.instance.domElement)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}render(t,e){this.instance.render(t,e)}}class a1{constructor(t=10,e=10,i=8){this.palette=["#00d9ff","#ff287f","#ffd84d","#ff6b24","#65ff75"],this.elapsed=0,this.colorUpdateElapsed=Number.POSITIVE_INFINITY,this.colorUpdateInterval=window.innerWidth<=768?.12:.07,this.mesh=new Qt,this.gridSize=i;const s=new Re(t,e),r=new Vt({color:328200,roughness:.9}),o=new ct(s,r);o.rotation.x=-Math.PI/2,o.position.y=-.01,this.mesh.add(o);const a=document.createElement("canvas");a.width=256,a.height=256,this.floorContext=a.getContext("2d"),this.drawTiles(0),this.floorTexture=new ei(a),this.floorTexture.colorSpace=Ze,this.floorTexture.generateMipmaps=!1,this.floorTexture.minFilter=qe,this.floorTexture.magFilter=qe;const l=new ct(new Re(t,e),new Se({map:this.floorTexture,side:De,toneMapped:!1}));l.rotation.x=-Math.PI/2,l.position.y=0,l.receiveShadow=!0,this.mesh.add(l);const u=new Kw().load("/images/totem.webp");u.colorSpace=Ze,u.anisotropy=8;const c=new ct(new Re(5,4.88),new Se({map:u,transparent:!0,alphaTest:.02,depthWrite:!1,side:De}));c.rotation.x=-Math.PI/2,c.position.set(0,.025,.45),c.renderOrder=2,this.mesh.add(c)}drawTiles(t){const e=this.floorContext.canvas.width,i=e/this.gridSize,s=2,r=5.8,o=Math.floor(t/r)%3,a=t%r;this.floorContext.globalAlpha=1,this.floorContext.fillStyle="#030206",this.floorContext.fillRect(0,0,e,e);for(let l=0;l<this.gridSize;l++)for(let u=0;u<this.gridSize;u++){let c=0;if(o===0){const g=(l+u)%this.gridSize,_=a*1.35%this.gridSize,p=Math.abs(g-_),f=Math.min(p,this.gridSize-p);c=Math.pow(Math.max(0,1-f/1.45),2)}else if(o===1){const g=(this.gridSize-1)/2,_=u-g,p=l-g,f=Math.atan2(p,_),y=Math.hypot(_,p),M=f+y*.78-a*1.15;c=Math.pow((Math.cos(M)+1)/2,7)*Math.max(.25,1-y/8)}else{const g=(this.gridSize-1)/2,_=Math.abs(l-g)+Math.abs(u-g),p=a*1.45%(this.gridSize-1);c=Math.pow(Math.max(0,1-Math.abs(_-p)/1.15),2.2)}const h=u*i+s/2,d=l*i+s/2,m=i-s;this.floorContext.fillStyle=this.palette[(l*2+u)%this.palette.length],this.floorContext.globalAlpha=.17+c*.61,this.floorContext.fillRect(h,d,m,m)}this.floorContext.globalAlpha=1}update(t){this.elapsed+=t,this.colorUpdateElapsed+=t,!(this.colorUpdateElapsed<this.colorUpdateInterval)&&(this.colorUpdateElapsed=0,this.drawTiles(this.elapsed),this.floorTexture.needsUpdate=!0)}}class l1{constructor(t,e,i){const s=new Re(t,e),r=new Vt({color:4473941,roughness:.6,metalness:.1});this.mesh=new ct(s,r),this.mesh.rotation.x=Math.PI*.5,this.mesh.position.set(0,i,0),this.mesh.receiveShadow=!0}}class c1{constructor(t,e,i){this.group=new Qt;const s=new Vt({color:5592422,roughness:.5,metalness:.1}),r=6.2,o=3.5,a=-.65,l=e/2,u=a-r/2,c=a+r/2,h=u+t/2,d=t/2-c,m=l-o/2,g=e-(l+o/2),p=[{width:h,height:e,x:-t/2+h/2,y:e/2},{width:d,height:e,x:c+d/2,y:e/2},{width:r,height:m,x:a,y:m/2},{width:r,height:g,x:a,y:e-g/2}].map(C=>{const I=new ct(new Re(C.width,C.height),s);return I.position.set(C.x,C.y,-i/2),I.receiveShadow=!0,I}),f=new Re(i,e),y=new ct(f,s);y.position.set(-t/2,e/2,0),y.rotation.y=Math.PI/2,y.receiveShadow=!0;const M=new Re(i,e),S=new ct(M,s);S.position.set(t/2,e/2,0),S.rotation.y=-Math.PI/2,S.receiveShadow=!0;const L=s.clone();L.side=hn;const R=new ct(new Re(t,e),L);R.position.set(0,e/2,i/2),R.receiveShadow=!0,this.group.add(...p,y,S,R)}}class u1{constructor(t){this.lastSecond=-1,this.group=new Qt,this.targetDate=t;const e=window.matchMedia("(max-width: 768px)").matches?.5:1;this.canvas=document.createElement("canvas"),this.canvas.width=2048*e,this.canvas.height=512*e,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(e,e),this.texture=new ei(this.canvas),this.texture.minFilter=qe;const i=3.6,s=1,r=new se(i,s,.1),o=new Vt({color:657935,metalness:.8,roughness:.2}),a=new ct(r,o),l=new se(i+.12,s+.12,.02),u=new Vt({color:16711807,emissive:16711807,emissiveIntensity:1.8}),c=new ct(l,u);c.position.z=-.02;const h=new Re(i-.2,s-.2),d=new Se({map:this.texture,transparent:!0,side:De}),m=new ct(h,d);m.position.z=.055,this.group.add(a,c,m),this.group.position.set(4.85,2.95,1.45),this.group.rotation.y=-Math.PI/2,this.updateText()}setTargetDate(t){this.targetDate=t,this.updateText()}updateText(){const t=new Date().getTime(),e=this.targetDate.getTime()-t;let i="00d  00h  00m  00s";if(e>0){const r=Math.floor(e/864e5),o=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),a=Math.floor(e%(1e3*60*60)/(1e3*60)),l=Math.floor(e%(1e3*60)/1e3),u=String(r).padStart(2,"0"),c=String(o).padStart(2,"0"),h=String(a).padStart(2,"0"),d=String(l).padStart(2,"0");i=`${u}d  ${c}h  ${h}m  ${d}s`}this.ctx.clearRect(0,0,2048,512),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,2048,512);const s=1024;this.ctx.font='900 92px "Courier New", monospace',this.ctx.textAlign="center",this.ctx.shadowColor="#ff0055",this.ctx.shadowBlur=25,this.ctx.fillStyle="#ff88aa",this.ctx.fillText("ALLA FESTA MANCANO:",s,115),this.ctx.font='700 68px "Courier New", monospace',this.ctx.shadowBlur=14,this.ctx.fillStyle="#ffffff",this.ctx.fillText("30 OTTOBRE 2026 · 21:30",s,225),this.ctx.font='900 122px "Courier New", monospace',this.ctx.fillStyle="rgba(40, 0, 20, 0.4)",this.ctx.shadowBlur=0,this.ctx.fillText("88d  88h  88m  88s",s,415),this.ctx.font='900 122px "Courier New", monospace',this.ctx.shadowColor="#ff0055",this.ctx.shadowBlur=25,this.ctx.fillStyle="#ffffff",this.ctx.fillText(i,s,415),this.texture.needsUpdate=!0}update(){const t=Math.floor(Date.now()/1e3);t!==this.lastSecond&&(this.lastSecond=t,this.updateText())}updateVisibility(t){this.group.visible=t.x<4.85}}class Ya{constructor(t=6813672){this.rings=[],this.elapsed=0,this.active=!1,this.group=new Qt,[0,.5].forEach(s=>{const r=new Se({color:t,transparent:!0,opacity:.8,blending:cr,depthWrite:!1,side:De}),o=new ct(new Lu(.13,.18,32),r);this.group.add(o),this.rings.push({mesh:o,material:r,phase:s})});const e=new Vt({color:t,emissive:t,emissiveIntensity:2.2,transparent:!0,opacity:.9}),i=new ct(new ja(.07,24),e);i.position.z=.006,this.group.add(i)}setActive(t){this.active=t}update(t){this.elapsed+=t,this.rings.forEach(e=>{const i=(this.elapsed*(this.active?.65:.45)+e.phase)%1,s=1+i*1.8;e.mesh.scale.setScalar(s),e.material.opacity=(1-i)*(this.active?.95:.68)})}}class h1{constructor(){this.turntables=[],this.platters=[],this.scratchTime=0,this.group=new Qt;const t=new Vt({color:1118485,roughness:.2,metalness:.5}),e=new Vt({color:3355443,metalness:.8,roughness:.2}),i=new Vt({color:328965,roughness:.3,metalness:.1}),s=new se(2.2,1,.9),r=new ct(s,t);r.position.y=.5,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const o=new se(2.1,.05,.02),a=new Vt({color:16711816,emissive:16711816,emissiveIntensity:1.5}),l=new ct(o,a);l.position.set(0,.8,.46),this.group.add(l);const u=new se(.5,.06,.4),c=new Yt(.18,.18,.02,32);[-.6,.6].forEach(_=>{const p=new Qt;p.position.x=_;const f=new ct(u,e);f.position.set(0,1.03,0),p.add(f);const y=new Qt;y.position.y=1.07;const M=new ct(c,i);y.add(M);const S=new Yt(.06,.06,.022,16),L=new Se({color:_<0?55807:16711765}),R=new ct(S,L);R.position.y=.012,y.add(R),p.add(y),this.turntables.push(p),this.platters.push(y),this.group.add(p)});const h=new se(.45,.07,.45),d=new ct(h,e);d.position.set(0,1.03,0),this.group.add(d);for(let _=0;_<4;_++){const p=new se(.03,.02,.03),f=new Se({color:_%2===0?65280:16711680}),y=new ct(p,f);y.position.set(-.1+_*.06,1.07,-.1),this.group.add(y)}const m=new se(.4,.7,.4),g=new Vt({color:1710618,roughness:.6});[-1.2,1.2].forEach(_=>{const p=new ct(m,g);p.position.set(_,1.15,-.1),p.rotation.y=_<0?.3:-.3,this.group.add(p)}),this.interactionPulse=new Ya,this.interactionPulse.group.position.set(0,.5,.472),this.group.add(this.interactionPulse.group),this.group.position.set(3.5,0,-3.5),this.group.rotation.y=-Math.PI/4}update(t){this.interactionPulse.update(t),this.scratchTime=Math.max(0,this.scratchTime-t);const e=this.scratchTime>0?18:1.8;this.platters.forEach((i,s)=>{i.rotation.y+=t*e*(s===0?1:-1)})}setPlaying(t){this.interactionPulse.setActive(t)}scratch(){this.scratchTime=1.1}}class f1{constructor(){this.backWallElements=[],this.rightWallElements=[],this.group=new Qt;const t=(a,l="6",u=512,c=1.6)=>{const h=document.createElement("canvas");h.width=u,h.height=768;const d=h.getContext("2d");d.clearRect(0,0,h.width,h.height),d.textAlign=a,d.textBaseline="middle",d.font='600 540px "Trebuchet MS", sans-serif',d.shadowColor="#ff007f",d.shadowBlur=50,d.lineWidth=9,d.strokeStyle="#ff007f";const m=a==="right"?h.width-12:12;d.strokeText(l,m,h.height/2),d.shadowBlur=15,d.shadowColor="#ffffff",d.fillStyle="#ffe6f2",d.fillText(l,m,h.height/2);const g=new ei(h);return g.minFilter=qe,new ct(new Re(c,2.4),new Se({map:g,transparent:!0,side:De,depthWrite:!1}))},e=t("right","'6",640,2);e.position.set(3.95,4.05,-4.94);const i=t("left");i.position.set(4.94,4.05,-4.15),i.rotation.y=-Math.PI/2,this.group.add(e,i),this.backWallElements.push(e),this.rightWallElements.push(i);const s=(a,l)=>{const u=document.createElement("canvas");u.width=1024,u.height=256;const c=u.getContext("2d");c.clearRect(0,0,u.width,u.height),c.textAlign=l,c.textBaseline="middle",c.font='600 174px "Trebuchet MS", sans-serif',c.shadowColor="#b8ff42",c.shadowBlur=38,c.lineWidth=5,c.strokeStyle="#b8ff42";const h=l==="right"?u.width-12:12;c.strokeText(a,h,u.height/2),c.shadowColor="#ffffff",c.shadowBlur=10,c.fillStyle="#f4ffd8",c.fillText(a,h,u.height/2);const d=new ei(u);return d.minFilter=qe,new ct(new Re(3.2,.8),new Se({map:d,transparent:!0,side:De,depthWrite:!1}))},r=s("CELEB","right");r.position.set(3.35,3.1,-4.94);const o=s("RATION","left");o.position.set(4.94,3.1,-3.35),o.rotation.y=-Math.PI/2,this.group.add(r,o),this.backWallElements.push(r),this.rightWallElements.push(o)}updateVisibility(t){const e=t.z>-4.95,i=t.x<4.95;this.backWallElements.forEach(s=>{s.visible=e}),this.rightWallElements.forEach(s=>{s.visible=i})}}class ed{constructor(){this.particles=[],this.transform=new Ce,this.count=150,this.roomSize=10,this.roomHeight=4,this.clock=new Lm,this.group=new Qt;const t=new Re(.06,.12),e=new Vt({color:14540253,metalness:.95,roughness:.1,side:De,emissive:2236962});this.mesh=new Rm(t,e,this.count),this.mesh.instanceMatrix.setUsage(am),this.mesh.frustumCulled=!1,this.group.add(this.mesh);for(let i=0;i<this.count;i++){const s=(Math.random()-.5)*(this.roomSize-1),r=Math.random()*this.roomHeight,o=(Math.random()-.5)*(this.roomSize-1),a=new D(s,r,o),l=new Vn(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),u=new D((Math.random()-.5)*.2,-(.5+Math.random()*.8),(Math.random()-.5)*.2),c=new D((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2);this.particles.push({position:a,rotation:l,velocity:u,rotSpeed:c})}this.clock.start()}update(){const t=this.clock.getDelta();this.particles.forEach((e,i)=>{e.position.addScaledVector(e.velocity,t),e.rotation.x+=e.rotSpeed.x*t,e.rotation.y+=e.rotSpeed.y*t,e.rotation.z+=e.rotSpeed.z*t,e.position.y<=0&&(e.position.y=this.roomHeight,e.position.x=(Math.random()-.5)*(this.roomSize-1),e.position.z=(Math.random()-.5)*(this.roomSize-1)),this.transform.position.copy(e.position),this.transform.rotation.copy(e.rotation),this.transform.updateMatrix(),this.mesh.setMatrixAt(i,this.transform.matrix)}),this.mesh.instanceMatrix.needsUpdate=!0}}class d1{constructor(){this.fingerPairs=[],this.jetFlames=[],this.ledMaterials=[],this.notes=[],this.elapsed=0,this.playing=!1,this.paletteOffset=0,this.performanceTime=null,this.group=new Qt,this.group.position.set(0,0,-.42),this.body=new Qt,this.group.add(this.body);const t=new Vt({color:14148328,metalness:.78,roughness:.24}),e=new Vt({color:1120288,metalness:.7,roughness:.3}),i=new Vt({color:462872,metalness:.35,roughness:.22}),s=new ct(new se(.72,.72,.42),t);s.position.y=1.48,s.castShadow=!0,this.body.add(s);const r=new ct(new se(.48,.34,.025),i);r.position.set(0,1.5,.225),this.body.add(r);const o=new ct(new se(.86,.58,.56),t);o.position.y=2.13,o.castShadow=!0,this.body.add(o);const a=new ct(new se(.65,.34,.025),i);a.position.set(0,2.13,.295),this.body.add(a),this.headHitArea=new ct(new se(.9,.62,.08),new Se({transparent:!0,opacity:0,depthWrite:!1})),this.headHitArea.position.set(0,2.13,.34),this.body.add(this.headHitArea),[-.2,.2].forEach(h=>{const d=this.createLedMaterial(6813672),m=new ct(new Qe(.065,16,12),d);m.scale.y=.72,m.position.set(h,2.17,.32),this.body.add(m)}),[-.2,0,.2].forEach((h,d)=>{const m=new ct(new se(.09,.12+d*.045,.035),this.createLedMaterial(d===0?16732058:d===1?6813672:16767053));m.position.set(h,1.48,.245),this.body.add(m)});const l=new ct(new Yt(.018,.018,.35,10),e);l.position.set(0,2.59,0),this.body.add(l);const u=new ct(new Qe(.075,16,12),this.createLedMaterial(16732058));u.position.set(0,2.79,0),this.body.add(u);const c=new ct(new bs(.48,.055,12,32,Math.PI),e);c.position.set(0,2.23,0),c.rotation.z=Math.PI,this.body.add(c),[-.47,.47].forEach(h=>{const d=new ct(new Yt(.14,.14,.11,20),e);d.rotation.z=Math.PI/2,d.position.set(h,2.12,0),this.body.add(d)}),this.leftArm=this.createArm(-1,t,e),this.rightArm=this.createArm(1,t,e),this.leftLeg=this.createLeg(-1,t,e),this.rightLeg=this.createLeg(1,t,e),this.body.add(this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.createNotes()}update(t){if(this.elapsed+=t,this.performanceTime!==null)this.performanceTime+=t,this.updatePerformance(this.performanceTime);else{this.body.position.y=Math.sin(this.elapsed*(this.playing?5.2:2.4))*(this.playing?.075:.035),this.body.rotation.y=Math.sin(this.elapsed*1.35)*.055,this.body.rotation.x=this.playing?Math.sin(this.elapsed*8)*.09:0;const e=this.playing?1.32+Math.sin(this.elapsed*5.5)*.22:.38+(Math.sin(this.elapsed*3.5)+1)*.1;this.leftArm.rotation.z=-e,this.rightArm.rotation.z=e,this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.fingerPairs.forEach(i=>{i.visible=!1}),this.jetFlames.forEach(i=>{i.visible=!1})}this.ledMaterials.forEach((e,i)=>{const s=(this.elapsed*.12+i*.17+this.paletteOffset)%1;e.color.setHSL(s,.9,.62),e.emissive.setHSL(s,.9,.5),e.emissiveIntensity=1.7+Math.sin(this.elapsed*4+i)*.55}),this.notes.forEach((e,i)=>{const s=(this.elapsed*e.speed+e.phase)%1;e.sprite.position.set(e.startX+Math.sin(s*Math.PI*3+i)*.18,1.2+s*2.25,.12+Math.cos(s*Math.PI*2+i)*.08),e.sprite.material.opacity=Math.sin(s*Math.PI)*.95;const r=.34+s*.18;e.sprite.scale.set(r,r,1)})}setPlaying(t){this.playing=t,this.notes.forEach(e=>{e.sprite.visible=t})}cycleLedPalette(){this.paletteOffset=(this.paletteOffset+.23)%1}performDance(){this.performanceTime===null&&(this.performanceTime=0,this.cycleLedPalette())}updatePerformance(t){if(this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.fingerPairs.forEach(i=>{i.visible=!1}),this.jetFlames.forEach(i=>{i.visible=!1}),t<.45){const i=t/.45;this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.y=-Math.sin(i*Math.PI)*.16,this.body.rotation.x=i*.12,this.leftArm.rotation.z=-.25,this.rightArm.rotation.z=.25,this.leftLeg.rotation.x=-i*.32,this.rightLeg.rotation.x=-i*.32;return}if(t<2.35){const i=(t-.45)/1.9,s=xe.smoothstep(i,.12,.92),r=1-i,o=r*r*0+2*r*i*3.8+i*i*-.5,a=xe.smoothstep(i,.34,.7);this.group.position.set(0,o,xe.lerp(-.42,3.8,s)),this.group.rotation.set(-a*Math.PI*2,0,0),this.leftArm.rotation.z=-1.65,this.rightArm.rotation.z=1.65,this.leftLeg.rotation.x=-Math.sin(i*Math.PI)*.55,this.rightLeg.rotation.x=-Math.sin(i*Math.PI)*.55;return}if(this.group.position.set(0,-.5,3.8),this.group.rotation.set(0,0,0),t<3.35){const i=(t-2.35)/1,s=Math.sin(i*Math.PI);this.body.position.y=-s*.26,this.body.rotation.x=s*.1,this.leftLeg.rotation.x=-s*.38,this.rightLeg.rotation.x=-s*.38,this.leftArm.rotation.z=xe.lerp(-1.45,-.55,i),this.rightArm.rotation.z=xe.lerp(1.45,.55,i);return}if(t<4.1){const i=t-3.35,s=Math.sin(i*Math.PI*4);this.body.position.y=Math.abs(s)*.07,this.body.rotation.y=s*.16,this.leftArm.rotation.z=-.72+s*.18,this.rightArm.rotation.z=.72+s*.18;return}if(t<6.2){const i=t-4.1,s=Math.sin(i*Math.PI*1.6)>=0,r=Math.abs(Math.sin(i*Math.PI*3.2)),o=xe.smoothstep((i-1.7)/.4,0,1),a=s?-.62:-2.35,l=s?2.35:.62,u=s?-.28:.1,c=s?.1:-.28;this.body.position.y=r*.1*(1-o),this.body.rotation.set(0,(s?-.22:.22)*(1-o),(s?-.12:.12)*(1-o)),this.leftArm.rotation.z=xe.lerp(a,-.72,o),this.rightArm.rotation.z=xe.lerp(l,.72,o),this.leftLeg.rotation.x=xe.lerp(u,0,o),this.rightLeg.rotation.x=xe.lerp(c,0,o);return}if(t<7.7){const i=t-6.2,s=i<.35?xe.smoothstep(i/.35,0,1):i<.9?1:1-xe.smoothstep((i-.9)/.6,0,1);this.body.position.y=-s*.38,this.body.rotation.x=s*.06,this.leftLeg.rotation.x=-s*Math.PI/2,this.rightLeg.rotation.x=s*Math.PI/2,this.leftArm.rotation.z=xe.lerp(-.72,-1.45,s),this.rightArm.rotation.z=xe.lerp(.72,1.45,s);return}if(t<9.4){const i=t-7.7,s=Math.floor(i/.42)%2===0,r=Math.sin(i%.42/.42*Math.PI);this.body.position.y=Math.abs(Math.sin(i*Math.PI*3))*.06,this.body.rotation.y=(s?1:-1)*.08*r,this.leftArm.rotation.z=s?2.28-r*.18:-.72,this.rightArm.rotation.z=s?.72:-2.28+r*.18,this.leftArm.rotation.x=s?-.32:0,this.rightArm.rotation.x=s?0:-.32,this.fingerPairs[0].visible=s,this.fingerPairs[1].visible=!s,this.leftLeg.rotation.x=-Math.sin(i*Math.PI*2)*.18,this.rightLeg.rotation.x=Math.sin(i*Math.PI*2)*.18;return}if(t<11.1){const i=t-9.4,s=Math.sin(i*Math.PI*4),r=Math.sign(Math.sin(i*Math.PI*3));this.body.position.y=Math.abs(s)*.12,this.body.rotation.set(r*.08,s*.28,-s*.1),this.leftArm.rotation.z=-1.25+r*.55,this.rightArm.rotation.z=1.25+r*.55,this.leftLeg.rotation.x=s*.55,this.rightLeg.rotation.x=-s*.55;return}if(t<11.8){const i=(t-11.1)/.7,s=i*i;this.group.position.set(0,xe.lerp(-.5,1.35,s),3.8),this.group.rotation.set(-.08*(1-i),0,0),this.body.position.y=-Math.sin(i*Math.PI)*.12,this.leftArm.rotation.z=-.55,this.rightArm.rotation.z=.55,this.leftLeg.rotation.x=-.18*(1-i),this.rightLeg.rotation.x=-.18*(1-i),this.setJetFlames(.45+i*.55);return}if(t<13.9){const i=(t-11.8)/2.1,s=i*i*(3-2*i);this.group.position.set(0,1.35+Math.sin(i*Math.PI)*.65,xe.lerp(3.8,-.42,s)),this.group.rotation.set(-Math.sin(i*Math.PI)*.12,0,0),this.leftArm.rotation.z=-.72+Math.sin(i*Math.PI*2)*.08,this.rightArm.rotation.z=.72-Math.sin(i*Math.PI*2)*.08,this.setJetFlames(.9+Math.sin(this.elapsed*28)*.1);return}if(t<14.65){const i=(t-13.9)/.75,s=i*i*(3-2*i);this.group.position.set(0,xe.lerp(1.35,0,s),-.42),this.group.rotation.set(0,0,0),this.leftArm.rotation.z=-.5,this.rightArm.rotation.z=.5,this.setJetFlames(Math.max(.15,1-i));return}if(t<15.1){const i=(t-14.65)/.45;this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.y=-Math.sin(i*Math.PI)*.11,this.leftArm.rotation.z=-.5,this.rightArm.rotation.z=.5;return}this.performanceTime=null,this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.jetFlames.forEach(i=>{i.visible=!1})}setJetFlames(t){this.jetFlames.forEach((e,i)=>{const s=.85+Math.sin(this.elapsed*34+i*2.4)*.15;e.visible=!0,e.scale.set(.8+t*.2,t*s,.8+t*.2)})}createLedMaterial(t){const e=new Vt({color:t,emissive:t,emissiveIntensity:2,roughness:.25});return this.ledMaterials.push(e),e}createArm(t,e,i){const s=new Qt;s.position.set(t*.48,1.67,.02),s.rotation.z=t*.38;const r=new ct(new Yt(.085,.1,.5,14),e);r.position.y=-.22,s.add(r);const o=new ct(new Qe(.12,16,12),i);o.position.set(0,-.52,.13);const a=new Qt;return a.position.set(0,-.57,.17),[-.035,.035].forEach(l=>{const u=new ct(new Yt(.018,.022,.2,8),new Vt({color:6813672,emissive:6813672,emissiveIntensity:1.5}));u.position.set(l,-.08,0),a.add(u)}),a.visible=!1,this.fingerPairs.push(a),s.add(o,a),s}createLeg(t,e,i){const s=new Qt;s.position.set(t*.22,1.16,0);const r=new ct(new Yt(.09,.105,.58,14),e);r.position.y=-.27;const o=new ct(new se(.22,.12,.36),i);o.position.set(0,-.59,.1);const a=new Qt;a.position.set(0,-.8,.08);const l=new ct(new ro(.145,.64,14),new Se({color:16727951,transparent:!0,opacity:.92})),u=new ct(new ro(.078,.46,12),new Se({color:16777215,transparent:!0,opacity:1}));return l.rotation.z=Math.PI,u.rotation.z=Math.PI,u.position.y=.03,a.add(l,u),a.visible=!1,this.jetFlames.push(a),s.add(r,o,a),s}createNotes(){const t=[-1.55,-.9,-.28,.35,.95,1.55];["♪","♫","♪","♬","♫","♪"].forEach((e,i)=>{const s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");if(!r)return;r.clearRect(0,0,128,128),r.fillStyle="#ffffff",r.font="700 104px Georgia",r.textAlign="center",r.textBaseline="middle",r.shadowColor="#ffffff",r.shadowBlur=20,r.fillText(e,64,66);const o=new ei(s);o.colorSpace=Ze;const a=new Cu({map:o,color:16777215,transparent:!0,depthWrite:!1}),l=new Am(a);l.visible=!1,this.group.add(l),this.notes.push({sprite:l,speed:.12+i*.012,phase:i/t.length,startX:t[i]})})}}class p1{constructor(){this.heads=[],this.elapsed=0,this.updateElapsed=0,this.updateInterval=window.matchMedia("(max-width: 768px)").matches?1/30:0,this.boostTime=0,this.worldPosition=new D,this.lightOrigin=new D,this.targetWorldPosition=new D,this.lightDirection=new D,this.upDirection=new D(0,1,0),this.group=new Qt,this.group.position.set(-4.15,0,-3.7);const t=new Vt({color:1514016,metalness:.9,roughness:.25}),e=new Vt({color:6845053,metalness:1,roughness:.16}),i=new ct(new Yt(.38,.5,.2,24),t);i.position.y=.1,i.castShadow=!0;const s=new ct(new Yt(.07,.09,3.75,14),e);s.position.y=1.98,s.castShadow=!0;const r=new ct(new Qe(.13,16,12),e);r.position.y=3.88,this.group.add(i,s,r);const o=document.createElement("canvas");o.width=128,o.height=128;const a=o.getContext("2d"),l=a.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.28,"rgba(255,255,255,0.8)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,128,128);const u=new ei(o),c=[16722047,16767037,6684533,3529215,11099391],h=.105,d=.82;c.forEach((m,g)=>{const _=.78+g*.67,p=new Qt;p.position.set(0,_,0);const f=new ct(new bs(.21,.035,10,20,Math.PI),e);f.rotation.z=Math.PI,f.position.z=.02;const y=new ct(new se(.34,.34,.4),t);y.position.z=.02,y.castShadow=!0;const M=new Vt({color:m,emissive:m,emissiveIntensity:2.6}),S=new ct(new ja(h,20),M);S.position.z=.225,p.add(f,y,S),this.group.add(p);const L=new Ce;L.position.set(4,1,-1.08);const R=new Pm(m,42,16,Math.PI/15,.55,1.15);R.position.set(0,0,.225),R.target=L,R.castShadow=g===2,p.add(R);const C=new Se({color:m,transparent:!0,opacity:.17,blending:cr,depthWrite:!1}),I=new ct(new Yt(d/2,h,1,20,1,!0),C),w=new Se({map:u,color:m,transparent:!0,opacity:.72,blending:cr,depthWrite:!1,side:De}),E=new ct(new Re(d,d),w);this.group.add(L,I,E),this.heads.push({fixture:p,light:R,target:L,ray:I,rayMaterial:C,lensMaterial:M,wallSpot:E,phase:g*.8})})}update(t){if(this.updateElapsed+=t,this.updateElapsed<this.updateInterval)return;const e=this.updateElapsed;this.updateElapsed=0,this.boostTime=Math.max(0,this.boostTime-e),this.elapsed+=e*(this.boostTime>0?3.2:1),this.heads.forEach((i,s)=>{const r=(this.elapsed*(.1+s*.008)+i.phase)%4,o=Math.floor(r),a=r-o,l=4.79,u=-4.45+a*8.9,c=.65+(Math.sin(this.elapsed*.75+s*1.1)+1)*1.65,h=this.worldPosition;o===0?(h.set(u,c,-l),i.wallSpot.rotation.set(0,0,0)):o===1?(h.set(l,c,u),i.wallSpot.rotation.set(0,-Math.PI/2,0)):o===2?(h.set(-u,c,l),i.wallSpot.rotation.set(0,Math.PI,0)):(h.set(-l,c,-u),i.wallSpot.rotation.set(0,Math.PI/2,0));const d=h.sub(this.group.position);i.target.position.copy(d),i.wallSpot.position.copy(d);const m=this.targetWorldPosition.copy(i.target.position).add(this.group.position);i.fixture.lookAt(m);const g=this.lightOrigin;i.light.getWorldPosition(g),g.sub(this.group.position);const _=this.lightDirection.copy(i.target.position).sub(g).normalize(),p=g.distanceTo(i.target.position);i.ray.position.copy(g).addScaledVector(_,p/2),i.ray.scale.set(1,p,1),i.ray.quaternion.setFromUnitVectors(this.upDirection,_),i.rayMaterial.opacity=.13+Math.sin(this.elapsed*2.5+s)*.035,i.lensMaterial.emissiveIntensity=2.2+Math.sin(this.elapsed*3+s)*.8})}boost(){this.boostTime=1.4}}class m1{constructor(){this.elapsed=0,this.throwProgress=null,this.glassShards=[],this.bubbles=[],this.bubbleTime=0,this.drinkColorIndex=0,this.group=new Qt,this.group.position.set(.92,0,.4);const t=new Vt({color:14477033,metalness:.82,roughness:.22}),e=new Vt({color:1053980,metalness:.72,roughness:.28}),i=new Vt({color:16722047,emissive:16722047,emissiveIntensity:1.5}),s=new ct(new se(.52,.62,.34),t);s.position.y=1.43;const r=new ct(new se(.37,.4,.025),i);r.position.set(0,1.4,.185);const o=new ct(new se(.62,.46,.46),t);o.position.y=1.97;const a=new ct(new se(.46,.25,.025),e);a.position.set(0,1.98,.245),this.group.add(s,r,o,a),[-.14,.14].forEach(g=>{const _=new ct(new Qe(.045,14,10),i);_.position.set(g,2,.265),this.group.add(_)});const l=new ct(new Qe(.05,12,8),e);l.position.set(0,1.7,.21);const u=new ro(.11,.18,3);[-1,1].forEach(g=>{const _=new ct(u,e);_.position.set(g*.1,1.7,.2),_.rotation.z=g*Math.PI/2,this.group.add(_)}),this.group.add(l),this.leftArm=this.createArm(-1,t,e),this.rightArm=this.createArm(1,t,e),this.group.add(this.leftArm,this.rightArm),this.shaker=new Qt;const c=new ct(new Yt(.09,.12,.34,16),e),h=new ct(new Yt(.07,.09,.1,16),t);h.position.y=.22,this.shaker.add(c,h),this.shaker.position.set(0,1.38,.34),this.group.add(this.shaker),this.drinkMaterial=new Vt({color:16722047,emissive:16722047,emissiveIntensity:.9,transparent:!0,opacity:0}),this.servedDrink=new Qt,this.servedDrink.position.set(-.34,0,.55),this.glass=new ct(new Yt(.13,.095,.28,18,1,!0),new oo({color:16777215,transmission:.75,transparent:!0,opacity:.42,roughness:.08,side:De})),this.glass.position.y=1.24,this.liquid=new ct(new Yt(.105,.078,.19,16),this.drinkMaterial),this.liquid.position.y=1.21,this.servedDrink.add(this.glass,this.liquid);const d=new oo({color:15268863,transmission:.72,transparent:!0,opacity:.68,roughness:.12});for(let g=0;g<10;g++){const _=new ct(new Iu(.045+g%3*.018),d);_.visible=!1,this.glassShards.push(_),this.servedDrink.add(_)}const m=new Se({color:16777215,transparent:!0,opacity:.75});for(let g=0;g<9;g++){const _=new ct(new Qe(.018+g%3*.006,8,6),m);_.visible=!1,this.bubbles.push(_),this.servedDrink.add(_)}this.group.add(this.servedDrink),this.pourStream=new ct(new Yt(.018,.018,.5,8),new Se({color:16722047,transparent:!0,opacity:.75})),this.pourStream.position.set(-.34,1.58,.5),this.pourStream.visible=!1,this.group.add(this.pourStream)}update(t){if(this.elapsed+=t,this.updateBubbles(t),this.throwProgress!==null){this.throwProgress+=t;const i=this.throwProgress,s=Math.min(i/1.5,1),r=Math.sin(s*Math.PI);if(this.shaker.position.set(0,1.42+r*2.2,.34),this.shaker.rotation.z=s*Math.PI*4,this.group.rotation.y=xe.smoothstep(s,.12,.88)*Math.PI*2,i>=1.5&&i<2.4){const o=(i-1.5)/.9;this.shaker.position.set(-.34,1.88,.42),this.shaker.rotation.z=1.05,this.pourStream.visible=o>.08,this.drinkMaterial.opacity=Math.min(.82,o)}else if(i>=2.4&&i<4.25){const o=1-Math.pow(1-(i-2.4)/1.85,3);this.pourStream.visible=!1,this.shaker.position.set(0,1.38,.34),this.shaker.rotation.z=0,this.servedDrink.position.x=-.34-o*2.16}else if(i>=4.25&&i<4.95){const o=(i-4.25)/.7;this.shaker.position.set(-.08,1.17,.48),this.shaker.rotation.z=Math.PI/2,this.servedDrink.position.x=-2.5-o*.18,this.servedDrink.position.y=-o*1.18,this.servedDrink.rotation.z=o*Math.PI*1.35,o>.82&&this.breakGlass(o)}else if(i>=4.95&&i<7.25){const o=i-4.95;this.breakGlass(1),this.shaker.position.set(-.08,1.17,.48),this.shaker.rotation.z=Math.PI/2,this.group.rotation.y=-.72+Math.sin(o*16)*.05,this.group.position.y=Math.abs(Math.sin(o*18))*.045,this.leftArm.rotation.z=2.9+Math.sin(o*13)*.1,this.rightArm.rotation.z=-2.9-Math.sin(o*13)*.1}else if(i>=7.25){const o=Math.min((i-7.25)/.75,1);this.group.rotation.y=xe.lerp(-.72,0,o),this.group.position.y=0,this.leftArm.rotation.z=xe.lerp(2.9,1.02,o),this.rightArm.rotation.z=xe.lerp(-2.9,-1.02,o),this.shaker.position.lerp(new D(0,1.38,.34),o),this.shaker.rotation.z=xe.lerp(Math.PI/2,0,o)}if(i<4.95){const o=Math.sin(Math.min(i/2.1,1)*Math.PI);this.leftArm.rotation.z=1.02-o*.28,this.rightArm.rotation.z=-1.02+o*.28}i>=8&&(this.throwProgress=null,this.shaker.position.set(0,1.38,.34),this.shaker.rotation.z=0,this.group.rotation.y=0,this.group.position.y=0,this.leftArm.rotation.z=1.02,this.rightArm.rotation.z=-1.02,this.pourStream.visible=!1);return}const e=Math.sin(this.elapsed*10);this.shaker.position.x=e*.055,this.shaker.position.y=1.38+Math.abs(e)*.045,this.shaker.rotation.z=e*.16,this.leftArm.rotation.z=1.02+e*.08,this.rightArm.rotation.z=-1.02+e*.08,this.group.rotation.y=Math.sin(this.elapsed*1.4)*.035}throwShaker(){this.throwProgress===null&&(this.throwProgress=0,this.servedDrink.position.set(-.34,0,.55),this.servedDrink.rotation.set(0,0,0),this.glass.visible=!0,this.liquid.visible=!0,this.glassShards.forEach(t=>{t.visible=!1}),this.drinkMaterial.opacity=0,this.bubbleTime=0,this.bubbles.forEach(t=>{t.visible=!1}))}activateDrink(){if(!this.glass.visible||this.drinkMaterial.opacity===0)return;const t=[16722047,55807,16767053,16739108,6684533];this.drinkColorIndex=(this.drinkColorIndex+1)%t.length;const e=t[this.drinkColorIndex];this.drinkMaterial.color.setHex(e),this.drinkMaterial.emissive.setHex(e),this.drinkMaterial.opacity=.86,this.bubbleTime=2.4}updateBubbles(t){this.bubbleTime=Math.max(0,this.bubbleTime-t),this.bubbles.forEach((e,i)=>{if(e.visible=this.bubbleTime>0,!e.visible)return;const s=(this.elapsed*(.8+i*.04)+i*.13)%1;e.position.set(Math.sin(i*2.1)*.07,1.12+s*.32,Math.cos(i*1.7)*.055),e.scale.setScalar(.65+s*.7)})}breakGlass(t){this.glass.visible=!1,this.liquid.visible=!1,this.bubbleTime=0,this.bubbles.forEach(e=>{e.visible=!1}),this.glassShards.forEach((e,i)=>{e.visible=!0;const s=Math.max(0,t-.82)*2.8,r=i/this.glassShards.length*Math.PI*2;e.position.set(Math.cos(r)*s*(.12+i%3*.025),1.24+Math.abs(Math.sin(r*2))*s*.055,Math.sin(r)*s*.11),e.rotation.set(r*.7,r,r*1.3)})}createArm(t,e,i){const s=new Qt;s.position.set(t*.34,1.58,.12),s.rotation.z=t*-1.02;const r=new ct(new Yt(.055,.07,.42,12),e);r.position.y=-.19;const o=new ct(new Qe(.08,14,10),i);return o.position.set(0,-.42,.2),s.add(r,o),s}}class g1{constructor(){this.group=new Qt,this.group.position.set(-4.62,0,1.25),this.group.rotation.y=Math.PI/2;const t=new Vt({color:1380633,metalness:.45,roughness:.28}),e=new Vt({color:3159618,metalness:.8,roughness:.16}),i=new Vt({color:1316897,metalness:.7,roughness:.3}),s=new ct(new se(3.1,1.05,.72),t);s.position.set(0,.525,.42),s.castShadow=!0,s.receiveShadow=!0;const r=new ct(new se(3.25,.09,.86),e);r.position.set(0,1.08,.42),r.castShadow=!0;const o=new ct(new se(2.85,.055,.025),new Vt({color:55807,emissive:55807,emissiveIntensity:2.1}));o.position.set(0,.75,.79),this.group.add(s,r,o),[1.55,2.15].forEach(m=>{const g=new ct(new se(2.7,.08,.18),i);g.position.set(0,m,-.2),this.group.add(g)}),[16722047,55807,16767053,16739108,6684533,16722047].forEach((m,g)=>{const _=g<3?1.55:2.15,p=-.85+g%3*.85,f=new Vt({color:m,emissive:m,emissiveIntensity:.55,transparent:!0,opacity:.86,roughness:.18}),y=new ct(new Yt(.085,.105,.38,16),f);y.position.set(p,_+.23,-.19);const M=new ct(new Yt(.045,.055,.14,12),f);M.position.set(p,_+.49,-.19),this.group.add(y,M)});const l=document.createElement("canvas");l.width=512,l.height=192;const u=l.getContext("2d");u.clearRect(0,0,l.width,l.height),u.textAlign="center",u.textBaseline="middle",u.font='900 126px "Trebuchet MS", sans-serif',u.shadowColor="#ff287f",u.shadowBlur=32,u.strokeStyle="#ff287f",u.lineWidth=7,u.strokeText("BAR",256,96),u.fillStyle="#ffffff",u.fillText("BAR",256,96);const c=new ei(l);c.colorSpace=Ze;const h=new ct(new Re(2.25,.84),new Se({map:c,transparent:!0,depthWrite:!1}));h.position.set(0,2.92,-.37),this.group.add(h);const d=new Zn(16722047,8,4.5,1.5);d.position.set(0,2.2,1.25),this.group.add(d),this.bartender=new m1,this.group.add(this.bartender.group),this.interactionPulse=new Ya(16722047),this.interactionPulse.group.position.set(0,.5,.805),this.group.add(this.interactionPulse.group)}update(t){this.bartender.update(t),this.interactionPulse.update(t)}throwShaker(){this.bartender.throwShaker()}}class _1{constructor(){this.lavaBlobs=[],this.elapsed=0,this.group=new Qt,this.group.position.set(-2.35,0,4.05);const t=new Vt({color:10990268,metalness:1,roughness:.12}),e=new oo({color:3416904,metalness:.15,roughness:.08,transmission:.48,transparent:!0,opacity:.78}),i=new Vt({color:6813672,roughness:.68,emissive:1195842,emissiveIntensity:.5}),s=new ct(new Yt(.055,.075,.84,16),t);s.position.y=.46;const r=new ct(new Yt(.42,.5,.08,28),t);r.position.y=.04;const o=new ct(new Yt(.7,.7,.07,32),e);o.position.y=.91,o.castShadow=!0,this.group.add(s,r,o),[-1,1].forEach(_=>{const p=new Qt;p.position.x=_*1.08;const f=new ct(new Yt(.045,.06,.43,12),t);f.position.y=.24;const y=new ct(new Yt(.28,.34,.07,22),t);y.position.y=.035;const M=new ct(new Yt(.38,.34,.16,24),i);M.position.y=.51,M.castShadow=!0;const S=new ct(new se(.72,.58,.13),i);S.position.set(_*.31,.78,0),S.rotation.y=Math.PI/2,S.rotation.z=_*.16,S.castShadow=!0,p.add(f,y,M,S),this.group.add(p)});const a=new Qt;a.position.set(0,.98,0);const l=new Vt({color:13209387,metalness:.82,roughness:.2}),u=new ct(new Yt(.15,.2,.13,20),l),c=new ct(new Yt(.1,.15,.48,20),new oo({color:16763176,emissive:9390080,emissiveIntensity:.48,transparent:!0,opacity:.48,transmission:.38,roughness:.12,depthWrite:!1}));c.position.y=.3;const h=new ct(new Yt(.08,.11,.1,20),l);h.position.y=.59,a.add(u,c,h);const d=new Se({color:16772962});[.18,.34,.48].forEach((_,p)=>{const f=new ct(new Qe(.065,12,10),d);f.position.y=_,f.scale.set(1+p*.12,1.35,.82),this.lavaBlobs.push(f),a.add(f)});const m=new Zn(16763176,1.6,1.8,2);m.position.y=.34,a.add(m),this.group.add(a);const g=new Zn(6813672,5,4.2,1.7);g.position.set(0,1.8,.2),this.group.add(g)}update(t){this.elapsed+=t,this.lavaBlobs.forEach((e,i)=>{const s=this.elapsed*(.72+i*.09)+i*2.1;e.position.y=.33+Math.sin(s)*.16,e.position.x=Math.sin(s*.67)*.025,e.scale.y=1.15+Math.cos(s*1.3)*.28})}}class v1{constructor(){this.group=new Qt,this.group.position.set(4.2,0,3.65);const t=new Vt({color:11736405,metalness:.25,roughness:.42,emissive:3474199,emissiveIntensity:.35}),e=new Vt({color:3234869,roughness:.7}),i=new Vt({color:3581792,roughness:.62,side:De}),s=new ct(new Yt(.34,.25,.62,24),t);s.position.y=.31,s.castShadow=!0;const r=new ct(new bs(.34,.045,10,24),t);r.position.y=.62,r.rotation.x=Math.PI/2,this.group.add(s,r),[{x:0,z:0,height:2.45,lean:.03},{x:-.12,z:.04,height:2.05,lean:-.12},{x:.13,z:-.04,height:2.2,lean:.13}].forEach((l,u)=>{const c=new ct(new Yt(.025,.04,l.height,10),e);c.position.set(l.x,.62+l.height/2,l.z),c.rotation.z=l.lean,c.castShadow=!0,this.group.add(c);for(let h=0;h<5;h++){const d=h%2===0?-1:1,m=new ct(new Qe(.34,16,10),i);m.scale.set(1.7,.18,.62),m.position.set(l.x+d*(.23+h*.025),1.05+h*.38+u*.05,l.z+(u-1)*.12),m.rotation.z=d*(.38+h*.08),m.rotation.y=u*.72+h*.45,m.castShadow=!0,this.group.add(m)}});const a=new Zn(6684533,3.5,3,1.8);a.position.set(0,1.5,.4),this.group.add(a)}updateVisibility(t){this.group.visible=t.x<4.95}}class x1{constructor(){this.flames=[],this.smoke=[],this.confetti=[],this.elapsed=0,this.celebrationTime=-1,this.group=new Qt,this.group.position.set(4.05,0,1.45);const t=new Vt({color:11056319,metalness:1,roughness:.14}),e=new ct(new Yt(.78,.78,.09,32),new oo({color:2303795,metalness:.45,roughness:.18,transmission:.22}));e.position.y=.88,e.castShadow=!0;const i=new ct(new Yt(.06,.08,.84,16),t);i.position.y=.44;const s=new ct(new Yt(.4,.48,.08,28),t);s.position.y=.04,this.group.add(e,i,s);const r=new Vt({color:16767208,roughness:.62,emissive:3870756,emissiveIntensity:.28}),o=new Vt({color:16777215,roughness:.7}),a=new ct(new Yt(.56,.58,.34,32),r);a.position.y=1.09,a.castShadow=!0;const l=new ct(new Yt(.4,.43,.26,32),o);l.position.y=1.38,l.castShadow=!0;const u=new ct(new bs(.565,.035,10,32),new Vt({color:6813672,emissive:6813672,emissiveIntensity:1.1}));u.rotation.x=Math.PI/2,u.position.y=1.16,this.group.add(a,l,u),[-.2,0,.2].forEach((h,d)=>{const m=new ct(new Yt(.025,.025,.28,12),new Vt({color:d===1?16732058:6813672,roughness:.42}));m.position.set(h,1.65,.08);const g=new ct(new Qe(.055,12,10),new Se({color:16769899,transparent:!0,opacity:.95}));g.scale.y=1.7,g.position.set(h,1.86,.08),this.flames.push(g),this.group.add(m,g);for(let _=0;_<3;_++){const p=new Se({color:14542056,transparent:!0,opacity:0,depthWrite:!1}),f=new ct(new Qe(.045,10,8),p);f.visible=!1,this.smoke.push({mesh:f,offset:d*.23+_*.31}),this.group.add(f)}});const c=[6813672,16732058,16767053,16777215,9399295];for(let h=0;h<55;h++){const d=new ct(new Re(.045,.09),new Se({color:c[h%c.length],side:De}));d.visible=!1,this.group.add(d),this.confetti.push({mesh:d,velocity:new D,spin:new D((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)})}this.interactionPulse=new Ya(16767053),this.interactionPulse.group.position.set(-.72,1.02,-.28),this.interactionPulse.group.rotation.y=-1.94,this.interactionPulse.setActive(!0),this.group.add(this.interactionPulse.group)}celebrate(){return this.celebrationTime>=0?!1:(this.celebrationTime=0,this.flames.forEach(t=>{t.visible=!1}),this.confetti.forEach((t,e)=>{const i=e/this.confetti.length*Math.PI*2;t.mesh.visible=!0,t.mesh.position.set(0,1.75,0),t.velocity.set(Math.cos(i)*(.45+Math.random()*.8),1.4+Math.random()*1.2,Math.sin(i)*(.45+Math.random()*.8))}),!0)}updateVisibility(t){this.group.visible=t.x<4.95}update(t){this.elapsed+=t,this.interactionPulse.update(t),this.flames.forEach((e,i)=>{const s=.88+Math.sin(this.elapsed*12+i*1.7)*.13;e.scale.set(.9+s*.1,1.45+s*.3,.9+s*.1),e.position.x+=Math.sin(this.elapsed*9+i)*6e-4}),!(this.celebrationTime<0)&&(this.celebrationTime+=t,this.smoke.forEach((e,i)=>{const s=this.celebrationTime-e.offset;if(e.mesh.visible=s>0&&s<2.2,!e.mesh.visible)return;e.mesh.position.set(-.2+i%3*.2+Math.sin(s*3+i)*.08,1.88+s*.42,.08);const r=e.mesh.material;r.opacity=Math.sin(Math.min(s/2.2,1)*Math.PI)*.38,e.mesh.scale.setScalar(1+s*1.5)}),this.confetti.forEach(e=>{e.mesh.visible&&(e.velocity.y-=t*1.65,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t,e.mesh.position.y<=.05&&(e.mesh.visible=!1))}),this.celebrationTime>5.2&&(this.celebrationTime=-1,this.flames.forEach(e=>{e.visible=!0}),this.smoke.forEach(e=>{e.mesh.visible=!1}),this.confetti.forEach(e=>{e.mesh.visible=!1})))}}class y1{constructor(){this.elapsed=0,this.ringTime=0,this.group=new Qt,this.group.position.set(1.15,2.2,4.78),this.group.rotation.y=Math.PI;const t=new Vt({color:14207920,metalness:.42,roughness:.36}),e=new Vt({color:1513757,metalness:.55,roughness:.3}),i=new Vt({color:11976901,metalness:.95,roughness:.12}),s=new Vt({color:13053244,emissive:5900050,emissiveIntensity:.8}),r=new ct(new se(1.08,1.62,.34),t),o=new ct(new se(.76,.62,.04),e);o.position.set(.08,.25,.19),this.group.add(r,o);const a=document.createElement("canvas");a.width=768,a.height=256;const l=a.getContext("2d");l.fillStyle="#07160e",l.fillRect(0,0,a.width,a.height),l.textAlign="center",l.textBaseline="middle",l.font="700 48px monospace",l.fillStyle="#70ff8c",l.shadowColor="#70ff8c",l.shadowBlur=18;const u=new ei(a);u.colorSpace=Ze;const c=new ct(new Re(.73,.25),new Se({map:u}));c.position.set(.08,.55,.225),this.group.add(c);const h=new ct(new Yt(.24,.24,.055,32),i);h.rotation.x=Math.PI/2,h.position.set(.08,.08,.235),this.group.add(h);for(let R=0;R<10;R++){const C=R/10*Math.PI*2,I=new ct(new Yt(.035,.035,.065,12),e);I.rotation.x=Math.PI/2,I.position.set(.08+Math.cos(C)*.16,.08+Math.sin(C)*.16,.27),this.group.add(I)}const d=new ct(new se(.08,.25,.035),s);d.position.set(.36,-.42,.205),this.group.add(d),this.handset=new Qt;const m=new ct(new Yt(.075,.075,.83,14),e),g=new Qe(.15,16,10),_=new ct(g,e),p=new ct(g,e);_.position.y=.42,p.position.y=-.42,this.handset.add(m,_,p),this.handset.position.set(-.43,0,.31),this.group.add(this.handset);const f=new ct(new bs(.22,.018,8,22,Math.PI*1.55),e);f.position.set(-.32,-.72,.22),f.rotation.z=-.35,this.group.add(f);const y=new Zn(7405452,2.5,2.2,1.8);y.position.set(0,.5,.8),this.group.add(y),this.interactionPulse=new Ya(7405452),this.interactionPulse.group.position.set(.34,-.56,.24),this.interactionPulse.setActive(!0),this.group.add(this.interactionPulse.group);const M=document.createElement("canvas");M.width=1024,M.height=384;const S=M.getContext("2d");S.fillStyle="#ffffff",S.strokeStyle="#ffffff",S.lineWidth=18,S.beginPath(),S.roundRect(35,30,930,255,70),S.moveTo(250,280),S.lineTo(170,360),S.lineTo(390,282),S.closePath(),S.fill(),S.stroke(),S.fillStyle="#000000",S.textAlign="center",S.textBaseline="middle",S.font='800 82px "Trebuchet MS", sans-serif',S.fillText("Ti aspettiamo in pista!",500,157);const L=new ei(M);L.colorSpace=Ze,this.speechBubble=new Am(new Cu({map:L,transparent:!0,depthTest:!1})),this.speechBubble.position.set(.45,1.35,.45),this.speechBubble.scale.set(2.8,1.05,1),this.speechBubble.visible=!1,this.speechBubble.renderOrder=20,this.group.add(this.speechBubble)}update(t){this.elapsed+=t,this.ringTime=Math.max(0,this.ringTime-t),this.handset.rotation.z=this.ringTime>0?Math.sin(this.elapsed*46)*.055:0,this.speechBubble.visible=this.ringTime>0,this.interactionPulse.update(t)}updateVisibility(t){this.group.visible=t.z<4.78}ring(){this.ringTime=3.4}}class M1{constructor(){this.wallRecords=[],this.group=new Qt;const t=new Yt(.34,.34,.035,32),e=new Vt({color:592396,metalness:.48,roughness:.2}),i=new Yt(.105,.105,.042,20),s=[16732058,6813672,16767053,16735022,9399295,6684533];[{position:[-4.82,3.75,-.25],rotation:[0,0,-Math.PI/2],wall:"left"},{position:[-4.82,4.25,1.25],rotation:[0,0,-Math.PI/2],wall:"left"},{position:[-4.82,3.75,2.75],rotation:[0,0,-Math.PI/2],wall:"left"},{position:[4.82,3.82,-1.45],rotation:[0,0,Math.PI/2],wall:"right"},{position:[4.82,4.22,-.48],rotation:[0,0,Math.PI/2],wall:"right"},{position:[4.82,3.5,.42],rotation:[0,0,Math.PI/2],wall:"right"},{position:[-3.25,2.15,4.78],rotation:[-Math.PI/2,0,0],wall:"front"},{position:[-2.35,2.5,4.78],rotation:[-Math.PI/2,0,0],wall:"front"},{position:[-1.45,2.15,4.78],rotation:[-Math.PI/2,0,0],wall:"front"}].forEach(({position:o,rotation:a,wall:l},u)=>{const c=new Qt;c.position.set(o[0],o[1],o[2]),c.rotation.set(a[0],a[1],a[2]);const h=new ct(t,e),d=new ct(i,new Vt({color:s[u%s.length],emissive:s[u%s.length],emissiveIntensity:.45}));d.position.y=.023,c.add(h,d),this.group.add(c),this.wallRecords.push({group:c,wall:l})})}update(t){this.wallRecords.forEach(({group:e,wall:i})=>{i==="back"&&(e.visible=t.z>-4.82),i==="front"&&(e.visible=t.z<4.78),i==="left"&&(e.visible=t.x>-4.82),i==="right"&&(e.visible=t.x<4.82)})}}class S1{constructor(t=new Date("2026-10-30T21:30:00+01:00")){this.confettiRain=null,this.cakeConfettiRain=null,this.cakeCelebrationTime=0,this.group=new Qt;const e=10,i=5.2;this.floor=new a1(e,e,10),this.group.add(this.floor.mesh),this.ceiling=new l1(e,e,i),this.group.add(this.ceiling.mesh),this.walls=new c1(e,i,e),this.group.add(this.walls.group),this.countdownBoard=new u1(t),this.group.add(this.countdownBoard.group),this.djConsole=new h1,this.group.add(this.djConsole.group),this.robotDJ=new d1,this.djConsole.group.add(this.robotDJ.group),this.movingLightRig=new p1,this.group.add(this.movingLightRig.group),this.bar=new g1,this.group.add(this.bar.group),this.loungeSet=new _1,this.group.add(this.loungeSet.group),this.tallPlant=new v1,this.group.add(this.tallPlant.group),this.birthdayCake=new x1,this.group.add(this.birthdayCake.group),this.payphone=new y1,this.group.add(this.payphone.group),this.vinylWall=new M1,this.group.add(this.vinylWall.group),this.djSign=new f1,this.group.add(this.djSign.group)}startConfetti(){this.confettiRain||(this.confettiRain=new ed,this.group.add(this.confettiRain.group))}celebrateCake(){this.birthdayCake.celebrate()&&(this.cakeConfettiRain=new ed,this.cakeCelebrationTime=5.2,this.group.add(this.cakeConfettiRain.group))}updateWallVisibility(t){this.vinylWall.update(t),this.payphone.updateVisibility(t),this.countdownBoard.updateVisibility(t),this.djSign.updateVisibility(t),this.birthdayCake.updateVisibility(t),this.tallPlant.updateVisibility(t)}update(t){this.floor&&this.floor.update(t),this.countdownBoard?.group.visible&&this.countdownBoard.update(),this.robotDJ&&this.robotDJ.update(t),this.djConsole&&this.djConsole.update(t),this.movingLightRig&&this.movingLightRig.update(t),this.bar&&this.bar.update(t),this.loungeSet&&this.loungeSet.update(t),this.birthdayCake?.group.visible&&this.birthdayCake.update(t),this.payphone?.group.visible&&this.payphone.update(t),this.confettiRain&&this.confettiRain.update(),this.cakeConfettiRain&&(this.cakeConfettiRain.update(),this.cakeCelebrationTime-=t,this.cakeCelebrationTime<=0&&(this.group.remove(this.cakeConfettiRain.group),this.cakeConfettiRain=null))}}class b1{constructor(){this.wallSpots=[],this.spotTransform=new Ce,this.spotElapsed=0,this.isMobile=window.matchMedia("(max-width: 768px)").matches,this.reflectionCaptured=!1,this.group=new Qt,this.reflectionInterval=.25,this.reflectionElapsed=this.reflectionInterval,this.spotUpdateInterval=this.isMobile?1/20:0,this.cubeRenderTarget=new vm(this.isMobile?64:128,{generateMipmaps:!1,minFilter:qe}),this.cubeCamera=new gm(.1,50,this.cubeRenderTarget);const t=.68,e=new Qe(t,this.isMobile?48:96,this.isMobile?24:48),i=new Vt({color:16777215,metalness:1,roughness:0,flatShading:!0,envMap:this.cubeRenderTarget.texture,envMapIntensity:4.5});this.ballMesh=new ct(e,i),this.ballMesh.castShadow=!0;const s=new Yt(.008,.008,1.15),r=new Vt({color:7829367,metalness:.8}),o=new ct(s,r);o.position.y=.575,this.group.add(this.ballMesh,o,this.cubeCamera);const a=document.createElement("canvas");a.width=128,a.height=128;const l=a.getContext("2d"),u=l.createRadialGradient(64,64,0,64,64,64);u.addColorStop(0,"rgba(255, 230, 255, 0.55)"),u.addColorStop(.3,"rgba(220, 180, 255, 0.3)"),u.addColorStop(.65,"rgba(180, 140, 255, 0.1)"),u.addColorStop(1,"rgba(0, 0, 0, 0)"),l.fillStyle=u,l.fillRect(0,0,128,128);const c=new ei(a),h=new Re(.42,.42),d=new Se({map:c,transparent:!0,blending:cr,depthWrite:!1,opacity:.48}),m=this.isMobile?[-1.35,-1,-.68,-.36,.2,.58,.92,1.25]:[-1.45,-1.2,-1,-.82,-.64,-.48,-.32,-.16,.16,.34,.54,.76],g=this.isMobile?16:32;this.wallSpotMesh=new Rm(h,d,m.length*g),this.wallSpotMesh.instanceMatrix.setUsage(am),this.wallSpotMesh.frustumCulled=!1,this.group.add(this.wallSpotMesh),m.forEach((_,p)=>{for(let f=0;f<g;f++){const y=p%2===0?0:Math.PI/g;this.wallSpots.push({angle:f/g*Math.PI*2+y,heightRatio:_,scale:.82+p%3*.08})}}),this.group.position.set(0,4.05,-2.8)}update(t,e,i){this.reflectionElapsed+=t;const s=!this.isMobile||!this.reflectionCaptured;e&&i&&s&&this.reflectionElapsed>=this.reflectionInterval&&(this.ballMesh.visible=!1,this.cubeCamera.update(e,i),this.ballMesh.visible=!0,this.reflectionElapsed=0,this.reflectionCaptured=!0);const r=.3;if(this.ballMesh.rotation.y+=t*r,this.spotElapsed+=t,this.spotElapsed<this.spotUpdateInterval)return;const o=this.spotElapsed;this.spotElapsed=0;const a=4.85,l=-3.95,u=.75;this.wallSpots.forEach((c,h)=>{c.angle+=o*r;const d=Math.sin(c.angle),m=Math.cos(c.angle),g=c.heightRatio;let _=10;if(Math.abs(d)>.001){const S=(d>0?a:-a)/d;S>0&&(_=Math.min(_,S))}if(Math.abs(m)>.001){const S=(m<0?-2.15:7.65)/m;S>0&&(_=Math.min(_,S))}if(Math.abs(g)>.001){const S=(g>0?u:l)/g;S>0&&(_=Math.min(_,S))}const p=d*_,f=g*_,y=m*_;this.spotTransform.position.set(p,f,y),this.spotTransform.scale.setScalar(c.scale),Math.abs(p-a)<.05?this.spotTransform.rotation.set(0,-Math.PI/2,0):Math.abs(p+a)<.05?this.spotTransform.rotation.set(0,Math.PI/2,0):Math.abs(f-u)<.05?this.spotTransform.rotation.set(Math.PI/2,0,0):Math.abs(f-l)<.05?this.spotTransform.rotation.set(-Math.PI/2,0,0):this.spotTransform.rotation.set(0,0,0),this.spotTransform.updateMatrix(),this.wallSpotMesh.setMatrixAt(h,this.spotTransform.matrix)}),this.wallSpotMesh.instanceMatrix.needsUpdate=!0}}class E1{constructor(){this.cornerLights=[],this.paletteIndex=0,this.group=new Qt;const t=new Qw(3478616,2.8);this.cameraSpotLight=new Pm(16777215,22),this.cameraSpotLight.position.set(0,2.4,4.9),this.cameraSpotLight.target.position.set(0,3.6,-2.8),this.cameraSpotLight.angle=Math.PI/7,this.cameraSpotLight.penumbra=.5,this.cameraSpotLight.castShadow=window.innerWidth>768;const e=new Zn(55807,18,16,1.2);e.position.set(-4.2,3,-4.2);const i=new Zn(16711816,20,16,1.2);i.position.set(4.2,3,-4.2);const s=new Zn(10289407,18,16,1.2);s.position.set(-4.2,3,3.5);const r=new Zn(16711748,18,16,1.2);r.position.set(4.2,3,3.5),this.cornerLights=[e,i,s,r];const o=new Zn(11862271,15,14);o.position.set(0,2.2,0),this.group.add(t,this.cameraSpotLight,this.cameraSpotLight.target,e,i,s,r,o)}cyclePalette(){const t=[[55807,16711816,10289407,16711748],[16767037,16735022,6684533,55807],[6813672,3501567,16732058,16777215],[12123970,16722047,16767053,9399295]];this.paletteIndex=(this.paletteIndex+1)%t.length,this.cornerLights.forEach((e,i)=>e.color.setHex(t[this.paletteIndex][i]))}}const nd=new D,w1=new Vi,id=new D;class T1 extends Ce{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const Xn=new le,A1=new le;class R1{constructor(t={}){const e=this;let i,s,r,o;const a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const u=document.createElement("div");u.style.transformOrigin="0 0",u.style.pointerEvents="none",l.appendChild(u);const c=document.createElement("div");c.style.transformStyle="preserve-3d",u.appendChild(c),this.getSize=function(){return{width:i,height:s}},this.render=function(p,f){const y=f.projectionMatrix.elements[5]*o;f.view&&f.view.enabled?(u.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,u.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):u.style.transform="",p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let M,S;f.isOrthographicCamera&&(M=-(f.right+f.left)/2,S=(f.top+f.bottom)/2);const L=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,R=f.isOrthographicCamera?`scale( ${L} )scale(`+y+")translate("+h(M)+"px,"+h(S)+"px)"+d(f.matrixWorldInverse):`scale( ${L} )translateZ(`+y+"px)"+d(f.matrixWorldInverse),I=(f.isPerspectiveCamera?"perspective("+y+"px) ":"")+R+"translate("+r+"px,"+o+"px)";a.camera.style!==I&&(c.style.transform=I,a.camera.style=I),_(p,p,f)},this.setSize=function(p,f){i=p,s=f,r=i/2,o=s/2,l.style.width=p+"px",l.style.height=f+"px",u.style.width=p+"px",u.style.height=f+"px",c.style.width=p+"px",c.style.height=f+"px"};function h(p){return Math.abs(p)<1e-10?0:p}function d(p){const f=p.elements;return"matrix3d("+h(f[0])+","+h(-f[1])+","+h(f[2])+","+h(f[3])+","+h(f[4])+","+h(-f[5])+","+h(f[6])+","+h(f[7])+","+h(f[8])+","+h(-f[9])+","+h(f[10])+","+h(f[11])+","+h(f[12])+","+h(-f[13])+","+h(f[14])+","+h(f[15])+")"}function m(p){const f=p.elements;return"translate(-50%,-50%)"+("matrix3d("+h(f[0])+","+h(f[1])+","+h(f[2])+","+h(f[3])+","+h(-f[4])+","+h(-f[5])+","+h(-f[6])+","+h(-f[7])+","+h(f[8])+","+h(f[9])+","+h(f[10])+","+h(f[11])+","+h(f[12])+","+h(f[13])+","+h(f[14])+","+h(f[15])+")")}function g(p){p.isCSS3DObject&&(p.element.style.display="none");for(let f=0,y=p.children.length;f<y;f++)g(p.children[f])}function _(p,f,y,M){if(p.visible===!1){g(p);return}if(p.isCSS3DObject){const S=p.layers.test(y.layers)===!0,L=p.element;if(L.style.display=S===!0?"":"none",S===!0){p.onBeforeRender(e,f,y);let R;p.isCSS3DSprite?(Xn.copy(y.matrixWorldInverse),Xn.transpose(),p.rotation2D!==0&&Xn.multiply(A1.makeRotationZ(p.rotation2D)),p.matrixWorld.decompose(nd,w1,id),Xn.setPosition(nd),Xn.scale(id),Xn.elements[3]=0,Xn.elements[7]=0,Xn.elements[11]=0,Xn.elements[15]=1,R=m(Xn)):R=m(p.matrixWorld);const C=a.objects.get(p);if(C===void 0||C.style!==R){L.style.transform=R;const I={style:R};a.objects.set(p,I)}L.parentNode!==c&&c.appendChild(L),p.onAfterRender(e,f,y)}}for(let S=0,L=p.children.length;S<L;S++)_(p.children[S],f,y)}}}class C1{constructor(t,e){this.sizes=t,this.scene=new wm,this.renderer=new R1,this.lastCameraMatrix=new le,this.lastProjectionMatrix=new le,this.needsRender=!0,this.activated=!1,this.activateOnFirstInteraction=()=>this.activate(),this.screen=document.createElement("div"),this.screen.setAttribute("aria-label","Player ufficiale YouTube"),Object.assign(this.screen.style,{width:"480px",height:"270px",boxSizing:"border-box",contain:"strict",overflow:"hidden",background:"#000000",border:"4px solid #09090d",borderRadius:"6px",boxShadow:"0 0 18px rgba(255, 0, 127, 0.7)",pointerEvents:"auto"}),this.player=new T1(this.screen),this.player.position.set(-.65,2.6,-4.94),this.player.scale.setScalar(.0127),this.scene.add(this.player),Object.assign(this.renderer.domElement.style,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",zIndex:"0"}),this.resize(),e.appendChild(this.renderer.domElement),window.addEventListener("pointerdown",this.activateOnFirstInteraction,{once:!0,passive:!0})}activate(){if(this.activated)return;this.activated=!0;const t=document.createElement("iframe");t.src="https://www.youtube.com/embed/YaC3UY3Dnnk?playsinline=1&rel=0",t.title="Bacio che schiocca - player ufficiale YouTube",t.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",t.referrerPolicy="strict-origin-when-cross-origin",t.allowFullscreen=!0,t.setAttribute("frameborder","0"),Object.assign(t.style,{display:"block",width:"100%",height:"100%"}),this.screen.appendChild(t)}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.needsRender=!0}render(t){!this.needsRender&&t.matrixWorld.equals(this.lastCameraMatrix)&&t.projectionMatrix.equals(this.lastProjectionMatrix)||(this.renderer.render(this.scene,t),this.lastCameraMatrix.copy(t.matrixWorld),this.lastProjectionMatrix.copy(t.projectionMatrix),this.needsRender=!1)}destroy(){window.removeEventListener("pointerdown",this.activateOnFirstInteraction),this.player.removeFromParent(),this.renderer.domElement.remove()}}class P1{constructor(t){this.reqId=0,this.scratchResetTimer=null,this.running=!0,this.frameInterval=window.matchMedia("(max-width: 768px)").matches?1e3/30:0,this.lastFrameTime=0,this.handleVisibilityChange=()=>{if(document.hidden){this.running=!1,cancelAnimationFrame(this.reqId);return}this.running||(this.running=!0,this.clock.getDelta(),this.loop())},this.loop=(e=0)=>{if(this.frameInterval&&e-this.lastFrameTime<this.frameInterval){this.reqId=requestAnimationFrame(this.loop);return}this.lastFrameTime=e;const i=this.clock.getDelta();this.discoBall.update(i,this.renderer.instance,this.scene.instance),this.camera.update(),this.room.update(i),this.room.updateWallVisibility(this.camera.instance.position),this.renderer.render(this.scene.instance,this.camera.instance),this.youtubeWallPlayer.render(this.camera.instance),this.reqId=requestAnimationFrame(this.loop)},this.clock=new Lm,this.sizes=new e1(t),this.scene=new n1,this.camera=new r1(this.sizes,t),this.renderer=new o1(this.sizes,t),this.room=new S1,this.camera.setNavigationRoot(this.room.group),this.camera.addInteraction(this.room.robotDJ.group,()=>this.room.robotDJ.performDance()),this.room.djConsole.turntables.forEach(e=>{this.camera.addInteraction(e,()=>this.scratch())}),this.camera.addInteraction(this.room.bar.bartender.servedDrink,()=>this.room.bar.bartender.activateDrink()),this.camera.addInteraction(this.room.payphone.group,()=>this.room.payphone.ring()),this.camera.addInteraction(this.room.djConsole.group,()=>this.room.robotDJ.performDance()),this.camera.addInteraction(this.room.bar.group,()=>this.room.bar.throwShaker()),this.camera.addInteraction(this.room.birthdayCake.group,()=>this.room.celebrateCake()),this.discoBall=new b1,this.lighting=new E1,this.youtubeWallPlayer=new C1(this.sizes,t),this.scene.instance.add(this.room.group,this.discoBall.group,this.lighting.group),this.sizes.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.loop()}triggerConfetti(){this.room&&this.room.startConfetti()}activateYouTubePlayer(){this.youtubeWallPlayer.activate()}scratch(){this.room.djConsole.scratch(),this.room.movingLightRig.boost(),this.scratchResetTimer!==null&&window.clearTimeout(this.scratchResetTimer),this.scratchResetTimer=window.setTimeout(()=>{this.scratchResetTimer=null},1100)}resize(){this.camera.resize(),this.renderer.resize(),this.youtubeWallPlayer.resize()}destroy(){this.running=!1,cancelAnimationFrame(this.reqId),document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.camera.destroy(),this.sizes.destroy(),this.scratchResetTimer!==null&&window.clearTimeout(this.scratchResetTimer),this.youtubeWallPlayer.destroy(),this.renderer.instance.dispose(),this.renderer.instance.domElement.remove()}}const L1={key:0,class:"welcome-screen","aria-labelledby":"welcome-title"},I1={class:"drawer-content"},D1={class:"drawer-body"},U1={key:0},N1={key:1,class:"form-section"},O1={key:0,class:"approval-confirmation",role:"status","aria-live":"polite"},F1={class:"input-group"},B1={class:"input-group"},z1={class:"input-group"},k1={key:0,class:"error-message"},H1=["disabled"],V1={key:2,class:"party-details-section"},G1={class:"donation-actions"},W1={key:0,class:"program-section","aria-labelledby":"program-title"},X1={class:"program-heading"},q1=["title","aria-label","aria-pressed"],j1={class:"material-symbols-rounded"},Y1={key:0,class:"program-editor"},$1={class:"program-visibility"},K1=["disabled"],Z1={class:"program-editor-list"},J1={class:"program-item-fields"},Q1=["onUpdate:modelValue","aria-label"],tT=["onUpdate:modelValue","aria-label"],eT={class:"program-item-actions"},nT=["disabled","onClick"],iT=["disabled","onClick"],sT=["aria-label","onClick"],rT=["onClick"],oT=["onClick"],aT={key:1,class:"empty-state"},lT={key:2,class:"program-list"},cT={key:0},uT={key:1,class:"program-marker","aria-hidden":"true"},hT={key:3,class:"empty-state"},fT={key:3,class:"donation-detail"},dT={class:"eyebrow"},pT=["href","aria-label"],mT=["src","alt"],gT={key:4},_T={class:"section-heading"},vT={class:"panel-title"},xT={class:"subtitle"},yT=["aria-valuenow"],MT={class:"guest-capacity-label"},ST={class:"guest-capacity-track","aria-hidden":"true"},bT={class:"guest-filters"},ET={class:"filter-field search-field"},wT={key:0,class:"state-filter",role:"group","aria-label":"Filtra per stato"},TT=["title","aria-label","aria-pressed","onClick"],AT={class:"material-symbols-rounded"},RT={key:0,class:"empty-state"},CT={key:1,class:"empty-state"},PT={key:2,class:"guest-list"},LT=["title"],IT={class:"guest-details"},DT={key:0},UT=["aria-label"],NT=["disabled","title","aria-label","onClick"],OT={key:0,class:"status-loader","aria-hidden":"true"},FT={key:1,class:"material-symbols-rounded"},BT={key:5,class:"reserved-section"},zT={class:"input-group"},kT={class:"input-group"},HT={key:0,class:"error-message"},VT=["disabled"],GT={class:"bottom-nav","aria-label":"Navigazione pannello"},WT=["title","aria-label","onClick"],XT={class:"material-symbols-rounded"},jl=300,qT=Ng({__name:"RoomScene",setup(n){const t=re(null);let e=null;const i=re(!0),s=re(!1),r=re("info"),o=re(!1),a=re(""),l=re(null),u=re(!1),c=re(""),h=re(""),d=re(""),m=re(""),g=re(!1),_=re(!1),p=re([]),f=re(!1),y=re(""),M=re(""),S=re(""),L=re(!1),R=re(null),C=re(null),I=re(""),w=re("all"),E=re(!1),P=re([]),U=re(!1),k=re(!1),Z=re(!1),ot=re(!1),Y=re(""),it=re("");let q=null,yt=null;const bt={marco:{name:"Marco",image:"/images/marco.webp",iban:"IT95J0306909606100000018291"},leonardo:{name:"Leonardo",image:"/images/leonardo.webp",iban:"IT19J0801134320000011042626"}},gt=Fr(()=>l.value?bt[l.value]:null),Ut=[{id:"info",icon:"info",label:"Info"},{id:"register",icon:"person_add",label:"Registrati"},{id:"party",icon:"celebration",label:"Festa e donazioni"},{id:"guests",icon:"groups",label:"Lista invitati"},{id:"reserved",icon:"lock",label:"Area riservata"}],qt=[{value:0,label:"In attesa",icon:"hourglass_top"},{value:1,label:"Confermato",icon:"check_circle"},{value:2,label:"Rifiutato",icon:"cancel"}],lt=qt.filter(ht=>ht.value!==0),vt=ht=>lt.filter(z=>ht===0||z.value!==ht),pt=[{value:"all",label:"Tutti gli stati",icon:"groups"},{value:"0",label:"In attesa",icon:"hourglass_top"},{value:"1",label:"Confermati",icon:"check_circle"},{value:"2",label:"Rifiutati",icon:"cancel"}],Mt=ht=>qt.find(z=>z.value===ht)?.label??"Confermato",Nt=Fr(()=>p.value.filter(ht=>(ht.approved??1)===1).length),Ht=Fr(()=>Math.min(Nt.value/jl*100,100)),zt=Fr(()=>{const ht=I.value.toLocaleLowerCase("it");return p.value.filter(z=>{const X=`${z.nome} ${z.cognome}`.toLocaleLowerCase("it"),St=!ht||X.includes(ht),Pt=!f.value||w.value==="all"||z.approved===Number(w.value);return St&&Pt}).sort((z,X)=>f.value&&z.approved!==X.approved?(z.approved??0)-(X.approved??0):`${z.nome} ${z.cognome}`.localeCompare(`${X.nome} ${X.cognome}`,"it"))}),oe=()=>{s.value=!0},v=()=>{i.value=!1,e?.activateYouTubePlayer()},N=()=>{s.value=!1,setTimeout(()=>{r.value="info",o.value=!1,l.value=null,k.value=!1},300)},V=async()=>{U.value=!0;try{const ht=f.value?"/area-riservata/programma-serata":"/programma-serata",z=await te.get(ht);E.value=z.data.visibile,P.value=z.data.voci}catch(ht){te.isAxiosError(ht)&&ht.response?.status===401&&(f.value=!1,k.value=!1,await V())}finally{U.value=!1}},nt=async()=>{_.value=!0;try{const ht=f.value?"/area-riservata/invitati":"/invitati",z=await te.get(ht);p.value=z.data}catch(ht){te.isAxiosError(ht)&&ht.response?.status===401&&(f.value=!1,r.value="reserved")}finally{_.value=!1}},O=ht=>{const z=document.querySelector('meta[name="csrf-token"]');z&&(z.content=ht)},Q=async ht=>{if(ht==="reserved"){const z=await te.get("/area-riservata/status");if(f.value=z.data.authenticated,O(z.data.csrf_token),f.value){r.value="guests",await nt();return}}r.value=ht,ht==="guests"&&await nt(),ht==="party"&&(l.value=null,await V())},st=()=>{const ht=document.querySelector('meta[name="csrf-token"]')?.content;return ht?{"X-CSRF-TOKEN":ht}:{}},rt=async()=>{if(!(!c.value||!h.value||!d.value)){g.value=!0,m.value="";try{await te.post("/invitati",{nome:c.value,cognome:h.value,invitato_da:d.value},{headers:st()}),e?.triggerConfetti(),a.value=c.value,o.value=!0,c.value="",h.value="",d.value="",q!==null&&window.clearTimeout(q),q=window.setTimeout(()=>{o.value=!1,q=null,Q("party")},2200)}catch{m.value="Non è stato possibile inviare la richiesta. Riprova."}finally{g.value=!1}}},T=ht=>{l.value=ht,u.value=!1,r.value="donation"},x=async()=>{if(gt.value){try{await navigator.clipboard.writeText(gt.value.iban)}catch{const ht=document.createElement("textarea");ht.value=gt.value.iban,ht.style.position="fixed",ht.style.opacity="0",document.body.appendChild(ht),ht.select(),document.execCommand("copy"),ht.remove()}u.value=!0,yt!==null&&window.clearTimeout(yt),yt=window.setTimeout(()=>{u.value=!1,yt=null},2e3)}},F=async()=>{k.value=!k.value,k.value&&await V()},G=async()=>{await te.patch("/area-riservata/programma-serata/visibilita",{visibile:E.value},{headers:st()})},K=async()=>{if(it.value){Z.value=!0;try{await te.post("/area-riservata/programma-serata",{orario:Y.value||null,descrizione:it.value},{headers:st()}),Y.value="",it.value="",await V()}finally{Z.value=!1}}},$=async ht=>{await te.patch(`/area-riservata/programma-serata/${ht.id}`,{orario:ht.orario||null,descrizione:ht.descrizione},{headers:st()}),await V()},xt=async ht=>{ht.orario=null,await $(ht)},dt=async ht=>{await te.delete(`/area-riservata/programma-serata/${ht.id}`,{headers:st()}),await V()},mt=async(ht,z)=>{if(ht.orario||ot.value)return;const X=[...P.value],St=X.findIndex(b=>b.id===ht.id),Pt=St+z;if(St<0||Pt<0||Pt>=X.length)return;const ne=[...X];[ne[St],ne[Pt]]=[ne[Pt],ne[St]],P.value=ne,ot.value=!0;try{const b=await te.patch("/area-riservata/programma-serata/ordine",{voci:ne.map(j=>j.id)},{headers:st()});P.value=b.data.voci}catch{P.value=X}finally{ot.value=!1}},Ct=async()=>{L.value=!0,S.value="";try{const ht=await te.post("/area-riservata/login",{email:y.value,password:M.value},{headers:st()});O(ht.data.csrf_token),f.value=!0,M.value="",e?.triggerConfetti(),r.value="guests",await nt()}catch{S.value="Email o password non corrette."}finally{L.value=!1}},ft=async()=>{const ht=await te.post("/area-riservata/logout",{},{headers:st()});O(ht.data.csrf_token),f.value=!1,p.value=[],I.value="",w.value="all",r.value="reserved"},wt=async(ht,z)=>{if(ht.approved!==z){R.value=ht.id,C.value=z===0?null:z;try{const X=await te.patch(`/area-riservata/invitati/${ht.id}`,{approved:z},{headers:st()});Object.assign(ht,X.data)}finally{R.value=null,C.value=null}}};return su(()=>{t.value&&(e=new P1(t.value))}),ru(()=>{q!==null&&window.clearTimeout(q),yt!==null&&window.clearTimeout(yt),e?.destroy()}),(ht,z)=>(jt(),Kt("div",null,[ut("div",{ref_key:"canvasContainer",ref:t,class:"room-container"},null,512),un(F0,{name:"welcome"},{default:Ud(()=>[i.value?(jt(),Kt("section",L1,[ut("div",{class:"welcome-content"},[z[16]||(z[16]=ut("p",{class:"welcome-eyebrow"},"'66 CELEBRATION",-1)),z[17]||(z[17]=ut("h1",{id:"welcome-title"},[ui("UN INVITO"),ut("br"),ui("PER TE")],-1)),z[18]||(z[18]=ut("div",{class:"explore-globe","aria-hidden":"true"},[ut("span",{class:"globe-ring globe-ring-horizontal"}),ut("span",{class:"globe-ring globe-ring-vertical"}),ut("span",{class:"globe-core material-symbols-rounded"},"open_with")],-1)),z[19]||(z[19]=ut("p",{class:"welcome-hint"},"Entra ed interagisci con gli oggetti",-1)),ut("button",{type:"button",class:"welcome-button",onClick:v},[...z[15]||(z[15]=[ui(" Entra nella festa ",-1),ut("span",{class:"material-symbols-rounded"},"arrow_forward",-1)])])])])):rn("",!0)]),_:1}),ut("button",{id:"info-btn",class:"party-btn",onClick:oe,style:Yr({opacity:s.value?"0":"1",pointerEvents:s.value?"none":"auto"})}," INFO FESTA ",4),ut("section",{id:"info-drawer",class:Oi(["drawer",{open:s.value}]),"aria-label":"Dettagli festa"},[ut("div",I1,[ut("button",{id:"close-btn",class:"icon-button close-btn",title:"Chiudi","aria-label":"Chiudi",onClick:N},[...z[20]||(z[20]=[ut("span",{class:"material-symbols-rounded"},"close",-1)])]),ut("div",D1,[r.value==="info"?(jt(),Kt("div",U1,[z[21]||(z[21]=eh('<p class="eyebrow" style="font-size:1.2rem;margin:0;" data-v-c229bf6a>&#39;66 CELEBRATION</p><h2 class="panel-title" data-v-c229bf6a>INGRESSO LIBERO</h2><p class="subtitle" style="font-size:1.2rem;margin-top:0;" data-v-c229bf6a>Massimo 300 ingressi</p><div class="info-grid" data-v-c229bf6a><div class="info-item" data-v-c229bf6a><span class="material-symbols-rounded" data-v-c229bf6a>calendar_month</span><div data-v-c229bf6a><small data-v-c229bf6a>DATA E ORA</small><strong data-v-c229bf6a>30 ottobre 2026 · 21:30</strong></div></div><div class="info-item" data-v-c229bf6a><span class="material-symbols-rounded" data-v-c229bf6a>location_on</span><div data-v-c229bf6a><small data-v-c229bf6a>LUOGO</small><strong data-v-c229bf6a>TOTEM · Via Vecchia Ferriera, 135, Vicenza</strong></div></div></div><div class="party-preview" data-v-c229bf6a><div class="party-preview-heading" data-v-c229bf6a><span class="material-symbols-rounded" aria-hidden="true" data-v-c229bf6a>movie</span><strong data-v-c229bf6a>Non sarà solo disco...</strong></div><p data-v-c229bf6a>Durante la festa verrà registrato il video della canzone <strong data-v-c229bf6a>“Bacio che schiocca”</strong>. Ascoltatela per caricarci!</p><p data-v-c229bf6a>Qualcuno di noi forse si esibirà con un mini concerto.</p></div><div class="party-theme-note" data-v-c229bf6a><span class="material-symbols-rounded" aria-hidden="true" data-v-c229bf6a>checkroom</span><div class="party-theme-content" data-v-c229bf6a><small data-v-c229bf6a>DRESS CODE</small><strong data-v-c229bf6a>Scegli uno dei tre temi anni &#39;70-&#39;80</strong><ol data-v-c229bf6a><li data-v-c229bf6a>Disco music</li><li data-v-c229bf6a>Paninaro-metallaro</li><li data-v-c229bf6a>Personaggi di fantascienza dei film anni &#39;80-&#39;90</li></ol></div></div>',6)),ut("button",{class:"primary-button",onClick:z[0]||(z[0]=X=>Q("register"))},"Conferma la presenza")])):r.value==="register"?(jt(),Kt("div",N1,[o.value?(jt(),Kt("div",O1,[z[22]||(z[22]=ut("span",{class:"approval-check","aria-hidden":"true"},[ut("svg",{viewBox:"0 0 52 52"},[ut("circle",{cx:"26",cy:"26",r:"24"}),ut("path",{d:"M15 27 23 35 38 18"})])],-1)),z[23]||(z[23]=ut("strong",null,"Richiesta inviata",-1)),ut("p",null,"Grazie, "+Te(a.value)+". La richiesta dovrà essere approvata dagli organizzatori.",1)])):(jt(),Kt(Ge,{key:1},[z[28]||(z[28]=ut("p",{class:"eyebrow"},"REGISTRAZIONE",-1)),z[29]||(z[29]=ut("h2",{class:"panel-title"},"Lascia i tuoi dati",-1)),z[30]||(z[30]=ut("p",{class:"subtitle"},"La presenza sarà confermata dall'organizzatore.",-1)),ut("form",{onSubmit:ul(rt,["prevent"])},[ut("label",F1,[z[24]||(z[24]=ut("span",null,"Nome",-1)),In(ut("input",{"onUpdate:modelValue":z[1]||(z[1]=X=>c.value=X),maxlength:"50",autocomplete:"given-name",required:"",class:"input-field"},null,512),[[Wn,c.value,void 0,{trim:!0}]])]),ut("label",B1,[z[25]||(z[25]=ut("span",null,"Cognome",-1)),In(ut("input",{"onUpdate:modelValue":z[2]||(z[2]=X=>h.value=X),maxlength:"50",autocomplete:"family-name",required:"",class:"input-field"},null,512),[[Wn,h.value,void 0,{trim:!0}]])]),ut("label",z1,[z[26]||(z[26]=ut("span",null,"Invitato da",-1)),In(ut("input",{"onUpdate:modelValue":z[3]||(z[3]=X=>d.value=X),maxlength:"100",required:"",class:"input-field"},null,512),[[Wn,d.value,void 0,{trim:!0}]])]),m.value?(jt(),Kt("p",k1,Te(m.value),1)):rn("",!0),ut("button",{class:"primary-button",type:"submit",disabled:g.value},Te(g.value?"Invio in corso...":"Invia richiesta"),9,H1)],32),ut("button",{class:"guest-list-button",type:"button",onClick:z[4]||(z[4]=X=>Q("guests"))},[...z[27]||(z[27]=[ut("span",{class:"material-symbols-rounded"},"groups",-1),ui(" Lista invitati ",-1)])])],64))])):r.value==="party"?(jt(),Kt("div",V1,[z[42]||(z[42]=eh('<div class="party-details-heading" data-v-c229bf6a><div data-v-c229bf6a><p class="eyebrow" data-v-c229bf6a>UN GESTO CHE RESTA</p><h2 class="panel-title" data-v-c229bf6a>Al posto dei regali</h2></div><a class="party-youtube-link" href="https://www.youtube.com/watch?v=YaC3UY3Dnnk" target="_blank" rel="noopener noreferrer" title="Ascolta Bacio che schiocca su YouTube" aria-label="Ascolta Bacio che schiocca su YouTube" data-v-c229bf6a><span class="material-symbols-rounded" data-v-c229bf6a>smart_display</span></a></div><p class="subtitle" data-v-c229bf6a>se ti fa piacere, puoi contribuire con una donazione a favore di un&#39;associazione. Scegli Marco o Leonardo per vedere tutti i dettagli.</p>',2)),ut("div",G1,[ut("button",{type:"button",class:"donation-button donation-marco",onClick:z[5]||(z[5]=X=>T("marco"))},[...z[31]||(z[31]=[ut("span",{class:"material-symbols-rounded"},"volunteer_activism",-1),ui(" Marco ",-1)])]),ut("button",{type:"button",class:"donation-button donation-leonardo",onClick:z[6]||(z[6]=X=>T("leonardo"))},[...z[32]||(z[32]=[ut("span",{class:"material-symbols-rounded"},"landscape",-1),ui(" Leonardo ",-1)])])]),ut("button",{type:"button",class:"primary-button add-guest-button",onClick:z[7]||(z[7]=X=>Q("register"))},[...z[33]||(z[33]=[ut("span",{class:"material-symbols-rounded"},"person_add",-1),ui(" Aggiungi un altro invitato ",-1)])]),f.value||E.value?(jt(),Kt("section",W1,[ut("div",X1,[z[34]||(z[34]=ut("div",null,[ut("p",{class:"eyebrow"},"LA SERATA"),ut("h2",{id:"program-title",class:"panel-title"},"Programma della serata")],-1)),f.value?(jt(),Kt("button",{key:0,type:"button",class:"icon-button program-edit-button",title:k.value?"Chiudi modifica":"Modifica programma","aria-label":k.value?"Termina modifica programma":"Modifica programma","aria-pressed":k.value,onClick:F},[ut("span",j1,Te(k.value?"done":"edit"),1)],8,q1)):rn("",!0)]),k.value?(jt(),Kt("div",Y1,[ut("label",$1,[In(ut("input",{"onUpdate:modelValue":z[8]||(z[8]=X=>E.value=X),type:"checkbox",onChange:G},null,544),[[a_,E.value]]),z[35]||(z[35]=ut("span",null,"Mostra il programma agli invitati",-1))]),ut("form",{class:"program-new-item",onSubmit:ul(K,["prevent"])},[In(ut("input",{"onUpdate:modelValue":z[9]||(z[9]=X=>Y.value=X),class:"input-field program-time-input",type:"time","aria-label":"Orario nuova voce"},null,512),[[Wn,Y.value]]),In(ut("input",{"onUpdate:modelValue":z[10]||(z[10]=X=>it.value=X),class:"input-field",maxlength:"255",placeholder:"Cosa succederà","aria-label":"Descrizione nuova voce",required:""},null,512),[[Wn,it.value,void 0,{trim:!0}]]),ut("button",{class:"icon-button program-add-button",type:"submit",title:"Aggiungi voce","aria-label":"Aggiungi voce",disabled:Z.value},[...z[36]||(z[36]=[ut("span",{class:"material-symbols-rounded"},"add",-1)])],8,K1)],32),ut("ul",Z1,[(jt(!0),Kt(Ge,null,Ts(P.value,X=>(jt(),Kt("li",{key:X.id},[ut("div",J1,[In(ut("input",{"onUpdate:modelValue":St=>X.orario=St,class:"input-field program-time-input",type:"time","aria-label":`Orario: ${X.descrizione}`},null,8,Q1),[[Wn,X.orario]]),In(ut("input",{"onUpdate:modelValue":St=>X.descrizione=St,class:"input-field",maxlength:"255","aria-label":`Descrizione voce ${X.id}`},null,8,tT),[[Wn,X.descrizione,void 0,{trim:!0}]])]),ut("div",eT,[X.orario?rn("",!0):(jt(),Kt("button",{key:0,type:"button",class:"icon-button",title:"Sposta su","aria-label":"Sposta voce su",disabled:ot.value||P.value[0]?.id===X.id,onClick:St=>mt(X,-1)},[...z[37]||(z[37]=[ut("span",{class:"material-symbols-rounded"},"arrow_upward",-1)])],8,nT)),X.orario?rn("",!0):(jt(),Kt("button",{key:1,type:"button",class:"icon-button",title:"Sposta giù","aria-label":"Sposta voce giù",disabled:ot.value||P.value[P.value.length-1]?.id===X.id,onClick:St=>mt(X,1)},[...z[38]||(z[38]=[ut("span",{class:"material-symbols-rounded"},"arrow_downward",-1)])],8,iT)),X.orario?(jt(),Kt("button",{key:2,type:"button",class:"icon-button program-clear-time",title:"Togli orario","aria-label":`Togli orario da ${X.descrizione}`,onClick:St=>xt(X)},[...z[39]||(z[39]=[ut("span",{class:"material-symbols-rounded"},"schedule",-1)])],8,sT)):rn("",!0),ut("button",{type:"button",class:"icon-button",title:"Salva","aria-label":"Salva voce",onClick:St=>$(X)},[...z[40]||(z[40]=[ut("span",{class:"material-symbols-rounded"},"save",-1)])],8,rT),ut("button",{type:"button",class:"icon-button program-delete-button",title:"Elimina","aria-label":"Elimina voce",onClick:St=>dt(X)},[...z[41]||(z[41]=[ut("span",{class:"material-symbols-rounded"},"delete",-1)])],8,oT)])]))),128))])])):U.value?(jt(),Kt("div",aT,"Caricamento programma...")):P.value.length?(jt(),Kt("ol",lT,[(jt(!0),Kt(Ge,null,Ts(P.value,X=>(jt(),Kt("li",{key:X.id},[X.orario?(jt(),Kt("time",cT,Te(X.orario),1)):(jt(),Kt("span",uT)),ut("strong",null,Te(X.descrizione),1)]))),128))])):f.value?(jt(),Kt("p",hT,"Aggiungi la prima voce al programma.")):rn("",!0)])):rn("",!0)])):r.value==="donation"&&gt.value?(jt(),Kt("div",fT,[ut("button",{type:"button",class:"icon-button donation-back-button",title:"Torna alle informazioni","aria-label":"Torna alle informazioni della festa",onClick:z[11]||(z[11]=X=>Q("party"))},[...z[43]||(z[43]=[ut("span",{class:"material-symbols-rounded"},"arrow_back",-1)])]),ut("p",dT,"DONAZIONE DI "+Te(gt.value.name.toUpperCase()),1),ut("button",{type:"button",class:"primary-button copy-iban-button",onClick:x},[z[44]||(z[44]=ut("span",{class:"material-symbols-rounded"},"content_copy",-1)),ui(" "+Te(u.value?"IBAN copiato":"Copia IBAN"),1)]),ut("a",{class:"donation-image-link",href:gt.value.image,target:"_blank",rel:"noopener noreferrer","aria-label":`Apri a tutto schermo i dettagli per la donazione di ${gt.value.name}`},[ut("img",{src:gt.value.image,alt:`Dettagli per la donazione di ${gt.value.name}`,loading:"eager",fetchpriority:"high",decoding:"async"},null,8,mT)],8,pT)])):r.value==="guests"?(jt(),Kt("div",gT,[z[48]||(z[48]=ut("p",{class:"eyebrow"},"GUEST LIST",-1)),ut("div",_T,[ut("div",null,[ut("h2",vT,Te(f.value?"Gestione invitati":"Lista invitati"),1),ut("p",xT,Te(f.value?"Controlla e aggiorna tutte le richieste.":"Le presenze già confermate."),1),ut("div",{class:"guest-capacity",role:"progressbar","aria-valuemin":"0","aria-valuenow":Nt.value,"aria-valuemax":jl},[ut("div",MT,[z[45]||(z[45]=ut("span",null,"Approvati",-1)),ut("strong",null,Te(Nt.value)+" / "+Te(jl),1)]),ut("span",ST,[ut("span",{style:Yr({width:`${Ht.value}%`})},null,4)])],8,yT)]),f.value?(jt(),Kt("button",{key:0,class:"icon-button logout-button",title:"Esci","aria-label":"Esci",onClick:ft},[...z[46]||(z[46]=[ut("span",{class:"material-symbols-rounded"},"logout",-1)])])):rn("",!0)]),ut("div",bT,[ut("label",ET,[z[47]||(z[47]=ut("span",{class:"material-symbols-rounded"},"search",-1)),In(ut("input",{"onUpdate:modelValue":z[12]||(z[12]=X=>I.value=X),type:"search",placeholder:"Cerca nome o cognome","aria-label":"Cerca invitato"},null,512),[[Wn,I.value,void 0,{trim:!0}]])]),f.value?(jt(),Kt("div",wT,[(jt(),Kt(Ge,null,Ts(pt,X=>ut("button",{key:X.value,type:"button",class:Oi(["state-filter-button",[{active:w.value===X.value},`filter-${X.value}`]]),title:X.label,"aria-label":X.label,"aria-pressed":w.value===X.value,onClick:St=>w.value=X.value},[ut("span",AT,Te(X.icon),1)],10,TT)),64))])):rn("",!0)]),_.value?(jt(),Kt("div",RT,"Caricamento...")):zt.value.length===0?(jt(),Kt("div",CT,Te(p.value.length>0?"Nessun invitato corrisponde ai filtri.":f.value?"Non ci sono ancora richieste.":"Nessun invitato ancora confermato."),1)):(jt(),Kt("ul",PT,[(jt(!0),Kt(Ge,null,Ts(zt.value,X=>(jt(),Kt("li",{key:X.id},[ut("span",{class:Oi(["material-symbols-rounded guest-status-icon",`guest-status-${X.approved??1}`]),title:Mt(X.approved??1)},"person",10,LT),ut("div",IT,[ut("strong",null,Te(X.nome)+" "+Te(X.cognome),1),f.value?(jt(),Kt("small",DT,"Invitato da "+Te(X.invitato_da),1)):rn("",!0)]),f.value?(jt(),Kt("div",{key:0,class:"status-control",role:"group","aria-label":`Stato invito di ${X.nome} ${X.cognome}`},[(jt(!0),Kt(Ge,null,Ts(vt(X.approved),St=>(jt(),Kt("button",{key:St.value,type:"button",class:Oi(["status-button",`status-${St.value}`]),disabled:R.value===X.id,title:St.label,"aria-label":`${St.label}: ${X.nome} ${X.cognome}`,onClick:Pt=>wt(X,St.value)},[R.value===X.id&&C.value===St.value?(jt(),Kt("span",OT)):(jt(),Kt("span",FT,Te(St.icon),1))],10,NT))),128))],8,UT)):rn("",!0)]))),128))]))])):r.value==="reserved"?(jt(),Kt("div",BT,[z[51]||(z[51]=ut("span",{class:"material-symbols-rounded lock-icon"},"admin_panel_settings",-1)),z[52]||(z[52]=ut("p",{class:"eyebrow"},"AREA RISERVATA",-1)),z[53]||(z[53]=ut("p",{class:"subtitle"},"Accedi per gestire le richieste degli invitati.",-1)),ut("form",{class:"login-form",onSubmit:ul(Ct,["prevent"])},[ut("label",zT,[z[49]||(z[49]=ut("span",null,"Email",-1)),In(ut("input",{"onUpdate:modelValue":z[13]||(z[13]=X=>y.value=X),type:"email",autocomplete:"username",required:"",class:"input-field"},null,512),[[Wn,y.value,void 0,{trim:!0}]])]),ut("label",kT,[z[50]||(z[50]=ut("span",null,"Password",-1)),In(ut("input",{"onUpdate:modelValue":z[14]||(z[14]=X=>M.value=X),type:"password",autocomplete:"current-password",required:"",class:"input-field"},null,512),[[Wn,M.value]])]),S.value?(jt(),Kt("p",HT,Te(S.value),1)):rn("",!0),ut("button",{class:"primary-button",type:"submit",disabled:L.value},Te(L.value?"Accesso...":"Accedi"),9,VT)],32)])):rn("",!0)]),ut("nav",GT,[(jt(),Kt(Ge,null,Ts(Ut,X=>ut("button",{key:X.id,class:Oi(["nav-button",{active:r.value===X.id}]),title:X.label,"aria-label":X.label,onClick:St=>Q(X.id)},[ut("span",XT,Te(X.icon),1)],10,WT)),64))])])],2)]))}}),jT=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},YT=jT(qT,[["__scopeId","data-v-c229bf6a"]]),$T={__name:"App",setup(n){return(t,e)=>(jt(),hp(YT))}};window.axios=te;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const KT=d_($T);KT.mount("#app");
