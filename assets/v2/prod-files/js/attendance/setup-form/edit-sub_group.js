/*! For license information please see edit-sub_group.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6342],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},2218:(e,t,n)=>{n.d(t,{u:()=>l});var i=n(771),s=n(7270),o=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,a=yield(0,s.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,l||[])).next())}));var n,l,a,c}},8786:(e,t,n)=>{n.d(t,{s:()=>l});var i=n(771),s=n(7270),o=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,a=yield(0,s.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,l||[])).next())}));var n,l,a,c}},2892:(e,t,n)=>{n.d(t,{c:()=>l});var i=n(771),s=n(7270),o=n(596),r=n(3600);function l(e=null){return t=this,n=void 0,a=function*(){const t=(0,r.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),l=yield(0,s.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function s(e){try{r(a.next(e))}catch(e){i(e)}}function o(e){try{r(a.throw(e))}catch(e){i(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,o)}r((a=a.apply(t,n||[])).next())}));var t,n,l,a}},9605:(e,t,n)=>{n.d(t,{U:()=>l});var i=n(771),s=n(7270),o=n(596),r=n(3600);function l(e=null){return t=this,n=void 0,a=function*(){const t=(0,r.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e),l=yield(0,s.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function s(e){try{r(a.next(e))}catch(e){i(e)}}function o(e){try{r(a.throw(e))}catch(e){i(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,o)}r((a=a.apply(t,n||[])).next())}));var t,n,l,a}},2715:(e,t,n)=>{var i=n(9392),s=n(9662),o=n(5713),r=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
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
  `],a([(0,s.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=a([(0,o.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)},1119:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditSubGroup:()=>j});var i=n(3750),s=n(4108),o=n(9392),r=n(9662),l=n(5713),a=n(2669),c=n(5458),d=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),u=n(8786),p=n(2218),h=n(4672),f=n(6455),m=n.n(f),g=n(771),b=n(7270),y=n(596),v=n(8967),_=n(3600),S=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function l(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))};n(5866);var w,C,$=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function l(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))},A=n(9605),k=n(2892),E=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},N=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{a(i.next(e))}catch(e){o(e)}}function l(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((i=i.apply(e,t||[])).next())}))};let I=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__subgroupUser=null,this.__schedule=null,this.__scheduleSubGroups=null,this._groups=[],this._subgroups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _subgroupUser(e){this.__subgroupUser=e,this.requestUpdate()}get _subgroupUser(){return this.__subgroupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleSubGroups(e){this.__scheduleSubGroups=e,this.requestUpdate()}get _scheduleSubGroups(){return this.__scheduleSubGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return N(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,h.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleSubGroup(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return o.dy`${this.schedule}`}get schedule(){return null===this._schedule?o.dy`
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
      `:!0===this._schedule.success?o.dy`${this.scheduleSubGroup}`:o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleSubGroup(){return null===this._scheduleSubGroups?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleSubGroups?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SubGroup</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.dy`${this.table}`}get table(){return this._scheduleSubGroups.results.length>0?o.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting SubGroup">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting SubGroup
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
                ${this.getMeetingAttendanceSubGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:o.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceSubGroups(){return o.dy`
      ${this._scheduleSubGroups.results.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.C)(this.getSubGroup(e.subGroupId),o.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSubGroup}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return o.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled SubGroup</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled SubGroup!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-subgroup">
                <div class="p-0 m-0" show-subgroupField="all">
                  ${this.subgroupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add SubGroup" raised class="button" @click="${this.submitForm}">
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
    `}get subgroupField(){const e=this._subgroups.map((e=>o.dy`<mwc-list-item value="${e.id}">
        ${(0,c.C)(this.getGroup(e.groupId),o.dy`<span>Loading...</span>`)} >> 
        ${e.subgroup}
      </mwc-list-item>`));return o.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select SubGroup</h4>
            <mwc-select name="subGroupId" class="w-full" id="subGroupId" label="Select SubGroup" outlined required>
              <mwc-list-item value="">Select SubGroup</mwc-list-item>
              <mwc-list-item value="all">All SubGroups</mwc-list-item>
              ${o.dy`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}subgroupFieldDefault(e){return o.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.subgroupField}
        subgroupField-id="${e}" no_delete></multiple-widgets>
    `}addSubGroupField(){const e=this.showSubGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showSubGroupFieldAllSelector.children[e-1].getAttribute("subgroupField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("subgroupField-id",String(t)),this.showSubGroupFieldAllSelector.append(n);const i=this.showSubGroupFieldAllSelector.querySelectorAll('multiple-widgets[subgroupField-id="'+t+'"]'),s=this.subgroupField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new d.T(e)}))}submitForm(e){return N(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return $(this,void 0,void 0,(function*(){const e=(0,_.Ie)(),t=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup",n=document.querySelector('[make-general-posts="add-schedule-subgroup"]'),i=new FormData(n);return m().fire({title:"Add SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>$(this,void 0,void 0,(function*(){return yield(0,b.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new y.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,v.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceSubGroup(e){return N(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,_.Ie)(),n=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup/"+e,i={};return m().fire({title:"Remove SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,b.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new y.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,v.T)(e);m().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new y.H("delete",n,!0);return i.postForm,i}})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}m().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,h.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return N(this,void 0,void 0,(function*(){const e=yield(0,p.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleSubGroup(){return N(this,void 0,void 0,(function*(){const e=yield(0,u.s)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");console.log({_networkResponse:e}),this._scheduleSubGroups=null===e?void 0:e.paginResponse}))}getGroups(){return N(this,void 0,void 0,(function*(){const e=yield(0,k.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._groups=[...this._groups,...t]}))}getGroup(e){return N(this,void 0,void 0,(function*(){const t=yield(0,k.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}getSubGroups(){return N(this,void 0,void 0,(function*(){const e=yield(0,A.U)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._subgroups=[...this._subgroups,...t]}))}getSubGroup(e){return N(this,void 0,void 0,(function*(){console.log({subgroup_ID:e});const t=yield(0,A.U)(e);if(null===t)return"???";if(t.response.success&&"subgroup"in t.response.data){const e=t.response.data;return console.log({subgroup:e}),e.subgroup}return t.response.message}))}createRenderRoot(){return this}};I.styles=[o.iv`
   :host { display: block; }
  `],E([(0,r.C)({type:Number}),x("design:type",Number)],I.prototype,"CLIENT_ID",void 0),E([(0,r.C)({type:Number}),x("design:type",Number)],I.prototype,"startSearchPage",void 0),E([(0,r.C)({type:Array}),x("design:type",Array)],I.prototype,"_groups",void 0),E([(0,r.C)({type:Array}),x("design:type",Array)],I.prototype,"_subgroups",void 0),E([(0,r.C)({type:Array}),x("design:type","function"==typeof(w="undefined"!=typeof Array&&Array)?w:Object)],I.prototype,"_data",void 0),E([(0,r.C)({type:Object}),x("design:type",Object)],I.prototype,"urlQueryParams",void 0),E([(0,r.C)({type:Number}),x("design:type",Number)],I.prototype,"meetingEventId",void 0),E([(0,a.I)('[show-subgroupField="all"]'),x("design:type","function"==typeof(C="undefined"!=typeof Element&&Element)?C:Object)],I.prototype,"showSubGroupFieldAllSelector",void 0),I=E([(0,l.M)("attendance-setup-form-subgroup"),x("design:paramtypes",[])],I),n(8693);var R=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let j=class extends o.oi{constructor(){super(),(0,i.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,s.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,l)}a((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){return o.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-subgroup CLIENT_ID="${this.clientId}"></attendance-setup-form-subgroup>
    `}firstUpsubgroupd(){}createRenderRoot(){return this}};R([(0,r.C)({type:String}),P("design:type",String)],j.prototype,"email",void 0),R([(0,r.C)({type:Number}),P("design:type",Number)],j.prototype,"mId",void 0),R([(0,r.C)({type:Number}),P("design:type",Number)],j.prototype,"clientId",void 0),j=R([(0,l.M)("attendance-setup-form-edit-subgroup"),P("design:paramtypes",[])],j)},5458:(e,t,n)=>{n.d(t,{C:()=>g});var i=n(3692),s=n(875),o=n(4232);const r=(e,t)=>{var n,i;const s=e._$AN;if(void 0===s)return!1;for(const e of s)null===(i=(n=e)._$AO)||void 0===i||i.call(n,t,!1),r(e,t);return!0},l=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},a=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),u(t)}};function c(e){void 0!==this._$AN?(l(this),this._$AM=e,a(this)):this._$AM=e}function d(e,t=!1,n=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(i))for(let e=n;e<i.length;e++)r(i[e],!1),l(i[e]);else null!=i&&(r(i,!1),l(i));else r(this,e)}const u=e=>{var t,n,i,o;e.type==s.pX.CHILD&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=d),null!==(n=(o=e)._$AQ)&&void 0!==n||(o._$AQ=c))};class p extends s.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),a(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?null===(n=this.reconnected)||void 0===n||n.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(r(this,e),l(this))}setValue(e){if((0,o.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class h{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class f{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Y=this.q=void 0}}const m=e=>!(0,o.pt)(e)&&"function"==typeof e.then,g=(0,s.XM)(class extends p{constructor(){super(...arguments),this._$Cft=1073741823,this._$Cwt=[],this._$CG=new h(this),this._$CK=new f}render(...e){var t;return null!==(t=e.find((e=>!m(e))))&&void 0!==t?t:i.Jb}update(e,t){const n=this._$Cwt;let s=n.length;this._$Cwt=t;const o=this._$CG,r=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cft);e++){const i=t[e];if(!m(i))return this._$Cft=e,i;e<s&&i===n[e]||(this._$Cft=1073741823,s=0,Promise.resolve(i).then((async e=>{for(;r.get();)await r.get();const t=o.deref();if(void 0!==t){const n=t._$Cwt.indexOf(i);n>-1&&n<t._$Cft&&(t._$Cft=n,t.setValue(e))}})))}return i.Jb}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,9564,2459,7879,5291,214,948,8462,3712],(()=>(1119,e(e.s=1119)))),e.O())])}));
//# sourceMappingURL=edit-sub_group.js.map