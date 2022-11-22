"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/bulk_assignment/subgroups"],{73794:(e,t,n)=>{n.r(t)},17725:(e,t,n)=>{n.r(t),n.d(t,{setActiveBranchIdCookie:()=>l,removeActiveBranchIdCookie:()=>c,getActiveBranchIdCookie:()=>a});var r=n(67052),o=n(21942),s=n(61489);const i="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,o.set_cookies)(i,"",-1),(0,o.set_cookies)(i,(0,r.base64Encode)(t),3500)};function c(){(0,o.set_cookies)(i,"",-1)}const a=()=>{if(""===(0,o.get_cookie)(i))return null;{const e=(0,r.base64Decode)((0,o.get_cookie)(i)),t=JSON.parse(e);return(0,s.clientBranchInfo_S)(t)}}},42813:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>r});class r{static toMembershipUserModel(e){return l(JSON.parse(e),a("MembershipUserModel"),s)}static membershipUserModelToJson(e){return JSON.stringify(l(e,a("MembershipUserModel"),i),null,2)}}function o(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:o(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return l(t,r,n)}catch(e){}}return o(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,n))):o("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return o("object",r);const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],i=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;s[o.key]=l(i,o.typ,n,o.key)})),Object.getOwnPropertyNames(r).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(s[o]=l(r[o],t,n,o))})),s}(n(t),t.additional,e):o(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?o("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:o(e,t,r)}(t,e)}}function c(...e){return{unionMembers:e}}function a(e){return{ref:e}}const u={MembershipUserModel:(d=[{json:"id",js:"id",typ:c(null,0)},{json:"clientId",js:"clientID",typ:c(null,0)},{json:"firstname",js:"firstname",typ:c(null,"")},{json:"middlename",js:"middlename",typ:c(null,"")},{json:"surname",js:"surname",typ:c(null,"")},{json:"gender",js:"gender",typ:c(null,0)},{json:"profilePicture",js:"profilePicture",typ:c(null,"")},{json:"phone",js:"phone",typ:c(null,"")},{json:"email",js:"email",typ:c(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:c(null,Date)},{json:"religion",js:"religion",typ:c(null,0)},{json:"nationality",js:"nationality",typ:c(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:c(null,"")},{json:"stateProvince",js:"stateProvince",typ:c(null,"")},{json:"region",js:"region",typ:c(null,0)},{json:"district",js:"district",typ:c(null,0)},{json:"constituency",js:"constituency",typ:c(null,0)},{json:"electoralArea",js:"electoralArea",typ:c(null,0)},{json:"community",js:"community",typ:c(null,"")},{json:"hometown",js:"hometown",typ:c(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:c(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:c(null,"")},{json:"level",js:"level",typ:c(null,0)},{json:"status",js:"status",typ:c(null,0)},{json:"accountType",js:"accountType",typ:c(null,0)},{json:"memberType",js:"memberType",typ:c(null,0)},{json:"date",js:"date",typ:c(null,Date)},{json:"last_login",js:"lastLogin",typ:c(null,Date)},{json:"referenceId",js:"referenceID",typ:c(null,"")},{json:"branchId",js:"branchID",typ:c(null,0)}],!1,{props:d,additional:false})};var d},26224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>l});var r=n(48485),o=n(87270),s=n(14492),i=n(33600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,i.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),l=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,r){function o(e){try{i(c.next(e))}catch(e){r(e)}}function s(e){try{i(c.throw(e))}catch(e){r(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,s)}i((c=c.apply(t,n||[])).next())}));var t,n,l,c}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>l});var r=n(48485),o=n(87270),s=n(14492),i=n(33600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},3900:(e,t,n)=>{n.r(t),n.d(t,{DELETE_MemberGroupingsSubGroupMember:()=>d});var r=n(86455),o=n.n(r),s=n(48485),i=n(87270),l=n(14492),c=n(8967),a=n(33600),u=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};function d(e,t){return u(this,void 0,void 0,(function*(){const n=(0,a.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/bulk-assignment/remove-from-subgroup",d={subgroupId:e,memberId:t};return o().fire({title:"Remove Member From Sub-Group?",text:"Member will be permanently removed from sub-group member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(r,{method:"DELETE",body:JSON.stringify(d),headers:{Authorization:"Token "+n.token}},!0).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new l.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},89605:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>l});var r=n(48485),o=n(87270),s=n(14492),i=n(33600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},38281:(e,t,n)=>{n.r(t),n.d(t,{UserProfilePhoto:()=>c});var r=n(48485),o=n(85862),s=n(59662),i=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return o.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"url",void 0),i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"type",void 0),i([(0,s.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),i([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=i([(0,s.customElement)("user-profile-photo"),l("design:paramtypes",[])],c)},22465:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBulkAssignmentMemberSubgroupsView:()=>x}),n(73794);var r,o,s,i=n(85862),l=n(59662),c=n(67052),a=n(90072),u=n(23283),d=(n(33590),n(40789),n(63313),n(16883),n(30367),n(38281),n(75866),n(48485)),p=n(33600),m=n(17725),f=n(44672),h=n(52368),b=(n(43629),n(26224)),y=n(42813),g=n(18530),v=n(2892),_=n(3900),w=n(89605),S=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};let C={},N={},x=class extends i.LitElement{constructor(){super(),this._memberCategories=[],this._activeBranchId=null,this._memberType=1,this.selectedBranch=1,this._groups=[],this._subgroups=[],this._branches=[],this._userLoginInfo=null,this.memberProfileBaseUrl="/member/member-profile?view=",this.datatablePathUrl="members/groupings/bulk-assignment/get-subgroups",this.filterBoxStarted=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,m.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,p.getUserLoginInfoCookie)()],this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGroups(),yield this.getSubGroups(),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){return i.html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}<br />
      </div>
      <div class="block my-1">
        ${this.table}
      </div>
    `}renderMemberInfo(e,t,n){if(1===n.accountType){const e=y.Convert.toMembershipUserModel(JSON.stringify(n)),t=(0,c.base64Encode)(String(e.id),!0);return`\n        <div class="flex flex-col whitespace-normal justify-between content-between">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""\n              click-to-open="${this.memberProfileBaseUrl}${t}" type="member"\n              url="${e.profilePicture}" size="32"></user-profile-photo>\n          </div>\n          <div class="block m-1">\n            <span class="shadow p-1 block bg-white rounded text-dark">\n              <b>Name</b>: ${e.firstname} ${e.middlename} ${e.surname}\n            </span>\n          </div>\n        </div>\n      `}{const e=g.Convert.toMembershipOrganizationUserModel(JSON.stringify(n));return`\n        <div class="flex flex-col whitespace-normal justify-between content-between">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="false"\n              click-to-open="false" type="member"\n              url="${e.logo}" size="32"></user-profile-photo>\n          </div>\n          <div class="block m-1">\n            <span class="shadow p-1 block bg-white rounded text-dark">\n              <b>Org. Name</b>: ${e.organizationName}\n            </span>\n          </div>\n        </div>\n      `}}removeFromList(e,t,n){const r=n.id,o=(0,f.urlQueryParams)();return`\n      <div class="flex flex-col whitespace-normal justify-between content-between">\n        <mwc-button class="button warning" outlined delete-this-item="${"subGroupId"in o?Number(o.subGroupId):0}"\n        delete-item-member-id="${r}">\n          <mwc-icon class="mr-1">delete_forever</mwc-icon> Remove\n        </mwc-button>\n      </div>\n    `}get urlQueryString(){const e=(0,f.urlQueryParams)(),t="branchId",n="memberType",r="groupId",o="subGroupId";let s={};for(const i in e){let l=String(e[i]);i!==t&&i!==n&&i!==r&&i!==o||(s[i]=l)}if(!(t in s)){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),s.branchId=e}n in s||(s.memberType="1"),r in s||(this._groups.length>0?s.groupId=this._groups[0].id:s.groupId="0"),o in s||(this._subgroups.length>0?s.subGroupId=this._subgroups[0].id:s.subGroupId="0");let i=(0,f.urlQueryParamsJoin)(s);return 0===i.length?i:"&"+i}get filterForm(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);let t=i.html``;const n=(0,f.urlQueryParams)(),r="branchId",o="memberType",s="groupId",l="subGroupId";let c=1,a=e,u=null,d=null;for(const e in n){let t=String(n[e]);t=""===t?null:t,e===o&&(c=Number(t)),e===r&&(a=Number(t)),e===s&&(u=Number(t)),e===l&&(d=Number(t))}const p=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
            name="${r}" id="${r}"
            outlined required @change="${this.branchChange}">
            ${1===e?i.html`
              <mwc-list-item value="0">Select Branch</mwc-list-item>
              ${this._branches.map((e=>a===e.id?i.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
            `:i.html`
              ${this._branches.map((t=>{if(t.id===e)return i.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
            `}
          </mwc-select>
        </div>
      </div>`,m=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${c}" 
            name="${o}" id="${o}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,h=this._groups.map((e=>({id:e.id,name:e.group,isSelected:e.id===u?"true":"false",selected:e.id===u}))),b=this._subgroups.map((e=>({id:e.id,name:e.subgroup,isSelected:e.id===d?"true":"false",selected:e.id===d}))),y=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <mwc-select class="w-full" setSelectedGroupId label="Select Group"
            name="${s}" id="${s}"
            outlined required @change="${this.groupChange}">
            <mwc-list-item value="0">Select Group</mwc-list-item>
            ${h.map((e=>u===e.id?i.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,g=(i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="${s}" class="w-full" id="${s}" label="Select User Group" .options="${h}"
            outlined required @change="${this.groupChange}" >
          </select-input>
        </div>
      </div>`,i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="${l}" class="w-full" id="${l}" label="Select User Sub-Group" .options="${b}"
            outlined required >
          </select-input>
        </div>
      </div>`);return t=i.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${p} ${m} ${y} ${g}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,t}branchChange(e){return k(this,void 0,void 0,(function*(){const t=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value);this.selectedBranch=t,yield this.getGroups("?branchId="+t,t)}))}groupChange(e){return k(this,void 0,void 0,(function*(){const t=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value);yield this.getSubGroups("?groupId="+t+"&branchId="+this.selectedBranch,t)}))}get __tableHeaders(){return[{title:"Member"},{title:"Info"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Info"}]}get table(){let e=d.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const r=(0,p.getUserLoginInfoCookie)();return n.Authorization="Token "+r.token,i.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0))}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,r)=>t.renderMemberInfo(e,n,r),orderable:!0},{data:"inTime",render:(e,n,r)=>t.removeFromList(e,n,r),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return k(this,void 0,void 0,(function*(){e.aoData,t.deleteMemberFx()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells"],select:!0}}deleteMemberFx(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteMemberFromList(e)}))}))}deleteMemberFromList(e){return k(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item")),n=Number(e.currentTarget.getAttribute("delete-item-member-id"));yield(0,_.DELETE_MemberGroupingsSubGroupMember)(t,n)}))}getBranches(){return k(this,void 0,void 0,(function*(){const e=yield(0,b.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getClientMemberCategories(){return k(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._memberCategories=[...this._memberCategories,...t]}))}getGroups(e="",t=null){return k(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(this._groups=[],n in C)return void setTimeout((()=>{this._groups=C[n]}),500);const r=yield(0,v.GET_MemberGroupingsGroups)(null,e);let o=[];null===r?o.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===r.response.success&&"length"in r.response.data&&(o=r.response.data),this._groups=[...this._groups,...o],C[n]=this._groups}))}getSubGroups(e="",t=null){return k(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(this._subgroups=[],n in N)return void setTimeout((()=>{this._subgroups=N[n]}),500);const r=yield(0,w.GET_MemberGroupingsSubGroups)(null,e);let o=[];null===r?o.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===r.response.success&&"length"in r.response.data&&(o=r.response.data),this._subgroups=[...this._subgroups,...o],N[n]=this._subgroups}))}createRenderRoot(){return this}};x.styles=[i.css`
   :host { display: block; }
  `],S([(0,l.query)('[filter-section-context="btn"]'),j("design:type","function"==typeof(r=void 0!==u.Button&&u.Button)?r:Object)],x.prototype,"filterSectionContextBtn",void 0),S([(0,l.query)('[filter-section-context="container"]'),j("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],x.prototype,"filterSectionContextContainer",void 0),S([(0,l.query)('[make-general-posts="submit_filter_form"]'),j("design:type","function"==typeof(s="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?s:Object)],x.prototype,"filterSectionContextForm",void 0),S([(0,l.property)({type:Array}),j("design:type",Array)],x.prototype,"_memberCategories",void 0),S([(0,l.property)({type:Array}),j("design:type",Array)],x.prototype,"_activeBranchId",void 0),S([(0,l.property)({type:Number}),j("design:type",Number)],x.prototype,"_memberType",void 0),S([(0,l.property)({type:Number}),j("design:type",Number)],x.prototype,"selectedBranch",void 0),S([(0,l.property)({type:Array}),j("design:type",Array)],x.prototype,"_groups",void 0),S([(0,l.property)({type:Array}),j("design:type",Array)],x.prototype,"_subgroups",void 0),S([(0,l.property)({type:Array}),j("design:type",Array)],x.prototype,"_branches",void 0),S([(0,l.property)({type:Array}),j("design:type",Array)],x.prototype,"_userLoginInfo",void 0),S([(0,l.property)({type:String}),j("design:type",String)],x.prototype,"memberProfileBaseUrl",void 0),S([(0,l.property)({type:String}),j("design:type",String)],x.prototype,"datatablePathUrl",void 0),S([(0,l.property)({type:Boolean}),j("design:type",Boolean)],x.prototype,"filterBoxStarted",void 0),x=S([(0,l.customElement)("membership-groupings-bulk_assignment-subgroups-view"),j("design:paramtypes",[])],x)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_members_select-member-type_index_ts","src_assets_styles_views_attendance_clocking_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_clients_branches_-dc6079","shared"],(()=>(22465,e(e.s=22465)))),e.O())])}));
//# sourceMappingURL=subgroups.js.map