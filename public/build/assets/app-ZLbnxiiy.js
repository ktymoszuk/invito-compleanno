function zc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const de={},$s=[],Kn=()=>{},Zf=()=>!1,Ea=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),wa=n=>n.startsWith("onUpdate:"),Ne=Object.assign,kc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Am=Object.prototype.hasOwnProperty,oe=(n,t)=>Am.call(n,t),Ht=Array.isArray,Ks=n=>no(n)==="[object Map]",Jf=n=>no(n)==="[object Set]",Uu=n=>no(n)==="[object Date]",Yt=n=>typeof n=="function",Me=n=>typeof n=="string",Zn=n=>typeof n=="symbol",le=n=>n!==null&&typeof n=="object",Qf=n=>(le(n)||Yt(n))&&Yt(n.then)&&Yt(n.catch),td=Object.prototype.toString,no=n=>td.call(n),Rm=n=>no(n).slice(8,-1),ed=n=>no(n)==="[object Object]",Hc=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Or=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ta=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Cm=/-\w/g,Bn=Ta(n=>n.replace(Cm,t=>t.slice(1).toUpperCase())),Pm=/\B([A-Z])/g,_s=Ta(n=>n.replace(Pm,"-$1").toLowerCase()),nd=Ta(n=>n.charAt(0).toUpperCase()+n.slice(1)),ja=Ta(n=>n?`on${nd(n)}`:""),jn=(n,t)=>!Object.is(n,t),qo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},id=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Vc=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Lm=n=>{const t=Me(n)?Number(n):NaN;return isNaN(t)?n:t};let Nu;const Aa=()=>Nu||(Nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wr(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Me(i)?Nm(i):Wr(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Me(n)||le(n))return n}const Im=/;(?![^(]*\))/g,Dm=/:([^]+)/,Um=/\/\*[^]*?\*\//g;function Nm(n){const t={};return n.replace(Um,"").split(Im).forEach(e=>{if(e){const i=e.split(Dm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ci(n){let t="";if(Me(n))t=n;else if(Ht(n))for(let e=0;e<n.length;e++){const i=ci(n[e]);i&&(t+=i+" ")}else if(le(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Om="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fm=zc(Om);function sd(n){return!!n||n===""}function Bm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Gc(n[i],t[i]);return e}function Gc(n,t){if(n===t)return!0;let e=Uu(n),i=Uu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Zn(n),i=Zn(t),e||i)return n===t;if(e=Ht(n),i=Ht(t),e||i)return e&&i?Bm(n,t):!1;if(e=le(n),i=le(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Gc(n[o],t[o]))return!1}}return String(n)===String(t)}const rd=n=>!!(n&&n.__v_isRef===!0),ze=n=>Me(n)?n:n==null?"":Ht(n)||le(n)&&(n.toString===td||!Yt(n.toString))?rd(n)?ze(n.value):JSON.stringify(n,od,2):String(n),od=(n,t)=>rd(t)?od(n,t.value):Ks(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ya(i,r)+" =>"]=s,e),{})}:Jf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ya(e))}:Zn(t)?Ya(t):le(t)&&!Ht(t)&&!ed(t)?String(t):t,Ya=(n,t="")=>{var e;return Zn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};let Ve;class zm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ve&&(Ve.active?(this.parent=Ve,this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){if(this._on>0&&--this._on===0){if(Ve===this)Ve=this.prevScope;else{let t=Ve;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function km(){return Ve}let _e;const $a=new WeakSet;class ad{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&(Ve.active?Ve.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),ud(this);const t=_e,e=zn;_e=this,zn=!0;try{return this.fn()}finally{hd(this),_e=t,zn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)qc(t);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let ld=0,Fr,Br;function cd(n,t=!1){if(n.flags|=8,t){n.next=Br,Br=n;return}n.next=Fr,Fr=n}function Wc(){ld++}function Xc(){if(--ld>0)return;if(Br){let t=Br;for(Br=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Fr;){let t=Fr;for(Fr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function ud(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function hd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),qc(i),Hm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Vl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(fd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xr)||(n.globalVersion=Xr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Vl(n))))return;n.flags|=2;const t=n.dep,e=_e,i=zn;_e=n,zn=!0;try{ud(n);const s=n.fn(n._value);(t.version===0||jn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,zn=i,hd(n),n.flags&=-3}}function qc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)qc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Hm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let zn=!0;const dd=[];function gi(){dd.push(zn),zn=!1}function _i(){const n=dd.pop();zn=n===void 0?!0:n}function Ou(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let Xr=0;class Vm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!zn||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new Vm(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,pd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,Xr++,this.notify(t)}notify(t){Wc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Xc()}}}function pd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)pd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Gl=new WeakMap,as=Symbol(""),Wl=Symbol(""),qr=Symbol("");function Ke(n,t,e){if(zn&&_e){let i=Gl.get(n);i||Gl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new jc),s.map=i,s.key=e),s.track()}}function fi(n,t,e,i,s,r){const o=Gl.get(n);if(!o){Xr++;return}const a=l=>{l&&l.trigger()};if(Wc(),t==="clear")o.forEach(a);else{const l=Ht(n),u=l&&Hc(e);if(l&&e==="length"){const c=Number(i);o.forEach((h,f)=>{(f==="length"||f===qr||!Zn(f)&&f>=c)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(qr)),t){case"add":l?u&&a(o.get("length")):(a(o.get(as)),Ks(n)&&a(o.get(Wl)));break;case"delete":l||(a(o.get(as)),Ks(n)&&a(o.get(Wl)));break;case"set":Ks(n)&&a(o.get(as));break}}Xc()}function Ss(n){const t=ne(n);return t===n?t:(Ke(t,"iterate",qr),Tn(n)?t:t.map(kn))}function Ra(n){return Ke(n=ne(n),"iterate",qr),n}function Wn(n,t){return vi(n)?ir(ls(n)?kn(t):t):kn(t)}const Gm={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,n=>Wn(this,n))},concat(...n){return Ss(this).concat(...n.map(t=>Ht(t)?Ss(t):t))},entries(){return Ka(this,"entries",n=>(n[1]=Wn(this,n[1]),n))},every(n,t){return ti(this,"every",n,t,void 0,arguments)},filter(n,t){return ti(this,"filter",n,t,e=>e.map(i=>Wn(this,i)),arguments)},find(n,t){return ti(this,"find",n,t,e=>Wn(this,e),arguments)},findIndex(n,t){return ti(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ti(this,"findLast",n,t,e=>Wn(this,e),arguments)},findLastIndex(n,t){return ti(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ti(this,"forEach",n,t,void 0,arguments)},includes(...n){return Za(this,"includes",n)},indexOf(...n){return Za(this,"indexOf",n)},join(n){return Ss(this).join(n)},lastIndexOf(...n){return Za(this,"lastIndexOf",n)},map(n,t){return ti(this,"map",n,t,void 0,arguments)},pop(){return _r(this,"pop")},push(...n){return _r(this,"push",n)},reduce(n,...t){return Fu(this,"reduce",n,t)},reduceRight(n,...t){return Fu(this,"reduceRight",n,t)},shift(){return _r(this,"shift")},some(n,t){return ti(this,"some",n,t,void 0,arguments)},splice(...n){return _r(this,"splice",n)},toReversed(){return Ss(this).toReversed()},toSorted(n){return Ss(this).toSorted(n)},toSpliced(...n){return Ss(this).toSpliced(...n)},unshift(...n){return _r(this,"unshift",n)},values(){return Ka(this,"values",n=>Wn(this,n))}};function Ka(n,t,e){const i=Ra(n),s=i[t]();return i!==n&&!Tn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Wm=Array.prototype;function ti(n,t,e,i,s,r){const o=Ra(n),a=o!==n&&!Tn(n),l=o[t];if(l!==Wm[t]){const h=l.apply(n,r);return a?kn(h):h}let u=e;o!==n&&(a?u=function(h,f){return e.call(this,Wn(n,h),f,n)}:e.length>2&&(u=function(h,f){return e.call(this,h,f,n)}));const c=l.call(o,u,i);return a&&s?s(c):c}function Fu(n,t,e,i){const s=Ra(n),r=s!==n&&!Tn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(u,c,h){return a&&(a=!1,u=Wn(n,u)),e.call(this,u,Wn(n,c),h,n)}):e.length>3&&(o=function(u,c,h){return e.call(this,u,c,h,n)}));const l=s[t](o,...i);return a?Wn(n,l):l}function Za(n,t,e){const i=ne(n);Ke(i,"iterate",qr);const s=i[t](...e);return(s===-1||s===!1)&&Zc(e[0])?(e[0]=ne(e[0]),i[t](...e)):s}function _r(n,t,e=[]){gi(),Wc();const i=ne(n)[t].apply(n,e);return Xc(),_i(),i}const Xm=zc("__proto__,__v_isRef,__isVue"),md=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function qm(n){Zn(n)||(n=String(n));const t=ne(this);return Ke(t,"has",n),t.hasOwnProperty(n)}class gd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?ng:yd:r?xd:vd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ht(t);if(!s){let l;if(o&&(l=Gm[e]))return l;if(e==="hasOwnProperty")return qm}const a=Reflect.get(t,e,Ze(t)?t:i);if((Zn(e)?md.has(e):Xm(e))||(s||Ke(t,"get",e),r))return a;if(Ze(a)){const l=o&&Hc(e)?a:a.value;return s&&le(l)?ql(l):l}return le(a)?s?ql(a):$c(a):a}}class _d extends gd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ht(t)&&Hc(e);if(!this._isShallow){const u=vi(r);if(!Tn(i)&&!vi(i)&&(r=ne(r),i=ne(i)),!o&&Ze(r)&&!Ze(i))return u||(r.value=i),!0}const a=o?Number(e)<t.length:oe(t,e),l=Reflect.set(t,e,i,Ze(t)?t:s);return t===ne(s)&&l&&(a?jn(i,r)&&fi(t,"set",e,i):fi(t,"add",e,i)),l}deleteProperty(t,e){const i=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&fi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Zn(e)||!md.has(e))&&Ke(t,"has",e),i}ownKeys(t){return Ke(t,"iterate",Ht(t)?"length":as),Reflect.ownKeys(t)}}class jm extends gd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Ym=new _d,$m=new jm,Km=new _d(!0);const Xl=n=>n,po=n=>Reflect.getPrototypeOf(n);function Zm(n,t,e){return function(...i){const s=this.__v_raw,r=ne(s),o=Ks(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),c=e?Xl:t?ir:kn;return!t&&Ke(r,"iterate",l?Wl:as),Ne(Object.create(u),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}}})}}function mo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Jm(n,t){const e={get(s){const r=this.__v_raw,o=ne(r),a=ne(s);n||(jn(s,a)&&Ke(o,"get",s),Ke(o,"get",a));const{has:l}=po(o),u=t?Xl:n?ir:kn;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ke(ne(s),"iterate",as),s.size},has(s){const r=this.__v_raw,o=ne(r),a=ne(s);return n||(jn(s,a)&&Ke(o,"has",s),Ke(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ne(a),u=t?Xl:n?ir:kn;return!n&&Ke(l,"iterate",as),a.forEach((c,h)=>s.call(r,u(c),u(h),o))}};return Ne(e,n?{add:mo("add"),set:mo("set"),delete:mo("delete"),clear:mo("clear")}:{add(s){const r=ne(this),o=po(r),a=ne(s),l=!t&&!Tn(s)&&!vi(s)?a:s;return o.has.call(r,l)||jn(s,l)&&o.has.call(r,s)||jn(a,l)&&o.has.call(r,a)||(r.add(l),fi(r,"add",l,l)),this},set(s,r){!t&&!Tn(r)&&!vi(r)&&(r=ne(r));const o=ne(this),{has:a,get:l}=po(o);let u=a.call(o,s);u||(s=ne(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?jn(r,c)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=ne(this),{has:o,get:a}=po(r);let l=o.call(r,s);l||(s=ne(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&fi(r,"delete",s,void 0),u},clear(){const s=ne(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Zm(s,n,t)}),e}function Yc(n,t){const e=Jm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(oe(e,s)&&s in i?e:i,s,r)}const Qm={get:Yc(!1,!1)},tg={get:Yc(!1,!0)},eg={get:Yc(!0,!1)};const vd=new WeakMap,xd=new WeakMap,yd=new WeakMap,ng=new WeakMap;function ig(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $c(n){return vi(n)?n:Kc(n,!1,Ym,Qm,vd)}function sg(n){return Kc(n,!1,Km,tg,xd)}function ql(n){return Kc(n,!0,$m,eg,yd)}function Kc(n,t,e,i,s){if(!le(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=ig(Rm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function ls(n){return vi(n)?ls(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function Tn(n){return!!(n&&n.__v_isShallow)}function Zc(n){return n?!!n.__v_raw:!1}function ne(n){const t=n&&n.__v_raw;return t?ne(t):n}function rg(n){return!oe(n,"__v_skip")&&Object.isExtensible(n)&&id(n,"__v_skip",!0),n}const kn=n=>le(n)?$c(n):n,ir=n=>le(n)?ql(n):n;function Ze(n){return n?n.__v_isRef===!0:!1}function me(n){return og(n,!1)}function og(n,t){return Ze(n)?n:new ag(n,t)}class ag{constructor(t,e){this.dep=new jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ne(t),this._value=e?t:kn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Tn(t)||vi(t);t=i?t:ne(t),jn(t,e)&&(this._rawValue=t,this._value=i?t:kn(t),this.dep.trigger())}}function lg(n){return Ze(n)?n.value:n}const cg={get:(n,t,e)=>t==="__v_raw"?n:lg(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ze(s)&&!Ze(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Md(n){return ls(n)?n:new Proxy(n,cg)}class ug{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return cd(this,!0),!0}get value(){const t=this.dep.track();return fd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function hg(n,t,e=!1){let i,s;return Yt(n)?i=n:(i=n.get,s=n.set),new ug(i,s,e)}const go={},ra=new WeakMap;let Qi;function fg(n,t=!1,e=Qi){if(e){let i=ra.get(e);i||ra.set(e,i=[]),i.push(n)}}function dg(n,t,e=de){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,u=b=>s?b:Tn(b)||s===!1||s===0?di(b,1):di(b);let c,h,f,p,g=!1,_=!1;if(Ze(n)?(h=()=>n.value,g=Tn(n)):ls(n)?(h=()=>u(n),g=!0):Ht(n)?(_=!0,g=n.some(b=>ls(b)||Tn(b)),h=()=>n.map(b=>{if(Ze(b))return b.value;if(ls(b))return u(b);if(Yt(b))return l?l(b,2):b()})):Yt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){gi();try{f()}finally{_i()}}const b=Qi;Qi=c;try{return l?l(n,3,[p]):n(p)}finally{Qi=b}}:h=Kn,t&&s){const b=h,I=s===!0?1/0:s;h=()=>di(b(),I)}const m=km(),d=()=>{c.stop(),m&&m.active&&kc(m.effects,c)};if(r&&t){const b=t;t=(...I)=>{const C=b(...I);return d(),C}}let M=_?new Array(n.length).fill(go):go;const y=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(t){const I=c.run();if(b||s||g||(_?I.some((C,P)=>jn(C,M[P])):jn(I,M))){f&&f();const C=Qi;Qi=c;try{const P=[I,M===go?void 0:_&&M[0]===go?[]:M,p];M=I,l?l(t,3,P):t(...P)}finally{Qi=C}}}else c.run()};return a&&a(y),c=new ad(h),c.scheduler=o?()=>o(y,!1):y,p=b=>fg(b,!1,c),f=c.onStop=()=>{const b=ra.get(c);if(b){if(l)l(b,4);else for(const I of b)I();ra.delete(c)}},t?i?y(!0):M=c.run():o?o(y.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function di(n,t=1/0,e){if(t<=0||!le(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ze(n))di(n.value,t,e);else if(Ht(n))for(let i=0;i<n.length;i++)di(n[i],t,e);else if(Jf(n)||Ks(n))n.forEach(i=>{di(i,t,e)});else if(ed(n)){for(const i in n)di(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],t,e)}return n}function io(n,t,e,i){try{return i?n(...i):n()}catch(s){Ca(s,t,e)}}function Rn(n,t,e,i){if(Yt(n)){const s=io(n,t,e,i);return s&&Qf(s)&&s.catch(r=>{Ca(r,t,e)}),s}if(Ht(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],t,e,i));return s}}function Ca(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||de;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,l,u)===!1)return}a=a.parent}if(r){gi(),io(r,null,10,[n,l,u]),_i();return}}pg(n,e,s,i,o)}function pg(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const nn=[];let Gn=-1;const Zs=[];let Pi=null,qs=0;const Sd=Promise.resolve();let oa=null;function mg(n){const t=oa||Sd;return n?t.then(this?n.bind(this):n):t}function gg(n){let t=Gn+1,e=nn.length;for(;t<e;){const i=t+e>>>1,s=nn[i],r=jr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Jc(n){if(!(n.flags&1)){const t=jr(n),e=nn[nn.length-1];!e||!(n.flags&2)&&t>=jr(e)?nn.push(n):nn.splice(gg(t),0,n),n.flags|=1,bd()}}function bd(){oa||(oa=Sd.then(wd))}function _g(n){Ht(n)?Zs.push(...n):Pi&&n.id===-1?Pi.splice(qs+1,0,n):n.flags&1||(Zs.push(n),n.flags|=1),bd()}function Bu(n,t,e=Gn+1){for(;e<nn.length;e++){const i=nn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;nn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ed(n){if(Zs.length){const t=[...new Set(Zs)].sort((e,i)=>jr(e)-jr(i));if(Zs.length=0,Pi){Pi.push(...t);return}for(Pi=t,qs=0;qs<Pi.length;qs++){const e=Pi[qs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Pi=null,qs=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wd(n){try{for(Gn=0;Gn<nn.length;Gn++){const t=nn[Gn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),io(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Gn<nn.length;Gn++){const t=nn[Gn];t&&(t.flags&=-2)}Gn=-1,nn.length=0,Ed(),oa=null,(nn.length||Zs.length)&&wd()}}let wn=null,Td=null;function aa(n){const t=wn;return wn=n,Td=n&&n.type.__scopeId||null,t}function Ad(n,t=wn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ua(-1);const r=aa(t),o=cs.length;let a;try{a=n(...s)}finally{for(let l=cs.length;l>o;l--)np();aa(r),i._d&&ua(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Hi(n,t){if(wn===null)return n;const e=Ua(wn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=de]=t[s];r&&(Yt(r)&&(r={mounted:r,updated:r}),r.deep&&di(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Vi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(gi(),Rn(l,e,8,[n.el,a,n,t]),_i())}}function vg(n,t){if(rn){let e=rn.provides;const i=rn.parent&&rn.parent.provides;i===e&&(e=rn.provides=Object.create(i)),e[n]=t}}function jo(n,t,e=!1){const i=op();if(i||Js){let s=Js?Js._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Yt(t)?t.call(i&&i.proxy):t}}const xg=Symbol.for("v-scx"),yg=()=>jo(xg);function Ja(n,t,e){return Rd(n,t,e)}function Rd(n,t,e=de){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ne({},e),l=t&&i||!t&&r!=="post";let u;if(Kr){if(r==="sync"){const p=yg();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Kn,p.resume=Kn,p.pause=Kn,p}}const c=rn;a.call=(p,g,_)=>Rn(p,c,g,_);let h=!1;r==="post"?a.scheduler=p=>{un(p,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Jc(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const f=dg(n,t,a);return Kr&&(u?u.push(f):l&&f()),f}function Mg(n,t,e){const i=this.proxy,s=Me(n)?n.includes(".")?Cd(i,n):()=>i[n]:n.bind(i,i);let r;Yt(t)?r=t:(r=t.handler,e=t);const o=so(this),a=Rd(s,r.bind(i),e);return o(),a}function Cd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Sg=Symbol("_vte"),Pd=n=>n.__isTeleport,En=Symbol("_leaveCb"),vr=Symbol("_enterCb");function bg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qc(()=>{n.isMounted=!0}),Bd(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],Ld={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},Id=n=>{const t=n.subTree;return t.component?Id(t.component):t},Eg={name:"BaseTransition",props:Ld,setup(n,{slots:t}){const e=op(),i=bg();return()=>{const s=t.default&&Nd(t.default(),!0),r=s&&s.length?Dd(s):e.subTree?Un():void 0;if(!r)return;const o=ne(n),{mode:a}=o;if(i.isLeaving)return Qa(r);const l=zu(r);if(!l)return Qa(r);let u=jl(l,o,i,e,h=>u=h);l.type!==sn&&Yr(l,u);let c=e.subTree&&zu(e.subTree);if(c&&c.type!==sn&&!es(c,l)&&Id(e).type!==sn){let h=jl(c,o,i,e);if(Yr(c,h),a==="out-in"&&l.type!==sn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,c=void 0},Qa(r);a==="in-out"&&l.type!==sn?h.delayLeave=(f,p,g)=>{const _=Ud(i,c);_[String(c.key)]=c,f[En]=()=>{p(),f[En]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function Dd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==sn){t=e;break}}return t}const wg=Eg;function Ud(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function jl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:d,onAfterAppear:M,onAppearCancelled:y}=t,b=String(n.key),I=Ud(e,n),C=(w,E)=>{w&&Rn(w,i,9,E)},P=(w,E)=>{const L=E[1];C(w,E),Ht(w)?w.every(D=>D.length<=1)&&L():w.length<=1&&L()},U={mode:o,persisted:a,beforeEnter(w){let E=l;if(!e.isMounted)if(r)E=m||l;else return;w[En]&&w[En](!0);const L=I[b];L&&es(n,L)&&L.el[En]&&L.el[En](),C(E,[w])},enter(w){if(I[b]===n)return;let E=u,L=c,D=h;if(!e.isMounted)if(r)E=d||u,L=M||c,D=y||h;else return;let H=!1;w[vr]=rt=>{H||(H=!0,rt?C(D,[w]):C(L,[w]),U.delayedLeave&&U.delayedLeave(),w[vr]=void 0)};const K=w[vr].bind(null,!1);E?P(E,[w,K]):K()},leave(w,E){const L=String(n.key);if(w[vr]&&w[vr](!0),e.isUnmounting)return E();C(f,[w]);let D=!1;w[En]=K=>{D||(D=!0,E(),K?C(_,[w]):C(g,[w]),w[En]=void 0,I[L]===n&&delete I[L])};const H=w[En].bind(null,!1);I[L]=n,p?P(p,[w,H]):H()},clone(w){const E=jl(w,t,e,i,s);return s&&s(E),E}};return U}function Qa(n){if(Pa(n))return n=Oi(n),n.children=null,n}function zu(n){if(!Pa(n))return Pd(n.type)&&n.children?Dd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Yt(e.default))return e.default()}}function Yr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Yr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Nd(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===hn?(o.patchFlag&128&&s++,i=i.concat(Nd(o.children,t,a))):(t||o.type!==sn)&&i.push(a!=null?Oi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Tg(n,t){return Yt(n)?Ne({name:n.name},t,{setup:n}):n}function Od(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ku(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const la=new WeakMap;function zr(n,t,e,i,s=!1){if(Ht(n)){n.forEach((_,m)=>zr(_,t&&(Ht(t)?t[m]:t),e,i,s));return}if(kr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ua(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=t&&t.r,c=a.refs===de?a.refs={}:a.refs,h=a.setupState,f=ne(h),p=h===de?Zf:_=>ku(c,_)?!1:oe(f,_),g=(_,m)=>!(m&&ku(c,m));if(u!=null&&u!==l){if(Hu(t),Me(u))c[u]=null,p(u)&&(h[u]=null);else if(Ze(u)){const _=t;g(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if(Yt(l))io(l,a,12,[o,c]);else{const _=Me(l),m=Ze(l);if(_||m){const d=()=>{if(n.f){const M=_?p(l)?h[l]:c[l]:g()||!n.k?l.value:c[n.k];if(s)Ht(M)&&kc(M,r);else if(Ht(M))M.includes(r)||M.push(r);else if(_)c[l]=[r],p(l)&&(h[l]=c[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(c[n.k]=y)}}else _?(c[l]=o,p(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const M=()=>{d(),la.delete(n)};M.id=-1,la.set(n,M),un(M,e)}else Hu(n),d()}}}function Hu(n){const t=la.get(n);t&&(t.flags|=8,la.delete(n))}Aa().requestIdleCallback;Aa().cancelIdleCallback;const kr=n=>!!n.type.__asyncLoader,Pa=n=>n.type.__isKeepAlive;function Ag(n,t){Fd(n,"a",t)}function Rg(n,t){Fd(n,"da",t)}function Fd(n,t,e=rn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(La(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Pa(s.parent.vnode)&&Cg(i,t,e,s),s=s.parent}}function Cg(n,t,e,i){const s=La(t,n,i,!0);tu(()=>{kc(i[t],s)},e)}function La(n,t,e=rn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{gi();const a=so(e),l=Rn(t,e,n,o);return a(),_i(),l});return i?s.unshift(r):s.push(r),r}}const yi=n=>(t,e=rn)=>{(!Kr||n==="sp")&&La(n,(...i)=>t(...i),e)},Pg=yi("bm"),Qc=yi("m"),Lg=yi("bu"),Ig=yi("u"),Bd=yi("bum"),tu=yi("um"),Dg=yi("sp"),Ug=yi("rtg"),Ng=yi("rtc");function Og(n,t=rn){La("ec",n,t)}const Fg=Symbol.for("v-ndc");function _o(n,t,e,i){let s;const r=e,o=Ht(n);if(o||Me(n)){const a=o&&ls(n);let l=!1,u=!1;a&&(l=!Tn(n),u=vi(n),n=Ra(n)),s=new Array(n.length);for(let c=0,h=n.length;c<h;c++)s[c]=t(l?u?ir(kn(n[c])):kn(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(le(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=t(n[c],c,l,r)}}else s=[];return s}const Yl=n=>n?ap(n)?Ua(n):Yl(n.parent):null,Hr=Ne(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yl(n.parent),$root:n=>Yl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>kd(n),$forceUpdate:n=>n.f||(n.f=()=>{Jc(n.update)}),$nextTick:n=>n.n||(n.n=mg.bind(n.proxy)),$watch:n=>Mg.bind(n)}),tl=(n,t)=>n!==de&&!n.__isScriptSetup&&oe(n,t),Bg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(tl(i,t))return o[t]=1,i[t];if(s!==de&&oe(s,t))return o[t]=2,s[t];if(oe(r,t))return o[t]=3,r[t];if(e!==de&&oe(e,t))return o[t]=4,e[t];$l&&(o[t]=0)}}const u=Hr[t];let c,h;if(u)return t==="$attrs"&&Ke(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==de&&oe(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,oe(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return tl(s,t)?(s[t]=e,!0):i!==de&&oe(i,t)?(i[t]=e,!0):oe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==de&&a[0]!=="$"&&oe(n,a)||tl(t,a)||oe(r,a)||oe(i,a)||oe(Hr,a)||oe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:oe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Vu(n){return Ht(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let $l=!0;function zg(n){const t=kd(n),e=n.proxy,i=n.ctx;$l=!1,t.beforeCreate&&Gu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:M,destroyed:y,unmounted:b,render:I,renderTracked:C,renderTriggered:P,errorCaptured:U,serverPrefetch:w,expose:E,inheritAttrs:L,components:D,directives:H,filters:K}=t;if(u&&kg(u,i,null),o)for(const nt in o){const q=o[nt];Yt(q)&&(i[nt]=q.bind(e))}if(s){const nt=s.call(e,e);le(nt)&&(n.data=$c(nt))}if($l=!0,r)for(const nt in r){const q=r[nt],_t=Yt(q)?q.bind(e,e):Yt(q.get)?q.get.bind(e,e):Kn,vt=!Yt(q)&&Yt(q.set)?q.set.bind(e):Kn,pt=cp({get:_t,set:vt});Object.defineProperty(i,nt,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Lt=>pt.value=Lt})}if(a)for(const nt in a)zd(a[nt],i,e,nt);if(l){const nt=Yt(l)?l.call(e):l;Reflect.ownKeys(nt).forEach(q=>{vg(q,nt[q])})}c&&Gu(c,n,"c");function Y(nt,q){Ht(q)?q.forEach(_t=>nt(_t.bind(e))):q&&nt(q.bind(e))}if(Y(Pg,h),Y(Qc,f),Y(Lg,p),Y(Ig,g),Y(Ag,_),Y(Rg,m),Y(Og,U),Y(Ng,C),Y(Ug,P),Y(Bd,M),Y(tu,b),Y(Dg,w),Ht(E))if(E.length){const nt=n.exposed||(n.exposed={});E.forEach(q=>{Object.defineProperty(nt,q,{get:()=>e[q],set:_t=>e[q]=_t,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Kn&&(n.render=I),L!=null&&(n.inheritAttrs=L),D&&(n.components=D),H&&(n.directives=H),w&&Od(n)}function kg(n,t,e=Kn){Ht(n)&&(n=Kl(n));for(const i in n){const s=n[i];let r;le(s)?"default"in s?r=jo(s.from||i,s.default,!0):r=jo(s.from||i):r=jo(s),Ze(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Gu(n,t,e){Rn(Ht(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function zd(n,t,e,i){let s=i.includes(".")?Cd(e,i):()=>e[i];if(Me(n)){const r=t[n];Yt(r)&&Ja(s,r)}else if(Yt(n))Ja(s,n.bind(e));else if(le(n))if(Ht(n))n.forEach(r=>zd(r,t,e,i));else{const r=Yt(n.handler)?n.handler.bind(e):t[n.handler];Yt(r)&&Ja(s,r,n)}}function kd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(u=>ca(l,u,o,!0)),ca(l,t,o)),le(t)&&r.set(t,l),l}function ca(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ca(n,r,e,!0),s&&s.forEach(o=>ca(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Hg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Hg={data:Wu,props:Xu,emits:Xu,methods:Ir,computed:Ir,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Ir,directives:Ir,watch:Gg,provide:Wu,inject:Vg};function Wu(n,t){return t?n?function(){return Ne(Yt(n)?n.call(this,this):n,Yt(t)?t.call(this,this):t)}:t:n}function Vg(n,t){return Ir(Kl(n),Kl(t))}function Kl(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function tn(n,t){return n?[...new Set([].concat(n,t))]:t}function Ir(n,t){return n?Ne(Object.create(null),n,t):t}function Xu(n,t){return n?Ht(n)&&Ht(t)?[...new Set([...n,...t])]:Ne(Object.create(null),Vu(n),Vu(t??{})):t}function Gg(n,t){if(!n)return t;if(!t)return n;const e=Ne(Object.create(null),n);for(const i in t)e[i]=tn(n[i],t[i]);return e}function Hd(){return{app:null,config:{isNativeTag:Zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wg=0;function Xg(n,t){return function(i,s=null){Yt(i)||(i=Ne({},i)),s!=null&&!le(s)&&(s=null);const r=Hd(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Wg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:b0,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&Yt(c.install)?(o.add(c),c.install(u,...h)):Yt(c)&&(o.add(c),c(u,...h))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,h){return h?(r.components[c]=h,u):r.components[c]},directive(c,h){return h?(r.directives[c]=h,u):r.directives[c]},mount(c,h,f){if(!l){const p=u._ceVNode||an(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,c,f),l=!0,u._container=c,c.__vue_app__=u,Ua(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Rn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,h){return r.provides[c]=h,u},runWithContext(c){const h=Js;Js=u;try{return c()}finally{Js=h}}};return u}}let Js=null;const qg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Bn(t)}Modifiers`]||n[`${_s(t)}Modifiers`];function jg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||de;let s=e;const r=t.startsWith("update:"),o=r&&qg(i,t.slice(7));o&&(o.trim&&(s=e.map(c=>Me(c)?c.trim():c)),o.number&&(s=e.map(Vc)));let a,l=i[a=ja(t)]||i[a=ja(Bn(t))];!l&&r&&(l=i[a=ja(_s(t))]),l&&Rn(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(u,n,6,s)}}const Yg=new WeakMap;function Vd(n,t,e=!1){const i=e?Yg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Yt(n)){const l=u=>{const c=Vd(u,t,!0);c&&(a=!0,Ne(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(le(n)&&i.set(n,null),null):(Ht(r)?r.forEach(l=>o[l]=null):Ne(o,r),le(n)&&i.set(n,o),o)}function Ia(n,t){return!n||!Ea(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),oe(n,t[0].toLowerCase()+t.slice(1))||oe(n,_s(t))||oe(n,t))}function qu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:f,setupState:p,ctx:g,inheritAttrs:_}=n,m=aa(n);let d,M;try{if(e.shapeFlag&4){const b=s||i,I=b;d=Xn(u.call(I,b,c,h,p,f,g)),M=a}else{const b=t;d=Xn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),M=t.props?a:$g(a)}}catch(b){cs.length=0,Ca(b,n,1),d=an(sn)}let y=d;if(M&&_!==!1){const b=Object.keys(M),{shapeFlag:I}=y;b.length&&I&7&&(r&&b.some(wa)&&(M=Kg(M,r)),y=Oi(y,M,!1,!0))}return e.dirs&&(y=Oi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Yr(y,e.transition),d=y,aa(m),d}const $g=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ea(e))&&((t||(t={}))[e]=n[e]);return t},Kg=(n,t)=>{const e={};for(const i in n)(!wa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Zg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?ju(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(Gd(o,i,f)&&!Ia(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ju(i,o,u):!0:!!o;return!1}function ju(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Gd(t,n,r)&&!Ia(e,r))return!0}return!1}function Gd(n,t,e){const i=n[e],s=t[e];return e==="style"&&le(i)&&le(s)?!Gc(i,s):i!==s}function Jg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Wd={},Xd=()=>Object.create(Wd),qd=n=>Object.getPrototypeOf(n)===Wd;function Qg(n,t,e,i=!1){const s={},r=Xd();n.propsDefaults=Object.create(null),jd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:sg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function t0(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ne(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(Ia(n.emitsOptions,f))continue;const p=t[f];if(l)if(oe(r,f))p!==r[f]&&(r[f]=p,u=!0);else{const g=Bn(f);s[g]=Zl(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,u=!0)}}}else{jd(n,t,s,r)&&(u=!0);let c;for(const h in a)(!t||!oe(t,h)&&((c=_s(h))===h||!oe(t,c)))&&(l?e&&(e[h]!==void 0||e[c]!==void 0)&&(s[h]=Zl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!oe(t,h))&&(delete r[h],u=!0)}u&&fi(n.attrs,"set","")}function jd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Or(l))continue;const u=t[l];let c;s&&oe(s,c=Bn(l))?!r||!r.includes(c)?e[c]=u:(a||(a={}))[c]=u:Ia(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=ne(e),u=a||de;for(let c=0;c<r.length;c++){const h=r[c];e[h]=Zl(s,l,h,u[h],n,!oe(u,h))}}return o}function Zl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Yt(l)){const{propsDefaults:u}=s;if(e in u)i=u[e];else{const c=so(s);i=u[e]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(e))&&(i=!0))}return i}const e0=new WeakMap;function Yd(n,t,e=!1){const i=e?e0:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Yt(n)){const c=h=>{l=!0;const[f,p]=Yd(h,t,!0);Ne(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return le(n)&&i.set(n,$s),$s;if(Ht(r))for(let c=0;c<r.length;c++){const h=Bn(r[c]);Yu(h)&&(o[h]=de)}else if(r)for(const c in r){const h=Bn(c);if(Yu(h)){const f=r[c],p=o[h]=Ht(f)||Yt(f)?{type:f}:Ne({},f),g=p.type;let _=!1,m=!0;if(Ht(g))for(let d=0;d<g.length;++d){const M=g[d],y=Yt(M)&&M.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=Yt(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||oe(p,"default"))&&a.push(h)}}const u=[o,a];return le(n)&&i.set(n,u),u}function Yu(n){return n[0]!=="$"&&!Or(n)}const eu=n=>n==="_"||n==="_ctx"||n==="$stable",nu=n=>Ht(n)?n.map(Xn):[Xn(n)],n0=(n,t,e)=>{if(t._n)return t;const i=Ad((...s)=>nu(t(...s)),e);return i._c=!1,i},$d=(n,t,e)=>{const i=n._ctx;for(const s in n){if(eu(s))continue;const r=n[s];if(Yt(r))t[s]=n0(s,r,i);else if(r!=null){const o=nu(r);t[s]=()=>o}}},Kd=(n,t)=>{const e=nu(t);n.slots.default=()=>e},Zd=(n,t,e)=>{for(const i in t)(e||!eu(i))&&(n[i]=t[i])},i0=(n,t,e)=>{const i=n.slots=Xd();if(n.vnode.shapeFlag&32){const s=t._;s?(Zd(i,t,e),e&&id(i,"_",s,!0)):$d(t,i)}else t&&Kd(n,t)},s0=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=de;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Zd(s,t,e):(r=!t.$stable,$d(t,s)),o=t}else t&&(Kd(n,t),o={default:1});if(r)for(const a in s)!eu(a)&&o[a]==null&&delete s[a]},un=c0;function r0(n){return o0(n)}function o0(n,t){const e=Aa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:p=Kn,insertStaticContent:g}=n,_=(v,N,X,V=null,R=null,B=null,et=void 0,it=null,T=!!N.dynamicChildren)=>{if(v===N)return;v&&!es(v,N)&&(V=mt(v),Lt(v,R,B,!0),v=null),N.patchFlag===-2&&(T=!1,N.dynamicChildren=null);const{type:x,ref:F,shapeFlag:G}=N;switch(x){case Da:m(v,N,X,V);break;case sn:d(v,N,X,V);break;case Yo:v==null&&M(N,X,V,et);break;case hn:D(v,N,X,V,R,B,et,it,T);break;default:G&1?I(v,N,X,V,R,B,et,it,T):G&6?H(v,N,X,V,R,B,et,it,T):(G&64||G&128)&&x.process(v,N,X,V,R,B,et,it,T,Ft)}F!=null&&R?zr(F,v&&v.ref,B,N||v,!N):F==null&&v&&v.ref!=null&&zr(v.ref,null,B,v,!0)},m=(v,N,X,V)=>{if(v==null)i(N.el=a(N.children),X,V);else{const R=N.el=v.el;N.children!==v.children&&u(R,N.children)}},d=(v,N,X,V)=>{v==null?i(N.el=l(N.children||""),X,V):N.el=v.el},M=(v,N,X,V)=>{[v.el,v.anchor]=g(v.children,N,X,V,v.el,v.anchor)},y=({el:v,anchor:N},X,V)=>{let R;for(;v&&v!==N;)R=f(v),i(v,X,V),v=R;i(N,X,V)},b=({el:v,anchor:N})=>{let X;for(;v&&v!==N;)X=f(v),s(v),v=X;s(N)},I=(v,N,X,V,R,B,et,it,T)=>{if(N.type==="svg"?et="svg":N.type==="math"&&(et="mathml"),v==null)C(N,X,V,R,B,et,it,T);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),w(v,N,R,B,et,it,T)}finally{x&&x._endPatch()}}},C=(v,N,X,V,R,B,et,it)=>{let T,x;const{props:F,shapeFlag:G,transition:Z,dirs:$}=v;if(T=v.el=o(v.type,B,F&&F.is,F),G&8?c(T,v.children):G&16&&U(v.children,T,null,V,R,el(v,B),et,it),$&&Vi(v,null,V,"created"),P(T,v,v.scopeId,et,V),F){for(const ct in F)ct!=="value"&&!Or(ct)&&r(T,ct,null,F[ct],B,V);"value"in F&&r(T,"value",null,F.value,B),(x=F.onVnodeBeforeMount)&&Vn(x,V,v)}$&&Vi(v,null,V,"beforeMount");const gt=a0(R,Z);gt&&Z.beforeEnter(T),i(T,N,X),((x=F&&F.onVnodeMounted)||gt||$)&&un(()=>{x&&Vn(x,V,v),gt&&Z.enter(T),$&&Vi(v,null,V,"mounted")},R)},P=(v,N,X,V,R)=>{if(X&&p(v,X),V)for(let B=0;B<V.length;B++)p(v,V[B]);if(R){let B=R.subTree;if(N===B||ep(B.type)&&(B.ssContent===N||B.ssFallback===N)){const et=R.vnode;P(v,et,et.scopeId,et.slotScopeIds,R.parent)}}},U=(v,N,X,V,R,B,et,it,T=0)=>{for(let x=T;x<v.length;x++){const F=v[x]=it?ui(v[x]):Xn(v[x]);_(null,F,N,X,V,R,B,et,it)}},w=(v,N,X,V,R,B,et)=>{const it=N.el=v.el;let{patchFlag:T,dynamicChildren:x,dirs:F}=N;T|=v.patchFlag&16;const G=v.props||de,Z=N.props||de;let $;if(X&&Gi(X,!1),($=Z.onVnodeBeforeUpdate)&&Vn($,X,N,v),F&&Vi(N,v,X,"beforeUpdate"),X&&Gi(X,!0),x&&(!v.dynamicChildren||v.dynamicChildren.length!==x.length)&&(T=0,et=!1,x=null),(G.innerHTML&&Z.innerHTML==null||G.textContent&&Z.textContent==null)&&c(it,""),x?E(v.dynamicChildren,x,it,X,V,el(N,R),B):et||q(v,N,it,null,X,V,el(N,R),B,!1),T>0){if(T&16)L(it,G,Z,X,R);else if(T&2&&G.class!==Z.class&&r(it,"class",null,Z.class,R),T&4&&r(it,"style",G.style,Z.style,R),T&8){const gt=N.dynamicProps;for(let ct=0;ct<gt.length;ct++){const ht=gt[ct],Tt=G[ht],lt=Z[ht];(lt!==Tt||ht==="value")&&r(it,ht,Tt,lt,R,X)}}T&1&&v.children!==N.children&&c(it,N.children)}else!et&&x==null&&L(it,G,Z,X,R);(($=Z.onVnodeUpdated)||F)&&un(()=>{$&&Vn($,X,N,v),F&&Vi(N,v,X,"updated")},V)},E=(v,N,X,V,R,B,et)=>{for(let it=0;it<N.length;it++){const T=v[it],x=N[it],F=T.el&&(T.type===hn||!es(T,x)||T.shapeFlag&198)?h(T.el):X;_(T,x,F,null,V,R,B,et,!0)}},L=(v,N,X,V,R)=>{if(N!==X){if(N!==de)for(const B in N)!Or(B)&&!(B in X)&&r(v,B,N[B],null,R,V);for(const B in X){if(Or(B))continue;const et=X[B],it=N[B];et!==it&&B!=="value"&&r(v,B,it,et,R,V)}"value"in X&&r(v,"value",N.value,X.value,R)}},D=(v,N,X,V,R,B,et,it,T)=>{const x=N.el=v?v.el:a(""),F=N.anchor=v?v.anchor:a("");let{patchFlag:G,dynamicChildren:Z,slotScopeIds:$}=N;$&&(it=it?it.concat($):$),v==null?(i(x,X,V),i(F,X,V),U(N.children||[],X,F,R,B,et,it,T)):G>0&&G&64&&Z&&v.dynamicChildren&&v.dynamicChildren.length===Z.length?(E(v.dynamicChildren,Z,X,R,B,et,it),(N.key!=null||R&&N===R.subTree)&&Jd(v,N,!0)):q(v,N,X,F,R,B,et,it,T)},H=(v,N,X,V,R,B,et,it,T)=>{N.slotScopeIds=it,v==null?N.shapeFlag&512?R.ctx.activate(N,X,V,et,T):K(N,X,V,R,B,et,T):rt(v,N,T)},K=(v,N,X,V,R,B,et)=>{const it=v.component=g0(v,V,R);if(Pa(v)&&(it.ctx.renderer=Ft),_0(it,!1,et),it.asyncDep){if(R&&R.registerDep(it,Y,et),!v.el){const T=it.subTree=an(sn);d(null,T,N,X),v.placeholder=T.el}}else Y(it,v,N,X,R,B,et)},rt=(v,N,X)=>{const V=N.component=v.component;if(Zg(v,N,X))if(V.asyncDep&&!V.asyncResolved){nt(V,N,X);return}else V.next=N,V.update();else N.el=v.el,V.vnode=N},Y=(v,N,X,V,R,B,et)=>{const it=()=>{if(v.isMounted){let{next:G,bu:Z,u:$,parent:gt,vnode:ct}=v;{const Vt=Qd(v);if(Vt){G&&(G.el=ct.el,nt(v,G,et)),Vt.asyncDep.then(()=>{un(()=>{v.isUnmounted||x()},R)});return}}let ht=G,Tt;Gi(v,!1),G?(G.el=ct.el,nt(v,G,et)):G=ct,Z&&qo(Z),(Tt=G.props&&G.props.onVnodeBeforeUpdate)&&Vn(Tt,gt,G,ct),Gi(v,!0);const lt=qu(v),Mt=v.subTree;v.subTree=lt,_(Mt,lt,h(Mt.el),mt(Mt),v,R,B),G.el=lt.el,ht===null&&Jg(v,lt.el),$&&un($,R),(Tt=G.props&&G.props.onVnodeUpdated)&&un(()=>Vn(Tt,gt,G,ct),R)}else{let G;const{el:Z,props:$}=N,{bm:gt,m:ct,parent:ht,root:Tt,type:lt}=v,Mt=kr(N);Gi(v,!1),gt&&qo(gt),!Mt&&(G=$&&$.onVnodeBeforeMount)&&Vn(G,ht,N),Gi(v,!0);{Tt.ce&&Tt.ce._hasShadowRoot()&&Tt.ce._injectChildStyle(lt,v.parent?v.parent.type:void 0);const Vt=v.subTree=qu(v);_(null,Vt,X,V,v,R,B),N.el=Vt.el}if(ct&&un(ct,R),!Mt&&(G=$&&$.onVnodeMounted)){const Vt=N;un(()=>Vn(G,ht,Vt),R)}(N.shapeFlag&256||ht&&kr(ht.vnode)&&ht.vnode.shapeFlag&256)&&v.a&&un(v.a,R),v.isMounted=!0,N=X=V=null}};v.scope.on();const T=v.effect=new ad(it);v.scope.off();const x=v.update=T.run.bind(T),F=v.job=T.runIfDirty.bind(T);F.i=v,F.id=v.uid,T.scheduler=()=>Jc(F),Gi(v,!0),x()},nt=(v,N,X)=>{N.component=v;const V=v.vnode.props;v.vnode=N,v.next=null,t0(v,N.props,V,X),s0(v,N.children,X),gi(),Bu(v),_i()},q=(v,N,X,V,R,B,et,it,T=!1)=>{const x=v&&v.children,F=v?v.shapeFlag:0,G=N.children,{patchFlag:Z,shapeFlag:$}=N;if(Z>0){if(Z&128){vt(x,G,X,V,R,B,et,it,T);return}else if(Z&256){_t(x,G,X,V,R,B,et,it,T);return}}$&8?(F&16&&ut(x,R,B),G!==x&&c(X,G)):F&16?$&16?vt(x,G,X,V,R,B,et,it,T):ut(x,R,B,!0):(F&8&&c(X,""),$&16&&U(G,X,V,R,B,et,it,T))},_t=(v,N,X,V,R,B,et,it,T)=>{v=v||$s,N=N||$s;const x=v.length,F=N.length,G=Math.min(x,F);let Z;for(Z=0;Z<G;Z++){const $=N[Z]=T?ui(N[Z]):Xn(N[Z]);_(v[Z],$,X,null,R,B,et,it,T)}x>F?ut(v,R,B,!0,!1,G):U(N,X,V,R,B,et,it,T,G)},vt=(v,N,X,V,R,B,et,it,T)=>{let x=0;const F=N.length;let G=v.length-1,Z=F-1;for(;x<=G&&x<=Z;){const $=v[x],gt=N[x]=T?ui(N[x]):Xn(N[x]);if(es($,gt))_($,gt,X,null,R,B,et,it,T);else break;x++}for(;x<=G&&x<=Z;){const $=v[G],gt=N[Z]=T?ui(N[Z]):Xn(N[Z]);if(es($,gt))_($,gt,X,null,R,B,et,it,T);else break;G--,Z--}if(x>G){if(x<=Z){const $=Z+1,gt=$<F?N[$].el:V;for(;x<=Z;)_(null,N[x]=T?ui(N[x]):Xn(N[x]),X,gt,R,B,et,it,T),x++}}else if(x>Z)for(;x<=G;)Lt(v[x],R,B,!0),x++;else{const $=x,gt=x,ct=new Map;for(x=gt;x<=Z;x++){const Ct=N[x]=T?ui(N[x]):Xn(N[x]);Ct.key!=null&&ct.set(Ct.key,x)}let ht,Tt=0;const lt=Z-gt+1;let Mt=!1,Vt=0;const Ot=new Array(lt);for(x=0;x<lt;x++)Ot[x]=0;for(x=$;x<=G;x++){const Ct=v[x];if(Tt>=lt){Lt(Ct,R,B,!0);continue}let Dt;if(Ct.key!=null)Dt=ct.get(Ct.key);else for(ht=gt;ht<=Z;ht++)if(Ot[ht-gt]===0&&es(Ct,N[ht])){Dt=ht;break}Dt===void 0?Lt(Ct,R,B,!0):(Ot[Dt-gt]=x+1,Dt>=Vt?Vt=Dt:Mt=!0,_(Ct,N[Dt],X,null,R,B,et,it,T),Tt++)}const wt=Mt?l0(Ot):$s;for(ht=wt.length-1,x=lt-1;x>=0;x--){const Ct=gt+x,Dt=N[Ct],fe=N[Ct+1],S=Ct+1<F?fe.el||tp(fe):V;Ot[x]===0?_(null,Dt,X,S,R,B,et,it,T):Mt&&(ht<0||x!==wt[ht]?pt(Dt,X,S,2):ht--)}}},pt=(v,N,X,V,R=null)=>{const{el:B,type:et,transition:it,children:T,shapeFlag:x}=v;if(x&6){pt(v.component.subTree,N,X,V);return}if(x&128){v.suspense.move(N,X,V);return}if(x&64){et.move(v,N,X,Ft);return}if(et===hn){i(B,N,X);for(let G=0;G<T.length;G++)pt(T[G],N,X,V);i(v.anchor,N,X);return}if(et===Yo){y(v,N,X);return}if(V!==2&&x&1&&it)if(V===0)it.persisted&&!B[En]?i(B,N,X):(it.beforeEnter(B),i(B,N,X),un(()=>it.enter(B),R));else{const{leave:G,delayLeave:Z,afterLeave:$}=it,gt=()=>{v.ctx.isUnmounted?s(B):i(B,N,X)},ct=()=>{const ht=B._isLeaving||!!B[En];B._isLeaving&&B[En](!0),it.persisted&&!ht?gt():G(B,()=>{gt(),$&&$()})};Z?Z(B,gt,ct):ct()}else i(B,N,X)},Lt=(v,N,X,V=!1,R=!1)=>{const{type:B,props:et,ref:it,children:T,dynamicChildren:x,shapeFlag:F,patchFlag:G,dirs:Z,cacheIndex:$,memo:gt}=v;if(G===-2&&(R=!1),it!=null&&(gi(),zr(it,null,X,v,!0),_i()),$!=null&&(N.renderCache[$]=void 0),F&256){N.ctx.deactivate(v);return}const ct=F&1&&Z,ht=!kr(v);let Tt;if(ht&&(Tt=et&&et.onVnodeBeforeUnmount)&&Vn(Tt,N,v),F&6)dt(v.component,X,V);else{if(F&128){v.suspense.unmount(X,V);return}ct&&Vi(v,null,N,"beforeUnmount"),F&64?v.type.remove(v,N,X,Ft,V):x&&!x.hasOnce&&(B!==hn||G>0&&G&64)?ut(x,N,X,!1,!0):(B===hn&&G&384||!R&&F&16)&&ut(T,N,X),V&&qt(v)}const lt=gt!=null&&$==null;(ht&&(Tt=et&&et.onVnodeUnmounted)||ct||lt)&&un(()=>{Tt&&Vn(Tt,N,v),ct&&Vi(v,null,N,"unmounted"),lt&&(v.el=null)},X)},qt=v=>{const{type:N,el:X,anchor:V,transition:R}=v;if(N===hn){ot(X,V);return}if(N===Yo){b(v);return}const B=()=>{s(X),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(v.shapeFlag&1&&R&&!R.persisted){const{leave:et,delayLeave:it}=R,T=()=>et(X,B);it?it(v.el,B,T):T()}else B()},ot=(v,N)=>{let X;for(;v!==N;)X=f(v),s(v),v=X;s(N)},dt=(v,N,X)=>{const{bum:V,scope:R,job:B,subTree:et,um:it,m:T,a:x}=v;$u(T),$u(x),V&&qo(V),R.stop(),B&&(B.flags|=8,Lt(et,v,N,X)),it&&un(it,N),un(()=>{v.isUnmounted=!0},N)},ut=(v,N,X,V=!1,R=!1,B=0)=>{for(let et=B;et<v.length;et++)Lt(v[et],N,X,V,R)},mt=v=>{if(v.shapeFlag&6)return mt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const N=f(v.anchor||v.el),X=N&&N[Sg];return X?f(X):N};let It=!1;const Bt=(v,N,X)=>{let V;v==null?N._vnode&&(Lt(N._vnode,null,null,!0),V=N._vnode.component):_(N._vnode||null,v,N,null,null,null,X),N._vnode=v,It||(It=!0,Bu(V),Ed(),It=!1)},Ft={p:_,um:Lt,m:pt,r:qt,mt:K,mc:U,pc:q,pbc:E,n:mt,o:n};return{render:Bt,hydrate:void 0,createApp:Xg(Bt)}}function el({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Gi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function a0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Jd(n,t,e=!1){const i=n.children,s=t.children;if(Ht(i)&&Ht(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ui(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Jd(o,a)),a.type===Da&&(a.patchFlag===-1&&(a=s[r]=ui(a)),a.el=o.el),a.type===sn&&!a.el&&(a.el=o.el)}}function l0(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=e[e.length-1],n[s]<u){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<u?r=a+1:o=a;u<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Qd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qd(t)}function $u(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function tp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?tp(t.subTree):null}const ep=n=>n.__isSuspense;function c0(n,t){t&&t.pendingBranch?Ht(n)?t.effects.push(...n):t.effects.push(n):_g(n)}const hn=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),Yo=Symbol.for("v-stc"),cs=[];let yn=null;function ue(n=!1){cs.push(yn=n?null:[])}function np(){cs.pop(),yn=cs[cs.length-1]||null}let $r=1;function ua(n,t=!1){$r+=n,n<0&&yn&&t&&(yn.hasOnce=!0)}function ip(n){return n.dynamicChildren=$r>0?yn||$s:null,np(),$r>0&&yn&&yn.push(n),n}function ge(n,t,e,i,s,r){return ip(yt(n,t,e,i,s,r,!0))}function sp(n,t,e,i,s){return ip(an(n,t,e,i,s,!0))}function ha(n){return n?n.__v_isVNode===!0:!1}function es(n,t){return n.type===t.type&&n.key===t.key}const rp=({key:n})=>n??null,$o=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||Ze(n)||Yt(n)?{i:wn,r:n,k:t,f:!!e}:n:null);function yt(n,t=null,e=null,i=0,s=null,r=n===hn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&rp(t),ref:t&&$o(t),scopeId:Td,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return a?(fa(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Me(e)?8:16),$r>0&&!o&&yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yn.push(l),l}const an=u0;function u0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Fg)&&(n=sn),ha(n)){const a=Oi(n,t,!0);return e&&fa(a,e),$r>0&&!r&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(M0(n)&&(n=n.__vccOpts),t){t=h0(t);let{class:a,style:l}=t;a&&!Me(a)&&(t.class=ci(a)),le(l)&&(Zc(l)&&!Ht(l)&&(l=Ne({},l)),t.style=Wr(l))}const o=Me(n)?1:ep(n)?128:Pd(n)?64:le(n)?4:Yt(n)?2:0;return yt(n,t,e,i,s,o,r,!0)}function h0(n){return n?Zc(n)||qd(n)?Ne({},n):n:null}function Oi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=t?d0(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&rp(u),ref:t&&t.ref?e&&r?Ht(r)?r.concat($o(t)):[r,$o(t)]:$o(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==hn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Oi(n.ssContent),ssFallback:n.ssFallback&&Oi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Yr(c,l.clone(c)),c}function Dr(n=" ",t=0){return an(Da,null,n,t)}function f0(n,t){const e=an(Yo,null,n);return e.staticCount=t,e}function Un(n="",t=!1){return t?(ue(),sp(sn,null,n)):an(sn,null,n)}function Xn(n){return n==null||typeof n=="boolean"?an(sn):Ht(n)?an(hn,null,n.slice()):ha(n)?ui(n):an(Da,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Oi(n)}function fa(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),fa(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!qd(t)?t._ctx=wn:s===3&&wn&&(wn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Yt(t)){if(i&65){fa(n,{default:t});return}t={default:t,_ctx:wn},e=32}else t=String(t),i&64?(e=16,t=[Dr(t)]):e=8;n.children=t,n.shapeFlag|=e}function d0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ci([t.class,i.class]));else if(s==="style")t.style=Wr([t.style,i.style]);else if(Ea(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ht(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!wa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Vn(n,t,e,i=null){Rn(n,t,7,[e,i])}const p0=Hd();let m0=0;function g0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||p0,r={uid:m0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(i,s),emitsOptions:Vd(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=jg.bind(null,r),n.ce&&n.ce(r),r}let rn=null;const op=()=>rn||wn;let da,Jl;{const n=Aa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};da=t("__VUE_INSTANCE_SETTERS__",e=>rn=e),Jl=t("__VUE_SSR_SETTERS__",e=>Kr=e)}const so=n=>{const t=rn;return da(n),n.scope.on(),()=>{n.scope.off(),da(t)}},Ku=()=>{rn&&rn.scope.off(),da(null)};function ap(n){return n.vnode.shapeFlag&4}let Kr=!1;function _0(n,t=!1,e=!1){t&&Jl(t);const{props:i,children:s}=n.vnode,r=ap(n);Qg(n,i,r,t),i0(n,s,e||t);const o=r?v0(n,t):void 0;return t&&Jl(!1),o}function v0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Bg);const{setup:i}=e;if(i){gi();const s=n.setupContext=i.length>1?y0(n):null,r=so(n),o=io(i,n,0,[n.props,s]),a=Qf(o);if(_i(),r(),(a||n.sp)&&!kr(n)&&Od(n),a){if(o.then(Ku,Ku),t)return o.then(l=>{Zu(n,l)}).catch(l=>{Ca(l,n,0)});n.asyncDep=o}else Zu(n,o)}else lp(n)}function Zu(n,t,e){Yt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:le(t)&&(n.setupState=Md(t)),lp(n)}function lp(n,t,e){const i=n.type;n.render||(n.render=i.render||Kn);{const s=so(n);gi();try{zg(n)}finally{_i(),s()}}}const x0={get(n,t){return Ke(n,"get",""),n[t]}};function y0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,x0),slots:n.slots,emit:n.emit,expose:t}}function Ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Md(rg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Hr)return Hr[e](n)},has(t,e){return e in t||e in Hr}})):n.proxy}function M0(n){return Yt(n)&&"__vccOpts"in n}const cp=(n,t)=>hg(n,t,Kr);function S0(n,t,e){try{ua(-1);const i=arguments.length;return i===2?le(t)&&!Ht(t)?ha(t)?an(n,null,[t]):an(n,t):an(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ha(e)&&(e=[e]),an(n,t,e))}finally{ua(1)}}const b0="3.5.40";let Ql;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{Ql=Ju.createPolicy("vue",{createHTML:n=>n})}catch{}const up=Ql?n=>Ql.createHTML(n):n=>n,E0="http://www.w3.org/2000/svg",w0="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,Qu=li&&li.createElement("template"),T0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?li.createElementNS(E0,n):t==="mathml"?li.createElementNS(w0,n):e?li.createElement(n,{is:e}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Qu.innerHTML=up(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},bi="transition",xr="animation",Zr=Symbol("_vtc"),hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},A0=Ne({},Ld,hp),R0=n=>(n.displayName="Transition",n.props=A0,n),C0=R0((n,{slots:t})=>S0(wg,P0(n),t)),Wi=(n,t=[])=>{Ht(n)?n.forEach(e=>e(...t)):n&&n(...t)},th=n=>n?Ht(n)?n.some(t=>t.length>1):n.length>1:!1;function P0(n){const t={};for(const D in n)D in hp||(t[D]=n[D]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,g=L0(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:M,onEnterCancelled:y,onLeave:b,onLeaveCancelled:I,onBeforeAppear:C=d,onAppear:P=M,onAppearCancelled:U=y}=t,w=(D,H,K,rt)=>{D._enterCancelled=rt,Xi(D,H?c:a),Xi(D,H?u:o),K&&K()},E=(D,H)=>{D._isLeaving=!1,Xi(D,h),Xi(D,p),Xi(D,f),H&&H()},L=D=>(H,K)=>{const rt=D?P:M,Y=()=>w(H,D,K);Wi(rt,[H,Y]),eh(()=>{Xi(H,D?l:r),ei(H,D?c:a),th(rt)||nh(H,i,_,Y)})};return Ne(t,{onBeforeEnter(D){Wi(d,[D]),ei(D,r),ei(D,o)},onBeforeAppear(D){Wi(C,[D]),ei(D,l),ei(D,u)},onEnter:L(!1),onAppear:L(!0),onLeave(D,H){D._isLeaving=!0;const K=()=>E(D,H);ei(D,h),D._enterCancelled?(ei(D,f),rh(D)):(rh(D),ei(D,f)),eh(()=>{D._isLeaving&&(Xi(D,h),ei(D,p),th(b)||nh(D,i,m,K))}),Wi(b,[D,K])},onEnterCancelled(D){w(D,!1,void 0,!0),Wi(y,[D])},onAppearCancelled(D){w(D,!0,void 0,!0),Wi(U,[D])},onLeaveCancelled(D){E(D),Wi(I,[D])}})}function L0(n){if(n==null)return null;if(le(n))return[nl(n.enter),nl(n.leave)];{const t=nl(n);return[t,t]}}function nl(n){return Lm(n)}function ei(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Zr]||(n[Zr]=new Set)).add(t)}function Xi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Zr];e&&(e.delete(t),e.size||(n[Zr]=void 0))}function eh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let I0=0;function nh(n,t,e,i){const s=n._endId=++I0,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=D0(n,t);if(!o)return i();const u=o+"end";let c=0;const h=()=>{n.removeEventListener(u,f),r()},f=p=>{p.target===n&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),n.addEventListener(u,f)}function D0(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${bi}Delay`),r=i(`${bi}Duration`),o=ih(s,r),a=i(`${xr}Delay`),l=i(`${xr}Duration`),u=ih(a,l);let c=null,h=0,f=0;t===bi?o>0&&(c=bi,h=o,f=r.length):t===xr?u>0&&(c=xr,h=u,f=l.length):(h=Math.max(o,u),c=h>0?o>u?bi:xr:null,f=c?c===bi?r.length:l.length:0);const p=c===bi&&/\b(?:transform|all)(?:,|$)/.test(i(`${bi}Property`).toString());return{type:c,timeout:h,propCount:f,hasTransform:p}}function ih(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>sh(e)+sh(n[i])))}function sh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function rh(n){return(n?n.ownerDocument:document).body.offsetHeight}function U0(n,t,e){const i=n[Zr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const oh=Symbol("_vod"),N0=Symbol("_vsh"),O0=Symbol(""),F0=/(?:^|;)\s*display\s*:/;function B0(n,t,e){const i=n.style,s=Me(e);let r=!1;if(e&&!s){if(t)if(Me(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Ur(i,a,"")}else for(const o in t)e[o]==null&&Ur(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?k0(n,o,!Me(t)&&t?t[o]:void 0,a)||Ur(i,o,a):Ur(i,o,"")}}else if(s){if(t!==e){const o=i[O0];o&&(e+=";"+o),i.cssText=e,r=F0.test(e)}}else t&&n.removeAttribute("style");oh in n&&(n[oh]=r?i.display:"",n[N0]&&(i.display="none"))}const ah=/\s*!important$/;function Ur(n,t,e){if(Ht(e))e.forEach(i=>Ur(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=z0(n,t);ah.test(e)?n.setProperty(_s(i),e.replace(ah,""),"important"):n[i]=e}}const lh=["Webkit","Moz","ms"],il={};function z0(n,t){const e=il[t];if(e)return e;let i=Bn(t);if(i!=="filter"&&i in n)return il[t]=i;i=nd(i);for(let s=0;s<lh.length;s++){const r=lh[s]+i;if(r in n)return il[t]=r}return t}function k0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Me(i)&&e===i}const ch="http://www.w3.org/1999/xlink";function uh(n,t,e,i,s,r=Fm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ch,t.slice(6,t.length)):n.setAttributeNS(ch,t,e):e==null||r&&!sd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Zn(e)?String(e):e)}function hh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?up(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=sd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function js(n,t,e,i){n.addEventListener(t,e,i)}function H0(n,t,e,i){n.removeEventListener(t,e,i)}const fh=Symbol("_vei");function V0(n,t,e,i,s=null){const r=n[fh]||(n[fh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=X0(t);if(i){const u=r[t]=Y0(i,s);js(n,a,u,l)}else o&&(H0(n,a,o,l),r[t]=void 0)}}const G0=/(Once|Passive|Capture)$/,W0=/^on:?(?:Once|Passive|Capture)$/;function X0(n){let t,e;for(;(e=n.match(G0))&&!W0.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):_s(n.slice(2)),t]}let sl=0;const q0=Promise.resolve(),j0=()=>sl||(q0.then(()=>sl=0),sl=Date.now());function Y0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ht(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&Rn(u,t,5,a)}}else Rn(s,t,5,[i])};return e.value=n,e.attached=j0(),e}const dh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?U0(n,i,o):t==="style"?B0(n,e,i):Ea(t)?wa(t)||V0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):K0(n,t,i,o))?(hh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&uh(n,t,i,o,r,t!=="value")):n._isVueCE&&(Z0(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Me(i)))?hh(n,Bn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),uh(n,t,i,o))};function K0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&dh(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dh(t)&&Me(e)?!1:t in n}function Z0(n,t){const e=n._def.props;if(!e)return!1;const i=Bn(t);return Array.isArray(e)?e.some(s=>Bn(s)===i):Object.keys(e).some(s=>Bn(s)===i)}const ph=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ht(t)?e=>qo(t,e):t};function J0(n){n.target.composing=!0}function mh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const rl=Symbol("_assign");function gh(n,t,e){return t&&(n=n.trim()),e&&(n=Vc(n)),n}const qi={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[rl]=ph(s);const r=i||s.props&&s.props.type==="number";js(n,t?"change":"input",o=>{o.target.composing||n[rl](gh(n.value,e,r))}),(e||r)&&js(n,"change",()=>{n.value=gh(n.value,e,r)}),t||(js(n,"compositionstart",J0),js(n,"compositionend",mh),js(n,"change",mh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[rl]=ph(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Vc(n.value):n.value,l=t??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Q0=["ctrl","shift","alt","meta"],t_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Q0.some(e=>n[`${e}Key`]&&!t.includes(e))},_h=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=t_[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},e_=Ne({patchProp:$0},T0);let vh;function n_(){return vh||(vh=r0(e_))}const i_=((...n)=>{const t=n_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=r_(i);if(!s)return;const r=t._component;!Yt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,s_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function s_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function r_(n){return Me(n)?document.querySelector(n):n}function fp(n,t){return function(){return n.apply(t,arguments)}}const{toString:o_}=Object.prototype,{getPrototypeOf:sr}=Object,{iterator:ro,toStringTag:dp}=Symbol,pa=(({hasOwnProperty:n})=>(t,e)=>n.call(t,e))(Object.prototype),Jr=(n,t)=>{let e=n;const i=[];for(;e!=null&&e!==Object.prototype;){if(i.indexOf(e)!==-1)return!1;if(i.push(e),pa(e,t))return!0;e=sr(e)}return!1},a_=(n,t)=>n!=null&&Jr(n,t)?n[t]:void 0,iu=(n=>t=>{const e=o_.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),Cn=n=>(n=n.toLowerCase(),t=>iu(t)===n),Na=n=>t=>typeof t===n,{isArray:hs}=Array,fs=Na("undefined");function fr(n){return n!==null&&!fs(n)&&n.constructor!==null&&!fs(n.constructor)&&pn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const pp=Cn("ArrayBuffer");function l_(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&pp(n.buffer),t}const c_=Na("string"),pn=Na("function"),mp=Na("number"),dr=n=>n!==null&&typeof n=="object",u_=n=>n===!0||n===!1,Ko=n=>{if(!dr(n))return!1;const t=sr(n);return(t===null||t===Object.prototype||sr(t)===null)&&!Jr(n,dp)&&!Jr(n,ro)},h_=n=>{if(!dr(n)||fr(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},f_=Cn("Date"),d_=Cn("File"),p_=n=>!!(n&&typeof n.uri<"u"),m_=n=>n&&typeof n.getParts<"u",g_=Cn("Blob"),__=Cn("FileList"),v_=Cn("Set"),x_=n=>dr(n)&&pn(n.pipe);function y_(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const xh=y_(),yh=typeof xh.FormData<"u"?xh.FormData:void 0,M_=n=>{if(!n)return!1;if(yh&&n instanceof yh)return!0;const t=sr(n);if(!t||t===Object.prototype||!pn(n.append))return!1;const e=iu(n);return e==="formdata"||e==="object"&&pn(n.toString)&&n.toString()==="[object FormData]"},S_=Cn("URLSearchParams"),[b_,E_,w_,T_]=["ReadableStream","Request","Response","Headers"].map(Cn),A_=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oo(n,t,{allOwnKeys:e=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),hs(n))for(i=0,s=n.length;i<s;i++)t.call(null,n[i],i,n);else{if(fr(n))return;const r=e?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],t.call(null,n[a],a,n)}}function gp(n,t){if(fr(n))return null;t=t.toLowerCase();const e=Object.keys(n);let i=e.length,s;for(;i-- >0;)if(s=e[i],t===s.toLowerCase())return s;return null}const ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_p=n=>!fs(n)&&n!==ss;function tc(...n){const{caseless:t,skipUndefined:e}=_p(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=t&&typeof o=="string"&&gp(i,o)||o,l=pa(i,a)?i[a]:void 0;Ko(l)&&Ko(r)?i[a]=tc(l,r):Ko(r)?i[a]=tc({},r):hs(r)?i[a]=r.slice():(!e||!fs(r))&&(i[a]=r)};for(let r=0,o=n.length;r<o;r++){const a=n[r];if(!a||fr(a)||(oo(a,s),typeof a!="object"||hs(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let u=0;u<l.length;u++){const c=l[u];z_.call(a,c)&&s(a[c],c)}}return i}const R_=(n,t,e,{allOwnKeys:i}={})=>(oo(t,(s,r)=>{e&&pn(s)?Object.defineProperty(n,r,{__proto__:null,value:fp(s,e),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),C_=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),P_=(n,t,e,i)=>{n.prototype=Object.create(t.prototype,i),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:t.prototype}),e&&Object.assign(n.prototype,e)},L_=(n,t,e,i)=>{let s,r,o;const a={};if(t=t||{},n==null)return t;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,t))&&!a[o]&&(t[o]=n[o],a[o]=!0);n=e!==!1&&sr(n)}while(n&&(!e||e(n,t))&&n!==Object.prototype);return t},I_=(n,t,e)=>{n=String(n),(e===void 0||e>n.length)&&(e=n.length),e-=t.length;const i=n.indexOf(t,e);return i!==-1&&i===e},D_=n=>{if(!n)return null;if(hs(n))return n;let t=n.length;if(!mp(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=n[t];return e},U_=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&sr(Uint8Array)),N_=(n,t)=>{const i=(n&&n[ro]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;t.call(n,r[0],r[1])}},O_=(n,t)=>{let e;const i=[];for(;(e=n.exec(t))!==null;)i.push(e);return i},F_=Cn("HTMLFormElement"),B_=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:z_}=Object.prototype,k_=Cn("RegExp"),vp=(n,t)=>{const e=Object.getOwnPropertyDescriptors(n),i={};oo(e,(s,r)=>{let o;(o=t(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},H_=n=>{vp(n,(t,e)=>{if(pn(n)&&["arguments","caller","callee"].includes(e))return!1;const i=n[e];if(pn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},V_=(n,t)=>{const e={},i=s=>{s.forEach(r=>{e[r]=!0})};return hs(n)?i(n):i(String(n).split(t)),e},G_=()=>{},W_=(n,t)=>n!=null&&Number.isFinite(n=+n)?n:t;function X_(n){return!!(n&&pn(n.append)&&n[dp]==="FormData"&&n[ro])}const q_=n=>{const t=new WeakSet,e=i=>{if(dr(i)){if(t.has(i))return;if(fr(i))return i;if(!("toJSON"in i)){t.add(i);let s;if(v_(i)){s=[];for(const r of i){const o=e(r);!fs(o)&&s.push(o)}}else s=hs(i)?[]:{},oo(i,(r,o)=>{const a=e(r);!fs(a)&&(s[o]=a)});return t.delete(i),s}}return i};return e(n)},j_=Cn("AsyncFunction"),Y_=n=>n&&(dr(n)||pn(n))&&pn(n.then)&&pn(n.catch),xp=((n,t)=>n?setImmediate:t?((e,i)=>(ss.addEventListener("message",({source:s,data:r})=>{s===ss&&r===e&&i.length&&i.shift()()},!1),s=>{i.push(s),ss.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",pn(ss.postMessage)),$_=typeof queueMicrotask<"u"?queueMicrotask.bind(ss):typeof process<"u"&&process.nextTick||xp,yp=n=>n!=null&&pn(n[ro]),K_=n=>n!=null&&Jr(n,ro)&&yp(n),z={isArray:hs,isArrayBuffer:pp,isBuffer:fr,isFormData:M_,isArrayBufferView:l_,isString:c_,isNumber:mp,isBoolean:u_,isObject:dr,isPlainObject:Ko,isEmptyObject:h_,isReadableStream:b_,isRequest:E_,isResponse:w_,isHeaders:T_,isUndefined:fs,isDate:f_,isFile:d_,isReactNativeBlob:p_,isReactNative:m_,isBlob:g_,isRegExp:k_,isFunction:pn,isStream:x_,isURLSearchParams:S_,isTypedArray:U_,isFileList:__,forEach:oo,merge:tc,extend:R_,trim:A_,stripBOM:C_,inherits:P_,toFlatObject:L_,kindOf:iu,kindOfTest:Cn,endsWith:I_,toArray:D_,forEachEntry:N_,matchAll:O_,isHTMLForm:F_,hasOwnProperty:pa,hasOwnProp:pa,hasOwnInPrototypeChain:Jr,getSafeProp:a_,reduceDescriptors:vp,freezeMethods:H_,toObjectSet:V_,toCamelCase:B_,noop:G_,toFiniteNumber:W_,findKey:gp,global:ss,isContextDefined:_p,isSpecCompliantForm:X_,toJSONObject:q_,isAsyncFn:j_,isThenable:Y_,setImmediate:xp,asap:$_,isIterable:yp,isSafeIterable:K_},Z_=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),J_=n=>{const t={};let e,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),e=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim();const a=z.hasOwnProp(t,e);!e||a&&z.hasOwnProp(Z_,e)||(e==="set-cookie"?a?t[e].push(i):t[e]=[i]:t[e]=a?t[e]+", "+i:i)}),t};function Q_(n){let t=0,e=n.length;for(;t<e;){const i=n.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;e>t;){const i=n.charCodeAt(e-1);if(i!==9&&i!==32)break;e-=1}return t===0&&e===n.length?n:n.slice(t,e)}const tv=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),ev=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function su(n,t){return z.isArray(n)?n.map(e=>su(e,t)):Q_(String(n).replace(t,""))}const nv=n=>su(n,tv),iv=n=>su(n,ev);function Mp(n){const t=Object.create(null);return z.forEach(n.toJSON(),(e,i)=>{t[i]=iv(e)}),t}const Mh=Symbol("internals");function yr(n){return n&&String(n).trim().toLowerCase()}function Zo(n){return n===!1||n==null?n:z.isArray(n)?n.map(Zo):nv(String(n))}function sv(n){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=e.exec(n);)t[i[1]]=i[2];return t}const rv=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function ol(n){let t=0,e=n.length;for(;t<e;){const i=n.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;e>t;){const i=n.charCodeAt(e-1);if(i!==9&&i!==32)break;e-=1}return t===0&&e===n.length?n:n.slice(t,e)}function ov(n){const t=n.length-1;if(t<1||n.charCodeAt(0)!==34||n.charCodeAt(t)!==34)return n;let e="";for(let i=1;i<t;i++){const s=n.charCodeAt(i);if(s===34||s===92&&(i+=1,i>=t))return n;e+=n[i]}return e}function av(n){const t=Object.create(null),e=String(n);let i=0,s=!1,r=!1;function o(a){const l=ol(e.slice(i,a)),u=l.indexOf("=");if(u<1)return;const c=ol(l.slice(0,u));if(!rv.test(c))return;const h=c.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=ol(l.slice(u+1));t[h]=ov(f)}for(let a=0;a<e.length;a++){const l=e.charCodeAt(a);s?r?r=!1:l===92?r=!0:l===34&&(s=!1):l===34?s=!0:(l===44||l===59)&&(o(a),i=a+1)}return o(e.length),t}const lv=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function al(n,t,e,i,s){if(z.isFunction(i))return i.call(this,t,e);if(s&&(t=e),!!z.isString(t)){if(z.isString(i))return t.indexOf(i)!==-1;if(z.isRegExp(i))return i.test(t)}}function cv(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,i)=>e.toUpperCase()+i)}function uv(n,t){const e=z.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+e,{__proto__:null,value:function(s,r,o){return this[i].call(this,t,s,r,o)},configurable:!0})})}let Je=class{constructor(t){t&&this.set(t)}set(t,e,i){const s=this;function r(a,l,u){const c=yr(l);if(!c)return;const h=z.findKey(s,c);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||l]=Zo(a))}const o=(a,l)=>z.forEach(a,(u,c)=>r(u,c,l));if(z.isPlainObject(t)||t instanceof this.constructor)o(t,e);else if(z.isString(t)&&(t=t.trim())&&!lv(t))o(J_(t),e);else if(z.isObject(t)&&z.isSafeIterable(t)){let a=Object.create(null),l,u;for(const c of t){if(!z.isArray(c))throw new TypeError("Object iterator must return a key-value pair");u=c[0],z.hasOwnProp(a,u)?(l=a[u],a[u]=z.isArray(l)?[...l,c[1]]:[l,c[1]]):a[u]=c[1]}o(a,e)}else t!=null&&r(e,t,i);return this}get(t,e){if(t=yr(t),t){const i=z.findKey(this,t);if(i){const s=this[i];if(!e)return s;if(e===!0)return sv(s);if(z.isFunction(e))return e.call(this,s,i);if(z.isRegExp(e))return e.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=yr(t),t){const i=z.findKey(this,t);return!!(i&&this[i]!==void 0&&(!e||al(this,this[i],i,e)))}return!1}delete(t,e){const i=this;let s=!1;function r(o){if(o=yr(o),o){const a=z.findKey(i,o);a&&(!e||al(i,i[a],a,e))&&(delete i[a],s=!0)}}return z.isArray(t)?t.forEach(r):r(t),s}clear(t){const e=Object.keys(this);let i=e.length,s=!1;for(;i--;){const r=e[i];(!t||al(this,this[r],r,t,!0))&&(delete this[r],s=!0)}return s}normalize(t){const e=this,i={};return z.forEach(this,(s,r)=>{const o=z.findKey(i,r);if(o){e[o]=Zo(s),delete e[r];return}const a=t?cv(r):String(r).trim();a!==r&&delete e[r],e[a]=Zo(s),i[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return z.forEach(this,(i,s)=>{i!=null&&i!==!1&&(e[s]=t&&z.isArray(i)?i.join(", "):i)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return z.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return av(t)}static concat(t,...e){const i=new this(t);return e.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[Mh]=this[Mh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=yr(o);i[a]||(uv(s,o),i[a]=!0)}return z.isArray(t)?t.forEach(r):r(t),this}};Je.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(Je.prototype,({value:n},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(i){this[e]=i}}});z.freezeMethods(Je);const ma="[REDACTED ****]";function hv(n){if(z.hasOwnProp(n,"toJSON"))return!0;let t=Object.getPrototypeOf(n);for(;t&&t!==Object.prototype;){if(z.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function fv(n,t){const e=new Set(t.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||z.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof Je&&(r=r.toJSON()),i.push(r);let o;if(z.isArray(r))o=[],r.forEach((a,l)=>{const u=s(a);z.isUndefined(u)||(o[l]=u)});else{if(!z.isPlainObject(r)&&hv(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const u=e.has(a.toLowerCase())?ma:s(l);z.isUndefined(u)||(o[a]=u)}}return i.pop(),o};return s(n)}function Sh(n){try{return String(n)}catch{return""}}function dv(n){return n.errors.map(e=>{try{return e&&e.message?Sh(e.message):Sh(e)}catch{return""}}).filter(Boolean).join("; ")||n.name||"AggregateError"}let bt=class Sp extends Error{static from(t,e,i,s,r,o){let a=t.message;!a&&z.isArray(t.errors)&&t.errors.length&&(a=dv(t));const l=new Sp(a,e||t.code,i,s,r);return Object.defineProperty(l,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),o&&Object.assign(l,o),l}constructor(t,e,i,s,r){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,e&&(this.code=e),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const t=this.config,e=t&&z.hasOwnProp(t,"redact")?t.redact:void 0,i=z.isArray(e)&&e.length>0?fv(t,e):z.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};bt.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";bt.ERR_BAD_OPTION="ERR_BAD_OPTION";bt.ECONNABORTED="ECONNABORTED";bt.ETIMEDOUT="ETIMEDOUT";bt.ECONNREFUSED="ECONNREFUSED";bt.ERR_NETWORK="ERR_NETWORK";bt.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";bt.ERR_DEPRECATED="ERR_DEPRECATED";bt.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";bt.ERR_BAD_REQUEST="ERR_BAD_REQUEST";bt.ERR_CANCELED="ERR_CANCELED";bt.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";bt.ERR_INVALID_URL="ERR_INVALID_URL";bt.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const pv=null,bp=100;function ec(n){return z.isPlainObject(n)||z.isArray(n)}function Ep(n){return z.endsWith(n,"[]")?n.slice(0,-2):n}function ll(n,t,e){return n?n.concat(t).map(function(s,r){return s=Ep(s),!e&&r?"["+s+"]":s}).join(e?".":""):t}function mv(n){return z.isArray(n)&&!n.some(ec)}const gv=z.toFlatObject(z,{},null,function(t){return/^is[A-Z]/.test(t)});function Oa(n,t,e){if(!z.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,e=z.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,y){return!z.isUndefined(y[M])});const i=e.metaTokens,s=e.visitor||g,r=e.dots,o=e.indexes,a=e.Blob||typeof Blob<"u"&&Blob,l=e.maxDepth===void 0?bp:e.maxDepth,u=a&&z.isSpecCompliantForm(t),c=[];if(!z.isFunction(s))throw new TypeError("visitor must be a function");function h(d){if(d===null)return"";if(z.isDate(d))return d.toISOString();if(z.isBoolean(d))return d.toString();if(!u&&z.isBlob(d))throw new bt("Blob is not supported. Use a Buffer instead.");if(z.isArrayBuffer(d)||z.isTypedArray(d)){if(u&&typeof a=="function")return new a([d]);throw new bt("Blob is not supported. Use a Buffer instead.",bt.ERR_NOT_SUPPORT)}return d}function f(d){if(d>l)throw new bt("Object is too deeply nested ("+d+" levels). Max depth: "+l,bt.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(d,M){if(l===1/0)return JSON.stringify(d);const y=[];return JSON.stringify(d,function(I,C){if(!z.isObject(C))return C;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(C),f(M+y.length-1),C})}function g(d,M,y){let b=d;if(z.isReactNative(t)&&z.isReactNativeBlob(d))return t.append(ll(y,M,r),h(d)),!1;if(d&&!y&&typeof d=="object"){if(z.endsWith(M,"{}"))M=i?M:M.slice(0,-2),d=p(d,1);else if(z.isArray(d)&&mv(d)||(z.isFileList(d)||z.endsWith(M,"[]"))&&(b=z.toArray(d)))return M=Ep(M),b.forEach(function(C,P){!(z.isUndefined(C)||C===null)&&t.append(o===!0?ll([M],P,r):o===null?M:M+"[]",h(C))}),!1}return ec(d)?!0:(t.append(ll(y,M,r),h(d)),!1)}const _=Object.assign(gv,{defaultVisitor:g,convertValue:h,isVisitable:ec});function m(d,M,y=0){if(!z.isUndefined(d)){if(f(y),c.indexOf(d)!==-1)throw new Error("Circular reference detected in "+M.join("."));c.push(d),z.forEach(d,function(I,C){(!(z.isUndefined(I)||I===null)&&s.call(t,I,z.isString(C)?C.trim():C,M,_))===!0&&m(I,M?M.concat(C):[C],y+1)}),c.pop()}}if(!z.isObject(n))throw new TypeError("data must be an object");return m(n),t}function bh(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return t[i]})}function ru(n,t){this._pairs=[],n&&Oa(n,this,t)}const wp=ru.prototype;wp.append=function(t,e){this._pairs.push([t,e])};wp.toString=function(t){const e=t?i=>t.call(this,i,bh):bh;return this._pairs.map(function(s){return e(s[0])+"="+e(s[1])},"").join("&")};function _v(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Tp(n,t,e){if(!t)return n;n=n||"";const i=z.isFunction(e)?{serialize:e}:e,s=z.getSafeProp(i,"encode")||_v,r=z.getSafeProp(i,"serialize");let o;if(r?o=r(t,i):o=z.isURLSearchParams(t)?t.toString():new ru(t,i).toString(s),o){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class Eh{constructor(){this.handlers=[]}use(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){z.forEach(this.handlers,function(i){i!==null&&t(i)})}}const ou={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},vv=typeof URLSearchParams<"u"?URLSearchParams:ru,xv=typeof FormData<"u"?FormData:null,yv=typeof Blob<"u"?Blob:null,Mv={isBrowser:!0,classes:{URLSearchParams:vv,FormData:xv,Blob:yv},protocols:["http","https","file","blob","url","data"]},au=typeof window<"u"&&typeof document<"u",nc=typeof navigator=="object"&&navigator||void 0,Sv=au&&(!nc||["ReactNative","NativeScript","NS"].indexOf(nc.product)<0),bv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ev=au&&window.location.href||"http://localhost",wv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:au,hasStandardBrowserEnv:Sv,hasStandardBrowserWebWorkerEnv:bv,navigator:nc,origin:Ev},Symbol.toStringTag,{value:"Module"})),We={...wv,...Mv};function Tv(n,t){return Oa(n,new We.classes.URLSearchParams,{visitor:function(e,i,s,r){return We.isNode&&z.isBuffer(e)?(this.append(i,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}const wh=bp;function Ap(n){if(n>wh)throw new bt("FormData field is too deeply nested ("+n+" levels). Max depth: "+wh,bt.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Av(n){const t=[],e=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=e.exec(n))!==null;)Ap(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function Rv(n){const t={},e=Object.keys(n);let i;const s=e.length;let r;for(i=0;i<s;i++)r=e[i],t[r]=n[r];return t}function Rp(n){function t(e,i,s,r){Ap(r);let o=e[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=e.length;return o=!o&&z.isArray(s)?s.length:o,l?(z.hasOwnProp(s,o)?s[o]=z.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!z.hasOwnProp(s,o)||!z.isObject(s[o]))&&(s[o]=[]),t(e,i,s[o],r)&&z.isArray(s[o])&&(s[o]=Rv(s[o])),!a)}if(z.isFormData(n)&&z.isFunction(n.entries)){const e={};return z.forEachEntry(n,(i,s)=>{t(Av(i),s,e,0)}),e}return null}const bs=(n,t)=>n!=null&&z.hasOwnProp(n,t)?n[t]:void 0;function Cv(n,t,e){if(z.isString(n))try{return(t||JSON.parse)(n),z.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(e||JSON.stringify)(n)}const ao={transitional:ou,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const i=e.getContentType()||"",s=i.indexOf("application/json")>-1,r=z.isObject(t);if(r&&z.isHTMLForm(t)&&(t=new FormData(t)),z.isFormData(t))return s?JSON.stringify(Rp(t)):t;if(z.isArrayBuffer(t)||z.isBuffer(t)||z.isStream(t)||z.isFile(t)||z.isBlob(t)||z.isReadableStream(t))return t;if(z.isArrayBufferView(t))return t.buffer;if(z.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(r){const l=bs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Tv(t,l).toString();if((a=z.isFileList(t))||i.indexOf("multipart/form-data")>-1){const u=bs(this,"env"),c=u&&u.FormData;return Oa(a?{"files[]":t}:t,c&&new c,l)}}return r||s?(e.setContentType("application/json",!1),Cv(t)):t}],transformResponse:[function(t){const e=bs(this,"transitional")||ao.transitional,i=e&&e.forcedJSONParsing,s=bs(this,"responseType"),r=s==="json";if(z.isResponse(t)||z.isReadableStream(t))return t;if(t&&z.isString(t)&&(i&&!s||r)){const a=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t,bs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?bt.from(l,bt.ERR_BAD_RESPONSE,this,null,bs(this,"response")):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:We.classes.FormData,Blob:We.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch","query"],n=>{ao.headers[n]={}});function cl(n,t){const e=this||ao,i=t||e,s=Je.from(i.headers);let r=i.data;return z.forEach(n,function(a){r=a.call(e,r,s.normalize(),t?t.status:void 0)}),s.normalize(),r}function Cp(n){return!!(n&&n.__CANCEL__)}let lo=class extends bt{constructor(t,e,i){super(t??"canceled",bt.ERR_CANCELED,e,i),this.name="CanceledError",this.__CANCEL__=!0}};function Pp(n,t,e){const i=e.config.validateStatus;!e.status||!i||i(e.status)?n(e):t(new bt("Request failed with status code "+e.status,e.status>=400&&e.status<500?bt.ERR_BAD_REQUEST:bt.ERR_BAD_RESPONSE,e.config,e.request,e))}function Pv(n){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return t&&t[1]||""}function Lv(n,t){n=n||10;const e=new Array(n),i=new Array(n);let s=0,r=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=i[r];o||(o=u),e[s]=l,i[s]=u;let h=r,f=0;for(;h!==s;)f+=e[h++],h=h%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),u-o<t)return;const p=c&&u-c;return p?Math.round(f*1e3/p):void 0}}function Iv(n,t){let e=0,i=1e3/t,s,r;const o=(u,c=Date.now())=>{e=c,s=null,r&&(clearTimeout(r),r=null),n(...u)};return[(...u)=>{const c=Date.now(),h=c-e;h>=i?o(u,c):(s=u,r||(r=setTimeout(()=>{r=null,o(s)},i-h)))},()=>s&&o(s)]}const ga=(n,t,e=3)=>{let i=0;const s=Lv(50,250);return Iv(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=Math.max(0,a!=null?Math.min(o,a):o),u=Math.max(0,l-i),c=s(u);i=Math.max(i,l);const h={loaded:l,total:a,progress:a?l/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a?(a-l)/c:void 0,event:r,lengthComputable:a!=null,[t?"download":"upload"]:!0};n(h)},e)},Th=(n,t)=>{const e=n!=null;return[i=>t[0]({lengthComputable:e,total:n,loaded:i}),t[1]]},Ah=(n,t=z.asap)=>(...e)=>t(()=>n(...e)),Dv=We.hasStandardBrowserEnv?((n,t)=>e=>(e=new URL(e,We.origin),n.protocol===e.protocol&&n.host===e.host&&(t||n.port===e.port)))(new URL(We.origin),We.navigator&&/(msie|trident)/i.test(We.navigator.userAgent)):()=>!0,Uv=We.hasStandardBrowserEnv?{write(n,t,e,i,s,r,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(t)}`];z.isNumber(e)&&a.push(`expires=${new Date(e).toUTCString()}`),z.isString(i)&&a.push(`path=${i}`),z.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),z.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const i=t[e].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===n)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Nv(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Ov(n,t){if(!t)return n;let e=n.length;for(;e>0&&n.charCodeAt(e-1)===47;)e--;return n.slice(0,e)+"/"+t.replace(/^\/+/,"")}const Fv=/^https?:(?!\/\/)/i,Bv=/[\t\n\r]/g;function zv(n){let t=0;for(;t<n.length&&n.charCodeAt(t)<=32;)t++;return n.slice(t)}function kv(n){return zv(n).replace(Bv,"")}function Hv(n){return n&&n.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,e,i="")=>`${e}${i}${ma}`)}function Vv(n){const t=n.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${ma}@`),e=t.indexOf("#"),s=(e===-1?t:t.slice(0,e)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${ma}`);return e===-1?s:`${s}#${Hv(t.slice(e+1))}`}function Rh(n,t){if(typeof n=="string"){const e=kv(n);if(Fv.test(e))throw new bt(`Invalid URL ${JSON.stringify(Vv(e))}: missing "//" after protocol`,bt.ERR_INVALID_URL,t)}}function Lp(n,t,e,i){Rh(t,i);let s=!Nv(t);return n&&(s||e===!1)?(Rh(n,i),Ov(n,t)):t}const Ch=n=>n instanceof Je?{...n}:n,Gv=n=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(n).concat(Object.getOwnPropertySymbols(n).filter(t=>Object.getOwnPropertyDescriptor(n,t).enumerable)):Object.keys(n);function ds(n,t){n=n||{},t=t||{};const e=Object.create(null);Object.defineProperty(e,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(c,h,f,p){return z.isPlainObject(c)&&z.isPlainObject(h)?z.merge.call({caseless:p},c,h):z.isPlainObject(h)?z.merge({},h):z.isArray(h)?h.slice():h}function s(c,h,f,p){if(z.isUndefined(h)){if(!z.isUndefined(c))return i(void 0,c,f,p)}else return i(c,h,f,p)}function r(c,h){if(!z.isUndefined(h))return i(void 0,h)}function o(c,h){if(z.isUndefined(h)){if(!z.isUndefined(c))return i(void 0,c)}else return i(void 0,h)}function a(c){const h=z.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!z.isUndefined(h))if(z.isPlainObject(h)){if(z.hasOwnProp(h,c))return h[c]}else return;const f=z.hasOwnProp(n,"transitional")?n.transitional:void 0;if(z.isPlainObject(f)&&z.hasOwnProp(f,c))return f[c]}function l(c,h,f){if(z.hasOwnProp(t,f))return i(c,h);if(z.hasOwnProp(n,f))return i(void 0,c)}const u={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(c,h,f)=>s(Ch(c),Ch(h),f,!0)};return z.forEach(Gv({...n,...t}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=z.hasOwnProp(u,h)?u[h]:s,p=z.hasOwnProp(n,h)?n[h]:void 0,g=z.hasOwnProp(t,h)?t[h]:void 0,_=f(p,g,h);z.isUndefined(_)&&f!==l||(e[h]=_)}),z.hasOwnProp(t,"validateStatus")&&z.isUndefined(t.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(z.hasOwnProp(n,"validateStatus")?e.validateStatus=i(void 0,n.validateStatus):delete e.validateStatus),e}const Wv=["content-type","content-length"];function Xv(n,t,e){if(e!=="content-only"){n.set(t);return}Object.entries(t||{}).forEach(([i,s])=>{Wv.includes(i.toLowerCase())&&n.set(i,s)})}const qv=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16)));function Ip(n){const t=ds({},n),e=f=>z.hasOwnProp(t,f)?t[f]:void 0,i=e("data");let s=e("withXSRFToken");const r=e("xsrfHeaderName"),o=e("xsrfCookieName");let a=e("headers");const l=e("auth"),u=e("baseURL"),c=e("allowAbsoluteUrls"),h=e("url");if(t.headers=a=Je.from(a),t.url=Tp(Lp(u,h,c,t),e("params"),e("paramsSerializer")),l){const f=z.getSafeProp(l,"username")||"",p=z.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(f+":"+(p?qv(p):"")))}catch(g){throw bt.from(g,bt.ERR_BAD_OPTION_VALUE,n)}}if(z.isFormData(i)&&(We.hasStandardBrowserEnv||We.hasStandardBrowserWebWorkerEnv||z.isReactNative(i)?a.setContentType(void 0):z.isFunction(i.getHeaders)&&Xv(a,i.getHeaders(),e("formDataHeaderPolicy"))),We.hasStandardBrowserEnv&&(z.isFunction(s)&&(s=s(t)),s===!0||s==null&&Dv(t.url))){const p=r&&o&&Uv.read(o);p&&a.set(r,p)}return t}const jv=typeof XMLHttpRequest<"u",Yv=jv&&function(n){return new Promise(function(e,i){const s=Ip(n);let r=s.data;const o=Je.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=s,c,h,f,p,g;function _(){p&&p(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(c),s.signal&&s.signal.removeEventListener("abort",c)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function d(){if(!m)return;const y=Je.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),I={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:y,config:n,request:m};Pp(function(P){e(P),_()},function(P){i(P),_()},I),m=null}"onloadend"in m?m.onloadend=d:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(d)},m.onabort=function(){m&&(i(new bt("Request aborted",bt.ECONNABORTED,n,m)),_(),m=null)},m.onerror=function(b){const I=b&&b.message?b.message:"Network Error",C=new bt(I,bt.ERR_NETWORK,n,m);C.event=b||null,i(C),_(),m=null},m.ontimeout=function(){let b=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const I=s.transitional||ou;s.timeoutErrorMessage&&(b=s.timeoutErrorMessage),i(new bt(b,I.clarifyTimeoutError?bt.ETIMEDOUT:bt.ECONNABORTED,n,m)),_(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&z.forEach(Mp(o),function(b,I){m.setRequestHeader(I,b)}),z.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),u&&([f,g]=ga(u,!0),m.addEventListener("progress",f)),l&&m.upload&&([h,p]=ga(l),m.upload.addEventListener("progress",h),m.upload.addEventListener("loadend",p)),(s.cancelToken||s.signal)&&(c=y=>{m&&(i(!y||y.type?new lo(null,n,m):y),m.abort(),_(),m=null)},s.cancelToken&&s.cancelToken.subscribe(c),s.signal&&(s.signal.aborted?c():s.signal.addEventListener("abort",c)));const M=Pv(s.url);if(M&&!We.protocols.includes(M)){i(new bt("Unsupported protocol "+M+":",bt.ERR_BAD_REQUEST,n)),_();return}m.send(r||null)})},$v=(n,t)=>{if(n=n?n.filter(Boolean):[],!t&&!n.length)return;const e=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const u=l instanceof Error?l:this.reason;e.abort(u instanceof bt?u:new lo(u instanceof Error?u.message:u))}};let r=t&&setTimeout(()=>{r=null,s(new bt(`timeout of ${t}ms exceeded`,bt.ETIMEDOUT))},t);const o=()=>{n&&(r&&clearTimeout(r),r=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),n=null)};n.forEach(l=>{if(!i){if(l.aborted){s.call(l);return}l.addEventListener("abort",s,{once:!0})}});const{signal:a}=e;return a.unsubscribe=()=>z.asap(o),a},Kv=function*(n,t){let e=n.byteLength;if(e<t){yield n;return}let i=0,s;for(;i<e;)s=i+t,yield n.slice(i,s),i=s},Zv=async function*(n,t){for await(const e of Jv(n))yield*Kv(e,t)},Jv=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const t=n.getReader();try{for(;;){const{done:e,value:i}=await t.read();if(e)break;yield i}}finally{await t.cancel()}},Ph=(n,t,e,i)=>{const s=Zv(n,t);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await s.next();if(u){a(),l.close();return}let h=c.byteLength;if(e){let f=r+=h;e(f)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Lh=n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102,Dp=(n,t,e)=>t+2<e&&Lh(n.charCodeAt(t+1))&&Lh(n.charCodeAt(t+2)),Ih=n=>n<=57?n-48:(n&223)-55,Qv=n=>n>=65&&n<=90||n>=97&&n<=122||n>=48&&n<=57||n===43||n===47||n===45||n===95,tx=n=>n===9||n===10||n===12||n===13||n===32,ex=n=>{const t=Math.floor(n/4),e=n%4;return t*3+(e===2?1:e===3?2:0)},nx=n=>{const t=n.length;let e=0;return t>0&&n.charCodeAt(t-1)===61&&(e++,t>1&&n.charCodeAt(t-2)===61&&e++),Math.floor((t-e)*3/4)},ix=n=>{const t=n.length;let e=0,i=0,s=!1;for(let r=0;r<t;r++){let o=n.charCodeAt(r);if(o===37&&Dp(n,r,t)&&(o=Ih(n.charCodeAt(r+1))*16+Ih(n.charCodeAt(r+2)),r+=2),!tx(o)){if(o===61){i++;continue}if(!Qv(o)||i>0){s=!0;continue}e++}}return s||i>2||i>0&&(e+i)%4!==0||e%4===1?nx(n):ex(e)},sx=(n,t)=>{if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const e=n.indexOf(",");if(e<0)return 0;const i=n.slice(5,e),s=n.slice(e+1);if(/;base64/i.test(i))return t(s);let o=0;for(let a=0,l=s.length;a<l;a++){const u=s.charCodeAt(a);if(u===37&&Dp(s,a,l))o+=1,a+=2;else if(u<128)o+=1;else if(u<2048)o+=2;else if(u>=55296&&u<=56319&&a+1<l){const c=s.charCodeAt(a+1);c>=56320&&c<=57343?(o+=4,a++):o+=3}else o+=3}return o};function rx(n){const t=typeof n=="string"?n.indexOf("#"):-1;return sx(t===-1?n:n.slice(0,t),ix)}const lu="1.19.0",Dh=64*1024,{isFunction:vo}=z,ox=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16))),Uh=n=>{if(!z.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},Nh=(n,...t)=>{try{return!!n(...t)}catch{return!1}},ax=n=>{const t=n.indexOf("://");let e=n;return t!==-1&&(e=e.slice(t+3)),e.includes("@")||e.includes(":")},lx=n=>{const t=z.global!==void 0&&z.global!==null?z.global:globalThis,{ReadableStream:e,TextEncoder:i}=t;n=z.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},n);const{fetch:s,Request:r,Response:o}=n,a=s?vo(s):typeof fetch=="function",l=vo(r),u=vo(o);if(!a)return!1;const c=a&&vo(e),h=a&&(typeof i=="function"?(d=>M=>d.encode(M))(new i):async d=>new Uint8Array(await new r(d).arrayBuffer())),f=l&&c&&Nh(()=>{let d=!1;const M=new r(We.origin,{body:new e,method:"POST",get duplex(){return d=!0,"half"}}),y=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),d&&!y}),p=u&&c&&Nh(()=>z.isReadableStream(new o("").body)),g={stream:p&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!g[d]&&(g[d]=(M,y)=>{let b=M&&M[d];if(b)return b.call(M);throw new bt(`Response type '${d}' is not supported`,bt.ERR_NOT_SUPPORT,y)})});const _=async d=>{if(d==null)return 0;if(z.isBlob(d))return d.size;if(z.isSpecCompliantForm(d))return(await new r(We.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(z.isArrayBufferView(d)||z.isArrayBuffer(d))return d.byteLength;if(z.isURLSearchParams(d)&&(d=d+""),z.isString(d))return(await h(d)).byteLength},m=async(d,M)=>{const y=z.toFiniteNumber(d.getContentLength());return y??_(M)};return async d=>{let{url:M,method:y,data:b,signal:I,cancelToken:C,timeout:P,onDownloadProgress:U,onUploadProgress:w,responseType:E,headers:L,withCredentials:D="same-origin",fetchOptions:H,maxContentLength:K,maxBodyLength:rt}=Ip(d);const Y=z.isNumber(K)&&K>-1,nt=z.isNumber(rt)&&rt>-1,q=ut=>z.hasOwnProp(d,ut)?d[ut]:void 0;let _t=s||fetch;E=E?(E+"").toLowerCase():"text";let vt=$v([I,C&&C.toAbortSignal()],P),pt=null;const Lt=vt&&vt.unsubscribe&&(()=>{vt.unsubscribe()});let qt,ot=null;const dt=()=>new bt("Request body larger than maxBodyLength limit",bt.ERR_BAD_REQUEST,d,pt);try{let ut;const mt=q("auth");if(mt){const R=z.getSafeProp(mt,"username")||"",B=z.getSafeProp(mt,"password")||"";ut={username:R,password:B}}if(ax(M)){const R=new URL(M,We.origin);if(!ut&&(R.username||R.password)){const B=Uh(R.username),et=Uh(R.password);ut={username:B,password:et}}(R.username||R.password)&&(R.username="",R.password="",M=R.href)}if(ut&&(L.delete("authorization"),L.set("Authorization","Basic "+btoa(ox((ut.username||"")+":"+(ut.password||""))))),Y&&typeof M=="string"&&M.startsWith("data:")&&rx(M)>K)throw new bt("maxContentLength size of "+K+" exceeded",bt.ERR_BAD_RESPONSE,d,pt);if(nt&&y!=="get"&&y!=="head"){const R=await _(b);if(typeof R=="number"&&isFinite(R)&&(qt=R,R>rt))throw dt()}const It=nt&&(z.isReadableStream(b)||z.isStream(b)),Bt=(R,B,et)=>Ph(R,Dh,it=>{if(nt&&it>rt)throw ot=dt();B&&B(it)},et);if(f&&y!=="get"&&y!=="head"&&(w||It)){if(qt=qt??await m(L,b),qt!==0||It){let R=new r(M,{method:"POST",body:b,duplex:"half"}),B;if(z.isFormData(b)&&(B=R.headers.get("content-type"))&&L.setContentType(B),R.body){const[et,it]=w&&Th(qt,ga(Ah(w)))||[];b=Bt(R.body,et,it)}}}else if(It&&!l&&c&&y!=="get"&&y!=="head")b=Bt(b);else if(It&&l&&!f&&y!=="get"&&y!=="head")throw new bt("Stream request bodies are not supported by the current fetch implementation",bt.ERR_NOT_SUPPORT,d,pt);z.isString(D)||(D=D?"include":"omit");const Ft=l&&"credentials"in r.prototype;if(z.isFormData(b)){const R=L.getContentType();R&&/^multipart\/form-data/i.test(R)&&!/boundary=/i.test(R)&&L.delete("content-type")}L.set("User-Agent","axios/"+lu,!1);const ee={...H,signal:vt,method:y.toUpperCase(),headers:Mp(L.normalize()),body:b,duplex:"half",credentials:Ft?D:void 0};pt=l&&new r(M,ee);let v=await(l?_t(pt,H):_t(M,ee));const N=Je.from(v.headers);if(Y){const R=z.toFiniteNumber(N.getContentLength());if(R!=null&&R>K)throw new bt("maxContentLength size of "+K+" exceeded",bt.ERR_BAD_RESPONSE,d,pt)}const X=p&&(E==="stream"||E==="response");if(p&&v.body&&(U||Y||X&&Lt)){const R={};["status","statusText","headers"].forEach(F=>{R[F]=v[F]});const B=z.toFiniteNumber(N.getContentLength()),[et,it]=U&&Th(B,ga(Ah(U),!0))||[];let T=0;const x=F=>{if(Y&&(T=F,T>K))throw new bt("maxContentLength size of "+K+" exceeded",bt.ERR_BAD_RESPONSE,d,pt);et&&et(F)};v=new o(Ph(v.body,Dh,x,()=>{it&&it(),Lt&&Lt()}),R)}E=E||"text";let V=await g[z.findKey(g,E)||"text"](v,d);if(Y&&!p&&!X){let R;if(V!=null&&(typeof V.byteLength=="number"?R=V.byteLength:typeof V.size=="number"?R=V.size:typeof V=="string"&&(R=typeof i=="function"?new i().encode(V).byteLength:V.length)),typeof R=="number"&&R>K)throw new bt("maxContentLength size of "+K+" exceeded",bt.ERR_BAD_RESPONSE,d,pt)}return!X&&Lt&&Lt(),await new Promise((R,B)=>{Pp(R,B,{data:V,headers:Je.from(v.headers),status:v.status,statusText:v.statusText,config:d,request:pt})})}catch(ut){if(Lt&&Lt(),vt&&vt.aborted&&vt.reason instanceof bt){const mt=vt.reason;throw mt.config=d,pt&&(mt.request=pt),ut!==mt&&Object.defineProperty(mt,"cause",{__proto__:null,value:ut,writable:!0,enumerable:!1,configurable:!0}),mt}if(ot)throw pt&&!ot.request&&(ot.request=pt),ot;if(ut instanceof bt)throw pt&&!ut.request&&(ut.request=pt),ut;if(ut&&ut.name==="TypeError"&&/Load failed|fetch/i.test(ut.message)){const mt=new bt("Network Error",bt.ERR_NETWORK,d,pt,ut&&ut.response);throw Object.defineProperty(mt,"cause",{__proto__:null,value:ut.cause||ut,writable:!0,enumerable:!1,configurable:!0}),mt}throw bt.from(ut,ut&&ut.code,d,pt,ut&&ut.response)}}},cx=new Map,Up=n=>{let t=n&&n.env||{};const{fetch:e,Request:i,Response:s}=t,r=[i,s,e];let o=r.length,a=o,l,u,c=cx;for(;a--;)l=r[a],u=c.get(l),u===void 0&&c.set(l,u=a?new Map:lx(t)),c=u;return u};Up();const cu={http:pv,xhr:Yv,fetch:{get:Up}};z.forEach(cu,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:t})}});const Oh=n=>`- ${n}`,ux=n=>z.isFunction(n)||n===null||n===!1;function hx(n,t){n=z.isArray(n)?n:[n];const{length:e}=n;let i,s;const r={};for(let o=0;o<e;o++){i=n[o];let a;if(s=i,!ux(i)&&(s=cu[(a=String(i)).toLowerCase()],s===void 0))throw new bt(`Unknown adapter '${a}'`);if(s&&(z.isFunction(s)||(s=s.get(t))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=e?o.length>1?`since :
`+o.map(Oh).join(`
`):" "+Oh(o[0]):"as no adapter specified";throw new bt("There is no suitable adapter to dispatch the request "+a,bt.ERR_NOT_SUPPORT)}return s}const Np={getAdapter:hx,adapters:cu};function ul(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new lo(null,n)}function hl(n){return ul(n),n.headers=Je.from(n.headers),n.data=cl.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Np.getAdapter(n.adapter||ao.adapter,n)(n).then(function(i){ul(n),n.response=i;try{i.data=cl.call(n,n.transformResponse,i)}finally{delete n.response}return i.headers=Je.from(i.headers),i},function(i){if(!Cp(i)&&(ul(n),i&&i.response)){n.response=i.response;try{i.response.data=cl.call(n,n.transformResponse,i.response)}finally{delete n.response}i.response.headers=Je.from(i.response.headers)}return Promise.reject(i)})}const Fa={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{Fa[n]=function(i){return typeof i===n||"a"+(t<1?"n ":" ")+n}});const Fh={};Fa.transitional=function(t,e,i){function s(r,o){return"[Axios v"+lu+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(t===!1)throw new bt(s(o," has been removed"+(e?" in "+e:"")),bt.ERR_DEPRECATED);return e&&!Fh[o]&&(Fh[o]=!0,console.warn(s(o," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(r,o,a):!0}};Fa.spelling=function(t){return(e,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function fx(n,t,e){if(typeof n!="object"||n===null)throw new bt("options must be an object",bt.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(t,r)?t[r]:void 0;if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new bt("option "+r+" must be "+l,bt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new bt("Unknown option "+r,bt.ERR_BAD_OPTION)}}const Jo={assertOptions:fx,validators:Fa},qe=Jo.validators;let us=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Eh,response:new Eh}}async request(t,e){try{return await this._request(t,e)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=ds(this.defaults,e);const{transitional:i,paramsSerializer:s,headers:r}=e;i!==void 0&&Jo.assertOptions(i,{silentJSONParsing:qe.transitional(qe.boolean),forcedJSONParsing:qe.transitional(qe.boolean),clarifyTimeoutError:qe.transitional(qe.boolean),legacyInterceptorReqResOrdering:qe.transitional(qe.boolean),advertiseZstdAcceptEncoding:qe.transitional(qe.boolean),validateStatusUndefinedResolves:qe.transitional(qe.boolean)},!1),s!=null&&(z.isFunction(s)?e.paramsSerializer={serialize:s}:Jo.assertOptions(s,{encode:qe.function,serialize:qe.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),Jo.assertOptions(e,{baseUrl:qe.spelling("baseURL"),withXsrfToken:qe.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let o=r&&z.merge(r.common,r[e.method]);r&&z.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),e.headers=Je.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(e)===!1)return;l=l&&_.synchronous;const m=e.transitional||ou;m&&m.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const u=[];this.interceptors.response.forEach(function(_){u.push(_.fulfilled,_.rejected)});let c,h=0,f;if(!l){const g=[hl.bind(this),void 0];for(g.unshift(...a),g.push(...u),f=g.length,c=Promise.resolve(e);h<f;)c=c.then(g[h++],g[h++]);return c}f=a.length;let p=e;for(;h<f;){const g=a[h++],_=a[h++];try{p=g?g(p):p}catch(m){if(!_){c=Promise.reject(m);break}try{const d=_.call(this,m);z.isThenable(d)&&(c=Promise.resolve(d).then(()=>hl.call(this,p)))}catch(d){c=Promise.reject(d)}break}}if(!c)try{c=hl.call(this,p)}catch(g){c=Promise.reject(g)}for(h=0,f=u.length;h<f;)c=c.then(u[h++],u[h++]);return c}getUri(t){t=ds(this.defaults,t);const e=Lp(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Tp(e,t.params,t.paramsSerializer)}};z.forEach(["delete","get","head","options"],function(t){us.prototype[t]=function(e,i){return this.request(ds(i||{},{method:t,url:e,data:i&&z.hasOwnProp(i,"data")?i.data:void 0}))}});z.forEach(["post","put","patch","query"],function(t){function e(i){return function(r,o,a){return this.request(ds(a||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}us.prototype[t]=e(),t!=="query"&&(us.prototype[t+"Form"]=e(!0))});let dx=class Op{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(r){e=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},t(function(r,o,a){i.reason||(i.reason=new lo(r,o,a),e(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=i=>{t.abort(i)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new Op(function(s){t=s}),cancel:t}}};function px(n){return function(e){return n.apply(null,e)}}function mx(n){return z.isObject(n)&&n.isAxiosError===!0}const ic={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ic).forEach(([n,t])=>{ic[t]=n});function Fp(n){const t=new us(n),e=fp(us.prototype.request,t);return z.extend(e,us.prototype,t,{allOwnKeys:!0}),z.extend(e,t,null,{allOwnKeys:!0}),e.create=function(s){return Fp(ds(n,s))},e}const he=Fp(ao);he.Axios=us;he.CanceledError=lo;he.CancelToken=dx;he.isCancel=Cp;he.VERSION=lu;he.toFormData=Oa;he.AxiosError=bt;he.Cancel=he.CanceledError;he.all=function(t){return Promise.all(t)};he.spread=px;he.isAxiosError=mx;he.mergeConfig=ds;he.AxiosHeaders=Je;he.formToJSON=n=>Rp(z.isHTMLForm(n)?new FormData(n):n);he.getAdapter=Np.getAdapter;he.HttpStatusCode=ic;he.default=he;const{Axios:p1,AxiosError:m1,CanceledError:g1,isCancel:_1,CancelToken:v1,VERSION:x1,all:y1,Cancel:M1,isAxiosError:S1,spread:b1,toFormData:E1,AxiosHeaders:w1,HttpStatusCode:T1,formToJSON:A1,getAdapter:R1,mergeConfig:C1,create:P1}=he;const uu="167",hi={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gx=0,Bh=1,_x=2,Bp=1,zp=2,ai=3,Fi=0,cn=1,Ue=2,Ui=0,Qs=1,rr=2,zh=3,kh=4,vx=5,ns=100,xx=101,yx=102,Mx=103,Sx=104,bx=200,Ex=201,wx=202,Tx=203,sc=204,rc=205,Ax=206,Rx=207,Cx=208,Px=209,Lx=210,Ix=211,Dx=212,Ux=213,Nx=214,Ox=0,Fx=1,Bx=2,_a=3,zx=4,kx=5,Hx=6,Vx=7,kp=0,Gx=1,Wx=2,Ni=0,Xx=1,qx=2,jx=3,Hp=4,Yx=5,$x=6,Kx=7,Vp=300,or=301,ar=302,oc=303,ac=304,Ba=306,lc=1e3,rs=1001,cc=1002,dn=1003,Zx=1004,xo=1005,on=1006,fl=1007,os=1008,xi=1009,Gp=1010,Wp=1011,Qr=1012,hu=1013,ps=1014,$n=1015,co=1016,fu=1017,du=1018,lr=1020,Xp=35902,qp=1021,jp=1022,Fn=1023,Yp=1024,$p=1025,tr=1026,cr=1027,pu=1028,mu=1029,Kp=1030,gu=1031,_u=1033,Qo=33776,ta=33777,ea=33778,na=33779,uc=35840,hc=35841,fc=35842,dc=35843,pc=36196,mc=37492,gc=37496,_c=37808,vc=37809,xc=37810,yc=37811,Mc=37812,Sc=37813,bc=37814,Ec=37815,wc=37816,Tc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,ia=36492,Lc=36494,Ic=36495,Zp=36283,Dc=36284,Uc=36285,Nc=36286,Jx=3200,Qx=3201,Jp=0,ty=1,Di="",$e="srgb",zi="srgb-linear",vu="display-p3",za="display-p3-linear",va="linear",ve="srgb",xa="rec709",ya="p3",Es=7680,Hh=519,ey=512,ny=513,iy=514,Qp=515,sy=516,ry=517,oy=518,ay=519,Oc=35044,tm=35048,Vh="300 es",pi=2e3,Ma=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const Vr=Math.PI/180,ur=180/Math.PI;function mi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function xu(n,t){return(n%t+t)%t}function ly(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function cy(n,t,e){return n!==t?(e-n)/(t-n):0}function Gr(n,t,e){return(1-e)*n+e*t}function uy(n,t,e,i){return Gr(n,t,1-Math.exp(-e*i))}function hy(n,t=1){return t-Math.abs(xu(n,t*2)-t)}function fy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function dy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function py(n,t){return n+Math.floor(Math.random()*(t-n+1))}function my(n,t){return n+Math.random()*(t-n)}function gy(n){return n*(.5-Math.random())}function _y(n){n!==void 0&&(Gh=n);let t=Gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vy(n){return n*Vr}function xy(n){return n*ur}function yy(n){return(n&n-1)===0&&n!==0}function My(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function by(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),u=r((t+i)/2),c=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*c,l*h,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pe={DEG2RAD:Vr,RAD2DEG:ur,generateUUID:mi,clamp:Ge,euclideanModulo:xu,mapLinear:ly,inverseLerp:cy,lerp:Gr,damp:uy,pingpong:hy,smoothstep:fy,smootherstep:dy,randInt:py,randFloat:my,randFloatSpread:gy,seededRandom:_y,degToRad:vy,radToDeg:xy,isPowerOfTwo:yy,ceilPowerOfTwo:My,floorPowerOfTwo:Sy,setQuaternionFromProperEuler:by,normalize:ce,denormalize:Nn};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,o,a,l,u){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u)}set(t,e,i,s,r,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],M=s[1],y=s[4],b=s[7],I=s[2],C=s[5],P=s[8];return r[0]=o*_+a*M+l*I,r[3]=o*m+a*y+l*C,r[6]=o*d+a*b+l*P,r[1]=u*_+c*M+h*I,r[4]=u*m+c*y+h*C,r[7]=u*d+c*b+h*P,r[2]=f*_+p*M+g*I,r[5]=f*m+p*y+g*C,r[8]=f*d+p*b+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=c*o-a*u,f=a*l-c*r,p=u*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*u-c*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-u*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dl.makeScale(t,e)),this}rotate(t){return this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new Kt;function em(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ey(){const n=to("canvas");return n.style.display="block",n}const Wh={};function er(n){n in Wh||(Wh[n]=!0,console.warn(n))}function wy(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Xh=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qh=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[zi]:{transfer:va,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[$e]:{transfer:ve,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[za]:{transfer:va,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(qh),fromReference:n=>n.applyMatrix3(Xh)},[vu]:{transfer:ve,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(qh),fromReference:n=>n.applyMatrix3(Xh).convertLinearToSRGB()}},Ty=new Set([zi,za]),ae={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ty.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Mr[t].toReference,s=Mr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Mr[n].primaries},getTransfer:function(n){return n===Di?va:Mr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Mr[t].luminanceCoefficients)}};function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ws;class Ay{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=to("canvas")),ws.width=t.width,ws.height=t.height;const i=ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=to("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=nr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(nr(e[i]/255)*255):e[i]=nr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ry=0;class nm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ay.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cy=0;class Xe extends vs{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=rs,s=rs,r=on,o=os,a=Fn,l=xi,u=Xe.DEFAULT_ANISOTROPY,c=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=mi(),this.name="",this.source=new nm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lc:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case cc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lc:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case cc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Vp;Xe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,i=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,b=(p+1)/2,I=(d+1)/2,C=(c+f)/4,P=(h+_)/4,U=(g+m)/4;return y>b&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=P/i):b>I?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=C/s,r=U/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=U/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-c)/M,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Py extends vs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Xe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends Py{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class im extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ly extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||u!==p||c!==g){let m=1-a;const d=l*f+u*p+c*g+h*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,d*M);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const b=a*M;if(l=l*m+f*b,u=u*m+p*b,c=c*m+g*b,h=h*m+_*b,m===1-a){const I=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=I,u*=I,c*=I,h*=I}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+c*h+l*p-u*f,t[e+1]=l*g+c*f+u*h-a*p,t[e+2]=u*g+c*p+a*f-l*h,t[e+3]=c*g-a*h-l*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-e)*c)/u,f=Math.sin(e*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*i),c=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*u+o*h-a*c,this.y=i+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gl.copy(this).projectOnVector(t),this.sub(gl)}reflect(t){return this.sub(gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gl=new O,jh=new gs;class xs{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Mo.subVectors(this.max,Sr),Ts.subVectors(t.a,Sr),As.subVectors(t.b,Sr),Rs.subVectors(t.c,Sr),Ei.subVectors(As,Ts),wi.subVectors(Rs,As),ji.subVectors(Ts,Rs);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-ji.z,ji.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,ji.z,0,-ji.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-ji.y,ji.x,0];return!_l(e,Ts,As,Rs,Mo)||(e=[1,0,0,0,1,0,0,0,1],!_l(e,Ts,As,Rs,Mo))?!1:(So.crossVectors(Ei,wi),e=[So.x,So.y,So.z],_l(e,Ts,As,Rs,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,yo=new xs,Ts=new O,As=new O,Rs=new O,Ei=new O,wi=new O,ji=new O,Sr=new O,Mo=new O,So=new O,Yi=new O;function _l(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Yi.fromArray(n,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=t.dot(Yi),u=e.dot(Yi),c=i.dot(Yi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Iy=new xs,br=new O,vl=new O;class uo{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Iy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(vl)),this.expandByPoint(br.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new O,xl=new O,bo=new O,Ti=new O,yl=new O,Eo=new O,Ml=new O;class yu{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){xl.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(xl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=Ti.dot(this.direction),l=-Ti.dot(bo),u=Ti.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=r*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+u):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+u);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xl).addScaledVector(bo,f),p}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),c>=0?(r=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,i,s,r){yl.subVectors(e,t),Eo.subVectors(i,t),Ml.crossVectors(yl,Eo);let o=this.direction.dot(Ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);const l=a*this.direction.dot(Eo.crossVectors(Ti,Eo));if(l<0)return null;const u=a*this.direction.dot(yl.cross(Ti));if(u<0||l+u>o)return null;const c=-a*Ti.dot(Ml);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,s,r,o,a,l,u,c,h,f,p,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u,c,h,f,p,g,_,m)}set(t,e,i,s,r,o,a,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*c,p=o*h,g=a*c,_=a*h;e[0]=l*c,e[4]=-l*h,e[8]=u,e[1]=p+g*u,e[5]=f-_*u,e[9]=-a*l,e[2]=_-f*u,e[6]=g+p*u,e[10]=o*l}else if(t.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*u,e[1]=o*h,e[5]=o*c,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*c,e[9]=_-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*c,p=o*h,g=a*c,_=a*h;e[0]=l*c,e[4]=g*u-p,e[8]=f*u+_,e[1]=l*h,e[5]=_*u+f,e[9]=p*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=-h,e[8]=u*c,e[1]=f*h+_,e[5]=o*c,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*c,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dy,t,Uy)}lookAt(t,e,i){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ai.crossVectors(i,vn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ai.crossVectors(i,vn)),Ai.normalize(),wo.crossVectors(vn,Ai),s[0]=Ai.x,s[4]=wo.x,s[8]=vn.x,s[1]=Ai.y,s[5]=wo.y,s[9]=vn.y,s[2]=Ai.z,s[6]=wo.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],M=i[3],y=i[7],b=i[11],I=i[15],C=s[0],P=s[4],U=s[8],w=s[12],E=s[1],L=s[5],D=s[9],H=s[13],K=s[2],rt=s[6],Y=s[10],nt=s[14],q=s[3],_t=s[7],vt=s[11],pt=s[15];return r[0]=o*C+a*E+l*K+u*q,r[4]=o*P+a*L+l*rt+u*_t,r[8]=o*U+a*D+l*Y+u*vt,r[12]=o*w+a*H+l*nt+u*pt,r[1]=c*C+h*E+f*K+p*q,r[5]=c*P+h*L+f*rt+p*_t,r[9]=c*U+h*D+f*Y+p*vt,r[13]=c*w+h*H+f*nt+p*pt,r[2]=g*C+_*E+m*K+d*q,r[6]=g*P+_*L+m*rt+d*_t,r[10]=g*U+_*D+m*Y+d*vt,r[14]=g*w+_*H+m*nt+d*pt,r[3]=M*C+y*E+b*K+I*q,r[7]=M*P+y*L+b*rt+I*_t,r[11]=M*U+y*D+b*Y+I*vt,r[15]=M*w+y*H+b*nt+I*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*u*h-r*a*f+i*u*f+s*a*p-i*l*p)+_*(+e*l*p-e*u*f+r*o*f-s*o*p+s*u*c-r*l*c)+m*(+e*u*h-e*a*p-r*o*h+i*o*p+r*a*c-i*u*c)+d*(-s*a*c-e*l*h+e*a*f+s*o*h-i*o*f+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=h*m*u-_*f*u+_*l*p-a*m*p-h*l*d+a*f*d,y=g*f*u-c*m*u-g*l*p+o*m*p+c*l*d-o*f*d,b=c*_*u-g*h*u+g*a*p-o*_*p-c*a*d+o*h*d,I=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,C=e*M+i*y+s*b+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=M*P,t[1]=(_*f*r-h*m*r-_*s*p+i*m*p+h*s*d-i*f*d)*P,t[2]=(a*m*r-_*l*r+_*s*u-i*m*u-a*s*d+i*l*d)*P,t[3]=(h*l*r-a*f*r-h*s*u+i*f*u+a*s*p-i*l*p)*P,t[4]=y*P,t[5]=(c*m*r-g*f*r+g*s*p-e*m*p-c*s*d+e*f*d)*P,t[6]=(g*l*r-o*m*r-g*s*u+e*m*u+o*s*d-e*l*d)*P,t[7]=(o*f*r-c*l*r+c*s*u-e*f*u-o*s*p+e*l*p)*P,t[8]=b*P,t[9]=(g*h*r-c*_*r-g*i*p+e*_*p+c*i*d-e*h*d)*P,t[10]=(o*_*r-g*a*r+g*i*u-e*_*u-o*i*d+e*a*d)*P,t[11]=(c*a*r-o*h*r-c*i*u+e*h*u+o*i*p-e*a*p)*P,t[12]=I*P,t[13]=(c*_*s-g*h*s+g*i*f-e*_*f-c*i*m+e*h*m)*P,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*P,t[15]=(o*h*s-c*a*s+c*i*l-e*h*l-o*i*f+e*a*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,c=o+o,h=a+a,f=r*u,p=r*c,g=r*h,_=o*c,m=o*h,d=a*h,M=l*u,y=l*c,b=l*h,I=i.x,C=i.y,P=i.z;return s[0]=(1-(_+d))*I,s[1]=(p+b)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(p-b)*C,s[5]=(1-(f+d))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+y)*P,s[9]=(m-M)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);const u=1/r,c=1/o,h=1/a;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=c,In.elements[5]*=c,In.elements[6]*=c,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pi){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(a===pi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ma)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi){const l=this.elements,u=1/(e-t),c=1/(i-s),h=1/(o-r),f=(e+t)*u,p=(i+s)*c;let g,_;if(a===pi)g=(o+r)*h,_=-2*h;else if(a===Ma)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Cs=new O,In=new pe,Dy=new O(0,0,0),Uy=new O(1,1,1),Ai=new O,wo=new O,vn=new O,Yh=new pe,$h=new gs;class Hn{constructor(t=0,e=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $h.setFromEuler(this),this.setFromQuaternion($h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ny=0;const Kh=new O,Ps=new gs,si=new pe,To=new O,Er=new O,Oy=new O,Fy=new gs,Zh=new O(1,0,0),Jh=new O(0,1,0),Qh=new O(0,0,1),tf={type:"added"},By={type:"removed"},Ls={type:"childadded",child:null},Sl={type:"childremoved",child:null};class Le extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new O,e=new Hn,i=new gs,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Kt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Zh,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zh,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?To.copy(t):To.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Er,To,this.up):si.lookAt(To,Er,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(si),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tf),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(By),Sl.child=t,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tf),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Oy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Fy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Le.DEFAULT_UP=new O(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new O,ri=new O,bl=new O,oi=new O,Is=new O,Ds=new O,ef=new O,El=new O,wl=new O,Tl=new O;class On{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Dn.subVectors(s,e),ri.subVectors(i,e),bl.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot(ri),l=Dn.dot(bl),u=ri.dot(ri),c=ri.dot(bl),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(t,e,i,s){return Dn.subVectors(i,e),ri.subVectors(t,e),Dn.cross(ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return On.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,i),Ds.subVectors(r,i),El.subVectors(t,i);const l=Is.dot(El),u=Ds.dot(El);if(l<=0&&u<=0)return e.copy(i);wl.subVectors(t,s);const c=Is.dot(wl),h=Ds.dot(wl);if(c>=0&&h<=c)return e.copy(s);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(Is,o);Tl.subVectors(t,r);const p=Is.dot(Tl),g=Ds.dot(Tl);if(g>=0&&p<=g)return e.copy(r);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(i).addScaledVector(Ds,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return ef.subVectors(r,s),a=(h-c)/(h-c+(p-g)),e.copy(s).addScaledVector(ef,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Al(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=xu(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Al(o,r,t+1/3),this.g=Al(o,r,t),this.b=Al(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=sm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}copyLinearToSRGB(t){return this.r=pl(t.r),this.g=pl(t.g),this.b=pl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ae.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ge(Ye.r*255,0,255))*65536+Math.round(Ge(Ye.g*255,0,255))*256+Math.round(Ge(Ye.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ye.copy(this),e);const i=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=$e){ae.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,i=Ye.g,s=Ye.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Ao);const i=Gr(Ri.h,Ao.h,e),s=Gr(Ri.s,Ao.s,e),r=Gr(Ri.l,Ao.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Jt;Jt.NAMES=sm;let zy=0;class pr extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Qs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sc&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Se extends pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new O,Ro=new Rt;class An{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return er("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ro.fromBufferAttribute(this,e),Ro.applyMatrix3(t),this.setXY(e,Ro.x,Ro.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oc&&(t.usage=this.usage),t}}class rm extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class om extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ye extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ky=0;const bn=new pe,Rl=new Le,Us=new O,xn=new xs,wr=new xs,Be=new O;class mn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(em(t)?om:rm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(xn.min,wr.min),xn.expandByPoint(Be),Be.addVectors(xn.max,wr.max),xn.expandByPoint(Be)):(xn.expandByPoint(wr.min),xn.expandByPoint(wr.max))}xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Be.fromBufferAttribute(a,u),l&&(Us.fromBufferAttribute(t,u),Be.add(Us)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new O,l[U]=new O;const u=new O,c=new O,h=new O,f=new Rt,p=new Rt,g=new Rt,_=new O,m=new O;function d(U,w,E){u.fromBufferAttribute(i,U),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,E),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[U].add(_),a[w].add(_),a[E].add(_),l[U].add(m),l[w].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let U=0,w=M.length;U<w;++U){const E=M[U],L=E.start,D=E.count;for(let H=L,K=L+D;H<K;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new O,b=new O,I=new O,C=new O;function P(U){I.fromBufferAttribute(s,U),C.copy(I);const w=a[U];y.copy(w),y.sub(I.multiplyScalar(I.dot(w))).normalize(),b.crossVectors(C,w);const L=b.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,L)}for(let U=0,w=M.length;U<w;++U){const E=M[U],L=E.start,D=E.count;for(let H=L,K=L+D;H<K;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,u=new O,c=new O,h=new O;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new An(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,i);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],h=r[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new pe,$i=new yu,Co=new uo,sf=new O,Ns=new O,Os=new O,Fs=new O,Cl=new O,Po=new O,Lo=new Rt,Io=new Rt,Do=new Rt,rf=new O,of=new O,af=new O,Uo=new O,No=new O;class at extends Le{constructor(t=new mn,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(Cl.fromBufferAttribute(h,t),o?Po.addScaledVector(Cl,c):Po.addScaledVector(Cl.sub(e),c))}e.add(Po)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(Co.containsPoint($i.origin)===!1&&($i.intersectSphere(Co,sf)===null||$i.origin.distanceToSquared(sf)>(t.far-t.near)**2))&&(nf.copy(r).invert(),$i.copy(t.ray).applyMatrix4(nf),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,I=y;b<I;b+=3){const C=a.getX(b),P=a.getX(b+1),U=a.getX(b+2);s=Oo(this,d,t,i,u,c,h,C,P,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);s=Oo(this,o,t,i,u,c,h,M,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,I=y;b<I;b+=3){const C=b,P=b+1,U=b+2;s=Oo(this,d,t,i,u,c,h,C,P,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,y=m+1,b=m+2;s=Oo(this,o,t,i,u,c,h,M,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Hy(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;No.copy(a),No.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(No);return u<e.near||u>e.far?null:{distance:u,point:No.clone(),object:n}}function Oo(n,t,e,i,s,r,o,a,l,u){n.getVertexPosition(a,Ns),n.getVertexPosition(l,Os),n.getVertexPosition(u,Fs);const c=Hy(n,t,e,i,Ns,Os,Fs,Uo);if(c){s&&(Lo.fromBufferAttribute(s,a),Io.fromBufferAttribute(s,l),Do.fromBufferAttribute(s,u),c.uv=On.getInterpolation(Uo,Ns,Os,Fs,Lo,Io,Do,new Rt)),r&&(Lo.fromBufferAttribute(r,a),Io.fromBufferAttribute(r,l),Do.fromBufferAttribute(r,u),c.uv1=On.getInterpolation(Uo,Ns,Os,Fs,Lo,Io,Do,new Rt)),o&&(rf.fromBufferAttribute(o,a),of.fromBufferAttribute(o,l),af.fromBufferAttribute(o,u),c.normal=On.getInterpolation(Uo,Ns,Os,Fs,rf,of,af,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};On.getNormal(Ns,Os,Fs,h.normal),c.face=h}return c}class te extends mn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2));function g(_,m,d,M,y,b,I,C,P,U,w){const E=b/P,L=I/U,D=b/2,H=I/2,K=C/2,rt=P+1,Y=U+1;let nt=0,q=0;const _t=new O;for(let vt=0;vt<Y;vt++){const pt=vt*L-H;for(let Lt=0;Lt<rt;Lt++){const qt=Lt*E-D;_t[_]=qt*M,_t[m]=pt*y,_t[d]=K,u.push(_t.x,_t.y,_t.z),_t[_]=0,_t[m]=0,_t[d]=C>0?1:-1,c.push(_t.x,_t.y,_t.z),h.push(Lt/P),h.push(1-vt/U),nt+=1}}for(let vt=0;vt<U;vt++)for(let pt=0;pt<P;pt++){const Lt=f+pt+rt*vt,qt=f+pt+rt*(vt+1),ot=f+(pt+1)+rt*(vt+1),dt=f+(pt+1)+rt*vt;l.push(Lt,qt,dt),l.push(qt,ot,dt),q+=6}a.addGroup(p,q,w),p+=q,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function en(n){const t={};for(let e=0;e<n.length;e++){const i=hr(n[e]);for(const s in i)t[s]=i[s]}return t}function Vy(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function am(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Gy={clone:hr,merge:en};var Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=Xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=Vy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}let lm=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ci=new O,lf=new Rt,cf=new Rt;class fn extends lm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,lf,cf),e.subVectors(cf,lf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bs=-90,zs=1;class cm extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Bs,zs,t,e);s.layers=this.layers,this.add(s);const r=new fn(Bs,zs,t,e);r.layers=this.layers,this.add(r);const o=new fn(Bs,zs,t,e);o.layers=this.layers,this.add(o);const a=new fn(Bs,zs,t,e);a.layers=this.layers,this.add(a);const l=new fn(Bs,zs,t,e);l.layers=this.layers,this.add(l);const u=new fn(Bs,zs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class um extends Xe{constructor(t,e,i,s,r,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hm extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new um(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ui});r.uniforms.tEquirect.value=e;const o=new at(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=on),new cm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Pl=new O,qy=new O,jy=new Kt;class Ii{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Pl.subVectors(i,e).cross(qy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jy.getNormalMatrix(t),s=this.coplanarPoint(Pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new uo,Fo=new O;class Su{constructor(t=new Ii,e=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],M=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,f-u,m-p,b-d).normalize(),i[1].setComponents(l+r,f+u,m+p,b+d).normalize(),i[2].setComponents(l+o,f+c,m+g,b+M).normalize(),i[3].setComponents(l-o,f-c,m-g,b-M).normalize(),i[4].setComponents(l-a,f-h,m-_,b-y).normalize(),e===pi)i[5].setComponents(l+a,f+h,m+_,b+y).normalize();else if(e===Ma)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Fo.x=s.normal.x>0?t.max.x:t.min.x,Fo.y=s.normal.y>0?t.max.y:t.min.y,Fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Yy(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),h.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(u,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}class Te extends mn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const M=d*f-o;for(let y=0;y<u;y++){const b=y*h-r;g.push(b,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+u*d,b=M+u*(d+1),I=M+1+u*(d+1),C=M+1+u*d;p.push(y,b,C),p.push(b,I,C)}this.setIndex(p),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.widthSegments,t.heightSegments)}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
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
#endif`,nM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iM=`#ifdef USE_BATCHING
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
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lM=`#ifdef USE_IRIDESCENCE
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
#endif`,cM=`#ifdef USE_BUMPMAP
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vM=`#define PI 3.141592653589793
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
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yM=`vec3 transformedNormal = objectNormal;
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
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",TM=`
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
}`,AM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OM=`#ifdef USE_GRADIENTMAP
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
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
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
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
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
#endif`,jM=`struct PhysicalMaterial {
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
}`,YM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sS=`#if defined( USE_POINTS_UV )
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
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uS=`#ifdef USE_MORPHTARGETS
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
#endif`,hS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_S=`#ifdef USE_NORMALMAP
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
#endif`,vS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DS=`float getShadowMask() {
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
}`,US=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,OS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,BS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
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
#endif`,GS=`#ifdef USE_TRANSMISSION
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$S=`uniform sampler2D t2D;
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
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
}`,eb=`#if DEPTH_PACKING == 3200
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
}`,nb=`#define DISTANCE
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
}`,ib=`#define DISTANCE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`uniform float scale;
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
}`,ab=`uniform vec3 diffuse;
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
}`,lb=`#include <common>
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
}`,cb=`uniform vec3 diffuse;
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
}`,ub=`#define LAMBERT
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
}`,hb=`#define LAMBERT
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
}`,fb=`#define MATCAP
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
}`,db=`#define MATCAP
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
}`,pb=`#define NORMAL
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
}`,mb=`#define NORMAL
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
}`,gb=`#define PHONG
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
}`,_b=`#define PHONG
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
}`,vb=`#define STANDARD
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
}`,xb=`#define STANDARD
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
}`,yb=`#define TOON
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
}`,Mb=`#define TOON
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
}`,Sb=`uniform float size;
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
}`,bb=`uniform vec3 diffuse;
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
}`,Eb=`#include <common>
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
}`,wb=`uniform vec3 color;
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
}`,Tb=`uniform float rotation;
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
}`,Ab=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:$y,alphahash_pars_fragment:Ky,alphamap_fragment:Zy,alphamap_pars_fragment:Jy,alphatest_fragment:Qy,alphatest_pars_fragment:tM,aomap_fragment:eM,aomap_pars_fragment:nM,batching_pars_vertex:iM,batching_vertex:sM,begin_vertex:rM,beginnormal_vertex:oM,bsdfs:aM,iridescence_fragment:lM,bumpmap_pars_fragment:cM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:dM,color_fragment:pM,color_pars_fragment:mM,color_pars_vertex:gM,color_vertex:_M,common:vM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:yM,displacementmap_pars_vertex:MM,displacementmap_vertex:SM,emissivemap_fragment:bM,emissivemap_pars_fragment:EM,colorspace_fragment:wM,colorspace_pars_fragment:TM,envmap_fragment:AM,envmap_common_pars_fragment:RM,envmap_pars_fragment:CM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:HM,envmap_vertex:LM,fog_vertex:IM,fog_pars_vertex:DM,fog_fragment:UM,fog_pars_fragment:NM,gradientmap_pars_fragment:OM,lightmap_pars_fragment:FM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:zM,lights_pars_begin:kM,lights_toon_fragment:VM,lights_toon_pars_fragment:GM,lights_phong_fragment:WM,lights_phong_pars_fragment:XM,lights_physical_fragment:qM,lights_physical_pars_fragment:jM,lights_fragment_begin:YM,lights_fragment_maps:$M,lights_fragment_end:KM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:QM,logdepthbuf_vertex:tS,map_fragment:eS,map_pars_fragment:nS,map_particle_fragment:iS,map_particle_pars_fragment:sS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:oS,morphinstance_vertex:aS,morphcolor_vertex:lS,morphnormal_vertex:cS,morphtarget_pars_vertex:uS,morphtarget_vertex:hS,normal_fragment_begin:fS,normal_fragment_maps:dS,normal_pars_fragment:pS,normal_pars_vertex:mS,normal_vertex:gS,normalmap_pars_fragment:_S,clearcoat_normal_fragment_begin:vS,clearcoat_normal_fragment_maps:xS,clearcoat_pars_fragment:yS,iridescence_pars_fragment:MS,opaque_fragment:SS,packing:bS,premultiplied_alpha_fragment:ES,project_vertex:wS,dithering_fragment:TS,dithering_pars_fragment:AS,roughnessmap_fragment:RS,roughnessmap_pars_fragment:CS,shadowmap_pars_fragment:PS,shadowmap_pars_vertex:LS,shadowmap_vertex:IS,shadowmask_pars_fragment:DS,skinbase_vertex:US,skinning_pars_vertex:NS,skinning_vertex:OS,skinnormal_vertex:FS,specularmap_fragment:BS,specularmap_pars_fragment:zS,tonemapping_fragment:kS,tonemapping_pars_fragment:HS,transmission_fragment:VS,transmission_pars_fragment:GS,uv_pars_fragment:WS,uv_pars_vertex:XS,uv_vertex:qS,worldpos_vertex:jS,background_vert:YS,background_frag:$S,backgroundCube_vert:KS,backgroundCube_frag:ZS,cube_vert:JS,cube_frag:QS,depth_vert:tb,depth_frag:eb,distanceRGBA_vert:nb,distanceRGBA_frag:ib,equirect_vert:sb,equirect_frag:rb,linedashed_vert:ob,linedashed_frag:ab,meshbasic_vert:lb,meshbasic_frag:cb,meshlambert_vert:ub,meshlambert_frag:hb,meshmatcap_vert:fb,meshmatcap_frag:db,meshnormal_vert:pb,meshnormal_frag:mb,meshphong_vert:gb,meshphong_frag:_b,meshphysical_vert:vb,meshphysical_frag:xb,meshtoon_vert:yb,meshtoon_frag:Mb,points_vert:Sb,points_frag:bb,shadow_vert:Eb,shadow_frag:wb,sprite_vert:Tb,sprite_frag:Ab},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},qn={basic:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:en([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:en([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:en([St.points,St.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:en([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:en([St.common,St.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:en([St.sprite,St.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:en([St.common,St.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:en([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};qn.physical={uniforms:en([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Bo={r:0,b:0,g:0},Zi=new Hn,Rb=new pe;function Cb(n,t,e,i,s,r,o){const a=new Jt(0);let l=r===!0?0:1,u,c,h=null,f=0,p=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const b=g(M);b===null?d(a,l):b&&b.isColor&&(d(b,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Ba)?(c===void 0&&(c=new at(new te(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:hr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Zi.copy(y.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(Zi)),c.material.toneMapped=ae.getTransfer(b.colorSpace)!==ve,(h!==b||f!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new at(new Te(2,2),new Bi({name:"BackgroundMaterial",uniforms:hr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=ae.getTransfer(b.colorSpace)!==ve,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function d(M,y){M.getRGB(Bo,am(n)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:m}}function Pb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,L,D,H,K){let rt=!1;const Y=h(H,D,L);r!==Y&&(r=Y,u(r.object)),rt=p(E,H,D,K),rt&&g(E,H,D,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,b(E,L,D,H),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return n.createVertexArray()}function u(E){return n.bindVertexArray(E)}function c(E){return n.deleteVertexArray(E)}function h(E,L,D){const H=D.wireframe===!0;let K=i[E.id];K===void 0&&(K={},i[E.id]=K);let rt=K[L.id];rt===void 0&&(rt={},K[L.id]=rt);let Y=rt[H];return Y===void 0&&(Y=f(l()),rt[H]=Y),Y}function f(E){const L=[],D=[],H=[];for(let K=0;K<e;K++)L[K]=0,D[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,L,D,H){const K=r.attributes,rt=L.attributes;let Y=0;const nt=D.getAttributes();for(const q in nt)if(nt[q].location>=0){const vt=K[q];let pt=rt[q];if(pt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor)),vt===void 0||vt.attribute!==pt||pt&&vt.data!==pt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(E,L,D,H){const K={},rt=L.attributes;let Y=0;const nt=D.getAttributes();for(const q in nt)if(nt[q].location>=0){let vt=rt[q];vt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor));const pt={};pt.attribute=vt,vt&&vt.data&&(pt.data=vt.data),K[q]=pt,Y++}r.attributes=K,r.attributesNum=Y,r.index=H}function _(){const E=r.newAttributes;for(let L=0,D=E.length;L<D;L++)E[L]=0}function m(E){d(E,0)}function d(E,L){const D=r.newAttributes,H=r.enabledAttributes,K=r.attributeDivisors;D[E]=1,H[E]===0&&(n.enableVertexAttribArray(E),H[E]=1),K[E]!==L&&(n.vertexAttribDivisor(E,L),K[E]=L)}function M(){const E=r.newAttributes,L=r.enabledAttributes;for(let D=0,H=L.length;D<H;D++)L[D]!==E[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function y(E,L,D,H,K,rt,Y){Y===!0?n.vertexAttribIPointer(E,L,D,K,rt):n.vertexAttribPointer(E,L,D,H,K,rt)}function b(E,L,D,H){_();const K=H.attributes,rt=D.getAttributes(),Y=L.defaultAttributeValues;for(const nt in rt){const q=rt[nt];if(q.location>=0){let _t=K[nt];if(_t===void 0&&(nt==="instanceMatrix"&&E.instanceMatrix&&(_t=E.instanceMatrix),nt==="instanceColor"&&E.instanceColor&&(_t=E.instanceColor)),_t!==void 0){const vt=_t.normalized,pt=_t.itemSize,Lt=t.get(_t);if(Lt===void 0)continue;const qt=Lt.buffer,ot=Lt.type,dt=Lt.bytesPerElement,ut=ot===n.INT||ot===n.UNSIGNED_INT||_t.gpuType===hu;if(_t.isInterleavedBufferAttribute){const mt=_t.data,It=mt.stride,Bt=_t.offset;if(mt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<q.locationSize;Ft++)d(q.location+Ft,mt.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ft=0;Ft<q.locationSize;Ft++)m(q.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Ft=0;Ft<q.locationSize;Ft++)y(q.location+Ft,pt/q.locationSize,ot,vt,It*dt,(Bt+pt/q.locationSize*Ft)*dt,ut)}else{if(_t.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)d(q.location+mt,_t.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let mt=0;mt<q.locationSize;mt++)m(q.location+mt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let mt=0;mt<q.locationSize;mt++)y(q.location+mt,pt/q.locationSize,ot,vt,pt*dt,pt/q.locationSize*mt*dt,ut)}}else if(Y!==void 0){const vt=Y[nt];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(q.location,vt);break;case 3:n.vertexAttrib3fv(q.location,vt);break;case 4:n.vertexAttrib4fv(q.location,vt);break;default:n.vertexAttrib1fv(q.location,vt)}}}}M()}function I(){U();for(const E in i){const L=i[E];for(const D in L){const H=L[D];for(const K in H)c(H[K].object),delete H[K];delete L[D]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const D in L){const H=L[D];for(const K in H)c(H[K].object),delete H[K];delete L[D]}delete i[E.id]}function P(E){for(const L in i){const D=i[L];if(D[E.id]===void 0)continue;const H=D[E.id];for(const K in H)c(H[K].object),delete H[K];delete D[E.id]}}function U(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Lb(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),e.update(c,i,h))}function a(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];e.update(p,i,1)}function l(u,c,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_];for(let _=0;_<f.length;_++)e.update(g,i,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ib(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Fn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===co&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==xi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$n&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:b,maxSamples:I}}function Db(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ii,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{const M=r?0:i,y=M*4;let b=d.clippingState||null;l.value=b,b=c(g,f,y,p);for(let I=0;I!==y;++I)b[I]=e[I];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,b=p;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ub(n){let t=new WeakMap;function e(o,a){return a===oc?o.mapping=or:a===ac&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oc||a===ac)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new hm(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Nb extends lm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,uf=[.125,.215,.35,.446,.526,.582],is=20,Ll=new Nb,hf=new Jt;let Il=null,Dl=0,Ul=0,Nl=!1;const ts=(1+Math.sqrt(5))/2,ks=1/ts,ff=[new O(-ts,ks,0),new O(ts,ks,0),new O(-ks,0,ts),new O(ks,0,ts),new O(0,ts,-ks),new O(0,ts,ks),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class df{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Il=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Dl,Ul),this._renderer.xr.enabled=Nl,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:co,format:Fn,colorSpace:zi,depthBuffer:!1},s=pf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ob(r)),this._blurMaterial=Fb(r,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,i,s){const a=new fn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(hf),c.toneMapping=Ni,c.autoClear=!1;const p=new Se({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new at(new te,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(hf),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const y=this._cubeSize;zo(s,M*y,d>2?y:0,y,y),c.setRenderTarget(s),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===or||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;zo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ll)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ff[(s-r-1)%ff.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new at(this._lodPlanes[s],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*is-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):is;m>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const d=[];let M=0;for(let P=0;P<is;++P){const U=P/_,w=Math.exp(-U*U/2);d.push(w),P===0?M+=w:P<m&&(M+=2*w)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const b=this._sizeLods[s],I=3*b*(s>y-Ys?s-y+Ys:0),C=4*(this._cubeSize-b);zo(e,I,C,3*b,2*b),l.setRenderTarget(e),l.render(h,Ll)}}function Ob(n){const t=[],e=[],i=[];let s=n;const r=n-Ys+1+uf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ys?l=uf[o-n+Ys-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),y=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,U=C>2?0:-1,w=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];M.set(w,_*g*C),y.set(f,m*g*C);const E=[C,C,C,C,C,C];b.set(E,d*g*C)}const I=new mn;I.setAttribute("position",new An(M,_)),I.setAttribute("uv",new An(y,m)),I.setAttribute("faceIndex",new An(b,d)),t.push(I),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function pf(n,t,e){const i=new ms(n,t,e);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Fb(n,t,e){const i=new Float32Array(is),s=new O(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function mf(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function gf(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}function Bb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===oc||l===ac,c=l===or||l===ar;if(u||c){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new df(n)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new df(n)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&er("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kb(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let y=0,b=M.length;y<b;y+=3){const I=M[y+0],C=M[y+1],P=M[y+2];f.push(I,C,C,P,P,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const I=y+0,C=y+1,P=y+2;f.push(I,C,C,P,P,I)}}else return;const m=new(em(f)?om:rm)(f,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function c(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Hb(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function u(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function c(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M];for(let M=0;M<_.length;M++)e.update(d,i,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Vb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gb(n,t,e){const i=new WeakMap,s=new xe;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let I=a.attributes.position.count*b,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*C*4*h),U=new im(P,I,C,h);U.type=$n,U.needsUpdate=!0;const w=b*4;for(let L=0;L<h;L++){const D=d[L],H=M[L],K=y[L],rt=I*C*4*L;for(let Y=0;Y<D.count;Y++){const nt=Y*w;g===!0&&(s.fromBufferAttribute(D,Y),P[rt+nt+0]=s.x,P[rt+nt+1]=s.y,P[rt+nt+2]=s.z,P[rt+nt+3]=0),_===!0&&(s.fromBufferAttribute(H,Y),P[rt+nt+4]=s.x,P[rt+nt+5]=s.y,P[rt+nt+6]=s.z,P[rt+nt+7]=0),m===!0&&(s.fromBufferAttribute(K,Y),P[rt+nt+8]=s.x,P[rt+nt+9]=s.y,P[rt+nt+10]=s.z,P[rt+nt+11]=K.itemSize===4?s.w:1)}}f={count:h,texture:U,size:new Rt(I,C)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Wb(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,h=t.get(l,c);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}class dm extends Xe{constructor(t,e,i,s,r,o,a,l,u,c=tr){if(c!==tr&&c!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===tr&&(i=ps),i===void 0&&c===cr&&(i=lr),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pm=new Xe,_f=new dm(1,1),mm=new im,gm=new Ly,_m=new um,vf=[],xf=[],yf=new Float32Array(16),Mf=new Float32Array(9),Sf=new Float32Array(4);function mr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=vf[s];if(r===void 0&&(r=new Float32Array(s),vf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ka(n,t){let e=xf[t];e===void 0&&(e=new Int32Array(t),xf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function jb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function Yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function $b(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;Sf.set(i),n.uniformMatrix2fv(this.addr,!1,Sf),Fe(e,i)}}function Kb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;Mf.set(i),n.uniformMatrix3fv(this.addr,!1,Mf),Fe(e,i)}}function Zb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,i))return;yf.set(i),n.uniformMatrix4fv(this.addr,!1,yf),Fe(e,i)}}function Jb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function tE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function eE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function nE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function iE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function sE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function rE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function oE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_f.compareFunction=Qp,r=_f):r=pm,e.setTexture2D(t||r,s)}function aE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gm,s)}function lE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_m,s)}function cE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mm,s)}function uE(n){switch(n){case 5126:return Xb;case 35664:return qb;case 35665:return jb;case 35666:return Yb;case 35674:return $b;case 35675:return Kb;case 35676:return Zb;case 5124:case 35670:return Jb;case 35667:case 35671:return Qb;case 35668:case 35672:return tE;case 35669:case 35673:return eE;case 5125:return nE;case 36294:return iE;case 36295:return sE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}function hE(n,t){n.uniform1fv(this.addr,t)}function fE(n,t){const e=mr(t,this.size,2);n.uniform2fv(this.addr,e)}function dE(n,t){const e=mr(t,this.size,3);n.uniform3fv(this.addr,e)}function pE(n,t){const e=mr(t,this.size,4);n.uniform4fv(this.addr,e)}function mE(n,t){const e=mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gE(n,t){const e=mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _E(n,t){const e=mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vE(n,t){n.uniform1iv(this.addr,t)}function xE(n,t){n.uniform2iv(this.addr,t)}function yE(n,t){n.uniform3iv(this.addr,t)}function ME(n,t){n.uniform4iv(this.addr,t)}function SE(n,t){n.uniform1uiv(this.addr,t)}function bE(n,t){n.uniform2uiv(this.addr,t)}function EE(n,t){n.uniform3uiv(this.addr,t)}function wE(n,t){n.uniform4uiv(this.addr,t)}function TE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||pm,r[o])}function AE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gm,r[o])}function RE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_m,r[o])}function CE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mm,r[o])}function PE(n){switch(n){case 5126:return hE;case 35664:return fE;case 35665:return dE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return _E;case 5124:case 35670:return vE;case 35667:case 35671:return xE;case 35668:case 35672:return yE;case 35669:case 35673:return ME;case 5125:return SE;case 36294:return bE;case 36295:return EE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return CE}}class LE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uE(e.type)}}class IE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=PE(e.type)}}class DE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function bf(n,t){n.seq.push(t),n.map[t.id]=t}function UE(n,t,e){const i=n.name,s=i.length;for(Ol.lastIndex=0;;){const r=Ol.exec(i),o=Ol.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){bf(e,u===void 0?new LE(a,n,t):new IE(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new DE(a),bf(e,h)),e=h}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);UE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ef(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const NE=37297;let OE=0;function FE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function BE(n){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n);let i;switch(t===e?i="":t===ya&&e===xa?i="LinearDisplayP3ToLinearSRGB":t===xa&&e===ya&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case za:return[i,"LinearTransferOETF"];case $e:case vu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+FE(n.getShaderSource(t),o)}else return s}function zE(n,t){const e=BE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kE(n,t){let e;switch(t){case Xx:e="Linear";break;case qx:e="Reinhard";break;case jx:e="OptimizedCineon";break;case Hp:e="ACESFilmic";break;case $x:e="AgX";break;case Kx:e="Neutral";break;case Yx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ko=new O;function HE(){ae.getLuminanceCoefficients(ko);const n=ko.x.toFixed(4),t=ko.y.toFixed(4),e=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function GE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function WE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Nr(n){return n!==""}function Tf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Af(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(XE,jE)}const qE=new Map;function jE(n,t){let e=$t[t];if(e===void 0){const i=qE.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const YE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(n){return n.replace(YE,$E)}function $E(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function KE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===zp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function ZE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function JE(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ar&&(t="ENVMAP_MODE_REFRACTION"),t}function QE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kp:t="ENVMAP_BLENDING_MULTIPLY";break;case Gx:t="ENVMAP_BLENDING_MIX";break;case Wx:t="ENVMAP_BLENDING_ADD";break}return t}function tw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ew(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=KE(e),u=ZE(e),c=JE(e),h=QE(e),f=tw(e),p=VE(e),g=GE(r),_=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),d.length>0&&(d+=`
`)):(m=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),d=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ni?kE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,zE("linearToOutputTexel",e.outputColorSpace),HE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Fc(o),o=Tf(o,e),o=Af(o,e),a=Fc(a),a=Tf(a,e),a=Af(a,e),o=Rf(o),a=Rf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+m+o,b=M+d+a,I=Ef(s,s.VERTEX_SHADER,y),C=Ef(s,s.FRAGMENT_SHADER,b);s.attachShader(_,I),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(L){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(I).trim(),K=s.getShaderInfoLog(C).trim();let rt=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,C);else{const nt=wf(s,I,"vertex"),q=wf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+nt+`
`+q)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(H===""||K==="")&&(Y=!1);Y&&(L.diagnostics={runnable:rt,programLog:D,vertexShader:{log:H,prefix:m},fragmentShader:{log:K,prefix:d}})}s.deleteShader(I),s.deleteShader(C),U=new sa(s,_),w=WE(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,NE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new sw(t),e.set(t,i)),i}}class sw{constructor(t){this.id=nw++,this.code=t,this.usedTimes=0}}function rw(n,t,e,i,s,r,o){const a=new Mu,l=new iw,u=new Set,c=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,E,L,D,H){const K=D.fog,rt=H.geometry,Y=w.isMeshStandardMaterial?D.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),q=nt&&nt.mapping===Ba?nt.image.height:null,_t=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const vt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,pt=vt!==void 0?vt.length:0;let Lt=0;rt.morphAttributes.position!==void 0&&(Lt=1),rt.morphAttributes.normal!==void 0&&(Lt=2),rt.morphAttributes.color!==void 0&&(Lt=3);let qt,ot,dt,ut;if(_t){const Qt=qn[_t];qt=Qt.vertexShader,ot=Qt.fragmentShader}else qt=w.vertexShader,ot=w.fragmentShader,l.update(w),dt=l.getVertexShaderID(w),ut=l.getFragmentShaderID(w);const mt=n.getRenderTarget(),It=H.isInstancedMesh===!0,Bt=H.isBatchedMesh===!0,Ft=!!w.map,ee=!!w.matcap,v=!!nt,N=!!w.aoMap,X=!!w.lightMap,V=!!w.bumpMap,R=!!w.normalMap,B=!!w.displacementMap,et=!!w.emissiveMap,it=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,F=w.clearcoat>0,G=w.dispersion>0,Z=w.iridescence>0,$=w.sheen>0,gt=w.transmission>0,ct=x&&!!w.anisotropyMap,ht=F&&!!w.clearcoatMap,Tt=F&&!!w.clearcoatNormalMap,lt=F&&!!w.clearcoatRoughnessMap,Mt=Z&&!!w.iridescenceMap,Vt=Z&&!!w.iridescenceThicknessMap,Ot=$&&!!w.sheenColorMap,wt=$&&!!w.sheenRoughnessMap,Ct=!!w.specularMap,Dt=!!w.specularColorMap,fe=!!w.specularIntensityMap,S=gt&&!!w.transmissionMap,j=gt&&!!w.thicknessMap,J=!!w.gradientMap,st=!!w.alphaMap,ft=w.alphaTest>0,Ut=!!w.alphaHash,Wt=!!w.extensions;let we=Ni;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(we=n.toneMapping);const Ie={shaderID:_t,shaderType:w.type,shaderName:w.name,vertexShader:qt,fragmentShader:ot,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:ut,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&H._colorsTexture!==null,instancing:It,instancingColor:It&&H.instanceColor!==null,instancingMorph:It&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:zi,alphaToCoverage:!!w.alphaToCoverage,map:Ft,matcap:ee,envMap:v,envMapMode:v&&nt.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:X,bumpMap:V,normalMap:R,displacementMap:f&&B,emissiveMap:et,normalMapObjectSpace:R&&w.normalMapType===ty,normalMapTangentSpace:R&&w.normalMapType===Jp,metalnessMap:it,roughnessMap:T,anisotropy:x,anisotropyMap:ct,clearcoat:F,clearcoatMap:ht,clearcoatNormalMap:Tt,clearcoatRoughnessMap:lt,dispersion:G,iridescence:Z,iridescenceMap:Mt,iridescenceThicknessMap:Vt,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:wt,specularMap:Ct,specularColorMap:Dt,specularIntensityMap:fe,transmission:gt,transmissionMap:S,thicknessMap:j,gradientMap:J,opaque:w.transparent===!1&&w.blending===Qs&&w.alphaToCoverage===!1,alphaMap:st,alphaTest:ft,alphaHash:Ut,combine:w.combine,mapUv:Ft&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:X&&_(w.lightMap.channel),bumpMapUv:V&&_(w.bumpMap.channel),normalMapUv:R&&_(w.normalMap.channel),displacementMapUv:B&&_(w.displacementMap.channel),emissiveMapUv:et&&_(w.emissiveMap.channel),metalnessMapUv:it&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:ct&&_(w.anisotropyMap.channel),clearcoatMapUv:ht&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ct&&_(w.specularMap.channel),specularColorMapUv:Dt&&_(w.specularColorMap.channel),specularIntensityMapUv:fe&&_(w.specularIntensityMap.channel),transmissionMapUv:S&&_(w.transmissionMap.channel),thicknessMapUv:j&&_(w.thicknessMap.channel),alphaMapUv:st&&_(w.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(R||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!rt.attributes.uv&&(Ft||st),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:Ft&&w.map.isVideoTexture===!0&&ae.getTransfer(w.map.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ue,flipSided:w.side===cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=u.has(1),Ie.vertexUv2s=u.has(2),Ie.vertexUv3s=u.has(3),u.clear(),Ie}function d(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)E.push(L),E.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(M(E,w),y(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function M(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function y(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),w.push(a.mask)}function b(w){const E=g[w.type];let L;if(E){const D=qn[E];L=Gy.clone(D.uniforms)}else L=w.uniforms;return L}function I(w,E){let L;for(let D=0,H=c.length;D<H;D++){const K=c[D];if(K.cacheKey===E){L=K,++L.usedTimes;break}}return L===void 0&&(L=new ew(n,E,w,r),c.push(L)),L}function C(w){if(--w.usedTimes===0){const E=c.indexOf(w);c[E]=c[c.length-1],c.pop(),w.destroy()}}function P(w){l.remove(w)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:U}}function ow(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function aw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Pf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function u(h,f){e.length>1&&e.sort(h||aw),i.length>1&&i.sort(f||Pf),s.length>1&&s.sort(f||Pf)}function c(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function lw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Lf,n.set(i,[o])):s>=r.length?(o=new Lf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function cw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Jt};break;case"SpotLight":e={position:new O,direction:new O,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function uw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let hw=0;function fw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function dw(n){const t=new cw,e=uw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const s=new O,r=new pe,o=new pe;function a(u){let c=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,M=0,y=0,b=0,I=0,C=0,P=0;u.sort(fw);for(let w=0,E=u.length;w<E;w++){const L=u[w],D=L.color,H=L.intensity,K=L.distance,rt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=D.r*H,h+=D.g*H,f+=D.b*H;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],H);P++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const nt=L.shadow,q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=rt,i.directionalShadowMatrix[p]=L.shadow.matrix,M++}i.directional[p]=Y,p++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(D).multiplyScalar(H),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[_]=Y;const nt=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,nt.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=nt.matrix,L.castShadow){const q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=rt,b++}_++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(D).multiplyScalar(H),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Y,m++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const nt=L.shadow,q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=rt,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(H),Y.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[d]=Y,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==M||U.numPointShadows!==y||U.numSpotShadows!==b||U.numSpotMaps!==I||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=M,U.numPointShadows=y,U.numSpotShadows=b,U.numSpotMaps=I,U.numLightProbes=P,i.version=hw++)}function l(u,c){let h=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,M=u.length;d<M;d++){const y=u[d];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(y.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function If(n){const t=new dw(n),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new If(n),t.set(s,[a])):r>=o.length?(a=new If(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class mw extends pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gw extends pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vw=`uniform sampler2D shadow_pass;
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
}`;function xw(n,t,e){let i=new Su;const s=new Rt,r=new Rt,o=new xe,a=new mw({depthPacking:Qx}),l=new gw,u={},c=e.maxTextureSize,h={[Fi]:cn,[cn]:Fi,[Ue]:Ue},f=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:_w,fragmentShader:vw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let d=this.type;this.render=function(C,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ui),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=d!==ai&&this.type===ai,K=d===ai&&this.type!==ai;for(let rt=0,Y=C.length;rt<Y;rt++){const nt=C[rt],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const _t=q.getFrameExtents();if(s.multiply(_t),r.copy(q.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/_t.x),s.x=r.x*_t.x,q.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/_t.y),s.y=r.y*_t.y,q.mapSize.y=r.y)),q.map===null||H===!0||K===!0){const pt=this.type!==ai?{minFilter:dn,magFilter:dn}:{};q.map!==null&&q.map.dispose(),q.map=new ms(s.x,s.y,pt),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const vt=q.getViewportCount();for(let pt=0;pt<vt;pt++){const Lt=q.getViewport(pt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),D.viewport(o),q.updateMatrices(nt,pt),i=q.getFrustum(),b(P,U,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===ai&&M(q,U),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,E,L)};function M(C,P){const U=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ms(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,U,f,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,U,p,_,null)}function y(C,P,U,w){let E=null;const L=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)E=L;else if(E=U.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const D=E.uuid,H=P.uuid;let K=u[D];K===void 0&&(K={},u[D]=K);let rt=K[H];rt===void 0&&(rt=E.clone(),K[H]=rt,P.addEventListener("dispose",I)),E=rt}if(E.visible=P.visible,E.wireframe=P.wireframe,w===ai?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:h[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=n.properties.get(E);D.light=U}return E}function b(C,P,U,w,E){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const H=t.update(C),K=C.material;if(Array.isArray(K)){const rt=H.groups;for(let Y=0,nt=rt.length;Y<nt;Y++){const q=rt[Y],_t=K[q.materialIndex];if(_t&&_t.visible){const vt=y(C,_t,w,E);C.onBeforeShadow(n,C,P,U,H,vt,q),n.renderBufferDirect(U,null,H,vt,C,q),C.onAfterShadow(n,C,P,U,H,vt,q)}}}else if(K.visible){const rt=y(C,K,w,E);C.onBeforeShadow(n,C,P,U,H,rt,null),n.renderBufferDirect(U,null,H,rt,C,null),C.onAfterShadow(n,C,P,U,H,rt,null)}}const D=C.children;for(let H=0,K=D.length;H<K;H++)b(D[H],P,U,w,E)}function I(C){C.target.removeEventListener("dispose",I);for(const U in u){const w=u[U],E=C.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function yw(n){function t(){let S=!1;const j=new xe;let J=null;const st=new xe(0,0,0,0);return{setMask:function(ft){J!==ft&&!S&&(n.colorMask(ft,ft,ft,ft),J=ft)},setLocked:function(ft){S=ft},setClear:function(ft,Ut,Wt,we,Ie){Ie===!0&&(ft*=we,Ut*=we,Wt*=we),j.set(ft,Ut,Wt,we),st.equals(j)===!1&&(n.clearColor(ft,Ut,Wt,we),st.copy(j))},reset:function(){S=!1,J=null,st.set(-1,0,0,0)}}}function e(){let S=!1,j=null,J=null,st=null;return{setTest:function(ft){ft?ut(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(ft){j!==ft&&!S&&(n.depthMask(ft),j=ft)},setFunc:function(ft){if(J!==ft){switch(ft){case Ox:n.depthFunc(n.NEVER);break;case Fx:n.depthFunc(n.ALWAYS);break;case Bx:n.depthFunc(n.LESS);break;case _a:n.depthFunc(n.LEQUAL);break;case zx:n.depthFunc(n.EQUAL);break;case kx:n.depthFunc(n.GEQUAL);break;case Hx:n.depthFunc(n.GREATER);break;case Vx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ft}},setLocked:function(ft){S=ft},setClear:function(ft){st!==ft&&(n.clearDepth(ft),st=ft)},reset:function(){S=!1,j=null,J=null,st=null}}}function i(){let S=!1,j=null,J=null,st=null,ft=null,Ut=null,Wt=null,we=null,Ie=null;return{setTest:function(Qt){S||(Qt?ut(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(Qt){j!==Qt&&!S&&(n.stencilMask(Qt),j=Qt)},setFunc:function(Qt,De,Ae){(J!==Qt||st!==De||ft!==Ae)&&(n.stencilFunc(Qt,De,Ae),J=Qt,st=De,ft=Ae)},setOp:function(Qt,De,Ae){(Ut!==Qt||Wt!==De||we!==Ae)&&(n.stencilOp(Qt,De,Ae),Ut=Qt,Wt=De,we=Ae)},setLocked:function(Qt){S=Qt},setClear:function(Qt){Ie!==Qt&&(n.clearStencil(Qt),Ie=Qt)},reset:function(){S=!1,j=null,J=null,st=null,ft=null,Ut=null,Wt=null,we=null,Ie=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,M=null,y=null,b=null,I=null,C=new Jt(0,0,0),P=0,U=!1,w=null,E=null,L=null,D=null,H=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,Y=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(nt)[1]),rt=Y>=1):nt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),rt=Y>=2);let q=null,_t={};const vt=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),Lt=new xe().fromArray(vt),qt=new xe().fromArray(pt);function ot(S,j,J,st){const ft=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(S,Ut),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<J;Wt++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(j+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return Ut}const dt={};dt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),r.setFunc(_a),V(!1),R(Bh),ut(n.CULL_FACE),N(Ui);function ut(S){u[S]!==!0&&(n.enable(S),u[S]=!0)}function mt(S){u[S]!==!1&&(n.disable(S),u[S]=!1)}function It(S,j){return c[S]!==j?(n.bindFramebuffer(S,j),c[S]=j,S===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=j),S===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Bt(S,j){let J=f,st=!1;if(S){J=h.get(j),J===void 0&&(J=[],h.set(j,J));const ft=S.textures;if(J.length!==ft.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,Wt=ft.length;Ut<Wt;Ut++)J[Ut]=n.COLOR_ATTACHMENT0+Ut;J.length=ft.length,st=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,st=!0);st&&n.drawBuffers(J)}function Ft(S){return p!==S?(n.useProgram(S),p=S,!0):!1}const ee={[ns]:n.FUNC_ADD,[xx]:n.FUNC_SUBTRACT,[yx]:n.FUNC_REVERSE_SUBTRACT};ee[Mx]=n.MIN,ee[Sx]=n.MAX;const v={[bx]:n.ZERO,[Ex]:n.ONE,[wx]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[Lx]:n.SRC_ALPHA_SATURATE,[Cx]:n.DST_COLOR,[Ax]:n.DST_ALPHA,[Tx]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[Px]:n.ONE_MINUS_DST_COLOR,[Rx]:n.ONE_MINUS_DST_ALPHA,[Ix]:n.CONSTANT_COLOR,[Dx]:n.ONE_MINUS_CONSTANT_COLOR,[Ux]:n.CONSTANT_ALPHA,[Nx]:n.ONE_MINUS_CONSTANT_ALPHA};function N(S,j,J,st,ft,Ut,Wt,we,Ie,Qt){if(S===Ui){g===!0&&(mt(n.BLEND),g=!1);return}if(g===!1&&(ut(n.BLEND),g=!0),S!==vx){if(S!==_||Qt!==U){if((m!==ns||y!==ns)&&(n.blendEquation(n.FUNC_ADD),m=ns,y=ns),Qt)switch(S){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rr:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}d=null,M=null,b=null,I=null,C.set(0,0,0),P=0,_=S,U=Qt}return}ft=ft||j,Ut=Ut||J,Wt=Wt||st,(j!==m||ft!==y)&&(n.blendEquationSeparate(ee[j],ee[ft]),m=j,y=ft),(J!==d||st!==M||Ut!==b||Wt!==I)&&(n.blendFuncSeparate(v[J],v[st],v[Ut],v[Wt]),d=J,M=st,b=Ut,I=Wt),(we.equals(C)===!1||Ie!==P)&&(n.blendColor(we.r,we.g,we.b,Ie),C.copy(we),P=Ie),_=S,U=!1}function X(S,j){S.side===Ue?mt(n.CULL_FACE):ut(n.CULL_FACE);let J=S.side===cn;j&&(J=!J),V(J),S.blending===Qs&&S.transparent===!1?N(Ui):N(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),s.setMask(S.colorWrite);const st=S.stencilWrite;o.setTest(st),st&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),et(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function V(S){w!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),w=S)}function R(S){S!==gx?(ut(n.CULL_FACE),S!==E&&(S===Bh?n.cullFace(n.BACK):S===_x?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),E=S}function B(S){S!==L&&(rt&&n.lineWidth(S),L=S)}function et(S,j,J){S?(ut(n.POLYGON_OFFSET_FILL),(D!==j||H!==J)&&(n.polygonOffset(j,J),D=j,H=J)):mt(n.POLYGON_OFFSET_FILL)}function it(S){S?ut(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function T(S){S===void 0&&(S=n.TEXTURE0+K-1),q!==S&&(n.activeTexture(S),q=S)}function x(S,j,J){J===void 0&&(q===null?J=n.TEXTURE0+K-1:J=q);let st=_t[J];st===void 0&&(st={type:void 0,texture:void 0},_t[J]=st),(st.type!==S||st.texture!==j)&&(q!==J&&(n.activeTexture(J),q=J),n.bindTexture(S,j||dt[S]),st.type=S,st.texture=j)}function F(){const S=_t[q];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ot(S){Lt.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),Lt.copy(S))}function wt(S){qt.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),qt.copy(S))}function Ct(S,j){let J=l.get(j);J===void 0&&(J=new WeakMap,l.set(j,J));let st=J.get(S);st===void 0&&(st=n.getUniformBlockIndex(j,S.name),J.set(S,st))}function Dt(S,j){const st=l.get(j).get(S);a.get(j)!==st&&(n.uniformBlockBinding(j,st,S.__bindingPointIndex),a.set(j,st))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,_t={},c={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,M=null,y=null,b=null,I=null,C=new Jt(0,0,0),P=0,U=!1,w=null,E=null,L=null,D=null,H=null,Lt.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ut,disable:mt,bindFramebuffer:It,drawBuffers:Bt,useProgram:Ft,setBlending:N,setMaterial:X,setFlipSided:V,setCullFace:R,setLineWidth:B,setPolygonOffset:et,setScissorTest:it,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:G,compressedTexImage3D:Z,texImage2D:Mt,texImage3D:Vt,updateUBOMapping:Ct,uniformBlockBinding:Dt,texStorage2D:Tt,texStorage3D:lt,texSubImage2D:$,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ht,scissor:Ot,viewport:wt,reset:fe}}function Df(n,t,e,i){const s=Mw(i);switch(e){case qp:return n*t;case Yp:return n*t;case $p:return n*t*2;case pu:return n*t/s.components*s.byteLength;case mu:return n*t/s.components*s.byteLength;case Kp:return n*t*2/s.components*s.byteLength;case gu:return n*t*2/s.components*s.byteLength;case jp:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case _u:return n*t*4/s.components*s.byteLength;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:case dc:return Math.max(n,16)*Math.max(t,8)/4;case uc:case fc:return Math.max(n,8)*Math.max(t,8)/2;case pc:case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ia:case Lc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Zp:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Uc:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mw(n){switch(n){case xi:case Gp:return{byteLength:1,components:1};case Qr:case Wp:case co:return{byteLength:2,components:1};case fu:case du:return{byteLength:2,components:4};case ps:case hu:case $n:return{byteLength:4,components:1};case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Sw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Rt,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):to("canvas")}function _(T,x,F){let G=1;const Z=it(T);if((Z.width>F||Z.height>F)&&(G=F/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(G*Z.width),gt=Math.floor(G*Z.height);h===void 0&&(h=g($,gt));const ct=x?g($,gt):h;return ct.width=$,ct.height=gt,ct.getContext("2d").drawImage(T,0,0,$,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+gt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==dn&&T.minFilter!==on}function d(T){n.generateMipmap(T)}function M(T,x,F,G,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),x===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),x===n.RGBA){const gt=Z?va:ae.getTransfer(G);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=gt===ve?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,x){let F;return T?x===null||x===ps||x===lr?F=n.DEPTH24_STENCIL8:x===$n?F=n.DEPTH32F_STENCIL8:x===Qr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ps||x===lr?F=n.DEPTH_COMPONENT24:x===$n?F=n.DEPTH_COMPONENT32F:x===Qr&&(F=n.DEPTH_COMPONENT16),F}function b(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==dn&&T.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function I(T){const x=T.target;x.removeEventListener("dispose",I),P(x),x.isVideoTexture&&c.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),w(x)}function P(T){const x=i.get(T);if(x.__webglInit===void 0)return;const F=T.source,G=f.get(F);if(G){const Z=G[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&U(T),Object.keys(G).length===0&&f.delete(F)}i.remove(T)}function U(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const F=T.source,G=f.get(F);delete G[x.__cacheKey],o.memory.textures--}function w(T){const x=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let Z=0;Z<x.__webglFramebuffer[G].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[G][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let G=0,Z=F.length;G<Z;G++){const $=i.get(F[G]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(T)}let E=0;function L(){E=0}function D(){const T=E;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),E+=1,T}function H(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function K(T,x){const F=i.get(T);if(T.isVideoTexture&&B(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(F,T,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function rt(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){qt(F,T,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Y(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){qt(F,T,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function nt(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ot(F,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const q={[lc]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[cc]:n.MIRRORED_REPEAT},_t={[dn]:n.NEAREST,[Zx]:n.NEAREST_MIPMAP_NEAREST,[xo]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},vt={[ey]:n.NEVER,[ay]:n.ALWAYS,[ny]:n.LESS,[Qp]:n.LEQUAL,[iy]:n.EQUAL,[oy]:n.GEQUAL,[sy]:n.GREATER,[ry]:n.NOTEQUAL};function pt(T,x){if(x.type===$n&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===fl||x.magFilter===xo||x.magFilter===os||x.minFilter===on||x.minFilter===fl||x.minFilter===xo||x.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,q[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,q[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,q[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,_t[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==xo&&x.minFilter!==os||x.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Lt(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",I));const G=x.source;let Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));const $=H(x);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[$].usedTimes++;const gt=Z[T.__cacheKey];gt!==void 0&&(Z[T.__cacheKey].usedTimes--,gt.usedTimes===0&&U(x)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return F}function qt(T,x,F){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const Z=Lt(T,x),$=x.source;e.bindTexture(G,T.__webglTexture,n.TEXTURE0+F);const gt=i.get($);if($.version!==gt.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);const ct=ae.getPrimaries(ae.workingColorSpace),ht=x.colorSpace===Di?null:ae.getPrimaries(x.colorSpace),Tt=x.colorSpace===Di||ct===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let lt=_(x.image,!1,s.maxTextureSize);lt=et(x,lt);const Mt=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type);let Ot=M(x.internalFormat,Mt,Vt,x.colorSpace,x.isVideoTexture);pt(G,x);let wt;const Ct=x.mipmaps,Dt=x.isVideoTexture!==!0,fe=gt.__version===void 0||Z===!0,S=$.dataReady,j=b(x,lt);if(x.isDepthTexture)Ot=y(x.format===cr,x.type),fe&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Ot,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Mt,Vt,null));else if(x.isDataTexture)if(Ct.length>0){Dt&&fe&&e.texStorage2D(n.TEXTURE_2D,j,Ot,Ct[0].width,Ct[0].height);for(let J=0,st=Ct.length;J<st;J++)wt=Ct[J],Dt?S&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,wt.width,wt.height,Mt,Vt,wt.data):e.texImage2D(n.TEXTURE_2D,J,Ot,wt.width,wt.height,0,Mt,Vt,wt.data);x.generateMipmaps=!1}else Dt?(fe&&e.texStorage2D(n.TEXTURE_2D,j,Ot,lt.width,lt.height),S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,Vt,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Mt,Vt,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,j,Ot,Ct[0].width,Ct[0].height,lt.depth);for(let J=0,st=Ct.length;J<st;J++)if(wt=Ct[J],x.format!==Fn)if(Mt!==null)if(Dt){if(S)if(x.layerUpdates.size>0){const ft=Df(wt.width,wt.height,x.format,x.type);for(const Ut of x.layerUpdates){const Wt=wt.data.subarray(Ut*ft/wt.data.BYTES_PER_ELEMENT,(Ut+1)*ft/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ut,wt.width,wt.height,1,Mt,Wt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,wt.width,wt.height,lt.depth,Mt,wt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ot,wt.width,wt.height,lt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?S&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,wt.width,wt.height,lt.depth,Mt,Vt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,Ot,wt.width,wt.height,lt.depth,0,Mt,Vt,wt.data)}else{Dt&&fe&&e.texStorage2D(n.TEXTURE_2D,j,Ot,Ct[0].width,Ct[0].height);for(let J=0,st=Ct.length;J<st;J++)wt=Ct[J],x.format!==Fn?Mt!==null?Dt?S&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,wt.width,wt.height,Mt,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,Ot,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?S&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,wt.width,wt.height,Mt,Vt,wt.data):e.texImage2D(n.TEXTURE_2D,J,Ot,wt.width,wt.height,0,Mt,Vt,wt.data)}else if(x.isDataArrayTexture)if(Dt){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,j,Ot,lt.width,lt.height,lt.depth),S)if(x.layerUpdates.size>0){const J=Df(lt.width,lt.height,x.format,x.type);for(const st of x.layerUpdates){const ft=lt.data.subarray(st*J/lt.data.BYTES_PER_ELEMENT,(st+1)*J/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,lt.width,lt.height,1,Mt,Vt,ft)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Vt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,lt.width,lt.height,lt.depth,0,Mt,Vt,lt.data);else if(x.isData3DTexture)Dt?(fe&&e.texStorage3D(n.TEXTURE_3D,j,Ot,lt.width,lt.height,lt.depth),S&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Vt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,lt.width,lt.height,lt.depth,0,Mt,Vt,lt.data);else if(x.isFramebufferTexture){if(fe)if(Dt)e.texStorage2D(n.TEXTURE_2D,j,Ot,lt.width,lt.height);else{let J=lt.width,st=lt.height;for(let ft=0;ft<j;ft++)e.texImage2D(n.TEXTURE_2D,ft,Ot,J,st,0,Mt,Vt,null),J>>=1,st>>=1}}else if(Ct.length>0){if(Dt&&fe){const J=it(Ct[0]);e.texStorage2D(n.TEXTURE_2D,j,Ot,J.width,J.height)}for(let J=0,st=Ct.length;J<st;J++)wt=Ct[J],Dt?S&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Mt,Vt,wt):e.texImage2D(n.TEXTURE_2D,J,Ot,Mt,Vt,wt);x.generateMipmaps=!1}else if(Dt){if(fe){const J=it(lt);e.texStorage2D(n.TEXTURE_2D,j,Ot,J.width,J.height)}S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Vt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Mt,Vt,lt);m(x)&&d(G),gt.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ot(T,x,F){if(x.image.length!==6)return;const G=Lt(T,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const $=i.get(Z);if(Z.version!==$.__version||G===!0){e.activeTexture(n.TEXTURE0+F);const gt=ae.getPrimaries(ae.workingColorSpace),ct=x.colorSpace===Di?null:ae.getPrimaries(x.colorSpace),ht=x.colorSpace===Di||gt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,lt=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let st=0;st<6;st++)!Tt&&!lt?Mt[st]=_(x.image[st],!0,s.maxCubemapSize):Mt[st]=lt?x.image[st].image:x.image[st],Mt[st]=et(x,Mt[st]);const Vt=Mt[0],Ot=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),Ct=M(x.internalFormat,Ot,wt,x.colorSpace),Dt=x.isVideoTexture!==!0,fe=$.__version===void 0||G===!0,S=Z.dataReady;let j=b(x,Vt);pt(n.TEXTURE_CUBE_MAP,x);let J;if(Tt){Dt&&fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,j,Ct,Vt.width,Vt.height);for(let st=0;st<6;st++){J=Mt[st].mipmaps;for(let ft=0;ft<J.length;ft++){const Ut=J[ft];x.format!==Fn?Ot!==null?Dt?S&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft,0,0,Ut.width,Ut.height,Ot,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft,Ct,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft,0,0,Ut.width,Ut.height,Ot,wt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft,Ct,Ut.width,Ut.height,0,Ot,wt,Ut.data)}}}else{if(J=x.mipmaps,Dt&&fe){J.length>0&&j++;const st=it(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,j,Ct,st.width,st.height)}for(let st=0;st<6;st++)if(lt){Dt?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Mt[st].width,Mt[st].height,Ot,wt,Mt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ct,Mt[st].width,Mt[st].height,0,Ot,wt,Mt[st].data);for(let ft=0;ft<J.length;ft++){const Wt=J[ft].image[st].image;Dt?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft+1,0,0,Wt.width,Wt.height,Ot,wt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft+1,Ct,Wt.width,Wt.height,0,Ot,wt,Wt.data)}}else{Dt?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,wt,Mt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ct,Ot,wt,Mt[st]);for(let ft=0;ft<J.length;ft++){const Ut=J[ft];Dt?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft+1,0,0,Ot,wt,Ut.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft+1,Ct,Ot,wt,Ut.image[st])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),$.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function dt(T,x,F,G,Z,$){const gt=r.convert(F.format,F.colorSpace),ct=r.convert(F.type),ht=M(F.internalFormat,gt,ct,F.colorSpace);if(!i.get(x).__hasExternalTextures){const lt=Math.max(1,x.width>>$),Mt=Math.max(1,x.height>>$);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,ht,lt,Mt,x.depth,0,gt,ct,null):e.texImage2D(Z,$,ht,lt,Mt,0,gt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),R(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Z,i.get(F).__webglTexture,0,V(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Z,i.get(F).__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(T,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const G=x.depthTexture,Z=G&&G.isDepthTexture?G.type:null,$=y(x.stencilBuffer,Z),gt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=V(x);R(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,$,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,T)}else{const G=x.textures;for(let Z=0;Z<G.length;Z++){const $=G[Z],gt=r.convert($.format,$.colorSpace),ct=r.convert($.type),ht=M($.internalFormat,gt,ct,$.colorSpace),Tt=V(x);F&&R(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,ht,x.width,x.height):R(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,ht,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ht,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const G=i.get(x.depthTexture).__webglTexture,Z=V(x);if(x.depthTexture.format===tr)R(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(x.depthTexture.format===cr)R(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function It(T){const x=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");mt(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]=n.createRenderbuffer(),ut(x.__webglDepthbuffer[G],T,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ut(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(T,x,F){const G=i.get(T);x!==void 0&&dt(G.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&It(T)}function Ft(T){const x=T.texture,F=i.get(T),G=i.get(x);T.addEventListener("dispose",C);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,gt=Z.length>1;if(gt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let ht=0;ht<x.mipmaps.length;ht++)F.__webglFramebuffer[ct][ht]=n.createFramebuffer()}else F.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)F.__webglFramebuffer[ct]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(gt)for(let ct=0,ht=Z.length;ct<ht;ct++){const Tt=i.get(Z[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&R(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const ht=Z[ct];F.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const Tt=r.convert(ht.format,ht.colorSpace),lt=r.convert(ht.type),Mt=M(ht.internalFormat,Tt,lt,ht.colorSpace,T.isXRRenderTarget===!0),Vt=V(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Mt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),pt(n.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)dt(F.__webglFramebuffer[ct][ht],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else dt(F.__webglFramebuffer[ct],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ct=0,ht=Z.length;ct<ht;ct++){const Tt=Z[ct],lt=i.get(Tt);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),pt(n.TEXTURE_2D,Tt),dt(F.__webglFramebuffer,T,Tt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Tt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,G.__webglTexture),pt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)dt(F.__webglFramebuffer[ht],T,x,n.COLOR_ATTACHMENT0,ct,ht);else dt(F.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ct,0);m(x)&&d(ct),e.unbindTexture()}T.depthBuffer&&It(T)}function ee(T){const x=T.textures;for(let F=0,G=x.length;F<G;F++){const Z=x[F];if(m(Z)){const $=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,gt=i.get(Z).__webglTexture;e.bindTexture($,gt),d($),e.unbindTexture()}}}const v=[],N=[];function X(T){if(T.samples>0){if(R(T)===!1){const x=T.textures,F=T.width,G=T.height;let Z=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(T),ct=x.length>1;if(ct)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);const Tt=i.get(x[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,Z,n.NEAREST),l===!0&&(v.length=0,N.length=0,v.push(n.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.resolveDepthBuffer===!1&&(v.push($),N.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,v))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);const Tt=i.get(x[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function V(T){return Math.min(s.maxSamples,T.samples)}function R(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(T){const x=o.render.frame;c.get(T)!==x&&(c.set(T,x),T.update())}function et(T,x){const F=T.colorSpace,G=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==zi&&F!==Di&&(ae.getTransfer(F)===ve?(G!==Fn||Z!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function it(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=rt,this.setTexture3D=Y,this.setTextureCube=nt,this.rebindTextures=Bt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=R}function bw(n,t){function e(i,s=Di){let r;const o=ae.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===du)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gp)return n.BYTE;if(i===Wp)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===hu)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===co)return n.HALF_FLOAT;if(i===qp)return n.ALPHA;if(i===jp)return n.RGB;if(i===Fn)return n.RGBA;if(i===Yp)return n.LUMINANCE;if(i===$p)return n.LUMINANCE_ALPHA;if(i===tr)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===pu)return n.RED;if(i===mu)return n.RED_INTEGER;if(i===Kp)return n.RG;if(i===gu)return n.RG_INTEGER;if(i===_u)return n.RGBA_INTEGER;if(i===Qo||i===ta||i===ea||i===na)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uc||i===hc||i===fc||i===dc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pc||i===mc||i===gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pc||i===mc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_c)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ac)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ia||i===Lc||i===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ia)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zp||i===Dc||i===Uc||i===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Ew extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ww={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ww)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Aw=`
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

}`;class Rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Bi({vertexShader:Tw,fragmentShader:Aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new Te(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cw extends vs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=new Rw,m=e.getContextAttributes();let d=null,M=null;const y=[],b=[],I=new Rt;let C=null;const P=new fn;P.layers.enable(1),P.viewport=new xe;const U=new fn;U.layers.enable(2),U.viewport=new xe;const w=[P,U],E=new Ew;E.layers.enable(1),E.layers.enable(2);let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let dt=y[ot];return dt===void 0&&(dt=new Fl,y[ot]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(ot){let dt=y[ot];return dt===void 0&&(dt=new Fl,y[ot]=dt),dt.getGripSpace()},this.getHand=function(ot){let dt=y[ot];return dt===void 0&&(dt=new Fl,y[ot]=dt),dt.getHandSpace()};function H(ot){const dt=b.indexOf(ot.inputSource);if(dt===-1)return;const ut=y[dt];ut!==void 0&&(ut.update(ot.inputSource,ot.frame,u||o),ut.dispatchEvent({type:ot.type,data:ot.inputSource}))}function K(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",rt);for(let ot=0;ot<y.length;ot++){const dt=b[ot];dt!==null&&(b[ot]=null,y[ot].disconnect(dt))}L=null,D=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,M=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ot){u=ot},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",K),s.addEventListener("inputsourceschange",rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ms(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,ut=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?cr:tr,ut=m.stencil?lr:ps);const It={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ms(f.textureWidth,f.textureHeight,{format:Fn,type:xi,depthTexture:new dm(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(ot){for(let dt=0;dt<ot.removed.length;dt++){const ut=ot.removed[dt],mt=b.indexOf(ut);mt>=0&&(b[mt]=null,y[mt].disconnect(ut))}for(let dt=0;dt<ot.added.length;dt++){const ut=ot.added[dt];let mt=b.indexOf(ut);if(mt===-1){for(let Bt=0;Bt<y.length;Bt++)if(Bt>=b.length){b.push(ut),mt=Bt;break}else if(b[Bt]===null){b[Bt]=ut,mt=Bt;break}if(mt===-1)break}const It=y[mt];It&&It.connect(ut)}}const Y=new O,nt=new O;function q(ot,dt,ut){Y.setFromMatrixPosition(dt.matrixWorld),nt.setFromMatrixPosition(ut.matrixWorld);const mt=Y.distanceTo(nt),It=dt.projectionMatrix.elements,Bt=ut.projectionMatrix.elements,Ft=It[14]/(It[10]-1),ee=It[14]/(It[10]+1),v=(It[9]+1)/It[5],N=(It[9]-1)/It[5],X=(It[8]-1)/It[0],V=(Bt[8]+1)/Bt[0],R=Ft*X,B=Ft*V,et=mt/(-X+V),it=et*-X;dt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(it),ot.translateZ(et),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert();const T=Ft+et,x=ee+et,F=R-it,G=B+(mt-it),Z=v*ee/x*T,$=N*ee/x*T;ot.projectionMatrix.makePerspective(F,G,Z,$,T,x),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}function _t(ot,dt){dt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(dt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;_.texture!==null&&(ot.near=_.depthNear,ot.far=_.depthFar),E.near=U.near=P.near=ot.near,E.far=U.far=P.far=ot.far,(L!==E.near||D!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,D=E.far,P.near=L,P.far=D,U.near=L,U.far=D,P.updateProjectionMatrix(),U.updateProjectionMatrix(),ot.updateProjectionMatrix());const dt=ot.parent,ut=E.cameras;_t(E,dt);for(let mt=0;mt<ut.length;mt++)_t(ut[mt],dt);ut.length===2?q(E,P,U):E.projectionMatrix.copy(P.projectionMatrix),vt(ot,E,dt)};function vt(ot,dt,ut){ut===null?ot.matrix.copy(dt.matrixWorld):(ot.matrix.copy(ut.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(dt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(dt.projectionMatrix),ot.projectionMatrixInverse.copy(dt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=ur*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ot){l=ot,f!==null&&(f.fixedFoveation=ot),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ot)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let pt=null;function Lt(ot,dt){if(c=dt.getViewerPose(u||o),g=dt,c!==null){const ut=c.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let mt=!1;ut.length!==E.cameras.length&&(E.cameras.length=0,mt=!0);for(let Bt=0;Bt<ut.length;Bt++){const Ft=ut[Bt];let ee=null;if(p!==null)ee=p.getViewport(Ft);else{const N=h.getViewSubImage(f,Ft);ee=N.viewport,Bt===0&&(t.setRenderTargetTextures(M,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(M))}let v=w[Bt];v===void 0&&(v=new fn,v.layers.enable(Bt),v.viewport=new xe,w[Bt]=v),v.matrix.fromArray(Ft.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.projectionMatrix.fromArray(Ft.projectionMatrix),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.viewport.set(ee.x,ee.y,ee.width,ee.height),Bt===0&&(E.matrix.copy(v.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),mt===!0&&E.cameras.push(v)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Bt=h.getDepthInformation(ut[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let ut=0;ut<y.length;ut++){const mt=b[ut],It=y[ut];mt!==null&&It!==void 0&&It.update(mt,dt,u||o)}pt&&pt(ot,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),g=null}const qt=new fm;qt.setAnimationLoop(Lt),this.setAnimationLoop=function(ot){pt=ot},this.dispose=function(){}}}const Ji=new Hn,Pw=new pe;function Lw(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,am(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),y=M.envMap,b=M.envMapRotation;y&&(m.envMap.value=y,Ji.copy(b),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(Ji)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Iw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function u(M,y){let b=s[M.id];b===void 0&&(g(M),b=c(M),s[M.id]=b,M.addEventListener("dispose",m));const I=y.program;i.updateUBOMapping(M,I);const C=t.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function c(M){const y=h();M.__bindingPointIndex=y;const b=n.createBuffer(),I=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],b=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,P=b.length;C<P;C++){const U=Array.isArray(b[C])?b[C]:[b[C]];for(let w=0,E=U.length;w<E;w++){const L=U[w];if(p(L,C,w,I)===!0){const D=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let rt=0;rt<H.length;rt++){const Y=H[rt],nt=_(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,D+K,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,K),K+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,y,b,I){const C=M.value,P=y+"_"+b;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const U=I[P];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[P]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(M){const y=M.uniforms;let b=0;const I=16;for(let P=0,U=y.length;P<U;P++){const w=Array.isArray(y[P])?y[P]:[y[P]];for(let E=0,L=w.length;E<L;E++){const D=w[E],H=Array.isArray(D.value)?D.value:[D.value];for(let K=0,rt=H.length;K<rt;K++){const Y=H[K],nt=_(Y),q=b%I,_t=q%nt.boundary,vt=q+_t;b+=_t,vt!==0&&I-vt<nt.storage&&(b+=I-vt),D.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=nt.storage}}}const C=b%I;return C>0&&(b+=I-C),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:u,dispose:d}}class Dw{constructor(t={}){const{canvas:e=Ey(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Ni,this.toneMappingExposure=1;const y=this;let b=!1,I=0,C=0,P=null,U=-1,w=null;const E=new xe,L=new xe;let D=null;const H=new Jt(0);let K=0,rt=e.width,Y=e.height,nt=1,q=null,_t=null;const vt=new xe(0,0,rt,Y),pt=new xe(0,0,rt,Y);let Lt=!1;const qt=new Su;let ot=!1,dt=!1;const ut=new pe,mt=new O,It=new xe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ee(){return P===null?nt:1}let v=i;function N(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uu}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",ft,!1),v===null){const k="webgl2";if(v=N(k,A),v===null)throw N(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let X,V,R,B,et,it,T,x,F,G,Z,$,gt,ct,ht,Tt,lt,Mt,Vt,Ot,wt,Ct,Dt,fe;function S(){X=new zb(v),X.init(),Ct=new bw(v,X),V=new Ib(v,X,t,Ct),R=new yw(v),B=new Vb(v),et=new ow,it=new Sw(v,X,R,et,V,Ct,B),T=new Ub(y),x=new Bb(y),F=new Yy(v),Dt=new Pb(v,F),G=new kb(v,F,B,Dt),Z=new Wb(v,G,F,B),Vt=new Gb(v,V,it),Tt=new Db(et),$=new rw(y,T,x,X,V,Dt,Tt),gt=new Lw(y,et),ct=new lw,ht=new pw(X),Mt=new Cb(y,T,x,R,Z,f,l),lt=new xw(y,Z,V),fe=new Iw(v,B,V,R),Ot=new Lb(v,X,B),wt=new Hb(v,X,B),B.programs=$.programs,y.capabilities=V,y.extensions=X,y.properties=et,y.renderLists=ct,y.shadowMap=lt,y.state=R,y.info=B}S();const j=new Cw(y,v);this.xr=j,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=X.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=X.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(rt,Y,!1))},this.getSize=function(A){return A.set(rt,Y)},this.setSize=function(A,k,Q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,Y=k,e.width=Math.floor(A*nt),e.height=Math.floor(k*nt),Q===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(rt*nt,Y*nt).floor()},this.setDrawingBufferSize=function(A,k,Q){rt=A,Y=k,nt=Q,e.width=Math.floor(A*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(vt)},this.setViewport=function(A,k,Q,tt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,k,Q,tt),R.viewport(E.copy(vt).multiplyScalar(nt).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,k,Q,tt){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,k,Q,tt),R.scissor(L.copy(pt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(A){R.setScissorTest(Lt=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(A=!0,k=!0,Q=!0){let tt=0;if(A){let W=!1;if(P!==null){const xt=P.texture.format;W=xt===_u||xt===gu||xt===mu}if(W){const xt=P.texture.type,Et=xt===xi||xt===ps||xt===Qr||xt===lr||xt===fu||xt===du,At=Mt.getClearColor(),Pt=Mt.getClearAlpha(),Gt=At.r,Xt=At.g,zt=At.b;Et?(p[0]=Gt,p[1]=Xt,p[2]=zt,p[3]=Pt,v.clearBufferuiv(v.COLOR,0,p)):(g[0]=Gt,g[1]=Xt,g[2]=zt,g[3]=Pt,v.clearBufferiv(v.COLOR,0,g))}else tt|=v.COLOR_BUFFER_BIT}k&&(tt|=v.DEPTH_BUFFER_BIT),Q&&(tt|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),ct.dispose(),ht.dispose(),et.dispose(),T.dispose(),x.dispose(),Z.dispose(),Dt.dispose(),fe.dispose(),$.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ae),j.removeEventListener("sessionend",Mi),ke.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=B.autoReset,k=lt.enabled,Q=lt.autoUpdate,tt=lt.needsUpdate,W=lt.type;S(),B.autoReset=A,lt.enabled=k,lt.autoUpdate=Q,lt.needsUpdate=tt,lt.type=W}function ft(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ut(A){const k=A.target;k.removeEventListener("dispose",Ut),Wt(k)}function Wt(A){we(A),et.remove(A)}function we(A){const k=et.get(A).programs;k!==void 0&&(k.forEach(function(Q){$.releaseProgram(Q)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Q,tt,W,xt){k===null&&(k=Bt);const Et=W.isMesh&&W.matrixWorld.determinant()<0,At=bm(A,k,Q,tt,W);R.setMaterial(tt,Et);let Pt=Q.index,Gt=1;if(tt.wireframe===!0){if(Pt=G.getWireframeAttribute(Q),Pt===void 0)return;Gt=2}const Xt=Q.drawRange,zt=Q.attributes.position;let ie=Xt.start*Gt,be=(Xt.start+Xt.count)*Gt;xt!==null&&(ie=Math.max(ie,xt.start*Gt),be=Math.min(be,(xt.start+xt.count)*Gt)),Pt!==null?(ie=Math.max(ie,0),be=Math.min(be,Pt.count)):zt!=null&&(ie=Math.max(ie,0),be=Math.min(be,zt.count));const Ee=be-ie;if(Ee<0||Ee===1/0)return;Dt.setup(W,tt,At,Q,Pt);let gn,se=Ot;if(Pt!==null&&(gn=F.get(Pt),se=wt,se.setIndex(gn)),W.isMesh)tt.wireframe===!0?(R.setLineWidth(tt.wireframeLinewidth*ee()),se.setMode(v.LINES)):se.setMode(v.TRIANGLES);else if(W.isLine){let Nt=tt.linewidth;Nt===void 0&&(Nt=1),R.setLineWidth(Nt*ee()),W.isLineSegments?se.setMode(v.LINES):W.isLineLoop?se.setMode(v.LINE_LOOP):se.setMode(v.LINE_STRIP)}else W.isPoints?se.setMode(v.POINTS):W.isSprite&&se.setMode(v.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)se.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Nt=W._multiDrawStarts,He=W._multiDrawCounts,re=W._multiDrawCount,Pn=Pt?F.get(Pt).bytesPerElement:1,Ms=et.get(tt).currentProgram.getUniforms();for(let _n=0;_n<re;_n++)Ms.setValue(v,"_gl_DrawID",_n),se.render(Nt[_n]/Pn,He[_n])}else if(W.isInstancedMesh)se.renderInstances(ie,Ee,W.count);else if(Q.isInstancedBufferGeometry){const Nt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,He=Math.min(Q.instanceCount,Nt);se.renderInstances(ie,Ee,He)}else se.render(ie,Ee)};function Ie(A,k,Q){A.transparent===!0&&A.side===Ue&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,fo(A,k,Q),A.side=Fi,A.needsUpdate=!0,fo(A,k,Q),A.side=Ue):fo(A,k,Q)}this.compile=function(A,k,Q=null){Q===null&&(Q=A),m=ht.get(Q),m.init(k),M.push(m),Q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==Q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const tt=new Set;return A.traverse(function(W){const xt=W.material;if(xt)if(Array.isArray(xt))for(let Et=0;Et<xt.length;Et++){const At=xt[Et];Ie(At,Q,W),tt.add(At)}else Ie(xt,Q,W),tt.add(xt)}),M.pop(),m=null,tt},this.compileAsync=function(A,k,Q=null){const tt=this.compile(A,k,Q);return new Promise(W=>{function xt(){if(tt.forEach(function(Et){et.get(Et).currentProgram.isReady()&&tt.delete(Et)}),tt.size===0){W(A);return}setTimeout(xt,10)}X.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Qt=null;function De(A){Qt&&Qt(A)}function Ae(){ke.stop()}function Mi(){ke.start()}const ke=new fm;ke.setAnimationLoop(De),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(A){Qt=A,j.setAnimationLoop(A),A===null?ke.stop():ke.start()},j.addEventListener("sessionstart",Ae),j.addEventListener("sessionend",Mi),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,k,P),m=ht.get(A,M.length),m.init(k),M.push(m),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),qt.setFromProjectionMatrix(ut),dt=this.localClippingEnabled,ot=Tt.init(this.clippingPlanes,dt),_=ct.get(A,d.length),_.init(),d.push(_),j.enabled===!0&&j.isPresenting===!0){const xt=y.xr.getDepthSensingMesh();xt!==null&&Qn(xt,k,-1/0,y.sortObjects)}Qn(A,k,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(q,_t),Ft=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ft&&Mt.addToRenderList(_,A),this.info.render.frame++,ot===!0&&Tt.beginShadows();const Q=m.state.shadowsArray;lt.render(Q,A,k),ot===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=_.opaque,W=_.transmissive;if(m.setupLights(),k.isArrayCamera){const xt=k.cameras;if(W.length>0)for(let Et=0,At=xt.length;Et<At;Et++){const Pt=xt[Et];gr(tt,W,A,Pt)}Ft&&Mt.render(A);for(let Et=0,At=xt.length;Et<At;Et++){const Pt=xt[Et];ki(_,A,Pt,Pt.viewport)}}else W.length>0&&gr(tt,W,A,k),Ft&&Mt.render(A),ki(_,A,k);P!==null&&(it.updateMultisampleRenderTarget(P),it.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(y,A,k),Dt.resetDefaultState(),U=-1,w=null,M.pop(),M.length>0?(m=M[M.length-1],ot===!0&&Tt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Qn(A,k,Q,tt){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||qt.intersectsSprite(A)){tt&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const Et=Z.update(A),At=A.material;At.visible&&_.push(A,Et,At,Q,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||qt.intersectsObject(A))){const Et=Z.update(A),At=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),It.copy(Et.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(At)){const Pt=Et.groups;for(let Gt=0,Xt=Pt.length;Gt<Xt;Gt++){const zt=Pt[Gt],ie=At[zt.materialIndex];ie&&ie.visible&&_.push(A,Et,ie,Q,It.z,zt)}}else At.visible&&_.push(A,Et,At,Q,It.z,null)}}const xt=A.children;for(let Et=0,At=xt.length;Et<At;Et++)Qn(xt[Et],k,Q,tt)}function ki(A,k,Q,tt){const W=A.opaque,xt=A.transmissive,Et=A.transparent;m.setupLightsView(Q),ot===!0&&Tt.setGlobalState(y.clippingPlanes,Q),tt&&R.viewport(E.copy(tt)),W.length>0&&ho(W,k,Q),xt.length>0&&ho(xt,k,Q),Et.length>0&&ho(Et,k,Q),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function gr(A,k,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[tt.id]===void 0&&(m.state.transmissionRenderTarget[tt.id]=new ms(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?co:xi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const xt=m.state.transmissionRenderTarget[tt.id],Et=tt.viewport||E;xt.setSize(Et.z,Et.w);const At=y.getRenderTarget();y.setRenderTarget(xt),y.getClearColor(H),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Ft&&Mt.render(Q);const Pt=y.toneMapping;y.toneMapping=Ni;const Gt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),m.setupLightsView(tt),ot===!0&&Tt.setGlobalState(y.clippingPlanes,tt),ho(A,Q,tt),it.updateMultisampleRenderTarget(xt),it.updateRenderTargetMipmap(xt),X.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let zt=0,ie=k.length;zt<ie;zt++){const be=k[zt],Ee=be.object,gn=be.geometry,se=be.material,Nt=be.group;if(se.side===Ue&&Ee.layers.test(tt.layers)){const He=se.side;se.side=cn,se.needsUpdate=!0,Pu(Ee,Q,tt,gn,se,Nt),se.side=He,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(it.updateMultisampleRenderTarget(xt),it.updateRenderTargetMipmap(xt))}y.setRenderTarget(At),y.setClearColor(H,K),Gt!==void 0&&(tt.viewport=Gt),y.toneMapping=Pt}function ho(A,k,Q){const tt=k.isScene===!0?k.overrideMaterial:null;for(let W=0,xt=A.length;W<xt;W++){const Et=A[W],At=Et.object,Pt=Et.geometry,Gt=tt===null?Et.material:tt,Xt=Et.group;At.layers.test(Q.layers)&&Pu(At,k,Q,Pt,Gt,Xt)}}function Pu(A,k,Q,tt,W,xt){A.onBeforeRender(y,k,Q,tt,W,xt),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.transparent===!0&&W.side===Ue&&W.forceSinglePass===!1?(W.side=cn,W.needsUpdate=!0,y.renderBufferDirect(Q,k,tt,W,A,xt),W.side=Fi,W.needsUpdate=!0,y.renderBufferDirect(Q,k,tt,W,A,xt),W.side=Ue):y.renderBufferDirect(Q,k,tt,W,A,xt),A.onAfterRender(y,k,Q,tt,W,xt)}function fo(A,k,Q){k.isScene!==!0&&(k=Bt);const tt=et.get(A),W=m.state.lights,xt=m.state.shadowsArray,Et=W.state.version,At=$.getParameters(A,W.state,xt,k,Q),Pt=$.getProgramCacheKey(At);let Gt=tt.programs;tt.environment=A.isMeshStandardMaterial?k.environment:null,tt.fog=k.fog,tt.envMap=(A.isMeshStandardMaterial?x:T).get(A.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",Ut),Gt=new Map,tt.programs=Gt);let Xt=Gt.get(Pt);if(Xt!==void 0){if(tt.currentProgram===Xt&&tt.lightsStateVersion===Et)return Iu(A,At),Xt}else At.uniforms=$.getUniforms(A),A.onBeforeCompile(At,y),Xt=$.acquireProgram(At,Pt),Gt.set(Pt,Xt),tt.uniforms=At.uniforms;const zt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=Tt.uniform),Iu(A,At),tt.needsLights=wm(A),tt.lightsStateVersion=Et,tt.needsLights&&(zt.ambientLightColor.value=W.state.ambient,zt.lightProbe.value=W.state.probe,zt.directionalLights.value=W.state.directional,zt.directionalLightShadows.value=W.state.directionalShadow,zt.spotLights.value=W.state.spot,zt.spotLightShadows.value=W.state.spotShadow,zt.rectAreaLights.value=W.state.rectArea,zt.ltc_1.value=W.state.rectAreaLTC1,zt.ltc_2.value=W.state.rectAreaLTC2,zt.pointLights.value=W.state.point,zt.pointLightShadows.value=W.state.pointShadow,zt.hemisphereLights.value=W.state.hemi,zt.directionalShadowMap.value=W.state.directionalShadowMap,zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,zt.spotShadowMap.value=W.state.spotShadowMap,zt.spotLightMatrix.value=W.state.spotLightMatrix,zt.spotLightMap.value=W.state.spotLightMap,zt.pointShadowMap.value=W.state.pointShadowMap,zt.pointShadowMatrix.value=W.state.pointShadowMatrix),tt.currentProgram=Xt,tt.uniformsList=null,Xt}function Lu(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=sa.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Iu(A,k){const Q=et.get(A);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function bm(A,k,Q,tt,W){k.isScene!==!0&&(k=Bt),it.resetTextureUnits();const xt=k.fog,Et=tt.isMeshStandardMaterial?k.environment:null,At=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:zi,Pt=(tt.isMeshStandardMaterial?x:T).get(tt.envMap||Et),Gt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),zt=!!Q.morphAttributes.position,ie=!!Q.morphAttributes.normal,be=!!Q.morphAttributes.color;let Ee=Ni;tt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ee=y.toneMapping);const gn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,se=gn!==void 0?gn.length:0,Nt=et.get(tt),He=m.state.lights;if(ot===!0&&(dt===!0||A!==w)){const Mn=A===w&&tt.id===U;Tt.setState(tt,A,Mn)}let re=!1;tt.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==He.state.version||Nt.outputColorSpace!==At||W.isBatchedMesh&&Nt.batching===!1||!W.isBatchedMesh&&Nt.batching===!0||W.isBatchedMesh&&Nt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Nt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Nt.instancing===!1||!W.isInstancedMesh&&Nt.instancing===!0||W.isSkinnedMesh&&Nt.skinning===!1||!W.isSkinnedMesh&&Nt.skinning===!0||W.isInstancedMesh&&Nt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Nt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Nt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Nt.instancingMorph===!1&&W.morphTexture!==null||Nt.envMap!==Pt||tt.fog===!0&&Nt.fog!==xt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Tt.numPlanes||Nt.numIntersection!==Tt.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==Xt||Nt.morphTargets!==zt||Nt.morphNormals!==ie||Nt.morphColors!==be||Nt.toneMapping!==Ee||Nt.morphTargetsCount!==se)&&(re=!0):(re=!0,Nt.__version=tt.version);let Pn=Nt.currentProgram;re===!0&&(Pn=fo(tt,k,W));let Ms=!1,_n=!1,Wa=!1;const Re=Pn.getUniforms(),Si=Nt.uniforms;if(R.useProgram(Pn.program)&&(Ms=!0,_n=!0,Wa=!0),tt.id!==U&&(U=tt.id,_n=!0),Ms||w!==A){Re.setValue(v,"projectionMatrix",A.projectionMatrix),Re.setValue(v,"viewMatrix",A.matrixWorldInverse);const Mn=Re.map.cameraPosition;Mn!==void 0&&Mn.setValue(v,mt.setFromMatrixPosition(A.matrixWorld)),V.logarithmicDepthBuffer&&Re.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Re.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,_n=!0,Wa=!0)}if(W.isSkinnedMesh){Re.setOptional(v,W,"bindMatrix"),Re.setOptional(v,W,"bindMatrixInverse");const Mn=W.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Re.setValue(v,"boneTexture",Mn.boneTexture,it))}W.isBatchedMesh&&(Re.setOptional(v,W,"batchingTexture"),Re.setValue(v,"batchingTexture",W._matricesTexture,it),Re.setOptional(v,W,"batchingIdTexture"),Re.setValue(v,"batchingIdTexture",W._indirectTexture,it),Re.setOptional(v,W,"batchingColorTexture"),W._colorsTexture!==null&&Re.setValue(v,"batchingColorTexture",W._colorsTexture,it));const Xa=Q.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0)&&Vt.update(W,Q,Pn),(_n||Nt.receiveShadow!==W.receiveShadow)&&(Nt.receiveShadow=W.receiveShadow,Re.setValue(v,"receiveShadow",W.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Si.envMap.value=Pt,Si.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&k.environment!==null&&(Si.envMapIntensity.value=k.environmentIntensity),_n&&(Re.setValue(v,"toneMappingExposure",y.toneMappingExposure),Nt.needsLights&&Em(Si,Wa),xt&&tt.fog===!0&&gt.refreshFogUniforms(Si,xt),gt.refreshMaterialUniforms(Si,tt,nt,Y,m.state.transmissionRenderTarget[A.id]),sa.upload(v,Lu(Nt),Si,it)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(sa.upload(v,Lu(Nt),Si,it),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Re.setValue(v,"center",W.center),Re.setValue(v,"modelViewMatrix",W.modelViewMatrix),Re.setValue(v,"normalMatrix",W.normalMatrix),Re.setValue(v,"modelMatrix",W.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Mn=tt.uniformsGroups;for(let qa=0,Tm=Mn.length;qa<Tm;qa++){const Du=Mn[qa];fe.update(Du,Pn),fe.bind(Du,Pn)}}return Pn}function Em(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function wm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,Q){et.get(A.texture).__webglTexture=k,et.get(A.depthTexture).__webglTexture=Q;const tt=et.get(A);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const Q=et.get(A);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Q=0){P=A,I=k,C=Q;let tt=!0,W=null,xt=!1,Et=!1;if(A){const Pt=et.get(A);Pt.__useDefaultFramebuffer!==void 0?(R.bindFramebuffer(v.FRAMEBUFFER,null),tt=!1):Pt.__webglFramebuffer===void 0?it.setupRenderTarget(A):Pt.__hasExternalTextures&&it.rebindTextures(A,et.get(A.texture).__webglTexture,et.get(A.depthTexture).__webglTexture);const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);const Xt=et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?W=Xt[k][Q]:W=Xt[k],xt=!0):A.samples>0&&it.useMultisampledRTT(A)===!1?W=et.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?W=Xt[Q]:W=Xt,E.copy(A.viewport),L.copy(A.scissor),D=A.scissorTest}else E.copy(vt).multiplyScalar(nt).floor(),L.copy(pt).multiplyScalar(nt).floor(),D=Lt;if(R.bindFramebuffer(v.FRAMEBUFFER,W)&&tt&&R.drawBuffers(A,W),R.viewport(E),R.scissor(L),R.setScissorTest(D),xt){const Pt=et.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,Q)}else if(Et){const Pt=et.get(A.texture),Gt=k||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Pt.__webglTexture,Q||0,Gt)}U=-1},this.readRenderTargetPixels=function(A,k,Q,tt,W,xt,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){R.bindFramebuffer(v.FRAMEBUFFER,At);try{const Pt=A.texture,Gt=Pt.format,Xt=Pt.type;if(!V.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-tt&&Q>=0&&Q<=A.height-W&&v.readPixels(k,Q,tt,W,Ct.convert(Gt),Ct.convert(Xt),xt)}finally{const Pt=P!==null?et.get(P).__webglFramebuffer:null;R.bindFramebuffer(v.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,k,Q,tt,W,xt,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){R.bindFramebuffer(v.FRAMEBUFFER,At);try{const Pt=A.texture,Gt=Pt.format,Xt=Pt.type;if(!V.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-tt&&Q>=0&&Q<=A.height-W){const zt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,zt),v.bufferData(v.PIXEL_PACK_BUFFER,xt.byteLength,v.STREAM_READ),v.readPixels(k,Q,tt,W,Ct.convert(Gt),Ct.convert(Xt),0),v.flush();const ie=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);await wy(v,ie,4);try{v.bindBuffer(v.PIXEL_PACK_BUFFER,zt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,xt)}finally{v.deleteBuffer(zt),v.deleteSync(ie)}return xt}}finally{const Pt=P!==null?et.get(P).__webglFramebuffer:null;R.bindFramebuffer(v.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(A,k=null,Q=0){A.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const tt=Math.pow(2,-Q),W=Math.floor(A.image.width*tt),xt=Math.floor(A.image.height*tt),Et=k!==null?k.x:0,At=k!==null?k.y:0;it.setTexture2D(A,0),v.copyTexSubImage2D(v.TEXTURE_2D,Q,0,0,Et,At,W,xt),R.unbindTexture()},this.copyTextureToTexture=function(A,k,Q=null,tt=null,W=0){A.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,A=arguments[1],k=arguments[2],W=arguments[3]||0,Q=null);let xt,Et,At,Pt,Gt,Xt;Q!==null?(xt=Q.max.x-Q.min.x,Et=Q.max.y-Q.min.y,At=Q.min.x,Pt=Q.min.y):(xt=A.image.width,Et=A.image.height,At=0,Pt=0),tt!==null?(Gt=tt.x,Xt=tt.y):(Gt=0,Xt=0);const zt=Ct.convert(k.format),ie=Ct.convert(k.type);it.setTexture2D(k,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,k.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,k.unpackAlignment);const be=v.getParameter(v.UNPACK_ROW_LENGTH),Ee=v.getParameter(v.UNPACK_IMAGE_HEIGHT),gn=v.getParameter(v.UNPACK_SKIP_PIXELS),se=v.getParameter(v.UNPACK_SKIP_ROWS),Nt=v.getParameter(v.UNPACK_SKIP_IMAGES),He=A.isCompressedTexture?A.mipmaps[W]:A.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,He.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,He.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,At),v.pixelStorei(v.UNPACK_SKIP_ROWS,Pt),A.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,W,Gt,Xt,xt,Et,zt,ie,He.data):A.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,W,Gt,Xt,He.width,He.height,zt,He.data):v.texSubImage2D(v.TEXTURE_2D,W,Gt,Xt,xt,Et,zt,ie,He),v.pixelStorei(v.UNPACK_ROW_LENGTH,be),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Ee),v.pixelStorei(v.UNPACK_SKIP_PIXELS,gn),v.pixelStorei(v.UNPACK_SKIP_ROWS,se),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Nt),W===0&&k.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),R.unbindTexture()},this.copyTextureToTexture3D=function(A,k,Q=null,tt=null,W=0){A.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,A=arguments[2],k=arguments[3],W=arguments[4]||0);let xt,Et,At,Pt,Gt,Xt,zt,ie,be;const Ee=A.isCompressedTexture?A.mipmaps[W]:A.image;Q!==null?(xt=Q.max.x-Q.min.x,Et=Q.max.y-Q.min.y,At=Q.max.z-Q.min.z,Pt=Q.min.x,Gt=Q.min.y,Xt=Q.min.z):(xt=Ee.width,Et=Ee.height,At=Ee.depth,Pt=0,Gt=0,Xt=0),tt!==null?(zt=tt.x,ie=tt.y,be=tt.z):(zt=0,ie=0,be=0);const gn=Ct.convert(k.format),se=Ct.convert(k.type);let Nt;if(k.isData3DTexture)it.setTexture3D(k,0),Nt=v.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)it.setTexture2DArray(k,0),Nt=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,k.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,k.unpackAlignment);const He=v.getParameter(v.UNPACK_ROW_LENGTH),re=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Pn=v.getParameter(v.UNPACK_SKIP_PIXELS),Ms=v.getParameter(v.UNPACK_SKIP_ROWS),_n=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Ee.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Ee.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Pt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Gt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Xt),A.isDataTexture||A.isData3DTexture?v.texSubImage3D(Nt,W,zt,ie,be,xt,Et,At,gn,se,Ee.data):k.isCompressedArrayTexture?v.compressedTexSubImage3D(Nt,W,zt,ie,be,xt,Et,At,gn,Ee.data):v.texSubImage3D(Nt,W,zt,ie,be,xt,Et,At,gn,se,Ee),v.pixelStorei(v.UNPACK_ROW_LENGTH,He),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,re),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Pn),v.pixelStorei(v.UNPACK_SKIP_ROWS,Ms),v.pixelStorei(v.UNPACK_SKIP_IMAGES,_n),W===0&&k.generateMipmaps&&v.generateMipmap(Nt),R.unbindTexture()},this.initRenderTarget=function(A){et.get(A).__webglFramebuffer===void 0&&it.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?it.setTextureCube(A,0):A.isData3DTexture?it.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?it.setTexture2DArray(A,0):it.setTexture2D(A,0),R.unbindTexture()},this.resetState=function(){I=0,C=0,P=null,R.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vu?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===za?"display-p3":"srgb"}}let Uw=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class Nw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return er("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qe=new O;class Sa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ha extends pr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const Tr=new O,Vs=new O,Gs=new O,Ws=new Rt,Ar=new Rt,vm=new pe,Ho=new O,Rr=new O,Vo=new O,Uf=new Rt,Bl=new Rt,Nf=new Rt;class Eu extends Le{constructor(t=new Ha){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new mn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nw(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Sa(i,3,0,!1)),Hs.setAttribute("uv",new Sa(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),vm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Gs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Go(Ho.set(-.5,-.5,0),Gs,o,Vs,s,r),Go(Rr.set(.5,-.5,0),Gs,o,Vs,s,r),Go(Vo.set(.5,.5,0),Gs,o,Vs,s,r),Uf.set(0,0),Bl.set(1,0),Nf.set(1,1);let a=t.ray.intersectTriangle(Ho,Rr,Vo,!1,Tr);if(a===null&&(Go(Rr.set(-.5,.5,0),Gs,o,Vs,s,r),Bl.set(0,1),a=t.ray.intersectTriangle(Ho,Vo,Rr,!1,Tr),a===null))return;const l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:On.getInterpolation(Tr,Ho,Rr,Vo,Uf,Bl,Nf,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Go(n,t,e,i,s,r){Ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ar.x=r*Ws.x-s*Ws.y,Ar.y=s*Ws.x+r*Ws.y):Ar.copy(Ws),n.copy(t),n.x+=Ar.x,n.y+=Ar.y,n.applyMatrix4(vm)}class Ow extends Xe{constructor(t=null,e=1,i=1,s,r,o,a,l,u=dn,c=dn,h,f){super(null,o,a,l,u,c,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Of extends An{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xs=new pe,Ff=new pe,Wo=[],Bf=new xs,Fw=new pe,Cr=new at,Pr=new uo;class xm extends at{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Of(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fw)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),Bf.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Bf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new uo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),Pr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(i),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Ff.multiplyMatrices(i,Xs),Cr.matrixWorld=Ff,Cr.raycast(t,Wo);for(let o=0,a=Wo.length;o<a;o++){const l=Wo[o];l.instanceId=r,l.object=this,e.push(l)}Wo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Of(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ow(new Float32Array(s*this.count),s,this.count,pu,$n));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jn extends Xe{constructor(t,e,i,s,r,o,a,l,u){super(t,e,i,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Va extends mn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],u=new O,c=new Rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=i+h/e*s;u.x=t*Math.cos(p),u.y=t*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[f]/t+1)/2,c.y=(o[f+1]/t+1)/2,l.push(c.x,c.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends mn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(p,2));function M(){const b=new O,I=new O;let C=0;const P=(e-t)/i;for(let U=0;U<=r;U++){const w=[],E=U/r,L=E*(e-t)+t;for(let D=0;D<=s;D++){const H=D/s,K=H*l+a,rt=Math.sin(K),Y=Math.cos(K);I.x=L*rt,I.y=-E*i+m,I.z=L*Y,h.push(I.x,I.y,I.z),b.set(rt,P,Y).normalize(),f.push(b.x,b.y,b.z),p.push(H,1-E),w.push(g++)}_.push(w)}for(let U=0;U<s;U++)for(let w=0;w<r;w++){const E=_[w][U],L=_[w+1][U],D=_[w+1][U+1],H=_[w][U+1];c.push(E,L,H),c.push(L,D,H),C+=6}u.addGroup(d,C,0),d+=C}function y(b){const I=g,C=new Rt,P=new O;let U=0;const w=b===!0?t:e,E=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;const L=g;for(let D=0;D<=s;D++){const K=D/s*l+a,rt=Math.cos(K),Y=Math.sin(K);P.x=w*Y,P.y=m*E,P.z=w*rt,h.push(P.x,P.y,P.z),f.push(0,E,0),C.x=rt*.5+.5,C.y=Y*.5*E+.5,p.push(C.x,C.y),g++}for(let D=0;D<s;D++){const H=I+D,K=L+D;b===!0?c.push(K,K+1,H):c.push(K+1,K,H),U+=3}u.addGroup(d,U,b===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends jt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new eo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wu extends mn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),u(i),c(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new O,b=new O,I=new O;for(let C=0;C<e.length;C+=3)p(e[C+0],y),p(e[C+1],b),p(e[C+2],I),l(y,b,I,M)}function l(M,y,b,I){const C=I+1,P=[];for(let U=0;U<=C;U++){P[U]=[];const w=M.clone().lerp(b,U/C),E=y.clone().lerp(b,U/C),L=C-U;for(let D=0;D<=L;D++)D===0&&U===C?P[U][D]=w:P[U][D]=w.clone().lerp(E,D/L)}for(let U=0;U<C;U++)for(let w=0;w<2*(C-U)-1;w++){const E=Math.floor(w/2);w%2===0?(f(P[U][E+1]),f(P[U+1][E]),f(P[U][E])):(f(P[U][E+1]),f(P[U+1][E+1]),f(P[U+1][E]))}}function u(M){const y=new O;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(M),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function c(){const M=new O;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const b=m(M)/2/Math.PI+.5,I=d(M)/Math.PI+.5;o.push(b,1-I)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],b=o[M+2],I=o[M+4],C=Math.max(y,b,I),P=Math.min(y,b,I);C>.9&&P<.1&&(y<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,y){const b=M*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){const M=new O,y=new O,b=new O,I=new O,C=new Rt,P=new Rt,U=new Rt;for(let w=0,E=0;w<r.length;w+=9,E+=6){M.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),C.set(o[E+0],o[E+1]),P.set(o[E+2],o[E+3]),U.set(o[E+4],o[E+5]),I.copy(M).add(y).add(b).divideScalar(3);const L=m(I);_(C,E+0,M,L),_(P,E+2,y,L),_(U,E+4,b,L)}}function _(M,y,b,I){I<0&&M.x===1&&(o[y]=M.x-1),b.x===0&&b.z===0&&(o[y]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wu(t.vertices,t.indices,t.radius,t.details)}}class Tu extends mn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],u=[],c=[];let h=t;const f=(e-t)/s,p=new O,g=new Rt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const d=r+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,c.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let d=0;d<i;d++){const M=d+m,y=M,b=M+i+1,I=M+i+2,C=M+1;a.push(y,b,C),a.push(b,I,C)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ln extends mn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new O,f=new O,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const M=[],y=d/i;let b=0;d===0&&o===0?b=.5/e:d===i&&l===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){const C=I/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(C+b,1-y),M.push(u++)}c.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){const y=c[d][M+1],b=c[d][M],I=c[d+1][M],C=c[d+1][M+1];(d!==0||o>0)&&p.push(y,b,C),(d!==i-1||l<Math.PI)&&p.push(b,I,C)}this.setIndex(p),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Au extends wu{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Au(t.radius,t.detail)}}class ys extends mn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],u=[],c=new O,h=new O,f=new O;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),f.subVectors(h,c).normalize(),l.push(f.x,f.y,f.z),u.push(g/s),u.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(_,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kt extends pr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jp,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ba extends kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const zf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Bw{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const zw=new Bw;class Ru{constructor(t){this.manager=t!==void 0?t:zw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ru.DEFAULT_MATERIAL_NAME="__DEFAULT";class kw extends Ru{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=zf.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=to("img");function l(){c(),zf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(h){c(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Hw extends Ru{constructor(t){super(t)}load(t,e,i,s){const r=new Xe,o=new kw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Cu extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const zl=new pe,kf=new O,Hf=new O;class ym{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Su,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;kf.setFromMatrixPosition(t.matrixWorld),e.position.copy(kf),Hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hf),e.updateMatrixWorld(),zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vw extends ym{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ur*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Mm extends Cu{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vw}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Vf=new pe,Lr=new O,kl=new O;class Gw extends ym{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lr),kl.copy(i.position),kl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Vf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vf)}}class Yn extends Cu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Gw}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ww extends Cu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gf(){return(typeof performance>"u"?Date:performance).now()}const Wf=new pe;class Xw{constructor(t,e,i=0,s=1/0){this.ray=new yu(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(t,e=!0,i=[]){return Bc(t,this,i,e),i.sort(Xf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Bc(t[s],this,i,e);return i.sort(Xf),i}}function Xf(n,t){return n.distance-t.distance}function Bc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Bc(r[o],t,e,!0)}}class qf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uu);class qw extends EventTarget{constructor(t){super(),this.container=t,this.width=0,this.height=0,this.pixelRatio=1,this.update(),window.addEventListener("resize",()=>{this.update(),this.dispatchEvent(new Event("resize"))})}update(){this.width=this.container.clientWidth,this.height=this.container.clientHeight;const t=this.width<=768?1.35:1.5;this.pixelRatio=Math.min(window.devicePixelRatio,t)}}class jw{constructor(){this.instance=new Uw,this.instance.background=new Jt("#0a0a12")}}const jf={type:"change"},Hl={type:"start"},Yf={type:"end"},Xo=new yu,$f=new Ii,Yw=Math.cos(70*Pe.DEG2RAD);class $w extends vs{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",ht),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ht),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(jf),i.update(),r=s.NONE},this.update=(function(){const S=new O,j=new gs().setFromUnitVectors(t.up,new O(0,1,0)),J=j.clone().invert(),st=new O,ft=new gs,Ut=new O,Wt=2*Math.PI;return function(Ie=null){const Qt=i.object.position;S.copy(Qt).sub(i.target),S.applyQuaternion(j),a.setFromVector3(S),i.autoRotate&&r===s.NONE&&D(E(Ie)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let De=i.minAzimuthAngle,Ae=i.maxAzimuthAngle;isFinite(De)&&isFinite(Ae)&&(De<-Math.PI?De+=Wt:De>Math.PI&&(De-=Wt),Ae<-Math.PI?Ae+=Wt:Ae>Math.PI&&(Ae-=Wt),De<=Ae?a.theta=Math.max(De,Math.min(Ae,a.theta)):a.theta=a.theta>(De+Ae)/2?Math.max(De,a.theta):Math.min(Ae,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Mi=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)a.radius=vt(a.radius);else{const ke=a.radius;a.radius=vt(a.radius*u),Mi=ke!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(J),Qt.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&C){let ke=null;if(i.object.isPerspectiveCamera){const Qn=S.length();ke=vt(Qn*u);const ki=Qn-ke;i.object.position.addScaledVector(b,ki),i.object.updateMatrixWorld(),Mi=!!ki}else if(i.object.isOrthographicCamera){const Qn=new O(I.x,I.y,0);Qn.unproject(i.object);const ki=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Mi=ki!==i.object.zoom;const gr=new O(I.x,I.y,0);gr.unproject(i.object),i.object.position.sub(gr).add(Qn),i.object.updateMatrixWorld(),ke=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ke).add(i.object.position):(Xo.origin.copy(i.object.position),Xo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Xo.direction))<Yw?t.lookAt(i.target):($f.setFromNormalAndCoplanarPoint(i.object.up,i.target),Xo.intersectPlane($f,i.target))))}else if(i.object.isOrthographicCamera){const ke=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),ke!==i.object.zoom&&(i.object.updateProjectionMatrix(),Mi=!0)}return u=1,C=!1,Mi||st.distanceToSquared(i.object.position)>o||8*(1-ft.dot(i.object.quaternion))>o||Ut.distanceToSquared(i.target)>o?(i.dispatchEvent(jf),st.copy(i.object.position),ft.copy(i.object.quaternion),Ut.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Mt),i.domElement.removeEventListener("pointerdown",it),i.domElement.removeEventListener("pointercancel",x),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",x),i.domElement.getRootNode().removeEventListener("keydown",gt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ht),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new qf,l=new qf;let u=1;const c=new O,h=new Rt,f=new Rt,p=new Rt,g=new Rt,_=new Rt,m=new Rt,d=new Rt,M=new Rt,y=new Rt,b=new O,I=new Rt;let C=!1;const P=[],U={};let w=!1;function E(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function L(S){const j=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*j)}function D(S){l.theta-=S}function H(S){l.phi-=S}const K=(function(){const S=new O;return function(J,st){S.setFromMatrixColumn(st,0),S.multiplyScalar(-J),c.add(S)}})(),rt=(function(){const S=new O;return function(J,st){i.screenSpacePanning===!0?S.setFromMatrixColumn(st,1):(S.setFromMatrixColumn(st,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(J),c.add(S)}})(),Y=(function(){const S=new O;return function(J,st){const ft=i.domElement;if(i.object.isPerspectiveCamera){const Ut=i.object.position;S.copy(Ut).sub(i.target);let Wt=S.length();Wt*=Math.tan(i.object.fov/2*Math.PI/180),K(2*J*Wt/ft.clientHeight,i.object.matrix),rt(2*st*Wt/ft.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(K(J*(i.object.right-i.object.left)/i.object.zoom/ft.clientWidth,i.object.matrix),rt(st*(i.object.top-i.object.bottom)/i.object.zoom/ft.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function nt(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function _t(S,j){if(!i.zoomToCursor)return;C=!0;const J=i.domElement.getBoundingClientRect(),st=S-J.left,ft=j-J.top,Ut=J.width,Wt=J.height;I.x=st/Ut*2-1,I.y=-(ft/Wt)*2+1,b.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function vt(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function pt(S){h.set(S.clientX,S.clientY)}function Lt(S){_t(S.clientX,S.clientX),d.set(S.clientX,S.clientY)}function qt(S){g.set(S.clientX,S.clientY)}function ot(S){f.set(S.clientX,S.clientY),p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;D(2*Math.PI*p.x/j.clientHeight),H(2*Math.PI*p.y/j.clientHeight),h.copy(f),i.update()}function dt(S){M.set(S.clientX,S.clientY),y.subVectors(M,d),y.y>0?nt(L(y.y)):y.y<0&&q(L(y.y)),d.copy(M),i.update()}function ut(S){_.set(S.clientX,S.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),Y(m.x,m.y),g.copy(_),i.update()}function mt(S){_t(S.clientX,S.clientY),S.deltaY<0?q(L(S.deltaY)):S.deltaY>0&&nt(L(S.deltaY)),i.update()}function It(S){let j=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),j=!0;break}j&&(S.preventDefault(),i.update())}function Bt(S){if(P.length===1)h.set(S.pageX,S.pageY);else{const j=Dt(S),J=.5*(S.pageX+j.x),st=.5*(S.pageY+j.y);h.set(J,st)}}function Ft(S){if(P.length===1)g.set(S.pageX,S.pageY);else{const j=Dt(S),J=.5*(S.pageX+j.x),st=.5*(S.pageY+j.y);g.set(J,st)}}function ee(S){const j=Dt(S),J=S.pageX-j.x,st=S.pageY-j.y,ft=Math.sqrt(J*J+st*st);d.set(0,ft)}function v(S){i.enableZoom&&ee(S),i.enablePan&&Ft(S)}function N(S){i.enableZoom&&ee(S),i.enableRotate&&Bt(S)}function X(S){if(P.length==1)f.set(S.pageX,S.pageY);else{const J=Dt(S),st=.5*(S.pageX+J.x),ft=.5*(S.pageY+J.y);f.set(st,ft)}p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;D(2*Math.PI*p.x/j.clientHeight),H(2*Math.PI*p.y/j.clientHeight),h.copy(f)}function V(S){if(P.length===1)_.set(S.pageX,S.pageY);else{const j=Dt(S),J=.5*(S.pageX+j.x),st=.5*(S.pageY+j.y);_.set(J,st)}m.subVectors(_,g).multiplyScalar(i.panSpeed),Y(m.x,m.y),g.copy(_)}function R(S){const j=Dt(S),J=S.pageX-j.x,st=S.pageY-j.y,ft=Math.sqrt(J*J+st*st);M.set(0,ft),y.set(0,Math.pow(M.y/d.y,i.zoomSpeed)),nt(y.y),d.copy(M);const Ut=(S.pageX+j.x)*.5,Wt=(S.pageY+j.y)*.5;_t(Ut,Wt)}function B(S){i.enableZoom&&R(S),i.enablePan&&V(S)}function et(S){i.enableZoom&&R(S),i.enableRotate&&X(S)}function it(S){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",x)),!wt(S)&&(Vt(S),S.pointerType==="touch"?Tt(S):F(S)))}function T(S){i.enabled!==!1&&(S.pointerType==="touch"?lt(S):G(S))}function x(S){switch(Ot(S),P.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",x),i.dispatchEvent(Yf),r=s.NONE;break;case 1:const j=P[0],J=U[j];Tt({pointerId:j,pageX:J.x,pageY:J.y});break}}function F(S){let j;switch(S.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case hi.DOLLY:if(i.enableZoom===!1)return;Lt(S),r=s.DOLLY;break;case hi.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;qt(S),r=s.PAN}else{if(i.enableRotate===!1)return;pt(S),r=s.ROTATE}break;case hi.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;pt(S),r=s.ROTATE}else{if(i.enablePan===!1)return;qt(S),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Hl)}function G(S){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ot(S);break;case s.DOLLY:if(i.enableZoom===!1)return;dt(S);break;case s.PAN:if(i.enablePan===!1)return;ut(S);break}}function Z(S){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(S.preventDefault(),i.dispatchEvent(Hl),mt($(S)),i.dispatchEvent(Yf))}function $(S){const j=S.deltaMode,J={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(j){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return S.ctrlKey&&!w&&(J.deltaY*=10),J}function gt(S){S.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",ct,{passive:!0,capture:!0}))}function ct(S){S.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",ct,{passive:!0,capture:!0}))}function ht(S){i.enabled===!1||i.enablePan===!1||It(S)}function Tt(S){switch(Ct(S),P.length){case 1:switch(i.touches.ONE){case Li.ROTATE:if(i.enableRotate===!1)return;Bt(S),r=s.TOUCH_ROTATE;break;case Li.PAN:if(i.enablePan===!1)return;Ft(S),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Li.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;v(S),r=s.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(S),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Hl)}function lt(S){switch(Ct(S),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;X(S),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;V(S),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(S),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;et(S),i.update();break;default:r=s.NONE}}function Mt(S){i.enabled!==!1&&S.preventDefault()}function Vt(S){P.push(S.pointerId)}function Ot(S){delete U[S.pointerId];for(let j=0;j<P.length;j++)if(P[j]==S.pointerId){P.splice(j,1);return}}function wt(S){for(let j=0;j<P.length;j++)if(P[j]==S.pointerId)return!0;return!1}function Ct(S){let j=U[S.pointerId];j===void 0&&(j=new Rt,U[S.pointerId]=j),j.set(S.pageX,S.pageY)}function Dt(S){const j=S.pointerId===P[0]?P[1]:P[0];return U[j]}i.domElement.addEventListener("contextmenu",Mt),i.domElement.addEventListener("pointerdown",it),i.domElement.addEventListener("pointercancel",x),i.domElement.addEventListener("wheel",Z,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",gt,{passive:!0,capture:!0}),this.update()}}class Kw{constructor(t,e){this.sizes=t,this.domElement=e,this.hasOrientationPermission=!1,this.orientationActive=!1,this.defaultPosition=new O(-4,1.7,7),this.initialTarget=new O(1.2,1.35,-2.5),this.fallbackAngle=0,this.lastUserInteraction=0,this.isUserInteracting=!1,this.navigationRoot=null,this.navigationTarget=null,this.navigationPosition=null,this.pointerStart=new Rt,this.pointerMoved=!1,this.raycaster=new Xw,this.pointer=new Rt,this.interactiveObjects=[],this.minTarget=new O(-4.25,.65,-4.25),this.maxTarget=new O(4.25,3.8,4.25),this.setInstance(),this.setControls(),this.initOrientation(),this.initPointNavigation()}setInstance(){this.instance=new fn(60,this.sizes.width/this.sizes.height,.1,100),this.instance.position.copy(this.defaultPosition)}setControls(){this.controls=new $w(this.instance,this.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enablePan=!0,this.controls.panSpeed=.72,this.controls.screenSpacePanning=!1,this.controls.enableZoom=!0,this.controls.minDistance=2,this.controls.maxDistance=11,this.controls.target.copy(this.initialTarget),this.controls.minAzimuthAngle=-Math.PI,this.controls.maxAzimuthAngle=Math.PI,this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/1.7,this.controls.mouseButtons.LEFT=hi.ROTATE,this.controls.mouseButtons.MIDDLE=hi.DOLLY,this.controls.mouseButtons.RIGHT=hi.PAN,this.controls.touches.ONE=Li.ROTATE,this.controls.touches.TWO=Li.DOLLY_PAN,this.controls.listenToKeyEvents(window),this.controls.update()}initOrientation(){if(typeof window>"u"||typeof window.DeviceOrientationEvent>"u")return;const t=()=>{this.hasOrientationPermission||(typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(s=>{s==="granted"&&(this.hasOrientationPermission=!0,this.orientationActive=!0)}).catch(console.error):(this.hasOrientationPermission=!0,this.orientationActive=!0))},e=()=>{this.lastUserInteraction=performance.now(),this.isUserInteracting=!0},i=()=>{this.constrainTarget(),this.defaultPosition.copy(this.instance.position),this.initialTarget.copy(this.controls.target),this.fallbackAngle=0,this.isUserInteracting=!1,this.lastUserInteraction=performance.now()};window.addEventListener("pointerdown",t,{once:!0,passive:!0}),window.addEventListener("touchstart",t,{once:!0,passive:!0}),window.addEventListener("pointerdown",e,{passive:!0}),window.addEventListener("touchstart",e,{passive:!0}),window.addEventListener("wheel",e,{passive:!0}),window.addEventListener("pointermove",e,{passive:!0}),window.addEventListener("touchmove",e,{passive:!0}),window.addEventListener("pointerup",i,{passive:!0}),window.addEventListener("touchend",i,{passive:!0}),window.addEventListener("pointercancel",i,{passive:!0}),DeviceOrientationEvent.requestPermission||(this.hasOrientationPermission=!0,this.orientationActive=!0)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}setNavigationRoot(t){this.navigationRoot=t}addInteraction(t,e){this.interactiveObjects.push({root:t,action:e})}update(){const e=performance.now()-this.lastUserInteraction;if(this.navigationTarget&&this.navigationPosition&&(this.controls.target.lerp(this.navigationTarget,.075),this.instance.position.lerp(this.navigationPosition,.075),this.controls.target.distanceToSquared(this.navigationTarget)<.001&&(this.controls.target.copy(this.navigationTarget),this.instance.position.copy(this.navigationPosition),this.defaultPosition.copy(this.instance.position),this.initialTarget.copy(this.controls.target),this.navigationTarget=null,this.navigationPosition=null)),e>3e3&&!this.isUserInteracting&&!this.navigationTarget){this.fallbackAngle+=.018;const s=Math.sin(this.fallbackAngle)*.22,r=this.defaultPosition.clone().sub(this.initialTarget);r.applyAxisAngle(new O(0,1,0),s),this.instance.position.copy(this.initialTarget).add(r),this.controls.target.copy(this.initialTarget)}this.controls.update(),this.constrainTarget()}constrainTarget(){const t=this.controls.target.clone();this.controls.target.clamp(this.minTarget,this.maxTarget),this.instance.position.add(this.controls.target.clone().sub(t))}initPointNavigation(){this.domElement.addEventListener("pointerdown",t=>{t.button===0&&(this.pointerStart.set(t.clientX,t.clientY),this.pointerMoved=!1,this.navigationTarget=null,this.navigationPosition=null)},{passive:!0}),this.domElement.addEventListener("pointermove",t=>{Math.hypot(t.clientX-this.pointerStart.x,t.clientY-this.pointerStart.y)>8&&(this.pointerMoved=!0)},{passive:!0}),this.domElement.addEventListener("pointerup",t=>{if(t.button!==0||this.pointerMoved||!this.navigationRoot)return;const e=this.domElement.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.instance);const i=this.raycaster.intersectObject(this.navigationRoot,!0),s=i[0];if(!s)return;const r=i.map(({object:l})=>this.interactiveObjects.find(({root:u})=>{let c=l;for(;c;){if(c===u)return!0;c=c.parent}return!1})).find(l=>l!==void 0);if(r){r.action();return}const o=new O(Pe.clamp(s.point.x,this.minTarget.x,this.maxTarget.x),1.7,Pe.clamp(s.point.z,this.minTarget.z,this.maxTarget.z)),a=this.controls.target.clone().sub(this.instance.position);this.navigationPosition=o,this.navigationTarget=o.clone().add(a).clamp(this.minTarget,this.maxTarget),this.lastUserInteraction=performance.now(),this.fallbackAngle=0},{passive:!0})}}class Zw{constructor(t,e){this.sizes=t,this.container=e,this.setInstance()}setInstance(){this.instance=new Dw({antialias:!0,powerPreference:"high-performance"}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=zp,this.instance.toneMapping=Hp,this.container.appendChild(this.instance.domElement)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}render(t,e){this.instance.render(t,e)}}class Jw{constructor(t=10,e=10,i=8){this.mesh=new Zt;const s=t/i*.985,r=t/i,o=-t/2+r/2,a=-e/2+r/2,l=new Te(t,e),u=new kt({color:328200,roughness:.9}),c=new at(l,u);c.rotation.x=-Math.PI/2,c.position.y=-.01,this.mesh.add(c);const h=new Te(s,s),f=new kt({color:1118486,roughness:.8,metalness:.2});for(let _=0;_<i;_++)for(let m=0;m<i;m++){const d=new at(h,f);d.rotation.x=-Math.PI/2,d.position.set(o+m*r,0,a+_*r),d.receiveShadow=!0,this.mesh.add(d)}const p=new Hw().load("/images/totem.png");p.colorSpace=$e,p.anisotropy=8;const g=new at(new Te(5,4.88),new Se({map:p,transparent:!0,opacity:.9,depthWrite:!1,side:Ue}));g.rotation.x=-Math.PI/2,g.position.set(0,.025,.45),g.renderOrder=2,this.mesh.add(g)}update(t){}}class Qw{constructor(t,e,i){const s=new Te(t,e),r=new kt({color:4473941,roughness:.6,metalness:.1});this.mesh=new at(s,r),this.mesh.rotation.x=Math.PI*.5,this.mesh.position.set(0,i,0),this.mesh.receiveShadow=!0}}class tT{constructor(t,e,i){this.group=new Zt;const s=new kt({color:5592422,roughness:.5,metalness:.1}),r=new Te(t,e),o=new at(r,s);o.position.set(0,e/2,-i/2),o.receiveShadow=!0;const a=new Te(i,e),l=new at(a,s);l.position.set(-t/2,e/2,0),l.rotation.y=Math.PI/2,l.receiveShadow=!0;const u=new Te(i,e),c=new at(u,s);c.position.set(t/2,e/2,0),c.rotation.y=-Math.PI/2,c.receiveShadow=!0;const h=s.clone();h.side=cn;const f=new at(new Te(t,e),h);f.position.set(0,e/2,i/2),f.receiveShadow=!0,this.group.add(o,l,c,f)}}class eT{constructor(t){this.lastSecond=-1,this.group=new Zt,this.targetDate=t,this.canvas=document.createElement("canvas"),this.canvas.width=2048,this.canvas.height=512,this.ctx=this.canvas.getContext("2d"),this.texture=new Jn(this.canvas),this.texture.minFilter=on;const e=4.8,i=1.3,s=new te(e,i,.1),r=new kt({color:657935,metalness:.8,roughness:.2}),o=new at(s,r),a=new te(e+.12,i+.12,.02),l=new kt({color:16711807,emissive:16711807,emissiveIntensity:1.8}),u=new at(a,l);u.position.z=-.02;const c=new Te(e-.2,i-.2),h=new Se({map:this.texture,transparent:!0,side:Ue}),f=new at(c,h);f.position.z=.055,this.group.add(o,u,f),this.group.position.set(-1.6,2.3,-4.85),this.updateText()}setTargetDate(t){this.targetDate=t,this.updateText()}updateText(){const t=new Date().getTime(),e=this.targetDate.getTime()-t;let i="00d  00h  00m  00s";if(e>0){const r=Math.floor(e/864e5),o=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),a=Math.floor(e%(1e3*60*60)/(1e3*60)),l=Math.floor(e%(1e3*60)/1e3),u=String(r).padStart(2,"0"),c=String(o).padStart(2,"0"),h=String(a).padStart(2,"0"),f=String(l).padStart(2,"0");i=`${u}d  ${c}h  ${h}m  ${f}s`}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const s=this.canvas.width/2;this.ctx.font='900 92px "Courier New", monospace',this.ctx.textAlign="center",this.ctx.shadowColor="#ff0055",this.ctx.shadowBlur=25,this.ctx.fillStyle="#ff88aa",this.ctx.fillText("ALLA FESTA MANCANO:",s,115),this.ctx.font='700 68px "Courier New", monospace',this.ctx.shadowBlur=14,this.ctx.fillStyle="#ffffff",this.ctx.fillText("30 OTTOBRE 2026 · 21:30",s,225),this.ctx.font='900 122px "Courier New", monospace',this.ctx.fillStyle="rgba(40, 0, 20, 0.4)",this.ctx.shadowBlur=0,this.ctx.fillText("88d  88h  88m  88s",s,415),this.ctx.font='900 122px "Courier New", monospace',this.ctx.shadowColor="#ff0055",this.ctx.shadowBlur=25,this.ctx.fillStyle="#ffffff",this.ctx.fillText(i,s,415),this.texture.needsUpdate=!0}update(){const t=Math.floor(Date.now()/1e3);t!==this.lastSecond&&(this.lastSecond=t,this.updateText())}updateVisibility(t){this.group.visible=t.z>-4.85}}class Ga{constructor(t=6813672){this.rings=[],this.elapsed=0,this.active=!1,this.group=new Zt,[0,.5].forEach(s=>{const r=new Se({color:t,transparent:!0,opacity:.8,blending:rr,depthWrite:!1,side:Ue}),o=new at(new Tu(.13,.18,32),r);this.group.add(o),this.rings.push({mesh:o,material:r,phase:s})});const e=new kt({color:t,emissive:t,emissiveIntensity:2.2,transparent:!0,opacity:.9}),i=new at(new Va(.07,24),e);i.position.z=.006,this.group.add(i)}setActive(t){this.active=t}update(t){this.elapsed+=t,this.rings.forEach(e=>{const i=(this.elapsed*(this.active?.65:.45)+e.phase)%1,s=1+i*1.8;e.mesh.scale.setScalar(s),e.material.opacity=(1-i)*(this.active?.95:.68)})}}class nT{constructor(){this.turntables=[],this.platters=[],this.scratchTime=0,this.group=new Zt;const t=new kt({color:1118485,roughness:.2,metalness:.5}),e=new kt({color:3355443,metalness:.8,roughness:.2}),i=new kt({color:328965,roughness:.3,metalness:.1}),s=new te(2.2,1,.9),r=new at(s,t);r.position.y=.5,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const o=new te(2.1,.05,.02),a=new kt({color:16711816,emissive:16711816,emissiveIntensity:1.5}),l=new at(o,a);l.position.set(0,.8,.46),this.group.add(l);const u=new te(.5,.06,.4),c=new jt(.18,.18,.02,32);[-.6,.6].forEach(_=>{const m=new Zt;m.position.x=_;const d=new at(u,e);d.position.set(0,1.03,0),m.add(d);const M=new Zt;M.position.y=1.07;const y=new at(c,i);M.add(y);const b=new jt(.06,.06,.022,16),I=new Se({color:_<0?55807:16711765}),C=new at(b,I);C.position.y=.012,M.add(C),m.add(M),this.turntables.push(m),this.platters.push(M),this.group.add(m)});const h=new te(.45,.07,.45),f=new at(h,e);f.position.set(0,1.03,0),this.group.add(f);for(let _=0;_<4;_++){const m=new te(.03,.02,.03),d=new Se({color:_%2===0?65280:16711680}),M=new at(m,d);M.position.set(-.1+_*.06,1.07,-.1),this.group.add(M)}const p=new te(.4,.7,.4),g=new kt({color:1710618,roughness:.6});[-1.2,1.2].forEach(_=>{const m=new at(p,g);m.position.set(_,1.15,-.1),m.rotation.y=_<0?.3:-.3,this.group.add(m)}),this.interactionPulse=new Ga,this.interactionPulse.group.position.set(0,.5,.472),this.group.add(this.interactionPulse.group),this.group.position.set(3.5,0,-3.5),this.group.rotation.y=-Math.PI/4}update(t){this.interactionPulse.update(t),this.scratchTime=Math.max(0,this.scratchTime-t);const e=this.scratchTime>0?18:1.8;this.platters.forEach((i,s)=>{i.rotation.y+=t*e*(s===0?1:-1)})}setPlaying(t){this.interactionPulse.setActive(t)}scratch(){this.scratchTime=1.1}}class iT{constructor(){this.backWallElements=[],this.rightWallElements=[],this.group=new Zt;const t=(a,l="6",u=512,c=1.6)=>{const h=document.createElement("canvas");h.width=u,h.height=768;const f=h.getContext("2d");f.clearRect(0,0,h.width,h.height),f.textAlign=a,f.textBaseline="middle",f.font='600 540px "Trebuchet MS", sans-serif',f.shadowColor="#ff007f",f.shadowBlur=50,f.lineWidth=9,f.strokeStyle="#ff007f";const p=a==="right"?h.width-12:12;f.strokeText(l,p,h.height/2),f.shadowBlur=15,f.shadowColor="#ffffff",f.fillStyle="#ffe6f2",f.fillText(l,p,h.height/2);const g=new Jn(h);return g.minFilter=on,new at(new Te(c,2.4),new Se({map:g,transparent:!0,side:Ue,depthWrite:!1}))},e=t("right","'6",640,2);e.position.set(3.95,4.05,-4.94);const i=t("left");i.position.set(4.94,4.05,-4.15),i.rotation.y=-Math.PI/2,this.group.add(e,i),this.backWallElements.push(e),this.rightWallElements.push(i);const s=(a,l)=>{const u=document.createElement("canvas");u.width=1024,u.height=256;const c=u.getContext("2d");c.clearRect(0,0,u.width,u.height),c.textAlign=l,c.textBaseline="middle",c.font='600 174px "Trebuchet MS", sans-serif',c.shadowColor="#b8ff42",c.shadowBlur=38,c.lineWidth=5,c.strokeStyle="#b8ff42";const h=l==="right"?u.width-12:12;c.strokeText(a,h,u.height/2),c.shadowColor="#ffffff",c.shadowBlur=10,c.fillStyle="#f4ffd8",c.fillText(a,h,u.height/2);const f=new Jn(u);return f.minFilter=on,new at(new Te(3.2,.8),new Se({map:f,transparent:!0,side:Ue,depthWrite:!1}))},r=s("CELEB","right");r.position.set(3.35,3.1,-4.94);const o=s("RATION","left");o.position.set(4.94,3.1,-3.35),o.rotation.y=-Math.PI/2,this.group.add(r,o),this.backWallElements.push(r),this.rightWallElements.push(o)}updateVisibility(t){const e=t.z>-4.95,i=t.x<4.95;this.backWallElements.forEach(s=>{s.visible=e}),this.rightWallElements.forEach(s=>{s.visible=i})}}class Kf{constructor(){this.particles=[],this.transform=new Le,this.count=150,this.roomSize=10,this.roomHeight=4,this.clock=new Sm,this.group=new Zt;const t=new Te(.06,.12),e=new kt({color:14540253,metalness:.95,roughness:.1,side:Ue,emissive:2236962});this.mesh=new xm(t,e,this.count),this.mesh.instanceMatrix.setUsage(tm),this.mesh.frustumCulled=!1,this.group.add(this.mesh);for(let i=0;i<this.count;i++){const s=(Math.random()-.5)*(this.roomSize-1),r=Math.random()*this.roomHeight,o=(Math.random()-.5)*(this.roomSize-1),a=new O(s,r,o),l=new Hn(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),u=new O((Math.random()-.5)*.2,-(.5+Math.random()*.8),(Math.random()-.5)*.2),c=new O((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2);this.particles.push({position:a,rotation:l,velocity:u,rotSpeed:c})}this.clock.start()}update(){const t=this.clock.getDelta();this.particles.forEach((e,i)=>{e.position.addScaledVector(e.velocity,t),e.rotation.x+=e.rotSpeed.x*t,e.rotation.y+=e.rotSpeed.y*t,e.rotation.z+=e.rotSpeed.z*t,e.position.y<=0&&(e.position.y=this.roomHeight,e.position.x=(Math.random()-.5)*(this.roomSize-1),e.position.z=(Math.random()-.5)*(this.roomSize-1)),this.transform.position.copy(e.position),this.transform.rotation.copy(e.rotation),this.transform.updateMatrix(),this.mesh.setMatrixAt(i,this.transform.matrix)}),this.mesh.instanceMatrix.needsUpdate=!0}}class sT{constructor(){this.fingerPairs=[],this.jetFlames=[],this.ledMaterials=[],this.notes=[],this.elapsed=0,this.playing=!1,this.paletteOffset=0,this.performanceTime=null,this.group=new Zt,this.group.position.set(0,0,-.42),this.body=new Zt,this.group.add(this.body);const t=new kt({color:14148328,metalness:.78,roughness:.24}),e=new kt({color:1120288,metalness:.7,roughness:.3}),i=new kt({color:462872,metalness:.35,roughness:.22}),s=new at(new te(.72,.72,.42),t);s.position.y=1.48,s.castShadow=!0,this.body.add(s);const r=new at(new te(.48,.34,.025),i);r.position.set(0,1.5,.225),this.body.add(r);const o=new at(new te(.86,.58,.56),t);o.position.y=2.13,o.castShadow=!0,this.body.add(o);const a=new at(new te(.65,.34,.025),i);a.position.set(0,2.13,.295),this.body.add(a),this.headHitArea=new at(new te(.9,.62,.08),new Se({transparent:!0,opacity:0,depthWrite:!1})),this.headHitArea.position.set(0,2.13,.34),this.body.add(this.headHitArea),[-.2,.2].forEach(h=>{const f=this.createLedMaterial(6813672),p=new at(new ln(.065,16,12),f);p.scale.y=.72,p.position.set(h,2.17,.32),this.body.add(p)}),[-.2,0,.2].forEach((h,f)=>{const p=new at(new te(.09,.12+f*.045,.035),this.createLedMaterial(f===0?16732058:f===1?6813672:16767053));p.position.set(h,1.48,.245),this.body.add(p)});const l=new at(new jt(.018,.018,.35,10),e);l.position.set(0,2.59,0),this.body.add(l);const u=new at(new ln(.075,16,12),this.createLedMaterial(16732058));u.position.set(0,2.79,0),this.body.add(u);const c=new at(new ys(.48,.055,12,32,Math.PI),e);c.position.set(0,2.23,0),c.rotation.z=Math.PI,this.body.add(c),[-.47,.47].forEach(h=>{const f=new at(new jt(.14,.14,.11,20),e);f.rotation.z=Math.PI/2,f.position.set(h,2.12,0),this.body.add(f)}),this.leftArm=this.createArm(-1,t,e),this.rightArm=this.createArm(1,t,e),this.leftLeg=this.createLeg(-1,t,e),this.rightLeg=this.createLeg(1,t,e),this.body.add(this.leftArm,this.rightArm,this.leftLeg,this.rightLeg),this.createNotes()}update(t){if(this.elapsed+=t,this.performanceTime!==null)this.performanceTime+=t,this.updatePerformance(this.performanceTime);else{this.body.position.y=Math.sin(this.elapsed*(this.playing?5.2:2.4))*(this.playing?.075:.035),this.body.rotation.y=Math.sin(this.elapsed*1.35)*.055,this.body.rotation.x=this.playing?Math.sin(this.elapsed*8)*.09:0;const e=this.playing?1.32+Math.sin(this.elapsed*5.5)*.22:.38+(Math.sin(this.elapsed*3.5)+1)*.1;this.leftArm.rotation.z=-e,this.rightArm.rotation.z=e,this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.fingerPairs.forEach(i=>{i.visible=!1}),this.jetFlames.forEach(i=>{i.visible=!1})}this.ledMaterials.forEach((e,i)=>{const s=(this.elapsed*.12+i*.17+this.paletteOffset)%1;e.color.setHSL(s,.9,.62),e.emissive.setHSL(s,.9,.5),e.emissiveIntensity=1.7+Math.sin(this.elapsed*4+i)*.55}),this.notes.forEach((e,i)=>{const s=(this.elapsed*e.speed+e.phase)%1;e.sprite.position.set(e.startX+Math.sin(s*Math.PI*3+i)*.18,1.2+s*2.25,.12+Math.cos(s*Math.PI*2+i)*.08),e.sprite.material.opacity=Math.sin(s*Math.PI)*.95;const r=.34+s*.18;e.sprite.scale.set(r,r,1)})}setPlaying(t){this.playing=t,this.notes.forEach(e=>{e.sprite.visible=t})}cycleLedPalette(){this.paletteOffset=(this.paletteOffset+.23)%1}performDance(){this.performanceTime===null&&(this.performanceTime=0,this.cycleLedPalette())}updatePerformance(t){if(this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.fingerPairs.forEach(i=>{i.visible=!1}),this.jetFlames.forEach(i=>{i.visible=!1}),t<.45){const i=t/.45;this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.y=-Math.sin(i*Math.PI)*.16,this.body.rotation.x=i*.12,this.leftArm.rotation.z=-.25,this.rightArm.rotation.z=.25,this.leftLeg.rotation.x=-i*.32,this.rightLeg.rotation.x=-i*.32;return}if(t<2.35){const i=(t-.45)/1.9,s=Pe.smoothstep(i,.12,.92),r=1-i,o=r*r*0+2*r*i*3.8+i*i*-.5,a=Pe.smoothstep(i,.34,.7);this.group.position.set(0,o,Pe.lerp(-.42,3.8,s)),this.group.rotation.set(-a*Math.PI*2,0,0),this.leftArm.rotation.z=-1.65,this.rightArm.rotation.z=1.65,this.leftLeg.rotation.x=-Math.sin(i*Math.PI)*.55,this.rightLeg.rotation.x=-Math.sin(i*Math.PI)*.55;return}if(this.group.position.set(0,-.5,3.8),this.group.rotation.set(0,0,0),t<3.35){const i=(t-2.35)/1,s=Math.sin(Math.min(i/.28,1)*Math.PI)*.1;this.body.position.y=-.38-s,this.leftLeg.rotation.z=-Math.PI/2,this.rightLeg.rotation.z=Math.PI/2,this.leftArm.rotation.z=-1.45,this.rightArm.rotation.z=1.45;return}if(t<4.1){const i=Pe.smoothstep((t-3.35)/.75,0,1);this.body.position.y=Pe.lerp(-.38,0,i),this.leftLeg.rotation.z=Pe.lerp(-Math.PI/2,0,i),this.rightLeg.rotation.z=Pe.lerp(Math.PI/2,0,i),this.leftArm.rotation.z=Pe.lerp(-1.45,-.5,i),this.rightArm.rotation.z=Pe.lerp(1.45,.5,i);return}if(t<6.2){const i=t-4.1,s=Math.sin(i*Math.PI*1.6)>=0,r=Math.abs(Math.sin(i*Math.PI*3.2));this.body.position.y=r*.1,this.body.rotation.set(0,s?-.22:.22,s?-.12:.12),this.leftArm.rotation.z=s?-.62:-2.35,this.rightArm.rotation.z=s?2.35:.62,this.leftLeg.rotation.x=s?-.28:.1,this.rightLeg.rotation.x=s?.1:-.28;return}if(t<7.9){const i=t-6.2,s=Math.floor(i/.42)%2===0,r=Math.sin(i%.42/.42*Math.PI);this.body.position.y=Math.abs(Math.sin(i*Math.PI*3))*.06,this.body.rotation.y=(s?1:-1)*.08*r,this.leftArm.rotation.z=s?2.28-r*.18:-.72,this.rightArm.rotation.z=s?.72:-2.28+r*.18,this.leftArm.rotation.x=s?-.32:0,this.rightArm.rotation.x=s?0:-.32,this.fingerPairs[0].visible=s,this.fingerPairs[1].visible=!s,this.leftLeg.rotation.x=-Math.sin(i*Math.PI*2)*.18,this.rightLeg.rotation.x=Math.sin(i*Math.PI*2)*.18;return}if(t<9.6){const i=t-7.9,s=Math.sin(i*Math.PI*4),r=Math.sign(Math.sin(i*Math.PI*3));this.body.position.y=Math.abs(s)*.12,this.body.rotation.set(r*.08,s*.28,-s*.1),this.leftArm.rotation.z=-1.25+r*.55,this.rightArm.rotation.z=1.25+r*.55,this.leftLeg.rotation.x=s*.55,this.rightLeg.rotation.x=-s*.55;return}if(t<10.3){const i=(t-9.6)/.7,s=i*i;this.group.position.set(0,Pe.lerp(-.5,1.35,s),3.8),this.group.rotation.set(-.08*(1-i),0,0),this.body.position.y=-Math.sin(i*Math.PI)*.12,this.leftArm.rotation.z=-.55,this.rightArm.rotation.z=.55,this.leftLeg.rotation.x=-.18*(1-i),this.rightLeg.rotation.x=-.18*(1-i),this.setJetFlames(.45+i*.55);return}if(t<12.4){const i=(t-10.3)/2.1,s=i*i*(3-2*i);this.group.position.set(0,1.35+Math.sin(i*Math.PI)*.65,Pe.lerp(3.8,-.42,s)),this.group.rotation.set(-Math.sin(i*Math.PI)*.12,0,0),this.leftArm.rotation.z=-.72+Math.sin(i*Math.PI*2)*.08,this.rightArm.rotation.z=.72-Math.sin(i*Math.PI*2)*.08,this.setJetFlames(.9+Math.sin(this.elapsed*28)*.1);return}if(t<13.15){const i=(t-12.4)/.75,s=i*i*(3-2*i);this.group.position.set(0,Pe.lerp(1.35,0,s),-.42),this.group.rotation.set(0,0,0),this.leftArm.rotation.z=-.5,this.rightArm.rotation.z=.5,this.setJetFlames(Math.max(.15,1-i));return}if(t<13.6){const i=(t-13.15)/.45;this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.y=-Math.sin(i*Math.PI)*.11,this.leftArm.rotation.z=-.5,this.rightArm.rotation.z=.5;return}this.performanceTime=null,this.group.position.set(0,0,-.42),this.group.rotation.set(0,0,0),this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.jetFlames.forEach(i=>{i.visible=!1})}setJetFlames(t){this.jetFlames.forEach((e,i)=>{const s=.85+Math.sin(this.elapsed*34+i*2.4)*.15;e.visible=!0,e.scale.set(.8+t*.2,t*s,.8+t*.2)})}createLedMaterial(t){const e=new kt({color:t,emissive:t,emissiveIntensity:2,roughness:.25});return this.ledMaterials.push(e),e}createArm(t,e,i){const s=new Zt;s.position.set(t*.48,1.67,.02),s.rotation.z=t*.38;const r=new at(new jt(.085,.1,.5,14),e);r.position.y=-.22,s.add(r);const o=new at(new ln(.12,16,12),i);o.position.set(0,-.52,.13);const a=new Zt;return a.position.set(0,-.57,.17),[-.035,.035].forEach(l=>{const u=new at(new jt(.018,.022,.2,8),new kt({color:6813672,emissive:6813672,emissiveIntensity:1.5}));u.position.set(l,-.08,0),a.add(u)}),a.visible=!1,this.fingerPairs.push(a),s.add(o,a),s}createLeg(t,e,i){const s=new Zt;s.position.set(t*.22,1.16,0);const r=new at(new jt(.09,.105,.58,14),e);r.position.y=-.27;const o=new at(new te(.22,.12,.36),i);o.position.set(0,-.59,.1);const a=new Zt;a.position.set(0,-.8,.08);const l=new at(new eo(.145,.64,14),new Se({color:16727951,transparent:!0,opacity:.92})),u=new at(new eo(.078,.46,12),new Se({color:16777215,transparent:!0,opacity:1}));l.rotation.z=Math.PI,u.rotation.z=Math.PI,u.position.y=.03;const c=new Yn(16732058,5.5,3.4,1.5);return c.position.y=-.22,a.add(l,u,c),a.visible=!1,this.jetFlames.push(a),s.add(r,o,a),s}createNotes(){const t=[-1.55,-.9,-.28,.35,.95,1.55];["♪","♫","♪","♬","♫","♪"].forEach((e,i)=>{const s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");if(!r)return;r.clearRect(0,0,128,128),r.fillStyle="#ffffff",r.font="700 104px Georgia",r.textAlign="center",r.textBaseline="middle",r.shadowColor="#ffffff",r.shadowBlur=20,r.fillText(e,64,66);const o=new Jn(s);o.colorSpace=$e;const a=new Ha({map:o,color:16777215,transparent:!0,depthWrite:!1}),l=new Eu(a);l.visible=!1,this.group.add(l),this.notes.push({sprite:l,speed:.12+i*.012,phase:i/t.length,startX:t[i]})})}}class rT{constructor(){this.heads=[],this.elapsed=0,this.boostTime=0,this.worldPosition=new O,this.lightOrigin=new O,this.targetWorldPosition=new O,this.lightDirection=new O,this.group=new Zt,this.group.position.set(-4.15,0,-3.7);const t=new kt({color:1514016,metalness:.9,roughness:.25}),e=new kt({color:6845053,metalness:1,roughness:.16}),i=new at(new jt(.38,.5,.2,24),t);i.position.y=.1,i.castShadow=!0;const s=new at(new jt(.07,.09,3.75,14),e);s.position.y=1.98,s.castShadow=!0;const r=new at(new ln(.13,16,12),e);r.position.y=3.88,this.group.add(i,s,r);const o=document.createElement("canvas");o.width=128,o.height=128;const a=o.getContext("2d"),l=a.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.28,"rgba(255,255,255,0.8)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,128,128);const u=new Jn(o),c=[16722047,16767037,6684533,3529215,11099391],h=.105,f=.82;c.forEach((p,g)=>{const _=.78+g*.67,m=new Zt;m.position.set(0,_,0);const d=new at(new ys(.21,.035,10,20,Math.PI),e);d.rotation.z=Math.PI,d.position.z=.02;const M=new at(new te(.34,.34,.4),t);M.position.z=.02,M.castShadow=!0;const y=new kt({color:p,emissive:p,emissiveIntensity:2.6}),b=new at(new Va(h,20),y);b.position.z=.225,m.add(d,M,b),this.group.add(m);const I=new Le;I.position.set(4,1,-1.08);const C=new Mm(p,42,16,Math.PI/15,.55,1.15);C.position.set(0,0,.225),C.target=I,C.castShadow=g===2,m.add(C);const P=new Se({color:p,transparent:!0,opacity:.17,blending:rr,depthWrite:!1}),U=new at(new jt(f/2,h,1,20,1,!0),P),w=new Se({map:u,color:p,transparent:!0,opacity:.72,blending:rr,depthWrite:!1,side:Ue}),E=new at(new Te(f,f),w);this.group.add(I,U,E),this.heads.push({fixture:m,light:C,target:I,ray:U,rayMaterial:P,lensMaterial:y,wallSpot:E,phase:g*.8})})}update(t){this.boostTime=Math.max(0,this.boostTime-t),this.elapsed+=t*(this.boostTime>0?3.2:1),this.heads.forEach((e,i)=>{const s=(this.elapsed*(.1+i*.008)+e.phase)%4,r=Math.floor(s),o=s-r,a=4.79,l=-4.45+o*8.9,u=.65+(Math.sin(this.elapsed*.75+i*1.1)+1)*1.65,c=this.worldPosition;r===0?(c.set(l,u,-a),e.wallSpot.rotation.set(0,0,0)):r===1?(c.set(a,u,l),e.wallSpot.rotation.set(0,-Math.PI/2,0)):r===2?(c.set(-l,u,a),e.wallSpot.rotation.set(0,Math.PI,0)):(c.set(-a,u,-l),e.wallSpot.rotation.set(0,Math.PI/2,0));const h=c.sub(this.group.position);e.target.position.copy(h),e.wallSpot.position.copy(h);const f=this.targetWorldPosition.copy(e.target.position).add(this.group.position);e.fixture.lookAt(f);const p=this.lightOrigin;e.light.getWorldPosition(p),p.sub(this.group.position);const g=this.lightDirection.copy(e.target.position).sub(p).normalize(),_=p.distanceTo(e.target.position);e.ray.position.copy(p).addScaledVector(g,_/2),e.ray.scale.set(1,_,1),e.ray.quaternion.setFromUnitVectors(new O(0,1,0),g),e.rayMaterial.opacity=.13+Math.sin(this.elapsed*2.5+i)*.035,e.lensMaterial.emissiveIntensity=2.2+Math.sin(this.elapsed*3+i)*.8})}boost(){this.boostTime=1.4}}class oT{constructor(){this.elapsed=0,this.throwProgress=null,this.glassShards=[],this.bubbles=[],this.bubbleTime=0,this.drinkColorIndex=0,this.group=new Zt,this.group.position.set(.92,0,.4);const t=new kt({color:14477033,metalness:.82,roughness:.22}),e=new kt({color:1053980,metalness:.72,roughness:.28}),i=new kt({color:16732058,emissive:16732058,emissiveIntensity:1.5}),s=new at(new te(.52,.62,.34),t);s.position.y=1.43;const r=new at(new te(.37,.4,.025),i);r.position.set(0,1.4,.185);const o=new at(new te(.62,.46,.46),t);o.position.y=1.97;const a=new at(new te(.46,.25,.025),e);a.position.set(0,1.98,.245),this.group.add(s,r,o,a),[-.14,.14].forEach(g=>{const _=new at(new ln(.045,14,10),i);_.position.set(g,2,.265),this.group.add(_)});const l=new at(new ln(.05,12,8),e);l.position.set(0,1.7,.21);const u=new eo(.11,.18,3);[-1,1].forEach(g=>{const _=new at(u,e);_.position.set(g*.1,1.7,.2),_.rotation.z=g*Math.PI/2,this.group.add(_)}),this.group.add(l),this.leftArm=this.createArm(-1,t,e),this.rightArm=this.createArm(1,t,e),this.group.add(this.leftArm,this.rightArm),this.shaker=new Zt;const c=new at(new jt(.09,.12,.34,16),e),h=new at(new jt(.07,.09,.1,16),t);h.position.y=.22,this.shaker.add(c,h),this.shaker.position.set(0,1.38,.34),this.group.add(this.shaker),this.drinkMaterial=new kt({color:16732058,emissive:16732058,emissiveIntensity:.9,transparent:!0,opacity:0}),this.servedDrink=new Zt,this.servedDrink.position.set(-.34,0,.55),this.glass=new at(new jt(.13,.095,.28,18,1,!0),new ba({color:16777215,transmission:.75,transparent:!0,opacity:.42,roughness:.08,side:Ue})),this.glass.position.y=1.24,this.liquid=new at(new jt(.105,.078,.19,16),this.drinkMaterial),this.liquid.position.y=1.21,this.servedDrink.add(this.glass,this.liquid);const f=new ba({color:15268863,transmission:.72,transparent:!0,opacity:.68,roughness:.12});for(let g=0;g<10;g++){const _=new at(new Au(.045+g%3*.018),f);_.visible=!1,this.glassShards.push(_),this.servedDrink.add(_)}const p=new Se({color:16777215,transparent:!0,opacity:.75});for(let g=0;g<9;g++){const _=new at(new ln(.018+g%3*.006,8,6),p);_.visible=!1,this.bubbles.push(_),this.servedDrink.add(_)}this.group.add(this.servedDrink),this.pourStream=new at(new jt(.018,.018,.5,8),new Se({color:16732058,transparent:!0,opacity:.75})),this.pourStream.position.set(-.34,1.58,.5),this.pourStream.visible=!1,this.group.add(this.pourStream)}update(t){if(this.elapsed+=t,this.updateBubbles(t),this.throwProgress!==null){this.throwProgress+=t;const i=this.throwProgress,s=Math.min(i/1.5,1),r=Math.sin(s*Math.PI);if(this.shaker.position.set(0,1.42+r*2.2,.34),this.shaker.rotation.z=s*Math.PI*4,this.group.rotation.y=Pe.smoothstep(s,.12,.88)*Math.PI*2,i>=1.5&&i<2.4){const o=(i-1.5)/.9;this.shaker.position.set(-.34,1.88,.42),this.shaker.rotation.z=1.05,this.pourStream.visible=o>.08,this.drinkMaterial.opacity=Math.min(.82,o)}else if(i>=2.4&&i<4.25){const o=1-Math.pow(1-(i-2.4)/1.85,3);this.pourStream.visible=!1,this.shaker.position.set(0,1.38,.34),this.shaker.rotation.z=0,this.servedDrink.position.x=-.34-o*2.16}else if(i>=4.25&&i<4.95){const o=(i-4.25)/.7;this.shaker.position.set(-.08,1.17,.48),this.shaker.rotation.z=Math.PI/2,this.servedDrink.position.x=-2.5-o*.18,this.servedDrink.position.y=-o*1.18,this.servedDrink.rotation.z=o*Math.PI*1.35,o>.82&&this.breakGlass(o)}else if(i>=4.95&&i<7.25){const o=i-4.95;this.breakGlass(1),this.shaker.position.set(-.08,1.17,.48),this.shaker.rotation.z=Math.PI/2,this.group.rotation.y=-.72+Math.sin(o*16)*.05,this.group.position.y=Math.abs(Math.sin(o*18))*.045,this.leftArm.rotation.z=2.9+Math.sin(o*13)*.1,this.rightArm.rotation.z=-2.9-Math.sin(o*13)*.1}else if(i>=7.25){const o=Math.min((i-7.25)/.75,1);this.group.rotation.y=Pe.lerp(-.72,0,o),this.group.position.y=0,this.leftArm.rotation.z=Pe.lerp(2.9,1.02,o),this.rightArm.rotation.z=Pe.lerp(-2.9,-1.02,o),this.shaker.position.lerp(new O(0,1.38,.34),o),this.shaker.rotation.z=Pe.lerp(Math.PI/2,0,o)}if(i<4.95){const o=Math.sin(Math.min(i/2.1,1)*Math.PI);this.leftArm.rotation.z=1.02-o*.28,this.rightArm.rotation.z=-1.02+o*.28}i>=8&&(this.throwProgress=null,this.shaker.position.set(0,1.38,.34),this.shaker.rotation.z=0,this.group.rotation.y=0,this.group.position.y=0,this.leftArm.rotation.z=1.02,this.rightArm.rotation.z=-1.02,this.pourStream.visible=!1);return}const e=Math.sin(this.elapsed*10);this.shaker.position.x=e*.055,this.shaker.position.y=1.38+Math.abs(e)*.045,this.shaker.rotation.z=e*.16,this.leftArm.rotation.z=1.02+e*.08,this.rightArm.rotation.z=-1.02+e*.08,this.group.rotation.y=Math.sin(this.elapsed*1.4)*.035}throwShaker(){this.throwProgress===null&&(this.throwProgress=0,this.servedDrink.position.set(-.34,0,.55),this.servedDrink.rotation.set(0,0,0),this.glass.visible=!0,this.liquid.visible=!0,this.glassShards.forEach(t=>{t.visible=!1}),this.drinkMaterial.opacity=0,this.bubbleTime=0,this.bubbles.forEach(t=>{t.visible=!1}))}activateDrink(){if(!this.glass.visible||this.drinkMaterial.opacity===0)return;const t=[16732058,6813672,16767053,9399295,6684533];this.drinkColorIndex=(this.drinkColorIndex+1)%t.length;const e=t[this.drinkColorIndex];this.drinkMaterial.color.setHex(e),this.drinkMaterial.emissive.setHex(e),this.drinkMaterial.opacity=.86,this.bubbleTime=2.4}updateBubbles(t){this.bubbleTime=Math.max(0,this.bubbleTime-t),this.bubbles.forEach((e,i)=>{if(e.visible=this.bubbleTime>0,!e.visible)return;const s=(this.elapsed*(.8+i*.04)+i*.13)%1;e.position.set(Math.sin(i*2.1)*.07,1.12+s*.32,Math.cos(i*1.7)*.055),e.scale.setScalar(.65+s*.7)})}breakGlass(t){this.glass.visible=!1,this.liquid.visible=!1,this.bubbleTime=0,this.bubbles.forEach(e=>{e.visible=!1}),this.glassShards.forEach((e,i)=>{e.visible=!0;const s=Math.max(0,t-.82)*2.8,r=i/this.glassShards.length*Math.PI*2;e.position.set(Math.cos(r)*s*(.12+i%3*.025),1.24+Math.abs(Math.sin(r*2))*s*.055,Math.sin(r)*s*.11),e.rotation.set(r*.7,r,r*1.3)})}createArm(t,e,i){const s=new Zt;s.position.set(t*.34,1.58,.12),s.rotation.z=t*-1.02;const r=new at(new jt(.055,.07,.42,12),e);r.position.y=-.19;const o=new at(new ln(.08,14,10),i);return o.position.set(0,-.42,.2),s.add(r,o),s}}class aT{constructor(){this.group=new Zt,this.group.position.set(-4.62,0,1.25),this.group.rotation.y=Math.PI/2;const t=new kt({color:1380633,metalness:.45,roughness:.28}),e=new kt({color:3159618,metalness:.8,roughness:.16}),i=new kt({color:1316897,metalness:.7,roughness:.3}),s=new at(new te(3.1,1.05,.72),t);s.position.set(0,.525,.42),s.castShadow=!0,s.receiveShadow=!0;const r=new at(new te(3.25,.09,.86),e);r.position.set(0,1.08,.42),r.castShadow=!0;const o=new at(new te(2.85,.055,.025),new kt({color:6813672,emissive:6813672,emissiveIntensity:2.1}));o.position.set(0,.75,.79),this.group.add(s,r,o),[1.55,2.15].forEach(p=>{const g=new at(new te(2.7,.08,.18),i);g.position.set(0,p,-.2),this.group.add(g)}),[16732058,6813672,16767053,9399295,8257417,16741975].forEach((p,g)=>{const _=g<3?1.55:2.15,m=-.85+g%3*.85,d=new kt({color:p,emissive:p,emissiveIntensity:.55,transparent:!0,opacity:.86,roughness:.18}),M=new at(new jt(.085,.105,.38,16),d);M.position.set(m,_+.23,-.19);const y=new at(new jt(.045,.055,.14,12),d);y.position.set(m,_+.49,-.19),this.group.add(M,y)});const l=document.createElement("canvas");l.width=512,l.height=192;const u=l.getContext("2d");u.clearRect(0,0,l.width,l.height),u.textAlign="center",u.textBaseline="middle",u.font='900 126px "Trebuchet MS", sans-serif',u.shadowColor="#ff4f9a",u.shadowBlur=32,u.strokeStyle="#ff4f9a",u.lineWidth=7,u.strokeText("BAR",256,96),u.fillStyle="#ffffff",u.fillText("BAR",256,96);const c=new Jn(l);c.colorSpace=$e;const h=new at(new Te(2.25,.84),new Se({map:c,transparent:!0,depthWrite:!1}));h.position.set(0,2.92,-.37),this.group.add(h);const f=new Yn(16732058,8,4.5,1.5);f.position.set(0,2.2,1.25),this.group.add(f),this.bartender=new oT,this.group.add(this.bartender.group),this.interactionPulse=new Ga(16732058),this.interactionPulse.group.position.set(0,.5,.805),this.group.add(this.interactionPulse.group)}update(t){this.bartender.update(t),this.interactionPulse.update(t)}throwShaker(){this.bartender.throwShaker()}}class lT{constructor(){this.group=new Zt,this.group.position.set(-2.35,0,4.05);const t=new kt({color:10990268,metalness:1,roughness:.12}),e=new ba({color:3416904,metalness:.15,roughness:.08,transmission:.48,transparent:!0,opacity:.78}),i=new kt({color:6813672,roughness:.68,emissive:1195842,emissiveIntensity:.5}),s=new at(new jt(.055,.075,.84,16),t);s.position.y=.46;const r=new at(new jt(.42,.5,.08,28),t);r.position.y=.04;const o=new at(new jt(.7,.7,.07,32),e);o.position.y=.91,o.castShadow=!0,this.group.add(s,r,o),[-1,1].forEach(c=>{const h=new Zt;h.position.x=c*1.08;const f=new at(new jt(.045,.06,.43,12),t);f.position.y=.24;const p=new at(new jt(.28,.34,.07,22),t);p.position.y=.035;const g=new at(new jt(.38,.34,.16,24),i);g.position.y=.51,g.castShadow=!0;const _=new at(new te(.72,.58,.13),i);_.position.set(c*.31,.78,0),_.rotation.y=Math.PI/2,_.rotation.z=c*.16,_.castShadow=!0,h.add(f,p,g,_),this.group.add(h)});const a=new at(new jt(.11,.08,.22,16),new kt({color:6813672,emissive:6813672,emissiveIntensity:.8,transparent:!0,opacity:.82}));a.position.set(.18,1.055,.04);const l=new at(new jt(.012,.012,.34,8),new Se({color:16777215}));l.position.set(.23,1.25,.04),l.rotation.z=-.18,this.group.add(a,l);const u=new Yn(6813672,5,4.2,1.7);u.position.set(0,1.8,.2),this.group.add(u)}}class cT{constructor(){this.group=new Zt,this.group.position.set(4.2,0,3.65);const t=new kt({color:11736405,metalness:.25,roughness:.42,emissive:3474199,emissiveIntensity:.35}),e=new kt({color:3234869,roughness:.7}),i=new kt({color:3581792,roughness:.62,side:Ue}),s=new at(new jt(.34,.25,.62,24),t);s.position.y=.31,s.castShadow=!0;const r=new at(new ys(.34,.045,10,24),t);r.position.y=.62,r.rotation.x=Math.PI/2,this.group.add(s,r),[{x:0,z:0,height:2.45,lean:.03},{x:-.12,z:.04,height:2.05,lean:-.12},{x:.13,z:-.04,height:2.2,lean:.13}].forEach((l,u)=>{const c=new at(new jt(.025,.04,l.height,10),e);c.position.set(l.x,.62+l.height/2,l.z),c.rotation.z=l.lean,c.castShadow=!0,this.group.add(c);for(let h=0;h<5;h++){const f=h%2===0?-1:1,p=new at(new ln(.34,16,10),i);p.scale.set(1.7,.18,.62),p.position.set(l.x+f*(.23+h*.025),1.05+h*.38+u*.05,l.z+(u-1)*.12),p.rotation.z=f*(.38+h*.08),p.rotation.y=u*.72+h*.45,p.castShadow=!0,this.group.add(p)}});const a=new Yn(6684533,3.5,3,1.8);a.position.set(0,1.5,.4),this.group.add(a)}}class uT{constructor(){this.flames=[],this.smoke=[],this.confetti=[],this.elapsed=0,this.celebrationTime=-1,this.group=new Zt,this.group.position.set(4.05,0,1.45);const t=new kt({color:11056319,metalness:1,roughness:.14}),e=new at(new jt(.78,.78,.09,32),new ba({color:2303795,metalness:.45,roughness:.18,transmission:.22}));e.position.y=.88,e.castShadow=!0;const i=new at(new jt(.06,.08,.84,16),t);i.position.y=.44;const s=new at(new jt(.4,.48,.08,28),t);s.position.y=.04,this.group.add(e,i,s);const r=new kt({color:16767208,roughness:.62,emissive:3870756,emissiveIntensity:.28}),o=new kt({color:16777215,roughness:.7}),a=new at(new jt(.56,.58,.34,32),r);a.position.y=1.09,a.castShadow=!0;const l=new at(new jt(.4,.43,.26,32),o);l.position.y=1.38,l.castShadow=!0;const u=new at(new ys(.565,.035,10,32),new kt({color:6813672,emissive:6813672,emissiveIntensity:1.1}));u.rotation.x=Math.PI/2,u.position.y=1.16,this.group.add(a,l,u);const c=document.createElement("canvas");c.width=256,c.height=160;const h=c.getContext("2d");h.textAlign="center",h.textBaseline="middle",h.font='900 132px "Trebuchet MS", sans-serif',h.shadowColor="#67f7e8",h.shadowBlur=20,h.fillStyle="#ffffff",h.fillText("60",128,84);const f=new Jn(c);f.colorSpace=$e;const p=new Eu(new Ha({map:f,transparent:!0,depthWrite:!1}));p.position.set(0,2.08,0),p.scale.set(.72,.45,1),this.group.add(p),[-.2,0,.2].forEach((_,m)=>{const d=new at(new jt(.025,.025,.28,12),new kt({color:m===1?16732058:6813672,roughness:.42}));d.position.set(_,1.65,.08);const M=new at(new ln(.055,12,10),new Se({color:16769899,transparent:!0,opacity:.95}));M.scale.y=1.7,M.position.set(_,1.86,.08),this.flames.push(M),this.group.add(d,M);for(let y=0;y<3;y++){const b=new Se({color:14542056,transparent:!0,opacity:0,depthWrite:!1}),I=new at(new ln(.045,10,8),b);I.visible=!1,this.smoke.push({mesh:I,offset:m*.23+y*.31}),this.group.add(I)}});const g=[6813672,16732058,16767053,16777215,9399295];for(let _=0;_<55;_++){const m=new at(new Te(.045,.09),new Se({color:g[_%g.length],side:Ue}));m.visible=!1,this.group.add(m),this.confetti.push({mesh:m,velocity:new O,spin:new O((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)})}this.interactionPulse=new Ga(16767053),this.interactionPulse.group.position.set(-.72,1.02,-.28),this.interactionPulse.group.rotation.y=-1.94,this.interactionPulse.setActive(!0),this.group.add(this.interactionPulse.group)}celebrate(){return this.celebrationTime>=0?!1:(this.celebrationTime=0,this.flames.forEach(t=>{t.visible=!1}),this.confetti.forEach((t,e)=>{const i=e/this.confetti.length*Math.PI*2;t.mesh.visible=!0,t.mesh.position.set(0,1.75,0),t.velocity.set(Math.cos(i)*(.45+Math.random()*.8),1.4+Math.random()*1.2,Math.sin(i)*(.45+Math.random()*.8))}),!0)}update(t){this.elapsed+=t,this.interactionPulse.update(t),this.flames.forEach((e,i)=>{const s=.88+Math.sin(this.elapsed*12+i*1.7)*.13;e.scale.set(.9+s*.1,1.45+s*.3,.9+s*.1),e.position.x+=Math.sin(this.elapsed*9+i)*6e-4}),!(this.celebrationTime<0)&&(this.celebrationTime+=t,this.smoke.forEach((e,i)=>{const s=this.celebrationTime-e.offset;if(e.mesh.visible=s>0&&s<2.2,!e.mesh.visible)return;e.mesh.position.set(-.2+i%3*.2+Math.sin(s*3+i)*.08,1.88+s*.42,.08);const r=e.mesh.material;r.opacity=Math.sin(Math.min(s/2.2,1)*Math.PI)*.38,e.mesh.scale.setScalar(1+s*1.5)}),this.confetti.forEach(e=>{e.mesh.visible&&(e.velocity.y-=t*1.65,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t,e.mesh.position.y<=.05&&(e.mesh.visible=!1))}),this.celebrationTime>5.2&&(this.celebrationTime=-1,this.flames.forEach(e=>{e.visible=!0}),this.smoke.forEach(e=>{e.mesh.visible=!1}),this.confetti.forEach(e=>{e.mesh.visible=!1})))}}class hT{constructor(){this.elapsed=0,this.ringTime=0,this.group=new Zt,this.group.position.set(1.15,2.2,4.78),this.group.rotation.y=Math.PI;const t=new kt({color:14207920,metalness:.42,roughness:.36}),e=new kt({color:1513757,metalness:.55,roughness:.3}),i=new kt({color:11976901,metalness:.95,roughness:.12}),s=new kt({color:13053244,emissive:5900050,emissiveIntensity:.8}),r=new at(new te(1.08,1.62,.34),t),o=new at(new te(.76,.62,.04),e);o.position.set(.08,.25,.19),this.group.add(r,o);const a=document.createElement("canvas");a.width=768,a.height=256;const l=a.getContext("2d");l.fillStyle="#07160e",l.fillRect(0,0,a.width,a.height),l.textAlign="center",l.textBaseline="middle",l.font="700 48px monospace",l.fillStyle="#70ff8c",l.shadowColor="#70ff8c",l.shadowBlur=18;const u=new Jn(a);u.colorSpace=$e;const c=new at(new Te(.73,.25),new Se({map:u}));c.position.set(.08,.55,.225),this.group.add(c);const h=new at(new jt(.24,.24,.055,32),i);h.rotation.x=Math.PI/2,h.position.set(.08,.08,.235),this.group.add(h);for(let C=0;C<10;C++){const P=C/10*Math.PI*2,U=new at(new jt(.035,.035,.065,12),e);U.rotation.x=Math.PI/2,U.position.set(.08+Math.cos(P)*.16,.08+Math.sin(P)*.16,.27),this.group.add(U)}const f=new at(new te(.08,.25,.035),s);f.position.set(.36,-.42,.205),this.group.add(f),this.handset=new Zt;const p=new at(new jt(.075,.075,.83,14),e),g=new ln(.15,16,10),_=new at(g,e),m=new at(g,e);_.position.y=.42,m.position.y=-.42,this.handset.add(p,_,m),this.handset.position.set(-.43,0,.31),this.group.add(this.handset);const d=new at(new ys(.22,.018,8,22,Math.PI*1.55),e);d.position.set(-.32,-.72,.22),d.rotation.z=-.35,this.group.add(d);const M=new Yn(7405452,2.5,2.2,1.8);M.position.set(0,.5,.8),this.group.add(M),this.interactionPulse=new Ga(7405452),this.interactionPulse.group.position.set(.34,-.56,.24),this.interactionPulse.setActive(!0),this.group.add(this.interactionPulse.group);const y=document.createElement("canvas");y.width=1024,y.height=384;const b=y.getContext("2d");b.fillStyle="#ffffff",b.strokeStyle="#ffffff",b.lineWidth=18,b.beginPath(),b.roundRect(35,30,930,255,70),b.moveTo(250,280),b.lineTo(170,360),b.lineTo(390,282),b.closePath(),b.fill(),b.stroke(),b.fillStyle="#000000",b.textAlign="center",b.textBaseline="middle",b.font='800 82px "Trebuchet MS", sans-serif',b.fillText("Ti aspettiamo in pista!",500,157);const I=new Jn(y);I.colorSpace=$e,this.speechBubble=new Eu(new Ha({map:I,transparent:!0,depthTest:!1})),this.speechBubble.position.set(.45,1.35,.45),this.speechBubble.scale.set(2.8,1.05,1),this.speechBubble.visible=!1,this.speechBubble.renderOrder=20,this.group.add(this.speechBubble)}update(t){this.elapsed+=t,this.ringTime=Math.max(0,this.ringTime-t),this.handset.rotation.z=this.ringTime>0?Math.sin(this.elapsed*46)*.055:0,this.speechBubble.visible=this.ringTime>0,this.interactionPulse.update(t)}updateVisibility(t){this.group.visible=t.z<4.78}ring(){this.ringTime=3.4}}class fT{constructor(){this.wallRecords=[],this.group=new Zt;const t=new jt(.34,.34,.035,32),e=new kt({color:592396,metalness:.48,roughness:.2}),i=new jt(.105,.105,.042,20),s=[16732058,6813672,16767053,16735022,9399295,6684533];[{position:[-3.55,3.58,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[-2.7,4.1,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[2.35,3.72,-4.82],rotation:[Math.PI/2,0,0],wall:"back"},{position:[4.82,3.82,-1.45],rotation:[0,0,Math.PI/2],wall:"right"},{position:[4.82,4.22,-.48],rotation:[0,0,Math.PI/2],wall:"right"},{position:[4.82,3.5,.42],rotation:[0,0,Math.PI/2],wall:"right"},{position:[-3.25,2.15,4.78],rotation:[-Math.PI/2,0,0],wall:"front"},{position:[-2.35,2.5,4.78],rotation:[-Math.PI/2,0,0],wall:"front"},{position:[-1.45,2.15,4.78],rotation:[-Math.PI/2,0,0],wall:"front"}].forEach(({position:o,rotation:a,wall:l},u)=>{const c=new Zt;c.position.set(o[0],o[1],o[2]),c.rotation.set(a[0],a[1],a[2]);const h=new at(t,e),f=new at(i,new kt({color:s[u%s.length],emissive:s[u%s.length],emissiveIntensity:.45}));f.position.y=.023,c.add(h,f),this.group.add(c),this.wallRecords.push({group:c,wall:l})})}update(t){this.wallRecords.forEach(({group:e,wall:i})=>{i==="back"&&(e.visible=t.z>-4.82),i==="front"&&(e.visible=t.z<4.78),i==="right"&&(e.visible=t.x<4.82)})}}class dT{constructor(t=new Date("2026-10-30T21:30:00+01:00")){this.confettiRain=null,this.cakeConfettiRain=null,this.cakeCelebrationTime=0,this.group=new Zt;const e=10,i=5.2;this.floor=new Jw(e,e,10),this.group.add(this.floor.mesh),this.ceiling=new Qw(e,e,i),this.group.add(this.ceiling.mesh),this.walls=new tT(e,i,e),this.group.add(this.walls.group),this.countdownBoard=new eT(t),this.group.add(this.countdownBoard.group),this.djConsole=new nT,this.group.add(this.djConsole.group),this.robotDJ=new sT,this.djConsole.group.add(this.robotDJ.group),this.movingLightRig=new rT,this.group.add(this.movingLightRig.group),this.bar=new aT,this.group.add(this.bar.group),this.loungeSet=new lT,this.group.add(this.loungeSet.group),this.tallPlant=new cT,this.group.add(this.tallPlant.group),this.birthdayCake=new uT,this.group.add(this.birthdayCake.group),this.payphone=new hT,this.group.add(this.payphone.group),this.vinylWall=new fT,this.group.add(this.vinylWall.group),this.djSign=new iT,this.group.add(this.djSign.group)}startConfetti(){this.confettiRain||(this.confettiRain=new Kf,this.group.add(this.confettiRain.group))}celebrateCake(){this.birthdayCake.celebrate()&&(this.cakeConfettiRain=new Kf,this.cakeCelebrationTime=5.2,this.group.add(this.cakeConfettiRain.group))}update(t){this.floor&&this.floor.update(t),this.countdownBoard&&this.countdownBoard.update(),this.robotDJ&&this.robotDJ.update(t),this.djConsole&&this.djConsole.update(t),this.movingLightRig&&this.movingLightRig.update(t),this.bar&&this.bar.update(t),this.birthdayCake&&this.birthdayCake.update(t),this.payphone&&this.payphone.update(t),this.confettiRain&&this.confettiRain.update(),this.cakeConfettiRain&&(this.cakeConfettiRain.update(),this.cakeCelebrationTime-=t,this.cakeCelebrationTime<=0&&(this.group.remove(this.cakeConfettiRain.group),this.cakeConfettiRain=null))}}class pT{constructor(){this.wallSpots=[],this.spotTransform=new Le,this.reflectionElapsed=.25,this.group=new Zt,this.cubeRenderTarget=new hm(128,{generateMipmaps:!1,minFilter:on}),this.cubeCamera=new cm(.1,50,this.cubeRenderTarget);const t=.68,e=new ln(t,96,48),i=new kt({color:16777215,metalness:1,roughness:0,flatShading:!0,envMap:this.cubeRenderTarget.texture,envMapIntensity:4.5});this.ballMesh=new at(e,i),this.ballMesh.castShadow=!0;const s=new jt(.008,.008,1.15),r=new kt({color:7829367,metalness:.8}),o=new at(s,r);o.position.y=.575,this.group.add(this.ballMesh,o,this.cubeCamera);const a=document.createElement("canvas");a.width=128,a.height=128;const l=a.getContext("2d"),u=l.createRadialGradient(64,64,0,64,64,64);u.addColorStop(0,"rgba(255, 230, 255, 0.55)"),u.addColorStop(.3,"rgba(220, 180, 255, 0.3)"),u.addColorStop(.65,"rgba(180, 140, 255, 0.1)"),u.addColorStop(1,"rgba(0, 0, 0, 0)"),l.fillStyle=u,l.fillRect(0,0,128,128);const c=new Jn(a),h=new Te(.42,.42),f=new Se({map:c,transparent:!0,blending:rr,depthWrite:!1,opacity:.48}),p=[-1.45,-1.2,-1,-.82,-.64,-.48,-.32,-.16,.16,.34,.54,.76],g=32;this.wallSpotMesh=new xm(h,f,p.length*g),this.wallSpotMesh.instanceMatrix.setUsage(tm),this.wallSpotMesh.frustumCulled=!1,this.group.add(this.wallSpotMesh),p.forEach((_,m)=>{for(let d=0;d<g;d++){const M=m%2===0?0:Math.PI/g;this.wallSpots.push({angle:d/g*Math.PI*2+M,heightRatio:_,scale:.82+m%3*.08})}}),this.group.position.set(0,4.05,-2.8)}update(t,e,i){this.reflectionElapsed+=t,e&&i&&this.reflectionElapsed>=.25&&(this.ballMesh.visible=!1,this.cubeCamera.update(e,i),this.ballMesh.visible=!0,this.reflectionElapsed=0);const s=.3;this.ballMesh.rotation.y+=t*s;const r=4.85,o=-3.95,a=.75;this.wallSpots.forEach((l,u)=>{l.angle+=t*s;const c=Math.sin(l.angle),h=Math.cos(l.angle),f=l.heightRatio;let p=10;if(Math.abs(c)>.001){const M=(c>0?r:-r)/c;M>0&&(p=Math.min(p,M))}if(Math.abs(h)>.001){const M=(h<0?-2.15:7.65)/h;M>0&&(p=Math.min(p,M))}if(Math.abs(f)>.001){const M=(f>0?a:o)/f;M>0&&(p=Math.min(p,M))}const g=c*p,_=f*p,m=h*p;this.spotTransform.position.set(g,_,m),this.spotTransform.scale.setScalar(l.scale),Math.abs(g-r)<.05?this.spotTransform.rotation.set(0,-Math.PI/2,0):Math.abs(g+r)<.05?this.spotTransform.rotation.set(0,Math.PI/2,0):Math.abs(_-a)<.05?this.spotTransform.rotation.set(Math.PI/2,0,0):Math.abs(_-o)<.05?this.spotTransform.rotation.set(-Math.PI/2,0,0):this.spotTransform.rotation.set(0,0,0),this.spotTransform.updateMatrix(),this.wallSpotMesh.setMatrixAt(u,this.spotTransform.matrix)}),this.wallSpotMesh.instanceMatrix.needsUpdate=!0}}class mT{constructor(){this.cornerLights=[],this.paletteIndex=0,this.group=new Zt;const t=new Ww(3478616,2.8);this.cameraSpotLight=new Mm(16777215,22),this.cameraSpotLight.position.set(0,2.4,4.9),this.cameraSpotLight.target.position.set(0,3.6,-2.8),this.cameraSpotLight.angle=Math.PI/7,this.cameraSpotLight.penumbra=.5,this.cameraSpotLight.castShadow=window.innerWidth>768;const e=new Yn(55807,18,16,1.2);e.position.set(-4.2,3,-4.2);const i=new Yn(16711816,20,16,1.2);i.position.set(4.2,3,-4.2);const s=new Yn(10289407,18,16,1.2);s.position.set(-4.2,3,3.5);const r=new Yn(16711748,18,16,1.2);r.position.set(4.2,3,3.5),this.cornerLights=[e,i,s,r];const o=new Yn(11862271,15,14);o.position.set(0,2.2,0),this.group.add(t,this.cameraSpotLight,this.cameraSpotLight.target,e,i,s,r,o)}cyclePalette(){const t=[[55807,16711816,10289407,16711748],[16767037,16735022,6684533,55807],[6813672,3501567,16732058,16777215],[12123970,16722047,16767053,9399295]];this.paletteIndex=(this.paletteIndex+1)%t.length,this.cornerLights.forEach((e,i)=>e.color.setHex(t[this.paletteIndex][i]))}}class gT{constructor(t){this.reqId=0,this.scratchResetTimer=null,this.volumeFadeId=null,this.musicStateListener=null,this.running=!0,this.handleVisibilityChange=()=>{if(document.hidden){this.running=!1,cancelAnimationFrame(this.reqId);return}this.running||(this.running=!0,this.clock.getDelta(),this.loop())},this.loop=()=>{const e=this.clock.getDelta();this.discoBall.update(e,this.renderer.instance,this.scene.instance),this.camera.update(),this.room.update(e),this.room.vinylWall.update(this.camera.instance.position),this.room.payphone.updateVisibility(this.camera.instance.position),this.room.countdownBoard.updateVisibility(this.camera.instance.position),this.room.djSign.updateVisibility(this.camera.instance.position),this.renderer.render(this.scene.instance,this.camera.instance),this.reqId=requestAnimationFrame(this.loop)},this.clock=new Sm,this.music=new Audio("/music/bacio-che-schiocca.mp3"),this.music.loop=!0,this.music.volume=.5,this.sizes=new qw(t),this.scene=new jw,this.camera=new Kw(this.sizes,t),this.renderer=new Zw(this.sizes,t),this.room=new dT,this.camera.setNavigationRoot(this.room.group),this.camera.addInteraction(this.room.robotDJ.group,()=>this.room.robotDJ.performDance()),this.room.djConsole.turntables.forEach(e=>{this.camera.addInteraction(e,()=>this.scratch())}),this.camera.addInteraction(this.room.bar.bartender.servedDrink,()=>this.room.bar.bartender.activateDrink()),this.camera.addInteraction(this.room.payphone.group,()=>this.room.payphone.ring()),this.camera.addInteraction(this.room.djConsole.group,()=>this.room.robotDJ.performDance()),this.camera.addInteraction(this.room.bar.group,()=>this.room.bar.throwShaker()),this.camera.addInteraction(this.room.birthdayCake.group,()=>this.room.celebrateCake()),this.discoBall=new pT,this.lighting=new mT,this.scene.instance.add(this.room.group,this.discoBall.group,this.lighting.group),this.sizes.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.loop()}triggerConfetti(){this.room&&this.room.startConfetti()}async startMusicWithFade(){this.volumeFadeId!==null&&cancelAnimationFrame(this.volumeFadeId),this.music.volume=0;try{await this.music.play(),this.setMusicVisuals(!0);const t=performance.now(),e=i=>{const s=Math.min((i-t)/2e3,1);this.music.volume=s*.5,s<1?this.volumeFadeId=requestAnimationFrame(e):this.volumeFadeId=null};this.volumeFadeId=requestAnimationFrame(e)}catch{this.setMusicVisuals(!1)}}toggleMusic(){if(this.music.paused){this.music.play().then(()=>this.setMusicVisuals(!0)).catch(()=>this.setMusicVisuals(!1));return}this.music.pause(),this.setMusicVisuals(!1)}setMusicVolume(t){this.volumeFadeId!==null&&(cancelAnimationFrame(this.volumeFadeId),this.volumeFadeId=null),this.music.volume=Math.min(Math.max(t,0),1)}onMusicStateChange(t){this.musicStateListener=t}setMusicVisuals(t){this.room.djConsole.setPlaying(t),this.room.robotDJ.setPlaying(t),this.musicStateListener?.(t)}scratch(){this.room.djConsole.scratch(),this.room.movingLightRig.boost(),this.music.paused||(this.music.playbackRate=1.35),this.scratchResetTimer!==null&&window.clearTimeout(this.scratchResetTimer),this.scratchResetTimer=window.setTimeout(()=>{this.music.playbackRate=1,this.scratchResetTimer=null},1100)}resize(){this.camera.resize(),this.renderer.resize()}destroy(){this.running=!1,cancelAnimationFrame(this.reqId),document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.music.pause(),this.music.src="",this.volumeFadeId!==null&&cancelAnimationFrame(this.volumeFadeId),this.scratchResetTimer!==null&&window.clearTimeout(this.scratchResetTimer),this.renderer.instance.dispose()}}const _T={key:0,class:"welcome-screen","aria-labelledby":"welcome-title"},vT=["title","aria-label"],xT={class:"material-symbols-rounded"},yT={class:"volume-control"},MT={class:"material-symbols-rounded","aria-hidden":"true"},ST={class:"drawer-content"},bT={class:"drawer-body"},ET={key:0},wT={key:1,class:"form-section"},TT={key:0,class:"status-panel success-section"},AT={key:1,class:"add-person-hint"},RT={class:"input-group"},CT={class:"input-group"},PT={class:"input-group"},LT={key:0,class:"error-message"},IT=["disabled"],DT={key:2},UT={class:"section-heading"},NT={class:"panel-title"},OT={class:"subtitle"},FT={class:"guest-filters"},BT={class:"filter-field search-field"},zT={key:0,class:"state-filter",role:"group","aria-label":"Filtra per stato"},kT=["title","aria-label","aria-pressed","onClick"],HT={class:"material-symbols-rounded"},VT={key:0,class:"empty-state"},GT={key:1,class:"empty-state"},WT={key:2,class:"guest-list"},XT=["title"],qT={class:"guest-details"},jT={key:0},YT=["aria-label"],$T=["disabled","title","aria-label","onClick"],KT={key:0,class:"status-loader","aria-hidden":"true"},ZT={key:1,class:"material-symbols-rounded"},JT={key:3,class:"reserved-section"},QT={class:"input-group"},t1={class:"input-group"},e1={key:0,class:"error-message"},n1=["disabled"],i1={class:"bottom-nav","aria-label":"Navigazione pannello"},s1=["title","aria-label","onClick"],r1={class:"material-symbols-rounded"},o1=Tg({__name:"RoomScene",setup(n){const t=me(null);let e=null;const i=me(!0),s=me(!1),r=me(!1),o=me(!1),a=me(50),l=me(!1),u=me("info"),c=me(!1),h=me(""),f=me(""),p=me(""),g=me(""),_=me(""),m=me(!1),d=me(!1),M=me([]),y=me(!1),b=me(""),I=me(""),C=me(""),P=me(!1),U=me(null),w=me(null),E=me(""),L=me("all");let D=null;const H=[{id:"info",icon:"info",label:"Info"},{id:"register",icon:"person_add",label:"Registrati"},{id:"guests",icon:"groups",label:"Lista invitati"},{id:"reserved",icon:"lock",label:"Area riservata"}],K=[{value:0,label:"In attesa",icon:"hourglass_top"},{value:1,label:"Confermato",icon:"check_circle"},{value:2,label:"Rifiutato",icon:"cancel"}],rt=K.filter(V=>V.value!==0),Y=V=>rt.filter(R=>V===0||R.value!==V),nt=[{value:"all",label:"Tutti gli stati",icon:"groups"},{value:"0",label:"In attesa",icon:"hourglass_top"},{value:"1",label:"Confermati",icon:"check_circle"},{value:"2",label:"Rifiutati",icon:"cancel"}],q=V=>K.find(R=>R.value===V)?.label??"Confermato",_t=cp(()=>{const V=E.value.toLocaleLowerCase("it");return M.value.filter(R=>{const B=`${R.nome} ${R.cognome}`.toLocaleLowerCase("it"),et=!V||B.includes(V),it=!y.value||L.value==="all"||R.approved===Number(L.value);return et&&it}).sort((R,B)=>y.value&&R.approved!==B.approved?(R.approved??0)-(B.approved??0):`${R.nome} ${R.cognome}`.localeCompare(`${B.nome} ${B.cognome}`,"it"))}),vt=()=>{l.value=!0},pt=()=>{D!==null&&window.clearTimeout(D),D=window.setTimeout(()=>{o.value=!0,D=null},5e3)},Lt=()=>{o.value=!1,pt()},qt=()=>{i.value=!1,s.value=!0,pt(),e?.startMusicWithFade()},ot=()=>{e?.toggleMusic()},dt=()=>{e?.setMusicVolume(a.value/100)},ut=()=>{l.value=!1,setTimeout(()=>{u.value="info",c.value=!1},300)},mt=async()=>{d.value=!0;try{const V=y.value?"/area-riservata/invitati":"/invitati",R=await he.get(V);M.value=R.data}catch(V){he.isAxiosError(V)&&V.response?.status===401&&(y.value=!1,u.value="reserved")}finally{d.value=!1}},It=V=>{const R=document.querySelector('meta[name="csrf-token"]');R&&(R.content=V)},Bt=async V=>{if(V==="reserved"){const R=await he.get("/area-riservata/status");if(y.value=R.data.authenticated,It(R.data.csrf_token),y.value){u.value="guests",await mt();return}}u.value=V,V==="guests"&&await mt()},Ft=()=>{const V=document.querySelector('meta[name="csrf-token"]')?.content;return V?{"X-CSRF-TOKEN":V}:{}},ee=async()=>{if(!(!f.value||!p.value||!g.value)){m.value=!0,_.value="";try{await he.post("/invitati",{nome:f.value,cognome:p.value,invitato_da:g.value},{headers:Ft()}),e?.triggerConfetti(),h.value=f.value,c.value=!0,f.value="",p.value="",g.value=""}catch{_.value="Non è stato possibile inviare la richiesta. Riprova."}finally{m.value=!1}}},v=async()=>{P.value=!0,C.value="";try{const V=await he.post("/area-riservata/login",{email:b.value,password:I.value},{headers:Ft()});It(V.data.csrf_token),y.value=!0,I.value="",e?.triggerConfetti(),u.value="guests",await mt()}catch{C.value="Email o password non corrette."}finally{P.value=!1}},N=async()=>{const V=await he.post("/area-riservata/logout",{},{headers:Ft()});It(V.data.csrf_token),y.value=!1,M.value=[],E.value="",L.value="all",u.value="reserved"},X=async(V,R)=>{if(V.approved!==R){U.value=V.id,w.value=R===0?null:R;try{const B=await he.patch(`/area-riservata/invitati/${V.id}`,{approved:R},{headers:Ft()});Object.assign(V,B.data)}finally{U.value=null,w.value=null}}};return Qc(()=>{t.value&&(e=new gT(t.value),e.onMusicStateChange(V=>{r.value=V}))}),tu(()=>{D!==null&&window.clearTimeout(D),e?.destroy()}),(V,R)=>(ue(),ge("div",null,[yt("div",{ref_key:"canvasContainer",ref:t,class:"room-container"},null,512),an(C0,{name:"welcome"},{default:Ad(()=>[i.value?(ue(),ge("section",_T,[yt("div",{class:"welcome-content"},[R[10]||(R[10]=yt("p",{class:"welcome-eyebrow"},"'66 CELEBRATION",-1)),R[11]||(R[11]=yt("h1",{id:"welcome-title"},[Dr("UN INVITO"),yt("br"),Dr("PER TE")],-1)),R[12]||(R[12]=yt("div",{class:"explore-globe","aria-hidden":"true"},[yt("span",{class:"globe-ring globe-ring-horizontal"}),yt("span",{class:"globe-ring globe-ring-vertical"}),yt("span",{class:"globe-core material-symbols-rounded"},"open_with")],-1)),R[13]||(R[13]=yt("p",{class:"welcome-hint"},"Entra ed interagisci con gli oggetti",-1)),yt("button",{type:"button",class:"welcome-button",onClick:qt},[...R[9]||(R[9]=[Dr(" Entra nella festa ",-1),yt("span",{class:"material-symbols-rounded"},"arrow_forward",-1)])])])])):Un("",!0)]),_:1}),s.value?(ue(),ge("aside",{key:0,class:ci(["music-player",{minimized:o.value}]),"aria-label":"Controlli musica",onPointerdownCapture:Lt,onFocusin:Lt},[R[14]||(R[14]=yt("a",{class:"album-link",href:"https://open.spotify.com/intl-it/track/2C1cH4RmDkUBuFGVZN8T10?si=ef9c2b271c124b8d",target:"_blank",rel:"noopener noreferrer",title:"Apri Bacio che schiocca su Spotify","aria-label":"Apri Bacio che schiocca su Spotify"},[yt("img",{src:"/images/bacio_che_schiocca.png",alt:"Copertina di Bacio che schiocca"}),yt("img",{class:"spotify-badge",src:"/images/spotify.webp",alt:"","aria-hidden":"true"})],-1)),R[15]||(R[15]=yt("div",{class:"track-info"},[yt("strong",null,"Bacio che schiocca"),yt("span",null,"Marco Rossi")],-1)),yt("button",{type:"button",class:"player-control",title:r.value?"Pausa":"Riproduci","aria-label":r.value?"Metti in pausa":"Riproduci",onClick:ot},[yt("span",xT,ze(r.value?"pause":"play_arrow"),1)],8,vT),yt("label",yT,[yt("span",MT,ze(a.value===0?"volume_off":"volume_up"),1),Hi(yt("input",{"onUpdate:modelValue":R[0]||(R[0]=B=>a.value=B),type:"range",min:"0",max:"100",step:"1","aria-label":"Volume musica",style:Wr({"--volume-level":`${a.value}%`}),onInput:dt},null,36),[[qi,a.value,void 0,{number:!0}]]),yt("output",null,ze(a.value)+"%",1)])],34)):Un("",!0),yt("button",{id:"info-btn",class:"party-btn",onClick:vt,style:Wr({opacity:l.value?"0":"1",pointerEvents:l.value?"none":"auto"})}," INFO FESTA ",4),yt("section",{id:"info-drawer",class:ci(["drawer",{open:l.value}]),"aria-label":"Dettagli festa"},[yt("div",ST,[yt("button",{id:"close-btn",class:"icon-button close-btn",title:"Chiudi","aria-label":"Chiudi",onClick:ut},[...R[16]||(R[16]=[yt("span",{class:"material-symbols-rounded"},"close",-1)])]),yt("div",bT,[u.value==="info"?(ue(),ge("div",ET,[R[17]||(R[17]=f0('<p class="eyebrow" style="font-size:1.2rem;margin:0;" data-v-c20cce51>&#39;66 CELEBRATION</p><h2 class="panel-title" data-v-c20cce51>INGRESSO LIBERO</h2><p class="subtitle" style="font-size:1.2rem;margin-top:0;" data-v-c20cce51>Massimo 300 ingressi</p><div class="info-grid" data-v-c20cce51><div class="info-item" data-v-c20cce51><span class="material-symbols-rounded" data-v-c20cce51>calendar_month</span><div data-v-c20cce51><small data-v-c20cce51>DATA E ORA</small><strong data-v-c20cce51>30 ottobre 2026 · 21:30</strong></div></div><div class="info-item" data-v-c20cce51><span class="material-symbols-rounded" data-v-c20cce51>location_on</span><div data-v-c20cce51><small data-v-c20cce51>LUOGO</small><strong data-v-c20cce51>TOTEM · Via Vecchia Ferriera, 135, Vicenza</strong></div></div></div>',4)),yt("button",{class:"primary-button",onClick:R[1]||(R[1]=B=>Bt("register"))},"Conferma la presenza")])):u.value==="register"?(ue(),ge("div",wT,[R[24]||(R[24]=yt("p",{class:"eyebrow"},"REGISTRAZIONE",-1)),R[25]||(R[25]=yt("h2",{class:"panel-title"},"Lascia i tuoi dati",-1)),R[26]||(R[26]=yt("p",{class:"subtitle"},"la presenza sarà confermata dall'organizzatore.",-1)),c.value?(ue(),ge("div",TT,[R[18]||(R[18]=yt("span",{class:"material-symbols-rounded"},"check_circle",-1)),R[19]||(R[19]=yt("strong",null,"Richiesta inviata",-1)),yt("p",null,"Registrazione avvenuta con successo. Ci vediamo in pista, "+ze(h.value)+".",1)])):Un("",!0),c.value?(ue(),ge("p",AT,"Aggiungi un altra persona")):Un("",!0),yt("form",{onSubmit:_h(ee,["prevent"])},[yt("label",RT,[R[20]||(R[20]=yt("span",null,"Nome",-1)),Hi(yt("input",{"onUpdate:modelValue":R[2]||(R[2]=B=>f.value=B),maxlength:"50",autocomplete:"given-name",required:"",class:"input-field"},null,512),[[qi,f.value,void 0,{trim:!0}]])]),yt("label",CT,[R[21]||(R[21]=yt("span",null,"Cognome",-1)),Hi(yt("input",{"onUpdate:modelValue":R[3]||(R[3]=B=>p.value=B),maxlength:"50",autocomplete:"family-name",required:"",class:"input-field"},null,512),[[qi,p.value,void 0,{trim:!0}]])]),yt("label",PT,[R[22]||(R[22]=yt("span",null,"Invitato da",-1)),Hi(yt("input",{"onUpdate:modelValue":R[4]||(R[4]=B=>g.value=B),maxlength:"100",required:"",class:"input-field"},null,512),[[qi,g.value,void 0,{trim:!0}]])]),_.value?(ue(),ge("p",LT,ze(_.value),1)):Un("",!0),yt("button",{class:"primary-button",type:"submit",disabled:m.value},ze(m.value?"Invio in corso...":"Invia richiesta"),9,IT)],32),yt("button",{class:"guest-list-button",type:"button",onClick:R[5]||(R[5]=B=>Bt("guests"))},[...R[23]||(R[23]=[yt("span",{class:"material-symbols-rounded"},"groups",-1),Dr(" Lista invitati ",-1)])])])):u.value==="guests"?(ue(),ge("div",DT,[R[29]||(R[29]=yt("p",{class:"eyebrow"},"GUEST LIST",-1)),yt("div",UT,[yt("div",null,[yt("h2",NT,ze(y.value?"Gestione invitati":"Lista invitati"),1),yt("p",OT,ze(y.value?"Controlla e aggiorna tutte le richieste.":"Le presenze già confermate."),1)]),y.value?(ue(),ge("button",{key:0,class:"icon-button logout-button",title:"Esci","aria-label":"Esci",onClick:N},[...R[27]||(R[27]=[yt("span",{class:"material-symbols-rounded"},"logout",-1)])])):Un("",!0)]),yt("div",FT,[yt("label",BT,[R[28]||(R[28]=yt("span",{class:"material-symbols-rounded"},"search",-1)),Hi(yt("input",{"onUpdate:modelValue":R[6]||(R[6]=B=>E.value=B),type:"search",placeholder:"Cerca nome o cognome","aria-label":"Cerca invitato"},null,512),[[qi,E.value,void 0,{trim:!0}]])]),y.value?(ue(),ge("div",zT,[(ue(),ge(hn,null,_o(nt,B=>yt("button",{key:B.value,type:"button",class:ci(["state-filter-button",[{active:L.value===B.value},`filter-${B.value}`]]),title:B.label,"aria-label":B.label,"aria-pressed":L.value===B.value,onClick:et=>L.value=B.value},[yt("span",HT,ze(B.icon),1)],10,kT)),64))])):Un("",!0)]),d.value?(ue(),ge("div",VT,"Caricamento...")):_t.value.length===0?(ue(),ge("div",GT,ze(M.value.length>0?"Nessun invitato corrisponde ai filtri.":y.value?"Non ci sono ancora richieste.":"Nessun invitato ancora confermato."),1)):(ue(),ge("ul",WT,[(ue(!0),ge(hn,null,_o(_t.value,B=>(ue(),ge("li",{key:B.id},[yt("span",{class:ci(["material-symbols-rounded guest-status-icon",`guest-status-${B.approved??1}`]),title:q(B.approved??1)},"person",10,XT),yt("div",qT,[yt("strong",null,ze(B.nome)+" "+ze(B.cognome),1),y.value?(ue(),ge("small",jT,"Invitato da "+ze(B.invitato_da),1)):Un("",!0)]),y.value?(ue(),ge("div",{key:0,class:"status-control",role:"group","aria-label":`Stato invito di ${B.nome} ${B.cognome}`},[(ue(!0),ge(hn,null,_o(Y(B.approved),et=>(ue(),ge("button",{key:et.value,type:"button",class:ci(["status-button",`status-${et.value}`]),disabled:U.value===B.id,title:et.label,"aria-label":`${et.label}: ${B.nome} ${B.cognome}`,onClick:it=>X(B,et.value)},[U.value===B.id&&w.value===et.value?(ue(),ge("span",KT)):(ue(),ge("span",ZT,ze(et.icon),1))],10,$T))),128))],8,YT)):Un("",!0)]))),128))]))])):(ue(),ge("div",JT,[R[32]||(R[32]=yt("span",{class:"material-symbols-rounded lock-icon"},"admin_panel_settings",-1)),R[33]||(R[33]=yt("p",{class:"eyebrow"},"AREA RISERVATA",-1)),R[34]||(R[34]=yt("p",{class:"subtitle"},"Accedi per gestire le richieste degli invitati.",-1)),yt("form",{class:"login-form",onSubmit:_h(v,["prevent"])},[yt("label",QT,[R[30]||(R[30]=yt("span",null,"Email",-1)),Hi(yt("input",{"onUpdate:modelValue":R[7]||(R[7]=B=>b.value=B),type:"email",autocomplete:"username",required:"",class:"input-field"},null,512),[[qi,b.value,void 0,{trim:!0}]])]),yt("label",t1,[R[31]||(R[31]=yt("span",null,"Password",-1)),Hi(yt("input",{"onUpdate:modelValue":R[8]||(R[8]=B=>I.value=B),type:"password",autocomplete:"current-password",required:"",class:"input-field"},null,512),[[qi,I.value]])]),C.value?(ue(),ge("p",e1,ze(C.value),1)):Un("",!0),yt("button",{class:"primary-button",type:"submit",disabled:P.value},ze(P.value?"Accesso...":"Accedi"),9,n1)],32)]))]),yt("nav",i1,[(ue(),ge(hn,null,_o(H,B=>yt("button",{key:B.id,class:ci(["nav-button",{active:u.value===B.id}]),title:B.label,"aria-label":B.label,onClick:et=>Bt(B.id)},[yt("span",r1,ze(B.icon),1)],10,s1)),64))])])],2)]))}}),a1=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},l1=a1(o1,[["__scopeId","data-v-c20cce51"]]),c1={__name:"App",setup(n){return(t,e)=>(ue(),sp(l1))}};window.axios=he;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const u1=i_(c1);u1.mount("#app");
