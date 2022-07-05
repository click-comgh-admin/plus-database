"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["admin/user/view"],{3029:(e,t,s)=>{s.r(t)},4672:(e,t,s)=>{s.r(t),s.d(t,{urlQueryParams:()=>r,urlQueryParamsGet:()=>a,urlQueryParamsJoin:()=>i});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},a=e=>{const t=new URLSearchParams(window.location.search),s=Object.fromEntries(t.entries());let r=null;for(const t in s)t===e&&(r=s[t]);return r},i=e=>{let t="",s=0;for(const r in e)s+=1,t+=`${s>1?"&":""}${r}=${e[r]}`;return t}},2378:(e,t,s)=>{s.r(t),s.d(t,{ClientUserGroupSubgroup_S:()=>i});var r=s(3437),a=s(660);function i(e){let t=[],s=[],i={};return void 0!==e&&("group"in e&&Array.isArray(e.group)&&(t=e.group.map((e=>(0,r.GroupingsGroup_S)(e)))),"subgroup"in e&&Array.isArray(e.subgroup)&&(s=e.subgroup.map((e=>(0,a.GroupingsSubGroup_S)(e)))),i={id:Number(e.id),clientId:Number(e.clientId),userId:Number(e.userId),group:t,subgroup:s,date:new Date(e.date)}),i}},4360:(e,t,s)=>{function r(e){return{id:Number(e.id),firstname:String(e.firstname),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),role:Number(e.role),accountId:Number(e.accountId),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login)}}s.r(t),s.d(t,{ClientUsers_S:()=>r})},3437:(e,t,s)=>{s.r(t),s.d(t,{GroupingsGroup_S:()=>a});var r=s(267);function a(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,r.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},267:(e,t,s)=>{function r(e){return{id:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}s.r(t),s.d(t,{GroupingsMemberCategories_S:()=>r})},660:(e,t,s)=>{s.r(t),s.d(t,{GroupingsSubGroup_S:()=>a}),s(2892);var r=s(267);function a(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,r.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},8474:(e,t,s)=>{s.r(t),s.d(t,{GET_ClientUserGroupSubgroup:()=>d});var r=s(8485),a=s(7270),i=s(4492),l=s(3600);function d(e=null,t=""){return s=this,d=void 0,c=function*(){const s=(0,l.getUserLoginInfoCookie)(),d=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new i.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var s;t.done?e(t.value):(s=t.value,s instanceof o?s:new o((function(e){e(s)}))).then(r,a)}i((c=c.apply(s,d||[])).next())}));var s,d,o,c}},6262:(e,t,s)=>{s.r(t),s.d(t,{GET_ClientUsers:()=>d});var r=s(8485),a=s(7270),i=s(4492),l=s(3600);function d(e=null,t=""){return s=this,d=void 0,c=function*(){const s=(0,l.getUserLoginInfoCookie)(),d=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new i.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var s;t.done?e(t.value):(s=t.value,s instanceof o?s:new o((function(e){e(s)}))).then(r,a)}i((c=c.apply(s,d||[])).next())}));var s,d,o,c}},4728:(e,t,s)=>{s.r(t),s.d(t,{GET_ClientPageAccess:()=>d});var r=s(8485),a=s(7270),i=s(4492),l=s(3600);function d(e=null,t=""){return s=this,d=void 0,c=function*(){const s=(0,l.getUserLoginInfoCookie)(),d=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access/pages"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new i.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var s;t.done?e(t.value):(s=t.value,s instanceof o?s:new o((function(e){e(s)}))).then(r,a)}i((c=c.apply(s,d||[])).next())}));var s,d,o,c}},2892:(e,t,s)=>{s.r(t),s.d(t,{GET_MemberGroupingsGroups:()=>d});var r=s(8485),a=s(7270),i=s(4492),l=s(3600);function d(e=null){return t=this,s=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),s=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),d=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function i(e){try{l(o.throw(e))}catch(e){r(e)}}function l(t){var s;t.done?e(t.value):(s=t.value,s instanceof d?s:new d((function(e){e(s)}))).then(a,i)}l((o=o.apply(t,s||[])).next())}));var t,s,d,o}},8281:(e,t,s)=>{s.r(t),s.d(t,{UserProfilePhoto:()=>o});var r=s(8485),a=s(5862),i=s(9662),l=function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};o.styles=[a.css`
   :host { display: block; }
  `],l([(0,i.property)({type:String}),d("design:type",String)],o.prototype,"url",void 0),l([(0,i.property)({type:String}),d("design:type",String)],o.prototype,"type",void 0),l([(0,i.property)({type:Boolean}),d("design:type",Boolean)],o.prototype,"rounded",void 0),l([(0,i.property)({type:String}),d("design:type",String)],o.prototype,"click-to-open",void 0),l([(0,i.property)({type:Number}),d("design:type",Number)],o.prototype,"size",void 0),o=l([(0,i.customElement)("user-profile-photo"),d("design:paramtypes",[])],o)},5569:(e,t,s)=>{s.r(t),s.d(t,{PdbAdminUserOne:()=>U}),s(3029);var r,a,i=s(5862),l=s(9662),d=s(7725),o=s(7052),c=s(4672),n=s(4360),u=s(6262),p=(s(2715),s(8763),s(8281),s(5474),s(6163),s(2583)),b=s(2506),m=s(3600),h=s(3464),g=s(4728),_=s(3283),v=s(2378),f=s(8474),y=function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function l(e){try{o(r.next(e))}catch(e){i(e)}}function d(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,d)}o((r=r.apply(e,t||[])).next())}))};let U=class extends i.LitElement{constructor(){super(),this.userId=0,this.loggedUserId=0,this.formId=1,this.page_type="mine",this.editAccess=!1,this.memberProfileEditBaseUrl="/admin/user/update-account?user-id=",this.memberGroupSubgroupAddBaseUrl="/admin/user/add-group-subgroup?user-id=",this.memberGroupSubgroupEditBaseUrl="/admin/user/update-group-subgroup?user-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=null,this._clientUserAccess=this._clientUserAccessDefault,this._clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set clientUserGroupSubgroup(e){this._clientUserGroupSubgroup=e,this.requestUpdate()}get clientUserGroupSubgroup(){return this._clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return S(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,m.getUserLoginInfoCookie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this.clientUser.success&&(yield this.getPageAccesses(),"not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),yield this.getClientUserGroupSubgroup(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=i.html`<h4 class="text-white">Error</h4>`,t=i.html`
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
        `;const e=this.clientUser,t=e.data,s=(0,n.ClientUsers_S)(Array.isArray(t)?t[0]:t),r=e.success,a=r?(0,o.base64Encode)(String(s.id),!0):"",l=this.clientUserGroupSubgroup,d=l.data,c=Array.isArray(d)?(0,v.ClientUserGroupSubgroup_S)(d[0]):(0,v.ClientUserGroupSubgroup_S)(d),u=l.success;return i.html`
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 my-1">
            <div class="shadow">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${r?i.html`${s.firstname} ${s.surname}'s`:i.nothing} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="client"
                  url="${r?s.profilePicture:" profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="/account/accounts?edit=photo-new&user=${a}" label="Edit">
                </link-button>
              </div>
            </div>
            <div class="shadow my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${r?i.html`${s.firstname} ${s.surname}'s`:i.nothing} Group(s)/ Subgroup(s)
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
                <h4 class="uppercase text-base font-bold">
                  ${r?i.html`${s.firstname} ${s.surname}'s`:i.nothing} Bio/ Access
                </h4>
              </div>
              <div class="p-3 ">
                <div class="row justify-content-center">
                  ${this.bioData(s,r)}
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
    `}get accessData(){const e=this.clientUserAccess,t=e.data,s=Array.isArray(t)?t:[t],r=e.success;let a=[];r&&s.forEach((e=>{e=(0,p.ClientUserAccess_S)(e),a.includes(e.page.id)||a.push(e.page.id)}));const l=this.pageAccesses;return i.html`
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
                ${l.map(((e,t)=>{let s="access_"+t,l=!1;return r&&a.forEach((t=>{e.id===t&&(l=!0)})),i.html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <label for="${s}">${e.name}</label>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          ${l?i.html`
                          <input id="${s}" disabled type="checkbox" value="${e.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                          `:i.html`
                          <input id="${s}" disabled type="checkbox" value="${e.id}"
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
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const s={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(s)||e.push(s)})),e}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,c.urlQueryParamsGet)("user-id"),t=null!==e?(0,o.base64Decode)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}getClientUser(){return S(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,u.GET_ClientUsers)(this.userId,"?branchId="+e);this.clientUser=null===t?void 0:t.response}))}getClientUserAccess(){return S(this,void 0,void 0,(function*(){const e=yield(0,b.GET_ClientUserAccess)(null,"?userId="+this.userId);this.clientUserAccess=null===e?void 0:e.response}))}getLoggedUserAccess(){return S(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,b.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,p.ClientUserAccess_S)(e)).page.id&&(this.editAccess=!0)}))}}))}getClientUserGroupSubgroup(){return S(this,void 0,void 0,(function*(){const e=yield(0,f.GET_ClientUserGroupSubgroup)(null,"?userId="+this.userId);this.clientUserGroupSubgroup=null===e?void 0:e.response}))}getPageAccesses(){return S(this,void 0,void 0,(function*(){const e=yield(0,g.GET_ClientPageAccess)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,h.ClientPageAccess_S)(e)))),this._pageAccesses=[...this._pageAccesses,...t]}))}createRenderRoot(){return this}};U.styles=[i.css`
   :host { display: block; }
  `],y([(0,l.query)("#groupsSectionFormBtn"),w("design:type","function"==typeof(r=void 0!==_.Button&&_.Button)?r:Object)],U.prototype,"groupsSectionFormBtn",void 0),y([(0,l.query)("#subGroupsSectionFormBtn"),w("design:type","function"==typeof(a=void 0!==_.Button&&_.Button)?a:Object)],U.prototype,"subGroupsSectionFormBtn",void 0),y([(0,l.property)({type:Number}),w("design:type",Number)],U.prototype,"userId",void 0),y([(0,l.property)({type:Number}),w("design:type",Number)],U.prototype,"loggedUserId",void 0),y([(0,l.property)({type:Number}),w("design:type",Number)],U.prototype,"formId",void 0),y([(0,l.property)({type:String}),w("design:type",String)],U.prototype,"page_type",void 0),y([(0,l.property)({type:Boolean}),w("design:type",Boolean)],U.prototype,"editAccess",void 0),y([(0,l.property)({type:String}),w("design:type",String)],U.prototype,"memberProfileEditBaseUrl",void 0),y([(0,l.property)({type:String}),w("design:type",String)],U.prototype,"memberGroupSubgroupAddBaseUrl",void 0),y([(0,l.property)({type:String}),w("design:type",String)],U.prototype,"memberGroupSubgroupEditBaseUrl",void 0),y([(0,l.property)({type:Array}),w("design:type",Array)],U.prototype,"_pageAccesses",void 0),y([(0,l.property)({type:Array}),w("design:type",Array)],U.prototype,"_activeBranchId",void 0),y([(0,l.property)({type:Array}),w("design:type",Array)],U.prototype,"_userLoginInfo",void 0),U=y([(0,l.customElement)("pdb-admin-user-one"),w("design:paramtypes",[])],U)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_functions_views_home_branch_index_ts-src_addons_interfaces_clients_users_access_ts-5063eb","src_assets_styles_views_admin_user_main_scss","shared"],(()=>(5569,e(e.s=5569)))),e.O())])}));
//# sourceMappingURL=view.js.map