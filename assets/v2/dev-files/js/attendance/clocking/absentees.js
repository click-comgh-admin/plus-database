"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/clocking/absentees"],{78276:(e,t,n)=>{n.r(t),n.d(t,{http_download:()=>s});var i=n(67153),r=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((i=i.apply(e,t||[])).next())}))};function s(e,t,n=!0){return r(this,void 0,void 0,(function*(){let s=null;t=null==t?{method:"GET"}:t;var o=new Headers;if(o.append("Access-Control-Allow-Origin","*/*"),o.append("Accept","application/json, text/plain, */*"),n&&o.append("Content-Type","application/json"),void 0===t.headers)t.headers=o;else for(const e of o.keys())t.headers[e]=o.get(e);return t.mode="cors",t.redirect="follow",yield(0,i.default)(e,t,3e5).then((e=>(s=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>r(this,void 0,void 0,(function*(){return{blobData:204===e.status?null:yield e.blob(),response:e,error:""}})))).then((e=>r(this,void 0,void 0,(function*(){if(null!==e.blobData){const t=document.createElement("a");t.href=window.URL.createObjectURL(e.blobData),t.download=e.response.headers.get("Content-Disposition").split(";")[1].split("=")[1],t.click()}return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},73315:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceDownloadAbsenteesExcel:()=>l});var i=n(48485),r=n(78276),s=n(14492),o=n(33600);function l(e=""){return t=this,n=void 0,c=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/download-absentees-excel"+e,l=yield(0,r.http_download)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return l}catch(e){let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function r(e){try{o(c.next(e))}catch(e){i(e)}}function s(e){try{o(c.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,s)}o((c=c.apply(t,n||[])).next())}));var t,n,l,c}},98543:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceDownloadAbsenteesPdf:()=>l});var i=n(48485),r=n(78276),s=n(14492),o=n(33600);function l(e=""){return t=this,n=void 0,c=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/download-absentees-pdf"+e,l=yield(0,r.http_download)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return l}catch(e){let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function r(e){try{o(c.next(e))}catch(e){i(e)}}function s(e){try{o(c.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,s)}o((c=c.apply(t,n||[])).next())}));var t,n,l,c}},23268:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingAbsentees:()=>N}),n(73794);var i,r,s,o=n(85862),l=n(59662),c=n(23283),a=(n(40789),n(63313),n(16883),n(30367),n(17725)),d=(n(43690),n(67052)),u=n(48485),m=n(33600),p=n(44672),_=n(87553),h=n(72869),f=n(52368),b=(n(60997),n(90072)),v=n(14115),g=n(45069),y=n(2892),w=(n(43629),n(34843)),k=n(58881),x=n(33437),$=n(660),S=n(88786),A=n(89605),E=(n(47546),n(97601),n(21694),n(73315)),C=n(98543),I=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},G=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((i=i.apply(e,t||[])).next())}))};let N=class extends o.LitElement{constructor(){super(),this.meetingEventId=0,this.meetingEventIdEnc=null,this.datatablePathUrl="attendance/meeting-event/attendance/absentees",this._genders=[],this._clockingTypes=[],this._memberCategories=[],this._scheduleGroups=[],this._scheduleSubGroups=[],this._activeBranchId=null,this._memberType=1,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return T(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this.filterBox=new f.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders(),yield this.getClockingType(),yield this.getClientMemberCategories(),yield this.getAttendanceScheduleGroup(),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){return 0===this.meetingEventId||null===this.meetingEventId||Number.isNaN(this.meetingEventId)?o.html`
        <pdb-attendance-clocking-meeting-picker
          openContentBaseUrl="/attendance/v2/clocking/absentees?meeting-event-id=">
        </pdb-attendance-clocking-meeting-picker>
      `:o.html`
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
      `}get downloadBtns(){return o.html`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadAbsenteesExcel}">
        </mwc-button>
        <mwc-button icon="download" class="danger mr-2" 
          label="Download Pdf File" raised @click="${this.downloadAbsenteesPdf}">
        </mwc-button>
      </div>
    `}firstUpdated(){this.filterBox=new f.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:this.meetingEventIdEnc}]})}getMeetingEventId(){let e=(0,p.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,d.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t),this.meetingEventIdEnc=(0,d.base64Encode)(String(this.meetingEventId),!0)}get filterForm(){let e=o.html``;const t=(0,p.urlQueryParams)(),n="filter_date",i="filter_gender",r="filter_name",s="filter_identity",l="filter_member_category",c="filter_group",a="filter_subgroup",d="filter_from_age",u="filter_to_age";let m=null,_=null,h=null,f=null,b=null,v=null,g=null,y=null,w=null;for(const e in t){let o=String(t[e]);if(o=""===o?null:o,e===n)if(null===o)m="";else{const e=new Date(o).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");m=[e[2],e[0],e[1]].join("-")}e===i&&(_=o),e===r&&(h=o),e===s&&(f=o),e===l&&(b=Number(o)),e===c&&(v=Number(o)),e===a&&(g=Number(o)),e===d&&(y=Number(o)),e===u&&(w=Number(o))}const x=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${r}" id="${r}" label="Search By Name" 
            value="${null===h?"":h}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,$=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Filter Age In Years
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${d}" id="${d}" label="Pick From Age" 
              value="${null===y?"":y}" class="mx-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${u}" id="${u}" label="Pick To Age" 
              value="${null===w?"":w}" class="mx-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,S=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Member Category
          <pdb-membership-select-member-type defaultValue="${b}" 
            name="${l}" id="${l}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,A=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Pick Date
          <mwc-textfield type="date" name="${n}" id="${n}"
            value="${m}" outlined required></mwc-textfield>
        </div>
      </div>`,E=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${i}" id="${i}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===_?o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(_)===e.id?o.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,C=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Group
          <mwc-select name="${c}" id="${c}" label="Select Meeting/ Event Group" outlined required>
            ${this._scheduleGroups.map((e=>{const t=e.groupId,n=(0,k.until)(this.getGroup(t),o.html`<span>Loading...</span>`);return null===v?o.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(v)===t?o.html`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:o.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,I=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Sub-Group
          <mwc-select name="${a}" id="${a}" label="Select Meeting/ Event Sub-Group" outlined required>
            ${this._scheduleSubGroups.map((e=>{const t=e.subGroupId,n=(0,k.until)(this.getSubGroup(t),o.html`<span>Loading...</span>`);return null===g?o.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(g)===t?o.html`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:o.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,G=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${s}" id="${s}" label="Search By Member ID"
            value="${null===f?"":f}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;return e=o.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${S} ${x} ${E} ${$} ${G} ${C} ${I} ${A}
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
      </form>`,e}get __tableHeaders(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get table(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n=u.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=this.__dataTable(n);let r={};const s=(0,m.getUserLoginInfoCookie)();return r.Authorization="Token "+s.token,o.html`
      <datatables-new .datatable="${i}" .ajaxHeader="${r}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){return`<clocker-table-parts-first data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' ></clocker-table-parts-first>`}renderClockInInfo(e,t,n){return`<clocker-table-parts-second data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' >\n    </clocker-table-parts-second>`}renderClockOutInfo(e,t,n){return`<clocker-table-parts-third data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' >\n    </clocker-table-parts-third>`}get urlQueryString(){const e=(0,p.urlQueryParams)();let t={};for(const n in e){let i=String(e[n]);"filter_date"!==n&&"filter_gender"!==n&&"filter_name"!==n&&"filter_identity"!==n&&"filter_member_category"!==n&&"filter_group"!==n&&"filter_subgroup"!==n&&"filter_from_age"!==n&&"filter_to_age"!==n||(t[n]=i)}let n=(0,p.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}getGenders(){return T(this,void 0,void 0,(function*(){const e=yield(0,_.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,h.GenericGenderInfo_S)(e)))),this._genders=[...this._genders,...t]}))}downloadAbsenteesPdf(){return T(this,void 0,void 0,(function*(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n="?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString,yield(0,C.GET_AttendanceDownloadAbsenteesPdf)(n)}))}downloadAbsenteesExcel(){return T(this,void 0,void 0,(function*(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n="?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString,yield(0,E.GET_AttendanceDownloadAbsenteesExcel)(n)}))}getClockingType(){return T(this,void 0,void 0,(function*(){const e=yield(0,v.GET_GenericMeetingEventClockingType)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,g.GenericMeetingEventClockingTypeInfo_S)(e)))),this._clockingTypes=[...this._clockingTypes,...t]}))}getAttendanceScheduleGroup(){return T(this,void 0,void 0,(function*(){const e=yield(0,w.GET_AttendanceScheduleGroup)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleGroups=t.results)}}))}getGroup(e){return T(this,void 0,void 0,(function*(){const t=yield(0,y.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?(0,x.GroupingsGroup_S)(t.response.data).group:t.response.message}))}getAttendanceScheduleSubGroup(){return T(this,void 0,void 0,(function*(){const e=yield(0,S.GET_AttendanceScheduleSubGroup)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleSubGroups=t.results)}}))}getSubGroup(e){return T(this,void 0,void 0,(function*(){const t=yield(0,A.GET_MemberGroupingsSubGroups)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?(0,$.GroupingsSubGroup_S)(t.response.data).subgroup:t.response.message}))}getClientMemberCategories(){return T(this,void 0,void 0,(function*(){const e=yield(0,b.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.renderMemberInfo(e,n,i),orderable:!0},{data:"inTime",render:(e,n,i)=>t.renderClockInInfo(e,n,i),orderable:!0},{data:"outTime",render:(e,n,i)=>t.renderClockOutInfo(e,n,i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return T(this,void 0,void 0,(function*(){e.aoData}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};N.styles=[o.css`
   :host { display: block; }
  `],I([(0,l.query)('[filter-section-context="btn"]'),G("design:type","function"==typeof(i=void 0!==c.Button&&c.Button)?i:Object)],N.prototype,"filterSectionContextBtn",void 0),I([(0,l.query)('[filter-section-context="container"]'),G("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],N.prototype,"filterSectionContextContainer",void 0),I([(0,l.query)('[make-general-posts="submit_filter_form"]'),G("design:type","function"==typeof(s="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?s:Object)],N.prototype,"filterSectionContextForm",void 0),I([(0,l.property)({type:Number}),G("design:type",Number)],N.prototype,"meetingEventId",void 0),I([(0,l.property)({type:String}),G("design:type",String)],N.prototype,"meetingEventIdEnc",void 0),I([(0,l.property)({type:String}),G("design:type",String)],N.prototype,"datatablePathUrl",void 0),I([(0,l.property)({type:Array}),G("design:type",Array)],N.prototype,"_genders",void 0),I([(0,l.property)({type:Array}),G("design:type",Array)],N.prototype,"_clockingTypes",void 0),I([(0,l.property)({type:Array}),G("design:type",Array)],N.prototype,"_memberCategories",void 0),I([(0,l.property)({type:Array}),G("design:type",Array)],N.prototype,"_scheduleGroups",void 0),I([(0,l.property)({type:Array}),G("design:type",Array)],N.prototype,"_scheduleSubGroups",void 0),I([(0,l.property)({type:Array}),G("design:type",Array)],N.prototype,"_activeBranchId",void 0),I([(0,l.property)({type:Number}),G("design:type",Number)],N.prototype,"_memberType",void 0),N=I([(0,l.customElement)("pdb-attendance-clocking-absentees"),G("design:paramtypes",[])],N)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_members_select-member-type_index_ts","src_assets_styles_views_attendance_clocking_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_clients_branches_-dc6079","src_addons_functions_views_home_branch_index_ts-src_addons_interfaces_clients_users_access_ts-5063eb","src_assets_styles_views_attendance_clocking_main_scss-src_addons_interfaces_attendance_member-e0624a","src_addons_interfaces_generic_gender_index_ts-src_addons_interfaces_generic_meeting_event_clo-a65026","src_view_attendance_clocking_clocker_table_parts_first_ts-src_view_attendance_clocking_clocke-d561af","shared"],(()=>(23268,e(e.s=23268)))),e.O())])}));
//# sourceMappingURL=absentees.js.map