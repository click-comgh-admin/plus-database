"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-attachment"],{1243:(e,t,n)=>{n.r(t)},7909:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleAttachment:()=>m});var r=n(6455),s=n.n(r),o=n(8485),i=n(1942),a=n(7270),l=n(7052),c=n(4492),d=n(8967),u=n(3600),h=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))};function m(e,t="client_tokenLogin"){return h(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(r,n,t);const m=(0,l.base64Decode)((0,i.get_cookie)(t)),p=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment/"+e,f={};return s().fire({title:"Remove Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,a.http)(p,{method:"DELETE",body:JSON.stringify(f),headers:{Authorization:"Token "+m}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new c.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2404:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleAttachment:()=>c});var r=n(8485),s=n(1942),o=n(7270),i=n(7052),a=n(4492),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.verifyToken)(d,c,n);const u=(0,i.base64Decode)((0,s.get_cookie)(n)),h=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,m=yield(0,o.http)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new a.NetWorkCallResponses("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{s(h.next(e))}catch(e){t(e)}}function r(e){try{s(h.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof u?s:new u((function(e){e(s)}))).then(n,r)}s((h=h.apply(c,d||[])).next())}));var c,d,u,h}},5217:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleAttachment:()=>m});var r=n(6455),s=n.n(r),o=n(8485),i=n(1942),a=n(7270),l=n(7052),c=n(4492),d=n(8967),u=n(3600),h=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))};function m(e="client_tokenLogin"){return h(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(n,t,e);const r=(0,l.base64Decode)((0,i.get_cookie)(e)),m=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment",p=document.querySelector('[make-general-posts="add-schedule-attachment"]'),f=new FormData(p);return s().fire({title:"Add Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,a.http)(m,{method:"POST",body:f,headers:{Authorization:"Token "+r}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,p),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,d.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>c});var r=n(8485),s=n(1942),o=n(7270),i=n(7052),a=n(4492),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.verifyToken)(d,c,n);const u=(0,i.base64Decode)((0,s.get_cookie)(n)),h=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,m=yield(0,o.http)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new a.NetWorkCallResponses("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{s(h.next(e))}catch(e){t(e)}}function r(e){try{s(h.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof u?s:new u((function(e){e(s)}))).then(n,r)}s((h=h.apply(c,d||[])).next())}));var c,d,u,h}},7725:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>a});var r=n(5862),s=n(9662),o=(n(9975),n(3283),n(1243),function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[r.css`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,s.property)({type:String}),i("design:type",String)],a.prototype,"name",void 0),o([(0,s.property)({type:String}),i("design:type",String)],a.prototype,"label",void 0),o([(0,s.property)({type:String}),i("design:type",String)],a.prototype,"value",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],a.prototype,"randomID",void 0),o([(0,s.property)({type:String}),i("design:type",String)],a.prototype,"id",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"required",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"multiple",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],a.prototype,"startNumber",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],a.prototype,"rowsPerPage",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],a.prototype,"totalShowing",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=o([(0,s.customElement)("file-input")],a)},3731:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAttachment:()=>c}),n(9579);var r=n(3750),s=n(3600),o=n(5862),i=n(9662),a=(n(3261),n(8693),function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),(0,r.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,s){function i(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,a)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){return o.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-attachment CLIENT_ID="${this.clientId}"></attendance-setup-form-attachment>
    `}firstUpdated(){}createRenderRoot(){return this}};a([(0,i.property)({type:String}),l("design:type",String)],c.prototype,"email",void 0),a([(0,i.property)({type:Number}),l("design:type",Number)],c.prototype,"mId",void 0),a([(0,i.property)({type:Number}),l("design:type",Number)],c.prototype,"clientId",void 0),c=a([(0,i.customElement)("attendance-setup-form-edit-attachment"),l("design:paramtypes",[])],c)},3261:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAttachment:()=>b}),n(5501);var r,s,o=n(5862),i=n(9662),a=(n(3283),n(1511),n(3690),n(1854),n(7725),n(9068)),l=n(2404),c=n(2218),d=n(4672),u=n(7909),h=n(6262),m=(n(5866),n(8485)),p=n(7052),f=n(1942),v=n(5217),g=function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))};let b=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__attachmentUser=null,this.__schedule=null,this.__scheduleAttachments=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _attachmentUser(e){this.__attachmentUser=e,this.requestUpdate()}get _attachmentUser(){return this.__attachmentUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
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
      `:!0===this._schedule.success?o.html`${this.scheduleAttachment}`:o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAttachment(){return null===this._scheduleAttachments?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAttachments?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Attachment</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.html`${this.table}`}get table(){return this._scheduleAttachments.results.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Attachment">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Attachment
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
                ${this.getMeetingAttendanceAttachments}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAttachments(){return o.html`
      ${this._scheduleAttachments.results.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${m.CONSTANTS.URLS.FILE_BUCKET_BASE_URL}files${e.attachment}" target="_blank">Open File ${t+1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAttachment}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Attachment</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Attachment!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-attachment">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Attachment" raised class="button" @click="${this.submitForm}">
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
    `}get attachmentField(){return(0,p.base64Decode)((0,f.get_cookie)("client_tokenLogin")),o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="attachment" name="attachment" label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}attachmentFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.attachmentField}
        attachmentField-id="${e}" no_delete></multiple-widgets>
    `}addAttachmentField(){const e=this.showAttachmentFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAttachmentFieldAllSelector.children[e-1].getAttribute("attachmentField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("attachmentField-id",String(t)),this.showAttachmentFieldAllSelector.append(n);const r=this.showAttachmentFieldAllSelector.querySelectorAll('multiple-widgets[attachmentField-id="'+t+'"]'),s=this.attachmentField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}getAttachmentUsers(){return _(this,void 0,void 0,(function*(){const e=yield(0,h.GET_ClientUsers)();this._attachmentUser=null===e?void 0:e.paginResponse}))}getAttachmentUser(e){return _(this,void 0,void 0,(function*(){const t=yield(0,h.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return console.log({"user.firstname user.surname":e.firstname+" "+e.surname}),e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return _(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,v.POST_AttendanceAddScheduleAttachment)()}))}deleteQuestionnaireMeetingAttendanceAttachment(e){return _(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,u.DELETE_AttendanceDeleteScheduleAttachment)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,r=e.results,s=document.querySelector('[id="attachment"]');console.log({data:e,params:t,RESULTS:r,SELECTOR:s});let o=[];if(n>0){var i=r;console.log({"smbfl-_data":i});for(let e=0;e<i.length;e++){const t=i[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return console.log({processedData:o}),{results:o,total:n,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,d.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return _(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAttachment(){return _(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleAttachment)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};b.styles=[o.css`
   :host { display: block; }
  `],g([(0,i.property)({type:Number}),y("design:type",Number)],b.prototype,"CLIENT_ID",void 0),g([(0,i.property)({type:Number}),y("design:type",Number)],b.prototype,"startSearchPage",void 0),g([(0,i.property)({type:Array}),y("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],b.prototype,"_data",void 0),g([(0,i.property)({type:Object}),y("design:type",Object)],b.prototype,"urlQueryParams",void 0),g([(0,i.property)({type:Number}),y("design:type",Number)],b.prototype,"meetingEventId",void 0),g([(0,i.query)('[show-attachmentField="all"]'),y("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],b.prototype,"showAttachmentFieldAllSelector",void 0),b=g([(0,i.customElement)("attendance-setup-form-attachment"),y("design:paramtypes",[])],b)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-46c46b","src_assets_styles_views_widget_simple-table_main_scss-src_addons_widgets_add_remove_widget_in-e0b7ca","shared"],(()=>(3731,e(e.s=3731)))),e.O())])}));
//# sourceMappingURL=edit-attachment.js.map