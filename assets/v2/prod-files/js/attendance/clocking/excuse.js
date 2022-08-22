/*! For license information please see excuse.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9784],{8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,n)=>{n.d(t,{O1:()=>r,Jx:()=>i,W3:()=>o});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},o=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},4739:(e,t,n)=>{n.d(t,{e:()=>h});const r=e=>{const t=String(e).toLowerCase();return"1"===t||"true"===t||!0===e};var i=n(2578),o=n(1551),c=n(1801),a=n(9492),s=n(6909),l=n(7202);function d(e){return{id:Number(e.id),name:String(e.name),accountType:Number(e.accountType),country:String(e.country),stateProvince:String(e.stateProvince),applicantFirstname:String(e.applicantFirstname),applicantSurname:String(e.applicantSurname),applicantGender:Number(e.applicantGender),applicantPhone:String(e.applicantPhone),applicantEmail:String(e.applicantEmail),applicantDesignationRole:Number(e.applicantDesignationRole),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),community:String(e.community),subscriptionDuration:Number(e.subscriptionDuration),subscriptionDate:new Date(e.updateDate),subscriptionFee:String(e.subscriptionFee),logo:String(e.logo),status:Number(e.status),archive:Number(e.archive),accountCategory:Number(e.accountCategory),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate),countryInfo:"countryInfo"in e?(0,a.V)(e.countryInfo):(0,a.Q)(),regionInfo:"regionInfo"in e?(0,l.J)(e.regionInfo):(0,l.A)(),districtInfo:"districtInfo"in e?(0,s.A)(e.districtInfo):(0,s.W)(),constituencyInfo:"constituencyInfo"in e?(0,c.a)(e.constituencyInfo):(0,c.w)()}}var u=n(1489);function f(e){const t=String(e).toLocaleLowerCase().split("T");let n="00:00:00";if(t.length>1?n=t[1]:1===t.length&&(n=t[0]),"null"===n)return null;let r=new Date;const i=n.split(":");return void 0!==i[0]&&r.setHours(Number(i[0])),void 0!==i[1]&&r.setMinutes(Number(i[1])),void 0!==i[2]&&r.setSeconds(Number(i[2])),r}var p=n(267);function m(e){return{id:Number(e.id),type:Number(e.type),memberType:Number(e.memberType),name:String(e.name),clientId:d(e.clientId),branchId:(0,u.j)(e.branchId),memberCategoryId:(0,p.Y)(e.memberCategoryId),meetingSpan:Number(e.meetingSpan),startTime:f(e.startTime),closeTime:f(e.closeTime),latenessTime:f(e.latenessTime),isRecuring:r(e.isRecuring),hasBreakTime:r(e.hasBreakTime),hasDuty:r(e.hasDuty),hasOvertime:r(e.hasOvertime),agenda:String(e.agenda),agendaFile:String(e.agendaFile),virtualMeetingLink:String(e.virtualMeetingLink),virtualMeetingType:Number(e.virtualMeetingType),meetingLocation:Number(e.meetingLocation),expectedMonthlyAttendance:Number(e.expectedMonthlyAttendance),activeMonthlyAttendance:Number(e.activeMonthlyAttendance),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate),date:new Date(e.date)}}function h(e){return{id:Number(e.id),meetingEventId:m(e.meetingEventId),memberId:(0,o.Z)(e.memberId),accountType:Number(e.accountType),inOrOut:r(e.inOrOut),inTime:(0,i.G)(e.inTime),outTime:(0,i.G)(e.outTime),startBreak:(0,i.G)(e.startBreak),endBreak:(0,i.G)(e.endBreak),clockedBy:Number(e.clockedBy),clockingMethod:Number(e.clockingMethod),clockingMethodName:String(e.clockingMethodName),date:new Date(e.date)}}},1489:(e,t,n)=>{function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function i(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.d(t,{j:()=>r,N:()=>i})},2578:(e,t,n)=>{function r(e){return"null"===e||null===e?null:new Date(e)}n.d(t,{G:()=>r})},1801:(e,t,n)=>{n.d(t,{a:()=>o,w:()=>c});var r=n(6909),i=n(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.J)(e.regionId):(0,i.A)(),districtId:"districtId"in e?(0,r.A)(e.districtId):(0,r.W)(),location:String(e.location)}}function c(){return{id:0,regionId:(0,i.A)(),districtId:(0,r.W)(),location:"-"}}},9492:(e,t,n)=>{function r(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function i(){return{id:0,name:"-",short:"-",code:"-"}}n.d(t,{V:()=>r,Q:()=>i})},6909:(e,t,n)=>{n.d(t,{A:()=>i,W:()=>o});var r=n(7202);function i(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.J)(e.regionId):(0,r.A)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,r.A)(),location:"-"}}},7202:(e,t,n)=>{function r(e){return{id:Number(e.id),location:String(e.location)}}function i(){return{id:0,location:"-"}}n.d(t,{J:()=>r,A:()=>i})},267:(e,t,n)=>{function r(e){return{id:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}n.d(t,{Y:()=>r})},1551:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(1801),i=n(9492),o=n(6909),c=n(7202);function a(e){return{id:Number(e.id),regionId:"regionId"in e?(0,c.J)(e.regionId):(0,c.A)(),districtId:"districtId"in e?(0,o.A)(e.districtId):(0,o.W)(),location:String(e.location)}}function s(e,t=""){return String(null===e?t:e)}function l(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:s(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:s(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,i.V)(e.countryInfo):(0,i.Q)(),regionInfo:"regionInfo"in e?(0,c.J)(e.regionInfo):(0,c.A)(),districtInfo:"districtInfo"in e?(0,o.A)(e.districtInfo):(0,o.W)(),constituencyInfo:"constituencyInfo"in e?(0,r.a)(e.constituencyInfo):(0,r.w)(),electoralareaInfo:"electoralareaInfo"in e?a(e.electoralareaInfo):{id:0,regionId:(0,c.A)(),districtId:(0,o.W)(),location:"-"}}}},8763:(e,t,n)=>{var r=n(9392),i=n(9662),o=n(5713),c=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends r.oi{constructor(){super(),this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return r.dy`
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
    `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.dy`<mwc-icon>warning</mwc-icon>`:this.danger?r.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?r.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.dy`<mwc-icon>star_outline</mwc-icon>`:r.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};s.styles=[r.iv`
   :host { display: block; }
  `],c([(0,i.C)({type:Boolean}),a("design:type",Boolean)],s.prototype,"success",void 0),c([(0,i.C)({type:Boolean}),a("design:type",Boolean)],s.prototype,"info",void 0),c([(0,i.C)({type:Boolean}),a("design:type",Boolean)],s.prototype,"warning",void 0),c([(0,i.C)({type:Boolean}),a("design:type",Boolean)],s.prototype,"danger",void 0),c([(0,i.C)({type:Boolean}),a("design:type",Boolean)],s.prototype,"default",void 0),c([(0,i.C)({type:Boolean}),a("design:type",Boolean)],s.prototype,"primary",void 0),s=c([(0,o.M)("alert-card"),a("design:paramtypes",[])],s)},2715:(e,t,n)=>{var r=n(9392),i=n(9662),o=n(5713),c=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends r.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?r.dy`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:r.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};c([(0,i.C)({type:String}),a("design:type",String)],s.prototype,"aClass",void 0),c([(0,i.C)({type:String}),a("design:type",String)],s.prototype,"bClass",void 0),c([(0,i.C)({type:String}),a("design:type",String)],s.prototype,"icon",void 0),c([(0,i.C)({type:String}),a("design:type",String)],s.prototype,"href",void 0),c([(0,i.C)({type:String}),a("design:type",String)],s.prototype,"label",void 0),c([(0,i.C)({type:String}),a("design:type",String)],s.prototype,"isBlockContent",void 0),c([(0,i.C)({type:Boolean}),a("design:type",Boolean)],s.prototype,"raised",void 0),s=c([(0,o.M)("link-button")],s)},7713:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingExcuse:()=>k});var r=n(7052),i=n(4672),o=n(9392),c=n(9662),a=n(5713),s=(n(2715),n(8763),n(2935),n(6811),n(4739)),l=n(771),d=n(7270),u=n(596),f=n(3600),p=n(6455),m=n.n(p),h=n(8967),y=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))},g=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))},b=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))};let k=class extends o.oi{constructor(){super(),this.__memberClockingInfo=null,this.clockingId=0,this.clockingIdEnc=null,this._clockingExcuse=null}set _memberClockingInfo(e){this.__memberClockingInfo=e,this.requestUpdate()}get _memberClockingInfo(){return this.__memberClockingInfo}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),yield this.getAttendanceClocking(),yield this.getAttendanceClockingExcuse()}))}disconnectedCallback(){}render(){if(0===this.clockingId||null===this.clockingId||Number.isNaN(this.clockingId)){const e=o.dy`<h4 class="text-white">Error</h4>`,t=o.dy`
        <div>
          <p class="text-black mb-2">Clocking ID Not Found!</p>
        </div>
      `;return o.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{let e=null;if(e=null!==this._memberClockingInfo&&void 0!==this._memberClockingInfo.data?Array.isArray(this._memberClockingInfo.data)?this._memberClockingInfo.data.length>0?this._memberClockingInfo.data[0]:{}:this._memberClockingInfo.data:null,void 0===e){const e=o.dy`<h4 class="text-white">Empty</h4>`,t=o.dy`
          <div>
            <p class="text-black mb-2">Attendance Clocking Not Found!</p>
            <p class="text-black mb-2"><small>Try again later.</small></p>
          </div>
        `;return o.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}if(null!==e){if(null===this._clockingExcuse)return o.dy`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `;{const t=void 0===e.id?0:e.id,n=void 0===e.id?0:e.meetingEventId.id,r=0===n?o.dy`
            <mwc-button label="Save Excuse" raised class="button" @click="${this.submitForm}" disabled>
            </mwc-button>`:o.dy`
            <mwc-button label="Save Excuse" raised class="button" @click="${this.submitForm}">
            </mwc-button>
          `;return o.dy`
            <form method="post" action="#" class="form mt-0" make-general-posts="add-excuse">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-10">
                  <h4 class="font-semibold my-2">Enter Excuse</h4>
                  ${this.excuse}
                </div>
                <div class="col-md-10 col-lg-10 my-2">
                  <div class="form-input-container">
                    ${r}
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
          `}}if(null===this._clockingExcuse)return o.dy`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `}}get excuse(){if(this._clockingExcuse.length>0){const e=this._clockingExcuse[0];return o.dy`<mwc-textarea class="h-96" value="${e.excuse}" outlined name="excuse" id="excuse"></mwc-textarea>`}return o.dy`<mwc-textarea class="h-96" outlined name="excuse" id="excuse"></mwc-textarea>`}firstUpdated(){}getMeetingEventId(){let e=(0,i.Jx)("clocking-id"),t=null!==e?(0,r.t)(e):null;this.clockingId=Number.isNaN(t)?null:Number(t),this.clockingIdEnc=(0,r.h)(String(this.clockingId),!0)}getAttendanceClockingExcuse(){return w(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,r=void 0,o=function*(){const n=(0,f.Ie)(),r=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse"+(null===e?"":"/"+e)+t,i=yield(0,d.d)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new u.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new u.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function c(e){try{s(o.next(e))}catch(e){t(e)}}function a(e){try{s(o.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(c,a)}s((o=o.apply(n,r||[])).next())}));var n,r,i,o}(null,"?clockingId="+this.clockingId);if(null!==e){const t=e.paginResponse;if(e.response,null!==t){const e=t.results.map((e=>{return t=e,{id:Number(t.id),clockingId:(0,s.e)(t.clockingId),excuse:String(t.excuse),enteredBy:Number(t.enteredBy),date:new Date(t.date)};var t}));this._clockingExcuse=e}else this._clockingExcuse=[]}else this._clockingExcuse=[]}))}getAttendanceClocking(){return w(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,r=void 0,o=function*(){const n=(0,f.Ie)(),r=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance"+(null===e?"":"/"+e)+t,i=yield(0,d.d)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new u.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new u.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function c(e){try{s(o.next(e))}catch(e){t(e)}}function a(e){try{s(o.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(c,a)}s((o=o.apply(n,r||[])).next())}));var n,r,i,o}(this.clockingId);this._memberClockingInfo=null===e?void 0:e.response}))}submitForm(e){return w(this,void 0,void 0,(function*(){if(e.preventDefault(),this._clockingExcuse.length>0){const e=this._clockingExcuse[0].id;yield function(e){return g(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse/"+e,r=document.querySelector('[make-general-posts="add-excuse"]'),i=new FormData(r);return m().fire({title:"Update Excuse?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,d.d)(n,{method:"PUT",body:i,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new u.H("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,h.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(e)}else yield function(){return y(this,void 0,void 0,(function*(){const e=(0,f.Ie)(),t=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse",n=document.querySelector('[make-general-posts="add-excuse"]'),r=new FormData(n);return m().fire({title:"Enter Excuse?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>y(this,void 0,void 0,(function*(){return yield(0,d.d)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new u.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,h.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{if(r instanceof Object){const e=r.response;console.log({"VALUE.data":e.data}),window.location.reload()}else window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};k.styles=[o.iv`
   :host { display: block; }
  `],b([(0,c.C)({type:Number}),v("design:type",Number)],k.prototype,"clockingId",void 0),b([(0,c.C)({type:String}),v("design:type",String)],k.prototype,"clockingIdEnc",void 0),b([(0,c.C)({type:Array}),v("design:type",Array)],k.prototype,"_clockingExcuse",void 0),k=b([(0,a.M)("pdb-attendance-clocking-excuse"),v("design:paramtypes",[])],k)},655:(e,t,n)=>{n.d(t,{ZT:()=>i,pi:()=>o,gn:()=>c,mG:()=>a,Jh:()=>s,XA:()=>l,CR:()=>d,ev:()=>u});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function c(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c}function a(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((i=(i=c.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){c.label=o[1];break}if(6===o[0]&&c.label<i[1]){c.label=i[1],i=o;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(o);break}i[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)c.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return c}function u(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create},5674:(e,t,n)=>{n.d(t,{eZ:()=>r});const r=({finisher:e,descriptor:t})=>(n,r)=>{var i;if(void 0===r){const r=null!==(i=n.originalKey)&&void 0!==i?i:n.key,o=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(n.key)}:{...n,key:r};return null!=e&&(o.finisher=function(t){e(t,r)}),o}{const i=n.constructor;void 0!==t&&Object.defineProperty(n,r,t(r)),null==e||e(i,r)}}},8829:(e,t,n)=>{n.d(t,{h:()=>i});var r=n(5674);function i(e){return(0,r.eZ)({finisher:(t,n)=>{Object.assign(t.prototype[n],e)}})}},2669:(e,t,n)=>{n.d(t,{I:()=>i});var r=n(5674);function i(e,t){return(0,r.eZ)({descriptor:n=>{const r={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;r.get=function(){var n,r;return void 0===this[t]&&(this[t]=null!==(r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==r?r:null),this[t]}}return r}})}},9158:(e,t,n)=>{n.d(t,{S:()=>i});var r=n(9662);function i(e){return(0,r.C)({...e,state:!0})}},4232:(e,t,n)=>{n.d(t,{pt:()=>o,OR:()=>c,hl:()=>s});var r=n(3692);const{H:i}=r.Al,o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=e=>void 0===e.strings,a={},s=(e,t=a)=>e._$AH=t},875:(e,t,n)=>{n.d(t,{Xe:()=>o,pX:()=>r,XM:()=>i});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8082:(e,t,n)=>{n.d(t,{Xe:()=>r.Xe,pX:()=>r.pX,XM:()=>r.XM});var r=n(875)},9455:(e,t,n)=>{n.d(t,{$:()=>o});var r=n(3692),i=n(875);const o=(0,i.XM)(class extends i.Xe{constructor(e){var t;if(super(e),e.type!==i.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,i;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.et)||void 0===n?void 0:n.has(e))&&this.st.add(e);return this.render(t)}const o=e.element.classList;this.st.forEach((e=>{e in t||(o.remove(e),this.st.delete(e))}));for(const e in t){const n=!!t[e];n===this.st.has(e)||(null===(i=this.et)||void 0===i?void 0:i.has(e))||(n?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return r.Jb}})},796:(e,t,n)=>{n.d(t,{o:()=>i});var r=n(3692);const i=e=>null!=e?e:r.Ld},3669:(e,t,n)=>{n.d(t,{a:()=>c});var r=n(3692),i=n(875),o=n(4232);const c=(0,i.XM)(class extends i.Xe{constructor(e){if(super(e),e.type!==i.pX.PROPERTY&&e.type!==i.pX.ATTRIBUTE&&e.type!==i.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,c=e.name;if(e.type===i.pX.PROPERTY){if(t===n[c])return r.Jb}else if(e.type===i.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(c))return r.Jb}else if(e.type===i.pX.ATTRIBUTE&&n.getAttribute(c)===t+"")return r.Jb;return(0,o.hl)(e),t}})},3959:(e,t,n)=>{n.d(t,{V:()=>o});var r=n(3692),i=n(875);const o=(0,i.XM)(class extends i.Xe{constructor(e){var t;if(super(e),e.type!==i.pX.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return null==r?t:t+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?n.removeProperty(e):n[e]="")}));for(const e in t){const r=t[e];null!=r&&(this.ut.add(e),e.includes("-")?n.setProperty(e,r):n[e]=r)}return r.Jb}})}},e=>(e.O(0,[2185,5744,9674,2459,5291,2585,3712],(()=>(7713,e(e.s=7713)))),e.O())])}));
//# sourceMappingURL=excuse.js.map