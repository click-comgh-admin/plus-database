"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-break"],{2831:(e,t,n)=>{n.r(t),n.d(t,{getTime:()=>r});const r=e=>{const t=new Date,n=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(n)}},8729:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleBreak:()=>m});var r=n(6455),s=n.n(r),o=n(8485),a=n(1942),i=n(7270),l=n(7052),c=n(4492),d=n(8967),u=n(3600),h=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};function m(e,t="client_tokenLogin"){return h(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(r,n,t);const m=(0,l.base64Decode)((0,a.get_cookie)(t)),p=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break/"+e,f={};return s().fire({title:"Remove Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,i.http)(p,{method:"DELETE",body:JSON.stringify(f),headers:{Authorization:"Token "+m}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new c.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},706:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleBreak:()=>c});var r=n(8485),s=n(1942),o=n(7270),a=n(7052),i=n(4492),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.verifyToken)(d,c,n);const u=(0,a.base64Decode)((0,s.get_cookie)(n)),h=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,m=yield(0,o.http)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new i.NetWorkCallResponses("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{s(h.next(e))}catch(e){t(e)}}function r(e){try{s(h.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof u?s:new u((function(e){e(s)}))).then(n,r)}s((h=h.apply(c,d||[])).next())}));var c,d,u,h}},3444:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleBreak:()=>m});var r=n(6455),s=n.n(r),o=n(8485),a=n(1942),i=n(7270),l=n(7052),c=n(4492),d=n(8967),u=n(3600),h=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};function m(e="client_tokenLogin"){return h(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(n,t,e);const r=(0,l.base64Decode)((0,a.get_cookie)(e)),m=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break",p=document.querySelector('[make-general-posts="add-schedule-break"]'),f=new FormData(p);return s().fire({title:"Setup Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,i.http)(m,{method:"POST",body:f,headers:{Authorization:"Token "+r}},!1).then((e=>{console.log({HTTP:e});try{const t=new c.NetWorkCallResponses("post",e,!1,p),n=t.response;if(console.log({_RESPONSE:n}),"nameError"in n&&"unknownError"in n&&n.unknownError.length>0){console.log({"_RESPONSE.unknownError":n.unknownError});let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,d.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new c.NetWorkCallResponses("post",n,!0,p);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>c});var r=n(8485),s=n(1942),o=n(7270),a=n(7052),i=n(4492),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.verifyToken)(d,c,n);const u=(0,a.base64Decode)((0,s.get_cookie)(n)),h=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,m=yield(0,o.http)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new i.NetWorkCallResponses("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{s(h.next(e))}catch(e){t(e)}}function r(e){try{s(h.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof u?s:new u((function(e){e(s)}))).then(n,r)}s((h=h.apply(c,d||[])).next())}));var c,d,u,h}},8951:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditBreak:()=>c}),n(9579);var r=n(3750),s=n(3600),o=n(5862),a=n(9662),i=(n(6723),n(8693),function(e,t,n,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),(0,r.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,i)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){return o.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-break CLIENT_ID="${this.clientId}"></attendance-setup-form-break>
    `}firstUpdated(){}createRenderRoot(){return this}};i([(0,a.property)({type:String}),l("design:type",String)],c.prototype,"email",void 0),i([(0,a.property)({type:Number}),l("design:type",Number)],c.prototype,"mId",void 0),i([(0,a.property)({type:Number}),l("design:type",Number)],c.prototype,"clientId",void 0),c=i([(0,a.customElement)("attendance-setup-form-edit-break"),l("design:paramtypes",[])],c)},6723:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormBreak:()=>w}),n(5501);var r,s,o=n(5862),a=n(9662),i=(n(3283),n(1511),n(3690),n(1854),n(9068)),l=n(2831),c=n(706),d=n(2218),u=n(4672),h=n(8729),m=n(6262),p=(n(5866),n(7052)),f=n(1942),_=n(3444),v=function(e,t,n,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};let w=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__breakUser=null,this.__schedule=null,this.__scheduleBreaks=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _breakUser(e){this.__breakUser=e,this.requestUpdate()}get _breakUser(){return this.__breakUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
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
      `:!0===this._schedule.success?o.html`${this.scheduleBreak}`:o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleBreak(){return null===this._scheduleBreaks?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleBreaks?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Break</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.html`${this.table}`}get table(){return this._scheduleBreaks.results.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Break">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Time
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Time
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
                ${this.getMeetingAttendanceBreaks}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceBreaks(){return o.html`
      ${this._scheduleBreaks.results.map((e=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${(0,l.getTime)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,l.getTime)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceBreak}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Break</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Break!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-break">
                <div class="p-0 m-0" show-breakField="all">
                  ${this.breakFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Break" raised class="button" @click="${this.submitForm}">
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
    `}get breakField(){return(0,p.base64Decode)((0,f.get_cookie)("client_tokenLogin")),o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Start Time</h4> 
            <mwc-textfield name="startBreak" type="time" class="w-full" id="startBreak" label="Select Start Time" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Time</h4> 
            <mwc-textfield name="endBreak" type="time" class="w-full" id="endBreak" label="Select End Time" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}breakFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.breakField}
        breakField-id="${e}" no_delete></multiple-widgets>
    `}addBreakField(){const e=this.showBreakFieldAllSelector.children.length,t=(0===e?-1:Number(this.showBreakFieldAllSelector.children[e-1].getAttribute("breakField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("breakField-id",String(t)),this.showBreakFieldAllSelector.append(n);const r=this.showBreakFieldAllSelector.querySelectorAll('multiple-widgets[breakField-id="'+t+'"]'),s=this.breakField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new i.MDCDataTable(e)}))}getBreakUsers(){return g(this,void 0,void 0,(function*(){const e=yield(0,m.GET_ClientUsers)();this._breakUser=null===e?void 0:e.paginResponse}))}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,_.POST_AttendanceAddScheduleBreak)()}))}deleteQuestionnaireMeetingAttendanceBreak(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.DELETE_AttendanceDeleteScheduleBreak)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,r=e.results,s=document.querySelector('[id="breakId"]');console.log({data:e,params:t,RESULTS:r,SELECTOR:s});let o=[];if(n>0){var a=r;console.log({"smbfl-_data":a});for(let e=0;e<a.length;e++){const t=a[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return console.log({processedData:o}),{results:o,total:n,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return g(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleBreak(){return g(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleBreak)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};w.styles=[o.css`
   :host { display: block; }
  `],v([(0,a.property)({type:Number}),b("design:type",Number)],w.prototype,"CLIENT_ID",void 0),v([(0,a.property)({type:Number}),b("design:type",Number)],w.prototype,"startSearchPage",void 0),v([(0,a.property)({type:Array}),b("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],w.prototype,"_data",void 0),v([(0,a.property)({type:Object}),b("design:type",Object)],w.prototype,"urlQueryParams",void 0),v([(0,a.property)({type:Number}),b("design:type",Number)],w.prototype,"meetingEventId",void 0),v([(0,a.query)('[show-breakField="all"]'),b("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],w.prototype,"showBreakFieldAllSelector",void 0),w=v([(0,a.customElement)("attendance-setup-form-break"),b("design:paramtypes",[])],w)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-46c46b","src_assets_styles_views_widget_simple-table_main_scss-src_addons_widgets_add_remove_widget_in-e0b7ca","shared"],(()=>(8951,e(e.s=8951)))),e.O())])}));
//# sourceMappingURL=edit-break.js.map