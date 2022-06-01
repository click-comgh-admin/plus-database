/*! For license information please see edit-break.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[436],{6173:()=>{(()=>{var e,t,n;const r=Symbol(),i=Symbol(),o=Symbol(),s=Symbol(),l=Symbol(),a=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),f=Symbol(),m=Symbol(),p=Symbol();class b{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[o]);const e=this;e[r]=null,e[o]=null,e[i]=null}get top(){const e=this[r];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[a](e),this[r].push(e))}remove(e){const t=this[r].indexOf(e);return-1!==t&&(this[r].splice(t,1),t===this[r].length&&this[a](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[r].indexOf(e)}[(e=r,t=o,n=i,a)](e){const t=this[i],n=this[o];if(!e)return this[u](n),t.clear(),void(this[o]=[]);const r=this[h](e);if(r[r.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[o]=r;const s=this[f](e);if(!n.length)return void this[d](r,s,t);let l=n.length-1,a=r.length-1;for(;l>0&&a>0&&n[l]===r[a];)l--,a--;n[l]!==r[a]&&this[c](n[l],r[a]),l>0&&this[u](n.slice(0,l)),a>0&&this[d](r.slice(0,a),s,null)}[c](e,t){const n=e[s];this[m](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[l]=e[l],t[s]=n,e[l]=void 0,e[s]=void 0}[u](e){for(const t of e){t[l].disconnect(),t[l]=void 0;const e=t[s];for(const t of e)t.inert=!1;t[s]=void 0}}[d](e,t,n){for(const r of e){const e=r.parentNode,i=e.children,o=new Set;for(let e=0;e<i.length;e++){const s=i[e];s===r||!this[m](s)||t&&t.has(s)||(n&&s.inert?n.add(s):(s.inert=!0,o.add(s)))}r[s]=o;const a=new MutationObserver(this[p].bind(this));r[l]=a;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),a.observe(c,{childList:!0})}}[p](e){const t=this[o],n=this[i];for(const r of e){const e=r.target.host||r.target,i=e===document.body?t.length:t.indexOf(e),o=t[i-1],l=o[s];for(let e=0;e<r.removedNodes.length;e++){const t=r.removedNodes[e];if(t===o)return console.info("Detected removal of the top Blocking Element."),void this.pop();l.has(t)&&(t.inert=!1,l.delete(t))}for(let e=0;e<r.addedNodes.length;e++){const t=r.addedNodes[e];this[m](t)&&(n&&t.inert?n.add(t):(t.inert=!0,l.add(t)))}}}[m](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[f](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let r,i,o;const s=t.querySelectorAll("slot");if(s.length&&s[0].assignedNodes)for(r=0;r<s.length;r++)for(o=s[r].assignedNodes({flatten:!0}),i=0;i<o.length;i++)o[i].nodeType===Node.ELEMENT_NODE&&n.add(o[i]);return n}}document.$blockingElements=new b})()},2831:(e,t,n)=>{"use strict";n.d(t,{h:()=>r});const r=e=>{const t=new Date,n=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(n)}},706:(e,t,n)=>{"use strict";n.d(t,{h:()=>c});var r=n(771),i=n(1942),o=n(7839),s=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,s.t)((0,i.Hl)(n)),h=r.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,f=yield(0,o.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",f)}catch(e){console.error({error:e});let t=f;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{i(h.next(e))}catch(e){t(e)}}function r(e){try{i(h.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,r)}i((h=h.apply(c,d||[])).next())}));var c,d,u,h}},2218:(e,t,n)=>{"use strict";n.d(t,{u:()=>c});var r=n(771),i=n(1942),o=n(7839),s=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,s.t)((0,i.Hl)(n)),h=r.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,f=yield(0,o.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",f)}catch(e){console.error({error:e});let t=f;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{i(h.next(e))}catch(e){t(e)}}function r(e){try{i(h.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,r)}i((h=h.apply(c,d||[])).next())}));var c,d,u,h}},6262:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var r=n(771),i=n(1942),o=n(7839),s=n(7052),l=n(596),a=n(3600);function c(e=null,t="",n="client_tokenLogin"){return c=this,d=void 0,h=function*(){const c=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(d,c,n);const u=(0,s.t)((0,i.Hl)(n)),h=r.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,f=yield(0,o.d)(h,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new l.H("get",f)}catch(e){console.error({error:e});let t=f;return t.error=e,new l.H("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{i(h.next(e))}catch(e){t(e)}}function r(e){try{i(h.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,r)}i((h=h.apply(c,d||[])).next())}));var c,d,u,h}},2715:(e,t,n)=>{"use strict";var r=n(9392),i=n(9662),o=n(5713),s=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends r.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?r.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:r.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};s([(0,i.C)({type:String}),l("design:type",String)],a.prototype,"aClass",void 0),s([(0,i.C)({type:String}),l("design:type",String)],a.prototype,"bClass",void 0),s([(0,i.C)({type:String}),l("design:type",String)],a.prototype,"icon",void 0),s([(0,i.C)({type:String}),l("design:type",String)],a.prototype,"href",void 0),s([(0,i.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),s([(0,i.C)({type:String}),l("design:type",String)],a.prototype,"isBlockContent",void 0),s([(0,i.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"raised",void 0),a=s([(0,o.M)("link-button")],a)},8796:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditBreak:()=>L});var r,i,o=n(3750),s=n(3600),l=n(9392),a=n(9662),c=n(5713),d=n(2669),u=(n(5248),n(6811),n(3690),n(1854),n(2262)),h=n(2831),f=n(706),m=n(2218),p=n(4672),b=n(6455),g=n.n(b),v=n(771),y=n(1942),k=n(7839),w=n(7052),_=n(596),E=n(8967),S=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function l(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((r=r.apply(e,t||[])).next())}))},C=n(6262),B=(n(5866),function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function l(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((r=r.apply(e,t||[])).next())}))}),A=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},N=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function l(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((r=r.apply(e,t||[])).next())}))};let T=class extends l.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__breakUser=null,this.__schedule=null,this.__scheduleBreaks=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _breakUser(e){this.__breakUser=e,this.requestUpdate()}get _breakUser(){return this.__breakUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return N(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,p.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return l.dy`${this.schedule}`}get schedule(){return null===this._schedule?l.dy`
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
      `:!0===this._schedule.success?l.dy`${this.scheduleBreak}`:l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleBreak(){return null===this._scheduleBreaks?l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleBreaks?l.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Break</span>: undefined error</h4>
          </div>
        </div>
      `:l.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return l.dy`${this.table}`}get table(){return this._scheduleBreaks.results.length>0?l.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Break">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Time
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Time
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
                ${this.getMeetingAttendanceBreaks}
              </tbody>
            </table>
          </div>
        </div>
      `:l.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceBreaks(){return l.dy`
      ${this._scheduleBreaks.results.map((e=>l.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${(0,h.h)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,h.h)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceBreak}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Break</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Break!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-break">
                <div class="p-0 m-0" show-breakField="all">
                  ${this.breakFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Break" raised class="button" @click="${this.submitForm}">
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
    `}get breakField(){return(0,w.t)((0,y.Hl)("client_tokenLogin")),l.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Start Time</h4> 
            <mwc-textfield name="startBreak" type="time" class="w-full" id="startBreak" label="Select Start Time" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Time</h4> 
            <mwc-textfield name="endBreak" type="time" class="w-full" id="endBreak" label="Select End Time" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}breakFieldDefault(e){return l.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.breakField}
        breakField-id="${e}" no_delete></multiple-widgets>
    `}addBreakField(){const e=this.showBreakFieldAllSelector.children.length,t=(0===e?-1:Number(this.showBreakFieldAllSelector.children[e-1].getAttribute("breakField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("breakField-id",String(t)),this.showBreakFieldAllSelector.append(n);const r=this.showBreakFieldAllSelector.querySelectorAll('multiple-widgets[breakField-id="'+t+'"]'),i=this.breakField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new u.T(e)}))}getBreakUsers(){return N(this,void 0,void 0,(function*(){const e=yield(0,C.a)();this._breakUser=null===e?void 0:e.paginResponse}))}submitForm(e){return N(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e="client_tokenLogin"){return B(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,s.W)(n,t,e);const r=(0,w.t)((0,y.Hl)(e)),i=v.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break",o=document.querySelector('[make-general-posts="add-schedule-break"]'),l=new FormData(o);return g().fire({title:"Setup Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>B(this,void 0,void 0,(function*(){return yield(0,k.d)(i,{method:"POST",body:l,headers:{Authorization:"Token "+r}},!1).then((e=>{console.log({HTTP:e});try{const t=new _.H("post",e,!1,o),n=t.response;if(console.log({_RESPONSE:n}),"nameError"in n&&"unknownError"in n&&n.unknownError.length>0){console.log({"_RESPONSE.unknownError":n.unknownError});let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,E.T)(e);g().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new _.H("post",n,!0,o);return r.postForm,r}})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&g().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceBreak(e){return N(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e,t="client_tokenLogin"){return S(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,s.W)(r,n,t);const i=(0,w.t)((0,y.Hl)(t)),o=v.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break/"+e,l={};return g().fire({title:"Remove Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,k.d)(o,{method:"DELETE",body:JSON.stringify(l),headers:{Authorization:"Token "+i}},!1).then((e=>{try{const t=new _.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,E.T)(e);g().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new _.H("delete",n,!0);return r.postForm,r}})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}g().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,r=e.results,i=document.querySelector('[id="breakId"]');console.log({data:e,params:t,RESULTS:r,SELECTOR:i});let o=[];if(n>0){var s=r;console.log({"smbfl-_data":s});for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return console.log({processedData:o}),{results:o,total:n,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,p.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return N(this,void 0,void 0,(function*(){const e=yield(0,m.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleBreak(){return N(this,void 0,void 0,(function*(){const e=yield(0,f.h)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};T.styles=[l.iv`
   :host { display: block; }
  `],A([(0,a.C)({type:Number}),R("design:type",Number)],T.prototype,"CLIENT_ID",void 0),A([(0,a.C)({type:Number}),R("design:type",Number)],T.prototype,"startSearchPage",void 0),A([(0,a.C)({type:Array}),R("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],T.prototype,"_data",void 0),A([(0,a.C)({type:Object}),R("design:type",Object)],T.prototype,"urlQueryParams",void 0),A([(0,a.C)({type:Number}),R("design:type",Number)],T.prototype,"meetingEventId",void 0),A([(0,d.I)('[show-breakField="all"]'),R("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],T.prototype,"showBreakFieldAllSelector",void 0),T=A([(0,c.M)("attendance-setup-form-break"),R("design:paramtypes",[])],T),n(8693);var $=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let L=class extends l.oi{constructor(){super(),(0,o.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),yield(0,s.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{a(i.next(e))}catch(e){o(e)}}function l(e){try{a(i.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,l)}a((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){return l.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-break CLIENT_ID="${this.clientId}"></attendance-setup-form-break>
    `}firstUpdated(){}createRenderRoot(){return this}};$([(0,a.C)({type:String}),I("design:type",String)],L.prototype,"email",void 0),$([(0,a.C)({type:Number}),I("design:type",Number)],L.prototype,"mId",void 0),$([(0,a.C)({type:Number}),I("design:type",Number)],L.prototype,"clientId",void 0),L=$([(0,c.M)("attendance-setup-form-edit-break"),I("design:paramtypes",[])],L)},8693:(e,t,n)=>{"use strict";var r=n(9392),i=n(9662),o=n(5713),s=(n(2715),n(771)),l=n(4672),a=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends r.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return r.dy`
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,l.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[r.iv`
   :host { display: block; }
  `],a([(0,i.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=a([(0,o.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)},43:(e,t,n)=>{"use strict";n.d(t,{v:()=>i});var r=n(5674);function i(e="",t=!1,n=""){return(0,r.eZ)({descriptor:r=>({get(){var r,i,o;const s="slot"+(e?`[name=${e}]`:":not([name])");let l=null!==(o=null===(i=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(s))||void 0===i?void 0:i.assignedNodes({flatten:t}))&&void 0!==o?o:[];return n&&(l=l.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(n)))),l},enumerable:!0,configurable:!0})})}},4232:(e,t,n)=>{"use strict";n.d(t,{pt:()=>o,OR:()=>s,hl:()=>a});var r=n(3692);const{H:i}=r.Al,o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s=e=>void 0===e.strings,l={},a=(e,t=l)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{Xe:()=>r.Xe,pX:()=>r.pX,XM:()=>r.XM});var r=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>s});var r=n(3692),i=n(875),o=n(4232);const s=(0,i.XM)(class extends i.Xe{constructor(e){if(super(e),e.type!==i.pX.PROPERTY&&e.type!==i.pX.ATTRIBUTE&&e.type!==i.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,s=e.name;if(e.type===i.pX.PROPERTY){if(t===n[s])return r.Jb}else if(e.type===i.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(s))return r.Jb}else if(e.type===i.pX.ATTRIBUTE&&n.getAttribute(s)===t+"")return r.Jb;return(0,o.hl)(e),t}})}},e=>(e.O(0,[744,185,674,564,820,828,907,214,985,948,800,712],(()=>(8796,e(e.s=8796)))),e.O())])}));
//# sourceMappingURL=edit-break.js.map