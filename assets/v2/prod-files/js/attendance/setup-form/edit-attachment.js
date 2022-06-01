/*! For license information please see edit-attachment.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[183],{6173:()=>{(()=>{var e,t,n;const i=Symbol(),o=Symbol(),s=Symbol(),r=Symbol(),a=Symbol(),l=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),m=Symbol(),p=Symbol(),f=Symbol();class b{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[o]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[l](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[l](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,n=o,l)](e){const t=this[o],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const i=this[h](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const r=this[m](e);if(!n.length)return void this[d](i,r,t);let a=n.length-1,l=i.length-1;for(;a>0&&l>0&&n[a]===i[l];)a--,l--;n[a]!==i[l]&&this[c](n[a],i[l]),a>0&&this[u](n.slice(0,a)),l>0&&this[d](i.slice(0,l),r,null)}[c](e,t){const n=e[r];this[p](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[a]=e[a],t[r]=n,e[a]=void 0,e[r]=void 0}[u](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[d](e,t,n){for(const i of e){const e=i.parentNode,o=e.children,s=new Set;for(let e=0;e<o.length;e++){const r=o[e];r===i||!this[p](r)||t&&t.has(r)||(n&&r.inert?n.add(r):(r.inert=!0,s.add(r)))}i[r]=s;const l=new MutationObserver(this[f].bind(this));i[a]=l;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),l.observe(c,{childList:!0})}}[f](e){const t=this[s],n=this[o];for(const i of e){const e=i.target.host||i.target,o=e===document.body?t.length:t.indexOf(e),s=t[o-1],a=s[r];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(t)&&(t.inert=!1,a.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[p](t)&&(n&&t.inert?n.add(t):(t.inert=!0,a.add(t)))}}}[p](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[m](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let i,o,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(i=0;i<r.length;i++)for(s=r[i].assignedNodes({flatten:!0}),o=0;o<s.length;o++)s[o].nodeType===Node.ELEMENT_NODE&&n.add(s[o]);return n}}document.$blockingElements=new b})()},2404:(e,t,n)=>{"use strict";n.d(t,{f:()=>c});var i=n(771),o=n(1942),s=n(7839),r=n(7052),a=n(596),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.W)(d,c,n);const u=(0,r.t)((0,o.Hl)(n)),h=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,m=yield(0,s.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new a.H("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new a.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(h.next(e))}catch(e){t(e)}}function i(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((h=h.apply(c,d||[])).next())}));var c,d,u,h}},2218:(e,t,n)=>{"use strict";n.d(t,{u:()=>c});var i=n(771),o=n(1942),s=n(7839),r=n(7052),a=n(596),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.W)(d,c,n);const u=(0,r.t)((0,o.Hl)(n)),h=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,m=yield(0,s.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new a.H("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new a.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(h.next(e))}catch(e){t(e)}}function i(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((h=h.apply(c,d||[])).next())}));var c,d,u,h}},6262:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var i=n(771),o=n(1942),s=n(7839),r=n(7052),a=n(596),l=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,l.W)(d,c,n);const u=(0,r.t)((0,o.Hl)(n)),h=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,m=yield(0,s.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new a.H("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new a.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(h.next(e))}catch(e){t(e)}}function i(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((h=h.apply(c,d||[])).next())}));var c,d,u,h}},2715:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"aClass",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"bClass",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"icon",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"href",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"isBlockContent",void 0),r([(0,o.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"raised",void 0),l=r([(0,s.M)("link-button")],l)},7725:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=(n(5185),n(5248),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"name",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"value",void 0),r([(0,o.C)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"id",void 0),r([(0,o.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),r([(0,o.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),r([(0,o.C)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),r([(0,o.C)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),r([(0,o.C)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),r([(0,o.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=r([(0,s.M)("file-input")],l)},2883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditAttachment:()=>L});var i,o,s=n(3750),r=n(3600),a=n(9392),l=n(9662),c=n(5713),d=n(2669),u=(n(5248),n(6811),n(3690),n(1854),n(7725),n(2262)),h=n(2404),m=n(2218),p=n(4672),f=n(6455),b=n.n(f),g=n(771),v=n(1942),y=n(7839),w=n(7052),_=n(596),S=n(8967),E=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))},C=n(6262),k=(n(5866),function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))}),A=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let N=class extends a.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__attachmentUser=null,this.__schedule=null,this.__scheduleAttachments=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _attachmentUser(e){this.__attachmentUser=e,this.requestUpdate()}get _attachmentUser(){return this.__attachmentUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return R(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,p.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return a.dy`${this.schedule}`}get schedule(){return null===this._schedule?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?a.dy`${this.scheduleAttachment}`:a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAttachment(){return null===this._scheduleAttachments?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAttachments?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Attachment</span>: undefined error</h4>
          </div>
        </div>
      `:a.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return a.dy`${this.table}`}get table(){return this._scheduleAttachments.results.length>0?a.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Attachment">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Attachment
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
                ${this.getMeetingAttendanceAttachments}
              </tbody>
            </table>
          </div>
        </div>
      `:a.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAttachments(){return a.dy`
      ${this._scheduleAttachments.results.map(((e,t)=>a.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${g.t.URLS.FILE_BUCKET_BASE_URL}files${e.attachment}" target="_blank">Open File ${t+1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAttachment}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return a.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Attachment</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Attachment!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-attachment">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Attachment" raised class="button" @click="${this.submitForm}">
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
    `}get attachmentField(){return(0,w.t)((0,v.Hl)("client_tokenLogin")),a.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="attachment" name="attachment" label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}attachmentFieldDefault(e){return a.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.attachmentField}
        attachmentField-id="${e}" no_delete></multiple-widgets>
    `}addAttachmentField(){const e=this.showAttachmentFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAttachmentFieldAllSelector.children[e-1].getAttribute("attachmentField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("attachmentField-id",String(t)),this.showAttachmentFieldAllSelector.append(n);const i=this.showAttachmentFieldAllSelector.querySelectorAll('multiple-widgets[attachmentField-id="'+t+'"]'),o=this.attachmentField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new u.T(e)}))}getAttachmentUsers(){return R(this,void 0,void 0,(function*(){const e=yield(0,C.a)();this._attachmentUser=null===e?void 0:e.paginResponse}))}getAttachmentUser(e){return R(this,void 0,void 0,(function*(){const t=yield(0,C.a)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return console.log({"user.firstname user.surname":e.firstname+" "+e.surname}),e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return R(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e="client_tokenLogin"){return k(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(n,t,e);const i=(0,w.t)((0,v.Hl)(e)),o=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment",s=document.querySelector('[make-general-posts="add-schedule-attachment"]'),a=new FormData(s);return b().fire({title:"Add Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>k(this,void 0,void 0,(function*(){return yield(0,y.d)(o,{method:"POST",body:a,headers:{Authorization:"Token "+i}},!1).then((e=>{const t=new _.H("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,S.T)(e);b().showValidationMessage(`${t}`)}return t})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&b().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceAttachment(e){return R(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e,t="client_tokenLogin"){return E(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),i=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(i,n,t);const o=(0,w.t)((0,v.Hl)(t)),s=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment/"+e,a={};return b().fire({title:"Remove Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>E(this,void 0,void 0,(function*(){return yield(0,y.d)(s,{method:"DELETE",body:JSON.stringify(a),headers:{Authorization:"Token "+o}},!1).then((e=>{try{const t=new _.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,S.T)(e);b().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new _.H("delete",n,!0);return i.postForm,i}})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}b().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,o=document.querySelector('[id="attachment"]');console.log({data:e,params:t,RESULTS:i,SELECTOR:o});let s=[];if(n>0){var r=i;console.log({"smbfl-_data":r});for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return console.log({processedData:s}),{results:s,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,p.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return R(this,void 0,void 0,(function*(){const e=yield(0,m.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAttachment(){return R(this,void 0,void 0,(function*(){const e=yield(0,h.f)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};N.styles=[a.iv`
   :host { display: block; }
  `],A([(0,l.C)({type:Number}),$("design:type",Number)],N.prototype,"CLIENT_ID",void 0),A([(0,l.C)({type:Number}),$("design:type",Number)],N.prototype,"startSearchPage",void 0),A([(0,l.C)({type:Array}),$("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],N.prototype,"_data",void 0),A([(0,l.C)({type:Object}),$("design:type",Object)],N.prototype,"urlQueryParams",void 0),A([(0,l.C)({type:Number}),$("design:type",Number)],N.prototype,"meetingEventId",void 0),A([(0,d.I)('[show-attachmentField="all"]'),$("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],N.prototype,"showAttachmentFieldAllSelector",void 0),N=A([(0,c.M)("attendance-setup-form-attachment"),$("design:paramtypes",[])],N),n(8693);var I=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let L=class extends a.oi{constructor(){super(),(0,s.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}l((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){return a.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-attachment CLIENT_ID="${this.clientId}"></attendance-setup-form-attachment>
    `}firstUpdated(){}createRenderRoot(){return this}};I([(0,l.C)({type:String}),x("design:type",String)],L.prototype,"email",void 0),I([(0,l.C)({type:Number}),x("design:type",Number)],L.prototype,"mId",void 0),I([(0,l.C)({type:Number}),x("design:type",Number)],L.prototype,"clientId",void 0),L=I([(0,c.M)("attendance-setup-form-edit-attachment"),x("design:paramtypes",[])],L)},8693:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=(n(2715),n(771)),a=n(4672),l=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,a.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[i.iv`
   :host { display: block; }
  `],l([(0,o.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=l([(0,s.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)},43:(e,t,n)=>{"use strict";n.d(t,{v:()=>o});var i=n(5674);function o(e="",t=!1,n=""){return(0,i.eZ)({descriptor:i=>({get(){var i,o,s;const r="slot"+(e?`[name=${e}]`:":not([name])");let a=null!==(s=null===(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(r))||void 0===o?void 0:o.assignedNodes({flatten:t}))&&void 0!==s?s:[];return n&&(a=a.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(n)))),a},enumerable:!0,configurable:!0})})}},4232:(e,t,n)=>{"use strict";n.d(t,{pt:()=>s,OR:()=>r,hl:()=>l});var i=n(3692);const{H:o}=i.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings,a={},l=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{Xe:()=>i.Xe,pX:()=>i.pX,XM:()=>i.XM});var i=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var i=n(3692),o=n(875),s=n(4232);const r=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,r=e.name;if(e.type===o.pX.PROPERTY){if(t===n[r])return i.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return i.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(r)===t+"")return i.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[744,185,674,564,820,828,907,214,985,948,800,712],(()=>(2883,e(e.s=2883)))),e.O())])}));
//# sourceMappingURL=edit-attachment.js.map