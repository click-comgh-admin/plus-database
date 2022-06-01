/*! For license information please see edit.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[821],{4672:(e,t,n)=>{n.d(t,{O1:()=>r,Jx:()=>o});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r}},6224:(e,t,n)=>{n.d(t,{p:()=>l});var r=n(771),o=n(1942),i=n(7839),c=n(7052),a=n(596),s=n(3600);function l(e=null,t="client_tokenLogin"){return n=this,l=void 0,u=function*(){const n=String(window.supersecret.unknowable.ops.id),l=String(window.supersecret.unknowable.ops.email);yield(0,s.W)(l,n,t);const d=(0,c.t)((0,o.Hl)(t)),u=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),h=yield(0,i.d)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new a.H("get",h)}catch(e){console.error({error:e});let t=h;return t.error=e,new a.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{i(u.next(e))}catch(e){t(e)}}function o(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,o)}i((u=u.apply(n,l||[])).next())}));var n,l,d,u}},8852:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesEdit:()=>A});var r,o=n(3750),i=n(3600),c=n(9392),a=n(9662),s=n(5713),l=(n(5248),n(3313),n(934),n(6811),n(4672)),d=n(6224),u=n(6455),h=n.n(u),f=n(771),p=n(1942),b=n(7839),m=n(7052),y=n(596),v=n(8967),g=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))},w=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))};let C=class extends c.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.__branch=null,this.branchId=0}set _branch(e){this.__branch=e,this.requestUpdate()}get _branch(){return this.__branch}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)(),this.getBranchId(),yield this.getClientBranch()}))}disconnectedCallback(){}render(){return null===this._branch?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._branch?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Branch</span>: undefined error</h4>
          </div>
        </div>
      `:c.dy`
        ${this.form}
      `}get form(){return c.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Branch</h1>
                  <h3 class="h3">Edit Branch</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="client-branch">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.branchField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      ${1===this.branchId?c.dy``:c.dy`
                        <mwc-button label="Update" raised class="button" @click="${this.submitForm}">
                        </mwc-button>
                      `}
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get branchField(){let e=null;return e=null!==this._branch&&void 0!==this._branch.data?Array.isArray(this._branch.data)?this._branch.data.length>0?this._branch.data[0]:{id:void 0,name:""}:this._branch.data:{id:void 0,name:""},c.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="${void 0===e.id?"":e.name}" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getBranchId(){let e=(0,l.Jx)("branch-id"),t=null!==e?Number(e):null;this.branchId=Number.isNaN(t)?null:t}getClientBranch(){return _(this,void 0,void 0,(function*(){const e=yield(0,d.p)(this.branchId);this._branch=null===e?void 0:e.response}))}submitForm(e){return _(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e,t="client_tokenLogin"){return g(this,void 0,void 0,(function*(){const n=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,i.W)(r,n,t);const o=(0,m.t)((0,p.Hl)(t)),c=f.t.URLS.AKWAABA_API_BASE_URL+"clients/branch/"+e,a=document.querySelector('[make-general-posts="client-branch"]'),s=new FormData(a);return h().fire({title:"Update Branch?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,b.d)(c,{method:"PUT",body:s,headers:{Authorization:"Token "+o}},!1).then((e=>{const t=new y.H("post",e,!1,a),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,v.T)(e);h().showValidationMessage(`${t}`)}return t})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&h().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.branchId)}))}createRenderRoot(){return this}};C.styles=[c.iv`
   :host { display: block; }
  `],w([(0,a.C)({type:Number}),k("design:type",Number)],C.prototype,"CLIENT_ID",void 0),w([(0,a.C)({type:Array}),k("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],C.prototype,"_data",void 0),w([(0,a.C)({type:Object}),k("design:type",Object)],C.prototype,"urlQueryParams",void 0),w([(0,a.C)({type:Number}),k("design:type",Number)],C.prototype,"branchId",void 0),C=w([(0,s.M)("membership-groupings-branches-edit-branch"),k("design:paramtypes",[])],C);var x=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let A=class extends c.oi{constructor(){super(),(0,o.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,a)}s((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){return c.dy`
      <membership-groupings-branches-edit-branch CLIENT_ID="${this.clientId}"></membership-groupings-branches-edit-branch>
    `}firstUpdated(){}createRenderRoot(){return this}};x([(0,a.C)({type:String}),R("design:type",String)],A.prototype,"email",void 0),x([(0,a.C)({type:Number}),R("design:type",Number)],A.prototype,"mId",void 0),x([(0,a.C)({type:Number}),R("design:type",Number)],A.prototype,"clientId",void 0),A=x([(0,s.M)("membership-groupings-branches-edit"),R("design:paramtypes",[])],A)},4232:(e,t,n)=>{n.d(t,{pt:()=>i,OR:()=>c,hl:()=>s});var r=n(3692);const{H:o}=r.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=e=>void 0===e.strings,a={},s=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{Xe:()=>r.Xe,pX:()=>r.pX,XM:()=>r.XM});var r=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>c});var r=n(3692),o=n(875),i=n(4232);const c=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,c=e.name;if(e.type===o.pX.PROPERTY){if(t===n[c])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(c))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(c)===t+"")return r.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[744,185,674,907,214,985,948,712],(()=>(8852,e(e.s=8852)))),e.O())])}));
//# sourceMappingURL=edit.js.map