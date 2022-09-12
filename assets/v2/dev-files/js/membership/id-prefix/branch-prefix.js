"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/id-prefix/branch-prefix"],{9579:(e,t,r)=>{r.r(t)},5501:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>n,https_swal_error_format:()=>o});const n="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?n:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>o,urlQueryParamsJoin:()=>i});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},i=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},675:(e,t,r)=>{r.r(t),r.d(t,{Convert:()=>n,typeMap:()=>d});class n{static toClientBranchModel(e){return s(JSON.parse(e),l("ClientBranchModel"),i)}static clientBranchModelToJson(e){return JSON.stringify(s(e,l("ClientBranchModel"),c),null,2)}}function o(e,t,r=""){if(r)throw Error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`);throw Error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function c(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function s(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:o(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return s(t,n,r)}catch(e){}}return o(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>s(t,e,r))):o("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return o("object",n);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],c=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;i[o.key]=s(c,o.typ,r,o.key)})),Object.getOwnPropertyNames(n).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(i[o]=s(n[o],t,r,o))})),i}(r(t),t.additional,e):o(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?o("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:o(e,t,n)}(t,e)}}function a(...e){return{unionMembers:e}}function l(e){return{ref:e}}const d={ClientBranchModel:(f=[{json:"id",js:"id",typ:a(null,0)},{json:"name",js:"name",typ:a(null,"")},{json:"accountId",js:"accountID",typ:a(null,0)},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"creationDate",js:"creationDate",typ:a(null,Date)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)}],!1,{props:f,additional:false})};var f},882:(e,t,r)=>{r.r(t),r.d(t,{Convert:()=>o,typeMap:()=>f});var n=r(675);class o{static toMembershipMemberBranchIDPrefixModel(e){return a(JSON.parse(e),d("MembershipMemberBranchIDPrefixModel"),c)}static membershipMemberBranchIDPrefixModelToJson(e){return JSON.stringify(a(e,d("MembershipMemberBranchIDPrefixModel"),s),null,2)}}function i(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function c(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=f[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:i(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return a(t,n,r)}catch(e){}}return i(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,r))):i("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return i("object",n);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],c=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[i.key]=a(c,i.typ,r,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=a(n[i],t,r,i))})),o}(r(t),t.additional,e):i(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?i("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:i(e,t,n)}(t,e)}}function l(...e){return{unionMembers:e}}function d(e){return{ref:e}}const f={MembershipMemberBranchIDPrefixModel:(u=[{json:"id",js:"id",typ:l(null,0)},{json:"prefix",js:"prefix",typ:l(null,"")},{json:"branchId",js:"branchID",typ:l(null,d("ClientBranchModel"))},{json:"createdBy",js:"createdBy",typ:l(null,0)},{json:"creationDate",js:"creationDate",typ:l(null,Date)},{json:"updatedBy",js:"updatedBy",typ:l(null,0)},{json:"updateDate",js:"updateDate",typ:l(null,Date)}],!1,{props:u,additional:false}),ClientBranchModel:n.typeMap.ClientBranchModel};var u},6224:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientBranches:()=>s});var n=r(8485),o=r(7270),i=r(4492),c=r(3600);function s(e=null){return t=this,r=void 0,a=function*(){const t=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),s=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function o(e){try{c(a.next(e))}catch(e){n(e)}}function i(e){try{c(a.throw(e))}catch(e){n(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(o,i)}c((a=a.apply(t,r||[])).next())}));var t,r,s,a}},30:(e,t,r)=>{r.r(t),r.d(t,{DELETE_MemberBranchIdPrefix:()=>f});var n=r(6455),o=r.n(n),i=r(8485),c=r(7270),s=r(4492),a=r(8967),l=r(3600),d=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}a((n=n.apply(e,t||[])).next())}))};function f(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-branch-prefix/"+e,n={};return o().fire({title:"Remove Member Branch Id Prefix?",text:"You may have members assigned to this prefix. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(r,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new s.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new s.NetWorkCallResponses("delete",r,!0);return n.postForm,n}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}o().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},368:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberBranchIdPrefix:()=>s});var n=r(8485),o=r(7270),i=r(4492),c=r(3600);function s(e=null){return t=this,r=void 0,a=function*(){const t=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-branch-prefix"+(null===e?"":"/"+e),s=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function o(e){try{c(a.next(e))}catch(e){n(e)}}function i(e){try{c(a.throw(e))}catch(e){n(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(o,i)}c((a=a.apply(t,r||[])).next())}));var t,r,s,a}},259:(e,t,r)=>{r.r(t),r.d(t,{POST_MemberBranchIdPrefix:()=>f});var n=r(6455),o=r.n(n),i=r(8485),c=r(7270),s=r(4492),a=r(8967),l=r(3600),d=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}a((n=n.apply(e,t||[])).next())}))};function f(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-branch-prefix",r=document.querySelector('[make-general-posts="member-id-branch-prefix"]'),n=new FormData(r);return o().fire({title:"Add Member Branch Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new s.NetWorkCallResponses("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,a.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&o().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},437:(e,t,r)=>{r.r(t),r.d(t,{PUT_MemberBranchIdPrefix:()=>f});var n=r(6455),o=r.n(n),i=r(8485),c=r(7270),s=r(4492),a=r(8967),l=r(3600),d=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}a((n=n.apply(e,t||[])).next())}))};function f(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-branch-prefix/"+e,n=document.querySelector('[make-general-posts="member-id-branch-prefix"]'),f=new FormData(n);return o().fire({title:"Update Member Branch Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(r,{method:"PUT",body:f,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new s.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,a.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&o().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},433:(e,t,r)=>{r.r(t),r.d(t,{IdBranchPrefixAdd:()=>l}),r(5501);var n=r(5862),o=r(9662),i=(r(3283),r(6413),r(1511),r(789),r(3313),r(5866),r(259)),c=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}a((n=n.apply(e,t||[])).next())}))};let l=class extends n.LitElement{constructor(){super(...arguments),this.CLIENT_ID=0,this.branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return n.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Prefix</h1>
                  <h3 class="h3">Create New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-branch-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${this.branches.map((e=>n.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return a(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,i.POST_MemberBranchIdPrefix)()}))}createRenderRoot(){return this}};l.styles=[n.css`
   :host { display: block; }
  `],c([(0,o.property)({type:Number}),s("design:type",Number)],l.prototype,"CLIENT_ID",void 0),c([(0,o.property)({type:Array}),s("design:type",Array)],l.prototype,"branches",void 0),l=c([(0,o.customElement)("id-branch-prefix-add")],l)},4954:(e,t,r)=>{r.r(t),r.d(t,{IdBranchPrefix:()=>c}),r(9579);var n=r(5862),o=r(9662),i=(r(5633),function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c});let c=class extends n.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this)},new((n=void 0)||(n=Promise))((function(e,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(c,s)}a((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return n.html`
      <id-branch-prefix-view></id-branch-prefix-view>
    `}firstUpdated(){}createRenderRoot(){return this}};c=i([(0,o.customElement)("id-branch-prefix"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],c)},313:(e,t,r)=>{r.r(t),r.d(t,{IdBranchPrefixEdit:()=>d}),r(5501);var n,o=r(5862),i=r(9662),c=(r(3283),r(6413),r(1511),r(789),r(3313),r(5866),r(437)),s=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}a((n=n.apply(e,t||[])).next())}))};let d=class extends o.LitElement{constructor(){super(...arguments),this.prefixId=0,this.currentBranchId=0,this.prefixEdit=[],this.branches=[],this._data=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),console.log({prefixEdit:this.prefixEdit})}))}disconnectedCallback(){}render(){return o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Prefix</h1>
                  <h3 class="h3">Update New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-branch-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${this.branches.map((e=>0===this.prefixEdit.length?o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:e.id===this.prefixEdit[0].branchID.id?(console.log({value:e}),this.currentBranchId!==e.id&&(this.currentBranchId=e.id,this.requestUpdate()),o.html`<mwc-list-item value="${e.id}"  selected>${e.name}</mwc-list-item>`):void 0))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="${0===this.prefixEdit.length?"":this.prefixEdit[0].prefix}" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return l(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,c.PUT_MemberBranchIdPrefix)(this.prefixId)}))}createRenderRoot(){return this}};d.styles=[o.css`
   :host { display: block; }
  `],s([(0,i.property)({type:Number}),a("design:type",Number)],d.prototype,"prefixId",void 0),s([(0,i.property)({type:Number}),a("design:type",Number)],d.prototype,"currentBranchId",void 0),s([(0,i.property)({type:Array}),a("design:type",Array)],d.prototype,"prefixEdit",void 0),s([(0,i.property)({type:Array}),a("design:type",Array)],d.prototype,"branches",void 0),s([(0,i.property)({type:Array}),a("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],d.prototype,"_data",void 0),d=s([(0,i.customElement)("id-branch-prefix-edit")],d)},5633:(e,t,r)=>{r.r(t),r.d(t,{IdBranchPrefixView:()=>m}),r(5501);var n,o=r(5862),i=r(9662),c=(r(3283),r(6413),r(1511),r(4672)),s=(r(433),r(313),r(6224)),a=r(675),l=r(882),d=r(30),f=r(368),u=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}a((n=n.apply(e,t||[])).next())}))};let m=class extends o.LitElement{constructor(){super(),this.prefixId=0,this.currentPrefixId=0,this.prefixEdit=[],this._data=[],this.urlQueryParams=void 0,this._memberPrefixIds=[],this._branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,c.urlQueryParams)(),yield this.getMemberBranchIdPrefix(),yield this.getClientBranches()}))}disconnectedCallback(){}render(){return null===this._memberPrefixIds?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberPrefixIds?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Prefix Id</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}
        <hr />
        <div class="flex justify-end my-2">
          <mwc-button raised label="Add Branch Prefix" class="ml-1 success" icon="add" @click="${this.addNew}"></mwc-button> 
        </div>
        ${this.table}
      `}get form(){return this._memberPrefixIds.length>0?0===this.prefixId?o.html`
          <id-branch-prefix-add .branches="${this._branches}"></id-branch-prefix-add>
        `:(o.html``,o.html``,o.html`<id-branch-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}" .branches="${this._branches}"></id-branch-prefix-edit>`):o.html`
        <id-branch-prefix-add .branches="${this._branches}"></id-branch-prefix-add>
      `}get table(){return this._memberPrefixIds.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member ID Prefix</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${this.getMemberPrefixIds}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberPrefixIds(){return o.html`
      ${this._memberPrefixIds.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.branchID.name} -> <b>${e.prefix}</b>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${e.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `))}
    `}firstUpdated(){}addNew(e){return h(this,void 0,void 0,(function*(){e.preventDefault(),this.prefixId=0,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus()}))}editMemberPrefixId(e){return h(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("edit-this-item"));this.prefixId=t,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus();const r=this._branches;for(const e of this._memberPrefixIds)e.id===this.prefixId&&(this.prefixEdit[0]=e,this._branches=[],setTimeout((()=>{this._branches=r}),100))}))}deleteMemberPrefixId(e){return h(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,d.DELETE_MemberBranchIdPrefix)(t)}))}getMemberBranchIdPrefix(){return h(this,void 0,void 0,(function*(){const e=yield(0,f.GET_MemberBranchIdPrefix)();let t=[];null===e?t.push({id:0,prefix:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>l.Convert.toMembershipMemberBranchIDPrefixModel(JSON.stringify(e))))]),this._memberPrefixIds=[...this._memberPrefixIds,...t]}))}getClientBranches(){return h(this,void 0,void 0,(function*(){const e=yield(0,s.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>a.Convert.toClientBranchModel(JSON.stringify(e))))]),this._branches=[...this._branches,...t]}))}createRenderRoot(){return this}};m.styles=[o.css`
   :host { display: block; }
  `],u([(0,i.property)({type:Number}),p("design:type",Number)],m.prototype,"prefixId",void 0),u([(0,i.property)({type:Number}),p("design:type",Number)],m.prototype,"currentPrefixId",void 0),u([(0,i.property)({type:Array}),p("design:type",Array)],m.prototype,"prefixEdit",void 0),u([(0,i.property)({type:Array}),p("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],m.prototype,"_data",void 0),u([(0,i.property)({type:Object}),p("design:type",Object)],m.prototype,"urlQueryParams",void 0),u([(0,i.property)({type:Array}),p("design:type",Array)],m.prototype,"_memberPrefixIds",void 0),u([(0,i.property)({type:Array}),p("design:type",Array)],m.prototype,"_branches",void 0),m=u([(0,i.customElement)("id-branch-prefix-view"),p("design:paramtypes",[])],m)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_addons_widgets_form_new_select_ts","shared"],(()=>(4954,e(e.s=4954)))),e.O())])}));
//# sourceMappingURL=branch-prefix.js.map