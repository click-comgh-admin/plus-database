"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--433cd3"],{9579:(e,t,n)=>{n.r(t)},3750:(e,t,n)=>{n.r(t),n.d(t,{ACTIVE_PAGE__:()=>o});const o=()=>{const e=document.querySelectorAll("[mm-active]"),t=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];e.forEach((e=>{var n=e.getAttribute("mm-active").split("|");for(let o=0;o<n.length;o++){const i=n[o];t===i&&e.setAttribute("class","mm-active")}}))}},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>i});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},3600:(e,t,n)=>{n.r(t),n.d(t,{setUserLoginInfoCookie:()=>c,LogUserOut:()=>a,getUserLoginInfoCookie:()=>l});var o=n(1566),i=n(7052),r=n(1942);const s="pdb-client-user",c=e=>{const t=JSON.stringify(e);window.supersecret={unknowable:{ops:{email:e.user.email,id:e.user.id,cookieName:s}}},(0,r.set_cookies)(s,"",-1),(0,r.set_cookies)(s,(0,i.base64Encode)(t),3500)},a=()=>{(0,r.set_cookies)(s,"",-1)},l=()=>{if(""===(0,r.get_cookie)(s))return null;{const e=(0,i.base64Decode)((0,r.get_cookie)(s)),t=JSON.parse(e);return(0,o.userLoginInfo_S)(t)}}},4108:(e,t,n)=>{n.r(t),n.d(t,{verifyToken:()=>a,tokenLogin:()=>d});var o=n(8485),i=n(7270),r=n(7052),s=n(1942),c=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function c(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((o=o.apply(e,t||[])).next())}))};const a=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,s.get_cookie)(d),p=JSON.stringify({token:(0,r.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.get_cookie)(d+"_date"))))return u;yield(0,i.http)(a,{method:"POST",body:p},!0).then((o=>c(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,r.base64Encode)(String(o.jsonData.token));(0,s.set_cookies)(d,e,10),(0,s.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})),l=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",a=n,l=JSON.stringify({email:e,id:t});yield(0,i.http)(c,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,r.base64Encode)(String(e.jsonData.token));(0,s.set_cookies)(a,t,10),(0,s.set_cookies_minutes)(a+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const o=(0,r.base64Encode)(String(t)),i=n;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:i}}},""==(0,s.get_cookie)(i)?yield l(e,o,n):yield a(e,o,n)}))},1566:(e,t,n)=>{function o(e){const t=e.user;return{expiry:new Date(e.expiry),token:String(e.token),user:{id:Number(t.id),accountId:Number(t.accountId),branchId:Number(t.branchId),firstname:String(t.firstname),surname:String(t.surname),phone:String(t.phone),email:String(t.email),profilePicture:String(t.profilePicture)}}}n.r(t),n.d(t,{userLoginInfo_S:()=>o})},2218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>l});var o=n(8485),i=n(1942),r=n(7270),s=n(7052),c=n(4492),a=n(4108);function l(e=null,t="",n="client_tokenLogin"){return l=this,d=void 0,p=function*(){const l=String(window.supersecret.unknowable.ops.id),d=String(window.supersecret.unknowable.ops.email);yield(0,a.verifyToken)(d,l,n);const u=(0,s.base64Decode)((0,i.get_cookie)(n)),p=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,f=yield(0,r.http)(p,{method:"GET",headers:{Authorization:"Token "+u}},!0);try{return new c.NetWorkCallResponses("get",f)}catch(e){console.error({error:e});let t=f;return t.error=e,new c.NetWorkCallResponses("get",t,!0)}},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{i(p.next(e))}catch(e){t(e)}}function o(e){try{i(p.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof u?i:new u((function(e){e(i)}))).then(n,o)}i((p=p.apply(l,d||[])).next())}));var l,d,u,p}},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>c});var o=n(5862),i=n(9662),r=(n(9975),n(6788),function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.html`
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.html`
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected}createRenderRoot(){return this}};c.styles=[o.css`
      :host {
        display: block;
      }
    `],r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"name",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"label",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"selected",void 0),r([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"value",void 0),r([(0,i.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"isSelected",void 0),c=r([(0,i.customElement)("switch-input")],c)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--433cd3.js.map