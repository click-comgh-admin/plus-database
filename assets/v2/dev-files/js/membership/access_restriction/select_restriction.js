!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.webpackNumbers=e():t.webpackNumbers=e()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/access_restriction/select_restriction"],{87255:(t,e,r)=>{"use strict";r.r(e)},99493:(t,e,r)=>{"use strict";r.r(e)},26660:(t,e,r)=>{"use strict";r.r(e)},17725:(t,e,r)=>{"use strict";r.r(e),r.d(e,{setActiveBranchIdCookie:()=>o,removeActiveBranchIdCookie:()=>c,getActiveBranchIdCookie:()=>l});var s=r(67052),a=r(21942),i=r(61489);const n="pdb-active-branch",o=t=>{const e=JSON.stringify(t);(0,a.set_cookies)(n,"",-1),(0,a.set_cookies)(n,(0,s.base64Encode)(e),3500)};function c(){(0,a.set_cookies)(n,"",-1)}const l=()=>{if(""===(0,a.get_cookie)(n))return null;{const t=(0,s.base64Decode)((0,a.get_cookie)(n)),e=JSON.parse(t);return(0,i.clientBranchInfo_S)(e)}}},61489:(t,e,r)=>{"use strict";function s(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId),createdBy:Number(t.createdBy),creationDate:new Date(t.creationDate),updatedBy:Number(t.updatedBy),updateDate:new Date(t.updateDate)}}function a(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId)}}r.r(e),r.d(e,{ClientBranch_S:()=>s,clientBranchInfo_S:()=>a})},30367:()=>{},96490:(t,e,r)=>{"use strict";r.r(e),r.d(e,{GET_MembershipAccessRestrictions:()=>o});var s=r(48485),a=r(87270),i=r(14492),n=r(33600);function o(t=null,e=""){return r=this,o=void 0,l=function*(){const r=(0,n.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/access/restriction"+(null===t?"":"/"+t)+e,c=yield(0,a.http)(o,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new i.NetWorkCallResponses("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function s(t){try{i(l.next(t))}catch(t){e(t)}}function a(t){try{i(l.throw(t))}catch(t){e(t)}}function i(e){var r;e.done?t(e.value):(r=e.value,r instanceof c?r:new c((function(t){t(r)}))).then(s,a)}i((l=l.apply(r,o||[])).next())}));var r,o,c,l}},92715:(t,e,r)=>{"use strict";r.r(e),r.d(e,{LinkButton:()=>o});var s=r(85862),a=r(59662),i=function(t,e,r,s){var a,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},n=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let o=class extends s.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?s.html`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:s.html`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};i([(0,a.property)({type:String}),n("design:type",String)],o.prototype,"aClass",void 0),i([(0,a.property)({type:String}),n("design:type",String)],o.prototype,"bClass",void 0),i([(0,a.property)({type:String}),n("design:type",String)],o.prototype,"icon",void 0),i([(0,a.property)({type:String}),n("design:type",String)],o.prototype,"href",void 0),i([(0,a.property)({type:String}),n("design:type",String)],o.prototype,"label",void 0),i([(0,a.property)({type:String}),n("design:type",String)],o.prototype,"isBlockContent",void 0),i([(0,a.property)({type:Boolean}),n("design:type",Boolean)],o.prototype,"raised",void 0),o=i([(0,a.customElement)("link-button")],o)},16883:(t,e,r)=>{"use strict";r.r(e),r.d(e,{_DATATABLES_:()=>c});var s,a=r(85862),i=r(59662),n=(r(30367),r(99493),function(t,e,r,s){var a,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n}),o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends a.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.html`
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
  `}thead(){return a.html`
      ${this.dt_head.map((t=>a.html`<th>${t.title}</th>`))}
    `}tbody(){return a.html`
      ${this.dt_body.map((t=>a.html`<tr>${t.map((t=>a.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return a.html`
    ${this.dt_foot.map((t=>a.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const r=this.ajaxHeader[t];e[t]=r}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[a.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],n([(0,i.property)({type:Number}),o("design:type",Number)],c.prototype,"randomID1",void 0),n([(0,i.property)({type:Number}),o("design:type",Number)],c.prototype,"randomID2",void 0),n([(0,i.property)({type:String}),o("design:type",String)],c.prototype,"ID",void 0),n([(0,i.property)({type:Object}),o("design:type","function"==typeof(s="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?s:Object)],c.prototype,"datatable",void 0),n([(0,i.property)({type:Array}),o("design:type",Array)],c.prototype,"dt_head",void 0),n([(0,i.property)({type:Array}),o("design:type",Array)],c.prototype,"dt_foot",void 0),n([(0,i.property)({type:Array}),o("design:type",Array)],c.prototype,"dt_body",void 0),n([(0,i.property)(),o("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=n([(0,i.customElement)("datatables-new"),o("design:paramtypes",[])],c)},78885:(t,e,r)=>{"use strict";r.r(e),r.d(e,{MembershipAccessRestrictionSelectRestriction:()=>p}),r(87255),r(26660);var s=r(85862),a=r(59662),i=(r(23283),r(16883),r(30367),r(51511),r(92715),r(17725)),n=r(67052),o=r(96490),c=function(t,e,r,s){var a,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(i<3?a(n):i>3?a(e,r,n):a(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(t,e,r,s){return new(r||(r=Promise))((function(a,i){function n(t){try{c(s.next(t))}catch(t){i(t)}}function o(t){try{c(s.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,o)}c((s=s.apply(t,e||[])).next())}))};let p=class extends s.LitElement{constructor(){super(),this.restrictionUsersBaseUrl="/member/access-restriction/user-restriction?view-restriction=",this.restrictionUpdateBaseUrl="/member/access-restriction/update-user-restriction?view-restriction=",this._activeBranchId=null,this.__restrictions=null}set _restrictions(t){this.__restrictions=t,this.requestUpdate()}get _restrictions(){return this.__restrictions}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){t.connectedCallback.call(this);const e=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===e?null:[e],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._restrictions?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._restrictions?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
      ${this.table}
    `}get table(){return s.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>#</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Member(s)</b>
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
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){const t=this._restrictions.data;return Array.isArray(t)?t.map((t=>{const e=(0,n.base64Encode)(String(t.id),!0);return s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <p class="ml-1">${t.restriction}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.restrictionUpdateBaseUrl}${e}" label="Update"></link-button>
              </div>
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="success" raised bClass="button success mr-2"
                  href="${this.restrictionUsersBaseUrl}${e}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `})):s.html``}firstUpdated(){}getMembers(){return d(this,void 0,void 0,(function*(){const t=yield(0,o.GET_MembershipAccessRestrictions)(null);this._restrictions=null===t?void 0:t.response}))}createRenderRoot(){return this}};p.styles=[s.css`
   :host { display: block; }
  `],c([(0,a.property)({type:String}),l("design:type",String)],p.prototype,"restrictionUsersBaseUrl",void 0),c([(0,a.property)({type:String}),l("design:type",String)],p.prototype,"restrictionUpdateBaseUrl",void 0),c([(0,a.property)({type:Array}),l("design:type",Array)],p.prototype,"_activeBranchId",void 0),p=c([(0,a.customElement)("membership-access_restriction-select_restriction"),l("design:paramtypes",[])],p)}},t=>(t.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_home_dashboard_scss","src_assets_styles_views_branch_main_scss","shared"],(()=>(78885,t(t.s=78885)))),t.O())])}));
//# sourceMappingURL=select_restriction.js.map