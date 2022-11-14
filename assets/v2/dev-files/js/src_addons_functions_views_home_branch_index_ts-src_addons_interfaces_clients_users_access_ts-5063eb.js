"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_views_home_branch_index_ts-src_addons_interfaces_clients_users_access_ts-5063eb"],{28207:(e,t,n)=>{n.r(t)},17725:(e,t,n)=>{n.r(t),n.d(t,{setActiveBranchIdCookie:()=>c,removeActiveBranchIdCookie:()=>a,getActiveBranchIdCookie:()=>l});var o=n(67052),i=n(21942),r=n(61489);const s="pdb-active-branch",c=e=>{const t=JSON.stringify(e);(0,i.set_cookies)(s,"",-1),(0,i.set_cookies)(s,(0,o.base64Encode)(t),3500)};function a(){(0,i.set_cookies)(s,"",-1)}const l=()=>{if(""===(0,i.get_cookie)(s))return null;{const e=(0,o.base64Decode)((0,i.get_cookie)(s)),t=JSON.parse(e);return(0,r.clientBranchInfo_S)(t)}}},53464:(e,t,n)=>{function o(e){return{id:Number(e.id),page:e.page}}n.r(t),n.d(t,{ClientPageAccess_S:()=>o})},12583:(e,t,n)=>{n.r(t),n.d(t,{ClientUserAccess_S:()=>i});var o=n(53464);function i(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,o.ClientPageAccess_S)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},32506:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUserAccess:()=>c});var o=n(48485),i=n(87270),r=n(14492),s=n(33600);function c(e=null,t=""){return n=this,c=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access"+(null===e?"":"/"+e)+t,a=yield(0,i.http)(c,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{r(l.next(e))}catch(e){t(e)}}function i(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}r((l=l.apply(n,c||[])).next())}));var n,c,a,l}},48763:(e,t,n)=>{n.r(t),n.d(t,{AlertCard:()=>c});var o=n(85862),i=n(59662),r=(n(28207),function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      <div class="alert-box">
        <div class="alert-container ${this.getClass}">
          <aside class="${this.getClass}">
            <div class="padded">
              ${this.getIcon}
            </div>
          </aside>
          <div class="content">
            <header class="header">
              ${this.header}
            </header>
            <main class="main">
              ${this.content}
            </main>
          </div>
        </div>
      </div>
    `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?o.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?o.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?o.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?o.html`<mwc-icon>warning</mwc-icon>`:this.danger?o.html`<mwc-icon>error_outline</mwc-icon>`:this.default?o.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?o.html`<mwc-icon>star_outline</mwc-icon>`:o.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"success",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"info",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"warning",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"danger",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"default",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"primary",void 0),c=r([(0,i.customElement)("alert-card"),s("design:paramtypes",[])],c)},92715:(e,t,n)=>{n.r(t),n.d(t,{LinkButton:()=>c});var o=n(85862),i=n(59662),r=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?o.html`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:o.html`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"aClass",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"bClass",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"icon",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"href",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"label",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"isBlockContent",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"raised",void 0),c=r([(0,i.customElement)("link-button")],c)}}]);
//# sourceMappingURL=src_addons_functions_views_home_branch_index_ts-src_addons_interfaces_clients_users_access_ts-5063eb.js.map