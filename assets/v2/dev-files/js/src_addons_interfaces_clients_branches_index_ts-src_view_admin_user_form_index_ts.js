"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_clients_branches_index_ts-src_view_admin_user_form_index_ts"],{43753:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>s,https_swal_error_format:()=>n});const s="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?s:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},6651:(e,t,r)=>{r.r(t),r.d(t,{togglePswdVisibility:()=>i}),r(16413);let s=[];const n="Show Password",i=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const r=e.parentElement;r.setAttribute("style",r.getAttribute("style")+"; flex-direction: column !important;");const i=document.createElement("label");i.setAttribute("style",i.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const a=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),a.innerText=n;const c=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const l=document.createElement("input");l.type="checkbox",l.id="pswd-visibility-btn--"+t,l.setAttribute("style",l.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),i.appendChild(c),i.appendChild(l),i.appendChild(a),e.after(i);const d={id:l.id,showing:!1,elem:e,span:a};s.includes(d)||s.push(d),l.addEventListener("change",o)}))},o=e=>{e.preventDefault();const t=e.currentTarget;t.checked,s.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=n,e.showing=!1))}))}},61489:(e,t,r)=>{function s(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function n(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}r.r(t),r.d(t,{ClientBranch_S:()=>s,clientBranchInfo_S:()=>n})},72869:(e,t,r)=>{function s(e){return{id:Number(e.id),name:e.name}}r.r(t),r.d(t,{GenericGenderInfo_S:()=>s})},26224:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientBranches:()=>a});var s=r(48485),n=r(87270),i=r(14492),o=r(33600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,o.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,s){function n(e){try{o(c.next(e))}catch(e){s(e)}}function i(e){try{o(c.throw(e))}catch(e){s(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,i)}o((c=c.apply(t,r||[])).next())}));var t,r,a,c}},29456:(e,t,r)=>{r.r(t),r.d(t,{PUT_ClientUserAccess:()=>m});var s=r(86455),n=r.n(s),i=r(48485),o=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,s){return new(r||(r=Promise))((function(n,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access/setup/"+e,s=document.querySelector('[make-general-posts="client-user"]'),m=new FormData(s);return n().fire({title:"Setup user page access?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(r,{method:"PUT",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,s),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let s={error:t.id+": "+r};"non_field_errors"===t.id&&(s={error:r}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},54728:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientPageAccess:()=>a});var s=r(48485),n=r(87270),i=r(14492),o=r(33600);function a(e=null,t=""){return r=this,a=void 0,l=function*(){const r=(0,o.getUserLoginInfoCookie)(),a=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access/pages"+(null===e?"":"/"+e)+t,c=yield(0,n.http)(a,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{i(l.next(e))}catch(e){t(e)}}function n(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(s,n)}i((l=l.apply(r,a||[])).next())}));var r,a,c,l}},95524:(e,t,r)=>{r.r(t),r.d(t,{POST_ClientUser:()=>m});var s=r(86455),n=r.n(s),i=r(48485),o=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,s){return new(r||(r=Promise))((function(n,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};function m(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user",r=document.querySelector('[make-general-posts="client-user"]'),s=new FormData(r);return n().fire({title:"Add Admin User?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,r),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((r=>{let s={error:t.id+": "+r};"non_field_errors"===t.id&&(s={error:r}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},61090:(e,t,r)=>{r.r(t),r.d(t,{PUT_ClientUser:()=>m});var s=r(86455),n=r.n(s),i=r(48485),o=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,s){return new(r||(r=Promise))((function(n,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,s=document.querySelector('[make-general-posts="client-user"]'),m=new FormData(s);return n().fire({title:"Update user profile?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(r,{method:"PUT",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,s),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let s={error:t.id+": "+r};"non_field_errors"===t.id&&(s={error:r}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},87059:(e,t,r)=>{r.r(t),r.d(t,{PUT_ClientUserPassword:()=>m});var s=r(86455),n=r.n(s),i=r(48485),o=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,s){return new(r||(r=Promise))((function(n,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user/change-password/"+e,s=document.querySelector('[make-general-posts="client-user"]'),m=new FormData(s);return n().fire({title:"Update user password?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(r,{method:"PATCH",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,s),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let s={error:t.id+": "+r};"non_field_errors"===t.id&&(s={error:r}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},87553:(e,t,r)=>{r.r(t),r.d(t,{GET_GenericGender:()=>a});var s=r(48485),n=r(87270),i=r(14492),o=r(33600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,o.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),a=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,s){function n(e){try{o(c.next(e))}catch(e){s(e)}}function i(e){try{o(c.throw(e))}catch(e){s(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,i)}o((c=c.apply(t,r||[])).next())}));var t,r,a,c}},38153:(e,t,r)=>{r.r(t),r.d(t,{PdbAdminUserForm:()=>S}),r(43753);var s,n,i,o=r(85862),a=r(59662),c=r(23283),l=(r(63313),r(40789),r(15474),r(66163),r(75866),r(17725)),d=r(26224),m=r(72869),u=r(87553),h=r(33600),p=r(53464),f=r(54728),g=r(95524),b=r(6651),y=r(48485),w=r(12583),v=r(29456),A=r(61090),_=r(87059),B=function(e,t,r,s){var n,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,r,s){return new(r||(r=Promise))((function(n,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};let S=class extends o.LitElement{constructor(){super(),this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this.registrationType="none",this.formId=1,this.startSearchPage=0,this.selectedBranchId=0,this._branches=[],this._genders=[],this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserAccess=this._clientUserAccessDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,l.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,h.getUserLoginInfoCookie)()],yield this.getPageAccesses(),yield this.getBranches(),yield this.getGenders(),"true"==this.edit&&(this.registrationType="new-entry")}))}disconnectedCallback(){}render(){return"true"===this.edit?("mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,o.html`
        <div class="p-1">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="0">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="person" id="mainAccountFormBtn"
                label="User" @click="${this.displayMainAccountFormBtn}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="business_center" id="accessPagesFormBtn"
                label="Access" @click="${this.displayAccessPagesFormBtn}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="lock" id="passwordFormBtn"
                class="!w-28 !px-1" label="Password" @click="${this.displayPasswordForm}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="0">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="person" id="mainAccountFormBtn"
                label="User Information" @click="${this.displayMainAccountFormBtn}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="business_center" id="accessPagesFormBtn"
                label="Access Page(s)" @click="${this.displayAccessPagesFormBtn}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="lock" id="passwordFormBtn"
                class="!w-28 !px-1" label="Password" @click="${this.displayPasswordForm}"></mwc-tab>
            </mwc-tab-bar>
          </div>
        </div>
        ${this.getEditForm}
      `):o.html`
        <div class="p-1">
          <mwc-button class="primary" setFormMembersField label="From Member List" @click="${this.setFormMembersField}"></mwc-button>
          <mwc-button class="primary" setNewEntryField label="New Entry" @click="${this.setNewEntryField}"></mwc-button>
        </div>
        ${this.form}
      `}get getEditForm(){return 1===this.formId?o.html`
        ${this.profileForm}
      `:2===this.formId?o.html`
        ${this.pageAccessForm}
      `:o.html`
        ${this.passwordForm}
      `}displayMainAccountFormBtn(e){e.preventDefault(),this.formId=1,this.mainAccountFormBtn.setAttribute("raised","true"),this.accessPagesFormBtn.removeAttribute("raised"),this.passwordFormBtn.removeAttribute("raised")}displayAccessPagesFormBtn(e){e.preventDefault(),this.formId=2,this.accessPagesFormBtn.setAttribute("raised","true"),this.mainAccountFormBtn.removeAttribute("raised"),this.passwordFormBtn.removeAttribute("raised")}displayPasswordForm(e){e.preventDefault(),this.formId=3,this.passwordFormBtn.setAttribute("raised","true"),this.accessPagesFormBtn.removeAttribute("raised"),this.mainAccountFormBtn.removeAttribute("raised"),setTimeout((()=>{this.firstUpdated()}),500)}setFormMembersField(e){e.preventDefault(),this.registrationType="from-members",this.querySelectorAll("[setFormMembersField]").forEach((e=>{e.setAttribute("raised",""),e.setAttribute("class","warning")})),this.querySelectorAll("[setNewEntryField]").forEach((e=>{e.removeAttribute("raised"),e.setAttribute("class","primary")}))}setNewEntryField(e){e.preventDefault(),this.registrationType="new-entry",this.querySelectorAll("[setNewEntryField]").forEach((e=>{e.setAttribute("raised",""),e.setAttribute("class","warning")})),this.querySelectorAll("[setFormMembersField]").forEach((e=>{e.removeAttribute("raised"),e.setAttribute("class","primary")}))}setSelectedBranchId(e){e.preventDefault();const t=this.registrationType;this.registrationType="none",this.querySelectorAll("[setSelectedBranchId]").forEach((e=>{this.selectedBranchId=e.value})),this.registrationType=t}get profileForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Update User Profile!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.branchField}

                  ${this.newEntryFields}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update User Profile" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get pageAccessForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Edit User Page Access!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.accessFieldTickBox}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Edit User Page Access" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get passwordForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Password</h1>
                  <h3 class="h3">Set New Password!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.passwordFields}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set New Password" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get form(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Add Admin User!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.branchField}

                  ${"new-entry"===this.registrationType?o.html`${this.newEntryFields}`:o.nothing}
                  ${"from-members"===this.registrationType?o.html`${this.fromMembersField}`:o.nothing}
                  
                  <!-- ${this.accessFieldSelectBox} -->
                  
                  <div class="col-md-12 col-lg-12 my-2"><hr/></div>

                  ${this.passwordFields}

                  <div class="col-md-12 col-lg-12 my-2"><hr/></div>
                  ${this.accessFieldTickBox}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Admin User" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get branchField(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);const t=this.clientUser,r=t.data,s=Array.isArray(r)?r[0]:r,n=t.success;return o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Branch</h4>
        <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" @change="${this.setSelectedBranchId}" outlined required>
          ${1===e?o.html`
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((e=>n&&s.branchId===e.id?o.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          `:o.html`
            ${this._branches.map((t=>{if(t.id===e)return o.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
          `}
        </mwc-select>
      </div>
    `}get passwordFields(){return o.html`
      ${"true"===this.edit?o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Old Password</h4> 
        <mwc-textfield name="old_password" id="old_password" label="Enter Old Password" outlined type="password" required>
        </mwc-textfield>
      </div>`:o.nothing}
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Password</h4> 
        <mwc-textfield name="password" id="password" label="Enter Password" outlined type="password" required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Password Confirmation</h4> 
        <mwc-textfield name="confirm_password" id="confirm_password" label="Enter Password Confirmation" outlined type="password"
          required>
        </mwc-textfield>
      </div>
    `}get fromMembersField(){let e="";null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].token);let t={};return t.Authorization="Token "+e,o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Member</h4> 
        <select-input class="w-100" id="member" name="member" label="Select Member"
          .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
          .ajaxHeader="${t}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${y.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search?"></select-input>
      </div>
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const r={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(r)||e.push(r)})),e}get accessFieldSelectBox(){const e=this.pageAccesses;return o.html`
      <div class="col-md-6 col-lg-8">
        <h4 class="font-semibold my-2">Select User Access</h4> 
        <select-input name="access" multiple class="w-full" id="access"
          label="Select User Access" .options="${e}" outlined required>
        </select-input>
      </div>
    `}get accessFieldTickBox(){const e=this.pageAccesses,t=this.clientUserAccess,r=t.data,s=Array.isArray(r)?r:[r],n=t.success;let i=[];return n&&s.forEach((e=>{e=(0,w.ClientUserAccess_S)(e),i.includes(e.page.id)||i.push(e.page.id)})),o.html`
      <div class="col-md-6 col-lg-8">
        <h4 class="font-semibold my-2">Select User Access</h4> 
        <input type="hidden" id="${"true"===this.edit?"pageId":"access"}" />
        
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Page(s)</b>
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
                ${e.map(((e,t)=>{let r="access_"+t,s="access[]";"true"===this.edit&&(r="pageId_"+t,s="pageId[]");let a=!1;return n&&i.forEach((t=>{e.id===t&&(a=!0)})),o.html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <label for="${r}">${e.name}</label>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          ${a?o.html`
                            <input id="${r}" name="${s}" type="checkbox" value="${e.id}" checked
                              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          `:o.html`
                            <input id="${r}" name="${s}" type="checkbox" value="${e.id}"
                              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          `}
                        </div>
                      </td>
                    </tr>
                  `}))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get newEntryFields(){const e=this.clientUser,t=e.data,r=Array.isArray(t)?t[0]:t,s=e.success;let n="";if(s){const e=new Date(r.dateOfBirth).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");n=[e[2],e[0],e[1]].join("-")}return o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Firstname</h4> 
        <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" 
          value="${s?r.firstname:""}" label="Enter Firstname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Surname</h4> 
        <mwc-textfield name="surname" type="text" class="w-full" id="surname" 
          value="${s?r.surname:""}" label="Enter Surname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Gender</h4>
        <mwc-select name="gender" class="w-full" id="gender" label="Select Gender" outlined required>
          <mwc-list-item value="0">Select Gender</mwc-list-item>
          ${this._genders.map((e=>s&&r.gender===e.id?o.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
        </mwc-select>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Date of Birth</h4> 
        <mwc-textfield name="dateOfBirth" type="date" class="w-full" id="dateOfBirth"
          label="Select Date of Birth" value="${n}" outlined required>
        </mwc-textfield>
      </div>
      <!-- <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Add Profile Picture</h4> 
        <file-input id="profilePicture" name="profilePicture" hasLabel label="Add Profile Picture"></file-input>
      </div> -->
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Phone Number</h4> 
        <mwc-textfield name="phone" multiple type="tel" class="w-full" id="phone"
          label="Enter Phone Number" value="${s?r.phone:""}" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Email Address</h4> 
        <mwc-textfield name="email" multiple type="email" class="w-full" id="email"
          label="Enter Email Address" value="${s?r.email:""}" outlined required>
        </mwc-textfield>
      </div>
    `}firstUpdated(){(0,b.togglePswdVisibility)(),(0,b.togglePswdVisibility)("mwc-textfield")}processClientUserSearch(e,t){t.page=t.page||0;const r=e.count,s=e.results,n=document.querySelector('[id="member"]');let i=[];if(r>0){var o=s;for(let e=0;e<o.length;e++){const t=o[e],r={id:t.id,text:t.firstname+" "+t.surname};i.includes(r)||i.push(r)}}return{results:i,total:r,totalShowing:n.totalShowing}}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranchId)}]}getBranches(){return x(this,void 0,void 0,(function*(){const e=yield(0,d.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getGenders(){return x(this,void 0,void 0,(function*(){const e=yield(0,u.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,m.GenericGenderInfo_S)(e)))),this._genders=[...this._genders,...t]}))}getPageAccesses(){return x(this,void 0,void 0,(function*(){const e=yield(0,f.GET_ClientPageAccess)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,p.ClientPageAccess_S)(e)))),this._pageAccesses=[...this._pageAccesses,...t]}))}submitForm(e){return x(this,void 0,void 0,(function*(){if(e.preventDefault(),"true"===this.edit){if(this.isEditable){const e=this.clientUser,t=e.data,r=Array.isArray(t)?t[0]:t;e.success&&(1===this.formId?yield(0,A.PUT_ClientUser)(r.id):2===this.formId?yield(0,v.PUT_ClientUserAccess)(r.id):yield(0,_.PUT_ClientUserPassword)(r.id))}}else yield(0,g.POST_ClientUser)()}))}createRenderRoot(){return this}};S.styles=[o.css`
   :host { display: block; }
  `],B([(0,a.property)({type:String}),k("design:type",String)],S.prototype,"edit",void 0),B([(0,a.property)({type:Boolean}),k("design:type",Boolean)],S.prototype,"editAccess",void 0),B([(0,a.property)({type:Boolean}),k("design:type",Boolean)],S.prototype,"isEditable",void 0),B([(0,a.property)({type:String}),k("design:type",String)],S.prototype,"page_type",void 0),B([(0,a.property)({type:String}),k("design:type",String)],S.prototype,"registrationType",void 0),B([(0,a.property)({type:Number}),k("design:type",Number)],S.prototype,"formId",void 0),B([(0,a.property)({type:Number}),k("design:type",Number)],S.prototype,"startSearchPage",void 0),B([(0,a.property)({type:Number}),k("design:type",Number)],S.prototype,"selectedBranchId",void 0),B([(0,a.property)({type:Array}),k("design:type",Array)],S.prototype,"_branches",void 0),B([(0,a.property)({type:Array}),k("design:type",Array)],S.prototype,"_genders",void 0),B([(0,a.property)({type:Array}),k("design:type",Array)],S.prototype,"_pageAccesses",void 0),B([(0,a.property)({type:Array}),k("design:type",Array)],S.prototype,"_activeBranchId",void 0),B([(0,a.property)({type:Array}),k("design:type",Array)],S.prototype,"_userLoginInfo",void 0),B([(0,a.query)("#mainAccountFormBtn"),k("design:type","function"==typeof(s=void 0!==c.Button&&c.Button)?s:Object)],S.prototype,"mainAccountFormBtn",void 0),B([(0,a.query)("#accessPagesFormBtn"),k("design:type","function"==typeof(n=void 0!==c.Button&&c.Button)?n:Object)],S.prototype,"accessPagesFormBtn",void 0),B([(0,a.query)("#passwordFormBtn"),k("design:type","function"==typeof(i=void 0!==c.Button&&c.Button)?i:Object)],S.prototype,"passwordFormBtn",void 0),S=B([(0,a.customElement)("pdb-admin-user-form"),k("design:paramtypes",[])],S)}}]);
//# sourceMappingURL=src_addons_interfaces_clients_branches_index_ts-src_view_admin_user_form_index_ts.js.map