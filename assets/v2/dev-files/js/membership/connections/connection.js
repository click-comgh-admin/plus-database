"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/connections/connection"],{9595:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsConnections:()=>c});var o=n(5862),s=n(9662),r=(n(9848),function(e,t,n,o){var s,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(c=(r<3?s(c):r>3?s(t,n,c):s(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c});let c=class extends o.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      <div class="flex flex-col">
        <pdb-connections-connections-view class="my-1"></pdb-connections-connections-view>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],c=r([(0,s.customElement)("pdb-connections-connections"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],c)},9848:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsConnectionsView:()=>x});var o,s,r,c=n(5862),i=n(9662),l=(n(3590),n(6413),n(6660),n(8879)),a=n(2368),d=n(8485),m=n(3600),u=n(4672),f=n(3283),p=(n(6883),n(367),n(789),n(5866),n(6246)),b=n(6656),h=n(2351),_=function(e,t,n,o){var s,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(c=(r<3?s(c):r>3?s(t,n,c):s(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function c(e){try{l(o.next(e))}catch(e){r(e)}}function i(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((o=o.apply(e,t||[])).next())}))};let x=class extends c.LitElement{constructor(){super(),this._connection_accounts=[],this.startSearchPage1=0,this.datatablePathUrl="members/user-connection-account/connection/"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new a.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},isOpen:!0})}))}disconnectedCallback(){}render(){return null===this._connection_accounts?c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_accounts?c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:c.html`
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
        <hr class="my-2" />
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new a.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[],isOpen:!0})}get filterForm(){let e=c.html``;const t=(0,u.urlQueryParams)(),n="connectionId";let o=0,s={};const r=(0,m.getUserLoginInfoCookie)();s.Authorization="Token "+r.token;for(const e in t){let s=Number(t[e]);s=Number.isNaN(s)?0:s,e===n&&(o=s)}const i=c.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection</h4>
          ${(0,h.show_selection_member_id_filter)(o)}
          <select-input class="w-100" id="${n}" name="${n}" label="Select Connection"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${s}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${d.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;return e=c.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${i}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`,e}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,s=document.querySelector('[id="connectionId"]');let r=[];if(n>0){var c=o;for(let e=0;e<c.length;e++){const t=c[e],n=(0,p.MembershipUser_S)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};r.includes(o)||r.push(o)}}return{results:r,total:n,totalShowing:s.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get getConnectionId(){let e=(0,u.urlQueryParamsGet)("connectionId");return Number.isNaN(e)?0:Number(e)}get table(){let e=d.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+this.getConnectionId+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,m.getUserLoginInfoCookie)();return n.Authorization="Token "+o.token,c.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberId,s=n.connectionId;return`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${s.firstname} ${s.middlename}\n              ${s.surname}</p>\n          </div>\n          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${o.firstname} ${o.middlename} ${o.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,t,n){const o=n.type;return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${o.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${o.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,u.urlQueryParams)();let t={};for(const n in e){let o=String(e[n]);"connectionId"===n&&(t[n]=o)}let n=(0,u.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderClockInInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return y(this,void 0,void 0,(function*(){e.aoData,t.deleteConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteConnection(e)}))}))}deleteConnection(e){return y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,l.DELETE_UserConnectionAccount)(t)}))}getMember(e){return y(this,void 0,void 0,(function*(){const t=yield(0,b.GET_MembershipUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,p.MembershipUser_S)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};x.styles=[c.css`
   :host { display: block; }
  `],_([(0,i.query)('[filter-section-context="btn"]'),v("design:type","function"==typeof(o=void 0!==f.Button&&f.Button)?o:Object)],x.prototype,"filterSectionContextBtn",void 0),_([(0,i.query)('[filter-section-context="container"]'),v("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],x.prototype,"filterSectionContextContainer",void 0),_([(0,i.query)('[make-general-posts="submit_filter_form"]'),v("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],x.prototype,"filterSectionContextForm",void 0),_([(0,i.property)({type:Array}),v("design:type",Array)],x.prototype,"_connection_accounts",void 0),_([(0,i.property)({type:Number}),v("design:type",Number)],x.prototype,"startSearchPage1",void 0),_([(0,i.property)({type:String}),v("design:type",String)],x.prototype,"datatablePathUrl",void 0),x=_([(0,i.customElement)("pdb-connections-connections-view"),v("design:paramtypes",[])],x)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_connections_members_and_connections_view_members_ts","shared"],(()=>(9595,e(e.s=9595)))),e.O())])}));
//# sourceMappingURL=connection.js.map