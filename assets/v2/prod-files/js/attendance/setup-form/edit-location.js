/*! For license information please see edit-location.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[607],{6173:()=>{(()=>{var e,t,n;const i=Symbol(),o=Symbol(),s=Symbol(),r=Symbol(),l=Symbol(),a=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),p=Symbol(),f=Symbol(),m=Symbol();class b{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[o]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[a](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[a](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,n=o,a)](e){const t=this[o],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const i=this[h](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const r=this[p](e);if(!n.length)return void this[d](i,r,t);let l=n.length-1,a=i.length-1;for(;l>0&&a>0&&n[l]===i[a];)l--,a--;n[l]!==i[a]&&this[c](n[l],i[a]),l>0&&this[u](n.slice(0,l)),a>0&&this[d](i.slice(0,a),r,null)}[c](e,t){const n=e[r];this[f](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[l]=e[l],t[r]=n,e[l]=void 0,e[r]=void 0}[u](e){for(const t of e){t[l].disconnect(),t[l]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[d](e,t,n){for(const i of e){const e=i.parentNode,o=e.children,s=new Set;for(let e=0;e<o.length;e++){const r=o[e];r===i||!this[f](r)||t&&t.has(r)||(n&&r.inert?n.add(r):(r.inert=!0,s.add(r)))}i[r]=s;const a=new MutationObserver(this[m].bind(this));i[l]=a;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),a.observe(c,{childList:!0})}}[m](e){const t=this[s],n=this[o];for(const i of e){const e=i.target.host||i.target,o=e===document.body?t.length:t.indexOf(e),s=t[o-1],l=s[r];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();l.has(t)&&(t.inert=!1,l.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[f](t)&&(n&&t.inert?n.add(t):(t.inert=!0,l.add(t)))}}}[f](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[p](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let i,o,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(i=0;i<r.length;i++)for(s=r[i].assignedNodes({flatten:!0}),o=0;o<s.length;o++)s[o].nodeType===Node.ELEMENT_NODE&&n.add(s[o]);return n}}document.$blockingElements=new b})()},606:(e,t,n)=>{"use strict";n.d(t,{I:()=>c});var i=n(771),o=n(1942),s=n(7839),r=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,r.t)((0,o.Hl)(n)),h=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,p=yield(0,s.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(h.next(e))}catch(e){t(e)}}function i(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((h=h.apply(c,d||[])).next())}));var c,d,u,h}},2218:(e,t,n)=>{"use strict";n.d(t,{u:()=>c});var i=n(771),o=n(1942),s=n(7839),r=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,r.t)((0,o.Hl)(n)),h=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,p=yield(0,s.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(h.next(e))}catch(e){t(e)}}function i(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((h=h.apply(c,d||[])).next())}));var c,d,u,h}},6262:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var i=n(771),o=n(1942),s=n(7839),r=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,r.t)((0,o.Hl)(n)),h=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,p=yield(0,s.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(h.next(e))}catch(e){t(e)}}function i(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((h=h.apply(c,d||[])).next())}));var c,d,u,h}},2715:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"aClass",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"bClass",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"icon",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"href",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"isBlockContent",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"raised",void 0),a=r([(0,s.M)("link-button")],a)},7725:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=(n(5185),n(5248),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"name",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"value",void 0),r([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"randomID",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"id",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"required",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"multiple",void 0),r([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"startNumber",void 0),r([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"rowsPerPage",void 0),r([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"totalShowing",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=r([(0,s.M)("file-input")],a)},8693:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=(n(2715),n(771)),l=n(4672),a=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${r.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,l.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[i.iv`
   :host { display: block; }
  `],a([(0,o.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=a([(0,s.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)},6230:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditLocation:()=>I});var i,o,s=n(3750),r=n(3600),l=n(9392),a=n(9662),c=n(5713),d=n(2669),u=(n(5248),n(6811),n(3690),n(1854),n(7725),n(2262)),h=n(606),p=n(2218),f=n(4672),m=n(6455),b=n.n(m),g=n(771),v=n(1942),y=n(7839),w=n(7052),_=n(596),S=n(8967),E=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))},C=n(6262),k=(n(5866),function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))}),L=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},$=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))};let N=class extends l.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__locationUser=null,this.__schedule=null,this.__scheduleLocations=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _locationUser(e){this.__locationUser=e,this.requestUpdate()}get _locationUser(){return this.__locationUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return $(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,f.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return l.dy`${this.schedule}`}get schedule(){return null===this._schedule?l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?l.dy`${this.scheduleLocation}`:l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleLocation(){return null===this._scheduleLocations?l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleLocations?l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Location</span>: undefined error</h4>
          </div>
        </div>
      `:l.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return l.dy`${this.table}`}get table(){return this._scheduleLocations.results.length>0?l.dy`
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
      `:l.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceLocations(){return l.dy`
      ${this._scheduleLocations.results.map(((e,t)=>l.dy`
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
    `}get form(){return l.dy`
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
    `}get locationField(){return(0,w.t)((0,v.Hl)("client_tokenLogin")),l.dy`
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
    `}locationFieldDefault(e){return l.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.locationField}
        locationField-id="${e}" no_delete></multiple-widgets>
    `}addLocationField(){const e=this.showLocationFieldAllSelector.children.length,t=(0===e?-1:Number(this.showLocationFieldAllSelector.children[e-1].getAttribute("locationField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("locationField-id",String(t)),this.showLocationFieldAllSelector.append(n);const i=this.showLocationFieldAllSelector.querySelectorAll('multiple-widgets[locationField-id="'+t+'"]'),o=this.locationField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new u.T(e)}))}getLocationUsers(){return $(this,void 0,void 0,(function*(){const e=yield(0,C.a)();this._locationUser=null===e?void 0:e.paginResponse}))}getLocationUser(e){return $(this,void 0,void 0,(function*(){const t=yield(0,C.a)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return console.log({"user.firstname user.surname":e.firstname+" "+e.surname}),e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return $(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e="client_tokenLogin"){return k(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(n,t,e);const i=(0,w.t)((0,v.Hl)(e)),o=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location",s=document.querySelector('[make-general-posts="add-schedule-location"]'),l=new FormData(s);return b().fire({title:"Add Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>k(this,void 0,void 0,(function*(){return yield(0,y.d)(o,{method:"POST",body:l,headers:{Authorization:"Token "+i}},!1).then((e=>{const t=new _.H("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,S.T)(e);b().showValidationMessage(`${t}`)}return t})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&b().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceLocation(e){return $(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e,t="client_tokenLogin"){return E(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),i=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(i,n,t);const o=(0,w.t)((0,v.Hl)(t)),s=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,l={};return b().fire({title:"Remove Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>E(this,void 0,void 0,(function*(){return yield(0,y.d)(s,{method:"DELETE",body:JSON.stringify(l),headers:{Authorization:"Token "+o}},!1).then((e=>{try{const t=new _.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,S.T)(e);b().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new _.H("delete",n,!0);return i.postForm,i}})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}b().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,o=document.querySelector('[id="location"]');console.log({data:e,params:t,RESULTS:i,SELECTOR:o});let s=[];if(n>0){var r=i;console.log({"smbfl-_data":r});for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return console.log({processedData:s}),{results:s,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,f.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return $(this,void 0,void 0,(function*(){const e=yield(0,p.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleLocation(){return $(this,void 0,void 0,(function*(){const e=yield(0,h.I)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};N.styles=[l.iv`
   :host { display: block; }
  `],L([(0,a.C)({type:Number}),R("design:type",Number)],N.prototype,"CLIENT_ID",void 0),L([(0,a.C)({type:Number}),R("design:type",Number)],N.prototype,"startSearchPage",void 0),L([(0,a.C)({type:Array}),R("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],N.prototype,"_data",void 0),L([(0,a.C)({type:Object}),R("design:type",Object)],N.prototype,"urlQueryParams",void 0),L([(0,a.C)({type:Number}),R("design:type",Number)],N.prototype,"meetingEventId",void 0),L([(0,d.I)('[show-locationField="all"]'),R("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],N.prototype,"showLocationFieldAllSelector",void 0),N=L([(0,c.M)("attendance-setup-form-location"),R("design:paramtypes",[])],N),n(8693);var A=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let I=class extends l.oi{constructor(){super(),(0,s.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,l)}a((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){return l.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-location CLIENT_ID="${this.clientId}"></attendance-setup-form-location>
    `}firstUplocationd(){}createRenderRoot(){return this}};A([(0,a.C)({type:String}),x("design:type",String)],I.prototype,"email",void 0),A([(0,a.C)({type:Number}),x("design:type",Number)],I.prototype,"mId",void 0),A([(0,a.C)({type:Number}),x("design:type",Number)],I.prototype,"clientId",void 0),I=A([(0,c.M)("attendance-setup-form-edit-location"),x("design:paramtypes",[])],I)},43:(e,t,n)=>{"use strict";n.d(t,{v:()=>o});var i=n(5674);function o(e="",t=!1,n=""){return(0,i.eZ)({descriptor:i=>({get(){var i,o,s;const r="slot"+(e?`[name=${e}]`:":not([name])");let l=null!==(s=null===(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(r))||void 0===o?void 0:o.assignedNodes({flatten:t}))&&void 0!==s?s:[];return n&&(l=l.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(n)))),l},enumerable:!0,configurable:!0})})}},4232:(e,t,n)=>{"use strict";n.d(t,{pt:()=>s,OR:()=>r,hl:()=>a});var i=n(3692);const{H:o}=i.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings,l={},a=(e,t=l)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{Xe:()=>i.Xe,pX:()=>i.pX,XM:()=>i.XM});var i=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var i=n(3692),o=n(875),s=n(4232);const r=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,r=e.name;if(e.type===o.pX.PROPERTY){if(t===n[r])return i.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return i.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(r)===t+"")return i.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[744,185,674,564,820,828,907,214,985,948,800,712],(()=>(6230,e(e.s=6230)))),e.O())])}));
//# sourceMappingURL=edit-location.js.map