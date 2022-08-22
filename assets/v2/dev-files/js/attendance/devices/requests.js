"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/devices/requests"],{2746:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>p});var o=n(967),r=n(216);class s{static toClockingDeviceRequestFullModel(e){return a(JSON.parse(e),d("ClockingDeviceRequestFullModel"),l)}static clockingDeviceRequestFullModelToJson(e){return JSON.stringify(a(e,d("ClockingDeviceRequestFullModel"),c),null,2)}}function i(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function l(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function c(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=p[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:i(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return a(t,o,n)}catch(e){}}return i(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,n))):i("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return i("object",o);const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[s.key]=a(i,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=a(o[s],t,n,s))})),r}(n(t),t.additional,e):i(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?i("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:i(e,t,o)}(t,e)}}function u(...e){return{unionMembers:e}}function d(e){return{ref:e}}const p={ClockingDeviceRequestFullModel:(f=[{json:"id",js:"id",typ:u(null,0)},{json:"clientId",js:"clientID",typ:u(null,d("ClientInfoModel"))},{json:"memberId",js:"memberID",typ:u(null,0)},{json:"memberInfo",js:"memberInfo",typ:u(null,d("MembershipUserModel"))},{json:"memberAccountType",js:"memberAccountType",typ:u(null,0)},{json:"systemDevice",js:"systemDevice",typ:u(null,0)},{json:"deviceType",js:"deviceType",typ:u(null,"")},{json:"deviceId",js:"deviceID",typ:u(null,"")},{json:"approved",js:"approved",typ:u(null,!0)},{json:"approvedBy",js:"approvedBy",typ:u(null,0)},{json:"creationDate",js:"creationDate",typ:u(null,Date)}],!1,{props:f,additional:false}),ClientInfoModel:o.typeMap.ClientInfoModel,MembershipUserModel:r.typeMap.MembershipUserModel};var f},967:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>p});var o=n(2761),r=n(5102);class s{static toClientInfoModel(e){return a(JSON.parse(e),d("ClientInfoModel"),l)}static clientInfoModelToJson(e){return JSON.stringify(a(e,d("ClientInfoModel"),c),null,2)}}function i(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function l(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function c(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=p[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:i(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return a(t,o,n)}catch(e){}}return i(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,n))):i("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return i("object",o);const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[s.key]=a(i,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=a(o[s],t,n,s))})),r}(n(t),t.additional,e):i(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?i("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:i(e,t,o)}(t,e)}}function u(...e){return{unionMembers:e}}function d(e){return{ref:e}}const p={ClientInfoModel:(f=[{json:"id",js:"id",typ:u(null,0)},{json:"name",js:"name",typ:u(null,"")},{json:"accountType",js:"accountType",typ:u(null,0)},{json:"country",js:"country",typ:u(null,"")},{json:"stateProvince",js:"stateProvince",typ:u(null,"")},{json:"applicantFirstname",js:"applicantFirstname",typ:u(null,"")},{json:"applicantSurname",js:"applicantSurname",typ:u(null,"")},{json:"applicantGender",js:"applicantGender",typ:u(null,0)},{json:"applicantPhone",js:"applicantPhone",typ:u(null,"")},{json:"applicantEmail",js:"applicantEmail",typ:u(null,"")},{json:"applicantDesignationRole",js:"applicantDesignationRole",typ:u(null,0)},{json:"region",js:"region",typ:u(null,0)},{json:"district",js:"district",typ:u(null,0)},{json:"constituency",js:"constituency",typ:u(null,0)},{json:"community",js:"community",typ:u(null,"")},{json:"subscriptionDuration",js:"subscriptionDuration",typ:u(null,"")},{json:"subscriptionDate",js:"subscriptionDate",typ:u(null,Date)},{json:"subscriptionFee",js:"subscriptionFee",typ:u(null,"")},{json:"logo",js:"logo",typ:u(null,"")},{json:"status",js:"status",typ:u(null,0)},{json:"archive",js:"archive",typ:u(null,0)},{json:"accountCategory",js:"accountCategory",typ:u(null,d("ClientAccountCategoryModel"))},{json:"website",js:"website",typ:u(null,null)},{json:"creationDate",js:"creationDate",typ:u(null,Date)},{json:"updatedBy",js:"updatedBy",typ:u(null,0)},{json:"updateDate",js:"updateDate",typ:u(null,Date)},{json:"countryInfo",js:"countryInfo",typ:u(null,(y=d("LocationCountryModel"),{arrayItems:y}))}],!1,{props:f,additional:false}),LocationCountryModel:o.typeMap.LocationCountryModel,ClientAccountCategoryModel:r.typeMap.ClientAccountCategoryModel};var f,y},216:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o,typeMap:()=>a});class o{static toMembershipUserModel(e){return l(JSON.parse(e),c("MembershipUserModel"),s)}static membershipUserAltIToJson(e){return JSON.stringify(l(e,c("MembershipUserModel"),i),null,2)}}function r(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,n,o=""){if(console.log({key:o,val:e,typ:t}),"any"===t)return e;if(null===t&&null===e)return e;if(!1===t)return r(t,e);for(;"object"==typeof t&&void 0!==t.ref;)t=a[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:r(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return l(t,o,n)}catch(e){}}return r(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,n))):r("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return r("object",o);const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[r.key]=l(i,r.typ,n,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(s[r]=l(o[r],t,n,r))})),s}(n(t),t.additional,e):r(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?r("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:r(e,t,o)}(t,e)}function c(e){return{ref:e}}const a={MembershipUserModel:(u=[{json:"id",js:"id",typ:0},{json:"clientId",js:"clientId",typ:0},{json:"firstname",js:"firstname",typ:""},{json:"middlename",js:"middlename",typ:{unionMembers:[null,""]}},{json:"surname",js:"surname",typ:""},{json:"gender",js:"gender",typ:0},{json:"profilePicture",js:"profilePicture",typ:""},{json:"phone",js:"phone",typ:""},{json:"email",js:"email",typ:""},{json:"dateOfBirth",js:"dateOfBirth",typ:Date},{json:"religion",js:"religion",typ:0},{json:"nationality",js:"nationality",typ:""},{json:"countryOfResidence",js:"countryOfResidence",typ:""},{json:"stateProvince",js:"stateProvince",typ:""},{json:"region",js:"region",typ:0},{json:"district",js:"district",typ:0},{json:"constituency",js:"constituency",typ:0},{json:"electoralArea",js:"electoralArea",typ:0},{json:"community",js:"community",typ:""},{json:"hometown",js:"hometown",typ:""},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:""},{json:"digitalAddress",js:"digitalAddress",typ:""},{json:"level",js:"level",typ:0},{json:"status",js:"status",typ:0},{json:"accountType",js:"accountType",typ:0},{json:"memberType",js:"memberType",typ:0},{json:"date",js:"date",typ:Date},{json:"last_login",js:"last_login",typ:Date},{json:"referenceId",js:"referenceId",typ:""},{json:"branchId",js:"branchId",typ:0}],!1,{props:u,additional:false})};var u},1453:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceClockingDeviceRequest:()=>d});var o=n(6455),r=n.n(o),s=n(8485),i=n(7270),l=n(4492),c=n(8967),a=n(3600),u=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};function d(e){return u(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/clocking-device/request/"+e,o={};return r().fire({title:"Remove User Device?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new l.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6713:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingDeviceRequest:()=>d});var o=n(6455),r=n.n(o),s=n(8485),i=n(7270),l=n(4492),c=n(8967),a=n(3600),u=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};function d(e){return u(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/clocking-device/request/approve-request/"+e,o={};return r().fire({title:"Approve Device?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},9729:(e,t,n)=>{n.r(t),n.d(t,{AttendanceDeviceRequests:()=>S}),n(5501);var o,r,s,i=n(5862),l=n(9662),c=n(3283),a=(n(1511),n(3690),n(1854),n(6948),n(6883),n(367),n(5866),n(8281),n(4672)),u=n(8485),d=n(3600),p=n(2368),f=n(6277),y=n(2351),m=n(2813),h=n(1453),v=n(6713),j=n(2746),b=n(6951),g=function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};let S=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this._userDeviceSettings=[],this.startSearchPage=0,this.filterBoxStarted=!1,this.memberProfileBaseUrl="/member/member-profile?view=",this.datatablePathUrl="attendance/clocking-device/request"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new p.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}))}disconnectedCallback(){}render(){return null===this._userDeviceSettings?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._userDeviceSettings?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Device Settings </span>: undefined error</h4>
          </div>
        </div>
      `:i.html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1" filter-section-context="btn"
          @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1 overflow-x-scroll">
        <hr class="my-2" />
        ${this.table}
      </div>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new p.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0))}))}get filterForm(){let e=i.html``;const t=(0,a.urlQueryParams)(),n="memberId";let o=null,r={};const s=(0,d.getUserLoginInfoCookie)();r.Authorization="Token "+s.token;for(const e in t){let r=String(t[e]);r=""===r?null:r,e===n&&(o=r)}const l=i.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
        ${(0,y.show_selection_member_id_filter)(Number(o))}
        <select-input class="w-100" id="${n}" name="${n}"
          label="Select Member" .ajaxFetchProcessResponse="${this.processClientUserSearch}"
          startSearchPage="${this.startSearchPage}" .ajaxHeader="${r}"
          .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;return e=i.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
  <div class="container">
    <div class="row">
      ${l}
      <div class="col-xl-12 col-md-10">
        <div class="form-input-container mt-1">
          <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
          <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
        </div>
      </div>
    </div>
  </div>
  </div>
</form>`,e}processClientUserSearch(e,t){var n;t.page=t.page||0;const o=e.count,r=e.results,s=document.querySelector('[id="memberId"]');let i=[];if(o>0){var l=r;for(let e=0;e<l.length;e++){const t=l[e],o=m.Convert.toMembershipUserModel(JSON.stringify(t)),r={id:o.id,text:`${o.firstname} ${null!==(n=o.middlename)&&void 0!==n?n:""} ${o.surname}`};i.includes(r)||i.push(r)}}return console.log({processedData:i}),{results:i,total:o,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"User"},{title:"Device Info"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"User"},{title:"Device Info"}]}get table(){let e=u.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,d.getUserLoginInfoCookie)();return n.Authorization="Token "+o.token,i.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberID,r=n.memberInfo;return this.dialog(),`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex items-center whitespace-normal">\n            <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${o}" type="member"\n              url="${r.profilePicture}" size="16"></user-profile-photo>\n            <p class="ml-1">${r.firstname} ${r.middlename} ${r.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderDeviceInfo(e,t,n){const o=j.Convert.toClockingDeviceRequestFullModel(JSON.stringify(n));console.log({userDeviceInfo:o});const r=(0,b.getDateTime)(o.creationDate,{dateStyle:"medium",timeStyle:"short"});let s="";return o.approved||(s=`<mwc-icon-button class="mr-1 success" icon="check" \n        approve-this-item="${o.id}" >\n      </mwc-icon-button>`),`\n      <div class="justify-center content-center">\n        <div class="whitespace-nowrap my-1 flex">\n          ${s}\n          <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n            delete-this-item="${o.id}" >\n          </mwc-icon-button>\n        </div>\n        <div class="whitespace-nowrap my-1">\n          ${this.view_device_info(o)}\n          <mwc-button class="button info" outlined open-dialog-btn="summary-records-${o.id}">\n            <mwc-icon>devices_other</mwc-icon> Info\n          </mwc-button>\n        </div>\n        <div class="whitespace-nowrap my-1">\n          ${r}\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,a.urlQueryParams)();let t={};for(const n in e){let o=String(e[n]);"memberId"!==n&&"connectionId"!==n||(t[n]=o)}let n=(0,a.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderDeviceInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return w(this,void 0,void 0,(function*(){e.aoData,t.deleteUserDeviceInfo(),t.approveUserDeviceInfo()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}deleteUserDeviceInfo(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteDeviceInfo(e)}))}))}approveUserDeviceInfo(){document.querySelectorAll("[approve-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.approveDeviceInfo(e)}))}))}view_device_info(e){const t=e.memberID,n=e.memberInfo;return`\n      <mwc-dialog open-this-dialog="summary-records-${e.id}" heading="Summary Records">\n        <div class="flex flex-col m-1 justify-evenly whitespace-normal">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"\n              url="${n.profilePicture}" size="32"></user-profile-photo>\n          </div>\n          <div class="flex flex-col m-1 justify-evenly">\n            <h3 class="whitespace-nowrap font-bold text-lg">${n.firstname} ${n.middlename} ${n.surname}</h3>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">System</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${(0,f.clockingSystemDeviceName)(e.systemDevice)}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Device ID:</h6>\n              <p class="whitespace-nowrap text-sm ml-1" style="text-overflow: ellipsis;overflow: hidden;width: 115px;">${e.deviceID}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Device Type:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.deviceType}</p>\n            </div>\n          </div>\n        </div>\n        <mwc-button\n          slot="secondaryAction"\n          dialogAction="close">\n          Cancel\n        </mwc-button>\n      </mwc-dialog>\n    `}deleteDeviceInfo(e){return w(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.DELETE_AttendanceClockingDeviceRequest)(t)}))}approveDeviceInfo(e){return w(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("approve-this-item"));yield(0,v.PATCH_AttendanceClockingDeviceRequest)(t)}))}dialog(){document.querySelectorAll("[open-dialog-btn]").forEach((e=>{e.addEventListener("click",(e=>{this.showDialog(e)}))}))}showDialog(e){console.log({event:e});const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}createRenderRoot(){return this}};S.styles=[i.css`
   :host { display: block; }
  `],g([(0,l.property)({type:Number}),_("design:type",Number)],S.prototype,"CLIENT_ID",void 0),g([(0,l.query)('[filter-section-context="btn"]'),_("design:type","function"==typeof(o=void 0!==c.Button&&c.Button)?o:Object)],S.prototype,"filterSectionContextBtn",void 0),g([(0,l.query)('[filter-section-context="container"]'),_("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],S.prototype,"filterSectionContextContainer",void 0),g([(0,l.query)('[make-general-posts="submit_filter_form"]'),_("design:type","function"==typeof(s="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?s:Object)],S.prototype,"filterSectionContextForm",void 0),g([(0,l.property)({type:Array}),_("design:type",Array)],S.prototype,"_userDeviceSettings",void 0),g([(0,l.property)({type:Number}),_("design:type",Number)],S.prototype,"startSearchPage",void 0),g([(0,l.property)({type:Boolean}),_("design:type",Boolean)],S.prototype,"filterBoxStarted",void 0),g([(0,l.property)({type:String}),_("design:type",String)],S.prototype,"memberProfileBaseUrl",void 0),g([(0,l.property)({type:String}),_("design:type",String)],S.prototype,"datatablePathUrl",void 0),S=g([(0,l.customElement)("attendance-device-requests"),_("design:paramtypes",[])],S)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_widget_simple-table_main_scss","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_connections_members_and_connections_view_members_ts","src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_date_time_index_ts-fddc35","src_addons_interfaces_clients_account_category_index_ts-src_addons_interfaces_location_countr-81861f","shared"],(()=>(9729,e(e.s=9729)))),e.O())])}));
//# sourceMappingURL=requests.js.map