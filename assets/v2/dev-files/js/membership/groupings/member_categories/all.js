"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/member_categories/all"],{5501:(e,t,r)=>{r.r(t)},4672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>o,urlQueryParamsJoin:()=>s});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},s=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},5482:(e,t,r)=>{r.r(t),r.d(t,{DELETE_MemberGroupingsMemberCategory:()=>p});var n=r(6455),o=r.n(n),s=r(8485),a=r(1942),i=r(7270),c=r(7052),l=r(4492),d=r(8967),u=r(3600),m=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))};function p(e,t="client_tokenLogin"){return m(this,void 0,void 0,(function*(){const r=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(n,r,t);const p=(0,c.base64Decode)((0,a.get_cookie)(t)),b=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,f={};return o().fire({title:"Remove Member Category?",text:"You may have members assigned to this category. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,i.http)(b,{method:"DELETE",body:JSON.stringify(f),headers:{Authorization:"Token "+p}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new l.NetWorkCallResponses("delete",r,!0);return n.postForm,n}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}o().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},72:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsMemberCategories:()=>l});var n=r(8485),o=r(1942),s=r(7270),a=r(7052),i=r(4492),c=r(3600);function l(e=null,t="client_tokenLogin"){return r=this,l=void 0,u=function*(){const r=String(window.supersecret.unknowable.ops.id),l=String(window.supersecret.unknowable.ops.email);yield(0,c.verifyToken)(l,r,t);const d=(0,a.base64Decode)((0,o.get_cookie)(t)),u=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),m=yield(0,s.http)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new i.NetWorkCallResponses("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{s(u.next(e))}catch(e){t(e)}}function o(e){try{s(u.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof d?r:new d((function(e){e(r)}))).then(n,o)}s((u=u.apply(r,l||[])).next())}));var r,l,d,u}},4396:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategories:()=>l}),r(9579);var n=r(3750),o=r(3600),s=r(5862),a=r(9662),i=(r(8024),function(e,t,r,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),(0,n.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,s=function*(){e.connectedCallback.call(this),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,i)}c((s=s.apply(t,r||[])).next())}));var t,r,n,s}disconnectedCallback(){}render(){return s.html`
      <membership-groupings-member-categories-all CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-all>
    `}firstUpdated(){}createRenderRoot(){return this}};i([(0,a.property)({type:String}),c("design:type",String)],l.prototype,"email",void 0),i([(0,a.property)({type:Number}),c("design:type",Number)],l.prototype,"mId",void 0),i([(0,a.property)({type:Number}),c("design:type",Number)],l.prototype,"clientId",void 0),l=i([(0,a.customElement)("membership-groupings-member-categories"),c("design:paramtypes",[])],l)},8024:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesAll:()=>p}),r(5501);var n,o=r(5862),s=r(9662),a=(r(3283),r(6413),r(1511),r(4672)),i=r(8485),c=r(72),l=r(5482),d=function(e,t,r,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))};let p=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.urlQueryParams)(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){return null===this._memberCategories?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberCategories?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">MemberCategories</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.table}
      `}get table(){return this._memberCategories.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member Category</b>
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
                ${this.getMemberCategories}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberCategories(){return o.html`
      ${this._memberCategories.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a class="text-blue-700" href="${i.CONSTANTS.URLS.PDB_CLIENT}groupings/member-category/edit-member-category?member-category-id=${e.id}">${e.category}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              ${1===e.id?o.html``:o.html`
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                  @click="${this.deleteMemberCategory}"></mwc-icon-button>
              `}
              
            </td>
          </tr>
        `))}
    `}firstUpdated(){}deleteMemberCategory(e){return m(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));1!==t&&(yield(0,l.DELETE_MemberGroupingsMemberCategory)(t))}))}getClientMemberCategories(){return m(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};p.styles=[o.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"CLIENT_ID",void 0),d([(0,s.property)({type:Array}),u("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],p.prototype,"_data",void 0),d([(0,s.property)({type:Object}),u("design:type",Object)],p.prototype,"urlQueryParams",void 0),d([(0,s.property)({type:Array}),u("design:type",Array)],p.prototype,"_memberCategories",void 0),p=d([(0,s.customElement)("membership-groupings-member-categories-all"),u("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(4396,e(e.s=4396)))),e.O())])}));
//# sourceMappingURL=all.js.map