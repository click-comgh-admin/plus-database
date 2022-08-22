"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6163],{3750:(e,t,o)=>{o.d(t,{A:()=>n});const n=()=>{const e=document.querySelectorAll("[mm-active]"),t=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];e.forEach((e=>{var o=e.getAttribute("mm-active").split("|");for(let n=0;n<o.length;n++){const i=o[n];t===i&&e.setAttribute("class","mm-active")}}))}},8967:(e,t,o)=>{o.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let o=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{o+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),o+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,o)=>{o.d(t,{B:()=>c});var n=o(771),i=o(7270),r=o(7052),s=o(1942),a=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const l=(e,t,o)=>a(void 0,void 0,void 0,(function*(){const a=n.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=o,c=JSON.stringify({email:e,id:t});yield(0,i.d)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,r.h)(String(e.jsonData.token));(0,s.Ad)(l,t,10),(0,s.vh)(l+"_date",(new Date).toUTCString(),10)}}))})),c=(e,t,o)=>a(void 0,void 0,void 0,(function*(){const c=(0,r.h)(String(t)),d=o;window.supersecret={unknowable:{ops:{email:e,id:c,cookieName:d}}},""==(0,s.Hl)(d)?yield l(e,c,o):yield((e,t,o)=>a(void 0,void 0,void 0,(function*(){const c=n.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=o,u=(0,s.Hl)(d),p=JSON.stringify({token:(0,r.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.Hl)(d+"_date"))))return u;yield(0,i.d)(c,{method:"POST",body:p},!0).then((n=>a(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,r.h)(String(n.jsonData.token));(0,s.Ad)(d,e,10),(0,s.vh)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,o)}))))})))(e,c,o)}))},2461:(e,t,o)=>{var n=o(9392),i=o(9662),r=o(5713),s=(o(5185),o(5248),function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?n.dy`
          <div class="form-input border">
            ${this.hasLabel?n.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.Ld}
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:n.dy`
          <div class="form-input border">
            ${this.hasLabel?n.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.Ld}
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?n.dy`
          <div class="form-input border">
            ${this.hasLabel?n.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.Ld}
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:n.dy`
          <div class="form-input border">
            ${this.hasLabel?n.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.Ld}
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"value",void 0),s([(0,i.C)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"id",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"hasLabel",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,i.C)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,i.C)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,i.C)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,r.M)("file-input")],l)},7355:(e,t,o)=>{o.r(t),o.d(t,{MembershipRegistrationExcel:()=>k});var n,i=o(3750),r=o(4108),s=o(9392),a=o(9662),l=o(5713),c=(o(5248),o(6811),o(3690),o(1854),o(2461),o(4672)),d=o(6455),u=o.n(d),p=o(771),f=o(7270),m=o(596),h=o(8967),y=o(3600),b=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))},v=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};let x=class extends s.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,c.O1)()}))}disconnectedCallback(){}render(){return s.dy`${this.form}`}get form(){return s.dy`
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
    `}get attachmentField(){return s.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="excel" name="excel" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return w(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return b(this,void 0,void 0,(function*(){const e=(0,y.Ie)(),t=p.t.URLS.AKWAABA_API_BASE_URL+"members/user/excel",o=document.querySelector('[make-general-posts="register-excel"]'),n=new FormData(o);return u().fire({title:"Proceed with excel registration?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>b(this,void 0,void 0,(function*(){return yield(0,f.d)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new m.H("post",e,!1,o),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{const o=t.errors;if(Array.isArray(o))o.forEach((o=>{let n={error:t.id+": "+o};"non_field_errors"===t.id&&(n={error:o}),e.push(n)}));else if("string"==typeof o)e.push(o);else{const t=o;for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)){let n={error:o+": "+t[o]};e.push(n)}}}));const t=(0,h.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),o=n.response.success}o&&u().fire({title:t,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};x.styles=[s.iv`
   :host { display: block; }
  `],v([(0,a.C)({type:Number}),g("design:type",Number)],x.prototype,"CLIENT_ID",void 0),v([(0,a.C)({type:Array}),g("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],x.prototype,"_data",void 0),v([(0,a.C)({type:Object}),g("design:type",Object)],x.prototype,"urlQueryParams",void 0),x=v([(0,l.M)("membership-registration-excel-create"),g("design:paramtypes",[])],x);var C=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let k=class extends s.oi{constructor(){super(),(0,i.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,o=void 0,i=function*(){e.connectedCallback.call(this),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(s,a)}l((i=i.apply(t,o||[])).next())}));var t,o,n,i}disconnectedCallback(){}render(){return s.dy`
      <a href="${p.t.URLS.PDB_CLIENT}assets/v2/samples/new%20Excel%20Registration.xlsx">
        <mwc-button icon="download" label="Download Template" class="success" raised></mwc-button>
      </a>
      <membership-registration-excel-create CLIENT_ID="${this.clientId}"></membership-registration-excel-create>
    `}firstUpdated(){}createRenderRoot(){return this}};C([(0,a.C)({type:String}),S("design:type",String)],k.prototype,"email",void 0),C([(0,a.C)({type:Number}),S("design:type",Number)],k.prototype,"mId",void 0),C([(0,a.C)({type:Number}),S("design:type",Number)],k.prototype,"clientId",void 0),k=C([(0,l.M)("membership-registration-excel"),S("design:paramtypes",[])],k)}},e=>(e.O(0,[2185,5744,9674,9564,2459,7879,5291,214,948,6773,3712],(()=>(7355,e(e.s=7355)))),e.O())])}));
//# sourceMappingURL=excel.js.map