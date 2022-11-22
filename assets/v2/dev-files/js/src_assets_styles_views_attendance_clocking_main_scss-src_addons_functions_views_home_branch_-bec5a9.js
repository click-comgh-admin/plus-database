"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_views_home_branch_-bec5a9"],{73794:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>n});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?o:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},17725:(e,t,r)=>{r.r(t),r.d(t,{setActiveBranchIdCookie:()=>c,removeActiveBranchIdCookie:()=>l,getActiveBranchIdCookie:()=>a});var o=r(67052),n=r(21942),i=r(61489);const s="pdb-active-branch",c=e=>{const t=JSON.stringify(e);(0,n.set_cookies)(s,"",-1),(0,n.set_cookies)(s,(0,o.base64Encode)(t),3500)};function l(){(0,n.set_cookies)(s,"",-1)}const a=()=>{if(""===(0,n.get_cookie)(s))return null;{const e=(0,o.base64Decode)((0,n.get_cookie)(s)),t=JSON.parse(e);return(0,i.clientBranchInfo_S)(t)}}},61489:(e,t,r)=>{function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function n(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}r.r(t),r.d(t,{ClientBranch_S:()=>o,clientBranchInfo_S:()=>n})},26224:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientBranches:()=>c});var o=r(48485),n=r(87270),i=r(14492),s=r(33600);function c(e=null){return t=this,r=void 0,l=function*(){const t=(0,s.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),c=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,o){function n(e){try{s(l.next(e))}catch(e){o(e)}}function i(e){try{s(l.throw(e))}catch(e){o(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(n,i)}s((l=l.apply(t,r||[])).next())}));var t,r,c,l}},10602:(e,t,r)=>{r.r(t),r.d(t,{DELETE_GroupingsGroup:()=>u});var o=r(86455),n=r.n(o),i=r(48485),s=r(87270),c=r(14492),l=r(8967),a=r(33600),p=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}l((o=o.apply(e,t||[])).next())}))};function u(e){return p(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group/"+e,o={};return n().fire({title:"Remove Group?",text:"You may have members assigned to this group. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,s.http)(r,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const o=new c.NetWorkCallResponses("delete",r,!0);return o.postForm,o}})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}n().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},92715:(e,t,r)=>{r.r(t),r.d(t,{LinkButton:()=>c});var o=r(85862),n=r(59662),i=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?o.html`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:o.html`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};i([(0,n.property)({type:String}),s("design:type",String)],c.prototype,"aClass",void 0),i([(0,n.property)({type:String}),s("design:type",String)],c.prototype,"bClass",void 0),i([(0,n.property)({type:String}),s("design:type",String)],c.prototype,"icon",void 0),i([(0,n.property)({type:String}),s("design:type",String)],c.prototype,"href",void 0),i([(0,n.property)({type:String}),s("design:type",String)],c.prototype,"label",void 0),i([(0,n.property)({type:String}),s("design:type",String)],c.prototype,"isBlockContent",void 0),i([(0,n.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"raised",void 0),c=i([(0,n.customElement)("link-button")],c)},38281:(e,t,r)=>{r.r(t),r.d(t,{UserProfilePhoto:()=>l});var o=r(48485),n=r(85862),i=r(59662),s=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return n.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};l.styles=[n.css`
   :host { display: block; }
  `],s([(0,i.property)({type:String}),c("design:type",String)],l.prototype,"url",void 0),s([(0,i.property)({type:String}),c("design:type",String)],l.prototype,"type",void 0),s([(0,i.property)({type:Boolean}),c("design:type",Boolean)],l.prototype,"rounded",void 0),s([(0,i.property)({type:String}),c("design:type",String)],l.prototype,"click-to-open",void 0),s([(0,i.property)({type:Number}),c("design:type",Number)],l.prototype,"size",void 0),l=s([(0,i.customElement)("user-profile-photo"),c("design:paramtypes",[])],l)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_views_home_branch_-bec5a9.js.map