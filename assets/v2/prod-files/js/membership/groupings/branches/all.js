"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[571],{4672:(e,t,n)=>{n.d(t,{O1:()=>r,Jx:()=>c});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},c=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r}},6224:(e,t,n)=>{n.d(t,{p:()=>l});var r=n(771),c=n(1942),a=n(7839),o=n(7052),i=n(596),s=n(3600);function l(e=null,t="client_tokenLogin"){return n=this,l=void 0,u=function*(){const n=String(window.supersecret.unknowable.ops.id),l=String(window.supersecret.unknowable.ops.email);yield(0,s.W)(l,n,t);const d=(0,o.t)((0,c.Hl)(t)),u=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),h=yield(0,a.d)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new i.H("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new i.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{a(u.next(e))}catch(e){t(e)}}function c(e){try{a(u.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,c)}a((u=u.apply(n,l||[])).next())}));var n,l,d,u}},8804:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranches:()=>B});var r,c=n(3750),a=n(3600),o=n(9392),i=n(9662),s=n(5713),l=(n(5248),n(934),n(6811),n(4672)),d=n(6224),u=n(6455),h=n.n(u),p=n(771),f=n(1942),b=n(7839),m=n(7052),y=n(596),v=n(8967),w=function(e,t,n,r){return new(n||(n=Promise))((function(c,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function i(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((r=r.apply(e,t||[])).next())}))},g=function(e,t,n,r){var c,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(o=(a<3?c(o):a>3?c(t,n,o):c(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,r){return new(n||(n=Promise))((function(c,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function i(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((r=r.apply(e,t||[])).next())}))};let k=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this._branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)(),yield this.getClientBranches()}))}disconnectedCallback(){}render(){return null===this._branches?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._branches?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Branches</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.table}
      `}get table(){return this._branches.length>0?o.dy`
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
      `:o.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getBranches(){return o.dy`
      ${this._branches.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a class="text-blue-700" href="${p.t.URLS.PDB_CLIENT}groupings/branch/edit-branch?branch-id=${e.id}">${e.name}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              ${1===e.id?o.dy``:o.dy`
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" 
                  @click="${this.deleteBranch}"></mwc-icon-button>
              `}
              
            </td>
          </tr>
        `))}
    `}firstUpdated(){}deleteBranch(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));1!==t&&(yield function(e,t="client_tokenLogin"){return w(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,a.W)(r,n,t);const c=(0,m.t)((0,f.Hl)(t)),o=p.t.URLS.AKWAABA_API_BASE_URL+"clients/branch/"+e,i={};return h().fire({title:"Remove Branch?",text:"You may have members assigned to this branch. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,b.d)(o,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+c}},!1).then((e=>{try{const t=new y.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,v.T)(e);h().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new y.H("delete",n,!0);return r.postForm,r}})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}h().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t))}))}getClientBranches(){return C(this,void 0,void 0,(function*(){const e=yield(0,d.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}createRenderRoot(){return this}};k.styles=[o.iv`
   :host { display: block; }
  `],g([(0,i.C)({type:Number}),_("design:type",Number)],k.prototype,"CLIENT_ID",void 0),g([(0,i.C)({type:Array}),_("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],k.prototype,"_data",void 0),g([(0,i.C)({type:Object}),_("design:type",Object)],k.prototype,"urlQueryParams",void 0),g([(0,i.C)({type:Array}),_("design:type",Array)],k.prototype,"_branches",void 0),k=g([(0,s.M)("membership-groupings-branches-all"),_("design:paramtypes",[])],k);var x=function(e,t,n,r){var c,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(o=(a<3?c(o):a>3?c(t,n,o):c(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let B=class extends o.oi{constructor(){super(),(0,c.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,c=function*(){e.connectedCallback.call(this),yield(0,a.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,a){function o(e){try{s(c.next(e))}catch(e){a(e)}}function i(e){try{s(c.throw(e))}catch(e){a(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,i)}s((c=c.apply(t,n||[])).next())}));var t,n,r,c}disconnectedCallback(){}render(){return o.dy`
      <membership-groupings-branches-all CLIENT_ID="${this.clientId}"></membership-groupings-branches-all>
    `}firstUpdated(){}createRenderRoot(){return this}};x([(0,i.C)({type:String}),R("design:type",String)],B.prototype,"email",void 0),x([(0,i.C)({type:Number}),R("design:type",Number)],B.prototype,"mId",void 0),x([(0,i.C)({type:Number}),R("design:type",Number)],B.prototype,"clientId",void 0),B=x([(0,s.M)("membership-groupings-branches"),R("design:paramtypes",[])],B)}},e=>(e.O(0,[744,185,674,907,214,985,948,712],(()=>(8804,e(e.s=8804)))),e.O())])}));
//# sourceMappingURL=all.js.map