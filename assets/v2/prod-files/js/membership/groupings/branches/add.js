/*! For license information please see add.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[717],{4672:(e,t,n)=>{n.d(t,{O1:()=>r,Jx:()=>o});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r}},6946:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesAdd:()=>x});var r,o=n(3750),c=n(3600),i=n(9392),s=n(9662),a=n(5713),l=(n(5248),n(3313),n(934),n(6811),n(4672)),d=n(6455),u=n.n(d),f=n(771),p=n(1942),h=n(7839),m=n(7052),b=n(596),y=n(8967),v=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}a((r=r.apply(e,t||[])).next())}))},w=function(e,t,n,r){var o,c=arguments.length,i=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(c<3?o(i):c>3?o(t,n,i):o(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function s(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}a((r=r.apply(e,t||[])).next())}))};let C=class extends i.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)()}))}disconnectedCallback(){}render(){return i.dy`
      ${this.form}
    `}get form(){return i.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Branch</h1>
                  <h3 class="h3">Add Branch</h3>
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
    `}get branchField(){return i.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return k(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e="client_tokenLogin"){return v(this,void 0,void 0,(function*(){const t=String(window.supersecret.unknowable.ops.id),n=String(window.supersecret.unknowable.ops.email);yield(0,c.W)(n,t,e);const r=(0,m.t)((0,p.Hl)(e)),o=f.t.URLS.AKWAABA_API_BASE_URL+"clients/branch",i=document.querySelector('[make-general-posts="client-branch"]'),s=new FormData(i);return u().fire({title:"Add Branch?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,h.d)(o,{method:"POST",body:s,headers:{Authorization:"Token "+r}},!1).then((e=>{const t=new b.H("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,y.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&u().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};C.styles=[i.iv`
   :host { display: block; }
  `],w([(0,s.C)({type:Number}),g("design:type",Number)],C.prototype,"CLIENT_ID",void 0),w([(0,s.C)({type:Array}),g("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],C.prototype,"_data",void 0),w([(0,s.C)({type:Object}),g("design:type",Object)],C.prototype,"urlQueryParams",void 0),C=w([(0,a.M)("membership-groupings-branches-add-branch"),g("design:paramtypes",[])],C);var R=function(e,t,n,r){var o,c=arguments.length,i=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(c<3?o(i):c>3?o(t,n,i):o(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let x=class extends i.oi{constructor(){super(),(0,o.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),yield(0,c.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,c){function i(e){try{a(o.next(e))}catch(e){c(e)}}function s(e){try{a(o.throw(e))}catch(e){c(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,s)}a((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){return i.dy`
      <membership-groupings-branches-add-branch CLIENT_ID="${this.clientId}"></membership-groupings-branches-add-branch>
    `}firstUpdated(){}createRenderRoot(){return this}};R([(0,s.C)({type:String}),O("design:type",String)],x.prototype,"email",void 0),R([(0,s.C)({type:Number}),O("design:type",Number)],x.prototype,"mId",void 0),R([(0,s.C)({type:Number}),O("design:type",Number)],x.prototype,"clientId",void 0),x=R([(0,a.M)("membership-groupings-branches-add"),O("design:paramtypes",[])],x)},4232:(e,t,n)=>{n.d(t,{pt:()=>c,OR:()=>i,hl:()=>a});var r=n(3692);const{H:o}=r.Al,c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,i=e=>void 0===e.strings,s={},a=(e,t=s)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{Xe:()=>r.Xe,pX:()=>r.pX,XM:()=>r.XM});var r=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(3692),o=n(875),c=n(4232);const i=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,c.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,i=e.name;if(e.type===o.pX.PROPERTY){if(t===n[i])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(i)===t+"")return r.Jb;return(0,c.hl)(e),t}})}},e=>(e.O(0,[744,185,674,907,214,985,948,712],(()=>(6946,e(e.s=6946)))),e.O())])}));
//# sourceMappingURL=add.js.map