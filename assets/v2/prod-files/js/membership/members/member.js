/*! For license information please see member.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9182],{7725:(e,t,r)=>{r.d(t,{eF:()=>s,U8:()=>l,hk:()=>c});var n=r(7052),o=r(1942),i=r(1489);const a="pdb-active-branch",s=e=>{const t=JSON.stringify(e);(0,o.Ad)(a,"",-1),(0,o.Ad)(a,(0,n.h)(t),3500)};function l(){(0,o.Ad)(a,"",-1)}const c=()=>{if(""===(0,o.Hl)(a))return null;{const e=(0,n.t)((0,o.Hl)(a)),t=JSON.parse(e);return(0,i.N)(t)}}},1489:(e,t,r)=>{function n(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}r.d(t,{j:()=>n,N:()=>o})},6656:(e,t,r)=>{r.d(t,{E:()=>s});var n=r(771),o=r(7270),i=r(596),a=r(3600);function s(e=null,t=""){return r=this,s=void 0,c=function*(){const r=(0,a.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(s,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new i.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{i(c.next(e))}catch(e){t(e)}}function o(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof l?r:new l((function(e){e(r)}))).then(n,o)}i((c=c.apply(r,s||[])).next())}));var r,s,l,c}},2715:(e,t,r)=>{var n=r(9392),o=r(9662),i=r(5713),a=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?n.dy`
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
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};a([(0,o.C)({type:String}),s("design:type",String)],l.prototype,"aClass",void 0),a([(0,o.C)({type:String}),s("design:type",String)],l.prototype,"bClass",void 0),a([(0,o.C)({type:String}),s("design:type",String)],l.prototype,"icon",void 0),a([(0,o.C)({type:String}),s("design:type",String)],l.prototype,"href",void 0),a([(0,o.C)({type:String}),s("design:type",String)],l.prototype,"label",void 0),a([(0,o.C)({type:String}),s("design:type",String)],l.prototype,"isBlockContent",void 0),a([(0,o.C)({type:Boolean}),s("design:type",Boolean)],l.prototype,"raised",void 0),l=a([(0,i.M)("link-button")],l)},6883:(e,t,r)=>{var n,o=r(9392),i=r(9662),a=r(5713),s=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return o.dy`
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
  `}thead(){return o.dy`
      ${this.dt_head.map((e=>o.dy`<th>${e.title}</th>`))}
    `}tbody(){return o.dy`
      ${this.dt_body.map((e=>o.dy`<tr>${e.map((e=>o.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return o.dy`
    ${this.dt_foot.map((e=>o.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const r=this.ajaxHeader[e];t[e]=r}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[o.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID1",void 0),s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID2",void 0),s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"ID",void 0),s([(0,i.C)({type:Object}),l("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],c.prototype,"datatable",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_head",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_foot",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_body",void 0),s([(0,i.C)(),l("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=s([(0,a.M)("datatables-new"),l("design:paramtypes",[])],c)},8281:(e,t,r)=>{var n=r(771),o=r(9392),i=r(9662),a=r(5713),s=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return o.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[o.iv`
   :host { display: block; }
  `],s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"url",void 0),s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"type",void 0),s([(0,i.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=s([(0,a.M)("user-profile-photo"),l("design:paramtypes",[])],c)},9260:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipMember:()=>p});var n=r(9392),o=r(9662),i=r(5713),a=(r(5248),r(6883),r(6811),r(2715),r(7725)),s=r(6656),l=(r(8281),r(7052)),c=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};let p=class extends n.oi{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._activeBranchId=null,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._members?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._members?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:n.dy`
      ${this.table}
    `}get table(){return n.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>#</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Member(s)</b>
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
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){const e=this._members.results;return Array.isArray(e)?e.map((e=>{const t=(0,l.h)(String(e.id),!0);return n.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"
                  url="${e.profilePicture}" size="16"></user-profile-photo>
                <p class="ml-1">${e.firstname} ${e.middlename} ${e.surname}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.memberProfileBaseUrl}${t}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `})):n.dy``}firstUpdated(){}getMembers(){return u(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,s.E)(null,"?branchId="+e+"&length=5&memberType=1&order__by=-id");this._members=null===t?void 0:t.paginResponse}))}createRenderRoot(){return this}};p.styles=[n.iv`
   :host { display: block; }
  `],c([(0,o.C)({type:String}),d("design:type",String)],p.prototype,"memberProfileBaseUrl",void 0),c([(0,o.C)({type:Array}),d("design:type",Array)],p.prototype,"_activeBranchId",void 0),p=c([(0,i.M)("pdb-membership-member"),d("design:paramtypes",[])],p)},655:(e,t,r)=>{r.d(t,{ZT:()=>o,pi:()=>i,gn:()=>a,mG:()=>s,Jh:()=>l,XA:()=>c,CR:()=>d,ev:()=>u});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function s(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function u(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create},5674:(e,t,r)=>{r.d(t,{eZ:()=>n});const n=({finisher:e,descriptor:t})=>(r,n)=>{var o;if(void 0===n){const n=null!==(o=r.originalKey)&&void 0!==o?o:r.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:{...r,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const o=r.constructor;void 0!==t&&Object.defineProperty(r,n,t(n)),null==e||e(o,n)}}},8829:(e,t,r)=>{r.d(t,{h:()=>o});var n=r(5674);function o(e){return(0,n.eZ)({finisher:(t,r)=>{Object.assign(t.prototype[r],e)}})}},8602:(e,t,r)=>{r.d(t,{G:()=>o});var n=r(5674);function o(e){return(0,n.eZ)({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}},2669:(e,t,r)=>{r.d(t,{I:()=>o});var n=r(5674);function o(e,t){return(0,n.eZ)({descriptor:r=>{const n={get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;n.get=function(){var r,n;return void 0===this[t]&&(this[t]=null!==(n=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}},9158:(e,t,r)=>{r.d(t,{S:()=>o});var n=r(9662);function o(e){return(0,n.C)({...e,state:!0})}},875:(e,t,r)=>{r.d(t,{Xe:()=>i,pX:()=>n,XM:()=>o});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...t)=>({_$litDirective$:e,values:t});class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},9455:(e,t,r)=>{r.d(t,{$:()=>i});var n=r(3692),o=r(875);const i=(0,o.XM)(class extends o.Xe{constructor(e){var t;if(super(e),e.type!==o.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,o;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.et=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(r=this.et)||void 0===r?void 0:r.has(e))&&this.st.add(e);return this.render(t)}const i=e.element.classList;this.st.forEach((e=>{e in t||(i.remove(e),this.st.delete(e))}));for(const e in t){const r=!!t[e];r===this.st.has(e)||(null===(o=this.et)||void 0===o?void 0:o.has(e))||(r?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return n.Jb}})},796:(e,t,r)=>{r.d(t,{o:()=>o});var n=r(3692);const o=e=>null!=e?e:n.Ld},3959:(e,t,r)=>{r.d(t,{V:()=>i});var n=r(3692),o=r(875);const i=(0,o.XM)(class extends o.Xe{constructor(e){var t;if(super(e),e.type!==o.pX.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const n=e[r];return null==n?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?r.removeProperty(e):r[e]="")}));for(const e in t){const n=t[e];null!=n&&(this.ut.add(e),e.includes("-")?r.setProperty(e,n):r[e]=n)}return n.Jb}})}},e=>(e.O(0,[2185,5744,2459,5291,6553,6236,3712],(()=>(9260,e(e.s=9260)))),e.O())])}));
//# sourceMappingURL=member.js.map