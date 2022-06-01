"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-admin"],{3471:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleAdmin:()=>h});var s=n(6455),i=n.n(s),r=n(8485),o=n(1942),a=n(7270),l=n(7052),c=n(4492),d=n(8967),u=n(3600),m=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{l(s.next(e))}catch(e){r(e)}}function a(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};function h(e,t="client_tokenLogin"){return m(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),s=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(s,n,t);const h=(0,l.base64Decode)((0,o.get_cookie)(t)),p=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin/"+e,f={};return i().fire({title:"Remove Admin?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,a.http)(p,{method:"DELETE",body:JSON.stringify(f),headers:{Authorization:"Token "+h}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new c.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},4331:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleAdmin:()=>c});var s=n(8485),i=n(1942),r=n(7270),o=n(7052),a=n(4492),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,m=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.verifyToken)(d,c,n);const u=(0,o.base64Decode)((0,i.get_cookie)(n)),m=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin"+(null===e?"":"/"+e)+t,h=yield(0,r.http)(m,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new a.NetWorkCallResponses("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{i(m.next(e))}catch(e){t(e)}}function s(e){try{i(m.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,s)}i((m=m.apply(c,d||[])).next())}));var c,d,u,m}},6435:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleAdmin:()=>h});var s=n(6455),i=n.n(s),r=n(8485),o=n(1942),a=n(7270),l=n(7052),c=n(4492),d=n(8967),u=n(3600),m=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{l(s.next(e))}catch(e){r(e)}}function a(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};function h(e="client_tokenLogin"){return m(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(n,t,e);const s=(0,l.base64Decode)((0,o.get_cookie)(e)),h=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin",p=document.querySelector('[make-general-posts="add-schedule-admin"]'),f=new FormData(p);return i().fire({title:"Setup Admin?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,a.http)(h,{method:"POST",body:f,headers:{Authorization:"Token "+s}},!1).then((e=>{console.log({HTTP:e});try{const t=new c.NetWorkCallResponses("post",e,!1,p),n=t.response;if(console.log({_RESPONSE:n}),"nameError"in n&&"unknownError"in n&&n.unknownError.length>0){console.log({"_RESPONSE.unknownError":n.unknownError});let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,d.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new c.NetWorkCallResponses("post",n,!0,p);return s.postForm,s}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n.response.success&&setTimeout((()=>{window.location.reload()}),500))}}))}))}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>c});var s=n(8485),i=n(1942),r=n(7270),o=n(7052),a=n(4492),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,m=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.verifyToken)(d,c,n);const u=(0,o.base64Decode)((0,i.get_cookie)(n)),m=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,h=yield(0,r.http)(m,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new a.NetWorkCallResponses("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{i(m.next(e))}catch(e){t(e)}}function s(e){try{i(m.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,s)}i((m=m.apply(c,d||[])).next())}));var c,d,u,m}},5048:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAdmin:()=>c}),n(9579);var s=n(3750),i=n(3600),r=n(5862),o=n(9662),a=(n(452),n(8693),function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),(0,s.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),yield(0,i.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,a)}l((r=r.apply(t,n||[])).next())}));var t,n,s,r}disconnectedCallback(){}render(){return r.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-admin CLIENT_ID="${this.clientId}"></attendance-setup-form-admin>
    `}firstUpdated(){}createRenderRoot(){return this}};a([(0,o.property)({type:String}),l("design:type",String)],c.prototype,"email",void 0),a([(0,o.property)({type:Number}),l("design:type",Number)],c.prototype,"mId",void 0),a([(0,o.property)({type:Number}),l("design:type",Number)],c.prototype,"clientId",void 0),c=a([(0,o.customElement)("attendance-setup-form-edit-admin"),l("design:paramtypes",[])],c)},452:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAdmin:()=>y}),n(5501);var s,i,r=n(5862),o=n(9662),a=n(8881),l=(n(3283),n(1511),n(3690),n(1854),n(9068)),c=n(4331),d=n(2218),u=n(4672),m=n(3471),h=n(6262),p=(n(5866),n(8485)),f=n(7052),_=n(1942),v=n(6435),g=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{l(s.next(e))}catch(e){r(e)}}function a(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};let y=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__adminUser=null,this.__schedule=null,this.__scheduleAdmins=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _adminUser(e){this.__adminUser=e,this.requestUpdate()}get _adminUser(){return this.__adminUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAdmins(e){this.__scheduleAdmins=e,this.requestUpdate()}get _scheduleAdmins(){return this.__scheduleAdmins}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAdmin()}))}disconnectedCallback(){}render(){return r.html`${this.schedule}`}get schedule(){return null===this._schedule?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?r.html`${this.scheduleAdmin}`:r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAdmin(){return null===this._scheduleAdmins?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAdmins?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Admin</span>: undefined error</h4>
          </div>
        </div>
      `:r.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.html`${this.table}`}get table(){return this._scheduleAdmins.results.length>0?r.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Admin">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Admin
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Editor
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Agenda Editor
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Clocking Admin
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
                ${this.getMeetingAttendanceAdmins}
              </tbody>
            </table>
          </div>
        </div>
      `:r.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAdmins(){return r.html`
      ${this._scheduleAdmins.results.map((e=>r.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,a.until)(this.getAdminUser(e.adminId),r.html`<span>Loading...</span>`)}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.meetingEditor?r.html`<mwc-icon class="text-green-600">check</mwc-icon>`:r.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.agendaEditor?r.html`<mwc-icon class="text-green-600">check</mwc-icon>`:r.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.clockingAdmin?r.html`<mwc-icon class="text-green-600">check</mwc-icon>`:r.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAdmin}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Admin</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Admin!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-admin">
                <div class="p-0 m-0" show-adminField="all">
                  ${this.adminFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Admin" raised class="button" @click="${this.submitForm}">
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
    `}get adminField(){let e={};const t=(0,f.base64Decode)((0,_.get_cookie)("client_tokenLogin"));return e.Authorization="Token "+t,r.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Admin User</h4>
            <select-input class="w-100" id="adminId" name="adminId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${p.CONSTANTS.URLS.AKWAABA_API_BASE_URL}clients/user/search"></select-input>
          </div><div class="col-md-12 col-lg-12"></div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Meeting Editor?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="meetingEditor" id="meetingEditor" label="Is Meeting Editor?"></switch-input>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Agenda Editor?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="agendaEditor" id="agendaEditor" label="Is Agenda Editor?"></switch-input>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Clocking Admin?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="clockingAdmin" id="clockingAdmin" label="Is Clocking Admin?"></switch-input>
            </div>
          </div>
        </div>
      </div>
    `}adminFieldDefault(e){return r.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.adminField}
        adminField-id="${e}" no_delete></multiple-widgets>
    `}addAdminField(){const e=this.showAdminFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAdminFieldAllSelector.children[e-1].getAttribute("adminField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("adminField-id",String(t)),this.showAdminFieldAllSelector.append(n);const s=this.showAdminFieldAllSelector.querySelectorAll('multiple-widgets[adminField-id="'+t+'"]'),i=this.adminField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.MDCDataTable(e)}))}getAdminUsers(){return b(this,void 0,void 0,(function*(){const e=yield(0,h.GET_ClientUsers)();this._adminUser=null===e?void 0:e.paginResponse}))}getAdminUser(e){return b(this,void 0,void 0,(function*(){const t=yield(0,h.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return console.log({"user.firstname user.surname":e.firstname+" "+e.surname}),e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return b(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,v.POST_AttendanceAddScheduleAdmin)()}))}deleteQuestionnaireMeetingAttendanceAdmin(e){return b(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleAdmin)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,s=e.results,i=document.querySelector('[id="adminId"]');console.log({data:e,params:t,RESULTS:s,SELECTOR:i});let r=[];if(n>0){var o=s;console.log({"smbfl-_data":o});for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.firstname+" "+t.surname};r.includes(n)||r.push(n)}}return console.log({processedData:r}),{results:r,total:n,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return b(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAdmin(){return b(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleAdmin)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleAdmins=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};y.styles=[r.css`
   :host { display: block; }
  `],g([(0,o.property)({type:Number}),w("design:type",Number)],y.prototype,"CLIENT_ID",void 0),g([(0,o.property)({type:Number}),w("design:type",Number)],y.prototype,"startSearchPage",void 0),g([(0,o.property)({type:Array}),w("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],y.prototype,"_data",void 0),g([(0,o.property)({type:Object}),w("design:type",Object)],y.prototype,"urlQueryParams",void 0),g([(0,o.property)({type:Number}),w("design:type",Number)],y.prototype,"meetingEventId",void 0),g([(0,o.query)('[show-adminField="all"]'),w("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],y.prototype,"showAdminFieldAllSelector",void 0),y=g([(0,o.customElement)("attendance-setup-form-admin"),w("design:paramtypes",[])],y)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-46c46b","src_assets_styles_views_widget_simple-table_main_scss-src_addons_widgets_add_remove_widget_in-e0b7ca","shared"],(()=>(5048,e(e.s=5048)))),e.O())])}));
//# sourceMappingURL=edit-admin.js.map