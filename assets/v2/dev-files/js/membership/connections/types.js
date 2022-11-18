"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/connections/types"],{69579:(e,t,n)=>{n.r(t)},26660:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},19194:(e,t,n)=>{function o(e){return{id:Number(e.id),type:String(e.type),clientId:Number(e.clientId),description:String(e.description),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),lastUpdatedBy:Number(e.lastUpdatedBy),lastUpdateDate:new Date(e.lastUpdateDate)}}n.r(t),n.d(t,{UserConnectionType_S:()=>o})},7649:(e,t,n)=>{n.r(t),n.d(t,{DELETE_UserConnectionType:()=>u});var o=n(86455),r=n.n(o),c=n(48485),s=n(87270),i=n(14492),a=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type/"+e,o={};return r().fire({title:"Remove Connection Type?",text:"You may have members assigned to this connection type. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new i.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new i.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},22824:(e,t,n)=>{n.r(t),n.d(t,{GET_UserConnectionType:()=>i});var o=n(48485),r=n(87270),c=n(14492),s=n(33600);function i(e=null){return t=this,n=void 0,a=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type"+(null===e?"":"/"+e),i=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new c.NetWorkCallResponses("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new c.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,o){function r(e){try{s(a.next(e))}catch(e){o(e)}}function c(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,c)}s((a=a.apply(t,n||[])).next())}));var t,n,i,a}},5095:(e,t,n)=>{n.r(t),n.d(t,{POST_UserConnectionType:()=>u});var o=n(86455),r=n.n(o),c=n(48485),s=n(87270),i=n(14492),a=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type",n=document.querySelector('[make-general-posts="user-connection-type"]'),o=new FormData(n);return r().fire({title:"Add Connection Type?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:c=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},78168:(e,t,n)=>{n.r(t),n.d(t,{PUT_UserConnectionType:()=>u});var o=n(86455),r=n.n(o),c=n(48485),s=n(87270),i=n(14492),a=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};function u(e,t){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),o=c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type/"+e,u=document.querySelector('[make-general-posts="user-connection-type-'+e+'"]'),p=new FormData(u);return r().fire({title:"Update Connection Type?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(o,{method:"PUT",body:p,headers:{Authorization:"Token "+n.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,u),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>(r().showValidationMessage(`${String(e)}`),!1)))})),didClose(){t.setAttribute("open","true")},allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let n="Success",o=!1;const c=e.value;if(c instanceof Object){const e=c.response;n=String(e.message),o=c.response.success}o&&r().fire({title:n,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o?setTimeout((()=>{window.location.reload()}),500):t.setAttribute("open","true")}}))}))}},16555:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsTypes:()=>i});var o=n(85862),r=n(59662),c=(n(23587),n(18626),function(e,t,n,o){var r,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,n,s):r(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let i=class extends o.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      <div class="flex flex-col">
        <pdb-connections-types-add class="my-1"></pdb-connections-types-add>
        <pdb-connections-types-view class="my-1"></pdb-connections-types-view>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};i.styles=[o.css`
   :host { display: block; }
  `],c([(0,r.property)({type:Object}),s("design:type",Object)],i.prototype,"_property",void 0),i=c([(0,r.customElement)("pdb-connections-types"),s("design:paramtypes",[])],i)},23587:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsTypesAdd:()=>a}),n(69579);var o=n(85862),r=n(59662),c=(n(23283),n(36034),n(63313),n(5095)),s=function(e,t,n,o){var r,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,n,s):r(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(),this.showing=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      ${this.show_form}
      ${this.toggle_showing_button}
    `}get show_form(){return this.showing?o.html`
        <div class="shadow-sm z-50">
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
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-type">
                    <div class="container my-4">
                      <div class="row justify-center">
                        <div class="col-md-8 col-lg-8">
                          <h4 class="font-semibold my-2">Enter Type</h4>
                          <mwc-textfield name="type" type="text" class="w-full" id="type" value="" label="Enter Type" outlined
                            required>
                          </mwc-textfield>
                        </div>
                        <div class="col-md-8 col-lg-8">
                          <h4 class="font-semibold my-2">Enter Description</h4>
                          <mwc-textarea name="description" type="text" class="w-full h-24" id="description" value=""
                            label="Enter Description" outlined required>
                          </mwc-textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Add Connection Type" raised class="button" @click="${this.submitForm}">
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
      `}toggle_showing_button_action_show(e){e.preventDefault(),this.showing=!0}toggle_showing_button_action_hide(e){e.preventDefault(),this.showing=!1}submitForm(e){return t=this,n=void 0,r=function*(){e.preventDefault(),yield(0,c.POST_UserConnectionType)()},new((o=void 0)||(o=Promise))((function(e,c){function s(e){try{a(r.next(e))}catch(e){c(e)}}function i(e){try{a(r.throw(e))}catch(e){c(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,i)}a((r=r.apply(t,n||[])).next())}));var t,n,o,r}firstUpdated(){}createRenderRoot(){return this}};a.styles=[o.css`
   :host { display: block; }
  `],s([(0,r.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"showing",void 0),a=s([(0,r.customElement)("pdb-connections-types-add"),i("design:paramtypes",[])],a)},86288:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsTypesEdit:()=>a});var o=n(85862),r=n(59662),c=(n(23283),n(36034),n(63313),n(76948),n(78168)),s=function(e,t,n,o){var r,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,n,s):r(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(),this.connection_type_id=0,this.connection_type="",this.connection_description=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      <mwc-button class="button warning my-1" outlined open-dialog-btn="connection-type-update-${this.connection_type_id}" @click="${this.showDialog}">
        <mwc-icon>edit</mwc-icon> Edit
      </mwc-button>
      ${this.show_form}
    `}get show_form(){return o.html`
      <mwc-dialog class="z-0" open-this-dialog="connection-type-update-${this.connection_type_id}" heading="Update Connection Type">
        <div class="flex m-1 justify-evenly whitespace-normal z-10">
          <div class="form-container">
            <div class=" !px-0">
              <div class="-row !px-0">
                <div class="-col-md-12">
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-type-${this.connection_type_id}">
                    <div class="container my-4">
                      <div class="row justify-center">
                        <div class="col-md-12 col-lg-12">
                          <h4 class="font-semibold my-2">Enter Type</h4>
                          <mwc-textfield name="type" type="text" class="w-full" id="type" value="${this.connection_type}"
                            label="Enter Type" outlined required>
                          </mwc-textfield>
                        </div>
                        <div class="col-md-12 col-lg-12">
                          <h4 class="font-semibold my-2">Enter Description</h4>
                          <mwc-textarea name="description" type="text" class="w-full h-24" id="description"
                            value="${this.connection_description}" label="Enter Description" outlined required>
                          </mwc-textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Update Connection Type" raised class="button" @click="${this.submitForm}">
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
        <mwc-button slot="secondaryAction" dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}submitForm(e){return t=this,n=void 0,r=function*(){e.preventDefault();const t=`connection-type-update-${this.connection_type_id}`,n=this.querySelector('[open-this-dialog="'+t+'"]');n.removeAttribute("open"),yield(0,c.PUT_UserConnectionType)(this.connection_type_id,n)},new((o=void 0)||(o=Promise))((function(e,c){function s(e){try{a(r.next(e))}catch(e){c(e)}}function i(e){try{a(r.throw(e))}catch(e){c(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,i)}a((r=r.apply(t,n||[])).next())}));var t,n,o,r}firstUpdated(){}createRenderRoot(){return this}};a.styles=[o.css`
   :host { display: block; }
  `],s([(0,r.property)({type:Number}),i("design:type",Number)],a.prototype,"connection_type_id",void 0),s([(0,r.property)({type:String}),i("design:type",String)],a.prototype,"connection_type",void 0),s([(0,r.property)({type:String}),i("design:type",String)],a.prototype,"connection_description",void 0),a=s([(0,r.customElement)("pdb-connections-types-edit"),i("design:paramtypes",[])],a)},18626:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsTypesView:()=>u});var o=n(19194),r=n(22824),c=n(85862),s=n(59662),i=(n(16413),n(26660),n(7649)),a=(n(86288),function(e,t,n,o){var r,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,n,s):r(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};let u=class extends c.LitElement{constructor(){super(),this._connection_types=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return null===this._connection_types?c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_types?c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:c.html`
      ${this.table}
    `}get table(){return c.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>#</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Member(s)</b>
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
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){const e=this._connection_types;return Array.isArray(e)?e.map((e=>c.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex flex-col whitespace-nowrap">
                <p class="ml-1">${e.type}</p>
                <p class="ml-1">${e.description}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-nowrap">
                <pdb-connections-types-edit class="mx-1" id="edit-con-${e.id}" 
                  connection_type_id="${e.id}" connection_type="${e.type}"
                  connection_description="${e.description}">
                </pdb-connections-types-edit>
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteConnectionType}"></mwc-icon-button>
              </div>
            </td>
          </tr>
        `)):c.html``}firstUpdated(){}getConnectionTypes(){return d(this,void 0,void 0,(function*(){const e=yield(0,r.GET_UserConnectionType)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,o.UserConnectionType_S)(e)))),this._connection_types=[...this._connection_types,...t]}))}deleteConnectionType(e){return d(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,i.DELETE_UserConnectionType)(t)}))}createRenderRoot(){return this}};u.styles=[c.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Array}),l("design:type",Array)],u.prototype,"_connection_types",void 0),u=a([(0,s.customElement)("pdb-connections-types-view"),l("design:paramtypes",[])],u)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_home_dashboard_scss","src_assets_styles_views_attendance_setup_form_scss","shared"],(()=>(16555,e(e.s=16555)))),e.O())])}));
//# sourceMappingURL=types.js.map