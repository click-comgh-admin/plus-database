"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_attendance_setup_form_forms_schedule_ts"],{1243:(e,t,i)=>{i.r(t)},5663:(e,t,i)=>{i.r(t),i.d(t,{GET_MeetingEventLinkTypes:()=>r});var n=i(8485),l=i(7270),o=i(4492),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),r=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function l(e){try{s(c.next(e))}catch(e){n(e)}}function o(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(l,o)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},6404:(e,t,i)=>{i.r(t),i.d(t,{GET_MeetingEventLocations:()=>r});var n=i(8485),l=i(7270),o=i(4492),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),r=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function l(e){try{s(c.next(e))}catch(e){n(e)}}function o(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(l,o)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},7790:(e,t,i)=>{i.r(t),i.d(t,{GET_MeetingEventMemberTypes:()=>r});var n=i(8485),l=i(7270),o=i(4492),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),r=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function l(e){try{s(c.next(e))}catch(e){n(e)}}function o(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(l,o)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},28:(e,t,i)=>{i.r(t),i.d(t,{GET_MeetingEventTypes:()=>r});var n=i(8485),l=i(7270),o=i(4492),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),r=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function l(e){try{s(c.next(e))}catch(e){n(e)}}function o(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(l,o)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},1125:(e,t,i)=>{i.r(t),i.d(t,{POST_AttendanceAddSchedule:()=>m});var n=i(6455),l=i.n(n),o=i(8485),s=i(7270),r=i(4492),c=i(8967),a=i(3600),d=function(e,t,i,n){return new(i||(i=Promise))((function(l,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};function m(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule",i=document.querySelector('[make-general-posts="add-schedule"]'),n=new FormData(i);return l().fire({title:"Set Meeting/Event?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new r.NetWorkCallResponses("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,c.https_swal_error_format)(e);l().showValidationMessage(`${t}`)}return t})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),i=n.response.success}i&&l().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{if(n instanceof Object){const e=n.response;console.log({"VALUE.data":e.data}),window.location.href=o.CONSTANTS.URLS.PDB_CLIENT+"attendance/v2/settings/schedule?meeting-event-id="+e.data.id}else window.location.reload()}),500)}}))}))}},4609:(e,t,i)=>{i.r(t),i.d(t,{PUT_AttendanceEditSchedule:()=>m});var n=i(6455),l=i.n(n),o=i(8485),s=i(7270),r=i(4492),c=i(8967),a=i(3600),d=function(e,t,i,n){return new(i||(i=Promise))((function(l,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),i=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/"+e,n=document.querySelector('[make-general-posts="add-schedule"]'),m=new FormData(n);return l().fire({title:"Update Schedule?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(i,{method:"PUT",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new r.NetWorkCallResponses("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,c.https_swal_error_format)(e);l().showValidationMessage(`${t}`)}return t})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),i=n.response.success}i&&l().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6224:(e,t,i)=>{i.r(t),i.d(t,{GET_ClientBranches:()=>r});var n=i(8485),l=i(7270),o=i(4492),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),r=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function l(e){try{s(c.next(e))}catch(e){n(e)}}function o(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(l,o)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},72:(e,t,i)=>{i.r(t),i.d(t,{GET_MemberGroupingsMemberCategories:()=>r});var n=i(8485),l=i(7270),o=i(4492),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),r=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function l(e){try{s(c.next(e))}catch(e){n(e)}}function o(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(l,o)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},2461:(e,t,i)=>{i.r(t),i.d(t,{FileInput:()=>r});var n=i(5862),l=i(9662),o=(i(9975),i(3283),i(1243),function(e,t,i,n){var l,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(o<3?l(s):o>3?l(t,i,s):l(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.css`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,l.property)({type:String}),s("design:type",String)],r.prototype,"name",void 0),o([(0,l.property)({type:String}),s("design:type",String)],r.prototype,"label",void 0),o([(0,l.property)({type:String}),s("design:type",String)],r.prototype,"value",void 0),o([(0,l.property)({type:Number}),s("design:type",Number)],r.prototype,"randomID",void 0),o([(0,l.property)({type:String}),s("design:type",String)],r.prototype,"id",void 0),o([(0,l.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"required",void 0),o([(0,l.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"multiple",void 0),o([(0,l.property)({type:Number}),s("design:type",Number)],r.prototype,"startNumber",void 0),o([(0,l.property)({type:Number}),s("design:type",Number)],r.prototype,"rowsPerPage",void 0),o([(0,l.property)({type:Number}),s("design:type",Number)],r.prototype,"totalShowing",void 0),o([(0,l.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"showSelectorLoaded",void 0),r=o([(0,l.customElement)("file-input")],r)},3979:(e,t,i)=>{i.r(t),i.d(t,{AttendanceSetupFormSchedule:()=>g});var n,l=i(5862),o=i(9662),s=(i(3313),i(789),i(6034),i(3283),i(3690),i(2461),i(28)),r=i(6224),c=i(72),a=i(6404),d=i(5663),m=i(1125),u=i(2218),h=i(4609),p=i(7790),y=function(e,t,i,n){var l,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(o<3?l(s):o>3?l(t,i,s):l(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,i,n){return new(i||(i=Promise))((function(l,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};let g=class extends l.LitElement{constructor(){super(),this.__schedule=null,this.CLIENT_ID=0,this.meetingEventId=0,this.isEdit=!1,this._type=[],this._memberType=[],this._branches=[],this._memberCategories=[],this._meetingEventLinkTypes=[],this._meetingEventLocations=[],this._data=[]}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getTypes(),yield this.getBranches(),yield this.getMemberTypes(),yield this.getMemberCategories(),yield this.getAttendanceSchedule(),yield this.getMeetingEventLinkTypes(),yield this.getMeetingEventLocations()}))}disconnectedCallback(){}render(){let e=null;return e=null!==this._schedule&&void 0!==this._schedule.data?Array.isArray(this._schedule.data)?this._schedule.data.length>0?this._schedule.data[0]:{}:this._schedule.data:{},void 0===e.meetingLocation||e.meetingLocation,l.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Schedule</h1>
                  <h3 class="h3">Create New Meeting/ Event Schedule!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="add-schedule" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Schedule Type</h4>
                    ${void 0===e.type?l.html`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((e=>l.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:l.html`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((t=>e.type===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Type</h4>
                    ${void 0===e.type?l.html`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((e=>l.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:l.html`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((t=>e.type===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Meeting/ Event</h4> 
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="${void 0===e.id?"":e.name}" label="Enter Meeting/ Event" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    ${void 0===e.branchId?l.html`
                      <mwc-select name="branchId" class="w-full" id="branchId" label="Select Branch" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>l.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:l.html`
                      <mwc-select name="branchId" class="w-full" id="branchId" label="Select Branch" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((t=>e.branchId.id===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Memeber Category</h4>
                    ${void 0===e.memberCategoryId?l.html`
                      <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Memeber Category" outlined required>
                        <mwc-list-item value="0">Select Memeber Category</mwc-list-item>
                        ${this._memberCategories.map((e=>l.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
                      </mwc-select>
                    `:l.html`
                      <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Memeber Category" outlined required>
                        <mwc-list-item value="0">Select Memeber Category</mwc-list-item>
                        ${this._memberCategories.map((t=>e.memberCategoryId.id===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.category}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.category}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Start Time</h4> 
                    <mwc-textfield name="startTime" type="time" class="w-full" id="startTime" value="${void 0===e.id?"":String(e.startTime)}" label="Select Start Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Close Time</h4> 
                    <mwc-textfield name="closeTime" type="time" class="w-full" id="closeTime" value="${void 0===e.id?"":String(e.closeTime)}" label="Select Close Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Lateness Time</h4> 
                    <mwc-textfield name="latenessTime" type="time" class="w-full" id="latenessTime" value="${void 0===e.id?"":String(e.latenessTime)}" label="Select Lateness Time" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Is It Recuring?</h4> 
                    <switch-input name="isRecuring" class="w-full" id="isRecuring" .selected="${void 0!==e.id&&e.isRecuring}" label="Is It Recuring?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Break-Time?</h4> 
                    <switch-input name="hasBreakTime" class="w-full" id="hasBreakTime" .selected="${void 0!==e.id&&e.hasBreakTime}" label="Any Break-Time?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Duty/ Work Reporting?</h4> 
                    <switch-input name="hasDuty" class="w-full" id="hasDuty" .selected="${void 0!==e.id&&e.hasDuty}" label="Any Duty/ Work Reporting?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Overtime?</h4> 
                    <switch-input name="hasOvertime" class="w-full" id="hasOvertime" .selected="${void 0!==e.id&&e.hasOvertime}" label="Any Overtime?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Location</h4>
                    ${void 0===e.meetingLocation?l.html`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((e=>l.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:l.html`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((t=>e.meetingLocation===t.id?l.html`<mwc-list-item value="${t.id}" selected activated aria-selected="true">${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Virtual Meeting Link</h4> 
                    <mwc-textfield name="virtualMeetingLink" type="url" class="w-full" id="virtualMeetingLink" value="${e.virtualMeetingLink}" label="Enter Virtual Meeting Link" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Virtual Meeting Type</h4>
                    <mwc-select name="virtualMeetingType" class="w-full" id="virtualMeetingType" label="Select Virtual Meeting Type" outlined>
                      <mwc-list-item value="0">Select Virtual Meeting Type</mwc-list-item>
                      ${this._meetingEventLinkTypes.map((t=>e.virtualMeetingType===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Expected Monthly Attendance</h4> 
                    <mwc-textfield name="expectedMonthlyAttendance" type="number" class="w-full" id="expectedMonthlyAttendance"
                      value="${void 0===e.id?0:e.expectedMonthlyAttendance}" label="Enter Expected Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Active Monthly Attendance</h4>
                    <mwc-textfield name="activeMonthlyAttendance" type="number" class="w-full" id="activeMonthlyAttendance"
                      value="${void 0===e.id?0:e.activeMonthlyAttendance}" label="Enter Active Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="${void 0===e.id?"":e.agenda}" outlined required>
                    </mwc-textarea>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Attach Agenda File <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="agendaFile" name="agendaFile" label="Add Agenda File"></file-input>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="${void 0===e.id?"Create":"Update"} Schedule" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return f(this,void 0,void 0,(function*(){e.preventDefault(),void 0!==this._schedule&&!0===this.isEdit?yield(0,h.PUT_AttendanceEditSchedule)(this.meetingEventId):yield(0,m.POST_AttendanceAddSchedule)()}))}getAttendanceSchedule(){return f(this,void 0,void 0,(function*(){const e=yield(0,u.GET_AttendanceSchedule)(this.meetingEventId);console.log({_networkResponse:e}),this._schedule=null===e?void 0:e.response}))}getTypes(){return f(this,void 0,void 0,(function*(){const e=yield(0,s.GET_MeetingEventTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._type=[...this._type,...t]}))}getMemberTypes(){return f(this,void 0,void 0,(function*(){const e=yield(0,p.GET_MeetingEventMemberTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberType=[...this._memberType,...t]}))}getMeetingEventLinkTypes(){return f(this,void 0,void 0,(function*(){const e=yield(0,d.GET_MeetingEventLinkTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._meetingEventLinkTypes=[...this._meetingEventLinkTypes,...t]}))}getMeetingEventLocations(){return f(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MeetingEventLocations)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._meetingEventLocations=[...this._meetingEventLocations,...t]}))}getBranches(){return f(this,void 0,void 0,(function*(){const e=yield(0,r.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getMemberCategories(){return f(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};g.styles=[l.css`
   :host { display: block; }
  `],y([(0,o.property)({type:Number}),v("design:type",Number)],g.prototype,"CLIENT_ID",void 0),y([(0,o.property)({type:Number}),v("design:type",Number)],g.prototype,"meetingEventId",void 0),y([(0,o.property)({type:Boolean}),v("design:type",Boolean)],g.prototype,"isEdit",void 0),y([(0,o.property)({type:Array}),v("design:type",Array)],g.prototype,"_type",void 0),y([(0,o.property)({type:Array}),v("design:type",Array)],g.prototype,"_memberType",void 0),y([(0,o.property)({type:Array}),v("design:type",Array)],g.prototype,"_branches",void 0),y([(0,o.property)({type:Array}),v("design:type",Array)],g.prototype,"_memberCategories",void 0),y([(0,o.property)({type:Array}),v("design:type",Array)],g.prototype,"_meetingEventLinkTypes",void 0),y([(0,o.property)({type:Array}),v("design:type",Array)],g.prototype,"_meetingEventLocations",void 0),y([(0,o.property)({type:Array}),v("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],g.prototype,"_data",void 0),g=y([(0,o.customElement)("attendance-setup-form-schedule"),v("design:paramtypes",[])],g)}}]);
//# sourceMappingURL=src_view_attendance_setup_form_forms_schedule_ts.js.map