(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_branch_main_scss-src_assets_styles_views_home_dashboard_scss-src_addo-48a09c"],{7255:(t,e,r)=>{"use strict";r.r(e)},9493:(t,e,r)=>{"use strict";r.r(e)},6660:(t,e,r)=>{"use strict";r.r(e)},7725:(t,e,r)=>{"use strict";r.r(e),r.d(e,{setActiveBranchIdCookie:()=>a,removeActiveBranchIdCookie:()=>l,getActiveBranchIdCookie:()=>c});var o=r(7052),i=r(1942),s=r(1489);const n="pdb-active-branch",a=t=>{const e=JSON.stringify(t);(0,i.set_cookies)(n,"",-1),(0,i.set_cookies)(n,(0,o.base64Encode)(e),3500)};function l(){(0,i.set_cookies)(n,"",-1)}const c=()=>{if(""===(0,i.get_cookie)(n))return null;{const t=(0,o.base64Decode)((0,i.get_cookie)(n)),e=JSON.parse(t);return(0,s.clientBranchInfo_S)(e)}}},1489:(t,e,r)=>{"use strict";function o(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId)}}r.r(e),r.d(e,{clientBranchInfo_S:()=>o})},367:()=>{},2715:(t,e,r)=>{"use strict";r.r(e),r.d(e,{LinkButton:()=>a});var o=r(5862),i=r(9662),s=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n},n=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends o.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?o.html`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:o.html`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};s([(0,i.property)({type:String}),n("design:type",String)],a.prototype,"aClass",void 0),s([(0,i.property)({type:String}),n("design:type",String)],a.prototype,"bClass",void 0),s([(0,i.property)({type:String}),n("design:type",String)],a.prototype,"icon",void 0),s([(0,i.property)({type:String}),n("design:type",String)],a.prototype,"href",void 0),s([(0,i.property)({type:String}),n("design:type",String)],a.prototype,"label",void 0),s([(0,i.property)({type:String}),n("design:type",String)],a.prototype,"isBlockContent",void 0),s([(0,i.property)({type:Boolean}),n("design:type",Boolean)],a.prototype,"raised",void 0),a=s([(0,i.customElement)("link-button")],a)},6883:(t,e,r)=>{"use strict";r.r(e),r.d(e,{_DATATABLES_:()=>l});var o,i=r(5862),s=r(9662),n=(r(367),r(9493),function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n}),a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return i.html`
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
  `}thead(){return i.html`
      ${this.dt_head.map((t=>i.html`<th>${t.title}</th>`))}
    `}tbody(){return i.html`
      ${this.dt_body.map((t=>i.html`<tr>${t.map((t=>i.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return i.html`
    ${this.dt_foot.map((t=>i.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;console.log({"this.ajaxHeader":this.ajaxHeader});for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const r=this.ajaxHeader[t];e[t]=r}console.log({_headers:e,$}),t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[i.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],n([(0,s.property)({type:Number}),a("design:type",Number)],l.prototype,"randomID1",void 0),n([(0,s.property)({type:Number}),a("design:type",Number)],l.prototype,"randomID2",void 0),n([(0,s.property)({type:String}),a("design:type",String)],l.prototype,"ID",void 0),n([(0,s.property)({type:Object}),a("design:type","function"==typeof(o="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?o:Object)],l.prototype,"datatable",void 0),n([(0,s.property)({type:Array}),a("design:type",Array)],l.prototype,"dt_head",void 0),n([(0,s.property)({type:Array}),a("design:type",Array)],l.prototype,"dt_foot",void 0),n([(0,s.property)({type:Array}),a("design:type",Array)],l.prototype,"dt_body",void 0),n([(0,s.property)(),a("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=n([(0,s.customElement)("datatables-new"),a("design:paramtypes",[])],l)},8281:(t,e,r)=>{"use strict";r.r(e),r.d(e,{UserProfilePhoto:()=>l});var o=r(8485),i=r(5862),s=r(9662),n=function(t,e,r,o){var i,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,r,n):i(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),console.log({"this['click-to-open']":this["click-to-open"]}),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return i.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(t){t.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+e}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+e}}createRenderRoot(){return this}};l.styles=[i.css`
   :host { display: block; }
  `],n([(0,s.property)({type:String}),a("design:type",String)],l.prototype,"url",void 0),n([(0,s.property)({type:String}),a("design:type",String)],l.prototype,"type",void 0),n([(0,s.property)({type:Boolean}),a("design:type",Boolean)],l.prototype,"rounded",void 0),n([(0,s.property)({type:String}),a("design:type",String)],l.prototype,"click-to-open",void 0),n([(0,s.property)({type:Number}),a("design:type",Number)],l.prototype,"size",void 0),l=n([(0,s.customElement)("user-profile-photo"),a("design:paramtypes",[])],l)}}]);
//# sourceMappingURL=src_assets_styles_views_branch_main_scss-src_assets_styles_views_home_dashboard_scss-src_addo-48a09c.js.map