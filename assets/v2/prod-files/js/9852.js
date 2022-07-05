"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9852],{6651:(e,t,s)=>{s.d(t,{m:()=>n}),s(934);let i=[];const r="Show Password",n=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const s=e.parentElement;s.setAttribute("style",s.getAttribute("style")+"; flex-direction: column !important;");const n=document.createElement("label");n.setAttribute("style",n.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const a=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),a.innerText=r;const c=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const l=document.createElement("input");l.type="checkbox",l.id="pswd-visibility-btn--"+t,l.setAttribute("style",l.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),n.appendChild(c),n.appendChild(l),n.appendChild(a),e.after(n);const d={id:l.id,showing:!1,elem:e,span:a};i.includes(d)||i.push(d),l.addEventListener("change",o)}))},o=e=>{e.preventDefault();const t=e.currentTarget;t.checked,i.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=r,e.showing=!1))}))}},3464:(e,t,s)=>{function i(e){return{id:Number(e.id),page:e.page}}s.d(t,{Q:()=>i})},2583:(e,t,s)=>{s.d(t,{z:()=>r});var i=s(3464);function r(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,i.Q)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},2869:(e,t,s)=>{function i(e){return{id:Number(e.id),name:e.name}}s.d(t,{y:()=>i})},4728:(e,t,s)=>{s.d(t,{u:()=>a});var i=s(771),r=s(7270),n=s(596),o=s(3600);function a(e=null,t=""){return s=this,a=void 0,l=function*(){const s=(0,o.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user-access/pages"+(null===e?"":"/"+e)+t,c=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new n.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new n.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{n(l.next(e))}catch(e){t(e)}}function r(e){try{n(l.throw(e))}catch(e){t(e)}}function n(t){var s;t.done?e(t.value):(s=t.value,s instanceof c?s:new c((function(e){e(s)}))).then(i,r)}n((l=l.apply(s,a||[])).next())}));var s,a,c,l}},7553:(e,t,s)=>{s.d(t,{q:()=>a});var i=s(771),r=s(7270),n=s(596),o=s(3600);function a(e=null){return t=this,s=void 0,c=function*(){const t=(0,o.Ie)(),s=i.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),a=yield(0,r.d)(s,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new n.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new n.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function r(e){try{o(c.next(e))}catch(e){i(e)}}function n(e){try{o(c.throw(e))}catch(e){i(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof a?s:new a((function(e){e(s)}))).then(r,n)}o((c=c.apply(t,s||[])).next())}));var t,s,a,c}},9852:(e,t,s)=>{var i,r,n,o=s(9392),a=s(9662),c=s(2669),l=s(5713),d=s(5248),u=(s(3313),s(9261),s(1877),s(2169),s(5866),s(7725)),m=s(6224),h=s(2869),p=s(7553),f=s(3600),y=s(3464),b=s(4728),g=s(6455),w=s.n(g),v=s(771),A=s(7270),_=s(596),B=s(8967),x=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},F=s(6651),k=s(2583),I=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},E=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},$=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},S=function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};let U=class extends o.oi{constructor(){super(),this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this.registrationType="none",this.formId=1,this.startSearchPage=0,this.selectedBranchId=0,this._branches=[],this._genders=[],this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserAccess=this._clientUserAccessDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return P(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,u.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,f.Ie)()],yield this.getPageAccesses(),yield this.getBranches(),yield this.getGenders(),"true"==this.edit&&(this.registrationType="new-entry")}))}disconnectedCallback(){}render(){return"true"===this.edit?("mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,o.dy`
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
      `):o.dy`
        <div class="p-1">
          <mwc-button class="primary" setFormMembersField label="From Member List" @click="${this.setFormMembersField}"></mwc-button>
          <mwc-button class="primary" setNewEntryField label="New Entry" @click="${this.setNewEntryField}"></mwc-button>
        </div>
        ${this.form}
      `}get getEditForm(){return 1===this.formId?o.dy`
        ${this.profileForm}
      `:2===this.formId?o.dy`
        ${this.pageAccessForm}
      `:o.dy`
        ${this.passwordForm}
      `}displayMainAccountFormBtn(e){e.preventDefault(),this.formId=1,this.mainAccountFormBtn.setAttribute("raised","true"),this.accessPagesFormBtn.removeAttribute("raised"),this.passwordFormBtn.removeAttribute("raised")}displayAccessPagesFormBtn(e){e.preventDefault(),this.formId=2,this.accessPagesFormBtn.setAttribute("raised","true"),this.mainAccountFormBtn.removeAttribute("raised"),this.passwordFormBtn.removeAttribute("raised")}displayPasswordForm(e){e.preventDefault(),this.formId=3,this.passwordFormBtn.setAttribute("raised","true"),this.accessPagesFormBtn.removeAttribute("raised"),this.mainAccountFormBtn.removeAttribute("raised"),setTimeout((()=>{this.firstUpdated()}),500)}setFormMembersField(e){e.preventDefault(),this.registrationType="from-members",this.querySelectorAll("[setFormMembersField]").forEach((e=>{e.setAttribute("raised",""),e.setAttribute("class","warning")})),this.querySelectorAll("[setNewEntryField]").forEach((e=>{e.removeAttribute("raised"),e.setAttribute("class","primary")}))}setNewEntryField(e){e.preventDefault(),this.registrationType="new-entry",this.querySelectorAll("[setNewEntryField]").forEach((e=>{e.setAttribute("raised",""),e.setAttribute("class","warning")})),this.querySelectorAll("[setFormMembersField]").forEach((e=>{e.removeAttribute("raised"),e.setAttribute("class","primary")}))}setSelectedBranchId(e){e.preventDefault();const t=this.registrationType;this.registrationType="none",this.querySelectorAll("[setSelectedBranchId]").forEach((e=>{this.selectedBranchId=e.value})),this.registrationType=t}get profileForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.dy`
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
    `}get pageAccessForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.dy`
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
    `}get passwordForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.dy`
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
    `}get form(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.dy`
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

                  ${"new-entry"===this.registrationType?o.dy`${this.newEntryFields}`:o.Ld}
                  ${"from-members"===this.registrationType?o.dy`${this.fromMembersField}`:o.Ld}
                  
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
    `}get branchField(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);const t=this.clientUser,s=t.data,i=Array.isArray(s)?s[0]:s,r=t.success;return o.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Branch</h4>
        <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" @change="${this.setSelectedBranchId}" outlined required>
          ${1===e?o.dy`
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((e=>r&&i.branchId===e.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          `:o.dy`
            ${this._branches.map((t=>{if(t.id===e)return o.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
          `}
        </mwc-select>
      </div>
    `}get passwordFields(){return o.dy`
      ${"true"===this.edit?o.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Old Password</h4> 
        <mwc-textfield name="old_password" id="old_password" label="Enter Old Password" outlined type="password" required>
        </mwc-textfield>
      </div>`:o.Ld}
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
    `}get fromMembersField(){let e="";null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].token);let t={};return t.Authorization="Token "+e,o.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Member</h4> 
        <select-input class="w-100" id="member" name="member" label="Select Member"
          .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
          .ajaxHeader="${t}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${v.t.URLS.AKWAABA_API_BASE_URL}members/user/search?"></select-input>
      </div>
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const s={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(s)||e.push(s)})),e}get accessFieldSelectBox(){const e=this.pageAccesses;return o.dy`
      <div class="col-md-6 col-lg-8">
        <h4 class="font-semibold my-2">Select User Access</h4> 
        <select-input name="access" multiple class="w-full" id="access"
          label="Select User Access" .options="${e}" outlined required>
        </select-input>
      </div>
    `}get accessFieldTickBox(){const e=this.pageAccesses,t=this.clientUserAccess,s=t.data,i=Array.isArray(s)?s:[s],r=t.success;let n=[];return r&&i.forEach((e=>{e=(0,k.z)(e),n.includes(e.page.id)||n.push(e.page.id)})),o.dy`
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
                ${e.map(((e,t)=>{let s="access_"+t,i="access[]";"true"===this.edit&&(s="pageId_"+t,i="pageId[]");let a=!1;return r&&n.forEach((t=>{e.id===t&&(a=!0)})),o.dy`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <label for="${s}">${e.name}</label>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          ${a?o.dy`
                            <input id="${s}" name="${i}" type="checkbox" value="${e.id}" checked
                              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          `:o.dy`
                            <input id="${s}" name="${i}" type="checkbox" value="${e.id}"
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
    `}get newEntryFields(){const e=this.clientUser,t=e.data,s=Array.isArray(t)?t[0]:t,i=e.success;let r="";if(i){const e=new Date(s.dateOfBirth).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");r=[e[2],e[0],e[1]].join("-")}return o.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Firstname</h4> 
        <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" 
          value="${i?s.firstname:""}" label="Enter Firstname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Surname</h4> 
        <mwc-textfield name="surname" type="text" class="w-full" id="surname" 
          value="${i?s.surname:""}" label="Enter Surname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Gender</h4>
        <mwc-select name="gender" class="w-full" id="gender" label="Select Gender" outlined required>
          <mwc-list-item value="0">Select Gender</mwc-list-item>
          ${this._genders.map((e=>i&&s.gender===e.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
        </mwc-select>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Date of Birth</h4> 
        <mwc-textfield name="dateOfBirth" type="date" class="w-full" id="dateOfBirth"
          label="Select Date of Birth" value="${r}" outlined required>
        </mwc-textfield>
      </div>
      <!-- <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Add Profile Picture</h4> 
        <file-input id="profilePicture" name="profilePicture" label="Add Profile Picture"></file-input>
      </div> -->
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Phone Number</h4> 
        <mwc-textfield name="phone" multiple type="tel" class="w-full" id="phone"
          label="Enter Phone Number" value="${i?s.phone:""}" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Email Address</h4> 
        <mwc-textfield name="email" multiple type="email" class="w-full" id="email"
          label="Enter Email Address" value="${i?s.email:""}" outlined required>
        </mwc-textfield>
      </div>
    `}firstUpdated(){(0,F.m)(),(0,F.m)("mwc-textfield")}processClientUserSearch(e,t){t.page=t.page||0;const s=e.count,i=e.results,r=document.querySelector('[id="member"]');let n=[];if(s>0){var o=i;for(let e=0;e<o.length;e++){const t=o[e],s={id:t.id,text:t.firstname+" "+t.surname};n.includes(s)||n.push(s)}}return{results:n,total:s,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranchId)}]}getBranches(){return P(this,void 0,void 0,(function*(){const e=yield(0,m.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getGenders(){return P(this,void 0,void 0,(function*(){const e=yield(0,p.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,h.y)(e)))),this._genders=[...this._genders,...t]}))}getPageAccesses(){return P(this,void 0,void 0,(function*(){const e=yield(0,b.u)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,y.Q)(e)))),this._pageAccesses=[...this._pageAccesses,...t]}))}submitForm(e){return P(this,void 0,void 0,(function*(){if(e.preventDefault(),"true"===this.edit){if(this.isEditable){const e=this.clientUser,t=e.data,s=Array.isArray(t)?t[0]:t;e.success&&(1===this.formId?yield function(e){return E(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),s=v.t.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,i=document.querySelector('[make-general-posts="client-user"]'),r=new FormData(i);return w().fire({title:"Update user profile?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>E(this,void 0,void 0,(function*(){return yield(0,A.d)(s,{method:"PUT",body:r,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new _.H("post",e,!1,i),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((s=>{let i={error:t.id+": "+s};"non_field_errors"===t.id&&(i={error:s}),e.push(i)}))}));const t=(0,B.T)(e);w().showValidationMessage(`${t}`)}return t})).catch((e=>{w().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!w().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),s=i.response.success}s&&w().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(s.id):2===this.formId?yield function(e){return I(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),s=v.t.URLS.AKWAABA_API_BASE_URL+"clients/user-access/setup/"+e,i=document.querySelector('[make-general-posts="client-user"]'),r=new FormData(i);return w().fire({title:"Setup user page access?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>I(this,void 0,void 0,(function*(){return yield(0,A.d)(s,{method:"PUT",body:r,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new _.H("post",e,!1,i),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((s=>{let i={error:t.id+": "+s};"non_field_errors"===t.id&&(i={error:s}),e.push(i)}))}));const t=(0,B.T)(e);w().showValidationMessage(`${t}`)}return t})).catch((e=>{w().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!w().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),s=i.response.success}s&&w().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(s.id):yield function(e){return $(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),s=v.t.URLS.AKWAABA_API_BASE_URL+"clients/user/change-password/"+e,i=document.querySelector('[make-general-posts="client-user"]'),r=new FormData(i);return w().fire({title:"Update user password?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>$(this,void 0,void 0,(function*(){return yield(0,A.d)(s,{method:"PATCH",body:r,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new _.H("post",e,!1,i),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((s=>{let i={error:t.id+": "+s};"non_field_errors"===t.id&&(i={error:s}),e.push(i)}))}));const t=(0,B.T)(e);w().showValidationMessage(`${t}`)}return t})).catch((e=>{w().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!w().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),s=i.response.success}s&&w().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(s.id))}}else yield function(){return x(this,void 0,void 0,(function*(){const e=(0,f.Ie)(),t=v.t.URLS.AKWAABA_API_BASE_URL+"clients/user",s=document.querySelector('[make-general-posts="client-user"]'),i=new FormData(s);return w().fire({title:"Add Admin User?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>x(this,void 0,void 0,(function*(){return yield(0,A.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new _.H("post",e,!1,s),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((s=>{let i={error:t.id+": "+s};"non_field_errors"===t.id&&(i={error:s}),e.push(i)}))}));const t=(0,B.T)(e);w().showValidationMessage(`${t}`)}return t})).catch((e=>{w().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!w().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),s=i.response.success}s&&w().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};U.styles=[o.iv`
   :host { display: block; }
  `],S([(0,a.C)({type:String}),C("design:type",String)],U.prototype,"edit",void 0),S([(0,a.C)({type:Boolean}),C("design:type",Boolean)],U.prototype,"editAccess",void 0),S([(0,a.C)({type:Boolean}),C("design:type",Boolean)],U.prototype,"isEditable",void 0),S([(0,a.C)({type:String}),C("design:type",String)],U.prototype,"page_type",void 0),S([(0,a.C)({type:String}),C("design:type",String)],U.prototype,"registrationType",void 0),S([(0,a.C)({type:Number}),C("design:type",Number)],U.prototype,"formId",void 0),S([(0,a.C)({type:Number}),C("design:type",Number)],U.prototype,"startSearchPage",void 0),S([(0,a.C)({type:Number}),C("design:type",Number)],U.prototype,"selectedBranchId",void 0),S([(0,a.C)({type:Array}),C("design:type",Array)],U.prototype,"_branches",void 0),S([(0,a.C)({type:Array}),C("design:type",Array)],U.prototype,"_genders",void 0),S([(0,a.C)({type:Array}),C("design:type",Array)],U.prototype,"_pageAccesses",void 0),S([(0,a.C)({type:Array}),C("design:type",Array)],U.prototype,"_activeBranchId",void 0),S([(0,a.C)({type:Array}),C("design:type",Array)],U.prototype,"_userLoginInfo",void 0),S([(0,c.I)("#mainAccountFormBtn"),C("design:type","function"==typeof(i=void 0!==d.z&&d.z)?i:Object)],U.prototype,"mainAccountFormBtn",void 0),S([(0,c.I)("#accessPagesFormBtn"),C("design:type","function"==typeof(r=void 0!==d.z&&d.z)?r:Object)],U.prototype,"accessPagesFormBtn",void 0),S([(0,c.I)("#passwordFormBtn"),C("design:type","function"==typeof(n=void 0!==d.z&&d.z)?n:Object)],U.prototype,"passwordFormBtn",void 0),U=S([(0,l.M)("pdb-admin-user-form"),C("design:paramtypes",[])],U)}}]);
//# sourceMappingURL=9852.js.map