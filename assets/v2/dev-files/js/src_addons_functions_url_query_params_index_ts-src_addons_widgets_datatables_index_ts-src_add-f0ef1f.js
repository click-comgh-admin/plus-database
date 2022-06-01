(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_url_query_params_index_ts-src_addons_widgets_datatables_index_ts-src_add-f0ef1f"],{9493:(t,e,r)=>{"use strict";r.r(e)},4672:(t,e,r)=>{"use strict";r.r(e),r.d(e,{urlQueryParams:()=>a,urlQueryParamsGet:()=>o,urlQueryParamsJoin:()=>i});const a=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},o=t=>{const e=new URLSearchParams(window.location.search),r=Object.fromEntries(e.entries());let a=null;for(const e in r)e===t&&(a=r[e]);return a},i=t=>{let e="",r=0;for(const a in t)r+=1,e+=`${r>1?"&":""}${a}=${t[a]}`;return e}},367:()=>{},6883:(t,e,r)=>{"use strict";r.r(e),r.d(e,{_DATATABLES_:()=>l});var a,o=r(5862),i=r(9662),s=(r(367),r(9493),function(t,e,r,a){var o,i=arguments.length,s=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,a);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}),n=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends o.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return o.html`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return o.html`
      ${this.dt_head.map((t=>o.html`<th>${t.title}</th>`))}
    `}tbody(){return o.html`
      ${this.dt_body.map((t=>o.html`<tr>${t.map((t=>o.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return o.html`
    ${this.dt_foot.map((t=>o.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;console.log({"this.ajaxHeader":this.ajaxHeader});for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const r=this.ajaxHeader[t];e[t]=r}console.log({_headers:e,$}),t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[o.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,i.property)({type:Number}),n("design:type",Number)],l.prototype,"randomID1",void 0),s([(0,i.property)({type:Number}),n("design:type",Number)],l.prototype,"randomID2",void 0),s([(0,i.property)({type:String}),n("design:type",String)],l.prototype,"ID",void 0),s([(0,i.property)({type:Object}),n("design:type","function"==typeof(a="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?a:Object)],l.prototype,"datatable",void 0),s([(0,i.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_head",void 0),s([(0,i.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_foot",void 0),s([(0,i.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_body",void 0),s([(0,i.property)(),n("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=s([(0,i.customElement)("datatables-new"),n("design:paramtypes",[])],l)},3690:(t,e,r)=>{"use strict";r.r(e),r.d(e,{SwitchInput:()=>n});var a=r(5862),o=r(9662),i=(r(9975),r(6788),function(t,e,r,a){var o,i=arguments.length,s=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,a);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}),s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let n=class extends a.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return a.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?a.html`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:a.html`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(t){this.isSelected=t.target.selected}createRenderRoot(){return this}};n.styles=[a.css`
      :host {
        display: block;
      }
    `],i([(0,o.property)({type:String}),s("design:type",String)],n.prototype,"name",void 0),i([(0,o.property)({type:String}),s("design:type",String)],n.prototype,"label",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],n.prototype,"selected",void 0),i([(0,o.property)({type:String}),s("design:type",String)],n.prototype,"value",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],n.prototype,"isSelected",void 0),n=i([(0,o.customElement)("switch-input")],n)}}]);
//# sourceMappingURL=src_addons_functions_url_query_params_index_ts-src_addons_widgets_datatables_index_ts-src_add-f0ef1f.js.map