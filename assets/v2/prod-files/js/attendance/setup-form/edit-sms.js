"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6184],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},2218:(e,t,n)=>{n.d(t,{u:()=>l});var i=n(771),s=n(7270),o=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,a=yield(0,s.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,l||[])).next())}));var n,l,a,c}},2482:(e,t,n)=>{n.d(t,{p:()=>l});var i=n(771),s=n(7270),o=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms"+(null===e?"":"/"+e)+t,a=yield(0,s.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,l||[])).next())}));var n,l,a,c}},2715:(e,t,n)=>{var i=n(9392),s=n(9662),o=n(5713),r=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"aClass",void 0),r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"bClass",void 0),r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"icon",void 0),r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"href",void 0),r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"isBlockContent",void 0),r([(0,s.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"raised",void 0),a=r([(0,o.M)("link-button")],a)},2461:(e,t,n)=>{var i=n(9392),s=n(9662),o=n(5713),r=(n(5185),n(5248),function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"name",void 0),r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"label",void 0),r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"value",void 0),r([(0,s.C)({type:Number}),l("design:type",Number)],a.prototype,"randomID",void 0),r([(0,s.C)({type:String}),l("design:type",String)],a.prototype,"id",void 0),r([(0,s.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"required",void 0),r([(0,s.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"multiple",void 0),r([(0,s.C)({type:Number}),l("design:type",Number)],a.prototype,"startNumber",void 0),r([(0,s.C)({type:Number}),l("design:type",Number)],a.prototype,"rowsPerPage",void 0),r([(0,s.C)({type:Number}),l("design:type",Number)],a.prototype,"totalShowing",void 0),r([(0,s.C)({type:Boolean}),l("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=r([(0,o.M)("file-input")],a)},5866:(e,t,n)=>{var i=n(9755),s=n(9392),o=n(9662),r=n(5713),l=(n(686),function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends s.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const i=e.id;n=t===i})),e.selected=n,e}))}render(){return this.multiple?this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label})}));else{let s={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)s[e]=this.ajaxHeader[e];this.selectSelector.forEach((o=>{i(o).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(s){const o=function(s,o){return n=isNaN(s.page)?0:s.page,n=0===n?n:n*t,i(".select2-search__field").on("keyup",(function(s){i(e.selectSelector).empty(),n=0,t=0})),n}(s),r=function(n,s){let o=isNaN(n.page)?1:n.page+1;return o=0===o?1:o,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),o=0,t=0})),o}(s);let l={search:s.term,start:o,page:r};return e.ajaxFetchUrlParams.forEach((e=>{l[e.param]=e.value})),l},headers:s,processResults:(e,n)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let i=[];if(!1===n.error){var s=n.data;for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.fullName};i.includes(n)||i.push(n)}}return this.totalShowing+=i.length,{results:i,total:n.total,totalShowing:this.totalShowing}}createRenderRoot(){return this}};c.styles=[s.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],l([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"name",void 0),l([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"label",void 0),l([(0,o.C)({type:Array}),a("design:type",Array)],c.prototype,"value",void 0),l([(0,o.C)({type:Number}),a("design:type",Number)],c.prototype,"randomID",void 0),l([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"input_id",void 0),l([(0,o.C)({type:Array}),a("design:type",Array)],c.prototype,"options",void 0),l([(0,o.C)({type:Boolean}),a("design:type",Boolean)],c.prototype,"required",void 0),l([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchToken",void 0),l([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),l([(0,o.C)({type:Object}),a("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),l([(0,o.C)({type:Array}),a("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),l([(0,o.C)({type:Number}),a("design:type",Number)],c.prototype,"startSearchPage",void 0),l([(0,o.C)({type:Boolean}),a("design:type",Boolean)],c.prototype,"multiple",void 0),l([(0,o.C)({type:Number}),a("design:type",Number)],c.prototype,"startNumber",void 0),l([(0,o.C)({type:Number}),a("design:type",Number)],c.prototype,"rowsPerPage",void 0),l([(0,o.C)({type:Number}),a("design:type",Number)],c.prototype,"totalShowing",void 0),l([(0,o.C)({type:Boolean}),a("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=l([(0,r.M)("select-input")],c)},8693:(e,t,n)=>{var i=n(9392),s=n(9662),o=n(5713),r=(n(2715),n(771)),l=n(4672),a=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
  `],a([(0,s.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=a([(0,o.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)},9171:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditSMS:()=>N});var i=n(3750),s=n(4108),o=n(9392),r=n(9662),l=n(5713),a=n(2669),c=(n(5248),n(2935),n(3313),n(6811),n(3690),n(1854),n(2461),n(2262)),d=n(2482),u=n(2218),h=n(4672),p=n(6455),m=n.n(p),f=n(771),y=n(7270),g=n(596),v=n(8967),b=n(3600),S=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function l(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))};n(5866);var w,C,$=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function l(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))},_=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function l(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))},E=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function l(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))};let A=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__smsUser=null,this.__schedule=null,this.__scheduleSMSs=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _smsUser(e){this.__smsUser=e,this.requestUpdate()}get _smsUser(){return this.__smsUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleSMSs(e){this.__scheduleSMSs=e,this.requestUpdate()}get _scheduleSMSs(){return this.__scheduleSMSs}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,h.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleSMS()}))}disconnectedCallback(){}render(){return o.dy`${this.schedule}`}get schedule(){return null===this._schedule?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?o.dy`${this.scheduleSMS}`:o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleSMS(){return null===this._scheduleSMSs?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleSMSs?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SMS</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.form}
      `}get getMeetingAttendanceSMSs(){return o.dy`
      ${this._scheduleSMSs.results.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${f.t.URLS.FILE_BUCKET_BASE_URL}files${e.id}" target="_blank">Open File ${t+1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSMS}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){let e=null;return e=this._scheduleSMSs.count>0?this._scheduleSMSs.results[0]:{},o.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled SMS</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled SMS!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-sms">
                <div class="p-0 m-0" show-smsField="all">
                  ${this.smsFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      ${void 0===e.id?"":o.dy`<mwc-button class="mr-2 danger" label="Delete " icon="delete_forever" 
                        delete-this-item="${e.id}" raised class="button" @click="${this.deleteQuestionnaireMeetingAttendanceSMS}"></mwc-button>`}
                      <mwc-button label="${void 0===e.id?"Add":"Edit"} SMS" raised class="button" @click="${this.submitForm}">
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
    `}get smsField(){let e=null;e=this._scheduleSMSs.count>0?this._scheduleSMSs.results[0]:{};const t=void 0===e.alertDate?"":e.alertDate.join(", ");return o.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Event Message</h4>
            <mwc-textarea id="eventMessage" name="eventMessage" label="Enter Event Message" value="${e.eventMessage}" outlined required>
            </mwc-textarea>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Alert Time</h4>
            <mwc-textfield type="time" id="alertTime" name="alertTime" label="Enter Alert Time" value="${String(e.alertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Alert Date <span class="text-xs italic font-serif text-yellow-600">i.e (YYYY-MM-DD) - [eg. 2022-09-12, 2022-10-12]</span></h4>
            <mwc-textarea id="alertDate" name="alertDate" label="Enter Alert Date(s) Separated by commas(,)" value="${t}" outlined required>
            </mwc-textarea>
            <!-- <mwc-textfield type="date" id="alertDate" name="alertDate" label="Enter Alert Date" outlined required>
            </mwc-textfield> -->
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Notify Parent</h4>
            <switch-input name="notifyParent" class="w-full" id="notifyParent" label="Notify Parent" .selected="${e.notifyParent}" outlined required>
            </switch-input>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Notify Member</h4>
            <switch-input name="notifyMember" class="w-full" id="notifyMember" label="Notify Member" .selected="${e.notifyMember}" outlined required>
            </switch-input>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Attendee Alert Time</h4>
            <mwc-textfield type="time" id="attendeeAlertTime" name="attendeeAlertTime" label="Enter Attendee Alert Time" value="${String(e.attendeeAlertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Absentee Alert Time</h4>
            <mwc-textfield type="time" id="absenteeAlertTime" name="absenteeAlertTime" label="Enter Absentee Alert Time" value="${String(e.absenteeAlertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Absentee Alert Message</h4>
            <mwc-textarea id="absenteeAlertMessage" name="absenteeAlertMessage" label="Enter Absentee Alert Message" value="${e.absenteeAlertMessage}" outlined required>
            </mwc-textarea>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Date</h4>
            <mwc-textfield type="date" id="date" name="date" label="Enter Date" value="${String(e.date)}" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}smsFieldDefault(e){return o.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.smsField}
        smsField-id="${e}" no_delete></multiple-widgets>
    `}addSMSField(){const e=this.showSMSFieldAllSelector.children.length,t=(0===e?-1:Number(this.showSMSFieldAllSelector.children[e-1].getAttribute("smsField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("smsField-id",String(t)),this.showSMSFieldAllSelector.append(n);const i=this.showSMSFieldAllSelector.querySelectorAll('multiple-widgets[smsField-id="'+t+'"]'),s=this.smsField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new c.T(e)}))}submitForm(e){return x(this,void 0,void 0,(function*(){e.preventDefault(),this._scheduleSMSs.count>0?yield function(e){return _(this,void 0,void 0,(function*(){const t=(0,b.Ie)(),n=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms/"+e,i=document.querySelector('[make-general-posts="add-schedule-sms"]'),s=new FormData(i);return m().fire({title:"Update SMS?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return yield(0,y.d)(n,{method:"PUT",body:s,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new g.H("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,v.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this._scheduleSMSs.results[0].id):yield function(){return $(this,void 0,void 0,(function*(){const e=(0,b.Ie)(),t=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms",n=document.querySelector('[make-general-posts="add-schedule-sms"]'),i=new FormData(n);return m().fire({title:"Setup SMS?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>$(this,void 0,void 0,(function*(){return yield(0,y.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new g.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,v.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceSMS(e){return x(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,b.Ie)(),n=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms/"+e,i={};return m().fire({title:"Remove SMS?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,y.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new g.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,v.T)(e);m().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new g.H("delete",n,!0);return i.postForm,i}})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}m().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,h.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return x(this,void 0,void 0,(function*(){const e=yield(0,u.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleSMS(){return x(this,void 0,void 0,(function*(){const e=yield(0,d.p)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");console.log({_networkResponse:e}),this._scheduleSMSs=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};A.styles=[o.iv`
   :host { display: block; }
  `],E([(0,r.C)({type:Number}),k("design:type",Number)],A.prototype,"CLIENT_ID",void 0),E([(0,r.C)({type:Number}),k("design:type",Number)],A.prototype,"startSearchPage",void 0),E([(0,r.C)({type:Array}),k("design:type","function"==typeof(w="undefined"!=typeof Array&&Array)?w:Object)],A.prototype,"_data",void 0),E([(0,r.C)({type:Object}),k("design:type",Object)],A.prototype,"urlQueryParams",void 0),E([(0,r.C)({type:Number}),k("design:type",Number)],A.prototype,"meetingEventId",void 0),E([(0,a.I)('[show-smsField="all"]'),k("design:type","function"==typeof(C="undefined"!=typeof Element&&Element)?C:Object)],A.prototype,"showSMSFieldAllSelector",void 0),A=E([(0,l.M)("attendance-setup-form-sms"),k("design:paramtypes",[])],A),n(8693);var M=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let N=class extends o.oi{constructor(){super(),(0,i.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,s.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,l)}a((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){return o.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-sms CLIENT_ID="${this.clientId}"></attendance-setup-form-sms>
    `}firstUpsmsd(){}createRenderRoot(){return this}};M([(0,r.C)({type:String}),R("design:type",String)],N.prototype,"email",void 0),M([(0,r.C)({type:Number}),R("design:type",Number)],N.prototype,"mId",void 0),M([(0,r.C)({type:Number}),R("design:type",Number)],N.prototype,"clientId",void 0),N=M([(0,l.M)("attendance-setup-form-edit-sms"),R("design:paramtypes",[])],N)}},e=>(e.O(0,[2185,5744,9674,8820,1828,9564,2459,7879,5291,214,948,8462,3712],(()=>(9171,e(e.s=9171)))),e.O())])}));
//# sourceMappingURL=edit-sms.js.map