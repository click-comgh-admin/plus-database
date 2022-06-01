/*! For license information please see edit.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[246],{4672:(e,t,r)=>{r.d(t,{O1:()=>n,Jx:()=>o});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n}},72:(e,t,r)=>{r.d(t,{L:()=>l});var n=r(771),o=r(1942),i=r(7839),c=r(7052),a=r(596),s=r(3600);function l(e=null,t="client_tokenLogin"){return r=this,l=void 0,u=function*(){const r=String(window.supersecret.unknowable.ops.id),l=String(window.supersecret.unknowable.ops.email);yield(0,s.W)(l,r,t);const d=(0,c.t)((0,o.Hl)(t)),u=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),m=yield(0,i.d)(u,{method:"GET",headers:{Authorization:"Token "+d}},!0);try{return new a.H("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new a.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{i(u.next(e))}catch(e){t(e)}}function o(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof d?r:new d((function(e){e(r)}))).then(n,o)}i((u=u.apply(r,l||[])).next())}));var r,l,d,u}},1056:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesEdit:()=>A});var n,o=r(3750),i=r(3600),c=r(9392),a=r(9662),s=r(5713),l=(r(5248),r(3313),r(934),r(6811),r(4672)),d=r(6455),u=r.n(d),m=r(771),f=r(1942),p=r(7839),y=r(7052),b=r(596),g=r(8967),h=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,a)}s((n=n.apply(e,t||[])).next())}))},v=r(72),w=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,a)}s((n=n.apply(e,t||[])).next())}))};let _=class extends c.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.__memberCategory=null,this.memberCategoryId=0}set _memberCategory(e){this.__memberCategory=e,this.requestUpdate()}get _memberCategory(){return this.__memberCategory}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)(),this.getMemberCategoryId(),yield this.getClientMemberCategory()}))}disconnectedCallback(){}render(){return null===this._memberCategory?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberCategory?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Category</span>: undefined error</h4>
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
                  <h1 class="h1 !text-red-400">Groupings: Member Category</h1>
                  <h3 class="h3">Edit Member Category</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="groupings-member-category">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.memberCategoryField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">

                      ${1===this.memberCategoryId?c.dy``:c.dy`
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
    `}get memberCategoryField(){let e=null;return e=null!==this._memberCategory&&void 0!==this._memberCategory.data?Array.isArray(this._memberCategory.data)?this._memberCategory.data.length>0?this._memberCategory.data[0]:{id:void 0,category:""}:this._memberCategory.data:{id:void 0,category:""},c.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Member Category</h4>
            <mwc-textfield name="category" type="text" class="w-full" id="category" value="${void 0===e.id?"":e.category}" label="Enter memberCategory Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getMemberCategoryId(){let e=(0,l.Jx)("member-category-id"),t=null!==e?Number(e):null;this.memberCategoryId=Number.isNaN(t)?null:t}getClientMemberCategory(){return k(this,void 0,void 0,(function*(){const e=yield(0,v.L)(this.memberCategoryId);this._memberCategory=null===e?void 0:e.response}))}submitForm(e){return k(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e,t="client_tokenLogin"){return h(this,void 0,void 0,(function*(){const r=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,i.W)(n,r,t);const o=(0,y.t)((0,f.Hl)(t)),c=m.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,a=document.querySelector('[make-general-posts="groupings-member-category"]'),s=new FormData(a);return u().fire({title:"Update Member Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,p.d)(c,{method:"PUT",body:s,headers:{Authorization:"Token "+o}},!1).then((e=>{const t=new b.H("post",e,!1,a),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,g.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&u().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.memberCategoryId)}))}createRenderRoot(){return this}};_.styles=[c.iv`
   :host { display: block; }
  `],w([(0,a.C)({type:Number}),C("design:type",Number)],_.prototype,"CLIENT_ID",void 0),w([(0,a.C)({type:Array}),C("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],_.prototype,"_data",void 0),w([(0,a.C)({type:Object}),C("design:type",Object)],_.prototype,"urlQueryParams",void 0),w([(0,a.C)({type:Number}),C("design:type",Number)],_.prototype,"memberCategoryId",void 0),_=w([(0,s.M)("membership-groupings-member-categories-edit-member-category"),C("design:paramtypes",[])],_);var x=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let A=class extends c.oi{constructor(){super(),(0,o.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(c,a)}s((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return c.dy`
      <membership-groupings-member-categories-edit-member-category CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-edit-member-category>
    `}firstUpdated(){}createRenderRoot(){return this}};x([(0,a.C)({type:String}),R("design:type",String)],A.prototype,"email",void 0),x([(0,a.C)({type:Number}),R("design:type",Number)],A.prototype,"mId",void 0),x([(0,a.C)({type:Number}),R("design:type",Number)],A.prototype,"clientId",void 0),A=x([(0,s.M)("membership-groupings-member-categories-edit"),R("design:paramtypes",[])],A)},4232:(e,t,r)=>{r.d(t,{pt:()=>i,OR:()=>c,hl:()=>s});var n=r(3692);const{H:o}=n.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=e=>void 0===e.strings,a={},s=(e,t=a)=>e._$AH=t},8082:(e,t,r)=>{r.d(t,{Xe:()=>n.Xe,pX:()=>n.pX,XM:()=>n.XM});var n=r(875)},3669:(e,t,r)=>{r.d(t,{a:()=>c});var n=r(3692),o=r(875),i=r(4232);const c=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n.Jb||t===n.Ld)return t;const r=e.element,c=e.name;if(e.type===o.pX.PROPERTY){if(t===r[c])return n.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(c))return n.Jb}else if(e.type===o.pX.ATTRIBUTE&&r.getAttribute(c)===t+"")return n.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[744,185,674,907,214,985,948,712],(()=>(1056,e(e.s=1056)))),e.O())])}));
//# sourceMappingURL=edit.js.map