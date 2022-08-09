/*! For license information please see 8330.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8330,4814],{2368:(e,t,i)=>{i.d(t,{L:()=>a});var n=i(4672);class a{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{e.preventDefault();const t=window.FilterFieldBox.form,i=new FormData(t),n=this.unmutableInputNames.map((e=>e.name));i.forEach(((e,t)=>{n.includes(t)||document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=""}))})),this.unmutableInputNames.map((e=>{const t=e.name,i=e.value;void 0!==i&&document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=i}))})),t.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,n.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,i=t.container;i.hasAttribute("hidden")?(i.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(i.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},2869:(e,t,i)=>{function n(e){return{id:Number(e.id),name:e.name}}i.d(t,{y:()=>n})},5069:(e,t,i)=>{function n(e){return{id:Number(e.id),name:e.name}}i.d(t,{w:()=>n})},1801:(e,t,i)=>{i.d(t,{a:()=>r,w:()=>s});var n=i(6909),a=i(7202);function r(e){return{id:Number(e.id),regionId:"regionId"in e?(0,a.J)(e.regionId):(0,a.A)(),districtId:"districtId"in e?(0,n.A)(e.districtId):(0,n.W)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,a.A)(),districtId:(0,n.W)(),location:"-"}}},9492:(e,t,i)=>{function n(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function a(){return{id:0,name:"-",short:"-",code:"-"}}i.d(t,{V:()=>n,Q:()=>a})},6909:(e,t,i)=>{i.d(t,{A:()=>a,W:()=>r});var n=i(7202);function a(e){return{id:Number(e.id),regionId:"regionId"in e?(0,n.J)(e.regionId):(0,n.A)(),location:String(e.location)}}function r(){return{id:0,regionId:(0,n.A)(),location:"-"}}},7202:(e,t,i)=>{function n(e){return{id:Number(e.id),location:String(e.location)}}function a(){return{id:0,location:"-"}}i.d(t,{J:()=>n,A:()=>a})},1551:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(1801),a=i(9492),r=i(6909),s=i(7202);function c(e){return{id:Number(e.id),regionId:"regionId"in e?(0,s.J)(e.regionId):(0,s.A)(),districtId:"districtId"in e?(0,r.A)(e.districtId):(0,r.W)(),location:String(e.location)}}function l(e,t=""){return String(null===e?t:e)}function o(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:l(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:l(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,a.V)(e.countryInfo):(0,a.Q)(),regionInfo:"regionInfo"in e?(0,s.J)(e.regionInfo):(0,s.A)(),districtInfo:"districtInfo"in e?(0,r.A)(e.districtInfo):(0,r.W)(),constituencyInfo:"constituencyInfo"in e?(0,n.a)(e.constituencyInfo):(0,n.w)(),electoralareaInfo:"electoralareaInfo"in e?c(e.electoralareaInfo):{id:0,regionId:(0,s.A)(),districtId:(0,r.W)(),location:"-"}}}},1148:(e,t,i)=>{i.d(t,{e:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null){return t=this,i=void 0,l=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),c=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function a(e){try{s(l.next(e))}catch(e){n(e)}}function r(e){try{s(l.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(a,r)}s((l=l.apply(t,i||[])).next())}));var t,i,c,l}},8698:(e,t,i)=>{i.d(t,{R:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null,t=""){return i=this,c=void 0,o=function*(){const i=(0,s.Ie)(),c=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,l=yield(0,a.d)(c,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,a)}r((o=o.apply(i,c||[])).next())}));var i,c,l,o}},7824:(e,t,i)=>{i.d(t,{E:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null,t=""){return i=this,c=void 0,o=function*(){const i=(0,s.Ie)(),c=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,l=yield(0,a.d)(c,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,a)}r((o=o.apply(i,c||[])).next())}));var i,c,l,o}},4843:(e,t,i)=>{i.d(t,{S:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null,t=""){return i=this,c=void 0,o=function*(){const i=(0,s.Ie)(),c=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,l=yield(0,a.d)(c,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,a)}r((o=o.apply(i,c||[])).next())}));var i,c,l,o}},2218:(e,t,i)=>{i.d(t,{u:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null,t=""){return i=this,c=void 0,o=function*(){const i=(0,s.Ie)(),c=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,a.d)(c,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,a)}r((o=o.apply(i,c||[])).next())}));var i,c,l,o}},8786:(e,t,i)=>{i.d(t,{s:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null,t=""){return i=this,c=void 0,o=function*(){const i=(0,s.Ie)(),c=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,l=yield(0,a.d)(c,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,a)}r((o=o.apply(i,c||[])).next())}));var i,c,l,o}},7553:(e,t,i)=>{i.d(t,{q:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null){return t=this,i=void 0,l=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),c=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function a(e){try{s(l.next(e))}catch(e){n(e)}}function r(e){try{s(l.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(a,r)}s((l=l.apply(t,i||[])).next())}));var t,i,c,l}},4115:(e,t,i)=>{i.d(t,{d:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null){return t=this,i=void 0,l=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),c=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function a(e){try{s(l.next(e))}catch(e){n(e)}}function r(e){try{s(l.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(a,r)}s((l=l.apply(t,i||[])).next())}));var t,i,c,l}},72:(e,t,i)=>{i.d(t,{L:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null){return t=this,i=void 0,l=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),c=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function a(e){try{s(l.next(e))}catch(e){n(e)}}function r(e){try{s(l.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(a,r)}s((l=l.apply(t,i||[])).next())}));var t,i,c,l}},9605:(e,t,i)=>{i.d(t,{U:()=>c});var n=i(771),a=i(7270),r=i(596),s=i(3600);function c(e=null){return t=this,i=void 0,l=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e),c=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function a(e){try{s(l.next(e))}catch(e){n(e)}}function r(e){try{s(l.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(a,r)}s((l=l.apply(t,i||[])).next())}));var t,i,c,l}},6883:(e,t,i)=>{var n,a=i(9392),r=i(9662),s=i(5713),c=function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.dy`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return a.dy`
      ${this.dt_head.map((e=>a.dy`<th>${e.title}</th>`))}
    `}tbody(){return a.dy`
      ${this.dt_body.map((e=>a.dy`<tr>${e.map((e=>a.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return a.dy`
    ${this.dt_foot.map((e=>a.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const i=this.ajaxHeader[e];t[e]=i}e.headers=t,this.datatable.ajax=e}console.log({$,table:e,"this.datatable":this.datatable}),$(e).DataTable(this.datatable)}createRenderRoot(){return this}};o.styles=[a.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],c([(0,r.C)({type:Number}),l("design:type",Number)],o.prototype,"randomID1",void 0),c([(0,r.C)({type:Number}),l("design:type",Number)],o.prototype,"randomID2",void 0),c([(0,r.C)({type:String}),l("design:type",String)],o.prototype,"ID",void 0),c([(0,r.C)({type:Object}),l("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],o.prototype,"datatable",void 0),c([(0,r.C)({type:Array}),l("design:type",Array)],o.prototype,"dt_head",void 0),c([(0,r.C)({type:Array}),l("design:type",Array)],o.prototype,"dt_foot",void 0),c([(0,r.C)({type:Array}),l("design:type",Array)],o.prototype,"dt_body",void 0),c([(0,r.C)(),l("design:type",Object)],o.prototype,"ajaxHeader",void 0),o=c([(0,s.M)("datatables-new"),l("design:paramtypes",[])],o)},3690:(e,t,i)=>{var n=i(9392),a=i(9662),r=i(5713),s=(i(5185),i(5142),function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[n.iv`
      :host {
        display: block;
      }
    `],s([(0,a.C)({type:String}),c("design:type",String)],l.prototype,"name",void 0),s([(0,a.C)({type:String}),c("design:type",String)],l.prototype,"label",void 0),s([(0,a.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,a.C)({type:String}),c("design:type",String)],l.prototype,"value",void 0),s([(0,a.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,r.M)("switch-input")],l)},1906:(e,t,i)=>{var n=i(9392),a=i(2669),r=i(9662),s=i(5713),c=i(7725),l=i(7052),o=i(4672),d=(i(6811),i(2715),i(8763),i(1877),i(2169),i(2583)),u=i(2506),h=i(3600),m=i(5248),g=i(771),p=i(7270),v=i(596);i(3690);var y,f,b,_,w,A=i(1148),S=i(8698),I=i(7824),$=i(5458),x=i(2218),B=function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function c(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))};let D=class extends n.oi{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/attendance/v2/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/attendance/v2/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,c.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,h.Ie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return n.dy`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this.allowFetch=!0,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(i=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?n.dy`
        ${this.nowSectionData}
      `:2===this.formId?n.dy`
        ${this.todaySectionData}
      `:3===this.formId?n.dy`
        ${this.upcomingSectionData}
      `:4===this.formId?n.dy`
        ${this.dateSectionData}
      `:n.dy`
        ${this.allMeetingsSectionData}
      `}get notFound(){const e=n.dy`<h4 class="text-white">Empty</h4>`,t=n.dy`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return n.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=n.dy`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return n.dy`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?n.dy`${e}${this.notFound}`:n.dy`
      ${e}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceAllSchedules(),null===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const i=e.split(":");return void 0!==i[0]&&t.setHours(Number(i[0])),void 0!==i[1]&&t.setMinutes(Number(i[1])),void 0!==i[2]&&t.setSeconds(Number(i[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,i=(0,l.h)(String(t),!0),a=this.getTime(String(e.startTime)),r=this.getTime(String(e.closeTime));return n.dy`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${i}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${a} - To: ${r} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,$.C)(this.getAttendanceScheduleDay(t),n.dy`<span>Loading...</span>`):(0,$.C)(this.getAttendanceScheduleDate(t),n.dy`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,o.Jx)("meeting-event-id"),t=null!==e?(0,l.t)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return C(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,u.H)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,d.z)(e)).page.id}))}}))}getAttendanceAllSchedules(){return C(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,x.u)(null,"?branchId="+e+"&length=1000000&order__by=-id&isRecuring="+String(this.recurring));console.log({_networkResponse:t}),null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleNow(){return C(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,i=void 0,a=function*(){const t=(0,h.Ie)(),i=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,n=yield(0,p.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new v.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new v.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function c(e){try{l(a.throw(e))}catch(e){r(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,c)}l((a=a.apply(t,i||[])).next())}));var t,i,n,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return C(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,i=void 0,a=function*(){const t=(0,h.Ie)(),i=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,n=yield(0,p.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new v.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new v.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function c(e){try{l(a.throw(e))}catch(e){r(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,c)}l((a=a.apply(t,i||[])).next())}));var t,i,n,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return C(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,i=void 0,a=function*(){const t=(0,h.Ie)(),i=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,n=yield(0,p.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new v.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new v.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function c(e){try{l(a.throw(e))}catch(e){r(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,c)}l((a=a.apply(t,i||[])).next())}));var t,i,n,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return C(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e,t=""){return i=this,n=void 0,r=function*(){const i=(0,h.Ie)(),n=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,a=yield(0,p.d)(n,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new v.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new v.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function s(e){try{l(r.next(e))}catch(e){t(e)}}function c(e){try{l(r.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(s,c)}l((r=r.apply(i,n||[])).next())}));var i,n,a,r}(this.todayDate,"?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return C(this,void 0,void 0,(function*(){const t=yield(0,I.E)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),i=new Date(e.endDate).toLocaleDateString();return n.dy`<li class="border p-1">Every ${(0,$.C)(this.getDayOfWeek(t),n.dy`<i><small>Getting day of week</small>...</i>`)}, until ${i}</li>`}));return n.dy`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return C(this,void 0,void 0,(function*(){const t=yield(0,A.e)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return C(this,void 0,void 0,(function*(){const t=yield(0,S.R)(null,"?meetingEventId="+e+"&length=1000");if(console.log({_networkResponse:t}),null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return n.dy`<li class="border p-1">On ${t}</li>`}));return n.dy`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};D.styles=[n.iv`
   :host { display: block; }
  `],B([(0,a.I)("#getNowMeetingsBtn"),k("design:type","function"==typeof(y=void 0!==m.z&&m.z)?y:Object)],D.prototype,"getNowMeetingsBtn",void 0),B([(0,a.I)("#getAllMeetingsBtn"),k("design:type","function"==typeof(f=void 0!==m.z&&m.z)?f:Object)],D.prototype,"getAllMeetingsBtn",void 0),B([(0,a.I)("#getTodayMeetingsBtn"),k("design:type","function"==typeof(b=void 0!==m.z&&m.z)?b:Object)],D.prototype,"getTodayMeetingsBtn",void 0),B([(0,a.I)("#getUpcomingMeetingsBtn"),k("design:type","function"==typeof(_=void 0!==m.z&&m.z)?_:Object)],D.prototype,"getUpcomingMeetingsBtn",void 0),B([(0,a.I)("#getDateMeetingsBtn"),k("design:type","function"==typeof(w=void 0!==m.z&&m.z)?w:Object)],D.prototype,"getDateMeetingsBtn",void 0),B([(0,r.C)({type:String}),k("design:type",String)],D.prototype,"todayDate",void 0),B([(0,r.C)({type:Number}),k("design:type",Number)],D.prototype,"meetingEventId",void 0),B([(0,r.C)({type:Number}),k("design:type",Number)],D.prototype,"loggedUserId",void 0),B([(0,r.C)({type:Number}),k("design:type",Number)],D.prototype,"formId",void 0),B([(0,r.C)({type:Boolean}),k("design:type",Boolean)],D.prototype,"allowFetch",void 0),B([(0,r.C)({type:Boolean}),k("design:type",Boolean)],D.prototype,"recurring",void 0),B([(0,r.C)({type:String}),k("design:type",String)],D.prototype,"openContentBaseUrl",void 0),B([(0,r.C)({type:String}),k("design:type",String)],D.prototype,"openMeetingEventBaseUrl",void 0),B([(0,r.C)({type:Array}),k("design:type",Array)],D.prototype,"_pageAccesses",void 0),B([(0,r.C)({type:Array}),k("design:type",Array)],D.prototype,"_activeBranchId",void 0),B([(0,r.C)({type:Array}),k("design:type",Array)],D.prototype,"_userLoginInfo",void 0),D=B([(0,s.M)("pdb-attendance-clocking-meeting-picker"),k("design:paramtypes",[])],D)},3629:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipSelectMemberType:()=>d});var n=i(9392),a=i(9662),r=i(5713),s=i(72),c=function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function c(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))};let d=class extends n.oi{constructor(){super(),this.material="true",this.defaultValue=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?n.dy`
        ${this.materialSelectField}
      `:n.dy`
        ${this.selectField}
      `}get materialSelectField(){return null===this.defaultValue?n.dy`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>n.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `:n.dy`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>this.defaultValue===e.id?n.dy`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:n.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `}get selectField(){let e=n.dy``;return e=null===this.defaultValue?n.dy`
      <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
				<option value="0">${this.label}</option>
        ${this._memberCategories.map((e=>n.dy`<option value="${e.id}">${e.category}</option>`))}
			</select>
    `:n.dy`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>this.defaultValue===e.id?n.dy`<option value="${e.id}" selected>${e.category}</option>`:n.dy`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `,n.dy`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return o(this,void 0,void 0,(function*(){const e=yield(0,s.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};d.styles=[n.iv`
   :host { display: block; }
  `],c([(0,a.C)({type:String}),l("design:type",String)],d.prototype,"material",void 0),c([(0,a.C)({type:Number}),l("design:type",Number)],d.prototype,"defaultValue",void 0),c([(0,a.C)({type:String}),l("design:type",String)],d.prototype,"label",void 0),c([(0,a.C)({type:String}),l("design:type",String)],d.prototype,"name",void 0),c([(0,a.C)({type:String}),l("design:type",String)],d.prototype,"id",void 0),c([(0,a.C)({type:String}),l("design:type",String)],d.prototype,"tag_class",void 0),c([(0,a.C)({type:String}),l("design:type",String)],d.prototype,"css_style",void 0),c([(0,a.C)({type:Array}),l("design:type",Array)],d.prototype,"_memberCategories",void 0),d=c([(0,r.M)("pdb-membership-select-member-type"),l("design:paramtypes",[])],d)},5458:(e,t,i)=>{i.d(t,{C:()=>v});var n=i(3692),a=i(875),r=i(4232);const s=(e,t)=>{var i,n;const a=e._$AN;if(void 0===a)return!1;for(const e of a)null===(n=(i=e)._$AO)||void 0===n||n.call(i,t,!1),s(e,t);return!0},c=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},l=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),u(t)}};function o(e){void 0!==this._$AN?(c(this),this._$AM=e,l(this)):this._$AM=e}function d(e,t=!1,i=0){const n=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(n))for(let e=i;e<n.length;e++)s(n[e],!1),c(n[e]);else null!=n&&(s(n,!1),c(n));else s(this,e)}const u=e=>{var t,i,n,r;e.type==a.pX.CHILD&&(null!==(t=(n=e)._$AP)&&void 0!==t||(n._$AP=d),null!==(i=(r=e)._$AQ)&&void 0!==i||(r._$AQ=o))};class h extends a.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),l(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(s(this,e),c(this))}setValue(e){if((0,r.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class m{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class g{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Y=this.q=void 0}}const p=e=>!(0,r.pt)(e)&&"function"==typeof e.then,v=(0,a.XM)(class extends h{constructor(){super(...arguments),this._$Cft=1073741823,this._$Cwt=[],this._$CG=new m(this),this._$CK=new g}render(...e){var t;return null!==(t=e.find((e=>!p(e))))&&void 0!==t?t:n.Jb}update(e,t){const i=this._$Cwt;let a=i.length;this._$Cwt=t;const r=this._$CG,s=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cft);e++){const n=t[e];if(!p(n))return this._$Cft=e,n;e<a&&n===i[e]||(this._$Cft=1073741823,a=0,Promise.resolve(n).then((async e=>{for(;s.get();)await s.get();const t=r.deref();if(void 0!==t){const i=t._$Cwt.indexOf(n);i>-1&&i<t._$Cft&&(t._$Cft=i,t.setValue(e))}})))}return n.Jb}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}})}}]);
//# sourceMappingURL=8330.js.map