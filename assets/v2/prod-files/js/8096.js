"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8096],{8967:(e,t,i)=>{i.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let i=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{i+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},7725:(e,t,i)=>{i.d(t,{eF:()=>s,U8:()=>l,hk:()=>c});var o=i(7052),r=i(1942),n=i(1489);const a="pdb-active-branch",s=e=>{const t=JSON.stringify(e);(0,r.Ad)(a,"",-1),(0,r.Ad)(a,(0,o.h)(t),3500)};function l(){(0,r.Ad)(a,"",-1)}const c=()=>{if(""===(0,r.Hl)(a))return null;{const e=(0,o.t)((0,r.Hl)(a)),t=JSON.parse(e);return(0,n.N)(t)}}},1489:(e,t,i)=>{function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}i.d(t,{j:()=>o,N:()=>r})},6224:(e,t,i)=>{i.d(t,{p:()=>s});var o=i(771),r=i(7270),n=i(596),a=i(3600);function s(e=null){return t=this,i=void 0,l=function*(){const t=(0,a.Ie)(),i=o.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),s=yield(0,r.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new n.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new n.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,o){function r(e){try{a(l.next(e))}catch(e){o(e)}}function n(e){try{a(l.throw(e))}catch(e){o(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(r,n)}a((l=l.apply(t,i||[])).next())}));var t,i,s,l}},5866:(e,t,i)=>{var o=i(9755),r=i(9392),n=i(9662),a=i(5713),s=(i(686),function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=o(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let i=!1;return this.value.forEach((e=>{const o=e.id;i=t===o})),e.selected=i,e}))}render(){return this.multiple?this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:o(this.value.map((t=>{const i=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+i+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const i=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,o(".select2-search__field").on("keyup",(function(e){o(i.selectSelector).empty(),i.startSearchPage=0})),i.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,i=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{o(e).select2({closeOnSelect:!1,placeholder:this.label}),o(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let r={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)r[e]=this.ajaxHeader[e];this.selectSelector.forEach((n=>{o(n).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(r){const n=function(r,n){return i=isNaN(r.page)?0:r.page,i=0===i?i:i*t,o(".select2-search__field").on("keyup",(function(r){o(e.selectSelector).empty(),i=0,t=0})),i}(r),a=function(i,r){let n=isNaN(i.page)?1:i.page+1;return n=0===n?1:n,o(".select2-search__field").on("keyup",(function(i){o(e.selectSelector).empty(),n=0,t=0})),n}(r);let s={search:r.term,start:n,page:a};return e.ajaxFetchUrlParams.forEach((e=>{s[e.param]=e.value})),s},headers:r,processResults:(e,i)=>{const o=null===this.ajaxFetchProcessResponse?this._processResults(e,i):this.ajaxFetchProcessResponse(e,i);return t+=o.results.length,{results:o.results,pagination:{more:t<o.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{i=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const i=e;t.page=t.page||0;let o=[];if(!1===i.error){var r=i.data;for(let e=0;e<r.length;e++){const t=r[e],i={id:t.id,text:t.fullName};o.includes(i)||o.push(i)}}return this.totalShowing+=o.length,{results:o,total:i.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let i=[];for(const e of t){let t=e;const o=Number.isNaN(t.value)?0:Number(t.value);i.includes(o)||i.push(o)}this.currentValue=i,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",i)}createRenderRoot(){return this}};c.styles=[r.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),s([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),s([(0,n.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),s([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),s([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),s([(0,n.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),s([(0,n.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),s([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),s([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),s([(0,n.C)({attribute:!1}),l("design:type",Object)],c.prototype,"currentValue",void 0),s([(0,n.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),s([(0,n.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),s([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),s([(0,n.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),s([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),s([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),s([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),s([(0,n.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=s([(0,a.M)("select-input")],c)}}]);
//# sourceMappingURL=8096.js.map