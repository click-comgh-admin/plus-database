"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8132],{771:(e,t,o)=>{let n;o.d(t,{t:()=>y}),n=!!window.location.href.includes(void 0);const a={production:!0,isClientApp:n};let i,r,s,l,c,d,p,u,h;if(a.production){const e="akwaabaapp.com/";r="https://api.akwaabaapp.com/",s="https://api."+e,u="akwaabaclients."+e,i="https://"+u,d="https://akwaabaapp."+e,l="https://file-bucket.plusdatabase.com/",c=i+"",p=d+"",h="https://clocking.akwaabaapp.com/"}else{u="akwaaba-forms/";const e="192.168.173.1";i="http://127.0.0.1:9001/",r="http://"+e+"/AMG/plus_db/api/",s=i+"api/",h="http://"+e+"/AMG/plus_db/client_dashboard/",l="http://"+e+"/AMG/plus_db/file_bucket/",c=i+u,p=i+"akwaaba-forms-public/"}const y={URLS:{BASE_URL:i,API_BASE_URL:r,PDB_CLIENT:h,AKWAABA_API_BASE_URL:s,FILE_BUCKET_BASE_URL:l,HOME_PAGE_BASE_URL:c,PUBLIC_PAGE_BASE_URL:p,LOGIN_PAGE_BASE_URL:void 0,PUBLIC_LOGIN_PAGE_BASE_URL:void 0,PUBLIC_BASE_URL:"https://akwaabaapp.com/",CLICK_COM_BASE_URL:"https://clickcomgh.com/"},APP_SETTINGS:a,SERVICE_WORKER_TYPES:{postAction:"POST_ACTION",networkStatus:"NETWORK_STATUS"}};window.CONSTANTS=y},7052:(e,t,o)=>{o.d(t,{h:()=>a,t:()=>i});var n=o(8764);const a=(e,t=!1)=>{const o=n.lW.from(e).toString("base64");return t?o.replaceAll("=",""):o},i=e=>n.lW.from(e,"base64").toString()},1942:(e,t,o)=>{function n(e,t,o=1,n="/"){let a=new Date;a.setHours(a.getHours()+3*o);let r="expires="+a.toUTCString();i(e)!=t&&(document.cookie=e+"="+t+"; "+r+"; path="+n)}function a(e,t,o=1,n="/"){let a=new Date;a.setMinutes(a.getMinutes()+o);let r="expires="+a.toUTCString();i(e)!=t&&(document.cookie=e+"="+t+"; "+r+"; path="+n)}function i(e){e+="=";let t=decodeURIComponent(document.cookie).split(";");for(let o=0;o<t.length;o++){let n=t[o];for(;" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""}o.d(t,{Ad:()=>n,vh:()=>a,Hl:()=>i})},7270:(e,t,o)=>{o.d(t,{d:()=>i});var n=o(7153),a=function(e,t,o,n){return new(o||(o=Promise))((function(a,i){function r(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,s)}l((n=n.apply(e,t||[])).next())}))};function i(e,t,o=!0){return a(this,void 0,void 0,(function*(){let i=null;t=null==t?{method:"GET"}:t;var r=new Headers;if(r.append("Access-Control-Allow-Origin","*/*"),r.append("Accept","application/json, text/plain, */*"),o&&r.append("Content-Type","application/json"),void 0===t.headers)t.headers=r;else for(const e of r.keys())t.headers[e]=r.get(e);return t.mode="cors",t.redirect="follow",yield(0,n.Z)(e,t,3e5).then((e=>(i=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>a(this,void 0,void 0,(function*(){return{jsonData:204===e.status?{}:yield e.json(),response:e,error:""}})))).then((e=>a(this,void 0,void 0,(function*(){return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},7153:(e,t,o)=>{o.d(t,{Z:()=>n});function n(e,t,o=7e3){return n=this,a=void 0,r=function*(){return Promise.race([fetch(e,t),new Promise(((e,t)=>{setTimeout((()=>t(new Error("Connection timeout, check network for internet access"))),o)}))])},new((i=void 0)||(i=Promise))((function(e,t){function o(e){try{l(r.next(e))}catch(e){t(e)}}function s(e){try{l(r.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,s)}l((r=r.apply(n,a||[])).next())}));var n,a,i,r}},3600:(e,t,o)=>{o.d(t,{bK:()=>s,y4:()=>l,Ie:()=>c});var n=o(1566),a=o(7052),i=o(1942);const r="pdb-client-user",s=e=>{const t=JSON.stringify(e);window.supersecret={unknowable:{ops:{email:e.user.email,id:e.user.id,cookieName:r}}},(0,i.Ad)(r,"",-1),(0,i.Ad)(r,(0,a.h)(t),3500)},l=()=>{(0,i.Ad)(r,"",-1)},c=()=>{if(""===(0,i.Hl)(r))return null;{const e=(0,a.t)((0,i.Hl)(r)),t=JSON.parse(e);return(0,n.Y)(t)}}},1566:(e,t,o)=>{function n(e){const t=e.user;return{expiry:new Date(e.expiry),token:String(e.token),user:{id:Number(t.id),accountId:Number(t.accountId),branchId:Number(t.branchId),firstname:String(t.firstname),surname:String(t.surname),phone:String(t.phone),email:String(t.email),profilePicture:String(t.profilePicture)}}}o.d(t,{Y:()=>n})},6883:(e,t,o)=>{var n,a=o(9392),i=o(9662),r=o(5713),s=function(e,t,o,n){var a,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(t,o,r):a(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends a.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.dy`
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
  `}thead(){return a.dy`
      ${this.dt_head.map((e=>a.dy`<th>${e.title}</th>`))}
    `}tbody(){return a.dy`
      ${this.dt_body.map((e=>a.dy`<tr>${e.map((e=>a.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return a.dy`
    ${this.dt_foot.map((e=>a.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const o=this.ajaxHeader[e];t[e]=o}e.headers=t,this.datatable.ajax=e}console.log({$,table:e,"this.datatable":this.datatable}),$(e).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[a.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID1",void 0),s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID2",void 0),s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"ID",void 0),s([(0,i.C)({type:Object}),l("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],c.prototype,"datatable",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_head",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_foot",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"dt_body",void 0),s([(0,i.C)(),l("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=s([(0,r.M)("datatables-new"),l("design:paramtypes",[])],c)},5866:(e,t,o)=>{var n=o(9755),a=o(9392),i=o(9662),r=o(5713),s=(o(686),function(e,t,o,n){var a,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(t,o,r):a(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends a.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=n(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let o=!1;return this.value.forEach((e=>{const n=e.id;o=t===n})),e.selected=o,e}))}render(){return this.multiple?this.required?a.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?a.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:a.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:a.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?a.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:a.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?a.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?a.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:a.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:a.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?a.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:a.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:n(this.value.map((t=>{const o=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+o+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const o=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,n(".select2-search__field").on("keyup",(function(e){n(o.selectSelector).empty(),o.startSearchPage=0})),o.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,o=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{n(e).select2({closeOnSelect:!1,placeholder:this.label})}));else{let a={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)a[e]=this.ajaxHeader[e];this.selectSelector.forEach((i=>{n(i).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(a){const i=function(a,i){return o=isNaN(a.page)?0:a.page,o=0===o?o:o*t,n(".select2-search__field").on("keyup",(function(a){n(e.selectSelector).empty(),o=0,t=0})),o}(a),r=function(o,a){let i=isNaN(o.page)?1:o.page+1;return i=0===i?1:i,n(".select2-search__field").on("keyup",(function(o){n(e.selectSelector).empty(),i=0,t=0})),i}(a);let s={search:a.term,start:i,page:r};return e.ajaxFetchUrlParams.forEach((e=>{s[e.param]=e.value})),s},headers:a,processResults:(e,o)=>{const n=null===this.ajaxFetchProcessResponse?this._processResults(e,o):this.ajaxFetchProcessResponse(e,o);return t+=n.results.length,{results:n.results,pagination:{more:t<n.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{o=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const o=e;t.page=t.page||0;let n=[];if(!1===o.error){var a=o.data;for(let e=0;e<a.length;e++){const t=a[e],o={id:t.id,text:t.fullName};n.includes(o)||n.push(o)}}return this.totalShowing+=n.length,{results:n,total:o.total,totalShowing:this.totalShowing}}createRenderRoot(){return this}};c.styles=[a.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"name",void 0),s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"label",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"value",void 0),s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"randomID",void 0),s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"input_id",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"options",void 0),s([(0,i.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"required",void 0),s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchToken",void 0),s([(0,i.C)({type:String}),l("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),s([(0,i.C)({type:Object}),l("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),s([(0,i.C)({type:Array}),l("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"startSearchPage",void 0),s([(0,i.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"multiple",void 0),s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"startNumber",void 0),s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"rowsPerPage",void 0),s([(0,i.C)({type:Number}),l("design:type",Number)],c.prototype,"totalShowing",void 0),s([(0,i.C)({type:Boolean}),l("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=s([(0,r.M)("select-input")],c)},9641:(e,t,o)=>{o.r(t),o.d(t,{AttendanceSetupViewSchedules:()=>_});var n,a,i=o(3750),r=o(4108),s=o(9392),l=o(9662),c=o(5713),d=o(2669),p=(o(5248),o(6811),o(3690),o(1854),o(6883),o(4672)),u=(o(5866),o(771)),h=o(3600),y=function(e,t,o,n){var a,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(t,o,r):a(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,o,n){return new(o||(o=Promise))((function(a,i){function r(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,s)}l((n=n.apply(e,t||[])).next())}))};let m=class extends s.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,p.O1)()}))}disconnectedCallback(){}render(){return s.dy`${this.schedule}`}get schedule(){return s.dy`${this.table}`}firstUpdated(){}get __tableHeaders(){return[{title:"Schedule"},{title:"Type"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Schedule"},{title:"Type"}]}get table(){const e=this.__dataTable();let t={};const o=(0,h.Ie)();return t.Authorization="Token "+o.token,s.dy`
      <datatables-new .datatable="${e}" .ajaxHeader="${t}"  .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}__dataTable(){return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:u.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule?datatable_plugin",dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,t,o){return console.log({data:e,type:t,row:o}),`${o.name} <a href="${u.t.URLS.PDB_CLIENT}attendance/v2/settings/schedule?meeting-event-id=${o.id}"> Open </a>`},orderable:!0},{data:"type",render:function(e,t,o){return 1===o.type?"Meeting":"Event"},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return b(this,void 0,void 0,(function*(){const t=e.aoData;console.log({aoData:t})}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};m.styles=[s.iv`
   :host { display: block; }
  `],y([(0,l.C)({type:Number}),f("design:type",Number)],m.prototype,"CLIENT_ID",void 0),y([(0,l.C)({type:Array}),f("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],m.prototype,"_data",void 0),y([(0,l.C)({type:Object}),f("design:type",Object)],m.prototype,"urlQueryParams",void 0),y([(0,l.C)({type:Number}),f("design:type",Number)],m.prototype,"meetingEventId",void 0),y([(0,d.I)('[show-adminField="all"]'),f("design:type","function"==typeof(a="undefined"!=typeof Element&&Element)?a:Object)],m.prototype,"showAdminFieldAllSelector",void 0),m=y([(0,c.M)("attendance-setup-view-all"),f("design:paramtypes",[])],m);var g=function(e,t,o,n){var a,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(t,o,r):a(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _=class extends s.oi{constructor(){super(),(0,i.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,o=void 0,a=function*(){e.connectedCallback.call(this),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,i){function r(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(r,s)}l((a=a.apply(t,o||[])).next())}));var t,o,n,a}disconnectedCallback(){}render(){return s.dy`<attendance-setup-view-all CLIENT_ID="${this.clientId}"></attendance-setup-view-all>`}firstUpdated(){}createRenderRoot(){return this}};g([(0,l.C)({type:String}),v("design:type",String)],_.prototype,"email",void 0),g([(0,l.C)({type:Number}),v("design:type",Number)],_.prototype,"mId",void 0),g([(0,l.C)({type:Number}),v("design:type",Number)],_.prototype,"clientId",void 0),_=g([(0,c.M)("attendance-setup-view-schedules"),v("design:paramtypes",[])],_)}},e=>(e.O(0,[2185,5744,8820,1828,9564,2459,7879,214,948,8462,3712],(()=>(9641,e(e.s=9641)))),e.O())])}));
//# sourceMappingURL=schedules.js.map