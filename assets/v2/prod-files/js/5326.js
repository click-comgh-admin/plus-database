"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[5326],{2368:(t,e,n)=>{n.d(e,{L:()=>r});var i=n(4672);class r{constructor(t){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=t=>{t.preventDefault();const e=window.FilterFieldBox.form,n=new FormData(e),i=this.unmutableInputNames.map((t=>t.name));n.forEach(((t,e)=>{i.includes(e)||document.querySelectorAll('[name="'+e+'"]').forEach((t=>{t.value=""}))})),this.unmutableInputNames.map((t=>{const e=t.name,n=t.value;void 0!==n&&document.querySelectorAll('[name="'+e+'"]').forEach((t=>{t.value=n}))})),e.submit()},this.constructorInit=t;const e=t.selectors;this.form=e.form,this.container=e.container,this.filterSectionContextBtn=e.filterSectionContextBtn,this.unmutableInputNames=t.unmutableInputNames,this.__filtering__open_default=t.isOpen,this.__filtering__=(0,i.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(t){t.preventDefault();const e=window.FilterFieldBox;if(e.__allowed){const t=e.filterSectionContextBtn,n=e.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),t.setAttribute("class","warning mt-1"),t.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),t.setAttribute("class","primary mt-1"),t.setAttribute("icon","open_with"))}}addfilterCheckInput(){const t=window.FilterFieldBox.form,e=document.createElement("input");e.type="hidden",e.value="true",e.name=this.filtering,t.appendChild(e)}toggleFilterFieldsDefault(){const t=this;function e(){t.container.hasAttribute("hidden")&&t.filterSectionContextBtn.click()}"true"===this.__filtering__&&e(),this.__filtering__open_default&&e()}submit(t){t.preventDefault(),window.FilterFieldBox.form.submit()}}},8967:(t,e,n)=>{n.d(e,{T:()=>i});const i=(t,e=!0)=>{if(Array.isArray(t)){let n=(e?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return t.forEach((t=>{n+="string"==typeof t?`<li>${t}</li>\n`:`<li>${t.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4672:(t,e,n)=>{n.d(e,{O1:()=>i,Jx:()=>r,W3:()=>o});const i=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},r=t=>{const e=new URLSearchParams(window.location.search),n=Object.fromEntries(e.entries());let i=null;for(const e in n)e===t&&(i=n[e]);return i},o=t=>{let e="",n=0;for(const i in t)n+=1,e+=`${n>1?"&":""}${i}=${t[i]}`;return e}},7725:(t,e,n)=>{n.d(e,{eF:()=>a,U8:()=>l,hk:()=>c});var i=n(7052),r=n(1942),o=n(1489);const s="pdb-active-branch",a=t=>{const e=JSON.stringify(t);(0,r.Ad)(s,"",-1),(0,r.Ad)(s,(0,i.h)(e),3500)};function l(){(0,r.Ad)(s,"",-1)}const c=()=>{if(""===(0,r.Hl)(s))return null;{const t=(0,i.t)((0,r.Hl)(s)),e=JSON.parse(t);return(0,o.N)(e)}}},1489:(t,e,n)=>{function i(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId),createdBy:Number(t.createdBy),creationDate:new Date(t.creationDate),updatedBy:Number(t.updatedBy),updateDate:new Date(t.updateDate)}}function r(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId)}}n.d(e,{j:()=>i,N:()=>r})},6224:(t,e,n)=>{n.d(e,{p:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(t=null){return e=this,n=void 0,l=function*(){const e=(0,s.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===t?"":"/"+t),a=yield(0,r.d)(n,{method:"GET",headers:{Authorization:"Token "+e.token}},!0);try{return new o.H("get",a)}catch(t){console.error({error:t});let e=a;return e.error=t,new o.H("get",e,!0)}},new((a=void 0)||(a=Promise))((function(t,i){function r(t){try{s(l.next(t))}catch(t){i(t)}}function o(t){try{s(l.throw(t))}catch(t){i(t)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof a?n:new a((function(t){t(n)}))).then(r,o)}s((l=l.apply(e,n||[])).next())}));var e,n,a,l}},602:(t,e,n)=>{n.d(e,{u:()=>u});var i=n(6455),r=n.n(i),o=n(771),s=n(7270),a=n(596),l=n(8967),c=n(3600),d=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function s(t){try{l(i.next(t))}catch(t){o(t)}}function a(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}l((i=i.apply(t,e||[])).next())}))};function u(t){return d(this,void 0,void 0,(function*(){const e=(0,c.Ie)(),n=o.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group/"+t,i={};return r().fire({title:"Remove Group?",text:"You may have members assigned to this group. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:t=>d(this,void 0,void 0,(function*(){return yield(0,s.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+e.token}},!1).then((t=>{try{const e=new a.H("delete",t,!1),n=e.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let t=[];n.unknownError.forEach((e=>{e.errors.forEach((e=>{t.push({error:e})}))}));const e=(0,l.T)(t);r().showValidationMessage(`${e}`)}return e}catch(e){console.error({error:e});let n=t;n.error=e;const i=new a.H("delete",n,!0);return i.postForm,i}})).catch((t=>{r().showValidationMessage(`${String(t)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((t=>{if(t.isConfirmed){let e="Success",n=!1;const i=t.value;if(i instanceof Object){const t=i.response;e=String(t.message),n=i.response.success}r().fire({title:e,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2715:(t,e,n)=>{var i=n(9392),r=n(9662),o=n(5713),s=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:i.dy`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"aClass",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"bClass",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"icon",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"href",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,r.C)({type:String}),a("design:type",String)],l.prototype,"isBlockContent",void 0),s([(0,r.C)({type:Boolean}),a("design:type",Boolean)],l.prototype,"raised",void 0),l=s([(0,o.M)("link-button")],l)},6883:(t,e,n)=>{var i,r=n(9392),o=n(9662),s=n(5713),a=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends r.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return r.dy`
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
      ${this.dt_head.map((t=>r.dy`<th>${t.title}</th>`))}
    `}tbody(){return r.dy`
      ${this.dt_body.map((t=>r.dy`<tr>${t.map((t=>r.dy`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return r.dy`
    ${this.dt_foot.map((t=>r.dy`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const n=this.ajaxHeader[t];e[t]=n}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[r.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID1",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID2",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"ID",void 0),a([(0,o.C)({type:Object}),l("design:type","function"==typeof(i="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?i:Object)],c.prototype,"datatable",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_head",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_foot",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_body",void 0),a([(0,o.C)(),l("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=a([(0,s.M)("datatables-new"),l("design:paramtypes",[])],c)},8281:(t,e,n)=>{var i=n(771),r=n(9392),o=n(9662),s=n(5713),a=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends r.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return r.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(t){t.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=i.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+e}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=i.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+e}}createRenderRoot(){return this}};c.styles=[r.iv`
   :host { display: block; }
  `],a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"url",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"type",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=a([(0,s.M)("user-profile-photo"),l("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=5326.js.map