/*! For license information please see vendors.lit.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["vendors.lit"],{357:(e,t,r)=>{r.r(t),r.d(t,{supportsAdoptingStyleSheets:()=>i,CSSResult:()=>o,unsafeCSS:()=>a,css:()=>l,adoptStyles:()=>d,getCompatibleStyle:()=>c});const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new Map;class o{constructor(e,t){if(this._$cssResult$=!0,t!==s)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=n.get(this.cssText);return i&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=e=>new o("string"==typeof e?e:String(e),s),l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(r)+e[i+1]),e[0]);return new o(r,s)},d=(e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),i=window.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=t.cssText,e.appendChild(r)}))},c=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return a(t)})(e):e},5034:(e,t,r)=>{r.r(t),r.d(t,{legacyPrototypeMethod:()=>i,standardPrototypeMethod:()=>s,decorateProperty:()=>n});const i=(e,t,r)=>{Object.defineProperty(t,r,e)},s=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),n=({finisher:e,descriptor:t})=>(r,i)=>{var s;if(void 0===i){const i=null!==(s=r.originalKey)&&void 0!==s?s:r.key,n=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:{...r,key:i};return null!=e&&(n.finisher=function(t){e(t,i)}),n}{const s=r.constructor;void 0!==t&&Object.defineProperty(r,i,t(i)),null==e||e(s,i)}}},2492:(e,t,r)=>{r.r(t),r.d(t,{customElement:()=>i});const i=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t)},5332:(e,t,r)=>{r.r(t),r.d(t,{eventOptions:()=>s});var i=r(5034);function s(e){return(0,i.decorateProperty)({finisher:(t,r)=>{Object.assign(t.prototype[r],e)}})}},6946:(e,t,r)=>{r.r(t),r.d(t,{property:()=>s});const i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function s(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):i(e,t)}},6849:(e,t,r)=>{r.r(t),r.d(t,{queryAll:()=>s});var i=r(5034);function s(e){return(0,i.decorateProperty)({descriptor:t=>({get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==r?r:[]},enumerable:!0,configurable:!0})})}},1529:(e,t,r)=>{r.r(t),r.d(t,{queryAssignedNodes:()=>s});var i=r(5034);function s(e="",t=!1,r=""){return(0,i.decorateProperty)({descriptor:i=>({get(){var i,s,n;const o="slot"+(e?`[name=${e}]`:":not([name])");let a=null!==(n=null===(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(o))||void 0===s?void 0:s.assignedNodes({flatten:t}))&&void 0!==n?n:[];return r&&(a=a.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(r)))),a},enumerable:!0,configurable:!0})})}},2350:(e,t,r)=>{r.r(t),r.d(t,{queryAsync:()=>s});var i=r(5034);function s(e){return(0,i.decorateProperty)({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}},8702:(e,t,r)=>{r.r(t),r.d(t,{query:()=>s});var i=r(5034);function s(e,t){return(0,i.decorateProperty)({descriptor:r=>{const i={get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():`__${r}`;i.get=function(){var r,i;return void 0===this[t]&&(this[t]=null!==(i=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}},9929:(e,t,r)=>{r.r(t),r.d(t,{state:()=>s});var i=r(6946);function s(e){return(0,i.property)({...e,state:!0})}},579:(e,t,r)=>{r.r(t),r.d(t,{CSSResult:()=>o.CSSResult,adoptStyles:()=>o.adoptStyles,css:()=>o.css,getCompatibleStyle:()=>o.getCompatibleStyle,supportsAdoptingStyleSheets:()=>o.supportsAdoptingStyleSheets,unsafeCSS:()=>o.unsafeCSS,defaultConverter:()=>p,notEqual:()=>u,ReactiveElement:()=>y});var i,s,n,o=r(357);let a,l;const d=window.reactiveElementPolyfillSupportDevMode;{const e=null!==(i=globalThis.litIssuedWarnings)&&void 0!==i?i:globalThis.litIssuedWarnings=new Set;l=(t,r)=>{r+=` See https://lit.dev/msg/${t} for more information.`,e.has(r)||(console.warn(r),e.add(r))},l("dev-mode","Lit is in dev mode. Not recommended for production!"),(null===(s=window.ShadyDOM)||void 0===s?void 0:s.inUse)&&void 0===d&&l("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded."),a=e=>({then:(t,r)=>{l("request-update-promise",`The \`requestUpdate\` method should no longer return a Promise but does so on \`${e}\`. Use \`updateComplete\` instead.`),void 0!==t&&t(!1)}})}const c=(e,t)=>e,p={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},u=(e,t)=>t!==e&&(t==t||e==e),h={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class y extends HTMLElement{constructor(){super(),this.__instanceProperties=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this._initialize()}static addInitializer(e){var t;null!==(t=this._initializers)&&void 0!==t||(this._initializers=[]),this._initializers.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const i=this.__attributeNameForProperty(r,t);void 0!==i&&(this.__attributeToPropertyMap.set(i,r),e.push(i))})),e}static createProperty(e,t=h){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.__attributeToPropertyMap=new Map,this.hasOwnProperty(c("properties"))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}this.elementStyles=this.finalizeStyles(this.styles);{const e=(e,t=!1)=>{this.prototype.hasOwnProperty(e)&&l(t?"renamed-api":"removed-api",`\`${e}\` is implemented on class ${this.name}. It has been ${t?"renamed":"removed"} in this version of LitElement.`)};e("initialize"),e("requestUpdateInternal"),e("_getUpdateComplete",!0)}return!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift((0,o.getCompatibleStyle)(e))}else void 0!==e&&t.push((0,o.getCompatibleStyle)(e));return t}static __attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}_initialize(){var e;this.__updatePromise=new Promise((e=>this.enableUpdating=e)),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),null===(e=this.constructor._initializers)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this.__controllers)&&void 0!==t?t:this.__controllers=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this.__controllers)||void 0===t||t.splice(this.__controllers.indexOf(e)>>>0,1)}__saveInstanceProperties(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this.__instanceProperties.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return(0,o.adoptStyles)(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this.__controllers)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this.__controllers)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$attributeToProperty(e,r)}__propertyToAttribute(e,t,r=h){var i,s;const n=this.constructor.__attributeNameForProperty(e,r);if(void 0!==n&&!0===r.reflect){const o=(null!==(s=null===(i=r.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==s?s:p.toAttribute)(t,r.type);this.constructor.enabledWarnings.indexOf("migration")>=0&&void 0===o&&l("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this.__reflectingProperty=null}}_$attributeToProperty(e,t){var r,i,s;const n=this.constructor,o=n.__attributeToPropertyMap.get(e);if(void 0!==o&&this.__reflectingProperty!==o){const e=n.getPropertyOptions(o),a=e.converter,l=null!==(s=null!==(i=null===(r=a)||void 0===r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==s?s:p.fromAttribute;this.__reflectingProperty=o,this[o]=l(t,e.type),this.__reflectingProperty=null}}requestUpdate(e,t,r){let i=!0;return void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this._$changedProperties.has(e)||this._$changedProperties.set(e,t),!0===r.reflect&&this.__reflectingProperty!==e&&(void 0===this.__reflectingProperties&&(this.__reflectingProperties=new Map),this.__reflectingProperties.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this.__updatePromise=this.__enqueueUpdate()),a(this.localName)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){const e=[];if(this.constructor.elementProperties.forEach(((t,r)=>{var i;this.hasOwnProperty(r)&&!(null===(i=this.__instanceProperties)||void 0===i?void 0:i.has(r))&&e.push(r)})),e.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${e.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}this.__instanceProperties&&(this.__instanceProperties.forEach(((e,t)=>this[t]=e)),this.__instanceProperties=void 0);let t=!1;const r=this._$changedProperties;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this.__controllers)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this.__markUpdated()}catch(e){throw t=!1,this.__markUpdated(),e}t&&this._$didUpdate(r)}willUpdate(e){}_$didUpdate(e){var t;null===(t=this.__controllers)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.indexOf("change-in-update")>=0&&l("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this.__reflectingProperties&&(this.__reflectingProperties.forEach(((e,t)=>this.__propertyToAttribute(t,this[t],e))),this.__reflectingProperties=void 0),this.__markUpdated()}updated(e){}firstUpdated(e){}}y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:y});{y.enabledWarnings=["change-in-update"];const e=function(e){e.hasOwnProperty(c("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};y.enableWarning=function(t){e(this),this.enabledWarnings.indexOf(t)<0&&this.enabledWarnings.push(t)},y.disableWarning=function(t){e(this);const r=this.enabledWarnings.indexOf(t);r>=0&&this.enabledWarnings.splice(r,1)}}(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.0.1"),globalThis.reactiveElementVersions.length>1&&l("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")},9662:(e,t,r)=>{r.r(t),r.d(t,{customElement:()=>i.customElement,property:()=>s.property,state:()=>n.state,eventOptions:()=>o.eventOptions,query:()=>a.query,queryAll:()=>l.queryAll,queryAsync:()=>d.queryAsync,queryAssignedNodes:()=>c.queryAssignedNodes});var i=r(2492),s=r(6946),n=r(9929),o=r(5332),a=r(8702),l=r(6849),d=r(2350),c=r(1529)},8082:(e,t,r)=>{r.r(t),r.d(t,{Directive:()=>i.Directive,PartType:()=>i.PartType,directive:()=>i.directive});var i=r(683)},8810:(e,t,r)=>{r.r(t),r.d(t,{classMap:()=>i.classMap});var i=r(8831)},3492:(e,t,r)=>{r.r(t),r.d(t,{ifDefined:()=>i.ifDefined});var i=r(1957)},1465:(e,t,r)=>{r.r(t),r.d(t,{live:()=>i.live});var i=r(7158)},3196:(e,t,r)=>{r.r(t),r.d(t,{styleMap:()=>i.styleMap});var i=r(9760)},8881:(e,t,r)=>{r.r(t),r.d(t,{UntilDirective:()=>i.UntilDirective,until:()=>i.until});var i=r(6848)},5862:(e,t,r)=>{r.r(t),r.d(t,{CSSResult:()=>i.CSSResult,INTERNAL:()=>i.INTERNAL,LitElement:()=>i.LitElement,ReactiveElement:()=>i.ReactiveElement,UpdatingElement:()=>i.UpdatingElement,_$LE:()=>i._$LE,_$LH:()=>i._$LH,adoptStyles:()=>i.adoptStyles,css:()=>i.css,defaultConverter:()=>i.defaultConverter,getCompatibleStyle:()=>i.getCompatibleStyle,html:()=>i.html,noChange:()=>i.noChange,notEqual:()=>i.notEqual,nothing:()=>i.nothing,render:()=>i.render,supportsAdoptingStyleSheets:()=>i.supportsAdoptingStyleSheets,svg:()=>i.svg,unsafeCSS:()=>i.unsafeCSS}),r(579),r(4633);var i=r(5072)}}]);
//# sourceMappingURL=vendors.lit.js.map