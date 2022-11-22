"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_views_home_branch_-9f78f8"],{73794:(e,t,n)=>{n.r(t)},26660:(e,t,n)=>{n.r(t)},17725:(e,t,n)=>{n.r(t),n.d(t,{setActiveBranchIdCookie:()=>l,removeActiveBranchIdCookie:()=>c,getActiveBranchIdCookie:()=>a});var o=n(67052),r=n(21942),s=n(61489);const i="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,r.set_cookies)(i,"",-1),(0,r.set_cookies)(i,(0,o.base64Encode)(t),3500)};function c(){(0,r.set_cookies)(i,"",-1)}const a=()=>{if(""===(0,r.get_cookie)(i))return null;{const e=(0,o.base64Decode)((0,r.get_cookie)(i)),t=JSON.parse(e);return(0,s.clientBranchInfo_S)(t)}}},42813:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o});class o{static toMembershipUserModel(e){return l(JSON.parse(e),a("MembershipUserModel"),s)}static membershipUserModelToJson(e){return JSON.stringify(l(e,a("MembershipUserModel"),i),null,2)}}function r(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:r(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return l(t,o,n)}catch(e){}}return r(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,n))):r("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return r("object",o);const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[r.key]=l(i,r.typ,n,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(s[r]=l(o[r],t,n,r))})),s}(n(t),t.additional,e):r(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?r("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:r(e,t,o)}(t,e)}}function c(...e){return{unionMembers:e}}function a(e){return{ref:e}}const u={MembershipUserModel:(p=[{json:"id",js:"id",typ:c(null,0)},{json:"clientId",js:"clientID",typ:c(null,0)},{json:"firstname",js:"firstname",typ:c(null,"")},{json:"middlename",js:"middlename",typ:c(null,"")},{json:"surname",js:"surname",typ:c(null,"")},{json:"gender",js:"gender",typ:c(null,0)},{json:"profilePicture",js:"profilePicture",typ:c(null,"")},{json:"phone",js:"phone",typ:c(null,"")},{json:"email",js:"email",typ:c(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:c(null,Date)},{json:"religion",js:"religion",typ:c(null,0)},{json:"nationality",js:"nationality",typ:c(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:c(null,"")},{json:"stateProvince",js:"stateProvince",typ:c(null,"")},{json:"region",js:"region",typ:c(null,0)},{json:"district",js:"district",typ:c(null,0)},{json:"constituency",js:"constituency",typ:c(null,0)},{json:"electoralArea",js:"electoralArea",typ:c(null,0)},{json:"community",js:"community",typ:c(null,"")},{json:"hometown",js:"hometown",typ:c(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:c(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:c(null,"")},{json:"level",js:"level",typ:c(null,0)},{json:"status",js:"status",typ:c(null,0)},{json:"accountType",js:"accountType",typ:c(null,0)},{json:"memberType",js:"memberType",typ:c(null,0)},{json:"date",js:"date",typ:c(null,Date)},{json:"last_login",js:"lastLogin",typ:c(null,Date)},{json:"referenceId",js:"referenceID",typ:c(null,"")},{json:"branchId",js:"branchID",typ:c(null,0)}],!1,{props:p,additional:false})};var p},26224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>l});var o=n(48485),r=n(87270),s=n(14492),i=n(33600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,i.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),l=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,o){function r(e){try{i(c.next(e))}catch(e){o(e)}}function s(e){try{i(c.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,s)}i((c=c.apply(t,n||[])).next())}));var t,n,l,c}},90072:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsMemberCategories:()=>l});var o=n(48485),r=n(87270),s=n(14492),i=n(33600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,i.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),l=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,o){function r(e){try{i(c.next(e))}catch(e){o(e)}}function s(e){try{i(c.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,s)}i((c=c.apply(t,n||[])).next())}));var t,n,l,c}},7449:(e,t,n)=>{n.r(t),n.d(t,{DELETE_MembershipUsers:()=>p});var o=n(86455),r=n.n(o),s=n(48485),i=n(87270),l=n(14492),c=n(8967),a=n(33600),u=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};function p(e){return u(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/"+e,o={};return r().fire({title:"Remove Member?",text:"Member will be permanently deleted from your member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new l.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},64026:(e,t,n)=>{n.r(t),n.d(t,{DELETE_MembershipOrganizationUsers:()=>p});var o=n(86455),r=n.n(o),s=n(48485),i=n(87270),l=n(14492),c=n(8967),a=n(33600),u=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};function p(e){return u(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/"+e,o={};return r().fire({title:"Remove Organization Member?",text:"Organization will be permanently deleted from your member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new l.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},38281:(e,t,n)=>{n.r(t),n.d(t,{UserProfilePhoto:()=>c});var o=n(48485),r=n(85862),s=n(59662),i=function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return r.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"url",void 0),i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"type",void 0),i([(0,s.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),i([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=i([(0,s.customElement)("user-profile-photo"),l("design:paramtypes",[])],c)},43629:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>a}),n(26660);var o=n(85862),r=n(59662),s=n(90072),i=function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};let a=class extends o.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return c(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?o.html`
        ${this.materialSelectField}
      `:o.html`
        ${this.selectField}
      `}get materialSelectField(){return null===this.defaultValue?o.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>o.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `:o.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required>
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>this.defaultValue===e.id?o.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:o.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
      </mwc-select>
    `}get selectField(){let e=o.html``;return e=null===this.defaultValue?o.html`
      <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
				<option value="0">${this.label}</option>
        ${this._memberCategories.map((e=>o.html`<option value="${e.id}">${e.category}</option>`))}
			</select>
    `:o.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>this.defaultValue===e.id?o.html`<option value="${e.id}" selected>${e.category}</option>`:o.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `,o.html`
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
    `}firstUpdated(){}getMemberCategories(){return c(this,void 0,void 0,(function*(){const e=yield(0,s.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}createRenderRoot(){return this}};a.styles=[o.css`
   :host { display: block; }
  `],i([(0,r.property)({type:String}),l("design:type",String)],a.prototype,"material",void 0),i([(0,r.property)({type:Number}),l("design:type",Number)],a.prototype,"defaultValue",void 0),i([(0,r.property)({type:String}),l("design:type",String)],a.prototype,"label",void 0),i([(0,r.property)({type:String}),l("design:type",String)],a.prototype,"name",void 0),i([(0,r.property)({type:String}),l("design:type",String)],a.prototype,"id",void 0),i([(0,r.property)({type:String}),l("design:type",String)],a.prototype,"tag_class",void 0),i([(0,r.property)({type:String}),l("design:type",String)],a.prototype,"css_style",void 0),i([(0,r.property)({type:Array}),l("design:type",Array)],a.prototype,"_memberCategories",void 0),a=i([(0,r.customElement)("pdb-membership-select-member-type"),l("design:paramtypes",[])],a)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_views_home_branch_-9f78f8.js.map