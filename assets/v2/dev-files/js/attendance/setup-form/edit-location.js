"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-location"],{1243:(e,t,n)=>{n.r(t)},7427:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleLocation:()=>h});var o=n(6455),i=n.n(o),s=n(8485),r=n(1942),l=n(7270),a=n(7052),c=n(4492),d=n(8967),u=n(3600),p=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((o=o.apply(e,t||[])).next())}))};function h(e,t="client_tokenLogin"){return p(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),o=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(o,n,t);const h=(0,a.base64Decode)((0,r.get_cookie)(t)),m=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,f={};return i().fire({title:"Remove Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,l.http)(m,{method:"DELETE",body:JSON.stringify(f),headers:{Authorization:"Token "+h}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new c.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},606:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleLocation:()=>c});var o=n(8485),i=n(1942),s=n(7270),r=n(7052),l=n(4492),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,p=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.verifyToken)(d,c,n);const u=(0,r.base64Decode)((0,i.get_cookie)(n)),p=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,h=yield(0,s.http)(p,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.NetWorkCallResponses("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{i(p.next(e))}catch(e){t(e)}}function o(e){try{i(p.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,o)}i((p=p.apply(c,d||[])).next())}));var c,d,u,p}},5372:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleLocation:()=>h});var o=n(6455),i=n.n(o),s=n(8485),r=n(1942),l=n(7270),a=n(7052),c=n(4492),d=n(8967),u=n(3600),p=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((o=o.apply(e,t||[])).next())}))};function h(e="client_tokenLogin"){return p(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(n,t,e);const o=(0,a.base64Decode)((0,r.get_cookie)(e)),h=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location",m=document.querySelector('[make-general-posts="add-schedule-location"]'),f=new FormData(m);return i().fire({title:"Add Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,l.http)(h,{method:"POST",body:f,headers:{Authorization:"Token "+o}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,m),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,d.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>c});var o=n(8485),i=n(1942),s=n(7270),r=n(7052),l=n(4492),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,p=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.verifyToken)(d,c,n);const u=(0,r.base64Decode)((0,i.get_cookie)(n)),p=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,h=yield(0,s.http)(p,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.NetWorkCallResponses("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{i(p.next(e))}catch(e){t(e)}}function o(e){try{i(p.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,o)}i((p=p.apply(c,d||[])).next())}));var c,d,u,p}},7725:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>l});var o=n(5862),i=n(9662),s=(n(9975),n(3283),n(1243),function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[o.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?o.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:o.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?o.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:o.html`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"name",void 0),s([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"label",void 0),s([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"value",void 0),s([(0,i.property)({type:Number}),r("design:type",Number)],l.prototype,"randomID",void 0),s([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"id",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"required",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,i.property)({type:Number}),r("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,i.property)({type:Number}),r("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,i.property)({type:Number}),r("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,i.customElement)("file-input")],l)},2166:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLocation:()=>c}),n(9579);var o=n(3750),i=n(3600),s=n(5862),r=n(9662),l=(n(5744),n(8693),function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends s.LitElement{constructor(){super(),(0,o.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),yield(0,i.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,i){function r(e){try{a(s.next(e))}catch(e){i(e)}}function l(e){try{a(s.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,l)}a((s=s.apply(t,n||[])).next())}));var t,n,o,s}disconnectedCallback(){}render(){return s.html`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-location CLIENT_ID="${this.clientId}"></attendance-setup-form-location>
    `}firstUplocationd(){}createRenderRoot(){return this}};l([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"email",void 0),l([(0,r.property)({type:Number}),a("design:type",Number)],c.prototype,"mId",void 0),l([(0,r.property)({type:Number}),a("design:type",Number)],c.prototype,"clientId",void 0),c=l([(0,r.customElement)("attendance-setup-form-edit-location"),a("design:paramtypes",[])],c)},5744:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormLocation:()=>y}),n(5501);var o,i,s=n(5862),r=n(9662),l=(n(3283),n(1511),n(3690),n(1854),n(7725),n(9068)),a=n(606),c=n(2218),d=n(4672),u=n(7427),p=n(6262),h=(n(5866),n(7052)),m=n(1942),f=n(5372),v=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((o=o.apply(e,t||[])).next())}))};let y=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__locationUser=null,this.__schedule=null,this.__scheduleLocations=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _locationUser(e){this.__locationUser=e,this.requestUpdate()}get _locationUser(){return this.__locationUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return null===this._schedule?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?s.html`${this.scheduleLocation}`:s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleLocation(){return null===this._scheduleLocations?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleLocations?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Location</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.html`${this.table}`}get table(){return this._scheduleLocations.results.length>0?s.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Location">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Latitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
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
                ${this.getMeetingAttendanceLocations}
              </tbody>
            </table>
          </div>
        </div>
      `:s.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceLocations(){return s.html`
      ${this._scheduleLocations.results.map(((e,t)=>s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.latitude}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.longitude}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.radius}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceLocation}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return s.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  ${this.locationFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Location" raised class="button" @click="${this.submitForm}">
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
    `}get locationField(){return(0,h.base64Decode)((0,m.get_cookie)("client_tokenLogin")),s.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Latitude</h4>
            <mwc-textfield name="latitude" type="number" step="0.01" class="w-full" id="latitude" label="Enter Latitude" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Longitude</h4>
            <mwc-textfield name="longitude" type="number" step="0.01" class="w-full" id="longitude" label="Enter Longitude" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Radius</h4>
            <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius" label="Enter Radius" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}locationFieldDefault(e){return s.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.locationField}
        locationField-id="${e}" no_delete></multiple-widgets>
    `}addLocationField(){const e=this.showLocationFieldAllSelector.children.length,t=(0===e?-1:Number(this.showLocationFieldAllSelector.children[e-1].getAttribute("locationField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("locationField-id",String(t)),this.showLocationFieldAllSelector.append(n);const o=this.showLocationFieldAllSelector.querySelectorAll('multiple-widgets[locationField-id="'+t+'"]'),i=this.locationField.strings.join("");setTimeout((()=>{o.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.MDCDataTable(e)}))}getLocationUsers(){return g(this,void 0,void 0,(function*(){const e=yield(0,p.GET_ClientUsers)();this._locationUser=null===e?void 0:e.paginResponse}))}getLocationUser(e){return g(this,void 0,void 0,(function*(){const t=yield(0,p.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return console.log({"user.firstname user.surname":e.firstname+" "+e.surname}),e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,f.POST_AttendanceAddScheduleLocation)()}))}deleteQuestionnaireMeetingAttendanceLocation(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,u.DELETE_AttendanceDeleteScheduleLocation)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,o=e.results,i=document.querySelector('[id="location"]');console.log({data:e,params:t,RESULTS:o,SELECTOR:i});let s=[];if(n>0){var r=o;console.log({"smbfl-_data":r});for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return console.log({processedData:s}),{results:s,total:n,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,d.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return g(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleLocation(){return g(this,void 0,void 0,(function*(){const e=yield(0,a.GET_AttendanceScheduleLocation)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};y.styles=[s.css`
   :host { display: block; }
  `],v([(0,r.property)({type:Number}),_("design:type",Number)],y.prototype,"CLIENT_ID",void 0),v([(0,r.property)({type:Number}),_("design:type",Number)],y.prototype,"startSearchPage",void 0),v([(0,r.property)({type:Array}),_("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],y.prototype,"_data",void 0),v([(0,r.property)({type:Object}),_("design:type",Object)],y.prototype,"urlQueryParams",void 0),v([(0,r.property)({type:Number}),_("design:type",Number)],y.prototype,"meetingEventId",void 0),v([(0,r.query)('[show-locationField="all"]'),_("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],y.prototype,"showLocationFieldAllSelector",void 0),y=v([(0,r.customElement)("attendance-setup-form-location"),_("design:paramtypes",[])],y)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-46c46b","src_assets_styles_views_widget_simple-table_main_scss-src_addons_widgets_add_remove_widget_in-e0b7ca","shared"],(()=>(2166,e(e.s=2166)))),e.O())])}));
//# sourceMappingURL=edit-location.js.map