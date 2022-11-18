"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/group_subgroup/groups/add"],{95358:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>n,https_swal_error_format:()=>o});const n="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?n:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},17725:(e,t,r)=>{r.r(t),r.d(t,{setActiveBranchIdCookie:()=>c,removeActiveBranchIdCookie:()=>a,getActiveBranchIdCookie:()=>l});var n=r(67052),o=r(21942),s=r(61489);const i="pdb-active-branch",c=e=>{const t=JSON.stringify(e);(0,o.set_cookies)(i,"",-1),(0,o.set_cookies)(i,(0,n.base64Encode)(t),3500)};function a(){(0,o.set_cookies)(i,"",-1)}const l=()=>{if(""===(0,o.get_cookie)(i))return null;{const e=(0,n.base64Decode)((0,o.get_cookie)(i)),t=JSON.parse(e);return(0,s.clientBranchInfo_S)(t)}}},61489:(e,t,r)=>{function n(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}r.r(t),r.d(t,{ClientBranch_S:()=>n,clientBranchInfo_S:()=>o})},26224:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientBranches:()=>c});var n=r(48485),o=r(87270),s=r(14492),i=r(33600);function c(e=null){return t=this,r=void 0,a=function*(){const t=(0,i.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),c=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function o(e){try{i(a.next(e))}catch(e){n(e)}}function s(e){try{i(a.throw(e))}catch(e){n(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(o,s)}i((a=a.apply(t,r||[])).next())}));var t,r,c,a}},23262:(e,t,r)=>{r.r(t),r.d(t,{POST_GroupingsGroup:()=>u});var n=r(86455),o=r.n(n),s=r(48485),i=r(87270),c=r(14492),a=r(8967),l=r(33600),d=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{a(n.next(e))}catch(e){s(e)}}function c(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}a((n=n.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group",r=document.querySelector('[make-general-posts="members-groupings-group"]'),n=new FormData(r);return o().fire({title:"Create Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,a.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&o().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},86698:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsGroupSubgroupGroupAdd:()=>p}),r(95358);var n=r(85862),o=r(59662),s=(r(33590),r(40789),r(23283),r(63313),r(75866),r(43629),r(33600)),i=r(17725),c=r(26224),a=r(90072),l=r(23262),d=function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{a(n.next(e))}catch(e){s(e)}}function c(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}a((n=n.apply(e,t||[])).next())}))};let p=class extends n.LitElement{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,s.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){let e=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),n.html`
    <div class="form-container flex justify-center">
      <div class="app-container- !px-0">
        <div class="app-container--row !px-0">
          <div class="app-container--col-md-12">
            <header class="header warning app-container--col-md-12">
              <label for="" class="label">
                <mwc-icon class="icon">format_strikethrough</mwc-icon>
                <h1 class="h1 !text-red-400">New Group</h1>
                <h3 class="h3">Create Group!</h3>
              </label>
            </header>
            <form method="post" action="#" class="form" make-general-posts="members-groupings-group" enctype="multipart/form-data">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Branch</h4>
                  <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                    name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                    ${1===e?n.html`
                      <mwc-list-item value="0">Select Branch</mwc-list-item>
                      ${this._branches.map((t=>e===t.id?n.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:n.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    `:n.html`
                      ${this._branches.map((t=>{if(t.id===e)return n.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
                    `}
                  </mwc-select>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Member Category</h4>
                  <pdb-membership-select-member-type defaultValue="1" 
                    name="memberCategoryId" id="memberCategoryId"
                    label="Select Member Category" outlined required>
                  </pdb-membership-select-member-type>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Group</h4>
                  <mwc-textfield name="group" id="group" label="Enter Group"
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
    `}branchChange(e){this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}firstUpdated(){}getBranches(){return m(this,void 0,void 0,(function*(){const e=yield(0,c.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getClientMemberCategories(){return m(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}submitForm(e){return m(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,l.POST_GroupingsGroup)()}))}createRenderRoot(){return this}};p.styles=[n.css`
   :host { display: block; }
  `],d([(0,o.property)({type:Number}),u("design:type",Number)],p.prototype,"startSearchPage",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],p.prototype,"accountType",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],p.prototype,"selectedBranch",void 0),d([(0,o.property)({type:Array}),u("design:type",Array)],p.prototype,"_userLoginInfo",void 0),d([(0,o.property)({type:Array}),u("design:type",Array)],p.prototype,"_activeBranchId",void 0),d([(0,o.property)({type:Array}),u("design:type",Array)],p.prototype,"_memberCategories",void 0),d([(0,o.property)({type:Array}),u("design:type",Array)],p.prototype,"_branches",void 0),p=d([(0,o.customElement)("membership-groupings-group_subgroup-group-add"),u("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_view_membership_members_select-member-type_index_ts","src_assets_styles_views_admin_register_main_scss","shared"],(()=>(86698,e(e.s=86698)))),e.O())])}));
//# sourceMappingURL=add.js.map