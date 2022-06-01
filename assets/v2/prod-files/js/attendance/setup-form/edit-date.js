/*! For license information please see edit-date.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[579],{6173:()=>{(()=>{var e,t,n;const i=Symbol(),o=Symbol(),s=Symbol(),r=Symbol(),l=Symbol(),c=Symbol(),a=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),f=Symbol(),p=Symbol(),m=Symbol();class g{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[o]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[c](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[c](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,n=o,c)](e){const t=this[o],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const i=this[h](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const r=this[f](e);if(!n.length)return void this[d](i,r,t);let l=n.length-1,c=i.length-1;for(;l>0&&c>0&&n[l]===i[c];)l--,c--;n[l]!==i[c]&&this[a](n[l],i[c]),l>0&&this[u](n.slice(0,l)),c>0&&this[d](i.slice(0,c),r,null)}[a](e,t){const n=e[r];this[p](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[l]=e[l],t[r]=n,e[l]=void 0,e[r]=void 0}[u](e){for(const t of e){t[l].disconnect(),t[l]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[d](e,t,n){for(const i of e){const e=i.parentNode,o=e.children,s=new Set;for(let e=0;e<o.length;e++){const r=o[e];r===i||!this[p](r)||t&&t.has(r)||(n&&r.inert?n.add(r):(r.inert=!0,s.add(r)))}i[r]=s;const c=new MutationObserver(this[m].bind(this));i[l]=c;let a=e;const d=a;d.__shady&&d.host&&(a=d.host),c.observe(a,{childList:!0})}}[m](e){const t=this[s],n=this[o];for(const i of e){const e=i.target.host||i.target,o=e===document.body?t.length:t.indexOf(e),s=t[o-1],l=s[r];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();l.has(t)&&(t.inert=!1,l.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[p](t)&&(n&&t.inert?n.add(t):(t.inert=!0,l.add(t)))}}}[p](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[f](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let i,o,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(i=0;i<r.length;i++)for(s=r[i].assignedNodes({flatten:!0}),o=0;o<s.length;o++)s[o].nodeType===Node.ELEMENT_NODE&&n.add(s[o]);return n}}document.$blockingElements=new g})()},4672:(e,t,n)=>{"use strict";n.d(t,{O1:()=>i,Jx:()=>o});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i}},8698:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});var i=n(771),o=n(1942),s=n(7839),r=n(7052),l=n(596),c=n(3600);function a(e=null,t="",n="client_tokenLogin"){return a=this,d=void 0,h=function*(){const a=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,c.W)(d,a,n);const u=(0,r.t)((0,o.Hl)(n)),h=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,f=yield(0,s.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",f)}catch(e){console.error({error:e});let t=f;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(h.next(e))}catch(e){t(e)}}function i(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((h=h.apply(a,d||[])).next())}));var a,d,u,h}},2218:(e,t,n)=>{"use strict";n.d(t,{u:()=>a});var i=n(771),o=n(1942),s=n(7839),r=n(7052),l=n(596),c=n(3600);function a(e=null,t="",n="client_tokenLogin"){return a=this,d=void 0,h=function*(){const a=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,c.W)(d,a,n);const u=(0,r.t)((0,o.Hl)(n)),h=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,f=yield(0,s.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",f)}catch(e){console.error({error:e});let t=f;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(h.next(e))}catch(e){t(e)}}function i(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,i)}o((h=h.apply(a,d||[])).next())}));var a,d,u,h}},1854:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=(n(5248),n(934),n(9261),n(3504),n(4277),n(3313),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};let a=class extends i.oi{constructor(){super(),this.index=0,this._widget=i.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return c(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.dy`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?i.Ld:i.dy`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return c(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};r([(0,o.C)({type:Number}),l("design:type",Number)],a.prototype,"index",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"no_delete",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"single",void 0),r([(0,o.C)({type:String}),l("design:type",String)],a.prototype,"_single",void 0),a=r([(0,s.M)("multiple-widgets"),l("design:paramtypes",[])],a)},2715:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"aClass",void 0),r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"bClass",void 0),r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"icon",void 0),r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"href",void 0),r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"isBlockContent",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"raised",void 0),c=r([(0,s.M)("link-button")],c)},3690:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=(n(5185),n(5142),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.dy`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.dy`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected}createRenderRoot(){return this}};c.styles=[i.iv`
      :host {
        display: block;
      }
    `],r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"selected",void 0),r([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"value",void 0),r([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"isSelected",void 0),c=r([(0,s.M)("switch-input")],c)},2458:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditDate:()=>B});var i,o,s=n(3750),r=n(3600),l=n(9392),c=n(9662),a=n(5713),d=n(2669),u=(n(5248),n(9261),n(2935),n(3313),n(6811),n(3690),n(1854),n(2262)),h=n(8698),f=n(2218),p=n(4672),m=n(6455),g=n.n(m),b=n(771),v=n(1942),y=n(7839),w=n(7052),E=n(596),C=n(8967),k=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))},_=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))},S=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))},R=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};let D=class extends l.oi{constructor(){super(),this.CLIENT_ID=0,this.__schedule=null,this.__scheduleDates=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,p.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleDate()}))}disconnectedCallback(){}render(){return l.dy`${this.schedule}`}get schedule(){return null===this._schedule?l.dy`
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
      `:!0===this._schedule.success?l.dy`${this.scheduleDate}`:l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleDate(){return null===this._scheduleDates?l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleDates?l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
          </div>
        </div>
      `:l.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return l.dy`${this.table}`}get table(){return this._scheduleDates.results.length>0?l.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Date">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Date
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
                ${this.getMeetingAttendanceDates}
              </tbody>
            </table>
          </div>
        </div>
      `:l.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceDates(){return l.dy`
      ${this._scheduleDates.results.map((e=>l.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceDate}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return l.dy`
      <div class="form-container">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Date</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Date!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-date">
                <div class="container">
                  <div class="row justify-content-center" show-dateField="all">
                    ${this.dateFieldDefault(1)}
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addDateField}">
                      </mwc-icon-button>
                      <mwc-button label="Set Date" raised class="button" @click="${this.submitForm}">
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
    `}get dateField(){return l.dy`
      <h4 class="font-semibold my-2">Select Date</h4> 
      <mwc-textfield name="date[]" multiple type="date" class="w-full" id="date"
        label="Select Date" outlined required>
      </mwc-textfield>
    `}dateFieldDefault(e){return l.dy`
      <multiple-widgets class="col-md-6 col-lg-4 mb-3" .widget=${this.dateField}
        dateField-id="${e}"></multiple-widgets>
    `}addDateField(){const e=this.showDateFieldAllSelector.children.length,t=(0===e?-1:Number(this.showDateFieldAllSelector.children[e-1].index))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-6 col-lg-4 mb-3"),n.setAttribute("dateField-id",String(t)),this.showDateFieldAllSelector.append(n);const i=this.showDateFieldAllSelector.querySelectorAll('multiple-widgets[dateField-id="'+t+'"]');console.log({elements:i});const o=this.dateField.strings.join("");console.log({newElem:o}),setTimeout((()=>{i.forEach((e=>{console.log({element:e}),e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{const t=new u.T(e);console.log({dataTable:t})}))}submitForm(e){return A(this,void 0,void 0,(function*(){e.preventDefault(),this._scheduleDates.count>0?yield function(e,t="client_tokenLogin"){return _(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),i=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(i,n,t);const o=(0,w.t)((0,v.Hl)(t)),s=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/multiple/"+e,l=document.querySelector('[make-general-posts="add-schedule-date"]'),c=new FormData(l);return g().fire({title:"Update Setup Date(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return yield(0,y.d)(s,{method:"PUT",body:c,headers:{Authorization:"Token "+o}},!1).then((e=>{const t=new E.H("post",e,!1,l),n=t.multipleResponse;console.log({_RESPONSES:n});let i=[];if(null!==n&&n.forEach((e=>{"nameError"in e&&"unknownError"in e&&e.unknownError.length>0&&e.unknownError.forEach((e=>{e.errors.forEach((e=>{i.push({error:e})}))}))})),i.length>0){const e=(0,C.T)(i);return g().showValidationMessage(`${e}`)}return t})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&g().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.meetingEventId):yield function(e="client_tokenLogin"){return k(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(n,t,e);const i=(0,w.t)((0,v.Hl)(e)),o=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/multiple",s=document.querySelector('[make-general-posts="add-schedule-date"]'),l=new FormData(s);return g().fire({title:"Setup Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>k(this,void 0,void 0,(function*(){return yield(0,y.d)(o,{method:"POST",body:l,headers:{Authorization:"Token "+i}},!1).then((e=>{const t=new E.H("post",e,!1,s),n=t.multipleResponse;console.log({_RESPONSES:n});let i=[];if(null!==n&&n.forEach((e=>{"nameError"in e&&"unknownError"in e&&e.unknownError.length>0&&e.unknownError.forEach((e=>{e.errors.forEach((e=>{i.push({error:e})}))}))})),i.length>0){const e=(0,C.T)(i);return g().showValidationMessage(`${e}`)}return t})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&g().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceDate(e){return A(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e,t="client_tokenLogin"){return S(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),i=String(window.supersecret.unknowable.ops.email);yield(0,r.W)(i,n,t);const o=(0,w.t)((0,v.Hl)(t)),s=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/"+e,l={};return g().fire({title:"Remove Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,y.d)(s,{method:"DELETE",body:JSON.stringify(l),headers:{Authorization:"Token "+o}},!1).then((e=>{try{const t=new E.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,C.T)(e);g().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new E.H("delete",n,!0);return i.postForm,i}})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}g().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,p.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return A(this,void 0,void 0,(function*(){const e=yield(0,f.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleDate(){return A(this,void 0,void 0,(function*(){const e=yield(0,h.R)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleDates=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};D.styles=[l.iv`
   :host { display: block; }
  `],R([(0,c.C)({type:Number}),$("design:type",Number)],D.prototype,"CLIENT_ID",void 0),R([(0,c.C)({type:Array}),$("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],D.prototype,"_data",void 0),R([(0,c.C)({type:Object}),$("design:type",Object)],D.prototype,"urlQueryParams",void 0),R([(0,c.C)({type:Number}),$("design:type",Number)],D.prototype,"meetingEventId",void 0),R([(0,d.I)('[show-dateField="all"]'),$("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],D.prototype,"showDateFieldAllSelector",void 0),D=R([(0,a.M)("attendance-setup-form-date"),$("design:paramtypes",[])],D),n(8693);var x=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},N=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let B=class extends l.oi{constructor(){super(),(0,s.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,l)}c((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){return l.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-date CLIENT_ID="${this.clientId}"></attendance-setup-form-date>
    `}firstUpdated(){}createRenderRoot(){return this}};x([(0,c.C)({type:String}),N("design:type",String)],B.prototype,"email",void 0),x([(0,c.C)({type:Number}),N("design:type",Number)],B.prototype,"mId",void 0),x([(0,c.C)({type:Number}),N("design:type",Number)],B.prototype,"clientId",void 0),B=x([(0,a.M)("attendance-setup-form-edit-date"),N("design:paramtypes",[])],B)},8693:(e,t,n)=>{"use strict";var i=n(9392),o=n(9662),s=n(5713),r=(n(2715),n(771)),l=n(4672),c=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
  `],c([(0,o.C)({type:Number}),a("design:type",Number)],d.prototype,"meetingEventId",void 0),d=c([(0,s.M)("attendance-setup-form-edit-links"),a("design:paramtypes",[])],d)},43:(e,t,n)=>{"use strict";n.d(t,{v:()=>o});var i=n(5674);function o(e="",t=!1,n=""){return(0,i.eZ)({descriptor:i=>({get(){var i,o,s;const r="slot"+(e?`[name=${e}]`:":not([name])");let l=null!==(s=null===(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(r))||void 0===o?void 0:o.assignedNodes({flatten:t}))&&void 0!==s?s:[];return n&&(l=l.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(n)))),l},enumerable:!0,configurable:!0})})}},4232:(e,t,n)=>{"use strict";n.d(t,{pt:()=>s,OR:()=>r,hl:()=>c});var i=n(3692);const{H:o}=i.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings,l={},c=(e,t=l)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{Xe:()=>i.Xe,pX:()=>i.pX,XM:()=>i.XM});var i=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var i=n(3692),o=n(875),s=n(4232);const r=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,r=e.name;if(e.type===o.pX.PROPERTY){if(t===n[r])return i.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return i.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(r)===t+"")return i.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[744,185,674,564,907,214,985,948,712],(()=>(2458,e(e.s=2458)))),e.O())])}));
//# sourceMappingURL=edit-date.js.map