"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6141],{4672:(e,t,r)=>{r.d(t,{O1:()=>n,Jx:()=>o,W3:()=>s});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},s=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},267:(e,t,r)=>{function n(e){return{id:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}r.d(t,{Y:()=>n})},660:(e,t,r)=>{r.d(t,{P:()=>o}),r(2892);var n=r(267);function o(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,n.Y)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},2892:(e,t,r)=>{r.d(t,{c:()=>u});var n=r(771),o=r(7270),s=r(596),i=r(3600);function u(e=null,t=""){return r=this,u=void 0,a=function*(){const r=(0,i.Ie)(),u=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(u,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(n,o)}s((a=a.apply(r,u||[])).next())}));var r,u,c,a}},9605:(e,t,r)=>{r.d(t,{U:()=>u});var n=r(771),o=r(7270),s=r(596),i=r(3600);function u(e=null,t=""){return r=this,u=void 0,a=function*(){const r=(0,i.Ie)(),u=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(u,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(n,o)}s((a=a.apply(r,u||[])).next())}));var r,u,c,a}},4494:(e,t,r)=>{var n=r(9392),o=r(9662),s=r(5713),i=(r(5248),r(3313),r(9261),r(1877),r(2169),r(5866),r(7725)),u=r(6224),c=r(3600),a=r(660),d=r(2892),l=r(9605),p=r(6455),h=r.n(p),f=r(771),g=r(7270),m=r(596),b=r(8967),y=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function u(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}c((n=n.apply(e,t||[])).next())}))},v=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function u(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}c((n=n.apply(e,t||[])).next())}))},w=function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function u(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}c((n=n.apply(e,t||[])).next())}))};let A=class extends n.oi{constructor(){super(),this.userId=0,this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this._branches=[],this._groups=[],this._subgroups=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set clientUserGroupSubgroup(e){this._clientUserGroupSubgroup=e,this.requestUpdate()}get clientUserGroupSubgroup(){return this._clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,i.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,c.Ie)()],yield this.getBranches(),yield this.getGroups(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return"true"===this.edit?("mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,n.dy`
        ${this.groupSubgroup}
      `):n.dy`
        ${this.form}
      `}get groupSubgroup(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),n.dy`
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
    `}get form(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),n.dy`
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
    `}get groupsSubgroups(){let e=[],t=[];const r=this.clientUserGroupSubgroup,n=r.data,o=Array.isArray(n)?n[0]:n,s=r.success;return this._groups.forEach((t=>{let r=!1,n="false";s&&o.group.forEach((e=>{e.id===t.id&&(r=!0,n="true")}));const i={id:t.id,name:t.group,isSelected:n,selected:r};e.includes(i)||e.push(i)})),this._subgroups.forEach((e=>{e=(0,a.P)(e);let r=!1,n="false";s&&o.subgroup.forEach((t=>{t.id===e.id&&(r=!0,n="true")}));const i={id:e.id,name:`${e.groupName} => ${e.subgroup}`,isSelected:n,selected:r};t.includes(i)||t.push(i)})),{groups:e,subgroups:t}}get accessFieldSelectBox(){const e=this.groupsSubgroups,t=e.groups,r=e.subgroups;return n.dy`
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
    `}firstUpdated(){}getBranches(){return _(this,void 0,void 0,(function*(){const e=yield(0,u.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getGroups(){return _(this,void 0,void 0,(function*(){const e=yield(0,d.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._groups=[...this._groups,...t]}))}getGroup(e){return _(this,void 0,void 0,(function*(){const t=yield(0,d.c)(e);if(null===t)return"???";if(t.response.success&&"group"in t.response.data)return t.response.data.group;{let e="",r=t.response.message;return e=Array.isArray(r)?"Unknown Error!":r,e}}))}getSubGroups(){return _(this,void 0,void 0,(function*(){const e=yield(0,l.U)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._subgroups=[...this._subgroups,...t]}))}submitForm(e){return _(this,void 0,void 0,(function*(){if(e.preventDefault(),"true"===this.edit){if(this.isEditable){const e=this.clientUserGroupSubgroup,t=e.data,r=Array.isArray(t)?t[0]:t;e.success&&(yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,c.Ie)(),r=f.t.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup/"+e,n=document.querySelector('[make-general-posts="client-user-group-subgroup"]'),o=new FormData(n);return h().fire({title:"Update user group(s)/ subgroup(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,g.d)(r,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new m.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,b.T)(e);h().showValidationMessage(`${t}`)}return t})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&h().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(r.id))}}else yield function(){return y(this,void 0,void 0,(function*(){const e=(0,c.Ie)(),t=f.t.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup",r=document.querySelector('[make-general-posts="client-user-group-subgroup"]'),n=new FormData(r);return h().fire({title:"Add group(s)/ subgroup(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>y(this,void 0,void 0,(function*(){return yield(0,g.d)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new m.H("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,b.T)(e);h().showValidationMessage(`${t}`)}return t})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&h().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};A.styles=[n.iv`
   :host { display: block; }
  `],w([(0,o.C)({type:Number}),S("design:type",Number)],A.prototype,"userId",void 0),w([(0,o.C)({type:String}),S("design:type",String)],A.prototype,"edit",void 0),w([(0,o.C)({type:Boolean}),S("design:type",Boolean)],A.prototype,"editAccess",void 0),w([(0,o.C)({type:Boolean}),S("design:type",Boolean)],A.prototype,"isEditable",void 0),w([(0,o.C)({type:String}),S("design:type",String)],A.prototype,"page_type",void 0),w([(0,o.C)({type:Array}),S("design:type",Array)],A.prototype,"_branches",void 0),w([(0,o.C)({type:Array}),S("design:type",Array)],A.prototype,"_groups",void 0),w([(0,o.C)({type:Array}),S("design:type",Array)],A.prototype,"_subgroups",void 0),w([(0,o.C)({type:Array}),S("design:type",Array)],A.prototype,"_activeBranchId",void 0),w([(0,o.C)({type:Array}),S("design:type",Array)],A.prototype,"_userLoginInfo",void 0),A=w([(0,s.M)("pdb-admin-user-group-subgroup-form"),S("design:paramtypes",[])],A)}}]);
//# sourceMappingURL=6141.js.map