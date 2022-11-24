/*! For license information please see btn.js.LICENSE.txt */
"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.webpackNumbers=e():t.webpackNumbers=e()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[412],{771:(t,e,n)=>{let r;n.d(e,{t:()=>y}),r=!!window.location.href.includes(void 0);const o={production:!0,isClientApp:r};let i,c,s,a,l,u,d,f,p,h;if(o.production){const t="akwaabasoftware.com/";c="https://db-api.akwaabasoftware.com/",s="https://db-api-v2."+t,p="akwaabaclients."+t,i="https://"+p,d="https://akwaabaapp."+t,a="https://file-bucket.akwaabasoftware.com/",l=i+"",f=d+"",h="https://database.akwaabasoftware.com/",u=h+"login"}else{p="akwaaba-forms/";const t="192.168.173.1";i="http://127.0.0.1:9001/",c="http://"+t+"/AMG/plus_db/api/",s=i+"api/",h="http://"+t+":82/",a="http://"+t+"/AMG/plus_db/file_bucket/",l=i+p,f=i+"akwaaba-forms-public/",u=h+"login"}const y={URLS:{BASE_URL:i,API_BASE_URL:c,PDB_CLIENT:h,AKWAABA_API_BASE_URL:s,FILE_BUCKET_BASE_URL:a,HOME_PAGE_BASE_URL:l,PUBLIC_PAGE_BASE_URL:f,LOGIN_PAGE_BASE_URL:u,PUBLIC_LOGIN_PAGE_BASE_URL:void 0,FORGOT_PASSWORD_URL:"https://password-reset.akwaabasoftware.com/client-user/forgot-password",PUBLIC_BASE_URL:"https://akwaabasoftware.com/",CLICK_COM_BASE_URL:"https://clickcomgh.com/"},APP_SETTINGS:o,SERVICE_WORKER_TYPES:{postAction:"POST_ACTION",networkStatus:"NETWORK_STATUS"}};window.CONSTANTS=y},7052:(t,e,n)=>{n.d(e,{h:()=>o,t:()=>i});var r=n(8764);const o=(t,e=!1)=>{const n=r.lW.from(t).toString("base64");return e?n.replaceAll("=",""):n},i=t=>r.lW.from(t,"base64").toString()},1942:(t,e,n)=>{function r(t,e,n=1,r="/"){let o=new Date;o.setHours(o.getHours()+3*n);let c="expires="+o.toUTCString();i(t)!=e&&(document.cookie=t+"="+e+"; "+c+"; path="+r)}function o(t,e,n=1,r="/"){let o=new Date;o.setMinutes(o.getMinutes()+n);let c="expires="+o.toUTCString();i(t)!=e&&(document.cookie=t+"="+e+"; "+c+"; path="+r)}function i(t){t+="=";let e=decodeURIComponent(document.cookie).split(";");for(let n=0;n<e.length;n++){let r=e[n];for(;" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}n.d(e,{Ad:()=>r,vh:()=>o,Hl:()=>i})},7270:(t,e,n)=>{n.d(e,{d:()=>i});var r=n(7153),o=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}a((r=r.apply(t,e||[])).next())}))};function i(t,e,n=!0,i=!1){return o(this,void 0,void 0,(function*(){let c=null;e=null==e?{method:"GET"}:e;var s=new Headers;if(s.append("Access-Control-Allow-Origin","*/*"),s.append("Accept","application/json, text/plain, */*"),n&&s.append("Content-Type","application/json"),void 0===e.headers)e.headers=s;else for(const t of s.keys())e.headers[t]=s.get(t);return e.mode="cors",e.redirect="follow",yield(0,r.Z)(t,e,3e5).then((t=>(c=t,t.status>=200&&t.status,Promise.resolve(t)))).then((t=>o(this,void 0,void 0,(function*(){const e=204===t.status?{}:yield t.json();return i?{jsonData:{success:!0,message:"",data:e},response:t,error:""}:{jsonData:e,response:t,error:""}})))).then((t=>o(this,void 0,void 0,(function*(){return t})))).catch((function(t){throw console.error("Request failed",t),t}))}))}},1981:(t,e,n)=>{n.d(e,{R:()=>r});const r=(t,e)=>!0===navigator.onLine?t("online"):e("offline")},7153:(t,e,n)=>{n.d(e,{Z:()=>r});function r(t,e,n=7e3){return r=this,o=void 0,c=function*(){return Promise.race([fetch(t,e),new Promise(((t,e)=>{setTimeout((()=>e(new Error("Connection timeout, check network for internet access"))),n)}))])},new((i=void 0)||(i=Promise))((function(t,e){function n(t){try{a(c.next(t))}catch(t){e(t)}}function s(t){try{a(c.throw(t))}catch(t){e(t)}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof i?r:new i((function(t){t(r)}))).then(n,s)}a((c=c.apply(r,o||[])).next())}));var r,o,i,c}},3600:(t,e,n)=>{n.d(e,{bK:()=>s,y4:()=>a,Ie:()=>l});var r=n(1566),o=n(7052),i=n(1942);const c="pdb-client-user",s=t=>{const e=JSON.stringify(t);window.supersecret={unknowable:{ops:{email:t.user.email,id:t.user.id,cookieName:c}}},(0,i.Ad)(c,"",-1),(0,i.Ad)(c,(0,o.h)(e),3500)},a=()=>{(0,i.Ad)(c,"",-1)},l=()=>{if(""===(0,i.Hl)(c))return null;{const t=(0,o.t)((0,i.Hl)(c)),e=JSON.parse(t);return(0,r.Y)(e)}}},7725:(t,e,n)=>{n.d(e,{eF:()=>s,U8:()=>a,hk:()=>l});var r=n(7052),o=n(1942),i=n(1489);const c="pdb-active-branch",s=t=>{const e=JSON.stringify(t);(0,o.Ad)(c,"",-1),(0,o.Ad)(c,(0,r.h)(e),3500)};function a(){(0,o.Ad)(c,"",-1)}const l=()=>{if(""===(0,o.Hl)(c))return null;{const t=(0,r.t)((0,o.Hl)(c)),e=JSON.parse(t);return(0,i.N)(e)}}},1489:(t,e,n)=>{function r(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId),createdBy:Number(t.createdBy),creationDate:new Date(t.creationDate),updatedBy:Number(t.updatedBy),updateDate:new Date(t.updateDate)}}function o(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId)}}n.d(e,{j:()=>r,N:()=>o})},1566:(t,e,n)=>{function r(t){const e=t.user;return{expiry:new Date(t.expiry),token:String(t.token),user:{id:Number(e.id),accountId:Number(e.accountId),branchId:Number(e.branchId),firstname:String(e.firstname),surname:String(e.surname),phone:String(e.phone),email:String(e.email),profilePicture:String(e.profilePicture)}}}n.d(e,{Y:()=>r})},2715:(t,e,n)=>{var r=n(9392),o=n(9662),i=n(5713),c=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends r.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?r.dy`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:r.dy`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};c([(0,o.C)({type:String}),s("design:type",String)],a.prototype,"aClass",void 0),c([(0,o.C)({type:String}),s("design:type",String)],a.prototype,"bClass",void 0),c([(0,o.C)({type:String}),s("design:type",String)],a.prototype,"icon",void 0),c([(0,o.C)({type:String}),s("design:type",String)],a.prototype,"href",void 0),c([(0,o.C)({type:String}),s("design:type",String)],a.prototype,"label",void 0),c([(0,o.C)({type:String}),s("design:type",String)],a.prototype,"isBlockContent",void 0),c([(0,o.C)({type:Boolean}),s("design:type",Boolean)],a.prototype,"raised",void 0),a=c([(0,i.M)("link-button")],a)},9774:(t,e,n)=>{n.r(e),n.d(e,{PdbBranchButton:()=>h});var r=n(9392),o=n(9662),i=n(5713),c=(n(5248),n(2715),n(7725)),s=n(771),a=n(7270),l=n(1981),u=n(3600),d=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}a((r=r.apply(t,e||[])).next())}))},f=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},p=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let h=class extends r.oi{constructor(){super(),this.URL="/account/settings/branch"}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return e=this,n=void 0,o=function*(){t.connectedCallback.call(this);const e=(0,c.hk)();null===e?this.redirect():(0===e.id&&this.redirect(),yield function(){return d(this,void 0,void 0,(function*(){const t=(0,u.Ie)(),e=s.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",n={token:t.token};(0,l.R)((t=>d(this,void 0,void 0,(function*(){return yield(0,a.d)(e,{method:"POST",body:JSON.stringify(n)},!0).then((t=>{const e=t.jsonData;"expiry"in e&&"token"in e&&"user"in e||((0,u.y4)(),window.location.href="/login")}))}))),(t=>{}))}))}())},new((r=void 0)||(r=Promise))((function(t,i){function c(t){try{a(o.next(t))}catch(t){i(t)}}function s(t){try{a(o.throw(t))}catch(t){i(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}));var e,n,r,o}redirect(){window.location.href.includes(this.URL)||(window.location.href=this.URL)}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="true" aClass="" raised bClass="button info w-full" href="${this.URL}" icon="call_split"
        label="Change Branch"></link-button>
    `}firstUpdated(){}createRenderRoot(){return this}};h.styles=[r.iv`
   :host { display: block; }
  `],f([(0,o.C)({type:String}),p("design:type",Object)],h.prototype,"URL",void 0),h=f([(0,i.M)("pdb-branch-button"),p("design:paramtypes",[])],h)},655:(t,e,n)=>{n.d(e,{ZT:()=>o,pi:()=>i,gn:()=>c,mG:()=>s,Jh:()=>a,XA:()=>l,CR:()=>u,ev:()=>d});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function c(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c}function s(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}a((r=r.apply(t,e||[])).next())}))}function a(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function l(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c}function d(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}Object.create,Object.create},5674:(t,e,n)=>{n.d(e,{eZ:()=>r});const r=({finisher:t,descriptor:e})=>(n,r)=>{var o;if(void 0===r){const r=null!==(o=n.originalKey)&&void 0!==o?o:n.key,i=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return null!=t&&(i.finisher=function(e){t(e,r)}),i}{const o=n.constructor;void 0!==e&&Object.defineProperty(n,r,e(r)),null==t||t(o,r)}}},8829:(t,e,n)=>{n.d(e,{h:()=>o});var r=n(5674);function o(t){return(0,r.eZ)({finisher:(e,n)=>{Object.assign(e.prototype[n],t)}})}},8602:(t,e,n)=>{n.d(e,{G:()=>o});var r=n(5674);function o(t){return(0,r.eZ)({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}},2669:(t,e,n)=>{n.d(e,{I:()=>o});var r=n(5674);function o(t,e){return(0,r.eZ)({descriptor:n=>{const r={get(){var e,n;return null!==(n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof n?Symbol():"__"+n;r.get=function(){var n,r;return void 0===this[e]&&(this[e]=null!==(r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}},9158:(t,e,n)=>{n.d(e,{S:()=>o});var r=n(9662);function o(t){return(0,r.C)({...t,state:!0})}},875:(t,e,n)=>{n.d(e,{Xe:()=>i,pX:()=>r,XM:()=>o});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},9455:(t,e,n)=>{n.d(e,{$:()=>i});var r=n(3692),o=n(875);const i=(0,o.XM)(class extends o.Xe{constructor(t){var e;if(super(t),t.type!==o.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var n,o;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(n=this.et)||void 0===n?void 0:n.has(t))&&this.st.add(t);return this.render(e)}const i=t.element.classList;this.st.forEach((t=>{t in e||(i.remove(t),this.st.delete(t))}));for(const t in e){const n=!!e[t];n===this.st.has(t)||(null===(o=this.et)||void 0===o?void 0:o.has(t))||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return r.Jb}})},796:(t,e,n)=>{n.d(e,{o:()=>o});var r=n(3692);const o=t=>null!=t?t:r.Ld},3959:(t,e,n)=>{n.d(e,{V:()=>i});var r=n(3692),o=n(875);const i=(0,o.XM)(class extends o.Xe{constructor(t){var e;if(super(t),t.type!==o.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const r=t[n];return null==r?e:e+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?n.removeProperty(t):n[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.ut.add(t),t.includes("-")?n.setProperty(t,r):n[t]=r)}return r.Jb}})}},t=>(t.O(0,[2185,5744,2459,6236,3712],(()=>(9774,t(t.s=9774)))),t.O())])}));
//# sourceMappingURL=btn.js.map