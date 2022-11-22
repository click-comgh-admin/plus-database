"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7552],{8967:(e,t,n)=>{n.d(t,{T:()=>s});const s=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,n)=>{n.d(t,{O1:()=>s,Jx:()=>i,W3:()=>o});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},o=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},7725:(e,t,n)=>{n.d(t,{eF:()=>a,U8:()=>l,hk:()=>c});var s=n(7052),i=n(1942),o=n(1489);const r="pdb-active-branch",a=e=>{const t=JSON.stringify(e);(0,i.Ad)(r,"",-1),(0,i.Ad)(r,(0,s.h)(t),3500)};function l(){(0,i.Ad)(r,"",-1)}const c=()=>{if(""===(0,i.Hl)(r))return null;{const e=(0,s.t)((0,i.Hl)(r)),t=JSON.parse(e);return(0,o.N)(t)}}},1489:(e,t,n)=>{function s(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function i(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.d(t,{j:()=>s,N:()=>i})},6224:(e,t,n)=>{n.d(t,{p:()=>a});var s=n(771),i=n(7270),o=n(596),r=n(3600);function a(e=null){return t=this,n=void 0,l=function*(){const t=(0,r.Ie)(),n=s.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,i.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,s){function i(e){try{r(l.next(e))}catch(e){s(e)}}function o(e){try{r(l.throw(e))}catch(e){s(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,o)}r((l=l.apply(t,n||[])).next())}));var t,n,a,l}},5866:(e,t,n)=>{var s=n(9755),i=n(9392),o=n(9662),r=n(5713),a=(n(686),function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=s(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const s=e.id;n=t===s})),e.selected=n,e}))}render(){return this.multiple?this.required?i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:s(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,s(".select2-search__field").on("keyup",(function(e){s(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{s(e).select2({closeOnSelect:!1,placeholder:this.label}),s(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let i={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)i[e]=this.ajaxHeader[e];this.selectSelector.forEach((o=>{s(o).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(i){const o=function(i,o){return n=isNaN(i.page)?0:i.page,n=0===n?n:n*t,s(".select2-search__field").on("keyup",(function(i){s(e.selectSelector).empty(),n=0,t=0})),n}(i),r=function(n,i){let o=isNaN(n.page)?1:n.page+1;return o=0===o?1:o,s(".select2-search__field").on("keyup",(function(n){s(e.selectSelector).empty(),o=0,t=0})),o}(i);let a={search:i.term,start:o,page:r};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:i,processResults:(e,n)=>{const s=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=s.results.length,{results:s.results,pagination:{more:t<s.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let s=[];if(!1===n.error){var i=n.data;for(let e=0;e<i.length;e++){const t=i[e],n={id:t.id,text:t.fullName};s.includes(n)||s.push(n)}}return this.totalShowing+=s.length,{results:s,total:n.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let n=[];for(const e of t){let t=e;const s=Number.isNaN(t.value)?0:Number(t.value);n.includes(s)||n.push(s)}this.currentValue=n,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",n)}createRenderRoot(){return this}};c.styles=[i.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),a([(0,o.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),a([(0,o.C)({attribute:!1}),l("design:type",Object)],c.prototype,"currentValue",void 0),a([(0,o.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),a([(0,o.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),a([(0,o.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),a([(0,o.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=a([(0,r.M)("select-input")],c)},6182:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveAssignmentEdit:()=>_});var s=n(9392),i=n(9662),o=n(5713),r=(n(1239),n(9261),n(5248),n(3313),n(5866),n(3600)),a=n(7725),l=n(6224),c=n(7052),d=n(4672),u=n(7983),p=n(771),h=n(7270),m=n(596),y=n(6455),f=n.n(y),g=n(8967),v=function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))},b=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))};let _=class extends s.oi{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.assignmentId=0,this.assignmentIdEnc=null,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._statuses=[],this._assignments=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return S(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,r.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getAssignmentId(),this.getAssignment(this.assignmentId),yield this.getBranches()}))}disconnectedCallback(){}render(){if(this._assignments.length<1)return s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(null===this._assignments)return s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Group </span>: Not Found</h4>
          </div>
        </div>
      `;const e=this._assignments[0];let t=" - ";return t=1===e.memberInfo.accountType?e.memberInfo.middlename.length<1?`${e.memberInfo.firstname} ${e.memberInfo.surname}`:`${e.memberInfo.firstname} ${e.memberInfo.middlename} ${e.memberInfo.surname}`:`${e.memberInfo.organizationName}`,s.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Change Assignment</h1>
                  <h3 class="h3">Update Assignment!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-assignment"
                enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select class="w-full" setSelectedBranchId label="Select Branch" name="_branchId_" id="_branchId_"
                      outlined required>
                      <mwc-list-item value="0">Select Branch</mwc-list-item>
                      ${this._branches.map((t=>{if(t.id===e.statusID.branchID)return s.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Status</h4>
                    <mwc-select class="w-full" setSelectedStatusId label="Select Status" name="statusId" id="statusId"
                      outlined required>
                      <mwc-list-item value="${e.statusID.id}" selected>
                        ${e.statusID.status}
                      </mwc-list-item>
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">From - Date</h4>
                    <mwc-textfield name="fromDate" type="date" class="w-full" id="fromDate" label="Select From - Date"
                      value="${this.getDate(e.fromDate)}" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">To - Date</h4>
                    <mwc-textfield name="toDate" type="date" class="w-full" id="toDate" label="Select To - Date"
                      value="${this.getDate(e.toDate)}" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Member</h4>
                    <mwc-select class="w-full" setSelectedStatusId label="Select Member" name="__memberId__" id="__memberId__"
                      outlined required>
                      <mwc-list-item value="${e.memberID}" selected>
                        ${t}
                      </mwc-list-item>
                    </mwc-select>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">
                      Reason <span class="text-yellow-400">[optional]</span>
                    </h4>
                    <mwc-textarea class="h-96" outlined name="reason" id="reason" label="Enter Reason [optional]"
                      placeholder="Enter Reason [optional]" value="${e.reason}">
                    </mwc-textarea>
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Update" raised class="w-full" @click="${this.submitForm}">
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
    `}getDate(e){return e.toLocaleString("default",{year:"numeric"})+"-"+e.toLocaleString("default",{month:"2-digit"})+"-"+e.toLocaleString("default",{day:"2-digit"})}firstUpdated(){}getAssignmentId(){let e=(0,d.Jx)("view-assignment"),t=null!==e?(0,c.t)(e):null;this.assignmentId=Number.isNaN(t)?null:Number(t),this.assignmentIdEnc=(0,c.h)(String(this.assignmentId),!0)}getAssignment(e){return S(this,void 0,void 0,(function*(){const t=yield function(e=null,t=""){return n=this,s=void 0,o=function*(){const n=(0,r.Ie)(),s=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment"+(null===e?"":"/"+e)+t,i=yield(0,h.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new m.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new m.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function r(e){try{l(o.next(e))}catch(e){t(e)}}function a(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}l((o=o.apply(n,s||[])).next())}));var n,s,i,o}(e);null!==t&&t.response.success&&"statusId"in t.response.data?this._assignments=[u.e.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(t.response.data))]:this._assignments=null}))}getBranches(){return S(this,void 0,void 0,(function*(){const e=yield(0,l.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data),this._branches=[...this._branches,...t]}))}submitForm(e){return S(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,r.Ie)(),n=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/"+e,s=document.querySelector('[make-general-posts="attendance-absent-leave-assignment"]'),i=new FormData(s);return f().fire({title:"Update Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,h.d)(n,{method:"PATCH",body:i,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new m.H("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,g.T)(e);f().showValidationMessage(`${t}`)}return t})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&f().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.assignmentId)}))}createRenderRoot(){return this}};_.styles=[s.iv`
   :host { display: block; }
  `],b([(0,i.C)({type:Number}),w("design:type",Number)],_.prototype,"startSearchPage",void 0),b([(0,i.C)({type:Number}),w("design:type",Number)],_.prototype,"accountType",void 0),b([(0,i.C)({type:Number}),w("design:type",Number)],_.prototype,"selectedBranch",void 0),b([(0,i.C)({type:Number}),w("design:type",Number)],_.prototype,"assignmentId",void 0),b([(0,i.C)({type:String}),w("design:type",String)],_.prototype,"assignmentIdEnc",void 0),b([(0,i.C)({type:Array}),w("design:type",Array)],_.prototype,"_userLoginInfo",void 0),b([(0,i.C)({type:Array}),w("design:type",Array)],_.prototype,"_activeBranchId",void 0),b([(0,i.C)({type:Array}),w("design:type",Array)],_.prototype,"_memberCategories",void 0),b([(0,i.C)({type:Array}),w("design:type",Array)],_.prototype,"_branches",void 0),b([(0,i.C)({type:Array}),w("design:type",Array)],_.prototype,"_statuses",void 0),b([(0,i.C)({type:Array}),w("design:type",Array)],_.prototype,"_assignments",void 0),_=b([(0,o.M)("attendance-absent-leave-assignment-edit"),w("design:paramtypes",[])],_)}},e=>(e.O(0,[2185,5744,9674,8820,1828,2459,7724,5291,4017,7983,3712],(()=>(6182,e(e.s=6182)))),e.O())])}));
//# sourceMappingURL=edit.js.map