"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/member_categories/edit"],{5501:(e,t,r)=>{r.r(t)},4672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>n,urlQueryParamsJoin:()=>i});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let o=null;for(const t in r)t===e&&(o=r[t]);return o},i=e=>{let t="",r=0;for(const o in e)r+=1,t+=`${r>1?"&":""}${o}=${e[o]}`;return t}},72:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsMemberCategories:()=>l});var o=r(8485),n=r(1942),i=r(7270),s=r(7052),a=r(4492),c=r(3600);function l(e=null,t="client_tokenLogin"){return r=this,l=void 0,m=function*(){const r=String(window.supersecret.unknowable.ops.id),l=String(window.supersecret.unknowable.ops.email);yield(0,c.verifyToken)(l,r,t);const d=(0,s.base64Decode)((0,n.get_cookie)(t)),m=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),u=yield(0,i.http)(m,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new a.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function o(e){try{i(m.next(e))}catch(e){t(e)}}function n(e){try{i(m.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof d?r:new d((function(e){e(r)}))).then(o,n)}i((m=m.apply(r,l||[])).next())}));var r,l,d,m}},6175:(e,t,r)=>{r.r(t),r.d(t,{PUT_MemberGroupingsMemberCategory:()=>p});var o=r(6455),n=r.n(o),i=r(8485),s=r(1942),a=r(7270),c=r(7052),l=r(4492),d=r(8967),m=r(3600),u=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function p(e,t="client_tokenLogin"){return u(this,void 0,void 0,(function*(){const r=String(window.supersecret.unknowable.ops.id),o=String(window.supersecret.unknowable.ops.email);yield(0,m.verifyToken)(o,r,t);const p=(0,c.base64Decode)((0,s.get_cookie)(t)),f=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,y=document.querySelector('[make-general-posts="groupings-member-category"]'),b=new FormData(y);return n().fire({title:"Update Member Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,a.http)(f,{method:"PUT",body:b,headers:{Authorization:"Token "+p}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,y),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,d.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},7319:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesEdit:()=>l}),r(9579);var o=r(3750),n=r(3600),i=r(5862),s=r(9662),a=(r(4695),function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.LitElement{constructor(){super(),(0,o.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,i=function*(){e.connectedCallback.call(this),yield(0,n.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,n){function s(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(s,a)}c((i=i.apply(t,r||[])).next())}));var t,r,o,i}disconnectedCallback(){}render(){return i.html`
      <membership-groupings-member-categories-edit-member-category CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-edit-member-category>
    `}firstUpdated(){}createRenderRoot(){return this}};a([(0,s.property)({type:String}),c("design:type",String)],l.prototype,"email",void 0),a([(0,s.property)({type:Number}),c("design:type",Number)],l.prototype,"mId",void 0),a([(0,s.property)({type:Number}),c("design:type",Number)],l.prototype,"clientId",void 0),l=a([(0,s.customElement)("membership-groupings-member-categories-edit"),c("design:paramtypes",[])],l)},4695:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesEditMemberCategory:()=>u}),r(5501);var o,n=r(5862),i=r(9662),s=(r(3283),r(3313),r(6413),r(1511),r(4672)),a=r(6175),c=r(72),l=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let u=class extends n.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.__memberCategory=null,this.memberCategoryId=0}set _memberCategory(e){this.__memberCategory=e,this.requestUpdate()}get _memberCategory(){return this.__memberCategory}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.urlQueryParams)(),this.getMemberCategoryId(),yield this.getClientMemberCategory()}))}disconnectedCallback(){}render(){return null===this._memberCategory?n.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberCategory?n.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Category</span>: undefined error</h4>
          </div>
        </div>
      `:n.html`
        ${this.form}
      `}get form(){return n.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Member Category</h1>
                  <h3 class="h3">Edit Member Category</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="groupings-member-category">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.memberCategoryField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">

                      ${1===this.memberCategoryId?n.html``:n.html`
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
    `}get memberCategoryField(){let e=null;return e=null!==this._memberCategory&&void 0!==this._memberCategory.data?Array.isArray(this._memberCategory.data)?this._memberCategory.data.length>0?this._memberCategory.data[0]:{id:void 0,category:""}:this._memberCategory.data:{id:void 0,category:""},n.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Member Category</h4>
            <mwc-textfield name="category" type="text" class="w-full" id="category" value="${void 0===e.id?"":e.category}" label="Enter memberCategory Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getMemberCategoryId(){let e=(0,s.urlQueryParamsGet)("member-category-id"),t=null!==e?Number(e):null;this.memberCategoryId=Number.isNaN(t)?null:t}getClientMemberCategory(){return m(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)(this.memberCategoryId);this._memberCategory=null===e?void 0:e.response}))}submitForm(e){return m(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,a.PUT_MemberGroupingsMemberCategory)(this.memberCategoryId)}))}createRenderRoot(){return this}};u.styles=[n.css`
   :host { display: block; }
  `],l([(0,i.property)({type:Number}),d("design:type",Number)],u.prototype,"CLIENT_ID",void 0),l([(0,i.property)({type:Array}),d("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],u.prototype,"_data",void 0),l([(0,i.property)({type:Object}),d("design:type",Object)],u.prototype,"urlQueryParams",void 0),l([(0,i.property)({type:Number}),d("design:type",Number)],u.prototype,"memberCategoryId",void 0),u=l([(0,i.customElement)("membership-groupings-member-categories-edit-member-category"),d("design:paramtypes",[])],u)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(7319,e(e.s=7319)))),e.O())])}));
//# sourceMappingURL=edit.js.map