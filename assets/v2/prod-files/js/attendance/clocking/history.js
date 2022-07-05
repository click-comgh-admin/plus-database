/*! For license information please see history.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1205],{6173:()=>{(()=>{var e,t,n;const i=Symbol(),o=Symbol(),s=Symbol(),l=Symbol(),r=Symbol(),a=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),m=Symbol(),h=Symbol(),p=Symbol(),f=Symbol();class v{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[o]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[a](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[a](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,n=o,a)](e){const t=this[o],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const i=this[m](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const l=this[h](e);if(!n.length)return void this[d](i,l,t);let r=n.length-1,a=i.length-1;for(;r>0&&a>0&&n[r]===i[a];)r--,a--;n[r]!==i[a]&&this[c](n[r],i[a]),r>0&&this[u](n.slice(0,r)),a>0&&this[d](i.slice(0,a),l,null)}[c](e,t){const n=e[l];this[p](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[r]=e[r],t[l]=n,e[r]=void 0,e[l]=void 0}[u](e){for(const t of e){t[r].disconnect(),t[r]=void 0;const e=t[l];for(const t of e)t.inert=!1;t[l]=void 0}}[d](e,t,n){for(const i of e){const e=i.parentNode,o=e.children,s=new Set;for(let e=0;e<o.length;e++){const l=o[e];l===i||!this[p](l)||t&&t.has(l)||(n&&l.inert?n.add(l):(l.inert=!0,s.add(l)))}i[l]=s;const a=new MutationObserver(this[f].bind(this));i[r]=a;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),a.observe(c,{childList:!0})}}[f](e){const t=this[s],n=this[o];for(const i of e){const e=i.target.host||i.target,o=e===document.body?t.length:t.indexOf(e),s=t[o-1],r=s[l];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();r.has(t)&&(t.inert=!1,r.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[p](t)&&(n&&t.inert?n.add(t):(t.inert=!0,r.add(t)))}}}[p](e){return!1===/^(style|template|script)$/.test(e.localName)}[m](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[h](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let i,o,s;const l=t.querySelectorAll("slot");if(l.length&&l[0].assignedNodes)for(i=0;i<l.length;i++)for(s=l[i].assignedNodes({flatten:!0}),o=0;o<s.length;o++)s[o].nodeType===Node.ELEMENT_NODE&&n.add(s[o]);return n}}document.$blockingElements=new v})()},8276:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});var i=n(7153),o=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function l(e){try{a(i.next(e))}catch(e){s(e)}}function r(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}a((i=i.apply(e,t||[])).next())}))};function s(e,t,n=!0){return o(this,void 0,void 0,(function*(){let s=null;t=null==t?{method:"GET"}:t;var l=new Headers;if(l.append("Access-Control-Allow-Origin","*/*"),l.append("Accept","application/json, text/plain, */*"),n&&l.append("Content-Type","application/json"),void 0===t.headers)t.headers=l;else for(const e of l.keys())t.headers[e]=l.get(e);return t.mode="cors",t.redirect="follow",yield(0,i.Z)(e,t,3e5).then((e=>(s=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>o(this,void 0,void 0,(function*(){return console.log({response:e}),{blobData:204===e.status?null:yield e.blob(),response:e,error:""}})))).then((e=>o(this,void 0,void 0,(function*(){if(null!==e.blobData){const t=document.createElement("a");t.href=window.URL.createObjectURL(e.blobData),t.download=(e=>{console.log({headers:e});const t=e.get("Content-Disposition");console.log({header_items:t});const n=t.split(";");console.log({parts:n});const i=n[1].split("=")[1];return console.log({filename:i}),i})(e.response.headers),t.click()}return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},5478:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PdbAttendanceClockingHistory:()=>U});var i=n(9392),o=n(2669),s=n(9662),l=n(5713),r=n(5248),a=(n(1239),n(9261),n(3313),n(6883),n(6811),n(2715),n(7725)),c=(n(8281),n(7052)),d=n(771),u=n(3600),m=n(4672),h=n(7553),p=n(2869),f=n(2368),v=n(5069),y=n(3437),b=n(660),g=n(4843),w=n(8786),_=n(4115),x=n(2892),S=n(72),$=n(9605),k=n(5458),E=n(1551);function C(e){return{member:(0,E.Z)(e.member),memberIdentity:String(e.memberIdentity),totalAttendance:String(e.totalAttendance),totalLateness:String(e.totalLateness),totalBreakOverStay:String(e.totalBreakOverStay),totalOvertime:String(e.totalOvertime),totalUndertime:String(e.totalUndertime),workDoneRating:String(e.workDoneRating),ratedBy:String(e.ratedBy),period:String(e.period),accountType:String(e.accountType)}}n(1906),n(3629);var A,I,N,B=n(2218),T=(n(4277),n(8276)),D=n(596),j=function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function l(e){try{a(i.next(e))}catch(e){s(e)}}function r(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}a((i=i.apply(e,t||[])).next())}))};let U=class extends i.oi{constructor(){super(),this.meetingEventId=0,this.meetingEventIdEnc=null,this.filter_start_date_val="",this.filter_end_date_val="",this.datatablePathUrl="attendance/meeting-event/attendance-history/statistics",this.memberProfileBaseUrl="/member/member-profile?view=",this._genders=[],this._clockingTypes=[],this._memberCategories=[],this._scheduleGroups=[],this._scheduleSubGroups=[],this._activeBranchId=null,this._memberType=1,this.__members=null,this.__schedule=null,this.filterBoxStarted=!1}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return R(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],this.filterBox=new f.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),0===this.meetingEventId||null===this.meetingEventId||Number.isNaN(this.meetingEventId)||(yield this.getAttendanceSchedule(),console.log({"this._schedule-1":this._schedule}),null!==this._schedule&&void 0!==this._schedule&&(console.log({"this._schedule-2":this._schedule}),yield this.getGenders(),yield this.getClockingType(),yield this.getClientMemberCategories(),yield this.getAttendanceScheduleGroup(),yield this.getAttendanceScheduleSubGroup()))}))}disconnectedCallback(){}render(){return 0===this.meetingEventId||null===this.meetingEventId||Number.isNaN(this.meetingEventId)?i.dy`
        <pdb-attendance-clocking-meeting-picker 
          openContentBaseUrl="/attendance/v2/clocking/history?filter_start_date&filter_end_date&meeting-event-id=">
        </pdb-attendance-clocking-meeting-picker>
      `:null===this._schedule?i.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `:void 0===this._schedule?i.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Schedule </span>: Not Found</h4>
            </div>
          </div>
        `:i.dy`
          <span class="flex flex-row md:flex-col w-100"></span>
          <div class="block my-1">
            <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
              filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
            </mwc-button>
          </div>
          <div class="block my-1">
            ${this.filterForm}
          </div>
          <div class="block my-1">
            ${this.downloadBtns}
            ${this.table}
          </div>
        `}get downloadBtns(){return i.dy`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadHistoryExcel}">
        </mwc-button>
        <mwc-button icon="download" class="danger mr-2" 
          label="Download Pdf File" raised @click="${this.downloadHistoryPdf}">
        </mwc-button>
      </div>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new f.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:this.meetingEventIdEnc}]}),this.filterBoxStarted=!0,this.dialog()))}))}getMeetingEventId(){let e=(0,m.Jx)("meeting-event-id"),t=null!==e?(0,c.t)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t),this.meetingEventIdEnc=(0,c.h)(String(this.meetingEventId),!0)}get filterForm(){let e=i.dy``;const t=(0,m.O1)(),n="filter_start_date",o="filter_end_date",s="filter_gender",l="filter_name",r="filter_identity",a="filter_member_category",c="filter_group",d="filter_subgroup",u="filter_from_age",h="filter_to_age";let p=null,f=null,v=null,y=null,b=null,g=null,w=null,_=null,x=null,S=null;for(const e in t){let i=String(t[e]);if(i=""===i?null:i,e===n){if(null===i){const e=new Date;let t=e.getDate()-30;t=e.setDate(t);const n=new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");p=[n[2],n[0],n[1]].join("-")}else{const e=new Date(i).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");p=[e[2],e[0],e[1]].join("-")}this.filter_start_date_val=p}if(e===o){if(null===i){const e=(new Date).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");f=[e[2],e[0],e[1]].join("-")}else{const e=new Date(i).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");f=[e[2],e[0],e[1]].join("-")}this.filter_end_date_val=f}e===s&&(v=i),e===l&&(y=i),e===r&&(b=i),e===a&&(g=Number(i)),e===c&&(w=Number(i)),e===d&&(_=Number(i)),e===u&&(x=Number(i)),e===h&&(S=Number(i))}const $=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${l}" id="${l}" label="Search By Name" 
            value="${null===y?"":y}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,E=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Filter Age In Years
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${u}" id="${u}" label="Pick From Age" 
              value="${null===x?"":x}" class="mr-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${h}" id="${h}" label="Pick To Age" 
              value="${null===S?"":S}" class="ml-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,C=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Member Category
          <pdb-membership-select-member-type defaultValue="${g}" 
            name="${a}" id="${a}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,A=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Pick Dates
          <div class="flex">
            <mwc-textfield type="date" name="${n}" id="${n}"
            value="${p}" class="mr-1" outlined required></mwc-textfield>
            <mwc-textfield type="date" name="${o}" id="${o}"
            value="${f}" class="ml-1" outlined required></mwc-textfield>
          </div>
        </div>
      </div>`,I=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${s}" id="${s}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===v?i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(v)===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,N=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Group
          <mwc-select name="${c}" id="${c}" label="Select Meeting/ Event Group" outlined required>
            ${this._scheduleGroups.map((e=>{const t=e.groupId,n=(0,k.C)(this.getGroup(t),i.dy`<span>Loading...</span>`);return null===w?i.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(w)===t?i.dy`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:i.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,B=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Sub-Group
          <mwc-select name="${d}" id="${d}" label="Select Meeting/ Event Sub-Group" outlined required>
            ${this._scheduleSubGroups.map((e=>{const t=e.subGroupId,n=(0,k.C)(this.getSubGroup(t),i.dy`<span>Loading...</span>`);return null===_?i.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(_)===t?i.dy`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:i.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,T=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${r}" id="${r}" label="Search By Member ID"
            value="${null===b?"":b}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;return e=i.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${C} ${$} ${I} ${E} ${T} ${N} ${B} ${A}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" value="${this.meetingEventIdEnc}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}get __tableHeaders(){return[{title:"NAME"},{title:"MEETING RECORDS"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"NAME"},{title:"MEETING RECORDS"}]}get table(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n=d.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const o=this.__dataTable(n);let s={};const l=(0,u.Ie)();return s.Authorization="Token "+l.token,i.dy`
      <datatables-new .datatable="${o}" .ajaxHeader="${s}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,m.O1)(),t="filter_start_date",n="filter_end_date";let i={};for(const o in e){let s=String(e[o]);o!==t&&o!==n&&"filter_gender"!==o&&"filter_name"!==o&&"filter_identity"!==o&&"filter_member_category"!==o&&"filter_group"!==o&&"filter_subgroup"!==o&&"filter_from_age"!==o&&"filter_to_age"!==o||(i[o]=o===t||o===n?o===t?this.filter_start_date_val:this.filter_end_date_val:s)}let o=(0,m.W3)(i),s=0===o.length?o:"&"+o,l=(0,m.Jx)(t);null===l&&(l=`&filter_start_date=${this.filter_start_date_val}`);let r=(0,m.Jx)(n);return null===r&&(r=`&filter_end_date=${this.filter_end_date_val}`),s=`${s}${l}${r}`,s}getGenders(){return R(this,void 0,void 0,(function*(){const e=yield(0,h.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,p.y)(e)))),this._genders=[...this._genders,...t]}))}downloadHistoryPdf(){return R(this,void 0,void 0,(function*(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n="?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=yield function(e=""){return t=this,n=void 0,o=function*(){const t=(0,u.Ie)(),n=d.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-history/download-pdf"+e,i=yield(0,T.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return i}catch(e){let t=i;return t.error=e,new D.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,s){function l(e){try{a(o.next(e))}catch(e){s(e)}}function r(e){try{a(o.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(l,r)}a((o=o.apply(t,n||[])).next())}));var t,n,i,o}(n);console.log({_networkResponse:i})}))}downloadHistoryExcel(){return R(this,void 0,void 0,(function*(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n="?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=yield function(e=""){return t=this,n=void 0,o=function*(){const t=(0,u.Ie)(),n=d.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-history/download-excel"+e,i=yield(0,T.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return i}catch(e){let t=i;return t.error=e,new D.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,s){function l(e){try{a(o.next(e))}catch(e){s(e)}}function r(e){try{a(o.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(l,r)}a((o=o.apply(t,n||[])).next())}));var t,n,i,o}(n);console.log({_networkResponse:i})}))}getClockingType(){return R(this,void 0,void 0,(function*(){const e=yield(0,_.d)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,v.w)(e)))),this._clockingTypes=[...this._clockingTypes,...t]}))}getAttendanceScheduleGroup(){return R(this,void 0,void 0,(function*(){const e=yield(0,g.S)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleGroups=t.results)}}))}getGroup(e){return R(this,void 0,void 0,(function*(){const t=yield(0,x.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?(0,y.C)(t.response.data).group:t.response.message}))}getAttendanceScheduleSubGroup(){return R(this,void 0,void 0,(function*(){const e=yield(0,w.s)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleSubGroups=t.results)}}))}getSubGroup(e){return R(this,void 0,void 0,(function*(){const t=yield(0,$.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?(0,b.P)(t.response.data).subgroup:t.response.message}))}getClientMemberCategories(){return R(this,void 0,void 0,(function*(){const e=yield(0,S.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}renderCol1Info(e,t,n){const i=C(n),o=i.member,s=(0,c.h)(String(o.id),!0);return`\n      <div class="flex flex-col lg:flex-row m-1 justify-evenly whitespace-normal">\n        <div class="flex m-1 justify-evenly">\n          <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${s}" type="member"\n            url="${o.profilePicture}" size="32"></user-profile-photo>\n        </div>\n        <div class="flex flex-col m-1 justify-evenly">\n          <h3 class="whitespace-nowrap font-bold text-lg">${o.firstname} ${o.middlename} ${o.surname}</h3>\n          <p class="whitespace-nowrap text-base">${i.period}</p>\n          <p class="whitespace-nowrap text-sm">Total Work Done Rating: ${i.workDoneRating}</p>\n          <p class="whitespace-nowrap text-xs">Total Overtime: ${i.totalOvertime}</p>\n          <div class="whitespace-nowrap block sm:hidden">\n            ${this.renderCol2Info(e,t,n)}\n          </div>\n        </div>\n      </div>\n    `}renderCol2Info(e,t,n){const i=C(n),o=i.member,s=this._schedule.data.expectedMonthlyAttendance;return`\n      <div class="flex flex-col m-1 justify-evenly whitespace-normal">\n        <div class="flex flex-col m-1 justify-evenly">\n          <h3 class="whitespace-nowrap font-bold text-lg">Total Attendance: ${i.totalAttendance} </h3>\n          <p class="whitespace-nowrap text-base">Expected Monthly Attendance: ${s}</p>\n        </div>\n        <div class="flex flex-col m-1 justify-evenly">\n          \x3c!-- <p class="whitespace-nowrap my-1 hidden">\n            ${this.view_attendance_details(i)}\n            <mwc-button class="button info" label="Attendance Details" outlined open-dialog-btn="attendance-details-${o.id}"></mwc-button>\n          </p> --\x3e\n          <div class="whitespace-nowrap my-1">\n            ${this.view_summary_records(i,o)}\n            <mwc-button class="button danger" outlined open-dialog-btn="summary-records-${o.id}">\n              <mwc-icon>bar_chart</mwc-icon> Summary Records\n            </mwc-button>\n          </div>\n        </div>\n      </div>\n    `}view_attendance_details(e){}view_summary_records(e,t){const n=(0,c.h)(String(t.id),!0);return`\n      <mwc-dialog open-this-dialog="summary-records-${t.id}" heading="Summary Records">\n        <div class="flex flex-col m-1 justify-evenly whitespace-normal">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${n}" type="member"\n              url="${t.profilePicture}" size="32"></user-profile-photo>\n          </div>\n          <div class="flex flex-col m-1 justify-evenly">\n            <h3 class="whitespace-nowrap font-bold text-lg">${t.firstname} ${t.middlename} ${t.surname}</h3>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Attendance</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.totalAttendance}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Lateness:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.totalLateness}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Break Overstay:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.totalBreakOverStay}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Over-time:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.totalOvertime}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Under-time:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.totalUndertime}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Period:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.period}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Work Done Rating:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.workDoneRating}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Rated By:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.ratedBy}</p>\n            </div>\n          </div>\n        </div>\n        <mwc-button\n          slot="secondaryAction"\n          dialogAction="close">\n          Cancel\n        </mwc-button>\n      </mwc-dialog>\n    `}dialog(){document.querySelectorAll("[open-dialog-btn]").forEach((e=>{console.log({btn:e}),e.addEventListener("click",(e=>{console.log({e}),this.showDialog(e)}))}))}showDialog(e){console.log({event:e});const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}getAttendanceSchedule(){return R(this,void 0,void 0,(function*(){const e=yield(0,B.u)(this.meetingEventId);if(null===e)this._schedule=void 0;else{const t=e.response;t.success?this._schedule=t:this._schedule=void 0}}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"member",render:(e,n,i)=>t.renderCol1Info(e,n,i),orderable:!0},{data:"accountType",render:(e,n,i)=>t.renderCol2Info(e,n,i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",orderable:!1,checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return R(this,void 0,void 0,(function*(){e.aoData,t.dialog()}))},responsive:{details:!1},dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};U.styles=[i.iv`
   :host { display: block; }
  `],j([(0,o.I)('[filter-section-context="btn"]'),O("design:type","function"==typeof(A=void 0!==r.z&&r.z)?A:Object)],U.prototype,"filterSectionContextBtn",void 0),j([(0,o.I)('[filter-section-context="container"]'),O("design:type","function"==typeof(I="undefined"!=typeof Element&&Element)?I:Object)],U.prototype,"filterSectionContextContainer",void 0),j([(0,o.I)('[make-general-posts="submit_filter_form"]'),O("design:type","function"==typeof(N="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?N:Object)],U.prototype,"filterSectionContextForm",void 0),j([(0,s.C)({type:Number}),O("design:type",Number)],U.prototype,"meetingEventId",void 0),j([(0,s.C)({type:String}),O("design:type",String)],U.prototype,"meetingEventIdEnc",void 0),j([(0,s.C)({type:String}),O("design:type",String)],U.prototype,"filter_start_date_val",void 0),j([(0,s.C)({type:String}),O("design:type",String)],U.prototype,"filter_end_date_val",void 0),j([(0,s.C)({type:String}),O("design:type",String)],U.prototype,"datatablePathUrl",void 0),j([(0,s.C)({type:String}),O("design:type",String)],U.prototype,"memberProfileBaseUrl",void 0),j([(0,s.C)({type:Array}),O("design:type",Array)],U.prototype,"_genders",void 0),j([(0,s.C)({type:Array}),O("design:type",Array)],U.prototype,"_clockingTypes",void 0),j([(0,s.C)({type:Array}),O("design:type",Array)],U.prototype,"_memberCategories",void 0),j([(0,s.C)({type:Array}),O("design:type",Array)],U.prototype,"_scheduleGroups",void 0),j([(0,s.C)({type:Array}),O("design:type",Array)],U.prototype,"_scheduleSubGroups",void 0),j([(0,s.C)({type:Array}),O("design:type",Array)],U.prototype,"_activeBranchId",void 0),j([(0,s.C)({type:Number}),O("design:type",Number)],U.prototype,"_memberType",void 0),j([(0,s.C)({type:Boolean}),O("design:type",Boolean)],U.prototype,"filterBoxStarted",void 0),U=j([(0,l.M)("pdb-attendance-clocking-history"),O("design:paramtypes",[])],U)}},e=>(e.O(0,[2185,5744,9564,2459,7879,5291,6553,2585,8731,8330,3712],(()=>(5478,e(e.s=5478)))),e.O())])}));
//# sourceMappingURL=history.js.map