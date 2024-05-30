var uo=Object.defineProperty;var ho=(t,e,n)=>e in t?uo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ot=(t,e,n)=>(ho(t,typeof e!="symbol"?e+"":e,n),n);function fo(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=globalThis,si=Dt.ShadowRoot&&(Dt.ShadyCSS===void 0||Dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oi=Symbol(),Oi=new WeakMap;let qr=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==oi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(si&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=Oi.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Oi.set(n,e))}return e}toString(){return this.cssText}};const po=t=>new qr(typeof t=="string"?t:t+"",void 0,oi),D=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new qr(n,t,oi)},mo=(t,e)=>{if(si)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const i=document.createElement("style"),r=Dt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)}},Ci=si?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return po(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:go,defineProperty:yo,getOwnPropertyDescriptor:vo,getOwnPropertyNames:bo,getOwnPropertySymbols:xo,getPrototypeOf:_o}=Object,oe=globalThis,Si=oe.trustedTypes,wo=Si?Si.emptyScript:"",yn=oe.reactiveElementPolyfillSupport,Ke=(t,e)=>t,Ut={toAttribute(t,e){switch(e){case Boolean:t=t?wo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},ai=(t,e)=>!go(t,e),Pi={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:ai};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),oe.litPropertyMetadata??(oe.litPropertyMetadata=new WeakMap);class Se extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Pi){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,n);r!==void 0&&yo(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){const{get:r,set:s}=vo(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);s.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pi}static _$Ei(){if(this.hasOwnProperty(Ke("elementProperties")))return;const e=_o(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ke("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ke("properties"))){const n=this.properties,i=[...bo(n),...xo(n)];for(const r of i)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(Ci(r))}else e!==void 0&&n.push(Ci(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EC(e,n){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Ut).toAttribute(n,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,n){var s;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Ut;this._$Em=r,this[r]=c.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(e,n,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ai)(this[e],n))return;this.P(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,i){this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(n)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},Se[Ke("elementProperties")]=new Map,Se[Ke("finalized")]=new Map,yn==null||yn({ReactiveElement:Se}),(oe.reactiveElementVersions??(oe.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=globalThis,Vt=Ze.trustedTypes,Ii=Vt?Vt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ci="$lit$",te=`lit$${Math.random().toFixed(9).slice(2)}$`,li="?"+te,Eo=`<${li}>`,ye=document,st=()=>ye.createComment(""),ot=t=>t===null||typeof t!="object"&&typeof t!="function",Ur=Array.isArray,Vr=t=>Ur(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",vn=`[ 	
\f\r]`,He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$i=/-->/g,Di=/>/g,de=RegExp(`>|${vn}(?:([^\\s"'>=/]+)(${vn}*=${vn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ni=/'/g,Ri=/"/g,zr=/^(?:script|style|textarea|title)$/i,Ao=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),w=Ao(1),J=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),ki=new WeakMap,me=ye.createTreeWalker(ye,129);function Hr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ii!==void 0?Ii.createHTML(e):e}const Wr=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":"",o=He;for(let c=0;c<n;c++){const a=t[c];let l,u,h=-1,d=0;for(;d<a.length&&(o.lastIndex=d,u=o.exec(a),u!==null);)d=o.lastIndex,o===He?u[1]==="!--"?o=$i:u[1]!==void 0?o=Di:u[2]!==void 0?(zr.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=de):u[3]!==void 0&&(o=de):o===de?u[0]===">"?(o=r??He,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?de:u[3]==='"'?Ri:Ni):o===Ri||o===Ni?o=de:o===$i||o===Di?o=He:(o=de,r=void 0);const m=o===de&&t[c+1].startsWith("/>")?" ":"";s+=o===He?a+Eo:h>=0?(i.push(l),a.slice(0,h)+ci+a.slice(h)+te+m):a+te+(h===-2?c:m)}return[Hr(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class at{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,u]=Wr(e,n);if(this.el=at.createElement(l,i),me.currentNode=this.el.content,n===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=me.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(ci)){const d=u[o++],m=r.getAttribute(h).split(te),g=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?Gr:g[1]==="?"?Qr:g[1]==="@"?Xr:gt}),r.removeAttribute(h)}else h.startsWith(te)&&(a.push({type:6,index:s}),r.removeAttribute(h));if(zr.test(r.tagName)){const h=r.textContent.split(te),d=h.length-1;if(d>0){r.textContent=Vt?Vt.emptyScript:"";for(let m=0;m<d;m++)r.append(h[m],st()),me.nextNode(),a.push({type:2,index:++s});r.append(h[d],st())}}}else if(r.nodeType===8)if(r.data===li)a.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(te,h+1))!==-1;)a.push({type:7,index:s}),h+=te.length-1}s++}}static createElement(e,n){const i=ye.createElement("template");return i.innerHTML=e,i}}function ve(t,e,n=t,i){var o,c;if(e===J)return e;let r=i!==void 0?(o=n._$Co)==null?void 0:o[i]:n._$Cl;const s=ot(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=r:n._$Cl=r),r!==void 0&&(e=ve(t,r._$AS(t,e.values),r,i)),e}class Yr{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??ye).importNode(n,!0);me.currentNode=r;let s=me.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new Me(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new Jr(s,this,e)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(s=me.nextNode(),o++)}return me.currentNode=ye,r}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class Me{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,i,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ve(this,e,n),ot(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==J&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==k&&ot(this._$AH)?this._$AA.nextSibling.data=e:this.T(ye.createTextNode(e)),this._$AH=e}$(e){var s;const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=at.createElement(Hr(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(n);else{const o=new Yr(r,this),c=o.u(this.options);o.p(n),this.T(c),this._$AH=o}}_$AC(e){let n=ki.get(e.strings);return n===void 0&&ki.set(e.strings,n=new at(e)),n}k(e){Ur(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new Me(this.S(st()),this.S(st()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class gt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,r,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=ve(this,e,n,0),o=!ot(e)||e!==this._$AH&&e!==J,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=ve(this,c[i+a],n,a),l===J&&(l=this._$AH[a]),o||(o=!ot(l)||l!==this._$AH[a]),l===k?e=k:e!==k&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Gr extends gt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}}class Qr extends gt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}}class Xr extends gt{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){if((e=ve(this,e,n,0)??k)===J)return;const i=this._$AH,r=e===k&&i!==k||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==k&&(i===k||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class Jr{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}}const To={P:ci,A:te,C:li,M:1,L:Wr,R:Yr,D:Vr,V:ve,I:Me,H:gt,N:Qr,U:Xr,B:Gr,F:Jr},bn=Ze.litHtmlPolyfillSupport;bn==null||bn(at,Me),(Ze.litHtmlVersions??(Ze.litHtmlVersions=[])).push("3.1.3");const Oo=(t,e,n)=>{const i=(n==null?void 0:n.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(n==null?void 0:n.renderBefore)??null;i._$litPart$=r=new Me(e.insertBefore(st(),s),s,void 0,n??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=class extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oo(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return J}};var Fr;O._$litElement$=!0,O.finalized=!0,(Fr=globalThis.litElementHydrateSupport)==null||Fr.call(globalThis,{LitElement:O});const xn=globalThis.litElementPolyfillSupport;xn==null||xn({LitElement:O});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:ai},So=(t=Co,e,n)=>{const{kind:i,metadata:r}=n;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(n.name,t),i==="accessor"){const{name:o}=n;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,t)},init(c){return c!==void 0&&this.P(o,void 0,t),c}}}if(i==="setter"){const{name:o}=n;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+i)};function x(t){return(e,n)=>typeof n=="object"?So(t,e,n):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(t){return x({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Io(t){return(e,n)=>{const{slot:i,selector:r}={},s="slot"+(i?`[name=${i}]`:":not([name])");return Po(e,n,{get(){var a;const o=(a=this.renderRoot)==null?void 0:a.querySelector(s),c=(o==null?void 0:o.assignedElements(t))??[];return r===void 0?c:c.filter(l=>l.matches(r))}})}}function zt(t){return t=t||[],Array.isArray(t)?t:[t]}function Q(t){return`[Vaadin.Router] ${t}`}function $o(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const Ht="module",Wt="nomodule",kn=[Ht,Wt];function Li(t){if(!t.match(/.+\.[m]?js$/))throw new Error(Q(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function Kr(t){if(!t||!G(t.path))throw new Error(Q('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,n=["component","redirect","bundle"];if(!be(t.action)&&!Array.isArray(t.children)&&!be(t.children)&&!Yt(e)&&!n.some(i=>G(t[i])))throw new Error(Q(`Expected route config "${t.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(e)if(G(e))Li(e);else if(kn.some(i=>i in e))kn.forEach(i=>i in e&&Li(e[i]));else throw new Error(Q('Expected route bundle to include either "'+Wt+'" or "'+Ht+'" keys, or both'));t.redirect&&["bundle","component"].forEach(i=>{i in t&&console.warn(Q(`Route config "${t.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function Mi(t){zt(t).forEach(e=>Kr(e))}function ji(t,e){let n=document.head.querySelector('script[src="'+t+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",t),e===Ht?n.setAttribute("type",Ht):e===Wt&&n.setAttribute(Wt,""),n.async=!0),new Promise((i,r)=>{n.onreadystatechange=n.onload=s=>{n.__dynamicImportLoaded=!0,i(s)},n.onerror=s=>{n.parentNode&&n.parentNode.removeChild(n),r(s)},n.parentNode===null?document.head.appendChild(n):n.__dynamicImportLoaded&&i()})}function Do(t){return G(t)?ji(t):Promise.race(kn.filter(e=>e in t).map(e=>ji(t[e],e)))}function et(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function Yt(t){return typeof t=="object"&&!!t}function be(t){return typeof t=="function"}function G(t){return typeof t=="string"}function Zr(t){const e=new Error(Q(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const Ie=new class{};function No(t){const e=t.port,n=t.protocol,s=n==="http:"&&e==="80"||n==="https:"&&e==="443"?t.hostname:t.host;return`${n}//${s}`}function Bi(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const n=t.composedPath?t.composedPath():t.path||[];for(let c=0;c<n.length;c++){const a=n[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||No(e))!==window.location.origin)return;const{pathname:r,search:s,hash:o}=e;et("go",{pathname:r,search:s,hash:o})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const Ro={activate(){window.document.addEventListener("click",Bi)},inactivate(){window.document.removeEventListener("click",Bi)}},ko=/Trident/.test(navigator.userAgent);ko&&!be(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,!!e.bubbles,!!e.cancelable),n.state=e.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);function Fi(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:n,hash:i}=window.location;et("go",{pathname:e,search:n,hash:i})}const Lo={activate(){window.addEventListener("popstate",Fi)},inactivate(){window.removeEventListener("popstate",Fi)}};var je=ss,Mo=ui,jo=Uo,Bo=ns,Fo=rs,es="/",ts="./",qo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ui(t,e){for(var n=[],i=0,r=0,s="",o=e&&e.delimiter||es,c=e&&e.delimiters||ts,a=!1,l;(l=qo.exec(t))!==null;){var u=l[0],h=l[1],d=l.index;if(s+=t.slice(r,d),r=d+u.length,h){s+=h[1],a=!0;continue}var m="",g=t[r],b=l[2],C=l[3],N=l[4],R=l[5];if(!a&&s.length){var P=s.length-1;c.indexOf(s[P])>-1&&(m=s[P],s=s.slice(0,P))}s&&(n.push(s),s="",a=!1);var U=m!==""&&g!==void 0&&g!==m,z=R==="+"||R==="*",T=R==="?"||R==="*",L=m||o,F=C||N;n.push({name:b||i++,prefix:m,delimiter:L,optional:T,repeat:z,partial:U,pattern:F?Vo(F):"[^"+re(L)+"]+?"})}return(s||r<t.length)&&n.push(s+t.substr(r)),n}function Uo(t,e){return ns(ui(t,e))}function ns(t){for(var e=new Array(t.length),n=0;n<t.length;n++)typeof t[n]=="object"&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(i,r){for(var s="",o=r&&r.encode||encodeURIComponent,c=0;c<t.length;c++){var a=t[c];if(typeof a=="string"){s+=a;continue}var l=i?i[a.name]:void 0,u;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(u=o(l[h],a),!e[c].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(h===0?a.prefix:a.delimiter)+u}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(u=o(String(l),a),!e[c].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');s+=a.prefix+u;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function re(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Vo(t){return t.replace(/([=!:$/()])/g,"\\$1")}function is(t){return t&&t.sensitive?"":"i"}function zo(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function Ho(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(ss(t[r],e,n).source);return new RegExp("(?:"+i.join("|")+")",is(n))}function Wo(t,e,n){return rs(ui(t,n),e,n)}function rs(t,e,n){n=n||{};for(var i=n.strict,r=n.start!==!1,s=n.end!==!1,o=re(n.delimiter||es),c=n.delimiters||ts,a=[].concat(n.endsWith||[]).map(re).concat("$").join("|"),l=r?"^":"",u=t.length===0,h=0;h<t.length;h++){var d=t[h];if(typeof d=="string")l+=re(d),u=h===t.length-1&&c.indexOf(d[d.length-1])>-1;else{var m=d.repeat?"(?:"+d.pattern+")(?:"+re(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?l+=re(d.prefix)+"("+m+")?":l+="(?:"+re(d.prefix)+"("+m+"))?":l+=re(d.prefix)+"("+m+")"}}return s?(i||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+o+"(?="+a+"))?"),u||(l+="(?="+o+"|"+a+")")),new RegExp(l,is(n))}function ss(t,e,n){return t instanceof RegExp?zo(t,e):Array.isArray(t)?Ho(t,e,n):Wo(t,e,n)}je.parse=Mo;je.compile=jo;je.tokensToFunction=Bo;je.tokensToRegExp=Fo;const{hasOwnProperty:Yo}=Object.prototype,Ln=new Map;Ln.set("|false",{keys:[],pattern:/(?:)/});function qi(t){try{return decodeURIComponent(t)}catch{return t}}function Go(t,e,n,i,r){n=!!n;const s=`${t}|${n}`;let o=Ln.get(s);if(!o){const l=[];o={keys:l,pattern:je(t,l,{end:n,strict:t===""})},Ln.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},r);for(let l=1;l<c.length;l++){const u=o.keys[l-1],h=u.name,d=c[l];(d!==void 0||!Yo.call(a,h))&&(u.repeat?a[h]=d?d.split(u.delimiter).map(qi):[]:a[h]=d&&qi(d))}return{path:c[0],keys:(i||[]).concat(o.keys),params:a}}function os(t,e,n,i,r){let s,o,c=0,a=t.path||"";return a.charAt(0)==="/"&&(n&&(a=a.substr(1)),n=!0),{next(l){if(t===l)return{done:!0};const u=t.__children=t.__children||t.children;if(!s&&(s=Go(a,e,!u,i,r),s))return{done:!1,value:{route:t,keys:s.keys,params:s.params,path:s.path}};if(s&&u)for(;c<u.length;){if(!o){const d=u[c];d.parent=t;let m=s.path.length;m>0&&e.charAt(m)==="/"&&(m+=1),o=os(d,e.substr(m),n,s.keys,s.params)}const h=o.next(l);if(!h.done)return{done:!1,value:h.value};o=null,c++}return{done:!0}}}}function Qo(t){if(be(t.route.action))return t.route.action(t)}function Xo(t,e){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}function Jo(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=(t.route||{}).path;return n&&(e+=` Resolution had failed on route: '${n}'`),e}function Ko(t,e){const{route:n,path:i}=e;if(n&&!n.__synthetic){const r={path:i,route:n};if(!t.chain)t.chain=[];else if(n.parent){let s=t.chain.length;for(;s--&&t.chain[s].route&&t.chain[s].route!==n.parent;)t.chain.pop()}t.chain.push(r)}}class ct{constructor(e,n={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=n.baseUrl||"",this.errorHandler=n.errorHandler,this.resolveRoute=n.resolveRoute||Qo,this.context=Object.assign({resolver:this},n.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Mi(e);const n=[...zt(e)];this.root.__children=n}addRoutes(e){return Mi(e),this.root.__children.push(...zt(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const n=Object.assign({},this.context,G(e)?{pathname:e}:e),i=os(this.root,this.__normalizePathname(n.pathname),this.baseUrl),r=this.resolveRoute;let s=null,o=null,c=n;function a(l,u=s.value.route,h){const d=h===null&&s.value.route;return s=o||i.next(d),o=null,!l&&(s.done||!Xo(u,s.value.route))?(o=s,Promise.resolve(Ie)):s.done?Promise.reject(Zr(n)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},n,s.value),Ko(c,s.value),Promise.resolve(r(c)).then(m=>m!=null&&m!==Ie?(c.result=m.result||m,c):a(l,u,m)))}return n.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const u=Jo(c);if(l?console.warn(u):l=new Error(u),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,n){return new URL(e,n)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const n=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,n).href;if(i.slice(0,n.length)===n)return i.slice(n.length)}}ct.pathToRegexp=je;const{pathToRegexp:Ui}=ct,Vi=new Map;function as(t,e,n){const i=e.name||e.component;if(i&&(t.has(i)?t.get(i).push(e):t.set(i,[e])),Array.isArray(n))for(let r=0;r<n.length;r++){const s=n[r];s.parent=e,as(t,s,s.__children||s.children)}}function zi(t,e){const n=t.get(e);if(n&&n.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return n&&n[0]}function Hi(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Zo(t,e={}){if(!(t instanceof ct))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,r)=>{let s=zi(n,i);if(!s&&(n.clear(),as(n,t.root,t.root.__children),s=zi(n,i),!s))throw new Error(`Route "${i}" not found`);let o=Vi.get(s.fullPath);if(!o){let a=Hi(s),l=s.parent;for(;l;){const m=Hi(l);m&&(a=m.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const u=Ui.parse(a),h=Ui.tokensToFunction(u),d=Object.create(null);for(let m=0;m<u.length;m++)G(u[m])||(d[u[m].name]=!0);o={toPath:h,keys:d},Vi.set(a,o),s.fullPath=a}let c=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let h=0;h<l.length;h++){const d=l[h];o.keys[d]||(a[d]=r[d])}const u=e.stringifyQueryParams(a);u&&(c+=u.charAt(0)==="?"?u:`?${u}`)}return c}}let Wi=[];function ea(t){Wi.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),Wi=t}const ta=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},na=(t,e)=>{const n=()=>{t.removeEventListener("animationend",n),e()};t.addEventListener("animationend",n)};function Yi(t,e){return t.classList.add(e),new Promise(n=>{if(ta(t)){const i=t.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;t.setAttribute("style",`position: absolute; ${r}`),na(t,()=>{t.classList.remove(e),t.removeAttribute("style"),n()})}else t.classList.remove(e),n()})}const ia=256;function _n(t){return t!=null}function ra(t){const e=Object.assign({},t);return delete e.next,e}function Y({pathname:t="",search:e="",hash:n="",chain:i=[],params:r={},redirectFrom:s,resolver:o},c){const a=i.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:t,search:e,hash:n,routes:a,route:c||a.length&&a[a.length-1]||null,params:r,redirectFrom:s,getUrl:(l={})=>Rt(se.pathToRegexp.compile(cs(a))(Object.assign({},r,l)),o)}}function Gi(t,e){const n=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:n}}}function sa(t,e){e.location=Y(t);const n=t.chain.map(i=>i.route).indexOf(t.route);return t.chain[n].element=e,e}function Nt(t,e,n){if(be(t))return t.apply(n,e)}function Qi(t,e,n){return i=>{if(i&&(i.cancel||i.redirect))return i;if(n)return Nt(n[t],e,n)}}function oa(t,e){if(!Array.isArray(t)&&!Yt(t))throw new Error(Q(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const n=zt(t);for(let i=0;i<n.length;i++)Kr(n[i]),e.__children.push(n[i])}function Ct(t){if(t&&t.length){const e=t[0].parentNode;for(let n=0;n<t.length;n++)e.removeChild(t[n])}}function Rt(t,e){const n=e.__effectiveBaseUrl;return n?e.constructor.__createUrl(t.replace(/^\//,""),n).pathname:t}function cs(t){return t.map(e=>e.path).reduce((e,n)=>n.length?e.replace(/\/$/,"")+"/"+n.replace(/^\//,""):e,"")}class se extends ct{constructor(e,n){const i=document.head.querySelector("base"),r=i&&i.getAttribute("href");super([],Object.assign({baseUrl:r&&ct.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},n)),this.resolveRoute=o=>this.__resolveRoute(o);const s=se.NavigationTrigger;se.setTriggers.apply(se,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const n=e.route;let i=Promise.resolve();be(n.children)&&(i=i.then(()=>n.children(ra(e))).then(s=>{!_n(s)&&!be(n.children)&&(s=n.children),oa(s,n)}));const r={redirect:s=>Gi(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return Nt(n.action,[e,r],n)}).then(s=>{if(_n(s)&&(s instanceof HTMLElement||s.redirect||s===Ie))return s;if(G(n.redirect))return r.redirect(n.redirect);if(n.bundle)return Do(n.bundle).then(()=>{},()=>{throw new Error(Q(`Bundle not found: ${n.bundle}. Check if the file name is correct`))})}).then(s=>{if(_n(s))return s;if(G(n.component))return r.component(n.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,n=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),n||this.__onNavigationEvent(),this.ready}render(e,n){const i=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},G(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(r).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=Y(s),n&&this.__updateBrowserHistory(s,i===1),et("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(i===this.__lastStartedRenderId)throw n&&this.__updateBrowserHistory(r),Ct(this.__outlet&&this.__outlet.children),this.location=Y(Object.assign(r,{resolver:this})),et("error",Object.assign({router:this,error:s},r)),s}),this.ready}__fullyResolveChain(e,n=e){return this.__findComponentContextAfterAllRedirects(n).then(i=>{const s=i!==n?i:e,c=Rt(cs(i.chain),i.resolver)===i.pathname,a=(l,u=l.route,h)=>l.next(void 0,u,h).then(d=>d===null||d===Ie?c?l:u.parent!==null?a(l,u.parent,d):d:d);return a(i).then(l=>{if(l===null||l===Ie)throw Zr(s);return l&&l!==Ie&&l!==i?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const n=e.result;return n instanceof HTMLElement?(sa(e,n),Promise.resolve(e)):n.redirect?this.__redirect(n.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):n instanceof Error?Promise.reject(n):Promise.reject(new Error(Q(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${$o(n)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(n=>n===this.__previousContext||n===e?n:this.__fullyResolveChain(n))}__runOnBeforeCallbacks(e){const n=this.__previousContext||{},i=n.chain||[],r=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>Gi(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,r.length)&&!(i[a].route!==r[a].route||i[a].path!==r[a].path&&i[a].element!==r[a].element||!this.__isReusableElement(i[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===i.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,n.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a]);for(let a=0;a<r.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},r[a]),i[a].element.location=Y(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=Y(e,i[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},r[a]),r[a].element&&(r[a].element.location=Y(e,r[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,n,i,r){const s=Y(n);return e.then(o=>{if(this.__isLatestRender(n))return Qi("onBeforeLeave",[s,i,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,n,i,r){const s=Y(n,r.route);return e.then(o=>{if(this.__isLatestRender(n))return Qi("onBeforeEnter",[s,i,this],r.element)(o)})}__isReusableElement(e,n){return e&&n?this.__createdByRouter.get(e)&&this.__createdByRouter.get(n)?e.localName===n.localName:e===n:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,n,i){if(n>ia)throw new Error(Q(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(n||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(Q(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:n="",hash:i=""},r){if(window.location.pathname!==e||window.location.search!==n||window.location.hash!==i){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+n+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,n){let i=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const s=n&&n.chain[r].element;if(s)if(s.parentNode===i)e.chain[r].element=s,i=s;else break}return i}__addAppearingContent(e,n){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,n);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let r=i;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===i&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&Ct(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ct(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,n){if(n)for(let i=n.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const r=n.chain[i].element;if(r)try{const s=Y(e);Nt(r.onAfterLeave,[s,{},n.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Ct(r.children)}}}__runOnAfterEnterCallbacks(e){for(let n=e.__divergedChainIndex;n<e.chain.length&&this.__isLatestRender(e);n++){const i=e.chain[n].element||{},r=Y(e,e.chain[n].route);Nt(i.onAfterEnter,[r,{},e.resolver],i)}}__animateIfNeeded(e){const n=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],r=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(n&&i&&o){const c=Yt(o)&&o.leave||"leaving",a=Yt(o)&&o.enter||"entering";r.push(Yi(n,c)),r.push(Yi(i,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:n,search:i,hash:r}=e?e.detail:window.location;G(this.__normalizePathname(n))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:n,search:i,hash:r},!0))}static setTriggers(...e){ea(e)}urlForName(e,n){return this.__urlForName||(this.__urlForName=Zo(this)),Rt(this.__urlForName(e,n),this)}urlForPath(e,n){return Rt(se.pathToRegexp.compile(e)(n),this)}static go(e){const{pathname:n,search:i,hash:r}=G(e)?this.__createUrl(e,"http://a"):e;return et("go",{pathname:n,search:i,hash:r})}}const aa=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,kt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ca(){function t(){return!0}return ls(t)}function la(){try{return ua()?!0:ha()?kt?!da():!ca():!1}catch{return!1}}function ua(){return localStorage.getItem("vaadin.developmentmode.force")}function ha(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function da(){return!!(kt&&Object.keys(kt).map(e=>kt[e]).filter(e=>e.productionMode).length>0)}function ls(t,e){if(typeof t!="function")return;const n=aa.exec(t.toString());if(n)try{t=new Function(n[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return t(e)}window.Vaadin=window.Vaadin||{};const Xi=function(t,e){if(window.Vaadin.developmentMode)return ls(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=la());function fa(){}const pa=function(){if(typeof Xi=="function")return Xi(fa)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});pa();se.NavigationTrigger={POPSTATE:Lo,CLICK:Ro};class us{constructor(){this._listeners=new Map}addEventListener(e,n){this._listeners.set(e,n)}removeEventListener(e,n){if(this._listeners!=null&&this._listeners.has(e))this._listeners.delete(e);else throw new Error(`Removing Unknown Event ${e}`)}emit(e,...n){this._listeners!=null&&this._listeners.has(e)&&this._listeners.get(e).apply(null,n)}deleteEmitter(){this._listeners.clear(),this._listeners=null}}class ma extends us{constructor(){super()}async addAsyncEventListener(e,n){return this.addEventListener(e,n),Promise.resolve()}async removeAsyncEventListener(e,n){try{return this.removeEventListener(e,n),Promise.resolve()}catch(i){Promise.reject(i)}}async emitAsync(e,...n){try{return this.emit(e,...n),Promise.resolve()}catch(i){Promise.reject(i)}}async deleteEmitterAsync(){this.deleteEmitter()}}class hs{constructor(){this._eventListeners=[],this.didFireHandler=null}raiseEvent(...e){this._eventListeners!=null&&this._eventListeners.length>0&&this._executeSubscribersWithArgs(e)}_executeSubscribersWithArgs(e){let n=this._eventListeners.length;for(let i=0;i<this._eventListeners.length;i++)this._eventListeners[i].apply(null,e),n--,n==0&&this._invokeDidFireHandler()}_invokeDidFireHandler(){this.didFireHandler!=null&&this.didFireHandler()}_isRecorded(e){return this._eventListeners.indexOf(e)!=-1}_deleteHandler(e){if(this._isRecorded(e)){let n=this._eventListeners.indexOf(e);this._eventListeners.splice(n,1)}}subscribe(e){this._isRecorded(e)||this._eventListeners.push(e)}unsubscribe(e){this._deleteHandler(e)}dispose(){this._eventListeners=null}}class ga extends hs{constructor(){super()}async raiseEventAsync(...e){return this._eventListeners!=null&&this._eventListeners.length>0&&this._executeSubscribersWithArgs(e),Promise.resolve()}async subscribeAsync(e){return this.subscribe(e),Promise.resolve()}async unsubscribeAsync(e){return this.unsubscribe(e),Promise.resolve()}}const ya={createGlobalAsyncEventEmitter(){return new ga},createGlobalEventEmitter(){return new hs},createAsyncEventEmitter(){return new ma},createEventEmitter(){return new us}};function Ji(t,e){let n=`ERROR:${t}. ORGIN:${e}`;console.error(n)}class va{constructor(){this.routes=[],this.outletContainer=void 0,this.vaadinRouterInstance=void 0,this.onDidNavigate=ya.createGlobalAsyncEventEmitter()}setOutlet(e){this.outletContainer=e}setViewRoutes(e){this.routes=e}getInitialRouterParamsAndOptions(){return new Promise(e=>{this.vaadinRouterInstance?setTimeout(()=>{e(this.vaadinRouterInstance.location)},200):Ji("Accessing Router Param and Options With Undefined Router Instance","XF-ROUTER-MODEL")})}getRouterParamsAndOptions(){var e;return(e=this.vaadinRouterInstance)==null?void 0:e.location}initializeRouter(){this.outletContainer?(this.vaadinRouterInstance=new se(this.outletContainer),this.vaadinRouterInstance.setRoutes(this.routes),window.addEventListener("vaadin-router-location-changed",e=>{window.scrollTo({top:0}),this.onDidNavigate.raiseEventAsync(e.detail.location)})):Ji("Accessing Undefined OutletContainer","XF-ROUTER-MODEL")}}const Pe=new va;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ds=class extends Event{constructor(e,n,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=n,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ki=class{constructor(e,n,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=e,n.context!==void 0){const s=n;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=n,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ds(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ba=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,n=!1){const i=n||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[n,{disposer:i}]of this.subscriptions)n(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,n,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:n});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xa=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Zi=class extends ba{constructor(e,n,i){var r,s;super(n.context!==void 0?n.initialValue:i),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:u}]of this.subscriptions)a.has(l)||(a.add(l),u.dispatchEvent(new ds(this.context,l,!0)));o.stopPropagation()},this.host=e,n.context!==void 0?this.context=n.context:this.context=n,this.attachListeners(),(s=(r=this.host).addController)==null||s.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new xa(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _a({context:t}){return(e,n)=>{const i=new WeakMap;if(typeof n=="object")return n.addInitializer(function(){i.set(this,new Zi(this,{context:t}))}),{get(){return e.get.call(this)},set(r){var s;return(s=i.get(this))==null||s.setValue(r),e.set.call(this,r)},init(r){var s;return(s=i.get(this))==null||s.setValue(r),r}};{e.constructor.addInitializer(o=>{i.set(o,new Zi(o,{context:t}))});const r=Object.getOwnPropertyDescriptor(e,n);let s;if(r===void 0){const o=new WeakMap;s={get:function(){return o.get(this)},set:function(c){i.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=r.set;s={...r,set:function(c){i.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,n,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he({context:t,subscribe:e}){return(n,i)=>{typeof i=="object"?i.addInitializer(function(){new Ki(this,{context:t,callback:r=>{this[i.name]=r},subscribe:e})}):n.constructor.addInitializer(r=>{new Ki(r,{context:t,callback:s=>{r[i]=s},subscribe:e})})}}const hi=Symbol("ResourcesContext");class St{constructor(e){this.__promiseFunction=void 0,this.__completeState=void 0,this.__errorState=void 0,this._promise=new Promise((n,i)=>{this.__completeState=n,this.__errorState=i}),this.__promiseFunction=e}__cowait(){return this.__promiseFunction(),this._promise}__completeWithValue(e){this.__completeState&&this.__completeState(e)}__errorWithValue(e){this.__errorState&&this.__errorState(e)}}const di=JSON,wa=t=>t.toUpperCase(),Ea=t=>{const e={};return t.forEach((n,i)=>{e[i]=n}),e},Aa=(t,e,n)=>t.document?t:{document:t,variables:e,requestHeaders:n,signal:void 0},Ta=(t,e,n)=>t.query?t:{query:t,variables:e,requestHeaders:n,signal:void 0},Oa=(t,e)=>t.documents?t:{documents:t,requestHeaders:e,signal:void 0};function Lt(t,e){if(!!!t)throw new Error(e)}function Ca(t){return typeof t=="object"&&t!==null}function Sa(t,e){if(!!!t)throw new Error("Unexpected invariant triggered.")}const Pa=/\r\n|[\n\r]/g;function Mn(t,e){let n=0,i=1;for(const r of t.body.matchAll(Pa)){if(typeof r.index=="number"||Sa(!1),r.index>=e)break;n=r.index+r[0].length,i+=1}return{line:i,column:e+1-n}}function Ia(t){return fs(t.source,Mn(t.source,t.start))}function fs(t,e){const n=t.locationOffset.column-1,i="".padStart(n)+t.body,r=e.line-1,s=t.locationOffset.line-1,o=e.line+s,c=e.line===1?n:0,a=e.column+c,l=`${t.name}:${o}:${a}
`,u=i.split(/\r\n|[\n\r]/g),h=u[r];if(h.length>120){const d=Math.floor(a/80),m=a%80,g=[];for(let b=0;b<h.length;b+=80)g.push(h.slice(b,b+80));return l+er([[`${o} |`,g[0]],...g.slice(1,d+1).map(b=>["|",b]),["|","^".padStart(m)],["|",g[d+1]]])}return l+er([[`${o-1} |`,u[r-1]],[`${o} |`,h],["|","^".padStart(a)],[`${o+1} |`,u[r+1]]])}function er(t){const e=t.filter(([i,r])=>r!==void 0),n=Math.max(...e.map(([i])=>i.length));return e.map(([i,r])=>i.padStart(n)+(r?" "+r:"")).join(`
`)}function $a(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class fi extends Error{constructor(e,...n){var i,r,s;const{nodes:o,source:c,positions:a,path:l,originalError:u,extensions:h}=$a(n);super(e),this.name="GraphQLError",this.path=l??void 0,this.originalError=u??void 0,this.nodes=tr(Array.isArray(o)?o:o?[o]:void 0);const d=tr((i=this.nodes)===null||i===void 0?void 0:i.map(g=>g.loc).filter(g=>g!=null));this.source=c??(d==null||(r=d[0])===null||r===void 0?void 0:r.source),this.positions=a??(d==null?void 0:d.map(g=>g.start)),this.locations=a&&c?a.map(g=>Mn(c,g)):d==null?void 0:d.map(g=>Mn(g.source,g.start));const m=Ca(u==null?void 0:u.extensions)?u==null?void 0:u.extensions:void 0;this.extensions=(s=h??m)!==null&&s!==void 0?s:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),u!=null&&u.stack?Object.defineProperty(this,"stack",{value:u.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,fi):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+=`

`+Ia(n.loc));else if(this.source&&this.locations)for(const n of this.locations)e+=`

`+fs(this.source,n);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function tr(t){return t===void 0||t.length===0?void 0:t}function j(t,e,n){return new fi(`Syntax Error: ${n}`,{source:t,positions:[e]})}class Da{constructor(e,n,i){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=i}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class ps{constructor(e,n,i,r,s,o){this.kind=e,this.start=n,this.end=i,this.line=r,this.column=s,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const ms={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Na=new Set(Object.keys(ms));function nr(t){const e=t==null?void 0:t.kind;return typeof e=="string"&&Na.has(e)}var $e;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})($e||($e={}));var jn;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(jn||(jn={}));var _;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(_||(_={}));function Bn(t){return t===9||t===32}function lt(t){return t>=48&&t<=57}function gs(t){return t>=97&&t<=122||t>=65&&t<=90}function ys(t){return gs(t)||t===95}function Ra(t){return gs(t)||lt(t)||t===95}function ka(t){var e;let n=Number.MAX_SAFE_INTEGER,i=null,r=-1;for(let o=0;o<t.length;++o){var s;const c=t[o],a=La(c);a!==c.length&&(i=(s=i)!==null&&s!==void 0?s:o,r=o,o!==0&&a<n&&(n=a))}return t.map((o,c)=>c===0?o:o.slice(n)).slice((e=i)!==null&&e!==void 0?e:0,r+1)}function La(t){let e=0;for(;e<t.length&&Bn(t.charCodeAt(e));)++e;return e}function Ma(t,e){const n=t.replace(/"""/g,'\\"""'),i=n.split(/\r\n|[\n\r]/g),r=i.length===1,s=i.length>1&&i.slice(1).every(m=>m.length===0||Bn(m.charCodeAt(0))),o=n.endsWith('\\"""'),c=t.endsWith('"')&&!o,a=t.endsWith("\\"),l=c||a,u=!r||t.length>70||l||s||o;let h="";const d=r&&Bn(t.charCodeAt(0));return(u&&!d||s)&&(h+=`
`),h+=n,(u||l)&&(h+=`
`),'"""'+h+'"""'}var p;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(p||(p={}));class ja{constructor(e){const n=new ps(p.SOF,0,0,0,0);this.source=e,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==p.EOF)do if(e.next)e=e.next;else{const n=Fa(this,e.end);e.next=n,n.prev=e,e=n}while(e.kind===p.COMMENT);return e}}function Ba(t){return t===p.BANG||t===p.DOLLAR||t===p.AMP||t===p.PAREN_L||t===p.PAREN_R||t===p.SPREAD||t===p.COLON||t===p.EQUALS||t===p.AT||t===p.BRACKET_L||t===p.BRACKET_R||t===p.BRACE_L||t===p.PIPE||t===p.BRACE_R}function Be(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function on(t,e){return vs(t.charCodeAt(e))&&bs(t.charCodeAt(e+1))}function vs(t){return t>=55296&&t<=56319}function bs(t){return t>=56320&&t<=57343}function xe(t,e){const n=t.source.body.codePointAt(e);if(n===void 0)return p.EOF;if(n>=32&&n<=126){const i=String.fromCodePoint(n);return i==='"'?`'"'`:`"${i}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function M(t,e,n,i,r){const s=t.line,o=1+n-t.lineStart;return new ps(e,n,i,s,o,r)}function Fa(t,e){const n=t.source.body,i=n.length;let r=e;for(;r<i;){const s=n.charCodeAt(r);switch(s){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++t.line,t.lineStart=r;continue;case 13:n.charCodeAt(r+1)===10?r+=2:++r,++t.line,t.lineStart=r;continue;case 35:return qa(t,r);case 33:return M(t,p.BANG,r,r+1);case 36:return M(t,p.DOLLAR,r,r+1);case 38:return M(t,p.AMP,r,r+1);case 40:return M(t,p.PAREN_L,r,r+1);case 41:return M(t,p.PAREN_R,r,r+1);case 46:if(n.charCodeAt(r+1)===46&&n.charCodeAt(r+2)===46)return M(t,p.SPREAD,r,r+3);break;case 58:return M(t,p.COLON,r,r+1);case 61:return M(t,p.EQUALS,r,r+1);case 64:return M(t,p.AT,r,r+1);case 91:return M(t,p.BRACKET_L,r,r+1);case 93:return M(t,p.BRACKET_R,r,r+1);case 123:return M(t,p.BRACE_L,r,r+1);case 124:return M(t,p.PIPE,r,r+1);case 125:return M(t,p.BRACE_R,r,r+1);case 34:return n.charCodeAt(r+1)===34&&n.charCodeAt(r+2)===34?Ya(t,r):Va(t,r)}if(lt(s)||s===45)return Ua(t,r,s);if(ys(s))return Ga(t,r);throw j(t.source,r,s===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Be(s)||on(n,r)?`Unexpected character: ${xe(t,r)}.`:`Invalid character: ${xe(t,r)}.`)}return M(t,p.EOF,i,i)}function qa(t,e){const n=t.source.body,i=n.length;let r=e+1;for(;r<i;){const s=n.charCodeAt(r);if(s===10||s===13)break;if(Be(s))++r;else if(on(n,r))r+=2;else break}return M(t,p.COMMENT,e,r,n.slice(e+1,r))}function Ua(t,e,n){const i=t.source.body;let r=e,s=n,o=!1;if(s===45&&(s=i.charCodeAt(++r)),s===48){if(s=i.charCodeAt(++r),lt(s))throw j(t.source,r,`Invalid number, unexpected digit after 0: ${xe(t,r)}.`)}else r=wn(t,r,s),s=i.charCodeAt(r);if(s===46&&(o=!0,s=i.charCodeAt(++r),r=wn(t,r,s),s=i.charCodeAt(r)),(s===69||s===101)&&(o=!0,s=i.charCodeAt(++r),(s===43||s===45)&&(s=i.charCodeAt(++r)),r=wn(t,r,s),s=i.charCodeAt(r)),s===46||ys(s))throw j(t.source,r,`Invalid number, expected digit but got: ${xe(t,r)}.`);return M(t,o?p.FLOAT:p.INT,e,r,i.slice(e,r))}function wn(t,e,n){if(!lt(n))throw j(t.source,e,`Invalid number, expected digit but got: ${xe(t,e)}.`);const i=t.source.body;let r=e+1;for(;lt(i.charCodeAt(r));)++r;return r}function Va(t,e){const n=t.source.body,i=n.length;let r=e+1,s=r,o="";for(;r<i;){const c=n.charCodeAt(r);if(c===34)return o+=n.slice(s,r),M(t,p.STRING,e,r+1,o);if(c===92){o+=n.slice(s,r);const a=n.charCodeAt(r+1)===117?n.charCodeAt(r+2)===123?za(t,r):Ha(t,r):Wa(t,r);o+=a.value,r+=a.size,s=r;continue}if(c===10||c===13)break;if(Be(c))++r;else if(on(n,r))r+=2;else throw j(t.source,r,`Invalid character within String: ${xe(t,r)}.`)}throw j(t.source,r,"Unterminated string.")}function za(t,e){const n=t.source.body;let i=0,r=3;for(;r<12;){const s=n.charCodeAt(e+r++);if(s===125){if(r<5||!Be(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|Je(s),i<0)break}throw j(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+r)}".`)}function Ha(t,e){const n=t.source.body,i=ir(n,e+2);if(Be(i))return{value:String.fromCodePoint(i),size:6};if(vs(i)&&n.charCodeAt(e+6)===92&&n.charCodeAt(e+7)===117){const r=ir(n,e+8);if(bs(r))return{value:String.fromCodePoint(i,r),size:12}}throw j(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+6)}".`)}function ir(t,e){return Je(t.charCodeAt(e))<<12|Je(t.charCodeAt(e+1))<<8|Je(t.charCodeAt(e+2))<<4|Je(t.charCodeAt(e+3))}function Je(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Wa(t,e){const n=t.source.body;switch(n.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw j(t.source,e,`Invalid character escape sequence: "${n.slice(e,e+2)}".`)}function Ya(t,e){const n=t.source.body,i=n.length;let r=t.lineStart,s=e+3,o=s,c="";const a=[];for(;s<i;){const l=n.charCodeAt(s);if(l===34&&n.charCodeAt(s+1)===34&&n.charCodeAt(s+2)===34){c+=n.slice(o,s),a.push(c);const u=M(t,p.BLOCK_STRING,e,s+3,ka(a).join(`
`));return t.line+=a.length-1,t.lineStart=r,u}if(l===92&&n.charCodeAt(s+1)===34&&n.charCodeAt(s+2)===34&&n.charCodeAt(s+3)===34){c+=n.slice(o,s),o=s+1,s+=4;continue}if(l===10||l===13){c+=n.slice(o,s),a.push(c),l===13&&n.charCodeAt(s+1)===10?s+=2:++s,c="",o=s,r=s;continue}if(Be(l))++s;else if(on(n,s))s+=2;else throw j(t.source,s,`Invalid character within String: ${xe(t,s)}.`)}throw j(t.source,s,"Unterminated string.")}function Ga(t,e){const n=t.source.body,i=n.length;let r=e+1;for(;r<i;){const s=n.charCodeAt(r);if(Ra(s))++r;else break}return M(t,p.NAME,e,r,n.slice(e,r))}const Qa=10,xs=2;function pi(t){return an(t,[])}function an(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return Xa(t,e);default:return String(t)}}function Xa(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";const n=[...e,t];if(Ja(t)){const i=t.toJSON();if(i!==t)return typeof i=="string"?i:an(i,n)}else if(Array.isArray(t))return Za(t,n);return Ka(t,n)}function Ja(t){return typeof t.toJSON=="function"}function Ka(t,e){const n=Object.entries(t);return n.length===0?"{}":e.length>xs?"["+ec(t)+"]":"{ "+n.map(([r,s])=>r+": "+an(s,e)).join(", ")+" }"}function Za(t,e){if(t.length===0)return"[]";if(e.length>xs)return"[Array]";const n=Math.min(Qa,t.length),i=t.length-n,r=[];for(let s=0;s<n;++s)r.push(an(t[s],e));return i===1?r.push("... 1 more item"):i>1&&r.push(`... ${i} more items`),"["+r.join(", ")+"]"}function ec(t){const e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){const n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}const tc=globalThis.process?function(e,n){return e instanceof n}:function(e,n){if(e instanceof n)return!0;if(typeof e=="object"&&e!==null){var i;const r=n.prototype[Symbol.toStringTag],s=Symbol.toStringTag in e?e[Symbol.toStringTag]:(i=e.constructor)===null||i===void 0?void 0:i.name;if(r===s){const o=pi(e);throw new Error(`Cannot use ${r} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class _s{constructor(e,n="GraphQL request",i={line:1,column:1}){typeof e=="string"||Lt(!1,`Body must be a string. Received: ${pi(e)}.`),this.body=e,this.name=n,this.locationOffset=i,this.locationOffset.line>0||Lt(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Lt(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function nc(t){return tc(t,_s)}function ic(t,e){return new rc(t,e).parseDocument()}class rc{constructor(e,n={}){const i=nc(e)?e:new _s(e);this._lexer=new ja(i),this._options=n,this._tokenCounter=0}parseName(){const e=this.expectToken(p.NAME);return this.node(e,{kind:_.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:_.DOCUMENT,definitions:this.many(p.SOF,this.parseDefinition,p.EOF)})}parseDefinition(){if(this.peek(p.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),n=e?this._lexer.lookahead():this._lexer.token;if(n.kind===p.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw j(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(p.BRACE_L))return this.node(e,{kind:_.OPERATION_DEFINITION,operation:$e.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let i;return this.peek(p.NAME)&&(i=this.parseName()),this.node(e,{kind:_.OPERATION_DEFINITION,operation:n,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(p.NAME);switch(e.value){case"query":return $e.QUERY;case"mutation":return $e.MUTATION;case"subscription":return $e.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(p.PAREN_L,this.parseVariableDefinition,p.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:_.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(p.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(p.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(p.DOLLAR),this.node(e,{kind:_.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:_.SELECTION_SET,selections:this.many(p.BRACE_L,this.parseSelection,p.BRACE_R)})}parseSelection(){return this.peek(p.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,n=this.parseName();let i,r;return this.expectOptionalToken(p.COLON)?(i=n,r=this.parseName()):r=n,this.node(e,{kind:_.FIELD,alias:i,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(p.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const n=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(p.PAREN_L,n,p.PAREN_R)}parseArgument(e=!1){const n=this._lexer.token,i=this.parseName();return this.expectToken(p.COLON),this.node(n,{kind:_.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(p.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(p.NAME)?this.node(e,{kind:_.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:_.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const n=this._lexer.token;switch(n.kind){case p.BRACKET_L:return this.parseList(e);case p.BRACE_L:return this.parseObject(e);case p.INT:return this.advanceLexer(),this.node(n,{kind:_.INT,value:n.value});case p.FLOAT:return this.advanceLexer(),this.node(n,{kind:_.FLOAT,value:n.value});case p.STRING:case p.BLOCK_STRING:return this.parseStringLiteral();case p.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:_.BOOLEAN,value:!0});case"false":return this.node(n,{kind:_.BOOLEAN,value:!1});case"null":return this.node(n,{kind:_.NULL});default:return this.node(n,{kind:_.ENUM,value:n.value})}case p.DOLLAR:if(e)if(this.expectToken(p.DOLLAR),this._lexer.token.kind===p.NAME){const i=this._lexer.token.value;throw j(this._lexer.source,n.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:_.STRING,value:e.value,block:e.kind===p.BLOCK_STRING})}parseList(e){const n=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:_.LIST,values:this.any(p.BRACKET_L,n,p.BRACKET_R)})}parseObject(e){const n=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:_.OBJECT,fields:this.any(p.BRACE_L,n,p.BRACE_R)})}parseObjectField(e){const n=this._lexer.token,i=this.parseName();return this.expectToken(p.COLON),this.node(n,{kind:_.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){const n=[];for(;this.peek(p.AT);)n.push(this.parseDirective(e));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const n=this._lexer.token;return this.expectToken(p.AT),this.node(n,{kind:_.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let n;if(this.expectOptionalToken(p.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(p.BRACKET_R),n=this.node(e,{kind:_.LIST_TYPE,type:i})}else n=this.parseNamedType();return this.expectOptionalToken(p.BANG)?this.node(e,{kind:_.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:_.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(p.STRING)||this.peek(p.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),r=this.many(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);return this.node(e,{kind:_.SCHEMA_DEFINITION,description:n,directives:i,operationTypes:r})}parseOperationTypeDefinition(){const e=this._lexer.token,n=this.parseOperationType();this.expectToken(p.COLON);const i=this.parseNamedType();return this.node(e,{kind:_.OPERATION_TYPE_DEFINITION,operation:n,type:i})}parseScalarTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),r=this.parseConstDirectives();return this.node(e,{kind:_.SCALAR_TYPE_DEFINITION,description:n,name:i,directives:r})}parseObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),r=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:_.OBJECT_TYPE_DEFINITION,description:n,name:i,interfaces:r,directives:s,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(p.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(p.BRACE_L,this.parseFieldDefinition,p.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseName(),r=this.parseArgumentDefs();this.expectToken(p.COLON);const s=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(e,{kind:_.FIELD_DEFINITION,description:n,name:i,arguments:r,type:s,directives:o})}parseArgumentDefs(){return this.optionalMany(p.PAREN_L,this.parseInputValueDef,p.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseName();this.expectToken(p.COLON);const r=this.parseTypeReference();let s;this.expectOptionalToken(p.EQUALS)&&(s=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(e,{kind:_.INPUT_VALUE_DEFINITION,description:n,name:i,type:r,defaultValue:s,directives:o})}parseInterfaceTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),r=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:_.INTERFACE_TYPE_DEFINITION,description:n,name:i,interfaces:r,directives:s,fields:o})}parseUnionTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(e,{kind:_.UNION_TYPE_DEFINITION,description:n,name:i,directives:r,types:s})}parseUnionMemberTypes(){return this.expectOptionalToken(p.EQUALS)?this.delimitedMany(p.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(e,{kind:_.ENUM_TYPE_DEFINITION,description:n,name:i,directives:r,values:s})}parseEnumValuesDefinition(){return this.optionalMany(p.BRACE_L,this.parseEnumValueDefinition,p.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(e,{kind:_.ENUM_VALUE_DEFINITION,description:n,name:i,directives:r})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw j(this._lexer.source,this._lexer.token.start,`${Pt(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(e,{kind:_.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:i,directives:r,fields:s})}parseInputFieldsDefinition(){return this.optionalMany(p.BRACE_L,this.parseInputValueDef,p.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===p.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.optionalMany(p.BRACE_L,this.parseOperationTypeDefinition,p.BRACE_R);if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:_.SCHEMA_EXTENSION,directives:n,operationTypes:i})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(e,{kind:_.SCALAR_TYPE_EXTENSION,name:n,directives:i})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:_.OBJECT_TYPE_EXTENSION,name:n,interfaces:i,directives:r,fields:s})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:_.INTERFACE_TYPE_EXTENSION,name:n,interfaces:i,directives:r,fields:s})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:_.UNION_TYPE_EXTENSION,name:n,directives:i,types:r})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:_.ENUM_TYPE_EXTENSION,name:n,directives:i,values:r})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:_.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:i,fields:r})}parseDirectiveDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(p.AT);const i=this.parseName(),r=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(e,{kind:_.DIRECTIVE_DEFINITION,description:n,name:i,arguments:r,repeatable:s,locations:o})}parseDirectiveLocations(){return this.delimitedMany(p.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(jn,n.value))return n;throw this.unexpected(e)}node(e,n){return this._options.noLocation!==!0&&(n.loc=new Da(e,this._lexer.lastToken,this._lexer.source)),n}peek(e){return this._lexer.token.kind===e}expectToken(e){const n=this._lexer.token;if(n.kind===e)return this.advanceLexer(),n;throw j(this._lexer.source,n.start,`Expected ${ws(e)}, found ${Pt(n)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const n=this._lexer.token;if(n.kind===p.NAME&&n.value===e)this.advanceLexer();else throw j(this._lexer.source,n.start,`Expected "${e}", found ${Pt(n)}.`)}expectOptionalKeyword(e){const n=this._lexer.token;return n.kind===p.NAME&&n.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const n=e??this._lexer.token;return j(this._lexer.source,n.start,`Unexpected ${Pt(n)}.`)}any(e,n,i){this.expectToken(e);const r=[];for(;!this.expectOptionalToken(i);)r.push(n.call(this));return r}optionalMany(e,n,i){if(this.expectOptionalToken(e)){const r=[];do r.push(n.call(this));while(!this.expectOptionalToken(i));return r}return[]}many(e,n,i){this.expectToken(e);const r=[];do r.push(n.call(this));while(!this.expectOptionalToken(i));return r}delimitedMany(e,n){this.expectOptionalToken(e);const i=[];do i.push(n.call(this));while(this.expectOptionalToken(e));return i}advanceLexer(){const{maxTokens:e}=this._options,n=this._lexer.advance();if(e!==void 0&&n.kind!==p.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw j(this._lexer.source,n.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function Pt(t){const e=t.value;return ws(t.kind)+(e!=null?` "${e}"`:"")}function ws(t){return Ba(t)?`"${t}"`:t}function sc(t){return`"${t.replace(oc,ac)}"`}const oc=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function ac(t){return cc[t.charCodeAt(0)]}const cc=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],lc=Object.freeze({});function uc(t,e,n=ms){const i=new Map;for(const N of Object.values(_))i.set(N,hc(e,N));let r,s=Array.isArray(t),o=[t],c=-1,a=[],l=t,u,h;const d=[],m=[];do{c++;const N=c===o.length,R=N&&a.length!==0;if(N){if(u=m.length===0?void 0:d[d.length-1],l=h,h=m.pop(),R)if(s){l=l.slice();let U=0;for(const[z,T]of a){const L=z-U;T===null?(l.splice(L,1),U++):l[L]=T}}else{l=Object.defineProperties({},Object.getOwnPropertyDescriptors(l));for(const[U,z]of a)l[U]=z}c=r.index,o=r.keys,a=r.edits,s=r.inArray,r=r.prev}else if(h){if(u=s?c:o[c],l=h[u],l==null)continue;d.push(u)}let P;if(!Array.isArray(l)){var g,b;nr(l)||Lt(!1,`Invalid AST Node: ${pi(l)}.`);const U=N?(g=i.get(l.kind))===null||g===void 0?void 0:g.leave:(b=i.get(l.kind))===null||b===void 0?void 0:b.enter;if(P=U==null?void 0:U.call(e,l,u,h,d,m),P===lc)break;if(P===!1){if(!N){d.pop();continue}}else if(P!==void 0&&(a.push([u,P]),!N))if(nr(P))l=P;else{d.pop();continue}}if(P===void 0&&R&&a.push([u,l]),N)d.pop();else{var C;r={inArray:s,index:c,keys:o,edits:a,prev:r},s=Array.isArray(l),o=s?l:(C=n[l.kind])!==null&&C!==void 0?C:[],c=-1,a=[],h&&m.push(h),h=l}}while(r!==void 0);return a.length!==0?a[a.length-1][1]:t}function hc(t,e){const n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function dc(t){return uc(t,pc)}const fc=80,pc={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>v(t.definitions,`

`)},OperationDefinition:{leave(t){const e=A("(",v(t.variableDefinitions,", "),")"),n=v([t.operation,v([t.name,e]),v(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:i})=>t+": "+e+A(" = ",n)+A(" ",v(i," "))},SelectionSet:{leave:({selections:t})=>W(t)},Field:{leave({alias:t,name:e,arguments:n,directives:i,selectionSet:r}){const s=A("",t,": ")+e;let o=s+A("(",v(n,", "),")");return o.length>fc&&(o=s+A(`(
`,Mt(v(n,`
`)),`
)`)),v([o,v(i," "),r]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+A(" ",v(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>v(["...",A("on ",t),v(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:i,selectionSet:r})=>`fragment ${t}${A("(",v(n,", "),")")} on ${e} ${A("",v(i," ")," ")}`+r},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?Ma(t):sc(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+v(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+v(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+A("(",v(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>A("",t,`
`)+v(["schema",v(e," "),W(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>A("",t,`
`)+v(["scalar",e,v(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:i,fields:r})=>A("",t,`
`)+v(["type",e,A("implements ",v(n," & ")),v(i," "),W(r)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:i,directives:r})=>A("",t,`
`)+e+(rr(n)?A(`(
`,Mt(v(n,`
`)),`
)`):A("(",v(n,", "),")"))+": "+i+A(" ",v(r," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:i,directives:r})=>A("",t,`
`)+v([e+": "+n,A("= ",i),v(r," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:i,fields:r})=>A("",t,`
`)+v(["interface",e,A("implements ",v(n," & ")),v(i," "),W(r)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:i})=>A("",t,`
`)+v(["union",e,v(n," "),A("= ",v(i," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:i})=>A("",t,`
`)+v(["enum",e,v(n," "),W(i)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>A("",t,`
`)+v([e,v(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:i})=>A("",t,`
`)+v(["input",e,v(n," "),W(i)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,repeatable:i,locations:r})=>A("",t,`
`)+"directive @"+e+(rr(n)?A(`(
`,Mt(v(n,`
`)),`
)`):A("(",v(n,", "),")"))+(i?" repeatable":"")+" on "+v(r," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>v(["extend schema",v(t," "),W(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>v(["extend scalar",t,v(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:i})=>v(["extend type",t,A("implements ",v(e," & ")),v(n," "),W(i)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:i})=>v(["extend interface",t,A("implements ",v(e," & ")),v(n," "),W(i)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>v(["extend union",t,v(e," "),A("= ",v(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>v(["extend enum",t,v(e," "),W(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>v(["extend input",t,v(e," "),W(n)]," ")}};function v(t,e=""){var n;return(n=t==null?void 0:t.filter(i=>i).join(e))!==null&&n!==void 0?n:""}function W(t){return A(`{
`,Mt(v(t,`
`)),`
}`)}function A(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function Mt(t){return A("  ",t.replace(/\n/g,`
  `))}function rr(t){var e;return(e=t==null?void 0:t.some(n=>n.includes(`
`)))!==null&&e!==void 0?e:!1}const sr=t=>{var i,r;let e;const n=t.definitions.filter(s=>s.kind==="OperationDefinition");return n.length===1&&(e=(r=(i=n[0])==null?void 0:i.name)==null?void 0:r.value),e},En=t=>{if(typeof t=="string"){let n;try{const i=ic(t);n=sr(i)}catch{}return{query:t,operationName:n}}const e=sr(t);return{query:dc(t),operationName:e}};class tt extends Error{constructor(e,n){const i=`${tt.extractMessage(e)}: ${JSON.stringify({response:e,request:n})}`;super(i),Object.setPrototypeOf(this,tt.prototype),this.response=e,this.request=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,tt)}static extractMessage(e){var n,i;return((i=(n=e.errors)==null?void 0:n[0])==null?void 0:i.message)??`GraphQL Error (Code: ${e.status})`}}var mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fn={exports:{}};(function(t,e){var n=typeof self<"u"?self:mc,i=function(){function s(){this.fetch=!1,this.DOMException=n.DOMException}return s.prototype=n,new s}();(function(s){(function(o){var c={searchParams:"URLSearchParams"in s,iterable:"Symbol"in s&&"iterator"in Symbol,blob:"FileReader"in s&&"Blob"in s&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in s,arrayBuffer:"ArrayBuffer"in s};function a(f){return f&&DataView.prototype.isPrototypeOf(f)}if(c.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(f){return f&&l.indexOf(Object.prototype.toString.call(f))>-1};function h(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(f))throw new TypeError("Invalid character in header field name");return f.toLowerCase()}function d(f){return typeof f!="string"&&(f=String(f)),f}function m(f){var y={next:function(){var E=f.shift();return{done:E===void 0,value:E}}};return c.iterable&&(y[Symbol.iterator]=function(){return y}),y}function g(f){this.map={},f instanceof g?f.forEach(function(y,E){this.append(E,y)},this):Array.isArray(f)?f.forEach(function(y){this.append(y[0],y[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(y){this.append(y,f[y])},this)}g.prototype.append=function(f,y){f=h(f),y=d(y);var E=this.map[f];this.map[f]=E?E+", "+y:y},g.prototype.delete=function(f){delete this.map[h(f)]},g.prototype.get=function(f){return f=h(f),this.has(f)?this.map[f]:null},g.prototype.has=function(f){return this.map.hasOwnProperty(h(f))},g.prototype.set=function(f,y){this.map[h(f)]=d(y)},g.prototype.forEach=function(f,y){for(var E in this.map)this.map.hasOwnProperty(E)&&f.call(y,this.map[E],E,this)},g.prototype.keys=function(){var f=[];return this.forEach(function(y,E){f.push(E)}),m(f)},g.prototype.values=function(){var f=[];return this.forEach(function(y){f.push(y)}),m(f)},g.prototype.entries=function(){var f=[];return this.forEach(function(y,E){f.push([E,y])}),m(f)},c.iterable&&(g.prototype[Symbol.iterator]=g.prototype.entries);function b(f){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}function C(f){return new Promise(function(y,E){f.onload=function(){y(f.result)},f.onerror=function(){E(f.error)}})}function N(f){var y=new FileReader,E=C(y);return y.readAsArrayBuffer(f),E}function R(f){var y=new FileReader,E=C(y);return y.readAsText(f),E}function P(f){for(var y=new Uint8Array(f),E=new Array(y.length),q=0;q<y.length;q++)E[q]=String.fromCharCode(y[q]);return E.join("")}function U(f){if(f.slice)return f.slice(0);var y=new Uint8Array(f.byteLength);return y.set(new Uint8Array(f)),y.buffer}function z(){return this.bodyUsed=!1,this._initBody=function(f){this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:c.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:c.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():c.arrayBuffer&&c.blob&&a(f)?(this._bodyArrayBuffer=U(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||u(f))?this._bodyArrayBuffer=U(f):this._bodyText=f=Object.prototype.toString.call(f):this._bodyText="",this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var f=b(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?b(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(N)}),this.text=function(){var f=b(this);if(f)return f;if(this._bodyBlob)return R(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(P(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(Te)}),this.json=function(){return this.text().then(JSON.parse)},this}var T=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function L(f){var y=f.toUpperCase();return T.indexOf(y)>-1?y:f}function F(f,y){y=y||{};var E=y.body;if(f instanceof F){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,y.headers||(this.headers=new g(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!E&&f._bodyInit!=null&&(E=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=y.credentials||this.credentials||"same-origin",(y.headers||!this.headers)&&(this.headers=new g(y.headers)),this.method=L(y.method||this.method||"GET"),this.mode=y.mode||this.mode||null,this.signal=y.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&E)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(E)}F.prototype.clone=function(){return new F(this,{body:this._bodyInit})};function Te(f){var y=new FormData;return f.trim().split("&").forEach(function(E){if(E){var q=E.split("="),B=q.shift().replace(/\+/g," "),$=q.join("=").replace(/\+/g," ");y.append(decodeURIComponent(B),decodeURIComponent($))}}),y}function ee(f){var y=new g,E=f.replace(/\r?\n[\t ]+/g," ");return E.split(/\r?\n/).forEach(function(q){var B=q.split(":"),$=B.shift().trim();if($){var Tt=B.join(":").trim();y.append($,Tt)}}),y}z.call(F.prototype);function X(f,y){y||(y={}),this.type="default",this.status=y.status===void 0?200:y.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in y?y.statusText:"OK",this.headers=new g(y.headers),this.url=y.url||"",this._initBody(f)}z.call(X.prototype),X.prototype.clone=function(){return new X(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new g(this.headers),url:this.url})},X.error=function(){var f=new X(null,{status:0,statusText:""});return f.type="error",f};var lo=[301,302,303,307,308];X.redirect=function(f,y){if(lo.indexOf(y)===-1)throw new RangeError("Invalid status code");return new X(null,{status:y,headers:{location:f}})},o.DOMException=s.DOMException;try{new o.DOMException}catch{o.DOMException=function(y,E){this.message=y,this.name=E;var q=Error(y);this.stack=q.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function mn(f,y){return new Promise(function(E,q){var B=new F(f,y);if(B.signal&&B.signal.aborted)return q(new o.DOMException("Aborted","AbortError"));var $=new XMLHttpRequest;function Tt(){$.abort()}$.onload=function(){var ze={status:$.status,statusText:$.statusText,headers:ee($.getAllResponseHeaders()||"")};ze.url="responseURL"in $?$.responseURL:ze.headers.get("X-Request-URL");var gn="response"in $?$.response:$.responseText;E(new X(gn,ze))},$.onerror=function(){q(new TypeError("Network request failed"))},$.ontimeout=function(){q(new TypeError("Network request failed"))},$.onabort=function(){q(new o.DOMException("Aborted","AbortError"))},$.open(B.method,B.url,!0),B.credentials==="include"?$.withCredentials=!0:B.credentials==="omit"&&($.withCredentials=!1),"responseType"in $&&c.blob&&($.responseType="blob"),B.headers.forEach(function(ze,gn){$.setRequestHeader(gn,ze)}),B.signal&&(B.signal.addEventListener("abort",Tt),$.onreadystatechange=function(){$.readyState===4&&B.signal.removeEventListener("abort",Tt)}),$.send(typeof B._bodyInit>"u"?null:B._bodyInit)})}return mn.polyfill=!0,s.fetch||(s.fetch=mn,s.Headers=g,s.Request=F,s.Response=X),o.Headers=g,o.Request=F,o.Response=X,o.fetch=mn,Object.defineProperty(o,"__esModule",{value:!0}),o})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var r=i;e=r.fetch,e.default=r.fetch,e.fetch=r.fetch,e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response,t.exports=e})(Fn,Fn.exports);var Gt=Fn.exports;const jt=gc(Gt),yc=fo({__proto__:null,default:jt},[Gt]),Oe=t=>{let e={};return t&&(typeof Headers<"u"&&t instanceof Headers||yc&&Gt.Headers&&t instanceof Gt.Headers?e=Ea(t):Array.isArray(t)?t.forEach(([n,i])=>{n&&i!==void 0&&(e[n]=i)}):e=t),e},or=t=>t.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),vc=t=>{if(!Array.isArray(t.query)){const i=t,r=[`query=${encodeURIComponent(or(i.query))}`];return t.variables&&r.push(`variables=${encodeURIComponent(i.jsonSerializer.stringify(i.variables))}`),i.operationName&&r.push(`operationName=${encodeURIComponent(i.operationName)}`),r.join("&")}if(typeof t.variables<"u"&&!Array.isArray(t.variables))throw new Error("Cannot create query with given variable type, array expected");const e=t,n=t.query.reduce((i,r,s)=>(i.push({query:or(r),variables:e.variables?e.jsonSerializer.stringify(e.variables[s]):void 0}),i),[]);return`query=${encodeURIComponent(e.jsonSerializer.stringify(n))}`},bc=t=>async e=>{const{url:n,query:i,variables:r,operationName:s,fetch:o,fetchOptions:c,middleware:a}=e,l={...e.headers};let u="",h;t==="POST"?(h=_c(i,r,s,c.jsonSerializer),typeof h=="string"&&(l["Content-Type"]="application/json")):u=vc({query:i,variables:r,operationName:s,jsonSerializer:c.jsonSerializer??di});const d={method:t,headers:l,body:h,...c};let m=n,g=d;if(a){const b=await Promise.resolve(a({...d,url:n,operationName:s,variables:r})),{url:C,...N}=b;m=C,g=N}return u&&(m=`${m}?${u}`),await o(m,g)};class xc{constructor(e,n={}){this.url=e,this.requestConfig=n,this.rawRequest=async(...i)=>{const[r,s,o]=i,c=Ta(r,s,o),{headers:a,fetch:l=jt,method:u="POST",requestMiddleware:h,responseMiddleware:d,...m}=this.requestConfig,{url:g}=this;c.signal!==void 0&&(m.signal=c.signal);const{operationName:b}=En(c.query);return An({url:g,query:c.query,variables:c.variables,headers:{...Oe(Tn(a)),...Oe(c.requestHeaders)},operationName:b,fetch:l,method:u,fetchOptions:m,middleware:h}).then(C=>(d&&d(C),C)).catch(C=>{throw d&&d(C),C})}}async request(e,...n){const[i,r]=n,s=Aa(e,i,r),{headers:o,fetch:c=jt,method:a="POST",requestMiddleware:l,responseMiddleware:u,...h}=this.requestConfig,{url:d}=this;s.signal!==void 0&&(h.signal=s.signal);const{query:m,operationName:g}=En(s.document);return An({url:d,query:m,variables:s.variables,headers:{...Oe(Tn(o)),...Oe(s.requestHeaders)},operationName:g,fetch:c,method:a,fetchOptions:h,middleware:l}).then(b=>(u&&u(b),b.data)).catch(b=>{throw u&&u(b),b})}batchRequests(e,n){const i=Oa(e,n),{headers:r,...s}=this.requestConfig;i.signal!==void 0&&(s.signal=i.signal);const o=i.documents.map(({document:a})=>En(a).query),c=i.documents.map(({variables:a})=>a);return An({url:this.url,query:o,variables:c,headers:{...Oe(Tn(r)),...Oe(i.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??jt,method:this.requestConfig.method||"POST",fetchOptions:s,middleware:this.requestConfig.requestMiddleware}).then(a=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(a),a.data)).catch(a=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(a),a})}setHeaders(e){return this.requestConfig.headers=e,this}setHeader(e,n){const{headers:i}=this.requestConfig;return i?i[e]=n:this.requestConfig.headers={[e]:n},this}setEndpoint(e){return this.url=e,this}}const An=async t=>{const{query:e,variables:n,fetchOptions:i}=t,r=bc(wa(t.method??"post")),s=Array.isArray(t.query),o=await r(t),c=await wc(o,i.jsonSerializer??di),a=Array.isArray(c)?!c.some(({data:u})=>!u):!!c.data,l=Array.isArray(c)||!c.errors||Array.isArray(c.errors)&&!c.errors.length||i.errorPolicy==="all"||i.errorPolicy==="ignore";if(o.ok&&l&&a){const{errors:u,...h}=(Array.isArray(c),c),d=i.errorPolicy==="ignore"?h:c;return{...s?{data:d}:d,headers:o.headers,status:o.status}}else{const u=typeof c=="string"?{error:c}:c;throw new tt({...u,status:o.status,headers:o.headers},{query:e,variables:n})}},_c=(t,e,n,i)=>{const r=i??di;if(!Array.isArray(t))return r.stringify({query:t,variables:e,operationName:n});if(typeof e<"u"&&!Array.isArray(e))throw new Error("Cannot create request body with given variable type, array expected");const s=t.reduce((o,c,a)=>(o.push({query:c,variables:e?e[a]:void 0}),o),[]);return r.stringify(s)},wc=async(t,e)=>{let n;return t.headers.forEach((i,r)=>{r.toLowerCase()==="content-type"&&(n=i)}),n&&(n.toLowerCase().startsWith("application/json")||n.toLowerCase().startsWith("application/graphql+json")||n.toLowerCase().startsWith("application/graphql-response+json"))?e.parse(await t.text()):t.text()},Tn=t=>typeof t=="function"?t():t,ar=(t,...e)=>t.reduce((n,i,r)=>`${n}${i}${r in e?String(e[r]):""}`,""),Fe=Symbol("requestContext"),cr=new xc("https://api-eu-west-2.hygraph.com/v2/clrcee4dj1wbg01wawtl1i0pv/master");class Ec{constructor(){this.cachedRequestsData={bannerBlogCards:[],searchItems:[],privacyPolicies:[],blogData:[],articleCards:[]},this.__bannerBlogCardsPromise=new St(()=>{this.getBannerBlogCards()}),this.__searchItemsPromise=new St(()=>{this.getSearchItems()}),this.__privacyPoliciesPromise=new St(()=>{this.getPrivacyPolicyItems()}),this.__articleCardsPromise=new St(()=>{this.getBlogArticles()})}__intialize__(){this.getBlogData().then(e=>{this.filterAndCacheData(e.blogs)})}requestPrivacyPolicies(){const e=ar`
            {
                ygcontents {
                    title
                    policyNumber
                    content {
                        text
                    }
                }
            }
        `;return cr.request(e)}async getPrivacyPolicies(){return await this.requestPrivacyPolicies()}requestBlogsData(){const e=ar`
            {
                blogs {
                    createdAt
                    id
                    slug
                    description
                    title
                    readtime {
                        text
                    }
                    content {
                        html
                    }
                    image {
                        url
                    }
                    comments {
                        name
                        createdAt
                        comment
                    }
                }
            }
        `;return cr.request(e)}async getBlogData(){let e;try{e=await this.requestBlogsData()}catch(n){console.log("REQUEST_CONTEXT_ERROR",n.message)}return e}async filterAndCacheData(e){return new Promise(n=>{this.cachedRequestsData.blogData=e.reverse(),this.cachedRequestsData.bannerBlogCards=this.cachedRequestsData.blogData.map(i=>({title:i.title,createdAt:i.createdAt,id:i.id,readtime:i.readtime,slug:i.slug})).slice(0,5),this.cachedRequestsData.articleCards=this.cachedRequestsData.blogData.map(i=>({title:i.title,createdAt:i.createdAt,description:i.description,id:i.id,image:i.image,slug:i.slug,readtime:i.readtime})),this.cachedRequestsData.searchItems=this.cachedRequestsData.blogData.map(i=>({title:i.title,content:i.content,createdAt:i.createdAt,description:i.description,id:i.id,readtime:i.readtime,slug:i.slug})),this.cachedRequestsData.blogData.length>0&&this.cachedRequestsData.bannerBlogCards.length>0&&n()})}getPrivacyPolicyItems(){this.hasCachedData(this.cachedRequestsData.privacyPolicies)?this.__privacyPoliciesPromise.__completeWithValue(this.cachedRequestsData.privacyPolicies):this.getPrivacyPolicies().then(e=>{this.cachedRequestsData.privacyPolicies=e.ygcontents,this.__privacyPoliciesPromise.__completeWithValue(this.cachedRequestsData.privacyPolicies)})}async getContentDataForBlog(e){let n;if(this.hasCachedData(this.cachedRequestsData.blogData)){let r=this.cachedRequestsData.blogData.filter(s=>s.slug==e)[0];n={title:r.title,comments:r.comments,content:r.content,createdAt:r.createdAt,image:r.image,readtime:r.readtime,slug:r.slug,id:r.id,description:r.description}}else try{let i=await this.getBlogData();this.filterAndCacheData(i.blogs);let s=this.cachedRequestsData.blogData.filter(o=>o.slug==e)[0];n={title:s.title,comments:s.comments,content:s.content,createdAt:s.createdAt,image:s.image,readtime:s.readtime,slug:s.slug,id:s.id,description:s.description}}catch{console.error("No interner Connection")}return n}getContentDataAsideBlogs(e){return this.cachedRequestsData.blogData.filter(i=>i.slug!=e).slice(0,3)}getBlogArticles(){this.hasCachedData(this.cachedRequestsData.articleCards)?this.__articleCardsPromise.__completeWithValue(this.cachedRequestsData.articleCards):this.getBlogData().then(e=>{this.filterAndCacheData(e.blogs).then(()=>{this.__articleCardsPromise.__completeWithValue(this.cachedRequestsData.articleCards)})})}getSearchItems(){this.hasCachedData(this.cachedRequestsData.searchItems)?this.__searchItemsPromise.__completeWithValue(this.cachedRequestsData.searchItems):this.getBlogData().then(e=>{this.filterAndCacheData(e.blogs).then(()=>{this.__searchItemsPromise.__completeWithValue(this.cachedRequestsData.searchItems)})})}getBannerBlogCards(){this.hasCachedData(this.cachedRequestsData.bannerBlogCards)?this.__bannerBlogCardsPromise.__completeWithValue(this.cachedRequestsData.bannerBlogCards):this.getBlogData().then(e=>{this.filterAndCacheData(e.blogs).then(()=>{this.__bannerBlogCardsPromise.__completeWithValue(this.cachedRequestsData.bannerBlogCards)})})}hasCachedData(e){return e.length>0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vt=t=>(...e)=>({_$litDirective$:t,values:e});let bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ac}=To,Tc=t=>t.strings===void 0,lr=()=>document.createComment(""),We=(t,e,n)=>{var s;const i=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(n===void 0){const o=i.insertBefore(lr(),r),c=i.insertBefore(lr(),r);n=new Ac(o,c,t,t.options)}else{const o=n._$AB.nextSibling,c=n._$AM,a=c!==t;if(a){let l;(s=n._$AQ)==null||s.call(n,t),n._$AM=t,n._$AP!==void 0&&(l=t._$AU)!==c._$AU&&n._$AP(l)}if(o!==r||a){let l=n._$AA;for(;l!==o;){const u=l.nextSibling;i.insertBefore(l,r),l=u}}}return n},fe=(t,e,n=t)=>(t._$AI(e,n),t),Oc={},Cc=(t,e=Oc)=>t._$AH=e,Sc=t=>t._$AH,On=t=>{var i;(i=t._$AP)==null||i.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const r=e.nextSibling;e.remove(),e=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ur=(t,e,n)=>{const i=new Map;for(let r=e;r<=n;r++)i.set(t[r],r);return i},De=vt(class extends bt{constructor(t){if(super(t),t.type!==yt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const r=[],s=[];let o=0;for(const c of t)r[o]=i?i(c,o):o,s[o]=n(c,o),o++;return{values:s,keys:r}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){const r=Sc(t),{values:s,keys:o}=this.dt(e,n,i);if(!Array.isArray(r))return this.ut=o,s;const c=this.ut??(this.ut=[]),a=[];let l,u,h=0,d=r.length-1,m=0,g=s.length-1;for(;h<=d&&m<=g;)if(r[h]===null)h++;else if(r[d]===null)d--;else if(c[h]===o[m])a[m]=fe(r[h],s[m]),h++,m++;else if(c[d]===o[g])a[g]=fe(r[d],s[g]),d--,g--;else if(c[h]===o[g])a[g]=fe(r[h],s[g]),We(t,a[g+1],r[h]),h++,g--;else if(c[d]===o[m])a[m]=fe(r[d],s[m]),We(t,r[h],r[d]),d--,m++;else if(l===void 0&&(l=ur(o,m,g),u=ur(c,h,d)),l.has(c[h]))if(l.has(c[d])){const b=u.get(o[m]),C=b!==void 0?r[b]:null;if(C===null){const N=We(t,r[h]);fe(N,s[m]),a[m]=N}else a[m]=fe(C,s[m]),We(t,r[h],C),r[b]=null;m++}else On(r[d]),d--;else On(r[h]),h++;for(;m<=g;){const b=We(t,a[g+1]);fe(b,s[m]),a[m++]=b}for(;h<=d;){const b=r[h++];b!==null&&On(b)}return this.ut=o,Cc(t,a),J}});function Es(t){t.style.opacity="1"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qt(t,e,n){return t?e(t):n==null?void 0:n(t)}function Z(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function _e(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const As=6048e5,Pc=864e5,Ts=6e4,Os=36e5;let Ic={};function cn(){return Ic}function ut(t,e){var c,a,l,u;const n=cn(),i=(e==null?void 0:e.weekStartsOn)??((a=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:a.weekStartsOn)??n.weekStartsOn??((u=(l=n.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??0,r=Z(t),s=r.getDay(),o=(s<i?7:0)+s-i;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function Xt(t){return ut(t,{weekStartsOn:1})}function Cs(t){const e=Z(t),n=e.getFullYear(),i=_e(t,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const r=Xt(i),s=_e(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=Xt(s);return e.getTime()>=r.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function hr(t){const e=Z(t);return e.setHours(0,0,0,0),e}function dr(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function $c(t,e){const n=hr(t),i=hr(e),r=n.getTime()-dr(n),s=i.getTime()-dr(i);return Math.round((r-s)/Pc)}function Dc(t){const e=Cs(t),n=_e(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Xt(n)}function Nc(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Rc(t){if(!Nc(t)&&typeof t!="number")return!1;const e=Z(t);return!isNaN(Number(e))}function kc(t){const e=Z(t),n=_e(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Lc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Mc=(t,e,n)=>{let i;const r=Lc[t];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function Cn(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const jc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Bc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Fc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},qc={date:Cn({formats:jc,defaultWidth:"full"}),time:Cn({formats:Bc,defaultWidth:"full"}),dateTime:Cn({formats:Fc,defaultWidth:"full"})},Uc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Vc=(t,e,n,i)=>Uc[t];function Ye(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let r;if(i==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,c=n!=null&&n.width?String(n.width):o;r=t.formattingValues[c]||t.formattingValues[o]}else{const o=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[c]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return r[s]}}const zc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Hc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Wc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Yc={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Gc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Qc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Xc=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Jc={ordinalNumber:Xc,era:Ye({values:zc,defaultWidth:"wide"}),quarter:Ye({values:Hc,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ye({values:Wc,defaultWidth:"wide"}),day:Ye({values:Yc,defaultWidth:"wide"}),dayPeriod:Ye({values:Gc,defaultWidth:"wide",formattingValues:Qc,defaultFormattingWidth:"wide"})};function Ge(t){return(e,n={})=>{const i=n.width,r=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=e.match(r);if(!s)return null;const o=s[0],c=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],a=Array.isArray(c)?Zc(c,h=>h.test(o)):Kc(c,h=>h.test(o));let l;l=t.valueCallback?t.valueCallback(a):a,l=n.valueCallback?n.valueCallback(l):l;const u=e.slice(o.length);return{value:l,rest:u}}}function Kc(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Zc(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function el(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const r=i[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const c=e.slice(r.length);return{value:o,rest:c}}}const tl=/^(\d+)(th|st|nd|rd)?/i,nl=/\d+/i,il={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rl={any:[/^b/i,/^(a|c)/i]},sl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ol={any:[/1/i,/2/i,/3/i,/4/i]},al={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},cl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ll={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ul={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},hl={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},dl={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},fl={ordinalNumber:el({matchPattern:tl,parsePattern:nl,valueCallback:t=>parseInt(t,10)}),era:Ge({matchPatterns:il,defaultMatchWidth:"wide",parsePatterns:rl,defaultParseWidth:"any"}),quarter:Ge({matchPatterns:sl,defaultMatchWidth:"wide",parsePatterns:ol,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Ge({matchPatterns:al,defaultMatchWidth:"wide",parsePatterns:cl,defaultParseWidth:"any"}),day:Ge({matchPatterns:ll,defaultMatchWidth:"wide",parsePatterns:ul,defaultParseWidth:"any"}),dayPeriod:Ge({matchPatterns:hl,defaultMatchWidth:"any",parsePatterns:dl,defaultParseWidth:"any"})},pl={code:"en-US",formatDistance:Mc,formatLong:qc,formatRelative:Vc,localize:Jc,match:fl,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ml(t){const e=Z(t);return $c(e,kc(e))+1}function gl(t){const e=Z(t),n=Xt(e).getTime()-Dc(e).getTime();return Math.round(n/As)+1}function Ss(t,e){var u,h,d,m;const n=Z(t),i=n.getFullYear(),r=cn(),s=(e==null?void 0:e.firstWeekContainsDate)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,o=_e(t,0);o.setFullYear(i+1,0,s),o.setHours(0,0,0,0);const c=ut(o,e),a=_e(t,0);a.setFullYear(i,0,s),a.setHours(0,0,0,0);const l=ut(a,e);return n.getTime()>=c.getTime()?i+1:n.getTime()>=l.getTime()?i:i-1}function yl(t,e){var c,a,l,u;const n=cn(),i=(e==null?void 0:e.firstWeekContainsDate)??((a=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:a.firstWeekContainsDate)??n.firstWeekContainsDate??((u=(l=n.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??1,r=Ss(t,e),s=_e(t,0);return s.setFullYear(r,0,i),s.setHours(0,0,0,0),ut(s,e)}function vl(t,e){const n=Z(t),i=ut(n,e).getTime()-yl(n,e).getTime();return Math.round(i/As)+1}function S(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const ie={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return S(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):S(n+1,2)},d(t,e){return S(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return S(t.getHours()%12||12,e.length)},H(t,e){return S(t.getHours(),e.length)},m(t,e){return S(t.getMinutes(),e.length)},s(t,e){return S(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),r=Math.floor(i*Math.pow(10,n-3));return S(r,e.length)}},Ce={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},bl={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),r=i>0?i:1-i;return n.ordinalNumber(r,{unit:"year"})}return ie.y(t,e)},Y:function(t,e,n,i){const r=Ss(t,i),s=r>0?r:1-r;if(e==="YY"){const o=s%100;return S(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):S(s,e.length)},R:function(t,e){const n=Cs(t);return S(n,e.length)},u:function(t,e){const n=t.getFullYear();return S(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return S(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return S(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return ie.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return S(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const r=vl(t,i);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):S(r,e.length)},I:function(t,e,n){const i=gl(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):S(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):ie.d(t,e)},D:function(t,e,n){const i=ml(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):S(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const r=t.getDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return S(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const r=t.getDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return S(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),r=i===0?7:i;switch(e){case"i":return String(r);case"ii":return S(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let r;switch(i===12?r=Ce.noon:i===0?r=Ce.midnight:r=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let r;switch(i>=17?r=Ce.evening:i>=12?r=Ce.afternoon:i>=4?r=Ce.morning:r=Ce.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return ie.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):ie.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):S(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):S(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):ie.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):ie.s(t,e)},S:function(t,e){return ie.S(t,e)},X:function(t,e,n,i){const s=(i._originalDate||t).getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return pr(s);case"XXXX":case"XX":return pe(s);case"XXXXX":case"XXX":default:return pe(s,":")}},x:function(t,e,n,i){const s=(i._originalDate||t).getTimezoneOffset();switch(e){case"x":return pr(s);case"xxxx":case"xx":return pe(s);case"xxxxx":case"xxx":default:return pe(s,":")}},O:function(t,e,n,i){const s=(i._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+fr(s,":");case"OOOO":default:return"GMT"+pe(s,":")}},z:function(t,e,n,i){const s=(i._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+fr(s,":");case"zzzz":default:return"GMT"+pe(s,":")}},t:function(t,e,n,i){const r=i._originalDate||t,s=Math.floor(r.getTime()/1e3);return S(s,e.length)},T:function(t,e,n,i){const s=(i._originalDate||t).getTime();return S(s,e.length)}};function fr(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),r=Math.floor(i/60),s=i%60;return s===0?n+String(r):n+String(r)+e+S(s,2)}function pr(t,e){return t%60===0?(t>0?"-":"+")+S(Math.abs(t)/60,2):pe(t,e)}function pe(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),r=S(Math.floor(i/60),2),s=S(i%60,2);return n+r+e+s}const mr=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ps=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},xl=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],r=n[2];if(!r)return mr(t,e);let s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",mr(i,e)).replace("{{time}}",Ps(r,e))},_l={p:Ps,P:xl},wl=/^D+$/,El=/^Y+$/,Al=["D","DD","YY","YYYY"];function Tl(t){return wl.test(t)}function Ol(t){return El.test(t)}function gr(t,e,n){const i=Cl(t,e,n);if(console.warn(i),Al.includes(t))throw new RangeError(i)}function Cl(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Sl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Il=/^'([^]*?)'?$/,$l=/''/g,Dl=/[a-zA-Z]/;function Nl(t,e,n){var u,h,d,m;const i=cn(),r=i.locale??pl,s=i.firstWeekContainsDate??((h=(u=i.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,o=i.weekStartsOn??((m=(d=i.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,c=Z(t);if(!Rc(c))throw new RangeError("Invalid time value");const a={firstWeekContainsDate:s,weekStartsOn:o,locale:r,_originalDate:c};return e.match(Pl).map(function(g){const b=g[0];if(b==="p"||b==="P"){const C=_l[b];return C(g,r.formatLong)}return g}).join("").match(Sl).map(function(g){if(g==="''")return"'";const b=g[0];if(b==="'")return Rl(g);const C=bl[b];if(C)return Ol(g)&&gr(g,e,String(t)),Tl(g)&&gr(g,e,String(t)),C(c,g,r.localize,a);if(b.match(Dl))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return g}).join("")}function Rl(t){const e=t.match(Il);return e?e[1].replace($l,"'"):t}function kl(t,e){const i=Bl(t);let r;if(i.date){const a=Fl(i.date,2);r=ql(a.restDateString,a.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);const s=r.getTime();let o=0,c;if(i.time&&(o=Ul(i.time),isNaN(o)))return new Date(NaN);if(i.timezone){if(c=Vl(i.timezone),isNaN(c))return new Date(NaN)}else{const a=new Date(s+o),l=new Date(0);return l.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),l.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),l}return new Date(s+o+c)}const It={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ll=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Ml=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,jl=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Bl(t){const e={},n=t.split(It.dateTimeDelimiter);let i;if(n.length>2)return e;if(/:/.test(n[0])?i=n[0]:(e.date=n[0],i=n[1],It.timeZoneDelimiter.test(e.date)&&(e.date=t.split(It.timeZoneDelimiter)[0],i=t.substr(e.date.length,t.length))),i){const r=It.timezone.exec(i);r?(e.time=i.replace(r[1],""),e.timezone=r[1]):e.time=i}return e}function Fl(t,e){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),i=t.match(n);if(!i)return{year:NaN,restDateString:""};const r=i[1]?parseInt(i[1]):null,s=i[2]?parseInt(i[2]):null;return{year:s===null?r:s*100,restDateString:t.slice((i[1]||i[2]).length)}}function ql(t,e){if(e===null)return new Date(NaN);const n=t.match(Ll);if(!n)return new Date(NaN);const i=!!n[4],r=Qe(n[1]),s=Qe(n[2])-1,o=Qe(n[3]),c=Qe(n[4]),a=Qe(n[5])-1;if(i)return Gl(e,c,a)?zl(e,c,a):new Date(NaN);{const l=new Date(0);return!Wl(e,s,o)||!Yl(e,r)?new Date(NaN):(l.setUTCFullYear(e,s,Math.max(r,o)),l)}}function Qe(t){return t?parseInt(t):1}function Ul(t){const e=t.match(Ml);if(!e)return NaN;const n=Sn(e[1]),i=Sn(e[2]),r=Sn(e[3]);return Ql(n,i,r)?n*Os+i*Ts+r*1e3:NaN}function Sn(t){return t&&parseFloat(t.replace(",","."))||0}function Vl(t){if(t==="Z")return 0;const e=t.match(jl);if(!e)return 0;const n=e[1]==="+"?-1:1,i=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return Xl(i,r)?n*(i*Os+r*Ts):NaN}function zl(t,e,n){const i=new Date(0);i.setUTCFullYear(t,0,4);const r=i.getUTCDay()||7,s=(e-1)*7+n+1-r;return i.setUTCDate(i.getUTCDate()+s),i}const Hl=[31,null,31,30,31,30,31,31,30,31,30,31];function Is(t){return t%400===0||t%4===0&&t%100!==0}function Wl(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(Hl[e]||(Is(t)?29:28))}function Yl(t,e){return e>=1&&e<=(Is(t)?366:365)}function Gl(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function Ql(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function Xl(t,e){return e>=0&&e<=59}function ln(t){try{let e=kl(t);return Nl(e,"do MMMM, yyyy")}catch{}}var Jl=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,$s=(t,e,n,i)=>{for(var r=i>1?void 0:i?Kl(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Jl(e,n,r),r};let qn=class extends O{static get styles(){return D`
            :host {
                width: 65%;
            }
            .blog-initial-article {
                width: 100%;
                margin: 40px 0px 40px 0px;
                transition: all 0.3s;
            }

            .blog-initial-article header h2 {
                font-size: 33pt;
                margin-bottom: 10px;
                transition: all 0.3s;
                font-display: auto;
            }

            .blog-initial-article header h2 .entry-title-link {
                text-decoration: none;
                color: #000;

                font-display: auto;
            }

            .blog-initial-article header h2 .entry-title-link:hover {
                color: var(--turquoise);
            }

            .blog-initial-article header .meta-data {
                display: flex;
                color: #424242;
                margin-bottom: 25px;
                font-size: 16px;
                font-display: auto;
            }

            .blog-initial-article header .meta-data > div:nth-child(1)::after {
                content: "/";
                margin: 0px 10px 0px 10px;
            }

            .blog-initial-article .entry-content {
                width: 100%;
            }
            .blog-initial-article .entry-content .entry-content-img {
                display: block;
                transition: all 0.3s;
                width: 100%;
                height: auto;
                object-fit:cover;
                font-display: auto;
            }

            .blog-initial-article .entry-content .entry-content-img:hover {
                filter: grayscale(1);
            }
            .blog-initial-article .entry-content p {
                margin-top: 25px;
                margin-bottom: 25px;
                font-size: 17px;
                line-height: 30px;
                letter-spacing: -0.003em;
                width: 100%;
                color: #242424;
            }
            .blog-initial-article .entry-content .article-footer {
                width: 100%;
                height: fit-content;
            }

            .blog-initial-article
                .entry-content
                .article-footer
                .read-more-link {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                border: 2px solid var(--turquoise);
                text-decoration: none;
                width: 150px;
                color: var(--turquoise);
                transition: all 0.3s;
                font-display: auto;
                font-size: 16px;
            }
            .blog-initial-article .entry-content .article-footer a:hover {
                color: #000;
                border-color: #000;
            }

            @media (max-width: 914px) {
                :host {
                    width: 70%;
                }
                .blog-initial-article {
                    margin: 20px 0px 20px 0px;
                }
                .blog-initial-article header h2 {
                    font-size: 30pt;
                }
            }

            @media (max-width: 894px) {
                :host {
                    width: 80%;
                }
            }
            @media (max-width: 788px) {
                :host {
                    width: 88%;
                }
                .blog-initial-article .entry-content .entry-content-img {
                    height: 400px;
                }

                .blog-initial-article .description {
                    overflow-y: hidden;
                }
            }
            @media (max-width: 720px) {
                :host {
                    width: 88%;
                }
                .blog-initial-article .entry-content .entry-content-img {
                    height: 350px;
                }
                .blog-initial-article header h2 {
                    font-size: 26pt;
                }

                .blog-initial-article header .meta-data {
                    font-size: 15px;
                }
                .blog-initial-article .description {
                    overflow-y: hidden;
                    font-size: 15px !important;
                }
                .blog-initial-article
                    .entry-content
                    .article-footer
                    .read-more-link {
                    width: 120px;
                    height: 38px;
                }
            }

            @media (max-width: 616px) {
                :host {
                    width: 88%;
                }
                .blog-initial-article .entry-content .entry-content-img {
                    height: 300px;
                }
                .blog-initial-article header h2 {
                    font-size: 24pt;
                }
                .blog-initial-article
                    .entry-content
                    .article-footer
                    .read-more-link {
                    width: 120px;
                    height: 38px;
                    font-size: 15px;
                }
            }

            @media (max-width: 568px) {
                .blog-initial-article .entry-content .entry-content-img {
                    height: 250px;
                }
                .blog-initial-article
                    .entry-content
                    .article-footer
                    .read-more-link {
                    width: 110px;
                    height: 38px;
                    font-size: 14px;
                }
            }

            @media (max-width: 360px) {
                .blog-initial-article header h2 {
                    font-size: 22pt;
                }
            }
        `}render(){return w`
            <article class="blog-initial-article">
                <header>
                    <h2 class="entry-title">
                        <a
                            aria-label=${this.itemProps.title}
                            class="entry-title-link"
                            href=${`/blog/${this.itemProps.slug}`}
                            >${this.itemProps.title}</a
                        >
                    </h2>
                    <div class="meta-data">
                        <div class="update-time">
                            ${ln(this.itemProps.createdAt)}
                        </div>
                        <div class="read-time">
                            ${this.itemProps.readtime.text}
                        </div>
                    </div>
                </header>
                <div class="entry-content">
                    <a aria-label=${this.itemProps.title} href=${`/blog/${this.itemProps.slug}`}>
                        <img
                            fetchpriority="high"
                            decoding="async"
                            class="entry-content-img"
                            src=${this.itemProps.image.url}
                            alt=${this.itemProps.title}
                        />
                    </a>
                    <p class="description">${this.itemProps.description}</p>
                    <div class="article-footer">
                        <a
                            aria-label=${`Read More about ${this.itemProps.title}`}
                            class="read-more-link"
                            href=${`/blog/${this.itemProps.slug}`}
                            >Read More</a
                        >
                    </div>
                </div>
            </article>
        `}};$s([x({attribute:!1})],qn.prototype,"itemProps",2);qn=$s([I("xf-blog-item-card")],qn);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds="important",Zl=" !"+Ds,V=vt(class extends bt{constructor(t){var e;if(super(t),t.type!==yt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return i==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const s=typeof r=="string"&&r.endsWith(Zl);i.includes("-")||s?n.setProperty(i,s?r.slice(0,-11):r,s?Ds:""):n[i]=r}}return J}});var eu=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,Ns=(t,e,n,i)=>{for(var r=i>1?void 0:i?tu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&eu(e,n,r),r};let Un=class extends O{constructor(){super(...arguments),this.isPlane=!1}static get styles(){return D`
            :host {
                width: 100%;
                height: auto;
            }
            .marginal-container {
                width: 100%;
                height: fit-content;
            }

            .marginal-container > div {
                width: 85%;
                height: inherit;
                margin: auto;
                background-color: #fff;
                 display: grid;
                justify-items: center;
            }

            @media(max-width:460px){
                .marginal-container > div {
                    width:90%
                }
            }
            @media(max-width:430px){
                .marginal-container > div {
                    width:100%
                }
            }
        `}render(){return w`
            <div class="marginal-container" style=${V({"background-color":this.isPlane?"#fffcfc":"#f8f8f8;"})}>
                <div class="content" style=${V({"background-color":this.isPlane?"#fffcfc":"#fff","box-shadow":this.isPlane?"unset":"0 30px 50px 0 #01010126;"})}><slot></slot></div>
            </div>
        `}};Ns([x({type:Boolean})],Un.prototype,"isPlane",2);Un=Ns([I("xf-marginal-container")],Un);var nu=Object.defineProperty,iu=Object.getOwnPropertyDescriptor,ru=(t,e,n,i)=>{for(var r=i>1?void 0:i?iu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&nu(e,n,r),r};let yr=class extends O{static get styles(){return D`
            :host {
                display: block;
            }

            .welcome-item-container {
                width: 100%;
                height: 450px;
                background-color: #ffffff;
                opacity: 1;
                background: repeating-linear-gradient(-45deg, #4bcbb5, #4bcbb5 5px, #ffffff 5px, #ffffff 25px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .welcome-item-container > .statement {
                width: fit-content;
                padding: 30px;
                font-size: 35pt;
                font-weight: 700;
                font-family: "Dancing Script", cursive;
                text-align: center;
                font-display: auto;

                /* border: 5px solid var(--turquoise); */
            }

            .welcome-item-container .welcome-item-btn {
                height: 50px;
                width: 160px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                background-color: var(--turquoise);
                color: #fff;
                margin-top: 15px;
                border: 2px solid #fff;
                transition: all 0.3s;
            }
            .welcome-item-container .cl-span {
                color: var(--turquoise);
            }
            .welcome-item-container .welcome-item-btn:hover {
                color: #000;
                border-color: #000;
                background-color: transparent;
            }

            @media (max-width: 793px) {
                .welcome-item-container > .statement {
                    font-size: 30pt;
                }

                .welcome-item-container .welcome-item-btn {
                    width: 130px !important;
                    height: 40px;
                    margin-top: 10px;
                }
            }

            @media (max-width: 605px) {
                .welcome-item-container {
                    height: 400px;
                }
            }

            @media (max-width: 589px) {
                .welcome-item-container > .statement {
                    font-size: 27pt;
                }
                .welcome-item-container .welcome-item-btn {
                    margin-top: 2px !important;
                }
            }

            @media (max-width: 409px) {
                .welcome-item-container {
                    height: 350px;
                }
            }
        `}render(){return w`
            <div class="welcome-item-container">
                <div class="statement">
                    Faithfull <span class="cl-span">Living</span> in a <span class="cl-span">Modern</span> World
                </div>
                <a href="/aboutus" aria-label="Learn More About Us" class="welcome-item-btn">Learn More</a>
            </div>
        `}};yr=ru([I("xf-common-quote")],yr);var su=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,Rs=(t,e,n,i)=>{for(var r=i>1?void 0:i?ou(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&su(e,n,r),r};let Vn=class extends O{constructor(){super(...arguments),this.patchImageSource=""}static get styles(){return D`
            :host {
                display: block;
                width: inherit;
                height: inherit;
            }
            .container {
                display: block;
                height: inherit;
                width: inherit;
                position: relative;
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-position:center;
            }
            .container > .backdrop-view {
                display: block;
                height: inherit;
                width: inherit;
                background-color:#000000b3;
            }
            .container > .main-content-view {
                position: absolute;
                top: 0px;
                height: inherit;
                width: inherit;
            }
        `}render(){return w`
            <div
                class="container"
                style=${V({"background-image":`url(${this.patchImageSource})`})}
            >
                <div class="backdrop-view"></div>
                <div class="main-content-view">
                    <slot></slot>
                </div>
            </div>
        `}};Rs([x()],Vn.prototype,"patchImageSource",2);Vn=Rs([I("xf-patch-background")],Vn);var au=Object.defineProperty,cu=Object.getOwnPropertyDescriptor,xt=(t,e,n,i)=>{for(var r=i>1?void 0:i?cu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&au(e,n,r),r};let Ne=class extends O{constructor(){super(...arguments),this.slug="",this.postTitle="",this.postReadTime="",this.postUpdateTime=""}static get styles(){return D`
            .post-banner-item-link {
                text-decoration: none;
                color: #fff;
                text-align: center;
            }

            .post-title {
                font-size: 45pt;
                margin-bottom: 8px;
            }

            .details-container {
                width: 100%;
                display: flex;
                justify-content: center;
                font-family: 14pt;
                color: #c7c7c7;
                font-display: auto;
            }

            .details-container > div:nth-child(1)::after {
                content: "/";
                margin: 0px 8px 0px 8px;
            }
            @media(max-width:933px){
                .post-title {
                    font-size:40pt;
                }
            }
            @media(max-width:735px){
                .post-title {
                    font-size:35pt;
                }
            }
            @media(max-width:535px){
                .post-title {
                    font-size:30pt;
                }
            }
            @media(max-width:481px){
                .post-title {
                    font-size:25pt;
                }

                .details-container{
                    font-size:12pt !important;
                }
            }

            @media(max-width:391px){
                .post-title {
                    font-size:18pt;
                }

                .details-container{
                    font-size:10pt !important;
                }
            }
        `}render(){return w`
            <a aria-label=${this.postTitle} href=${`/blog/${this.slug}`} class="post-banner-item-link">
                <div class="post-banner-item">
                    <div class="post-title">${this.postTitle}</div>
                    <div class="details-container">
                        <div class="date-time-update">${ln(this.postUpdateTime)}</div>
                        <div class="read-time">${this.postReadTime}</div>
                    </div>
                </div>
            </a>
        `}};xt([x({attribute:!1})],Ne.prototype,"slug",2);xt([x({attribute:!1})],Ne.prototype,"postTitle",2);xt([x({attribute:!1})],Ne.prototype,"postReadTime",2);xt([x({attribute:!1})],Ne.prototype,"postUpdateTime",2);Ne=xt([I("xf-post-banner-item")],Ne);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=vt(class extends bt{constructor(t){var e;if(super(t),t.type!==yt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const n=t.element.classList;for(const s of this.st)s in e||(n.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(o?(n.add(s),this.st.add(s)):(n.remove(s),this.st.delete(s)))}return J}});var lu=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,ks=(t,e,n,i)=>{for(var r=i>1?void 0:i?uu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&lu(e,n,r),r};let zn=class extends O{constructor(){super(...arguments),this.isSpinning=!1}updated(){this.isSpinning?this.hideOrShowContainer(!0):this.hideOrShowContainer(!1)}hideOrShowContainer(t){t?this.style.display="block":this.style.display="none"}static get styles(){return D`
            :host {
                display: block;
                width: 28px;
                height: 28px;
                margin: 0px 5px 0px 5px;
            }

            .spinner-container {
                width: inherit;
                height: inherit;
                display:flex;
                align-items:center;
                justify-content:center;
                
            }
            .spinner-item {
                border: 3px solid var(--turquoise) ;
                border-top-color: transparent;
                border-right-color: transparent;
                border-radius:50%;
                width:12px;
                height:12px;
            }

            .spinneranime {
                animation: rotate 0.5s linear infinite;
            }
            .spinnercontrol {
                display:flex;
                align-items:center;
                justify-content:center;
            }
            @keyframes rotate {
                100% {
                    transform: rotate(360deg);
                }
            }
        `}render(){return w`
            <div class="spinner-container">
                <div class=${Bt({spinneranime:this.isSpinning,spinnercontrol:!0})}>
                    <div class="spinner-item"></div>
                </div>
            </div>
        `}};ks([x({type:Boolean})],zn.prototype,"isSpinning",2);zn=ks([I("xf-spinner")],zn);var hu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,mi=(t,e,n,i)=>{for(var r=i>1?void 0:i?du(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&hu(e,n,r),r};let Jt=class extends O{constructor(){super(...arguments),this.willLoad=!1,this.isVisible=!0}static get styles(){return D`
            .spinner-container {
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                width: 100%;
            }
            .spinner-container .load-more-control {
                height: 50px;
                width: 160px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                background-color: #000;
                color: #fff;
                margin-top: 15px;
                border: 2px solid #000;
                transition: all 0.3s;
                cursor: pointer;
                font-size: 13pt;
                font-weight: 300;
            }

            .spinner-container .load-more-control:hover {
                color: #000;
                border-color: #000;
                background-color: transparent;
            }
        `}updated(){this.isVisible||(this.style.display="none")}dispatchLoadSequenceEvent(){this.dispatchEvent(new Event("xf-load-items"))}render(){return w`
            <div
                class="spinner-container"
                style=${V({display:this.isVisible?"flex":"none"})}
            >
                <xf-make-button
                    style=${V({display:this.willLoad?"none":"flex"})}
                    @xf-key-tap=${this.dispatchLoadSequenceEvent}
                    class="load-more-control"
                    aria-label="Load more articles"
                    title="Load more articles"
                    >Load More</xf-make-button
                >
                <xf-spinner
                    style=${V({display:this.willLoad?"block":"none"})}
                    .isSpinning=${this.willLoad}
                ></xf-spinner>
            </div>
        `}};mi([x({type:Boolean,attribute:!1})],Jt.prototype,"willLoad",2);mi([x({type:Boolean,attribute:!1})],Jt.prototype,"isVisible",2);Jt=mi([I("xf-will-load")],Jt);const fu=w`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-chevron-right"
    viewBox="0 0 16 16"
>
    <path
        fill-rule="evenodd"
        stroke="currentColor"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
</svg>`,pu=w`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-chevron-left"
    viewBox="0 0 16 16"
>
    <path
        fill-rule="evenodd"
        stroke="currentColor"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
</svg>`,Ls=[{transform:"translateX(0)"},{transform:"translateX(-100vw)"}],Ms=[{transform:"translateX(0)"},{transform:"translateX(100vw)"}],gi={duration:450,easing:"ease-in-out",iterations:1},js={...gi,direction:"reverse"},mu=[Ls,gi],gu=[Ms,gi],yu=[Ls,js],vu=[Ms,js];var bu=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,qe=(t,e,n,i)=>{for(var r=i>1?void 0:i?xu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&bu(e,n,r),r};let ae=class extends O{constructor(){super(...arguments),this.slideIndex=0,this.containerHeight=0,this.shouldInitialize=!1,this.didInitialize=!1,this.autoPlayIntervalId=void 0}get wrappedIndex(){return br(this.slideIndex,this.slideElements.length)}render(){const t={height:`${this.containerHeight}px`};return w` <xf-make-button
                aria-label="Slide Left"
                style=${V({display:this.shouldInitialize?"flex":"none"})}
                class="carousel-btn cr-1"
                @xf-key-tap=${this.createNavigatePreviousSlideKeyEvent}
            >
                ${pu}
            </xf-make-button>

            <div part="container" id="container" style="${V(t)}">
                <slot></slot>
            </div>

            <xf-make-button
                aria-label="Slide Right"
                style=${V({display:this.shouldInitialize?"flex":"none"})}
                class="carousel-btn cr-2"
                @xf-key-tap=${this.createNavigateNextSlideKeyEvent}
            >
                ${fu}
            </xf-make-button>`}____intialize____(t){t&&(this.containerHeight=_u(this.slideElements),this.initializeSlides(),this.initializeAutoPlayIntervalSlide(),this.didInitialize=!0)}initializeAutoPlayIntervalSlide(){this.autoPlayIntervalId=setInterval(()=>{this.navigateToNextSlide()},3e3)}clearInterval(){clearInterval(this.autoPlayIntervalId)}updated(t){if(this.didInitialize||this.shouldInitialize&&this.____intialize____(!0),this.didInitialize&&t.has("slideIndex")){const e=t.get("slideIndex");if(e===void 0)return;this.slideIndex>e?this.navigateWithAnimation(1,mu,vu):this.navigateWithAnimation(-1,gu,yu)}}navigateToNextSlide(){this.slideIndex+=1}navigateToPrevSlide(){this.slideIndex-=1}createNavigatePreviousSlideKeyEvent(){this.clearInterval(),this.navigateToPrevSlide(),this.initializeAutoPlayIntervalSlide()}createNavigateNextSlideKeyEvent(){this.clearInterval(),this.navigateToNextSlide(),this.initializeAutoPlayIntervalSlide()}async navigateWithAnimation(t,e,n){this.initializeSlides();const i=br(this.slideIndex-t,this.slideElements.length),r=this.slideElements[i];Pn(r);const s=r.animate(e[0],e[1]),o=this.slideElements[this.wrappedIndex];Pn(o);const c=o.animate(n[0],n[1]);try{await Promise.all([s.finished,c.finished]),vr(r)}catch{}}initializeSlides(){for(let t=0;t<this.slideElements.length;t++){const e=this.slideElements[t];e.getAnimations().forEach(n=>n.cancel()),t===this.wrappedIndex?Pn(e):vr(e)}}};ae.styles=D`
        ::slotted(.slide-hidden) {
            display: none;
        }

        /** So the elements all overlap */
        ::slotted(*) {
            position: absolute;
            padding: 1em;
        }

        :host {
            display: flex;
            flex-direction: row;
            align-items: center;
            min-width: 200px;
        }

        #container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            margin: 0 12px;
            height: fit-content;
            /* padding: 1em; */
            overflow: hidden;
            position: relative;
        }
        .cr-1 {
            margin-left: 8px;
        }
        .cr-2 {
            margin-right: 8px;
        }

        .carousel-btn {
            cursor: pointer;
            height: 40px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(72, 72, 72, 0.24);
            border-radius: 5px;
            color: #fff;
        }
        .carousel-btn:hover {
            background-color: rgba(72, 72, 72, 0.77);
        }
        .carousel-btn:active {
            background-color: rgba(134, 134, 134, 0.77);
        }
    `;qe([x({type:Number})],ae.prototype,"slideIndex",2);qe([H()],ae.prototype,"containerHeight",2);qe([Io()],ae.prototype,"slideElements",2);qe([x({type:Boolean})],ae.prototype,"shouldInitialize",2);qe([x({type:Boolean})],ae.prototype,"didInitialize",2);ae=qe([I("xf-carousel")],ae);function _u(t){return Math.max(0,...t.map(e=>e.getBoundingClientRect().height))}function vr(t){t.classList.add("slide-hidden")}function Pn(t){t.classList.remove("slide-hidden")}function br(t,e){return(t%e+e)%e}var wu=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,ne=(t,e,n,i)=>{for(var r=i>1?void 0:i?Eu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&wu(e,n,r),r};let K=class extends O{constructor(){super(...arguments),this.blogCardArticles=[],this.bannerBlogCards=[],this.consumerBlogCardArray=[],this.isCopyingEnabled=!1,this.startIndex=0,this.isCarouselSliderActive=!1,this.willShowLoadProgress=!1}connectedCallback(){super.connectedCallback(),this.initializeAllBlogsData(),Es(this)}initializeAllBlogsData(){this.requestsContext.__bannerBlogCardsPromise.__cowait().then(t=>{this.bannerBlogCards=t,this.isCarouselSliderActive=!0}),this.requestsContext.__articleCardsPromise.__cowait().then(t=>{let e=t;this.blogCardArticles=t,this.createInitialDataLoadForElements(e)})}createIntervalLoaderSequence(){return this.willShowLoadProgress=!0,new Promise((t,e)=>{setTimeout(()=>{this.willShowLoadProgress=!1,t()},2500)})}requestMoreBlogCardsPreload(){this.createIntervalLoaderSequence().then(()=>{this.isMoreBlogCardDataAvailable()?(this.consumerBlogCardArray.push(...this.blogCardArticles.slice(this.startIndex,this.startIndex+5)),this.startIndex+=5):this.isCopyingEnabled=!1})}createInitialDataLoadForElements(t){t.length<=10?this.consumerBlogCardArray.push(...t):(this.isCopyingEnabled=!0,this.consumerBlogCardArray.push(...t.slice(this.startIndex,this.startIndex+10)),this.startIndex+=10)}isMoreBlogCardDataAvailable(){return this.startIndex<this.blogCardArticles.length}static get styles(){return D`
            :host {
                width: 100%;
                opacity: 0;
                --banner-container-height: 550px;
            }

            .container {
                width: 100%;
            }
            .container .wrapper {
                width: 100%;
            }
            .banner-container {
                width: 100%;
                height: var(--banner-container-height);
            }

            .articles-container {
                width: 100%;
            }

            .articles-container .container-title {
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .articles-container .container-title .main-title {
                color: var(--turquoise);
                text-transform: sentencecase;
                font-size: 18pt;
                font-weight: bold;
                color:#2f605d;
                height: fit-content;
            }

            .spinner-container {
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .articles-container .articles-section {
                display: grid;
                justify-items: center;
            }

            .main-section .view-1 {
                margin-top: 100px;
            }

            .post-banner-item-container {
                height: 500px;
            }
            .spinner-item-container {
                height:500px;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .post-banner-item-wrapper {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            @media (max-width: 914px) {
                .articles-container .container-title {
                    height: 70px !important;
                }
            }

            @media (max-width: 1047px) {
                .main-section .view-1 {
                    margin-top: 50px;
                }
            }
            @media (max-width: 1009px) {
                .main-section .view-1 {
                    margin-top: 30px;
                }
            }
            @media (max-width: 568px) {
                .main-section .view-1 {
                    margin-top: 0px;
                }
            }
            @media (max-width: 833px) {
                .post-banner-item-container {
                    height: 420px;
                }
                .spinner-item-container{
                    height: 420px;
                }
                :host {
                    --banner-container-height: 450px;
                }
            }

            @media (max-width: 433px) {
                .post-banner-item-container {
                    height: 350px;
                }
                .spinner-item-container {
                    height: 350px;
                }
                :host {
                    --banner-container-height: 400px;
                }
            }
        `}render(){return w`
            <div class="container">
                <div class="wrapper">
                    <div class="banner-container">
                        <xf-patch-background
                            .patchImageSource=${"https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        >
                            ${Qt(this.bannerBlogCards.length>0,()=>w`
                                    <xf-carousel
                                        .shouldInitialize=${this.isCarouselSliderActive}
                                    >
                                        ${De(this.bannerBlogCards,t=>w`
                                                    <div
                                                        class="post-banner-item-container"
                                                    >
                                                        <div
                                                            class="post-banner-item-wrapper"
                                                        >
                                                            <xf-post-banner-item
                                                                .slug=${t.slug}
                                                                .postTitle=${t.title}
                                                                .postReadTime=${t.readtime.text}
                                                                .postUpdateTime=${t.createdAt}
                                                            ></xf-post-banner-item>
                                                        </div>
                                                    </div>
                                                `)}
                                    </xf-carousel>
                                `,()=>w`
                                    <div class="spinner-item-container">
                                        <xf-spinner isSpinning></xf-spinner>
                                    </div>
                                `)}
                        </xf-patch-background>
                    </div>
                    <div class="main-section">
                        <xf-marginal-container>
                            <div class="view-1">
                                <xf-common-quote></xf-common-quote>
                            </div>
                            <div class="view-2">
                                <div class="articles-container">
                                    <div class="container-title">
                                        <div class="main-title">
                                            ~Latest Articles~
                                        </div>
                                    </div>
                                    <div class="articles-section">
                                        ${Qt(this.consumerBlogCardArray.length>0,()=>w`
                                                    ${De(this.consumerBlogCardArray,t=>w`
                                                                <xf-blog-item-card
                                                                    .itemProps=${t}
                                                                ></xf-blog-item-card>
                                                            `)}
                                                `,()=>w`
                                                    <div
                                                        class="spinner-container"
                                                    >
                                                        <xf-spinner
                                                            isSpinning
                                                        ></xf-spinner>
                                                    </div>
                                                `)}

                                        <xf-will-load
                                            .isVisible=${this.isCopyingEnabled}
                                            .willLoad=${this.willShowLoadProgress}
                                            @xf-load-items=${this.requestMoreBlogCardsPreload}
                                        ></xf-will-load>
                                    </div>
                                </div>
                            </div>
                        </xf-marginal-container>
                    </div>
                </div>
            </div>
        `}};ne([he({context:hi}),x({attribute:!1})],K.prototype,"resourcesContext",2);ne([he({context:Fe}),x({attribute:!1})],K.prototype,"requestsContext",2);ne([x({type:Array})],K.prototype,"blogCardArticles",2);ne([x({type:Array})],K.prototype,"bannerBlogCards",2);ne([x({type:Array})],K.prototype,"consumerBlogCardArray",2);ne([x({type:Boolean})],K.prototype,"isCopyingEnabled",2);ne([H()],K.prototype,"isCarouselSliderActive",2);ne([H()],K.prototype,"willShowLoadProgress",2);K=ne([I("xf-route-default")],K);var Au=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,Ae=(t,e,n,i)=>{for(var r=i>1?void 0:i?Tu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Au(e,n,r),r};let ce=class extends O{constructor(){super(...arguments),this.blogCardArticles=[],this.consumerBlogCardArray=[],this.isCopyingEnabled=!1,this.startIndex=0,this.willShowLoadProgress=!1}connectedCallback(){super.connectedCallback(),this.initializeAllBlogsData()}initializeAllBlogsData(){this.requestsContext.__articleCardsPromise.__cowait().then(t=>{let e=t;this.blogCardArticles=t,this.createInitialDataLoadForElements(e)})}createIntervalLoaderSequence(){return this.willShowLoadProgress=!0,new Promise((t,e)=>{setTimeout(()=>{this.willShowLoadProgress=!1,t()},2500)})}requestMoreBlogCardsPreload(){this.createIntervalLoaderSequence().then(()=>{this.isMoreBlogCardDataAvailable()?(this.consumerBlogCardArray.push(...this.blogCardArticles.slice(this.startIndex,this.startIndex+5)),this.startIndex+=5):this.isCopyingEnabled=!1})}createInitialDataLoadForElements(t){t.length<=10?this.consumerBlogCardArray.push(...t):(this.isCopyingEnabled=!0,this.consumerBlogCardArray.push(...t.slice(this.startIndex,this.startIndex+10)),this.startIndex+=10)}isMoreBlogCardDataAvailable(){return this.startIndex<this.blogCardArticles.length}static get styles(){return D`
            :host {
                display: block;
                width: 100%;
            }
            .view-1 {
                width: inherit;
            }
            .articles-section {
                display: grid;
                justify-items: center;
            }
        `}render(){return w`
            <div class="container">
                <div class="view-1">
                    <xf-route-banner
                        .imgSrc=${"https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        .routeTitle=${"Articles"}
                        .routeStatement=${"Bringing forth the truth and helping you improve your day to day life"}
                    ></xf-route-banner>
                </div>
                <div class="view-2">
                    <xf-marginal-container>
                        ${Qt(this.consumerBlogCardArray.length>0,()=>w`
                                    ${De(this.consumerBlogCardArray,t=>w` <xf-blog-item-card .itemProps=${t}></xf-blog-item-card> `)}
                                `,()=>w` <xf-spinner isSpinning></xf-spinner> `)}
                        <xf-will-load
                            .isVisible=${this.isCopyingEnabled}
                            .willLoad=${this.willShowLoadProgress}
                            @xf-load-items=${this.requestMoreBlogCardsPreload}
                        ></xf-will-load>
                    </xf-marginal-container>
                </div>
            </div>
        `}};Ae([he({context:hi}),x({attribute:!1})],ce.prototype,"resourcesContext",2);Ae([he({context:Fe}),x({attribute:!1})],ce.prototype,"requestsContext",2);Ae([x({type:Array})],ce.prototype,"blogCardArticles",2);Ae([x({type:Array})],ce.prototype,"consumerBlogCardArray",2);Ae([x({type:Boolean})],ce.prototype,"isCopyingEnabled",2);Ae([H()],ce.prototype,"willShowLoadProgress",2);ce=Ae([I("xf-route-articles")],ce);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Hn(t,e){if(t!==void 0){let n=0;for(const i of t)yield e(i,n++)}}const Ou="aboutus",Cu=[{id:"01",title:"About Patkimera",content:"Welcome to Patkimera, your digital haven for real-life stories, genuine inspiration, and the transformative power of faith. We believe in the extraordinary impact that sharing personal experiences can have on shaping lives. This is more than just a blog; it's a sanctuary where we navigate the twists and turns of life, armed with the wisdom of the Word and the strength of prayer."},{id:"02",title:"Our Mission: Transforming Lives",content:"At Patkimera, our mission is simple yet profound - to change lives by sharing authentic life situations and demonstrating how an unwavering connection to the Word of God and a prayerful life can be transformative. We understand the power of relatable stories, and we strive to create a community where every reader finds solace, inspiration, and a sense of purpose."},{id:"03",title:"What Sets Us Apart?",content:[{id:"cc-1",content:"Real Stories, Real Solutions: Every piece on Patkimera is a testament to real-life experiences. We share the highs, the lows, and the miraculous moments that underscore the omnipotence of faith."},{id:"cc-2",content:"Youth-Centric Perspective: Geared towards the vibrant energy of the youth, our content resonates with the challenges and triumphs faced by young individuals today."},{id:"cc-3",content:"Bridging Life and Faith: We bridge the gap between the secular and the spiritual, illustrating how incorporating faith into our daily lives can bring about profound change."}]},{id:"04",title:"Join us on the Journey",content:"Whether you're seeking guidance, inspiration, or simply a sense of community, Patkimera is your virtual space for growth. Come, embark on this journey with us as we navigate the complexities of life, armed with the Word, bound by prayer, and united in faith."},{id:"05",title:"Meet the Aurthor",content:"Meet Patricia Kimera, a freelance writer who is passionate about sharing her journey, living faithfully and authentically for God. Right from motivating college to transitioning into adulthood, learning the growing pains of it, and figuring out why our bank accounts magically turn into black holes every month. hmmmm... life can be interesting. But I'm here for it all. Come walk with me."}],Su={id:Ou,content:Cu};var Pu=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,un=(t,e,n,i)=>{for(var r=i>1?void 0:i?Iu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Pu(e,n,r),r};let Re=class extends O{constructor(){super(...arguments),this.imgSrc="",this.routeTitle="",this.routeStatement=""}render(){return w`
            <div class="route-banner-container">
                <div
                    class="image-background"
                    style=${V({"background-image":`url(${this.imgSrc})`})}
                >
                    <div class="backdrop-element"></div>
                    <div class="route-details-container">
                        <div class="route-title">${this.routeTitle}</div>
                        <div class="route-statement">${this.routeStatement}</div>
                    </div>
                </div>
            </div>
        `}};Re.styles=D`
        .route-banner-container {
            width: 100%;
            height: 450px;
            position: relative;
        }

        .route-banner-container .image-background {
            width: inherit;
            height: inherit;
            background-size: cover;
            background-position:center;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

        .route-banner-container .backdrop-element {
            background-color: rgba(0, 0, 0, 0.5);
            width: inherit;
            height: inherit;
        }

        .route-banner-container .route-details-container {
            width: inherit;
            height: inherit;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            z-index: 34;
            position: absolute;
            top: 0px;
        }

        .route-banner-container .route-details-container > div:nth-child(1) {
            font-size: 55pt;
            margin-bottom: 8px;
        }

        .route-banner-container .route-details-container > div:nth-child(2) {
            color: #bebebe;
            text-align:center;
            margin:0px 5px 0px 5px;
        }

        @media(max-width:495px){
            .route-banner-container .route-details-container > div:nth-child(1) {
                font-size:40pt;
            }
        }

        @media(max-width:465px){
            .route-banner-container {
                height:400px;
            }
        }
        @media(max-width:401px){
            .route-banner-container {
                height:350px;
            }
        }
    `;un([x({attribute:!1})],Re.prototype,"imgSrc",2);un([x({attribute:!1})],Re.prototype,"routeTitle",2);un([x({attribute:!1})],Re.prototype,"routeStatement",2);Re=un([I("xf-route-banner")],Re);var $u=Object.defineProperty,Du=Object.getOwnPropertyDescriptor,Nu=(t,e,n,i)=>{for(var r=i>1?void 0:i?Du(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&$u(e,n,r),r};let Wn=class extends O{render(){return w` <p class="content-data"><slot></slot></p> `}};Wn.styles=D`
        .content-data {
            font-size: 17px;
            width: 90%;
            margin-left: 30px;
            color: #2e2e2e;
        }
    `;Wn=Nu([I("xf-content-data")],Wn);var Ru=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Lu=(t,e,n,i)=>{for(var r=i>1?void 0:i?ku(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Ru(e,n,r),r};let Yn=class extends O{render(){return w`
            <div class="content-title-container">
                <h2 class="wrapper"><slot></slot></h2>
            </div>
        `}};Yn.styles=D`
    :host {
        font-size:24pt;
    }
        .content-title-container {
            width: 100%;
            font-size:inherit;
        }

        .content-title-container h2 {
            width: fit-content;
            margin: 30px 0px 23px 30px;
            font-size: inherit;
            font-weight: bolder;
        }
    `;Yn=Lu([I("xf-content-title")],Yn);var Mu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,Bs=(t,e,n,i)=>{for(var r=i>1?void 0:i?ju(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Mu(e,n,r),r};let Gn=class extends O{formatItems(t){return typeof t=="string"?w` <xf-content-data>${t}</xf-content-data> `:w`
                ${Hn(t,e=>w`
                        <xf-content-data>${e.content}</xf-content-data>
                    `)}
            `}static get styles(){return D`
            .content {
                padding-top: 50px;
                padding-bottom: 50px;
                width: 80%;
            }

            a.sml-email {
                color: var(--turquoise);
            }

            @media(max-width:843px){
                .content {
                    padding-top:30px;
                    width:85%;
                }
            }
            @media(max-width:761px){
                .content {
                    padding-top:20px;
                    width:95%;
                }
            }

            @media(max-width:667px){
                .content {
                    padding-top:15px;
                    width:100%;
                }
            }
        `}render(){return w`
            <div class="container">
                <div class="view-1">
                    <xf-route-banner
                        .imgSrc=${"https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        .routeTitle=${"About us"}
                        .routeStatement=${"Why are we Here?"}
                    ></xf-route-banner>
                </div>
                <div class="view-2">
                    <xf-marginal-container>
                        <div class="content">
                            ${Hn(Su.content,t=>w`
                                    <div class="item-container">
                                        <xf-content-title
                                            >${t.title}</xf-content-title
                                        >
                                        ${this.formatItems(t.content)}
                                    </div>
                                `)}
                        </div>
                    </xf-marginal-container>
                </div>
            </div>
        `}};Bs([he({context:hi}),x({attribute:!1})],Gn.prototype,"resourcesContext",2);Gn=Bs([I("xf-route-aboutus")],Gn);var Bu=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,yi=(t,e,n,i)=>{for(var r=i>1?void 0:i?Fu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Bu(e,n,r),r};let ht=class extends O{constructor(){super(...arguments),this.privacy_policies=[]}connectedCallback(){super.connectedCallback(),this.initializePrivacyPolicyDocumentRequest()}initializePrivacyPolicyDocumentRequest(){this.requestsContext.__privacyPoliciesPromise.__cowait().then(t=>{this.privacy_policies=t})}render(){return w`
            <div class="container">
                <div class="title-section">
                    <h2>Privacy Policy</h2>
                    <div>This page contains Patkimera privacy policies.</div>
                </div>
                <div class="content-section">
                    <div class="wrapper">
                        ${De(this.privacy_policies,t=>w`
                                    <div class="item-container">
                                        <xf-content-title
                                            >${t.policyNumber}.${t.title}</xf-content-title
                                        >
                                        <xf-content-data
                                            >${t.content.text}</xf-content-data
                                        >
                                    </div>
                                `)}
                    </div>
                </div>
            </div>
        `}};ht.styles=D`
        :host {
            width: 100%;
        }
        .container {
            width: inherit;
            background-color: #fff;
        }
        .container > .title-section {
            height: 120px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .title-section h2 {
            margin-bottom: 8px;
            font-size: 26pt;
            color: #000;
        }

        .title-section > div {
            font-size: 15pt;
            text-align: center;
            margin: 0px 7px 0px 7px;
            color: #000;
        }
        .content-section {
            margin-top: 50px;
        }

        .content-section .wrapper {
            width: 85%;
            margin: auto;
        }

        @media (max-width: 790px) {
            .title-section h2 {
                font-size: 24pt;
            }
            .title-section > div {
                font-size: 14pt;
            }
            .content-section {
                margin-top: 40px;
            }
        }

        @media (max-width: 728px) {
            .container > .title-section {
                height: 100px;
            }
            .content-section .wrapper {
                width: 90%;
            }
            xf-content-title {
                font-size: 16pt;
            }
        }

        @media (max-width: 648px) {
            .container > .title-section {
                height: 80px;
            }
            .content-section .wrapper {
                width: 100%;
            }
        }
    `;yi([he({context:Fe}),x({attribute:!1})],ht.prototype,"requestsContext",2);yi([x({type:Array})],ht.prototype,"privacy_policies",2);ht=yi([I("xf-route-privacypolicy")],ht);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qn=class extends bt{constructor(e){if(super(e),this.it=k,e.type!==yt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===k||e==null)return this._t=void 0,this.it=e;if(e===J)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Qn.directiveName="unsafeHTML",Qn.resultType=1;const qu=vt(Qn);var Uu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,hn=(t,e,n,i)=>{for(var r=i>1?void 0:i?Vu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Uu(e,n,r),r};let ke=class extends O{constructor(){super(...arguments),this.imgSource="",this.titleContent="",this.linkSource=""}render(){return w`
            <div class="container">
                <img src=${this.imgSource} class="img-container"/>
                <a href=${this.linkSource}>${this.titleContent}</a>
            </div>
        `}};ke.styles=D`   
    
        .container {
            width:300px;
            height:fit-content;
            margin:30px 20px 30px 0px;
        }
        .container .img-container{
            display:block;
            height:inherit;
            width:inherit;
            border:2px solid var(--turquoise);
            object-fit:cover;
        }
        .container a {
            display:block;
            text-decoration:none;
            margin-top:10px;
            color:#000;
            font-weight:bold;
            font-size:20px;
        }
        .container a:hover {
            color:var(--turquoise);
        }
    `;hn([x({attribute:!1})],ke.prototype,"imgSource",2);hn([x({attribute:!1})],ke.prototype,"titleContent",2);hn([x({attribute:!1})],ke.prototype,"linkSource",2);ke=hn([I("xf-blog-like-item")],ke);var zu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,vi=(t,e,n,i)=>{for(var r=i>1?void 0:i?Hu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&zu(e,n,r),r};let Kt=class extends O{constructor(){super(...arguments),this.contentValue="Hello Its Kalema Here",this.type="success"}updated(){this.contentValue.length>0&&this.showNotification()}showNotification(){this.style.display="block",this.style.opacity="1",this.style.transform="translateY(0px)",setTimeout(()=>{this.hideNotification()},7500)}static get styles(){return D`
            :host {
                display:block;
                position: fixed;
                bottom: 20px;
                right: 20px;
                transition:all .3s;
                transform : translateY(100px);
                opacity: 0;
            }
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid;
                border-radius: 8px;
                transition:all .3s;

            }
            .container .content {
                padding: 25px;
                color: #2d2d2d;
            }
        `}hideNotification(){this.style.opacity="0",this.style.transform="translateY(100px)",this.style.display="none"}render(){return w`
            <div
                class="container"
                style=${V({"border-color":this.type=="success"?"var(--turquoise)":"rgb(223, 45, 62)"})}
            >
                <div
                    class="content"
                    style=${V({"background-color":this.type=="success"?"#8adfd152":"rgb(223 138 138 / 32%)"})}
                >
                    ${this.contentValue}
                </div>
            </div>
        `}};vi([x({attribute:!1})],Kt.prototype,"contentValue",2);vi([x({attribute:!1})],Kt.prototype,"type",2);Kt=vi([I("xf-comment-notification")],Kt);var Wu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,Ue=(t,e,n,i)=>{for(var r=i>1?void 0:i?Yu(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Wu(e,n,r),r};let we=class extends O{constructor(){super(...arguments),this.commentsLabel="",this.commentsType="success",this.blogContentData={comments:[],content:{html:"<p>Loading...</>"},createdAt:new Date().toUTCString(),id:"...",image:{url:"blog-image-section"},readtime:{text:"Loading..."},slug:"...patkimera",title:"...",description:"..."},this.blogAsideViewItems=[]}firstUpdated(){this.intializeBlogView()}getLocationParams(){return Pe.getRouterParamsAndOptions().params.slug}connectedCallback(){super.connectedCallback(),Es(this)}intializeBlogView(){this.requestsContext.getContentDataForBlog(this.getLocationParams()).then(t=>{this.blogContentData=t,document.body.scrollTo({top:0,left:0,behavior:"smooth"}),this.blogAsideViewItems=this.requestsContext.getContentDataAsideBlogs(this.getLocationParams())})}static get styles(){return D`
            :host {
                display: block;
                height: fit-content;

                width: 100%;
                transition: all 0.3s;
                opacity: 0;
            }
            .split-view {
                height: fit-content;
                width: 100%;
                display: grid;
                grid-gap: 20px;
                grid-template-columns: 2.5fr 1fr;
                margin-bottom: 100px;
                transition: all 0.3s;
            }

            .split-view > .blog-view-container {
                width: inherit;
                height: inherit;
                transition: all 0.3s;
            }
            .split-view .blog-view-container header {
                height: 90px;
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                margin-top: 20px;
                transition: all 0.3s;
            }

            .split-view .blog-view-container header h2 {
                font-size: 30pt;
                font-family: "Lato", sans-serif;
                height: fit-content;
            }
            .blog-view-container > .meta-data {
                display: flex;
                color: #424242;
            }
            .meta-data > div:nth-child(1)::after {
                content: "/";
                margin: 0px 10px 0px 10px;
            }

            .blog-view-container img.blog-item-image {
                display: block;
                transition: all 0.3s;
                width: 100%;
                height: auto;

                margin-top: 30px;
            }
            .blog-view-container .main-content-area .blog-content-advert-section {
                margin-top: 28px;
            }

            .blog-content-advert-section xf-ads-container {
                margin-top: 5px;
                width: 100%;
                height: 150px;
                border: 1px solid red;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .marginal-seat {
                width: 85%;
                height: inherit;
                margin: auto;
                background-color: #fff;
                display: grid;
                justify-items: center;
            }
            .blog-content-advert-section .rendered-html-content {
                width: 100%;
                margin-top: 44px;
                font-size: 17px;
                color: #242424;
            }
            /**
                Rendererd HTMLConent
             */
            .blog-content-advert-section .rendered-html-content p {
                margin-top: 2.14em;
                margin-bottom: -0.46em;
                line-height: 32px;
                letter-spacing: -0.003em;
                color: rgb(36, 36, 36);
                font-weight: 400;
                font-size: 18px;
                font-style: normal;
            }
            .rendered-html-content strong,
            h1 {
                letter-spacing: -0.016em;
                line-height: 30px;
                margin-top: 1.95em;
                font-size: 24px;
                margin-bottom: -0.28em;
                font-weight: 600;
                font-style: normal;
                word-break: break-word;
                overflow-wrap: break-word;
            }
            .view-2 .wrapper {
                width: inherit;
                padding-left: 20px;
                height: 100% !important;
            }

            .view-2 .like-items-title {
                display: flex;
                align-items: center;
                justify-content: center;
                /* width:150px; */
                height: 30px;
                margin-top: 20px;
                margin-bottom: 20px;
                margin-right: 20px;
                color: #fff;
                background-color: #000;
                text-transform: uppercase;
                font-size: 15px;
                padding: 8px;
            }

            .view-2 .comments-section {
                width: 100%;
                height: fit-content;
            }

            /**
                media Queries
             */

            @media (max-width: 1295px) {
                .split-view .blog-view-container header h2 {
                    font-size: 25pt;
                    height: fit-content;
                }
            }

            @media (max-width: 1087px) {
                .split-view {
                    display: block;
                }
                .view-2 .wrapper {
                    padding-left: 0px;
                }
                .view-2 .wrapper .items-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
                }
            }

            @media (max-width: 1087px) {
                .split-view {
                    display: block;
                }
                .view-2 .wrapper {
                    padding-left: 0px;
                }
                .view-2 .wrapper .items-container {
                    display: grid;
                    grid-template-columns: auto auto auto;
                }
            }
            @media (max-width: 713px) {
                .split-view .blog-view-container header h2 {
                    font-size: 22pt;
                    height: fit-content;
                }
            }

            @media (max-width: 623px) {
                .split-view .blog-view-container header h2 {
                    font-size: 20pt;
                    height: fit-content;
                }
            }

            @media (max-width: 569px) {
                .split-view .blog-view-container header h2 {
                    font-size: 20pt;
                    height: fit-content;
                }
                .blog-view-container img.blog-item-image {
                    margin-top: 20px;
                }
                .blog-view-container > .meta-data {
                    font-size: 16px;
                }
            }

            @media (max-width: 569px) {
                .split-view .blog-view-container header {
                    margin-top: 25px;
                    margin-bottom: 20px;
                }
            }

            @media (max-width: 477px) {
                .split-view .blog-view-container header h2 {
                    font-size: 19pt;
                }

                .blog-view-container > .meta-data {
                    font-size: 15px;
                }
            }

            @media (max-width: 385px) {
                .blog-view-container img.blog-item-image {
                    width: 310px;
                }
            }
        `}render(){return w`
            <div class="marginal-seat">
                <div class="split-view">
                    <div class="view-1 view-area">
                        <div class="blog-view-container">
                            <header>
                                <h2 class="blog-title">${this.blogContentData.title}</h2>
                            </header>
                            <div class="meta-data">
                                <div class="update-time">${ln(this.blogContentData.createdAt)}</div>
                                <div class="read-time" title="Read time">${this.blogContentData.readtime.text}</div>
                            </div>
                            <main class="main-content-area">
                                ${Qt(this.blogContentData.image.url!="blog-image-section",()=>w`
                                            <img
                                                alt=${this.blogContentData.title}
                                                fetchpriority="high"
                                                decoding="async"
                                                src=${this.blogContentData.image.url}
                                                class="blog-item-image"
                                            />
                                        `,()=>w` <xf-spinner isSpinning></xf-spinner> `)}

                                <div class="blog-content-advert-section">
                                    <div class="rendered-html-content">
                                        ${qu(this.blogContentData.content.html)}
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div class="view-2 view-area">
                        <div class="wrapper">
                            <div class="like-items-title">You Will Also LIke</div>
                            <div class="items-container">
                                ${De(this.blogAsideViewItems,t=>w`
                                        <xf-blog-like-item
                                            .imgSource=${t.image.url}
                                            .titleContent=${t.title}
                                            .linkSource=${`blog/${t.slug}`}
                                        ></xf-blog-like-item>
                                    `)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}};Ue([H()],we.prototype,"commentsLabel",2);Ue([H()],we.prototype,"commentsType",2);Ue([he({context:Fe}),x({attribute:!1})],we.prototype,"requestsContext",2);Ue([x({attribute:!1})],we.prototype,"blogContentData",2);Ue([x({attribute:!1})],we.prototype,"blogAsideViewItems",2);we=Ue([I("xf-blog-view")],we);class Gu{constructor(e){this._options=e,this._regex=new RegExp(this._options.query,"i")}async makeSearchAsync(){return new Promise((e,n)=>{if(this._options){let i=this._options.cachedItems.filter(r=>this._regex.test(r.title)||this._regex.test(r.description)||this._regex.test(r.content.html));i.length>0?e(i):e([])}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(t,e)=>{var i;const n=t._$AN;if(n===void 0)return!1;for(const r of n)(i=r._$AO)==null||i.call(r,e,!1),nt(r,e);return!0},Zt=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},Fs=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Ju(e)}};function Qu(t){this._$AN!==void 0?(Zt(this),this._$AM=t,Fs(this)):this._$AM=t}function Xu(t,e=!1,n=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let s=n;s<i.length;s++)nt(i[s],!1),Zt(i[s]);else i!=null&&(nt(i,!1),Zt(i));else nt(this,t)}const Ju=t=>{t.type==yt.CHILD&&(t._$AP??(t._$AP=Xu),t._$AQ??(t._$AQ=Qu))};class Ku extends bt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,i){super._$AT(e,n,i),Fs(this),this.isConnected=e._$AU}_$AO(e,n=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),n&&(nt(this,e),Zt(this))}setValue(e){if(Tc(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zu=()=>new eh;class eh{}const In=new WeakMap,th=vt(class extends Ku{render(t){return k}update(t,[e]){var i;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),k}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let n=In.get(e);n===void 0&&(n=new WeakMap,In.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=In.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var nh=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,_t=(t,e,n,i)=>{for(var r=i>1?void 0:i?ih(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&nh(e,n,r),r};let Ee=class extends O{constructor(){super(...arguments),this.itemTitle="",this.itemCreatedAt="",this.itemReadtime="",this.itemSlug=""}render(){return w`
            <div class="link-container">
                <div class="container">
                    <a
                        href=${`/blog/${this.itemSlug}`}
                        arial-label=${this.itemTitle}
                        class="title-section"
                        >${this.itemTitle}</a
                    >
                    <div class="meta-data">
                        <div class="update-time" aria-label="Created Time">
                            ${ln(this.itemCreatedAt)}
                        </div>
                        <div class="read-time">${this.itemReadtime}</div>
                    </div>
                </div>
            </div>
        `}};Ee.styles=D`
        :host {
            display: block;
            width: 100%;
            margin: 25px 0px 25px 0px;
        }

        .link-container {
            display: block;
            width: 100%;
            height: fit-content;
            border: 1px solid rgb(119, 110, 110);
            margin-right: 10px;
        }
        .link-container .container {
            padding: 20px;
        }

        .container .title-section {
            color: rgb(51, 52, 53);
            font-size: 24px;
            margin-bottom: 8px;
        }
        .container .title-section:hover {
            color: var(--turquoise);
        }

        .container .meta-data {
            display: flex;
            color: #00000079;
            font-size: 16px;
            margin-top: 5px;
        }
        .meta-data > div:nth-child(1)::after {
            content: "/";
            margin: 0px 10px 0px 10px;
        }

        /* @media(max-width:646px){
            .link-container .container {}
        } */
    `;_t([x({attribute:!1})],Ee.prototype,"itemTitle",2);_t([x({attribute:!1})],Ee.prototype,"itemCreatedAt",2);_t([x({attribute:!1})],Ee.prototype,"itemReadtime",2);_t([x({attribute:!1})],Ee.prototype,"itemSlug",2);Ee=_t([I("xf-search-item")],Ee);var rh=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,Ve=(t,e,n,i)=>{for(var r=i>1?void 0:i?sh(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&rh(e,n,r),r};let le=class extends O{constructor(){super(...arguments),this.searchResults=[],this.isCancelBtnVisible=!1,this.__inputRef=Zu(),this.noResultsFound=!1,this.didMakeInitialRequest=!1,this._registeredSearchQuery=""}__inputElement(){return this.__inputRef.value}async getSearchResults(){const t=this.getInputValue();if(t.length>0){let e=await this.requestsContext.__searchItemsPromise.__cowait(),n=new Gu({cachedItems:e,query:t});this._registeredSearchQuery=t;let i=await n.makeSearchAsync();i.length>0?this.searchResults=i.map(r=>({title:r.title,createdAt:r.createdAt,readtime:r.readtime,slug:r.slug,id:r.id})):this.noResultsFound=!0}}getInputValue(){return this.__inputElement().value}onDidEnterValue(t){t.target.value.length>0?this.isCancelBtnVisible=!0:(this.isCancelBtnVisible=!1,this.searchResults=[])}onDidRequestKeyDown(t){t.key!==""&&t.key!=="Enter"||t.key=="Enter"&&this.getSearchResults()}clearSearchQuery(){this.__inputElement().value="",this._registeredSearchQuery="",this.isCancelBtnVisible=!1,this.noResultsFound=!1,this.searchResults=[]}createSlateTextUI(){let t="";return this.didMakeInitialRequest?this.noResultsFound?t="No Results Found":t=`${this.searchResults.length} result${this.searchResults.length>1?"s":""}
                for "${this._registeredSearchQuery.length>0?this._registeredSearchQuery:"Unknown Entry"}"`:t="Find Your Article!",t}render(){return w`
            <xf-marginal-container>
                <div class="container">
                    <div class="search-aux-section">
                        <div class="title-section">Search Articles</div>
                        <div class="search-container">
                            <div id="searchItem">
                                <label id="prompt" for="search-input-area" aria-hidden="true" hidden
                                    >Search Articles</label
                                >
                                <input
                                    ${th(this.__inputRef)}
                                    placeholder="Search Articles"
                                    @input=${this.onDidEnterValue}
                                    @keydown=${this.onDidRequestKeyDown}
                                    type="search"
                                    autocomplete="off"
                                    autocapitalize="none"
                                    id="search-input-area"
                                    autofocus
                                    spellcheck="false"
                                />
                                <xf-make-button
                                    style=${V({display:this.isCancelBtnVisible?"flex":"none"})}
                                    class="cancel-control"
                                    @xf-key-tap=${this.clearSearchQuery}
                                    >&Cross;</xf-make-button
                                >
                            </div>
                            <xf-make-button class="search-btn-magnifyer" @xf-key-tap=${this.getSearchResults}>
                                <iconify-icon icon="material-symbols-light:search"></iconify-icon>
                            </xf-make-button>
                        </div>
                        <div class="results-section">${this.createSlateTextUI()}</div>
                    </div>

                    <main class="results-container">
                        <div class="wrapper">
                            ${De(this.searchResults,t=>w`
                                    <xf-search-item
                                        .itemTitle=${t.title}
                                        .itemCreatedAt=${t.createdAt}
                                        .itemReadtime=${t.readtime.text}
                                        .itemSlug=${t.slug}
                                    ></xf-search-item>
                                `)}
                        </div>
                    </main>
                </div>
            </xf-marginal-container>
        `}};le.styles=D`
        :host {
            display: block;
            width: 100%;
            --search-input-bg: #fffefe;
        }

        .container {
            width: 100%;
            height: fit-content;
        }

        .container .search-aux-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .search-aux-section .title-section {
            font-size: 24px;
            font-weight: 450;
            color: var(--turquoise);
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .search-aux-section .results-section {
            margin-top: 35px;
            color: rgb(113, 110, 110);
            font-size: 19px;
        }

        .container .search-container {
            display: flex;
            align-items: center;
        }

        .search-container #searchItem {
            width: 500px;
            height: 40px;
            display: flex;
            border: 1px solid #c4c4c4;
            border-radius:5px;
            background-color: var(--search-input-bg);
        }

        .search-container #search-input-area {
            height: inherit;
            width: 450px;
            font-family: "Lato", sans-serif;
            border-radius:5px;

            outline: none;
            border: unset;
            font-size: 15px;
            background-color: var(--search-input-bg);
        }

        .search-container #search-input-area::-webkit-search-cancel-button {
            display:none;
        }

        .search-container #search-input-area::placeholder {
            position: relative;
            margin-left:10px;
        }

        .search-container .cancel-control {
            /* display: flex; */
            height: inherit;
            width: 50px;
            align-items: center;
            justify-content: center;
            color: var(--turquoise);
            display: none;
            font-size: 18px;
            cursor: pointer;
        }

        .search-btn-magnifyer {
            margin-left: 8px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            font-size: 15px;
            color: #fff;
            transition: all 0.3s;
            cursor: pointer;
            height: 40px;
            background-color: var(--turquoise);
            border: 2px solid var(--turquoise);
            text-decoration: none;
        }
        .search-btn-magnifyer:hover {
            border-color: #000;
            background-color: unset;
            color: #000;
        }
        .search-btn-magnifyer iconify-icon {
            font-size: 17px;
        }

        .container .results-container {
            height: 500px;
            width: 100%;
        }

        .container .results-container .wrapper {
            height: inherit;
            width: 75%;
            overflow-y: auto;
            overflow-x: hidden;
            margin: auto;
            padding-right: 10px;
        }

        @media (max-width: 878px) {
            .search-container #searchItem {
                width: 350px;
            }
        }
        @media (max-width: 510px) {
            .search-container #searchItem {
                width: 300px;
            }
        }
    `;Ve([he({context:Fe}),x({attribute:!1})],le.prototype,"requestsContext",2);Ve([x({attribute:!1})],le.prototype,"searchResults",2);Ve([x({attribute:!1})],le.prototype,"isCancelBtnVisible",2);Ve([H()],le.prototype,"noResultsFound",2);Ve([H()],le.prototype,"didMakeInitialRequest",2);le=Ve([I("xf-route-search")],le);var oh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,ch=(t,e,n,i)=>{for(var r=i>1?void 0:i?ah(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&oh(e,n,r),r};let xr=class extends O{static get styles(){return D`
            :host {
                display:block;
                width:100%;
            }

            .container {
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                margin:50px 0px 50px 0px;
            }
            .container .ls-number {
                font-size:120pt;
                  font-family: "Dancing Script", cursive;;
                color:var(--turquoise);
            }
            .container p {
                text-align:center;
                color:var(--turquoise);
                font-size:25px;
            }
            .container a {
                color:var(--turquoise);
            }
            .container span {
                color:#202020;
            }

        `}render(){return w`
            <xf-marginal-container isPlane>
                <div class="container">
                    <div class="ls-number">
                        4<span>0</span>4
                    </div>
                    <p>Hmmm.. Seems we can't find your page</p>
                    <a href="/">Let's go Home</a>
                </div>
            </xf-marginal-container>
        `}};xr=ch([I("xf-route-notfound")],xr);const lh=[{path:"/",component:"xf-route-default",name:"default-route"},{path:"/blog",redirect:"/articles",name:"unknown-article-blog"},{path:"/blog/:slug",component:"xf-blog-view"},{path:"/articles",component:"xf-route-articles",name:"articles-route"},{path:"/aboutus",component:"xf-route-aboutus",name:"aboutus-route"},{path:"/search",component:"xf-route-search",name:"search-route"},{path:"/privacy-policy",component:"xf-route-privacypolicy",name:"privacy-route"},{path:"(.*)",component:"xf-route-notfound",name:"not-found-route"}];var uh=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,dh=(t,e,n,i)=>{for(var r=i>1?void 0:i?hh(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&uh(e,n,r),r};let _r=class extends O{makeClickAndkeyboardListener(){this.addEventListener("click",()=>{this.dispatchClickorkeyboarEvent()}),this.addEventListener("keydown",t=>{t.key!==""&&t.key!=="Enter"||t.key=="Enter"&&this.dispatchClickorkeyboarEvent()})}dispatchClickorkeyboarEvent(){this.dispatchEvent(new Event("xf-key-tap",{bubbles:!0}))}loadAccessibility(){this.role="button",this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.loadAccessibility(),this.makeClickAndkeyboardListener()}render(){return w` <slot></slot> `}};_r=dh([I("xf-make-button")],_r);var fh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,mh=(t,e,n,i)=>{for(var r=i>1?void 0:i?ph(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&fh(e,n,r),r};let wr=class extends O{static get styles(){return D`
            :host {
                display: block;
                font-size: 17pt;
            }
            a {
                height: 100%;
                width: fit-content;
                font-size: inherit;
                display: flex;
                align-items: center;
                color: #fff;
                text-decoration: none;
                font-family: "Dancing Script", cursive;
                font-optical-sizing: auto;
                font-weight: 500;
                font-size:25pt;
                font-style: normal;
            }
        `}render(){return w` <a href="/">Patkimera</a> `}};wr=mh([I("xf-product-link")],wr);var gh=Object.defineProperty,yh=Object.getOwnPropertyDescriptor,bi=(t,e,n,i)=>{for(var r=i>1?void 0:i?yh(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&gh(e,n,r),r};let en=class extends O{constructor(){super(...arguments),this.currentRoute="/",this.isOpen=!1}updated(){let t=this.renderRoot.querySelector(".side-nav-container");this.isOpen?(this.style.width="250px",t.style.opacity="1",this.ariaHidden="true"):(t.style.opacity="0",this.style.width="0px",this.ariaHidden="false")}hideSideMenu(){this.style.width="0px",this.ariaHidden="false";let t=this.renderRoot.querySelector(".side-nav-container");t.style.opacity="0"}onDidKeyDownNavLink(t){t.key!==""&&t.key!=="Enter"||t.key=="Enter"&&this.hideSideMenu()}onDidClickNavLink(){console.log("willClearNav"),this.hideSideMenu()}static get styles(){return D`
            :host {
                width: 0;
                height: 100%;
                position: fixed;
                z-index: 1000;
                top: 0;
                left: 0;
            }
            .side-nav-container {
                width: inherit;
                height: inherit;
                background-color: #0c1413;
                overflow-x: hidden;
                overflow-y: hidden;
                opacity: 0;
                transition: 0.3s;
            }

            .side-nav-container .wrapper {
                position: relative;
                height: inherit;
                top: 15px;
                overflow-x: hidden;
                overflow-y: hidden;
                z-index: 1;
            }

            .side-nav-container .close-icon-container {
                cursor: pointer;
                border-radius: 8px;
                width: 40px;
                height: 40px;
                display: flex;
                font-size: 20px;
                align-items: center;
                justify-content: center;
                color: #fff;
                position: absolute;
                right: 0px;
                z-index: 3;
            }

            .side-nav-container .close-icon-container:hover {
                color: var(--turquoise);
            }
            .side-nav-container .product-link-container {
                height: 80px !important;
                width: inherit;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--turquoise);
            }

            .side-nav-container .navigation-links-container .wrapper a {
                text-decoration: none;
                display: block;
                color: #fff;
                margin: 25px 0px 25px 30px;
                transition: all 0.3s;
            }

            .side-nav-container a {
                color: #fff;
                font-size: 18px;
                width: fit-content;
            }

            .side-nav-container a:hover {
                color: var(--turquoise) !important;
            }

            .side-nav-container a.active-link {
                color: rgb(57, 57, 56);
            }
        `}dispatchDidRequestCloseAction(){this.dispatchEvent(new Event("xf-side-menu-event"))}render(){const t=[{label:"Home",link:"/"},{label:"Articles",link:"/articles"},{label:"About us",link:"/aboutus"},{label:"Search Article",link:"/search"},{label:"Privacy Policy",link:"/privacy-policy"}];return w`
            <div class="side-nav-container">
                <xf-make-button
                    class="close-icon-container"
                    @xf-key-tap=${this.dispatchDidRequestCloseAction}
                >
                    <div class="icon-close">&Cross;</div>
                </xf-make-button>
                <div class="wrapper">
                    <div class="navigation-links-container">
                        <nav class="wrapper">
                            ${Hn(t,e=>w`
                                    <a
                                        @click=${this.onDidClickNavLink}
                                        @keydown=${this.onDidKeyDownNavLink}
                                        href=${e.link}
                                        >${e.label}</a
                                    >
                                `)}
                        </nav>
                    </div>
                </div>
            </div>
        `}};bi([x({attribute:!1})],en.prototype,"currentRoute",2);bi([x({attribute:!1})],en.prototype,"isOpen",2);en=bi([I("xf-side-menu")],en);var vh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,dn=(t,e,n,i)=>{for(var r=i>1?void 0:i?bh(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&vh(e,n,r),r};let dt=class extends O{constructor(){super(...arguments),this.currentTheme="light",this.currentRoute="/",this.isSideMenuOpen=!1}connectedCallback(){super.connectedCallback()}displaySideMenu(){this.isSideMenuOpen=!0}hideSideMenu(){this.isSideMenuOpen=!1}static get styles(){return D`
            :host {
                width: 100%;
                height: fit-content;
            }

            .container {
                width: inherit;
                height: inherit;
                background-color: var(--turquoise);
            }

            .container .wrapper {
                width: inherit;
                height: 95px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .product-link-view .wrapper {
                margin-left: 20px;
            }

            .navigation-bar-view .wrapper {
                display: flex;
            }

            .navigation-bar-view .wrapper a {
                text-decoration: none;
                margin: 0px 20px 0px 20px;
                transition: all 0.3s;
                font-size: 18px;
            }
            .navigation-bar-view .wrapper a {
                color: #fff;
            }

            .navigation-bar-view .wrapper a.active-link {
                border-bottom:1px solid #fff;
            }

            .navigation-bar-view .wrapper a:hover {
                color: #000;
            }

            .icon-button-view {
                margin-right: 10px;
            }
            .icon-container {
                height: 35px;
                width: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 22px;
                margin: 0px 5px 0px 5px;
                border-radius: 5px;
                cursor: pointer;
                border: 2px solid transparent;
                transition: all 0.3s;
            }

            .navigation-bars {
                display: none;
            }

            .icon-container:hover {
                border-color: #fff;
            }
            .icon-container:active {
                border-color: #9b9b9b;
            }

            /**
                Media Queries
             */

            @media (max-width: 961px) {
                .container .wrapper {
                    height: 60px;
                }
            }

            @media (max-width: 747px) {
                .container .wrapper {
                    height: 55px;
                }
                .navigation-bar-view .wrapper a {
                    font-size: 15px;
                }
            }

            @media (max-width: 601px) {
                .container .wrapper {
                    height: 54px;
                }
                .navigation-bar-view {
                    display: none;
                }
                .navigation-bars {
                    display: flex;
                }
            }

            @media(max-width:482px){
                .container .wrapper {
                    height: 53px;
                }
                xf-product-link {
                    font-size:20px;
                }
            }
        `}render(){return w`
            <div class="container">
                <div class="wrapper">
                    <div class="view product-link-view">
                        <div class="wrapper">
                            <xf-product-link></xf-product-link>
                        </div>
                    </div>
                    <div class="view navigation-bar-view">
                        <nav class="wrapper">
                            <a
                                aria-label="Home"
                                class=${Bt({"active-link":this.currentRoute=="/"})}
                                href="/"
                                >Home</a
                            >
                            <a
                                aria-label="Articles"
                                class=${Bt({"active-link":this.currentRoute=="/articles"})}
                                href="/articles"
                                >Articles</a
                            >
                            <a
                                aria-label="About us"
                                class=${Bt({"active-link":this.currentRoute=="/aboutus"})}
                                href="/aboutus"
                                >About us</a
                            >
                        </nav>
                    </div>
                    <div class="view icon-button-view">
                        <div class="wrapper">
                            <a
                                href="/search"
                                class="icon-container search-control"
                                aria-label="Search Articles"
                                title="Search Articles"
                            >
                                <iconify-icon
                                    icon="material-symbols-light:search"
                                ></iconify-icon>
                            </a>

                            <xf-make-button
                                class="icon-container navigation-bars"
                                aria-label="Show Side Navigation"
                                title="Show Side Navigation"
                                @xf-key-tap=${this.displaySideMenu}
                            >
                                <iconify-icon icon="la:bars"></iconify-icon>
                            </xf-make-button>
                        </div>
                    </div>
                </div>
                <div class="presentation-container" role="presentation">
                    <xf-side-menu
                        .currentRoute=${this.currentRoute}
                        .isOpen=${this.isSideMenuOpen}
                        @xf-side-menu-event=${this.hideSideMenu}
                    >
                    </xf-side-menu>
                </div>
            </div>
        `}};dn([x({attribute:!1})],dt.prototype,"currentTheme",2);dn([x({attribute:!1})],dt.prototype,"currentRoute",2);dn([H()],dt.prototype,"isSideMenuOpen",2);dt=dn([I("xf-header")],dt);var xh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,wh=(t,e,n,i)=>{for(var r=i>1?void 0:i?_h(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&xh(e,n,r),r};let Xn=class extends O{render(){return w`
            <div class="container">
                <div class="wrapper">
                    <div class="part-1">
                        <div class="company-slogan">
                            <xf-product-link></xf-product-link>
                            <div class="sl">
                                Faithfull Living in a Modern World
                            </div>
                        </div>
                        <div class="links-section">
                            <a href="/aboutus">ABOUT US</a>
                            <a href="/articles">ARTICLES</a>
                            <a href="/privacy-policy">PRIVACY POLICY</a>
                        </div>
                    </div>
                    <div class="part-2">
                        <div class="section-1">
                            <nav class="social-links-container">
                                <a
                                    target="_blank"
                                    aria-label="Check out SalySouls on facebook"
                                    href="https://www.facebook.com/saltysouls"
                                    ><iconify-icon
                                        icon="ic:sharp-facebook"
                                        class="icl-icon"
                                    ></iconify-icon
                                ></a>
                                <a
                                    target="_blank"
                                    aria-label="Check out SalySouls on instagram"
                                    href="https://www.instagram.com/salty_souls"
                                    ><iconify-icon
                                        class="icl-icon"
                                        icon="mdi:instagram"
                                    ></iconify-icon
                                ></a>
                            </nav>
                            <div class="copyright-statment">
                                &copy; Copyright Patkimera. All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}};Xn.styles=D`
        :host {
            width: 100%;
        }
        .container {
            width: inherit;
            height: inherit;
            background-color: #000;
            border: 1px solid transparent;
        }

        .container > .wrapper {
            width: 85%;
            height: inherit;
            margin: auto;
        }
        .wrapper > .part-1 {
            width: 100%;
            height: 300px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-bottom: 1px solid #fff;
        }
        .wrapper > .part-2 {
            height: 200px;
            width: 100%;
            color: #fff;
        }
        .part-1 .company-slogan {
            margin: 40px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .company-slogan xf-product-link {
            font-size: 24pt;
        }
        .company-slogan .sl {
            margin-top: 10px;
            color: #fff;
        }

        .part-1 .links-section {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 40px;
            border-left: 1px solid #ebebeb;
            padding-left: 50px;
        }

        .part-1 .links-section a {
            display: block;
            text-decoration: none;
            color: #fff;
            margin: 8px 0px 8px 0px;
        }

        .part-2 a {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-left: 5px;
            margin-right: 5px;
            color: #fff;
            font-size: 24px;
        }
        .part-2 a:hover {
            border-color: var(--turquoise);
            color: var(--turquoise);
        }

        .part-2 .section-1 {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: inherit;
        }
        .part-2 .section-1 .social-links-container {
            margin-bottom: 8px;
            display: flex;
        }
        .part-2 .copyright-statment {
            text-align: center;
            margin-top: 8px;
        }
        @media (max-width) {
            .company-slogan .sl {
                text-align: center;
            }
        }

        @media (max-width: 575px) {
            .wrapper > .part-1 {
                display: block;
                border-bottom: none;
            }
            .part-1 .company-slogan {
                padding: 20px 0px 30px 0px;
                align-items: center;
            }
            .part-1 .links-section {
                border-left: none;

                padding-left: 0px;
                display: flex;
                align-items: center;
                padding-top: 0px;
                padding-bottom: 20px;
            }
        }
    `;Xn=wh([I("xf-footer")],Xn);var Eh=Object.defineProperty,Ah=Object.getOwnPropertyDescriptor,xi=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ah(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Eh(e,n,r),r};let tn=class extends O{constructor(){super(...arguments),this.latestBlogTitle="",this.latestBlogSlug=""}static get styles(){return D`
            :host {
                display: block;
                width: 100%;
                height: fit-content;
            }
            .container-xr {
                height: inherit;
                width: inherit;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #000;
                color: #fff;
                position: relative;
                font-size: 16px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
            .container-xr .content {
                margin-left: 8px;
                text-align: center;
            }
            .container-xr a {
                color: #fff;
                margin-right: 8px;
            }
            .container-xr .banner-remove-btn {
                color: #fff;
                font-size: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: fit-content;
                width: 30px;
                border: 1px solid #fff;
                margin-right: 5px;
                cursor: pointer;
            }
            .container-xr .banner-remove-btn:hover {
                color: var(--turquoise);
            }

            @media (max-width: 767px) {
                .container-xr {
                    font-size: 15px;
                }
            }
            @media (max-width: 665px) {
                .container-xr .banner-remove-btn {
                    right: 5px;
                }
            }
        `}clearBanner(){this.style.display="none"}render(){return w`
            <div class="container-xr">
                <div class="place-holder"></div>
                <div class="content">
                    <span>Check it Out:</span
                    ><a aria-label=${this.latestBlogTitle} href=${`/blog/${this.latestBlogSlug}`}
                        >${this.latestBlogTitle}</a
                    >
                </div>
                <xf-make-button
                    @xf-key-tap=${this.clearBanner}
                    title="Remove banner"
                    class="banner-remove-btn"
                    aria-label="Remove announcement"
                    >&Cross;</xf-make-button
                >
            </div>
        `}};xi([x({attribute:!1})],tn.prototype,"latestBlogTitle",2);xi([x({attribute:!1})],tn.prototype,"latestBlogSlug",2);tn=xi([I("xf-announce-item")],tn);/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.8
*/const qs=Object.freeze({left:0,top:0,width:16,height:16}),nn=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),wt=Object.freeze({...qs,...nn}),Jn=Object.freeze({...wt,body:"",hidden:!1}),Th=Object.freeze({width:null,height:null}),Us=Object.freeze({...Th,...nn});function Oh(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:i(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?i(s):0)}}return e}const Ch=/[\s,]+/;function Sh(t,e){e.split(Ch).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const Vs={...Us,preserveAspectRatio:""};function Er(t){const e={...Vs},n=(i,r)=>t.getAttribute(i)||r;return e.width=n("width",null),e.height=n("height",null),e.rotate=Oh(n("rotate","")),Sh(e,n("flip","")),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}function Ph(t,e){for(const n in Vs)if(t[n]!==e[n])return!0;return!1}const it=/^[a-z0-9]+(-[a-z0-9]+)*$/,Et=(t,e,n,i="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const c=r.pop(),a=r.pop(),l={provider:r.length>0?r[0]:i,prefix:a,name:c};return e&&!Ft(l)?null:l}const s=r[0],o=s.split("-");if(o.length>1){const c={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!Ft(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:s};return e&&!Ft(c,n)?null:c}return null},Ft=(t,e)=>t?!!((t.provider===""||t.provider.match(it))&&(e&&t.prefix===""||t.prefix.match(it))&&t.name.match(it)):!1;function Ih(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function Ar(t,e){const n=Ih(t,e);for(const i in Jn)i in nn?i in t&&!(i in n)&&(n[i]=nn[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function $h(t,e){const n=t.icons,i=t.aliases||Object.create(null),r=Object.create(null);function s(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const c=i[o]&&i[o].parent,a=c&&s(c);a&&(r[o]=[c].concat(a))}return r[o]}return Object.keys(n).concat(Object.keys(i)).forEach(s),r}function Dh(t,e,n){const i=t.icons,r=t.aliases||Object.create(null);let s={};function o(c){s=Ar(i[c]||r[c],s)}return o(e),n.forEach(o),Ar(t,s)}function zs(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const i=$h(t);for(const r in i){const s=i[r];s&&(e(r,Dh(t,r,s)),n.push(r))}return n}const Nh={provider:"",aliases:{},not_found:{},...qs};function $n(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Hs(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!$n(t,Nh))return null;const n=e.icons;for(const r in n){const s=n[r];if(!r.match(it)||typeof s.body!="string"||!$n(s,Jn))return null}const i=e.aliases||Object.create(null);for(const r in i){const s=i[r],o=s.parent;if(!r.match(it)||typeof o!="string"||!n[o]&&!i[o]||!$n(s,Jn))return null}return e}const rn=Object.create(null);function Rh(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function ue(t,e){const n=rn[t]||(rn[t]=Object.create(null));return n[e]||(n[e]=Rh(t,e))}function _i(t,e){return Hs(e)?zs(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function kh(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}function Lh(t,e){let n=[];return(typeof t=="string"?[t]:Object.keys(rn)).forEach(r=>{(typeof r=="string"&&typeof e=="string"?[e]:Object.keys(rn[r]||{})).forEach(o=>{const c=ue(r,o);n=n.concat(Object.keys(c.icons).map(a=>(r!==""?"@"+r+":":"")+o+":"+a))})}),n}let ft=!1;function Ws(t){return typeof t=="boolean"&&(ft=t),ft}function pt(t){const e=typeof t=="string"?Et(t,!0,ft):t;if(e){const n=ue(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Ys(t,e){const n=Et(t,!0,ft);if(!n)return!1;const i=ue(n.provider,n.prefix);return kh(i,n.name,e)}function Tr(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),ft&&!e&&!t.prefix){let r=!1;return Hs(t)&&(t.prefix="",zs(t,(s,o)=>{o&&Ys(s,o)&&(r=!0)})),r}const n=t.prefix;if(!Ft({provider:e,prefix:n,name:"a"}))return!1;const i=ue(e,n);return!!_i(i,t)}function Mh(t){return!!pt(t)}function jh(t){const e=pt(t);return e?{...wt,...e}:null}function Bh(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return t.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const s=r.provider,o=r.prefix,c=r.name,a=n[s]||(n[s]=Object.create(null)),l=a[o]||(a[o]=ue(s,o));let u;c in l.icons?u=e.loaded:o===""||l.missing.has(c)?u=e.missing:u=e.pending;const h={provider:s,prefix:o,name:c};u.push(h)}),e}function Gs(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(r=>r.id!==e))})}function Fh(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,r=t.prefix;e.forEach(s=>{const o=s.icons,c=o.pending.length;o.pending=o.pending.filter(a=>{if(a.prefix!==r)return!0;const l=a.name;if(t.icons[l])o.loaded.push({provider:i,prefix:r,name:l});else if(t.missing.has(l))o.missing.push({provider:i,prefix:r,name:l});else return n=!0,!0;return!1}),o.pending.length!==c&&(n||Gs([t],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let qh=0;function Uh(t,e,n){const i=qh++,r=Gs.bind(null,n,i);if(!e.pending.length)return r;const s={id:i,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),r}const Kn=Object.create(null);function Or(t,e){Kn[t]=e}function Zn(t){return Kn[t]||Kn[""]}function Vh(t,e=!0,n=!1){const i=[];return t.forEach(r=>{const s=typeof r=="string"?Et(r,e,n):r;s&&i.push(s)}),i}var zh={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Hh(t,e,n,i){const r=t.resources.length,s=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let T=t.resources.slice(0);for(o=[];T.length>1;){const L=Math.floor(Math.random()*T.length);o.push(T[L]),T=T.slice(0,L).concat(T.slice(L+1))}o=o.concat(T)}else o=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let a="pending",l=0,u,h=null,d=[],m=[];typeof i=="function"&&m.push(i);function g(){h&&(clearTimeout(h),h=null)}function b(){a==="pending"&&(a="aborted"),g(),d.forEach(T=>{T.status==="pending"&&(T.status="aborted")}),d=[]}function C(T,L){L&&(m=[]),typeof T=="function"&&m.push(T)}function N(){return{startTime:c,payload:e,status:a,queriesSent:l,queriesPending:d.length,subscribe:C,abort:b}}function R(){a="failed",m.forEach(T=>{T(void 0,u)})}function P(){d.forEach(T=>{T.status==="pending"&&(T.status="aborted")}),d=[]}function U(T,L,F){const Te=L!=="success";switch(d=d.filter(ee=>ee!==T),a){case"pending":break;case"failed":if(Te||!t.dataAfterTimeout)return;break;default:return}if(L==="abort"){u=F,R();return}if(Te){u=F,d.length||(o.length?z():R());return}if(g(),P(),!t.random){const ee=t.resources.indexOf(T.resource);ee!==-1&&ee!==t.index&&(t.index=ee)}a="completed",m.forEach(ee=>{ee(F)})}function z(){if(a!=="pending")return;g();const T=o.shift();if(T===void 0){if(d.length){h=setTimeout(()=>{g(),a==="pending"&&(P(),R())},t.timeout);return}R();return}const L={status:"pending",resource:T,callback:(F,Te)=>{U(L,F,Te)}};d.push(L),l++,h=setTimeout(z,t.rotate),n(T,e,L.callback)}return setTimeout(z),N}function Qs(t){const e={...zh,...t};let n=[];function i(){n=n.filter(c=>c().status==="pending")}function r(c,a,l){const u=Hh(e,c,a,(h,d)=>{i(),l&&l(h,d)});return n.push(u),u}function s(c){return n.find(a=>c(a))||null}return{query:r,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:i}}function wi(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const fn=Object.create(null),Xe=["https://api.simplesvg.com","https://api.unisvg.com"],qt=[];for(;Xe.length>0;)Xe.length===1||Math.random()>.5?qt.push(Xe.shift()):qt.push(Xe.pop());fn[""]=wi({resources:["https://api.iconify.design"].concat(qt)});function Cr(t,e){const n=wi(e);return n===null?!1:(fn[t]=n,!0)}function pn(t){return fn[t]}function Wh(){return Object.keys(fn)}function Sr(){}const Dn=Object.create(null);function Yh(t){if(!Dn[t]){const e=pn(t);if(!e)return;const n=Qs(e),i={config:e,redundancy:n};Dn[t]=i}return Dn[t]}function Xs(t,e,n){let i,r;if(typeof t=="string"){const s=Zn(t);if(!s)return n(void 0,424),Sr;r=s.send;const o=Yh(t);o&&(i=o.redundancy)}else{const s=wi(t);if(s){i=Qs(s);const o=t.resources?t.resources[0]:"",c=Zn(o);c&&(r=c.send)}}return!i||!r?(n(void 0,424),Sr):i.query(e,r,n)().abort}const Pr="iconify2",mt="iconify",Js=mt+"-count",Ir=mt+"-version",Ks=36e5,Gh=168;function ei(t,e){try{return t.getItem(e)}catch{}}function Ei(t,e,n){try{return t.setItem(e,n),!0}catch{}}function $r(t,e){try{t.removeItem(e)}catch{}}function ti(t,e){return Ei(t,Js,e.toString())}function ni(t){return parseInt(ei(t,Js))||0}const ge={local:!0,session:!0},Zs={local:new Set,session:new Set};let Ai=!1;function Qh(t){Ai=t}let $t=typeof window>"u"?{}:window;function eo(t){const e=t+"Storage";try{if($t&&$t[e]&&typeof $t[e].length=="number")return $t[e]}catch{}ge[t]=!1}function to(t,e){const n=eo(t);if(!n)return;const i=ei(n,Ir);if(i!==Pr){if(i){const c=ni(n);for(let a=0;a<c;a++)$r(n,mt+a.toString())}Ei(n,Ir,Pr),ti(n,0);return}const r=Math.floor(Date.now()/Ks)-Gh,s=c=>{const a=mt+c.toString(),l=ei(n,a);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}$r(n,a)}};let o=ni(n);for(let c=o-1;c>=0;c--)s(c)||(c===o-1?(o--,ti(n,o)):Zs[t].add(c))}function no(){if(!Ai){Qh(!0);for(const t in ge)to(t,e=>{const n=e.data,i=e.provider,r=n.prefix,s=ue(i,r);if(!_i(s,n).length)return!1;const o=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function Xh(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const i in ge)to(i,r=>{const s=r.data;return r.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Jh(t,e){Ai||no();function n(i){let r;if(!ge[i]||!(r=eo(i)))return;const s=Zs[i];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=ni(r),!ti(r,o+1))return;const c={cached:Math.floor(Date.now()/Ks),provider:t.provider,data:e};return Ei(r,mt+o.toString(),JSON.stringify(c))}e.lastModified&&!Xh(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Dr(){}function Kh(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Fh(t)}))}function Zh(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,r=t.iconsToLoad;delete t.iconsToLoad;let s;if(!r||!(s=Zn(n)))return;s.prepare(n,i,r).forEach(c=>{Xs(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{t.missing.add(l)});else try{const l=_i(t,a);if(!l.length)return;const u=t.pendingIcons;u&&l.forEach(h=>{u.delete(h)}),Jh(t,a)}catch(l){console.error(l)}Kh(t)})})}))}const Ti=(t,e)=>{const n=Vh(t,!0,Ws()),i=Bh(n);if(!i.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(i.loaded,i.missing,i.pending,Dr)}),()=>{a=!1}}const r=Object.create(null),s=[];let o,c;return i.pending.forEach(a=>{const{provider:l,prefix:u}=a;if(u===c&&l===o)return;o=l,c=u,s.push(ue(l,u));const h=r[l]||(r[l]=Object.create(null));h[u]||(h[u]=[])}),i.pending.forEach(a=>{const{provider:l,prefix:u,name:h}=a,d=ue(l,u),m=d.pendingIcons||(d.pendingIcons=new Set);m.has(h)||(m.add(h),r[l][u].push(h))}),s.forEach(a=>{const{provider:l,prefix:u}=a;r[l][u].length&&Zh(a,r[l][u])}),e?Uh(e,i,s):Dr},ed=t=>new Promise((e,n)=>{const i=typeof t=="string"?Et(t,!0):t;if(!i){n(t);return}Ti([i||t],r=>{if(r.length&&i){const s=pt(i);if(s){e({...wt,...s});return}}n(t)})});function td(t){try{const e=typeof t=="string"?JSON.parse(t):t;if(typeof e.body=="string")return{...e}}catch{}}function nd(t,e){const n=typeof t=="string"?Et(t,!0,!0):null;if(!n){const s=td(t);return{value:t,data:s}}const i=pt(n);if(i!==void 0||!n.prefix)return{value:t,name:n,data:i};const r=Ti([n],()=>e(t,n,pt(n)));return{value:t,name:n,loading:r}}function Nn(t){return t.hasAttribute("inline")}let io=!1;try{io=navigator.vendor.indexOf("Apple")===0}catch{}function id(t,e){switch(e){case"svg":case"bg":case"mask":return e}return e!=="style"&&(io||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const rd=/(-?[0-9.]*[0-9]+[0-9.]*)/g,sd=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ii(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(rd);if(i===null||!i.length)return t;const r=[];let s=i.shift(),o=sd.test(s);for(;;){if(o){const c=parseFloat(s);isNaN(c)?r.push(s):r.push(Math.ceil(c*e*n)/n)}else r.push(s);if(s=i.shift(),s===void 0)return r.join("");o=!o}}const od=t=>t==="unset"||t==="undefined"||t==="none";function ro(t,e){const n={...wt,...t},i={...Us,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,i].forEach(g=>{const b=[],C=g.hFlip,N=g.vFlip;let R=g.rotate;C?N?R+=2:(b.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),b.push("scale(-1 1)"),r.top=r.left=0):N&&(b.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),b.push("scale(1 -1)"),r.top=r.left=0);let P;switch(R<0&&(R-=Math.floor(R/4)*4),R=R%4,R){case 1:P=r.height/2+r.top,b.unshift("rotate(90 "+P.toString()+" "+P.toString()+")");break;case 2:b.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:P=r.width/2+r.left,b.unshift("rotate(-90 "+P.toString()+" "+P.toString()+")");break}R%2===1&&(r.left!==r.top&&(P=r.left,r.left=r.top,r.top=P),r.width!==r.height&&(P=r.width,r.width=r.height,r.height=P)),b.length&&(s='<g transform="'+b.join(" ")+'">'+s+"</g>")});const o=i.width,c=i.height,a=r.width,l=r.height;let u,h;o===null?(h=c===null?"1em":c==="auto"?l:c,u=ii(h,a/l)):(u=o==="auto"?a:o,h=c===null?ii(u,l/a):c==="auto"?l:c);const d={},m=(g,b)=>{od(b)||(d[g]=b.toString())};return m("width",u),m("height",h),d.viewBox=r.left.toString()+" "+r.top.toString()+" "+a.toString()+" "+l.toString(),{attributes:d,body:s}}const ad=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let sn=ad();function cd(t){sn=t}function ld(){return sn}function ud(t,e){const n=pn(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const s=e+".json?icons=";i=n.maxURL-r-n.path.length-s.length}return i}function hd(t){return t===404}const dd=(t,e,n)=>{const i=[],r=ud(t,e),s="icons";let o={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=r&&l>0&&(i.push(o),o={type:s,provider:t,prefix:e,icons:[]},c=a.length),o.icons.push(a)}),i.push(o),i};function fd(t){if(typeof t=="string"){const e=pn(t);if(e)return e.path}return"/"}const pd=(t,e,n)=>{if(!sn){n("abort",424);return}let i=fd(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),a=new URLSearchParams({icons:c});i+=s+".json?"+a.toString();break}case"custom":{const s=e.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;sn(t+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{n(hd(o)?"abort":"next",o)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},md={prepare:dd,send:pd};function Nr(t,e){switch(t){case"local":case"session":ge[t]=e;break;case"all":for(const n in ge)ge[n]=e;break}}const Rn="data-style";let so="";function gd(t){so=t}function Rr(t,e){let n=Array.from(t.childNodes).find(i=>i.hasAttribute&&i.hasAttribute(Rn));n||(n=document.createElement("style"),n.setAttribute(Rn,Rn),t.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+so}function oo(){Or("",md),Ws(!0);let t;try{t=window}catch{}if(t){if(no(),t.IconifyPreload!==void 0){const n=t.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Tr(r))&&console.error(i)}catch{console.error(i)}})}if(t.IconifyProviders!==void 0){const n=t.IconifyProviders;if(typeof n=="object"&&n!==null)for(const i in n){const r="IconifyProviders["+i+"] is invalid.";try{const s=n[i];if(typeof s!="object"||!s||s.resources===void 0)continue;Cr(i,s)||console.error(r)}catch{console.error(r)}}}}return{enableCache:n=>Nr(n,!0),disableCache:n=>Nr(n,!1),iconExists:Mh,getIcon:jh,listIcons:Lh,addIcon:Ys,addCollection:Tr,calculateSize:ii,buildIcon:ro,loadIcons:Ti,loadIcon:ed,addAPIProvider:Cr,appendCustomStyle:gd,_api:{getAPIConfig:pn,setAPIModule:Or,sendAPIQuery:Xs,setFetch:cd,getFetch:ld,listAPIProviders:Wh}}}function ao(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function yd(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function vd(t){return"data:image/svg+xml,"+yd(t)}function bd(t){return'url("'+vd(t)+'")'}const ri={"background-color":"currentColor"},co={"background-color":"transparent"},kr={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Lr={"-webkit-mask":ri,mask:ri,background:co};for(const t in Lr){const e=Lr[t];for(const n in kr)e[t+"-"+n]=kr[n]}function Mr(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function xd(t,e,n){const i=document.createElement("span");let r=t.body;r.indexOf("<a")!==-1&&(r+="<!-- "+Date.now()+" -->");const s=t.attributes,o=ao(r,{...s,width:e.width+"",height:e.height+""}),c=bd(o),a=i.style,l={"--svg":c,width:Mr(s.width),height:Mr(s.height),...n?ri:co};for(const u in l)a.setProperty(u,l[u]);return i}let rt;function _d(){try{rt=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch{rt=null}}function wd(t){return rt===void 0&&_d(),rt?rt.createHTML(t):t}function Ed(t){const e=document.createElement("span"),n=t.attributes;let i="";n.width||(i="width: inherit;"),n.height||(i+="height: inherit;"),i&&(n.style=i);const r=ao(t.body,n);return e.innerHTML=wd(r),e.firstChild}function jr(t,e){const n=e.icon.data,i=e.customisations,r=ro(n,i);i.preserveAspectRatio&&(r.attributes.preserveAspectRatio=i.preserveAspectRatio);const s=e.renderedMode;let o;switch(s){case"svg":o=Ed(r);break;default:o=xd(r,{...wt,...n},s==="mask")}const c=Array.from(t.childNodes).find(a=>{const l=a.tagName&&a.tagName.toUpperCase();return l==="SPAN"||l==="SVG"});c?o.tagName==="SPAN"&&c.tagName===o.tagName?c.setAttribute("style",o.getAttribute("style")):t.replaceChild(o,c):t.appendChild(o)}function Br(t,e,n){const i=n&&(n.rendered?n:n.lastRender);return{rendered:!1,inline:e,icon:t,lastRender:i}}function Ad(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch{return}if(!e||!n)return;const i=e.get(t);if(i)return i;const r=["icon","mode","inline","width","height","rotate","flip"],s=class extends n{constructor(){super();Ot(this,"_shadowRoot");Ot(this,"_state");Ot(this,"_checkQueued",!1);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=Nn(this);Rr(a,l),this._state=Br({value:""},l),this._queueCheck()}static get observedAttributes(){return r.slice(0)}attributeChangedCallback(a){if(a==="inline"){const l=Nn(this),u=this._state;l!==u.inline&&(u.inline=l,Rr(this._shadowRoot,l))}else this._queueCheck()}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Nn(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}jr(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered)return;const u=this.getAttribute("mode"),h=Er(this);(a.attrMode!==u||Ph(a.customisations,h))&&this._renderIcon(a.icon,h,u)}_iconChanged(a){const l=nd(a,(u,h,d)=>{const m=this._state;if(m.rendered||this.getAttribute("icon")!==u)return;const g={value:u,name:h,data:d};g.data?this._gotIconData(g):m.icon=g});l.data?this._gotIconData(l):this._state=Br(l,this._state.inline,this._state)}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Er(this),this.getAttribute("mode"))}_renderIcon(a,l,u){const h=id(a.data.body,u),d=this._state.inline;jr(this._shadowRoot,this._state={rendered:!0,icon:a,inline:d,customisations:l,attrMode:u,renderedMode:h})}};r.forEach(c=>{c in s.prototype||Object.defineProperty(s.prototype,c,{get:function(){return this.getAttribute(c)},set:function(a){a!==null?this.setAttribute(c,a):this.removeAttribute(c)}})});const o=oo();for(const c in o)s[c]=s.prototype[c]=o[c];return e.define(t,s),s}Ad()||oo();var Td=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,At=(t,e,n,i)=>{for(var r=i>1?void 0:i?Od(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Td(e,n,r),r};let Le=class extends O{constructor(){super(...arguments),this.currentRoute="/",this.__latestBlogTitle="",this.__latestBlogSlug="",this.didInitialize=!1,this.requestsContext=new Ec}static get styles(){return D`
            #outlet > .leaving {
                animation: 1s fadeOut ease-in-out;
            }

            #outlet > .entering {
                animation: 1s fadeIn linear;
            }

            @keyframes fadeOut {
                from {
                    opacity: 1;
                }

                to {
                    opacity: 0;
                }
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }

                to {
                    opacity: 1;
                }
            }
        `}intializeXFModelRouter(){Pe.setOutlet(this.routerOutletContainer()),Pe.setViewRoutes(lh),Pe.initializeRouter()}listenForParamAndOptionsChange(){Pe.onDidNavigate.subscribeAsync(t=>{this.currentRoute=t.pathname,document.body.scrollTo({top:0,left:0,behavior:"smooth"})})}updateRouteParamsAndOptions(){Pe.getInitialRouterParamsAndOptions().then(t=>{this.currentRoute=t.pathname})}initializeRequestContext(){this.requestsContext.__intialize__(),this.requestsContext.__articleCardsPromise.__cowait().then(t=>{let e=t[0];this.__latestBlogSlug=e.slug,this.__latestBlogTitle=e.title})}firstUpdated(){this.didInitialize||(this.initializeRequestContext(),this.intializeXFModelRouter(),this.updateRouteParamsAndOptions(),this.listenForParamAndOptionsChange())}routerOutletContainer(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#outlet")}render(){return w`
            <div class="main-app-container">
                <div class="wrapper">
                    <xf-announce-item
                        .latestBlogSlug=${this.__latestBlogSlug}
                        .latestBlogTitle=${this.__latestBlogTitle}
                    ></xf-announce-item>
                    <header class="header-view">
                        <xf-header .currentRoute=${this.currentRoute}></xf-header>
                    </header>
                    <main id="outlet"></main>
                    <footer class="footer-view">
                        <xf-footer></xf-footer>
                    </footer>
                </div>
            </div>
        `}};At([H()],Le.prototype,"currentRoute",2);At([H()],Le.prototype,"__latestBlogTitle",2);At([H()],Le.prototype,"__latestBlogSlug",2);At([_a({context:Fe})],Le.prototype,"requestsContext",2);Le=At([I("xf-web-main")],Le);
