"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member"],{1243:(e,t,r)=>{r.r(t)},8304:(e,t,r)=>{r.r(t),r.d(t,{DELETE_AttendanceDeleteScheduleMember:()=>p});var n=r(6455),s=r.n(n),o=r(8485),i=r(1942),l=r(7270),a=r(7052),c=r(4492),d=r(8967),u=r(3600),m=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}a((n=n.apply(e,t||[])).next())}))};function p(e,t="client_tokenLogin"){return m(this,void 0,void 0,(function*(){const r=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(n,r,t);const p=(0,a.base64Decode)((0,i.get_cookie)(t)),h=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,f={};return s().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,l.http)(h,{method:"DELETE",body:JSON.stringify(f),headers:{Authorization:"Token "+p}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new c.NetWorkCallResponses("delete",r,!0);return n.postForm,n}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}s().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5524:(e,t,r)=>{r.r(t),r.d(t,{GET_AttendanceScheduleMember:()=>c});var n=r(8485),s=r(1942),o=r(7270),i=r(7052),l=r(4492),a=r(3600);function c(e=null,t="",r="client_tokenLogin"){return c=this,d=void 0,m=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.verifyToken)(d,c,r);const u=(0,i.base64Decode)((0,s.get_cookie)(r)),m=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,p=yield(0,o.http)(m,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function r(e){try{s(m.next(e))}catch(e){t(e)}}function n(e){try{s(m.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof u?s:new u((function(e){e(s)}))).then(r,n)}s((m=m.apply(c,d||[])).next())}));var c,d,u,m}},3512:(e,t,r)=>{r.r(t),r.d(t,{POST_AttendanceAddScheduleMember:()=>p});var n=r(6455),s=r.n(n),o=r(8485),i=r(1942),l=r(7270),a=r(7052),c=r(4492),d=r(8967),u=r(3600),m=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}a((n=n.apply(e,t||[])).next())}))};function p(e="client_tokenLogin"){return m(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(r,t,e);const n=(0,a.base64Decode)((0,i.get_cookie)(e)),p=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",h=document.querySelector('[make-general-posts="add-schedule-member"]'),f=new FormData(h);return s().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,l.http)(p,{method:"POST",body:f,headers:{Authorization:"Token "+n}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,h),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,d.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&s().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6656:(e,t,r)=>{r.r(t),r.d(t,{GET_MembershipUsers:()=>c});var n=r(8485),s=r(1942),o=r(7270),i=r(7052),l=r(4492),a=r(3600);function c(e=null,t="",r="client_tokenLogin"){return c=this,d=void 0,m=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.verifyToken)(d,c,r);const u=(0,i.base64Decode)((0,s.get_cookie)(r)),m=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,p=yield(0,o.http)(m,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function r(e){try{s(m.next(e))}catch(e){t(e)}}function n(e){try{s(m.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof u?s:new u((function(e){e(s)}))).then(r,n)}s((m=m.apply(c,d||[])).next())}));var c,d,u,m}},7725:(e,t,r)=>{r.r(t),r.d(t,{FileInput:()=>l});var n=r(5862),s=r(9662),o=(r(9975),r(3283),r(1243),function(e,t,r,n){var s,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?n.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:n.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?n.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:n.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],l.prototype,"randomID",void 0),o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"id",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"required",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"multiple",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],l.prototype,"startNumber",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],l.prototype,"rowsPerPage",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],l.prototype,"totalShowing",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=o([(0,s.customElement)("file-input")],l)},6692:(e,t,r)=>{r.r(t),r.d(t,{AttendanceSetupFormEditMember:()=>c}),r(9579);var n=r(3750),s=r(3600),o=r(5862),i=r(9662),l=(r(6945),r(8693),function(e,t,r,n){var s,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),(0,n.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,l)}a((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return o.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
    `}firstUpmemberd(){}createRenderRoot(){return this}};l([(0,i.property)({type:String}),a("design:type",String)],c.prototype,"email",void 0),l([(0,i.property)({type:Number}),a("design:type",Number)],c.prototype,"mId",void 0),l([(0,i.property)({type:Number}),a("design:type",Number)],c.prototype,"clientId",void 0),c=l([(0,i.customElement)("attendance-setup-form-edit-member"),a("design:paramtypes",[])],c)},6945:(e,t,r)=>{r.r(t),r.d(t,{AttendanceSetupFormMember:()=>w}),r(5501);var n,s,o=r(5862),i=r(9662),l=r(8881),a=(r(3283),r(1511),r(3690),r(1854),r(7725),r(9068)),c=r(5524),d=r(2218),u=r(4672),m=r(8304),p=(r(5866),r(3512)),h=r(6656),f=r(7052),b=r(1942),v=r(8485),y=function(e,t,r,n){var s,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}a((n=n.apply(e,t||[])).next())}))};let w=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?o.html`${this.scheduleMember}`:o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleMember(){return null===this._scheduleMembers?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleMembers?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Member</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.html`${this.table}`}get table(){return this._scheduleMembers.results.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Member
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
                ${this.getMeetingAttendanceMembers}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceMembers(){return o.html`
      ${this._scheduleMembers.results.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getMember(e.memberId),o.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceMember}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return o.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member">
                <div class="p-0 m-0" show-memberField="all">
                  ${this.memberFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get memberField(){let e={};const t=(0,f.base64Decode)((0,b.get_cookie)("client_tokenLogin"));return e.Authorization="Token "+t,o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Member</h4>
            <select-input class="w-100" id="memberId" name="memberId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${v.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `}memberFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${e}" no_delete></multiple-widgets>
    `}addMemberField(){const e=this.showMemberFieldAllSelector.children.length,t=(0===e?-1:Number(this.showMemberFieldAllSelector.children[e-1].getAttribute("memberField-id")))+1,r=document.createElement("multiple-widgets");r.setAttribute("class","col-md-12 col-lg-12 mb-3"),r.setAttribute("memberField-id",String(t)),this.showMemberFieldAllSelector.append(r);const n=this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+t+'"]'),s=this.memberField.strings.join("");setTimeout((()=>{n.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}processClientUserSearch(e,t){t.page=t.page||0;const r=e.count,n=e.results,s=document.querySelector('[id="memberId"]');console.log({data:e,params:t,RESULTS:n,SELECTOR:s});let o=[];if(r>0){var i=n;console.log({"smbfl-_data":i});for(let e=0;e<i.length;e++){const t=i[e],r={id:t.id,text:t.firstname+" "+t.surname};o.includes(r)||o.push(r)}}return console.log({processedData:o}),{results:o,total:r,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}submitForm(e){return _(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,p.POST_AttendanceAddScheduleMember)()}))}deleteQuestionnaireMeetingAttendanceMember(e){return _(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleMember)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return _(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleMember(){return _(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleMember)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMembers(){return _(this,void 0,void 0,(function*(){const e=yield(0,h.GET_MembershipUsers)();let t=[];null===e?t.push({id:0,firstname:"** ",middlename:"NOT FOUND",surname:" **",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._members=[...this._members,...t]}))}getMember(e){return _(this,void 0,void 0,(function*(){const t=yield(0,h.GET_MembershipUsers)(e);if(null===t)return"???";if(console.log({"_networkResponse.response":t.response}),t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};w.styles=[o.css`
   :host { display: block; }
  `],y([(0,i.property)({type:Number}),g("design:type",Number)],w.prototype,"CLIENT_ID",void 0),y([(0,i.property)({type:Number}),g("design:type",Number)],w.prototype,"startSearchPage",void 0),y([(0,i.property)({type:Array}),g("design:type",Array)],w.prototype,"_members",void 0),y([(0,i.property)({type:Array}),g("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],w.prototype,"_data",void 0),y([(0,i.property)({type:Object}),g("design:type",Object)],w.prototype,"urlQueryParams",void 0),y([(0,i.property)({type:Number}),g("design:type",Number)],w.prototype,"meetingEventId",void 0),y([(0,i.query)('[show-memberField="all"]'),g("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],w.prototype,"showMemberFieldAllSelector",void 0),w=y([(0,i.customElement)("attendance-setup-form-member"),g("design:paramtypes",[])],w)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-46c46b","src_assets_styles_views_widget_simple-table_main_scss-src_addons_widgets_add_remove_widget_in-e0b7ca","shared"],(()=>(6692,e(e.s=6692)))),e.O())])}));
//# sourceMappingURL=edit-member.js.map