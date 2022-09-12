"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["    membership/id-prefix/branch-prefix"],{4954:(e,t,r)=>{r.r(t),r.d(t,{IdBranchPrefix:()=>n}),r(9579);var i=r(5862),s=r(9662),a=(r(633),function(e,t,r,i){var s,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(n=(a<3?s(n):a>3?s(t,r,n):s(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n});let n=class extends i.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,s=function*(){e.connectedCallback.call(this)},new((i=void 0)||(i=Promise))((function(e,a){function n(e){try{d(s.next(e))}catch(e){a(e)}}function c(e){try{d(s.throw(e))}catch(e){a(e)}}function d(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(n,c)}d((s=s.apply(t,r||[])).next())}));var t,r,i,s}disconnectedCallback(){}render(){return i.html`
      <id-branch-prefix-view></id-branch-prefix-view>
    `}firstUpdated(){}createRenderRoot(){return this}};n=a([(0,s.customElement)("id-branch-prefix"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],n)},633:(e,t,r)=>{r.r(t),r.d(t,{IdBranchPrefixView:()=>h}),r(5501);var i,s=r(5862),a=r(9662),n=(r(3283),r(6413),r(1511),r(4672)),c=(r(430),r(697),r(704)),d=r(95),o=r(445),l=r(527),f=r(6224),p=function(e,t,r,i){var s,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(n=(a<3?s(n):a>3?s(t,r,n):s(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,r,i){return new(r||(r=Promise))((function(s,a){function n(e){try{d(i.next(e))}catch(e){a(e)}}function c(e){try{d(i.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,c)}d((i=i.apply(e,t||[])).next())}))};let h=class extends s.LitElement{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[],this.urlQueryParams=void 0,this._memberPrefixIds=[],this._branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,n.urlQueryParams)(),yield this.getMemberCategoryIdPrefix(),yield this.getClientBranches()}))}disconnectedCallback(){}render(){return null===this._memberPrefixIds?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberPrefixIds?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Prefix Id</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.form}
        <hr />
        <div class="flex justify-end my-2">
          <mwc-button raised label="Add Branch Prefix" class="ml-1 success" icon="add" @click="${this.addNew}"></mwc-button> 
        </div>
        ${this.table}
      `}get form(){return this._memberPrefixIds.length>0?0===this.prefixId?s.html`
          <id-category-prefix-add .branches="${this._branches}"></id-category-prefix-add>
        `:s.html`
          <id-category-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}" .branches="${this._branches}"></id-category-prefix-edit>
        `:s.html`
        <id-category-prefix-add .branches="${this._branches}"></id-category-prefix-add>
      `}get table(){return this._memberPrefixIds.length>0?s.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member ID Prefix</b>
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
                ${this.getMemberPrefixIds}
              </tbody>
            </table>
          </div>
        </div>
      `:s.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberPrefixIds(){return s.html`
      ${this._memberPrefixIds.map(((e,t)=>s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.prefix}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${e.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `))}
    `}firstUpdated(){}addNew(e){return m(this,void 0,void 0,(function*(){e.preventDefault(),this.prefixId=0,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus()}))}editMemberPrefixId(e){return m(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("edit-this-item"));this.prefixId=t,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus();for(const e of this._memberPrefixIds)e.id===this.prefixId&&(this.prefixEdit[0]=e)}))}deleteMemberPrefixId(e){return m(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,o.DELETE_MemberCategoryIdPrefix)(t)}))}getMemberCategoryIdPrefix(){return m(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberCategoryIdPrefix)();let t=[];if(null===e)t.push({id:0,prefix:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const r=e.response.data.map((e=>d.Convert.toMembershipMemberCategoryIDPrefixModel(JSON.stringify(e))));console.log({DATA:r}),t=[...r]}this._memberPrefixIds=[...this._memberPrefixIds,...t]}))}getClientBranches(){return m(this,void 0,void 0,(function*(){const e=yield(0,f.GET_ClientBranches)();let t=[];if(null===e)t.push({id:0,name:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const r=e.response.data.map((e=>l.Convert.toClientBranchModel(JSON.stringify(e))));console.log({DATA:r}),t=[...r]}this._branches=[...this._branches,...t]}))}createRenderRoot(){return this}};h.styles=[s.css`
   :host { display: block; }
  `],p([(0,a.property)({type:Number}),u("design:type",Number)],h.prototype,"prefixId",void 0),p([(0,a.property)({type:Array}),u("design:type",Array)],h.prototype,"prefixEdit",void 0),p([(0,a.property)({type:Array}),u("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],h.prototype,"_data",void 0),p([(0,a.property)({type:Object}),u("design:type",Object)],h.prototype,"urlQueryParams",void 0),p([(0,a.property)({type:Array}),u("design:type",Array)],h.prototype,"_memberPrefixIds",void 0),p([(0,a.property)({type:Array}),u("design:type",Array)],h.prototype,"_branches",void 0),h=p([(0,a.customElement)("id-branch-prefix-view"),u("design:paramtypes",[])],h)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_addons_widgets_form_new_select_ts","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_url_query_params_inde-dc3646","shared"],(()=>(4954,e(e.s=4954)))),e.O())])}));
//# sourceMappingURL=branch-prefix.js.map