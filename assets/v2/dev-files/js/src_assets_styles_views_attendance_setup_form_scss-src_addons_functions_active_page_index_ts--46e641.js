"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--46e641"],{9579:(t,e,n)=>{n.r(e)},3750:(t,e,n)=>{n.r(e),n.d(e,{ACTIVE_PAGE__:()=>i});const i=()=>{const t=document.querySelectorAll("[mm-active]"),e=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];t.forEach((t=>{var n=t.getAttribute("mm-active").split("|");for(let i=0;i<n.length;i++){const s=n[i];e===s&&t.setAttribute("class","mm-active")}}))}},8967:(t,e,n)=>{n.r(e),n.d(e,{__swalStyle:()=>i,https_swal_error_format:()=>s});const i="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",s=(t,e=!0)=>{if(Array.isArray(t)){let n=(e?i:"")+"<ul>";return t.forEach((t=>{n+="string"==typeof t?`<li>${t}</li>\n`:`<li>${t.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(t,e,n)=>{n.r(e),n.d(e,{verifyToken:()=>l,tokenLogin:()=>d});var i=n(8485),s=n(7270),o=n(7052),r=n(1942),a=function(t,e,n,i){return new(n||(n=Promise))((function(s,o){function r(t){try{l(i.next(t))}catch(t){o(t)}}function a(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}l((i=i.apply(t,e||[])).next())}))};const l=(t,e,n)=>a(void 0,void 0,void 0,(function*(){const l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,r.get_cookie)(d),p=JSON.stringify({token:(0,o.base64Decode)(u)});if((t=>{const e=new Date;return Math.abs(t.getTime()-e.getTime())/36e5<24})(new Date((0,r.get_cookie)(d+"_date"))))return u;yield(0,s.http)(l,{method:"POST",body:p},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const t=(0,o.base64Encode)(String(i.jsonData.token));(0,r.set_cookies)(d,t,10),(0,r.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield c(t,e,n)}))))})),c=(t,e,n)=>a(void 0,void 0,void 0,(function*(){const a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:t,id:e});yield(0,s.http)(a,{method:"POST",body:c},!0).then((t=>{if(t.jsonData.token){const e=(0,o.base64Encode)(String(t.jsonData.token));(0,r.set_cookies)(l,e,10),(0,r.set_cookies_minutes)(l+"_date",(new Date).toUTCString(),10)}}))})),d=(t,e,n)=>a(void 0,void 0,void 0,(function*(){const i=(0,o.base64Encode)(String(e)),s=n;window.supersecret={unknowable:{ops:{email:t,id:i,cookieName:s}}},""==(0,r.get_cookie)(s)?yield c(t,i,n):yield l(t,i,n)}))},4672:(t,e,n)=>{n.r(e),n.d(e,{urlQueryParams:()=>i,urlQueryParamsGet:()=>s,urlQueryParamsJoin:()=>o});const i=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},s=t=>{const e=new URLSearchParams(window.location.search),n=Object.fromEntries(e.entries());let i=null;for(const e in n)e===t&&(i=n[e]);return i},o=t=>{let e="",n=0;for(const i in t)n+=1,e+=`${n>1?"&":""}${i}=${t[i]}`;return e}},2218:(t,e,n)=>{n.r(e),n.d(e,{GET_AttendanceSchedule:()=>a});var i=n(8485),s=n(7270),o=n(4492),r=n(3600);function a(t=null,e=""){return n=this,a=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===t?"":"/"+t)+e,l=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(t){console.error({error:t});let e=l;return e.error=t,new o.NetWorkCallResponses("get",e,!0)}},new((l=void 0)||(l=Promise))((function(t,e){function i(t){try{o(c.next(t))}catch(t){e(t)}}function s(t){try{o(c.throw(t))}catch(t){e(t)}}function o(e){var n;e.done?t(e.value):(n=e.value,n instanceof l?n:new l((function(t){t(n)}))).then(i,s)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2715:(t,e,n)=>{n.r(e),n.d(e,{LinkButton:()=>a});var i=n(5862),s=n(9662),o=function(t,e,n,i){var s,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends i.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.html`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:i.html`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"aClass",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"bClass",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"icon",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"href",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"label",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"isBlockContent",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"raised",void 0),a=o([(0,s.customElement)("link-button")],a)},3690:(t,e,n)=>{n.r(e),n.d(e,{SwitchInput:()=>a});var i=n(5862),s=n(9662),o=(n(9975),n(6788),function(t,e,n,i){var s,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r}),r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(t){this.isSelected=t.target.selected}createRenderRoot(){return this}};a.styles=[i.css`
      :host {
        display: block;
      }
    `],o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"name",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"label",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"selected",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"value",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"isSelected",void 0),a=o([(0,s.customElement)("switch-input")],a)},8693:(t,e,n)=>{n.r(e),n.d(e,{AttendanceSetupFormEditLinks:()=>c});var i=n(5862),s=n(9662),o=(n(2715),n(8485)),r=n(4672),a=function(t,e,n,i){var s,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends i.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let t=(0,r.urlQueryParamsGet)("meeting-event-id"),e=null!==t?Number(t):null;this.meetingEventId=Number.isNaN(e)?null:e}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,s.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--46e641.js.map