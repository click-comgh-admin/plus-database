"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[238],{4672:(e,t,r)=>{r.d(t,{O1:()=>n,Jx:()=>o});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n}},72:(e,t,r)=>{r.d(t,{L:()=>l});var n=r(771),o=r(1942),a=r(7839),c=r(7052),i=r(596),s=r(3600);function l(e=null,t="client_tokenLogin"){return r=this,l=void 0,u=function*(){const r=String(window.supersecret.unknowable.ops.id),l=String(window.supersecret.unknowable.ops.email);yield(0,s.W)(l,r,t);const d=(0,c.t)((0,o.Hl)(t)),u=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),m=yield(0,a.d)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new i.H("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new i.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{a(u.next(e))}catch(e){t(e)}}function o(e){try{a(u.throw(e))}catch(e){t(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof d?r:new d((function(e){e(r)}))).then(n,o)}a((u=u.apply(r,l||[])).next())}));var r,l,d,u}},134:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategories:()=>O});var n,o=r(3750),a=r(3600),c=r(9392),i=r(9662),s=r(5713),l=(r(5248),r(934),r(6811),r(4672)),d=r(771),u=r(72),m=r(6455),p=r.n(m),b=r(1942),f=r(7839),h=r(7052),y=r(596),g=r(8967),v=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function c(e){try{s(n.next(e))}catch(e){a(e)}}function i(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,i)}s((n=n.apply(e,t||[])).next())}))},w=function(e,t,r,n){var o,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(a<3?o(c):a>3?o(t,r,c):o(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function c(e){try{s(n.next(e))}catch(e){a(e)}}function i(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,i)}s((n=n.apply(e,t||[])).next())}))};let k=class extends c.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){return null===this._memberCategories?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberCategories?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">MemberCategories</span>: undefined error</h4>
          </div>
        </div>
      `:c.dy`
        ${this.table}
      `}get table(){return this._memberCategories.length>0?c.dy`
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
      `:c.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberCategories(){return c.dy`
      ${this._memberCategories.map(((e,t)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a class="text-blue-700" href="${d.t.URLS.PDB_CLIENT}groupings/member-category/edit-member-category?member-category-id=${e.id}">${e.category}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              ${1===e.id?c.dy``:c.dy`
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                  @click="${this.deleteMemberCategory}"></mwc-icon-button>
              `}
              
            </td>
          </tr>
        `))}
    `}firstUpdated(){}deleteMemberCategory(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));1!==t&&(yield function(e,t="client_tokenLogin"){return v(this,void 0,void 0,(function*(){const r=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(n,r,t);const o=(0,h.t)((0,b.Hl)(t)),c=d.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,i={};return p().fire({title:"Remove Member Category?",text:"You may have members assigned to this category. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,f.d)(c,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+o}},!1).then((e=>{try{const t=new y.H("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new y.H("delete",r,!0);return n.postForm,n}})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}p().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t))}))}getClientMemberCategories(){return C(this,void 0,void 0,(function*(){const e=yield(0,u.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};k.styles=[c.iv`
   :host { display: block; }
  `],w([(0,i.C)({type:Number}),_("design:type",Number)],k.prototype,"CLIENT_ID",void 0),w([(0,i.C)({type:Array}),_("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],k.prototype,"_data",void 0),w([(0,i.C)({type:Object}),_("design:type",Object)],k.prototype,"urlQueryParams",void 0),w([(0,i.C)({type:Array}),_("design:type",Array)],k.prototype,"_memberCategories",void 0),k=w([(0,s.M)("membership-groupings-member-categories-all"),_("design:paramtypes",[])],k);var x=function(e,t,r,n){var o,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(a<3?o(c):a>3?o(t,r,c):o(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let O=class extends c.oi{constructor(){super(),(0,o.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this),yield(0,a.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,a){function c(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(c,i)}s((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return c.dy`
      <membership-groupings-member-categories-all CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-all>
    `}firstUpdated(){}createRenderRoot(){return this}};x([(0,i.C)({type:String}),R("design:type",String)],O.prototype,"email",void 0),x([(0,i.C)({type:Number}),R("design:type",Number)],O.prototype,"mId",void 0),x([(0,i.C)({type:Number}),R("design:type",Number)],O.prototype,"clientId",void 0),O=x([(0,s.M)("membership-groupings-member-categories"),R("design:paramtypes",[])],O)}},e=>(e.O(0,[744,185,674,907,214,985,948,712],(()=>(134,e(e.s=134)))),e.O())])}));
//# sourceMappingURL=all.js.map