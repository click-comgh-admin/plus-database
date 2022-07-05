"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_membership_connections_accounts_add_ts-src_view_membership_connections_accounts_view_ts"],{9579:(e,t,n)=>{n.r(t)},6660:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},9194:(e,t,n)=>{function o(e){return{id:Number(e.id),type:String(e.type),clientId:Number(e.clientId),description:String(e.description),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),lastUpdatedBy:Number(e.lastUpdatedBy),lastUpdateDate:new Date(e.lastUpdateDate)}}n.r(t),n.d(t,{UserConnectionType_S:()=>o})},8879:(e,t,n)=>{n.r(t),n.d(t,{DELETE_UserConnectionAccount:()=>u});var o=n(6455),r=n.n(o),s=n(8485),c=n(7270),i=n(4492),a=n(8967),l=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function c(e){try{a(o.next(e))}catch(e){s(e)}}function i(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-account/"+e,o={};return r().fire({title:"Remove Connection?",text:"Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new i.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new i.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},312:(e,t,n)=>{n.r(t),n.d(t,{POST_UserConnectionAccount:()=>u});var o=n(6455),r=n.n(o),s=n(8485),c=n(7270),i=n(4492),a=n(8967),l=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function c(e){try{a(o.next(e))}catch(e){s(e)}}function i(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-account",n=document.querySelector('[make-general-posts="user-connection-account"]'),o=new FormData(n);return r().fire({title:"Add Connection?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2824:(e,t,n)=>{n.r(t),n.d(t,{GET_UserConnectionType:()=>i});var o=n(8485),r=n(7270),s=n(4492),c=n(3600);function i(e=null){return t=this,n=void 0,a=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type"+(null===e?"":"/"+e),i=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,o){function r(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,s)}c((a=a.apply(t,n||[])).next())}));var t,n,i,a}},176:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsAccountsAdd:()=>h}),n(9579);var o=n(5862),r=n(9662),s=(n(3283),n(6034),n(3313),n(789),n(5866),n(312)),c=n(8485),i=n(3600),a=n(9194),l=n(2824),d=function(e,t,n,o){var r,s=arguments.length,c=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(s<3?r(c):s>3?r(t,n,c):r(t,n))||c);return s>3&&c&&Object.defineProperty(t,n,c),c},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function c(e){try{a(o.next(e))}catch(e){s(e)}}function i(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((o=o.apply(e,t||[])).next())}))};let h=class extends o.LitElement{constructor(){super(),this.showing=!1,this.startSearchPage1=0,this.startSearchPage2=0,this._connection_types=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return o.html`
      ${this.show_form}
      ${this.toggle_showing_button}
    `}get show_form(){let e={};const t=(0,i.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,this.showing?o.html`
        <div class="shadow-sm">
          <div class="form-container">
            <div class=" !px-0">
              <div class="-row !px-0">
                <div class="-col-md-12">
                  <header class="header warning -col-md-12">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">New Connection Type</h1>
                      <h3 class="h3">Create New Connection Type!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-account">
                    <div class="container my-4">
                      <div class="row justify-center">

                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Member</h4>
                          <select-input class="w-100" id="memberId" name="memberId" label="Select Member"
                            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
                            .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
                            ajaxFetchUrl="${c.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
                        </div>

                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Connection <span class="text-akwaaba-orange-light">Account to be connected</span></h4>
                          <select-input class="w-100" id="connectionId" name="connectionId" label="Select Connection"
                            .ajaxFetchProcessResponse="${this.processClientUserSearch2}" startSearchPage="${this.startSearchPage2}"
                            .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams2}"
                            ajaxFetchUrl="${c.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
                        </div>
                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Connection Type</h4>
                          <mwc-select name="type" class="w-full" id="type" label="Select Connection Type" outlined required>
                            <mwc-list-item value="0">Select Connection Type</mwc-list-item>
                            ${this._connection_types.map((e=>o.html`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`))}
                          </mwc-select>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Add Connection" raised class="button" @click="${this.submitForm}">
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
        </div>
      `:o.nothing}get toggle_showing_button(){return this.showing?o.html`
        <mwc-button @click="${this.toggle_showing_button_action_hide}" class="button warning" raised label="Hide Add Form">
        </mwc-button>
      `:o.html`
        <mwc-button @click="${this.toggle_showing_button_action_show}" class="button success" raised label="Show Add Form">
        </mwc-button>
      `}toggle_showing_button_action_show(e){e.preventDefault(),this.showing=!0}toggle_showing_button_action_hide(e){e.preventDefault(),this.showing=!1}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="memberId"]');console.log({data:e,params:t,RESULTS:o,SELECTOR:r});let s=[];if(n>0){var c=o;for(let e=0;e<c.length;e++){const t=c[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:r.totalShowing}}processClientUserSearch2(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="connectionId"]');console.log({data:e,params:t,RESULTS:o,SELECTOR:r});let s=[];if(n>0){var c=o;for(let e=0;e<c.length;e++){const t=c[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get ajaxFetchUrlParams2(){return[{param:"",value:""}]}getConnectionTypes(){return m(this,void 0,void 0,(function*(){const e=yield(0,l.GET_UserConnectionType)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,a.UserConnectionType_S)(e)))),this._connection_types=[...this._connection_types,...t]}))}submitForm(e){return m(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,s.POST_UserConnectionAccount)()}))}firstUpdated(){}createRenderRoot(){return this}};h.styles=[o.css`
   :host { display: block; }
  `],d([(0,r.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"showing",void 0),d([(0,r.property)({type:Number}),u("design:type",Number)],h.prototype,"startSearchPage1",void 0),d([(0,r.property)({type:Number}),u("design:type",Number)],h.prototype,"startSearchPage2",void 0),d([(0,r.property)({type:Array}),u("design:type",Array)],h.prototype,"_connection_types",void 0),h=d([(0,r.customElement)("pdb-connections-accounts-add"),u("design:paramtypes",[])],h)},9054:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsAccountsView:()=>w});var o,r,s,c=n(5862),i=n(9662),a=(n(3590),n(6413),n(6660),n(8879)),l=n(2368),d=n(8485),u=n(3600),m=n(4672),h=n(3283),p=(n(6883),n(367),n(789),n(5866),n(9194)),f=n(2824),y=function(e,t,n,o){var r,s=arguments.length,c=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(s<3?r(c):s>3?r(t,n,c):r(t,n))||c);return s>3&&c&&Object.defineProperty(t,n,c),c},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function c(e){try{a(o.next(e))}catch(e){s(e)}}function i(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((o=o.apply(e,t||[])).next())}))};let w=class extends c.LitElement{constructor(){super(),this._connection_accounts=[],this.startSearchPage1=0,this.startSearchPage2=0,this._connection_types=[],this.datatablePathUrl="members/user-connection-account"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new l.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return null===this._connection_accounts?c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_accounts?c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:c.html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1 overflow-x-scroll">
        <hr class="my-2" />
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new l.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]})}get filterForm(){let e=c.html``;const t=(0,m.urlQueryParams)();let n=null,o=null,r=null,s={};const i=(0,u.getUserLoginInfoCookie)();s.Authorization="Token "+i.token;for(const e in t){let s=String(t[e]);s=""===s?null:s,"memberId"===e&&(n=s),"connectionId"===e&&(o=s),"type"===e&&(r=s)}const a=c.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
          <select-input class="w-100" id="memberId" name="memberId" label="Select Member"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${s}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${d.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`,l=c.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection</h4>
          <select-input class="w-100" id="connectionId" name="connectionId" label="Select Connection"
            .ajaxFetchProcessResponse="${this.processClientUserSearch2}" startSearchPage="${this.startSearchPage2}"
            .ajaxHeader="${s}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams2}"
            ajaxFetchUrl="${d.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`,h=c.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection Type</h4>
        <mwc-select name="type" class="w-full" id="type" label="Select Connection Type" outlined required>
          <mwc-list-item value="0">Select Connection Type</mwc-list-item>
          ${this._connection_types.map((e=>null===r?c.html`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`:Number(r)===e.id?c.html`<mwc-list-item value="${e.id}" selected>${e.type}</mwc-list-item>`:c.html`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`))}
        </mwc-select>
      </div>`;return e=c.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${a} ${l} ${h}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`,e}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="memberId"]');console.log({data:e,params:t,RESULTS:o,SELECTOR:r});let s=[];if(n>0){var c=o;for(let e=0;e<c.length;e++){const t=c[e],n={id:t.id,text:t.firstname+" "+t.middlename+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:r.totalShowing}}processClientUserSearch2(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="connectionId"]');console.log({data:e,params:t,RESULTS:o,SELECTOR:r});let s=[];if(n>0){var c=o;for(let e=0;e<c.length;e++){const t=c[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get ajaxFetchUrlParams2(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get table(){let e=d.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,u.getUserLoginInfoCookie)();return n.Authorization="Token "+o.token,c.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberId,r=n.connectionId;return`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${r.firstname} ${r.middlename}\n              ${r.surname}</p>\n          </div>\n          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${o.firstname} ${o.middlename} ${o.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,t,n){const o=n.type;return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${o.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${o.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,m.urlQueryParams)();let t={};for(const n in e){let o=String(e[n]);"memberId"!==n&&"connectionId"!==n||(t[n]=o)}let n=(0,m.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return console.log({__this:t,url:e}),{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderClockInInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return b(this,void 0,void 0,(function*(){e.aoData,t.deleteConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}getConnectionTypes(){return b(this,void 0,void 0,(function*(){const e=yield(0,f.GET_UserConnectionType)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,p.UserConnectionType_S)(e)))),this._connection_types=[...this._connection_types,...t]}))}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{console.log({btn:e}),e.addEventListener("click",(e=>{console.log({e}),this.deleteConnection(e)}))}))}deleteConnection(e){return b(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,a.DELETE_UserConnectionAccount)(t)}))}createRenderRoot(){return this}};w.styles=[c.css`
   :host { display: block; }
  `],y([(0,i.query)('[filter-section-context="btn"]'),g("design:type","function"==typeof(o=void 0!==h.Button&&h.Button)?o:Object)],w.prototype,"filterSectionContextBtn",void 0),y([(0,i.query)('[filter-section-context="container"]'),g("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],w.prototype,"filterSectionContextContainer",void 0),y([(0,i.query)('[make-general-posts="submit_filter_form"]'),g("design:type","function"==typeof(s="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?s:Object)],w.prototype,"filterSectionContextForm",void 0),y([(0,i.property)({type:Array}),g("design:type",Array)],w.prototype,"_connection_accounts",void 0),y([(0,i.property)({type:Number}),g("design:type",Number)],w.prototype,"startSearchPage1",void 0),y([(0,i.property)({type:Number}),g("design:type",Number)],w.prototype,"startSearchPage2",void 0),y([(0,i.property)({type:Array}),g("design:type",Array)],w.prototype,"_connection_types",void 0),y([(0,i.property)({type:String}),g("design:type",String)],w.prototype,"datatablePathUrl",void 0),w=y([(0,i.customElement)("pdb-connections-accounts-view"),g("design:paramtypes",[])],w)}}]);
//# sourceMappingURL=src_view_membership_connections_accounts_add_ts-src_view_membership_connections_accounts_view_ts.js.map