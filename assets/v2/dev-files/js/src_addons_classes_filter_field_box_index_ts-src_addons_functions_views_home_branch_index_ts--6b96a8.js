(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_classes_filter_field_box_index_ts-src_addons_functions_views_home_branch_index_ts--6b96a8"],{9493:(t,e,r)=>{"use strict";r.r(e)},2368:(t,e,r)=>{"use strict";r.r(e),r.d(e,{FilterFieldBox:()=>n});var i=r(4672);class n{constructor(t){this.filtering="--filtering--",this.__filtering__="",this.__allowed=!1,this.clear_filter=t=>{t.preventDefault();const e=window.FilterFieldBox.form,r=new FormData(e),i=this.unmutableInputNames.map((t=>t.name));r.forEach(((t,e)=>{i.includes(e)||document.querySelectorAll('[name="'+e+'"]').forEach((t=>{t.value=""}))})),this.unmutableInputNames.map((t=>{const e=t.name,r=t.value;void 0!==r&&document.querySelectorAll('[name="'+e+'"]').forEach((t=>{t.value=r}))})),e.submit()},this.constructorInit=t;const e=t.selectors;this.form=e.form,this.container=e.container,this.filterSectionContextBtn=e.filterSectionContextBtn,this.unmutableInputNames=t.unmutableInputNames,this.__filtering__=(0,i.urlQueryParamsGet)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(t){t.preventDefault();const e=window.FilterFieldBox;if(e.__allowed){const t=e.filterSectionContextBtn,r=e.container;r.hasAttribute("hidden")?(r.removeAttribute("hidden"),t.setAttribute("class","warning mt-1"),t.setAttribute("icon","close_fullscreen")):(r.setAttribute("hidden",""),t.setAttribute("class","primary mt-1"),t.setAttribute("icon","open_with"))}}addfilterCheckInput(){const t=window.FilterFieldBox.form,e=document.createElement("input");e.type="hidden",e.value="true",e.name=this.filtering,t.appendChild(e)}toggleFilterFieldsDefault(){"true"===this.__filtering__&&this.container.hasAttribute("hidden")&&this.filterSectionContextBtn.click()}submit(t){t.preventDefault(),window.FilterFieldBox.form.submit()}}},4672:(t,e,r)=>{"use strict";r.r(e),r.d(e,{urlQueryParams:()=>i,urlQueryParamsGet:()=>n,urlQueryParamsJoin:()=>o});const i=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},n=t=>{const e=new URLSearchParams(window.location.search),r=Object.fromEntries(e.entries());let i=null;for(const e in r)e===t&&(i=r[e]);return i},o=t=>{let e="",r=0;for(const i in t)r+=1,e+=`${r>1?"&":""}${i}=${t[i]}`;return e}},7725:(t,e,r)=>{"use strict";r.r(e),r.d(e,{setActiveBranchIdCookie:()=>a,removeActiveBranchIdCookie:()=>l,getActiveBranchIdCookie:()=>c});var i=r(7052),n=r(1942),o=r(1489);const s="pdb-active-branch",a=t=>{const e=JSON.stringify(t);(0,n.set_cookies)(s,"",-1),(0,n.set_cookies)(s,(0,i.base64Encode)(e),3500)};function l(){(0,n.set_cookies)(s,"",-1)}const c=()=>{if(""===(0,n.get_cookie)(s))return null;{const t=(0,i.base64Decode)((0,n.get_cookie)(s)),e=JSON.parse(t);return(0,o.clientBranchInfo_S)(e)}}},1489:(t,e,r)=>{"use strict";function i(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId),createdBy:Number(t.createdBy),creationDate:new Date(t.creationDate),updatedBy:Number(t.updatedBy),updateDate:new Date(t.updateDate)}}function n(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId)}}r.r(e),r.d(e,{ClientBranch_S:()=>i,clientBranchInfo_S:()=>n})},367:()=>{},2869:(t,e,r)=>{"use strict";function i(t){return{id:Number(t.id),name:t.name}}r.r(e),r.d(e,{GenericGenderInfo_S:()=>i})},7553:(t,e,r)=>{"use strict";r.r(e),r.d(e,{GET_GenericGender:()=>a});var i=r(8485),n=r(7270),o=r(4492),s=r(3600);function a(t=null){return e=this,r=void 0,l=function*(){const e=(0,s.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===t?"":"/"+t),a=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+e.token}},!0);try{return new o.NetWorkCallResponses("get",a)}catch(t){console.error({error:t});let e=a;return e.error=t,new o.NetWorkCallResponses("get",e,!0)}},new((a=void 0)||(a=Promise))((function(t,i){function n(t){try{s(l.next(t))}catch(t){i(t)}}function o(t){try{s(l.throw(t))}catch(t){i(t)}}function s(e){var r;e.done?t(e.value):(r=e.value,r instanceof a?r:new a((function(t){t(r)}))).then(n,o)}s((l=l.apply(e,r||[])).next())}));var e,r,a,l}},2715:(t,e,r)=>{"use strict";r.r(e),r.d(e,{LinkButton:()=>a});var i=r(5862),n=r(9662),o=function(t,e,r,i){var n,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,r,s):n(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends i.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.html`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:i.html`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};o([(0,n.property)({type:String}),s("design:type",String)],a.prototype,"aClass",void 0),o([(0,n.property)({type:String}),s("design:type",String)],a.prototype,"bClass",void 0),o([(0,n.property)({type:String}),s("design:type",String)],a.prototype,"icon",void 0),o([(0,n.property)({type:String}),s("design:type",String)],a.prototype,"href",void 0),o([(0,n.property)({type:String}),s("design:type",String)],a.prototype,"label",void 0),o([(0,n.property)({type:String}),s("design:type",String)],a.prototype,"isBlockContent",void 0),o([(0,n.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"raised",void 0),a=o([(0,n.customElement)("link-button")],a)},6883:(t,e,r)=>{"use strict";r.r(e),r.d(e,{_DATATABLES_:()=>l});var i,n=r(5862),o=r(9662),s=(r(367),r(9493),function(t,e,r,i){var n,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,r,s):n(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}),a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends n.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return n.html`
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
  `}thead(){return n.html`
      ${this.dt_head.map((t=>n.html`<th>${t.title}</th>`))}
    `}tbody(){return n.html`
      ${this.dt_body.map((t=>n.html`<tr>${t.map((t=>n.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return n.html`
    ${this.dt_foot.map((t=>n.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const r=this.ajaxHeader[t];e[t]=r}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[n.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,o.property)({type:Number}),a("design:type",Number)],l.prototype,"randomID1",void 0),s([(0,o.property)({type:Number}),a("design:type",Number)],l.prototype,"randomID2",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"ID",void 0),s([(0,o.property)({type:Object}),a("design:type","function"==typeof(i="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?i:Object)],l.prototype,"datatable",void 0),s([(0,o.property)({type:Array}),a("design:type",Array)],l.prototype,"dt_head",void 0),s([(0,o.property)({type:Array}),a("design:type",Array)],l.prototype,"dt_foot",void 0),s([(0,o.property)({type:Array}),a("design:type",Array)],l.prototype,"dt_body",void 0),s([(0,o.property)(),a("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=s([(0,o.customElement)("datatables-new"),a("design:paramtypes",[])],l)},8281:(t,e,r)=>{"use strict";r.r(e),r.d(e,{UserProfilePhoto:()=>l});var i=r(8485),n=r(5862),o=r(9662),s=function(t,e,r,i){var n,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,r,s):n(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends n.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return n.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(t){t.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=i.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+e}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=i.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+e}}createRenderRoot(){return this}};l.styles=[n.css`
   :host { display: block; }
  `],s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"url",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"type",void 0),s([(0,o.property)({type:Boolean}),a("design:type",Boolean)],l.prototype,"rounded",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"click-to-open",void 0),s([(0,o.property)({type:Number}),a("design:type",Number)],l.prototype,"size",void 0),l=s([(0,o.customElement)("user-profile-photo"),a("design:paramtypes",[])],l)}}]);
//# sourceMappingURL=src_addons_classes_filter_field_box_index_ts-src_addons_functions_views_home_branch_index_ts--6b96a8.js.map