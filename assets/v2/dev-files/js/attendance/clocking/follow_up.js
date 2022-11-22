"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/clocking/follow_up"],{28207:(e,t,n)=>{n.r(t)},96951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>o,getDateTime:()=>r});const o=(e="")=>{let t=new Date,n=t.getFullYear(),o=t.getMonth()+1,r=t.getDate(),s=t.getHours(),i=t.getMinutes(),a=t.getSeconds(),l=n+"-"+o+"-"+r,c=s+":"+i+":"+a;return{dateTime:new Date(n,o,r,s,i,a),__string__:l+" "+c,__code__:n+o+r+s+i+a}},r=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>r,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},s=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},64783:(e,t,n)=>{n.r(t),n.d(t,{MemberClockingFollowUp_S:()=>s});var o=n(82486),r=n(27325);function s(e){return{id:Number(e.id),clockingId:(0,r.MemberClockingInfo_S)(e.clockingId),followUp:String(e.followUp),messagingType:Number(e.messagingType),sent:(0,o.Boolean_I)(e.sent),enteredBy:Number(e.enteredBy),date:new Date(e.date)}}},80101:(e,t,n)=>{n.r(t),n.d(t,{InstanceOfOrganizationMember:()=>a,MemberClockingAdditionalInfo_S:()=>l,MemberClockingInfoFull_S:()=>c});var o=n(22578),r=n(96246),s=n(18530),i=n(27325);const a=e=>"organizationName"in e&&"organizationType"in e&&"businessRegistered"in e&&"organizationPhone"in e&&"dateOfIncorporation"in e;function l(e,t){let n=null;return n=1===t?(0,r.MembershipUser_S)(e.memberInfo):s.Convert.toMembershipOrganizationUserModel(JSON.stringify(e.memberInfo)),{id:Number(e.id),memberId:Number(e.memberId),memberInfo:n,facebook:String(e.facebook),instagram:String(e.instagram),placeOfWork:String(e.placeOfWork),profession:String(e.profession),twitter:String(e.twitter),whatsapp:String(e.whatsapp),businessHashtag:String(e.businessHashtag),businessDescription:String(e.businessDescription),dateJoined:(0,o.Date_I)(e.dateJoined),date:(0,o.Date_I)(e.date)}}function c(e){const t=(0,i.MemberClockingInfo_S)(e.attendance);return{attendance:t,additionalInfo:l(e.additionalInfo,t.accountType),lastSeen:(0,o.Date_I)(e.lastSeen),status:String(e.status)}}},77364:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o,typeMap:()=>d});class o{static toGenericMessagingTypeModel(e){return a(JSON.parse(e),c("GenericMessagingTypeModel"),s)}static genericMessagingTypeModelToJson(e){return JSON.stringify(a(e,c("GenericMessagingTypeModel"),i),null,2)}}function r(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:r(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return a(t,o,n)}catch(e){}}return r(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,n))):r("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return r("object",o);const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[r.key]=a(i,r.typ,n,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(s[r]=a(o[r],t,n,r))})),s}(n(t),t.additional,e):r(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?r("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:r(e,t,o)}(t,e)}}function l(...e){return{unionMembers:e}}function c(e){return{ref:e}}const d={GenericMessagingTypeModel:(u=[{json:"id",js:"id",typ:l(null,0)},{json:"name",js:"name",typ:l(null,"")}],!1,{props:u,additional:false})};var u},87425:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceClockingFollowUp:()=>u});var o=n(86455),r=n.n(o),s=n(48485),i=n(87270),a=n(14492),l=n(8967),c=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up/"+e,o={};return r().fire({title:"Remove Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new a.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},76110:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceClockingFollowUp:()=>a});var o=n(48485),r=n(87270),s=n(14492),i=n(33600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,i.getUserLoginInfoCookie)(),a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{s(c.next(e))}catch(e){t(e)}}function r(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,r)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},23501:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceClockingFollowUp:()=>u});var o=n(86455),r=n.n(o),s=n(48485),i=n(87270),a=n(14492),l=n(8967),c=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up",n=document.querySelector('[make-general-posts="add-follow-up"]'),o=new FormData(n);return r().fire({title:"Send Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{if(o instanceof Object){const e=o.response;console.log({"VALUE.data":e.data}),window.location.reload()}else window.location.reload()}),500)}}))}))}},91986:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingFollowUp_Resend:()=>u});var o=n(86455),r=n.n(o),s=n(48485),i=n(87270),a=n(14492),l=n(8967),c=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up/resend/"+e,o={};return r().fire({title:"Resend Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new a.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},65118:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceClocking:()=>a});var o=n(48485),r=n(87270),s=n(14492),i=n(33600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,i.getUserLoginInfoCookie)(),a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{s(c.next(e))}catch(e){t(e)}}function r(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,r)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},25586:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericMessagingType:()=>a});var o=n(48485),r=n(87270),s=n(14492),i=n(33600);function a(e=null){return t=this,n=void 0,l=function*(){const t=(0,i.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/messaging-type"+(null===e?"":"/"+e),a=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function r(e){try{i(l.next(e))}catch(e){o(e)}}function s(e){try{i(l.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,s)}i((l=l.apply(t,n||[])).next())}));var t,n,a,l}},48763:(e,t,n)=>{n.r(t),n.d(t,{AlertCard:()=>a});var o=n(85862),r=n(59662),s=(n(28207),function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(),this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
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
    `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?o.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?o.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?o.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?o.html`<mwc-icon>warning</mwc-icon>`:this.danger?o.html`<mwc-icon>error_outline</mwc-icon>`:this.default?o.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?o.html`<mwc-icon>star_outline</mwc-icon>`:o.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};a.styles=[o.css`
   :host { display: block; }
  `],s([(0,r.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"success",void 0),s([(0,r.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"info",void 0),s([(0,r.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"warning",void 0),s([(0,r.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"danger",void 0),s([(0,r.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"default",void 0),s([(0,r.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"primary",void 0),a=s([(0,r.customElement)("alert-card"),i("design:paramtypes",[])],a)},92715:(e,t,n)=>{n.r(t),n.d(t,{LinkButton:()=>a});var o=n(85862),r=n(59662),s=function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?o.html`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};s([(0,r.property)({type:String}),i("design:type",String)],a.prototype,"aClass",void 0),s([(0,r.property)({type:String}),i("design:type",String)],a.prototype,"bClass",void 0),s([(0,r.property)({type:String}),i("design:type",String)],a.prototype,"icon",void 0),s([(0,r.property)({type:String}),i("design:type",String)],a.prototype,"href",void 0),s([(0,r.property)({type:String}),i("design:type",String)],a.prototype,"label",void 0),s([(0,r.property)({type:String}),i("design:type",String)],a.prototype,"isBlockContent",void 0),s([(0,r.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"raised",void 0),a=s([(0,r.customElement)("link-button")],a)},31772:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingFollowUp:()=>v}),n(73794);var o=n(67052),r=n(44672),s=n(85862),i=n(59662),a=(n(92715),n(48763),n(36034),n(33590),n(16413),n(40789),n(51511),n(96951)),l=n(64783),c=n(76110),d=n(23501),u=n(77364),m=n(25586),p=n(65118),f=n(87425),h=n(91986),g=n(80101),y=function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((o=o.apply(e,t||[])).next())}))};let v=class extends s.LitElement{constructor(){super(),this.__memberClockingInfo=null,this._messagingTypes=[],this.clockingId=0,this.showingForm=!1,this.clockingIdEnc=null,this._clockingFollowUp=null}set _memberClockingInfo(e){this.__memberClockingInfo=e,this.requestUpdate()}get _memberClockingInfo(){return this.__memberClockingInfo}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),yield this.getMessagingTypes(),yield this.getAttendanceClocking(),yield this.getAttendanceClockingFollowUp()}))}disconnectedCallback(){}render(){if(0===this.clockingId||null===this.clockingId||Number.isNaN(this.clockingId)){const e=s.html`<h4 class="text-white">Error</h4>`,t=s.html`
        <div>
          <p class="text-black mb-2">Clocking ID Not Found!</p>
        </div>
      `;return s.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{let e=null;if(e=null!==this._memberClockingInfo&&void 0!==this._memberClockingInfo.data?Array.isArray(this._memberClockingInfo.data)?this._memberClockingInfo.data.length>0?this._memberClockingInfo.data[0]:{}:this._memberClockingInfo.data:null,void 0===e){const e=s.html`<h4 class="text-white">Empty</h4>`,t=s.html`
          <div>
            <p class="text-black mb-2">Attendance Clocking Not Found!</p>
            <p class="text-black mb-2"><small>Try again later.</small></p>
          </div>
        `;return s.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}if(null!==e)return null===this._clockingFollowUp?s.html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `:s.html`
            <div class="block">
              <div class="my-1">${this.form(e)}</div>
              <div class="my-1">${this.messages}</div>
            </div>
          `;if(null===this._clockingFollowUp)return s.html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `}}get messages(){if(this._clockingFollowUp.length>0)return this._clockingFollowUp.map((e=>s.html`<div class="border rounded-none my-1">
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
            <div>${(0,a.getDateTime)(e.date,{dateStyle:"medium",timeStyle:"short"})}</div>
          </div>
        </div>`));{const e=s.html`<h4 class="text-white">Empty</h4>`,t=s.html`
        <div>
          <p class="text-black mb-2">No Follow-Ups sent yet!</p>
          <p class="text-black mb-2"><small>Click on "Send Follow-Up" button to send one.</small></p>
        </div>
      `;return s.html`<alert-card info .header="${e}" .content="${t}"></alert-card>`}}messageMetaData(e){let t=" - ",n=" - ",o=" - ";if((0,g.InstanceOfOrganizationMember)(e.clockingId.memberId)){const r=e.clockingId.memberId;t=`${r.organizationName}`,n=`${r.organizationPhone}`,o=`${r.organizationEmail}`}else{const r=e.clockingId.memberId;t=`${r.firstname} ${r.middlename} ${r.surname}`,n=`${r.phone}`,o=`${r.email}`}return s.html`
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
                      <p>${s.html`${t}`}</p>
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
                      <p>${s.html`<a href="tel:${n}" type="tel">${n}</a>`}</p>
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
                      <p>${s.html`<a href="mailto:${o}" type="email">${o}</a>`}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}form(e){const t=void 0===e.id?0:e.id,n=void 0===e.id?0:e.meetingEventId.id,o=0===n?s.html`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}" disabled>
      </mwc-button>`:s.html`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}">
      </mwc-button>
    `;return s.html`
      <mwc-button class="button success" outlined show_follow_up_form disabled>
        <mwc-icon>send</mwc-icon> Send Follow-Up 
        <mwc-circular-progress indeterminate show_follow_up_form_loading class="w-6"></mwc-circular-progress>
      </mwc-button>
      ${this.showingForm?s.html`
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <form method="post" action="#" class="form mt-0" make-general-posts="add-follow-up">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-12">
                <h4 class="font-semibold my-2">Select Messaging Type</h4>
                <mwc-select name="messagingType" id="messagingType" label="Select Messaging Type" outlined required>
                  ${this._messagingTypes.map((e=>s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
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
      `:s.nothing}
    `}get followUp(){return s.html`<mwc-textarea class="h-44" outlined name="followUp" id="followUp"></mwc-textarea>`}firstUpdated(){document.onreadystatechange=e=>{"complete"==document.readyState&&this.toggleFollowUpForm(e),"complete"==document.readyState&&this.toggleMessageMetadatForm(e)}}toggleMessageMetadatForm(e){const t=document.querySelectorAll("mwc-button[show_message_metadata]");document.querySelectorAll("mwc-button>[show_message_metadata_loading]").forEach((e=>{e.setAttribute("hidden","true")})),t.forEach((e=>{e.removeAttribute("disabled"),e.onclick=e=>b(this,void 0,void 0,(function*(){const t=e.target.getAttribute("message-meta-data-btn-id"),n=this.querySelector('[message-meta-data-id="'+t+'"]');n.hasAttribute("hidden")?n.removeAttribute("hidden"):n.setAttribute("hidden","")}))}))}toggleFollowUpForm(e){const t=document.querySelectorAll("mwc-button[show_follow_up_form]");document.querySelectorAll("mwc-button>[show_follow_up_form_loading]").forEach((e=>{e.setAttribute("hidden","true")})),t.forEach((e=>{e.removeAttribute("disabled"),e.onclick=e=>b(this,void 0,void 0,(function*(){this.showingForm=!this.showingForm}))}))}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("clocking-id"),t=null!==e?(0,o.base64Decode)(e):null;this.clockingId=Number.isNaN(t)?null:Number(t),this.clockingIdEnc=(0,o.base64Encode)(String(this.clockingId),!0)}getMessagingTypes(){return b(this,void 0,void 0,(function*(){const e=yield(0,m.GET_GenericMessagingType)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[{id:0,name:"Select Meeting Type"},...e.response.data.map((e=>u.Convert.toGenericMessagingTypeModel(JSON.stringify(e))))]),this._messagingTypes=[...this._messagingTypes,...t]}))}getAttendanceClockingFollowUp(){return b(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceClockingFollowUp)(null,"?clockingId="+this.clockingId);if(null!==e){const t=e.paginResponse;if(e.response,null!==t){const e=t.results.map((e=>(0,l.MemberClockingFollowUp_S)(e)));this._clockingFollowUp=e}else this._clockingFollowUp=[]}else this._clockingFollowUp=[]}))}getAttendanceClocking(){return b(this,void 0,void 0,(function*(){const e=yield(0,p.GET_AttendanceClocking)(this.clockingId);this._memberClockingInfo=null===e?void 0:e.response}))}deleteFollowUpMessage(e){return b(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,f.DELETE_AttendanceClockingFollowUp)(t)}))}resendFollowUpMessage(e){return b(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("resend-this-item"));yield(0,h.PATCH_AttendanceClockingFollowUp_Resend)(t)}))}submitForm(e){return b(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,d.POST_AttendanceClockingFollowUp)()}))}createRenderRoot(){return this}};v.styles=[s.css`
   :host { display: block; }
  `],y([(0,i.property)({type:Array}),w("design:type",Array)],v.prototype,"_messagingTypes",void 0),y([(0,i.property)({type:Number}),w("design:type",Number)],v.prototype,"clockingId",void 0),y([(0,i.property)({type:Boolean}),w("design:type",Boolean)],v.prototype,"showingForm",void 0),y([(0,i.property)({type:String}),w("design:type",String)],v.prototype,"clockingIdEnc",void 0),y([(0,i.property)({type:Array}),w("design:type",Array)],v.prototype,"_clockingFollowUp",void 0),v=y([(0,i.customElement)("pdb-attendance-clocking-follow_up"),w("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_clocking_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_clients_branches_-dc6079","src_assets_styles_views_attendance_clocking_main_scss-src_addons_interfaces_attendance_member-e0624a","shared"],(()=>(31772,e(e.s=31772)))),e.O())])}));
//# sourceMappingURL=follow_up.js.map