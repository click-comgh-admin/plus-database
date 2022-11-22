"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/bulk_assignment/groups/add"],{95358:(e,t,r)=>{r.r(t)},91243:(e,t,r)=>{r.r(t)},17725:(e,t,r)=>{r.r(t),r.d(t,{setActiveBranchIdCookie:()=>l,removeActiveBranchIdCookie:()=>a,getActiveBranchIdCookie:()=>c});var n=r(67052),s=r(21942),o=r(61489);const i="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,s.set_cookies)(i,"",-1),(0,s.set_cookies)(i,(0,n.base64Encode)(t),3500)};function a(){(0,s.set_cookies)(i,"",-1)}const c=()=>{if(""===(0,s.get_cookie)(i))return null;{const e=(0,n.base64Decode)((0,s.get_cookie)(i)),t=JSON.parse(e);return(0,o.clientBranchInfo_S)(t)}}},42813:(e,t,r)=>{r.r(t),r.d(t,{Convert:()=>n});class n{static toMembershipUserModel(e){return l(JSON.parse(e),c("MembershipUserModel"),o)}static membershipUserModelToJson(e){return JSON.stringify(l(e,c("MembershipUserModel"),i),null,2)}}function s(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:s(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let s=0;s<n;s++){const n=e[s];try{return l(t,n,r)}catch(e){}}return s(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,r))):s("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return s("object",n);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],i=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[s.key]=l(i,s.typ,r,s.key)})),Object.getOwnPropertyNames(n).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(o[s]=l(n[s],t,r,s))})),o}(r(t),t.additional,e):s(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?s("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:s(e,t,n)}(t,e)}}function a(...e){return{unionMembers:e}}function c(e){return{ref:e}}const u={MembershipUserModel:(d=[{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"firstname",js:"firstname",typ:a(null,"")},{json:"middlename",js:"middlename",typ:a(null,"")},{json:"surname",js:"surname",typ:a(null,"")},{json:"gender",js:"gender",typ:a(null,0)},{json:"profilePicture",js:"profilePicture",typ:a(null,"")},{json:"phone",js:"phone",typ:a(null,"")},{json:"email",js:"email",typ:a(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:a(null,Date)},{json:"religion",js:"religion",typ:a(null,0)},{json:"nationality",js:"nationality",typ:a(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:a(null,"")},{json:"stateProvince",js:"stateProvince",typ:a(null,"")},{json:"region",js:"region",typ:a(null,0)},{json:"district",js:"district",typ:a(null,0)},{json:"constituency",js:"constituency",typ:a(null,0)},{json:"electoralArea",js:"electoralArea",typ:a(null,0)},{json:"community",js:"community",typ:a(null,"")},{json:"hometown",js:"hometown",typ:a(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:a(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:a(null,"")},{json:"level",js:"level",typ:a(null,0)},{json:"status",js:"status",typ:a(null,0)},{json:"accountType",js:"accountType",typ:a(null,0)},{json:"memberType",js:"memberType",typ:a(null,0)},{json:"date",js:"date",typ:a(null,Date)},{json:"last_login",js:"lastLogin",typ:a(null,Date)},{json:"referenceId",js:"referenceID",typ:a(null,"")},{json:"branchId",js:"branchID",typ:a(null,0)}],!1,{props:d,additional:false})};var d},26224:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientBranches:()=>l});var n=r(48485),s=r(87270),o=r(14492),i=r(33600);function l(e=null){return t=this,r=void 0,a=function*(){const t=(0,i.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),l=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function s(e){try{i(a.next(e))}catch(e){n(e)}}function o(e){try{i(a.throw(e))}catch(e){n(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof l?r:new l((function(e){e(r)}))).then(s,o)}i((a=a.apply(t,r||[])).next())}));var t,r,l,a}},34086:(e,t,r)=>{r.r(t),r.d(t,{POST_MemberGroupingsBulkAssignGroup:()=>d});var n=r(86455),s=r.n(n),o=r(48485),i=r(87270),l=r(14492),a=r(8967),c=r(33600),u=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}a((n=n.apply(e,t||[])).next())}))};function d(){return u(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/bulk-assignment/groups",r=document.querySelector('[make-general-posts="bulk-assignment_group"]'),n=new FormData(r);return s().fire({title:"Assign Members to selected group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,a.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&s().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2892:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsGroups:()=>l});var n=r(48485),s=r(87270),o=r(14492),i=r(33600);function l(e=null,t=""){return r=this,l=void 0,c=function*(){const r=(0,i.getUserLoginInfoCookie)(),l=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,a=yield(0,s.http)(l,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new o.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,s)}o((c=c.apply(r,l||[])).next())}));var r,l,a,c}},37725:(e,t,r)=>{r.r(t),r.d(t,{FileInput:()=>l});var n=r(85862),s=r(59662),o=(r(29975),r(23283),r(91243),function(e,t,r,n){var s,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.nothing}
            <input class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.nothing}
            <input class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.nothing}
            <input type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.nothing}
            <input type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],l.prototype,"randomID",void 0),o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"id",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"required",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"hasLabel",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"multiple",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],l.prototype,"startNumber",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],l.prototype,"rowsPerPage",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],l.prototype,"totalShowing",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=o([(0,s.customElement)("file-input")],l)},43690:(e,t,r)=>{r.r(t),r.d(t,{SwitchInput:()=>l});var n=r(85862),s=r(59662),o=(r(29975),r(16788),function(e,t,r,n){var s,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[n.css`
      :host {
        display: block;
      }
    `],o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"selected",void 0),o([(0,s.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"isSelected",void 0),l=o([(0,s.customElement)("switch-input")],l)},64514:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsBulkAssignmentMemberGroupsAdd:()=>b}),r(95358);var n=r(85862),s=r(59662),o=(r(33590),r(40789),r(23283),r(63313),r(75866),r(43690),r(37725),r(43629),r(33600)),i=r(17725),l=r(26224),a=r(90072),c=r(48485),u=r(42813),d=r(18530),p=r(2892),h=r(34086),m=function(e,t,r,n){var s,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}a((n=n.apply(e,t||[])).next())}))};let g={},b=class extends n.LitElement{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._groups=[],this._branches=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getGroups(),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);const t=this._groups.map((e=>({id:e.id,name:e.group,isSelected:"false",selected:!1})));return n.html`
    <div class="form-container flex justify-center">
      <div class="app-container- !px-0">
        <div class="app-container--row !px-0">
          <div class="app-container--col-md-12">
            <header class="header warning app-container--col-md-12">
              <label for="" class="label">
                <mwc-icon class="icon">format_strikethrough</mwc-icon>
                <h1 class="h1 !text-red-400">New Group Assignment(s)</h1>
                <h3 class="h3">Assignment Group!</h3>
              </label>
            </header>
            <form method="post" action="#" class="form" make-general-posts="bulk-assignment_group" enctype="multipart/form-data">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Account Type</h4>
                  <mwc-select class="w-full" label="Select Account Type"
                    name="accountType" id="accountType" @change="${this.accountTypeChange}"
                    outlined required>
                    <mwc-list-item value="0" selected>Select Account Type</mwc-list-item>
                    <mwc-list-item value="1">User Account </mwc-list-item>
                    <mwc-list-item value="2">Organization Account</mwc-list-item>
                  </mwc-select>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Branch</h4>
                  <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                    name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                    ${1===e?n.html`
                      <mwc-list-item value="0">Select Branch</mwc-list-item>
                      ${this._branches.map((t=>e===t.id?n.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:n.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    `:n.html`
                      ${this._branches.map((t=>{if(t.id===e)return n.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
                    `}
                  </mwc-select>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Member Category</h4>
                  <pdb-membership-select-member-type defaultValue="1" 
                    name="memberType" id="memberType"
                    label="Select Member Category" outlined required>
                  </pdb-membership-select-member-type>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Group</h4>
                  <select-input name="groups[]" class="w-full" id="groups" label="Select User Group" .options="${t}"
                    outlined required >
                  </select-input>
                </div>
                <div class="col-md-12 col-lg-12">
                  ${this.memberListField}
                </div>
              </div>
    
              <div class="form-input-container">
                <mwc-button label="Assign" raised class="w-full" @click="${this.submitForm}">
                </mwc-button>
              </div>
            
              <div class="flex form-input-container items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md">
                <label class="block font-medium text-sm text-gray-600 w-full">
                  ...
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `}branchChange(e){return f(this,void 0,void 0,(function*(){const t=this.accountType;this.accountType=0,this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value),setTimeout((()=>{this.accountType=t}),500),yield this.getGroups("?branchId="+this.selectedBranch,this.selectedBranch)}))}accountTypeChange(e){this.accountType=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}get memberListField(){return 0===Number(this.accountType)?"...":1===Number(this.accountType)?this.individualMemberList:this.organizationMemberList}get individualMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,n.html`
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${function(e,t){var r;t.page=t.page||0;const n=e.count,s=e.results,o=document.querySelector('[id="memberIds"]');let i=[];if(n>0){var l=s;for(let e=0;e<l.length;e++){const t=l[e],n=u.Convert.toMembershipUserModel(JSON.stringify(t)),s={id:n.id,text:`${n.firstname} ${null!==(r=n.middlename)&&void 0!==r?r:""} ${n.surname}`};i.includes(s)||i.push(s)}}return{results:i,total:n,totalShowing:o.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${c.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
    `}get organizationMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,n.html`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const r=e.count,n=e.results,s=document.querySelector('[id="memberIds"]');let o=[];if(r>0){var i=n;for(let e=0;e<i.length;e++){const t=i[e],r=d.Convert.toMembershipOrganizationUserModel(JSON.stringify(t)),n={id:r.id,text:`${r.organizationName}`};o.includes(n)||o.push(n)}}return{results:o,total:r,totalShowing:s.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${c.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranch)}]}firstUpdated(){}getBranches(){return f(this,void 0,void 0,(function*(){const e=yield(0,l.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getClientMemberCategories(){return f(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}getGroups(e="",t=null){return f(this,void 0,void 0,(function*(){const r=null===t||t<1?"__":String(t);if(this._groups=[],r in g)return void setTimeout((()=>{this._groups=g[r]}),500);const n=yield(0,p.GET_MemberGroupingsGroups)(null,e);let s=[];null===n?s.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===n.response.success&&"length"in n.response.data&&(s=n.response.data),this._groups=[...this._groups,...s],g[r]=this._groups}))}submitForm(e){return f(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_MemberGroupingsBulkAssignGroup)()}))}createRenderRoot(){return this}};b.styles=[n.css`
   :host { display: block; }
  `],m([(0,s.property)({type:Number}),y("design:type",Number)],b.prototype,"startSearchPage",void 0),m([(0,s.property)({type:Number}),y("design:type",Number)],b.prototype,"accountType",void 0),m([(0,s.property)({type:Number}),y("design:type",Number)],b.prototype,"selectedBranch",void 0),m([(0,s.property)({type:Array}),y("design:type",Array)],b.prototype,"_userLoginInfo",void 0),m([(0,s.property)({type:Array}),y("design:type",Array)],b.prototype,"_activeBranchId",void 0),m([(0,s.property)({type:Array}),y("design:type",Array)],b.prototype,"_memberCategories",void 0),m([(0,s.property)({type:Array}),y("design:type",Array)],b.prototype,"_groups",void 0),m([(0,s.property)({type:Array}),y("design:type",Array)],b.prototype,"_branches",void 0),b=m([(0,s.customElement)("membership-groupings-bulk_assignment-groups-add"),y("design:paramtypes",[])],b)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_view_membership_members_select-member-type_index_ts","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_clients_branches_-dc6079","src_assets_styles_views_admin_register_main_scss","shared"],(()=>(64514,e(e.s=64514)))),e.O())])}));
//# sourceMappingURL=add.js.map