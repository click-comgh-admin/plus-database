"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[84],{4843:(e,t,n)=>{n.d(t,{S:()=>c});var i=n(771),o=n(1942),r=n(7839),s=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,p=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,s.t)((0,o.Hl)(n)),p=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,h=yield(0,r.d)(p,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(p.next(e))}catch(e){t(e)}}function i(e){try{o(p.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((p=p.apply(c,d||[])).next())}));var c,d,u,p}},2218:(e,t,n)=>{n.d(t,{u:()=>c});var i=n(771),o=n(1942),r=n(7839),s=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,p=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,s.t)((0,o.Hl)(n)),p=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,h=yield(0,r.d)(p,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(p.next(e))}catch(e){t(e)}}function i(e){try{o(p.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((p=p.apply(c,d||[])).next())}));var c,d,u,p}},2892:(e,t,n)=>{n.d(t,{c:()=>c});var i=n(771),o=n(1942),r=n(7839),s=n(7052),l=n(596),a=n(3600);function c(e=null,t="client_tokenLogin"){return n=this,c=void 0,u=function*(){const n=String(window.supersecret.unknowable.ops.id),c=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(c,n,t);const d=(0,s.t)((0,o.Hl)(t)),u=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),p=yield(0,r.d)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new l.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new l.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function i(e){try{r(u.next(e))}catch(e){t(e)}}function o(e){try{r(u.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(i,o)}r((u=u.apply(n,c||[])).next())}));var n,c,d,u}},2715:(e,t,n)=>{var i=n(9392),o=n(9662),r=n(5713),s=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:i.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"aClass",void 0),s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"bClass",void 0),s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"icon",void 0),s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"href",void 0),s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"isBlockContent",void 0),s([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"raised",void 0),a=s([(0,r.M)("link-button")],a)},7725:(e,t,n)=>{var i=n(9392),o=n(9662),r=n(5713),s=(n(5185),n(5248),function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?i.dy`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:i.dy`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?i.dy`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:i.dy`
          <div class="form-input">
            <label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"name",void 0),s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"value",void 0),s([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"randomID",void 0),s([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"id",void 0),s([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"required",void 0),s([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"multiple",void 0),s([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"startNumber",void 0),s([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"rowsPerPage",void 0),s([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"totalShowing",void 0),s([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=s([(0,r.M)("file-input")],a)},9358:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditGroup:()=>B});var i=n(3750),o=n(3600),r=n(9392),s=n(9662),l=n(5713),a=n(2669),c=n(5458),d=(n(5248),n(6811),n(3690),n(1854),n(7725),n(2262)),u=n(4843),p=n(2218),h=n(4672),f=n(6455),m=n.n(f),g=n(771),b=n(1942),v=n(7839),y=n(7052),w=n(596),C=n(8967),_=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function l(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((i=i.apply(e,t||[])).next())}))};n(5866);var k,S,E=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function l(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((i=i.apply(e,t||[])).next())}))},$=n(2892),I=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function l(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((i=i.apply(e,t||[])).next())}))};let x=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__groupUser=null,this.__schedule=null,this.__scheduleGroups=null,this._groups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _groupUser(e){this.__groupUser=e,this.requestUpdate()}get _groupUser(){return this.__groupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return R(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,h.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleGroup(),yield this.getGroups()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?r.dy`${this.scheduleGroup}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleGroup(){return null===this._scheduleGroups?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleGroups?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Group</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._scheduleGroups.results.length>0?r.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Group
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
                ${this.getMeetingAttendanceGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceGroups(){return r.dy`
      ${this._scheduleGroups.results.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.C)(this.getGroup(e.groupId),r.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceGroup}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Group</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Group!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-group">
                <div class="p-0 m-0" show-groupField="all">
                  ${this.groupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Group" raised class="button" @click="${this.submitForm}">
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
    `}get groupField(){const e=this._groups.map((e=>r.dy`<mwc-list-item value="${e.id}">${e.group}</mwc-list-item>`));return r.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Group</h4>
            <mwc-select name="groupId" class="w-full" id="groupId" label="Select Group" outlined required>
              <mwc-list-item value="">Select Group</mwc-list-item>
              <mwc-list-item value="all">All Groups</mwc-list-item>
              ${r.dy`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}groupFieldDefault(e){return r.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.groupField}
        groupField-id="${e}" no_delete></multiple-widgets>
    `}addGroupField(){const e=this.showGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showGroupFieldAllSelector.children[e-1].getAttribute("groupField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("groupField-id",String(t)),this.showGroupFieldAllSelector.append(n);const i=this.showGroupFieldAllSelector.querySelectorAll('multiple-widgets[groupField-id="'+t+'"]'),o=this.groupField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new d.T(e)}))}submitForm(e){return R(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e="client_tokenLogin"){return E(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,o.W)(n,t,e);const i=(0,y.t)((0,b.Hl)(e)),r=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group",s=document.querySelector('[make-general-posts="add-schedule-group"]'),l=new FormData(s);return m().fire({title:"Add Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>E(this,void 0,void 0,(function*(){return yield(0,v.d)(r,{method:"POST",body:l,headers:{Authorization:"Token "+i}},!1).then((e=>{const t=new w.H("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,C.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceGroup(e){return R(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e,t="client_tokenLogin"){return _(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),i=String(window.supersecret.unknowable.ops.email);yield(0,o.W)(i,n,t);const r=(0,y.t)((0,b.Hl)(t)),s=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/"+e,l={};return m().fire({title:"Remove Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return yield(0,v.d)(s,{method:"DELETE",body:JSON.stringify(l),headers:{Authorization:"Token "+r}},!1).then((e=>{try{const t=new w.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,C.T)(e);m().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new w.H("delete",n,!0);return i.postForm,i}})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}m().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,h.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return R(this,void 0,void 0,(function*(){const e=yield(0,p.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleGroup(){return R(this,void 0,void 0,(function*(){const e=yield(0,u.S)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroups(){return R(this,void 0,void 0,(function*(){const e=yield(0,$.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._groups=[...this._groups,...t]}))}getGroup(e){return R(this,void 0,void 0,(function*(){const t=yield(0,$.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};x.styles=[r.iv`
   :host { display: block; }
  `],I([(0,s.C)({type:Number}),A("design:type",Number)],x.prototype,"CLIENT_ID",void 0),I([(0,s.C)({type:Number}),A("design:type",Number)],x.prototype,"startSearchPage",void 0),I([(0,s.C)({type:Array}),A("design:type",Array)],x.prototype,"_groups",void 0),I([(0,s.C)({type:Array}),A("design:type","function"==typeof(k="undefined"!=typeof Array&&Array)?k:Object)],x.prototype,"_data",void 0),I([(0,s.C)({type:Object}),A("design:type",Object)],x.prototype,"urlQueryParams",void 0),I([(0,s.C)({type:Number}),A("design:type",Number)],x.prototype,"meetingEventId",void 0),I([(0,a.I)('[show-groupField="all"]'),A("design:type","function"==typeof(S="undefined"!=typeof Element&&Element)?S:Object)],x.prototype,"showGroupFieldAllSelector",void 0),x=I([(0,l.M)("attendance-setup-form-group"),A("design:paramtypes",[])],x),n(8693);var N=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let B=class extends r.oi{constructor(){super(),(0,i.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function l(e){try{a(r.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,l)}a((r=r.apply(t,n||[])).next())}));var t,n,i,r}disconnectedCallback(){}render(){return r.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-group CLIENT_ID="${this.clientId}"></attendance-setup-form-group>
    `}firstUpgroupd(){}createRenderRoot(){return this}};N([(0,s.C)({type:String}),L("design:type",String)],B.prototype,"email",void 0),N([(0,s.C)({type:Number}),L("design:type",Number)],B.prototype,"mId",void 0),N([(0,s.C)({type:Number}),L("design:type",Number)],B.prototype,"clientId",void 0),B=N([(0,l.M)("attendance-setup-form-edit-group"),L("design:paramtypes",[])],B)},8693:(e,t,n)=>{var i=n(9392),o=n(9662),r=n(5713),s=(n(2715),n(771)),l=n(4672),a=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,l.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[i.iv`
   :host { display: block; }
  `],a([(0,o.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=a([(0,r.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)}},e=>(e.O(0,[744,185,674,564,820,828,907,111,214,985,948,800,712],(()=>(9358,e(e.s=9358)))),e.O())])}));
//# sourceMappingURL=edit-group.js.map