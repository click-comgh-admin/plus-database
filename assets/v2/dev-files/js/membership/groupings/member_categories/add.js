"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/member_categories/add"],{5501:(e,t,r)=>{r.r(t)},4672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>n,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let o=null;for(const t in r)t===e&&(o=r[t]);return o},s=e=>{let t="",r=0;for(const o in e)r+=1,t+=`${r>1?"&":""}${o}=${e[o]}`;return t}},1438:(e,t,r)=>{r.r(t),r.d(t,{POST_MemberGroupingsMemberCategory:()=>f});var o=r(6455),n=r.n(o),s=r(8485),i=r(1942),c=r(7270),a=r(7052),l=r(4492),d=r(8967),u=r(3600),m=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}a((o=o.apply(e,t||[])).next())}))};function f(e="client_tokenLogin"){return m(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(r,t,e);const o=(0,a.base64Decode)((0,i.get_cookie)(e)),f=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category",p=document.querySelector('[make-general-posts="groupings-member-category"]'),b=new FormData(p);return n().fire({title:"Add Member Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,c.http)(f,{method:"POST",body:b,headers:{Authorization:"Token "+o}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,p),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,d.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},4924:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesAdd:()=>l}),r(9579);var o=r(3750),n=r(3600),s=r(5862),i=r(9662),c=(r(9489),function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),(0,o.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,s=function*(){e.connectedCallback.call(this),yield(0,n.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{a(s.next(e))}catch(e){n(e)}}function c(e){try{a(s.throw(e))}catch(e){n(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(i,c)}a((s=s.apply(t,r||[])).next())}));var t,r,o,s}disconnectedCallback(){}render(){return s.html`
      <membership-groupings-member-categories-add-member-category CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-add-member-category>
    `}firstUpdated(){}createRenderRoot(){return this}};c([(0,i.property)({type:String}),a("design:type",String)],l.prototype,"email",void 0),c([(0,i.property)({type:Number}),a("design:type",Number)],l.prototype,"mId",void 0),c([(0,i.property)({type:Number}),a("design:type",Number)],l.prototype,"clientId",void 0),l=c([(0,i.customElement)("membership-groupings-member-categories-add"),a("design:paramtypes",[])],l)},9489:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesAddMemberCategory:()=>u}),r(5501);var o,n=r(5862),s=r(9662),i=(r(3283),r(3313),r(6413),r(1511),r(4672)),c=r(1438),a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}a((o=o.apply(e,t||[])).next())}))};let u=class extends n.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,i.urlQueryParams)()}))}disconnectedCallback(){}render(){return n.html`
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
                  <h3 class="h3">Add Member Category</h3>
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
    `}get memberCategoryField(){return n.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Member Category</h4>
            <mwc-textfield name="category" type="text" class="w-full" id="category" value="" label="Enter member-category Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,c.POST_MemberGroupingsMemberCategory)()}))}createRenderRoot(){return this}};u.styles=[n.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],u.prototype,"CLIENT_ID",void 0),a([(0,s.property)({type:Array}),l("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],u.prototype,"_data",void 0),a([(0,s.property)({type:Object}),l("design:type",Object)],u.prototype,"urlQueryParams",void 0),u=a([(0,s.customElement)("membership-groupings-member-categories-add-member-category"),l("design:paramtypes",[])],u)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(4924,e(e.s=4924)))),e.O())])}));
//# sourceMappingURL=add.js.map