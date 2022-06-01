"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/branches/all"],{5501:(e,t,n)=>{n.r(t)},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>r,urlQueryParamsGet:()=>o,urlQueryParamsJoin:()=>s});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},s=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},2321:(e,t,n)=>{n.r(t),n.d(t,{DELETE_ClientBranch:()=>p});var r=n(6455),o=n.n(r),s=n(8485),a=n(1942),c=n(7270),i=n(7052),l=n(4492),d=n(8967),u=n(3600),h=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{i(r.next(e))}catch(e){s(e)}}function c(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}i((r=r.apply(e,t||[])).next())}))};function p(e,t="client_tokenLogin"){return h(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,u.verifyToken)(r,n,t);const p=(0,i.base64Decode)((0,a.get_cookie)(t)),f=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch/"+e,m={};return o().fire({title:"Remove Branch?",text:"You may have members assigned to this branch. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,c.http)(f,{method:"DELETE",body:JSON.stringify(m),headers:{Authorization:"Token "+p}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new l.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>l});var r=n(8485),o=n(1942),s=n(7270),a=n(7052),c=n(4492),i=n(3600);function l(e=null,t="client_tokenLogin"){return n=this,l=void 0,u=function*(){const n=String(window.supersecret.unknowable.ops.id),l=String(window.supersecret.unknowable.ops.email);yield(0,i.verifyToken)(l,n,t);const d=(0,a.base64Decode)((0,o.get_cookie)(t)),u=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),h=yield(0,s.http)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new c.NetWorkCallResponses("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new c.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{s(u.next(e))}catch(e){t(e)}}function o(e){try{s(u.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,o)}s((u=u.apply(n,l||[])).next())}));var n,l,d,u}},9693:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranches:()=>l}),n(9579);var r=n(3750),o=n(3600),s=n(5862),a=n(9662),c=(n(1786),function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),(0,r.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function a(e){try{i(s.next(e))}catch(e){o(e)}}function c(e){try{i(s.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}i((s=s.apply(t,n||[])).next())}));var t,n,r,s}disconnectedCallback(){}render(){return s.html`
      <membership-groupings-branches-all CLIENT_ID="${this.clientId}"></membership-groupings-branches-all>
    `}firstUpdated(){}createRenderRoot(){return this}};c([(0,a.property)({type:String}),i("design:type",String)],l.prototype,"email",void 0),c([(0,a.property)({type:Number}),i("design:type",Number)],l.prototype,"mId",void 0),c([(0,a.property)({type:Number}),i("design:type",Number)],l.prototype,"clientId",void 0),l=c([(0,a.customElement)("membership-groupings-branches"),i("design:paramtypes",[])],l)},1786:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesAll:()=>p}),n(5501);var r,o=n(5862),s=n(9662),a=(n(3283),n(6413),n(1511),n(4672)),c=n(6224),i=n(2321),l=n(8485),d=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{i(r.next(e))}catch(e){s(e)}}function c(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}i((r=r.apply(e,t||[])).next())}))};let p=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this._branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.urlQueryParams)(),yield this.getClientBranches()}))}disconnectedCallback(){}render(){return null===this._branches?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._branches?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Branches</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.table}
      `}get table(){return this._branches.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Branch</b>
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
                ${this.getBranches}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getBranches(){return o.html`
      ${this._branches.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a class="text-blue-700" href="${l.CONSTANTS.URLS.PDB_CLIENT}groupings/branch/edit-branch?branch-id=${e.id}">${e.name}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              ${1===e.id?o.html``:o.html`
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" 
                  @click="${this.deleteBranch}"></mwc-icon-button>
              `}
              
            </td>
          </tr>
        `))}
    `}firstUpdated(){}deleteBranch(e){return h(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));1!==t&&(yield(0,i.DELETE_ClientBranch)(t))}))}getClientBranches(){return h(this,void 0,void 0,(function*(){const e=yield(0,c.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}createRenderRoot(){return this}};p.styles=[o.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"CLIENT_ID",void 0),d([(0,s.property)({type:Array}),u("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],p.prototype,"_data",void 0),d([(0,s.property)({type:Object}),u("design:type",Object)],p.prototype,"urlQueryParams",void 0),d([(0,s.property)({type:Array}),u("design:type",Array)],p.prototype,"_branches",void 0),p=d([(0,s.customElement)("membership-groupings-branches-all"),u("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--572f7f","src_addons_classes_network_calls_response_ts-src_addons_functions_https_https_swal_error_format_ts","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(9693,e(e.s=9693)))),e.O())])}));
//# sourceMappingURL=all.js.map