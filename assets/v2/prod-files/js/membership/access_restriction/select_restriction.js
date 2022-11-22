/*! For license information please see select_restriction.js.LICENSE.txt */
"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.webpackNumbers=e():t.webpackNumbers=e()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3825],{7725:(t,e,r)=>{r.d(e,{eF:()=>s,U8:()=>c,hk:()=>l});var n=r(7052),i=r(1942),a=r(1489);const o="pdb-active-branch",s=t=>{const e=JSON.stringify(t);(0,i.Ad)(o,"",-1),(0,i.Ad)(o,(0,n.h)(e),3500)};function c(){(0,i.Ad)(o,"",-1)}const l=()=>{if(""===(0,i.Hl)(o))return null;{const t=(0,n.t)((0,i.Hl)(o)),e=JSON.parse(t);return(0,a.N)(e)}}},1489:(t,e,r)=>{function n(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId),createdBy:Number(t.createdBy),creationDate:new Date(t.creationDate),updatedBy:Number(t.updatedBy),updateDate:new Date(t.updateDate)}}function i(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId)}}r.d(e,{j:()=>n,N:()=>i})},6490:(t,e,r)=>{r.d(e,{G:()=>s});var n=r(771),i=r(7270),a=r(596),o=r(3600);function s(t=null,e=""){return r=this,s=void 0,l=function*(){const r=(0,o.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"members/access/restriction"+(null===t?"":"/"+t)+e,c=yield(0,i.d)(s,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new a.H("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new a.H("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function n(t){try{a(l.next(t))}catch(t){e(t)}}function i(t){try{a(l.throw(t))}catch(t){e(t)}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof c?r:new c((function(t){t(r)}))).then(n,i)}a((l=l.apply(r,s||[])).next())}));var r,s,c,l}},2715:(t,e,r)=>{var n=r(9392),i=r(9662),a=r(5713),o=function(t,e,r,n){var i,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,r,o):i(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends n.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?n.dy`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:n.dy`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};o([(0,i.C)({type:String}),s("design:type",String)],c.prototype,"aClass",void 0),o([(0,i.C)({type:String}),s("design:type",String)],c.prototype,"bClass",void 0),o([(0,i.C)({type:String}),s("design:type",String)],c.prototype,"icon",void 0),o([(0,i.C)({type:String}),s("design:type",String)],c.prototype,"href",void 0),o([(0,i.C)({type:String}),s("design:type",String)],c.prototype,"label",void 0),o([(0,i.C)({type:String}),s("design:type",String)],c.prototype,"isBlockContent",void 0),o([(0,i.C)({type:Boolean}),s("design:type",Boolean)],c.prototype,"raised",void 0),c=o([(0,a.M)("link-button")],c)},6883:(t,e,r)=>{var n,i=r(9392),a=r(9662),o=r(5713),s=function(t,e,r,n){var i,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,r,o):i(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return i.dy`
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
  `}thead(){return i.dy`
      ${this.dt_head.map((t=>i.dy`<th>${t.title}</th>`))}
    `}tbody(){return i.dy`
      ${this.dt_body.map((t=>i.dy`<tr>${t.map((t=>i.dy`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return i.dy`
    ${this.dt_foot.map((t=>i.dy`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const r=this.ajaxHeader[t];e[t]=r}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[i.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,a.C)({type:Number}),c("design:type",Number)],l.prototype,"randomID1",void 0),s([(0,a.C)({type:Number}),c("design:type",Number)],l.prototype,"randomID2",void 0),s([(0,a.C)({type:String}),c("design:type",String)],l.prototype,"ID",void 0),s([(0,a.C)({type:Object}),c("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],l.prototype,"datatable",void 0),s([(0,a.C)({type:Array}),c("design:type",Array)],l.prototype,"dt_head",void 0),s([(0,a.C)({type:Array}),c("design:type",Array)],l.prototype,"dt_foot",void 0),s([(0,a.C)({type:Array}),c("design:type",Array)],l.prototype,"dt_body",void 0),s([(0,a.C)(),c("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=s([(0,o.M)("datatables-new"),c("design:paramtypes",[])],l)},8885:(t,e,r)=>{r.r(e),r.d(e,{MembershipAccessRestrictionSelectRestriction:()=>p});var n=r(9392),i=r(9662),a=r(5713),o=(r(5248),r(6883),r(6811),r(2715),r(7725)),s=r(7052),c=r(6490),l=function(t,e,r,n){var i,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,r,o):i(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o},d=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(t,e,r,n){return new(r||(r=Promise))((function(i,a){function o(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))};let p=class extends n.oi{constructor(){super(),this.restrictionUsersBaseUrl="/member/access-restriction/user-restriction?view-restriction=",this.restrictionUpdateBaseUrl="/member/access-restriction/update-user-restriction?view-restriction=",this._activeBranchId=null,this.__restrictions=null}set _restrictions(t){this.__restrictions=t,this.requestUpdate()}get _restrictions(){return this.__restrictions}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){t.connectedCallback.call(this);const e=(0,o.hk)();this._activeBranchId=null===e?null:[e],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._restrictions?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._restrictions?n.dy`
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
    `}get tableBody(){const t=this._restrictions.data;return Array.isArray(t)?t.map((t=>{const e=(0,s.h)(String(t.id),!0);return n.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <p class="ml-1">${t.restriction}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.restrictionUpdateBaseUrl}${e}" label="Update"></link-button>
              </div>
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="success" raised bClass="button success mr-2"
                  href="${this.restrictionUsersBaseUrl}${e}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `})):n.dy``}firstUpdated(){}getMembers(){return u(this,void 0,void 0,(function*(){const t=yield(0,c.G)(null);this._restrictions=null===t?void 0:t.response}))}createRenderRoot(){return this}};p.styles=[n.iv`
   :host { display: block; }
  `],l([(0,i.C)({type:String}),d("design:type",String)],p.prototype,"restrictionUsersBaseUrl",void 0),l([(0,i.C)({type:String}),d("design:type",String)],p.prototype,"restrictionUpdateBaseUrl",void 0),l([(0,i.C)({type:Array}),d("design:type",Array)],p.prototype,"_activeBranchId",void 0),p=l([(0,a.M)("membership-access_restriction-select_restriction"),d("design:paramtypes",[])],p)},655:(t,e,r)=>{r.d(e,{ZT:()=>i,pi:()=>a,gn:()=>o,mG:()=>s,Jh:()=>c,XA:()=>l,CR:()=>d,ev:()=>u});var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)};function o(t,e,r,n){var i,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,r,o):i(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o}function s(t,e,r,n){return new(r||(r=Promise))((function(i,a){function o(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))}function c(t,e){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function l(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,a=r.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o}function u(t,e,r){if(r||2===arguments.length)for(var n,i=0,a=e.length;i<a;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))}Object.create,Object.create},5674:(t,e,r)=>{r.d(e,{eZ:()=>n});const n=({finisher:t,descriptor:e})=>(r,n)=>{var i;if(void 0===n){const n=null!==(i=r.originalKey)&&void 0!==i?i:r.key,a=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(r.key)}:{...r,key:n};return null!=t&&(a.finisher=function(e){t(e,n)}),a}{const i=r.constructor;void 0!==e&&Object.defineProperty(r,n,e(n)),null==t||t(i,n)}}},8829:(t,e,r)=>{r.d(e,{h:()=>i});var n=r(5674);function i(t){return(0,n.eZ)({finisher:(e,r)=>{Object.assign(e.prototype[r],t)}})}},8602:(t,e,r)=>{r.d(e,{G:()=>i});var n=r(5674);function i(t){return(0,n.eZ)({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}},2669:(t,e,r)=>{r.d(e,{I:()=>i});var n=r(5674);function i(t,e){return(0,n.eZ)({descriptor:r=>{const n={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;n.get=function(){var r,n;return void 0===this[e]&&(this[e]=null!==(n=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}},9158:(t,e,r)=>{r.d(e,{S:()=>i});var n=r(9662);function i(t){return(0,n.C)({...t,state:!0})}},875:(t,e,r)=>{r.d(e,{Xe:()=>a,pX:()=>n,XM:()=>i});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},9455:(t,e,r)=>{r.d(e,{$:()=>a});var n=r(3692),i=r(875);const a=(0,i.XM)(class extends i.Xe{constructor(t){var e;if(super(t),t.type!==i.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.et)||void 0===r?void 0:r.has(t))&&this.st.add(t);return this.render(e)}const a=t.element.classList;this.st.forEach((t=>{t in e||(a.remove(t),this.st.delete(t))}));for(const t in e){const r=!!e[t];r===this.st.has(t)||(null===(i=this.et)||void 0===i?void 0:i.has(t))||(r?(a.add(t),this.st.add(t)):(a.remove(t),this.st.delete(t)))}return n.Jb}})},796:(t,e,r)=>{r.d(e,{o:()=>i});var n=r(3692);const i=t=>null!=t?t:n.Ld},3959:(t,e,r)=>{r.d(e,{V:()=>a});var n=r(3692),i=r(875);const a=(0,i.XM)(class extends i.Xe{constructor(t){var e;if(super(t),t.type!==i.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const n=t[r];return null==n?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?r.removeProperty(t):r[t]="")}));for(const t in e){const n=e[t];null!=n&&(this.ut.add(t),t.includes("-")?r.setProperty(t,n):r[t]=n)}return n.Jb}})}},t=>(t.O(0,[2185,5744,2459,5291,6553,6236,3712],(()=>(8885,t(t.s=8885)))),t.O())])}));
//# sourceMappingURL=select_restriction.js.map