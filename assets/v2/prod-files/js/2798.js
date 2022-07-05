"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2798],{6951:(e,t,n)=>{n.d(t,{F:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},2831:(e,t,n)=>{n.d(t,{h:()=>o,L:()=>i});const o=e=>{const t=new Date,n=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(n)},i=(e,t)=>e.toLocaleTimeString("en-US",t)},8967:(e,t,n)=>{n.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4739:(e,t,n)=>{n.d(t,{e:()=>h});const o=e=>{const t=String(e).toLowerCase();return"1"===t||"true"===t||!0===e};function i(e){const t=String(e).toLocaleLowerCase().split("T");let n="00:00:00";if(t.length>1?n=t[1]:1===t.length&&(n=t[0]),"null"===n)return null;let o=new Date;const i=n.split(":");return void 0!==i[0]&&o.setHours(Number(i[0])),void 0!==i[1]&&o.setMinutes(Number(i[1])),void 0!==i[2]&&o.setSeconds(Number(i[2])),o}var r=n(1551),c=n(1801),a=n(9492),s=n(6909),l=n(7202);function u(e){return{id:Number(e.id),name:String(e.name),accountType:Number(e.accountType),country:String(e.country),stateProvince:String(e.stateProvince),applicantFirstname:String(e.applicantFirstname),applicantSurname:String(e.applicantSurname),applicantGender:Number(e.applicantGender),applicantPhone:String(e.applicantPhone),applicantEmail:String(e.applicantEmail),applicantDesignationRole:Number(e.applicantDesignationRole),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),community:String(e.community),subscriptionDuration:Number(e.subscriptionDuration),subscriptionDate:new Date(e.updateDate),subscriptionFee:String(e.subscriptionFee),logo:String(e.logo),status:Number(e.status),archive:Number(e.archive),accountCategory:Number(e.accountCategory),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate),countryInfo:"countryInfo"in e?(0,a.V)(e.countryInfo):(0,a.Q)(),regionInfo:"regionInfo"in e?(0,l.J)(e.regionInfo):(0,l.A)(),districtInfo:"districtInfo"in e?(0,s.A)(e.districtInfo):(0,s.W)(),constituencyInfo:"constituencyInfo"in e?(0,c.a)(e.constituencyInfo):(0,c.w)()}}var d=n(1489),f=n(267);function p(e){return{id:Number(e.id),type:Number(e.type),memberType:Number(e.memberType),name:String(e.name),clientId:u(e.clientId),branchId:(0,d.j)(e.branchId),memberCategoryId:(0,f.Y)(e.memberCategoryId),startTime:i(e.startTime),closeTime:i(e.closeTime),latenessTime:i(e.latenessTime),isRecuring:o(e.isRecuring),hasBreakTime:o(e.hasBreakTime),hasDuty:o(e.hasDuty),hasOvertime:o(e.hasOvertime),agenda:String(e.agenda),agendaFile:String(e.agendaFile),virtualMeetingLink:String(e.virtualMeetingLink),virtualMeetingType:Number(e.virtualMeetingType),meetingLocation:Number(e.meetingLocation),expectedMonthlyAttendance:Number(e.expectedMonthlyAttendance),activeMonthlyAttendance:Number(e.activeMonthlyAttendance),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate),date:new Date(e.date)}}function h(e){return{id:Number(e.id),meetingEventId:p(e.meetingEventId),memberId:(0,r.Z)(e.memberId),accountType:Number(e.accountType),inOrOut:o(e.inOrOut),inTime:i(e.inTime),outTime:i(e.outTime),startBreak:i(e.startBreak),endBreak:i(e.endBreak),clockedBy:Number(e.clockedBy),clockingMethod:Number(e.clockingMethod),clockingMethodName:String(e.clockingMethodName),date:new Date(e.date)}}},7546:(e,t,n)=>{var o=n(7052),i=n(4739),r=(n(8281),n(9392)),c=n(9662),a=n(5713),s=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends r.oi{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.clocking_info="",this.memberProfileBaseUrl="/member/member-profile?view="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,i.e)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,o.h)(String(e.memberId.id),!0);return r.dy`<div class="flex flex-col whitespace-normal justify-between content-between">
      <div class="d-block m-1">
        <span class="badge badge-info shadow-lg p-2 m-1">
          ${e.clockingMethodName}
        </span>
      </div>
      <div class="flex m-1 justify-evenly">
        <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"
          url="${e.memberId.profilePicture}" size="32"></user-profile-photo>
      </div>
      <div class="block m-1">
        <span class="shadow p-1 block bg-white rounded text-dark">
          <b>Name</b>: ${e.memberId.firstname} ${e.memberId.middlename} ${e.memberId.surname}
        </span>
      </div>
    </div>`}firstUpdated(){}createRenderRoot(){return this}};u.styles=[r.iv`
   :host { display: block; }
  `],s([(0,c.C)({type:String}),l("design:type",String)],u.prototype,"clocking_info",void 0),s([(0,c.C)({type:String}),l("design:type",String)],u.prototype,"memberProfileBaseUrl",void 0),u=s([(0,a.M)("clocker-table-parts-first"),l("design:paramtypes",[])],u)},9987:(e,t,n)=>{n.d(t,{GJ:()=>S,Y8:()=>T});var o=n(6951),i=n(2831),r=n(4739),c=n(6455),a=n.n(c),s=n(771),l=n(7270),u=n(596),d=n(8967),f=n(3600),p=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function h(e,t=null){return p(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),o=s.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-in/"+e,i=null===t?{}:{time:t};return a().fire({title:"Clock In?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,d.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var m=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function g(e,t=null){return m(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),o=s.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/start-break/"+e,i=null===t?{}:{time:t};return a().fire({title:"Start Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,d.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var k=n(9392),y=n(9662),b=n(5713),v=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};const T=(e,t)=>{window.clocker={clockingTimeInfo:{clockingTime:e,clockingTimeValue:t}}},S=()=>{if("clocker"in window){const e=window.clocker.clockingTimeInfo;return{clockingTime:e.clockingTime,clockingTimeValue:e.clockingTimeValue}}return null};let B=class extends k.oi{constructor(){super(),this._data=null,this._type=null,this.clockingTimeValue="",this.clocking=!1,this.clockingTime=!1,this.clockingInfo=null,this.clocking_info=""}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,r.e)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,o.F)(e.date,{dateStyle:"medium",timeStyle:"short"}),n=e.inTime,r=null!==n?(0,i.L)(n,{timeStyle:"short"}):"--:--",c=e.id,a=e.inOrOut,s=e.startBreak,l=null!==s?(0,i.L)(s,{timeStyle:"short"}):"--:--",u=new Date,d=e.meetingEventId.hasBreakTime,f=e.date.toDateString()===u.toDateString();return k.dy`
      <div class="shadow bg-white p-2 text-center whitespace-nowrap">
        <div class="flex justify-between">
          ${this.clocking?k.dy`
            <input type="checkbox" multi-break-check-in="${c}" name="member_check_in_${c}" id="member_check_in_${c}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `:k.Ld}
          <label for="member_check_in_${c}">@ ${t}</label>
        </div>
      </div>
      ${this.clocking?k.dy`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0" clock-id="${c}" clock-user="in">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
        </div>
      `:k.Ld}
      <div class="text-center flex justify-center whitespace-nowrap">
        <span class="badge badge-success mx-1">${f?k.dy`Today`:k.dy`Post Clocking`}</span>
        ${a?k.dy`
        <span class="badge badge-success bg-grow-early mx-1">Present</span>`:k.dy`
        <span class="badge badge-danger mx-1">Not Clocked</span>
        `}
      </div>
      ${a&&null!==n?k.dy`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock in Time</b>: ${r}
          </span>
        </div>`:""}
      ${this.clocking?k.dy`
        ${d?k.dy`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${c}" user-break="start"
              icon="check">
            </mwc-button>
          </div>
          `:""}
      `:k.Ld}
      ${null!==s?k.dy`
      <div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
          <b>Break Start Time</b>: ${l}
        </span>
      </div>`:""}
    `}firstUpdated(){this.clockUser(),this.userBreak(),setInterval((()=>{const e=S();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"in"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockInUser(e,t)}))}))}clockInUser(e,t){return C(this,void 0,void 0,(function*(){t.preventDefault(),console.log({"this.clockingTime":this.clockingTime,"this.clockingTimeValue":this.clockingTimeValue});const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield h(n,this.clockingTimeValue):yield h(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"start"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.startUserBreak(e,t)}))}))}startUserBreak(e,t){return C(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield g(n,this.clockingTimeValue):yield g(n)}))}createRenderRoot(){return this}};B.styles=[k.iv`
   :host { display: block; }
  `],v([(0,y.C)({type:String}),w("design:type",String)],B.prototype,"clockingTimeValue",void 0),v([(0,y.C)({type:Boolean}),w("design:type",Boolean)],B.prototype,"clocking",void 0),v([(0,y.C)({type:Boolean}),w("design:type",Boolean)],B.prototype,"clockingTime",void 0),v([(0,y.C)({type:String}),w("design:type",String)],B.prototype,"clocking_info",void 0),B=v([(0,b.M)("clocker-table-parts-second"),w("design:paramtypes",[])],B)},5647:(e,t,n)=>{var o=n(7052),i=n(6951),r=n(2831),c=n(4739),a=n(6455),s=n.n(a),l=n(771),u=n(7270),d=n(596),f=n(8967),p=n(3600),h=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))},m=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function g(e,t=null){return m(this,void 0,void 0,(function*(){const n=(0,p.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-out/"+e,i=null===t?{}:{time:t};return s().fire({title:"Clock Out?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,u.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var k=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function y(e,t=null){return k(this,void 0,void 0,(function*(){const n=(0,p.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/end-break/"+e,i=null===t?{}:{time:t};return s().fire({title:"End Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>k(this,void 0,void 0,(function*(){return yield(0,u.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var b=n(9392),v=n(9662),w=n(5713),C=n(9987),T=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},B=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};let _=class extends b.oi{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.clocking_info="",this.clocking=!1,this.clockingTimeValue="",this.clockingTime=!1,this.excuseBaseUrl="/attendance/v2/clocking/excuse?clocking-id="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&(this.clockingInfo=(0,c.e)(e))}disconnectedCallback(){}render(){const e=this.clockingInfo,t=(0,i.F)(e.date,{dateStyle:"medium",timeStyle:"short"}),n=e.outTime,c=null!==n?(0,r.L)(n,{timeStyle:"short"}):"--:--",a=e.id,s=e.inOrOut,l=e.endBreak,u=null!==l?(0,r.L)(l,{timeStyle:"short"}):"--:--",d=e.meetingEventId.hasBreakTime,f=(0,o.h)(String(a),!0);return b.dy`
      <div class="shadow bg-white p-2 text-center whitespace-nowrap">
        <div class="flex justify-between">
          ${this.clocking?b.dy`
            <input type="checkbox" multi-break-check-out="${a}" name="member_check_out_${a}" id="member_check_out_${a}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `:b.Ld}
          <label for="member_check_out_${a}">@ ${t}</label>
        </div>	
      </div>
      ${this.clocking?b.dy`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${a}" clock-user="out">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${a}" cancel-user-clock="true">
            <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
          </button>
        </div>
      `:b.Ld}
      <div class="text-center flex justify-center whitespace-nowrap">
        <span class="badge badge-warning">'X' to Cancel Attendance</span>
      </div>
      <div class="text-center whitespace-nowrap">
        <a href="${this.excuseBaseUrl}${f}" class="btn btn-info btn-sm" target="_blank" type="button">Enter/ View Excuse</a>
      </div>
      ${s&&null!==n?b.dy`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock out Time</b>: ${c}
          </span>
        </div>`:""}
      ${this.clocking?b.dy`
        ${d?b.dy`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${a}"
              user-break="end" icon="close">
            </mwc-button>
          </div>
          `:""}
      `:b.Ld}
      ${null!==l?b.dy`
        <div class="text-center">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break End Time</b>: ${u}
          </span>
        </div>`:""}
    `}firstUpdated(){this.clockUser(),this.userBreak(),this.cancelClocking(),setInterval((()=>{const e=(0,C.GJ)();this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue}))}cancelClocking(){document.querySelectorAll('[cancel-user-clock="true"]').forEach((e=>{e.addEventListener("click",(t=>B(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));yield function(e){return h(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/cancel-clocking/"+e,o={};return s().fire({title:"Cancel Clocking?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,u.d)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}(n)}))))}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"out"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockOutUser(e,t)}))}))}clockOutUser(e,t){return B(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield g(n,this.clockingTimeValue):yield g(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"end"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.endUserBreak(e,t)}))}))}endUserBreak(e,t){return B(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));console.log({e:t,element:e,CLOCK_ID:n}),this.clockingTime?yield y(n,this.clockingTimeValue):yield y(n)}))}createRenderRoot(){return this}};_.styles=[b.iv`
   :host { display: block; }
  `],T([(0,v.C)({type:String}),S("design:type",String)],_.prototype,"clocking_info",void 0),T([(0,v.C)({type:Boolean}),S("design:type",Boolean)],_.prototype,"clocking",void 0),T([(0,v.C)({type:String}),S("design:type",String)],_.prototype,"clockingTimeValue",void 0),T([(0,v.C)({type:Boolean}),S("design:type",Boolean)],_.prototype,"clockingTime",void 0),T([(0,v.C)({type:String}),S("design:type",String)],_.prototype,"excuseBaseUrl",void 0),_=T([(0,w.M)("clocker-table-parts-third"),S("design:paramtypes",[])],_)}}]);
//# sourceMappingURL=2798.js.map