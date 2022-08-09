"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_date_time_index_ts-fddc35"],{5501:(e,t,n)=>{n.r(t)},6951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>r,getDateTime:()=>o});const r=(e="")=>{let t=new Date,n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),s=t.getHours(),i=t.getMinutes(),l=t.getSeconds(),c=n+"-"+r+"-"+o,a=s+":"+i+":"+l;return{dateTime:new Date(n,r,o,s,i,l),__string__:c+" "+a,__code__:n+r+o+s+i+l}},o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},6277:(e,t,n)=>{var r;function o(e){let t,n=r;const o=String(e);for(const e in n)n[e]==o&&(t=e);return t}n.r(t),n.d(t,{ClockingSystemDevice:()=>r,clockingSystemDeviceName:()=>o,Convert:()=>s}),function(e){e[e.Pwa=1]="Pwa",e[e.Ios=2]="Ios",e[e.Android=3]="Android",e[e.Windows=4]="Windows",e[e.MacOs=5]="MacOs",e[e.Linux=6]="Linux"}(r||(r={}));class s{static toClockingDeviceSettingsFullModel(e){return a(JSON.parse(e),p("ClockingDeviceSettingsFullModel"),l)}static clockingDeviceSettingsFullIToJson(e){return JSON.stringify(a(e,p("ClockingDeviceSettingsFullModel"),c),null,2)}}function i(e,t,n=""){if(n)throw Error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`);throw Error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function l(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function c(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,r=""){if("any"===t)return e;if(null===t)return null===e?e:i(t,e);if(!1===t)return i(t,e);for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:i(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return a(t,r,n)}catch(e){}}return i(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,n))):i("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return i("object",r);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],i=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;o[s.key]=a(i,s.typ,n,s.key)})),Object.getOwnPropertyNames(r).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(o[s]=a(r[s],t,n,s))})),o}(n(t),t.additional,e):i(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?i("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:i(e,t,r)}(t,e)}function p(e){return{ref:e}}const u={ClockingDeviceSettingsFullModel:(d=[{json:"id",js:"id",typ:0},{json:"clientId",js:"clientId",typ:p("ClientInfoModel")},{json:"memberId",js:"memberId",typ:0},{json:"memberInfo",js:"memberInfo",typ:p("MembershipUserModel")},{json:"memberAccountType",js:"memberAccountType",typ:0},{json:"systemDevice",js:"systemDevice",typ:0},{json:"deviceType",js:"deviceType",typ:""},{json:"deviceId",js:"deviceId",typ:""},{json:"approvedBy",js:"approvedBy",typ:0},{json:"creationDate",js:"creationDate",typ:Date}],!1,{props:d,additional:false})};var d},2813:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>r});class r{static toMembershipUserModel(e){return l(JSON.parse(e),a("MembershipUserModel"),s)}static membershipUserModelToJson(e){return JSON.stringify(l(e,a("MembershipUserModel"),i),null,2)}}function o(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=p[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:o(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return l(t,r,n)}catch(e){}}return o(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,n))):o("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return o("object",r);const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],i=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;s[o.key]=l(i,o.typ,n,o.key)})),Object.getOwnPropertyNames(r).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(s[o]=l(r[o],t,n,o))})),s}(n(t),t.additional,e):o(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?o("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:o(e,t,r)}(t,e)}}function c(...e){return{unionMembers:e}}function a(e){return{ref:e}}const p={MembershipUserModel:(u=[{json:"id",js:"id",typ:c(null,0)},{json:"clientId",js:"clientID",typ:c(null,0)},{json:"firstname",js:"firstname",typ:c(null,"")},{json:"middlename",js:"middlename",typ:c(null,"")},{json:"surname",js:"surname",typ:c(null,"")},{json:"gender",js:"gender",typ:c(null,0)},{json:"profilePicture",js:"profilePicture",typ:c(null,"")},{json:"phone",js:"phone",typ:c(null,"")},{json:"email",js:"email",typ:c(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:c(null,Date)},{json:"religion",js:"religion",typ:c(null,0)},{json:"nationality",js:"nationality",typ:c(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:c(null,"")},{json:"stateProvince",js:"stateProvince",typ:c(null,"")},{json:"region",js:"region",typ:c(null,0)},{json:"district",js:"district",typ:c(null,0)},{json:"constituency",js:"constituency",typ:c(null,0)},{json:"electoralArea",js:"electoralArea",typ:c(null,0)},{json:"community",js:"community",typ:c(null,"")},{json:"hometown",js:"hometown",typ:c(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:c(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:c(null,"")},{json:"level",js:"level",typ:c(null,0)},{json:"status",js:"status",typ:c(null,0)},{json:"accountType",js:"accountType",typ:c(null,0)},{json:"memberType",js:"memberType",typ:c(null,0)},{json:"date",js:"date",typ:c(null,Date)},{json:"last_login",js:"lastLogin",typ:c(null,Date)},{json:"referenceId",js:"referenceID",typ:c(null,"")},{json:"branchId",js:"branchID",typ:c(null,0)}],!1,{props:u,additional:false})};var u},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>c});var r=n(5862),o=n(9662),s=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};let c=class extends r.LitElement{constructor(){super(),this.index=0,this._widget=r.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return r.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?r.nothing:r.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.property)({type:Number}),i("design:type",Number)],c.prototype,"index",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"no_delete",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"single",void 0),s([(0,o.property)({type:String}),i("design:type",String)],c.prototype,"_single",void 0),c=s([(0,o.customElement)("multiple-widgets"),i("design:paramtypes",[])],c)},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>l});var r=n(5862),o=n(9662),s=(n(9975),n(6788),function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return r.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?r.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:r.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[r.css`
      :host {
        display: block;
      }
    `],s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,o.customElement)("switch-input")],l)},8281:(e,t,n)=>{n.r(t),n.d(t,{UserProfilePhoto:()=>c});var r=n(8485),o=n(5862),s=n(9662),i=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return o.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"url",void 0),i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"type",void 0),i([(0,s.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),i([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),i([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=i([(0,s.customElement)("user-profile-photo"),l("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_date_time_index_ts-fddc35.js.map