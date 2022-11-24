"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/all"],{87255:(e,t,r)=>{r.r(t)},17725:(e,t,r)=>{r.r(t),r.d(t,{setActiveBranchIdCookie:()=>l,removeActiveBranchIdCookie:()=>c,getActiveBranchIdCookie:()=>a});var n=r(67052),i=r(21942),o=r(61489);const s="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,i.set_cookies)(s,"",-1),(0,i.set_cookies)(s,(0,n.base64Encode)(t),3500)};function c(){(0,i.set_cookies)(s,"",-1)}const a=()=>{if(""===(0,i.get_cookie)(s))return null;{const e=(0,n.base64Decode)((0,i.get_cookie)(s)),t=JSON.parse(e);return(0,o.clientBranchInfo_S)(t)}}},61489:(e,t,r)=>{function n(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function i(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}r.r(t),r.d(t,{ClientBranch_S:()=>n,clientBranchInfo_S:()=>i})},72869:(e,t,r)=>{function n(e){return{id:Number(e.id),name:e.name}}r.r(t),r.d(t,{GenericGenderInfo_S:()=>n})},87553:(e,t,r)=>{r.r(t),r.d(t,{GET_GenericGender:()=>l});var n=r(48485),i=r(87270),o=r(14492),s=r(33600);function l(e=null){return t=this,r=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),l=yield(0,i.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function i(e){try{s(c.next(e))}catch(e){n(e)}}function o(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof l?r:new l((function(e){e(r)}))).then(i,o)}s((c=c.apply(t,r||[])).next())}));var t,r,l,c}},92715:(e,t,r)=>{r.r(t),r.d(t,{LinkButton:()=>l});var n=r(85862),i=r(59662),o=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?n.html`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:n.html`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"aClass",void 0),o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"bClass",void 0),o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"icon",void 0),o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"href",void 0),o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"label",void 0),o([(0,i.property)({type:String}),s("design:type",String)],l.prototype,"isBlockContent",void 0),o([(0,i.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"raised",void 0),l=o([(0,i.customElement)("link-button")],l)},38281:(e,t,r)=>{r.r(t),r.d(t,{UserProfilePhoto:()=>c});var n=r(48485),i=r(85862),o=r(59662),s=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return i.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],s([(0,o.property)({type:String}),l("design:type",String)],c.prototype,"url",void 0),s([(0,o.property)({type:String}),l("design:type",String)],c.prototype,"type",void 0),s([(0,o.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),s([(0,o.property)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),s([(0,o.property)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=s([(0,o.customElement)("user-profile-photo"),l("design:paramtypes",[])],c)},48063:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipMembers:()=>v}),r(87255),r(26660);var n,i,o,s=r(85862),l=r(59662),c=r(23283),a=(r(33590),r(40789),r(63313),r(16883),r(30367),r(51511),r(92715),r(17725)),d=(r(38281),r(67052)),m=r(48485),p=r(33600),u=r(44672),f=r(87553),b=r(72869),h=r(52368),y=(r(43629),function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}),_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function l(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,l)}c((n=n.apply(e,t||[])).next())}))};let v=class extends s.LitElement{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this.memberProfileEditBaseUrl="/member/update-profile?edit=",this._genders=[],this._activeBranchId=null,this._memberType=1,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders()}))}disconnectedCallback(){}render(){return s.html`
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
    `}firstUpdated(){this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}get filterForm(){let e=s.html``;const t=(0,u.urlQueryParams)(),r="filter_gender",n="filter_name",i="filter_identity",o="memberType";let l=null,c=null,a=null,d=null;for(const e in t){let s=String(t[e]);s=""===s?null:s,e===r&&(l=s),e===n&&(c=s),e===i&&(a=s),e===o&&(d=s)}const m=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${n}" id="${n}" label="Search By Name" 
            value="${null===c?"":c}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,p=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${r}" id="${r}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===l?s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(l)===e.id?s.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,f=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${i}" id="${i}" label="Search By Member ID"
            value="${null===a?"":a}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,b=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${d}" 
            name="${o}" id="${o}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;return e=s.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${m} ${p} ${f} ${b}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t=m.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user?branchId="+e+"&order__by=firstname&datatable_plugin";t+=this.urlQueryString;const r=this.__dataTable(t);let n={};const i=(0,p.getUserLoginInfoCookie)();return n.Authorization="Token "+i.token,s.html`
      <datatables-new .datatable="${r}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,u.urlQueryParams)(),t="memberType";let r={};for(const n in e){let i=String(e[n]);"filter_gender"!==n&&"filter_name"!==n&&"filter_identity"!==n&&n!==t||(r[n]=i)}t in r||(r.memberType="1");let n=(0,u.urlQueryParamsJoin)(r);return 0===n.length?n:"&"+n}getGenders(){return g(this,void 0,void 0,(function*(){const e=yield(0,f.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,b.GenericGenderInfo_S)(e)))),this._genders=[...this._genders,...t]}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,r,n){const i=(0,d.base64Encode)(String(n.id),!0);return`<div class="flex items-center whitespace-normal">\n                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${t.memberProfileBaseUrl}${i}" type="member"\n                  url="${n.profilePicture}" size="16"></user-profile-photo>\n                <p class="ml-1">${n.firstname} ${n.middlename} ${n.surname}</p>\n              </div>`},orderable:!0},{data:"firstname",render:function(e,r,n){const i=(0,d.base64Encode)(String(n.id),!0);return`<div class="flex flex-col md:flex-row items-center whitespace-normal">\n              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"\n                href="${t.memberProfileBaseUrl}${i}" label="Open"></link-button>\n              <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"\n                href="${t.memberProfileEditBaseUrl}${i}" label="Edit"></link-button>\n            </div>`},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return g(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};v.styles=[s.css`
   :host { display: block; }
  `],y([(0,l.query)('[filter-section-context="btn"]'),_("design:type","function"==typeof(n=void 0!==c.Button&&c.Button)?n:Object)],v.prototype,"filterSectionContextBtn",void 0),y([(0,l.query)('[filter-section-context="container"]'),_("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],v.prototype,"filterSectionContextContainer",void 0),y([(0,l.query)('[make-general-posts="submit_filter_form"]'),_("design:type","function"==typeof(o="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?o:Object)],v.prototype,"filterSectionContextForm",void 0),y([(0,l.property)({type:String}),_("design:type",String)],v.prototype,"memberProfileBaseUrl",void 0),y([(0,l.property)({type:String}),_("design:type",String)],v.prototype,"memberProfileEditBaseUrl",void 0),y([(0,l.property)({type:Array}),_("design:type",Array)],v.prototype,"_genders",void 0),y([(0,l.property)({type:Array}),_("design:type",Array)],v.prototype,"_activeBranchId",void 0),y([(0,l.property)({type:Number}),_("design:type",Number)],v.prototype,"_memberType",void 0),v=y([(0,l.customElement)("pdb-membership-members"),_("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_members_select-member-type_index_ts","src_assets_styles_views_branch_main_scss","shared"],(()=>(48063,e(e.s=48063)))),e.O())])}));
//# sourceMappingURL=all.js.map