"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1297],{8967:(e,t,r)=>{r.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.d(t,{O1:()=>n,Jx:()=>o,W3:()=>i});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},i=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},5102:(e,t,r)=>{r.d(t,{e:()=>n,Y:()=>d});class n{static toClientAccountCategoryModel(e){return a(JSON.parse(e),l("ClientAccountCategoryModel"),i)}static clientAccountCategoryModelToJson(e){return JSON.stringify(a(e,l("ClientAccountCategoryModel"),s),null,2)}}function o(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:o(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return a(t,n,r)}catch(e){}}return o(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,r))):o("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return o("object",n);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;i[o.key]=a(s,o.typ,r,o.key)})),Object.getOwnPropertyNames(n).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(i[o]=a(n[o],t,r,o))})),i}(r(t),t.additional,e):o(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?o("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:o(e,t,n)}(t,e)}}function c(...e){return{unionMembers:e}}function l(e){return{ref:e}}const d={ClientAccountCategoryModel:(u=[{json:"id",js:"id",typ:c(null,0)},{json:"clientId",js:"clientID",typ:c(null,0)},{json:"category",js:"category",typ:c(null,"")},{json:"createdBy",js:"createdBy",typ:c(null,0)},{json:"updatedBy",js:"updatedBy",typ:c(null,0)},{json:"updateDate",js:"updateDate",typ:c(null,Date)},{json:"date",js:"date",typ:c(null,Date)}],!1,{props:u,additional:false})};var u},7967:(e,t,r)=>{r.d(t,{Y:()=>a});var n=r(2761),o=r(5102);function i(...e){return{unionMembers:e}}function s(e){return{ref:e}}const a={ClientInfoModel:(c=[{json:"id",js:"id",typ:i(null,0)},{json:"name",js:"name",typ:i(null,"")},{json:"accountType",js:"accountType",typ:i(null,0)},{json:"country",js:"country",typ:i(null,"")},{json:"stateProvince",js:"stateProvince",typ:i(null,"")},{json:"applicantFirstname",js:"applicantFirstname",typ:i(null,"")},{json:"applicantSurname",js:"applicantSurname",typ:i(null,"")},{json:"applicantGender",js:"applicantGender",typ:i(null,0)},{json:"applicantPhone",js:"applicantPhone",typ:i(null,"")},{json:"applicantEmail",js:"applicantEmail",typ:i(null,"")},{json:"applicantDesignationRole",js:"applicantDesignationRole",typ:i(null,0)},{json:"region",js:"region",typ:i(null,0)},{json:"district",js:"district",typ:i(null,0)},{json:"constituency",js:"constituency",typ:i(null,0)},{json:"community",js:"community",typ:i(null,"")},{json:"subscriptionDuration",js:"subscriptionDuration",typ:i(null,"")},{json:"subscriptionDate",js:"subscriptionDate",typ:i(null,Date)},{json:"subscriptionFee",js:"subscriptionFee",typ:i(null,"")},{json:"logo",js:"logo",typ:i(null,"")},{json:"status",js:"status",typ:i(null,0)},{json:"archive",js:"archive",typ:i(null,0)},{json:"accountCategory",js:"accountCategory",typ:i(null,s("ClientAccountCategoryModel"))},{json:"website",js:"website",typ:i(null,null)},{json:"creationDate",js:"creationDate",typ:i(null,Date)},{json:"updatedBy",js:"updatedBy",typ:i(null,0)},{json:"updateDate",js:"updateDate",typ:i(null,Date)},{json:"countryInfo",js:"countryInfo",typ:i(null,(l=s("LocationCountryModel"),{arrayItems:l}))}],!1,{props:c,additional:false}),LocationCountryModel:n.Y.LocationCountryModel,ClientAccountCategoryModel:o.Y.ClientAccountCategoryModel};var c,l},2761:(e,t,r)=>{r.d(t,{e:()=>n,Y:()=>l});class n{static toCountryModel(e){return a(JSON.parse(e),c("LocationCountryModel"),i)}static countryModelToJson(e){return JSON.stringify(a(e,c("LocationCountryModel"),s),null,2)}}function o(e,t,r=""){if(r)throw Error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`);throw Error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,r,n=""){if("any"===t)return e;if(null===t)return null===e?e:o(t,e);if(!1===t)return o(t,e);for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:o(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return a(t,n,r)}catch(e){}}return o(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,r))):o("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return o("object",n);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;i[o.key]=a(s,o.typ,r,o.key)})),Object.getOwnPropertyNames(n).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(i[o]=a(n[o],t,r,o))})),i}(r(t),t.additional,e):o(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?o("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:o(e,t,n)}(t,e)}function c(e){return{ref:e}}const l={LocationCountryModel:(d=[{json:"id",js:"id",typ:0},{json:"name",js:"name",typ:""},{json:"short",js:"short",typ:""},{json:"code",js:"code",typ:""}],!1,{props:d,additional:false})};var d},5866:(e,t,r)=>{var n=r(9755),o=r(9392),i=r(9662),s=r(5713),a=(r(686),function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=n(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let r=!1;return this.value.forEach((e=>{const n=e.id;r=t===n})),e.selected=r,e}))}render(){return this.multiple?this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:n(this.value.map((t=>{const r=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+r+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const r=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,n(".select2-search__field").on("keyup",(function(e){n(r.selectSelector).empty(),r.startSearchPage=0})),r.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,r=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{n(e).select2({closeOnSelect:!1,placeholder:this.label}),n(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let o={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)o[e]=this.ajaxHeader[e];this.selectSelector.forEach((i=>{n(i).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(o){const i=function(o,i){return r=isNaN(o.page)?0:o.page,r=0===r?r:r*t,n(".select2-search__field").on("keyup",(function(o){n(e.selectSelector).empty(),r=0,t=0})),r}(o),s=function(r,o){let i=isNaN(r.page)?1:r.page+1;return i=0===i?1:i,n(".select2-search__field").on("keyup",(function(r){n(e.selectSelector).empty(),i=0,t=0})),i}(o);let a={search:o.term,start:i,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:o,processResults:(e,r)=>{const n=null===this.ajaxFetchProcessResponse?this._processResults(e,r):this.ajaxFetchProcessResponse(e,r);return t+=n.results.length,{results:n.results,pagination:{more:t<n.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{r=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const r=e;t.page=t.page||0;let n=[];if(!1===r.error){var o=r.data;for(let e=0;e<o.length;e++){const t=o[e],r={id:t.id,text:t.fullName};n.includes(r)||n.push(r)}}return this.totalShowing+=n.length,{results:n,total:r.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let r=[];for(const e of t){let t=e;const n=Number.isNaN(t.value)?0:Number(t.value);r.includes(n)||r.push(n)}this.currentValue=r,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",r)}createRenderRoot(){return this}};l.styles=[o.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"name",void 0),a([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"label",void 0),a([(0,i.C)({type:Array}),c("design:type",Array)],l.prototype,"value",void 0),a([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"randomID",void 0),a([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"input_id",void 0),a([(0,i.C)({type:Array}),c("design:type",Array)],l.prototype,"options",void 0),a([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"required",void 0),a([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"ajaxFetchToken",void 0),a([(0,i.C)({type:String}),c("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),a([(0,i.C)({attribute:!1}),c("design:type",Object)],l.prototype,"currentValue",void 0),a([(0,i.C)({type:Object}),c("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),a([(0,i.C)({type:Array}),c("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),a([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"startSearchPage",void 0),a([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"multiple",void 0),a([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"startNumber",void 0),a([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"rowsPerPage",void 0),a([(0,i.C)({type:Number}),c("design:type",Number)],l.prototype,"totalShowing",void 0),a([(0,i.C)({type:Boolean}),c("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=a([(0,s.M)("select-input")],l)},9776:(e,t,r)=>{r.r(t),r.d(t,{IdMemberPrefix:()=>q});var n,o=r(9392),i=r(5713),s=r(9662),a=(r(5248),r(934),r(6811),r(4672)),c=(r(9261),r(3313),r(5866),r(6455)),l=r.n(c),d=r(771),u=r(7270),p=r(596),f=r(8967),y=r(3600),h=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},m=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};let g=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return o.dy`
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
              <form method="post" action="#" class="form" make-general-posts="member-id-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
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
    `}firstUpdated(){}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return h(this,void 0,void 0,(function*(){const e=(0,y.Ie)(),t=d.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix",r=document.querySelector('[make-general-posts="member-id-prefix"]'),n=new FormData(r);return l().fire({title:"Add Member Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>h(this,void 0,void 0,(function*(){return yield(0,u.d)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new p.H("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,f.T)(e);l().showValidationMessage(`${t}`)}return t})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&l().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};g.styles=[o.iv`
   :host { display: block; }
  `],m([(0,s.C)({type:Number}),b("design:type",Number)],g.prototype,"CLIENT_ID",void 0),m([(0,s.C)({type:Array}),b("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],g.prototype,"_data",void 0),g=m([(0,i.M)("id-member-prefix-add"),b("design:paramtypes",[])],g);var j,w=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},x=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};let O=class extends o.oi{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return S(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return o.dy`
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
              <form method="post" action="#" class="form" make-general-posts="member-id-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
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
    `}firstUpdated(){}submitForm(e){return S(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,y.Ie)(),r=d.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix/"+e,n=document.querySelector('[make-general-posts="member-id-prefix"]'),o=new FormData(n);return l().fire({title:"Update Member Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,u.d)(r,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new p.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,f.T)(e);l().showValidationMessage(`${t}`)}return t})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&l().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.prefixId)}))}createRenderRoot(){return this}};O.styles=[o.iv`
   :host { display: block; }
  `],x([(0,s.C)({type:Number}),C("design:type",Number)],O.prototype,"prefixId",void 0),x([(0,s.C)({type:Array}),C("design:type",Array)],O.prototype,"prefixEdit",void 0),x([(0,s.C)({type:Array}),C("design:type","function"==typeof(j="undefined"!=typeof Array&&Array)?j:Object)],O.prototype,"_data",void 0),O=x([(0,i.M)("id-member-prefix-edit"),C("design:paramtypes",[])],O);var P=r(7967),_=r(2761),A=r(5102);function k(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function N(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function I(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function $(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=D[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:k(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return $(t,n,r)}catch(e){}}return k(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>$(t,e,r))):k("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return k("object",n);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[i.key]=$(s,i.typ,r,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=$(n[i],t,r,i))})),o}(r(t),t.additional,e):k(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?k("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:k(e,t,n)}(t,e)}}function M(...e){return{unionMembers:e}}function E(e){return{ref:e}}const D={MembershipMemberIDPrefixModel:(R=[{json:"id",js:"id",typ:M(null,0)},{json:"clientId",js:"clientID",typ:M(null,E("ClientInfoModel"))},{json:"prefix",js:"prefix",typ:M(null,"")},{json:"lastId",js:"lastID",typ:M(null,0)},{json:"createdBy",js:"createdBy",typ:M(null,0)},{json:"updatedBy",js:"updatedBy",typ:M(null,0)},{json:"updateDate",js:"updateDate",typ:M(null,Date)},{json:"creationDate",js:"creationDate",typ:M(null,Date)}],!1,{props:R,additional:false}),ClientInfoModel:P.Y.ClientInfoModel,LocationCountryModel:_.Y.LocationCountryModel,ClientAccountCategoryModel:A.Y.ClientAccountCategoryModel};var R,T,B=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},J=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},U=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};let F=class extends o.oi{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[],this.urlQueryParams=void 0,this._memberPrefixIds=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return U(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.O1)(),yield this.getMemberIdPrefix()}))}disconnectedCallback(){}render(){return null===this._memberPrefixIds?o.dy`
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
        ${this.table}
      `}get form(){return this._memberPrefixIds.length>0?o.dy`
        <id-member-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}"></id-member-prefix-edit>
      `:o.dy`
        <id-member-prefix-add></id-member-prefix-add>
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
              ${e.prefix}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${e.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `))}
    `}firstUpdated(){}editMemberPrefixId(e){return U(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("edit-this-item"));this.prefixId=t,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus();for(const e of this._memberPrefixIds)e.id===this.prefixId&&(this.prefixEdit[0]=e)}))}deleteMemberPrefixId(e){return U(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return B(this,void 0,void 0,(function*(){const t=(0,y.Ie)(),r=d.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix/"+e,n={};return l().fire({title:"Remove Member Id Prefix?",text:"You may have members assigned to this prefix. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>B(this,void 0,void 0,(function*(){return yield(0,u.d)(r,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new p.H("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,f.T)(e);l().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new p.H("delete",r,!0);return n.postForm,n}})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}l().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMemberIdPrefix(){return U(this,void 0,void 0,(function*(){const e=yield function(e=null){return t=this,r=void 0,o=function*(){const t=(0,y.Ie)(),r=d.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix"+(null===e?"":"/"+e),n=yield(0,u.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new p.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new p.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}c((o=o.apply(t,r||[])).next())}));var t,r,n,o}();let t=[];null===e?t.push({id:0,prefix:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>class{static toMembershipMemberIDPrefixModel(e){return $(JSON.parse(e),E("MembershipMemberIDPrefixModel"),N)}static membershipMemberIDPrefixModelToJson(e){return JSON.stringify($(e,E("MembershipMemberIDPrefixModel"),I),null,2)}}.toMembershipMemberIDPrefixModel(JSON.stringify(e))))]),this._memberPrefixIds=[...this._memberPrefixIds,...t]}))}createRenderRoot(){return this}};F.styles=[o.iv`
   :host { display: block; }
  `],J([(0,s.C)({type:Number}),L("design:type",Number)],F.prototype,"prefixId",void 0),J([(0,s.C)({type:Array}),L("design:type",Array)],F.prototype,"prefixEdit",void 0),J([(0,s.C)({type:Array}),L("design:type","function"==typeof(T="undefined"!=typeof Array&&Array)?T:Object)],F.prototype,"_data",void 0),J([(0,s.C)({type:Object}),L("design:type",Object)],F.prototype,"urlQueryParams",void 0),J([(0,s.C)({type:Array}),L("design:type",Array)],F.prototype,"_memberPrefixIds",void 0),F=J([(0,i.M)("id-member-prefix-view"),L("design:paramtypes",[])],F);let q=class extends o.oi{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this)},new((n=void 0)||(n=Promise))((function(e,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}c((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return o.dy`
      <id-member-prefix-view></id-member-prefix-view>
    `}firstUpdated(){}createRenderRoot(){return this}};q=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}([(0,i.M)("id-member-prefix"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],q)}},e=>(e.O(0,[2185,5744,9674,8820,1828,2459,1219,5291,214,948,3712],(()=>(9776,e(e.s=9776)))),e.O())])}));
//# sourceMappingURL=member-prefix.js.map