"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/clocking/excuse"],{28207:(e,t,n)=>{n.r(t)},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>r,urlQueryParamsJoin:()=>i});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},i=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},57282:(e,t,n)=>{n.r(t),n.d(t,{MemberClockingExcuse_S:()=>r});var o=n(27325);function r(e){return{id:Number(e.id),clockingId:(0,o.MemberClockingInfo_S)(e.clockingId),excuse:String(e.excuse),enteredBy:Number(e.enteredBy),date:new Date(e.date)}}},94875:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceClockingExcuse:()=>s});var o=n(48485),r=n(87270),i=n(14492),c=n(33600);function s(e=null,t=""){return n=this,s=void 0,a=function*(){const n=(0,c.getUserLoginInfoCookie)(),s=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{i(a.next(e))}catch(e){t(e)}}function r(e){try{i(a.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,r)}i((a=a.apply(n,s||[])).next())}));var n,s,l,a}},6518:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceClockingExcuse:()=>u});var o=n(86455),r=n.n(o),i=n(48485),c=n(87270),s=n(14492),l=n(8967),a=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse",n=document.querySelector('[make-general-posts="add-excuse"]'),o=new FormData(n);return r().fire({title:"Enter Excuse?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new s.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{if(o instanceof Object){const e=o.response;console.log({"VALUE.data":e.data}),window.location.reload()}else window.location.reload()}),500)}}))}))}},79152:(e,t,n)=>{n.r(t),n.d(t,{PUT_AttendanceClockingExcuse:()=>u});var o=n(86455),r=n.n(o),i=n(48485),c=n(87270),s=n(14492),l=n(8967),a=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse/"+e,o=document.querySelector('[make-general-posts="add-excuse"]'),u=new FormData(o);return r().fire({title:"Update Excuse?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(n,{method:"PUT",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new s.NetWorkCallResponses("post",e,!1,o),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},65118:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceClocking:()=>s});var o=n(48485),r=n(87270),i=n(14492),c=n(33600);function s(e=null,t=""){return n=this,s=void 0,a=function*(){const n=(0,c.getUserLoginInfoCookie)(),s=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{i(a.next(e))}catch(e){t(e)}}function r(e){try{i(a.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,r)}i((a=a.apply(n,s||[])).next())}));var n,s,l,a}},48763:(e,t,n)=>{n.r(t),n.d(t,{AlertCard:()=>s});var o=n(85862),r=n(59662),i=(n(28207),function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends o.LitElement{constructor(){super(),this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      <div class="alert-box">
        <div class="alert-container ${this.getClass}">
          <aside class="${this.getClass}">
            <div class="padded">
              ${this.getIcon}
            </div>
          </aside>
          <div class="content">
            <header class="header">
              ${this.header}
            </header>
            <main class="main">
              ${this.content}
            </main>
          </div>
        </div>
      </div>
    `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?o.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?o.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?o.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?o.html`<mwc-icon>warning</mwc-icon>`:this.danger?o.html`<mwc-icon>error_outline</mwc-icon>`:this.default?o.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?o.html`<mwc-icon>star_outline</mwc-icon>`:o.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};s.styles=[o.css`
   :host { display: block; }
  `],i([(0,r.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"success",void 0),i([(0,r.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"info",void 0),i([(0,r.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"warning",void 0),i([(0,r.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"danger",void 0),i([(0,r.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"default",void 0),i([(0,r.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"primary",void 0),s=i([(0,r.customElement)("alert-card"),c("design:paramtypes",[])],s)},92715:(e,t,n)=>{n.r(t),n.d(t,{LinkButton:()=>s});var o=n(85862),r=n(59662),i=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends o.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?o.html`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:o.html`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};i([(0,r.property)({type:String}),c("design:type",String)],s.prototype,"aClass",void 0),i([(0,r.property)({type:String}),c("design:type",String)],s.prototype,"bClass",void 0),i([(0,r.property)({type:String}),c("design:type",String)],s.prototype,"icon",void 0),i([(0,r.property)({type:String}),c("design:type",String)],s.prototype,"href",void 0),i([(0,r.property)({type:String}),c("design:type",String)],s.prototype,"label",void 0),i([(0,r.property)({type:String}),c("design:type",String)],s.prototype,"isBlockContent",void 0),i([(0,r.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"raised",void 0),s=i([(0,r.customElement)("link-button")],s)},3554:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingExcuse:()=>p}),n(73794);var o=n(67052),r=n(44672),i=n(85862),c=n(59662),s=(n(92715),n(48763),n(36034),n(51511),n(57282)),l=n(94875),a=n(6518),d=n(79152),u=n(65118),h=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((o=o.apply(e,t||[])).next())}))};let p=class extends i.LitElement{constructor(){super(),this.__memberClockingInfo=null,this.clockingId=0,this.clockingIdEnc=null,this._clockingExcuse=null}set _memberClockingInfo(e){this.__memberClockingInfo=e,this.requestUpdate()}get _memberClockingInfo(){return this.__memberClockingInfo}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),yield this.getAttendanceClocking(),yield this.getAttendanceClockingExcuse()}))}disconnectedCallback(){}render(){if(0===this.clockingId||null===this.clockingId||Number.isNaN(this.clockingId)){const e=i.html`<h4 class="text-white">Error</h4>`,t=i.html`
        <div>
          <p class="text-black mb-2">Clocking ID Not Found!</p>
        </div>
      `;return i.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{let e=null;if(e=null!==this._memberClockingInfo&&void 0!==this._memberClockingInfo.data?Array.isArray(this._memberClockingInfo.data)?this._memberClockingInfo.data.length>0?this._memberClockingInfo.data[0]:{}:this._memberClockingInfo.data:null,void 0===e){const e=i.html`<h4 class="text-white">Empty</h4>`,t=i.html`
          <div>
            <p class="text-black mb-2">Attendance Clocking Not Found!</p>
            <p class="text-black mb-2"><small>Try again later.</small></p>
          </div>
        `;return i.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}if(null!==e){if(null===this._clockingExcuse)return i.html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `;{const t=void 0===e.id?0:e.id,n=void 0===e.id?0:e.meetingEventId.id,o=0===n?i.html`
            <mwc-button label="Save Excuse" raised class="button" @click="${this.submitForm}" disabled>
            </mwc-button>`:i.html`
            <mwc-button label="Save Excuse" raised class="button" @click="${this.submitForm}">
            </mwc-button>
          `;return i.html`
            <form method="post" action="#" class="form mt-0" make-general-posts="add-excuse">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-10">
                  <h4 class="font-semibold my-2">Enter Excuse</h4>
                  ${this.excuse}
                </div>
                <div class="col-md-10 col-lg-10 my-2">
                  <div class="form-input-container">
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
          `}}if(null===this._clockingExcuse)return i.html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `}}get excuse(){if(this._clockingExcuse.length>0){const e=this._clockingExcuse[0];return i.html`<mwc-textarea class="h-96" value="${e.excuse}" outlined name="excuse" id="excuse"></mwc-textarea>`}return i.html`<mwc-textarea class="h-96" outlined name="excuse" id="excuse"></mwc-textarea>`}firstUpdated(){}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("clocking-id"),t=null!==e?(0,o.base64Decode)(e):null;this.clockingId=Number.isNaN(t)?null:Number(t),this.clockingIdEnc=(0,o.base64Encode)(String(this.clockingId),!0)}getAttendanceClockingExcuse(){return m(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceClockingExcuse)(null,"?clockingId="+this.clockingId);if(null!==e){const t=e.paginResponse;if(e.response,null!==t){const e=t.results.map((e=>(0,s.MemberClockingExcuse_S)(e)));this._clockingExcuse=e}else this._clockingExcuse=[]}else this._clockingExcuse=[]}))}getAttendanceClocking(){return m(this,void 0,void 0,(function*(){const e=yield(0,u.GET_AttendanceClocking)(this.clockingId);this._memberClockingInfo=null===e?void 0:e.response}))}submitForm(e){return m(this,void 0,void 0,(function*(){if(e.preventDefault(),this._clockingExcuse.length>0){const e=this._clockingExcuse[0].id;yield(0,d.PUT_AttendanceClockingExcuse)(e)}else yield(0,a.POST_AttendanceClockingExcuse)()}))}createRenderRoot(){return this}};p.styles=[i.css`
   :host { display: block; }
  `],h([(0,c.property)({type:Number}),f("design:type",Number)],p.prototype,"clockingId",void 0),h([(0,c.property)({type:String}),f("design:type",String)],p.prototype,"clockingIdEnc",void 0),h([(0,c.property)({type:Array}),f("design:type",Array)],p.prototype,"_clockingExcuse",void 0),p=h([(0,c.customElement)("pdb-attendance-clocking-excuse"),f("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_clocking_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_clients_branches_-dc6079","src_assets_styles_views_attendance_clocking_main_scss-src_addons_interfaces_attendance_member-e0624a","shared"],(()=>(3554,e(e.s=3554)))),e.O())])}));
//# sourceMappingURL=excuse.js.map