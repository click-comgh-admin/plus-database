"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2798],{6951:(e,t,n)=>{n.d(t,{F:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},101:(e,t,n)=>{n.d(t,{X:()=>s});var o=n(2578),i=n(1551),c=n(7477);function r(e){return{id:Number(e.id),memberId:Number(e.memberId),memberInfo:(0,i.Z)(e.memberInfo),facebook:String(e.facebook),instagram:String(e.instagram),placeOfWork:String(e.placeOfWork),profession:String(e.profession),twitter:String(e.twitter),whatsapp:String(e.whatsapp),businessHashtag:String(e.businessHashtag),businessDescription:String(e.businessDescription),dateJoined:(0,o.G)(e.dateJoined),date:(0,o.G)(e.date)}}function s(e){return{attendance:(0,c.e)(e.attendance),additionalInfo:r(e.additionalInfo),lastSeen:(0,o.G)(e.lastSeen),status:String(e.status)}}},7546:(e,t,n)=>{var o=n(7052),i=n(7477),c=n(101),r=(n(8281),n(9392)),s=n(9662),a=n(5713),l=function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends r.oi{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.memberProfileBaseUrl="/member/member-profile?view="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,c.X)(e)):(this.fullInfo=!1,this.clockingInfo=(0,i.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull,i=(0,o.h)(String(e?n.attendance.memberId.id:t.memberId.id),!0);return r.dy`<div class="flex flex-col whitespace-normal justify-between content-between">
  <div class="d-block m-1">
    <span class="badge badge-info shadow-lg p-2 m-1">
      ${e?n.attendance.clockingMethodName:t.clockingMethodName}
    </span>
  </div>
  <div class="flex m-1 justify-evenly">
    <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""
      click-to-open="${this.memberProfileBaseUrl}${i}" type="member"
      url="${e?n.attendance.memberId.profilePicture:t.memberId.profilePicture}" size="32"></user-profile-photo>
  </div>
  <div class="block m-1">
    <span class="shadow p-1 block bg-white rounded text-dark">
      <b>Name</b>: ${e?n.attendance.memberId.firstname:t.memberId.firstname} ${e?n.attendance.memberId.middlename:t.memberId.middlename}
      ${e?n.attendance.memberId.surname:t.memberId.surname}
    </span>
  </div>
</div>`}firstUpdated(){}createRenderRoot(){return this}};u.styles=[r.iv`
   :host { display: block; }
  `],l([(0,s.C)({type:Boolean}),d("design:type",Boolean)],u.prototype,"fullInfo",void 0),l([(0,s.C)({type:String}),d("design:type",String)],u.prototype,"clocking_info",void 0),l([(0,s.C)({type:String}),d("design:type",String)],u.prototype,"memberProfileBaseUrl",void 0),u=l([(0,a.M)("clocker-table-parts-first"),d("design:paramtypes",[])],u)},9987:(e,t,n)=>{n.d(t,{GJ:()=>S,Y8:()=>B});var o=n(6951),i=n(7477),c=n(101),r=n(6455),s=n.n(r),a=n(771),l=n(7270),d=n(596),u=n(8967),f=n(3600),h=function(e,t,n,o){return new(n||(n=Promise))((function(i,c){function r(e){try{a(o.next(e))}catch(e){c(e)}}function s(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};function p(e,t=null){return h(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),o=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-in/"+e,i=null===t?{}:{time:t};return s().fire({title:"Clock In?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var g=function(e,t,n,o){return new(n||(n=Promise))((function(i,c){function r(e){try{a(o.next(e))}catch(e){c(e)}}function s(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};function m(e,t=null){return g(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),o=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/start-break/"+e,i=null===t?{}:{time:t};return s().fire({title:"Start Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var k=n(9392),b=n(9662),y=n(5713),w=(n(934),function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r}),v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,o){return new(n||(n=Promise))((function(i,c){function r(e){try{a(o.next(e))}catch(e){c(e)}}function s(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};const B=(e,t)=>{window.clocker={clockingTimeInfo:{clockingTime:e,clockingTimeValue:t}}},S=()=>{if("clocker"in window){const e=window.clocker.clockingTimeInfo;if("clockingTime"in e)return{clockingTime:e.clockingTime,clockingTimeValue:e.clockingTimeValue}}return null};let I=class extends k.oi{constructor(){super(),this._data=null,this._type=null,this.clockingTimeValue="",this.clocking=!1,this.clockingTime=!1,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info=""}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,c.X)(e)):(this.fullInfo=!1,this.clockingInfo=(0,i.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull,i=(0,o.F)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),c=e?n.attendance.inTime:t.inTime,r=null!==c?(0,o.F)(c,{dateStyle:"medium",timeStyle:"short"}):"--:--",s=e?n.attendance.id:t.id,a=e?n.attendance.inOrOut:t.inOrOut,l=e?n.attendance.startBreak:t.startBreak,d=null!==l?(0,o.F)(l,{dateStyle:"medium",timeStyle:"short"}):"--:--",u=new Date,f=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,h=(e?n.attendance.date.toDateString():t.date.toDateString())===u.toDateString();return k.dy`
      <div class="shadow bg-white p-2 text-center whitespace-nowrap">
        <div class="flex justify-between">
          ${this.clocking?k.dy`
          <input type="checkbox" multi-break-check-in="${s}" name="member_check_in_${s}"
            id="member_check_in_${s}"
            class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `:k.Ld}
          <label for="member_check_in_${s}">@ ${i}</label>
        </div>
      </div>
      ${this.clocking?k.dy`
      <div class="text-center whitespace-nowrap">
        <button type="button" class="btn btn-transparent btn-sm shadow p-0" clock-id="${s}" clock-user="in">
          <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
        </button>
      </div>
      <div class="text-center flex justify-center whitespace-nowrap">
        <span class="badge badge-success mx-1">${h?k.dy`Today`:k.dy`Post Clocking`}</span>
        ${a?k.dy`
        <span class="badge badge-success bg-grow-early mx-1">Present</span>`:k.dy`
        <span class="badge badge-danger mx-1">Not Clocked</span>
        `}
      </div>
      `:k.dy`
        <div class="text-center flex justify-evenly whitespace-nowrap">
          <a href="tel://${n.additionalInfo.memberInfo.phone}">
            <mwc-icon-button class="bg-sunny-morning text-white" icon="call"></mwc-icon-button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+${n.additionalInfo.whatsapp}&amp;text=">
            <mwc-icon-button class="bg-grow-early text-white" icon="whatsapp"></mwc-icon-button>
          </a>
        </div>
      `}
      ${a&&null!==c?k.dy`
      <div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
          <b>Clock in Time</b>: ${r}
        </span>
      </div>`:""}
      ${this.clocking?k.dy`
        ${f?k.dy`
        <hr class="whitespace-nowrap">
        <div class="text-center whitespace-nowrap">
          <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${s}" user-break="start"
            icon="check">
          </mwc-button>
        </div>
        `:""}
      `:k.Ld}
      ${null!==l?k.dy`
      <div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
          <b>Break Start Time</b>: ${d}
        </span>
      </div>`:""}
    `}firstUpdated(){this.clockUser(),this.userBreak(),setInterval((()=>{const e=S();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"in"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockInUser(e,t)}))}))}clockInUser(e,t){return C(this,void 0,void 0,(function*(){t.preventDefault(),console.log({"this.clockingTime":this.clockingTime,"this.clockingTimeValue":this.clockingTimeValue});const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield p(n,this.clockingTimeValue):yield p(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"start"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.startUserBreak(e,t)}))}))}startUserBreak(e,t){return C(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield m(n,this.clockingTimeValue):yield m(n)}))}createRenderRoot(){return this}};I.styles=[k.iv`
   :host { display: block; }
  `],w([(0,b.C)({type:String}),v("design:type",String)],I.prototype,"clockingTimeValue",void 0),w([(0,b.C)({type:Boolean}),v("design:type",Boolean)],I.prototype,"clocking",void 0),w([(0,b.C)({type:Boolean}),v("design:type",Boolean)],I.prototype,"clockingTime",void 0),w([(0,b.C)({type:Boolean}),v("design:type",Boolean)],I.prototype,"fullInfo",void 0),w([(0,b.C)({type:String}),v("design:type",String)],I.prototype,"clocking_info",void 0),I=w([(0,y.M)("clocker-table-parts-second"),v("design:paramtypes",[])],I)},5647:(e,t,n)=>{var o=n(7052),i=n(6951),c=n(7477),r=n(101),s=n(6455),a=n.n(s),l=n(771),d=n(7270),u=n(596),f=n(8967),h=n(3600),p=function(e,t,n,o){return new(n||(n=Promise))((function(i,c){function r(e){try{a(o.next(e))}catch(e){c(e)}}function s(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},g=function(e,t,n,o){return new(n||(n=Promise))((function(i,c){function r(e){try{a(o.next(e))}catch(e){c(e)}}function s(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};function m(e,t=null){return g(this,void 0,void 0,(function*(){const n=(0,h.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-out/"+e,i=null===t?{}:{time:t};return a().fire({title:"Clock Out?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,d.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var k=function(e,t,n,o){return new(n||(n=Promise))((function(i,c){function r(e){try{a(o.next(e))}catch(e){c(e)}}function s(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};function b(e,t=null){return k(this,void 0,void 0,(function*(){const n=(0,h.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/end-break/"+e,i=null===t?{}:{time:t};return a().fire({title:"End Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>k(this,void 0,void 0,(function*(){return yield(0,d.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var y=n(9392),w=n(9662),v=n(5713),C=n(9987),B=function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,n,o){return new(n||(n=Promise))((function(i,c){function r(e){try{a(o.next(e))}catch(e){c(e)}}function s(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};let T=class extends y.oi{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.clocking=!1,this.clockingTimeValue="",this.clockingTime=!1,this.excuseBaseUrl="/attendance/v2/clocking/excuse?clocking-id=",this.followUpBaseUrl="/attendance/v2/clocking/follow-up?clocking-id="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,r.X)(e)):(this.fullInfo=!1,this.clockingInfo=(0,c.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull,c=(0,i.F)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),r=e?n.attendance.outTime:t.outTime,s=null!==r?(0,i.F)(r,{dateStyle:"medium",timeStyle:"short"}):"--:--",a=e?n.attendance.id:t.id,l=e?n.attendance.inOrOut:t.inOrOut,d=e?n.attendance.endBreak:t.endBreak,u=null!==d?(0,i.F)(d,{dateStyle:"medium",timeStyle:"short"}):"--:--",f=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,h=(0,o.h)(String(a),!0);return y.dy`
      <div class="shadow bg-white p-2 text-center whitespace-nowrap">
        <div class="flex justify-between">
          ${this.clocking?y.dy`
          <input type="checkbox" multi-break-check-out="${a}" name="member_check_out_${a}"
            id="member_check_out_${a}"
            class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `:y.Ld}
          <label for="member_check_out_${a}">@ ${c}</label>
        </div>
      </div>
      ${this.clocking?y.dy`
      <div class="text-center whitespace-nowrap">
        <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${a}" clock-user="out">
          <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
        </button>
        <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${a}"
          cancel-user-clock="true">
          <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
        </button>
      </div>
      <div class="text-center flex justify-center whitespace-nowrap">
        <span class="badge badge-warning">'X' to Cancel Attendance</span>
      </div>
      `:y.Ld}
      <div class="text-center whitespace-nowrap">
        <a href="${this.excuseBaseUrl}${h}" class="btn btn-info btn-sm" target="_blank" type="button">Enter/ View
          Excuse</a>
        <a href="${this.followUpBaseUrl}${h}" class="btn btn-primary btn-sm" target="_blank" type="button">Follow-Up</a>
      </div>
      ${l&&null!==r?y.dy`
      <div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
          <b>Clock out Time</b>: ${s}
        </span>
      </div>`:""}
      ${this.clocking?y.dy`
      ${f?y.dy`
      <hr class="whitespace-nowrap">
      <div class="text-center whitespace-nowrap">
        <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${a}" user-break="end"
          icon="close">
        </mwc-button>
      </div>
      `:""}
      `:y.Ld}
      ${null!==d?y.dy`
      <div class="text-center">
        <span class="badge badge-light shadow p-2 m-1">
          <b>Break End Time</b>: ${u}
        </span>
      </div>`:""}
    `}firstUpdated(){this.clockUser(),this.userBreak(),this.cancelClocking(),setInterval((()=>{const e=(0,C.GJ)();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}cancelClocking(){document.querySelectorAll('[cancel-user-clock="true"]').forEach((e=>{e.addEventListener("click",(t=>I(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));yield function(e){return p(this,void 0,void 0,(function*(){const t=(0,h.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/cancel-clocking/"+e,o={};return a().fire({title:"Cancel Clocking?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,d.d)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}(n)}))))}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"out"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockOutUser(e,t)}))}))}clockOutUser(e,t){return I(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield m(n,this.clockingTimeValue):yield m(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"end"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.endUserBreak(e,t)}))}))}endUserBreak(e,t){return I(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));console.log({e:t,element:e,CLOCK_ID:n}),this.clockingTime?yield b(n,this.clockingTimeValue):yield b(n)}))}createRenderRoot(){return this}};T.styles=[y.iv`
   :host { display: block; }
  `],B([(0,w.C)({type:Boolean}),S("design:type",Boolean)],T.prototype,"fullInfo",void 0),B([(0,w.C)({type:String}),S("design:type",String)],T.prototype,"clocking_info",void 0),B([(0,w.C)({type:Boolean}),S("design:type",Boolean)],T.prototype,"clocking",void 0),B([(0,w.C)({type:String}),S("design:type",String)],T.prototype,"clockingTimeValue",void 0),B([(0,w.C)({type:Boolean}),S("design:type",Boolean)],T.prototype,"clockingTime",void 0),B([(0,w.C)({type:String}),S("design:type",String)],T.prototype,"excuseBaseUrl",void 0),B([(0,w.C)({type:String}),S("design:type",String)],T.prototype,"followUpBaseUrl",void 0),T=B([(0,v.M)("clocker-table-parts-third"),S("design:paramtypes",[])],T)}}]);
//# sourceMappingURL=2798.js.map