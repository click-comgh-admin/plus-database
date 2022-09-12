"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-e1e327"],{9579:(e,r,n)=>{n.r(r)},5501:(e,r,n)=>{n.r(r)},8967:(e,r,n)=>{n.r(r),n.d(r,{__swalStyle:()=>o,https_swal_error_format:()=>t});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",t=(e,r=!0)=>{if(Array.isArray(e)){let n=(r?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,r,n)=>{n.r(r),n.d(r,{urlQueryParams:()=>o,urlQueryParamsGet:()=>t,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},t=e=>{const r=new URLSearchParams(window.location.search),n=Object.fromEntries(r.entries());let o=null;for(const r in n)r===e&&(o=n[r]);return o},s=e=>{let r="",n=0;for(const o in e)n+=1,r+=`${n>1?"&":""}${o}=${e[o]}`;return r}},5482:(e,r,n)=>{n.r(r),n.d(r,{DELETE_MemberGroupingsMemberCategory:()=>f});var o=n(6455),t=n.n(o),s=n(8485),i=n(7270),a=n(4492),c=n(8967),l=n(3600),u=function(e,r,n,o){return new(n||(n=Promise))((function(t,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}c((o=o.apply(e,r||[])).next())}))};function f(e){return u(this,void 0,void 0,(function*(){const r=(0,l.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,o={};return t().fire({title:"Remove Member Category?",text:"You may have members assigned to this category. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+r.token}},!1).then((e=>{try{const r=new a.NetWorkCallResponses("delete",e,!1),n=r.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((r=>{r.errors.forEach((r=>{e.push({error:r})}))}));const r=(0,c.https_swal_error_format)(e);t().showValidationMessage(`${r}`)}return r}catch(r){console.error({error:r});let n=e;n.error=r;const o=new a.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{t().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!t().isLoading()}).then((e=>{if(e.isConfirmed){let r="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;r=String(e.message),n=o.response.success}t().fire({title:r,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},72:(e,r,n)=>{n.r(r),n.d(r,{GET_MemberGroupingsMemberCategories:()=>a});var o=n(8485),t=n(7270),s=n(4492),i=n(3600);function a(e=null){return r=this,n=void 0,c=function*(){const r=(0,i.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),a=yield(0,t.http)(n,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new s.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let r=a;return r.error=e,new s.NetWorkCallResponses("get",r,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function t(e){try{i(c.next(e))}catch(e){o(e)}}function s(e){try{i(c.throw(e))}catch(e){o(e)}}function i(r){var n;r.done?e(r.value):(n=r.value,n instanceof a?n:new a((function(e){e(n)}))).then(t,s)}i((c=c.apply(r,n||[])).next())}));var r,n,a,c}},519:(e,r,n)=>{n.r(r),n.d(r,{POST_MemberIdPrefix:()=>f});var o=n(6455),t=n.n(o),s=n(8485),i=n(7270),a=n(4492),c=n(8967),l=n(3600),u=function(e,r,n,o){return new(n||(n=Promise))((function(t,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}c((o=o.apply(e,r||[])).next())}))};function f(){return u(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix",n=document.querySelector('[make-general-posts="member-id-prefix"]'),o=new FormData(n);return t().fire({title:"Add Member Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(r,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const r=new a.NetWorkCallResponses("post",e,!1,n),o=r.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((r=>{r.errors.forEach((n=>{let o={error:r.id+": "+n};"non_field_errors"===r.id&&(o={error:n}),e.push(o)}))}));const r=(0,c.https_swal_error_format)(e);t().showValidationMessage(`${r}`)}return r})).catch((e=>{t().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!t().isLoading()}).then((e=>{if(e.isConfirmed){let r="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;r=String(e.message),n=o.response.success}n&&t().fire({title:r,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-e1e327.js.map