"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/devices/settings"],{6188:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceClockingDeviceSettings:()=>m});var o=n(6455),s=n.n(o),r=n(8485),i=n(7270),l=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/clocking-device/settings/"+e,o={};return s().fire({title:"Remove User Device?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new l.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8213:(e,t,n)=>{n.r(t),n.d(t,{AttendanceDeviceSettings:()=>w}),n(5501);var o,s,r,i=n(5862),l=n(9662),c=n(3283),a=(n(1511),n(3690),n(1854),n(6948),n(6883),n(367),n(5866),n(8281),n(4672)),d=n(8485),m=n(3600),f=n(2368),u=n(6277),p=n(2351),h=n(2813),v=n(6188),b=n(6951),_=function(e,t,n,o){var s,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};let w=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this._userDeviceSettings=[],this.startSearchPage=0,this.filterBoxStarted=!1,this.memberProfileBaseUrl="/member/member-profile?view=",this.datatablePathUrl="attendance/clocking-device/settings"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new f.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}))}disconnectedCallback(){}render(){return null===this._userDeviceSettings?i.html`
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
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new f.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0))}))}get filterForm(){let e=i.html``;const t=(0,a.urlQueryParams)(),n="memberId";let o=null,s={};const r=(0,m.getUserLoginInfoCookie)();s.Authorization="Token "+r.token;for(const e in t){let s=String(t[e]);s=""===s?null:s,e===n&&(o=s)}const l=i.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
        ${(0,p.show_selection_member_id_filter)(Number(o))}
        <select-input class="w-100" id="${n}" name="${n}"
          label="Select Member" .ajaxFetchProcessResponse="${this.processClientUserSearch}"
          startSearchPage="${this.startSearchPage}" .ajaxHeader="${s}"
          .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${d.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
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
</form>`,e}processClientUserSearch(e,t){var n;t.page=t.page||0;const o=e.count,s=e.results,r=document.querySelector('[id="memberId"]');let i=[];if(o>0){var l=s;for(let e=0;e<l.length;e++){const t=l[e],o=h.Convert.toMembershipUserModel(JSON.stringify(t)),s={id:o.id,text:`${o.firstname} ${null!==(n=o.middlename)&&void 0!==n?n:""} ${o.surname}`};i.includes(s)||i.push(s)}}return console.log({processedData:i}),{results:i,total:o,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"User"},{title:"Device Info"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"User"},{title:"Device Info"}]}get table(){let e=d.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,m.getUserLoginInfoCookie)();return n.Authorization="Token "+o.token,i.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberId,s=n.memberInfo;return this.dialog(),`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex items-center whitespace-normal">\n            <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${o}" type="member"\n              url="${s.profilePicture}" size="16"></user-profile-photo>\n            <p class="ml-1">${s.firstname} ${s.middlename} ${s.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderDeviceInfo(e,t,n){const o=(0,b.getDateTime)(n.creationDate,{dateStyle:"medium",timeStyle:"short"});return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="whitespace-nowrap my-1">\n          ${this.view_device_info(n)}\n          <mwc-button class="button info" outlined open-dialog-btn="summary-records-${n.id}">\n            <mwc-icon>devices_other</mwc-icon> Info\n          </mwc-button>\n        </div>\n        <div class="whitespace-nowrap my-1">\n          ${o}\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,a.urlQueryParams)();let t={};for(const n in e){let o=String(e[n]);"memberId"!==n&&"connectionId"!==n||(t[n]=o)}let n=(0,a.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderDeviceInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return g(this,void 0,void 0,(function*(){e.aoData,t.deleteUserDeviceInfo()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}deleteUserDeviceInfo(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteDeviceInfo(e)}))}))}view_device_info(e){const t=e.memberId,n=e.memberInfo;return`\n      <mwc-dialog open-this-dialog="summary-records-${e.id}" heading="Summary Records">\n        <div class="flex flex-col m-1 justify-evenly whitespace-normal">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"\n              url="${n.profilePicture}" size="32"></user-profile-photo>\n          </div>\n          <div class="flex flex-col m-1 justify-evenly">\n            <h3 class="whitespace-nowrap font-bold text-lg">${n.firstname} ${n.middlename} ${n.surname}</h3>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">System</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${(0,u.clockingSystemDeviceName)(e.systemDevice)}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Device ID:</h6>\n              <p class="whitespace-nowrap text-sm ml-1" style="text-overflow: ellipsis;overflow: hidden;width: 115px;">${e.deviceId}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Device Type:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.deviceType}</p>\n            </div>\n          </div>\n        </div>\n        <mwc-button\n          slot="secondaryAction"\n          dialogAction="close">\n          Cancel\n        </mwc-button>\n      </mwc-dialog>\n    `}deleteDeviceInfo(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,v.DELETE_AttendanceClockingDeviceSettings)(t)}))}dialog(){document.querySelectorAll("[open-dialog-btn]").forEach((e=>{e.addEventListener("click",(e=>{this.showDialog(e)}))}))}showDialog(e){console.log({event:e});const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}createRenderRoot(){return this}};w.styles=[i.css`
   :host { display: block; }
  `],_([(0,l.property)({type:Number}),y("design:type",Number)],w.prototype,"CLIENT_ID",void 0),_([(0,l.query)('[filter-section-context="btn"]'),y("design:type","function"==typeof(o=void 0!==c.Button&&c.Button)?o:Object)],w.prototype,"filterSectionContextBtn",void 0),_([(0,l.query)('[filter-section-context="container"]'),y("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],w.prototype,"filterSectionContextContainer",void 0),_([(0,l.query)('[make-general-posts="submit_filter_form"]'),y("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],w.prototype,"filterSectionContextForm",void 0),_([(0,l.property)({type:Array}),y("design:type",Array)],w.prototype,"_userDeviceSettings",void 0),_([(0,l.property)({type:Number}),y("design:type",Number)],w.prototype,"startSearchPage",void 0),_([(0,l.property)({type:Boolean}),y("design:type",Boolean)],w.prototype,"filterBoxStarted",void 0),_([(0,l.property)({type:String}),y("design:type",String)],w.prototype,"memberProfileBaseUrl",void 0),_([(0,l.property)({type:String}),y("design:type",String)],w.prototype,"datatablePathUrl",void 0),w=_([(0,l.customElement)("attendance-device-settings"),y("design:paramtypes",[])],w)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_widget_simple-table_main_scss","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_connections_members_and_connections_view_members_ts","src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_date_time_index_ts-fddc35","shared"],(()=>(8213,e(e.s=8213)))),e.O())])}));
//# sourceMappingURL=settings.js.map