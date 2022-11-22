"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2905],{6951:(e,t,n)=>{n.d(t,{F:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},101:(e,t,n)=>{n.d(t,{ND:()=>a,X_:()=>l});var o=n(2578),i=n(1551),r=n(8530),c=n(7477);const a=e=>"organizationName"in e&&"organizationType"in e&&"businessRegistered"in e&&"organizationPhone"in e&&"dateOfIncorporation"in e;function s(e,t){let n=null;return n=1===t?(0,i.Z)(e.memberInfo):r.e.toMembershipOrganizationUserModel(JSON.stringify(e.memberInfo)),{id:Number(e.id),memberId:Number(e.memberId),memberInfo:n,facebook:String(e.facebook),instagram:String(e.instagram),placeOfWork:String(e.placeOfWork),profession:String(e.profession),twitter:String(e.twitter),whatsapp:String(e.whatsapp),businessHashtag:String(e.businessHashtag),businessDescription:String(e.businessDescription),dateJoined:(0,o.G)(e.dateJoined),date:(0,o.G)(e.date)}}function l(e){const t=(0,c.e)(e.attendance);return{attendance:t,additionalInfo:s(e.additionalInfo,t.accountType),lastSeen:(0,o.G)(e.lastSeen),status:String(e.status)}}},7933:(e,t,n)=>{var o=n(7477),i=n(101),r=(n(8281),n(9392)),c=n(9662),a=n(5713),s=n(7052),l=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends r.oi{constructor(){super(),this.clockingMethodName="???",this._memberData=null,this.memberProfileBaseUrl="/member/member-profile?view="}set memberData(e){this._memberData=e,this.requestUpdate()}get memberData(){return this._memberData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=(0,s.h)(String(this._memberData.id),!0);return r.dy`<div class="flex flex-col whitespace-normal justify-between content-between">
        <div class="d-block m-1">
          <span class="badge badge-info shadow-lg p-2 m-1">
            ${this.clockingMethodName}
          </span>
        </div>
        <div class="flex m-1 justify-evenly">
          <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""
            click-to-open="${this.memberProfileBaseUrl}${e}" type="member"
            url="${this._memberData.profilePicture}" size="32"></user-profile-photo>
        </div>
        <div class="block m-1">
          <span class="shadow p-1 block bg-white rounded text-dark">
            <b>Name</b>: ${this._memberData.firstname} ${this._memberData.middlename} ${this._memberData.surname}
          </span>
        </div>
      </div>`}firstUpdated(){}createRenderRoot(){return this}};u.styles=[r.iv`
   :host { display: block; }
  `],l([(0,c.C)({type:String}),d("design:type",String)],u.prototype,"clockingMethodName",void 0),l([(0,c.C)({type:String}),d("design:type",String)],u.prototype,"memberProfileBaseUrl",void 0),u=l([(0,a.M)("clocker-table-parts-first-individual"),d("design:paramtypes",[])],u);var f=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends r.oi{constructor(){super(),this.clockingMethodName="???",this._memberData=null}set memberData(e){this._memberData=e,this.requestUpdate()}get memberData(){return this._memberData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return(0,s.h)(String(this._memberData.id),!0),r.dy`<div class="flex flex-col whitespace-normal justify-between content-between">
        <div class="d-block m-1">
          <span class="badge badge-info shadow-lg p-2 m-1">
            ${this.clockingMethodName}
          </span>
        </div>
        <div class="flex m-1 justify-evenly">
          <user-profile-photo class="w-32 h-32 mr-1" rounded type="member"
            url="${this._memberData.logo}" size="32"></user-profile-photo>
        </div>
        <div class="block m-1">
          <span class="shadow p-1 block bg-white rounded text-dark">
            <b>Name</b>: ${this._memberData.organizationName}
          </span>
        </div>
      </div>`}firstUpdated(){}createRenderRoot(){return this}};h.styles=[r.iv`
   :host { display: block; }
  `],f([(0,c.C)({type:String}),p("design:type",String)],h.prototype,"clockingMethodName",void 0),h=f([(0,a.M)("clocker-table-parts-first-organization"),p("design:paramtypes",[])],h);var m=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let k=class extends r.oi{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.memberProfileBaseUrl="/member/member-profile?view="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,i.X_)(e)):(this.fullInfo=!1,this.clockingInfo=(0,o.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const o=e?n.attendance.clockingMethodName:t.clockingMethodName;return(e?(0,i.ND)(n.additionalInfo.memberInfo):(0,i.ND)(t.memberId))?r.dy`<clocker-table-parts-first-organization clockingMethodName="${o}" .memberData=${e?n.additionalInfo.memberInfo:t.memberId}></clocker-table-parts-first-organization>`:r.dy`<clocker-table-parts-first-individual clockingMethodName="${o}" .memberData=${e?n.additionalInfo.memberInfo:t.memberId}></clocker-table-parts-first-individual>`}return null}firstUpdated(){}createRenderRoot(){return this}};k.styles=[r.iv`
   :host { display: block; }
  `],m([(0,c.C)({type:Boolean}),g("design:type",Boolean)],k.prototype,"fullInfo",void 0),m([(0,c.C)({type:String}),g("design:type",String)],k.prototype,"clocking_info",void 0),m([(0,c.C)({type:String}),g("design:type",String)],k.prototype,"memberProfileBaseUrl",void 0),k=m([(0,a.M)("clocker-table-parts-first"),g("design:paramtypes",[])],k)},9987:(e,t,n)=>{n.d(t,{GJ:()=>I,Y8:()=>S});var o=n(6951),i=n(7477),r=n(101),c=n(6455),a=n.n(c),s=n(771),l=n(7270),d=n(596),u=n(8967),f=n(3600),p=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function h(e,t=null){return p(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),o=s.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-in/"+e,i=null===t?{}:{time:t};return a().fire({title:"Clock In?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,u.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var m=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function g(e,t=null){return m(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),o=s.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/start-break/"+e,i=null===t?{}:{time:t};return a().fire({title:"Start Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,u.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var k=n(9392),b=n(9662),y=n(5713),v=(n(934),function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c}),w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};const S=(e,t)=>{window.clocker={clockingTimeInfo:{clockingTime:e,clockingTimeValue:t}}},I=()=>{if("clocker"in window){const e=window.clocker.clockingTimeInfo;if("clockingTime"in e)return{clockingTime:e.clockingTime,clockingTimeValue:e.clockingTimeValue}}return null};let B=class extends k.oi{constructor(){super(),this._data=null,this._type=null,this.clockingTimeValue="",this.clocking=!1,this.clockingTime=!1,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info=""}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,r.X_)(e)):(this.fullInfo=!1,this.clockingInfo=(0,i.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const i=(0,o.F)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),c=e?n.attendance.inTime:t.inTime,a=null!==c?(0,o.F)(c,{dateStyle:"medium",timeStyle:"short"}):"--:--",s=e?n.attendance.id:t.id,l=e?n.attendance.inOrOut:t.inOrOut,d=e?n.attendance.startBreak:t.startBreak,u=null!==d?(0,o.F)(d,{dateStyle:"medium",timeStyle:"short"}):"--:--",f=new Date,p=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,h=(e?n.attendance.date.toDateString():t.date.toDateString())===f.toDateString();return k.dy`
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
          ${l?k.dy`
          <span class="badge badge-success bg-grow-early mx-1">Present</span>`:k.dy`
          <span class="badge badge-danger mx-1">Not Clocked</span>
          `}
        </div>
        `:k.dy`
          <div class="text-center flex justify-evenly whitespace-nowrap">
            <a href="tel://${e?(0,r.ND)(n.additionalInfo.memberInfo):(0,r.ND)(t.memberId)?e?n.additionalInfo.memberInfo.organizationName:t.memberId.organizationName:e?n.additionalInfo.memberInfo.phone:t.memberId.phone}">
              <mwc-icon-button class="bg-sunny-morning text-white" icon="call"></mwc-icon-button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+${n.additionalInfo.whatsapp}&amp;text=">
              <mwc-icon-button class="bg-grow-early text-white" icon="whatsapp"></mwc-icon-button>
            </a>
          </div>
        `}
        ${l&&null!==c?k.dy`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock in Time</b>: ${a}
          </span>
        </div>`:""}
        ${this.clocking?k.dy`
          ${p?k.dy`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${s}" user-break="start"
              icon="check">
            </mwc-button>
          </div>
          `:""}
        `:k.Ld}
        ${null!==d?k.dy`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break Start Time</b>: ${u}
          </span>
        </div>`:""}
      `}return null}firstUpdated(){this.clockUser(),this.userBreak(),setInterval((()=>{const e=I();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"in"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockInUser(e,t)}))}))}clockInUser(e,t){return C(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield h(n,this.clockingTimeValue):yield h(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"start"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.startUserBreak(e,t)}))}))}startUserBreak(e,t){return C(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield g(n,this.clockingTimeValue):yield g(n)}))}createRenderRoot(){return this}};B.styles=[k.iv`
   :host { display: block; }
  `],v([(0,b.C)({type:String}),w("design:type",String)],B.prototype,"clockingTimeValue",void 0),v([(0,b.C)({type:Boolean}),w("design:type",Boolean)],B.prototype,"clocking",void 0),v([(0,b.C)({type:Boolean}),w("design:type",Boolean)],B.prototype,"clockingTime",void 0),v([(0,b.C)({type:Boolean}),w("design:type",Boolean)],B.prototype,"fullInfo",void 0),v([(0,b.C)({type:String}),w("design:type",String)],B.prototype,"clocking_info",void 0),B=v([(0,y.M)("clocker-table-parts-second"),w("design:paramtypes",[])],B)},5647:(e,t,n)=>{var o=n(7052),i=n(6951),r=n(7477),c=n(101),a=n(6455),s=n.n(a),l=n(771),d=n(7270),u=n(596),f=n(8967),p=n(3600),h=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))},m=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function g(e,t=null){return m(this,void 0,void 0,(function*(){const n=(0,p.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-out/"+e,i=null===t?{}:{time:t};return s().fire({title:"Clock Out?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,d.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var k=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function b(e,t=null){return k(this,void 0,void 0,(function*(){const n=(0,p.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/end-break/"+e,i=null===t?{}:{time:t};return s().fire({title:"End Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>k(this,void 0,void 0,(function*(){return yield(0,d.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var y=n(9392),v=n(9662),w=n(5713),C=n(9987),S=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},B=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};let _=class extends y.oi{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.clocking=!1,this.clockingTimeValue="",this.clockingTime=!1,this.excuseBaseUrl="/attendance/v2/clocking/excuse?clocking-id=",this.followUpBaseUrl="/attendance/v2/clocking/follow-up?clocking-id="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,c.X_)(e)):(this.fullInfo=!1,this.clockingInfo=(0,r.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const r=(0,i.F)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),c=e?n.attendance.outTime:t.outTime,a=null!==c?(0,i.F)(c,{dateStyle:"medium",timeStyle:"short"}):"--:--",s=e?n.attendance.id:t.id,l=e?n.attendance.inOrOut:t.inOrOut,d=e?n.attendance.endBreak:t.endBreak,u=null!==d?(0,i.F)(d,{dateStyle:"medium",timeStyle:"short"}):"--:--",f=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,p=(0,o.h)(String(s),!0);return y.dy`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking?y.dy`
            <input type="checkbox" multi-break-check-out="${s}" name="member_check_out_${s}"
              id="member_check_out_${s}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `:y.Ld}
            <label for="member_check_out_${s}">@ ${r}</label>
          </div>
        </div>
        ${this.clocking?y.dy`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${s}" clock-user="out">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${s}"
            cancel-user-clock="true">
            <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-warning">'X' to Cancel Attendance</span>
        </div>
        `:y.Ld}
        <div class="text-center whitespace-nowrap">
          <a href="${this.excuseBaseUrl}${p}" class="btn btn-info btn-sm" target="_blank" type="button">Enter/ View
            Excuse</a>
          <a href="${this.followUpBaseUrl}${p}" class="btn btn-primary btn-sm" target="_blank" type="button">Follow-Up</a>
        </div>
        ${l&&null!==c?y.dy`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock out Time</b>: ${a}
          </span>
        </div>`:""}
        ${this.clocking?y.dy`
        ${f?y.dy`
        <hr class="whitespace-nowrap">
        <div class="text-center whitespace-nowrap">
          <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${s}" user-break="end"
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
      `}return null}firstUpdated(){this.clockUser(),this.userBreak(),this.cancelClocking(),setInterval((()=>{const e=(0,C.GJ)();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}cancelClocking(){document.querySelectorAll('[cancel-user-clock="true"]').forEach((e=>{e.addEventListener("click",(t=>B(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));yield function(e){return h(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/cancel-clocking/"+e,o={};return s().fire({title:"Cancel Clocking?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,d.d)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}(n)}))))}))}clockUser(){document.querySelectorAll("[clock-user]").forEach((e=>{"out"===e.getAttribute("clock-user")&&e.addEventListener("click",(t=>{this.clockOutUser(e,t)}))}))}clockOutUser(e,t){return B(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));this.clockingTime?yield g(n,this.clockingTimeValue):yield g(n)}))}userBreak(){document.querySelectorAll("[user-break]").forEach((e=>{"end"===e.getAttribute("user-break")&&e.addEventListener("click",(t=>{this.endUserBreak(e,t)}))}))}endUserBreak(e,t){return B(this,void 0,void 0,(function*(){t.preventDefault();const n=Number(e.getAttribute("clock-id"));console.log({e:t,element:e,CLOCK_ID:n}),this.clockingTime?yield b(n,this.clockingTimeValue):yield b(n)}))}createRenderRoot(){return this}};_.styles=[y.iv`
   :host { display: block; }
  `],S([(0,v.C)({type:Boolean}),I("design:type",Boolean)],_.prototype,"fullInfo",void 0),S([(0,v.C)({type:String}),I("design:type",String)],_.prototype,"clocking_info",void 0),S([(0,v.C)({type:Boolean}),I("design:type",Boolean)],_.prototype,"clocking",void 0),S([(0,v.C)({type:String}),I("design:type",String)],_.prototype,"clockingTimeValue",void 0),S([(0,v.C)({type:Boolean}),I("design:type",Boolean)],_.prototype,"clockingTime",void 0),S([(0,v.C)({type:String}),I("design:type",String)],_.prototype,"excuseBaseUrl",void 0),S([(0,v.C)({type:String}),I("design:type",String)],_.prototype,"followUpBaseUrl",void 0),_=S([(0,w.M)("clocker-table-parts-third"),I("design:paramtypes",[])],_)}}]);
//# sourceMappingURL=2905.js.map