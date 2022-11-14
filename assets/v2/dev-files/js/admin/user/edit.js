"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["admin/user/edit"],{44672:(e,t,s)=>{s.r(t),s.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>r,urlQueryParamsJoin:()=>i});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),s=Object.fromEntries(t.entries());let n=null;for(const t in s)t===e&&(n=s[t]);return n},i=e=>{let t="",s=0;for(const n in e)s+=1,t+=`${s>1?"&":""}${n}=${e[n]}`;return t}},46262:(e,t,s)=>{s.r(t),s.d(t,{GET_ClientUsers:()=>c});var n=s(48485),r=s(87270),i=s(14492),o=s(33600);function c(e=null,t=""){return s=this,c=void 0,d=function*(){const s=(0,o.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(c,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{i(d.next(e))}catch(e){t(e)}}function r(e){try{i(d.throw(e))}catch(e){t(e)}}function i(t){var s;t.done?e(t.value):(s=t.value,s instanceof l?s:new l((function(e){e(s)}))).then(n,r)}i((d=d.apply(s,c||[])).next())}));var s,c,l,d}},95884:(e,t,s)=>{s.r(t),s.d(t,{PdbAdminUserEditForm:()=>f});var n=s(85862),r=s(59662),i=s(17725),o=s(67052),c=s(44672),l=s(46262),d=(s(51511),s(92715),s(48763),s(38153),s(12583)),a=s(32506),u=s(33600),h=function(e,t,s,n){var r,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(o=(i<3?r(o):i>3?r(t,s,o):r(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e,t,s,n){return new(s||(s=Promise))((function(r,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function c(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,c)}l((n=n.apply(e,t||[])).next())}))};let f=class extends n.LitElement{constructor(){super(),this.userId=0,this.loggedUserId=0,this.editAccess=!1,this.page_type="mine",this._activeBranchId=null,this._userLoginInfo=null,this.__clientUser=null,this.__clientUserAccess=null}set _clientUser(e){this.__clientUser=e,this.requestUpdate()}get _clientUser(){return this.__clientUser}set _clientUserAccess(e){this.__clientUserAccess=e,this.requestUpdate()}get _clientUserAccess(){return this.__clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return p(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,u.getUserLoginInfoCookie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this._clientUser.success&&("not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=n.html`<h4 class="text-white">Error</h4>`,t=n.html`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;return n.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}return null===this._clientUser?n.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `:void 0===this._clientUser?n.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Schedule </span>: undefined error</h4>
            </div>
          </div>
        `:n.html`
        <pdb-admin-user-form edit="true" page_type="${this.page_type}" ?editaccess="${this.editAccess}" .clientUser="${this._clientUser}"
          .clientUserAccess="${this._clientUserAccess}">
        </pdb-admin-user-form>
      `}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,c.urlQueryParamsGet)("user-id"),t=null!==e?(0,o.base64Decode)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}getClientUser(){return p(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,l.GET_ClientUsers)(this.userId,"?branchId="+e);this._clientUser=null===t?void 0:t.response}))}getClientUserAccess(){return p(this,void 0,void 0,(function*(){const e=yield(0,a.GET_ClientUserAccess)(null,"?userId="+this.userId);this._clientUserAccess=null===e?void 0:e.response}))}getLoggedUserAccess(){return p(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e,console.log({"this.loggedUserId":this.loggedUserId}),console.log({"this._userLoginInfo":this._userLoginInfo});const t=yield(0,a.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,d.ClientUserAccess_S)(e)).page.id&&(this.editAccess=!0)}))}}))}createRenderRoot(){return this}};f.styles=[n.css`
   :host { display: block; }
  `],h([(0,r.property)({type:Number}),_("design:type",Number)],f.prototype,"userId",void 0),h([(0,r.property)({type:Number}),_("design:type",Number)],f.prototype,"loggedUserId",void 0),h([(0,r.property)({type:Boolean}),_("design:type",Boolean)],f.prototype,"editAccess",void 0),h([(0,r.property)({type:String}),_("design:type",String)],f.prototype,"page_type",void 0),h([(0,r.property)({type:Array}),_("design:type",Array)],f.prototype,"_activeBranchId",void 0),h([(0,r.property)({type:Array}),_("design:type",Array)],f.prototype,"_userLoginInfo",void 0),f=h([(0,r.customElement)("pdb-admin-user-edit-form"),_("design:paramtypes",[])],f)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_addons_functions_views_home_branch_index_ts-src_addons_interfaces_clients_users_access_ts-5063eb","src_assets_styles_views_admin_user_form_scss","src_addons_interfaces_clients_branches_index_ts-src_view_admin_user_form_index_ts","shared"],(()=>(95884,e(e.s=95884)))),e.O())])}));
//# sourceMappingURL=edit.js.map