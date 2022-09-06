"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9061],{4672:(e,t,n)=>{n.d(t,{O1:()=>o,Jx:()=>c,W3:()=>i});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},c=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},i=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},5628:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsConnections:()=>_});var o,c,i,r=n(9392),s=n(5713),l=n(2669),a=n(9662),d=(n(1239),n(934),n(8879)),f=n(2368),u=n(771),m=n(3600),p=n(4672),b=n(5248),h=(n(6883),n(9261),n(5866),n(1551)),v=n(6656),y=n(2351),x=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,o){return new(n||(n=Promise))((function(c,i){function r(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((o=o.apply(e,t||[])).next())}))};let C=class extends r.oi{constructor(){super(),this._connection_accounts=[],this.startSearchPage1=0,this.datatablePathUrl="members/user-connection-account/connection/"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new f.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},isOpen:!0})}))}disconnectedCallback(){}render(){return null===this._connection_accounts?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_accounts?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
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
        <hr class="my-2" />
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new f.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[],isOpen:!0})}get filterForm(){let e=r.dy``;const t=(0,p.O1)(),n="connectionId";let o=0,c={};const i=(0,m.Ie)();c.Authorization="Token "+i.token;for(const e in t){let c=Number(t[e]);c=Number.isNaN(c)?0:c,e===n&&(o=c)}const s=r.dy`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection</h4>
          ${(0,y.x)(o)}
          <select-input class="w-100" id="${n}" name="${n}" label="Select Connection"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${c}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${u.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;return e=r.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${s}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`,e}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,c=document.querySelector('[id="connectionId"]');let i=[];if(n>0){var r=o;for(let e=0;e<r.length;e++){const t=r[e],n=(0,h.Z)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};i.includes(o)||i.push(o)}}return{results:i,total:n,totalShowing:c.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get getConnectionId(){let e=(0,p.Jx)("connectionId");return Number.isNaN(e)?0:Number(e)}get table(){let e=u.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+this.getConnectionId+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,m.Ie)();return n.Authorization="Token "+o.token,r.dy`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberId,c=n.connectionId;return`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${c.firstname} ${c.middlename}\n              ${c.surname}</p>\n          </div>\n          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${o.firstname} ${o.middlename} ${o.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,t,n){const o=n.type;return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${o.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${o.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,p.O1)();let t={};for(const n in e){let o=String(e[n]);"connectionId"===n&&(t[n]=o)}let n=(0,p.W3)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderClockInInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return g(this,void 0,void 0,(function*(){e.aoData,t.deleteConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteConnection(e)}))}))}deleteConnection(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,d.y)(t)}))}getMember(e){return g(this,void 0,void 0,(function*(){const t=yield(0,v.E)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,h.Z)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};C.styles=[r.iv`
   :host { display: block; }
  `],x([(0,l.I)('[filter-section-context="btn"]'),w("design:type","function"==typeof(o=void 0!==b.z&&b.z)?o:Object)],C.prototype,"filterSectionContextBtn",void 0),x([(0,l.I)('[filter-section-context="container"]'),w("design:type","function"==typeof(c="undefined"!=typeof Element&&Element)?c:Object)],C.prototype,"filterSectionContextContainer",void 0),x([(0,l.I)('[make-general-posts="submit_filter_form"]'),w("design:type","function"==typeof(i="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?i:Object)],C.prototype,"filterSectionContextForm",void 0),x([(0,a.C)({type:Array}),w("design:type",Array)],C.prototype,"_connection_accounts",void 0),x([(0,a.C)({type:Number}),w("design:type",Number)],C.prototype,"startSearchPage1",void 0),x([(0,a.C)({type:String}),w("design:type",String)],C.prototype,"datatablePathUrl",void 0),C=x([(0,s.M)("pdb-connections-connections-view"),w("design:paramtypes",[])],C);let _=class extends r.oi{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return r.dy`
      <div class="flex flex-col">
        <pdb-connections-connections-view class="my-1"></pdb-connections-connections-view>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};_.styles=[r.iv`
   :host { display: block; }
  `],_=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r}([(0,s.M)("pdb-connections-connections"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],_)}},e=>(e.O(0,[2185,5744,9674,8820,1828,2459,479,5291,6553,2351,3712],(()=>(5628,e(e.s=5628)))),e.O())])}));
//# sourceMappingURL=connection.js.map