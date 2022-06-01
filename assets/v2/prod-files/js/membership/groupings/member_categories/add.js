/*! For license information please see add.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[75],{4672:(e,t,r)=>{r.d(t,{O1:()=>n,Jx:()=>o});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n}},3717:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesAdd:()=>x});var n,o=r(3750),i=r(3600),c=r(9392),s=r(9662),a=r(5713),l=(r(5248),r(3313),r(934),r(6811),r(4672)),d=r(6455),u=r.n(d),f=r(771),m=r(1942),p=r(7839),b=r(7052),y=r(596),h=r(8967),g=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}a((n=n.apply(e,t||[])).next())}))},v=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function c(e){try{a(n.next(e))}catch(e){i(e)}}function s(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}a((n=n.apply(e,t||[])).next())}))};let k=class extends c.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)()}))}disconnectedCallback(){}render(){return c.dy`
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
                  <h3 class="h3">Add Member Category</h3>
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
                      <mwc-button label="Add" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
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
    `}get memberCategoryField(){return c.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Member Category</h4>
            <mwc-textfield name="category" type="text" class="w-full" id="category" value="" label="Enter member-category Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e="client_tokenLogin"){return g(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),r=String(window.supersecret.unknowable.ops.email);yield(0,i.W)(r,t,e);const n=(0,b.t)((0,m.Hl)(e)),o=f.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category",c=document.querySelector('[make-general-posts="groupings-member-category"]'),s=new FormData(c);return u().fire({title:"Add Member Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,p.d)(o,{method:"POST",body:s,headers:{Authorization:"Token "+n}},!1).then((e=>{const t=new y.H("post",e,!1,c),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,h.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&u().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};k.styles=[c.iv`
   :host { display: block; }
  `],v([(0,s.C)({type:Number}),w("design:type",Number)],k.prototype,"CLIENT_ID",void 0),v([(0,s.C)({type:Array}),w("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],k.prototype,"_data",void 0),v([(0,s.C)({type:Object}),w("design:type",Object)],k.prototype,"urlQueryParams",void 0),k=v([(0,a.M)("membership-groupings-member-categories-add-member-category"),w("design:paramtypes",[])],k);var R=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let x=class extends c.oi{constructor(){super(),(0,o.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(c,s)}a((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return c.dy`
      <membership-groupings-member-categories-add-member-category CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-add-member-category>
    `}firstUpdated(){}createRenderRoot(){return this}};R([(0,s.C)({type:String}),O("design:type",String)],x.prototype,"email",void 0),R([(0,s.C)({type:Number}),O("design:type",Number)],x.prototype,"mId",void 0),R([(0,s.C)({type:Number}),O("design:type",Number)],x.prototype,"clientId",void 0),x=R([(0,a.M)("membership-groupings-member-categories-add"),O("design:paramtypes",[])],x)},4232:(e,t,r)=>{r.d(t,{pt:()=>i,OR:()=>c,hl:()=>a});var n=r(3692);const{H:o}=n.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=e=>void 0===e.strings,s={},a=(e,t=s)=>e._$AH=t},8082:(e,t,r)=>{r.d(t,{Xe:()=>n.Xe,pX:()=>n.pX,XM:()=>n.XM});var n=r(875)},3669:(e,t,r)=>{r.d(t,{a:()=>c});var n=r(3692),o=r(875),i=r(4232);const c=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n.Jb||t===n.Ld)return t;const r=e.element,c=e.name;if(e.type===o.pX.PROPERTY){if(t===r[c])return n.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(c))return n.Jb}else if(e.type===o.pX.ATTRIBUTE&&r.getAttribute(c)===t+"")return n.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[744,185,674,907,214,985,948,712],(()=>(3717,e(e.s=3717)))),e.O())])}));
//# sourceMappingURL=add.js.map