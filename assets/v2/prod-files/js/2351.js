"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2351],{2368:(e,t,n)=>{n.d(t,{L:()=>o});var i=n(4672);class o{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{e.preventDefault();const t=window.FilterFieldBox.form,n=new FormData(t),i=this.unmutableInputNames.map((e=>e.name));n.forEach(((e,t)=>{i.includes(t)||document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=""}))})),this.unmutableInputNames.map((e=>{const t=e.name,n=e.value;void 0!==n&&document.querySelectorAll('[name="'+t+'"]').forEach((e=>{e.value=n}))})),t.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,i.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,n=t.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},1801:(e,t,n)=>{n.d(t,{a:()=>r,w:()=>a});var i=n(6909),o=n(7202);function r(e){return{id:Number(e.id),regionId:"regionId"in e?(0,o.J)(e.regionId):(0,o.A)(),districtId:"districtId"in e?(0,i.A)(e.districtId):(0,i.W)(),location:String(e.location)}}function a(){return{id:0,regionId:(0,o.A)(),districtId:(0,i.W)(),location:"-"}}},9492:(e,t,n)=>{function i(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function o(){return{id:0,name:"-",short:"-",code:"-"}}n.d(t,{V:()=>i,Q:()=>o})},6909:(e,t,n)=>{n.d(t,{A:()=>o,W:()=>r});var i=n(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.J)(e.regionId):(0,i.A)(),location:String(e.location)}}function r(){return{id:0,regionId:(0,i.A)(),location:"-"}}},7202:(e,t,n)=>{function i(e){return{id:Number(e.id),location:String(e.location)}}function o(){return{id:0,location:"-"}}n.d(t,{J:()=>i,A:()=>o})},1551:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(1801),o=n(9492),r=n(6909),a=n(7202);function s(e){return{id:Number(e.id),regionId:"regionId"in e?(0,a.J)(e.regionId):(0,a.A)(),districtId:"districtId"in e?(0,r.A)(e.districtId):(0,r.W)(),location:String(e.location)}}function l(e,t=""){return String(null===e?t:e)}function c(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:l(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:l(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,o.V)(e.countryInfo):(0,o.Q)(),regionInfo:"regionInfo"in e?(0,a.J)(e.regionInfo):(0,a.A)(),districtInfo:"districtInfo"in e?(0,r.A)(e.districtInfo):(0,r.W)(),constituencyInfo:"constituencyInfo"in e?(0,i.a)(e.constituencyInfo):(0,i.w)(),electoralareaInfo:"electoralareaInfo"in e?s(e.electoralareaInfo):{id:0,regionId:(0,a.A)(),districtId:(0,r.W)(),location:"-"}}}},8879:(e,t,n)=>{n.d(t,{y:()=>u});var i=n(6455),o=n.n(i),r=n(771),a=n(7270),s=n(596),l=n(8967),c=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-account/"+e,i={};return o().fire({title:"Remove Connection?",text:"Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new s.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.T)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new s.H("delete",n,!0);return i.postForm,i}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6656:(e,t,n)=>{n.d(t,{E:()=>s});var i=n(771),o=n(7270),r=n(596),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.Ie)(),s=i.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},6883:(e,t,n)=>{var i,o=n(9392),r=n(9662),a=n(5713),s=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return o.dy`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return o.dy`
      ${this.dt_head.map((e=>o.dy`<th>${e.title}</th>`))}
    `}tbody(){return o.dy`
      ${this.dt_body.map((e=>o.dy`<tr>${e.map((e=>o.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return o.dy`
    ${this.dt_foot.map((e=>o.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const n=this.ajaxHeader[e];t[e]=n}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[o.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID1",void 0),s([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID2",void 0),s([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"ID",void 0),s([(0,r.C)({type:Object}),l("design:type","function"==typeof(i="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?i:Object)],c.prototype,"datatable",void 0),s([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_head",void 0),s([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_foot",void 0),s([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_body",void 0),s([(0,r.C)(),l("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=s([(0,a.M)("datatables-new"),l("design:paramtypes",[])],c)},5866:(e,t,n)=>{var i=n(9755),o=n(9392),r=n(9662),a=n(5713),s=(n(686),function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const i=e.id;n=t===i})),e.selected=n,e}))}render(){return this.multiple?this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let o={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)o[e]=this.ajaxHeader[e];this.selectSelector.forEach((r=>{i(r).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(o){const r=function(o,r){return n=isNaN(o.page)?0:o.page,n=0===n?n:n*t,i(".select2-search__field").on("keyup",(function(o){i(e.selectSelector).empty(),n=0,t=0})),n}(o),a=function(n,o){let r=isNaN(n.page)?1:n.page+1;return r=0===r?1:r,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),r=0,t=0})),r}(o);let s={search:o.term,start:r,page:a};return e.ajaxFetchUrlParams.forEach((e=>{s[e.param]=e.value})),s},headers:o,processResults:(e,n)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let i=[];if(!1===n.error){var o=n.data;for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.fullName};i.includes(n)||i.push(n)}}return this.totalShowing+=i.length,{results:i,total:n.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let n=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);n.includes(i)||n.push(i)}this.currentValue=n,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",n)}createRenderRoot(){return this}};c.styles=[o.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),s([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),s([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),s([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),s([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),s([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),s([(0,r.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),s([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),s([(0,r.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),s([(0,r.C)({attribute:!1}),l("design:type",Object)],c.prototype,"currentValue",void 0),s([(0,r.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),s([(0,r.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),s([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),s([(0,r.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),s([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),s([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),s([(0,r.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),s([(0,r.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=s([(0,a.M)("select-input")],c)},2351:(e,t,n)=>{n.d(t,{x:()=>w});var i,o,r,a=n(9392),s=n(2669),l=n(9662),c=n(5713),d=(n(1239),n(934),n(8879)),u=n(2368),p=n(771),h=n(3600),m=n(4672),f=n(5248),y=(n(6883),n(9261),n(5866),n(1551)),g=n(6656),b=n(5458),v=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};function w(e){if(0===e)return a.Ld;{const t=new x;return a.dy`
      <h4 class="font-semibold my-2">
        Current Selection: ${(0,b.C)(t.getMember(e),a.dy`<span>Loading...</span>`)}
      </h4>
    `}}let x=class extends a.oi{constructor(){super(),this._connection_accounts=[],this.startSearchPage1=0,this.datatablePathUrl="members/user-connection-account/member/"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new u.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},isOpen:!0})}))}disconnectedCallback(){}render(){return null===this._connection_accounts?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_accounts?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:a.dy`
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
    `}firstUpdated(){this.filterBox=new u.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[],isOpen:!0})}get filterForm(){let e=a.dy``;const t=(0,m.O1)(),n="memberId";let i=0,o={};const r=(0,h.Ie)();o.Authorization="Token "+r.token;for(const e in t){let o=Number(t[e]);o=Number.isNaN(o)?0:o,e===n&&(i=o)}const s=a.dy`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
          ${w(i)}
          <select-input class="w-100" id="${n}" name="${n}" label="Select Member"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${o}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${p.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;return e=a.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${s}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`,e}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,i=e.results,o=document.querySelector('[id="memberId"]');let r=[];if(n>0){var a=i;for(let e=0;e<a.length;e++){const t=a[e],n=(0,y.Z)(t),i={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};r.includes(i)||r.push(i)}}return{results:r,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get getMemberId(){let e=(0,m.Jx)("memberId");return Number.isNaN(e)?0:Number(e)}get table(){let e=p.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+this.getMemberId+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const i=(0,h.Ie)();return n.Authorization="Token "+i.token,a.dy`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const i=n.memberId,o=n.connectionId;return`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${o.firstname} ${o.middlename}\n              ${o.surname}</p>\n          </div>\n          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${i.firstname} ${i.middlename} ${i.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,t,n){const i=n.type;return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${i.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${i.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,m.O1)();let t={};for(const n in e){let i=String(e[n]);"memberId"===n&&(t[n]=i)}let n=(0,m.W3)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.renderMemberInfo(e,n,i),orderable:!0},{data:"inTime",render:(e,n,i)=>t.renderClockInInfo(e,n,i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return _(this,void 0,void 0,(function*(){e.aoData,t.deleteConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteConnection(e)}))}))}deleteConnection(e){return _(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,d.y)(t)}))}getMember(e){return _(this,void 0,void 0,(function*(){const t=yield(0,g.E)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,y.Z)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};x.styles=[a.iv`
   :host { display: block; }
  `],v([(0,s.I)('[filter-section-context="btn"]'),S("design:type","function"==typeof(i=void 0!==f.z&&f.z)?i:Object)],x.prototype,"filterSectionContextBtn",void 0),v([(0,s.I)('[filter-section-context="container"]'),S("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],x.prototype,"filterSectionContextContainer",void 0),v([(0,s.I)('[make-general-posts="submit_filter_form"]'),S("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],x.prototype,"filterSectionContextForm",void 0),v([(0,l.C)({type:Array}),S("design:type",Array)],x.prototype,"_connection_accounts",void 0),v([(0,l.C)({type:Number}),S("design:type",Number)],x.prototype,"startSearchPage1",void 0),v([(0,l.C)({type:String}),S("design:type",String)],x.prototype,"datatablePathUrl",void 0),x=v([(0,c.M)("pdb-connections-members-view"),S("design:paramtypes",[])],x)}}]);
//# sourceMappingURL=2351.js.map