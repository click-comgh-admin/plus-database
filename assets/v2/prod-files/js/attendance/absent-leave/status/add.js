"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1052],{8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},7725:(e,t,n)=>{n.d(t,{eF:()=>i,U8:()=>s,hk:()=>l});var r=n(7052),o=n(1942),a=n(1489);const c="pdb-active-branch",i=e=>{const t=JSON.stringify(e);(0,o.Ad)(c,"",-1),(0,o.Ad)(c,(0,r.h)(t),3500)};function s(){(0,o.Ad)(c,"",-1)}const l=()=>{if(""===(0,o.Hl)(c))return null;{const e=(0,r.t)((0,o.Hl)(c)),t=JSON.parse(e);return(0,a.N)(t)}}},1489:(e,t,n)=>{function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.d(t,{j:()=>r,N:()=>o})},6224:(e,t,n)=>{n.d(t,{p:()=>i});var r=n(771),o=n(7270),a=n(596),c=n(3600);function i(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),i=yield(0,o.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new a.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,a)}c((s=s.apply(t,n||[])).next())}));var t,n,i,s}},9333:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveStatusAdd:()=>w});var r=n(9392),o=n(9662),a=n(5713),c=(n(1239),n(9261),n(5248),n(3313),n(3600)),i=n(6224),s=n(7725),l=n(6455),d=n.n(l),u=n(771),f=n(7270),h=n(596),m=n(8967),p=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function c(e){try{s(r.next(e))}catch(e){a(e)}}function i(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((r=r.apply(e,t||[])).next())}))},y=function(e,t,n,r){var o,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function c(e){try{s(r.next(e))}catch(e){a(e)}}function i(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((r=r.apply(e,t||[])).next())}))};let w=class extends r.oi{constructor(){super(),this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,c.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getBranches()}))}disconnectedCallback(){}render(){let e=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),r.dy`
    <div class="form-container flex justify-center">
      <div class="app-container- !px-0">
        <div class="app-container--row !px-0">
          <div class="app-container--col-md-12">
            <header class="header warning app-container--col-md-12">
              <label for="" class="label">
                <mwc-icon class="icon">format_strikethrough</mwc-icon>
                <h1 class="h1 !text-red-400">New Status</h1>
                <h3 class="h3">Create Status!</h3>
              </label>
            </header>
            <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-status" enctype="multipart/form-data">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Branch</h4>
                  <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                    name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                    ${1===e?r.dy`
                      <mwc-list-item value="0">Select Branch</mwc-list-item>
                      ${this._branches.map((t=>e===t.id?r.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:r.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    `:r.dy`
                      ${this._branches.map((t=>{if(t.id===e)return r.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
                    `}
                  </mwc-select>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Status</h4>
                  <mwc-textfield name="status" id="status" label="Enter Status"
                    outlined required>
                  </mwc-textfield>
                </div>
              </div>
    
              <div class="form-input-container">
                <mwc-button label="Create" raised class="w-full" @click="${this.submitForm}">
                </mwc-button>
              </div>
            
              <div class="flex form-input-container items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md">
                <label class="block font-medium text-sm text-gray-600 w-full">
                  ...
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `}branchChange(e){this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}firstUpdated(){}getBranches(){return v(this,void 0,void 0,(function*(){const e=yield(0,i.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return p(this,void 0,void 0,(function*(){const e=(0,c.Ie)(),t=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status",n=document.querySelector('[make-general-posts="attendance-absent-leave-status"]'),r=new FormData(n);return d().fire({title:"Create Status?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>p(this,void 0,void 0,(function*(){return yield(0,f.d)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new h.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,m.T)(e);d().showValidationMessage(`${t}`)}return t})).catch((e=>{d().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!d().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&d().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};w.styles=[r.iv`
   :host { display: block; }
  `],y([(0,o.C)({type:Number}),b("design:type",Number)],w.prototype,"accountType",void 0),y([(0,o.C)({type:Number}),b("design:type",Number)],w.prototype,"selectedBranch",void 0),y([(0,o.C)({type:Array}),b("design:type",Array)],w.prototype,"_userLoginInfo",void 0),y([(0,o.C)({type:Array}),b("design:type",Array)],w.prototype,"_activeBranchId",void 0),y([(0,o.C)({type:Array}),b("design:type",Array)],w.prototype,"_branches",void 0),w=y([(0,a.M)("attendance-absent-leave-status-add"),b("design:paramtypes",[])],w)}},e=>(e.O(0,[2185,5744,9674,2459,3469,5291,4017,3712],(()=>(9333,e(e.s=9333)))),e.O())])}));
//# sourceMappingURL=add.js.map