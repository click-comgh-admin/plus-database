/*! For license information please see login.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4535],{8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},1981:(e,t,n)=>{n.d(t,{R:()=>r});const r=(e,t)=>!0===navigator.onLine?e("online"):t("offline")},6651:(e,t,n)=>{n.d(t,{m:()=>i}),n(934);let r=[];const o="Show Password",i=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const n=e.parentElement;n.setAttribute("style",n.getAttribute("style")+"; flex-direction: column !important;");const i=document.createElement("label");i.setAttribute("style",i.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const a=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),a.innerText=o;const c=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const l=document.createElement("input");l.type="checkbox",l.id="pswd-visibility-btn--"+t,l.setAttribute("style",l.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),i.appendChild(c),i.appendChild(l),i.appendChild(a),e.after(i);const u={id:l.id,showing:!1,elem:e,span:a};r.includes(u)||r.push(u),l.addEventListener("change",s)}))},s=e=>{e.preventDefault();const t=e.currentTarget;t.checked,r.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=o,e.showing=!1))}))}},7725:(e,t,n)=>{n.d(t,{eF:()=>a,U8:()=>c,hk:()=>l});var r=n(7052),o=n(1942),i=n(1489);const s="pdb-active-branch",a=e=>{const t=JSON.stringify(e);(0,o.Ad)(s,"",-1),(0,o.Ad)(s,(0,r.h)(t),3500)};function c(){(0,o.Ad)(s,"",-1)}const l=()=>{if(""===(0,o.Hl)(s))return null;{const e=(0,r.t)((0,o.Hl)(s)),t=JSON.parse(e);return(0,i.N)(t)}}},1489:(e,t,n)=>{function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.d(t,{j:()=>r,N:()=>o})},1843:(e,t,n)=>{n.r(t),n.d(t,{PdbLoginForm:()=>v});var r=n(771),o=n(6651),i=n(596),s=n(7270),a=n(8967),c=n(1981),l=n(3600),u=n(7725),d=n(1566),f=n(6455),p=n.n(f),h=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},m=n(9392),y=n(5713),b=(n(1239),n(5248),n(3313),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s});let v=class extends m.oi{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return m.dy`
      <form method="post" action="#" class="form" make-general-posts="client-login">
        <div class="form-input-container">
          <mwc-textfield name="phone_email" id="phone_email" label="E-mail/ Phone Number" icon="person" outlined type="text" required>
          </mwc-textfield>
        </div>
        <div class="form-input-container">
          <mwc-textfield name="password" id="password" label="Password" icon="lock" outlined type="password" required>
          </mwc-textfield>
        </div>
      
        <div class="form-input-container flex">      
          <div class="w-full text-right">
            <a class="underline text-sm !text-gray-800 hover:!text-gray-900"
              href="${r.t.URLS.FORGOT_PASSWORD_URL}">
              forgot password?
            </a>
          </div>
        </div>
      
        <div class="form-input-container">
          <mwc-button label="Login" raised class="button" @click="${this.submitForm}">
          </mwc-button>
        </div>
      
        <div class="flex form-input-container items-center text-center">
          <hr class="border-gray-300 border-1 w-full rounded-md">
          <label class="block font-medium text-sm text-gray-600 w-full">
            Lets go digital...
          </label>
          <hr class="border-gray-300 border-1 w-full rounded-md">
        </div>
      </form>`}firstUpdated(){(0,o.m)(),(0,o.m)("mwc-textfield")}submitForm(e){return t=this,n=void 0,f=function*(){e.preventDefault(),yield function(){return h(this,void 0,void 0,(function*(){const e=r.t.URLS.AKWAABA_API_BASE_URL+"clients/login",t=document.querySelector('[make-general-posts="client-login"]'),n=new FormData(t);(0,c.R)((r=>p().fire({title:"Login?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>h(this,void 0,void 0,(function*(){return yield(0,s.d)(e,{method:"POST",body:n},!1).then((e=>{const n=new i.H("post",e,!1,t),r=n.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,a.T)(e);p().showValidationMessage(`${t}`)}return n})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t,n="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;n="Login Successful",t=e.data,r=o.response.success}r&&p().fire({title:n,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{const e=(0,d.Y)(t);(0,l.bK)(e),(0,u.U8)(),window.location.reload()}),500)}}))),(e=>{p().fire({title:"Looks like you're offline",text:"Try again later!",icon:"info",iconColor:"#f97817",confirmButtonColor:"#f97817"})}))}))}()},new((o=void 0)||(o=Promise))((function(e,r){function i(e){try{a(f.next(e))}catch(e){r(e)}}function s(e){try{a(f.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,s)}a((f=f.apply(t,n||[])).next())}));var t,n,o,f}createRenderRoot(){return this}};v.styles=[m.iv`
   :host { display: block; }
  `],v=b([(0,y.M)("pdb-login-form"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],v)},655:(e,t,n)=>{n.d(t,{ZT:()=>o,pi:()=>i,gn:()=>s,mG:()=>a,Jh:()=>c,XA:()=>l,CR:()=>u,ev:()=>d});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function s(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}function a(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function d(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create},5674:(e,t,n)=>{n.d(t,{eZ:()=>r});const r=({finisher:e,descriptor:t})=>(n,r)=>{var o;if(void 0===r){const r=null!==(o=n.originalKey)&&void 0!==o?o:n.key,i=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(n.key)}:{...n,key:r};return null!=e&&(i.finisher=function(t){e(t,r)}),i}{const o=n.constructor;void 0!==t&&Object.defineProperty(n,r,t(r)),null==e||e(o,r)}}},8829:(e,t,n)=>{n.d(t,{h:()=>o});var r=n(5674);function o(e){return(0,r.eZ)({finisher:(t,n)=>{Object.assign(t.prototype[n],e)}})}},8602:(e,t,n)=>{n.d(t,{G:()=>o});var r=n(5674);function o(e){return(0,r.eZ)({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}},2669:(e,t,n)=>{n.d(t,{I:()=>o});var r=n(5674);function o(e,t){return(0,r.eZ)({descriptor:n=>{const r={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;r.get=function(){var n,r;return void 0===this[t]&&(this[t]=null!==(r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==r?r:null),this[t]}}return r}})}},9158:(e,t,n)=>{n.d(t,{S:()=>o});var r=n(9662);function o(e){return(0,r.C)({...e,state:!0})}},4232:(e,t,n)=>{n.d(t,{pt:()=>i,OR:()=>s,hl:()=>c});var r=n(3692);const{H:o}=r.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s=e=>void 0===e.strings,a={},c=(e,t=a)=>e._$AH=t},875:(e,t,n)=>{n.d(t,{Xe:()=>i,pX:()=>r,XM:()=>o});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...t)=>({_$litDirective$:e,values:t});class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8082:(e,t,n)=>{n.d(t,{Xe:()=>r.Xe,pX:()=>r.pX,XM:()=>r.XM});var r=n(875)},9455:(e,t,n)=>{n.d(t,{$:()=>i});var r=n(3692),o=n(875);const i=(0,o.XM)(class extends o.Xe{constructor(e){var t;if(super(e),e.type!==o.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,o;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.et)||void 0===n?void 0:n.has(e))&&this.st.add(e);return this.render(t)}const i=e.element.classList;this.st.forEach((e=>{e in t||(i.remove(e),this.st.delete(e))}));for(const e in t){const n=!!t[e];n===this.st.has(e)||(null===(o=this.et)||void 0===o?void 0:o.has(e))||(n?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return r.Jb}})},796:(e,t,n)=>{n.d(t,{o:()=>o});var r=n(3692);const o=e=>null!=e?e:r.Ld},3669:(e,t,n)=>{n.d(t,{a:()=>s});var r=n(3692),o=n(875),i=n(4232);const s=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,s=e.name;if(e.type===o.pX.PROPERTY){if(t===n[s])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(s))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(s)===t+"")return r.Jb;return(0,i.hl)(e),t}})},3959:(e,t,n)=>{n.d(t,{V:()=>i});var r=n(3692),o=n(875);const i=(0,o.XM)(class extends o.Xe{constructor(e){var t;if(super(e),e.type!==o.pX.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return null==r?t:t+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?n.removeProperty(e):n[e]="")}));for(const e in t){const r=t[e];null!=r&&(this.ut.add(e),e.includes("-")?n.setProperty(e,r):n[e]=r)}return r.Jb}})}},e=>(e.O(0,[2185,5744,9674,2459,5291,3712],(()=>(1843,e(e.s=1843)))),e.O())])}));
//# sourceMappingURL=login.js.map