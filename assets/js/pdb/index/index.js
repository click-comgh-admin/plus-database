"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[826],{67:(e,t,i)=>{i.r(t);var o=i(213),n=i(752),s=i(790),r=function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};function l(e,t){return r(this,void 0,void 0,(function*(){t=null==t?{method:"GET"}:t;var i=new Headers;return i.append("Access-Control-Allow-Origin","*/*"),i.append("Accept","application/json, text/plain, */*"),i.append("Authorization","Bearer dskjsdr43930934j34934304934n34kkd3d89sdjsdjb349"),i.append("Content-Type","application/json"),t.headers=i,t.mode="cors",console.log({init:t}),yield fetch(e,t).then((e=>e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText)))).then((e=>e.json())).then((e=>r(this,void 0,void 0,(function*(){return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}const c=new XMLHttpRequest,a=new URL(document.location.href);c.open("HEAD",a.href,!1),c.send(null);const d=new URLSearchParams(a.search);let p=[];d.forEach(((e,t)=>{const i={param:t,value:e};p.includes(i)||p.push(i)}));const u={GET:new class{constructor(e){this.params=[],this.params=e}get(e){let t;return this.params.forEach((i=>{i.param===e&&(t=i)})),t}}(p),HEADERS:c.getAllResponseHeaders()},h="https://db-api.akwaabasoftware.com/",f={IMAGES:{loadingGif1:"/assets/js/node/images/loading.gif",akwaabaLogo:"/assets/js/node/images/logo-inverse.png",loadingGif2:"/assets/js/node/images/loading2.gif",loadingGif3:"/assets/js/node/images/loading3.gif",errorNotFound:"/assets/js/node/images/error-not-found.webp"},HTTPS:u,URLS:{API_BASE_URL:h,PUBLIC_BASE_URL:"https://plusdatabase.com/",CLICK_COM_BASE_URL:"https://clickcomgh.com/",GET_CLIENT_INFO:h+"subscription-quick-info/index",GET_SUBSCRIPTION_FEE:h+"subscription-quick-info/get-fee",PAY_SUBSCRIPTION_FEE:h+"subscription-quick-info/pay",GET_PAYMENT_STATUS:h+"subscription-quick-info/has-been-paid"},ERROR_MSG:"Something went wrong, please try again or contact us using the whatsapp button"};console.log({CONSTANTS:f});var y=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let v=class extends o.oi{constructor(){super(...arguments),this.size=32}render(){return o.dy`
      <div class="w-full block mb-2">
        <div class="flex justify-center">
            <div class="rounded-full overflow-hidden h-${this.size} w-${this.size} shadow-xl">
              <img src="${f.IMAGES.loadingGif3}" class="h-${this.size} w-${this.size} object-cover object-center">
            </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};y([(0,s.C)({type:Number})],v.prototype,"size",void 0),v=y([(0,n.M)("is-loading")],v);let b=class extends o.oi{constructor(){super()}render(){return o.dy`
    <diV class="flex justify-around">
      <div class="relative px-4 mt-10">
        <div class="rounded-md overflow-hidden h-80 w-80 shadow-xl">
          <img src="${f.IMAGES.errorNotFound}" class="h-80 w-80 object-cover object-center">
        </div>
        <div class="relative px-4 -mt-2">
          <div class="bg-white px-4 py-2 rounded-lg border shadow-md">
            <h4 class="font-semibold text-lg text-center uppercase tracking-wider">client not found</h4>
          </div>
        </div>
      </div>
    </diV>
  `}createRenderRoot(){return this}};b=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}([(0,n.M)("client-not-found")],b);var m=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let g=class extends o.oi{constructor(e){super(),this.clientInfo=null,this.clientInfo=e}render(){return null===this.clientInfo?o.dy`<is-loading></is-loading>`:void 0===this.clientInfo.error?o.dy`
        <diV class="flex justify-around">
          <div class="w-2/3 md:w-7/12 lg:w-5/12 xl:w-3/12">
            <div class="relative pb-5/12 md:pb-5/12">
              <img src="${this.clientInfo.image}" alt="${this.clientInfo.name} Logo"
                class="h-full w-full object-cover object-center rounded-lg absolute inset-0 border">
            </div>
            <div class="relative px-4 -mt-2">
              <div class="bg-white px-4 py-2 rounded-lg border shadow-md">
                <h4 class="font-semibold text-lg text-center">${this.clientInfo.name}</h4>
              </div>
            </div>
          </div>
        </diV>
      `:o.dy`
          <h1 class="text-red-500 font-bold tracking-wide text-center">
            ${this.clientInfo.error.error}...
          </h1>
        `}createRenderRoot(){return this}};m([(0,s.C)({type:Object})],g.prototype,"clientInfo",void 0),g=m([(0,n.M)("client-banner")],g);var _=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let w=class extends o.oi{constructor(){super(...arguments),this.input=null,this.error=!1,this.select=!1}render(){const e=this.input.id,t=this.input.name,i=this.error?"text-red-400 border-red-600":"";this.select=null!==this.select&&void 0!==this.select&&!1!==this.select,void 0===this.input.inputClass||this.input.inputClass;const n=void 0===this.input.inputClass?`appearance-none block w-full bg-gray-100 text-gray-700\n        border border-gray-200 rounded-md py-3 px-4 leading-tight\n        focus:outline-none bg- focus:bg-white focus:border-gray-500 ${i}`:this.input.inputClass,s=void 0===this.input.type?"text":this.input.type,r=void 0===this.input.label?"Label":this.input.label,l=(void 0===this.input.labelClass||this.input.labelClass,void 0===this.input.labelClass?"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2":this.input.labelClass),c=null!==this.input.disabled&&void 0!==this.input.disabled&&!1!==this.input.disabled;return!0===this.select?(e=>{const t=e.id,i=e.name,n=null!==e.selectOptions&&void 0!==e.selectOptions;return o.dy`
    <div class="w-full mb-4 md:mb-6">
      <label class="${e.labelClass}"> ${e.label}
        <select style="${e.style}" ?disabled="${e.disabled}" class="${e.inputClass}" placeholder="${e.placeholder}" id="${t}"
          name="${i}">
          ${!1===n?"":e.selectOptions.map((t=>{const i=null!==t.selected&&void 0!==t.selected&&!1!==t.selected;return!1===e.disabled?i?o.dy`<option value="${t.value}" ?selected="${t.selected}">
                  ${t.title}
                </option>`:o.dy`<option value="${t.value}">
                  ${t.title}
                </option>`:i?o.dy`<option value="${t.value}" ?disabled="${e.disabled}" ?selected="${t.selected}">
                  ${t.title}
                </option>`:o.dy`<option value="${t.value}" ?disabled="${e.disabled}">
                  ${t.title}
                </option>`}))}
        </select>
      </label>
    </div>
  `})({id:this.input.id,name:this.input.name,class:l,value:this.input.value,inputClass:n,label:r,labelClass:l,placeholder:this.input.placeholder,style:this.input.style,disabled:c,selectOptions:this.input.selectOptions}):!1===c?o.dy`
      <div class="w-full mb-4 md:mb-6">
        <label class="${l}"> ${r}
          <input type="${s}" style="${this.input.style}" class="${n}" placeholder="${this.input.placeholder}"
            id="${e}" name="${t}" value!="${this.input.value}"/>
        </label>
      </div>
    `:o.dy`
      <div class="w-full mb-4 md:mb-6">
        <label class="${l}"> ${r}
          <input type="${s}" style="${this.input.style}" ?disabled="${this.input.disabled}" class="${n}"
            placeholder="${this.input.placeholder}" id="${e}" name="${t}" value="${this.input.value}"/>
        </label>
      </div>
    `}createRenderRoot(){return this}};_([(0,s.C)({type:Object})],w.prototype,"input",void 0),_([(0,s.C)({type:Boolean})],w.prototype,"error",void 0),_([(0,s.C)({type:Boolean})],w.prototype,"select",void 0),w=_([(0,n.M)("form-input")],w);var S=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let I=class extends o.oi{constructor(){super(),this.message="",this.token="",this.visible=null,this.error=null,console.log({"this.visible":this.visible})}render(){return console.log({"this.visible":this.visible,"CONSTANTS.HTTPS.HEADERS":f.HTTPS.HEADERS}),this.visible?this.error?this._error("red"):this._success("green"):o.dy``}_success(e){return o.dy`
      <div class="w-full">
        <div class="my-4 block">
          <div class="block bg-${e}-50 pl-2 pr-4 py-2 rounded-md shadow-md">
            ${this._header(e)}
            <div class="text-sm uppercase flex justify-center my-2">
              <a type="button" class="inline-block px-5 py-3 rounded-lg shadow-md
              bg-green-900 text-sm text-white uppercase tracking-wider font-semibold"
                href="javascript:window.open('${f.URLS.PUBLIC_BASE_URL}pay?pay_token=${this.token}',
                  '_blank', 'width=640, height=480, status, toolbar=yes,scrollbars=yes,resizable=yes,top=500,
                  left=500, location')"> Click Here To Pay
              </a>
            </div>
          </div>
        </div>
      </div>
    `}_error(e){return o.dy`
      <div class="w-full">
        <div class="my-4 block">
          <div class="block bg-${e}-50 pl-2 pr-4 py-2 rounded-md shadow-md">
            ${this._header(e)}
          </div>
        </div>
      </div>
    `}_header(e){const t=o.dy`<div class="w-full text-${e}-700 uppercase text-sm">
      ${this.message}
    </div>`,i=o.dy`<div class="w-2">${this.__closeBtn()}</div>`;return o.dy`
      <div class="flex font-semibold">${t}${i}</div>
    `}__closeBtn(){return o.dy`
      <div class="flex">
        <button type="button" class="text-red-600 font-semibold -mt-2
          inline-block py-1 px-2 rounded-md shadow-lg text-sm tracking-wider"
          @click="${this.__closeBtnAction}">x</button>
      </div>
    `}__closeBtnAction(e){e.preventDefault(),this.visible=!1}createRenderRoot(){return this}};S([(0,s.C)({type:String})],I.prototype,"message",void 0),S([(0,s.C)({type:String})],I.prototype,"token",void 0),S([(0,s.C)({type:Boolean})],I.prototype,"visible",void 0),S([(0,s.C)({type:Boolean})],I.prototype,"error",void 0),I=S([(0,n.M)("contitnue-to-pay")],I);var x=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let R=class extends o.oi{constructor(){super(),this._fetch=!0,this._message="",this.clientId=0,this.token="",this.visible=null,this._error=null,this._loading=!1,console.log({"this.visible":this.visible}),this._loading=!0,setInterval((()=>{this._fetch&&this.getPaymentStatus().then((e=>{this._loading=!1}))}),2e3)}render(){return console.log({"this.visible":this.visible,"CONSTANTS.HTTPS.HEADERS":f.HTTPS.HEADERS}),this.visible?this._error?this._return("blue"):this._return("green"):o.dy``}_return(e){return o.dy`
      <div class="w-full">
        <div class="my-4 block">
          <div class="block bg-${e}-50 pl-2 pr-4 py-2 rounded-md shadow-md">
            ${this._header(e)}
          </div>
        </div>
      </div>
    `}_header(e){const t=o.dy`<div class="w-full text-${e}-700 uppercase text-sm">
  ${this._loading?o.dy`<is-loading size="16"></is-loading>`:this._message}
</div>`,i=o.dy`<div class="w-2">${this.__closeBtn()}</div>`;return o.dy`
      <div class="flex font-semibold">${t}${i}</div>
    `}__closeBtn(){return o.dy`
      <div class="flex">
        <button type="button" class="text-red-600 font-semibold -mt-2
                inline-block py-1 px-2 rounded-md shadow-lg text-sm tracking-wider"
          @click="${this.__closeBtnAction}">x</button>
      </div>
    `}__closeBtnAction(e){e.preventDefault(),this.visible=!1}getPaymentStatus(){return e=this,t=void 0,o=function*(){const e=yield function({clientId:e,token:t}){return i=this,o=void 0,s=function*(){let i=null;try{const o=yield l(f.URLS.GET_PAYMENT_STATUS+"?client_id="+e+"&pay_token="+t);i=!0===o.error?{error:{error:o.msg}}:{msg:o.msg}}catch(e){return console.error({error:e}),{error:{error:f.ERROR_MSG}}}return i},new((n=void 0)||(n=Promise))((function(e,t){function r(e){try{c(s.next(e))}catch(e){t(e)}}function l(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(r,l)}c((s=s.apply(i,o||[])).next())}));var i,o,n,s}({clientId:this.clientId,token:this.token});console.log({clientPaymentStatus:e}),void 0!==e.error?(this._error=!0,this._message="! "+e.error.error):(this._error=!1,this._fetch=!1,this._message=e.msg)},new((i=void 0)||(i=Promise))((function(n,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}));var e,t,i,o}createRenderRoot(){return this}};x([(0,s.C)({type:Boolean})],R.prototype,"_fetch",void 0),x([(0,s.C)({type:String})],R.prototype,"_message",void 0),x([(0,s.C)({type:Number})],R.prototype,"clientId",void 0),x([(0,s.C)({type:String})],R.prototype,"token",void 0),x([(0,s.C)({type:Boolean})],R.prototype,"visible",void 0),x([(0,s.C)({type:Boolean})],R.prototype,"_error",void 0),x([(0,s.C)({type:Boolean})],R.prototype,"_loading",void 0),R=x([(0,n.M)("payment-status")],R);var $=i(593),C=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r},O=function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};let T=class extends o.oi{constructor(e){super(),this.clientInfo=null,this.subscriptionFeeError=!1,this.subscriptionFee="GHC 00.00",this.subscriptionDurations=[],this._selectOption={id:0,name:"Select Subscription Duration"},this._paySuccess=!1,this._paySuccessToken="",this._paySuccessMessage="",this._paySuccessError=!1,this._paySuccessVisible=!1,this._payIsLoadingVal=!1,this._getFeeIsLoadingVal=!1,this.clientInfo=e}render(){if(null===this.clientInfo)return o.dy`<is-loading></is-loading>`;{let e=this.clientInfo.subscriptionDurations;return Array.isArray(e)?(e.includes(this._selectOption)||e.unshift(this._selectOption),o.dy`
          <diV class="flex justify-around -mt-6">
            <div class="w-full md:w-4/6 lg:w-7/12 xl:w-4/12">
              <form class="bg-white border rounded px-5 pt-6 pb-8 mb-4"
                action="" method="GET" @submit="${this.payActivationFee}">
                
                <form-input .input="${this.formInput_INPUT({id:"account_type",name:"account_type",label:"Account Type",placeholder:"Account Type",selectOptions:[{title:this.clientInfo.accountType.name,value:this.clientInfo.accountType.id,selected:!0}]})}" .select="${!0}"></form-input>
                <form-input .input="${this.formInput_INPUT({id:"client_membership_size",name:"client_membership_size",label:"Membership Size",placeholder:"Membership Size",selectOptions:[{title:this.clientInfo.membershipSize.name,value:this.clientInfo.membershipSize.id,selected:!0}]})}" .select="${!0}"></form-input>
                <form-input .input="${this.formInput_INPUT({id:"client_subscription_duration",name:"client_subscription_duration",label:"Select Subscription Duration",placeholder:"Select Subscription Duration",selectOptions:e.map((e=>({title:e.name,value:e.id})))})}" .select="${!0}" @change="${this.getSubscriptionFee}"></form-input>
                <is-loading size="16" id="get-fee-is-loading" class="${this._getFeeIsLoadingVal?"block":"hidden"}"></is-loading>
                <form-input .input="${this.formInput_INPUT({id:"client_subscription_fee",name:"client_subscription_fee",label:"Subscription Fee",placeholder:"Subscription Fee",disabled:!0,value:this.subscriptionFee})}" .select="${!1}" .error="${this.subscriptionFeeError}"></form-input>
                ${this._paySuccess?o.dy`<div class="items-center">
                    <contitnue-to-pay class="w-full" message="${this._paySuccessMessage}" 
                    token="${this._paySuccessToken}" ?visible="${this._paySuccessVisible}"
                    ?error="${this._paySuccessError}"></contitnue-to-pay>

                    ${this._paySuccessError?o.dy``:o.dy`<payment-status class="w-full" 
                    token="${this._paySuccessToken}" clientId="${this.clientInfo.clientId}" 
                    ?visible="${this._paySuccessVisible}">
                  </payment-status>`} </div>`:o.dy``}
                <is-loading size="16" id="pay-is-loading" class="${this._payIsLoadingVal?"block":"hidden"}"></is-loading>
                <div class="flex justify-center">
                  <button type="submit"
                    class="inline-block px-5 py-3 rounded-lg shadow-md bg-green-600 text-sm text-white uppercase tracking-wider font-semibold">
                    Pay Renewal Fee
                  </button>
                </div>
              </form>
            </div>
          </diV>
        `):o.dy``}}formInput_INPUT(e){return e}getSubscriptionFee(e){return O(this,void 0,void 0,(function*(){e.preventDefault(),this._getFeeIsLoadingVal=!0;const t=yield function({clientId:e,noDuration:t,durationId:i,accountTypeId:o,clientMembershipSizeId:n}){return s=this,r=void 0,a=function*(){let s=null;try{const r=yield l(f.URLS.GET_SUBSCRIPTION_FEE+"?account_type_id="+o+"&no_duration="+t+"&client_id="+e+"&size_id="+n+"&duration_id="+i);s=!0===r.error?{error:{error:r.msg}}:{fee:r.data.fee}}catch(e){return console.error({error:e}),{error:{error:f.ERROR_MSG}}}return s},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{n(a.next(e))}catch(e){t(e)}}function o(e){try{n(a.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}n((a=a.apply(s,r||[])).next())}));var s,r,c,a}({noDuration:!1,clientId:this.clientInfo.clientId,accountTypeId:this._accountType.value,durationId:this._clientSubscriptionDuration.value,clientMembershipSizeId:this._clientMembershipSize.value});void 0!==t.error?(this.subscriptionFeeError=!0,this.subscriptionFee="Error! "+t.error.error):(this.subscriptionFeeError=!1,this.subscriptionFee="GHC "+t.fee),this._getFeeIsLoadingVal=!1}))}payActivationFee(e){return O(this,void 0,void 0,(function*(){e.preventDefault(),console.log({e}),this._payIsLoadingVal=!0,this._paySuccessVisible=!1,this._paySuccessError=!1;const t=yield function({clientId:e,accountTypeId:t,clientMembershipSizeId:i,clientSubscriptionDurationId:o}){return n=this,s=void 0,c=function*(){let n=null;try{const s=JSON.stringify({client_id:e,account_type:t,client_membership_size:i,client_subscription_duration:o}),r=yield l(f.URLS.PAY_SUBSCRIPTION_FEE,{method:"POST",body:s});if(console.log({response:r}),!0===r.error){let e;if(Array.isArray(r.data)){const t=r.data;console.log({DATAS:t});let i="";t.forEach((e=>{i+=e.msg+"\n"})),e={error:{error:i}}}else e={error:{error:r.msg}};n=e}else{let e={msg:r.msg,url:r.url};console.log({getPayResponse:e}),n=e}return n}catch(e){return console.error({error:e}),{error:{error:f.ERROR_MSG}}}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{l(c.next(e))}catch(e){t(e)}}function o(e){try{l(c.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,o)}l((c=c.apply(n,s||[])).next())}));var n,s,r,c}({clientId:this.clientInfo.clientId,accountTypeId:this._accountType.value,clientMembershipSizeId:this._clientMembershipSize.value,clientSubscriptionDurationId:this._clientSubscriptionDuration.value});this._paySuccess=!0,this._paySuccessVisible=!0,console.log({payActivationFee:t}),void 0===t.error||null===t.error?(this._paySuccessToken=t.url,this._paySuccessMessage=t.msg):(this._paySuccessError=!0,this._paySuccessMessage=t.error.error),this._payIsLoadingVal=!1}))}createRenderRoot(){return this}};C([(0,$.I)("#account_type")],T.prototype,"_accountType",void 0),C([(0,$.I)("#client_membership_size")],T.prototype,"_clientMembershipSize",void 0),C([(0,$.I)("#client_subscription_duration")],T.prototype,"_clientSubscriptionDuration",void 0),C([(0,$.I)("#client_subscription_fee")],T.prototype,"_clientSubscriptionFee",void 0),C([(0,$.I)("#pay-is-loading")],T.prototype,"_payIsLoading",void 0),C([(0,$.I)("#get-fee-is-loading")],T.prototype,"_getFeeIsLoading",void 0),C([(0,$.I)("#form-submit-button")],T.prototype,"_formSubmitButton",void 0),C([(0,s.C)({type:Object})],T.prototype,"clientInfo",void 0),C([(0,s.C)({type:Boolean})],T.prototype,"subscriptionFeeError",void 0),C([(0,s.C)({type:String})],T.prototype,"subscriptionFee",void 0),C([(0,s.C)({type:Array})],T.prototype,"subscriptionDurations",void 0),C([(0,s.C)({type:Object})],T.prototype,"_selectOption",void 0),C([(0,s.C)({type:Boolean})],T.prototype,"_paySuccess",void 0),C([(0,s.C)({type:String})],T.prototype,"_paySuccessToken",void 0),C([(0,s.C)({type:String})],T.prototype,"_paySuccessMessage",void 0),C([(0,s.C)({type:Boolean})],T.prototype,"_paySuccessError",void 0),C([(0,s.C)({type:Boolean})],T.prototype,"_paySuccessVisible",void 0),C([(0,s.C)({type:Boolean})],T.prototype,"_payIsLoadingVal",void 0),C([(0,s.C)({type:Boolean})],T.prototype,"_getFeeIsLoadingVal",void 0),T=C([(0,n.M)("activation-form")],T);var j=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let k=class extends o.oi{constructor(e){super(),this.title="",this.title=null==e?void 0:e.title}render(){return o.dy`
      <header class="p-4 w-full shadow-xl bg-white fixed top-0 left-0 right-0 z-10">
        <div class="flex">
          <div class="w-1/3 relative">
            <img src="${f.IMAGES.akwaabaLogo}" class="absolute inset-0 h-8 w-auto object-contain object-center">
          </div>
          <div class="w-2/3 pl-4">
            <h1 class="font-bold text-gray-700 uppercase">
              ${this.title}
            </h1>
          </div>
        </div>
      </header>
    `}createRenderRoot(){return this}};j([(0,s.C)({type:String})],k.prototype,"title",void 0),k=j([(0,n.M)("app-header")],k);let E=class extends o.oi{constructor(){super()}render(){return o.dy`
      <footer class="py-2.5 px-4 w-full shadow-xl border bg-white fixed bottom-0 left-0 right-0">
        <div class="absolute right-4 bottom-16">
          <a href="https://api.whatsapp.com/send?phone=+233206007255&text="
            class="inline-block px-4 py-2 text-white bg-green-500 shadow rounded border
            text-xs uppercase tracking-wide"> <i class="fa fa-whatsapp"></i> Whatsapp Us
          </a>
        </div>
        <div class="block">
          <div class="text-center w-full">
            <a href="${f.URLS.PUBLIC_BASE_URL}" target="_blank"
              class="text-yellow-600 text-xs uppercase font-semibold tracking-wide">
              AKWAABA &copy; ${(new Date).getFullYear()}
            </a>
          </div>
          <div class="text-center w-full">
            <a href="${f.URLS.CLICK_COM_BASE_URL}" target="_blank"
              class="text-yellow-600 text-xs uppercase font-normal tracking-wide">
              Powered by Click Communications Ltd
            </a>
          </div>
        </div>
      </footer>
    `}createRenderRoot(){return this}};E=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}([(0,n.M)("app-footer2")],E);var P=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let A=class extends o.oi{constructor(){var e;super(),this.clientID=0,this.clientInfo=null,this.clientID=Number(null===(e=f.HTTPS.GET.get("client"))||void 0===e?void 0:e.value),console.log({"this.clientID":isNaN(this.clientID)}),isNaN(this.clientID)||function(e){return t=this,i=void 0,n=function*(){let t=null;try{const i=yield l(f.URLS.GET_CLIENT_INFO+"?client_id="+e);if(!0===i.error){let e={error:{error:i.msg}};t=e}else{const e=i.data;console.log({DATAS:e}),e.forEach((e=>{let i=[];e.subscriptionDurations.forEach((e=>{i.push({id:e.id,name:e.info})}));const o=e.membershipSize,n={id:o.id,name:o.info},s=e.accountType,r={id:s.id,name:s.info};let l={name:e.name,image:e.image,clientId:e.clientId,isSpecial:e.isSpecial,accountType:r,membershipSize:n,subscriptionDurations:i};t=l}))}}catch(e){return console.error({error:e}),{error:{error:f.ERROR_MSG}}}return t},new((o=void 0)||(o=Promise))((function(e,s){function r(e){try{c(n.next(e))}catch(e){s(e)}}function l(e){try{c(n.throw(e))}catch(e){s(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(r,l)}c((n=n.apply(t,i||[])).next())}));var t,i,o,n}(this.clientID).then((e=>{this.clientInfo=e}))}render(){return isNaN(this.clientID)||0===this.clientID?(console.log({"this.clientID":this.clientID}),o.dy`
        <app-header title="Account Renewal"></app-header>
        <main class="mt-14 mb-28 p-4 pb-48 h-screen">
          <div class="mt-4">
            <client-not-found></client-not-found>
          </div>
        </main>
        <app-footer2></app-footer2>
      `):o.dy`
        <app-header title="Account Renewal"></app-header>
        <main class="mt-14 mb-28 p-4 pb-48 h-screen">
          <div class="mt-4">
            <client-banner .clientInfo="${this.clientInfo}"></client-banner>
          </div>
          <div class="mt-4">
            <activation-form .clientInfo="${this.clientInfo}"></activation-form>
          </div>
        </main>
        <app-footer2></app-footer2>
      `}getClientInfo(){return e=this,t=void 0,o=function*(){let e=null;try{const t=yield l("/images/sample.json");if(!0===t.error){let i={error:{error:t.msg}};e=i}else t.data.forEach((t=>{let i=[];t.subscriptionDurations.forEach((e=>{i.push({id:e.id,name:e.name})}));let o={name:t.name,image:t.image,isSpecial:t.isSpecial,accountType:t.accountType,membershipSize:t.membershipSize,subscriptionDurations:i};e=o}))}catch(e){console.error({error:e})}return this.clientInfo=e,e},new((i=void 0)||(i=Promise))((function(n,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}));var e,t,i,o}createRenderRoot(){return this}};P([(0,s.C)({type:Number})],A.prototype,"clientID",void 0),P([(0,s.C)({type:Object})],A.prototype,"clientInfo",void 0),A=P([(0,n.M)("app-view")],A);let D=class extends o.oi{render(){return o.dy`
      <div class="antialiased text-gray-900 bg-gray-50">
        ${new A}
      </div>
    `}createRenderRoot(){return this}};D=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}([(0,n.M)("akwaaba-app-general-account-activation")],D)}},e=>(e.O(0,[216,712],(()=>(67,e(e.s=67)))),e.O())])}));
//# sourceMappingURL=index.js.map