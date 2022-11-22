"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/registration/excel"],{69579:(e,t,n)=>{n.r(t)},91243:(e,t,n)=>{n.r(t)},45501:(e,t,n)=>{n.r(t)},83750:(e,t,n)=>{n.r(t),n.d(t,{ACTIVE_PAGE__:()=>o});const o=()=>{const e=document.querySelectorAll("[mm-active]"),t=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];e.forEach((e=>{var n=e.getAttribute("mm-active").split("|");for(let o=0;o<n.length;o++){const r=n[o];t===r&&e.setAttribute("class","mm-active")}}))}},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},14108:(e,t,n)=>{n.r(t),n.d(t,{verifyToken:()=>a,tokenLogin:()=>d});var o=n(48485),r=n(87270),i=n(67052),s=n(21942),l=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};const a=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,p=(0,s.get_cookie)(d),u=JSON.stringify({token:(0,i.base64Decode)(p)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.get_cookie)(d+"_date"))))return p;yield(0,r.http)(a,{method:"POST",body:u},!0).then((o=>l(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,i.base64Encode)(String(o.jsonData.token));(0,s.set_cookies)(d,e,10),(0,s.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield c(e,t,n)}))))})),c=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const l=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",a=n,c=JSON.stringify({email:e,id:t});yield(0,r.http)(l,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,i.base64Encode)(String(e.jsonData.token));(0,s.set_cookies)(a,t,10),(0,s.set_cookies_minutes)(a+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const o=(0,i.base64Encode)(String(t)),r=n;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:r}}},""==(0,s.get_cookie)(r)?yield c(e,o,n):yield a(e,o,n)}))},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>r,urlQueryParamsJoin:()=>i});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},i=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},65360:(e,t,n)=>{n.r(t),n.d(t,{POST_MembershipRegisterExcel:()=>p});var o=n(86455),r=n.n(o),i=n(48485),s=n(87270),l=n(14492),a=n(8967),c=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};function p(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/excel",n=document.querySelector('[make-general-posts="register-excel"]'),o=new FormData(n);return r().fire({title:"Proceed with excel registration?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{const n=t.errors;if(Array.isArray(n))n.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}));else if("string"==typeof n)e.push(n);else{const t=n;for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){let o={error:n+": "+t[n]};e.push(o)}}}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},71854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>a});var o=n(85862),r=n(59662),i=(n(23283),n(16413),n(40789),n(33830),n(76948),n(63313),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};let a=class extends o.LitElement{constructor(){super(),this.index=0,this._widget=o.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return o.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?o.nothing:o.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};i([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"index",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"no_delete",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"single",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"_single",void 0),a=i([(0,r.customElement)("multiple-widgets"),s("design:paramtypes",[])],a)},37725:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>l});var o=n(85862),r=n(59662),i=(n(29975),n(23283),n(91243),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[o.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.nothing}
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.nothing}
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.nothing}
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.nothing}
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};i([(0,r.property)({type:String}),s("design:type",String)],l.prototype,"name",void 0),i([(0,r.property)({type:String}),s("design:type",String)],l.prototype,"label",void 0),i([(0,r.property)({type:String}),s("design:type",String)],l.prototype,"value",void 0),i([(0,r.property)({type:Number}),s("design:type",Number)],l.prototype,"randomID",void 0),i([(0,r.property)({type:String}),s("design:type",String)],l.prototype,"id",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"required",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"hasLabel",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"multiple",void 0),i([(0,r.property)({type:Number}),s("design:type",Number)],l.prototype,"startNumber",void 0),i([(0,r.property)({type:Number}),s("design:type",Number)],l.prototype,"rowsPerPage",void 0),i([(0,r.property)({type:Number}),s("design:type",Number)],l.prototype,"totalShowing",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=i([(0,r.customElement)("file-input")],l)},43690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>l});var o=n(85862),r=n(59662),i=(n(29975),n(16788),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[o.css`
      :host {
        display: block;
      }
    `],i([(0,r.property)({type:String}),s("design:type",String)],l.prototype,"name",void 0),i([(0,r.property)({type:String}),s("design:type",String)],l.prototype,"label",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"selected",void 0),i([(0,r.property)({type:String}),s("design:type",String)],l.prototype,"value",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"isSelected",void 0),l=i([(0,r.customElement)("switch-input")],l)},68701:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcelCreate:()=>p}),n(45501);var o,r=n(85862),i=n(59662),s=(n(23283),n(51511),n(43690),n(71854),n(37725),n(44672)),l=n(65360),a=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};let p=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.urlQueryParams)()}))}disconnectedCallback(){}render(){return r.html`${this.form}`}get form(){return r.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Member Registration</h1>
                  <h3 class="h3">Excel Member Registration</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="register-excel" enctype="multipart/form-data">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="Register" raised class="button" @click="${this.submitForm}">
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
    `}get attachmentField(){return r.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="excel" name="excel" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,l.POST_MembershipRegisterExcel)()}))}createRenderRoot(){return this}};p.styles=[r.css`
   :host { display: block; }
  `],a([(0,i.property)({type:Number}),c("design:type",Number)],p.prototype,"CLIENT_ID",void 0),a([(0,i.property)({type:Array}),c("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],p.prototype,"_data",void 0),a([(0,i.property)({type:Object}),c("design:type",Object)],p.prototype,"urlQueryParams",void 0),p=a([(0,i.customElement)("membership-registration-excel-create"),c("design:paramtypes",[])],p)},60194:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcel:()=>d}),n(69579);var o=n(83750),r=n(14108),i=n(85862),s=n(59662),l=(n(68701),n(48485)),a=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.LitElement{constructor(){super(),(0,o.ACTIVE_PAGE__)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function l(e){try{a(i.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,l)}a((i=i.apply(t,n||[])).next())}));var t,n,o,i}disconnectedCallback(){}render(){return i.html`
      <a href="${l.CONSTANTS.URLS.PDB_CLIENT}assets/v2/samples/new%20Excel%20Registration.xlsx">
        <mwc-button icon="download" label="Download Template" class="success" raised></mwc-button>
      </a>
      <membership-registration-excel-create CLIENT_ID="${this.clientId}"></membership-registration-excel-create>
    `}firstUpdated(){}createRenderRoot(){return this}};a([(0,s.property)({type:String}),c("design:type",String)],d.prototype,"email",void 0),a([(0,s.property)({type:Number}),c("design:type",Number)],d.prototype,"mId",void 0),a([(0,s.property)({type:Number}),c("design:type",Number)],d.prototype,"clientId",void 0),d=a([(0,s.customElement)("membership-registration-excel"),c("design:paramtypes",[])],d)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(60194,e(e.s=60194)))),e.O())])}));
//# sourceMappingURL=excel.js.map