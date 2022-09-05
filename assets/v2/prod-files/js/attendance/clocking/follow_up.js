"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2019],{6951:(e,t,n)=>{n.d(t,{F:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},5118:(e,t,n)=>{n.d(t,{p:()=>s});var o=n(771),r=n(7270),i=n(596),c=n(3600);function s(e=null,t=""){return n=this,s=void 0,a=function*(){const n=(0,c.Ie)(),s=o.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{i(a.next(e))}catch(e){t(e)}}function r(e){try{i(a.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,r)}i((a=a.apply(n,s||[])).next())}));var n,s,l,a}},6912:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingFollowUp:()=>M});var o=n(7052),r=n(4672),i=n(9392),c=n(9662),s=n(5713),l=(n(2715),n(8763),n(2935),n(1239),n(934),n(9261),n(6811),n(6951)),a=n(2486),d=n(7477),u=n(771),m=n(7270),f=n(596),p=n(3600),h=n(6455),g=n.n(h),w=n(8967),y=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((o=o.apply(e,t||[])).next())}))};function b(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function v(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function _(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function k(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=C[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:b(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return k(t,o,n)}catch(e){}}return b(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>k(t,e,n))):b("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return b("object",o);const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],c=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[i.key]=k(c,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(r[i]=k(o[i],t,n,i))})),r}(n(t),t.additional,e):b(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?b("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:b(e,t,o)}(t,e)}}function A(...e){return{unionMembers:e}}function x(e){return{ref:e}}const C={GenericMessagingTypeModel:(S=[{json:"id",js:"id",typ:A(null,0)},{json:"name",js:"name",typ:A(null,"")}],!1,{props:S,additional:false})};var S,I=n(5118),T=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((o=o.apply(e,t||[])).next())}))},$=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((o=o.apply(e,t||[])).next())}))},E=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},U=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},F=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((o=o.apply(e,t||[])).next())}))};let M=class extends i.oi{constructor(){super(),this.__memberClockingInfo=null,this._messagingTypes=[],this.clockingId=0,this.showingForm=!1,this.clockingIdEnc=null,this._clockingFollowUp=null}set _memberClockingInfo(e){this.__memberClockingInfo=e,this.requestUpdate()}get _memberClockingInfo(){return this.__memberClockingInfo}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return F(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),yield this.getMessagingTypes(),yield this.getAttendanceClocking(),yield this.getAttendanceClockingFollowUp()}))}disconnectedCallback(){}render(){if(0===this.clockingId||null===this.clockingId||Number.isNaN(this.clockingId)){const e=i.dy`<h4 class="text-white">Error</h4>`,t=i.dy`
        <div>
          <p class="text-black mb-2">Clocking ID Not Found!</p>
        </div>
      `;return i.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{let e=null;if(e=null!==this._memberClockingInfo&&void 0!==this._memberClockingInfo.data?Array.isArray(this._memberClockingInfo.data)?this._memberClockingInfo.data.length>0?this._memberClockingInfo.data[0]:{}:this._memberClockingInfo.data:null,void 0===e){const e=i.dy`<h4 class="text-white">Empty</h4>`,t=i.dy`
          <div>
            <p class="text-black mb-2">Attendance Clocking Not Found!</p>
            <p class="text-black mb-2"><small>Try again later.</small></p>
          </div>
        `;return i.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}if(null!==e)return null===this._clockingFollowUp?i.dy`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `:i.dy`
            <div class="block">
              <div class="my-1">${this.form(e)}</div>
              <div class="my-1">${this.messages}</div>
            </div>
          `;if(null===this._clockingFollowUp)return i.dy`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `}}get messages(){if(this._clockingFollowUp.length>0)return this._clockingFollowUp.map((e=>i.dy`<div class="border rounded-none my-1">
          <div class="border-b flex justify-end p-1">
            <div class="flex flex-col items-center pl-4">
              <mwc-icon-button class="bg-grow-early text-white" icon="forward" resend-this-item="${e.id}" @click="${this.resendFollowUpMessage}"></mwc-icon-button>
              <small class="block">Resend</small>
            </div>
            <div class="flex flex-col items-center pl-2">
              <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${e.id}" @click="${this.deleteFollowUpMessage}"></mwc-icon-button>
              <small class="block">Delete</small>
            </div>
          </div>
          <div class="border-0 p-1">
            <div class="flex flex-col justify-end items-end relative">
              ${this.messageMetaData(e)}
            </div>
            <div class="whitespace-pre-line">
              ${e.followUp}
            </div>
          </div>
          <div class="border-t flex justify-end p-1">
            <div>${(0,l.F)(e.date,{dateStyle:"medium",timeStyle:"short"})}</div>
          </div>
        </div>`));{const e=i.dy`<h4 class="text-white">Empty</h4>`,t=i.dy`
        <div>
          <p class="text-black mb-2">No Follow-Ups sent yet!</p>
          <p class="text-black mb-2"><small>Click on "Send Follow-Up" button to send one.</small></p>
        </div>
      `;return i.dy`<alert-card info .header="${e}" .content="${t}"></alert-card>`}}messageMetaData(e){return i.dy`
      <mwc-button class="button info w-max block" message-meta-data-btn-id="${e.id}" outlined show_message_metadata disabled>
        <mwc-icon>visibility</mwc-icon> Show MetaData 
        <mwc-circular-progress indeterminate show_message_metadata_loading class="w-6"></mwc-circular-progress>
      </mwc-button>
      <div class="sm:w-2/5 w-full absolute top-10 z-10">
        <div class="mdc-data-table w-full shadow border" hidden mdc-data-table="data-table" message-meta-data-id="${e.id}">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Meta-Data</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>...</b>
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
                      <p>Sent To</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${i.dy`${e.clockingId.memberId.firstname} ${e.clockingId.memberId.middlename} ${e.clockingId.memberId.surname}`}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Message Type</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="uppercase">
                      <p>${this._messagingTypes.map((t=>e.messagingType===t.id?t.name:""))}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Status</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="flex flex-row-reverse items-center">
                      <mwc-icon class="${e.sent?"text-green-700":"text-red-700"}">${e.sent?"check":"close"}</mwc-icon>
                      <small class="${e.sent?"text-green-700":"text-red-700"}">${e.sent?"Sent":"Pending..."}</small>
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
                      <p>${i.dy`<a href="tel:${e.clockingId.memberId.phone}" type="tel">${e.clockingId.memberId.phone}</a>`}</p>
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
                      <p>${i.dy`<a href="mailto:${e.clockingId.memberId.email}" type="email">${e.clockingId.memberId.email}</a>`}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}form(e){const t=void 0===e.id?0:e.id,n=void 0===e.id?0:e.meetingEventId.id,o=0===n?i.dy`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}" disabled>
      </mwc-button>`:i.dy`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}">
      </mwc-button>
    `;return i.dy`
      <mwc-button class="button success" outlined show_follow_up_form disabled>
        <mwc-icon>send</mwc-icon> Send Follow-Up 
        <mwc-circular-progress indeterminate show_follow_up_form_loading class="w-6"></mwc-circular-progress>
      </mwc-button>
      ${this.showingForm?i.dy`
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <form method="post" action="#" class="form mt-0" make-general-posts="add-follow-up">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-12">
                <h4 class="font-semibold my-2">Select Messaging Type</h4>
                <mwc-select name="messagingType" id="messagingType" label="Select Messaging Type" outlined required>
                  ${this._messagingTypes.map((e=>i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                </mwc-select>
              </div>
              <div class="col-md-12 col-lg-12">
                <h4 class="font-semibold my-2">Enter Follow Up</h4>
                ${this.followUp}
              </div>
              <div class="col-md-12 col-lg-12 my-2 z-10">
                <div class="form-input-container z-10">
                  ${o}
                </div>
          
                <div class="flex form-input-container items-center text-center my-2">
                  <input type="hidden" name="meetingEventId" value="${n}" />
                  <input type="hidden" name="clockingId" value="${t}" />
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </div>
            </div>
          </form>
          <hr class="my-2">
        </div>
      `:i.Ld}
    `}get followUp(){return i.dy`<mwc-textarea class="h-44" outlined name="followUp" id="followUp"></mwc-textarea>`}firstUpdated(){document.onreadystatechange=e=>{"complete"==document.readyState&&this.toggleFollowUpForm(e),"complete"==document.readyState&&this.toggleMessageMetadatForm(e)}}toggleMessageMetadatForm(e){const t=document.querySelectorAll("mwc-button[show_message_metadata]");document.querySelectorAll("mwc-button>[show_message_metadata_loading]").forEach((e=>{e.setAttribute("hidden","true")})),t.forEach((e=>{e.removeAttribute("disabled"),e.onclick=e=>F(this,void 0,void 0,(function*(){const t=e.target.getAttribute("message-meta-data-btn-id"),n=this.querySelector('[message-meta-data-id="'+t+'"]');n.hasAttribute("hidden")?n.removeAttribute("hidden"):n.setAttribute("hidden","")}))}))}toggleFollowUpForm(e){const t=document.querySelectorAll("mwc-button[show_follow_up_form]");document.querySelectorAll("mwc-button>[show_follow_up_form_loading]").forEach((e=>{e.setAttribute("hidden","true")})),t.forEach((e=>{e.removeAttribute("disabled"),e.onclick=e=>F(this,void 0,void 0,(function*(){this.showingForm=!this.showingForm}))}))}getMeetingEventId(){let e=(0,r.Jx)("clocking-id"),t=null!==e?(0,o.t)(e):null;this.clockingId=Number.isNaN(t)?null:Number(t),this.clockingIdEnc=(0,o.h)(String(this.clockingId),!0)}getMessagingTypes(){return F(this,void 0,void 0,(function*(){const e=yield function(e=null){return t=this,n=void 0,r=function*(){const t=(0,p.Ie)(),n=u.t.URLS.AKWAABA_API_BASE_URL+"generic/messaging-type"+(null===e?"":"/"+e),o=yield(0,m.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new f.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new f.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,i){function c(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,s)}l((r=r.apply(t,n||[])).next())}));var t,n,o,r}();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[{id:0,name:"Select Meeting Type"},...e.response.data.map((e=>class{static toGenericMessagingTypeModel(e){return k(JSON.parse(e),x("GenericMessagingTypeModel"),v)}static genericMessagingTypeModelToJson(e){return JSON.stringify(k(e,x("GenericMessagingTypeModel"),_),null,2)}}.toGenericMessagingTypeModel(JSON.stringify(e))))]),this._messagingTypes=[...this._messagingTypes,...t]}))}getAttendanceClockingFollowUp(){return F(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,o=void 0,i=function*(){const n=(0,p.Ie)(),o=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up"+(null===e?"":"/"+e)+t,r=yield(0,m.d)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new f.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new f.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function c(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,s)}l((i=i.apply(n,o||[])).next())}));var n,o,r,i}(null,"?clockingId="+this.clockingId);if(null!==e){const t=e.paginResponse;if(e.response,null!==t){const e=t.results.map((e=>{return t=e,{id:Number(t.id),clockingId:(0,d.e)(t.clockingId),followUp:String(t.followUp),messagingType:Number(t.messagingType),sent:(0,a.N)(t.sent),enteredBy:Number(t.enteredBy),date:new Date(t.date)};var t}));this._clockingFollowUp=e}else this._clockingFollowUp=[]}else this._clockingFollowUp=[]}))}getAttendanceClocking(){return F(this,void 0,void 0,(function*(){const e=yield(0,I.p)(this.clockingId);this._memberClockingInfo=null===e?void 0:e.response}))}deleteFollowUpMessage(e){return F(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return T(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up/"+e,o={};return g().fire({title:"Remove Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>T(this,void 0,void 0,(function*(){return yield(0,m.d)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new f.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,w.T)(e);g().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new f.H("delete",n,!0);return o.postForm,o}})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}g().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}resendFollowUpMessage(e){return F(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("resend-this-item"));yield function(e){return $(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up/resend/"+e,o={};return g().fire({title:"Resend Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>$(this,void 0,void 0,(function*(){return yield(0,m.d)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new f.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,w.T)(e);g().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new f.H("delete",n,!0);return o.postForm,o}})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}g().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}submitForm(e){return F(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return y(this,void 0,void 0,(function*(){const e=(0,p.Ie)(),t=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up",n=document.querySelector('[make-general-posts="add-follow-up"]'),o=new FormData(n);return g().fire({title:"Send Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>y(this,void 0,void 0,(function*(){return yield(0,m.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new f.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,w.T)(e);g().showValidationMessage(`${t}`)}return t})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&g().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{if(o instanceof Object){const e=o.response;console.log({"VALUE.data":e.data}),window.location.reload()}else window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};M.styles=[i.iv`
   :host { display: block; }
  `],E([(0,c.C)({type:Array}),U("design:type",Array)],M.prototype,"_messagingTypes",void 0),E([(0,c.C)({type:Number}),U("design:type",Number)],M.prototype,"clockingId",void 0),E([(0,c.C)({type:Boolean}),U("design:type",Boolean)],M.prototype,"showingForm",void 0),E([(0,c.C)({type:String}),U("design:type",String)],M.prototype,"clockingIdEnc",void 0),E([(0,c.C)({type:Array}),U("design:type",Array)],M.prototype,"_clockingFollowUp",void 0),M=E([(0,s.M)("pdb-attendance-clocking-follow_up"),U("design:paramtypes",[])],M)}},e=>(e.O(0,[2185,5744,9674,2459,938,5291,2585,8248,3712],(()=>(6912,e(e.s=6912)))),e.O())])}));
//# sourceMappingURL=follow_up.js.map