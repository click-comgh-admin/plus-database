/*! For license information please see edit.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[821],{3750:(e,t,n)=>{n.d(t,{A:()=>r});const r=()=>{const e=document.querySelectorAll("[mm-active]"),t=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];e.forEach((e=>{var n=e.getAttribute("mm-active").split("|");for(let r=0;r<n.length;r++){const o=n[r];t===o&&e.setAttribute("class","mm-active")}}))}},8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>l});var r=n(771),o=n(7270),i=n(7052),c=n(1942),s=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))};const a=(e,t,n)=>s(void 0,void 0,void 0,(function*(){const s=r.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",a=n,l=JSON.stringify({email:e,id:t});yield(0,o.d)(s,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,i.h)(String(e.jsonData.token));(0,c.Ad)(a,t,10),(0,c.vh)(a+"_date",(new Date).toUTCString(),10)}}))})),l=(e,t,n)=>s(void 0,void 0,void 0,(function*(){const l=(0,i.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:l,cookieName:d}}},""==(0,c.Hl)(d)?yield a(e,l,n):yield((e,t,n)=>s(void 0,void 0,void 0,(function*(){const l=r.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,c.Hl)(d),f=JSON.stringify({token:(0,i.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,c.Hl)(d+"_date"))))return u;yield(0,o.d)(l,{method:"POST",body:f},!0).then((r=>s(void 0,void 0,void 0,(function*(){if(r.jsonData.token&r.jsonData.user&r.jsonData.expiry){const e=(0,i.h)(String(r.jsonData.token));(0,c.Ad)(d,e,10),(0,c.vh)(d+"_date",(new Date).toUTCString(),10)}else yield a(e,t,n)}))))})))(e,l,n)}))},4672:(e,t,n)=>{n.d(t,{O1:()=>r,Jx:()=>o,W3:()=>i});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},i=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},6224:(e,t,n)=>{n.d(t,{p:()=>s});var r=n(771),o=n(7270),i=n(596),c=n(3600);function s(e=null){return t=this,n=void 0,a=function*(){const t=(0,c.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),s=yield(0,o.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new i.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function i(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,i)}c((a=a.apply(t,n||[])).next())}));var t,n,s,a}},8852:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesEdit:()=>O});var r,o=n(3750),i=n(4108),c=n(9392),s=n(9662),a=n(5713),l=(n(5248),n(3313),n(934),n(6811),n(4672)),d=n(6224),u=n(6455),f=n.n(u),h=n(771),p=n(7270),y=n(596),v=n(8967),b=n(3600),m=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))},g=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))};let _=class extends c.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.__branch=null,this.branchId=0}set _branch(e){this.__branch=e,this.requestUpdate()}get _branch(){return this.__branch}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)(),this.getBranchId(),yield this.getClientBranch()}))}disconnectedCallback(){}render(){return null===this._branch?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._branch?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Branch</span>: undefined error</h4>
          </div>
        </div>
      `:c.dy`
        ${this.form}
      `}get form(){return c.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Branch</h1>
                  <h3 class="h3">Edit Branch</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="client-branch">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.branchField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      ${1===this.branchId?c.dy``:c.dy`
                        <mwc-button label="Update" raised class="button" @click="${this.submitForm}">
                        </mwc-button>
                      `}
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get branchField(){let e=null;return e=null!==this._branch&&void 0!==this._branch.data?Array.isArray(this._branch.data)?this._branch.data.length>0?this._branch.data[0]:{id:void 0,name:""}:this._branch.data:{id:void 0,name:""},c.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="${void 0===e.id?"":e.name}" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getBranchId(){let e=(0,l.Jx)("branch-id"),t=null!==e?Number(e):null;this.branchId=Number.isNaN(t)?null:t}getClientBranch(){return A(this,void 0,void 0,(function*(){const e=yield(0,d.p)(this.branchId);this._branch=null===e?void 0:e.response}))}submitForm(e){return A(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return m(this,void 0,void 0,(function*(){const t=(0,b.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"clients/branch/"+e,r=document.querySelector('[make-general-posts="client-branch"]'),o=new FormData(r);return f().fire({title:"Update Branch?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,p.d)(n,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,v.T)(e);f().showValidationMessage(`${t}`)}return t})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&f().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.branchId)}))}createRenderRoot(){return this}};_.styles=[c.iv`
   :host { display: block; }
  `],g([(0,s.C)({type:Number}),w("design:type",Number)],_.prototype,"CLIENT_ID",void 0),g([(0,s.C)({type:Array}),w("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],_.prototype,"_data",void 0),g([(0,s.C)({type:Object}),w("design:type",Object)],_.prototype,"urlQueryParams",void 0),g([(0,s.C)({type:Number}),w("design:type",Number)],_.prototype,"branchId",void 0),_=g([(0,a.M)("membership-groupings-branches-edit-branch"),w("design:paramtypes",[])],_);var k=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},T=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let O=class extends c.oi{constructor(){super(),(0,o.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,s)}a((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){return c.dy`
      <membership-groupings-branches-edit-branch CLIENT_ID="${this.clientId}"></membership-groupings-branches-edit-branch>
    `}firstUpdated(){}createRenderRoot(){return this}};k([(0,s.C)({type:String}),T("design:type",String)],O.prototype,"email",void 0),k([(0,s.C)({type:Number}),T("design:type",Number)],O.prototype,"mId",void 0),k([(0,s.C)({type:Number}),T("design:type",Number)],O.prototype,"clientId",void 0),O=k([(0,a.M)("membership-groupings-branches-edit"),T("design:paramtypes",[])],O)},655:(e,t,n)=>{n.d(t,{ZT:()=>o,pi:()=>i,gn:()=>c,mG:()=>s,Jh:()=>a,XA:()=>l,CR:()=>d,ev:()=>u});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function c(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c}function s(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c}function u(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create},5674:(e,t,n)=>{n.d(t,{eZ:()=>r});const r=({finisher:e,descriptor:t})=>(n,r)=>{var o;if(void 0===r){const r=null!==(o=n.originalKey)&&void 0!==o?o:n.key,i=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(n.key)}:{...n,key:r};return null!=e&&(i.finisher=function(t){e(t,r)}),i}{const o=n.constructor;void 0!==t&&Object.defineProperty(n,r,t(r)),null==e||e(o,r)}}},8829:(e,t,n)=>{n.d(t,{h:()=>o});var r=n(5674);function o(e){return(0,r.eZ)({finisher:(t,n)=>{Object.assign(t.prototype[n],e)}})}},8602:(e,t,n)=>{n.d(t,{G:()=>o});var r=n(5674);function o(e){return(0,r.eZ)({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}},2669:(e,t,n)=>{n.d(t,{I:()=>o});var r=n(5674);function o(e,t){return(0,r.eZ)({descriptor:n=>{const r={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;r.get=function(){var n,r;return void 0===this[t]&&(this[t]=null!==(r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==r?r:null),this[t]}}return r}})}},9158:(e,t,n)=>{n.d(t,{S:()=>o});var r=n(9662);function o(e){return(0,r.C)({...e,state:!0})}},4232:(e,t,n)=>{n.d(t,{pt:()=>i,OR:()=>c,hl:()=>a});var r=n(3692);const{H:o}=r.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=e=>void 0===e.strings,s={},a=(e,t=s)=>e._$AH=t},875:(e,t,n)=>{n.d(t,{Xe:()=>i,pX:()=>r,XM:()=>o});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...t)=>({_$litDirective$:e,values:t});class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8082:(e,t,n)=>{n.d(t,{Xe:()=>r.Xe,pX:()=>r.pX,XM:()=>r.XM});var r=n(875)},9455:(e,t,n)=>{n.d(t,{$:()=>i});var r=n(3692),o=n(875);const i=(0,o.XM)(class extends o.Xe{constructor(e){var t;if(super(e),e.type!==o.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,o;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.et)||void 0===n?void 0:n.has(e))&&this.st.add(e);return this.render(t)}const i=e.element.classList;this.st.forEach((e=>{e in t||(i.remove(e),this.st.delete(e))}));for(const e in t){const n=!!t[e];n===this.st.has(e)||(null===(o=this.et)||void 0===o?void 0:o.has(e))||(n?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return r.Jb}})},796:(e,t,n)=>{n.d(t,{o:()=>o});var r=n(3692);const o=e=>null!=e?e:r.Ld},3669:(e,t,n)=>{n.d(t,{a:()=>c});var r=n(3692),o=n(875),i=n(4232);const c=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,c=e.name;if(e.type===o.pX.PROPERTY){if(t===n[c])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(c))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(c)===t+"")return r.Jb;return(0,i.hl)(e),t}})},3959:(e,t,n)=>{n.d(t,{V:()=>i});var r=n(3692),o=n(875);const i=(0,o.XM)(class extends o.Xe{constructor(e){var t;if(super(e),e.type!==o.pX.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return null==r?t:t+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?n.removeProperty(e):n[e]="")}));for(const e in t){const r=t[e];null!=r&&(this.ut.add(e),e.includes("-")?n.setProperty(e,r):n[e]=r)}return r.Jb}})}},e=>(e.O(0,[2185,5744,9674,2459,5291,214,948,3712],(()=>(8852,e(e.s=8852)))),e.O())])}));
//# sourceMappingURL=edit.js.map