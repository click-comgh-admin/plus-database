"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member"],{1243:(e,t,r)=>{r.r(t)},1801:(e,t,r)=>{r.r(t),r.d(t,{Constituency_S:()=>o,_Constituency_D:()=>s});var n=r(6909),i=r(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.Region_S)(e.regionId):(0,i._Region_D)(),districtId:"districtId"in e?(0,n.District_S)(e.districtId):(0,n._District_D)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,i._Region_D)(),districtId:(0,n._District_D)(),location:"-"}}},9492:(e,t,r)=>{function n(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function i(){return{id:0,name:"-",short:"-",code:"-"}}r.r(t),r.d(t,{Country_S:()=>n,_Country_D:()=>i})},6909:(e,t,r)=>{r.r(t),r.d(t,{District_S:()=>i,_District_D:()=>o});var n=r(7202);function i(e){return{id:Number(e.id),regionId:"regionId"in e?(0,n.Region_S)(e.regionId):(0,n._Region_D)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,n._Region_D)(),location:"-"}}},8769:(e,t,r)=>{r.r(t),r.d(t,{ElectoralArea_S:()=>o,_ElectoralArea_D:()=>s});var n=r(6909),i=r(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.Region_S)(e.regionId):(0,i._Region_D)(),districtId:"districtId"in e?(0,n.District_S)(e.districtId):(0,n._District_D)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,i._Region_D)(),districtId:(0,n._District_D)(),location:"-"}}},7202:(e,t,r)=>{function n(e){return{id:Number(e.id),location:String(e.location)}}function i(){return{id:0,location:"-"}}r.r(t),r.d(t,{Region_S:()=>n,_Region_D:()=>i})},6246:(e,t,r)=>{r.r(t),r.d(t,{MembershipUser_S:()=>c});var n=r(1801),i=r(9492),o=r(6909),s=r(8769),l=r(7202);function a(e,t=""){return String(null===e?t:e)}function c(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:a(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:a(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,i.Country_S)(e.countryInfo):(0,i._Country_D)(),regionInfo:"regionInfo"in e?(0,l.Region_S)(e.regionInfo):(0,l._Region_D)(),districtInfo:"districtInfo"in e?(0,o.District_S)(e.districtInfo):(0,o._District_D)(),constituencyInfo:"constituencyInfo"in e?(0,n.Constituency_S)(e.constituencyInfo):(0,n._Constituency_D)(),electoralareaInfo:"electoralareaInfo"in e?(0,s.ElectoralArea_S)(e.electoralareaInfo):(0,s._ElectoralArea_D)()}}},8304:(e,t,r)=>{r.r(t),r.d(t,{DELETE_AttendanceDeleteScheduleMember:()=>u});var n=r(6455),i=r.n(n),o=r(8485),s=r(7270),l=r(4492),a=r(8967),c=r(3600),d=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,n={};return i().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(r,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new l.NetWorkCallResponses("delete",r,!0);return n.postForm,n}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}i().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6637:(e,t,r)=>{r.r(t),r.d(t,{GET_AttendanceScheduleMember:()=>l});var n=r(8485),i=r(7270),o=r(4492),s=r(3600);function l(e=null,t=""){return r=this,l=void 0,c=function*(){const r=(0,s.getUserLoginInfoCookie)(),l=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,a=yield(0,i.http)(l,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new o.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function i(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,i)}o((c=c.apply(r,l||[])).next())}));var r,l,a,c}},3512:(e,t,r)=>{r.r(t),r.d(t,{POST_AttendanceAddScheduleMember:()=>u});var n=r(6455),i=r.n(n),o=r(8485),s=r(7270),l=r(4492),a=r(8967),c=r(3600),d=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",r=document.querySelector('[make-general-posts="add-schedule-member"]'),n=new FormData(r);return i().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&i().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6656:(e,t,r)=>{r.r(t),r.d(t,{GET_MembershipUsers:()=>l});var n=r(8485),i=r(7270),o=r(4492),s=r(3600);function l(e=null,t=""){return r=this,l=void 0,c=function*(){const r=(0,s.getUserLoginInfoCookie)(),l=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,a=yield(0,i.http)(l,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new o.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function i(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,i)}o((c=c.apply(r,l||[])).next())}));var r,l,a,c}},2461:(e,t,r)=>{r.r(t),r.d(t,{FileInput:()=>l});var n=r(5862),i=r(9662),o=(r(9975),r(3283),r(1243),function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?n.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:n.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?n.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:n.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"name",void 0),o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"label",void 0),o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"value",void 0),o([(0,i.property)({type:Number}),s("design:type",Number)],l.prototype,"randomID",void 0),o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"id",void 0),o([(0,i.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"required",void 0),o([(0,i.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"multiple",void 0),o([(0,i.property)({type:Number}),s("design:type",Number)],l.prototype,"startNumber",void 0),o([(0,i.property)({type:Number}),s("design:type",Number)],l.prototype,"rowsPerPage",void 0),o([(0,i.property)({type:Number}),s("design:type",Number)],l.prototype,"totalShowing",void 0),o([(0,i.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=o([(0,i.customElement)("file-input")],l)},6692:(e,t,r)=>{r.r(t),r.d(t,{AttendanceSetupFormEditMember:()=>c}),r(9579);var n=r(3750),i=r(4108),o=r(5862),s=r(9662),l=(r(6945),r(8693),function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),(0,n.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this),yield(0,i.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,l)}a((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return o.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
    `}firstUpmemberd(){}createRenderRoot(){return this}};l([(0,s.property)({type:String}),a("design:type",String)],c.prototype,"email",void 0),l([(0,s.property)({type:Number}),a("design:type",Number)],c.prototype,"mId",void 0),l([(0,s.property)({type:Number}),a("design:type",Number)],c.prototype,"clientId",void 0),c=l([(0,s.customElement)("attendance-setup-form-edit-member"),a("design:paramtypes",[])],c)},6945:(e,t,r)=>{r.r(t),r.d(t,{AttendanceSetupFormMember:()=>w}),r(5501);var n,i,o=r(5862),s=r(9662),l=r(8881),a=(r(3283),r(1511),r(3690),r(1854),r(2461),r(9068)),c=r(6637),d=r(2218),u=r(4672),m=r(8304),h=(r(5866),r(3512)),p=r(6246),f=r(6656),b=r(8485),g=r(3600),_=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))};let w=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
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
              ${(0,l.until)(this.getMember(e.memberId),o.html`<span>Loading...</span>`)}
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
              ajaxFetchUrl="${b.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `}memberFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${e}" no_delete></multiple-widgets>
    `}addMemberField(){const e=this.showMemberFieldAllSelector.children.length,t=(0===e?-1:Number(this.showMemberFieldAllSelector.children[e-1].getAttribute("memberField-id")))+1,r=document.createElement("multiple-widgets");r.setAttribute("class","col-md-12 col-lg-12 mb-3"),r.setAttribute("memberField-id",String(t)),this.showMemberFieldAllSelector.append(r);const n=this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+t+'"]'),i=this.memberField.strings.join("");setTimeout((()=>{n.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}processClientUserSearch(e,t){t.page=t.page||0;const r=e.count,n=e.results,i=document.querySelector('[id="memberId"]');console.log({data:e,params:t,RESULTS:n,SELECTOR:i});let o=[];if(r>0){var s=n;console.log({"smbfl-_data":s});for(let e=0;e<s.length;e++){const t=s[e],r={id:t.id,text:t.firstname+" "+t.surname};o.includes(r)||o.push(r)}}return console.log({processedData:o}),{results:o,total:r,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_AttendanceAddScheduleMember)()}))}deleteQuestionnaireMeetingAttendanceMember(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleMember)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleMember(){return v(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleMember)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMembers(){return v(this,void 0,void 0,(function*(){const e=yield(0,f.GET_MembershipUsers)();let t=[];null===e?t.push({id:0,firstname:"** ",middlename:"NOT FOUND",surname:" **",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._members=[...this._members,...t]}))}getMember(e){return v(this,void 0,void 0,(function*(){const t=yield(0,f.GET_MembershipUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,p.MembershipUser_S)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};w.styles=[o.css`
   :host { display: block; }
  `],_([(0,s.property)({type:Number}),y("design:type",Number)],w.prototype,"CLIENT_ID",void 0),_([(0,s.property)({type:Number}),y("design:type",Number)],w.prototype,"startSearchPage",void 0),_([(0,s.property)({type:Array}),y("design:type",Array)],w.prototype,"_members",void 0),_([(0,s.property)({type:Array}),y("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],w.prototype,"_data",void 0),_([(0,s.property)({type:Object}),y("design:type",Object)],w.prototype,"urlQueryParams",void 0),_([(0,s.property)({type:Number}),y("design:type",Number)],w.prototype,"meetingEventId",void 0),_([(0,s.query)('[show-memberField="all"]'),y("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],w.prototype,"showMemberFieldAllSelector",void 0),w=_([(0,s.customElement)("attendance-setup-form-member"),y("design:paramtypes",[])],w)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_addons_widgets_form_new_select_ts","src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-b8b398","src_addons_functions_https_https_swal_error_format_ts-src_addons_network_attendance_setup_sch-972913","shared"],(()=>(6692,e(e.s=6692)))),e.O())])}));
//# sourceMappingURL=edit-member.js.map