"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-group"],{1243:(e,t,n)=>{n.r(t)},5501:(e,t,n)=>{n.r(t)},7128:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleGroup:()=>u});var r=n(6455),o=n.n(r),i=n(8485),s=n(7270),l=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((r=r.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/"+e,r={};return o().fire({title:"Remove Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new l.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},4843:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleGroup:()=>l});var r=n(8485),o=n(7270),i=n(4492),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,s.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{i(a.next(e))}catch(e){t(e)}}function o(e){try{i(a.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}i((a=a.apply(n,l||[])).next())}));var n,l,c,a}},7970:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleGroup:()=>u});var r=n(6455),o=n.n(r),i=n(8485),s=n(7270),l=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((r=r.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group",n=document.querySelector('[make-general-posts="add-schedule-group"]'),r=new FormData(n);return o().fire({title:"Add Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&o().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>l});var r=n(8485),o=n(7270),i=n(4492),s=n(3600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),l=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,r){function o(e){try{s(c.next(e))}catch(e){r(e)}}function i(e){try{s(c.throw(e))}catch(e){r(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,i)}s((c=c.apply(t,n||[])).next())}));var t,n,l,c}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>c});var r=n(5862),o=n(9662),i=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((r=r.apply(e,t||[])).next())}))};let c=class extends r.LitElement{constructor(){super(),this.index=0,this._widget=r.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return r.html`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};i([(0,o.property)({type:Number}),s("design:type",Number)],c.prototype,"index",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"no_delete",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"single",void 0),i([(0,o.property)({type:String}),s("design:type",String)],c.prototype,"_single",void 0),c=i([(0,o.customElement)("multiple-widgets"),s("design:paramtypes",[])],c)},2461:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>l});var r=n(5862),o=n(9662),i=(n(9975),n(3283),n(1243),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[r.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?r.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:r.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?r.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:r.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};i([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"name",void 0),i([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"label",void 0),i([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"value",void 0),i([(0,o.property)({type:Number}),s("design:type",Number)],l.prototype,"randomID",void 0),i([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"id",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"required",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"multiple",void 0),i([(0,o.property)({type:Number}),s("design:type",Number)],l.prototype,"startNumber",void 0),i([(0,o.property)({type:Number}),s("design:type",Number)],l.prototype,"rowsPerPage",void 0),i([(0,o.property)({type:Number}),s("design:type",Number)],l.prototype,"totalShowing",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=i([(0,o.customElement)("file-input")],l)},3947:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditGroup:()=>a}),n(9579);var r=n(3750),o=n(4108),i=n(5862),s=n(9662),l=(n(4153),n(8693),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(),(0,r.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function l(e){try{c(i.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,l)}c((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){return i.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-group CLIENT_ID="${this.clientId}"></attendance-setup-form-group>
    `}firstUpgroupd(){}createRenderRoot(){return this}};l([(0,s.property)({type:String}),c("design:type",String)],a.prototype,"email",void 0),l([(0,s.property)({type:Number}),c("design:type",Number)],a.prototype,"mId",void 0),l([(0,s.property)({type:Number}),c("design:type",Number)],a.prototype,"clientId",void 0),a=l([(0,s.customElement)("attendance-setup-form-edit-group"),c("design:paramtypes",[])],a)},4153:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormGroup:()=>y}),n(5501);var r,o,i=n(5862),s=n(9662),l=n(8881),c=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),a=n(4843),d=n(2218),u=n(4672),p=n(7128),h=(n(5866),n(7970)),m=n(2892),f=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((r=r.apply(e,t||[])).next())}))};let y=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__groupUser=null,this.__schedule=null,this.__scheduleGroups=null,this._groups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _groupUser(e){this.__groupUser=e,this.requestUpdate()}get _groupUser(){return this.__groupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleGroup(),yield this.getGroups()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return null===this._schedule?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?i.html`${this.scheduleGroup}`:i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleGroup(){return null===this._scheduleGroups?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleGroups?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Group</span>: undefined error</h4>
          </div>
        </div>
      `:i.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return i.html`${this.table}`}get table(){return this._scheduleGroups.results.length>0?i.html`
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
      `:i.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceGroups(){return i.html`
      ${this._scheduleGroups.results.map(((e,t)=>i.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getGroup(e.groupId),i.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceGroup}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return i.html`
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
    `}get groupField(){const e=this._groups.map((e=>i.html`<mwc-list-item value="${e.id}">${e.group}</mwc-list-item>`));return i.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Group</h4>
            <mwc-select name="groupId" class="w-full" id="groupId" label="Select Group" outlined required>
              <mwc-list-item value="">Select Group</mwc-list-item>
              <mwc-list-item value="all">All Groups</mwc-list-item>
              ${i.html`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}groupFieldDefault(e){return i.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.groupField}
        groupField-id="${e}" no_delete></multiple-widgets>
    `}addGroupField(){const e=this.showGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showGroupFieldAllSelector.children[e-1].getAttribute("groupField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("groupField-id",String(t)),this.showGroupFieldAllSelector.append(n);const r=this.showGroupFieldAllSelector.querySelectorAll('multiple-widgets[groupField-id="'+t+'"]'),o=this.groupField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new c.MDCDataTable(e)}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_AttendanceAddScheduleGroup)()}))}deleteQuestionnaireMeetingAttendanceGroup(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_AttendanceDeleteScheduleGroup)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleGroup(){return v(this,void 0,void 0,(function*(){const e=yield(0,a.GET_AttendanceScheduleGroup)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");console.log({_networkResponse:e}),this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroups(){return v(this,void 0,void 0,(function*(){const e=yield(0,m.GET_MemberGroupingsGroups)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._groups=[...this._groups,...t]}))}getGroup(e){return v(this,void 0,void 0,(function*(){const t=yield(0,m.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};y.styles=[i.css`
   :host { display: block; }
  `],f([(0,s.property)({type:Number}),g("design:type",Number)],y.prototype,"CLIENT_ID",void 0),f([(0,s.property)({type:Number}),g("design:type",Number)],y.prototype,"startSearchPage",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],y.prototype,"_groups",void 0),f([(0,s.property)({type:Array}),g("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],y.prototype,"_data",void 0),f([(0,s.property)({type:Object}),g("design:type",Object)],y.prototype,"urlQueryParams",void 0),f([(0,s.property)({type:Number}),g("design:type",Number)],y.prototype,"meetingEventId",void 0),f([(0,s.query)('[show-groupField="all"]'),g("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],y.prototype,"showGroupFieldAllSelector",void 0),y=f([(0,s.customElement)("attendance-setup-form-group"),g("design:paramtypes",[])],y)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_addons_widgets_form_new_select_ts","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--46e641","shared"],(()=>(3947,e(e.s=3947)))),e.O())])}));
//# sourceMappingURL=edit-group.js.map