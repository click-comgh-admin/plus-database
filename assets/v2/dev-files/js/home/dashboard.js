!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["home/dashboard"],{87255:(e,t,r)=>{"use strict";r.r(t)},99493:(e,t,r)=>{"use strict";r.r(t)},26660:(e,t,r)=>{"use strict";r.r(t)},17725:(e,t,r)=>{"use strict";r.r(t),r.d(t,{setActiveBranchIdCookie:()=>n,removeActiveBranchIdCookie:()=>l,getActiveBranchIdCookie:()=>c});var s=r(67052),a=r(21942),o=r(61489);const i="pdb-active-branch",n=e=>{const t=JSON.stringify(e);(0,a.set_cookies)(i,"",-1),(0,a.set_cookies)(i,(0,s.base64Encode)(t),3500)};function l(){(0,a.set_cookies)(i,"",-1)}const c=()=>{if(""===(0,a.get_cookie)(i))return null;{const e=(0,s.base64Decode)((0,a.get_cookie)(i)),t=JSON.parse(e);return(0,o.clientBranchInfo_S)(t)}}},61489:(e,t,r)=>{"use strict";function s(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function a(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}r.r(t),r.d(t,{ClientBranch_S:()=>s,clientBranchInfo_S:()=>a})},30367:()=>{},26656:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GET_MembershipUsers:()=>n});var s=r(48485),a=r(87270),o=r(14492),i=r(33600);function n(e=null,t=""){return r=this,n=void 0,c=function*(){const r=(0,i.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,l=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{o(c.next(e))}catch(e){t(e)}}function a(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof l?r:new l((function(e){e(r)}))).then(s,a)}o((c=c.apply(r,n||[])).next())}));var r,n,l,c}},92715:(e,t,r)=>{"use strict";r.r(t),r.d(t,{LinkButton:()=>n});var s=r(85862),a=r(59662),o=function(e,t,r,s){var a,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends s.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?s.html`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:s.html`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};o([(0,a.property)({type:String}),i("design:type",String)],n.prototype,"aClass",void 0),o([(0,a.property)({type:String}),i("design:type",String)],n.prototype,"bClass",void 0),o([(0,a.property)({type:String}),i("design:type",String)],n.prototype,"icon",void 0),o([(0,a.property)({type:String}),i("design:type",String)],n.prototype,"href",void 0),o([(0,a.property)({type:String}),i("design:type",String)],n.prototype,"label",void 0),o([(0,a.property)({type:String}),i("design:type",String)],n.prototype,"isBlockContent",void 0),o([(0,a.property)({type:Boolean}),i("design:type",Boolean)],n.prototype,"raised",void 0),n=o([(0,a.customElement)("link-button")],n)},16883:(e,t,r)=>{"use strict";r.r(t),r.d(t,{_DATATABLES_:()=>l});var s,a=r(85862),o=r(59662),i=(r(30367),r(99493),function(e,t,r,s){var a,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}),n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends a.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.html`
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
      ${this.dt_head.map((e=>a.html`<th>${e.title}</th>`))}
    `}tbody(){return a.html`
      ${this.dt_body.map((e=>a.html`<tr>${e.map((e=>a.html`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return a.html`
    ${this.dt_foot.map((e=>a.html`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const r=this.ajaxHeader[e];t[e]=r}e.headers=t,this.datatable.ajax=e}console.log({$,table:e,"this.datatable":this.datatable}),$(e).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[a.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],i([(0,o.property)({type:Number}),n("design:type",Number)],l.prototype,"randomID1",void 0),i([(0,o.property)({type:Number}),n("design:type",Number)],l.prototype,"randomID2",void 0),i([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"ID",void 0),i([(0,o.property)({type:Object}),n("design:type","function"==typeof(s="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?s:Object)],l.prototype,"datatable",void 0),i([(0,o.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_head",void 0),i([(0,o.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_foot",void 0),i([(0,o.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_body",void 0),i([(0,o.property)(),n("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=i([(0,o.customElement)("datatables-new"),n("design:paramtypes",[])],l)},38281:(e,t,r)=>{"use strict";r.r(t),r.d(t,{UserProfilePhoto:()=>l});var s=r(48485),a=r(85862),o=r(59662),i=function(e,t,r,s){var a,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends a.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=s.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=s.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};l.styles=[a.css`
   :host { display: block; }
  `],i([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"url",void 0),i([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"type",void 0),i([(0,o.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"rounded",void 0),i([(0,o.property)({type:String}),n("design:type",String)],l.prototype,"click-to-open",void 0),i([(0,o.property)({type:Number}),n("design:type",Number)],l.prototype,"size",void 0),l=i([(0,o.customElement)("user-profile-photo"),n("design:paramtypes",[])],l)},70278:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PdbBranchButton:()=>p}),r(87255),r(26660);var s=r(85862),a=r(59662),o=(r(23283),r(16883),r(30367),r(51511),r(92715),r(17725)),i=r(26656),n=(r(38281),r(67052)),l=function(e,t,r,s){var a,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,r,s){return new(r||(r=Promise))((function(a,o){function i(e){try{l(s.next(e))}catch(e){o(e)}}function n(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,n)}l((s=s.apply(e,t||[])).next())}))};let p=class extends s.LitElement{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._activeBranchId=null,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,o.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._members?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._members?s.html`
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
    `}get tableBody(){const e=this._members.results;return console.log({"this._members":this._members}),Array.isArray(e)?e.map((e=>{const t=(0,n.base64Encode)(String(e.id),!0);return s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"
                  url="${e.profilePicture}" size="16"></user-profile-photo>
                <p class="ml-1">${e.firstname} ${e.middlename} ${e.surname}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.memberProfileBaseUrl}${t}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `})):s.html``}firstUpdated(){}getMembers(){return d(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,i.GET_MembershipUsers)(null,"?branchId="+e+"&length=5&memberType=1&order__by=-id");this._members=null===t?void 0:t.paginResponse}))}createRenderRoot(){return this}};p.styles=[s.css`
   :host { display: block; }
  `],l([(0,a.property)({type:String}),c("design:type",String)],p.prototype,"memberProfileBaseUrl",void 0),l([(0,a.property)({type:Array}),c("design:type",Array)],p.prototype,"_activeBranchId",void 0),p=l([(0,a.customElement)("pdb-dashboard-index"),c("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_home_dashboard_scss","src_assets_styles_views_branch_main_scss","shared"],(()=>(70278,e(e.s=70278)))),e.O())])}));
//# sourceMappingURL=dashboard.js.map