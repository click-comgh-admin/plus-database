"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/absent-leave/status/add"],{95358:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>r,https_swal_error_format:()=>o});const r="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?r:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},17725:(e,t,n)=>{n.r(t),n.d(t,{setActiveBranchIdCookie:()=>c,removeActiveBranchIdCookie:()=>i,getActiveBranchIdCookie:()=>l});var r=n(67052),o=n(21942),s=n(61489);const a="pdb-active-branch",c=e=>{const t=JSON.stringify(e);(0,o.set_cookies)(a,"",-1),(0,o.set_cookies)(a,(0,r.base64Encode)(t),3500)};function i(){(0,o.set_cookies)(a,"",-1)}const l=()=>{if(""===(0,o.get_cookie)(a))return null;{const e=(0,r.base64Decode)((0,o.get_cookie)(a)),t=JSON.parse(e);return(0,s.clientBranchInfo_S)(t)}}},61489:(e,t,n)=>{function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.r(t),n.d(t,{ClientBranch_S:()=>r,clientBranchInfo_S:()=>o})},77333:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAbsentLeaveStatus:()=>u});var r=n(86455),o=n.n(r),s=n(48485),a=n(87270),c=n(33600),i=n(14492),l=n(8967),d=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{i(r.next(e))}catch(e){s(e)}}function c(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}i((r=r.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status",n=document.querySelector('[make-general-posts="attendance-absent-leave-status"]'),r=new FormData(n);return o().fire({title:"Create Status?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,l.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&o().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},26224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>c});var r=n(48485),o=n(87270),s=n(14492),a=n(33600);function c(e=null){return t=this,n=void 0,i=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),c=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,r){function o(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(o,s)}a((i=i.apply(t,n||[])).next())}));var t,n,c,i}},22400:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveStatusAdd:()=>h}),n(95358);var r=n(85862),o=n(59662),s=(n(33590),n(40789),n(23283),n(63313),n(33600)),a=n(26224),c=n(17725),i=n(77333),l=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{i(r.next(e))}catch(e){s(e)}}function c(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}i((r=r.apply(e,t||[])).next())}))};let h=class extends r.LitElement{constructor(){super(),this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,c.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,s.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getBranches()}))}disconnectedCallback(){}render(){let e=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),r.html`
    <div class="form-container flex justify-center">
      <div class="app-container- !px-0">
        <div class="app-container--row !px-0">
          <div class="app-container--col-md-12">
            <header class="header warning app-container--col-md-12">
              <label for="" class="label">
                <mwc-icon class="icon">format_strikethrough</mwc-icon>
                <h1 class="h1 !text-red-400">New Status</h1>
                <h3 class="h3">Create Status!</h3>
              </label>
            </header>
            <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-status" enctype="multipart/form-data">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Branch</h4>
                  <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                    name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                    ${1===e?r.html`
                      <mwc-list-item value="0">Select Branch</mwc-list-item>
                      ${this._branches.map((t=>e===t.id?r.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:r.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    `:r.html`
                      ${this._branches.map((t=>{if(t.id===e)return r.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
                    `}
                  </mwc-select>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Status</h4>
                  <mwc-textfield name="status" id="status" label="Enter Status"
                    outlined required>
                  </mwc-textfield>
                </div>
              </div>
    
              <div class="form-input-container">
                <mwc-button label="Create" raised class="w-full" @click="${this.submitForm}">
                </mwc-button>
              </div>
            
              <div class="flex form-input-container items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md">
                <label class="block font-medium text-sm text-gray-600 w-full">
                  ...
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `}branchChange(e){this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}firstUpdated(){}getBranches(){return u(this,void 0,void 0,(function*(){const e=yield(0,a.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}submitForm(e){return u(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,i.POST_AttendanceAbsentLeaveStatus)()}))}createRenderRoot(){return this}};h.styles=[r.css`
   :host { display: block; }
  `],l([(0,o.property)({type:Number}),d("design:type",Number)],h.prototype,"accountType",void 0),l([(0,o.property)({type:Number}),d("design:type",Number)],h.prototype,"selectedBranch",void 0),l([(0,o.property)({type:Array}),d("design:type",Array)],h.prototype,"_userLoginInfo",void 0),l([(0,o.property)({type:Array}),d("design:type",Array)],h.prototype,"_activeBranchId",void 0),l([(0,o.property)({type:Array}),d("design:type",Array)],h.prototype,"_branches",void 0),h=l([(0,o.customElement)("attendance-absent-leave-status-add"),d("design:paramtypes",[])],h)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_admin_register_main_scss","shared"],(()=>(22400,e(e.s=22400)))),e.O())])}));
//# sourceMappingURL=add.js.map