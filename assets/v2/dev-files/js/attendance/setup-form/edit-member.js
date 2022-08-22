"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member"],{5501:(e,t,n)=>{n.r(t)},1801:(e,t,n)=>{n.r(t),n.d(t,{Constituency_S:()=>o,_Constituency_D:()=>s});var r=n(6909),i=n(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.Region_S)(e.regionId):(0,i._Region_D)(),districtId:"districtId"in e?(0,r.District_S)(e.districtId):(0,r._District_D)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,i._Region_D)(),districtId:(0,r._District_D)(),location:"-"}}},9492:(e,t,n)=>{function r(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function i(){return{id:0,name:"-",short:"-",code:"-"}}n.r(t),n.d(t,{Country_S:()=>r,_Country_D:()=>i})},6909:(e,t,n)=>{n.r(t),n.d(t,{District_S:()=>i,_District_D:()=>o});var r=n(7202);function i(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,r._Region_D)(),location:"-"}}},8769:(e,t,n)=>{n.r(t),n.d(t,{ElectoralArea_S:()=>o,_ElectoralArea_D:()=>s});var r=n(6909),i=n(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.Region_S)(e.regionId):(0,i._Region_D)(),districtId:"districtId"in e?(0,r.District_S)(e.districtId):(0,r._District_D)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,i._Region_D)(),districtId:(0,r._District_D)(),location:"-"}}},7202:(e,t,n)=>{function r(e){return{id:Number(e.id),location:String(e.location)}}function i(){return{id:0,location:"-"}}n.r(t),n.d(t,{Region_S:()=>r,_Region_D:()=>i})},6246:(e,t,n)=>{n.r(t),n.d(t,{MembershipUser_S:()=>l});var r=n(1801),i=n(9492),o=n(6909),s=n(8769),c=n(7202);function a(e,t=""){return String(null===e?t:e)}function l(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:a(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:a(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,i.Country_S)(e.countryInfo):(0,i._Country_D)(),regionInfo:"regionInfo"in e?(0,c.Region_S)(e.regionInfo):(0,c._Region_D)(),districtInfo:"districtInfo"in e?(0,o.District_S)(e.districtInfo):(0,o._District_D)(),constituencyInfo:"constituencyInfo"in e?(0,r.Constituency_S)(e.constituencyInfo):(0,r._Constituency_D)(),electoralareaInfo:"electoralareaInfo"in e?(0,s.ElectoralArea_S)(e.electoralareaInfo):(0,s._ElectoralArea_D)()}}},8304:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleMember:()=>u});var r=n(6455),i=n.n(r),o=n(8485),s=n(7270),c=n(4492),a=n(8967),l=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,r={};return i().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new c.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6637:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMember:()=>c});var r=n(8485),i=n(7270),o=n(4492),s=n(3600);function c(e=null,t=""){return n=this,c=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),c=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,a=yield(0,i.http)(c,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function i(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,i)}o((l=l.apply(n,c||[])).next())}));var n,c,a,l}},3512:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleMember:()=>u});var r=n(6455),i=n.n(r),o=n(8485),s=n(7270),c=n(4492),a=n(8967),l=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",n=document.querySelector('[make-general-posts="add-schedule-member"]'),r=new FormData(n);return i().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6656:(e,t,n)=>{n.r(t),n.d(t,{GET_MembershipUsers:()=>c});var r=n(8485),i=n(7270),o=n(4492),s=n(3600);function c(e=null,t=""){return n=this,c=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),c=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,a=yield(0,i.http)(c,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function i(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,i)}o((l=l.apply(n,c||[])).next())}));var n,c,a,l}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>a});var r=n(5862),i=n(9662),o=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))};let a=class extends r.LitElement{constructor(){super(),this.index=0,this._widget=r.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return c(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return r.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?r.nothing:r.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return c(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};o([(0,i.property)({type:Number}),s("design:type",Number)],a.prototype,"index",void 0),o([(0,i.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"no_delete",void 0),o([(0,i.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"single",void 0),o([(0,i.property)({type:String}),s("design:type",String)],a.prototype,"_single",void 0),a=o([(0,i.customElement)("multiple-widgets"),s("design:paramtypes",[])],a)},6692:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMember:()=>l}),n(9579);var r=n(3750),i=n(4108),o=n(5862),s=n(9662),c=(n(6945),n(8693),function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.LitElement{constructor(){super(),(0,r.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,i.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,c)}a((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){return o.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
    `}firstUpmemberd(){}createRenderRoot(){return this}};c([(0,s.property)({type:String}),a("design:type",String)],l.prototype,"email",void 0),c([(0,s.property)({type:Number}),a("design:type",Number)],l.prototype,"mId",void 0),c([(0,s.property)({type:Number}),a("design:type",Number)],l.prototype,"clientId",void 0),l=c([(0,s.customElement)("attendance-setup-form-edit-member"),a("design:paramtypes",[])],l)},6945:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormMember:()=>w}),n(5501);var r,i,o=n(5862),s=n(9662),c=n(8881),a=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),l=n(6637),d=n(2218),u=n(4672),m=n(8304),h=(n(5866),n(3512)),f=n(6246),p=n(6656),_=n(8485),g=n(3600),b=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))};let w=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?o.html`${this.scheduleMember}`:o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleMember(){return null===this._scheduleMembers?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleMembers?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Member</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.html`${this.table}`}get table(){return this._scheduleMembers.results.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Member
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
                ${this.getMeetingAttendanceMembers}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceMembers(){return o.html`
      ${this._scheduleMembers.results.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.until)(this.getMember(e.memberId),o.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceMember}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return o.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member">
                <div class="p-0 m-0" show-memberField="all">
                  ${this.memberFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member" raised class="button" @click="${this.submitForm}">
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
    `}get memberField(){let e={};const t=(0,g.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Member</h4>
            <select-input class="w-100" id="memberId" name="memberId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${_.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `}memberFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${e}" no_delete></multiple-widgets>
    `}addMemberField(){const e=this.showMemberFieldAllSelector.children.length,t=(0===e?-1:Number(this.showMemberFieldAllSelector.children[e-1].getAttribute("memberField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("memberField-id",String(t)),this.showMemberFieldAllSelector.append(n);const r=this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+t+'"]'),i=this.memberField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,r=e.results,i=document.querySelector('[id="memberId"]');let o=[];if(o[0]={id:"all",text:"All Members"},n>0){var s=r;for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return console.log({processedData:o}),{results:o,total:n,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}submitForm(e){return y(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_AttendanceAddScheduleMember)()}))}deleteQuestionnaireMeetingAttendanceMember(e){return y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleMember)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return y(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleMember(){return y(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleMember)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");console.log({_networkResponse:e}),this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMembers(){return y(this,void 0,void 0,(function*(){const e=yield(0,p.GET_MembershipUsers)();let t=[];null===e?t.push({id:0,firstname:"** ",middlename:"NOT FOUND",surname:" **",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._members=[...this._members,...t]}))}getMember(e){return y(this,void 0,void 0,(function*(){const t=yield(0,p.GET_MembershipUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,f.MembershipUser_S)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};w.styles=[o.css`
   :host { display: block; }
  `],b([(0,s.property)({type:Number}),v("design:type",Number)],w.prototype,"CLIENT_ID",void 0),b([(0,s.property)({type:Number}),v("design:type",Number)],w.prototype,"startSearchPage",void 0),b([(0,s.property)({type:Array}),v("design:type",Array)],w.prototype,"_members",void 0),b([(0,s.property)({type:Array}),v("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],w.prototype,"_data",void 0),b([(0,s.property)({type:Object}),v("design:type",Object)],w.prototype,"urlQueryParams",void 0),b([(0,s.property)({type:Number}),v("design:type",Number)],w.prototype,"meetingEventId",void 0),b([(0,s.query)('[show-memberField="all"]'),v("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],w.prototype,"showMemberFieldAllSelector",void 0),w=b([(0,s.customElement)("attendance-setup-form-member"),v("design:paramtypes",[])],w)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_addons_widgets_form_new_select_ts","src_addons_functions_https_https_swal_error_format_ts-src_addons_widgets_form_new_file-select-d857c7","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--ad21f6","shared"],(()=>(6692,e(e.s=6692)))),e.O())])}));
//# sourceMappingURL=edit-member.js.map