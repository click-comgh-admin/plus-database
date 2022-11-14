"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/id-prefix/member-prefix"],{69579:(e,t,r)=>{r.r(t)},45501:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>n,https_swal_error_format:()=>o});const n="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?n:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},44672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>o,urlQueryParamsJoin:()=>i});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},i=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},7967:(e,t,r)=>{r.r(t),r.d(t,{Convert:()=>i,typeMap:()=>f});var n=r(12761),o=r(5102);class i{static toClientInfoModel(e){return l(JSON.parse(e),u("ClientInfoModel"),a)}static clientInfoModelToJson(e){return JSON.stringify(l(e,u("ClientInfoModel"),c),null,2)}}function s(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function a(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function c(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=f[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:s(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return l(t,n,r)}catch(e){}}return s(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,r))):s("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return s("object",n);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[i.key]=l(s,i.typ,r,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=l(n[i],t,r,i))})),o}(r(t),t.additional,e):s(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?s("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:s(e,t,n)}(t,e)}}function d(...e){return{unionMembers:e}}function u(e){return{ref:e}}const f={ClientInfoModel:(p=[{json:"id",js:"id",typ:d(null,0)},{json:"name",js:"name",typ:d(null,"")},{json:"accountType",js:"accountType",typ:d(null,0)},{json:"country",js:"country",typ:d(null,"")},{json:"stateProvince",js:"stateProvince",typ:d(null,"")},{json:"applicantFirstname",js:"applicantFirstname",typ:d(null,"")},{json:"applicantSurname",js:"applicantSurname",typ:d(null,"")},{json:"applicantGender",js:"applicantGender",typ:d(null,0)},{json:"applicantPhone",js:"applicantPhone",typ:d(null,"")},{json:"applicantEmail",js:"applicantEmail",typ:d(null,"")},{json:"applicantDesignationRole",js:"applicantDesignationRole",typ:d(null,0)},{json:"region",js:"region",typ:d(null,0)},{json:"district",js:"district",typ:d(null,0)},{json:"constituency",js:"constituency",typ:d(null,0)},{json:"community",js:"community",typ:d(null,"")},{json:"subscriptionDuration",js:"subscriptionDuration",typ:d(null,"")},{json:"subscriptionDate",js:"subscriptionDate",typ:d(null,Date)},{json:"subscriptionFee",js:"subscriptionFee",typ:d(null,"")},{json:"logo",js:"logo",typ:d(null,"")},{json:"status",js:"status",typ:d(null,0)},{json:"archive",js:"archive",typ:d(null,0)},{json:"accountCategory",js:"accountCategory",typ:d(null,u("ClientAccountCategoryModel"))},{json:"website",js:"website",typ:d(null,null)},{json:"creationDate",js:"creationDate",typ:d(null,Date)},{json:"updatedBy",js:"updatedBy",typ:d(null,0)},{json:"updateDate",js:"updateDate",typ:d(null,Date)},{json:"countryInfo",js:"countryInfo",typ:d(null,(m=u("LocationCountryModel"),{arrayItems:m}))}],!1,{props:p,additional:false}),LocationCountryModel:n.typeMap.LocationCountryModel,ClientAccountCategoryModel:o.typeMap.ClientAccountCategoryModel};var p,m},19722:(e,t,r)=>{r.r(t),r.d(t,{Convert:()=>s,typeMap:()=>p});var n=r(7967),o=r(12761),i=r(5102);class s{static toMembershipMemberIDPrefixModel(e){return d(JSON.parse(e),f("MembershipMemberIDPrefixModel"),c)}static membershipMemberIDPrefixModelToJson(e){return JSON.stringify(d(e,f("MembershipMemberIDPrefixModel"),l),null,2)}}function a(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function c(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function l(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function d(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=p[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:a(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return d(t,n,r)}catch(e){}}return a(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>d(t,e,r))):a("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return a("object",n);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[i.key]=d(s,i.typ,r,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=d(n[i],t,r,i))})),o}(r(t),t.additional,e):a(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?a("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:a(e,t,n)}(t,e)}}function u(...e){return{unionMembers:e}}function f(e){return{ref:e}}const p={MembershipMemberIDPrefixModel:(m=[{json:"id",js:"id",typ:u(null,0)},{json:"clientId",js:"clientID",typ:u(null,f("ClientInfoModel"))},{json:"prefix",js:"prefix",typ:u(null,"")},{json:"lastId",js:"lastID",typ:u(null,0)},{json:"createdBy",js:"createdBy",typ:u(null,0)},{json:"updatedBy",js:"updatedBy",typ:u(null,0)},{json:"updateDate",js:"updateDate",typ:u(null,Date)},{json:"creationDate",js:"creationDate",typ:u(null,Date)}],!1,{props:m,additional:false}),ClientInfoModel:n.typeMap.ClientInfoModel,LocationCountryModel:o.typeMap.LocationCountryModel,ClientAccountCategoryModel:i.typeMap.ClientAccountCategoryModel};var m},75259:(e,t,r)=>{r.r(t),r.d(t,{DELETE_MemberIdPrefix:()=>u});var n=r(86455),o=r.n(n),i=r(48485),s=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix/"+e,n={};return o().fire({title:"Remove Member Id Prefix?",text:"You may have members assigned to this prefix. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(r,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new a.NetWorkCallResponses("delete",r,!0);return n.postForm,n}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}o().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},26419:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberIdPrefix:()=>a});var n=r(48485),o=r(87270),i=r(14492),s=r(33600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix"+(null===e?"":"/"+e),a=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function i(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(o,i)}s((c=c.apply(t,r||[])).next())}));var t,r,a,c}},79519:(e,t,r)=>{r.r(t),r.d(t,{POST_MemberIdPrefix:()=>u});var n=r(86455),o=r.n(n),i=r(48485),s=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix",r=document.querySelector('[make-general-posts="member-id-prefix"]'),n=new FormData(r);return o().fire({title:"Add Member Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&o().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},97359:(e,t,r)=>{r.r(t),r.d(t,{PUT_MemberIdPrefix:()=>u});var n=r(86455),o=r.n(n),i=r(48485),s=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix/"+e,n=document.querySelector('[make-general-posts="member-id-prefix"]'),u=new FormData(n);return o().fire({title:"Update Member Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(r,{method:"PUT",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&o().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},19085:(e,t,r)=>{r.r(t),r.d(t,{IdMemberPrefixAdd:()=>d}),r(45501);var n,o=r(85862),i=r(59662),s=(r(23283),r(16413),r(51511),r(40789),r(63313),r(75866),r(79519)),a=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};let d=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return o.html`
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
              <form method="post" action="#" class="form" make-general-posts="member-id-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
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
    `}firstUpdated(){}submitForm(e){return l(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,s.POST_MemberIdPrefix)()}))}createRenderRoot(){return this}};d.styles=[o.css`
   :host { display: block; }
  `],a([(0,i.property)({type:Number}),c("design:type",Number)],d.prototype,"CLIENT_ID",void 0),a([(0,i.property)({type:Array}),c("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],d.prototype,"_data",void 0),d=a([(0,i.customElement)("id-member-prefix-add"),c("design:paramtypes",[])],d)},88787:(e,t,r)=>{r.r(t),r.d(t,{IdMemberPrefixEdit:()=>d}),r(45501);var n,o=r(85862),i=r(59662),s=(r(23283),r(16413),r(51511),r(40789),r(63313),r(75866),r(97359)),a=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};let d=class extends o.LitElement{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),console.log({prefixEdit:this.prefixEdit})}))}disconnectedCallback(){}render(){return o.html`
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
              <form method="post" action="#" class="form" make-general-posts="member-id-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
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
    `}firstUpdated(){}submitForm(e){return l(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,s.PUT_MemberIdPrefix)(this.prefixId)}))}createRenderRoot(){return this}};d.styles=[o.css`
   :host { display: block; }
  `],a([(0,i.property)({type:Number}),c("design:type",Number)],d.prototype,"prefixId",void 0),a([(0,i.property)({type:Array}),c("design:type",Array)],d.prototype,"prefixEdit",void 0),a([(0,i.property)({type:Array}),c("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],d.prototype,"_data",void 0),d=a([(0,i.customElement)("id-member-prefix-edit"),c("design:paramtypes",[])],d)},91939:(e,t,r)=>{r.r(t),r.d(t,{IdMemberPrefix:()=>s}),r(69579);var n=r(85862),o=r(59662),i=(r(80910),function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s});let s=class extends n.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this)},new((n=void 0)||(n=Promise))((function(e,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}c((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return n.html`
      <id-member-prefix-view></id-member-prefix-view>
    `}firstUpdated(){}createRenderRoot(){return this}};s=i([(0,o.customElement)("id-member-prefix"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],s)},80910:(e,t,r)=>{r.r(t),r.d(t,{IdMemberPrefixView:()=>p}),r(45501);var n,o=r(85862),i=r(59662),s=(r(23283),r(16413),r(51511),r(44672)),a=(r(19085),r(88787),r(26419)),c=r(19722),l=r(75259),d=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};let p=class extends o.LitElement{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[],this.urlQueryParams=void 0,this._memberPrefixIds=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.urlQueryParams)(),yield this.getMemberIdPrefix()}))}disconnectedCallback(){}render(){return null===this._memberPrefixIds?o.html`
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
        ${this.table}
      `}get form(){return this._memberPrefixIds.length>0?o.html`
        <id-member-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}"></id-member-prefix-edit>
      `:o.html`
        <id-member-prefix-add></id-member-prefix-add>
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
              ${e.prefix}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${e.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `))}
    `}firstUpdated(){}editMemberPrefixId(e){return f(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("edit-this-item"));this.prefixId=t,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus();for(const e of this._memberPrefixIds)e.id===this.prefixId&&(this.prefixEdit[0]=e)}))}deleteMemberPrefixId(e){return f(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,l.DELETE_MemberIdPrefix)(t)}))}getMemberIdPrefix(){return f(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberIdPrefix)();let t=[];if(null===e)t.push({id:0,prefix:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const r=e.response.data.map((e=>c.Convert.toMembershipMemberIDPrefixModel(JSON.stringify(e))));console.log({DATA:r}),t=[...r]}this._memberPrefixIds=[...this._memberPrefixIds,...t]}))}createRenderRoot(){return this}};p.styles=[o.css`
   :host { display: block; }
  `],d([(0,i.property)({type:Number}),u("design:type",Number)],p.prototype,"prefixId",void 0),d([(0,i.property)({type:Array}),u("design:type",Array)],p.prototype,"prefixEdit",void 0),d([(0,i.property)({type:Array}),u("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],p.prototype,"_data",void 0),d([(0,i.property)({type:Object}),u("design:type",Object)],p.prototype,"urlQueryParams",void 0),d([(0,i.property)({type:Array}),u("design:type",Array)],p.prototype,"_memberPrefixIds",void 0),p=d([(0,i.customElement)("id-member-prefix-view"),u("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_addons_interfaces_clients_account_category_index_ts-src_addons_interfaces_location_countr-81861f","shared"],(()=>(91939,e(e.s=91939)))),e.O())])}));
//# sourceMappingURL=member-prefix.js.map