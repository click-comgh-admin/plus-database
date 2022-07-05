"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_admin_user_form_group_subgroup_ts"],{3753:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>n});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?o:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},267:(e,t,r)=>{function o(e){return{id:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}r.r(t),r.d(t,{GroupingsMemberCategories_S:()=>o})},660:(e,t,r)=>{r.r(t),r.d(t,{GroupingsSubGroup_S:()=>n}),r(2892);var o=r(267);function n(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,o.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},6224:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientBranches:()=>u});var o=r(8485),n=r(7270),s=r(4492),i=r(3600);function u(e=null){return t=this,r=void 0,a=function*(){const t=(0,i.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),u=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,o){function n(e){try{i(a.next(e))}catch(e){o(e)}}function s(e){try{i(a.throw(e))}catch(e){o(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof u?r:new u((function(e){e(r)}))).then(n,s)}i((a=a.apply(t,r||[])).next())}));var t,r,u,a}},8802:(e,t,r)=>{r.r(t),r.d(t,{POST_ClientUserGroupSubgroup:()=>d});var o=r(6455),n=r.n(o),s=r(8485),i=r(7270),u=r(4492),a=r(8967),c=r(3600),l=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function u(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}a((o=o.apply(e,t||[])).next())}))};function d(){return l(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup",r=document.querySelector('[make-general-posts="client-user-group-subgroup"]'),o=new FormData(r);return n().fire({title:"Add group(s)/ subgroup(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>l(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new u.NetWorkCallResponses("post",e,!1,r),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5667:(e,t,r)=>{r.r(t),r.d(t,{PUT_ClientUserGroupSubgroup:()=>d});var o=r(6455),n=r.n(o),s=r(8485),i=r(7270),u=r(4492),a=r(8967),c=r(3600),l=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function u(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}a((o=o.apply(e,t||[])).next())}))};function d(e){return l(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup/"+e,o=document.querySelector('[make-general-posts="client-user-group-subgroup"]'),d=new FormData(o);return n().fire({title:"Update user group(s)/ subgroup(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,i.http)(r,{method:"PUT",body:d,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new u.NetWorkCallResponses("post",e,!1,o),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2892:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsGroups:()=>u});var o=r(8485),n=r(7270),s=r(4492),i=r(3600);function u(e=null){return t=this,r=void 0,a=function*(){const t=(0,i.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),u=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,o){function n(e){try{i(a.next(e))}catch(e){o(e)}}function s(e){try{i(a.throw(e))}catch(e){o(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof u?r:new u((function(e){e(r)}))).then(n,s)}i((a=a.apply(t,r||[])).next())}));var t,r,u,a}},9605:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsSubGroups:()=>u});var o=r(8485),n=r(7270),s=r(4492),i=r(3600);function u(e=null){return t=this,r=void 0,a=function*(){const t=(0,i.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e),u=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,o){function n(e){try{i(a.next(e))}catch(e){o(e)}}function s(e){try{i(a.throw(e))}catch(e){o(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof u?r:new u((function(e){e(r)}))).then(n,s)}i((a=a.apply(t,r||[])).next())}));var t,r,u,a}},9958:(e,t,r)=>{r.r(t),r.d(t,{PdbAdminUserGroupSubgroupForm:()=>m}),r(3753);var o=r(5862),n=r(9662),s=(r(3283),r(3313),r(789),r(5474),r(6163),r(5866),r(7725)),i=r(6224),u=r(3600),a=r(660),c=r(2892),l=r(9605),d=r(8802),p=r(5667),h=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function u(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}a((o=o.apply(e,t||[])).next())}))};let m=class extends o.LitElement{constructor(){super(),this.userId=0,this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this._branches=[],this._groups=[],this._subgroups=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set clientUserGroupSubgroup(e){this._clientUserGroupSubgroup=e,this.requestUpdate()}get clientUserGroupSubgroup(){return this._clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,s.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,u.getUserLoginInfoCookie)()],yield this.getBranches(),yield this.getGroups(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return"true"===this.edit?("mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,o.html`
        ${this.groupSubgroup}
      `):o.html`
        ${this.form}
      `}get groupSubgroup(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Group(s)/ Sub-Group(s)</h1>
                  <h3 class="h3">Update Admin User Group(s)/ Sub-Group(s)!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user-group-subgroup" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.accessFieldSelectBox}
                  <div class="col-md-12 col-lg-8">
                    <input type="hidden" name="clientId" id="clientId" value="${e}" />
                    <input type="hidden" name="userId" id="userId" value="${this.userId}" />
                    <div class="form-input-container">
                      <mwc-button label="Update Group(s)/ Subgroup(s)" raised class="button" @click="${this.submitForm}">
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
    `}get form(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Group(s)/ Sub-Group(s)</h1>
                  <h3 class="h3">Add Admin User Group(s)/ Sub-Group(s)!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user-group-subgroup"
                enctype="multipart/form-data">
                <div class="row justify-content-center">
      
                  ${this.accessFieldSelectBox}
                  <div class="col-md-12 col-lg-8">
                    <input type="hidden" name="clientId" id="clientId" value="${e}" />
                    <input type="hidden" name="userId" id="userId" value="${this.userId}" />
                    <div class="form-input-container">
                      <mwc-button label="Add Group(s)/ Sub-Group(s)" raised class="button" @click="${this.submitForm}">
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
    `}get groupsSubgroups(){let e=[],t=[];const r=this.clientUserGroupSubgroup,o=r.data,n=Array.isArray(o)?o[0]:o,s=r.success;return this._groups.forEach((t=>{let r=!1,o="false";s&&n.group.forEach((e=>{e.id===t.id&&(r=!0,o="true")}));const i={id:t.id,name:t.group,isSelected:o,selected:r};e.includes(i)||e.push(i)})),this._subgroups.forEach((e=>{e=(0,a.GroupingsSubGroup_S)(e);let r=!1,o="false";s&&n.subgroup.forEach((t=>{t.id===e.id&&(r=!0,o="true")}));const i={id:e.id,name:`${e.groupName} => ${e.subgroup}`,isSelected:o,selected:r};t.includes(i)||t.push(i)})),{groups:e,subgroups:t}}get accessFieldSelectBox(){const e=this.groupsSubgroups,t=e.groups,r=e.subgroups;return o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select User Group(s)</h4>
        <select-input name="group" multiple class="w-full" id="group" label="Select User Group(s)" .options="${t}"
          outlined required>
        </select-input>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select User Sub-Group(s)</h4>
        <select-input name="subgroup" multiple class="w-full" id="subgroup" label="Select User Sub-Group(s)"
          .options="${r}" outlined required>
        </select-input>
      </div>
    `}firstUpdated(){}getBranches(){return f(this,void 0,void 0,(function*(){const e=yield(0,i.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getGroups(){return f(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsGroups)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._groups=[...this._groups,...t]}))}getGroup(e){return f(this,void 0,void 0,(function*(){const t=yield(0,c.GET_MemberGroupingsGroups)(e);if(null===t)return"???";if(t.response.success&&"group"in t.response.data)return t.response.data.group;{let e="",r=t.response.message;return e=Array.isArray(r)?"Unknown Error!":r,e}}))}getSubGroups(){return f(this,void 0,void 0,(function*(){const e=yield(0,l.GET_MemberGroupingsSubGroups)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._subgroups=[...this._subgroups,...t]}))}submitForm(e){return f(this,void 0,void 0,(function*(){if(e.preventDefault(),"true"===this.edit){if(this.isEditable){const e=this.clientUserGroupSubgroup,t=e.data,r=Array.isArray(t)?t[0]:t;e.success&&(yield(0,p.PUT_ClientUserGroupSubgroup)(r.id))}}else yield(0,d.POST_ClientUserGroupSubgroup)()}))}createRenderRoot(){return this}};m.styles=[o.css`
   :host { display: block; }
  `],h([(0,n.property)({type:Number}),g("design:type",Number)],m.prototype,"userId",void 0),h([(0,n.property)({type:String}),g("design:type",String)],m.prototype,"edit",void 0),h([(0,n.property)({type:Boolean}),g("design:type",Boolean)],m.prototype,"editAccess",void 0),h([(0,n.property)({type:Boolean}),g("design:type",Boolean)],m.prototype,"isEditable",void 0),h([(0,n.property)({type:String}),g("design:type",String)],m.prototype,"page_type",void 0),h([(0,n.property)({type:Array}),g("design:type",Array)],m.prototype,"_branches",void 0),h([(0,n.property)({type:Array}),g("design:type",Array)],m.prototype,"_groups",void 0),h([(0,n.property)({type:Array}),g("design:type",Array)],m.prototype,"_subgroups",void 0),h([(0,n.property)({type:Array}),g("design:type",Array)],m.prototype,"_activeBranchId",void 0),h([(0,n.property)({type:Array}),g("design:type",Array)],m.prototype,"_userLoginInfo",void 0),m=h([(0,n.customElement)("pdb-admin-user-group-subgroup-form"),g("design:paramtypes",[])],m)}}]);
//# sourceMappingURL=src_view_admin_user_form_group_subgroup_ts.js.map