"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_generic_gender_index_ts-src_addons_interfaces_generic_meeting_event_clo-3e0446"],{26660:(e,t,n)=>{n.r(t)},72869:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericGenderInfo_S:()=>i})},45069:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericMeetingEventClockingTypeInfo_S:()=>i})},33437:(e,t,n)=>{n.r(t),n.d(t,{GroupingsGroup_S:()=>a});var i=n(50267);function a(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},660:(e,t,n)=>{n.r(t),n.d(t,{GroupingsSubGroup_S:()=>a}),n(2892);var i=n(50267);function a(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},11148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},8698:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},67824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},34843:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleGroup:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},32734:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleFromDate:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},11694:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleNow:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=""){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},17435:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleToday:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=""){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},56972:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleUpcoming:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=""){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},52218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},88786:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleSubGroup:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},87553:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericGender:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},14115:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericMeetingEventClockingType:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},90072:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsMemberCategories:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},89605:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>s});var i=n(48485),a=n(87270),r=n(14492),l=n(33600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},43690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>s});var i=n(85862),a=n(59662),r=(n(29975),n(16788),function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};s.styles=[i.css`
      :host {
        display: block;
      }
    `],r([(0,a.property)({type:String}),l("design:type",String)],s.prototype,"name",void 0),r([(0,a.property)({type:String}),l("design:type",String)],s.prototype,"label",void 0),r([(0,a.property)({type:Boolean}),l("design:type",Boolean)],s.prototype,"selected",void 0),r([(0,a.property)({type:String}),l("design:type",String)],s.prototype,"value",void 0),r([(0,a.property)({type:Boolean}),l("design:type",Boolean)],s.prototype,"isSelected",void 0),s=r([(0,a.customElement)("switch-input")],s)},38281:(e,t,n)=>{n.r(t),n.d(t,{UserProfilePhoto:()=>o});var i=n(48485),a=n(85862),r=n(59662),l=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};o.styles=[a.css`
   :host { display: block; }
  `],l([(0,r.property)({type:String}),s("design:type",String)],o.prototype,"url",void 0),l([(0,r.property)({type:String}),s("design:type",String)],o.prototype,"type",void 0),l([(0,r.property)({type:Boolean}),s("design:type",Boolean)],o.prototype,"rounded",void 0),l([(0,r.property)({type:String}),s("design:type",String)],o.prototype,"click-to-open",void 0),l([(0,r.property)({type:Number}),s("design:type",Number)],o.prototype,"size",void 0),o=l([(0,r.customElement)("user-profile-photo"),s("design:paramtypes",[])],o)},60997:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClockerMeetingPicker:()=>R}),n(73794);var i,a,r,l,s,o=n(85862),c=n(59662),d=n(17725),u=n(67052),h=n(44672),m=(n(51511),n(92715),n(48763),n(15474),n(66163),n(12583)),p=n(32506),g=n(33600),v=n(23283),y=n(11694),f=n(17435),b=n(32734),_=n(56972),w=(n(43690),n(11148)),S=n(8698),A=n(67824),k=n(58881),E=n(52218),I=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},N=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function l(e){try{o(i.next(e))}catch(e){r(e)}}function s(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}o((i=i.apply(e,t||[])).next())}))};let R=class extends o.LitElement{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/attendance/v2/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/attendance/v2/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return N(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,g.getUserLoginInfoCookie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return o.html`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this.allowFetch=!0,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?o.html`
        ${this.nowSectionData}
      `:2===this.formId?o.html`
        ${this.todaySectionData}
      `:3===this.formId?o.html`
        ${this.upcomingSectionData}
      `:4===this.formId?o.html`
        ${this.dateSectionData}
      `:o.html`
        ${this.allMeetingsSectionData}
      `}get notFound(){const e=o.html`<h4 class="text-white">Empty</h4>`,t=o.html`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return o.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:o.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:o.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:o.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=o.html`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return o.html`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?o.html`${e}${this.notFound}`:o.html`
      ${e}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceAllSchedules(),null===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return o.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const n=e.split(":");return void 0!==n[0]&&t.setHours(Number(n[0])),void 0!==n[1]&&t.setMinutes(Number(n[1])),void 0!==n[2]&&t.setSeconds(Number(n[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,n=(0,u.base64Encode)(String(t),!0),i=this.getTime(String(e.startTime)),a=this.getTime(String(e.closeTime));return o.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${n}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${i} - To: ${a} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,k.until)(this.getAttendanceScheduleDay(t),o.html`<span>Loading...</span>`):(0,k.until)(this.getAttendanceScheduleDate(t),o.html`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,h.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,u.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,p.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,m.ClientUserAccess_S)(e)).page.id}))}}))}getAttendanceAllSchedules(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,E.GET_AttendanceSchedule)(null,"?branchId="+e+"&length=1000000&order__by=-id&isRecuring="+String(this.recurring));console.log({_networkResponse:t}),null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleNow(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,y.GET_AttendanceScheduleNow)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,_.GET_AttendanceScheduleUpcoming)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,f.GET_AttendanceScheduleToday)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.GET_AttendanceScheduleFromDate)(this.todayDate,"?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return N(this,void 0,void 0,(function*(){const t=yield(0,A.GET_AttendanceScheduleDay)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),n=new Date(e.endDate).toLocaleDateString();return o.html`<li class="border p-1">Every ${(0,k.until)(this.getDayOfWeek(t),o.html`<i><small>Getting day of week</small>...</i>`)}, until ${n}</li>`}));return o.html`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return N(this,void 0,void 0,(function*(){const t=yield(0,w.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return N(this,void 0,void 0,(function*(){const t=yield(0,S.GET_AttendanceScheduleDate)(null,"?meetingEventId="+e+"&length=1000");if(console.log({_networkResponse:t}),null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return o.html`<li class="border p-1">On ${t}</li>`}));return o.html`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};R.styles=[o.css`
   :host { display: block; }
  `],I([(0,c.query)("#getNowMeetingsBtn"),B("design:type","function"==typeof(i=void 0!==v.Button&&v.Button)?i:Object)],R.prototype,"getNowMeetingsBtn",void 0),I([(0,c.query)("#getAllMeetingsBtn"),B("design:type","function"==typeof(a=void 0!==v.Button&&v.Button)?a:Object)],R.prototype,"getAllMeetingsBtn",void 0),I([(0,c.query)("#getTodayMeetingsBtn"),B("design:type","function"==typeof(r=void 0!==v.Button&&v.Button)?r:Object)],R.prototype,"getTodayMeetingsBtn",void 0),I([(0,c.query)("#getUpcomingMeetingsBtn"),B("design:type","function"==typeof(l=void 0!==v.Button&&v.Button)?l:Object)],R.prototype,"getUpcomingMeetingsBtn",void 0),I([(0,c.query)("#getDateMeetingsBtn"),B("design:type","function"==typeof(s=void 0!==v.Button&&v.Button)?s:Object)],R.prototype,"getDateMeetingsBtn",void 0),I([(0,c.property)({type:String}),B("design:type",String)],R.prototype,"todayDate",void 0),I([(0,c.property)({type:Number}),B("design:type",Number)],R.prototype,"meetingEventId",void 0),I([(0,c.property)({type:Number}),B("design:type",Number)],R.prototype,"loggedUserId",void 0),I([(0,c.property)({type:Number}),B("design:type",Number)],R.prototype,"formId",void 0),I([(0,c.property)({type:Boolean}),B("design:type",Boolean)],R.prototype,"allowFetch",void 0),I([(0,c.property)({type:Boolean}),B("design:type",Boolean)],R.prototype,"recurring",void 0),I([(0,c.property)({type:String}),B("design:type",String)],R.prototype,"openContentBaseUrl",void 0),I([(0,c.property)({type:String}),B("design:type",String)],R.prototype,"openMeetingEventBaseUrl",void 0),I([(0,c.property)({type:Array}),B("design:type",Array)],R.prototype,"_pageAccesses",void 0),I([(0,c.property)({type:Array}),B("design:type",Array)],R.prototype,"_activeBranchId",void 0),I([(0,c.property)({type:Array}),B("design:type",Array)],R.prototype,"_userLoginInfo",void 0),R=I([(0,c.customElement)("pdb-attendance-clocking-meeting-picker"),B("design:paramtypes",[])],R)},43629:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>c}),n(26660);var i=n(85862),a=n(59662),r=n(90072),l=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function l(e){try{o(i.next(e))}catch(e){r(e)}}function s(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}o((i=i.apply(e,t||[])).next())}))};let c=class extends i.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?i.html`
        ${this.materialSelectField}
      `:i.html`
        ${this.selectField}
      `}get materialSelectField(){return null===this.defaultValue?i.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>i.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `:i.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>this.defaultValue===e.id?i.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:i.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `}get selectField(){let e=i.html``;return e=null===this.defaultValue?i.html`
      <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
				<option value="0">${this.label}</option>
        ${this._memberCategories.map((e=>i.html`<option value="${e.id}">${e.category}</option>`))}
			</select>
    `:i.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>this.defaultValue===e.id?i.html`<option value="${e.id}" selected>${e.category}</option>`:i.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `,i.html`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return o(this,void 0,void 0,(function*(){const e=yield(0,r.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],l([(0,a.property)({type:String}),s("design:type",String)],c.prototype,"material",void 0),l([(0,a.property)({type:Number}),s("design:type",Number)],c.prototype,"defaultValue",void 0),l([(0,a.property)({type:String}),s("design:type",String)],c.prototype,"label",void 0),l([(0,a.property)({type:String}),s("design:type",String)],c.prototype,"name",void 0),l([(0,a.property)({type:String}),s("design:type",String)],c.prototype,"id",void 0),l([(0,a.property)({type:String}),s("design:type",String)],c.prototype,"tag_class",void 0),l([(0,a.property)({type:String}),s("design:type",String)],c.prototype,"css_style",void 0),l([(0,a.property)({type:Array}),s("design:type",Array)],c.prototype,"_memberCategories",void 0),c=l([(0,a.customElement)("pdb-membership-select-member-type"),s("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_addons_interfaces_generic_gender_index_ts-src_addons_interfaces_generic_meeting_event_clo-3e0446.js.map