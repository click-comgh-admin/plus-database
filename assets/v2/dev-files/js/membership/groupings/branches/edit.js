"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/branches/edit"],{5501:(e,t,n)=>{n.r(t)},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>r,urlQueryParamsGet:()=>o,urlQueryParamsJoin:()=>i});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},i=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},6224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>l});var r=n(8485),o=n(1942),i=n(7270),s=n(7052),c=n(4492),a=n(3600);function l(e=null,t="client_tokenLogin"){return n=this,l=void 0,u=function*(){const n=String(window.supersecret.unknowable.ops.id),l=String(window.supersecret.unknowable.ops.email);yield(0,a.verifyToken)(l,n,t);const d=(0,s.base64Decode)((0,o.get_cookie)(t)),u=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),h=yield(0,i.http)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new c.NetWorkCallResponses("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new c.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{i(u.next(e))}catch(e){t(e)}}function o(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,o)}i((u=u.apply(n,l||[])).next())}));var n,l,d,u}},4273:(e,t,n)=>{n.r(t),n.d(t,{PUT_ClientBranch:()=>p});var r=n(6455),o=n.n(r),i=n(8485),s=n(1942),c=n(7270),a=n(7052),l=n(4492),d=n(8967),u=n(3600),h=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))};function p(e,t="client_tokenLogin"){return h(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(r,n,t);const p=(0,a.base64Decode)((0,s.get_cookie)(t)),f=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch/"+e,m=document.querySelector('[make-general-posts="client-branch"]'),b=new FormData(m);return o().fire({title:"Update Branch?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,c.http)(f,{method:"PUT",body:b,headers:{Authorization:"Token "+p}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,m),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,d.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&o().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2696:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesEdit:()=>l}),n(9579);var r=n(3750),o=n(3600),i=n(5862),s=n(9662),c=(n(1039),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.LitElement{constructor(){super(),(0,r.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{a(i.next(e))}catch(e){o(e)}}function c(e){try{a(i.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,c)}a((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){return i.html`
      <membership-groupings-branches-edit-branch CLIENT_ID="${this.clientId}"></membership-groupings-branches-edit-branch>
    `}firstUpdated(){}createRenderRoot(){return this}};c([(0,s.property)({type:String}),a("design:type",String)],l.prototype,"email",void 0),c([(0,s.property)({type:Number}),a("design:type",Number)],l.prototype,"mId",void 0),c([(0,s.property)({type:Number}),a("design:type",Number)],l.prototype,"clientId",void 0),l=c([(0,s.customElement)("membership-groupings-branches-edit"),a("design:paramtypes",[])],l)},1039:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesEditBranch:()=>h}),n(5501);var r,o=n(5862),i=n(9662),s=(n(3283),n(3313),n(6413),n(1511),n(4672)),c=n(6224),a=n(4273),l=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))};let h=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.__branch=null,this.branchId=0}set _branch(e){this.__branch=e,this.requestUpdate()}get _branch(){return this.__branch}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.urlQueryParams)(),this.getBranchId(),yield this.getClientBranch()}))}disconnectedCallback(){}render(){return null===this._branch?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._branch?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Branch</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
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
                      ${1===this.branchId?o.html``:o.html`
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
    `}get branchField(){let e=null;return e=null!==this._branch&&void 0!==this._branch.data?Array.isArray(this._branch.data)?this._branch.data.length>0?this._branch.data[0]:{id:void 0,name:""}:this._branch.data:{id:void 0,name:""},o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="${void 0===e.id?"":e.name}" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getBranchId(){let e=(0,s.urlQueryParamsGet)("branch-id"),t=null!==e?Number(e):null;this.branchId=Number.isNaN(t)?null:t}getClientBranch(){return u(this,void 0,void 0,(function*(){const e=yield(0,c.GET_ClientBranches)(this.branchId);this._branch=null===e?void 0:e.response}))}submitForm(e){return u(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,a.PUT_ClientBranch)(this.branchId)}))}createRenderRoot(){return this}};h.styles=[o.css`
   :host { display: block; }
  `],l([(0,i.property)({type:Number}),d("design:type",Number)],h.prototype,"CLIENT_ID",void 0),l([(0,i.property)({type:Array}),d("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],h.prototype,"_data",void 0),l([(0,i.property)({type:Object}),d("design:type",Object)],h.prototype,"urlQueryParams",void 0),l([(0,i.property)({type:Number}),d("design:type",Number)],h.prototype,"branchId",void 0),h=l([(0,i.customElement)("membership-groupings-branches-edit-branch"),d("design:paramtypes",[])],h)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(2696,e(e.s=2696)))),e.O())])}));
//# sourceMappingURL=edit.js.map