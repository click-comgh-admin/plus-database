"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-46c46b"],{4672:(t,e,n)=>{n.r(e),n.d(e,{urlQueryParams:()=>i,urlQueryParamsGet:()=>s,urlQueryParamsJoin:()=>r});const i=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},s=t=>{const e=new URLSearchParams(window.location.search),n=Object.fromEntries(e.entries());let i=null;for(const e in n)e===t&&(i=n[e]);return i},r=t=>{let e="",n=0;for(const i in t)n+=1,e+=`${n>1?"&":""}${i}=${t[i]}`;return e}},2218:(t,e,n)=>{n.r(e),n.d(e,{GET_AttendanceSchedule:()=>c});var i=n(8485),s=n(1942),r=n(7270),o=n(7052),l=n(4492),a=n(3600);function c(t=null,e="",n="client_tokenLogin"){return c=this,d=void 0,p=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.verifyToken)(d,c,n);const u=(0,o.base64Decode)((0,s.get_cookie)(n)),p=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===t?"":"/"+t)+e,b=yield(0,r.http)(p,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.NetWorkCallResponses("get",b)}catch(t){console.error({error:t});let e=b;return e.error=t,new l.NetWorkCallResponses("get",e,!0)}},new((u=void 0)||(u=Promise))((function(t,e){function n(t){try{s(p.next(t))}catch(t){e(t)}}function i(t){try{s(p.throw(t))}catch(t){e(t)}}function s(e){var s;e.done?t(e.value):(s=e.value,s instanceof u?s:new u((function(t){t(s)}))).then(n,i)}s((p=p.apply(c,d||[])).next())}));var c,d,u,p}},2715:(t,e,n)=>{n.r(e),n.d(e,{LinkButton:()=>l});var i=n(5862),s=n(9662),r=function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.html`
        <a class="${t} ${this.aClass}" href="${this.href}">
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
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"aClass",void 0),r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"bClass",void 0),r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"icon",void 0),r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"href",void 0),r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"label",void 0),r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"isBlockContent",void 0),r([(0,s.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"raised",void 0),l=r([(0,s.customElement)("link-button")],l)},3690:(t,e,n)=>{n.r(e),n.d(e,{SwitchInput:()=>l});var i=n(5862),s=n(9662),r=(n(9975),n(6788),function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o}),o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(t){this.isSelected=t.target.selected}createRenderRoot(){return this}};l.styles=[i.css`
      :host {
        display: block;
      }
    `],r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"name",void 0),r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"label",void 0),r([(0,s.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"selected",void 0),r([(0,s.property)({type:String}),o("design:type",String)],l.prototype,"value",void 0),r([(0,s.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"isSelected",void 0),l=r([(0,s.customElement)("switch-input")],l)},8693:(t,e,n)=>{n.r(e),n.d(e,{AttendanceSetupFormEditLinks:()=>c});var i=n(5862),s=n(9662),r=(n(2715),n(8485)),o=n(4672),l=function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends i.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}attendance/v2/settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let t=(0,o.urlQueryParamsGet)("meeting-event-id"),e=null!==t?Number(t):null;this.meetingEventId=Number.isNaN(e)?null:e}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],l([(0,s.property)({type:Number}),a("design:type",Number)],c.prototype,"meetingEventId",void 0),c=l([(0,s.customElement)("attendance-setup-form-edit-links"),a("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-46c46b.js.map