(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ql(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const me={},wr=[],kt=()=>{},m_=()=>!1,__=/^on[^a-z]/,ko=t=>__.test(t),Xl=t=>t.startsWith("onUpdate:"),Le=Object.assign,Jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y_=Object.prototype.hasOwnProperty,re=(t,e)=>y_.call(t,e),q=Array.isArray,Tr=t=>Oo(t)==="[object Map]",Gf=t=>Oo(t)==="[object Set]",G=t=>typeof t=="function",Oe=t=>typeof t=="string",Yl=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",Qf=t=>ye(t)&&G(t.then)&&G(t.catch),Xf=Object.prototype.toString,Oo=t=>Xf.call(t),v_=t=>Oo(t).slice(8,-1),Jf=t=>Oo(t)==="[object Object]",Zl=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fi=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},E_=/-(\w)/g,Gt=No(t=>t.replace(E_,(e,n)=>n?n.toUpperCase():"")),I_=/\B([A-Z])/g,Hr=No(t=>t.replace(I_,"-$1").toLowerCase()),Do=No(t=>t.charAt(0).toUpperCase()+t.slice(1)),Aa=No(t=>t?`on${Do(t)}`:""),Ps=(t,e)=>!Object.is(t,e),Bi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cu;const rl=()=>Cu||(Cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ec(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?R_(r):ec(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Oe(t))return t;if(ye(t))return t}}const w_=/;(?![^(]*\))/g,T_=/:([^]+)/,A_=/\/\*[^]*?\*\//g;function R_(t){const e={};return t.replace(A_,"").split(w_).forEach(n=>{if(n){const r=n.split(T_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ss(t){let e="";if(Oe(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=Ss(t[n]);r&&(e+=r+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const b_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P_=Ql(b_);function Yf(t){return!!t||t===""}const Vt=t=>Oe(t)?t:t==null?"":q(t)||ye(t)&&(t.toString===Xf||!G(t.toString))?JSON.stringify(t,Zf,2):String(t),Zf=(t,e)=>e&&e.__v_isRef?Zf(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Gf(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!q(e)&&!Jf(e)?String(e):e;let ft;class ed{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function td(t){return new ed(t)}function S_(t,e=ft){e&&e.active&&e.effects.push(t)}function tc(){return ft}function nd(t){ft&&ft.cleanups.push(t)}const nc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},rd=t=>(t.w&Cn)>0,sd=t=>(t.n&Cn)>0,C_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},k_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];rd(s)&&!sd(s)?s.delete(t):e[n++]=s,s.w&=~Cn,s.n&=~Cn}e.length=n}},Zi=new WeakMap;let os=0,Cn=1;const sl=30;let bt;const zn=Symbol(""),il=Symbol("");class rc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,S_(this,r)}run(){if(!this.active)return this.fn();let e=bt,n=An;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,An=!0,Cn=1<<++os,os<=sl?C_(this):ku(this),this.fn()}finally{os<=sl&&k_(this),Cn=1<<--os,bt=this.parent,An=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(ku(this),this.onStop&&this.onStop(),this.active=!1)}}function ku(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let An=!0;const id=[];function qr(){id.push(An),An=!1}function Kr(){const t=id.pop();An=t===void 0?!0:t}function lt(t,e,n){if(An&&bt){let r=Zi.get(t);r||Zi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=nc()),od(s)}}function od(t,e){let n=!1;os<=sl?sd(t)||(t.n|=Cn,n=!rd(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function ln(t,e,n,r,s,i){const o=Zi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Zl(n)&&a.push(o.get("length")):(a.push(o.get(zn)),Tr(t)&&a.push(o.get(il)));break;case"delete":q(t)||(a.push(o.get(zn)),Tr(t)&&a.push(o.get(il)));break;case"set":Tr(t)&&a.push(o.get(zn));break}if(a.length===1)a[0]&&ol(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ol(nc(l))}}function ol(t,e){const n=q(t)?t:[...t];for(const r of n)r.computed&&Ou(r);for(const r of n)r.computed||Ou(r)}function Ou(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function O_(t,e){var n;return(n=Zi.get(t))==null?void 0:n.get(e)}const N_=Ql("__proto__,__v_isRef,__isVue"),ad=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yl)),D_=sc(),x_=sc(!1,!0),M_=sc(!0),Nu=V_();function V_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ne(this);for(let i=0,o=this.length;i<o;i++)lt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ne)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qr();const r=ne(this)[e].apply(this,n);return Kr(),r}}),t}function L_(t){const e=ne(this);return lt(e,"has",t),e.hasOwnProperty(t)}function sc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Z_:fd:e?hd:ud).get(r))return r;const o=q(r);if(!t){if(o&&re(Nu,s))return Reflect.get(Nu,s,i);if(s==="hasOwnProperty")return L_}const a=Reflect.get(r,s,i);return(Yl(s)?ad.has(s):N_(s))||(t||lt(r,"get",s),e)?a:Ae(a)?o&&Zl(s)?a:a.value:ye(a)?t?dd(a):Wr(a):a}}const U_=ld(),F_=ld(!0);function ld(t=!1){return function(n,r,s,i){let o=n[r];if(Or(o)&&Ae(o)&&!Ae(s))return!1;if(!t&&(!eo(s)&&!Or(s)&&(o=ne(o),s=ne(s)),!q(n)&&Ae(o)&&!Ae(s)))return o.value=s,!0;const a=q(n)&&Zl(r)?Number(r)<n.length:re(n,r),l=Reflect.set(n,r,s,i);return n===ne(i)&&(a?Ps(s,o)&&ln(n,"set",r,s):ln(n,"add",r,s)),l}}function B_(t,e){const n=re(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ln(t,"delete",e,void 0),r}function $_(t,e){const n=Reflect.has(t,e);return(!Yl(e)||!ad.has(e))&&lt(t,"has",e),n}function j_(t){return lt(t,"iterate",q(t)?"length":zn),Reflect.ownKeys(t)}const cd={get:D_,set:U_,deleteProperty:B_,has:$_,ownKeys:j_},H_={get:M_,set(t,e){return!0},deleteProperty(t,e){return!0}},q_=Le({},cd,{get:x_,set:F_}),ic=t=>t,xo=t=>Reflect.getPrototypeOf(t);function Ii(t,e,n=!1,r=!1){t=t.__v_raw;const s=ne(t),i=ne(e);n||(e!==i&&lt(s,"get",e),lt(s,"get",i));const{has:o}=xo(s),a=r?ic:n?lc:Cs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function wi(t,e=!1){const n=this.__v_raw,r=ne(n),s=ne(t);return e||(t!==s&&lt(r,"has",t),lt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ti(t,e=!1){return t=t.__v_raw,!e&&lt(ne(t),"iterate",zn),Reflect.get(t,"size",t)}function Du(t){t=ne(t);const e=ne(this);return xo(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function xu(t,e){e=ne(e);const n=ne(this),{has:r,get:s}=xo(n);let i=r.call(n,t);i||(t=ne(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ps(e,o)&&ln(n,"set",t,e):ln(n,"add",t,e),this}function Mu(t){const e=ne(this),{has:n,get:r}=xo(e);let s=n.call(e,t);s||(t=ne(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ln(e,"delete",t,void 0),i}function Vu(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function Ai(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ne(o),l=e?ic:t?lc:Cs;return!t&&lt(a,"iterate",zn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ri(t,e,n){return function(...r){const s=this.__v_raw,i=ne(s),o=Tr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?ic:e?lc:Cs;return!e&&lt(i,"iterate",l?il:zn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function pn(t){return function(...e){return t==="delete"?!1:this}}function K_(){const t={get(i){return Ii(this,i)},get size(){return Ti(this)},has:wi,add:Du,set:xu,delete:Mu,clear:Vu,forEach:Ai(!1,!1)},e={get(i){return Ii(this,i,!1,!0)},get size(){return Ti(this)},has:wi,add:Du,set:xu,delete:Mu,clear:Vu,forEach:Ai(!1,!0)},n={get(i){return Ii(this,i,!0)},get size(){return Ti(this,!0)},has(i){return wi.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Ai(!0,!1)},r={get(i){return Ii(this,i,!0,!0)},get size(){return Ti(this,!0)},has(i){return wi.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Ai(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ri(i,!1,!1),n[i]=Ri(i,!0,!1),e[i]=Ri(i,!1,!0),r[i]=Ri(i,!0,!0)}),[t,n,e,r]}const[W_,z_,G_,Q_]=K_();function oc(t,e){const n=e?t?Q_:G_:t?z_:W_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,i)}const X_={get:oc(!1,!1)},J_={get:oc(!1,!0)},Y_={get:oc(!0,!1)},ud=new WeakMap,hd=new WeakMap,fd=new WeakMap,Z_=new WeakMap;function ey(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ty(t){return t.__v_skip||!Object.isExtensible(t)?0:ey(v_(t))}function Wr(t){return Or(t)?t:ac(t,!1,cd,X_,ud)}function ny(t){return ac(t,!1,q_,J_,hd)}function dd(t){return ac(t,!0,H_,Y_,fd)}function ac(t,e,n,r,s){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ty(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function on(t){return Or(t)?on(t.__v_raw):!!(t&&t.__v_isReactive)}function Or(t){return!!(t&&t.__v_isReadonly)}function eo(t){return!!(t&&t.__v_isShallow)}function pd(t){return on(t)||Or(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Mo(t){return Yi(t,"__v_skip",!0),t}const Cs=t=>ye(t)?Wr(t):t,lc=t=>ye(t)?dd(t):t;function gd(t){An&&bt&&(t=ne(t),od(t.dep||(t.dep=nc())))}function md(t,e){t=ne(t);const n=t.dep;n&&ol(n)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function Et(t){return _d(t,!1)}function ry(t){return _d(t,!0)}function _d(t,e){return Ae(t)?t:new sy(t,e)}class sy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:Cs(e)}get value(){return gd(this),this._value}set value(e){const n=this.__v_isShallow||eo(e)||Or(e);e=n?e:ne(e),Ps(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Cs(e),md(this))}}function we(t){return Ae(t)?t.value:t}const iy={get:(t,e,n)=>we(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ae(s)&&!Ae(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function yd(t){return on(t)?t:new Proxy(t,iy)}function oy(t){const e=q(t)?new Array(t.length):{};for(const n in t)e[n]=vd(t,n);return e}class ay{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return O_(ne(this._object),this._key)}}class ly{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function cy(t,e,n){return Ae(t)?t:G(t)?new ly(t):ye(t)&&arguments.length>1?vd(t,e,n):Et(t)}function vd(t,e,n){const r=t[e];return Ae(r)?r:new ay(t,e,n)}class uy{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new rc(e,()=>{this._dirty||(this._dirty=!0,md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ne(this);return gd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hy(t,e,n=!1){let r,s;const i=G(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new uy(r,s,i||!s,n)}function Rn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Vo(i,e,n)}return s}function Ot(t,e,n,r){if(G(t)){const i=Rn(t,e,n,r);return i&&Qf(i)&&i.catch(o=>{Vo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ot(t[i],e,n,r));return s}function Vo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Rn(l,null,10,[t,o,a]);return}}fy(t,n,s,r)}function fy(t,e,n,r=!0){console.error(t)}let ks=!1,al=!1;const Xe=[];let Ut=0;const Ar=[];let en=null,Bn=0;const Ed=Promise.resolve();let cc=null;function uc(t){const e=cc||Ed;return t?e.then(this?t.bind(this):t):e}function dy(t){let e=Ut+1,n=Xe.length;for(;e<n;){const r=e+n>>>1;Os(Xe[r])<t?e=r+1:n=r}return e}function hc(t){(!Xe.length||!Xe.includes(t,ks&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?Xe.push(t):Xe.splice(dy(t.id),0,t),Id())}function Id(){!ks&&!al&&(al=!0,cc=Ed.then(Td))}function py(t){const e=Xe.indexOf(t);e>Ut&&Xe.splice(e,1)}function gy(t){q(t)?Ar.push(...t):(!en||!en.includes(t,t.allowRecurse?Bn+1:Bn))&&Ar.push(t),Id()}function Lu(t,e=ks?Ut+1:0){for(;e<Xe.length;e++){const n=Xe[e];n&&n.pre&&(Xe.splice(e,1),e--,n())}}function wd(t){if(Ar.length){const e=[...new Set(Ar)];if(Ar.length=0,en){en.push(...e);return}for(en=e,en.sort((n,r)=>Os(n)-Os(r)),Bn=0;Bn<en.length;Bn++)en[Bn]();en=null,Bn=0}}const Os=t=>t.id==null?1/0:t.id,my=(t,e)=>{const n=Os(t)-Os(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Td(t){al=!1,ks=!0,Xe.sort(my);const e=kt;try{for(Ut=0;Ut<Xe.length;Ut++){const n=Xe[Ut];n&&n.active!==!1&&Rn(n,null,14)}}finally{Ut=0,Xe.length=0,wd(),ks=!1,cc=null,(Xe.length||Ar.length)&&Td()}}function _y(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||me;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||me;f&&(s=n.map(g=>Oe(g)?g.trim():g)),h&&(s=n.map(nl))}let a,l=r[a=Aa(e)]||r[a=Aa(Gt(e))];!l&&i&&(l=r[a=Aa(Hr(e))]),l&&Ot(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(c,t,6,s)}}function Ad(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Ad(c,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ye(t)&&r.set(t,null),null):(q(i)?i.forEach(l=>o[l]=null):Le(o,i),ye(t)&&r.set(t,o),o)}function Lo(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Hr(e))||re(t,e))}let pt=null,Uo=null;function to(t){const e=pt;return pt=t,Uo=t&&t.type.__scopeId||null,e}function Fo(t){Uo=t}function Bo(){Uo=null}function as(t,e=pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qu(-1);const i=to(e);let o;try{o=t(...s)}finally{to(i),r._d&&Qu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ra(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:_,inheritAttrs:A}=t;let T,S;const N=to(t);try{if(n.shapeFlag&4){const C=s||r;T=Lt(u.call(C,C,h,i,g,f,_)),S=l}else{const C=e;T=Lt(C.length>1?C(i,{attrs:l,slots:a,emit:c}):C(i,null)),S=e.props?l:yy(l)}}catch(C){ms.length=0,Vo(C,t,1),T=Ie(Zn)}let L=T;if(S&&A!==!1){const C=Object.keys(S),{shapeFlag:Y}=L;C.length&&Y&7&&(o&&C.some(Xl)&&(S=vy(S,o)),L=Nr(L,S))}return n.dirs&&(L=Nr(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),T=L,to(N),T}const yy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},vy=(t,e)=>{const n={};for(const r in t)(!Xl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ey(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Uu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Lo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Uu(r,o,c):!0:!!o;return!1}function Uu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Lo(n,i))return!0}return!1}function Iy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const wy=t=>t.__isSuspense;function Ty(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):gy(t)}const bi={};function Rr(t,e,n){return Rd(t,e,n)}function Rd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=me){var a;const l=tc()===((a=xe)==null?void 0:a.scope)?xe:null;let c,u=!1,h=!1;if(Ae(t)?(c=()=>t.value,u=eo(t)):on(t)?(c=()=>t,r=!0):q(t)?(h=!0,u=t.some(C=>on(C)||eo(C)),c=()=>t.map(C=>{if(Ae(C))return C.value;if(on(C))return jn(C);if(G(C))return Rn(C,l,2)})):G(t)?e?c=()=>Rn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Ot(t,l,3,[g])}:c=kt,e&&r){const C=c;c=()=>jn(C())}let f,g=C=>{f=N.onStop=()=>{Rn(C,l,4)}},_;if(xs)if(g=kt,e?n&&Ot(e,l,3,[c(),h?[]:void 0,g]):c(),s==="sync"){const C=Iv();_=C.__watcherHandles||(C.__watcherHandles=[])}else return kt;let A=h?new Array(t.length).fill(bi):bi;const T=()=>{if(N.active)if(e){const C=N.run();(r||u||(h?C.some((Y,le)=>Ps(Y,A[le])):Ps(C,A)))&&(f&&f(),Ot(e,l,3,[C,A===bi?void 0:h&&A[0]===bi?[]:A,g]),A=C)}else N.run()};T.allowRecurse=!!e;let S;s==="sync"?S=T:s==="post"?S=()=>at(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),S=()=>hc(T));const N=new rc(c,S);e?n?T():A=N.run():s==="post"?at(N.run.bind(N),l&&l.suspense):N.run();const L=()=>{N.stop(),l&&l.scope&&Jl(l.scope.effects,N)};return _&&_.push(L),L}function Ay(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?bd(r,t):()=>r[t]:t.bind(r,r);let i;G(e)?i=e:(i=e.handler,n=e);const o=xe;Dr(this);const a=Rd(s,i.bind(r),n);return o?Dr(o):Gn(),a}function bd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function jn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))jn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)jn(t[n],e);else if(Gf(t)||Tr(t))t.forEach(n=>{jn(n,e)});else if(Jf(t))for(const n in t)jn(t[n],e);return t}function Fu(t,e){const n=pt;if(n===null)return t;const r=qo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=me]=e[i];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&jn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ln(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(qr(),Ot(l,n,8,[t.el,a,t,e]),Kr())}}function Pd(t,e){return G(t)?(()=>Le({name:t.name},e,{setup:t}))():t}const $i=t=>!!t.type.__asyncLoader,Sd=t=>t.type.__isKeepAlive;function Ry(t,e){Cd(t,"a",e)}function by(t,e){Cd(t,"da",e)}function Cd(t,e,n=xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($o(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Sd(s.parent.vnode)&&Py(r,e,n,s),s=s.parent}}function Py(t,e,n,r){const s=$o(e,t,r,!0);fc(()=>{Jl(r[e],s)},n)}function $o(t,e,n=xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qr(),Dr(n);const a=Ot(e,n,t,o);return Gn(),Kr(),a});return r?s.unshift(i):s.push(i),i}}const fn=t=>(e,n=xe)=>(!xs||t==="sp")&&$o(t,(...r)=>e(...r),n),Sy=fn("bm"),kd=fn("m"),Cy=fn("bu"),ky=fn("u"),Oy=fn("bum"),fc=fn("um"),Ny=fn("sp"),Dy=fn("rtg"),xy=fn("rtc");function My(t,e=xe){$o("ec",t,e)}const Od="components";function Vy(t,e){return Uy(Od,t,!0,e)||t}const Ly=Symbol.for("v-ndc");function Uy(t,e,n=!0,r=!1){const s=pt||xe;if(s){const i=s.type;if(t===Od){const a=yv(i,!1);if(a&&(a===e||a===Gt(e)||a===Do(Gt(e))))return i}const o=Bu(s[t]||i[t],e)||Bu(s.appContext[t],e);return!o&&r?i:o}}function Bu(t,e){return t&&(t[e]||t[Gt(e)]||t[Do(Gt(e))])}function Fy(t,e,n,r){let s;const i=n&&n[r];if(q(t)||Oe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ye(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ll=t=>t?jd(t)?qo(t)||t.proxy:ll(t.parent):null,gs=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$emit:t=>t.emit,$options:t=>dc(t),$forceUpdate:t=>t.f||(t.f=()=>hc(t.update)),$nextTick:t=>t.n||(t.n=uc.bind(t.proxy)),$watch:t=>Ay.bind(t)}),ba=(t,e)=>t!==me&&!t.__isScriptSetup&&re(t,e),By={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ba(r,e))return o[e]=1,r[e];if(s!==me&&re(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&re(c,e))return o[e]=3,i[e];if(n!==me&&re(n,e))return o[e]=4,n[e];cl&&(o[e]=0)}}const u=gs[e];let h,f;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==me&&re(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ba(s,e)?(s[e]=n,!0):r!==me&&re(r,e)?(r[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==me&&re(t,o)||ba(e,o)||(a=i[0])&&re(a,o)||re(r,o)||re(gs,o)||re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $u(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cl=!0;function $y(t){const e=dc(t),n=t.proxy,r=t.ctx;cl=!1,e.beforeCreate&&ju(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:_,activated:A,deactivated:T,beforeDestroy:S,beforeUnmount:N,destroyed:L,unmounted:C,render:Y,renderTracked:le,renderTriggered:Ee,errorCaptured:X,serverPrefetch:J,expose:de,inheritAttrs:Ke,components:ut,directives:_t,filters:Vn}=e;if(c&&jy(c,r,null),o)for(const fe in o){const oe=o[fe];G(oe)&&(r[fe]=oe.bind(n))}if(s){const fe=s.call(n,n);ye(fe)&&(t.data=Wr(fe))}if(cl=!0,i)for(const fe in i){const oe=i[fe],Yt=G(oe)?oe.bind(n,n):G(oe.get)?oe.get.bind(n,n):kt,dn=!G(oe)&&G(oe.set)?oe.set.bind(n):kt,Dt=dt({get:Yt,set:dn});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:ot=>Dt.value=ot})}if(a)for(const fe in a)Nd(a[fe],r,n,fe);if(l){const fe=G(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(oe=>{ji(oe,fe[oe])})}u&&ju(u,t,"c");function ie(fe,oe){q(oe)?oe.forEach(Yt=>fe(Yt.bind(n))):oe&&fe(oe.bind(n))}if(ie(Sy,h),ie(kd,f),ie(Cy,g),ie(ky,_),ie(Ry,A),ie(by,T),ie(My,X),ie(xy,le),ie(Dy,Ee),ie(Oy,N),ie(fc,C),ie(Ny,J),q(de))if(de.length){const fe=t.exposed||(t.exposed={});de.forEach(oe=>{Object.defineProperty(fe,oe,{get:()=>n[oe],set:Yt=>n[oe]=Yt})})}else t.exposed||(t.exposed={});Y&&t.render===kt&&(t.render=Y),Ke!=null&&(t.inheritAttrs=Ke),ut&&(t.components=ut),_t&&(t.directives=_t)}function jy(t,e,n=kt){q(t)&&(t=ul(t));for(const r in t){const s=t[r];let i;ye(s)?"default"in s?i=Ht(s.from||r,s.default,!0):i=Ht(s.from||r):i=Ht(s),Ae(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ju(t,e,n){Ot(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nd(t,e,n,r){const s=r.includes(".")?bd(n,r):()=>n[r];if(Oe(t)){const i=e[t];G(i)&&Rr(s,i)}else if(G(t))Rr(s,t.bind(n));else if(ye(t))if(q(t))t.forEach(i=>Nd(i,e,n,r));else{const i=G(t.handler)?t.handler.bind(n):e[t.handler];G(i)&&Rr(s,i,t)}}function dc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>no(l,c,o,!0)),no(l,e,o)),ye(e)&&i.set(e,l),l}function no(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&no(t,i,n,!0),s&&s.forEach(o=>no(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Hy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hy={data:Hu,props:qu,emits:qu,methods:ls,computed:ls,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:ls,directives:ls,watch:Ky,provide:Hu,inject:qy};function Hu(t,e){return e?t?function(){return Le(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function qy(t,e){return ls(ul(t),ul(e))}function ul(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function ls(t,e){return t?Le(Object.create(null),t,e):e}function qu(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:Le(Object.create(null),$u(t),$u(e??{})):e}function Ky(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const r in e)n[r]=nt(t[r],e[r]);return n}function Dd(){return{app:null,config:{isNativeTag:m_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wy=0;function zy(t,e){return function(r,s=null){G(r)||(r=Le({},r)),s!=null&&!ye(s)&&(s=null);const i=Dd(),o=new Set;let a=!1;const l=i.app={_uid:Wy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wv,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=Ie(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,qo(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Ns=l;try{return c()}finally{Ns=null}}};return l}}let Ns=null;function ji(t,e){if(xe){let n=xe.provides;const r=xe.parent&&xe.parent.provides;r===n&&(n=xe.provides=Object.create(r)),n[t]=e}}function Ht(t,e,n=!1){const r=xe||pt;if(r||Ns){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ns._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&G(e)?e.call(r&&r.proxy):e}}function Gy(){return!!(xe||pt||Ns)}function Qy(t,e,n,r=!1){const s={},i={};Yi(i,Ho,1),t.propsDefaults=Object.create(null),xd(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ny(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ne(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Lo(t.emitsOptions,f))continue;const g=e[f];if(l)if(re(i,f))g!==i[f]&&(i[f]=g,c=!0);else{const _=Gt(f);s[_]=hl(l,a,_,g,t,!1)}else g!==i[f]&&(i[f]=g,c=!0)}}}else{xd(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=Hr(h))===h||!re(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=hl(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!re(e,h))&&(delete i[h],c=!0)}c&&ln(t,"set","$attrs")}function xd(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fi(l))continue;const c=e[l];let u;s&&re(s,u=Gt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Lo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ne(n),c=a||me;for(let u=0;u<i.length;u++){const h=i[u];n[h]=hl(s,l,h,c[h],t,!re(c,h))}}return o}function hl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Dr(s),r=c[n]=l.call(null,e),Gn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Hr(n))&&(r=!0))}return r}function Md(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[f,g]=Md(h,e,!0);Le(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ye(t)&&r.set(t,wr),wr;if(q(i))for(let u=0;u<i.length;u++){const h=Gt(i[u]);Ku(h)&&(o[h]=me)}else if(i)for(const u in i){const h=Gt(u);if(Ku(h)){const f=i[u],g=o[h]=q(f)||G(f)?{type:f}:Le({},f);if(g){const _=Gu(Boolean,g.type),A=Gu(String,g.type);g[0]=_>-1,g[1]=A<0||_<A,(_>-1||re(g,"default"))&&a.push(h)}}}const c=[o,a];return ye(t)&&r.set(t,c),c}function Ku(t){return t[0]!=="$"}function Wu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function zu(t,e){return Wu(t)===Wu(e)}function Gu(t,e){return q(e)?e.findIndex(n=>zu(n,t)):G(e)&&zu(e,t)?0:-1}const Vd=t=>t[0]==="_"||t==="$stable",pc=t=>q(t)?t.map(Lt):[Lt(t)],Jy=(t,e,n)=>{if(e._n)return e;const r=as((...s)=>pc(e(...s)),n);return r._c=!1,r},Ld=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Vd(s))continue;const i=t[s];if(G(i))e[s]=Jy(s,i,r);else if(i!=null){const o=pc(i);e[s]=()=>o}}},Ud=(t,e)=>{const n=pc(e);t.slots.default=()=>n},Yy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),Yi(e,"_",n)):Ld(e,t.slots={})}else t.slots={},e&&Ud(t,e);Yi(t.slots,Ho,1)},Zy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=me;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Le(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ld(e,s)),o=e}else e&&(Ud(t,e),o={default:1});if(i)for(const a in s)!Vd(a)&&!(a in o)&&delete s[a]};function fl(t,e,n,r,s=!1){if(q(t)){t.forEach((f,g)=>fl(f,e&&(q(e)?e[g]:e),n,r,s));return}if($i(r)&&!s)return;const i=r.shapeFlag&4?qo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===me?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Oe(c)?(u[c]=null,re(h,c)&&(h[c]=null)):Ae(c)&&(c.value=null)),G(l))Rn(l,a,12,[o,u]);else{const f=Oe(l),g=Ae(l);if(f||g){const _=()=>{if(t.f){const A=f?re(h,l)?h[l]:u[l]:l.value;s?q(A)&&Jl(A,i):q(A)?A.includes(i)||A.push(i):f?(u[l]=[i],re(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,re(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,at(_,n)):_()}}}const at=Ty;function ev(t){return tv(t)}function tv(t,e){const n=rl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=kt,insertStaticContent:_}=t,A=(d,p,m,y=null,E=null,I=null,x=!1,P=null,k=!!p.dynamicChildren)=>{if(d===p)return;d&&!ts(d,p)&&(y=v(d),ot(d,E,I,!0),d=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:w,ref:F,shapeFlag:V}=p;switch(w){case jo:T(d,p,m,y);break;case Zn:S(d,p,m,y);break;case Hi:d==null&&N(p,m,y,x);break;case At:ut(d,p,m,y,E,I,x,P,k);break;default:V&1?Y(d,p,m,y,E,I,x,P,k):V&6?_t(d,p,m,y,E,I,x,P,k):(V&64||V&128)&&w.process(d,p,m,y,E,I,x,P,k,O)}F!=null&&E&&fl(F,d&&d.ref,I,p||d,!p)},T=(d,p,m,y)=>{if(d==null)r(p.el=a(p.children),m,y);else{const E=p.el=d.el;p.children!==d.children&&c(E,p.children)}},S=(d,p,m,y)=>{d==null?r(p.el=l(p.children||""),m,y):p.el=d.el},N=(d,p,m,y)=>{[d.el,d.anchor]=_(d.children,p,m,y,d.el,d.anchor)},L=({el:d,anchor:p},m,y)=>{let E;for(;d&&d!==p;)E=f(d),r(d,m,y),d=E;r(p,m,y)},C=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},Y=(d,p,m,y,E,I,x,P,k)=>{x=x||p.type==="svg",d==null?le(p,m,y,E,I,x,P,k):J(d,p,E,I,x,P,k)},le=(d,p,m,y,E,I,x,P)=>{let k,w;const{type:F,props:V,shapeFlag:B,transition:z,dirs:Z}=d;if(k=d.el=o(d.type,I,V&&V.is,V),B&8?u(k,d.children):B&16&&X(d.children,k,null,y,E,I&&F!=="foreignObject",x,P),Z&&Ln(d,null,y,"created"),Ee(k,d,d.scopeId,x,y),V){for(const he in V)he!=="value"&&!Fi(he)&&i(k,he,null,V[he],I,d.children,y,E,We);"value"in V&&i(k,"value",null,V.value),(w=V.onVnodeBeforeMount)&&Mt(w,y,d)}Z&&Ln(d,null,y,"beforeMount");const pe=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;pe&&z.beforeEnter(k),r(k,p,m),((w=V&&V.onVnodeMounted)||pe||Z)&&at(()=>{w&&Mt(w,y,d),pe&&z.enter(k),Z&&Ln(d,null,y,"mounted")},E)},Ee=(d,p,m,y,E)=>{if(m&&g(d,m),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(E){let I=E.subTree;if(p===I){const x=E.vnode;Ee(d,x,x.scopeId,x.slotScopeIds,E.parent)}}},X=(d,p,m,y,E,I,x,P,k=0)=>{for(let w=k;w<d.length;w++){const F=d[w]=P?yn(d[w]):Lt(d[w]);A(null,F,p,m,y,E,I,x,P)}},J=(d,p,m,y,E,I,x)=>{const P=p.el=d.el;let{patchFlag:k,dynamicChildren:w,dirs:F}=p;k|=d.patchFlag&16;const V=d.props||me,B=p.props||me;let z;m&&Un(m,!1),(z=B.onVnodeBeforeUpdate)&&Mt(z,m,p,d),F&&Ln(p,d,m,"beforeUpdate"),m&&Un(m,!0);const Z=E&&p.type!=="foreignObject";if(w?de(d.dynamicChildren,w,P,m,y,Z,I):x||oe(d,p,P,null,m,y,Z,I,!1),k>0){if(k&16)Ke(P,p,V,B,m,y,E);else if(k&2&&V.class!==B.class&&i(P,"class",null,B.class,E),k&4&&i(P,"style",V.style,B.style,E),k&8){const pe=p.dynamicProps;for(let he=0;he<pe.length;he++){const Ce=pe[he],Tt=V[Ce],pr=B[Ce];(pr!==Tt||Ce==="value")&&i(P,Ce,Tt,pr,E,d.children,m,y,We)}}k&1&&d.children!==p.children&&u(P,p.children)}else!x&&w==null&&Ke(P,p,V,B,m,y,E);((z=B.onVnodeUpdated)||F)&&at(()=>{z&&Mt(z,m,p,d),F&&Ln(p,d,m,"updated")},y)},de=(d,p,m,y,E,I,x)=>{for(let P=0;P<p.length;P++){const k=d[P],w=p[P],F=k.el&&(k.type===At||!ts(k,w)||k.shapeFlag&70)?h(k.el):m;A(k,w,F,null,y,E,I,x,!0)}},Ke=(d,p,m,y,E,I,x)=>{if(m!==y){if(m!==me)for(const P in m)!Fi(P)&&!(P in y)&&i(d,P,m[P],null,x,p.children,E,I,We);for(const P in y){if(Fi(P))continue;const k=y[P],w=m[P];k!==w&&P!=="value"&&i(d,P,w,k,x,p.children,E,I,We)}"value"in y&&i(d,"value",m.value,y.value)}},ut=(d,p,m,y,E,I,x,P,k)=>{const w=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:V,dynamicChildren:B,slotScopeIds:z}=p;z&&(P=P?P.concat(z):z),d==null?(r(w,m,y),r(F,m,y),X(p.children,m,F,E,I,x,P,k)):V>0&&V&64&&B&&d.dynamicChildren?(de(d.dynamicChildren,B,m,E,I,x,P),(p.key!=null||E&&p===E.subTree)&&Fd(d,p,!0)):oe(d,p,m,F,E,I,x,P,k)},_t=(d,p,m,y,E,I,x,P,k)=>{p.slotScopeIds=P,d==null?p.shapeFlag&512?E.ctx.activate(p,m,y,x,k):Vn(p,m,y,E,I,x,k):yt(d,p,k)},Vn=(d,p,m,y,E,I,x)=>{const P=d.component=dv(d,y,E);if(Sd(d)&&(P.ctx.renderer=O),pv(P),P.asyncDep){if(E&&E.registerDep(P,ie),!d.el){const k=P.subTree=Ie(Zn);S(null,k,p,m)}return}ie(P,d,p,m,E,I,x)},yt=(d,p,m)=>{const y=p.component=d.component;if(Ey(d,p,m))if(y.asyncDep&&!y.asyncResolved){fe(y,p,m);return}else y.next=p,py(y.update),y.update();else p.el=d.el,y.vnode=p},ie=(d,p,m,y,E,I,x)=>{const P=()=>{if(d.isMounted){let{next:F,bu:V,u:B,parent:z,vnode:Z}=d,pe=F,he;Un(d,!1),F?(F.el=Z.el,fe(d,F,x)):F=Z,V&&Bi(V),(he=F.props&&F.props.onVnodeBeforeUpdate)&&Mt(he,z,F,Z),Un(d,!0);const Ce=Ra(d),Tt=d.subTree;d.subTree=Ce,A(Tt,Ce,h(Tt.el),v(Tt),d,E,I),F.el=Ce.el,pe===null&&Iy(d,Ce.el),B&&at(B,E),(he=F.props&&F.props.onVnodeUpdated)&&at(()=>Mt(he,z,F,Z),E)}else{let F;const{el:V,props:B}=p,{bm:z,m:Z,parent:pe}=d,he=$i(p);if(Un(d,!1),z&&Bi(z),!he&&(F=B&&B.onVnodeBeforeMount)&&Mt(F,pe,p),Un(d,!0),V&&ae){const Ce=()=>{d.subTree=Ra(d),ae(V,d.subTree,d,E,null)};he?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ce()):Ce()}else{const Ce=d.subTree=Ra(d);A(null,Ce,m,y,d,E,I),p.el=Ce.el}if(Z&&at(Z,E),!he&&(F=B&&B.onVnodeMounted)){const Ce=p;at(()=>Mt(F,pe,Ce),E)}(p.shapeFlag&256||pe&&$i(pe.vnode)&&pe.vnode.shapeFlag&256)&&d.a&&at(d.a,E),d.isMounted=!0,p=m=y=null}},k=d.effect=new rc(P,()=>hc(w),d.scope),w=d.update=()=>k.run();w.id=d.uid,Un(d,!0),w()},fe=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Xy(d,p.props,y,m),Zy(d,p.children,m),qr(),Lu(),Kr()},oe=(d,p,m,y,E,I,x,P,k=!1)=>{const w=d&&d.children,F=d?d.shapeFlag:0,V=p.children,{patchFlag:B,shapeFlag:z}=p;if(B>0){if(B&128){dn(w,V,m,y,E,I,x,P,k);return}else if(B&256){Yt(w,V,m,y,E,I,x,P,k);return}}z&8?(F&16&&We(w,E,I),V!==w&&u(m,V)):F&16?z&16?dn(w,V,m,y,E,I,x,P,k):We(w,E,I,!0):(F&8&&u(m,""),z&16&&X(V,m,y,E,I,x,P,k))},Yt=(d,p,m,y,E,I,x,P,k)=>{d=d||wr,p=p||wr;const w=d.length,F=p.length,V=Math.min(w,F);let B;for(B=0;B<V;B++){const z=p[B]=k?yn(p[B]):Lt(p[B]);A(d[B],z,m,null,E,I,x,P,k)}w>F?We(d,E,I,!0,!1,V):X(p,m,y,E,I,x,P,k,V)},dn=(d,p,m,y,E,I,x,P,k)=>{let w=0;const F=p.length;let V=d.length-1,B=F-1;for(;w<=V&&w<=B;){const z=d[w],Z=p[w]=k?yn(p[w]):Lt(p[w]);if(ts(z,Z))A(z,Z,m,null,E,I,x,P,k);else break;w++}for(;w<=V&&w<=B;){const z=d[V],Z=p[B]=k?yn(p[B]):Lt(p[B]);if(ts(z,Z))A(z,Z,m,null,E,I,x,P,k);else break;V--,B--}if(w>V){if(w<=B){const z=B+1,Z=z<F?p[z].el:y;for(;w<=B;)A(null,p[w]=k?yn(p[w]):Lt(p[w]),m,Z,E,I,x,P,k),w++}}else if(w>B)for(;w<=V;)ot(d[w],E,I,!0),w++;else{const z=w,Z=w,pe=new Map;for(w=Z;w<=B;w++){const ht=p[w]=k?yn(p[w]):Lt(p[w]);ht.key!=null&&pe.set(ht.key,w)}let he,Ce=0;const Tt=B-Z+1;let pr=!1,bu=0;const es=new Array(Tt);for(w=0;w<Tt;w++)es[w]=0;for(w=z;w<=V;w++){const ht=d[w];if(Ce>=Tt){ot(ht,E,I,!0);continue}let xt;if(ht.key!=null)xt=pe.get(ht.key);else for(he=Z;he<=B;he++)if(es[he-Z]===0&&ts(ht,p[he])){xt=he;break}xt===void 0?ot(ht,E,I,!0):(es[xt-Z]=w+1,xt>=bu?bu=xt:pr=!0,A(ht,p[xt],m,null,E,I,x,P,k),Ce++)}const Pu=pr?nv(es):wr;for(he=Pu.length-1,w=Tt-1;w>=0;w--){const ht=Z+w,xt=p[ht],Su=ht+1<F?p[ht+1].el:y;es[w]===0?A(null,xt,m,Su,E,I,x,P,k):pr&&(he<0||w!==Pu[he]?Dt(xt,m,Su,2):he--)}}},Dt=(d,p,m,y,E=null)=>{const{el:I,type:x,transition:P,children:k,shapeFlag:w}=d;if(w&6){Dt(d.component.subTree,p,m,y);return}if(w&128){d.suspense.move(p,m,y);return}if(w&64){x.move(d,p,m,O);return}if(x===At){r(I,p,m);for(let V=0;V<k.length;V++)Dt(k[V],p,m,y);r(d.anchor,p,m);return}if(x===Hi){L(d,p,m);return}if(y!==2&&w&1&&P)if(y===0)P.beforeEnter(I),r(I,p,m),at(()=>P.enter(I),E);else{const{leave:V,delayLeave:B,afterLeave:z}=P,Z=()=>r(I,p,m),pe=()=>{V(I,()=>{Z(),z&&z()})};B?B(I,Z,pe):pe()}else r(I,p,m)},ot=(d,p,m,y=!1,E=!1)=>{const{type:I,props:x,ref:P,children:k,dynamicChildren:w,shapeFlag:F,patchFlag:V,dirs:B}=d;if(P!=null&&fl(P,null,m,d,!0),F&256){p.ctx.deactivate(d);return}const z=F&1&&B,Z=!$i(d);let pe;if(Z&&(pe=x&&x.onVnodeBeforeUnmount)&&Mt(pe,p,d),F&6)Ei(d.component,m,y);else{if(F&128){d.suspense.unmount(m,y);return}z&&Ln(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,m,E,O,y):w&&(I!==At||V>0&&V&64)?We(w,p,m,!1,!0):(I===At&&V&384||!E&&F&16)&&We(k,p,m),y&&fr(d)}(Z&&(pe=x&&x.onVnodeUnmounted)||z)&&at(()=>{pe&&Mt(pe,p,d),z&&Ln(d,null,p,"unmounted")},m)},fr=d=>{const{type:p,el:m,anchor:y,transition:E}=d;if(p===At){dr(m,y);return}if(p===Hi){C(d);return}const I=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:P}=E,k=()=>x(m,I);P?P(d.el,I,k):k()}else I()},dr=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},Ei=(d,p,m)=>{const{bum:y,scope:E,update:I,subTree:x,um:P}=d;y&&Bi(y),E.stop(),I&&(I.active=!1,ot(x,d,p,m)),P&&at(P,p),at(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},We=(d,p,m,y=!1,E=!1,I=0)=>{for(let x=I;x<d.length;x++)ot(d[x],p,m,y,E)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&ot(p._vnode,null,null,!0):A(p._vnode||null,d,p,null,null,null,m),Lu(),wd(),p._vnode=d},O={p:A,um:ot,m:Dt,r:fr,mt:Vn,mc:X,pc:oe,pbc:de,n:v,o:t};let U,ae;return e&&([U,ae]=e(O)),{render:M,hydrate:U,createApp:zy(M,U)}}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fd(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yn(s[i]),a.el=o.el),n||Fd(o,a)),a.type===jo&&(a.el=o.el)}}function nv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const rv=t=>t.__isTeleport,At=Symbol.for("v-fgt"),jo=Symbol.for("v-txt"),Zn=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),ms=[];let St=null;function gt(t=!1){ms.push(St=t?null:[])}function sv(){ms.pop(),St=ms[ms.length-1]||null}let Ds=1;function Qu(t){Ds+=t}function Bd(t){return t.dynamicChildren=Ds>0?St||wr:null,sv(),Ds>0&&St&&St.push(t),t}function It(t,e,n,r,s,i){return Bd($(t,e,n,r,s,i,!0))}function iv(t,e,n,r,s){return Bd(Ie(t,e,n,r,s,!0))}function dl(t){return t?t.__v_isVNode===!0:!1}function ts(t,e){return t.type===e.type&&t.key===e.key}const Ho="__vInternal",$d=({key:t})=>t??null,qi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||Ae(t)||G(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$d(e),ref:e&&qi(e),scopeId:Uo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return a?(gc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Ds>0&&!o&&St&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&St.push(l),l}const Ie=ov;function ov(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ly)&&(t=Zn),dl(t)){const a=Nr(t,e,!0);return n&&gc(a,n),Ds>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(vv(t)&&(t=t.__vccOpts),e){e=av(e);let{class:a,style:l}=e;a&&!Oe(a)&&(e.class=Ss(a)),ye(l)&&(pd(l)&&!q(l)&&(l=Le({},l)),e.style=ec(l))}const o=Oe(t)?1:wy(t)?128:rv(t)?64:ye(t)?4:G(t)?2:0;return $(t,e,n,r,s,o,i,!0)}function av(t){return t?pd(t)||Ho in t?Le({},t):t:null}function Nr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?uv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$d(a),ref:e&&e.ref?n&&s?q(s)?s.concat(qi(e)):[s,qi(e)]:qi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nr(t.ssContent),ssFallback:t.ssFallback&&Nr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function cs(t=" ",e=0){return Ie(jo,null,t,e)}function lv(t,e){const n=Ie(Hi,null,t);return n.staticCount=e,n}function cv(t="",e=!1){return e?(gt(),iv(Zn,null,t)):Ie(Zn,null,t)}function Lt(t){return t==null||typeof t=="boolean"?Ie(Zn):q(t)?Ie(At,null,t.slice()):typeof t=="object"?yn(t):Ie(jo,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nr(t)}function gc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ho in e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),r&64?(n=16,e=[cs(e)]):n=8);t.children=e,t.shapeFlag|=n}function uv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ss([e.class,r.class]));else if(s==="style")e.style=ec([e.style,r.style]);else if(ko(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Mt(t,e,n,r=null){Ot(t,e,7,[n,r])}const hv=Dd();let fv=0;function dv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hv,i={uid:fv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Md(r,s),emitsOptions:Ad(r,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:r.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_y.bind(null,i),t.ce&&t.ce(i),i}let xe=null,mc,gr,Xu="__VUE_INSTANCE_SETTERS__";(gr=rl()[Xu])||(gr=rl()[Xu]=[]),gr.push(t=>xe=t),mc=t=>{gr.length>1?gr.forEach(e=>e(t)):gr[0](t)};const Dr=t=>{mc(t),t.scope.on()},Gn=()=>{xe&&xe.scope.off(),mc(null)};function jd(t){return t.vnode.shapeFlag&4}let xs=!1;function pv(t,e=!1){xs=e;const{props:n,children:r}=t.vnode,s=jd(t);Qy(t,n,s,e),Yy(t,r);const i=s?gv(t,e):void 0;return xs=!1,i}function gv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mo(new Proxy(t.ctx,By));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?_v(t):null;Dr(t),qr();const i=Rn(r,t,0,[t.props,s]);if(Kr(),Gn(),Qf(i)){if(i.then(Gn,Gn),e)return i.then(o=>{Ju(t,o,e)}).catch(o=>{Vo(o,t,0)});t.asyncDep=i}else Ju(t,i,e)}else Hd(t,e)}function Ju(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=yd(e)),Hd(t,n)}let Yu;function Hd(t,e,n){const r=t.type;if(!t.render){if(!e&&Yu&&!r.render){const s=r.template||dc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Le(Le({isCustomElement:i,delimiters:a},o),l);r.render=Yu(s,c)}}t.render=r.render||kt}Dr(t),qr(),$y(t),Kr(),Gn()}function mv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}}))}function _v(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return mv(t)},slots:t.slots,emit:t.emit,expose:e}}function qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yd(Mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}}))}function yv(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function vv(t){return G(t)&&"__vccOpts"in t}const dt=(t,e)=>hy(t,e,xs);function qd(t,e,n){const r=arguments.length;return r===2?ye(e)&&!q(e)?dl(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&dl(n)&&(n=[n]),Ie(t,e,n))}const Ev=Symbol.for("v-scx"),Iv=()=>Ht(Ev),wv="3.3.4",Tv="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,Zu=$n&&$n.createElement("template"),Av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?$n.createElementNS(Tv,t):$n.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Zu.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bv(t,e,n){const r=t.style,s=Oe(n);if(n&&!s){if(e&&!Oe(e))for(const i in e)n[i]==null&&pl(r,i,"");for(const i in n)pl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const eh=/\s*!important$/;function pl(t,e,n){if(q(n))n.forEach(r=>pl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pv(t,e);eh.test(n)?t.setProperty(Hr(r),n.replace(eh,""),"important"):t[r]=n}}const th=["Webkit","Moz","ms"],Pa={};function Pv(t,e){const n=Pa[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return Pa[e]=r;r=Do(r);for(let s=0;s<th.length;s++){const i=th[s]+r;if(i in t)return Pa[e]=i}return e}const nh="http://www.w3.org/1999/xlink";function Sv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nh,e.slice(6,e.length)):t.setAttributeNS(nh,e,n);else{const i=P_(e);n==null||i&&!Yf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Cv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function yr(t,e,n,r){t.addEventListener(e,n,r)}function kv(t,e,n,r){t.removeEventListener(e,n,r)}function Ov(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Nv(e);if(r){const c=i[e]=Mv(r,s);yr(t,a,c,l)}else o&&(kv(t,a,o,l),i[e]=void 0)}}const rh=/(?:Once|Passive|Capture)$/;function Nv(t){let e;if(rh.test(t)){e={};let r;for(;r=t.match(rh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Sa=0;const Dv=Promise.resolve(),xv=()=>Sa||(Dv.then(()=>Sa=0),Sa=Date.now());function Mv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ot(Vv(r,n.value),e,5,[r])};return n.value=t,n.attached=xv(),n}function Vv(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const sh=/^on[a-z]/,Lv=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?Rv(t,r,s):e==="style"?bv(t,n,r):ko(e)?Xl(e)||Ov(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uv(t,e,r,s))?Cv(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sv(t,e,r,s))};function Uv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&sh.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sh.test(e)&&Oe(n)?!1:e in t}const ih=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>Bi(e,n):e};function Fv(t){t.target.composing=!0}function oh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ah={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ih(s);const i=r||s.props&&s.props.type==="number";yr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=nl(a)),t._assign(a)}),n&&yr(t,"change",()=>{t.value=t.value.trim()}),e||(yr(t,"compositionstart",Fv),yr(t,"compositionend",oh),yr(t,"change",oh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ih(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&nl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Bv=["ctrl","shift","alt","meta"],$v={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bv.some(n=>t[`${n}Key`]&&!e.includes(n))},Ki=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=$v[e[s]];if(i&&i(n,e))return}return t(n,...r)},jv=Le({patchProp:Lv},Av);let lh;function Hv(){return lh||(lh=ev(jv))}const qv=(...t)=>{const e=Hv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Kv(r);if(!s)return;const i=e._component;!G(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Kv(t){return Oe(t)?document.querySelector(t):t}var Wv=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Kd;const Ko=t=>Kd=t,Wd=Symbol();function gl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var _s;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_s||(_s={}));function zv(){const t=td(!0),e=t.run(()=>Et({}));let n=[],r=[];const s=Mo({install(i){Ko(s),s._a=i,i.provide(Wd,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Wv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const zd=()=>{};function ch(t,e,n,r=zd){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&tc()&&nd(s),s}function mr(t,...e){t.slice().forEach(n=>{n(...e)})}const Gv=t=>t();function ml(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];gl(s)&&gl(r)&&t.hasOwnProperty(n)&&!Ae(r)&&!on(r)?t[n]=ml(s,r):t[n]=r}return t}const Qv=Symbol();function Xv(t){return!gl(t)||!t.hasOwnProperty(Qv)}const{assign:_n}=Object;function Jv(t){return!!(Ae(t)&&t.effect)}function Yv(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=oy(n.state.value[t]);return _n(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Mo(dt(()=>{Ko(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return l=Gd(t,c,e,n,r,!0),l}function Gd(t,e,n={},r,s,i){let o;const a=_n({actions:{}},n),l={deep:!0};let c,u,h=[],f=[],g;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),Et({});let A;function T(X){let J;c=u=!1,typeof X=="function"?(X(r.state.value[t]),J={type:_s.patchFunction,storeId:t,events:g}):(ml(r.state.value[t],X),J={type:_s.patchObject,payload:X,storeId:t,events:g});const de=A=Symbol();uc().then(()=>{A===de&&(c=!0)}),u=!0,mr(h,J,r.state.value[t])}const S=i?function(){const{state:J}=n,de=J?J():{};this.$patch(Ke=>{_n(Ke,de)})}:zd;function N(){o.stop(),h=[],f=[],r._s.delete(t)}function L(X,J){return function(){Ko(r);const de=Array.from(arguments),Ke=[],ut=[];function _t(ie){Ke.push(ie)}function Vn(ie){ut.push(ie)}mr(f,{args:de,name:X,store:Y,after:_t,onError:Vn});let yt;try{yt=J.apply(this&&this.$id===t?this:Y,de)}catch(ie){throw mr(ut,ie),ie}return yt instanceof Promise?yt.then(ie=>(mr(Ke,ie),ie)).catch(ie=>(mr(ut,ie),Promise.reject(ie))):(mr(Ke,yt),yt)}}const C={_p:r,$id:t,$onAction:ch.bind(null,f),$patch:T,$reset:S,$subscribe(X,J={}){const de=ch(h,X,J.detached,()=>Ke()),Ke=o.run(()=>Rr(()=>r.state.value[t],ut=>{(J.flush==="sync"?u:c)&&X({storeId:t,type:_s.direct,events:g},ut)},_n({},l,J)));return de},$dispose:N},Y=Wr(C);r._s.set(t,Y);const le=r._a&&r._a.runWithContext||Gv,Ee=r._e.run(()=>(o=td(),le(()=>o.run(e))));for(const X in Ee){const J=Ee[X];if(Ae(J)&&!Jv(J)||on(J))i||(_&&Xv(J)&&(Ae(J)?J.value=_[X]:ml(J,_[X])),r.state.value[t][X]=J);else if(typeof J=="function"){const de=L(X,J);Ee[X]=de,a.actions[X]=J}}return _n(Y,Ee),_n(ne(Y),Ee),Object.defineProperty(Y,"$state",{get:()=>r.state.value[t],set:X=>{T(J=>{_n(J,X)})}}),r._p.forEach(X=>{_n(Y,o.run(()=>X({store:Y,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(Y.$state,_),c=!0,u=!0,Y}function Zv(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=Gy();return a=a||(c?Ht(Wd,null):null),a&&Ko(a),a=Kd,a._s.has(r)||(i?Gd(r,e,s,a):Yv(r,s,a)),a._s.get(r)}return o.$id=r,o}function eE(t){{t=ne(t);const e={};for(const n in t){const r=t[n];(Ae(r)||on(r))&&(e[n]=cy(t,n))}return e}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof window<"u";function tE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Ca(t,e){const n={};for(const r in e){const s=e[r];n[r]=Nt(s)?s.map(t):t(s)}return n}const ys=()=>{},Nt=Array.isArray,nE=/\/$/,rE=t=>t.replace(nE,"");function ka(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=aE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function sE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function uh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&xr(e.matched[r],n.matched[s])&&Qd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!oE(t[n],e[n]))return!1;return!0}function oE(t,e){return Nt(t)?hh(t,e):Nt(e)?hh(e,t):t===e}function hh(t,e){return Nt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function aE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ms;(function(t){t.pop="pop",t.push="push"})(Ms||(Ms={}));var vs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vs||(vs={}));function lE(t){if(!t)if(vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rE(t)}const cE=/^[^#]+#/;function uE(t,e){return t.replace(cE,"#")+e}function hE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wo=()=>({left:window.pageXOffset,top:window.pageYOffset});function fE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function fh(t,e){return(history.state?history.state.position-e:-1)+t}const _l=new Map;function dE(t,e){_l.set(t,e)}function pE(t){const e=_l.get(t);return _l.delete(t),e}let gE=()=>location.protocol+"//"+location.host;function Xd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),uh(l,"")}return uh(n,t)+r+s}function mE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=Xd(t,location),_=n.value,A=e.value;let T=0;if(f){if(n.value=g,e.value=f,o&&o===_){o=null;return}T=A?f.position-A.position:0}else r(g);s.forEach(S=>{S(n.value,_,{delta:T,type:Ms.pop,direction:T?T>0?vs.forward:vs.back:vs.unknown})})};function l(){o=n.value}function c(f){s.push(f);const g=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ce({},f.state,{scroll:Wo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function dh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wo():null}}function _E(t){const{history:e,location:n}=window,r={value:Xd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:gE()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(l,c){const u=ce({},e.state,dh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ce({},s.value,e.state,{forward:l,scroll:Wo()});i(u.current,u,!0);const h=ce({},dh(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function yE(t){t=lE(t);const e=_E(t),n=mE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ce({location:"",base:t,go:r,createHref:uE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vE(t){return typeof t=="string"||t&&typeof t=="object"}function Jd(t){return typeof t=="string"||typeof t=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yd=Symbol("");var ph;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ph||(ph={}));function Mr(t,e){return ce(new Error,{type:t,[Yd]:!0},e)}function Zt(t,e){return t instanceof Error&&Yd in t&&(e==null||!!(t.type&e))}const gh="[^/]+?",EE={sensitive:!1,strict:!1,start:!0,end:!0},IE=/[.+*?^${}()[\]/\\]/g;function wE(t,e){const n=ce({},EE,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(IE,"\\$&"),g+=40;else if(f.type===1){const{value:_,repeatable:A,optional:T,regexp:S}=f;i.push({name:_,repeatable:A,optional:T});const N=S||gh;if(N!==gh){g+=10;try{new RegExp(`(${N})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${_}" (${N}): `+C.message)}}let L=A?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(L=T&&c.length<2?`(?:/${L})`:"/"+L),T&&(L+="?"),s+=L,g+=20,T&&(g+=-8),A&&(g+=-20),N===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",_=i[f-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:A,optional:T}=g,S=_ in c?c[_]:"";if(Nt(S)&&!A)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const N=Nt(S)?S.join("/"):S;if(!N)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function TE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function AE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=TE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(mh(r))return 1;if(mh(s))return-1}return s.length-r.length}function mh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RE={type:0,value:""},bE=/[a-zA-Z0-9_]/;function PE(t){if(!t)return[[]];if(t==="/")return[[RE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:bE.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function SE(t,e,n){const r=wE(PE(t.path),n),s=ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function CE(t,e){const n=[],r=new Map;e=vh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,_=kE(u);_.aliasOf=f&&f.record;const A=vh(e,u),T=[_];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of L)T.push(ce({},_,{components:f?f.record.components:_.components,path:C,aliasOf:f?f.record:_}))}let S,N;for(const L of T){const{path:C}=L;if(h&&C[0]!=="/"){const Y=h.record.path,le=Y[Y.length-1]==="/"?"":"/";L.path=h.record.path+(C&&le+C)}if(S=SE(L,h,A),f?f.alias.push(S):(N=N||S,N!==S&&N.alias.push(S),g&&u.name&&!yh(S)&&o(u.name)),_.children){const Y=_.children;for(let le=0;le<Y.length;le++)i(Y[le],S,f&&f.children[le])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return N?()=>{o(N)}:ys}function o(u){if(Jd(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&AE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Zd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!yh(u)&&r.set(u.record.name,u)}function c(u,h){let f,g={},_,A;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Mr(1,{location:u});A=f.record.name,g=ce(_h(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&_h(u.params,f.keys.map(N=>N.name))),_=f.stringify(g)}else if("path"in u)_=u.path,f=n.find(N=>N.re.test(_)),f&&(g=f.parse(_),A=f.record.name);else{if(f=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw Mr(1,{location:u,currentLocation:h});A=f.record.name,g=ce({},h.params,u.params),_=f.stringify(g)}const T=[];let S=f;for(;S;)T.unshift(S.record),S=S.parent;return{name:A,path:_,params:g,matched:T,meta:NE(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function _h(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:OE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function OE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function yh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NE(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function vh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Zd(t,e){return e.children.some(n=>n===t||Zd(t,n))}const ep=/#/g,DE=/&/g,xE=/\//g,ME=/=/g,VE=/\?/g,tp=/\+/g,LE=/%5B/g,UE=/%5D/g,np=/%5E/g,FE=/%60/g,rp=/%7B/g,BE=/%7C/g,sp=/%7D/g,$E=/%20/g;function _c(t){return encodeURI(""+t).replace(BE,"|").replace(LE,"[").replace(UE,"]")}function jE(t){return _c(t).replace(rp,"{").replace(sp,"}").replace(np,"^")}function yl(t){return _c(t).replace(tp,"%2B").replace($E,"+").replace(ep,"%23").replace(DE,"%26").replace(FE,"`").replace(rp,"{").replace(sp,"}").replace(np,"^")}function HE(t){return yl(t).replace(ME,"%3D")}function qE(t){return _c(t).replace(ep,"%23").replace(VE,"%3F")}function KE(t){return t==null?"":qE(t).replace(xE,"%2F")}function ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function WE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(tp," "),o=i.indexOf("="),a=ro(o<0?i:i.slice(0,o)),l=o<0?null:ro(i.slice(o+1));if(a in e){let c=e[a];Nt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Eh(t){let e="";for(let n in t){const r=t[n];if(n=HE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nt(r)?r.map(i=>i&&yl(i)):[r&&yl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Nt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const GE=Symbol(""),Ih=Symbol(""),yc=Symbol(""),ip=Symbol(""),vl=Symbol("");function ns(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function vn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Mr(4,{from:n,to:e})):h instanceof Error?a(h):vE(h)?a(Mr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Oa(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(QE(a)){const c=(a.__vccOpts||a)[e];c&&s.push(vn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=tE(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&vn(f,n,r,i,o)()}))}}return s}function QE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wh(t){const e=Ht(yc),n=Ht(ip),r=dt(()=>e.resolve(we(t.to))),s=dt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(xr.bind(null,u));if(f>-1)return f;const g=Th(l[c-2]);return c>1&&Th(u)===g&&h[h.length-1].path!==g?h.findIndex(xr.bind(null,l[c-2])):f}),i=dt(()=>s.value>-1&&ZE(n.params,r.value.params)),o=dt(()=>s.value>-1&&s.value===n.matched.length-1&&Qd(n.params,r.value.params));function a(l={}){return YE(l)?e[we(t.replace)?"replace":"push"](we(t.to)).catch(ys):Promise.resolve()}return{route:r,href:dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const XE=Pd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wh,setup(t,{slots:e}){const n=Wr(wh(t)),{options:r}=Ht(yc),s=dt(()=>({[Ah(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ah(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:qd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),JE=XE;function YE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ZE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Nt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Th(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ah=(t,e,n)=>t??e??n,eI=Pd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ht(vl),s=dt(()=>t.route||r.value),i=Ht(Ih,0),o=dt(()=>{let c=we(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dt(()=>s.value.matched[o.value]);ji(Ih,dt(()=>o.value+1)),ji(GE,a),ji(vl,s);const l=Et();return Rr(()=>[l.value,a.value,t.name],([c,u,h],[f,g,_])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!xr(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Rh(n.default,{Component:f,route:c});const g=h.props[u],_=g?g===!0?c.params:typeof g=="function"?g(c):g:null,T=qd(f,ce({},_,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Rh(n.default,{Component:T,route:c})||T}}});function Rh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const op=eI;function tI(t){const e=CE(t.routes,t),n=t.parseQuery||WE,r=t.stringifyQuery||Eh,s=t.history,i=ns(),o=ns(),a=ns(),l=ry(gn);let c=gn;vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ca.bind(null,v=>""+v),h=Ca.bind(null,KE),f=Ca.bind(null,ro);function g(v,M){let O,U;return Jd(v)?(O=e.getRecordMatcher(v),U=M):U=v,e.addRoute(U,O)}function _(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function A(){return e.getRoutes().map(v=>v.record)}function T(v){return!!e.getRecordMatcher(v)}function S(v,M){if(M=ce({},M||l.value),typeof v=="string"){const m=ka(n,v,M.path),y=e.resolve({path:m.path},M),E=s.createHref(m.fullPath);return ce(m,y,{params:f(y.params),hash:ro(m.hash),redirectedFrom:void 0,href:E})}let O;if("path"in v)O=ce({},v,{path:ka(n,v.path,M.path).path});else{const m=ce({},v.params);for(const y in m)m[y]==null&&delete m[y];O=ce({},v,{params:h(m)}),M.params=h(M.params)}const U=e.resolve(O,M),ae=v.hash||"";U.params=u(f(U.params));const d=sE(r,ce({},v,{hash:jE(ae),path:U.path})),p=s.createHref(d);return ce({fullPath:d,hash:ae,query:r===Eh?zE(v.query):v.query||{}},U,{redirectedFrom:void 0,href:p})}function N(v){return typeof v=="string"?ka(n,v,l.value.path):ce({},v)}function L(v,M){if(c!==v)return Mr(8,{from:M,to:v})}function C(v){return Ee(v)}function Y(v){return C(ce(N(v),{replace:!0}))}function le(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:O}=M;let U=typeof O=="function"?O(v):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=N(U):{path:U},U.params={}),ce({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function Ee(v,M){const O=c=S(v),U=l.value,ae=v.state,d=v.force,p=v.replace===!0,m=le(O);if(m)return Ee(ce(N(m),{state:typeof m=="object"?ce({},ae,m.state):ae,force:d,replace:p}),M||O);const y=O;y.redirectedFrom=M;let E;return!d&&iE(r,U,O)&&(E=Mr(16,{to:y,from:U}),Dt(U,U,!0,!1)),(E?Promise.resolve(E):de(y,U)).catch(I=>Zt(I)?Zt(I,2)?I:dn(I):oe(I,y,U)).then(I=>{if(I){if(Zt(I,2))return Ee(ce({replace:p},N(I.to),{state:typeof I.to=="object"?ce({},ae,I.to.state):ae,force:d}),M||y)}else I=ut(y,U,!0,p,ae);return Ke(y,U,I),I})}function X(v,M){const O=L(v,M);return O?Promise.reject(O):Promise.resolve()}function J(v){const M=dr.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function de(v,M){let O;const[U,ae,d]=nI(v,M);O=Oa(U.reverse(),"beforeRouteLeave",v,M);for(const m of U)m.leaveGuards.forEach(y=>{O.push(vn(y,v,M))});const p=X.bind(null,v,M);return O.push(p),We(O).then(()=>{O=[];for(const m of i.list())O.push(vn(m,v,M));return O.push(p),We(O)}).then(()=>{O=Oa(ae,"beforeRouteUpdate",v,M);for(const m of ae)m.updateGuards.forEach(y=>{O.push(vn(y,v,M))});return O.push(p),We(O)}).then(()=>{O=[];for(const m of v.matched)if(m.beforeEnter&&!M.matched.includes(m))if(Nt(m.beforeEnter))for(const y of m.beforeEnter)O.push(vn(y,v,M));else O.push(vn(m.beforeEnter,v,M));return O.push(p),We(O)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),O=Oa(d,"beforeRouteEnter",v,M),O.push(p),We(O))).then(()=>{O=[];for(const m of o.list())O.push(vn(m,v,M));return O.push(p),We(O)}).catch(m=>Zt(m,8)?m:Promise.reject(m))}function Ke(v,M,O){for(const U of a.list())J(()=>U(v,M,O))}function ut(v,M,O,U,ae){const d=L(v,M);if(d)return d;const p=M===gn,m=vr?history.state:{};O&&(U||p?s.replace(v.fullPath,ce({scroll:p&&m&&m.scroll},ae)):s.push(v.fullPath,ae)),l.value=v,Dt(v,M,O,p),dn()}let _t;function Vn(){_t||(_t=s.listen((v,M,O)=>{if(!Ei.listening)return;const U=S(v),ae=le(U);if(ae){Ee(ce(ae,{replace:!0}),U).catch(ys);return}c=U;const d=l.value;vr&&dE(fh(d.fullPath,O.delta),Wo()),de(U,d).catch(p=>Zt(p,12)?p:Zt(p,2)?(Ee(p.to,U).then(m=>{Zt(m,20)&&!O.delta&&O.type===Ms.pop&&s.go(-1,!1)}).catch(ys),Promise.reject()):(O.delta&&s.go(-O.delta,!1),oe(p,U,d))).then(p=>{p=p||ut(U,d,!1),p&&(O.delta&&!Zt(p,8)?s.go(-O.delta,!1):O.type===Ms.pop&&Zt(p,20)&&s.go(-1,!1)),Ke(U,d,p)}).catch(ys)}))}let yt=ns(),ie=ns(),fe;function oe(v,M,O){dn(v);const U=ie.list();return U.length?U.forEach(ae=>ae(v,M,O)):console.error(v),Promise.reject(v)}function Yt(){return fe&&l.value!==gn?Promise.resolve():new Promise((v,M)=>{yt.add([v,M])})}function dn(v){return fe||(fe=!v,Vn(),yt.list().forEach(([M,O])=>v?O(v):M()),yt.reset()),v}function Dt(v,M,O,U){const{scrollBehavior:ae}=t;if(!vr||!ae)return Promise.resolve();const d=!O&&pE(fh(v.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return uc().then(()=>ae(v,M,d)).then(p=>p&&fE(p)).catch(p=>oe(p,v,M))}const ot=v=>s.go(v);let fr;const dr=new Set,Ei={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,hasRoute:T,getRoutes:A,resolve:S,options:t,push:C,replace:Y,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:Yt,install(v){const M=this;v.component("RouterLink",JE),v.component("RouterView",op),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>we(l)}),vr&&!fr&&l.value===gn&&(fr=!0,C(s.location).catch(ae=>{}));const O={};for(const ae in gn)O[ae]=dt(()=>l.value[ae]);v.provide(yc,M),v.provide(ip,Wr(O)),v.provide(vl,l);const U=v.unmount;dr.add(v),v.unmount=function(){dr.delete(v),dr.size<1&&(c=gn,_t&&_t(),_t=null,l.value=gn,fr=!1,fe=!1),U()}}};function We(v){return v.reduce((M,O)=>M.then(()=>J(O)),Promise.resolve())}return Ei}function nI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>xr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>xr(c,l))||s.push(l))}return[n,r,s]}const rI="/vue-bga/assets/BGA-logo-8c772358.jpg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ap(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new iI;const f=i<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const _=c<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oI=function(t){const e=ap(t);return lp.encodeByteArray(e,!0)},so=function(t){return oI(t).replace(/\./g,"")},cp=function(t){try{return lp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=()=>aI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cp(t[1]);return e&&JSON.parse(e)},zo=()=>{try{return lI()||cI()||uI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},up=t=>{var e,n;return(n=(e=zo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hp=t=>{const e=up(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fp=()=>{var t;return(t=zo())===null||t===void 0?void 0:t.config},dp=t=>{var e;return(e=zo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[so(JSON.stringify(n)),so(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function dI(){var t;const e=(t=zo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _I(){try{return typeof indexedDB=="object"}catch{return!1}}function yI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vI,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Jt(s,a,r)}}function EI(t,e){return t.replace(II,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const II=/\{\$([^}]+)}/g;function wI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function io(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(bh(i)&&bh(o)){if(!io(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function bh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TI(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Na),s.error===void 0&&(s.error=Na),s.complete===void 0&&(s.complete=Na);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SI(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PI(t){return t===Fn?void 0:t}function SI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const kI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},OI=se.INFO,NI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},DI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=OI,this._logHandler=DI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const xI=(t,e)=>e.some(n=>t instanceof n);let Ph,Sh;function MI(){return Ph||(Ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VI(){return Sh||(Sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gp=new WeakMap,El=new WeakMap,mp=new WeakMap,Da=new WeakMap,Ec=new WeakMap;function LI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gp.set(n,t)}).catch(()=>{}),Ec.set(e,t),e}function UI(t){if(El.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});El.set(t,e)}let Il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return El.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FI(t){Il=t(Il)}function BI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xa(this),e,...n);return mp.set(r,e.sort?e.sort():[e]),bn(r)}:VI().includes(t)?function(...e){return t.apply(xa(this),e),bn(gp.get(this))}:function(...e){return bn(t.apply(xa(this),e))}}function $I(t){return typeof t=="function"?BI(t):(t instanceof IDBTransaction&&UI(t),xI(t,MI())?new Proxy(t,Il):t)}function bn(t){if(t instanceof IDBRequest)return LI(t);if(Da.has(t))return Da.get(t);const e=$I(t);return e!==t&&(Da.set(t,e),Ec.set(e,t)),e}const xa=t=>Ec.get(t);function jI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const HI=["get","getKey","getAll","getAllKeys","count"],qI=["put","add","delete","clear"],Ma=new Map;function Ch(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||HI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ma.set(e,i),i}FI(t=>({...t,get:(e,n,r)=>Ch(e,n)||t.get(e,n,r),has:(e,n)=>!!Ch(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wl="@firebase/app",kh="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new vc("@firebase/app"),zI="@firebase/app-compat",GI="@firebase/analytics-compat",QI="@firebase/analytics",XI="@firebase/app-check-compat",JI="@firebase/app-check",YI="@firebase/auth",ZI="@firebase/auth-compat",ew="@firebase/database",tw="@firebase/database-compat",nw="@firebase/functions",rw="@firebase/functions-compat",sw="@firebase/installations",iw="@firebase/installations-compat",ow="@firebase/messaging",aw="@firebase/messaging-compat",lw="@firebase/performance",cw="@firebase/performance-compat",uw="@firebase/remote-config",hw="@firebase/remote-config-compat",fw="@firebase/storage",dw="@firebase/storage-compat",pw="@firebase/firestore",gw="@firebase/firestore-compat",mw="firebase",_w="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="[DEFAULT]",yw={[wl]:"fire-core",[zI]:"fire-core-compat",[QI]:"fire-analytics",[GI]:"fire-analytics-compat",[JI]:"fire-app-check",[XI]:"fire-app-check-compat",[YI]:"fire-auth",[ZI]:"fire-auth-compat",[ew]:"fire-rtdb",[tw]:"fire-rtdb-compat",[nw]:"fire-fn",[rw]:"fire-fn-compat",[sw]:"fire-iid",[iw]:"fire-iid-compat",[ow]:"fire-fcm",[aw]:"fire-fcm-compat",[lw]:"fire-perf",[cw]:"fire-perf-compat",[uw]:"fire-rc",[hw]:"fire-rc-compat",[fw]:"fire-gcs",[dw]:"fire-gcs-compat",[pw]:"fire-fst",[gw]:"fire-fst-compat","fire-js":"fire-js",[mw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Map,Al=new Map;function vw(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(Al.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Al.set(e,t);for(const n of oo.values())vw(n,t);return!0}function Go(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new ei("app","Firebase",Ew);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=_w;function _p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(n||(n=fp()),!n)throw Pn.create("no-options");const i=oo.get(s);if(i){if(io(n,i.options)&&io(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const o=new CI(s);for(const l of Al.values())o.addComponent(l);const a=new Iw(n,r,o);return oo.set(s,a),a}function Ic(t=Tl){const e=oo.get(t);if(!e&&t===Tl&&fp())return _p();if(!e)throw Pn.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=yw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(a.join(" "));return}tr(new kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="firebase-heartbeat-database",Tw=1,Vs="firebase-heartbeat-store";let Va=null;function yp(){return Va||(Va=jI(ww,Tw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vs)}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Va}async function Aw(t){try{return await(await yp()).transaction(Vs).objectStore(Vs).get(vp(t))}catch(e){if(e instanceof Jt)er.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function Oh(t,e){try{const r=(await yp()).transaction(Vs,"readwrite");await r.objectStore(Vs).put(e,vp(t)),await r.done}catch(n){if(n instanceof Jt)er.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function vp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=1024,bw=30*24*60*60*1e3;class Pw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=bw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nh(),{heartbeatsToSend:n,unsentEntries:r}=Sw(this._heartbeatsCache.heartbeats),s=so(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nh(){return new Date().toISOString().substring(0,10)}function Sw(t,e=Rw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _I()?yI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Aw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dh(t){return so(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){tr(new kn("platform-logger",e=>new KI(e),"PRIVATE")),tr(new kn("heartbeat",e=>new Pw(e),"PRIVATE")),qt(wl,kh,t),qt(wl,kh,"esm2017"),qt("fire-js","")}kw("");function wc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ep(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ow=Ep,Ip=new ei("auth","Firebase",Ep());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new vc("@firebase/auth");function Nw(t,...e){ao.logLevel<=se.WARN&&ao.warn(`Auth (${lr}): ${t}`,...e)}function Wi(t,...e){ao.logLevel<=se.ERROR&&ao.error(`Auth (${lr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw Tc(t,...e)}function Kt(t,...e){return Tc(t,...e)}function wp(t,e,n){const r=Object.assign(Object.assign({},Ow()),{[e]:n});return new ei("auth","Firebase",r).create(e,{appName:t.name})}function Dw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(t,"argument-error"),wp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ip.create(t,...e)}function K(t,e,...n){if(!t)throw Tc(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wi(e),new Error(e)}function cn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xw(){return xh()==="http:"||xh()==="https:"}function xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xw()||pI()||"connection"in navigator)?navigator.onLine:!0}function Vw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=fI()||gI()}get(){return Mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=new ni(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,r,s={}){return Ap(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ti(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Tp.fetch()(Rp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ap(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lw),e);try{const s=new Fw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pi(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wp(t,u,c);wt(t,u)}}catch(s){if(s instanceof Jt)throw s;wt(t,"network-request-failed",{message:String(s)})}}async function ri(t,e,n,r,s={}){const i=await Gr(t,e,n,r,s);return"mfaPendingCredential"in i&&wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ac(t.config,s):`${t.config.apiScheme}://${s}`}class Fw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),Uw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Kt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function $w(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jw(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),s=Rc(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Es(La(s.auth_time)),issuedAtTime:Es(La(s.iat)),expirationTime:Es(La(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function Rc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const s=cp(n);return s?JSON.parse(s):(Wi("Failed to decode base64 JWT payload"),null)}catch(s){return Wi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hw(t){const e=Rc(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&qw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ls(t,$w(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gw(i.providerUserInfo):[],a=zw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Ww(t){const e=Ne(t);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gw(t){return t.map(e=>{var{providerId:n}=e,r=wc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t,e){const n=await Ap(t,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rp(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jw(this,e)}reload(){return Ww(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,Bw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:C,isAnonymous:Y,providerData:le,stsTokenManager:Ee}=n;K(L&&Ee,e,"internal-error");const X=Us.fromJSON(this.name,Ee);K(typeof L=="string",e,"internal-error"),mn(h,e.name),mn(f,e.name),K(typeof C=="boolean",e,"internal-error"),K(typeof Y=="boolean",e,"internal-error"),mn(g,e.name),mn(_,e.name),mn(A,e.name),mn(T,e.name),mn(S,e.name),mn(N,e.name);const J=new Qn({uid:L,auth:e,email:f,emailVerified:C,displayName:h,isAnonymous:Y,photoURL:_,phoneNumber:g,tenantId:A,stsTokenManager:X,createdAt:S,lastLoginAt:N});return le&&Array.isArray(le)&&(J.providerData=le.map(de=>Object.assign({},de))),T&&(J._redirectEventId=T),J}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new Qn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Map;function rn(t){cn(t instanceof Function,"Expected a class definition");let e=Mh.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pp.type="NONE";const Vh=Pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=zi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new br(rn(Vh),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||rn(Vh);const o=zi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Qn._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new br(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new br(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Np(e))return"Blackberry";if(Dp(e))return"Webos";if(bc(e))return"Safari";if((e.includes("chrome/")||Cp(e))&&!e.includes("edge/"))return"Chrome";if(Op(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sp(t=et()){return/firefox\//i.test(t)}function bc(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cp(t=et()){return/crios\//i.test(t)}function kp(t=et()){return/iemobile/i.test(t)}function Op(t=et()){return/android/i.test(t)}function Np(t=et()){return/blackberry/i.test(t)}function Dp(t=et()){return/webos/i.test(t)}function Qo(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xw(t=et()){var e;return Qo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jw(){return mI()&&document.documentMode===10}function xp(t=et()){return Qo(t)||Op(t)||Dp(t)||Np(t)||/windows phone/i.test(t)||kp(t)}function Yw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e=[]){let n;switch(t){case"Browser":n=Lh(et());break;case"Worker":n=`${Lh(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${r}`}async function Vp(t,e){return Gr(t,"GET","/v2/recaptchaConfig",zr(t,e))}function Uh(t){return t!==void 0&&t.enterprise!==void 0}class Lp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Up(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Zw().appendChild(r)})}function eT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tT="https://www.google.com/recaptcha/enterprise.js?render=",nT="recaptcha-enterprise",rT="NO_RECAPTCHA";class Fp{constructor(e){this.type=nT,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Vp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Lp(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Uh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(rT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Uh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Up(tT+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function co(t,e,n,r=!1){const s=new Fp(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fh(this),this.idTokenSubscription=new Fh(this),this.beforeStateQueue=new sT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}async initializeRecaptchaConfig(){const e=await Vp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Lp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Fp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Nw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return Ne(t)}class Fh{constructor(e){this.auth=e,this.observer=null,this.addObserver=TI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e){const n=Go(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(io(i,e??{}))return s;wt(s,"already-initialized")}return n.initialize({options:e})}function aT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lT(t,e,n){const r=cr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Bp(e),{host:o,port:a}=cT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||uT()}function Bp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cT(t){const e=Bp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Bh(o)}}}function Bh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function hT(t,e){return Gr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t,e){return ri(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(t,e){return ri(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function dT(t,e){return ri(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Pc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Fs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await co(e,r,"signInWithPassword");return Ua(e,s)}else return Ua(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await co(e,r,"signInWithPassword");return Ua(e,i)}else return Promise.reject(s)});case"emailLink":return fT(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dT(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(t,e){return ri(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="http://localhost";class nr extends Pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pr(e,n)}buildRequest(){const e={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mT(t){const e=us(hs(t)).link,n=e?us(hs(e)).deep_link_id:null,r=us(hs(t)).deep_link_id;return(r?us(hs(r)).link:null)||r||n||e||t}class Sc{constructor(e){var n,r,s,i,o,a;const l=us(hs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=gT((s=l.mode)!==null&&s!==void 0?s:null);K(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mT(e);try{return new Sc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.providerId=Qr.PROVIDER_ID}static credential(e,n){return Fs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sc.parseLink(n);return K(r,"argument-error"),Fs._fromEmailAndCode(e,r.code,r.tenantId)}}Qr.PROVIDER_ID="password";Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Cc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends si{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends si{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends si{constructor(){super("twitter.com")}static credential(e,n){return nr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t,e){return ri(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qn._fromIdTokenResponse(e,r,s),o=$h(r);return new rr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$h(r);return new rr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $h(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Jt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new uo(e,n,r,s)}}function $p(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?uo._fromErrorAndOperation(t,i,e,r):i})}async function _T(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ls(t,$p(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Rc(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),rr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t,e,n=!1){const r="signIn",s=await $p(t,r,e),i=await rr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vT(t,e){return jp(cr(t),e)}async function ET(t,e,n){var r;const s=cr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await co(s,i,"signUpPassword");o=Fa(s,c)}else o=Fa(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await co(s,i,"signUpPassword");return Fa(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await rr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function IT(t,e,n){return vT(Ne(t),Qr.credential(e,n))}function wT(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function TT(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function AT(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function RT(t){return Ne(t).signOut()}const ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ho,"1"),this.storage.removeItem(ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(){const t=et();return bc(t)||Qo(t)}const PT=1e3,ST=10;class qp extends Hp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bT()&&Yw(),this.fallbackToPolling=xp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Jw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ST):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qp.type="LOCAL";const CT=qp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp extends Hp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kp.type="SESSION";const Wp=Kp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await kT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=kc("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function NT(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function DT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MT(){return zp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="firebaseLocalStorageDb",VT=1,fo="firebaseLocalStorage",Qp="fbase_key";class ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([fo],e?"readwrite":"readonly").objectStore(fo)}function LT(){const t=indexedDB.deleteDatabase(Gp);return new ii(t).toPromise()}function bl(){const t=indexedDB.open(Gp,VT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fo,{keyPath:Qp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fo)?e(r):(r.close(),await LT(),e(await bl()))})})}async function jh(t,e,n){const r=Jo(t,!0).put({[Qp]:e,value:n});return new ii(r).toPromise()}async function UT(t,e){const n=Jo(t,!1).get(e),r=await new ii(n).toPromise();return r===void 0?null:r.value}function Hh(t,e){const n=Jo(t,!0).delete(e);return new ii(n).toPromise()}const FT=800,BT=3;class Xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(MT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DT(),!this.activeServiceWorker)return;this.sender=new OT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await jh(e,ho,"1"),await Hh(e,ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jo(s,!1).getAll();return new ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xp.type="LOCAL";const $T=Xp;new ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e){return e?rn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jT(t){return jp(t.auth,new Oc(t),t.bypassAuthState)}function HT(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),yT(n,new Oc(t),t.bypassAuthState)}async function qT(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),_T(n,new Oc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jT;case"linkViaPopup":case"linkViaRedirect":return qT;case"reauthViaPopup":case"reauthViaRedirect":return HT;default:wt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=new ni(2e3,1e4);async function WT(t,e,n){const r=cr(t);Dw(t,e,Cc);const s=Jp(r,n);return new Hn(r,"signInViaPopup",e,s).executeNotNull()}class Hn extends Yp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KT.get())};e()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="pendingRedirect",Gi=new Map;class GT extends Yp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const r=await QT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QT(t,e){const n=YT(e),r=JT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function XT(t,e){Gi.set(t._key(),e)}function JT(t){return rn(t._redirectPersistence)}function YT(t){return zi(zT,t.config.apiKey,t.name)}async function ZT(t,e,n=!1){const r=cr(t),s=Jp(r,e),o=await new GT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=10*60*1e3;class t0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e0&&this.cachedEventUids.clear(),this.cachedEventUids.has(qh(e))}saveEventToCache(e){this.cachedEventUids.add(qh(e)),this.lastProcessedEventTime=Date.now()}}function qh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i0=/^https?/;async function o0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await r0(t);for(const n of e)try{if(a0(n))return}catch{}wt(t,"unauthorized-domain")}function a0(t){const e=Rl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!i0.test(n))return!1;if(s0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new ni(3e4,6e4);function Kh(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function c0(t){return new Promise((e,n)=>{var r,s,i;function o(){Kh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kh(),n(Kt(t,"network-request-failed"))},timeout:l0.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=eT("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},Up(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function u0(t){return Qi=Qi||c0(t),Qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new ni(5e3,15e3),f0="__/auth/iframe",d0="emulator/auth/iframe",p0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m0(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ac(e,d0):`https://${t.config.authDomain}/${f0}`,r={apiKey:e.apiKey,appName:t.name,v:lr},s=g0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ti(r).slice(1)}`}async function _0(t){const e=await u0(t),n=Wt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:m0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},h0.get());function l(){Wt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v0=500,E0=600,I0="_blank",w0="http://localhost";class Wh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T0(t,e,n,r=v0,s=E0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},y0),{width:r.toString(),height:s.toString(),top:i,left:o}),c=et().toLowerCase();n&&(a=Cp(c)?I0:n),Sp(c)&&(e=e||w0,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,_])=>`${f}${g}=${_},`,"");if(Xw(c)&&a!=="_self")return A0(e||"",a),new Wh(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Wh(h)}function A0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="__/auth/handler",b0="emulator/auth/handler",P0=encodeURIComponent("fac");async function zh(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:lr,eventId:s};if(e instanceof Cc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof si){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${P0}=${encodeURIComponent(l)}`:"";return`${S0(t)}?${ti(a).slice(1)}${c}`}function S0({config:t}){return t.emulator?Ac(t,b0):`https://${t.authDomain}/${R0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="webStorageSupport";class C0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wp,this._completeRedirectFn=ZT,this._overrideRedirectResult=XT}async _openPopup(e,n,r,s){var i;cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zh(e,n,r,Rl(),s);return T0(e,o,kc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zh(e,n,r,Rl(),s);return NT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _0(e),r=new t0(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ba,{type:Ba},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ba];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=o0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xp()||bc()||Qo()}}const k0=C0;var Gh="@firebase/auth",Qh="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function D0(t){tr(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mp(t)},c=new iT(r,s,i,l);return aT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new kn("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new O0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(Gh,Qh,N0(t)),qt(Gh,Qh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=5*60,M0=dp("authIdTokenMaxAge")||x0;let Xh=null;const V0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>M0)return;const s=n==null?void 0:n.token;Xh!==s&&(Xh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jh(t=Ic()){const e=Go(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oT(t,{popupRedirectResolver:k0,persistence:[$T,CT,Wp]}),r=dp("authTokenSyncURL");if(r){const i=V0(r);TT(n,i,()=>i(n.currentUser)),wT(n,o=>i(o))}const s=up("auth");return s&&lT(n,`http://${s}`),n}D0("Browser");var L0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Nc=Nc||{},W=L0||self;function Yo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function U0(t){return Object.prototype.hasOwnProperty.call(t,$a)&&t[$a]||(t[$a]=++F0)}var $a="closure_uid_"+(1e9*Math.random()>>>0),F0=0;function B0(t,e,n){return t.call.apply(t.bind,arguments)}function $0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=B0:Ye=$0,Ye.apply(null,arguments)}function Si(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function xn(){this.s=this.s,this.o=this.o}var j0=0;xn.prototype.s=!1;xn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),j0!=0)&&U0(this)};xn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var H0=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function Bs(t){return/^[\s\xa0]*$/.test(t)}function Zo(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return Zo().indexOf(t)!=-1}function xc(t){return xc[" "](t),t}xc[" "]=function(){};function q0(t,e){var n=VA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var K0=Ft("Opera"),Vr=Ft("Trident")||Ft("MSIE"),tg=Ft("Edge"),Pl=tg||Vr,ng=Ft("Gecko")&&!(Zo().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),W0=Zo().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function rg(){var t=W.document;return t?t.documentMode:void 0}var Sl;e:{var ja="",Ha=function(){var t=Zo();if(ng)return/rv:([^\);]+)(\)|;)/.exec(t);if(tg)return/Edge\/([\d\.]+)/.exec(t);if(Vr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(W0)return/WebKit\/(\S+)/.exec(t);if(K0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ha&&(ja=Ha?Ha[1]:""),Vr){var qa=rg();if(qa!=null&&qa>parseFloat(ja)){Sl=String(qa);break e}}Sl=ja}var Cl;if(W.document&&Vr){var Zh=rg();Cl=Zh||parseInt(Sl,10)||void 0}else Cl=void 0;var z0=Cl;function $s(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ng){e:{try{xc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:G0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$s.$.h.call(this)}}Be($s,Ze);var G0={2:"touch",3:"pen",4:"mouse"};$s.prototype.h=function(){$s.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ai="closure_listenable_"+(1e6*Math.random()|0),Q0=0;function X0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Q0,this.fa=this.ia=!1}function ea(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Mc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function J0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function sg(t){const e={};for(const n in t)e[n]=t[n];return e}const ef="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ig(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<ef.length;i++)n=ef[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ta(t){this.src=t,this.g={},this.h=0}ta.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ol(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new X0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function kl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=eg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ea(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ol(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Vc="closure_lm_"+(1e6*Math.random()|0),Ka={};function og(t,e,n,r,s){if(r&&r.once)return lg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)og(t,e[i],n,r,s);return null}return n=Fc(n),t&&t[ai]?t.O(e,n,oi(r)?!!r.capture:!!r,s):ag(t,e,n,!1,r,s)}function ag(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=oi(s)?!!s.capture:!!s,a=Uc(t);if(a||(t[Vc]=a=new ta(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Y0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)H0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ug(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Y0(){function t(n){return e.call(t.src,t.listener,n)}const e=Z0;return t}function lg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)lg(t,e[i],n,r,s);return null}return n=Fc(n),t&&t[ai]?t.P(e,n,oi(r)?!!r.capture:!!r,s):ag(t,e,n,!0,r,s)}function cg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)cg(t,e[i],n,r,s);else r=oi(r)?!!r.capture:!!r,n=Fc(n),t&&t[ai]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ol(i,n,r,s),-1<n&&(ea(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ol(e,n,r,s)),(n=-1<t?e[t]:null)&&Lc(n))}function Lc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ai])kl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ug(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Uc(e))?(kl(n,t),n.h==0&&(n.src=null,e[Vc]=null)):ea(t)}}}function ug(t){return t in Ka?Ka[t]:Ka[t]="on"+t}function Z0(t,e){if(t.fa)t=!0;else{e=new $s(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Lc(t),t=n.call(r,e)}return t}function Uc(t){return t=t[Vc],t instanceof ta?t:null}var Wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fc(t){return typeof t=="function"?t:(t[Wa]||(t[Wa]=function(e){return t.handleEvent(e)}),t[Wa])}function Ue(){xn.call(this),this.i=new ta(this),this.S=this,this.J=null}Be(Ue,xn);Ue.prototype[ai]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){cg(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var s=e;e=new Ze(r,t),ig(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ci(o,r,!0,e)&&s}if(o=e.g=t,s=Ci(o,r,!0,e)&&s,s=Ci(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ci(o,r,!1,e)&&s}Ue.prototype.N=function(){if(Ue.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ea(n[r]);delete t.g[e],t.h--}}this.J=null};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ci(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&kl(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Bc=W.JSON.stringify;class eA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function tA(){var t=$c;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nA{constructor(){this.h=this.g=null}add(e,n){const r=hg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hg=new eA(()=>new rA,t=>t.reset());class rA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function iA(t){W.setTimeout(()=>{throw t},0)}let js,Hs=!1,$c=new nA,fg=()=>{const t=W.Promise.resolve(void 0);js=()=>{t.then(oA)}};var oA=()=>{for(var t;t=tA();){try{t.h.call(t.g)}catch(n){iA(n)}var e=hg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hs=!1};function na(t,e){Ue.call(this),this.h=t||1,this.g=e||W,this.j=Ye(this.qb,this),this.l=Date.now()}Be(na,Ue);D=na.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(jc(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){na.$.N.call(this),jc(this),delete this.g};function Hc(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function dg(t){t.g=Hc(()=>{t.g=null,t.i&&(t.i=!1,dg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aA extends xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dg(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qs(t){xn.call(this),this.h=t,this.g={}}Be(qs,xn);var tf=[];function pg(t,e,n,r){Array.isArray(n)||(n&&(tf[0]=n.toString()),n=tf);for(var s=0;s<n.length;s++){var i=og(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function gg(t){Mc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lc(e)},t),t.g={}}qs.prototype.N=function(){qs.$.N.call(this),gg(this)};qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ra(){this.g=!0}ra.prototype.Ea=function(){this.g=!1};function lA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function cA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ir(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hA(t,n)+(r?" "+r:"")})}function uA(t,e){t.info(function(){return"TIMEOUT: "+e})}ra.prototype.info=function(){};function hA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Bc(n)}catch{return e}}var ur={},nf=null;function sa(){return nf=nf||new Ue}ur.Ta="serverreachability";function mg(t){Ze.call(this,ur.Ta,t)}Be(mg,Ze);function Ks(t){const e=sa();qe(e,new mg(e))}ur.STAT_EVENT="statevent";function _g(t,e){Ze.call(this,ur.STAT_EVENT,t),this.stat=e}Be(_g,Ze);function rt(t){const e=sa();qe(e,new _g(e,t))}ur.Ua="timingevent";function yg(t,e){Ze.call(this,ur.Ua,t),this.size=e}Be(yg,Ze);function li(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var ia={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qc(){}qc.prototype.h=null;function rf(t){return t.h||(t.h=t.i())}function Eg(){}var ci={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kc(){Ze.call(this,"d")}Be(Kc,Ze);function Wc(){Ze.call(this,"c")}Be(Wc,Ze);var Nl;function oa(){}Be(oa,qc);oa.prototype.g=function(){return new XMLHttpRequest};oa.prototype.i=function(){return{}};Nl=new oa;function ui(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new qs(this),this.P=fA,t=Pl?125:void 0,this.V=new na(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ig}function Ig(){this.i=null,this.g="",this.h=!1}var fA=45e3,Dl={},po={};D=ui.prototype;D.setTimeout=function(t){this.P=t};function xl(t,e,n){t.L=1,t.v=la(un(e)),t.s=n,t.S=!0,wg(t,null)}function wg(t,e){t.G=Date.now(),hi(t),t.A=un(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),kg(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ig,t.g=Jg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new aA(Ye(t.Pa,t,t.g),t.O)),pg(t.U,t.g,"readystatechange",t.nb),e=t.I?sg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ks(),lA(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&Bt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=Bt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Pl||this.g&&(this.h.h||this.g.ja()||lf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ks(3):Ks(2)),aa(this);var n=this.g.da();this.ca=n;t:if(Tg(this)){var r=lf(this.g);t="";var s=r.length,i=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),Is(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cA(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bs(a)){var c=a;break t}}c=null}if(n=c)Ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ml(this,n);else{this.i=!1,this.o=3,rt(12),qn(this),Is(this);break e}}this.S?(Ag(this,u,o),Pl&&this.i&&u==3&&(pg(this.U,this.V,"tick",this.mb),this.V.start())):(Ir(this.j,this.m,o,null),Ml(this,o)),u==4&&qn(this),this.i&&!this.J&&(u==4?zg(this.l,this):(this.i=!1,hi(this)))}else DA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),qn(this),Is(this)}}}catch{}finally{}};function Tg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ag(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=dA(t,n),s==po){e==4&&(t.o=4,rt(14),r=!1),Ir(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Dl){t.o=4,rt(15),Ir(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ir(t.j,t.m,s,null),Ml(t,s);Tg(t)&&s!=po&&s!=Dl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yc(e),e.M=!0,rt(11))):(Ir(t.j,t.m,n,"[Invalid Chunked Response]"),qn(t),Is(t))}D.mb=function(){if(this.g){var t=Bt(this.g),e=this.g.ja();this.C<e.length&&(aa(this),Ag(this,t,e),this.i&&t!=4&&hi(this))}};function dA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?po:(n=Number(e.substring(n,r)),isNaN(n)?Dl:(r+=1,r+n>e.length?po:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,qn(this)};function hi(t){t.Y=Date.now()+t.P,Rg(t,t.P)}function Rg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=li(Ye(t.lb,t),e)}function aa(t){t.B&&(W.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(uA(this.j,this.A),this.L!=2&&(Ks(),rt(17)),qn(this),this.o=2,Is(this)):Rg(this,this.Y-t)};function Is(t){t.l.H==0||t.J||zg(t.l,t)}function qn(t){aa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,jc(t.V),gg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ml(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Vl(n.i,t))){if(!t.K&&Vl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)_o(n),ha(n);else break e;Jc(n),rt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=li(Ye(n.ib,n),6e3));if(1>=Dg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Kn(n,11)}else if((t.K||n.g==t)&&_o(n),!Bs(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(zc(i,i.h),i.h=null))}if(r.F){const A=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(r.Da=A,_e(r.I,r.F,A))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Xg(r,r.J?r.pa:null,r.Y),o.K){xg(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(aa(a),hi(a)),r.g=o}else Kg(r);0<n.j.length&&fa(n)}else c[0]!="stop"&&c[0]!="close"||Kn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Kn(n,7):Xc(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ks(4)}catch{}}function pA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function gA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function bg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=gA(t),r=pA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Pg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Xn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xn){this.h=t.h,go(this,t.j),this.s=t.s,this.g=t.g,mo(this,t.m),this.l=t.l;var e=t.i,n=new Ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sf(this,n),this.o=t.o}else t&&(e=String(t).match(Pg))?(this.h=!1,go(this,e[1]||"",!0),this.s=fs(e[2]||""),this.g=fs(e[3]||"",!0),mo(this,e[4]),this.l=fs(e[5]||"",!0),sf(this,e[6]||"",!0),this.o=fs(e[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}Xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ds(e,of,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ds(e,of,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ds(n,n.charAt(0)=="/"?vA:yA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ds(n,IA)),t.join("")};function un(t){return new Xn(t)}function go(t,e,n){t.j=n?fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function mo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sf(t,e,n){e instanceof Ws?(t.i=e,wA(t.i,t.h)):(n||(e=ds(e,EA)),t.i=new Ws(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function la(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_A),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _A(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var of=/[#\/\?@]/g,yA=/[#\?:]/g,vA=/[#\?]/g,EA=/[#\?@]/g,IA=/#/g;function Ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mn(t){t.g||(t.g=new Map,t.h=0,t.i&&mA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ws.prototype;D.add=function(t,e){Mn(this),this.i=null,t=Xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Sg(t,e){Mn(t),e=Xr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Cg(t,e){return Mn(t),e=Xr(t,e),t.g.has(e)}D.forEach=function(t,e){Mn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){Mn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){Mn(this);let e=[];if(typeof t=="string")Cg(this,t)&&(e=e.concat(this.g.get(Xr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Mn(this),this.i=null,t=Xr(this,t),Cg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function kg(t,e,n){Sg(t,e),0<n.length&&(t.i=null,t.g.set(Xr(t,e),Dc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wA(t,e){e&&!t.j&&(Mn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Sg(this,r),kg(this,s,n))},t)),t.j=e}var TA=class{constructor(t,e){this.g=t,this.map=e}};function Og(t){this.l=t||AA,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AA=10;function Ng(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Dg(t){return t.h?1:t.g?t.g.size:0}function Vl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zc(t,e){t.g?t.g.add(e):t.h=e}function xg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Og.prototype.cancel=function(){if(this.i=Mg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Dc(t.i)}var RA=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function bA(){this.g=new RA}function PA(t,e,n){const r=n||"";try{bg(t,function(s,i){let o=s;oi(s)&&(o=Bc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function SA(t,e){const n=new ra;if(W.Image){const r=new Image;r.onload=Si(ki,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Si(ki,n,r,"TestLoadImage: error",!1,e),r.onabort=Si(ki,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Si(ki,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ki(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function fi(t){this.l=t.fc||null,this.j=t.ob||!1}Be(fi,qc);fi.prototype.g=function(){return new ca(this.l,this.j)};fi.prototype.i=function(t){return function(){return t}}({});function ca(t,e){Ue.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(ca,Ue);var Gc=0;D=ca.prototype;D.open=function(t,e){if(this.readyState!=Gc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=Gc};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Vg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?di(this):zs(this),this.readyState==3&&Vg(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,di(this))};D.Ya=function(t){this.g&&(this.response=t,di(this))};D.ka=function(){this.g&&di(this)};function di(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CA=W.JSON.parse;function be(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Lg,this.L=this.M=!1}Be(be,Ue);var Lg="",kA=/^https?$/i,OA=["POST","PUT"];D=be.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nl.g(),this.C=this.u?rf(this.u):rf(Nl),this.g.onreadystatechange=Ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){af(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=eg(OA,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bg(this),0<this.B&&((this.L=NA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.ua,this)):this.A=Hc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){af(this,i)}};function NA(t){return Vr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Nc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function af(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ug(t),ua(t)}function Ug(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),ua(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ua(this,!0)),be.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?Fg(this):this.kb())};D.kb=function(){Fg(this)};function Fg(t){if(t.h&&typeof Nc<"u"&&(!t.C[1]||Bt(t)!=4||t.da()!=2)){if(t.v&&Bt(t)==4)Hc(t.La,0,t);else if(qe(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Pg)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),r=!kA.test(s?s.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var i=2<Bt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Ug(t)}}finally{ua(t)}}}}function ua(t,e){if(t.g){Bg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Bg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Bt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CA(e)}};function lf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Lg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function DA(t){const e={};t=(t.g&&2<=Bt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Bs(t[r]))continue;var n=sA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}J0(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $g(t){let e="";return Mc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Qc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$g(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jg(t){this.Ga=0,this.j=[],this.l=new ra,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rs("baseRetryDelayMs",5e3,t),this.hb=rs("retryDelaySeedMs",1e4,t),this.eb=rs("forwardChannelMaxRetries",2,t),this.xa=rs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Og(t&&t.concurrentRequestLimit),this.Ja=new bA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=jg.prototype;D.ra=8;D.H=1;function Xc(t){if(Hg(t),t.H==3){var e=t.W++,n=un(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),pi(t,n),e=new ui(t,t.l,e),e.L=2,e.v=la(un(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Jg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),hi(e)}Qg(t)}function ha(t){t.g&&(Yc(t),t.g.cancel(),t.g=null)}function Hg(t){ha(t),t.u&&(W.clearTimeout(t.u),t.u=null),_o(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function fa(t){if(!Ng(t.i)&&!t.m){t.m=!0;var e=t.Na;js||fg(),Hs||(js(),Hs=!0),$c.add(e,t),t.C=0}}function xA(t,e){return Dg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=li(Ye(t.Na,t,e),Gg(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ui(this,this.l,t);let i=this.s;if(this.U&&(i?(i=sg(i),ig(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qg(this,s,e),n=un(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),pi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String($g(i)))+"&"+e:this.o&&Qc(n,this.o,i)),zc(this.i,s),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),s.aa=!0,xl(s,n,null)):xl(s,n,e),this.H=2}}else this.H==3&&(t?cf(this,t):this.j.length==0||Ng(this.i)||cf(this))};function cf(t,e){var n;e?n=e.m:n=t.W++;const r=un(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),pi(t,r),t.o&&t.s&&Qc(r,t.o,t.s),n=new ui(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=qg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),zc(t.i,n),xl(n,r,e)}function pi(t,e){t.na&&Mc(t.na,function(n,r){_e(e,r,n)}),t.h&&bg({},function(n,r){_e(e,r,n)})}function qg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ye(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{PA(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Kg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;js||fg(),Hs||(js(),Hs=!0),$c.add(e,t),t.A=0}}function Jc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=li(Ye(t.Ma,t),Gg(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Wg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=li(Ye(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),ha(this),Wg(this))};function Yc(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Wg(t){t.g=new ui(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=un(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),pi(t,e),t.o&&t.s&&Qc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=la(un(e)),n.s=null,n.S=!0,wg(n,t)}D.ib=function(){this.v!=null&&(this.v=null,ha(this),Jc(this),rt(19))};function _o(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function zg(t,e){var n=null;if(t.g==e){_o(t),Yc(t),t.g=null;var r=2}else if(Vl(t.i,e))n=e.F,xg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=sa(),qe(r,new yg(r,n)),fa(t)}else Kg(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&xA(t,e)||r==2&&Jc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Kn(t,5);break;case 4:Kn(t,10);break;case 3:Kn(t,6);break;default:Kn(t,2)}}}function Gg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Kn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ye(t.pb,t);n||(n=new Xn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||go(n,"https"),la(n)),SA(n.toString(),r)}else rt(2);t.H=0,t.h&&t.h.za(e),Qg(t),Hg(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function Qg(t){if(t.H=0,t.ma=[],t.h){const e=Mg(t.i);(e.length!=0||t.j.length!=0)&&(Yh(t.ma,e),Yh(t.ma,t.j),t.i.i.length=0,Dc(t.j),t.j.length=0),t.h.ya()}}function Xg(t,e,n){var r=n instanceof Xn?un(n):new Xn(n);if(r.g!="")e&&(r.g=e+"."+r.g),mo(r,r.m);else{var s=W.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Xn(null);r&&go(i,r),e&&(i.g=e),s&&mo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),pi(t,r),r}function Jg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new be(new fi({ob:!0})):new be(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Yg(){}D=Yg.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function yo(){if(Vr&&!(10<=Number(z0)))throw Error("Environmental error: no available transport.")}yo.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Ue.call(this),this.g=new jg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Jr(this)}Be(mt,Ue);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Xg(t,null,t.Y),fa(t)};mt.prototype.close=function(){Xc(this.g)};mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bc(t),t=n);e.j.push(new TA(e.fb++,t)),e.H==3&&fa(e)};mt.prototype.N=function(){this.g.h=null,delete this.j,Xc(this.g),delete this.g,mt.$.N.call(this)};function Zg(t){Kc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Zg,Kc);function em(){Wc.call(this),this.status=1}Be(em,Wc);function Jr(t){this.g=t}Be(Jr,Yg);Jr.prototype.Ba=function(){qe(this.g,"a")};Jr.prototype.Aa=function(t){qe(this.g,new Zg(t))};Jr.prototype.za=function(t){qe(this.g,new em)};Jr.prototype.ya=function(){qe(this.g,"b")};function MA(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(Qt,MA);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function za(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)za(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){za(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){za(this,r),s=0;break}}this.h=s,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ue(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var VA={};function Zc(t){return-128<=t&&128>t?q0(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function $t(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return He($t(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ll;return new ue(e,0)}function tm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return He(tm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=$t(Math.pow(e,8)),r=Sr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=$t(Math.pow(e,i)),r=r.R(i).add($t(o))):(r=r.R(n),r=r.add($t(o)))}return r}var Ll=4294967296,Sr=Zc(0),Ul=Zc(1),uf=Zc(16777216);D=ue.prototype;D.ea=function(){if(vt(this))return-He(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ll+r)*e,e*=Ll}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(sn(this))return"0";if(vt(this))return"-"+He(this).toString(t);for(var e=$t(Math.pow(t,6)),n=this,r="";;){var s=Eo(n,e).g;n=vo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,sn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vt(t){return t.h==-1}D.X=function(t){return t=vo(this,t),vt(t)?-1:sn(t)?0:1};function He(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ue(n,~t.h).add(Ul)}D.abs=function(){return vt(this)?He(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function vo(t,e){return t.add(He(e))}D.R=function(t){if(sn(this)||sn(t))return Sr;if(vt(this))return vt(t)?He(this).R(He(t)):He(He(this).R(t));if(vt(t))return He(this.R(He(t)));if(0>this.X(uf)&&0>t.X(uf))return $t(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Oi(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Oi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Oi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Oi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ue(n,0)};function Oi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ss(t,e){this.g=t,this.h=e}function Eo(t,e){if(sn(e))throw Error("division by zero");if(sn(t))return new ss(Sr,Sr);if(vt(t))return e=Eo(He(t),e),new ss(He(e.g),He(e.h));if(vt(e))return e=Eo(t,He(e)),new ss(He(e.g),e.h);if(30<t.g.length){if(vt(t)||vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ul,r=e;0>=r.X(t);)n=hf(n),r=hf(r);var s=_r(n,1),i=_r(r,1);for(r=_r(r,2),n=_r(n,2);!sn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=_r(r,1),n=_r(n,1)}return e=vo(t,s.R(e)),new ss(s,e)}for(s=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=$t(n),o=i.R(e);vt(o)||0<o.X(t);)n-=r,i=$t(n),o=i.R(e);sn(i)&&(i=Ul),s=s.add(i),t=vo(t,o)}return new ss(s,t)}D.gb=function(t){return Eo(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ue(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ue(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ue(n,this.h^t.h)};function hf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ue(n,t.h)}function _r(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ue(s,t.h)}yo.prototype.createWebChannel=yo.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;ia.NO_ERROR=0;ia.TIMEOUT=8;ia.HTTP_ERROR=6;vg.COMPLETE="complete";Eg.EventType=ci;ci.OPEN="a";ci.CLOSE="b";ci.ERROR="c";ci.MESSAGE="d";Ue.prototype.listen=Ue.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=$t;ue.fromString=tm;var LA=function(){return new yo},UA=function(){return sa()},Ga=ia,FA=vg,BA=ur,ff={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$A=fi,Ni=Eg,jA=be,HA=ue;const df="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new vc("@firebase/firestore");function pf(){return sr.logLevel}function j(t,...e){if(sr.logLevel<=se.DEBUG){const n=e.map(eu);sr.debug(`Firestore (${Yr}): ${t}`,...n)}}function ir(t,...e){if(sr.logLevel<=se.ERROR){const n=e.map(eu);sr.error(`Firestore (${Yr}): ${t}`,...n)}}function Io(t,...e){if(sr.logLevel<=se.WARN){const n=e.map(eu);sr.warn(`Firestore (${Yr}): ${t}`,...n)}}function eu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw ir(e),new Error(e)}function Fe(t,e){t||ee()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class KA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WA{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new nm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Ge(e)}}class zA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new QA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=JA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Lr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ve(0,0))}static max(){return new Te(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Gs{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const YA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Gs{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return YA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Re.fromString(e))}static fromName(e){return new Q(Re.fromString(e).popFirst(5))}static empty(){return new Q(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Re(e.slice()))}}function ZA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new On(s,Q.empty(),e)}function eR(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new On(Te.min(),Q.empty(),-1)}static max(){return new On(Te.max(),Q.empty(),-1)}}function tR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==nR)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function da(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}im.ae=-1;function tu(t){return t==null}function wo(t){return t===0&&1/t==-1/0}function sR(t){return typeof t=="number"&&Number.isInteger(t)&&!wo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mf(this.data.getIterator())}getIteratorFrom(e){return new mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new it(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Lr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new iR("Invalid base64 string: "+i):i}}(e);return new hn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new hn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hn.EMPTY_BYTE_STRING=new hn("");const oR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=oR.exec(t);if(Fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?hn.fromBase64String(t):hn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function am(t){const e=t.mapValue.fields.__previous_value__;return nu(e)?am(e):e}function To(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nu(t)?4:lR(t)?9007199254740991:10:ee()}function Xt(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=or(s.timestampValue),a=or(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Qs(s.bytesValue).isEqual(Qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),a=je(i.doubleValue);return o===a?wo(o)===wo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Lr(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(gf(o)!==gf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xt(o[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function Xs(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=je(i.integerValue||i.doubleValue),l=je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return _f(t.timestampValue,e.timestampValue);case 4:return _f(To(t),To(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Qs(i),l=Qs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(je(i.latitude),je(o.latitude));return a!==0?a:ge(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Fr(a[c],l[c]);if(u)return u}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===xi.mapValue&&o===xi.mapValue)return 0;if(i===xi.mapValue)return 1;if(o===xi.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=ge(l[h],u[h]);if(f!==0)return f;const g=Fr(a[l[h]],c[u[h]]);if(g!==0)return g}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function _f(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=or(t),r=or(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Br(t){return Fl(t)}function Fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fl(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function Bl(t){return!!t&&"integerValue"in t}function ru(t){return!!t&&"arrayValue"in t}function Xi(t){return!!t&&"mapValue"in t}function ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ws(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ws(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(ws(this.value))}}function lm(t){const e=[];return gi(t.fields,(n,r)=>{const s=new Je([n]);if(Xi(r)){const i=lm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,Te.min(),Te.min(),Te.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new Rt(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new Rt(e,2,n,Te.min(),Te.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,Te.min(),Te.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.position=e,this.inclusive=n}}function yf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n="asc"){this.field=e,this.dir=n}}function cR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{}class Me extends cm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hR(e,n,r):n==="array-contains"?new pR(e,r):n==="in"?new gR(e,r):n==="not-in"?new mR(e,r):n==="array-contains-any"?new _R(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fR(e,r):new dR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fr(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Fr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nn extends cm{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Nn(e,n)}matches(e){return um(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function um(t){return t.op==="and"}function hm(t){return uR(t)&&um(t)}function uR(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function $l(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Br(t.value);if(hm(t))return t.filters.map(e=>$l(e)).join(",");{const e=t.filters.map(n=>$l(n)).join(",");return`${t.op}(${e})`}}function fm(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)}(t,e):t instanceof Nn?function(r,s){return s instanceof Nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&fm(o,s.filters[a]),!0):!1}(t,e):void ee()}function dm(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Br(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(dm).join(" ,")+"}"}(t):"Filter"}class hR extends Me{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class fR extends Me{constructor(e,n){super(e,"in",n),this.keys=pm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dR extends Me{constructor(e,n){super(e,"not-in",n),this.keys=pm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class pR extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ru(n)&&Xs(n.arrayValue,this.value)}}class gR extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xs(this.value.arrayValue,n)}}class mR extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xs(this.value.arrayValue,n)}}class _R extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Ef(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yR(t,e,n,r,s,i,o)}function su(t){const e=ve(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$l(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Br(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Br(r)).join(",")),e.he=n}return e.he}function iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vf(t.startAt,e.startAt)&&vf(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function vR(t,e,n,r,s,i,o,a){return new pa(t,e,n,r,s,i,o,a)}function ER(t){return new pa(t)}function If(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IR(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function wR(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function TR(t){return t.collectionGroup!==null}function Cr(t){const e=ve(t);if(e.Pe===null){e.Pe=[];const n=wR(e),r=IR(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ts(n)),e.Pe.push(new Ts(Je.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ts(Je.keyField(),i))}}}return e.Pe}function $r(t){const e=ve(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Ef(e.path,e.collectionGroup,Cr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Cr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ts(i.field,o))}const r=e.endAt?new Ro(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ro(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ef(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function jl(t,e,n){return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gm(t,e){return iu($r(t),$r(e))&&t.limitType===e.limitType}function mm(t){return`${su($r(t))}|lt:${t.limitType}`}function wf(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>dm(s)).join(", ")}]`),tu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Br(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Br(s)).join(",")),`Target(${r})`}($r(t))}; limitType=${t.limitType})`}function ou(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Cr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=yf(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Cr(r),s)||r.endAt&&!function(o,a,l){const c=yf(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Cr(r),s))}(t,e)}function AR(t){return(e,n)=>{let r=!1;for(const s of Cr(t)){const i=RR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RR(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Fr(l,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return om(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=new ct(Q.comparator);function bo(){return bR}const _m=new ct(Q.comparator);function Mi(...t){let e=_m;for(const n of t)e=e.insert(n.key,n);return e}function ym(t){let e=_m;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wn(){return As()}function vm(){return As()}function As(){return new Zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const PR=new ct(Q.comparator),SR=new it(Q.comparator);function Qe(...t){let e=SR;for(const n of t)e=e.add(n);return e}const CR=new it(ge);function kR(){return CR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wo(e)?"-0":e}}function Im(t){return{integerValue:""+t}}function OR(t,e){return sR(e)?Im(e):Em(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this._=void 0}}function NR(t,e,n){return t instanceof Po?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nu(i)&&(i=am(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Js?Tm(t,e):t instanceof Ys?Am(t,e):function(s,i){const o=wm(s,i),a=Tf(o)+Tf(s.Te);return Bl(o)&&Bl(s.Te)?Im(a):Em(s.serializer,a)}(t,e)}function DR(t,e,n){return t instanceof Js?Tm(t,e):t instanceof Ys?Am(t,e):n}function wm(t,e){return t instanceof So?function(r){return Bl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Po extends ga{}class Js extends ga{constructor(e){super(),this.elements=e}}function Tm(t,e){const n=Rm(e);for(const r of t.elements)n.some(s=>Xt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ys extends ga{constructor(e){super(),this.elements=e}}function Am(t,e){let n=Rm(e);for(const r of t.elements)n=n.filter(s=>!Xt(s,r));return{arrayValue:{values:n}}}class So extends ga{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Tf(t){return je(t.integerValue||t.doubleValue)}function Rm(t){return ru(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Js&&s instanceof Js||r instanceof Ys&&s instanceof Ys?Lr(r.elements,s.elements,Xt):r instanceof So&&s instanceof So?Xt(r.Te,s.Te):r instanceof Po&&s instanceof Po}(t.transform,e.transform)}class MR{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function bm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sm(t.key,an.none()):new mi(t.key,t.data,an.none());{const n=t.data,r=Pt.empty();let s=new it(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hr(t.key,r,new Ct(s.toArray()),an.none())}}function VR(t,e,n){t instanceof mi?function(s,i,o){const a=s.value.clone(),l=Rf(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(s,i,o){if(!Ji(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Rf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Pm(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Rs(t,e,n,r){return t instanceof mi?function(i,o,a,l){if(!Ji(i.precondition,o))return a;const c=i.value.clone(),u=bf(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(i,o,a,l){if(!Ji(i.precondition,o))return a;const c=bf(i.fieldTransforms,l,o),u=o.data;return u.setAll(Pm(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Ji(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function LR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=wm(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function Af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Lr(r,s,(i,o)=>xR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mi extends ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hr extends ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rf(t,e,n){const r=new Map;Fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,DR(o,a,n[s]))}return r}function bf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,NR(i,o,e))}return r}class Sm extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UR extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&VR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=bm(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&Lr(this.mutations,e.mutations,(n,r)=>Af(n,r))&&Lr(this.baseMutations,e.baseMutations,(n,r)=>Af(n,r))}}class au{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length);let s=function(){return PR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new au(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,te;function $R(t){switch(t){default:return ee();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function jR(t){if(t===void 0)return ir("GRPC error has no .code"),R.UNKNOWN;switch(t){case ke.OK:return R.OK;case ke.CANCELLED:return R.CANCELLED;case ke.UNKNOWN:return R.UNKNOWN;case ke.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ke.INTERNAL:return R.INTERNAL;case ke.UNAVAILABLE:return R.UNAVAILABLE;case ke.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ke.NOT_FOUND:return R.NOT_FOUND;case ke.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ke.ABORTED:return R.ABORTED;case ke.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ke.DATA_LOSS:return R.DATA_LOSS;default:return ee()}}(te=ke||(ke={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new HA([4294967295,4294967295],0);class HR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KR(t,e){return Hl(t,e.toTimestamp())}function kr(t){return Fe(!!t),Te.fromTimestamp(function(n){const r=or(n);return new Ve(r.seconds,r.nanos)}(t))}function Cm(t,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function WR(t){const e=Re.fromString(t);return Fe(eb(e)),e}function ql(t,e){return Cm(t.databaseId,e.path)}function zR(t){const e=WR(t);return e.length===4?Re.emptyPath():QR(e)}function GR(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QR(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pf(t,e,n){return{name:ql(t,e),fields:n.value.mapValue.fields}}function XR(t,e){let n;if(e instanceof mi)n={update:Pf(t,e.key,e.value)};else if(e instanceof Sm)n={delete:ql(t,e.key)};else if(e instanceof hr)n={update:Pf(t,e.key,e.data),updateMask:ZR(e.fieldMask)};else{if(!(e instanceof UR))return ee();n={verify:ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Js)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof So)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:KR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function JR(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?kr(s.updateTime):kr(i);return o.isEqual(Te.min())&&(o=kr(i)),new MR(o,s.transformResults||[])}(n,e))):[]}function YR(t){let e=zR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=km(h);return f instanceof Nn&&hm(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new Ts(Er(_.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,tu(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,g=h.values||[];return new Ro(g,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,g=h.values||[];return new Ro(g,f)}(n.endAt)),vR(e,s,o,i,a,"F",l,c)}function km(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Er(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Er(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Er(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Er(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Er(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>km(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function Er(t){return Je.fromServerFormat(t.fieldPath)}function ZR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.ct=e}}function nb(t){const e=YR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.sn=new sb}addToCollectionParentIndex(e,n){return this.sn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(On.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class sb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new jr(0)}static On(){return new jr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.changes=new Zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Rs(r.mutation,s,Ct.empty(),Ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Qe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Qe()){const s=Wn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Mi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Qe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=bo();const o=As(),a=function(){return As()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof hr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Rs(u.mutation,c,u.mutation.getFieldMask(),Ve.now())):o.set(c.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new ob(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=As();let s=new ct((o,a)=>o-a),i=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ct.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Qe()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=vm();u.forEach(f=>{if(!i.has(f)){const g=bm(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(Wn());let a=-1,l=i;return o.next(c=>b.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Qe())).next(u=>({batchId:a,changes:ym(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Mi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Mi();return this.indexManager.getCollectionParents(e,s).next(o=>b.forEach(o,a=>{const l=function(u,h){return new pa(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Rt.newInvalidDocument(c)))});let o=Mi();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Rs(c.mutation,l,Ct.empty(),Ve.now()),ou(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return b.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:kr(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:nb(s.bundledQuery),readTime:kr(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.overlays=new ct(Q.comparator),this.cr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wn();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=Wn(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Wn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Wn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return b.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BR(n,r));let i=this.cr.get(n);i===void 0&&(i=Qe(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.lr=new it(De.hr),this.Pr=new it(De.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new De(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new De(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new Q(new Re([])),r=new De(n,e),s=new De(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new Q(new Re([])),r=new De(n,e),s=new De(n,e+1);let i=Qe();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new De(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return Q.comparator(e.key,n.key)||ge(e.mr,n.mr)}static Ir(e,n){return ge(e.mr,n.mr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new it(De.hr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new De(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),s=new De(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(ge);return n.forEach(s=>{const i=new De(s,0),o=new De(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),b.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new De(new Q(i),0);let a=new it(ge);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.mr)),!0)},o),b.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return b.forEach(n.mutations,s=>{const i=new De(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new De(n,0),s=this.pr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.Dr=e,this.docs=function(){return new ct(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=bo();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Rt.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bo();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||tR(eR(u),r)<=0||(s.has(u.key)||ou(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}vr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fb(this)}getSize(e){return b.resolve(this.size)}}class fb extends ib{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.persistence=e,this.Cr=new Zr(n=>su(n),iu),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new lu,this.targetCount=0,this.Or=jr.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),b.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new jr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Ln(n),b.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n){this.Nr={},this.overlays={},this.Br=new im(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new db(this),this.indexManager=new rb,this.remoteDocumentCache=function(s){return new hb(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new tb(n),this.Qr=new lb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new ub(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new gb(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return b.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class gb extends rR{constructor(e){super(),this.currentSequenceNumber=e}}class cu{constructor(e){this.persistence=e,this.Wr=new lu,this.Gr=null}static zr(e){return new cu(e)}get jr(){if(this.Gr)return this.Gr;throw ee()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.jr,r=>{const s=Q.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,Te.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return b.or([()=>b.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=Qe(),s=Qe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(If(n))return b.resolve(null);let r=$r(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jl(n,null,"F"),r=$r(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Qe(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,jl(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,r,s){return If(n)||s.isEqual(Te.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(pf()<=se.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wf(n)),this.ji(e,o,n,ZA(s,-1)))})}Gi(e,n){let r=new it(AR(e));return n.forEach((s,i)=>{ou(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return pf()<=se.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",wf(n)),this.Ki.getDocumentsMatchingQuery(e,n,On.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new ct(ge),this.Yi=new Zr(i=>su(i),iu),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ab(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function yb(t,e,n,r){return new _b(t,e,n,r)}async function Om(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Qe();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function vb(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let g=b.resolve();return f.forEach(_=>{g=g.next(()=>u.getEntry(l,_)).next(A=>{const T=c.docVersions.get(_);Fe(T!==null),A.version.compareTo(T)<0&&(h.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),u.addEntry(A)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Qe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Eb(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function Ib(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Sf{constructor(){this.activeTargetIds=kR()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wb{constructor(){this.Hs=new Sf,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Sf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi=null;function Qa(){return Vi===null?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection";class bb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=Qa(),l=this.mo(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,i,o),this.po(n,l,c,s).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Io("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=Ab[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,s){const i=Qa();return new Promise((o,a)=>{const l=new jA;l.setWithCredentials(!0),l.listenOnce(FA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ga.NO_ERROR:const u=l.getResponseJson();j(ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ga.TIMEOUT:j(ze,`RPC '${e}' ${i} timed out`),a(new H(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const h=l.getStatus();if(j(ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const _=function(T){const S=T.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(S)>=0?S:R.UNKNOWN}(g.status);a(new H(_,g.message))}else a(new H(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(R.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{j(ze,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);j(ze,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}wo(e,n,r){const s=Qa(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LA(),a=UA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new $A({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");j(ze,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,g=!1;const _=new Rb({so:T=>{g?j(ze,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(j(ze,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),j(ze,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},oo:()=>h.close()}),A=(T,S,N)=>{T.listen(S,L=>{try{N(L)}catch(C){setTimeout(()=>{throw C},0)}})};return A(h,Ni.EventType.OPEN,()=>{g||j(ze,`RPC '${e}' stream ${s} transport opened.`)}),A(h,Ni.EventType.CLOSE,()=>{g||(g=!0,j(ze,`RPC '${e}' stream ${s} transport closed`),_.Po())}),A(h,Ni.EventType.ERROR,T=>{g||(g=!0,Io(ze,`RPC '${e}' stream ${s} transport errored:`,T),_.Po(new H(R.UNAVAILABLE,"The operation could not be completed")))}),A(h,Ni.EventType.MESSAGE,T=>{var S;if(!g){const N=T.data[0];Fe(!!N);const L=N,C=L.error||((S=L[0])===null||S===void 0?void 0:S.error);if(C){j(ze,`RPC '${e}' stream ${s} received error:`,C);const Y=C.status;let le=function(J){const de=ke[J];if(de!==void 0)return jR(de)}(Y),Ee=C.message;le===void 0&&(le=R.INTERNAL,Ee="Unknown error status: "+Y+" with message "+C.message),g=!0,_.Po(new H(le,Ee)),h.close()}else j(ze,`RPC '${e}' stream ${s} received:`,N),_.Io(N)}}),A(a,BA.STAT_EVENT,T=>{T.stat===ff.PROXY?j(ze,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===ff.NOPROXY&&j(ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.ho()},0),_}}function Xa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return new HR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n,r,s,i,o,a,l){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Nm(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{e(()=>{const s=new H(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sb extends Pb{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=JR(e.writeResults,e.commitTime),r=kr(e.commitTime);return this.listener.u_(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=GR(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XR(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(R.UNKNOWN,s.toString())})}yo(e,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(R.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class kb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ir(n),this.d_=!1):j("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{yi(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ve(l);c.y_.add(4),await _i(c),c.b_.set("Unknown"),c.y_.delete(4),await ya(c)}(this))})}),this.b_=new kb(r,s)}}async function ya(t){if(yi(t))for(const e of t.w_)await e(!0)}async function _i(t){for(const e of t.w_)await e(!1)}function yi(t){return ve(t).y_.size===0}async function Dm(t,e,n){if(!da(e))throw e;t.y_.add(1),await _i(t),t.b_.set("Offline"),n||(n=()=>Eb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await ya(t)})}function xm(t,e){return e().catch(n=>Dm(t,n,e))}async function va(t){const e=ve(t),n=Dn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;Nb(e);)try{const s=await Ib(e.localStore,r);if(s===null){e.g_.length===0&&n.zo();break}r=s.batchId,Db(e,s)}catch(s){await Dm(e,s)}Mm(e)&&Vm(e)}function Nb(t){return yi(t)&&t.g_.length<10}function Db(t,e){t.g_.push(e);const n=Dn(t);n.Uo()&&n.__&&n.a_(e.mutations)}function Mm(t){return yi(t)&&!Dn(t).$o()&&t.g_.length>0}function Vm(t){Dn(t).start()}async function xb(t){Dn(t).l_()}async function Mb(t){const e=Dn(t);for(const n of t.g_)e.a_(n.mutations)}async function Vb(t,e,n){const r=t.g_.shift(),s=au.from(r,e,n);await xm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await va(t)}async function Lb(t,e){e&&Dn(t).__&&await async function(r,s){if(function(o){return $R(o)&&o!==R.ABORTED}(s.code)){const i=r.g_.shift();Dn(r).Go(),await xm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await va(r)}}(t,e),Mm(t)&&Vm(t)}async function kf(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.y_.add(3),await _i(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await ya(n)}async function Ub(t,e){const n=ve(t);e?(n.y_.delete(2),await ya(n)):e||(n.y_.add(2),await _i(n),n.b_.set("Unknown"))}function Dn(t){return t.C_||(t.C_=function(n,r,s){const i=ve(n);return i.P_(),new Sb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:xb.bind(null,t),uo:Lb.bind(null,t),c_:Mb.bind(null,t),u_:Vb.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await va(t)):(await t.C_.stop(),t.g_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new hu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lm(t,e){if(ir("AsyncQueue",`${e}: ${t}`),da(t))return new H(R.UNAVAILABLE,`${e}: ${t}`);throw t}class Fb{constructor(){this.queries=new Zr(e=>mm(e),gm),this.onlineState="Unknown",this.O_=new Set}}function Bb(t){t.O_.forEach(e=>{e.next()})}class $b{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Zr(a=>mm(a),gm),this.da=new Map,this.Aa=new Set,this.Ra=new ct(Q.comparator),this.Va=new Map,this.ma=new lu,this.fa={},this.ga=new Map,this.pa=jr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function jb(t,e,n){const r=Wb(t);try{const s=await function(o,a){const l=ve(o),c=Ve.now(),u=a.reduce((g,_)=>g.add(_.key),Qe());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=bo(),A=Qe();return l.Xi.getEntries(g,u).next(T=>{_=T,_.forEach((S,N)=>{N.isValidDocument()||(A=A.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(T=>{h=T;const S=[];for(const N of a){const L=LR(N,h.get(N.key).overlayedDocument);L!=null&&S.push(new hr(N.key,L,lm(L.value.mapValue),an.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,S,a)}).next(T=>{f=T;const S=T.applyToLocalDocumentSet(h,A);return l.documentOverlayCache.saveOverlays(g,T.batchId,S)})}).then(()=>({batchId:f.batchId,changes:ym(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new ct(ge)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ea(r,s.changes),await va(r.remoteStore)}catch(s){const i=Lm(s,"Failed to persist write");n.reject(i)}}function Of(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ve(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(c=!0)}),c&&Bb(l)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hb(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await vb(n.localStore,e);Fm(n,r,null),Um(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ea(n,s)}catch(s){await sm(s)}}async function qb(t,e,n){const r=ve(t);try{const s=await function(o,a){const l=ve(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Fe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Fm(r,e,n),Um(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ea(r,s)}catch(s){await sm(s)}}function Um(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function Fm(t,e,n){const r=ve(t);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}async function Ea(t,e,n){const r=ve(t),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=uu.qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(l,c){const u=ve(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(c,f=>b.forEach(f.Li,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>b.forEach(f.ki,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!da(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const g=u.Ji.get(f),_=g.snapshotVersion,A=g.withLastLimboFreeSnapshotVersion(_);u.Ji=u.Ji.insert(f,A)}}}(r.localStore,i))}async function Kb(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Om(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(l=>{l.reject(new H(R.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ea(n,r.ts)}}function Wb(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qb.bind(null,e),e}class Nf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yb(this.persistence,new mb,e.initialUser,this.serializer)}createPersistence(e){return new pb(cu.zr,this.serializer)}createSharedClientState(e){return new wb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Of(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kb.bind(null,this.syncEngine),await Ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fb}()}createDatastore(e){const n=_a(e.databaseInfo.databaseId),r=function(i){return new bb(i)}(e.databaseInfo);return function(i,o,a,l){return new Cb(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Ob(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Of(this.syncEngine,n,0),function(){return Cf.v()?new Cf:new Tb}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new $b(s,i,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ve(n);j("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await _i(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=rm.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ja(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Om(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Df(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xb(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>kf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>kf(e.remoteStore,i)),t._onlineComponents=e}function Qb(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Xb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ja(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Qb(n))throw n;Io("Error using user provided cache. Falling back to memory cache: "+n),await Ja(t,new Nf)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Ja(t,new Nf);return t._offlineComponents}async function Jb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Df(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Df(t,new zb))),t._onlineComponents}function Yb(t){return Jb(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t,e,n){if(!n)throw new H(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zb(t,e,n,r){if(e===!0&&r===!0)throw new H(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mf(t){if(!Q.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(Q.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Kl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fu(t);throw new H(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qA;switch(r.type){case"firstParty":return new GA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xf.get(n);r&&(j("ComponentProvider","Removing Datastore"),xf.delete(n),r.terminate())}(this),Promise.resolve()}}function eP(t,e,n,r={}){var s;const i=(t=Kl(t,Ia))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ge.MOCK_USER;else{a=pp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ge(c)}t._authCredentials=new KA(new nm(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new du(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Sn extends du{constructor(e,n,r){super(e,n,ER(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new Q(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}function tP(t,e,...n){if(t=Ne(t),$m("collection","path",e),t instanceof Ia){const r=Re.fromString(e,...n);return Vf(r),new Sn(t,null,r)}{if(!(t instanceof zt||t instanceof Sn))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Vf(r),new Sn(t.firestore,null,r)}}function Uf(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=rm.V()),$m("doc","path",e),t instanceof Ia){const r=Re.fromString(e,...n);return Mf(r),new zt(t,null,new Q(r))}{if(!(t instanceof zt||t instanceof Sn))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Mf(r),new zt(t.firestore,t instanceof Sn?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Nm(this,"async_queue_retry"),this.Xa=()=>{const n=Xa();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Xa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Xa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Jn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!da(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ir("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=hu.createAndSchedule(this,e,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&ee()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class jm extends Ia{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new nP}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hm(this),this._firestoreClient.terminate()}}function rP(t,e){const n=typeof t=="object"?t:Ic(),r=typeof t=="string"?t:e||"(default)",s=Go(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hp("firestore");i&&eP(s,...i)}return s}function sP(t){return t._firestoreClient||Hm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hm(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new aR(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Bm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Gb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zs(hn.fromBase64String(e))}catch(n){throw new H(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zs(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/^__.*__$/;class oP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new mi(e,this.data,n,this.fieldTransforms)}}function zm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class pu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Co(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(zm(this.uu)&&iP.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class aP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_a(e)}Ru(e,n,r,s=!1){return new pu({uu:e,methodName:n,Au:r,path:Je.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lP(t){const e=t._freezeSettings(),n=_a(t._databaseId);return new aP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cP(t,e,n,r,s,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,s);Jm("Data must be an object, but it was:",o,r);const a=Qm(r,o);let l,c;if(i.merge)l=new Ct(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=uP(e,h,n);if(!o.contains(f))throw new H(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);dP(u,f)||u.push(f)}l=new Ct(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new oP(new Pt(a),l,c)}function Gm(t,e){if(Xm(t=Ne(t)))return Jm("Unsupported field value:",e,t),Qm(t,e);if(t instanceof Km)return function(r,s){if(!zm(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Gm(a,s.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Hl(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hl(s.serializer,i)}}if(r instanceof Wm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zs)return{bytesValue:qR(s.serializer,r._byteString)};if(r instanceof zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cm(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${fu(r)}`)}(t,e)}function Qm(t,e){const n={};return om(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,(r,s)=>{const i=Gm(s,e.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Xm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Wm||t instanceof Zs||t instanceof zt||t instanceof Km)}function Jm(t,e,n){if(!Xm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=fu(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function uP(t,e,n){if((e=Ne(e))instanceof qm)return e._internalPath;if(typeof e=="string")return fP(t,e);throw Co("Field path arguments must be of type string or ",t,!1,void 0,n)}const hP=new RegExp("[~\\*/\\[\\]]");function fP(t,e,n){if(e.search(hP)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qm(...e.split("."))._internalPath}catch{throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Co(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new H(R.INVALID_ARGUMENT,a+t+l)}function dP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function Ff(t,e,n){t=Kl(t,zt);const r=Kl(t.firestore,jm),s=pP(t.converter,e,n);return gP(r,[cP(lP(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,an.none())])}function gP(t,e){return function(r,s){const i=new Jn;return r.asyncQueue.enqueueAndForget(async()=>jb(await Yb(r),s,i)),i.promise}(sP(t),e)}(function(e,n=!0){(function(s){Yr=s})(lr),tr(new kn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new jm(new WA(r.getProvider("auth-internal")),new XA(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),qt(df,"4.1.0",e),qt(df,"4.1.0","esm2017")})();var mP="firebase",_P="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(mP,_P,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="firebasestorage.googleapis.com",Zm="storageBucket",yP=2*60*1e3,vP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Jt{constructor(e,n,r=0){super(Ya(e),`Firebase Storage: ${n} (${Ya(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ya(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function Ya(t){return"storage/"+t}function gu(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(Pe.UNKNOWN,t)}function EP(t){return new Se(Pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function IP(t){return new Se(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Pe.UNAUTHENTICATED,t)}function TP(){return new Se(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AP(t){return new Se(Pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function RP(){return new Se(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bP(){return new Se(Pe.CANCELED,"User canceled the upload/download.")}function PP(t){return new Se(Pe.INVALID_URL,"Invalid URL '"+t+"'.")}function SP(t){return new Se(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function CP(){return new Se(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Zm+"' property when initializing the app?")}function kP(){return new Se(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OP(){return new Se(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NP(t){return new Se(Pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wl(t){return new Se(Pe.INVALID_ARGUMENT,t)}function e_(){return new Se(Pe.APP_DELETED,"The Firebase app was deleted.")}function DP(t){return new Se(Pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bs(t,e){return new Se(Pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function is(t){throw new Se(Pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=st.makeFromUrl(e,n)}catch{return new st(e,"")}if(r.path==="")return r;throw SP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),_={bucket:1,path:3},A=n===Ym?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",S=new RegExp(`^https?://${A}/${s}/${T}`,"i"),L=[{regex:a,indices:l,postModify:i},{regex:g,indices:_,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<L.length;C++){const Y=L[C],le=Y.regex.exec(e);if(le){const Ee=le[Y.indices.bucket];let X=le[Y.indices.path];X||(X=""),r=new st(Ee,X),Y.postModify(r);break}}if(r==null)throw PP(e);return r}}class xP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...T){c||(c=!0,e.apply(null,T))}function h(T){s=setTimeout(()=>{s=null,t(g,l())},T)}function f(){i&&clearTimeout(i)}function g(T,...S){if(c){f();return}if(T){f(),u.call(null,T,...S);return}if(l()||o){f(),u.call(null,T,...S);return}r<64&&(r*=2);let L;a===1?(a=2,L=0):L=(r+Math.random())*1e3,h(L)}let _=!1;function A(T){_||(_=!0,f(),!c&&(s!==null?(T||(a=2),clearTimeout(s),h(0)):T||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function VP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){return t!==void 0}function UP(t){return typeof t=="object"&&!Array.isArray(t)}function mu(t){return typeof t=="string"||t instanceof String}function Bf(t){return _u()&&t instanceof Blob}function _u(){return typeof Blob<"u"&&!dI()}function zl(t,e,n,r){if(r<e)throw Wl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Wl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function t_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yn||(Yn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Li(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Yn.NO_ERROR,l=i.getStatus();if(!a||FP(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Yn.ABORT;r(!1,new Li(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Li(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());LP(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=gu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?e_():bP();o(l)}else{const l=RP();o(l)}};this.canceled_?n(!1,new Li(!1,null,!0)):this.backoffId_=MP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Li{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $P(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KP(t,e,n,r,s,i,o=!0){const a=t_(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return HP(c,e),$P(c,n),jP(c,i),qP(c,r),new BP(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zP(...t){const e=WP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(_u())return new Blob(t);throw new Se(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function GP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){if(typeof atob>"u")throw NP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Za{constructor(e,n){this.data=e,this.contentType=n||null}}function XP(t,e){switch(t){case jt.RAW:return new Za(n_(e));case jt.BASE64:case jt.BASE64URL:return new Za(r_(t,e));case jt.DATA_URL:return new Za(YP(e),ZP(e))}throw gu()}function n_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JP(t){let e;try{e=decodeURIComponent(t)}catch{throw bs(jt.DATA_URL,"Malformed data URL.")}return n_(e)}function r_(t,e){switch(t){case jt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw bs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw bs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=QP(e)}catch(s){throw s.message.includes("polyfill")?s:bs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class s_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bs(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=eS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YP(t){const e=new s_(t);return e.base64?r_(jt.BASE64,e.rest):JP(e.rest)}function ZP(t){return new s_(t).contentType}function eS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){let r=0,s="";Bf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Bf(this.data_)){const r=this.data_,s=GP(r,e,n);return s===null?null:new Tn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Tn(r,!0)}}static getBlob(...e){if(_u()){const n=e.map(r=>r instanceof Tn?r.data_:r);return new Tn(zP.apply(null,n))}else{const n=e.map(o=>mu(o)?XP(jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Tn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t){let e;try{e=JSON.parse(t)}catch{return null}return UP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nS(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function i_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t,e){return e}class tt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||rS}}let Ui=null;function sS(t){return!mu(t)||t.length<2?t:i_(t)}function o_(){if(Ui)return Ui;const t=[];t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0));function e(i,o){return sS(o)}const n=new tt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new tt("size");return s.xform=r,t.push(s),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),Ui=t,Ui}function iS(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new st(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function oS(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return iS(r,t),r}function a_(t,e,n){const r=yu(e);return r===null?null:oS(t,r,n)}function aS(t,e,n,r){const s=yu(e);if(s===null||!mu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),g=wa(f,n,r),_=t_({alt:"media",token:c});return g+_})[0]}function lS(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="prefixes",jf="items";function cS(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[$f])for(const s of n[$f]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new st(e,i));r.prefixes.push(o)}if(n[jf])for(const s of n[jf]){const i=t._makeStorageReference(new st(e,s.name));r.items.push(i)}return r}function uS(t,e,n){const r=yu(n);return r===null?null:cS(t,e,r)}class vu{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){if(!t)throw gu()}function hS(t,e){function n(r,s){const i=a_(t,s,e);return Eu(i!==null),i}return n}function fS(t,e){function n(r,s){const i=uS(t,e,s);return Eu(i!==null),i}return n}function dS(t,e){function n(r,s){const i=a_(t,s,e);return Eu(i!==null),aS(i,s,t.host,t._protocol)}return n}function Iu(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=TP():s=wP():n.getStatus()===402?s=IP(t.bucket):n.getStatus()===403?s=AP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function pS(t){const e=Iu(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=EP(t.path)),i.serverResponse=s.serverResponse,i}return n}function gS(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),a=wa(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,u=new vu(a,l,fS(t,e.bucket),c);return u.urlParams=i,u.errorHandler=Iu(e),u}function mS(t,e,n){const r=e.fullServerUrl(),s=wa(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new vu(s,i,dS(t,n),o);return a.errorHandler=pS(e),a}function _S(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_S(null,e)),r}function vS(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let L="";for(let C=0;C<2;C++)L=L+Math.random().toString().slice(2);return L}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=yS(e,r,s),u=lS(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=Tn.getBlob(h,r,f);if(g===null)throw kP();const _={name:c.fullPath},A=wa(i,t.host,t._protocol),T="POST",S=t.maxUploadRetryTime,N=new vu(A,T,hS(t,n),S);return N.urlParams=_,N.headers=o,N.body=g.uploadData(),N.errorHandler=Iu(e),N}class ES{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw is("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw is("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw is("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw is("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw is("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IS extends ES{initXhr(){this.xhr_.responseType="text"}}function wu(){return new IS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){this._service=e,n instanceof st?this._location=n:this._location=st.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ar(e,n)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return i_(this._location.path)}get storage(){return this._service}get parent(){const e=tS(this._location.path);if(e===null)return null;const n=new st(this._location.bucket,e);return new ar(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DP(e)}}function wS(t,e,n){t._throwIfRoot("uploadBytes");const r=vS(t.storage,t._location,o_(),new Tn(e,!0),n);return t.storage.makeRequestWithTokens(r,wu).then(s=>({metadata:s,ref:t}))}function TS(t){const e={prefixes:[],items:[]};return l_(t,e).then(()=>e)}async function l_(t,e,n){const s=await AS(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await l_(t,e,s.nextPageToken)}function AS(t,e){e!=null&&typeof e.maxResults=="number"&&zl("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=gS(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,wu)}function RS(t){t._throwIfRoot("getDownloadURL");const e=mS(t.storage,t._location,o_());return t.storage.makeRequestWithTokens(e,wu).then(n=>{if(n===null)throw OP();return n})}function bS(t,e){const n=nS(t._location.path,e),r=new st(t._location.bucket,n);return new ar(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){return/^[A-Za-z]+:\/\//.test(t)}function SS(t,e){return new ar(t,e)}function c_(t,e){if(t instanceof Tu){const n=t;if(n._bucket==null)throw CP();const r=new ar(n,n._bucket);return e!=null?c_(r,e):r}else return e!==void 0?bS(t,e):t}function CS(t,e){if(e&&PS(e)){if(t instanceof Tu)return SS(t,e);throw Wl("To use ref(service, url), the first argument must be a Storage instance.")}else return c_(t,e)}function Hf(t,e){const n=e==null?void 0:e[Zm];return n==null?null:st.makeFromBucketSpec(n,t)}function kS(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:pp(s,t.app.options.projectId))}class Tu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ym,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yP,this._maxUploadRetryTime=vP,this._requests=new Set,s!=null?this._bucket=st.makeFromBucketSpec(s,this._host):this._bucket=Hf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=Hf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ar(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new xP(e_());{const o=KP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const qf="@firebase/storage",Kf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="storage";function UC(t,e,n){return t=Ne(t),wS(t,e,n)}function FC(t){return t=Ne(t),TS(t)}function BC(t){return t=Ne(t),RS(t)}function $C(t,e){return t=Ne(t),CS(t,e)}function jC(t=Ic(),e){t=Ne(t);const r=Go(t,u_).getImmediate({identifier:e}),s=hp("storage");return s&&OS(r,...s),r}function OS(t,e,n,r={}){kS(t,e,n,r)}function NS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Tu(n,r,s,e,lr)}function DS(){tr(new kn(u_,NS,"PUBLIC").setMultipleInstances(!0)),qt(qf,Kf,""),qt(qf,Kf,"esm2017")}DS();const xS={apiKey:"AIzaSyDf-np4ljkBZM682_ViXAcNPnkFyLdKqYw",authDomain:"bgbg-golf.firebaseapp.com",projectId:"bgbg-golf",storageBucket:"bgbg-golf.appspot.com",messagingSenderId:"662595275229",appId:"1:662595275229:web:03e67ee0cdd1dcbbe80e34"},MS=_p(xS),Gl=rP(MS);tP(Gl,"users");const VS=Zv("storeAuth",()=>{const t=Jh(),e=Et(""),n=Et(!1),r=Et(null),s=Et(!1);async function i(u,h){try{const{user:f}=await ET(t,u,h),g={createdAt:new Date,email:f.email,isAdmin:!1},_=Uf(Gl,"users",f.uid);await Ff(_,g),e.value="",n.value=!1}catch(f){switch(f.code){case"auth/email-already-in-use":e.value="Email already exists.";break;case"auth/weak-password":e.value="Password should be at least 6 characters long.";break;default:e.value="Sorry, there was an unexpected error."}}}async function o(u,h){if(!u)return e.value="Please enter a valid email";if(!h)return e.value="Please enter a valid password";try{await IT(t,u,h),e.value="",c()}catch(f){switch(f.code){case"auth/wrong-password":e.value="Incorrect password";break;case"auth/user-not-found":e.value="Incorrect email";break;default:e.value="Sorry, there was an unexpected error."}}}async function a(){const u=new tn;try{const{user:h}=await WT(Jh(),u),f={createdAt:new Date,email:h.email,isAdmin:!1},g=Uf(Gl,"users",h.uid);await Ff(g,f),e.value="",c()}catch{}}function l(){try{RT(t)}catch(u){e.value=u.message}}function c(){n.value=!n.value}return AT(t,u=>{u?r.value=u:(r.value=null,s.value=!1)}),{signUp:i,logIn:o,logOut:l,userData:r,errorMessage:e,showSignInModal:n,toggleModal:c,userIsAdmin:s,signInWithGoogle:a}}),LS="/vue-bga/assets/google-btn-dd0f9aec.png";const vi=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Au=t=>(Fo("data-v-43b2bc53"),t=t(),Bo(),t),US={key:2,class:"modal"},FS={class:"modal_content"},BS=Au(()=>$("p",{class:"modal_text"},"Please login to continue",-1)),$S={class:"error_message"},jS={class:"form_group"},HS=Au(()=>$("label",{for:"email"},"Email",-1)),qS={class:"form_group"},KS=Au(()=>$("label",{for:"password"},"Password",-1)),WS={class:"sign-in-up-buttons-container"},zS=["src"],GS={__name:"SignIn",setup(t){const e=VS(),{errorMessage:n,showSignInModal:r,userData:s}=eE(e),{signUp:i,signInWithGoogle:o,logIn:a,logOut:l,toggleModal:c}=e,u=Et({email:"",password:""});function h(f){f.key==="Enter"&&a(u.value.email,u.value.password)}return kd(()=>{document.addEventListener("keyup",h)}),fc(()=>{document.removeEventListener("keyup",h)}),(f,g)=>(gt(),It(At,null,[we(s)?(gt(),It("button",{key:1,onClick:g[1]||(g[1]=(..._)=>we(l)&&we(l)(..._)),class:"sign_in_btn"}," Sign out ")):(gt(),It("button",{key:0,onClick:g[0]||(g[0]=(..._)=>we(c)&&we(c)(..._)),class:"sign_in_btn"}," Sign in ")),we(r)?(gt(),It("div",US,[$("div",FS,[$("span",{onClick:g[2]||(g[2]=(..._)=>we(c)&&we(c)(..._)),class:"close_modal"}," ❌ "),BS,$("span",$S,Vt(we(n)),1),$("form",null,[$("div",jS,[HS,Fu($("input",{"onUpdate:modelValue":g[3]||(g[3]=_=>u.value.email=_),id:"email",placeholder:"enter email",type:"email"},null,512),[[ah,u.value.email]])]),$("div",qS,[KS,Fu($("input",{"onUpdate:modelValue":g[4]||(g[4]=_=>u.value.password=_),id:"password",placeholder:"enter password",type:"password"},null,512),[[ah,u.value.password]])]),$("div",WS,[$("button",{onClick:g[5]||(g[5]=Ki(_=>we(a)(u.value.email,u.value.password),["prevent"])),type:"button",class:"sign-in"}," Sign in "),$("button",{onClick:g[6]||(g[6]=Ki(_=>we(i)(u.value.email,u.value.password),["prevent"])),type:"button"}," Sign up ")]),$("div",null,[$("button",{onClick:g[7]||(g[7]=Ki((..._)=>we(o)&&we(o)(..._),["prevent"])),class:"sign-in-google"},[$("img",{src:we(LS),alt:""},null,8,zS)])])])])])):cv("",!0)],64))}},QS=vi(GS,[["__scopeId","data-v-43b2bc53"]]);const XS=t=>(Fo("data-v-37d80362"),t=t(),Bo(),t),JS={id:"header-container"},YS=XS(()=>$("img",{src:rI,alt:""},null,-1)),ZS={__name:"Header",setup(t){return(e,n)=>(gt(),It("header",JS,[Ie(QS),YS]))}},eC=vi(ZS,[["__scopeId","data-v-37d80362"]]);function tC(t){return tc()?(nd(t),!0):!1}function h_(t){return typeof t=="function"?t():we(t)}const f_=typeof window<"u",d_=()=>{},nC=rC();function rC(){var t;return f_&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function ps(t){var e;const n=h_(t);return(e=n==null?void 0:n.$el)!=null?e:n}const p_=f_?window:void 0;function el(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=p_):[e,n,r,s]=t,!e)return d_;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,f,g)=>(u.addEventListener(h,f,g),()=>u.removeEventListener(h,f,g)),l=Rr(()=>[ps(e),h_(s)],([u,h])=>{o(),u&&i.push(...n.flatMap(f=>r.map(g=>a(u,f,g,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return tC(c),c}let Wf=!1;function sC(t,e,n={}){const{window:r=p_,ignore:s=[],capture:i=!0,detectIframe:o=!1}=n;if(!r)return;nC&&!Wf&&(Wf=!0,Array.from(r.document.body.children).forEach(f=>f.addEventListener("click",d_)));let a=!0;const l=f=>s.some(g=>{if(typeof g=="string")return Array.from(r.document.querySelectorAll(g)).some(_=>_===f.target||f.composedPath().includes(_));{const _=ps(g);return _&&(f.target===_||f.composedPath().includes(_))}}),u=[el(r,"click",f=>{const g=ps(t);if(!(!g||g===f.target||f.composedPath().includes(g))){if(f.detail===0&&(a=!l(f)),!a){a=!0;return}e(f)}},{passive:!0,capture:i}),el(r,"pointerdown",f=>{const g=ps(t);g&&(a=!f.composedPath().includes(g)&&!l(f))},{passive:!0}),o&&el(r,"blur",f=>{setTimeout(()=>{var g;const _=ps(t);((g=r.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(_!=null&&_.contains(r.document.activeElement))&&e(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}const Ru=t=>(Fo("data-v-94b5578c"),t=t(),Bo(),t),iC={id:"nav-header"},oC={class:"navbar","aria-label":"main navigation",role:"navigation"},aC={class:"container is-max-desktop px-2"},lC={class:"navbar-brand"},cC=Ru(()=>$("span",{"aria-hidden":"true"},null,-1)),uC=Ru(()=>$("span",{"aria-hidden":"true"},null,-1)),hC=Ru(()=>$("span",{"aria-hidden":"true"},null,-1)),fC=[cC,uC,hC],dC={class:"navbar-end"},pC={__name:"Navbar",setup(t){const e=Et(!1),n=Et(null),r=Et(null);return sC(n,()=>{e.value=!1},{ignore:[r]}),(s,i)=>{const o=Vy("RouterLink");return gt(),It("header",iC,[$("nav",oC,[$("div",aC,[$("div",lC,[$("a",{onClick:i[0]||(i[0]=Ki(a=>e.value=!e.value,["prevent"])),class:Ss([{"is-active":e.value},"navbar-burger"]),"aria-expanded":"false","aria-label":"menu","data-target":"navbarBasicExample",role:"button",ref_key:"navbarBurgerRef",ref:r},fC,2)]),$("div",{id:"navbarBasicExample",class:Ss(["navbar-menu",{"is-active":e.value}]),ref_key:"navbarMenuRef",ref:n},[$("div",dC,[Ie(o,{onClick:i[1]||(i[1]=a=>e.value=!1),class:"navbar-item","active-class":"is-active",to:{name:"home"}},{default:as(()=>[cs("Leaderboard")]),_:1}),Ie(o,{onClick:i[2]||(i[2]=a=>e.value=!1),class:"navbar-item","active-class":"is-active",to:{name:"schedule"}},{default:as(()=>[cs("Schedule")]),_:1}),Ie(o,{onClick:i[3]||(i[3]=a=>e.value=!1),class:"navbar-item","active-class":"is-active",to:{name:"results"}},{default:as(()=>[cs("Results")]),_:1}),Ie(o,{onClick:i[4]||(i[4]=a=>e.value=!1),class:"navbar-item","active-class":"is-active",to:{name:"gallery"}},{default:as(()=>[cs("Gallery")]),_:1})])],2)])])])}}},gC=vi(pC,[["__scopeId","data-v-94b5578c"]]);const mC={},_C={id:"footer"},yC=lv('<section data-v-446deab6><ul class="icons" data-v-446deab6><li data-v-446deab6><a href="https://www.instagram.com/bgatourgolf/?next=%2Fbgatourgolf%2F" target="_blank" data-v-446deab6><span class="label" data-v-446deab6><i class="fa-brands fa-instagram" data-v-446deab6></i></span></a></li></ul></section><p class="copyright" data-v-446deab6>© Roeen Angelo</p>',2),vC=[yC];function EC(t,e){return gt(),It("footer",_C,vC)}const IC=vi(mC,[["render",EC],["__scopeId","data-v-446deab6"]]);const wC={id:"wrapper"},TC={__name:"App",setup(t){return(e,n)=>(gt(),It("div",wC,[Ie(eC,{class:"header"}),Ie(gC),Ie(we(op)),Ie(IC)]))}},AC="modulepreload",RC=function(t){return"/vue-bga/"+t},zf={},tl=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=RC(i),i in zf)return;zf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":AC,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};const g_=t=>(Fo("data-v-a7c80b4b"),t=t(),Bo(),t),bC={class:"section-container"},PC=g_(()=>$("h3",null,"Leaderboard",-1)),SC={class:"leaderboard-table"},CC=g_(()=>$("thead",null,[$("tr",null,[$("th",null,"Rank"),$("th",null,"Player"),$("th",null,"PnR"),$("th",null,"Masters"),$("th",null,"PEJA"),$("th",null,"WSOG"),$("th",null,"LL"),$("th",null,"Kayami"),$("th",{class:"total"},"Total(4)")])],-1)),kC={style:{"font-weight":"bold"}},OC={__name:"Leaderboard",setup(t){function e(s){return s.sort((a,l)=>l-a).slice(0,4).reduce((a,l)=>a+l,0)}const r=[{id:1,name:"Justin",scores:[87.5,600,51,55,105,5],get total(){return e(this.scores)}},{id:2,name:"Aaron",scores:[500,66,67.5,43.056,105,0],get total(){return e(this.scores)}},{id:3,name:"Daniel",scores:[67.5,66,500,43.056,42.063,0],get total(){return e(this.scores)}},{id:4,name:"Morris",scores:[300,66,67.5,43.056,70,0],get total(){return e(this.scores)}},{id:5,name:"Niehmer",scores:[162.5,41.078,245,71.667,42.063,0],get total(){return e(this.scores)}},{id:6,name:"Dayza",scores:[77.5,230,85,167.5,162.5,0],get total(){return e(this.scores)}},{id:7,name:"Des",scores:[67.5,230,67.5,115,55,0],get total(){return e(this.scores)}},{id:8,name:"George",scores:[162.5,101.333,85,109.167,42.063,0],get total(){return e(this.scores)}},{id:9,name:"Aldrich",scores:[43,48.733,245,101.945,80,0],get total(){return e(this.scores)}},{id:10,name:"Arvin",scores:[87.5,85,85,74.167,162.5,0],get total(){return e(this.scores)}},{id:11,name:"Pat",scores:[100,101.333,54,83.611,500,0],get total(){return e(this.scores)}},{id:12,name:"Sam",scores:[77.5,120,45,58,90,0],get total(){return e(this.scores)}},{id:13,name:"Chris",scores:[58.5,74.5,100,167.5,42.063,0],get total(){return e(this.scores)}},{id:14,name:"Ed",scores:[51,58,122.5,43.056,75,0],get total(){return e(this.scores)}},{id:15,name:"Alan",scores:[49,54,122.5,43.056,42.063,0],get total(){return e(this.scores)}},{id:16,name:"Joe",scores:[110,58,48,70.833,85,0],get total(){return e(this.scores)}},{id:17,name:"Tim",scores:[37.167,85,67.5,91.111,65,0],get total(){return e(this.scores)}},{id:18,name:"Kyle",scores:[37.167,101.333,48,43.056,300,0],get total(){return e(this.scores)}},{id:19,name:"Jordan",scores:[58.5,61,43,43.056,42.063,0],get total(){return e(this.scores)}},{id:20,name:"Ezra",scores:[37.167,54,67.5,115,42.063,0],get total(){return e(this.scores)}},{id:21,name:"Galvin",scores:[47,51,57,300,42.063,0],get total(){return e(this.scores)}},{id:22,name:"James",scores:[45,74.5,35.5,59,57,0],get total(){return e(this.scores)}},{id:23,name:"Jason",scores:[54,46.467,39,43.056,42.063,0],get total(){return e(this.scores)}},{id:24,name:"Ronald",scores:[41,41.078,37,43.056,60,0],get total(){return e(this.scores)}},{id:25,name:"Ro",scores:[54,44.2,54,53,53,0],get total(){return e(this.scores)}}].sort((s,i)=>i.total-s.total);return(s,i)=>(gt(),It("section",bC,[PC,$("div",SC,[$("table",null,[CC,$("tbody",null,[(gt(!0),It(At,null,Fy(we(r),(o,a)=>(gt(),It("tr",{key:o.id},[$("td",null,Vt(a+1),1),$("td",null,Vt(o.name),1),$("td",null,Vt(s.filters.formatScore(o.scores[0])),1),$("td",null,Vt(s.filters.formatScore(o.scores[1])),1),$("td",null,Vt(s.filters.formatScore(o.scores[2])),1),$("td",null,Vt(s.filters.formatScore(o.scores[3])),1),$("td",null,Vt(s.filters.formatScore(o.scores[4])),1),$("td",null,Vt(s.filters.formatScore(o.scores[5])),1),$("td",kC,Vt(s.filters.formatScore(o.total)),1)]))),128))])])])]))}},NC=vi(OC,[["__scopeId","data-v-a7c80b4b"]]),DC={__name:"LeaderboardView",setup(t){return(e,n)=>(gt(),It("main",null,[Ie(NC)]))}},xC=tI({history:yE("/vue-bga/"),routes:[{path:"/",name:"home",component:DC},{path:"/schedule",name:"schedule",component:()=>tl(()=>import("./ScheduleView-be7bc7f5.js"),["assets/ScheduleView-be7bc7f5.js","assets/ScheduleView-f26bcb51.css"])},{path:"/gallery",name:"gallery",component:()=>tl(()=>import("./GalleryView-0c559db2.js"),["assets/GalleryView-0c559db2.js","assets/GalleryView-eb61d13b.css"])},{path:"/results",name:"results",component:()=>tl(()=>import("./ResultsView-0ae4d0dc.js"),["assets/ResultsView-0ae4d0dc.js","assets/ResultsView-333c4e3b.css"])}]}),Ta=qv(TC);Ta.use(xC);Ta.use(zv());Ta.mount("#app");Ta.config.globalProperties.filters={formatScore(t){return t.toFixed(0)}};export{At as F,vi as _,$ as a,cs as b,It as c,Bo as d,iv as e,Et as f,cv as g,jC as h,$C as i,UC as j,Zv as k,kd as l,FC as m,BC as n,gt as o,Fo as p,Ie as q,Fy as r,eE as s,Vt as t,VS as u,we as v,Rr as w};
