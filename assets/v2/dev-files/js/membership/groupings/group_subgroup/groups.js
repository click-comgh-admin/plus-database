"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/group_subgroup/groups"],{99755:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsGroupSubgroupGroupView:()=>w}),n(73794);var r,o,s,i=n(85862),l=n(59662),a=n(67052),c=n(90072),d=n(23283),u=(n(33590),n(40789),n(63313),n(16883),n(30367),n(38281),n(48485)),m=n(33600),p=n(17725),b=n(44672),h=n(52368),f=(n(43629),n(26224)),_=n(10602),g=(n(92715),function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function l(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}a((r=r.apply(e,t||[])).next())}))};let w=class extends i.LitElement{constructor(){super(),this._memberCategories=[],this._activeBranchId=null,this._memberType=1,this._branches=[],this._userLoginInfo=null,this.datatablePathUrl="members/groupings/group/table",this.filterBoxStarted=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,p.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,m.getUserLoginInfoCookie)()],this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){return i.html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}<br />
      </div>
      <div class="block my-1">
        ${this.table}
      </div>
    `}renderColOne(e,t,n){return`\n      <div class="flex flex-col whitespace-normal justify-between content-between">\n        <p class="p-2 shadow-sm my-2 w-full">${n.group}</p>\n      </div>\n    `}renderColTwo(e,t,n){const r=n.id,o=(0,a.base64Encode)(String(r),!0);return`\n      <div class="flex flex-col whitespace-normal justify-between content-between">\n        <mwc-button class="button danger" outlined delete-this-item="${r}">\n          <mwc-icon class="mr-1">delete_forever</mwc-icon> Delete\n        </mwc-button>\n        <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${u.CONSTANTS.URLS.PDB_CLIENT}groupings/group/edit-group?view-group=${o}"\n          label="Update">\n        </link-button>\n      </div>\n    `}get urlQueryString(){const e=(0,b.urlQueryParams)(),t="branchId",n="memberCategoryId";let r={};for(const o in e){let s=String(e[o]);o!==t&&o!==n||(r[o]=s)}if(!(t in r)){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),r.branchId=e}n in r||(r.memberCategoryId="1");let o=(0,b.urlQueryParamsJoin)(r);return 0===o.length?o:"&"+o}get filterForm(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);let t=i.html``;const n=(0,b.urlQueryParams)(),r="branchId",o="memberCategoryId";let s=1,l=e;for(const e in n){let t=String(n[e]);t=""===t?null:t,e===o&&(s=Number(t)),e===r&&(l=Number(t))}const a=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
            name="${r}" id="${r}"
            outlined required>
            ${1===e?i.html`
              <mwc-list-item value="0">Select Branch</mwc-list-item>
              ${this._branches.map((e=>l===e.id?i.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
            `:i.html`
              ${this._branches.map((t=>{if(t.id===e)return i.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
            `}
          </mwc-select>
        </div>
      </div>`,c=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${s}" 
            name="${o}" id="${o}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;return t=i.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${a} ${c}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,t}get __tableHeaders(){return[{title:"Group"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Group"},{title:"Action"}]}get table(){let e=u.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const r=(0,m.getUserLoginInfoCookie)();return n.Authorization="Token "+r.token,i.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0,this.dialog()))}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,r)=>t.renderColOne(e,n,r),orderable:!0},{data:"group",render:(e,n,r)=>t.renderColTwo(e,n,r),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return v(this,void 0,void 0,(function*(){e.aoData,t.deleteMemberFx()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells"],select:!0}}deleteMemberFx(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteItemFromList(e)}))}))}deleteItemFromList(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=e.currentTarget.getAttribute("delete-this-item"),n=Number.isNaN(t)?0:Number(t);yield(0,_.DELETE_GroupingsGroup)(n)}))}dialog(){document.querySelectorAll("[open-dialog-btn]").forEach((e=>{e.addEventListener("click",(e=>{this.showDialog(e)}))}))}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}getBranches(){return v(this,void 0,void 0,(function*(){const e=yield(0,f.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getClientMemberCategories(){return v(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};w.styles=[i.css`
   :host { display: block; }
  `],g([(0,l.query)('[filter-section-context="btn"]'),y("design:type","function"==typeof(r=void 0!==d.Button&&d.Button)?r:Object)],w.prototype,"filterSectionContextBtn",void 0),g([(0,l.query)('[filter-section-context="container"]'),y("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],w.prototype,"filterSectionContextContainer",void 0),g([(0,l.query)('[make-general-posts="submit_filter_form"]'),y("design:type","function"==typeof(s="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?s:Object)],w.prototype,"filterSectionContextForm",void 0),g([(0,l.property)({type:Array}),y("design:type",Array)],w.prototype,"_memberCategories",void 0),g([(0,l.property)({type:Array}),y("design:type",Array)],w.prototype,"_activeBranchId",void 0),g([(0,l.property)({type:Number}),y("design:type",Number)],w.prototype,"_memberType",void 0),g([(0,l.property)({type:Array}),y("design:type",Array)],w.prototype,"_branches",void 0),g([(0,l.property)({type:Array}),y("design:type",Array)],w.prototype,"_userLoginInfo",void 0),g([(0,l.property)({type:String}),y("design:type",String)],w.prototype,"datatablePathUrl",void 0),g([(0,l.property)({type:Boolean}),y("design:type",Boolean)],w.prototype,"filterBoxStarted",void 0),w=g([(0,l.customElement)("membership-groupings-group_subgroup-group-view"),y("design:paramtypes",[])],w)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_members_select-member-type_index_ts","src_assets_styles_views_attendance_clocking_main_scss","src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_views_home_branch_-bec5a9","shared"],(()=>(99755,e(e.s=99755)))),e.O())])}));
//# sourceMappingURL=groups.js.map