"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["admin/user/view"],{3029:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>s,https_swal_error_format:()=>a});const s="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",a=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?s:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>s,urlQueryParamsGet:()=>a,urlQueryParamsJoin:()=>i});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},a=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let s=null;for(const t in r)t===e&&(s=r[t]);return s},i=e=>{let t="",r=0;for(const s in e)r+=1,t+=`${r>1?"&":""}${s}=${e[s]}`;return t}},2378:(e,t,r)=>{r.r(t),r.d(t,{ClientUserGroupSubgroup_S:()=>i});var s=r(3437),a=r(660);function i(e){let t=[],r=[],i={};return void 0!==e&&("group"in e&&Array.isArray(e.group)&&(t=e.group.map((e=>(0,s.GroupingsGroup_S)(e)))),"subgroup"in e&&Array.isArray(e.subgroup)&&(r=e.subgroup.map((e=>(0,a.GroupingsSubGroup_S)(e)))),i={id:Number(e.id),clientId:Number(e.clientId),userId:Number(e.userId),group:t,subgroup:r,date:new Date(e.date)}),i}},4360:(e,t,r)=>{function s(e){return{id:Number(e.id),firstname:String(e.firstname),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),role:Number(e.role),accountId:Number(e.accountId),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login)}}r.r(t),r.d(t,{ClientUsers_S:()=>s})},3437:(e,t,r)=>{r.r(t),r.d(t,{GroupingsGroup_S:()=>a});var s=r(267);function a(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,s.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},267:(e,t,r)=>{function s(e){return{id:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}r.r(t),r.d(t,{GroupingsMemberCategories_S:()=>s})},660:(e,t,r)=>{r.r(t),r.d(t,{GroupingsSubGroup_S:()=>a}),r(2892);var s=r(267);function a(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,s.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},6948:(e,t,r)=>{r.r(t),r.d(t,{DELETE_ClientUser:()=>u});var s=r(6455),a=r.n(s),i=r(8485),l=r(7270),o=r(4492),n=r(8967),c=r(3600),d=function(e,t,r,s){return new(r||(r=Promise))((function(a,i){function l(e){try{n(s.next(e))}catch(e){i(e)}}function o(e){try{n(s.throw(e))}catch(e){i(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,o)}n((s=s.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,s={};return a().fire({title:"Remove User?",text:"User will no longer be able to login. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,l.http)(r,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,n.https_swal_error_format)(e);a().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const s=new o.NetWorkCallResponses("delete",r,!0);return s.postForm,s}})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}a().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8474:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientUserGroupSubgroup:()=>o});var s=r(8485),a=r(7270),i=r(4492),l=r(3600);function o(e=null,t=""){return r=this,o=void 0,c=function*(){const r=(0,l.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup"+(null===e?"":"/"+e)+t,n=yield(0,a.http)(o,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new i.NetWorkCallResponses("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,t){function s(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}i((c=c.apply(r,o||[])).next())}));var r,o,n,c}},6262:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientUsers:()=>o});var s=r(8485),a=r(7270),i=r(4492),l=r(3600);function o(e=null,t=""){return r=this,o=void 0,c=function*(){const r=(0,l.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,n=yield(0,a.http)(o,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new i.NetWorkCallResponses("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,t){function s(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}i((c=c.apply(r,o||[])).next())}));var r,o,n,c}},4728:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientPageAccess:()=>o});var s=r(8485),a=r(7270),i=r(4492),l=r(3600);function o(e=null,t=""){return r=this,o=void 0,c=function*(){const r=(0,l.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access/pages"+(null===e?"":"/"+e)+t,n=yield(0,a.http)(o,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new i.NetWorkCallResponses("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,t){function s(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}i((c=c.apply(r,o||[])).next())}));var r,o,n,c}},2892:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsGroups:()=>o});var s=r(8485),a=r(7270),i=r(4492),l=r(3600);function o(e=null){return t=this,r=void 0,n=function*(){const t=(0,l.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),o=yield(0,a.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,s){function a(e){try{l(n.next(e))}catch(e){s(e)}}function i(e){try{l(n.throw(e))}catch(e){s(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(a,i)}l((n=n.apply(t,r||[])).next())}));var t,r,o,n}},8281:(e,t,r)=>{r.r(t),r.d(t,{UserProfilePhoto:()=>n});var s=r(8485),a=r(5862),i=r(9662),l=function(e,t,r,s){var a,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(i<3?a(l):i>3?a(t,r,l):a(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends a.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=s.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=s.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};n.styles=[a.css`
   :host { display: block; }
  `],l([(0,i.property)({type:String}),o("design:type",String)],n.prototype,"url",void 0),l([(0,i.property)({type:String}),o("design:type",String)],n.prototype,"type",void 0),l([(0,i.property)({type:Boolean}),o("design:type",Boolean)],n.prototype,"rounded",void 0),l([(0,i.property)({type:String}),o("design:type",String)],n.prototype,"click-to-open",void 0),l([(0,i.property)({type:Number}),o("design:type",Number)],n.prototype,"size",void 0),n=l([(0,i.customElement)("user-profile-photo"),o("design:paramtypes",[])],n)},5569:(e,t,r)=>{r.r(t),r.d(t,{PdbAdminUserOne:()=>A}),r(3029);var s,a,i=r(5862),l=r(9662),o=r(7725),n=r(7052),c=r(4672),d=r(4360),u=r(6262),p=(r(2715),r(8763),r(8281),r(5474),r(6163),r(6413),r(2583)),h=r(2506),m=r(3600),b=r(3464),g=r(4728),_=r(3283),f=r(2378),v=r(8474),y=r(6948),w=function(e,t,r,s){var a,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(i<3?a(l):i>3?a(t,r,l):a(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},U=function(e,t,r,s){return new(r||(r=Promise))((function(a,i){function l(e){try{n(s.next(e))}catch(e){i(e)}}function o(e){try{n(s.throw(e))}catch(e){i(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,o)}n((s=s.apply(e,t||[])).next())}))};let A=class extends i.LitElement{constructor(){super(),this.userId=0,this.loggedUserId=0,this.formId=1,this.page_type="mine",this.editAccess=!1,this.memberProfileEditBaseUrl="/admin/user/update-account?user-id=",this.memberGroupSubgroupAddBaseUrl="/admin/user/add-group-subgroup?user-id=",this.memberGroupSubgroupEditBaseUrl="/admin/user/update-group-subgroup?user-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=null,this._clientUserAccess=this._clientUserAccessDefault,this._clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set clientUserGroupSubgroup(e){this._clientUserGroupSubgroup=e,this.requestUpdate()}get clientUserGroupSubgroup(){return this._clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return U(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,o.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,m.getUserLoginInfoCookie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this.clientUser.success&&(yield this.getPageAccesses(),"not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),yield this.getClientUserGroupSubgroup(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=i.html`<h4 class="text-white">Error</h4>`,t=i.html`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;return i.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.clientUser)return i.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.clientUser)return i.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Admin User </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.clientUser.success){const e=i.html`<h4 class="text-white">Error</h4>`,t=i.html`
          <div>
            <p class="text-black mb-2">User Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
              label="Client Users Page"></link-button>
          </div>
        `;return i.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.clientUser,t=e.data,r=(0,d.ClientUsers_S)(Array.isArray(t)?t[0]:t),s=e.success,a=s?(0,n.base64Encode)(String(r.id),!0):"",l=this.clientUserGroupSubgroup,o=l.data,c=Array.isArray(o)?(0,f.ClientUserGroupSubgroup_S)(o[0]):(0,f.ClientUserGroupSubgroup_S)(o),u=l.success;return i.html`
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 my-1">
            <div class="shadow">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${s?i.html`${r.firstname} ${r.surname}'s`:i.nothing} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="client"
                  url="${s?r.profilePicture:" profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="/account/accounts?edit=photo&user=${a}" label="Edit">
                </link-button>
              </div>
            </div>
            <div class="shadow my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${s?i.html`${r.firstname} ${r.surname}'s`:i.nothing} Group(s)/ Subgroup(s)
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth id="groupsSectionFormBtn"
                    label="Group" @click="${this.displayGroupsSectionBtn}"></mwc-tab>
                  <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth
                    id="subGroupsSectionFormBtn" label="Sub-Group" @click="${this.displaySubGroupsSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getGroupSubgroupSection(c,u)}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                ${Number.isNaN(c.id)?i.html`
                  <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                    href="${this.memberGroupSubgroupAddBaseUrl}${a}" label="Add">
                  </link-button>
                `:i.html`
                  <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                    href="${this.memberGroupSubgroupEditBaseUrl}${a}" label="Edit">
                  </link-button>
                `}
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-8 my-1">
            <div class="shadow">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${s?i.html`${r.firstname} ${r.surname}'s`:i.nothing} Bio/ Access 
                  ${this.editAccess?i.html`
                  <div class="flex flex-col items-center pl-2">
                    <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${r.id}" @click="${this.deleteClientUser}"></mwc-icon-button>
                    <small class="block">Delete</small>
                  </div>
                  `:i.nothing}
                </h4>
              </div>
              <div class="p-3 ">
                <div class="row justify-content-center">
                  ${this.bioData(r,s)}
                  ${this.accessData}
                </div>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberProfileEditBaseUrl}${a}" label="Edit">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `}}displayGroupsSectionBtn(e){e.preventDefault(),this.formId=1,this.groupsSectionFormBtn.setAttribute("raised","true"),this.subGroupsSectionFormBtn.removeAttribute("raised")}displaySubGroupsSectionBtn(e){e.preventDefault(),this.formId=2,this.subGroupsSectionFormBtn.setAttribute("raised","true"),this.groupsSectionFormBtn.removeAttribute("raised")}bioData(e,t){return i.html`
      <div class="col-md-12 col-lg-6 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Query</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Info</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Name</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?i.html`${e.firstname} ${e.surname}`:"-"}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Gender</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?i.html`${1===e.gender?"Male":2===e.gender?"Female":"-"} `:"-"}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Date of birth</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?i.html`${e.dateOfBirth.toDateString()}`:"-"}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Phone</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?i.html`<a href="tel:${e.phone}" type="tel">${e.phone}</a>`:"-"}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Email</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?i.html`<a href="mailto:${e.email}" type="email">${e.email}</a>`:"-"}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get accessData(){const e=this.clientUserAccess,t=e.data,r=Array.isArray(t)?t:[t],s=e.success;let a=[];s&&r.forEach((e=>{e=(0,p.ClientUserAccess_S)(e),a.includes(e.page.id)||a.push(e.page.id)}));const l=this.pageAccesses;return i.html`
      <div class="col-md-12 col-lg-6 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Page(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${l.map(((e,t)=>{let r="access_"+t,l=!1;return s&&a.forEach((t=>{e.id===t&&(l=!0)})),i.html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <label for="${r}">${e.name}</label>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          ${l?i.html`
                          <input id="${r}" disabled type="checkbox" value="${e.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                          `:i.html`
                          <input id="${r}" disabled type="checkbox" value="${e.id}"
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                          `}
                        </div>
                      </td>
                    </tr>
                  `}))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getGroupSubgroupSection(e,t){return 1===this.formId?(this.formId,i.html`
        ${this.groupData(e,t)}
      `):(this.formId,i.html`
        ${this.subGroupData(e,t)}
      `)}groupData(e,t){return i.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Group(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${(t?e.group:[]).map(((e,t)=>i.html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <p>${e.group}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${e.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                      </td>
                    </tr>
                  `))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}subGroupData(e,t){return i.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Sub-Group(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${(t?e.subgroup:[]).map(((e,t)=>i.html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex flex-col items-start">
                          <small class="text-gray-500">${e.groupName}</small>
                          <p> <small class="text-gray-500">></small> ${e.subgroup}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${e.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                      </td>
                    </tr>
                  `))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const r={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(r)||e.push(r)})),e}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,c.urlQueryParamsGet)("user-id"),t=null!==e?(0,n.base64Decode)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}deleteClientUser(e){return U(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,y.DELETE_ClientUser)(t)}))}getClientUser(){return U(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,u.GET_ClientUsers)(this.userId,"?branchId="+e);null===t?this.clientUser=void 0:(this.clientUser=t.response,console.log({"this.clientUser":this.clientUser}))}))}getClientUserAccess(){return U(this,void 0,void 0,(function*(){const e=yield(0,h.GET_ClientUserAccess)(null,"?userId="+this.userId);this.clientUserAccess=null===e?void 0:e.response}))}getLoggedUserAccess(){return U(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,h.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,p.ClientUserAccess_S)(e)).page.id&&(this.editAccess=!0)}))}}))}getClientUserGroupSubgroup(){return U(this,void 0,void 0,(function*(){const e=yield(0,v.GET_ClientUserGroupSubgroup)(null,"?userId="+this.userId);this.clientUserGroupSubgroup=null===e?void 0:e.response}))}getPageAccesses(){return U(this,void 0,void 0,(function*(){const e=yield(0,g.GET_ClientPageAccess)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,b.ClientPageAccess_S)(e)))),this._pageAccesses=[...this._pageAccesses,...t]}))}createRenderRoot(){return this}};A.styles=[i.css`
   :host { display: block; }
  `],w([(0,l.query)("#groupsSectionFormBtn"),S("design:type","function"==typeof(s=void 0!==_.Button&&_.Button)?s:Object)],A.prototype,"groupsSectionFormBtn",void 0),w([(0,l.query)("#subGroupsSectionFormBtn"),S("design:type","function"==typeof(a=void 0!==_.Button&&_.Button)?a:Object)],A.prototype,"subGroupsSectionFormBtn",void 0),w([(0,l.property)({type:Number}),S("design:type",Number)],A.prototype,"userId",void 0),w([(0,l.property)({type:Number}),S("design:type",Number)],A.prototype,"loggedUserId",void 0),w([(0,l.property)({type:Number}),S("design:type",Number)],A.prototype,"formId",void 0),w([(0,l.property)({type:String}),S("design:type",String)],A.prototype,"page_type",void 0),w([(0,l.property)({type:Boolean}),S("design:type",Boolean)],A.prototype,"editAccess",void 0),w([(0,l.property)({type:String}),S("design:type",String)],A.prototype,"memberProfileEditBaseUrl",void 0),w([(0,l.property)({type:String}),S("design:type",String)],A.prototype,"memberGroupSubgroupAddBaseUrl",void 0),w([(0,l.property)({type:String}),S("design:type",String)],A.prototype,"memberGroupSubgroupEditBaseUrl",void 0),w([(0,l.property)({type:Array}),S("design:type",Array)],A.prototype,"_pageAccesses",void 0),w([(0,l.property)({type:Array}),S("design:type",Array)],A.prototype,"_activeBranchId",void 0),w([(0,l.property)({type:Array}),S("design:type",Array)],A.prototype,"_userLoginInfo",void 0),A=w([(0,l.customElement)("pdb-admin-user-one"),S("design:paramtypes",[])],A)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_functions_views_home_branch_index_ts-src_addons_interfaces_clients_users_access_ts-5063eb","src_assets_styles_views_admin_user_main_scss","shared"],(()=>(5569,e(e.s=5569)))),e.O())])}));
//# sourceMappingURL=view.js.map