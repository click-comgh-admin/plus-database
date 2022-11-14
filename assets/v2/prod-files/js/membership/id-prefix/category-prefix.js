"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3259],{8967:(e,t,r)=>{r.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.d(t,{O1:()=>o,Jx:()=>n,W3:()=>i});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let o=null;for(const t in r)t===e&&(o=r[t]);return o},i=e=>{let t="",r=0;for(const o in e)r+=1,t+=`${r>1?"&":""}${o}=${e[o]}`;return t}},72:(e,t,r)=>{r.d(t,{L:()=>s});var o=r(771),n=r(7270),i=r(596),a=r(3600);function s(e=null){return t=this,r=void 0,c=function*(){const t=(0,a.Ie)(),r=o.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),s=yield(0,n.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new i.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,o){function n(e){try{a(c.next(e))}catch(e){o(e)}}function i(e){try{a(c.throw(e))}catch(e){o(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(n,i)}a((c=c.apply(t,r||[])).next())}));var t,r,s,c}},5866:(e,t,r)=>{var o=r(9755),n=r(9392),i=r(9662),a=r(5713),s=(r(686),function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=o(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let r=!1;return this.value.forEach((e=>{const o=e.id;r=t===o})),e.selected=r,e}))}render(){return this.multiple?this.required?n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:o(this.value.map((t=>{const r=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+r+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const r=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,o(".select2-search__field").on("keyup",(function(e){o(r.selectSelector).empty(),r.startSearchPage=0})),r.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,r=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{o(e).select2({closeOnSelect:!1,placeholder:this.label}),o(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let n={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)n[e]=this.ajaxHeader[e];this.selectSelector.forEach((i=>{o(i).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(n){const i=function(n,i){return r=isNaN(n.page)?0:n.page,r=0===r?r:r*t,o(".select2-search__field").on("keyup",(function(n){o(e.selectSelector).empty(),r=0,t=0})),r}(n),a=function(r,n){let i=isNaN(r.page)?1:r.page+1;return i=0===i?1:i,o(".select2-search__field").on("keyup",(function(r){o(e.selectSelector).empty(),i=0,t=0})),i}(n);let s={search:n.term,start:i,page:a};return e.ajaxFetchUrlParams.forEach((e=>{s[e.param]=e.value})),s},headers:n,processResults:(e,r)=>{const o=null===this.ajaxFetchProcessResponse?this._processResults(e,r):this.ajaxFetchProcessResponse(e,r);return t+=o.results.length,{results:o.results,pagination:{more:t<o.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{r=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const r=e;t.page=t.page||0;let o=[];if(!1===r.error){var n=r.data;for(let e=0;e<n.length;e++){const t=n[e],r={id:t.id,text:t.fullName};o.includes(r)||o.push(r)}}return this.totalShowing+=o.length,{results:o,total:r.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let r=[];for(const e of t){let t=e;const o=Number.isNaN(t.value)?0:Number(t.value);r.includes(o)||r.push(o)}this.currentValue=r,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",r)}createRenderRoot(){return this}};l.styles=[n.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"name",void 0),s([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"label",void 0),s([(0,i.C)({type:Array}),c("design:type",Array)],l.prototype,"value",void 0),s([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"randomID",void 0),s([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"input_id",void 0),s([(0,i.C)({type:Array}),c("design:type",Array)],l.prototype,"options",void 0),s([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"required",void 0),s([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"ajaxFetchToken",void 0),s([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),s([(0,i.C)({attribute:!1}),c("design:type",Object)],l.prototype,"currentValue",void 0),s([(0,i.C)({type:Object}),c("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),s([(0,i.C)({type:Array}),c("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),s([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"startSearchPage",void 0),s([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,a.M)("select-input")],l)},6423:(e,t,r)=>{r.r(t),r.d(t,{IdCategoryPrefix:()=>W});var o=r(9392),n=r(5713),i=r(9662),a=(r(5248),r(934),r(6811),r(4672)),s=(r(9261),r(3313),r(5866),r(6455)),c=r.n(s),l=r(771),d=r(7270),u=r(596),p=r(8967),f=r(3600),y=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))},m=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};let g=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this.memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return o.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Prefix</h1>
                  <h3 class="h3">Create New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-category-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Category</h4>
                    <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" setSelectedMemberCategoryId label="Select Member Category" outlined required>
                      ${this.memberCategories.map((e=>o.dy`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return b(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return y(this,void 0,void 0,(function*(){const e=(0,f.Ie)(),t=l.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix",r=document.querySelector('[make-general-posts="member-id-category-prefix"]'),o=new FormData(r);return c().fire({title:"Add Member Category Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>y(this,void 0,void 0,(function*(){return yield(0,d.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new u.H("post",e,!1,r),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,p.T)(e);c().showValidationMessage(`${t}`)}return t})).catch((e=>{c().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!c().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&c().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};g.styles=[o.iv`
   :host { display: block; }
  `],m([(0,i.C)({type:Number}),h("design:type",Number)],g.prototype,"CLIENT_ID",void 0),m([(0,i.C)({type:Array}),h("design:type",Array)],g.prototype,"memberCategories",void 0),g=m([(0,n.M)("id-category-prefix-add"),h("design:paramtypes",[])],g);var v,w=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))},x=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};let S=class extends o.oi{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this.memberCategories=[],this._data=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return j(this,void 0,void 0,(function*(){e.connectedCallback.call(this),console.log({prefixEdit:this.prefixEdit})}))}disconnectedCallback(){}render(){return o.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Prefix</h1>
                  <h3 class="h3">Update New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-category-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Category</h4>
                    <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" setSelectedMemberCategoryId label="Select Member Category" outlined required>
                      ${this.memberCategories.map((e=>0===this.prefixEdit.length?o.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`:e.id===this.prefixEdit[0].memberCategoryID.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:void 0))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="${0===this.prefixEdit.length?"":this.prefixEdit[0].prefix}" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return j(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),r=l.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix/"+e,o=document.querySelector('[make-general-posts="member-id-category-prefix"]'),n=new FormData(o);return c().fire({title:"Update Member Category Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,d.d)(r,{method:"PUT",body:n,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new u.H("post",e,!1,o),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,p.T)(e);c().showValidationMessage(`${t}`)}return t})).catch((e=>{c().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!c().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&c().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.prefixId)}))}createRenderRoot(){return this}};S.styles=[o.iv`
   :host { display: block; }
  `],x([(0,i.C)({type:Number}),C("design:type",Number)],S.prototype,"prefixId",void 0),x([(0,i.C)({type:Array}),C("design:type",Array)],S.prototype,"prefixEdit",void 0),x([(0,i.C)({type:Array}),C("design:type",Array)],S.prototype,"memberCategories",void 0),x([(0,i.C)({type:Array}),C("design:type","function"==typeof(v="undefined"!=typeof Array&&Array)?v:Object)],S.prototype,"_data",void 0),S=x([(0,n.M)("id-category-prefix-edit"),C("design:paramtypes",[])],S);function _(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function P(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function O(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function A(e,t,r,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=I[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:_(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let n=0;n<o;n++){const o=e[n];try{return A(t,o,r)}catch(e){}}return _(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>A(t,e,r))):_("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return _("object",o);const n={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;n[i.key]=A(a,i.typ,r,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(n[i]=A(o[i],t,r,i))})),n}(r(t),t.additional,e):_(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?_("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:_(e,t,o)}(t,e)}}function k(...e){return{unionMembers:e}}function $(e){return{ref:e}}const I={GroupingsMemberCategoryModel:(N=[{json:"id",js:"id",typ:k(null,0)},{json:"clientId",js:"clientID",typ:k(null,0)},{json:"category",js:"category",typ:k(null,"")},{json:"createdBy",js:"createdBy",typ:k(null,0)},{json:"updatedBy",js:"updatedBy",typ:k(null,0)},{json:"updateDate",js:"updateDate",typ:k(null,Date)},{json:"date",js:"date",typ:k(null,Date)}],!1,{props:N,additional:false})};var N;function M(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function E(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function R(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function T(e,t,r,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=U[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:M(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let n=0;n<o;n++){const o=e[n];try{return T(t,o,r)}catch(e){}}return M(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>T(t,e,r))):M("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return M("object",o);const n={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;n[i.key]=T(a,i.typ,r,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(n[i]=T(o[i],t,r,i))})),n}(r(t),t.additional,e):M(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?M("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:M(e,t,o)}(t,e)}}function D(...e){return{unionMembers:e}}function B(e){return{ref:e}}const U={MembershipMemberCategoryIDPrefixModel:function(e,t){return{props:e,additional:!1}}([{json:"id",js:"id",typ:D(null,0)},{json:"prefix",js:"prefix",typ:D(null,"")},{json:"memberCategoryId",js:"memberCategoryID",typ:D(null,B("GroupingsMemberCategoryModel"))},{json:"createdBy",js:"createdBy",typ:D(null,0)},{json:"creationDate",js:"creationDate",typ:D(null,Date)},{json:"updatedBy",js:"updatedBy",typ:D(null,0)},{json:"updateDate",js:"updateDate",typ:D(null,Date)}]),GroupingsMemberCategoryModel:I.GroupingsMemberCategoryModel};var J,L=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))},F=r(72),q=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},H=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},G=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};let V=class extends o.oi{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[],this.urlQueryParams=void 0,this._memberPrefixIds=[],this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return G(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.O1)(),yield this.getMemberCategoryIdPrefix(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){return null===this._memberPrefixIds?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberPrefixIds?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Prefix Id</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.form}
        <hr />
        <div class="flex justify-end my-2">
          <mwc-button raised label="Add Category Prefix" class="ml-1 success" icon="add" @click="${this.addNew}"></mwc-button> 
        </div>
        ${this.table}
      `}get form(){return this._memberPrefixIds.length>0?0===this.prefixId?o.dy`
          <id-category-prefix-add .memberCategories="${this._memberCategories}"></id-category-prefix-add>
        `:o.dy`
          <id-category-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}" .memberCategories="${this._memberCategories}"></id-category-prefix-edit>
        `:o.dy`
        <id-category-prefix-add .memberCategories="${this._memberCategories}"></id-category-prefix-add>
      `}get table(){return this._memberPrefixIds.length>0?o.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member ID Prefix</b>
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
                ${this.getMemberPrefixIds}
              </tbody>
            </table>
          </div>
        </div>
      `:o.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberPrefixIds(){return o.dy`
      ${this._memberPrefixIds.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.memberCategoryID.category} -> <b>${e.prefix}</b>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${e.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `))}
    `}firstUpdated(){}addNew(e){return G(this,void 0,void 0,(function*(){e.preventDefault(),this.prefixId=0,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus()}))}editMemberPrefixId(e){return G(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("edit-this-item"));this.prefixId=t,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus();const r=this._memberCategories;for(const e of this._memberPrefixIds)e.id===this.prefixId&&(this.prefixEdit[0]=e,this._memberCategories=[],setTimeout((()=>{this._memberCategories=r}),100))}))}deleteMemberPrefixId(e){return G(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return L(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),r=l.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix/"+e,o={};return c().fire({title:"Remove Member Category Id Prefix?",text:"You may have members assigned to this prefix. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>L(this,void 0,void 0,(function*(){return yield(0,d.d)(r,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new u.H("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,p.T)(e);c().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const o=new u.H("delete",r,!0);return o.postForm,o}})).catch((e=>{c().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!c().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}c().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMemberCategoryIdPrefix(){return G(this,void 0,void 0,(function*(){const e=yield function(e=null){return t=this,r=void 0,n=function*(){const t=(0,f.Ie)(),r=l.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix"+(null===e?"":"/"+e),o=yield(0,d.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new u.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new u.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(a,s)}c((n=n.apply(t,r||[])).next())}));var t,r,o,n}();let t=[];null===e?t.push({id:0,prefix:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>class{static toMembershipMemberCategoryIDPrefixModel(e){return T(JSON.parse(e),B("MembershipMemberCategoryIDPrefixModel"),E)}static membershipMemberCategoryIDPrefixModelToJson(e){return JSON.stringify(T(e,B("MembershipMemberCategoryIDPrefixModel"),R),null,2)}}.toMembershipMemberCategoryIDPrefixModel(JSON.stringify(e))))]),this._memberPrefixIds=[...this._memberPrefixIds,...t]}))}getClientMemberCategories(){return G(this,void 0,void 0,(function*(){const e=yield(0,F.L)();let t=[];if(null===e)t.push({id:0,category:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const r=e.response.data.map((e=>class{static toGroupingsMemberCategoryModel(e){return A(JSON.parse(e),$("GroupingsMemberCategoryModel"),P)}static groupingsMemberCategoryModelToJson(e){return JSON.stringify(A(e,$("GroupingsMemberCategoryModel"),O),null,2)}}.toGroupingsMemberCategoryModel(JSON.stringify(e))));console.log({DATA:r}),t=[...r]}this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};V.styles=[o.iv`
   :host { display: block; }
  `],q([(0,i.C)({type:Number}),H("design:type",Number)],V.prototype,"prefixId",void 0),q([(0,i.C)({type:Array}),H("design:type",Array)],V.prototype,"prefixEdit",void 0),q([(0,i.C)({type:Array}),H("design:type","function"==typeof(J="undefined"!=typeof Array&&Array)?J:Object)],V.prototype,"_data",void 0),q([(0,i.C)({type:Object}),H("design:type",Object)],V.prototype,"urlQueryParams",void 0),q([(0,i.C)({type:Array}),H("design:type",Array)],V.prototype,"_memberPrefixIds",void 0),q([(0,i.C)({type:Array}),H("design:type",Array)],V.prototype,"_memberCategories",void 0),V=q([(0,n.M)("id-category-prefix-view"),H("design:paramtypes",[])],V);let W=class extends o.oi{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,n=function*(){e.connectedCallback.call(this)},new((o=void 0)||(o=Promise))((function(e,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(a,s)}c((n=n.apply(t,r||[])).next())}));var t,r,o,n}disconnectedCallback(){}render(){return o.dy`
      <id-category-prefix-view></id-category-prefix-view>
    `}firstUpdated(){}createRenderRoot(){return this}};W=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.M)("id-category-prefix"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],W)}},e=>(e.O(0,[2185,5744,9674,8820,1828,2459,6104,5291,214,948,3712],(()=>(6423,e(e.s=6423)))),e.O())])}));
//# sourceMappingURL=category-prefix.js.map