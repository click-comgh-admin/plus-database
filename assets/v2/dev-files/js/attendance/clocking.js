"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/clocking"],{3794:(e,t,n)=>{n.r(t)},5234:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClocker:()=>g}),n(3794);var r,i,l,o=n(5862),s=n(9662),c=n(3283),a=(n(3590),n(789),n(3313),n(6883),n(367),n(1511),n(2715),n(7725)),d=(n(8281),n(7052)),m=n(8485),u=n(3600),f=n(4672),b=n(7553),p=n(2869),_=n(2368),h=function(e,t,n,r){var i,l=arguments.length,o=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(l<3?i(o):l>3?i(t,n,o):i(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,r){return new(n||(n=Promise))((function(i,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function s(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))};let g=class extends o.LitElement{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this.memberProfileEditBaseUrl="/member/update-profile?edit=",this._genders=[],this._activeBranchId=null,this._memberType=1,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this.filterBox=new _.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders()}))}disconnectedCallback(){}render(){return o.html`
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
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new _.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}get filterForm(){let e=o.html``;const t=(0,f.urlQueryParams)(),n="filter_gender",r="filter_name",i="filter_identity";let l=null,s=null,c=null;for(const e in t){let o=String(t[e]);o=""===o?null:o,e===n&&(l=o),e===r&&(s=o),e===i&&(c=o)}const a=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield name="${r}" id="${r}" label="Search By Name" 
            value="${null===s?"":s}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,d=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${n}" id="${n}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===l?o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(l)===e.id?o.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,m=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${i}" id="${i}" label="Search By Member ID"
            value="${null===c?"":c}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;return e=o.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${a} ${d} ${m}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n=m.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user?branchId="+t+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const r=this.__dataTable(n);let i={};const l=(0,u.getUserLoginInfoCookie)();return i.Authorization="Token "+l.token,o.html`
      <datatables-new .datatable="${r}" .ajaxHeader="${i}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,f.urlQueryParams)();let t={};for(const n in e){let r=String(e[n]);"filter_gender"!==n&&"filter_name"!==n&&"filter_identity"!==n||(t[n]=r)}let n=(0,f.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}getGenders(){return v(this,void 0,void 0,(function*(){const e=yield(0,b.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,p.GenericGenderInfo_S)(e)))),this._genders=[...this._genders,...t]}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,n,r){const i=(0,d.base64Encode)(String(r.id),!0);return`<div class="flex items-center whitespace-normal">\n                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${t.memberProfileBaseUrl}${i}" type="member"\n                  url="${r.profilePicture}" size="16"></user-profile-photo>\n                <p class="ml-1">${r.firstname} ${r.middlename} ${r.surname}</p>\n              </div>`},orderable:!0},{data:"firstname",render:function(e,n,r){const i=(0,d.base64Encode)(String(r.id),!0);return`<div class="flex flex-col md:flex-row items-center whitespace-normal">\n              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"\n                href="${t.memberProfileBaseUrl}${i}" label="Open"></link-button>\n              <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"\n                href="${t.memberProfileEditBaseUrl}${i}" label="Edit"></link-button>\n            </div>`},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return v(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};g.styles=[o.css`
   :host { display: block; }
  `],h([(0,s.query)('[filter-section-context="btn"]'),y("design:type","function"==typeof(r=void 0!==c.Button&&c.Button)?r:Object)],g.prototype,"filterSectionContextBtn",void 0),h([(0,s.query)('[filter-section-context="container"]'),y("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],g.prototype,"filterSectionContextContainer",void 0),h([(0,s.query)('[make-general-posts="submit_filter_form"]'),y("design:type","function"==typeof(l="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?l:Object)],g.prototype,"filterSectionContextForm",void 0),h([(0,s.property)({type:String}),y("design:type",String)],g.prototype,"memberProfileBaseUrl",void 0),h([(0,s.property)({type:String}),y("design:type",String)],g.prototype,"memberProfileEditBaseUrl",void 0),h([(0,s.property)({type:Array}),y("design:type",Array)],g.prototype,"_genders",void 0),h([(0,s.property)({type:Array}),y("design:type",Array)],g.prototype,"_activeBranchId",void 0),h([(0,s.property)({type:Number}),y("design:type",Number)],g.prototype,"_memberType",void 0),g=h([(0,s.customElement)("pdb-attendance-clocking-clocker"),y("design:paramtypes",[])],g)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_classes_filter_field_box_index_ts-src_addons_functions_views_home_branch_index_ts--6b96a8","src_assets_styles_views_attendance_clocking_main_scss-src_assets_styles_views_datatable_main_scss","shared"],(()=>(5234,e(e.s=5234)))),e.O())])}));
//# sourceMappingURL=clocking.js.map