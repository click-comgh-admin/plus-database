"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[188],{2368:(e,t,i)=>{i.d(t,{L:()=>r});var n=i(4672);class r{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{e.preventDefault();const t=window.FilterFieldBox.form,i=new FormData(t),n=this.unmutableInputNames.map((e=>e.name));i.forEach(((e,t)=>{n.includes(t)||document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=""}))})),this.unmutableInputNames.map((e=>{const t=e.name,i=e.value;void 0!==i&&document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=i}))})),t.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,n.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,i=t.container;i.hasAttribute("hidden")?(i.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(i.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},4672:(e,t,i)=>{i.d(t,{O1:()=>n,Jx:()=>r,W3:()=>o});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),i=Object.fromEntries(t.entries());let n=null;for(const t in i)t===e&&(n=i[t]);return n},o=e=>{let t="",i=0;for(const n in e)i+=1,t+=`${i>1?"&":""}${n}=${e[n]}`;return t}},7725:(e,t,i)=>{i.d(t,{eF:()=>s,U8:()=>a,hk:()=>c});var n=i(7052),r=i(1942),o=i(1489);const l="pdb-active-branch",s=e=>{const t=JSON.stringify(e);(0,r.Ad)(l,"",-1),(0,r.Ad)(l,(0,n.h)(t),3500)};function a(){(0,r.Ad)(l,"",-1)}const c=()=>{if(""===(0,r.Hl)(l))return null;{const e=(0,n.t)((0,r.Hl)(l)),t=JSON.parse(e);return(0,o.N)(t)}}},1489:(e,t,i)=>{function n(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}i.d(t,{j:()=>n,N:()=>r})},2869:(e,t,i)=>{function n(e){return{id:Number(e.id),name:e.name}}i.d(t,{y:()=>n})},7553:(e,t,i)=>{i.d(t,{q:()=>s});var n=i(771),r=i(7270),o=i(596),l=i(3600);function s(e=null){return t=this,i=void 0,a=function*(){const t=(0,l.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),s=yield(0,r.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new o.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function r(e){try{l(a.next(e))}catch(e){n(e)}}function o(e){try{l(a.throw(e))}catch(e){n(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(r,o)}l((a=a.apply(t,i||[])).next())}));var t,i,s,a}},2715:(e,t,i)=>{var n=i(9392),r=i(9662),o=i(5713),l=function(e,t,i,n){var r,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(l=(o<3?r(l):o>3?r(t,i,l):r(t,i))||l);return o>3&&l&&Object.defineProperty(t,i,l),l},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends n.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?n.dy`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:n.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};l([(0,r.C)({type:String}),s("design:type",String)],a.prototype,"aClass",void 0),l([(0,r.C)({type:String}),s("design:type",String)],a.prototype,"bClass",void 0),l([(0,r.C)({type:String}),s("design:type",String)],a.prototype,"icon",void 0),l([(0,r.C)({type:String}),s("design:type",String)],a.prototype,"href",void 0),l([(0,r.C)({type:String}),s("design:type",String)],a.prototype,"label",void 0),l([(0,r.C)({type:String}),s("design:type",String)],a.prototype,"isBlockContent",void 0),l([(0,r.C)({type:Boolean}),s("design:type",Boolean)],a.prototype,"raised",void 0),a=l([(0,o.M)("link-button")],a)},6883:(e,t,i)=>{var n,r=i(9392),o=i(9662),l=i(5713),s=function(e,t,i,n){var r,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(l=(o<3?r(l):o>3?r(t,i,l):r(t,i))||l);return o>3&&l&&Object.defineProperty(t,i,l),l},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return r.dy`
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
  `}thead(){return r.dy`
      ${this.dt_head.map((e=>r.dy`<th>${e.title}</th>`))}
    `}tbody(){return r.dy`
      ${this.dt_body.map((e=>r.dy`<tr>${e.map((e=>r.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return r.dy`
    ${this.dt_foot.map((e=>r.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const i=this.ajaxHeader[e];t[e]=i}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[r.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,o.C)({type:Number}),a("design:type",Number)],c.prototype,"randomID1",void 0),s([(0,o.C)({type:Number}),a("design:type",Number)],c.prototype,"randomID2",void 0),s([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"ID",void 0),s([(0,o.C)({type:Object}),a("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],c.prototype,"datatable",void 0),s([(0,o.C)({type:Array}),a("design:type",Array)],c.prototype,"dt_head",void 0),s([(0,o.C)({type:Array}),a("design:type",Array)],c.prototype,"dt_foot",void 0),s([(0,o.C)({type:Array}),a("design:type",Array)],c.prototype,"dt_body",void 0),s([(0,o.C)(),a("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=s([(0,l.M)("datatables-new"),a("design:paramtypes",[])],c)},8281:(e,t,i)=>{var n=i(771),r=i(9392),o=i(9662),l=i(5713),s=function(e,t,i,n){var r,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(l=(o<3?r(l):o>3?r(t,i,l):r(t,i))||l);return o>3&&l&&Object.defineProperty(t,i,l),l},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return r.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[r.iv`
   :host { display: block; }
  `],s([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"url",void 0),s([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"type",void 0),s([(0,o.C)({type:Boolean}),a("design:type",Boolean)],c.prototype,"rounded",void 0),s([(0,o.C)({type:String}),a("design:type",String)],c.prototype,"click-to-open",void 0),s([(0,o.C)({type:Number}),a("design:type",Number)],c.prototype,"size",void 0),c=s([(0,l.M)("user-profile-photo"),a("design:paramtypes",[])],c)},5210:(e,t,i)=>{i.r(t),i.d(t,{PdbAdminUserAll:()=>C});var n,r,o,l=i(9392),s=i(2669),a=i(9662),c=i(5713),d=i(5248),u=(i(1239),i(9261),i(3313),i(6883),i(2715),i(7725)),p=(i(8281),i(7052)),f=i(771),h=i(3600),m=i(4672),b=i(7553),y=i(2869),g=i(2368),v=function(e,t,i,n){var r,o=arguments.length,l=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(l=(o<3?r(l):o>3?r(t,i,l):r(t,i))||l);return o>3&&l&&Object.defineProperty(t,i,l),l},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function l(e){try{a(n.next(e))}catch(e){o(e)}}function s(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,s)}a((n=n.apply(e,t||[])).next())}))};let C=class extends l.oi{constructor(){super(),this.memberProfileBaseUrl="/admin/user/view-account?user-id=",this.memberProfileAddBaseUrl="/admin/user/add-account",this.memberProfileEditBaseUrl="/admin/user/update-account?user-id=",this._genders=[],this._activeBranchId=null,this.__clientUsers=null}set _clientUsers(e){this.__clientUsers=e,this.requestUpdate()}get _clientUsers(){return this.__clientUsers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,u.hk)();this._activeBranchId=null===t?null:[t],this.filterBox=new g.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders()}))}disconnectedCallback(){}render(){return l.dy`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1">
        <div class="row my-1">
          <div class="col-xl-4 col-md-6"></div>
          <div class="col-xl-4 col-md-6">
            <div class="flex flex-col items-end">
              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                href="${this.memberProfileAddBaseUrl}" label="Add Client User"></link-button>
            </div>
          </div>
        </div>
        <hr/>
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new g.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}get filterForm(){let e=l.dy``;const t=(0,m.O1)(),i="filter_gender",n="filter_name";let r=null,o=null;for(const e in t){let l=String(t[e]);l=""===l?null:l,e===i&&(r=l),e===n&&(o=l)}const s=l.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${n}" id="${n}" label="Search By Name" 
            value="${null===o?"":o}" outlined required>
          </mwc-textfield>
        </div>
      </div>
    `,a=l.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${i}" id="${i}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===r?l.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(r)===e.id?l.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:l.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>
    `;return e=l.dy`
      <form method="get" class="form " make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${s} ${a}
              <div class="col-xl-8 col-md-12">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    `,e}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t="";t=f.t.URLS.AKWAABA_API_BASE_URL+"clients/user?branchId="+e+"&order__by=firstname&datatable_plugin",t+=this.urlQueryString;const i=this.__dataTable(t);let n={};const r=(0,h.Ie)();return n.Authorization="Token "+r.token,l.dy`
      <datatables-new .datatable="${i}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,m.O1)();let t={};for(const i in e){let n=String(e[i]);"filter_gender"!==i&&"filter_name"!==i||(t[i]=n)}let i=(0,m.W3)(t);return 0===i.length?i:"&"+i}getGenders(){return w(this,void 0,void 0,(function*(){const e=yield(0,b.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,y.y)(e)))),this._genders=[...this._genders,...t]}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,i,n){const r=(0,p.h)(String(n.id),!0);return`<div class="flex items-center whitespace-normal">\n                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${t.memberProfileBaseUrl}${r}" type="client"\n                  url="${n.profilePicture}" size="16"></user-profile-photo>\n                <p class="ml-1">${n.firstname} ${n.surname}</p>\n              </div>`},orderable:!0},{data:"firstname",render:function(e,i,n){const r=(0,p.h)(String(n.id),!0);return`<div class="flex flex-col md:flex-row items-center whitespace-normal">\n              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"\n                href="${t.memberProfileBaseUrl}${r}" label="Open"></link-button>\n              <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"\n                href="${t.memberProfileEditBaseUrl}${r}" label="Edit"></link-button>\n            </div>`},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return w(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};C.styles=[l.iv`
   :host { display: block; }
  `],v([(0,s.I)('[filter-section-context="btn"]'),_("design:type","function"==typeof(n=void 0!==d.z&&d.z)?n:Object)],C.prototype,"filterSectionContextBtn",void 0),v([(0,s.I)('[filter-section-context="container"]'),_("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],C.prototype,"filterSectionContextContainer",void 0),v([(0,s.I)('[make-general-posts="submit_filter_form"]'),_("design:type","function"==typeof(o="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?o:Object)],C.prototype,"filterSectionContextForm",void 0),v([(0,a.C)({type:String}),_("design:type",String)],C.prototype,"memberProfileBaseUrl",void 0),v([(0,a.C)({type:String}),_("design:type",String)],C.prototype,"memberProfileAddBaseUrl",void 0),v([(0,a.C)({type:String}),_("design:type",String)],C.prototype,"memberProfileEditBaseUrl",void 0),v([(0,a.C)({type:Array}),_("design:type",Array)],C.prototype,"_genders",void 0),v([(0,a.C)({type:Array}),_("design:type",Array)],C.prototype,"_activeBranchId",void 0),C=v([(0,c.M)("pdb-admin-user-all"),_("design:paramtypes",[])],C)}},e=>(e.O(0,[2185,5744,2459,938,5291,7097,3712],(()=>(5210,e(e.s=5210)))),e.O())])}));
//# sourceMappingURL=all.js.map