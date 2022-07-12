"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2607],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},606:(e,t,n)=>{n.d(t,{I:()=>a});var i=n(771),o=n(7270),s=n(596),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2218:(e,t,n)=>{n.d(t,{u:()=>a});var i=n(771),o=n(7270),s=n(596),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},6262:(e,t,n)=>{n.d(t,{a:()=>a});var i=n(771),o=n(7270),s=n(596),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2715:(e,t,n)=>{var i=n(9392),o=n(9662),s=n(5713),r=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"aClass",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"bClass",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"icon",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"href",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"isBlockContent",void 0),r([(0,o.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"raised",void 0),l=r([(0,s.M)("link-button")],l)},2461:(e,t,n)=>{var i=n(9392),o=n(9662),s=n(5713),r=(n(5185),n(5248),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"name",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"value",void 0),r([(0,o.C)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),r([(0,o.C)({type:String}),a("design:type",String)],l.prototype,"id",void 0),r([(0,o.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),r([(0,o.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),r([(0,o.C)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),r([(0,o.C)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),r([(0,o.C)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),r([(0,o.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=r([(0,s.M)("file-input")],l)},5866:(e,t,n)=>{var i=n(9755),o=n(9392),s=n(9662),r=n(5713),a=(n(686),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const i=e.id;n=t===i})),e.selected=n,e}))}render(){return this.multiple?this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label})}));else{let o={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)o[e]=this.ajaxHeader[e];this.selectSelector.forEach((s=>{i(s).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(o){const s=function(o,s){return n=isNaN(o.page)?0:o.page,n=0===n?n:n*t,i(".select2-search__field").on("keyup",(function(o){i(e.selectSelector).empty(),n=0,t=0})),n}(o),r=function(n,o){let s=isNaN(n.page)?1:n.page+1;return s=0===s?1:s,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),s=0,t=0})),s}(o);let a={search:o.term,start:s,page:r};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:o,processResults:(e,n)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let i=[];if(!1===n.error){var o=n.data;for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.fullName};i.includes(n)||i.push(n)}}return this.totalShowing+=i.length,{results:i,total:n.total,totalShowing:this.totalShowing}}createRenderRoot(){return this}};c.styles=[o.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,s.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),a([(0,s.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),a([(0,s.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),a([(0,s.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),a([(0,s.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),a([(0,s.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),a([(0,s.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),a([(0,s.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),a([(0,s.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),a([(0,s.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),a([(0,s.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),a([(0,s.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),a([(0,s.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),a([(0,s.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),a([(0,s.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),a([(0,s.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),a([(0,s.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=a([(0,r.M)("select-input")],c)},8693:(e,t,n)=>{var i=n(9392),o=n(9662),s=n(5713),r=(n(2715),n(771)),a=n(4672),l=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
  `],l([(0,o.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=l([(0,s.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)},6230:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLocation:()=>I});var i,o,s=n(3750),r=n(4108),a=n(9392),l=n(9662),c=n(5713),d=n(2669),u=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),h=n(606),p=n(2218),m=n(4672),f=n(6455),y=n.n(f),g=n(771),v=n(7270),b=n(596),w=n(8967),_=n(3600),S=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))},C=n(6262),$=(n(5866),function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))}),k=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},E=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let L=class extends a.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__locationUser=null,this.__schedule=null,this.__scheduleLocations=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _locationUser(e){this.__locationUser=e,this.requestUpdate()}get _locationUser(){return this.__locationUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,m.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return a.dy`${this.schedule}`}get schedule(){return null===this._schedule?a.dy`
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
      `:!0===this._schedule.success?a.dy`${this.scheduleLocation}`:a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleLocation(){return null===this._scheduleLocations?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleLocations?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Location</span>: undefined error</h4>
          </div>
        </div>
      `:a.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return a.dy`${this.table}`}get table(){return this._scheduleLocations.results.length>0?a.dy`
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
      `:a.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceLocations(){return a.dy`
      ${this._scheduleLocations.results.map(((e,t)=>a.dy`
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
    `}get form(){return a.dy`
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
    `}get locationField(){return(0,_.Ie)().token,a.dy`
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
    `}locationFieldDefault(e){return a.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.locationField}
        locationField-id="${e}" no_delete></multiple-widgets>
    `}addLocationField(){const e=this.showLocationFieldAllSelector.children.length,t=(0===e?-1:Number(this.showLocationFieldAllSelector.children[e-1].getAttribute("locationField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("locationField-id",String(t)),this.showLocationFieldAllSelector.append(n);const i=this.showLocationFieldAllSelector.querySelectorAll('multiple-widgets[locationField-id="'+t+'"]'),o=this.locationField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new u.T(e)}))}getLocationUsers(){return x(this,void 0,void 0,(function*(){const e=yield(0,C.a)();this._locationUser=null===e?void 0:e.paginResponse}))}getLocationUser(e){return x(this,void 0,void 0,(function*(){const t=yield(0,C.a)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return console.log({"user.firstname user.surname":e.firstname+" "+e.surname}),e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return x(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return $(this,void 0,void 0,(function*(){const e=(0,_.Ie)(),t=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location",n=document.querySelector('[make-general-posts="add-schedule-location"]'),i=new FormData(n);return y().fire({title:"Add Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>$(this,void 0,void 0,(function*(){return yield(0,v.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new b.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,w.T)(e);y().showValidationMessage(`${t}`)}return t})).catch((e=>{y().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!y().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&y().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceLocation(e){return x(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,_.Ie)(),n=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,i={};return y().fire({title:"Remove Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,v.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new b.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,w.T)(e);y().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new b.H("delete",n,!0);return i.postForm,i}})).catch((e=>{y().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!y().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}y().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,o=document.querySelector('[id="location"]');console.log({data:e,params:t,RESULTS:i,SELECTOR:o});let s=[];if(n>0){var r=i;console.log({"smbfl-_data":r});for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return console.log({processedData:s}),{results:s,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,m.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return x(this,void 0,void 0,(function*(){const e=yield(0,p.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleLocation(){return x(this,void 0,void 0,(function*(){const e=yield(0,h.I)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");console.log({_networkResponse:e}),this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};L.styles=[a.iv`
   :host { display: block; }
  `],k([(0,l.C)({type:Number}),E("design:type",Number)],L.prototype,"CLIENT_ID",void 0),k([(0,l.C)({type:Number}),E("design:type",Number)],L.prototype,"startSearchPage",void 0),k([(0,l.C)({type:Array}),E("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],L.prototype,"_data",void 0),k([(0,l.C)({type:Object}),E("design:type",Object)],L.prototype,"urlQueryParams",void 0),k([(0,l.C)({type:Number}),E("design:type",Number)],L.prototype,"meetingEventId",void 0),k([(0,d.I)('[show-locationField="all"]'),E("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],L.prototype,"showLocationFieldAllSelector",void 0),L=k([(0,c.M)("attendance-setup-form-location"),E("design:paramtypes",[])],L),n(8693);var R=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let I=class extends a.oi{constructor(){super(),(0,s.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}l((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){return a.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-location CLIENT_ID="${this.clientId}"></attendance-setup-form-location>
    `}firstUplocationd(){}createRenderRoot(){return this}};R([(0,l.C)({type:String}),A("design:type",String)],I.prototype,"email",void 0),R([(0,l.C)({type:Number}),A("design:type",Number)],I.prototype,"mId",void 0),R([(0,l.C)({type:Number}),A("design:type",Number)],I.prototype,"clientId",void 0),I=R([(0,c.M)("attendance-setup-form-edit-location"),A("design:paramtypes",[])],I)}},e=>(e.O(0,[2185,5744,9674,8820,1828,9564,2459,7879,5291,214,948,8462,3712],(()=>(6230,e(e.s=6230)))),e.O())])}));
//# sourceMappingURL=edit-location.js.map