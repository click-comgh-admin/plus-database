"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/branches/add"],{9579:(e,t,n)=>{n.r(t)},5501:(e,t,n)=>{n.r(t)},3750:(e,t,n)=>{n.r(t),n.d(t,{ACTIVE_PAGE__:()=>o});const o=()=>{const e=document.querySelectorAll("[mm-active]"),t=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];e.forEach((e=>{var n=e.getAttribute("mm-active").split("|");for(let o=0;o<n.length;o++){const r=n[o];t===r&&e.setAttribute("class","mm-active")}}))}},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.r(t),n.d(t,{verifyToken:()=>a,tokenLogin:()=>d});var o=n(8485),r=n(7270),s=n(7052),i=n(1942),c=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((o=o.apply(e,t||[])).next())}))};const a=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,i.get_cookie)(d),f=JSON.stringify({token:(0,s.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,i.get_cookie)(d+"_date"))))return u;yield(0,r.http)(a,{method:"POST",body:f},!0).then((o=>c(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,s.base64Encode)(String(o.jsonData.token));(0,i.set_cookies)(d,e,10),(0,i.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})),l=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",a=n,l=JSON.stringify({email:e,id:t});yield(0,r.http)(c,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,s.base64Encode)(String(e.jsonData.token));(0,i.set_cookies)(a,t,10),(0,i.set_cookies_minutes)(a+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const o=(0,s.base64Encode)(String(t)),r=n;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:r}}},""==(0,i.get_cookie)(r)?yield l(e,o,n):yield a(e,o,n)}))},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>r,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},s=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},2792:(e,t,n)=>{n.r(t),n.d(t,{POST_ClientBranch:()=>u});var o=n(6455),r=n.n(o),s=n(8485),i=n(7270),c=n(4492),a=n(8967),l=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch",n=document.querySelector('[make-general-posts="client-branch"]'),o=new FormData(n);return r().fire({title:"Add Branch?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},7446:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesAdd:()=>l}),n(9579);var o=n(3750),r=n(4108),s=n(5862),i=n(9662),c=(n(9295),function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),(0,o.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,r){function i(e){try{a(s.next(e))}catch(e){r(e)}}function c(e){try{a(s.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,c)}a((s=s.apply(t,n||[])).next())}));var t,n,o,s}disconnectedCallback(){}render(){return s.html`
      <membership-groupings-branches-add-branch CLIENT_ID="${this.clientId}"></membership-groupings-branches-add-branch>
    `}firstUpdated(){}createRenderRoot(){return this}};c([(0,i.property)({type:String}),a("design:type",String)],l.prototype,"email",void 0),c([(0,i.property)({type:Number}),a("design:type",Number)],l.prototype,"mId",void 0),c([(0,i.property)({type:Number}),a("design:type",Number)],l.prototype,"clientId",void 0),l=c([(0,i.customElement)("membership-groupings-branches-add"),a("design:paramtypes",[])],l)},9295:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesAddBranch:()=>u}),n(5501);var o,r=n(5862),s=n(9662),i=(n(3283),n(3313),n(6413),n(1511),n(4672)),c=n(2792),a=function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((o=o.apply(e,t||[])).next())}))};let u=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,i.urlQueryParams)()}))}disconnectedCallback(){}render(){return r.html`
      ${this.form}
    `}get form(){return r.html`
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
    `}get branchField(){return r.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,c.POST_ClientBranch)()}))}createRenderRoot(){return this}};u.styles=[r.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],u.prototype,"CLIENT_ID",void 0),a([(0,s.property)({type:Array}),l("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],u.prototype,"_data",void 0),a([(0,s.property)({type:Object}),l("design:type",Object)],u.prototype,"urlQueryParams",void 0),u=a([(0,s.customElement)("membership-groupings-branches-add-branch"),l("design:paramtypes",[])],u)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(7446,e(e.s=7446)))),e.O())])}));
//# sourceMappingURL=add.js.map