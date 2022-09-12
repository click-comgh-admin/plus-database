"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_url_query_params_inde-518ce7"],{9579:(e,t,r)=>{r.r(t)},5501:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>n});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?o:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>n,urlQueryParamsJoin:()=>i});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let o=null;for(const t in r)t===e&&(o=r[t]);return o},i=e=>{let t="",r=0;for(const o in e)r+=1,t+=`${r>1?"&":""}${o}=${e[o]}`;return t}},6101:(e,t,r)=>{r.r(t),r.d(t,{POST_MemberCategoryIdPrefix:()=>f});var o=r(6455),n=r.n(o),i=r(8485),c=r(7270),a=r(4492),s=r(8967),l=r(3600),d=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function f(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix",r=document.querySelector('[make-general-posts="member-id-category-prefix"]'),o=new FormData(r);return n().fire({title:"Add Member Category Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,r),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,s.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5846:(e,t,r)=>{r.r(t),r.d(t,{PUT_MemberCategoryIdPrefix:()=>f});var o=r(6455),n=r.n(o),i=r(8485),c=r(7270),a=r(4492),s=r(8967),l=r(3600),d=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function f(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix/"+e,o=document.querySelector('[make-general-posts="member-id-category-prefix"]'),f=new FormData(o);return n().fire({title:"Update Member Category Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(r,{method:"PUT",body:f,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,o),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,s.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6430:(e,t,r)=>{r.r(t),r.d(t,{IdCategoryPrefixAdd:()=>l}),r(5501);var o=r(5862),n=r(9662),i=(r(3283),r(6413),r(1511),r(789),r(3313),r(5866),r(6101)),c=function(e,t,r,o){var n,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(c=(i<3?n(c):i>3?n(t,r,c):n(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};let l=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return s(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return o.html`
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
              <form method="post" action="#" class="form" make-general-posts="member-id-category-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Category</h4>
                    <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" setSelectedMemberCategoryId label="Select Member Category" outlined required>
                      ${this.memberCategories.map((e=>o.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`))}
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
    `}firstUpdated(){}submitForm(e){return s(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,i.POST_MemberCategoryIdPrefix)()}))}createRenderRoot(){return this}};l.styles=[o.css`
   :host { display: block; }
  `],c([(0,n.property)({type:Number}),a("design:type",Number)],l.prototype,"CLIENT_ID",void 0),c([(0,n.property)({type:Array}),a("design:type",Array)],l.prototype,"memberCategories",void 0),l=c([(0,n.customElement)("id-category-prefix-add"),a("design:paramtypes",[])],l)},6697:(e,t,r)=>{r.r(t),r.d(t,{IdCategoryPrefixEdit:()=>d}),r(5501);var o,n=r(5862),i=r(9662),c=(r(3283),r(6413),r(1511),r(789),r(3313),r(5866),r(5846)),a=function(e,t,r,o){var n,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(c=(i<3?n(c):i>3?n(t,r,c):n(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};let d=class extends n.LitElement{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this.memberCategories=[],this._data=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),console.log({prefixEdit:this.prefixEdit})}))}disconnectedCallback(){}render(){return n.html`
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
              <form method="post" action="#" class="form" make-general-posts="member-id-category-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Category</h4>
                    <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" setSelectedMemberCategoryId label="Select Member Category" outlined required>
                      ${this.memberCategories.map((e=>0===this.prefixEdit.length?n.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`:e.id===this.prefixEdit[0].memberCategoryID.id?n.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:void 0))}
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
    `}firstUpdated(){}submitForm(e){return l(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,c.PUT_MemberCategoryIdPrefix)(this.prefixId)}))}createRenderRoot(){return this}};d.styles=[n.css`
   :host { display: block; }
  `],a([(0,i.property)({type:Number}),s("design:type",Number)],d.prototype,"prefixId",void 0),a([(0,i.property)({type:Array}),s("design:type",Array)],d.prototype,"prefixEdit",void 0),a([(0,i.property)({type:Array}),s("design:type",Array)],d.prototype,"memberCategories",void 0),a([(0,i.property)({type:Array}),s("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],d.prototype,"_data",void 0),d=a([(0,i.customElement)("id-category-prefix-edit"),s("design:paramtypes",[])],d)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_url_query_params_inde-518ce7.js.map