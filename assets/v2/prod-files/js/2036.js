/*! For license information please see 2036.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2036,4814],{2368:(e,t,n)=>{n.d(t,{L:()=>a});var i=n(4672);class a{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{e.preventDefault();const t=window.FilterFieldBox.form,n=new FormData(t),i=this.unmutableInputNames.map((e=>e.name));n.forEach(((e,t)=>{i.includes(t)||document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=""}))})),this.unmutableInputNames.map((e=>{const t=e.name,n=e.value;void 0!==n&&document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=n}))})),t.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,i.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,n=t.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},7725:(e,t,n)=>{n.d(t,{eF:()=>l,U8:()=>c,hk:()=>o});var i=n(7052),a=n(1942),r=n(1489);const s="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,a.Ad)(s,"",-1),(0,a.Ad)(s,(0,i.h)(t),3500)};function c(){(0,a.Ad)(s,"",-1)}const o=()=>{if(""===(0,a.Hl)(s))return null;{const e=(0,i.t)((0,a.Hl)(s)),t=JSON.parse(e);return(0,r.N)(t)}}},3464:(e,t,n)=>{function i(e){return{id:Number(e.id),page:e.page}}n.d(t,{Q:()=>i})},2583:(e,t,n)=>{n.d(t,{z:()=>a});var i=n(3464);function a(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,i.Q)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},2869:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.d(t,{y:()=>i})},5069:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.d(t,{w:()=>i})},3437:(e,t,n)=>{n.d(t,{C:()=>a});var i=n(267);function a(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,i.Y)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},660:(e,t,n)=>{n.d(t,{P:()=>a}),n(2892);var i=n(267);function a(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,i.Y)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},1148:(e,t,n)=>{n.d(t,{e:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),l=yield(0,a.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function r(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(a,r)}s((c=c.apply(t,n||[])).next())}));var t,n,l,c}},8698:(e,t,n)=>{n.d(t,{R:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,o=function*(){const n=(0,s.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,c=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}r((o=o.apply(n,l||[])).next())}));var n,l,c,o}},7824:(e,t,n)=>{n.d(t,{E:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,o=function*(){const n=(0,s.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,c=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}r((o=o.apply(n,l||[])).next())}));var n,l,c,o}},4843:(e,t,n)=>{n.d(t,{S:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,o=function*(){const n=(0,s.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,c=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}r((o=o.apply(n,l||[])).next())}));var n,l,c,o}},2218:(e,t,n)=>{n.d(t,{u:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,o=function*(){const n=(0,s.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,c=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}r((o=o.apply(n,l||[])).next())}));var n,l,c,o}},8786:(e,t,n)=>{n.d(t,{s:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,o=function*(){const n=(0,s.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,c=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}r((o=o.apply(n,l||[])).next())}));var n,l,c,o}},2506:(e,t,n)=>{n.d(t,{H:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,o=function*(){const n=(0,s.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user-access"+(null===e?"":"/"+e)+t,c=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}r((o=o.apply(n,l||[])).next())}));var n,l,c,o}},7553:(e,t,n)=>{n.d(t,{q:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),l=yield(0,a.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function r(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(a,r)}s((c=c.apply(t,n||[])).next())}));var t,n,l,c}},4115:(e,t,n)=>{n.d(t,{d:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),l=yield(0,a.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function r(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(a,r)}s((c=c.apply(t,n||[])).next())}));var t,n,l,c}},2892:(e,t,n)=>{n.d(t,{c:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,o=function*(){const n=(0,s.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}r((o=o.apply(n,l||[])).next())}));var n,l,c,o}},72:(e,t,n)=>{n.d(t,{L:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),l=yield(0,a.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function r(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(a,r)}s((c=c.apply(t,n||[])).next())}));var t,n,l,c}},9605:(e,t,n)=>{n.d(t,{U:()=>l});var i=n(771),a=n(7270),r=n(596),s=n(3600);function l(e=null,t=""){return n=this,l=void 0,o=function*(){const n=(0,s.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,c=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(o.next(e))}catch(e){t(e)}}function a(e){try{r(o.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}r((o=o.apply(n,l||[])).next())}));var n,l,c,o}},6883:(e,t,n)=>{var i,a=n(9392),r=n(9662),s=n(5713),l=function(e,t,n,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,n,s):a(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.dy`
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
  `}thead(){return a.dy`
      ${this.dt_head.map((e=>a.dy`<th>${e.title}</th>`))}
    `}tbody(){return a.dy`
      ${this.dt_body.map((e=>a.dy`<tr>${e.map((e=>a.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return a.dy`
    ${this.dt_foot.map((e=>a.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const n=this.ajaxHeader[e];t[e]=n}e.headers=t,this.datatable.ajax=e}console.log({$,table:e,"this.datatable":this.datatable}),$(e).DataTable(this.datatable)}createRenderRoot(){return this}};o.styles=[a.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],l([(0,r.C)({type:Number}),c("design:type",Number)],o.prototype,"randomID1",void 0),l([(0,r.C)({type:Number}),c("design:type",Number)],o.prototype,"randomID2",void 0),l([(0,r.C)({type:String}),c("design:type",String)],o.prototype,"ID",void 0),l([(0,r.C)({type:Object}),c("design:type","function"==typeof(i="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?i:Object)],o.prototype,"datatable",void 0),l([(0,r.C)({type:Array}),c("design:type",Array)],o.prototype,"dt_head",void 0),l([(0,r.C)({type:Array}),c("design:type",Array)],o.prototype,"dt_foot",void 0),l([(0,r.C)({type:Array}),c("design:type",Array)],o.prototype,"dt_body",void 0),l([(0,r.C)(),c("design:type",Object)],o.prototype,"ajaxHeader",void 0),o=l([(0,s.M)("datatables-new"),c("design:paramtypes",[])],o)},3690:(e,t,n)=>{var i=n(9392),a=n(9662),r=n(5713),s=(n(5185),n(5142),function(e,t,n,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,n,s):a(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};c.styles=[i.iv`
      :host {
        display: block;
      }
    `],s([(0,a.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),s([(0,a.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),s([(0,a.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"selected",void 0),s([(0,a.C)({type:String}),l("design:type",String)],c.prototype,"value",void 0),s([(0,a.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"isSelected",void 0),c=s([(0,r.M)("switch-input")],c)},8281:(e,t,n)=>{var i=n(771),a=n(9392),r=n(9662),s=n(5713),l=function(e,t,n,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,n,s):a(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};o.styles=[a.iv`
   :host { display: block; }
  `],l([(0,r.C)({type:String}),c("design:type",String)],o.prototype,"url",void 0),l([(0,r.C)({type:String}),c("design:type",String)],o.prototype,"type",void 0),l([(0,r.C)({type:Boolean}),c("design:type",Boolean)],o.prototype,"rounded",void 0),l([(0,r.C)({type:String}),c("design:type",String)],o.prototype,"click-to-open",void 0),l([(0,r.C)({type:Number}),c("design:type",Number)],o.prototype,"size",void 0),o=l([(0,s.M)("user-profile-photo"),c("design:paramtypes",[])],o)},1906:(e,t,n)=>{var i=n(9392),a=n(2669),r=n(9662),s=n(5713),l=n(7725),c=n(7052),o=n(4672),d=(n(6811),n(2715),n(8763),n(1877),n(2169),n(2583)),u=n(2506),h=n(3600),m=n(5248),p=n(771),g=n(7270),v=n(596);n(3690);var y,f,b,_,w,A=n(1148),S=n(8698),I=n(7824),$=n(5458),B=n(2218),x=function(e,t,n,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,n,s):a(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((i=i.apply(e,t||[])).next())}))};let E=class extends i.oi{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/attendance/v2/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/attendance/v2/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,l.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,h.Ie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return i.dy`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this.allowFetch=!0,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?i.dy`
        ${this.nowSectionData}
      `:2===this.formId?i.dy`
        ${this.todaySectionData}
      `:3===this.formId?i.dy`
        ${this.upcomingSectionData}
      `:4===this.formId?i.dy`
        ${this.dateSectionData}
      `:i.dy`
        ${this.allMeetingsSectionData}
      `}get notFound(){const e=i.dy`<h4 class="text-white">Empty</h4>`,t=i.dy`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return i.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:i.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):i.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:i.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):i.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:i.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):i.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=i.dy`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return i.dy`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?i.dy`${e}${this.notFound}`:i.dy`
      ${e}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):i.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceAllSchedules(),null===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return i.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):i.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const n=e.split(":");return void 0!==n[0]&&t.setHours(Number(n[0])),void 0!==n[1]&&t.setMinutes(Number(n[1])),void 0!==n[2]&&t.setSeconds(Number(n[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,n=(0,c.h)(String(t),!0),a=this.getTime(String(e.startTime)),r=this.getTime(String(e.closeTime));return i.dy`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${n}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${a} - To: ${r} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,$.C)(this.getAttendanceScheduleDay(t),i.dy`<span>Loading...</span>`):(0,$.C)(this.getAttendanceScheduleDate(t),i.dy`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,o.Jx)("meeting-event-id"),t=null!==e?(0,c.t)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return k(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,u.H)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,d.z)(e)).page.id}))}}))}getAttendanceAllSchedules(){return k(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,B.u)(null,"?branchId="+e+"&length=1000000&order__by=-id&isRecuring="+String(this.recurring));console.log({_networkResponse:t}),null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleNow(){return k(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,n=void 0,a=function*(){const t=(0,h.Ie)(),n=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,i=yield(0,g.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new v.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new v.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,r){function s(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,l)}c((a=a.apply(t,n||[])).next())}));var t,n,i,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return k(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,n=void 0,a=function*(){const t=(0,h.Ie)(),n=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,i=yield(0,g.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new v.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new v.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,r){function s(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,l)}c((a=a.apply(t,n||[])).next())}));var t,n,i,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return k(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,n=void 0,a=function*(){const t=(0,h.Ie)(),n=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,i=yield(0,g.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new v.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new v.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,r){function s(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,l)}c((a=a.apply(t,n||[])).next())}));var t,n,i,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return k(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e,t=""){return n=this,i=void 0,r=function*(){const n=(0,h.Ie)(),i=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,a=yield(0,g.d)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new v.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new v.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function s(e){try{c(r.next(e))}catch(e){t(e)}}function l(e){try{c(r.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(s,l)}c((r=r.apply(n,i||[])).next())}));var n,i,a,r}(this.todayDate,"?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return k(this,void 0,void 0,(function*(){const t=yield(0,I.E)(null,"?meetingEventId="+e);if(console.log({_networkResponse:t}),null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),n=new Date(e.endDate).toLocaleDateString();return i.dy`<li class="border p-1">Every ${(0,$.C)(this.getDayOfWeek(t),i.dy`<i><small>Getting day of week</small>...</i>`)}, until ${n}</li>`}));return i.dy`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return k(this,void 0,void 0,(function*(){const t=yield(0,A.e)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return k(this,void 0,void 0,(function*(){const t=yield(0,S.R)(null,"?meetingEventId="+e+"&length=1000");if(console.log({_networkResponse:t}),null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return i.dy`<li class="border p-1">On ${t}</li>`}));return i.dy`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};E.styles=[i.iv`
   :host { display: block; }
  `],x([(0,a.I)("#getNowMeetingsBtn"),C("design:type","function"==typeof(y=void 0!==m.z&&m.z)?y:Object)],E.prototype,"getNowMeetingsBtn",void 0),x([(0,a.I)("#getAllMeetingsBtn"),C("design:type","function"==typeof(f=void 0!==m.z&&m.z)?f:Object)],E.prototype,"getAllMeetingsBtn",void 0),x([(0,a.I)("#getTodayMeetingsBtn"),C("design:type","function"==typeof(b=void 0!==m.z&&m.z)?b:Object)],E.prototype,"getTodayMeetingsBtn",void 0),x([(0,a.I)("#getUpcomingMeetingsBtn"),C("design:type","function"==typeof(_=void 0!==m.z&&m.z)?_:Object)],E.prototype,"getUpcomingMeetingsBtn",void 0),x([(0,a.I)("#getDateMeetingsBtn"),C("design:type","function"==typeof(w=void 0!==m.z&&m.z)?w:Object)],E.prototype,"getDateMeetingsBtn",void 0),x([(0,r.C)({type:String}),C("design:type",String)],E.prototype,"todayDate",void 0),x([(0,r.C)({type:Number}),C("design:type",Number)],E.prototype,"meetingEventId",void 0),x([(0,r.C)({type:Number}),C("design:type",Number)],E.prototype,"loggedUserId",void 0),x([(0,r.C)({type:Number}),C("design:type",Number)],E.prototype,"formId",void 0),x([(0,r.C)({type:Boolean}),C("design:type",Boolean)],E.prototype,"allowFetch",void 0),x([(0,r.C)({type:Boolean}),C("design:type",Boolean)],E.prototype,"recurring",void 0),x([(0,r.C)({type:String}),C("design:type",String)],E.prototype,"openContentBaseUrl",void 0),x([(0,r.C)({type:String}),C("design:type",String)],E.prototype,"openMeetingEventBaseUrl",void 0),x([(0,r.C)({type:Array}),C("design:type",Array)],E.prototype,"_pageAccesses",void 0),x([(0,r.C)({type:Array}),C("design:type",Array)],E.prototype,"_activeBranchId",void 0),x([(0,r.C)({type:Array}),C("design:type",Array)],E.prototype,"_userLoginInfo",void 0),E=x([(0,s.M)("pdb-attendance-clocking-meeting-picker"),C("design:paramtypes",[])],E)},3629:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>d});var i=n(9392),a=n(9662),r=n(5713),s=n(72),l=function(e,t,n,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,n,s):a(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((i=i.apply(e,t||[])).next())}))};let d=class extends i.oi{constructor(){super(),this.material="true",this.defaultValue=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?i.dy`
        ${this.materialSelectField}
      `:i.dy`
        ${this.selectField}
      `}get materialSelectField(){return null===this.defaultValue?i.dy`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>i.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `:i.dy`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>this.defaultValue===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `}get selectField(){let e=i.dy``;return e=null===this.defaultValue?i.dy`
      <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
				<option value="0">${this.label}</option>
        ${this._memberCategories.map((e=>i.dy`<option value="${e.id}">${e.category}</option>`))}
			</select>
    `:i.dy`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>this.defaultValue===e.id?i.dy`<option value="${e.id}" selected>${e.category}</option>`:i.dy`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `,i.dy`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return o(this,void 0,void 0,(function*(){const e=yield(0,s.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};d.styles=[i.iv`
   :host { display: block; }
  `],l([(0,a.C)({type:String}),c("design:type",String)],d.prototype,"material",void 0),l([(0,a.C)({type:Number}),c("design:type",Number)],d.prototype,"defaultValue",void 0),l([(0,a.C)({type:String}),c("design:type",String)],d.prototype,"label",void 0),l([(0,a.C)({type:String}),c("design:type",String)],d.prototype,"name",void 0),l([(0,a.C)({type:String}),c("design:type",String)],d.prototype,"id",void 0),l([(0,a.C)({type:String}),c("design:type",String)],d.prototype,"tag_class",void 0),l([(0,a.C)({type:String}),c("design:type",String)],d.prototype,"css_style",void 0),l([(0,a.C)({type:Array}),c("design:type",Array)],d.prototype,"_memberCategories",void 0),d=l([(0,r.M)("pdb-membership-select-member-type"),c("design:paramtypes",[])],d)},5458:(e,t,n)=>{n.d(t,{C:()=>v});var i=n(3692),a=n(875),r=n(4232);const s=(e,t)=>{var n,i;const a=e._$AN;if(void 0===a)return!1;for(const e of a)null===(i=(n=e)._$AO)||void 0===i||i.call(n,t,!1),s(e,t);return!0},l=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},c=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),u(t)}};function o(e){void 0!==this._$AN?(l(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,n=0){const i=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(i))for(let e=n;e<i.length;e++)s(i[e],!1),l(i[e]);else null!=i&&(s(i,!1),l(i));else s(this,e)}const u=e=>{var t,n,i,r;e.type==a.pX.CHILD&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=d),null!==(n=(r=e)._$AQ)&&void 0!==n||(r._$AQ=o))};class h extends a.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?null===(n=this.reconnected)||void 0===n||n.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(s(this,e),l(this))}setValue(e){if((0,r.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class m{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class p{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Y=this.q=void 0}}const g=e=>!(0,r.pt)(e)&&"function"==typeof e.then,v=(0,a.XM)(class extends h{constructor(){super(...arguments),this._$Cft=1073741823,this._$Cwt=[],this._$CG=new m(this),this._$CK=new p}render(...e){var t;return null!==(t=e.find((e=>!g(e))))&&void 0!==t?t:i.Jb}update(e,t){const n=this._$Cwt;let a=n.length;this._$Cwt=t;const r=this._$CG,s=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cft);e++){const i=t[e];if(!g(i))return this._$Cft=e,i;e<a&&i===n[e]||(this._$Cft=1073741823,a=0,Promise.resolve(i).then((async e=>{for(;s.get();)await s.get();const t=r.deref();if(void 0!==t){const n=t._$Cwt.indexOf(i);n>-1&&n<t._$Cft&&(t._$Cft=n,t.setValue(e))}})))}return i.Jb}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}})}}]);
//# sourceMappingURL=2036.js.map