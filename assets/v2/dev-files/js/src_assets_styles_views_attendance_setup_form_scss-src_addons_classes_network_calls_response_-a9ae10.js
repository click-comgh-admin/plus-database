(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_classes_network_calls_response_-a9ae10"],{9579:(e,t,s)=>{"use strict";s.r(t)},4492:(e,t,s)=>{"use strict";s.r(t),s.d(t,{NetWorkCallResponses:()=>n});var o=s(1942),r=s(6217);class n{constructor(e,t,s=!1,r=null){this.response=null,this.multipleResponse=null,this.paginResponse=null,this.databaseResponse=null,this.postForm=null;const n=t.jsonData,a=t.response;if(this.postForm=r,t.response.ok){const e=String(window.supersecret.unknowable.ops.cookieName);(0,o.set_cookies_minutes)(`${e}_date`,(new Date).toUTCString(),10)}s?this.error(t.error):"get"===e?this.get(n,a):"post"===e?this.post(n,a):"post-file"===e?this.postFile(n,a):"put"===e?this.put(n,a):"patch"===e?this.patch(n,a):"delete"===e&&this.delete(n,a)}error(e){this.response=e}outputResponse(e,t,s){return{success:e,message:t,data:s}}outputResponsePagin(e){return{count:e.count,next:e.next,previous:e.previous,results:e.results}}outputResponseDatatable(e){return{data:e.data,datatable_plugin:e.datatable_plugin,draw:e.draw,recordsFiltered:e.recordsFiltered,recordsTotal:e.recordsTotal}}outputErrorResponse(e,t,s,o,r){return{success:e,message:t,nameError:s,unknownError:o,data:r}}get(e,t){let s;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))s=e;else{if(e.hasOwnProperty("count")&&e.hasOwnProperty("next")&&e.hasOwnProperty("previous")&&e.hasOwnProperty("results"))return this.paginResponse=this.outputResponsePagin(e),this.paginResponse;if(e.hasOwnProperty("draw")&&e.hasOwnProperty("recordsTotal")&&e.hasOwnProperty("recordsFiltered")&&e.hasOwnProperty("data"))return this.databaseResponse=this.outputResponseDatatable(e),this.databaseResponse;e.hasOwnProperty("detail")&&404===t.status&&(s={data:[],message:e.detail,success:!1})}this.response=this.outputResponse(s.success,s.message,s.data)}postFile(e,t){throw new Error("Method not implemented.")}post(e,t){let s;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))s=e;else if(Array.isArray(e))if(t.ok){const t=e[0].SUCCESS_RESPONSE_MESSAGE;e.map((e=>(delete e.SUCCESS_RESPONSE_MESSAGE,e))),this.response=this.outputResponse(!0,t,e)}else{let t=[];e.forEach((e=>{s=this.postError(e);const o=this.outputErrorResponse(s.success,s.message,s.nameError,s.unknownError,s.data);t.includes(o)||t.push(o)})),this.multipleResponse=t}else if(t.ok){const t=e.SUCCESS_RESPONSE_MESSAGE;delete e.SUCCESS_RESPONSE_MESSAGE,this.response=this.outputResponse(!0,t,e)}else s=this.postError(e),this.response=this.outputErrorResponse(s.success,s.message,s.nameError,s.unknownError,s.data)}postError(e){const t=this.postErrorFields(e),s=this.postNamedErrorFields(t),o=this.postNonNamedErrorFields(t),r=this.postErrorInputs(s,o);return{success:!1,message:t,nameError:r.nameErrorFields,unknownError:r.nonNameErrorFields,data:e}}postErrorFields(e){let t=[];for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)){const o={id:s,errors:e[s]};t.includes(o)||t.push(o)}return t}postNamedErrorFields(e){let t=[];return e.forEach((e=>{"non_field_errors"!==e.id&&(t.includes(e)||t.push(e))})),t}postNonNamedErrorFields(e){let t=[];return e.forEach((e=>{"non_field_errors"===e.id&&(t.includes(e)||t.push(e))})),t}validateInput(e){e.hasOwnProperty("mdcFoundation")&&(e.setCustomValidity(""),e.isUiValid=!0,e.validityTransform=(e,t)=>t.valid?{}:{valid:!1,customError:!0})}postErrorInputs(e,t){const s=JSON.parse((0,r.formDataToJson)(new FormData(this.postForm)));for(const e in s){let t;try{t=document.querySelector("[name="+e+"]")}catch(s){t=document.querySelector("[id="+e.replace("[]","")+"]")}this.validateInput(t),t.addEventListener("change",(e=>{this.validateInput(t)}))}return e.forEach((e=>{document.querySelectorAll('[id="'+e.id+'"]').forEach((s=>{if(s.hasOwnProperty("mdcFoundation"))try{const t=e.errors;if(Array.isArray(t))s.setCustomValidity(t.join("\n"));else{let e=[];for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&t[s].forEach((t=>{e.push(`Item ${s}: ${t}`)}));s.setCustomValidity(e.join("\n"))}s.reportValidity(),s.isUiValid=!1}catch(e){}else t.includes(e)||t.push(e)}))})),{nameErrorFields:e,nonNameErrorFields:t}}put(e,t){this.response=e}patch(e,t){this.response=e}delete(e,t){let s;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))s=e;else if(t.ok){const t="Deleted";this.response=this.outputResponse(!0,t,e)}else e.hasOwnProperty("detail")&&404===t.status&&(s={data:[],message:e.detail,success:!1},this.response=this.outputResponse(s.success,s.message,[]))}}},8485:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CONSTANTS:()=>n});var o=s(3133),r=s(4510);const n={URLS:s(577).URLS,APP_SETTINGS:r.APP_SETTINGS,SERVICE_WORKER_TYPES:o.SERVICE_WORKER_TYPES};window.CONSTANTS=n},3133:(e,t,s)=>{"use strict";s.r(t),s.d(t,{SERVICE_WORKER_TYPES:()=>o});const o={postAction:"POST_ACTION",networkStatus:"NETWORK_STATUS"}},4510:(e,t,s)=>{"use strict";let o;s.r(t),s.d(t,{APP_SETTINGS:()=>r}),o=!!window.location.href.includes(void 0);const r={production:!1,isClientApp:o}},577:(e,t,s)=>{"use strict";let o,r,n,a,i,c,p,l,u;if(s.r(t),s.d(t,{URLS:()=>d}),s(4510).APP_SETTINGS.production){const e="akwaabaapp.com/";r="https://api.akwaabaapp.com/",n="https://api."+e,l="akwaabaclients."+e,o="https://"+l,c="https://akwaabaapp."+e,a="https://file-bucket.akwaabaapp.com/",i=o+"",p=c+"",u="https://clocking.akwaabaapp.com/"}else{l="akwaaba-forms/";const e="192.168.173.1";o="http://127.0.0.1:9001/",r="http://"+e+"/AMG/plus_db/api/",n=o+"api/",u="http://"+e+"/AMG/plus_db/client_dashboard/",a="http://"+e+"/AMG/plus_db/file_bucket/",i=o+l,p=o+"akwaaba-forms-public/"}const d={BASE_URL:o,API_BASE_URL:r,PDB_CLIENT:u,AKWAABA_API_BASE_URL:n,FILE_BUCKET_BASE_URL:a,HOME_PAGE_BASE_URL:i,PUBLIC_PAGE_BASE_URL:p,LOGIN_PAGE_BASE_URL:void 0,PUBLIC_LOGIN_PAGE_BASE_URL:void 0,PUBLIC_BASE_URL:"https://akwaabaapp.com/",CLICK_COM_BASE_URL:"https://clickcomgh.com/"}},3750:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ACTIVE_PAGE__:()=>o});const o=()=>{const e=document.querySelectorAll("[mm-active]"),t=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];e.forEach((e=>{var s=e.getAttribute("mm-active").split("|");for(let o=0;o<s.length;o++){const r=s[o];t===r&&e.setAttribute("class","mm-active")}}))}},7052:(e,t,s)=>{"use strict";s.r(t),s.d(t,{base64Encode:()=>r,base64Decode:()=>n});var o=s(8764);const r=e=>o.Buffer.from(e).toString("base64"),n=e=>o.Buffer.from(e,"base64").toString()},1942:(e,t,s)=>{"use strict";function o(e,t,s=1){let o=new Date;o.setHours(o.getHours()+3*s);let r="expires="+o.toUTCString();n(e)!=t&&(document.cookie=e+"="+t+"; expires=expires="+r)}function r(e,t,s=1){let o=new Date;o.setMinutes(o.getMinutes()+s);let r="expires="+o.toUTCString();n(e)!=t&&(document.cookie=e+"="+t+"; expires=expires="+r)}function n(e){e+="=";let t=decodeURIComponent(document.cookie).split(";");for(let s=0;s<t.length;s++){let o=t[s];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}s.r(t),s.d(t,{set_cookies:()=>o,set_cookies_minutes:()=>r,get_cookie:()=>n})},6217:(e,t,s)=>{"use strict";s.r(t),s.d(t,{formDataToJson:()=>o});const o=e=>{let t={};return e.forEach(((e,s)=>{Reflect.has(t,s)?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(e)):t[s]=e})),JSON.stringify(t)}},7270:()=>{},8967:(e,t,s)=>{"use strict";s.r(t),s.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let s=(t?o:"")+"<ul>";return e.forEach((e=>{s+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),s+="</ul>"}throw new Error("Unknown error response format")}},3600:(e,t,s)=>{"use strict";s.r(t),s.d(t,{verifyToken:()=>c,tokenLogin:()=>l});var o=s(8485),r=s(7270),n=s(7052),a=s(1942),i=function(e,t,s,o){return new(s||(s=Promise))((function(r,n){function a(e){try{c(o.next(e))}catch(e){n(e)}}function i(e){try{c(o.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,i)}c((o=o.apply(e,t||[])).next())}))};const c=(e,t,s)=>i(void 0,void 0,void 0,(function*(){const c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",l=s,u=(0,a.get_cookie)(l),d=JSON.stringify({token:(0,n.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,a.get_cookie)(l+"_date"))))return u;yield(0,r.http)(c,{method:"POST",body:d},!0).then((o=>i(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,n.base64Encode)(String(o.jsonData.token));(0,a.set_cookies)(l,e,10),(0,a.set_cookies_minutes)(l+"_date",(new Date).toUTCString(),10)}else yield p(e,t,s)}))))})),p=(e,t,s)=>i(void 0,void 0,void 0,(function*(){const i=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=s,p=JSON.stringify({email:e,id:t});yield(0,r.http)(i,{method:"POST",body:p},!0).then((e=>{if(e.jsonData.token){const t=(0,n.base64Encode)(String(e.jsonData.token));(0,a.set_cookies)(c,t,10),(0,a.set_cookies_minutes)(c+"_date",(new Date).toUTCString(),10)}}))})),l=(e,t,s)=>i(void 0,void 0,void 0,(function*(){const o=(0,n.base64Encode)(String(t)),r=s;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:r}}},""==(0,a.get_cookie)(r)?yield p(e,o,s):yield c(e,o,s)}))}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_classes_network_calls_response_-a9ae10.js.map