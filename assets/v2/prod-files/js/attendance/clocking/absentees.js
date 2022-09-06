"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9368],{8276:(e,t,n)=>{n.d(t,{w:()=>l});var i=n(7153),o=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{c(i.next(e))}catch(e){l(e)}}function s(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))};function l(e,t,n=!0){return o(this,void 0,void 0,(function*(){let l=null;t=null==t?{method:"GET"}:t;var r=new Headers;if(r.append("Access-Control-Allow-Origin","*/*"),r.append("Accept","application/json, text/plain, */*"),n&&r.append("Content-Type","application/json"),void 0===t.headers)t.headers=r;else for(const e of r.keys())t.headers[e]=r.get(e);return t.mode="cors",t.redirect="follow",yield(0,i.Z)(e,t,3e5).then((e=>(l=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>o(this,void 0,void 0,(function*(){return console.log({response:e}),{blobData:204===e.status?null:yield e.blob(),response:e,error:""}})))).then((e=>o(this,void 0,void 0,(function*(){if(null!==e.blobData){const t=document.createElement("a");t.href=window.URL.createObjectURL(e.blobData),t.download=(e=>{console.log({headers:e});const t=e.get("Content-Disposition");console.log({header_items:t});const n=t.split(";");console.log({parts:n});const i=n[1].split("=")[1];return console.log({filename:i}),i})(e.response.headers),t.click()}return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},4429:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingAbsentees:()=>O});var i,o,l,r=n(9392),s=n(2669),c=n(9662),a=n(5713),d=n(5248),u=(n(9261),n(3313),n(6883),n(7725)),m=(n(3690),n(7052)),p=n(771),f=n(3600),b=n(4672),h=n(7553),v=n(2869),y=n(2368),g=(n(1906),n(72)),_=n(4115),w=n(5069),k=n(2892),$=(n(3629),n(4843)),x=n(5458),C=n(3437),I=n(660),S=n(8786),A=n(9605),E=(n(7546),n(9987),n(5647),n(8276)),N=n(596),B=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r},T=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},G=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{c(i.next(e))}catch(e){l(e)}}function s(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))};let O=class extends r.oi{constructor(){super(),this.meetingEventId=0,this.meetingEventIdEnc=null,this.datatablePathUrl="attendance/meeting-event/attendance/absentees",this._genders=[],this._clockingTypes=[],this._memberCategories=[],this._scheduleGroups=[],this._scheduleSubGroups=[],this._activeBranchId=null,this._memberType=1,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return G(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,u.hk)();this._activeBranchId=null===t?null:[t],this.filterBox=new y.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders(),yield this.getClockingType(),yield this.getClientMemberCategories(),yield this.getAttendanceScheduleGroup(),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){return 0===this.meetingEventId||null===this.meetingEventId||Number.isNaN(this.meetingEventId)?r.dy`
        <pdb-attendance-clocking-meeting-picker
          openContentBaseUrl="/attendance/v2/clocking/absentees?meeting-event-id=">
        </pdb-attendance-clocking-meeting-picker>
      `:r.dy`
        <span class="flex flex-row md:flex-col w-100"></span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}
        </div>
        <div class="block my-1 overflow-x-scroll">
          <hr class="my-2"/>
          ${this.downloadBtns}
          ${this.table}
        </div>
      `}get downloadBtns(){return r.dy`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadAbsenteesExcel}">
        </mwc-button>
        <mwc-button icon="download" class="danger mr-2" 
          label="Download Pdf File" raised @click="${this.downloadAbsenteesPdf}">
        </mwc-button>
      </div>
    `}firstUpdated(){this.filterBox=new y.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:this.meetingEventIdEnc}]})}getMeetingEventId(){let e=(0,b.Jx)("meeting-event-id"),t=null!==e?(0,m.t)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t),this.meetingEventIdEnc=(0,m.h)(String(this.meetingEventId),!0)}get filterForm(){let e=r.dy``;const t=(0,b.O1)(),n="filter_date",i="filter_gender",o="filter_name",l="filter_identity",s="filter_member_category",c="filter_group",a="filter_subgroup",d="filter_from_age",u="filter_to_age";let m=null,p=null,f=null,h=null,v=null,y=null,g=null,_=null,w=null;for(const e in t){let r=String(t[e]);if(r=""===r?null:r,e===n)if(null===r)m="";else{const e=new Date(r).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");m=[e[2],e[0],e[1]].join("-")}e===i&&(p=r),e===o&&(f=r),e===l&&(h=r),e===s&&(v=Number(r)),e===c&&(y=Number(r)),e===a&&(g=Number(r)),e===d&&(_=Number(r)),e===u&&(w=Number(r))}const k=r.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${o}" id="${o}" label="Search By Name" 
            value="${null===f?"":f}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,$=r.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Filter Age In Years
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${d}" id="${d}" label="Pick From Age" 
              value="${null===_?"":_}" class="mx-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${u}" id="${u}" label="Pick To Age" 
              value="${null===w?"":w}" class="mx-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,C=r.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Member Category
          <pdb-membership-select-member-type defaultValue="${v}" 
            name="${s}" id="${s}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,I=r.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Pick Date
          <mwc-textfield type="date" name="${n}" id="${n}"
            value="${m}" outlined required></mwc-textfield>
        </div>
      </div>`,S=r.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${i}" id="${i}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===p?r.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(p)===e.id?r.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:r.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,A=r.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Group
          <mwc-select name="${c}" id="${c}" label="Select Meeting/ Event Group" outlined required>
            ${this._scheduleGroups.map((e=>{const t=e.groupId,n=(0,x.C)(this.getGroup(t),r.dy`<span>Loading...</span>`);return null===y?r.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(y)===t?r.dy`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:r.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,E=r.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Sub-Group
          <mwc-select name="${a}" id="${a}" label="Select Meeting/ Event Sub-Group" outlined required>
            ${this._scheduleSubGroups.map((e=>{const t=e.subGroupId,n=(0,x.C)(this.getSubGroup(t),r.dy`<span>Loading...</span>`);return null===g?r.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(g)===t?r.dy`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:r.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,N=r.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${l}" id="${l}" label="Search By Member ID"
            value="${null===h?"":h}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;return e=r.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${C} ${k} ${S} ${$} ${N} ${A} ${E} ${I}
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
      </form>`,e}get __tableHeaders(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get table(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n=p.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=this.__dataTable(n);let o={};const l=(0,f.Ie)();return o.Authorization="Token "+l.token,r.dy`
      <datatables-new .datatable="${i}" .ajaxHeader="${o}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){return`<clocker-table-parts-first data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' ></clocker-table-parts-first>`}renderClockInInfo(e,t,n){return`<clocker-table-parts-second data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' >\n    </clocker-table-parts-second>`}renderClockOutInfo(e,t,n){return`<clocker-table-parts-third data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' >\n    </clocker-table-parts-third>`}get urlQueryString(){const e=(0,b.O1)();let t={};for(const n in e){let i=String(e[n]);"filter_date"!==n&&"filter_gender"!==n&&"filter_name"!==n&&"filter_identity"!==n&&"filter_member_category"!==n&&"filter_group"!==n&&"filter_subgroup"!==n&&"filter_from_age"!==n&&"filter_to_age"!==n||(t[n]=i)}let n=(0,b.W3)(t);return 0===n.length?n:"&"+n}getGenders(){return G(this,void 0,void 0,(function*(){const e=yield(0,h.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,v.y)(e)))),this._genders=[...this._genders,...t]}))}downloadAbsenteesPdf(){return G(this,void 0,void 0,(function*(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n="?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=yield function(e=""){return t=this,n=void 0,o=function*(){const t=(0,f.Ie)(),n=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/download-absentees-pdf"+e,i=yield(0,E.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return i}catch(e){let t=i;return t.error=e,new N.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,l){function r(e){try{c(o.next(e))}catch(e){l(e)}}function s(e){try{c(o.throw(e))}catch(e){l(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,s)}c((o=o.apply(t,n||[])).next())}));var t,n,i,o}(n);console.log({_networkResponse:i})}))}downloadAbsenteesExcel(){return G(this,void 0,void 0,(function*(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n="?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=yield function(e=""){return t=this,n=void 0,o=function*(){const t=(0,f.Ie)(),n=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/download-absentees-excel"+e,i=yield(0,E.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return i}catch(e){let t=i;return t.error=e,new N.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,l){function r(e){try{c(o.next(e))}catch(e){l(e)}}function s(e){try{c(o.throw(e))}catch(e){l(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,s)}c((o=o.apply(t,n||[])).next())}));var t,n,i,o}(n);console.log({_networkResponse:i})}))}getClockingType(){return G(this,void 0,void 0,(function*(){const e=yield(0,_.d)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,w.w)(e)))),this._clockingTypes=[...this._clockingTypes,...t]}))}getAttendanceScheduleGroup(){return G(this,void 0,void 0,(function*(){const e=yield(0,$.S)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleGroups=t.results)}}))}getGroup(e){return G(this,void 0,void 0,(function*(){const t=yield(0,k.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?(0,C.C)(t.response.data).group:t.response.message}))}getAttendanceScheduleSubGroup(){return G(this,void 0,void 0,(function*(){const e=yield(0,S.s)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleSubGroups=t.results)}}))}getSubGroup(e){return G(this,void 0,void 0,(function*(){const t=yield(0,A.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?(0,I.P)(t.response.data).subgroup:t.response.message}))}getClientMemberCategories(){return G(this,void 0,void 0,(function*(){const e=yield(0,g.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.renderMemberInfo(e,n,i),orderable:!0},{data:"inTime",render:(e,n,i)=>t.renderClockInInfo(e,n,i),orderable:!0},{data:"outTime",render:(e,n,i)=>t.renderClockOutInfo(e,n,i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return G(this,void 0,void 0,(function*(){e.aoData}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};O.styles=[r.iv`
   :host { display: block; }
  `],B([(0,s.I)('[filter-section-context="btn"]'),T("design:type","function"==typeof(i=void 0!==d.z&&d.z)?i:Object)],O.prototype,"filterSectionContextBtn",void 0),B([(0,s.I)('[filter-section-context="container"]'),T("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],O.prototype,"filterSectionContextContainer",void 0),B([(0,s.I)('[make-general-posts="submit_filter_form"]'),T("design:type","function"==typeof(l="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?l:Object)],O.prototype,"filterSectionContextForm",void 0),B([(0,c.C)({type:Number}),T("design:type",Number)],O.prototype,"meetingEventId",void 0),B([(0,c.C)({type:String}),T("design:type",String)],O.prototype,"meetingEventIdEnc",void 0),B([(0,c.C)({type:String}),T("design:type",String)],O.prototype,"datatablePathUrl",void 0),B([(0,c.C)({type:Array}),T("design:type",Array)],O.prototype,"_genders",void 0),B([(0,c.C)({type:Array}),T("design:type",Array)],O.prototype,"_clockingTypes",void 0),B([(0,c.C)({type:Array}),T("design:type",Array)],O.prototype,"_memberCategories",void 0),B([(0,c.C)({type:Array}),T("design:type",Array)],O.prototype,"_scheduleGroups",void 0),B([(0,c.C)({type:Array}),T("design:type",Array)],O.prototype,"_scheduleSubGroups",void 0),B([(0,c.C)({type:Array}),T("design:type",Array)],O.prototype,"_activeBranchId",void 0),B([(0,c.C)({type:Number}),T("design:type",Number)],O.prototype,"_memberType",void 0),O=B([(0,a.M)("pdb-attendance-clocking-absentees"),T("design:paramtypes",[])],O)}},e=>(e.O(0,[2185,5744,9674,2459,7879,5291,6553,2585,8248,2036,2798,3712],(()=>(4429,e(e.s=4429)))),e.O())])}));
//# sourceMappingURL=absentees.js.map