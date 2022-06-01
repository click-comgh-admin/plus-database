"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/branches/add"],{5501:(e,t,n)=>{n.r(t)},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>r,urlQueryParamsGet:()=>o,urlQueryParamsJoin:()=>s});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},s=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},8677:(e,t,n)=>{n.r(t),n.d(t,{POST_ClientBranch:()=>p});var r=n(6455),o=n.n(r),s=n(8485),c=n(1942),i=n(7270),a=n(7052),l=n(4492),d=n(8967),u=n(3600),f=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function c(e){try{a(r.next(e))}catch(e){s(e)}}function i(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((r=r.apply(e,t||[])).next())}))};function p(e="client_tokenLogin"){return f(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(n,t,e);const r=(0,a.base64Decode)((0,c.get_cookie)(e)),p=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch",m=document.querySelector('[make-general-posts="client-branch"]'),h=new FormData(m);return o().fire({title:"Add Branch?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>f(this,void 0,void 0,(function*(){return yield(0,i.http)(p,{method:"POST",body:h,headers:{Authorization:"Token "+r}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,m),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,d.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&o().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},7446:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesAdd:()=>l}),n(9579);var r=n(3750),o=n(3600),s=n(5862),c=n(9662),i=(n(9295),function(e,t,n,r){var o,s=arguments.length,c=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(s<3?o(c):s>3?o(t,n,c):o(t,n))||c);return s>3&&c&&Object.defineProperty(t,n,c),c}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),(0,r.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function c(e){try{a(s.next(e))}catch(e){o(e)}}function i(e){try{a(s.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,i)}a((s=s.apply(t,n||[])).next())}));var t,n,r,s}disconnectedCallback(){}render(){return s.html`
      <membership-groupings-branches-add-branch CLIENT_ID="${this.clientId}"></membership-groupings-branches-add-branch>
    `}firstUpdated(){}createRenderRoot(){return this}};i([(0,c.property)({type:String}),a("design:type",String)],l.prototype,"email",void 0),i([(0,c.property)({type:Number}),a("design:type",Number)],l.prototype,"mId",void 0),i([(0,c.property)({type:Number}),a("design:type",Number)],l.prototype,"clientId",void 0),l=i([(0,c.customElement)("membership-groupings-branches-add"),a("design:paramtypes",[])],l)},9295:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesAddBranch:()=>u}),n(5501);var r,o=n(5862),s=n(9662),c=(n(3283),n(3313),n(6413),n(1511),n(4672)),i=n(8677),a=function(e,t,n,r){var o,s=arguments.length,c=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(s<3?o(c):s>3?o(t,n,c):o(t,n))||c);return s>3&&c&&Object.defineProperty(t,n,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function c(e){try{a(r.next(e))}catch(e){s(e)}}function i(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((r=r.apply(e,t||[])).next())}))};let u=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,c.urlQueryParams)()}))}disconnectedCallback(){}render(){return o.html`
      ${this.form}
    `}get form(){return o.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Branch</h1>
                  <h3 class="h3">Add Branch</h3>
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
                      <mwc-button label="Add" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
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
    `}get branchField(){return o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,i.POST_ClientBranch)()}))}createRenderRoot(){return this}};u.styles=[o.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],u.prototype,"CLIENT_ID",void 0),a([(0,s.property)({type:Array}),l("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],u.prototype,"_data",void 0),a([(0,s.property)({type:Object}),l("design:type",Object)],u.prototype,"urlQueryParams",void 0),u=a([(0,s.customElement)("membership-groupings-branches-add-branch"),l("design:paramtypes",[])],u)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(7446,e(e.s=7446)))),e.O())])}));
//# sourceMappingURL=add.js.map