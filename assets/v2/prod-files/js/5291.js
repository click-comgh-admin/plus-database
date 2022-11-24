"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[5291],{596:(e,t,s)=>{s.d(t,{H:()=>r});class r{constructor(e,t,s=!1,r=null){this.response=null,this.nonFieldErrorResponse=null,this.multipleResponse=null,this.paginResponse=null,this.databaseResponse=null,this.postForm=null;const o=t.jsonData,n=t.response;this.postForm=r,s?this.error(t.error):"get"===e?this.get(o,n):"post"===e?this.post(o,n):"post-file"===e?this.postFile(o,n):"put"===e?this.put(o,n):"patch"===e?this.patch(o,n):"delete"===e&&this.delete(o,n)}error(e){this.response=e}outputResponse(e,t,s){return{success:e,message:t,data:s}}outputResponsePagin(e){return{count:e.count,next:e.next,previous:e.previous,results:e.results}}outputResponseDatatable(e){return{data:e.data,datatable_plugin:e.datatable_plugin,draw:e.draw,recordsFiltered:e.recordsFiltered,recordsTotal:e.recordsTotal}}outputErrorResponse(e,t,s,r,o){return{success:e,message:t,nameError:s,unknownError:r,data:o}}get(e,t){let s;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))s=e;else{if(e.hasOwnProperty("count")&&e.hasOwnProperty("next")&&e.hasOwnProperty("previous")&&e.hasOwnProperty("results"))return this.paginResponse=this.outputResponsePagin(e),this.paginResponse;if(e.hasOwnProperty("draw")&&e.hasOwnProperty("recordsTotal")&&e.hasOwnProperty("recordsFiltered")&&e.hasOwnProperty("data"))return this.databaseResponse=this.outputResponseDatatable(e),this.databaseResponse;e.hasOwnProperty("detail")&&404===t.status&&(s={data:[],message:e.detail,success:!1})}this.response=this.outputResponse(s.success,s.message,s.data)}postFile(e,t){throw new Error("Method not implemented.")}post(e,t){let s;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))s=e;else if(Array.isArray(e))if(t.ok){const t=e[0].SUCCESS_RESPONSE_MESSAGE;e.map((e=>(delete e.SUCCESS_RESPONSE_MESSAGE,e))),this.response=this.outputResponse(!0,t,e)}else{let t=[];e.forEach((e=>{s=this.postError(e);const r=this.outputErrorResponse(s.success,s.message,s.nameError,s.unknownError,s.data);t.includes(r)||t.push(r)})),this.multipleResponse=t}else if(t.ok){const t=e.SUCCESS_RESPONSE_MESSAGE;delete e.SUCCESS_RESPONSE_MESSAGE,this.response=this.outputResponse(!0,t,e)}else s=this.postError(e),this.response=this.outputErrorResponse(s.success,s.message,s.nameError,s.unknownError,s.data)}postError(e){const t=this.postErrorFields(e),s=this.postNamedErrorFields(t),r=this.postNonNamedErrorFields(t),o=this.postErrorInputs(s,r);return{success:!1,message:t,nameError:o.nameErrorFields,unknownError:o.nonNameErrorFields,data:e}}postErrorFields(e){let t=[];for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)){const r={id:s,errors:e[s]};t.includes(r)||t.push(r)}return t}postNamedErrorFields(e){let t=[];return e.forEach((e=>{"non_field_errors"!==e.id&&(t.includes(e)||t.push(e))})),t}postNonNamedErrorFields(e){let t=[];return e.forEach((e=>{"non_field_errors"===e.id&&(t.includes(e)||t.push(e))})),t}validateInput(e){e.hasOwnProperty("mdcFoundation")&&(e.setCustomValidity(""),e.isUiValid=!0,e.validityTransform=(e,t)=>t.valid?{}:{valid:!1,customError:!0})}postErrorInputs(e,t){if(null!==this.postForm){const e=JSON.parse((e=>{let t={};return e.forEach(((e,s)=>{Reflect.has(t,s)?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(e)):t[s]=e})),JSON.stringify(t)})(new FormData(this.postForm)));for(const t in e){let e;try{e=document.querySelector('[name="'+t+'"]')}catch(s){const r=t.replace("[]","");e=document.querySelector('[id="'+r+'"]')}this.validateInput(e),e.addEventListener("change",(t=>{this.validateInput(e)}))}}return e.forEach((e=>{document.querySelectorAll('[id="'+e.id+'"]').forEach((s=>{if(s.hasOwnProperty("mdcFoundation"))try{const t=e.errors;if(Array.isArray(t))s.setCustomValidity(t.join("\n"));else{let e=[];for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&t[s].forEach((t=>{e.push(`Item ${s}: ${t}`)}));s.setCustomValidity(e.join("\n"))}s.reportValidity(),s.isUiValid=!1}catch(e){}else t.includes(e)||t.push(e)}))})),{nameErrorFields:e,nonNameErrorFields:t}}put(e,t){this.post(e,t)}patch(e,t){this.post(e,t)}delete(e,t){let s;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))s=e;else if(t.ok){const t="Deleted";this.response=this.outputResponse(!0,t,e)}else e.hasOwnProperty("detail")&&404===t.status&&(s={data:[],message:e.detail,success:!1},this.response=this.outputResponse(s.success,s.message,[]))}}},771:(e,t,s)=>{let r;s.d(t,{t:()=>m}),r=!!window.location.href.includes(void 0);const o={production:!0,isClientApp:r};let n,a,i,u,p,c,l,d,h,f;if(o.production){const e="akwaabasoftware.com/";a="https://db-api.akwaabasoftware.com/",i="https://db-api-v2."+e,h="akwaabaclients."+e,n="https://"+h,l="https://akwaabaapp."+e,u="https://file-bucket.akwaabasoftware.com/",p=n+"",d=l+"",f="https://database.akwaabasoftware.com/",c=f+"login"}else{h="akwaaba-forms/";const e="192.168.173.1";n="http://127.0.0.1:9001/",a="http://"+e+"/AMG/plus_db/api/",i=n+"api/",f="http://"+e+":82/",u="http://"+e+"/AMG/plus_db/file_bucket/",p=n+h,d=n+"akwaaba-forms-public/",c=f+"login"}const m={URLS:{BASE_URL:n,API_BASE_URL:a,PDB_CLIENT:f,AKWAABA_API_BASE_URL:i,FILE_BUCKET_BASE_URL:u,HOME_PAGE_BASE_URL:p,PUBLIC_PAGE_BASE_URL:d,LOGIN_PAGE_BASE_URL:c,PUBLIC_LOGIN_PAGE_BASE_URL:void 0,FORGOT_PASSWORD_URL:"https://password-reset.akwaabasoftware.com/client-user/forgot-password",PUBLIC_BASE_URL:"https://akwaabasoftware.com/",CLICK_COM_BASE_URL:"https://clickcomgh.com/"},APP_SETTINGS:o,SERVICE_WORKER_TYPES:{postAction:"POST_ACTION",networkStatus:"NETWORK_STATUS"}};window.CONSTANTS=m},7052:(e,t,s)=>{s.d(t,{h:()=>o,t:()=>n});var r=s(8764);const o=(e,t=!1)=>{const s=r.lW.from(e).toString("base64");return t?s.replaceAll("=",""):s},n=e=>r.lW.from(e,"base64").toString()},1942:(e,t,s)=>{function r(e,t,s=1,r="/"){let o=new Date;o.setHours(o.getHours()+3*s);let a="expires="+o.toUTCString();n(e)!=t&&(document.cookie=e+"="+t+"; "+a+"; path="+r)}function o(e,t,s=1,r="/"){let o=new Date;o.setMinutes(o.getMinutes()+s);let a="expires="+o.toUTCString();n(e)!=t&&(document.cookie=e+"="+t+"; "+a+"; path="+r)}function n(e){e+="=";let t=decodeURIComponent(document.cookie).split(";");for(let s=0;s<t.length;s++){let r=t[s];for(;" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""}s.d(t,{Ad:()=>r,vh:()=>o,Hl:()=>n})},7270:(e,t,s)=>{s.d(t,{d:()=>n});var r=s(7153),o=function(e,t,s,r){return new(s||(s=Promise))((function(o,n){function a(e){try{u(r.next(e))}catch(e){n(e)}}function i(e){try{u(r.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,i)}u((r=r.apply(e,t||[])).next())}))};function n(e,t,s=!0,n=!1){return o(this,void 0,void 0,(function*(){let a=null;t=null==t?{method:"GET"}:t;var i=new Headers;if(i.append("Access-Control-Allow-Origin","*/*"),i.append("Accept","application/json, text/plain, */*"),s&&i.append("Content-Type","application/json"),void 0===t.headers)t.headers=i;else for(const e of i.keys())t.headers[e]=i.get(e);return t.mode="cors",t.redirect="follow",yield(0,r.Z)(e,t,3e5).then((e=>(a=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>o(this,void 0,void 0,(function*(){const t=204===e.status?{}:yield e.json();return n?{jsonData:{success:!0,message:"",data:t},response:e,error:""}:{jsonData:t,response:e,error:""}})))).then((e=>o(this,void 0,void 0,(function*(){return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},7153:(e,t,s)=>{s.d(t,{Z:()=>r});function r(e,t,s=7e3){return r=this,o=void 0,a=function*(){return Promise.race([fetch(e,t),new Promise(((e,t)=>{setTimeout((()=>t(new Error("Connection timeout, check network for internet access"))),s)}))])},new((n=void 0)||(n=Promise))((function(e,t){function s(e){try{u(a.next(e))}catch(e){t(e)}}function i(e){try{u(a.throw(e))}catch(e){t(e)}}function u(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,i)}u((a=a.apply(r,o||[])).next())}));var r,o,n,a}},3600:(e,t,s)=>{s.d(t,{bK:()=>i,y4:()=>u,Ie:()=>p});var r=s(1566),o=s(7052),n=s(1942);const a="pdb-client-user",i=e=>{const t=JSON.stringify(e);window.supersecret={unknowable:{ops:{email:e.user.email,id:e.user.id,cookieName:a}}},(0,n.Ad)(a,"",-1),(0,n.Ad)(a,(0,o.h)(t),3500)},u=()=>{(0,n.Ad)(a,"",-1)},p=()=>{if(""===(0,n.Hl)(a))return null;{const e=(0,o.t)((0,n.Hl)(a)),t=JSON.parse(e);return(0,r.Y)(t)}}},1566:(e,t,s)=>{function r(e){const t=e.user;return{expiry:new Date(e.expiry),token:String(e.token),user:{id:Number(t.id),accountId:Number(t.accountId),branchId:Number(t.branchId),firstname:String(t.firstname),surname:String(t.surname),phone:String(t.phone),email:String(t.email),profilePicture:String(t.profilePicture)}}}s.d(t,{Y:()=>r})}}]);
//# sourceMappingURL=5291.js.map