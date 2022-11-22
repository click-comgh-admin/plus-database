"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/absent-leave/assignment/add"],{95358:(e,t,n)=>{n.r(t)},17725:(e,t,n)=>{n.r(t),n.d(t,{setActiveBranchIdCookie:()=>i,removeActiveBranchIdCookie:()=>c,getActiveBranchIdCookie:()=>l});var s=n(67052),r=n(21942),o=n(61489);const a="pdb-active-branch",i=e=>{const t=JSON.stringify(e);(0,r.set_cookies)(a,"",-1),(0,r.set_cookies)(a,(0,s.base64Encode)(t),3500)};function c(){(0,r.set_cookies)(a,"",-1)}const l=()=>{if(""===(0,r.get_cookie)(a))return null;{const e=(0,s.base64Decode)((0,r.get_cookie)(a)),t=JSON.parse(e);return(0,o.clientBranchInfo_S)(t)}}},37141:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>u});class s{static toAttendanceAbsentLeaveStatusModel(e){return i(JSON.parse(e),l("AttendanceAbsentLeaveStatusModel"),o)}static attendanceAbsentLeaveStatusModelToJson(e){return JSON.stringify(i(e,l("AttendanceAbsentLeaveStatusModel"),a),null,2)}}function r(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:r(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let r=0;r<s;r++){const s=e[r];try{return i(t,s,n)}catch(e){}}return r(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>i(t,e,n))):r("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return r("object",s);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],a=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;o[r.key]=i(a,r.typ,n,r.key)})),Object.getOwnPropertyNames(s).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(o[r]=i(s[r],t,n,r))})),o}(n(t),t.additional,e):r(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?r("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:r(e,t,s)}(t,e)}}function c(...e){return{unionMembers:e}}function l(e){return{ref:e}}const u={AttendanceAbsentLeaveStatusModel:(d=[{json:"id",js:"id",typ:c(null,0)},{json:"clientId",js:"clientID",typ:c(null,0)},{json:"branchId",js:"branchID",typ:c(null,0)},{json:"status",js:"status",typ:c(null,"")},{json:"date",js:"date",typ:c(null,Date)}],!1,{props:d,additional:false})};var d},15216:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>l});class s{static toMembershipUserModel(e){return i(JSON.parse(e),c("MembershipUserModel"),o)}static membershipUserAltIToJson(e){return JSON.stringify(i(e,c("MembershipUserModel"),a),null,2)}}function r(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1===t)return r(t,e);for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:r(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let r=0;r<s;r++){const s=e[r];try{return i(t,s,n)}catch(e){}}return r(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>i(t,e,n))):r("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return r("object",s);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],a=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;o[r.key]=i(a,r.typ,n,r.key)})),Object.getOwnPropertyNames(s).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(o[r]=i(s[r],t,n,r))})),o}(n(t),t.additional,e):r(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?r("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:r(e,t,s)}(t,e)}function c(e){return{ref:e}}const l={MembershipUserModel:(u=[{json:"id",js:"id",typ:0},{json:"clientId",js:"clientId",typ:0},{json:"firstname",js:"firstname",typ:""},{json:"middlename",js:"middlename",typ:{unionMembers:[null,""]}},{json:"surname",js:"surname",typ:""},{json:"gender",js:"gender",typ:0},{json:"profilePicture",js:"profilePicture",typ:""},{json:"phone",js:"phone",typ:""},{json:"email",js:"email",typ:""},{json:"dateOfBirth",js:"dateOfBirth",typ:Date},{json:"religion",js:"religion",typ:0},{json:"nationality",js:"nationality",typ:""},{json:"countryOfResidence",js:"countryOfResidence",typ:""},{json:"stateProvince",js:"stateProvince",typ:""},{json:"region",js:"region",typ:0},{json:"district",js:"district",typ:0},{json:"constituency",js:"constituency",typ:0},{json:"electoralArea",js:"electoralArea",typ:0},{json:"community",js:"community",typ:""},{json:"hometown",js:"hometown",typ:""},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:""},{json:"digitalAddress",js:"digitalAddress",typ:""},{json:"level",js:"level",typ:0},{json:"status",js:"status",typ:0},{json:"accountType",js:"accountType",typ:0},{json:"memberType",js:"memberType",typ:0},{json:"date",js:"date",typ:Date},{json:"last_login",js:"last_login",typ:Date},{json:"referenceId",js:"referenceId",typ:""},{json:"branchId",js:"branchId",typ:0}],!1,{props:u,additional:false})};var u},4129:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAbsentLeaveAssignment:()=>d});var s=n(86455),r=n.n(s),o=n(48485),a=n(87270),i=n(33600),c=n(14492),l=n(8967),u=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};function d(){return u(this,void 0,void 0,(function*(){const e=(0,i.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/bulk",n=document.querySelector('[make-general-posts="attendance-absent-leave-assignment"]'),s=new FormData(n);return r().fire({title:"Create Assignment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>u(this,void 0,void 0,(function*(){return yield(0,a.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},45524:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceAbsentLeaveStatus:()=>i});var s=n(48485),r=n(87270),o=n(33600),a=n(14492);function i(e=null,t=""){return n=this,i=void 0,l=function*(){const n=(0,o.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,r)}o((l=l.apply(n,i||[])).next())}));var n,i,c,l}},26224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>i});var s=n(48485),r=n(87270),o=n(14492),a=n(33600);function i(e=null){return t=this,n=void 0,c=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),i=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{a(c.next(e))}catch(e){s(e)}}function o(e){try{a(c.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}a((c=c.apply(t,n||[])).next())}));var t,n,i,c}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>i});var s=n(48485),r=n(87270),o=n(14492),a=n(33600);function i(e=null,t=""){return n=this,i=void 0,l=function*(){const n=(0,a.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,r)}o((l=l.apply(n,i||[])).next())}));var n,i,c,l}},40504:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveAssignmentAdd:()=>S}),n(95358);var s=n(85862),r=n(59662),o=(n(33590),n(40789),n(23283),n(63313),n(36034),n(75866),n(33600)),a=n(17725),i=n(26224),c=n(37141),l=n(45524),u=n(48485),d=n(15216),p=n(18530),m=n(4129),h=n(2892),f=function(e,t,n,s){var r,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};let v={},b={},S=class extends s.LitElement{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.selectedGroup=0,this._userLoginInfo=null,this._activeBranchId=null,this._branches=[],this._groups=[],this._statuses=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getGroups(),yield this.getBranches(),yield this.getStatuses()}))}disconnectedCallback(){}render(){let e=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),s.html`
    <div class="form-container flex justify-center">
      <div class="app-container- !px-0">
        <div class="app-container--row !px-0">
          <div class="app-container--col-md-12">
            <header class="header warning app-container--col-md-12">
              <label for="" class="label">
                <mwc-icon class="icon">format_strikethrough</mwc-icon>
                <h1 class="h1 !text-red-400">New Assignment</h1>
                <h3 class="h3">Create Assignment!</h3>
              </label>
            </header>
            <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-assignment" enctype="multipart/form-data">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Account Type</h4>
                  <mwc-select class="w-full" label="Select Account Type"
                    name="accountType" id="accountType" @change="${this.accountTypeChange}"
                    outlined required>
                    <mwc-list-item value="0" selected>Select Account Type</mwc-list-item>
                    <mwc-list-item value="1">User Account </mwc-list-item>
                    <mwc-list-item value="2">User Account (From Group) </mwc-list-item>
                    <mwc-list-item value="3">Organization Account</mwc-list-item>
                    <mwc-list-item value="4">Organization Account (From Group)</mwc-list-item>
                  </mwc-select>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Branch</h4>
                  <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                    name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                    ${1===e?s.html`
                      <mwc-list-item value="0">Select Branch</mwc-list-item>
                      ${this._branches.map((t=>e===t.id?s.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:s.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    `:s.html`
                      ${this._branches.map((t=>{if(t.id===e)return s.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
                    `}
                  </mwc-select>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">Select Status</h4>
                  <mwc-select class="w-full" setSelectedStatusId label="Select Status"
                    name="statusId" id="statusId" outlined required>
                    <mwc-list-item value="0">Select Status</mwc-list-item>
                    ${this._statuses.map((e=>s.html`<mwc-list-item value="${e.id}">${e.status}</mwc-list-item>`))}
                  </mwc-select>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">From - Date</h4>
                  <mwc-textfield name="fromDate" type="date" class="w-full" id="fromDate" label="Select From - Date"
                    value="" outlined required>
                  </mwc-textfield>
                </div>
                <div class="col-md-6 col-lg-6">
                  <h4 class="font-semibold my-2">To - Date</h4>
                  <mwc-textfield name="toDate" type="date" class="w-full" id="toDate" label="Select To - Date"
                    value="" outlined required>
                  </mwc-textfield>
                </div>
                ${this.memberListField}
                <div class="col-md-12 col-lg-12">
                  <h4 class="font-semibold my-2">
                    Reason <span class="text-yellow-400">[optional]</span>
                  </h4>
                  <mwc-textarea class="h-96" outlined name="reason" id="reason"
                    label="Enter Reason [optional]" placeholder="Enter Reason [optional]">
                  </mwc-textarea>
                </div>
              </div>
    
              <div class="form-input-container">
                <mwc-button label="Create" raised class="w-full" @click="${this.submitForm}">
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
    `}branchChange(e){return g(this,void 0,void 0,(function*(){const t=this.accountType;this.accountType=0,this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value),setTimeout((()=>{this.accountType=t}),500),Number.isNaN(this.selectedBranch)||(yield this.getStatuses(`?branchId=${this.selectedBranch}`,this.selectedBranch),yield this.getGroups("?branchId="+this.selectedBranch,this.selectedBranch))}))}accountTypeChange(e){this.accountType=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}groupChanged(e){this.selectedGroup=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}get memberListField(){return 0===Number(this.accountType)?"...":1===Number(this.accountType)?this.individualMemberList:2===Number(this.accountType)?this.individualGroupMemberList:3===Number(this.accountType)?this.organizationMemberList:this.organizationGroupMemberList}get individualMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`<div class="col-md-12 col-lg-12">
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${function(e,t){var n;t.page=t.page||0;const s=e.count,r=e.results,o=document.querySelector('[id="memberIds"]');let a=[];if(s>0){var i=r;for(let e=0;e<i.length;e++){const t=i[e],s=d.Convert.toMembershipUserModel(JSON.stringify(t)),r={id:s.id,text:`${s.firstname} ${null!==(n=s.middlename)&&void 0!==n?n:""} ${s.surname}`};a.includes(r)||a.push(r)}}return{results:a,total:s,totalShowing:o.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>
    `}get individualGroupMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select Group</h4>
        ${this.groupField}
      </div>
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select User</h4>
        <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
          .ajaxFetchProcessResponse="${function(e,t){var n;t.page=t.page||0;const s=e.count,r=e.results,o=document.querySelector('[id="memberIds"]');let a=[];if(s>0){var i=r;for(let e=0;e<i.length;e++){const t=i[e],s=d.Convert.toMembershipUserModel(JSON.stringify(t)),r={id:s.id,text:`${s.firstname} ${null!==(n=s.middlename)&&void 0!==n?n:""} ${s.surname}`};a.includes(r)||a.push(r)}}return{results:a,total:s,totalShowing:o.totalShowing}}}" startSearchPage="${this.startSearchPage}"
          .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>
    `}get organizationMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`<div class="col-md-12 col-lg-12">
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const n=e.count,s=e.results,r=document.querySelector('[id="memberIds"]');let o=[];if(n>0){var a=s;for(let e=0;e<a.length;e++){const t=a[e],n=p.Convert.toMembershipOrganizationUserModel(JSON.stringify(t)),s={id:n.id,text:`${n.organizationName}`};o.includes(s)||o.push(s)}}return{results:o,total:n,totalShowing:r.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
      </div>
    `}get organizationGroupMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select Group</h4>
        ${this.groupField}
      </div>
      <div class="col-md-6 col-lg-6">
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const n=e.count,s=e.results,r=document.querySelector('[id="memberIds"]');let o=[];if(n>0){var a=s;for(let e=0;e<a.length;e++){const t=a[e],n=p.Convert.toMembershipOrganizationUserModel(JSON.stringify(t)),s={id:n.id,text:`${n.organizationName}`};o.includes(s)||o.push(s)}}return{results:o,total:n,totalShowing:r.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
      </div>
    `}get groupField(){const e=this._groups.map((e=>({id:e.id,name:e.group,isSelected:"false",selected:!1})));return s.html`
      <mwc-select class="w-full" setSelectedGroupId label="Select Group" name="groupId"
        id="groupId" @change="${this.groupChanged}" outlined required>
        <mwc-list-item value="0">Select Group</mwc-list-item>
        ${e.map((e=>s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
        
      </mwc-select>
    `}get ajaxFetchUrlParams(){return 1===Number(this.accountType)||3===Number(this.accountType)?[{param:"branchId",value:String(this.selectedBranch)}]:[{param:"branchId",value:String(this.selectedBranch)},{param:"groupId",value:String(this.selectedGroup)}]}firstUpdated(){}getBranches(){return g(this,void 0,void 0,(function*(){const e=yield(0,i.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}getStatuses(e="",t=null){return g(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(this._statuses=[],n in b)return void setTimeout((()=>{this._statuses=b[n]}),500);const s=yield(0,l.GET_AttendanceAbsentLeaveStatus)(null,e);let r=[];null===s?r.push({id:0,status:"**NOT FOUND**",date:new Date}):!0===s.response.success&&"length"in s.response.data&&(r=s.response.data.map((e=>c.Convert.toAttendanceAbsentLeaveStatusModel(JSON.stringify(e))))),this._statuses=[...this._statuses,...r],b[n]=this._statuses}))}getGroups(e="",t=null){return g(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(this._groups=[],n in v)return void setTimeout((()=>{this._groups=v[n]}),500);const s=yield(0,h.GET_MemberGroupingsGroups)(null,e);let r=[];null===s?r.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===s.response.success&&"length"in s.response.data&&(r=s.response.data),this._groups=[...this._groups,...r],v[n]=this._groups}))}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.POST_AttendanceAbsentLeaveAssignment)()}))}createRenderRoot(){return this}};S.styles=[s.css`
   :host { display: block; }
  `],f([(0,r.property)({type:Number}),y("design:type",Number)],S.prototype,"startSearchPage",void 0),f([(0,r.property)({type:Number}),y("design:type",Number)],S.prototype,"accountType",void 0),f([(0,r.property)({type:Number}),y("design:type",Number)],S.prototype,"selectedBranch",void 0),f([(0,r.property)({type:Number}),y("design:type",Number)],S.prototype,"selectedGroup",void 0),f([(0,r.property)({type:Array}),y("design:type",Array)],S.prototype,"_userLoginInfo",void 0),f([(0,r.property)({type:Array}),y("design:type",Array)],S.prototype,"_activeBranchId",void 0),f([(0,r.property)({type:Array}),y("design:type",Array)],S.prototype,"_branches",void 0),f([(0,r.property)({type:Array}),y("design:type",Array)],S.prototype,"_groups",void 0),f([(0,r.property)({type:Array}),y("design:type",Array)],S.prototype,"_statuses",void 0),S=f([(0,r.customElement)("attendance-absent-leave-assignment-add"),y("design:paramtypes",[])],S)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_clients_branches_-dc6079","src_assets_styles_views_admin_register_main_scss","shared"],(()=>(40504,e(e.s=40504)))),e.O())])}));
//# sourceMappingURL=add.js.map