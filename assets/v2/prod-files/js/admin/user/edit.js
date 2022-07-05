"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3175],{4672:(e,t,n)=>{n.d(t,{O1:()=>s,Jx:()=>i,W3:()=>r});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},r=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},2506:(e,t,n)=>{n.d(t,{H:()=>c});var s=n(771),i=n(7270),r=n(596),o=n(3600);function c(e=null,t=""){return n=this,c=void 0,a=function*(){const n=(0,o.Ie)(),c=s.t.URLS.AKWAABA_API_BASE_URL+"clients/user-access"+(null===e?"":"/"+e)+t,l=yield(0,i.d)(c,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{r(a.next(e))}catch(e){t(e)}}function i(e){try{r(a.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,i)}r((a=a.apply(n,c||[])).next())}));var n,c,l,a}},6262:(e,t,n)=>{n.d(t,{a:()=>c});var s=n(771),i=n(7270),r=n(596),o=n(3600);function c(e=null,t=""){return n=this,c=void 0,a=function*(){const n=(0,o.Ie)(),c=s.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,i.d)(c,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{r(a.next(e))}catch(e){t(e)}}function i(e){try{r(a.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,i)}r((a=a.apply(n,c||[])).next())}));var n,c,l,a}},8763:(e,t,n)=>{var s=n(9392),i=n(9662),r=n(5713),o=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.oi{constructor(){super(),this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return s.dy`
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
    `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?s.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?s.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?s.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?s.dy`<mwc-icon>warning</mwc-icon>`:this.danger?s.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?s.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?s.dy`<mwc-icon>star_outline</mwc-icon>`:s.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};l.styles=[s.iv`
   :host { display: block; }
  `],o([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"success",void 0),o([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"info",void 0),o([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"warning",void 0),o([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"danger",void 0),o([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"default",void 0),o([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"primary",void 0),l=o([(0,r.M)("alert-card"),c("design:paramtypes",[])],l)},2715:(e,t,n)=>{var s=n(9392),i=n(9662),r=n(5713),o=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?s.dy`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:s.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};o([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"aClass",void 0),o([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"bClass",void 0),o([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"icon",void 0),o([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"href",void 0),o([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"label",void 0),o([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"isBlockContent",void 0),o([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"raised",void 0),l=o([(0,r.M)("link-button")],l)},5884:(e,t,n)=>{n.r(t),n.d(t,{PdbAdminUserEditForm:()=>g});var s=n(9392),i=n(9662),r=n(5713),o=n(7725),c=n(7052),l=n(4672),a=n(6262),d=(n(6811),n(2715),n(8763),n(9852),n(2583)),u=n(2506),p=n(3600),h=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{l(s.next(e))}catch(e){r(e)}}function c(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((s=s.apply(e,t||[])).next())}))};let g=class extends s.oi{constructor(){super(),this.userId=0,this.loggedUserId=0,this.editAccess=!1,this.page_type="mine",this._activeBranchId=null,this._userLoginInfo=null,this.__clientUser=null,this.__clientUserAccess=null}set _clientUser(e){this.__clientUser=e,this.requestUpdate()}get _clientUser(){return this.__clientUser}set _clientUserAccess(e){this.__clientUserAccess=e,this.requestUpdate()}get _clientUserAccess(){return this.__clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,o.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,p.Ie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this._clientUser.success&&("not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=s.dy`<h4 class="text-white">Error</h4>`,t=s.dy`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;return s.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}return null===this._clientUser?s.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `:void 0===this._clientUser?s.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Schedule </span>: undefined error</h4>
            </div>
          </div>
        `:s.dy`
        <pdb-admin-user-form edit="true" page_type="${this.page_type}" ?editaccess="${this.editAccess}" .clientUser="${this._clientUser}"
          .clientUserAccess="${this._clientUserAccess}">
        </pdb-admin-user-form>
      `}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,l.Jx)("user-id"),t=null!==e?(0,c.t)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}getClientUser(){return f(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,a.a)(this.userId,"?branchId="+e);this._clientUser=null===t?void 0:t.response}))}getClientUserAccess(){return f(this,void 0,void 0,(function*(){const e=yield(0,u.H)(null,"?userId="+this.userId);this._clientUserAccess=null===e?void 0:e.response}))}getLoggedUserAccess(){return f(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e,console.log({"this.loggedUserId":this.loggedUserId}),console.log({"this._userLoginInfo":this._userLoginInfo});const t=yield(0,u.H)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,d.z)(e)).page.id&&(this.editAccess=!0)}))}}))}createRenderRoot(){return this}};g.styles=[s.iv`
   :host { display: block; }
  `],h([(0,i.C)({type:Number}),y("design:type",Number)],g.prototype,"userId",void 0),h([(0,i.C)({type:Number}),y("design:type",Number)],g.prototype,"loggedUserId",void 0),h([(0,i.C)({type:Boolean}),y("design:type",Boolean)],g.prototype,"editAccess",void 0),h([(0,i.C)({type:String}),y("design:type",String)],g.prototype,"page_type",void 0),h([(0,i.C)({type:Array}),y("design:type",Array)],g.prototype,"_activeBranchId",void 0),h([(0,i.C)({type:Array}),y("design:type",Array)],g.prototype,"_userLoginInfo",void 0),g=h([(0,r.M)("pdb-admin-user-edit-form"),y("design:paramtypes",[])],g)}},e=>(e.O(0,[2185,5744,9674,8820,1828,2459,7724,5291,8096,9852,3712],(()=>(5884,e(e.s=5884)))),e.O())])}));
//# sourceMappingURL=edit.js.map