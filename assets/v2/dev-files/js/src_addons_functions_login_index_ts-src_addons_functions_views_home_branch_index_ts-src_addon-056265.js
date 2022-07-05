"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_login_index_ts-src_addons_functions_views_home_branch_index_ts-src_addon-056265"],{8207:(e,t,o)=>{o.r(t)},3600:(e,t,o)=>{o.r(t),o.d(t,{setUserLoginInfoCookie:()=>c,LogUserOut:()=>a,getUserLoginInfoCookie:()=>l});var n=o(1566),i=o(7052),r=o(1942);const s="pdb-client-user",c=e=>{const t=JSON.stringify(e);window.supersecret={unknowable:{ops:{email:e.user.email,id:e.user.id,cookieName:s}}},(0,r.set_cookies)(s,"",-1),(0,r.set_cookies)(s,(0,i.base64Encode)(t),3500)},a=()=>{(0,r.set_cookies)(s,"",-1)},l=()=>{if(""===(0,r.get_cookie)(s))return null;{const e=(0,i.base64Decode)((0,r.get_cookie)(s)),t=JSON.parse(e);return(0,n.userLoginInfo_S)(t)}}},7725:(e,t,o)=>{o.r(t),o.d(t,{setActiveBranchIdCookie:()=>c,removeActiveBranchIdCookie:()=>a,getActiveBranchIdCookie:()=>l});var n=o(7052),i=o(1942),r=o(1489);const s="pdb-active-branch",c=e=>{const t=JSON.stringify(e);(0,i.set_cookies)(s,"",-1),(0,i.set_cookies)(s,(0,n.base64Encode)(t),3500)};function a(){(0,i.set_cookies)(s,"",-1)}const l=()=>{if(""===(0,i.get_cookie)(s))return null;{const e=(0,n.base64Decode)((0,i.get_cookie)(s)),t=JSON.parse(e);return(0,r.clientBranchInfo_S)(t)}}},1489:(e,t,o)=>{function n(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}o.r(t),o.d(t,{clientBranchInfo_S:()=>n})},1566:(e,t,o)=>{function n(e){const t=e.user;return{expiry:new Date(e.expiry),token:String(e.token),user:{id:Number(t.id),accountId:Number(t.accountId),branchId:Number(t.branchId),firstname:String(t.firstname),surname:String(t.surname),phone:String(t.phone),email:String(t.email),profilePicture:String(t.profilePicture)}}}o.r(t),o.d(t,{userLoginInfo_S:()=>n})},8763:(e,t,o)=>{o.r(t),o.d(t,{AlertCard:()=>c});var n=o(5862),i=o(9662),r=(o(8207),function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends n.LitElement{constructor(){super(),this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return n.html`
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
    `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?n.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?n.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?n.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?n.html`<mwc-icon>warning</mwc-icon>`:this.danger?n.html`<mwc-icon>error_outline</mwc-icon>`:this.default?n.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?n.html`<mwc-icon>star_outline</mwc-icon>`:n.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[n.css`
   :host { display: block; }
  `],r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"success",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"info",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"warning",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"danger",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"default",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"primary",void 0),c=r([(0,i.customElement)("alert-card"),s("design:paramtypes",[])],c)},2715:(e,t,o)=>{o.r(t),o.d(t,{LinkButton:()=>c});var n=o(5862),i=o(9662),r=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends n.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?n.html`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"aClass",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"bClass",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"icon",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"href",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"label",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"isBlockContent",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"raised",void 0),c=r([(0,i.customElement)("link-button")],c)}}]);
//# sourceMappingURL=src_addons_functions_login_index_ts-src_addons_functions_views_home_branch_index_ts-src_addon-056265.js.map