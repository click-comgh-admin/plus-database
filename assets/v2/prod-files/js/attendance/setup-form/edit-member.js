"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[670],{5524:(e,t,n)=>{n.d(t,{n:()=>c});var i=n(771),r=n(1942),s=n(7839),o=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,m=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,o.t)((0,r.Hl)(n)),m=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,h=yield(0,s.d)(m,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{r(m.next(e))}catch(e){t(e)}}function i(e){try{r(m.throw(e))}catch(e){t(e)}}function r(t){var r;t.done?e(t.value):(r=t.value,r instanceof u?r:new u((function(e){e(r)}))).then(n,i)}r((m=m.apply(c,d||[])).next())}));var c,d,u,m}},2218:(e,t,n)=>{n.d(t,{u:()=>c});var i=n(771),r=n(1942),s=n(7839),o=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,m=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,o.t)((0,r.Hl)(n)),m=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,h=yield(0,s.d)(m,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{r(m.next(e))}catch(e){t(e)}}function i(e){try{r(m.throw(e))}catch(e){t(e)}}function r(t){var r;t.done?e(t.value):(r=t.value,r instanceof u?r:new u((function(e){e(r)}))).then(n,i)}r((m=m.apply(c,d||[])).next())}));var c,d,u,m}},6656:(e,t,n)=>{n.d(t,{E:()=>c});var i=n(771),r=n(1942),s=n(7839),o=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,m=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,o.t)((0,r.Hl)(n)),m=i.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,h=yield(0,s.d)(m,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{r(m.next(e))}catch(e){t(e)}}function i(e){try{r(m.throw(e))}catch(e){t(e)}}function r(t){var r;t.done?e(t.value):(r=t.value,r instanceof u?r:new u((function(e){e(r)}))).then(n,i)}r((m=m.apply(c,d||[])).next())}));var c,d,u,m}},2715:(e,t,n)=>{var i=n(9392),r=n(9662),s=n(5713),o=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:i.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"aClass",void 0),o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"bClass",void 0),o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"icon",void 0),o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"href",void 0),o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"isBlockContent",void 0),o([(0,r.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"raised",void 0),a=o([(0,s.M)("link-button")],a)},7725:(e,t,n)=>{var i=n(9392),r=n(9662),s=n(5713),o=(n(5185),n(5248),function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?i.dy`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:i.dy`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?i.dy`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:i.dy`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"name",void 0),o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"value",void 0),o([(0,r.C)({type:Number}),l("design:type",Number)],a.prototype,"randomID",void 0),o([(0,r.C)({type:String}),l("design:type",String)],a.prototype,"id",void 0),o([(0,r.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"required",void 0),o([(0,r.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"multiple",void 0),o([(0,r.C)({type:Number}),l("design:type",Number)],a.prototype,"startNumber",void 0),o([(0,r.C)({type:Number}),l("design:type",Number)],a.prototype,"rowsPerPage",void 0),o([(0,r.C)({type:Number}),l("design:type",Number)],a.prototype,"totalShowing",void 0),o([(0,r.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=o([(0,s.M)("file-input")],a)},8693:(e,t,n)=>{var i=n(9392),r=n(9662),s=n(5713),o=(n(2715),n(771)),l=n(4672),a=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,l.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[i.iv`
   :host { display: block; }
  `],a([(0,r.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=a([(0,s.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)},3591:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMember:()=>N});var i=n(3750),r=n(3600),s=n(9392),o=n(9662),l=n(5713),a=n(2669),c=n(5458),d=(n(5248),n(6811),n(3690),n(1854),n(7725),n(2262)),u=n(5524),m=n(2218),h=n(4672),p=n(6455),b=n.n(p),f=n(771),g=n(1942),v=n(7839),y=n(7052),w=n(596),_=n(8967),C=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}a((i=i.apply(e,t||[])).next())}))};n(5866);var k,S,E=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}a((i=i.apply(e,t||[])).next())}))},$=n(6656),A=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}a((i=i.apply(e,t||[])).next())}))};let x=class extends s.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,h.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return s.dy`${this.schedule}`}get schedule(){return null===this._schedule?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?s.dy`${this.scheduleMember}`:s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleMember(){return null===this._scheduleMembers?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleMembers?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Member</span>: undefined error</h4>
          </div>
        </div>
      `:s.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.dy`${this.table}`}get table(){return this._scheduleMembers.results.length>0?s.dy`
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
      `:s.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceMembers(){return s.dy`
      ${this._scheduleMembers.results.map(((e,t)=>s.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.C)(this.getMember(e.memberId),s.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceMember}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return s.dy`
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
    `}get memberField(){let e={};const t=(0,y.t)((0,g.Hl)("client_tokenLogin"));return e.Authorization="Token "+t,s.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Member</h4>
            <select-input class="w-100" id="memberId" name="memberId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${f.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `}memberFieldDefault(e){return s.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${e}" no_delete></multiple-widgets>
    `}addMemberField(){const e=this.showMemberFieldAllSelector.children.length,t=(0===e?-1:Number(this.showMemberFieldAllSelector.children[e-1].getAttribute("memberField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("memberField-id",String(t)),this.showMemberFieldAllSelector.append(n);const i=this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+t+'"]'),r=this.memberField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,r=document.querySelector('[id="memberId"]');console.log({data:e,params:t,RESULTS:i,SELECTOR:r});let s=[];if(n>0){var o=i;console.log({"smbfl-_data":o});for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return console.log({processedData:s}),{results:s,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new d.T(e)}))}submitForm(e){return I(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e="client_tokenLogin"){return E(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(n,t,e);const i=(0,y.t)((0,g.Hl)(e)),s=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",o=document.querySelector('[make-general-posts="add-schedule-member"]'),l=new FormData(o);return b().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>E(this,void 0,void 0,(function*(){return yield(0,v.d)(s,{method:"POST",body:l,headers:{Authorization:"Token "+i}},!1).then((e=>{const t=new w.H("post",e,!1,o),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,_.T)(e);b().showValidationMessage(`${t}`)}return t})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&b().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceMember(e){return I(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e,t="client_tokenLogin"){return C(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),i=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(i,n,t);const s=(0,y.t)((0,g.Hl)(t)),o=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,l={};return b().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>C(this,void 0,void 0,(function*(){return yield(0,v.d)(o,{method:"DELETE",body:JSON.stringify(l),headers:{Authorization:"Token "+s}},!1).then((e=>{try{const t=new w.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,_.T)(e);b().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new w.H("delete",n,!0);return i.postForm,i}})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}b().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,h.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return I(this,void 0,void 0,(function*(){const e=yield(0,m.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleMember(){return I(this,void 0,void 0,(function*(){const e=yield(0,u.n)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMembers(){return I(this,void 0,void 0,(function*(){const e=yield(0,$.E)();let t=[];null===e?t.push({id:0,firstname:"** ",middlename:"NOT FOUND",surname:" **",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._members=[...this._members,...t]}))}getMember(e){return I(this,void 0,void 0,(function*(){const t=yield(0,$.E)(e);if(null===t)return"???";if(console.log({"_networkResponse.response":t.response}),t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};x.styles=[s.iv`
   :host { display: block; }
  `],A([(0,o.C)({type:Number}),R("design:type",Number)],x.prototype,"CLIENT_ID",void 0),A([(0,o.C)({type:Number}),R("design:type",Number)],x.prototype,"startSearchPage",void 0),A([(0,o.C)({type:Array}),R("design:type",Array)],x.prototype,"_members",void 0),A([(0,o.C)({type:Array}),R("design:type","function"==typeof(k="undefined"!=typeof Array&&Array)?k:Object)],x.prototype,"_data",void 0),A([(0,o.C)({type:Object}),R("design:type",Object)],x.prototype,"urlQueryParams",void 0),A([(0,o.C)({type:Number}),R("design:type",Number)],x.prototype,"meetingEventId",void 0),A([(0,a.I)('[show-memberField="all"]'),R("design:type","function"==typeof(S="undefined"!=typeof Element&&Element)?S:Object)],x.prototype,"showMemberFieldAllSelector",void 0),x=A([(0,l.M)("attendance-setup-form-member"),R("design:paramtypes",[])],x),n(8693);var M=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let N=class extends s.oi{constructor(){super(),(0,i.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{a(s.next(e))}catch(e){r(e)}}function l(e){try{a(s.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,l)}a((s=s.apply(t,n||[])).next())}));var t,n,i,s}disconnectedCallback(){}render(){return s.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
    `}firstUpmemberd(){}createRenderRoot(){return this}};M([(0,o.C)({type:String}),L("design:type",String)],N.prototype,"email",void 0),M([(0,o.C)({type:Number}),L("design:type",Number)],N.prototype,"mId",void 0),M([(0,o.C)({type:Number}),L("design:type",Number)],N.prototype,"clientId",void 0),N=M([(0,l.M)("attendance-setup-form-edit-member"),L("design:paramtypes",[])],N)}},e=>(e.O(0,[744,185,674,564,820,828,907,111,214,985,948,800,712],(()=>(3591,e(e.s=3591)))),e.O())])}));
//# sourceMappingURL=edit-member.js.map