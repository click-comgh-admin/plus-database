"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[5928],{8967:(e,t,n)=>{n.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},9194:(e,t,n)=>{function o(e){return{id:Number(e.id),type:String(e.type),clientId:Number(e.clientId),description:String(e.description),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),lastUpdatedBy:Number(e.lastUpdatedBy),lastUpdateDate:new Date(e.lastUpdateDate)}}n.d(t,{m:()=>o})},2824:(e,t,n)=>{n.d(t,{d:()=>s});var o=n(771),c=n(7270),i=n(596),r=n(3600);function s(e=null){return t=this,n=void 0,a=function*(){const t=(0,r.Ie)(),n=o.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type"+(null===e?"":"/"+e),s=yield(0,c.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new i.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,o){function c(e){try{r(a.next(e))}catch(e){o(e)}}function i(e){try{r(a.throw(e))}catch(e){o(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(c,i)}r((a=a.apply(t,n||[])).next())}));var t,n,s,a}},3612:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsTypes:()=>j});var o=n(9392),c=n(9662),i=n(5713),r=(n(5248),n(2935),n(3313),n(6455)),s=n.n(r),a=n(771),l=n(7270),d=n(596),u=n(8967),p=n(3600),f=function(e,t,n,o){return new(n||(n=Promise))((function(c,i){function r(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))},h=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let y=class extends o.oi{constructor(){super(),this.showing=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.dy`
      ${this.show_form}
      ${this.toggle_showing_button}
    `}get show_form(){return this.showing?o.dy`
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
      `:o.Ld}get toggle_showing_button(){return this.showing?o.dy`
        <mwc-button @click="${this.toggle_showing_button_action_hide}" class="button warning" raised label="Hide Add Form">
        </mwc-button>
      `:o.dy`
        <mwc-button @click="${this.toggle_showing_button_action_show}" class="button success" raised label="Show Add Form">
        </mwc-button>
      `}toggle_showing_button_action_show(e){e.preventDefault(),this.showing=!0}toggle_showing_button_action_hide(e){e.preventDefault(),this.showing=!1}submitForm(e){return t=this,n=void 0,c=function*(){e.preventDefault(),yield function(){return f(this,void 0,void 0,(function*(){const e=(0,p.Ie)(),t=a.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type",n=document.querySelector('[make-general-posts="user-connection-type"]'),o=new FormData(n);return s().fire({title:"Add Connection Type?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:c=>f(this,void 0,void 0,(function*(){return yield(0,l.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new d.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()},new((o=void 0)||(o=Promise))((function(e,i){function r(e){try{a(c.next(e))}catch(e){i(e)}}function s(e){try{a(c.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,s)}a((c=c.apply(t,n||[])).next())}));var t,n,o,c}firstUpdated(){}createRenderRoot(){return this}};y.styles=[o.iv`
   :host { display: block; }
  `],h([(0,c.C)({type:Boolean}),m("design:type",Boolean)],y.prototype,"showing",void 0),y=h([(0,i.M)("pdb-connections-types-add"),m("design:paramtypes",[])],y);var b=n(9194),v=n(2824),w=(n(934),function(e,t,n,o){return new(n||(n=Promise))((function(c,i){function r(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))});n(4277);var g=function(e,t,n,o){return new(n||(n=Promise))((function(c,i){function r(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};var _=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let x=class extends o.oi{constructor(){super(),this.connection_type_id=0,this.connection_type="",this.connection_description=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.dy`
      <mwc-button class="button warning my-1" outlined open-dialog-btn="connection-type-update-${this.connection_type_id}" @click="${this.showDialog}">
        <mwc-icon>edit</mwc-icon> Edit
      </mwc-button>
      ${this.show_form}
    `}get show_form(){return o.dy`
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
    `}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}submitForm(e){return t=this,n=void 0,c=function*(){e.preventDefault();const t=`connection-type-update-${this.connection_type_id}`,n=this.querySelector('[open-this-dialog="'+t+'"]');n.removeAttribute("open"),yield function(e,t){return g(this,void 0,void 0,(function*(){const n=(0,p.Ie)(),o=a.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type/"+e,c=document.querySelector('[make-general-posts="user-connection-type-'+e+'"]'),i=new FormData(c);return s().fire({title:"Update Connection Type?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PUT",body:i,headers:{Authorization:"Token "+n.token}},!1).then((e=>{const t=new d.H("post",e,!1,c),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>(s().showValidationMessage(`${String(e)}`),!1)))})),didClose(){t.setAttribute("open","true")},allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let n="Success",o=!1;const c=e.value;if(c instanceof Object){const e=c.response;n=String(e.message),o=c.response.success}o&&s().fire({title:n,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o?setTimeout((()=>{window.location.reload()}),500):t.setAttribute("open","true")}}))}))}(this.connection_type_id,n)},new((o=void 0)||(o=Promise))((function(e,i){function r(e){try{a(c.next(e))}catch(e){i(e)}}function s(e){try{a(c.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,s)}a((c=c.apply(t,n||[])).next())}));var t,n,o,c}firstUpdated(){}createRenderRoot(){return this}};x.styles=[o.iv`
   :host { display: block; }
  `],_([(0,c.C)({type:Number}),C("design:type",Number)],x.prototype,"connection_type_id",void 0),_([(0,c.C)({type:String}),C("design:type",String)],x.prototype,"connection_type",void 0),_([(0,c.C)({type:String}),C("design:type",String)],x.prototype,"connection_description",void 0),x=_([(0,i.M)("pdb-connections-types-edit"),C("design:paramtypes",[])],x);var k=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(e,t,n,o){return new(n||(n=Promise))((function(c,i){function r(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};let T=class extends o.oi{constructor(){super(),this._connection_types=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return R(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return null===this._connection_types?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_types?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
      ${this.table}
    `}get table(){return o.dy`
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
    `}get tableBody(){const e=this._connection_types;return Array.isArray(e)?e.map((e=>o.dy`
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
        `)):o.dy``}firstUpdated(){}getConnectionTypes(){return R(this,void 0,void 0,(function*(){const e=yield(0,v.d)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,b.m)(e)))),this._connection_types=[...this._connection_types,...t]}))}deleteConnectionType(e){return R(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=a.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type/"+e,o={};return s().fire({title:"Remove Connection Type?",text:"You may have members assigned to this connection type. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,l.d)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new d.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new d.H("delete",n,!0);return o.postForm,o}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}createRenderRoot(){return this}};T.styles=[o.iv`
   :host { display: block; }
  `],k([(0,c.C)({type:Array}),A("design:type",Array)],T.prototype,"_connection_types",void 0),T=k([(0,i.M)("pdb-connections-types-view"),A("design:paramtypes",[])],T);var B=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},E=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let j=class extends o.oi{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.dy`
      <div class="flex flex-col">
        <pdb-connections-types-add class="my-1"></pdb-connections-types-add>
        <pdb-connections-types-view class="my-1"></pdb-connections-types-view>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};j.styles=[o.iv`
   :host { display: block; }
  `],B([(0,c.C)({type:Object}),E("design:type",Object)],j.prototype,"_property",void 0),j=B([(0,i.M)("pdb-connections-types"),E("design:paramtypes",[])],j)}},e=>(e.O(0,[2185,5744,9674,9564,2459,9553,5291,6553,214,3712],(()=>(3612,e(e.s=3612)))),e.O())])}));
//# sourceMappingURL=types.js.map