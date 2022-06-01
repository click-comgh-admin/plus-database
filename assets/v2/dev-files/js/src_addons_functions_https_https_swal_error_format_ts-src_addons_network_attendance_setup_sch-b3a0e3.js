"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_https_https_swal_error_format_ts-src_addons_network_attendance_setup_sch-b3a0e3"],{4492:(e,s,t)=>{t.r(s),t.d(s,{NetWorkCallResponses:()=>n});var r=t(1942),o=t(6217);class n{constructor(e,s,t=!1,o=null){this.response=null,this.multipleResponse=null,this.paginResponse=null,this.databaseResponse=null,this.postForm=null;const n=s.jsonData,a=s.response;if(this.postForm=o,s.response.ok){const e=String(window.supersecret.unknowable.ops.cookieName);(0,r.set_cookies_minutes)(`${e}_date`,(new Date).toUTCString(),10)}t?this.error(s.error):"get"===e?this.get(n,a):"post"===e?this.post(n,a):"put"===e?this.put(n,a):"patch"===e?this.patch(n,a):"delete"===e&&this.delete(n,a)}error(e){this.response=e}outputResponse(e,s,t){return{success:e,message:s,data:t}}outputResponsePagin(e){return{count:e.count,next:e.next,previous:e.previous,results:e.results}}outputResponseDatatable(e){return{data:e.data,datatable_plugin:e.datatable_plugin,draw:e.draw,recordsFiltered:e.recordsFiltered,recordsTotal:e.recordsTotal}}outputErrorResponse(e,s,t,r,o){return{success:e,message:s,nameError:t,unknownError:r,data:o}}get(e,s){let t;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))t=e;else{if(e.hasOwnProperty("count")&&e.hasOwnProperty("next")&&e.hasOwnProperty("previous")&&e.hasOwnProperty("results"))return this.paginResponse=this.outputResponsePagin(e),this.paginResponse;if(e.hasOwnProperty("draw")&&e.hasOwnProperty("recordsTotal")&&e.hasOwnProperty("recordsFiltered")&&e.hasOwnProperty("data"))return this.databaseResponse=this.outputResponseDatatable(e),this.databaseResponse;e.hasOwnProperty("detail")&&404===s.status&&(t={data:[],message:e.detail,success:!1})}this.response=this.outputResponse(t.success,t.message,t.data)}post(e,s){let t;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))t=e;else if(Array.isArray(e))if(s.ok){const s=e[0].SUCCESS_RESPONSE_MESSAGE;e.map((e=>(delete e.SUCCESS_RESPONSE_MESSAGE,e))),this.response=this.outputResponse(!0,s,e)}else{let s=[];e.forEach((e=>{t=this.postError(e);const r=this.outputErrorResponse(t.success,t.message,t.nameError,t.unknownError,t.data);s.includes(r)||s.push(r)})),this.multipleResponse=s}else if(s.ok){const s=e.SUCCESS_RESPONSE_MESSAGE;delete e.SUCCESS_RESPONSE_MESSAGE,this.response=this.outputResponse(!0,s,e)}else t=this.postError(e),this.response=this.outputErrorResponse(t.success,t.message,t.nameError,t.unknownError,t.data)}postError(e){const s=this.postErrorFields(e),t=this.postNamedErrorFields(s),r=this.postNonNamedErrorFields(s),o=this.postErrorInputs(t,r);return{success:!1,message:s,nameError:o.nameErrorFields,unknownError:o.nonNameErrorFields,data:e}}postErrorFields(e){let s=[];for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const r={id:t,errors:e[t]};s.includes(r)||s.push(r)}return s}postNamedErrorFields(e){let s=[];return e.forEach((e=>{"non_field_errors"!==e.id&&(s.includes(e)||s.push(e))})),s}postNonNamedErrorFields(e){let s=[];return e.forEach((e=>{"non_field_errors"===e.id&&(s.includes(e)||s.push(e))})),s}validateInput(e){e.hasOwnProperty("mdcFoundation")&&(e.setCustomValidity(""),e.isUiValid=!0,e.validityTransform=(e,s)=>s.valid?{}:{valid:!1,customError:!0})}postErrorInputs(e,s){const t=JSON.parse((0,o.formDataToJson)(new FormData(this.postForm)));for(const e in t){let s;try{s=document.querySelector("[name="+e+"]")}catch(t){s=document.querySelector("[id="+e.replace("[]","")+"]")}this.validateInput(s),s.addEventListener("change",(e=>{this.validateInput(s)}))}return e.forEach((e=>{document.querySelectorAll('[id="'+e.id+'"]').forEach((t=>{if(t.hasOwnProperty("mdcFoundation"))try{const s=e.errors;if(Array.isArray(s))t.setCustomValidity(s.join("\n"));else{let e=[];for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&s[t].forEach((s=>{e.push(`Item ${t}: ${s}`)}));t.setCustomValidity(e.join("\n"))}t.reportValidity(),t.isUiValid=!1}catch(e){}else s.includes(e)||s.push(e)}))})),{nameErrorFields:e,nonNameErrorFields:s}}put(e,s){this.response=e}patch(e,s){this.response=e}delete(e,s){let t;if(e.hasOwnProperty("success")&&e.hasOwnProperty("message")&&e.hasOwnProperty("data"))t=e;else if(s.ok){const s="Deleted";this.response=this.outputResponse(!0,s,e)}else e.hasOwnProperty("detail")&&404===s.status&&(t={data:[],message:e.detail,success:!1},this.response=this.outputResponse(t.success,t.message,[]))}}},6217:(e,s,t)=>{t.r(s),t.d(s,{formDataToJson:()=>r});const r=e=>{let s={};return e.forEach(((e,t)=>{Reflect.has(s,t)?(Array.isArray(s[t])||(s[t]=[s[t]]),s[t].push(e)):s[t]=e})),JSON.stringify(s)}},8967:(e,s,t)=>{t.r(s),t.d(s,{__swalStyle:()=>r,https_swal_error_format:()=>o});const r="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important;}</style>",o=(e,s=!0)=>{if(Array.isArray(e)){let t=(s?r:"")+"<ul>";return e.forEach((e=>{t+=`<li>${e.error}</li>\n`})),t+="</ul>"}throw new Error("Unknown error response format")}},2218:(e,s,t)=>{t.r(s),t.d(s,{GET_AttendanceSchedule:()=>l});var r=t(8485),o=t(1942),n=t(7270),a=t(7052),i=t(4492),p=t(3600);function l(e=null,s="",t="client_tokenLogin"){return l=this,u=void 0,d=function*(){const l=String(window.supersecret.unknowable.ops.id),u=String(window.supersecret.unknowable.ops.email);yield(0,p.verifyToken)(u,l,t);const c=(0,a.base64Decode)((0,o.get_cookie)(t)),d=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+s,h=yield(0,n.http)(d,{method:"GET",headers:{Authorization:"Token "+c}},!0);try{return new i.NetWorkCallResponses("get",h)}catch(e){console.error({error:e});let s=h;return s.error=e,new i.NetWorkCallResponses("get",s,!0)}},new((c=void 0)||(c=Promise))((function(e,s){function t(e){try{o(d.next(e))}catch(e){s(e)}}function r(e){try{o(d.throw(e))}catch(e){s(e)}}function o(s){var o;s.done?e(s.value):(o=s.value,o instanceof c?o:new c((function(e){e(o)}))).then(t,r)}o((d=d.apply(l,u||[])).next())}));var l,u,c,d}}}]);
//# sourceMappingURL=src_addons_functions_https_https_swal_error_format_ts-src_addons_network_attendance_setup_sch-b3a0e3.js.map