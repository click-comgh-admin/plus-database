"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[800],{4672:(e,t,i)=>{i.d(t,{O1:()=>o,Jx:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),i=Object.fromEntries(t.entries());let o=null;for(const t in i)t===e&&(o=i[t]);return o}},1854:(e,t,i)=>{var o=i(9392),s=i(9662),n=i(5713),r=(i(5248),i(934),i(9261),i(3504),i(4277),i(3313),function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};let c=class extends o.oi{constructor(){super(),this.index=0,this._widget=o.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return o.dy`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?o.Ld:o.dy`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};r([(0,s.C)({type:Number}),a("design:type",Number)],c.prototype,"index",void 0),r([(0,s.C)({type:Boolean}),a("design:type",Boolean)],c.prototype,"no_delete",void 0),r([(0,s.C)({type:Boolean}),a("design:type",Boolean)],c.prototype,"single",void 0),r([(0,s.C)({type:String}),a("design:type",String)],c.prototype,"_single",void 0),c=r([(0,n.M)("multiple-widgets"),a("design:paramtypes",[])],c)},5866:(e,t,i)=>{var o=i(9755),s=i(9392),n=i(9662),r=i(5713),a=(i(686),function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends s.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=o(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let i=!1;return this.value.forEach((e=>{const o=e.id;i=t===o})),e.selected=i,e}))}render(){return this.multiple?this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:(console.log({"this.value":this.value}),o(this.value.map((t=>{const i=Number(e.id)===t.id,o=i?"selected='true'":"";return console.log({_selected:i,selected:o}),'<option value="'+e.id+'" '+o+">"+e.text+"</option>"}))))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const i=this;return console.log({_this:i}),this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,o(".select2-search__field").on("keyup",(function(e){o(i.selectSelector).empty(),i.startSearchPage=0,console.log({_this:i})})),i.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,i=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{console.log({"selectSelector-1":e}),o(e).select2({closeOnSelect:!1,placeholder:this.label})}));else{let s={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)s[e]=this.ajaxHeader[e];this.selectSelector.forEach((n=>{o(n).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(s){const n=function(s,n){return i=isNaN(s.page)?0:s.page,i=0===i?i:i*t,o(".select2-search__field").on("keyup",(function(s){o(e.selectSelector).empty(),i=0,t=0})),i}(s),r=function(i,s){let n=isNaN(i.page)?1:i.page+1;return n=0===n?1:n,o(".select2-search__field").on("keyup",(function(i){o(e.selectSelector).empty(),n=0,t=0})),n}(s);let a={search:s.term,start:n,page:r};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),console.log({finalParams:a}),a},headers:s,processResults:(e,i)=>{const o=null===this.ajaxFetchProcessResponse?this._processResults(e,i):this.ajaxFetchProcessResponse(e,i);return console.log({"totalShowing-1":t}),t+=o.results.length,console.log({"totalShowing-2":t}),{results:o.results,pagination:{more:t<o.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{i=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const i=e;t.page=t.page||0;let o=[];if(!1===i.error){var s=i.data;for(let e=0;e<s.length;e++){const t=s[e],i={id:t.id,text:t.fullName};o.includes(i)||o.push(i)}}return this.totalShowing+=o.length,{results:o,total:i.total,totalShowing:this.totalShowing}}createRenderRoot(){return this}};c.styles=[s.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),a([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),a([(0,n.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),a([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),a([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),a([(0,n.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),a([(0,n.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),a([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),a([(0,n.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),a([(0,n.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),a([(0,n.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),a([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),a([(0,n.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),a([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),a([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),a([(0,n.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),a([(0,n.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=a([(0,r.M)("select-input")],c)},3690:(e,t,i)=>{var o=i(9392),s=i(9662),n=i(5713),r=(i(5185),i(5142),function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.dy`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.dy`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected}createRenderRoot(){return this}};l.styles=[o.iv`
      :host {
        display: block;
      }
    `],r([(0,s.C)({type:String}),a("design:type",String)],l.prototype,"name",void 0),r([(0,s.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),r([(0,s.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"selected",void 0),r([(0,s.C)({type:String}),a("design:type",String)],l.prototype,"value",void 0),r([(0,s.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"isSelected",void 0),l=r([(0,n.M)("switch-input")],l)}}]);
//# sourceMappingURL=800.js.map