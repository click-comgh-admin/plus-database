"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[61],{8967:(e,t,o)=>{o.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let o=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{o+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),o+="</ul>"}throw new Error("Unknown error response format")}},1981:(e,t,o)=>{o.d(t,{R:()=>n});const n=(e,t)=>!0===navigator.onLine?e("online"):t("offline")},6651:(e,t,o)=>{o.d(t,{m:()=>r}),o(934);let n=[];const i="Show Password",r=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const o=e.parentElement;o.setAttribute("style",o.getAttribute("style")+"; flex-direction: column !important;");const r=document.createElement("label");r.setAttribute("style",r.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const a=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),a.innerText=i;const l=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const c=document.createElement("input");c.type="checkbox",c.id="pswd-visibility-btn--"+t,c.setAttribute("style",c.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),r.appendChild(l),r.appendChild(c),r.appendChild(a),e.after(r);const d={id:c.id,showing:!1,elem:e,span:a};n.includes(d)||n.push(d),c.addEventListener("change",s)}))},s=e=>{e.preventDefault();const t=e.currentTarget;t.checked,n.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=i,e.showing=!1))}))}},7725:(e,t,o)=>{o.d(t,{eF:()=>a,U8:()=>l,hk:()=>c});var n=o(7052),i=o(1942),r=o(1489);const s="pdb-active-branch",a=e=>{const t=JSON.stringify(e);(0,i.Ad)(s,"",-1),(0,i.Ad)(s,(0,n.h)(t),3500)};function l(){(0,i.Ad)(s,"",-1)}const c=()=>{if(""===(0,i.Hl)(s))return null;{const e=(0,n.t)((0,i.Hl)(s)),t=JSON.parse(e);return(0,r.N)(t)}}},5102:(e,t,o)=>{o.d(t,{e:()=>n,Y:()=>d});class n{static toClientAccountCategoryModel(e){return a(JSON.parse(e),c("ClientAccountCategoryModel"),r)}static clientAccountCategoryModelToJson(e){return JSON.stringify(a(e,c("ClientAccountCategoryModel"),s),null,2)}}function i(e,t,o=""){o&&console.error(`Invalid value for key "${o}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,o,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:i(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let i=0;i<n;i++){const n=e[i];try{return a(t,n,o)}catch(e){}}return i(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,o))):i("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return i("object",n);const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;r[i.key]=a(s,i.typ,o,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(r[i]=a(n[i],t,o,i))})),r}(o(t),t.additional,e):i(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?i("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:i(e,t,n)}(t,e)}}function l(...e){return{unionMembers:e}}function c(e){return{ref:e}}const d={ClientAccountCategoryModel:(u=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"category",js:"category",typ:l(null,"")},{json:"createdBy",js:"createdBy",typ:l(null,0)},{json:"updatedBy",js:"updatedBy",typ:l(null,0)},{json:"updateDate",js:"updateDate",typ:l(null,Date)},{json:"date",js:"date",typ:l(null,Date)}],!1,{props:u,additional:false})};var u},1489:(e,t,o)=>{function n(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function i(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}o.d(t,{j:()=>n,N:()=>i})},2869:(e,t,o)=>{function n(e){return{id:Number(e.id),name:e.name}}o.d(t,{y:()=>n})},2761:(e,t,o)=>{o.d(t,{e:()=>n,Y:()=>c});class n{static toCountryModel(e){return a(JSON.parse(e),l("LocationCountryModel"),r)}static countryModelToJson(e){return JSON.stringify(a(e,l("LocationCountryModel"),s),null,2)}}function i(e,t,o=""){if(o)throw Error(`Invalid value for key "${o}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`);throw Error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,o,n=""){if("any"===t)return e;if(null===t)return null===e?e:i(t,e);if(!1===t)return i(t,e);for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:i(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let i=0;i<n;i++){const n=e[i];try{return a(t,n,o)}catch(e){}}return i(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,o))):i("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return i("object",n);const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;r[i.key]=a(s,i.typ,o,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(r[i]=a(n[i],t,o,i))})),r}(o(t),t.additional,e):i(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?i("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:i(e,t,n)}(t,e)}function l(e){return{ref:e}}const c={LocationCountryModel:(d=[{json:"id",js:"id",typ:0},{json:"name",js:"name",typ:""},{json:"short",js:"short",typ:""},{json:"code",js:"code",typ:""}],!1,{props:d,additional:false})};var d},7553:(e,t,o)=>{o.d(t,{q:()=>a});var n=o(771),i=o(7270),r=o(596),s=o(3600);function a(e=null){return t=this,o=void 0,l=function*(){const t=(0,s.Ie)(),o=n.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),a=yield(0,i.d)(o,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,n){function i(e){try{s(l.next(e))}catch(e){n(e)}}function r(e){try{s(l.throw(e))}catch(e){n(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(i,r)}s((l=l.apply(t,o||[])).next())}));var t,o,a,l}},2461:(e,t,o)=>{var n=o(9392),i=o(9662),r=o(5713),s=(o(5185),o(5248),function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"value",void 0),s([(0,i.C)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"id",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"hasLabel",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,i.C)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,i.C)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,i.C)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,r.M)("file-input")],l)},5866:(e,t,o)=>{var n=o(9755),i=o(9392),r=o(9662),s=o(5713),a=(o(686),function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=n(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let o=!1;return this.value.forEach((e=>{const n=e.id;o=t===n})),e.selected=o,e}))}render(){return this.multiple?this.required?i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:n(this.value.map((t=>{const o=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+o+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const o=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,n(".select2-search__field").on("keyup",(function(e){n(o.selectSelector).empty(),o.startSearchPage=0})),o.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,o=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{n(e).select2({closeOnSelect:!1,placeholder:this.label}),n(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let i={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)i[e]=this.ajaxHeader[e];this.selectSelector.forEach((r=>{n(r).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(i){const r=function(i,r){return o=isNaN(i.page)?0:i.page,o=0===o?o:o*t,n(".select2-search__field").on("keyup",(function(i){n(e.selectSelector).empty(),o=0,t=0})),o}(i),s=function(o,i){let r=isNaN(o.page)?1:o.page+1;return r=0===r?1:r,n(".select2-search__field").on("keyup",(function(o){n(e.selectSelector).empty(),r=0,t=0})),r}(i);let a={search:i.term,start:r,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:i,processResults:(e,o)=>{const n=null===this.ajaxFetchProcessResponse?this._processResults(e,o):this.ajaxFetchProcessResponse(e,o);return t+=n.results.length,{results:n.results,pagination:{more:t<n.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{o=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const o=e;t.page=t.page||0;let n=[];if(!1===o.error){var i=o.data;for(let e=0;e<i.length;e++){const t=i[e],o={id:t.id,text:t.fullName};n.includes(o)||n.push(o)}}return this.totalShowing+=n.length,{results:n,total:o.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let o=[];for(const e of t){let t=e;const n=Number.isNaN(t.value)?0:Number(t.value);o.includes(n)||o.push(n)}this.currentValue=o,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",o)}createRenderRoot(){return this}};c.styles=[i.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),a([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),a([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),a([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),a([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),a([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),a([(0,r.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),a([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),a([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),a([(0,r.C)({attribute:!1}),l("design:type",Object)],c.prototype,"currentValue",void 0),a([(0,r.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),a([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),a([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),a([(0,r.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),a([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),a([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),a([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),a([(0,r.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=a([(0,s.M)("select-input")],c)},3690:(e,t,o)=>{var n=o(9392),i=o(9662),r=o(5713),s=(o(5185),o(5142),function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[n.iv`
      :host {
        display: block;
      }
    `],s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,i.C)({type:String}),a("design:type",String)],l.prototype,"value",void 0),s([(0,i.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,r.M)("switch-input")],l)},8514:(e,t,o)=>{o.r(t),o.d(t,{PdbRegisterForm:()=>Q});var n=o(6651),i=o(596),r=o(771),s=o(7270),a=o(8967),l=o(1981),c=o(3600),d=o(1566),u=o(7725),p=o(6455),y=o.n(p),h=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))},f=o(9392),m=o(9662),g=o(5713),v=(o(1239),o(9261),o(5248),o(3313),o(5866),o(3690),o(2461),o(2869)),b=o(7553);function w(e,t,o=""){o&&console.error(`Invalid value for key "${o}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function S(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function j(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function O(e,t,o,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=N[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:w(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let i=0;i<n;i++){const n=e[i];try{return O(t,n,o)}catch(e){}}return w(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>O(t,e,o))):w("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return w("object",n);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;i[r.key]=O(s,r.typ,o,r.key)})),Object.getOwnPropertyNames(n).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(i[r]=O(n[r],t,o,r))})),i}(o(t),t.additional,e):w(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?w("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:w(e,t,n)}(t,e)}}function _(...e){return{unionMembers:e}}function A(e){return{ref:e}}const N={ClientSubscriptionMembershipSizeModel:(C=[{json:"id",js:"id",typ:_(null,0)},{json:"info",js:"info",typ:_(null,"")},{json:"cost",js:"cost",typ:_(null,"")},{json:"type",js:"type",typ:_(null,0)},{json:"client",js:"client",typ:_(null,0)},{json:"accountType",js:"accountType",typ:_(null,0)}],!1,{props:C,additional:false})};var C,x=o(2761);function $(e,t,o=""){o&&console.error(`Invalid value for key "${o}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function L(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function E(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function P(e,t,o,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=R[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:$(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let i=0;i<n;i++){const n=e[i];try{return P(t,n,o)}catch(e){}}return $(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>P(t,e,o))):$("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return $("object",n);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;i[r.key]=P(s,r.typ,o,r.key)})),Object.getOwnPropertyNames(n).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(i[r]=P(n[r],t,o,r))})),i}(o(t),t.additional,e):$(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?$("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:$(e,t,n)}(t,e)}}function M(e){return{ref:e}}const R={LocationRegionModel:{props:[{json:"id",js:"id",typ:0},{json:"location",js:"location",typ:""}],additional:!1}};function J(e,t,o=""){o&&console.error(`Invalid value for key "${o}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function k(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function T(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function D(e,t,o,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=q[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:J(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let i=0;i<n;i++){const n=e[i];try{return D(t,n,o)}catch(e){}}return J(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>D(t,e,o))):J("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return J("object",n);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;i[r.key]=D(s,r.typ,o,r.key)})),Object.getOwnPropertyNames(n).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(i[r]=D(n[r],t,o,r))})),i}(o(t),t.additional,e):J(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?J("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:J(e,t,n)}(t,e)}}function I(e){return{ref:e}}const q={LocationDistrictModel:function(e,t){return{props:e,additional:!1}}([{json:"id",js:"id",typ:0},{json:"regionId",js:"regionId",typ:I("LocationRegionModel")},{json:"location",js:"location",typ:""}]),LocationRegionModel:R.LocationRegionModel};function B(e,t,o=""){o&&console.error(`Invalid value for key "${o}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function U(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function F(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function z(e,t,o,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=G[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:B(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let i=0;i<n;i++){const n=e[i];try{return z(t,n,o)}catch(e){}}return B(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>z(t,e,o))):B("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return B("object",n);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],s=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;i[r.key]=z(s,r.typ,o,r.key)})),Object.getOwnPropertyNames(n).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(i[r]=z(n[r],t,o,r))})),i}(o(t),t.additional,e):B(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?B("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:B(e,t,n)}(t,e)}}function H(e){return{ref:e}}const G={LocationConstituencyModel:function(e,t){return{props:e,additional:!1}}([{json:"id",js:"id",typ:0},{json:"regionId",js:"regionId",typ:H("LocationRegionModel")},{json:"districtId",js:"districtId",typ:H("LocationDistrictModel")},{json:"location",js:"location",typ:""}]),LocationDistrictModel:q.LocationDistrictModel,LocationRegionModel:R.LocationRegionModel};var W=o(5102),K=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},V=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Y=function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};let Q=class extends f.oi{constructor(){super(),this.showLeadersForm=!1,this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._genders=[],this._countries=[],this._accountCategories=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={},this._membershipSizes=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return Y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getGenders(),yield this.getLocationCountry(),yield this.getClientAccountCategory(),yield this.getClientSubscriptionMembershipSize()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),o=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),n=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return f.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Client Account</h1>
                  <h3 class="h3">Create New Client Account!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-register" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Organization Name</h4>
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="" label="Enter Organization Name" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Account Category</h4>
                    <mwc-select name="accountCategory" id="accountCategory" label="Select Account Category" outlined required>
                      ${this._accountCategories.map((e=>f.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_other_account_category>
                    <h4 class="font-semibold my-2">Enter Other Account Category</h4>
                    <mwc-textfield name="accountCategoryOther" type="text" class="w-full" id="accountCategoryOther" value="" label="Enter Other Account Category" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Membership Size</h4>
                    <mwc-select name="membership_size" id="membership_size" label="Select Membership Size" outlined required>
                      ${this._membershipSizes.map((e=>f.dy`<mwc-list-item value="${e.id}">${e.info}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Add Organization Logo <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="logo" name="logo" label="Add Organization Logo" ></file-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Organization Website <span class="text-yellow-600">(Optional)</span></h4>
                    <mwc-textfield name="website" type="url" class="w-full" id="website" value="" label="Enter Organization Website (Optional)" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Country</h4>
                    <!--<mwc-select name="country" id="country" label="Select Country" outlined required>
                      ${this._countries.map((e=>f.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                    </mwc-select> -->
                    <select-input name="country" id="country" label="Select Country" .options="${e}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_state_province>
                    <h4 class="font-semibold my-2">Enter State/ Province</h4>
                    <mwc-textfield name="stateProvince" type="text" class="w-full" id="stateProvince" value="" label="Enter State/ Province" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Region</h4>
                    <select-input name="region" id="region" label="Select Region" .options="${t}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select District</h4>
                    <select-input name="district" id="district" label="Select District" .options="${o}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Constituency</h4>
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${n}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Enter Community</h4>
                    <mwc-textfield name="community" type="text" class="w-full" id="community" value="" label="Enter Community" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Applicant Info")}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Applicant Firstname</h4>
                    <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" value="" label="Enter Applicant Firstname" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Applicant Surname</h4>
                    <mwc-textfield name="surname" type="text" class="w-full" id="surname" value="" label="Enter Applicant Surname" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Gender</h4>
                    <mwc-select name="gender" id="gender" label="Select Gender" outlined required>
                      ${this._genders.map((e=>f.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter E-mail Address</h4>
                    <mwc-textfield name="email" type="email" class="w-full" id="email" value="" label="Enter E-mail Address" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Phone Number</h4>
                    <mwc-textfield name="phone" type="tel" class="w-full" id="phone" value="" label="Enter Phone Number" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Leaders")}
                    <h4 class="font-semibold my-2">Add Leaders?</h4> 
                    <switch-input name="addLeaders" class="w-full" id="addLeaders" ?isSelected="${this.showLeadersForm}" label="Add Leaders?" outlined>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 Full Name</h4>
                    <mwc-textfield name="leader_1_name" id="leader_1_name" label="Leader 1 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 Contact</h4>
                    <mwc-textfield name="leader_1_contact" id="leader_1_contact" label="Leader 1 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 E-mail</h4>
                    <mwc-textfield name="leader_1_email" id="leader_1_email" label="Leader 1 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 Full Name</h4>
                    <mwc-textfield name="leader_2_name" id="leader_2_name" label="Leader 2 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 Contact</h4>
                    <mwc-textfield name="leader_2_contact" id="leader_2_contact" label="Leader 2 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 E-mail</h4>
                    <mwc-textfield name="leader_2_email" id="leader_2_email" label="Leader 2 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                    <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 Full Name</h4>
                    <mwc-textfield name="leader_3_name" id="leader_3_name" label="Leader 3 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 Contact</h4>
                    <mwc-textfield name="leader_3_contact" id="leader_3_contact" label="Leader 3 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 E-mail</h4>
                    <mwc-textfield name="leader_3_email" id="leader_3_email" label="Leader 3 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Set Password")}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Password</h4>
                    <mwc-textfield name="password" id="password" label="Enter Password" icon="lock" outlined type="password" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Confirm Password</h4>
                    <mwc-textfield name="confirm_password" id="confirm_password" label="Confirm Password" icon="lock" outlined type="password" required>
                    </mwc-textfield>
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Register" raised class="w-full" @click="${this.submitForm}">
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
    `}sectionSeparater(e){return f.dy`
      <div class="col-md-12 col-lg-12 mt-6 mb-0">
        <div class="flex form-input-container items-center text-center">
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
          <label class="block font-bold text-sm text-gray-600 w-full my-0">
            ${e}
          </label>
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
        </div>
      </div>
    `}addLeadersAction(){const e=this;document.querySelectorAll('[name="addLeaders"]').forEach((t=>{t.addEventListener("click",(o=>{e.showLeadersForm=t.isSelected;const n=this.querySelectorAll("[show_leaders]"),i="hidden";e.showLeadersForm?n.forEach((e=>{e.classList.remove(i)})):n.forEach((e=>{e.classList.add(i)}))}))}))}firstUpdated(){(0,n.m)(),(0,n.m)("mwc-textfield"),document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e),"complete"==document.readyState&&this.accountCategoryChanged(e)},this.addLeadersAction()}accountCategoryChanged(e){document.querySelectorAll('mwc-select[name="accountCategory"]').forEach((e=>{e.onchange=t=>Y(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_other_account_category]"),o="hidden";"-1000"===e.value?t.forEach((e=>{e.classList.remove(o)})):t.forEach((e=>{e.classList.add(o)}))}))}))}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>Y(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),o=this.querySelectorAll("[show_state_province]"),n="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(n)})),o.forEach((e=>{e.classList.add(n)}))):(t.forEach((e=>{e.classList.add(n)})),o.forEach((e=>{e.classList.remove(n)})))}))}))}regionChanged(e){return Y(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>Y(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>Y(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getGenders(){return Y(this,void 0,void 0,(function*(){const e=yield(0,b.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,v.y)(e)))),this._genders=[...this._genders,...t]}))}getClientSubscriptionMembershipSize(){return Y(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return o=this,n=void 0,l=function*(){const o=r.t.URLS.AKWAABA_API_BASE_URL+"clients/subscription/membership-size"+(null===e?"":"/"+e)+t,n=yield(0,s.d)(o,{method:"GET",headers:{}},!0);try{return new i.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new i.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{s(l.next(e))}catch(e){t(e)}}function r(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(i,r)}s((l=l.apply(o,n||[])).next())}));var o,n,a,l}(null,"?client=0");let t=[];null===e?t.push({id:0,info:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>class{static toClientSubscriptionMembershipSizeModel(e){return O(JSON.parse(e),A("ClientSubscriptionMembershipSizeModel"),S)}static clientSubscriptionMembershipSizeModelToJson(e){return JSON.stringify(O(e,A("ClientSubscriptionMembershipSizeModel"),j),null,2)}}.toClientSubscriptionMembershipSizeModel(JSON.stringify(e))))),this._membershipSizes=[...this._membershipSizes,...t]}))}getLocationCountry(){return Y(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return o=this,n=void 0,l=function*(){const o=r.t.URLS.AKWAABA_API_BASE_URL+"locations/country"+(null===e?"":"/"+e)+t,n=yield(0,s.d)(o,{method:"GET",headers:{}},!0,!0);try{return new i.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new i.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{s(l.next(e))}catch(e){t(e)}}function r(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(i,r)}s((l=l.apply(o,n||[])).next())}));var o,n,a,l}(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>x.e.toCountryModel(JSON.stringify(e))));t=[...t,...o]}this._countries=[...this._countries,...t]}))}getClientAccountCategory(){return Y(this,void 0,void 0,(function*(){const e=yield function(e=null,t="",o=!1){return n=this,a=void 0,d=function*(){const n=o?null:(0,c.Ie)(),a=r.t.URLS.AKWAABA_API_BASE_URL+"clients/account-category"+(null===e?"":"/"+e)+t,l=yield(0,s.d)(a,{method:"GET",headers:o?{}:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{r(d.next(e))}catch(e){t(e)}}function i(e){try{r(d.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,i)}r((d=d.apply(n,a||[])).next())}));var n,a,l,d}();let t=[{category:"Select Account Type"}];if(null===e)t.push({id:0,category:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>W.e.toClientAccountCategoryModel(JSON.stringify(e))));o.push({category:"Other",id:-1e3}),t=[...t,...o]}this._accountCategories=[...this._accountCategories,...t]}))}getLocationRegion(){return Y(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return o=this,n=void 0,l=function*(){const o=r.t.URLS.AKWAABA_API_BASE_URL+"locations/region"+(null===e?"":"/"+e)+t,n=yield(0,s.d)(o,{method:"GET",headers:{}},!0,!0);try{return new i.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new i.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{s(l.next(e))}catch(e){t(e)}}function r(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(i,r)}s((l=l.apply(o,n||[])).next())}));var o,n,a,l}(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>class{static toLocationRegionModel(e){return P(JSON.parse(e),M("LocationRegionModel"),L)}static locationRegionModelToJson(e){return JSON.stringify(P(e,M("LocationRegionModel"),E),null,2)}}.toLocationRegionModel(JSON.stringify(e))));t=[...t,...o]}this._regions=[...this._regions,...t]}))}getLocationDistrict(e){return Y(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),o=this._districtsMemo;if(t in o)setTimeout((()=>{this._districts=[...this._districts,...o[t]]}),100);else{const o=yield function(e){return t=this,o=void 0,a=function*(){const t=r.t.URLS.AKWAABA_API_BASE_URL+"locations/district/filter/ "+e,o=yield(0,s.d)(t,{method:"GET",headers:{}},!0,!0);try{return new i.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,i){function r(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(r,s)}l((a=a.apply(t,o||[])).next())}));var t,o,n,a}(e);let n=[{id:0,location:"Select District",regionId:null}];if(null===o)n.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===o.response.success&&"length"in o.response.data){const e=o.response.data.map((e=>class{static toLocationDistrictModel(e){return D(JSON.parse(e),I("LocationDistrictModel"),k)}static locationDistrictModelToJson(e){return JSON.stringify(D(e,I("LocationDistrictModel"),T),null,2)}}.toLocationDistrictModel(JSON.stringify(e))));n=[...n,...e],this._districtsMemo[t]=n}this._districts=[...this._districts,...n]}}))}getLocationConstituency(e,t){return Y(this,void 0,void 0,(function*(){this._constituencies=[];const o=`${e}_${t}`,n=this._constituenciesMemo;if(o in n)setTimeout((()=>{this._constituencies=[...this._constituencies,...n[o]]}),100);else{const n=yield function(e,t){return o=this,n=void 0,l=function*(){const o=r.t.URLS.AKWAABA_API_BASE_URL+"locations/constituency/filter/ "+e+" /"+t,n=yield(0,s.d)(o,{method:"GET",headers:{}},!0,!0);try{return new i.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new i.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{s(l.next(e))}catch(e){t(e)}}function r(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(i,r)}s((l=l.apply(o,n||[])).next())}));var o,n,a,l}(e,t);let a=[{id:0,location:"Select Constituency",regionId:null}];if(null===n)a.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===n.response.success&&"length"in n.response.data){const e=n.response.data.map((e=>class{static toLocationConstituencyModel(e){return z(JSON.parse(e),H("LocationConstituencyModel"),U)}static locationConstituencyModelToJson(e){return JSON.stringify(z(e,H("LocationConstituencyModel"),F),null,2)}}.toLocationConstituencyModel(JSON.stringify(e))));a=[...a,...e],this._constituenciesMemo[o]=a}this._constituencies=[...this._constituencies,...a]}}))}submitForm(e){return Y(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return h(this,void 0,void 0,(function*(){const e=r.t.URLS.AKWAABA_API_BASE_URL+"clients/register",t=document.querySelector('[make-general-posts="client-register"]'),o=new FormData(t);(0,l.R)((n=>y().fire({title:"Create Client Account?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>h(this,void 0,void 0,(function*(){return yield(0,s.d)(e,{method:"POST",body:o},!1).then((e=>{const o=new i.H("post",e,!1,t),n=o.response;if(console.log({_RESPONSE:n}),"nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((o=>{let n={error:t.id+": "+o};"non_field_errors"===t.id&&(n={error:o}),e.push(n)}))}));const t=(0,a.T)(e);y().showValidationMessage(`${t}`)}return o})).catch((e=>{y().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!y().isLoading()}).then((e=>{if(console.log({result:e}),e.isConfirmed){let t,o="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;o="Registration Successful",t=e.data,n=i.response.success}n&&y().fire({title:o,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{const e=(0,d.Y)(t);(0,c.bK)(e),(0,u.U8)(),window.location.href=r.t.URLS.LOGIN_PAGE_BASE_URL}),500)}}))),(e=>{y().fire({title:"Looks like you're offline",text:"Try again later!",icon:"info",iconColor:"#f97817",confirmButtonColor:"#f97817"})}))}))}()}))}createRenderRoot(){return this}};Q.styles=[f.iv`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],K([(0,m.C)({type:Boolean}),V("design:type",Boolean)],Q.prototype,"showLeadersForm",void 0),K([(0,m.C)({type:Boolean}),V("design:type",Boolean)],Q.prototype,"regionCalled",void 0),K([(0,m.C)({type:Number}),V("design:type",Number)],Q.prototype,"selectedRegion",void 0),K([(0,m.C)({type:Number}),V("design:type",Number)],Q.prototype,"selectedDistrict",void 0),K([(0,m.C)({type:Array}),V("design:type",Array)],Q.prototype,"_genders",void 0),K([(0,m.C)({type:Array}),V("design:type",Array)],Q.prototype,"_countries",void 0),K([(0,m.C)({type:Array}),V("design:type",Array)],Q.prototype,"_accountCategories",void 0),K([(0,m.C)({type:Array}),V("design:type",Array)],Q.prototype,"_regions",void 0),K([(0,m.C)({type:Array}),V("design:type",Array)],Q.prototype,"_districts",void 0),K([(0,m.C)({type:Array}),V("design:type",Array)],Q.prototype,"_constituencies",void 0),K([(0,m.C)({type:Object}),V("design:type",Object)],Q.prototype,"_constituenciesMemo",void 0),K([(0,m.C)({type:Object}),V("design:type",Object)],Q.prototype,"_districtsMemo",void 0),K([(0,m.C)({type:Array}),V("design:type",Array)],Q.prototype,"_membershipSizes",void 0),Q=K([(0,g.M)("pdb-register-form"),V("design:paramtypes",[])],Q)}},e=>(e.O(0,[2185,5744,9674,8820,1828,2459,7879,5291,3712],(()=>(8514,e(e.s=8514)))),e.O())])}));
//# sourceMappingURL=register.js.map