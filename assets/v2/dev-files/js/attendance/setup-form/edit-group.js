"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-group"],{1243:(e,t,r)=>{r.r(t)},7128:(e,t,r)=>{r.r(t),r.d(t,{DELETE_AttendanceDeleteScheduleGroup:()=>h});var n=r(6455),o=r.n(n),s=r(8485),i=r(1942),l=r(7270),c=r(7052),a=r(4492),d=r(8967),u=r(3600),p=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function l(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))};function h(e,t="client_tokenLogin"){return p(this,void 0,void 0,(function*(){const r=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(n,r,t);const h=(0,c.base64Decode)((0,i.get_cookie)(t)),m=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/"+e,f={};return o().fire({title:"Remove Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,l.http)(m,{method:"DELETE",body:JSON.stringify(f),headers:{Authorization:"Token "+h}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new a.NetWorkCallResponses("delete",r,!0);return n.postForm,n}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}o().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},4843:(e,t,r)=>{r.r(t),r.d(t,{GET_AttendanceScheduleGroup:()=>a});var n=r(8485),o=r(1942),s=r(7270),i=r(7052),l=r(4492),c=r(3600);function a(e=null,t="",r="client_tokenLogin"){return a=this,d=void 0,p=function*(){const a=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,c.verifyToken)(d,a,r);const u=(0,i.base64Decode)((0,o.get_cookie)(r)),p=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,h=yield(0,s.http)(p,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.NetWorkCallResponses("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function r(e){try{o(p.next(e))}catch(e){t(e)}}function n(e){try{o(p.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(r,n)}o((p=p.apply(a,d||[])).next())}));var a,d,u,p}},4108:(e,t,r)=>{r.r(t),r.d(t,{POST_AttendanceAddScheduleGroup:()=>h});var n=r(6455),o=r.n(n),s=r(8485),i=r(1942),l=r(7270),c=r(7052),a=r(4492),d=r(8967),u=r(3600),p=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function l(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))};function h(e="client_tokenLogin"){return p(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(r,t,e);const n=(0,c.base64Decode)((0,i.get_cookie)(e)),h=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group",m=document.querySelector('[make-general-posts="add-schedule-group"]'),f=new FormData(m);return o().fire({title:"Add Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,l.http)(h,{method:"POST",body:f,headers:{Authorization:"Token "+n}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,m),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,d.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&o().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2892:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsGroups:()=>a});var n=r(8485),o=r(1942),s=r(7270),i=r(7052),l=r(4492),c=r(3600);function a(e=null,t="client_tokenLogin"){return r=this,a=void 0,u=function*(){const r=String(window.supersecret.unknowable.ops.id),a=String(window.supersecret.unknowable.ops.email);yield(0,c.verifyToken)(a,r,t);const d=(0,i.base64Decode)((0,o.get_cookie)(t)),u=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),p=yield(0,s.http)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new l.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{s(u.next(e))}catch(e){t(e)}}function o(e){try{s(u.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof d?r:new d((function(e){e(r)}))).then(n,o)}s((u=u.apply(r,a||[])).next())}));var r,a,d,u}},7725:(e,t,r)=>{r.r(t),r.d(t,{FileInput:()=>l});var n=r(5862),o=r(9662),s=(r(9975),r(3283),r(1243),function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.css`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),s([(0,o.property)({type:Number}),i("design:type",Number)],l.prototype,"randomID",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"id",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"required",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,o.property)({type:Number}),i("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,o.property)({type:Number}),i("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,o.property)({type:Number}),i("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,o.customElement)("file-input")],l)},3947:(e,t,r)=>{r.r(t),r.d(t,{AttendanceSetupFormEditGroup:()=>a}),r(9579);var n=r(3750),o=r(3600),s=r(5862),i=r(9662),l=(r(4153),r(8693),function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends s.LitElement{constructor(){super(),(0,n.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,s=function*(){e.connectedCallback.call(this),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function l(e){try{c(s.throw(e))}catch(e){o(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,l)}c((s=s.apply(t,r||[])).next())}));var t,r,n,s}disconnectedCallback(){}render(){return s.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-group CLIENT_ID="${this.clientId}"></attendance-setup-form-group>
    `}firstUpgroupd(){}createRenderRoot(){return this}};l([(0,i.property)({type:String}),c("design:type",String)],a.prototype,"email",void 0),l([(0,i.property)({type:Number}),c("design:type",Number)],a.prototype,"mId",void 0),l([(0,i.property)({type:Number}),c("design:type",Number)],a.prototype,"clientId",void 0),a=l([(0,i.customElement)("attendance-setup-form-edit-group"),c("design:paramtypes",[])],a)},4153:(e,t,r)=>{r.r(t),r.d(t,{AttendanceSetupFormGroup:()=>y}),r(5501);var n,o,s=r(5862),i=r(9662),l=r(8881),c=(r(3283),r(1511),r(3690),r(1854),r(7725),r(9068)),a=r(4843),d=r(2218),u=r(4672),p=r(7128),h=(r(5866),r(4108)),m=r(2892),f=function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function l(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))};let y=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__groupUser=null,this.__schedule=null,this.__scheduleGroups=null,this._groups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _groupUser(e){this.__groupUser=e,this.requestUpdate()}get _groupUser(){return this.__groupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleGroup(),yield this.getGroups()}))}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return null===this._schedule?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?s.html`${this.scheduleGroup}`:s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleGroup(){return null===this._scheduleGroups?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleGroups?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Group</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.html`${this.table}`}get table(){return this._scheduleGroups.results.length>0?s.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Group
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
                ${this.getMeetingAttendanceGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:s.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceGroups(){return s.html`
      ${this._scheduleGroups.results.map(((e,t)=>s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getGroup(e.groupId),s.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceGroup}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return s.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Group</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Group!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-group">
                <div class="p-0 m-0" show-groupField="all">
                  ${this.groupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Group" raised class="button" @click="${this.submitForm}">
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
    `}get groupField(){const e=this._groups.map((e=>s.html`<mwc-list-item value="${e.id}">${e.group}</mwc-list-item>`));return s.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Group</h4>
            <mwc-select name="groupId" class="w-full" id="groupId" label="Select Group" outlined required>
              <mwc-list-item value="">Select Group</mwc-list-item>
              <mwc-list-item value="all">All Groups</mwc-list-item>
              ${s.html`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}groupFieldDefault(e){return s.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.groupField}
        groupField-id="${e}" no_delete></multiple-widgets>
    `}addGroupField(){const e=this.showGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showGroupFieldAllSelector.children[e-1].getAttribute("groupField-id")))+1,r=document.createElement("multiple-widgets");r.setAttribute("class","col-md-12 col-lg-12 mb-3"),r.setAttribute("groupField-id",String(t)),this.showGroupFieldAllSelector.append(r);const n=this.showGroupFieldAllSelector.querySelectorAll('multiple-widgets[groupField-id="'+t+'"]'),o=this.groupField.strings.join("");setTimeout((()=>{n.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new c.MDCDataTable(e)}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_AttendanceAddScheduleGroup)()}))}deleteQuestionnaireMeetingAttendanceGroup(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_AttendanceDeleteScheduleGroup)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleGroup(){return v(this,void 0,void 0,(function*(){const e=yield(0,a.GET_AttendanceScheduleGroup)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroups(){return v(this,void 0,void 0,(function*(){const e=yield(0,m.GET_MemberGroupingsGroups)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._groups=[...this._groups,...t]}))}getGroup(e){return v(this,void 0,void 0,(function*(){const t=yield(0,m.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};y.styles=[s.css`
   :host { display: block; }
  `],f([(0,i.property)({type:Number}),g("design:type",Number)],y.prototype,"CLIENT_ID",void 0),f([(0,i.property)({type:Number}),g("design:type",Number)],y.prototype,"startSearchPage",void 0),f([(0,i.property)({type:Array}),g("design:type",Array)],y.prototype,"_groups",void 0),f([(0,i.property)({type:Array}),g("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],y.prototype,"_data",void 0),f([(0,i.property)({type:Object}),g("design:type",Object)],y.prototype,"urlQueryParams",void 0),f([(0,i.property)({type:Number}),g("design:type",Number)],y.prototype,"meetingEventId",void 0),f([(0,i.query)('[show-groupField="all"]'),g("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],y.prototype,"showGroupFieldAllSelector",void 0),y=f([(0,i.customElement)("attendance-setup-form-group"),g("design:paramtypes",[])],y)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-46c46b","src_assets_styles_views_widget_simple-table_main_scss-src_addons_widgets_add_remove_widget_in-e0b7ca","shared"],(()=>(3947,e(e.s=3947)))),e.O())])}));
//# sourceMappingURL=edit-group.js.map