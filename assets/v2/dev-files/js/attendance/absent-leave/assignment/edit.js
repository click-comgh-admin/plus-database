"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/absent-leave/assignment/edit"],{95358:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>s,https_swal_error_format:()=>r});const s="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?s:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>s,urlQueryParamsGet:()=>r,urlQueryParamsJoin:()=>o});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},o=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},17725:(e,t,n)=>{n.r(t),n.d(t,{setActiveBranchIdCookie:()=>i,removeActiveBranchIdCookie:()=>c,getActiveBranchIdCookie:()=>l});var s=n(67052),r=n(21942),o=n(61489);const a="pdb-active-branch",i=e=>{const t=JSON.stringify(e);(0,r.set_cookies)(a,"",-1),(0,r.set_cookies)(a,(0,s.base64Encode)(t),3500)};function c(){(0,r.set_cookies)(a,"",-1)}const l=()=>{if(""===(0,r.get_cookie)(a))return null;{const e=(0,s.base64Decode)((0,r.get_cookie)(a)),t=JSON.parse(e);return(0,o.clientBranchInfo_S)(t)}}},61489:(e,t,n)=>{function s(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.r(t),n.d(t,{ClientBranch_S:()=>s,clientBranchInfo_S:()=>r})},41522:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceAbsentLeaveAssignment:()=>i});var s=n(48485),r=n(87270),o=n(33600),a=n(14492);function i(e=null,t=""){return n=this,i=void 0,l=function*(){const n=(0,o.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,r)}o((l=l.apply(n,i||[])).next())}));var n,i,c,l}},22467:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceAbsentLeaveAssignment:()=>u});var s=n(86455),r=n.n(s),o=n(48485),a=n(87270),i=n(33600),c=n(14492),l=n(8967),d=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,i.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/"+e,s=document.querySelector('[make-general-posts="attendance-absent-leave-assignment"]'),u=new FormData(s);return r().fire({title:"Update Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"PATCH",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},26224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>i});var s=n(48485),r=n(87270),o=n(14492),a=n(33600);function i(e=null){return t=this,n=void 0,c=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),i=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{a(c.next(e))}catch(e){s(e)}}function o(e){try{a(c.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}a((c=c.apply(t,n||[])).next())}));var t,n,i,c}},54173:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveAssignmentEdit:()=>y}),n(95358);var s=n(85862),r=n(59662),o=(n(33590),n(40789),n(23283),n(63313),n(75866),n(33600)),a=n(17725),i=n(26224),c=n(67052),l=n(44672),d=n(87445),u=n(41522),m=n(22467),f=function(e,t,n,s){var r,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};let y=class extends s.LitElement{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.assignmentId=0,this.assignmentIdEnc=null,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._statuses=[],this._assignments=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getAssignmentId(),this.getAssignment(this.assignmentId),yield this.getBranches()}))}disconnectedCallback(){}render(){if(this._assignments.length<1)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(null===this._assignments)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Group </span>: Not Found</h4>
          </div>
        </div>
      `;const e=this._assignments[0];let t=" - ";return t=1===e.memberInfo.accountType?e.memberInfo.middlename.length<1?`${e.memberInfo.firstname} ${e.memberInfo.surname}`:`${e.memberInfo.firstname} ${e.memberInfo.middlename} ${e.memberInfo.surname}`:`${e.memberInfo.organizationName}`,s.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Change Assignment</h1>
                  <h3 class="h3">Update Assignment!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-assignment"
                enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select class="w-full" setSelectedBranchId label="Select Branch" name="_branchId_" id="_branchId_"
                      outlined required>
                      <mwc-list-item value="0">Select Branch</mwc-list-item>
                      ${this._branches.map((t=>{if(t.id===e.statusID.branchID)return s.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Status</h4>
                    <mwc-select class="w-full" setSelectedStatusId label="Select Status" name="statusId" id="statusId"
                      outlined required>
                      <mwc-list-item value="${e.statusID.id}" selected>
                        ${e.statusID.status}
                      </mwc-list-item>
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">From - Date</h4>
                    <mwc-textfield name="fromDate" type="date" class="w-full" id="fromDate" label="Select From - Date"
                      value="${this.getDate(e.fromDate)}" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">To - Date</h4>
                    <mwc-textfield name="toDate" type="date" class="w-full" id="toDate" label="Select To - Date"
                      value="${this.getDate(e.toDate)}" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Member</h4>
                    <mwc-select class="w-full" setSelectedStatusId label="Select Member" name="__memberId__" id="__memberId__"
                      outlined required>
                      <mwc-list-item value="${e.memberID}" selected>
                        ${t}
                      </mwc-list-item>
                    </mwc-select>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">
                      Reason <span class="text-yellow-400">[optional]</span>
                    </h4>
                    <mwc-textarea class="h-96" outlined name="reason" id="reason" label="Enter Reason [optional]"
                      placeholder="Enter Reason [optional]" value="${e.reason}">
                    </mwc-textarea>
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Update" raised class="w-full" @click="${this.submitForm}">
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
    `}getDate(e){return e.toLocaleString("default",{year:"numeric"})+"-"+e.toLocaleString("default",{month:"2-digit"})+"-"+e.toLocaleString("default",{day:"2-digit"})}firstUpdated(){}getAssignmentId(){let e=(0,l.urlQueryParamsGet)("view-assignment"),t=null!==e?(0,c.base64Decode)(e):null;this.assignmentId=Number.isNaN(t)?null:Number(t),this.assignmentIdEnc=(0,c.base64Encode)(String(this.assignmentId),!0)}getAssignment(e){return h(this,void 0,void 0,(function*(){const t=yield(0,u.GET_AttendanceAbsentLeaveAssignment)(e);null!==t&&t.response.success&&"statusId"in t.response.data?this._assignments=[d.Convert.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(t.response.data))]:this._assignments=null}))}getBranches(){return h(this,void 0,void 0,(function*(){const e=yield(0,i.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}submitForm(e){return h(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.PATCH_AttendanceAbsentLeaveAssignment)(this.assignmentId)}))}createRenderRoot(){return this}};y.styles=[s.css`
   :host { display: block; }
  `],f([(0,r.property)({type:Number}),p("design:type",Number)],y.prototype,"startSearchPage",void 0),f([(0,r.property)({type:Number}),p("design:type",Number)],y.prototype,"accountType",void 0),f([(0,r.property)({type:Number}),p("design:type",Number)],y.prototype,"selectedBranch",void 0),f([(0,r.property)({type:Number}),p("design:type",Number)],y.prototype,"assignmentId",void 0),f([(0,r.property)({type:String}),p("design:type",String)],y.prototype,"assignmentIdEnc",void 0),f([(0,r.property)({type:Array}),p("design:type",Array)],y.prototype,"_userLoginInfo",void 0),f([(0,r.property)({type:Array}),p("design:type",Array)],y.prototype,"_activeBranchId",void 0),f([(0,r.property)({type:Array}),p("design:type",Array)],y.prototype,"_memberCategories",void 0),f([(0,r.property)({type:Array}),p("design:type",Array)],y.prototype,"_branches",void 0),f([(0,r.property)({type:Array}),p("design:type",Array)],y.prototype,"_statuses",void 0),f([(0,r.property)({type:Array}),p("design:type",Array)],y.prototype,"_assignments",void 0),y=f([(0,r.customElement)("attendance-absent-leave-assignment-edit"),p("design:paramtypes",[])],y)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_assets_styles_views_admin_register_main_scss","src_addons_interfaces_clients_account_category_index_ts-src_addons_interfaces_location_countr-81861f","src_addons_interfaces_attendance_absent_leave_assignment_index_ts","shared"],(()=>(54173,e(e.s=54173)))),e.O())])}));
//# sourceMappingURL=edit.js.map