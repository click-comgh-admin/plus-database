"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-date"],{3933:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleDate:()=>u});var o=n(6455),s=n.n(o),r=n(8485),a=n(7270),i=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/"+e,o={};return s().fire({title:"Remove Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new i.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new i.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8698:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>i});var o=n(8485),s=n(7270),r=n(4492),a=n(3600);function i(e=null,t=""){return n=this,i=void 0,l=function*(){const n=(0,a.getUserLoginInfoCookie)(),i=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,c=yield(0,s.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function o(e){try{r(l.next(e))}catch(e){t(e)}}function s(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(o,s)}r((l=l.apply(n,i||[])).next())}));var n,i,c,l}},9399:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleDateMultiple:()=>u});var o=n(6455),s=n.n(o),r=n(8485),a=n(7270),i=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/multiple",n=document.querySelector('[make-general-posts="add-schedule-date"]'),o=new FormData(n);return s().fire({title:"Setup Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,n),o=t.multipleResponse;console.log({_RESPONSES:o});let r=[];if(null!==o&&o.forEach((e=>{"nameError"in e&&"unknownError"in e&&e.unknownError.length>0&&e.unknownError.forEach((e=>{e.errors.forEach((e=>{r.push({error:e})}))}))})),r.length>0){const e=(0,c.https_swal_error_format)(r);return s().showValidationMessage(`${e}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2815:(e,t,n)=>{n.r(t),n.d(t,{PUT_AttendanceUpdateScheduleDateMultiple:()=>u});var o=n(6455),s=n.n(o),r=n(8485),a=n(7270),i=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/multiple/"+e,o=document.querySelector('[make-general-posts="add-schedule-date"]'),u=new FormData(o);return s().fire({title:"Update Setup Date(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"PUT",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,o),n=t.multipleResponse;console.log({_RESPONSES:n});let r=[];if(null!==n&&n.forEach((e=>{"nameError"in e&&"unknownError"in e&&e.unknownError.length>0&&e.unknownError.forEach((e=>{e.errors.forEach((e=>{r.push({error:e})}))}))})),r.length>0){const e=(0,c.https_swal_error_format)(r);return s().showValidationMessage(`${e}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},4846:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditDate:()=>l}),n(9579);var o=n(3750),s=n(4108),r=n(5862),a=n(9662),i=(n(1674),n(8693),function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),(0,o.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r}disconnectedCallback(){}render(){return r.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-date CLIENT_ID="${this.clientId}"></attendance-setup-form-date>
    `}firstUpdated(){}createRenderRoot(){return this}};i([(0,a.property)({type:String}),c("design:type",String)],l.prototype,"email",void 0),i([(0,a.property)({type:Number}),c("design:type",Number)],l.prototype,"mId",void 0),i([(0,a.property)({type:Number}),c("design:type",Number)],l.prototype,"clientId",void 0),l=i([(0,a.customElement)("attendance-setup-form-edit-date"),c("design:paramtypes",[])],l)},1674:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormDate:()=>_}),n(5501);var o,s,r=n(5862),a=n(9662),i=(n(3283),n(789),n(6034),n(3313),n(1511),n(3690),n(1854),n(9068)),c=n(8698),l=n(2218),d=n(4672),u=n(9399),h=n(2815),m=n(3933),f=function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((o=o.apply(e,t||[])).next())}))};let _=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this.__schedule=null,this.__scheduleDates=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleDate()}))}disconnectedCallback(){}render(){return r.html`${this.schedule}`}get schedule(){return null===this._schedule?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?r.html`${this.scheduleDate}`:r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleDate(){return null===this._scheduleDates?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleDates?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
          </div>
        </div>
      `:r.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.html`${this.table}`}get table(){return this._scheduleDates.results.length>0?r.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Date">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Date
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
                ${this.getMeetingAttendanceDates}
              </tbody>
            </table>
          </div>
        </div>
      `:r.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceDates(){return r.html`
      ${this._scheduleDates.results.map((e=>r.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceDate}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.html`
      <div class="form-container">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Date</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Date!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-date">
                <div class="container">
                  <div class="row justify-content-center" show-dateField="all">
                    ${this.dateFieldDefault(1)}
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addDateField}">
                      </mwc-icon-button>
                      <mwc-button label="Set Date" raised class="button" @click="${this.submitForm}">
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
    `}get dateField(){return r.html`
      <h4 class="font-semibold my-2">Select Date</h4> 
      <mwc-textfield name="date[]" multiple type="date" class="w-full" id="date"
        label="Select Date" outlined required>
      </mwc-textfield>
    `}dateFieldDefault(e){return r.html`
      <multiple-widgets class="col-md-6 col-lg-4 mb-3" .widget=${this.dateField}
        dateField-id="${e}"></multiple-widgets>
    `}addDateField(){const e=this.showDateFieldAllSelector.children.length,t=(0===e?-1:Number(this.showDateFieldAllSelector.children[e-1].index))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-6 col-lg-4 mb-3"),n.setAttribute("dateField-id",String(t)),this.showDateFieldAllSelector.append(n);const o=this.showDateFieldAllSelector.querySelectorAll('multiple-widgets[dateField-id="'+t+'"]');console.log({elements:o});const s=this.dateField.strings.join("");console.log({newElem:s}),setTimeout((()=>{o.forEach((e=>{console.log({element:e}),e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{const t=new i.MDCDataTable(e);console.log({dataTable:t})}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),this._scheduleDates.count>0?yield(0,h.PUT_AttendanceUpdateScheduleDateMultiple)(this.meetingEventId):yield(0,u.POST_AttendanceAddScheduleDateMultiple)()}))}deleteQuestionnaireMeetingAttendanceDate(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleDate)(t)}))}getMeetingEventId(){let e=(0,d.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleDate(){return v(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleDate)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");console.log({_networkResponse:e}),this._scheduleDates=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};_.styles=[r.css`
   :host { display: block; }
  `],f([(0,a.property)({type:Number}),p("design:type",Number)],_.prototype,"CLIENT_ID",void 0),f([(0,a.property)({type:Array}),p("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],_.prototype,"_data",void 0),f([(0,a.property)({type:Object}),p("design:type",Object)],_.prototype,"urlQueryParams",void 0),f([(0,a.property)({type:Number}),p("design:type",Number)],_.prototype,"meetingEventId",void 0),f([(0,a.query)('[show-dateField="all"]'),p("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],_.prototype,"showDateFieldAllSelector",void 0),_=f([(0,a.customElement)("attendance-setup-form-date"),p("design:paramtypes",[])],_)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-b8b398","src_addons_functions_https_https_swal_error_format_ts-src_addons_network_attendance_setup_sch-972913","shared"],(()=>(4846,e(e.s=4846)))),e.O())])}));
//# sourceMappingURL=edit-date.js.map