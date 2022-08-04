/*! For license information please see schedule.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(function(){return(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1104],{3750:(e,t,a)=>{a.d(t,{A:()=>n});const n=()=>{const e=document.querySelectorAll("[mm-active]"),t=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];e.forEach((e=>{var a=e.getAttribute("mm-active").split("|");for(let n=0;n<a.length;n++){const c=a[n];t===c&&e.setAttribute("class","mm-active")}}))}},4173:(e,t,a)=>{a.d(t,{_:()=>n});const n=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},2831:(e,t,a)=>{a.d(t,{h:()=>n});const n=e=>{const t=new Date,a=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(a)}},8967:(e,t,a)=>{a.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let a=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{a+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),a+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,a)=>{a.d(t,{B:()=>i});var n=a(771),c=a(7270),r=a(7052),s=a(1942),l=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};const d=(e,t,a)=>l(void 0,void 0,void 0,(function*(){const l=n.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",d=a,i=JSON.stringify({email:e,id:t});yield(0,c.d)(l,{method:"POST",body:i},!0).then((e=>{if(e.jsonData.token){const t=(0,r.h)(String(e.jsonData.token));(0,s.Ad)(d,t,10),(0,s.vh)(d+"_date",(new Date).toUTCString(),10)}}))})),i=(e,t,a)=>l(void 0,void 0,void 0,(function*(){const i=(0,r.h)(String(t)),o=a;window.supersecret={unknowable:{ops:{email:e,id:i,cookieName:o}}},""==(0,s.Hl)(o)?yield d(e,i,a):yield((e,t,a)=>l(void 0,void 0,void 0,(function*(){const i=n.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",o=a,u=(0,s.Hl)(o),h=JSON.stringify({token:(0,r.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.Hl)(o+"_date"))))return u;yield(0,c.d)(i,{method:"POST",body:h},!0).then((n=>l(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,r.h)(String(n.jsonData.token));(0,s.Ad)(o,e,10),(0,s.vh)(o+"_date",(new Date).toUTCString(),10)}else yield d(e,t,a)}))))})))(e,i,a)}))},1148:(e,t,a)=>{a.d(t,{e:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null){return t=this,a=void 0,d=function*(){const t=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),l=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function c(e){try{s(d.next(e))}catch(e){n(e)}}function r(e){try{s(d.throw(e))}catch(e){n(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(c,r)}s((d=d.apply(t,a||[])).next())}));var t,a,l,d}},5663:(e,t,a)=>{a.d(t,{p:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null){return t=this,a=void 0,d=function*(){const t=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),l=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function c(e){try{s(d.next(e))}catch(e){n(e)}}function r(e){try{s(d.throw(e))}catch(e){n(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(c,r)}s((d=d.apply(t,a||[])).next())}));var t,a,l,d}},6404:(e,t,a)=>{a.d(t,{E:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null){return t=this,a=void 0,d=function*(){const t=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),l=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function c(e){try{s(d.next(e))}catch(e){n(e)}}function r(e){try{s(d.throw(e))}catch(e){n(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(c,r)}s((d=d.apply(t,a||[])).next())}));var t,a,l,d}},7790:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null){return t=this,a=void 0,d=function*(){const t=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),l=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function c(e){try{s(d.next(e))}catch(e){n(e)}}function r(e){try{s(d.throw(e))}catch(e){n(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(c,r)}s((d=d.apply(t,a||[])).next())}));var t,a,l,d}},28:(e,t,a)=>{a.d(t,{B:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null){return t=this,a=void 0,d=function*(){const t=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),l=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function c(e){try{s(d.next(e))}catch(e){n(e)}}function r(e){try{s(d.throw(e))}catch(e){n(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(c,r)}s((d=d.apply(t,a||[])).next())}));var t,a,l,d}},4331:(e,t,a)=>{a.d(t,{v:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},2404:(e,t,a)=>{a.d(t,{f:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},706:(e,t,a)=>{a.d(t,{h:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},8698:(e,t,a)=>{a.d(t,{R:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},7824:(e,t,a)=>{a.d(t,{E:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},4843:(e,t,a)=>{a.d(t,{S:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},606:(e,t,a)=>{a.d(t,{I:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},5524:(e,t,a)=>{a.d(t,{n:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},2218:(e,t,a)=>{a.d(t,{u:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},2482:(e,t,a)=>{a.d(t,{p:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},8786:(e,t,a)=>{a.d(t,{s:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},6262:(e,t,a)=>{a.d(t,{a:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},2892:(e,t,a)=>{a.d(t,{c:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null){return t=this,a=void 0,d=function*(){const t=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e),l=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function c(e){try{s(d.next(e))}catch(e){n(e)}}function r(e){try{s(d.throw(e))}catch(e){n(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(c,r)}s((d=d.apply(t,a||[])).next())}));var t,a,l,d}},9605:(e,t,a)=>{a.d(t,{U:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null){return t=this,a=void 0,d=function*(){const t=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e),l=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function c(e){try{s(d.next(e))}catch(e){n(e)}}function r(e){try{s(d.throw(e))}catch(e){n(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(c,r)}s((d=d.apply(t,a||[])).next())}));var t,a,l,d}},6656:(e,t,a)=>{a.d(t,{E:()=>l});var n=a(771),c=a(7270),r=a(596),s=a(3600);function l(e=null,t=""){return a=this,l=void 0,i=function*(){const a=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(l,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,l||[])).next())}));var a,l,d,i}},2715:(e,t,a)=>{var n=a(9392),c=a(9662),r=a(5713),s=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends n.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?n.dy`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:n.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};s([(0,c.C)({type:String}),l("design:type",String)],d.prototype,"aClass",void 0),s([(0,c.C)({type:String}),l("design:type",String)],d.prototype,"bClass",void 0),s([(0,c.C)({type:String}),l("design:type",String)],d.prototype,"icon",void 0),s([(0,c.C)({type:String}),l("design:type",String)],d.prototype,"href",void 0),s([(0,c.C)({type:String}),l("design:type",String)],d.prototype,"label",void 0),s([(0,c.C)({type:String}),l("design:type",String)],d.prototype,"isBlockContent",void 0),s([(0,c.C)({type:Boolean}),l("design:type",Boolean)],d.prototype,"raised",void 0),d=s([(0,r.M)("link-button")],d)},6883:(e,t,a)=>{var n,c=a(9392),r=a(9662),s=a(5713),l=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let i=class extends c.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return c.dy`
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
  `}thead(){return c.dy`
      ${this.dt_head.map((e=>c.dy`<th>${e.title}</th>`))}
    `}tbody(){return c.dy`
      ${this.dt_body.map((e=>c.dy`<tr>${e.map((e=>c.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return c.dy`
    ${this.dt_foot.map((e=>c.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const a=this.ajaxHeader[e];t[e]=a}e.headers=t,this.datatable.ajax=e}console.log({$,table:e,"this.datatable":this.datatable}),$(e).DataTable(this.datatable)}createRenderRoot(){return this}};i.styles=[c.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],l([(0,r.C)({type:Number}),d("design:type",Number)],i.prototype,"randomID1",void 0),l([(0,r.C)({type:Number}),d("design:type",Number)],i.prototype,"randomID2",void 0),l([(0,r.C)({type:String}),d("design:type",String)],i.prototype,"ID",void 0),l([(0,r.C)({type:Object}),d("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],i.prototype,"datatable",void 0),l([(0,r.C)({type:Array}),d("design:type",Array)],i.prototype,"dt_head",void 0),l([(0,r.C)({type:Array}),d("design:type",Array)],i.prototype,"dt_foot",void 0),l([(0,r.C)({type:Array}),d("design:type",Array)],i.prototype,"dt_body",void 0),l([(0,r.C)(),d("design:type",Object)],i.prototype,"ajaxHeader",void 0),i=l([(0,s.M)("datatables-new"),d("design:paramtypes",[])],i)},684:(e,t,a)=>{a.r(t),a.d(t,{AttendanceSetupViewSchedule:()=>Ue});var n=a(3750),c=a(4108),r=a(9392),s=a(9662),l=a(5713),d=(a(5248),a(6811),a(3690),a(1854),a(6883),a(2715),a(2218)),i=a(5663),o=a(6404),u=a(28),h=a(5458),p=a(2831),m=a(771),b=a(6455),v=a.n(b),_=a(7270),f=a(596),y=a(8967),g=a(3600),w=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))},A=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))},C=a(2482),I=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},E=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let k=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleSMSs=null}set _scheduleSMSs(e){this.__scheduleSMSs=e,this.requestUpdate()}get _scheduleSMSs(){return this.__scheduleSMSs}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return E(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleSMS()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting SMS">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Event Message</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Alert Date
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Notify Parent
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Notify Member
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Attendee Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Absentee Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Absentee Alert Message
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Date
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
    `}get tableBody(){return null===this._scheduleSMSs?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleSMSs?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule SMS </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleSMSs.results.map((e=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.eventMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,p.h)(e.alertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.alertDate}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.notifyParent}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.notifyMember}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,p.h)(e.attendeeAlertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,p.h)(e.absenteeAlertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.absenteeAlertMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleSMS(){return E(this,void 0,void 0,(function*(){const e=yield(0,C.p)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleSMSs=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};k.styles=[r.iv`
   :host { display: block; }
  `],I([(0,s.C)({type:Array}),$("design:type",Array)],k.prototype,"DATA",void 0),I([(0,s.C)({type:Number}),$("design:type",Number)],k.prototype,"CLIENT_ID",void 0),I([(0,s.C)({type:Number}),$("design:type",Number)],k.prototype,"meetingEventId",void 0),k=I([(0,l.M)("attendance-setup-view-one-sms"),$("design:paramtypes",[])],k);var S=a(7824),R=a(4173),T=a(1148),L=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let N=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleDays=null}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return D(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleDay()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Day</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      End Date
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
    `}get tableBody(){return null===this._scheduleDays?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleDays?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Day </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleDays.map(((e,t,a)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h.C)(this.getDayOfWeek(e.dayId),r.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,R._)(e.endDate,{dateStyle:"medium"})}
              ${t+1==a.length?"...":""}
            </td>
          </tr>
        `))}
    `}firstUpdayd(){}getAttendanceScheduleDay(){return D(this,void 0,void 0,(function*(){const e=yield(0,S.E)(null,"?meetingEventId="+this.meetingEventId+"&length=5");null===e?this._scheduleDays=void 0:Array.isArray(e.response.data)&&(this._scheduleDays=e.response.data)}))}getDayOfWeek(e){return D(this,void 0,void 0,(function*(){const t=yield(0,T.e)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};N.styles=[r.iv`
   :host { display: block; }
  `],L([(0,s.C)({type:Array}),x("design:type",Array)],N.prototype,"DATA",void 0),L([(0,s.C)({type:Number}),x("design:type",Number)],N.prototype,"CLIENT_ID",void 0),L([(0,s.C)({type:Number}),x("design:type",Number)],N.prototype,"meetingEventId",void 0),N=L([(0,l.M)("attendance-setup-view-one-day"),x("design:paramtypes",[])],N);var B=a(8698),j=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},U=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},M=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let P=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleDates=null}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return M(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleDate()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Date</b>
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
    `}get tableBody(){return null===this._scheduleDates?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleDates?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Date </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleDates.results.map(((e,t,a)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleDate(){return M(this,void 0,void 0,(function*(){const e=yield(0,B.R)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleDates=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};P.styles=[r.iv`
   :host { display: block; }
  `],j([(0,s.C)({type:Array}),U("design:type",Array)],P.prototype,"DATA",void 0),j([(0,s.C)({type:Number}),U("design:type",Number)],P.prototype,"CLIENT_ID",void 0),j([(0,s.C)({type:Number}),U("design:type",Number)],P.prototype,"meetingEventId",void 0),P=j([(0,l.M)("attendance-setup-view-one-date"),U("design:paramtypes",[])],P);var O=a(4843),H=a(2892),G=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},K=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},W=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let z=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleGroups=null}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return W(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleGroup()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Group</b>
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
    `}get tableBody(){return null===this._scheduleGroups?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleGroups?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Group </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleGroups.results.map(((e,t,a)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h.C)(this.getGroup(e.groupId),r.dy`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpgroupd(){}getAttendanceScheduleGroup(){return W(this,void 0,void 0,(function*(){const e=yield(0,O.S)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroup(e){return W(this,void 0,void 0,(function*(){const t=yield(0,H.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};z.styles=[r.iv`
   :host { display: block; }
  `],G([(0,s.C)({type:Array}),K("design:type",Array)],z.prototype,"DATA",void 0),G([(0,s.C)({type:Number}),K("design:type",Number)],z.prototype,"CLIENT_ID",void 0),G([(0,s.C)({type:Number}),K("design:type",Number)],z.prototype,"meetingEventId",void 0),z=G([(0,l.M)("attendance-setup-view-one-group"),K("design:paramtypes",[])],z);var F=a(4331),q=a(6262),V=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},Y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},J=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let Q=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAdmins=null}set _scheduleAdmins(e){this.__scheduleAdmins=e,this.requestUpdate()}get _scheduleAdmins(){return this.__scheduleAdmins}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return J(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAdmin()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Admin Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Meeting Editor
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Agenda Editor
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Clocking Admin
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
    `}get tableBody(){return null===this._scheduleAdmins?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleAdmins?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Admin </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleAdmins.results.map(((e,t,a)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h.C)(this.getAdminUser(e.adminId),r.dy`<span>Loading...</span>`)}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.meetingEditor?r.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:r.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.agendaEditor?r.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:r.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.clockingAdmin?r.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:r.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleAdmin(){return J(this,void 0,void 0,(function*(){const e=yield(0,F.v)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAdmins=null===e?void 0:e.paginResponse}))}getAdminUser(e){return J(this,void 0,void 0,(function*(){const t=yield(0,q.a)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}createRenderRoot(){return this}};Q.styles=[r.iv`
   :host { display: block; }
  `],V([(0,s.C)({type:Array}),Y("design:type",Array)],Q.prototype,"DATA",void 0),V([(0,s.C)({type:Number}),Y("design:type",Number)],Q.prototype,"CLIENT_ID",void 0),V([(0,s.C)({type:Number}),Y("design:type",Number)],Q.prototype,"meetingEventId",void 0),Q=V([(0,l.M)("attendance-setup-view-one-admin"),Y("design:paramtypes",[])],Q);var X=a(706),Z=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},ee=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},te=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let ae=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleBreaks=null}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return te(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Break Start Time</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Time
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
    `}get tableBody(){return null===this._scheduleBreaks?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleBreaks?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Break </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleBreaks.results.map(((e,t,a)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${(0,p.h)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,p.h)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleBreak(){return te(this,void 0,void 0,(function*(){const e=yield(0,X.h)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};ae.styles=[r.iv`
   :host { display: block; }
  `],Z([(0,s.C)({type:Array}),ee("design:type",Array)],ae.prototype,"DATA",void 0),Z([(0,s.C)({type:Number}),ee("design:type",Number)],ae.prototype,"CLIENT_ID",void 0),Z([(0,s.C)({type:Number}),ee("design:type",Number)],ae.prototype,"meetingEventId",void 0),ae=Z([(0,l.M)("attendance-setup-view-one-break"),ee("design:paramtypes",[])],ae);var ne=a(5524),ce=a(6656),re=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},se=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},le=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let de=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleMembers=null}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return le(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Member</b>
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
    `}get tableBody(){return null===this._scheduleMembers?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleMembers?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Member </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleMembers.results.map(((e,t,a)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h.C)(this.getMember(e.memberId),r.dy`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleMember(){return le(this,void 0,void 0,(function*(){const e=yield(0,ne.n)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMember(e){return le(this,void 0,void 0,(function*(){const t=yield(0,ce.E)(e);if(null===t)return"???";if(console.log({"_networkResponse.response":t.response}),t.response.success&&"dateOfBirth"in t.response.data){console.log({"_networkResponse.response":t.response});const e=t.response.data;return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};de.styles=[r.iv`
   :host { display: block; }
  `],re([(0,s.C)({type:Array}),se("design:type",Array)],de.prototype,"DATA",void 0),re([(0,s.C)({type:Number}),se("design:type",Number)],de.prototype,"CLIENT_ID",void 0),re([(0,s.C)({type:Number}),se("design:type",Number)],de.prototype,"meetingEventId",void 0),de=re([(0,l.M)("attendance-setup-view-one-member"),se("design:paramtypes",[])],de);var ie=a(8786),oe=a(9605),ue=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},he=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},pe=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let me=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleSubgroups=null}set _scheduleSubgroups(e){this.__scheduleSubgroups=e,this.requestUpdate()}get _scheduleSubgroups(){return this.__scheduleSubgroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return pe(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule SubGroup</b>
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
    `}get tableBody(){return null===this._scheduleSubgroups?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleSubgroups?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule SubGroup </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleSubgroups.results.map(((e,t,a)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h.C)(this.getSubGroup(e.subGroupId),r.dy`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpsubgroupd(){}getAttendanceScheduleSubGroup(){return pe(this,void 0,void 0,(function*(){const e=yield(0,ie.s)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleSubgroups=null===e?void 0:e.paginResponse}))}getSubGroup(e){return pe(this,void 0,void 0,(function*(){const t=yield(0,oe.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};me.styles=[r.iv`
   :host { display: block; }
  `],ue([(0,s.C)({type:Array}),he("design:type",Array)],me.prototype,"DATA",void 0),ue([(0,s.C)({type:Number}),he("design:type",Number)],me.prototype,"CLIENT_ID",void 0),ue([(0,s.C)({type:Number}),he("design:type",Number)],me.prototype,"meetingEventId",void 0),me=ue([(0,l.M)("attendance-setup-view-one-subgroup"),he("design:paramtypes",[])],me);var be=a(606),ve=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},fe=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let ye=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleLocations=null}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return fe(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Location Latitude</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
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
    `}get tableBody(){return null===this._scheduleLocations?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleLocations?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Location </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleLocations.results.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.latitude}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.longitude}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.radius}
            </td>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleLocation(){return fe(this,void 0,void 0,(function*(){const e=yield(0,be.I)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};ye.styles=[r.iv`
   :host { display: block; }
  `],ve([(0,s.C)({type:Array}),_e("design:type",Array)],ye.prototype,"DATA",void 0),ve([(0,s.C)({type:Number}),_e("design:type",Number)],ye.prototype,"CLIENT_ID",void 0),ve([(0,s.C)({type:Number}),_e("design:type",Number)],ye.prototype,"meetingEventId",void 0),ye=ve([(0,l.M)("attendance-setup-view-one-location"),_e("design:paramtypes",[])],ye);var ge=a(2404),we=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},Ae=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Ce=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let Ie=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAttachments=null}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return Ce(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return r.dy`${this.table}`}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Attachment Field(s)</b>
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
    `}get tableBody(){return null===this._scheduleAttachments?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleAttachments?r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Attachment </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:r.dy`
      ${this._scheduleAttachments.results.map(((e,t,a)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${m.t.URLS.FILE_BUCKET_BASE_URL}files${e.attachment}" target="_blank">Open File ${t+1}</a>
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleAttachment(){return Ce(this,void 0,void 0,(function*(){const e=yield(0,ge.f)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};Ie.styles=[r.iv`
   :host { display: block; }
  `],we([(0,s.C)({type:Array}),Ae("design:type",Array)],Ie.prototype,"DATA",void 0),we([(0,s.C)({type:Number}),Ae("design:type",Number)],Ie.prototype,"CLIENT_ID",void 0),we([(0,s.C)({type:Number}),Ae("design:type",Number)],Ie.prototype,"meetingEventId",void 0),Ie=we([(0,l.M)("attendance-setup-view-one-attachment"),Ae("design:paramtypes",[])],Ie);var $e=a(7790),Ee=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},ke=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Se=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function l(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,l)}d((n=n.apply(e,t||[])).next())}))};let Re=class extends r.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__schedule=null}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return Se(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){return null===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`${this.schedule}`}get schedule(){const e=this._schedule.data;return r.dy`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-4"
        href="${m.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <mwc-icon-button class="ml-4 danger -mt-2 mb-2" icon="delete_forever" delete-this-item="${this.meetingEventId}"
        @click="${this.deleteMeetingEvent}"></mwc-icon-button>
      ${this.table}
      <div class="row">
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-admin CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-admin>
        </div>
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-attachment CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-attachment>
        </div>
        ${e.hasBreakTime?r.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-break CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-break>
          </div>`:r.dy``}
        ${e.isRecuring?r.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-day CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-day>
          </div>`:r.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-date CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-date>
          </div>`}
        ${1===e.memberType?r.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-member CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-member>
          </div>`:r.dy``}
        ${2===e.memberType?r.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-group CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-group>
          </div>`:r.dy``}
        ${3===e.memberType?r.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-subgroup CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-subgroup>
          </div>`:r.dy``}
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-location CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-location>
        </div>
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-sms CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-sms>
        </div>
      </div>
    `}get table(){return r.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Field(s)</b>
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
    `}get tableBody(){const e=this._schedule.data;if(!Array.isArray(e))return r.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Name
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.name}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,h.C)(this.getType(e.type),r.dy`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Member Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,h.C)(this.getMemberType(e.memberType),r.dy`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Branch
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.branchId.name}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Member Category
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.memberCategoryId.category}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Span <span class="text-xs text-gray-700">How long the meeting/ event will last (default is 1 day)</span>
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.meetingSpan} day${e.meetingSpan>1?"s":""} 
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Start Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,p.h)(e.startTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Close Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,p.h)(e.closeTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Lateness Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,p.h)(e.latenessTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Is Recuring
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.isRecuring}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Has Break Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.hasBreakTime}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Virtual Meeting Link
          </th>
          <td class="mdc-data-table__cell" scope="row">
            <a href="${e.virtualMeetingLink}">${e.virtualMeetingLink}</a>
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Virtual Meeting Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,h.C)(this.getMeetingEventLinkType(e.virtualMeetingType),r.dy`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Location
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,h.C)(this.getMeetingEventLocation(e.meetingLocation),r.dy`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Expected Monthly Attendance
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.expectedMonthlyAttendance}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Active Monthly Attendance
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.activeMonthlyAttendance}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Agenda
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.agenda}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Agenda File
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${0===e.agendaFile.length?"-":r.dy`<a href="${m.t.URLS.FILE_BUCKET_BASE_URL}files/${e.agendaFile}" target="_blank">Open File</a>
              <mwc-icon-button class="ml-4 danger" icon="delete_forever" delete-this-item="${this.meetingEventId}"
                @click="${this.deleteMeetingEventAgendaFile}"></mwc-icon-button>`}
          </td>
        </tr>
      `}firstUpdated(){}getAttendanceSchedule(){return Se(this,void 0,void 0,(function*(){const e=yield(0,d.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getType(e){return Se(this,void 0,void 0,(function*(){const t=yield(0,u.B)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMemberType(e){return Se(this,void 0,void 0,(function*(){const t=yield(0,$e.Z)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMeetingEventLinkType(e){return Se(this,void 0,void 0,(function*(){const t=yield(0,i.p)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMeetingEventLocation(e){return Se(this,void 0,void 0,(function*(){const t=yield(0,o.E)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}deleteMeetingEvent(e){return Se(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),a=m.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/"+e,n={};return v().fire({title:"Remove Meeting/ Event?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,_.d)(a,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new f.H("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,y.T)(e);v().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const n=new f.H("delete",a,!0);return n.postForm,n}})).catch((e=>{v().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!v().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),a=n.response.success}v().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}deleteMeetingEventAgendaFile(e){return Se(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return A(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),a=m.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/delete_agenda_file/"+e,n={delete:"this"};return v().fire({title:"Remove Agenda File?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>A(this,void 0,void 0,(function*(){return yield(0,_.d)(a,{method:"PATCH",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!0).then((e=>{try{const t=new f.H("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,y.T)(e);v().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const n=new f.H("delete",a,!0);return n.postForm,n}})).catch((e=>{v().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!v().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),a=n.response.success}v().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}createRenderRoot(){return this}};Re.styles=[r.iv`
   :host { display: block; }
  `],Ee([(0,s.C)({type:Array}),ke("design:type",Array)],Re.prototype,"DATA",void 0),Ee([(0,s.C)({type:Number}),ke("design:type",Number)],Re.prototype,"CLIENT_ID",void 0),Ee([(0,s.C)({type:Number}),ke("design:type",Number)],Re.prototype,"meetingEventId",void 0),Re=Ee([(0,l.M)("attendance-setup-view-one-schedule"),ke("design:paramtypes",[])],Re);var Te,Le=a(4672),xe=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},De=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ne=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,a=void 0,c=function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,Le.O1)(),this.getMeetingEventId()},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{d(c.next(e))}catch(e){r(e)}}function l(e){try{d(c.throw(e))}catch(e){r(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(s,l)}d((c=c.apply(t,a||[])).next())}));var t,a,n,c}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return r.dy`<div class="row">
      <div class="col-md-12 my-2">
        <attendance-setup-view-one-schedule CLIENT_ID="${this.CLIENT_ID}" 
          meetingEventId="${this.meetingEventId}">
        </attendance-setup-view-one-schedule>
      </div>
    </div>`}firstUpdated(){}getMeetingEventId(){let e=(0,Le.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};Ne.styles=[r.iv`
   :host { display: block; }
  `],xe([(0,s.C)({type:Number}),De("design:type",Number)],Ne.prototype,"CLIENT_ID",void 0),xe([(0,s.C)({type:Array}),De("design:type","function"==typeof(Te="undefined"!=typeof Array&&Array)?Te:Object)],Ne.prototype,"_data",void 0),xe([(0,s.C)({type:Object}),De("design:type",Object)],Ne.prototype,"urlQueryParams",void 0),xe([(0,s.C)({type:Number}),De("design:type",Number)],Ne.prototype,"meetingEventId",void 0),Ne=xe([(0,l.M)("attendance-setup-view-one"),De("design:paramtypes",[])],Ne);var Be=function(e,t,a,n){var c,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(t,a,s):c(t,a))||s);return r>3&&s&&Object.defineProperty(t,a,s),s},je=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ue=class extends r.oi{constructor(){super(),(0,n.A)()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,a=void 0,r=function*(){e.connectedCallback.call(this),yield(0,c.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,c){function s(e){try{d(r.next(e))}catch(e){c(e)}}function l(e){try{d(r.throw(e))}catch(e){c(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(s,l)}d((r=r.apply(t,a||[])).next())}));var t,a,n,r}disconnectedCallback(){}render(){return r.dy`<attendance-setup-view-one CLIENT_ID="${this.clientId}"></attendance-setup-view-one>`}firstUpdated(){}createRenderRoot(){return this}};Be([(0,s.C)({type:String}),je("design:type",String)],Ue.prototype,"email",void 0),Be([(0,s.C)({type:Number}),je("design:type",Number)],Ue.prototype,"mId",void 0),Be([(0,s.C)({type:Number}),je("design:type",Number)],Ue.prototype,"clientId",void 0),Ue=Be([(0,l.M)("attendance-setup-view-schedule"),je("design:paramtypes",[])],Ue)},5458:(e,t,a)=>{a.d(t,{C:()=>v});var n=a(3692),c=a(875),r=a(4232);const s=(e,t)=>{var a,n;const c=e._$AN;if(void 0===c)return!1;for(const e of c)null===(n=(a=e)._$AO)||void 0===n||n.call(a,t,!1),s(e,t);return!0},l=e=>{let t,a;do{if(void 0===(t=e._$AM))break;a=t._$AN,a.delete(e),e=t}while(0===(null==a?void 0:a.size))},d=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(void 0===a)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),u(t)}};function i(e){void 0!==this._$AN?(l(this),this._$AM=e,d(this)):this._$AM=e}function o(e,t=!1,a=0){const n=this._$AH,c=this._$AN;if(void 0!==c&&0!==c.size)if(t)if(Array.isArray(n))for(let e=a;e<n.length;e++)s(n[e],!1),l(n[e]);else null!=n&&(s(n,!1),l(n));else s(this,e)}const u=e=>{var t,a,n,r;e.type==c.pX.CHILD&&(null!==(t=(n=e)._$AP)&&void 0!==t||(n._$AP=o),null!==(a=(r=e)._$AQ)&&void 0!==a||(r._$AQ=i))};class h extends c.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),d(this),this.isConnected=e._$AU}_$AO(e,t=!0){var a,n;e!==this.isConnected&&(this.isConnected=e,e?null===(a=this.reconnected)||void 0===a||a.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(s(this,e),l(this))}setValue(e){if((0,r.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class p{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class m{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Y=this.q=void 0}}const b=e=>!(0,r.pt)(e)&&"function"==typeof e.then,v=(0,c.XM)(class extends h{constructor(){super(...arguments),this._$Cft=1073741823,this._$Cwt=[],this._$CG=new p(this),this._$CK=new m}render(...e){var t;return null!==(t=e.find((e=>!b(e))))&&void 0!==t?t:n.Jb}update(e,t){const a=this._$Cwt;let c=a.length;this._$Cwt=t;const r=this._$CG,s=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cft);e++){const n=t[e];if(!b(n))return this._$Cft=e,n;e<c&&n===a[e]||(this._$Cft=1073741823,c=0,Promise.resolve(n).then((async e=>{for(;s.get();)await s.get();const t=r.deref();if(void 0!==t){const a=t._$Cwt.indexOf(n);a>-1&&a<t._$Cft&&(t._$Cft=a,t.setValue(e))}})))}return n.Jb}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}})}},e=>(e.O(0,[2185,5744,9674,9564,2459,7879,5291,214,948,6773,3712],(()=>(684,e(e.s=684)))),e.O())])}));
//# sourceMappingURL=schedule.js.map