(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts"],{9493:(t,e,i)=>{"use strict";i.r(e)},2368:(t,e,i)=>{"use strict";i.r(e),i.d(e,{FilterFieldBox:()=>a});var r=i(4672);class a{constructor(t){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=t=>{t.preventDefault();const e=window.FilterFieldBox.form,i=new FormData(e),r=this.unmutableInputNames.map((t=>t.name));i.forEach(((t,e)=>{r.includes(e)||document.querySelectorAll('[name="'+e+'"]').forEach((t=>{t.value=""}))})),this.unmutableInputNames.map((t=>{const e=t.name,i=t.value;void 0!==i&&document.querySelectorAll('[name="'+e+'"]').forEach((t=>{t.value=i}))})),e.submit()},this.constructorInit=t;const e=t.selectors;this.form=e.form,this.container=e.container,this.filterSectionContextBtn=e.filterSectionContextBtn,this.unmutableInputNames=t.unmutableInputNames,this.__filtering__open_default=t.isOpen,this.__filtering__=(0,r.urlQueryParamsGet)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(t){t.preventDefault();const e=window.FilterFieldBox;if(e.__allowed){const t=e.filterSectionContextBtn,i=e.container;i.hasAttribute("hidden")?(i.removeAttribute("hidden"),t.setAttribute("class","warning mt-1"),t.setAttribute("icon","close_fullscreen")):(i.setAttribute("hidden",""),t.setAttribute("class","primary mt-1"),t.setAttribute("icon","open_with"))}}addfilterCheckInput(){const t=window.FilterFieldBox.form,e=document.createElement("input");e.type="hidden",e.value="true",e.name=this.filtering,t.appendChild(e)}toggleFilterFieldsDefault(){const t=this;function e(){t.container.hasAttribute("hidden")&&t.filterSectionContextBtn.click()}"true"===this.__filtering__&&e(),this.__filtering__open_default&&e()}submit(t){t.preventDefault(),window.FilterFieldBox.form.submit()}}},4672:(t,e,i)=>{"use strict";i.r(e),i.d(e,{urlQueryParams:()=>r,urlQueryParamsGet:()=>a,urlQueryParamsJoin:()=>n});const r=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},a=t=>{const e=new URLSearchParams(window.location.search),i=Object.fromEntries(e.entries());let r=null;for(const e in i)e===t&&(r=i[e]);return r},n=t=>{let e="",i=0;for(const r in t)i+=1,e+=`${i>1?"&":""}${r}=${t[r]}`;return e}},367:()=>{},6883:(t,e,i)=>{"use strict";i.r(e),i.d(e,{_DATATABLES_:()=>l});var r,a=i(5862),n=i(9662),o=(i(367),i(9493),function(t,e,i,r){var a,n=arguments.length,o=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(n<3?a(o):n>3?a(e,i,o):a(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}),s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends a.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.html`
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
  `}thead(){return a.html`
      ${this.dt_head.map((t=>a.html`<th>${t.title}</th>`))}
    `}tbody(){return a.html`
      ${this.dt_body.map((t=>a.html`<tr>${t.map((t=>a.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return a.html`
    ${this.dt_foot.map((t=>a.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const i=this.ajaxHeader[t];e[t]=i}t.headers=e,this.datatable.ajax=t}console.log({$,table:t,"this.datatable":this.datatable}),$(t).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[a.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],o([(0,n.property)({type:Number}),s("design:type",Number)],l.prototype,"randomID1",void 0),o([(0,n.property)({type:Number}),s("design:type",Number)],l.prototype,"randomID2",void 0),o([(0,n.property)({type:String}),s("design:type",String)],l.prototype,"ID",void 0),o([(0,n.property)({type:Object}),s("design:type","function"==typeof(r="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?r:Object)],l.prototype,"datatable",void 0),o([(0,n.property)({type:Array}),s("design:type",Array)],l.prototype,"dt_head",void 0),o([(0,n.property)({type:Array}),s("design:type",Array)],l.prototype,"dt_foot",void 0),o([(0,n.property)({type:Array}),s("design:type",Array)],l.prototype,"dt_body",void 0),o([(0,n.property)(),s("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=o([(0,n.customElement)("datatables-new"),s("design:paramtypes",[])],l)}}]);
//# sourceMappingURL=src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts.js.map