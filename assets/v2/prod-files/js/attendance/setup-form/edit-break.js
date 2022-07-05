"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1436],{2831:(e,t,n)=>{n.d(t,{h:()=>i,L:()=>r});const i=e=>{const t=new Date,n=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(n)},r=(e,t)=>e.toLocaleTimeString("en-US",t)},8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},706:(e,t,n)=>{n.d(t,{h:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2218:(e,t,n)=>{n.d(t,{u:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},6262:(e,t,n)=>{n.d(t,{a:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2715:(e,t,n)=>{var i=n(9392),r=n(9662),o=n(5713),s=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"aClass",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"bClass",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"icon",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"href",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"isBlockContent",void 0),s([(0,r.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"raised",void 0),l=s([(0,o.M)("link-button")],l)},5866:(e,t,n)=>{var i=n(9755),r=n(9392),o=n(9662),s=n(5713),a=(n(686),function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const i=e.id;n=t===i})),e.selected=n,e}))}render(){return this.multiple?this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label})}));else{let r={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)r[e]=this.ajaxHeader[e];this.selectSelector.forEach((o=>{i(o).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(r){const o=function(r,o){return n=isNaN(r.page)?0:r.page,n=0===n?n:n*t,i(".select2-search__field").on("keyup",(function(r){i(e.selectSelector).empty(),n=0,t=0})),n}(r),s=function(n,r){let o=isNaN(n.page)?1:n.page+1;return o=0===o?1:o,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),o=0,t=0})),o}(r);let a={search:r.term,start:o,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:r,processResults:(e,n)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let i=[];if(!1===n.error){var r=n.data;for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.fullName};i.includes(n)||i.push(n)}}return this.totalShowing+=i.length,{results:i,total:n.total,totalShowing:this.totalShowing}}createRenderRoot(){return this}};c.styles=[r.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),a([(0,o.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=a([(0,s.M)("select-input")],c)},8796:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditBreak:()=>j});var i,r,o=n(3750),s=n(4108),a=n(9392),l=n(9662),c=n(5713),d=n(2669),u=(n(5248),n(6811),n(3690),n(1854),n(2262)),h=n(2831),p=n(706),m=n(2218),f=n(4672),g=n(6455),y=n.n(g),b=n(771),v=n(7270),k=n(596),w=n(8967),_=n(3600),S=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))},C=n(6262),E=(n(5866),function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))}),$=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};let A=class extends a.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__breakUser=null,this.__schedule=null,this.__scheduleBreaks=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _breakUser(e){this.__breakUser=e,this.requestUpdate()}get _breakUser(){return this.__breakUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,f.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return a.dy`${this.schedule}`}get schedule(){return null===this._schedule?a.dy`
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
      `:!0===this._schedule.success?a.dy`${this.scheduleBreak}`:a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleBreak(){return null===this._scheduleBreaks?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleBreaks?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Break</span>: undefined error</h4>
          </div>
        </div>
      `:a.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return a.dy`${this.table}`}get table(){return this._scheduleBreaks.results.length>0?a.dy`
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
      `:a.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceBreaks(){return a.dy`
      ${this._scheduleBreaks.results.map((e=>a.dy`
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
    `}get form(){return a.dy`
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
    `}get breakField(){return(0,_.Ie)().token,a.dy`
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
    `}breakFieldDefault(e){return a.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.breakField}
        breakField-id="${e}" no_delete></multiple-widgets>
    `}addBreakField(){const e=this.showBreakFieldAllSelector.children.length,t=(0===e?-1:Number(this.showBreakFieldAllSelector.children[e-1].getAttribute("breakField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("breakField-id",String(t)),this.showBreakFieldAllSelector.append(n);const i=this.showBreakFieldAllSelector.querySelectorAll('multiple-widgets[breakField-id="'+t+'"]'),r=this.breakField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new u.T(e)}))}getBreakUsers(){return x(this,void 0,void 0,(function*(){const e=yield(0,C.a)();this._breakUser=null===e?void 0:e.paginResponse}))}submitForm(e){return x(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return E(this,void 0,void 0,(function*(){const e=(0,_.Ie)(),t=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break",n=document.querySelector('[make-general-posts="add-schedule-break"]'),i=new FormData(n);return y().fire({title:"Setup Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>E(this,void 0,void 0,(function*(){return yield(0,v.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{console.log({HTTP:e});try{const t=new k.H("post",e,!1,n),i=t.response;if(console.log({_RESPONSE:i}),"nameError"in i&&"unknownError"in i&&i.unknownError.length>0){console.log({"_RESPONSE.unknownError":i.unknownError});let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,w.T)(e);y().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let i=e;i.error=t;const r=new k.H("post",i,!0,n);return r.postForm,r}})).catch((e=>{y().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!y().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&y().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceBreak(e){return x(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,_.Ie)(),n=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break/"+e,i={};return y().fire({title:"Remove Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,v.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new k.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,w.T)(e);y().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new k.H("delete",n,!0);return i.postForm,i}})).catch((e=>{y().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!y().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}y().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,r=document.querySelector('[id="breakId"]');console.log({data:e,params:t,RESULTS:i,SELECTOR:r});let o=[];if(n>0){var s=i;console.log({"smbfl-_data":s});for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return console.log({processedData:o}),{results:o,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,f.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return x(this,void 0,void 0,(function*(){const e=yield(0,m.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleBreak(){return x(this,void 0,void 0,(function*(){const e=yield(0,p.h)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};A.styles=[a.iv`
   :host { display: block; }
  `],$([(0,l.C)({type:Number}),B("design:type",Number)],A.prototype,"CLIENT_ID",void 0),$([(0,l.C)({type:Number}),B("design:type",Number)],A.prototype,"startSearchPage",void 0),$([(0,l.C)({type:Array}),B("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],A.prototype,"_data",void 0),$([(0,l.C)({type:Object}),B("design:type",Object)],A.prototype,"urlQueryParams",void 0),$([(0,l.C)({type:Number}),B("design:type",Number)],A.prototype,"meetingEventId",void 0),$([(0,d.I)('[show-breakField="all"]'),B("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],A.prototype,"showBreakFieldAllSelector",void 0),A=$([(0,c.M)("attendance-setup-form-break"),B("design:paramtypes",[])],A),n(8693);var R=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let j=class extends a.oi{constructor(){super(),(0,o.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),yield(0,s.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,a)}l((r=r.apply(t,n||[])).next())}));var t,n,i,r}disconnectedCallback(){}render(){return a.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-break CLIENT_ID="${this.clientId}"></attendance-setup-form-break>
    `}firstUpdated(){}createRenderRoot(){return this}};R([(0,l.C)({type:String}),I("design:type",String)],j.prototype,"email",void 0),R([(0,l.C)({type:Number}),I("design:type",Number)],j.prototype,"mId",void 0),R([(0,l.C)({type:Number}),I("design:type",Number)],j.prototype,"clientId",void 0),j=R([(0,c.M)("attendance-setup-form-edit-break"),I("design:paramtypes",[])],j)},8693:(e,t,n)=>{var i=n(9392),r=n(9662),o=n(5713),s=(n(2715),n(771)),a=n(4672),l=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,a.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[i.iv`
   :host { display: block; }
  `],l([(0,r.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=l([(0,o.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)}},e=>(e.O(0,[2185,5744,9674,8820,1828,9564,2459,7879,5291,214,948,8462,3712],(()=>(8796,e(e.s=8796)))),e.O())])}));
//# sourceMappingURL=edit-break.js.map