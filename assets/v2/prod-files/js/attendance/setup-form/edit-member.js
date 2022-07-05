/*! For license information please see edit-member.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3670],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},1801:(e,t,n)=>{n.d(t,{a:()=>o,w:()=>s});var i=n(6909),r=n(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.J)(e.regionId):(0,r.A)(),districtId:"districtId"in e?(0,i.A)(e.districtId):(0,i.W)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,r.A)(),districtId:(0,i.W)(),location:"-"}}},9492:(e,t,n)=>{function i(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function r(){return{id:0,name:"-",short:"-",code:"-"}}n.d(t,{V:()=>i,Q:()=>r})},6909:(e,t,n)=>{n.d(t,{A:()=>r,W:()=>o});var i=n(7202);function r(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.J)(e.regionId):(0,i.A)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,i.A)(),location:"-"}}},7202:(e,t,n)=>{function i(e){return{id:Number(e.id),location:String(e.location)}}function r(){return{id:0,location:"-"}}n.d(t,{J:()=>i,A:()=>r})},1551:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(1801),r=n(9492),o=n(6909),s=n(7202);function a(e){return{id:Number(e.id),regionId:"regionId"in e?(0,s.J)(e.regionId):(0,s.A)(),districtId:"districtId"in e?(0,o.A)(e.districtId):(0,o.W)(),location:String(e.location)}}function l(e,t=""){return String(null===e?t:e)}function c(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:l(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:l(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,r.V)(e.countryInfo):(0,r.Q)(),regionInfo:"regionInfo"in e?(0,s.J)(e.regionInfo):(0,s.A)(),districtInfo:"districtInfo"in e?(0,o.A)(e.districtInfo):(0,o.W)(),constituencyInfo:"constituencyInfo"in e?(0,i.a)(e.constituencyInfo):(0,i.w)(),electoralareaInfo:"electoralareaInfo"in e?a(e.electoralareaInfo):{id:0,regionId:(0,s.A)(),districtId:(0,o.W)(),location:"-"}}}},5524:(e,t,n)=>{n.d(t,{n:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2218:(e,t,n)=>{n.d(t,{u:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},6656:(e,t,n)=>{n.d(t,{E:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2715:(e,t,n)=>{var i=n(9392),r=n(9662),o=n(5713),s=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"aClass",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"bClass",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"icon",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"href",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"isBlockContent",void 0),s([(0,r.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"raised",void 0),l=s([(0,o.M)("link-button")],l)},2461:(e,t,n)=>{var i=n(9392),r=n(9662),o=n(5713),s=(n(5185),n(5248),function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"value",void 0),s([(0,r.C)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"id",void 0),s([(0,r.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,r.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,r.C)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,r.C)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,r.C)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,r.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,o.M)("file-input")],l)},5866:(e,t,n)=>{var i=n(9755),r=n(9392),o=n(9662),s=n(5713),a=(n(686),function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const i=e.id;n=t===i})),e.selected=n,e}))}render(){return this.multiple?this.required?r.dy`
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
    `],a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),a([(0,o.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=a([(0,s.M)("select-input")],c)},8693:(e,t,n)=>{var i=n(9392),r=n(9662),o=n(5713),s=(n(2715),n(771)),a=n(4672),l=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
  `],l([(0,r.C)({type:Number}),c("design:type",Number)],d.prototype,"meetingEventId",void 0),d=l([(0,o.M)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],d)},3591:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMember:()=>j});var i=n(3750),r=n(4108),o=n(9392),s=n(9662),a=n(5713),l=n(2669),c=n(5458),d=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),u=n(5524),h=n(2218),p=n(4672),m=n(6455),f=n.n(m),b=n(771),g=n(7270),y=n(596),v=n(8967),_=n(3600),w=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};n(5866);var S,C,$=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))},A=n(1551),I=n(6656),k=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},N=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},E=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};let x=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return E(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,p.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return o.dy`${this.schedule}`}get schedule(){return null===this._schedule?o.dy`
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
      `:!0===this._schedule.success?o.dy`${this.scheduleMember}`:o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleMember(){return null===this._scheduleMembers?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleMembers?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Member</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.dy`${this.table}`}get table(){return this._scheduleMembers.results.length>0?o.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Member
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
                ${this.getMeetingAttendanceMembers}
              </tbody>
            </table>
          </div>
        </div>
      `:o.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceMembers(){return o.dy`
      ${this._scheduleMembers.results.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.C)(this.getMember(e.memberId),o.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceMember}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member">
                <div class="p-0 m-0" show-memberField="all">
                  ${this.memberFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member" raised class="button" @click="${this.submitForm}">
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
    `}get memberField(){let e={};const t=(0,_.Ie)();return e.Authorization="Token "+t.token,o.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Member</h4>
            <select-input class="w-100" id="memberId" name="memberId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${b.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `}memberFieldDefault(e){return o.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${e}" no_delete></multiple-widgets>
    `}addMemberField(){const e=this.showMemberFieldAllSelector.children.length,t=(0===e?-1:Number(this.showMemberFieldAllSelector.children[e-1].getAttribute("memberField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("memberField-id",String(t)),this.showMemberFieldAllSelector.append(n);const i=this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+t+'"]'),r=this.memberField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,r=document.querySelector('[id="memberId"]');console.log({data:e,params:t,RESULTS:i,SELECTOR:r});let o=[];if(n>0){var s=i;console.log({"smbfl-_data":s});for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return console.log({processedData:o}),{results:o,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new d.T(e)}))}submitForm(e){return E(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return $(this,void 0,void 0,(function*(){const e=(0,_.Ie)(),t=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",n=document.querySelector('[make-general-posts="add-schedule-member"]'),i=new FormData(n);return f().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>$(this,void 0,void 0,(function*(){return yield(0,g.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new y.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,v.T)(e);f().showValidationMessage(`${t}`)}return t})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&f().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceMember(e){return E(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,_.Ie)(),n=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,i={};return f().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,g.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new y.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,v.T)(e);f().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new y.H("delete",n,!0);return i.postForm,i}})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}f().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,p.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return E(this,void 0,void 0,(function*(){const e=yield(0,h.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleMember(){return E(this,void 0,void 0,(function*(){const e=yield(0,u.n)(null,"?meetingEventId="+this.meetingEventId);console.log({_networkResponse:e}),this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMembers(){return E(this,void 0,void 0,(function*(){const e=yield(0,I.E)();let t=[];null===e?t.push({id:0,firstname:"** ",middlename:"NOT FOUND",surname:" **",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._members=[...this._members,...t]}))}getMember(e){return E(this,void 0,void 0,(function*(){const t=yield(0,I.E)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,A.Z)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};x.styles=[o.iv`
   :host { display: block; }
  `],k([(0,s.C)({type:Number}),N("design:type",Number)],x.prototype,"CLIENT_ID",void 0),k([(0,s.C)({type:Number}),N("design:type",Number)],x.prototype,"startSearchPage",void 0),k([(0,s.C)({type:Array}),N("design:type",Array)],x.prototype,"_members",void 0),k([(0,s.C)({type:Array}),N("design:type","function"==typeof(S="undefined"!=typeof Array&&Array)?S:Object)],x.prototype,"_data",void 0),k([(0,s.C)({type:Object}),N("design:type",Object)],x.prototype,"urlQueryParams",void 0),k([(0,s.C)({type:Number}),N("design:type",Number)],x.prototype,"meetingEventId",void 0),k([(0,l.I)('[show-memberField="all"]'),N("design:type","function"==typeof(C="undefined"!=typeof Element&&Element)?C:Object)],x.prototype,"showMemberFieldAllSelector",void 0),x=k([(0,a.M)("attendance-setup-form-member"),N("design:paramtypes",[])],x),n(8693);var R=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let j=class extends o.oi{constructor(){super(),(0,i.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,a)}l((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){return o.dy`
      <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
      <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
    `}firstUpmemberd(){}createRenderRoot(){return this}};R([(0,s.C)({type:String}),P("design:type",String)],j.prototype,"email",void 0),R([(0,s.C)({type:Number}),P("design:type",Number)],j.prototype,"mId",void 0),R([(0,s.C)({type:Number}),P("design:type",Number)],j.prototype,"clientId",void 0),j=R([(0,a.M)("attendance-setup-form-edit-member"),P("design:paramtypes",[])],j)},5458:(e,t,n)=>{n.d(t,{C:()=>b});var i=n(3692),r=n(875),o=n(4232);const s=(e,t)=>{var n,i;const r=e._$AN;if(void 0===r)return!1;for(const e of r)null===(i=(n=e)._$AO)||void 0===i||i.call(n,t,!1),s(e,t);return!0},a=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},l=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),u(t)}};function c(e){void 0!==this._$AN?(a(this),this._$AM=e,l(this)):this._$AM=e}function d(e,t=!1,n=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(i))for(let e=n;e<i.length;e++)s(i[e],!1),a(i[e]);else null!=i&&(s(i,!1),a(i));else s(this,e)}const u=e=>{var t,n,i,o;e.type==r.pX.CHILD&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=d),null!==(n=(o=e)._$AQ)&&void 0!==n||(o._$AQ=c))};class h extends r.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),l(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?null===(n=this.reconnected)||void 0===n||n.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(s(this,e),a(this))}setValue(e){if((0,o.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class p{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class m{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Y=this.q=void 0}}const f=e=>!(0,o.pt)(e)&&"function"==typeof e.then,b=(0,r.XM)(class extends h{constructor(){super(...arguments),this._$Cft=1073741823,this._$Cwt=[],this._$CG=new p(this),this._$CK=new m}render(...e){var t;return null!==(t=e.find((e=>!f(e))))&&void 0!==t?t:i.Jb}update(e,t){const n=this._$Cwt;let r=n.length;this._$Cwt=t;const o=this._$CG,s=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cft);e++){const i=t[e];if(!f(i))return this._$Cft=e,i;e<r&&i===n[e]||(this._$Cft=1073741823,r=0,Promise.resolve(i).then((async e=>{for(;s.get();)await s.get();const t=o.deref();if(void 0!==t){const n=t._$Cwt.indexOf(i);n>-1&&n<t._$Cft&&(t._$Cft=n,t.setValue(e))}})))}return i.Jb}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,9564,2459,7879,5291,214,948,8462,3712],(()=>(3591,e(e.s=3591)))),e.O())])}));
//# sourceMappingURL=edit-member.js.map